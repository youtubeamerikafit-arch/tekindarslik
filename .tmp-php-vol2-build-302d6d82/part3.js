module.exports = [
  {
    id: 70,
    title: "PHPUnit chuqur: lifecycle, fixtures va data provider",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Yaxshi test uch qismdan iborat: tayyorlash (arrange), harakat (act) va tekshirish (assert). PHPUnit har bir test metodini alohida obyektda bajaradi, shuning uchun testlar bir-birining holatiga tayanmasligi kerak. <code>setUp()</code> umumiy tayyorgarlik, <code>tearDown()</code> esa tozalash uchun.",
      },
      {
        type: "code",
        title: "tests/SavatTest.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace Noldan\Tests;

use PHPUnit\Framework\TestCase;

final class Savat
{
    private array $items = [];

    public function qosh(string $nom, int $narx): void
    {
        $this->items[$nom] = $narx;
    }

    public function jami(): int
    {
        return array_sum($this->items);
    }
}

final class SavatTest extends TestCase
{
    private Savat $savat;

    protected function setUp(): void
    {
        $this->savat = new Savat();
    }

    public function testBoshSavatNolQaytaradi(): void
    {
        $this->assertSame(0, $this->savat->jami());
    }

    public function testIkkiMahsulotYigindisi(): void
    {
        $this->savat->qosh('kitob', 90000);
        $this->savat->qosh('qalam', 5000);
        $this->assertSame(95000, $this->savat->jami());
    }
}`,
        outputLabel: "Natija (vendor/bin/phpunit --testdox)",
        output: "Savat (Noldan\Tests\Savat)\n ✔ Bo'sh savat nol qaytaradi\n ✔ Ikki mahsulot yig'indisi\n\nOK (2 tests, 2 assertions)",
      },
      {
        type: "p",
        html: "Bir xil mantiqni turli ma'lumotlarda tekshirish uchun <b>data provider</b> ishlatiladi. PHPUnit 10+ da atribut sintaksisi qulay: <code>#[DataProvider('chegirmaHolatlari')]</code>. Har bir qator alohida test sifatida hisoblanadi va xato qaysi holatda bo'lganini aniq ko'rsatadi.",
      },
      {
        type: "code",
        title: "tests/ChegirmaTest.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace Noldan\Tests;

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class ChegirmaTest extends TestCase
{
    public static function chegirmaHolatlari(): array
    {
        return [
            'oddiy' => [100000, 10, 90000],
            'talaba' => [100000, 25, 75000],
            'nol' => [50000, 0, 50000],
        ];
    }

    #[DataProvider('chegirmaHolatlari')]
    public function testChegirma(int $summa, int $foiz, int $kutilgan): void
    {
        $natija = intdiv($summa * (100 - $foiz), 100);
        $this->assertSame($kutilgan, $natija);
    }
}`,
        outputLabel: "Natija",
        output: "Chegirma (Noldan\Tests\Chegirma)\n ✔ Chegirma with data set \"oddiy\"\n ✔ Chegirma with data set \"talaba\"\n ✔ Chegirma with data set \"nol\"\n\nOK (3 tests, 3 assertions)",
      },
      {
        type: "table",
        head: ["Hook / vosita", "Qachon ishlaydi", "Maqsad"],
        rows: [
          ["setUp()", "Har bir testdan oldin", "Yangi obyekt, fixture"],
          ["tearDown()", "Har bir testdan keyin", "Resursni yopish"],
          ["setUpBeforeClass()", "Butun klass uchun bir marta", "Qimmat tayyorgarlik"],
          ["Data provider", "Testdan oldin", "Bir nechta kirish to'plami"],
          ["assertSame()", "Tekshiruv paytida", "Tur va qiymat qat'iy tengligi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Test izolyatsiyasi",
        html: "Har bir test o'z ma'lumotini yaratishi va tozalashi kerak. Baza uchun tranzaksiya yoki <code>:memory:</code> SQLite ishlating. Vaqt, tasodifiy son va tarmoq kabi tashqi omillarni mock yoki dependency injection orqali boshqaring.",
      },
      {
        type: "ul",
        items: [
          "Test nomi xatti-harakatni aytsin: `testBoshSavatNolQaytaradi()`.",
          "Bitta testda bitta mantiqiy tasdiq bo'lsin; bir nechta assert bo'lishi mumkin.",
          "`assertEquals()` o'rniga imkon qadar `assertSame()` ishlating.",
          "Sekin testlarni alohida guruhga ajrating va CI'da parallel qiling.",
        ],
      },
    ],
    quiz: [
      {
        q: "PHPUnit'da `setUp()` qachon chaqiriladi?",
        options: ["Butun test to'plami oxirida", "Har bir test metodidan oldin", "Faqat birinchi testdan oldin", "Faqat xato bo'lganda"],
        answer: 1,
        explain: "`setUp()` har bir test metodidan oldin yangi obyektda chaqiriladi; bu test izolyatsiyasini ta'minlaydi.",
      },
      {
        q: "Data provider nima uchun ishlatiladi?",
        options: [
          "Bir testni turli kirish ma'lumotlarida qayta bajarish uchun",
          "Ma'lumotlar bazasini yaratish uchun",
          "HTTP so'rov yuborish uchun",
          "Kodni formatlash uchun",
        ],
        answer: 0,
        explain: "Provider har bir qatorni alohida test holatiga aylantiradi va xatoni aniq ma'lumot bilan ko'rsatadi.",
      },
      {
        q: "`assertSame()` ning `assertEquals()` dan farqi nima?",
        options: [
          "Faqat massivlar bilan ishlaydi",
          "Tur va qiymatni qat'iy solishtiradi",
          "Xato otmaydi",
          "Faqat string uchun ishlaydi",
        ],
        answer: 1,
        explain: "`assertSame()` `===` semantikasida tekshiradi; `assertEquals()` esa qiymatni yumshoqroq solishtiradi.",
      },
    ],
  },
  {
    id: 71,
    title: "Mocking, stub va test double'lar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Testda haqiqiy to'lov gateway, email yoki tashqi API'ni chaqirish sekin va ishonchsiz. <b>Test double</b> — haqiqiy obyekt o'rnida ishlatiladigan soxta obyekt. <b>Stub</b> oldindan belgilangan javob beradi, <b>mock</b> esa qanday chaqirilganini ham tekshiradi.",
      },
      {
        type: "code",
        title: "tests/TolovServisiTest.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace Noldan\Tests;

use PHPUnit\Framework\TestCase;

interface TolovGateway
{
    public function yechish(int $tiyin): bool;
}

final class TolovServisi
{
    public function __construct(private TolovGateway $gateway) {}

    public function sotibOl(int $tiyin): string
    {
        return $this->gateway->yechish($tiyin)
            ? "to'landi"
            : 'rad etildi';
    }
}

final class TolovServisiTest extends TestCase
{
    public function testMuvaffaqiyatliTolov(): void
    {
        $gateway = $this->createMock(TolovGateway::class);
        $gateway->method('yechish')->willReturn(true);

        $servis = new TolovServisi($gateway);
        $this->assertSame("to'landi", $servis->sotibOl(50000));
    }

    public function testRadEtish(): void
    {
        $gateway = $this->createStub(TolovGateway::class);
        $gateway->method('yechish')->willReturn(false);

        $servis = new TolovServisi($gateway);
        $this->assertSame('rad etildi', $servis->sotibOl(50000));
    }
}`,
        outputLabel: "Natija",
        output: "TolovServisi (Noldan\Tests\TolovServisi)\n ✔ Muvaffaqiyatli tolov\n ✔ Rad etish\n\nOK (2 tests, 2 assertions)",
      },
      {
        type: "p",
        html: "Mock'ning kuchi — chaqiruv faktini tekshirish. <code>expects($this->once())</code> metod aynan bir marta chaqirilishini talab qiladi; <code>with(50000)</code> argumentni ham tekshiradi. Ortiqcha mock esa testni implementatsiyaga bog'lab qo'yadi: faqat tashqi chegaralarni soxtalashtiring.",
      },
      {
        type: "code",
        title: "tests/BuyurtmaTest.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace Noldan\Tests;

use PHPUnit\Framework\TestCase;

interface Ombor
{
    public function bandQil(string $sku, int $soni): void;
}

final class Buyurtma
{
    public function __construct(private Ombor $ombor) {}

    public function yarat(string $sku): void
    {
        $this->ombor->bandQil($sku, 1);
    }
}

final class BuyurtmaTest extends TestCase
{
    public function testOmborBirMartaChaqiriladi(): void
    {
        $ombor = $this->createMock(Ombor::class);
        $ombor->expects($this->once())
            ->method('bandQil')
            ->with('php-kitob', 1);

        (new Buyurtma($ombor))->yarat('php-kitob');
        $this->addToAssertionCount(1);
    }
}`,
        outputLabel: "Natija",
        output: "Buyurtma (Noldan\Tests\Buyurtma)\n ✔ Ombor bir marta chaqiriladi\n\nOK (1 test, 1 assertion)",
      },
      {
        type: "table",
        head: ["Double turi", "Nima qiladi", "Qachon ishlatiladi"],
        rows: [
          ["Dummy", "Hech narsa qilmaydi", "Argument to'ldirish"],
          ["Stub", "Belgilangan javob beradi", "Holatni boshqarish"],
          ["Mock", "Chaqiruvlarni tekshiradi", "Yon effekt shartnomasi"],
          ["Spy", "Chaqiruvlarni yozib boradi", "Keyin tekshirish"],
          ["Fake", "Yengil haqiqiy implementatsiya", "Xotira repo, fake mail"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Har narsani mock qilmang",
        html: "Value object, DTO va oddiy hisob-kitoblarni mock qilish testni murakkablashtiradi. Ular haqiqiy obyekt bo'lib qolsin. Mock faqat tarmoq, vaqt, fayl tizimi yoki to'lov kabi chegaralarda kerak. Ortiqcha mock testni refaktoringga to'sqinlik qiladi.",
      },
      {
        type: "ul",
        items: [
          "Mock'ni konstruktor orqali bering; global holatga tayanmang.",
          "`expects($this->never())` taqiqlangan chaqiruvni tekshiradi.",
          "`willReturnCallback()` bilan dinamik javob bering.",
          "Testda mock chaqiruvlarini ortiqcha sanashdan ko'ra natijani tekshirish afzal.",
        ],
      },
    ],
    quiz: [
      {
        q: "Stub va mock orasidagi asosiy farq nima?",
        options: [
          "Stub faqat javob beradi, mock chaqiruvni ham tekshiradi",
          "Mock faqat testda ishlaydi",
          "Stub har doim xato otadi",
          "Ular bir xil",
        ],
        answer: 0,
        explain: "Stub holatni boshqaradi; mock esa qo'shimcha ravishda metod qanday chaqirilganini tasdiqlaydi.",
      },
      {
        q: "`expects($this->once())` nimani talab qiladi?",
        options: [
          "Metod kamida bir marta chaqirilsin",
          "Metod aynan bir marta chaqirilsin",
          "Metod umuman chaqirilmasin",
          "Test bir marta ishga tushsin",
        ],
        answer: 1,
        explain: "`once()` aynan bitta chaqiruvni kutadi; nol yoki ikki marta bo'lsa test yiqiladi.",
      },
      {
        q: "Qaysi obyektni mock qilish odatda keraksiz?",
        options: ["To'lov gateway", "Email yuboruvchi", "Oddiy DTO", "Tashqi HTTP API"],
        answer: 2,
        explain: "DTO — oddiy ma'lumot tashuvchi; uni haqiqiy obyekt sifatida ishlatish testni soddalashtiradi.",
      },
    ],
  },
  {
    id: 72,
    title: "Pest: ifodali va qisqa testlar",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "<b>Pest</b> PHPUnit ustida qurilgan test freymvorki: kamroq boilerplate, o'qiladigan sintaksis va chiroyli natija. U PHPUnit testlarini ham bajaradi, shuning uchun mavjud testlarni birdan qayta yozish shart emas. Pest 2/3 da <code>it()</code>, <code>test()</code>, <code>expect()</code> va datasetlar asosiy vositalar.",
      },
      {
        type: "code",
        title: "tests/SluggerTest.php",
        code: String.raw`<?php
use Noldan\Matn\Slugger;

it('bo\'shliqni defisga aylantiradi', function (): void {
    $slug = (new Slugger())->yasa('PHP 8 yangiliklari');
    expect($slug)->toBe('php-8-yangiliklari');
});

it('katta harflarni kichraytiradi', function (): void {
    expect((new Slugger())->yasa('Laravel API'))
        ->toBe('laravel-api')
        ->not->toBeEmpty();
});`,
        outputLabel: "Natija (vendor/bin/pest)",
        output: "PASS  Tests\SluggerTest\n  ✓ bo'shliqni defisga aylantiradi\n  ✓ katta harflarni kichraytiradi\n\nTests:  2 passed (4 assertions)\nDuration: 0.08s",
      },
      {
        type: "p",
        html: "Pest'da <code>beforeEach()</code> umumiy tayyorgarlikni, <code>dataset()</code> esa bir nechta kirish to'plamini beradi. Expectation zanjiri bir nechta tekshiruvni ketma-ket yozish imkonini beradi; bu testni o'qishni qisqartiradi, lekin juda uzun zanjirdan qoching.",
      },
      {
        type: "code",
        title: "tests/ChegirmaPestTest.php",
        code: String.raw`<?php
dataset('chegirmalar', [
    'oddiy' => [100000, 10, 90000],
    'talaba' => [100000, 25, 75000],
]);

beforeEach(function (): void {
    $this->foiz = 0;
});

it('chegirmani to\'g\'ri hisoblaydi', function (int $summa, int $foiz, int $kutilgan): void {
    $natija = intdiv($summa * (100 - $foiz), 100);
    expect($natija)->toBe($kutilgan);
})->with('chegirmalar');`,
        outputLabel: "Natija",
        output: "PASS  Tests\ChegirmaPestTest\n  ✓ chegirmani to'g'ri hisoblaydi → oddiy\n  ✓ chegirmani to'g'ri hisoblaydi → talaba\n\nTests:  2 passed (2 assertions)",
      },
      {
        type: "table",
        head: ["Pest API", "Vazifasi", "PHPUnit analogi"],
        rows: [
          ["it()", "Xatti-harakat testi", "test metodi"],
          ["expect()", "Zanjirli assertion", "assertSame()"],
          ["beforeEach()", "Har test oldidan", "setUp()"],
          ["dataset()", "Ma'lumot to'plami", "Data provider"],
          ["arch()", "Arxitektura qoidalari", "Alohida vosita"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Pest'ni bosqichma-bosqich joriy qiling",
        html: "Mavjud PHPUnit testlarini <code>pest --init</code> bilan Pest'ga o'tkazish mumkin, lekin hammasini bir kunda emas. Yangi testlarni Pest'da yozing, eski testlar ishlasin. <code>arch()</code> bilan <code>dd()</code> yoki <code>var_dump()</code> qoldiqlarini ham tekshirish mumkin.",
      },
      {
        type: "ul",
        items: [
          "Test nomi fe'l bilan boshlansin: `hisoblaydi`, `rad etadi`.",
          "`expect()->toBe()` qat'iy tenglik; `toEqual()` yumshoqroq.",
          "Dataset nomlarini mazmunli bering; xato chiqishida ular ko'rinadi.",
          "Pest'ni Laravel'da `pestphp/pest-plugin-laravel` bilan kengaytiring.",
        ],
      },
    ],
    quiz: [
      {
        q: "Pest nimani taqdim etadi?",
        options: [
          "PHPUnit ustida qisqaroq, ifodali sintaksis",
          "Yangi ma'lumotlar bazasi",
          "PHP kompilyatorini",
          "Docker image'ni",
        ],
        answer: 0,
        explain: "Pest PHPUnit'ga asoslangan; `it()` va `expect()` orqali testlarni qisqaroq yozish imkonini beradi.",
      },
      {
        q: "Pest'da dataset qanday vazifani bajaradi?",
        options: [
          "Bir testni bir nechta ma'lumot to'plamida bajaradi",
          "Ma'lumotlar bazasini yaratadi",
          "Serverni ishga tushiradi",
          "Fayllarni o'chiradi",
        ],
        answer: 0,
        explain: "Dataset testga turli argumentlarni beradi va har bir holatni alohida natijada ko'rsatadi.",
      },
      {
        q: "Mavjud PHPUnit testlari Pest bilan ishlaydimi?",
        options: ["Yo'q, qayta yozish shart", "Ha, Pest PHPUnit testlarini ham bajaradi", "Faqat Laravel'da", "Faqat PHP 8.3 da"],
        answer: 1,
        explain: "Pest PHPUnit ustida ishlaydi va mavjud testlarni qo'llab-quvvatlaydi; bosqichma-bosqich o'tish mumkin.",
      },
    ],
  },
  {
    id: 73,
    title: "Test piramidasi, integratsiya va E2E",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Test piramidasida ko'p unit test, kamroq integratsiya va juda kam E2E test bo'ladi. Unit testlar tez va aniq, lekin haqiqiy chegaralarni tekshirmaydi. Integratsiya testlari PDO, router yoki navbat bilan birgalikda ishlashni ko'rsatadi. E2E esa foydalanuvchi yo'lini boshidan oxirigacha sinaydi.",
      },
      {
        type: "code",
        title: "tests/KitobRepoTest.php",
        code: String.raw`<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;

final class KitobRepoTest extends TestCase
{
    private PDO $pdo;

    protected function setUp(): void
    {
        $this->pdo = new PDO('sqlite::memory:');
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->exec(
            'CREATE TABLE kitoblar (id INTEGER PRIMARY KEY, nom TEXT, narx INTEGER)'
        );
    }

    public function testKitobSaqlanadiVaOqiladi(): void
    {
        $stmt = $this->pdo->prepare(
            'INSERT INTO kitoblar (nom, narx) VALUES (:nom, :narx)'
        );
        $stmt->execute(['nom' => 'PHP 8', 'narx' => 120000]);

        $kitob = $this->pdo->query('SELECT * FROM kitoblar')->fetch(PDO::FETCH_ASSOC);
        $this->assertSame('PHP 8', $kitob['nom']);
        $this->assertSame(120000, (int) $kitob['narx']);
    }
}`,
        outputLabel: "Natija",
        output: "KitobRepo (KitobRepoTest)\n ✔ Kitob saqlanadi va oqiladi\n\nOK (1 test, 2 assertions)",
      },
      {
        type: "p",
        html: "Integratsiya testi haqiqiy SQL sintaksisini, indekslarni va tranzaksiyalarni tekshiradi. Laravel'da <code>RefreshDatabase</code> har testni toza bazada boshlaydi; SQLite'dagi farqlar tufayli production bazasiga yaqin muhitni ham CI'da sinash tavsiya etiladi.",
      },
      {
        type: "code",
        title: "tests/Feature/KitobApiTest.php",
        code: String.raw`<?php
namespace Tests\Feature;

use App\Models\Kitob;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class KitobApiTest extends TestCase
{
    use RefreshDatabase;

    public function testKitoblarRoyxatiQaytadi(): void
    {
        Kitob::factory()->count(2)->create();

        $this->getJson('/api/kitoblar')
            ->assertOk()
            ->assertJsonCount(2, 'data')
            ->assertJsonStructure([
                'data' => [['id', 'nom', 'narx']],
            ]);
    }
}`,
        outputLabel: "Natija",
        output: "PASS  Tests\Feature\KitobApiTest\n  ✓ kitoblar royxati qaytadi\n\nTests:  1 passed (3 assertions)",
      },
      {
        type: "table",
        head: ["Daraja", "Nimani tekshiradi", "Tezlik"],
        rows: [
          ["Unit", "Bitta klass yoki funksiya", "Juda tez"],
          ["Integratsiya", "Bir nechta komponent birgalikda", "O'rtacha"],
          ["Contract", "API shakli va statuslari", "O'rtacha"],
          ["E2E", "Foydalanuvchi yo'li", "Sekin, mo'rt"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Mo'rt testlarni tuzating",
        html: "Vaqt, tasodifiy ID yoki tashqi tarmoqqa bog'liq testlar <b>flaky</b> bo'ladi. Ular CI'ni ishonchsiz qiladi. Sababni topib tuzating yoki testni alohida belgilang; qayta urinish (retry) bilan yashirmang. Testlar parallel ishlasa, umumiy resurslarni ajrating.",
      },
      {
        type: "ul",
        items: [
          "Baza testlarida har testdan keyin tranzaksiyani rollback qiling yoki yangi memory baza oling.",
          "HTTP testida status, JSON tuzilishi va muhim maydonlarni tekshiring.",
          "E2E'ni faqat kritik oqimlar uchun saqlang; har tugma uchun yozmang.",
          "CI'da unit va integratsiya testlarini alohida bosqichlarda bajarish mumkin.",
        ],
      },
    ],
    quiz: [
      {
        q: "Test piramidasida eng ko'p qaysi test turi bo'lishi kerak?",
        options: ["E2E", "Unit", "Qo'lda test", "Yuklama testi"],
        answer: 1,
        explain: "Unit testlar tez va arzon; piramidaning pastki qismida ko'p bo'ladi.",
      },
      {
        q: "Integratsiya testining asosiy afzalligi nima?",
        options: [
          "Komponentlar birgalikda to'g'ri ishlashini tekshiradi",
          "Har doim soniyada minglab testni bajaradi",
          "Brauzer ko'rinishini tekshiradi",
          "Faqat CSS'ni tekshiradi",
        ],
        answer: 0,
        explain: "Integratsiya testi PDO, router, navbat kabi haqiqiy chegaralarni birgalikda sinaydi.",
      },
      {
        q: "Flaky test nima?",
        options: [
          "Har doim o'tadigan test",
          "Sababsiz ba'zan o'tib, ba'zan yiqiladigan test",
          "Faqat sekin ishlaydigan test",
          "Test qamrovi past bo'lgan kod",
        ],
        answer: 1,
        explain: "Flaky test tashqi omil yoki izolyatsiya muammosi tufayli beqaror natija beradi; uni tuzatish kerak.",
      },
    ],
  },
  {
    id: 74,
    title: "TDD, mutation testing va performance fikrlash",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "TDD sikli qisqa: <b>red</b> — avval yiqiladigan test yozing, <b>green</b> — eng oddiy yechim bilan o'tkazing, <b>refactor</b> — kodni tozalang. Bu sikl dizaynni kichik qadamlarga bo'ladi va ortiqcha kod yozishning oldini oladi. Test o'tgach, mutation testing testning haqiqiy kuchini ko'rsatadi.",
      },
      {
        type: "code",
        title: "tests/HisobTest.php",
        code: String.raw`<?php
use PHPUnit\Framework\TestCase;

final class Hisob
{
    public function qosh(int $a, int $b): int
    {
        return $a + $b;
    }
}

final class HisobTest extends TestCase
{
    public function testMusbatSonlarQoshiladi(): void
    {
        $this->assertSame(5, (new Hisob())->qosh(2, 3));
    }

    public function testManfiySonlarQoshiladi(): void
    {
        $this->assertSame(-5, (new Hisob())->qosh(-2, -3));
    }
}`,
        outputLabel: "Natija",
        output: "Hisob (HisobTest)\n ✔ Musbat sonlar qoshiladi\n ✔ Manfiy sonlar qoshiladi\n\nOK (2 tests, 2 assertions)",
      },
      {
        type: "p",
        html: "Mutation testing vositasi kodga ataylab kichik xatolar (mutantlar) kiritadi: <code>+</code> ni <code>-</code> ga, <code>&gt;</code> ni <code>&gt;=</code> ga almashtiradi. Agar testlar mutantni o'ldira olmasa, ular yetarli darajada kuchli emas. 100% qamrov ham 100% sifat degani emas.",
      },
      {
        type: "code",
        title: "fib-calls.php",
        code: String.raw`<?php
function fibRekursiv(int $n, int &$chaqiruv = 0): int
{
    $chaqiruv++;
    return $n < 2 ? $n : fibRekursiv($n - 1, $chaqiruv) + fibRekursiv($n - 2, $chaqiruv);
}

function fibIterativ(int $n): int
{
    [$a, $b] = [0, 1];
    for ($i = 0; $i < $n; $i++) {
        [$a, $b] = [$b, $a + $b];
    }
    return $a;
}

$chaqiruv = 0;
$natija = fibRekursiv(20, $chaqiruv);
echo "rekursiv: $natija, chaqiruvlar: $chaqiruv\n";
echo 'iterativ: ', fibIterativ(20), ", chaqiruvlar: 20\n";
echo 'tezlik farqi: ', intdiv($chaqiruv, 20), "x\n";`,
        outputLabel: "Natija",
        output: "rekursiv: 6765, chaqiruvlar: 21891\niterativ: 6765, chaqiruvlar: 20\ntezlik farqi: 1094x",
      },
      {
        type: "table",
        head: ["Amaliyot", "Maqsad", "Vosita"],
        rows: [
          ["TDD", "Dizaynni test bilan boshqarish", "PHPUnit, Pest"],
          ["Coverage", "Qaysi qatorlar bajarilganini bilish", "Xdebug, PCOV"],
          ["Mutation", "Testlarning kuchini o'lchash", "Infection"],
          ["Benchmark", "Vaqt va xotirani o'lchash", "PHPBench, hrtime"],
          ["Profil", "Issiq yo'lni topish", "Xdebug profiler, Blackfire"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Optimallashtirishdan oldin o'lchang",
        html: "Har qanday optimizatsiya profiler natijasiga tayansin. 20 000 chaqiruvli rekursiya kichik `n` da sezilmasligi mumkin, lekin katta `n` da portlaydi. Algoritm murakkabligini avval tanlang, keyin mikrodarajadagi tezlashtirishga o'ting.",
      },
      {
        type: "ul",
        items: [
          "Test yiqilmasa, u hech narsani isbotlamaydi — red bosqichini o'tkazib yubormang.",
          "Mutation score 100% bo'lmasligi mumkin; muhim biznes qoidalariga e'tibor bering.",
          "Benchmark'da bir necha marta ishga tushirib, o'rtacha va medianani oling.",
          "`hrtime(true)` mikrosekund aniqligida o'lchaydi; `microtime()` dan afzal.",
        ],
      },
    ],
    quiz: [
      {
        q: "TDD'ning to'g'ri tartibi qanday?",
        options: [
          "Refactor → Green → Red",
          "Red → Green → Refactor",
          "Green → Red → Refactor",
          "Test yozmasdan kod yozish",
        ],
        answer: 1,
        explain: "Avval yiqiladigan test (red), keyin uni o'tkazuvchi kod (green), so'ng tozalash (refactor).",
      },
      {
        q: "Mutation testing nimani o'lchaydi?",
        options: [
          "Testlarning mutantni topish qobiliyatini",
          "Serverning xotirasini",
          "SQL indeks tezligini",
          "Docker image hajmini",
        ],
        answer: 0,
        explain: "Kodga kiritilgan mutantni testlar o'ldira olsa, testlar kuchli hisoblanadi.",
      },
      {
        q: "Kod qamrovi 100% bo'lsa, testlar to'liq ishonchli bo'ladimi?",
        options: ["Ha, har doim", "Yo'q, qamrov sifatni kafolatlamaydi", "Faqat PHP 8 da", "Faqat unit testlarda"],
        answer: 1,
        explain: "Qamrov faqat qator bajarilganini ko'rsatadi; assertion sifati va mutation score muhimroq.",
      },
    ],
  },
  {
    id: 75,
    title: "Laravel service container va providerlar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Laravel <b>service container</b> — bog'liqliklarni avtomatik yechadigan IoC qutisi. <code>app(Service::class)</code> yoki konstruktor type-hint orqali obyekt olinadi. <b>Service provider</b> esa container'ga bog'lanishlarni ro'yxatdan o'tkazadi. Laravel'ning o'zi ham ko'plab providerlar yig'indisidir.",
      },
      {
        type: "code",
        title: "app/Providers/TolovServiceProvider.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace App\Providers;

use App\Contracts\Tolov;
use App\Services\StripeTolov;
use Illuminate\Support\ServiceProvider;

final class TolovServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(Tolov::class, StripeTolov::class);

        $this->app->singleton(StripeTolov::class, function ($app): StripeTolov {
            return new StripeTolov((string) config('services.stripe.secret'));
        });
    }

    public function boot(): void
    {
        // marshrutlar, view composer, event listenerlar
    }
}`,
        outputLabel: "Natija (php artisan about --only=providers)",
        output: "Providers .................................................. 24\nDeferred .................................................... 3",
      },
      {
        type: "p",
        html: "<code>bind()</code> har so'rovda yangi obyekt beradi, <code>singleton()</code> esa bir marta yaratib qayta ishlatadi. <code>scoped()</code> bitta so'rov yoki job doirasida singleton bo'ladi — Laravel Octane uchun muhim. <code>instance()</code> tayyor obyektni ro'yxatdan o'tkazadi.",
      },
      {
        type: "code",
        title: "TolovController.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Contracts\Tolov;

final class TolovController extends Controller
{
    public function __construct(private Tolov $tolov) {}

    public function holat(): array
    {
        return [
            'gateway' => $this->tolov->nomi(),
            'sinf' => get_class($this->tolov),
        ];
    }
}

// Container avtomatik yechadi:
// GET /api/tolov/holat -> {"gateway":"stripe","sinf":"App\\Services\\StripeTolov"}`,
        outputLabel: "Natija (GET /api/tolov/holat)",
        output: "{\"gateway\":\"stripe\",\"sinf\":\"App\\\\Services\\\\StripeTolov\"}",
      },
      {
        type: "table",
        head: ["Metod", "Hayot sikli", "Qachon ishlatiladi"],
        rows: [
          ["bind()", "Har resolve'da yangi", "Yengil, holatsiz servis"],
          ["singleton()", "Butun ilova uchun bitta", "Konfiguratsiya, klient"],
          ["scoped()", "So'rov/job uchun bitta", "Octane, request holati"],
          ["instance()", "Tayyor obyekt", "Test yoki mavjud resurs"],
          ["tag()", "Guruhlash", "Bir nechta listener"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "register() va boot() farqi",
        html: "<code>register()</code> faqat container bog'lanishlari uchun; u yerda boshqa servislarga tayanmang, chunki hammasi hali ro'yxatdan o'tmagan bo'lishi mumkin. <code>boot()</code> esa barcha providerlar register bo'lgach ishlaydi: route, event, view composer shu yerda. Provider `config:cache` dan keyin ham to'g'ri ishlashi kerak.",
      },
      {
        type: "ul",
        items: [
          "Interfeysni `App\\Contracts` da, implementatsiyani `App\\Services` da saqlang.",
          "Provider'ni `bootstrap/providers.php` (yoki Laravel 10 gacha `config/app.php`) ga qo'shing.",
          "Katta provider'ni mavzu bo'yicha bo'ling: Tolov, Xabar, Media.",
          "Testda `$this->app->instance(Tolov::class, $fake)` bilan almashtiring.",
        ],
      },
    ],
    quiz: [
      {
        q: "`singleton()` bilan `bind()` orasidagi farq nima?",
        options: [
          "Singleton bir marta yaratiladi, bind har resolve'da yangi obyekt beradi",
          "Bind faqat testlarda ishlaydi",
          "Singleton faqat controllerlar uchun",
          "Ular bir xil",
        ],
        answer: 0,
        explain: "Singleton bitta nusxani qayta ishlatadi; bind har safar yangi obyekt yaratadi.",
      },
      {
        q: "Service provider'ning `boot()` metodi qachon ishlaydi?",
        options: [
          "Barcha providerlar register bo'lgandan keyin",
          "Container yaratilishidan oldin",
          "Faqat testlarda",
          "Har bir HTTP so'rovida qayta",
        ],
        answer: 0,
        explain: "`boot()` barcha register bosqichidan keyin chaqiriladi; route va eventlarni ulash uchun mos.",
      },
      {
        q: "Laravel controller konstruktoridagi type-hint bilan nima bo'ladi?",
        options: [
          "Container avtomatik bog'liqlikni yechadi",
          "PHP xato beradi",
          "Faqat `new` ishlaydi",
          "Controller o'chiriladi",
        ],
        answer: 0,
        explain: "Container konstruktor parametrlarini reflection orqali o'qib, kerakli klassni avtomatik yaratadi.",
      },
    ],
  },
  {
    id: 76,
    title: "Eloquent relationships chuqur",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Eloquent munosabatlari jadvallar orasidagi bog'lanishni obyekt sifatida ifodalaydi. <code>hasMany</code>, <code>belongsTo</code>, <code>belongsToMany</code>, <code>hasOneThrough</code> va <code>morphMany</code> asosiy turlar. To'g'ri nomlash va foreign key'ni aniq ko'rsatish SQL xatolarini kamaytiradi.",
      },
      {
        type: "code",
        title: "app/Models/Muallif.php",
        code: String.raw`<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

final class Muallif extends Model
{
    protected $fillable = ['ism'];

    public function kitoblar(): HasMany
    {
        return $this->hasMany(Kitob::class, 'muallif_id');
    }
}

// app/Models/Kitob.php
final class Kitob extends Model
{
    protected $fillable = ['nom', 'narx', 'muallif_id'];

    public function muallif(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Muallif::class, 'muallif_id');
    }
}`,
        outputLabel: "Natija (tinker)",
        output: ">>> App\\Models\\Muallif::with('kitoblar')->find(1)->kitoblar->pluck('nom')\n=> Illuminate\\Support\\Collection {#1\n     all: [\"PHP 8\", \"Laravel API\"],\n   }",
      },
      {
        type: "p",
        html: "Ko'p-ko'p bog'lanishda oraliq jadval va <code>belongsToMany</code> ishlatiladi. <code>withPivot()</code> oraliq ustunlarni, <code>sync()</code> esa bog'lanishlarni yangilaydi. <code>morphMany</code> bir modelning turli modellarga izoh qoldirishi kabi polimorf holatlar uchun.",
      },
      {
        type: "code",
        title: "teg.php",
        code: String.raw`<?php
$kitob = \App\Models\Kitob::findOrFail(1);
$kitob->teglar()->sync([1, 2]);

foreach ($kitob->teglar as $teg) {
    echo $teg->nom, PHP_EOL;
}

echo 'Teglar soni: ', $kitob->teglar()->count(), PHP_EOL;
echo 'Pivot yaratilgan: ', $kitob->teglar()->wherePivot('created_at', '!=', null)->count(), PHP_EOL;`,
        outputLabel: "Natija",
        output: "php\napi\nTeglar soni: 2\nPivot yaratilgan: 2",
      },
      {
        type: "table",
        head: ["Munosabat", "Misol", "Foreign key"],
        rows: [
          ["hasMany", "Muallif -> Kitoblar", "kitoblar.muallif_id"],
          ["belongsTo", "Kitob -> Muallif", "kitoblar.muallif_id"],
          ["belongsToMany", "Kitob <-> Teglar", "pivot jadval"],
          ["hasOneThrough", "Mamlakat -> Pocta", "Ikki bosqich"],
          ["morphMany", "Post -> Izohlar", "commentable_type/id"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Munosabatni keshlash",
        html: "`$muallif->kitoblar` birinchi murojaatda yuklanadi va keyin keshdan olinadi. Uni yangilaganingizda <code>load()</code> yoki <code>refresh()</code> bilan qayta yuklang. `with()` bilan oldindan yuklash N+1 muammosini hal qiladi.",
      },
      {
        type: "ul",
        items: [
          "Munosabat metodini `HasMany` kabi qaytish turi bilan yozing — IDE va statik analiz yordam beradi.",
          "Pivot jadval nomi alifbo tartibida: `kitob_teg`.",
          "`sync()` o'chiradi va qo'shadi; `syncWithoutDetaching()` faqat qo'shadi.",
          "`whereHas()` bog'langan model bo'yicha filtrlash imkonini beradi.",
        ],
      },
    ],
    quiz: [
      {
        q: "Kitob bitta muallifga tegishli bo'lsa, qaysi munosabat ishlatiladi?",
        options: ["hasMany", "belongsTo", "belongsToMany", "morphMany"],
        answer: 1,
        explain: "Kitob jadvalida `muallif_id` bo'lsa, Kitob modeli `belongsTo(Muallif::class)` bilan bog'lanadi.",
      },
      {
        q: "`belongsToMany` qaysi holatga mos?",
        options: ["Bitta kitob bitta muallif", "Kitob va teglar ko'p-ko'p", "Faqat bitta jadval", "Faqat JSON ustun"],
        answer: 1,
        explain: "Ko'p-ko'p bog'lanish oraliq (pivot) jadval orqali amalga oshiriladi.",
      },
      {
        q: "`sync()` metodining vazifasi nima?",
        options: [
          "Pivot bog'lanishlarni berilgan to'plamga moslashtiradi",
          "Bazani butunlay o'chiradi",
          "Modelni klonlaydi",
          "Faqat count qaytaradi",
        ],
        answer: 0,
        explain: "`sync()` oraliq jadvaldagi bog'lanishlarni berilgan ID'lar to'plamiga moslaydi: keraksizlarini o'chiradi.",
      },
    ],
  },
  {
    id: 77,
    title: "Eloquent performance: N+1, eager loading va chunk",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "N+1 — eng ko'p uchraydigan ORM muammosi: 100 ta yozuvni olib, har biri uchun alohida bog'langan so'rov yuborish. <code>with()</code> buni 2 ta so'rovga tushiradi. Katta jadvallarda <code>chunkById()</code>, <code>lazy()</code> yoki <code>cursor()</code> xotirani tejaydi, lekin har birining o'z cheklovi bor.",
      },
      {
        type: "code",
        title: "n-plus-one.php",
        code: String.raw`<?php
use App\Models\Muallif;
use Illuminate\Support\Facades\DB;

DB::enableQueryLog();

$mualliflar = Muallif::with('kitoblar')->take(3)->get();
foreach ($mualliflar as $muallif) {
    echo $muallif->ism, ': ', $muallif->kitoblar->count(), " kitob\n";
}

echo 'So\'rovlar: ', count(DB::getQueryLog()), PHP_EOL;`,
        outputLabel: "Natija",
        output: "Aziza: 2 kitob\nBek: 1 kitob\nDilnoza: 3 kitob\nSo'rovlar: 2",
      },
      {
        type: "p",
        html: "Agar <code>with()</code> olib tashlansa, har bir muallif uchun alohida so'rov ketadi: 1 + 3 = 4 ta. <code>withCount()</code> esa bog'langan yozuvlar sonini bitta so'rovda beradi. Faqat kerakli ustunlarni <code>select()</code> bilan tanlash ham ma'lumot hajmini kamaytiradi.",
      },
      {
        type: "code",
        title: "chunk.php",
        code: String.raw`<?php
use App\Models\Kitob;

Kitob::query()
    ->select(['id', 'nom'])
    ->orderBy('id')
    ->chunkById(2, function ($kitoblar): void {
        foreach ($kitoblar as $kitob) {
            echo $kitob->id, ':', $kitob->nom, PHP_EOL;
        }
        echo "---\n";
    });`,
        outputLabel: "Natija",
        output: "1:PHP asoslari\n2:Laravel\n---\n3:MySQL\n4:REST API\n---\n5:Testlash\n6:Docker\n---",
      },
      {
        type: "table",
        head: ["Usul", "Xotira", "Cheklov"],
        rows: [
          ["get()", "Hammasi xotirada", "Katta jadvalda xavfli"],
          ["chunkById()", "Bo'lak-bo'lak", "ID bo'yicha barqaror"],
          ["lazy()", "Oqim", "So'rovlar soni ko'p"],
          ["cursor()", "Bitta qator", "Bir vaqtda bitta ochiq so'rov"],
          ["withCount()", "Yengil", "Faqat son kerak bo'lsa"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Chunk paytida yozmang",
        html: "`chunk()` ichida yozuvlarni o'chirsangiz yoki ID'larini o'zgartirsangiz, ba'zi qatorlar tashlab ketilishi mumkin. `chunkById()` barqarorroq, lekin baribir chegaralarni bilish kerak. Katta yangilanishlarni alohida job va tranzaksiyalarga bo'ling.",
      },
      {
        type: "ul",
        items: [
          "`with(['kitoblar' => fn ($q) => $q->select('id','muallif_id','nom')])` bilan ustunlarni cheklang.",
          "N+1 ni topish uchun Laravel Debugbar yoki query log ishlatiladi.",
          "Har bir `where` va `orderBy` ustunida indeks borligini tekshiring.",
          "`cursor()` bilan ochiq so'rov paytida boshqa og'ir so'rov yubormang.",
        ],
      },
    ],
    quiz: [
      {
        q: "N+1 muammosini qaysi usul eng samarali hal qiladi?",
        options: ["`with()` bilan eager loading", "Har bir yozuvni alohida yuklash", "`var_dump()` qo'shish", "Bazani o'chirish"],
        answer: 0,
        explain: "Eager loading bog'langan yozuvlarni oldindan bitta qo'shimcha so'rovda yuklaydi.",
      },
      {
        q: "`chunkById()` ning `chunk()` dan afzalligi nima?",
        options: [
          "ID o'zgarishlariga nisbatan barqarorroq",
          "Har doim kamroq xotira ishlatadi",
          "SQL umuman yubormaydi",
          "Faqat bitta qator qaytaradi",
        ],
        answer: 0,
        explain: "`chunkById()` oxirgi ID bo'yicha davom etadi; offset siljishi muammosi kamayadi.",
      },
      {
        q: "`cursor()` qanday afzallik beradi?",
        options: [
          "Butun natijani xotiraga yig'maydi",
          "Barcha so'rovlarni keshlaydi",
          "Faqat aggregate qaytaradi",
          "Munosabatlarni avtomatik yuklaydi",
        ],
        answer: 0,
        explain: "Cursor bir vaqtda bitta qatorni o'qiydi; katta natijalarda xotira sarfi past bo'ladi.",
      },
    ],
  },
  {
    id: 78,
    title: "Migrations va schema evolyutsiyasi",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Migratsiya — baza sxemasining versiyalangan o'zgarishi. Har bir migratsiya <code>up()</code> va <code>down()</code> metodlariga ega; jamoa ularni git orqali bir xil tartibda qo'llaydi. Migratsiyani o'zgartirish o'rniga yangi migratsiya qo'shish production tarixini buzmaydi.",
      },
      {
        type: "code",
        title: "database/migrations/2026_10_25_000001_create_kitoblar_table.php",
        code: String.raw`<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('kitoblar', function (Blueprint $table): void {
            $table->id();
            $table->string('nom', 120);
            $table->unsignedInteger('narx');
            $table->foreignId('muallif_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
            $table->index(['muallif_id', 'nom']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kitoblar');
    }
};`,
        outputLabel: "Natija (php artisan migrate)",
        output: "INFO  Running migrations.\n2026_10_25_000001_create_kitoblar_table ......... 42ms DONE",
      },
      {
        type: "p",
        html: "Katta jadvalga ustun qo'shish yoki indeks yaratish ba'zi bazalarda jadvalni qulflaydi. Production'da nullable ustun qo'shib, keyin backfill job bajarish va oxirida NOT NULL'ga o'tish xavfsizroq. Har bir migratsiyani staging'da hajmga yaqin ma'lumotda sinang.",
      },
      {
        type: "code",
        title: "2026_10_25_000002_add_holat_to_kitoblar.php",
        code: String.raw`<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('kitoblar', function (Blueprint $table): void {
            $table->string('holat', 20)->nullable()->after('narx');
            $table->index('holat');
        });
    }

    public function down(): void
    {
        Schema::table('kitoblar', function (Blueprint $table): void {
            $table->dropIndex(['holat']);
            $table->dropColumn('holat');
        });
    }
};`,
        outputLabel: "Natija (php artisan migrate --pretend)",
        output: "alter table `kitoblar` add `holat` varchar(20) null after `narx`\nalter table `kitoblar` add index `kitoblar_holat_index`(`holat`)",
      },
      {
        type: "table",
        head: ["Buyruq", "Vazifasi", "Ehtiyot chorasi"],
        rows: [
          ["migrate", "Yangi migratsiyalarni qo'llaydi", "Backup"],
          ["migrate:rollback", "Oxirgi batchni qaytaradi", "Ma'lumot yo'qolishi"],
          ["migrate:fresh", "Barcha jadvallarni qayta yaratadi", "Faqat lokal"],
          ["migrate --pretend", "SQL'ni ko'rsatadi", "Production tekshiruvi"],
          ["migrate --force", "Production tasdiqlashsiz", "Juda ehtiyotkorlik"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "down() har doim xavfsiz emas",
        html: "Ustunni o'chirish ma'lumotni yo'q qiladi; ba'zi jamoalar production'da rollbackni umuman ishlatmaydi, oldinga tuzatish migratsiyasini yozadi. `down()` ni lokal va test muhitida sinang. Baza zaxirasini migratsiyadan oldin oling.",
      },
      {
        type: "ul",
        items: [
          "Migratsiya fayl nomi sana va tartib bilan unikal bo'lsin.",
          "Foreign key cheklovlarini `constrained()` bilan aniq bering.",
          "Indeks nomlarini keyin o'zgartirish qiyin; reja bilan yarating.",
          "Seeder'ni migratsiyaga aralashtirmang: sxema va ma'lumot alohida.",
        ],
      },
    ],
    quiz: [
      {
        q: "Migratsiyani o'zgartirish o'rniga nima qilish tavsiya etiladi?",
        options: [
          "Yangi migratsiya qo'shish",
          "Bazani o'chirish",
          "Eski migratsiyani o'chirish",
          "Seeder'ni tahrirlash",
        ],
        answer: 0,
        explain: "Allaqachon qo'llangan migratsiyani o'zgartirish tarixni buzadi; yangi o'zgarish alohida migratsiyada bo'ladi.",
      },
      {
        q: "Katta jadvalga NOT NULL ustun qo'shishdan oldin qanday yo'l xavfsizroq?",
        options: [
          "Avval nullable qo'shib, backfill qilib, keyin NOT NULL qilish",
          "Jadvalni o'chirish",
          "Barcha qatorlarni qo'lda yozish",
          "Migratsiyani o'tkazib yuborish",
        ],
        answer: 0,
        explain: "Nullable ustun qulfni kamaytiradi; ma'lumot to'ldirilgach NOT NULL'ga o'tish mumkin.",
      },
      {
        q: "`migrate --pretend` nima qiladi?",
        options: [
          "SQL'ni bajaradi",
          "Bajariladigan SQL'ni ko'rsatadi, lekin qo'llamaydi",
          "Bazani zaxiralaydi",
          "Faqat seeder ishga tushiradi",
        ],
        answer: 1,
        explain: "`--pretend` migratsiya SQL'ini chiqaradi, lekin bazaga o'zgartirish kiritmaydi.",
      },
    ],
  },
  {
    id: 79,
    title: "Policies, Gates va authorization",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Autentifikatsiya \"kim bu?\" degan savolga javob bersa, <b>authorization</b> \"bu amalni qila oladimi?\" degan savolga javob beradi. Laravel'da oddiy shartlar uchun <b>Gate</b>, modelga bog'langan qoidalar uchun <b>Policy</b> ishlatiladi. Controllerda <code>authorize()</code> yoki <code>can()</code> orqali tekshiriladi.",
      },
      {
        type: "code",
        title: "app/Policies/KitobPolicy.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace App\Policies;

use App\Models\Kitob;
use App\Models\User;

final class KitobPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function update(User $user, Kitob $kitob): bool
    {
        return $user->id === $kitob->user_id;
    }

    public function delete(User $user, Kitob $kitob): bool
    {
        return $user->is_admin || $user->id === $kitob->user_id;
    }
}`,
        outputLabel: "Natija (policy avtomatik topiladi)",
        output: "KitobPolicy -> App\\Models\\Kitob uchun ro'yxatdan o'tdi",
      },
      {
        type: "p",
        html: "Laravel 11+ policy'ni <code>App\\Models\\Kitob</code> uchun <code>App\\Policies\\KitobPolicy</code> nomi bo'yicha avtomatik topadi. Eski versiyalarda <code>AuthServiceProvider</code> da <code>Gate::policy()</code> bilan bog'lanadi. Policy metodlari <code>true/false</code> yoki <code>Response</code> qaytarishi mumkin.",
      },
      {
        type: "code",
        title: "KitobController.php",
        code: String.raw`<?php
