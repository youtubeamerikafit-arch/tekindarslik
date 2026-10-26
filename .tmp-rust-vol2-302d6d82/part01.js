module.exports = [
  {
    id: 50,
    title: "Lifetime variance: kovariant, kontravariant va invariant",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Lifetime tizimining chuqur qismi — <b>variance</b>: bir lifetime yoki tur boshqasining o'rniga qachon ishlatilishi mumkin. <code>&amp;'static str</code> ni qisqaroq umr talab qiladigan joyga bera olasiz, chunki <code>&amp;'a T</code> lifetime bo'yicha <b>kovariant</b>. Lekin <code>&amp;'a mut T</code> tur <code>T</code> bo'yicha <b>invariant</b>: ichidagi qiymatni almashtirish mumkinligi xavfsiz qisqartirishga yo'l qo'ymaydi. Variance — kompilyator xulosasi, siz unga annotatsiya yozmaysiz, lekin API loyihalashda uning oqibatlarini bilish muhim.`,
      },
      {
        type: "code",
        title: "kovariance.rs",
        code: String.raw`fn och<'a>(matn: &'a str) -> &'a str {
    matn
}

fn main() {
    let uzoq: &'static str = "static matn";
    let qisqa = String::from("lokal");
    let a: &str = uzoq; // 'static -> qisqaroq lifetime: kovariant
    let b = och(&qisqa);
    println!("{a} / {b}");
}`,
        output: String.raw`static matn / lokal`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Konstruksiya", "Variance", "Amaliy ma'nosi"],
        rows: [
          ["<code>&amp;'a T</code>", "Kovariant", "Uzoq lifetime qisqasiga erkin aylanadi"],
          ["<code>&amp;'a mut T</code>", "Lifetime bo'yicha kovariant, T bo'yicha invariant", "T turini boshqasiga almashtirib bo'lmaydi"],
          ["<code>fn(T)</code>", "T bo'yicha kontravariant", "Kengroq parametr qabul qiluvchi funksiya torroq o'rniga o'tadi"],
          ["<code>Cell&lt;T&gt;</code>, <code>UnsafeCell&lt;T&gt;</code>", "Invariant", "Ichki mutatsiya xavfsiz qisqartirishni taqiqlaydi"],
          ["<code>Vec&lt;T&gt;</code>, <code>Box&lt;T&gt;</code>", "Kovariant", "T va lifetime meros tartibida saqlanadi"],
        ],
      },
      {
        type: "code",
        title: "invariant_cell.rs",
        code: String.raw`use std::cell::Cell;

