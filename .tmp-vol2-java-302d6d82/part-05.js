{
  id: 70,
  title: "Classloaderlar va class fayl formati",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "JVM klassni ishga tushirishdan oldin uni <b>classloader</b> orqali yuklaydi. Java 9+ da uch daraja bor: <b>bootstrap</b> (asosiy modullar), <b>platform</b> (JDK modullari) va <b>application</b> (classpath). Standart model — <b>parent delegation</b>: bola loader avval otasidan so'raydi, topilmasa o'zi yuklaydi. Shu sababli asosiy klasslar tasodifan almashtirilmaydi.",
    },
    {
      type: "code",
      title: "LoaderDemo.java",
      code: `public class LoaderDemo {
    public static void main(String[] args) {
        ClassLoader app = LoaderDemo.class.getClassLoader();
        ClassLoader platform = app.getParent();
        ClassLoader bootstrap = platform.getParent();

        System.out.println("App: " + app.getName());
        System.out.println("Platform: " + platform.getName());
        System.out.println("Bootstrap: " + bootstrap);
        System.out.println("String loader: " + String.class.getClassLoader());
        System.out.println("Ota zanjiri: " + (app.getParent() == platform));
    }
}`,
      output: "App: app\nPlatform: platform\nBootstrap: null\nString loader: null\nOta zanjiri: true",
    },
    {
      type: "note",
      variant: "info",
      title: "Nega bootstrap null?",
      html: "Bootstrap loader native kodda yozilgan, uning Java obyekti yo'q — shuning uchun <code>getParent()</code> va <code>String.class.getClassLoader()</code> <code>null</code> qaytaradi. <code>null</code> bu yerda 'yuklanmagan' emas, 'bootstrap tomonidan yuklangan' degani.",
    },
    {
      type: "code",
      title: "ClassFormat.java",
      code: `import java.io.DataInputStream;
import java.io.InputStream;

public class ClassFormat {
    public static void main(String[] args) throws Exception {
        try (InputStream oqim = ClassFormat.class.getResourceAsStream("ClassFormat.class");
             DataInputStream data = new DataInputStream(oqim)) {

            int magic = data.readInt();
            int minor = data.readUnsignedShort();
            int major = data.readUnsignedShort();
            int pool = data.readUnsignedShort();

            System.out.printf("Magic: 0x%08X%n", magic);
            System.out.println("Versiya: " + major + "." + minor);
            System.out.println("Constant pool mavjud: " + (pool > 0));
            System.out.println("Class fayl o'qildi");
        }
    }
}`,
      output: "Magic: 0xCAFEBABE\nVersiya: 61.0\nConstant pool mavjud: true\nClass fayl o'qildi",
      outputLabel: "JDK 17 natijasi",
    },
    {
      type: "ul",
      items: [
        "Class fayl <code>0xCAFEBABE</code> magic bilan boshlanadi; keyin major/minor versiya keladi.",
        "Major 61 — Java 17, 65 — Java 21. Yuqori versiyada kompilyatsiya qilingan klass eski JVM'da ishlamaydi.",
        "Klass hayotiy tsikli: loading, linking (verification, preparation, resolution), initialization.",
        "<code>Class.forName</code> klassni yuklaydi va statik blokni ishga tushiradi; <code>loadClass</code> esa odatda faqat yuklaydi.",
      ],
    },
  ],
  quiz: [
    {
      q: "String klassini qaysi classloader yuklaydi?",
      options: ["Application", "Platform", "Bootstrap (getClassLoader() null)", "Custom"],
      answer: 2,
      explain: "java.lang.String bootstrap loader tomonidan yuklanadi; uning getClassLoader() natijasi null bo'ladi.",
    },
    {
      q: "Parent delegation model qanday ishlaydi?",
      options: [
        "Bola avval o'zi qidiradi",
        "Bola avval otasidan so'raydi, topilmasa o'zi yuklaydi",
        "Har loader mustaqil",
        "Faqat bootstrap ishlaydi",
      ],
      answer: 1,
      explain: "Standart modelda so'rov yuqoriga uzatiladi; ota topmasa bola o'z classpath'idan yuklaydi. Bu asosiy klasslarni himoya qiladi.",
    },
    {
      q: "Class faylning birinchi 4 bayti qanday qiymatdan iborat?",
      options: ["0xCAFEBABE", "0xDEADBEEF", "PK..", "0xFFFF"],
      answer: 0,
      explain: "Har bir class fayl 0xCAFEBABE magic bilan boshlanadi; bu format ekanini tekshirishning birinchi qadami.",
    },
  ],
},
{
  id: 71,
  title: "JVM xotirasi: heap, stack va metaspace",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "JVM xotirasi bir necha hududga bo'linadi. <b>Heap</b> — obyektlar yashaydigan umumiy joy, GC shu yerda ishlaydi. <b>Stack</b> — har bir thread uchun alohida, metod chaqiruvlari va lokal o'zgaruvchilar ramkalari. <b>Metaspace</b> — klass metama'lumotlari (Java 8+ da PermGen o'rniga). Bundan tashqari code cache, direct buffer va native xotira bor.",
    },
    {
      type: "code",
      title: "Xotira.java",
      code: `public class Xotira {
    static final class Quti {
        final int qiymat;

        Quti(int qiymat) {
            this.qiymat = qiymat;
        }
    }

    public static void main(String[] args) {
        Runtime rt = Runtime.getRuntime();
        long oldin = rt.totalMemory() - rt.freeMemory();

        Quti[] massiv = new Quti[100_000];
        for (int i = 0; i < massiv.length; i++) {
            massiv[i] = new Quti(i);
        }

        long keyin = rt.totalMemory() - rt.freeMemory();
        System.out.println("Xotira oshdi: " + (keyin > oldin));
        System.out.println("Hajm: " + massiv.length);
        System.out.println("Oxirgi: " + massiv[99_999].qiymat);

        massiv = null;
        System.gc();
        System.out.println("Tugadi");
    }
}`,
      output: "Xotira oshdi: true\nHajm: 100000\nOxirgi: 99999\nTugadi",
    },
    {
      type: "note",
      variant: "warning",
      title: "System.gc() kafolat emas",
      html: "<code>System.gc()</code> faqat GC'ga taklif yuboradi; JVM uni e'tiborsiz qoldirishi mumkin. Production kodda uni chaqirmang — GC o'z bosimiga qarab ishlaydi. <code>-XX:+DisableExplicitGC</code> bilan aniq chaqiruvlarni butunlay o'chirish ham mumkin.",
    },
    {
      type: "code",
      title: "StackDemo.java",
      code: `public class StackDemo {
    static int chuqurlik;

    static void rekursiya() {
        chuqurlik++;
        rekursiya();
    }

    public static void main(String[] args) {
        try {
            rekursiya();
        } catch (StackOverflowError e) {
            System.out.println("StackOverflowError");
            System.out.println("Chuqurlik 1000 dan katta: " + (chuqurlik > 1000));
        }
        System.out.println("Dastur davom etdi");
    }
}`,
      output: "StackOverflowError\nChuqurlik 1000 dan katta: true\nDastur davom etdi",
    },
    {
      type: "table",
      head: ["Hudud", "Nima saqlanadi", "Sozlash"],
      rows: [
        ["Heap", "Obyektlar va massivlar", "-Xms, -Xmx"],
        ["Stack", "Metod ramkalari, lokallar", "-Xss"],
        ["Metaspace", "Klass metama'lumotlari", "-XX:MaxMetaspaceSize"],
        ["Code cache", "JIT qilingan kod", "-XX:ReservedCodeCacheSize"],
      ],
    },
  ],
  quiz: [
    {
      q: "Metod ramkalari va lokal o'zgaruvchilar qayerda saqlanadi?",
      options: ["Heap", "Stack", "Metaspace", "Code cache"],
      answer: 1,
      explain: "Har bir threadning stack'i metod chaqiruv ramkalarini saqlaydi; obyektlarning o'zi odatda heap'da bo'ladi.",
    },
    {
      q: "Java 8+ da klass metama'lumotlari qayerda turadi?",
      options: ["PermGen", "Metaspace", "Stack", "Young generation"],
      answer: 1,
      explain: "PermGen olib tashlangan; klass metama'lumotlari native xotiradagi Metaspace'da saqlanadi.",
    },
    {
      q: "Heap maksimal hajmini qaysi flag belgilaydi?",
      options: ["-Xss", "-Xmx", "-XX:MaxMetaspaceSize", "-Xint"],
      answer: 1,
      explain: "-Xmx heapning yuqori chegarasini, -Xms boshlang'ich hajmini belgilaydi.",
    },
  ],
},
{
  id: 72,
  title: "GC: G1, ZGC va avlodlar",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Garbage Collector endi ishlatilmayotgan obyektlarni topib xotirani bo'shatadi. Zamonaviy JVM'da heap <b>yosh avlod</b> (young: Eden + Survivor) va <b>qari avlod</b> (old)ga bo'linadi. Ko'p obyekt yosh o'ladi — bu <b>generational hypothesis</b>. Java 17/21 standart GC — <b>G1</b>; past pauza kerak bo'lsa <b>ZGC</b> yoki <b>Shenandoah</b> tanlanadi.",
    },
    {
      type: "code",
      title: "GcDemo.java",
      code: `import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;

public class GcDemo {
    public static void main(String[] args) {
        for (GarbageCollectorMXBean gc : ManagementFactory.getGarbageCollectorMXBeans()) {
            System.out.println("GC: " + gc.getName());
        }
        System.out.println("Jami GC: " + ManagementFactory.getGarbageCollectorMXBeans().size());
    }
}`,
      output: "GC: G1 Young Generation\nGC: G1 Old Generation\nJami GC: 2",
    },
    {
      type: "note",
      variant: "info",
      title: "Kolleksiyalar soni noldan farq qilishi mumkin",
      html: "Kichik dasturda GC hali ishlamagan bo'lishi mumkin, shuning uchun sanagich 0. Katta ilovada bu qiymatlar o'sadi. GC nomi tanlangan kollektorga bog'liq: <code>-XX:+UseZGC</code> bilan bu yerda ZGC ko'rinadi.",
    },
    {
      type: "code",
      title: "HeapDemo.java",
      code: `import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;

public class HeapDemo {
    public static void main(String[] args) {
        MemoryMXBean xotira = ManagementFactory.getMemoryMXBean();
        MemoryUsage heap = xotira.getHeapMemoryUsage();

        System.out.println("Init > 0: " + (heap.getInit() > 0));
        System.out.println("Max > 0: " + (heap.getMax() > 0));
        System.out.println("Used > 0: " + (heap.getUsed() > 0));
        System.out.println("Committed > 0: " + (heap.getCommitted() > 0));
        System.out.println("Used <= Max: " + (heap.getUsed() <= heap.getMax()));
    }
}`,
      output: "Init > 0: true\nMax > 0: true\nUsed > 0: true\nCommitted > 0: true\nUsed <= Max: true",
    },
    {
      type: "table",
      head: ["Kollektor", "Afzalligi", "Qachon tanlanadi"],
      rows: [
        ["G1", "Balanslangan, regionlarga bo'ladi", "Standart tanlov (JDK 9+)"],
        ["ZGC", "Juda past pauza, katta heap", "Katta xizmatlar, SLA qat'iy"],
        ["Parallel", "Yuqori throughput", "Batch hisob-kitoblar"],
        ["Serial", "Kam xotira, oddiy", "Kichik konteynerlar, CLI"],
      ],
    },
  ],
  quiz: [
    {
      q: "Java 17/21 da standart garbage collector qaysi?",
      options: ["Serial", "Parallel", "G1", "ZGC"],
      answer: 2,
      explain: "JDK 9'dan boshlab G1 standart kollektor hisoblanadi; u pauza va throughput o'rtasida muvozanat beradi.",
    },
    {
      q: "ZGC ning asosiy maqsadi nima?",
      options: [
        "Eng yuqori throughput",
        "Juda past pauza vaqtlari",
        "Xotirani umuman ishlatmaslik",
        "Faqat young generation",
      ],
      answer: 1,
      explain: "ZGC katta heap'larda ham millisekundli pauzalarni maqsad qiladi; u concurrent va region-based kollektordir.",
    },
    {
      q: "Yosh avlod (young generation) nimadan iborat?",
      options: ["Eden va Survivor", "Metaspace va Stack", "Code cache", "PermGen"],
      answer: 0,
      explain: "Young generation Eden va ikkita Survivor hududidan iborat; yangi obyektlar avval Eden'da yaratiladi.",
    },
  ],
},
{
  id: 73,
  title: "JIT kompilyator va optimizatsiyalar",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Java avval bayt-kodga kompilyatsiya qilinadi, keyin JVM uni <b>JIT</b> (Just-In-Time) orqali mashina kodiga aylantiradi. HotSpot ikki darajali kompilyatsiyadan foydalanadi: tez <b>C1</b> va chuqur optimallashtiruvchi <b>C2</b>. Metod yetarlicha ko'p chaqirilsa 'hot' deb belgilanadi va C2'ga o'tadi. Asosiy optimizatsiyalar: inlining, escape analysis, dead code elimination, loop unrolling.",
    },
    {
      type: "code",
      title: "JitDemo.java",
      code: `import java.lang.management.CompilationMXBean;
import java.lang.management.ManagementFactory;

public class JitDemo {
    static long hisobla(int n) {
        long summa = 0;
        for (int i = 0; i < n; i++) {
            summa += (long) i * i;
        }
        return summa;
    }

    public static void main(String[] args) {
        CompilationMXBean jit = ManagementFactory.getCompilationMXBean();
        System.out.println("JIT: " + jit.getName());

        long oldin = jit.getTotalCompilationTime();
        long natija = 0;
        for (int i = 0; i < 100_000; i++) {
            natija = hisobla(100);
        }
        long keyin = jit.getTotalCompilationTime();

        System.out.println("Natija: " + natija);
        System.out.println("Kompilyatsiya vaqti oshdi: " + (keyin >= oldin));
    }
}`,
      output: "JIT: HotSpot Tiered Compilers\nNatija: 328350\nKompilyatsiya vaqti oshdi: true",
    },
    {
      type: "note",
      variant: "info",
      title: "Nega birinchi chaqiruv sekin?",
      html: "Dastur boshlanganda metodlar interpretatsiya rejimida ishlaydi. Ular 'hot' bo'lgach C1, keyin C2 kompilyatsiyasidan o'tadi. Shu sababli benchmark'larda <b>warmup</b> bosqichi bo'ladi; JMH aynan shu muammoni hal qiladi.",
    },
    {
      type: "code",
      title: "Escape.java",
      code: `public class Escape {
    static int hisob() {
        int[] massiv = {1, 2, 3, 4, 5};
        int summa = 0;
        for (int qiymat : massiv) {
            summa += qiymat;
        }
        return summa;
    }

    public static void main(String[] args) {
        int natija = 0;
        for (int i = 0; i < 1_000_000; i++) {
            natija = hisob();
        }
        System.out.println("Natija: " + natija);
        System.out.println("Massiv tashqariga chiqmaydi");
    }
}`,
      output: "Natija: 15\nMassiv tashqariga chiqmaydi",
    },
    {
      type: "ul",
      items: [
        "Escape analysis massiv/obyekt tashqariga chiqmasa, uni heap'ga joylamasligi mumkin (scalar replacement).",
        "Inlining kichik metodlarni chaqiruv joyiga ko'chiradi va keyingi optimizatsiyalarga yo'l ochadi.",
        "Code cache to'lsa JIT to'xtaydi; <code>-XX:ReservedCodeCacheSize</code> bilan hajm oshiriladi.",
        "<code>-XX:-TieredCompilation</code> faqat C2 ishlatadi — diagnostika uchun, production uchun emas.",
      ],
    },
  ],
  quiz: [
    {
      q: "HotSpot'da C1 va C2 kompilyatorlari orasidagi farq nima?",
      options: [
        "C1 chuqur optimallashtiradi, C2 tez",
        "C1 tez kompilyatsiya qiladi, C2 chuqur optimallashtiradi",
        "Ikkalasi bir xil",
        "C2 faqat GC uchun",
      ],
      answer: 1,
      explain: "C1 tez ishlaydigan oddiy kod beradi, C2 uzoqroq kompilyatsiya qilib chuqur optimallashtiradi; tiered compilation ikkalasini ketma-ket ishlatadi.",
    },
    {
      q: "Escape analysis qanday optimizatsiya beradi?",
      options: [
        "Obyekt tashqariga chiqmasa, heap ajratishni yo'qotadi",
        "Faylni tezroq o'qiydi",
        "Threadlarni ko'paytiradi",
        "SQL'ni optimallashtiradi",
      ],
      answer: 0,
      explain: "Agar obyekt metod ichida qolsa, JIT uni stack'da saqlashi yoki maydonlarini skalyarlarga ajratishi mumkin.",
    },
    {
      q: "Benchmark'da warmup nima uchun kerak?",
      options: [
        "GC ni to'xtatish uchun",
        "JIT metodlarni kompilyatsiya qilishi uchun",
        "Faylni yopish uchun",
        "Xotirani tozalash uchun",
      ],
      answer: 1,
      explain: "Dastlabki chaqiruvlar interpretatsiya va C1 bosqichida bo'ladi; warmup JIT barqaror holatga yetishini ta'minlaydi.",
    },
  ],
},
{
  id: 74,
  title: "JVM diagnostika: jcmd, jstack va JFR",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "Production'da muammo 'sekin ishlayapti' yoki 'osilib qoldi' bo'lsa, JVM ichiga qarash kerak. <code>jcmd</code> — universal buyruq, <code>jstack</code> — thread dump, <code>jmap</code> — heap, <code>jstat</code> — GC statistikasi, <b>JFR</b> — doimiy yozib boriladigan profiling. JDK 21'da JFR deyarli bepul va production'da yoqib qo'yish mumkin.",
    },
    {
      type: "code",
      title: "DeadlockDemo.java",
      code: `import java.lang.management.ManagementFactory;
import java.lang.management.ThreadMXBean;

public class DeadlockDemo {
    static final Object A = new Object();
    static final Object B = new Object();

    public static void main(String[] args) throws Exception {
        Thread t1 = new Thread(() -> {
            synchronized (A) {
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    return;
                }
                synchronized (B) {
                    System.out.println("T1");
                }
            }
        }, "t1");

        Thread t2 = new Thread(() -> {
            synchronized (B) {
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    return;
                }
                synchronized (A) {
                    System.out.println("T2");
                }
            }
        }, "t2");

        t1.start();
        t2.start();
        t1.join(1000);
        t2.join(1000);

        ThreadMXBean mx = ManagementFactory.getThreadMXBean();
        long[] deadlock = mx.findDeadlockedThreads();
        System.out.println("Deadlock: " + (deadlock != null));
        System.out.println("Oqimlar: " + (deadlock == null ? 0 : deadlock.length));
    }
}`,
      output: "Deadlock: true\nOqimlar: 2",
    },
    {
      type: "note",
      variant: "tip",
      title: "Asosiy buyruqlar",
      html: "<code>jcmd &lt;pid&gt; Thread.print</code> — thread dump; <code>jcmd &lt;pid&gt; GC.heap_info</code> — heap holati; <code>jcmd &lt;pid&gt; JFR.start duration=60s filename=app.jfr</code> — 60 soniyalik yozuv. <code>jstack &lt;pid&gt;</code> va <code>jcmd</code> deyarli bir xil natija beradi.",
    },
    {
      type: "code",
      title: "JfrDemo.java",
      code: `import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import jdk.jfr.Recording;

public class JfrDemo {
    public static void main(String[] args) throws Exception {
        Path fayl = Path.of("demo.jfr");

        try (Recording recording = new Recording()) {
            recording.enable("jdk.CPULoad").withPeriod(Duration.ofSeconds(1));
            recording.start();
            Thread.sleep(1200);
            recording.stop();
            recording.dump(fayl);
        }

        System.out.println("Fayl: " + fayl);
        System.out.println("Mavjud: " + Files.exists(fayl));
        System.out.println("Hajm > 0: " + (Files.size(fayl) > 0));
        Files.delete(fayl);
        System.out.println("Tozalandi");
    }
}`,
      output: "Fayl: demo.jfr\nMavjud: true\nHajm > 0: true\nTozalandi",
    },
    {
      type: "ul",
      items: [
        "Thread dump'dan BLOCKED/WAITING oqimlarni va ular ushlab turgan qulflarni ko'rish mumkin.",
        "Heap dump (<code>jcmd &lt;pid&gt; GC.heap_dump</code>) xotira sizishini tahlil qilish uchun olinadi; fayl katta bo'ladi.",
        "JFR recording'ni JDK Mission Control yoki <code>jfr print</code> bilan tahlil qilinadi.",
        "Diagnostika qilishdan oldin JVM flag'larini yozib oling: <code>jcmd &lt;pid&gt; VM.flags</code>.",
      ],
    },
  ],
  quiz: [
    {
      q: "Thread dump olish uchun qaysi buyruq ishlatiladi?",
      options: ["jcmd <pid> Thread.print", "java -version", "javac Main.java", "jarsigner"],
      answer: 0,
      explain: "jcmd <pid> Thread.print (yoki jstack <pid>) barcha threadlarning holati va stack trace'ini chiqaradi.",
    },
    {
      q: "JFR nimani yozib oladi?",
      options: [
        "Faqat xatoliklarni",
        "CPU, GC, thread, I/O kabi runtime hodisalarini",
        "Faqat SQL so'rovlarni",
        "Faqat fayl tizimini",
      ],
      answer: 1,
      explain: "Java Flight Recorder JVM hodisalarini past overhead bilan yozadi: CPU yuklama, GC pauzalari, thread holatlari, I/O va boshqalar.",
    },
    {
      q: "findDeadlockedThreads() nima qaytaradi?",
      options: [
        "Barcha threadlar sonini",
        "Deadlock'da qatnashgan thread ID'lari massivini yoki null",
        "Faqat GC threadlarini",
        "Heap hajmini",
      ],
      answer: 1,
      explain: "ThreadMXBean deadlock'ni aniqlasa thread ID'lari massivini, aks holda null qaytaradi.",
    },
  ],
},
