{
  id: 65,
  title: "ConcurrentHashMap va CopyOnWriteArrayList",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Oddiy <code>HashMap</code> va <code>ArrayList</code> bir vaqtda bir nechta oqim tomonidan o'zgartirilsa buziladi. <code>Collections.synchronizedMap</code> butun jadvalni bitta qulf bilan to'sadi. <code>ConcurrentHashMap</code> esa bucket darajasida atomik amallar beradi: <code>putIfAbsent</code>, <code>computeIfAbsent</code>, <code>merge</code>. <code>CopyOnWriteArrayList</code> har o'zgarishda massivning yangi nusxasini yaratadi — o'qish ko'p, yozish kam bo'lsa ideal.",
    },
    {
      type: "code",
      title: "ChmDemo.java",
      code: `import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ChmDemo {
    public static void main(String[] args) throws Exception {
        ConcurrentHashMap<String, Integer> hisob = new ConcurrentHashMap<>();
        ExecutorService pool = Executors.newFixedThreadPool(4);

        for (int t = 0; t < 4; t++) {
            pool.submit(() -> {
                for (int i = 0; i < 1000; i++) {
                    hisob.merge("klik", 1, Integer::sum);
                }
            });
        }

        pool.shutdown();
        pool.awaitTermination(5, TimeUnit.SECONDS);

        System.out.println("Klik: " + hisob.get("klik"));
        System.out.println("Kalitlar: " + hisob.keySet());
    }
}`,
      output: "Klik: 4000\nKalitlar: [klik]",
    },
    {
      type: "note",
      variant: "info",
      title: "merge nima qiladi?",
      html: "<code>merge(kalit, qiymat, funksiya)</code> kalit bo'lmasa qiymatni qo'yadi, bo'lsa eski va yangi qiymatni funksiya orqali birlashtiradi. Butun amal bucket qulfi ostida atomik bajariladi, shuning uchun <code>get</code> + <code>put</code> ketma-ketligidagi poyga yo'qoladi.",
    },
    {
      type: "code",
      title: "CowDemo.java",
      code: `import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class CowDemo {
    public static void main(String[] args) {
        List<String> obunachilar = new CopyOnWriteArrayList<>(
            List.of("Ali", "Vali", "Hasan")
        );

        for (String nom : obunachilar) {
            if (nom.equals("Vali")) {
                obunachilar.remove(nom);
                obunachilar.add("Dilnoza");
            }
        }

        System.out.println(obunachilar);
        System.out.println("Hajm: " + obunachilar.size());
        System.out.println("Vali bormi: " + obunachilar.contains("Vali"));
    }
}`,
      output: "[Ali, Hasan, Dilnoza]\nHajm: 3\nVali bormi: false",
    },
    {
      type: "ul",
      items: [
        "<code>ConcurrentHashMap</code> <code>null</code> kalit va qiymatni qabul qilmaydi — bu noaniqlikni oldini oladi.",
        "Iterator <b>weakly consistent</b>: u o'zgarishlar paytida ham ishlaydi, lekin snapshot kafolatlamaydi.",
        "CopyOnWriteArrayList'da yozish O(n), o'qish O(1); listener ro'yxatlari uchun mos.",
        "Murakkab bir necha qadamli amallar uchun <code>compute</code> yoki <code>computeIfAbsent</code> ishlatilsin — alohida get/put emas.",
      ],
    },
  ],
  quiz: [
    {
      q: "ConcurrentHashMap nega null kalitni qabul qilmaydi?",
      options: [
        "Xotira tejash uchun",
        "get natijasidagi null ni 'kalit yo'q' va 'qiymat null' deb ajratib bo'lmaydi",
        "HashMap ham qabul qilmaydi",
        "Faqat String kalitlar uchun",
      ],
      answer: 1,
      explain: "ConcurrentHashMap'da get null qaytarsa, bu kalit yo'qligini anglatishi kerak; null qiymat bu ma'noni buzadi, shuning uchun taqiqlangan.",
    },
    {
      q: "CopyOnWriteArrayList qaysi holatda afzal?",
      options: [
        "Tez-tez yozish va kam o'qish",
        "O'qish ko'p, yozish juda kam",
        "Faqat primitivlar bilan",
        "Saralash kerak bo'lganda",
      ],
      answer: 1,
      explain: "Har yozuv butun massivni nusxalaydi; o'qishlar esa qulfsiz va tez. Shuning uchun o'qish ustun bo'lgan ro'yxatlarda ishlatiladi.",
    },
    {
      q: "merge(\"klik\", 1, Integer::sum) qanday ishlaydi?",
      options: [
        "Faqat mavjud kalitni yangilaydi",
        "Kalit bo'lmasa 1 qo'yadi, bo'lsa eski qiymatga 1 qo'shadi",
        "Kalitni o'chiradi",
        "Har doim xato beradi",
      ],
      answer: 1,
      explain: "merge atomik ravishda kalit yo'qligini tekshiradi: yo'q bo'lsa berilgan qiymat, bor bo'lsa remapping funksiyasi natijasi saqlanadi.",
    },
  ],
},
{
  id: 66,
  title: "BlockingQueue va producer-consumer",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "<b>Producer-consumer</b> — eng ko'p uchraydigan parallellik naqshi: bir oqim vazifa yaratadi, boshqasi bajaradi. Ular orasidagi bufer <code>BlockingQueue</code> bo'lsa, to'la navbatda <code>put</code> kutadi, bo'sh navbatda <code>take</code> kutadi. Bu busy-wait va qo'lda <code>wait/notify</code> dan ancha xavfsiz.",
    },
    {
      type: "code",
      title: "NavbatDemo.java",
      code: `import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.LinkedBlockingQueue;

public class NavbatDemo {
    public static void main(String[] args) throws Exception {
        BlockingQueue<Integer> navbat = new LinkedBlockingQueue<>(10);
        ExecutorService pool = Executors.newFixedThreadPool(2);

        Future<Integer> istechi = pool.submit(() -> {
            int summa = 0;
            for (int i = 0; i < 5; i++) {
                summa += navbat.take();
            }
            return summa;
        });

        for (int i = 1; i <= 5; i++) {
            navbat.put(i);
        }

        System.out.println("Yig'indi: " + istechi.get());
        System.out.println("Navbat bo'sh: " + navbat.isEmpty());
        pool.shutdown();
    }
}`,
      output: "Yig'indi: 15\nNavbat bo'sh: true",
    },
    {
      type: "table",
      head: ["Metod", "Navbat to'la/bo'sh bo'lsa"],
      rows: [
        ["add / remove", "Darhol istisno tashlaydi"],
        ["offer / poll", "Darhol false yoki null qaytaradi"],
        ["put / take", "Cheksiz kutadi (interrupt bilan chiqish mumkin)"],
        ["offer(timeout) / poll(timeout)", "Belgilangan vaqt kutadi"],
      ],
    },
    {
      type: "code",
      title: "Quvur.java",
      code: `import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class Quvur {
    public static void main(String[] args) throws Exception {
        BlockingQueue<String> navbat = new ArrayBlockingQueue<>(2);

        navbat.put("A");
        navbat.put("B");
        System.out.println("To'ldi: " + navbat);

        System.out.println("Olindi: " + navbat.take());
        boolean qoshildi = navbat.offer("C");
        System.out.println("C qo'shildi: " + qoshildi);
        System.out.println("Qoldi: " + navbat);

        boolean ortiqcha = navbat.offer("D");
        System.out.println("D qo'shildi: " + ortiqcha);
        System.out.println("Hajm: " + navbat.size());
    }
}`,
      output: "To'ldi: [A, B]\nOlindi: A\nC qo'shildi: true\nQoldi: [B, C]\nD qo'shildi: false\nHajm: 2",
    },
    {
      type: "note",
      variant: "tip",
      title: "Poison pill",
      html: "Iste'molchi oqimini to'xtatish uchun navbatga maxsus <b>poison pill</b> qiymat qo'yiladi. Iste'molchi uni ko'rganda tsiklni tugatadi. Bu <code>interrupt</code> bilan birga ishlatilganda toza yopilish beradi; navbatdagi qolgan vazifalar yo'qolmaydi.",
    },
  ],
  quiz: [
    {
      q: "To'la navbatga put() chaqirilsa nima bo'ladi?",
      options: [
        "Darhol false qaytaradi",
        "Istisno tashlaydi",
        "Joy bo'shaguncha kutadi",
        "Navbatni tozalaydi",
      ],
      answer: 2,
      explain: "put() joy bo'shaguncha bloklaydi; offer() esa darhol false qaytaradi, add() esa IllegalStateException beradi.",
    },
    {
      q: "Bo'sh navbatdan take() chaqirilsa nima bo'ladi?",
      options: [
        "null qaytaradi",
        "Element paydo bo'lguncha kutadi",
        "NoSuchElementException beradi",
        "0 qaytaradi",
      ],
      answer: 1,
      explain: "take() bloklanadi va element qo'yilganda uni qaytaradi; poll() esa darhol null qaytaradi.",
    },
    {
      q: "Poison pill nima uchun ishlatiladi?",
      options: [
        "Navbatni tezlashtirish",
        "Iste'molchi oqimini nazoratli tugatish",
        "Xotirani tozalash",
        "Thread priority oshirish",
      ],
      answer: 1,
      explain: "Maxsus belgi iste'molchiga 'boshqa vazifa yo'q' deydi va u tsiklni xavfsiz tugatadi.",
    },
  ],
},
{
  id: 67,
  title: "Locklar: ReentrantLock va ReadWriteLock",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "<code>synchronized</code> oddiy va xavfsiz, lekin cheklangan: kutishni boshqarib bo'lmaydi, adolatli tartib yo'q, read/write ajratilmaydi. <code>ReentrantLock</code> <code>tryLock</code>, <code>lockInterruptibly</code>, <code>Condition</code> beradi. <code>ReentrantReadWriteLock</code> esa bir vaqtda ko'p o'quvchini kiritib, yozuvchilarni yakka tartibda o'tkazadi.",
    },
    {
      type: "code",
      title: "QulfDemo.java",
      code: `import java.util.concurrent.locks.ReentrantLock;

public class QulfDemo {
    private final ReentrantLock qulf = new ReentrantLock();
    private int balans = 100;

    void yech(int summa) {
        qulf.lock();
        try {
            if (summa <= balans) {
                balans -= summa;
                System.out.println("Yechildi: " + summa + ", qoldi: " + balans);
            } else {
                System.out.println("Mablag' yetarli emas: " + summa);
            }
        } finally {
            qulf.unlock();
        }
    }

    public static void main(String[] args) {
        QulfDemo hisob = new QulfDemo();
        hisob.yech(30);
        hisob.yech(80);
        hisob.yech(50);
        System.out.println("Oxirgi balans: " + hisob.balans);
    }
}`,
      output: "Yechildi: 30, qoldi: 70\nMablag' yetarli emas: 80\nYechildi: 50, qoldi: 20\nOxirgi balans: 20",
    },
    {
      type: "note",
      variant: "warning",
      title: "unlock finally ichida",
      html: "Qulfni <code>finally</code>da bo'shatmaslik deadlock'ga olib keladi. <code>lock()</code>dan keyingi birinchi qator <code>try</code> bo'lsin, <code>unlock()</code> esa <code>finally</code>da turishi shart. <code>tryLock()</code> esa qulfni olmasa ham darhol qaytadi — tarmoq yoki timeoutli ishlarda foydali.",
    },
    {
      type: "code",
      title: "Kesh.java",
      code: `import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class Kesh {
    private final Map<String, String> map = new HashMap<>();
    private final ReadWriteLock qulf = new ReentrantReadWriteLock();

    String ol(String kalit) {
        qulf.readLock().lock();
        try {
            return map.get(kalit);
        } finally {
            qulf.readLock().unlock();
        }
    }

    void qoy(String kalit, String qiymat) {
        qulf.writeLock().lock();
        try {
            map.put(kalit, qiymat);
        } finally {
            qulf.writeLock().unlock();
        }
    }

    int hajm() {
        qulf.readLock().lock();
        try {
            return map.size();
        } finally {
            qulf.readLock().unlock();
        }
    }

    public static void main(String[] args) {
        Kesh kesh = new Kesh();
        kesh.qoy("a", "1");
        kesh.qoy("b", "2");
        System.out.println(kesh.ol("a"));
        System.out.println(kesh.ol("x"));
        System.out.println(kesh.hajm());
    }
}`,
      output: "1\nnull\n2",
    },
    {
      type: "ul",
      items: [
        "ReentrantLock qayta kirishga ruxsat beradi: bir oqim qulfni bir necha marta olsa, shuncha marta bo'shatishi kerak.",
        "ReadWriteLock o'qish ko'p bo'lsa foyda beradi; yozish ustun bo'lsa oddiy lock yoki <code>StampedLock</code> o'lchab ko'riladi.",
        "Adolatli rejim (<code>new ReentrantLock(true)</code>) navbatni saqlaydi, lekin throughput pasayadi.",
        "Deadlock'ni oldini olish uchun qulflarni doim bir xil tartibda oling.",
      ],
    },
  ],
  quiz: [
    {
      q: "ReentrantLock'ni bo'shatish qayerda bo'lishi kerak?",
      options: ["try ichida", "finally ichida", "catch ichida", "Metod oxirida shartsiz"],
      answer: 1,
      explain: "Istisno yuz bersa ham qulf bo'shatilishi uchun unlock() finally blokida chaqiriladi.",
    },
    {
      q: "ReadWriteLock qanday afzallik beradi?",
      options: [
        "Yozuvchilarni cheksiz parallel qiladi",
        "Bir vaqtda bir nechta o'quvchiga ruxsat beradi",
        "Qulfni butunlay olib tashlaydi",
        "Faqat bitta oqimda ishlaydi",
      ],
      answer: 1,
      explain: "O'qish qulfi bir nechta oqimga birga kirishga ruxsat beradi; yozish qulfi esa yakka tartibda ishlaydi.",
    },
    {
      q: "tryLock() ning lock() dan farqi nima?",
      options: [
        "tryLock hech qachon bloklanmaydi",
        "tryLock faqat bir marta ishlaydi",
        "tryLock qulfni bo'shatadi",
        "Farqi yo'q",
      ],
      answer: 0,
      explain: "tryLock qulfni darhol olishga urinadi: muvaffaqiyatli bo'lsa true, bo'lmasa false qaytaradi va kutmaydi.",
    },
  ],
},
{
  id: 68,
  title: "Virtual threadlar: Java 21 yengil oqimlari",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "Platforma threadlari OS threadlariga bog'langan: ular qimmat, minglab ochish mumkin emas. <b>Virtual thread</b> (Java 21) JVM tomonidan boshqariladi, bloklanganda carrier threadni bo'shatadi. Shu tufayli yuz minglab virtual thread bilan I/O kutishni oddiy bloklovchi kod yozib boshqarish mumkin. Ular CPU-heavy parallel hisob uchun emas, <b>I/O-kutish</b> uchun.",
    },
    {
      type: "code",
      title: "VirtualDemo.java",
      code: `import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class VirtualDemo {
    public static void main(String[] args) throws Exception {
        Thread virtual = Thread.ofVirtual().name("virtual-1").start(() -> {
            System.out.println("Ism: " + Thread.currentThread().getName());
            System.out.println("Virtual: " + Thread.currentThread().isVirtual());
        });
        virtual.join();

        List<Future<String>> natijalar = new ArrayList<>();
        try (ExecutorService pool = Executors.newVirtualThreadPerTaskExecutor()) {
            for (int i = 1; i <= 3; i++) {
                int raqam = i;
                natijalar.add(pool.submit(() -> "Vazifa " + raqam));
            }
            for (Future<String> natija : natijalar) {
                System.out.println(natija.get());
            }
        }
        System.out.println("Tugadi");
    }
}`,
      output: "Ism: virtual-1\nVirtual: true\nVazifa 1\nVazifa 2\nVazifa 3\nTugadi",
    },
    {
      type: "note",
      variant: "info",
      title: "Pinning",
      html: "Virtual thread <code>synchronized</code> blokida yoki native metodda bloklansa, carrier threadni bo'shata olmaydi — bu <b>pinning</b>. Java 21'da <code>synchronized</code> pinning sabab bo'ladi; Java 24+ da bu muammo qisman hal qilindi. I/O kutishlar uchun <code>ReentrantLock</code> afzal.",
    },
    {
      type: "code",
      title: "KopVirtual.java",
      code: `import java.util.concurrent.atomic.AtomicInteger;

public class KopVirtual {
    public static void main(String[] args) throws Exception {
        AtomicInteger tugagan = new AtomicInteger();
        Thread[] oqimlar = new Thread[1000];

        for (int i = 0; i < oqimlar.length; i++) {
            oqimlar[i] = Thread.ofVirtual().start(() -> {
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                tugagan.incrementAndGet();
            });
        }

        for (Thread oqim : oqimlar) {
            oqim.join();
        }

        System.out.println("Tugagan: " + tugagan.get());
        System.out.println("Asosiy oqim virtual: " + Thread.currentThread().isVirtual());
    }
}`,
      output: "Tugagan: 1000\nAsosiy oqim virtual: false",
    },
    {
      type: "ul",
      items: [
        "Virtual threadlarni <b>hovuzga</b> solmang: har vazifa uchun yangi virtual thread yaratish odatiy.",
        "CPU-bound ish uchun <code>ForkJoinPool</code> yoki fixed platform pool mosroq.",
        "<code>Thread.ofVirtual()</code> bilan nom, factory va boshlash sozlanadi.",
        "<code>Executors.newVirtualThreadPerTaskExecutor()</code> try-with-resources bilan yopiladi va barcha vazifalarni kutadi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Virtual threadlar qaysi ish turi uchun eng mos?",
      options: [
        "Og'ir CPU hisoblari",
        "I/O kutishlari ko'p bo'lgan vazifalar",
        "Faqat GUI",
        "Faqat ma'lumotlar bazasi migratsiyasi",
      ],
      answer: 1,
      explain: "Virtual threadlar bloklanishda carrier threadni bo'shatadi; shu sababli tarmoq, fayl yoki DB kutishlarida katta foyda beradi.",
    },
    {
      q: "Thread.currentThread().isVirtual() virtual threadda nima qaytaradi?",
      options: ["false", "true", "null", "Thread turini"],
      answer: 1,
      explain: "isVirtual() virtual thread uchun true, platforma threadi uchun false qaytaradi.",
    },
    {
      q: "Virtual threadlarni pool qilish nega tavsiya etilmaydi?",
      options: [
        "Ular juda qimmat",
        "Ular yengil, har vazifaga yangi thread arzon",
        "Ular umuman ishlamaydi",
        "Pool faqat platform threadlar uchun",
      ],
      answer: 1,
      explain: "Virtual thread yaratish arzon; pool ularni cheklab, foydani yo'qotadi. Har vazifa uchun alohida virtual thread odatiy yondashuv.",
    },
  ],
},
{
  id: 69,
  title: "Structured concurrency va ScopedValue",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "<b>Structured concurrency</b> — bir vazifani parallel bo'laklarga bo'lib, ularning umrini bitta scope bilan bog'lash. Ota vazifa tugasa, bola vazifalar ham tugaydi yoki bekor qilinadi; xatolik bo'lsa qolganlari bekor qilinadi. <code>ScopedValue</code> esa thread-local o'rniga <b>o'zgarmas</b>, scope bilan cheklangan kontekst beradi. Ikkalasi Java 21'da preview.",
    },
    {
      type: "code",
      title: "Struktura.java",
      code: `import java.util.concurrent.StructuredTaskScope;
import java.util.concurrent.StructuredTaskScope.Subtask;

public class Struktura {
    static String foydalanuvchi() throws InterruptedException {
        Thread.sleep(20);
        return "Ali";
    }

    static String buyurtma() throws InterruptedException {
        Thread.sleep(10);
        return "Kitob";
    }

    public static void main(String[] args) throws Exception {
        try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
            Subtask<String> user = scope.fork(Struktura::foydalanuvchi);
            Subtask<String> order = scope.fork(Struktura::buyurtma);

            scope.join();
            scope.throwIfFailed();

            System.out.println(user.get() + " -> " + order.get());
        }
        System.out.println("Scope yopildi");
    }
}`,
      output: "Ali -> Kitob\nScope yopildi",
    },
    {
      type: "note",
      variant: "warning",
      title: "Preview API",
      html: "Java 21'da bu API preview: kompilyatsiya va ishga tushirishda <code>--enable-preview --release 21</code> kerak. Preview API keyingi versiyalarda o'zgarishi mumkin. Production'da ishlatishdan oldin JDK hujjatlarini tekshiring.",
    },
    {
      type: "code",
      title: "ScopedDemo.java",
      code: `import java.util.concurrent.ScopedValue;

public class ScopedDemo {
    static final ScopedValue<String> FOYDALANUVCHI = ScopedValue.newInstance();

    static void hisobot() {
        System.out.println("Foydalanuvchi: " + FOYDALANUVCHI.get());
        System.out.println("Bound: " + FOYDALANUVCHI.isBound());
    }

    public static void main(String[] args) {
        ScopedValue.where(FOYDALANUVCHI, "Ali").run(ScopedDemo::hisobot);
        System.out.println("Tashqarida bound: " + FOYDALANUVCHI.isBound());
    }
}`,
      output: "Foydalanuvchi: Ali\nBound: true\nTashqarida bound: false",
    },
    {
      type: "ul",
      items: [
        "<code>ShutdownOnFailure</code> birinchi xatolikda qolgan vazifalarni bekor qiladi; <code>ShutdownOnSuccess</code> birinchi muvaffaqiyatda.",
        "Structured concurrency thread leak'ni oldini oladi: scope yopilmasa bola vazifa qolmaydi.",
        "ScopedValue thread-local'dan farqli o'laroq o'zgarmas va virtual threadlarda xavfsiz.",
        "ScopedValue'ni parallel oqimlarga <code>ScopedValue.where(...).run(...)</code> orqali meros qilib berish mumkin.",
      ],
    },
  ],
  quiz: [
    {
      q: "StructuredTaskScope.ShutdownOnFailure nima qiladi?",
      options: [
        "Barcha vazifalarni darhol to'xtatadi",
        "Bitta vazifa xato bersa, qolganlarini bekor qiladi",
        "Faqat muvaffaqiyatli natijani qaytaradi",
        "Threadlarni hovuzga qaytaradi",
      ],
      answer: 1,
      explain: "ShutdownOnFailure birinchi xatolikdan keyin scope'dagi qolgan vazifalarni bekor qiladi va xatoni tashqi tomonga uzatadi.",
    },
    {
      q: "ScopedValue thread-local'ga nisbatan qanday afzallik beradi?",
      options: [
        "O'zgaruvchan va global",
        "O'zgarmas va scope bilan cheklangan",
        "Faqat String saqlaydi",
        "Threadni bloklaydi",
      ],
      answer: 1,
      explain: "ScopedValue qiymati scope ichida o'zgarmas bo'ladi va scope tugagach yo'qoladi; bu virtual threadlarda xavfsiz kontekst beradi.",
    },
    {
      q: "Structured concurrency qaysi muammoni hal qiladi?",
      options: [
        "Xotira yetishmasligi",
        "Boshqarilmay qolgan threadlar va tarqoq xatoliklar",
        "Fayl formatini",
        "SQL injection",
      ],
      answer: 1,
      explain: "Bola vazifalar ota scope bilan bog'lanadi: ularning tugashi, bekor qilinishi va xatolari markazlashgan tarzda boshqariladi.",
    },
  ],
},