fn main() {
    let katak: Cell<&'static str> = Cell::new("birinchi");
    katak.set("ikkinchi");
    let nusxa = katak.get();
    println!("{nusxa}");

    // Quyidagi satr kompilyatsiya bo'lmaydi:
    // let qisqa: Cell<&str> = katak;
    // Cell<T> invariant bo'lgani uchun &'static str ni &'a str ga tushirmaydi.
}`,
        output: String.raw`ikkinchi`,
        runnable: false,
      },
      {
        type: "note",
        variant: "warning",
        title: "Lifetime umrni uzaytirmaydi",
        html: String.raw`Variance faqat mavjud lifetime'lar orasidagi munosabatni tavsiflaydi. <code>'a</code> yozish qiymatning umrini uzaytirmaydi va <code>'static</code> qilish uchun hech qanday annotatsiya yetarli emas. Agar funksiya lokal <code>String</code> ga havola qaytarsa, uni <code>'static</code> deb e'lon qilish ham xatoni berkitmaydi — egasi funksiya oxirida yo'q bo'ladi.`,
      },
    ],
    quiz: [
      {
        q: "&'a mut T turi T bo'yicha qanday variance ko'rsatadi?",
        options: [
          "Kovariant, chunki havola ichidagi qiymatni o'qish mumkin",
          "Kontravariant, chunki parametr sifatida ishlatiladi",
          "Invariant, chunki T ni almashtirish xavfsizlikni buzadi",
          "Bivariant, chunki lifetime va tur ajratilgan",
        ],
        answer: 2,
        explain: "&mut T orqali T qiymatini butunlay almashtirish mumkin; agar T kovariant bo'lsa, tur xavfsizligi buzilardi. Shuning uchun T bo'yicha invariant.",
      },
      {
        q: "Nega &'static str ni qisqaroq lifetime talab qiladigan funksiyaga bera olasiz?",
        options: [
          "&'a T lifetime bo'yicha kovariant bo'lgani uchun",
          "String avtomatik Clone bo'lgani uchun",
          "Kompilyator ish vaqtida tekshirgani uchun",
          "Faqat unsafe blok ichida mumkin bo'lgani uchun",
        ],
        answer: 0,
        explain: "Kovariance uzoqroq yashovchi havolani qisqaroq talab qilinadigan joyga qisqartirishga ruxsat beradi; bu xavfsiz, chunki havola baribir yetarlicha yashaydi.",
      },
      {
        q: "Cell<T> ning T bo'yicha invariant bo'lishi qaysi imkoniyat bilan bog'liq?",
        options: [
          "Heapda joylashishi",
          "Faqat Copy turlarini saqlashi",
          "Drop paytida tozalanishi",
          "Ichki mutatsiya: &Cell<T> orqali T ni almashtirish",
        ],
        answer: 3,
        explain: "Cell shared havola orqali qiymatni yozishga ruxsat beradi. Agar T kovariant bo'lsa, uzun lifetime'li qiymatni qisqa lifetime'li joyga yozib, osilib qolgan havola yaratish mumkin bo'lardi.",
      },
    ],
  },
  {
    id: 51,
    title: "HRTB va funksiya pointer'lari",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: String.raw`Ba'zan closure yoki funksiya <b>har qanday</b> lifetime bilan ishlashini talab qilamiz. <code>F: Fn(&amp;str) -&gt; &amp;str</code> yozuvi yetarli emas: kompilyator bitta aniq lifetime tanlashi mumkin. <b>HRTB</b> (higher-ranked trait bound) <code>for&lt;'a&gt;</code> bilan "barcha <code>'a</code> uchun" degan ma'noni beradi. Bu ayniqsa matn qayta ishlovchi funksiyalar, parserlar va <code>Fn</code> cheklovlarida uchraydi.`,
      },
      {
        type: "code",
        title: "hrtb.rs",
        code: String.raw`fn qollash<F>(f: F, matn: &str) -> String
where
    F: for<'a> Fn(&'a str) -> &'a str,
{
    f(matn).to_string()
}

fn main() {
    let birinchi = |s: &str| s.split_whitespace().next().unwrap_or("");
    println!("{}", qollash(birinchi, "Rust darslari davom etadi"));
}`,
        output: String.raw`Rust`,
        runnable: false,
      },
      {
        type: "p",
        html: String.raw`<code>for&lt;'a&gt; Fn(&amp;'a str) -&gt; &amp;'a str</code> — "qanday lifetime berilsa, natija ham shu lifetime bilan bog'lanadi" degan shartnoma. Closure'lar odatda shu shaklga avtomatik moslashadi. Funksiya pointer'i esa <code>fn(&amp;str) -&gt; &amp;str</code> ko'rinishida yoziladi va u ham HRTB sifatida talqin qilinadi.`,
      },
      {
        type: "code",
        title: "fn_pointer.rs",
        code: String.raw`fn birinchi(s: &str) -> &str {
    s.split_whitespace().next().unwrap_or("")
}

fn oxirgi(s: &str) -> &str {
    s.split_whitespace().last().unwrap_or("")
}

fn tanla(f: for<'a> fn(&'a str) -> &'a str, s: &str) -> &str {
    f(s)
}

fn main() {
    let gap = String::from("Rust xavfsiz til");
    println!("{}", tanla(birinchi, &gap));
    println!("{}", tanla(oxirgi, &gap));
}`,
        output: String.raw`Rust
til`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Yozuv", "Ma'nosi", "Qachon ishlatiladi"],
        rows: [
          ["<code>Fn(&amp;str) -&gt; &amp;str</code>", "Bitta yashirin lifetime", "Oddiy closure parametrlarida"],
          ["<code>for&lt;'a&gt; Fn(&amp;'a str) -&gt; &amp;'a str</code>", "Har qanday lifetime uchun", "Callback va parserlarda"],
          ["<code>fn(&amp;str) -&gt; &amp;str</code>", "Funksiya pointer'i", "Funksiyani qiymat sifatida saqlashda"],
          ["<code>Box&lt;dyn for&lt;'a&gt; Fn(&amp;'a str)&gt;</code>", "HRTB bilan trait obyekti", "Callback'larni ro'yxatda saqlashda"],
        ],
      },
    ],
    quiz: [
      {
        q: "for<'a> degani trait cheklovida nimani bildiradi?",
        options: [
          "Faqat bitta konkret lifetime tanlanadi",
          "Cheklov har qanday lifetime uchun bajarilishi kerak",
          "Lifetime ish vaqtida tekshiriladi",
          "Faqat 'static lifetime qabul qilinadi",
        ],
        answer: 1,
        explain: "for<'a> — higher-ranked bound: cheklov barcha mumkin bo'lgan lifetime'lar uchun amal qiladi, bittasi uchun emas.",
      },
      {
        q: "fn(&str) -> &str turidagi funksiya pointer'i qaysi cheklovga mos keladi?",
        options: [
          "for<'a> fn(&'a str) -> &'a str",
          "fn(&'static str) -> String",
          "for<'a> fn(&'a str) -> &'static str",
          "fn(String) -> &str",
        ],
        answer: 0,
        explain: "Elision natijani kirish havolasiga bog'laydi; funksiya pointer'i har qanday lifetime uchun ishlaydigan HRTB shaklida bo'ladi.",
      },
      {
        q: "fn pointer va closure o'rtasidagi asosiy farq nima?",
        options: [
          "fn pointer muhitni (capture) saqlamaydi, closure saqlashi mumkin",
          "Closure faqat 'static bo'ladi",
          "fn pointer generic bo'la olmaydi",
          "Closure faqat bir marta chaqiriladi",
        ],
        answer: 0,
        explain: "fn pointer oddiy kod manzili; closure esa captured o'zgaruvchilarni o'z ichida saqlaydi va shu sababli hajmi va lifetime'i bo'ladi.",
      },
    ],
  },
  {
    id: 52,
    title: "Associated types va trait dizayni",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Trait ichida <code>type Item;</code> kabi <b>associated type</b> e'lon qilinadi. U traitning bir qismi bo'lib, har bir impl o'zining aniq turini beradi. <code>Iterator</code>ning <code>Item</code>i shu mexanizmning eng mashhur misoli. Generik parametrdan farqi: associated type trait boshiga "yashiriladi", shuning uchun cheklovlar qisqaroq bo'ladi va bir tur uchun trait faqat bir marta implement qilinadi.`,
      },
      {
        type: "code",
        title: "ombor.rs",
        code: String.raw`trait Ombor {
    type Element;
    fn birinchi(&self) -> Option<&Self::Element>;
    fn soni(&self) -> usize;
}

struct Raqamlar(Vec<i32>);

impl Ombor for Raqamlar {
    type Element = i32;
    fn birinchi(&self) -> Option<&Self::Element> {
        self.0.first()
    }
    fn soni(&self) -> usize {
        self.0.len()
    }
}

fn main() {
    let r = Raqamlar(vec![7, 8, 9]);
    println!("{:?} {}", r.birinchi(), r.soni());
}`,
        output: String.raw`Some(7) 3`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Mezon", "Associated type", "Generik parametr"],
        rows: [
          ["Impl soni", "Bir tur uchun bitta", "Parametrlar farqi bilan bir nechta"],
          ["Cheklov yozuvi", "<code>T: Iterator&lt;Item = u8&gt;</code>", "<code>T: Konvertor&lt;u32&gt;</code>"],
          ["Moslik", "Trait shartnomasining bir qismi", "Trait'ni turga moslashtiruvchi parametr"],
          ["Tipik misol", "<code>Iterator::Item</code>, <code>Deref::Target</code>", "<code>From&lt;T&gt;</code>, <code>Add&lt;Rhs&gt;</code>"],
        ],
      },
      {
        type: "code",
        title: "konvertor.rs",
        code: String.raw`trait Konvertor<Kirish> {
    type Chiqish;
    fn konvert(&self, kirish: Kirish) -> Self::Chiqish;
}

struct Uzunlik;

impl Konvertor<u32> for Uzunlik {
    type Chiqish = String;
    fn konvert(&self, k: u32) -> String {
        format!("{k} m")
    }
}

impl Konvertor<&str> for Uzunlik {
    type Chiqish = usize;
    fn konvert(&self, k: &str) -> usize {
        k.len()
    }
}

fn main() {
    let u = Uzunlik;
    println!("{} {}", u.konvert(12u32), u.konvert("Rust"));
}`,
        output: String.raw`12 m 4`,
        runnable: false,
      },
      {
        type: "note",
        variant: "info",
        title: "Qaysi birini tanlash",
        html: String.raw`Agar trait mantiqan bitta "natija turi"ni belgilasa — associated type ishlating. Agar bir tur trait'ni turli kirish turlari bilan bajarishi kerak bo'lsa — generik parametr kerak. Associated type bilan <code>impl Iterator</code> qaytarish osonlashadi, chunki chaqiruvchi <code>Item</code>ni biladi va qo'shimcha turbofish yozmaydi.`,
      },
    ],
    quiz: [
      {
        q: "Associated type ishlatilganda bitta tur trait'ni necha marta implement qilishi mumkin?",
        options: [
          "Cheksiz, har xil associated type bilan",
          "Ikkita: immutable va mutable versiya",
          "Faqat generic parametrlar soniga qarab",
          "Bir marta, chunki associated type trait shartnomasining qismi",
        ],
        answer: 3,
        explain: "Associated type aniq bir tur uchun yagona qiymatga ega; shu sababli bir tur trait'ni bir marta implement qiladi. Turli natijalar kerak bo'lsa generik parametr ishlatiladi.",
      },
      {
        q: "Qaysi holat generik parametrni associated type'dan afzal qiladi?",
        options: [
          "Iterator natijasini soddalashtirish kerak bo'lganda",
          "Bitta tur trait'ni turli kirish turlari bilan bajarishi kerak bo'lganda",
          "Trait obyekti kerak bo'lganda",
          "Kompilyatsiya vaqtini qisqartirish kerak bo'lganda",
        ],
        answer: 1,
        explain: "Generik parametr har xil kirish turi uchun alohida impl yozishga imkon beradi; associated type esa bitta tur uchun bitta natijani belgilaydi.",
      },
      {
        q: "Iterator trait'idagi Item nimani anglatadi?",
        options: [
          "Iterator'ning indeks turini",
          "Kolleksiyaning xotira hajmini",
          "next() qaytaradigan element turini",
          "Iterator'ni iste'mol qiluvchi funksiya turini",
        ],
        answer: 2,
        explain: "Item associated type next() natijasidagi element turini belgilaydi: Option<Self::Item>. Shu tufayli iteratorlar type-safe bo'ladi.",
      },
    ],
  },
  {
    id: 53,
    title: "Const generics va GAT'lar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>Const generics</b> tur emas, <b>qiymat</b> bo'yicha parametrlash imkonini beradi: <code>struct Massiv&lt;T, const N: usize&gt;</code>. Massiv o'lchami kompilyatsiya vaqtida ma'lum bo'lgani uchun indeks tekshiruvi va optimizatsiya yaxshilanadi. <b>GAT</b> (generic associated type) esa associated type'ning o'ziga lifetime yoki generik parametr qo'shadi — masalan, <code>&amp;self</code> dan qarz oladigan ko'rinish qaytarish uchun.`,
      },
      {
        type: "code",
        title: "const_generic.rs",
        code: String.raw`#[derive(Debug)]
struct Matritsa<T, const R: usize, const C: usize> {
    data: [[T; C]; R],
}

impl<T: Copy + Default, const R: usize, const C: usize> Matritsa<T, R, C> {
    fn yangi() -> Self {
        Self {
            data: [[T::default(); C]; R],
        }
    }

    fn ol(&self, r: usize, c: usize) -> T {
        self.data[r][c]
    }
}

fn main() {
    let mut m = Matritsa::<i32, 2, 3>::yangi();
    m.data[0][1] = 7;
    println!("{:?} {}", m.data, m.ol(0, 1));
}`,
        output: String.raw`[[0, 7, 0], [0, 0, 0]] 7`,
        runnable: false,
      },
      {
        type: "code",
        title: "gat.rs",
        code: String.raw`trait Korinish {
    type Element<'a>
    where
        Self: 'a;
    fn birinchi(&self) -> Option<Self::Element<'_>>;
}

impl<T> Korinish for Vec<T> {
    type Element<'a>
        = &'a T
    where
        Self: 'a;

    fn birinchi(&self) -> Option<Self::Element<'_>> {
        self.first()
    }
}

fn main() {
    let v = vec![10, 20];
    println!("{:?}", v.birinchi());
}`,
        output: String.raw`Some(10)`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Imkoniyat", "Yozilishi", "Foyda"],
        rows: [
          ["Const generic", "<code>fn ol&lt;const N: usize&gt;(a: [u8; N])</code>", "O'lcham turga kiradi, runtime tekshiruv kerak emas"],
          ["Const default", "<code>struct Buf&lt;const N: usize = 64&gt;</code>", "Ko'p holatlar uchun qulay standart"],
          ["GAT", "<code>type Iter&lt;'a&gt; where Self: 'a;</code>", "Self'dan qarz oluvchi tur qaytarish"],
          ["GAT cheklovi", "<code>where Self: 'a</code>", "Lifetime bog'liqligini aniq ko'rsatish"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Const generic cheklovlari",
        html: String.raw`Const parametr sifatida butun son, <code>bool</code>, <code>char</code> va ba'zi ADT'lar ishlatiladi; <code>String</code> yoki <code>Vec</code> kabi runtime turlari emas. Generic kodda <code>[T; N]</code> bilan ishlash uchun ko'pincha <code>T: Copy</code> yoki <code>Default</code> kerak bo'ladi. GAT esa trait obyektiga aylantirishni qiyinlashtirishi mumkin — dizaynni oldindan o'ylang.`,
      },
    ],
    quiz: [
      {
        q: "Const generic'ning asosiy afzalligi nimada?",
        options: [
          "Massiv o'lchamini tur tizimiga kiritib, kompilyatsiya vaqtida tekshirish",
          "Runtime'da massivni kattalashtirish",
          "Heap allocation'ni avtomatlashtirish",
          "Iterator tezligini oshirish",
        ],
        answer: 0,
        explain: "N const parametr sifatida turga kiradi; o'lchamlar mosligi kompilyatsiyada tekshiriladi va optimizator uchun aniq ma'lumot bo'ladi.",
      },
      {
        q: "GAT qanday muammoni hal qiladi?",
        options: [
          "Trait'ni bir nechta turga implement qilishni taqiqlaydi",
          "Heap xotirasini kamaytiradi",
          "Async funksiyalarni sinxron qiladi",
          "Associated type'ga lifetime yoki generik parametr qo'shib, Self'dan qarz oluvchi tur qaytaradi",
        ],
        answer: 3,
        explain: "GAT associated type'ning o'zida lifetime/generik parametr beradi; masalan, &self dan olingan iterator yoki slice turini qaytarish mumkin.",
      },
      {
        q: "Qaysi qiymat const generic parametr bo'la olmaydi?",
        options: [
          "usize soni",
          "String qiymati",
          "bool qiymati",
          "char qiymati",
        ],
        answer: 1,
        explain: "Const parametrlar kompilyatsiya vaqtida hisoblanadigan sodda qiymatlar bo'ladi; String kabi heap egallaydigan tur const generic bo'la olmaydi.",
      },
    ],
  },
  {
    id: 54,
    title: "Trait obyektlari: object safety va fat pointer",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<code>dyn Trait</code> turli konkret turlarni bitta interfeys ortida saqlaydi. Uning o'lchami noma'lum, shuning uchun <code>Box&lt;dyn Trait&gt;</code>, <code>Rc&lt;dyn Trait&gt;</code> yoki havola ortida ishlatiladi. Bunday pointer <b>fat pointer</b>: ma'lumot manzili va <b>vtable</b> ko'rsatkichi. Har qanday trait ham obyektga aylanmaydi — <b>object safety</b> qoidalariga rioya qilishi kerak.`,
      },
      {
        type: "code",
        title: "hayvonlar.rs",
        code: String.raw`trait Hayvon {
    fn ovoz(&self) -> &'static str;
    fn nomi(&self) -> String;
}

struct It;
struct Mushuk;

impl Hayvon for It {
    fn ovoz(&self) -> &'static str {
        "vov-vov"
    }
    fn nomi(&self) -> String {
        "It".into()
    }
}

