module.exports = [
  {
    id: 80,
    title: "axum: router, handler va extractor",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>axum</b> — Tokio ustida ishlaydigan web freymvork; hyper va tower ekotizimidan foydalanadi. <code>Router</code> yo'llarni handler'larga bog'laydi, handler oddiy <code>async fn</code> bo'lib, argumentlari <b>extractor</b> orqali to'ldiriladi. <code>Path</code>, <code>Query</code>, <code>Json</code>, <code>State</code> eng ko'p ishlatiladigan extractor'lardir. Javob <code>IntoResponse</code> implement qilgan har qanday tur bo'lishi mumkin.`,
      },
      {
        type: "code",
        title: "server.rs",
        code: String.raw`use axum::{routing::get, Router};

async fn salom() -> &'static str {
    "Salom, axum!"
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(salom));
    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    println!("http://127.0.0.1:3000");
    axum::serve(listener, app).await.unwrap();
}`,
        output: String.raw`http://127.0.0.1:3000`,
        runnable: false,
      },
      {
        type: "code",
        title: "path.rs",
        code: String.raw`use axum::{extract::Path, routing::get, Router};

async fn salom(Path(ism): Path<String>) -> String {
    format!("Salom, {ism}!")
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/salom/{ism}", get(salom));
    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    axum::serve(listener, app).await.unwrap();
}`,
        output: String.raw`$ curl http://127.0.0.1:3000/salom/Aziza
Salom, Aziza!`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Extractor", "Manba", "Misol"],
        rows: [
          ["<code>Path&lt;T&gt;</code>", "URL yo'l parametri", "<code>/dars/{id}</code>"],
          ["<code>Query&lt;T&gt;</code>", "Query string", "<code>?limit=10</code>"],
          ["<code>Json&lt;T&gt;</code>", "JSON tana", "POST payload"],
          ["<code>State&lt;T&gt;</code>", "Umumiy holat", "Pool, konfiguratsiya"],
          ["<code>HeaderMap</code>", "Sarlavhalar", "Authorization"],
          ["<code>Extension&lt;T&gt;</code>", "Qatlamdan qo'shilgan qiymat", "Middleware natijasi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Extractor tartibi",
        html: String.raw`Json kabi tana o'qiydigan extractor oxirgi argument bo'lishi kerak: tana bir marta o'qiladi. Xato bo'lsa extractor avtomatik <code>400</code> yoki <code>415</code> qaytaradi. Handler natijasi <code>()</code> bo'lsa <code>200</code>, <code>StatusCode</code> bo'lsa o'sha kod, <code>Json&lt;T&gt;</code> bo'lsa JSON javob yuboriladi.`,
      },
    ],
    quiz: [
      {
        q: "axum handler odatda qanday ko'rinishda bo'ladi?",
        options: [
          "Sinxron fn, faqat String qaytaradi",
          "Async fn, argumentlari extractor va natijasi IntoResponse",
          "Struct metodi, faqat &self",
          "Closure, faqat () qaytaradi",
        ],
        answer: 1,
        explain: "Handler async funksiya bo'lib, extractor argumentlarini qabul qiladi; natija IntoResponse orqali HTTP javobga aylanadi.",
      },
      {
        q: "axum 0.8 da URL parametri qanday yoziladi?",
        options: [
          "/dars/:id",
          "/dars/<id>",
          "/dars/{id}",
          "/dars/[id]",
        ],
        answer: 2,
        explain: "axum 0.8 va undan keyin path parametrlari {id} sintaksisida yoziladi; eski :id sintaksisi olib tashlangan.",
      },
      {
        q: "axum qaysi ekotizim ustiga qurilgan?",
        options: [
          "hyper va tower",
          "actix-web",
          "rocket",
          "warp",
        ],
        answer: 0,
        explain: "axum hyper HTTP implementatsiyasi va tower middleware abstraksiyasidan foydalanadi; shu sababli tower layer'lari bilan moslashadi.",
      },
    ],
  },
  {
    id: 81,
    title: "axum: state, JSON API va query",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Umumiy holat <code>State&lt;T&gt;</code> extractor'i orqali beriladi va <code>Router::with_state</code> bilan ulanadi. Holat <code>Clone</code> bo'lishi kerak, lekin ichida <code>Arc</code> yoki pool kabi arzon clone turadi. JSON qabul qilish uchun <code>Json&lt;T&gt;</code> va <code>Deserialize</code>, javob uchun <code>Serialize</code> kerak. Validatsiya va biznes mantiqni handler ichida emas, alohida qatlamda saqlang.`,
      },
      {
        type: "code",
        title: "state_json.rs",
        code: String.raw`use axum::{extract::State, routing::post, Json, Router};
use serde::{Deserialize, Serialize};
use std::sync::{Arc, Mutex};

#[derive(Clone)]
struct Holat {
    darslar: Arc<Mutex<Vec<String>>>,
}

#[derive(Deserialize)]
struct Yangi {
    nom: String,
}

#[derive(Serialize)]
struct Javob {
    id: usize,
    nom: String,
}

async fn qosh(State(s): State<Holat>, Json(y): Json<Yangi>) -> Json<Javob> {
    let mut v = s.darslar.lock().unwrap();
    v.push(y.nom.clone());
    Json(Javob {
        id: v.len(),
        nom: y.nom,
    })
}

#[tokio::main]
async fn main() {
    let holat = Holat {
        darslar: Arc::new(Mutex::new(Vec::new())),
    };
    let app = Router::new()
        .route("/darslar", post(qosh))
        .with_state(holat);
    let l = tokio::net::TcpListener::bind("127.0.0.1:3000").await.unwrap();
    axum::serve(l, app).await.unwrap();
}`,
        output: String.raw`$ curl -X POST localhost:3000/darslar -H "content-type: application/json" -d '{"nom":"Lifetime"}'
{"id":1,"nom":"Lifetime"}`,
        runnable: false,
      },
      {
        type: "code",
        title: "query.rs",
        code: String.raw`use axum::{extract::Query, routing::get, Json, Router};
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct Sahifa {
    limit: Option<usize>,
}

#[derive(Serialize)]
struct Javob {
    limit: usize,
}

async fn royxat(Query(q): Query<Sahifa>) -> Json<Javob> {
    Json(Javob {
        limit: q.limit.unwrap_or(10),
    })
}

fn main() {
    let _app = Router::new().route("/darslar", get(royxat));
}`,
        output: String.raw`$ curl "localhost:3000/darslar?limit=25"
{"limit":25}`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Holat turi", "Clone narxi", "Qachon"],
        rows: [
          ["<code>PgPool</code>", "Arzon (Arc ichida)", "SQL ulanishlari"],
          ["<code>Arc&lt;Config&gt;</code>", "Arzon", "O'zgarmas konfiguratsiya"],
          ["<code>Arc&lt;RwLock&lt;T&gt;&gt;</code>", "O'rtacha", "Kamdan-kam mutatsiya"],
          ["<code>Arc&lt;Mutex&lt;T&gt;&gt;</code>", "Qulf narxi", "Qisqa mutatsiya"],
          ["<code>HashMap</code>", "Qimmat", "State uchun yaramaydi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Async handlerda std Mutex",
        html: String.raw`<code>std::sync::Mutex</code> guard'ini <code>.await</code> orqali ushlab turmang: guard Send emas va boshqa tasklarni bloklashi mumkin. Qulf ichida faqat qisqa sinxron ish bajaring yoki <code>tokio::sync::Mutex</code> ishlating. JSON tana hajmini cheklang (masalan <code>DefaultBodyLimit</code>), aks holda katta payload xotirani tugatadi.`,
      },
    ],
    quiz: [
      {
        q: "axum State bilan ishlash uchun holat turi qanday traitni bajarishi kerak?",
        options: ["Debug", "Serialize", "Default", "Clone"],
        answer: 3,
        explain: "Har bir so'rovga holat nusxasi beriladi; shuning uchun Clone kerak. Ichida Arc yoki pool bo'lsa, clone arzon bo'ladi.",
      },
      {
        q: "Json<T> extractor noto'g'ri Content-Type yoki buzuq JSON uchun qanday javob qaytaradi?",
        options: [
          "Avtomatik 4xx xato",
          "Har doim 200",
          "Panic",
          "500",
        ],
        answer: 0,
        explain: "Json extractor tana turini va sintaksisini tekshiradi; xato bo'lsa mos 400/415 javob qaytaradi, handler chaqirilmaydi.",
      },
      {
        q: "Nega async handlerda std::sync::MutexGuard ni await bilan ushlash xavfli?",
        options: [
          "Guard juda katta",
          "Mutex Clone bo'lmaydi",
          "Guard Send emas va workerni bloklaydi",
          "Guard JSON ga aylanmaydi",
        ],
        answer: 2,
        explain: "std MutexGuard odatda Send emas; await davomida ushlansa future Send bo'lmay qoladi yoki boshqa vazifalar qulf kutib qoladi. Tokio Mutex bu holat uchun.",
      },
    ],
  },
  {
    id: 82,
    title: "axum: middleware, tracing va xatolar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Middleware so'rov va javob atrofida qo'shimcha ish bajaradi: log, autentifikatsiya, siqish, CORS, timeout. axum <code>tower</code> layer'larini qabul qiladi. Oddiy funksiyani <code>middleware::from_fn</code> bilan ulash mumkin. Xatolarni boshqarish uchun o'z tur ingizga <code>IntoResponse</code> implement qiling: handler <code>Result&lt;T, AppError&gt;</code> qaytaradi, xato esa to'g'ri HTTP kod va JSON tanaga aylanadi.`,
      },
      {
        type: "code",
        title: "log_middleware.rs",
        code: String.raw`use axum::{
    extract::Request,
    middleware::{self, Next},
    response::Response,
    routing::get,
    Router,
};

async fn log(req: Request, next: Next) -> Response {
    println!("{} {}", req.method(), req.uri().path());
    next.run(req).await
}

async fn salom() -> &'static str {
    "salom"
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/salom", get(salom))
        .layer(middleware::from_fn(log));
    let l = tokio::net::TcpListener::bind("127.0.0.1:3000").await.unwrap();
    axum::serve(l, app).await.unwrap();
}`,
        output: String.raw`GET /salom`,
        runnable: false,
      },
      {
        type: "code",
        title: "app_error.rs",
        code: String.raw`use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    Json,
};
use serde_json::json;

struct AppError(String);

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        (
            StatusCode::BAD_REQUEST,
            Json(json!({ "xato": self.0 })),
        )
            .into_response()
    }
}

async fn xato() -> Result<&'static str, AppError> {
    Err(AppError("noto'g'ri so'rov".into()))
}

fn main() {
    let _ = xato;
}`,
        output: String.raw`400 {"xato":"noto'g'ri so'rov"}`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Layer", "Vazifasi", "Crate"],
        rows: [
          ["<code>TraceLayer</code>", "So'rov logi va span", "tower-http"],
          ["<code>CorsLayer</code>", "Brauzer CORS sarlavhalari", "tower-http"],
          ["<code>CompressionLayer</code>", "gzip/brotli", "tower-http"],
          ["<code>TimeoutLayer</code>", "So'rov vaqti chegarasi", "tower-http"],
          ["<code>from_fn</code>", "O'z funksiyangiz", "axum"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Tracing",
        html: String.raw`<code>println!</code> o'rniga <code>tracing</code> ishlating: <code>tracing_subscriber::fmt().with_env_filter(...).init()</code> bilan daraja va filtr boshqariladi. <code>TraceLayer::new_for_http()</code> har so'rovga span ochadi. Xato javobida ichki tafsilotlarni (SQL, stack trace) foydalanuvchiga ko'rsatmang — ularni log'ga yozib, mijozga umumiy xabar bering.`,
      },
    ],
    quiz: [
      {
        q: "Middleware ichida Next::run nimani qiladi?",
        options: [
          "Serverni to'xtatadi",
          "Keyingi middleware yoki handlerga so'rovni uzatadi",
          "Yangi router yaratadi",
          "Faqat javobni qaytaradi, so'rovni yubormaydi",
        ],
        answer: 1,
        explain: "Next.run(req) zanjirning keyingi qismini bajaradi va Response qaytaradi; undan oldin/keyin log yoki sarlavha qo'shish mumkin.",
      },
      {
        q: "Custom xato turini HTTP javobga aylantirish uchun qaysi trait kerak?",
        options: ["Serialize", "Parser", "IntoResponse", "FromRow"],
        answer: 2,
        explain: "IntoResponse xato turini status kod, sarlavha va tanaga aylantiradi; handler Result<T, AppError> qaytarishi mumkin.",
      },
      {
        q: "TraceLayer nima uchun ishlatiladi?",
        options: [
          "So'rovlar bo'yicha tracing span va log yaratish",
          "Ma'lumotlar bazasiga ulanish",
          "JSON validatsiyasi",
          "Fayl yuklash",
        ],
        answer: 0,
        explain: "tower-http TraceLayer har so'rovga span ochib, metod, yo'l, status va davomiylikni tracing tizimiga yozadi.",
      },
    ],
  },
  {
    id: 83,
    title: "axum + SQLx: REST API",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`REST API'da har endpoint resurs ustida amal bajaradi: <code>GET</code> o'qish, <code>POST</code> yaratish, <code>PUT/PATCH</code> yangilash, <code>DELETE</code> o'chirish. SQLx so'rovlari handler ichida <code>State&lt;PgPool&gt;</code> orqali bajariladi. Muvaffaqiyatli yaratishda <code>201 Created</code>, topilmasa <code>404</code>, validatsiya xatosida <code>400/422</code> qaytaring. Javobni har doim tiplashtirilgan struct bilan bering.`,
      },
      {
        type: "code",
        title: "royxat.rs",
        code: String.raw`use axum::{extract::State, http::StatusCode, Json};
use serde::Serialize;

#[derive(Serialize, sqlx::FromRow)]
struct Dars {
    id: i64,
    nom: String,
}

async fn royxat(
    State(pool): State<sqlx::PgPool>,
) -> Result<Json<Vec<Dars>>, StatusCode> {
    let darslar = sqlx::query_as::<_, Dars>(
        "SELECT id, nom FROM darslar ORDER BY id",
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(Json(darslar))
}`,
        output: String.raw`[{"id":1,"nom":"Egallik"},{"id":2,"nom":"Borrowing"}]`,
        runnable: false,
      },
      {
        type: "code",
        title: "yaratish.rs",
        code: String.raw`use axum::{extract::State, http::StatusCode, Json};
use serde::Deserialize;

#[derive(Deserialize)]
struct Yangi {
    nom: String,
}

#[derive(serde::Serialize, sqlx::FromRow)]
struct Dars {
    id: i64,
    nom: String,
}

async fn yangi(
    State(pool): State<sqlx::PgPool>,
    Json(y): Json<Yangi>,
) -> Result<(StatusCode, Json<Dars>), StatusCode> {
    let dars = sqlx::query_as::<_, Dars>(
        "INSERT INTO darslar (nom) VALUES ($1) RETURNING id, nom",
    )
    .bind(&y.nom)
    .fetch_one(&pool)
    .await
    .map_err(|_| StatusCode::BAD_REQUEST)?;

    Ok((StatusCode::CREATED, Json(dars)))
}`,
        output: String.raw`201 Created
{"id":3,"nom":"Async"}`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Kod", "Ma'nosi", "Qachon"],
        rows: [
          ["200", "OK", "Muvaffaqiyatli o'qish"],
          ["201", "Created", "Yangi resurs yaratildi"],
          ["204", "No Content", "O'chirildi, tana yo'q"],
          ["400", "Bad Request", "Buzuq so'rov"],
          ["401", "Unauthorized", "Token yo'q yoki yaroqsiz"],
          ["403", "Forbidden", "Ruxsat yo'q"],
          ["404", "Not Found", "Resurs topilmadi"],
          ["409", "Conflict", "Unikallik buzildi"],
          ["500", "Server Error", "Kutilmagan xato"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "SQL injection va limitlar",
        html: String.raw`Qiymatlarni doim <code>.bind()</code> bilan bering, SQL matniga formatlab qo'shmang. Ro'yxat endpoint'iga <code>limit</code> va <code>offset</code> chegarasini qo'ying, aks holda millionlab qator xotirani tugatadi. <code>fetch_one</code> o'rniga topilmasligi mumkin bo'lgan joyda <code>fetch_optional</code> ishlatib, <code>404</code> qaytaring. Xato tafsilotlarini mijozga emas, log'ga yozing.`,
      },
    ],
    quiz: [
      {
        q: "Yangi resurs muvaffaqiyatli yaratilganda qaysi status kodi mos?",
        options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
        answer: 1,
        explain: "201 Created yangi resurs yaratilganini bildiradi; Location sarlavhasi bilan yangi resurs manzilini ham berish mumkin.",
      },
      {
        q: "PgPool ni State sifatida Clone qilish qanchalik qimmat?",
        options: [
          "Har safar yangi TCP ulanish ochiladi",
          "Butun baza nusxalanadi",
          "Clone taqiqlangan",
          "Arzon, chunki pool ichida Arc va ulanishlar almashiladi",
        ],
        answer: 3,
        explain: "PgPool kloni ichki Arc orqali bir xil hovuzni ko'rsatadi; har so'rovda yangi ulanish ochilmaydi.",
      },
      {
        q: "ID bo'yicha resurs topilmasa qaysi status qaytarish kerak?",
        options: ["404 Not Found", "500 Internal Server Error", "201 Created", "302 Found"],
        answer: 0,
        explain: "So'ralgan resurs mavjud bo'lmasa 404 mos; fetch_optional None bo'lsa shu kodni qaytaring.",
      },
    ],
  },
  {
    id: 84,
    title: "Web xavfsizligi: parol, JWT va testlash",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Parolni hech qachon ochiq saqlamang yoki shifrlamang — <b>hash</b> qiling. Argon2, bcrypt yoki scrypt sekin va tuzli hash beradi. <b>JWT</b> imzolangan token bo'lib, foydalanuvchi holatini stateless tekshirishga yordam beradi; imzo maxfiy kalit bilan tekshiriladi. HTTPS, CORS, rate limiting va xavfsiz cookie sozlamalari production uchun majburiy. Testlarda router'ni tarmoqsiz <code>tower::ServiceExt::oneshot</code> bilan chaqirish mumkin.`,
      },
      {
        type: "code",
        title: "argon2_hash.rs",
        code: String.raw`use argon2::password_hash::{rand_core::OsRng, SaltString};
use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier};

