module.exports = [
  {
    id: 50,
    title: "Klass hayoti: yuklash, bog'lash va ishga tushirish",
    minutes: 16,
    desc: "JVM klassni qanday topadi, tekshiradi va static holatini qachon tayyorlaydi.",
    blocks: [
      {
        type: "p",
        text: `Birinchi jildda <code>static</code> maydonlar haqida gapirgan edik. Endi klassning hayot siklini kuzatamiz. JVM klassni darhol to'liq tayyorlamaydi: avval uni <b>topadi va yuklaydi</b>, keyin <b>bog'laydi</b>, va faqat birinchi faol foydalanishda <b>ishga tushirish</b> bosqichiga o'tadi.`,
      },
      {
        type: "h",
        text: "Uch bosqich va static tartib",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Hayot {
    static int son = hisobla();

    static {
        System.out.println("static blok");
    }

    static int hisobla() {
        System.out.println("maydon");
        return 7;
    }

    {
        System.out.println("instance blok");
    }

    Hayot() {
        System.out.println("konstruktor");
    }

    public static void main(String[] args) {
        new Hayot();
        System.out.println("son=" + son);
        System.out.println("main");
    }
}`,
        output: "maydon\nstatic blok\ninstance blok\nkonstruktor\nson=7\nmain",
      },
      {
        type: "p",
        text: `Static maydon va static blok <b>manba kodidagi tartibda</b> bajariladi. <code>son</code> maydoni <code>hisobla()</code> ni chaqiradi, shuning uchun avval <code>maydon</code> chiqadi. Obyekt yaratilganda esa avval instance blok, keyin konstruktor ishlaydi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`class Ota {
    static {
        System.out.println("Ota static");
    }
}

class Bola extends Ota {
    static {
        System.out.println("Bola static");
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("main boshi");
        new Bola();
        System.out.println("main oxiri");
    }
}`,
        output: "main boshi\nOta static\nBola static\nmain oxiri",
      },
      {
        type: "table",
        headers: ["Bosqich", "Nima bo'ladi", "Xotira"],
        rows: [
          ["Loading", "Klass bayt-kodi topiladi va Class obyekti yaratiladi", "Metaspace"],
          ["Linking", "Verification, preparation, resolution", "Metaspace"],
          ["Initialization", "Static maydonlar va static bloklar bajariladi", "Heap va Metaspace"],
        ],
      },
      {
        type: "note",
        text: `<code>Bola.class</code> yozish klassni ishga tushirmaydi, faqat Class obyektini beradi. <code>new Bola()</code>, static metod chaqiruvi yoki static maydonga murojaat initialization trigger bo'ladi. <code>static final</code> compile-time konstantaga murojaat esa initializationni boshlashi shart emas.`,
      },
    ],
    quiz: [
      {
        q: "Qaysi amal klassning initialization bosqichini albatta boshlaydi?",
        options: [
          "Faqat Bola.class yozish",
          "new Bola() orqali obyekt yaratish",
          "javac bilan faylni kompilyatsiya qilish",
          "ClassLoader.getResource() chaqirish",
        ],
        answer: 1,
        explanation:
          "Obyekt yaratish faol foydalanish hisoblanadi va JVM avval superklassni, keyin klassni initialize qiladi. Class literal esa initializationni kafolatlamaydi.",
      },
      {
        q: "Bir klassdagi static maydon inicializatori va static blok qaysi tartibda bajariladi?",
        options: [
          "Manba kodida qaysi biri oldin yozilgan bo'lsa, shu tartibda",
          "Avval barcha static bloklar, keyin maydonlar",
          "Avval barcha maydonlar, keyin static bloklar",
          "Tartib JVM tanlashiga bog'liq",
        ],
        answer: 0,
        explanation:
          "JVM static inicializatorlarni klass matnida uchrash tartibida bajaradi. Shuning uchun maydon qiymati blokdan oldin hisoblanishi mumkin.",
      },
      {
        q: "Linking bosqichining to'g'ri ichki tartibi qaysi?",
        options: [
          "Resolution, verification, preparation",
          "Initialization, verification, resolution",
          "Verification, preparation, resolution",
          "Preparation, initialization, verification",
        ],
        answer: 2,
        explanation:
          "Linking verification (bayt-kod xavfsizligi), preparation (static maydonlarga boshlang'ich qiymat) va resolution (simvolik havolalarni aniqlash) dan iborat.",
      },
    ],
  },
  {
    id: 51,
    title: "Bayt-kod va stack frame anatomiyasi",
    minutes: 17,
    desc: "Har bir metod chaqiruvi qanday frame yaratadi va operand stack qanday ishlaydi.",
    blocks: [
      {
        type: "p",
        text: `JVM manba kodini emas, <b>bayt-kod</b>ni bajaradi. Har bir metod chaqiruvi uchun alohida <b>stack frame</b> yaratiladi. Frame ichida local variable jadvali, operand stack va metodning ishlash holati bo'ladi.`,
      },
      {
        type: "h",
        text: "Chaqiruvlar zanjirini ko'rish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Frame {
    static void c() {
        StackTraceElement[] iz = new Throwable().getStackTrace();
        for (int i = 1; i <= 3; i++) {
            System.out.print((i > 1 ? " <- " : "") + iz[i].getMethodName());
        }
        System.out.println();
    }

    static void b() { c(); }
    static void a() { b(); }

    public static void main(String[] args) {
        a();
    }
}`,
        output: "b <- a <- main",
      },
      {
        type: "p",
        text: `StackTraceElement massivida nolinchi element joriy <code>c</code> metodi. Undan keyingi uchta element chaqiruv zanjirini ko'rsatadi: <code>b</code>, <code>a</code> va <code>main</code>. Har bir element alohida frame'ga mos keladi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Bayt {
    static int qosh(int a, int b) {
        int c = a + b;
        return c;
    }

    public static void main(String[] args) {
        String[] kod = {
            "0: iload_0",
            "1: iload_1",
            "2: iadd",
            "3: istore_2",
            "4: iload_2",
            "5: ireturn"
        };
        for (String qator : kod) {
            System.out.println(qator);
        }
        System.out.println("stack: 2 slot, locals: 3 slot");
    }
}`,
        output:
          "0: iload_0\n1: iload_1\n2: iadd\n3: istore_2\n4: iload_2\n5: ireturn\nstack: 2 slot, locals: 3 slot",
      },
      {
        type: "table",
        headers: ["Buyruq", "Vazifasi", "Stack effekti"],
        rows: [
          ["iload_0", "0-slotdagi int qiymatni stackka qo'yadi", "+1"],
          ["iadd", "Ikki intni qo'shib natijani stackka qo'yadi", "-1"],
          ["istore_2", "Stack ustidagi intni 2-slotga yozadi", "-1"],
          ["ireturn", "Stack ustidagi intni qaytaradi", "frame yopiladi"],
        ],
      },
      {
        type: "note",
        text: `Local variable slotlari indeks bilan sanaladi. <code>long</code> va <code>double</code> ikki slot egallaydi, shuning uchun keyingi o'zgaruvchining indeksi sakrab ketishi mumkin. Operand stack esa kompilyator hisoblagan <code>max_stack</code> dan oshmaydi.`,
      },
    ],
    quiz: [
      {
        q: "Har bir metod chaqiruvi uchun JVM nimani yaratadi?",
        options: [
          "Yangi ClassLoader",
          "Yangi stack frame",
          "Yangi metaspace regioni",
          "Yangi thread",
        ],
        answer: 1,
        explanation:
          "Metod chaqirilganda JVM joriy thread stackiga frame qo'shadi. Frame local variables, operand stack va return holatini saqlaydi.",
      },
      {
        q: "64-bitli HotSpot'da bitta long lokal o'zgaruvchi nechta slot egallaydi?",
        options: ["Yarim slot", "Bir slot", "Uch slot", "Ikki slot"],
        answer: 3,
        explanation:
          "JVM spetsifikatsiyasiga ko'ra long va double ikki birlikdan iborat, shuning uchun local variable jadvalida ikki slot egallaydi.",
      },
      {
        q: "Operand stackning asosiy vazifasi nima?",
        options: [
          "Hisoblash oraliq qiymatlarini saqlash",
          "Klass metadata'sini saqlash",
          "Thread nomlarini saqlash",
          "Faqat static maydonlarni saqlash",
        ],
        answer: 0,
        explanation:
          "Bayt-kod buyruqlari qiymatlarni operand stackka qo'yadi va oladi. Bu JVM ning stek mashinasi modelining asosidir.",
      },
    ],
  },
  {
    id: 52,
    title: "JIT: interpretatordan C2 gacha",
    minutes: 18,
    desc: "Tiered compilation, profil yig'ish, inlining va deoptimization jarayoni.",
    blocks: [
      {
        type: "p",
        text: `JVM bayt-kodni avval interpretator orqali bajaradi. Metod ko'p marta chaqirilsa, u <b>issiq</b> deb belgilanadi va JIT kompilyator uni mashina kodiga aylantiradi. HotSpot'da bu jarayon <b>tiered compilation</b> deb ataladi.`,
      },
      {
        type: "h",
        text: "Issiqlik chegaralari",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Tier {
    public static void main(String[] args) {
        int[] chaqiruvlar = {10, 500, 20000};
        for (int son : chaqiruvlar) {
            String bosqich = son < 100
                ? "interpretator"
                : son < 10000 ? "C1" : "C2";
            System.out.println(son + " chaqiruv -> " + bosqich);
        }
    }
}`,
        output:
          "10 chaqiruv -> interpretator\n500 chaqiruv -> C1\n20000 chaqiruv -> C2",
      },
      {
        type: "p",
        text: `C1 tez kompilyatsiya qiladi va profil yig'ishni davom ettiradi. C2 chuqurroq optimallashtiradi: inlining, escape analysis, loop unrolling va dead code elimination. C2 ko'r-ko'rona taxmin qilmaydi, u oldingi bajarilishlardan olingan turlar va shoxlar haqidagi ma'lumotga tayanadi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Issiq {
    static long yigindi(int n) {
        long s = 0;
        for (int i = 1; i <= n; i++) {
            s += i;
        }
        return s;
    }

    public static void main(String[] args) {
        long natija = 0;
        for (int i = 0; i < 1000; i++) {
            natija = yigindi(100_000);
        }
        System.out.println("natija: " + natija);
        System.out.println("bir xil: " + (natija == 5000050000L));
    }
}`,
        output: "natija: 5000050000\nbir xil: true",
      },
      {
        type: "table",
        headers: ["Daraja", "Tezlik", "Optimizatsiya", "Profil"],
        rows: [
          ["Interpretator", "Sekin boshlanadi", "Deyarli yo'q", "Yig'adi"],
          ["C1", "Tez kompilyatsiya", "Oddiy va tez", "Chuqur yig'adi"],
          ["C2", "Sekin kompilyatsiya", "Agresiv", "Taxminlarni tekshiradi"],
        ],
      },
      {
        type: "note",
        text: `Agar C2 ning taxmini buzilsa, JVM <b>deoptimization</b> qiladi va metodni yana interpretator yoki C1 ga qaytaradi. Masalan, bir turdagi obyekt keladi deb optimallashtirilgan joyga boshqa tur kelsa, taxmin bekor qilinadi. Shuning uchun ishlash tezligini faqat JMH kabi ishonchli vosita bilan o'lchash kerak.`,
      },
    ],
    quiz: [
      {
        q: "C2 kompilyatorining asosiy xususiyati nimada?",
        options: [
          "Bayt-kodni umuman o'zgartirmaydi",
          "Faqat xatolarni tekshiradi",
          "Profilga tayanib chuqur optimallashtiradi",
          "Har bir metodni darhol kompilyatsiya qiladi",
        ],
        answer: 2,
        explanation:
          "C2 uzoq muddatli, agresiv optimizatsiya qiladi va oldingi bajarilishlar profillaridan foydalanadi.",
      },
      {
        q: "Deoptimization qachon yuz beradi?",
        options: [
          "JIT taxmini bajarilish paytida buzilganda",
          "Har safar yangi thread yaratilganda",
          "Faqat dastur tugaganda",
          "Klass fayli o'chirilganda",
        ],
        answer: 0,
        explanation:
          "Optimallashtirilgan kod ma'lum bir tur yoki shox haqida taxmin qiladi. Taxmin buzilsa, JVM xavfsiz holatga qaytadi.",
      },
      {
        q: "Java kodi unumdorligini ishonchli o'lchash uchun qaysi vosita mos?",
        options: [
          "System.currentTimeMillis() bilan bir marta o'lchash",
          "Kod ichiga ko'p println qo'shish",
          "Faqat javac -O ishlatish",
          "JMH mikrobenchmark framework'i",
        ],
        answer: 3,
        explanation:
          "JMH JIT isishini, dead code eliminationni va statistik shovqinni hisobga oladi. Oddiy taymer bilan bir martalik o'lchov ishonchsiz.",
      },
    ],
  },
  {
    id: 53,
    title: "ClassLoader ierarxiyasi va delegatsiya",
    minutes: 15,
    desc: "Bootstrap, platform va application loaderlar hamda parent delegation modeli.",
    blocks: [
      {
        type: "p",
        text: `ClassLoader klass bayt-kodini topib, JVM ga taqdim etadi. Java 9 dan boshlab uch asosiy loader bor: <b>bootstrap</b>, <b>platform</b> va <b>application</b>. Har biri o'z qidiruv doirasiga ega.`,
      },
      {
        type: "h",
        text: "Loader zanjiri",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Loader {
    public static void main(String[] args) {
        ClassLoader app = Loader.class.getClassLoader();
        System.out.println(app.getName());
        System.out.println(app.getParent().getName());
        System.out.println(app.getParent().getParent());
    }
}`,
        output: "app\nplatform\nnull",
      },
      {
        type: "p",
        text: `Application loader ilova classpath'idagi klasslarni yuklaydi. Uning ota loaderi platform bo'lib, JDK modullarining bir qismini beradi. Platform loaderning ota loaderi bootstrap bo'lib, u <code>null</code> sifatida ko'rinadi. Bootstrap <code>java.lang</code> kabi asosiy klasslarni yuklaydi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Bootstrap {
    public static void main(String[] args) throws Exception {
        System.out.println("String: " + String.class.getClassLoader());
        System.out.println("Main: " + Bootstrap.class.getClassLoader().getName());
        Class<?> k = Class.forName("java.util.ArrayList");
        System.out.println("ArrayList yuklandi: " + (k != null));
    }
}`,
        output: "String: null\nMain: app\nArrayList yuklandi: true",
      },
      {
        type: "table",
        headers: ["Loader", "Nimani yuklaydi", "Ota loaderi"],
        rows: [
          ["Bootstrap", "java.base va asosiy JDK klasslari", "Yo'q (null)"],
          ["Platform", "Boshqa JDK modullari", "Bootstrap"],
          ["Application", "Classpath va ilova modullari", "Platform"],
        ],
      },
      {
        type: "note",
        text: `Parent delegation avval ota loaderdan qidirishni anglatadi. Bu bir xil nomli klassning ikki nusxasi paydo bo'lishining oldini oladi. Ba'zi holatlarda delegatsiya ataylab buziladi: JDBC driverlar <code>ServiceLoader</code> orqali topiladi, Tomcat esa har bir veb-ilova uchun alohida loader ishlatadi.`,
      },
    ],
    quiz: [
      {
        q: "Bootstrap ClassLoader odatda qaysi klasslarni yuklaydi?",
        options: [
          "Faqat foydalanuvchi classpath'idagi klasslarni",
          "Faqat test klasslarini",
          "java.base kabi asosiy JDK klasslarini",
          "Faqat Spring beanlarini",
        ],
        answer: 2,
        explanation:
          "Bootstrap loader JVM ning eng pastki qatlamidagi asosiy JDK klasslarini yuklaydi va uning o'zini ClassLoader obyekti sifatida ko'rsatish uchun null qaytadi.",
      },
      {
        q: "Parent delegation modelining ma'nosi nima?",
        options: [
          "Har bir klassni faqat eng quyi loader yuklaydi",
          "Avval ota loader qidiradi, topilmasa bola loader qidiradi",
          "Barcha loaderlar parallel ravishda bir xil klassni yuklaydi",
          "Ota loader bola loaderning metodlarini chaqiradi",
        ],
        answer: 1,
        explanation:
          "Delegatsiya klassning yagona nusxasini ta'minlaydi: so'rov avval ota loaderga uzatiladi, u topmasa bola loader o'zi qidiradi.",
      },
      {
        q: "JDBC drayverlarining topilishida parent delegation nega yetarli emas?",
        options: [
          "Chunki drayverlar faqat bootstrapda bo'ladi",
          "Chunki ClassLoader klasslarni umuman yuklamaydi",
          "Chunki java.sql moduli classpathni ko'rmaydi, ServiceLoader esa ilova loaderidan foydalanadi",
          "Chunki JDBC faqat native kodda ishlaydi",
        ],
        answer: 2,
        explanation:
          "JDK moduli ilova classpath'ini to'g'ridan-to'g'ri ko'rmaydi. ServiceLoader thread context class loader orqali drayverlarni topadi, shu bilan delegatsiya chegarasi aylanib o'tiladi.",
      },
    ],
  },
  {
    id: 54,
    title: "JVM bayroqlari va diagnostika asboblari",
    minutes: 14,
    desc: "Xotira, stack va GC sozlamalari hamda jps, jcmd, jstack va JFR.",
    blocks: [
      {
        type: "p",
        text: `JVM xatti-harakatini ishga tushirish paytida bayroqlar bilan boshqarish mumkin. Eng ko'p ishlatiladiganlar: <code>-Xms</code> va <code>-Xmx</code> (heap boshlang'ich va maksimal hajmi), <code>-Xss</code> (thread stack), <code>-XX:MaxMetaspaceSize</code> (klass metadata chegarasi).`,
      },
      {
        type: "h",
        text: "Bayroq turlarini ajratish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Bayroqlar {
    public static void main(String[] args) {
        String[] bayroqlar = {
            "-Xmx512m",
            "-XX:MaxMetaspaceSize=256m",
            "-Xss1m"
        };
        for (String b : bayroqlar) {
            String tur = b.startsWith("-XX:")
                ? "XX"
                : b.startsWith("-X") ? "X" : "boshqa";
            System.out.println(b + " -> " + tur);
        }
    }
}`,
        output:
          "-Xmx512m -> X\n-XX:MaxMetaspaceSize=256m -> XX\n-Xss1m -> X",
      },
      {
        type: "p",
        text: `Heap bilan metaspace alohida hisoblanadi: <code>-Xmx512m</code> faqat heapning yuqori chegarasi. Thread stacklari, code cache, metaspace va to'g'ridan-to'g'ri buferlar bundan tashqarida. Konteynerda umumiy limit ham hisobga olinadi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Xotira {
    public static void main(String[] args) {
        Runtime r = Runtime.getRuntime();
        System.out.println("protsessorlar: " + (r.availableProcessors() > 0));
        System.out.println("max xotira: " + (r.maxMemory() > 0));
        System.out.println("bo'sh xotira: " + (r.freeMemory() >= 0));
        System.out.println("umumiy >= bo'sh: " + (r.totalMemory() >= r.freeMemory()));
    }
}`,
        output:
          "protsessorlar: true\nmax xotira: true\nbo'sh xotira: true\numumiy >= bo'sh: true",
      },
      {
        type: "table",
        headers: ["Vosita", "Nima beradi", "Qachon kerak"],
        rows: [
          ["jps", "JVM jarayonlari ro'yxati", "PID topish"],
          ["jcmd", "Buyruqlar va diagnostika", "Heap dump, GC holati"],
          ["jstack", "Thread dump", "Deadlock va bloklanish"],
          ["JFR", "Hodisalar yozuvi", "Unumdorlik profili"],
        ],
      },
      {
        type: "note",
        text: `OOM bo'lganda avtomatik heap dump olish uchun <code>-XX:+HeapDumpOnOutOfMemoryError</code> va yo'lni beruvchi <code>-XX:HeapDumpPath</code> ishlatiladi. <code>-XX:+ExitOnOutOfMemoryError</code> jarayonni darhol tugatadi, bu orkestratorga qayta ishga tushirish imkonini beradi.`,
      },
    ],
    quiz: [
      {
        q: "-Xmx bayrog'i nimani belgilaydi?",
        options: [
          "Heapning maksimal hajmini",
          "Thread stack hajmini",
          "Metaspace hajmini",
          "Fayl deskriptorlari sonini",
        ],
        answer: 0,
        explanation:
          "-Xmx heap uchun yuqori chegara. U metaspace, stack yoki native xotirani qamramaydi.",
      },
      {
        q: "OOM yuz berganda avtomatik heap dump olish uchun qaysi bayroq ishlatiladi?",
        options: ["-Xss512k", "-XX:+UseZGC", "-XX:+HeapDumpOnOutOfMemoryError", "-Xshare:off"],
        answer: 2,
        explanation:
          "HeapDumpOnOutOfMemoryError OOM paytida heap snapshot yozadi; yo'lni HeapDumpPath bilan berish mumkin.",
      },
      {
        q: "jstack vositasi asosan nima uchun ishlatiladi?",
        options: [
          "Heapdagi obyektlar hajmini o'lchash",
          "Threadlarning holati va deadlockni ko'rish",
          "Klass faylini dekompilyatsiya qilish",
          "JAR faylini imzolash",
        ],
        answer: 1,
        explanation:
          "jstack har bir threadning stack trace'ini oladi. Bloklangan yoki deadlock holatidagi threadlarni aniqlashda foydali.",
      },
    ],
  },
  {
    id: 55,
    title: "Heap anatomiyasi: Eden, Survivor va Old",
    minutes: 16,
    desc: "Yosh avlod, TLAB, obyekt sarlavhasi va shallow size hisob-kitobi.",
    blocks: [
      {
        type: "p",
        text: `HotSpot heap'i avlodlarga bo'linadi: <b>young generation</b> (Eden va ikkita Survivor) hamda <b>old generation</b>. Yangi obyektlar odatda Eden'da, ko'pincha thread uchun ajratilgan <b>TLAB</b> ichida tug'iladi.`,
      },
      {
        type: "h",
        text: "Obyekt qayerda yashaydi",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.Arrays;

public class Joy {
    public static void main(String[] args) {
        int[] kichik = new int[4];
        Arrays.fill(kichik, 2);
        byte[] katta = new byte[1_000_000];

        System.out.println("kichik yig'indi: " + Arrays.stream(kichik).sum());
        System.out.println("katta uzunlik: " + katta.length);
        System.out.println("obyektlar tirik: " + (kichik != null && katta != null));
    }
}`,
        output: "kichik yig'indi: 8\nkatta uzunlik: 1000000\nobyektlar tirik: true",
      },
      {
        type: "p",
        text: `Kichik massiv Eden'da tez ajratiladi. Katta massiv ham shu yerga tushishi mumkin, lekin G1 da region yarmidan katta obyekt <b>humongous</b> hisoblanadi. Minor GC da tirik qolgan obyektlar Survivor'ga ko'chiriladi, ma'lum yoshdan keyin old generation'ga o'tadi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Olcham {
    static long tekisla(long n) {
        return (n + 7) / 8 * 8;
    }

    public static void main(String[] args) {
        long nuqta = tekisla(12 + 4 + 4);
        long massiv = tekisla(16 + 4 * 10);
        System.out.println("Nuqta: " + nuqta + " bayt");
        System.out.println("int[10]: " + massiv + " bayt");
        System.out.println("farq: " + (massiv - nuqta) + " bayt");
    }
}`,
        output: "Nuqta: 24 bayt\nint[10]: 56 bayt\nfarq: 32 bayt",
      },
      {
        type: "table",
        headers: ["Hudud", "Nima saqlanadi", "Tozalash"],
        rows: [
          ["Eden", "Yangi obyektlar", "Minor GC"],
          ["Survivor S0/S1", "Minor GC dan omon qolganlar", "Copying"],
          ["Old", "Uzoq yashovchi obyektlar", "Major/Mixed GC"],
          ["Metaspace", "Klass metadata", "Klass tushirilganda"],
        ],
      },
      {
        type: "note",
        text: `Juda katta massivlarni bo'laklarga bo'lish GC uchun foydali bo'lishi mumkin: humongous obyektlar alohida regionlarni egallaydi va fragmentatsiyani oshiradi. Biroq avvalo o'lchash kerak, taxmin bilan optimallashtirish esa ko'pincha zarar keltiradi.`,
      },
    ],
    quiz: [
      {
        q: "Yangi yaratilgan kichik obyekt odatda heapning qaysi qismida joylashadi?",
        options: ["Old generation", "Eden", "Metaspace", "Code cache"],
        answer: 1,
        explanation:
          "Ko'pchilik yangi obyektlar Eden'da, ko'pincha TLAB ichida ajratiladi. Ular GC dan keyin Survivor yoki Old ga o'tishi mumkin.",
      },
      {
        q: "Survivor hududlarining vazifasi nima?",
        options: [
          "Klass metadata'sini saqlash",
          "JIT kodini saqlash",
          "Minor GC dan omon qolgan obyektlarni vaqtincha saqlash",
          "Thread stacklarini saqlash",
        ],
        answer: 2,
        explanation:
          "Ikki Survivor hududi copying collector uchun ishlatiladi: tirik obyektlar biridan ikkinchisiga ko'chiriladi.",
      },
      {
        q: "Metaspace hududida nima saqlanadi?",
        options: [
          "Klasslar haqidagi metadata",
          "Faqat int massivlari",
          "Threadlarning lokal o'zgaruvchilari",
          "Faqat string konstantalari",
        ],
        answer: 0,
        explanation:
          "Metaspace klass tuzilishi, metodlar, konstantalar va boshqa metadata uchun xizmat qiladi; u Java 8 dan beri native xotirada.",
      },
    ],
  },
  {
    id: 56,
    title: "GC algoritmlari: Serial, Parallel, G1, ZGC",
    minutes: 17,
    desc: "Throughput, latency va footprint orasidagi tanlov hamda zamonaviy collectorlar.",
    blocks: [
      {
        type: "p",
        text: `Har bir garbage collector uchta maqsad orasida murosa qiladi: <b>throughput</b> (foydali ish ulushi), <b>latency</b> (pauza uzunligi) va <b>footprint</b> (xotira sarfi). Sayt uchun javob vaqti muhim bo'lsa, batch hisob-kitob uchun esa umumiy unumdorlik muhimroq.`,
      },
      {
        type: "h",
        text: "Qaysi collector qayerda",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.util.stream.Collectors;

public class GC {
    public static void main(String[] args) {
        String nomlar = ManagementFactory.getGarbageCollectorMXBeans()
            .stream()
            .map(GarbageCollectorMXBean::getName)
            .sorted()
            .collect(Collectors.joining(", "));
        System.out.println(nomlar);
    }
}`,
        output: "G1 Old Generation, G1 Young Generation",
      },
      {
        type: "p",
        text: `Yuqoridagi natija <code>-XX:+UseG1GC</code> bilan ishga tushirilgan Java 17+ uchun. Serial bitta threadda ishlaydi va kichik heap uchun sodda. Parallel bir nechta thread bilan throughputga urg'u beradi. G1 heapni regionlarga bo'lib, pauzani boshqarishga harakat qiladi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Throughput {
    public static void main(String[] args) {
        double jami = 1000.0;
        double pauza = 40.0;
        double foydali = (jami - pauza) / jami * 100;
        System.out.println("Foydali ish: " + foydali + "%");
        System.out.println("Pauza byudjeti: " + (pauza <= 50 ? "maqbul" : "yuqori"));
    }
}`,
        output: "Foydali ish: 96.0%\nPauza byudjeti: maqbul",
      },
      {
        type: "table",
        headers: ["Collector", "Kuchli tomoni", "Tipik ishlatish"],
        rows: [
          ["Serial", "Sodda, kam xotira", "Kichik CLI va testlar"],
          ["Parallel", "Yuqori throughput", "Batch va analitika"],
          ["G1", "Boshqariladigan pauza", "Umumiy server ilovalari"],
          ["ZGC", "Juda qisqa pauza", "Katta heap, latensiyaga sezgir"],
        ],
      },
      {
        type: "note",
        text: `ZGC va Shenandoah juda katta heap'larda ham qisqa pauza berishga mo'ljallangan, lekin ular bepul emas: ko'proq xotira va CPU sarflashi mumkin. Collector tanlashdan oldin real yuklama bilan GC loglarini yig'ing. Default G1 har doim ham eng yaxshi tanlov emas.`,
      },
    ],
    quiz: [
      {
        q: "Juda qisqa GC pauzasi muhim bo'lgan katta heap uchun qaysi collector eng mos?",
        options: ["Serial", "Parallel", "G1 Young only", "ZGC"],
        answer: 3,
        explanation:
          "ZGC katta heap'larda ham millisekunddan past pauzalarga intiladi. Bu javob vaqtiga sezgir xizmatlar uchun muhim.",
      },
      {
        q: "Parallel GC asosan nimaga ustuvorlik beradi?",
        options: [
          "Umumiy throughputga",
          "Har bir so'rovning minimal latensiyasiga",
          "Metaspace hajmini kamaytirishga",
          "Faqat kichik heap'ga",
        ],
        answer: 0,
        explanation:
          "Parallel collector bir nechta GC thread yordamida umumiy ish hajmini tez bajarishga, ya'ni throughputga urg'u beradi.",
      },
      {
        q: "G1 collector heapni qanday tashkil qiladi?",
        options: [
          "Bitta uzluksiz massiv sifatida",
          "Faqat old generationdan iborat qilib",
          "Teng o'lchamdagi regionlar to'plami sifatida",
          "Har bir thread uchun alohida heap sifatida",
        ],
        answer: 2,
        explanation:
          "G1 heapni regionlarga bo'ladi va yosh/old regionlarni aralash tozalaydi. Bu pauza maqsadini boshqarishni osonlashtiradi.",
      },
    ],
  },
  {
    id: 57,
    title: "G1: regionlar, mixed GC va humongous",
    minutes: 16,
    desc: "G1 ning ichki bosqichlari, remembered set va katta obyektlar bilan ishlash.",
    blocks: [
      {
        type: "p",
        text: `G1 heapni teng o'lchamdagi <b>regionlar</b>ga bo'ladi (odatda 1–32 MB). Har bir region eden, survivor, old yoki humongous bo'lishi mumkin. Collector eng ko'p axlat beradigan regionlarni tanlab, pauza maqsadiga sig'ishga harakat qiladi.`,
      },
      {
        type: "h",
        text: "Region matematikasi",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Region {
    public static void main(String[] args) {
        int heapMb = 4096;
        int regionMb = 4;
        int regionlar = heapMb / regionMb;
        int humongous = regionMb / 2;
        System.out.println("Regionlar: " + regionlar);
        System.out.println("Humongous chegarasi: " + humongous + " MB");
        System.out.println("2048 MB / 4 MB = " + (2048 / regionMb));
    }
}`,
        output:
          "Regionlar: 1024\nHumongous chegarasi: 2 MB\n2048 MB / 4 MB = 512",
      },
      {
        type: "p",
        text: `Region o'lchamidan katta yoki uning yarmiga teng obyekt <b>humongous</b> deb belgilanadi. Bunday obyekt ketma-ket regionlarni egallaydi. Katta massiv yoki ulkan stringni qayta-qayta yaratish GC uchun qimmatga tushadi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public class Holat {
    public static void main(String[] args) {
        String[] regionlar = new String[8];
        Arrays.fill(regionlar, "bo'sh");
        regionlar[0] = "eden";
        regionlar[1] = "eden";
        regionlar[2] = "survivor";
        regionlar[3] = "old";

        Map<String, Long> sanoq = Arrays.stream(regionlar)
            .collect(Collectors.groupingBy(x -> x, Collectors.counting()));
        System.out.println("eden=" + sanoq.get("eden"));
        System.out.println("survivor=" + sanoq.get("survivor"));
        System.out.println("old=" + sanoq.get("old"));
        System.out.println("bo'sh=" + sanoq.get("bo'sh"));
    }
}`,
        output: "eden=2\nsurvivor=1\nold=1\nbo'sh=4",
      },
      {
        type: "table",
        headers: ["Bosqich", "Nima qiladi", "To'xtatadi?"],
        rows: [
          ["Young only", "Eden va survivorlarni tozalaydi", "Qisqa STW"],
          ["Concurrent mark", "Old regionlardagi tirik obyektlarni belgilaydi", "Deyarli yo'q"],
          ["Remark", "Belgilashni yakunlaydi", "Qisqa STW"],
          ["Mixed", "Young va tanlangan old regionlar", "STW pauzalar"],
        ],
      },
      {
        type: "note",
        text: `<code>-XX:MaxGCPauseMillis=200</code> — bu maqsad, kafolat emas. G1 region tanlashda shu byudjetga yaqinlashishga harakat qiladi, lekin juda katta tirik obyektlar yoki humongous allocation pauzani oshirishi mumkin. Maqsadni juda kichik qilib qo'yish throughputni tushirib yuboradi.`,
      },
    ],
    quiz: [
      {
        q: "G1 da obyekt qachon humongous hisoblanadi?",
        options: [
          "Har doim 1 MB dan katta bo'lsa",
          "Region o'lchamining yarmiga teng yoki undan katta bo'lsa",
          "Faqat old generationga o'tganda",
          "Faqat String bo'lsa",
        ],
        answer: 1,
        explanation:
          "G1 humongous obyektni region hajmining kamida yarmi deb belgilaydi. U alohida, ketma-ket regionlarda saqlanadi.",
      },
      {
        q: "Mixed GC nimani tozalaydi?",
        options: [
          "Faqat metaspace'ni",
          "Faqat survivor hududlarini",
          "Faqat code cache'ni",
          "Young regionlar va tanlangan old regionlarni",
        ],
        answer: 3,
        explanation:
          "Mixed GC young tozalashni davom ettiradi va bir vaqtda axlatga boy tanlangan old regionlarni ham qamrab oladi.",
      },
      {
        q: "MaxGCPauseMillis qanday talqin qilinadi?",
        options: [
          "Bu qat'iy kafolatlangan yuqori chegara",
          "Bu heapning maksimal hajmi",
          "Bu collector uchun maqsadli pauza vaqti",
          "Bu GC threadlari soni",
        ],
        answer: 2,
        explanation:
          "Bu maqsadli qiymat: collector unga erishishga harakat qiladi, ammo mutlaq kafolat bermaydi. Juda kichik qiymat unumdorlikni pasaytiradi.",
      },
    ],
  },
];
