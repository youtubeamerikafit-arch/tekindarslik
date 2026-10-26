module.exports = [
  {
    id: 55,
    title: "macro_rules! chuqur: fragmentlar, takrorlash va gigiyena",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Deklarativ makro naqsh bo'yicha kod generatsiya qiladi. <code>$x:expr</code> ifodani, <code>$t:ty</code> turni, <code>$i:ident</code> nomni, <code>$b:block</code> blokni tutadi. Takrorlash <code>$( ... )*</code>, <code>+</code> yoki <code>?</code> bilan, ajratuvchi esa <code>$(...),*</code> ko'rinishida yoziladi. Makro tanasida argumentni qavsga olish operatorlar ustuvorligini saqlaydi.`,
      },
      {
        type: "code",
        title: "jadval_makro.rs",
        code: String.raw`macro_rules! jadval {
    ($nom:ident, $($qiymat:expr),+ $(,)?) => {
        let $nom = vec![$($qiymat),+];
    };
}

fn main() {
    jadval!(sonlar, 3, 5, 8,);
    println!("{:?} {}", sonlar, sonlar.len());
}`,
        output: String.raw`[3, 5, 8] 3`,
        runnable: false,
      },
      {
        type: "code",
        title: "rekursiv_makro.rs",
        code: String.raw`macro_rules! yigindi {
    ($x:expr) => {
        $x
    };
    ($x:expr, $($qolgan:expr),+ $(,)?) => {
        $x + yigindi!($($qolgan),+)
    };
}

fn main() {
    let s = yigindi!(1, 2, 3, 4, 5);
    println!("{s}");
    println!("{}", yigindi!(10, 20));
}`,
        output: String.raw`15
30`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Fragment", "Qabul qiladi", "Misol"],
        rows: [
          ["<code>expr</code>", "Ifoda", "<code>a + b</code>"],
          ["<code>ty</code>", "Tur", "<code>Vec&lt;u8&gt;</code>"],
          ["<code>ident</code>", "Identifikator", "<code>sonlar</code>"],
          ["<code>pat</code>", "Pattern", "<code>Some(x)</code>"],
          ["<code>item</code>", "Element (fn, struct)", "<code>fn f() {}</code>"],
          ["<code>tt</code>", "Bitta token daraxti", "Moslashuvchan qabul"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Gigiyena va $crate",
        html: String.raw`Makro ichida yaratilgan nom tashqi kod nomi bilan tasodifan to'qnashmaydi — bu <b>gigiyena</b>. Boshqa crate ichida ishlatiladigan makroda esa yo'llarni <code>$crate::modul::funksiya</code> bilan yozing: shunda makro chaqirilgan joyda crate nomi qanday bo'lishidan qat'i nazar to'g'ri yo'l topiladi. Xato xabarlarini yaxshilash uchun murakkab mantiqni funksiyaga chiqaring.`,
      },
    ],
    quiz: [
      {
        q: "Tur qabul qiladigan makro fragmenti qaysi?",
        options: ["$x:expr", "$x:ident", "$x:ty", "$x:pat"],
        answer: 2,
        explain: "ty fragmenti tur sintaksisini qabul qiladi, masalan Vec<u8> yoki &'static str. expr esa ifodani oladi.",
      },
      {
        q: "Takrorlanuvchi fragmentlar orasida vergul qo'yish uchun qaysi yozuv ishlatiladi?",
        options: [
          "$($x:expr),*",
          "$($x:expr);+",
          "$[ $x:expr ]",
          "$x:expr...",
        ],
        answer: 0,
        explain: "$(...) ichidagi naqsh, undan keyingi , ajratuvchi, * esa nol yoki ko'p marta takrorlashni bildiradi.",
      },
      {
        q: "Makro gigiyenasi nimani kafolatlaydi?",
        options: [
          "Makro har doim inline bo'ladi",
          "Makro ichidagi nomlar tashqi kod nomlariga tasodifan ta'sir qilmaydi",
          "Makro faqat bitta crate ichida ishlaydi",
          "Makro xatolari kompilyatsiyani to'xtatmaydi",
        ],
        answer: 1,
        explain: "Gigiyena tufayli makro ichida yaratilgan vaqtinchalik nomlar chaqiruvchi kodning o'zgaruvchilarini soya qilmaydi yoki to'qnashmaydi.",
      },
    ],
  },
  {
    id: 56,
    title: "Procedural makrolar: derive macro yozish",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>Derive macro</b> <code>#[derive(Nom)]</code> yozuvini kodga aylantiradi. U alohida <code>proc-macro</code> crate'da yashaydi va <code>syn</code> bilan tokenlarni tahlil qilib, <code>quote</code> bilan yangi kod yaratadi. Derive faqat qo'shimcha <code>impl</code> qo'shadi; mavjud turni o'zgartirmaydi. Natija kompilyatsiya vaqtida oddiy Rust kodiga aylanadi, runtime narxi yo'q.`,
      },
      {
        type: "code",
        title: "qolda_ekvivalent.rs",
        code: String.raw`trait Tavsif {
    fn tur_nomi(&self) -> &'static str;
}

struct Foydalanuvchi;

impl Tavsif for Foydalanuvchi {
    fn tur_nomi(&self) -> &'static str {
        "Foydalanuvchi"
    }
}

fn main() {
    println!("{}", Foydalanuvchi.tur_nomi());
}`,
        output: String.raw`Foydalanuvchi`,
        runnable: false,
      },
      {
        type: "code",
        title: "macros/src/lib.rs",
        code: String.raw`use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(Tavsif)]
pub fn tavsif_derive(input: TokenStream) -> TokenStream {
    let ast = parse_macro_input!(input as DeriveInput);
    let nom = &ast.ident;
    quote! {
        impl #nom {
            pub fn tur_nomi(&self) -> &'static str {
                stringify!(#nom)
            }
        }
    }
    .into()
}`,
        output: String.raw`Foydalanuvchi`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Qadam", "Vazifa", "Misol"],
        rows: [
          ["1", "Crate turini belgilash", "<code>proc-macro = true</code>"],
          ["2", "Kirishni tahlil qilish", "<code>parse_macro_input!</code>"],
          ["3", "Nomlarni ajratish", "<code>ast.ident</code>"],
          ["4", "Kod shabloni", "<code>quote! { ... }</code>"],
          ["5", "Natijani qaytarish", "<code>.into()</code>"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Foydali yordamchilar",
        html: String.raw`Maydonlar ustida ishlash uchun <code>ast.data</code>ni <code>Data::Struct</code> ga moslang. Generik parametrlarni <code>ast.generics.split_for_impl()</code> bilan qo'shing, aks holda derive faqat generiksiz turlarda ishlaydi. Xatoni <code>syn::Error::new_spanned(...).to_compile_error()</code> orqali qaytarsangiz, foydalanuvchi aniq joyni ko'radi.`,
      },
    ],
    quiz: [
      {
        q: "Derive macro qanday kirish oladi?",
        options: [
          "Turni tavsiflovchi TokenStream",
          "Faqat String nomi",
          "Runtime'dagi obyekt",
          "JSON sxema",
        ],
        answer: 0,
        explain: "proc_macro_derive funksiyasi TokenStream oladi; uni syn orqali DeriveInput ga tahlil qilib, tur nomi, maydonlari va generiklari olinadi.",
      },
      {
        q: "quote! makrosining vazifasi nima?",
        options: [
          "Kodni kompilyatsiya qilish",
          "TokenStream ko'rinishida Rust kodi shabloni yaratish",
          "Xatolarni formatlash",
          "Cargo bog'liqliklarini yozish",
        ],
        answer: 1,
        explain: "quote! ichida #nom kabi interpolatsiya bilan Rust kodining token oqimi yaratiladi; u keyin TokenStream ga aylantiriladi.",
      },
      {
        q: "Procedural makro cratesida qanday crate turi ko'rsatiladi?",
        options: [
          "cdylib",
          "staticlib",
          "proc-macro",
          "bin",
        ],
        answer: 2,
        explain: "Cargo.toml da [lib] proc-macro = true bo'lishi shart; bunday crate faqat procedural makrolarni eksport qiladi va oddiy runtime kodini emas.",
      },
    ],
  },
  {
    id: 57,
    title: "Attribute va function-like procedural makrolar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Procedural makrolarning uch turi bor: <b>derive</b>, <b>attribute</b> va <b>function-like</b>. Attribute makro elementni (funksiya, struct, modul) o'rab, uni o'zgartirishi yoki qo'shimcha kod qo'shishi mumkin. Function-like makro esa <code>nom!(...)</code> chaqirig'ida tokenlarni qabul qiladi. Ikkalasi ham <code>TokenStream -&gt; TokenStream</code> ustida ishlaydi, faqat kirish nuqtasi farq qiladi.`,
      },
      {
        type: "code",
        title: "macros/src/lib.rs (function-like)",
        code: String.raw`use proc_macro::TokenStream;

#[proc_macro]
pub fn savol(input: TokenStream) -> TokenStream {
    let matn = input.to_string();
    let tozalangan = matn.trim_matches('"');
    format!("println!(\"Savol: {tozalangan}\");")
        .parse()
        .expect("token stream")
}`,
        output: String.raw`Savol: Rust qanday til?`,
        runnable: false,
      },
      {
        type: "code",
        title: "macros/src/lib.rs (attribute)",
        code: String.raw`use proc_macro::TokenStream;
use quote::quote;
use syn::ItemFn;

#[proc_macro_attribute]
pub fn nomi(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let funksiya = syn::parse_macro_input!(item as ItemFn);
    let nom = &funksiya.sig.ident;
    let nom_matn = nom.to_string();
    quote! {
        #funksiya
        pub fn chaqirilgan_nom() -> &'static str {
            #nom_matn
        }
    }
    .into()
}`,
        output: String.raw`salom`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Turi", "Belgilanishi", "Kirish"],
        rows: [
          ["Derive", "<code>#[proc_macro_derive(Nom)]</code>", "Bitta TokenStream"],
          ["Attribute", "<code>#[proc_macro_attribute]</code>", "Attr + element TokenStream"],
          ["Function-like", "<code>#[proc_macro]</code>", "Qavs ichidagi TokenStream"],
          ["Yordamchi crate", "<code>proc-macro2</code>, <code>syn</code>, <code>quote</code>", "Hostda test qilish uchun"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Xatolarni to'g'ri qaytaring",
        html: String.raw`Makro ichida <code>panic!</code> qilmang: foydalanuvchi tushunarsiz xato ko'radi. <code>syn::Error::new_spanned(token, "xabar").to_compile_error()</code> natijasini TokenStream ga qo'shing. Attribute makro asl elementni qaytarmasa, u yo'qoladi — shuning uchun <code>#funksiya</code>ni saqlashni unutmang.`,
      },
    ],
    quiz: [
      {
        q: "Attribute procedural makro qanday imzoga ega?",
        options: [
          "(TokenStream) -> TokenStream",
          "(TokenStream, TokenStream) -> TokenStream",
          "(String, TokenStream) -> String",
          "(DeriveInput) -> TokenStream",
        ],
        answer: 1,
        explain: "Birinchi TokenStream attribute argumentlari, ikkinchisi makro qo'llanilgan element; natija yana TokenStream bo'ladi.",
      },
      {
        q: "Function-like procedural makro qanday chaqiriladi?",
        options: [
          "#[nom]",
          "#[derive(Nom)]",
          "nom!(...)",
          "nom::<T>()",
        ],
        answer: 2,
        explain: "Function-like makro oddiy makro kabi nom!(...) sintaksisida chaqiriladi, lekin uni procedural crate implement qiladi.",
      },
      {
        q: "syn va quote crate'lari qanday rol o'ynaydi?",
        options: [
          "syn tokenlarni tahlil qiladi, quote kod shabloni yaratadi",
          "syn kodni ishga tushiradi, quote test yozadi",
          "Ikkalasi ham faqat Cargo uchun",
          "syn runtime xatolarini ushlaydi, quote ularni formatlaydi",
        ],
        answer: 0,
        explain: "syn Rust sintaksisini tahlil qilib struktura beradi; quote! esa o'sha strukturadan yangi Rust kodi tokenlarini yig'adi.",
      },
    ],
  },
  {
    id: 58,
    title: "cfg, feature flags va build.rs",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`<code>#[cfg(...)]</code> kodning faqat tanlangan platforma yoki xususiyat uchun kompilyatsiya qilinishini ta'minlaydi. <b>Feature</b>lar Cargo orqali yoqiladi va <b>additiv</b> — bir nechta crate bir xil feature'ni yoqsa, u umumiy buildda yoqilgan bo'ladi. <code>build.rs</code> esa build vaqtida kod ishga tushirib, environment o'zgaruvchilari yoki yo'llarni tayyorlaydi.`,
      },
      {
        type: "code",
        title: "platforma.rs",
        code: String.raw`fn platforma() -> &'static str {
    if cfg!(target_os = "windows") {
        "windows"
    } else if cfg!(target_os = "linux") {
        "linux"
    } else if cfg!(target_os = "macos") {
        "macos"
    } else {
        "boshqa"
    }
}

fn main() {
    println!("{}", platforma());
    println!("64-bit: {}", cfg!(target_pointer_width = "64"));
    println!("debug: {}", cfg!(debug_assertions));
}`,
        output: String.raw`windows
64-bit: true
debug: true`,
        runnable: false,
      },
      {
        type: "code",
        title: "feature.rs",
        code: String.raw`fn main() {
    let rejim = if cfg!(feature = "tez") {
        "tez"
    } else {
        "standart"
    };
    println!("rejim: {rejim}");
    println!("paket: {}", env!("CARGO_PKG_NAME"));
}`,
        output: String.raw`rejim: standart
paket: noldan-cfg`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Yozuv", "Ma'nosi", "Eslatma"],
        rows: [
          ["<code>#[cfg(test)]</code>", "Faqat test buildida", "Test modullari uchun"],
          ["<code>#[cfg(feature = "json")]</code>", "Feature yoqilganda", "Feature nomi Cargo.toml da bo'lishi kerak"],
          ["<code>cfg!(...)</code>", "Kompilyatsiya vaqtida bool", "Runtime shoxobasi emas"],
          ["<code>cargo:rerun-if-changed=...</code>", "build.rs qayta ishga tushish sharti", "Build script chiqishi"],
          ["<code>cargo:rustc-env=KALIT=qiymat</code>", "env! uchun o'zgaruvchi", "Maxfiy ma'lumot emas"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Feature'larni to'g'ri loyihalang",
        html: String.raw`Feature'lar additiv bo'lishi kerak: yoqilgan feature kodni buzmasligi, faqat qo'shimcha imkoniyat berishi lozim. Standart feature'ni <code>default = [...]</code> bilan e'lon qiling. Ixtiyoriy bog'liqlik uchun <code>dep:serde</code> sintaksisidan foydalaning. <code>build.rs</code> ichida tashqi tarmoqqa chiqmang va maxfiy kalitlarni yozmang.`,
      },
    ],
    quiz: [
      {
        q: "cfg!(target_os = \"linux\") qachon hisoblanadi?",
        options: [
          "Har safar dastur ishga tushganda",
          "Kompilyatsiya vaqtida boolean qiymat sifatida",
          "Faqat testlarda",
          "build.rs ichida runtime'da",
        ],
        answer: 1,
        explain: "cfg! makrosi kompilyatsiya vaqtida haqiqiy platformaga qarab true yoki false bilan almashtiriladi; runtime tekshiruvi qolmaydi.",
      },
      {
        q: "Cargo feature'larining additiv xususiyati nimani anglatadi?",
        options: [
          "Feature'lar bir-birini o'chira oladi",
          "Bir nechta crate yoqqan feature'lar birlashadi",
          "Har feature alohida binary yaratadi",
          "Feature faqat debug buildda ishlaydi",
        ],
        answer: 1,
        explain: "Feature'lar union kabi birlashadi; biror crate yoqsa, umumiy dependency buildida u yoqilgan hisoblanadi. Shu sababli feature kodni buzmasligi kerak.",
      },
      {
        q: "build.rs qaysi direktivani chiqarib, fayl o'zgarganda qayta ishga tushishni so'raydi?",
        options: [
          "cargo:rerun-if-changed=build.rs",
          "cargo:rebuild=always",
          "rustc:watch=build.rs",
          "build:rerun=true",
        ],
        answer: 0,
        explain: "cargo:rerun-if-changed=<yo'l> Cargo'ga qaysi fayllar o'zgarganda build scriptni qayta ishga tushirishni aytadi.",
      },
    ],
  },
  {
    id: 59,
    title: "thiserror va anyhow: xatolarni professional boshqarish",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Kutubxona yozayotganda aniq, tiplashtirilgan xato turlari kerak — buning uchun <b>thiserror</b>. Ilova yozayotganda esa turli xatolarni bitta oqimda yig'ish va kontekst qo'shish qulay — buning uchun <b>anyhow</b>. Ikkalasi ham <code>std::error::Error</code> bilan ishlaydi, lekin maqsadi farq qiladi. thiserror odatda <code>enum</code> uchun <code>Display</code> va <code>From</code> impl'larini generatsiya qiladi.`,
      },
      {
        type: "code",
        title: "thiserror_xato.rs",
        code: String.raw`use thiserror::Error;

#[derive(Debug, Error)]
enum Xato {
    #[error("fayl topilmadi: {0}")]
    Topilmadi(String),
    #[error("o'qish xatosi")]
    Oqish(#[from] std::io::Error),
}

fn main() {
    let e = Xato::Topilmadi("config.toml".into());
    println!("{e}");

    let io = std::io::Error::new(std::io::ErrorKind::Other, "disk");
    let e2 = Xato::Oqish(io);
    println!("{e2}");
}`,
        output: String.raw`fayl topilmadi: config.toml
o'qish xatosi`,
        runnable: false,
      },
      {
        type: "code",
        title: "anyhow_kontekst.rs",
        code: String.raw`use anyhow::{Context, Result};

fn son(s: &str) -> Result<i32> {
    s.parse::<i32>().context("son noto'g'ri")
}

fn main() {
    match son("42") {
        Ok(n) => println!("ok: {n}"),
        Err(e) => println!("xato: {e:#}"),
    }
    match son("abc") {
        Ok(n) => println!("ok: {n}"),
        Err(e) => println!("xato: {e:#}"),
    }
}`,
        output: String.raw`ok: 42
xato: son noto'g'ri: invalid digit found in string`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Mezon", "thiserror", "anyhow"],
        rows: [
          ["Maqsad", "Kutubxona API'si", "Ilova va CLI"],
          ["Xato turi", "Aniq enum/struct", "anyhow::Error (type-erased)"],
          ["Kontekst", "<code>#[error]</code> va source", "<code>.context()</code>, <code>.with_context()</code>"],
          ["Tekshirish", "<code>match</code> bilan variantlar", "Odatda <code>downcast_ref</code>"],
          ["Narxi", "Tipik nol runtime", "Kichik allocation bo'lishi mumkin"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Qatlamlar bo'yicha ajratish",
        html: String.raw`Ichki kutubxona thiserror bilan aniq xato bersin; yuqori qatlam (HTTP handler, CLI) uni anyhow bilan boyitib, foydalanuvchiga tushunarli xabar bersin. <code>?</code> operatori <code>From</code> orqali avtomatik konvertatsiya qiladi. Maxfiy ma'lumotlarni xato matniga qo'shmang: parol, token va to'liq SQL so'rovlar logda qolmasligi kerak.`,
      },
    ],
    quiz: [
      {
        q: "thiserror qaysi holat uchun ko'proq mos keladi?",
        options: [
          "Kutubxona uchun tiplashtirilgan xato API'si",
          "Tez prototip uchun barcha xatolarni bitta turga yig'ish",
          "Faqat async kod uchun",
          "Faqat CLI argumentlarini tahlil qilish uchun",
        ],
        answer: 0,
        explain: "thiserror aniq enum variantlari va Display/From impl'larini beradi; kutubxona foydalanuvchilari xatoni match qilib tekshira oladi.",
      },
      {
        q: "anyhow'dagi .context() nima qiladi?",
        options: [
          "Xatoni o'chiradi",
          "Asl xatoga qo'shimcha izoh qo'shib, sabab zanjirini saqlaydi",
          "Panic chaqiradi",
          "Xatoni String ga majburan aylantiradi va manbani yo'qotadi",
        ],
        answer: 1,
        explain: "context yangi kontekst qatlamini qo'shadi, asl xato esa source sifatida saqlanadi; {e:#} butun zanjirni chiqaradi.",
      },
      {
        q: "#[from] atributi nimani generatsiya qiladi?",
        options: [
          "Display implementatsiyasini",
          "Debug implementatsiyasini",
          "From<Manba> for Xato implementatsiyasini",
          "Clone implementatsiyasini",
        ],
        answer: 2,
        explain: "#[from] maydon turidan xato turiga From impl yaratadi; natijada ? operatori manba xatosini avtomatik konvert qiladi.",
      },
    ],
  },
];