impl Hayvon for Mushuk {
    fn ovoz(&self) -> &'static str {
        "miyov"
    }
    fn nomi(&self) -> String {
        "Mushuk".into()
    }
}

fn main() {
    let hayvonlar: Vec<Box<dyn Hayvon>> = vec![Box::new(It), Box::new(Mushuk)];
    for h in &hayvonlar {
        println!("{}: {}", h.nomi(), h.ovoz());
    }
    println!("pointer: {}", std::mem::size_of::<&dyn Hayvon>());
}`,
        output: String.raw`It: vov-vov
Mushuk: miyov
pointer: 16`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Qoida", "Obyektga mos", "Sabab"],
        rows: [
          ["<code>fn ovoz(&amp;self)</code>", "Ha", "Receiver aniq, vtable'ga yoziladi"],
          ["<code>fn yangi() -&gt; Self</code>", "Yo'q", "Natija hajmi noma'lum"],
          ["<code>fn ol&lt;T&gt;(&amp;self)</code>", "Yo'q", "Har T uchun vtable yozib bo'lmaydi"],
          ["<code>fn ol&lt;T&gt;(&amp;self) where Self: Sized</code>", "Ha", "Metod vtable'dan chiqariladi"],
          ["<code>const N: usize;</code>", "Odatda yo'q", "Associated const obyektda o'qilmaydi"],
        ],
      },
      {
        type: "code",
        title: "fat_pointer.rs",
        code: String.raw`use std::mem::size_of;

