module.exports = [
  {
    id: 80,
    title: "Queues va jobs: ishonchli fon ishlari",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Navbat (queue) uzoq davom etadigan ishlarni HTTP so'rovidan ajratadi: email, hisobot, rasm qayta ishlash, tashqi API sinxronizatsiyasi. Laravel'da job <code>ShouldQueue</code> interfeysini bajaradi, worker esa uni fonda bajaradi. Muhim savol — job qayta bajarilsa nima bo'ladi?",
      },
      {
        type: "code",
        title: "app/Jobs/HisobotYubor.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace App\Jobs;

use App\Services\HisobotServisi;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

final class HisobotYubor implements ShouldQueue
{
    use Queueable;

    public int $tries = 3;
    public array $backoff = [10, 60, 300];
    public int $timeout = 120;

    public function __construct(public string $oy) {}

    public function handle(HisobotServisi $servis): void
    {
        $servis->yarat($this->oy);
        logger()->info('Hisobot tayyor', ['oy' => $this->oy]);
    }

    public function failed(\Throwable $e): void
    {
        logger()->error('Hisobot yiqildi', ['xato' => $e->getMessage()]);
    }
}

HisobotYubor::dispatch('2026-10')->onQueue('hisobot');`,
        outputLabel: "Natija (php artisan queue:work --queue=hisobot)",
        output: "[2026-10-25 10:00:01] Processing App\\Jobs\\HisobotYubor\n[2026-10-25 10:00:03] Hisobot tayyor {\"oy\":\"2026-10\"}\n[2026-10-25 10:00:03] Processed App\\Jobs\\HisobotYubor",
      },
      {
        type: "p",
        html: "<code>tries</code> urinishlar sonini, <code>backoff</code> orasidagi kutishni, <code>timeout</code> esa bitta urinish chegarasini belgilaydi. Job exception otsa, navbat uni qayta qo'yadi; barcha urinishlar tugasa <code>failed_jobs</code> jadvaliga tushadi. <code>failed()</code> metodi oxirgi holat uchun log yoki alert yuboradi.",
      },
      {
        type: "code",
        title: "app/Jobs/OmborSinxronla.php",
        code: String.raw`<?php
namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

final class OmborSinxronla implements ShouldQueue, ShouldBeUnique
{
    use Queueable;

    public int $uniqueFor = 3600;

    public function __construct(public int $omborId) {}

    public function uniqueId(): string
    {
        return 'ombor-' . $this->omborId;
    }

    public function handle(): void
    {
        logger()->info('Ombor sinxronlandi', ['ombor' => $this->omborId]);
    }
}

$job = new OmborSinxronla(7);
echo $job->uniqueId(), PHP_EOL;
echo $job->uniqueFor, " sekund\n";
OmborSinxronla::dispatch(7)->onQueue('sinxron');
echo "Navbatga qo'yildi\n";`,
        outputLabel: "Natija",
        output: "ombor-7\n3600 sekund\nNavbatga qo'yildi",
      },
      {
        type: "table",
        head: ["Sozlama / buyruq", "Vazifasi", "Eslatma"],
        rows: [
          ["queue:work", "Worker jarayoni", "Uzoq ishlaydi, deployda restart"],
          ["queue:listen", "Har jobda kodni qayta yuklaydi", "Sekin, faqat lokal"],
          ["failed:table", "Muvaffaqiyatsiz joblar", "Monitoring uchun"],
          ["queue:retry", "Jobni qayta urinish", "Sabab tuzatilgach"],
          ["ShouldBeUnique", "Bir xil job takrorlanmasin", "Redis lock"],
          ["afterCommit()", "Tranzaksiyadan keyin dispatch", "Ma'lumot izchilligi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Job idempotent bo'lsin",
        html: "Navbat kamida bir marta yetkazish (at-least-once) modelida ishlaydi: job muvaffaqiyatli bajarilib, natija qayd etilishidan oldin worker o'lishi mumkin. Email yuborish yoki to'lov kabi amallarni idempotency key, unique constraint yoki holat tekshiruvi bilan himoyalang.",
      },
      {
        type: "ul",
        items: [
          "Job ichida katta Eloquent modelini emas, ID va kerakli ma'lumotni saqlang.",
          "`$this->fail($e)` bilan jobni darhol muvaffaqiyatsiz qilish mumkin.",
          "Worker'ni deployda `queue:restart` bilan yangilang.",
          "Navbatlarni prioritet bo'yicha ajrating: `--queue=yuqori,past`.",
        ],
      },
    ],
    quiz: [
      {
        q: "Job uch marta urinishdan keyin ham yiqilsa, u qayerda qoladi?",
        options: ["failed_jobs jadvalida", "Sessiyada", "OPcache'da", "Migratsiyada"],
        answer: 0,
        explain: "Barcha urinishlar tugagach, Laravel jobni `failed_jobs` jadvaliga yozadi (configure bo'lsa).",
      },
      {
        q: "`backoff = [10, 60, 300]` nimani anglatadi?",
        options: [
          "Urinishlar orasidagi kutish soniyalari",
          "Job timeoutlari",
          "Navbatlar soni",
          "Workerlar soni",
        ],
        answer: 0,
        explain: "Har bir qayta urinish oldidan mos kutish vaqti qo'llanadi: 10, 60, 300 sekund.",
      },
      {
        q: "Nega job idempotent bo'lishi kerak?",
        options: [
          "Job bir necha marta bajarilishi mumkin",
          "Job hech qachon xato bermaydi",
          "Navbat SQL ishlatmaydi",
          "Worker har doim bitta",
        ],
        answer: 0,
        explain: "At-least-once yetkazishda job takrorlanishi mumkin; takroriy to'lov yoki email oldini olish kerak.",
      },
    ],
  },
  {
    id: 81,
    title: "Events, listeners va broadcasting",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Event — ilovada sodir bo'lgan fakt, listener esa unga munosabat. Bu yondashuv buyurtma yaratish kodini email, ombor va analitika bilan bog'lashdan qutqaradi. <b>Broadcasting</b> eventni WebSocket orqali brauzerga real vaqtda yetkazadi.",
      },
      {
        type: "code",
        title: "app/Events/BuyurtmaYaratildi.php",
        code: String.raw`<?php
namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

final class BuyurtmaYaratildi implements ShouldBroadcast
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public int $id,
        public int $summa,
    ) {}

    public function broadcastOn(): array
    {
        return [new PrivateChannel('buyurtma.' . $this->id)];
    }

    public function broadcastAs(): string
    {
        return 'buyurtma.yaratildi';
    }

    public function broadcastWith(): array
    {
        return ['id' => $this->id, 'summa' => $this->summa];
    }
}`,
        outputLabel: "Natija (WebSocket frame)",
        output: "{\"event\":\"buyurtma.yaratildi\",\"channel\":\"private-buyurtma.7\",\"data\":{\"id\":7,\"summa\":120000}}",
      },
      {
        type: "p",
        html: "Listener'ni navbatga qo'yish uchun <code>ShouldQueue</code> qo'shiladi. <code>event(new BuyurtmaYaratildi(...))</code> sinxron listenerlarni darhol, queued listenerlarni esa worker orqali ishga tushiradi. Broadcasting ham odatda navbat orqali yuboriladi, shuning uchun HTTP javobi WebSocket kutmaydi.",
      },
      {
        type: "code",
        title: "listener.php",
        code: String.raw`<?php
