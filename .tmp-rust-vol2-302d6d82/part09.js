module.exports = [
  {
    id: 90,
    title: "Loyiha: talablar, arxitektura va workspace",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Endi kurs bo'ylab o'rganganlarimizni bitta loyihada birlashtiramiz: <b>noldan-vazifa</b> — CLI va HTTP API orqali vazifalarni boshqaradigan xizmat. Talablar: vazifa yaratish, ro'yxatlash, holatini o'zgartirish, o'chirish, foydalanuvchi autentifikatsiyasi va statistik hisobot. Arxitektura qatlamlarga bo'linadi: <code>domain</code> (qoidalar), <code>store</code> (ma'lumot), <code>api</code> (HTTP), <code>cli</code> (buyruq satri). Har biri alohida crate bo'lsa, testlash va qayta ishlatish oson.`,
      },
      {
        type: "code",
        title: "domain/src/lib.rs",
        code: String.raw`#[derive(Debug, Clone, PartialEq)]
pub enum Holat {
    Yangi,
    Bajarilmoqda,
    Tugallangan,
}

#[derive(Debug, Clone)]
pub struct Vazifa {
    pub id: i64,
    pub nom: String,
    pub holat: Holat,
}

impl Vazifa {
    pub fn yangi(id: i64, nom: &str) -> Self {
        Self {
            id,
            nom: nom.to_string(),
            holat: Holat::Yangi,
        }
    }
}

fn main() {
    let v = Vazifa::yangi(1, "Loyiha");
    println!("{} {:?}", v.id, v.holat);
}`,
        output: String.raw`1 Yangi`,
        runnable: false,
      },
      {
        type: "code",
        title: "domain/src/xato.rs",
        code: String.raw`use std::fmt;

#[derive(Debug)]
pub enum Xato {
    Topilmadi(i64),
    Notogri(String),
}

impl fmt::Display for Xato {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Xato::Topilmadi(id) => write!(f, "{id}-vazifa topilmadi"),
            Xato::Notogri(s) => write!(f, "noto'g'ri: {s}"),
        }
    }
}

pub type Natija<T> = Result<T, Xato>;

fn top(id: i64) -> Natija<String> {
    if id == 1 {
        Ok("Loyiha".into())
    } else {
        Err(Xato::Topilmadi(id))
    }
}

fn main() {
    println!("{}", top(1).unwrap());
    println!("{}", top(9).unwrap_err());
}`,
        output: String.raw`Loyiha
9-vazifa topilmadi`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Qatlam", "Mas'uliyati", "Bog'liqligi"],
        rows: [
          ["domain", "Vazifa, holat, qoidalar", "Hech kimga bog'liq emas"],
          ["store", "SQLx repository", "domain"],
          ["api", "axum handler, auth", "domain + store"],
          ["cli", "clap buyruqlari", "domain + store"],
          ["shared", "Konfiguratsiya, tracing", "Mustaqil"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Arxitektura qarorlari",
        html: String.raw`Domain qatlamida HTTP yoki SQLx turi bo'lmasin: u sof Rust bo'lib qolsin. Store trait ko'rinishida bo'lsa, testlarda in-memory implementatsiya ishlatish mumkin. API xatolarini HTTP statusga aylantirish faqat api qatlamida bo'lsin. Workspace root'ida <code>[workspace.dependencies]</code> bilan versiyalarni markazlashtiring. Loyiha o'sganda yangi crate qo'shish oson bo'ladi.`,
      },
    ],
    quiz: [
      {
        q: "Domain qatlami qanday bog'liqliklarga ega bo'lishi kerak?",
        options: [
          "axum va SQLx ga",
          "Faqat clap ga",
          "HTTP yoki DB freymvorklariga emas, sof biznes qoidalariga",
          "Tokio runtime'ga majburiy",
        ],
        answer: 2,
        explain: "Domain sof biznes qoidalarini saqlaydi; freymvork va I/O detallari tashqi qatlamlarda bo'ladi. Bu testlash va portativlikni osonlashtiradi.",
      },
      {
        q: "Loyihani alohida crate'larga bo'lishning asosiy foydasi nima?",
        options: [
          "Kompilyator chegaralari orqali bog'liqliklar nazorati va qayta ishlatish",
          "Binary hajmi avtomatik kamayadi",
          "Testlar umuman kerak bo'lmaydi",
          "SQLx o'rniga ishlatiladi",
        ],
        answer: 0,
        explain: "Crate chegaralari public API'ni belgilaydi, bog'liqliklarni izolyatsiya qiladi va qismlarni boshqa loyihalarda qayta ishlatishga imkon beradi.",
      },
      {
        q: "HTTP status kodiga aylantirish qaysi qatlamda bo'lishi kerak?",
        options: [
          "domain",
          "api",
          "store",
          "shared",
        ],
        answer: 1,
        explain: "Domain xatolari biznes ma'nosini bildiradi; ularni 400, 404 yoki 409 ga aylantirish HTTP bilan ishlaydigan api qatlamining vazifasi.",
      },
    ],
  },
  {
    id: 91,
    title: "Loyiha: domain model va validatsiya",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Domain model qoidalarni ifodalaydi: vazifa holati faqat <code>Yangi -&gt; Bajarilmoqda -&gt; Tugallangan</code> tartibida o'zgaradi, nom bo'sh yoki 80 belgidan uzun bo'lmaydi. Bunday qoidalarni handler'da emas, domain tipida saqlang. <b>Newtype</b> pattern yordamida tekshirilgan qiymatni alohida turga o'rash mumkin: noto'g'ri qiymat umuman yaratilmaydi. Bu "make illegal states unrepresentable" tamoyilidir.`,
      },
      {
        type: "code",
        title: "holat.rs",
        code: String.raw`#[derive(Debug, Clone, Copy, PartialEq)]
enum Holat {
    Yangi,
    Bajarilmoqda,
    Tugallangan,
}

impl Holat {
    fn otish(self) -> Option<Self> {
        match self {
            Self::Yangi => Some(Self::Bajarilmoqda),
            Self::Bajarilmoqda => Some(Self::Tugallangan),
            Self::Tugallangan => None,
        }
    }
}

fn main() {
    let mut h = Holat::Yangi;
    for _ in 0..4 {
        println!("{:?}", h);
        h = h.otish().unwrap_or(h);
    }
}`,
        output: String.raw`Yangi
Bajarilmoqda
Tugallangan
Tugallangan`,
        runnable: false,
      },
      {
        type: "code",
        title: "validatsiya.rs",
        code: String.raw`#[derive(Debug)]
enum Xato {
    Bosh,
    JudaUzun,
}

fn tekshir(nom: &str) -> Result<(), Xato> {
    if nom.trim().is_empty() {
        return Err(Xato::Bosh);
    }
    if nom.chars().count() > 80 {
        return Err(Xato::JudaUzun);
    }
    Ok(())
}

fn main() {
    println!("{:?} {:?}", tekshir("Loyiha"), tekshir("  "));
    println!("{:?}", tekshir(&"a".repeat(81)));
}`,
        output: String.raw`Ok(()) Err(Bosh)
Err(JudaUzun)`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Invariant", "Tekshiruv", "Xato"],
        rows: [
          ["Nom bo'sh emas", "<code>!nom.trim().is_empty()</code>", "Bosh"],
          ["Nom uzunligi", "<code>chars().count() &lt;= 80</code>", "JudaUzun"],
          ["Holat tartibi", "<code>otish()</code>", "NotogriOtish"],
          ["Takroriy ID", "Store unikal cheklovi", "AllaqachonMavjud"],
          ["Egasi", "Auth foydalanuvchi ID", "RuxsatYoq"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Validatsiya chegarada",
        html: String.raw`Validatsiyani API chegarasida bir marta bajaring va domain tipida kafolatlang. Har qatlamda qayta tekshirish kodni takrorlaydi, lekin ishonchsiz tashqi ma'lumot uchun himoya zarur. <code>chars().count()</code> Unicode belgilarni to'g'ri sanaydi; <code>len()</code> baytlarni sanaydi. Ma'lumotlar bazasida ham <code>CHECK</code> yoki <code>NOT NULL</code> cheklovlarini qo'shing — ilova xatosidan himoya.`,
      },
    ],
    quiz: [
      {
        q: "Tugallangan holatdan yana o'tishga urinish qanday natija berishi kerak?",
        options: [
          "Avtomatik Yangi ga qaytadi",
          "Panic",
          "Hech narsa bo'lmaydi va xato qaytariladi",
          "Bajarilmoqda ga o'tadi",
        ],
        answer: 2,
        explain: "Yakuniy holatdan o'tish yo'q; domain xato qaytarishi yoki operatsiyani rad etishi kerak. Bu biznes invariantini saqlaydi.",
      },
      {
        q: "Newtype pattern qanday foyda beradi?",
        options: [
          "Heap allocationni tezlashtiradi",
          "Tekshirilgan qiymatni alohida turda saqlab, noto'g'ri holatni oldini oladi",
          "SQL jadvalini avtomatik yaratadi",
          "JSON'ni shifrlaydi",
        ],
        answer: 1,
        explain: "Newtype ichki qiymatni faqat konstruktor orqali yaratishga ruxsat beradi; tekshiruvdan o'tmagan qiymat turga ega bo'lmaydi.",
      },
      {
        q: "Unicode matn uzunligini qaysi metod to'g'ri sanaydi?",
        options: [
          "chars().count()",
          "len()",
          "capacity()",
          "as_bytes().len()",
        ],
        answer: 0,
        explain: "len() baytlar sonini beradi; Unicode belgilar bir nechta baytdan iborat bo'lishi mumkin. chars().count() belgilar sonini sanaydi.",
      },
    ],
  },
  {
    id: 92,
    title: "Loyiha: ma'lumotlar bazasi qatlami",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Store qatlami SQLx so'rovlarini bir joyga yig'adi. Repository trait'i orqali domain va API store detallaridan ajraladi. Har metod <code>Result</code> qaytaradi, xatolar <code>thiserror</code> bilan tiplashtiriladi. Ro'yxatlashda <code>LIMIT/OFFSET</code> yoki keyset pagination ishlatiladi; <code>ORDER BY</code>siz pagination barqaror emas. Transaction bir nechta jadval o'zgarishini atomar qiladi.`,
      },
      {
        type: "code",
        title: "store/src/lib.rs",
        code: String.raw`use sqlx::{FromRow, PgPool};

#[derive(Debug, FromRow)]
pub struct Vazifa {
    pub id: i64,
    pub nom: String,
    pub tugallangan: bool,
}

pub async fn royxat(pool: &PgPool, chegara: i64) -> sqlx::Result<Vec<Vazifa>> {
    sqlx::query_as::<_, Vazifa>(
        "SELECT id, nom, tugallangan FROM vazifalar ORDER BY id LIMIT $1",
    )
    .bind(chegara)
    .fetch_all(pool)
    .await
}

#[tokio::main]
async fn main() -> sqlx::Result<()> {
    let pool = PgPool::connect("postgres://postgres:postgres@localhost/noldan").await?;
    for v in royxat(&pool, 2).await? {
        println!("{} {} {}", v.id, v.nom, v.tugallangan);
    }
    Ok(())
}`,
        output: String.raw`1 Loyiha false
2 Testlar true`,
        runnable: false,
      },
      {
        type: "code",
        title: "tugat.rs",
        code: String.raw`use sqlx::PgPool;

pub async fn tugat(pool: &PgPool, id: i64) -> sqlx::Result<bool> {
    let mut tx = pool.begin().await?;
    let r = sqlx::query("UPDATE vazifalar SET tugallangan = TRUE WHERE id = $1")
        .bind(id)
        .execute(&mut *tx)
        .await?;
    tx.commit().await?;
    Ok(r.rows_affected() == 1)
}

#[tokio::main]
async fn main() -> sqlx::Result<()> {
    let pool = PgPool::connect("postgres://postgres:postgres@localhost/noldan").await?;
    println!("{}", tugat(&pool, 2).await?);
    Ok(())
}`,
        output: String.raw`true`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Amal", "SQL", "Eslatma"],
        rows: [
          ["Ro'yxat", "<code>SELECT ... ORDER BY id LIMIT $1 OFFSET $2</code>", "Barqaror tartib"],
          ["Yaratish", "<code>INSERT ... RETURNING id</code>", "Yangi ID"],
          ["O'qish", "<code>SELECT ... WHERE id = $1</code>", "fetch_optional"],
          ["Yangilash", "<code>UPDATE ... WHERE id = $1</code>", "rows_affected"],
          ["O'chirish", "<code>DELETE ... WHERE id = $1</code>", "Soft delete mumkin"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Repository trait",
        html: String.raw`<code>trait VazifaStore { async fn royxat(...); }</code> ko'rinishidagi abstraksiya testlarda in-memory implementatsiyaga imkon beradi. Rust'da async trait metodlari stable bo'ldi, lekin obyekt sifatida ishlatish uchun <code>Box&lt;dyn ...&gt;</code> yoki generic yondashuv kerak. Katta ro'yxatlar uchun keyset pagination (<code>WHERE id &gt; $1 ORDER BY id LIMIT $2</code>) OFFSET'dan tezroq va barqarorroq.`,
      },
    ],
    quiz: [
      {
        q: "Repository trait ning testlashdagi foydasi nima?",
        options: [
          "SQLx'ni butunlay olib tashlaydi",
          "Migratsiyalarni avtomatik yozadi",
          "In-memory yoki mock store bilan domain'ni bazasiz test qilish imkonini beradi",
          "HTTP serverni ishga tushiradi",
        ],
        answer: 2,
        explain: "Trait orqali haqiqiy bazaga bog'liq bo'lmagan implementatsiya berish mumkin; domain va API mantiqi tez, deterministik test qilinadi.",
      },
      {
        q: "Transaction muvaffaqiyatli yakunlanishi uchun nima qilish kerak?",
        options: [
          "commit() chaqirish",
          "drop qilish",
          "rollback() chaqirish",
          "Yangi pool ochish",
        ],
        answer: 0,
        explain: "commit() o'zgarishlarni saqlaydi; commit bo'lmasa transaction drop paytida rollback bo'ladi.",
      },
      {
        q: "Katta jadvalda OFFSET pagination'ning kamchiligi nima?",
        options: [
          "SQL umuman ishlamaydi",
          "Chuqur offset'da sekinlashadi va qatorlar siljishi mumkin",
          "Faqat PostgreSQL'da ishlaydi",
          "Har doim xato beradi",
        ],
        answer: 1,
        explain: "OFFSET ko'p qatorlarni skanerlab tashlab ketadi va orasida qo'shilgan qatorlar sahifalarni siljitadi. Keyset pagination bu muammolarni kamaytiradi.",
      },
    ],
  },
  {
    id: 93,
    title: "Loyiha: HTTP API va autentifikatsiya",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`API qatlami domain amallarini HTTP'ga bog'laydi. Autentifikatsiya middleware'i <code>Authorization</code> sarlavhasini tekshiradi va foydalanuvchi kontekstini qo'shadi. <code>401 Unauthorized</code> — token yo'q yoki yaroqsiz, <code>403 Forbidden</code> — token bor, lekin ruxsat yo'q. Handler'lar <code>Result&lt;Json&lt;T&gt;, ApiError&gt;</code> qaytarib, xatoni yagona joyda statusga aylantiradi.`,
      },
      {
        type: "code",
        title: "auth.rs",
        code: String.raw`use axum::{
    extract::Request,
    http::StatusCode,
    middleware::Next,
    response::Response,
};

async fn auth(req: Request, next: Next) -> Result<Response, StatusCode> {
    let ruxsat = req
        .headers()
        .get("authorization")
        .and_then(|v| v.to_str().ok())
        == Some("Bearer maxfiy");

    if !ruxsat {
        return Err(StatusCode::UNAUTHORIZED);
    }
    Ok(next.run(req).await)
}

fn main() {
    println!("{}", StatusCode::UNAUTHORIZED);
}`,
        output: String.raw`401 Unauthorized`,
        runnable: false,
      },
      {
        type: "code",
        title: "vazifa_handler.rs",
        code: String.raw`use axum::{
    extract::{Path, State},
    http::StatusCode,
    Json,
};
use serde::Serialize;

#[derive(Serialize, sqlx::FromRow)]
struct Vazifa {
    id: i64,
    nom: String,
}

async fn vazifa(
    State(pool): State<sqlx::PgPool>,
    Path(id): Path<i64>,
) -> Result<Json<Vazifa>, StatusCode> {
    sqlx::query_as::<_, Vazifa>("SELECT id, nom FROM vazifalar WHERE id = $1")
        .bind(id)
        .fetch_optional(&pool)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
        .map(Json)
        .ok_or(StatusCode::NOT_FOUND)
}`,
        output: String.raw`{"id":1,"nom":"Loyiha"}`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Endpoint", "Metod", "Vazifasi"],
        rows: [
          ["<code>/vazifalar</code>", "GET", "Ro'yxat, pagination"],
          ["<code>/vazifalar</code>", "POST", "Yangi vazifa"],
          ["<code>/vazifalar/{id}</code>", "GET", "Bitta vazifa"],
          ["<code>/vazifalar/{id}</code>", "PATCH", "Holatni yangilash"],
          ["<code>/vazifalar/{id}</code>", "DELETE", "O'chirish"],
          ["<code>/kirish</code>", "POST", "Token olish"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Auth tartibi",
        html: String.raw`Auth middleware himoyalangan route'larga qo'llanilsin; login va health endpoint ochiq qolsin. Token'dan olingan foydalanuvchi ID si bilan resurs egasini tekshiring — ID ni URL'dan olib, egasini tekshirmaslik <b>IDOR</b> zaifligi. Middleware'dan keyin handler'ga foydalanuvchi ma'lumotini <code>Extension</code> yoki request extension orqali bering.`,
      },
    ],
    quiz: [
      {
        q: "401 va 403 o'rtasidagi farq nima?",
        options: [
          "401 — server xatosi, 403 — topilmadi",
          "401 — autentifikatsiya yo'q/yaroqsiz, 403 — autentifikatsiya bor lekin ruxsat yo'q",
          "Ikkalasi bir xil",
          "401 faqat admin uchun",
        ],
        answer: 1,
        explain: "401 autentifikatsiya talab qilinadi yoki token yaroqsiz; 403 esa foydalanuvchi taniqlangan, ammo amalga ruxsati yo'q.",
      },
      {
        q: "Authorization sarlavhasining standart token sxemasi qaysi?",
        options: [
          "Basic <token>",
          "Token <token>",
          "Bearer <token>",
          "JWT <token>",
        ],
        answer: 2,
        explain: "Bearer sxemasi OAuth 2.0 va JWT bilan keng qo'llaniladi: Authorization: Bearer <token>.",
      },
      {
        q: "Resurs egasini tekshirmaslik qanday zaiflikka olib keladi?",
        options: [
          "IDOR — boshqa foydalanuvchi resursiga ruxsatsiz kirish",
          "SQL injection",
          "XSS",
          "DDoS",
        ],
        answer: 0,
        explain: "Agar endpoint ID bo'yicha resurs qaytarsa-yu, uning egasini tekshirmasa, foydalanuvchi boshqa birovning ma'lumotini o'qishi yoki o'zgartirishi mumkin.",
      },
    ],
  },
  {
    id: 94,
    title: "Loyiha: testlar, Docker va reliz",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Loyihani yakunlashda uch narsa muhim: avtomatik testlar, takrorlanadigan build va kuzatiladigan deploy. axum router'ni tarmoqsiz <code>tower::ServiceExt::oneshot</code> bilan test qilish mumkin. Docker'da multi-stage build binary hajmini kamaytiradi. Release oldidan migratsiyalar, healthcheck, log va rollback rejasi tekshiriladi.`,
      },
      {
        type: "code",
        title: "tests/api.rs",
        code: String.raw`use axum::{
    body::Body,
    http::{Request, StatusCode},
};
use tower::ServiceExt;

#[tokio::test]
async fn salomatlik_200() {
    let app = app();
    let javob = app
        .oneshot(
            Request::builder()
                .uri("/salomatlik")
                .body(Body::empty())
                .unwrap(),
        )
        .await
        .unwrap();
    assert_eq!(javob.status(), StatusCode::OK);
}`,
        output: String.raw`test result: ok. 1 passed; 0 failed`,
        runnable: false,
      },
      {
        type: "code",
        title: "salomatlik.rs",
        code: String.raw`use axum::{routing::get, Router};

async fn salomatlik() -> &'static str {
    "ok"
}

