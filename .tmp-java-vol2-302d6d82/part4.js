module.exports = [
  {
    id: 74,
    title: "Wildcards va PECS qoidasi",
    minutes: 16,
    desc: "? extends va ? super yordamida moslashuvchan, ammo xavfsiz generic API yozish.",
    blocks: [
      {
        type: "p",
        text: `Generiklar <b>invariant</b>: <code>List<Integer></code> ni <code>List<Number></code> ga tenglashtirib bo'lmaydi, garchi Integer Number bo'lsa ham. Wildcard bu cheklovni yumshatadi. Asosiy qoida — <b>PECS</b>: Producer <code>extends</code>, Consumer <code>super</code>.`,
      },
      {
        type: "h",
        text: "Producer va consumer birga",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.List;

public class Pecs {
    static <T> void nusxala(List<? extends T> manba, List<? super T> maqsad) {
        for (T x : manba) {
            maqsad.add(x);
        }
    }

    public static void main(String[] args) {
        List<Integer> sonlar = List.of(1, 2, 3);
        List<Number> qabul = new ArrayList<>();
        nusxala(sonlar, qabul);
        System.out.println(qabul);
        System.out.println(qabul.size());
    }
}`,
        output: "[1, 2, 3]\n3",
      },
      {
        type: "p",
        text: `Manbadan faqat o'qiymiz, shuning uchun <code>? extends T</code> mos. Maqsadga yozamiz, shuning uchun <code>? super T</code> kerak. <code>List&lt;? extends Number&gt;</code> dan Number o'qish mumkin, lekin unga yangi element qo'shib bo'lmaydi: kompilyator aniq turni bilmaydi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.List;

public class Yigindi {
    static double yigindi(List<? extends Number> sonlar) {
        double s = 0;
        for (Number n : sonlar) {
            s += n.doubleValue();
        }
        return s;
    }

    public static void main(String[] args) {
        System.out.println(yigindi(List.of(1, 2, 3)));
        System.out.println(yigindi(List.of(1.5, 2.5)));
    }
}`,
        output: "6.0\n4.0",
      },
      {
        type: "table",
        headers: ["Tur", "O'qish", "Yozish", "Maqsad"],
        rows: [
          ["List<T>", "T", "T", "Aniq tur"],
          ["List<? extends T>", "T", "Yo'q", "Producer"],
          ["List<? super T>", "Object", "T", "Consumer"],
          ["List<?>", "Object", "Yo'q", "Faqat o'qish"],
        ],
      },
      {
        type: "note",
        text: `Wildcardni API chegarasida ishlating, ichki implementatsiyada aniq tur parametri bilan ishlang. Qaytish turida <code>? extends</code> mos, parametrda <code>? super</code> mos. Ortiqcha wildcard kodni o'qishni qiyinlashtiradi, shuning uchun faqat haqiqiy moslashuvchanlik kerak bo'lsa qo'shing.`,
      },
    ],
    quiz: [
      {
        q: "PECS qoidasiga ko'ra producer kolleksiya qanday e'lon qilinadi?",
        options: [
          "List<? super T>",
          "List<? extends T>",
          "List<Object>",
          "List<T super Object>",
        ],
        answer: 1,
        explanation:
          "Producer ma'lumot beradi, shuning uchun extends ishlatiladi. Consumer esa super bilan yozish uchun ochiladi.",
      },
      {
        q: "List<? extends Number> ga yangi Integer qo'shish nima uchun mumkin emas?",
        options: [
          "Chunki Integer Number emas",
          "Chunki extends faqat o'qish uchun",
          "Chunki kompilyator aniq turini bilmaydi, u Double ro'yxati ham bo'lishi mumkin",
          "Chunki wildcardlar runtime da o'chiriladi",
        ],
        answer: 2,
        explanation:
          "List<? extends Number> Double yoki BigDecimal ro'yxati bo'lishi mumkin. Integer qo'shish tur xavfsizligini buzadi, shuning uchun kompilyator taqiqlaydi.",
      },
      {
        q: "List<Object> va List<String> orasidagi munosabat qanday?",
        options: [
          "List<Object> List<String> ning supertipi emas",
          "List<String> List<Object> ga avtomatik o'tadi",
          "Ikkalasi bir xil tur",
          "Faqat runtime da mos keladi",
        ],
        answer: 0,
        explanation:
          "Generiklar invariant. List<String> ni List<Object> ga berish mumkin emas, aks holda unga Integer qo'shish mumkin bo'lardi.",
      },
    ],
  },
  {
    id: 75,
    title: "Generic metodlar va chegaralangan turlar",
    minutes: 16,
    desc: "Rekursiv bound, multiple bounds va generic metodlarda tur inferensiyasi.",
    blocks: [
      {
        type: "p",
        text: `Generic metod o'z tur parametrini e'lon qiladi va uni chaqiruvda aniqlaydi. <code>&lt;T extends Comparable&lt;T&gt;&gt;</code> kabi <b>rekursiv bound</b> T ni o'zi bilan solishtirish imkonini beradi. Bir nechta chegara <code>&amp;</code> bilan qo'shiladi, klass chegarasi birinchi turadi.`,
      },
      {
        type: "h",
        text: "Eng katta element",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.List;

public class EngKatta {
    static <T extends Comparable<T>> T engKatta(List<T> list) {
        T max = list.get(0);
        for (T x : list) {
            if (x.compareTo(max) > 0) {
                max = x;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        System.out.println(engKatta(List.of(3, 9, 4)));
        System.out.println(engKatta(List.of("java", "sql", "c")));
    }
}`,
        output: "9\nsql",
      },
      {
        type: "p",
        text: `Kompilyator <code>T</code> ni chaqiruvdan aniqlaydi: birinchi chaqiruvda Integer, ikkinchisida String. <code>Comparable&lt;T&gt;</code> chegarasi <code>compareTo</code> mavjudligini kafolatlaydi. String uchun lug'at tartibi ishlaydi, shuning uchun <code>sql</code> eng katta.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Kichik {
    static <T extends Number & Comparable<T>> T kichik(T a, T b) {
        return a.compareTo(b) <= 0 ? a : b;
    }

    public static void main(String[] args) {
        System.out.println(kichik(10, 3));
        System.out.println(kichik(2.5, 1.5));
    }
}`,
        output: "3\n1.5",
      },
      {
        type: "table",
        headers: ["Shakl", "Misol", "Izoh"],
        rows: [
          ["Oddiy bound", "T extends Number", "Number metodlari mavjud"],
          ["Rekursiv bound", "T extends Comparable<T>", "O'z turi bilan solishtirish"],
          ["Multiple bounds", "T extends Number & Comparable<T>", "Klass birinchi"],
          ["Wildcard bound", "? extends T", "API moslashuvchanligi"],
        ],
      },
      {
        type: "note",
        text: `Generic metodni chaqirishda tur ba'zan kontekstdan aniqlanmaydi. U holda <code>Kichik.&lt;Integer&gt;kichik(10, 3)</code> kabi aniq ko'rsatish mumkin. Generic tur primitiv bo'la olmaydi; avtoboxing natijasi <code>Integer</code> bo'ladi.`,
      },
    ],
    quiz: [
      {
        q: "T extends Comparable<T> qanday bound hisoblanadi?",
        options: [
          "Oddiy wildcard",
          "Cheksiz bound",
          "Rekursiv bound",
          "Runtime bound",
        ],
        answer: 2,
        explanation:
          "T o'zini Comparable<T> ichida ishlatadi, shuning uchun bu rekursiv bound deb ataladi. U compareTo ning tur xavfsizligini beradi.",
      },
      {
        q: "Bir nechta bound yozilganda qaysi qoida amal qiladi?",
        options: [
          "Klass bound birinchi, interfeyslar keyin",
          "Faqat interfeyslar yoziladi",
          "Tartib muhim emas",
          "Faqat bitta bound ruxsat etiladi",
        ],
        answer: 0,
        explanation:
          "Java da klass birinchi chegara bo'lishi kerak, undan keyin interfeyslar & bilan qo'shiladi.",
      },
      {
        q: "Generic metodning tur parametri qayerdan aniqlanishi mumkin?",
        options: [
          "Faqat runtime da",
          "Faqat klass nomidan",
          "Faqat fayl nomidan",
          "Argumentlar va qaytish kontekstidan",
        ],
        answer: 3,
        explanation:
          "Kompilyator argument turlari, maqsad turi va boshqa kontekstdan T ni inferensiya qiladi. Kerak bo'lsa aniq tur ham beriladi.",
      },
    ],
  },
  {
    id: 76,
    title: "Type erasure va generic ma'lumotning chegarasi",
    minutes: 17,
    desc: "Erasure, bridge metodlar, Class<T> token va generic massiv muammolari.",
    blocks: [
      {
        type: "p",
        text: `Java generiklari <b>type erasure</b> orqali amalga oshiriladi: kompilyatsiyadan keyin tur parametrlari o'chiriladi. <code>List&lt;String&gt;</code> va <code>List&lt;Integer&gt;</code> runtime da bir xil <code>ArrayList</code> klassiga ega. Bu eski kod bilan moslikni saqlaydi, lekin ba'zi cheklovlar tug'diradi.`,
      },
      {
        type: "h",
        text: "Tur ma'lumotini saqlash",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.List;

abstract class Tur<T> {
    private final Class<T> tur;

    Tur(Class<T> tur) {
        this.tur = tur;
    }

    Class<T> tur() {
        return tur;
    }
}

class MatnTur extends Tur<String> {
    MatnTur() {
        super(String.class);
    }
}

public class Erasure {
    public static void main(String[] args) {
        System.out.println(new MatnTur().tur().getSimpleName());
        System.out.println(List.class.getTypeParameters().length);
        System.out.println(new ArrayList<String>().getClass()
            == new ArrayList<Integer>().getClass());
    }
}`,
        output: "String\n1\ntrue",
      },
      {
        type: "p",
        text: `Runtime da tur parametrini bilish uchun <b>type token</b> ishlatiladi: <code>Class&lt;T&gt;</code> ni konstruktorga beramiz. <code>List.class.getTypeParameters()</code> esa interfeys e'lonidagi E parametrini ko'rsatadi. Ikki xil generic ro'yxatning runtime klasslari bir xil.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Varargs {
    @SafeVarargs
    static <T> T[] yaratish(T... elementlar) {
        return elementlar;
    }

    public static void main(String[] args) {
        String[] matnlar = yaratish("a", "b");
        Integer[] sonlar = yaratish(1, 2, 3);
        System.out.println(matnlar.length);
        System.out.println(sonlar[0]);
    }
}`,
        output: "2\n1",
      },
      {
        type: "table",
        headers: ["Amal", "Ruxsat", "Sabab"],
        rows: [
          ["new T()", "Yo'q", "T runtime da yo'q"],
          ["new T[]", "Yo'q", "Massiv turi aniq bo'lishi kerak"],
          ["instanceof List<String>", "Yo'q", "Erasure dan keyin String yo'q"],
          ["Class<T> token", "Ha", "Aniq Class obyekti beriladi"],
          ["@SafeVarargs", "Shartli", "Heap pollution bo'lmasa"],
        ],
      },
      {
        type: "note",
        text: `Bridge metodlar erasure natijasida paydo bo'ladi: subclass generic metodni override qilganda kompilyator tur mosligini ta'minlovchi sintetik metod yaratadi. Generic massiv yaratish uchun <code>Array.newInstance(Class&lt;T&gt;, size)</code> yoki kolleksiyadan foydalaning.`,
      },
    ],
    quiz: [
      {
        q: "Type erasure dan keyin List<String> va List<Integer> haqida nima to'g'ri?",
        options: [
          "Ular runtime da bir xil klassga ega",
          "Ular runtime da butunlay boshqa klasslar",
          "String versiyasi tezroq ishlaydi",
          "Integer versiyasi xotira ko'p oladi",
        ],
        answer: 0,
        explanation:
          "Erasure tur argumentlarini o'chiradi, shuning uchun ikkalasi ham List va ArrayList ning bir xil runtime klassidan foydalanadi.",
      },
      {
        q: "Bridge metod nima uchun paydo bo'ladi?",
        options: [
          "Faqat interfeyslar uchun",
          "Threadlar orasida ko'prik uchun",
          "GC bilan bog'lanish uchun",
          "Erasure sharoitida override tur mosligini ta'minlash uchun",
        ],
        answer: 3,
        explanation:
          "Kompilyator subclass metodiga tur bo'yicha mos keluvchi sintetik bridge metod qo'shadi, shunda polimorf chaqiruv ishlaydi.",
      },
      {
        q: "Generic tur bilan instanceof ni qanday yozish mumkin?",
        options: [
          "if (x instanceof List<String>)",
          "if (x instanceof List<?>)",
          "if (x instanceof T)",
          "if (x instanceof new T())",
        ],
        answer: 1,
        explanation:
          "Runtime da element turi yo'q, shuning uchun faqat xom yoki wildcard tur bilan tekshirish mumkin. Aniq String turini tekshirib bo'lmaydi.",
      },
    ],
  },
  {
    id: 77,
    title: "Reflection: dinamik chaqiruv va MethodHandle",
    minutes: 18,
    desc: "Maydon va metodlarga murojaat, setAccessible xavfi va tezkor MethodHandle.",
    blocks: [
      {
        type: "p",
        text: `Reflection dasturga runtime da klass tuzilishini ko'rish va metodlarni chaqirish imkonini beradi. Framewoklar DI, serializatsiya va testlashda shundan foydalanadi. Lekin reflection sekinroq, xatolarni kompilyator ushlamaydi va inkapsulyatsiyani buzishi mumkin.`,
      },
      {
        type: "h",
        text: "Private metodni chaqirish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.lang.reflect.Field;
import java.lang.reflect.Method;

class Hisoblagich {
    private int qiymat = 5;

    private int qosh(int x) {
        return qiymat + x;
    }
}

public class Asl {
    public static void main(String[] args) throws Exception {
        Class<?> c = Hisoblagich.class;
        Object o = c.getDeclaredConstructor().newInstance();

        Method m = c.getDeclaredMethod("qosh", int.class);
        m.setAccessible(true);
        System.out.println("natija: " + m.invoke(o, 7));

        Field f = c.getDeclaredField("qiymat");
        f.setAccessible(true);
        System.out.println("qiymat: " + f.get(o));
    }
}`,
        output: "natija: 12\nqiymat: 5",
      },
      {
        type: "p",
        text: `<code>getDeclaredMethod</code> faqat shu klassda e'lon qilingan metodni topadi, merosni qamramaydi. <code>setAccessible(true)</code> private a'zoga kirishga urinadi; modul tizimida bu <code>opens</code> bilan cheklanishi mumkin. Reflection obyektlarini qayta ishlatish uchun kesh qilish kerak.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodType;

public class Mh {
    public static void main(String[] args) throws Throwable {
        MethodHandle mh = MethodHandles.lookup().findVirtual(
            String.class,
            "toUpperCase",
            MethodType.methodType(String.class));

        String katta = (String) mh.invokeExact("java");
        System.out.println("natija: " + katta);
        System.out.println("turi: " + mh.type());
    }
}`,
        output: "natija: JAVA\nturi: (String)String",
      },
      {
        type: "table",
        headers: ["Vosita", "Tezlik", "Xavfsizlik", "Qachon"],
        rows: [
          ["Direct call", "Eng tez", "Kompilyator tekshiradi", "Oddiy kod"],
          ["Reflection", "Sekin", "Runtime xato", "Dinamik framework"],
          ["MethodHandle", "O'rtacha/tez", "Runtime xato", "Takroriy dinamik chaqiruv"],
          ["VarHandle", "Tez", "Aniq xotira modeli", "Field/array access"],
        ],
      },
      {
        type: "note",
        text: `Library kodida <code>setAccessible(true)</code> bilan boshqa modul ichiga kirish odob emas: bu keyingi versiyada buziladi. Reflection natijalarini <code>static final</code> keshda saqlang, lekin ClassLoader sizib ketmasligiga e'tibor bering.`,
      },
    ],
    quiz: [
      {
        q: "getDeclaredMethod qaysi metodlarni topadi?",
        options: [
          "Faqat joriy klassda e'lon qilingan metodlarni",
          "Barcha meros olingan metodlarni",
          "Faqat public metodlarni",
          "Faqat static metodlarni",
        ],
        answer: 0,
        explanation:
          "getDeclaredMethod joriy klassning o'zida e'lon qilingan metodni topadi, meros olinganlarini emas. getMethod esa public meros metodlarini ham ko'radi.",
      },
      {
        q: "Reflection ning asosiy kamchiligi nima?",
        options: [
          "U butun JVM ni to'xtatadi",
          "U faqat recordlar bilan ishlaydi",
          "Kompilyator xatolarini ushlamaydi va sekinroq",
          "U ClassLoader ni o'chiradi",
        ],
        answer: 2,
        explanation:
          "Metod nomi va parametrlar runtime da tekshiriladi, xato keyin chiqadi. Reflection direct chaqiruvdan sekinroq.",
      },
      {
        q: "MethodHandle ning afzalligi nimada?",
        options: [
          "U reflectiondan sekinroq",
          "U tur xavfsizligini butunlay yo'q qiladi",
          "U faqat private maydonlar uchun",
          "Takroriy dinamik chaqiruvda samaraliroq",
        ],
        answer: 3,
        explanation:
          "MethodHandle JVM tomonidan optimallashtiriladi va takroriy chaqiruvlarda reflectiondan tezroq bo'lishi mumkin.",
      },
    ],
  },
  {
    id: 78,
    title: "Dynamic proxy va annotatsiyalar",
    minutes: 17,
    desc: "InvocationHandler, kesishuvchi logika va runtime annotatsiyalarni skanerlash.",
    blocks: [
      {
        type: "p",
        text: `JDK dynamic proxy interfeys uchun runtime da vositachi obyekt yaratadi. Har bir metod chaqiruvi <code>InvocationHandler</code> ga tushadi. Bu loglash, metrika, retry yoki tranzaksiya kabi kesishuvchi vazifalarni asl kodga aralashtirmasdan qo'shish imkonini beradi.`,
      },
      {
        type: "h",
        text: "Loglovchi proxy",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.lang.reflect.Proxy;

interface Xizmat {
    String salom(String ism);
}

class XizmatImpl implements Xizmat {
    public String salom(String ism) {
        return "Salom, " + ism;
    }
}

public class ProxyDemo {
    public static void main(String[] args) {
        Xizmat asl = new XizmatImpl();
        Xizmat proxy = (Xizmat) Proxy.newProxyInstance(
            Xizmat.class.getClassLoader(),
            new Class<?>[]{Xizmat.class},
            (p, m, a) -> {
                System.out.println("chaqiruv: " + m.getName());
                return m.invoke(asl, a);
            });

        System.out.println(proxy.salom("Aziza"));
    }
}`,
        output: "chaqiruv: salom\nSalom, Aziza",
      },
      {
        type: "p",
        text: `Proxy faqat interfeyslarni o'ray oladi; klass uchun bytecode kutubxonalari kerak. Barcha chaqiruvlar bitta handler orqali o'tadi, shuning uchun uning ichida asl metodni chaqirishni unutmang. Proxy qatlami qo'shimcha xarajat tug'diradi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.reflect.Method;

@Retention(RetentionPolicy.RUNTIME)
@interface Muhim {
}

public class Annotatsiya {
    @Muhim
    static void vazifa() {
    }

    public static void main(String[] args) throws Exception {
        Method m = Annotatsiya.class.getDeclaredMethod("vazifa");
        System.out.println("bor: " + m.isAnnotationPresent(Muhim.class));
        System.out.println("soni: " + m.getAnnotations().length);
    }
}`,
        output: "bor: true\nsoni: 1",
      },
      {
        type: "table",
        headers: ["Retention", "Qachon saqlanadi", "Tipik ishlatish"],
        rows: [
          ["SOURCE", "Faqat manba kodda", "Kompilyator tekshiruvi"],
          ["CLASS", "Class faylda, runtime ko'rinmaydi", "Bayt-kod tahlili"],
          ["RUNTIME", "Runtime reflection uchun", "DI, test, serializatsiya"],
        ],
      },
      {
        type: "note",
        text: `Annotatsiya faqat metadata; uni o'qib, mantiqni reflection yoki annotation processor bajaradi. <code>@Target</code> bilan qo'llanish joyini cheklang. Runtime skanerlash butun classpathni aylanib chiqishi mumkin, shuning uchun paket chegarasini aniq bering.`,
      },
    ],
    quiz: [
      {
        q: "JDK dynamic proxy qanday turlarni o'ray oladi?",
        options: [
          "Har qanday final klassni",
          "Faqat recordlarni",
          "Faqat primitivlarni",
          "Interfeyslarni",
        ],
        answer: 3,
        explanation:
          "Proxy klass runtime da interfeyslarni implement qiladi. Klasslarni o'rash uchun CGLIB yoki ByteBuddy kabi kutubxonalar kerak.",
      },
      {
        q: "InvocationHandler.invoke ichida nima qilish kerak?",
        options: [
          "Faqat log yozib, natijani tashlab yuborish",
          "Asl metodni chaqirib, natijasini qaytarish",
          "Threadni to'xtatish",
          "Proxy ni qayta yaratish",
        ],
        answer: 1,
        explanation:
          "Handler kesishuvchi logikani bajaradi va odatda asl metodni chaqirib, uning natijasini qaytaradi.",
      },
      {
        q: "Annotatsiya runtime da reflection orqali ko'rinishi uchun qaysi retention kerak?",
        options: [
          "RUNTIME",
          "SOURCE",
          "CLASS",
          "LOCAL",
        ],
        answer: 0,
        explanation:
          "RetentionPolicy.RUNTIME annotatsiyani class faylida saqlaydi va JVM runtime da o'qish imkonini beradi.",
      },
    ],
  },
  {
    id: 79,
    title: "Builder va o'zgarmas qiymat obyektlari",
    minutes: 16,
    desc: "Ko'p parametrli konstruktorlar o'rniga xavfsiz, o'qiladigan builder qurish.",
    blocks: [
      {
        type: "p",
        text: `Konstruktor parametrlari ko'paygan sari chaqiruvchi kod o'qilmaydi va parametrlar tartibi chalkashadi. <b>Builder</b> nomlangan qadamlar beradi, validatsiyani <code>build()</code> da markazlashtiradi va immutable obyekt yaratadi.`,
      },
      {
        type: "h",
        text: "Validatsiya bilan builder",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.List;

final class Buyurtma {
    private final String mijoz;
    private final List<String> qatorlar;
    private final boolean tez;

    private Buyurtma(Builder b) {
        this.mijoz = b.mijoz;
        this.qatorlar = List.copyOf(b.qatorlar);
        this.tez = b.tez;
    }

    @Override
    public String toString() {
        return "Buyurtma[mijoz=" + mijoz + ", qatorlar=" + qatorlar + ", tez=" + tez + "]";
    }

    static final class Builder {
        private final String mijoz;
        private final List<String> qatorlar = new ArrayList<>();
        private boolean tez;

        Builder(String mijoz) {
            this.mijoz = mijoz;
        }

        Builder qator(String q) {
            qatorlar.add(q);
            return this;
        }

        Builder tez(boolean t) {
            tez = t;
            return this;
        }

        Buyurtma build() {
            if (qatorlar.isEmpty()) {
                throw new IllegalStateException("Kamida bitta qator kerak");
            }
            return new Buyurtma(this);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        var b = new Buyurtma.Builder("Aziza")
            .qator("java")
            .tez(true)
            .build();
        System.out.println(b);
        try {
            new Buyurtma.Builder("Ali").build();
        } catch (IllegalStateException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
        output:
          "Buyurtma[mijoz=Aziza, qatorlar=[java], tez=true]\nKamida bitta qator kerak",
      },
      {
        type: "p",
        text: `Builder ichidagi ro'yxat mutable, lekin tashqariga chiqmaydi: <code>build()</code> da himoyalangan nusxa olinadi. Validatsiya aynan bir joyda bo'lsa, noto'g'ri obyekt yaratilmaydi. Optional maydonlar uchun default qiymatlarni builderda berish qulay.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`record Sozlama(int port, String host) {
    static Sozlama standart() {
        return new Sozlama(8080, "localhost");
    }

    Sozlama portBilan(int yangi) {
        return new Sozlama(yangi, host);
    }
}

public class With {
    public static void main(String[] args) {
        var s = Sozlama.standart().portBilan(9090);
        System.out.println(s);
        System.out.println("host: " + s.host());
    }
}`,
        output: "Sozlama[port=9090, host=localhost]\nhost: localhost",
      },
      {
        type: "table",
        headers: ["Yondashuv", "Afzalligi", "Kamchiligi"],
        rows: [
          ["Telescoping constructor", "Sodda", "Parametrlar chalkashadi"],
          ["Builder", "O'qiladigan va validatsiyali", "Qo'shimcha kod"],
          ["Record", "Qisqa va immutable", "Ko'p optional maydonda noqulay"],
          ["Static factory", "Nom berish imkoniyati", "Cheklangan moslashuvchanlik"],
        ],
      },
      {
        type: "note",
        text: `Builder har doim kerak emas: 2–3 parametrli kichik obyekt uchun record yoki oddiy konstruktor yaxshiroq. Builder sinfini <code>final</code> qiling va maydonlarni tashqariga chiqarmang. <code>build()</code> dan keyin builderdan qayta foydalanish mumkin, lekin bu holatda uning holatini yaxshilab boshqaring.`,
      },
    ],
    quiz: [
      {
        q: "Builder naqshining asosiy maqsadi nima?",
        options: [
          "Barcha maydonlarni public qilish",
          "Har bir obyekt uchun yangi thread yaratish",
          "Murakkab qurishni nomlangan qadamlarga bo'lish va validatsiyani markazlashtirish",
          "Meros olishni avtomatlashtirish",
        ],
        answer: 2,
        explanation:
          "Builder ko'p parametrli konstruktorlarni o'qiladigan qadamlarga ajratadi va yaratishdan oldin tekshiruv o'tkazadi.",
      },
      {
        q: "build() da List.copyOf nima uchun ishlatiladi?",
        options: [
          "Tashqi kod record ichidagi ro'yxatni o'zgartirmasligi uchun",
          "Ro'yxatni saralash uchun",
          "Ro'yxatni threadga bo'lish uchun",
          "Xotirani kamaytirish uchun",
        ],
        answer: 0,
        explanation:
          "List.copyOf himoyalangan immutable nusxa beradi. Builderdagi mutable ro'yxat obyekt ichida qolmaydi.",
      },
      {
        q: "Qaysi holatda builder ortiqcha murakkablik bo'lishi mumkin?",
        options: [
          "20 ta optional maydon bo'lsa",
          "Validatsiya ko'p bo'lsa",
          "Faqat 2 ta majburiy parametr bo'lsa",
          "API mijozlari uchun qulaylik kerak bo'lsa",
        ],
        answer: 2,
        explanation:
          "Kichik obyekt uchun record yoki oddiy konstruktor yetarli. Builder ko'p optional parametr va validatsiya bo'lganda o'zini oqlaydi.",
      },
    ],
  },
  {
    id: 80,
    title: "Factory va dependency injection",
    minutes: 17,
    desc: "Obyekt yaratishni markazlashtirish, konstruktor injection va composition root.",
    blocks: [
      {
        type: "p",
        text: `<b>Factory</b> obyekt yaratish mantiqini chaqiruvchidan yashiradi. <b>Dependency injection</b> esa tayyor bog'liqliklarni tashqaridan beradi. Ikkalasi ham kodni aniq turga bog'lab qo'yishni kamaytiradi va testlashni osonlashtiradi.`,
      },
      {
        type: "h",
        text: "Oddiy factory",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`interface Xabar {
    void yubor(String matn);
}

class Email implements Xabar {
    public void yubor(String matn) {
        System.out.println("email: " + matn);
    }
}

class Sms implements Xabar {
    public void yubor(String matn) {
        System.out.println("sms: " + matn);
    }
}

class XabarFactory {
    static Xabar yarat(String tur) {
        return switch (tur) {
            case "email" -> new Email();
            case "sms" -> new Sms();
            default -> throw new IllegalArgumentException("noma'lum: " + tur);
        };
    }
}

public class FactoryDemo {
    public static void main(String[] args) {
        XabarFactory.yarat("email").yubor("salom");
        XabarFactory.yarat("sms").yubor("kod");
        try {
            XabarFactory.yarat("push");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
        output: "email: salom\nsms: kod\nnoma'lum: push",
      },
      {
        type: "p",
        text: `Factory noma'lum turni aniq xatoga aylantiradi va yaratish detallarini bir joyda saqlaydi. Lekin factory ichida yangi bog'liqliklar paydo bo'lsa, u tez orada "hamma narsani biladigan" sinfga aylanishi mumkin. Shunday paytda DI konteyner yoki composition root yordamga keladi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`interface Xabar {
    void yubor(String matn);
}

class Sms implements Xabar {
    public void yubor(String matn) {
        System.out.println("sms: " + matn);
    }
}

class Xizmat {
    private final Xabar xabar;

    Xizmat(Xabar xabar) {
        this.xabar = xabar;
    }

    void ishla() {
        xabar.yubor("hisobot");
    }
}

public class Di {
    public static void main(String[] args) {
        Xizmat xizmat = new Xizmat(new Sms());
        xizmat.ishla();
        System.out.println("bog'liqlik: konstruktor");
    }
}`,
        output: "sms: hisobot\nbog'liqlik: konstruktor",
      },
      {
        type: "table",
        headers: ["Yondashuv", "Kim yaratadi", "Afzalligi"],
        rows: [
          ["new", "Chaqiruvchi", "Sodda, lekin qattiq bog'lanish"],
          ["Factory", "Factory sinfi", "Yaratish mantiqi markazlashadi"],
          ["DI", "Composition root/konteyner", "Test va almashtirish oson"],
          ["Service locator", "Global registry", "Yashirin bog'liqlik xavfi"],
        ],
      },
      {
        type: "note",
        text: `Konstruktor injection eng aniq usul: bog'liqliklar majburiy va obyekt to'liq qurilgan holatda bo'ladi. Maydon injectionni faqat framework cheklovi bo'lsa ishlating. Service locator bog'liqliklarni yashirib, testda nimani almashtirish kerakligini noaniq qiladi.`,
      },
    ],
    quiz: [
      {
        q: "Factory naqshining vazifasi nima?",
        options: [
          "Obyekt yaratish mantiqini chaqiruvchidan yashirish",
          "Barcha metodlarni static qilish",
          "Threadlar sonini cheklash",
          "Faqat singleton yaratish",
        ],
        answer: 0,
        explanation:
          "Factory qaysi implementatsiya yaratilishini markazlashtiradi, chaqiruvchi esa faqat interfeys bilan ishlaydi.",
      },
      {
        q: "Konstruktor injection ning afzalligi nimada?",
        options: [
          "Bog'liqliklar yashirin qoladi",
          "Obyekt har doim to'liq qurilgan va testda almashtirish oson",
          "U reflection talab qiladi",
          "U barcha sinflarni final qiladi",
        ],
        answer: 1,
        explanation:
          "Konstruktor barcha majburiy bog'liqliklarni oladi. Obyekt yaratilgach u tayyor, testda esa oddiy fake berish mumkin.",
      },
      {
        q: "Service locator ning asosiy kamchiligi nima?",
        options: [
          "U juda tez ishlaydi",
          "U interfeyslarni qo'llab-quvvatlamaydi",
          "U faqat bitta threadda ishlaydi",
          "Bog'liqliklar yashirin bo'lib, kodning talablari noaniq qoladi",
        ],
        answer: 3,
        explanation:
          "Service locator global registry orqali bog'liqlik oladi. Konstruktordan kim nimaga muhtojligi ko'rinmaydi va test sozlash qiyinlashadi.",
      },
    ],
  },
  {
    id: 81,
    title: "Strategy va Template Method amalda",
    minutes: 16,
    desc: "Algoritmni kompozitsiya bilan almashtirish va qat'iy qadamlar skeletini saqlash.",
    blocks: [
      {
        type: "p",
        text: `<b>Strategy</b> algoritmni alohida obyektga chiqaradi va runtime da almashtirish imkonini beradi. <b>Template Method</b> esa umumiy qadamlarni ota klassda qat'iy belgilaydi, farq qiluvchi qadamlarni subclassga qoldiradi. Ikkalasi ham shart operatorlari ko'payib ketishining oldini oladi.`,
      },
      {
        type: "h",
        text: "Tolov strategiyasi",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`interface TolovStrategiyasi {
    int komissiya(int sum);
}

class Naqd implements TolovStrategiyasi {
    public int komissiya(int sum) {
        return 0;
    }
}

class Karta implements TolovStrategiyasi {
    public int komissiya(int sum) {
        return sum * 2 / 100;
    }
}

class TolovXizmati {
    private final TolovStrategiyasi strategiya;

    TolovXizmati(TolovStrategiyasi strategiya) {
        this.strategiya = strategiya;
    }

    int yakuniy(int sum) {
        return sum + strategiya.komissiya(sum);
    }
}

public class Strategy {
    public static void main(String[] args) {
        System.out.println(new TolovXizmati(new Naqd()).yakuniy(100000));
        System.out.println(new TolovXizmati(new Karta()).yakuniy(100000));
    }
}`,
        output: "100000\n102000",
      },
      {
        type: "p",
        text: `Yangi to'lov turi qo'shilsa, mavjud <code>TolovXizmati</code> o'zgarmaydi: faqat yangi strategiya yoziladi. Bu <b>Open/Closed</b> tamoyiliga mos. Strategy ni lambda bilan ham berish mumkin, agar interfeys bitta abstrakt metodga ega bo'lsa.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`abstract class Import {
    final void ishla() {
        och();
        qatorlarniOqi();
        yop();
    }

    void och() {
        System.out.println("ochildi");
    }

    abstract void qatorlarniOqi();

    void yop() {
        System.out.println("yopildi");
    }
}

class Csv extends Import {
    void qatorlarniOqi() {
        System.out.println("csv o'qildi");
    }
}

public class Template {
    public static void main(String[] args) {
        new Csv().ishla();
    }
}`,
        output: "ochildi\ncsv o'qildi\nyopildi",
      },
      {
        type: "table",
        headers: ["Mezon", "Strategy", "Template Method"],
        rows: [
          ["Almashtirish", "Runtime da obyekt bilan", "Subclass orqali"],
          ["Bog'lanish", "Kompozitsiya", "Meros"],
          ["Skelet", "Yo'q", "Ota klassda qat'iy"],
          ["Afzalligi", "Moslashuvchanlik", "Takrorlanishni kamaytirish"],
        ],
      },
      {
        type: "note",
        text: `Template Method dagi <code>final</code> skelet muhim: subclass qadamlar tartibini buzmasligi kerak. Biroq meros kuchli bog'lanish beradi, shuning uchun avval kompozitsiyani ko'rib chiqing. Strategy ko'pincha testlash uchun qulayroq.`,
      },
    ],
    quiz: [
      {
        q: "Strategy naqshining asosiy afzalligi nima?",
        options: [
          "Algoritmni runtime da almashtirish",
          "Barcha klasslarni final qilish",
          "Meros zanjirini chuqurlashtirish",
          "Global holat yaratish",
        ],
        answer: 0,
        explanation:
          "Context interfeys orqali strategiya bilan ishlaydi. Implementatsiyani chaqiruvchi kodni o'zgartirmasdan almashtirish mumkin.",
      },
      {
        q: "Template Method da qaysi qism subclassga qoldiriladi?",
        options: [
          "Qadamlarning tartibi",
          "Faqat klass nomi",
          "Farq qiluvchi qadamlar",
          "Butun algoritm",
        ],
        answer: 2,
        explanation:
          "Ota klass umumiy skelet va tartibni belgilaydi, subclass esa abstract qadamlarni o'ziga xos tarzda bajaradi.",
      },
      {
        q: "Strategy va Template Method orasidagi asosiy farq nima?",
        options: [
          "Strategy faqat Java 21 da ishlaydi",
          "Strategy kompozitsiyaga, Template Method merosga tayanadi",
          "Template Method runtime da almashtiriladi",
          "Ikkalasi bir xil",
        ],
        answer: 1,
        explanation:
          "Strategy obyektni tashqaridan berib kompozitsiya qiladi. Template Method esa subclass orqali merosdan foydalanadi.",
      },
    ],
  },
];