namespace App\Listeners;

use App\Events\BuyurtmaYaratildi;
use Illuminate\Contracts\Queue\ShouldQueue;

final class OmborBandQil implements ShouldQueue
{
    public function handle(BuyurtmaYaratildi $event): void
    {
        logger()->info('Ombor band qilindi', ['buyurtma' => $event->id]);
    }
}

event(new BuyurtmaYaratildi(7, 120000));
echo "Event yuborildi\n";`,
        outputLabel: "Natija",
        output: "Event yuborildi\n[2026-10-25 10:01:00] production.INFO: Ombor band qilindi {\"buyurtma\":7}",
      },
      {
        type: "table",
        head: ["Qism", "Vazifasi", "Muhim sozlama"],
        rows: [
          ["Event", "Faktni ifodalaydi", "Payload immutable bo'lsin"],
          ["Listener", "Faktga munosabat", "ShouldQueue"],
          ["ShouldBroadcast", "WebSocket'ga yuboradi", "broadcastOn, broadcastWith"],
          ["afterCommit", "Tranzaksiyadan keyin", "Yo'qolgan eventlarni oldini oladi"],
          ["Event::listen", "Qo'lda ro'yxat", "Kichik ilovalar"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Broadcast autentifikatsiyasi",
        html: "Private va presence kanallar uchun <code>routes/channels.php</code> da ruxsat tekshiriladi. Kanal nomiga foydalanuvchi ID'sini qo'shish yetarli emas: server tomonda ham egalikni tasdiqlang. Public kanallarga maxfiy ma'lumot yubormang.",
      },
      {
        type: "ul",
        items: [
          "Event nomi o'tgan zamonda: `BuyurtmaYaratildi`.",
          "Listener'larni avto-discovery yoki `EventServiceProvider` bilan ro'yxatdan o'tkazing.",
          "Broadcast eventini `ShouldBroadcastNow` bilan sinxron yuborish mumkin, lekin HTTP'ni bloklaydi.",
          "Katta payload o'rniga ID yuborib, mijozga kerakli ma'lumotni API'dan oling.",
        ],
      },
    ],
    quiz: [
      {
        q: "Event va listener orasidagi bog'lanish qanday foyda beradi?",
        options: [
          "Yuboruvchini tinglovchilardan ajratadi",
          "SQL so'rovlarni tezlashtiradi",
          "PHP versiyasini oshiradi",
          "Fayllarni siqadi",
        ],
        answer: 0,
        explain: "Event yuboruvchi listenerlar ro'yxatini bilmaydi; yangi reaksiya qo'shish osonlashadi.",
      },
      {
        q: "`ShouldBroadcast` eventi qayerga yuboriladi?",
        options: ["WebSocket kanaliga", "Faqat logga", "PDO bazasiga", "Fayl tizimiga"],
        answer: 0,
        explain: "Broadcast eventi `broadcastOn()` kanaliga real vaqtda yuboriladi.",
      },
      {
        q: "Private kanalga ruxsat qayerda tekshiriladi?",
        options: [
          "`routes/channels.php` dagi callback'da",
          "Faqat brauzerda",
          "Migratsiyada",
          "Composer'da",
        ],
        answer: 0,
        explain: "Kanal avtorizatsiyasi serverda `Broadcast::channel()` callback'i orqali tekshiriladi.",
      },
    ],
  },
  {
    id: 82,
    title: "Sanctum va API autentifikatsiyasi",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "API uchun sessiya cookie emas, token qulay. Laravel <b>Sanctum</b> mobil va uchinchi tomon mijozlar uchun oddiy token, SPA uchun esa cookie-based autentifikatsiya beradi. Tokenlar bazada hash ko'rinishida saqlanadi va abilities (ruxsatlar) bilan cheklanadi.",
      },
      {
        type: "code",
        title: "AuthController.php",
        code: String.raw`<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

final class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json(['message' => "Ma'lumotlar noto'g'ri"], 401);
        }

        $token = $user->createToken('mobile', ['kitob:read'])->plainTextToken;

        return response()->json([
            'token' => $token,
            'abilities' => ['kitob:read'],
        ], 201);
    }
}`,
        outputLabel: "Natija (POST /api/v1/login)",
        output: "HTTP/1.1 201 Created\n{\"token\":\"1|8fK2pQ...\",\"abilities\":[\"kitob:read\"]}",
      },
      {
        type: "p",
        html: "Himoyalangan route'ga <code>auth:sanctum</code> middleware qo'shiladi. Mijoz tokenni <code>Authorization: Bearer ...</code> sarlavhasida yuboradi. <code>abilities</code> middleware yoki <code>$user->tokenCan()</code> bilan tokenning huquqlarini tekshirish mumkin.",
      },
      {
        type: "code",
        title: "routes/api.php",
        code: String.raw`<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/v1/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function (): void {
    Route::get('/v1/profil', function (Request $request) {
        return response()->json([
            'id' => $request->user()->id,
            'ism' => $request->user()->name,
        ]);
    });

    Route::get('/v1/kitoblar', function (Request $request) {
        return response()->json(['data' => []]);
    })->middleware('abilities:kitob:read');
});

