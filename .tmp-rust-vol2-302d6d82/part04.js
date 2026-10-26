module.exports = [
  {
    id: 65,
    title: "Send, Sync va oqim xavfsizligi",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>Send</b> — tur boshqa oqimga ko'chirilishi mumkinligini, <b>Sync</b> — unga bir vaqtda bir nechta oqimdan havola olish mumkinligini bildiruvchi auto trait. <code>Rc&lt;T&gt;</code> Send emas (hisoblagich atomik emas), <code>Cell&lt;T&gt;</code> Sync emas (ichki mutatsiya sinxron emas). <code>Arc&lt;T&gt;</code> esa shartli ravishda Send va Sync bo'ladi. Kompilyator bu xossalarni avtomatik xulosa qiladi.`,
      },
      {
        type: "code",
        title: "arc_threads.rs",
        code: String.raw`use std::sync::Arc;
use std::thread;

fn main() {
    let malumot = Arc::new(vec![1, 2, 3]);
    let mut handles = vec![];

    for i in 0..2 {
        let d = Arc::clone(&malumot);
        handles.push(thread::spawn(move || d.iter().sum::<i32>() + i));
    }

    let jami: i32 = handles.into_iter().map(|h| h.join().unwrap()).sum();
    println!("{jami}");
}`,
        output: String.raw`13`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Tur", "Send", "Sync", "Sabab"],
        rows: [
          ["<code>Rc&lt;T&gt;</code>", "Yo'q", "Yo'q", "Atomik bo'lmagan reference count"],
          ["<code>Arc&lt;T&gt;</code>", "T: Send + Sync bo'lsa", "T: Send + Sync bo'lsa", "Atomik reference count"],
          ["<code>Cell&lt;T&gt;</code>", "T: Send bo'lsa", "Yo'q", "Ichki mutatsiya sinxron emas"],
          ["<code>Mutex&lt;T&gt;</code>", "T: Send bo'lsa", "T: Send bo'lsa", "Qulf orqali bir vaqtda bitta kirish"],
          ["<code>AtomicUsize</code>", "Ha", "Ha", "Atomik operatsiyalar"],
        ],
      },
      {
        type: "code",
        title: "scoped_thread.rs",
        code: String.raw`use std::thread;

fn main() {
    let matn = String::from("xavfsiz");
    let n = thread::scope(|s| {
        let h = s.spawn(|| matn.len());
        h.join().unwrap()
    });
    println!("{n} {matn}");
}`,
        output: String.raw`7 xavfsiz`,
        runnable: false,
      },
      {
        type: "note",
        variant: "warning",
        title: "unsafe impl — katta mas'uliyat",
        html: String.raw`Ba'zi turlar uchun <code>unsafe impl Send for T {}</code> yozish mumkin, lekin bu kompilyatorga berilgan va'da: tur haqiqatan oqimlar orasida xavfsiz. Noto'g'ri va'da data race va xotira buzilishiga olib keladi. <code>thread::scope</code> esa 'static talab qilmasdan, scope tugaguncha havolalarni xavfsiz ishlatishga imkon beradi.`,
      },
    ],
    quiz: [
      {
        q: "Rc<T> nega boshqa oqimga yuborilmaydi?",
        options: [
          "U faqat stack'da yashaydi",
          "Uning reference count'i atomik emas",
          "U Clone bo'lmaydi",
          "Uning T turi doim Copy emas",
        ],
        answer: 1,
        explain: "Rc reference count oddiy usize bilan boshqariladi; ikki oqim bir vaqtda oshirsa yoki kamaytirsa, hisob buziladi. Shu sababli Rc !Send.",
      },
      {
        q: "Mutex<T> qachon Sync bo'ladi?",
        options: [
          "Har qanday T uchun",
          "Faqat T: Copy bo'lsa",
          "T: Send bo'lsa",
          "Faqat T: Sync bo'lsa",
        ],
        answer: 2,
        explain: "Mutex bir vaqtda bitta oqimga kirish beradi, shuning uchun T boshqa oqimga ko'chirilishi (Send) yetarli; T: Sync shart emas.",
      },
      {
        q: "unsafe impl Send yozish nimani anglatadi?",
        options: [
          "Kompilyator avtomatik tekshiradi",
          "Tur sekinroq ishlaydi",
          "Send cheklovi butunlay olib tashlanadi",
          "Dasturchi oqimlar orasida xavfsizlikni o'zi kafolatlaydi",
        ],
        answer: 3,
        explain: "unsafe impl kompilyator tekshiruvini chetlab o'tadi; xavfsizlik invariantsi to'liq dasturchi zimmasida qoladi.",
      },
    ],
  },
  {
    id: 66,
    title: "Arc, Mutex va RwLock amaliyotda",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Umumiy holat uchun <code>Arc&lt;Mutex&lt;T&gt;&gt;</code> klassik kombinatsiya: Arc egalikni oqimlar bo'ylab bo'lishadi, Mutex esa bir vaqtda bitta mutatsiyaga ruxsat beradi. <code>RwLock</code> ko'p o'quvchi yoki bitta yozuvchi rejimini beradi — o'qish ko'p bo'lsa foydali. Qulfni imkon qadar qisqa ushlang va qulflar tartibini bir xil saqlang, aks holda deadlock bo'ladi.`,
      },
      {
        type: "code",
        title: "hisoblagich.rs",
        code: String.raw`use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let hisob = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..4 {
        let h = Arc::clone(&hisob);
        handles.push(thread::spawn(move || {
            for _ in 0..1000 {
                *h.lock().unwrap() += 1;
            }
        }));
    }

    for h in handles {
        h.join().unwrap();
    }
    println!("{}", hisob.lock().unwrap());
}`,
        output: String.raw`4000`,
        runnable: false,
      },
      {
        type: "code",
        title: "rwlock.rs",
        code: String.raw`use std::sync::RwLock;

fn main() {
    let qulf = RwLock::new(vec![1, 2, 3]);
    {
        let r1 = qulf.read().unwrap();
        let r2 = qulf.read().unwrap();
        println!("{} {}", r1.len(), r2.len());
    }
    qulf.write().unwrap().push(4);
    println!("{}", qulf.read().unwrap().len());
}`,
        output: String.raw`3 3
4`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Primitiv", "Bir vaqtda", "Qachon"],
        rows: [
          ["<code>Mutex</code>", "Bitta kirish", "Mutatsiya tez-tez bo'lsa"],
          ["<code>RwLock</code>", "Ko'p o'quvchi yoki bitta yozuvchi", "O'qish ustun bo'lsa"],
          ["<code>AtomicUsize</code>", "Atomik operatsiya", "Oddiy hisoblagich"],
          ["<code>tokio::sync::Mutex</code>", "Async await bilan", "Kritik bo'limda await bo'lsa"],
          ["<code>parking_lot::Mutex</code>", "Tezroq, poisoning'siz", "Yuqori unumdorlik"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Deadlock va async",
        html: String.raw`Ikki qulfni turli tartibda olish deadlock yaratadi: A qulfini olib B ni kutayotgan oqim va B ni olib A ni kutayotgan oqim abadiy qoladi. Qulflarni doim bir tartibda oling. Async kodda <code>std::sync::MutexGuard</code>ni <code>.await</code> orqali ushlab turmang: guard Send bo'lmasligi mumkin va butun workerni bloklaydi. Bunday joyda <code>tokio::sync::Mutex</code> ishlating.`,
      },
    ],
    quiz: [
      {
        q: "RwLock qanday kirish rejimini beradi?",
        options: [
          "Bir vaqtda ko'p o'quvchi yoki bitta yozuvchi",
          "Bir vaqtda ko'p yozuvchi",
          "Faqat bitta o'quvchi",
          "Faqat atomik hisoblagich",
        ],
        answer: 0,
        explain: "RwLock o'qishlarni parallellashtiradi, yozuv esa eksklyuziv: yozuv paytida hech qanday o'quvchi bo'lmaydi.",
      },
      {
        q: "Mutex poisoning qachon yuz beradi?",
        options: [
          "Har lock() chaqiruvida",
          "Qulf egasi panic qilib, guard tushib qolganda",
          "Thread tugaganda",
          "Mutex Clone qilinganda",
        ],
        answer: 1,
        explain: "Agar guard ushlab turgan oqim panic qilsa, mutex poisoned bo'ladi va keyingi lock() Err qaytaradi; ma'lumot izchil bo'lmasligi mumkin.",
      },
      {
        q: "Nega std::sync::MutexGuard ni async await orqali ushlash xavfli?",
        options: [
          "Guard Clone bo'lmaydi",
          "Guard Send emas va worker oqimini bloklashi mumkin",
          "Guard xotirani ikki barobar egallaydi",
          "Guard lifetime'ni uzaytiradi",
        ],
        answer: 1,
        explain: "std MutexGuard odatda Send emas; await davomida ushlansa, future Send bo'lmay qoladi yoki boshqa tasklar bloklanadi. Async uchun tokio Mutex kerak.",
      },
    ],
  },
  {
    id: 67,
    title: "Atomics va lock-free asoslari",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>Atomik</b> operatsiyalar qulfsiz, bo'linmas tarzda bajariladi. <code>AtomicUsize</code>, <code>AtomicBool</code>, <code>AtomicPtr</code> kabi turlar mavjud. Ular <b>Ordering</b> bilan ishlaydi: <code>Relaxed</code> faqat atomiklikni, <code>Acquire/Release</code> esa oqimlar orasidagi ko'rinish tartibini ta'minlaydi. Lock-free kod yozish qiyin; avval oddiy Mutex bilan benchmark qiling.`,
      },
      {
        type: "code",
        title: "atomic_counter.rs",
        code: String.raw`use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;

fn main() {
    let c = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];

    for _ in 0..4 {
        let c = Arc::clone(&c);
        handles.push(thread::spawn(move || {
            for _ in 0..500 {
                c.fetch_add(1, Ordering::Relaxed);
            }
        }));
    }

    for h in handles {
        h.join().unwrap();
    }
    println!("{}", c.load(Ordering::SeqCst));
}`,
        output: String.raw`2000`,
        runnable: false,
      },
      {
        type: "code",
        title: "compare_exchange.rs",
        code: String.raw`use std::sync::atomic::{AtomicUsize, Ordering};

fn main() {
    let a = AtomicUsize::new(5);
    let natija = a.compare_exchange(5, 9, Ordering::AcqRel, Ordering::Acquire);
    println!("{:?} {}", natija, a.load(Ordering::SeqCst));

    let xato = a.compare_exchange(5, 1, Ordering::AcqRel, Ordering::Acquire);
    println!("{}", xato.is_err());
}`,
        output: String.raw`Ok(5) 9
true`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Ordering", "Kafolat", "Qayerda"],
        rows: [
          ["<code>Relaxed</code>", "Faqat atomiklik", "Hisoblagich, statistika"],
          ["<code>Acquire</code>", "Keyingi o'qishlar oldinga o'tmaydi", "Lock-free o'qish"],
          ["<code>Release</code>", "Oldingi yozuvlar keyinga o'tmaydi", "Ma'lumotni e'lon qilish"],
          ["<code>AcqRel</code>", "Ikkalasi (RMW uchun)", "compare_exchange"],
          ["<code>SeqCst</code>", "Global umumiy tartib", "Eng qat'iy, sekinroq"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "ABA muammosi",
        html: String.raw`<code>compare_exchange</code> qiymat A dan B ga o'zgarib, yana A ga qaytsa, eski holatni yangi deb qabul qilishi mumkin — bu <b>ABA</b> muammosi. Murakkab lock-free tuzilmalarda versiya hisoblagichi yoki tagged pointer ishlatiladi. Rust'da bunday kodni <code>unsafe</code> bilan yozishga to'g'ri keladi; Miri va loom kabi vositalar bilan tekshiring.`,
      },
    ],
    quiz: [
      {
        q: "Ordering::Relaxed qanday kafolat beradi?",
        options: [
          "Barcha oqimlar uchun qat'iy global tartib",
          "Faqat operatsiyaning atomikligini, tartib kafolatisiz",
          "Acquire va Release ikkalasini",
          "Hech qanday atomiklik bermaydi",
        ],
        answer: 1,
        explain: "Relaxed atomiklikni ta'minlaydi, lekin boshqa o'qish/yozuvlar bilan tartib munosabatini kafolatlamaydi.",
      },
      {
        q: "compare_exchange muvaffaqiyatsiz bo'lsa qanday natija qaytaradi?",
        options: [
          "panic",
          "false",
          "None",
          "Err(hozirgi_qiymat)",
        ],
        answer: 3,
        explain: "compare_exchange Result qaytaradi: Ok(eski qiymat) muvaffaqiyatda, Err(haqiqiy qiymat) mos kelmasa.",
      },
      {
        q: "Qaysi Ordering read-modify-write operatsiyasi uchun mos?",
        options: [
          "AcqRel",
          "Relaxed faqat",
          "Release faqat",
          "Acquire faqat",
        ],
        answer: 0,
        explain: "RMW amali ham o'qiydi, ham yozadi; shuning uchun Acquire va Release talablarini birlashtiruvchi AcqRel ishlatiladi.",
      },
    ],
  },
  {
    id: 68,
    title: "Xotira tartibi: repr, alignment va padding",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Rust struct maydonlarini <b>repr(Rust)</b> da qayta tartiblashi mumkin; bu xotirani tejaydi, lekin tartib kafolatlanmaydi. <b>repr(C)</b> maydonlarni e'lon tartibida saqlaydi va FFI uchun zarur. <b>repr(transparent)</b> bitta maydonli wrapper'ni ichki tur bilan bir xil joylashtiradi. <b>repr(packed)</b> padding'ni olib tashlaydi, lekin unaligned havola xavfi tug'diradi.`,
      },
      {
        type: "code",
        title: "layout.rs",
        code: String.raw`use std::mem::{align_of, size_of};

#[repr(C)]
struct C {
    a: u8,
    b: u32,
    c: u8,
}

#[repr(C, packed)]
struct P {
    a: u8,
    b: u32,
}

fn main() {
    println!("C: size={} align={}", size_of::<C>(), align_of::<C>());
    println!("P: size={} align={}", size_of::<P>(), align_of::<P>());
    println!("Option<&u8>: {}", size_of::<Option<&u8>>());
}`,
        output: String.raw`C: size=12 align=4
P: size=5 align=1
Option<&u8>: 8`,
        runnable: false,
      },
      {
        type: "code",
        title: "transparent.rs",
        code: String.raw`#[repr(transparent)]
struct Metr(f64);

fn main() {
    println!("{} {}", std::mem::size_of::<Metr>(), std::mem::size_of::<f64>());
    let m = Metr(2.5);
    println!("{:.1}", m.0);
}`,
        output: String.raw`8 8
2.5`,
        runnable: false,
      },
      {
        type: "table",
        head: ["repr", "Kafolat", "Ishlatilishi"],
        rows: [
          ["<code>Rust</code>", "Maydon tartibi kafolatlanmagan", "Oddiy ilova kodi"],
          ["<code>C</code>", "C tartibi va alignment", "FFI, binary format"],
          ["<code>transparent</code>", "Wrapper ichki tur bilan bir xil", "Newtype, FFI"],
          ["<code>u8</code> / <code>i32</code>", "Diskriminant turi", "Enum serializatsiyasi"],
          ["<code>packed</code>", "Padding yo'q", "Protokol paketlari, ehtiyotkorlik bilan"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Niche optimization",
        html: String.raw`<code>Option&lt;&amp;T&gt;</code> alohida teg saqlamaydi: null bo'lmagan havola qiymati <code>None</code> uchun ishlatiladi. Shuning uchun u <code>&amp;T</code> bilan bir xil hajmda. <code>Option&lt;Box&lt;T&gt;&gt;</code>, <code>Option&lt;NonZeroUsize&gt;</code> ham shunday. Bu Rust'ning nol narxli abstraksiyalaridan biri. packed struct maydoniga havola olish kompilyatsiya xatosi yoki noto'g'ri alignment beradi — qiymatni nusxalab oling.`,
      },
    ],
    quiz: [
      {
        q: "repr(C) qanday kafolat beradi?",
        options: [
          "Maydonlar C tartibida va C alignment qoidalarida joylashadi",
          "Struct har doim 8 bayt bo'ladi",
          "Barcha maydonlar heapga ko'chadi",
          "Padding butunlay olib tashlanadi",
        ],
        answer: 0,
        explain: "repr(C) maydon tartibini e'lon tartibida saqlaydi va platformaning C ABI alignment qoidalariga moslaydi; FFI uchun zarur.",
      },
      {
        q: "Padding nima uchun kerak?",
        options: [
          "Kodni sekinlashtirish uchun",
          "Xotirani sun'iy ko'paytirish uchun",
          "Maydonlarni alignment talabiga moslashtirish uchun",
          "Faqat debug buildda",
        ],
        answer: 2,
        explain: "Har bir tur o'z alignment'iga ega; maydonlar orasiga bo'sh baytlar qo'shilib, manzillar talabga moslanadi. Shu sababli struct hajmi maydonlar yig'indisidan katta bo'lishi mumkin.",
      },
      {
        q: "Option<&T> nega &T bilan bir xil hajmda bo'ladi?",
        options: [
          "Kompilyator Option'ni o'chiradi",
          "Havolaning null bo'lmagan qiymati None uchun niche sifatida ishlatiladi",
          "T doim Copy bo'ladi",
          "Option har doim 0 bayt",
        ],
        answer: 1,
        explain: "Havola null bo'la olmaydi, shuning uchun null qiymat None ni ifodalaydi; alohida diskriminant kerak emas.",
      },
    ],
  },
  {
    id: 69,
    title: "Unsafe Rust: raw pointer va invariantlar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>unsafe</b> Rust'ni o'chirmaydi: borrow checker baribir ishlaydi. U faqat beshta qo'shimcha imkoniyat beradi — raw pointer dereference, unsafe funksiya chaqirish, mutable static'ga kirish, union maydonini o'qish va unsafe trait implement qilish. Har bir unsafe blok oldida <b>safety comment</b> yozing: qaysi invariant bajarilganini tushuntiring.`,
      },
      {
        type: "code",
        title: "raw_pointer.rs",
        code: String.raw`fn main() {
    let x = 42;
    let p: *const i32 = &x;

    // Xavfsiz: p haqiqiy, initialized va x tirik.
    unsafe {
        println!("{}", *p);
    }
}`,
        output: String.raw`42`,
        runnable: false,
      },
      {
        type: "code",
        title: "split_mut.rs",
        code: String.raw`fn bolish<T>(s: &mut [T], i: usize) -> (&mut [T], &mut [T]) {
    let len = s.len();
    let ptr = s.as_mut_ptr();
    assert!(i <= len);

    // Xavfsiz: ikki slice bir-biriga tegmaydigan oraliqlarni qamraydi.
    unsafe {
        (
            std::slice::from_raw_parts_mut(ptr, i),
            std::slice::from_raw_parts_mut(ptr.add(i), len - i),
        )
    }
}

fn main() {
    let mut v = [1, 2, 3, 4];
    let (a, b) = bolish(&mut v, 2);
    println!("{:?} {:?}", a, b);
}`,
        output: String.raw`[1, 2] [3, 4]`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Imkoniyat", "Xavf", "Talab"],
        rows: [
          ["<code>*const T</code> / <code>*mut T</code> deref", "Osilib qolgan pointer", "Tirik, aligned, initialized"],
          ["<code>unsafe fn</code> chaqirish", "Invariant buzilishi", "Hujjatdagi shartlar"],
          ["<code>static mut</code>", "Data race", "Yaxshisi Atomic'ga almashtirish"],
          ["<code>union</code> maydoni", "Noto'g'ri tur talqini", "Faol variantni bilish"],
          ["<code>unsafe impl Send/Sync</code>", "Oqim xavfsizligi buzilishi", "To'liq isbot"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Miri bilan tekshiring",
        html: String.raw`Unsafe kod kompilyatsiyadan o'tsa ham noto'g'ri bo'lishi mumkin. <code>cargo +nightly miri test</code> alignment, aliasing va use-after-free kabi xatolarni topadi. <code>from_raw_parts_mut</code> uchun pointer tegishli allocation'dan bo'lishi, uzunlik chegarada bo'lishi va ikki slice kesishmasligi shart. Imkon bo'lsa unsafe'ni kichik, yaxshi testlangan wrapper ichiga yoping.`,
      },
    ],
    quiz: [
      {
        q: "unsafe blok borrow checker qoidalarini o'chiradimi?",
        options: [
          "Ha, butunlay",
          "Faqat lifetime tekshiruvini",
          "Faqat Send/Sync tekshiruvini",
          "Yo'q, faqat qo'shimcha xavfli amallarga ruxsat beradi",
        ],
        answer: 3,
        explain: "unsafe faqat beshta qo'shimcha imkoniyat beradi; egalik va borrowing qoidalari, turlar tekshiruvi avvalgidek qoladi.",
      },
      {
        q: "from_raw_parts_mut uchun qaysi shart noto'g'ri?",
        options: [
          "Pointer aligned bo'lishi kerak",
          "Uzunlik chegaradan oshmasligi kerak",
          "Xotira initialized bo'lishi kerak",
          "Pointer albatta heap'dan bo'lishi kerak",
        ],
        answer: 3,
        explain: "Pointer stack, heap yoki static xotiradan bo'lishi mumkin; muhimi — u tirik allocation'ga tegishli, aligned, initialized va uzunlik to'g'ri bo'lishi.",
      },
      {
        q: "Miri nimani tekshiradi?",
        options: [
          "Unsafe kodning xotira va aliasing qoidalarini",
          "Faqat kod formatini",
          "Cargo bog'liqlik versiyalarini",
          "HTTP endpoint javoblarini",
        ],
        answer: 0,
        explain: "Miri — Rust MIR interpretatori bo'lib, undefined behavior, alignment, aliasing va use-after-free kabi muammolarni test paytida aniqlaydi.",
      },
    ],
  },
];
