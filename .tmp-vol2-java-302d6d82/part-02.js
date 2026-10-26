{
  id: 55,
  title: "Generic metodlar va bounded parametrlar",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "Generic metodlar tur parametrini metod darajasida e'lon qiladi: <code>static &lt;T&gt; T tanla(T a, T b)</code>. Bu tur xavfsizligini saqlab, kodni takrorlashdan qutqaradi. <b>Bounded</b> parametr <code>T extends Comparable&lt;T&gt;</code> kabi cheklov qo'shadi: endi kompilyator <code>compareTo</code> mavjudligiga ishonch hosil qiladi. Bir nechta chegara <code>&amp;</code> bilan yoziladi.",
    },
    {
      type: "code",
      title: "GenericMetod.java",
      code: `import java.util.Arrays;

public class GenericMetod {
    static <T> void almashtir(T[] massiv, int i, int j) {
        T vaqtinchalik = massiv[i];
        massiv[i] = massiv[j];
        massiv[j] = vaqtinchalik;
    }

    static <T extends Comparable<T>> T engKatta(T[] massiv) {
        T eng = massiv[0];
        for (T qiymat : massiv) {
            if (qiymat.compareTo(eng) > 0) {
                eng = qiymat;
            }
        }
        return eng;
    }

    public static void main(String[] args) {
        Integer[] sonlar = {5, 9, 2, 7};
        almashtir(sonlar, 0, 3);
        System.out.println(Arrays.toString(sonlar));
        System.out.println("Eng katta: " + engKatta(sonlar));

        String[] ismlar = {"Ali", "Dilnoza", "Hasan"};
        System.out.println("Eng katta ism: " + engKatta(ismlar));
    }
}`,
      output: "[7, 9, 2, 5]\nEng katta: 9\nEng katta ism: Hasan",
    },
    {
      type: "note",
      variant: "info",
      title: "Type inference",
      html: "<code>engKatta(sonlar)</code> chaqiruvida tur argumenti ko'rsatilmadi. Kompilyator argument turidan <code>T = Integer</code> ekanini o'zi aniqlaydi. Zarurat bo'lsa uni ochiq yozish mumkin: <code>GenericMetod.&lt;Integer&gt;engKatta(sonlar)</code>.",
    },
    {
      type: "code",
      title: "Bounded.java",
      code: `import java.util.List;

public class Bounded {
    static <T extends Number> double yigindi(List<T> qiymatlar) {
        double summa = 0;
        for (T qiymat : qiymatlar) {
            summa += qiymat.doubleValue();
        }
        return summa;
    }

    static <T extends Comparable<? super T>> T kichik(T a, T b) {
        return a.compareTo(b) <= 0 ? a : b;
    }

    public static void main(String[] args) {
        System.out.println("Yig'indi: " + yigindi(List.of(1, 2, 3, 4, 5)));
        System.out.println("Kichik son: " + kichik(10, 7));
        System.out.println("Kichik ism: " + kichik("Vali", "Ali"));
    }
}`,
      output: "Yig'indi: 15.0\nKichik son: 7\nKichik ism: Ali",
    },
    {
      type: "ul",
      items: [
        "Tur parametri primitive tur bo'la olmaydi: <code>List&lt;int&gt;</code> emas, <code>List&lt;Integer&gt;</code>.",
        "Bir nechta chegara: <code>&lt;T extends Number &amp; Comparable&lt;T&gt;&gt;</code> — avval klass, keyin interfeyslar.",
        "Bounded parametr ichida chegara bergan metodlarni chaqirish mumkin, masalan <code>doubleValue()</code>.",
        "<code>Comparable&lt;? super T&gt;</code> meros olgan turlar bilan ham ishlashga ruxsat beradi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Generic tur parametri sifatida qaysi turni berish mumkin emas?",
      options: ["String", "Integer", "int", "BigDecimal"],
      answer: 2,
      explain: "Generiklar faqat reference turlar bilan ishlaydi; int o'rniga Integer ishlatiladi. Type erasure primitive tur ma'lumotini saqlay olmaydi.",
    },
    {
      q: "T extends Number & Comparable<T> yozuvida chegaralar qanday tartibda bo'lishi kerak?",
      options: [
        "Avval interfeyslar, keyin klass",
        "Avval klass, keyin interfeyslar",
        "Tartib muhim emas",
        "Faqat bitta chegara ruxsat etiladi",
      ],
      answer: 1,
      explain: "Ko'p chegara yozuvida birinchi navbatda klass, undan keyin interfeyslar keladi; klass bo'lmasa interfeyslar istalgan tartibda.",
    },
    {
      q: "Generic metodning tur argumentini kompilyator qanday aniqlaydi?",
      options: [
        "Faqat qaytariladigan turdan",
        "Argumentlar turidan (type inference)",
        "Har doim Object deb oladi",
        "Runtime'da reflection bilan",
      ],
      answer: 1,
      explain: "Kompilyator argumentlar va kontekstdan tur parametrini infer qiladi; zarur bo'lsa uni ochiq ko'rsatish mumkin.",
    },
  ],
},
{
  id: 56,
  title: "Wildcards va PECS qoidasi",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "<code>List&lt;Integer&gt;</code> va <code>List&lt;Number&gt;</code> bir-biriga meros emas — genericlar invariant. Moslashuvchanlik uchun <b>wildcard</b> ishlatiladi. <code>? extends T</code> — o'qish uchun (producer), <code>? super T</code> — yozish uchun (consumer). Qoida qisqacha <b>PECS</b>: Producer Extends, Consumer Super.",
    },
    {
      type: "code",
      title: "Pecs.java",
      code: `import java.util.ArrayList;
import java.util.List;

public class Pecs {
    static double yigindi(List<? extends Number> sonlar) {
        double summa = 0;
        for (Number son : sonlar) {
            summa += son.doubleValue();
        }
        return summa;
    }

    static void qosh(List<? super String> nishon, String qiymat) {
        nishon.add(qiymat);
    }

    public static void main(String[] args) {
        List<Integer> butun = List.of(10, 20, 30);
        List<Double> kasr = List.of(1.5, 2.5);

        System.out.println("Butun yig'indi: " + yigindi(butun));
        System.out.println("Kasr yig'indi: " + yigindi(kasr));

        List<Object> obyektlar = new ArrayList<>();
        qosh(obyektlar, "salom");
        qosh(obyektlar, "dunyo");
        System.out.println(obyektlar);
    }
}`,
      output: "Butun yig'indi: 60.0\nKasr yig'indi: 4.0\n[salom, dunyo]",
    },
    {
      type: "note",
      variant: "warning",
      title: "Nega extends'ga yozib bo'lmaydi?",
      html: "<code>List&lt;? extends Number&gt;</code> ichida ro'yxat aslida <code>List&lt;Integer&gt;</code> yoki <code>List&lt;Double&gt;</code> bo'lishi mumkin. Unga <code>Double</code> qo'shsangiz, Integer ro'yxatini buzardingiz. Shuning uchun kompilyator yozishni taqiqlaydi. <code>null</code> qo'shish esa istisno — u har qanday reference turiga mos.",
    },
    {
      type: "code",
      title: "Nusxala.java",
      code: `import java.util.ArrayList;
import java.util.List;

public class Nusxala {
    static <T> void nusxala(List<? extends T> manba, List<? super T> nishon) {
        for (T element : manba) {
            nishon.add(element);
        }
    }

    public static void main(String[] args) {
        List<Integer> manba = List.of(4, 8, 15, 16, 23, 42);
        List<Number> nishon = new ArrayList<>();

        nusxala(manba, nishon);
        System.out.println("Nishon: " + nishon);
        System.out.println("Hajm: " + nishon.size());

        List<Object> hammaNarsa = new ArrayList<>();
        nusxala(manba, hammaNarsa);
        System.out.println("Object ro'yxati: " + hammaNarsa);
    }
}`,
      output: "Nishon: [4, 8, 15, 16, 23, 42]\nHajm: 6\nObject ro'yxati: [4, 8, 15, 16, 23, 42]",
    },
    {
      type: "ul",
      items: [
        "<code>List&lt;?&gt;</code> — faqat o'qish uchun; undan <code>Object</code> sifatida o'qish mumkin, lekin yozib bo'lmaydi.",
        "Java'dagi standart <code>Collections.copy(dest, src)</code> ham xuddi shu PECS naqshida yozilgan.",
        "Wildcard qaytarish turida emas, asosan parametrda ishlatiladi — API moslashuvchanligi uchun.",
        "Murakkab API'dan oldin oddiy <code>&lt;T&gt;</code> bilan yozib ko'ring; wildcard faqat kerak bo'lganda qo'shiladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "List<Integer> ni List<? extends Number> ga berish mumkinmi?",
      options: [
        "Ha, extends wildcard o'qish uchun mos keladi",
        "Yo'q, genericlar doim invariant",
        "Faqat List<Object> bo'lsa",
        "Faqat runtime'da",
      ],
      answer: 0,
      explain: "List<Integer> List<? extends Number> ning subtypesi hisoblanadi; shu sababli Number sifatida o'qish xavfsiz.",
    },
    {
      q: "PECS qoidasiga ko'ra qiymat qo'shiladigan parametr qanday e'lon qilinadi?",
      options: ["? extends T", "? super T", "? ", "T[]"],
      answer: 1,
      explain: "Consumer super: yozish uchun ? super T ishlatiladi, shunda T yoki uning subtype'larini qo'shish mumkin.",
    },
    {
      q: "List<? extends Number> ro'yxatiga Double qo'shishga urinish qanday natija beradi?",
      options: [
        "Runtime'da ClassCastException",
        "Kompilyatsiya xatosi",
        "Double jimgina tashlab yuboriladi",
        "Ro'yxat Object ro'yxatiga aylanadi",
      ],
      answer: 1,
      explain: "Kompilyator aniq element turini bilmaydi, shuning uchun yozishni taqiqlaydi — bu compile-time xavfsizlik.",
    },
  ],
},
{
  id: 57,
  title: "Type erasure va bridge metodlar",
  minutes: 14,
  blocks: [
    {
      type: "p",
      html: "Genericlar kompilyatsiya vaqtida kuchli tekshiruv beradi, lekin <b>runtime'da tur ma'lumoti o'chiriladi</b> — bu <b>type erasure</b>. <code>List&lt;String&gt;</code> va <code>List&lt;Integer&gt;</code> ikkalasi ham runtime'da oddiy <code>ArrayList</code>. Erasure oqibati: generic massiv yaratib bo'lmaydi, <code>instanceof List&lt;String&gt;</code> yozib bo'lmaydi va merosda <b>bridge metodlar</b> paydo bo'ladi.",
    },
    {
      type: "code",
      title: "Erasure.java",
      code: `import java.util.ArrayList;
import java.util.List;

public class Erasure {
    @SuppressWarnings("unchecked")
    public static void main(String[] args) {
        List<String> matnlar = new ArrayList<>();
        List<Integer> sonlar = new ArrayList<>();

        matnlar.add("salom");
        sonlar.add(42);

        System.out.println(matnlar.getClass() == sonlar.getClass());
        System.out.println(matnlar.getClass().getName());

        Object obyekt = matnlar;
        List<String> qayta = (List<String>) obyekt;
        qayta.add("xavfsiz");
        System.out.println(qayta);
    }
}`,
      output: "true\njava.util.ArrayList\n[salom, xavfsiz]",
    },
    {
      type: "note",
      variant: "warning",
      title: "Unchecked cast",
      html: "<code>(List&lt;String&gt;) obyekt</code> cast'i runtime'da faqat <code>List</code> ekanini tekshiradi, element turini emas. Shu sababli kompilyator ogohlantirish beradi. Bunday cast'dan keyin noto'g'ri element qo'shilsa, xato keyinroq — o'qish paytida <code>ClassCastException</code> sifatida chiqadi.",
    },
    {
      type: "code",
      title: "BridgeDemo.java",
      code: `import java.lang.reflect.Method;

class Quti<T> {
    public void qoy(T qiymat) {
        System.out.println("Quti: " + qiymat);
    }
}

class MatnQuti extends Quti<String> {
    @Override
    public void qoy(String qiymat) {
        System.out.println("MatnQuti: " + qiymat.toUpperCase());
    }
}

public class BridgeDemo {
    public static void main(String[] args) throws Exception {
        MatnQuti quti = new MatnQuti();
        quti.qoy("salom");

        Method bridge = null;
        for (Method metod : MatnQuti.class.getDeclaredMethods()) {
            if (metod.isBridge()) {
                bridge = metod;
            }
        }

        System.out.println("Bridge metodi: " + bridge.getName());
        System.out.println("Parametri: " + bridge.getParameterTypes()[0].getSimpleName());
        System.out.println("Synthetic: " + bridge.isSynthetic());
    }
}`,
      output: "MatnQuti: SALOM\nBridge metodi: qoy\nParametri: Object\nSynthetic: true",
    },
    {
      type: "ul",
      items: [
        "Erasure tufayli <code>T.class</code> yoki <code>new T()</code> yozib bo'lmaydi — tur faqat kompilyatsiyada mavjud.",
        "Bridge metod kompilyator tomonidan yaratiladi: u <code>Object</code> parametrli ota metodni String versiyasiga yo'naltiradi.",
        "Runtime'da tur tekshirish kerak bo'lsa <code>Class&lt;T&gt;</code> token yoki <code>TypeToken</code> ishlatiladi.",
        "Generic massiv o'rniga <code>List&lt;T&gt;</code> yoki <code>Object[]</code> + cast ishlatiladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Type erasure tufayli runtime'da qaysi amal bajarilmaydi?",
      options: [
        "List obyektini yaratish",
        "List<String> va List<Integer> ni ajratish",
        "String elementni o'qish",
        "ArrayList'ga element qo'shish",
      ],
      answer: 1,
      explain: "Ikkala ro'yxat runtime'da bir xil List/ArrayList; generic tur argumenti o'chirilgan, shuning uchun ularni ajratib bo'lmaydi.",
    },
    {
      q: "Bridge metod nima uchun kerak?",
      options: [
        "Xotirani tejash uchun",
        "Erasure'dan keyin ota klass metodini String versiyasiga yo'naltirish uchun",
        "Faylni yopish uchun",
        "Checked istisnolarni yashirish uchun",
      ],
      answer: 1,
      explain: "Ota klassdagi qoy(Object) va bola klassdagi qoy(String) o'rtasida ko'prik yaratiladi; u Object qabul qilib, typed metodga uzatadi.",
    },
    {
      q: "Nega generic massiv new T[10] ko'rinishida yaratilmaydi?",
      options: [
        "Massivlar faqat primitive uchun",
        "T runtime'da mavjud emas, massiv komponent turini bilish kerak",
        "Genericlar massiv bilan ishlamaydi",
        "Faqat List ishlatiladi",
      ],
      answer: 1,
      explain: "Massiv yaratishda komponent turi runtime'da kerak, T esa erasure tufayli yo'q. Shu sababli Object[] yaratib cast qilinadi yoki List ishlatiladi.",
    },
  ],
},
{
  id: 58,
  title: "Rekursiv boundlar va generic meros",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "<code>&lt;T extends Builder&lt;T&gt;&gt;</code> kabi yozuv <b>rekursiv bound</b> deyiladi: tur parametri o'ziga bog'langan tur bilan cheklanadi. Bu naqsh <b>self-type</b> imkonini beradi — ota sinf metodi <code>T</code> qaytarib, fluent API'da aniq bola turini saqlaydi. JDK'da <code>Enum&lt;E extends Enum&lt;E&gt;&gt;</code> va <code>Comparable&lt;T&gt;</code> shu g'oyaga asoslanadi.",
    },
    {
      type: "code",
      title: "BuilderDemo.java",
      code: `abstract class Builder<T extends Builder<T>> {
    protected String nom;

    public T nom(String nom) {
        this.nom = nom;
        return self();
    }

    protected abstract T self();
}

class UserBuilder extends Builder<UserBuilder> {
    private int yosh;

    public UserBuilder yosh(int yosh) {
        this.yosh = yosh;
        return this;
    }

    @Override
    protected UserBuilder self() {
        return this;
    }

    public User build() {
        return new User(nom, yosh);
    }
}

record User(String nom, int yosh) {
}

public class BuilderDemo {
    public static void main(String[] args) {
        User user = new UserBuilder()
            .nom("Ali")
            .yosh(25)
            .build();

        System.out.println(user);
        System.out.println("Yosh: " + user.yosh());
    }
}`,
      output: "User[nom=Ali, yosh=25]\nYosh: 25",
    },
    {
      type: "note",
      variant: "info",
      title: "Nega oddiy T yetarli emas?",
      html: "Agar ota metod <code>Builder</code> qaytarsa, fluent zanjirda bola klassning <code>yosh()</code> metodi ko'rinmay qoladi. <code>T</code> esa aniq <code>UserBuilder</code>ni qaytaradi. Shu sababli <code>self()</code> abstrakt metod orqali <code>this</code>ni <code>T</code> sifatida qaytaramiz.",
    },
    {
      type: "code",
      title: "Xodimlar.java",
      code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Xodim implements Comparable<Xodim> {
    final String nom;
    final int yosh;

    Xodim(String nom, int yosh) {
        this.nom = nom;
        this.yosh = yosh;
    }

    @Override
    public int compareTo(Xodim boshqa) {
        return Integer.compare(yosh, boshqa.yosh);
    }

    @Override
    public String toString() {
        return nom + " (" + yosh + ")";
    }
}

public class Xodimlar {
    public static void main(String[] args) {
        List<Xodim> xodimlar = new ArrayList<>(List.of(
            new Xodim("Ali", 30),
            new Xodim("Dilnoza", 25),
            new Xodim("Hasan", 35)
        ));

        Collections.sort(xodimlar);
        System.out.println(xodimlar);
        System.out.println("Birinchi: " + xodimlar.get(0).nom);
    }
}`,
      output: "[Dilnoza (25), Ali (30), Hasan (35)]\nBirinchi: Dilnoza",
    },
    {
      type: "ul",
      items: [
        "<code>Comparable&lt;Xodim&gt;</code> — rekursiv boundning amaliy ko'rinishi; <code>compareTo</code> faqat Xodim qabul qiladi.",
        "Generic merosda bola klass tur argumentini aniq beradi: <code>class MatnQuti extends Quti&lt;String&gt;</code>.",
        "Rekursiv boundni haddan tashqari ishlatish API'ni murakkablashtiradi; builder yoki Comparable bilan cheklang.",
        "Fluent API'da <code>self()</code> protected bo'lsa, tashqi kod uni chaqira olmaydi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Builder<T extends Builder<T>> yozuvidagi T nimani ifodalaydi?",
      options: [
        "Har qanday klassni",
        "Aniq bola builder turini",
        "Faqat String turini",
        "Builder'ning ichki massivini",
      ],
      answer: 1,
      explain: "Rekursiv bound T ni Builder'ning o'zidan meros olgan aniq bola turiga bog'laydi; shu tufayli fluent metodlar bola turini qaytaradi.",
    },
    {
      q: "class Xodim implements Comparable<Xodim> yozuvida compareTo qanday parametr oladi?",
      options: ["Object", "Xodim", "Comparable", "T"],
      answer: 1,
      explain: "Tur argumenti Xodim bo'lgani uchun compareTo(Xodim) yoziladi; bridge metod Object versiyasini avtomatik yaratadi.",
    },
    {
      q: "Generic ota klassdan meros olayotganda bola klass tur argumentini qanday beradi?",
      options: [
        "class Bola extends Ota<String>",
        "class Bola extends Ota",
        "class Bola<T> extends Ota",
        "Tur argumenti merosda berilmaydi",
      ],
      answer: 0,
      explain: "Bola klass aniq tur bilan extends qilishi mumkin: Ota<String>. Aks holda bola ham generic bo'lib qoladi.",
    },
  ],
},
{
  id: 59,
  title: "Varargs, heap pollution va @SafeVarargs",
  minutes: 14,
  blocks: [
    {
      type: "p",
      html: "<b>Varargs</b> <code>String...</code> yozuvi orqali istalgan sondagi argument qabul qiladi; kompilyator ularni massivga o'raydi. Generic varargs esa <b>heap pollution</b> xavfini tug'diradi: massivning runtime turi <code>Object[]</code> bo'lib qoladi va unga noto'g'ri tur qo'yish mumkin. <code>@SafeVarargs</code> faqat metod massivni faqat o'qiydigan bo'lsa qo'yiladi.",
    },
    {
      type: "code",
      title: "Varargs.java",
      code: `public class Varargs {
    static int yigindi(int... sonlar) {
        int summa = 0;
        for (int son : sonlar) {
            summa += son;
        }
        return summa;
    }

    public static void main(String[] args) {
        System.out.println(yigindi(1, 2, 3));
        System.out.println(yigindi());

        int[] mavjud = {4, 5};
        System.out.println(yigindi(mavjud));
        System.out.println(mavjud.length);
    }
}`,
      output: "6\n0\n9\n2",
    },
    {
      type: "note",
      variant: "info",
      title: "Massiv bilan chaqirish",
      html: "Varargs parametriga tayyor massivni to'g'ridan-to'g'ri berish mumkin — yangi massiv yaratilmaydi. Shu sababli metod massivni o'zgartirsa, chaqiruvchining massivi ham o'zgaradi. Bu nozik joy: himoyalangan nusxa kerak bo'lsa ichkarida <code>Arrays.copyOf</code> qiling.",
    },
    {
      type: "code",
      title: "XavfliVarargs.java",
      code: `import java.util.ArrayList;
import java.util.List;

public class XavfliVarargs {
    @SafeVarargs
    static <T> List<T> royxat(T... elementlar) {
        List<T> natija = new ArrayList<>();
        for (T element : elementlar) {
            natija.add(element);
        }
        return natija;
    }

    @SafeVarargs
    static void sanash(List<String>... royxatlar) {
        System.out.println("Ro'yxatlar: " + royxatlar.length);
    }

    static void xavfli(List<String>... royxatlar) {
        Object[] massiv = royxatlar;
        massiv[0] = List.of(42);
        try {
            String qiymat = royxatlar[0].get(0);
            System.out.println(qiymat);
        } catch (ClassCastException e) {
            System.out.println("Xato: " + e.getClass().getSimpleName());
        }
    }

    public static void main(String[] args) {
        System.out.println(royxat("a", "b", "c"));
        System.out.println(royxat());
        sanash(List.of("x"), List.of("y"));
        xavfli(new ArrayList<>(List.of("salom")));
    }
}`,
      output: "[a, b, c]\n[]\nRo'yxatlar: 2\nXato: ClassCastException",
    },
    {
      type: "ul",
      items: [
        "Varargs metod ichida oddiy massiv: <code>String...</code> = <code>String[]</code>.",
        "<code>@SafeVarargs</code> faqat <code>static</code>, <code>final</code> yoki <code>private</code> metodlarga qo'yiladi.",
        "Metod varargs massivini saqlamasa yoki o'zgartirmasa — annotatsiya asosli.",
        "Generic varargs o'rniga <code>List.of(...)</code> yoki explicit <code>List&lt;T&gt;</code> ko'pincha xavfsizroq.",
      ],
    },
  ],
  quiz: [
    {
      q: "String... parametri kompilyatsiyadan keyin nimaga aylanadi?",
      options: ["List<String>", "String[]", "Object", "Iterator<String>"],
      answer: 1,
      explain: "Varargs sintaksisi massivga aylanadi: String... aslida String[] parametridir.",
    },
    {
      q: "@SafeVarargs annotatsiyasini qaysi metodga qo'yish mumkin?",
      options: [
        "Har qanday instance metodga",
        "Faqat static, final yoki private metodga",
        "Faqat konstruktorga",
        "Faqat abstrakt metodga",
      ],
      answer: 1,
      explain: "Annotatsiya metodning override qilinmasligini kafolatlaydi; shuning uchun static, final yoki private bo'lishi talab qilinadi.",
    },
    {
      q: "Heap pollution nima?",
      options: [
        "Xotira to'lib qolishi",
        "Generic massivda runtime turiga mos kelmaydigan element paydo bo'lishi",
        "GC ning ishlamay qolishi",
        "Threadlar to'qnashuvi",
      ],
      answer: 1,
      explain: "Heap pollution — generic turdagi massivga boshqa tur element yozilib, keyin o'qishda ClassCastException chiqishi.",
    },
  ],
},