// Tokensiz so'rov:
// HTTP/1.1 401 Unauthorized
// {"message":"Unauthenticated."}`,
        outputLabel: "Natija (GET /api/v1/profil)",
        output: "HTTP/1.1 200 OK\n{\"id\":1,\"ism\":\"Aziza\"}",
      },
      {
        type: "table",
        head: ["Vosita", "Mos holat", "Xususiyat"],
        rows: [
          ["Sanctum token", "Mobil, CLI, uchinchi tomon", "Yengil, abilities"],
          ["Sanctum SPA", "Birinchi tomon SPA", "Cookie + CSRF"],
          ["Passport", "To'liq OAuth2", "Client, scope, refresh token"],
          ["JWT", "Stateless tashqi tizim", "O'z hayot sikli"],
          ["Session", "An'anaviy veb", "Cookie, server holati"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Tokenlarni boshqaring",
        html: "Login'da eski tokenlarni tozalash strategiyasini tanlang: qurilma bo'yicha bitta token yoki har login'da yangi token. Logout'da <code>$request->user()->currentAccessToken()->delete()</code> chaqiring. Tokenlarni logga yozmang va HTTPS'siz yubormang.",
      },
      {
        type: "ul",
        items: [
          "Token abilities'ni minimal bering: `kitob:read`, `kitob:write`.",
          "`tokenCan()` Blade yoki controllerda qo'shimcha tekshiruv uchun ishlatiladi.",
          "Token expiry'ni `config/sanctum.php` da sozlang.",
          "401 — token yo'q yoki noto'g'ri; 403 — token bor, ruxsat yo'q.",
        ],
      },
    ],
    quiz: [
      {
        q: "Sanctum tokeni qanday yuboriladi?",
        options: [
          "Authorization: Bearer <token>",
          "Faqat URL parametrida",
          "Faqat cookie'da",
          "POST tanasida har doim",
        ],
        answer: 0,
        explain: "Sanctum bearer tokenni `Authorization` sarlavhasida kutadi; SPA rejimida cookie ham ishlatiladi.",
      },
      {
        q: "Token abilities nima uchun kerak?",
        options: [
          "Token huquqlarini cheklash uchun",
          "Parolni hash qilish uchun",
          "Bazani migratsiya qilish uchun",
          "Rasmni siqish uchun",
        ],
        answer: 0,
        explain: "Abilities token bilan bajarilishi mumkin bo'lgan amallarni cheklaydi; minimal huquq bering.",
      },
      {
        q: "Foydalanuvchi token yubormagan bo'lsa, API qaysi status qaytarishi kerak?",
        options: ["200", "401", "403", "422"],
        answer: 1,
        explain: "Autentifikatsiya yo'qligi 401 Unauthorized; ruxsat yetishmasligi esa 403.",
      },
    ],
  },
  {
    id: 83,
    title: "Middleware pipeline va request lifecycle",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Har bir HTTP so'rov Laravel yadrosidan middleware zanjiri orqali o'tadi. Middleware so'rovni tekshirishi, o'zgartirishi yoki javobni qaytarishi mumkin. <code>handle()</code> oldin va keyin kod bajarish, <code>terminate()</code> esa javob yuborilgandan keyin og'ir bo'lmagan ishlarni bajarish uchun.",
      },
      {
        type: "code",
        title: "app/Http/Middleware/KorishLogi.php",
        code: String.raw`<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

final class KorishLogi
{
    public function handle(Request $request, Closure $next): Response
    {
        $bosh = hrtime(true);
        $response = $next($request);
        $ms = (hrtime(true) - $bosh) / 1e6;

        $response->headers->set('X-Response-Time', number_format($ms, 1) . 'ms');
        return $response;
    }
}`,
        outputLabel: "Natija (javob sarlavhasi)",
        output: "X-Response-Time: 12.4ms",
      },
      {
        type: "p",
        html: "Middleware'ni global, guruh yoki route darajasida ulash mumkin. Laravel 11+ da global middleware <code>bootstrap/app.php</code> dagi <code>->withMiddleware()</code> orqali sozlanadi. Tartib muhim: autentifikatsiya logdan oldin, throttling esa controllerdan oldin ishlashi kerak.",
      },
      {
        type: "code",
        title: "bootstrap/app.php",
        code: String.raw`<?php
use App\Http\Middleware\KorishLogi;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->append(KorishLogi::class);
        $middleware->alias([
            'log.korish' => KorishLogi::class,
        ]);
    })
    ->create();`,
        outputLabel: "Natija (php artisan route:list -v)",
        output: "GET|HEAD  api/v1/kitoblar ... log.korish, auth:sanctum",
      },
      {
        type: "table",
        head: ["Middleware turi", "Qamrov", "Misol"],
        rows: [
          ["Global", "Barcha so'rovlar", "TrustProxies, KorishLogi"],
          ["Guruh", "web yoki api", "StartSession, throttling"],
          ["Route", "Bitta route", "auth:sanctum, abilities"],
          ["Terminable", "Javobdan keyin", "Log yozish, metrika"],
          ["Priority", "Tartibni boshqaradi", "Auth -> throttle -> controller"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "State'ni so'rovga bog'lang",
        html: "Octane yoki uzoq ishlaydigan workerda singleton ichida so'rov ma'lumotini saqlamang: keyingi so'rov eski holatni ko'rishi mumkin. So'rovga bog'liq holat uchun <code>scoped()</code> yoki request obyektidan foydalaning. Middleware'da global o'zgaruvchilarni o'zgartirmang.",
      },
      {
        type: "ul",
        items: [
          "`$next($request)` natijasini qaytarishni unutmang, aks holda javob yo'qoladi.",
          "Middleware'da og'ir I/O qilmang; uni navbatga o'tkazing.",
          "`terminate()` ichida foydalanuvchiga javobni bloklamang.",
          "Route middleware'ni `->middleware([...])` bilan aniq tartibda bering.",
        ],
      },
    ],
    quiz: [
      {
        q: "Middleware'da `$next($request)` nima qiladi?",
        options: [
          "So'rovni keyingi qatlamga uzatadi",
          "So'rovni butunlay to'xtatadi",
          "Yangi route yaratadi",
          "Bazani tozalaydi",
        ],
        answer: 0,
        explain: "`$next` keyingi middleware yoki controller'ni chaqiradi va javobni qaytaradi.",
      },
      {
        q: "`terminate()` metodi qachon ishlaydi?",
        options: [
          "Javob foydalanuvchiga yuborilgandan keyin",
          "Route topilishidan oldin",
          "Faqat testlarda",
          "Har migratsiyada",
        ],
        answer: 0,
        explain: "Terminable middleware javob yuborilgach ishlaydi; log va metrika uchun mos.",
      },
      {
        q: "Autentifikatsiya va throttling tartibi qanday bo'lishi mantiqan to'g'ri?",
        options: [
          "Throttling avval, auth keyin",
          "Auth avval, keyin throttling",
          "Tartib muhim emas",
          "Faqat controller ichida",
        ],
        answer: 1,
        explain: "Avval foydalanuvchini aniqlash, keyin uning so'rovlarini cheklash odatiy va xavfsizroq.",
      },
    ],
  },
  {
    id: 84,
    title: "Laravel testlash: HTTP, database va fake'lar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Laravel feature testi butun HTTP oqimini tekshiradi: route, middleware, controller, validation va JSON javob. <code>RefreshDatabase</code> har testni toza bazada boshlaydi. Tashqi xizmatlar uchun <code>Queue::fake()</code>, <code>Event::fake()</code>, <code>Http::fake()</code> ishlatiladi.",
      },
      {
        type: "code",
        title: "tests/Feature/KitobRuxsatTest.php",
        code: String.raw`<?php
namespace Tests\Feature;

use App\Models\Kitob;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class KitobRuxsatTest extends TestCase
{
    use RefreshDatabase;

    public function testAdminKitobniOchiradi(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);
        $kitob = Kitob::factory()->create();

        $this->actingAs($admin, 'sanctum')
            ->deleteJson("/api/v1/kitoblar/{$kitob->id}")
            ->assertNoContent();

        $this->assertDatabaseMissing('kitoblar', ['id' => $kitob->id]);
    }

    public function testOddiyFoydalanuvchiTaqiqlanadi(): void
    {
        $user = User::factory()->create(['is_admin' => false]);
        $kitob = Kitob::factory()->create();

        $this->actingAs($user, 'sanctum')
            ->deleteJson("/api/v1/kitoblar/{$kitob->id}")
            ->assertForbidden();
    }
}`,
        outputLabel: "Natija",
        output: "PASS  Tests\Feature\KitobRuxsatTest\n  ✓ admin kitobni ochiradi\n  ✓ oddiy foydalanuvchi taqiqlanadi\n\nTests:  2 passed (4 assertions)",
      },
      {
        type: "p",
        html: "Navbatga qo'yilgan jobni haqiqiy bajarmasdan tekshirish uchun <code>Queue::fake()</code> ishlatiladi. Test yakunida <code>assertPushed()</code> job sinfi va argumentlarini tekshiradi. Bu testni tez va deterministik qiladi, lekin job ichidagi mantiqni alohida unit testda sinash kerak.",
      },
      {
        type: "code",
        title: "tests/Feature/HisobotTest.php",
        code: String.raw`<?php
namespace Tests\Feature;

use App\Jobs\HisobotYubor;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;

final class HisobotTest extends TestCase
{
    use RefreshDatabase;

    public function testHisobotNavbatgaQoyiladi(): void
    {
        Queue::fake();
        $user = User::factory()->create();

        $this->actingAs($user, 'sanctum')
            ->postJson('/api/v1/hisobotlar', ['oy' => '2026-10'])
            ->assertAccepted();

        Queue::assertPushed(HisobotYubor::class, function (HisobotYubor $job): bool {
            return $job->oy === '2026-10';
        });
    }
}`,
        outputLabel: "Natija",
        output: "PASS  Tests\Feature\HisobotTest\n  ✓ hisobot navbatga qoyiladi\n\nTests:  1 passed (2 assertions)",
      },
      {
        type: "table",
        head: ["Fake / trait", "Nimani almashtiradi", "Asosiy assertion"],
        rows: [
          ["Queue::fake()", "Navbat", "assertPushed()"],
          ["Event::fake()", "Event dispatcher", "assertDispatched()"],
          ["Http::fake()", "Tashqi HTTP", "assertSent()"],
          ["Storage::fake()", "Fayl tizimi", "assertExists()"],
          ["RefreshDatabase", "Baza holati", "assertDatabaseHas()"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Testlarni parallel qiling",
        html: "Laravel <code>php artisan test --parallel</code> bilan testlarni jarayonlarga bo'ladi. Har bir jarayon o'z bazasini olishi kerak; <code>RefreshDatabase</code> va SQLite bilan ehtiyot bo'ling. CI'da vaqtni qisqartirish uchun unit testlarni alohida ishga tushiring.",
      },
      {
        type: "ul",
        items: [
          "Feature testda status, JSON tuzilishi va bazadagi natijani birga tekshiring.",
          "`actingAs($user, 'sanctum')` token yaratmasdan autentifikatsiya qiladi.",
          "Har testda factory'dan foydalaning; qo'lda ID yozmang.",
          "Xato javobida `assertJsonValidationErrors()` bilan maydonlarni tekshiring.",
        ],
      },
    ],
    quiz: [
      {
        q: "`Queue::fake()` nima qiladi?",
        options: [
          "Jobni navbatga qo'yadi",
          "Job bajarilishini to'xtatib, chaqiruvni yozib oladi",
          "Navbatni o'chiradi",
          "Worker ishga tushiradi",
        ],
        answer: 1,
        explain: "Fake navbatni almashtiradi; job bajarilmaydi, lekin `assertPushed()` bilan tekshiriladi.",
      },
      {
        q: "`actingAs($user, 'sanctum')` nima uchun ishlatiladi?",
        options: [
          "Foydalanuvchini autentifikatsiya qilingan holda so'rov yuborish",
          "Yangi token yaratish",
          "Bazani tozalash",
          "Queue'ni ishga tushirish",
        ],
        answer: 0,
        explain: "Testda haqiqiy token yaratmasdan foydalanuvchini autentifikatsiya qilingan sifatida ko'rsatadi.",
      },
      {
        q: "Ruxsat yo'qligini feature testda qaysi assertion tekshiradi?",
        options: ["assertOk()", "assertForbidden()", "assertCreated()", "assertRedirect()"],
        answer: 1,
        explain: "`assertForbidden()` 403 statusini tekshiradi; 401 uchun `assertUnauthorized()` ishlatiladi.",
      },
    ],
  },
  {
    id: 85,
    title: "REST API dizayni va versiyalash",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "REST — resurslar atrofida qurilgan uslub: URL ot, HTTP metod fe'l, status kod esa natija. <code>GET</code> o'qish, <code>POST</code> yaratish, <code>PUT/PATCH</code> yangilash, <code>DELETE</code> o'chirish. Yaxshi API bashoratli: bir xil xatolar, bir xil pagination va bir xil nomlash qoidalari.",
      },
      {
        type: "code",
        title: "KitobController.php",
        code: String.raw`<?php
namespace App\Http\Controllers;

use App\Http\Requests\StoreKitobRequest;
use App\Models\Kitob;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

final class KitobController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Kitob::query()->latest()->paginate(20),
        ]);
    }

    public function store(StoreKitobRequest $request): JsonResponse
    {
        $kitob = Kitob::create($request->validated());

        return response()->json(['data' => $kitob], 201, [], JSON_UNESCAPED_UNICODE);
    }

    public function destroy(Kitob $kitob): Response
    {
        $kitob->delete();
        return response()->noContent();
    }
}`,
        outputLabel: "Natija",
        output: "POST /api/v1/kitoblar -> 201 Created\n{\"data\":{\"id\":9,\"nom\":\"PHP 8\",\"narx\":120000}}\nDELETE /api/v1/kitoblar/9 -> 204 No Content",
      },
      {
        type: "p",
        html: "Versiyalash API'ni buzmasdan rivojlantirishga yordam beradi: <code>/api/v1/...</code>. Yangi mos kelmaydigan o'zgarish uchun <code>v2</code> ochiladi, eski mijozlar ishlashda davom etadi. Versiyani URL'da ko'rsatish eng ko'p tarqalgan va kuzatish oson usul.",
      },
      {
        type: "code",
        title: "routes/api.php",
        code: String.raw`<?php
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->name('v1.')->group(function (): void {
    Route::apiResource('kitoblar', KitobController::class);
    Route::get('kitoblar/{kitob}/teglar', [KitobController::class, 'teglar']);
});

Route::prefix('v2')->name('v2.')->group(function (): void {
    Route::apiResource('kitoblar', V2\KitobController::class);
});

// GET /api/v1/kitoblar?page=2&per_page=20
// 422 xato formati:
// {"message":"Validatsiya xatosi","errors":{"nom":["Nom majburiy"]}}`,
        outputLabel: "Natija (GET /api/v1/kitoblar?page=2)",
        output: "HTTP/1.1 200 OK\n{\"data\":[...],\"current_page\":2,\"last_page\":5,\"total\":96}",
      },
      {
        type: "table",
        head: ["Metod", "Amal", "Muvaffaqiyat statusi"],
        rows: [
          ["GET", "Resurs(lar)ni o'qish", "200"],
          ["POST", "Yangi resurs", "201 + Location"],
          ["PUT", "To'liq almashtirish", "200 yoki 204"],
          ["PATCH", "Qisman yangilash", "200"],
          ["DELETE", "O'chirish", "204"],
          ["Xato validatsiya", "Kirish noto'g'ri", "422"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Idempotentlik va xavfsizlik",
        html: "GET, PUT, DELETE idempotent bo'lishi kerak: bir xil so'rovni takrorlash natijani o'zgartirmasligi lozim. POST uchun <code>Idempotency-Key</code> sarlavhasi bilan takroriy yaratishni bloklang. API'da <code>camelCase</code> yoki <code>snake_case</code> ni tanlab, butun loyihada bir xil qo'llang.",
      },
      {
        type: "ul",
        items: [
          "Resurs nomi ko'plikda: `/kitoblar`, `/foydalanuvchilar`.",
          "Filtrlarni query parametrda bering: `?holat=faol&sort=-narx`.",
          "Xatolar uchun yagona format va `errors` maydoni bo'lsin.",
          "Har bir javobda `Content-Type: application/json` va to'g'ri status bo'lsin.",
        ],
      },
    ],
    quiz: [
      {
        q: "Yangi resurs muvaffaqiyatli yaratilganda qaysi status mos?",
        options: ["200", "201", "204", "422"],
        answer: 1,
        explain: "201 Created yangi resurs yaratilganini bildiradi; Location sarlavhasi yangi resurs URL'ini berishi mumkin.",
      },
      {
        q: "DELETE muvaffaqiyatli bajarilib, javob tanasi bo'lmasa qaysi kod ishlatiladi?",
        options: ["200", "201", "204", "301"],
        answer: 2,
        explain: "204 No Content tanasi yo'q muvaffaqiyatli javob uchun standart.",
      },
      {
        q: "API versiyalashning asosiy maqsadi nima?",
        options: [
          "Eski mijozlarni buzmasdan o'zgartirish kiritish",
          "SQL so'rovlarni tezlashtirish",
          "Fayllarni siqish",
          "Tokenlarni o'chirish",
        ],
        answer: 0,
        explain: "Yangi versiya eski shartnomani saqlab, mos kelmaydigan o'zgarishlarni alohida yo'lga chiqaradi.",
      },
    ],
  },
  {
    id: 86,
    title: "GraphQL: sxema, resolver va N+1",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "GraphQL'da mijoz qaysi maydonlarni olishni o'zi belgilaydi. Server <b>sxema</b> bilan tiplarni e'lon qiladi, <b>resolver</b> esa har bir maydon uchun ma'lumot qaytaradi. Bu ortiqcha so'rovlarni kamaytiradi, lekin N+1, chuqur query va murakkablik kabi yangi xavflarni olib keladi.",
      },
      {
        type: "code",
        title: "graphql.php",
        code: String.raw`<?php
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;

$query = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'salom' => [
            'type' => Type::string(),
            'resolve' => fn (): string => 'Salom, Noldan!',
        ],
    ],
]);

$schema = new Schema(['query' => $query]);
$result = GraphQL::executeQuery($schema, '{ salom }');

echo json_encode($result->toArray(), JSON_UNESCAPED_UNICODE), PHP_EOL;`,
        outputLabel: "Natija",
        output: "{\"data\":{\"salom\":\"Salom, Noldan!\"}}",
      },
      {
        type: "p",
        html: "Mutation — ma'lumotni o'zgartiruvchi operatsiya. Resolver argumentlarni oladi, validatsiya qiladi va natija qaytaradi. GraphQL'da HTTP status odatda 200 bo'ladi; xatolar <code>errors</code> massivida keladi. Autentifikatsiya va authorization har bir resolver darajasida tekshirilishi kerak.",
      },
      {
        type: "code",
        title: "mutation.php",
        code: String.raw`<?php
$mutation = new ObjectType([
    'name' => 'Mutation',
    'fields' => [
        'kitobQosh' => [
            'type' => Type::int(),
            'args' => ['nom' => Type::nonNull(Type::string())],
            'resolve' => function (mixed $root, array $args): int {
                if (trim($args['nom']) === '') {
                    throw new \InvalidArgumentException('Nom majburiy');
                }
                return strlen($args['nom']);
            },
        ],
    ],
]);

$schema = new Schema(['query' => $query, 'mutation' => $mutation]);
$result = GraphQL::executeQuery(
    $schema,
    'mutation { kitobQosh(nom: "PHP 8") }'
);

echo json_encode($result->toArray(), JSON_UNESCAPED_UNICODE), PHP_EOL;`,
        outputLabel: "Natija",
        output: "{\"data\":{\"kitobQosh\":5}}",
      },
      {
        type: "table",
        head: ["Muammo", "Yechim", "Eslatma"],
        rows: [
          ["N+1", "DataLoader yoki batch resolver", "So'rovlarni guruhlash"],
          ["Chuqur query", "Max depth limit", "DoS himoyasi"],
          ["Murakkablik", "Query complexity score", "Maksimal ball"],
          ["Kesh", "Persisted queries", "Takroriy parsingni kamaytiradi"],
          ["Ruxsat", "Har maydon resolverida", "Maydon darajasida tekshirish"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "GraphQL = cheksiz moslashuv emas",
        html: "Mijoz istalgan chuqurlikdagi query yuborishi mumkin; limitlar va timeout bo'lmasa bitta so'rov serverni cho'ktirishi mumkin. Production'da query depth, complexity va rate limit qo'ying. Faqat kerakli maydonlarni oching, ichki ID yoki maxfiy ustunlarni sxemaga qo'shmang.",
      },
      {
        type: "ul",
        items: [
          "Sxemani kodda yoki SDL faylida yagona manbada saqlang.",
          "Resolver biznes mantiqni emas, ma'lumot yig'ishni bajaradi.",
          "`Type::nonNull()` bilan majburiy maydonlarni belgilang.",
          "N+1 ni o'lchash uchun query log yoki DataLoader statistikasidan foydalaning.",
        ],
      },
    ],
    quiz: [
      {
        q: "GraphQL'da resolver nima qiladi?",
        options: [
          "Maydon uchun ma'lumot qaytaradi",
          "SQL jadval yaratadi",
          "HTTP serverni ishga tushiradi",
          "Token yaratadi",
        ],
        answer: 0,
        explain: "Resolver sxemadagi maydon qiymatini hisoblaydi yoki ma'lumot manbasidan oladi.",
      },
      {
        q: "GraphQL'da odatiy xatolar qayerda qaytadi?",
        options: ["`errors` massivida", "Faqat HTTP 500 da", "Sessiyada", "Cookie'da"],
        answer: 0,
        explain: "GraphQL javobi `data` va `errors` maydonlaridan iborat; HTTP status ko'pincha 200 bo'ladi.",
      },
      {
        q: "N+1 muammosini GraphQL'da qanday yumshatish mumkin?",
        options: ["DataLoader bilan batch qilish", "Har resolverda `sleep()`", "Sxemani o'chirish", "Faqat POST ishlatish"],
        answer: 0,
        explain: "DataLoader bir tick ichidagi so'rovlarni guruhlab, N+1 ni kamaytiradi.",
      },
    ],
  },
  {
    id: 87,
    title: "OpenAPI va API validatsiyasi",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "API shartnomasi hujjatlashtirilmasa, mijoz va server vaqt o'tib bir-biridan uzoqlashadi. <b>OpenAPI</b> endpointlar, parametrlar, javoblar va xatolarni mashina o'qiydigan formatda tavsiflaydi. Undan hujjat, SDK va contract testlar yaratish mumkin.",
      },
      {
        type: "code",
        title: "validatsiya.php",
        code: String.raw`<?php
$data = ['nom' => '', 'narx' => -5, 'email' => 'x'];
$errors = [];

if (trim($data['nom']) === '') {
    $errors['nom'][] = 'Nom majburiy';
}
if (!is_int($data['narx']) || $data['narx'] <= 0) {
    $errors['narx'][] = "Narx musbat butun son bo'lishi kerak";
}
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'][] = "Email formati noto'g'ri";
}

$javob = ['message' => 'Validatsiya xatosi', 'errors' => $errors];
echo json_encode($javob, JSON_UNESCAPED_UNICODE), PHP_EOL;`,
        outputLabel: "Natija",
        output: "{\"message\":\"Validatsiya xatosi\",\"errors\":{\"nom\":[\"Nom majburiy\"],\"narx\":[\"Narx musbat butun son bo'lishi kerak\"],\"email\":[\"Email formati noto'g'ri\"]}}",
      },
      {
        type: "p",
        html: "Laravel'da <code>FormRequest</code> qoidalari shu validatsiyani markazlashtiradi va 422 javobini avtomatik shakllantiradi. OpenAPI'da esa bir xil qoidalar sxemada takrorlanadi. Ikki manba ajralib ketmasligi uchun generator yoki contract testlardan foydalaning.",
      },
      {
        type: "code",
        title: "openapi.php",
        code: String.raw`<?php
$openapi = [
    'openapi' => '3.1.0',
    'info' => ['title' => 'Kitob API', 'version' => '1.0.0'],
    'paths' => [
        '/api/v1/kitoblar' => [
            'get' => [
                'summary' => 'Kitoblar ro\'yxati',
                'responses' => [
                    '200' => ['description' => 'OK'],
                    '401' => ['description' => 'Unauthenticated'],
                ],
            ],
        ],
    ],
];

echo json_encode($openapi, JSON_UNESCAPED_SLASHES), PHP_EOL;
echo 'Pathlar: ', count($openapi['paths']), PHP_EOL;`,
        outputLabel: "Natija",
        output: "{\"openapi\":\"3.1.0\",\"info\":{\"title\":\"Kitob API\",\"version\":\"1.0.0\"},\"paths\":{\"/api/v1/kitoblar\":{\"get\":{\"summary\":\"Kitoblar ro'yxati\",\"responses\":{\"200\":{\"description\":\"OK\"},\"401\":{\"description\":\"Unauthenticated\"}}}}}}\nPathlar: 1",
      },
      {
        type: "table",
        head: ["Qoida", "Ma'nosi", "Xato statusi"],
        rows: [
          ["required", "Maydon bo'sh bo'lmasin", "422"],
          ["email", "Email formati", "422"],
          ["max:120", "Uzunlik chegarasi", "422"],
          ["exists:kitoblar,id", "Bazada mavjud bo'lsin", "422"],
          ["unique:users,email", "Takrorlanmasin", "422"],
          ["Bearer token", "Autentifikatsiya", "401"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Contract testlar",
        html: "OpenAPI faylini CI'da validatsiya qiling va haqiqiy javoblar sxemaga mosligini contract test bilan tekshiring. Javob maydoni nomi o'zgarsa, test darhol yiqiladi. Hujjatni kod bilan bir PR'da yangilang; keyinga qoldirmang.",
      },
      {
        type: "ul",
        items: [
          "Har bir endpoint uchun 200, 201, 204, 401, 403, 422 va 500 javoblarini tavsiflang.",
          "Xato formati bitta bo'lsin: `message` + `errors`.",
          "Namuna (example) qiymatlar hujjatni tushunarli qiladi.",
          "Maxfiy ma'lumotlarni namunaga qo'shmang.",
        ],
      },
    ],
    quiz: [
      {
        q: "OpenAPI asosan nima uchun ishlatiladi?",
        options: [
          "API shartnomasini mashina o'qiydigan formatda tavsiflash",
          "PHP kodini kompilyatsiya qilish",
          "Ma'lumotlar bazasini zaxiralash",
          "Docker image yasash",
        ],
        answer: 0,
        explain: "OpenAPI endpointlar, parametrlar va javoblarni tavsiflaydi; hujjat va testlar shundan hosil bo'ladi.",
      },
      {
        q: "Validatsiya xatosida API odatda qaysi status qaytaradi?",
        options: ["200", "401", "422", "500"],
        answer: 2,
        explain: "422 Unprocessable Entity kirish ma'lumoti biznes/format qoidalariga mos emasligini bildiradi.",
      },
      {
        q: "Nega OpenAPI va FormRequest qoidalarini birga saqlash kerak?",
        options: [
          "Hujjat va haqiqiy validatsiya bir xil bo'lishi uchun",
          "PHP sekinlashishi uchun",
          "Tokenlar ko'payishi uchun",
          "Faqat dizayn uchun",
        ],
        answer: 0,
        explain: "Ikki manba ajralsa, hujjat yolg'on gapira boshlaydi; contract test yoki generator izchillikni ta'minlaydi.",
      },
    ],
  },
  {
    id: 88,
    title: "Rate limiting, pagination va idempotency",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "API'ni himoyalash uchun uchta amaliy vosita kerak: <b>rate limiting</b> — so'rovlar sonini cheklash, <b>pagination</b> — katta ro'yxatni bo'laklash, <b>idempotency</b> — takroriy so'rovni xavfsiz qilish. Ular birgalikda API'ni barqaror va oldindan aytib bo'ladigan qiladi.",
      },
      {
        type: "code",
        title: "rate-limit.php",
        code: String.raw`<?php
use Illuminate\Support\Facades\RateLimiter;

$kalit = 'api:' . $request->ip();

if (RateLimiter::tooManyAttempts($kalit, 60)) {
    $sekund = RateLimiter::availableIn($kalit);
    return response()->json(
        ['message' => "Juda ko'p so'rov. {$sekund} sekunddan keyin urinib ko'ring"],
        429
    )->header('Retry-After', (string) $sekund);
}

RateLimiter::hit($kalit, 60);

return response()->json(['ok' => true]);`,
        outputLabel: "Natija (61-so'rov)",
        output: "HTTP/1.1 429 Too Many Requests\nRetry-After: 37\n{\"message\":\"Juda ko'p so'rov. 37 sekunddan keyin urinib ko'ring\"}",
      },
      {
        type: "p",
        html: "Laravel'da <code>throttle:60,1</code> middleware tayyor yechim beradi, lekin foydalanuvchi yoki API key bo'yicha farqli limit kerak bo'lsa, <code>RateLimiter::for()</code> bilan nomlangan limiter yasang. Limitni Redis'da saqlash bir nechta serverda izchillikni ta'minlaydi.",
      },
      {
        type: "code",
        title: "pagination.php",
        code: String.raw`<?php
$kitoblar = \App\Models\Kitob::query()
    ->orderBy('id')
    ->paginate(2, ['id', 'nom'], 'page', 2);

return response()->json([
    'data' => $kitoblar->items(),
    'meta' => [
        'current_page' => $kitoblar->currentPage(),
        'last_page' => $kitoblar->lastPage(),
        'per_page' => $kitoblar->perPage(),
        'total' => $kitoblar->total(),
    ],
]);`,
        outputLabel: "Natija (GET /api/v1/kitoblar?page=2)",
        output: "{\"data\":[{\"id\":3,\"nom\":\"MySQL\"},{\"id\":4,\"nom\":\"REST API\"}],\"meta\":{\"current_page\":2,\"last_page\":5,\"per_page\":2,\"total\":10}}",
      },
      {
        type: "table",
        head: ["Vosita", "Standart", "Muhim jihat"],
        rows: [
          ["Rate limit", "429 + Retry-After", "IP emas, API key bo'yicha"],
          ["Page pagination", "page, per_page", "Katta offset sekin"],
          ["Cursor pagination", "cursor", "Barqaror va tez"],
          ["Idempotency-Key", "POST takrori", "Kalitni Redis'da saqlash"],
          ["ETag / If-None-Match", "Kesh", "304 Not Modified"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Idempotency key qanday ishlaydi?",
        html: "Mijoz POST so'roviga <code>Idempotency-Key: uuid</code> qo'shadi. Server kalitni natija bilan saqlaydi: takroriy so'rovda yangi resurs yaratmasdan, avvalgi javobni qaytaradi. Kalitni kamida 24 soat saqlang va faqat shu foydalanuvchi doirasida qabul qiling.",
      },
      {
        type: "ul",
        items: [
          "Limit javobida qolgan so'rovlar sonini `X-RateLimit-Remaining` bilan bering.",
          "Pagination'da `per_page` maksimalini cheklang (masalan 100).",
          "Saralash va filtrlarni hujjatlashtiring; indekssiz ustun bo'yicha saralamang.",
          "Idempotency kalitini logga to'liq yozmang; maxfiy bo'lishi mumkin.",
        ],
      },
    ],
    quiz: [
      {
        q: "Rate limit oshib ketganda qaysi status va sarlavha mos?",
        options: ["429 va Retry-After", "401 va WWW-Authenticate", "201 va Location", "422 va errors"],
        answer: 0,
        explain: "429 Too Many Requests va qayta urinish vaqtini bildiruvchi `Retry-After` sarlavhasi ishlatiladi.",
      },
      {
        q: "Katta jadvalda `page` pagination'ning asosiy muammosi nima?",
        options: [
          "Katta offset sekinlashadi",
          "HTTP ishlamaydi",
          "JSON qabul qilmaydi",
          "Token talab qiladi",
        ],
        answer: 0,
        explain: "`OFFSET` katta bo'lsa, baza ko'p qatorni tashlab yuboradi; cursor pagination bu muammoni kamaytiradi.",
      },
      {
        q: "Idempotency key nimani oldini oladi?",
        options: [
          "Takroriy POST bilan ikki marta resurs yaratishni",
          "Barcha GET so'rovlarini",
          "Token yangilanishini",
          "Pagination'ni",
        ],
        answer: 0,
        explain: "Kalit takroriy so'rovni aniqlab, avvalgi natijani qaytaradi va dublikat yaratmaydi.",
      },
    ],
  },
  {
    id: 89,
    title: "WebSockets va realtime: Reverb, Pusher, Ratchet",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "WebSocket ikki tomonlama doimiy ulanish beradi: server mijozga darhol xabar yuborishi mumkin. Laravel ekotizimida <b>Reverb</b> (o'z serveri), <b>Pusher</b> (bulut) yoki <b>Soketi</b> ishlatiladi. PHP tomonida event <code>ShouldBroadcast</code> bo'lsa, Laravel uni kanalga uzatadi.",
      },
      {
        type: "code",
        title: "app/Events/XabarYuborildi.php",
        code: String.raw`<?php
namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;

final class XabarYuborildi implements ShouldBroadcastNow
{
    use Dispatchable;

    public function __construct(
        public int $xonaId,
        public int $yuboruvchiId,
        public string $matn,
    ) {}

    public function broadcastOn(): array
    {
        return [new PrivateChannel('chat.' . $this->xonaId)];
    }

    public function broadcastAs(): string
    {
        return 'xabar.yuborildi';
    }

    public function broadcastWith(): array
    {
        return [
            'xona' => $this->xonaId,
            'yuboruvchi' => $this->yuboruvchiId,
            'matn' => $this->matn,
        ];
    }
}`,
        outputLabel: "Natija (private-chat.7 kanali)",
        output: "{\"event\":\"xabar.yuborildi\",\"data\":{\"xona\":7,\"yuboruvchi\":2,\"matn\":\"Salom\"}}",
      },
      {
        type: "p",
        html: "Kanal avtorizatsiyasi <code>routes/channels.php</code> da bajariladi. Private kanalga faqat ruxsat etilgan foydalanuvchi obuna bo'ladi. Presence kanali kimlar onlayn ekanini ko'rsatadi, lekin foydalanuvchi ro'yxatini oshkor qiladi — maxfiylikni hisobga oling.",
      },
      {
        type: "code",
        title: "routes/channels.php",
        code: String.raw`<?php
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat.{xona}', function (User $user, int $xona): bool {
    return $user->xonalar()->whereKey($xona)->exists();
});

$user = User::find(1);
$ruxsat = $user->xonalar()->whereKey(7)->exists();
echo $ruxsat ? "kanal: ruxsat\n" : "kanal: 403\n";
echo 'Kanal: private-chat.7', PHP_EOL;`,
        outputLabel: "Natija",
        output: "kanal: ruxsat\nKanal: private-chat.7",
      },
      {
        type: "table",
        head: ["Server", "Afzalligi", "Kamchiligi"],
        rows: [
          ["Laravel Reverb", "Rasmiy, PHP ekotizimi", "O'zingiz masshtablaysiz"],
          ["Pusher", "Boshqariladigan bulut", "Narx va tashqi bog'liqlik"],
          ["Soketi", "Ochiq manba, Pusher protokoli", "O'zingiz joylashtirasiz"],
          ["Ratchet", "To'liq PHP nazorat", "Ko'proq qo'lda kod"],
          ["MQTT broker", "IoT uchun", "Veb bilan integratsiya"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Masshtablash va tartib",
        html: "Bir nechta WebSocket server bo'lsa, eventlar Redis pub/sub orqali tarqatiladi. Xabarlar tartibi kafolatlanmaydi; muhim oqimlar uchun ketma-ketlik raqami yoki server timestamp qo'shing. Ulanish uzilganda mijoz qayta ulanishi va yetishmayotgan xabarlarni API'dan olishi kerak.",
      },
      {
        type: "ul",
        items: [
          "Private/presence kanallarni albatta avtorizatsiya qiling.",
          "Broadcast payloadni kichik saqlang; faylni URL orqali bering.",
          "`ShouldBroadcastNow` HTTP'ni bloklaydi; odatda navbatli `ShouldBroadcast` afzal.",
          "Production'da WSS (TLS) va origin cheklovlarini sozlang.",
        ],
      },
    ],
    quiz: [
      {
        q: "Private kanalga obuna bo'lishdan oldin nima tekshiriladi?",
        options: [
          "Foydalanuvchining kanalga ruxsati",
          "Brauzer versiyasi",
          "Faqat IP manzil",
          "CSS fayli",
        ],
        answer: 0,
        explain: "`routes/channels.php` dagi callback foydalanuvchining kanalga kirish huquqini tekshiradi.",
      },
      {
        q: "`ShouldBroadcastNow` ning `ShouldBroadcast` dan farqi nima?",
        options: [
          "Event navbatga qo'yilmasdan darhol yuboriladi",
          "Faqat public kanallarda ishlaydi",
          "HTTPS talab qiladi",
          "PHP 7 da ishlamaydi",
        ],
        answer: 0,
        explain: "`Now` sinxron yuboradi va HTTP javobini kutdiradi; oddiy `ShouldBroadcast` navbat orqali ishlaydi.",
      },
      {
        q: "Bir nechta WebSocket serverni bog'lash uchun odatda nima ishlatiladi?",
        options: ["Redis pub/sub", "Faqat fayl keshi", "SQLite", "PHP sessiyasi"],
        answer: 0,
        explain: "Redis pub/sub eventni barcha WebSocket serverlarga tarqatadi, shuning uchun mijoz qaysi serverga ulanganidan qat'i nazar xabar oladi.",
      },
    ],
  },
];
