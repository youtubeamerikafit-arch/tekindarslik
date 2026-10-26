module.exports = [
  {
    id: 85,
    title: "Testlash chuqur: mock, property va fuzz",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Oddiy <code>#[test]</code> aniq misollarni tekshiradi. Katta tizimlarda qo'shimcha yondashuvlar kerak: <b>mock</b> tashqi bog'liqlikni almashtiradi, <b>property test</b> tasodifiy kirishlarda xossani tekshiradi, <b>fuzz</b> esa buzuq kirishlar bilan panik va crash qidiradi. Snapshot testlar chiqishni saqlab, o'zgarishni ko'rsatadi. Testlar tez va deterministik bo'lishi kerak.`,
      },
      {
        type: "code",
        title: "mock_trait.rs",
        code: String.raw`trait Ombor {
    fn saqla(&mut self, s: &str) -> bool;
}

struct Xotira(Vec<String>);

impl Ombor for Xotira {
    fn saqla(&mut self, s: &str) -> bool {
        self.0.push(s.into());
        true
    }
}

fn qosh<O: Ombor>(o: &mut O, s: &str) -> bool {
    o.saqla(s)
}

fn main() {
    let mut x = Xotira(vec![]);
    println!("{} {}", qosh(&mut x, "dars"), x.0.len());
}`,
        output: String.raw`true 1`,
        runnable: false,
      },
      {
        type: "code",
        title: "tests/proptest.rs",
        code: String.raw`use proptest::prelude::*;

proptest! {
    #[test]
    fn teskari_ikki_marta(matn in "\\PC*") {
        let teskari: String = matn.chars().rev().collect();
        let qayta: String = teskari.chars().rev().collect();
        prop_assert_eq!(matn, qayta);
    }
}`,
        output: String.raw`test result: ok. 1 passed; 0 failed`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Vosita", "Tekshiradi", "Qachon"],
        rows: [
          ["mockall", "Trait chaqiruvlari va kutishlar", "Tashqi servis"],
          ["proptest", "Tasodifiy kirishlarda xossa", "Parser, matematika"],
          ["cargo-fuzz", "Panik, crash, UB", "Ishonchsiz input"],
          ["insta", "Snapshot chiqishi", "Formatlash, JSON"],
          ["loom", "Concurrency interleaving", "Atomics, lock-free"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Test piramidasi",
        html: String.raw`Ko'p unit test, ozroq integration test va juda oz E2E test yozing. Mock'ni faqat tashqi chegara uchun ishlating; ichki mantiqni mock qilish testni haqiqiy xatolardan uzoqlashtiradi. Property test topilgan qisqa misolni alohida regression testga aylantiring. Fuzz korpusini saqlang va CI'da qisqa muddat, nightly'da uzoqroq yugurtiring.`,
      },
    ],
    quiz: [
      {
        q: "Property test oddiy misol testidan nimasi bilan farq qiladi?",
        options: [
          "Faqat tezroq ishlaydi",
          "Faqat network'ni tekshiradi",
          "Kodni kompilyatsiya qilmaydi",
          "Tasodifiy generatsiya qilingan ko'p kirishlarda xossani tekshiradi",
        ],
        answer: 3,
        explain: "Property test kirishlarni generatsiya qilib, har doim bajarilishi kerak bo'lgan xossani tekshiradi; qisqartirish (shrinking) orqali eng kichik qarshi misolni topadi.",
      },
      {
        q: "mockall qaysi maqsadda ishlatiladi?",
        options: [
          "SQL migratsiyalarini yozish",
          "Trait bog'liqliklarini soxta implementatsiya bilan almashtirish",
          "Binary hajmini kamaytirish",
          "JSON formatlash",
        ],
        answer: 1,
        explain: "mockall trait uchun mock yaratadi va chaqiruvlar, argumentlar, qaytish qiymatlarini boshqarish imkonini beradi.",
      },
      {
        q: "Fuzz testlashning asosiy maqsadi nima?",
        options: [
          "Kutilmagan kirishlarda panik va xotira xatolarini topish",
          "Kod uslubini tekshirish",
          "Test qamrovini o'lchash",
          "Build vaqtini qisqartirish",
        ],
        answer: 0,
        explain: "Fuzzer tasodifiy yoki mutatsiya qilingan kirishlarni yuborib, crash, panic va undefined behavior keltiradigan holatlarni qidiradi.",
      },
    ],
  },
  {
    id: 86,
    title: "Criterion bilan benchmark",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>Criterion</b> statistik benchmark freymvorki: ish vaqtini bir necha marta o'lchaydi, ishonch oralig'ini hisoblaydi va oldingi natija bilan taqqoslaydi. <code>cargo bench</code> bilan ishlaydi. <code>black_box</code> optimizator ishni olib tashlashini oldini oladi. Mikrobenchmark'ni real ish yuklamasidan ajratib, regressiyalarni CI'da kuzatish mumkin.`,
      },
      {
        type: "code",
        title: "benches/yigindi.rs",
        code: String.raw`use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn yigindi(n: u64) -> u64 {
    (0..n).sum()
}

fn bench(c: &mut Criterion) {
    c.bench_function("sum_loop 10k", |b| {
        b.iter(|| yigindi(black_box(10_000)))
    });
}

criterion_group!(benches, bench);
criterion_main!(benches);`,
        output: String.raw`sum_loop 10k          time:   [2.10 µs 2.20 µs 2.30 µs]`,
        runnable: false,
      },
      {
        type: "code",
        title: "qolda_olchov.rs",
        code: String.raw`use std::time::Instant;

fn main() {
    let n = 100_000u64;
    let start = Instant::now();
    let sum: u64 = (0..n).sum();
    let dt = start.elapsed();
    println!("{} {}", sum, dt.as_nanos() > 0);
}`,
        output: String.raw`4999950000 true`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Imkoniyat", "Foydasi", "Eslatma"],
        rows: [
          ["<code>bench_function</code>", "Oddiy funksiya o'lchovi", "Ism va closure"],
          ["<code>BenchmarkGroup</code>", "Bir nechta variantni guruhlash", "Taqqoslash oson"],
          ["<code>Throughput</code>", "Bayt/sekund hisoblash", "I/O va parsing"],
          ["<code>black_box</code>", "Optimizatsiyani to'xtatish", "Kirish va natija"],
          ["<code>--save-baseline</code>", "Oldingi natija bilan solishtirish", "Regressiya"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Benchmark gigienasi",
        html: String.raw`Benchmarkni release rejimida, tinch mashinada yugurtiring. Birinchi yugurish isinish uchun bo'lishi mumkin; criterion buni hisobga oladi. Compiler versiyasi, CPU va boshqa yuklamalar natijaga ta'sir qiladi. Natijani foiz bilan emas, absolut vaqt va ishonch oralig'i bilan talqin qiling. Juda kichik funksiyalar uchun o'lchov overhead'i natijani buzishi mumkin.`,
      },
    ],
    quiz: [
      {
        q: "Criterion oddiy Instant o'lchovidan nimasi bilan afzal?",
        options: [
          "Kodni avtomatik optimallashtiradi",
          "Faqat Windows'da ishlaydi",
          "Statistik tahlil va ishonch oralig'ini beradi",
          "Benchmarkni kompilyatsiya qilmaydi",
        ],
        answer: 2,
        explain: "Criterion ko'p yugurish, isinish va statistik tahlil orqali shovqinni kamaytiradi va natijalarni solishtirish imkonini beradi.",
      },
      {
        q: "black_box ning benchmark'dagi vazifasi nima?",
        options: [
          "Optimizator o'lchanayotgan ishni olib tashlashining oldini olish",
          "Natijani faylga yozish",
          "Xotirani tozalash",
          "Faqat debug buildda ishlash",
        ],
        answer: 0,
        explain: "black_box qiymatni noma'lum deb belgilaydi, shuning uchun kompilyator natijani oldindan hisoblab, benchmarkni bo'sh qoldira olmaydi.",
      },
      {
        q: "Mikrobenchmark natijasini qanday talqin qilish to'g'ri?",
        options: [
          "Bir yugurishdagi eng kichik vaqtga qarab",
          "Absolut vaqt, ishonch oralig'i va takroriy o'lchovlar bilan",
          "Faqat CPU foiziga qarab",
          "Kod satrlari soniga qarab",
        ],
        answer: 1,
        explain: "Bitta o'lchov shovqinli; ishonch oralig'i va bir nechta yugurish haqiqiy farqni ko'rsatadi. Sharoitni ham qayd eting.",
      },
    ],
  },
  {
    id: 87,
    title: "Cargo workspaces va loyiha tuzilishi",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Katta loyihada kodni bir nechta crate'ga ajratish kerak: <code>domain</code>, <code>store</code>, <code>api</code>, <code>cli</code>. <b>Workspace</b> ularni bitta <code>Cargo.toml</code> ostida birlashtiradi, umumiy <code>target/</code> va lockfile beradi. <code>[workspace.dependencies]</code> versiyalarni markazlashtiradi, a'zolar <code>workspace = true</code> bilan foydalanadi. Bu build vaqtini va versiya nomuvofiqligini kamaytiradi.`,
      },
      {
        type: "code",
        title: "api/src/main.rs",
        code: String.raw`fn main() {
    println!("paket: {}", env!("CARGO_PKG_NAME"));
    println!("versiya: {}", env!("CARGO_PKG_VERSION"));
}`,
        output: String.raw`paket: noldan-api
versiya: 0.1.0`,
        runnable: false,
      },
      {
        type: "code",
        title: "cli/src/main.rs",
        code: String.raw`use noldan_common::salom;

fn main() {
    println!("{}", salom("workspace"));
}`,
        output: String.raw`Salom, workspace!`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Fayl / buyruq", "Vazifasi", "Misol"],
        rows: [
          ["Root <code>Cargo.toml</code>", "Workspace a'zolari", "<code>[workspace] members = [...]</code>"],
          ["<code>[workspace.dependencies]</code>", "Umumiy versiyalar", "<code>serde = "1"</code>"],
          ["<code>cargo run -p api</code>", "Bitta a'zoni ishga tushirish", "Paket nomi bilan"],
          ["<code>cargo test --workspace</code>", "Barcha testlar", "CI uchun"],
          ["<code>target/</code>", "Umumiy build katalogi", "Takroriy build yo'q"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Crate chegaralari",
        html: String.raw`Har crate'ning public API'sini kichik saqlang. <code>domain</code> hech qanday HTTP yoki DB crate'ga bog'lanmasin — bu testlash va qayta ishlatishni osonlashtiradi. Workspace'da feature'lar birlashishini unutmang: bitta a'zo yoqqan feature boshqa a'zoga ham ta'sir qilishi mumkin. <code>cargo tree -p nom</code> bilan bog'liqliklarni tekshiring.`,
      },
    ],
    quiz: [
      {
        q: "workspace.dependencies nimani markazlashtiradi?",
        options: [
          "Faqat binary nomlarini",
          "Umumiy crate versiyalarini",
          "Test natijalarini",
          "Docker image'larni",
        ],
        answer: 1,
        explain: "Workspace darajasida bog'liqlik versiyasi bir marta yoziladi; a'zolar workspace = true orqali undan foydalanadi va versiyalar mos qoladi.",
      },
      {
        q: "Workspace'dagi bitta paketni ishga tushirish buyrug'i qaysi?",
        options: [
          "cargo run --workspace",
          "cargo build --all",
          "cargo test -p",
          "cargo run -p api",
        ],
        answer: 3,
        explain: "cargo run -p <paket> faqat tanlangan workspace a'zosini build qilib ishga tushiradi.",
      },
      {
        q: "Workspace umumiy target/ katalogining afzalligi nima?",
        options: [
          "Bog'liqliklar bir marta build qilinadi va qayta ishlatiladi",
          "Har crate alohida versiyada bo'ladi",
          "Testlar avtomatik o'chadi",
          "Binary hajmi kamayadi",
        ],
        answer: 0,
        explain: "Umumiy target katalogi va lockfile tufayli bir xil bog'liqliklar qayta kompilyatsiya qilinmaydi, build tezlashadi.",
      },
    ],
  },
  {
    id: 88,
    title: "crates.io: nashr qilish va semver",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Kutubxonani <b>crates.io</b>ga chiqarish uchun metadata to'liq bo'lishi kerak: nom, versiya, litsenziya, tavsif, repository va README. <code>cargo package</code> paketni tekshiradi, <code>cargo publish --dry-run</code> esa nashrni sinovdan o'tkazadi. <b>Semver</b> qoidalariga rioya qiling: buzuvchi o'zgarish — major, yangi imkoniyat — minor, xato tuzatish — patch. Nashr qilingan versiyani o'chirib bo'lmaydi, faqat yank qilish mumkin.`,
      },
      {
        type: "code",
        title: "src/lib.rs",
        code: String.raw`/// Ikki sonni qo'shadi.
///
/// # Misol
///
///     assert_eq!(noldan_math::qosh(2, 3), 5);
///
pub fn qosh(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    println!("{}", qosh(2, 3));
}`,
        output: String.raw`5`,
        runnable: false,
      },
      {
        type: "code",
        title: "metadata.rs",
        code: String.raw`fn main() {
    println!("{} {}", env!("CARGO_PKG_NAME"), env!("CARGO_PKG_VERSION"));
    println!("litsenziya: {}", env!("CARGO_PKG_LICENSE"));
}`,
        output: String.raw`noldan-math 0.1.0
litsenziya: MIT`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Qadam", "Buyruq", "Tekshiradi"],
        rows: [
          ["Paketlash", "<code>cargo package</code>", "Fayllar va metadata"],
          ["Sinov nashri", "<code>cargo publish --dry-run</code>", "Registry qoidalari"],
          ["Nashr", "<code>cargo publish</code>", "Token va versiya"],
          ["Hujjat", "<code>cargo doc --no-deps</code>", "docs.rs ko'rinishi"],
          ["Versiya yank", "<code>cargo yank --vers 0.1.0</code>", "Yangi loyihalarga ko'rinmaydi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Nashrdan oldin",
        html: String.raw`<code>src/</code>dan tashqari README, LICENSE va kerakli fayllar <code>include</code> orqali qo'shilishini tekshiring. Maxfiy kalitlar, katta test fayllari va <code>target/</code> paketga tushmasin. Public API'da <code>pub</code> qilgan har bir element semver majburiyatidir. <code>#![deny(missing_docs)]</code> bilan hujjatni majburiy qiling. Mualliflik va repository maydonlari docs.rs'da ko'rinadi.`,
      },
    ],
    quiz: [
      {
        q: "cargo publish --dry-run nima qiladi?",
        options: [
          "Versiyani butunlay o'chiradi",
          "Kodni benchmark qiladi",
          "Nashr jarayonini sinovdan o'tkazadi, lekin registry'ga yubormaydi",
          "Barcha testlarni o'chiradi",
        ],
        answer: 2,
        explain: "Dry-run paketlash va registry tekshiruvlarini bajaradi, ammo haqiqiy nashr yubormaydi; xatolarni oldindan topish uchun foydali.",
      },
      {
        q: "Public API'da buzuvchi o'zgarish qaysi semver versiyasini talab qiladi?",
        options: [
          "Major versiyani",
          "Patch versiyani",
          "Faqat prerelease'ni",
          "Hech qanday o'zgarish kerak emas",
        ],
        answer: 0,
        explain: "Buzuvchi o'zgarish major versiyani oshiradi (0.x da minor); patch faqat mos keladigan xato tuzatishlar uchun.",
      },
      {
        q: "Noto'g'ri nashr qilingan versiyani nima qilish mumkin?",
        options: [
          "Butunlay o'chirish",
          "Boshqa nom bilan qayta yuklash",
          "Versiyani tahrirlash",
          "Yank qilish, lekin mavjud lockfile'lar uchun qoladi",
        ],
        answer: 3,
        explain: "crates.io versiyani o'chirishga yo'l qo'ymaydi; yank yangi tanlovdan olib tashlaydi, lekin mavjud lockfile va yuklab olingan nusxalar ishlayveradi.",
      },
    ],
  },
  {
    id: 89,
    title: "CI, cross-compilation va release",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>CI</b> har push'da format, clippy, test va buildni avtomatik bajaradi. GitHub Actions, GitLab CI yoki boshqa xizmatlarda Rust cache va <code>rust-toolchain.toml</code> bilan barqaror muhit yaratiladi. <b>Cross-compilation</b> boshqa arxitektura uchun binary yasaydi: <code>cargo build --target ...</code> yoki <code>cross</code> vositasi. Release oldidan <code>cargo audit</code> va <code>cargo deny</code> bilan zaiflik va litsenziyalarni tekshiring.`,
      },
      {
        type: "code",
        title: "target_info.rs",
        code: String.raw`fn main() {
    println!("arch: {}", std::env::consts::ARCH);
    println!("os: {}", std::env::consts::OS);
    println!("pointer: {}", std::mem::size_of::<usize>() * 8);
    println!("little-endian: {}", cfg!(target_endian = "little"));
}`,
        output: String.raw`arch: x86_64
os: linux
pointer: 64
little-endian: true`,
        runnable: false,
      },
      {
        type: "code",
        title: "ci_env.rs",
        code: String.raw`fn main() {
    let ci = option_env!("CI").unwrap_or("lokal");
    println!("CI: {ci}");
    println!("profil: {}", if cfg!(debug_assertions) { "debug" } else { "release" });
}`,
        output: String.raw`CI: lokal
profil: debug`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Qadam", "Buyruq", "Maqsad"],
        rows: [
          ["Format", "<code>cargo fmt --check</code>", "Uslub izchilligi"],
          ["Lint", "<code>cargo clippy -- -D warnings</code>", "Xatolarni bloklash"],
          ["Test", "<code>cargo test --workspace</code>", "Regressiya"],
          ["Audit", "<code>cargo audit</code>", "Zaif bog'liqliklar"],
          ["Cross", "<code>cargo build --target aarch64-unknown-linux-gnu</code>", "Boshqa arxitektura"],
          ["Release", "<code>cargo build --release</code>", "Optimallashtirilgan binary"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Barqaror release",
        html: String.raw`<code>rust-toolchain.toml</code> bilan kompilyator versiyasini qadang: CI va developer mashinasi bir xil bo'lsin. Build cache kaliti <code>Cargo.lock</code> va toolchain versiyasiga bog'lansin. Cross uchun linker va sysroot kerak; <code>cross</code> Docker orqali buni osonlashtiradi. Release artefaktlariga SHA-256 checksum va versiya yorlig'ini qo'shing.`,
      },
    ],
    quiz: [
      {
        q: "cross vositasi nimani osonlashtiradi?",
        options: [
          "Test qamrovini oshirishni",
          "Boshqa arxitektura uchun kompilyatsiya muhitini",
          "JSON serializatsiyasini",
          "Git merge konfliktlarini",
        ],
        answer: 1,
        explain: "cross Docker konteynerlarida kerakli linker va sysroot bilan boshqa target uchun build qiladi.",
      },
      {
        q: "rust-toolchain.toml ning vazifasi nima?",
        options: [
          "Barcha crate versiyalarini yangilash",
          "Testlarni avtomatik yozish",
          "Rust kompilyator versiyasini loyiha uchun qadash",
          "Binary'ni imzolash",
        ],
        answer: 2,
        explain: "Fayl channel va komponentlarni belgilaydi; rustup loyihada shu toolchain'dan foydalanadi va muhitlar orasidagi farqni kamaytiradi.",
      },
      {
        q: "cargo audit nimani tekshiradi?",
        options: [
          "Bog'liqliklardagi ma'lum xavfsizlik zaifliklarini",
          "Kod uslubini",
          "Benchmark natijalarini",
          "Test qamrovini",
        ],
        answer: 0,
        explain: "cargo audit RustSec advisory bazasi bilan Cargo.lock'dagi crate versiyalarini solishtirib, ma'lum zaifliklarni ko'rsatadi.",
      },
    ],
  },
];
