module.exports = [
  {
    id: 58,
    title: "GC logini o'qish va tuning qarorlari",
    minutes: 17,
    desc: "GC log yozuvlaridan pauza, allokatsiya va promotion haqida xulosa chiqarish.",
    blocks: [
      {
        type: "p",
        text: `GC sozlamalarini taxmin bilan o'zgartirish xavfli. Avval log yig'ish kerak: <code>-Xlog:gc*:file=gc.log:time,uptime,level,tags</code> har bir GC siklini vaqt, sabab va natija bilan yozadi. Logdan uchta narsani kuzatamiz: pauza, allokatsiya tezligi va old generationga o'tayotgan obyektlar.`,
      },
      {
        type: "h",
        text: "Pauzalarni yig'ish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.Locale;

public class GcLog {
    public static void main(String[] args) {
        String[] qatorlar = {
            "Pause Young (Normal) 12.4ms",
            "Pause Young (Concurrent Start) 8.1ms",
            "Pause Remark 2.5ms",
            "Pause Mixed 18.0ms"
        };
        double jami = 0;
        double engKatta = 0;
        for (String q : qatorlar) {
            String[] bolak = q.split(" ");
            double ms = Double.parseDouble(bolak[bolak.length - 1].replace("ms", ""));
            jami += ms;
            engKatta = Math.max(engKatta, ms);
        }
        System.out.printf(Locale.ROOT, "Jami pauza: %.1f ms%n", jami);
        System.out.printf(Locale.ROOT, "Eng katta: %.1f ms%n", engKatta);
        System.out.println("Pauzalar: " + qatorlar.length);
    }
}`,
        output: "Jami pauza: 41.0 ms\nEng katta: 18.0 ms\nPauzalar: 4",
      },
      {
        type: "p",
        text: `Jami pauza o'rtacha holatni ko'rsatadi, lekin foydalanuvchi uchun eng muhimi <b>eng katta pauza</b> va uning tez-tez takrorlanishi. 18 ms bir marta bo'lsa muammo emas; har soniyada 18 ms bo'lsa, throughput va javob vaqti sezilarli tushadi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Allokatsiya {
    public static void main(String[] args) {
        long mb = 600;
        long sekund = 60;
        System.out.println("Allokatsiya: " + (mb / sekund) + " MB/s");
        System.out.println("10 daqiqada: " + (mb / sekund * 600) + " MB");
        System.out.println("Chegara 512 MB/s: " + (mb / sekund < 512));
    }
}`,
        output:
          "Allokatsiya: 10 MB/s\n10 daqiqada: 6000 MB\nChegara 512 MB/s: true",
      },
      {
        type: "table",
        headers: ["Belgi", "Ehtimoliy sabab", "Amal"],
        rows: [
          ["Ko'p young GC, qisqa pauza", "Yuqori allokatsiya", "Obyekt yaratishni kamaytirish"],
          ["Old generation tez o'sadi", "Yuqori promotion yoki sizish", "Heap dump va retained size"],
          ["Tez-tez full GC", "Fragmentatsiya yoki juda kichik heap", "Heap va regionni tekshirish"],
          ["Uzun remark", "Katta tirik to'plam", "Heap hajmini qayta ko'rish"],
        ],
      },
      {
        type: "note",
        text: `Bir marta olingan log asosida qaror qabul qilmang. Kamida bir necha daqiqa, haqiqiy yuklama bilan yozuv yig'ing. O'zgarishdan keyin bir xil stsenariyda qayta o'lchang: p50 emas, p95 va p99 pauzalarga qarang.`,
      },
    ],
    quiz: [
      {
        q: "GC hodisalarini faylga batafsil yozish uchun qaysi bayroq ishlatiladi?",
        options: ["-Xmx2g", "-Xlog:gc*:file=gc.log", "-XX:-UseGCOverheadLimit", "-Xss2m"],
        answer: 1,
        explanation:
          "-Xlog:gc* barcha GC tegli hodisalarni yoqadi; file va time kabi bezaklar yozuvni tahlil qilishni osonlashtiradi.",
      },
      {
        q: "Old generationning tez o'sishi ko'pincha nimani bildiradi?",
        options: [
          "Metaspace tugaganini",
          "Obyektlar tez promotion bo'layotganini yoki xotira sizayotganini",
          "Thread stacklari juda katta ekanini",
          "JIT o'chirilganini",
        ],
        answer: 1,
        explanation:
          "Ko'p obyekt Survivor'dan old generationga o'tsa yoki ular bo'shatilmasa, old hudud tez to'ladi. Heap dump bilan tirik obyektlarni tekshirish kerak.",
      },
      {
        q: "GC sozlamasini o'zgartirgandan keyin qanday xulosa qilish to'g'ri?",
        options: [
          "Bir marta o'lchab, darhol ishlab chiqarishga chiqarish",
          "Faqat o'rtacha pauzaga qarab qaror qilish",
          "Log yozishni o'chirib, sezgi bilan baholash",
          "Xuddi shu yuklamada qayta o'lchab, p95/p99 pauzalarni solishtirish",
        ],
        answer: 3,
        explanation:
          "Tuning natijasi takrorlanadigan o'lchovga tayanishi kerak. Quyruq latensiyasi o'rtachadan muhimroq.",
      },
    ],
  },
  {
    id: 59,
    title: "Xotira sizishi va heap dump tahlili",
    minutes: 18,
    desc: "Sizishning tipik manbalari, retained size va reference turlari.",
    blocks: [
      {
        type: "p",
        text: `Xotira sizishi — obyekt endi kerak bo'lmasa ham, unga kuchli havola saqlanib qolishi. Natijada GC uni bo'shata olmaydi. Eng ko'p uchraydigan manbalar: static kolleksiyalar, yopilmagan listenerlar, thread hovuzidagi <code>ThreadLocal</code> va cheksiz kesh.`,
      },
      {
        type: "h",
        text: "Gistogrammadan eng katta egallovchini topish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Gistogramma {
    public static void main(String[] args) {
        String[] qatorlar = {
            "java.lang.String 120000 4800000",
            "java.util.HashMap$Node 80000 2560000",
            "uz.noldan.Cache 1 64000000"
        };
        String eng = "";
        long engBayt = 0;
        for (String q : qatorlar) {
            String[] b = q.split(" ");
            long bayt = Long.parseLong(b[2]);
            if (bayt > engBayt) {
                engBayt = bayt;
                eng = b[0];
            }
        }
        System.out.println("Eng katta: " + eng + " (" + engBayt + " bayt)");
        System.out.println("String nusxalari: 120000");
        System.out.println("Tahlil qilindi: " + qatorlar.length);
    }
}`,
        output:
          "Eng katta: uz.noldan.Cache (64000000 bayt)\nString nusxalari: 120000\nTahlil qilindi: 3",
      },
      {
        type: "p",
        text: `Gistogramma obyektlar sonini ko'rsatadi, ammo <b>retained size</b> muhimroq: bitta obyektni olib tashlasak, u bilan birga qancha xotira bo'shaydi. MAT yoki VisualVM dagi dominator tree aynan shu savolga javob beradi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.lang.ref.WeakReference;

public class Zaif {
    public static void main(String[] args) {
        WeakReference<String> kesh = new WeakReference<>("hisobot");
        System.out.println("oldin mavjud: " + (kesh.get() != null));
        kesh.clear();
        System.out.println("tozalangandan keyin: " + (kesh.get() == null));
    }
}`,
        output: "oldin mavjud: true\ntozalangandan keyin: true",
      },
      {
        type: "table",
        headers: ["Reference", "GC xatti-harakati", "Tipik ishlatish"],
        rows: [
          ["Strong", "Hech qachon avtomatik bo'shatilmaydi", "Oddiy maydonlar"],
          ["Soft", "Xotira bosimida bo'shatiladi", "Kesh"],
          ["Weak", "Keyingi GC da bo'shatiladi", "Metadata va listener"],
          ["Phantom", "Finalization signali", "Tozalash navbati"],
        ],
      },
      {
        type: "note",
        text: `<code>System.gc()</code> — bu faqat iltimos, kafolat emas. Ishlab chiqarishda heap dump'ni <code>-XX:+HeapDumpOnOutOfMemoryError</code> bilan yoqing va dump faylini konteyner tashqarisiga saqlang. Dump katta bo'lishi mumkin, shuning uchun joy va ruxsatlarni oldindan rejalashtiring.`,
      },
    ],
    quiz: [
      {
        q: "Qaysi holat xotira sizishiga eng tipik sabab?",
        options: [
          "Static kolleksiyaga cheksiz element qo'shish",
          "Metod ichida lokal int yaratish",
          "try-with-resources ishlatish",
          "Record obyektini qaytarish",
        ],
        answer: 0,
        explanation:
          "Static maydon butun ilova umri davomida yashaydi. Unga cheksiz qo'shilgan obyektlar GC uchun doim tirik qoladi.",
      },
      {
        q: "Retained size nimani o'lchaydi?",
        options: [
          "Faqat obyekt sarlavhasi hajmini",
          "Faqat klass fayli hajmini",
          "Obyekt olib tashlanganda bo'shaydigan umumiy xotirani",
          "Thread stack hajmini",
        ],
        answer: 2,
        explanation:
          "Retained size obyektning o'zi va faqat u orqali yetib boriladigan obyektlar egallagan xotirani hisobga oladi.",
      },
      {
        q: "WeakReference qachon bo'shatilishi mumkin?",
        options: [
          "Faqat dastur tugaganda",
          "Keyingi GC paytida, boshqa strong havola bo'lmasa",
          "Faqat qo'lda clear() chaqirilganda",
          "Hech qachon",
        ],
        answer: 1,
        explanation:
          "Weak reference GC uchun to'siq emas: obyektga boshqa kuchli havola bo'lmasa, keyingi GC uni bo'shatishi mumkin.",
      },
    ],
  },
  {
    id: 60,
    title: "Java Memory Model va happens-before",
    minutes: 18,
    desc: "Ko'rinish, tartiblash va volatile hamda final maydonlarning kafolatlari.",
    blocks: [
      {
        type: "p",
        text: `Java Memory Model (JMM) threadlar o'rtasida xotira o'zgarishlari qachon ko'rinishini belgilaydi. JMM <b>happens-before</b> munosabati orqali kafolat beradi: agar A hodisasi B dan oldin happens-before bo'lsa, A ning natijalari B da ko'rinadi.`,
      },
      {
        type: "h",
        text: "volatile ko'rinishni kafolatlaydi",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Korinish {
    static volatile boolean tayyor;

    public static void main(String[] args) throws Exception {
        Thread ishchi = new Thread(() -> {
            while (!tayyor) {
                // kutish
            }
            System.out.println("ko'rdi");
        });
        ishchi.start();
        Thread.sleep(50);
        tayyor = true;
        ishchi.join();
        System.out.println("tugadi");
    }
}`,
        output: "ko'rdi\ntugadi",
      },
      {
        type: "p",
        text: `<code>volatile</code> yozuvdan keyin o'qish yangi qiymatni ko'rishini kafolatlaydi va buyruqlarning o'zaro joy almashishini cheklaydi. Lekin u <b>atomarlik bermaydi</b>: <code>hisob++</code> uchta qadamdan iborat va ikki thread bir vaqtda bajarib, yangilanishni yo'qotishi mumkin.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.atomic.AtomicInteger;

public class Atomik {
    public static void main(String[] args) throws Exception {
        AtomicInteger hisob = new AtomicInteger();
        Runnable ish = () -> {
            for (int i = 0; i < 1000; i++) {
                hisob.incrementAndGet();
            }
        };
        Thread a = new Thread(ish);
        Thread b = new Thread(ish);
        a.start();
        b.start();
        a.join();
        b.join();
        System.out.println("hisob: " + hisob.get());
        System.out.println("kutilgan: 2000");
    }
}`,
        output: "hisob: 2000\nkutilgan: 2000",
      },
      {
        type: "table",
        headers: ["Hodisa", "Nimani kafolatlaydi"],
        rows: [
          ["Program order", "Bitta thread ichidagi tartib"],
          ["Monitor unlock -> lock", "Oldingi yozuvlar keyingi threadga ko'rinadi"],
          ["volatile write -> read", "Yozilgan qiymat va undan oldingi yozuvlar ko'rinadi"],
          ["Thread.start()", "Chaqiruvchining oldingi amallari yangi threadga ko'rinadi"],
          ["Thread.join()", "Tugagan threadning yozuvlari joiner'ga ko'rinadi"],
          ["final maydon", "To'g'ri konstruktorda safe publication"],
        ],
      },
      {
        type: "note",
        text: `Konstruktorda <code>this</code> ni boshqa threadga oshkor qilish xavfli: obyekt hali to'liq qurilmagan bo'lishi mumkin. Obyektni tayyorlab, keyin e'lon qiling. <code>final</code> maydonlar to'g'ri qurilganda barcha threadlarga ko'rinadi, lekin massiv ichidagi elementlar o'z-o'zidan immutable bo'lmaydi.`,
      },
    ],
    quiz: [
      {
        q: "volatile kalit so'zi qaysi xususiyatni kafolatlaydi?",
        options: [
          "Murakkab amalning atomarligini",
          "Deadlockning oldini olishni",
          "Yozuv va o'qish orasidagi ko'rinishni",
          "Threadlar sonini cheklashni",
        ],
        answer: 2,
        explanation:
          "volatile ko'rinish va tartib kafolatlarini beradi, ammo compound amallarni atomar qilmaydi.",
      },
      {
        q: "Qaysi juftlik happens-before munosabatini yaratadi?",
        options: [
          "Ikki oddiy o'zgaruvchini o'qish",
          "Bir monitorning unlock'i va boshqa threadning lock'i",
          "Ikki marta System.out.println",
          "Ikki threadni parallel start qilish",
        ],
        answer: 1,
        explanation:
          "Monitor unlock happens-before keyingi lock. Shu sababli synchronized blok oldingi thread yozgan holatni ko'radi.",
      },
      {
        q: "volatile int hisob uchun hisob++ amali nima uchun xavfli?",
        options: [
          "Chunki int juda kichik",
          "Chunki volatile faqat long uchun ishlaydi",
          "Chunki hisob++ kompilyatsiya qilinmaydi",
          "Chunki o'qish, qo'shish va yozish alohida, atomar emas",
        ],
        answer: 3,
        explanation:
          "Inkrement uch qadamdan iborat. Ikki thread bir xil eski qiymatni o'qib, biri ikkinchisining yozuvini bosib ketishi mumkin. AtomicInteger yoki synchronized kerak.",
      },
    ],
  },
  {
    id: 61,
    title: "Lock, Condition va producer-consumer",
    minutes: 18,
    desc: "ReentrantLock, Condition navbatlari va cheklangan bufer naqshi.",
    blocks: [
      {
        type: "p",
        text: `<code>synchronized</code> sodda, lekin cheklangan: vaqt chegarasi, adolat va bir nechta shart navbatlarini boshqarish qiyin. <code>ReentrantLock</code> bu imkoniyatlarni beradi. <code>Condition</code> esa bitta lock ichida alohida kutish navbatlarini yaratadi.`,
      },
      {
        type: "h",
        text: "Cheklangan bufer",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

public class Navbat {
    private final Deque<Integer> q = new ArrayDeque<>();
    private final int sigim;
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition boy = lock.newCondition();
    private final Condition bosh = lock.newCondition();

    Navbat(int sigim) {
        this.sigim = sigim;
    }

    void qoy(int x) throws InterruptedException {
        lock.lock();
        try {
            while (q.size() == sigim) boy.await();
            q.addLast(x);
            bosh.signalAll();
        } finally {
            lock.unlock();
        }
    }

    int ol() throws InterruptedException {
        lock.lock();
        try {
            while (q.isEmpty()) bosh.await();
            int x = q.removeFirst();
            boy.signalAll();
            return x;
        } finally {
            lock.unlock();
        }
    }

    public static void main(String[] args) throws Exception {
        Navbat n = new Navbat(1);
        Thread iste = new Thread(() -> {
            try {
                System.out.println("oldi: " + n.ol());
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        iste.start();
        n.qoy(7);
        iste.join();
        System.out.println("tugadi");
    }
}`,
        output: "oldi: 7\ntugadi",
      },
      {
        type: "p",
        text: `Bufer to'la bo'lsa producer <code>boy</code> shartida kutadi, bo'sh bo'lsa consumer <code>bosh</code> shartida kutadi. <code>while</code> bilan tekshirish shart, chunki thread uyg'onganda holat yana o'zgargan bo'lishi mumkin. Bu <b>spurious wakeup</b> va raqobat holatlaridan himoya qiladi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

public class Sinov {
    public static void main(String[] args) throws Exception {
        ReentrantLock lock = new ReentrantLock();
        if (lock.tryLock(100, TimeUnit.MILLISECONDS)) {
            try {
                System.out.println("qulf olindi");
            } finally {
                lock.unlock();
            }
        } else {
            System.out.println("qulf band");
        }
        System.out.println("qayta olinadimi: " + lock.tryLock());
        lock.unlock();
        System.out.println("holat: " + lock.isLocked());
    }
}`,
        output: "qulf olindi\nqayta olinadimi: true\nholat: false",
      },
      {
        type: "table",
        headers: ["Xususiyat", "synchronized", "ReentrantLock"],
        rows: [
          ["Vaqt bilan kutish", "Yo'q", "tryLock(timeout)"],
          ["Adolatli navbat", "Yo'q", "Fairness parametri"],
          ["Bir nechta shart", "wait/notify", "Bir nechta Condition"],
          ["Lockni bo'shatish", "Blokdan chiqishda", "finally da qo'lda"],
        ],
      },
      {
        type: "note",
        text: `Lockni <code>finally</code> ichida bo'shatishni unutmang, aks holda istisno butun tizimni bloklashi mumkin. <code>await()</code> lockni vaqtincha bo'shatadi va qaytgach uni yana egallaydi. Locklarni doim bir xil tartibda olish deadlock xavfini kamaytiradi.`,
      },
    ],
    quiz: [
      {
        q: "Condition.await() chaqirilganda lock bilan nima bo'ladi?",
        options: [
          "Lock butunlay yo'qoladi",
          "Lock boshqa threadga o'tadi va await qaytgach qayta olinadi",
          "Lock abadiy ushlab turiladi",
          "Lock o'rniga yangi thread yaratiladi",
        ],
        answer: 1,
        explanation:
          "await joriy lockni bo'shatadi, threadni kutish navbatiga qo'yadi va uyg'ongach lockni qayta egallaydi.",
      },
      {
        q: "tryLock(timeout) ning asosiy afzalligi nima?",
        options: [
          "Cheksiz kutishdan qochib, boshqa ishni davom ettirish imkonini beradi",
          "Lockni butunlay keraksiz qiladi",
          "Har doim adolatli navbat beradi",
          "Deadlockni avtomatik hal qiladi",
        ],
        answer: 0,
        explanation:
          "tryLock vaqt chegarasi bilan urinadi. U olmasa, thread bloklanmasdan alternativa tanlashi mumkin.",
      },
      {
        q: "Producer-consumer da kutishni nima uchun while bilan tekshirish kerak?",
        options: [
          "Kod chiroyli ko'rinishi uchun",
          "Chunki Condition faqat while ichida ishlaydi",
          "Chunki signal faqat bir marta keladi",
          "Chunki uyg'onganda holat boshqa thread tomonidan o'zgargan bo'lishi mumkin",
        ],
        answer: 3,
        explanation:
          "Spurious wakeup yoki boshqa consumer oldin olib ketishi mumkin. while shartni qayta tekshirib, noto'g'ri davom etishning oldini oladi.",
      },
    ],
  },
  {
    id: 62,
    title: "ReadWriteLock, StampedLock va optimistik o'qish",
    minutes: 17,
    desc: "Ko'p o'qiladigan holatlar uchun lock strategiyalari va stamp validatsiyasi.",
    blocks: [
      {
        type: "p",
        text: `Agar ma'lumot ko'p o'qilib, kam yozilsa, har bir o'qishni eksklyuziv bloklash ortiqcha. <code>ReentrantReadWriteLock</code> bir vaqtda bir nechta o'quvchini qabul qiladi, yozuvchi esa yakka holda ishlaydi. <code>StampedLock</code> bundan ham ilg'or: optimistik o'qish lock olmasdan urinish imkonini beradi.`,
      },
      {
        type: "h",
        text: "Optimistik o'qish va validatsiya",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.locks.StampedLock;

public class Optimistik {
    public static void main(String[] args) {
        StampedLock lock = new StampedLock();
        int x = 10;

        long stamp = lock.tryOptimisticRead();
        int oqilgan = x;
        System.out.println("stamp haqiqiy: " + lock.validate(stamp));

        long yozish = lock.writeLock();
        try {
            x = 20;
        } finally {
            lock.unlockWrite(yozish);
        }

        System.out.println("endi haqiqiy: " + lock.validate(stamp));
        System.out.println("o'qilgan: " + oqilgan + ", yangi: " + x);
    }
}`,
        output:
          "stamp haqiqiy: true\nendi haqiqiy: false\no'qilgan: 10, yangi: 20",
      },
      {
        type: "p",
        text: `Optimistik o'qish paytida hech qanday lock olinmaydi, faqat stamp olinadi. O'qishdan keyin <code>validate(stamp)</code> tekshiriladi. Agar orada yozuv bo'lgan bo'lsa, stamp yaroqsiz bo'ladi va o'qishni qayta bajarish kerak. Bu naqsh faqat qisqa, yon ta'sirsiz o'qishlar uchun mos.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.locks.ReentrantReadWriteLock;

public class Rw {
    public static void main(String[] args) {
        ReentrantReadWriteLock rw = new ReentrantReadWriteLock();
        rw.readLock().lock();
        rw.readLock().lock();
        System.out.println("read hold: " + rw.getReadHoldCount());
        rw.readLock().unlock();
        rw.readLock().unlock();

        rw.writeLock().lock();
        try {
            System.out.println("write locked: " + rw.isWriteLocked());
        } finally {
            rw.writeLock().unlock();
        }
        System.out.println("read hold oxiri: " + rw.getReadHoldCount());
    }
}`,
        output:
          "read hold: 2\nwrite locked: true\nread hold oxiri: 0",
      },
      {
        type: "table",
        headers: ["Lock", "Afzalligi", "Cheklovi"],
        rows: [
          ["ReentrantReadWriteLock", "Ko'p o'quvchi, reentrant", "Yozuvchi ochlikka tushishi mumkin"],
          ["StampedLock", "Optimistik o'qish", "Reentrant emas, Condition yo'q"],
          ["synchronized", "Sodda va ishonchli", "Ham o'qish, ham yozuv eksklyuziv"],
        ],
      },
      {
        type: "note",
        text: `StampedLock da lockni ushlab turgan thread uni qayta ololmaydi. Optimistik o'qish natijasini yozish yoki uzoq hisob-kitob qilish uchun ishlatmang: validatsiya muvaffaqiyatsiz bo'lsa, bajarilgan ish behuda ketadi.`,
      },
    ],
    quiz: [
      {
        q: "StampedLock da optimistik o'qishdan keyin nima qilinadi?",
        options: [
          "Stamp darhol unutiladi",
          "validate(stamp) bilan yozuv bo'lmaganini tekshirish",
          "Lock butunlay yopiladi",
          "Yangi thread yaratiladi",
        ],
        answer: 1,
        explanation:
          "tryOptimisticRead stamp qaytaradi. O'qishdan keyin validate orqali orada eksklyuziv yozuv bo'lmaganiga ishonch hosil qilinadi.",
      },
      {
        q: "StampedLock haqida qaysi fikr to'g'ri?",
        options: [
          "U reentrant va Condition beradi",
          "U faqat bitta thread uchun ishlaydi",
          "U har doim synchronized dan sekin",
          "U reentrant emas va Condition bermaydi",
        ],
        answer: 3,
        explanation:
          "StampedLock oddiy va tez bo'lish uchun reentrantlik va Condition kabi imkoniyatlardan voz kechadi.",
      },
      {
        q: "ReadWriteLock qanday holatda foydali?",
        options: [
          "O'qishlar yozuvlardan sezilarli ko'p bo'lganda",
          "Faqat bitta thread bo'lganda",
          "Har doim, hatto yozuv ko'p bo'lsa ham",
          "Faqat IO amallarida",
        ],
        answer: 0,
        explanation:
          "Ko'p o'quvchi parallel ishlashi mumkin, yozuvchi esa eksklyuziv. Yozuvlar ko'p bo'lsa, oddiy lock yoki boshqa yondashuv soddaroq bo'lishi mumkin.",
      },
    ],
  },
  {
    id: 63,
    title: "Concurrent kolleksiyalar va BlockingQueue",
    minutes: 16,
    desc: "ConcurrentHashMap atomik amallari, weakly consistent iterator va bufer navbatlari.",
    blocks: [
      {
        type: "p",
        text: `Oddiy <code>HashMap</code> ni bir nechta thread bilan ishlatish xavfli. <code>Collections.synchronizedMap</code> butun mapni bitta lock bilan qulflaydi. <code>ConcurrentHashMap</code> esa bo'laklab qulflash va CAS yordamida parallellikni oshiradi.`,
      },
      {
        type: "h",
        text: "Atomik birlashtirish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.ConcurrentHashMap;

public class MapDemo {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> ball = new ConcurrentHashMap<>();
        ball.merge("java", 10, Integer::sum);
        ball.merge("java", 5, Integer::sum);
        ball.merge("sql", 7, Integer::sum);

        System.out.println(ball.get("java"));
        System.out.println(ball.getOrDefault("c", 0));
        System.out.println(ball.size());
    }
}`,
        output: "15\n0\n2",
      },
      {
        type: "p",
        text: `<code>get</code> va <code>put</code> ni alohida chaqirish orasida boshqa thread qiymatni o'zgartirishi mumkin. <code>merge</code>, <code>compute</code>, <code>computeIfAbsent</code> kabi metodlar kalit bo'yicha atomik bajariladi. Kesh yaratishda <code>computeIfAbsent</code> ayniqsa foydali.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class Navbat {
    public static void main(String[] args) throws Exception {
        BlockingQueue<String> q = new LinkedBlockingQueue<>(2);
        Thread iste = new Thread(() -> {
            try {
                System.out.println("oldi: " + q.take());
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        iste.start();
        q.put("x");
        iste.join();
        System.out.println("qoldi: " + q.size());
    }
}`,
        output: "oldi: x\nqoldi: 0",
      },
      {
        type: "table",
        headers: ["Kolleksiya", "Kuchli tomoni", "Ehtiyot qismi"],
        rows: [
          ["ConcurrentHashMap", "Yuqori parallellik", "null kalit va qiymat yo'q"],
          ["CopyOnWriteArrayList", "O'qish juda tez", "Har yozuvda nusxa"],
          ["ArrayBlockingQueue", "Cheklangan bufer", "Hajm oldindan beriladi"],
          ["LinkedBlockingQueue", "Ixtiyoriy hajm", "Xotira chegarasini kuzatish"],
        ],
      },
      {
        type: "note",
        text: `Concurrent kolleksiya iteratorlari <b>weakly consistent</b>: ular snapshot emas, lekin <code>ConcurrentModificationException</code> ham bermaydi. Baribir element qo'shish yoki o'chirishni iterator ustida qilmang. <code>CopyOnWriteArrayList</code> listener ro'yxatlari kabi kam yoziladigan joylar uchun mos.`,
      },
    ],
    quiz: [
      {
        q: "ConcurrentHashMap da get va put orasidagi raqobatni qanday bartaraf qilish mumkin?",
        options: [
          "Faqat get ishlatish",
          "Butun mapni synchronized bilan qulflash",
          "merge yoki compute kabi atomik metodlardan foydalanish",
          "HashMap ga qaytish",
        ],
        answer: 2,
        explanation:
          "merge/compute kalit bo'yicha atomik bajariladi, shuning uchun o'qish va yozish orasidagi yo'qotish bo'lmaydi.",
      },
      {
        q: "CopyOnWriteArrayList qaysi holatda yaxshi tanlov?",
        options: [
          "Yozuv juda ko'p, o'qish kam bo'lsa",
          "Listeners ro'yxati kabi kam yoziladigan holatda",
          "Katta massivni tez saralashda",
          "Faqat bitta element uchun",
        ],
        answer: 1,
        explanation:
          "Har yozuvda butun massiv nusxalanadi. Shuning uchun u ko'p o'qiladigan, kam o'zgaradigan ro'yxatlar uchun mos.",
      },
      {
        q: "BlockingQueue.take() bo'sh navbatda chaqirilsa nima bo'ladi?",
        options: [
          "null qaytaradi",
          "Istisno tashlaydi",
          "Darhol bo'sh ro'yxat qaytaradi",
          "Element paydo bo'lguncha kutadi",
        ],
        answer: 3,
        explanation:
          "take bloklovchi metod: navbat bo'sh bo'lsa, thread element kelguncha yoki interrupt bo'lguncha kutadi.",
      },
    ],
  },
  {
    id: 64,
    title: "Fork/Join, work stealing va parallel stream",
    minutes: 17,
    desc: "Bo'lib boshqarish naqshi, RecursiveTask va parallel oqimlar chegaralari.",
    blocks: [
      {
        type: "p",
        text: `Fork/Join katta vazifani kichik qismlarga bo'lib, ularni thread hovuzida parallel bajaradi. Har bir ishchi thread o'z navbatiga ega; bo'sh qolgan thread boshqa thread navbatining oxiridan ish <b>o'g'irlaydi</b>. Shuning uchun yuklama notekis bo'lsa ham samaradorlik saqlanadi.`,
      },
      {
        type: "h",
        text: "RecursiveTask bilan yig'indi",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;

public class Yigindi extends RecursiveTask<Long> {
    private final int boshi;
    private final int oxiri;

    Yigindi(int boshi, int oxiri) {
        this.boshi = boshi;
        this.oxiri = oxiri;
    }

    @Override
    protected Long compute() {
        if (oxiri - boshi <= 1000) {
            long s = 0;
            for (int i = boshi; i <= oxiri; i++) {
                s += i;
            }
            return s;
        }
        int o = (boshi + oxiri) / 2;
        Yigindi chap = new Yigindi(boshi, o);
        Yigindi ong = new Yigindi(o + 1, oxiri);
        chap.fork();
        long ongNatija = ong.compute();
        long chapNatija = chap.join();
        return chapNatija + ongNatija;
    }

    public static void main(String[] args) {
        long natija = ForkJoinPool.commonPool().invoke(new Yigindi(1, 100_000));
        System.out.println("yig'indi: " + natija);
        System.out.println("parallelizm: " + (ForkJoinPool.commonPool().getParallelism() > 0));
    }
}`,
        output: "yig'indi: 5000050000\nparallelizm: true",
      },
      {
        type: "p",
        text: `Har bir bo'lak mustaqil hisoblanadi va natijalar <code>join()</code> da birlashtiriladi. Bo'lak hajmi juda kichik bo'lsa, fork/join xarajati foydadan oshadi. Judayam katta bo'lsa, parallelizm yetarli bo'lmaydi. Amalda bo'lakni kesh va vazifa hajmiga qarab tanlaymiz.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.stream.LongStream;

public class Parallel {
    public static void main(String[] args) {
        long natija = LongStream.rangeClosed(1, 1000)
            .parallel()
            .map(i -> i * i)
            .sum();
        System.out.println("kvadratlar yig'indisi: " + natija);
        System.out.println("to'g'ri: " + (natija == 333833500L));
    }
}`,
        output: "kvadratlar yig'indisi: 333833500\nto'g'ri: true",
      },
      {
        type: "table",
        headers: ["Mezon", "Sequential", "Parallel"],
        rows: [
          ["Kichik kolleksiya", "Tezroq", "Ortiqcha xarajat"],
          ["Og'ir CPU hisobi", "Bitta yadro", "Ko'p yadro"],
          ["IO kutish", "Mos", "Mos emas"],
          ["Umumiy mutable holat", "Xavfsiz", "Poyga xavfi"],
        ],
      },
      {
        type: "note",
        text: `Parallel stream umumiy <code>ForkJoinPool.commonPool()</code> dan foydalanadi va uni butun ilova bo'lishi mumkin. Blocking IO yoki tashqi servis chaqiruvlarini parallel stream ichida qilmang. Stateful lambda va umumiy hisoblagichlar natijani buzadi; reduce yoki collector ishlating.`,
      },
    ],
    quiz: [
      {
        q: "Fork/Join da work stealing nimani anglatadi?",
        options: [
          "Har bir thread boshqa threadning navbatidan ish oladi",
          "Barcha threadlar bitta navbatni kutadi",
          "Vazifalar faqat navbat boshidan olinadi",
          "Har bir vazifa yangi JVM da bajariladi",
        ],
        answer: 0,
        explanation:
          "Bo'sh qolgan ishchi thread boshqa thread navbatining oxiridan vazifa o'g'irlaydi, shu bilan yuklama muvozanatlanadi.",
      },
      {
        q: "RecursiveTask va RecursiveAction orasidagi farq nima?",
        options: [
          "RecursiveTask faqat parallel stream uchun",
          "RecursiveAction natija qaytarmaydi, RecursiveTask qaytaradi",
          "RecursiveTask faqat void metodni qo'llaydi",
          "Farqi yo'q",
        ],
        answer: 1,
        explanation:
          "RecursiveTask<V> compute natijasini qaytaradi; RecursiveAction esa natijasiz ish bajaradi.",
      },
      {
        q: "Parallel stream qachon noto'g'ri tanlov?",
        options: [
          "Katta massivdagi mustaqil matematik hisobda",
          "CPU-bound va bo'linadigan ishda",
          "Tarmoqdan ma'lumot kutishda",
          "Katta ro'yxatni saralashda",
        ],
        answer: 2,
        explanation:
          "Parallel stream bloklovchi IO uchun mo'ljallanmagan. commonPool threadlarini band qilib, boshqa parallel ishlarni sekinlashtiradi.",
      },
    ],
  },
  {
    id: 65,
    title: "Virtual threadlar: arzon parallellik",
    minutes: 18,
    desc: "Platform va virtual threadlar, carrier threadlar, pinning va to'g'ri ishlatish.",
    blocks: [
      {
        type: "p",
        text: `Java 21 da <b>virtual threadlar</b> ommaviy ravishda mavjud bo'ldi. Ular OS threadiga birma-bir bog'lanmaydi: minglab virtual thread bir nechta <b>carrier</b> platform thread ustida ishlaydi. Bloklovchi IO paytida virtual thread unmount bo'lib, carrier boshqa ishga o'tadi.`,
      },
      {
        type: "h",
        text: "O'n minglab vazifa",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

public class Virtual {
    public static void main(String[] args) throws Exception {
        AtomicInteger n = new AtomicInteger();
        try (ExecutorService ex = Executors.newVirtualThreadPerTaskExecutor()) {
            for (int i = 0; i < 10_000; i++) {
                ex.submit(n::incrementAndGet);
            }
        }
        System.out.println("bajarildi: " + n.get());
        System.out.println("virtual: " + Thread.ofVirtual().unstarted(() -> {}).isVirtual());
    }
}`,
        output: "bajarildi: 10000\nvirtual: true",
      },
      {
        type: "p",
        text: `Virtual threadlar <b>tezroq</b> degani emas: ular arzonroq va ko'proq parallel vazifani kutishga imkon beradi. CPU-bound hisob uchun platform thread hovuzi yoki parallel stream hali ham mos. Virtual threadni pool qilish kerak emas, har vazifaga bittasini yaratish tabiiy.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Nom {
    public static void main(String[] args) throws Exception {
        Thread t = Thread.ofVirtual()
            .name("vazifa-", 1)
            .start(() -> System.out.println(
                Thread.currentThread().getName()
                    + " | virtual: " + Thread.currentThread().isVirtual()));
        t.join();
        System.out.println("tugadi");
    }
}`,
        output: "vazifa-1 | virtual: true\ntugadi",
      },
      {
        type: "table",
        headers: ["Xususiyat", "Platform thread", "Virtual thread"],
        rows: [
          ["OS threadi", "1:1", "Ko'p virtual bitta carrierga"],
          ["Yaratish narxi", "Qimmat", "Arzon"],
          ["Pool kerakmi", "Ko'pincha ha", "Yo'q"],
          ["Bloklash", "OS threadni band qiladi", "Carrierni bo'shatadi"],
        ],
      },
      {
        type: "note",
        text: `Ba'zi holatlarda virtual thread carrierga <b>pinned</b> bo'lib qoladi: <code>synchronized</code> blok ichida bloklanish yoki native metod chaqiruvi. Java 21 da pinningni JFR yoki <code>-Djdk.tracePinnedThreads=full</code> bilan kuzatish mumkin. Uzoq bloklovchi ishlarda <code>ReentrantLock</code> ga o'tish pinningni kamaytiradi.`,
      },
    ],
    quiz: [
      {
        q: "Virtual thread bloklovchi IO paytida nima qiladi?",
        options: [
          "OS threadini abadiy band qiladi",
          "Carrier threadni bo'shatib, boshqa vazifaga o'tish imkonini beradi",
          "Yangi JVM ishga tushiradi",
          "Har doim pinning holatiga tushadi",
        ],
        answer: 1,
        explanation:
          "Virtual thread mount holatidan chiqadi va carrier boshqa virtual threadni bajaradi. Shu sababli kam OS thread bilan ko'p kutish vazifasini boshqarish mumkin.",
      },
      {
        q: "Virtual threadlar qaysi ish turi uchun eng mos?",
        options: [
          "Faqat CPU-bound matematik hisob",
          "Faqat GC tuning",
          "Ko'p sonli bloklovchi IO vazifalari",
          "Faqat bir threadli CLI",
        ],
        answer: 2,
        explanation:
          "Ular kutish paytida carrierni bo'shatadi, shuning uchun tarmoq, fayl va DB kabi IO vazifalarida ko'p parallellik beradi.",
      },
      {
        q: "Virtual threadni qanday tekshirish mumkin?",
        options: [
          "Thread.currentThread().isVirtual()",
          "Thread.isDaemon()",
          "Runtime.maxMemory()",
          "ClassLoader.getName()",
        ],
        answer: 0,
        explanation:
          "Thread.isVirtual() joriy thread virtual ekanini bildiradi. Virtual threadlar odatda daemon bo'ladi, lekin bu asosiy belgi emas.",
      },
    ],
  },
];
