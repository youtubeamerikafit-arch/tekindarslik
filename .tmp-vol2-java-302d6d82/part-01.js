{
  id: 50,
  title: "ArrayList va LinkedList: ichki tuzilish va tanlov",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "Ikkinchi bosqichda kolleksiyalarning <b>ichki tuzilishini</b> o'rganamiz. <code>ArrayList</code> ichida oddiy massiv yotadi: elementlar ketma-ket xotirada turadi, shuning uchun indeks bo'yicha o'qish juda tez. <code>LinkedList</code> esa har bir elementni alohida tugun sifatida saqlaydi va oldingi/keyingi havolalarni ushlab turadi. Tashqi tomondan ikkalasi ham <code>List</code>, lekin amallar narxi butunlay boshqacha.",
    },
    {
      type: "code",
      title: "Taqqoslash.java",
      code: `import java.util.ArrayList;
import java.util.LinkedList;

public class Taqqoslash {
    public static void main(String[] args) {
        ArrayList<String> massiv = new ArrayList<>();
        LinkedList<String> royhat = new LinkedList<>();

        for (String nom : new String[]{"Ali", "Vali", "Hasan"}) {
            massiv.add(nom);
            royhat.add(nom);
        }

        massiv.add(1, "Dilnoza");
        royhat.add(1, "Dilnoza");

        System.out.println("ArrayList: " + massiv);
        System.out.println("LinkedList: " + royhat);
        System.out.println("get(2): " + massiv.get(2));
        System.out.println("Birinchi: " + royhat.getFirst());
        System.out.println("Oxirgi: " + royhat.getLast());
    }
}`,
      output: "ArrayList: [Ali, Dilnoza, Vali, Hasan]\nLinkedList: [Ali, Dilnoza, Vali, Hasan]\nget(2): Vali\nBirinchi: Ali\nOxirgi: Hasan",
    },
    {
      type: "note",
      variant: "info",
      title: "Nega natija bir xil?",
      html: "Ikkala klass ham <code>List</code> shartnomasini bajaradi, shuning uchun mantiqiy natija bir xil. Farq <b>unumdorlikda</b>: <code>ArrayList</code> o'rtasiga qo'shish elementlarni o'ngga suradi, <code>LinkedList</code> esa faqat havolalarni qayta bog'laydi. Ammo <code>LinkedList</code>da <code>get(i)</code> boshidan yurib boradi, shuning uchun tasodifiy o'qish sekin.",
    },
    {
      type: "code",
      title: "Navbat.java",
      code: `import java.util.ArrayDeque;
import java.util.Deque;

public class Navbat {
    public static void main(String[] args) {
        Deque<String> navbat = new ArrayDeque<>();
        navbat.addLast("Ali");
        navbat.addLast("Vali");
        navbat.addFirst("Dilnoza");

        System.out.println("Navbat: " + navbat);
        System.out.println("Xizmat: " + navbat.pollFirst());
        System.out.println("Keyingi: " + navbat.peekFirst());
        System.out.println("Qoldi: " + navbat);
        System.out.println("Hajm: " + navbat.size());
    }
}`,
      output: "Navbat: [Dilnoza, Ali, Vali]\nXizmat: Dilnoza\nKeyingi: Ali\nQoldi: [Ali, Vali]\nHajm: 2",
    },
    {
      type: "ul",
      items: [
        "<code>ArrayList</code>: indeks bo'yicha o'qish <b>O(1)</b>, oxiriga qo'shish amortizatsiyalangan <b>O(1)</b>, o'rtaga qo'shish/o'chirish <b>O(n)</b>.",
        "<code>LinkedList</code>: boshiga/oxiriga qo'shish <b>O(1)</b>, indeks bo'yicha o'qish <b>O(n)</b>, har bir tugun qo'shimcha havolalar egallaydi.",
        "Navbat yoki stek kerak bo'lsa <code>ArrayDeque</code> deyarli har doim <code>LinkedList</code>dan tezroq va kamroq xotira oladi.",
        "Amaliy qoida: standart tanlov — <code>ArrayList</code>; faqat boshidan ko'p qo'shish/o'chirish bo'lsa <code>ArrayDeque</code> yoki <code>LinkedList</code>ni o'lchab ko'ring.",
      ],
    },
  ],
  quiz: [
    {
      q: "ArrayList sig'imi tugaganda yangi element qo'shilsa nima sodir bo'ladi?",
      options: [
        "Har safar bitta element uchun yangi massiv yaratiladi",
        "Massiv kattaroq sig'imga ko'chiriladi va eski elementlar nusxalanadi",
        "Elementlar LinkedList'ga avtomatik o'tkaziladi",
        "Qo'shish UnsupportedOperationException bilan tugaydi",
      ],
      answer: 1,
      explain: "ArrayList ichki massivni kattaroq massivga ko'chiradi (odatda 1.5 baravar) va elementlarni nusxalaydi; shu sababli o'sish amortizatsiyalangan O(1) hisoblanadi.",
    },
    {
      q: "LinkedList boshiga element qo'shishning murakkabligi qanday?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: 0,
      explain: "Bosh tugun havolasi ma'lum, shuning uchun yangi tugunni boshiga bog'lash doimiy vaqt oladi — O(1).",
    },
    {
      q: "Deque sifatida navbat qurish uchun qaysi kolleksiya odatda eng samarali?",
      options: ["ArrayList", "LinkedList o'rniga ArrayDeque", "HashSet", "TreeMap"],
      answer: 1,
      explain: "ArrayDeque aylanma massiv asosida ishlaydi, bosh va oxirdan amallarni O(1) da bajaradi va LinkedList'ga qaraganda kamroq xotira ishlatadi.",
    },
  ],
},
{
  id: 51,
  title: "HashMap internallari: hash, bucket va kolliziyalar",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "<code>HashMap</code> kalitni to'g'ridan-to'g'ri indeksga aylantirmaydi: avval <code>hashCode()</code> olinadi, keyin <b>spread</b> funksiyasi bilan yuqori bitlar pastga aralashtiriladi va sig'im bo'yicha indeks hisoblanadi. Bir indeksga bir nechta kalit tushsa — bu <b>kolliziya</b>. HashMap buni bitta bucket ichidagi bog'langan ro'yxat yoki katta kolliziyada qizil-qora daraxt bilan hal qiladi.",
    },
    {
      type: "code",
      title: "HashMapDemo.java",
      code: `import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
    static final class Kalit {
        final String nom;

        Kalit(String nom) {
            this.nom = nom;
        }

        @Override
        public int hashCode() {
            return nom.length();
        }

        @Override
        public boolean equals(Object o) {
            return o instanceof Kalit b && nom.equals(b.nom);
        }

        @Override
        public String toString() {
            return nom;
        }
    }

    static int spread(int h) {
        return h ^ (h >>> 16);
    }

    static int index(int hash, int capacity) {
        return (capacity - 1) & spread(hash);
    }

    public static void main(String[] args) {
        Map<Kalit, Integer> ballar = new HashMap<>(16, 0.75f);
        ballar.put(new Kalit("Ali"), 90);
        ballar.put(new Kalit("Bob"), 75);
        ballar.put(new Kalit("Hasan"), 88);
        ballar.put(new Kalit("Dilnoza"), 95);

        System.out.println("Ali indeksi: " + index("Ali".length(), 16));
        System.out.println("Bob indeksi: " + index("Bob".length(), 16));
        System.out.println("Hasan indeksi: " + index("Hasan".length(), 16));
        System.out.println("Dilnoza indeksi: " + index("Dilnoza".length(), 16));
        System.out.println("Ballar: " + ballar);
        System.out.println("Ali balli: " + ballar.get(new Kalit("Ali")));
    }
}`,
      output: "Ali indeksi: 3\nBob indeksi: 3\nHasan indeksi: 5\nDilnoza indeksi: 7\nBallar: {Ali=90, Bob=75, Hasan=88, Dilnoza=95}\nAli balli: 90",
    },
    {
      type: "table",
      head: ["Parametr", "Ma'no"],
      rows: [
        ["Boshlang'ich sig'im", "16 bucket (yoki berilgan qiymatdan yuqori 2 daraja)"],
        ["Load factor", "0.75 — bucketlarning 75% to'lganda sig'im ikki baravar oshadi"],
        ["Treeify chegarasi", "Bitta bucketda 8 tadan ko'p tugun bo'lsa ro'yxat daraxtga aylanadi"],
        ["Untreeify chegarasi", "6 tugundan kam qolganda daraxt yana ro'yxatga qaytadi"],
      ],
    },
    {
      type: "code",
      title: "SigimVaKolliziya.java",
      code: `import java.util.HashMap;
import java.util.Map;

public class SigimVaKolliziya {
    public static void main(String[] args) {
        Map<String, Integer> baholar = new HashMap<>();
        for (int i = 1; i <= 20; i++) {
            baholar.put("K" + i, i);
        }

        System.out.println("Hajm: " + baholar.size());
        System.out.println("K7 bormi: " + baholar.containsKey("K7"));

        baholar.put("K7", 99);
        baholar.put("K7", 100);
        System.out.println("K7 qiymati: " + baholar.get("K7"));
        System.out.println("K3 o'chirildi: " + baholar.remove("K3"));
        System.out.println("Yangi hajm: " + baholar.size());
        System.out.println("K3 bormi: " + baholar.containsKey("K3"));
    }
}`,
      output: "Hajm: 20\nK7 bormi: true\nK7 qiymati: 100\nK3 o'chirildi: 3\nYangi hajm: 19\nK3 bormi: false",
    },
    {
      type: "note",
      variant: "tip",
      title: "Amaliy xulosa",
      html: "HashMap bucketlar sonini elementlar soniga moslab o'zi kattalashtiradi. oldindan taxmin qilsangiz <code>new HashMap<>(kutilganHajm * 2)</code> berish resizingni kamaytiradi. Kalitlar <b>o'zgarmas</b> bo'lishi kerak: kalit put'dan keyin o'zgarsa, uning hash'i o'zgarib, yozuvni topib bo'lmay qoladi.",
    },
  ],
  quiz: [
    {
      q: "HashMap'da ikkita turli kalit uchun bir xil bucket indeksi chiqsa nima bo'ladi?",
      options: [
        "Ikkinchi kalit jimgina yo'qoladi",
        "put IllegalArgumentException beradi",
        "Ikkala yozuv bir bucketda saqlanadi va equals bilan ajratiladi",
        "HashMap avtomatik boshqa sig'imga o'tadi",
      ],
      answer: 2,
      explain: "Kolliziya normal holat: bir bucket ichida tugunlar ro'yxati (yoki daraxt) yuritiladi, kalitlar equals() orqali taqqoslanadi.",
    },
    {
      q: "HashMap load factor 0.75 nimani anglatadi?",
      options: [
        "Har to'rtinchi put albatta xato beradi",
        "Bucketlarning 75% band bo'lgach, jadval kattalashtiriladi",
        "Faqat 75% kalit saqlanadi",
        "Hash funksiyasi 75% holatda ishlamaydi",
      ],
      answer: 1,
      explain: "Load factor sig'imning to'lish chegarasini belgilaydi; chegaradan oshganda resize qilinadi va elementlar qayta taqsimlanadi.",
    },
    {
      q: "HashMap kaliti sifatida ishlatiladigan obyekt haqida qaysi talab muhim?",
      options: [
        "Kalit har put'dan keyin o'zgartirilishi kerak",
        "Kalitning hashCode qiymati har chaqiruvda yangicha bo'lishi kerak",
        "Kalit o'zgarmas bo'lishi va equals/hashCode izchil bo'lishi kerak",
        "Kalit faqat String bo'lishi shart",
      ],
      answer: 2,
      explain: "Kalit o'zgarsa hash va bucket o'zgaradi, yozuvni topib bo'lmaydi. Shuning uchun kalitlar immutable bo'lishi va equals/hashCode bir-biriga mos bo'lishi kerak.",
    },
  ],
},
{
  id: 52,
  title: "TreeMap va TreeSet: qizil-qora daraxt",
  minutes: 14,
  blocks: [
    {
      type: "p",
      html: "<code>TreeMap</code> va <code>TreeSet</code> elementlarni doim <b>saralangan</b> tartibda saqlaydi. Ichida qizil-qora daraxt ishlatiladi, shuning uchun qo'shish, o'chirish va qidirish <b>O(log n)</b>. Ular <code>NavigableMap</code> va <code>NavigableSet</code> interfeyslarini beradi: <code>firstKey</code>, <code>floorKey</code>, <code>ceilingKey</code>, <code>headMap</code>, <code>tailMap</code>, <code>subMap</code> kabi amallar mavjud.",
    },
    {
      type: "code",
      title: "Reyting.java",
      code: `import java.util.NavigableMap;
import java.util.TreeMap;

public class Reyting {
    public static void main(String[] args) {
        NavigableMap<Integer, String> reyting = new TreeMap<>();
        reyting.put(75, "Vali");
        reyting.put(90, "Ali");
        reyting.put(85, "Hasan");
        reyting.put(90, "Aziza");

        System.out.println(reyting);
        System.out.println("Eng past: " + reyting.firstEntry());
        System.out.println("Eng yuqori: " + reyting.lastKey());
        System.out.println("80 dan yuqori: " + reyting.tailMap(80, false));
        System.out.println("85 gacha: " + reyting.headMap(85, true));
        System.out.println("80-90 oralig'i: " + reyting.subMap(80, true, 90, false));
    }
}`,
      output: "{75=Vali, 85=Hasan, 90=Aziza}\nEng past: 75=Vali\nEng yuqori: 90\n80 dan yuqori: {85=Hasan, 90=Aziza}\n85 gacha: {75=Vali, 85=Hasan}\n80-90 oralig'i: {85=Hasan}",
    },
    {
      type: "note",
      variant: "info",
      title: "Bir xil kalit — yangilanish",
      html: "TreeMap'da kalitlar teng bo'lsa qiymat <b>almashtiriladi</b>, yangi yozuv qo'shilmaydi. 90 kaliti ikki marta berilganda o'lcham o'zgarmaydi, oxirgi qiymat — Aziza — qoladi. Bu HashMap bilan bir xil xatti-harakat.",
    },
    {
      type: "code",
      title: "Ismlar.java",
      code: `import java.util.Comparator;
import java.util.TreeSet;

public class Ismlar {
    public static void main(String[] args) {
        Comparator<String> tartib = Comparator
            .comparingInt(String::length)
            .thenComparing(Comparator.naturalOrder());

        TreeSet<String> ismlar = new TreeSet<>(tartib);
        ismlar.add("Hasan");
        ismlar.add("Ali");
        ismlar.add("Dilnoza");
        ismlar.add("Vali");
        ismlar.add("Ali");

        System.out.println(ismlar);
        System.out.println("Birinchi: " + ismlar.first());
        System.out.println("Hasan'dan keyingi: " + ismlar.higher("Hasan"));
        System.out.println("Hajm: " + ismlar.size());
    }
}`,
      output: "[Ali, Vali, Hasan, Dilnoza]\nBirinchi: Ali\nHasan'dan keyingi: Dilnoza\nHajm: 4",
    },
    {
      type: "ul",
      items: [
        "Tabiiy tartib uchun kalitlar <code>Comparable</code> bo'lishi yoki <code>Comparator</code> berilishi shart.",
        "Tabiiy tartibda <code>null</code> kalit qabul qilinmaydi — taqqoslashda <code>NullPointerException</code> chiqadi.",
        "<code>floorKey</code> — kiritilgan qiymatdan kichik yoki teng eng yaqin kalit; <code>ceilingKey</code> — katta yoki teng.",
        "Saralanganlik doim kerak bo'lsa TreeMap; aks holda HashMap tezroq va kamroq xotira oladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "TreeMap ichida qaysi ma'lumot tuzilmasi ishlatiladi?",
      options: ["Massiv", "Bog'langan ro'yxat", "Qizil-qora daraxt", "Xesh-jadval"],
      answer: 2,
      explain: "TreeMap balanslangan qizil-qora daraxtga tayanadi, shu sababli amallar O(log n) va kalitlar har doim saralangan.",
    },
    {
      q: "TreeMap'da floorKey(83) qanday kalitni qaytaradi?",
      options: [
        "83 dan katta eng kichik kalitni",
        "83 dan kichik yoki teng eng katta kalitni",
        "Har doim 83 ni",
        "Eng kichik kalitni",
      ],
      answer: 1,
      explain: "floorKey berilgan qiymatdan katta bo'lmagan eng katta kalitni topadi; ceilingKey esa teskari — kichik bo'lmagan eng kichik kalitni.",
    },
    {
      q: "TreeSet'ga Comparator berilganda dublikatlar qanday aniqlanadi?",
      options: [
        "equals() orqali",
        "hashCode() orqali",
        "Comparator.compare() 0 qaytargan holatda",
        "Faqat String uchun",
      ],
      answer: 2,
      explain: "TreeSet tartib va tenglikni Comparator (yoki Comparable) orqali aniqlaydi: compare natijasi 0 bo'lsa element dublikat hisoblanadi.",
    },
  ],
},
{
  id: 53,
  title: "LinkedHashMap, LRU kesh va equals/hashCode",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "<code>LinkedHashMap</code> HashMap tezligini saqlab, ustiga ikki tomonlama bog'langan ro'yxat qo'shadi. Shu tufayli yozuvlar <b>qo'shilish</b> yoki <b>foydalanish</b> tartibida yuritiladi. <code>accessOrder=true</code> bilan eng kam ishlatilgan yozuvni boshiga suramiz — bu LRU kesh uchun klassik yechim. Keshning to'g'ri ishlashi esa <code>equals</code> va <code>hashCode</code> shartnomasiga bog'liq.",
    },
    {
      type: "code",
      title: "LruKesh.java",
      code: `import java.util.LinkedHashMap;
import java.util.Map;

public class LruKesh<K, V> extends LinkedHashMap<K, V> {
    private final int sigim;

    public LruKesh(int sigim) {
        super(16, 0.75f, true);
        this.sigim = sigim;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> engQadimgi) {
        return size() > sigim;
    }

    public static void main(String[] args) {
        LruKesh<String, Integer> kesh = new LruKesh<>(3);
        kesh.put("a", 1);
        kesh.put("b", 2);
        kesh.put("c", 3);

        System.out.println("get(b): " + kesh.get("b"));
        kesh.put("d", 4);
        System.out.println("Kesh: " + kesh);
        System.out.println("a bormi: " + kesh.containsKey("a"));
        System.out.println("b bormi: " + kesh.containsKey("b"));
    }
}`,
      output: "get(b): 2\nKesh: {c=3, b=2, d=4}\na bormi: false\nb bormi: true",
    },
    {
      type: "note",
      variant: "warning",
      title: "Nega a chiqib ketdi?",
      html: "<code>get(\"b\")</code> b yozuvini eng yangi holatga suradi, tartib <code>a, c, b</code> bo'ladi. <code>d</code> qo'shilganda hajm 4 ga yetadi va <code>removeEldestEntry</code> eng qadimgi — <code>a</code> ni o'chiradi. Natijada tartib <code>c, b, d</code> bo'lib qoladi.",
    },
    {
      type: "code",
      title: "Kalitlar.java",
      code: `import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class Kalitlar {
    record Nuqta(int x, int y) {
    }

    static final class YomonNuqta {
        final int x;
        final int y;

        YomonNuqta(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    static final class YaxshiNuqta {
        final int x;
        final int y;

        YaxshiNuqta(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object o) {
            return o instanceof YaxshiNuqta n && x == n.x && y == n.y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }

        @Override
        public String toString() {
            return "(" + x + "," + y + ")";
        }
    }

    public static void main(String[] args) {
        Map<Nuqta, String> recordlar = new HashMap<>();
        recordlar.put(new Nuqta(1, 2), "markaz");
        System.out.println("Record: " + recordlar.get(new Nuqta(1, 2)));

        Map<YomonNuqta, String> yomon = new HashMap<>();
        yomon.put(new YomonNuqta(1, 2), "markaz");
        System.out.println("equals'siz: " + yomon.get(new YomonNuqta(1, 2)));

        Map<YaxshiNuqta, String> yaxshi = new HashMap<>();
        yaxshi.put(new YaxshiNuqta(1, 2), "markaz");
        System.out.println("equals bilan: " + yaxshi.get(new YaxshiNuqta(1, 2)));
        System.out.println("Kalit: " + yaxshi.keySet());
    }
}`,
      output: "Record: markaz\nequals'siz: null\nequals bilan: markaz\nKalit: [(1,2)]",
    },
    {
      type: "ul",
      items: [
        "<code>equals</code> true bo'lsa, <code>hashCode</code> albatta teng bo'lishi shart.",
        "<code>hashCode</code> teng bo'lishi <code>equals</code> true degani emas — kolliziya mumkin.",
        "Record bu shartnomani avtomatik ta'minlaydi: komponentlar bo'yicha equals/hashCode yaratiladi.",
        "LRU keshni production'da <code>Caffeine</code> yoki <code>Ehcache</code> bilan qurish odatiy; LinkedHashMap o'quv va kichik holatlar uchun ideal.",
      ],
    },
  ],
  quiz: [
    {
      q: "LinkedHashMap konstruktoridagi uchinchi parametr true nimani yoqadi?",
      options: [
        "Kirish tartibini saqlashni",
        "Foydalanish tartibini (access-order) saqlashni",
        "Kalitlarni saralashni",
        "Xesh funksiyasini o'chirishni",
      ],
      answer: 1,
      explain: "accessOrder=true bo'lsa, get va put yozuvni ro'yxat oxiriga suradi; bu LRU kesh qurishda kerak bo'ladi.",
    },
    {
      q: "removeEldestEntry metodi true qaytarsa nima bo'ladi?",
      options: [
        "Eng yangi yozuv o'chiriladi",
        "Eng qadimgi yozuv o'chiriladi",
        "Butun map tozalanadi",
        "put istisno tashlaydi",
      ],
      answer: 1,
      explain: "Metod true qaytarganda LinkedHashMap eng qadimgi (access-order bo'lsa eng kam ishlatilgan) yozuvni o'chiradi.",
    },
    {
      q: "equals() true bo'lgan ikki obyektning hashCode() qiymati haqida nima to'g'ri?",
      options: [
        "Har xil bo'lishi mumkin",
        "Teng bo'lishi shart",
        "Faqat String uchun teng bo'ladi",
        "hashCode umuman chaqirilmaydi",
      ],
      answer: 1,
      explain: "equals/hashCode shartnomasiga ko'ra teng obyektlar bir xil hash kod qaytarishi kerak; aks holda HashMap ularni topa olmaydi.",
    },
  ],
},
{
  id: 54,
  title: "Immutable kolleksiyalar va defansiv nusxa",
  minutes: 13,
  blocks: [
    {
      type: "p",
      html: "O'zgarmas (immutable) kolleksiyalar ko'p oqimli muhitda xavfsiz va xatosiz. Java 9+ da <code>List.of</code>, <code>Set.of</code>, <code>Map.of</code> bor; Java 10+ da <code>List.copyOf</code> mavjud. Muhim farq: <code>Collections.unmodifiableList</code> — bu <b>ko'rinish</b>, manba ro'yxat o'zgarsa ko'rinish ham o'zgaradi. <code>copyOf</code> esa haqiqiy <b>nusxa</b> oladi.",
    },
    {
      type: "code",
      title: "Ozgarmas.java",
      code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Ozgarmas {
    public static void main(String[] args) {
        List<String> ozgarmas = List.of("Ali", "Vali", "Hasan");
        System.out.println(ozgarmas);

        try {
            ozgarmas.add("Dilnoza");
        } catch (UnsupportedOperationException e) {
            System.out.println("List.of: " + e.getClass().getSimpleName());
        }

        List<String> massiv = Arrays.asList("A", "B", "C");
        massiv.set(1, "B2");
        System.out.println("Arrays.asList: " + massiv);

        List<String> nusxa = List.copyOf(new ArrayList<>(ozgarmas));
        System.out.println("copyOf: " + nusxa);
        System.out.println("Bir xil obyektmi: " + (nusxa == ozgarmas));
        System.out.println("Tengmi: " + nusxa.equals(ozgarmas));
    }
}`,
      output: "[Ali, Vali, Hasan]\nList.of: UnsupportedOperationException\nArrays.asList: [A, B2, C]\ncopyOf: [Ali, Vali, Hasan]\nBir xil obyektmi: false\nTengmi: true",
    },
    {
      type: "note",
      variant: "warning",
      title: "Arrays.asList tuzog'i",
      html: "<code>Arrays.asList</code> massivga <b>ko'rinish</b> qaytaradi: <code>set</code> ishlaydi, lekin <code>add</code>/<code>remove</code> ishlamaydi va o'lcham qat'iy. Bundan tashqari, massiv o'zgarsa ro'yxat ham o'zgaradi. Haqiqiy mustaqil nusxa kerak bo'lsa <code>new ArrayList<>(...)</code> yoki <code>List.copyOf(...)</code> ishlating.",
    },
    {
      type: "code",
      title: "Buyurtma.java",
      code: `import java.util.ArrayList;
import java.util.List;

public class Buyurtma {
    record Savat(List<String> mahsulotlar) {
        Savat {
            mahsulotlar = List.copyOf(mahsulotlar);
        }
    }

    public static void main(String[] args) {
        List<String> manba = new ArrayList<>();
        manba.add("Olma");
        manba.add("Non");

        Savat savat = new Savat(manba);
        manba.add("Sut");

        System.out.println("Savat: " + savat.mahsulotlar());
        System.out.println("Manba: " + manba);

        try {
            savat.mahsulotlar().add("Tuxum");
        } catch (UnsupportedOperationException e) {
            System.out.println("Savat o'zgarmas");
        }
        System.out.println("Teng: " + savat.mahsulotlar().equals(List.of("Olma", "Non")));
    }
}`,
      output: "Savat: [Olma, Non]\nManba: [Olma, Non, Sut]\nSavat o'zgarmas\nTeng: true",
    },
    {
      type: "ul",
      items: [
        "<code>List.of</code> va <code>copyOf</code> <code>null</code> elementni qabul qilmaydi — <code>NullPointerException</code>.",
        "O'zgarmas kolleksiya thread-safe: bir nechta oqim bir vaqtda o'qishi mumkin.",
        "Record ichidagi kolleksiyani konstruktorda nusxalash — defansiv nusxaning eng qisqa yo'li.",
        "Katta ro'yxatlarda <code>copyOf</code> xotira sarflaydi; faqat chegarada bir marta nusxa olish odatiy.",
      ],
    },
  ],
  quiz: [
    {
      q: "Collections.unmodifiableList va List.copyOf o'rtasidagi asosiy farq nima?",
      options: [
        "Ikkalasi bir xil",
        "unmodifiableList ko'rinish beradi, copyOf mustaqil nusxa oladi",
        "copyOf faqat Set uchun ishlaydi",
        "unmodifiableList har doim nusxa oladi",
      ],
      answer: 1,
      explain: "unmodifiableList manba ro'yxat ustidagi ko'rinish; manba o'zgarsa ko'rinish ham o'zgaradi. copyOf esa yangi o'zgarmas nusxa yaratadi.",
    },
    {
      q: "List.of(\"a\", null) chaqiruvi qanday tugaydi?",
      options: [
        "null element bilan ro'yxat qaytaradi",
        "NullPointerException tashlaydi",
        "Bo'sh ro'yxat qaytaradi",
        "UnsupportedOperationException tashlaydi",
      ],
      answer: 1,
      explain: "List.of null elementlarga ruxsat bermaydi va darhol NullPointerException tashlaydi.",
    },
    {
      q: "Record komponenti sifatida List qabul qilinsa, defansiv nusxa qayerda olinadi?",
      options: [
        "Record konstruktorida (compact constructor)",
        "Faqat getter ichida",
        "Record avtomatik nusxalaydi",
        "Nusxa umuman kerak emas",
      ],
      answer: 0,
      explain: "Record avtomatik ravishda faqat havolani saqlaydi; o'zgarmaslik uchun compact constructor ichida List.copyOf qilib qayta tayinlash kerak.",
    },
  ],
},