fn main() {
    println!("Box<dyn Fn(i32) -> i32>: {}", size_of::<Box<dyn Fn(i32) -> i32>>());
    println!("&dyn std::fmt::Debug: {}", size_of::<&dyn std::fmt::Debug>());
    println!("usize: {}", size_of::<usize>());
}`,
        output: String.raw`Box<dyn Fn(i32) -> i32>: 16
&dyn std::fmt::Debug: 16
usize: 8`,
        runnable: false,
      },
      {
        type: "note",
        variant: "tip",
        title: "Dinamik yoki statik dispatch",
        html: String.raw`Bir xil turdagi kolleksiya va kengaytiriladigan pluginlar uchun <code>dyn Trait</code> qulay. Issiq tsikllarda esa generik <code>impl Trait</code> statik dispatch beradi va inline qilinishi mumkin. <code>dyn Trait</code> ishlatganda har chaqiruv vtable orqali ketadi; bu odatda sezilarli sekinlashuv emas, lekin benchmark bilan tekshirish kerak.`,
      },
    ],
    quiz: [
      {
        q: "Qaysi metod trait'ni object-safe bo'lishdan chiqaradi?",
        options: [
          "&self qabul qiluvchi metod",
          "&mut self qabul qiluvchi metod",
          "Self turini qaytaradigan, where Self: Sized cheklovisiz metod",
          "&'static str qaytaradigan metod",
        ],
        answer: 2,
        explain: "Self hajmi dyn Trait uchun noma'lum; Self qaytarish vtable orqali chaqirilganda natija hajmini aniqlab bo'lmaydi. where Self: Sized bo'lsa metod obyekt vtable'idan chiqariladi.",
      },
      {
        q: "Fat pointer ichida nima saqlanadi?",
        options: [
          "Ma'lumot manzili va vtable ko'rsatkichi",
          "Faqat ma'lumot manzili",
          "Faqat vtable nusxasi",
          "Trait nomi va versiyasi",
        ],
        answer: 0,
        explain: "dyn Trait ga havola ikki so'zdan iborat: data pointer va turga mos vtable pointer. Shuning uchun &dyn Trait hajmi 16 bayt (64-bit).",
      },
      {
        q: "where Self: Sized cheklovi metodga nima qiladi?",
        options: [
          "Metodni har doim inline qiladi",
          "Metodni vtable'dan chiqaradi va faqat konkret turda chaqiriladi",
          "Trait'ni sealed qiladi",
          "Metodni async qiladi",
        ],
        answer: 1,
        explain: "Bunday metod dyn Trait orqali chaqirilmaydi, lekin aniq turda ishlaydi. Bu trait'ning qolgan qismini object-safe saqlash usulidir.",
      },
    ],
  },
];
