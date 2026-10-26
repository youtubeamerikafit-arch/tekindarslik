module.exports = [
  {
    id: 60,
    title: "Future trait va executor ichki tuzilishi",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`<code>async fn</code> darhol ishlamaydi: u <b>Future</b> qaytaradi. Future — <code>poll</code> metodi bo'lgan trait. Executor future'ni <b>poll</b> qiladi; tayyor bo'lmasa <code>Poll::Pending</code> qaytadi va <b>Waker</b> ro'yxatga olinadi. Ma'lumot kelganda Waker executor'ni uyg'otadi va u yana poll qiladi. Shu sababli async Rust'da alohida runtime (Tokio, async-std) kerak.`,
      },
      {
        type: "code",
        title: "future_impl.rs",
        code: String.raw`use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

struct Tayyor(u32);

impl Future for Tayyor {
    type Output = u32;

    fn poll(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        Poll::Ready(self.0)
    }
}

fn main() {
    let f = Tayyor(42);
    println!("size: {}", std::mem::size_of_val(&f));
}`,
        output: String.raw`size: 4`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Tushuncha", "Vazifasi", "Eslatma"],
        rows: [
          ["<code>Future::poll</code>", "Ishning bir qismini bajarish", "Tayyor bo'lmasa Pending"],
          ["<code>Poll::Ready(T)</code>", "Natija tayyor", "Future tugadi"],
          ["<code>Waker</code>", "Executorni uyg'otish", "Pending paytida saqlanadi"],
          ["<code>Pin&lt;&amp;mut Self&gt;</code>", "Self joyida qotishini kafolatlash", "Ichki havolalar xavfsiz"],
          ["<code>.await</code>", "Tayyor bo'lguncha kutish", "Sinxron bloklamaydi"],
        ],
      },
      {
        type: "code",
        title: "block_on.rs",
        code: String.raw`use futures::executor::block_on;

async fn qosh(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let natija = block_on(qosh(20, 22));
    println!("{natija}");
}`,
        output: String.raw`42`,
        runnable: false,
      },
      {
        type: "note",
        variant: "warning",
        title: "Async — bepul emas",
        html: String.raw`Async funksiya state machine'ga aylanadi; har <code>.await</code> holat saqlash nuqtasi. Future hajmi kompilyatsiya vaqtida ma'lum va odatda stack'da saqlanadi. <code>block_on</code> faqat bitta future'ni boshqaradi; ko'p vazifalar uchun executor (masalan Tokio) kerak. Async ichida <code>std::thread::sleep</code> kabi bloklovchi chaqiruv butun workerni to'xtatadi.`,
      },
    ],
    quiz: [
      {
        q: "Future::poll Poll::Pending qaytarsa, bu nimani anglatadi?",
        options: [
          "Future xato bilan tugadi",
          "Future hali tayyor emas va keyinroq yana poll qilinadi",
          "Future bekor qilindi",
          "Natija None ga teng",
        ],
        answer: 1,
        explain: "Pending — hozircha natija yo'q; future Waker orqali uyg'otilganda executor yana poll qiladi. Ready bo'lganda natija qaytadi.",
      },
      {
        q: "async fn qanday tur qaytaradi?",
        options: [
          "Darhol hisoblangan qiymat",
          "impl Future<Output = ...>",
          "Box<dyn Error>",
          "JoinHandle",
        ],
        answer: 1,
        explain: "async fn chaqirilganda tana ishlamaydi; u impl Future<Output = T> qaytaradi va faqat poll/await bilan ilgarilaydi.",
      },
      {
        q: "Waker'ning vazifasi nima?",
        options: [
          "Future'ni darhol bekor qilish",
          "Natijani diskka yozish",
          "Executorni future yana poll qilishga uyg'otish",
          "Lifetime'ni uzaytirish",
        ],
        answer: 2,
        explain: "Waker — executor bilan aloqa kanali: resurs tayyor bo'lganda u wake() chaqiradi va executor future'ni qayta poll qiladi.",
      },
    ],
  },
  {
    id: 61,
    title: "Tokio runtime: spawn, task va scheduling",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Tokio — eng keng tarqalgan async runtime. <code>#[tokio::main]</code> makrosi <code>main</code>ni runtime yaratib, <code>block_on</code> chaqiruvchi sinxron funksiyaga aylantiradi. <code>tokio::spawn</code> mustaqil <b>task</b> yaratadi; task future'dan farqli ravishda parallel rejalashtirilishi mumkin. Spawn qilingan future <code>Send + 'static</code> bo'lishi shart, chunki u boshqa oqimda bajarilishi mumkin.`,
      },
      {
        type: "code",
        title: "spawn.rs",
        code: String.raw`#[tokio::main]
async fn main() {
    let h = tokio::spawn(async {
        tokio::time::sleep(std::time::Duration::from_millis(10)).await;
        21 * 2
    });

    println!("natija: {}", h.await.unwrap());
}`,
        output: String.raw`natija: 42`,
        runnable: false,
      },
      {
        type: "p",
        html: String.raw`Runtime ikki asosiy rejimda ishlaydi: <b>multi_thread</b> (bir nechta worker oqimi) va <b>current_thread</b> (bitta oqim). Kichik CLI yoki testlarda current_thread yetarli va resurs tejamkor. Serverda multi_thread bir vaqtda ko'p ulanishga xizmat qiladi. <code>tokio::task::yield_now()</code> taskni ixtiyoriy ravishda boshqa tasklarga joy beradi.`,
      },
      {
        type: "code",
        title: "current_thread.rs",
        code: String.raw`#[tokio::main(flavor = "current_thread")]
async fn main() {
    let h = tokio::spawn(async { 7 });
    println!("natija: {}", h.await.unwrap());
    tokio::task::yield_now().await;
    println!("tugadi");
}`,
        output: String.raw`natija: 7
tugadi`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Sozlama", "Afzalligi", "Kamchiligi"],
        rows: [
          ["multi_thread", "CPU va I/O parallelizmi", "Ko'proq xotira va context switch"],
          ["current_thread", "Sodda, deterministik testlar", "Bir bloklovchi chaqiruv hammasini to'xtatadi"],
          ["<code>spawn</code>", "Mustaqil task, JoinHandle", "Send + 'static talab qiladi"],
          ["<code>spawn_blocking</code>", "Sinxron/CPU ish uchun alohida pool", "Cheklangan o'lcham, ortiqcha ishlatmaslik kerak"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "JoinHandle va xatolar",
        html: String.raw`<code>JoinHandle.await</code> <code>Result&lt;T, JoinError&gt;</code> qaytaradi: task panic qilsa yoki bekor qilinsa xato bo'ladi. Taskni bekor qilish uchun <code>handle.abort()</code> ishlatiladi. Runtime tashqarisida <code>tokio::spawn</code> chaqirsangiz panic bo'ladi — avval runtime kontekstiga kiring.`,
      },
    ],
    quiz: [
      {
        q: "tokio::spawn qabul qiladigan future qanday cheklovlarga ega?",
        options: [
          "Send + 'static",
          "Sync + Copy",
          "Faqat Unpin",
          "Faqat Output = ()",
        ],
        answer: 0,
        explain: "Spawn qilingan task boshqa oqimga ko'chirilishi va runtime'dan uzoq yashashi mumkin; shuning uchun future Send bo'lishi va 'static ma'lumotga ega bo'lishi kerak.",
      },
      {
        q: "JoinHandle ni await qilganda qanday tur olinadi?",
        options: [
          "Result<T, JoinError>",
          "T bevosita",
          "Option<T>",
          "Pin<Box<T>>",
        ],
        answer: 0,
        explain: "JoinHandle await natijasi Result bo'ladi: Ok(task natijasi) yoki Err(JoinError) agar task panic qilsa yoki bekor qilinsa.",
      },
      {
        q: "#[tokio::main] makrosi aslida nimaga aylanadi?",
        options: [
          "Yangi OS oqimi yaratishga",
          "Async main'ni sinxron main ichida runtime.block_on ga",
          "main'ni butunlay o'chirishga",
          "Har chaqiruvda yangi process ochishga",
        ],
        answer: 1,
        explain: "Makro runtime quradi va async tanani block_on orqali ishga tushiradigan sinxron main yaratadi.",
      },
    ],
  },
  {
    id: 62,
    title: "Tokio I/O, taymerlar va select!",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: String.raw`Tokio'ning kuchli tomoni — bir nechta async operatsiyani bir vaqtda kutish. <code>tokio::select!</code> birinchi tayyor bo'lgan shoxobchani bajaradi, qolgan future'larni tashlab yuboradi (bekor qiladi). <code>timeout</code> operatsiyaga vaqt chegarasi qo'yadi, <code>interval</code> esa davriy tick beradi. Tarmoq I/O uchun <code>AsyncReadExt</code> va <code>AsyncWriteExt</code> ishlatiladi.`,
      },
      {
        type: "code",
        title: "select.rs",
        code: String.raw`use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    tokio::select! {
        _ = sleep(Duration::from_millis(50)) => println!("taymer"),
        _ = sleep(Duration::from_millis(10)) => println!("tez"),
    }
}`,
        output: String.raw`tez`,
        runnable: false,
      },
      {
        type: "code",
        title: "timeout.rs",
        code: String.raw`use tokio::time::{timeout, Duration};

async fn sekin() -> &'static str {
    tokio::time::sleep(Duration::from_millis(100)).await;
    "tayyor"
}

#[tokio::main]
async fn main() {
    match timeout(Duration::from_millis(10), sekin()).await {
        Ok(v) => println!("{v}"),
        Err(_) => println!("vaqt tugadi"),
    }
}`,
        output: String.raw`vaqt tugadi`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Operator", "Natijasi", "Diqqat"],
        rows: [
          ["<code>select!</code>", "Birinchi tayyor shox", "Boshqa future'lar bekor qilinadi"],
          ["<code>select! { biased; ... }</code>", "Tartib bo'yicha tekshirish", "Deterministik tanlov"],
          ["<code>timeout(d, fut)</code>", "<code>Result&lt;T, Elapsed&gt;</code>", "Future tashlab yuboriladi"],
          ["<code>interval(d)</code>", "Davriy tick", "Sekin iste'molchida tick burst bo'lishi mumkin"],
          ["<code>AsyncReadExt::read</code>", "Baytlar soni", "0 — EOF"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Cancellation safety",
        html: String.raw`select! shoxobchasi tashlab yuborilganda future bekor qilinadi. Ba'zi future'lar bekor qilishga xavfsiz (sleep, mpsc recv), ba'zilari esa yo'q: tarmoqdan o'qishning yarmi bajarilgan bo'lsa, ma'lumot yo'qolishi mumkin. Bunday holatda o'qishni alohida taskka joylang yoki bufer holatini saqlang. Standart <code>interval</code> tick burst qiladi; kerak bo'lsa <code>MissedTickBehavior::Skip</code> tanlang.`,
      },
    ],
    quiz: [
      {
        q: "select! da bir nechta shox bir vaqtda tayyor bo'lsa, standart holatda nima bo'ladi?",
        options: [
          "Barcha shoxlar ketma-ket bajariladi",
          "Tasodifiy (yoki biased bo'lsa tartib bo'yicha) bittasi tanlanadi",
          "Kompilyatsiya xatosi chiqadi",
          "Eng katta natija qaytaradigan shox tanlanadi",
        ],
        answer: 1,
        explain: "Standart select! tayyor shoxlardan tasodifiy tanlaydi; biased qo'shilsa, yuqoridan pastga tartibda tekshiradi.",
      },
      {
        q: "tokio::time::timeout qanday tur qaytaradi?",
        options: [
          "Option<T>",
          "T bevosita",
          "Result<T, Elapsed>",
          "JoinHandle<T>",
        ],
        answer: 2,
        explain: "Timeout ichidagi future o'z vaqtida tugasa Ok(T), tugmasa Err(Elapsed) qaytadi.",
      },
      {
        q: "interval sekin iste'mol qilinsa, standart MissedTickBehavior qanday ishlaydi?",
        options: [
          "O'tkazib yuborilgan tick'larni burst qilib beradi",
          "Intervalni butunlay to'xtatadi",
          "Har tickni tashlab yuboradi",
          "Panic qiladi",
        ],
        answer: 0,
        explain: "Standart Burst rejimi o'tkazib yuborilgan tick'larni ketma-ket qaytaradi; Skip yoki Delay bilan boshqacha yo'l tutish mumkin.",
      },
    ],
  },
  {
    id: 63,
    title: "Streams: async iteratorlar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`<b>Stream</b> — async iterator: <code>poll_next</code> har chaqiriqda <code>Poll&lt;Option&lt;Item&gt;&gt;</code> qaytaradi. Oddiy <code>Iterator</code> sinxron, Stream esa kutishni talab qiladi. <code>futures::StreamExt</code> map, filter, take, buffer_unordered kabi adapterlarni beradi. Stream'lar ham dangasa: <code>next().await</code> yoki <code>for_each</code> kabi iste'molchi kerak.`,
      },
      {
        type: "code",
        title: "stream_yigindi.rs",
        code: String.raw`use futures::stream::{self, StreamExt};

#[tokio::main]
async fn main() {
    let oqim = stream::iter(vec![1, 2, 3, 4]);
    let yigindi: i32 = oqim
        .map(|x| x * 2)
        .filter(|x| futures::future::ready(*x % 4 == 0))
        .sum()
        .await;
    println!("{yigindi}");
}`,
        output: String.raw`12`,
        runnable: false,
      },
      {
        type: "code",
        title: "interval_stream.rs",
        code: String.raw`use tokio::time::{interval, Duration};
use tokio_stream::wrappers::IntervalStream;
use tokio_stream::StreamExt;

#[tokio::main]
async fn main() {
    let mut oqim = IntervalStream::new(interval(Duration::from_millis(10)));
    for _ in 0..3 {
        let _ = oqim.next().await;
        println!("tick");
    }
}`,
        output: String.raw`tick
tick
tick`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Tushuncha", "Iterator", "Stream"],
        rows: [
          ["Keyingi element", "<code>next() -&gt; Option&lt;T&gt;</code>", "<code>next().await -&gt; Option&lt;T&gt;</code>"],
          ["Poll metodi", "Yo'q", "<code>poll_next</code>"],
          ["Adapter", "map, filter", "map, filter, buffer_unordered"],
          ["Iste'molchi", "for, collect", "while let, for_each, collect"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Concurrency darajasini boshqarish",
        html: String.raw`<code>buffer_unordered(n)</code> bir vaqtda ko'pi bilan <code>n</code> ta future bajaradi va natijalarni kelgan tartibda beradi. Tartib muhim bo'lsa <code>buffered(n)</code> ishlating. Cheksiz <code>buffer_unordered</code> tashqi API'ga minglab so'rov yuborib, rate limitga urilishi mumkin — concurrency'ni har doim cheklang.`,
      },
    ],
    quiz: [
      {
        q: "Stream'ning asosiy metodi qaysi?",
        options: [
          "next() -> Option<T>",
          "poll_next -> Poll<Option<Item>>",
          "collect() -> Vec<T>",
          "await() -> T",
        ],
        answer: 1,
        explain: "Stream::poll_next async iteratorning yadrosi: Ready(Some(item)), Ready(None) yoki Pending qaytaradi.",
      },
      {
        q: "buffer_unordered(n) nimani cheklaydi?",
        options: [
          "Stream elementlari hajmini",
          "Bir vaqtda bajarilayotgan future'lar sonini",
          "Xotira buferining bayt hajmini",
          "Faqat xatolar sonini",
        ],
        answer: 1,
        explain: "buffer_unordered bir vaqtda ko'pi bilan n ta ichki future'ni bajaradi; natijalar tugash tartibida keladi.",
      },
      {
        q: "Stream'lar qachon ishlay boshlaydi?",
        options: [
          "Yaratilganda darhol",
          "Faqat collect chaqirilganda emas, iste'molchi poll qilganda",
          "Faqat runtime tugaganda",
          "Faqat spawn qilinganda",
        ],
        answer: 1,
        explain: "Stream dangasa: map/filter kabi adapterlar faqat yangi stream yaratadi, haqiqiy ish next yoki boshqa iste'molchi poll qilganda boshlanadi.",
      },
    ],
  },
  {
    id: 64,
    title: "Async kanallar va backpressure",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: String.raw`Tasklar o'rtasida ma'lumot uzatish uchun async kanallar ishlatiladi. <b>mpsc</b> — ko'p ishlab chiqaruvchi, bitta iste'molchi; chegaralangan kanal <code>send().await</code> orqali <b>backpressure</b> yaratadi: bufer to'lsa, yuboruvchi kutadi. <b>oneshot</b> bitta javob uchun, <b>broadcast</b> ko'p iste'molchiga nusxa, <b>watch</b> esa faqat oxirgi qiymatni saqlaydi.`,
      },
      {
        type: "code",
        title: "mpsc.rs",
        code: String.raw`use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel::<i32>(2);

    tokio::spawn(async move {
        for i in 1..=3 {
            tx.send(i).await.unwrap();
        }
    });

    let mut jami = 0;
    while let Some(v) = rx.recv().await {
        jami += v;
    }
    println!("jami: {jami}");
}`,
        output: String.raw`jami: 6`,
        runnable: false,
      },
      {
        type: "code",
        title: "watch.rs",
        code: String.raw`use tokio::sync::watch;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = watch::channel(10);
    tx.send(20).unwrap();

    rx.changed().await.unwrap();
    println!("qiymat: {}", *rx.borrow());
}`,
        output: String.raw`qiymat: 20`,
        runnable: false,
      },
      {
        type: "table",
        head: ["Kanal", "Ishlab chiqaruvchi", "Iste'molchi", "Xatti-harakati"],
        rows: [
          ["<code>mpsc</code>", "Ko'p", "Bitta", "Har xabar bir marta"],
          ["<code>oneshot</code>", "Bitta", "Bitta", "Bitta javob"],
          ["<code>broadcast</code>", "Ko'p", "Ko'p", "Har iste'molchi nusxa oladi"],
          ["<code>watch</code>", "Ko'p", "Ko'p", "Faqat oxirgi qiymat"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Cheksiz kanal — xotira xavfi",
        html: String.raw`<code>mpsc::unbounded_channel</code> hech qachon kutmaydi, lekin iste'molchi sekin bo'lsa xotira cheksiz o'sadi. Serverda har doim chegaralangan kanal va <code>send().await</code> afzal. <code>try_send</code> bufer to'lsa xato qaytaradi — bu holatni boshqaring. <code>tokio::sync::Mutex</code> ni faqat await nuqtalari orasida ushlash kerak bo'lganda ishlating.`,
      },
    ],
    quiz: [
      {
        q: "Chegaralangan mpsc kanalida bufer to'lgan bo'lsa, send().await nima qiladi?",
        options: [
          "Xabar yo'qoladi",
          "Panic qiladi",
          "Joy bo'shaguncha kutadi",
          "Kanalni avtomatik kengaytiradi",
        ],
        answer: 2,
        explain: "Bounded kanal backpressure beradi: send().await buferda joy bo'lmaguncha iste'molchini kutadi, xabar yo'qolmaydi.",
      },
      {
        q: "Qaysi kanal faqat oxirgi qiymatni saqlaydi?",
        options: ["mpsc", "broadcast", "watch", "oneshot"],
        answer: 2,
        explain: "watch kanali holatning oxirgi qiymatini saqlaydi; obunachi changed().await bilan yangilanishni kutadi.",
      },
      {
        q: "broadcast kanalida sekin iste'molchi buferdan ortda qolsa nima bo'ladi?",
        options: [
          "Eski xabarlar tashlab yuborilishi mumkin va lag xatosi qaytadi",
          "Barcha xabarlar cheksiz saqlanadi",
          "Kanal avtomatik yopiladi",
          "Yuboruvchi panic qiladi",
        ],
        answer: 0,
        explain: "Broadcast cheklangan buferga ega; iste'molchi sekin bo'lsa RecvError::Lagged oladi va eski xabarlar tashlab yuboriladi.",
      },
    ],
  },
];
