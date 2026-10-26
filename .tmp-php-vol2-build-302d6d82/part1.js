module.exports = [
  {
    id: 50,
    title: "PHP bajarilish quvuri: tokenizer, parser va opcode",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "PHP fayli to'g'ridan-to'g'ri bajarilmaydi. Avval <b>lexer</b> matnni tokenlarga ajratadi, <b>parser</b> grammatika bo'yicha AST yasaydi, kompilyator opcode'lar chiqaradi va faqat shundan keyin <b>Zend VM</b> ularni bajaradi. Bu quvurni bilish sintaksis xatosi, kompilyatsiya xatosi va runtime xatosini bir-biridan ajratishga yordam beradi.",
      },
      {
        type: "code",
        title: "tokenlar.php",
        code: String.raw`<?php
$kod = '<?php $narx = 12000; echo $narx * 2;';
$tokens = array_filter(
    PhpToken::tokenize($kod),
    fn (PhpToken $t): bool => !in_array(
        $t->id,
        [T_OPEN_TAG, T_WHITESPACE, T_COMMENT],
        true
    )
);
foreach ($tokens as $token) {
    echo $token->getTokenName(), PHP_EOL;
}`,
        outputLabel: "Natija",
        output: "T_VARIABLE\n=\nT_LNUMBER\n;\nT_ECHO\nT_VARIABLE\n*\nT_LNUMBER\n;",
      },
      {
        type: "p",
        html: "Lexer faqat belgilar oqimini taniydi: u <code>$narx</code> ni o'zgaruvchi, <code>12000</code> ni son deb biladi, lekin ularning tartibi to'g'ri yoki noto'g'riligini hal qilmaydi. Tartibni parser tekshiradi. Shuning uchun <code>echo ;</code> kabi xato <code>ParseError</code> bo'lib kompilyatsiya bosqichida chiqadi, fayl esa umuman ishga tushmaydi.",
      },
      {
        type: "code",
        title: "kompilyatsiya.php",
        code: String.raw`<?php
function kvadrat(int $n): int
{
    return $n ** 2;
}

$ref = new ReflectionFunction('kvadrat');
echo $ref->getName(), ': ', $ref->getNumberOfParameters(), " parametr\n";
echo 'Qaytish turi: ', $ref->getReturnType(), "\n";
echo 'Fayl: ', basename($ref->getFileName()), "\n";
echo 'Natija: ', kvadrat(9), "\n";`,
        outputLabel: "Natija",
        output: "kvadrat: 1 parametr\nQaytish turi: int\nFayl: kompilyatsiya.php\nNatija: 81",
      },
      {
        type: "table",
        head: ["Bosqich", "Kirish", "Chiqish", "Xato turi"],
        rows: [
          ["Lexer", "Manba matni", "Tokenlar oqimi", "Kamdan-kam, odatda ParseError"],
          ["Parser", "Tokenlar", "AST", "ParseError"],
          ["Compiler", "AST", "Opcode massivi", "CompileError, ParseError"],
          ["Zend VM", "Opcode", "Natija, yon effektlar", "Error, Exception"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "OPcache bu quvurni qisqartiradi",
        html: "Har so'rovda lexer va parser ishlashi shart emas: OPcache kompilyatsiya qilingan opcode'larni umumiy xotirada saqlaydi. Fayl o'zgarmagan bo'lsa, PHP to'g'ridan-to'g'ri opcode'larni bajaradi. Bu production'dagi eng katta tezkor yutuqlardan biri.",
      },
      {
        type: "ul",
        items: [
          "Sintaksis xatosi — fayl hali bajarilmagan paytda topiladi.",
          "Noma'lum funksiya yoki klass odatda runtime'da, chaqirilgan paytda aniqlanadi.",
          "Opcode'ni ko'rish uchun VLD yoki opcache asboblaridan foydalaniladi; ishlab chiqarishda bu kundalik ehtiyoj emas.",
          "Xato xabarida fayl va qator ko'rsatilsa, avval o'sha qatorning kompilyatsiya bosqichiga e'tibor bering.",
        ],
      },
    ],
    quiz: [
      {
        q: "PHP manba kodini tokenlarga ajratuvchi bosqich qanday nomlanadi?",
        options: ["Lexer", "Compiler", "Zend VM", "Garbage Collector"],
        answer: 0,
        explain: "Lexer (tokenizer) matnni tokenlar oqimiga aylantiradi; parser esa tokenlardan AST quradi.",
      },
      {
        q: "OPcache ish unumdorligini asosan nima hisobiga oshiradi?",
        options: [
          "SQL so'rovlarni keshlash",
          "Brauzer keshi bilan ishlash",
          "Kompilyatsiya qilingan opcode'larni qayta ishlatish",
          "PHP fayllarini siqish",
        ],
        answer: 2,
        explain: "OPcache opcode'larni umumiy xotirada saqlaydi va har so'rovda lexer/parser/compiler bosqichlarini takrorlamaydi.",
      },
      {
        q: "`php -l fayl.php` buyrug'i nimani tekshiradi?",
        options: [
          "Faqat ma'lumotlar bazasi ulanishini",
          "Sintaksisni, kodni bajarmasdan",
          "Barcha unit testlarni",
          "Faqat xotira sarfini",
        ],
        answer: 1,
        explain: "`-l` (lint) rejimi faylni kompilyatsiya qilib ko'radi, lekin opcode'larni bajarmaydi; sintaksis xatolarini erta topadi.",
      },
    ],
  },
  {
    id: 51,
    title: "Zend VM, OPcache va JIT amaliyotda",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Zend VM — PHP opcode'larini bajaradigan virtual mashina. Production'da <code>opcache.enable=1</code> va <code>opcache.validate_timestamps=0</code> deyarli standart. PHP 8 dagi <b>JIT</b> esa issiq kod yo'llarini mashina kodiga aylantiradi. JIT har bir veb-so'rovga foyda bermaydi: u ko'proq CPU-bound hisob-kitoblarda sezilarli.",
      },
      {
        type: "code",
        title: "opcache-holat.php",
        code: String.raw`<?php
$status = opcache_get_status(false);
printf("OPcache: %s\n", $status && $status['opcache_enabled'] ? 'yoqilgan' : "o'chirilgan");
printf("JIT: %s\n", ini_get('opcache.jit'));
printf("JIT buffer: %s\n", ini_get('opcache.jit_buffer_size'));
printf("Timestamps: %s\n", ini_get('opcache.validate_timestamps'));`,
        outputLabel: "Natija (opcache.enable_cli=1, jit=tracing)",
        output: "OPcache: yoqilgan\nJIT: tracing\nJIT buffer: 64M\nTimestamps: 1",
      },
      {
        type: "p",
        html: "CLI uchun OPcache odatda alohida o'chirilgan bo'ladi, chunki har bir buyruq qisqa umr ko'radi. <code>opcache.enable_cli=1</code> faqat benchmark, queue worker yoki uzoq ishlaydigan CLI jarayonlarida mantiqiy. Veb-so'rovlarda esa FPM jarayonlari opcode keshini bo'lishadi.",
      },
      {
        type: "code",
        title: "preload.php",
        code: String.raw`<?php
$fayl = __DIR__ . '/Math.php';
$ok = opcache_compile_file($fayl);

echo $ok ? "Math.php keshga qo'shildi\n" : "Keshga qo'shilmadi\n";
echo opcache_is_script_cached($fayl)
    ? "Keshda mavjud\n"
    : "Keshda yo'q\n";
echo 'Xotira: ', ini_get('opcache.memory_consumption'), " MB\n";`,
        outputLabel: "Natija",
        output: "Math.php keshga qo'shildi\nKeshda mavjud\nXotira: 128 MB",
      },
      {
        type: "table",
        head: ["Sozlama", "Production tavsiyasi", "Sabab"],
        rows: [
          ["opcache.enable", "1", "Opcode keshi doim yoniq"],
          ["opcache.validate_timestamps", "0", "Har so'rovda stat tekshiruvi bo'lmaydi"],
          ["opcache.memory_consumption", "128–256 MB", "Katta loyiha opcode'lari sig'ishi uchun"],
          ["opcache.max_accelerated_files", "20000+", "Fayllar sonidan yetarli bo'lishi kerak"],
          ["opcache.jit", "tracing yoki off", "CPU-bound kodda foyda, I/O'da kam"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Deployda keshni yangilang",
        html: "Agar <code>validate_timestamps=0</code> bo'lsa, yangi fayl deploy qilinganda eski opcode keshda qolishi mumkin. Deploy skriptida PHP-FPM'ni reload qiling yoki <code>opcache_reset()</code> ni aniq chaqiring. JIT bufferini juda katta qilish ham foyda bermaydi: avval profil o'lchang.",
      },
      {
        type: "ul",
        items: [
          "JIT faqat OPcache yoqilganda ishlaydi; `jit_buffer_size=0` uni o'chiradi.",
          "Preloading eng ko'p ishlatiladigan klasslarni har so'rovda yuklashdan qutqaradi.",
          "Opcode keshi fayl yo'li va mtime bilan bog'lanadi; konteynerda bir xil yo'l muhim.",
          "Har qanday sozlamani o'zgartirgach, `opcache_get_status()` bilan haqiqiy holatni tekshiring.",
        ],
      },
    ],
    quiz: [
      {
        q: "CLI skriptlarida OPcache'ni yoqish uchun qaysi sozlama ishlatiladi?",
        options: ["opcache.jit_buffer_size", "opcache.preload", "opcache.file_cache", "opcache.enable_cli=1"],
        answer: 3,
        explain: "CLI uchun alohida `opcache.enable_cli` sozlamasi bor; u odatda o'chirilgan turadi.",
      },
      {
        q: "`opcache.validate_timestamps=0` production'da nimani anglatadi?",
        options: [
          "Fayl o'zgarishlari avtomatik tekshirilmaydi",
          "JIT o'chiriladi",
          "Barcha fayllar har so'rovda qayta kompilyatsiya qilinadi",
          "OPcache faqat CLI'da ishlaydi",
        ],
        answer: 0,
        explain: "PHP fayl mtime'ini tekshirmaydi; deploydan keyin keshni aniq tozalash yoki FPM'ni reload qilish kerak.",
      },
      {
        q: "JIT qanday ish yukida ko'proq foyda beradi?",
        options: ["Sekin tarmoq so'rovlarida", "Ko'p matematik hisob-kitobli CPU ishida", "Faqat HTML chiqarishda", "Faqat SQL kutishda"],
        answer: 1,
        explain: "JIT issiq kodni mashina kodiga aylantiradi; CPU-bound sikllar va hisob-kitoblar foyda ko'radi, I/O kutish esa yo'q.",
      },
    ],
  },
  {
    id: 52,
    title: "Xotira: refcount, copy-on-write va garbage collector",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "PHP o'zgaruvchisi — bu <b>zval</b>: qiymat, tur va reference count. Massiv yoki matn boshqa o'zgaruvchiga berilganda darhol nusxa olinmaydi; refcount oshadi. Faqat yozish paytida <b>copy-on-write</b> nusxa yaratadi. Bu xotirani tejaydi, lekin katta massivni tasodifan nusxalash xavfini yo'qotmaydi.",
      },
      {
        type: "code",
        title: "cow.php",
        code: String.raw`<?php
$a = array_fill(0, 3, 'PHP');
$b = $a;              // hali bitta buffer, refcount = 2
$b[] = '8.3';         // yozish paytida nusxa
echo count($a), ' / ', count($b), PHP_EOL;

$matn = str_repeat('x', 5);
$nusxa = $matn;
$nusxa[0] = 'X';
echo $matn, ' / ', $nusxa, PHP_EOL;`,
        outputLabel: "Natija",
        output: "3 / 4\nxxxxx / Xxxxx",
      },
      {
        type: "p",
        html: "Obyektlar boshqacha: o'zgaruvchida obyektning <b>identifikatori</b> saqlanadi, nusxalashda esa o'sha obyektga yana havola paydo bo'ladi. Shuning uchun <code>$b = $a</code> dan keyin ikkala o'zgaruvchi ham bir obyektni ko'rsatadi. Chuqur nusxa kerak bo'lsa, <code>clone</code> yoki aniq nusxalash mantiqi ishlatiladi.",
      },
      {
        type: "code",
        title: "weakref.php",
        code: String.raw`<?php
final class Sessiya
{
    public function __construct(public string $id) {}
}

$sessiya = new Sessiya('abc123');
$ref = WeakReference::create($sessiya);
echo $ref->get()?->id ?? 'yoq', PHP_EOL;

unset($sessiya);
echo $ref->get()?->id ?? 'tozalandi', PHP_EOL;

$halqa = new stdClass();
$halqa->self = $halqa;
unset($halqa);
echo gc_collect_cycles() > 0 ? "Sikl yig'ildi\n" : "Sikl yo'q\n";`,
        outputLabel: "Natija",
        output: "abc123\ntozalandi\nSikl yig'ildi",
      },
      {
        type: "table",
        head: ["Tushuncha", "Ma'nosi", "Amaliy oqibat"],
        rows: [
          ["refcount", "Qiymatga havolalar soni", "0 bo'lganda xotira bo'shaydi"],
          ["copy-on-write", "Yozishda nusxa", "O'qishda xotira tejaladi"],
          ["WeakReference", "Obyektni ushlab turmaydigan havola", "Kesh va kuzatuvchilar uchun"],
          ["gc_collect_cycles()", "Aylanali havolalarni yig'ish", "Uzoq ishlaydigan jarayonda muhim"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Katta massivni funksiyaga uzatish",
        html: "PHP massivni funksiya argumentiga qiymat bo'yicha uzatadi, lekin COW tufayli nusxa faqat funksiya ichida yozish bo'lsa yaratiladi. Agar funksiya massivni o'zgartirmasa, xotira sarfi deyarli oshmaydi. Baribir katta ma'lumot uchun generator yoki <code>Iterator</code> afzal.",
      },
      {
        type: "ul",
        items: [
          "`unset()` refcountni kamaytiradi; boshqa havola bo'lsa xotira bo'shamaydi.",
          "Uzoq ishlaydigan workerda har so'rovdan keyin katta statik massivlarni tozalang.",
          "`gc_status()` bilan root buffer va collected cycllar sonini kuzating.",
          "Xotira limitini oshirish — davo emas; oqim bilan ishlashga o'ting.",
        ],
      },
    ],
    quiz: [
      {
        q: "Copy-on-write qachon haqiqiy nusxa yaratadi?",
        options: ["O'zgaruvchi e'lon qilinganda", "Faqat `unset()` chaqirilganda", "Nusxaga yozish paytida", "Har doim darhol"],
        answer: 2,
        explain: "O'qish uchun havola yetarli; nusxa faqat bir tomon qiymatni o'zgartirishga uringanda yaratiladi.",
      },
      {
        q: "`WeakReference` qanday afzallik beradi?",
        options: [
          "Obyektni xotirada ushlab turmaydi",
          "Obyektni avtomatik klonlaydi",
          "Massivni saralaydi",
          "SQL so'rovni keshlaydi",
        ],
        answer: 0,
        explain: "WeakReference obyekt yo'q qilinishiga to'sqinlik qilmaydi; `get()` keyin `null` qaytarishi mumkin.",
      },
      {
        q: "Aylanali havolalar (cycle) uchun qaysi mexanizm ishlaydi?",
        options: ["Copy-on-write", "Garbage collector", "OPcache", "JIT"],
        answer: 1,
        explain: "Refcount aylanani yecha olmaydi; PHP garbage collector root buffer orqali bunday sikllarni topadi va tozalaydi.",
      },
    ],
  },
  {
    id: 53,
    title: "Generatorlar: katta ma'lumotni oqim bilan ishlash",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<code>yield</code> funksiyani to'xtatib turadi va qiymat qaytaradi, keyingi chaqiruvda esa aynan o'sha joydan davom etadi. Natijada butun ro'yxat xotirada saqlanmaydi. Generator <code>Iterator</code> interfeysini bajaradi, lekin uni faqat bir marta aylanib chiqish mumkin.",
      },
      {
        type: "code",
        title: "fib.php",
        code: String.raw`<?php
function fib(): Generator
{
    [$a, $b] = [0, 1];
    while (true) {
        yield $a;
        [$a, $b] = [$b, $a + $b];
    }
}

$f = fib();
for ($i = 0; $i < 8; $i++) {
    echo $f->current(), $i < 7 ? ' ' : PHP_EOL;
    $f->next();
}`,
        outputLabel: "Natija",
        output: "0 1 1 2 3 5 8 13",
      },
      {
        type: "p",
        html: "Cheksiz ketma-ketlik ham generator bilan xavfsiz: faqat kerakli qismi hisoblanadi. Fayl yoki CSV o'qishda esa butun faylni <code>file()</code> bilan xotiraga yuklamaslik kerak. Quyidagi misolda sarlavha bir marta o'qiladi va har bir qator assotsiativ massivga aylanadi.",
      },
      {
        type: "code",
        title: "csv.php",
        code: String.raw`<?php
$csv = "ism,ball\nAziza,91\nBek,84\n";
$stream = fopen('php://temp', 'r+');
fwrite($stream, $csv);
rewind($stream);

function qatorlar($stream): Generator
{
    $sarlavha = fgetcsv($stream);
    while (($qator = fgetcsv($stream)) !== false) {
        yield array_combine($sarlavha, $qator);
    }
}

foreach (qatorlar($stream) as $talaba) {
    echo $talaba['ism'], ': ', $talaba['ball'], PHP_EOL;
}`,
        outputLabel: "Natija",
        output: "Aziza: 91\nBek: 84",
      },
      {
        type: "table",
        head: ["Metod / so'z", "Vazifasi"],
        rows: [
          ["yield $qiymat", "Qiymat qaytaradi va to'xtaydi"],
          ["yield $kalit => $qiymat", "Kalit bilan qiymat beradi"],
          ["yield from $boshqa", "Boshqa generator qiymatlarini uzatadi"],
          ["$gen->send($x)", "To'xtagan joyga qiymat yuboradi"],
          ["$gen->current()", "Joriy qiymatni oladi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Generator — bir martalik oqim",
        html: "Generator tugagach uni qayta <code>rewind()</code> qilib bo'lmaydi. Har safar yangi generator yarating. Bundan tashqari, generator ichidagi istisno tashqariga uzatiladi; resurslarni <code>finally</code> bilan yopishni unutmang.",
      },
      {
        type: "ul",
        items: [
          "Katta faylni qatorma-qator o'qishda generator xotira sarfini keskin kamaytiradi.",
          "`iterator_to_array()` butun natijani xotiraga yig'adi; ehtiyotkorlik bilan ishlating.",
          "Generatorni queue workerda uzoq muddat saqlash mumkin emas — u bir jarayonga bog'liq.",
          "`yield from` bilan sahifalangan API natijalarini ketma-ket ulash qulay.",
        ],
      },
    ],
    quiz: [
      {
        q: "`yield` bajarilganda funksiya holati bilan nima bo'ladi?",
        options: [
          "Funksiya butunlay tugaydi",
          "Barcha o'zgaruvchilar tozalanadi",
          "Holat saqlanadi va keyin shu joydan davom etadi",
          "Funksiya qayta chaqiriladi",
        ],
        answer: 2,
        explain: "Generator o'z holatini saqlaydi; `next()` yoki `send()` keyingi to'xtashgacha davom ettiradi.",
      },
      {
        q: "Bitta generator obyektini necha marta boshidan aylanib chiqish mumkin?",
        options: ["Cheksiz marta", "Ikki marta", "Faqat massivga aylantirgandan keyin", "Bir marta"],
        answer: 3,
        explain: "Generator — bir martalik iterator; tugagandan keyin qayta ishga tushirib bo'lmaydi.",
      },
      {
        q: "`yield from` nima qiladi?",
        options: [
          "Boshqa generatorning qiymatlarini uzatadi",
          "Yangi PHP jarayoni ochadi",
          "Massivni nusxalaydi",
          "Faylni o'chiradi",
        ],
        answer: 0,
        explain: "`yield from` iterator qiymatlarini joriy generator oqimiga qo'shadi, kodni takrorlamaslikka yordam beradi.",
      },
    ],
  },
  {
    id: 54,
    title: "Fibers: kooperativ konkurentlik (PHP 8.1+)",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<b>Fiber</b> — to'xtatib turish va keyin davom ettirish mumkin bo'lgan bajarilish oqimi. U thread emas: bir vaqtda faqat bitta fiber ishlaydi, almashinuv esa kodning o'zi <code>Fiber::suspend()</code> chaqirganda sodir bo'ladi. Bu I/O kutishlarini event loop bilan birlashtirish uchun asos.",
      },
      {
        type: "code",
        title: "fiber.php",
        code: String.raw`<?php
$fiber = new Fiber(function (string $ism): string {
    $salom = Fiber::suspend("Kutilyapti: $ism");
    return "$salom, $ism!";
});

$natija = $fiber->start('Aziza');
echo $natija, PHP_EOL;

$fiber->resume('Salom');
echo $fiber->getReturn(), PHP_EOL;`,
        outputLabel: "Natija",
        output: "Kutilyapti: Aziza\nSalom, Aziza!",
      },
      {
        type: "p",
        html: "<code>start()</code> fiberni ishga tushiradi va birinchi <code>suspend()</code> qiymatini qaytaradi. <code>resume($x)</code> esa <code>suspend()</code> ifodasining natijasi sifatida <code>$x</code> ni yuboradi. Fiber tugagach, qaytgan qiymat <code>getReturn()</code> orqali olinadi.",
      },
      {
        type: "code",
        title: "scheduler.php",
        code: String.raw`<?php
$vazifalar = [
    new Fiber(function (): void {
        echo "A1\n";
        Fiber::suspend();
        echo "A2\n";
    }),
    new Fiber(function (): void {
        echo "B1\n";
        Fiber::suspend();
        echo "B2\n";
    }),
];

foreach ($vazifalar as $fiber) {
    $fiber->start();
}
foreach ($vazifalar as $fiber) {
    if ($fiber->isSuspended()) {
        $fiber->resume();
    }
}`,
        outputLabel: "Natija",
        output: "A1\nB1\nA2\nB2",
      },
      {
        type: "table",
        head: ["Metod", "Vazifasi"],
        rows: [
          ["start(...$args)", "Fiberni boshlaydi yoki birinchi suspend qiymatini qaytaradi"],
          ["resume($qiymat)", "To'xtagan fiberni davom ettiradi"],
          ["throw($e)", "Fiber ichiga istisno yuboradi"],
          ["getReturn()", "Tugagan fiberning qaytish qiymati"],
          ["isSuspended()", "Fiber to'xtab turganini bildiradi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Fiber parallel hisoblash emas",
        html: "Fiber ichida <code>sleep()</code> yoki bloklovchi <code>PDO</code> so'rovi butun jarayonni to'xtatadi. Haqiqiy konkurentlik uchun Revolt, Amp yoki Swoole kabi event loop va async I/O kerak. Fiber faqat bu kutubxonalarga kodni to'xtatish imkonini beradi.",
      },
      {
        type: "ul",
        items: [
          "Fiber holatini tashqi kod boshqaradi; `suspend()` faqat fiber ichida chaqiriladi.",
          "Fiberdan tashqarida `Fiber::suspend()` chaqirilsa `FiberError` yuz beradi.",
          "Har bir fiber alohida stack oladi; juda ko'p fiber xotirani ko'paytiradi.",
          "Kutubxonalar odatda fiberlarni event loop ichida avtomatik rejalashtiradi.",
        ],
      },
    ],
    quiz: [
      {
        q: "Fiber qaysi PHP versiyasida paydo bo'lgan?",
        options: ["PHP 7.4", "PHP 8.1", "PHP 8.3", "PHP 5.6"],
        answer: 1,
        explain: "Fiber PHP 8.1 da `Fiber` klassi sifatida qo'shilgan.",
      },
      {
        q: "`Fiber::suspend($x)` natijasi sifatida keyinchalik nima qaytadi?",
        options: ["Har doim null", "Fiberning qaytish qiymati", "`resume($x2)` dagi `$x2`", "Yangi Fiber obyekti"],
        answer: 2,
        explain: "`suspend()` ifodasi `resume()` ga berilgan argumentni qaytaradi; bu ikki tomonlama almashinuv imkonini beradi.",
      },
      {
        q: "Fiberlar bir vaqtda bir nechta kodni parallel bajaradimi?",
        options: [
          "Yo'q, ular kooperativ almashinadi",
          "Ha, har biri alohida OS threadida",
          "Ha, faqat CLI'da",
          "Faqat JIT yoqilganda",
        ],
        answer: 0,
        explain: "Fiber — kooperativ model: bitta jarayonda bir paytda bitta fiber bajariladi, almashinuv `suspend/resume` bilan bo'ladi.",
      },
    ],
  },
  {
    id: 55,
    title: "Enumlar: holatlarni xavfsiz tur bilan ifodalash",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "PHP 8.1 dagi <code>enum</code> — oldindan belgilangan holatlar to'plami. U sirli matnlar (<code>'faol'</code>, <code>'active'</code>, <code>'1'</code>) o'rniga bitta tur ishlatish imkonini beradi. <b>Pure enum</b> faqat case'larga ega, <b>backed enum</b> esa <code>string</code> yoki <code>int</code> qiymat saqlaydi.",
      },
      {
        type: "code",
        title: "holat.php",
        code: String.raw`<?php
enum Holat: string
{
    case Yangi = 'yangi';
    case Faol = 'faol';
    case Yopilgan = 'yopilgan';

    public function rang(): string
    {
        return match ($this) {
            self::Yangi => 'sariq',
            self::Faol => 'yashil',
            self::Yopilgan => 'kulrang',
        };
    }
}

$holat = Holat::from('faol');
echo $holat->name, ' / ', $holat->value, PHP_EOL;
echo $holat->rang(), PHP_EOL;
echo Holat::tryFrom('arxiv')?->name ?? 'topilmadi', PHP_EOL;`,
        outputLabel: "Natija",
        output: "Faol / faol\nyashil\ntopilmadi",
      },
      {
        type: "p",
        html: "<code>from()</code> mos qiymat topilmasa <code>ValueError</code> otadi, <code>tryFrom()</code> esa <code>null</code> qaytaradi. Enumlar interfeyslarni bajarishi va metodlarga ega bo'lishi mumkin, lekin klassdan meros olmaydi va xossa saqlay olmaydi. Bu ularni yengil va bashoratli qiladi.",
      },
      {
        type: "code",
        title: "rol.php",
        code: String.raw`<?php
interface Yorliqlanadigan
{
    public function yorliq(): string;
}

enum Rol: string implements Yorliqlanadigan
{
    case Admin = 'admin';
    case User = 'user';

    public function yorliq(): string
    {
        return match ($this) {
            self::Admin => 'Administrator',
            self::User => 'Foydalanuvchi',
        };
    }

    public static function ruxsatlar(self $rol): array
    {
        return $rol === self::Admin
            ? ['read', 'write', 'delete']
            : ['read'];
    }
}

echo Rol::User->yorliq(), PHP_EOL;
echo implode(',', Rol::ruxsatlar(Rol::Admin)), PHP_EOL;
echo implode(',', array_map(
    fn (Rol $r): string => $r->value,
    Rol::cases()
)), PHP_EOL;`,
        outputLabel: "Natija",
        output: "Foydalanuvchi\nread,write,delete\nadmin,user",
      },
      {
        type: "table",
        head: ["Amal", "Yozilishi", "Natija"],
        rows: [
          ["Case olish", "Holat::Faol", "Enum obyekti"],
          ["Qiymatdan olish", "Holat::from('faol')", "Holat::Faol"],
          ["Xavfsiz olish", "Holat::tryFrom('x')", "null yoki case"],
          ["Barcha case'lar", "Holat::cases()", "Case massivi"],
          ["Nomi / qiymati", "$h->name / $h->value", "Matn / scalar"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Bazada enum qanday saqlanadi?",
        html: "Backed enum'ni bazada uning <code>value</code> qiymati bilan saqlang, o'qishda <code>from()</code> orqali qayta tiklang. `strict_types=1` bilan ishlang: bu tasodifiy matnni enum o'rniga o'tkazib yubormaydi. JSON'da backed enum odatda o'z qiymatini beradi.",
      },
      {
        type: "ul",
        items: [
          "Holatlar soni cheklangan bo'lsa, enum satrlarga qaraganda xavfsizroq.",
          "Switch o'rniga `match ($this)` ishlatish to'liq qamrovni tekshiradi.",
          "Enum'ga biznes metodlarini qo'shish mumkin, lekin og'ir I/O qo'shmang.",
          "Enum case'lari singleton: `===` bilan solishtirish ishonchli.",
        ],
      },
    ],
    quiz: [
      {
        q: "Backed enum case'ining saqlangan qiymatiga qanday murojaat qilinadi?",
        options: ["$case->name", "$case->value", "$case->get()", "enum_value($case)"],
        answer: 1,
        explain: "`name` — case nomi, `value` esa backed enum uchun e'lon qilingan scalar qiymat.",
      },
      {
        q: "`Holat::from('nomalum')` mos qiymat topmasa nima bo'ladi?",
        options: ["null qaytadi", "false qaytadi", "ValueError otiladi", "Birinchi case qaytadi"],
        answer: 2,
        explain: "`from()` qat'iy: mos qiymat bo'lmasa ValueError otadi. Xavfsiz variant — `tryFrom()`, u null qaytaradi.",
      },
      {
        q: "Enum klass haqida qaysi gap to'g'ri?",
        options: [
          "Enum metodlarga ega bo'lishi mumkin",
          "Enum oddiy klassdan meros olishi mumkin",
          "Enum'da dinamik xossalar saqlanadi",
          "Enum faqat int qiymat qabul qiladi",
        ],
        answer: 0,
        explain: "Enum metodlar va interfeyslarni qo'llab-quvvatlaydi, lekin klassdan meros olmaydi va xossa saqlamaydi.",
      },
    ],
  },
  {
    id: 56,
    title: "readonly, final va clone with: obyektni himoyalash",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<code>readonly</code> xossa bir marta, e'lon qilingan klass doirasida o'rnatiladi va boshqa o'zgartirilmaydi. PHP 8.3 dagi <code>clone with</code> esa readonly obyektning nusxasini bitta maydonini o'zgartirib yaratish imkonini beradi. Bu immutable DTO va value object'lar uchun juda qulay.",
      },
      {
        type: "code",
        title: "nuqta.php",
        code: String.raw`<?php
readonly class Nuqta
{
    public function __construct(
        public float $x = 0.0,
        public float $y = 0.0,
    ) {}

    public function withX(float $x): static
    {
        return clone($this, ['x' => $x]);
    }
}

$eski = new Nuqta(1.5, 2.0);
$yangi = $eski->withX(4.5);

echo "eski: {$eski->x}, {$eski->y}\n";
echo "yangi: {$yangi->x}, {$yangi->y}\n";`,
        outputLabel: "Natija",
        output: "eski: 1.5, 2\nyangi: 4.5, 2",
      },
      {
        type: "p",
        html: "Bu yerda <code>$eski</code> o'zgarmaydi: <code>clone with</code> yangi obyekt qaytaradi. Immutable yondashuv kutilmagan yon effektlarni yo'q qiladi, ayniqsa bir obyekt bir necha servisga uzatilganda. Lekin readonly faqat <b>havolani</b> himoyalaydi: ichidagi obyekt yoki massiv o'zgarishi mumkin.",
      },
      {
        type: "code",
        title: "stavka.php",
        code: String.raw`<?php
final class Stavka
{
    private const MIN = 1;

    public function __construct(
        private readonly int $foiz,
    ) {
        if ($foiz < self::MIN) {
            throw new InvalidArgumentException('Foiz 1 dan kichik');
        }
    }

    public function hisobla(int $summa): int
    {
        return intdiv($summa * $this->foiz, 100);
    }
}

$stavka = new Stavka(12);
echo $stavka->hisobla(250000), PHP_EOL;

try {
    new Stavka(0);
} catch (InvalidArgumentException $e) {
    echo $e->getMessage(), PHP_EOL;
}`,
        outputLabel: "Natija",
        output: "30000\nFoiz 1 dan kichik",
      },
      {
        type: "table",
        head: ["Kalit so'z", "Nimani taqiqlaydi", "Qachon ishlatiladi"],
        rows: [
          ["final class", "Meros olishni", "Mantiq tugallangan servislar"],
          ["final method", "Metodni override qilishni", "Muhim invariantlar"],
          ["readonly property", "Qayta yozishni", "DTO, konfiguratsiya, ID"],
          ["readonly class", "Barcha xossalarni yozishni", "To'liq immutable obyekt"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Chuqur immutablelik avtomatik emas",
        html: "<code>readonly</code> massiv yoki obyektni muzlatmaydi: <code>$dto->tags[] = 'yangi'</code> kabi amal xato bermasligi mumkin, agar xossa massiv bo'lsa. Chuqur himoya uchun massivni konstruktorda nusxalab, tashqariga readonly wrapper yoki immutable kolleksiya bering.",
      },
      {
        type: "ul",
        items: [
          "`clone with` faqat PHP 8.3+ da mavjud; eski versiyada `withX()` ichida `new self(...)` yozing.",
          "readonly xossani `__clone()` ichida ham o'zgartirib bo'lmaydi (clone with bundan mustasno).",
          "final klasslarni mock qilish qiyin; testda interfeysdan foydalaning.",
          "`static` qaytish turi meros oluvchi klassda ham to'g'ri turni saqlaydi.",
        ],
      },
    ],
    quiz: [
      {
        q: "`clone with` sintaksisi qaysi PHP versiyasida qo'shilgan?",
        options: ["PHP 8.0", "PHP 8.1", "PHP 8.2", "PHP 8.3"],
        answer: 3,
        explain: "PHP 8.3 `clone($obyekt, ['xossa' => $qiymat])` sintaksisini taqdim etdi.",
      },
      {
        q: "readonly xossaga qiymat necha marta berilishi mumkin?",
        options: ["Klass doirasida bir marta", "Har bir metodda bir marta", "Cheksiz marta", "Faqat `__clone()` ichida"],
        answer: 0,
        explain: "readonly xossa e'lon qilingan klass doirasida bir marta o'rnatiladi; keyingi yozishlar xato beradi.",
      },
      {
        q: "`final` bilan belgilangan metodni qanday o'zgartirish mumkin?",
        options: ["Override qilib", "Override qilib bo'lmaydi", "Faqat trait orqali", "Faqat static qilib"],
        answer: 1,
        explain: "final metodni meros oluvchi klass override qila olmaydi; bu muhim xatti-harakatni qulflaydi.",
      },
    ],
  },
  {
    id: 57,
    title: "Interfeyslar, LSP va kompozitsiya",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Interfeys — bu shartnoma: klass qanday metodlarni taqdim etishini e'lon qiladi, lekin ularning ichini belgilamaydi. Kichik va aniq interfeyslar testlash, almashtirish va kengaytirishni osonlashtiradi. Meros esa kuchli bog'lanish yaratadi; ko'p hollarda kompozitsiya afzal.",
      },
      {
        type: "code",
        title: "tolov.php",
        code: String.raw`<?php
interface TolovUsuli
{
    public function nomi(): string;
    public function yechish(int $tiyin): bool;
}

final class Naqd implements TolovUsuli
{
    public function nomi(): string { return 'Naqd'; }
    public function yechish(int $tiyin): bool { return $tiyin <= 500000; }
}

final class Karta implements TolovUsuli
{
    public function __construct(private int $balans) {}
    public function nomi(): string { return 'Karta'; }
    public function yechish(int $tiyin): bool { return $this->balans >= $tiyin; }
}

function sotibOl(TolovUsuli $tolov, int $narx): string
{
    return $tolov->yechish($narx)
        ? $tolov->nomi() . ": to'landi\n"
        : $tolov->nomi() . ": rad etildi\n";
}

echo sotibOl(new Naqd(), 120000);
echo sotibOl(new Karta(50000), 120000);`,
        outputLabel: "Natija",
        output: "Naqd: to'landi\nKarta: rad etildi",
      },
      {
        type: "p",
        html: "<b>Liskov almashtirish printsipi</b> (LSP): ostki tur ota tur o'rnida ishlatilganda kutilmagan xatti-harakat qilmasligi kerak. Agar interfeys metodini implementatsiya <code>'qo'llab-quvvatlanmaydi'</code> deb istisno otsa, shartnoma buzilgan. Bunday holatda interfeysni kichikroq qismlarga bo'ling.",
      },
      {
        type: "code",
        title: "kompozitsiya.php",
        code: String.raw`<?php
interface Log
{
    public function yoz(string $xabar): void;
}

final class FaylLog implements Log
{
    public function yoz(string $xabar): void
    {
        echo 'LOG: ', $xabar, PHP_EOL;
    }
}

final class BuyurtmaServisi
{
    public function __construct(private Log $log) {}

    public function yarat(int $id): void
    {
        // ... biznes mantiq
        $this->log->yoz("buyurtma #$id yaratildi");
    }
}

(new BuyurtmaServisi(new FaylLog()))->yarat(42);`,
        outputLabel: "Natija",
        output: "LOG: buyurtma #42 yaratildi",
      },
      {
        type: "table",
        head: ["Vosita", "Nima beradi", "Cheklovi"],
        rows: [
          ["Interfeys", "Shartnoma, ko'p implementatsiya", "Tana va xossa yo'q"],
          ["Abstract klass", "Qisman tayyor kod", "Bitta ota klass"],
          ["Trait", "Kodni qayta ishlatish", "Holat va konfliktlar ehtiyoti"],
          ["Kompozitsiya", "Bo'sh bog'lanish", "Ko'proq delegatsiya kodi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Interfeysni tor tuting",
        html: "Bitta katta interfeys o'rniga <code>Readable</code>, <code>Writable</code>, <code>Closeable</code> kabi kichik shartnomalar tuzing. Bu ISP (Interface Segregation) printsipiga mos: mijoz o'zi ishlatmaydigan metodlarga bog'lanmasin.",
      },
      {
        type: "ul",
        items: [
          "Konstruktorga interfeys bering, aniq klass emas — testda almashtirish oson.",
          "Implementatsiya metod parametrlarini toraytirmasin va qaytish turini kengaytirmasin.",
          "Meros chuqurligi 2–3 darajadan oshsa, kompozitsiyani ko'rib chiqing.",
          "`final` va interfeys birgalikda xavfsiz, lekin mock uchun interfeys yetarli.",
        ],
      },
    ],
    quiz: [
      {
        q: "LSP buzilishiga qaysi holat eng yaqqol misol?",
        options: [
          "Yangi metod qo'shish",
          "Interfeysni ikki klassda qo'llash",
          "Implementatsiyada qo'llab-quvvatlanmaydigan metod uchun istisno otish",
          "Konstruktorda validatsiya qilish",
        ],
        answer: 2,
        explain: "Agar subtype ota turdagi barcha chaqiruvlarni bajara olmasa, u o'rnida ishlatilishi mumkin emas — LSP buziladi.",
      },
      {
        q: "Kompozitsiyaning merosga nisbatan asosiy afzalligi nima?",
        options: [
          "Kamroq bog'lanish va oson almashtirish",
          "Har doim tezroq ishlashi",
          "Ko'proq xotira egallashi",
          "Faqat bitta klass bilan ishlashi",
        ],
        answer: 0,
        explain: "Kompozitsiya xatti-harakatni obyekt orqali yig'adi; implementatsiyani almashtirish oson va meros ierarxiyasi kerak emas.",
      },
      {
        q: "Bitta klass nechta interfeysni implements qilishi mumkin?",
        options: ["Faqat bitta", "Ko'pi bilan ikkita", "Cheklanmagan", "Faqat abstract klass bilan"],
        answer: 2,
        explain: "PHP'da klass bir nechta interfeysni implements qilishi mumkin; bu ko'p shartnomalarni birlashtiradi.",
      },
    ],
  },
  {
    id: 58,
    title: "Reflection: kodni kod bilan o'rganish",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Reflection API klass, metod, parametr va xossalarning metama'lumotlarini o'qiydi. DI konteynerlar, routerlar, serializerlar va test vositalari shu mexanizmdan foydalanadi. Reflection kuchli, lekin sekinroq: natijalarni keshlash va faqat zarur joyda ishlatish muhim.",
      },
      {
        type: "code",
        title: "reflection.php",
        code: String.raw`<?php
final class Hisob
{
    public function __construct(private array $data = []) {}
    public function get(string $kalit): mixed
    {
        return $this->data[$kalit] ?? null;
    }
}

$ref = new ReflectionClass(Hisob::class);
$obyekt = $ref->newInstance(['debug' => true]);

echo $ref->getShortName(), PHP_EOL;
echo $obyekt->get('debug') ? "debug yoniq\n" : "debug o'chiq\n";

foreach ($ref->getConstructor()?->getParameters() ?? [] as $p) {
    echo $p->getName(), ': ', $p->getType(), PHP_EOL;
}`,
        outputLabel: "Natija",
        output: "Hisob\ndebug yoniq\ndata: array",
      },
      {
        type: "p",
        html: "<code>ReflectionClass::newInstanceArgs()</code> konstruktorga argumentlarni dinamik uzatadi. <code>ReflectionMethod::invoke()</code> esa metodni nom bo'yicha chaqiradi. PHP 8.1 dan boshlab <code>setAccessible()</code> amalda hech narsa qilmaydi: private a'zolarga reflection orqali kirish default ochiq.",
      },
      {
        type: "code",
        title: "invoke.php",
        code: String.raw`<?php
class Kalkulyator
{
    private function qosh(int $a, int $b): int
    {
        return $a + $b;
    }
}

$metod = new ReflectionMethod(Kalkulyator::class, 'qosh');
echo $metod->invoke(new Kalkulyator(), 20, 22), PHP_EOL;
echo $metod->isPrivate() ? "private metod\n" : "public metod\n";
echo $metod->getNumberOfParameters(), " parametr\n";`,
        outputLabel: "Natija",
        output: "42\nprivate metod\n2 parametr",
      },
      {
        type: "table",
        head: ["Reflection klassi", "Asosiy vazifasi", "Amaliy misol"],
        rows: [
          ["ReflectionClass", "Klass tuzilishi, interfeyslar", "DI konteyner"],
          ["ReflectionMethod", "Metod parametrlari, atributlari", "Router, RPC"],
          ["ReflectionProperty", "Xossa turi va atributlari", "Serializer, ORM"],
          ["ReflectionParameter", "Parametr turi, default, nomi", "Argument resolver"],
          ["ReflectionAttribute", "Atributni o'qish", "Validatsiya, ruxsat"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Reflection — ichki tuzilishga aralashuv",
        html: "Private metodni chaqirish test yoki migratsiya uchun foydali bo'lishi mumkin, lekin biznes kodda kapsulani buzadi. Bunday yondashuvni izoh bilan asoslang. Reflection natijalarini statik keshda saqlang: har so'rovda qayta skanerlash unumdorlikni pasaytiradi.",
      },
      {
        type: "ul",
        items: [
          "Atributlarni o'qish uchun `getAttributes()` so'ng `newInstance()` chaqiriladi.",
          "Parametr default qiymatini `isDefaultValueAvailable()` bilan tekshiring.",
          "Klass mavjudligini `class_exists()` yoki `ReflectionClass` orqali tekshiring.",
          "Reflection bilan yaratilgan obyektda konstruktor validatsiyasi ham ishlaydi.",
        ],
      },
    ],
    quiz: [
      {
        q: "Reflection API asosan nima uchun ishlatiladi?",
        options: [
          "Faqat fayl o'chirish uchun",
          "Klass va metod metama'lumotlarini o'qish uchun",
          "SQL so'rovlarni tezlashtirish uchun",
          "Brauzer CSS'ini tahlil qilish uchun",
        ],
        answer: 1,
        explain: "Reflection klass, metod, parametr, xossa va atributlar haqidagi ma'lumotni runtime'da o'qish imkonini beradi.",
      },
      {
        q: "PHP 8.1+ da private metodni ReflectionMethod orqali chaqirish uchun nima kerak?",
        options: [
          "Albatta `setAccessible(true)`",
          "Metodni public qilish",
          "ReflectionMethod yetarli, alohida ruxsat shart emas",
          "Faqat CLI rejimida ishlaydi",
        ],
        answer: 2,
        explain: "PHP 8.1 dan boshlab `setAccessible()` amalda no-op; reflection private a'zolarga kira oladi.",
      },
      {
        q: "Reflection natijalarini keshlashning asosiy sababi nima?",
        options: ["Unumdorlikni oshirish", "Xotirani ko'paytirish", "Xatolarni yashirish", "Testlarni o'chirish"],
        answer: 0,
        explain: "Reflection nisbatan qimmat; klass metama'lumotlarini qayta ishlab chiqmaslik uchun kesh ishlatiladi.",
      },
    ],
  },
  {
    id: 59,
    title: "Attributes: kodga metadata yozish",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "PHP 8 <b>attribute</b>'lari klass, metod, xossa yoki parametrga izoh emas, balki mashina o'qiydigan metadata qo'shadi. Ular o'z-o'zidan bajarilmaydi: framework yoki sizning kodingiz reflection orqali ularni topib, mantiqni qo'llaydi. Bu router, validatsiya va ruxsat tekshiruvining zamonaviy usuli.",
      },
      {
        type: "code",
        title: "ruxsat.php",
        code: String.raw`<?php
#[Attribute(Attribute::TARGET_METHOD)]
final class Ruxsat
{
    public function __construct(public string $rol) {}
}

final class AdminController
{
    #[Ruxsat('admin')]
    public function ochirish(int $id): string
    {
        return "o'chirildi: $id";
    }
}

function tekshir(object $controller, string $metod, string $rol): bool
{
    $ref = new ReflectionMethod($controller, $metod);
    $attr = $ref->getAttributes(Ruxsat::class)[0] ?? null;
    return $attr === null || $attr->newInstance()->rol === $rol;
}

$c = new AdminController();
echo tekshir($c, 'ochirish', 'admin') ? "ruxsat\n" : "taqiq\n";
echo tekshir($c, 'ochirish', 'user') ? "ruxsat\n" : "taqiq\n";`,
        outputLabel: "Natija",
        output: "ruxsat\ntaqiq",
      },
      {
        type: "p",
        html: "Attribute klassi <code>#[Attribute]</code> bilan belgilanadi va qaysi nishonlarga qo'llanishi mumkinligini ko'rsatadi: <code>TARGET_CLASS</code>, <code>TARGET_METHOD</code>, <code>TARGET_PROPERTY</code>, <code>TARGET_PARAMETER</code> va boshqalar. <code>IS_REPEATABLE</code> bir nishonga bir nechta attribute qo'shishga ruxsat beradi.",
      },
      {
        type: "code",
        title: "validatsiya.php",
        code: String.raw`<?php
#[Attribute(Attribute::TARGET_PROPERTY | Attribute::IS_REPEATABLE)]
final class Validatsiya
{
    public function __construct(public string $qoida) {}
}

final class Forma
{
    #[Validatsiya('required')]
    #[Validatsiya('email')]
    public string $email = '';
}

$prop = new ReflectionProperty(Forma::class, 'email');
foreach ($prop->getAttributes(Validatsiya::class) as $attr) {
    echo $attr->newInstance()->qoida, PHP_EOL;
}`,
        outputLabel: "Natija",
        output: "required\nemail",
      },
      {
        type: "table",
        head: ["Atribut", "Ma'nosi", "Misol"],
        rows: [
          ["TARGET_CLASS", "Klassga qo'llanadi", "Resurs nomi"],
          ["TARGET_METHOD", "Metodga qo'llanadi", "Ruxsat, route"],
          ["TARGET_PROPERTY", "Xossaga qo'llanadi", "Validatsiya"],
          ["TARGET_PARAMETER", "Parametrga qo'llanadi", "DI, mapping"],
          ["IS_REPEATABLE", "Bir nechta nusxa", "Bir nechta qoida"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Attribute argumentlari cheklangan",
        html: "Attribute argumentlari konstant ifoda bo'lishi kerak: literal, konstanta yoki enum case. Funksiya chaqiruvi yoki obyekt yaratish mumkin emas. Atributni o'qish uchun avval <code>newInstance()</code> chaqiriladi; faqat shundan keyin konstruktordagi validatsiya ishlaydi.",
      },
      {
        type: "ul",
        items: [
          "Attribute nomi klassga mos bo'lishi shart; istalgan nomdagi oddiy izoh atribut emas.",
          "`getAttributes()` faqat bevosita qo'llangan atributlarni beradi.",
          "Framework atributlarini hujjatdan tekshiring: ularning ba'zilari keshlanadi.",
          "Atributni biznes mantiq bilan aralashtirmang — u faqat metadata bo'lib qolsin.",
        ],
      },
    ],
    quiz: [
      {
        q: "PHP attribute'lari qanday bajariladi?",
        options: [
          "PHP ularni avtomatik chaqiradi",
          "Faqat Composer orqali",
          "Ular reflection orqali o'qiladi va kod mantiqi qo'llaydi",
          "Ular CSS kabi brauzerda ishlaydi",
        ],
        answer: 2,
        explain: "Attribute — metadata; uni o'qish va mantiqni qo'llash sizning yoki frameworkning kodiga bog'liq.",
      },
      {
        q: "`#[Attribute]` belgisi nima uchun kerak?",
        options: [
          "Atribut nomini qisqartirish uchun",
          "Klassning attribute ekanini e'lon qilish uchun",
          "Atributni o'chirish uchun",
          "Faqat testlarda ishlatish uchun",
        ],
        answer: 1,
        explain: "Atribut klassi `#[Attribute]` bilan belgilanadi; bu uning nishonlari va takrorlanishini ham sozlash imkonini beradi.",
      },
      {
        q: "Attribute argumenti qanday ifoda bo'lishi mumkin?",
        options: [
          "Istalgan funksiya chaqiruvi",
          "Yangi obyekt",
          "Faqat massiv",
          "Konstant ifoda: literal, konstanta yoki enum case",
        ],
        answer: 3,
        explain: "Attribute argumentlari kompilyatsiya vaqtida ma'lum bo'lgan konstant ifodalar bo'lishi kerak.",
      },
    ],
  },
];