namespace App\Http\Controllers;

use App\Models\Kitob;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class KitobController extends Controller
{
    public function update(Request $request, Kitob $kitob): JsonResponse
    {
        $this->authorize('update', $kitob);

        $kitob->update($request->validate([
            'nom' => ['required', 'string', 'max:120'],
        ]));

        return response()->json(['data' => $kitob], 200);
    }
}

// Ruxsat yo'q bo'lsa:
// HTTP/1.1 403 Forbidden
// {"message":"This action is unauthorized."}`,
        outputLabel: "Natija (begona kitobni yangilash)",
        output: "HTTP/1.1 403 Forbidden\n{\"message\":\"This action is unauthorized.\"}",
      },
      {
        type: "table",
        head: ["Vosita", "Qamrov", "Misol"],
        rows: [
          ["Gate", "Modelga bog'lanmagan shart", "`Gate::allows('admin')`"],
          ["Policy", "Model bo'yicha CRUD", "`$user->can('update', $kitob)`"],
          ["authorize()", "Controllerda to'xtatadi", "403 yoki istisno"],
          ["can()", "Blade/JSON uchun bool", "Shartli tugma"],
          ["before()", "Policy'dan oldin", "Super admin"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "401 va 403 ni farqlang",
        html: "Foydalanuvchi umuman login qilmagan bo'lsa — <b>401 Unauthorized</b>. Login qilgan, lekin ruxsati yo'q bo'lsa — <b>403 Forbidden</b>. Laravel'da `authorize()` guest uchun 403 berishi mumkin; API'da `auth:sanctum` middleware 401 ni ta'minlaydi.",
      },
      {
        type: "ul",
        items: [
          "Policy'da `before()` bilan admin uchun umumiy ruxsat bering.",
          "Har bir muhim amal uchun alohida metod: view, create, update, delete.",
          "Blade'da `@can` ishlatsangiz ham serverda authorize qiling.",
          "Policy qoidalarini feature testlarda 403/200 bilan tekshiring.",
        ],
      },
    ],
    quiz: [
      {
        q: "Policy odatda nimaga bog'lanadi?",
        options: ["Bitta model va foydalanuvchi amallariga", "Faqat konfiguratsiyaga", "Faqat route nomiga", "Faqat sessiyaga"],
        answer: 0,
        explain: "Policy model bo'yicha view/update/delete kabi amallarni foydalanuvchi uchun tekshiradi.",
      },
      {
        q: "Foydalanuvchi login qilgan, lekin ruxsati yo'q. Qaysi status mos?",
        options: ["200", "401", "403", "500"],
        answer: 2,
        explain: "Autentifikatsiya o'tgan, ammo authorization rad etgan holatda 403 Forbidden qaytadi.",
      },
      {
        q: "`before()` metodi policy'da nima qiladi?",
        options: [
          "Barcha tekshiruvlardan oldin umumiy qoida beradi",
          "Modelni o'chiradi",
          "Faqat testlarda ishlaydi",
          "Route'ni o'chiradi",
        ],
        answer: 0,
        explain: "`before()` admin kabi umumiy holatni birinchi tekshiradi; `true` qaytarsa qolgan metodlar o'tkazib yuboriladi.",
      },
    ],
  },
];
