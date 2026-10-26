module.exports = [
  {
    id: 60,
    title: "SOLID va toza arxitektura amaliyotda",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "SOLID — beshta printsip to'plami: bitta mas'uliyat (SRP), ochiqlik-yopiqlik (OCP), Liskov almashtirish (LSP), interfeys ajratish (ISP) va bog'liqlik inversiyasi (DIP). Ular kodni \"mukammal\" qilish uchun emas, o'zgarish narxini pasaytirish uchun kerak. Amalda eng ko'p uchraydigan xato — hamma narsani bitta servisga tiqish.",
      },
      {
        type: "code",
        title: "buyurtma.php",
        code: String.raw`<?php
interface Hisoblagich
{
    public function hisobla(array $satrlar): int;
}

final class OddiyHisoblagich implements Hisoblagich
{
    public function hisobla(array $satrlar): int
    {
        return array_sum(array_map(
            fn (array $s): int => $s['narx'] * $s['soni'],
            $satrlar
        ));
    }
}

final class ChegirmaliHisoblagich implements Hisoblagich
{
    public function __construct(private int $foiz) {}

    public function hisobla(array $satrlar): int
    {
        $jami = array_sum(array_map(
            fn (array $s): int => $s['narx'] * $s['soni'],
            $satrlar
        ));
        return intdiv($jami * (100 - $this->foiz), 100);
    }
}

final class Buyurtma
{
    public function __construct(private Hisoblagich $hisoblagich) {}

    public function jami(array $satrlar): int
    {
        return $this->hisoblagich->hisobla($satrlar);
    }
}

$satrlar = [
    ['narx' => 50000, 'soni' => 2],
    ['narx' => 20000, 'soni' => 1],
];
echo (new Buyurtma(new OddiyHisoblagich()))->jami($satrlar), PHP_EOL;
echo (new Buyurtma(new ChegirmaliHisoblagich(10)))->jami($satrlar), PHP_EOL;`,
        outputLabel: "Natija",
        output: "120000\n108000",
      },
      {
        type: "p",
        html: "Bu yerda <code>Buyurtma</code> hisoblash formulasini bilmaydi; u faqat shartnomaga tayanadi. Yangi chegirma turi qo'shilsa, <code>Buyurtma</code> o'zgarmaydi — bu OCP. Testda esa <code>Hisoblagich</code> ning soxta implementatsiyasini berish mumkin — bu DIP va testning soddaligi.",
      },
      {
        type: "code",
        title: "interfeys-ajratish.php",
        code: String.raw`<?php
interface Saqlanadigan
{
    public function saqla(array $data): int;
}

interface Oqiladigan
{
    public function ol(int $id): ?array;
}

final class XotiraRepo implements Saqlanadigan, Oqiladigan
{
    private array $data = [];

    public function saqla(array $data): int
    {
        $id = count($this->data) + 1;
        $data['id'] = $id;
        $this->data[$id] = $data;
        return $id;
    }

    public function ol(int $id): ?array
    {
        return $this->data[$id] ?? null;
    }
}

$repo = new XotiraRepo();
$id = $repo->saqla(['nom' => 'PHP kursi']);
echo $id, PHP_EOL;
echo json_encode($repo->ol($id), JSON_UNESCAPED_UNICODE), PHP_EOL;`,
        outputLabel: "Natija",
        output: "1\n{\"nom\":\"PHP kursi\",\"id\":1}",
      },
      {
        type: "table",
        head: ["Printsip", "Savol", "Amaliy belgi"],
        rows: [
          ["SRP", "Klassning nechta o'zgarish sababi bor?", "Bitta vazifa, kichik metodlar"],
          ["OCP", "Yangi tur qo'shsam, eski kod o'zgaradimi?", "Interfeys + strategiya"],
          ["LSP", "Ostki tur ota o'rnida ishlaydimi?", "Istisno bilan shartnoma buzilmaydi"],
          ["ISP", "Mijoz ishlatmaydigan metodga bog'lanadimi?", "Kichik interfeyslar"],
          ["DIP", "Yuqori qatlam aniq klassga bog'liqmi?", "Konstruktorga interfeys"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Toza arxitektura — qatlamlar yo'nalishi",
        html: "Domain qatlami framework, PDO yoki HTTP haqida bilmasligi kerak. Controller tashqi dunyoni qabul qiladi, Application servis use-case'ni bajaradi, Domain biznes qoidalarini saqlaydi, Infrastructure esa PDO, Redis yoki mailni ulaydi. Bog'liqlik strelkasi doim ichkariga — Domain tomonga qaraydi.",
      },
      {
        type: "ul",
        items: [
          "Har bir klass uchun bitta o'zgarish sababini topa olmasangiz, uni bo'lish kerak.",
          "`new` ni biznes kodida kamaytiring: obyektlarni factory yoki DI beradi.",
          "Interfeysni oldindan emas, almashtirish nuqtasi paydo bo'lganda ajrating.",
          "SOLID'ni dogmaga aylantirmang: kichik skriptda ortiqcha qatlam faqat sekinlashtiradi.",
        ],
      },
    ],
    quiz: [
      {
        q: "Dependency Inversion Principle amalda nimani talab qiladi?",
        options: [
          "Yuqori qatlam aniq quyi klassga bog'lansin",
          "Barcha klasslar final bo'lsin",
          "Yuqori qatlam abstraksiyaga, quyi qatlam ham abstraksiyani amalga oshirsin",
          "Har bir klassda bitta metod bo'lsin",
        ],
        answer: 2,
        explain: "DIP bog'liqlikni abstraksiya (interfeys) orqali qurishni talab qiladi; implementatsiya tashqi qatlamda qoladi.",
      },
      {
        q: "Yangi to'lov turi qo'shilganda mavjud `Buyurtma` klassini o'zgartirmaslik qaysi printsipga mos?",
        options: ["SRP", "OCP", "LSP", "ISP"],
        answer: 1,
        explain: "Ochiqlik-yopiqlik printsipi: kengaytirishga ochiq, o'zgartirishga yopiq. Yangi strategiya qo'shiladi, eski kod tegmaydi.",
      },
      {
        q: "Interfeys juda katta bo'lib, mijoz uning ko'p metodlarini ishlatmasa qaysi printsip buziladi?",
        options: ["Interface Segregation", "Single Responsibility", "Liskov Substitution", "Open-Closed"],
        answer: 0,
        explain: "ISP mijozni faqat kerakli metodlarga bog'lashni talab qiladi; katta interfeysni kichiklariga bo'lish kerak.",
      },
    ],
  },
  {
    id: 61,
    title: "Factory va Builder: obyekt yaratishni boshqarish",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Obyekt yaratish mantiqi tarqalsa, kodning turli joylarida bir xil <code>new</code> va shartlar paydo bo'ladi. <b>Factory</b> qaysi implementatsiyani tanlashni markazlashtiradi. <b>Builder</b> esa ko'p parametrli obyektni qadam-baqadam, o'qiladigan tarzda yig'adi.",
      },
      {
        type: "code",
        title: "factory.php",
        code: String.raw`<?php
interface Transport
{
    public function nomi(): string;
    public function yetkazish(string $yuk): string;
}

final class YukMashina implements Transport
{
    public function nomi(): string { return 'Yuk mashinasi'; }
    public function yetkazish(string $yuk): string { return "$yuk yo'lda"; }
}

final class Pochta implements Transport
{
    public function nomi(): string { return 'Pochta'; }
    public function yetkazish(string $yuk): string { return "$yuk konvertga solindi"; }
}

enum TransportTuri: string
{
    case Yuk = 'yuk';
    case Pochta = 'pochta';
}

final class TransportFactory
{
    public static function yarat(TransportTuri $turi): Transport
    {
        return match ($turi) {
            TransportTuri::Yuk => new YukMashina(),
            TransportTuri::Pochta => new Pochta(),
        };
    }
}

$transport = TransportFactory::yarat(TransportTuri::Yuk);
echo $transport->nomi(), ': ', $transport->yetkazish('12 kg kitob'), PHP_EOL;`,
        outputLabel: "Natija",
        output: "Yuk mashinasi: 12 kg kitob yo'lda",
      },
      {
        type: "p",
        html: "Factory'ning kuchi — chaqiruvchi kod enum yoki konfiguratsiya qiymatini biladi, aniq klassni emas. Yangi transport qo'shilganda faqat factory va enum kengayadi. Agar obyekt yaratish uchun 5–6 ixtiyoriy parametr bo'lsa, factory o'rniga Builder qulayroq.",
      },
      {
        type: "code",
        title: "builder.php",
        code: String.raw`<?php
final class SorovBuilder
{
    private array $shartlar = [];
    private ?int $limit = null;

    private function __construct() {}

    public static function boshlash(): self
    {
        return new self();
    }

    public function where(string $ustun, string|int $qiymat): self
    {
        $nusxa = clone $this;
        $nusxa->shartlar[] = $ustun . ' = ' . var_export($qiymat, true);
        return $nusxa;
    }

    public function limit(int $limit): self
    {
        $nusxa = clone $this;
        $nusxa->limit = $limit;
        return $nusxa;
    }

    public function sql(): string
    {
        $sql = 'SELECT * FROM kitoblar';
        if ($this->shartlar !== []) {
            $sql .= ' WHERE ' . implode(' AND ', $this->shartlar);
        }
        return $this->limit === null ? $sql : $sql . ' LIMIT ' . $this->limit;
    }
}

$asos = SorovBuilder::boshlash()->where('holat', 'faol');
$sorov = $asos->where('yil', 2024)->limit(10);

echo $sorov->sql(), PHP_EOL;
echo $asos->sql(), PHP_EOL;`,
        outputLabel: "Natija",
        output: "SELECT * FROM kitoblar WHERE holat = 'faol' AND yil = 2024 LIMIT 10\nSELECT * FROM kitoblar WHERE holat = 'faol'",
      },
      {
        type: "table",
        head: ["Pattern", "Muammo", "Kalit g'oya"],
        rows: [
          ["Simple Factory", "Qaysi klassni tanlash?", "Bitta funksiya/klass markazlashtiradi"],
          ["Factory Method", "Ostki klass yaratishni belgilaydi", "Abstrakt metod"],
          ["Abstract Factory", "O'zaro bog'liq obyektlar oilasi", "Bir nechta factory metodlari"],
          ["Builder", "Ko'p parametr, murakkab yig'ish", "Zanjirli qadamlar"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Builder'ni immutable qiling",
        html: "Har bir qadam <code>clone</code> qilib yangi obyekt qaytarsa, bitta asosiy builder'dan turli so'rovlar yasash xavfsiz bo'ladi. Aks holda bir joyda <code>limit(10)</code> qo'shilishi boshqa joydagi so'rovga ham ta'sir qilishi mumkin. Kichik loyihada esa oddiy massiv konfiguratsiya yetarli.",
      },
      {
        type: "ul",
        items: [
          "Enum bilan factory tanlovini to'liq qamrab oling; `match` yangi case'da xato beradi.",
          "Factory ichida validatsiya qilmang — u obyekt yaratishga mas'ul.",
          "Builder metodlari oxirida `build()` yoki `sql()` kabi yakunlovchi metod bo'lsin.",
          "`var_export()` faqat demo uchun; haqiqiy SQL'da prepared statement ishlating.",
        ],
      },
    ],
    quiz: [
      {
        q: "Factory pattern qaysi muammoni hal qiladi?",
        options: [
          "SQL so'rovlarni keshlashni",
          "Obyekt yaratish mantiqini bir joyda markazlashtirishni",
          "Fayllarni siqishni",
          "HTTP statusini tanlashni",
        ],
        answer: 1,
        explain: "Factory qaysi klass yaratilishini yashiradi; chaqiruvchi faqat interfeys yoki enum bilan ishlaydi.",
      },
      {
        q: "Builder pattern qachon ayniqsa foydali?",
        options: [
          "Obyekt bitta oddiy parametr bilan yaratilsa",
          "Faqat statik metodlar bo'lsa",
          "Ko'p ixtiyoriy parametr va murakkab yig'ish bo'lsa",
          "Faqat massiv qaytarish kerak bo'lsa",
        ],
        answer: 2,
        explain: "Builder ko'p ixtiyoriy sozlamalarni o'qiladigan zanjirga aylantiradi va noto'g'ri kombinatsiyalarni kamaytiradi.",
      },
      {
        q: "Immutable Builder'da har bir qadam nima qaytaradi?",
        options: ["O'zini o'zgartirib, `$this` ni", "`null`", "Yangi nusxani", "Statik massivni"],
        answer: 2,
        explain: "Har bir qadam `clone` qilingan yangi obyekt qaytaradi; asosiy builder o'zgarishsiz qoladi.",
      },
    ],
  },
  {
    id: 62,
    title: "Strategy va Observer: xatti-harakatni boshqarish",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<b>Strategy</b> — bir vazifaning bir nechta algoritmini almashtirish. <b>Observer</b> — hodisa yuz berganda bir nechta tinglovchini xabardor qilish. Ikkalasi ham katta <code>if/switch</code> bloklarini va bir-biriga bog'langan klasslarni yo'q qiladi. Laravel'dagi event/listener tizimi Observer g'oyasining amaliy ko'rinishi.",
      },
      {
        type: "code",
        title: "strategy.php",
        code: String.raw`<?php
interface Chegirma
{
    public function nomi(): string;
    public function hisobla(int $summa): int;
}

final class FoizChegirma implements Chegirma
{
    public function __construct(private int $foiz) {}

    public function nomi(): string { return $this->foiz . '% chegirma'; }

    public function hisobla(int $summa): int
    {
        return intdiv($summa * (100 - $this->foiz), 100);
    }
}

final class TalabaChegirma implements Chegirma
{
    public function nomi(): string { return 'Talaba chegirmasi'; }

    public function hisobla(int $summa): int
    {
        return max(0, $summa - 15000);
    }
}

final class Savat
{
    public function __construct(private Chegirma $chegirma) {}

    public function jami(int $summa): string
    {
        return $this->chegirma->nomi() . ': ' . $this->chegirma->hisobla($summa);
    }
}

echo (new Savat(new FoizChegirma(10)))->jami(100000), PHP_EOL;
echo (new Savat(new TalabaChegirma()))->jami(100000), PHP_EOL;`,
        outputLabel: "Natija",
        output: "10% chegirma: 90000\nTalaba chegirmasi: 85000",
      },
      {
        type: "p",
        html: "Strategy'ni konteyner orqali tanlash mumkin: foydalanuvchi turi, konfiguratsiya yoki promo-kod. Muhim jihat — barcha strategiyalar bir xil shartnomani bajaradi, shuning uchun ularni almashtirish xavfsiz. Endi hodisalar oqimini ko'ramiz.",
      },
      {
        type: "code",
        title: "observer.php",
        code: String.raw`<?php
final class HodisaDispatcher
{
    private array $tinglovchilar = [];

    public function on(string $nom, callable $callback): void
    {
        $this->tinglovchilar[$nom][] = $callback;
    }

    public function emit(string $nom, mixed $data): void
    {
        foreach ($this->tinglovchilar[$nom] ?? [] as $callback) {
            $callback($data);
        }
    }
}

$dispatcher = new HodisaDispatcher();

$dispatcher->on('buyurtma.yaratildi', function (array $b): void {
    echo "Email: buyurtma #{$b['id']}\n";
});
$dispatcher->on('buyurtma.yaratildi', function (array $b): void {
    echo 'Ombor: ', $b['summa'], " so'mlik zaxira band\n";
});

$dispatcher->emit('buyurtma.yaratildi', ['id' => 7, 'summa' => 120000]);
$dispatcher->emit('buyurtma.yaratildi', ['id' => 8, 'summa' => 45000]);`,
        outputLabel: "Natija",
        output: "Email: buyurtma #7\nOmbor: 120000 so'mlik zaxira band\nEmail: buyurtma #8\nOmbor: 45000 so'mlik zaxira band",
      },
      {
        type: "table",
        head: ["Pattern", "Bog'lanish", "Qachon ishlatiladi"],
        rows: [
          ["Strategy", "Konteks + interfeys", "Algoritmni almashtirish"],
          ["Observer", "Subject + kuzatuvchilar", "Hodisa haqida xabar berish"],
          ["State", "Holat obyektlari", "Holatga qarab xatti-harakat"],
          ["Command", "Buyruq obyekti", "Amalni navbatga qo'yish"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Observer'dan keyin xatoni boshqaring",
        html: "Bitta listener xato otsa, butun emit to'xtab qolishi mumkin. Laravel'da listener'lar navbatga qo'yilishi yoki alohida job bo'lishi mumkin. Muhim yon effektlar (to'lov, email) uchun idempotentlik va retry strategiyasini oldindan o'ylang.",
      },
      {
        type: "ul",
        items: [
          "Strategy'ni `match` bilan tanlang, lekin `match` ichida biznes mantiq yozmang.",
          "Listener'larni nom bilan ro'yxatga oling; massiv kaliti bo'sh bo'lmasin.",
          "Hodisa nomlarini o'tgan zamonda bering: `buyurtma.yaratildi`.",
          "Kuzatuvchilar soni oshsa, ularni navbatga o'tkazing.",
        ],
      },
    ],
    quiz: [
      {
        q: "Strategy pattern nimani almashtirish imkonini beradi?",
        options: ["Ma'lumotlar bazasini", "Algoritmni", "HTTP klientni", "Fayl tizimini"],
        answer: 1,
        explain: "Bir xil interfeys ostida turli algoritmlar (chegirma, saralash, to'lov) almashtiriladi.",
      },
      {
        q: "Observer pattern'da `emit()` odatda nima qiladi?",
        options: [
          "Barcha tinglovchilarni chaqiradi",
          "Yangi ma'lumotlar bazasini yaratadi",
          "Faylni o'chiradi",
          "PHP versiyasini tekshiradi",
        ],
        answer: 0,
        explain: "`emit()` hodisani e'lon qiladi va ro'yxatdagi tinglovchilarni ma'lumot bilan chaqiradi.",
      },
      {
        q: "Bitta listener xato otishi butun tizimga ta'sir qilmasligi uchun nima qilish kerak?",
        options: [
          "Barcha listenerlarni bitta funksiyaga yig'ish",
          "Xatoni butunlay yashirish",
          "Listenerlarni navbatga qo'yish yoki xatoni alohida boshqarish",
          "Observer'ni ishlatmaslik",
        ],
        answer: 2,
        explain: "Navbat, alohida job yoki xatoni izolyatsiya qilish qolgan listenerlar va asosiy oqimni himoya qiladi.",
      },
    ],
  },
  {
    id: 63,
    title: "Repository, DTO va Unit of Work",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Qatlamlar orasida ma'lumot uzatish uchun <b>DTO</b> (Data Transfer Object) ishlatiladi: u massiv yoki Eloquent modelini tashqi qatlamga to'g'ridan-to'g'ri chiqarmaydi. <b>Repository</b> ma'lumot saqlashni abstraksiyalaydi, <b>Unit of Work</b> esa bir biznes amaldagi o'zgarishlarni bitta tranzaksiyada yakunlaydi.",
      },
      {
        type: "code",
        title: "dto.php",
        code: String.raw`<?php
final readonly class KitobDTO
{
    public function __construct(
        public int $id,
        public string $nom,
        public int $narx,
        public array $teglar = [],
    ) {}

    public static function fromRow(array $row): self
    {
        return new self(
            (int) $row['id'],
            (string) $row['nom'],
            (int) $row['narx'],
            array_map('strval', $row['teglar'] ?? []),
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'narx' => $this->narx,
            'teglar' => $this->teglar,
        ];
    }
}

$dto = KitobDTO::fromRow([
    'id' => '7',
    'nom' => 'PHP 8 chuqur',
    'narx' => '120000',
    'teglar' => ['php', 'oop'],
]);
echo json_encode($dto->toArray(), JSON_UNESCAPED_UNICODE), PHP_EOL;
echo get_class($dto), PHP_EOL;`,
        outputLabel: "Natija",
        output: "{\"id\":7,\"nom\":\"PHP 8 chuqur\",\"narx\":120000,\"teglar\":[\"php\",\"oop\"]}\nKitobDTO",
      },
      {
        type: "p",
        html: "DTO konstruktorda tiplarni majburiy qiladi, `fromRow()` esa tashqi manba (PDO, JSON, HTTP) bilan chegarani tozalaydi. Repository interfeysi esa biznes qatlamga SQL yoki ORM tafsilotlarini ko'rsatmaydi. Testda xotira implementatsiyasi yetarli bo'ladi.",
      },
      {
        type: "code",
        title: "unit-of-work.php",
        code: String.raw`<?php
interface KitobRepo
{
    public function qosh(KitobDTO $kitob): void;
    public function hammasi(): array;
}

final class XotiraKitobRepo implements KitobRepo
{
    private array $kitoblar = [];

    public function qosh(KitobDTO $kitob): void
    {
        $this->kitoblar[] = $kitob;
    }

    public function hammasi(): array
    {
        return $this->kitoblar;
    }
}

final class UnitOfWork
{
    private array $yangi = [];

    public function royxatdanOtish(KitobDTO $kitob): void
    {
        $this->yangi[] = $kitob;
    }

    public function commit(KitobRepo $repo): int
    {
        $soni = 0;
        foreach ($this->yangi as $kitob) {
            $repo->qosh($kitob);
            $soni++;
        }
        $this->yangi = [];
        return $soni;
    }
}

$uow = new UnitOfWork();
$uow->royxatdanOtish(new KitobDTO(1, 'PHP asoslari', 90000));
$uow->royxatdanOtish(new KitobDTO(2, 'Laravel', 120000));

$repo = new XotiraKitobRepo();
echo 'Saqlangan: ', $uow->commit($repo), PHP_EOL;
echo count($repo->hammasi()), ' ta kitob', PHP_EOL;
echo $repo->hammasi()[1]->nom, PHP_EOL;`,
        outputLabel: "Natija",
        output: "Saqlangan: 2\n2 ta kitob\nLaravel",
      },
      {
        type: "table",
        head: ["Qatlam", "Biladi", "Bilmasligi kerak"],
        rows: [
          ["Controller", "HTTP, validatsiya", "SQL, ORM tafsilotlari"],
          ["Application service", "Use-case tartibi", "HTTP so'rovi"],
          ["Domain", "Biznes qoidalari", "PDO, framework"],
          ["Repository", "Saqlash mexanizmi", "HTTP javobi"],
          ["DTO", "Ma'lumot shakli", "Biznes qarorlari"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Repository har jadval uchun shart emas",
        html: "Kichik CRUD ilovada Eloquent modelini bevosita ishlatish mumkin. Repository murakkab so'rovlar, bir nechta manba yoki domain izolyatsiyasi kerak bo'lganda foyda beradi. Ortiqcha abstraksiya ham xatolarni ko'paytiradi: har bir qatlam aniq sabab bilan qo'shilsin.",
      },
      {
        type: "ul",
        items: [
          "Repository metodlari biznes tilida nomlansin: `faolKitoblar()`, `topish()`.",
          "DTO'ni HTTP resursidan ajrating: javob formati o'zgarishi domain'ga tegmasin.",
          "Unit of Work tranzaksiya chegarasini aniq belgilaydi; commit'dan keyin event yuboring.",
          "Katta ro'yxatni DTO massiviga yig'mang — generator yoki pagination ishlating.",
        ],
      },
    ],
    quiz: [
      {
        q: "DTO'ning asosiy vazifasi nima?",
        options: [
          "Ma'lumotni qatlamlar orasida aniq shaklda uzatish",
          "SQL so'rov yozish",
          "HTTP serverni ishga tushirish",
          "Faylni keshlash",
        ],
        answer: 0,
        explain: "DTO ma'lumot shaklini belgilaydi va massiv yoki modelning tasodifiy tuzilishiga bog'liqlikni kamaytiradi.",
      },
      {
        q: "Repository qatlami nimani yashiradi?",
        options: ["HTTP sarlavhalarini", "Ma'lumot saqlash mexanizmini", "PHP versiyasini", "CSS uslublarini"],
        answer: 1,
        explain: "Repository interfeysi biznes kodni PDO, Eloquent yoki tashqi API tafsilotlaridan ajratadi.",
      },
      {
        q: "Unit of Work qachon o'zgarishlarni yakunlaydi?",
        options: [
          "Har bir obyekt yaratilganda darhol",
          "Commit chaqirilganda",
          "Faqat sahifa yopilganda",
          "Har bir SQL `SELECT` dan keyin",
        ],
        answer: 1,
        explain: "UoW o'zgarishlarni to'plab, `commit()` da bitta tranzaksiya sifatida qo'llaydi.",
      },
    ],
  },
  {
    id: 64,
    title: "DDD-lite: Value Object va domain events",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Domain-Driven Design'ning to'liq apparati har loyihaga kerak emas, lekin ba'zi g'oyalari juda foydali. <b>Value Object</b> — qiymati bilan tenglashtiriladigan, o'zgarmas obyekt: pul, email, telefon, davr. <b>Domain event</b> esa biznesda sodir bo'lgan muhim faktni ifodalaydi.",
      },
      {
        type: "code",
        title: "pul.php",
        code: String.raw`<?php
final readonly class Pul
{
    public function __construct(
        public int $tiyin,
        public string $valyuta = 'UZS',
    ) {
        if ($tiyin < 0) {
            throw new InvalidArgumentException('Summa manfiy bo\'lmaydi');
        }
    }

    public function qosh(self $boshqa): self
    {
        if ($this->valyuta !== $boshqa->valyuta) {
            throw new DomainException('Valyutalar mos emas');
        }
        return new self($this->tiyin + $boshqa->tiyin, $this->valyuta);
    }

    public function kopaytir(int $n): self
    {
        return new self($this->tiyin * $n, $this->valyuta);
    }

    public function format(): string
    {
        return number_format($this->tiyin / 100, 2, ',', ' ') . ' ' . $this->valyuta;
    }
}

$narx = new Pul(120000);
$jami = $narx->kopaytir(2)->qosh(new Pul(10000));
echo $jami->format(), PHP_EOL;

try {
    $narx->qosh(new Pul(100, 'USD'));
} catch (DomainException $e) {
    echo $e->getMessage(), PHP_EOL;
}`,
        outputLabel: "Natija",
        output: "2 500,00 UZS\nValyutalar mos emas",
      },
      {
        type: "p",
        html: "`Pul` oddiy int emas: u manfiy summani taqiqlaydi, valyutani tekshiradi va formatlashni o'zida saqlaydi. Value Object'lar immutably bo'lgani uchun ularni xavfsiz ulashish mumkin. Tenglikni esa <code>equals()</code> metodi yoki barcha maydonlarni solishtirish bilan aniqlang.",
      },
      {
        type: "code",
        title: "domain-event.php",
        code: String.raw`<?php
final readonly class BuyurtmaTasdiqlandi
{
    public function __construct(
        public int $buyurtmaId,
        public int $summa,
    ) {}
}

final class Buyurtma
{
    private array $events = [];

    public function __construct(
        private int $id,
        private int $summa,
    ) {}

    public function tasdiqla(): void
    {
        // ... holat tekshiruvi
        $this->events[] = new BuyurtmaTasdiqlandi($this->id, $this->summa);
    }

    public function events(): array
    {
        $events = $this->events;
        $this->events = [];
        return $events;
    }
}

$buyurtma = new Buyurtma(42, 240000);
$buyurtma->tasdiqla();
$buyurtma->tasdiqla();

foreach ($buyurtma->events() as $event) {
    echo json_encode(get_object_vars($event), JSON_UNESCAPED_UNICODE), PHP_EOL;
}
echo count($buyurtma->events()), " ta yangi event\n";`,
        outputLabel: "Natija",
        output: "{\"buyurtmaId\":42,\"summa\":240000}\n{\"buyurtmaId\":42,\"summa\":240000}\n0 ta yangi event",
      },
      {
        type: "table",
        head: ["Tushuncha", "Tenglik mezoni", "Misol"],
        rows: [
          ["Entity", "ID bo'yicha", "Buyurtma, Foydalanuvchi"],
          ["Value Object", "Barcha maydonlar bo'yicha", "Pul, Email, Davr"],
          ["Domain event", "Fakt nomi + payload", "BuyurtmaTasdiqlandi"],
          ["Aggregate", "Ildiz entity chegarasi", "Buyurtma + satrlari"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Event'larni commit'dan keyin yuboring",
        html: "Agar tranzaksiya rollback bo'lsa, yuborilgan event yolg'on faktni bildirib qolishi mumkin. Event'larni aggregate ichida to'plang, tranzaksiya muvaffaqiyatli yakunlangach dispatch qiling. Tashqi tizimlar uchun outbox pattern ishonchliroq.",
      },
      {
        type: "ul",
        items: [
          "Value Object konstruktori o'z invariantlarini o'zi tekshirsin.",
          "Pulni float bilan saqlamang: tiyin yoki minor unit butun son ishlating.",
          "Event nomi biznes tilida bo'lsin, texnik `updated` emas.",
          "Aggregate'ni katta qilmang: bitta tranzaksiya chegarasi bo'lsin.",
        ],
      },
    ],
    quiz: [
      {
        q: "Value Object qanday tenglashtiriladi?",
        options: ["Faqat ID bo'yicha", "Barcha maydonlari bo'yicha", "Xotira manzili bo'yicha", "Tasodifiy kalit bo'yicha"],
        answer: 1,
        explain: "Value Object'da identifikatsiya yo'q; qiymatlari bir xil bo'lsa, obyektlar teng hisoblanadi.",
      },
      {
        q: "Pulni qaysi turda saqlash xatolarni kamaytiradi?",
        options: ["Float", "String", "Butun son (tiyin)", "Boolean"],
        answer: 2,
        explain: "Float yaxlitlash xatolarini beradi; pulni tiyin kabi eng kichik birlikda butun son saqlash aniqroq.",
      },
      {
        q: "Domain event'larni qachon tashqi tizimga yuborish xavfsizroq?",
        options: [
          "Entity yaratilishidan oldin",
          "Tranzaksiya muvaffaqiyatli commit bo'lgach",
          "Har bir `new` da darhol",
          "Faqat sahifa yopilganda",
        ],
        answer: 1,
        explain: "Commit'dan keyin yuborish rollback bo'lgan o'zgarish haqida yolg'on xabar berilishini oldini oladi.",
      },
    ],
  },
  {
    id: 65,
    title: "PSR standartlari va kod uslubi",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "PHP-FIG tomonidan qabul qilingan <b>PSR</b> standartlari kodning o'qilishi va paketlar mosligini ta'minlaydi. <code>PSR-1</code> asosiy kod uslubi, <code>PSR-4</code> avtomatik yuklash, <code>PSR-12</code> esa kengaytirilgan uslub qoidalari. Jamoada standart bo'lmasa, har bir pull request uslub bahsiga aylanadi.",
      },
      {
        type: "code",
        title: "psr4.php",
        code: String.raw`<?php
$fqcn = 'App\\Http\\Controllers\\KitobController';
$prefix = 'App\\';
$baseDir = 'src/';

$relative = substr($fqcn, strlen($prefix));
$path = $baseDir . str_replace('\\', '/', $relative) . '.php';

echo $path, PHP_EOL;
echo str_contains($path, '..') ? "Xavfli yo'l\n" : "Xavfsiz yo'l\n";
echo basename($path), PHP_EOL;`,
        outputLabel: "Natija",
        output: "src/Http/Controllers/KitobController.php\nXavfsiz yo'l\nKitobController.php",
      },
      {
        type: "p",
        html: "PSR-4 da namespace prefiksi katalog prefiksiga bog'lanadi: <code>App\\</code> -> <code>src/</code>. Klass nomi fayl nomiga aynan mos bo'lishi kerak, aks holda Composer autoload topa olmaydi. Linux serverlarda katta-kichik harf farqi ayniqsa muhim.",
      },
      {
        type: "code",
        title: "uslub.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace App\Matn;

final class Slugger
{
    public function yasa(string $matn): string
    {
        $matn = mb_strtolower(trim($matn));
        $matn = preg_replace('/[^a-z0-9]+/u', '-', $matn);
        return trim($matn, '-');
    }
}

echo (new Slugger())->yasa('PHP 8.3 yangiliklari!'), PHP_EOL;

try {
    strlen(123);
} catch (TypeError $e) {
    echo "strict: TypeError\n";
}`,
        outputLabel: "Natija",
        output: "php-8-3-yangiliklari\nstrict: TypeError",
      },
      {
        type: "table",
        head: ["PSR", "Mavzu", "Amaliy talab"],
        rows: [
          ["PSR-1", "Asosiy kod standarti", "Fayl nomi, klass nomi, side effect yo'q"],
          ["PSR-4", "Autoload", "Namespace prefiksi -> katalog"],
          ["PSR-12", "Kengaytirilgan uslub", "4 space, qavslar, import tartibi"],
          ["PSR-3", "Logger", "Log interfeysi va darajalari"],
          ["PSR-7", "HTTP message", "Request/Response obyektlari"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Uslubni avtomatlashtiring",
        html: "Qo'lda formatlash o'rniga <code>PHP-CS-Fixer</code> yoki <code>PHP_CodeSniffer</code> ishlatilsin. CI'da <code>--dry-run</code> bilan tekshirish uslub buzilishini merge'dan oldin topadi. Qoidalar <code>.php-cs-fixer.php</code> da saqlanadi va jamoa uchun yagona manba bo'ladi.",
      },
      {
        type: "ul",
        items: [
          "Bitta faylda bitta klass (yoki bir nechta bog'liq yordamchi) bo'lsin.",
          "Fayl oxirida `?>` yopilish tegini qo'ymang; ortiqcha bo'sh joy chiqishni buzadi.",
          "`declare(strict_types=1);` fayl boshida tursin.",
          "Composer'dagi `autoload` va `autoload-dev` bo'limlarini alohida saqlang.",
        ],
      },
    ],
    quiz: [
      {
        q: "PSR-4 nimani standartlashtiradi?",
        options: ["Log formatini", "Namespace va fayl yo'li mosligini", "HTTP statuslarini", "SQL indekslarini"],
        answer: 1,
        explain: "PSR-4 namespace prefiksini katalogga bog'laydi va Composer autoload shu qoidaga tayanadi.",
      },
      {
        q: "`declare(strict_types=1);` qanday ta'sir qiladi?",
        options: [
          "Barcha funksiyalarni tezlashtiradi",
          "Tur bo'yicha yashirin konversiyani qat'iylashtiradi",
          "Faqat int turlarini qabul qiladi",
          "Composer'ni o'chiradi",
        ],
        answer: 1,
        explain: "Strict rejimda noto'g'ri tur avtomatik konversiya qilinmaydi; TypeError otiladi.",
      },
      {
        q: "PSR-12 bo'yicha chekinish uchun odatda nima ishlatiladi?",
        options: ["2 space", "Tab", "4 space", "Chekinish shart emas"],
        answer: 2,
        explain: "PSR-12 to'rt probel bilan chekinishni tavsiya qiladi; bu kodni barcha muharrirlarda bir xil ko'rsatadi.",
      },
    ],
  },
  {
    id: 66,
    title: "Composer chuqur: versiyalar, lock va platforma",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Composer bog'liqliklarni boshqaradi, lekin uning versiya semantikasi va <code>lock</code> fayli jamoaviy ishda hal qiluvchi. <code>composer.lock</code> o'rnatilgan aniq versiyalarni qulflaydi: CI va production aynan shu fayldan o'rnatishi kerak. <code>composer update</code> esa yangi mos versiyalarni tanlaydi.",
      },
      {
        type: "code",
        title: "semver.php",
        code: String.raw`<?php
$talab = '^8.2';
$versiyalar = ['8.1.29', '8.2.0', '8.2.14', '8.3.2', '9.0.0'];

foreach ($versiyalar as $versiya) {
    $mos = version_compare($versiya, '8.2.0', '>=')
        && version_compare($versiya, '9.0.0', '<');
    printf("%s: %s\n", $versiya, $mos ? 'mos' : 'mos emas');
}`,
        outputLabel: "Natija",
        output: "8.1.29: mos emas\n8.2.0: mos\n8.2.14: mos\n8.3.2: mos\n9.0.0: mos emas",
      },
      {
        type: "p",
        html: "<code>^8.2</code> 8.2.0 dan 9.0.0 gacha (9.0.0 kirmaydi), <code>~8.2.3</code> esa 8.2.x ichida qoladi, lekin 8.3.0 ga chiqmaydi. Aniq versiya (<code>8.2.14</code>) eng qat'iy variant. Kutubxona uchun keng oraliq, ilova uchun lock fayl muhim.",
      },
      {
        type: "code",
        title: "composer-json.php",
        code: String.raw`<?php
$json = json_decode(<<<'JSON'
{
  "require": {
    "php": "^8.2",
    "monolog/monolog": "^3.5"
  },
  "autoload": {
    "psr-4": {
      "App\\": "src/"
    }
  }
}
JSON, true, 512, JSON_THROW_ON_ERROR);

foreach ($json['require'] as $paket => $versiya) {
    echo $paket, ' ', $versiya, PHP_EOL;
}

$prefiks = array_key_first($json['autoload']['psr-4']);
echo 'PSR-4: ', $prefiks, ' => ', $json['autoload']['psr-4'][$prefiks], PHP_EOL;
echo 'Paketlar soni: ', count($json['require']), PHP_EOL;`,
        outputLabel: "Natija",
        output: String.raw`php ^8.2
monolog/monolog ^3.5
PSR-4: App\ => src/
Paketlar soni: 2`,
      },
      {
        type: "table",
        head: ["Buyruq / fayl", "Vazifasi", "Production"],
        rows: [
          ["composer install", "Lock bo'yicha o'rnatadi", "Majburiy"],
          ["composer update", "Versiyalarni qayta tanlaydi", "Faqat rejalashtirilgan"],
          ["composer require", "Yangi paket qo'shadi", "Dev muhitida"],
          ["composer audit", "Zaifliklarni tekshiradi", "CI'da"],
          ["--no-dev", "Dev paketlarsiz o'rnatadi", "Production'da"],
          ["platform.php", "Platforma versiyasini qulflaydi", "CI mosligi uchun"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Lock faylni commit qiling",
        html: "Ilovada <code>composer.lock</code> git'ga qo'shiladi; kutubxonada esa odatda yo'q. CI'da <code>composer install --no-interaction --prefer-dist</code> ishlating. <code>composer update</code> ni productionda tasodifan chaqirmang: u kutilmagan yangi versiyalarni olib kelishi mumkin.",
      },
      {
        type: "ul",
        items: [
          "Platform talabini `composer.json` da `php` va kengaytmalar bilan yozing.",
          "`composer why-not paket versiya` konflikt sababini topadi.",
          "`autoload-dev` faqat test va dev klasslar uchun.",
          "Xususiy repozitoriylar uchun autentifikatsiyani `auth.json` da, env orqali bering.",
        ],
      },
    ],
    quiz: [
      {
        q: "`^8.2` versiya chegarasi qaysi oraliqni anglatadi?",
        options: ["8.2.0 dan 9.0.0 gacha, 9.0.0 kirmaydi", "Faqat 8.2.0", "8.0.0 dan 8.2.0 gacha", "Barcha 8.x va 9.x"],
        answer: 0,
        explain: "Caret yuqori darajani qulflaydi: `^8.2` 8.2.0 dan boshlanadi va 9.0.0 dan oldin tugaydi.",
      },
      {
        q: "Production'da qaysi buyruq ishlatilishi kerak?",
        options: ["composer update", "composer install --no-dev", "composer require", "composer init"],
        answer: 1,
        explain: "`install --no-dev` lock fayldagi aniq versiyalarni o'rnatadi va dev bog'liqliklarni chiqarib tashlaydi.",
      },
      {
        q: "`composer.lock` ning vazifasi nima?",
        options: [
          "Paket nomlarini o'zgartirish",
          "Aniq o'rnatilgan versiyalarni qulflash",
          "PHP kodini formatlash",
          "Testlarni ishga tushirish",
        ],
        answer: 1,
        explain: "Lock fayl barcha paketlarning aniq versiyalarini saqlaydi; jamoa va server bir xil muhit oladi.",
      },
    ],
  },
  {
    id: 67,
    title: "O'z Composer paketingizni yaratish",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Qayta ishlatiladigan kodni paketga ajratish jamoada va ochiq ekotizimda foydali. Paketda aniq namespace, PSR-4 autoload, versiya, litsenziya va testlar bo'ladi. Paket nomi <code>vendor/package</code> formatida, versiyalari esa SemVer qoidasiga bo'ysunadi.",
      },
      {
        type: "code",
        title: "src/Slugger.php",
        code: String.raw`<?php
declare(strict_types=1);

namespace Noldan\Matn;

final class Slugger
{
    public function __construct(
        private string $ajratgich = '-',
    ) {}

    public function yasa(string $matn): string
    {
        $matn = mb_strtolower(trim($matn));
        $slug = preg_replace('/[^a-z0-9]+/u', '-', $matn);
        return str_replace('-', $this->ajratgich, trim($slug, '-'));
    }
}

echo (new Slugger('_'))->yasa('PHP 8 yangiliklari'), PHP_EOL;
echo (new Slugger())->yasa('  Laravel   API  '), PHP_EOL;`,
        outputLabel: "Natija",
        output: "php_8_yangiliklari\nlaravel-api",
      },
      {
        type: "p",
        html: "Paketning <code>composer.json</code> faylida <code>autoload.psr-4</code> prefiksi <code>Noldan\\\\Matn\\\\</code> va katalog <code>src/</code> ko'rsatiladi. Ishlab chiqishda testlar <code>autoload-dev</code> orqali yuklanadi. Paketni Packagist'ga joylash uchun git repo, teg va <code>composer.json</code> metama'lumotlari yetarli.",
      },
      {
        type: "code",
        title: "autoload.php",
        code: String.raw`<?php
$composer = [
    'name' => 'noldan/slugger',
    'type' => 'library',
    'license' => 'MIT',
    'autoload' => [
        'psr-4' => [
            'Noldan\\Matn\\' => 'src/',
        ],
    ],
];

echo $composer['name'], PHP_EOL;
echo json_encode(
    $composer['autoload'],
    JSON_UNESCAPED_SLASHES
), PHP_EOL;

$klass = 'Noldan\\Matn\\Slugger';
$prefiks = array_key_first($composer['autoload']['psr-4']);
$nisbiy = str_replace('\\', '/', substr($klass, strlen($prefiks)));
echo 'Fayl: ', $composer['autoload']['psr-4'][$prefiks], $nisbiy, '.php', PHP_EOL;`,
        outputLabel: "Natija",
        output: String.raw`noldan/slugger
{"psr-4":{"Noldan\\Matn\\":"src/"}}
Fayl: src/Slugger.php`,
      },
      {
        type: "table",
        head: ["Maydon", "Misol", "Izoh"],
        rows: [
          ["name", "noldan/slugger", "Vendor va paket nomi"],
          ["type", "library", "Kutubxona turi"],
          ["license", "MIT", "Ochiq litsenziya"],
          ["require", "php: ^8.2", "Minimal platforma"],
          ["autoload.psr-4", "Noldan\\Matn\\ => src/", "Klass yuklash"],
          ["require-dev", "phpunit/phpunit", "Faqat ishlab chiqishda"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "SemVer va buzilishlar",
        html: "Public API o'zgarmasa — patch (1.0.1), yangi funksiya qo'shilsa — minor (1.1.0), mos kelmaydigan o'zgarish bo'lsa — major (2.0.0). Paketga <code>CHANGELOG.md</code> yuriting va git tegini <code>v1.2.0</code> ko'rinishida qo'ying. Packagist tegdan versiyani o'qiydi.",
      },
      {
        type: "ul",
        items: [
          "Namespace'ni vendor nomi bilan boshlang; global nomlardan qoching.",
          "`composer validate --strict` bilan metama'lumotni tekshiring.",
          "Testlarni paket ichida alohida namespace'da saqlang.",
          "`composer.json` da `minimum-stability` ni ehtiyotkorlik bilan o'zgartiring.",
        ],
      },
    ],
    quiz: [
      {
        q: "Composer paketining PSR-4 prefiksi odatda nimaga mos keladi?",
        options: ["Fayl kengaytmasiga", "Vendor va namespace tuzilishiga", "Ma'lumotlar bazasi nomiga", "HTTP statusiga"],
        answer: 1,
        explain: "Prefiks vendor/namespace bilan boshlanadi va katalogga bog'lanadi; klass yo'li shu prefiksdan keyin aniqlanadi.",
      },
      {
        q: "Mos kelmaydigan (breaking) o'zgarish qaysi versiya raqamini oshiradi?",
        options: ["Patch", "Minor", "Major", "Hech qaysisini"],
        answer: 2,
        explain: "SemVer bo'yicha breaking change major versiyani oshiradi: 1.x dan 2.0.0 ga.",
      },
      {
        q: "`autoload-dev` nima uchun ishlatiladi?",
        options: [
          "Test va ishlab chiqish klasslarini yuklash uchun",
          "Production paketlarini tezlashtirish uchun",
          "Faqat PHP kengaytmalari uchun",
          "Litsenziyani tekshirish uchun",
        ],
        answer: 0,
        explain: "`autoload-dev` faqat dev muhitida yuklanadi; test namespace'lari shu yerda bo'ladi.",
      },
    ],
  },
  {
    id: 68,
    title: "PHPStan, Psalm va Rector bilan sifatni oshirish",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Statik analizatorlar kodni bajarmasdan xatolarni topadi: noto'g'ri tur, null bilan ishlash, mavjud bo'lmagan metod, ortiqcha shart. <b>PHPStan</b> va <b>Psalm</b> shu vazifani bajaradi; <b>Rector</b> esa eski sintaksisni avtomatik zamonaviylashtiradi. Ularni CI'ga qo'shish regressiyalarni erta ushlaydi.",
      },
      {
        type: "code",
        title: "ortacha.php",
        code: String.raw`<?php
declare(strict_types=1);

/**
 * @param list<int> $sonlar
 */
function ortacha(array $sonlar): float
{
    if ($sonlar === []) {
        throw new InvalidArgumentException("Bo'sh massiv");
    }

    return array_sum($sonlar) / count($sonlar);
}

echo ortacha([80, 90, 100]), PHP_EOL;
echo ortacha([75]), PHP_EOL;`,
        outputLabel: "Natija",
        output: "90\n75",
      },
      {
        type: "p",
        html: "`list<int>` docblock PHPStan'ga massivning indekslari 0 dan ketma-ket va barcha qiymatlari int ekanini aytadi. Analizator bo'sh massiv tekshiruvi tufayli bo'linishda xavf yo'qligini tasdiqlaydi. Dynamic `mixed` bilan ishlashda `is_int()` yoki `assert()` orqali turni toraytirish kerak.",
      },
      {
        type: "code",
        title: "null-xavfsiz.php",
        code: String.raw`<?php
declare(strict_types=1);

/**
 * @param array<string, string> $map
 */
function topish(array $map, string $kalit): ?string
{
    return $map[$kalit] ?? null;
}

$ism = topish(['a' => 'Aziza'], 'a');
$yoq = topish(['a' => 'Aziza'], 'z');

echo $ism ?? 'topilmadi', PHP_EOL;
echo $yoq === null ? "null xavfsiz\n" : $yoq, PHP_EOL;
echo strlen($ism ?? ''), PHP_EOL;`,
        outputLabel: "Natija",
        output: "Aziza\nnull xavfsiz\n5",
      },
      {
        type: "table",
        head: ["Vosita", "Nimani topadi", "Buyruq"],
        rows: [
          ["PHPStan", "Tur va null xatolari", "vendor/bin/phpstan analyse"],
          ["Psalm", "Tur, taint, unused kod", "vendor/bin/psalm"],
          ["Rector", "Eskirgan sintaksisni almashtiradi", "vendor/bin/rector process"],
          ["PHP-CS-Fixer", "Uslub buzilishlari", "vendor/bin/php-cs-fixer fix"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Baseline — qarzni yashirmaslik",
        html: "Mavjud katta loyihada barcha xatolarni birdan tuzatish qiyin. PHPStan <code>--generate-baseline</code> bilan eski xatolarni vaqtincha qayd etish mumkin, lekin yangi xatolar CI'ni to'xtatishi kerak. Baseline'ni doimiy kechikish vositasi qilib qo'ymang.",
      },
      {
        type: "ul",
        items: [
          "Analizator versiyasini `composer.lock` bilan qulflang.",
          "Test va CI'da `--no-progress --error-format=github` qulay.",
          "Rector'ni avval quruq rejimda (`--dry-run`) sinab ko'ring.",
          "Docblock'larni haqiqatga mos tuting: noto'g'ri `@param` analizatorni chalg'itadi.",
        ],
      },
    ],
    quiz: [
      {
        q: "PHPStan qanday ishlaydi?",
        options: [
          "Kodni bajarib, natijani tekshiradi",
          "Kodni statik tahlil qiladi, bajarmaydi",
          "Faqat testlarni ishga tushiradi",
          "Faqat SQL so'rovlarni tekshiradi",
        ],
        answer: 1,
        explain: "Statik analizator kodni bajarishsiz tur va oqimlarni tahlil qiladi.",
      },
      {
        q: "`?string` qaytaruvchi funksiya natijasini xavfsiz ishlatish uchun nima kerak?",
        options: [
          "Har doim `strlen()` chaqirish",
          "Null tekshiruvi yoki `??` operatori",
          "Faqat `var_dump()`",
          "Funksiyani o'chirish",
        ],
        answer: 1,
        explain: "Null bo'lishi mumkin bo'lgan qiymatni ishlatishdan oldin tekshirish yoki default berish kerak.",
      },
      {
        q: "Rector asosan nima qiladi?",
        options: [
          "Eskirgan kodni avtomatik zamonaviy sintaksisga o'tkazadi",
          "Ma'lumotlar bazasini migratsiya qiladi",
          "HTTP serverni ishga tushiradi",
          "Parollarni hash qiladi",
        ],
        answer: 0,
        explain: "Rector qoidalar to'plami asosida kodni avtomatik o'zgartiradi, masalan `match` yoki typed property'ga o'tkazadi.",
      },
    ],
  },
  {
    id: 69,
    title: "Xdebug va debugging san'ati",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Xatoni topish uchun faqat <code>var_dump()</code> yetarli emas. Xdebug stack trace, qadam-baqadam debug, profiler va code coverage beradi. Muhim ko'nikma — muammoni takrorlaydigan eng kichik holatni ajratish va taxminni o'lchov bilan tekshirish.",
      },
      {
        type: "code",
        title: "trace.php",
        code: String.raw`<?php
xdebug_start_trace(__DIR__ . '/trace');

$summa = 0;
for ($i = 1; $i <= 1000; $i++) {
    $summa += $i;
}

xdebug_stop_trace();

echo "Yig'indi: $summa\n";
echo "Trace fayli: trace.xt\n";`,
        outputLabel: "Natija",
        output: "Yig'indi: 500500\nTrace fayli: trace.xt",
      },
      {
        type: "p",
        html: "Xdebug 3 da rejimlar <code>xdebug.mode=develop,debug,coverage,profile</code> orqali yoqiladi. Production'da debug rejimini o'chiring: u sezilarli sekinlashuv va xavfsizlik xavfi tug'diradi. IDE bilan qadam-baqadam debug uchun <code>xdebug.client_host</code> va port 9003 sozlanadi.",
      },
      {
        type: "code",
        title: "fib.php",
        code: String.raw`<?php
function fib(int $n): int
{
    return $n < 2 ? $n : fib($n - 1) + fib($n - 2);
}

echo 'fib(10) = ', fib(10), PHP_EOL;
echo 'Xdebug mode: ', ini_get('xdebug.mode'), PHP_EOL;
echo 'Xdebug port: ', ini_get('xdebug.client_port'), PHP_EOL;`,
        outputLabel: "Natija",
        output: "fib(10) = 55\nXdebug mode: develop,debug\nXdebug port: 9003",
      },
      {
        type: "table",
        head: ["Vosita / sozlama", "Vazifasi", "Production"],
        rows: [
          ["xdebug.mode=debug", "Qadam-baqadam debug", "O'chirilgan"],
          ["xdebug.mode=coverage", "Kod qamrovi", "Faqat CI"],
          ["xdebug.mode=profile", "Profiler fayli", "Vaqtinchalik"],
          ["error_log", "Xatoni faylga yozish", "Yoqilgan"],
          ["display_errors", "Xatoni brauzerga chiqarish", "O'chirilgan"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Debug qilish tartibi",
        html: "Avval xatoni takrorlang, keyin kirish ma'lumotini tekshiring, so'ng taxminni bitta o'lchov bilan sinang. <code>dd()</code> yoki <code>var_dump()</code> ni vaqtincha qoldirmang: commit oldidan olib tashlang. Uzoq jarayonda <code>error_log()</code> va structured log afzal.",
      },
      {
        type: "ul",
        items: [
          "Xatoni yashirmang: `display_errors=Off`, lekin log doim yozilsin.",
          "Stack trace'ni to'liq saqlang; `catch` ichida uni yo'qotmang.",
          "Profiler natijasini taxmin bilan emas, o'lchov bilan solishtiring.",
          "Debug rejimini production'da hech qachon qoldirmang.",
        ],
      },
    ],
    quiz: [
      {
        q: "Xdebug trace fayli nima uchun kerak?",
        options: [
          "Funksiya chaqiruvlari ketma-ketligini ko'rish uchun",
          "Ma'lumotlar bazasini zaxiralash uchun",
          "Parolni hash qilish uchun",
          "Docker image yasash uchun",
        ],
        answer: 0,
        explain: "Trace bajarilgan funksiyalar, argumentlar va vaqtni ketma-ket yozib beradi; oqimni tushunishga yordam beradi.",
      },
      {
        q: "Production'da `xdebug.mode=debug` bilan nima qilish kerak?",
        options: ["Doim yoqib qo'yish", "O'chirish", "Faqat kechasi yoqish", "Portni 80 qilish"],
        answer: 1,
        explain: "Debug rejimi sekinlashtiradi va tashqi debugger ulanishiga yo'l ochadi; production'da o'chirilgan bo'lishi kerak.",
      },
      {
        q: "Xatoni topishning eng ishonchli birinchi qadami nima?",
        options: [
          "Kodni butunlay qayta yozish",
          "Muammoni takrorlaydigan minimal holatni ajratish",
          "Barcha loglarni o'chirish",
          "PHP versiyasini pasaytirish",
        ],
        answer: 1,
        explain: "Takrorlanadigan minimal holat taxminni kamaytiradi va tuzatishni tekshirish imkonini beradi.",
      },
    ],
  },
];
