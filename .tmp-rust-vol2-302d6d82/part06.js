module.exports = [
  {
    id: 75,
    title: "serde: Serialize, Deserialize va atributlar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>serde</b> — Rust uchun standart serializatsiya freymvorki. <code>#[derive(Serialize, Deserialize)]</code> struct va enum'larni JSON, TOML, YAML, bincode kabi formatlarga aylantiradi. Atributlar maydon nomini o'zgartirish, bo'sh qiymatlarni tashlab yuborish, standart qiymat berish va flatten qilish imkonini beradi. Serializatsiya kodi kompilyatsiya vaqtida generatsiya qilinadi, runtime reflection yo'q.`,
      },
      {
        type: "code",
        title: "serde_asos.rs",
        code: String.raw`use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Foydalanuvchi {
    id: u32,
    #[serde(rename = "ism")]
    name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    email: Option<String>,
}

fn main() {
    let u = Foydalanuvchi {
        id: 1,
        name: "Aziza".into(),
        email: None,
    };
    println!("{}", serde_json::to_string(&u).unwrap());

    let json = r#"{"id":2,"ism":"Bek"}"#;
    let parsed: Foydalanuvchi = serde_json::from_str(json).unwrap();
    println!("{}", parsed.name);
}`,
        output: String.raw`{"id":1,"ism":"Aziza"}
Bek`,
        runnable: false,
      },
      {
        type: "code",
        title: "enum_tag.rs",
        code: String.raw`use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "tur", rename_all = "snake_case")]
enum Hodisa {
    Boshlanish,
    Tugash { natija: u8 },
}

fn main() {
    let h = Hodisa::Tugash { natija: 7 };
    let json = serde_json::to_string(&h).unwrap();
    println!("{json}");

    let qayta: Hodisa = serde_json::from_str(&json).unwrap();
    println!("{qayta:?}");
}`,
        output: String.raw`{"tur":"tugash","natija":7}
Tugash { natija: 7 }`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Atribut", "Vazifasi", "Misol"],
        rows: [
          ["<code>rename</code>", "Bitta maydon nomini o'zgartirish", "<code>#[serde(rename = "ism")]</code>"],
          ["<code>rename_all</code>", "Barcha nomlar uslubi", "<code>camelCase</code>, <code>snake_case</code>"],
          ["<code>skip</code>", "Maydonni serializatsiyadan chiqarish", "Ichki maydonlar"],
          ["<code>skip_serializing_if</code>", "Shart bo'yicha tashlab yuborish", "<code>Option::is_none</code>"],
          ["<code>default</code>", "Yo'q maydon uchun standart", "Eski formatlar bilan moslik"],
          ["<code>flatten</code>", "Ichki struct maydonlarini tekislash", "Konfiguratsiya bo'limlari"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Ishonchsiz JSON",
        html: String.raw`Tashqi JSON'ni <code>serde_json::from_str</code> bilan o'qishda maydonlar majburiy bo'lsa, yetishmasa xato bo'ladi. Katta fayllar uchun <code>from_reader</code> ishlating, <code>Value</code> esa butun hujjatni xotiraga oladi. <code>deny_unknown_fields</code> ortiqcha maydonlarni rad etadi, lekin API evolyutsiyasida ehtiyot bo'ling. Raqamlar uchun <code>u64</code> va JavaScript chegarasini hisobga oling.`,
      },
    ],
    quiz: [
      {
        q: "serde(rename = \"ism\") nimani o'zgartiradi?",
        options: [
          "Rust maydon nomini emas, serializatsiyadagi kalit nomini",
          "Rust struct nomini",
          "Maydon turini",
          "Faqat Debug chiqishini",
        ],
        answer: 0,
        explain: "rename faqat formatdagi nomni o'zgartiradi; Rust kodi baribir name maydonidan foydalanadi. Bu tashqi API bilan moslash uchun qulay.",
      },
      {
        q: "skip_serializing_if = \"Option::is_none\" qanday natija beradi?",
        options: [
          "None bo'lsa null yoziladi",
          "None bo'lsa maydon butunlay tushirib qoldiriladi",
          "None deserializatsiyada xato beradi",
          "Maydon doim bo'sh satr bo'ladi",
        ],
        answer: 1,
        explain: "Shart true bo'lsa maydon JSON'ga umuman yozilmaydi; bu ixtiyoriy maydonlar uchun payload'ni kichraytiradi.",
      },
      {
        q: "serde(flatten) qanday ishlaydi?",
        options: [
          "Massivni tekislaydi",
          "Ichki struct maydonlarini tashqi obyektning maydonlariga ko'chiradi",
          "Barcha maydonlarni o'chiradi",
          "Faqat enum uchun ishlaydi",
        ],
        answer: 1,
        explain: "flatten ichki struct yoki map maydonlarini tashqi darajaga ko'taradi; natijada bitta tekis JSON obyekti hosil bo'ladi.",
      },
    ],
  },
  {
    id: 76,
    title: "JSON, TOML va boshqa serde formatlari",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`serde formatdan mustaqil: bir struct'ni JSON, TOML, YAML yoki bincode'ga bir xil derive bilan yozish mumkin. <b>JSON</b> API'lar uchun, <b>TOML</b> konfiguratsiya uchun, <b>bincode</b> tez ikkilik saqlash uchun mos. <code>serde_json::Value</code> sxemasi oldindan noma'lum bo'lgan hujjatlar bilan ishlaydi. Formatni tanlashda o'qilish, hajm va tezlikni hisobga oling.`,
      },
      {
        type: "code",
        title: "toml_sozlama.rs",
        code: String.raw`use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Sozlama {
    port: u16,
    debug: bool,
}

fn main() {
    let s = Sozlama {
        port: 8080,
        debug: true,
    };
    let matn = toml::to_string(&s).unwrap();
    print!("{matn}");

    let qayta: Sozlama = toml::from_str(&matn).unwrap();
    println!("{} {}", qayta.port, qayta.debug);
}`,
        output: String.raw`port = 8080
debug = true
8080 true`,
        runnable: false,
      },
      {
        type: "code",
        title: "json_value.rs",
        code: String.raw`use serde_json::json;

fn main() {
    let v = json!({
        "ism": "Rust",
        "yil": 2015,
        "xususiyatlar": ["xavfsiz", "tez"]
    });

    println!("{}", v["ism"]);
    println!("{}", v["xususiyatlar"][1]);
    println!("{}", v["yil"]);
}`,
        output: String.raw`"Rust"
"tez"
2015`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Format", "Kuchli tomoni", "Tipik ishlatilishi"],
        rows: [
          ["serde_json", "Universal, brauzer bilan mos", "REST API"],
          ["toml", "O'qish oson, izohlar", "Cargo.toml, konfiguratsiya"],
          ["serde_yaml", "Indentli, ixcham", "CI va config (ehtiyotkorlik)"],
          ["bincode", "Juda tez va kichik", "Ichki kesh, tarmoq"],
          ["csv", "Jadval ma'lumotlari", "Eksport/import"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Katta fayllar va oqim",
        html: String.raw`<code>serde_json::from_reader</code> fayl yoki tarmoqdan oqim bilan o'qiydi; <code>to_writer</code> esa xotirani tejaydi. JSON Lines formatida har qator alohida obyekt bo'ladi va uni <code>Deserializer::from_reader(...).into_iter::&lt;T&gt;()</code> bilan qatorlab o'qish mumkin. Konfiguratsiyada noma'lum maydonlarni jimgina qabul qilish xatolarni yashirishi mumkin — sxema tekshiruvini qo'shing.`,
      },
    ],
    quiz: [
      {
        q: "Katta JSON faylni butunlay xotiraga olmasdan o'qish uchun qaysi funksiya mos?",
        options: [
          "serde_json::from_str",
          "serde_json::to_string_pretty",
          "serde_json::json!",
          "serde_json::from_reader",
        ],
        answer: 3,
        explain: "from_reader oqimdan o'qiydi va deserializatsiya jarayonida xotirani tejaydi; from_str butun matnni xotirada talab qiladi.",
      },
      {
        q: "Qaysi format konfiguratsiya fayllari uchun eng qulay?",
        options: ["bincode", "TOML", "JSON Lines", "Postcard"],
        answer: 1,
        explain: "TOML izohlar, bo'limlar va o'qilishi oson sintaksis beradi; Cargo ham shu formatdan foydalanadi.",
      },
      {
        q: "serde_json::Value nimani ifodalaydi?",
        options: [
          "Dinamik, sxemasi oldindan noma'lum JSON qiymatini",
          "Faqat String qiymatini",
          "Faqat massivni",
          "Kompilyatsiya vaqtidagi sxemani",
        ],
        answer: 0,
        explain: "Value — JSON'ning dinamik daraxti: Null, Bool, Number, String, Array, Object. Sxema noma'lum bo'lsa ishlatiladi, lekin tiplashtirilgan struct'dan sekinroq.",
      },
    ],
  },
  {
    id: 77,
    title: "SQLx: ulanish, pool va migratsiyalar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>SQLx</b> — async SQL kutubxonasi; query'lar kompilyatsiya vaqtida tekshirilishi mumkin. <code>PgPool</code> ulanishlar hovuzini boshqaradi va ularni qayta ishlatadi. Migratsiyalar <code>migrations/</code> papkasidagi SQL fayllar bo'lib, <code>sqlx::migrate!</code> bilan binary ichiga joylanadi. <code>sqlx-cli</code> database yaratish va migratsiyalarni qo'llashni osonlashtiradi.`,
      },
      {
        type: "code",
        title: "ulanish.rs",
        code: String.raw`use sqlx::postgres::PgPoolOptions;

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect("postgres://postgres:postgres@localhost/noldan")
        .await?;

    let soni: (i64,) = sqlx::query_as("SELECT COUNT(*) FROM darslar")
        .fetch_one(&pool)
        .await?;

    println!("Darslar: {}", soni.0);
    Ok(())
}`,
        output: String.raw`Darslar: 50`,
        runnable: false,
      },
      {
        type: "code",
        title: "migratsiya.rs",
        code: String.raw`use sqlx::postgres::PgPoolOptions;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let pool = PgPoolOptions::new()
        .connect("postgres://postgres:postgres@localhost/noldan")
        .await?;

    sqlx::migrate!("./migrations").run(&pool).await?;
    println!("migratsiyalar: ok");
    Ok(())
}`,
        output: String.raw`migratsiyalar: ok`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Buyruq", "Vazifasi", "Eslatma"],
        rows: [
          ["<code>sqlx database create</code>", "Bo'sh bazani yaratish", "DATABASE_URL kerak"],
          ["<code>sqlx migrate add nom</code>", "Yangi migratsiya fayli", "Timestamp bilan nomlanadi"],
          ["<code>sqlx migrate run</code>", "Migratsiyalarni qo'llash", "Tartib bilan"],
          ["<code>cargo sqlx prepare</code>", "Offline query metadata", "CI uchun .sqlx papkasi"],
          ["<code>PgPoolOptions</code>", "Pool sozlamalari", "max_connections, timeout"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Maxfiy ma'lumotlar",
        html: String.raw`<code>DATABASE_URL</code>ni kodga yozmang: environment yoki maxfiy saqlash xizmatidan oling. Log'da parol chiqmasin. <code>query!</code> makrosi kompilyatsiya vaqtida bazaga ulanadi; CI'da baza bo'lmasa <code>cargo sqlx prepare</code> natijasidagi <code>.sqlx</code> papkasini commit qiling. Production'da migratsiyalarni alohida deploy qadamida, ilova ishga tushishidan oldin bajaring.`,
      },
    ],
    quiz: [
      {
        q: "PgPool ning asosiy vazifasi nima?",
        options: [
          "SQL sintaksisini tekshirish",
          "Migratsiya fayllarini yaratish",
          "Ulanishlarni qayta ishlatib, hovuzni boshqarish",
          "JSON'ni serializatsiya qilish",
        ],
        answer: 2,
        explain: "Pool bir nechta ulanishni ushlab turadi va so'rovlarga tarqatadi; har so'rov uchun yangi TCP ulanish ochilmaydi.",
      },
      {
        q: "sqlx::migrate! makrosi migratsiyalarni qachon binary'ga qo'shadi?",
        options: [
          "Kompilyatsiya vaqtida",
          "Faqat runtime'da fayl tizimidan",
          "Faqat testlarda",
          "Har so'rovda",
        ],
        answer: 0,
        explain: "migrate! papkadagi SQL fayllarni kompilyatsiya vaqtida binary ichiga joylaydi; deployda alohida SQL fayllar kerak bo'lmaydi.",
      },
      {
        q: "query! makrosi uchun DATABASE_URL qachon kerak?",
        options: [
          "Har dastur ishga tushganda",
          "Kompilyatsiya vaqtida, so'rovni tekshirish uchun",
          "Faqat migratsiyada",
          "Hech qachon",
        ],
        answer: 1,
        explain: "query! kompilyatsiya paytida bazaga ulanib, SQL va natija turlarini tekshiradi. Offline rejimda .sqlx metadata ishlatiladi.",
      },
    ],
  },
  {
    id: 78,
    title: "SQLx: query, transaction va FromRow",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`SQLx'da <code>query_as</code> natijani struct'ga moslaydi; <code>#[derive(FromRow)]</code> ustunlarni maydonlarga bog'laydi. <code>fetch_one</code>, <code>fetch_all</code>, <code>fetch_optional</code> natija shaklini tanlaydi. <b>Transaction</b> bir nechta so'rovni atomar bajaradi: <code>commit()</code> bo'lmasa, <code>Drop</code> rollback qiladi. <code>rows_affected()</code> UPDATE/DELETE natijasini tekshiradi.`,
      },
      {
        type: "code",
        title: "query_as.rs",
        code: String.raw`use sqlx::{FromRow, PgPool};

#[derive(Debug, FromRow)]
struct Dars {
    id: i64,
    nom: String,
    ball: i32,
}

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    let pool = PgPool::connect("postgres://postgres:postgres@localhost/noldan").await?;
    let darslar = sqlx::query_as::<_, Dars>(
        "SELECT id, nom, ball FROM darslar ORDER BY id LIMIT 2",
    )
    .fetch_all(&pool)
    .await?;

    for d in &darslar {
        println!("{} {} {}", d.id, d.nom, d.ball);
    }
    Ok(())
}`,
        output: String.raw`1 Egallik 10
2 Borrowing 8`,
        runnable: false,
      },
      {
        type: "code",
        title: "transaction.rs",
        code: String.raw`use sqlx::PgPool;

async fn ball_qosh(pool: &PgPool, id: i64) -> sqlx::Result<bool> {
    let mut tx = pool.begin().await?;
    let r = sqlx::query("UPDATE darslar SET ball = ball + 1 WHERE id = $1")
        .bind(id)
        .execute(&mut *tx)
        .await?;
    tx.commit().await?;
    Ok(r.rows_affected() == 1)
}

#[tokio::main]
async fn main() -> sqlx::Result<()> {
    let pool = PgPool::connect("postgres://postgres:postgres@localhost/noldan").await?;
    println!("{}", ball_qosh(&pool, 1).await?);
    Ok(())
}`,
        output: String.raw`true`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Metod", "Natija", "Qachon"],
        rows: [
          ["<code>fetch_one</code>", "Bitta qator yoki xato", "Aniq bitta natija"],
          ["<code>fetch_optional</code>", "<code>Option&lt;T&gt;</code>", "Topilmasligi normal"],
          ["<code>fetch_all</code>", "<code>Vec&lt;T&gt;</code>", "Ro'yxat"],
          ["<code>execute</code>", "RowsAffected", "INSERT/UPDATE/DELETE"],
          ["<code>begin().commit()</code>", "Atomar guruh", "Bir nechta so'rov"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "N+1 va indekslar",
        html: String.raw`Ro'yxat ichida har element uchun alohida so'rov yuborish <b>N+1</b> muammosini keltiradi. <code>JOIN</code> yoki <code>WHERE id = ANY($1)</code> bilan birlashtiring. Sekin so'rovlarni <code>EXPLAIN ANALYZE</code> bilan tekshiring va kerakli indekslarni qo'shing. Transaction'ni uzoq ushlab turmang: qulf kutish va connection pool tugashi mumkin.`,
      },
    ],
    quiz: [
      {
        q: "Transaction commit qilinmasdan drop bo'lsa nima bo'ladi?",
        options: [
          "Avtomatik commit bo'ladi",
          "Rollback bo'ladi",
          "Baza buziladi",
          "So'rovlar keshga yoziladi",
        ],
        answer: 1,
        explain: "SQLx transaction guard drop bo'lganda rollback yuboradi; o'zgarishlar saqlanmaydi. Muvaffaqiyatli yakunda commit() aniq chaqirilishi kerak.",
      },
      {
        q: "UPDATE natijasida nechta qator o'zgarganini qaysi metod beradi?",
        options: [
          "fetch_all",
          "rows_affected",
          "last_insert_id",
          "commit",
        ],
        answer: 1,
        explain: "execute natijasidagi rows_affected() UPDATE/DELETE ta'sir qilgan qatorlar sonini qaytaradi; nol bo'lsa id topilmagan bo'lishi mumkin.",
      },
      {
        q: "FromRow derive nimani avtomatlashtiradi?",
        options: [
          "SQL ustunlarini struct maydonlariga moslash",
          "Jadval yaratishni",
          "Migratsiyani",
          "Connection pool sozlashni",
        ],
        answer: 0,
        explain: "FromRow qator ustunlarini nom bo'yicha maydonlarga o'qiydi; query_as bilan birga tiplashtirilgan natija beradi.",
      },
    ],
  },
  {
    id: 79,
    title: "clap bilan professional CLI",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>clap</b> — Rust CLI'lari uchun standart argument parser. Derive API struct va enum'lardan buyruq satrini avtomatik yaratadi: <code>#[derive(Parser)]</code>, <code>#[derive(Subcommand)]</code>, <code>#[derive(ValueEnum)]</code>. clap yordam matni, versiya, validatsiya va shell completion'larni beradi. Foydalanuvchi xatosini tushunarli ko'rsatish uchun <code>value_parser</code> va <code>conflicts_with</code> ishlatiladi.`,
      },
      {
        type: "code",
        title: "cli.rs",
        code: String.raw`use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "noldan", version, about = "Noldan CLI")]
struct Cli {
    #[arg(short, long, default_value_t = 10)]
    soni: u8,
    #[command(subcommand)]
    buyruq: Buyruq,
}

#[derive(Subcommand)]
enum Buyruq {
    Salom {
        #[arg(default_value = "dunyo")]
        ism: String,
    },
    Yigindi {
        sonlar: Vec<i32>,
    },
}

fn main() {
    let cli = Cli::parse();
    match cli.buyruq {
        Buyruq::Salom { ism } => println!("Salom, {ism}! soni={}", cli.soni),
        Buyruq::Yigindi { sonlar } => println!("{}", sonlar.iter().sum::<i32>()),
    }
}`,
        output: String.raw`$ cargo run -- yigindi 3 4 5
12`,
        runnable: false,
      },
      {
        type: "code",
        title: "env_option.rs",
        code: String.raw`use clap::Parser;

#[derive(Parser, Debug)]
struct Args {
    #[arg(long, env = "NOLDAN_PORT", default_value_t = 8080)]
    port: u16,
    #[arg(long, default_value_t = false)]
    verbose: bool,
}

fn main() {
    let a = Args::parse_from(["app", "--verbose"]);
    println!("{} {}", a.port, a.verbose);
}`,
        output: String.raw`8080 true`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Xususiyat", "Yozilishi", "Natija"],
        rows: [
          ["Pozitsion argument", "<code>ism: String</code>", "Majburiy yoki default"],
          ["Flag", "<code>#[arg(short, long)]</code>", "<code>-v</code> / <code>--verbose</code>"],
          ["Subcommand", "<code>#[derive(Subcommand)]</code>", "<code>app yigindi ...</code>"],
          ["Enum tanlov", "<code>#[derive(ValueEnum)]</code>", "Cheklangan qiymatlar"],
          ["Env fallback", "<code>#[arg(env = "PORT")]</code>", "Env o'zgaruvchisi"],
          ["Konflikt", "<code>conflicts_with = "boshqa"</code>", "Birga ishlatilmaydi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "CLI UX",
        html: String.raw`Xato bo'lsa clap chiqish kodi 2 bilan yordam matnini ko'rsatadi; bu UNIX an'anasi. <code>--help</code> va <code>--version</code> avtomatik qo'shiladi. Katta vositalarda subcommand'larni alohida modullarga ajrating. Chiqishni <code>stdout</code>ga, xatolarni <code>stderr</code>ga yozing. <code>--json</code> kabi mashina o'qiydigan format qo'shsangiz, skriptlarda qulay bo'ladi.`,
      },
    ],
    quiz: [
      {
        q: "default_value_t atributi qanday qiymat qabul qiladi?",
        options: [
          "Faqat String",
          "Maydon turiga mos literal yoki ifoda",
          "Faqat environment nomi",
          "Faqat fayl yo'li",
        ],
        answer: 1,
        explain: "default_value_t maydon turiga mos qiymatni oladi, masalan 10 yoki false; clap uni help'da ham ko'rsatadi.",
      },
      {
        q: "Subcommand'larni enum bilan yozish uchun qaysi derive kerak?",
        options: ["Parser", "Args", "ValueEnum", "Subcommand"],
        answer: 3,
        explain: "Subcommand derive enum variantlarini alohida buyruqlar sifatida taniydi; Parser esa asosiy CLI struct uchun ishlatiladi.",
      },
      {
        q: "arg(env = \"PORT\") nimani qiladi?",
        options: [
          "Argument berilmasa PORT env o'zgaruvchisidan qiymat oladi",
          "PORT ni majburiy argument qiladi",
          "PORT nomli faylni o'qiydi",
          "Faqat Windows'da ishlaydi",
        ],
        answer: 0,
        explain: "env atributi CLI argument berilmaganda environment o'zgaruvchisini fallback sifatida ishlatadi; default_value_t bilan birga ishlashi mumkin.",
      },
    ],
  },
];