fn app() -> Router {
    Router::new().route("/salomatlik", get(salomatlik))
}

fn main() {
    let _app = app();
    println!("{}", "ok");
}`,
        output: String.raw`ok`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Bosqich", "Tekshiruv", "Natija"],
        rows: [
          ["Test", "<code>cargo test --workspace</code>", "Barcha testlar yashil"],
          ["Lint", "<code>cargo clippy -- -D warnings</code>", "Ogohlantirish yo'q"],
          ["Build", "<code>cargo build --release</code>", "Optimallashtirilgan binary"],
          ["Docker", "Multi-stage + distroless", "Kichik image"],
          ["Migratsiya", "Deploy oldidan", "Sxema yangilangan"],
          ["Healthcheck", "<code>/salomatlik</code>", "200 OK"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Deploy checklist",
        html: String.raw`Multi-stage Dockerfile'da birinchi bosqichda build, ikkinchisida faqat binary va kerakli runtime fayllar bo'lsin. Konteyner root bo'lmagan foydalanuvchi bilan ishlasin. Environment orqali konfiguratsiya bering, maxfiy kalitlarni image ichiga yozmang. Migratsiyalarni alohida job qilib, ilova ishga tushishidan oldin bajaring. Log'larni markazlashtirilgan tizimga yuboring va rollback uchun oldingi image'ni saqlang.`,
      },
    ],
    quiz: [
      {
        q: "tower::ServiceExt::oneshot testda nima qiladi?",
        options: [
          "Serverni 3000-portda ochadi",
          "Ma'lumotlar bazasini yaratadi",
          "Router'ga bitta so'rov yuborib, javobni qaytaradi",
          "Barcha testlarni parallel qiladi",
        ],
        answer: 2,
        explain: "oneshot router service'ni bir marta ishga tushiradi; tarmoq va port kerak emas, test tez va deterministik bo'ladi.",
      },
      {
        q: "Docker multi-stage build ning asosiy foydasi nima?",
        options: [
          "Kodni avtomatik test qiladi",
          "Yakuniy image'da faqat runtime uchun kerakli fayllar qoladi",
          "Ma'lumotlar bazasini o'rnatadi",
          "TLS sertifikatini yaratadi",
        ],
        answer: 1,
        explain: "Build bosqichidagi kompilyator va manba fayllar yakuniy image'ga ko'chirilmaydi; image kichik va hujum yuzasi kam bo'ladi.",
      },
      {
        q: "Migratsiyalarni qachon bajarish tavsiya etiladi?",
        options: [
          "Ilova yangi versiyasi ishga tushishidan oldin, alohida qadamda",
          "Har so'rovda",
          "Faqat lokal mashinada",
          "Hech qachon",
        ],
        answer: 0,
        explain: "Migratsiyani deploy jarayonining alohida bosqichida bajarish ilova instance'lari bir vaqtda eski/yangi sxema bilan ishlashini boshqarishni osonlashtiradi.",
      },
    ],
  },
];
