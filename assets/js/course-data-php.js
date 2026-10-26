/* PHP course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.php = {
    id: "php",
    title: "PHP",
    logoClass: "course-logo--php",
    logoText: "PHP",
    level: "Boshlovchi",
    hours: "~20 soat",
    testCount: 147,
    lang: "php",
    interactive: "none",
    heroTitle: "PHP: serverda ishlaydigan veb-dasturlash",
    heroDesc:
      "49 dars, 147 test va 12-savollik yakuniy imtihon. PHP 8 sintaksisidan boshlab massivlar, sessiyalar, OOP, PDO, xavfsizlik, REST API, PHPUnit va Laravel asoslarigacha — oxirida to'liq MVC loyiha yaratasiz.",
    metaDescription:
      "PHP kursi: 49 dars, 147 test va 12-savollik imtihon. Server-side asoslar, massivlar, funksiyalar, cookie, fayl yuklash, OOP, Composer, PDO, SQL injection himoyasi, REST API, PHPUnit, Laravel va MVC loyiha — PHP 8.2 o'zbek tilida.",
    modules: [
      { title: "Asoslar", lessons: [1, 2, 3, 4] },
      { title: "Funksiyalar va formalar", lessons: [5, 6] },
      { title: "Sessiyalar va OOP", lessons: [7, 8] },
      { title: "Baza, xatolar va vositalar", lessons: [9, 10, 11] },
      { title: "Birinchi loyiha", lessons: [12] },
      { title: "Til chuqurligi", lessons: [13, 14, 15] },
      { title: "Veb, cookie va fayllar", lessons: [16, 17, 18, 19] },
      { title: "OOP chuqur", lessons: [20, 21, 22, 23, 24] },
      { title: "Composer, PDO va xavfsizlik", lessons: [25, 26, 27, 28, 29] },
      { title: "API, xatolar va testlar", lessons: [30, 31, 32, 33, 34, 35, 36] },
      { title: "Laravel va MVC loyiha", lessons: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49] },
      { title: "Yakuniy imtihon", lessons: [50] },
    ],
    lessons: [
      {
        id: 1,
        title: "PHP nima va serverda qanday ishlaydi?",
        minutes: 12,
        blocks: [
          {
            type: "p",
            html: "PHP — serverda bajariladigan dasturlash tili. Foydalanuvchi brauzerda sahifani ochganda so'rov serverga boradi, PHP kodi ishlaydi va natijada tayyor HTML qaytadi. Brauzer PHP kodini emas, faqat natijani ko'radi.",
          },
          {
            type: "code",
            title: "salom.php",
            code: `<?php
echo "Salom, Noldan!";
echo PHP_EOL;
echo "Serverda PHP ishlayapti.";`,
            output: `Salom, Noldan!
Serverda PHP ishlayapti.`,
          },
          {
            type: "table",
            head: ["Qism", "Vazifasi"],
            rows: [
              ["<code>&lt;?php</code>", "PHP kodi boshlanishini bildiradi"],
              ["<code>echo</code>", "Matn yoki qiymatni chiqaradi"],
              ["<code>;</code>", "Buyruqni tugatadi"],
              ["<code>.</code>", "Matn va qiymatlarni birlashtiradi"],
              ["<code>PHP_EOL</code>", "Joriy tizimdagi qator oxiri belgisi"],
              ["<code>?&gt;</code>", "PHP rejimini yopadi (ixtiyoriy)"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "PHP va HTML bir faylda",
            html: "PHP fayli HTML bilan aralash bo'lishi mumkin. Server avval PHP qismini bajaradi, natijani HTML ichiga qo'yadi va tayyor sahifani brauzerga yuboradi. Shuning uchun foydalanuvchi PHP kodini ko'rmaydi.",
          },
          {
            type: "code",
            title: "index.php",
            code: `<?php
$ism = "Aziza";
$soat = 10;
?>
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Salom</title>
</head>
<body>
  <h1>Salom, <?= $ism ?>!</h1>
  <p>Hozir soat <?= $soat ?>:00.</p>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Brauzerda “Salom, Aziza!” sarlavhasi va “Hozir soat 10:00.” matni chiqadi. Sahifa manbasida PHP kodi ko'rinmaydi — server tayyor HTML yuboradi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Lokal serverni ishga tushiring",
            html: "Loyiha papkasida <code>php -S localhost:8000</code> buyrug'ini bering va brauzerda <code>http://localhost:8000/index.php</code> manzilini oching. Faylni ikki marta bosib ochish PHP kodini bajarmaydi.",
          },
        ],
        quiz: [
          {
            q: "PHP kodi odatda qayerda bajariladi?",
            options: ["Brauzerda", "CSS faylida", "Serverda", "Faqat mobil ilovada"],
            answer: 2,
            explain: "PHP server-side til: kod serverda bajariladi, brauzerga esa tayyor HTML yetib boradi.",
          },
          {
            q: "PHP kodi qaysi belgilar bilan boshlanadi?",
            options: ["<?php", "<php>", "<?=", "#php"],
            answer: 0,
            explain: "<?php ochilish tegi PHP interpretatoriga kod boshlanganini bildiradi. <?= qisqa chiqarish tegi.",
          },
          {
            q: "echo buyrug'i nima qiladi?",
            options: ["Faylni o'chiradi", "O'zgaruvchi yaratadi", "Serverni qayta ishga tushiradi", "Matn yoki qiymatni chiqaradi"],
            answer: 3,
            explain: "echo natijani chiqaradi: brauzerda HTML qismi sifatida yoki terminalda matn ko'rinishida.",
          },
        ],
      },
      {
        id: 2,
        title: "O'zgaruvchilar, turlar va matnlar",
        minutes: 14,
        blocks: [
          {
            type: "p",
            html: "PHP'da o'zgaruvchi nomi <code>$</code> belgisi bilan boshlanadi. Turini oldindan e'lon qilish shart emas: qiymat qanday bo'lsa, PHP o'zgaruvchini shunga moslaydi. Eng ko'p ishlatiladigan turlar — matn, butun son, kasr son va mantiqiy qiymat.",
          },
          {
            type: "code",
            title: "turlar.php",
            code: `<?php
$ism = "Aziza";
$yosh = 15;
$baho = 4.8;
$faol = true;

var_dump($ism);
var_dump($yosh);
var_dump($baho);
var_dump($faol);`,
            output: `string(5) "Aziza"
int(15)
float(4.8)
bool(true)`,
          },
          {
            type: "table",
            head: ["Tur", "Misol", "Nima saqlaydi"],
            rows: [
              ["<code>string</code>", "<code>\"Aziza\"</code>", "Matn"],
              ["<code>int</code>", "<code>42</code>", "Butun son"],
              ["<code>float</code>", "<code>4.8</code>", "Kasr son"],
              ["<code>bool</code>", "<code>true</code>, <code>false</code>", "Mantiqiy qiymat"],
              ["<code>null</code>", "<code>null</code>", "Qiymat yo'qligi"],
              ["<code>array</code>", "<code>[1, 2]</code>", "Qiymatlar ro'yxati"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "O'zgaruvchi nomi qoidalari",
            html: "Nom <code>$</code> dan keyin harf yoki pastki chiziq bilan boshlanadi; raqam bilan boshlanmaydi. Katta-kichik harf farqlanadi: <code>$ism</code> va <code>$Ism</code> — ikki xil o'zgaruvchi.",
          },
          {
            type: "code",
            title: "matn.php",
            code: `<?php
$ism = "Aziza";
$yosh = 15;

echo "Salom, $ism!" . PHP_EOL;
echo "Siz {$yosh} yoshdasiz." . PHP_EOL;
echo 'Bu matnda $ism oddiy belgi.' . PHP_EOL;`,
            output: `Salom, Aziza!
Siz 15 yoshdasiz.
Bu matnda $ism oddiy belgi.`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Qo'sh va bitta tirnoq",
            html: "Qo'sh tirnoqli matnda <code>$ism</code> qiymatga almashtiriladi, bitta tirnoqda esa matn bo'lib qoladi. O'zgaruvchi chegarasini aniqlash uchun jingalak qavs ishlatiladi: <code>\"{$ism}ga\"</code>.",
          },
        ],
        quiz: [
          {
            q: "PHP'da o'zgaruvchi nomi qanday belgi bilan boshlanadi?",
            options: ["#", "@", "%", "$"],
            answer: 3,
            explain: "PHP'da har bir o'zgaruvchi $ belgisi bilan boshlanadi, masalan $ism.",
          },
          {
            q: "Qo'sh tirnoqli matnda o'zgaruvchini ajratib ko'rsatish uchun qaysi yozuv ishlatiladi?",
            options: ["{$ism}", "{ism}", "[$ism]", "($ism)"],
            answer: 0,
            explain: "Jingalak qavs ichidagi {$ism} o'zgaruvchi nomining chegarasini aniq belgilaydi.",
          },
          {
            q: "var_dump(15) natijasi qanday boshlanadi?",
            options: ["string(2)", "int(15)", "float(15)", "bool(true)"],
            answer: 1,
            explain: "15 butun son bo'lgani uchun var_dump int(15) chiqaradi.",
          },
        ],
      },
      {
        id: 3,
        title: "Shartlar, match va tsikllar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Dastur qaror qabul qilishi uchun shart operatorlari kerak. <code>if</code> / <code>elseif</code> / <code>else</code> zanjiri bir nechta holatni tekshiradi, <code>match</code> esa bitta qiymatni bir nechta variant bilan qiyoslaydi.",
          },
          {
            type: "code",
            title: "shartlar.php",
            code: `<?php
$ball = 85;

if ($ball >= 90) {
    $daraja = "A";
} elseif ($ball >= 80) {
    $daraja = "B";
} else {
    $daraja = "C";
}

echo "Ball: $ball, daraja: $daraja" . PHP_EOL;

$kun = "shanba";
$ishKuni = match ($kun) {
    "shanba", "yakshanba" => false,
    default => true,
};

echo $ishKuni ? "Ish kuni" : "Dam olish kuni";`,
            output: `Ball: 85, daraja: B
Dam olish kuni`,
          },
          {
            type: "note",
            variant: "info",
            title: "match qanday ishlaydi?",
            html: "<code>match</code> qiymatlarni qat'iy (<code>===</code>) taqqoslaydi va tanlangan tarmoqning natijasini qaytaradi. Hech bir variant mos kelmasa va <code>default</code> bo'lmasa, <code>UnhandledMatchError</code> yuzaga keladi.",
          },
          {
            type: "code",
            title: "tsikllar.php",
            code: `<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Qadam: $i" . PHP_EOL;
}

$son = 3;
while ($son > 0) {
    echo "Qoldi: $son" . PHP_EOL;
    $son--;
}

$ismlar = ["Ali", "Aziza", "Bek"];
foreach ($ismlar as $ism) {
    echo "- $ism" . PHP_EOL;
}`,
            output: `Qadam: 1
Qadam: 2
Qadam: 3
Qadam: 4
Qadam: 5
Qoldi: 3
Qoldi: 2
Qoldi: 1
- Ali
- Aziza
- Bek`,
          },
          {
            type: "table",
            head: ["Tsikl", "Qachon mos"],
            rows: [
              ["<code>for</code>", "Takrorlar soni oldindan ma'lum"],
              ["<code>while</code>", "Shart bajarilguncha davom etadi"],
              ["<code>do...while</code>", "Kamida bir marta bajariladi"],
              ["<code>foreach</code>", "Massiv elementlarini kezish"],
              ["<code>break</code>", "Tsiklni butunlay to'xtatadi"],
              ["<code>continue</code>", "Joriy aylanishni o'tkazib yuboradi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Cheksiz tsikldan saqlaning",
            html: "<code>while</code> ichida shartni o'zgartiradigan kod bo'lmasa, tsikl tugamaydi. Har doim hisoblagichni oshiring yoki <code>break</code> uchun aniq shart qo'shing.",
          },
        ],
        quiz: [
          {
            q: "PHP'da qo'shimcha shartni qaysi kalit so'z bilan yozamiz?",
            options: ["elseif", "elif", "otherwise", "next"],
            answer: 0,
            explain: "PHP'da if zanjirining keyingi sharti elseif bilan yoziladi. elif boshqa tillarga xos.",
          },
          {
            q: "match ifodasi qiymatlarni qanday taqqoslaydi?",
            options: ["==", "===", "!=", "Faqat sonlarni"],
            answer: 1,
            explain: "match qat'iy taqqoslash (===) ishlatadi, shuning uchun tur ham muhim.",
          },
          {
            q: "while ($son > 0) tsikli $son = 0 bo'lsa necha marta bajariladi?",
            options: ["1", "0", "Cheksiz", "2"],
            answer: 1,
            explain: "Shart birinchi tekshiruvdayoq false bo'ladi, shuning uchun tsikl tanasi umuman bajarilmaydi.",
          },
        ],
      },
      {
        id: 4,
        title: "Indeksli va assotsiativ massivlar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Massiv bir nechta qiymatni bitta o'zgaruvchida saqlaydi. Indeksli massivda kalitlar 0 dan boshlanadi. Assotsiativ massivda esa kalit o'zimiz tanlagan nom bo'ladi: <code>ism</code>, <code>yosh</code>, <code>ball</code>.",
          },
          {
            type: "code",
            title: "massivlar.php",
            code: `<?php
$ismlar = ["Ali", "Aziza", "Bek"];
$ismlar[] = "Dilnoza";

echo count($ismlar) . PHP_EOL;
echo $ismlar[0] . PHP_EOL;
echo $ismlar[3] . PHP_EOL;

$talaba = [
    "ism" => "Aziza",
    "yosh" => 16,
    "ball" => 92,
];

echo $talaba["ism"] . " — " . $talaba["ball"] . " ball" . PHP_EOL;`,
            output: `4
Ali
Dilnoza
Aziza — 92 ball`,
          },
          {
            type: "table",
            head: ["Vosita", "Vazifasi"],
            rows: [
              ["<code>count()</code>", "Elementlar sonini qaytaradi"],
              ["<code>$massiv[] = ...</code>", "Oxiriga yangi element qo'shadi"],
              ["<code>array_keys()</code>", "Barcha kalitlarni oladi"],
              ["<code>in_array()</code>", "Qiymat bor-yo'qligini tekshiradi"],
              ["<code>sort()</code>", "Indeksli massivni tartiblaydi"],
              ["<code>ksort()</code>", "Kalitlar bo'yicha tartiblaydi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Massiv — tartiblangan xarita",
            html: "PHP massivi kalit va qiymat juftliklaridan iborat. Indeksli massivda kalitlar avtomatik 0, 1, 2 bo'ladi; assotsiativ massivda esa kalitni o'zingiz yozasiz. Ikkala turda ham <code>[ ]</code> sintaksisi ishlatiladi.",
          },
          {
            type: "code",
            title: "foreach.php",
            code: `<?php
$talaba = ["ism" => "Bek", "yosh" => 18, "ball" => 88];

foreach ($talaba as $kalit => $qiymat) {
    echo "$kalit: $qiymat" . PHP_EOL;
}

$sonlar = [4, 7, 2, 9];
$yigindi = 0;

foreach ($sonlar as $son) {
    $yigindi += $son;
}

echo "Yig'indi: $yigindi" . PHP_EOL;`,
            output: `ism: Bek
yosh: 18
ball: 88
Yig'indi: 22`,
          },
          {
            type: "note",
            variant: "tip",
            title: "Keyingi qadam",
            html: "Massiv ustida amal bajarish uchun <code>array_map()</code> va <code>array_filter()</code> funksiyalarini o'rganing. Ular har bir elementni o'zgartirish yoki shartga moslarini tanlashda qulay.",
          },
        ],
        quiz: [
          {
            q: "Indeksli massivning birinchi elementi qaysi kalitda turadi?",
            options: ["1", "0", "\"birinchi\"", "-1"],
            answer: 1,
            explain: "PHP indeksli massivlari 0 dan boshlanadi, shuning uchun birinchi element $ismlar[0].",
          },
          {
            q: "Assotsiativ massivda ism qiymatini qanday olamiz?",
            options: ["$talaba[0]", "$talaba->ism", "$talaba(ism)", "$talaba['ism']"],
            answer: 3,
            explain: "Assotsiativ massivda kalit kvadrat qavs ichida beriladi: $talaba['ism'].",
          },
          {
            q: "foreach ($talaba as $kalit => $qiymat) nimani beradi?",
            options: ["Faqat qiymatlarni", "Massiv uzunligini", "Kalit va qiymatni", "Faqat birinchi elementni"],
            answer: 2,
            explain: "Kalit => qiymat shakli har aylanishda ikkala qismni ham beradi.",
          },
        ],
      },
      {
        id: 5,
        title: "Funksiyalar, scope va include",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Funksiya — nomlangan kod bloki. Uni bir marta yozib, kerak bo'lganda qayta chaqirasiz. Parametrlar funksiyaga ma'lumot beradi, <code>return</code> esa natijani qaytaradi. PHP 8.2'da parametr va qaytish turini yozish tavsiya etiladi.",
          },
          {
            type: "code",
            title: "funksiyalar.php",
            code: `<?php
declare(strict_types=1);

function salomlash(string $ism): string
{
    return "Salom, $ism!";
}

function qosh(int $a, int $b = 0): int
{
    return $a + $b;
}

echo salomlash("Aziza") . PHP_EOL;
echo qosh(2, 3) . PHP_EOL;
echo qosh(10);`,
            output: `Salom, Aziza!
5
10`,
          },
          {
            type: "note",
            variant: "info",
            title: "Scope: o'zgaruvchi qayerda yashaydi?",
            html: "Funksiya ichida yaratilgan o'zgaruvchi faqat shu funksiya ichida ko'rinadi. Tashqi qiymatni o'zgartirish uchun uni parametr qilib bering va natijani <code>return</code> bilan qaytaring. <code>global $hisob</code> ham mumkin, lekin kodni chalkashtiradi — undan qoching.",
          },
          {
            type: "table",
            head: ["Buyruq", "Fayl topilmasa"],
            rows: [
              ["<code>include</code>", "Ogohlantirish beradi, kod davom etadi"],
              ["<code>require</code>", "Fatal xato beradi, dastur to'xtaydi"],
              ["<code>include_once</code>", "Faqat bir marta yuklaydi"],
              ["<code>require_once</code>", "Bir marta yuklaydi, fayl majburiy"],
            ],
          },
          {
            type: "code",
            title: "helpers.php",
            code: `<?php
declare(strict_types=1);

function formatNarx(float $narx): string
{
    return number_format($narx, 0, ".", " ") . " so'm";
}`,
            output: "Bu fayl faqat funksiya e'lon qiladi. Alohida ochilganda hech qanday matn chiqarmaydi; funksiya boshqa faylda ishlatiladi.",
          },
          {
            type: "code",
            title: "index.php",
            code: `<?php
declare(strict_types=1);

require __DIR__ . "/helpers.php";

echo formatNarx(125000) . PHP_EOL;
echo formatNarx(42000);`,
            output: `125 000 so'm
42 000 so'm`,
          },
        ],
        quiz: [
          {
            q: "Funksiyadan natija qaytarish uchun qaysi kalit so'z ishlatiladi?",
            options: ["echo", "print", "return", "break"],
            answer: 2,
            explain: "return funksiya natijasini chaqiruvchi joyga qaytaradi. echo esa faqat chiqaradi.",
          },
          {
            q: "require bilan include orasidagi asosiy farq nima?",
            options: ["require tezroq ishlaydi", "require fayl topilmasa fatal xato beradi", "include faqat HTML uchun", "Farqi yo'q"],
            answer: 1,
            explain: "require faylni majburiy deb biladi va topilmasa dasturni to'xtatadi; include ogohlantirib davom etadi.",
          },
          {
            q: "Funksiya ichida yaratilgan o'zgaruvchi tashqarida ko'rinadimi?",
            options: ["Yo'q, u lokal scope'da", "Ha, doim", "Faqat include bilan", "Faqat massivda"],
            answer: 0,
            explain: "Funksiya ichidagi o'zgaruvchi lokal hisoblanadi; tashqariga chiqarish uchun return yoki global kerak.",
          },
        ],
      },
      {
        id: 6,
        title: "Formalar, $_GET, $_POST va validatsiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Forma foydalanuvchidan ma'lumot oladi. PHP'da yuborilgan maydonlar superglobal massivlarga tushadi: <code>$_GET</code> manzil satridagi parametrlar uchun, <code>$_POST</code> esa forma tanasi uchun ishlatiladi.",
          },
          {
            type: "code",
            title: "forma.php",
            code: `<?php
$xatolar = [];
$ism = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $ism = trim($_POST["ism"] ?? "");

    if ($ism === "") {
        $xatolar[] = "Ism bo'sh bo'lmasligi kerak.";
    } elseif (strlen($ism) < 3) {
        $xatolar[] = "Ism kamida 3 ta belgidan iborat bo'lsin.";
    }
}
?>
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Forma</title>
</head>
<body>
  <form method="post" action="">
    <label for="ism">Ismingiz</label>
    <input id="ism" name="ism" value="<?= htmlspecialchars($ism) ?>">
    <button type="submit">Yuborish</button>
  </form>

  <?php if ($_SERVER["REQUEST_METHOD"] === "POST" && $xatolar === []): ?>
    <p>Salom, <?= htmlspecialchars($ism) ?>!</p>
  <?php endif; ?>

  <?php foreach ($xatolar as $xato): ?>
    <p><?= htmlspecialchars($xato) ?></p>
  <?php endforeach; ?>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Forma ochiladi. Bo'sh yoki 2 harfli ism yuborilsa, xato matni chiqadi. To'g'ri ism yuborilsa, “Salom, Aziza!” ko'rinadi. Kiritilgan matn HTML sifatida bajarilmaydi.",
          },
          {
            type: "table",
            head: ["Usul", "Ma'lumot qayerda", "Qachon ishlatiladi"],
            rows: [
              ["<code>GET</code>", "Manzil satrida", "Qidiruv, filtr, sahifa havolasi"],
              ["<code>POST</code>", "So'rov tanasida", "Forma yuborish, parol, o'zgarishlar"],
            ],
          },
          {
            type: "ul",
            items: [
              "<code>$_GET</code> — URL'dagi <code>?q=php</code> kabi parametrlar.",
              "<code>$_POST</code> — POST formasi maydonlari.",
              "<code>$_SERVER</code> — so'rov usuli, manzil va server ma'lumotlari.",
              "<code>$_SESSION</code> — foydalanuvchi sessiyasi (keyingi dars).",
              "<code>$_COOKIE</code> — brauzerdan kelgan cookie'lar.",
            ],
          },
          {
            type: "code",
            title: "tozalash.php",
            code: `<?php
function tozala(string $matn): string
{
    return htmlspecialchars(trim($matn), ENT_QUOTES, "UTF-8");
}

$ism = tozala("  <b>Aziza</b>  ");
echo $ism . PHP_EOL;
echo strlen($ism);`,
            output: `&lt;b&gt;Aziza&lt;/b&gt;
24`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Validatsiya faqat serverda ishonchli",
            html: "Brauzerdagi <code>required</code> va JavaScript tekshiruvi qulaylik uchun, lekin ularni chetlab o'tish oson. Har doim serverda tekshiring. Matnni chiqarishda <code>htmlspecialchars()</code> ishlatib, XSS xavfini kamaytiring.",
          },
        ],
        quiz: [
          {
            q: "POST bilan yuborilgan forma maydoni qaysi superglobalda bo'ladi?",
            options: ["$_GET", "$_POST", "$_REQUEST_ONLY", "$_FORM"],
            answer: 1,
            explain: "POST formasi maydonlari $_POST massiviga tushadi; $_GET manzil parametrlari uchun.",
          },
          {
            q: "htmlspecialchars() nima uchun ishlatiladi?",
            options: ["Fayl yozish", "Sessiya boshlash", "Sonlarni yaxlitlash", "HTML belgilarini xavfsiz matnga aylantirish"],
            answer: 3,
            explain: "htmlspecialchars <, >, va tirnoqlarni HTML entity'ga aylantiradi, shunda kiritilgan matn teg bo'lib bajarilmaydi.",
          },
          {
            q: "Validatsiya qayerda majburiy bajarilishi kerak?",
            options: ["Faqat brauzerda", "Faqat CSS'da", "Serverda", "Faqat URL'da"],
            answer: 2,
            explain: "Brauzer tekshiruvini chetlab o'tish mumkin, shuning uchun asosiy validatsiya serverda bajariladi.",
          },
        ],
      },
      {
        id: 7,
        title: "Sessiyalar, cookie'lar va login g'oyasi",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "HTTP har bir so'rovni mustaqil ko'radi, shuning uchun foydalanuvchini eslab qolish uchun sessiya yoki cookie kerak. Sessiya ma'lumotni serverda saqlaydi, brauzerda esa faqat sessiya ID'si turadi. Cookie — brauzerda saqlanadigan kichik nomlangan qiymat.",
          },
          {
            type: "code",
            title: "sessiya.php",
            code: `<?php
session_start();

$_SESSION["ism"] = "Aziza";
$_SESSION["rol"] = "talaba";

echo "Sessiya ochildi: " . $_SESSION["ism"] . PHP_EOL;
echo "Rol: " . $_SESSION["rol"] . PHP_EOL;

unset($_SESSION["rol"]);
echo isset($_SESSION["rol"]) ? "Rol bor" : "Rol o'chirildi";`,
            output: `Sessiya ochildi: Aziza
Rol: talaba
Rol o'chirildi`,
          },
          {
            type: "code",
            title: "cookie.php",
            code: `<?php
setcookie("mavzu", "qorong'i", [
    "expires" => time() + 60 * 60 * 24 * 30,
    "path" => "/",
    "httponly" => true,
    "samesite" => "Lax",
]);

echo "Cookie yuborildi";`,
            outputLabel: "Natija",
            output: "Javob sarlavhasida Set-Cookie: mavzu=qorong'i yuboriladi. Keyingi so'rovda qiymat $_COOKIE['mavzu'] orqali o'qiladi. HttpOnly cookie'ni JavaScript o'qiy olmaydi.",
          },
          {
            type: "table",
            head: ["Xususiyat", "Sessiya", "Cookie"],
            rows: [
              ["Saqlash joyi", "Serverda", "Brauzerda"],
              ["Hajm", "Amalda katta", "Taxminan 4 KB"],
              ["Foydalanuvchi ko'radi", "Yo'q, faqat ID", "Ha, qiymatni ko'radi"],
              ["Asosiy xavf", "ID o'g'irlanishi", "O'zgartirilishi yoki o'g'irlanishi"],
            ],
          },
          {
            type: "code",
            title: "login.php",
            code: `<?php
session_start();

$foydalanuvchilar = [
    "aziza" => password_hash("noldan123", PASSWORD_DEFAULT),
];

$login = "aziza";
$parol = "noldan123";
$hash = $foydalanuvchilar[$login] ?? null;

if ($hash !== null && password_verify($parol, $hash)) {
    session_regenerate_id(true);
    $_SESSION["foydalanuvchi"] = $login;
    echo "Kirish muvaffaqiyatli: " . $_SESSION["foydalanuvchi"];
} else {
    echo "Login yoki parol noto'g'ri";
}`,
            output: "Kirish muvaffaqiyatli: aziza",
          },
          {
            type: "note",
            variant: "warning",
            title: "Parolni hech qachon oddiy saqlamang",
            html: "Haqiqiy loyihada foydalanuvchilar bazada turadi va parol <code>password_hash()</code> bilan xeshlanadi. Login'dan keyin <code>session_regenerate_id(true)</code> chaqiring, cookie'larga <code>HttpOnly</code>, <code>Secure</code> va <code>SameSite</code> qo'shing. Parolni cookie yoki URL'ga yozmang.",
          },
        ],
        quiz: [
          {
            q: "Sessiya ma'lumotlari odatda qayerda saqlanadi?",
            options: ["Brauzer cookie'sida to'liq", "HTML faylida", "Serverda, brauzerda faqat ID", "CSS'da"],
            answer: 2,
            explain: "Sessiya fayli serverda saqlanadi; brauzerga faqat sessiya identifikatori yuboriladi.",
          },
          {
            q: "Cookie'ga HttpOnly belgilansa nima bo'ladi?",
            options: ["JavaScript uni o'qiy olmaydi", "Cookie abadiy qoladi", "Cookie butunlay o'chiriladi", "Faqat HTTPS ishlaydi"],
            answer: 0,
            explain: "HttpOnly cookie'ga JavaScript orqali murojaatni taqiqlaydi, bu XSS orqali o'g'irlashni qiyinlashtiradi.",
          },
          {
            q: "Muvaffaqiyatli login'dan keyin nima qilish tavsiya etiladi?",
            options: ["Parolni cookie'ga yozish", "Sessiyani butunlay o'chirish", "HTML'ni keshlash", "Sessiya ID'sini yangilash"],
            answer: 3,
            explain: "session_regenerate_id(true) eski ID'ni bekor qiladi va sessiya fiksatsiyasi xavfini kamaytiradi.",
          },
        ],
      },
      {
        id: 8,
        title: "OOP: klasslar, obyektlar va meros",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Obyektga yo'naltirilgan dasturlash ma'lumot va uni boshqaradigan funksiyalarni bir joyga yig'adi. Klass — shablon, obyekt esa shu shablon bo'yicha yaratilgan nusxa. Xususiyatlar (property) va metodlar klass ichida yashaydi.",
          },
          {
            type: "code",
            title: "talaba.php",
            code: `<?php
class Talaba
{
    public function __construct(
        private string $ism,
        private int $yosh,
        private int $ball = 0,
    ) {
    }

    public function tanishtir(): string
    {
        return "{$this->ism}, {$this->yosh} yosh";
    }

    public function ballQosh(int $qoshimcha): void
    {
        $this->ball += $qoshimcha;
    }

    public function ball(): int
    {
        return $this->ball;
    }
}

$talaba = new Talaba("Aziza", 16);
$talaba->ballQosh(92);

echo $talaba->tanishtir() . PHP_EOL;
echo "Ball: " . $talaba->ball();`,
            output: `Aziza, 16 yosh
Ball: 92`,
          },
          {
            type: "table",
            head: ["Tushuncha", "Ma'nosi"],
            rows: [
              ["<code>class</code>", "Obyekt shabloni"],
              ["<code>new</code>", "Klassdan obyekt yaratadi"],
              ["<code>__construct()</code>", "Obyekt yaratilganda ishlaydigan konstruktor"],
              ["<code>public</code>", "Hamma joydan ko'rinadi"],
              ["<code>private</code>", "Faqat shu klass ichidan ko'rinadi"],
              ["<code>protected</code>", "Shu klass va meros olgan klasslarga ko'rinadi"],
            ],
          },
          {
            type: "code",
            title: "meros.php",
            code: `<?php
class Talaba
{
    public function __construct(
        protected string $ism,
        protected int $ball = 0,
    ) {
    }

    public function daraja(): string
    {
        return $this->ball >= 90 ? "A" : "B";
    }
}

class GrantTalaba extends Talaba
{
    public function __construct(string $ism, int $ball, private int $grant)
    {
        parent::__construct($ism, $ball);
    }

    public function malumot(): string
    {
        return "{$this->ism}: {$this->ball} ball, grant {$this->grant}%";
    }
}

$talaba = new GrantTalaba("Bek", 91, 50);

echo $talaba->malumot() . PHP_EOL;
echo "Daraja: " . $talaba->daraja();`,
            output: `Bek: 91 ball, grant 50%
Daraja: A`,
          },
          {
            type: "note",
            variant: "info",
            title: "$this va -> belgisi",
            html: "Metod ichida <code>$this</code> joriy obyektni bildiradi. Xossa yoki metodga <code>$this-&gt;ism</code> kabi murojaat qilinadi. Statik metodlar esa <code>Klass::metod()</code> shaklida chaqiriladi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Klassni kichik saqlang",
            html: "Har bir klass bitta vazifaga javob bersin. Bir faylda bitta asosiy klassni saqlash o'qishni osonlashtiradi. Composer autoload keyingi darslarda fayllarni avtomatik ulashga yordam beradi.",
          },
        ],
        quiz: [
          {
            q: "Yangi obyekt yaratish uchun qaysi kalit so'z ishlatiladi?",
            options: ["class", "new", "object", "create"],
            answer: 1,
            explain: "new klass nomi bilan birga yoziladi: new Talaba(...). class esa shablonni e'lon qiladi.",
          },
          {
            q: "Konstruktor metodi qanday nomlanadi?",
            options: ["__init", "constructor", "__construct", "new"],
            answer: 2,
            explain: "PHP'da konstruktor __construct deb nomlanadi va obyekt yaratilganda avtomatik chaqiriladi.",
          },
          {
            q: "private xossa qayerdan ko'rinadi?",
            options: ["Barcha fayllardan", "Faqat meros olgan klassdan", "Faqat global scope'dan", "Faqat shu klass ichidan"],
            answer: 3,
            explain: "private a'zolar faqat o'z klassi ichida ishlatiladi; meros olgan klass ham ularga to'g'ridan-to'g'ri kira olmaydi.",
          },
        ],
      },
      {
        id: 9,
        title: "PDO va MySQL: xavfsiz so'rovlar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "PDO — PHP'dan turli ma'lumotlar bazalariga ulanish uchun yagona interfeys. MySQL bilan ishlaganda <code>prepare()</code> va <code>execute()</code> orqali parametrlangan so'rovlar yoziladi. Bu SQL injection hujumidan himoyalanishning asosiy usuli.",
          },
          {
            type: "code",
            title: "ulanish.php",
            code: `<?php
$dsn = "mysql:host=localhost;dbname=noldan;charset=utf8mb4";

$pdo = new PDO($dsn, "root", "", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
]);`,
            output: "Bu fayl $pdo ulanish obyektini yaratadi va alohida ochilganda matn chiqarmaydi. MySQL ishlamasa yoki baza topilmasa, PDOException otiladi.",
          },
          {
            type: "table",
            head: ["Qadam", "Nima qilinadi"],
            rows: [
              ["1", "MySQL 8 serverni o'rnatish va ishga tushirish."],
              ["2", "<code>CREATE DATABASE noldan CHARACTER SET utf8mb4;</code>"],
              ["3", "<code>CREATE TABLE talabalar (id INT AUTO_INCREMENT PRIMARY KEY, ism VARCHAR(100) NOT NULL, ball INT NOT NULL DEFAULT 0);</code>"],
              ["4", "Host, baza nomi, foydalanuvchi va parolni env sozlamalarida saqlash."],
            ],
          },
          {
            type: "code",
            title: "sorov.php",
            code: `<?php
require __DIR__ . "/ulanish.php";

$pdo->beginTransaction();

try {
    $stmt = $pdo->prepare(
        "INSERT INTO talabalar (ism, ball) VALUES (:ism, :ball)"
    );
    $stmt->execute(["ism" => "Bek", "ball" => 91]);

    $stmt = $pdo->prepare(
        "SELECT ism, ball FROM talabalar WHERE ism = :ism"
    );
    $stmt->execute(["ism" => "Bek"]);
    $talaba = $stmt->fetch();

    if ($talaba === false) {
        echo "Topilmadi";
    } else {
        echo $talaba["ism"] . ": " . $talaba["ball"];
    }

    $pdo->rollBack();
} catch (Throwable $xato) {
    $pdo->rollBack();
    throw $xato;
}`,
            output: "Jadval tayyor bo'lsa, tranzaksiya ichida Bek qo'shilib, so'ng o'qiladi: Bek: 91. Oxirida rollBack() chaqirilgani uchun baza o'zgarmaydi.",
          },
          {
            type: "table",
            head: ["PDO metodi", "Vazifasi"],
            rows: [
              ["<code>prepare()</code>", "So'rov shablonini tayyorlaydi"],
              ["<code>execute()</code>", "Parametrlarni bog'lab so'rovni bajaradi"],
              ["<code>fetch()</code>", "Bitta qatorni qaytaradi"],
              ["<code>fetchAll()</code>", "Barcha qatorlarni massiv qilib qaytaradi"],
              ["<code>rowCount()</code>", "Ta'sirlangan qatorlar sonini beradi"],
              ["<code>lastInsertId()</code>", "Oxirgi qo'shilgan yozuv id'sini beradi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "SQL injection va maxfiy sozlamalar",
            html: "Foydalanuvchi kiritgan qiymatni hech qachon SQL matniga yopishtirmang. Har doim <code>:nom</code> nomlangan parametr va <code>execute()</code> ishlatiling. Baza parolini kodga yozmang — env faylga qo'ying va faylni git'ga qo'shmang. Ilova uchun eng kam huquqli foydalanuvchi yarating.",
          },
        ],
        quiz: [
          {
            q: "PDO'da SQL so'rovini tayyorlash uchun qaysi metod ishlatiladi?",
            options: ["query()", "prepare()", "fetch()", "commit()"],
            answer: 1,
            explain: "prepare() so'rov shablonini yaratadi, keyin execute() parametrlarni bog'lab bajaradi.",
          },
          {
            q: "Prepared statement asosan nimadan himoya qiladi?",
            options: ["SQL injection", "Sekin ishlashdan", "Fayl yo'qolishidan", "Cookie o'g'irlashidan"],
            answer: 0,
            explain: "Parametrlar so'rov matnidan alohida uzatiladi, shuning uchun foydalanuvchi SQL kodini kirita olmaydi.",
          },
          {
            q: "PDO xatolarini istisno sifatida chiqarish uchun qaysi sozlama ishlatiladi?",
            options: ["ATTR_CASE", "ATTR_TIMEOUT", "ERRMODE_SILENT", "ATTR_ERRMODE => ERRMODE_EXCEPTION"],
            answer: 3,
            explain: "PDO::ATTR_ERRMODE ni PDO::ERRMODE_EXCEPTION ga qo'yish xatolarni PDOException sifatida otadi.",
          },
        ],
      },
      {
        id: 10,
        title: "Xatolar, istisnolar va fayllar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Har qanday dasturda xato bo'lishi mumkin: noto'g'ri argument, ochilmagan fayl yoki baza uzilishi. Istisno (exception) xatoni boshqariladigan tarzda yuqoriga uzatadi. <code>try</code> ichida xavfli kod, <code>catch</code> ichida uni ushlash, <code>finally</code> ichida esa har holatda bajariladigan tozalash yoziladi.",
          },
          {
            type: "code",
            title: "istisno.php",
            code: `<?php
function bolish(float $a, float $b): float
{
    if ($b == 0.0) {
        throw new InvalidArgumentException("Nolga bo'lish mumkin emas.");
    }

    return $a / $b;
}

try {
    echo bolish(10, 2) . PHP_EOL;
    echo bolish(5, 0) . PHP_EOL;
} catch (InvalidArgumentException $xato) {
    echo "Xato: " . $xato->getMessage() . PHP_EOL;
} finally {
    echo "Tekshiruv tugadi.";
}`,
            output: `5
Xato: Nolga bo'lish mumkin emas.
Tekshiruv tugadi.`,
          },
          {
            type: "table",
            head: ["Tushuncha", "Vazifasi"],
            rows: [
              ["<code>throw</code>", "Yangi istisno otadi"],
              ["<code>try</code>", "Xavfli kodni o'raydi"],
              ["<code>catch</code>", "Mos turdagi istisnoni ushlaydi"],
              ["<code>finally</code>", "Muvaffaqiyat yoki xatodan qat'i nazar bajariladi"],
              ["<code>InvalidArgumentException</code>", "Noto'g'ri argument uchun"],
              ["<code>PDOException</code>", "Baza bilan bog'liq xatolar uchun"],
            ],
          },
          {
            type: "code",
            title: "fayl.php",
            code: `<?php
$fayl = __DIR__ . "/eslatma.txt";

$dastur = fopen($fayl, "w");
fwrite($dastur, "Birinchi qator" . PHP_EOL . "Ikkinchi qator" . PHP_EOL);
fclose($dastur);

echo file_exists($fayl) ? "Fayl yozildi" : "Fayl yo'q";
echo PHP_EOL;
echo file_get_contents($fayl);`,
            output: `Fayl yozildi
Birinchi qator
Ikkinchi qator`,
          },
          {
            type: "table",
            head: ["Rejim", "Ma'nosi"],
            rows: [
              ["<code>r</code>", "Faqat o'qish"],
              ["<code>w</code>", "Yozish, mavjud faylni tozalaydi"],
              ["<code>a</code>", "Oxiriga qo'shish"],
              ["<code>x</code>", "Yangi fayl yaratadi, mavjud bo'lsa xato"],
              ["<code>r+</code>", "O'qish va yozish"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Xatolarni foydalanuvchiga ko'rsatmang",
            html: "Ishlab chiqishda xatolarni ko'rish foydali, lekin production'da ularni foydalanuvchiga ko'rsatish xavfli: fayl yo'llari va baza tafsilotlari oshkor bo'ladi. <code>display_errors</code> ni o'chirib, xatolarni logga yozing. Fayl yo'llarini tekshiring va faqat kerakli papkaga yozish huquqini bering.",
          },
        ],
        quiz: [
          {
            q: "Istisno otish uchun qaysi kalit so'z ishlatiladi?",
            options: ["catch", "raise", "error", "throw"],
            answer: 3,
            explain: "PHP'da throw new Exception(...) shaklida istisno otiladi. raise Ruby va Python'ga xos.",
          },
          {
            q: "catch bloki nima qiladi?",
            options: ["Faylni yopadi", "Xatoni ushlaydi va boshqaradi", "Sessiya ochadi", "Tsiklni takrorlaydi"],
            answer: 1,
            explain: "catch mos turdagi istisnoni ushlab, unga javob berish imkonini beradi.",
          },
          {
            q: "Mavjud faylni tozalab, boshidan yozish uchun qaysi rejim ishlatiladi?",
            options: ["r", "a", "w", "x"],
            answer: 2,
            explain: "w rejimi faylni yozish uchun ochadi va mavjud mazmunni tozalaydi. a esa oxiriga qo'shadi.",
          },
        ],
      },
      {
        id: 11,
        title: "Composer, loyiha tuzilishi va xavfsizlik",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Composer — PHP uchun bog'liqliklar menejeri. U kutubxonalarni o'rnatadi, versiyalarni <code>composer.lock</code> da qulflaydi va klasslarni avtomatik yuklaydigan <code>vendor/autoload.php</code> faylini yaratadi. Loyihani tartibli papkalarga bo'lish kodni kattalashganda boshqarishni osonlashtiradi.",
          },
          {
            type: "code",
            title: "composer.json",
            code: `{
  "name": "noldan/notes",
  "description": "Noldan uchun eslatmalar ilovasi",
  "type": "project",
  "require": {
    "php": "^8.2"
  },
  "autoload": {
    "classmap": [
      "src/"
    ]
  },
  "scripts": {
    "serve": "php -S localhost:8000 -t public"
  }
}`,
            output: "composer install buyrug'i vendor/ papkasini va autoload faylini yaratadi. src/ ichidagi klasslar classmap orqali avtomatik topiladi.",
          },
          {
            type: "code",
            title: "public/index.php",
            code: `<?php
declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";

$ism = $_GET["ism"] ?? "Mehmon";
echo "Salom, " . htmlspecialchars($ism, ENT_QUOTES, "UTF-8");`,
            outputLabel: "Natija (?ism=Aziza)",
            output: "Salom, Aziza",
          },
          {
            type: "table",
            head: ["Yo'l", "Vazifasi"],
            rows: [
              ["<code>public/index.php</code>", "Yagona kirish nuqtasi"],
              ["<code>src/</code>", "Klasslar va biznes mantiq"],
              ["<code>templates/</code>", "HTML shablonlar"],
              ["<code>storage/</code>", "Yuklangan fayllar va loglar"],
              ["<code>vendor/</code>", "Composer o'rnatgan kutubxonalar"],
              ["<code>.env</code>", "Maxfiy sozlamalar (git'ga qo'shilmaydi)"],
              ["<code>composer.json</code>", "Bog'liqliklar va autoload"],
            ],
          },
          {
            type: "code",
            title: "xavfsizlik.php",
            code: `<?php
$xom = "<b>Aziza</b>";

echo htmlspecialchars($xom, ENT_QUOTES, "UTF-8") . PHP_EOL;

$hash = password_hash("noldan123", PASSWORD_DEFAULT);
echo password_verify("noldan123", $hash) ? "Parol to'g'ri" : "Parol xato";`,
            output: `&lt;b&gt;Aziza&lt;/b&gt;
Parol to'g'ri`,
          },
          {
            type: "ul",
            items: [
              "Kirishni har doim serverda tekshiring va chiqishda escape qiling.",
              "SQL so'rovlarida prepared statement ishlating.",
              "Parollarni <code>password_hash()</code> bilan saqlang.",
              "Maxfiy kalitlarni <code>.env</code> da saqlang, kodga yozmang.",
              "Production'da HTTPS, <code>HttpOnly</code> cookie va xato loglaridan foydalaning.",
              "Kutubxonalarni yangilab turing va faqat kerakli huquqlarni bering.",
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Eng ko'p uchraydigan xatolar",
            html: "Foydalanuvchi matnini <code>eval()</code> yoki to'g'ridan-to'g'ri SQL ichida ishlatmang. Fayl yuklashda kengaytma va hajmni tekshiring, yuklangan fayllarni <code>public/</code> dan tashqarida saqlang. Xatolarni yashirish xavfsizlikni oshirmaydi — ularni logga yozish kerak.",
          },
        ],
        quiz: [
          {
            q: "Composer nima vazifani bajaradi?",
            options: ["PHP kutubxonalarini boshqaradi", "HTML sahifasini bezaydi", "MySQL o'rnatadi", "Brauzerni boshqaradi"],
            answer: 0,
            explain: "Composer bog'liqliklarni o'rnatadi, versiyalarni qulflaydi va autoload yaratadi.",
          },
          {
            q: ".env faylida nima saqlanadi?",
            options: ["CSS ranglari", "Foydalanuvchi HTML'i", "Maxfiy sozlamalar va kalitlar", "Test savollari"],
            answer: 2,
            explain: ".env muhit sozlamalari uchun: baza paroli, API kalitlari va boshqa maxfiy qiymatlar.",
          },
          {
            q: "Production'da xatolarni qanday boshqarish to'g'ri?",
            options: ["display_errors yoqiladi", "Barcha xatolar HTML'ga chiqariladi", "display_errors o'chiriladi, xatolar logga yoziladi", "Xatolar butunlay e'tiborsiz qoldiriladi"],
            answer: 2,
            explain: "Foydalanuvchi tafsilotlarni ko'rmasligi kerak, lekin dasturchi uchun xatolar logda saqlanadi.",
          },
        ],
      },
      {
        id: 12,
        title: "Mini loyiha: faylga asoslangan eslatmalar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi o'rganganlarimizni birlashtiramiz: funksiyalar, massivlar, JSON, fayl bilan ishlash va CLI argumentlari yordamida oddiy eslatmalar ilovasini yasaymiz. Ma'lumotlar MySQL'siz, bitta JSON faylda saqlanadi. Kod blokidagi natija bir nechta buyruq ketma-ket bajarilganda olinadi.",
          },
          {
            type: "code",
            title: "storage.php",
            code: `<?php
declare(strict_types=1);

function yukla(string $fayl): array
{
    if (!is_file($fayl)) {
        return [];
    }

    $json = file_get_contents($fayl);
    $data = json_decode($json, true);

    return is_array($data) ? $data : [];
}

function saqla(string $fayl, array $eslatmalar): void
{
    $json = json_encode(
        $eslatmalar,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    );

    file_put_contents($fayl, $json, LOCK_EX);
}`,
            output: "Bu fayl faqat yukla() va saqla() funksiyalarini e'lon qiladi. Alohida ochilganda hech qanday matn chiqarmaydi.",
          },
          {
            type: "code",
            title: "notes.php",
            code: `<?php
declare(strict_types=1);

require __DIR__ . "/storage.php";

$fayl = __DIR__ . "/eslatmalar.json";
$eslatmalar = yukla($fayl);
$buyruq = $argv[1] ?? "list";

if ($buyruq === "add") {
    $matn = trim(implode(" ", array_slice($argv, 2)));

    if ($matn === "") {
        echo "Eslatma matnini kiriting." . PHP_EOL;
        exit(1);
    }

    $eslatmalar[] = [
        "id" => count($eslatmalar) + 1,
        "matn" => $matn,
        "bajarildi" => false,
    ];
    saqla($fayl, $eslatmalar);
    echo "Qo'shildi: $matn" . PHP_EOL;
} elseif ($buyruq === "done") {
    $id = (int) ($argv[2] ?? 0);
    $topildi = false;

    foreach ($eslatmalar as $index => $eslatma) {
        if ($eslatma["id"] === $id) {
            $eslatmalar[$index]["bajarildi"] = true;
            $topildi = true;
            break;
        }
    }

    if ($topildi) {
        saqla($fayl, $eslatmalar);
        echo "Bajarildi: #$id" . PHP_EOL;
    } else {
        echo "Topilmadi: #$id" . PHP_EOL;
    }
} else {
    if ($eslatmalar === []) {
        echo "Eslatmalar yo'q." . PHP_EOL;
    }

    foreach ($eslatmalar as $eslatma) {
        $belgi = $eslatma["bajarildi"] ? "[x]" : "[ ]";
        echo $belgi . " #" . $eslatma["id"] . " " . $eslatma["matn"] . PHP_EOL;
    }
}`,
            output: `Qo'shildi: PHP o'rganish
Qo'shildi: Loyihani tugatish
Bajarildi: #1
[x] #1 PHP o'rganish
[ ] #2 Loyihani tugatish`,
          },
          {
            type: "table",
            head: ["Buyruq", "Vazifasi"],
            rows: [
              ["<code>add Matn</code>", "Yangi eslatma qo'shadi"],
              ["<code>done ID</code>", "Eslatmani bajarilgan deb belgilaydi"],
              ["<code>list</code>", "Barcha eslatmalarni ko'rsatadi"],
            ],
          },
          {
            type: "ul",
            items: [
              "Ma'lumot modeli: <code>id</code>, <code>matn</code>, <code>bajarildi</code> maydonlari.",
              "Saqlash: JSON fayl va <code>json_encode()</code> / <code>json_decode()</code>.",
              "Buyruqlar: CLI argumentlari <code>$argv</code> orqali o'qiladi.",
              "Xavfsizlik: matn <code>trim()</code> qilinadi, fayl <code>LOCK_EX</code> bilan yoziladi.",
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Loyihani kengaytiring",
            html: "O'chirish, tahrirlash, qidiruv yoki muddat qo'shishni sinab ko'ring. Keyin shu g'oyani formalar va sessiyalar bilan veb-ilovaga aylantiring. Har bir yangi buyruq — yangi amaliyot.",
          },
        ],
        quiz: [
          {
            q: "Mini loyihada eslatmalar qayerda saqlanadi?",
            options: ["JSON faylida", "MySQL jadvalida", "Sessiyada", "Cookie'da"],
            answer: 0,
            explain: "Loyiha faylga asoslangan: eslatmalar JSON faylga yoziladi va o'sha yerdan o'qiladi.",
          },
          {
            q: "json_decode($json, true) nimani qaytaradi?",
            options: ["Obyekt", "Matn", "Assotsiativ massiv", "Fayl"],
            answer: 2,
            explain: "Ikkinchi parametr true bo'lsa, JSON obyektlari assotsiativ massivga aylanadi.",
          },
          {
            q: "CLI argumentlarini qaysi massivdan o'qiymiz?",
            options: ["$_GET", "$argv", "$_POST", "$args"],
            answer: 1,
            explain: "PHP CLI'da buyruq satri argumentlari $argv massivida bo'ladi; birinchisi skript nomi.",
          },
        ],
      },
      {
        id: 13,
        title: "Massivlar chuqur: map, filter, reduce va saralash",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Oldingi darslarda massiv yaratish va <code>foreach</code> bilan kezishni ko'rdik. Endi massivni butunlay o'zgartiruvchi funksiyalarni o'rganamiz: <code>array_map()</code> har bir elementni qayta ishlaydi, <code>array_filter()</code> shartga moslarini tanlaydi, <code>array_reduce()</code> esa bitta yakuniy qiymat yasaydi.",
          },
          {
            type: "code",
            title: "massiv-amallari.php",
            code: `<?php
declare(strict_types=1);

$narxlar = [12000, 45000, 8000, 30000];

$qimmatlar = array_map(
    fn(int $narx): int => $narx + 2000,
    $narxlar
);

$arzonlar = array_filter(
    $narxlar,
    fn(int $narx): bool => $narx < 20000
);

$jami = array_reduce(
    $narxlar,
    fn(int $yigindi, int $narx): int => $yigindi + $narx,
    0
);

echo implode(", ", $qimmatlar) . PHP_EOL;
echo implode(", ", $arzonlar) . PHP_EOL;
echo "Jami: $jami";`,
            output: `14000, 47000, 10000, 32000
12000, 8000
Jami: 95000`,
          },
          {
            type: "table",
            head: ["Funksiya", "Natijasi"],
            rows: [
              ["<code>array_map()</code>", "Har bir elementni o'zgartirib, yangi massiv qaytaradi"],
              ["<code>array_filter()</code>", "Shart true bo'lgan elementlarni qoldiradi"],
              ["<code>array_reduce()</code>", "Barcha elementlarni bitta qiymatga yig'adi"],
              ["<code>sort()</code>", "Indeksli massivni qiymat bo'yicha o'sish tartibida saralaydi"],
              ["<code>usort()</code>", "O'zingiz yozgan taqqoslash funksiyasi bilan saralaydi"],
              ["<code>array_column()</code>", "Ko'p o'lchamli massivdan bitta ustunni ajratadi"],
            ],
          },
          {
            type: "code",
            title: "saralash.php",
            code: `<?php
$ismlar = ["Dilnoza", "Ali", "Bek", "Aziza"];
sort($ismlar);
echo implode(", ", $ismlar) . PHP_EOL;

$ballar = ["Aziza" => 92, "Bek" => 78, "Dilnoza" => 88];
arsort($ballar);

foreach ($ballar as $ism => $ball) {
    echo "$ism: $ball" . PHP_EOL;
}

$narxlar = [12000, 45000, 8000];
usort($narxlar, fn(int $a, int $b): int => $b <=> $a);
echo implode(", ", $narxlar);`,
            output: `Ali, Aziza, Bek, Dilnoza
Aziza: 92
Dilnoza: 88
Bek: 78
45000, 12000, 8000`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Kalitlar haqida unutmang",
            html: "<code>array_filter()</code> asl kalitlarni saqlab qoladi. Natijani JSON'ga yuborsangiz, u obyektga aylanishi mumkin. Ro'yxat kerak bo'lsa, <code>array_values($natija)</code> bilan kalitlarni 0 dan qayta indekslang.",
          },
          {
            type: "ul",
            items: [
              "<code>array_map()</code> har doim bir xil uzunlikdagi yangi massiv qaytaradi.",
              "<code>array_filter()</code> callback berilmasa, <code>false</code>, <code>0</code> va bo'sh qiymatlarni olib tashlaydi.",
              "<code>usort()</code> kalitlarni yo'qotadi; kalitlar muhim bo'lsa <code>uasort()</code> ishlatiladi.",
              "Katta massivlarda bir necha marta <code>foreach</code> yozgandan ko'ra bitta zanjirli ifoda o'qishga qulay.",
            ],
          },
        ],
        quiz: [
          {
            q: "array_filter() natijasida elementlarning kalitlari qanday bo'ladi?",
            options: [
              "Har doim 0 dan qayta indekslanadi",
              "Asl kalitlar saqlanib qoladi",
              "Barcha kalitlar o'chiriladi",
              "Faqat satrli kalitlar qoladi",
            ],
            answer: 1,
            explain: "array_filter() mavjud kalitlarni o'zgartirmaydi. Ro'yxat kerak bo'lsa, natijani array_values() bilan o'rash kerak.",
          },
          {
            q: "Ikki qiymatni taqqoslab, saralash yo'nalishini qaytaradigan operator qaysi?",
            options: ["<=>", "==", "??", "=>"],
            answer: 0,
            explain: "Spaceship operatori a <=> b kamroq uchun -1, teng uchun 0, katta uchun 1 qaytaradi. usort() shu natijaga tayanadi.",
          },
          {
            q: "array_reduce() ning uchinchi argumenti nima vazifani bajaradi?",
            options: [
              "Callback funksiyani belgilaydi",
              "Yig'indining boshlang'ich qiymatini beradi",
              "Massiv uzunligini hisoblaydi",
              "Saralash tartibini tanlaydi",
            ],
            answer: 1,
            explain: "Uchinchi argument akkumulyatorning boshlang'ich qiymati. Uni 0 qilib bersak, bo'sh massivda ham xavfsiz natija olinadi.",
          },
        ],
      },
      {
        id: 14,
        title: "Matnlar bilan ishlash: UTF-8, formatlash va qidiruv",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "PHP'da matn — eng ko'p ishlatiladigan tur. O'zbek tilidagi harflar UTF-8'da bir necha bayt egallaydi, shuning uchun oddiy <code>strlen()</code> emas, <code>mb_*</code> funksiyalari ishlatiladi. Formatlash uchun <code>number_format()</code>, <code>str_pad()</code> va <code>mb_convert_case()</code> yordam beradi.",
          },
          {
            type: "code",
            title: "matn-asoslari.php",
            code: `<?php
declare(strict_types=1);

$matn = "  PHP — server tilidir  ";
$toza = trim($matn);

echo mb_strlen($toza) . PHP_EOL;
echo mb_strtoupper($toza) . PHP_EOL;
echo ucfirst("aziza") . PHP_EOL;
echo str_contains($toza, "server") ? "bor" : "yo'q";
echo PHP_EOL;

$sozlar = explode(" ", $toza);
echo count($sozlar);`,
            output: `20
PHP — SERVER TILIDIR
Aziza
bor
4`,
          },
          {
            type: "table",
            head: ["Funksiya", "Vazifasi"],
            rows: [
              ["<code>strlen()</code>", "Baytlar sonini sanaydi; UTF-8 matnda natija katta chiqadi"],
              ["<code>mb_strlen()</code>", "Belgilar sonini sanaydi"],
              ["<code>mb_substr()</code>", "Matnning bir qismini belgilar bo'yicha oladi"],
              ["<code>str_contains()</code>", "Ichida kichik matn bor-yo'qligini tekshiradi"],
              ["<code>str_starts_with()</code>", "Matn berilgan qism bilan boshlanishini tekshiradi"],
              ["<code>str_pad()</code>", "Matnni belgilangan uzunlikkacha to'ldiradi"],
            ],
          },
          {
            type: "code",
            title: "formatlash.php",
            code: `<?php
$toza = "PHP — server tilidir";
$ism = "aziza karimova";

echo mb_convert_case($ism, MB_CASE_TITLE, "UTF-8") . PHP_EOL;

$narx = 1250000.5;
echo number_format($narx, 2, ",", " ") . PHP_EOL;

$kod = "NOLDAN-2026";
echo str_pad($kod, 15, ".", STR_PAD_LEFT) . PHP_EOL;
echo str_replace("2026", "2027", $kod) . PHP_EOL;
echo mb_substr($toza, 0, 3);`,
            output: `Aziza Karimova
1 250 000,50
....NOLDAN-2026
NOLDAN-2027
PHP`,
          },
          {
            type: "note",
            variant: "info",
            title: "UTF-8 uchun mbstring kengaytmasi",
            html: "<code>mb_*</code> funksiyalari <code>mbstring</code> kengaytmasiga tayanadi. PHP 8.2 o'rnatmalarida u odatda yoqilgan bo'ladi. Har bir chaqiruvda kodlashni ko'rsatish odat hisoblanadi: <code>mb_strlen($matn, \"UTF-8\")</code>. HTML sahifada ham <code>&lt;meta charset=\"UTF-8\"&gt;</code> bo'lishi shart.",
          },        ],
        quiz: [
          {
            q: "UTF-8 matndagi belgilar sonini qaysi funksiya to'g'ri sanaydi?",
            options: ["mb_strlen()", "strlen()", "count()", "str_word_count()"],
            answer: 0,
            explain: "mb_strlen() belgilarni sanaydi. strlen() baytlarni sanagani uchun o'zbekcha harflarda noto'g'ri natija beradi.",
          },
          {
            q: "number_format(1250000.5, 2, \",\", \" \") qanday matn qaytaradi?",
            options: ["1,250,000.50", "1 250 000,50", "1250000,50", "1.250.000,50"],
            answer: 1,
            explain: "Ikkinchi argument kasr xonalari, uchinchisi kasr ajratgichi, to'rtinchisi mingliklar ajratgichi. Natija: 1 250 000,50.",
          },
          {
            q: "str_contains(\"PHP 8\", \"8\") qanday qiymat qaytaradi?",
            options: ["true", "\"8\"", "1 (butun son)", "false"],
            answer: 0,
            explain: "str_contains() mantiqiy qiymat qaytaradi. echo bilan chiqarilsa 1 ko'rinadi, lekin funksiya natijasi true.",
          },
        ],
      },
      {
        id: 15,
        title: "Funksiyalar chuqur: closure, variadic va reference",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Funksiya faqat kodni qayta ishlatish vositasi emas. Uni boshqa funksiyaga argument qilib berish, tashqi qiymatni eslab qolish va istalgan miqdordagi parametrlarni qabul qilish mumkin. Bu imkoniyatlar zamonaviy PHP kodining asosini tashkil qiladi.",
          },
          {
            type: "code",
            title: "funksiya-imkoniyatlari.php",
            code: `<?php
declare(strict_types=1);

function yigindi(int ...$sonlar): int
{
    return array_sum($sonlar);
}

$kopaytir = fn(int $a, int $b): int => $a * $b;

$hisob = 10;
$qosh = function (int $n) use (&$hisob): void {
    $hisob += $n;
};
$qosh(5);

function profil(string $ism, int $yosh = 18): string
{
    return "$ism, $yosh yosh";
}

echo yigindi(1, 2, 3, 4) . PHP_EOL;
echo $kopaytir(6, 7) . PHP_EOL;
echo $hisob . PHP_EOL;
echo profil(yosh: 20, ism: "Aziza");`,
            output: `10
42
15
Aziza, 20 yosh`,
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi"],
            rows: [
              ["<code>function (int $n) use ($x)</code>", "Tashqi <code>$x</code> nusxasini closure ichiga oladi"],
              ["<code>use (&amp;$x)</code>", "Tashqi o'zgaruvchini havola orqali oladi va o'zgartiradi"],
              ["<code>fn($n) => $n * 2</code>", "Qisqa funksiya; tashqi qiymatlarni avtomatik oladi"],
              ["<code>...$sonlar</code>", "Variadic parametr: istalgan miqdordagi argumentlar massivi"],
              ["<code>profil(yosh: 20)</code>", "Nomlangan argument; tartib muhim emas"],
              ["<code>: int</code>", "Qaytish turini e'lon qiladi"],
            ],
          },
          {
            type: "code",
            title: "recursion-reference.php",
            code: `<?php
declare(strict_types=1);

function faktorial(int $n): int
{
    return $n <= 1 ? 1 : $n * faktorial($n - 1);
}

function oxirgi(array &$royxat): ?int
{
    return array_pop($royxat);
}

$sonlar = [3, 5, 8];
echo oxirgi($sonlar) . PHP_EOL;
echo count($sonlar) . PHP_EOL;
echo faktorial(5) . PHP_EOL;

$koef = 3;
$kopaytma = array_map(fn(int $n): int => $n * $koef, [1, 2, 3]);
echo implode(", ", $kopaytma);`,
            output: `8
2
120
3, 6, 9`,
          },
          {
            type: "note",
            variant: "info",
            title: "Closure qachon kerak?",
            html: "Closure — nomi yo'q funksiya. Uni o'zgaruvchiga saqlash, callback sifatida uzatish yoki hodisaga ulash mumkin. Arrow funksiya (<code>fn</code>) faqat bitta ifodani qaytaradi va tashqi o'zgaruvchilarni avtomatik value bo'yicha oladi. Tashqi qiymatni o'zgartirish kerak bo'lsa, oddiy closure va <code>use (&amp;$x)</code> ishlatiladi.",
          },
          {
            type: "ul",
            items: [
              "Funksiya bitta aniq vazifani bajarsin va tushunarli nom olsin.",
              "Natijani <code>echo</code> bilan chiqarmasdan, <code>return</code> bilan qaytaring — bunday funksiyani testlash oson.",
              "Reference parametrlar kutilmagan yon ta'sir beradi; massivni qaytarish ko'pincha xavfsizroq.",
              "Chuqur rekursiyada bazaviy holat bo'lmasa, stack to'lib xato beradi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Closure ichida tashqi o'zgaruvchini havola (reference) bilan olish uchun qanday yoziladi?",
            options: ["use ($x)", "use (&$x)", "global $x", "ref $x"],
            answer: 1,
            explain: "use (&$x) tashqi o'zgaruvchining o'ziga havola beradi, shuning uchun closure ichidagi o'zgarish tashqarida ham ko'rinadi.",
          },
          {
            q: "Arrow funksiya tashqi o'zgaruvchilarni qanday qabul qiladi?",
            options: [
              "Avtomatik value bo'yicha",
              "Faqat reference bilan",
              "Faqat global orqali",
              "Umuman qabul qilmaydi",
            ],
            answer: 0,
            explain: "fn() tashqi scope'dagi qiymatlarni avtomatik oladi, lekin ularni o'zgartira olmaydi. Buning uchun oddiy closure kerak.",
          },
          {
            q: "function yigindi(int ...$sonlar) dagi ... nimani bildiradi?",
            options: [
              "Massivni argumentlarga yoyish",
              "Cheksiz miqdordagi argumentlarni qabul qilish",
              "Qiymat null bo'lishi mumkinligini",
              "Argumentni reference bilan uzatishni",
            ],
            answer: 1,
            explain: "Variadic parametr barcha kelgan argumentlarni bitta massivga yig'adi. Chaqiruvda yigindi(1, 2, 3) yoziladi.",
          },
        ],
      },
      {
        id: 16,
        title: "Supergloballar va HTTP so'rovning yo'li",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Brauzer serverga so'rov yuborganda PHP uni tayyor massivlarga joylashtiradi. Bu massivlar superglobal deyiladi: ular funksiya ichida ham <code>global</code>siz ko'rinadi. Har biri ma'lum manbadan keladi, shuning uchun qaysi birini qachon ishlatishni bilish xavfsiz kodning birinchi qadamidir.",
          },
          {
            type: "table",
            head: ["Superglobal", "Manbasi"],
            rows: [
              ["<code>$_GET</code>", "URL'dagi <code>?kalit=qiymat</code> parametrlari"],
              ["<code>$_POST</code>", "POST so'rov tanasidagi forma maydonlari"],
              ["<code>$_SERVER</code>", "So'rov usuli, manzil, sarlavhalar va server ma'lumotlari"],
              ["<code>$_FILES</code>", "Yuklangan fayllar haqidagi ma'lumot"],
              ["<code>$_COOKIE</code>", "Brauzerdan kelgan cookie qiymatlari"],
              ["<code>$_SESSION</code>", "Serverdagi joriy sessiya ma'lumotlari"],
              ["<code>$_ENV</code>", "Muhit o'zgaruvchilari"],
            ],
          },
          {
            type: "code",
            title: "get-server.php",
            code: `<?php
$mavzu = $_GET["mavzu"] ?? "php";
$sahifa = (int) ($_GET["sahifa"] ?? 1);

echo "Mavzu: $mavzu" . PHP_EOL;
echo "Sahifa: $sahifa" . PHP_EOL;
echo "Usul: " . $_SERVER["REQUEST_METHOD"] . PHP_EOL;
echo "Manzil: " . $_SERVER["REQUEST_URI"];`,
            outputLabel: "Natija (/kurs.php?mavzu=php&sahifa=2)",
            output: `Mavzu: php
Sahifa: 2
Usul: GET
Manzil: /kurs.php?mavzu=php&sahifa=2`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Kelgan qiymatga ishonmang",
            html: "URL, forma va sarlavhalar foydalanuvchi nazoratida. Son kutilsa <code>(int)</code> yoki <code>filter_var(...)</code> bilan tekshiring, matnni <code>trim()</code> qiling, emailni <code>FILTER_VALIDATE_EMAIL</code> orqali tasdiqlang. <code>$_REQUEST</code> GET, POST va cookie'ni aralashtiradi — aniq manbani tanlang.",
          },
          {
            type: "code",
            title: "post-validatsiya.php",
            code: `<?php
$ism = trim($_POST["ism"] ?? "");
$email = $_POST["email"] ?? "";

$xatolar = [];

if (mb_strlen($ism) < 3) {
    $xatolar[] = "Ism kamida 3 belgidan iborat bo'lsin.";
}

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $xatolar[] = "Email formati noto'g'ri.";
}

if ($xatolar !== []) {
    http_response_code(422);
    echo implode(" ", $xatolar);
    exit;
}

echo "Qabul qilindi: $ism <$email>";`,
            outputLabel: "Natija (to'g'ri POST ma'lumotida)",
            output: "Qabul qilindi: Aziza <aziza@example.com>",
          },        ],
        quiz: [
          {
            q: "URL'dagi ?q=php parametri qaysi superglobalda turadi?",
            options: ["$_GET", "$_POST", "$_FILES", "$_SESSION"],
            answer: 0,
            explain: "Manzil satridagi parametrlar $_GET massiviga tushadi. POST tanasi esa $_POST massivida bo'ladi.",
          },
          {
            q: "filter_var($email, FILTER_VALIDATE_EMAIL) noto'g'ri email uchun nima qaytaradi?",
            options: ["null", "Bo'sh matn", "false", "Exception"],
            answer: 2,
            explain: "FILTER_VALIDATE_EMAIL mos kelmasa false qaytaradi. null esa qiymat umuman berilmagan holatda uchraydi.",
          },
          {
            q: "$_SERVER[\"REQUEST_METHOD\"] odatda nimani saqlaydi?",
            options: [
              "Foydalanuvchining brauzer nomini",
              "So'rovda ishlatilgan HTTP metodini",
              "Baza ulanish holatini",
              "Sessiya ID'sini",
            ],
            answer: 1,
            explain: "REQUEST_METHOD GET, POST, PUT kabi HTTP metodini beradi. Brauzer nomi HTTP_USER_AGENT'da bo'ladi.",
          },
        ],
      },
      {
        id: 17,
        title: "Cookie'lar chuqur: muddat, yo'l va xavfsizlik",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Cookie — brauzerda saqlanadigan kichik nomlangan qiymat. Server uni har bir so'rovda avtomatik oladi. Cookie'da sessiya ID'si, til tanlovi yoki \"meni eslab qol\" belgisi saqlanadi, lekin uning hajmi taxminan 4 KB va foydalanuvchi uni ko'ra oladi. Shuning uchun maxfiy ma'lumotni cookie'ga yozmang.",
          },
          {
            type: "code",
            title: "til-cookie.php",
            code: `<?php
$hozirgi = $_COOKIE["til"] ?? "tanlanmagan";

setcookie("til", "uz", [
    "expires" => time() + 60 * 60 * 24 * 30,
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax",
]);

echo "Joriy til: $hozirgi";`,
            outputLabel: "Natija (birinchi so'rovda)",
            output: "Joriy til: tanlanmagan",
          },
          {
            type: "table",
            head: ["Parametr", "Vazifasi"],
            rows: [
              ["<code>expires</code>", "Cookie amal qiladigan vaqt (Unix timestamp)"],
              ["<code>path</code>", "Cookie qaysi yo'llarda yuborilishini belgilaydi"],
              ["<code>domain</code>", "Cookie qaysi domenga tegishli ekanini cheklaydi"],
              ["<code>secure</code>", "Cookie faqat HTTPS orqali yuboriladi"],
              ["<code>httponly</code>", "JavaScript cookie'ni o'qiy olmaydi"],
              ["<code>samesite</code>", "Boshqa saytlardan kelgan so'rovlarda yuborilishini cheklaydi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Cookie qachon ko'rinadi?",
            html: "Agar kodda <code>echo</code> allaqachon bajarilgan bo'lsa, <code>setcookie()</code> ishlamaydi, chunki sarlavhalar yuborilgan. Cookie joriy so'rovdagi <code>$_COOKIE</code> da darhol ko'rinmaydi: brauzer uni keyingi so'rovda qaytaradi. Shuning uchun birinchi natijada eski qiymat, ikkinchi so'rovda yangi <code>uz</code> ko'rinadi.",
          },
          {
            type: "code",
            title: "imzo-cookie.php",
            code: `<?php
$qiymat = "aziza";
$kalit = "maxfiy-kalit";

$imzo = hash_hmac("sha256", $qiymat, $kalit);
$kelgan = "aziza";

$tekshir = hash_equals(
    $imzo,
    hash_hmac("sha256", $kelgan, $kalit)
);

echo "Imzo uzunligi: " . strlen($imzo) . PHP_EOL;
echo "Tekshiruv: " . ($tekshir ? "mos" : "mos emas");`,
            output: `Imzo uzunligi: 64
Tekshiruv: mos`,
          },        ],
        quiz: [
          {
            q: "Cookie ma'lumotlari odatda qayerda saqlanadi?",
            options: ["Server diskida", "HTML faylida", "Brauzerda", "MySQL jadvalida"],
            answer: 2,
            explain: "Cookie brauzer tomonida saqlanadi va har so'rovda serverga yuboriladi. Sessiya ma'lumoti esa serverda qoladi.",
          },
          {
            q: "SameSite=Lax sozlamasi nimani cheklaydi?",
            options: [
              "Cookie hajmini 4 KB qiladi",
              "Boshqa saytdan kelgan so'rovlarda cookie yuborilishini",
              "Cookie'ni faqat JavaScript'ga ochadi",
              "Cookie muddatini 30 kunga uzaytiradi",
            ],
            answer: 1,
            explain: "SameSite boshqa sayt kontekstida cookie yuborilishini cheklaydi. Lax odatiy havolalarda yuboradi, lekin cross-site POST'da yubormaydi.",
          },
          {
            q: "Cookie'ni o'chirishning to'g'ri yo'li qaysi?",
            options: [
              "unset($_COOKIE[\"nom\"]) chaqirish",
              "Brauzerni yopish",
              "Faqat path parametrini olib tashlash",
              "O'tgan expires bilan bo'sh qiymatli cookie yuborish",
            ],
            answer: 3,
            explain: "Brauzer cookie'ni expires o'tganda o'chiradi. unset() faqat joriy PHP massividan olib tashlaydi, brauzerdagi nusxani emas.",
          },
        ],
      },
      {
        id: 18,
        title: "Fayl yuklash: $_FILES, MIME va xavfsiz saqlash",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Fayl yuklash formasi <code>multipart/form-data</code> bilan yuboriladi. PHP faylni vaqtinchalik papkaga qo'yadi va <code>$_FILES</code> massivini to'ldiradi. Vazifa — hajm, tur va nomni serverda tekshirib, faylni xavfsiz joyga ko'chirish. Brauzer yuborgan fayl nomi yoki MIME turiga ishonib bo'lmaydi.",
          },
          {
            type: "code",
            title: "yuklash.php",
            code: `<?php
declare(strict_types=1);

$fayl = $_FILES["rasm"] ?? null;

if ($fayl === null || $fayl["error"] !== UPLOAD_ERR_OK) {
    exit("Fayl yuklanmadi.");
}

$ruxsat = [
    "image/jpeg" => "jpg",
    "image/png" => "png",
    "image/webp" => "webp",
];

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($fayl["tmp_name"]);

if (!isset($ruxsat[$mime])) {
    http_response_code(415);
    exit("Faqat JPG, PNG yoki WEBP rasm.");
}

if ($fayl["size"] > 2 * 1024 * 1024) {
    http_response_code(413);
    exit("Fayl 2 MB dan katta.");
}

$nom = substr(hash("sha256", $fayl["name"]), 0, 12);
$nom .= "." . $ruxsat[$mime];

$manzil = __DIR__ . "/uploads/" . $nom;

if (!move_uploaded_file($fayl["tmp_name"], $manzil)) {
    http_response_code(500);
    exit("Saqlash imkonsiz.");
}

echo "Saqlandi: uploads/$nom";`,
            outputLabel: "Natija (rasm.png yuklanganda)",
            output: "Saqlandi: uploads/e2eca45238dd.png",
          },
          {
            type: "table",
            head: ["$_FILES kaliti", "Ma'nosi"],
            rows: [
              ["<code>name</code>", "Foydalanuvchi yuborgan asl fayl nomi"],
              ["<code>type</code>", "Brauzer aytgan MIME turi — tekshirilmagan"],
              ["<code>tmp_name</code>", "Serverdagi vaqtinchalik fayl yo'li"],
              ["<code>size</code>", "Fayl hajmi baytlarda"],
              ["<code>error</code>", "Yuklash holati kodi; 0 (<code>UPLOAD_ERR_OK</code>) muvaffaqiyat"],
            ],
          },
          {
            type: "code",
            title: "xato-kodlari.php",
            code: `<?php
$xatolar = [
    UPLOAD_ERR_INI_SIZE => "Server limitidan katta",
    UPLOAD_ERR_FORM_SIZE => "Forma limitidan katta",
    UPLOAD_ERR_PARTIAL => "Faqat qismi yuklandi",
    UPLOAD_ERR_NO_FILE => "Fayl tanlanmagan",
];

$kod = UPLOAD_ERR_NO_FILE;

echo $xatolar[$kod] ?? "Noma'lum xato";`,
            output: "Fayl tanlanmagan",
          },
          {
            type: "note",
            variant: "warning",
            title: "Yuklangan fayl — potensial kod",
            html: "Faylni <code>public/</code> ichiga tasodifiy nom bilan saqlang yoki umuman veb ildizidan tashqarida saqlab, maxsus skript orqali bering. <code>.php</code>, <code>.phtml</code>, <code>.phar</code> kabi kengaytmalarni qabul qilmang. Rasm bo'lsa ham <code>getimagesize()</code> va <code>finfo</code> bilan qo'shimcha tekshiring. Papkaga bajarish huquqini bermang.",
          },        ],
        quiz: [
          {
            q: "Fayl yuklash formasi qaysi enctype bilan yuborilishi kerak?",
            options: ["application/json", "text/plain", "multipart/form-data", "application/x-www-form-urlencoded"],
            answer: 2,
            explain: "Fayl yuborish uchun multipart/form-data kerak. Aks holda PHP faqat fayl nomini matn sifatida oladi.",
          },
          {
            q: "Nega $_FILES[\"type\"] qiymatiga ishonib bo'lmaydi?",
            options: [
              "U brauzer yuborgan va soxtalashtirilishi mumkin",
              "U har doim bo'sh bo'ladi",
              "U faqat rasmlar uchun ishlaydi",
              "U fayl hajmini ko'rsatadi",
            ],
            answer: 0,
            explain: "type qiymatini brauzer beradi, uni o'zgartirish oson. Haqiqiy turni finfo_file() yoki getimagesize() bilan aniqlang.",
          },
          {
            q: "move_uploaded_file() qanday vazifani bajaradi?",
            options: [
              "Faylni brauzerga yuklaydi",
              "Vaqtinchalik faylni belgilangan joyga ko'chiradi",
              "Faylning MIME turini aniqlaydi",
              "Faylni bazaga yozadi",
            ],
            answer: 1,
            explain: "move_uploaded_file() PHP yuklagan vaqtinchalik faylni xavfsiz tarzda maqsadli yo'lga ko'chiradi va fayl haqiqatan upload ekanini tekshiradi.",
          },
        ],
      },
      {
        id: 19,
        title: "Sessiyalar chuqur: savat, flash va himoya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Sessiya serverda saqlanadigan holat. Brauzerda faqat sessiya ID'si bo'ladi, shuning uchun savat yoki login ma'lumotini cookie'da ko'tarish shart emas. Ammo ID o'g'irlansa, hujumchi sessiyani egallashi mumkin. Shuning uchun sozlamalar, ID yangilash va to'g'ri yakunlash muhim.",
          },
          {
            type: "code",
            title: "savat.php",
            code: `<?php
declare(strict_types=1);

session_set_cookie_params([
    "lifetime" => 0,
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax",
]);
session_start();

$_SESSION["savat"] ??= [];
$_SESSION["savat"][] = [
    "nom" => "Kitob",
    "narx" => 45000,
    "soni" => 2,
];

$jami = 0;
foreach ($_SESSION["savat"] as $qator) {
    $jami += $qator["narx"] * $qator["soni"];
}

echo "Qatorlar: " . count($_SESSION["savat"]) . PHP_EOL;
echo "Jami: " . number_format($jami, 0, ".", " ") . " so'm";`,
            output: `Qatorlar: 1
Jami: 90 000 so'm`,
          },
          {
            type: "table",
            head: ["Sozlama / amal", "Ma'nosi"],
            rows: [
              ["<code>session_start()</code>", "Sessiyani ochadi yoki davom ettiradi"],
              ["<code>session_regenerate_id(true)</code>", "Yangi ID beradi va eskisini o'chiradi"],
              ["<code>session_destroy()</code>", "Serverdagi sessiya ma'lumotlarini yo'q qiladi"],
              ["<code>session.gc_maxlifetime</code>", "Harakatsiz sessiya qancha yashashini belgilaydi"],
              ["<code>session.use_strict_mode</code>", "O'ylab topilgan ID'larni qabul qilmaydi"],
              ["<code>session.cookie_httponly</code>", "Sessiya cookie'sini JavaScript'dan yashiradi"],
            ],
          },
          {
            type: "code",
            title: "flash.php",
            code: `<?php
declare(strict_types=1);

session_start();

function flash(string $kalit, ?string $xabar = null): ?string
{
    if ($xabar !== null) {
        $_SESSION["flash"][$kalit] = $xabar;
        return null;
    }

    $qiymat = $_SESSION["flash"][$kalit] ?? null;
    unset($_SESSION["flash"][$kalit]);
    return $qiymat;
}

flash("ok", "Kurs saqlandi");

echo (flash("ok") ?? "xabar yo'q") . PHP_EOL;
echo (flash("ok") ?? "xabar yo'q");`,
            output: `Kurs saqlandi
xabar yo'q`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Sessiya fiksatsiyasi",
            html: "Login'dan oldin hujumchi o'z sessiya ID'sini qurbonga bera oladi. Login muvaffaqiyatli bo'lganda <code>session_regenerate_id(true)</code> chaqirmasangiz, hujumchi o'sha ID bilan tizimga kirib qoladi. Imtiyoz oshganda ham ID'ni yangilang. Logout'da avval <code>$_SESSION = []</code>, keyin <code>session_destroy()</code> va sessiya cookie'sini o'tgan muddat bilan o'chiring.",
          },
          {
            type: "ul",
            items: [
              "Sessiyaga faqat kerakli minimal ma'lumotni yozing; katta obyektlar serverni band qiladi.",
              "Bir nechta server bo'lsa, sessiyani Redis yoki baza kabi umumiy omborga ko'chiring.",
              "Har so'rovda foydalanuvchi huquqini bazadan yoki sessiyadagi ishonchli belgidan tekshiring.",
              "Sessiya muddati tugaganda foydalanuvchini qayta login qilishga yo'naltiring.",
            ],
          },
        ],
        quiz: [
          {
            q: "Sessiya ID'sini qachon albatta yangilash kerak?",
            options: [
              "Har bir rasm yuklanganda",
              "Login muvaffaqiyatli bo'lganda va imtiyoz oshganda",
              "Har safar sahifa ochilganda",
              "Faqat logout paytida",
            ],
            answer: 1,
            explain: "Login va imtiyoz o'zgarishi sessiya fiksatsiyasi xavfini tug'diradi; session_regenerate_id(true) eski ID'ni bekor qiladi.",
          },
          {
            q: "Flash xabar nima?",
            options: [
              "Keyingi so'rovda o'chib ketadigan vaqtinchalik xabar",
              "Brauzerda doimiy saqlanadigan cookie",
              "Ma'lumotlar bazasidagi jadval",
              "Faqat JavaScript ko'rsatadigan animatsiya",
            ],
            answer: 0,
            explain: "Flash xabar sessiyada bir marta o'qiladi va darhol o'chiriladi. Redirect'dan keyin \"Saqlandi\" kabi xabarni ko'rsatishda qulay.",
          },
          {
            q: "session_destroy() nimani o'chiradi?",
            options: [
              "Brauzerdagi barcha cookie'larni",
              "Faqat joriy sahifa HTML'ini",
              "Serverdagi sessiya ma'lumotlarini",
              "MySQL jadvalidagi yozuvlarni",
            ],
            answer: 2,
            explain: "session_destroy() serverdagi sessiya faylini yo'q qiladi, lekin brauzerdagi cookie qolishi mumkin. Uni alohida o'chirish kerak.",
          },
        ],
      },
      {
        id: 20,
        title: "OOP: xossalar, konstruktorlar va readonly",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Klass — obyekt uchun shablon. Uning ichida xossalar (ma'lumot) va metodlar (xatti-harakat) yashaydi. Konstruktor obyekt yaratilganda majburiy qiymatlarni qabul qiladi. PHP 8'da konstruktor parametrlarini to'g'ridan-to'g'ri xossaga aylantirish va o'zgarmas <code>readonly</code> xossalardan foydalanish mumkin.",
          },
          {
            type: "code",
            title: "mahsulot.php",
            code: `<?php
declare(strict_types=1);

class Mahsulot
{
    public function __construct(
        public readonly string $nom,
        private int $narx,
        public int $soni = 0,
    ) {
        if ($narx < 0) {
            throw new InvalidArgumentException("Narx manfiy bo'lmaydi.");
        }
    }

    public function narx(): int
    {
        return $this->narx;
    }

    public function qiymat(): int
    {
        return $this->narx * $this->soni;
    }
}

$kitob = new Mahsulot("PHP asoslari", 45000, 3);

echo $kitob->nom . PHP_EOL;
echo $kitob->qiymat();`,
            output: `PHP asoslari
135000`,
          },
          {
            type: "table",
            head: ["Tushuncha", "Qoidasi"],
            rows: [
              ["<code>public</code>", "Klass ichidan ham, tashqaridan ham ko'rinadi"],
              ["<code>private</code>", "Faqat shu klass ichidan ko'rinadi"],
              ["<code>protected</code>", "Shu klass va meros olgan klasslarga ko'rinadi"],
              ["<code>readonly</code>", "Qiymat faqat bir marta, odatda konstruktorda beriladi"],
              ["<code>private int $narx</code>", "Konstruktor promoutsiyasi: parametr va xossa birga e'lon qilinadi"],
              ["<code>$this->narx</code>", "Joriy obyektning xossasiga murojaat"],
            ],
          },
          {
            type: "code",
            title: "hisob.php",
            code: `<?php
declare(strict_types=1);

class Hisob
{
    private array $yozuvlar = [];

    public function qosh(string $izoh, int $summa): void
    {
        if ($summa <= 0) {
            throw new InvalidArgumentException("Summa musbat bo'lsin.");
        }

        $this->yozuvlar[] = ["izoh" => $izoh, "summa" => $summa];
    }

    public function jami(): int
    {
        return array_sum(array_column($this->yozuvlar, "summa"));
    }
}

$hisob = new Hisob();
$hisob->qosh("Kitob", 45000);
$hisob->qosh("Daftar", 12000);

echo $hisob->jami();`,
            output: "57000",
          },
          {
            type: "note",
            variant: "info",
            title: "Inkapsulyatsiya nima beradi?",
            html: "<code>private</code> xossa tashqaridan tasodifan buzilmaydi. Unga faqat klass metodlari orqali ta'sir qilish mumkin, shuning uchun tekshiruvni bir joyda saqlaysiz. <code>readonly</code> esa obyekt yaratilgach qiymat o'zgarmasligini kafolatlaydi — pul, ID yoki sana kabi maydonlar uchun juda mos.",
          },
          {
            type: "ul",
            items: [
              "Konstruktorda barcha majburiy maydonlarni qabul qiling, ixtiyoriylariga mantiqiy standart qiymat bering.",
              "Metod nomi amalni aniq aytsin: <code>narx()</code>, <code>qiymat()</code>, <code>qosh()</code>.",
              "Bir klass juda ko'p xossa yig'sa, uni kichikroq klasslarga bo'lish haqida o'ylang.",
              "readonly massiv ichidagi elementlarni muzlatmaydi — chuqur o'zgarmaslik kerak bo'lsa alohida yondashing.",
            ],
          },
        ],
        quiz: [
          {
            q: "readonly xossaga qiymat necha marta berilishi mumkin?",
            options: ["Faqat bir marta", "Har bir metodda bir marta", "Cheksiz marta", "Faqat statik metodda"],
            answer: 0,
            explain: "readonly xossa initsializatsiyadan keyin o'zgarmaydi. Ikkinchi marta yozishga urinish Error beradi.",
          },
          {
            q: "Konstruktor promoutsiyasi qaysi yozuvda to'g'ri ko'rsatilgan?",
            options: [
              "public function __construct(string $ism) { $this->ism = $ism; }",
              "public function __construct(public $ism)",
              "public function __construct(private string $ism)",
              "public function __construct(readonly $ism)",
            ],
            answer: 2,
            explain: "Ko'rinish belgisi va tur parametr oldida yozilsa, PHP uni avtomatik xossaga aylantiradi: private string $ism.",
          },
          {
            q: "private xossaga klass tashqarisidan murojaat qilinsa nima bo'ladi?",
            options: [
              "Qiymat null bo'ladi",
              "PHP avtomatik public qiladi",
              "Faqat ogohlantirish chiqadi",
              "Error yuz beradi",
            ],
            answer: 3,
            explain: "private a'zoga tashqaridan kirish taqiqlangan; PHP Error otadi. Shu sababli getter yoki biznes-metod yoziladi.",
          },
        ],
      },
      {
        id: 21,
        title: "OOP: meros, abstract klass va polimorfizm",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Meros ota klassning umumiy xatti-harakatini bolalarga uzatadi. Bola klass o'ziga xos qismni qo'shadi yoki metodni qayta yozadi. <code>abstract</code> klass to'g'ridan-to'g'ri obyekt yaratmaydi: u bolalar uchun shablon bo'lib, ba'zi metodlarni majburiy amalga oshiradi.",
          },
          {
            type: "code",
            title: "xodimlar.php",
            code: `<?php
declare(strict_types=1);

abstract class Xodim
{
    public function __construct(
        protected string $ism,
        protected int $oylik,
    ) {
    }

    abstract public function rol(): string;

    public function malumot(): string
    {
        return "{$this->ism} — {$this->rol()}, {$this->oylik} so'm";
    }
}

class Dasturchi extends Xodim
{
    public function rol(): string
    {
        return "dasturchi";
    }
}

class Dizayner extends Xodim
{
    public function rol(): string
    {
        return "dizayner";
    }
}

$jamoa = [
    new Dasturchi("Aziza", 8000000),
    new Dizayner("Bek", 7000000),
];

foreach ($jamoa as $xodim) {
    echo $xodim->malumot() . PHP_EOL;
}`,
            output: `Aziza — dasturchi, 8000000 so'm
Bek — dizayner, 7000000 so'm`,
          },
          {
            type: "table",
            head: ["Kalit so'z", "Vazifasi"],
            rows: [
              ["<code>extends</code>", "Ota klassdan meros oladi"],
              ["<code>parent::</code>", "Ota klass metodiga murojaat qiladi"],
              ["<code>abstract</code>", "Tanasiz metod yoki obyekt yaratilmaydigan klass"],
              ["<code>final</code>", "Klass meros olinishini yoki metod qayta yozilishini taqiqlaydi"],
              ["<code>@override</code>", "PHP 8.3 attribute'i; metod haqiqatan ota metodini qayta yozayotganini tekshiradi"],
              ["<code>instanceof</code>", "Obyekt qaysi klassga tegishli ekanini tekshiradi"],
            ],
          },
          {
            type: "code",
            title: "yetakchi.php",
            code: `<?php
declare(strict_types=1);

class Dasturchi
{
    public function __construct(
        protected string $ism,
        protected int $oylik,
    ) {
    }

    public function rol(): string
    {
        return "dasturchi";
    }

    public function malumot(): string
    {
        return "{$this->ism} — {$this->rol()}, {$this->oylik} so'm";
    }
}

class Yetakchi extends Dasturchi
{
    public function __construct(
        string $ism,
        int $oylik,
        private int $jamoaSoni,
    ) {
        parent::__construct($ism, $oylik);
    }

    public function rol(): string
    {
        return "yetakchi dasturchi";
    }

    public function malumot(): string
    {
        return parent::malumot() . " ({$this->jamoaSoni} kishi)";
    }
}

$yetakchi = new Yetakchi("Dilnoza", 12000000, 4);
echo $yetakchi->malumot();`,
            output: "Dilnoza — yetakchi dasturchi, 12000000 so'm (4 kishi)",
          },
          {
            type: "note",
            variant: "info",
            title: "Polimorfizm amalda",
            html: "Yuqoridagi <code>$jamoa</code> massivida ikki xil klass obyekti bor, lekin ikkalasida ham <code>malumot()</code> metodi chaqiriladi. Har biri o'z <code>rol()</code> natijasini beradi. Bu — polimorfizm: bir xil interfeys, turli xatti-harakat. Kod yangi xodim turi qo'shilganda ham o'zgarmaydi.",
          },
          {
            type: "ul",
            items: [
              "Meros faqat \"A — B ning bir turi\" munosabati mantiqiy bo'lsa ishlatiladi.",
              "Umumiy kodni meros o'rniga kompozitsiya (obyektni xossa qilib saqlash) bilan ham yig'ish mumkin.",
              "Ota konstruktorni chaqirishni unutmang, aks holda protected xossalar bo'sh qoladi.",
              "Chuqur meros zinapoyasidan qoching — uch-to'rt darajadan keyin kod kuzatish qiyinlashadi.",
            ],
          },
        ],
        quiz: [
          {
            q: "abstract klassdan to'g'ridan-to'g'ri obyekt yaratish mumkinmi?",
            options: [
              "Ha, agar konstruktor bo'sh bo'lsa",
              "Yo'q, faqat undan meros olgan klassdan yaratiladi",
              "Ha, faqat static metod bilan",
              "Faqat readonly klass bo'lsa",
            ],
            answer: 1,
            explain: "abstract klass tugallanmagan shablon hisoblanadi. Undan meros olib, barcha abstract metodlarni amalga oshirgandan keyingina obyekt yaratiladi.",
          },
          {
            q: "parent::__construct() nima qiladi?",
            options: [
              "Ota klass konstruktorini chaqiradi",
              "Yangi obyekt yaratadi",
              "Konstruktorni bloklaydi",
              "Xossani private qiladi",
            ],
            answer: 0,
            explain: "Bola konstruktorda parent::__construct(...) ota konstruktorga argumentlarni uzatadi va umumiy initsializatsiyani bajaradi.",
          },
          {
            q: "Polimorfizm nimani anglatadi?",
            options: [
              "Bir klassda faqat bitta metod bo'lishini",
              "Barcha xossalarning private bo'lishini",
              "Bir xil metod chaqiruvi turli klasslarda turlicha ishlashini",
              "Faqat bitta obyekt yaratish mumkinligini",
            ],
            answer: 2,
            explain: "Polimorfizm umumiy interfeys orqali turli obyektlarni boshqarish imkonini beradi: har bir klass o'z metodini bajaradi.",
          },
        ],
      },
      {
        id: 22,
        title: "OOP: interfeyslar va trait'lar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Interfeys klass qanday metodlarni taqdim etishi kerakligini belgilaydi, lekin ularning ichini yozmaydi. Bir klass bir nechta interfeysni amalga oshirishi mumkin. Trait esa tayyor metodlarni bir nechta klassga ulashish usuli: PHP bitta klassdan meros olishga ruxsat beradi, lekin bir nechta trait'ni ishlatish mumkin.",
          },
          {
            type: "code",
            title: "interfeys.php",
            code: `<?php
declare(strict_types=1);

interface Saqlanadi
{
    public function saqla(): string;
}

interface Ochiladi
{
    public function och(): string;
}

class FaylHujjat implements Saqlanadi, Ochiladi
{
    public function __construct(private string $nom)
    {
    }

    public function saqla(): string
    {
        return "{$this->nom} saqlandi";
    }

    public function och(): string
    {
        return "{$this->nom} ochildi";
    }
}

$hujjat = new FaylHujjat("hisobot.txt");
echo $hujjat->saqla() . PHP_EOL;
echo $hujjat->och();`,
            output: `hisobot.txt saqlandi
hisobot.txt ochildi`,
          },
          {
            type: "table",
            head: ["Tushuncha", "Xususiyati"],
            rows: [
              ["Interfeys", "Faqat metod imzolari va konstantalar; obyekt yaratilmaydi"],
              ["Abstract klass", "Tayyor metodlar va abstract metodlarni aralashtira oladi"],
              ["Trait", "Tayyor metod va xossalarni bir nechta klassga ulaydi"],
              ["<code>implements</code>", "Klass bir yoki bir nechta interfeysni qabul qiladi"],
              ["<code>use</code>", "Klass ichida trait'ni yoqadi"],
            ],
          },
          {
            type: "code",
            title: "trait.php",
            code: `<?php
declare(strict_types=1);

trait VaqtBelgisi
{
    private ?string $vaqt = null;

    public function belgila(string $vaqt): void
    {
        $this->vaqt = $vaqt;
    }

    public function vaqt(): string
    {
        return $this->vaqt ?? "belgilanmagan";
    }
}

trait Loglaydi
{
    public function log(string $xabar): string
    {
        return "[LOG] $xabar";
    }
}

class Maqola
{
    use VaqtBelgisi, Loglaydi;
}

$maqola = new Maqola();
$maqola->belgila("2026-10-23 10:00");

echo $maqola->vaqt() . PHP_EOL;
echo $maqola->log("Maqola saqlandi");`,
            output: `2026-10-23 10:00
[LOG] Maqola saqlandi`,
          },
          {
            type: "note",
            variant: "info",
            title: "Nima uchun interfeys?",
            html: "Interfeys kodni ma'lum bir shartnomaga bog'laydi. Masalan, to'lov xizmati <code>tolovQil()</code> metodini talab qilsa, Payme, Click yoki naqd to'lov klasslari shu interfeysni amalga oshiradi. Keyin kodni o'zgartirmasdan yangi to'lov usulini qo'shish mumkin. Bu — Dependency Inversion tamoyilining amaliy ko'rinishi.",
          },
          {
            type: "ul",
            items: [
              "Interfeys nomi ko'pincha qobiliyatni bildiradi: <code>Saqlanadi</code>, <code>Yuboriladi</code>.",
              "Ikki trait'da bir xil metod bo'lsa, <code>insteadof</code> va <code>as</code> bilan ziddiyatni hal qiling.",
              "Trait ichida holat (xossa) saqlash kodni kutilmaganda murakkablashtirishi mumkin.",
              "Trait klass emas: unga <code>new</code> bilan obyekt yaratib bo'lmaydi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Bir klass nechta interfeysni implements qilishi mumkin?",
            options: ["Faqat bitta", "Ko'pi bilan ikkita", "Bir nechta", "Interfeysni amalga oshirib bo'lmaydi"],
            answer: 2,
            explain: "PHP'da klass bir nechta interfeysni vergul bilan sanab implements qilishi mumkin. Meros esa faqat bitta klassdan olinadi.",
          },
          {
            q: "Trait asosan nima uchun ishlatiladi?",
            options: [
              "Metodlarni bir nechta klass o'rtasida qayta ishlatish uchun",
              "Ma'lumotlar bazasiga ulanish uchun",
              "Yangi obyekt yaratish uchun",
              "Xatolarni ushlash uchun",
            ],
            answer: 0,
            explain: "Trait tayyor metodlar to'plamini bir nechta klassga ulash imkonini beradi, lekin meros zanjirini yaratmaydi.",
          },
          {
            q: "Interfeys metodlarining tanasi qanday bo'ladi?",
            options: ["To'liq yozilgan bo'ladi", "Tanasiz, faqat imzo bo'ladi", "Faqat private bo'ladi", "Har doim static bo'ladi"],
            answer: 1,
            explain: "Interfeys metodni \"nima qilish kerak\" darajasida e'lon qiladi; ichini implement qiluvchi klass yozadi.",
          },
        ],
      },
      {
        id: 23,
        title: "OOP: static, konstantalar va sehrli metodlar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Ba'zi qiymatlar bitta klassning barcha obyektlariga umumiy bo'ladi: yaratilgan obyektlar soni, konfiguratsiya yoki holatlar ro'yxati. Bunday ma'lumot statik xossada yoki klass konstantasida saqlanadi. Sehrli metodlar esa obyekt bilan maxsus amallar bajarilganda avtomatik chaqiriladi.",
          },
          {
            type: "code",
            title: "static-const.php",
            code: `<?php
declare(strict_types=1);

class Foydalanuvchi
{
    private static int $soni = 0;

    public function __construct(public readonly string $ism)
    {
        self::$soni++;
    }

    public static function soni(): int
    {
        return self::$soni;
    }
}

new Foydalanuvchi("Aziza");
new Foydalanuvchi("Bek");

echo Foydalanuvchi::soni() . PHP_EOL;

class Buyurtma
{
    public const HOLAT_YANGI = "yangi";
    public const HOLAT_YOLDA = "yo'lda";

    public function __construct(public string $holat = self::HOLAT_YANGI)
    {
    }
}

$buyurtma = new Buyurtma();
echo $buyurtma->holat . PHP_EOL;
echo Buyurtma::HOLAT_YOLDA;`,
            output: `2
yangi
yo'lda`,
          },
          {
            type: "table",
            head: ["Element", "Murojaat"],
            rows: [
              ["Statik xossa", "<code>self::$soni</code> yoki <code>Klass::$xossa</code>"],
              ["Statik metod", "<code>Klass::metod()</code>"],
              ["Klass konstantasi", "<code>Klass::KONSTANTA</code>"],
              ["Obyekt xossasi", "<code>$obyekt->xossa</code>"],
              ["Obyekt metodi", "<code>$obyekt->metod()</code>"],
            ],
          },
          {
            type: "code",
            title: "sehrli.php",
            code: `<?php
declare(strict_types=1);

class Savat
{
    private array $mahsulotlar = [];

    public function __set(string $nom, mixed $qiymat): void
    {
        $this->mahsulotlar[$nom] = $qiymat;
    }

    public function __get(string $nom): mixed
    {
        return $this->mahsulotlar[$nom] ?? null;
    }

    public function __toString(): string
    {
        return count($this->mahsulotlar) . " ta mahsulot";
    }
}

$savat = new Savat();
$savat->kitob = 45000;

echo $savat->kitob . PHP_EOL;
echo (string) $savat;`,
            output: `45000
1 ta mahsulot`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Sehrni me'yorida ishlating",
            html: "<code>__get()</code> va <code>__set()</code> mavjud bo'lmagan xossaga murojaatni ushlaydi, lekin xatolarni yashirishi mumkin: <code>$savat->ktib</code> kabi imlo xatosi sezilmay qoladi. IDE ham bunday xossalarni tanimaydi. Ularni faqat dinamik ma'lumot uchun ishlating, oddiy maydonlar uchun aniq xossa yozing.",
          },
          {
            type: "ul",
            items: [
              "Statik metod ichida <code>$this</code> mavjud emas — u obyektga bog'lanmagan.",
              "<code>self::</code> joriy klassga, <code>static::</code> esa chaqiruvchi bolaga murojaat qiladi (late static binding).",
              "Konstanta qiymati o'zgarmaydi; holatlar ro'yxati uchun <code>enum</code> zamonaviyroq yechim.",
              "Global statik holat testlarni bir-biriga bog'lab qo'yishi mumkin, shuning uchun uni kamaytiring.",
            ],
          },
        ],
        quiz: [
          {
            q: "self::$soni qanday elementga murojaat qiladi?",
            options: ["Joriy obyekt xossasiga", "Klassning statik xossasiga", "Global o'zgaruvchiga", "Konstruktorga"],
            answer: 1,
            explain: "self::$soni statik xossaga murojaat qiladi; u barcha obyektlar uchun umumiy. Obyekt xossasi $this->soni bo'lardi.",
          },
          {
            q: "Buyurtma klassidagi HOLAT_YANGI konstantasi qanday chaqiriladi?",
            options: ["Buyurtma::HOLAT_YANGI", "$buyurtma->HOLAT_YANGI", "Buyurtma->HOLAT_YANGI", "const(HOLAT_YANGI)"],
            answer: 0,
            explain: "Klass konstantasiga Klass::NOM shaklida murojaat qilinadi. Uning oldida $ belgisi bo'lmaydi.",
          },
          {
            q: "__toString() metodi qachon avtomatik chaqiriladi?",
            options: [
              "Obyekt yaratilganda",
              "Obyekt o'chirilganda",
              "Obyektga xossa qo'shilganda",
              "Obyekt matn sifatida ishlatilganda",
            ],
            answer: 3,
            explain: "Obyektni echo yoki satr bilan birlashtirganda __toString() chaqiriladi. PHP uni (string) cast orqali ham ishga tushiradi.",
          },
        ],
      },
      {
        id: 24,
        title: "Namespace, PSR-4 va autoload",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Loyiha kattalashganda bir xil nomli klasslar paydo bo'ladi: <code>User</code>, <code>Kurs</code>, <code>Validator</code>. Namespace nomlarga papka kabi ierarxiya beradi va to'qnashuvni oldini oladi. Autoload esa har bir faylni qo'lda <code>require</code> qilmaslik imkonini beradi: klass kerak bo'lganda PHP faylni o'zi topadi.",
          },
          {
            type: "code",
            title: "src/Models/Talaba.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Models;

class Talaba
{
    public function __construct(public string $ism)
    {
    }

    public function salom(): string
    {
        return "Salom, {$this->ism}";
    }
}`,
            output: "Natija bo'sh: bu fayl faqat App\\Models\\Talaba klassini e'lon qiladi. Klass ishlatilishi uchun uni autoload yoki require bilan yuklash kerak.",
          },
          {
            type: "code",
            title: "public/index.php",
            code: `<?php
declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";

use App\\Models\\Talaba;

$talaba = new Talaba("Aziza");

echo $talaba->salom();`,
            output: "Salom, Aziza",
          },
          {
            type: "table",
            head: ["Yozuv", "Vazifasi"],
            rows: [
              ["<code>namespace App\\Models;</code>", "Joriy fayl klasslarini nomfazoga joylashtiradi"],
              ["<code>use App\\Models\\Talaba;</code>", "Klassni qisqa nom bilan ishlatishga ruxsat beradi"],
              ["<code>App\\Models\\Talaba</code>", "To'liq (fully qualified) klass nomi"],
              ["PSR-4", "Namespace'ni papka yo'liga aylantiruvchi standart"],
              ["<code>vendor/autoload.php</code>", "Composer yaratgan autoload kirish nuqtasi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "PSR-4 qanday ishlaydi?",
            html: "Composer sozlamasida <code>App</code> nomfazosi <code>src/</code> papkasiga bog'lanadi. Shunda <code>App\\Models\\Talaba</code> klassi <code>src/Models/Talaba.php</code> faylidan qidiriladi. Fayl nomi klass nomi bilan bir xil bo'lishi shart. Yangi papka qo'shgandan keyin <code>composer dump-autoload</code> bajarish kifoya.",
          },
          {
            type: "code",
            title: "qolda-autoload.php",
            code: `<?php
declare(strict_types=1);

spl_autoload_register(function (string $klass): void {
    $qismlar = explode("\\\\", $klass);
    array_shift($qismlar);

    $fayl = __DIR__ . "/src/" . implode("/", $qismlar) . ".php";

    if (is_file($fayl)) {
        require $fayl;
    }
});

echo class_exists('App\\Models\\Talaba') ? "Topildi" : "Yo'q";`,
            output: "Topildi",
          },
          {
            type: "ul",
            items: [
              "Har bir faylda bitta asosiy klass bo'lsin va u fayl nomiga mos kelsin.",
              "Namespace nomi kompaniya yoki loyiha nomidan boshlanishi odat: <code>Noldan\\Kurs</code>.",
              "Boshqa nomfazodagi klassni <code>use</code> bilan import qiling, to'liq nomni har joyda yozmang.",
              "Composer autoload ishlatilsa, qo'lda <code>require</code> zanjirini yozish shart emas.",
            ],
          },
        ],
        quiz: [
          {
            q: "Namespace asosan nimadan himoya qiladi?",
            options: [
              "Bir xil nomli klasslar to'qnashuvidan",
              "SQL injection'dan",
              "Sessiya o'g'irlashdan",
              "Fayl hajmining oshishidan",
            ],
            answer: 0,
            explain: "Namespace klass, funksiya va konstantalarga ierarxik nom beradi, shu bilan bir xil qisqa nomli elementlar to'qnashmaydi.",
          },
          {
            q: "PSR-4 bo'yicha App\\Models\\Talaba klassi qaysi faylda bo'lishi kerak?",
            options: [
              "src/Talaba.php",
              "src/Models/App/Talaba.php",
              "src/Models/Talaba.php",
              "models/App/Talaba.php",
            ],
            answer: 2,
            explain: "App nomfazosi src/ ga bog'langan bo'lsa, Models\\Talaba qismi src/Models/Talaba.php yo'liga aylanadi.",
          },
          {
            q: "spl_autoload_register() nima qiladi?",
            options: [
              "Barcha fayllarni darhol yuklaydi",
              "Klass kerak bo'lganda uni yuklaydigan funksiyani ro'yxatga oladi",
              "Klassni o'chiradi",
              "Composer'ni o'rnatadi",
            ],
            answer: 1,
            explain: "Autoloader klass topilmaganda chaqiriladi va faylni require qiladi. Composer ham shu mexanizmdan foydalanadi.",
          },
        ],
      },
      {
        id: 25,
        title: "Composer: paketlar, versiyalar va autoload",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Composer — PHP uchun bog'liqliklar menejeri. U paketlarni Packagist'dan yuklaydi, versiyalarni <code>composer.lock</code> da qulflaydi va <code>vendor/autoload.php</code> orqali klasslarni avtomatik ulaydi. Deyarli barcha zamonaviy PHP loyihalari Composer bilan boshlanadi.",
          },
          {
            type: "code",
            title: "composer.json",
            code: `{
  "name": "noldan/kurslar",
  "description": "Noldan kurslari uchun namuna loyiha",
  "type": "project",
  "require": {
    "php": "^8.2",
    "nesbot/carbon": "^3.8"
  },
  "autoload": {
    "psr-4": {
      "App\\\\": "src/"
    }
  },
  "scripts": {
    "serve": "php -S localhost:8000 -t public"
  }
}`,
            output: "composer install buyrug'i vendor/ papkasini, composer.lock faylini va autoload faylini yaratadi. composer serve skripti esa lokal serverni ishga tushiradi.",
          },
          {
            type: "code",
            title: "carbon.php",
            code: `<?php
declare(strict_types=1);

require __DIR__ . "/vendor/autoload.php";

use Carbon\\CarbonImmutable;

$boshlanish = CarbonImmutable::parse("2026-10-23 09:00");
$tugash = $boshlanish->addHours(3)->addMinutes(30);

echo $tugash->format("d.m.Y H:i");`,
            output: "23.10.2026 12:30",
          },
          {
            type: "table",
            head: ["Buyruq / fayl", "Vazifasi"],
            rows: [
              ["<code>composer install</code>", "composer.lock bo'yicha aniq versiyalarni o'rnatadi"],
              ["<code>composer require paket/nom</code>", "Yangi paket qo'shadi va composer.json'ni yangilaydi"],
              ["<code>composer update</code>", "Ruxsat etilgan yangi versiyalarni o'rnatadi va lock'ni yangilaydi"],
              ["<code>composer dump-autoload</code>", "Autoload xaritasini qayta yaratadi"],
              ["<code>composer.json</code>", "Talablar, autoload va skriptlar"],
              ["<code>composer.lock</code>", "O'rnatilgan aniq versiyalar; git'ga qo'shiladi"],
              ["<code>vendor/</code>", "O'rnatilgan paketlar; git'ga qo'shilmaydi"],
            ],
          },
          {
            type: "code",
            title: "tekshirish.php",
            code: `<?php
declare(strict_types=1);

require __DIR__ . "/vendor/autoload.php";

if (class_exists(Carbon\\CarbonImmutable::class)) {
    echo "Carbon o'rnatilgan";
} else {
    echo "Carbon topilmadi";
}`,
            output: "Carbon o'rnatilgan",
          },
          {
            type: "note",
            variant: "info",
            title: "Versiya chegaralari",
            html: "<code>^8.2</code> 8.2 va undan yuqori, lekin 9.0 dan past versiyalarni bildiradi. <code>~3.8</code> esa 3.8 dan 3.9 gacha. Aniq versiya <code>3.8.4</code> ko'rinishida yoziladi. Ishlab chiqarishda <code>composer install</code> ishlatiladi, chunki u lock fayldagi tekshirilgan versiyalarni takrorlaydi.",
          },
          {
            type: "ul",
            items: [
              "<code>vendor/</code> va <code>.env</code> fayllarini git'ga qo'shmang.",
              "<code>composer.lock</code> ni albatta versiyalash — jamoa bir xil paketlarda ishlaydi.",
              "Paket qo'shishdan oldin uning faolligi, oxirgi yangilanishi va xavfsizlik ogohlantirishlarini tekshiring.",
              "Composer skriptlaridan murakkab biznes-mantiq uchun emas, qisqa rivojlanish buyruqlari uchun foydalaning.",
            ],
          },
        ],
        quiz: [
          {
            q: "composer.lock faylining asosiy vazifasi nima?",
            options: [
              "Composer'ni yangilaydi",
              "Barcha PHP fayllarni birlashtiradi",
              "Paketlarning aniq o'rnatilgan versiyalarini qulflaydi",
              "Faqat testlarni ishga tushiradi",
            ],
            answer: 2,
            explain: "composer.lock har bir paketning aniq versiyasini saqlaydi, shuning uchun boshqa muhitda composer install bir xil natija beradi.",
          },
          {
            q: "composer require monolog/monolog buyrug'i nima qiladi?",
            options: [
              "Paketni o'rnatadi va composer.json'ga talab qo'shadi",
              "Paketni butunlay o'chiradi",
              "Faqat composer.lock'ni o'qiydi",
              "PHP versiyasini almashtiradi",
            ],
            answer: 0,
            explain: "require paketni yuklaydi, composer.json'ga yozadi va lock faylini yangilaydi. O'chirish uchun composer remove ishlatiladi.",
          },
          {
            q: "^8.2 versiya chegarasi nimani anglatadi?",
            options: [
              "Faqat 8.2.0 versiyasini",
              "8.2 dan boshlab 9.0 dan past versiyalarni",
              "8.0 dan 8.2 gacha versiyalarni",
              "Istalgan PHP versiyasini",
            ],
            answer: 1,
            explain: "Caret cheklovi eng chapdagi nol bo'lmagan raqamni o'zgartirmaydi: ^8.2 => >=8.2.0 <9.0.0.",
          },
        ],
      },
      {
        id: 26,
        title: "PDO: ulanish, fetch rejimlari va sozlamalar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "PDO — PHP Data Objects. U MySQL, PostgreSQL, SQLite kabi turli bazalarga bir xil API orqali ulanish imkonini beradi. Ulanishda DSN satri, foydalanuvchi va parol beriladi. Xatolarni istisno sifatida chiqarish va natijani assotsiativ massiv qilib olish — xavfsiz loyihaning standart sozlamalari.",
          },
          {
            type: "code",
            title: "ulanish.php",
            code: `<?php
declare(strict_types=1);

$dsn = "mysql:host=127.0.0.1;dbname=noldan;charset=utf8mb4";

$pdo = new PDO($dsn, "noldan_user", "maxfiy", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
]);

echo "Ulanish muvaffaqiyatli";`,
            output: "Ulanish muvaffaqiyatli",
          },
          {
            type: "code",
            title: "royxat.php",
            code: `<?php
$stmt = $pdo->query(
    "SELECT id, ism, ball FROM talabalar ORDER BY ball DESC"
);

$talabalar = $stmt->fetchAll();

foreach ($talabalar as $talaba) {
    echo "#" . $talaba["id"] . " " . $talaba["ism"]
        . " — " . $talaba["ball"] . PHP_EOL;
}`,
            output: `#3 Aziza — 92
#1 Bek — 85
#2 Dilnoza — 78`,
          },
          {
            type: "table",
            head: ["Rejim / sozlama", "Natijasi"],
            rows: [
              ["<code>PDO::FETCH_ASSOC</code>", "Ustun nomlari kalit bo'lgan assotsiativ massiv"],
              ["<code>PDO::FETCH_NUM</code>", "Faqat indeksli massiv"],
              ["<code>PDO::FETCH_OBJ</code>", "Har bir qator oddiy obyekt"],
              ["<code>PDO::FETCH_COLUMN</code>", "Faqat bitta ustun qiymatlari"],
              ["<code>ERRMODE_EXCEPTION</code>", "Xatoda <code>PDOException</code> otadi"],
              ["<code>EMULATE_PREPARES = false</code>", "Haqiqiy server-side prepared statement"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "DSN va ulanish tafsilotlari",
            html: "MySQL uchun <code>charset=utf8mb4</code> ni DSN'da ko'rsating — bu emoji va to'liq Unicode uchun kerak. Baza parolini kodga yozmang: <code>.env</code> yoki server sozlamalaridan oling. Bitta ulanishni butun so'rov davomida qayta ishlating; har funksiyada yangi <code>new PDO</code> ochish resursni behuda sarflaydi.",
          },
          {
            type: "ul",
            items: [
              "SQLite uchun DSN oddiyroq: <code>sqlite:/path/baza.sqlite</code>.",
              "MySQL'da baza nomi va parolni alohida env o'zgaruvchilariga ajrating.",
              "<code>query()</code> faqat o'zingiz yozgan, foydalanuvchi qiymati qatnashmagan SQL uchun mos.",
              "Uzoq davom etadigan skriptlarda ulanish uzilishini <code>PDO::ATTR_TIMEOUT</code> bilan cheklang.",
            ],
          },
        ],
        quiz: [
          {
            q: "PDO'ning asosiy afzalligi nimada?",
            options: [
              "Faqat MySQL bilan ishlaydi",
              "HTML'ni avtomatik tozalaydi",
              "Sessiyalarni boshqaradi",
              "Turli ma'lumotlar bazalari uchun yagona API beradi",
            ],
            answer: 3,
            explain: "PDO drayverlar orqali MySQL, PostgreSQL, SQLite va boshqa bazalarga bir xil metodlar bilan ulanish imkonini beradi.",
          },
          {
            q: "PDO::FETCH_ASSOC qanday natija qaytaradi?",
            options: [
              "Obyektlar massivi",
              "Ustun nomlari kalit bo'lgan assotsiativ massiv",
              "Faqat birinchi ustun",
              "JSON matni",
            ],
            answer: 1,
            explain: "FETCH_ASSOC har bir qatorni ustun nomlari kalit qilingan massiv qilib beradi. Bu o'qish uchun eng qulay rejimlardan biri.",
          },
          {
            q: "fetchAll() nima qaytaradi?",
            options: [
              "Barcha qatorlar massivini",
              "Faqat qatorlar sonini",
              "Bitta ustun nomini",
              "PDO ulanish obyektini",
            ],
            answer: 0,
            explain: "fetchAll() so'rov natijasidagi barcha qatorlarni massiv qilib qaytaradi. Katta natijalarda fetch() bilan bo'lib o'qish xotirani tejaydi.",
          },
        ],
      },
      {
        id: 27,
        title: "PDO: prepared statement va tranzaksiyalar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Prepared statement so'rov shablonini va qiymatlarni alohida yuboradi. Shu sababli foydalanuvchi kiritgan matn SQL kodiga aylanmaydi. Bir nechta o'zgarish bir-biriga bog'liq bo'lsa, ularni tranzaksiyaga oling: yoki hammasi bajariladi, yoki hech biri.",
          },
          {
            type: "code",
            title: "tanlash.php",
            code: `<?php
// talabalar: Aziza (92, 18), Bek (85, 20), Dilnoza (78, 22)

$min = 80;
$yosh = 20;

$stmt = $pdo->prepare(
    "SELECT id, ism, ball FROM talabalar
     WHERE ball >= :min AND yosh <= :yosh
     ORDER BY ball DESC"
);

$stmt->execute(["min" => $min, "yosh" => $yosh]);

foreach ($stmt->fetchAll() as $talaba) {
    echo $talaba["ism"] . ": " . $talaba["ball"] . PHP_EOL;
}`,
            output: `Aziza: 92
Bek: 85`,
          },
          {
            type: "code",
            title: "buyurtma.php",
            code: `<?php
declare(strict_types=1);

try {
    $pdo->beginTransaction();

    $stmt = $pdo->prepare(
        "INSERT INTO buyurtmalar (mahsulot_id, soni)
         VALUES (:mahsulot, :soni)"
    );
    $stmt->execute(["mahsulot" => 5, "soni" => 2]);
    $buyurtmaId = (int) $pdo->lastInsertId();

    $stmt = $pdo->prepare(
        "UPDATE ombor SET soni = soni - :kamaytirish
         WHERE mahsulot_id = :mahsulot AND soni >= :talab"
    );
    $stmt->execute([
        "kamaytirish" => 2,
        "mahsulot" => 5,
        "talab" => 2,
    ]);

    if ($stmt->rowCount() !== 1) {
        throw new RuntimeException("Omborda yetarli mahsulot yo'q.");
    }

    $pdo->commit();
    echo "Buyurtma #$buyurtmaId saqlandi";
} catch (Throwable $xato) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }

    echo "Bekor qilindi: " . $xato->getMessage();
}`,
            output: "Buyurtma #14 saqlandi",
          },
          {
            type: "table",
            head: ["Metod / amal", "Vazifasi"],
            rows: [
              ["<code>prepare()</code>", "So'rov shablonini tayyorlaydi"],
              ["<code>execute([...])</code>", "Parametrlarni bog'lab so'rovni bajaradi"],
              ["<code>bindValue()</code>", "Parametrga tur bilan qiymat bog'laydi"],
              ["<code>beginTransaction()</code>", "Tranzaksiyani boshlaydi"],
              ["<code>commit()</code>", "Barcha o'zgarishlarni tasdiqlaydi"],
              ["<code>rollBack()</code>", "O'zgarishlarni bekor qiladi"],
              ["<code>inTransaction()</code>", "Faol tranzaksiya bor-yo'qligini tekshiradi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Tranzaksiya qisqa bo'lsin",
            html: "Tranzaksiya ochiq turganda qatorlar qulflanadi, boshqa so'rovlar kutadi. Internet so'rovi, fayl yozish yoki uzoq hisob-kitobni tranzaksiya ichiga qo'ymang. Xatoda <code>rollBack()</code> chaqirilmasa, ulanish yopilguncha tranzaksiya osilib qolishi mumkin. Shuning uchun <code>catch</code> ichida albatta tekshiring va bekor qiling.",
          },
          {
            type: "ul",
            items: [
              "Bir xil nomli parametrni bir so'rovda ikki marta ishlatmang; har biriga alohida nom bering.",
              "LIMIT va OFFSET qiymatlarini <code>bindValue(..., PDO::PARAM_INT)</code> bilan bog'lang.",
              "Foydalanuvchi qiymatini hech qachon SQL satriga <code>.</code> bilan yopishtirmang.",
              "Uzoq tranzaksiyalarda deadlock ehtimoli ortadi; qulflash tartibini bir xil saqlang.",
            ],
          },
        ],
        quiz: [
          {
            q: "Prepared statement'da nomlangan parametr qanday yoziladi?",
            options: ["@nom", ":nom", "$nom", "?nom"],
            answer: 1,
            explain: "Nomlangan parametr ikki nuqta bilan boshlanadi: :nom. Pozitsion variant esa ? belgisidir.",
          },
          {
            q: "commit() qanday amalni bajaradi?",
            options: [
              "Tranzaksiyani bekor qiladi",
              "Yangi ulanish ochadi",
              "Jadvalni o'chiradi",
              "Tranzaksiyadagi o'zgarishlarni tasdiqlaydi",
            ],
            answer: 3,
            explain: "commit() barcha o'zgarishlarni doimiy saqlaydi. rollBack() esa ularni bekor qiladi.",
          },
          {
            q: "Xato yuz berganda tranzaksiyadagi o'zgarishlarni qaysi metod bekor qiladi?",
            options: ["rollBack()", "commit()", "execute()", "fetch()"],
            answer: 0,
            explain: "rollBack() tranzaksiya boshidan buyon qilingan o'zgarishlarni qaytaradi. Uni catch blokida chaqirish kerak.",
          },
        ],
      },
      {
        id: 28,
        title: "SQL injection, XSS va CSRF himoyasi",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Veb-ilovadagi uchta keng tarqalgan hujum: SQL injection (so'rovga kod aralashuvi), XSS (sahifaga begona skript joylash) va CSRF (foydalanuvchi nomidan yashirin so'rov yuborish). Har birining himoyasi aniq: parametrlangan so'rov, chiqishni escape qilish va tasodifiy token.",
          },
          {
            type: "code",
            title: "sql-injection.php",
            code: `<?php
$ism = "Bek' OR '1'='1";

// Xavfli: qiymat to'g'ridan-to'g'ri SQL matniga qo'shilyapti
$sql = "SELECT id FROM talabalar WHERE ism = '$ism'";
echo $sql . PHP_EOL;

// Xavfsiz: qiymat alohida parametr sifatida uzatiladi
$stmt = $pdo->prepare(
    "SELECT id FROM talabalar WHERE ism = :ism"
);
$stmt->execute(["ism" => $ism]);

echo "Topildi: " . $stmt->rowCount();`,
            output: `SELECT id FROM talabalar WHERE ism = 'Bek' OR '1'='1'
Topildi: 0`,
          },
          {
            type: "table",
            head: ["Hujum", "Nimani buzadi", "Himoya"],
            rows: [
              ["SQL injection", "Baza so'rovining mantiqini", "Prepared statement, oq ro'yxat"],
              ["XSS", "Sahifa HTML va foydalanuvchi sessiyasini", "<code>htmlspecialchars()</code>, CSP"],
              ["CSRF", "Foydalanuvchi nomidan amal bajarishni", "CSRF token, SameSite, POST"],
              ["Sessiya fiksatsiyasi", "Login sessiyasini", "<code>session_regenerate_id(true)</code>"],
              ["Fayl yuklash", "Serverdagi kodni", "MIME tekshiruvi, tasodifiy nom"],
            ],
          },
          {
            type: "code",
            title: "xss-csrf.php",
            code: `<?php
session_start();

$token = $_SESSION["csrf"] ??= bin2hex(random_bytes(32));

$xom = '<script>alert("xss")</script>';

echo htmlspecialchars($xom, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8");
echo PHP_EOL;
echo "Token uzunligi: " . strlen($token);`,
            output: `&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;
Token uzunligi: 64`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Har xil maqsad, har xil vosita",
            html: "<code>htmlspecialchars()</code> faqat HTML kontekstida ishlaydi. JavaScript ichiga ma'lumot qo'ysangiz <code>json_encode()</code>, SQL'ga esa prepared statement kerak. URL parametriga <code>rawurlencode()</code>, atribut ichiga esa tirnoqli escape qiling. Bitta universal \"tozalash\" funksiyasi yo'q.",
          },
          {
            type: "ul",
            items: [
              "Kirishni tekshiring (validatsiya), chiqishni escape qiling — ikkalasi alohida vazifa.",
              "CSRF tokenni sessiyada saqlang, formaga yashirin maydon qilib qo'shing va <code>hash_equals()</code> bilan solishtiring.",
              "Muhim amallarni faqat POST/PUT/DELETE bilan bajaring, GET orqali o'zgartirmang.",
              "Xavfsizlik sarlavhalarini qo'shing: <code>Content-Security-Policy</code>, <code>X-Content-Type-Options</code>.",
            ],
          },
        ],
        quiz: [
          {
            q: "SQL injection'dan himoyalanishning eng ishonchli usuli qaysi?",
            options: [
              "Qo'shtirnoqlarni olib tashlash",
              "SQL so'rovini faqat kichik harflarda yozish",
              "Prepared statement va bog'langan parametrlar",
              "Xatolarni foydalanuvchidan yashirish",
            ],
            answer: 2,
            explain: "Prepared statement qiymatlarni so'rov matnidan ajratadi. Matnni almashtirish yoki filtrlash to'liq himoya bermaydi.",
          },
          {
            q: "htmlspecialchars() asosan nima qiladi?",
            options: [
              "HTML belgilarini xavfsiz entity'ga aylantiradi",
              "SQL so'rovini tezlashtiradi",
              "Parolni xeshlaydi",
              "Sessiya ID'sini yangilaydi",
            ],
            answer: 0,
            explain: "htmlspecialchars() <, >, & va tirnoqlarni HTML entity'ga aylantiradi, shunda kiritilgan matn teg yoki skript bo'lib bajarilmaydi.",
          },
          {
            q: "CSRF token nimani tasdiqlaydi?",
            options: [
              "Foydalanuvchi paroli to'g'riligini",
              "Ma'lumotlar bazasi ishlayotganini",
              "Fayl hajmi chegaradan oshmaganini",
              "So'rov shu foydalanuvchi sessiyasidan va saytdan kelganini",
            ],
            answer: 3,
            explain: "Token sessiyaga bog'langan maxfiy qiymat. Uni bila olmagan boshqa sayt foydalanuvchi nomidan to'g'ri so'rov yubora olmaydi.",
          },
        ],
      },
      {
        id: 29,
        title: "Parollar va xavfsiz autentifikatsiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Foydalanuvchi parolini hech qachon ochiq matnda saqlamang. <code>password_hash()</code> parolni sekin, tuz (salt) qo'shilgan algoritm bilan xeshlaydi; <code>password_verify()</code> esa kiritilgan parolni xesh bilan solishtiradi. Xeshdan parolni qaytarib bo'lmaydi.",
          },
          {
            type: "code",
            title: "hash.php",
            code: `<?php
declare(strict_types=1);

$parol = "Noldan2026!";
$hash = password_hash($parol, PASSWORD_DEFAULT);

echo str_starts_with($hash, '$2y$')
    ? "Algoritm: bcrypt"
    : "Algoritm: boshqa";
echo PHP_EOL;

echo password_verify($parol, $hash)
    ? "To'g'ri parol"
    : "Xato parol";
echo PHP_EOL;

echo password_verify("boshqa-parol", $hash)
    ? "To'g'ri parol"
    : "Xato parol";`,
            output: `Algoritm: bcrypt
To'g'ri parol
Xato parol`,
          },
          {
            type: "table",
            head: ["Funksiya", "Vazifasi"],
            rows: [
              ["<code>password_hash()</code>", "Yangi xesh yaratadi; har safar tuz tufayli boshqacha"],
              ["<code>password_verify()</code>", "Parol va xesh mosligini tekshiradi"],
              ["<code>password_needs_rehash()</code>", "Algoritm yoki cost eskirganini aniqlaydi"],
              ["<code>PASSWORD_DEFAULT</code>", "PHP tavsiya qilgan joriy algoritm"],
              ["<code>PASSWORD_ARGON2ID</code>", "Argon2id mavjud bo'lsa ishlatiladigan kuchli variant"],
            ],
          },
          {
            type: "code",
            title: "login.php",
            code: `<?php
declare(strict_types=1);

session_start();

$foydalanuvchi = [
    "id" => 7,
    "email" => "aziza@example.com",
    "parol_hash" => password_hash("Noldan2026!", PASSWORD_DEFAULT),
];

$email = trim($_POST["email"] ?? "");
$parol = $_POST["parol"] ?? "";
$urinishlar = $_SESSION["urinishlar"] ?? 0;

if ($urinishlar >= 5) {
    http_response_code(429);
    exit("Juda ko'p urinish. Keyinroq qayta urinib ko'ring.");
}

if (
    $email === $foydalanuvchi["email"]
    && password_verify($parol, $foydalanuvchi["parol_hash"])
) {
    session_regenerate_id(true);
    $_SESSION["uid"] = $foydalanuvchi["id"];
    $_SESSION["urinishlar"] = 0;
    echo "Kirish muvaffaqiyatli";
} else {
    $_SESSION["urinishlar"] = $urinishlar + 1;
    echo "Email yoki parol xato";
}`,
            outputLabel: "Natija (to'g'ri email va parol yuborilganda)",
            output: "Kirish muvaffaqiyatli",
          },
          {
            type: "note",
            variant: "warning",
            title: "Autentifikatsiya qoidalari",
            html: "Login xatosida \"bunday email yo'q\" demang — \"email yoki parol xato\" deb javob bering, aks holda hujumchi email'larni aniqlaydi. Urinishlar sonini IP va hisob bo'yicha cheklang. Login'dan keyin sessiya ID'sini yangilang. Parol o'zgartirilganda eski sessiyalarni bekor qiling. HTTPS bo'lmasa, parol yo'lda ko'rinadi.",
          },
          {
            type: "ul",
            items: [
              "md5(), sha1() kabi tez xeshlar parol uchun yaroqsiz — ularni faqat nazorat summalari uchun ishlating.",
              "Parolni tiklashda bir martalik, qisqa muddatli va tasodifiy token yuboring.",
              "2FA qo'shsangiz, birinchi omil parol, ikkinchisi ilova kodi yoki apparat kaliti bo'lsin.",
              "Baza sizib chiqsa, foydalanuvchini majburiy parol yangilashga undang.",
            ],
          },
        ],
        quiz: [
          {
            q: "Foydalanuvchi parolini bazada qanday saqlash to'g'ri?",
            options: [
              "Ochiq matnda, keyin shifrlash",
              "password_hash() natijasini",
              "md5() bilan bir marta",
              "base64 bilan kodlab",
            ],
            answer: 1,
            explain: "password_hash() tuz qo'shib, ataylab sekin ishlaydigan xesh yaratadi. md5 va base64 parolni himoya qilmaydi.",
          },
          {
            q: "password_verify() qanday turdagi qiymat qaytaradi?",
            options: ["bool (true/false)", "Xesh matnini", "Foydalanuvchi ID'sini", "Sessiya obyektini"],
            answer: 0,
            explain: "password_verify() moslikni mantiqiy qiymat bilan qaytaradi. Natijani if shartida bevosita ishlatish mumkin.",
          },
          {
            q: "Login muvaffaqiyatsiz bo'lganda foydalanuvchiga qanday xabar berish afzal?",
            options: [
              "Bunday email bazada yo'q",
              "Parol xato, email to'g'ri",
              "Baza ulanishi uzildi",
              "Email yoki parol xato",
            ],
            answer: 3,
            explain: "Umumiy xabar hujumchiga email mavjudligini aniqlashga yordam bermaydi. Tafsilotni faqat server logiga yozing.",
          },
        ],
      },
      {
        id: 30,
        title: "JSON: encode, decode va xatolarni boshqarish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "JSON — ma'lumot almashishning eng keng tarqalgan formati. PHP massivini <code>json_encode()</code> bilan JSON matniga, JSON matnini <code>json_decode()</code> bilan massiv yoki obyektga aylantirasiz. API javoblari, config fayllari va brauzer bilan aloqa shu formatga tayanadi.",
          },
          {
            type: "code",
            title: "encode.php",
            code: `<?php
declare(strict_types=1);

$talaba = [
    "ism" => "Aziza",
    "yosh" => 16,
    "kurslar" => ["PHP", "SQL"],
    "faol" => true,
];

$json = json_encode(
    $talaba,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
);

echo $json;`,
            output: `{
    "ism": "Aziza",
    "yosh": 16,
    "kurslar": [
        "PHP",
        "SQL"
    ],
    "faol": true
}`,
          },
          {
            type: "table",
            head: ["Bayroq", "Vazifasi"],
            rows: [
              ["<code>JSON_PRETTY_PRINT</code>", "O'qish uchun chiroyli bo'shliqlar qo'shadi"],
              ["<code>JSON_UNESCAPED_UNICODE</code>", "O'zbekcha harflarni <code>\\uXXXX</code> ga aylantirmaydi"],
              ["<code>JSON_UNESCAPED_SLASHES</code>", "URL'dagi <code>/</code> belgisini escape qilmaydi"],
              ["<code>JSON_THROW_ON_ERROR</code>", "Xatoda <code>JsonException</code> otadi"],
              ["<code>JSON_NUMERIC_CHECK</code>", "Raqamli matnlarni songa aylantiradi"],
              ["<code>JSON_INVALID_UTF8_SUBSTITUTE</code>", "Buzilgan UTF-8 belgilarini almashtiradi"],
            ],
          },
          {
            type: "code",
            title: "decode.php",
            code: `<?php
declare(strict_types=1);

$json = '{"ism":"Bek","ball":91}';

$data = json_decode($json, true, 512, JSON_THROW_ON_ERROR);

echo $data["ism"] . PHP_EOL;
echo gettype($data["ball"]) . PHP_EOL;

try {
    json_decode('{"ism":}', true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $xato) {
    echo "JSON xatosi: " . $xato->getMessage();
}`,
            output: `Bek
integer
JSON xatosi: Syntax error`,
          },
          {
            type: "note",
            variant: "info",
            title: "Assotsiativ massivmi yoki obyektmi?",
            html: "Ikkinchi parametr <code>true</code> bo'lsa, JSON obyektlari assotsiativ massivga aylanadi. <code>false</code> bo'lsa <code>stdClass</code> obyekti qaytadi. API ma'lumotini massiv sifatida qayta ishlash qulayroq. JSON'da izohlar yo'q va oxirgi vergul qabul qilinmaydi.",
          },        ],
        quiz: [
          {
            q: "json_decode($json, true) qanday natija qaytaradi?",
            options: ["stdClass obyekti", "JSON matni", "Assotsiativ massiv", "Fayl deskriptori"],
            answer: 2,
            explain: "Ikkinchi argument true bo'lsa, JSON obyektlari assotsiativ massivga aylanadi. false bo'lsa stdClass qaytadi.",
          },
          {
            q: "JSON_UNESCAPED_UNICODE bayrog'i nima qiladi?",
            options: [
              "Unicode belgilarni \\uXXXX ko'rinishida qoldirmaydi",
              "Barcha matnlarni katta harfga o'giradi",
              "Sonlarni matnga aylantiradi",
              "UTF-8 ni butunlay o'chiradi",
            ],
            answer: 0,
            explain: "Bu bayroq o'zbekcha va boshqa Unicode harflarni to'g'ridan-to'g'ri saqlaydi, natija o'qishga qulay bo'ladi.",
          },
          {
            q: "JSON_THROW_ON_ERROR bayrog'i xato bo'lganda nima qiladi?",
            options: [
              "false qaytaradi",
              "Xatoni jimgina yashiradi",
              "JSON'ni avtomatik tuzatadi",
              "JsonException otadi",
            ],
            answer: 3,
            explain: "Bu bayroq bilan json_decode/json_encode xatosi JsonException ko'rinishida keladi, uni try/catch bilan boshqarish mumkin.",
          },
        ],
      },
      {
        id: 31,
        title: "REST API asoslari: resurs, metod va status",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "REST API resurslar atrofida quriladi: <code>/api/kurslar</code> — kurslar to'plami, <code>/api/kurslar/7</code> — bitta kurs. Amalni URL emas, HTTP metodi bildiradi: GET o'qiydi, POST yaratadi, PUT almashtiradi, PATCH qismini yangilaydi, DELETE o'chiradi. Javob status kodi va JSON tanasidan iborat.",
          },
          {
            type: "code",
            title: "api.php",
            code: `<?php
declare(strict_types=1);

$method = $_SERVER["REQUEST_METHOD"];
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

if ($method === "GET" && $path === "/api/kurslar") {
    header("Content-Type: application/json; charset=utf-8");
    http_response_code(200);

    echo json_encode([
        "data" => [
            ["id" => 1, "nom" => "PHP"],
            ["id" => 2, "nom" => "SQL"],
        ],
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

http_response_code(404);
echo json_encode(["error" => "Topilmadi"], JSON_UNESCAPED_UNICODE);`,
            outputLabel: "Natija (GET /api/kurslar)",
            output: `{"data":[{"id":1,"nom":"PHP"},{"id":2,"nom":"SQL"}]}`,
          },
          {
            type: "table",
            head: ["Metod", "Vazifasi", "Muvaffaqiyat kodi"],
            rows: [
              ["<code>GET</code>", "Resurs yoki ro'yxatni o'qish", "200"],
              ["<code>POST</code>", "Yangi resurs yaratish", "201"],
              ["<code>PUT</code>", "Resursni to'liq almashtirish", "200 yoki 204"],
              ["<code>PATCH</code>", "Resursning bir qismini yangilash", "200 yoki 204"],
              ["<code>DELETE</code>", "Resursni o'chirish", "204"],
            ],
          },
          {
            type: "code",
            title: "yaratish.php",
            code: `<?php
$javob = [
    "id" => 7,
    "nom" => "Yangi kurs",
    "faol" => true,
];

header("Content-Type: application/json; charset=utf-8");
http_response_code(201);

echo json_encode(
    $javob,
    JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
);`,
            outputLabel: "Natija (HTTP 201 Created)",
            output: `{"id":7,"nom":"Yangi kurs","faol":true}`,
          },
          {
            type: "note",
            variant: "info",
            title: "Status kodlar tilidir",
            html: "<code>400</code> — noto'g'ri so'rov, <code>401</code> — autentifikatsiya yo'q, <code>403</code> — ruxsat yetishmaydi, <code>404</code> — topilmadi, <code>409</code> — ziddiyat, <code>422</code> — validatsiya xatosi, <code>500</code> — server xatosi. Muvaffaqiyatli javobga ham to'g'ri kod qo'ying; har doim 200 qaytarish mijoz kodini chalkashtiradi.",
          },        ],
        quiz: [
          {
            q: "Yangi resurs muvaffaqiyatli yaratilganda qaysi status kodi qaytariladi?",
            options: ["200 OK", "201 Created", "204 No Content", "302 Found"],
            answer: 1,
            explain: "201 Created yangi resurs yaratilganini bildiradi. Javobda odatda yangi resursning ID'si yoki manzili ham beriladi.",
          },
          {
            q: "DELETE muvaffaqiyatli bajarilib, javob tanasi bo'lmasa qaysi kod mos?",
            options: ["201", "200", "422", "204"],
            answer: 3,
            explain: "204 No Content tanasi yo'q muvaffaqiyatli javobni bildiradi. O'chirishda ko'pincha shu kod ishlatiladi.",
          },
          {
            q: "PUT va PATCH orasidagi asosiy farq nima?",
            options: [
              "PUT resursni to'liq almashtiradi, PATCH faqat berilgan maydonlarni yangilaydi",
              "PATCH faqat rasmlar uchun ishlaydi",
              "PUT javob qaytarmaydi",
              "Farqi yo'q, ikkisi bir xil",
            ],
            answer: 0,
            explain: "PUT to'liq tasvirni yuborishni nazarda tutadi; PATCH esa qismiy o'zgarishlar uchun mos va yuborilmagan maydonlarni saqlab qoladi.",
          },
        ],
      },
      {
        id: 32,
        title: "REST API amaliyoti: CRUD, validatsiya va pagination",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Haqiqiy API ro'yxatni sahifalab beradi, kirishni tekshiradi va xatolarni bir xil formatda qaytaradi. Quyida PDO bilan sahifalash va JSON tanasini validatsiya qilish ko'rsatilgan. Bu ikki naqsh deyarli har bir CRUD API'da uchraydi.",
          },
          {
            type: "code",
            title: "pagination.php",
            code: `<?php
// kurslar jadvalida 5 ta yozuv bor: id 1..5

$limit = max(1, min(50, (int) ($_GET["limit"] ?? 10)));
$page = max(1, (int) ($_GET["page"] ?? 1));
$offset = ($page - 1) * $limit;

$stmt = $pdo->prepare(
    "SELECT id, nom, narx FROM kurslar
     ORDER BY id
     LIMIT :limit OFFSET :offset"
);
$stmt->bindValue(":limit", $limit, PDO::PARAM_INT);
$stmt->bindValue(":offset", $offset, PDO::PARAM_INT);
$stmt->execute();

$data = $stmt->fetchAll();
$jami = (int) $pdo->query("SELECT COUNT(*) FROM kurslar")->fetchColumn();

header("Content-Type: application/json; charset=utf-8");
echo json_encode([
    "data" => $data,
    "meta" => [
        "page" => $page,
        "limit" => $limit,
        "total" => $jami,
        "pages" => (int) ceil($jami / $limit),
    ],
], JSON_UNESCAPED_UNICODE);`,
            outputLabel: "Natija (GET /api/kurslar?page=2&limit=2)",
            output: `{"data":[{"id":3,"nom":"SQL","narx":90000},{"id":4,"nom":"JS","narx":110000}],"meta":{"page":2,"limit":2,"total":5,"pages":3}}`,
          },
          {
            type: "table",
            head: ["Amal", "Metod", "Muvaffaqiyat"],
            rows: [
              ["Ro'yxat", "<code>GET /api/kurslar</code>", "200"],
              ["Bitta yozuv", "<code>GET /api/kurslar/7</code>", "200 yoki 404"],
              ["Yaratish", "<code>POST /api/kurslar</code>", "201"],
              ["Yangilash", "<code>PATCH /api/kurslar/7</code>", "200 yoki 404"],
              ["O'chirish", "<code>DELETE /api/kurslar/7</code>", "204 yoki 404"],
            ],
          },
          {
            type: "code",
            title: "validatsiya.php",
            code: `<?php
$xom = file_get_contents("php://input");
$data = json_decode($xom, true, 512, JSON_THROW_ON_ERROR);

$nom = trim($data["nom"] ?? "");
$narx = filter_var($data["narx"] ?? null, FILTER_VALIDATE_INT);

$xatolar = [];

if (mb_strlen($nom) < 3) {
    $xatolar["nom"] = "Nom kamida 3 belgidan iborat bo'lsin.";
}

if ($narx === false || $narx < 0) {
    $xatolar["narx"] = "Narx manfiy bo'lmagan butun son bo'lsin.";
}

if ($xatolar !== []) {
    http_response_code(422);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode(["errors" => $xatolar], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(["message" => "Kurs yaratildi"], JSON_UNESCAPED_UNICODE);`,
            outputLabel: "Natija (nom: PHP, narx: -5)",
            output: `{"errors":{"narx":"Narx manfiy bo'lmagan butun son bo'lsin."}}`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Pagination tuzoqlari",
            html: "LIMIT va OFFSET'ni SQL matniga qo'shib yubormang — ularni <code>PDO::PARAM_INT</code> bilan bog'lang. <code>limit</code> uchun yuqori chegara qo'ying, aks holda bitta so'rov butun bazani tortadi. Katta jadvallarda <code>OFFSET</code> sekinlashadi; keyingi sahifa uchun <code>WHERE id &gt; :oxirgiId</code> usuli tezroq bo'ladi.",
          },
          {
            type: "ul",
            items: [
              "JSON tanasini o'qish uchun <code>php://input</code> ishlatiladi; <code>$_POST</code> JSON'ni olmaydi.",
              "Content-Type <code>application/json</code> ekanini tekshiring va noto'g'ri bo'lsa 415 qaytaring.",
              "Har bir maydon uchun aniq qoida yozing: uzunlik, tur, diapazon, ruxsat etilgan qiymatlar.",
              "Xato javobida maydon nomini ko'rsating, lekin baza ichki tafsilotlarini oshkor qilmang.",
            ],
          },
        ],
        quiz: [
          {
            q: "422 Unprocessable Entity statusi nimani bildiradi?",
            options: [
              "Server ichki xatosi",
              "So'rov sintaksisi to'g'ri, lekin validatsiya muvaffaqiyatsiz",
              "Resurs topilmadi",
              "Autentifikatsiya talab qilinadi",
            ],
            answer: 1,
            explain: "422 JSON yoki forma tuzilishi to'g'ri, ammo qiymatlar biznes qoidalariga mos emasligini bildiradi.",
          },
          {
            q: "LIMIT parametrini PDO'da qanday bog'lash to'g'ri?",
            options: [
              "execute() ichida satr sifatida",
              "To'g'ridan-to'g'ri SQL matniga qo'shib",
              "bindValue(\":limit\", $limit, PDO::PARAM_INT) bilan",
              "Faqat PDO::PARAM_STR bilan",
            ],
            answer: 2,
            explain: "LIMIT butun son talab qiladi, shuning uchun PARAM_INT bilan bog'lanadi. MySQL'da noto'g'ri tur sintaksis xatosiga olib kelishi mumkin.",
          },
          {
            q: "Sahifa raqami va limitdan OFFSET qanday hisoblanadi?",
            options: [
              "(page - 1) * limit",
              "page * limit",
              "page + limit",
              "limit / page",
            ],
            answer: 0,
            explain: "Birinchi sahifa uchun offset 0 bo'lishi kerak, shuning uchun (page - 1) * limit formulasi ishlatiladi.",
          },
        ],
      },
      {
        id: 33,
        title: "Xatolar va istisnolar chuqur",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "PHP'da xatolar ikki katta guruhga bo'linadi: <code>Exception</code> — dastur mantiqidagi kutilgan muammolar, <code>Error</code> — noto'g'ri tur, yo'q funksiya kabi jiddiy xatolar. Ikkalasi ham <code>Throwable</code> interfeysini amalga oshiradi, shuning uchun bitta <code>catch (Throwable $e)</code> bilan ushlash mumkin.",
          },
          {
            type: "code",
            title: "custom-exception.php",
            code: `<?php
declare(strict_types=1);

class IlovaXatosi extends RuntimeException
{
}

class TopilmadiXatosi extends IlovaXatosi
{
}

function kursTop(int $id): array
{
    if ($id !== 7) {
        throw new TopilmadiXatosi("Kurs #$id topilmadi", 404);
    }

    return ["id" => 7, "nom" => "PHP"];
}

try {
    kursTop(9);
} catch (TopilmadiXatosi $xato) {
    echo $xato->getMessage()
        . " (kod: " . $xato->getCode() . ")";
} finally {
    echo PHP_EOL . "Qidiruv tugadi.";
}`,
            output: `Kurs #9 topilmadi (kod: 404)
Qidiruv tugadi.`,
          },
          {
            type: "table",
            head: ["Klass", "Qachon ishlatiladi"],
            rows: [
              ["<code>InvalidArgumentException</code>", "Funksiyaga noto'g'ri argument berilganda"],
              ["<code>RuntimeException</code>", "Bajarish paytida yuz bergan umumiy xato"],
              ["<code>LogicException</code>", "Kod mantiqidagi xato, oldindan oldini olish mumkin"],
              ["<code>PDOException</code>", "Baza ulanishi yoki so'rovidagi xato"],
              ["<code>JsonException</code>", "JSON encode/decode xatosi"],
              ["<code>DivisionByZeroError</code>", "Nolga bo'lishga urinish"],
            ],
          },
          {
            type: "code",
            title: "handler.php",
            code: `<?php
declare(strict_types=1);

set_error_handler(function (
    int $daraja,
    string $xabar,
    string $fayl,
    int $qator
): bool {
    throw new ErrorException($xabar, 0, $daraja, $fayl, $qator);
});

set_exception_handler(function (Throwable $xato): void {
    error_log($xato->getMessage());
    http_response_code(500);
    echo "Serverda kutilmagan xato.";
});

function bolish(int $a, int $b): float
{
    if ($b === 0) {
        throw new DivisionByZeroError("Nolga bo'lish mumkin emas.");
    }

    return $a / $b;
}

try {
    echo bolish(10, 2) . PHP_EOL;
    echo bolish(5, 0);
} catch (DivisionByZeroError $xato) {
    echo "Ushlandi: " . $xato->getMessage();
}`,
            output: `5
Ushlandi: Nolga bo'lish mumkin emas.`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Xatoni yashirmang, boshqaring",
            html: "Bo'sh <code>catch</code> xatoni jimgina yutadi va keyin tushunarsiz natijaga olib keladi. Xatoni logga yozing yoki qayta otish (<code>throw $e</code>) bilan yuqori qatlamga bering. Production'da <code>display_errors=0</code>, <code>log_errors=1</code> qilib qo'ying. Foydalanuvchiga umumiy xabar, dasturchiga esa to'liq tafsilot kerak.",
          },
          {
            type: "ul",
            items: [
              "Kutilgan holatlar uchun istisno, dasturchi xatosi uchun Error ishlatiladi.",
              "Custom exception'lar domen tilida nomlansin: <code>TopilmadiXatosi</code>, <code>TolovRadEtildi</code>.",
              "Bir <code>try</code> ichida juda ko'p turli amal qilmang; xatoni torroq ushlang.",
              "<code>finally</code> faylni yopish yoki tranzaksiyani tozalash uchun ishlatiladi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Error va Exception klasslarini qaysi umumiy interfeys birlashtiradi?",
            options: ["Catchable", "Failure", "Throwable", "BaseError"],
            answer: 2,
            explain: "Ikkalasi ham Throwable'ni amalga oshiradi. catch (Throwable $e) ikkala turdagi xatoni ham ushlay oladi.",
          },
          {
            q: "finally bloki qachon bajariladi?",
            options: [
              "Xato bo'lmasa ham, bo'lsa ham har doim",
              "Faqat xato bo'lganda",
              "Faqat return bo'lmaganda",
              "Faqat catch ishlamaganda",
            ],
            answer: 0,
            explain: "finally har qanday holatda bajariladi: muvaffaqiyat, istisno yoki return bo'lsa ham. U tozalash ishlari uchun mos.",
          },
          {
            q: "Custom exception yaratish uchun odatda qaysi klassdan meros olinadi?",
            options: ["stdClass", "Exception yoki RuntimeException", "Error", "Throwable"],
            answer: 1,
            explain: "Throwable - interfeys, undan meros olib bo'lmaydi. Custom istisnolar Exception yoki uning RuntimeException kabi avlodlaridan meros oladi.",
          },
        ],
      },
      {
        id: 34,
        title: "Logging va konfiguratsiya",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Log — ilovada nima bo'layotganini keyin tushunish uchun yoziladigan yozuvlar. Yaxshi log xatoni topishni daqiqalarga qisqartiradi. Konfiguratsiya esa kodni o'zgartirmasdan muhitni boshqarish imkonini beradi: baza manzili, debug rejimi va API kalitlari <code>.env</code> kabi faylda saqlanadi.",
          },
          {
            type: "code",
            title: "logger.php",
            code: `<?php
declare(strict_types=1);

function logYoz(string $vaqt, string $daraja, string $xabar): void
{
    $qator = $vaqt . " [" . $daraja . "] " . $xabar . PHP_EOL;

    file_put_contents(
        __DIR__ . "/app.log",
        $qator,
        FILE_APPEND | LOCK_EX
    );
}

logYoz("2026-10-23 10:00:00", "INFO", "Ilova ishga tushdi");
logYoz("2026-10-23 10:00:01", "WARNING", "Kesh eskirgan");

echo file_get_contents(__DIR__ . "/app.log");`,
            output: `2026-10-23 10:00:00 [INFO] Ilova ishga tushdi
2026-10-23 10:00:01 [WARNING] Kesh eskirgan`,
          },
          {
            type: "table",
            head: ["Daraja", "Qachon ishlatiladi"],
            rows: [
              ["<code>debug</code>", "Batafsil diagnostika, production'da odatda o'chirilgan"],
              ["<code>info</code>", "Muhim biznes hodisalari: kirish, buyurtma"],
              ["<code>notice</code>", "E'tiborga loyiq, lekin xato bo'lmagan holat"],
              ["<code>warning</code>", "Muammo bo'lishi mumkin, ilova davom etadi"],
              ["<code>error</code>", "Amal bajarilmadi, tekshirish kerak"],
              ["<code>critical</code>", "Butun xizmat ishlamayapti"],
            ],
          },
          {
            type: "code",
            title: "config.php",
            code: `<?php
$env = parse_ini_file(
    __DIR__ . "/.env",
    false,
    INI_SCANNER_TYPED
);

echo $env["APP_ENV"] . PHP_EOL;
echo $env["DB_PORT"] . PHP_EOL;

echo $env["APP_DEBUG"]
    ? "Debug yoqilgan"
    : "Debug o'chirilgan";`,
            outputLabel: "Natija (.env: APP_ENV=production, APP_DEBUG=false, DB_PORT=3306)",
            output: `production
3306
Debug o'chirilgan`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Logga nima yozmaslik kerak",
            html: "Parol, sessiya ID'si, CSRF token, bank karta raqami va to'liq shaxsiy ma'lumot logga tushmasin. Baza so'rovida parametrlar ko'rinishi mumkinligini hisobga oling. Log fayli veb orqali ochilmasin, huquqlari <code>640</code> atrofida bo'lsin. Fayl cheksiz o'smasin — kunlik aylantirish (rotation) sozlang.",
          },
          {
            type: "ul",
            items: [
              "<code>.env</code> git'ga qo'shilmaydi; jamoa uchun <code>.env.example</code> namuna fayli saqlanadi.",
              "Config qiymatlarini ishlatishdan oldin mavjudligini tekshiring: <code>$env[\"DB_HOST\"] ?? \"127.0.0.1\"</code>.",
              "Log yozuvida vaqt, daraja, so'rov ID'si va qisqa xabar bo'lsin.",
              "Yirik loyihalarda Monolog kabi kutubxona kanallar, formatlash va aylantirishni o'z zimmasiga oladi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Qaysi log darajasi eng jiddiy holatni bildiradi?",
            options: ["info", "warning", "error", "emergency"],
            answer: 3,
            explain: "PSR-3 shkalasida emergency eng yuqori daraja: butun tizim ishlamay qolgan favqulodda holat. critical undan biroz pastroq.",
          },
          {
            q: ".env faylining vazifasi nima?",
            options: [
              "Muhitga bog'liq sozlamalar va maxfiy qiymatlarni saqlash",
              "HTML shablonlarini saqlash",
              "PHP fayllarini avtomatik yuklash",
              "Test natijalarini yozish",
            ],
            answer: 0,
            explain: ".env muhit sozlamalarini kod tashqarisida saqlaydi: baza manzili, debug rejimi, API kalitlari. U versiyalanmaydi.",
          },
          {
            q: "file_put_contents() da FILE_APPEND bayrog'i nima qiladi?",
            options: [
              "Faylni o'chiradi",
              "Faylni faqat o'qish uchun ochadi",
              "Mavjud mazmun oxiriga qo'shadi",
              "Faylni siqadi",
            ],
            answer: 2,
            explain: "FILE_APPEND faylni tozalamaydi, yangi yozuvni oxiriga qo'shadi. LOCK_EX esa bir vaqtda yozishdan himoya qiladi.",
          },
        ],
      },
      {
        id: 35,
        title: "PHPUnit: birinchi avtomatik testlar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Test — kodning kutilganidek ishlashini tekshiradigan avtomatik skript. PHPUnit PHP uchun eng mashhur test freymvorki. U har bir testni alohida bajaradi, natijani hisoblaydi va xato bo'lsa aniq qaysi shart buzilganini ko'rsatadi. Testlar refaktoring paytida ishonch beradi.",
          },
          {
            type: "code",
            title: "src/Calculator.php",
            code: `<?php
declare(strict_types=1);

class Calculator
{
    public function qosh(int $a, int $b): int
    {
        return $a + $b;
    }

    public function bol(int $a, int $b): float
    {
        if ($b === 0) {
            throw new InvalidArgumentException("Nolga bo'lish mumkin emas.");
        }

        return $a / $b;
    }
}`,
            output: "Bu fayl faqat Calculator klassini e'lon qiladi. Test uni autoload yoki require orqali yuklaydi; alohida bajarilganda matn chiqmaydi.",
          },
          {
            type: "code",
            title: "tests/CalculatorTest.php",
            code: `<?php
declare(strict_types=1);

use PHPUnit\\Framework\\TestCase;

final class CalculatorTest extends TestCase
{
    public function testQoshadi(): void
    {
        $kalkulyator = new Calculator();

        $this->assertSame(5, $kalkulyator->qosh(2, 3));
    }

    public function testBoladi(): void
    {
        $kalkulyator = new Calculator();

        $this->assertSame(2.5, $kalkulyator->bol(5, 2));
    }

    public function testNolgaBolishXatoBeradi(): void
    {
        $this->expectException(InvalidArgumentException::class);

        (new Calculator())->bol(4, 0);
    }
}`,
            outputLabel: "phpunit natijasi",
            output: `PHPUnit 11.5.0 by Sebastian Bergmann and contributors.

...                                                                 3 / 3 (100%)

OK (3 tests, 3 assertions)`,
          },
          {
            type: "table",
            head: ["Assertion", "Tekshiradi"],
            rows: [
              ["<code>assertSame($kutilgan, $haqiqiy)</code>", "Tur va qiymat qat'iy tengligini"],
              ["<code>assertEquals()</code>", "Qiymat tengligini, turni bo'shashtirib"],
              ["<code>assertTrue()</code>", "Qiymat true ekanini"],
              ["<code>assertCount(3, $massiv)</code>", "Massiv elementlari sonini"],
              ["<code>assertStringContainsString()</code>", "Matn ichida qism borligini"],
              ["<code>expectException()</code>", "Keyingi kod istisno otishini"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Testni qanday nomlash va yozish?",
            html: "Test metodi <code>test</code> bilan boshlansin yoki <code>#[Test]</code> atributi bilan belgilansin. Har bir test uch qadamdan iborat: tayyorlash (Arrange), bajarish (Act), tekshirish (Assert). Bitta testda bitta xatti-harakatni tekshiring — xato bo'lsa sabab darhol ko'rinadi. PHPUnit o'rnatish: <code>composer require --dev phpunit/phpunit</code>.",
          },
          {
            type: "ul",
            items: [
              "Testlar tarmoq yoki haqiqiy tashqi xizmatga bog'lanmasin; ular tez va takrorlanuvchan bo'lsin.",
              "Har bir xato uchun avval muvaffaqiyatsiz test yozib, keyin tuzatish — TDD yondashuvi.",
              "Test ma'lumotlari aniq va kichik bo'lsin, tasodifiy qiymatlardan qoching.",
              "<code>phpunit.xml</code> da bootstrap va test papkasini sozlab, buyruqni qisqartiring.",
            ],
          },
        ],
        quiz: [
          {
            q: "assertSame() va assertEquals() orasidagi farq nima?",
            options: [
              "assertSame faqat sonlarni tekshiradi",
              "assertSame tur va qiymatni qat'iy tekshiradi",
              "assertEquals qat'iyroq",
              "Farqi yo'q",
            ],
            answer: 1,
            explain: "assertSame() === kabi ishlaydi va turni ham tekshiradi. assertEquals() esa qiymatlarni bo'shashtirib solishtiradi.",
          },
          {
            q: "Kod istisno otishini tekshirish uchun qaysi metod ishlatiladi?",
            options: ["assertException()", "catchException()", "expectException()", "throwException()"],
            answer: 2,
            explain: "expectException() kutilayotgan istisno klassini e'lon qiladi; keyingi kod shu istisnoni otishi kerak.",
          },
          {
            q: "PHPUnit'ni loyihaga qanday o'rnatish tavsiya etiladi?",
            options: [
              "composer require --dev phpunit/phpunit",
              "composer require phpunit/phpunit --global-only",
              "Faqat phpunit.phar'ni qo'lda ko'chirish",
              "npm install phpunit",
            ],
            answer: 0,
            explain: "--dev bayrog'i test kutubxonasini faqat ishlab chiqish bog'liqligi sifatida qo'shadi, production'ga olib ketilmaydi.",
          },
        ],
      },
      {
        id: 36,
        title: "Testlash amaliyoti: mock, data provider va TDD",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Har bir testni haqiqiy email yoki to'lov xizmatiga ulash shart emas. Mock — kutilgan chaqiruvlarni tekshiradigan soxta obyekt. Data provider esa bitta testni bir necha ma'lumot to'plami bilan yuritadi. Bu ikki vosita testlarni tez va ishonchli qiladi.",
          },
          {
            type: "code",
            title: "src/XabarXizmati.php",
            code: `<?php
declare(strict_types=1);

interface Mailer
{
    public function yubor(string $kimga, string $matn): bool;
}

final class XabarXizmati
{
    public function __construct(private Mailer $mailer)
    {
    }

    public function eslat(string $email): string
    {
        $ok = $this->mailer->yubor($email, "Kurs davom etmoqda");

        return $ok
            ? "Yuborildi: $email"
            : "Yuborilmadi: $email";
    }
}`,
            output: "Bu fayl interfeys va xizmat klassini e'lon qiladi. Xizmat Mailer'ni tashqaridan oladi, shuning uchun testda uni mock bilan almashtirish mumkin.",
          },
          {
            type: "code",
            title: "tests/XabarXizmatiTest.php",
            code: `<?php
declare(strict_types=1);

use PHPUnit\\Framework\\TestCase;

final class XabarXizmatiTest extends TestCase
{
    public function testEslatmaYuboriladi(): void
    {
        $mailer = $this->createMock(Mailer::class);

        $mailer->expects($this->once())
            ->method("yubor")
            ->with(
                "aziza@example.com",
                $this->stringContains("Kurs")
            )
            ->willReturn(true);

        $xizmat = new XabarXizmati($mailer);

        $this->assertSame(
            "Yuborildi: aziza@example.com",
            $xizmat->eslat("aziza@example.com")
        );
    }
}`,
            outputLabel: "phpunit natijasi",
            output: `PHPUnit 11.5.0 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

OK (1 test, 1 assertion)`,
          },
          {
            type: "table",
            head: ["Test dublyori", "Vazifasi"],
            rows: [
              ["Dummy", "Faqat argument to'ldirish uchun, ishlatilmaydi"],
              ["Stub", "Belgilangan javobni qaytaradi"],
              ["Mock", "Chaqiruvlar soni va argumentlarini tekshiradi"],
              ["Spy", "Chaqiruvlarni yozib boradi, keyin tekshiriladi"],
              ["Fake", "Ishlaydigan soddalashtirilgan implementatsiya"],
            ],
          },
          {
            type: "code",
            title: "tests/QoshishTest.php",
            code: `<?php
declare(strict_types=1);

use PHPUnit\\Framework\\Attributes\\DataProvider;
use PHPUnit\\Framework\\TestCase;

final class QoshishTest extends TestCase
{
    public static function qoshishMalumotlari(): array
    {
        return [
            [1, 2, 3],
            [0, 0, 0],
            [-2, 5, 3],
        ];
    }

    #[DataProvider("qoshishMalumotlari")]
    public function testQoshish(int $a, int $b, int $kutilgan): void
    {
        $this->assertSame(
            $kutilgan,
            (new Calculator())->qosh($a, $b)
        );
    }
}`,
            outputLabel: "phpunit natijasi",
            output: `PHPUnit 11.5.0 by Sebastian Bergmann and contributors.

...                                                                 3 / 3 (100%)

OK (3 tests, 3 assertions)`,
          },
          {
            type: "note",
            variant: "tip",
            title: "TDD: Red — Green — Refactor",
            html: "Avval kutilgan xatti-harakat uchun muvaffaqiyatsiz test yozing (Red). Keyin test o'tadigan eng oddiy kodni yozing (Green). So'ng kodni tozalang, testlar yana ishlashini tekshiring (Refactor). Bu tartib dizaynni soddalashtiradi va keraksiz kod yozishdan saqlaydi.",
          },
        ],
        quiz: [
          {
            q: "Mock obyektining asosiy vazifasi nima?",
            options: [
              "Haqiqiy bazaga ulanish",
              "Testni tezlashtirish uchun barcha kodni o'chirish",
              "Kutilgan chaqiruvlar va argumentlarni tekshirish",
              "PHP versiyasini aniqlash",
            ],
            answer: 2,
            explain: "Mock haqiqiy bog'liqlik o'rnida turadi va chaqiruvlar soni, argumentlari kutilgandek bo'lganini tekshiradi.",
          },
          {
            q: "Data provider nima uchun ishlatiladi?",
            options: [
              "Test natijalarini bazaga yozish uchun",
              "Bitta testni bir necha ma'lumot to'plami bilan bajarish uchun",
              "Faqat istisnolarni tekshirish uchun",
              "Kod qamrovini oshirish uchun",
            ],
            answer: 1,
            explain: "Data provider har bir qatorni alohida test holatiga aylantiradi, shu bilan bir necha kirish natijasini kam kod bilan tekshirasiz.",
          },
          {
            q: "TDD ning to'g'ri tartibi qanday?",
            options: [
              "Red → Green → Refactor",
              "Green → Red → Deploy",
              "Refactor → Deploy → Test",
              "Test → Deploy → Refactor",
            ],
            answer: 0,
            explain: "Avval muvaffaqiyatsiz test (Red), keyin uni o'tkazuvchi kod (Green), so'ng tozalash (Refactor) bajariladi.",
          },
        ],
      },
      {
        id: 37,
        title: "Laravel kirish: o'rnatish va routing",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Laravel — PHP uchun to'liq freymvork: routing, controller, Blade shablonlari, Eloquent ORM, migratsiyalar va autentifikatsiya tayyor. U Composer orqali o'rnatiladi. So'rov <code>public/index.php</code> dan kiradi, router mos yo'lni topadi va controller metodini chaqiradi.",
          },
          {
            type: "code",
            title: "routes/web.php",
            code: `<?php

use App\\Http\\Controllers\\KursController;
use Illuminate\\Support\\Facades\\Route;

Route::get("/", function () {
    return view("welcome");
});

Route::get("/kurslar/{id}", function (int $id) {
    return "Kurs #$id";
})->whereNumber("id");

Route::get("/api/kurslar", [KursController::class, "index"]);

Route::get("/haqida", [KursController::class, "haqida"])
    ->name("haqida");`,
            outputLabel: "Natija (GET /kurslar/7)",
            output: "Kurs #7",
          },
          {
            type: "code",
            title: "app/Http/Controllers/KursController.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Http\\Controllers;

use Illuminate\\Http\\JsonResponse;

class KursController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            "data" => [
                ["id" => 1, "nom" => "PHP"],
                ["id" => 2, "nom" => "SQL"],
            ],
        ], 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function haqida(): string
    {
        return "Noldan kurslari";
    }
}`,
            outputLabel: "Natija (GET /api/kurslar)",
            output: `{"data":[{"id":1,"nom":"PHP"},{"id":2,"nom":"SQL"}]}`,
          },
          {
            type: "table",
            head: ["Buyruq / yo'l", "Vazifasi"],
            rows: [
              ["<code>composer create-project laravel/laravel kurslar</code>", "Yangi Laravel loyihasini yaratadi"],
              ["<code>php artisan serve</code>", "Lokal serverni ishga tushiradi"],
              ["<code>php artisan route:list</code>", "Ro'yxatdagi routelarni ko'rsatadi"],
              ["<code>php artisan make:controller KursController</code>", "Controller yaratadi"],
              ["<code>routes/web.php</code>", "Veb-routelar"],
              ["<code>routes/api.php</code>", "API-routelar (o'rnatishga qarab)"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Laravel papka tuzilishi",
            html: "<code>app/</code> — ilova kodi, <code>routes/</code> — yo'llar, <code>resources/views/</code> — Blade shablonlari, <code>database/migrations/</code> — baza sxemasi, <code>public/</code> — yagona veb kirish nuqtasi, <code>storage/</code> — log va keshlar. <code>.env</code> da <code>APP_KEY</code> va baza sozlamalari turadi; u git'ga qo'shilmaydi.",
          },
          {
            type: "ul",
            items: [
              "Route parametri controller metodiga nom bo'yicha uzatiladi: <code>{id}</code> -> <code>$id</code>.",
              "Route'ga nom berish (<code>->name()</code>) URL'ni kodda takrorlamaslikka yordam beradi.",
              "Routelarni <code>Route::middleware(...)->group(...)</code> bilan guruhlang.",
              "Forma yuborishda POST route va Blade'da <code>@csrf</code> bo'lishi shart.",
            ],
          },
        ],
        quiz: [
          {
            q: "Laravel'da veb-routelar odatda qaysi faylda yoziladi?",
            options: ["routes/web.php", "public/index.php", "app/Models/Route.php", "resources/views/web.php"],
            answer: 0,
            explain: "routes/web.php veb-routelarni saqlaydi. public/index.php faqat ilovani ishga tushiruvchi kirish nuqtasi.",
          },
          {
            q: "Route'dagi {id} parametri controller metodida qanday olinadi?",
            options: [
              "$_GET[\"id\"] orqali",
              "Global $id o'zgaruvchisi orqali",
              "Metod argumenti sifatida",
              "Faqat session orqali",
            ],
            answer: 2,
            explain: "Laravel route parametrini metod argumentiga avtomatik bog'laydi: function show(int $id).",
          },
          {
            q: "whereNumber(\"id\") nimani ta'minlaydi?",
            options: [
              "ID avtomatik oshishini",
              "Parametr faqat raqamlardan iborat bo'lishini",
              "Routeni faqat POST qilishni",
              "Controller'ni bloklashni",
            ],
            answer: 1,
            explain: "whereNumber route parametriga raqam cheklovini qo'yadi; mos kelmasa 404 qaytadi.",
          },
        ],
      },
      {
        id: 38,
        title: "Laravel: controller, Blade va formalar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Controller so'rovni qabul qiladi, validatsiya qiladi va javob qaytaradi. Blade — Laravel'ning shablon tili: u HTML ichida <code>@if</code>, <code>@foreach</code> kabi qulay direktivalar beradi. <code>{{ }}</code> chiqishi avtomatik HTML-escape qilinadi, bu XSS'dan himoyaning muhim qismi.",
          },
          {
            type: "code",
            title: "app/Http/Controllers/KursController.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Http\\Controllers;

use App\\Models\\Kurs;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class KursController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $malumot = $request->validate([
            "nom" => ["required", "string", "min:3", "max:120"],
            "narx" => ["required", "integer", "min:0"],
        ]);

        Kurs::create($malumot);

        return redirect()
            ->route("kurslar.index")
            ->with("ok", "Kurs qo'shildi");
    }
}`,
            outputLabel: "Natija (to'g'ri forma yuborilganda)",
            output: "HTTP 302 -> /kurslar. Sessiyaga ok = \"Kurs qo'shildi\" flash xabari yoziladi.",
          },
          {
            type: "code",
            title: "routes/web.php",
            code: `<?php
use App\\Http\\Controllers\\KursController;
use Illuminate\\Support\\Facades\\Route;

Route::get("/kurslar", [KursController::class, "index"])
    ->name("kurslar.index");
Route::post("/kurslar", [KursController::class, "store"])
    ->name("kurslar.store");`,
            output: "GET  /kurslar -> KursController@index (kurslar.index)\nPOST /kurslar -> KursController@store (kurslar.store)",
          },
          {
            type: "code",
            title: "resources/views/kurslar/index.blade.php",
            code: `@extends("layouts.app")

@section("content")
    <h1>Kurslar</h1>

    @if (session("ok"))
        <p class="ok">{{ session("ok") }}</p>
    @endif

    <ul>
        @foreach ($kurslar as $kurs)
            <li>
                {{ $kurs->nom }} —
                {{ number_format($kurs->narx, 0, ".", " ") }} so'm
            </li>
        @endforeach
    </ul>
@endsection`,
            outputLabel: "Natija (2 ta kurs bilan)",
            output: `<h1>Kurslar</h1>
<p class="ok">Kurs qo'shildi</p>
<ul>
    <li>PHP asoslari — 120 000 so'm</li>
    <li>SQL asoslari — 90 000 so'm</li>
</ul>`,
          },
          {
            type: "table",
            head: ["Direktiva", "Vazifasi"],
            rows: [
              ["<code>@extends(\"layouts.app\")</code>", "Asosiy layoutdan meros oladi"],
              ["<code>@section / @yield</code>", "Layout ichidagi bo'limlarni to'ldiradi"],
              ["<code>@if / @else / @endif</code>", "Shartli ko'rsatish"],
              ["<code>@foreach / @endforeach</code>", "Ro'yxatni aylantirib chiqarish"],
              ["<code>@csrf</code>", "Formaga CSRF token qo'shadi"],
              ["<code>@error(\"nom\")</code>", "Validatsiya xatosini ko'rsatadi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "{{ }} va {!! !!}",
            html: "<code>{{ $matn }}</code> HTML belgilarini escape qiladi va foydalanuvchi ma'lumoti uchun doim shu ishlatiladi. <code>{!! $matn !!}</code> esa xom HTML chiqaradi — uni faqat ishonchli, oldindan tozalangan kontent uchun ishlating. Foydalanuvchi izohida <code>{!! !!}</code> ishlatsangiz, XSS eshigi ochiladi.",
          },        ],
        quiz: [
          {
            q: "Blade'da o'zgaruvchini XSS'dan xavfsiz chiqarish uchun qaysi yozuv ishlatiladi?",
            options: ["{!! $x !!}", "{{ $x }}", "<% $x %>", "<?= $x ?> (escape'siz)"],
            answer: 1,
            explain: "{{ $x }} avtomatik htmlspecialchars qiladi. {!! $x !!} xom HTML chiqaradi va faqat ishonchli kontent uchun mos.",
          },
          {
            q: "Laravel formasiga CSRF tokenni qaysi direktiva qo'shadi?",
            options: ["@csrf", "@token", "@secure", "@method"],
            answer: 0,
            explain: "@csrf yashirin _token maydonini qo'shadi. Laravel kelgan tokenni sessiyadagi token bilan solishtiradi.",
          },
          {
            q: "Validatsiya xatolari Blade'da asosan qayerdan o'qiladi?",
            options: [
              "Faqat JavaScript'dan",
              "$errors o'zgaruvchisi va sessiyadan",
              "To'g'ridan-to'g'ri URL'dan",
              "Faqat log faylidan",
            ],
            answer: 1,
            explain: "Laravel xatolarni sessiyaga yozadi va Blade'ga $errors obyekti sifatida beradi. @error direktivasi shu obyektdan foydalanadi.",
          },
        ],
      },
      {
        id: 39,
        title: "Laravel: Eloquent ORM",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Eloquent — Laravel'ning ORM qatlami. Har bir jadvalga model mos keladi, har bir qator obyektga aylanadi. <code>Kurs::where(...)->get()</code> kabi zanjirlar SQL yozmasdan so'rov yasaydi. Munosabatlar (<code>hasMany</code>, <code>belongsTo</code>) esa bog'langan yozuvlarni qulay o'qish imkonini beradi.",
          },
          {
            type: "code",
            title: "app/Models/Kurs.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class Kurs extends Model
{
    protected $fillable = ["nom", "narx", "faol"];

    protected $casts = [
        "faol" => "boolean",
        "narx" => "integer",
    ];

    public function darslar(): HasMany
    {
        return $this->hasMany(Dars::class);
    }
}`,
            output: "Model kurslar jadvali bilan ishlaydi. $fillable ommaviy to'ldirishga ruxsat berilgan maydonlarni, $casts esa faol va narx turlarini belgilaydi.",
          },
          {
            type: "code",
            title: "queries.php",
            code: `<?php
$kurslar = Kurs::where("faol", true)
    ->orderBy("nom")
    ->limit(3)
    ->get();

foreach ($kurslar as $kurs) {
    echo $kurs->nom . PHP_EOL;
}

$kurs = Kurs::with("darslar")->findOrFail(1);

echo $kurs->darslar->count() . " ta dars";`,
            output: `PHP asoslari
SQL asoslari
12 ta dars`,
          },
          {
            type: "table",
            head: ["Metod", "Vazifasi"],
            rows: [
              ["<code>all()</code>", "Barcha yozuvlarni oladi"],
              ["<code>where()</code>", "Shart qo'shadi"],
              ["<code>findOrFail()</code>", "ID bo'yicha topadi, topilmasa 404 xatosi"],
              ["<code>create()</code>", "Yangi yozuv yaratadi"],
              ["<code>update()</code>", "Mavjud yozuvni yangilaydi"],
              ["<code>delete()</code>", "Yozuvni o'chiradi"],
              ["<code>with()</code>", "Bog'langan yozuvlarni oldindan yuklaydi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "N+1 muammosi",
            html: "Har bir kurs uchun <code>$kurs->darslar</code> alohida so'rov yuborsa, 20 kurs uchun 21 so'rov ketadi. <code>Kurs::with(\"darslar\")->get()</code> esa 2 so'rovda hammasini oladi. Shuningdek <code>$fillable</code> yoki <code>$guarded</code> bo'lmasa, foydalanuvchi yuborgan massiv orqali kutilmagan maydon (masalan, <code>is_admin</code>) yozilishi mumkin.",
          },
          {
            type: "ul",
            items: [
              "Model nomi birlikda, jadval nomi ko'plikda: <code>Kurs</code> -> <code>kurslar</code> (Laravel avtomatik taxmin qiladi).",
              "Murakkab so'rovlarni scope yoki repository'ga ajrating, controller ichida zanjirni cheksiz uzatmang.",
              "Katta natijalarda <code>chunk()</code> yoki <code>lazy()</code> bilan bo'lib o'qing.",
              "Yozuvdan oldin validatsiya qiling; Eloquent o'zi biznes-qoidalarni tekshirmaydi.",
            ],
          },
        ],
        quiz: [
          {
            q: "with(\"darslar\") nima maqsadda ishlatiladi?",
            options: [
              "Jadvalni o'chirish uchun",
              "Faqat bitta ustun tanlash uchun",
              "Bog'langan yozuvlarni oldindan yuklab, N+1 muammosini kamaytirish uchun",
              "Migratsiya yaratish uchun",
            ],
            answer: 2,
            explain: "Eager loading with() yordamida bog'langan yozuvlar bitta qo'shimcha so'rovda olinadi, har bir qator uchun alohida so'rov ketmaydi.",
          },
          {
            q: "$fillable xossasi nimadan himoya qiladi?",
            options: [
              "Mass assignment orqali ruxsatsiz maydon yozilishidan",
              "SQL injection'dan to'liq",
              "Sessiya o'g'irlashidan",
              "Fayl yuklash xatosidan",
            ],
            answer: 0,
            explain: "$fillable create()/update() ga qaysi maydonlar ommaviy berilishini cheklaydi. SQL injection himoyasi esa query builder'ning binding'iga tayanadi.",
          },
          {
            q: "findOrFail(99) yozuvi topilmasa nima bo'ladi?",
            options: [
              "null qaytadi",
              "Bo'sh massiv qaytadi",
              "Yangi yozuv yaratiladi",
              "ModelNotFoundException otiladi va odatda 404 qaytadi",
            ],
            answer: 3,
            explain: "findOrFail topilmasa istisno otadi; Laravel buni avtomatik 404 javobiga aylantiradi. find() esa null qaytaradi.",
          },
        ],
      },
      {
        id: 40,
        title: "Laravel: middleware va validatsiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Middleware so'rov controller'ga yetmasdan oldin ishlaydi: login tekshiruvi, rol, til, throttling shu yerda turadi. FormRequest esa validatsiya qoidalarini va ruxsatni controllerdan ajratib oladi. Ikkalasi birgalikda controller'ni yupqa va tushunarli saqlaydi.",
          },
          {
            type: "code",
            title: "app/Http/Middleware/AdminMiddleware.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user()?->isAdmin()) {
            abort(403, "Ruxsat yo'q");
        }

        return $next($request);
    }
}`,
            outputLabel: "Natija (admin bo'lmagan foydalanuvchi)",
            output: "HTTP 403 — Ruxsat yo'q",
          },
          {
            type: "table",
            head: ["Qism", "Vazifasi"],
            rows: [
              ["<code>$request->user()</code>", "Joriy autentifikatsiya qilingan foydalanuvchi"],
              ["<code>?-></code>", "Null bo'lsa xato bermasdan davom etadi"],
              ["<code>abort(403)</code>", "Taqiqlangan javobni darhol qaytaradi"],
              ["<code>$next($request)</code>", "So'rovni keyingi qatlamga uzatadi"],
              ["<code>middleware(\"admin\")</code>", "Routeda middleware'ni ulaydi"],
            ],
          },
          {
            type: "code",
            title: "app/Http/Requests/KursSorovi.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class KursSorovi extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    public function rules(): array
    {
        return [
            "nom" => ["required", "string", "max:120"],
            "narx" => ["required", "integer", "min:0"],
            "nishon" => ["nullable", "url"],
        ];
    }

    public function messages(): array
    {
        return [
            "nom.required" => "Nom kiritilishi shart.",
            "narx.integer" => "Narx butun son bo'lsin.",
        ];
    }
}`,
            outputLabel: "Natija (bo'sh nom va matnli narxda)",
            output: `HTTP 422
{
    "message": "Nom kiritilishi shart. (and 1 more error)",
    "errors": {
        "nom": ["Nom kiritilishi shart."],
        "narx": ["Narx butun son bo'lsin."]
    }
}`,
          },
          {
            type: "note",
            variant: "info",
            title: "Middleware'ni ro'yxatga olish",
            html: "Laravel 11+ da alias <code>bootstrap/app.php</code> ichida <code>-&gt;withMiddleware(...)</code> orqali qo'shiladi: <code>$middleware-&gt;alias([\"admin\" =&gt; AdminMiddleware::class]);</code>. Keyin route guruhida <code>Route::middleware([\"auth\", \"admin\"])-&gt;group(...)</code> yoziladi. Middleware ichida og'ir biznes-mantiq emas, faqat kesib o'tish yoki kontekst tayyorlash bo'lsin.",
          },        ],
        quiz: [
          {
            q: "Middleware'ning asosiy vazifasi nima?",
            options: [
              "Ma'lumotlar bazasini yaratish",
              "So'rovni controller'ga yetkazishdan oldin tekshirish yoki filtrlash",
              "Blade fayllarini kompilyatsiya qilish",
              "Composer paketlarini yangilash",
            ],
            answer: 1,
            explain: "Middleware so'rov-javob zanjirida oraliq qatlam bo'lib, autentifikatsiya, rol, throttle kabi umumiy tekshiruvlarni bajaradi.",
          },
          {
            q: "FormRequest'dagi authorize() false qaytarsa qanday javob beriladi?",
            options: ["200 OK", "404 Not Found", "403 Forbidden", "302 Redirect"],
            answer: 2,
            explain: "authorize() false bo'lsa Laravel 403 qaytaradi va rules() tekshirilmaydi. Bu — ruxsat validatsiyadan oldin ekanini bildiradi.",
          },
          {
            q: "nullable|url qoidasi nimani anglatadi?",
            options: [
              "Maydon bo'sh bo'lishi mumkin, lekin to'ldirilsa URL bo'lishi kerak",
              "Maydon majburiy va URL bo'lishi kerak",
              "Maydon faqat raqam bo'lishi kerak",
              "Maydon butunlay e'tiborsiz qoldiriladi",
            ],
            answer: 0,
            explain: "nullable maydon yo'q yoki null bo'lsa o'tadi; qiymat berilsa url qoidasi tekshiriladi. required bo'lsa bo'sh qiymat xato beradi.",
          },
        ],
      },
      {
        id: 41,
        title: "Laravel: migratsiyalar, seeder va autentifikatsiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Migratsiya — baza sxemasining versiyalanadigan tarixi. U jadval yaratish va o'zgartirishni kodda saqlaydi, shuning uchun jamoa va serverlarda bir xil tuzilma olinadi. Seeder esa test yoki demo ma'lumotlarni to'ldiradi. Laravel autentifikatsiyasi esa sessiya, parol xeshi va CSRF'ni o'z ichiga oladi.",
          },
          {
            type: "code",
            title: "database/migrations/2026_10_23_100000_create_kurslar_table.php",
            code: `<?php
declare(strict_types=1);

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create("kurslar", function (Blueprint $table) {
            $table->id();
            $table->string("nom", 120);
            $table->unsignedInteger("narx")->default(0);
            $table->boolean("faol")->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("kurslar");
    }
};`,
            outputLabel: "Natija (php artisan migrate)",
            output: "kurslar jadvali yaratiladi: id, nom, narx, faol, created_at, updated_at ustunlari bilan. Migratsiya migrations jadvalida qayd etiladi.",
          },
          {
            type: "table",
            head: ["Buyruq", "Vazifasi"],
            rows: [
              ["<code>php artisan make:model Kurs -m</code>", "Model va migratsiya yaratadi"],
              ["<code>php artisan make:migration ...</code>", "Bo'sh migratsiya yaratadi"],
              ["<code>php artisan migrate</code>", "Yangi migratsiyalarni bajaradi"],
              ["<code>php artisan migrate:rollback</code>", "Oxirgi partiyani bekor qiladi"],
              ["<code>php artisan db:seed</code>", "Seeder'larni ishga tushiradi"],
              ["<code>php artisan make:seeder KursSeeder</code>", "Seeder klassini yaratadi"],
            ],
          },
          {
            type: "code",
            title: "app/Http/Controllers/AuthController.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;

class AuthController extends Controller
{
    public function login(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            "email" => ["required", "email"],
            "password" => ["required", "string"],
        ]);

        if (Auth::attempt($credentials, $request->boolean("remember"))) {
            $request->session()->regenerate();

            return redirect()->intended("/dashboard");
        }

        return back()
            ->withErrors(["email" => "Email yoki parol xato."])
            ->onlyInput("email");
    }
}`,
            outputLabel: "Natija (to'g'ri email va parol)",
            output: "HTTP 302 -> /dashboard. Sessiya ID'si yangilanadi va foydalanuvchi autentifikatsiya qilingan deb belgilanadi.",
          },
          {
            type: "note",
            variant: "info",
            title: "Auth::attempt ichida nima bo'ladi?",
            html: "Laravel email bo'yicha foydalanuvchini topadi, kiritilgan parolni bazadagi xesh bilan <code>password_verify()</code> orqali solishtiradi va muvaffaqiyatli bo'lsa sessiyani yangilaydi. Parolni migratsiyada <code>string(\"password\")</code> qilib saqlang; Laravel <code>hashed</code> cast yoki <code>Hash::make()</code> bilan avtomatik xeshlaydi. Login va parol tiklash routelariga <code>throttle</code> qo'ying.",
          },        ],
        quiz: [
          {
            q: "Laravel migratsiyasining asosiy vazifasi nima?",
            options: [
              "Blade shablonlarini keshlash",
              "Fayllarni yuklash",
              "Baza sxemasini versiyalab, jamoada bir xil tuzilmani ta'minlash",
              "Routelarni ro'yxatga olish",
            ],
            answer: 2,
            explain: "Migratsiyalar jadval va ustun o'zgarishlarini kod ko'rinishida saqlaydi. Har bir muhitda php artisan migrate bir xil sxemani yaratadi.",
          },
          {
            q: "Seeder nima uchun ishlatiladi?",
            options: [
              "Production bazasini o'chirish uchun",
              "Test yoki demo ma'lumotlarni bazaga to'ldirish uchun",
              "Parollarni xeshlash uchun",
              "Sessiya muddatini uzaytirish uchun",
            ],
            answer: 1,
            explain: "Seeder boshlang'ich yoki test ma'lumotlarini yaratadi. Production'da ehtiyotkorlik bilan, faqat kerakli seeder'larni ishga tushiring.",
          },
          {
            q: "Auth::attempt() muvaffaqiyatli bo'lgach qaysi amal bajarilishi kerak?",
            options: [
              "Parolni cookie'ga yozish",
              "Barcha sessiyalarni o'chirish",
              "Faqat sahifani yangilash",
              "Sessiya ID'sini yangilash",
            ],
            answer: 3,
            explain: "Sessiya fiksatsiyasini oldini olish uchun login'dan keyin session()->regenerate() chaqiriladi. Laravel'ning tayyor auth tizimi buni o'zi qiladi.",
          },
        ],
      },
      {
        id: 42,
        title: "MVC loyiha: tuzilish va router",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi o'rganganlarimizni bitta loyihaga yig'amiz: <strong>KursBaza</strong> — kurslar katalogi. MVC uch qatlamni ajratadi: Model ma'lumot bilan, View ko'rinish bilan, Controller so'rov va javob bilan ishlaydi. Barcha so'rovlar <code>public/index.php</code> orqali o'tadi — bu front controller deyiladi.",
          },
          {
            type: "table",
            head: ["Yo'l", "Vazifasi"],
            rows: [
              ["<code>public/index.php</code>", "Yagona kirish nuqtasi va router ishga tushishi"],
              ["<code>src/Core/</code>", "Router, View, Session kabi yadro klasslari"],
              ["<code>src/Controllers/</code>", "So'rovni qabul qiluvchi controllerlar"],
              ["<code>src/Models/</code>", "Domen obyektlari"],
              ["<code>src/Repositories/</code>", "PDO so'rovlari va ma'lumot saqlash"],
              ["<code>templates/</code>", "HTML shablonlar"],
              ["<code>config/</code>, <code>.env</code>", "Sozlamalar va maxfiy qiymatlar"],
            ],
          },
          {
            type: "code",
            title: "public/index.php",
            code: `<?php
declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";

use App\\Core\\Router;

$router = new Router();

$router->get("/", function (): void {
    echo "Bosh sahifa";
});

$router->get("/kurslar", function (): void {
    echo "Kurslar ro'yxati";
});

$router->get("/kurslar/{id}", function (string $id): void {
    echo "Kurs: $id";
});

$router->dispatch(
    $_SERVER["REQUEST_METHOD"],
    parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH)
);`,
            outputLabel: "Natija (GET /kurslar/7)",
            output: "Kurs: 7",
          },
          {
            type: "code",
            title: "src/Core/Router.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Core;

final class Router
{
    private array $routes = [];

    public function get(string $yol, callable $ish): void
    {
        $this->routes["GET"][$yol] = $ish;
    }

    public function post(string $yol, callable $ish): void
    {
        $this->routes["POST"][$yol] = $ish;
    }

    public function dispatch(string $method, string $path): void
    {
        $path = rtrim($path, "/") ?: "/";

        foreach ($this->routes[$method] ?? [] as $yol => $ish) {
            $parametrlar = $this->mos($yol, $path);

            if ($parametrlar === null) {
                continue;
            }

            $ish(...array_values($parametrlar));
            return;
        }

        http_response_code(404);
        echo "Sahifa topilmadi";
    }

    private function mos(string $yol, string $path): ?array
    {
        $yolQismlar = explode("/", trim($yol, "/"));
        $pathQismlar = explode("/", trim($path, "/"));

        if (count($yolQismlar) !== count($pathQismlar)) {
            return null;
        }

        $parametrlar = [];

        foreach ($yolQismlar as $index => $qism) {
            if (str_starts_with($qism, "{") && str_ends_with($qism, "}")) {
                $nom = trim($qism, "{}");
                $parametrlar[$nom] = $pathQismlar[$index];
            } elseif ($qism !== $pathQismlar[$index]) {
                return null;
            }
        }

        return $parametrlar;
    }
}`,
            output: "Router route'larni metod va yo'l bo'yicha saqlaydi. /kurslar/7 so'rovida {id} parametri 7 qiymatini oladi va closure'ga uzatiladi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Veb-serverni sozlang",
            html: "Apache'da <code>public/.htaccess</code> barcha so'rovlarni <code>index.php</code> ga yo'naltiradi. Nginx'da <code>try_files $uri $uri/ /index.php?$query_string;</code> yoziladi. <code>php -S localhost:8000 -t public</code> bilan ham sinash mumkin. <code>src/</code> va <code>.env</code> veb ildizidan tashqarida turishi muhim.",
          },
        ],
        quiz: [
          {
            q: "Front controller nima?",
            options: [
              "Har bir sahifa uchun alohida PHP fayl",
              "Barcha so'rovlarni qabul qiladigan yagona kirish nuqtasi",
              "Faqat CSS fayllarini boshqaruvchi skript",
              "Ma'lumotlar bazasidagi jadval",
            ],
            answer: 1,
            explain: "public/index.php barcha so'rovlarni qabul qiladi, autoload va routeni ishga tushiradi, keyin mos controller'ni chaqiradi.",
          },
          {
            q: "/kurslar/{id} route'iga /kurslar/7 so'rovi kelganda {id} qiymati nechaga teng?",
            options: ["kurslar", "null", "7", "Butun URL"],
            answer: 2,
            explain: "Router yo'l qismlarini solishtiradi va {id} o'rniga 7 ni qo'yadi. Controller yoki closure shu qiymatni argument sifatida oladi.",
          },
          {
            q: "MVC'da View qatlamining vazifasi nima?",
            options: [
              "Foydalanuvchiga ko'rinadigan HTML'ni tayyorlash",
              "SQL so'rovlarini bajarish",
              "Routelarni ro'yxatga olish",
              "Parollarni xeshlash",
            ],
            answer: 0,
            explain: "View faqat taqdimot bilan shug'ullanadi. Ma'lumotni model yoki repository beradi, controllerni esa so'rovni boshqaradi.",
          },
        ],
      },
      {
        id: 43,
        title: "MVC loyiha: controller va view qatlami",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Controller so'rovni qabul qiladi, repository'dan ma'lumot oladi va view'ga uzatadi. View esa HTML tayyorlaydi. Bu ajratish tufayli biznes-mantiqni o'zgartirmasdan ko'rinishni almashtirish, dizaynni buzmasdan mantiqni testlash mumkin.",
          },
          {
            type: "code",
            title: "src/Core/View.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Core;

final class View
{
    public function __construct(private string $papka)
    {
    }

    public function render(string $shablon, array $data = []): string
    {
        extract($data, EXTR_SKIP);

        ob_start();
        require $this->papka . "/" . $shablon . ".php";

        return (string) ob_get_clean();
    }
}`,
            output: "View berilgan shablonni PHP sifatida bajaradi, chiqishni buferga yig'adi va tayyor HTML matnini qaytaradi. extract() massiv kalitlarini shablon ichidagi o'zgaruvchilarga aylantiradi.",
          },
          {
            type: "code",
            title: "src/Controllers/KursController.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Controllers;

use App\\Core\\Controller;

final class KursController extends Controller
{
    public function index(): string
    {
        $kurslar = [
            ["nom" => "PHP asoslari", "narx" => 120000],
            ["nom" => "SQL asoslari", "narx" => 90000],
        ];

        return $this->render("kurslar/index", [
            "title" => "Kurslar",
            "kurslar" => $kurslar,
        ]);
    }
}`,
            outputLabel: "Natija (GET /kurslar)",
            output: `<h1>Kurslar</h1>
<p>PHP asoslari — 120 000 so'm</p>
<p>SQL asoslari — 90 000 so'm</p>`,
          },
          {
            type: "code",
            title: "templates/kurslar/index.php",
            code: `<h1><?= htmlspecialchars($title, ENT_QUOTES, "UTF-8") ?></h1>
<?php foreach ($kurslar as $kurs): ?>
    <p>
        <?= htmlspecialchars($kurs["nom"], ENT_QUOTES, "UTF-8") ?>
        — <?= number_format($kurs["narx"], 0, ".", " ") ?> so'm
    </p>
<?php endforeach; ?>`,
            output: "Shu shablon yuqoridagi HTML'ni beradi. Har bir chiqish htmlspecialchars() orqali escape qilinadi; number_format() narxni mingliklar bilan formatlaydi.",
          },
          {
            type: "table",
            head: ["Qatlam", "Bajaradigan ishi"],
            rows: [
              ["Controller", "So'rovni qabul qilish, ma'lumot yig'ish, view tanlash"],
              ["Model", "Domen ma'lumoti va qoidalari"],
              ["Repository", "SQL so'rovlari va saqlash detallari"],
              ["View", "HTML tayyorlash va escape qilish"],
              ["Router", "URL'ni controller metodiga bog'lash"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "extract() va escape",
            html: "<code>extract()</code> qulay, lekin shablonga tasodifan xavfli o'zgaruvchi tushmasligi kerak. <code>EXTR_SKIP</code> mavjud nomlarni ustidan yozmaydi. Shablonda barcha foydalanuvchi matnini <code>htmlspecialchars()</code> dan o'tkazing. Layout uchun alohida <code>templates/layout.php</code> yaratib, kontentni <code>$content</code> sifatida joylashtiring.",
          },
        ],
        quiz: [
          {
            q: "View ichidagi extract($data) nima qiladi?",
            options: [
              "Massivni JSON'ga aylantiradi",
              "Faylni o'chiradi",
              "Massiv kalitlarini shablon o'zgaruvchilariga aylantiradi",
              "SQL so'rovini bajaradi",
            ],
            answer: 2,
            explain: "extract() massiv kalitlarini nomli o'zgaruvchilarga aylantiradi. Shunda shablon $title kabi qiymatlarni to'g'ridan-to'g'ri ishlatadi.",
          },
          {
            q: "Shablonda foydalanuvchi kiritgan matnni qanday chiqarish kerak?",
            options: [
              "htmlspecialchars() bilan escape qilib",
              "To'g'ridan-to'g'ri echo bilan",
              "Faqat {!! !!} bilan",
              "base64 qilib",
            ],
            answer: 0,
            explain: "Har qanday foydalanuvchi matni HTML kontekstida htmlspecialchars() dan o'tishi kerak, aks holda XSS yuz beradi.",
          },
          {
            q: "Controller'ning vazifasi nimadan iborat?",
            options: [
              "Faqat HTML va CSS yozish",
              "So'rovni qabul qilib, ma'lumot va view'ni bog'lash",
              "Ma'lumotlar bazasini o'rnatish",
              "Serverni sozlash",
            ],
            answer: 1,
            explain: "Controller yupqa bo'lishi kerak: kirishni tekshiradi, kerakli ma'lumotni oladi, view'ni tanlaydi va javob qaytaradi.",
          },
        ],
      },
      {
        id: 44,
        title: "MVC loyiha: model, repository va PDO",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Model — domen ma'lumotini ifodalovchi obyekt. Repository — shu obyektlarni bazadan olish va saqlash bilan shug'ullanadigan qatlam. Controller PDO detallarini bilmasligi kerak: u faqat repository metodlarini chaqiradi. Bu testlash va kelajakda bazani almashtirishni osonlashtiradi.",
          },
          {
            type: "code",
            title: "src/Models/Kurs.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Models;

final class Kurs
{
    public function __construct(
        public readonly int $id,
        public readonly string $nom,
        public readonly int $narx,
    ) {
    }
}`,
            output: "Bu fayl faqat Kurs domen obyektini e'lon qiladi. U baza haqida hech narsa bilmaydi, shuning uchun testda oddiy new Kurs(...) bilan yaratiladi.",
          },
          {
            type: "code",
            title: "src/Repositories/KursRepository.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Repositories;

use App\\Models\\Kurs;
use PDO;

final class KursRepository
{
    public function __construct(private PDO $pdo)
    {
    }

    public function faollar(): array
    {
        $stmt = $this->pdo->query(
            "SELECT id, nom, narx FROM kurslar
             WHERE faol = 1 ORDER BY nom"
        );

        return array_map(
            fn(array $qator): Kurs => new Kurs(
                (int) $qator["id"],
                $qator["nom"],
                (int) $qator["narx"]
            ),
            $stmt->fetchAll()
        );
    }

    public function topish(int $id): ?Kurs
    {
        $stmt = $this->pdo->prepare(
            "SELECT id, nom, narx FROM kurslar WHERE id = :id"
        );
        $stmt->execute(["id" => $id]);

        $qator = $stmt->fetch();

        if ($qator === false) {
            return null;
        }

        return new Kurs(
            (int) $qator["id"],
            $qator["nom"],
            (int) $qator["narx"]
        );
    }

    public function yaratish(string $nom, int $narx): Kurs
    {
        $stmt = $this->pdo->prepare(
            "INSERT INTO kurslar (nom, narx, faol)
             VALUES (:nom, :narx, 1)"
        );
        $stmt->execute(["nom" => $nom, "narx" => $narx]);

        return new Kurs(
            (int) $this->pdo->lastInsertId(),
            $nom,
            $narx
        );
    }
}`,
            output: "Repository PDO so'rovlarini bajaradi va natijani Kurs obyektlariga aylantiradi. Uch metod: faollar(), topish() va yaratish().",
          },
          {
            type: "code",
            title: "foydalanish.php",
            code: `<?php
// kurslar jadvalida: #1 PHP asoslari, #2 SQL asoslari

$repo = new KursRepository($pdo);

foreach ($repo->faollar() as $kurs) {
    echo "#{$kurs->id} {$kurs->nom}" . PHP_EOL;
}

$yangi = $repo->yaratish("Git asoslari", 60000);
echo "Yangi ID: " . $yangi->id;`,
            output: `#1 PHP asoslari
#2 SQL asoslari
Yangi ID: 4`,
          },
          {
            type: "table",
            head: ["Yondashuv", "Afzalligi"],
            rows: [
              ["Entity (Kurs obyekti)", "Tur xavfsizligi, aniq maydonlar, metodlar"],
              ["Assotsiativ massiv", "Tez yozish, lekin imlo xatosi sezilmaydi"],
              ["Repository", "SQL'ni bir joyga yig'adi, controller'ni tozalaydi"],
              ["Interface + repository", "Testda soxta implementatsiya ulash mumkin"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Repository chegarasi",
            html: "Repository faqat ma'lumot olish va saqlash bilan shug'ullansin. Ikki jadvalni birga o'zgartiruvchi biznes-amal (masalan, buyurtma yaratish va omborni kamaytirish) service yoki alohida use-case klassida, tranzaksiya bilan bajariladi. Har bir jadval uchun avtomatik repository yozish shart emas — kerakli joyda ajrating.",
          },
        ],
        quiz: [
          {
            q: "Repository qatlamining vazifasi nima?",
            options: [
              "Ma'lumotlar bazasi bilan ishlashni controller va biznes kodidan ajratish",
              "HTML shablonlarini chiqarish",
              "Routelarni ro'yxatga olish",
              "Sessiyani boshqarish",
            ],
            answer: 0,
            explain: "Repository SQL va PDO detallarini yashiradi, yuqori qatlam esa oddiy metodlar bilan ishlaydi.",
          },
          {
            q: "PDO::lastInsertId() nimani qaytaradi?",
            options: [
              "Jadvaldagi qatorlar sonini",
              "Oxirgi SELECT natijasini",
              "Barcha ID'lar massivini",
              "Oxirgi INSERT natijasida yaratilgan auto-increment ID'ni",
            ],
            answer: 3,
            explain: "lastInsertId() oxirgi qo'shilgan yozuvning ID'sini beradi. Uni INSERT'dan keyin darhol chaqirish kerak.",
          },
          {
            q: "Entity nima?",
            options: [
              "Ma'lumotlar bazasidagi indeks",
              "Domen ma'lumotini ifodalovchi obyekt",
              "HTML formasi",
              "Server sozlamasi",
            ],
            answer: 1,
            explain: "Entity — biznes tushunchasini (Kurs, Foydalanuvchi) ifodalovchi obyekt. U maydonlar va ular bilan bog'liq xatti-harakatni saqlaydi.",
          },
        ],
      },
      {
        id: 45,
        title: "MVC loyiha: autentifikatsiya va sessiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "KursBaza'da foydalanuvchi email va parol bilan kiradi. Autentifikatsiya servisi parolni tekshiradi, sessiyaga foydalanuvchi ID'sini yozadi va ID'ni yangilaydi. Himoyalangan sahifalar esa sessiyada <code>uid</code> bor-yo'qligini tekshiradi. Bu — eng sodda, lekin to'g'ri qurilgan login oqimi.",
          },
          {
            type: "code",
            title: "src/Core/Auth.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Core;

use PDO;

final class Auth
{
    public function __construct(private PDO $pdo)
    {
    }

    public function urinish(string $email, string $parol): bool
    {
        $stmt = $this->pdo->prepare(
            "SELECT id, parol_hash FROM foydalanuvchilar
             WHERE email = :email"
        );
        $stmt->execute(["email" => $email]);
        $foydalanuvchi = $stmt->fetch();

        if ($foydalanuvchi === false) {
            return false;
        }

        if (!password_verify($parol, $foydalanuvchi["parol_hash"])) {
            return false;
        }

        session_regenerate_id(true);
        $_SESSION["uid"] = (int) $foydalanuvchi["id"];

        return true;
    }

    public function chiqish(): void
    {
        $_SESSION = [];

        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(
                session_name(),
                "",
                time() - 42000,
                $params["path"],
                $params["domain"],
                $params["secure"],
                $params["httponly"]
            );
        }

        session_destroy();
    }
}`,
            outputLabel: "Natija (to'g'ri email va parol)",
            output: "true qaytadi, $_SESSION[\"uid\"] ga foydalanuvchi ID'si yoziladi va sessiya ID'si yangilanadi.",
          },
          {
            type: "table",
            head: ["Holat", "Javob"],
            rows: [
              ["Sessiyada uid yo'q", "Login sahifasiga redirect yoki 401"],
              ["uid bor, ruxsat yo'q", "403 Forbidden"],
              ["Login muvaffaqiyatli", "302 redirect, sessiya yangilanadi"],
              ["Login xato", "Xato xabari, urinishlar soni oshadi"],
              ["Logout", "Sessiya va cookie tozalanadi"],
            ],
          },
          {
            type: "code",
            title: "public/himoyalangan.php",
            code: `<?php
declare(strict_types=1);

session_start([
    "cookie_httponly" => true,
    "cookie_secure" => true,
    "cookie_samesite" => "Lax",
]);

if (empty($_SESSION["uid"])) {
    header("Location: /login");
    exit;
}

$token = $_SESSION["csrf"] ??= bin2hex(random_bytes(32));

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $kelgan = $_POST["_token"] ?? "";

    if (!hash_equals($token, $kelgan)) {
        http_response_code(419);
        exit("CSRF token mos emas.");
    }
}

echo "Kirish mumkin";`,
            outputLabel: "Natija (uid mavjud, POST to'g'ri token bilan)",
            output: "Kirish mumkin",
          },
          {
            type: "note",
            variant: "warning",
            title: "Token formaga qanday tushadi?",
            html: "Shablonda yashirin maydon yoziladi: <code>&lt;input type=\"hidden\" name=\"_token\" value=\"&lt;?= htmlspecialchars($token, ENT_QUOTES, \"UTF-8\") ?&gt;\"&gt;</code>. Token sessiyada qoladi, URL'ga qo'shilmaydi. Login formasi ham CSRF token bilan himoyalansin. \"Meni eslab qol\" uchun alohida tasodifiy token yarating va uning xeshini bazada saqlang.",
          },
        ],
        quiz: [
          {
            q: "Login muvaffaqiyatli bo'lgandan keyin sessiya ID'si bilan nima qilish kerak?",
            options: [
              "Uni URL'ga qo'shish",
              "Uni cookie'da ochiq saqlash",
              "session_regenerate_id(true) bilan yangilash",
              "Uni o'chirib, yangi sessiya ochmaslik",
            ],
            answer: 2,
            explain: "ID yangilash sessiya fiksatsiyasini oldini oladi. Eski ID bekor qilinadi, foydalanuvchi yangi ID bilan davom etadi.",
          },
          {
            q: "Autentifikatsiya qilinmagan foydalanuvchiga API qanday status qaytarishi kerak?",
            options: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "500 Server Error"],
            answer: 0,
            explain: "401 autentifikatsiya kerakligini bildiradi. 403 esa foydalanuvchi taniqlangan, lekin ruxsati yetishmagan holat uchun.",
          },
          {
            q: "CSRF token odatda qayerda saqlanadi?",
            options: [
              "Faqat URL'da",
              "Sessiyada, formaga yashirin maydon sifatida qo'yiladi",
              "CSS faylida",
              "Faqat JavaScript xotirasida",
            ],
            answer: 1,
            explain: "Token sessiyaga bog'lanadi va formaga yashirin maydon qilib qo'shiladi. Server kelgan tokenni sessiyadagi qiymat bilan hash_equals orqali solishtiradi.",
          },
        ],
      },
      {
        id: 46,
        title: "MVC loyiha: validatsiya, xatolar va CSRF",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Foydalanuvchi kiritgan ma'lumot har doim tekshirilishi kerak. KursBaza'da kichik Validator klassi qoidalarni massiv ko'rinishida qabul qiladi. Xatolar esa foydalanuvchiga tushunarli, serverga esa xavfsiz tarzda qaytariladi: 404, 422 yoki 500 — har bir holat o'z kodini oladi.",
          },
          {
            type: "code",
            title: "src/Core/Validator.php",
            code: `<?php
declare(strict_types=1);

namespace App\\Core;

final class Validator
{
    private array $xatolar = [];

    public function tekshir(array $data, array $qoidalar): bool
    {
        foreach ($qoidalar as $maydon => $royxat) {
            $qiymat = trim((string) ($data[$maydon] ?? ""));

            foreach ($royxat as $qoida) {
                if ($qoida === "required" && $qiymat === "") {
                    $this->xatolar[$maydon] = "Maydon to'ldirilishi shart.";
                    break;
                }

                if (str_starts_with($qoida, "min:")) {
                    $min = (int) substr($qoida, 4);

                    if (mb_strlen($qiymat) < $min) {
                        $this->xatolar[$maydon] = "Kamida $min belgi kerak.";
                        break;
                    }
                }

                if ($qoida === "integer"
                    && filter_var($qiymat, FILTER_VALIDATE_INT) === false
                ) {
                    $this->xatolar[$maydon] = "Butun son bo'lishi kerak.";
                    break;
                }
            }
        }

        return $this->xatolar === [];
    }

    public function xatolar(): array
    {
        return $this->xatolar;
    }
}`,
            output: "Validator qoidalarni birma-bir tekshiradi va har bir maydon uchun birinchi xatoni saqlaydi. Natija mantiqiy qiymat, xatolar massivi esa xatolar() orqali olinadi.",
          },
          {
            type: "code",
            title: "tekshirish.php",
            code: `<?php
$validator = new Validator();

$ok = $validator->tekshir(
    ["nom" => "", "narx" => "abc"],
    [
        "nom" => ["required", "min:3"],
        "narx" => ["required", "integer"],
    ]
);

echo $ok
    ? "Ma'lumot to'g'ri"
    : implode(" | ", $validator->xatolar());`,
            output: "Maydon to'ldirilishi shart. | Butun son bo'lishi kerak.",
          },
          {
            type: "table",
            head: ["Vaziyat", "Status"],
            rows: [
              ["Noto'g'ri JSON yoki sintaksis", "400 Bad Request"],
              ["Login talab qilinadi", "401 Unauthorized"],
              ["Ruxsat yetishmaydi", "403 Forbidden"],
              ["Resurs topilmadi", "404 Not Found"],
              ["CSRF token mos emas / muddati o'tgan", "419 Page Expired"],
              ["Validatsiya xatosi", "422 Unprocessable Entity"],
              ["Juda ko'p urinish", "429 Too Many Requests"],
              ["Kutilmagan server xatosi", "500 Internal Server Error"],
            ],
          },
          {
            type: "code",
            title: "xatolarni-boshqarish.php",
            code: `<?php
try {
    throw new TopilmadiXatosi("Kurs #99 topilmadi.");
} catch (TopilmadiXatosi $xato) {
    http_response_code(404);
    echo $view->render("xatolar/404", [
        "xabar" => $xato->getMessage(),
    ]);
} catch (Throwable $xato) {
    error_log($xato->getMessage());
    http_response_code(500);
    echo "Serverda kutilmagan xato.";
}`,
            output: `<h1>Topilmadi</h1>
<p>Kurs #99 topilmadi.</p>`,
          },
          {
            type: "note",
            variant: "warning",
            title: "Xato matni ham ma'lumot",
            html: "Foydalanuvchiga SQL xatosi, fayl yo'li yoki stack trace ko'rsatmang. Har bir 500 xatoga logda qidirish uchun ID bering va foydalanuvchiga shu ID'ni ko'rsating. Production'da <code>APP_DEBUG=false</code>, <code>display_errors=0</code>. CSRF tekshiruvi muvaffaqiyatsiz bo'lsa amalni bajarmang va tokenni qayta yuklang.",
          },
        ],
        quiz: [
          {
            q: "419 status kodi nimani bildiradi?",
            options: ["Fayl juda katta", "Sessiya muddati uzaytirildi", "Ruxsat berildi", "CSRF token yo'q yoki mos emas"],
            answer: 3,
            explain: "419 Page Expired Laravel'da CSRF token yo'qligi yoki eskirganini bildiradi. Formani qayta yuklab, yangi token bilan yuborish kerak.",
          },
          {
            q: "Validatsiya muvaffaqiyatsiz bo'lganda API odatda qaysi status qaytaradi?",
            options: ["200", "422", "500", "204"],
            answer: 1,
            explain: "422 so'rov sintaksisi to'g'ri, lekin qiymatlar qoidalarga mos emasligini bildiradi. Javobda maydonlar bo'yicha xatolar beriladi.",
          },
          {
            q: "Production'da kutilmagan xato yuz berganda foydalanuvchiga nima ko'rsatish kerak?",
            options: [
              "To'liq stack trace",
              "Baza paroli va fayl yo'llari",
              "Umumiy xabar va log uchun xato ID'si",
              "Bo'sh oq sahifa",
            ],
            answer: 2,
            explain: "Tafsilotlar logda qoladi, foydalanuvchi umumiy xabar va qo'llab-quvvatlash uchun xato ID'sini ko'radi.",
          },
        ],
      },
      {
        id: 47,
        title: "MVC loyiha: testlash",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "KursBaza'ni ishonch bilan o'zgartirish uchun testlar kerak. Repository'ni haqiqiy MySQL'siz, xotiradagi SQLite bilan tekshirish mumkin. Router va controller'ni esa chiqishni ushlab test qilamiz. Bu testlar tez ishlaydi va CI'da har push'da avtomatik bajariladi.",
          },
          {
            type: "code",
            title: "tests/KursRepositoryTest.php",
            code: `<?php
declare(strict_types=1);

use App\\Models\\Kurs;
use App\\Repositories\\KursRepository;
use PHPUnit\\Framework\\TestCase;

final class KursRepositoryTest extends TestCase
{
    private PDO $pdo;

    protected function setUp(): void
    {
        $this->pdo = new PDO("sqlite::memory:");
        $this->pdo->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION
        );

        $this->pdo->exec(
            "CREATE TABLE kurslar (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom TEXT NOT NULL,
                narx INTEGER NOT NULL,
                faol INTEGER NOT NULL DEFAULT 1
            )"
        );

        $this->pdo->exec(
            "INSERT INTO kurslar (nom, narx, faol)
             VALUES ('PHP asoslari', 120000, 1),
                    ('SQL asoslari', 90000, 1)"
        );
    }

    public function testFaollarKursObyektlariniQaytaradi(): void
    {
        $repo = new KursRepository($this->pdo);

        $kurslar = $repo->faollar();

        $this->assertCount(2, $kurslar);
        $this->assertInstanceOf(Kurs::class, $kurslar[0]);
        $this->assertSame("PHP asoslari", $kurslar[0]->nom);
    }
}`,
            outputLabel: "phpunit natijasi",
            output: `PHPUnit 11.5.0 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

OK (1 test, 3 assertions)`,
          },
          {
            type: "code",
            title: "tests/RouterTest.php",
            code: `<?php
declare(strict_types=1);

use App\\Core\\Router;
use PHPUnit\\Framework\\TestCase;

final class RouterTest extends TestCase
{
    public function testParametrliRouteIshlaydi(): void
    {
        $router = new Router();

        $router->get("/kurslar/{id}", function (string $id): void {
            echo "Kurs: $id";
        });

        ob_start();
        $router->dispatch("GET", "/kurslar/7");
        $html = (string) ob_get_clean();

        $this->assertSame("Kurs: 7", $html);
    }
}`,
            outputLabel: "phpunit natijasi",
            output: `PHPUnit 11.5.0 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

OK (1 test, 1 assertion)`,
          },
          {
            type: "table",
            head: ["Test turi", "Nimani tekshiradi"],
            rows: [
              ["Unit test", "Bitta klass yoki funksiya mantiqini"],
              ["Integration test", "Repository + baza yoki router + controller birgalikda"],
              ["Feature test", "To'liq HTTP so'rov va javobni"],
              ["Regression test", "Topilgan xato qaytmasligini"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Test bazasi xavfsiz bo'lsin",
            html: "Testlar hech qachon production bazasiga ulanmasin. SQLite <code>:memory:</code> har testda toza bo'ladi, lekin ba'zi MySQL xususiyatlarini tekshirmaydi. Muhim integratsiya uchun alohida test bazasi va migratsiyalardan foydalaning. Har testdan keyin yaratilgan fayl va yozuvlarni tozalang.",
          },
          {
            type: "ul",
            items: [
              "Test nomi xatti-harakatni aytsin: <code>testTopilmaganKursNullQaytaradi</code>.",
              "Tashqi API, email va to'lovni mock yoki fake bilan almashtiring.",
              "<code>phpunit.xml</code> da testlar uchun alohida env qiymatlarini bering.",
              "CI'da testlarni har commit'da ishga tushiring; qizil test bilan merge qilmang.",
            ],
          },
        ],
        quiz: [
          {
            q: "sqlite::memory: nima?",
            options: [
              "Xotirada yashaydigan vaqtinchalik test bazasi",
              "MySQL'ning maxsus rejimi",
              "Faylga yoziladigan production bazasi",
              "PHP sessiyasining nomi",
            ],
            answer: 0,
            explain: "SQLite xotiradagi baza test tugagach yo'qoladi. U tez va izolyatsiyalangan, lekin MySQL'ning barcha xususiyatlarini takrorlamaydi.",
          },
          {
            q: "assertStringContainsString() nimani tekshiradi?",
            options: [
              "Matnlar aynan tengligini",
              "Massiv uzunligini",
              "Matn ichida kutilgan qism borligini",
              "Fayl mavjudligini",
            ],
            answer: 2,
            explain: "Bu assertion katta matn (masalan, HTML) ichida kichik qism borligini tekshiradi. Aniq tenglik uchun assertSame ishlatiladi.",
          },
          {
            q: "Integration test odatda nimani tekshiradi?",
            options: [
              "Faqat bitta o'zgaruvchi turini",
              "Bir nechta qatlamning birgalikda ishlashini",
              "Faqat CSS ko'rinishini",
              "Faqat server tezligini",
            ],
            answer: 1,
            explain: "Integration test repository va baza, router va controller kabi qatlamlarni birga ishga tushirib, ularning mosligini tekshiradi.",
          },
        ],
      },
      {
        id: 48,
        title: "MVC loyiha: yakunlash va deploy",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Loyiha ishlayapti, testlar yashil. Endi uni serverga chiqarish kerak. Deploy — shunchaki fayllarni ko'chirish emas: muhit sozlamalari, baza migratsiyasi, huquqlar, HTTPS va xatolarni kuzatish ham muhim. Quyida production uchun front controller va sog'liq tekshiruvi ko'rsatilgan.",
          },
          {
            type: "code",
            title: "public/index.php (production)",
            code: `<?php
declare(strict_types=1);

use App\\Controllers\\KursController;
use App\\Core\\Router;
use App\\Core\\View;
use App\\Repositories\\KursRepository;

require __DIR__ . "/../vendor/autoload.php";

ini_set("display_errors", "0");
error_reporting(E_ALL);

$host = getenv("DB_HOST") ?: "127.0.0.1";
$name = getenv("DB_NAME") ?: "kursbaza";
$user = getenv("DB_USER") ?: "kursbaza";
$pass = getenv("DB_PASS") ?: "";

$pdo = new PDO(
    "mysql:host=$host;dbname=$name;charset=utf8mb4",
    $user,
    $pass,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$view = new View(__DIR__ . "/../templates");
$repo = new KursRepository($pdo);
$controller = new KursController($repo, $view);

$router = new Router();

$router->get("/kurslar", function () use ($controller): void {
    echo $controller->index();
});

$router->get("/kurslar/{id}", function (string $id) use ($controller): void {
    echo $controller->show((int) $id);
});

$router->dispatch(
    $_SERVER["REQUEST_METHOD"],
    parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH)
);`,
            outputLabel: "Natija (GET /kurslar)",
            output: "Controller repository'dan kurslarni oladi va shablon orqali HTML ro'yxatini chiqaradi. Xatolar foydalanuvchiga ko'rsatilmaydi, logga yoziladi.",
          },
          {
            type: "code",
            title: "public/health.php",
            code: `<?php
declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");

try {
    $pdo->query("SELECT 1");

    http_response_code(200);
    echo json_encode([
        "status" => "ok",
        "database" => "connected",
    ]);
} catch (Throwable $xato) {
    error_log("Health check: " . $xato->getMessage());

    http_response_code(503);
    echo json_encode([
        "status" => "error",
        "database" => "unavailable",
    ]);
}`,
            outputLabel: "Natija (baza ishlayapti)",
            output: `{"status":"ok","database":"connected"}`,
          },
          {
            type: "table",
            head: ["Deploy qadami", "Tekshirish"],
            rows: [
              ["<code>composer install --no-dev -o</code>", "Production bog'liqliklari, optimallashtirilgan autoload"],
              ["<code>php artisan migrate --force</code>", "Laravel yoki alohida migratsiya skripti"],
              ["<code>.env</code> huquqlari", "Faqat server foydalanuvchisi o'qiy olsin"],
              ["<code>storage/</code> va log papkalari", "Yozish huquqi bor, vebdan ochilmaydi"],
              ["HTTPS", "Sertifikat, <code>Secure</code> cookie, HSTS"],
              ["OPcache", "Yoqilgan va yetarli xotira ajratilgan"],
              ["Zaxira nusxa", "Baza va yuklangan fayllar uchun avtomatik backup"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Deploydan keyingi birinchi daqiqalar",
            html: "Health endpoint 200 qaytarishini, login ishlashini, formadan yozuv qo'shilishini va logda yangi xato yo'qligini tekshiring. <code>display_errors</code> o'chirilganini, <code>APP_DEBUG=false</code> ekanini tasdiqlang. Migratsiyadan oldin baza zaxirasini oling. Muammo bo'lsa, oldingi relizga qaytish rejasini oldindan tayyorlang.",
          },
        ],
        quiz: [
          {
            q: "Production muhitida display_errors qanday bo'lishi kerak?",
            options: [
              "Yoqilgan, barcha xatolar ko'rinadi",
              "Faqat adminlarga yoqilgan",
              "O'chirilgan, xatolar logga yoziladi",
              "Har bir so'rovda almashtiriladi",
            ],
            answer: 2,
            explain: "Foydalanuvchi xato tafsilotlarini ko'rmasligi kerak. Xatolar logga yoziladi, foydalanuvchiga umumiy xabar beriladi.",
          },
          {
            q: "503 Service Unavailable statusi nimani bildiradi?",
            options: [
              "Xizmat vaqtincha mavjud emas",
              "Sahifa topilmadi",
              "Ruxsat berilmadi",
              "So'rov muvaffaqiyatli",
            ],
            answer: 0,
            explain: "503 xizmat vaqtincha ishlamayotganini bildiradi, masalan baza ulanmagan yoki texnik ishlar. Health check uchun mos kod.",
          },
          {
            q: "OPcache nima vazifani bajaradi?",
            options: [
              "Rasmlarni siqadi",
              "Ma'lumotlar bazasini keshlaydi",
              "Sessiyalarni Redis'ga ko'chiradi",
              "Kompilyatsiya qilingan PHP bytecode'ni xotirada saqlaydi",
            ],
            answer: 3,
            explain: "OPcache har so'rovda PHP fayllarini qayta kompilyatsiya qilishning oldini oladi va bajarilishni tezlashtiradi.",
          },
        ],
      },
      {
        id: 49,
        title: "PHP ekotizimi va keyingi qadamlar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Kurs oxiriga yaqinlashdik. PHP 8'dagi <code>enum</code> va o'zgarmas sana obyektlari kodni aniqroq qiladi. Atrofida esa katta ekotizim bor: Laravel, Symfony, Composer, PHPUnit, Monolog. Keyingi qadam — o'rganilganlarni loyihada mustahkamlash va kod sifatini oshirish.",
          },
          {
            type: "code",
            title: "enum.php",
            code: `<?php
declare(strict_types=1);

enum Holat: string
{
    case Yangi = "yangi";
    case Faol = "faol";
    case Arxiv = "arxiv";

    public function yorliq(): string
    {
        return match ($this) {
            self::Yangi => "Yangi kurs",
            self::Faol => "Faol kurs",
            self::Arxiv => "Arxivlangan",
        };
    }
}

echo Holat::Faol->yorliq() . PHP_EOL;
echo Holat::from("arxiv")->yorliq();`,
            output: `Faol kurs
Arxivlangan`,
          },
          {
            type: "code",
            title: "sana.php",
            code: `<?php
$sana = new DateTimeImmutable(
    "2026-10-23 10:00",
    new DateTimeZone("Asia/Tashkent")
);

$keyingi = $sana->modify("+7 days");

echo $sana->format("d.m.Y H:i") . PHP_EOL;
echo $keyingi->format("d.m.Y H:i") . PHP_EOL;
echo $keyingi->diff($sana)->days;`,
            output: `23.10.2026 10:00
30.10.2026 10:00
7`,
          },
          {
            type: "table",
            head: ["Vosita", "Sohasi"],
            rows: [
              ["Laravel", "To'liq veb-freymvork: routing, ORM, auth, queue"],
              ["Symfony", "Komponentlar va yirik korporativ ilovalar"],
              ["Slim", "Yengil API uchun mikro-freymvork"],
              ["WordPress", "Kontent boshqaruv tizimi va plaginlar"],
              ["PHPUnit", "Avtomatik testlash"],
              ["Monolog", "Logging"],
              ["PHP-FPM", "Production'da PHP ishga tushirish"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Keyingi 30 kun rejasi",
            html: "1-hafta: massiv, matn va funksiyalar bo'yicha kichik CLI loyiha. 2-hafta: PDO bilan CRUD va autentifikatsiya. 3-hafta: REST API, testlar va xavfsizlik tekshiruvi. 4-hafta: Laravel'da shu loyihani qayta yozib, deploy qiling. Har kuni kod yozing, har hafta natijani GitHub'ga qo'ying va README yozing.",
          },
          {
            type: "ul",
            items: [
              "PHP 8.2+ yangiliklarini kuzatib boring: readonly klasslar, enum, typed constants.",
              "Kod uslubi uchun PSR-12 va PHP-CS-Fixer'dan foydalaning.",
              "Statik tahlil uchun PHPStan yoki Psalm'ni loyihaga qo'shing.",
              "Xavfsizlik yangilanishlarini kuzatib, <code>composer audit</code> ni muntazam bajaring.",
            ],
          },
        ],
        quiz: [
          {
            q: "enum'dagi Faol holatiga qanday murojaat qilinadi?",
            options: ["$Holat->Faol", "Holat::Faol", "Holat->Faol", "new Holat(\"faol\")"],
            answer: 1,
            explain: "Enum case'lariga Klass::Case shaklida murojaat qilinadi. Backed enum'da qiymatni Holat::from(\"faol\") bilan ham olish mumkin.",
          },
          {
            q: "DateTimeImmutable'ning asosiy afzalligi nima?",
            options: [
              "modify() asl obyektni o'zgartirmaydi",
              "U faqat sana saqlaydi",
              "U vaqt zonasini bilmaydi",
              "U ma'lumotlar bazasiga yozadi",
            ],
            answer: 0,
            explain: "Immutable obyekt o'zgarmaydi: modify() yangi obyekt qaytaradi. Bu kutilmagan yon ta'sirlarni kamaytiradi.",
          },
          {
            q: "Kursdan keyingi eng foydali qadam qaysi?",
            options: [
              "Faqat video ko'rishni davom ettirish",
              "Barcha freymvorklarni bir kunda o'rganish",
              "PHP'ni butunlay tashlab, boshqa tilga o'tish",
              "Kichik loyihani testlar va deploy bilan yakunlash",
            ],
            answer: 3,
            explain: "Amaliy loyiha bilimni mustahkamlaydi. Test, xavfsizlik va deploy tajribasi portfolioda ko'rinadigan natija beradi.",
          },
        ],
      },
      {
        id: 50,
        title: "Yakuniy imtihon",
        minutes: 15,
        isExam: true,
        blocks: [
          {
            type: "p",
            html: "PHP kursining yakuniy imtihoni. 12 ta savol butun kursni qamrab oladi: til asoslari, massiv va matnlar, fayl yuklash, sessiyalar, OOP, PDO, xavfsizlik, JSON, REST API, Laravel va testlash. Har bir savolda bitta to'g'ri javob bor.",
          },
          {
            type: "ul",
            items: [
              "<strong>12 ta savol</strong>, har biri 1 ball.",
              "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
              "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
              "O'tgandan keyin sertifikatni ko'rish va PDF qilib saqlash mumkin.",
            ],
          },
          {
            type: "table",
            head: ["Mavzu", "Savollar"],
            rows: [
              ["Til asoslari va massivlar", "1–2"],
              ["Matnlar va funksiyalar", "3"],
              ["Fayl yuklash va sessiyalar", "4–5"],
              ["OOP", "6"],
              ["PDO va baza", "7"],
              ["Xavfsizlik", "8"],
              ["JSON va REST API", "9–10"],
              ["Laravel", "11"],
              ["Testlash", "12"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Topshirishdan oldin",
            html: "Savollarni oxirigacha o'qing va kod misollarini xayolan bajaring. Har bir javobni tanlaganingizdan keyin izohga e'tibor bering. Imtihonni bir necha marta topshirish mumkin, lekin avval darslardagi 147 testni yakunlash tavsiya etiladi.",
          },
        ],
        quiz: [],
      },
    ],
    exam: {
      passScore: 9,
      total: 12,
      questions: [
        {
          q: "PHP 8'da match ifodasi hech bir variantga mos kelmasa va default bo'lmasa nima yuz beradi?",
          options: [
            "false qaytadi",
            "null qaytadi",
            "UnhandledMatchError otiladi",
            "Birinchi variant bajariladi",
          ],
          answer: 2,
          explain: "match barcha holatlarni qamrab olishi kerak. Mos variant ham, default ham bo'lmasa UnhandledMatchError yuzaga keladi.",
        },
        {
          q: "array_filter() dan keyin kalitlarni 0, 1, 2 ko'rinishida qayta indekslash uchun qaysi funksiya ishlatiladi?",
          options: ["array_values()", "array_keys()", "array_merge()", "array_sum()"],
          answer: 0,
          explain: "array_filter() kalitlarni saqlaydi. array_values() esa faqat qiymatlardan yangi, 0 dan boshlanadigan massiv yasaydi.",
        },
        {
          q: "strlen(trim(\"  Aziza  \")) natijasi nechchi?",
          options: ["7", "5", "9", "3"],
          answer: 1,
          explain: "trim() bo'sh joylarni olib tashlaydi va \"Aziza\" qoladi. U 5 ta ASCII belgidan iborat, shuning uchun strlen() 5 qaytaradi.",
        },
        {
          q: "PHP'da $_FILES massividagi tmp_name nimani saqlaydi?",
          options: [
            "Faylning asl nomini",
            "Brauzer aytgan MIME turini",
            "Fayl hajmini baytlarda",
            "Serverdagi vaqtinchalik fayl yo'lini",
          ],
          answer: 3,
          explain: "tmp_name — yuklangan faylning serverdagi vaqtinchalik joyi. Uni move_uploaded_file() bilan doimiy manzilga ko'chirish kerak.",
        },
        {
          q: "session_regenerate_id(true) nima qiladi?",
          options: [
            "Yangi sessiya ID beradi va eskisini o'chiradi",
            "Sessiya ma'lumotlarini bazaga yozadi",
            "Brauzerdagi barcha cookie'larni o'chiradi",
            "Sessiya muddatini cheksiz qiladi",
          ],
          answer: 0,
          explain: "true argument eski sessiya faylini o'chiradi. Bu login paytida sessiya fiksatsiyasini oldini oladi.",
        },
        {
          q: "final bilan e'lon qilingan klassda nima qilish mumkin emas?",
          options: [
            "Undan obyekt yaratish",
            "Uning metodlarini chaqirish",
            "Undan meros olish",
            "Unda xossa saqlash",
          ],
          answer: 2,
          explain: "final klassdan extends qilib bo'lmaydi. final metod esa bolalarda qayta yozilmaydi.",
        },
        {
          q: "PDO prepared statement'da :ism parametriga qiymat berishning to'g'ri yo'li qaysi?",
          options: [
            "$stmt->bind(\":ism\", $ism)",
            "$stmt->execute([\"ism\" => $ism])",
            "$stmt->query($ism)",
            "$pdo->execute($ism)",
          ],
          answer: 1,
          explain: "execute() massiv kalitlarini nomlangan parametrlarga bog'laydi. bindValue() ham mumkin, lekin bind() degan metod yo'q.",
        },
        {
          q: "CSRF tokenni solishtirishda vaqt bo'yicha hujumga chidamli funksiya qaysi?",
          options: ["strcmp()", "==", "md5()", "hash_equals()"],
          answer: 3,
          explain: "hash_equals() doimiy vaqtda solishtiradi va token uzunligi orqali ma'lumot sizib chiqishini kamaytiradi.",
        },
        {
          q: "json_decode('{\"ball\":91}', true)['ball'] qanday turda qaytadi?",
          options: ["integer", "string", "float", "bool"],
          answer: 0,
          explain: "Kasr qismi yo'q JSON soni PHP'da int bo'ladi. Kasrli son float, qo'shtirnoq ichidagi qiymat esa string bo'ladi.",
        },
        {
          q: "REST API'da so'ralgan resurs topilmasa qaysi status kodi qaytariladi?",
          options: ["200 OK", "201 Created", "404 Not Found", "500 Internal Server Error"],
          answer: 2,
          explain: "404 resurs mavjud emasligini bildiradi. 500 esa serverning kutilmagan xatosi uchun ishlatiladi.",
        },
        {
          q: "Laravel'da yangi migratsiyalarni bazaga qo'llash uchun qaysi buyruq ishlatiladi?",
          options: ["php artisan db:seed", "php artisan migrate", "php artisan serve", "composer install"],
          answer: 1,
          explain: "php artisan migrate bajarilmagan migratsiyalarni tartib bilan ishga tushiradi. db:seed ma'lumot to'ldiradi.",
        },
        {
          q: "PHPUnit'da setUp() metodi qachon chaqiriladi?",
          options: [
            "Faqat barcha testlar tugagach",
            "Faqat birinchi testda",
            "Har bir assertiondan keyin",
            "Har bir test metodidan oldin",
          ],
          answer: 3,
          explain: "setUp() har bir test oldidan yangi tayyorgarlik muhitini yaratadi. Tozalash uchun tearDown() ishlatiladi.",
        },
      ],
    },
  };
})();
