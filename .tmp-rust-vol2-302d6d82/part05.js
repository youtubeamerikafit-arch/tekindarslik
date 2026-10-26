module.exports = [
  {
    id: 70,
    title: "FFI: C kutubxonalari bilan integratsiya",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>FFI</b> (foreign function interface) Rust'ni C, C++ yoki tizim kutubxonalari bilan bog'laydi. <code>extern "C"</code> C ABI'dagi funksiyalarni e'lon qiladi; chaqirish <code>unsafe</code> blokda bo'ladi, chunki kompilyator tashqi kodning xavfsizligini tekshira olmaydi. Rust funksiyasini C ga eksport qilish uchun <code>extern "C"</code> va <code>#[no_mangle]</code> kerak. Turlar C ABI bilan mos bo'lishi shart.`,
      },
      {
        type: "code",
        title: "c_abs.rs",
        code: String.raw`use std::os::raw::c_int;

extern "C" {
    fn abs(x: c_int) -> c_int;
}

fn main() {
    let natija = unsafe { abs(-42) };
    println!("{natija}");
}`,
        output: String.raw`42`,
        runnable: false,
      },
      {
        type: "code",
        title: "eksport.rs",
        code: String.raw`#[no_mangle]
pub extern "C" fn qosh(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    println!("{}", qosh(20, 22));
}`,
        output: String.raw`42`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Rust", "C", "Eslatma"],
        rows: [
          ["<code>i32</code>", "<code>int32_t</code>", "Aniq o'lcham"],
          ["<code>std::os::raw::c_int</code>", "<code>int</code>", "Platformaga mos"],
          ["<code>usize</code>", "<code>size_t</code>", "O'lcham uchun"],
          ["<code>CString</code>", "<code>char*</code> (egalik)", "NUL bilan tugaydi"],
          ["<code>CStr</code>", "<code>const char*</code> (qarz)", "Tekshirilgan ko'rinish"],
          ["<code>c_void</code>", "<code>void*</code>", "Opaque pointer"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Edition 2024 va xavfsizlik",
        html: String.raw`Rust 2024 edition'da <code>extern</code> bloklari <code>unsafe extern "C"</code> bo'lishi va <code>#[no_mangle]</code> o'rniga <code>#[unsafe(no_mangle)]</code> yozilishi talab qilinadi. C funksiyasi null qaytarishi, xato kodlari va bufer hajmini har doim tekshiring. C tomonidan kelgan pointer'ni Rust egasi deb hisoblamang: kim free qilishini aniq hujjatlashtiring.`,
      },
    ],
    quiz: [
      {
        q: "extern \"C\" nimani belgilaydi?",
        options: [
          "Funksiya faqat C tilida yozilishini",
          "Kod C kompilyatorida build qilinishini",
          "C ABI, ya'ni chaqiruv konvensiyasi va nomlanish qoidalarini",
          "Rust borrow checker o'chirilishini",
        ],
        answer: 2,
        explain: "extern \"C\" C ABI'dan foydalanishni bildiradi: argumentlar va natija C qoidalarida uzatiladi, bu FFI uchun zarur.",
      },
      {
        q: "CString va CStr o'rtasidagi farq nima?",
        options: [
          "CString ega va NUL bilan tugaydi, CStr qarz olingan ko'rinish",
          "CStr ega, CString faqat havola",
          "Ikkalasi bir xil",
          "CString faqat Windows'da ishlaydi",
        ],
        answer: 0,
        explain: "CString o'z buferini egallaydi va oxirida NUL saqlaydi; CStr esa mavjud C satriga xavfsiz ko'rinish bo'lib, egasi emas.",
      },
      {
        q: "#[no_mangle] atributi nima qiladi?",
        options: [
          "Funksiyani inline qiladi",
          "Nomni o'zgartirmasdan eksport qiladi, C uni topa oladi",
          "Funksiyani private qiladi",
          "Xotirani tozalaydi",
        ],
        answer: 1,
        explain: "Rust nomlarni mangling qiladi; no_mangle C kutubxonasi kutilgan nomni saqlab qoladi. Edition 2024'da unsafe(no_mangle) ishlatiladi.",
      },
    ],
  },
  {
    id: 71,
    title: "bindgen, cbindgen va xavfsiz wrapper",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>bindgen</b> C header'lardan Rust binding'larini generatsiya qiladi; <b>cbindgen</b> esa Rust API'sidan C header yaratadi. Generatsiya qilingan kod odatda <code>unsafe</code> va C uslubidagi bo'ladi. Uni to'g'ridan-to'g'ri loyihaga tarqatmang: yupqa <b>safe wrapper</b> yozib, null tekshiruvi, lifetime va egalik qoidalarini markazlashtiring.`,
      },
      {
        type: "code",
        title: "safe_wrapper.rs",
        code: String.raw`use std::ffi::{CStr, CString};
use std::os::raw::c_char;

extern "C" {
    fn strlen(s: *const c_char) -> usize;
}

struct Matn(CString);

impl Matn {
    fn yangi(s: &str) -> Self {
        Self(CString::new(s).unwrap())
    }

    fn uzunlik(&self) -> usize {
        // Xavfsiz: CString NUL bilan tugaydi va o'z buferiga ega.
        unsafe { strlen(self.0.as_ptr()) }
    }
}

fn main() {
    let m = Matn::yangi("Rust FFI");
    println!("{}", m.uzunlik());
    let _ = CStr::from_bytes_with_nul(b"salom\0").unwrap();
}`,
        output: String.raw`8`,
        runnable: false,
      },
      {
        type: "code",
        title: "build.rs",
        code: String.raw`fn main() {
    println!("cargo:rerun-if-changed=wrapper.h");

    let bindings = bindgen::Builder::default()
        .header("wrapper.h")
        .parse_callbacks(Box::new(bindgen::CargoCallbacks::new()))
        .generate()
        .expect("bindings yaratilmadi");

    let out = std::path::PathBuf::from(std::env::var("OUT_DIR").unwrap());
    bindings
        .write_to_file(out.join("bindings.rs"))
        .expect("fayl yozilmadi");
}`,
        output: String.raw`cargo:rerun-if-changed=wrapper.h`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Vosita", "Yo'nalish", "Natija"],
        rows: [
          ["bindgen", "C header -> Rust", "extern bloklar, struct'lar"],
          ["cbindgen", "Rust -> C header", "Qo'lda yozilgan C interfeys"],
          ["cc crate", "C fayllarni build qilish", "Static library"],
          ["<code>#[link(name = "...")]</code>", "Tashqi kutubxonani bog'lash", "Linker direktivasi"],
          ["safe wrapper", "Unsafe API atrofida", "Tekshirilgan Rust interfeysi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Wrapper dizayni",
        html: String.raw`Wrapper'da <code>Drop</code> implement qilib, C resursini to'g'ri bo'shating. Null pointer'ni <code>Option&lt;NonNull&lt;T&gt;&gt;</code> ga aylantiring. C funksiyasi xato kodini qaytarsa, uni <code>Result</code> ga o'giring. Callback'lar uchun <code>extern "C"</code> funksiya va <code>user_data</code> pointer ishlatiladi; panic'ni FFI chegarasidan o'tkazmang — <code>catch_unwind</code> bilan to'xtating.`,
      },
    ],
    quiz: [
      {
        q: "bindgen qaysi yo'nalishda ishlaydi?",
        options: [
          "Rust kodidan C header yaratadi",
          "Rust binarni WASM ga aylantiradi",
          "C header'dan Rust binding'larini generatsiya qiladi",
          "SQL query'dan Rust struct yaratadi",
        ],
        answer: 2,
        explain: "bindgen C/C++ header'larni o'qib, Rust extern funksiyalar, struct va konstantalarini yaratadi. cbindgen esa teskari yo'nalishda ishlaydi.",
      },
      {
        q: "Nega CString ishlatiladi?",
        options: [
          "Unicode satrlarni tezroq qilish uchun",
          "C NUL bilan tugaydigan va egalik qilinadigan bufer kutgani uchun",
          "Faqat &str bilan ishlash uchun",
          "Xotirani tozalamaslik uchun",
        ],
        answer: 1,
        explain: "C API char* va NUL terminator kutadi; CString o'z buferini egallab, oxiriga NUL qo'yadi va pointer barqaror bo'ladi.",
      },
      {
        q: "Safe wrapper'ning asosiy vazifasi nima?",
        options: [
          "Unsafe shartlarni tekshirib, xavfsiz Rust interfeysi berish",
          "C kodini Rust'ga avtomatik o'girish",
          "Kompilyatsiyani tezlashtirish",
          "Barcha pointer'larni global qilish",
        ],
        answer: 0,
        explain: "Wrapper null, alignment, egalik va xato kodlarini tekshiradi; foydalanuvchi unsafe detallari bilan ishlamaydi.",
      },
    ],
  },
  {
    id: 72,
    title: "no_std va embedded Rust",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Mikrokontrollerlarda operatsion tizim va <code>std</code> bo'lmasligi mumkin. <code>#![no_std]</code> faqat <code>core</code> dan foydalanadi: matematika, slice, iterator, atomics mavjud, lekin fayl I/O va heap yo'q. Binary uchun <code>#[panic_handler]</code> va <code>#[no_main]</code> kerak. <b>embedded-hal</b> trait'lari turli chip'lar uchun portativ drayver yozishga imkon beradi.`,
      },
      {
        type: "code",
        title: "lib.rs (host test)",
        code: String.raw`#![cfg_attr(not(test), no_std)]

pub fn yigindi(qiymatlar: &[u16]) -> u32 {
    qiymatlar.iter().map(|&v| v as u32).sum()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn yigindi_ishlaydi() {
        assert_eq!(yigindi(&[10, 20, 12]), 42);
    }
}`,
        output: String.raw`test result: ok. 1 passed; 0 failed`,
        runnable: false,
      },
      {
        type: "code",
        title: "src/main.rs (Cortex-M)",
        code: String.raw`#![no_std]
#![no_main]

use cortex_m_rt::entry;
use defmt::info;
use defmt_rtt as _;
use panic_probe as _;

#[entry]
fn main() -> ! {
    info!("LED yondi");
    loop {}
}`,
        output: String.raw`0.000000 INFO  LED yondi`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Komponent", "Vazifasi", "Misol"],
        rows: [
          ["<code>core</code>", "std'siz asosiy kutubxona", "slice, Option, atomics"],
          ["<code>cortex-m-rt</code>", "Startup va vector table", "#[entry]"],
          ["<code>panic-halt</code>", "Panic paytida to'xtash", "Kichik binary"],
          ["<code>embedded-hal</code>", "GPIO, SPI, I2C trait'lari", "Portativ drayver"],
          ["<code>defmt</code> + RTT", "Log va debug", "Probe orqali o'qish"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Resurs cheklovlari",
        html: String.raw`Embedded'da heap odatda yo'q: <code>alloc</code> crate'i bilan allocator qo'shish mumkin, lekin fragmentatsiya xavfi bor. Katta buferlarni static yoki stack'da saqlang. <code>f32</code> operatsiyalari ba'zi chip'larda sekin yoki mavjud emas. Binary hajmini <code>cargo size</code> va <code>cargo bloat</code> bilan kuzatib boring; release profilida <code>opt-level = "z"</code> va LTO foydali.`,
      },
    ],
    quiz: [
      {
        q: "#![no_std] loyihasida qaysi crate mavjud bo'ladi?",
        options: ["std", "core", "alloc har doim", "tokio"],
        answer: 1,
        explain: "core har doim mavjud va platformadan mustaqil asosiy turlarni beradi. std yo'q; alloc faqat alohida allocator bilan qo'shiladi.",
      },
      {
        q: "no_std binary uchun nima majburiy?",
        options: [
          "Vec ishlatish",
          "main funksiyasi",
          "panic_handler va odatda no_main",
          "Tokio runtime",
        ],
        answer: 2,
        explain: "std panic infratuzilmasini bermaydi, shuning uchun #[panic_handler] kerak. Binary entry nuqtasi ham maxsus (#[entry] yoki no_main) bo'ladi.",
      },
      {
        q: "embedded-hal trait'lari nimani ta'minlaydi?",
        options: [
          "Turli mikrokontrollerlar uchun portativ drayver interfeysini",
          "Fayl tizimini",
          "HTTP serverni",
          "GUI widget'larni",
        ],
        answer: 0,
        explain: "embedded-hal GPIO, I2C, SPI kabi apparat imkoniyatlarini trait sifatida tavsiflaydi; drayver bir marta yozilib, turli chip'larda ishlaydi.",
      },
    ],
  },
  {
    id: 73,
    title: "WebAssembly: Rust brauzerda",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Rust'ni <code>wasm32-unknown-unknown</code> target'iga kompilyatsiya qilib, brauzerda ishga tushirish mumkin. <b>wasm-bindgen</b> Rust funksiyalari va JavaScript o'rtasida glue yaratadi: satrlar, massivlar va obyektlar chegarada konvertatsiya qilinadi. DOM'ga murojaat uchun <b>web-sys</b>, JS API'lari uchun <b>js-sys</b> ishlatiladi. <code>wasm-pack</code> build va paketlashni osonlashtiradi.`,
      },
      {
        type: "code",
        title: "src/lib.rs",
        code: String.raw`use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn faktorial(n: u32) -> u64 {
    (1..=n as u64).product()
}`,
        output: String.raw`faktorial(5) = 120`,
        runnable: false,
      },
      {
        type: "code",
        title: "console.rs",
        code: String.raw`use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn boshlash() {
    web_sys::console::log_1(&"WASM tayyor".into());
}`,
        output: String.raw`WASM tayyor`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Buyruq / crate", "Vazifasi", "Natija"],
        rows: [
          ["<code>wasm-pack build --target web</code>", "Build va JS glue", "<code>pkg/</code> papkasi"],
          ["<code>wasm-bindgen</code>", "Rust-JS interfeys", "Eksport/import"],
          ["<code>web-sys</code>", "DOM, fetch, console", "Brauzer API"],
          ["<code>wasm32-wasip1</code>", "Server-side WASM", "WASI runtime"],
          ["<code>wasm-opt -Oz</code>", "Hajmni optimallashtirish", "Kichikroq .wasm"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "WASM chegarasi",
        html: String.raw`Har bir JS-Rust chaqiruvi ma'lum narxga ega; kichik funksiyalarni minglab marta chaqirmang, ishni Rust ichida bajaring. Katta massivlarni nusxalash o'rniga <code>Uint8Array</code> va shared memory ishlatish mumkin. Panic xabarlari uchun <code>console_error_panic_hook</code> qo'shing. Brauzerda <code>wasm-opt</code> va gzip bilan hajmni sezilarli kamaytirish mumkin.`,
      },
    ],
    quiz: [
      {
        q: "Brauzerda ishlaydigan Rust uchun qaysi target ishlatiladi?",
        options: [
          "x86_64-unknown-linux-gnu",
          "wasm32-unknown-unknown",
          "thumbv7em-none-eabihf",
          "aarch64-apple-darwin",
        ],
        answer: 1,
        explain: "wasm32-unknown-unknown WebAssembly modulini yaratadi; brauzer uni JS bilan birga yuklaydi. wasm32-wasip1 esa server/WASI uchun.",
      },
      {
        q: "wasm-bindgen ning roli nima?",
        options: [
          "Faqat kodni minify qilish",
          "Rust va JavaScript o'rtasida tur va funksiya glue'sini yaratish",
          "Brauzerni avtomatik yangilash",
          "Server yaratish",
        ],
        answer: 1,
        explain: "wasm-bindgen eksport/import uchun wrapper va JS fayl yaratadi, satr va massivlarni chegarada to'g'ri konvertatsiya qiladi.",
      },
      {
        q: "DOM bilan ishlash uchun qaysi crate kerak?",
        options: ["web-sys", "serde", "clap", "sqlx"],
        answer: 0,
        explain: "web-sys brauzer Web API'larini (DOM, console, fetch) Rust binding'lari sifatida beradi; js-sys esa ECMAScript obyektlari uchun.",
      },
    ],
  },
  {
    id: 74,
    title: "Profiling va optimizatsiya",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Optimallashtirishdan oldin <b>o'lchang</b>. Release build, <code>cargo flamegraph</code>, <code>perf</code> yoki samply yordamida issiq yo'llarni toping. Ko'pincha vaqt allocation, ortiqcha clone yoki I/O'da ketadi. <code>black_box</code> benchmark'da optimizator ishni olib tashlashini oldini oladi. Har bir o'zgarishdan keyin benchmarkni qayta o'lchang.`,
      },
      {
        type: "code",
        title: "capacity.rs",
        code: String.raw`fn main() {
    let mut v = Vec::with_capacity(1000);
    for i in 0..1000 {
        v.push(i);
    }
    println!("{} {}", v.len(), v.capacity());
}`,
        output: String.raw`1000 1000`,
        runnable: false,
      },
      {
        type: "code",
        title: "black_box.rs",
        code: String.raw`use std::hint::black_box;
use std::time::Instant;

fn main() {
    let start = Instant::now();
    let mut sum = 0u64;
    for i in 0..1_000_000u64 {
        sum = sum.wrapping_add(black_box(i));
    }
    println!("{} {}", sum, start.elapsed().as_millis() < 1000);
}`,
        output: String.raw`499999500000 true`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Sozlama / vosita", "Ta'siri", "Eslatma"],
        rows: [
          ["<code>opt-level = 3</code>", "Agresiv optimizatsiya", "Release standarti"],
          ["<code>lto = "thin"</code>", "Crate'lararo inline", "Build vaqtini oshiradi"],
          ["<code>codegen-units = 1</code>", "Yaxshiroq optimizatsiya", "Sekinroq build"],
          ["<code>panic = "abort"</code>", "Kichikroq binary", "Panic ushlanmaydi"],
          ["<code>cargo flamegraph</code>", "Issiq funksiyalarni ko'rsatadi", "perf asosida"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Erta optimizatsiya",
        html: String.raw`Mikrooptimizatsiya ko'pincha umumiy tezlikni sezilarli oshirmaydi. Avval algoritm va ma'lumot tuzilmasini to'g'rilang: <code>HashMap</code> o'rniga massiv, ortiqcha <code>clone</code> o'rniga havola, <code>String</code> o'rniga <code>&amp;str</code>. Allokatsiyalarni kamaytirish uchun <code>Vec::with_capacity</code>, <code>SmallVec</code> yoki buferni qayta ishlatish foydali. O'lchovsiz "tezlashtirish" regressiya keltirishi mumkin.`,
      },
    ],
    quiz: [
      {
        q: "Release profilida LTO nimani yaxshilaydi?",
        options: [
          "Kompilyatsiya xatolarini",
          "Test qamrovini",
          "Crate'lararo inline va optimizatsiyani",
          "Xotira xavfsizligini kafolatlaydi",
        ],
        answer: 2,
        explain: "Link-time optimization butun dastur bo'ylab ko'rinish beradi, crate chegaralarida inline va dead code elimination imkonini oshiradi.",
      },
      {
        q: "Benchmark'da std::hint::black_box nima uchun kerak?",
        options: [
          "Optimizator natijani oldindan hisoblab, ishni olib tashlashining oldini olish uchun",
          "Kodni qora rangda chiqarish uchun",
          "Xatolarni yashirish uchun",
          "Faqat testlarda ishlaydi",
        ],
        answer: 0,
        explain: "black_box kompilyatorga qiymat noma'lum va yon ta'siri borligini bildiradi, shuning uchun o'lchanayotgan ish yo'qolmaydi.",
      },
      {
        q: "cargo flamegraph qanday ma'lumot beradi?",
        options: [
          "Test qamrovi foizini",
          "Dastur vaqtini funksiyalar bo'yicha taqsimlangan flame graph",
          "Cargo bog'liqlik daraxtini",
          "Binary hajmini",
        ],
        answer: 1,
        explain: "Flamegraph sampling profiler natijasini vizualizatsiya qiladi: kengroq bloklar ko'proq CPU vaqtini bildiradi.",
      },
    ],
  },
];
