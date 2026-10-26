{
  id: 60,
  title: "O'z annotatsiyasi: @Target, @Retention va default",
  minutes: 14,
  blocks: [
    {
      type: "p",
      html: "Annotatsiya — kodga biriktiriladigan <b>metama'lumot</b>. Uni <code>@interface</code> bilan e'lon qilamiz. <code>@Retention</code> annotatsiya qancha saqlanishini belgilaydi: <code>SOURCE</code> (faqat kompilyatsiyada), <code>CLASS</code> (class faylda, runtime'da ko'rinmaydi), <code>RUNTIME</code> (reflection orqali o'qiladi). <code>@Target</code> esa uni qayerga qo'yish mumkinligini cheklaydi.",
    },
    {
      type: "code",
      title: "AnnotatsiyaDemo.java",
      code: `import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
@interface Info {
    String muallif();

    String versiya() default "1.0";

    String[] teglar() default {};
}

@Info(muallif = "Ali", versiya = "2.1", teglar = {"demo", "api"})
class Xizmat {
    @Info(muallif = "Vali")
    public void ishgaTush() {
    }
}

public class AnnotatsiyaDemo {
    public static void main(String[] args) throws Exception {
        Info klassInfo = Xizmat.class.getAnnotation(Info.class);
        System.out.println(klassInfo.muallif());
        System.out.println(klassInfo.versiya());
        System.out.println(klassInfo.teglar().length);

        Info metodInfo = Xizmat.class
            .getDeclaredMethod("ishgaTush")
            .getAnnotation(Info.class);
        System.out.println(metodInfo.muallif());
        System.out.println(metodInfo.versiya());
    }
}`,
      output: "Ali\n2.1\n2\nVali\n1.0",
    },
    {
      type: "note",
      variant: "info",
      title: "Default qiymatlar",
      html: "<code>versiya()</code> uchun qiymat berilmagani uchun default <code>1.0</code> ishlatiladi. <code>muallif()</code> esa majburiy: uni yozmasa kompilyatsiya xatosi bo'ladi. Ro'yxat ko'rinishidagi qiymatlar figurali qavsda beriladi: <code>teglar = {\"demo\", \"api\"}</code>.",
    },
    {
      type: "code",
      title: "Takrorlanuvchi.java",
      code: `import java.lang.annotation.ElementType;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Repeatable(Risklar.class)
@interface Risk {
    String qiymat();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface Risklar {
    Risk[] value();
}

@Risk("yuqori")
@Risk("sekin")
class Operatsiya {
}

public class Takrorlanuvchi {
    public static void main(String[] args) {
        Risk[] risklar = Operatsiya.class.getAnnotationsByType(Risk.class);
        System.out.println("Soni: " + risklar.length);
        for (Risk risk : risklar) {
            System.out.println(risk.qiymat());
        }
    }
}`,
      output: "Soni: 2\nyuqori\nsekin",
    },
    {
      type: "ul",
      items: [
        "<code>@Retention</code> yozilmasa standart qiymat — <code>CLASS</code>; reflection uchun albatta <code>RUNTIME</code> kerak.",
        "<code>@Target</code> yozilmasa annotatsiya deyarli hamma joyda ishlatilishi mumkin; aniq cheklash API'ni toza qiladi.",
        "<code>@Repeatable</code> uchun konteyner annotatsiyasi (<code>Risk[] value()</code>) bo'lishi shart.",
        "<code>@Documented</code> annotatsiyani Javadoc'da ko'rsatadi, <code>@Inherited</code> esa merosga o'tkazadi (faqat klasslar uchun).",
      ],
    },
  ],
  quiz: [
    {
      q: "@Retention yozilmagan annotatsiya standart holatda qanday saqlanadi?",
      options: ["SOURCE", "CLASS", "RUNTIME", "Hech qayerda"],
      answer: 1,
      explain: "Standart retention — CLASS: ma'lumot class faylga tushadi, lekin reflection orqali o'qilmaydi. Runtime o'qish uchun RUNTIME yozish kerak.",
    },
    {
      q: "Annotatsiya faqat klass va metodlarga qo'yilishini cheklash uchun nima yoziladi?",
      options: [
        "@Target({ElementType.TYPE, ElementType.METHOD})",
        "@Retention(RetentionPolicy.RUNTIME)",
        "@Inherited",
        "@Documented",
      ],
      answer: 0,
      explain: "@Target annotatsiya qo'llanish mumkin bo'lgan element turlarini cheklaydi; TYPE — klass/interfeys, METHOD — metod.",
    },
    {
      q: "Takrorlanuvchi annotatsiya yaratish uchun qanday element shart?",
      options: [
        "Faqat @Retention(SOURCE)",
        "@Repeatable bilan ko'rsatilgan konteyner annotatsiyasi",
        "Annotatsiyada default qiymat",
        "Annotatsiya abstrakt bo'lishi",
      ],
      answer: 1,
      explain: "@Repeatable(Risklar.class) konteynerni ko'rsatadi; konteynerda Risk[] value() bo'ladi va takroriy annotatsiyalarni saqlaydi.",
    },
  ],
},
{
  id: 61,
  title: "Reflection: Class, Field va Method",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "<b>Reflection</b> dasturga o'z tuzilishini runtime'da ko'rish va o'zgartirish imkonini beradi: klasslarni topish, maydonlarni o'qish, metodlarni chaqirish, obyekt yaratish. Bu Spring, Hibernate, Jackson kabi kutubxonalarning asosi. Narxi — tezlik va xavfsizlik: reflection kompilyator tekshiruvini chetlab o'tadi, shuning uchun ehtiyotkorlik talab qiladi.",
    },
    {
      type: "code",
      title: "ReflectionDemo.java",
      code: `import java.lang.reflect.Field;
import java.lang.reflect.Method;

class Hisob {
    private int jami = 10;
    private final String nom = "hisob";

    public void qosh(int qiymat) {
        jami += qiymat;
    }

    private String holat() {
        return nom + ":" + jami;
    }
}

public class ReflectionDemo {
    public static void main(String[] args) throws Exception {
        Class<?> tur = Hisob.class;
        System.out.println("Nom: " + tur.getSimpleName());
        System.out.println("Maydonlar: " + tur.getDeclaredFields().length);
        System.out.println("Metodlar: " + tur.getDeclaredMethods().length);

        Hisob hisob = new Hisob();
        Method qosh = tur.getDeclaredMethod("qosh", int.class);
        qosh.invoke(hisob, 5);

        Field jami = tur.getDeclaredField("jami");
        jami.setAccessible(true);
        System.out.println("Jami: " + jami.getInt(hisob));

        Method holat = tur.getDeclaredMethod("holat");
        holat.setAccessible(true);
        System.out.println("Holat: " + holat.invoke(hisob));
    }
}`,
      output: "Nom: Hisob\nMaydonlar: 2\nMetodlar: 2\nJami: 15\nHolat: hisob:15",
    },
    {
      type: "table",
      head: ["Metod", "Nimani qaytaradi"],
      rows: [
        ["getDeclaredFields()", "Faqat shu klassning barcha maydonlari, private ham"],
        ["getFields()", "public maydonlar, meros olinganlari bilan"],
        ["getDeclaredMethods()", "Faqat shu klassning metodlari"],
        ["getMethods()", "public metodlar, ota klasslarniki ham"],
      ],
    },
    {
      type: "code",
      title: "Konstruktor.java",
      code: `import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

class Xabar {
    private final String matn;

    public Xabar(String matn) {
        this.matn = matn;
    }

    public String matn() {
        return matn;
    }

    public int uzunlik() {
        return matn.length();
    }
}

public class Konstruktor {
    public static void main(String[] args) throws Exception {
        Constructor<Xabar> konstruktor = Xabar.class.getConstructor(String.class);
        Xabar xabar = konstruktor.newInstance("salom");

        System.out.println("Matn: " + xabar.matn());
        Method uzunlik = Xabar.class.getMethod("uzunlik");
        System.out.println("Uzunlik: " + uzunlik.invoke(xabar));
        System.out.println("Konstruktorlar: " + Xabar.class.getConstructors().length);
    }
}`,
      output: "Matn: salom\nUzunlik: 5\nKonstruktorlar: 1",
    },
    {
      type: "note",
      variant: "warning",
      title: "setAccessible va modullar",
      html: "Java 9+ da kuchli inkapsulyatsiya mavjud: boshqa modulning ochiq bo'lmagan a'zolariga <code>setAccessible(true)</code> har doim ham ruxsat bermaydi — <code>InaccessibleObjectException</code> chiqishi mumkin. O'z kodingizda reflection'ni faqat framework chegarasida ishlating.",
    },
  ],
  quiz: [
    {
      q: "Private maydonlarni ham ro'yxatga olish uchun qaysi metod ishlatiladi?",
      options: ["getFields()", "getDeclaredFields()", "getMethods()", "getConstructors()"],
      answer: 1,
      explain: "getDeclaredFields() shu klassning barcha maydonlarini, shu jumladan private maydonlarni qaytaradi; getFields faqat public maydonlarni beradi.",
    },
    {
      q: "Reflection orqali private metodni chaqirishdan oldin nima qilinadi?",
      options: [
        "Metod public qilib o'zgartiriladi",
        "Method obyektida setAccessible(true) chaqiriladi",
        "Klass qayta kompilyatsiya qilinadi",
        "Hech narsa kerak emas",
      ],
      answer: 1,
      explain: "setAccessible(true) access tekshiruvini o'chiradi (modul ruxsat bersa), shundan keyin invoke ishlaydi.",
    },
    {
      q: "Class.newInstance() o'rniga zamonaviy kodda nima ishlatiladi?",
      options: [
        "getConstructor(...).newInstance(...)",
        "Class.forName(...)",
        "getDeclaredFields()",
        "Proxy.newProxyInstance()",
      ],
      answer: 0,
      explain: "Class.newInstance() deprecated; konstruktorni aniq tanlab, getConstructor(...).newInstance(...) ishlatish istisnolarni to'g'ri beradi.",
    },
  ],
},
{
  id: 62,
  title: "Reflection bilan mini DI konteyner",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "Spring'ning <b>Dependency Injection</b> konteyneri sirli emas: u klasslarni skanerlaydi, konstruktor yoki maydonlarga bog'liqliklarni topadi va obyektlarni yaratadi. Keling, 60 qatorlik mini konteyner yozamiz. <code>@Inject</code> annotatsiyasi maydonni belgilaydi, konteyner esa interfeysga mos implementatsiyani topib, maydonga joylaydi va singleton sifatida keshlaydi.",
    },
    {
      type: "code",
      title: "MiniDi.java",
      code: `import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface Inject {
}

interface XabarXizmati {
    String yubor(String kimga);
}

class EmailXizmati implements XabarXizmati {
    @Override
    public String yubor(String kimga) {
        return "Email -> " + kimga;
    }
}

class BuyurtmaXizmati {
    @Inject
    private XabarXizmati xabar;

    public String tasdiqla(String mijoz) {
        return xabar.yubor(mijoz);
    }
}

public class MiniDi {
    static final Map<Class<?>, Object> konteyner = new HashMap<>();

    static <T> T ol(Class<T> tur) throws Exception {
        Object mavjud = konteyner.get(tur);
        if (mavjud != null) {
            return tur.cast(mavjud);
        }

        T obyekt = tur.getDeclaredConstructor().newInstance();
        for (Field maydon : tur.getDeclaredFields()) {
            if (maydon.isAnnotationPresent(Inject.class)) {
                Object bogliq = ol(maydon.getType());
                maydon.setAccessible(true);
                maydon.set(obyekt, bogliq);
            }
        }

        konteyner.put(tur, obyekt);
        return obyekt;
    }

    public static void main(String[] args) throws Exception {
        konteyner.put(XabarXizmati.class, new EmailXizmati());

        BuyurtmaXizmati xizmat = ol(BuyurtmaXizmati.class);
        System.out.println(xizmat.tasdiqla("Ali"));
        System.out.println("Konteyner: " + konteyner.size());

        BuyurtmaXizmati ikkinchi = ol(BuyurtmaXizmati.class);
        System.out.println("Singleton: " + (xizmat == ikkinchi));
    }
}`,
      output: "Email -> Ali\nKonteyner: 2\nSingleton: true",
    },
    {
      type: "note",
      variant: "info",
      title: "Bog'liqlik grafi",
      html: "Konteyner <code>BuyurtmaXizmati</code>ni yaratadi, uning <code>xabar</code> maydoni turi — <code>XabarXizmati</code> interfeysi. Konteynerda bu kalit allaqachon <code>EmailXizmati</code> obyektiga bog'langan, shuning uchun u qaytariladi. Haqiqiy Spring'da bu ishni bean definition va constructor resolution bajaradi.",
    },
    {
      type: "code",
      title: "Scope.java",
      code: `import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

public class Scope {
    static final class Konteyner {
        private final Map<Class<?>, Object> singletonlar = new HashMap<>();
        private final Map<Class<?>, Supplier<?>> retseptlar = new HashMap<>();

        <T> void royxat(Class<T> tur, Supplier<T> yaratuvchi) {
            retseptlar.put(tur, yaratuvchi);
        }

        <T> T ol(Class<T> tur, boolean singleton) {
            if (singleton) {
                return tur.cast(singletonlar.computeIfAbsent(tur, t -> retseptlar.get(t).get()));
            }
            return tur.cast(retseptlar.get(tur).get());
        }
    }

    static final class Hisoblagich {
        private static int soni;

        Hisoblagich() {
            soni++;
        }

        static int soni() {
            return soni;
        }
    }

    public static void main(String[] args) {
        Konteyner konteyner = new Konteyner();
        konteyner.royxat(Hisoblagich.class, Hisoblagich::new);

        Hisoblagich a = konteyner.ol(Hisoblagich.class, true);
        Hisoblagich b = konteyner.ol(Hisoblagich.class, true);
        System.out.println("Singleton bir xil: " + (a == b));

        Hisoblagich c = konteyner.ol(Hisoblagich.class, false);
        Hisoblagich d = konteyner.ol(Hisoblagich.class, false);
        System.out.println("Prototype bir xil: " + (c == d));
        System.out.println("Yaratilgan: " + Hisoblagich.soni());
    }
}`,
      output: "Singleton bir xil: true\nPrototype bir xil: false\nYaratilgan: 3",
    },
    {
      type: "ul",
      items: [
        "Singleton — bitta obyekt qaytariladi; prototype — har so'rovda yangi obyekt.",
        "Haqiqiy DI konteynerlar konstruktor injection'ni afzal ko'radi: maydonlar final bo'lib qoladi.",
        "Circular dependency'ni reflection bilan ham hal qilish qiyin; dizaynni qayta ko'rib chiqish kerak.",
        "Konteyner tartibi va scope'lar Spring'da <code>@Scope</code>, <code>@Singleton</code> kabi annotatsiyalar bilan boshqariladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Mini DI konteyner @Inject maydonni qanday to'ldiradi?",
      options: [
        "Maydon nomini klass nomiga aylantirib",
        "Maydon turini kalit sifatida ishlatib, mos obyektni topib",
        "Faqat String maydonlarni",
        "Fayldan o'qib",
      ],
      answer: 1,
      explain: "Konteyner maydonning Class turini kalit qilib bog'liqlikni qidiradi; interfeys kaliti ostida implementatsiya ro'yxatga olinadi.",
    },
    {
      q: "Singleton scope qanday natija beradi?",
      options: [
        "Har chaqiruvda yangi obyekt",
        "Bir marta yaratilgan obyekt qayta ishlatiladi",
        "Obyekt umuman yaratilmaydi",
        "Faqat prototype bilan ishlaydi",
      ],
      answer: 1,
      explain: "Singleton bir marta yaratiladi va keshlanadi; keyingi so'rovlar aynan shu obyektni oladi.",
    },
    {
      q: "Maydonga reflection orqali qiymat yozish uchun nima kerak?",
      options: [
        "Faqat get()",
        "setAccessible(true) va set()",
        "Faqat newInstance()",
        "Class.forName()",
      ],
      answer: 1,
      explain: "Private maydonga yozish uchun avval setAccessible(true), keyin maydon.set(obyekt, qiymat) chaqiriladi.",
    },
  ],
},
{
  id: 63,
  title: "Dynamic proxy va MethodHandle",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "Ba'zan klassni oldindan yozmasdan, interfeysni <b>runtime'da</b> amalga oshiruvchi obyekt kerak bo'ladi: logging, tranzaksiya, kesh, xavfsizlik. <code>java.lang.reflect.Proxy</code> shu ishni bajaradi — har bir metod chaqiruvi <code>InvocationHandler</code>ga tushadi. <code>MethodHandle</code> esa reflection'ning tezroq va tur-xavfsizroq alternativasi.",
    },
    {
      type: "code",
      title: "ProxyDemo.java",
      code: `import java.lang.reflect.Proxy;

interface Kalkulyator {
    int qosh(int a, int b);

    int kopaytir(int a, int b);
}

class OddiyKalkulyator implements Kalkulyator {
    @Override
    public int qosh(int a, int b) {
        return a + b;
    }

    @Override
    public int kopaytir(int a, int b) {
        return a * b;
    }
}

public class ProxyDemo {
    public static void main(String[] args) {
        Kalkulyator asosiy = new OddiyKalkulyator();

        Kalkulyator proxy = (Kalkulyator) Proxy.newProxyInstance(
            Kalkulyator.class.getClassLoader(),
            new Class<?>[]{Kalkulyator.class},
            (obyekt, metod, argumentlar) -> {
                System.out.println("Chaqiruv: " + metod.getName());
                Object natija = metod.invoke(asosiy, argumentlar);
                System.out.println("Natija: " + natija);
                return natija;
            }
        );

        System.out.println("Yakuniy: " + proxy.qosh(2, 3));
        System.out.println("Yakuniy: " + proxy.kopaytir(4, 5));
    }
}`,
      output: "Chaqiruv: qosh\nNatija: 5\nYakuniy: 5\nChaqiruv: kopaytir\nNatija: 20\nYakuniy: 20",
    },
    {
      type: "note",
      variant: "info",
      title: "Proxy cheklovi",
      html: "JDK proxy faqat <b>interfeyslar</b> uchun ishlaydi; klasslarni proxy qilish uchun bytecode kutubxonalari (Byte Buddy, CGLIB) kerak. Spring AOP aynan shu ikki yo'lni ishlatadi: interfeys bo'lsa JDK proxy, bo'lmasa CGLIB.",
    },
    {
      type: "code",
      title: "MethodHandleDemo.java",
      code: `import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodType;

public class MethodHandleDemo {
    static int qosh(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) throws Throwable {
        MethodHandles.Lookup lookup = MethodHandles.lookup();
        MethodHandle qosh = lookup.findStatic(
            MethodHandleDemo.class,
            "qosh",
            MethodType.methodType(int.class, int.class, int.class)
        );

        System.out.println((int) qosh.invokeExact(7, 8));
        System.out.println((int) qosh.invoke(10, 20));

        MethodHandle yuzQosh = MethodHandles.insertArguments(qosh, 0, 100);
        System.out.println((int) yuzQosh.invokeExact(5));
    }
}`,
      output: "15\n30\n105",
    },
    {
      type: "ul",
      items: [
        "<code>invokeExact</code> tur imzosini qat'iy talab qiladi; <code>invoke</code> moslashtirishga ruxsat beradi.",
        "MethodHandle reflection'dan tezroq, chunki JIT uni bevosita optimallashtira oladi.",
        "Proxy'da <code>toString</code>, <code>equals</code>, <code>hashCode</code> ham handler'ga tushadi — ularni to'g'ri boshqaring.",
        "MethodHandle'lar JVM ichida indy (invokedynamic) bilan birga lambda va string concat'da ishlatiladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "JDK dynamic proxy qaysi turdagi obyektlarni proxy qila oladi?",
      options: ["Faqat abstract klasslarni", "Faqat interfeyslarni", "Faqat recordlarni", "Faqat enumlarni"],
      answer: 1,
      explain: "Proxy.newProxyInstance interfeyslar ro'yxatini qabul qiladi; klasslar uchun CGLIB yoki Byte Buddy kerak.",
    },
    {
      q: "InvocationHandler'ning invoke metodi nima qaytaradi?",
      options: [
        "Har doim void",
        "Proksi metodning natijasini",
        "Faqat boolean",
        "Class obyektini",
      ],
      answer: 1,
      explain: "invoke metod chaqiruv natijasini qaytaradi; primitiv natijalar avtomatik qutiladi. void metodlar uchun null qaytariladi.",
    },
    {
      q: "MethodHandle'da invokeExact nimasi bilan ajralib turadi?",
      options: [
        "Argument turlarini avtomatik konvertatsiya qiladi",
        "Tur imzosini qat'iy talab qiladi",
        "Faqat static metodlarda ishlaydi",
        "Reflection'dan sekinroq",
      ],
      answer: 1,
      explain: "invokeExact chaqiruv joyidagi imzo MethodHandle imzosiga aniq mos bo'lishi shart; invoke esa konversiyalarga ruxsat beradi.",
    },
  ],
},
{
  id: 64,
  title: "VarHandle va atomik amallar",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "<code>VarHandle</code> (Java 9+) — maydonlarga turli <b>access mode</b>larda murojaat qilish vositasi: oddiy o'qish, volatile o'qish, compare-and-set, get-and-add. U <code>sun.misc.Unsafe</code>ning xavfsiz va standart o'rnini bosadi. <code>AtomicInteger</code> kabi klasslar ham ichida shunga o'xshash mexanizmlarga tayanadi.",
    },
    {
      type: "code",
      title: "VarHandleDemo.java",
      code: `import java.lang.invoke.MethodHandles;
import java.lang.invoke.VarHandle;

public class VarHandleDemo {
    private volatile int hisoblagich;

    private static final VarHandle HISOB;

    static {
        try {
            HISOB = MethodHandles.lookup()
                .findVarHandle(VarHandleDemo.class, "hisoblagich", int.class);
        } catch (ReflectiveOperationException e) {
            throw new ExceptionInInitializerError(e);
        }
    }

    public static void main(String[] args) {
        VarHandleDemo demo = new VarHandleDemo();

        System.out.println((int) HISOB.getAndAdd(demo, 5));
        System.out.println((int) HISOB.get(demo));
        System.out.println(HISOB.compareAndSet(demo, 5, 10));
        System.out.println((int) HISOB.get(demo));
        System.out.println(HISOB.compareAndSet(demo, 5, 20));
        System.out.println((int) HISOB.getAndSet(demo, 0));
        System.out.println((int) HISOB.get(demo));
    }
}`,
      output: "0\n5\ntrue\n10\nfalse\n10\n0",
    },
    {
      type: "note",
      variant: "warning",
      title: "Access mode'lar",
      html: "<code>get</code>/<code>set</code> oddiy rejim, <code>getVolatile</code>/<code>setVolatile</code> ko'rinuvchanlikni kafolatlaydi. <code>compareAndSet</code> atomik, <code>getAndAdd</code> esa qaytish qiymati sifatida <b>eski</b> qiymatni beradi. Rejimni noto'g'ri tanlash xotira ko'rinuvchanligi xatolariga olib keladi.",
    },
    {
      type: "code",
      title: "Atomik.java",
      code: `import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.LongAdder;

public class Atomik {
    public static void main(String[] args) {
        AtomicInteger hisob = new AtomicInteger(10);

        System.out.println(hisob.incrementAndGet());
        System.out.println(hisob.getAndAdd(5));
        System.out.println(hisob.get());
        System.out.println(hisob.compareAndSet(16, 20));
        System.out.println(hisob.compareAndSet(16, 30));
        System.out.println(hisob.get());

        LongAdder yigindi = new LongAdder();
        yigindi.add(5);
        yigindi.add(7);
        yigindi.increment();
        System.out.println("LongAdder: " + yigindi.sum());
    }
}`,
      output: "11\n11\n16\ntrue\nfalse\n20\nLongAdder: 13",
    },
    {
      type: "ul",
      items: [
        "Ko'p oqimli hisoblagich uchun <code>LongAdder</code> yuqori raqobatda <code>AtomicLong</code>dan tezroq.",
        "<code>compareAndSet(kutilgan, yangi)</code> faqat joriy qiymat kutilganga teng bo'lsa yangilaydi va boolean qaytaradi.",
        "VarHandle'ni <code>static final</code> maydonda bir marta topib olish tavsiya etiladi.",
        "Murakkab invariantlar uchun atomik amallar yetarli bo'lmasligi mumkin — lock yoki dizaynni qayta ko'rish kerak.",
      ],
    },
  ],
  quiz: [
    {
      q: "getAndAdd(5) qanday qiymat qaytaradi?",
      options: ["Yangi qiymatni", "Eski qiymatni", "Har doim 5 ni", "boolean natijani"],
      answer: 1,
      explain: "getAndAdd avval joriy qiymatni qaytaradi, keyin atomik ravishda 5 qo'shadi. incrementAndGet esa yangi qiymatni qaytaradi.",
    },
    {
      q: "compareAndSet(kutilgan, yangi) qachon true qaytaradi?",
      options: [
        "Har doim",
        "Joriy qiymat kutilganga teng bo'lsa",
        "Joriy qiymat yangidan kichik bo'lsa",
        "Hech qachon",
      ],
      answer: 1,
      explain: "CAS faqat joriy qiymat kutilgan qiymatga teng bo'lganda yangilaydi va true qaytaradi; aks holda false.",
    },
    {
      q: "Yuqori raqobatli hisoblagich uchun qaysi klass ko'pincha tezroq?",
      options: ["AtomicInteger", "LongAdder", "volatile int", "HashMap"],
      answer: 1,
      explain: "LongAdder yozuvlarni bir nechta hujayraga taqsimlaydi, shu sababli ko'p oqimli yozuvda AtomicLong'ga qaraganda kamroq to'qnashuv bo'ladi.",
    },
  ],
},