fn main() {
    let salt = SaltString::generate(&mut OsRng);
    let hash = Argon2::default()
        .hash_password(b"maxfiy", &salt)
        .unwrap()
        .to_string();

    println!("{}", hash.starts_with("$argon2"));

    let parsed = PasswordHash::new(&hash).unwrap();
    println!(
        "{}",
        Argon2::default()
            .verify_password(b"maxfiy", &parsed)
            .is_ok()
    );
}`,
        output: String.raw`true
true`,
        runnable: false,
      },
      {
        type: "code",
        title: "jwt.rs",
        code: String.raw`use jsonwebtoken::{encode, EncodingKey, Header};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Claims {
    sub: String,
    exp: usize,
}

fn main() {
    let claims = Claims {
        sub: "aziza".into(),
        exp: 2_000_000_000,
    };
    let token = encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(b"maxfiy"),
    )
    .unwrap();
    println!("{}", token.split('.').count());
}`,
        output: String.raw`3`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Xavf", "Himoya", "Eslatma"],
        rows: [
          ["Parol o'g'irlanishi", "Argon2 + tuz", "Har parolga alohida salt"],
          ["Token qalbakilashtirish", "Imzoni tekshirish", "Kalitni env'da saqlash"],
          ["CSRF", "SameSite cookie yoki token", "Holat o'zgartiruvchi so'rovlar"],
          ["XSS", "Chiqqan HTML'ni escape qilish", "CSP sarlavhasi"],
          ["Brute force", "Rate limit", "IP va akkaunt bo'yicha"],
          ["Ma'lumot oqishi", "HTTPS", "HSTS"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "JWT ni to'g'ri tekshiring",
        html: String.raw`<code>decode</code> chaqirganda <code>Validation</code> bilan algoritmni aniq belgilang va <code>exp</code> tekshiruvini yoqing. <code>none</code> algoritmiga yo'l qo'ymang. JWT ichidagi ma'lumot shifrlangan emas — faqat imzolangan; maxfiy narsani claims'ga yozmang. Token bekor qilish uchun qora ro'yxat yoki qisqa muddat + refresh token ishlatiladi.`,
      },
    ],
    quiz: [
      {
        q: "Parolni qanday saqlash to'g'ri?",
        options: [
          "Argon2 kabi sekin, tuzli hash bilan",
          "AES bilan shifrlab, kalitni kodda saqlash",
          "Ochiq matnda, lekin faqat admin ko'radi",
          "MD5 bilan tez hash qilib",
        ],
        answer: 0,
        explain: "Parol qaytarilmas hash bo'lishi kerak; Argon2 tuz va ish faktori bilan brute-force'ni qimmatlashtiradi. Shifrlash kalit oshkor bo'lsa parolni ochadi.",
      },
      {
        q: "JWT qabul qilishda eng muhim tekshiruv nima?",
        options: [
          "Token uzunligi",
          "JSON formatining chiroyli bo'lishi",
          "Imzo va algoritmning to'g'riligi",
          "Foydalanuvchi ismi katta harfda bo'lishi",
        ],
        answer: 2,
        explain: "Imzo maxfiy kalit bilan tekshirilmasa, token'ni istalgan odam o'zgartira oladi. Algoritmni aniq belgilash algoritm confusion hujumini oldini oladi.",
      },
      {
        q: "CORS nimani boshqaradi?",
        options: [
          "Serverdagi ma'lumotlar bazasi ulanishlarini",
          "Brauzerning boshqa origin'dan so'rov yuborish ruxsatini",
          "Parol hash algoritmini",
          "JWT token muddatini",
        ],
        answer: 1,
        explain: "CORS brauzer tomonidan qo'llaniladigan siyosat: qaysi origin, metod va sarlavhalar bilan API'ga murojaat qilish mumkinligini belgilaydi.",
      },
    ],
  },
];
