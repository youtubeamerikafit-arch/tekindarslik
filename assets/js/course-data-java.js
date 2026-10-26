/* Java course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.java = {
    id: "java",
    title: "Java",
    logoClass: "course-logo--java",
    logoText: "Jv",
    level: "Boshlovchi",
    hours: "~20 soat",
    testCount: 147,
    lang: "java",
    interactive: "none",
    heroTitle: "Java: asoslardan Spring Boot va yakuniy loyihagacha",
    heroDesc:
      "49 dars, 147 test va 12-savollik yakuniy imtihon. JVM va sintaksisdan boshlab OOP, kolleksiyalar, streamlar, fayllar, JDBC, konkurensiya, testlash, Spring Boot va amaliy loyihagacha bosqichma-bosqich o'rganing.",
    metaDescription:
      "Java kursi: 49 dars, 147 test, 12-savollik imtihon. Java 17 asoslari, OOP, generiklar, streamlar, JDBC, CompletableFuture, JUnit, Spring Boot va REST API amaliy loyiha bilan.",
    modules: [
      { title: "Asoslar", lessons: [1, 2, 3, 4] },
      { title: "Boshqaruv va metodlar", lessons: [5, 6] },
      { title: "Massivlar va obyektlar", lessons: [7, 8] },
      { title: "OOP va istisnolar", lessons: [9, 10] },
      { title: "Kolleksiyalar va birinchi loyiha", lessons: [11, 12] },
      { title: "Zamonaviy Java tuzilmalari", lessons: [13, 14, 15, 16, 17, 18] },
      { title: "Kolleksiyalar va funksional Java", lessons: [19, 20, 21, 22, 23, 24, 25] },
      { title: "Amaliy kutubxonalar", lessons: [26, 27, 28, 29, 30, 31, 32, 33] },
      { title: "Konkurensiya va asinxronlik", lessons: [34, 35, 36, 37] },
      { title: "Sifat va ekotizim", lessons: [38, 39, 40, 41, 42, 43, 44] },
      { title: "Spring, REST va yakuniy loyiha", lessons: [45, 46, 47, 48, 49] },
      { title: "Yakuniy imtihon", lessons: [50] },
    ],
    lessons: [
      {
        id: 1,
        title: "JVM, kompilyatsiya va birinchi dastur",
        minutes: 13,
        blocks: [
          {
            type: "p",
            html: "Java — <b>kompilyatsiya qilinadigan</b> va kuchli tipli dasturlash tili. Siz yozgan kod avval <code>javac</code> kompilyatori tomonidan <b>bayt-kod</b>ga aylantiriladi, keyin JVM (Java Virtual Machine) uni bajaradi. Shu sababli bir marta yozilgan dastur turli operatsion tizimlarda ishlay oladi.",
          },
          {
            type: "code",
            title: "Hello.java",
            code: `public class Hello {
    public static void main(String[] args) {
        System.out.println("Salom, Noldan!");
        System.out.println("Java ishlayapti.");
    }
}`,
            output: "Salom, Noldan!\nJava ishlayapti.",
          },
          {
            type: "note",
            variant: "info",
            title: "Kompilyatsiya va ishga tushirish",
            html: "Faylni saqlagach terminalda <code>javac Hello.java</code> buyrug'ini bering — shu papkada <code>Hello.class</code> paydo bo'ladi. So'ng <code>java Hello</code> yozib dasturni ishga tushirasiz. <code>main</code> metodi dasturning kirish nuqtasidir.",
          },
          {
            type: "code",
            title: "Salom.java",
            code: `public class Salom {
    public static void main(String[] args) {
        String ism = "Aziza";
        int yosh = 16;

        System.out.println("Salom, " + ism + "!");
        System.out.println("Yosh: " + yosh);
    }
}`,
            output: "Salom, Aziza!\nYosh: 16",
          },
          {
            type: "note",
            variant: "tip",
            title: "Fayl nomi muhim",
            html: "<code>public class Salom</code> yozilgan bo'lsa, fayl ham <code>Salom.java</code> deb nomlanishi shart. Aks holda kompilyator xato beradi. Bitta faylda bitta <code>public</code> klass bo'ladi, uning nomi esa fayl nomiga teng bo'ladi.",
          },
        ],
        quiz: [
          {
            q: "JVM ning vazifasi nima?",
            options: ["Java kodini yozish", "Bayt-kodni bajarish", "Faqat fayllarni o'chirish", "HTML sahifa yaratish"],
            answer: 1,
            explain: "JVM — Java Virtual Machine; u javac hosil qilgan bayt-kodni bajaradi.",
          },
          {
            q: "javac Hello.java buyrug'i natijasida nima yaratiladi?",
            options: ["Hello.exe", "Hello.class", "Hello.html", "Hello.txt"],
            answer: 1,
            explain: "javac bayt-kodni Hello.class fayliga yozadi. Uni java Hello buyrug'i bilan ishga tushiramiz.",
          },
          {
            q: "Java'dagi main metodining qaytish turi qanday?",
            options: ["int", "void", "String", "boolean"],
            answer: 1,
            explain: "public static void main(String[] args) — main hech qanday qiymat qaytarmaydi, shuning uchun void.",
          },
        ],
      },
      {
        id: 2,
        title: "O'zgaruvchilar, primitiv va reference turlar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Java'da har bir o'zgaruvchining turi oldindan ma'lum bo'lishi kerak. <b>Primitiv</b> turlar qiymatning o'zini saqlaydi: <code>int</code>, <code>long</code>, <code>double</code>, <code>char</code>, <code>boolean</code> va boshqalar. <b>Reference</b> turlar esa obyektga havolani saqlaydi — <code>String</code>, massivlar va o'zingiz yaratgan klasslar shular jumlasidan.",
          },
          {
            type: "code",
            title: "Turlar.java",
            code: `public class Turlar {
    public static void main(String[] args) {
        int yosh = 16;
        long katta = 2_000_000_000L;
        double narx = 19.5;
        char baho = 'A';
        boolean faol = true;
        String ism = "Aziza";

        System.out.println(ism);
        System.out.println(yosh);
        System.out.println(katta);
        System.out.println((int) narx);
        System.out.println(baho);
        System.out.println(faol);
    }
}`,
            output: "Aziza\n16\n2000000000\n19\nA\ntrue",
          },
          {
            type: "table",
            head: ["Tur", "Nima saqlaydi", "Misol"],
            rows: [
              ["<code>int</code>", "Butun son (32 bit)", "<code>42</code>"],
              ["<code>long</code>", "Katta butun son (64 bit)", "<code>2_000_000_000L</code>"],
              ["<code>double</code>", "Kasr son", "<code>19.5</code>"],
              ["<code>char</code>", "Bitta belgi", "<code>'A'</code>"],
              ["<code>boolean</code>", "true yoki false", "<code>true</code>"],
              ["<code>String</code>", "Matn (reference tur)", "<code>\"Aziza\"</code>"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Reference nima demak?",
            html: "O'zgaruvchi obyektning o'zini emas, unga <b>havolani</b> saqlaydi. <code>int[] nusxa = sonlar;</code> yozsangiz, ikkala nom ham bitta massivni ko'rsatadi va biri orqali qilingan o'zgarish ikkinchisida ham ko'rinadi. <code>String</code> esa o'zgarmas (immutable), shuning uchun unga qiymat qo'shish yangi obyekt yaratadi.",
          },
          {
            type: "code",
            title: "Malumot.java",
            code: `public class Malumot {
    public static void main(String[] args) {
        String a = "Salom";
        String b = a;
        b = b + "!";
        System.out.println(a);
        System.out.println(b);

        int[] sonlar = {1, 2, 3};
        int[] nusxa = sonlar;
        nusxa[0] = 9;
        System.out.println(sonlar[0]);
    }
}`,
            output: "Salom\nSalom!\n9",
          },
        ],
        quiz: [
          {
            q: "Java'da nechta primitiv tur mavjud?",
            options: ["4", "6", "8", "10"],
            answer: 2,
            explain: "byte, short, int, long, float, double, char va boolean — jami 8 ta primitiv tur bor.",
          },
          {
            q: "String qaysi turkumga kiradi?",
            options: ["Primitiv tur", "Reference tur", "Massiv", "Interfeys"],
            answer: 1,
            explain: "String — klass, ya'ni reference tur. U matn obyektiga havolani saqlaydi.",
          },
          {
            q: "long turidagi literalga qaysi qo'shimcha yoziladi?",
            options: ["L", "F", "D", "B"],
            answer: 0,
            explain: "Katta butun son literaliga L qo'shiladi: 2_000_000_000L. F — float, D — double uchun.",
          },
        ],
      },
      {
        id: 3,
        title: "Operatorlar va String bilan ishlash",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Operatorlar qiymatlar ustida amal bajaradi. Butun sonlar bilan ishlaganda <code>/</code> bo'lish natijasining butun qismini beradi, <code>%</code> esa qoldiqni. Taqqoslash operatorlari <code>true</code> yoki <code>false</code> qaytaradi, mantiqiy <code>&amp;&amp;</code>, <code>||</code>, <code>!</code> esa shartlarni birlashtiradi.",
          },
          {
            type: "code",
            title: "Hisob.java",
            code: `public class Hisob {
    public static void main(String[] args) {
        int a = 17;
        int b = 5;

        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
        System.out.println(a > b && b > 0);
        System.out.println(a == 17 || b == 0);
    }
}`,
            output: "22\n12\n85\n3\n2\ntrue\ntrue",
          },
          {
            type: "table",
            head: ["Operator", "Ma'nosi", "Misol natijasi"],
            rows: [
              ["<code>+ - * /</code>", "Arifmetik amallar", "<code>17 / 5</code> → <code>3</code>"],
              ["<code>%</code>", "Bo'lishdan qoldiq", "<code>17 % 5</code> → <code>2</code>"],
              ["<code>==</code>, <code>!=</code>", "Teng / teng emas", "<code>17 == 17</code> → <code>true</code>"],
              ["<code>&gt; &lt; &gt;= &lt;=</code>", "Taqqoslash", "<code>a &gt; b</code> → <code>true</code>"],
              ["<code>&amp;&amp;</code>", "VA — ikkalasi rost", "<code>true &amp;&amp; false</code> → <code>false</code>"],
              ["<code>||</code>", "YOKI — bittasi rost", "<code>true || false</code> → <code>true</code>"],
              ["<code>!</code>", "EMAS — inkor", "<code>!true</code> → <code>false</code>"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Butun bo'lish haqida",
            html: "<code>17 / 5</code> natijasi <code>3</code>, chunki ikkala operand ham <code>int</code>. Kasr natija kerak bo'lsa, hech bo'lmaganda bittasi <code>double</code> bo'lishi kerak: <code>17 / 5.0</code>. <code>%</code> operatori esa faqat qoldiqni beradi.",
          },
          {
            type: "code",
            title: "Matn.java",
            code: `public class Matn {
    public static void main(String[] args) {
        String ism = "  Aziza  ";
        String toza = ism.trim();

        System.out.println(toza.length());
        System.out.println(toza.charAt(0));
        System.out.println(toza.substring(0, 3));
        System.out.println(toza.indexOf('z'));
        System.out.println(toza.replace('a', 'o'));
        System.out.println(toza + "!");
    }
}`,
            output: "5\nA\nAzi\n1\nAzizo\nAziza!",
          },
          {
            type: "note",
            variant: "tip",
            title: "String'ni == bilan solishtirmang",
            html: "<code>==</code> ikki matnning mazmunini emas, havolasini tekshiradi. Matnlarni mazmuni bo'yicha solishtirish uchun <code>equals()</code> ishlatiladi: <code>ism.equals(\"Aziza\")</code>. <code>equalsIgnoreCase()</code> esa katta-kichik harfni hisobga olmaydi.",
          },
        ],
        quiz: [
          {
            q: "int turida 17 / 5 ifodasining natijasi nechaga teng?",
            options: ["3", "3.4", "4", "2"],
            answer: 0,
            explain: "Ikkala operand int bo'lsa, Java butun bo'lishni bajaradi va kasr qismini tashlab yuboradi.",
          },
          {
            q: "Ikki String qiymatini mazmuni bo'yicha solishtirish uchun nima ishlatiladi?",
            options: ["==", "equals()", "compare", "toString()"],
            answer: 1,
            explain: "equals() matnlarning mazmunini solishtiradi; == esa havolalarni taqqoslaydi.",
          },
          {
            q: "a > b && b > 0 ifodasi qachon true bo'ladi?",
            options: ["Faqat bittasi rost bo'lsa", "Ikkala shart ham rost bo'lsa", "Hech qachon", "a manfiy bo'lsa"],
            answer: 1,
            explain: "&& mantiqiy VA operatori; natija true bo'lishi uchun ikkala shart ham bajarilishi kerak.",
          },
        ],
      },
      {
        id: 4,
        title: "Shartlar, taqqoslash va switch",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Dastur ko'pincha tanlov qilishi kerak: ball yetarlimi, foydalanuvchi katta yoshdami, qaysi menyu tanlandi? Buning uchun <code>if / else if / else</code> ishlatiladi. Bir nechta aniq variant bo'lsa, <code>switch</code> kodni yanada o'qishli qiladi.",
          },
          {
            type: "code",
            title: "Baho.java",
            code: `public class Baho {
    public static void main(String[] args) {
        int ball = 85;

        if (ball >= 90) {
            System.out.println("A");
        } else if (ball >= 80) {
            System.out.println("B");
        } else if (ball >= 70) {
            System.out.println("C");
        } else {
            System.out.println("D");
        }

        String holat = ball >= 60 ? "o'tdi" : "qayta";
        System.out.println(holat);
    }
}`,
            output: "B\no'tdi",
          },
          {
            type: "table",
            head: ["Tuzilma", "Qachon ishlatiladi", "Misol"],
            rows: [
              ["<code>if</code>", "Bitta shartni tekshirish", "<code>if (ball &gt;= 60) { }</code>"],
              ["<code>else if</code>", "Qo'shimcha shartlar", "<code>else if (ball &gt;= 80) { }</code>"],
              ["<code>else</code>", "Hech bir shart bajarilmasa", "<code>else { }</code>"],
              ["<code>switch</code>", "Aniq variantlardan birini tanlash", "<code>switch (kun) { case 1 ... }</code>"],
              ["<code>? :</code>", "Qisqa ikki variantli tanlov", "<code>ball &gt;= 60 ? \"o'tdi\" : \"qayta\"</code>"],
            ],
          },
          {
            type: "code",
            title: "Kun.java",
            code: `public class Kun {
    public static void main(String[] args) {
        int kun = 3;

        switch (kun) {
            case 1 -> System.out.println("Dushanba");
            case 2 -> System.out.println("Seshanba");
            case 3 -> System.out.println("Chorshanba");
            default -> System.out.println("Boshqa kun");
        }

        String tur = "admin";
        String xabar = switch (tur) {
            case "admin" -> "To'liq ruxsat";
            case "user" -> "Cheklangan ruxsat";
            default -> "Mehmon";
        };
        System.out.println(xabar);
    }
}`,
            output: "Chorshanba\nTo'liq ruxsat",
          },
          {
            type: "note",
            variant: "tip",
            title: "switch: arrow va klassik uslub",
            html: "Zamonaviy Java'da <code>case 1 -&gt; ...</code> yozuvi qulay: u avtomatik ravishda keyingi case'ga o'tib ketmaydi, shuning uchun <code>break</code> shart emas. Klassik <code>case 1:</code> uslubida esa har bir case oxirida <code>break</code> yozilmasa, bajarilish keyingi case'ga davom etadi.",
          },
        ],
        quiz: [
          {
            q: "ball = 85 bo'lsa, birinchi misolda qaysi harf chiqadi?",
            options: ["A", "B", "C", "D"],
            answer: 1,
            explain: "85 >= 90 sharti false, 85 >= 80 sharti true — shuning uchun B chiqadi.",
          },
          {
            q: "switch nimani tanlash uchun ishlatiladi?",
            options: ["Faqat sonlarni qo'shish", "Bir nechta aniq variantdan birini", "Tsiklni takrorlash", "Faylni o'chirish"],
            answer: 1,
            explain: "switch ifodaning qiymatiga qarab mos case variantini bajaradi.",
          },
          {
            q: "Zamonaviy arrow switch'da break nima uchun kerak emas?",
            options: ["Chunki arrow case avtomatik yakunlanadi", "Chunki switch umuman ishlamaydi", "Chunki break faqat tsiklda ishlaydi", "Chunki default majburiy"],
            answer: 0,
            explain: "Arrow case bajarilgach switch tugaydi; keyingi case'ga o'tish (fall-through) bo'lmaydi.",
          },
        ],
      },
      {
        id: 5,
        title: "Tsikllar: for, while va do-while",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Tsikl bir xil ishni bir necha marta bajaradi. <code>for</code> — takrorlar soni ma'lum bo'lganda, <code>while</code> — shartga bog'liq holda, <code>do-while</code> esa kamida bir marta bajarilishi kerak bo'lgan ishlar uchun qulay.",
          },
          {
            type: "code",
            title: "Tsikl.java",
            code: `public class Tsikl {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Qadam: " + i);
        }

        int son = 3;
        while (son > 0) {
            System.out.println("Qoldi: " + son);
            son--;
        }

        int yigindi = 0;
        for (int i = 1; i <= 4; i++) {
            yigindi += i;
        }
        System.out.println("Yig'indi: " + yigindi);
    }
}`,
            output:
              "Qadam: 1\nQadam: 2\nQadam: 3\nQadam: 4\nQadam: 5\nQoldi: 3\nQoldi: 2\nQoldi: 1\nYig'indi: 10",
          },
          {
            type: "table",
            head: ["Qism", "Bajarilish vaqti", "Vazifasi"],
            rows: [
              ["<code>int i = 1</code>", "Bir marta, tsikl boshida", "Boshlang'ich qiymat"],
              ["<code>i &lt;= 5</code>", "Har aylanishdan oldin", "Davom etish sharti"],
              ["<code>i++</code>", "Har aylanishdan keyin", "Qadam: qiymatni oshirish"],
              ["<code>{ ... }</code>", "Shart true bo'lganda", "Tsikl tanasi"],
            ],
          },
          {
            type: "code",
            title: "Sakrash.java",
            code: `public class Sakrash {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i == 3) continue;
            if (i == 6) break;
            System.out.println(i);
        }

        int n = 1;
        do {
            System.out.println("Aylanish: " + n);
            n++;
        } while (n <= 2);
    }
}`,
            output: "1\n2\n4\n5\nAylanish: 1\nAylanish: 2",
          },
          {
            type: "note",
            variant: "warning",
            title: "Cheksiz tsikl",
            html: "<code>while</code> sharti hech qachon false bo'lmasa, tsikl to'xtamaydi. Shartni o'zgartiradigan kodni unutmang yoki <code>break</code> ishlatib chiqing. <code>do-while</code> da shart pastda tekshiriladi, shuning uchun tana kamida bir marta bajariladi.",
          },
        ],
        quiz: [
          {
            q: "for (int i = 1; i <= 5; i++) tsiklida tana necha marta bajariladi?",
            options: ["4", "5", "6", "Cheksiz"],
            answer: 1,
            explain: "i = 1, 2, 3, 4, 5 qiymatlarida shart true bo'ladi — jami 5 marta.",
          },
          {
            q: "do-while tsiklining while'dan asosiy farqi nima?",
            options: ["do-while hech qachon ishlamaydi", "do-while tanasi kamida bir marta bajariladi", "do-while faqat sonlar uchun", "Farqi yo'q"],
            answer: 1,
            explain: "do-while shartni tana bajarilgandan keyin tekshiradi, shuning uchun tana kamida bir marta ishlaydi.",
          },
          {
            q: "continue operatori nima qiladi?",
            options: ["Tsiklni butunlay tugatadi", "Joriy aylanishni o'tkazib, keyingisiga o'tadi", "Dasturni to'xtatadi", "Faylni yopadi"],
            answer: 1,
            explain: "continue joriy aylanishning qolgan qismini tashlab, keyingi aylanishga o'tadi.",
          },
        ],
      },
      {
        id: 6,
        title: "Metodlar, parametrlar va scope",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Metod — nomlangan, qayta ishlatiladigan kod bloki. U parametrlar qabul qiladi va <code>return</code> bilan natija qaytaradi. Java'da metod har doim biror klass ichida bo'ladi. Bir xil nomli, lekin parametrlari boshqacha bo'lgan metodlar ham bo'lishi mumkin — bu <b>overloading</b> deyiladi.",
          },
          {
            type: "code",
            title: "Metodlar.java",
            code: `public class Metodlar {
    static int qosh(int a, int b) {
        return a + b;
    }

    static String salomlash(String ism) {
        return "Salom, " + ism + "!";
    }

    static int ortacha(int a, int b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        System.out.println(qosh(2, 3));
        System.out.println(qosh(10, 15));
        System.out.println(salomlash("Aziza"));
        System.out.println(ortacha(80, 90));
    }
}`,
            output: "5\n25\nSalom, Aziza!\n85",
          },
          {
            type: "table",
            head: ["Qism", "Misol", "Ma'nosi"],
            rows: [
              ["Qaytish turi", "<code>int</code>", "Metod qanday turdagi qiymat qaytaradi"],
              ["Nom", "<code>qosh</code>", "Metodni chaqirish uchun ishlatiladi"],
              ["Parametrlar", "<code>(int a, int b)</code>", "Kiruvchi qiymatlar"],
              ["<code>return</code>", "<code>return a + b;</code>", "Natijani qaytaradi va metodni tugatadi"],
              ["<code>void</code>", "<code>static void xabar()</code>", "Metod qiymat qaytarmaydi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Scope — ko'rinish doirasi",
            html: "Metod ichida e'lon qilingan o'zgaruvchi faqat shu metod ichida ko'rinadi. Jingalak qavs ichida yaratilgan o'zgaruvchi esa blok tugashi bilan yo'qoladi. Bir metodning lokal o'zgaruvchisi boshqa metodga avtomatik ko'rinmaydi.",
          },
          {
            type: "code",
            title: "Doira.java",
            code: `public class Doira {
    static int kvadrat(int n) {
        return n * n;
    }

    static int kvadrat(int n, int m) {
        return n * m;
    }

    public static void main(String[] args) {
        int natija = kvadrat(5);
        System.out.println(natija);
        System.out.println(kvadrat(5, 4));

        if (natija > 20) {
            int bonus = 10;
            System.out.println(bonus);
        }
        // System.out.println(bonus); // xato: blokdan tashqarida ko'rinmaydi
    }
}`,
            output: "25\n20\n10",
          },
          {
            type: "note",
            variant: "tip",
            title: "static nima uchun?",
            html: "<code>main</code> static bo'lgani uchun u obyekt yaratmasdan chaqiriladi. Undan chaqiriladigan yordamchi metodlar ham hozircha <code>static</code> qilib yozildi. Klass va obyektlarni o'rganishimiz bilan static bo'lmagan metodlarga o'tamiz.",
          },
        ],
        quiz: [
          {
            q: "Qiymat qaytarmaydigan metodning qaytish turi qanday bo'ladi?",
            options: ["int", "void", "null", "empty"],
            answer: 1,
            explain: "void — metod hech qanday qiymat qaytarmasligini bildiradi.",
          },
          {
            q: "Overloading nima?",
            options: ["Bir xil nomli, turli parametrli metodlar", "Metodni o'chirish", "Faqat bitta metod yozish", "Klassni meros qilish"],
            answer: 0,
            explain: "Overloading — bir xil nomli, lekin parametrlari soni yoki turlari bilan farq qiladigan metodlar.",
          },
          {
            q: "Blok ichida e'lon qilingan lokal o'zgaruvchi qayerda ko'rinadi?",
            options: ["Butun dasturda", "Faqat shu blok ichida", "Boshqa klasslarda", "Faqat main ichida"],
            answer: 1,
            explain: "Lokal o'zgaruvchining scope'i e'lon qilingan blok bilan chegaralanadi.",
          },
        ],
      },
      {
        id: 7,
        title: "Massivlar va ArrayList",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Massiv — bir xil turdagi qiymatlarning tartiblangan to'plami. Uning o'lchami yaratilganda belgilanadi va keyinchalik o'zgarmaydi. <code>ArrayList</code> esa dinamik ro'yxat: unga element qo'shish va olib tashlash mumkin. Ikkalasida ham indekslar <b>0</b> dan boshlanadi.",
          },
          {
            type: "code",
            title: "Massiv.java",
            code: `public class Massiv {
    public static void main(String[] args) {
        int[] ballar = {90, 85, 78, 92};
        String[] ismlar = new String[2];
        ismlar[0] = "Ali";
        ismlar[1] = "Aziza";

        System.out.println(ballar.length);
        System.out.println(ballar[0]);
        System.out.println(ismlar[1]);

        int yigindi = 0;
        for (int ball : ballar) {
            yigindi += ball;
        }
        System.out.println(yigindi);
    }
}`,
            output: "4\n90\nAziza\n345",
          },
          {
            type: "table",
            head: ["Xususiyat", "Massiv", "ArrayList"],
            rows: [
              ["O'lcham", "Yaratishda belgilanadi", "O'zgaruvchan"],
              ["Element qo'shish", "Faqat mavjud indeksga", "<code>add()</code>"],
              ["Element o'chirish", "O'lchamni o'zgartirmaydi", "<code>remove()</code>"],
              ["Elementlar soni", "<code>length</code>", "<code>size()</code>"],
              ["Element olish", "<code>massiv[i]</code>", "<code>get(i)</code>"],
            ],
          },
          {
            type: "code",
            title: "Royxat.java",
            code: `import java.util.ArrayList;

public class Royxat {
    public static void main(String[] args) {
        ArrayList<String> ismlar = new ArrayList<>();
        ismlar.add("Ali");
        ismlar.add("Aziza");
        ismlar.add("Bek");

        System.out.println(ismlar.size());
        System.out.println(ismlar.get(1));
        System.out.println(ismlar.contains("Bek"));

        ismlar.remove("Ali");
        System.out.println(ismlar);
    }
}`,
            output: "3\nAziza\ntrue\n[Aziza, Bek]",
          },
          {
            type: "note",
            variant: "warning",
            title: "Chegara va primitivlar",
            html: "Mavjud bo'lmagan indeksga murojaat <code>IndexOutOfBoundsException</code> beradi. <code>ArrayList</code> primitiv turlarni to'g'ridan-to'g'ri saqlamaydi — <code>ArrayList&lt;Integer&gt;</code> kabi wrapper klasslardan foydalaniladi. Java avtomatik qadoqlash (autoboxing) yordamida <code>int</code> va <code>Integer</code> o'rtasida o'tadi.",
          },
        ],
        quiz: [
          {
            q: "Massivning birinchi elementi qaysi indeksda joylashgan?",
            options: ["1", "0", "-1", "length"],
            answer: 1,
            explain: "Java massivlarida indeks 0 dan boshlanadi.",
          },
          {
            q: "ArrayList'dagi elementlar sonini qaysi metod qaytaradi?",
            options: ["length", "size()", "count()", "getSize()"],
            answer: 1,
            explain: "ArrayList uchun size() ishlatiladi; massivda esa length xossasi bor.",
          },
          {
            q: "ArrayList<Integer> nima uchun Integer ishlatadi?",
            options: ["Chunki int taqiqlangan", "Chunki ArrayList faqat reference turlarni saqlaydi", "Chunki Integer tezroq", "Chunki int o'chirilgan"],
            answer: 1,
            explain: "Generic kolleksiyalar primitivlarni emas, obyektlarni saqlaydi. int avtomatik Integer'ga qadoqlanadi.",
          },
        ],
      },
      {
        id: 8,
        title: "Klasslar, obyektlar, konstruktorlar va inkapsulyatsiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Klass — obyekt uchun shablon. U maydonlar (holat) va metodlarni (xatti-harakat) birlashtiradi. <code>new</code> bilan klassdan obyekt yaratiladi, <b>konstruktor</b> esa obyektning boshlang'ich holatini o'rnatadi. Maydonlarni <code>private</code> qilib, faqat metodlar orqali boshqarish — <b>inkapsulyatsiya</b> deyiladi.",
          },
          {
            type: "code",
            title: "Talaba.java",
            code: `public class Talaba {
    private String ism;
    private int ball;

    public Talaba(String ism, int ball) {
        this.ism = ism;
        setBall(ball);
    }

    public String getIsm() {
        return ism;
    }

    public int getBall() {
        return ball;
    }

    public void setBall(int ball) {
        if (ball >= 0 && ball <= 100) {
            this.ball = ball;
        }
    }

    public static void main(String[] args) {
        Talaba t = new Talaba("Aziza", 92);
        t.setBall(105);
        System.out.println(t.getIsm());
        System.out.println(t.getBall());
    }
}`,
            output: "Aziza\n92",
          },
          {
            type: "table",
            head: ["A'zo", "Misol", "Vazifasi"],
            rows: [
              ["Maydon", "<code>private int ball;</code>", "Obyekt holatini saqlaydi"],
              ["Konstruktor", "<code>public Talaba(...)</code>", "Obyektni boshlang'ich qiymatlar bilan yaratadi"],
              ["Getter", "<code>getBall()</code>", "Maydon qiymatini xavfsiz o'qiydi"],
              ["Setter", "<code>setBall()</code>", "Qiymatni tekshirib o'zgartiradi"],
              ["<code>this</code>", "<code>this.ism = ism;</code>", "Joriy obyekt maydoniga murojaat qiladi"],
            ],
          },
          {
            type: "code",
            title: "Hisob.java",
            code: `public class Hisob {
    private int balans;

    public Hisob(int boshlangich) {
        balans = boshlangich;
    }

    public void qosh(int summa) {
        if (summa > 0) {
            balans += summa;
        }
    }

    public int getBalans() {
        return balans;
    }

    public static void main(String[] args) {
        Hisob a = new Hisob(100);
        Hisob b = a;
        b.qosh(50);
        b.qosh(-20);

        System.out.println(a.getBalans());
        System.out.println(a == b);
    }
}`,
            output: "150\ntrue",
          },
          {
            type: "note",
            variant: "info",
            title: "Nega maydonlarni yopamiz?",
            html: "<code>private</code> maydonni klassdan tashqaridan to'g'ridan-to'g'ri o'zgartirib bo'lmaydi. Bu qoidalarni buzadigan qiymatlardan himoya qiladi: <code>setBall()</code> 100 dan katta ballni qabul qilmadi. <code>a</code> va <code>b</code> bir obyektga havola qilgani uchun <code>a == b</code> true bo'ldi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Konstruktor nomi",
            html: "Konstruktor nomi klass nomi bilan bir xil bo'ladi va qaytish turi yozilmaydi. Bir nechta konstruktor turli parametrlar bilan ham bo'lishi mumkin. Agar konstruktor yozilmasa, Java bo'sh standart konstruktorni avtomatik qo'shadi.",
          },
        ],
        quiz: [
          {
            q: "Konstruktorning nomi qanday bo'lishi kerak?",
            options: ["Klass nomi bilan bir xil", "Har doim main", "new so'zi bilan", "Istalgan nom bilan"],
            answer: 0,
            explain: "Konstruktor klass nomi bilan bir xil bo'ladi va qaytish turi yozilmaydi.",
          },
          {
            q: "private maydonga klass tashqarisidan qanday murojaat qilinadi?",
            options: ["To'g'ridan-to'g'ri nuqta orqali", "Faqat getter va setter metodlari orqali", "Faqat print bilan", "Umuman mumkin emas"],
            answer: 1,
            explain: "private maydon faqat klass ichida ko'rinadi; tashqaridan getter/setter orqali boshqariladi.",
          },
          {
            q: "Hisob misolida a va b uchun a == b nima uchun true?",
            options: ["Ikkala obyekt bir xil qiymatga ega", "b = a bir obyektga havola nusxalangan", "Java har doim true qaytaradi", "Konstruktor avtomatik chaqirilgan"],
            answer: 1,
            explain: "b = a yangi obyekt yaratmaydi, faqat havolani nusxalaydi; ikkalasi bitta obyektni ko'rsatadi.",
          },
        ],
      },
      {
        id: 9,
        title: "Meros olish va interfeyslar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Meros (inheritance) umumiy kodni bitta ota klassga yig'ish imkonini beradi. Bola klass <code>extends</code> orqali ota klassning maydon va metodlarini oladi. <b>Interfeys</b> esa qanday metodlar bo'lishini belgilaydi, lekin ularning ichini yozmaydi — uni <code>implements</code> qilgan klass shartnomani bajaradi.",
          },
          {
            type: "code",
            title: "Hayvonlar.java",
            code: `class Hayvon {
    protected String nom;

    Hayvon(String nom) {
        this.nom = nom;
    }

    void ovoz() {
        System.out.println(nom + " ovoz chiqaradi");
    }
}

class Kuchuk extends Hayvon {
    Kuchuk(String nom) {
        super(nom);
    }

    @Override
    void ovoz() {
        System.out.println(nom + " huradi");
    }
}

public class Hayvonlar {
    public static void main(String[] args) {
        Hayvon h = new Hayvon("Mushuk");
        Hayvon k = new Kuchuk("Bobik");

        h.ovoz();
        k.ovoz();
    }
}`,
            output: "Mushuk ovoz chiqaradi\nBobik huradi",
          },
          {
            type: "p",
            html: "Interfeys ko'pincha bir nechta klass uchun umumiy shartnoma yaratishda ishlatiladi. Bir klass faqat bitta klassdan meros olishi mumkin, lekin bir nechta interfeysni amalga oshirishi mumkin.",
          },
          {
            type: "code",
            title: "Tolovlar.java",
            code: `interface Tolov {
    void tola(int summa);
}

class Naqd implements Tolov {
    public void tola(int summa) {
        System.out.println("Naqd: " + summa);
    }
}

class Karta implements Tolov {
    public void tola(int summa) {
        System.out.println("Karta: " + summa);
    }
}

public class Tolovlar {
    public static void main(String[] args) {
        Tolov[] usullar = {new Naqd(), new Karta()};
        for (Tolov t : usullar) {
            t.tola(50);
        }
    }
}`,
            output: "Naqd: 50\nKarta: 50",
          },
          {
            type: "table",
            head: ["Tushuncha", "Kalit so'z", "Asosiy qoida"],
            rows: [
              ["Meros", "<code>extends</code>", "Bitta klass faqat bitta klassdan meros oladi"],
              ["Interfeys", "<code>implements</code>", "Bir nechta interfeysni amalga oshirish mumkin"],
              ["Ota konstruktor", "<code>super(...)</code>", "Bola konstruktor ichida chaqiriladi"],
              ["Qayta yozish", "<code>@Override</code>", "Bola klass ota metodini o'zgartirib beradi"],
              ["Polimorfizm", "Ota havolasi", "Ota turidagi havola bola obyektini ko'rsatishi mumkin"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Interfeys metodlari",
            html: "Interfeys metodlari odatda <code>public abstract</code> hisoblanadi. Uni amalga oshiruvchi klassda metodni <code>public</code> qilib yozish shart — ko'rinishni toraytirib bo'lmaydi. Bola klass ota metodini o'zgartirsa, <code>@Override</code> yozish xatoni erta ushlashga yordam beradi.",
          },
        ],
        quiz: [
          {
            q: "Bir klassdan meros olish uchun qaysi kalit so'z ishlatiladi?",
            options: ["implements", "extends", "inherits", "super"],
            answer: 1,
            explain: "class Bola extends Ota — meros olish uchun extends ishlatiladi.",
          },
          {
            q: "Interfeysni amalga oshirish uchun qaysi kalit so'z kerak?",
            options: ["extends", "implements", "interface", "override"],
            answer: 1,
            explain: "class Klass implements Interfeys — interfeys shartnomasini bajarish uchun implements yoziladi.",
          },
          {
            q: "Ota turidagi havola bola obyektini ko'rsatishi nima deyiladi?",
            options: ["Inkapsulyatsiya", "Polimorfizm", "Kompilyatsiya", "Overloading"],
            answer: 1,
            explain: "Polimorfizm tufayli Hayvon k = new Kuchuk(...) ishlaydi va k.ovoz() bola versiyasini chaqiradi.",
          },
        ],
      },
      {
        id: 10,
        title: "Istisnolar: try, catch, finally va throw",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Istisno (exception) — dastur ishlashida yuz beradigan kutilmagan holat: nolga bo'lish, noto'g'ri matnni songa aylantirish, mavjud bo'lmagan fayl. Istisnolarni ushlash uchun <code>try / catch</code>, majburiy yakuniy ishlar uchun <code>finally</code>, xatoni ataylab ko'tarish uchun <code>throw</code> ishlatiladi.",
          },
          {
            type: "code",
            title: "Xato.java",
            code: `public class Xato {
    static int bol(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Nolga bo'lish mumkin emas");
        }
        return a / b;
    }

    public static void main(String[] args) {
        try {
            System.out.println(bol(10, 2));
            System.out.println(bol(5, 0));
        } catch (ArithmeticException e) {
            System.out.println("Xato: " + e.getMessage());
        } finally {
            System.out.println("Tekshiruv tugadi");
        }
    }
}`,
            output: "5\nXato: Nolga bo'lish mumkin emas\nTekshiruv tugadi",
          },
          {
            type: "table",
            head: ["Istisno", "Qachon yuz beradi", "Turi"],
            rows: [
              ["<code>ArithmeticException</code>", "Nolga bo'lish", "Unchecked"],
              ["<code>NumberFormatException</code>", "Matnni songa aylantirib bo'lmasa", "Unchecked"],
              ["<code>IllegalArgumentException</code>", "Metodga noto'g'ri argument berilsa", "Unchecked"],
              ["<code>NullPointerException</code>", "null havola orqali murojaat qilinsa", "Unchecked"],
              ["<code>IOException</code>", "Fayl yoki kiritish-chiqarish xatosi", "Checked"],
            ],
          },
          {
            type: "code",
            title: "Yaroqli.java",
            code: `public class Yaroqli {
    static int yosh(String matn) {
        try {
            int qiymat = Integer.parseInt(matn);
            if (qiymat < 0) {
                throw new IllegalArgumentException("Yosh manfiy bo'lmaydi");
            }
            return qiymat;
        } catch (NumberFormatException e) {
            return -1;
        }
    }

    public static void main(String[] args) {
        System.out.println(yosh("16"));
        System.out.println(yosh("abc"));

        try {
            System.out.println(yosh("-2"));
        } catch (IllegalArgumentException e) {
            System.out.println("Xato: " + e.getMessage());
        }
    }
}`,
            output: "16\n-1\nXato: Yosh manfiy bo'lmaydi",
          },
          {
            type: "note",
            variant: "tip",
            title: "finally qachon ishlaydi?",
            html: "<code>finally</code> bloki try muvaffaqiyatli tugasa ham, istisno ushlansa ham bajariladi. U resurslarni yopish uchun ishlatiladi. Zamonaviy Java'da fayl va oqimlar uchun <code>try-with-resources</code> yozuvi yanada qulay: resurs avtomatik yopiladi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Xatoni yashirmang",
            html: "Bo'sh <code>catch</code> bloki xatoni jimgina yutib yuboradi va keyin xatoni topish juda qiyinlashadi. Hech bo'lmasa xabarni konsolga chiqaring yoki foydalanuvchiga tushunarli xabar bering. Barcha xatolarni ushlash uchun <code>catch (Exception e)</code> yozishdan ham ehtiyot bo'ling.",
          },
        ],
        quiz: [
          {
            q: "Integer.parseInt(\"abc\") qanday istisno beradi?",
            options: ["ArithmeticException", "NumberFormatException", "IOException", "NullPointerException"],
            answer: 1,
            explain: "Matn son formatida bo'lmasa, parseInt NumberFormatException ko'taradi.",
          },
          {
            q: "finally bloki qachon bajariladi?",
            options: ["Faqat xato bo'lsa", "Faqat xato bo'lmasa", "Try tugagach, xato bo'lgan-bo'lmaganidan qat'i nazar", "Hech qachon"],
            answer: 2,
            explain: "finally odatda try va catch'dan keyin har qanday holatda bajariladi.",
          },
          {
            q: "Xatoni ataylab ko'tarish uchun qaysi kalit so'z ishlatiladi?",
            options: ["throws", "throw", "raise", "catch"],
            answer: 1,
            explain: "throw yangi istisno obyektini ko'taradi; throws esa metod imzosida qanday istisnolar chiqishini bildiradi.",
          },
        ],
      },
      {
        id: 11,
        title: "Kolleksiyalar, paketlar va fayllar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Java kolleksiyalari ma'lumotlar guruhini saqlashning tayyor usullarini beradi: <code>List</code> tartibli ro'yxat, <code>Set</code> takrorlanmas to'plam, <code>Map</code> esa kalit va qiymat juftliklari. Ular <code>java.util</code> paketida joylashgan.",
          },
          {
            type: "code",
            title: "Kolleksiya.java",
            code: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Kolleksiya {
    public static void main(String[] args) {
        List<String> mevalar = new ArrayList<>();
        mevalar.add("olma");
        mevalar.add("banan");
        mevalar.add("olma");

        Set<String> noyob = new HashSet<>(mevalar);
        Map<String, Integer> baholar = new HashMap<>();
        baholar.put("Aziza", 92);
        baholar.put("Bek", 78);
        baholar.put("Aziza", 95);

        System.out.println(mevalar.size());
        System.out.println(noyob.size());
        System.out.println(baholar.get("Aziza"));
        System.out.println(baholar.containsKey("Bek"));
    }
}`,
            output: "3\n2\n95\ntrue",
          },
          {
            type: "table",
            head: ["Interfeys", "Nima saqlaydi", "Asosiy amallar"],
            rows: [
              ["<code>List</code>", "Tartibli, takrorlanishi mumkin", "<code>add</code>, <code>get</code>, <code>remove</code>"],
              ["<code>Set</code>", "Takrorlanmas qiymatlar", "<code>add</code>, <code>contains</code>"],
              ["<code>Map</code>", "Kalit → qiymat juftliklari", "<code>put</code>, <code>get</code>, <code>containsKey</code>"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Paketlar nima uchun kerak?",
            html: "Paket klasslarni guruhlaydi va nomlar to'qnashuvining oldini oladi. Fayl boshida <code>package com.noldan.model;</code> yozilsa, klass shu paketga tegishli bo'ladi. Boshqa paketdagi klassni ishlatish uchun <code>import com.noldan.model.Talaba;</code> yoziladi. Paket nomi papka tuzilishiga mos bo'lishi kerak.",
          },
          {
            type: "code",
            title: "Fayl.java",
            code: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Fayl {
    public static void main(String[] args) throws IOException {
        Path manzil = Path.of("natija.txt");
        Files.writeString(manzil, "Salom, fayl!");
        String matn = Files.readString(manzil);

        System.out.println(matn);
        System.out.println(Files.exists(manzil));
    }
}`,
            output: "Salom, fayl!\ntrue",
          },
          {
            type: "note",
            variant: "warning",
            title: "Fayl xatolari",
            html: "<code>Files.writeString()</code> va <code>Files.readString()</code> <code>IOException</code> chiqarishi mumkin. Bu — <b>checked</b> istisno, shuning uchun uni ushlash yoki metod imzosida <code>throws IOException</code> bilan e'lon qilish shart. Fayl yo'li joriy papkaga nisbatan hisoblanadi.",
          },
        ],
        quiz: [
          {
            q: "Kalit va qiymat juftliklarini saqlash uchun qaysi interfeys ishlatiladi?",
            options: ["List", "Set", "Map", "Array"],
            answer: 2,
            explain: "Map kalit bo'yicha qiymat saqlaydi: put, get va containsKey metodlari bilan ishlanadi.",
          },
          {
            q: "import yozuvining vazifasi nima?",
            options: ["Yangi paket yaratish", "Boshqa paketdagi klassni qisqa nom bilan ishlatish", "Faylni o'chirish", "Dasturni ishga tushirish"],
            answer: 1,
            explain: "import to'liq paket nomini har safar yozmaslik uchun klassni ko'rinadigan qiladi.",
          },
          {
            q: "Faylni matn sifatida o'qish uchun qaysi metod ishlatiladi?",
            options: ["Files.readString()", "Files.open()", "Files.load()", "Files.text()"],
            answer: 0,
            explain: "Files.readString(Path) faylning butun matnini qaytaradi va IOException chiqarishi mumkin.",
          },
        ],
      },
      {
        id: 12,
        title: "Mini loyiha: konsol baholar menejeri",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi o'rganganlarimizni birlashtiramiz. Kichik konsol dasturi talabalar ro'yxatini saqlaydi, ularni ball bo'yicha tartiblaydi, har biriga daraja beradi va umumiy o'rtachani hisoblaydi. Ma'lumotlar dastur ichida beriladi, shuning uchun natija har doim bir xil bo'ladi.",
          },
          {
            type: "ul",
            items: [
              "Model: <code>Talaba</code> klassi — ism va ballni yopiq maydonlarda saqlaydi.",
              "Kolleksiya: <code>ArrayList&lt;Talaba&gt;</code> — talabalarni bir joyda yig'adi.",
              "Mantiq: <code>daraja()</code> metodi ballni A, B, C yoki D ga aylantiradi.",
              "Saralash: <code>Comparator.comparingInt(...).reversed()</code> — eng yuqori ball birinchi.",
              "Hisobot: tsikl yig'indi va o'rtachani hisoblab, natijani chiqaradi.",
            ],
          },
          {
            type: "code",
            title: "Baholar.java",
            code: `import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Talaba {
    private final String ism;
    private final int ball;

    Talaba(String ism, int ball) {
        this.ism = ism;
        this.ball = ball;
    }

    String getIsm() {
        return ism;
    }

    int getBall() {
        return ball;
    }
}

public class Baholar {
    static String daraja(int ball) {
        if (ball >= 90) return "A";
        if (ball >= 80) return "B";
        if (ball >= 70) return "C";
        return "D";
    }

    public static void main(String[] args) {
        List<Talaba> talabalar = new ArrayList<>();
        talabalar.add(new Talaba("Aziza", 92));
        talabalar.add(new Talaba("Bek", 78));
        talabalar.add(new Talaba("Dilnoza", 88));

        talabalar.sort(Comparator.comparingInt(Talaba::getBall).reversed());

        int yigindi = 0;
        Talaba engYaxshi = talabalar.get(0);
        for (Talaba t : talabalar) {
            yigindi += t.getBall();
            System.out.println(t.getIsm() + ": " + t.getBall() + " (" + daraja(t.getBall()) + ")");
        }

        System.out.println("O'rtacha: " + (yigindi / talabalar.size()));
        System.out.println("Eng yaxshi: " + engYaxshi.getIsm());
    }
}`,
            output:
              "Aziza: 92 (A)\nDilnoza: 88 (B)\nBek: 78 (C)\nO'rtacha: 86\nEng yaxshi: Aziza",
          },
          {
            type: "note",
            variant: "info",
            title: "Ishga tushirish",
            html: "<code>Baholar.java</code> faylini saqlang, <code>javac Baholar.java</code> bilan kompilyatsiya qiling va <code>java Baholar</code> deb ishga tushiring. Bitta faylda bitta <code>public</code> klass bo'lishi mumkinligini eslang — bu yerda u <code>Baholar</code>.",
          },
          {
            type: "code",
            title: "Qoshimcha.java",
            code: `import java.util.ArrayList;
import java.util.List;

record Talaba(String ism, int ball) {}

public class Qoshimcha {
    public static void main(String[] args) {
        List<Talaba> talabalar = new ArrayList<>();
        talabalar.add(new Talaba("Aziza", 92));
        talabalar.add(new Talaba("Bek", 78));
        talabalar.add(new Talaba("Dilnoza", 88));
        talabalar.add(new Talaba("Jasur", 81));

        int jami = 0;
        for (Talaba t : talabalar) {
            jami += t.ball();
        }

        System.out.println("Talabalar: " + talabalar.size());
        System.out.println("O'rtacha: " + (jami / talabalar.size()));
        System.out.println("Oxirgi: " + talabalar.get(talabalar.size() - 1).ism());
    }
}`,
            output: "Talabalar: 4\nO'rtacha: 84\nOxirgi: Jasur",
          },
          {
            type: "note",
            variant: "tip",
            title: "Loyihani kengaytiring",
            html: "O'zingiz qo'shib ko'ring: eng past ballni topish, 70 dan pastlarni alohida ro'yxat qilish yoki <code>record</code> yordamida modelni qisqartirish. Keyin ma'lumotlarni fayldan o'qishni qo'shsangiz, dastur haqiqiy hisobot vositasiga aylanadi.",
          },
        ],
        quiz: [
          {
            q: "Loyihada talabalar qaysi kolleksiyada saqlanadi?",
            options: ["ArrayList<Talaba>", "HashMap<String, Integer>", "HashSet<Integer>", "Talaba[] massivida faqat"],
            answer: 0,
            explain: "Loyihada ArrayList<Talaba> ishlatiladi — talaba obyektlarini tartibli ro'yxatda saqlaydi.",
          },
          {
            q: "comparingInt(...).reversed() qanday tartib beradi?",
            options: ["Ball bo'yicha o'sish", "Ball bo'yicha kamayish", "Ism bo'yicha alifbo", "Tasodifiy tartib"],
            answer: 1,
            explain: "comparingInt o'sish tartibini beradi, reversed() uni kamayish tartibiga aylantiradi.",
          },
          {
            q: "yigindi / talabalar.size() qanday natija beradi?",
            options: ["Kasrli o'rtacha", "Butun qismli o'rtacha", "Eng katta ball", "Xato"],
            answer: 1,
            explain: "Ikkala qiymat ham int bo'lgani uchun butun bo'lish bajariladi va kasr qismi tashlanadi.",
          },
        ],
      },
      {
        id: 13,
        title: "Paketlar, import va kirish huquqi",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Katta loyihada yuzlab klass paydo bo'ladi. Ularni tartibga solish uchun <b>paketlar</b> ishlatiladi: <code>package</code> yozuvi klass qaysi paketga tegishli ekanini bildiradi, <code>import</code> esa boshqa paketdagi klassni qisqa nom bilan ishlatishga yordam beradi. Paket nomi papka tuzilishiga mos bo'ladi.",
          },
          {
            type: "code",
            title: "Himoya.java",
            code: String.raw`class Hisob {
    private int maxfiy = 1;
    int paket = 2;
    protected int meros = 3;
    public int ochiq = 4;

    void ichki() {
        System.out.println(maxfiy + paket + meros + ochiq);
    }
}

public class Himoya {
    public static void main(String[] args) {
        Hisob h = new Hisob();
        // System.out.println(h.maxfiy); // xato: private
        System.out.println(h.paket + h.meros + h.ochiq);
        h.ichki();
    }
}`,
            output: "9\n10",
          },
          {
            type: "table",
            head: ["Modifier", "Klass ichida", "Paket ichida", "Bola klassda", "Hamma joyda"],
            rows: [
              ["<code>private</code>", "Ha", "Yo'q", "Yo'q", "Yo'q"],
              ["paket (modifiersiz)", "Ha", "Ha", "Yo'q", "Yo'q"],
              ["<code>protected</code>", "Ha", "Ha", "Ha", "Yo'q"],
              ["<code>public</code>", "Ha", "Ha", "Ha", "Ha"],
            ],
          },
          {
            type: "code",
            title: "com/noldan/app/Paket.java",
            code: String.raw`package com.noldan.app;

import java.util.ArrayList;
import java.util.List;

public class Paket {
    public static void main(String[] args) {
        List<String> mevalar = new ArrayList<>();
        mevalar.add("olma");
        mevalar.add("banan");
        System.out.println(mevalar.size());
        System.out.println(mevalar);
    }
}`,
            output: "2\n[olma, banan]",
          },
          {
            type: "note",
            variant: "info",
            title: "Kompilyatsiya va paket yo'li",
            html: "Manba fayl <code>src/com/noldan/app/Paket.java</code> da yotsin. <code>javac -d out src/com/noldan/app/Paket.java</code> buyrug'i klassni <code>out/com/noldan/app/Paket.class</code> ga joylaydi. Ishga tushirishda to'liq nom kerak: <code>java -cp out com.noldan.app.Paket</code>. Paket nomlarida bo'sh joy va maxsus belgilar ishlatilmaydi, odatda kichik harflar va teskari domen ishlatiladi: <code>uz.noldan.model</code>.",
          },
        ],
        quiz: [
          {
            q: "private maydon qayerdan ko'rinadi?",
            options: ["Butun paketda", "Faqat o'z klassi ichida", "Barcha paketlarda", "Faqat bola klasslarda"],
            answer: 1,
            explain: "private eng tor ko'rinish darajasi: maydon faqat e'lon qilingan klass ichida ishlatiladi.",
          },
          {
            q: "Boshqa paketdagi public klassdan qanday foydalanamiz?",
            options: ["Faqat faylni nusxalash bilan", "Paketni o'chirish bilan", "Klasni qayta yozish bilan", "import bilan qisqa nomini kiritib yoki to'liq nomini yozib"],
            answer: 3,
            explain: "import klassni ko'rinadigan qiladi. Import qilmasak ham to'liq nom bilan murojaat qilish mumkin.",
          },
          {
            q: "Paket nomi odatda nimaga mos bo'ladi?",
            options: ["Papka tuzilishiga", "main metodining nomiga", "Fayl hajmiga", "O'zgaruvchilar soniga"],
            answer: 0,
            explain: "com.noldan.model paketi com/noldan/model papkasiga mos keladi; bu kompilyatorga klassni topishga yordam beradi.",
          },
        ],
      },
      {
        id: 14,
        title: "static va final: umumiy holat va o'zgarmaslik",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>static</code> a'zo klassning o'ziga tegishli bo'ladi: uni obyekt yaratmasdan <code>Klass.nom</code> orqali ishlatamiz. <code>final</code> esa qiymat yoki havola bir marta o'rnatilgandan keyin o'zgarmasligini bildiradi. Ikkalasini to'g'ri qo'llash hisoblagichlar, konstantalar va xavfsiz model obyektlarini yaratishda muhim.",
          },
          {
            type: "code",
            title: "Statik.java",
            code: String.raw`class Hisoblagich {
    static int jami = 0;
    final int id;

    Hisoblagich(int id) {
        this.id = id;
        jami++;
    }

    static int jami() {
        return jami;
    }
}

public class Statik {
    public static void main(String[] args) {
        Hisoblagich a = new Hisoblagich(101);
        Hisoblagich b = new Hisoblagich(102);
        Hisoblagich c = new Hisoblagich(103);

        System.out.println(a.id);
        System.out.println(b.id);
        System.out.println(c.id);
        System.out.println(Hisoblagich.jami());
        System.out.println(Hisoblagich.jami);
    }
}`,
            output: "101\n102\n103\n3\n3",
          },
          {
            type: "note",
            variant: "warning",
            title: "static maydon umumiy",
            html: "<code>jami</code> bitta nusxada mavjud va barcha obyektlar uni ko'radi. Shu sababli uchinchi obyekt yaratilganda qiymat 3 bo'ldi. Agar maydon static bo'lmasa, har bir obyektning o'z nusxasi bo'lardi va <code>Hisoblagich.jami()</code> unga murojaat qila olmasdi. Static maydonlarni umumiy sozlama yoki hisoblagich uchun ishlating, lekin ularni obyekt holati uchun ishlatmang.",
          },
          {
            type: "code",
            title: "Final.java",
            code: String.raw`import java.util.ArrayList;
import java.util.List;

public class Final {
    static final int LIMIT = 3;

    public static void main(String[] args) {
        final List<String> royxat = new ArrayList<>();
        royxat.add("Ali");
        royxat.add("Aziza");
        // royxat = new ArrayList<>(); // xato: havola final

        System.out.println(royxat.size());
        System.out.println(royxat);
        System.out.println(LIMIT);

        List<String> ozgarmas = List.of("olma", "anor");
        System.out.println(ozgarmas);
    }
}`,
            output: "2\n[Ali, Aziza]\n3\n[olma, anor]",
          },
          {
            type: "note",
            variant: "tip",
            title: "final obyektni muzlatmaydi",
            html: "<code>final</code> faqat havolani qayta bog'lashni taqiqlaydi; ro'yxatning ichini o'zgartirish mumkin. Haqiqiy o'zgarmas kolleksiya kerak bo'lsa <code>List.copyOf()</code> yoki <code>List.of()</code> dan foydalaning. Konstantalar nomi odatda <code>KATTA_HARFLAR</code> bilan yoziladi.",
          },
        ],
        quiz: [
          {
            q: "static maydon nimaga tegishli?",
            options: ["Faqat birinchi obyektga", "Har bir obyektga alohida", "Klassning o'ziga va barcha obyektlar uchun umumiy", "Faqat main metodiga"],
            answer: 2,
            explain: "static maydon klass yuklanganda bir marta yaratiladi va barcha nusxalar uchun umumiy bo'ladi.",
          },
          {
            q: "final bilan e'lon qilingan obyekt havolasi haqida qaysi gap to'g'ri?",
            options: ["Havolani boshqa obyektga o'zgartirib bo'lmaydi, lekin obyekt ichi o'zgarishi mumkin", "Obyektning barcha maydonlari avtomatik o'zgarmas bo'ladi", "Faqat primitiv turlar uchun ishlaydi", "Havolani istalgan vaqtda almashtirish mumkin"],
            answer: 0,
            explain: "final havolani qayta bog'lashni taqiqlaydi. Obyektning ichki holati alohida himoyalanishi kerak.",
          },
          {
            q: "Konstanta nomi odatda qanday yoziladi?",
            options: ["camelCase bilan", "Faqat raqamlar bilan", "Kichik harflar va nuqta bilan", "KATTA_HARFLAR_BILAN"],
            answer: 3,
            explain: "static final konstantalar an'anaviy ravishda katta harflar va pastki chiziq bilan nomlanadi: MAX_HAJM.",
          },
        ],
      },
      {
        id: 15,
        title: "Abstrakt klasslar va interfeyslar chuqur",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<b>Abstrakt klass</b> umumiy holat va tayyor kodni saqlaydi, lekin ba'zi metodlarni bajarilishini bola klasslarga qoldiradi. <b>Interfeys</b> shartnoma beradi: u klass qanday imkoniyatlarga ega bo'lishini e'lon qiladi. Java 8 dan boshlab interfeyslarda <code>default</code> va <code>static</code> metodlar ham bo'lishi mumkin.",
          },
          {
            type: "code",
            title: "Shakllar.java",
            code: String.raw`abstract class Shakl {
    protected String nom;

    Shakl(String nom) {
        this.nom = nom;
    }

    abstract double yuza();

    void malumot() {
        System.out.println(nom + " yuzasi: " + yuza());
    }
}

class Kvadrat extends Shakl {
    private final int tomon;

    Kvadrat(int tomon) {
        super("Kvadrat");
        this.tomon = tomon;
    }

    @Override
    double yuza() {
        return tomon * tomon;
    }
}

public class Shakllar {
    public static void main(String[] args) {
        Kvadrat k = new Kvadrat(4);
        k.malumot();
        Shakl s = k;
        System.out.println(s.yuza());
    }
}`,
            output: "Kvadrat yuzasi: 16.0\n16.0",
          },
          {
            type: "table",
            head: ["Mezon", "Abstrakt klass", "Interfeys"],
            rows: [
              ["Meros soni", "Faqat bitta", "Bir nechta"],
              ["Konstruktor", "Bor", "Yo'q"],
              ["Maydonlar", "Har xil, holat saqlaydi", "public static final"],
              ["Metodlar", "Tayyor va abstrakt", "Abstrakt, default, static"],
              ["Qachon?", "Umumiy holat va kod bo'lsa", "Mustaqil imkoniyat shartnomasi bo'lsa"],
            ],
          },
          {
            type: "code",
            title: "Jarayon.java",
            code: String.raw`interface Boshlanadi {
    default String boshla() {
        return "boshlandi";
    }
}

interface Tugaydi {
    default String tugat() {
        return "tugadi";
    }
}

public class Jarayon implements Boshlanadi, Tugaydi {
    private final String nom;

    Jarayon(String nom) {
        this.nom = nom;
    }

    public static void main(String[] args) {
        Jarayon j = new Jarayon("import");
        System.out.println(j.nom + ": " + j.boshla());
        System.out.println(j.nom + ": " + j.tugat());
    }
}`,
            output: "import: boshlandi\nimport: tugadi",
          },
          {
            type: "note",
            variant: "info",
            title: "default metodlar to'qnashsa",
            html: "Ikki interfeysda bir xil nomli default metod bo'lsa, klass uni albatta qayta yozishi yoki <code>Interfeys.super.metod()</code> bilan qaysi birini chaqirishni ko'rsatishi kerak. Interfeysdagi maydonlar avtomatik <code>public static final</code> bo'ladi. Abstrakt klassdan farqli, interfeys obyekt holatini saqlamaydi.",
          },
        ],
        quiz: [
          {
            q: "Abstrakt klassdan obyekt yaratish mumkinmi?",
            options: ["Ha, new bilan", "Yo'q, faqat undan meros olgan konkret klassdan", "Ha, agar bo'sh konstruktor bo'lsa", "Faqat static metodlar bo'lsa"],
            answer: 1,
            explain: "Abstrakt klass tugallanmagan; undan new orqali obyekt yaratib bo'lmaydi. Bola klass barcha abstrakt metodlarni bajarishi kerak.",
          },
          {
            q: "Bir klass nechta interfeysni implements qilishi mumkin?",
            options: ["Faqat bitta", "Eng ko'pi ikkita", "Bir nechta", "Interfeysni amalga oshirib bo'lmaydi"],
            answer: 2,
            explain: "Java bir nechta interfeysni implements qilishga ruxsat beradi, lekin faqat bitta klassdan extends qilish mumkin.",
          },
          {
            q: "Interfeysdagi default metod nima beradi?",
            options: ["Metodni private qiladi", "Yangi interfeys yaratadi", "Faqat abstrakt metodni", "Metodning tayyor tanasini, uni majburiy qayta yozmaslik uchun"],
            answer: 3,
            explain: "default metod interfeysga tayyor bajarilish qo'shadi; uni amalga oshiruvchi klasslar qayta yozishi shart emas.",
          },
        ],
      },
      {
        id: 16,
        title: "Enumlar: nomlangan konstantalar to'plami",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>enum</code> — oldindan ma'lum bo'lgan qiymatlar to'plami: hafta kunlari, buyruq turlari, baho darajalari. Enum oddiy konstantalardan xavfsizroq, chunki kompilyator faqat e'lon qilingan variantlarni qabul qiladi. Enumlar maydon, konstruktor va metodlarga ham ega bo'la oladi.",
          },
          {
            type: "code",
            title: "Baholar.java",
            code: String.raw`enum Baho {
    A(90, "A'lo"),
    B(80, "Yaxshi"),
    C(70, "Qoniqarli"),
    D(0, "Qoniqarsiz");

    private final int min;
    private final String izoh;

    Baho(int min, String izoh) {
        this.min = min;
        this.izoh = izoh;
    }

    static Baho aniqlash(int ball) {
        for (Baho b : values()) {
            if (ball >= b.min) return b;
        }
        return D;
    }

    String izoh() {
        return izoh;
    }
}

public class Baholar {
    public static void main(String[] args) {
        Baho b = Baho.aniqlash(85);
        System.out.println(b);
        System.out.println(b.ordinal());
        System.out.println(b.izoh());
        System.out.println(Baho.valueOf("A"));
        System.out.println(Baho.valueOf("A").izoh());
    }
}`,
            output: "B\n1\nYaxshi\nA\nA'lo",
          },
          {
            type: "note",
            variant: "warning",
            title: "ordinal va valueOf",
            html: "<code>ordinal()</code> konstantaning tartib raqamini beradi, lekin uni ma'lumotlar bazasiga saqlash uchun ishlatmang: yangi konstanta qo'shilsa raqamlar siljiydi. <code>valueOf(\"A\")</code> nomdan konstantani topadi, noto'g'ri nomda <code>IllegalArgumentException</code> beradi. Saqlash uchun alohida kod maydonini ishlating.",
          },
          {
            type: "code",
            title: "Amallar.java",
            code: String.raw`enum Amal {
    QOSH {
        int qolla(int a, int b) { return a + b; }
    },
    AYIR {
        int qolla(int a, int b) { return a - b; }
    },
    KOPAYTIR {
        int qolla(int a, int b) { return a * b; }
    };

    abstract int qolla(int a, int b);
}

public class Amallar {
    public static void main(String[] args) {
        for (Amal a : Amal.values()) {
            System.out.println(a + ": " + a.qolla(6, 4));
        }
        System.out.println(Amal.valueOf("AYIR").qolla(10, 3));
    }
}`,
            output: "QOSH: 10\nAYIR: 2\nKOPAYTIR: 24\n7",
          },
          {
            type: "note",
            variant: "tip",
            title: "Enum bilan switch",
            html: "Enumlar <code>switch</code> uchun juda qulay: case qismida konstantaning nomi yoziladi, kompilyator barcha variantlarni tekshirishga yordam beradi. Ko'p variantlar bilan ishlashda <code>EnumSet</code> va <code>EnumMap</code> oddiy kolleksiyalarga qaraganda tejamkor. Enum konstruktori har doim private hisoblanadi.",
          },
        ],
        quiz: [
          {
            q: "enum uchun values() metodining vazifasi nima?",
            options: ["Barcha konstantalar massivini qaytaradi", "Faqat birinchi konstantani qaytaradi", "Konstantani o'chiradi", "Konstantalar sonini ikki baravar oshiradi"],
            answer: 0,
            explain: "values() har chaqirilganda enum konstantalarining yangi massivini qaytaradi; uni for-each bilan aylanib chiqish qulay.",
          },
          {
            q: "Enum konstantasini matn nomidan olish uchun qaysi metod ishlatiladi?",
            options: ["getName()", "toString() faqat", "ordinal()", "valueOf()"],
            answer: 3,
            explain: "Baho.valueOf(\"A\") nom bo'yicha konstantani qaytaradi. Noto'g'ri nom IllegalArgumentException beradi.",
          },
          {
            q: "Enum konstruktori qanday bo'ladi?",
            options: ["Har doim public", "Faqat protected", "Private yoki paket darajasida va faqat enum ichida chaqiriladi", "Konstruktorsiz enum bo'lmaydi"],
            answer: 2,
            explain: "Enum konstantalari faqat enum ichida yaratiladi, shuning uchun konstruktorni tashqaridan chaqirib bo'lmaydi.",
          },
        ],
      },
      {
        id: 17,
        title: "Recordlar, sealed klasslar va pattern matching",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<b>Record</b> ma'lumotlarni saqlash uchun qisqa yozuv: komponentlar, konstruktor, aksessorlar, <code>equals</code>, <code>hashCode</code> va <code>toString</code> avtomatik yaratiladi. <b>Sealed</b> klass yoki interfeys esa undan qaysi turlar meros olishini aniq sanab qo'yadi. Ikkalasi birgalikda yopiq, xavfsiz modellarni yaratishda kuchli.",
          },
          {
            type: "code",
            title: "Nuqtalar.java",
            code: String.raw`record Nuqta(int x, int y) {
    Nuqta {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Koordinalar manfiy bo'lmasin");
        }
    }

    int yigindi() {
        return x + y;
    }
}

public class Nuqtalar {
    public static void main(String[] args) {
        Nuqta a = new Nuqta(3, 4);
        Nuqta b = new Nuqta(3, 4);

        System.out.println(a);
        System.out.println(a.x());
        System.out.println(a.yigindi());
        System.out.println(a.equals(b));
        System.out.println(a.hashCode() == b.hashCode());

        try {
            new Nuqta(-1, 2);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
            output:
              "Nuqta[x=3, y=4]\n3\n7\ntrue\ntrue\nKoordinalar manfiy bo'lmasin",
          },
          {
            type: "note",
            variant: "warning",
            title: "Recordlarning chegaralari",
            html: "Record har doim final bo'ladi, undan meros olib bo'lmaydi. Komponentlar final, lekin ular ichidagi obyektlar o'zgarmas bo'lmasligi mumkin — masalan, record ichida <code>List</code> saqlansa, ro'yxatning o'zi o'zgarishi mumkin. Bunday holatda konstruktorda <code>List.copyOf()</code> qiling. Recordlarni JPA entity sifatida ishlatish tavsiya etilmaydi.",
          },
          {
            type: "code",
            title: "Yuzalar.java",
            code: String.raw`sealed interface Shakl permits Doira, Kvadrat {}

record Doira(double radius) implements Shakl {}
record Kvadrat(double tomon) implements Shakl {}

public class Yuzalar {
    static double yuza(Shakl s) {
        if (s instanceof Doira d) {
            return Math.round(Math.PI * d.radius() * d.radius() * 100) / 100.0;
        }
        if (s instanceof Kvadrat k) {
            return k.tomon() * k.tomon();
        }
        return 0;
    }

    public static void main(String[] args) {
        Shakl d = new Doira(2);
        Shakl k = new Kvadrat(3);
        System.out.println(yuza(d));
        System.out.println(yuza(k));
        System.out.println(d);
    }
}`,
            output: "12.57\n9.0\nDoira[radius=2.0]",
          },
          {
            type: "note",
            variant: "tip",
            title: "Pattern matching",
            html: "<code>if (s instanceof Doira d)</code> yozuvi Java 16 dan boshlab barqaror: tekshiruv bilan birga <code>d</code> o'zgaruvchisi yaratiladi, uni qayta cast qilish shart emas. Sealed ierarxiya bilan kompilyator barcha variantlar qamralganini tekshira oladi. Switch uchun pattern matching Java 17 da preview rejimida, shuning uchun undan ehtiyotkorlik bilan foydalaning.",
          },
        ],
        quiz: [
          {
            q: "record avtomatik nimalarni yaratadi?",
            options: ["Faqat toString", "Faqat getter va setter", "Konstruktor, aksessorlar, equals, hashCode va toString", "Faqat maydonlarni"],
            answer: 2,
            explain: "Record komponentlar uchun kanonik konstruktor, nomli aksessorlar va standart equals/hashCode/toString yaratiladi.",
          },
          {
            q: "sealed interfeys nimani cheklaydi?",
            options: ["Maydonlarning sonini", "Qaysi klasslar uni amalga oshirishi mumkinligini", "Metodlarning qaytish turini", "Faqat obyekt yaratish tezligini"],
            answer: 1,
            explain: "permits ro'yxati bilan sealed tur faqat sanab o'tilgan turlarga meros olishga ruxsat beradi.",
          },
          {
            q: "record komponentlarini keyinchalik o'zgartirish mumkinmi?",
            options: ["Yo'q, ular final va record o'zgarmas", "Ha, setter avtomatik yaratiladi", "Faqat int komponentlarni", "Faqat main metodida"],
            answer: 0,
            explain: "Record komponentlari final; ularni o'zgartirish uchun yangi record yaratish kerak.",
          },
        ],
      },
      {
        id: 18,
        title: "Generiklar: tur xavfsizligi",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Generiklar klass yoki metodni aniq bir turga bog'lamasdan yozish imkonini beradi. <code>Quti&lt;T&gt;</code> istalgan turdagi qiymatni saqlaydi, lekin ishlatishda tur aniq ko'rsatiladi. Bu kompilyatsiya vaqtida xatolarni ushlash va ortiqcha cast yozuvlaridan qutulish demakdir.",
          },
          {
            type: "code",
            title: "Qutilar.java",
            code: String.raw`class Quti<T> {
    private T qiymat;

    void qoy(T qiymat) {
        this.qiymat = qiymat;
    }

    T ol() {
        return qiymat;
    }
}

public class Qutilar {
    public static void main(String[] args) {
        Quti<String> matn = new Quti<>();
        matn.qoy("Salom");
        System.out.println(matn.ol().toUpperCase());

        Quti<Integer> son = new Quti<>();
        son.qoy(42);
        int natija = son.ol() + 8;
        System.out.println(natija);
    }
}`,
            output: "SALOM\n50",
          },
          {
            type: "note",
            variant: "info",
            title: "Type erasure",
            html: "Generic tur ma'lumoti kompilyatsiyadan keyin o'chiriladi (type erasure). Shu sababli <code>new T()</code> yoki <code>new T[10]</code> yozib bo'lmaydi, primitive turlar ham tur parametri bo'la olmaydi. <code>Quti&lt;int&gt;</code> o'rniga <code>Quti&lt;Integer&gt;</code> ishlatiladi. Afzallik runtime emas, kompilyatsiya vaqtidagi tekshiruvdadir.",
          },
          {
            type: "code",
            title: "Foydali.java",
            code: String.raw`import java.util.List;

public class Foydali {
    static <T extends Comparable<T>> T engKatta(List<T> qiymatlar) {
        T eng = qiymatlar.get(0);
        for (T q : qiymatlar) {
            if (q.compareTo(eng) > 0) eng = q;
        }
        return eng;
    }

    static double yigindi(List<? extends Number> sonlar) {
        double jami = 0;
        for (Number n : sonlar) jami += n.doubleValue();
        return jami;
    }

    public static void main(String[] args) {
        System.out.println(engKatta(List.of(4, 9, 2)));
        System.out.println(engKatta(List.of("Aziza", "Dilnoza", "Bek")));
        System.out.println(yigindi(List.of(4, 9, 2)));
        System.out.println(yigindi(List.of(1.5, 2.5)));
    }
}`,
            output: "9\nDilnoza\n15.0\n4.0",
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi"],
            rows: [
              ["<code>&lt;T&gt;</code>", "Tur parametri (type parameter)"],
              ["<code>&lt;T extends Number&gt;</code>", "Faqat Number va uning bolalari"],
              ["<code>List&lt;? extends Number&gt;</code>", "O'qish uchun mos, Number bolalarini qabul qiladi"],
              ["<code>List&lt;? super Integer&gt;</code>", "Yozish uchun mos, Integer ota turlarini qabul qiladi"],
              ["<code>Quti&lt;String&gt;</code>", "Aniq tur bilan ishlatish"],
            ],
          },
        ],
        quiz: [
          {
            q: "Quti<T> dagi T nimani bildiradi?",
            options: ["Faqat String turini", "Klass nomini", "Metod nomini", "Tur parametrini, ishlatishda aniq tur beriladi"],
            answer: 3,
            explain: "T — tur parametri. Quti<String> yoki Quti<Integer> bilan aniq tur beriladi va kompilyator tekshiradi.",
          },
          {
            q: "Faqat taqqoslanadigan turlar bilan ishlaydigan generik metod qanday cheklanadi?",
            options: ["<T extends Comparable<T>>", "<T super Comparable>", "<T implements Comparable>", "<T = Comparable>"],
            answer: 0,
            explain: "extends cheklovi T ning Comparable<T> ni amalga oshirishini talab qiladi.",
          },
          {
            q: "Genericlar primitive turlar bilan ishlaydimi?",
            options: ["Ha, int bevosita ishlatiladi", "Yo'q, wrapper turlar ishlatiladi", "Faqat char bilan", "Faqat massivlarda"],
            answer: 1,
            explain: "Type erasure sababli tur parametri reference tur bo'lishi kerak; int o'rniga Integer ishlatiladi.",
          },
        ],
      },
      {
        id: 19,
        title: "Kolleksiyalar chuqur: List va Set",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Kolleksiya — bir nechta obyektni saqlash uchun tayyor tuzilma. <code>List</code> tartibni saqlaydi va takroriy elementlarga ruxsat beradi. <code>Set</code> esa takrorlanmas qiymatlar to'plami. Amalga oshirishni tanlash tezlikka ta'sir qiladi: <code>ArrayList</code> indeks bo'yicha tez, <code>LinkedList</code> boshidan qo'shishda qulay, <code>TreeSet</code> doim saralangan.",
          },
          {
            type: "code",
            title: "Royxatlar.java",
            code: String.raw`import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class Royxatlar {
    public static void main(String[] args) {
        List<String> royxat = new ArrayList<>(List.of("olma", "banan", "olma"));
        royxat.add(1, "anor");

        Set<String> tartibli = new LinkedHashSet<>(royxat);
        Set<String> alifbo = new TreeSet<>(royxat);

        System.out.println(royxat);
        System.out.println(royxat.get(1));
        System.out.println(tartibli);
        System.out.println(alifbo);
        System.out.println(tartibli.size());
    }
}`,
            output:
              "[olma, anor, banan, olma]\nanor\n[olma, anor, banan]\n[anor, banan, olma]\n3",
          },
          {
            type: "table",
            head: ["Tuzilma", "Tartib", "Takror", "Asosiy afzalligi"],
            rows: [
              ["<code>ArrayList</code>", "Qo'shilish tartibi", "Ha", "Indeks bo'yicha tez o'qish"],
              ["<code>LinkedList</code>", "Qo'shilish tartibi", "Ha", "Boshdan/oxirdan tez qo'shish"],
              ["<code>HashSet</code>", "Kafolatlanmagan", "Yo'q", "Eng tez qidiruv"],
              ["<code>LinkedHashSet</code>", "Qo'shilish tartibi", "Yo'q", "Tartib + tez qidiruv"],
              ["<code>TreeSet</code>", "Saralangan", "Yo'q", "Doim tartiblangan to'plam"],
            ],
          },
          {
            type: "code",
            title: "Iteratorlar.java",
            code: String.raw`import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Iteratorlar {
    public static void main(String[] args) {
        List<Integer> sonlar = new ArrayList<>(List.of(1, 2, 3, 4, 5, 6));

        Iterator<Integer> it = sonlar.iterator();
        while (it.hasNext()) {
            if (it.next() % 2 == 0) {
                it.remove();
            }
        }
        System.out.println(sonlar);

        try {
            List.of("a", "b").add("c");
        } catch (UnsupportedOperationException e) {
            System.out.println("List.of o'zgarmas");
        }

        List<String> nusxa = List.copyOf(List.of("a", "b"));
        System.out.println(nusxa);
    }
}`,
            output: "[1, 3, 5]\nList.of o'zgarmas\n[a, b]",
          },
          {
            type: "note",
            variant: "warning",
            title: "Aylanib turib o'chirmang",
            html: "for-each ichida <code>royxat.remove(...)</code> chaqirilsa <code>ConcurrentModificationException</code> chiqadi. Xavfsiz usullar: <code>iterator.remove()</code> yoki <code>royxat.removeIf(shart)</code>. <code>List.of()</code> va <code>List.copyOf()</code> o'zgarmas ro'yxat qaytaradi; ularga qo'shish yoki o'chirish <code>UnsupportedOperationException</code> beradi.",
          },
        ],
        quiz: [
          {
            q: "Qaysi Set elementlarning qo'shilish tartibini saqlaydi?",
            options: ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
            answer: 1,
            explain: "LinkedHashSet qo'shilish tartibini saqlaydi; HashSet tartibni kafolatlamaydi, TreeSet saralaydi.",
          },
          {
            q: "List.of() qaytargan ro'yxatga element qo'shsak nima bo'ladi?",
            options: ["Element qo'shiladi", "Yangi ro'yxat yaratiladi", "Hech narsa bo'lmaydi", "UnsupportedOperationException chiqadi"],
            answer: 3,
            explain: "List.of() o'zgarmas ro'yxat qaytaradi; uni o'zgartirishga urinish UnsupportedOperationException beradi.",
          },
          {
            q: "ArrayList'da o'rtadan element o'chirishning murakkabligi qanday?",
            options: ["O(1)", "O(log n)", "O(n), keyingi elementlar siljiydi", "O(n²)"],
            answer: 2,
            explain: "O'chirilgandan keyin keyingi elementlar chapga siljiydi, shuning uchun vaqt elementlar soniga bog'liq.",
          },
        ],
      },
      {
        id: 20,
        title: "Map chuqur: kalitlar, qiymatlar va equals",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<code>Map</code> kalit va qiymat juftliklarini saqlaydi. Kalitlar takrorlanmaydi: bir xil kalit bilan qayta <code>put</code> qilinsa, eski qiymat almashtiriladi. <code>HashMap</code> eng tez variant, <code>TreeMap</code> kalitlarni saralaydi, <code>LinkedHashMap</code> qo'shilish tartibini eslab qoladi. Map'ni to'g'ri ishlatish uchun <code>equals</code> va <code>hashCode</code> qoidalarini bilish muhim.",
          },
          {
            type: "code",
            title: "Savat.java",
            code: String.raw`import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Savat {
    public static void main(String[] args) {
        Map<String, Integer> savat = new HashMap<>();
        savat.put("olma", 2);
        savat.merge("olma", 3, Integer::sum);
        savat.putIfAbsent("banan", 1);
        savat.computeIfAbsent("anor", kalit -> 0);

        System.out.println(savat.get("olma"));
        System.out.println(savat.getOrDefault("uzum", 0));
        System.out.println(savat.size());

        Map<String, Integer> tartibli = new TreeMap<>(savat);
        System.out.println(tartibli);
        System.out.println(tartibli.firstKey());
    }
}`,
            output: "5\n0\n3\n{anor=0, banan=1, olma=5}\nanor",
          },
          {
            type: "note",
            variant: "tip",
            title: "Map'dagi qulay metodlar",
            html: "<code>putIfAbsent</code> kalit bo'lmasa qo'shadi. <code>merge</code> mavjud qiymatni funksiya bilan yangilaydi. <code>computeIfAbsent</code> kerak bo'lganda qiymat yaratadi — ro'yxatlar bilan ishlashda juda foydali. <code>getOrDefault</code> esa yo'q kalit uchun xavfsiz standart qiymat qaytaradi. <code>null</code> qiymat qaytargan Map bilan ehtiyot bo'ling.",
          },
          {
            type: "code",
            title: "Talabalar.java",
            code: String.raw`import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

class Talaba {
    private final String ism;
    private final int yosh;

    Talaba(String ism, int yosh) {
        this.ism = ism;
        this.yosh = yosh;
    }

    @Override
    public boolean equals(Object boshqa) {
        if (this == boshqa) return true;
        if (!(boshqa instanceof Talaba t)) return false;
        return yosh == t.yosh && Objects.equals(ism, t.ism);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ism, yosh);
    }
}

public class Talabalar {
    public static void main(String[] args) {
        Set<Talaba> toplam = new HashSet<>();
        toplam.add(new Talaba("Aziza", 16));
        toplam.add(new Talaba("Aziza", 16));
        toplam.add(new Talaba("Bek", 17));

        System.out.println(toplam.size());
        System.out.println(toplam.contains(new Talaba("Bek", 17)));
    }
}`,
            output: "2\ntrue",
          },
          {
            type: "note",
            variant: "warning",
            title: "equals va hashCode shartnomasi",
            html: "Agar ikki obyekt <code>equals</code> bo'yicha teng bo'lsa, ularning <code>hashCode</code> qiymati ham teng bo'lishi shart. Aks holda <code>HashSet</code> va <code>HashMap</code> ularni topa olmaydi. <code>equals</code> yozganda <code>hashCode</code> ni ham yozing. Kalit sifatida ishlatiladigan obyekt o'zgarmas bo'lishi kerak, aks holda hash o'zgarib, yozuv yo'qoladi.",
          },
        ],
        quiz: [
          {
            q: "HashMap kalitlari qanday tartibda saqlanadi?",
            options: ["Kafolatlangan tartib yo'q", "Har doim alifbo tartibida", "Qo'shilish tartibida", "Teskari tartibda"],
            answer: 0,
            explain: "HashMap ichki hash jadvali tartibini kafolatlamaydi. Tartib kerak bo'lsa LinkedHashMap yoki TreeMap ishlatiladi.",
          },
          {
            q: "Mavjud bo'lmagan kalit uchun standart qiymat olishda qaysi metod qulay?",
            options: ["put()", "remove()", "getOrDefault()", "containsValue()"],
            answer: 2,
            explain: "getOrDefault(kalit, standart) kalit bo'lsa qiymatni, bo'lmasa standart qiymatni qaytaradi.",
          },
          {
            q: "equals() true bo'lsa, hashCode() haqida nima to'g'ri?",
            options: ["Har xil bo'lishi mumkin", "Bir xil bo'lishi shart", "Faqat String uchun bir xil", "hashCode umuman chaqirilmaydi"],
            answer: 1,
            explain: "Teng obyektlarning hash kodi teng bo'lishi shart; aks holda hash kolleksiyalari ularni topa olmaydi.",
          },
        ],
      },
      {
        id: 21,
        title: "Comparable, Comparator va saralash",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Saralash uchun obyektlar o'zaro qanday taqqoslanishini bilish kerak. <code>Comparable</code> — klassning o'zida belgilangan <b>tabiiy tartib</b>. <code>Comparator</code> — tashqaridan beriladigan alohida taqqoslash qoidasi. Bir nechta mezon bo'lsa <code>thenComparing</code> yordam beradi. <code>Collections.sort</code> va <code>List.sort</code> shu qoidalarga tayanadi.",
          },
          {
            type: "code",
            title: "Tabiiy.java",
            code: String.raw`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

record Talaba(String ism, int ball) implements Comparable<Talaba> {
    @Override
    public int compareTo(Talaba boshqa) {
        int natija = Integer.compare(ball, boshqa.ball);
        return natija != 0 ? natija : ism.compareTo(boshqa.ism);
    }
}

public class Tabiiy {
    public static void main(String[] args) {
        List<Talaba> royxat = new ArrayList<>(List.of(
            new Talaba("Bek", 78),
            new Talaba("Aziza", 92),
            new Talaba("Dilnoza", 88)
        ));

        Collections.sort(royxat);
        royxat.forEach(t -> System.out.println(t.ism() + ": " + t.ball()));
        System.out.println(Collections.binarySearch(royxat, new Talaba("Aziza", 92)));
    }
}`,
            output: "Bek: 78\nDilnoza: 88\nAziza: 92\n2",
          },
          {
            type: "note",
            variant: "info",
            title: "compareTo shartnomasi",
            html: "<code>compareTo</code> manfiy son qaytarsa joriy obyekt kichik, nol teng, musbat son katta hisoblanadi. Tartib <b>izchil</b> bo'lishi kerak: agar <code>a &lt; b</code> va <code>b &lt; c</code> bo'lsa, <code>a &lt; c</code> ham bo'lishi shart. <code>equals</code> bilan moslik ham muhim: <code>compareTo == 0</code> ko'p hollarda <code>equals</code> true bo'lishini bildirishi kerak, aks holda <code>TreeSet</code> kutilmagan natija beradi.",
          },
          {
            type: "code",
            title: "Saralash.java",
            code: String.raw`import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Saralash {
    static void chiqar(List<String> royxat) {
        System.out.println(String.join(", ", royxat));
    }

    public static void main(String[] args) {
        List<Talaba> talabalar = new ArrayList<>(List.of(
            new Talaba("Bek", 78),
            new Talaba("Aziza", 92),
            new Talaba("Jasur", 88),
            new Talaba("Dilnoza", 88)
        ));

        talabalar.sort(Comparator.comparingInt(Talaba::ball).reversed()
            .thenComparing(Talaba::ism));

        List<String> ismlar = new ArrayList<>();
        for (Talaba t : talabalar) ismlar.add(t.ism());
        chiqar(ismlar);

        List<String> alifbo = new ArrayList<>(ismlar);
        alifbo.sort(Comparator.naturalOrder());
        chiqar(alifbo);
    }
}`,
            output: "Aziza, Dilnoza, Jasur, Bek\nAziza, Bek, Dilnoza, Jasur",
          },
          {
            type: "table",
            head: ["Vosita", "Qayerda", "Mos holat"],
            rows: [
              ["<code>Comparable</code>", "Klass ichida", "Bitta tabiiy tartib"],
              ["<code>Comparator</code>", "Tashqarida", "Bir nechta turli tartiblar"],
              ["<code>comparingInt</code>", "Comparator", "Sonli maydon bo'yicha"],
              ["<code>thenComparing</code>", "Comparator", "Qo'shimcha mezon"],
              ["<code>binarySearch</code>", "Collections", "Faqat saralangan ro'yxatda"],
            ],
          },
        ],
        quiz: [
          {
            q: "Comparable interfeysi qaysi metodni talab qiladi?",
            options: ["equals", "hashCode", "compare", "compareTo"],
            answer: 3,
            explain: "Comparable<T> compareTo(T) metodini talab qiladi; u tabiiy tartibni belgilaydi.",
          },
          {
            q: "Bir nechta mezon bo'yicha saralash uchun qaysi metod qulay?",
            options: ["thenComparing()", "thenApply()", "andThen()", "compareTo()"],
            answer: 0,
            explain: "Comparator.thenComparing() birinchi mezon teng bo'lganda ikkinchi mezonga o'tadi.",
          },
          {
            q: "Comparator.comparingInt(...).reversed() qanday tartib beradi?",
            options: ["Kamayish tartibini", "O'sish tartibini", "Tasodifiy tartibni", "Faqat teng elementlarni"],
            answer: 0,
            explain: "comparingInt o'sish tartibini beradi; reversed() uni teskari, ya'ni kamayish tartibiga aylantiradi.",
          },
        ],
      },
      {
        id: 22,
        title: "Lambda ifodalar va funksional interfeyslar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Lambda — qisqa, nomi yo'q funksiya: <code>(a, b) -&gt; a + b</code>. U bitta abstrakt metodi bo'lgan interfeysni amalga oshiradi. Bunday interfeyslar <b>funksional interfeys</b> deyiladi: <code>Function</code>, <code>Predicate</code>, <code>Consumer</code>, <code>Supplier</code>. Lambda kodni qisqartiradi, ayniqsa kolleksiyalar va streamlar bilan ishlashda.",
          },
          {
            type: "code",
            title: "Funksiyalar.java",
            code: String.raw`import java.util.function.BiFunction;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class Funksiyalar {
    public static void main(String[] args) {
        Function<Integer, Integer> kvadrat = n -> n * n;
        Predicate<String> uzun = s -> s.length() > 4;
        BiFunction<Integer, Integer, Integer> qosh = Integer::sum;
        Consumer<String> chop = s -> System.out.println(">> " + s);

        System.out.println(kvadrat.apply(6));
        System.out.println(uzun.test("Java"));
        System.out.println(uzun.test("Noldan"));
        System.out.println(qosh.apply(3, 4));
        chop.accept("salom");
    }
}`,
            output: "36\nfalse\ntrue\n7\n>> salom",
          },
          {
            type: "table",
            head: ["Interfeys", "Kirish", "Natija", "Misol"],
            rows: [
              ["<code>Function&lt;T,R&gt;</code>", "T", "R", "<code>n -&gt; n * 2</code>"],
              ["<code>Predicate&lt;T&gt;</code>", "T", "boolean", "<code>s -&gt; s.isEmpty()</code>"],
              ["<code>Consumer&lt;T&gt;</code>", "T", "yo'q", "<code>s -&gt; print(s)</code>"],
              ["<code>Supplier&lt;T&gt;</code>", "yo'q", "T", "<code>() -&gt; \"salom\"</code>"],
              ["<code>BiFunction&lt;T,U,R&gt;</code>", "T, U", "R", "<code>(a, b) -&gt; a + b</code>"],
            ],
          },
          {
            type: "code",
            title: "Salomlashuv.java",
            code: String.raw`import java.util.function.Predicate;

interface Salomlash {
    String salom(String ism);
}

class Xabar {
    static String shakl(String ism) {
        return "Salom, " + ism + "!";
    }
}

public class Salomlashuv {
    public static void main(String[] args) {
        Salomlash s1 = ism -> "Salom, " + ism + "!";
        Salomlash s2 = Xabar::shakl;

        System.out.println(s1.salom("Aziza"));
        System.out.println(s2.salom("Bek"));

        int chegara = 5;
        Predicate<String> yetarli = matn -> matn.length() >= chegara;
        System.out.println(yetarli.test("Noldan"));
        System.out.println(yetarli.test("Java"));
    }
}`,
            output: "Salom, Aziza!\nSalom, Bek!\ntrue\nfalse",
          },
          {
            type: "note",
            variant: "tip",
            title: "Amalda o'zgarmas va metod havolasi",
            html: "Lambda tashqaridagi lokal o'zgaruvchini ishlatsa, u <code>final</code> yoki amalda o'zgarmas bo'lishi kerak — shuning uchun <code>chegara</code> ga keyin qiymat bermaymiz. <code>Xabar::shakl</code> — metod havolasi; u <code>ism -&gt; Xabar.shakl(ism)</code> ning qisqa ko'rinishi. <code>this</code> lambda ichida tashqi obyektni bildiradi, alohida lambda obyektini emas.",
          },
        ],
        quiz: [
          {
            q: "Lambda qaysi interfeysga mos keladi?",
            options: ["Istalgan interfeysga", "Faqat abstrakt klassga", "Bitta abstrakt metodi bo'lgan funksional interfeysga", "Faqat Serializable'ga"],
            answer: 2,
            explain: "Funksional interfeysda aynan bitta abstrakt metod bo'ladi; lambda shu metodning bajarilishini beradi.",
          },
          {
            q: "Integer::sum qanday yozuv hisoblanadi?",
            options: ["Metod havolasi", "Konstruktor chaqiruvi", "Anonim klass", "Cast operatori"],
            answer: 0,
            explain: "Ikki nuqta bilan yozilgan metod havolasi mavjud metodni funksional interfeysga bog'laydi.",
          },
          {
            q: "Lambda ichida tashqi lokal o'zgaruvchini ishlatish sharti nima?",
            options: ["U static bo'lishi kerak", "U int turida bo'lishi kerak", "U har chaqiruvda o'zgarishi kerak", "U final yoki amalda o'zgarmas bo'lishi kerak"],
            answer: 3,
            explain: "Lambda tashqi lokal o'zgaruvchini nusxalaydi; shuning uchun u effectively final bo'lishi shart.",
          },
        ],
      },
      {
        id: 23,
        title: "Stream API: filter, map va reduce",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Stream — kolleksiya elementlarini ketma-ket qayta ishlash uchun oqim. U uch qismdan iborat: manba (<code>list.stream()</code>), oraliq amallar (<code>filter</code>, <code>map</code>, <code>sorted</code>) va terminal amal (<code>toList</code>, <code>count</code>, <code>sum</code>). Oraliq amallar dangasa: terminal amal chaqirilmaguncha hech narsa bajarilmaydi.",
          },
          {
            type: "code",
            title: "Oqim.java",
            code: String.raw`import java.util.List;

public class Oqim {
    public static void main(String[] args) {
        List<Integer> sonlar = List.of(5, 12, 7, 20, 3, 8);

        List<Integer> natija = sonlar.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * 2)
            .sorted()
            .toList();

        long katta = sonlar.stream()
            .filter(n -> n > 10)
            .count();

        System.out.println(natija);
        System.out.println(katta);
    }
}`,
            output: "[16, 24, 40]\n2",
          },
          {
            type: "table",
            head: ["Bosqich", "Misollar", "Natija"],
            rows: [
              ["Manba", "<code>stream()</code>, <code>IntStream.range</code>", "Stream yaratadi"],
              ["Oraliq", "<code>filter</code>, <code>map</code>, <code>sorted</code>, <code>distinct</code>", "Yangi stream qaytaradi"],
              ["Terminal", "<code>toList</code>, <code>count</code>, <code>sum</code>, <code>forEach</code>", "Qiymat qaytaradi yoki ishni tugatadi"],
            ],
          },
          {
            type: "code",
            title: "Sonlar.java",
            code: String.raw`import java.util.List;
import java.util.stream.IntStream;

public class Sonlar {
    public static void main(String[] args) {
        List<String> ismlar = List.of("Aziza", "Bek", "Dilnoza", "Jasur");

        int jami = ismlar.stream()
            .mapToInt(String::length)
            .sum();

        System.out.println(jami);
        System.out.println(ismlar.stream().anyMatch(s -> s.startsWith("D")));
        System.out.println(IntStream.rangeClosed(1, 4).sum());

        ismlar.stream()
            .filter(s -> s.length() > 5)
            .findFirst()
            .ifPresent(System.out::println);
    }
}`,
            output: "20\ntrue\n10\nDilnoza",
          },
          {
            type: "note",
            variant: "warning",
            title: "Stream'dan qayta foydalanib bo'lmaydi",
            html: "Bitta stream faqat bir marta ishlatiladi; terminal amaldan keyin u yopiladi. Manba kolleksiyasi o'zgarmaydi: <code>filter</code> yangi oqim yaratadi, asl ro'yxatni o'zgartirmaydi. <code>forEach</code> faqat yon ta'sir uchun, natija yig'ish uchun esa <code>collect</code> yoki <code>toList</code> ishlatiladi. Streamlar juda katta ma'lumotlarda ham qulay, lekin har bir kichik tsikl uchun majburiy emas.",
          },
        ],
        quiz: [
          {
            q: "filter() qanday amal hisoblanadi?",
            options: ["Terminal amal", "Oraliq amal, shartga mos elementlarni o'tkazadi", "Kolleksiyani to'liq o'zgartiradi", "Faqat sonlar uchun ishlaydi"],
            answer: 1,
            explain: "filter oraliq amal: u yangi stream qaytaradi va faqat shart true bo'lgan elementlarni qoldiradi.",
          },
          {
            q: "Stream natijasini ro'yxatga yig'ish uchun Java 16+ da qaysi metod ishlatiladi?",
            options: ["collect()", "forEach()", "toList()", "count()"],
            answer: 2,
            explain: "stream.toList() qulay o'zgarmas ro'yxat qaytaradi. collect(Collectors.toList()) ham ishlaydi.",
          },
          {
            q: "Bitta stream obyektini ikki marta ishlatish mumkinmi?",
            options: ["Yo'q, u bir marta ishlatiladi", "Ha, cheksiz marta", "Faqat sonlar uchun", "Faqat parallel rejimda"],
            answer: 0,
            explain: "Terminal amaldan keyin stream yopiladi. Qayta ishlash uchun manbadan yangi stream olish kerak.",
          },
        ],
      },
      {
        id: 24,
        title: "Stream: collect, groupingBy va flatMap",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Stream'ning kuchli tomoni — murakkab hisobotlarni bir necha qatorda yig'ish. <code>Collectors</code> yordamida guruhlash, sanash, matnga birlashtirish va ikki hisobni bir vaqtda bajarish mumkin. <code>flatMap</code> esa ichma-ich kolleksiyalarni bitta tekis oqimga aylantiradi.",
          },
          {
            type: "code",
            title: "Guruhlash.java",
            code: String.raw`import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class Guruhlash {
    public static void main(String[] args) {
        List<String> ismlar = List.of("Aziza", "Ali", "Bek", "Bobur", "Dilnoza");

        Map<Character, List<String>> guruh = ismlar.stream()
            .collect(Collectors.groupingBy(
                ism -> ism.charAt(0),
                TreeMap::new,
                Collectors.toList()));

        Map<Character, Long> soni = ismlar.stream()
            .collect(Collectors.groupingBy(
                ism -> ism.charAt(0),
                TreeMap::new,
                Collectors.counting()));

        String matn = ismlar.stream().collect(Collectors.joining(", "));

        System.out.println(guruh);
        System.out.println(soni);
        System.out.println(matn);
    }
}`,
            output:
              "{A=[Aziza, Ali], B=[Bek, Bobur], D=[Dilnoza]}\n{A=2, B=2, D=1}\nAziza, Ali, Bek, Bobur, Dilnoza",
          },
          {
            type: "note",
            variant: "info",
            title: "Nega TreeMap?",
            html: "Standart <code>groupingBy</code> HashMap qaytaradi va uning kalit tartibi kafolatlanmaydi. Hisobotda barqaror tartib kerak bo'lsa <code>TreeMap::new</code> qo'shiladi: kalitlar alifbo bo'yicha saralanadi. <code>Collectors.joining</code> esa elementlarni ajratgich bilan bitta matnga birlashtiradi.",
          },
          {
            type: "code",
            title: "Taqsimlash.java",
            code: String.raw`import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Taqsimlash {
    public static void main(String[] args) {
        List<List<Integer>> data = List.of(List.of(1, 2), List.of(3, 4));
        List<Integer> tekis = data.stream()
            .flatMap(List::stream)
            .toList();
        System.out.println(tekis);

        Map<Boolean, List<Integer>> juft = IntStream.rangeClosed(1, 6)
            .boxed()
            .collect(Collectors.partitioningBy(n -> n % 2 == 0));
        System.out.println(juft.get(true));
        System.out.println(juft.get(false));

        String natija = IntStream.rangeClosed(1, 4)
            .boxed()
            .collect(Collectors.teeing(
                Collectors.counting(),
                Collectors.summingInt(n -> n),
                (son, yigindi) -> son + " ta, yig'indi " + yigindi));
        System.out.println(natija);
    }
}`,
            output: "[1, 2, 3, 4]\n[2, 4, 6]\n[1, 3, 5]\n4 ta, yig'indi 10",
          },
          {
            type: "table",
            head: ["Collector", "Vazifasi"],
            rows: [
              ["<code>toList()</code>", "Ro'yxatga yig'adi"],
              ["<code>counting()</code>", "Elementlar sonini sanaydi"],
              ["<code>joining()</code>", "Matnga birlashtiradi"],
              ["<code>summingInt()</code>", "Butun sonlar yig'indisini hisoblaydi"],
              ["<code>groupingBy()</code>", "Kalit bo'yicha guruhlaydi"],
              ["<code>partitioningBy()</code>", "true/false bo'yicha ikkiga bo'ladi"],
            ],
          },
        ],
        quiz: [
          {
            q: "groupingBy() natijasi qanday turda bo'ladi?",
            options: ["List", "Set", "Stream", "Map"],
            answer: 3,
            explain: "groupingBy kalit va guruhlar ro'yxatini saqlovchi Map qaytaradi.",
          },
          {
            q: "flatMap() nimani tekislaydi?",
            options: ["Ichma-ich kolleksiyalarni bitta oqimga", "Faqat sonlarni", "Map kalitlarini", "Fayl yo'llarini"],
            answer: 0,
            explain: "flatMap har bir elementdan oqim olib, ularning barchasini bitta tekis oqimga birlashtiradi.",
          },
          {
            q: "partitioningBy() qaysi kalitlarni beradi?",
            options: ["1 va 0", "A va B", "true va false", "Boshlanish va oxiri"],
            answer: 2,
            explain: "partitioningBy shart natijasiga qarab Map<Boolean, ...> qaytaradi, kalitlari true va false.",
          },
        ],
      },
      {
        id: 25,
        title: "Optional: null bilan xavfsiz ishlash",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>null</code> qiymat qaytarish xatolarga olib keladi: uni unutib <code>NullPointerException</code> olish oson. <code>Optional</code> qiymat bor-yo'qligini ochiq bildiradi va uni xavfsiz qayta ishlash metodlarini beradi. Optional qiymat qaytaradigan metodlar uchun yaxshi, lekin maydon va parametrlar uchun emas.",
          },
          {
            type: "code",
            title: "Topish.java",
            code: String.raw`import java.util.List;
import java.util.Optional;

record Talaba(String ism, int ball) {}

public class Topish {
    static Optional<Talaba> izla(List<Talaba> royxat, String ism) {
        return royxat.stream()
            .filter(t -> t.ism().equalsIgnoreCase(ism))
            .findFirst();
    }

    public static void main(String[] args) {
        List<Talaba> royxat = List.of(
            new Talaba("Aziza", 92),
            new Talaba("Bek", 78)
        );

        System.out.println(izla(royxat, "aziza").map(Talaba::ball).orElse(0));
        System.out.println(izla(royxat, "Noma'lum").map(Talaba::ball).orElse(0));
        izla(royxat, "Bek").ifPresent(t -> System.out.println("Topildi: " + t.ism()));
        System.out.println(izla(royxat, "Bek").filter(t -> t.ball() >= 80).isPresent());
    }
}`,
            output: "92\n0\nTopildi: Bek\nfalse",
          },
          {
            type: "table",
            head: ["Metod", "Vazifasi"],
            rows: [
              ["<code>Optional.of(x)</code>", "x null bo'lmasa Optional yaratadi, aks holda NPE"],
              ["<code>Optional.ofNullable(x)</code>", "x null bo'lsa empty qaytaradi"],
              ["<code>map()</code>", "Qiymat bo'lsa aylantiradi"],
              ["<code>orElse()</code>", "Bo'sh bo'lsa standart qiymat beradi"],
              ["<code>orElseThrow()</code>", "Bo'sh bo'lsa istisno tashlaydi"],
              ["<code>ifPresent()</code>", "Qiymat bo'lsa amal bajaradi"],
            ],
          },
          {
            type: "code",
            title: "Xavfsiz.java",
            code: String.raw`import java.util.Optional;

public class Xavfsiz {
    public static void main(String[] args) {
        Optional<String> bosh = Optional.empty();
        System.out.println(bosh.orElse("standart"));

        String qiymat = Optional.ofNullable(System.getProperty("noldan.yoq"))
            .map(String::toUpperCase)
            .orElse("qiymat yo'q");
        System.out.println(qiymat);

        try {
            Optional.of(null);
        } catch (NullPointerException e) {
            System.out.println("of(null) xato beradi");
        }

        System.out.println(Optional.of("42").map(Integer::parseInt).orElseThrow());
    }
}`,
            output: "standart\nqiymat yo'q\nof(null) xato beradi\n42",
          },
          {
            type: "note",
            variant: "warning",
            title: "Optional'ni suiiste'mol qilmang",
            html: "Optional maydon sifatida saqlanmaydi va parametrga berilmaydi: u faqat natija yo'qligi mumkinligini bildirish uchun. <code>optional.get()</code> ni tekshiruvsiz chaqirmang; <code>orElseThrow</code>, <code>map</code> yoki <code>ifPresent</code> dan foydalaning. Optional o'zi null bo'lmasligi kerak, shuning uchun uni qaytarishdan oldin hech qachon <code>null</code> qaytarmang.",
          },
        ],
        quiz: [
          {
            q: "Optional.of(null) nima qiladi?",
            options: ["NullPointerException tashlaydi", "Optional.empty qaytaradi", "null qiymat saqlaydi", "IllegalArgumentException beradi"],
            answer: 0,
            explain: "Optional.of null qiymatni qabul qilmaydi va darhol NullPointerException tashlaydi. null uchun ofNullable ishlatiladi.",
          },
          {
            q: "Qiymat bo'lmasa standart qiymat qaytarish uchun qaysi metod ishlatiladi?",
            options: ["get()", "orElse()", "map()", "filter()"],
            answer: 1,
            explain: "orElse(standart) Optional bo'sh bo'lsa standart qiymatni, aks holda mavjud qiymatni qaytaradi.",
          },
          {
            q: "Optional bo'sh bo'lsa va qiymat majburiy bo'lsa, eng yaxshi yondashuv qaysi?",
            options: ["get() chaqirish", "null qaytarish", "Optional'ni maydonga saqlash", "orElseThrow bilan aniq istisno tashlash"],
            answer: 3,
            explain: "orElseThrow xatoni aniq va tushunarli qiladi, yashirin null oqibatlaridan saqlaydi.",
          },
        ],
      },
      {
        id: 26,
        title: "Istisnolar chuqur: checked, custom va resurslar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Java istisnolari ikki guruhga bo'linadi: <b>checked</b> — kompilyator ushlashni yoki <code>throws</code> bilan e'lon qilishni talab qiladi; <b>unchecked</b> — <code>RuntimeException</code> avlodlari, ularni ushlash majburiy emas. O'z xatolaringiz uchun aniq nomli istisno yaratish kodni tushunarli qiladi. Resurslar esa <code>try-with-resources</code> bilan ishonchli yopiladi.",
          },
          {
            type: "code",
            title: "Bank.java",
            code: String.raw`class YetarliEmasException extends Exception {
    YetarliEmasException(String xabar) {
        super(xabar);
    }
}

public class Bank {
    static void yechish(int balans, int summa) throws YetarliEmasException {
        if (summa > balans) {
            throw new YetarliEmasException("Balans yetarli emas: " + balans);
        }
        System.out.println("Yechildi: " + summa);
    }

    public static void main(String[] args) {
        try {
            yechish(100, 40);
            yechish(100, 150);
        } catch (YetarliEmasException e) {
            System.out.println("Xato: " + e.getMessage());
        }
    }
}`,
            output: "Yechildi: 40\nXato: Balans yetarli emas: 100",
          },
          {
            type: "table",
            head: ["Turkum", "Misol", "Kompilyator talabi"],
            rows: [
              ["Checked", "<code>IOException</code>, <code>SQLException</code>", "catch yoki throws majburiy"],
              ["Unchecked", "<code>NullPointerException</code>, <code>IllegalArgumentException</code>", "Majburiy emas"],
              ["Error", "<code>OutOfMemoryError</code>, <code>StackOverflowError</code>", "Odatda ushlanmaydi"],
              ["Custom checked", "O'z <code>Exception</code> avlodi", "catch yoki throws"],
              ["Custom unchecked", "O'z <code>RuntimeException</code> avlodi", "Majburiy emas"],
            ],
          },
          {
            type: "code",
            title: "Resurslar.java",
            code: String.raw`class Resurs implements AutoCloseable {
    private final String nom;

    Resurs(String nom) {
        this.nom = nom;
        System.out.println("ochildi: " + nom);
    }

    @Override
    public void close() {
        System.out.println("yopildi: " + nom);
    }
}

public class Resurslar {
    public static void main(String[] args) {
        try (Resurs a = new Resurs("fayl");
             Resurs b = new Resurs("baza")) {
            System.out.println("ish bajarildi");
        }

        try {
            Integer.parseInt("12a");
        } catch (NumberFormatException | ArithmeticException e) {
            System.out.println("son xatosi: " + e.getClass().getSimpleName());
        }
    }
}`,
            output:
              "ochildi: fayl\nochildi: baza\nish bajarildi\nyopildi: baza\nyopildi: fayl\nson xatosi: NumberFormatException",
          },
          {
            type: "note",
            variant: "tip",
            title: "Xatoni kontekst bilan qayta tashlang",
            html: "Pastki qatlam xatosini yuqoriga uzatishda mazmunli xabar qo'shing: <code>throw new IllegalStateException(\"Faylni o'qishda xato: \" + path, e)</code>. Asl istisno <b>cause</b> sifatida saqlanadi va stack trace'da ko'rinadi. Bo'sh <code>catch</code> yozmang: xato jimgina yo'qoladi. Bir nechta istisnoni ushlaganda avval aniqroq (bola) turini yozing, keyin umumiyroq turini.",
          },
        ],
        quiz: [
          {
            q: "Checked istisno uchun kompilyator nimani talab qiladi?",
            options: ["Faqat print qilishni", "Hech narsani", "Uni ushlash yoki throws bilan e'lon qilishni", "Faqat main metodida ishlatishni"],
            answer: 2,
            explain: "Checked istisnolar kompilyatsiya vaqtida tekshiriladi: ularni catch qilish yoki metod imzosida throws bilan ko'rsatish shart.",
          },
          {
            q: "try-with-resources resurslarni qanday yopadi?",
            options: ["Faqat xato bo'lganda", "E'lon qilingan tartibda", "Faqat qo'lda close chaqirilganda", "Teskari tartibda, avtomatik"],
            answer: 3,
            explain: "Resurslar ochilish tartibiga teskari yopiladi; close xato bersa ham qolganlari yopilishga harakat qilinadi.",
          },
          {
            q: "IOException qaysi turkumga kiradi?",
            options: ["Unchecked", "Checked", "Error", "Warning"],
            answer: 1,
            explain: "IOException checked istisno: fayl va tarmoq amallarida uni ushlash yoki throws qilish kerak.",
          },
        ],
      },
      {
        id: 27,
        title: "Fayllar: java.nio.file bilan ishlash",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Zamonaviy Java'da fayllar <code>java.nio.file</code> paketi orqali boshqariladi. <code>Path</code> yo'lni ifodalaydi, <code>Files</code> esa o'qish, yozish, nusxalash va papkalar bo'ylab yurish metodlarini beradi. Eski <code>File</code> klassiga qaraganda NIO aniqroq xatolar va qulay API taqdim etadi.",
          },
          {
            type: "code",
            title: "Fayllar.java",
            code: String.raw`import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

public class Fayllar {
    public static void main(String[] args) throws IOException {
        Path papka = Path.of("noldan");
        Path fayl = papka.resolve("eslatma.txt");

        Files.createDirectories(papka);
        Files.writeString(fayl, "birinchi\nikkinchi\n", StandardCharsets.UTF_8);
        Files.writeString(fayl, "uchinchi\n", StandardCharsets.UTF_8,
            StandardOpenOption.APPEND);

        System.out.println(Files.readAllLines(fayl).size());
        System.out.print(Files.readString(fayl));
        System.out.println(Files.size(fayl) > 0);
    }
}`,
            output: "3\nbirinchi\nikkinchi\nuchinchi\ntrue",
          },
          {
            type: "table",
            head: ["Metod", "Vazifasi"],
            rows: [
              ["<code>Files.readString</code>", "Faylni bitta matn sifatida o'qiydi"],
              ["<code>Files.readAllLines</code>", "Qatorlar ro'yxatini qaytaradi"],
              ["<code>Files.writeString</code>", "Matnni yozadi yoki qo'shadi"],
              ["<code>Files.copy</code>", "Faylni nusxalaydi"],
              ["<code>Files.move</code>", "Faylni ko'chiradi yoki nomlaydi"],
              ["<code>Files.deleteIfExists</code>", "Fayl bo'lsa o'chiradi"],
            ],
          },
          {
            type: "code",
            title: "Daraxt.java",
            code: String.raw`import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

public class Daraxt {
    public static void main(String[] args) throws IOException {
        Path ildiz = Path.of("loyiha");
        Files.createDirectories(ildiz.resolve("src"));
        Files.writeString(ildiz.resolve("src").resolve("App.java"), "class App {}");
        Files.writeString(ildiz.resolve("README.md"), "# Loyiha");

        try (Stream<Path> oqim = Files.walk(ildiz)) {
            oqim.filter(Files::isRegularFile)
                .map(p -> p.getFileName().toString())
                .sorted()
                .forEach(System.out::println);
        }

        try (Stream<Path> oqim = Files.walk(ildiz)) {
            long javaFayllar = oqim
                .filter(p -> p.toString().endsWith(".java"))
                .count();
            System.out.println("Java fayllar: " + javaFayllar);
        }
    }
}`,
            output: "App.java\nREADME.md\nJava fayllar: 1",
          },
          {
            type: "note",
            variant: "warning",
            title: "Resurs va yo'l xavfsizligi",
            html: "<code>Files.walk</code> va <code>Files.list</code> oqimlari ham yopilishi kerak, shuning uchun ularni <code>try-with-resources</code> ichida ishlating. <code>Path.resolve</code> yo'lni xavfsiz birlashtiradi; foydalanuvchi kiritgan yo'l bilan ishlashda <code>..</code> orqali papkadan chiqib ketishning oldini oling. Testlarda vaqtinchalik fayl uchun <code>Files.createTempFile</code> ishlatilsa, tizim tozalash oson bo'ladi.",
          },
        ],
        quiz: [
          {
            q: "Faylni butun matn sifatida o'qish uchun qaysi metod ishlatiladi?",
            options: ["Files.open()", "Files.readString()", "Files.load()", "Files.readAllBytes() faqat"],
            answer: 1,
            explain: "Files.readString(Path) fayl mazmunini belgilangan charset bo'yicha bitta String sifatida qaytaradi.",
          },
          {
            q: "Ota papkalari bilan birga papka yaratish uchun qaysi metod qulay?",
            options: ["Files.createDirectories()", "Files.createFile()", "Files.copy()", "Files.walk()"],
            answer: 0,
            explain: "createDirectories yo'ldagi barcha yetishmayotgan papkalarni yaratadi; createDirectory faqat bittasini yaratadi.",
          },
          {
            q: "Files.walk() nima qaytaradi?",
            options: ["Bitta String", "Map", "byte massivini", "Path obyektlari oqimini (Stream<Path>)"],
            answer: 3,
            explain: "Files.walk papka daraxti bo'ylab yuradigan Stream<Path> qaytaradi; oqimni yopish kerak.",
          },
        ],
      },
      {
        id: 28,
        title: "Sana va vaqt: java.time",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Eski <code>Date</code> va <code>Calendar</code> klasslari chalkash va o'zgaruvchan edi. Java 8 dan boshlab <code>java.time</code> paketi ishlatiladi: <code>LocalDate</code> sana, <code>LocalTime</code> vaqt, <code>LocalDateTime</code> ikkalasi, <code>ZonedDateTime</code> vaqt zonasi bilan. Bu obyektlar <b>o'zgarmas</b>: har bir amal yangi qiymat qaytaradi.",
          },
          {
            type: "code",
            title: "Kunlar.java",
            code: String.raw`import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Kunlar {
    public static void main(String[] args) {
        LocalDate boshlanish = LocalDate.of(2026, 9, 1);
        LocalDate tugash = LocalDate.of(2026, 12, 20);

        long kunlar = ChronoUnit.DAYS.between(boshlanish, tugash);
        LocalDate keyingi = boshlanish.plusWeeks(2).plusDays(3);
        DayOfWeek haftaKuni = boshlanish.getDayOfWeek();

        System.out.println(kunlar);
        System.out.println(keyingi);
        System.out.println(haftaKuni);
        System.out.println(boshlanish.isLeapYear());
    }
}`,
            output: "110\n2026-09-18\nTUESDAY\nfalse",
          },
          {
            type: "note",
            variant: "info",
            title: "Duration va Period farqi",
            html: "<code>Duration</code> vaqt oralig'ini soat, daqiqa, sekundda o'lchaydi. <code>Period</code> esa yil, oy, kunlardagi farqni beradi. <code>ChronoUnit.DAYS.between</code> ikki sana orasidagi kunlarni hisoblaydi. Sanani matnga aylantirish uchun <code>DateTimeFormatter</code>, teskari aylantirish uchun <code>LocalDate.parse</code> ishlatiladi.",
          },
          {
            type: "code",
            title: "Vaqt.java",
            code: String.raw`import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class Vaqt {
    public static void main(String[] args) {
        LocalDateTime uchrashuv = LocalDateTime.of(2026, 10, 24, 14, 30);
        DateTimeFormatter f = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm");
        System.out.println(uchrashuv.format(f));

        ZonedDateTime toshkent = uchrashuv.atZone(ZoneId.of("Asia/Tashkent"));
        ZonedDateTime london = toshkent.withZoneSameInstant(ZoneId.of("Europe/London"));
        System.out.println(london.toLocalTime());

        Duration d = Duration.ofMinutes(95);
        System.out.println(d.toHours() + " soat " + d.toMinutesPart() + " daqiqa");

        LocalDateTime keyin = uchrashuv.plusHours(2).minusMinutes(15);
        System.out.println(keyin);
    }
}`,
            output: "24.10.2026 14:30\n10:30\n1 soat 35 daqiqa\n2026-10-24T16:15",
          },
          {
            type: "table",
            head: ["Klass", "Nima saqlaydi", "Misol"],
            rows: [
              ["<code>LocalDate</code>", "Sana (yil, oy, kun)", "<code>2026-10-24</code>"],
              ["<code>LocalTime</code>", "Vaqt (soat, daqiqa)", "<code>14:30</code>"],
              ["<code>LocalDateTime</code>", "Sana va vaqt", "<code>2026-10-24T14:30</code>"],
              ["<code>ZonedDateTime</code>", "Sana, vaqt, zona", "<code>2026-10-24T14:30+05:00[Asia/Tashkent]</code>"],
              ["<code>Instant</code>", "UTC vaqt nuqtasi", "Server loglari uchun"],
            ],
          },
        ],
        quiz: [
          {
            q: "Ikki sana orasidagi kunlarni hisoblash uchun qaysi vosita ishlatiladi?",
            options: ["Duration.ofDays", "LocalDate.plusDays", "Period.ofYears", "ChronoUnit.DAYS.between"],
            answer: 3,
            explain: "ChronoUnit.DAYS.between(boshlanish, tugash) ikki sana orasidagi to'liq kunlar sonini qaytaradi.",
          },
          {
            q: "Bir vaqt zonasidagi vaqtni boshqa zonada ko'rsatish uchun qaysi metod ishlatiladi?",
            options: ["withYear", "atStartOfDay", "withZoneSameInstant", "toLocalDate"],
            answer: 2,
            explain: "withZoneSameInstant bir xil vaqt nuqtasini boshqa zonada ko'rsatadi; soat farqi avtomatik hisoblanadi.",
          },
          {
            q: "Duration nimani o'lchaydi?",
            options: ["Vaqt oralig'ini soat, daqiqa va sekundlarda", "Faqat yillarni", "Faqat oylarni", "Vaqt zonasini"],
            answer: 0,
            explain: "Duration vaqt oralig'i uchun; yil, oy, kun farqi uchun Period ishlatiladi.",
          },
        ],
      },
      {
        id: 29,
        title: "Regex: matnlarni tekshirish va ajratish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Regex (regular expression) — matn naqshi. U bilan telefon raqamini tekshirish, email topish, matnni bo'laklarga ajratish va almashtirish mumkin. Java'da <code>Pattern</code> kompilyatsiya qilingan naqshni, <code>Matcher</code> esa aniq matn ustidagi qidiruvni boshqaradi. Oddiy holatlarda <code>String.matches</code>, <code>split</code>, <code>replaceAll</code> ham yetarli.",
          },
          {
            type: "code",
            title: "Topish.java",
            code: String.raw`import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Topish {
    public static void main(String[] args) {
        String matn = "Aloqa: aziza@noldan.uz va bek_92@mail.com";
        Pattern pattern = Pattern.compile("([\\w.]+)@([\\w.]+)");
        Matcher matcher = pattern.matcher(matn);

        while (matcher.find()) {
            System.out.println(matcher.group(1) + " -> " + matcher.group(2));
        }
    }
}`,
            output: "aziza -> noldan.uz\nbek_92 -> mail.com",
          },
          {
            type: "table",
            head: ["Naqsh", "Ma'nosi"],
            rows: [
              ["<code>\\d</code>", "Bitta raqam (0-9)"],
              ["<code>\\w</code>", "Harf, raqam yoki pastki chiziq"],
              ["<code>\\s</code>", "Bo'sh joy, tab yoki qator"],
              ["<code>+</code>", "Bir yoki ko'p marta takrorlanish"],
              ["<code>*</code>", "Nol yoki ko'p marta"],
              ["<code>{2,4}</code>", "2 dan 4 martagacha"],
              ["<code>[^0-9]</code>", "Raqam bo'lmagan belgi"],
            ],
          },
          {
            type: "code",
            title: "Tekshir.java",
            code: String.raw`import java.util.Arrays;
import java.util.regex.Pattern;

public class Tekshir {
    public static void main(String[] args) {
        String telefon = "+998 90 123-45-67";
        System.out.println(telefon.matches("\\+998 \\d{2} \\d{3}-\\d{2}-\\d{2}"));

        String toza = telefon.replaceAll("[^0-9]", "");
        System.out.println(toza);
        System.out.println(toza.length());

        String[] qismlar = "olma, banan; anor".split("[,;]\\s*");
        System.out.println(Arrays.toString(qismlar));

        System.out.println("Salom   dunyo".replaceAll("\\s+", " "));

        Pattern p = Pattern.compile("\\d+");
        System.out.println(p.matcher("a12b345").replaceAll("#"));
    }
}`,
            output: "true\n998901234567\n12\n[olma, banan, anor]\nSalom dunyo\na#b#",
          },
          {
            type: "note",
            variant: "warning",
            title: "Java satrida teskari chiziq ikki marta",
            html: "Java satr literalida <code>\\d</code> yozish uchun manbada <code>\\\\d</code> yoziladi: birinchi chiziq satr uchun, ikkinchisi regex uchun. <code>matches()</code> butun matn mos kelishini talab qiladi, <code>find()</code> esa istalgan joydan qidiradi. Naqshni tsikl ichida qayta-qayta kompilyatsiya qilmang: <code>Pattern</code> ni bir marta yaratib, qayta ishlating.",
          },
        ],
        quiz: [
          {
            q: "matn.matches(...) nimani tekshiradi?",
            options: ["Matnning birinchi harfini", "Matn uzunligini", "Butun matn naqshga to'liq mos kelishini", "Faqat raqamlarni"],
            answer: 2,
            explain: "matches butun matn naqshga mos kelishini talab qiladi; qismini topish uchun find() yoki Pattern/Matcher ishlatiladi.",
          },
          {
            q: "Regex'da \\d nimani bildiradi?",
            options: ["Bo'sh joyni", "Harfni", "Nuqtani", "Raqamni (0-9)"],
            answer: 3,
            explain: "\\d bitta raqamni bildiradi. Java satrida uni \\\\d ko'rinishida yozish kerak.",
          },
          {
            q: "Matndagi barcha mosliklarni boshqa matnga almashtirish uchun qaysi metod ishlatiladi?",
            options: ["indexOf", "replaceAll", "substring", "trim"],
            answer: 1,
            explain: "replaceAll(regex, yangi) barcha mosliklarni almashtiradi; replaceFirst faqat birinchisini almashtiradi.",
          },
        ],
      },
      {
        id: 30,
        title: "BigDecimal va aniq pul hisob-kitoblari",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<code>double</code> kasr sonlarni ikkilik tizimda saqlaydi, shuning uchun pul hisobida kichik xatolar paydo bo'ladi: <code>0.1 + 0.2</code> aniq <code>0.3</code> bo'lmaydi. Moliyaviy hisoblar uchun <code>BigDecimal</code> ishlatiladi. U aniq o'nlik qiymatni saqlaydi, yaxlitlash qoidasini esa <code>RoundingMode</code> bilan boshqaramiz.",
          },
          {
            type: "code",
            title: "Pul.java",
            code: String.raw`import java.math.BigDecimal;
import java.math.RoundingMode;

public class Pul {
    public static void main(String[] args) {
        BigDecimal narx = new BigDecimal("19.99");
        BigDecimal soni = new BigDecimal("3");
        BigDecimal jami = narx.multiply(soni);

        System.out.println(jami);
        System.out.println(jami.setScale(0, RoundingMode.HALF_UP));
        System.out.println(new BigDecimal("0.1").add(new BigDecimal("0.2")));
        System.out.println(0.1 + 0.2);
    }
}`,
            output: "59.97\n60\n0.3\n0.30000000000000004",
          },
          {
            type: "note",
            variant: "warning",
            title: "String konstruktori va compareTo",
            html: "<code>new BigDecimal(0.1)</code> yozmang: double'ning xatosi BigDecimal ichiga o'tadi. Har doim satr bilan yarating: <code>new BigDecimal(\"0.1\")</code>. Ikki qiymatni <code>equals</code> bilan solishtirmang, chunki u masshtabni ham hisobga oladi: <code>2.0</code> va <code>2.00</code> teng emas. Qiymat tengligi uchun <code>compareTo() == 0</code> ishlatiladi.",
          },
          {
            type: "code",
            title: "Soliq.java",
            code: String.raw`import java.math.BigDecimal;
import java.math.RoundingMode;

public class Soliq {
    public static void main(String[] args) {
        BigDecimal summa = new BigDecimal("1250000");
        BigDecimal foiz = new BigDecimal("0.12");
        BigDecimal soliq = summa.multiply(foiz).setScale(0, RoundingMode.HALF_UP);

        System.out.println(soliq);
        System.out.println(soliq.compareTo(new BigDecimal("150000")) == 0);
        System.out.println(summa.divide(new BigDecimal("3"), 2, RoundingMode.HALF_UP));
        System.out.println(summa.subtract(soliq));
    }
}`,
            output: "150000\ntrue\n416666.67\n1100000",
          },
          {
            type: "table",
            head: ["Amal", "Misol", "Natija"],
            rows: [
              ["Qo'shish", "<code>new BigDecimal(\"0.1\").add(new BigDecimal(\"0.2\"))</code>", "<code>0.3</code>"],
              ["Ko'paytirish", "<code>19.99 * 3</code>", "<code>59.97</code>"],
              ["Yaxlitlash", "<code>setScale(0, HALF_UP)</code>", "<code>60</code>"],
              ["Bo'lish", "<code>divide(3, 2, HALF_UP)</code>", "<code>416666.67</code>"],
              ["Solishtirish", "<code>compareTo(...)</code>", "<code>0</code> teng"],
            ],
          },
        ],
        quiz: [
          {
            q: "Pul hisob-kitobida qaysi tur ishlatiladi?",
            options: ["BigDecimal", "double", "float", "int har doim"],
            answer: 0,
            explain: "BigDecimal o'nlik qiymatni aniq saqlaydi; double va float ikkilik xatolar beradi.",
          },
          {
            q: "Ikki BigDecimal qiymatning tengligini qaysi usul bilan tekshirish to'g'ri?",
            options: ["equals()", "compareTo() == 0", "== operatori", "toString() solishtirish"],
            answer: 1,
            explain: "compareTo qiymatni solishtiradi; equals masshtabni ham hisobga olgani uchun 2.0 va 2.00 ni teng deb hisoblamaydi.",
          },
          {
            q: "double turida 0.1 + 0.2 qanday natija beradi?",
            options: ["0.3", "0.30", "0.30000000000000004", "Aniqlanmagan xato"],
            answer: 2,
            explain: "0.1 va 0.2 ikkilik tizimda aniq ifodalanmaydi, shuning uchun yig'indi kichik xato bilan chiqadi.",
          },
        ],
      },
      {
        id: 31,
        title: "JSON: Jackson bilan serializatsiya",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "JSON — API va konfiguratsiyalarda ishlatiladigan matn formatidir. Obyekt jingalak qavslarda, massiv kvadrat qavslarda yoziladi, maydonlar <code>\"kalit\": qiymat</code> ko'rinishida bo'ladi. Java'da JSON bilan ishlash uchun odatda Jackson kutubxonasi ishlatiladi: <code>ObjectMapper</code> obyektni JSON ga va teskarisiga aylantiradi.",
          },
          {
            type: "code",
            title: "JsonDemo.java",
            code: String.raw`import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;

record Talaba(String ism, int ball) {}

public class JsonDemo {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        Talaba aziza = new Talaba("Aziza", 92);

        String json = mapper.writeValueAsString(aziza);
        System.out.println(json);

        String kirish = """
                {"ism":"Bek","ball":78}
                """;
        Talaba bek = mapper.readValue(kirish, Talaba.class);
        System.out.println(bek.ism() + ": " + bek.ball());

        List<Talaba> royxat = List.of(aziza, bek);
        System.out.println(mapper.writeValueAsString(royxat));
    }
}`,
            output:
              "{\"ism\":\"Aziza\",\"ball\":92}\nBek: 78\n[{\"ism\":\"Aziza\",\"ball\":92},{\"ism\":\"Bek\",\"ball\":78}]",
          },
          {
            type: "note",
            variant: "info",
            title: "Jackson bog'liqligi",
            html: "Maven'da <code>com.fasterxml.jackson.core:jackson-databind:2.17.1</code> qo'shiladi. Jackson 2.12 dan boshlab recordlarni qo'llab-quvvatlaydi: komponent nomlari JSON kalitlari bo'ladi. Sana va vaqt uchun <code>jackson-datatype-jsr310</code> moduli ro'yxatdan o'tkaziladi. Yengilroq alternativa sifatida Gson ham bor, lekin record va zamonaviy tiplar bilan ishlashda Jackson keng tarqalgan.",
          },
          {
            type: "code",
            title: "JsonRoyxat.java",
            code: String.raw`import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;

record Talaba(String ism, int ball) {}

public class JsonRoyxat {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        String matn = """
                [{"ism":"Ali","ball":85},{"ism":"Dilnoza","ball":91}]
                """;

        List<Talaba> talabalar = mapper.readValue(
            matn, new TypeReference<List<Talaba>>() {});
        for (Talaba t : talabalar) {
            System.out.println(t.ism() + " " + t.ball());
        }

        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        Talaba jasur = mapper.readValue("""
                {"ism":"Jasur","ball":70,"shahar":"Buxoro"}
                """, Talaba.class);
        System.out.println(jasur.ism());
    }
}`,
            output: "Ali 85\nDilnoza 91\nJasur",
          },
          {
            type: "table",
            head: ["Vazifa", "Jackson usuli"],
            rows: [
              ["Obyektni JSON ga aylantirish", "<code>writeValueAsString(obj)</code>"],
              ["JSON dan obyekt yaratish", "<code>readValue(json, Klass.class)</code>"],
              ["Ro'yxatni o'qish", "<code>TypeReference&lt;List&lt;T&gt;&gt;</code>"],
              ["Faylga yozish", "<code>writeValue(file, obj)</code>"],
              ["Noma'lum maydonlarni o'tkazish", "<code>FAIL_ON_UNKNOWN_PROPERTIES = false</code>"],
            ],
          },
        ],
        quiz: [
          {
            q: "JSON obyekti qanday qavslar ichida yoziladi?",
            options: ["Kvadrat [ ]", "Jingalak { }", "Oddiy ( )", "Burchakli < >"],
            answer: 1,
            explain: "JSON obyekti kalit-qiymat juftliklarini jingalak qavslar ichida saqlaydi; massiv kvadrat qavslarda bo'ladi.",
          },
          {
            q: "Jackson'da JSON matnidan Java obyektini yaratish uchun qaysi metod ishlatiladi?",
            options: ["writeValueAsString", "toJson", "parseObject faqat", "readValue"],
            answer: 3,
            explain: "ObjectMapper.readValue(json, Klass.class) JSON ni obyektga aylantiradi.",
          },
          {
            q: "JSON'da ortiqcha noma'lum maydon bo'lsa xato bermasligi uchun nima qilinadi?",
            options: ["FAIL_ON_UNKNOWN_PROPERTIES o'chiriladi", "Barcha maydonlar o'chiriladi", "ObjectMapper yangilanadi", "JSON matni qisqartiriladi"],
            answer: 0,
            explain: "DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES ni false qilish noma'lum maydonlarni e'tiborsiz qoldiradi.",
          },
        ],
      },
      {
        id: 32,
        title: "JDBC: ma'lumotlar bazasi bilan ishlash",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "JDBC — Java dasturidan relatsion bazaga ulanishning standart API si. Asosiy qadamlar: drayverni yuklash (zamonaviy drayverlarda avtomatik), <code>Connection</code> ochish, <code>PreparedStatement</code> tayyorlash, so'rov bajarish va <code>ResultSet</code> natijalarini o'qish. Resurslar <code>try-with-resources</code> bilan yopiladi.",
          },
          {
            type: "code",
            title: "JdbcDemo.java",
            code: String.raw`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcDemo {
    public static void main(String[] args) throws Exception {
        String url = "jdbc:h2:mem:noldan;DB_CLOSE_DELAY=-1";
        try (Connection conn = DriverManager.getConnection(url, "sa", "")) {
            try (Statement st = conn.createStatement()) {
                st.execute("CREATE TABLE talaba (id INT PRIMARY KEY, ism VARCHAR(50), ball INT)");
            }

            String sql = "INSERT INTO talaba (id, ism, ball) VALUES (?, ?, ?)";
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, 1);
                ps.setString(2, "Aziza");
                ps.setInt(3, 92);
                ps.addBatch();

                ps.setInt(1, 2);
                ps.setString(2, "Bek");
                ps.setInt(3, 78);
                ps.addBatch();

                ps.executeBatch();
            }

            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery(
                     "SELECT ism, ball FROM talaba ORDER BY ball DESC")) {
                while (rs.next()) {
                    System.out.println(rs.getString("ism") + ": " + rs.getInt("ball"));
                }
            }
        }
    }
}`,
            output: "Aziza: 92\nBek: 78",
          },
          {
            type: "table",
            head: ["Interfeys", "Vazifasi"],
            rows: [
              ["<code>DriverManager</code>", "Ulanishni URL bo'yicha ochadi"],
              ["<code>Connection</code>", "Sessiya, tranzaksiya va autocommit"],
              ["<code>PreparedStatement</code>", "Parametrli SQL, injection'dan himoya"],
              ["<code>ResultSet</code>", "So'rov natijalari bo'ylab yurish"],
              ["<code>SQLException</code>", "Baza xatosi (checked)"],
            ],
          },
          {
            type: "code",
            title: "Tranzaksiya.java",
            code: String.raw`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class Tranzaksiya {
    public static void main(String[] args) throws Exception {
        String url = "jdbc:h2:mem:bank;DB_CLOSE_DELAY=-1";
        try (Connection conn = DriverManager.getConnection(url, "sa", "")) {
            try (Statement st = conn.createStatement()) {
                st.execute("CREATE TABLE hisob (id INT PRIMARY KEY, balans INT)");
                st.execute("INSERT INTO hisob VALUES (1, 500), (2, 100)");
            }

            conn.setAutoCommit(false);
            try (PreparedStatement ps = conn.prepareStatement(
                    "UPDATE hisob SET balans = balans + ? WHERE id = ?")) {
                ps.setInt(1, -100);
                ps.setInt(2, 1);
                ps.executeUpdate();

                ps.setInt(1, 100);
                ps.setInt(2, 2);
                ps.executeUpdate();
            }
            conn.commit();

            try (PreparedStatement ps = conn.prepareStatement(
                    "UPDATE hisob SET balans = balans - ? WHERE id = ?")) {
                ps.setInt(1, 1000);
                ps.setInt(2, 1);
                ps.executeUpdate();
            }
            conn.rollback();

            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery(
                     "SELECT id, balans FROM hisob ORDER BY id")) {
                while (rs.next()) {
                    System.out.println(rs.getInt("id") + ": " + rs.getInt("balans"));
                }
            }
        }
    }
}`,
            output: "1: 400\n2: 200",
          },
          {
            type: "note",
            variant: "warning",
            title: "SQL injection va tranzaksiya",
            html: "SQL'ni satr birlashtirish bilan qurmang: <code>\"SELECT * FROM users WHERE name = '\" + ism + \"'\"</code> kabi kod injection'ga ochiq. Har doim <code>?</code> parametrlaridan foydalaning. Pul o'tkazmasi kabi bir nechta amal bitta tranzaksiyada bajarilishi kerak: <code>setAutoCommit(false)</code>, muvaffaqiyatda <code>commit()</code>, xatoda <code>rollback()</code>. H2 test uchun qulay, ishlab chiqarishda PostgreSQL yoki MySQL drayveri qo'shiladi.",
          },
        ],
        quiz: [
          {
            q: "SQL'ga foydalanuvchi qiymatini xavfsiz qo'shish uchun nima ishlatiladi?",
            options: ["Statement va + bilan birlashtirish", "ResultSet", "PreparedStatement va ? parametrlari", "DriverManager"],
            answer: 2,
            explain: "PreparedStatement parametrlarni alohida yuboradi va SQL injection'dan himoya qiladi.",
          },
          {
            q: "ResultSet'dagi qatorlar bo'ylab yurish uchun qaysi metod chaqiriladi?",
            options: ["rs.next()", "rs.get()", "rs.move()", "rs.open()"],
            answer: 0,
            explain: "next() kursorni keyingi qatorga suradi va qator mavjud bo'lsa true qaytaradi.",
          },
          {
            q: "Tranzaksiyadagi o'zgarishlarni bekor qilish uchun qaysi metod ishlatiladi?",
            options: ["commit()", "rollback()", "close()", "execute()"],
            answer: 1,
            explain: "rollback() autocommit o'chirilganda oxirgi commit'dan keyingi o'zgarishlarni bekor qiladi.",
          },
        ],
      },
      {
        id: 33,
        title: "HTTP Client: Java'dan API chaqirish",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Java 11 dan boshlab <code>java.net.http.HttpClient</code> standart kutubxonada mavjud. U bilan HTTP so'rov yuborish, javobni o'qish va timeout belgilash mumkin. <code>HttpRequest</code> so'rovni, <code>HttpResponse&lt;T&gt;</code> javobni ifodalaydi. Tashqi API bilan ishlashda status kod, xato javobi va tarmoq uzilishlarini hisobga olish shart.",
          },
          {
            type: "code",
            title: "HttpDemo.java",
            code: String.raw`import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

public class HttpDemo {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(
            new InetSocketAddress("localhost", 0), 0);
        server.createContext("/salom", exchange -> {
            byte[] javob = "Salom, HTTP!".getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders()
                .add("Content-Type", "text/plain; charset=utf-8");
            exchange.sendResponseHeaders(200, javob.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(javob);
            }
        });
        server.start();
        int port = server.getAddress().getPort();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:" + port + "/salom"))
            .header("Accept", "text/plain")
            .GET()
            .build();

        HttpResponse<String> response = client.send(
            request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.statusCode());
        System.out.println(response.body());
        System.out.println(response.headers()
            .firstValue("content-type").orElse("yo'q"));

        server.stop(0);
    }
}`,
            output: "200\nSalom, HTTP!\ntext/plain; charset=utf-8",
          },
          {
            type: "table",
            head: ["Klass", "Vazifasi"],
            rows: [
              ["<code>HttpClient</code>", "Ulanishlar hovuzi va sozlash"],
              ["<code>HttpRequest</code>", "URL, metod, sarlavhalar, tana"],
              ["<code>HttpResponse</code>", "Status, sarlavhalar, tana"],
              ["<code>BodyHandlers.ofString</code>", "Javobni matn sifatida o'qish"],
              ["<code>sendAsync</code>", "Asinxron so'rov (CompletableFuture)"],
            ],
          },
          {
            type: "code",
            title: "HttpPost.java",
            code: String.raw`import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

public class HttpPost {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(
            new InetSocketAddress("localhost", 0), 0);
        server.createContext("/echo", exchange -> {
            byte[] javob = """
                    {"holat":"qabul qilindi"}
                    """.strip().getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders()
                .add("Content-Type", "application/json");
            exchange.sendResponseHeaders(201, javob.length);
            try (var os = exchange.getResponseBody()) {
                os.write(javob);
            }
        });
        server.start();
        int port = server.getAddress().getPort();

        String tana = """
                {"ism":"Aziza"}
                """.strip();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:" + port + "/echo"))
            .header("Content-Type", "application/json")
            .timeout(Duration.ofSeconds(3))
            .POST(HttpRequest.BodyPublishers.ofString(tana))
            .build();

        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.statusCode());
        System.out.println(response.body());

        server.stop(0);
    }
}`,
            output: "201\n{\"holat\":\"qabul qilindi\"}",
          },
          {
            type: "note",
            variant: "tip",
            title: "Timeout va xatolar",
            html: "Tarmoq cheksiz kutilmasligi uchun <code>timeout(Duration)</code> qo'ying. <code>send</code> <code>IOException</code> yoki <code>InterruptedException</code> chiqarishi mumkin; ularni ushlang yoki yuqoriga uzating. Status kodi 200-299 bo'lsa muvaffaqiyat, 4xx — so'rov xatosi, 5xx — server xatosi. <code>HttpClient</code> ni har so'rovda qayta yaratmang: u thread-safe va ulanishlarni qayta ishlatadi.",
          },
        ],
        quiz: [
          {
            q: "HttpClient bilan sinxron so'rov yuborish uchun qaysi metod ishlatiladi?",
            options: ["execute", "fetch", "request", "send"],
            answer: 3,
            explain: "send(request, bodyHandler) so'rovni yuboradi va javobni kutadi; sendAsync esa CompletableFuture qaytaradi.",
          },
          {
            q: "POST so'rov tanasini qanday beramiz?",
            options: ["header() bilan", "BodyPublishers.ofString bilan", "GET() bilan", "firstValue() bilan"],
            answer: 1,
            explain: "POST(BodyPublishers.ofString(matn)) so'rov tanasini matn sifatida yuboradi.",
          },
          {
            q: "HTTP 404 status kodi nimani bildiradi?",
            options: ["Server xatosi", "Muvaffaqiyat", "Resurs topilmadi", "Ruxsat berilmadi"],
            answer: 2,
            explain: "404 Not Found — so'ralgan resurs serverda mavjud emas. 401 ruxsat, 500 server xatosi.",
          },
        ],
      },
      {
        id: 34,
        title: "Threadlar: parallel ishlash asoslari",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Thread — dastur ichidagi mustaqil bajarilish oqimi. Bitta dasturda bir nechta thread parallel ishlashi mumkin: biri faylni yuklaydi, ikkinchisi interfeysni yangilaydi. Java'da thread <code>Thread</code> klassi yoki <code>Runnable</code> interfeysi orqali yaratiladi. <code>start()</code> yangi oqimni boshlaydi, <code>join()</code> esa uning tugashini kutadi.",
          },
          {
            type: "code",
            title: "IpDemo.java",
            code: String.raw`public class IpDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println("T1: " + i);
            }
        }, "ishchi-1");

        Thread t2 = new Thread(
            () -> System.out.println("T2: " + Thread.currentThread().getName()),
            "ishchi-2");

        t1.start();
        t1.join();
        t2.start();
        t2.join();
        System.out.println("main tugadi");
    }
}`,
            output: "T1: 1\nT1: 2\nT1: 3\nT2: ishchi-2\nmain tugadi",
          },
          {
            type: "table",
            head: ["Metod", "Vazifasi"],
            rows: [
              ["<code>start()</code>", "Yangi threadni ishga tushiradi"],
              ["<code>run()</code>", "Thread tanasidagi kod (to'g'ridan-to'g'ri chaqirilsa yangi thread ochilmaydi)"],
              ["<code>join()</code>", "Thread tugashini kutadi"],
              ["<code>sleep(ms)</code>", "Threadni vaqtincha to'xtatadi"],
              ["<code>interrupt()</code>", "Uzilish signalini yuboradi"],
              ["<code>isAlive()</code>", "Thread hali ishlayaptimi-yo'qmi"],
            ],
          },
          {
            type: "code",
            title: "Hisob.java",
            code: String.raw`class Hisoblagich {
    private int son = 0;

    synchronized void oshir() {
        son++;
    }

    synchronized int qiymat() {
        return son;
    }
}

public class Hisob {
    public static void main(String[] args) throws InterruptedException {
        Hisoblagich h = new Hisoblagich();
        Runnable ish = () -> {
            for (int i = 0; i < 1000; i++) {
                h.oshir();
            }
        };

        Thread a = new Thread(ish);
        Thread b = new Thread(ish);
        a.start();
        b.start();
        a.join();
        b.join();

        System.out.println(h.qiymat());
        System.out.println(a.isAlive());
    }
}`,
            output: "2000\nfalse",
          },
          {
            type: "note",
            variant: "warning",
            title: "Race condition",
            html: "Ikki thread bir vaqtda <code>son++</code> bajarsa, natija 2000 dan kichik bo'lishi mumkin: o'qish, qo'shish va yozish qadamlari bir-biriga aralashadi. Bu <b>race condition</b>. <code>synchronized</code> bir vaqtda faqat bitta threadga metodga kirishga ruxsat beradi. Ko'p vazifalar uchun qo'lda thread yaratmang — keyingi darslardagi <code>ExecutorService</code> dan foydalaning.",
          },
        ],
        quiz: [
          {
            q: "Thread'ni ishga tushirish uchun qaysi metod chaqiriladi?",
            options: ["start()", "run()", "join()", "sleep()"],
            answer: 0,
            explain: "start() yangi bajarilish oqimini ochadi va ichida run() ni chaqiradi.",
          },
          {
            q: "join() nima qiladi?",
            options: ["Threadni to'xtatadi", "Yangi thread yaratadi", "Chaqiruvchi thread shu thread tugashini kutadi", "Thread nomini o'zgartiradi"],
            answer: 2,
            explain: "join() chaqiruvchi oqimni bloklaydi va ko'rsatilgan thread tugagach davom etadi.",
          },
          {
            q: "run() ni to'g'ridan-to'g'ri chaqirsak nima bo'ladi?",
            options: ["Yangi thread ochiladi", "Dastur darhol tugaydi", "Istisno chiqadi", "Kod joriy threadda bajariladi, yangi thread ochilmaydi"],
            answer: 3,
            explain: "run() oddiy metod; uni to'g'ridan-to'g'ri chaqirish joriy oqimda bajariladi. Yangi oqim faqat start() bilan ochiladi.",
          },
        ],
      },
      {
        id: 35,
        title: "Sinxronizatsiya va atomik turlar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Bir nechta thread bitta ma'lumotga murojaat qilsa, ularning amallarini kelishib bajarish kerak. <b>synchronized</b> blok yoki metod bir vaqtda bitta threadga ruxsat beradi. <b>volatile</b> o'zgarishlarning boshqa threadlarga ko'rinishini kafolatlaydi, lekin atomarlikni emas. <b>AtomicInteger</b> kabi atomik turlar esa o'qish-yozishni bo'linmas qiladi.",
          },
          {
            type: "code",
            title: "Sinxron.java",
            code: String.raw`class Ombor {
    private int mahsulot = 0;
    private final Object qulf = new Object();

    void qosh(int soni) {
        synchronized (qulf) {
            mahsulot += soni;
        }
    }

    int qiymat() {
        synchronized (qulf) {
            return mahsulot;
        }
    }
}

public class Sinxron {
    public static void main(String[] args) throws InterruptedException {
        Ombor ombor = new Ombor();
        Runnable ish = () -> {
            for (int i = 0; i < 500; i++) {
                ombor.qosh(1);
            }
        };

        Thread a = new Thread(ish);
        Thread b = new Thread(ish);
        a.start();
        b.start();
        a.join();
        b.join();

        System.out.println(ombor.qiymat());
    }
}`,
            output: "1000",
          },
          {
            type: "note",
            variant: "info",
            title: "volatile qachon yetarli?",
            html: "<code>volatile</code> faqat bitta thread yozib, boshqalari o'qiydigan bayroq uchun mos: <code>volatile boolean toxtatish</code>. <code>son++</code> kabi o'qish-va-yozish amali uchun u yetarli emas, chunki ikki thread bir xil eski qiymatni o'qishi mumkin. Bunday joyda <code>synchronized</code>, <code>AtomicInteger</code> yoki <code>LongAdder</code> ishlatiladi.",
          },
          {
            type: "code",
            title: "Atomik.java",
            code: String.raw`import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.LongAdder;
import java.util.stream.IntStream;

public class Atomik {
    public static void main(String[] args) {
        AtomicInteger hisob = new AtomicInteger();
        IntStream.range(0, 1000)
            .parallel()
            .forEach(i -> hisob.incrementAndGet());
        System.out.println(hisob.get());

        LongAdder yigindi = new LongAdder();
        IntStream.rangeClosed(1, 100)
            .parallel()
            .forEach(yigindi::add);
        System.out.println(yigindi.sum());

        ConcurrentHashMap<String, Integer> ombor = new ConcurrentHashMap<>();
        ombor.merge("olma", 1, Integer::sum);
        ombor.merge("olma", 1, Integer::sum);
        System.out.println(ombor.get("olma"));
    }
}`,
            output: "1000\n5050\n2",
          },
          {
            type: "table",
            head: ["Vosita", "Nimani kafolatlaydi", "Qachon ishlatiladi"],
            rows: [
              ["<code>synchronized</code>", "O'zaro istisno + ko'rinish", "Murakkab holat o'zgarishi"],
              ["<code>volatile</code>", "Ko'rinish", "Oddiy bayroq"],
              ["<code>AtomicInteger</code>", "Atomar o'qish-yozish", "Hisoblagich"],
              ["<code>LongAdder</code>", "Atomar yig'indi, yuqori yuklama", "Statistika"],
              ["<code>ConcurrentHashMap</code>", "Thread-safe map", "Umumiy kesh"],
            ],
          },
        ],
        quiz: [
          {
            q: "volatile nimani kafolatlaydi?",
            options: ["Atomarlikni", "Ko'rinishni (visibility), atomarlikni emas", "Deadlock'ning oldini olishni", "Faqat tezlikni"],
            answer: 1,
            explain: "volatile yozilgan qiymat boshqa threadlarga darhol ko'rinishini ta'minlaydi, lekin son++ kabi amalni atomar qilmaydi.",
          },
          {
            q: "AtomicInteger.incrementAndGet() nima uchun thread-safe?",
            options: ["CAS asosida atomar bajariladi", "Har chaqiruvda yangi thread yaratadi", "synchronized kalit so'zini avtomatik qo'shadi", "Faqat bitta threadda ishlaydi"],
            answer: 0,
            explain: "AtomicInteger compare-and-swap operatsiyasidan foydalanadi, shuning uchun qo'shimcha qulf kerak emas.",
          },
          {
            q: "Ikki thread bir-birini kutib, hech biri davom eta olmasa, bu holat nima deyiladi?",
            options: ["Race condition", "Starvation", "Deadlock", "Overflow"],
            answer: 2,
            explain: "Deadlock — ikki yoki undan ortiq thread bir-biriga tegishli qulflarni kutib qolishi. Qulflarni bir xil tartibda olish uning oldini oladi.",
          },
        ],
      },
      {
        id: 36,
        title: "ExecutorService va thread hovuzlari",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Har vazifa uchun yangi thread yaratish qimmat. <code>ExecutorService</code> thread hovuzini boshqaradi: vazifalar navbatga qo'yiladi, mavjud threadlar ularni bajaradi. <code>submit</code> natijani <code>Future</code> orqali qaytaradi, <code>invokeAll</code> bir nechta vazifani birga yuboradi. Hovuzni har doim yopish kerak.",
          },
          {
            type: "code",
            title: "Hovuz.java",
            code: String.raw`import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Hovuz {
    public static void main(String[] args) throws Exception {
        ExecutorService pool = Executors.newFixedThreadPool(2);
        try {
            Future<Integer> a = pool.submit(() -> 6 * 7);
            Future<Integer> b = pool.submit(() -> 10 + 5);
            System.out.println(a.get());
            System.out.println(b.get());

            List<Callable<String>> vazifalar = List.of(() -> "A", () -> "B", () -> "C");
            for (Future<String> f : pool.invokeAll(vazifalar)) {
                System.out.print(f.get());
            }
            System.out.println();
        } finally {
            pool.shutdown();
        }
        System.out.println(pool.isShutdown());
    }
}`,
            output: "42\n15\nABC\ntrue",
          },
          {
            type: "table",
            head: ["Hovuz", "Xususiyati"],
            rows: [
              ["<code>newFixedThreadPool(n)</code>", "Doimiy n ta thread"],
              ["<code>newCachedThreadPool()</code>", "Kerak bo'lsa thread qo'shadi, bo'shini qayta ishlatadi"],
              ["<code>newSingleThreadExecutor()</code>", "Bitta thread, navbat bilan"],
              ["<code>newScheduledThreadPool(n)</code>", "Kechiktirilgan va davriy vazifalar"],
              ["<code>newWorkStealingPool()</code>", "Ish o'g'irlash algoritmi"],
            ],
          },
          {
            type: "code",
            title: "Rejalashtirish.java",
            code: String.raw`import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class Rejalashtirish {
    public static void main(String[] args) throws Exception {
        ScheduledExecutorService scheduler =
            Executors.newSingleThreadScheduledExecutor();
        try {
            System.out.println("boshlandi");
            var birinchi = scheduler.schedule(
                () -> System.out.println("birinchi"), 50, TimeUnit.MILLISECONDS);
            var ikkinchi = scheduler.schedule(
                () -> System.out.println("ikkinchi"), 100, TimeUnit.MILLISECONDS);
            birinchi.get();
            ikkinchi.get();
        } finally {
            scheduler.shutdown();
        }
        System.out.println("tugadi");
    }
}`,
            output: "boshlandi\nbirinchi\nikkinchi\ntugadi",
          },
          {
            type: "note",
            variant: "warning",
            title: "shutdown va shutdownNow",
            html: "<code>shutdown()</code> yangi vazifalarni qabul qilmaydi, lekin boshlanganlarini tugatadi. <code>shutdownNow()</code> navbatdagi vazifalarni bekor qilishga va threadlarni uzishga harakat qiladi. Dastur tugagach hovuz threadlari ochiq qolsa, JVM yopilmasligi mumkin. <code>Future.get()</code> natijani kutadi va vazifa istisno bilan tugasa <code>ExecutionException</code> beradi.",
          },
        ],
        quiz: [
          {
            q: "Executors.newFixedThreadPool(4) nechta thread ishlatadi?",
            options: ["Har doim 1 ta", "Cheksiz", "Ko'pi bilan 4 ta", "Aynan 8 ta"],
            answer: 2,
            explain: "Fixed pool belgilangan miqdorda thread saqlaydi; vazifalar ko'p bo'lsa navbatda kutadi.",
          },
          {
            q: "Future.get() nima qiladi?",
            options: ["Vazifani bekor qiladi", "Yangi thread ochadi", "Hovuzni yopadi", "Natijani kutadi va qaytaradi"],
            answer: 3,
            explain: "get() vazifa tugaguncha bloklaydi, natijani qaytaradi yoki ExecutionException tashlaydi.",
          },
          {
            q: "shutdown() chaqirilganda nima bo'ladi?",
            options: ["Yangi vazifalarni qabul qilmaydi, boshlanganlarini tugatadi", "Barcha threadlarni darhol o'ldiradi", "Hovuzni qayta ishga tushiradi", "Faqat navbatni tozalaydi"],
            answer: 0,
            explain: "shutdown yumshoq to'xtatish: yangi submit rad etiladi, ishlayotgan vazifalar tugaydi.",
          },
        ],
      },
      {
        id: 37,
        title: "CompletableFuture: asinxron kompozitsiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "<code>CompletableFuture</code> asinxron hisoblarni birlashtirish uchun kuchli vosita. <code>supplyAsync</code> fon oqimida qiymat hisoblaydi, <code>thenApply</code> natijani aylantiradi, <code>thenCombine</code> ikki mustaqil natijani birlashtiradi, <code>exceptionally</code> xatoni ushlaydi. Bu zanjirlar bloklamaydi va natijani keyin <code>join()</code> yoki <code>thenAccept</code> bilan olish mumkin.",
          },
          {
            type: "code",
            title: "Asinxron.java",
            code: String.raw`import java.util.concurrent.CompletableFuture;

public class Asinxron {
    public static void main(String[] args) {
        CompletableFuture<Integer> a = CompletableFuture.supplyAsync(() -> 10);
        CompletableFuture<Integer> b = CompletableFuture.supplyAsync(() -> 20);

        CompletableFuture<Integer> jami = a.thenCombine(b, Integer::sum);
        System.out.println(jami.join());

        CompletableFuture<String> matn = CompletableFuture
            .supplyAsync(() -> "noldan")
            .thenApply(String::toUpperCase)
            .thenApply(s -> s + "!");
        System.out.println(matn.join());
    }
}`,
            output: "30\nNOLDAN!",
          },
          {
            type: "table",
            head: ["Metod", "Vazifasi"],
            rows: [
              ["<code>supplyAsync</code>", "Fon oqimida qiymat hisoblaydi"],
              ["<code>thenApply</code>", "Natijani funksiya bilan aylantiradi"],
              ["<code>thenCompose</code>", "Boshqa future qaytaradigan amalni ketma-ket bog'laydi"],
              ["<code>thenCombine</code>", "Ikki mustaqil future natijasini birlashtiradi"],
              ["<code>exceptionally</code>", "Xatoda muqobil qiymat qaytaradi"],
              ["<code>allOf</code>", "Barcha futurelar tugashini kutadi"],
            ],
          },
          {
            type: "code",
            title: "Xatolar.java",
            code: String.raw`import java.util.concurrent.CompletableFuture;

public class Xatolar {
    public static void main(String[] args) {
        CompletableFuture<Integer> xato = CompletableFuture.supplyAsync(() -> {
            throw new IllegalStateException("hisob xatosi");
        });

        System.out.println(xato.exceptionally(e -> -1).join());

        CompletableFuture<Integer> a = CompletableFuture.completedFuture(4);
        CompletableFuture<Integer> b = CompletableFuture.completedFuture(6);
        int yigindi = CompletableFuture.allOf(a, b)
            .thenApply(v -> a.join() + b.join())
            .join();
        System.out.println(yigindi);

        CompletableFuture<String> salom = CompletableFuture.completedFuture("Ali")
            .thenCompose(ism -> CompletableFuture.supplyAsync(
                () -> "Salom, " + ism));
        System.out.println(salom.join());
    }
}`,
            output: "-1\n10\nSalom, Ali",
          },
          {
            type: "note",
            variant: "tip",
            title: "Bloklovchi IO uchun alohida hovuz",
            html: "Standart <code>supplyAsync</code> umumiy ForkJoinPool'da ishlaydi, u CPU uchun mo'ljallangan. Fayl yoki tarmoq kabi bloklovchi ishlarni alohida <code>Executor</code> ga bering: <code>supplyAsync(vazifa, executor)</code>. <code>join()</code> xatoni <code>CompletionException</code> bilan o'raydi; foydalanuvchiga ko'rsatishdan oldin sababini ajratib oling. Web ilovada so'rov oqimini uzoq bloklamang.",
          },
        ],
        quiz: [
          {
            q: "thenApply nimani o'zgartiradi?",
            options: ["Thread sonini", "Fayl yo'lini", "Xato turini", "Natijani funksiya orqali aylantiradi"],
            answer: 3,
            explain: "thenApply oldingi bosqich natijasiga funksiya qo'llaydi va yangi CompletableFuture qaytaradi.",
          },
          {
            q: "thenCombine nima qiladi?",
            options: ["Ikki mustaqil future natijasini birlashtiradi", "Bitta futureni bekor qiladi", "Faqat xatoni ushlaydi", "Threadni to'xtatadi"],
            answer: 0,
            explain: "thenCombine ikki future tugagach ularning natijalarini funksiya bilan birlashtiradi.",
          },
          {
            q: "Xatoni ushlab, muqobil qiymat qaytarish uchun qaysi metod ishlatiladi?",
            options: ["thenApply", "exceptionally", "thenRun", "allOf"],
            answer: 1,
            explain: "exceptionally xato yuz berganda muqobil qiymat qaytaradi; handle esa muvaffaqiyat va xatoni birga ko'radi.",
          },
        ],
      },
      {
        id: 38,
        title: "JUnit 5 bilan avtomatik testlash",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Test — kodning kutilganidek ishlashini tekshiradigan kichik dastur. JUnit 5 Java uchun eng keng tarqalgan test framework'i. Testlar <code>@Test</code> bilan belgilanadi, natija <code>assertEquals</code>, <code>assertTrue</code>, <code>assertThrows</code> kabi metodlar bilan tekshiriladi. Yaxshi test tez, mustaqil va har doim bir xil natija beradi.",
          },
          {
            type: "code",
            title: "KalkulyatorTest.java",
            code: String.raw`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class Kalkulyator {
    static int qosh(int a, int b) {
        return a + b;
    }

    static int bol(int a, int b) {
        return a / b;
    }
}

class KalkulyatorTest {
    @Test
    void qoshishTogri() {
        assertEquals(5, Kalkulyator.qosh(2, 3));
    }

    @Test
    void nolgaBolishXato() {
        assertThrows(ArithmeticException.class, () -> Kalkulyator.bol(8, 0));
    }
}`,
            output: "Tests run: 2, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
          },
          {
            type: "table",
            head: ["Annotatsiya", "Vazifasi"],
            rows: [
              ["<code>@Test</code>", "Test metodini belgilaydi"],
              ["<code>@BeforeEach</code>", "Har testdan oldin ishlaydi"],
              ["<code>@AfterEach</code>", "Har testdan keyin ishlaydi"],
              ["<code>@BeforeAll</code>", "Barcha testlardan oldin bir marta"],
              ["<code>@Disabled</code>", "Testni vaqtincha o'chiradi"],
              ["<code>@ParameterizedTest</code>", "Bir testni bir nechta qiymat bilan ishlatadi"],
            ],
          },
          {
            type: "code",
            title: "BallTest.java",
            code: String.raw`import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

class Ball {
    static String daraja(int ball) {
        if (ball >= 90) return "A";
        if (ball >= 80) return "B";
        return "C";
    }
}

class BallTest {
    @ParameterizedTest
    @CsvSource({"95,A", "85,B", "70,C"})
    void darajaTogri(int ball, String kutilgan) {
        assertEquals(kutilgan, Ball.daraja(ball));
    }

    @Test
    void birGuruhTekshiruv() {
        assertAll(
            () -> assertEquals(4, 2 + 2),
            () -> assertEquals("Aziza", "Aziza")
        );
    }
}`,
            output: "Tests run: 4, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
          },
          {
            type: "note",
            variant: "tip",
            title: "Testlarni qanday yozish kerak?",
            html: "Bitta test bitta xatti-harakatni tekshirsin va nomi nima tekshirilayotganini aytsin: <code>notogriYoshXatoBeradi</code>. Tashqi tarmoq, vaqt yoki tasodifiy qiymatlarga bog'lanmang; kerak bo'lsa vaqtni parametr qilib bering. JUnit 5 uchun <code>org.junit.jupiter:junit-jupiter:5.10.2</code> bog'liqligi <code>test</code> scope bilan qo'shiladi. Testlarni <code>mvn test</code> yoki IDE orqali ishga tushiring.",
          },
        ],
        quiz: [
          {
            q: "JUnit 5 da test metodi qaysi annotatsiya bilan belgilanadi?",
            options: ["@Test", "@Run", "@Unit", "@Check"],
            answer: 0,
            explain: "@Test annotatsiyasi metodni test sifatida tanitadi; JUnit uni mustaqil ishga tushiradi.",
          },
          {
            q: "Kutilgan va haqiqiy qiymatni solishtirish uchun qaysi assertion qulay?",
            options: ["assertTrue", "assertEquals", "assertNull", "fail"],
            answer: 1,
            explain: "assertEquals(kutilgan, haqiqiy) ikki qiymat tengligini tekshiradi va farqni xabarda ko'rsatadi.",
          },
          {
            q: "Metod istisno tashlashini tekshirish uchun qaysi assertion ishlatiladi?",
            options: ["assertDoesNotThrow", "assertAll", "assertTimeout", "assertThrows"],
            answer: 3,
            explain: "assertThrows(Istisno.class, () -> kod) kod istisno tashlashini va uning turini tekshiradi.",
          },
        ],
      },
      {
        id: 39,
        title: "Maven va Gradle: loyihani qurish",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Katta loyihada kompilyatsiya, test, kutubxonalar va paketlashni qo'lda bajarish noqulay. <b>Maven</b> va <b>Gradle</b> build vositalari bu ishlarni avtomatlashtiradi. Maven standart papka tuzilishi va <code>pom.xml</code> konfiguratsiyasiga tayanadi. Gradle esa <code>build.gradle.kts</code> dagi qisqa skript bilan ishlaydi.",
          },
          {
            type: "code",
            title: "src/main/java/uz/noldan/App.java",
            code: String.raw`package uz.noldan;

public class App {
    static int qosh(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println("Salom, Maven!");
        System.out.println("Java " + System.getProperty("java.specification.version"));
    }
}`,
            output: "Salom, Maven!\nJava 17",
          },
          {
            type: "code",
            title: "src/test/java/uz/noldan/AppTest.java",
            code: String.raw`package uz.noldan;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class AppTest {
    @Test
    void qoshish() {
        assertEquals(7, App.qosh(3, 4));
    }
}`,
            output: "Tests run: 1, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
          },
          {
            type: "code",
            title: "pom.xml",
            lang: "xml",
            code: String.raw`<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>
  <groupId>uz.noldan</groupId>
  <artifactId>salom-maven</artifactId>
  <version>1.0.0</version>

  <properties>
    <maven.compiler.release>17</maven.compiler.release>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.10.2</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>`,
            output: "BUILD SUCCESS",
            outputLabel: "mvn test natijasi (qisqartirilgan)",
          },
          {
            type: "table",
            head: ["Buyruq", "Vazifasi"],
            rows: [
              ["<code>mvn compile</code>", "Kodni kompilyatsiya qiladi"],
              ["<code>mvn test</code>", "Testlarni ishga tushiradi"],
              ["<code>mvn package</code>", "JAR/WAR yaratadi"],
              ["<code>mvn clean</code>", "Build natijalarini tozalaydi"],
              ["<code>gradle build</code>", "Gradle'da kompilyatsiya va test"],
              ["<code>./gradlew build</code>", "Wrapper orqali Gradle ishga tushirish"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Standart tuzilma va wrapper",
            html: "Maven standart joylashuvni kutadi: <code>src/main/java</code> asosiy kod, <code>src/test/java</code> testlar, <code>src/main/resources</code> resurslar. <code>mvnw</code> / <code>gradlew</code> wrapper buyruqlari loyihaga mos build versiyasini yuklab ishlatadi, shuning uchun jamoada bir xil natija bo'ladi. JAR ichidagi <code>META-INF/MANIFEST.MF</code> da asosiy klassni ko'rsatish uchun Maven'da <code>maven-jar-plugin</code> sozlanadi.",
          },
        ],
        quiz: [
          {
            q: "Maven loyihasida asosiy Java kodi qaysi papkada joylashadi?",
            options: ["src", "src/main/java", "bin", "lib"],
            answer: 1,
            explain: "Maven konvensiyasi bo'yicha asosiy kod src/main/java, testlar src/test/java da bo'ladi.",
          },
          {
            q: "Testlarni ishga tushirish uchun qaysi Maven buyrug'i ishlatiladi?",
            options: ["mvn package faqat", "mvn clean", "mvn test", "mvn install faqat"],
            answer: 2,
            explain: "mvn test kompilyatsiya qilib, testlarni bajaradi. package ham testlardan o'tadi, lekin aniq maqsad uchun test ishlatiladi.",
          },
          {
            q: "Gradle wrapper fayli qanday nomlanadi?",
            options: ["gradlew (Windows: gradlew.bat)", "gradle.xml", "wrapper.jar", "build.gradle faqat"],
            answer: 0,
            explain: "gradlew Unix, gradlew.bat Windows uchun wrapper skripti; u loyihaga kerakli Gradle versiyasini yuklaydi.",
          },
        ],
      },
      {
        id: 40,
        title: "Logging: SLF4J va Logback",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<code>System.out.println</code> faqat o'quv dasturlarida mos. Haqiqiy ilovada <b>logging</b> ishlatiladi: xabarlar darajaga bo'linadi, vaqt va thread qo'shiladi, faylga yoziladi, ishlab chiqarishda daraja o'zgartiriladi. SLF4J — logging uchun yagona API, Logback esa uning keng tarqalgan amalga oshirilishi.",
          },
          {
            type: "code",
            title: "LogDemo.java",
            code: String.raw`import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogDemo {
    private static final Logger log = LoggerFactory.getLogger(LogDemo.class);

    public static void main(String[] args) {
        log.info("Dastur boshlandi");
        int foydalanuvchi = 42;
        log.info("Foydalanuvchi: {}", foydalanuvchi);
        try {
            int natija = 10 / 0;
            System.out.println(natija);
        } catch (ArithmeticException e) {
            log.error("Hisoblash xatosi: {}", e.getMessage());
        }
        log.warn("Bu ogohlantirish");
    }
}`,
            output:
              "INFO LogDemo - Dastur boshlandi\nINFO LogDemo - Foydalanuvchi: 42\nERROR LogDemo - Hisoblash xatosi: / by zero\nWARN LogDemo - Bu ogohlantirish",
          },
          {
            type: "note",
            variant: "info",
            title: "Logback sozlamasi",
            html: "<code>src/main/resources/logback.xml</code> faylida pattern va daraja belgilanadi. Masalan, <code>&lt;pattern&gt;%level %logger{0} - %msg%n&lt;/pattern&gt;</code> yuqoridagi qisqa chiqishni beradi. Namunada root daraja <code>INFO</code> qilib belgilangan, shuning uchun DEBUG va TRACE xabarlari ko'rinmaydi. Ishlab chiqarishda fayl appender va rotatsiya qo'shiladi, konsolga cheksiz yozishdan saqlanadi.",
          },
          {
            type: "code",
            title: "Darajalar.java",
            code: String.raw`import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Darajalar {
    private static final Logger log = LoggerFactory.getLogger(Darajalar.class);

    public static void main(String[] args) {
        log.trace("batafsil kuzatuv");
        log.debug("nosozliklarni tuzatish");
        log.info("muhim hodisa");
        log.warn("ehtiyot bo'lish kerak");
        log.error("xato yuz berdi");

        if (log.isDebugEnabled()) {
            log.debug("Qimmat hisob natijasi: {}", hisob());
        }
    }

    static int hisob() {
        int jami = 0;
        for (int i = 1; i <= 10; i++) jami += i;
        return jami;
    }
}`,
            output:
              "INFO Darajalar - muhim hodisa\nWARN Darajalar - ehtiyot bo'lish kerak\nERROR Darajalar - xato yuz berdi",
          },
          {
            type: "table",
            head: ["Daraja", "Qachon ishlatiladi"],
            rows: [
              ["<code>TRACE</code>", "Eng batafsil kuzatuv"],
              ["<code>DEBUG</code>", "Ishlab chiqishda tafsilotlar"],
              ["<code>INFO</code>", "Muhim biznes hodisalari"],
              ["<code>WARN</code>", "Potensial muammo"],
              ["<code>ERROR</code>", "Bajarilmagan amal yoki istisno"],
            ],
          },
        ],
        quiz: [
          {
            q: "INFO darajasi nimani bildiradi?",
            options: ["Faqat xatolarni", "Eng batafsil kuzatuvni", "Oddiy muhim hodisani", "Dastur to'xtaganini"],
            answer: 2,
            explain: "INFO odatdagi muhim hodisalar uchun: ilova boshlandi, foydalanuvchi kirdi, hisobot tayyorlandi.",
          },
          {
            q: "Log xabariga o'zgaruvchini xavfsiz va samarali qo'shish usuli qaysi?",
            options: ["Satr birlashtirish har doim", "Faqat System.out orqali", "e.printStackTrace() bilan", "log.info(\"Foydalanuvchi: {}\", qiymat) parametrlangan yozuv"],
            answer: 3,
            explain: "SLF4J {} joy egasi qiymatni keyin qo'shadi; daraja o'chirilgan bo'lsa satr qurilmaydi.",
          },
          {
            q: "TRACE va DEBUG darajalari odatda qachon yoqiladi?",
            options: ["Doim ishlab chiqarishda", "Muammoni tekshirish paytida", "Faqat testlarda", "Hech qachon"],
            answer: 1,
            explain: "Bu darajalar juda ko'p ma'lumot beradi; odatda faqat diagnostika vaqtida vaqtincha yoqiladi.",
          },
        ],
      },
      {
        id: 41,
        title: "Reflection va annotatsiyalar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "<b>Reflection</b> dasturga o'z klasslari haqida runtime'da ma'lumot olish imkonini beradi: maydonlar, metodlar, konstruktorlar, annotatsiyalar. <b>Annotatsiya</b> — kodga qo'shiladigan metama'lumot; u o'zi hech narsa qilmaydi, uni o'qiydigan framework yoki kod ishga tushiradi. Spring, JUnit va Jackson shu mexanizmlarga tayanadi.",
          },
          {
            type: "code",
            title: "Refleksiya.java",
            code: String.raw`import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.Method;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface Info {
    String muallif();
    int versiya() default 1;
}

@Info(muallif = "Noldan", versiya = 2)
class Hisob {
    public int qosh(int a, int b) {
        return a + b;
    }

    private String sir() {
        return "yashirin";
    }
}

public class Refleksiya {
    public static void main(String[] args) throws Exception {
        Class<?> klass = Hisob.class;
        Info info = klass.getAnnotation(Info.class);
        System.out.println(info.muallif() + " v" + info.versiya());

        java.util.Arrays.stream(klass.getDeclaredMethods())
            .map(Method::getName)
            .sorted()
            .forEach(System.out::println);

        Object obyekt = klass.getDeclaredConstructor().newInstance();
        Method qosh = klass.getMethod("qosh", int.class, int.class);
        System.out.println(qosh.invoke(obyekt, 2, 3));

        Method sir = klass.getDeclaredMethod("sir");
        sir.setAccessible(true);
        System.out.println(sir.invoke(obyekt));
    }
}`,
            output: "Noldan v2\nqosh\nsir\n5\nyashirin",
          },
          {
            type: "table",
            head: ["Klass", "Nima beradi"],
            rows: [
              ["<code>Class&lt;?&gt;</code>", "Klass metama'lumoti"],
              ["<code>Method</code>", "Metod haqida ma'lumot va invoke"],
              ["<code>Field</code>", "Maydon qiymatini o'qish/yozish"],
              ["<code>Constructor</code>", "Yangi nusxa yaratish"],
              ["<code>Annotation</code>", "Metama'lumotni o'qish"],
            ],
          },
          {
            type: "code",
            title: "Tekshiruv.java",
            code: String.raw`import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.Field;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface Majburiy {}

class Foydalanuvchi {
    @Majburiy
    String ism = "Aziza";

    @Majburiy
    String email;
}

public class Tekshiruv {
    public static void main(String[] args) throws Exception {
        Foydalanuvchi f = new Foydalanuvchi();
        int xatolar = 0;

        for (Field maydon : Foydalanuvchi.class.getDeclaredFields()) {
            if (maydon.isAnnotationPresent(Majburiy.class)) {
                maydon.setAccessible(true);
                Object qiymat = maydon.get(f);
                if (qiymat == null || qiymat.toString().isBlank()) {
                    System.out.println("To'ldirilmagan: " + maydon.getName());
                    xatolar++;
                }
            }
        }

        System.out.println("Xatolar: " + xatolar);
    }
}`,
            output: "To'ldirilmagan: email\nXatolar: 1",
          },
          {
            type: "note",
            variant: "warning",
            title: "Reflection narxi va xavfsizligi",
            html: "Reflection sekinroq va kompilyator tekshiruvini chetlab o'tadi: nomdagi xato faqat runtime'da chiqadi. <code>setAccessible(true)</code> inkapsulyatsiyani buzadi va modul tizimida cheklanishi mumkin. Uni faqat framework, test yoki kutubxona yozishda ishlating. <code>RetentionPolicy.RUNTIME</code> bo'lmasa annotatsiya runtime'da ko'rinmaydi: CLASS faqat bytecode'da, SOURCE faqat kompilyatsiyada qoladi.",
          },
        ],
        quiz: [
          {
            q: "Annotatsiya runtime'da ko'rinishi uchun qaysi retention siyosati kerak?",
            options: ["SOURCE", "CLASS", "RUNTIME", "DEFAULT"],
            answer: 2,
            explain: "RetentionPolicy.RUNTIME annotatsiyani reflection orqali o'qish imkonini beradi.",
          },
          {
            q: "Klass nomidan Class obyekti olishning to'g'ri usuli qaysi?",
            options: ["Hisob.class yoki Class.forName(...)", "new Class()", "Class.of(Hisob)", "Hisob.getClass()"],
            answer: 0,
            explain: "Hisob.class kompilyatsiya vaqtida, Class.forName(\"Hisob\") nom bo'yicha Class obyektini beradi.",
          },
          {
            q: "private metodni reflection bilan chaqirish uchun nima qilinadi?",
            options: ["Metod public qilinadi", "Faqat nomi bilan chaqiriladi", "setAccessible(true) qilib invoke() chaqiriladi", "Reflection private metodlarni ko'rmaydi"],
            answer: 2,
            explain: "getDeclaredMethod private metodni topadi, setAccessible(true) ruxsat beradi, invoke uni bajaradi.",
          },
        ],
      },
      {
        id: 42,
        title: "Dizayn patternlar: Builder, Factory, Strategy",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Dizayn pattern — tez-tez uchraydigan loyihalash muammosining sinalgan yechimi. Ular kodni takrorlashdan saqlaydi va o'zgarishlarni osonlashtiradi. Eng ko'p ishlatiladiganlari: <b>Builder</b> — murakkab obyektni bosqichma-bosqich yig'ish; <b>Factory</b> — obyekt yaratishni markazlashtirish; <b>Strategy</b> — algoritmni ish vaqtida almashtirish.",
          },
          {
            type: "code",
            title: "BuilderDemo.java",
            code: String.raw`final class Buyurtma {
    private final String mahsulot;
    private final int soni;
    private final boolean tez;

    private Buyurtma(Builder b) {
        this.mahsulot = b.mahsulot;
        this.soni = b.soni;
        this.tez = b.tez;
    }

    static class Builder {
        private String mahsulot = "noma'lum";
        private int soni = 1;
        private boolean tez;

        Builder mahsulot(String mahsulot) {
            this.mahsulot = mahsulot;
            return this;
        }

        Builder soni(int soni) {
            this.soni = soni;
            return this;
        }

        Builder tez(boolean tez) {
            this.tez = tez;
            return this;
        }

        Buyurtma build() {
            return new Buyurtma(this);
        }
    }

    @Override
    public String toString() {
        return "Buyurtma{" + mahsulot + " x" + soni + ", tez=" + tez + "}";
    }
}

public class BuilderDemo {
    public static void main(String[] args) {
        Buyurtma b = new Buyurtma.Builder()
            .mahsulot("Kitob")
            .soni(2)
            .tez(true)
            .build();
        System.out.println(b);
    }
}`,
            output: "Buyurtma{Kitob x2, tez=true}",
          },
          {
            type: "note",
            variant: "tip",
            title: "Builder qachon kerak?",
            html: "Konstruktorda 4-5 dan ortiq parametr bo'lsa yoki ko'p ixtiyoriy maydon bo'lsa Builder o'qishli bo'ladi. U obyektni o'zgarmas qilib saqlashga yordam beradi. Kichik record yoki 2-3 parametrli konstruktorda Builder ortiqcha murakkablik keltiradi. Lombok kabi kutubxonalar Builder'ni avtomatik yaratadi, lekin uning ishlashini bilish muhim.",
          },
          {
            type: "code",
            title: "StrategyDemo.java",
            code: String.raw`interface Chegirma {
    int hisobla(int summa);
}

class OddiyChegirma implements Chegirma {
    public int hisobla(int summa) {
        return summa;
    }
}

class TalabaChegirma implements Chegirma {
    public int hisobla(int summa) {
        return summa * 90 / 100;
    }
}

class ChegirmaFactory {
    static Chegirma ol(String tur) {
        return switch (tur) {
            case "talaba" -> new TalabaChegirma();
            default -> new OddiyChegirma();
        };
    }
}

public class StrategyDemo {
    public static void main(String[] args) {
        for (String tur : new String[]{"talaba", "mehmon"}) {
            Chegirma c = ChegirmaFactory.ol(tur);
            System.out.println(tur + ": " + c.hisobla(100000));
        }
    }
}`,
            output: "talaba: 90000\nmehmon: 100000",
          },
          {
            type: "table",
            head: ["Pattern", "Muammo", "Yechim"],
            rows: [
              ["Builder", "Ko'p parametrli obyekt", "Zanjirli qurish"],
              ["Factory", "Yaratish mantiqini yashirish", "Markaziy yaratuvchi metod"],
              ["Strategy", "Algoritmni almashtirish", "Umumiy interfeys + turli klasslar"],
              ["Singleton", "Bitta nusxa kerak", "Yopiq konstruktor + statik nusxa"],
              ["Observer", "Bir voqeaga ko'p kuzatuvchi", "Ro'yxatga olingan listenerlar"],
            ],
          },
        ],
        quiz: [
          {
            q: "Builder pattern nima uchun ishlatiladi?",
            options: ["Ko'p parametrli obyektni bosqichma-bosqich yig'ish uchun", "Faqat sonlarni saralash uchun", "Threadlarni bloklash uchun", "Faylni o'chirish uchun"],
            answer: 0,
            explain: "Builder har bir ixtiyoriy maydonni alohida metod bilan o'rnatib, oxirida build() bilan obyekt yaratadi.",
          },
          {
            q: "Strategy pattern nimani almashtirish imkonini beradi?",
            options: ["Ma'lumotlar bazasini", "Algoritmni ish vaqtida tanlash imkonini", "Fayl tizimini", "JVM versiyasini"],
            answer: 1,
            explain: "Strategy umumiy interfeys ostida turli algoritmlarni beradi; mijoz kod qaysi biri ishlatilishini tanlaydi.",
          },
          {
            q: "Singleton patternning asosiy g'oyasi nima?",
            options: ["Har chaqiruvda yangi obyekt", "Faqat interfeys yaratish", "Ko'p thread yaratish", "Klassdan faqat bitta nusxa bo'lishi"],
            answer: 3,
            explain: "Singleton yagona nusxani kafolatlaydi; konstruktor private, nusxa statik maydonda saqlanadi.",
          },
        ],
      },
      {
        id: 43,
        title: "GC va xotira modeli",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "JVM xotirasi asosan <b>stack</b> va <b>heap</b> ga bo'linadi. Stack metod chaqiruvlari va lokal o'zgaruvchilarni saqlaydi, heap esa <code>new</code> bilan yaratilgan obyektlarni. <b>Garbage Collector</b> (GC) hech kim ko'rsatmayotgan obyektlarni avtomatik tozalaydi. Dasturchi xotirani qo'lda bo'shatmaydi, lekin keraksiz havolalarni ushlab turmasligi kerak.",
          },
          {
            type: "code",
            title: "Xotira.java",
            code: String.raw`import java.util.ArrayList;
import java.util.List;

class Kesh {
    private static final List<byte[]> XOTIRA = new ArrayList<>();

    static void qosh(int megabayt) {
        for (int i = 0; i < megabayt; i++) {
            XOTIRA.add(new byte[1024 * 1024]);
        }
    }

    static int hajm() {
        return XOTIRA.size();
    }

    static void tozala() {
        XOTIRA.clear();
    }
}

public class Xotira {
    public static void main(String[] args) {
        Kesh.qosh(3);
        System.out.println(Kesh.hajm());
        Kesh.tozala();
        System.out.println(Kesh.hajm());
        System.out.println(Runtime.getRuntime().maxMemory() > 0);
    }
}`,
            output: "3\n0\ntrue",
          },
          {
            type: "note",
            variant: "warning",
            title: "Xotira sizib chiqishi",
            html: "Obyekt ishlatilmasa ham unga tirik havola bo'lsa, GC uni tozalay olmaydi. Ko'p uchraydigan sabablar: cheksiz o'sadigan statik ro'yxat, yopilmagan listener, <code>ThreadLocal</code> va keshni tozalamaslik. <code>static</code> kolleksiyalar dastur tugaguncha yashaydi. Keshga hajm chegarasi yoki <code>WeakHashMap</code>, Caffeine kabi yechim qo'llang.",
          },
          {
            type: "code",
            title: "Stek.java",
            code: String.raw`public class Stek {
    static int chuqurlik = 0;

    static void rekursiya() {
        chuqurlik++;
        rekursiya();
    }

    public static void main(String[] args) {
        try {
            rekursiya();
        } catch (StackOverflowError e) {
            System.out.println("StackOverflowError ushlandi");
            System.out.println(chuqurlik > 100);
        }
    }
}`,
            output: "StackOverflowError ushlandi\ntrue",
          },
          {
            type: "table",
            head: ["Soha", "Nima saqlanadi", "Tozalash"],
            rows: [
              ["Stack", "Metod chaqiruvlari, lokal o'zgaruvchilar", "Metod tugagach avtomatik"],
              ["Heap", "Obyektlar va massivlar", "GC tomonidan"],
              ["Metaspace", "Klass metama'lumoti", "Klass yuklanmasa"],
              ["Young generation", "Yangi obyektlar", "Minor GC"],
              ["Old generation", "Uzoq yashovchi obyektlar", "Major GC"],
            ],
          },
        ],
        quiz: [
          {
            q: "Qaysi xotira sohasida obyektlar saqlanadi?",
            options: ["Stack", "Heap", "Registr", "Metaspace"],
            answer: 1,
            explain: "new bilan yaratilgan obyektlar heap'da joylashadi; stack metod chaqiruvlarini saqlaydi.",
          },
          {
            q: "Obyekt qachon GC uchun mos bo'ladi?",
            options: ["Yaratilgandan darhol", "Metod tugagach har doim", "Faqat System.gc chaqirilganda", "Unga hech qanday tirik havola qolmasa"],
            answer: 3,
            explain: "GC ildizlardan (stack, statik maydonlar) yetib bo'lmaydigan obyektlarni tozalaydi.",
          },
          {
            q: "G1 qaysi Java versiyasidan boshlab standart GC bo'ldi?",
            options: ["Java 9", "Java 8", "Java 11", "Java 17"],
            answer: 0,
            explain: "G1 Java 9 da standart GC bo'ldi; Java 17 da ham standart hisoblanadi.",
          },
        ],
      },
      {
        id: 44,
        title: "Performance: o'lchash va optimallashtirish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Performance — kodning vaqt va xotirani qanchalik tejamli ishlatishi. Avval o'lchang, keyin optimallashtiring: <b>profiler</b> va benchmark haqiqiy muammoni ko'rsatadi. Algoritm murakkabligi eng katta ta'sirga ega: O(n²) algoritm kichik ma'lumotda sezilmasa ham, katta hajmda halokatli bo'ladi.",
          },
          {
            type: "code",
            title: "Qadamlar.java",
            code: String.raw`public class Qadamlar {
    static int chiziqli(int[] sonlar, int izlanayotgan) {
        int qadam = 0;
        for (int son : sonlar) {
            qadam++;
            if (son == izlanayotgan) break;
        }
        return qadam;
    }

    static int ikkilik(int[] sonlar, int izlanayotgan) {
        int chap = 0;
        int ong = sonlar.length - 1;
        int qadam = 0;
        while (chap <= ong) {
            qadam++;
            int orta = (chap + ong) / 2;
            if (sonlar[orta] == izlanayotgan) break;
            if (sonlar[orta] < izlanayotgan) chap = orta + 1;
            else ong = orta - 1;
        }
        return qadam;
    }

    public static void main(String[] args) {
        int[] sonlar = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println(chiziqli(sonlar, 15));
        System.out.println(ikkilik(sonlar, 15));
        System.out.println(ikkilik(sonlar, 1));
    }
}`,
            output: "8\n4\n3",
          },
          {
            type: "table",
            head: ["Murakkablik", "Ma'nosi", "Misol"],
            rows: [
              ["O(1)", "Doimiy vaqt", "Massiv indeksi"],
              ["O(log n)", "Har qadamda ikkiga bo'linish", "Ikkilik qidiruv"],
              ["O(n)", "Barcha elementlardan bir marta o'tish", "Chiziqli qidiruv"],
              ["O(n log n)", "Yaxshi saralash", "Merge sort"],
              ["O(n²)", "Ichma-ich tsikl", "Oddiy saralash"],
            ],
          },
          {
            type: "code",
            title: "Matnlar.java",
            code: String.raw`public class Matnlar {
    public static void main(String[] args) {
        String oddiy = "";
        for (int i = 1; i <= 4; i++) {
            oddiy += i;
        }

        StringBuilder tez = new StringBuilder();
        for (int i = 1; i <= 4; i++) {
            tez.append(i);
        }

        System.out.println(oddiy);
        System.out.println(tez);
        System.out.println(oddiy.contentEquals(tez));
    }
}`,
            output: "1234\n1234\ntrue",
          },
          {
            type: "note",
            variant: "tip",
            title: "Mikrobenchmark va JMH",
            html: "Tsikl ichida <code>String +</code> ishlatish har safar yangi obyekt yaratadi va O(n²) xotira sarfiga olib keladi; <code>StringBuilder</code> esa bitta buferda yig'adi. <code>System.nanoTime()</code> bilan bir marta o'lchash ishonchsiz: JIT isishi va GC ta'sir qiladi. Jiddiy o'lchov uchun <b>JMH</b> ishlatiladi. Optimallashtirishdan oldin profiler bilan eng qimmat joyni toping.",
          },
        ],
        quiz: [
          {
            q: "O(log n) murakkablik nimani bildiradi?",
            options: ["Har qadamda ish hajmi ikki baravar kamayadi", "Vaqt elementlar soniga to'g'ri proporsional", "Vaqt kvadratga bog'liq", "Doimiy vaqt"],
            answer: 0,
            explain: "Logarifmik murakkablikda har qadamda qidiruv maydoni taxminan ikkiga bo'linadi, masalan ikkilik qidiruv.",
          },
          {
            q: "Tsiklda matnni + bilan birlashtirish nega sekin?",
            options: ["Har safar yangi String obyekti yaratiladi", "Java satrlarni qo'shishni bilmaydi", "Faqat katta harflar uchun ishlaydi", "Xotira umuman ishlatilmaydi"],
            answer: 0,
            explain: "String o'zgarmas; har bir + yangi obyekt va nusxa yaratadi. StringBuilder o'zgaruvchan buferdan foydalanadi.",
          },
          {
            q: "Java performance'ini ishonchli o'lchash uchun qaysi vosita mos?",
            options: ["System.currentTimeMillis bir marta", "JMH", "println soni", "Fayl hajmi"],
            answer: 1,
            explain: "JMH JIT, GC va isish effektlarini hisobga oladigan to'g'ri benchmark framework'i.",
          },
        ],
      },
      {
        id: 45,
        title: "Spring Boot asoslari: birinchi ilova",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Spring Boot Java'da veb-ilova va mikroservis yaratishni soddalashtiradi. U embedded Tomcat serverni, avtomatik konfiguratsiyani va dependency injection'ni bir joyga yig'adi. <code>@SpringBootApplication</code> asosiy klassni belgilaydi, <code>@RestController</code> esa HTTP so'rovlarini qabul qiluvchi klassni yaratadi. Ishga tushirish uchun oddiy <code>main</code> yetarli.",
          },
          {
            type: "code",
            title: "NoldanApplication.java",
            code: String.raw`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class NoldanApplication {
    public static void main(String[] args) {
        SpringApplication.run(NoldanApplication.class, args);
    }

    @GetMapping("/salom")
    public String salom() {
        return "Salom, Spring!";
    }
}`,
            output:
              "Tomcat started on port 8080 (http)\nStarted NoldanApplication in 1.842 seconds (JVM running for 2.231)",
            outputLabel: "Ishga tushish jurnali (qisqartirilgan)",
          },
          {
            type: "table",
            head: ["Annotatsiya", "Vazifasi"],
            rows: [
              ["<code>@SpringBootApplication</code>", "Konfiguratsiya, auto-configuration, component scan"],
              ["<code>@RestController</code>", "HTTP so'rovlarini qabul qiladi, javobni JSON/matnga aylantiradi"],
              ["<code>@GetMapping</code>", "GET so'rovini metodga bog'laydi"],
              ["<code>@Service</code>", "Biznes mantiq komponenti"],
              ["<code>@Repository</code>", "Ma'lumotlarga kirish komponenti"],
              ["<code>@Autowired</code>", "Bog'liqlikni avtomatik uzatish (konstruktor orqali ham)"],
            ],
          },
          {
            type: "code",
            title: "TalabaController.java",
            code: String.raw`import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/talabalar")
public class TalabaController {
    private final TalabaService service;

    public TalabaController(TalabaService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Talaba bitta(@PathVariable int id) {
        return service.topish(id);
    }
}

record Talaba(int id, String ism, int ball) {}

@Service
class TalabaService {
    Talaba topish(int id) {
        return new Talaba(id, "Aziza", 92);
    }
}`,
            output: "{\"id\":1,\"ism\":\"Aziza\",\"ball\":92}",
            outputLabel: "GET /api/talabalar/1 javobi",
          },
          {
            type: "note",
            variant: "info",
            title: "Loyihani yaratish",
            html: "Spring Initializr orqali <code>spring-boot-starter-web</code> qo'shilgan loyiha yaratiladi. Spring Boot 3 Java 17 ni talab qiladi. <code>mvn spring-boot:run</code> yoki IDE orqali ishga tushiriladi. Standart port 8080; uni <code>application.properties</code> da <code>server.port=9090</code> bilan o'zgartirish mumkin. Dependency injection konstruktor orqali qilinishi test qilishni osonlashtiradi.",
          },
        ],
        quiz: [
          {
            q: "@SpringBootApplication nimani birlashtiradi?",
            options: ["Faqat REST kontrollerni", "Faqat ma'lumotlar bazasini", "Faqat testlarni", "Konfiguratsiya, avtomatik konfiguratsiya va komponentlarni skanerlashni"],
            answer: 3,
            explain: "@SpringBootApplication @Configuration, @EnableAutoConfiguration va @ComponentScan ni birga beradi.",
          },
          {
            q: "REST javobini JSON qilish uchun odatda qaysi starter ishlatiladi?",
            options: ["spring-boot-starter-test", "spring-boot-starter-web", "spring-boot-starter-jdbc", "spring-boot-starter-logging"],
            answer: 1,
            explain: "starter-web Spring MVC, embedded Tomcat va Jackson'ni olib keladi, shu bilan JSON javob ishlaydi.",
          },
          {
            q: "Dependency injection'ning asosiy afzalligi nima?",
            options: ["Komponentlar orasidagi bog'liqlikni tashqaridan boshqarish", "Kodni kompilyatsiya qilmaslik", "Faqat bitta klass yozish", "Threadlarni avtomatik yaratish"],
            answer: 0,
            explain: "DI komponentlarni o'zi yaratmay, tashqi konteynerdan oladi; bu test va almashtirishni osonlashtiradi.",
          },
        ],
      },
      {
        id: 46,
        title: "REST API dizayni va HTTP semantikasi",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "REST — resurslarga HTTP metodlari orqali murojaat qilish uslubi. <code>GET</code> o'qiydi, <code>POST</code> yaratadi, <code>PUT</code> to'liq yangilaydi, <code>PATCH</code> qismini, <code>DELETE</code> o'chiradi. Yaxshi API resurs nomini ot ko'plikda beradi: <code>/api/v1/talabalar</code>. Status kod javobning ma'nosini aniq bildiradi.",
          },
          {
            type: "code",
            title: "TalabaController.java",
            code: String.raw`import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

record Talaba(int id, String ism, int ball) {}

@RestController
@RequestMapping("/api/v1/talabalar")
public class TalabaController {
    private final Map<Integer, Talaba> baza = new ConcurrentHashMap<>();
    private final AtomicInteger ketmaKet = new AtomicInteger();

    @GetMapping
    public Collection<Talaba> hammasi() {
        return baza.values();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Talaba qosh(@RequestBody Talaba sorov) {
        int id = ketmaKet.incrementAndGet();
        Talaba yangi = new Talaba(id, sorov.ism(), sorov.ball());
        baza.put(id, yangi);
        return yangi;
    }

    @GetMapping("/{id}")
    public Talaba bitta(@PathVariable int id) {
        Talaba t = baza.get(id);
        if (t == null) {
            throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Talaba topilmadi");
        }
        return t;
    }
}`,
            output:
              "POST /api/v1/talabalar -> 201 Created\n{\"id\":1,\"ism\":\"Aziza\",\"ball\":92}\nGET /api/v1/talabalar/99 -> 404 Not Found",
            outputLabel: "So'rovlar natijasi",
          },
          {
            type: "table",
            head: ["Status", "Ma'nosi", "Qachon"],
            rows: [
              ["200 OK", "Muvaffaqiyat", "GET, PUT, PATCH"],
              ["201 Created", "Yangi resurs yaratildi", "POST"],
              ["204 No Content", "Muvaffaqiyat, tana yo'q", "DELETE"],
              ["400 Bad Request", "So'rov noto'g'ri", "Validatsiya xatosi"],
              ["401/403", "Ruxsat yo'q", "Autentifikatsiya/avtorizatsiya"],
              ["404 Not Found", "Resurs topilmadi", "Mavjud bo'lmagan id"],
              ["500 Internal Server Error", "Server xatosi", "Kutilmagan istisno"],
            ],
          },
          {
            type: "code",
            title: "XatoUshlagich.java",
            code: String.raw`import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

record TalabaSorovi(
    @NotBlank(message = "ism bo'sh bo'lmasin") String ism,
    @Min(value = 0, message = "ball 0 dan kichik")
    @Max(value = 100, message = "ball 100 dan katta") int ball) {}

record XatoJavobi(String maydon, String xabar) {}

@RestController
@RequestMapping("/api/v1/talabalar")
class TekshiruvController {
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    TalabaSorovi qosh(@Valid @RequestBody TalabaSorovi sorov) {
        return sorov;
    }
}

@RestControllerAdvice
class XatoUshlagich {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    XatoJavobi notogri(MethodArgumentNotValidException e) {
        var xato = e.getBindingResult().getFieldError();
        return new XatoJavobi(xato.getField(), xato.getDefaultMessage());
    }
}`,
            output: "400 Bad Request\n{\"maydon\":\"ism\",\"xabar\":\"ism bo'sh bo'lmasin\"}",
            outputLabel: "Validatsiya xatosi javobi",
          },
          {
            type: "note",
            variant: "warning",
            title: "API dizayni qoidalari",
            html: "Resurs yo'lida fe'l ishlatmang: <code>/getTalaba</code> emas, <code>/talabalar/{id}</code>. Versiyani yo'lda yoki sarlavhada bering: <code>/api/v1/...</code>. Ro'yxat uchun sahifalash qo'shing: <code>?page=0&amp;size=20</code>. Xato javobi ham barqaror formatda bo'lsin. <code>GET</code> va <code>PUT</code> idempotent: bir xil so'rovni takrorlash holatni o'zgartirmaydi. Maxfiy ma'lumotlarni javobga qo'shmang. Validatsiya uchun <code>spring-boot-starter-validation</code> bog'liqligi qo'shiladi.",
          },
        ],
        quiz: [
          {
            q: "POST so'rovi muvaffaqiyatli yangi resurs yaratsa, odatda qaysi status qaytariladi?",
            options: ["201 Created", "200 OK", "204 No Content", "301 Moved"],
            answer: 0,
            explain: "201 Created yangi resurs yaratilganini bildiradi; Location sarlavhasida uning manzili berilishi mumkin.",
          },
          {
            q: "GET so'rovi idempotentmi?",
            options: ["Yo'q, har safar holat o'zgaradi", "Faqat POST bilan birga", "Ha, takroriy chaqiruv holatni o'zgartirmaydi", "Faqat autentifikatsiyada"],
            answer: 2,
            explain: "GET faqat o'qiydi; uni bir necha marta chaqirish server holatini o'zgartirmaydi.",
          },
          {
            q: "REST resurs yo'li qanday bo'lishi ma'qul?",
            options: ["Fe'l bilan: /getAll", "Fayl nomi bilan: /talaba.java", "Tasodifiy raqam bilan", "Otdan iborat ko'plik: /talabalar"],
            answer: 3,
            explain: "REST resurslarni ot bilan nomlaydi; amalni HTTP metodi bildiradi, yo'lda fe'l kerak emas.",
          },
        ],
      },
      {
        id: 47,
        title: "Loyiha 1: kutubxona modeli va ro'yxat",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi bir necha dars davom etadigan loyihani boshlaymiz: <b>kutubxona boshqaruv tizimi</b>. Birinchi qadamda domen modelini yaratamiz: <code>Kitob</code> recordi, <code>Janr</code> enumeratsiyasi va kitoblarni saqlaydigan <code>Kutubxona</code> klassi. Ma'lumotlar xotirada saqlanadi, keyingi darslarda qarz berish, hisobot va faylga saqlash qo'shiladi.",
          },
          {
            type: "code",
            title: "Kitob.java",
            code: String.raw`import java.util.List;

enum Janr { ROMAN, ILMIY, TARIX }

record Kitob(int id, String nom, String muallif, Janr janr, int nusxa) {
    Kitob {
        if (id <= 0) {
            throw new IllegalArgumentException("id musbat bo'lishi kerak");
        }
        if (nom == null || nom.isBlank()) {
            throw new IllegalArgumentException("nom bo'sh bo'lmasin");
        }
        if (nusxa < 0) {
            throw new IllegalArgumentException("nusxa manfiy bo'lmasin");
        }
    }

    public static void main(String[] args) {
        Kitob k = new Kitob(1, "O'tkan kunlar", "Abdulla Qodiriy", Janr.ROMAN, 3);
        System.out.println(k);
        System.out.println(k.nom() + " / " + k.janr());
        System.out.println(k.equals(new Kitob(
            1, "O'tkan kunlar", "Abdulla Qodiriy", Janr.ROMAN, 3)));
    }
}`,
            output:
              "Kitob[id=1, nom=O'tkan kunlar, muallif=Abdulla Qodiriy, janr=ROMAN, nusxa=3]\nO'tkan kunlar / ROMAN\ntrue",
          },
          {
            type: "note",
            variant: "info",
            title: "Nega record va enum?",
            html: "Kitob — sof ma'lumot tashuvchi obyekt, shuning uchun record mos: aksessorlar va tenglik avtomatik. Janr uchun enum xavfsiz: noto'g'ri janr nomi kompilyatsiyada ushlanadi. Kompakt konstruktordagi tekshiruvlar modelni yaroqsiz holatda yaratilishidan saqlaydi. <code>List</code> importi keyingi misolda ishlatiladi.",
          },
          {
            type: "code",
            title: "Kutubxona.java",
            code: String.raw`import java.util.ArrayList;
import java.util.List;

public class Kutubxona {
    private final List<Kitob> kitoblar = new ArrayList<>();

    void qosh(Kitob k) {
        kitoblar.add(k);
    }

    List<Kitob> hammasi() {
        return List.copyOf(kitoblar);
    }

    List<Kitob> qidir(String soz) {
        String qidiruv = soz.toLowerCase();
        return kitoblar.stream()
            .filter(k -> k.nom().toLowerCase().contains(qidiruv)
                || k.muallif().toLowerCase().contains(qidiruv))
            .toList();
    }

    public static void main(String[] args) {
        Kutubxona kx = new Kutubxona();
        kx.qosh(new Kitob(1, "O'tkan kunlar", "Abdulla Qodiriy", Janr.ROMAN, 3));
        kx.qosh(new Kitob(2, "Atom odatlar", "James Clear", Janr.ILMIY, 2));
        kx.qosh(new Kitob(3, "Boburnoma", "Zahiriddin Bobur", Janr.TARIX, 1));

        System.out.println("Kitoblar: " + kx.hammasi().size());
        kx.qidir("qodiriy")
            .forEach(k -> System.out.println(k.id() + " -> " + k.nom()));
        long roman = kx.hammasi().stream()
            .filter(k -> k.janr() == Janr.ROMAN)
            .count();
        System.out.println("Romanlar: " + roman);
    }
}`,
            output: "Kitoblar: 3\n1 -> O'tkan kunlar\nRomanlar: 1",
          },
          {
            type: "table",
            head: ["Fayl", "Vazifasi"],
            rows: [
              ["<code>Janr.java</code>", "Kitob janrlari"],
              ["<code>Kitob.java</code>", "O'zgarmas model, validatsiya"],
              ["<code>Kutubxona.java</code>", "Ro'yxat, qo'shish, qidirish, hisobot"],
              ["Navbatdagi dars", "Qarz berish va qaytarish qoidalari"],
              ["Yakuniy dars", "Faylga saqlash va JUnit testlari"],
            ],
          },
        ],
        quiz: [
          {
            q: "Record komponentlarini qanday o'qiymiz?",
            options: ["k.nom kabi maydonlar orqali", "k.getNom() kabi getterlar bilan", "k.nom() kabi aksessor metodlar bilan", "Faqat toString orqali"],
            answer: 2,
            explain: "Record komponentlari uchun bir xil nomli aksessor metodlar yaratiladi: k.nom(), k.nusxa().",
          },
          {
            q: "Kutubxona klassi kitoblarni qayerda saqlaydi?",
            options: ["List<Kitob> kolleksiyasida", "Bitta String o'zgaruvchida", "Faqat faylda", "Thread obyektida"],
            answer: 0,
            explain: "Birinchi versiyada kitoblar ArrayList<Kitob> ichida saqlanadi; keyin fayl qatlami qo'shiladi.",
          },
          {
            q: "Qidiruv metodida qaysi stream amallari ishlatiladi?",
            options: ["collect va partitioningBy", "reduce va teeing", "flatMap va limit", "filter va contains"],
            answer: 3,
            explain: "filter nom yoki muallifda qidiruv so'zini contains bilan tekshiradi; toList natijani yig'adi.",
          },
        ],
      },
      {
        id: 48,
        title: "Loyiha 2: qarz berish va hisobotlar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi kutubxonaga biznes qoidalarini qo'shamiz. Kitob nusxasi tugasa qarz berib bo'lmaydi, mavjud bo'lmagan id so'ralsa aniq xato chiqadi. Buning uchun o'z istisnolarimizni yaratamiz. Keyin <code>Collectors</code> yordamida janr bo'yicha hisobot va eng ko'p nusxali kitobni chiqaramiz.",
          },
          {
            type: "code",
            title: "Xizmat.java",
            code: String.raw`import java.util.HashMap;
import java.util.Map;

class KitobTopilmadi extends RuntimeException {
    KitobTopilmadi(String xabar) {
        super(xabar);
    }
}

class NusxaTugadi extends RuntimeException {
    NusxaTugadi(String xabar) {
        super(xabar);
    }
}

public class Xizmat {
    private final Map<Integer, Kitob> ombor = new HashMap<>();
    private final Map<Integer, Integer> mavjud = new HashMap<>();

    void qosh(Kitob k) {
        ombor.put(k.id(), k);
        mavjud.put(k.id(), k.nusxa());
    }

    Kitob olish(int id, int azoId) {
        Kitob k = ombor.get(id);
        if (k == null) {
            throw new KitobTopilmadi(id + " raqamli kitob yo'q");
        }
        int qoldi = mavjud.get(id);
        if (qoldi == 0) {
            throw new NusxaTugadi(k.nom() + " hozircha mavjud emas");
        }
        mavjud.put(id, qoldi - 1);
        System.out.println("Azo " + azoId + " oldi: " + k.nom());
        return k;
    }

    void qaytarish(int id) {
        mavjud.merge(id, 1, Integer::sum);
    }

    int mavjudSoni(int id) {
        return mavjud.getOrDefault(id, 0);
    }

    public static void main(String[] args) {
        Xizmat x = new Xizmat();
        x.qosh(new Kitob(1, "O'tkan kunlar", "Abdulla Qodiriy", Janr.ROMAN, 2));
        x.qosh(new Kitob(2, "Atom odatlar", "James Clear", Janr.ILMIY, 1));

        x.olish(1, 10);
        x.olish(1, 11);
        try {
            x.olish(1, 12);
        } catch (NusxaTugadi e) {
            System.out.println("Kutish: " + e.getMessage());
        }
        System.out.println("1-kitob mavjud: " + x.mavjudSoni(1));

        x.qaytarish(1);
        System.out.println("Qaytgach: " + x.mavjudSoni(1));

        try {
            x.olish(99, 10);
        } catch (KitobTopilmadi e) {
            System.out.println(e.getMessage());
        }
    }
}`,
            output:
              "Azo 10 oldi: O'tkan kunlar\nAzo 11 oldi: O'tkan kunlar\nKutish: O'tkan kunlar hozircha mavjud emas\n1-kitob mavjud: 0\nQaytgach: 1\n99 raqamli kitob yo'q",
          },
          {
            type: "table",
            head: ["Qoida", "Xatti-harakat"],
            rows: [
              ["Mavjud bo'lmagan kitob", "<code>KitobTopilmadi</code>"],
              ["Nusxa tugagan", "<code>NusxaTugadi</code>"],
              ["Qaytarish", "Mavjud nusxani bittaga oshiradi"],
              ["Qarz olish", "Mavjud nusxani bittaga kamaytiradi"],
              ["Holat", "<code>Map&lt;Integer, Integer&gt;</code> da"],
            ],
          },
          {
            type: "code",
            title: "Hisobot.java",
            code: String.raw`import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class Hisobot {
    static Map<Janr, Long> janrBoyicha(List<Kitob> kitoblar) {
        return kitoblar.stream()
            .collect(Collectors.groupingBy(
                Kitob::janr,
                TreeMap::new,
                Collectors.counting()));
    }

    static String engKatta(List<Kitob> kitoblar) {
        return kitoblar.stream()
            .max(Comparator.comparingInt(Kitob::nusxa))
            .map(Kitob::nom)
            .orElse("yo'q");
    }

    public static void main(String[] args) {
        List<Kitob> kitoblar = List.of(
            new Kitob(1, "O'tkan kunlar", "Abdulla Qodiriy", Janr.ROMAN, 3),
            new Kitob(2, "Atom odatlar", "James Clear", Janr.ILMIY, 2),
            new Kitob(3, "Sarob", "Abdulla Qahhor", Janr.ROMAN, 1),
            new Kitob(4, "Boburnoma", "Zahiriddin Bobur", Janr.TARIX, 1)
        );

        System.out.println(janrBoyicha(kitoblar));
        System.out.println("Eng ko'p nusxa: " + engKatta(kitoblar));

        Map<Boolean, List<String>> guruh = kitoblar.stream()
            .collect(Collectors.partitioningBy(
                k -> k.nusxa() > 1,
                Collectors.mapping(Kitob::nom, Collectors.toList())));
        System.out.println("Bir nechta nusxa: " + guruh.get(true));
    }
}`,
            output:
              "{ROMAN=2, ILMIY=1, TARIX=1}\nEng ko'p nusxa: O'tkan kunlar\nBir nechta nusxa: [O'tkan kunlar, Atom odatlar]",
          },
          {
            type: "note",
            variant: "tip",
            title: "Biznes qoidalari xizmat qatlamida",
            html: "Model faqat ma'lumotni tekshiradi; qarz berish, nusxa kamaytirish va hisobot kabi qoidalar <code>Xizmat</code> qatlamida turadi. Bu ajratish test yozishni osonlashtiradi: modelni alohida, xizmatni alohida tekshirish mumkin. Keyingi darsda holatni faylga saqlaymiz va JUnit bilan qoidalarni qulflaymiz.",
          },
        ],
        quiz: [
          {
            q: "Kitob nusxasi tugaganda qaysi istisno tashlanadi?",
            options: ["KitobTopilmadi", "IllegalStateException", "NusxaTugadi", "IOException"],
            answer: 2,
            explain: "NusxaTugadi RuntimeException avlodi bo'lib, mavjud nusxa nolga teng bo'lganda tashlanadi.",
          },
          {
            q: "Janr bo'yicha kitoblar sonini hisoblash uchun qaysi collector mos?",
            options: ["joining", "partitioningBy faqat", "teeing faqat", "groupingBy va counting"],
            answer: 3,
            explain: "groupingBy(Kitob::janr, ..., counting()) har bir janr uchun elementlar sonini hisoblaydi.",
          },
          {
            q: "groupingBy'ga TreeMap::new berilishining sababi nima?",
            options: ["Natija kalitlari tartibli bo'lishi uchun", "Tezlikni oshirish uchun", "Xatolarni ushlash uchun", "Faylga yozish uchun"],
            answer: 0,
            explain: "TreeMap kalitlarni tabiiy tartibda saqlaydi, shuning uchun hisobot chiqishi barqaror bo'ladi.",
          },
        ],
      },
      {
        id: 49,
        title: "Loyiha 3: faylga saqlash va testlar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Yakuniy qadamda kutubxona ma'lumotlarini faylga saqlaymiz va qayta yuklaymiz. Format oddiy: har bir qatorda kitob maydonlari nuqta-vergul bilan ajratilgan. Keyin biznes qoidalarini JUnit testlari bilan mustahkamlaymiz. Shu bilan loyiha to'liq tsiklga ega bo'ladi: model, xizmat, saqlash va test.",
          },
          {
            type: "code",
            title: "FaylOmbori.java",
            code: String.raw`import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class FaylOmbori {
    static void saqla(Path fayl, List<Kitob> kitoblar) throws IOException {
        List<String> satrlar = new ArrayList<>();
        for (Kitob k : kitoblar) {
            satrlar.add(k.id() + ";" + k.nom() + ";" + k.muallif()
                + ";" + k.janr() + ";" + k.nusxa());
        }
        Files.write(fayl, satrlar, StandardCharsets.UTF_8);
    }

    static List<Kitob> yukla(Path fayl) throws IOException {
        List<Kitob> natija = new ArrayList<>();
        for (String satr : Files.readAllLines(fayl, StandardCharsets.UTF_8)) {
            String[] qism = satr.split(";");
            natija.add(new Kitob(
                Integer.parseInt(qism[0]),
                qism[1],
                qism[2],
                Janr.valueOf(qism[3]),
                Integer.parseInt(qism[4])));
        }
        return natija;
    }

    public static void main(String[] args) throws IOException {
        Path fayl = Path.of("kutubxona.csv");
        List<Kitob> kitoblar = List.of(
            new Kitob(1, "O'tkan kunlar", "Abdulla Qodiriy", Janr.ROMAN, 3),
            new Kitob(2, "Atom odatlar", "James Clear", Janr.ILMIY, 2)
        );

        saqla(fayl, kitoblar);
        System.out.println("Fayl: " + fayl);
        System.out.println("Yozildi: " + kitoblar.size() + " ta kitob");

        List<Kitob> yuklangan = yukla(fayl);
        System.out.println("O'qildi: " + yuklangan.size() + " ta kitob");
        System.out.println("Birinchi: " + yuklangan.get(0).nom());
        System.out.println(Files.size(fayl) > 0);
    }
}`,
            output:
              "Fayl: kutubxona.csv\nYozildi: 2 ta kitob\nO'qildi: 2 ta kitob\nBirinchi: O'tkan kunlar\ntrue",
          },
          {
            type: "note",
            variant: "info",
            title: "Format tanlash",
            html: "Nuqta-vergul ajratgich oddiy holat uchun yetarli, lekin kitob nomida shu belgi uchrasa format buziladi. Ishonchli yechim — JSON yoki CSV kutubxonasi. O'quv loyihasida formatni soddalashtirish maqsadida nuqta-vergul tanlandi. Faylni yozishda <code>StandardCharsets.UTF_8</code> ko'rsatilgan, shuning uchun o'zbekcha apostrof va harflar to'g'ri saqlanadi.",
          },
          {
            type: "code",
            title: "KutubxonaTest.java",
            code: String.raw`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class KutubxonaTest {
    @Test
    void qidiruvTopadi() {
        Kutubxona kx = new Kutubxona();
        kx.qosh(new Kitob(1, "O'tkan kunlar", "Abdulla Qodiriy", Janr.ROMAN, 3));
        assertEquals(1, kx.qidir("qodiriy").size());
    }

    @Test
    void notogriKitobXato() {
        assertThrows(IllegalArgumentException.class,
            () -> new Kitob(0, "X", "Y", Janr.ROMAN, 1));
    }

    @Test
    void nusxaTugaydi() {
        Xizmat x = new Xizmat();
        x.qosh(new Kitob(2, "Atom odatlar", "James Clear", Janr.ILMIY, 1));
        x.olish(2, 1);
        assertThrows(NusxaTugadi.class, () -> x.olish(2, 2));
    }
}`,
            output: "Tests run: 3, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
            outputLabel: "mvn test natijasi",
          },
          {
            type: "ul",
            items: [
              "Model: <code>Kitob</code> recordi va <code>Janr</code> enum'i.",
              "Xizmat: <code>Xizmat</code> qarz berish va qaytarishni boshqaradi.",
              "Saqlash: <code>FaylOmbori</code> NIO orqali o'qiydi va yozadi.",
              "Hisobot: <code>Hisobot</code> stream collectorlari bilan statistika chiqaradi.",
              "Test: <code>KutubxonaTest</code> asosiy qoidalarni tekshiradi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Matn qatorlarini UTF-8 bilan faylga yozish uchun qaysi metod ishlatiladi?",
            options: ["Files.readAllLines", "Files.copy", "Files.move", "Files.write"],
            answer: 3,
            explain: "Files.write(path, lines, charset) qatorlar ro'yxatini belgilangan kodlash bilan yozadi.",
          },
          {
            q: "Fayldagi janr matnidan enum konstantasini tiklash uchun qaysi metod kerak?",
            options: ["ordinal()", "toString()", "valueOf()", "values()"],
            answer: 2,
            explain: "Janr.valueOf(\"ROMAN\") matn nomiga mos enum konstantasini qaytaradi.",
          },
          {
            q: "Testlarda vaqtinchalik fayl ishlatishning asosiy sababi nima?",
            options: ["Fayl hajmini oshirish", "Testlar bir-biriga va muhitga bog'liq bo'lmasligi uchun", "Kompilyatsiyani tezlashtirish", "JSON'ni o'chirish"],
            answer: 1,
            explain: "Vaqtinchalik fayl har testda toza holat beradi va haqiqiy foydalanuvchi fayllariga ta'sir qilmaydi.",
          },
        ],
      },
      {
        id: 50,
        title: "Yakuniy imtihon",
        minutes: 15,
        isExam: true,
        blocks: [
          {
            type: "p",
            html: "Tabriklaymiz — siz 49 darsni yakunladingiz. Imtihon butun kursni qamrab oladi: JVM va sintaksis, OOP, zamonaviy Java tuzilmalari, kolleksiyalar, streamlar, istisnolar, fayllar, JDBC, konkurensiya, testlash, build vositalari, Spring Boot va REST API. Savollar amaliy tushunishni tekshiradi.",
          },
          {
            type: "ul",
            items: [
              "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
              "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
              "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
              "Har bir savol kursning turli bo'limidan olingan, shuning uchun mavzularni bir tekis takrorlang.",
            ],
          },
          {
            type: "table",
            head: ["Bo'lim", "Nimalarni takrorlash kerak"],
            rows: [
              ["Til asoslari", "Turlar, operatorlar, shartlar, tsikllar, metodlar"],
              ["OOP", "Klass, meros, interfeys, abstrakt klass, inkapsulyatsiya"],
              ["Zamonaviy Java", "Record, enum, sealed, generiklar, Optional"],
              ["Ma'lumotlar", "Kolleksiyalar, streamlar, fayllar, JSON, JDBC"],
              ["Ekotizim", "Threadlar, executorlar, JUnit, Maven, logging"],
              ["Veb", "Spring Boot, REST, HTTP statuslar"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Imtihondan oldin",
            html: "Kod namunalarini yana bir bor ko'zdan kechiring va ularni o'zingiz yozib ko'ring. Ayniqsa <code>equals/hashCode</code>, <code>try-with-resources</code>, stream terminal amallari, <code>CompletableFuture</code> va REST statuslariga e'tibor bering. Testlarni <code>mvn test</code> bilan ishga tushirib ko'rish ham foydali. Omad!",
          },
        ],
        quiz: [],
      },
    ],
    exam: {
      passScore: 9,
      total: 12,
      questions: [
        {
          q: "protected a'zo qayerdan ko'rinadi?",
          options: ["Faqat o'z klassi ichida", "O'z paketi va bola klasslarda", "Barcha paketlarda", "Faqat interfeyslarda"],
          answer: 1,
          explain: "protected paket ichida va undan meros olgan klasslarda ko'rinadi; boshqa paketdagi begona klassga yopiq.",
        },
        {
          q: "Interfeysda tayyor tanaga ega metod e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
          options: ["static", "final", "abstract", "default"],
          answer: 3,
          explain: "default metod interfeysda bajarilish tanasini beradi; uni amalga oshiruvchi klass qayta yozishi shart emas.",
        },
        {
          q: "record klassi meros olish uchun ochiqmi?",
          options: ["Ha, har qanday klass undan meros oladi", "Yo'q, record final va undan meros olib bo'lmaydi", "Faqat abstrakt record meros oladi", "Faqat bir marta meros olinadi"],
          answer: 1,
          explain: "Record har doim final bo'ladi; uning o'rniga kompozitsiya yoki interfeysdan foydalaniladi.",
        },
        {
          q: "Generic tur ma'lumoti kompilyatsiyadan keyin nima bo'ladi?",
          options: ["O'chiriladi (type erasure)", "Runtime'da saqlanadi", "Primitivga aylanadi", "Faqat String uchun qoladi"],
          answer: 0,
          explain: "Type erasure tufayli generic tur ma'lumoti runtime'da o'chiriladi; tekshiruv kompilyatsiya vaqtida bo'ladi.",
        },
        {
          q: "Enum bilan switch ishlatilganda case qismida nima yoziladi?",
          options: ["Konstantaning qisqa nomi", "Konstantaning to'liq paket nomi", "ordinal() chaqiruvi", "Konstantaning String qiymati"],
          answer: 0,
          explain: "Enum switch'da case qismida konstanta nomi yoziladi, masalan case ROMAN -> ...; to'liq nom yoki ordinal kerak emas.",
        },
        {
          q: "TreeMap kalitlar bo'yicha qanday tartib beradi?",
          options: ["Kalitlarni saralangan tartibda saqlaydi", "Tartibni umuman saqlamaydi", "Takroriy kalitlarga ruxsat beradi", "Faqat String qiymatlarni saqlaydi"],
          answer: 0,
          explain: "TreeMap kalitlarni tabiiy tartibda yoki berilgan Comparator bo'yicha saralab saqlaydi.",
        },
        {
          q: "Stream'da mapToInt qanday oqim qaytaradi?",
          options: ["Stream<Integer>", "IntStream", "List<Integer>", "OptionalInt"],
          answer: 1,
          explain: "mapToInt primitive int oqimi — IntStream qaytaradi, unda sum() va average() kabi metodlar bor.",
        },
        {
          q: "Bo'sh Optional ustida get() chaqirilsa qanday istisno chiqadi?",
          options: ["NullPointerException", "IllegalArgumentException", "NoSuchElementException", "UnsupportedOperationException"],
          answer: 2,
          explain: "Optional.get() bo'sh bo'lsa NoSuchElementException tashlaydi; orElse yoki orElseThrow afzal.",
        },
        {
          q: "Path va Files qaysi paketda joylashgan?",
          options: ["java.io", "java.nio.file", "java.net", "java.util"],
          answer: 1,
          explain: "Path, Files va StandardOpenOption java.nio.file paketida; ular zamonaviy fayl API sidir.",
        },
        {
          q: "JDBC'da setAutoCommit(false) nima qiladi?",
          options: ["Ulanishni yopadi", "Barcha jadvallarni o'chiradi", "SQL'ni tekshiradi", "Avtomatik commit'ni o'chirib, tranzaksiyani boshqarish imkonini beradi"],
          answer: 3,
          explain: "setAutoCommit(false) dan keyin o'zgarishlar commit() bilan tasdiqlanadi yoki rollback() bilan bekor qilinadi.",
        },
        {
          q: "Executors.newFixedThreadPool() qanday tur qaytaradi?",
          options: ["Thread", "ExecutorService", "Future", "Runnable"],
          answer: 1,
          explain: "newFixedThreadPool ExecutorService qaytaradi; unga vazifalar submit yoki execute bilan beriladi.",
        },
        {
          q: "Spring Boot'da REST kontrollerni belgilash uchun qaysi annotatsiya ishlatiladi?",
          options: ["@Entity", "@Repository", "@RestController", "@Configuration"],
          answer: 2,
          explain: "@RestController klassni HTTP so'rovlarini qabul qiluvchi komponentga aylantiradi va javobni JSON ga aylantiradi.",
        },
      ],
    },
  };
})();
