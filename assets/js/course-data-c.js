/* C course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.c = {
    id: "c",
    title: "C",
    logoClass: "course-logo--c",
    logoText: "C",
    level: "Boshlovchi",
    hours: "~20 soat",
    testCount: 147,
    lang: "c",
    interactive: "none",
    heroTitle: "C: xotira, tezlik va poydevor tili",
    heroDesc:
      "C — operatsion tizimlar va yuqori unumdorlik talab qiladigan dasturlarning poydevori. 49 dars davomida turlar, ko'rsatkichlar, xotira, ma'lumot tuzilmalari, algoritmlar, fayllar, debugging va uch qismli loyihani amaliy kod bilan o'rganasiz. 147 test va 12-savollik yakuniy imtihon bilimingizni sinab ko'radi.",
    metaDescription:
      "C kursi: 49 dars, 147 test va 12-savollik yakuniy imtihon. C17 asoslari, ko'rsatkichlar, dinamik xotira, linked list, daraxt, fayllar, gdb, valgrind, Make, CMake va kontaktlar loyihasi o'zbek tilida.",
    modules: [
      { title: "Asoslar va boshqaruv", lessons: [1, 2, 3, 4] },
      { title: "Funksiyalar va matnlar", lessons: [5, 6] },
      { title: "Ko'rsatkichlar va xotira", lessons: [7, 8, 9] },
      { title: "Fayllar va preprocessor", lessons: [10, 11, 12] },
      { title: "Ko'rsatkichlar chuqur", lessons: [13, 14, 15, 16] },
      { title: "Matnlar va ma'lumot turlari", lessons: [17, 18, 19, 20] },
      { title: "Bitlar, funksiyalar va algoritmlar", lessons: [21, 22, 23, 24, 25, 26, 27] },
      { title: "Dinamik tuzilmalar", lessons: [28, 29, 30, 31, 32, 33] },
      { title: "Daraxtlar, hash va fayllar", lessons: [34, 35, 36, 37, 38] },
      { title: "Ishonchli va professional kod", lessons: [39, 40, 41, 42, 43, 44, 45, 46] },
      { title: "Yakuniy loyiha", lessons: [47, 48, 49] },
      { title: "Yakuniy imtihon", lessons: [50] },
    ],
    lessons: [
      {
        id: 1,
        title: "C nima, kompilyatsiya va birinchi dastur",
        minutes: 13,
        blocks: [
          {
            type: "p",
            html: "C — 1970-yillarda yaratilgan, bugungi kunda ham operatsion tizimlar, drayverlar va o'rnatilgan qurilmalarda keng ishlatiladigan til. U <b>kompilyatsiya</b> qilinadi: yozgan kodimiz to'g'ridan-to'g'ri mashina kodiga aylantiriladi. Shu sababli C tez ishlaydi va kompyuter xotirasini aniq boshqarish imkonini beradi.",
          },
          {
            type: "code",
            title: "salom.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    printf("Salom, Noldan!\n");
    printf("C ishlayapti.\n");
    return 0;
}`,
            output: "Salom, Noldan!\nC ishlayapti.",
          },
          {
            type: "note",
            variant: "info",
            title: "Kompilyatsiya va ishga tushirish",
            html: "Terminalda <code>gcc salom.c -o salom</code> buyrug'i kodni kompilyatsiya qiladi va <code>salom</code> nomli bajariluvchi fayl yaratadi. Linux yoki macOS'da uni <code>./salom</code>, Windows'da <code>salom.exe</code> deb ishga tushirasiz. Standartni aniq belgilash uchun <code>-std=c17</code> qo'shish mumkin.",
          },
          {
            type: "code",
            title: "ism.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    const char *ism = "Aziza";
    int yosh = 16;

    printf("Salom, %s!\n", ism);
    printf("Yosh: %d\n", yosh);
    return 0;
}`,
            output: "Salom, Aziza!\nYosh: 16",
          },
          {
            type: "table",
            head: ["Qism", "Misol", "Vazifasi"],
            rows: [
              ["Preprocessor", "<code>#include &lt;stdio.h&gt;</code>", "Kirish-chiqarish funksiyalarini ulaydi"],
              ["Kirish nuqtasi", "<code>int main(void)</code>", "Dastur shu yerdan boshlanadi"],
              ["Chiqarish", "<code>printf(\"...\")</code>", "Konsolga matn chiqaradi"],
              ["Yakun", "<code>return 0;</code>", "Dastur muvaffaqiyatli tugaganini bildiradi"],
            ],
          },
        ],
        quiz: [
          {
            q: "printf funksiyasidan foydalanish uchun qaysi sarlavha fayli ulanadi?",
            options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
            answer: 1,
            explain: "printf stdio.h (standard input/output) ichida e'lon qilingan.",
          },
          {
            q: "C dasturining kirish nuqtasi qaysi funksiya?",
            options: ["start()", "main()", "begin()", "run()"],
            answer: 1,
            explain: "Bajarilish int main(void) dan boshlanadi; u int qiymat qaytaradi.",
          },
          {
            q: "gcc salom.c -o salom buyrug'i nima qiladi?",
            options: [
              "Faqat matnni tahrirlaydi",
              "Kodni kompilyatsiya qilib, salom nomli bajariluvchi fayl yaratadi",
              "Dasturni darhol ishga tushiradi",
              "Faylni o'chiradi",
            ],
            answer: 1,
            explain: "gcc kompilyator, -o esa natijaviy bajariluvchi fayl nomini belgilaydi.",
          },
        ],
      },
      {
        id: 2,
        title: "O'zgaruvchilar, turlar va printf formatlari",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "C'da har bir o'zgaruvchining turi oldindan e'lon qilinadi. <code>int</code> butun son, <code>char</code> bitta belgi, <code>long</code> kattaroq butun son, <code>double</code> kasr son uchun ishlatiladi. <code>printf</code> esa qiymatni qanday ko'rsatishni <b>format belgisi</b> orqali biladi: <code>%d</code>, <code>%c</code>, <code>%s</code> va hokazo.",
          },
          {
            type: "code",
            title: "turlar.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int yosh = 16;
    char baho = 'A';
    long katta = 2000000000L;
    double narx = 19.5;

    printf("%d\n", yosh);
    printf("%c\n", baho);
    printf("%ld\n", katta);
    printf("%d\n", (int)narx);
    return 0;
}`,
            output: "16\nA\n2000000000\n19",
          },
          {
            type: "table",
            head: ["Tur", "Format", "Misol"],
            rows: [
              ["<code>int</code>", "<code>%d</code>", "<code>printf(\"%d\", 42);</code>"],
              ["<code>long</code>", "<code>%ld</code>", "<code>printf(\"%ld\", 42L);</code>"],
              ["<code>char</code>", "<code>%c</code>", "<code>printf(\"%c\", 'A');</code>"],
              ["<code>double</code>", "<code>%f</code>", "<code>printf(\"%.1f\", 4.5);</code>"],
              ["Matn", "<code>%s</code>", "<code>printf(\"%s\", \"Aziza\");</code>"],
              ["<code>size_t</code>", "<code>%zu</code>", "<code>printf(\"%zu\", sizeof(int));</code>"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Format va tur mos bo'lsin",
            html: "<code>int</code> uchun <code>%ld</code> yoki <code>long</code> uchun <code>%d</code> ishlatish noto'g'ri natija yoki kutilmagan xatti-harakatga olib kelishi mumkin. <code>double</code> ni <code>%f</code> bilan chiqarishda kasr qismi standart bo'yicha 6 xonada ko'rsatiladi. Aniqlik uchun <code>%.2f</code> kabi yozuv ishlatiladi.",
          },
          {
            type: "code",
            title: "format.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int son = 42;
    char harf = 'Z';
    const char *matn = "Noldan";

    printf("%d %c %s\n", son, harf, matn);
    printf("%x\n", son);
    printf("%05d\n", son);
    return 0;
}`,
            output: "42 Z Noldan\n2a\n00042",
          },
        ],
        quiz: [
          {
            q: "int qiymatini printf bilan chiqarish uchun qaysi format belgisi ishlatiladi?",
            options: ["%d", "%s", "%c", "%f"],
            answer: 0,
            explain: "%d butun son (int) uchun ishlatiladi.",
          },
          {
            q: "long turidagi qiymat uchun qaysi format belgisi to'g'ri?",
            options: ["%d", "%ld", "%c", "%lu"],
            answer: 1,
            explain: "long uchun %ld ishlatiladi; %lu — unsigned long uchun.",
          },
          {
            q: "printf(\"%05d\", 42) natijasi qanday ko'rinishda chiqadi?",
            options: ["42", "00042", "42.000", "  420"],
            answer: 1,
            explain: "05 kenglik 5 va yetakchi nol bilan to'ldirishni bildiradi: 00042.",
          },
        ],
      },
      {
        id: 3,
        title: "Operatorlar, shartlar va switch",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "C'da operatorlar arifmetik hisob, taqqoslash va mantiqiy tekshiruv uchun ishlatiladi. Shartlar <code>if / else if / else</code> bilan, bir nechta aniq variant esa <code>switch</code> bilan yoziladi. Butun sonlarda <code>/</code> bo'lish natijasining butun qismini beradi.",
          },
          {
            type: "code",
            title: "hisob.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int a = 17;
    int b = 5;

    printf("%d\n", a + b);
    printf("%d\n", a - b);
    printf("%d\n", a * b);
    printf("%d\n", a / b);
    printf("%d\n", a % b);
    printf("%d\n", a > b && b > 0);
    return 0;
}`,
            output: "22\n12\n85\n3\n2\n1",
          },
          {
            type: "table",
            head: ["Operator", "Ma'nosi", "Misol"],
            rows: [
              ["<code>+ - * /</code>", "Arifmetik amallar", "<code>a + b</code>"],
              ["<code>%</code>", "Bo'lishdan qoldiq", "<code>17 % 5</code> → <code>2</code>"],
              ["<code>== !=</code>", "Teng / teng emas", "<code>a == 17</code>"],
              ["<code>&gt; &lt; &gt;= &lt;=</code>", "Taqqoslash", "<code>a &gt; b</code>"],
              ["<code>&amp;&amp; || !</code>", "VA, YOKI, EMAS", "<code>a &gt; b &amp;&amp; b &gt; 0</code>"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Butun bo'lish va taqqoslash",
            html: "<code>17 / 5</code> natijasi <code>3</code>; kasr qismi tashlanadi. Kasr natija kerak bo'lsa, operandlardan biri <code>double</code> bo'lishi kerak. Taqqoslashda <code>==</code> yozing — bitta <code>=</code> qiymat beradi va shartni buzadi. C'da mantiqiy ifoda rost bo'lsa <code>1</code>, yolg'on bo'lsa <code>0</code> qaytaradi.",
          },
          {
            type: "code",
            title: "shart.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int ball = 85;

    if (ball >= 90) {
        printf("A\n");
    } else if (ball >= 80) {
        printf("B\n");
    } else {
        printf("C\n");
    }

    const char *holat = (ball >= 60) ? "o'tdi" : "qayta";
    printf("%s\n", holat);

    switch (ball / 10) {
        case 9:
            printf("A daraja\n");
            break;
        case 8:
            printf("B daraja\n");
            break;
        default:
            printf("Boshqa\n");
    }
    return 0;
}`,
            output: "B\no'tdi\nB daraja",
          },
        ],
        quiz: [
          {
            q: "int turida 17 / 5 ifodasining natijasi nima?",
            options: ["3", "3.4", "4", "2"],
            answer: 0,
            explain: "Ikkala operand int bo'lsa, C butun bo'lishni bajaradi va kasr qismini tashlaydi.",
          },
          {
            q: "switch ichida break yozilmasa nima bo'ladi?",
            options: [
              "Keyingi case'lar ham bajarilishda davom etadi",
              "Dastur darhol tugaydi",
              "switch xato beradi",
              "Hech narsa o'zgarmaydi",
            ],
            answer: 0,
            explain: "break bo'lmasa, bajarilish keyingi case bloklariga o'tib ketadi (fall-through).",
          },
          {
            q: "a > b && b > 0 ifodasi rost bo'lganda C qanday qiymat qaytaradi?",
            options: ["true", "1", "0", "yes"],
            answer: 1,
            explain: "C'da mantiqiy rost qiymat 1, yolg'on esa 0 bilan ifodalanadi.",
          },
        ],
      },
      {
        id: 4,
        title: "Tsikllar: for, while va do-while",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Tsikl kodni bir necha marta takrorlaydi. <code>for</code> takrorlar soni ma'lum bo'lganda, <code>while</code> shartga bog'liq holda, <code>do-while</code> esa kamida bir marta bajarilishi kerak bo'lgan ishlar uchun qulay. <code>break</code> tsiklni tugatadi, <code>continue</code> joriy aylanishni o'tkazib yuboradi.",
          },
          {
            type: "code",
            title: "tsikl.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {
        printf("Qadam: %d\n", i);
    }

    int son = 3;
    while (son > 0) {
        printf("Qoldi: %d\n", son);
        son--;
    }

    int yigindi = 0;
    for (int i = 1; i <= 4; i++) {
        yigindi += i;
    }
    printf("Yig'indi: %d\n", yigindi);
    return 0;
}`,
            output:
              "Qadam: 1\nQadam: 2\nQadam: 3\nQadam: 4\nQadam: 5\nQoldi: 3\nQoldi: 2\nQoldi: 1\nYig'indi: 10",
          },
          {
            type: "table",
            head: ["Qism", "Bajarilish vaqti", "Vazifasi"],
            rows: [
              ["<code>int i = 1</code>", "Bir marta, boshida", "Boshlang'ich qiymat"],
              ["<code>i &lt;= 5</code>", "Har aylanishdan oldin", "Davom etish sharti"],
              ["<code>i++</code>", "Har aylanishdan keyin", "Qadam"],
              ["<code>{ ... }</code>", "Shart rost bo'lganda", "Tsikl tanasi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Cheksiz tsikl",
            html: "<code>while (1) { ... }</code> yoki sharti hech qachon o'zgarmaydigan tsikl cheksiz ishlaydi. Chiqish uchun <code>break</code> yoki shartni o'zgartiruvchi kod kerak. <code>do-while</code> shartni tana bajarilgandan keyin tekshiradi, shuning uchun tana kamida bir marta ishlaydi.",
          },
          {
            type: "code",
            title: "sakrash.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 10; i++) {
        if (i == 3) continue;
        if (i == 6) break;
        printf("%d\n", i);
    }

    int n = 1;
    do {
        printf("Aylanish: %d\n", n);
        n++;
    } while (n <= 2);
    return 0;
}`,
            output: "1\n2\n4\n5\nAylanish: 1\nAylanish: 2",
          },
        ],
        quiz: [
          {
            q: "for (int i = 1; i <= 5; i++) tsikli tanasi necha marta bajariladi?",
            options: ["4", "5", "6", "Cheksiz"],
            answer: 1,
            explain: "i qiymatlari 1, 2, 3, 4, 5 bo'lganda shart rost — jami 5 marta.",
          },
          {
            q: "do-while tsiklining o'ziga xosligi nima?",
            options: [
              "Tanasi kamida bir marta bajariladi",
              "Hech qachon bajarilmaydi",
              "Faqat massivlar uchun ishlaydi",
              "Shartni tekshirmaydi",
            ],
            answer: 0,
            explain: "do-while shartni oxirida tekshiradi, shuning uchun tana kamida bir marta ishlaydi.",
          },
          {
            q: "continue operatori nima qiladi?",
            options: [
              "Tsiklni butunlay tugatadi",
              "Joriy aylanishni o'tkazib, keyingisiga o'tadi",
              "Dasturni to'xtatadi",
              "Faylni yopadi",
            ],
            answer: 1,
            explain: "continue joriy aylanishning qolgan qismini tashlab yuboradi; break esa tsiklni tugatadi.",
          },
        ],
      },
      {
        id: 5,
        title: "Funksiyalar, prototiplar va parametrlar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Funksiya — nomlangan kod bloki. U parametrlar qabul qiladi va <code>return</code> bilan natija qaytaradi. C'da funksiyani ishlatishdan oldin uning <b>prototipi</b> (imzosi) e'lon qilinishi kerak. Funksiyaga argumentlar <b>qiymat bo'yicha</b> uzatiladi — funksiya ichidagi nusxa o'zgaradi, asl o'zgaruvchi emas.",
          },
          {
            type: "code",
            title: "funksiya.c",
            code: String.raw`#include <stdio.h>

int qosh(int a, int b);
const char *daraja(int ball);

int main(void) {
    printf("%d\n", qosh(2, 3));
    printf("%d\n", qosh(10, 15));
    printf("%s\n", daraja(92));
    printf("%s\n", daraja(78));
    return 0;
}

int qosh(int a, int b) {
    return a + b;
}

const char *daraja(int ball) {
    if (ball >= 90) return "A";
    if (ball >= 70) return "B";
    return "C";
}`,
            output: "5\n25\nA\nB",
          },
          {
            type: "table",
            head: ["Qism", "Misol", "Ma'nosi"],
            rows: [
              ["Qaytish turi", "<code>int</code>", "Funksiya qanday qiymat qaytaradi"],
              ["Nom", "<code>qosh</code>", "Chaqirish uchun ishlatiladi"],
              ["Parametrlar", "<code>(int a, int b)</code>", "Kiruvchi qiymatlar"],
              ["Prototip", "<code>int qosh(int a, int b);</code>", "Kompilyatorga funksiya shaklini aytadi"],
              ["<code>void</code>", "<code>void xabar(void)</code>", "Funksiya qiymat qaytarmaydi"],
              ["<code>return</code>", "<code>return a + b;</code>", "Natijani qaytaradi va funksiyani tugatadi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Qiymat bo'yicha uzatish",
            html: "C'da <code>oshir(x)</code> chaqirilganda <code>x</code> ning nusxasi funksiyaga boradi. Funksiya ichida parametrni o'zgartirish chaqiruvchidagi <code>x</code> ga ta'sir qilmaydi. Asl qiymatni o'zgartirish kerak bo'lsa, ko'rsatkich uzatiladi — bu keyingi darslarda ko'rsatiladi.",
          },
          {
            type: "code",
            title: "salomlash.c",
            code: String.raw`#include <stdio.h>

void salomlash(const char *ism) {
    printf("Salom, %s!\n", ism);
}

int kvadrat(int n) {
    return n * n;
}

int main(void) {
    salomlash("Aziza");
    salomlash("Bek");
    printf("%d\n", kvadrat(6));
    return 0;
}`,
            output: "Salom, Aziza!\nSalom, Bek!\n36",
          },
        ],
        quiz: [
          {
            q: "Qiymat qaytarmaydigan funksiyaning qaytish turi qanday bo'ladi?",
            options: ["int", "void", "char", "null"],
            answer: 1,
            explain: "void funksiya hech qanday qiymat qaytarmasligini bildiradi.",
          },
          {
            q: "Funksiya prototipi nima uchun kerak?",
            options: [
              "Funksiyani o'chirish uchun",
              "Kompilyatorga funksiyaning nomi va parametrlarini oldindan aytish uchun",
              "Dasturni ishga tushirish uchun",
              "Faylni yopish uchun",
            ],
            answer: 1,
            explain: "Prototip funksiyani chaqirishdan oldin uning imzosini kompilyatorga tanitadi.",
          },
          {
            q: "C'da funksiyaga oddiy o'zgaruvchi uzatilganda nima bo'ladi?",
            options: [
              "Asl o'zgaruvchi har doim o'zgaradi",
              "Uning nusxasi uzatiladi",
              "Faqat manzil uzatiladi",
              "Xato chiqadi",
            ],
            answer: 1,
            explain: "C'da argumentlar qiymat bo'yicha uzatiladi; funksiya nusxa bilan ishlaydi.",
          },
        ],
      },
      {
        id: 6,
        title: "Massivlar va matnlar (stringlar)",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Massiv — bir xil turdagi elementlarning ketma-ket to'plami. Indekslar <b>0</b> dan boshlanadi. C'da matn alohida tur emas: u <code>char</code> massivi bo'lib, oxirida <code>'\\0'</code> (nol belgisi) turadi. Matn funksiyalari <code>&lt;string.h&gt;</code> sarlavhasida joylashgan.",
          },
          {
            type: "code",
            title: "massiv.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int ballar[4] = {90, 85, 78, 92};
    int yigindi = 0;
    int engKatta = ballar[0];

    for (int i = 0; i < 4; i++) {
        yigindi += ballar[i];
        if (ballar[i] > engKatta) {
            engKatta = ballar[i];
        }
    }

    printf("Jami: %d\n", yigindi);
    printf("Eng katta: %d\n", engKatta);
    printf("Elementlar: %d\n", (int)(sizeof(ballar) / sizeof(ballar[0])));
    return 0;
}`,
            output: "Jami: 345\nEng katta: 92\nElementlar: 4",
          },
          {
            type: "table",
            head: ["Tushuncha", "Misol", "Eslatma"],
            rows: [
              ["Massiv e'loni", "<code>int sonlar[3];</code>", "3 ta int uchun joy"],
              ["Indeks", "<code>sonlar[0]</code>", "Birinchi element"],
              ["Elementlar soni", "<code>sizeof(a) / sizeof(a[0])</code>", "Faqat shu faylda ko'rinadigan massiv uchun"],
              ["Matn", "<code>char ism[] = \"Aziza\";</code>", "Oxirida <code>'\\0'</code> avtomatik qo'shiladi"],
              ["Uzunlik", "<code>strlen(ism)</code>", "<code>'\\0'</code> hisobga olinmaydi"],
            ],
          },
          {
            type: "code",
            title: "matn.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

int main(void) {
    char ism[] = "Aziza";
    char nusxa[20];

    strcpy(nusxa, ism);
    printf("%s\n", nusxa);
    printf("%d\n", (int)strlen(nusxa));
    printf("%c\n", ism[1]);
    printf("%d\n", strcmp("olma", "banan") > 0);
    return 0;
}`,
            output: "Aziza\n5\nz\n1",
          },
          {
            type: "note",
            variant: "warning",
            title: "Bufer chegarasi",
            html: "Matn uchun ajratilgan massiv yetarlicha katta bo'lishi kerak: <code>\"Aziza\"</code> uchun kamida 6 belgi (5 harf + <code>'\\0'</code>). <code>strcpy</code> bufer hajmini tekshirmaydi; xavfsizroq variant — <code>snprintf</code> yoki <code>strncpy</code>. Massiv chegarasidan tashqariga yozish xotirani buzadi.",
          },
        ],
        quiz: [
          {
            q: "strlen(\"Aziza\") qanday qiymat qaytaradi?",
            options: ["4", "5", "6", "7"],
            answer: 1,
            explain: "strlen harflar sonini sanaydi va oxiridagi '\\0' belgisini hisobga olmaydi.",
          },
          {
            q: "Massivning birinchi elementi qaysi indeksda?",
            options: ["1", "0", "-1", "Oxirgi"],
            answer: 1,
            explain: "C massivlarida indeks 0 dan boshlanadi.",
          },
          {
            q: "Matn oxirida qanday belgi turishi kerak?",
            options: ["'\\n'", "'\\0'", "' '", "';'"],
            answer: 1,
            explain: "C stringlari nol belgisi ('\\0') bilan tugaydi; kutubxona funksiyalari shu belgini izlaydi.",
          },
        ],
      },
      {
        id: 7,
        title: "Ko'rsatkichlar va manzillar",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Har bir o'zgaruvchi xotirada ma'lum manzilga ega. <b>Ko'rsatkich</b> (pointer) — shu manzilni saqlaydigan o'zgaruvchi. <code>&amp;</code> operatori manzilni oladi, <code>*</code> operatori esa ko'rsatkich orqali manzildagi qiymatga murojaat qiladi. Ko'rsatkichlar C'ning eng kuchli va ayni paytda eng ehtiyotkorlik talab qiladigan vositasidir.",
          },
          {
            type: "code",
            title: "manzil.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int son = 42;
    int *p = &son;

    printf("%d\n", son);
    printf("%d\n", *p);

    *p = 100;
    printf("%d\n", son);
    return 0;
}`,
            output: "42\n42\n100",
          },
          {
            type: "table",
            head: ["Yozuv", "O'qilishi", "Vazifasi"],
            rows: [
              ["<code>int *p;</code>", "p — int ko'rsatkichi", "int manzilini saqlaydi"],
              ["<code>p = &amp;son;</code>", "p ga son manzilini ber", "Manzilni oladi"],
              ["<code>*p</code>", "p ko'rsatgan qiymat", "Dereferensiya"],
              ["<code>*p = 100;</code>", "p manzilidagi qiymatni o'zgartir", "Manzil orqali yozish"],
              ["<code>NULL</code>", "Bo'sh ko'rsatkich", "Hech qayerga ishora qilmaydi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Xavfsiz ko'rsatkich",
            html: "Ko'rsatkichni ishlatishdan oldin u haqiqiy obyektga ishora qilishiga ishonch hosil qiling. <code>NULL</code> ko'rsatkichni dereferensiya qilish dasturni yiqitadi. Mahalliy o'zgaruvchi manzilini funksiya tugagandan keyin saqlab qolish ham xavfli. Manzil qiymatlarini ekranga chiqarish odatda foydali emas — ular har ishga tushirishda farq qilishi mumkin.",
          },
          {
            type: "code",
            title: "almashtir.c",
            code: String.raw`#include <stdio.h>

void almashtir(int *a, int *b) {
    int vaqt = *a;
    *a = *b;
    *b = vaqt;
}

int main(void) {
    int x = 3;
    int y = 8;

    almashtir(&x, &y);
    printf("x=%d y=%d\n", x, y);
    printf("%d\n", *(&x) + *(&y));
    return 0;
}`,
            output: "x=8 y=3\n11",
          },
        ],
        quiz: [
          {
            q: "& operatori nima qaytaradi?",
            options: [
              "O'zgaruvchi qiymatini",
              "O'zgaruvchining xotiradagi manzilini",
              "O'zgaruvchi turini",
              "Yangi nusxani",
            ],
            answer: 1,
            explain: "& (address-of) operatori obyektning manzilini beradi.",
          },
          {
            q: "*p ifodasi nima qiladi?",
            options: [
              "p ning manzilini oladi",
              "p ko'rsatgan manzildagi qiymatga murojaat qiladi",
              "p ni o'chiradi",
              "Yangi massiv yaratadi",
            ],
            answer: 1,
            explain: "* — dereferensiya operatori; u ko'rsatkich ko'rsatgan joydagi qiymatni beradi.",
          },
          {
            q: "almashtir funksiyasi nima uchun int * qabul qiladi?",
            options: [
              "Sonlarni tezroq qo'shish uchun",
              "Asl o'zgaruvchilarni manzil orqali o'zgartirish uchun",
              "Xotirani tejash uchun",
              "Massiv yaratish uchun",
            ],
            answer: 1,
            explain: "Qiymat bo'yicha uzatishda nusxa o'zgaradi; manzil orqali esa chaqiruvchining asl o'zgaruvchilari o'zgaradi.",
          },
        ],
      },
      {
        id: 8,
        title: "Strukturalar (struct)",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Struktura bir nechta turli turdagi qiymatlarni bitta birlikka yig'adi. Masalan, talabaning ismi, balli va kursi bitta <code>struct</code> ichida saqlanadi. Maydonlarga nuqta orqali, ko'rsatkich orqali esa <code>-&gt;</code> operatori bilan murojaat qilinadi.",
          },
          {
            type: "code",
            title: "talaba.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

typedef struct {
    char ism[20];
    int ball;
} Talaba;

int main(void) {
    Talaba t;
    strcpy(t.ism, "Aziza");
    t.ball = 92;

    printf("%s\n", t.ism);
    printf("%d\n", t.ball);
    return 0;
}`,
            output: "Aziza\n92",
          },
          {
            type: "table",
            head: ["Yozuv", "Vazifasi"],
            rows: [
              ["<code>struct { ... };</code>", "Yangi tuzilma turini e'lon qiladi"],
              ["<code>typedef ... Talaba;</code>", "Tuzilmaga qisqa nom beradi"],
              ["<code>t.ism</code>", "Oddiy o'zgaruvchi maydoniga murojaat"],
              ["<code>p-&gt;ball</code>", "Ko'rsatkich orqali maydonga murojaat"],
              ["<code>Talaba t2 = t;</code>", "Barcha maydonlarni nusxalaydi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Nuqta va strelka",
            html: "<code>t.ball</code> — struktura o'zgaruvchisi uchun. Agar <code>Talaba *p = &amp;t;</code> bo'lsa, <code>p-&gt;ball</code> ishlatiladi. Bu <code>(*p).ball</code> yozuvining qisqa ko'rinishi. Struktura massivi esa <code>talabalar[i].ball</code> ko'rinishida ishlatiladi.",
          },
          {
            type: "code",
            title: "talabalar.c",
            code: String.raw`#include <stdio.h>

typedef struct {
    char ism[20];
    int ball;
} Talaba;

int main(void) {
    Talaba talabalar[3] = {
        {"Aziza", 92},
        {"Bek", 78},
        {"Dilnoza", 88},
    };

    int yigindi = 0;
    for (int i = 0; i < 3; i++) {
        yigindi += talabalar[i].ball;
    }

    Talaba *eng = &talabalar[0];
    for (int i = 1; i < 3; i++) {
        if (talabalar[i].ball > eng->ball) {
            eng = &talabalar[i];
        }
    }

    printf("O'rtacha: %d\n", yigindi / 3);
    printf("Eng yaxshi: %s (%d)\n", eng->ism, eng->ball);
    return 0;
}`,
            output: "O'rtacha: 86\nEng yaxshi: Aziza (92)",
          },
        ],
        quiz: [
          {
            q: "Struktura nima uchun ishlatiladi?",
            options: [
              "Faqat sonlarni ko'paytirish uchun",
              "O'zaro bog'liq maydonlarni bitta birlikka yig'ish uchun",
              "Faylni o'chirish uchun",
              "Tsiklni takrorlash uchun",
            ],
            answer: 1,
            explain: "struct turli turdagi bog'liq ma'lumotlarni bitta obyekt sifatida saqlaydi.",
          },
          {
            q: "Struktura ko'rsatkichi orqali maydonga qanday murojaat qilinadi?",
            options: ["p.ball", "p->ball", "p*ball", "p::ball"],
            answer: 1,
            explain: "Ko'rsatkich uchun -> operatori ishlatiladi; u (*p).ball bilan bir xil.",
          },
          {
            q: "typedef struct { ... } Talaba; da typedef nima qiladi?",
            options: [
              "Yangi massiv yaratadi",
              "Tuzilma turiga Talaba degan qisqa nom beradi",
              "Xotirani bo'shatadi",
              "Maydonlarni o'chiradi",
            ],
            answer: 1,
            explain: "typedef tur uchun taxallus yaratadi, shunda struct yozmasdan Talaba nomini ishlatish mumkin.",
          },
        ],
      },
      {
        id: 9,
        title: "Dinamik xotira: malloc va free",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Massiv o'lchami oldindan noma'lum bo'lsa, xotirani ish vaqtida ajratish kerak. <code>malloc</code> berilgan hajmda xotira ajratadi, <code>calloc</code> esa uni nol bilan tozalaydi. Ishlatib bo'lgach, xotira <code>free</code> bilan qaytariladi. Bu funksiyalar <code>&lt;stdlib.h&gt;</code> da joylashgan.",
          },
          {
            type: "code",
            title: "xotira.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 4;
    int *ballar = malloc(n * sizeof(int));

    if (ballar == NULL) {
        printf("Xotira ajratilmadi\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        ballar[i] = (i + 1) * 10;
    }

    int yigindi = 0;
    for (int i = 0; i < n; i++) {
        yigindi += ballar[i];
    }

    printf("Yig'indi: %d\n", yigindi);
    free(ballar);
    ballar = NULL;
    return 0;
}`,
            output: "Yig'indi: 100",
          },
          {
            type: "table",
            head: ["Funksiya", "Vazifasi", "Eslatma"],
            rows: [
              ["<code>malloc(hajm)</code>", "Xotira ajratadi", "Tarkibi tozalanmagan bo'ladi"],
              ["<code>calloc(son, hajm)</code>", "Xotira ajratib, nol bilan to'ldiradi", "Massivlar uchun qulay"],
              ["<code>realloc(p, hajm)</code>", "Mavjud blok hajmini o'zgartiradi", "Yangi manzil qaytarishi mumkin"],
              ["<code>free(p)</code>", "Xotirani bo'shatadi", "Bir marta chaqiriladi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Xotira oqishi",
            html: "Ajratilgan xotira <code>free</code> qilinmasa, dastur tugaguncha band qoladi — bu <b>memory leak</b>. Bo'shatilgandan keyin o'sha ko'rsatkichni yana ishlatish <b>dangling pointer</b> hisoblanadi. Bir blokni ikki marta <code>free</code> qilish ham xatoga olib keladi. <code>free</code> dan keyin ko'rsatkichga <code>NULL</code> berish odat tusiga kirsin.",
          },
          {
            type: "code",
            title: "calloc.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 3;
    int *sonlar = calloc(n, sizeof(int));

    if (sonlar == NULL) {
        return 1;
    }

    printf("%d %d %d\n", sonlar[0], sonlar[1], sonlar[2]);
    sonlar[1] = 7;
    printf("%d\n", sonlar[1]);

    free(sonlar);
    return 0;
}`,
            output: "0 0 0\n7",
          },
        ],
        quiz: [
          {
            q: "calloc malloc'dan qanday farq qiladi?",
            options: [
              "calloc tezroq ishlaydi",
              "calloc ajratilgan xotirani nol bilan to'ldiradi",
              "calloc faqat matn uchun ishlaydi",
              "Farqi yo'q",
            ],
            answer: 1,
            explain: "calloc xotirani nol bilan tozalaydi; malloc esa tarkibni tozalamaydi.",
          },
          {
            q: "free funksiyasi nima qiladi?",
            options: [
              "Yangi xotira ajratadi",
              "Ajratilgan xotirani tizimga qaytaradi",
              "Faylni o'chiradi",
              "Massivni nusxalaydi",
            ],
            answer: 1,
            explain: "free dinamik ajratilgan blokni bo'shatadi; undan keyin ko'rsatkich ishlatilmasligi kerak.",
          },
          {
            q: "Memory leak qachon yuzaga keladi?",
            options: [
              "Xotira free qilinmasa",
              "Xotira juda ko'p bo'lsa",
              "Ko'rsatkich NULL bo'lsa",
              "Massiv indeksi 0 bo'lsa",
            ],
            answer: 0,
            explain: "Ajratilgan xotiraga havola yo'qolsa va free chaqirilmasa, u dastur tugaguncha band qoladi.",
          },
        ],
      },
      {
        id: 10,
        title: "Fayllar bilan ishlash",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Fayllar ma'lumotni dastur tugagandan keyin ham saqlash imkonini beradi. C'da fayl <code>FILE *</code> ko'rsatkichi orqali ochiladi: <code>fopen</code> faylni ochadi, <code>fprintf</code> yozadi, <code>fscanf</code> yoki <code>fgets</code> o'qiydi, <code>fclose</code> esa faylni yopadi.",
          },
          {
            type: "code",
            title: "yozish.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    FILE *fayl = fopen("natija.txt", "w");

    if (fayl == NULL) {
        printf("Fayl ochilmadi\n");
        return 1;
    }

    fprintf(fayl, "Aziza 92\n");
    fprintf(fayl, "Bek 78\n");
    fclose(fayl);

    printf("Yozildi: 2 qator\n");
    return 0;
}`,
            output: "Yozildi: 2 qator",
          },
          {
            type: "table",
            head: ["Rejim", "Ma'nosi", "Mavjud fayl bo'lsa"],
            rows: [
              ["<code>\"r\"</code>", "O'qish", "Fayl ochiladi, o'zgartirilmaydi"],
              ["<code>\"w\"</code>", "Yozish", "Fayl bo'shatilib, boshidan yoziladi"],
              ["<code>\"a\"</code>", "Qo'shish", "Yozuv oxiriga qo'shiladi"],
              ["<code>\"r+\"</code>", "O'qish va yozish", "Fayl mavjud bo'lishi shart"],
              ["<code>fclose()</code>", "Faylni yopish", "Yozilgan ma'lumot diskka saqlanadi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Misolni qanday sinash kerak?",
            html: "Avval <code>yozish.c</code> ni kompilyatsiya qilib ishga tushiring — u joriy papkada <code>natija.txt</code> yaratadi. So'ng <code>oqish.c</code> ni ishga tushiring. Ikkala dastur bir papkada bo'lishi kerak, aks holda o'qish dasturi faylni topmaydi. Har doim <code>fopen</code> natijasini <code>NULL</code> ga tekshiring.",
          },
          {
            type: "code",
            title: "oqish.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    FILE *fayl = fopen("natija.txt", "r");

    if (fayl == NULL) {
        printf("Fayl topilmadi\n");
        return 1;
    }

    char ism[20];
    int ball;
    int jami = 0;
    int soni = 0;

    while (fscanf(fayl, "%19s %d", ism, &ball) == 2) {
        printf("%s: %d\n", ism, ball);
        jami += ball;
        soni++;
    }
    fclose(fayl);

    printf("O'rtacha: %d\n", jami / soni);
    return 0;
}`,
            output: "Aziza: 92\nBek: 78\nO'rtacha: 85",
          },
        ],
        quiz: [
          {
            q: "fopen faylni ocha olmasa nima qaytaradi?",
            options: ["0", "NULL", "1", "Bo'sh matn"],
            answer: 1,
            explain: "fopen muvaffaqiyatsiz bo'lsa NULL qaytaradi; shuni tekshirish shart.",
          },
          {
            q: "\"w\" rejimida fayl ochilsa, mavjud ma'lumotga nima bo'ladi?",
            options: [
              "Saqlanib qoladi",
              "Fayl oxiriga qo'shiladi",
              "Fayl bo'shatiladi va boshidan yoziladi",
              "Fayl o'chiriladi",
            ],
            answer: 2,
            explain: "\"w\" yozish uchun ochadi va mavjud tarkibni kesib tashlaydi.",
          },
          {
            q: "Yozish tugagach faylni yopish uchun qaysi funksiya ishlatiladi?",
            options: ["fclose()", "closefile()", "fend()", "stop()"],
            answer: 0,
            explain: "fclose(FILE *) buferlarni saqlab, faylni yopadi.",
          },
        ],
      },
      {
        id: 11,
        title: "Preprocessor, sarlavhalar va Makefile asoslari",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Kompilyatsiyadan oldin <b>preprocessor</b> ishlaydi: <code>#include</code> sarlavha faylini joyiga qo'yadi, <code>#define</code> esa makro yaratadi. Katta loyihalar bir nechta <code>.c</code> va <code>.h</code> fayllarga bo'linadi, ularni <code>gcc</code> yoki <code>make</code> bilan birga yig'iladi.",
          },
          {
            type: "code",
            title: "makro.c",
            code: String.raw`#include <stdio.h>

#define MAX_BALL 100
#define KVADRAT(x) ((x) * (x))

int main(void) {
    int n = 4;

    printf("MAX_BALL = %d\n", MAX_BALL);
    printf("kvadrat(%d) = %d\n", n, KVADRAT(n));
    return 0;
}`,
            output: "MAX_BALL = 100\nkvadrat(4) = 16",
          },
          {
            type: "table",
            head: ["Yozuv", "Vazifasi"],
            rows: [
              ["<code>#include &lt;stdio.h&gt;</code>", "Tizim sarlavhasini ulaydi"],
              ["<code>#include \"hisob.h\"</code>", "Loyihadagi sarlavhani ulaydi"],
              ["<code>#define MAX 100</code>", "Makro yoki konstantani belgilaydi"],
              ["<code>#ifdef DEBUG</code>", "Shartli kompilyatsiya"],
              ["<code>#ifndef HISOB_H</code>", "Sarlavha qayta ulanishidan himoya"],
              ["<code>gcc main.c hisob.c -o dastur</code>", "Bir nechta faylni birga yig'adi"],
              ["<code>make</code>", "Makefile bo'yicha kerakli qismlarni qayta yig'adi"],
            ],
          },
          {
            type: "code",
            title: "shartli.c",
            code: String.raw`#include <stdio.h>

#define DEBUG 1

int main(void) {
    int ballar[] = {80, 92, 76};
    int jami = 0;

    for (int i = 0; i < 3; i++) {
        jami += ballar[i];
#ifdef DEBUG
        printf("ballar[%d] = %d\n", i, ballar[i]);
#endif
    }

    printf("Jami = %d\n", jami);
    return 0;
}`,
            output: "ballar[0] = 80\nballar[1] = 92\nballar[2] = 76\nJami = 248",
          },
          {
            type: "note",
            variant: "tip",
            title: "Ko'p faylli loyiha",
            html: "Odatda umumiy e'lonlar <code>hisob.h</code> sarlavhasida, funksiyalar tanasi <code>hisob.c</code> da, <code>main</code> esa <code>main.c</code> da bo'ladi. Sarlavha himoyasi <code>#ifndef HISOB_H</code>, <code>#define HISOB_H</code> va <code>#endif</code> qatorlaridan iborat. Makefile'da qoidalar yoziladi; <code>make</code> faqat o'zgargan fayllarni qayta kompilyatsiya qiladi.",
          },
        ],
        quiz: [
          {
            q: "#include <stdio.h> qanday ishlaydi?",
            options: [
              "Faylni o'chiradi",
              "Sarlavha fayli mazmunini shu joyga qo'shadi",
              "Dasturni ishga tushiradi",
              "Xotira ajratadi",
            ],
            answer: 1,
            explain: "Preprocessor #include ko'rsatilgan fayl mazmunini kompilyatsiyadan oldin shu joyga qo'yadi.",
          },
          {
            q: "#define MAX_BALL 100 nima qiladi?",
            options: [
              "Oddiy o'zgaruvchi yaratadi",
              "MAX_BALL uchun matnli almashtirish makrosini belgilaydi",
              "Faylni ochadi",
              "Tsikl yaratadi",
            ],
            answer: 1,
            explain: "#define preprocessor makrosi; MAX_BALL uchraydigan joyda 100 qo'yiladi.",
          },
          {
            q: "Sarlavha himoyasi (#ifndef ... #endif) nima uchun kerak?",
            options: [
              "Fayl ikki marta ulanganda takroriy e'lonlarning oldini olish uchun",
              "Dasturni tezlashtirish uchun",
              "Xotirani bo'shatish uchun",
              "Faylni shifrlash uchun",
            ],
            answer: 0,
            explain: "Include guard bir sarlavhaning bir kompilyatsiya birligida faqat bir marta qo'shilishini ta'minlaydi.",
          },
        ],
      },
      {
        id: 12,
        title: "Mini loyiha: xarajatlar statistikasi",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi strukturalar, massivlar, funksiyalar va tsikllarni bitta konsol dasturida birlashtiramiz. Dastur bir nechta xarajatni saqlaydi, umumiy summa, o'rtacha va eng katta xarajatni hisoblaydi. Ma'lumotlar dastur ichida berilgani uchun natija har doim bir xil.",
          },
          {
            type: "ul",
            items: [
              "Model: <code>Xarajat</code> strukturasi — nom va summa.",
              "Saqlash: <code>Xarajat xarajatlar[4]</code> massivi.",
              "Funksiya: <code>jami()</code> barcha summalarni qo'shadi.",
              "Funksiya: <code>engKatta()</code> eng katta xarajat indeksini qaytaradi.",
              "Hisobot: tsikl har bir qatorni va yakuniy statistikani chiqaradi.",
            ],
          },
          {
            type: "code",
            title: "xarajat.c",
            code: String.raw`#include <stdio.h>

typedef struct {
    char nomi[20];
    int summa;
} Xarajat;

int jami(Xarajat x[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += x[i].summa;
    }
    return sum;
}

int engKatta(Xarajat x[], int n) {
    int eng = 0;
    for (int i = 1; i < n; i++) {
        if (x[i].summa > x[eng].summa) {
            eng = i;
        }
    }
    return eng;
}

int main(void) {
    Xarajat xarajatlar[4] = {
        {"Oziq-ovqat", 120000},
        {"Transport", 45000},
        {"Kitob", 80000},
        {"Internet", 60000},
    };
    int n = 4;
    int umumiy = jami(xarajatlar, n);
    int eng = engKatta(xarajatlar, n);

    for (int i = 0; i < n; i++) {
        printf("%s: %d\n", xarajatlar[i].nomi, xarajatlar[i].summa);
    }

    printf("Jami: %d\n", umumiy);
    printf("O'rtacha: %d\n", umumiy / n);
    printf("Eng katta: %s\n", xarajatlar[eng].nomi);
    return 0;
}`,
            output:
              "Oziq-ovqat: 120000\nTransport: 45000\nKitob: 80000\nInternet: 60000\nJami: 305000\nO'rtacha: 76250\nEng katta: Oziq-ovqat",
          },
          {
            type: "note",
            variant: "info",
            title: "Ishga tushirish",
            html: "<code>gcc xarajat.c -o xarajat</code> bilan yig'ing va <code>./xarajat</code> (Windows'da <code>xarajat.exe</code>) bilan ishga tushiring. Summalar <code>int</code> da saqlanadi; real loyihada katta qiymatlar uchun <code>long long</code> yoki pul birligini tiyinda saqlash ishlatiladi.",
          },
          {
            type: "code",
            title: "xarajat2.c",
            code: String.raw`#include <stdio.h>

typedef struct {
    char nomi[20];
    int summa;
} Xarajat;

int main(void) {
    Xarajat x[] = {
        {"Oziq-ovqat", 120000},
        {"Transport", 45000},
        {"Kitob", 80000},
        {"Internet", 60000},
    };
    int n = 4;
    int jami = 0;

    for (int i = 0; i < n; i++) {
        jami += x[i].summa;
    }

    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (x[j].summa > x[i].summa) {
                Xarajat vaqt = x[i];
                x[i] = x[j];
                x[j] = vaqt;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        int foiz = x[i].summa * 100 / jami;
        printf("%s: %d%%\n", x[i].nomi, foiz);
    }
    return 0;
}`,
            output: "Oziq-ovqat: 39%\nKitob: 26%\nInternet: 19%\nTransport: 14%",
          },
          {
            type: "note",
            variant: "tip",
            title: "Loyihani kengaytiring",
            html: "O'zingiz qo'shib ko'ring: yangi xarajat qo'shish, foydalanuvchidan <code>scanf</code> bilan ma'lumot olish yoki natijani faylga saqlash. Foizlar butun bo'lish tufayli yaxlitlanadi — aniqroq natija uchun hisobni <code>double</code> bilan bajaring.",
          },
        ],
        quiz: [
          {
            q: "Loyihada xarajatlar qaysi turda saqlanadi?",
            options: [
              "Bitta int massivida",
              "Xarajat strukturalari massivida",
              "Faqat faylda",
              "char matnida",
            ],
            answer: 1,
            explain: "Har bir xarajat nom va summani birlashtirgan Xarajat strukturasida saqlanadi.",
          },
          {
            q: "xarajat2.c da ichki va tashqi tsikllar nima qiladi?",
            options: [
              "Xarajatlarni summa bo'yicha kamayish tartibida saralaydi",
              "Faylni o'chiradi",
              "Yangi struktura yaratadi",
              "Faqat foizni hisoblaydi",
            ],
            answer: 0,
            explain: "Tanlash usulidagi saralash eng katta summani oldinga chiqaradi.",
          },
          {
            q: "umumiy / n ifodasi 305000 va n = 4 bo'lganda qanday natija beradi?",
            options: ["76250", "76250.0", "76251", "Xato"],
            answer: 0,
            explain: "Ikkala operand int bo'lgani uchun butun bo'lish bajariladi: 305000 / 4 = 76250.",
          },
        ],
      },
      {
        id: 13,
        title: "Ko'rsatkichlar arifmetikasi",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Ko'rsatkich ustida <code>+</code>, <code>-</code>, <code>++</code> amallarini bajarish mumkin, lekin ular oddiy sonlar kabi emas. <code>int *p</code> ga <code>1</code> qo'shsangiz, manzil bitta baytga emas, balki bitta <code>int</code> hajmiga (ko'p tizimlarda 4 baytga) siljiydi. Shu sababli ko'rsatkich arifmetikasi massiv elementlari bo'ylab yurishning eng tabiiy usuli hisoblanadi.",
          },
          {
            type: "code",
            title: "siljish.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int sonlar[5] = {10, 20, 30, 40, 50};
    int *p = sonlar;

    printf("%d\n", *p);
    printf("%d\n", *(p + 2));
    p++;
    printf("%d\n", *p);
    printf("%td\n", p - sonlar);
    return 0;
}`,
            output: "10\n30\n20\n1",
          },
          {
            type: "table",
            head: ["Ifoda", "Ma'nosi", "Eslatma"],
            rows: [
              ["<code>p + 1</code>", "Keyingi element manzili", "<code>sizeof(element)</code> bayt siljiydi"],
              ["<code>*(p + 2)</code>", "Uchinchi element", "<code>p[2]</code> bilan teng"],
              ["<code>p++</code>", "Keyingi elementga o'tish", "Ko'rsatkichning o'zi o'zgaradi"],
              ["<code>p - a</code>", "Elementlar orasidagi masofa", "Natija <code>ptrdiff_t</code> turida"],
              ["<code>a + n</code>", "Massivdan keyingi manzil", "Uni o'qish yoki yozish mumkin emas"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Chegara va haqiqiy massiv",
            html: "Ko'rsatkich arifmetikasi faqat bitta massiv ichida (yoki uning oxiridan bitta qadam keyin) ma'noga ega. Massivdan tashqariga chiqish — <b>undefined behavior</b>: dastur ishlashi mumkin, lekin natijaga kafolat yo'q. <code>p + 1</code> manzilini hisoblash mumkin, ammo u massivdan tashqarida bo'lsa, dereferensiya qilish taqiqlanadi.",
          },
          {
            type: "code",
            title: "teskari_yurish.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int sonlar[4] = {3, 6, 9, 12};
    int yigindi = 0;

    for (int *p = sonlar; p < sonlar + 4; p++) {
        yigindi += *p;
    }
    printf("Yig'indi: %d\n", yigindi);

    int *oxirgi = sonlar + 3;
    for (int i = 0; i < 4; i++) {
        printf("%d", *(oxirgi - i));
        if (i < 3) {
            printf(" ");
        }
    }
    printf("\n");
    return 0;
}`,
            output: "Yig'indi: 30\n12 9 6 3",
          },
        ],
        quiz: [
          {
            q: "int *p ko'rsatkichiga 1 qo'shilganda manzil qanchaga siljiydi?",
            options: ["Har doim 1 baytga", "Har doim 4 baytga", "sizeof(int) baytga", "2 baytga"],
            answer: 2,
            explain: "Ko'rsatkich arifmetikasi element hajmiga bog'liq: int uchun siljish sizeof(int) baytga teng.",
          },
          {
            q: "Bir massivdagi ikki ko'rsatkich ayirmasi (p - a) qaysi turda va nimani bildiradi?",
            options: [
              "ptrdiff_t turida elementlar sonini",
              "int turida baytlar sonini",
              "char turida belgilar sonini",
              "void turida manzilni",
            ],
            answer: 0,
            explain: "Ko'rsatkichlar ayirmasi elementlar sonini beradi va ptrdiff_t turida saqlanadi.",
          },
          {
            q: "Massivning oxirgi elementidan keyingi manzil (one-past) bilan nima qilish mumkin?",
            options: ["Uni free bilan bo'shatish shart", "U avtomatik birinchi elementga aylanadi", "Uni dereferensiya qilib qiymat o'qish mumkin", "Uni solishtirish mumkin, lekin o'qish yoki yozish mumkin emas"],
            answer: 3,
            explain: "one-past ko'rsatkich chegarani aniqlash uchun yaroqli, ammo undagi xotirani o'qish taqiqlanadi.",
          },
        ],
      },
      {
        id: 14,
        title: "Ko'rsatkich va massiv: o'xshashlik va farq",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Ifodada massiv nomi deyarli har doim birinchi element manziliga aylanadi. Shu tufayli <code>a[i]</code> va <code>*(a + i)</code> bir xil ishlaydi, <code>int *p = a;</code> esa qonuniy. Lekin massiv va ko'rsatkich bir narsa emas: <code>sizeof(a)</code> butun massiv hajmini, funksiya parametridagi <code>a</code> uchun esa faqat ko'rsatkich hajmini beradi.",
          },
          {
            type: "code",
            title: "bir_xil.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int a[4] = {1, 2, 3, 4};
    int *p = a;

    printf("%d\n", a[2]);
    printf("%d\n", p[2]);
    printf("%d\n", *(a + 3));
    printf("%d\n", (int)(sizeof(a) / sizeof(a[0])));
    printf("%s\n", (p == a) ? "bir xil manzil" : "boshqa manzil");
    return 0;
}`,
            output: "3\n3\n4\n4\nbir xil manzil",
          },
          {
            type: "table",
            head: ["Yozuv", "Aslida nima", "Muhim farq"],
            rows: [
              ["<code>int a[4]</code>", "Haqiqiy massiv", "<code>sizeof(a)</code> butun hajmni beradi"],
              ["Funksiya parametri <code>int a[]</code>", "Ko'rsatkichga aylanadi", "<code>sizeof(a)</code> ko'rsatkich hajmini beradi"],
              ["<code>a[i]</code>", "<code>*(a + i)</code>", "Ikkala yozuv teng"],
              ["<code>a</code>", "Birinchi element manzili", "Massiv nomiga qiymat berib bo'lmaydi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Nusxalash va qaytarish",
            html: "<code>b = a;</code> yozib massivni nusxalab bo'lmaydi — massiv nomi o'zgartiriladigan ifoda emas. Nusxalash uchun tsikl yoki <code>memcpy</code> ishlatiladi. Mahalliy massiv manzilini funksiyadan qaytarish ham xato: funksiya tugagach xotira yaroqsiz bo'lib qoladi. Massivni qaytarish kerak bo'lsa, xotirani <code>malloc</code> bilan ajrating yoki natijani tashqi buferga yozing.",
          },
          {
            type: "code",
            title: "funksiyada_massiv.c",
            code: String.raw`#include <stdio.h>

void ikkilantir(int *a, int n) {
    for (int i = 0; i < n; i++) {
        a[i] *= 2;
    }
}

int main(void) {
    int sonlar[4] = {5, 10, 15, 20};

    ikkilantir(sonlar, 4);

    for (int i = 0; i < 4; i++) {
        printf("%d", sonlar[i]);
        if (i < 3) {
            printf(" ");
        }
    }
    printf("\n");
    printf("Birinchi: %d\n", *sonlar);
    return 0;
}`,
            output: "10 20 30 40\nBirinchi: 10",
          },
        ],
        quiz: [
          {
            q: "Funksiya parametri int a[] ko'rinishida yozilganda u aslida nimaga aylanadi?",
            options: ["char massiviga", "struct turiga", "Massivning to'liq nusxasiga", "int turidagi ko'rsatkichga"],
            answer: 3,
            explain: "Parametrda massiv sintaksisi saqlanadi, lekin kompilyator uni int * sifatida qabul qiladi.",
          },
          {
            q: "a[2] ifodasiga to'liq teng yozuv qaysi?",
            options: ["*(a + 2)", "*a + 2", "&a[2]", "a + 2"],
            answer: 0,
            explain: "Massiv indeksatsiyasi ko'rsatkich arifmetikasi bilan bir xil: a[2] = *(a + 2).",
          },
          {
            q: "Funksiya ichida int a[] parametriga sizeof(a) qo'llansa nima qaytadi?",
            options: [
              "Butun massiv hajmi",
              "Elementlar soni",
              "Massivning birinchi elementi hajmi",
              "Ko'rsatkichning hajmi",
            ],
            answer: 3,
            explain: "Parametr ko'rsatkich bo'lgani uchun sizeof(a) ko'rsatkich hajmini beradi, massiv uzunligini emas.",
          },
        ],
      },
      {
        id: 15,
        title: "const va ko'rsatkichlar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>const</code> — kompilyatorga \"bu qiymatni o'zgartirmayman\" deb berilgan va'da. Ko'rsatkichlar bilan u to'rt xil ko'rinishda uchraydi va ularning ma'nosi butunlay boshqacha. Funksiya parametrida <code>const int *</code> yozish massivni o'qish uchun qabul qilayotganingizni aniq bildiradi va tasodifiy yozishdan himoya qiladi.",
          },
          {
            type: "code",
            title: "const_parametr.c",
            code: String.raw`#include <stdio.h>

int yigindi(const int *a, int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    return sum;
}

int main(void) {
    int sonlar[3] = {4, 7, 9};
    const char *matn = "Noldan";

    printf("%d\n", yigindi(sonlar, 3));
    printf("%s\n", matn);
    printf("%c\n", matn[0]);
    return 0;
}`,
            output: "20\nNoldan\nN",
          },
          {
            type: "table",
            head: ["E'lon", "Ko'rsatkichni o'zgartirish", "Qiymatni o'zgartirish"],
            rows: [
              ["<code>int *p</code>", "Mumkin", "Mumkin"],
              ["<code>const int *p</code>", "Mumkin", "Mumkin emas"],
              ["<code>int *const p</code>", "Mumkin emas", "Mumkin"],
              ["<code>const int *const p</code>", "Mumkin emas", "Mumkin emas"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "O'ngdan chapga o'qing",
            html: "<code>const int *p</code> — \"p int ga ishora qiladi, int const\". <code>int *const p</code> — \"p const ko'rsatkich, int ga ishora qiladi\". E'lonni o'ngdan chapga o'qish chalkashlikni kamaytiradi. Satr literallari odatda faqat o'qish uchun xotiraga joylashadi, shuning uchun ularni <code>char *</code> ga emas, <code>const char *</code> ga bog'lash xavfsiz.",
          },
          {
            type: "code",
            title: "const_turlari.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int x = 10;
    int y = 20;
    int *const p = &x;
    const int *q = &x;
    const int *const r = &y;

    *p = 15;
    q = &y;
    printf("%d %d\n", x, *q);
    printf("%d\n", *r);
    return 0;
}`,
            output: "15 20\n20",
          },
        ],
        quiz: [
          {
            q: "const int *p e'lonida nimani o'zgartirish mumkin?",
            options: ["Ikkalasini ham", "Hech birini", "Faqat *p qiymatini", "p ni boshqa manzilga bog'lash mumkin, *p ni emas"],
            answer: 3,
            explain: "const int * — o'zgarmas int ga ko'rsatkich; ko'rsatkichning o'zini boshqa obyektga bog'lash mumkin.",
          },
          {
            q: "int *const p e'loni qanday majburiyat yuklaydi?",
            options: [
              "p ni har qanday manzilga bog'lash mumkin",
              "*p ni o'zgartirib bo'lmaydi",
              "p ni NULL ga tenglashtirish shart",
              "p e'lon paytida boshlang'ich qiymat olishi va boshqa manzilga bog'lanmasligi kerak",
            ],
            answer: 3,
            explain: "int *const — o'zgarmas ko'rsatkich; u e'londa boshlang'ich qiymat oladi va keyin boshqa manzilga bog'lanmaydi.",
          },
          {
            q: "Funksiya satrni o'zgartirmasdan o'qishi uchun qaysi parametr turi eng to'g'ri?",
            options: ["const char *", "char *", "char", "const int *"],
            answer: 0,
            explain: "const char * funksiya satrni faqat o'qishini bildiradi va satr literalini xavfsiz qabul qilish imkonini beradi.",
          },
        ],
      },
      {
        id: 16,
        title: "Funksiyaga massiv uzatish va natijani ko'rsatkich orqali qaytarish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Massiv funksiyaga uzatilganda uning uzunligi avtomatik uzatilmaydi — shuning uchun <code>n</code> parametri deyarli har doim qo'shiladi. Funksiya bitta qiymat qaytaradi, lekin ba'zan birdan ortiq natija kerak bo'ladi. Bunday holatda natijalar <b>chiqish parametrlari</b> (out-params) orqali, ya'ni ko'rsatkich yordamida qaytariladi.",
          },
          {
            type: "code",
            title: "minmax.c",
            code: String.raw`#include <stdio.h>

void minmax(const int *a, int n, int *min, int *max) {
    *min = a[0];
    *max = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] < *min) {
            *min = a[i];
        }
        if (a[i] > *max) {
            *max = a[i];
        }
    }
}

int main(void) {
    int sonlar[5] = {8, 3, 12, 5, 9};
    int engKichik;
    int engKatta;

    minmax(sonlar, 5, &engKichik, &engKatta);
    printf("Min: %d\n", engKichik);
    printf("Max: %d\n", engKatta);
    printf("Farq: %d\n", engKatta - engKichik);
    return 0;
}`,
            output: "Min: 3\nMax: 12\nFarq: 9",
          },
          {
            type: "table",
            head: ["Yondashuv", "Misol", "Qachon ishlatiladi"],
            rows: [
              ["Bitta natija", "<code>int yigindi(...)</code>", "Natija bitta bo'lsa"],
              ["Chiqish parametri", "<code>void f(int *natija)</code>", "Funksiya holatni ham qaytarishi kerak bo'lsa"],
              ["Massivni joyida o'zgartirish", "<code>void teskari(int *a, int n)</code>", "Yangi xotira kerak bo'lmasa"],
              ["Massiv qaytarish", "<code>int *yarat(...)</code>", "Xotira <code>malloc</code> bilan ajratilgan bo'lsa"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Manzil haqiqiy bo'lsin",
            html: "Chiqish parametri sifatida har doim haqiqiy o'zgaruvchi manzilini bering: <code>minmax(a, n, &amp;min, &amp;max)</code>. <code>NULL</code> uzatish yoki mahalliy o'zgaruvchi manzilini funksiyadan tashqariga qaytarish xavfli. Massiv uzunligini <code>int</code> o'rniga <code>size_t</code> bilan saqlash katta hajmlar uchun ishonchliroq, ammo tsikl indeksini ham mos turda yuritish kerak.",
          },
          {
            type: "code",
            title: "teskari_va_ortacha.c",
            code: String.raw`#include <stdio.h>

void teskari(int *a, int n) {
    for (int i = 0; i < n / 2; i++) {
        int vaqt = a[i];
        a[i] = a[n - 1 - i];
        a[n - 1 - i] = vaqt;
    }
}

double ortacha(const int *a, int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    return (double)sum / n;
}

int main(void) {
    int sonlar[4] = {2, 4, 6, 8};

    teskari(sonlar, 4);
    for (int i = 0; i < 4; i++) {
        printf("%d", sonlar[i]);
        if (i < 3) {
            printf(" ");
        }
    }
    printf("\n");
    printf("%.2f\n", ortacha(sonlar, 4));
    return 0;
}`,
            output: "8 6 4 2\n5.00",
          },
        ],
        quiz: [
          {
            q: "Massiv funksiyaga uzatilganda uning uzunligi avtomatik uzatiladimi?",
            options: [
              "Ha, har doim",
              "Faqat int massivlari uchun",
              "Yo'q, uzunlikni alohida parametr qilib berish kerak",
              "Faqat const massivlar uchun",
            ],
            answer: 2,
            explain: "Massiv ko'rsatkichga aylanadi va uzunlik ma'lumoti yo'qoladi; shuning uchun n ni alohida uzatish kerak.",
          },
          {
            q: "void minmax(const int *a, int n, int *min, int *max) funksiyasida oxirgi ikki parametr nima vazifani bajaradi?",
            options: ["Massiv uzunligini oshiradi", "Xotirani bo'shatadi", "Massivni nusxalaydi", "Ikki natijani chaqiruvchiga qaytaradi"],
            answer: 3,
            explain: "Ko'rsatkich orqali funksiya chaqiruvchining o'zgaruvchilariga ikkita natijani yozadi.",
          },
          {
            q: "teskari funksiyasi massivni qanday o'zgartiradi?",
            options: [
              "Elementlarni joyida teskari tartibda almashtiradi",
              "Yangi massiv ajratadi",
              "Faqat birinchi elementni o'zgartiradi",
              "Massivni saralaydi",
            ],
            answer: 0,
            explain: "funksiya bosh va oxirgi elementlarni juftlab almashtiradi, qo'shimcha xotira ishlatmaydi.",
          },
        ],
      },
      {
        id: 17,
        title: "Matnlar chuqur: strlen, strcmp, strchr va strstr",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "C satri — oxirida <code>'\\0'</code> turgan <code>char</code> massivi. <code>strlen</code> shu nol belgisigacha sanaydi, <code>strcmp</code> ikki satrni lug'at tartibida taqqoslaydi, <code>strchr</code> belgini, <code>strstr</code> esa qism satrni qidiradi. Bu funksiyalar <code>&lt;string.h&gt;</code> da e'lon qilingan va satr haqiqatan nol bilan tugashini talab qiladi.",
          },
          {
            type: "code",
            title: "qidiruv.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

int main(void) {
    char ism[32] = "Aziza";
    strcat(ism, " Karimova");

    printf("%s\n", ism);
    printf("%zu\n", strlen(ism));
    printf("%d\n", strcmp("olma", "banan") > 0);
    printf("%s\n", strchr(ism, 'K'));
    printf("%s\n", strstr(ism, "rim"));
    return 0;
}`,
            output: "Aziza Karimova\n14\n1\nKarimova\nrimova",
          },
          {
            type: "table",
            head: ["Funksiya", "Vazifasi", "Muhim jihat"],
            rows: [
              ["<code>strlen(s)</code>", "Satr uzunligini qaytaradi", "<code>'\\0'</code> hisobga olinmaydi"],
              ["<code>strcmp(a, b)</code>", "Lug'at tartibida taqqoslaydi", "Teng bo'lsa <code>0</code>"],
              ["<code>strchr(s, c)</code>", "Birinchi belgini qidiradi", "Topilmasa <code>NULL</code>"],
              ["<code>strstr(s, sub)</code>", "Qism satrni qidiradi", "Topilmasa <code>NULL</code>"],
              ["<code>strcpy(a, b)</code>", "Satrni nusxalaydi", "Bufer hajmini tekshirmaydi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "strcpy va strcat chegarani bilmaydi",
            html: "<code>strcpy</code> va <code>strcat</code> maqsad bufer yetarliligini tekshirmaydi. <code>char ism[8] = \"Aziza\"; strcat(ism, \" Karimova\");</code> buferdan chiqib ketadi. Xavfsizroq yo'l — <code>snprintf</code>: u yoziladigan maksimal hajmni oladi va buferni har doim nol bilan tugatadi. <code>strncpy</code> esa nol belgisini qo'ymasligi mumkin, shuning uchun oxirgi baytni qo'lda yozish kerak bo'ladi.",
          },
          {
            type: "code",
            title: "snprintf.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

int main(void) {
    char bufer[8];
    int kerak = snprintf(bufer, sizeof bufer, "%s", "Salom dunyo");

    printf("%s\n", bufer);
    printf("%d\n", kerak);

    char xavfsiz[16];
    strcpy(xavfsiz, "Noldan");
    printf("%s\n", xavfsiz);
    return 0;
}`,
            output: "Salom d\n11\nNoldan",
          },
        ],
        quiz: [
          {
            q: "strlen(\"Karimova\") qanday qiymat qaytaradi?",
            options: ["9", "10", "7", "8"],
            answer: 3,
            explain: "Karimova so'zida 8 ta harf bor; strlen oxiridagi nol belgisini sanamaydi.",
          },
          {
            q: "strcmp(a, b) qachon 0 qaytaradi?",
            options: [
              "a va b bir xil uzunlikda bo'lsa",
              "a b dan katta bo'lsa",
              "Ikki satr to'liq bir xil bo'lsa",
              "Har doim musbat bo'lsa",
            ],
            answer: 2,
            explain: "strcmp satrlarni belma-bel taqqoslaydi va faqat to'liq teng bo'lganda 0 qaytaradi.",
          },
          {
            q: "snprintf qaytaradigan qiymat nimani bildiradi?",
            options: [
              "Buferga haqiqatda yozilgan baytlar sonini, nol belgisiz",
              "Har doim bufer hajmini",
              "Xato kodi",
              "Nol bilan tugaydigan to'liq natija uchun kerak bo'lgan belgilar sonini",
            ],
            answer: 3,
            explain: "snprintf buferga sig'magan bo'lsa ham, to'liq natija uchun kerakli belgilar sonini qaytaradi; bu kesilishni aniqlashga yordam beradi.",
          },
        ],
      },
      {
        id: 18,
        title: "Matnni tahlil qilish: sscanf, strtok va xavfsiz o'girish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Foydalanuvchi kiritgan ma'lumot har doim matn ko'rinishida keladi. Uni qismlarga ajratish uchun <code>sscanf</code>, <code>strtok</code> va <code>strtol</code> ishlatiladi. <code>sscanf</code> format bo'yicha o'qiydi, <code>strtok</code> ajratgich bo'yicha bo'laklaydi, <code>strtol</code> esa sonni xatoni tekshirib o'giradi. Har bir usulda bufer chegarasi va xato holatini nazorat qilish muhim.",
          },
          {
            type: "code",
            title: "sscanf.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    char qator[] = "Aziza 92 3.5";
    char ism[20];
    int ball;
    double koeff;

    if (sscanf(qator, "%19s %d %lf", ism, &ball, &koeff) == 3) {
        printf("Ism: %s\n", ism);
        printf("Ball: %d\n", ball);
        printf("Koeffitsiyent: %.1f\n", koeff);
    } else {
        printf("Format mos kelmadi\n");
    }
    return 0;
}`,
            output: "Ism: Aziza\nBall: 92\nKoeffitsiyent: 3.5",
          },
          {
            type: "table",
            head: ["Funksiya", "Nima qiladi", "Xavfsizlik jihati"],
            rows: [
              ["<code>sscanf(s, fmt, ...)</code>", "Satrdan format bo'yicha o'qiydi", "<code>%19s</code> kabi kenglikni cheklang"],
              ["<code>strtok(s, delim)</code>", "Satrni bo'laklarga ajratadi", "Asl satrni o'zgartiradi"],
              ["<code>strtol(s, &amp;end, 10)</code>", "Butun sonni o'giradi", "Xatoni <code>end</code> va <code>errno</code> orqali aniqlaydi"],
              ["<code>strtod(s, &amp;end)</code>", "Kasr sonni o'giradi", "Nuqta va diapazonni tekshirish kerak"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "strtok va nusxa",
            html: "<code>strtok</code> ajratgich o'rniga <code>'\\0'</code> yozadi, shuning uchun satr literaliga yoki faqat o'qiladigan buferga qo'llanmaydi. Satrni avval <code>char nusxa[64]; strcpy(nusxa, asl);</code> kabi nusxaga oling. Keyingi bo'laklar uchun <code>strtok(NULL, delim)</code> chaqiriladi. Zamonaviy kodda <code>strtok_r</code> yoki qo'lda indeks bilan yurish afzalroq, chunki global holatga bog'lanmaydi.",
          },
          {
            type: "code",
            title: "strtok.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

int main(void) {
    char satr[] = "olma,banan,uzum";
    int soni = 0;

    char *token = strtok(satr, ",");
    while (token != NULL) {
        soni++;
        printf("%d: %s\n", soni, token);
        token = strtok(NULL, ",");
    }
    printf("Jami: %d\n", soni);
    return 0;
}`,
            output: "1: olma\n2: banan\n3: uzum\nJami: 3",
          },
        ],
        quiz: [
          {
            q: "sscanf da %19s kabi kenglik nima uchun yoziladi?",
            options: [
              "Sonni 19 ga ko'paytirish uchun",
              "Satrni 19 marta takrorlash uchun",
              "Buferga eng ko'pi bilan 19 belgi yozib, chegaradan chiqmaslik uchun",
              "Formatni tekshirishni o'chirish uchun",
            ],
            answer: 2,
            explain: "%19s o'qish kengligini cheklaydi; buferda 20 belgi bo'lsa, 19 tasi va yakuniy '\\0' sig'adi.",
          },
          {
            q: "strtok satr bilan ishlaganda nima qiladi?",
            options: ["Satrni faqat o'qiydi, hech narsani o'zgartirmaydi", "Satrni butun songa o'giradi", "Satrning nusxasini yaratadi", "Ajratgich o'rniga '\\0' yozib, satrni bo'laklarga ajratadi"],
            answer: 3,
            explain: "strtok asl satrni o'zgartiradi: ajratgich o'rniga nol belgisi qo'yadi va bo'lak boshlanishini qaytaradi.",
          },
          {
            q: "strtol funksiyasidagi endptr ko'rsatkichi nima uchun kerak?",
            options: [
              "Son o'qilishi tugagan joyni ko'rsatish uchun",
              "Xotirani bo'shatish uchun",
              "Sonni yaxlitlash uchun",
              "Satr uzunligini hisoblash uchun",
            ],
            answer: 0,
            explain: "endptr satrda qayd etish to'xtagan joyni ko'rsatadi; u orqali qolgan belgilar xato yoki qo'shimcha ma'lumot ekanini tekshirish mumkin.",
          },
        ],
      },
      {
        id: 19,
        title: "Ko'p o'lchamli massivlar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Ko'p o'lchamli massiv — massivlar massivi. <code>int m[2][3]</code> xotirada 2 qator va 3 ustundan iborat jadval bo'lib, elementlar qator bo'ylab ketma-ket joylashadi. <code>m[i][j]</code> birinchi indeks qatorni, ikkinchisi ustunni bildiradi. Bunday tuzilma matritsalar, o'yin maydonlari va jadvallar uchun qulay.",
          },
          {
            type: "code",
            title: "matritsa.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int m[2][3] = {
        {1, 2, 3},
        {4, 5, 6},
    };
    int jami = 0;
    int qatorlar = (int)(sizeof(m) / sizeof(m[0]));
    int ustunlar = (int)(sizeof(m[0]) / sizeof(m[0][0]));

    for (int i = 0; i < qatorlar; i++) {
        for (int j = 0; j < ustunlar; j++) {
            jami += m[i][j];
        }
    }

    printf("Jami: %d\n", jami);
    printf("Qatorlar: %d\n", qatorlar);
    printf("Ustunlar: %d\n", ustunlar);
    return 0;
}`,
            output: "Jami: 21\nQatorlar: 2\nUstunlar: 3",
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi", "Natija"],
            rows: [
              ["<code>int m[2][3]</code>", "2 qator, 3 ustun", "6 ta int"],
              ["<code>m[0][2]</code>", "Birinchi qator, uchinchi ustun", "<code>3</code>"],
              ["<code>m[1][0]</code>", "Ikkinchi qator, birinchi ustun", "<code>4</code>"],
              ["<code>sizeof(m)</code>", "Butun jadval hajmi", "6 * sizeof(int)"],
              ["<code>sizeof(m[0])</code>", "Bitta qator hajmi", "3 * sizeof(int)"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Funksiyaga uzatish",
            html: "Ko'p o'lchamli massivni funksiyaga uzatishda birinchi o'lchamni tashlab ketish mumkin, qolganlarini yozish shart: <code>void chiqar(int a[][3], int qatorlar)</code>. Bu parametr aslida \"3 ta intdan iborat massivga ko'rsatkich\" degani. Ichki o'lchamni yozmaslik kompilyatorga qatorlar qanday siljishini aytmaydi va xatoga olib keladi.",
          },
          {
            type: "code",
            title: "transponirlash.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int a[2][3] = {
        {1, 2, 3},
        {4, 5, 6},
    };
    int t[3][2];

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            t[j][i] = a[i][j];
        }
    }

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d", t[i][j]);
            if (j == 0) {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}`,
            output: "1 4\n2 5\n3 6",
          },
        ],
        quiz: [
          {
            q: "int m[2][3] massivida nechta int elementi bor?",
            options: ["6", "5", "3", "2"],
            answer: 0,
            explain: "Qatorlar soni ustunlar soniga ko'paytiriladi: 2 * 3 = 6 ta element.",
          },
          {
            q: "m[1][2] qaysi elementga murojaat qiladi?",
            options: ["Uchinchi qator, birinchi ustun", "Ikkinchi qator, birinchi ustun", "Birinchi qator, ikkinchi ustun", "Ikkinchi qator, uchinchi ustun"],
            answer: 3,
            explain: "Indekslar 0 dan boshlanadi, shuning uchun 1 — ikkinchi qator, 2 — uchinchi ustun.",
          },
          {
            q: "void chiqar(int a[][3], int qatorlar) parametridagi a aslida nimaga ishora qiladi?",
            options: [
              "int ga",
              "3 ta intdan iborat massivga",
              "char ga",
              "Butun jadval nusxasiga",
            ],
            answer: 1,
            explain: "Birinchi o'lcham ko'rsatkichga aylanadi, qolgan o'lcham element turini tashkil qiladi: int (*a)[3].",
          },
        ],
      },
      {
        id: 20,
        title: "typedef, enum va union",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<code>typedef</code> turga qisqa nom beradi, <code>enum</code> nomlangan butun sonlar to'plamini yaratadi, <code>union</code> esa bir xil xotirani bir necha tur bilan talqin qilish imkonini beradi. Ular birgalikda kodni o'qishni yengillashtiradi: sehrli sonlar o'rniga mazmunli nomlar, murakkab turlar o'rniga qisqa taxalluslar paydo bo'ladi.",
          },
          {
            type: "code",
            title: "enum_struct.c",
            code: String.raw`#include <stdio.h>

typedef enum { PAST, ORTA, YUQORI } Daraja;

typedef struct {
    char ism[20];
    int ball;
    Daraja daraja;
} Talaba;

const char *darajaNomi(Daraja d) {
    switch (d) {
        case PAST:
            return "past";
        case ORTA:
            return "o'rta";
        case YUQORI:
            return "yuqori";
    }
    return "noma'lum";
}

int main(void) {
    Talaba t = {"Aziza", 92, YUQORI};

    printf("%s: %d (%s)\n", t.ism, t.ball, darajaNomi(t.daraja));
    printf("%d\n", (int)YUQORI);
    return 0;
}`,
            output: "Aziza: 92 (yuqori)\n2",
          },
          {
            type: "table",
            head: ["Tushuncha", "Vazifasi", "Misol"],
            rows: [
              ["<code>typedef</code>", "Turga taxallus beradi", "<code>typedef unsigned long ulong;</code>"],
              ["<code>enum</code>", "Nomlangan butun konstantalar", "<code>enum { PAST, ORTA, YUQORI };</code>"],
              ["<code>union</code>", "Bir xotirani bir necha tur uchun ishlatadi", "Bir vaqtda faqat bittasi faol"],
              ["Teglangan union", "Tur maydoni + union", "Xavfsizroq ishlatish usuli"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Union — bir vaqtda bitta maydon",
            html: "Union hajmi eng katta maydon hajmiga teng. Bir maydonga yozgandan keyin boshqasini o'qish odatda mantiqiy xato: qiymat baytlari boshqacha talqin qilinadi. Qaysi maydon faol ekanini bilish uchun union yonida <code>enum</code> turini saqlash tavsiya etiladi — bu <b>tagged union</b> deyiladi. <code>enum</code> konstantalari butun sonlar bo'lib, ular ustida arifmetik amal bajarish mumkin, lekin bu har doim ham ma'noli emas.",
          },
          {
            type: "code",
            title: "tagged_union.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

typedef enum { SON, MATN } Tur;

typedef struct {
    Tur tur;
    union {
        int son;
        char matn[20];
    } qiymat;
} Maydon;

int main(void) {
    Maydon a;
    Maydon b;

    a.tur = SON;
    a.qiymat.son = 42;

    b.tur = MATN;
    strcpy(b.qiymat.matn, "Noldan");

    printf("%d\n", a.qiymat.son);
    printf("%s\n", b.qiymat.matn);
    printf("%d\n", (int)b.tur);
    return 0;
}`,
            output: "42\nNoldan\n1",
          },
        ],
        quiz: [
          {
            q: "typedef kalit so'zi nima qiladi?",
            options: [
              "Yangi o'zgaruvchi yaratadi",
              "Xotira ajratadi",
              "Mavjud turga qisqa taxallus beradi",
              "Funksiyani e'lon qiladi",
            ],
            answer: 2,
            explain: "typedef yangi tur yaratmaydi, mavjud tur uchun qulay nom beradi.",
          },
          {
            q: "enum { PAST, ORTA, YUQORI } da PAST va ORTA qanday qiymatlarga ega?",
            options: ["0 va 1", "1 va 2", "PAST va ORTA matnlari", "Aniqlanmagan"],
            answer: 0,
            explain: "Birinchi enumerator 0 dan boshlanadi, keyingilari 1 taga oshib boradi: PAST = 0, ORTA = 1.",
          },
          {
            q: "union haqidagi to'g'ri gap qaysi?",
            options: [
              "Barcha maydonlar bir vaqtda mustaqil saqlanadi",
              "Hajmi barcha maydonlar yig'indisiga teng",
              "Faqat int va char bilan ishlaydi",
              "Maydonlar bitta xotirani bo'lishadi, hajm eng katta maydonnikiga teng",
            ],
            answer: 3,
            explain: "Union maydonlari bir xil xotirani egallaydi; hajm eng katta maydon hajmiga teng bo'ladi.",
          },
        ],
      },
      {
        id: 21,
        title: "Bitwise operatorlar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Bitwise operatorlar sonning alohida bitlari bilan ishlaydi: <code>&amp;</code> (VA), <code>|</code> (YOKI), <code>^</code> (XOR), <code>~</code> (EMAS), <code>&lt;&lt;</code> va <code>&gt;&gt;</code> (siljish). Ular apparat bilan ishlashda, bayroqlarda, siqishda va tez hisoblashlarda qo'llanadi. Ishonchli natija uchun belgisiz (<code>unsigned</code>) turlardan foydalanish tavsiya etiladi.",
          },
          {
            type: "code",
            title: "bitwise.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    unsigned x = 12u;
    unsigned y = 10u;

    printf("%u\n", x & y);
    printf("%u\n", x | y);
    printf("%u\n", x ^ y);
    printf("%u\n", x << 1);
    printf("%u\n", x >> 1);
    printf("%u\n", ~x & 0xFFu);
    return 0;
}`,
            output: "8\n14\n6\n24\n6\n243",
          },
          {
            type: "table",
            head: ["Operator", "Nomi", "Misol (12 va 10)"],
            rows: [
              ["<code>&amp;</code>", "Bitwise AND", "<code>1100 &amp; 1010 = 1000</code> (8)"],
              ["<code>|</code>", "Bitwise OR", "<code>1100 | 1010 = 1110</code> (14)"],
              ["<code>^</code>", "Bitwise XOR", "<code>1100 ^ 1010 = 0110</code> (6)"],
              ["<code>~</code>", "Bitwise NOT", "Barcha bitlarni teskari qiladi"],
              ["<code>&lt;&lt; n</code>", "Chapga siljish", "2<sup>n</sup> ga ko'paytirish"],
              ["<code>&gt;&gt; n</code>", "O'ngga siljish", "2<sup>n</sup> ga bo'lish (butun)"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Ishorali sonlar va siljish",
            html: "Manfiy sonni o'ngga siljitish natijasi implementatsiyaga bog'liq bo'lishi mumkin, shuning uchun bitlar bilan ishlashda <code>unsigned</code> ishlating. Siljish miqdori tur kengligidan kichik bo'lishi shart: 32-bitli <code>unsigned</code> uchun 32 yoki undan katta siljish — undefined behavior. <code>~x</code> barcha bitlarni teskarilaydi; kerakli qismini ajratish uchun niqob ishlatiladi: <code>~x &amp; 0xFFu</code>.",
          },
          {
            type: "code",
            title: "bitlarni_sanash.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    unsigned son = 45u;
    int bitlar = 0;
    unsigned n = son;

    while (n > 0) {
        bitlar += (int)(n & 1u);
        n >>= 1;
    }

    printf("Bits: %d\n", bitlar);
    printf("Toq: %d\n", (int)(son & 1u));
    printf("Ikki barobar: %u\n", son << 1);
    printf("Yarmi: %u\n", son >> 1);
    return 0;
}`,
            output: "Bits: 4\nToq: 1\nIkki barobar: 90\nYarmi: 22",
          },
        ],
        quiz: [
          {
            q: "12 & 10 ifodasining natijasi nechaga teng?",
            options: ["6", "22", "14", "8"],
            answer: 3,
            explain: "1100 va 1010 bitlari bo'yicha AND: 1000, ya'ni 8.",
          },
          {
            q: "x << 1 amali, agar toshib ketish bo'lmasa, nimaga teng?",
            options: ["x + 1", "x / 2", "x * 2", "x - 1"],
            answer: 2,
            explain: "Chapga bir bit siljish sonni 2 ga ko'paytirishga teng.",
          },
          {
            q: "Manfiy ishorali sonni o'ngga siljitish haqidagi to'g'ri gap qaysi?",
            options: [
              "Har doim nol bilan to'ldiriladi",
              "Har doim natija musbat bo'ladi",
              "C standarti buni aniq taqiqlaydi",
              "Natija implementatsiyaga bog'liq, shuning uchun unsigned ishlatish tavsiya etiladi",
            ],
            answer: 3,
            explain: "Ishorali manfiy qiymatni o'ngga siljitishda to'ldirish usuli implementatsiyaga bog'liq; unsigned bilan bu noaniqlik yo'qoladi.",
          },
        ],
      },
      {
        id: 22,
        title: "Bit maskalari va bayroqlar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Bir nechta mantiqiy holatni bitta butun sonda saqlash uchun har bir holatga alohida bit ajratiladi. Masalan, ruxsatlar, sozlamalar yoki o'yin holatlari shu usulda tejamkor saqlanadi. Har bir bayroq <code>1 &lt;&lt; n</code> ko'rinishida belgilanadi, tekshirish <code>x &amp; maska</code>, yoqish <code>x |= maska</code>, o'chirish <code>x &amp;= ~maska</code> orqali amalga oshiriladi.",
          },
          {
            type: "code",
            title: "bayroqlar.c",
            code: String.raw`#include <stdio.h>

enum {
    OQ = 1 << 0,
    QORA = 1 << 1,
    QIZIL = 1 << 2
};

int main(void) {
    unsigned bayroq = 0;

    bayroq |= QIZIL | OQ;
    printf("%u\n", bayroq);
    printf("%d\n", (bayroq & QIZIL) != 0);

    bayroq &= ~OQ;
    printf("%u\n", bayroq);
    printf("%d\n", (bayroq & OQ) != 0);
    return 0;
}`,
            output: "5\n1\n4\n0",
          },
          {
            type: "table",
            head: ["Amal", "Yozuv", "Natija"],
            rows: [
              ["Yoqish", "<code>x |= MASK</code>", "Bit 1 bo'ladi"],
              ["O'chirish", "<code>x &amp;= ~MASK</code>", "Bit 0 bo'ladi"],
              ["Tekshirish", "<code>(x &amp; MASK) != 0</code>", "Yoqilgan bo'lsa rost"],
              ["Almashtirish", "<code>x ^= MASK</code>", "Bit teskarilanadi"],
              ["Bir nechta bayroq", "<code>A | B | C</code>", "Birlashtiradi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Maskanı nomlang",
            html: "Sehrli sonlar o'rniga <code>enum</code> yoki <code>#define</code> bilan nomlangan maskalar ishlating. Har bir bayroq bitta bitni egallashi kerak: 0, 1, 2, 3 emas, balki <code>1 &lt;&lt; 0</code>, <code>1 &lt;&lt; 1</code>, <code>1 &lt;&lt; 2</code>. <code>~MASK</code> ni qo'llaganda tur belgisiz bo'lishi muhim, aks holda yuqori bitlar bilan kutilmagan natija olinadi.",
          },
          {
            type: "code",
            title: "vaqtni_qadoqlash.c",
            code: String.raw`#include <stdio.h>

enum { OQ = 1 << 0, QIZIL = 1 << 2 };

int main(void) {
    unsigned soat = 14u;
    unsigned daqiqa = 37u;
    unsigned paket = (soat << 8) | daqiqa;

    printf("%u\n", paket);
    printf("%u:%02u\n", (paket >> 8) & 0xFFu, paket & 0xFFu);

    unsigned holat = 0;
    holat ^= QIZIL;
    printf("%u %u\n", holat, (holat & QIZIL) != 0);
    holat ^= QIZIL;
    printf("%u %u\n", holat, (holat & QIZIL) != 0);
    return 0;
}`,
            output: "3621\n14:37\n4 1\n0 0",
          },
        ],
        quiz: [
          {
            q: "Uchta alohida bayroq uchun qaysi qiymatlar to'plami to'g'ri?",
            options: ["0, 1, 2", "2, 4, 8", "1, 2, 3", "1, 2, 4"],
            answer: 3,
            explain: "Har bir bayroq bitta bitni egallashi kerak: 1 << 0, 1 << 1, 1 << 2 — ya'ni 1, 2, 4.",
          },
          {
            q: "bayroq &= ~QIZIL amali nima qiladi?",
            options: [
              "QIZIL bayrog'ini yoqadi",
              "QIZIL bayrog'ini o'chiradi",
              "Barcha bayroqlarni o'chiradi",
              "QIZIL bayrog'ini tekshiradi",
            ],
            answer: 1,
            explain: "~QIZIL da faqat QIZIL biti 0, qolganlari 1; AND amali shu bitni tozalaydi.",
          },
          {
            q: "(x & MASK) != 0 ifodasi nimani aniqlaydi?",
            options: [
              "MASK bayrog'i yoqilgan-yoqilmaganini",
              "x ning juft yoki toqligini",
              "x ning MASK ga tengligini",
              "MASK dagi barcha bitlar sonini",
            ],
            answer: 0,
            explain: "AND natijasi noldan farqli bo'lsa, MASK dagi kamida bitta bit x da yoqilgan bo'ladi.",
          },
        ],
      },
      {
        id: 23,
        title: "Funksiya ko'rsatkichlari",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Funksiya ham xotirada manzilga ega, shuning uchun uning manzilini ko'rsatkichda saqlash mumkin. Funksiya ko'rsatkichi kodni ma'lumot kabi uzatish, callback yozish va amallarni jadval bo'yicha tanlash imkonini beradi. E'lon <code>int (*f)(int, int);</code> ko'rinishida bo'ladi: qavslar <code>*f</code> ni funksiyadan ajratib turadi.",
          },
          {
            type: "code",
            title: "amallar_jadvali.c",
            code: String.raw`#include <stdio.h>

int qosh(int a, int b) {
    return a + b;
}

int ayir(int a, int b) {
    return a - b;
}

typedef int (*Amal)(int, int);

int hisobla(Amal amal, int a, int b) {
    return amal(a, b);
}

int main(void) {
    Amal amallar[2] = {qosh, ayir};

    for (int i = 0; i < 2; i++) {
        printf("%d\n", amallar[i](7, 3));
    }
    printf("%d\n", hisobla(qosh, 10, 20));
    return 0;
}`,
            output: "10\n4\n30",
          },
          {
            type: "table",
            head: ["E'lon", "Ma'nosi"],
            rows: [
              ["<code>int (*f)(int, int)</code>", "Ikki int olib, int qaytaruvchi funksiyaga ko'rsatkich"],
              ["<code>void (*xabar)(const char *)</code>", "Satr olib, qiymat qaytarmaydigan funksiyaga ko'rsatkich"],
              ["<code>int *f(int, int)</code>", "Ikki int olib, int ko'rsatkichi qaytaruvchi funksiya"],
              ["<code>Amal f = qosh</code>", "Funksiya nomi manzilga aylanadi"],
              ["<code>f(2, 3)</code>", "Ko'rsatkich orqali chaqirish"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "NULL ni tekshiring",
            html: "Funksiya ko'rsatkichi <code>NULL</code> bo'lishi mumkin. Uni chaqirishdan oldin <code>if (f != NULL)</code> tekshiruvi kerak. Funksiya nomini <code>&amp;qosh</code> deb ham olish mumkin, lekin C'da <code>qosh</code> o'zi ham manzilga aylanadi. Typedef ishlatish e'lonni ancha o'qishli qiladi: <code>typedef int (*Amal)(int, int);</code>.",
          },
          {
            type: "code",
            title: "callback.c",
            code: String.raw`#include <stdio.h>

typedef void (*Xabar)(const char *);

void salom(const char *ism) {
    printf("Salom, %s!\n", ism);
}

void xayr(const char *ism) {
    printf("Xayr, %s!\n", ism);
}

void yubor(Xabar funksiya, const char *ism) {
    funksiya(ism);
}

int main(void) {
    yubor(salom, "Aziza");
    yubor(xayr, "Bek");

    Xabar f = salom;
    f("Dilnoza");
    return 0;
}`,
            output: "Salom, Aziza!\nXayr, Bek!\nSalom, Dilnoza!",
          },
        ],
        quiz: [
          {
            q: "int (*f)(int, int) e'loni nimani bildiradi?",
            options: [
              "Ikki int qaytaruvchi funksiya",
              "int ko'rsatkichini qaytaruvchi funksiya",
              "Ikki int olib, int qaytaruvchi funksiyaga ko'rsatkich",
              "int massiviga ko'rsatkich",
            ],
            answer: 2,
            explain: "Qavslar tufayli *f funksiya ko'rsatkichi ekanini bildiradi; u (int, int) qabul qilib int qaytaradi.",
          },
          {
            q: "Callback funksiya ko'rsatkichi nima uchun ishlatiladi?",
            options: ["Faylni ochish uchun", "Massiv uzunligini hisoblash uchun", "Xotirani bo'shatish uchun", "Xatti-harakatni parametr sifatida uzatish uchun"],
            answer: 3,
            explain: "Callback chaqiruvchi kodga qaysi funksiya bajarilishini tanlash imkonini beradi.",
          },
          {
            q: "int *f(int, int) e'loni nimani bildiradi?",
            options: [
              "Funksiya ko'rsatkichi",
              "Ikki int massivi",
              "int ga ko'rsatkich qaytaruvchi funksiya",
              "void funksiya",
            ],
            answer: 2,
            explain: "Bu yerda * qaytish turiga tegishli: funksiya int * qaytaradi, funksiya ko'rsatkichi emas.",
          },
        ],
      },
      {
        id: 24,
        title: "qsort va bsearch",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Standart kutubxona <code>qsort</code> bilan istalgan turni saralaydi va <code>bsearch</code> bilan saralangan massivdan tez qidiradi. Ikkalasi ham <code>void *</code> bilan ishlaydi, shuning uchun taqqoslash funksiyasini o'zimiz yozamiz. Taqqoslash funksiyasi manfiy, nol yoki musbat qiymat qaytarishi kerak — bu funksiya ko'rsatkichining amaliy qo'llanishi.",
          },
          {
            type: "code",
            title: "qsort_bsearch.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int taqqosla(const void *a, const void *b) {
    int x = *(const int *)a;
    int y = *(const int *)b;
    return (x > y) - (x < y);
}

int main(void) {
    int sonlar[] = {42, 7, 19, 7, 3, 25};
    int n = (int)(sizeof(sonlar) / sizeof(sonlar[0]));
    int kalit = 19;

    qsort(sonlar, (size_t)n, sizeof(sonlar[0]), taqqosla);

    for (int i = 0; i < n; i++) {
        printf("%d", sonlar[i]);
        if (i < n - 1) {
            printf(" ");
        }
    }
    printf("\n");

    int *topilgan = bsearch(&kalit, sonlar, (size_t)n, sizeof(sonlar[0]), taqqosla);
    if (topilgan != NULL) {
        printf("Indeks: %td\n", topilgan - sonlar);
    } else {
        printf("Topilmadi\n");
    }
    return 0;
}`,
            output: "3 7 7 19 25 42\nIndeks: 3",
          },
          {
            type: "table",
            head: ["Qaytariladigan qiymat", "Ma'nosi"],
            rows: [
              ["Manfiy", "Birinchi element ikkinchisidan oldin turadi"],
              ["Nol", "Elementlar teng"],
              ["Musbat", "Birinchi element keyin turadi"],
              ["<code>NULL</code>", "bsearch hech narsa topmadi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Taqqoslash izchil bo'lsin",
            html: "Taqqoslash funksiyasi barcha chaqiruvlarda bir xil tartibni bersin. <code>return x - y;</code> yozish oson ko'rinadi, lekin katta qiymatlarda <code>int</code> toshib ketishi mumkin — shuning uchun <code>(x &gt; y) - (x &lt; y)</code> xavfsiz. <code>bsearch</code> faqat <code>qsort</code> ishlatgan taqqoslash funksiyasi bilan saralangan massivda to'g'ri ishlaydi. <code>qsort</code> barqaror (stable) emas: teng elementlarning tartibi kafolatlanmaydi.",
          },
          {
            type: "code",
            title: "strukturalarni_saralash.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char ism[16];
    int ball;
} Talaba;

int ballBoyicha(const void *a, const void *b) {
    const Talaba *x = (const Talaba *)a;
    const Talaba *y = (const Talaba *)b;
    return (y->ball > x->ball) - (y->ball < x->ball);
}

int main(void) {
    Talaba t[] = {
        {"Aziza", 92},
        {"Bek", 78},
        {"Dilnoza", 88},
    };
    int n = (int)(sizeof(t) / sizeof(t[0]));

    qsort(t, (size_t)n, sizeof(t[0]), ballBoyicha);

    for (int i = 0; i < n; i++) {
        printf("%s %d\n", t[i].ism, t[i].ball);
    }
    return 0;
}`,
            output: "Aziza 92\nDilnoza 88\nBek 78",
          },
        ],
        quiz: [
          {
            q: "Taqqoslash funksiyasi manfiy qiymat qaytarsa, qsort qanday tartiblaydi?",
            options: [
              "Birinchi elementni ikkinchisidan oldin qo'yadi",
              "Elementlarni almashtiradi",
              "Ikkala elementni teng deb hisoblaydi",
              "Saralashni to'xtatadi",
            ],
            answer: 0,
            explain: "Manfiy natija birinchi argument ikkinchisidan kichik, ya'ni oldin turishi kerakligini bildiradi.",
          },
          {
            q: "bsearch to'g'ri ishlashi uchun massiv qanday bo'lishi shart?",
            options: [
              "Faqat musbat sonlardan iborat",
              "Tasodifiy tartibda",
              "bsearch ishlatgan taqqoslash funksiyasi bo'yicha saralangan",
              "Kamida 100 elementdan iborat",
            ],
            answer: 2,
            explain: "Ikkilik qidiruv har qadamda yarmini tashlab yuboradi; bu faqat tartiblangan massivda to'g'ri.",
          },
          {
            q: "(x > y) - (x < y) ifodasi nima uchun x - y o'rniga ishlatiladi?",
            options: ["Natijani har doim musbat qilish uchun", "qsort buni talab qilgani uchun", "Tezroq ishlashi uchun", "Butun sonlar ayirmasida toshib ketishning oldini olish uchun"],
            answer: 3,
            explain: "x - y katta qiymatlarda int diapazonidan chiqishi mumkin; taqqoslashlar esa faqat -1, 0 yoki 1 beradi.",
          },
        ],
      },
      {
        id: 25,
        title: "Rekursiya",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Rekursiya — funksiyaning o'zini o'zi chaqirishi. Har bir rekursiv funksiyada <b>baza holat</b> (to'xtash sharti) va <b>rekursiv qadam</b> (masalani kichraytirish) bo'lishi shart. Rekursiya daraxtlar, bo'linish algoritmlari va matematik ta'riflar uchun tabiiy, lekin har bir chaqiruv stekda joy egallaydi — chuqur rekursiya stekni toshirib yuborishi mumkin.",
          },
          {
            type: "code",
            title: "faktorial_gcd.c",
            code: String.raw`#include <stdio.h>

unsigned long long faktorial(unsigned n) {
    if (n <= 1) {
        return 1ULL;
    }
    return (unsigned long long)n * faktorial(n - 1);
}

unsigned gcd(unsigned a, unsigned b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

int main(void) {
    printf("%llu\n", faktorial(10));
    printf("%llu\n", faktorial(5));
    printf("%u\n", gcd(48, 18));
    return 0;
}`,
            output: "3628800\n120\n6",
          },
          {
            type: "table",
            head: ["Qism", "Vazifasi", "Misol"],
            rows: [
              ["Baza holat", "Rekursiyani to'xtatadi", "<code>if (n &lt;= 1) return 1;</code>"],
              ["Rekursiv qadam", "Masalani kichraytiradi", "<code>n * faktorial(n - 1)</code>"],
              ["Chaqiruvlar steki", "Har chaqiruvga alohida freym", "Juda chuqur bo'lsa overflow"],
              ["Qaytish", "Natijalar orqaga yig'iladi", "Har freym o'z qiymatini oladi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Ikki marta rekursiya — eksponensial",
            html: "Fibonachchi sonini <code>f(n) = f(n-1) + f(n-2)</code> bilan to'g'ridan-to'g'ri hisoblash bir xil qiymatlarni qayta-qayta hisoblaydi va vaqt eksponensial o'sadi. Bunday holatda memoizatsiya yoki iterativ yechim kerak. Rekursiyani tanlashdan oldin baza holat to'g'ri ishlashiga va chuqurlik oqilona ekaniga ishonch hosil qiling.",
          },
          {
            type: "code",
            title: "teskari_va_raqamlar.c",
            code: String.raw`#include <stdio.h>

void teskari(const char *s) {
    if (*s == '\0') {
        return;
    }
    teskari(s + 1);
    putchar(*s);
}

int raqamlarYigindisi(unsigned n) {
    if (n < 10) {
        return (int)n;
    }
    return (int)(n % 10) + raqamlarYigindisi(n / 10);
}

int main(void) {
    teskari("Dilnoza");
    printf("\n");
    printf("%d\n", raqamlarYigindisi(4729));
    return 0;
}`,
            output: "azonliD\n22",
          },
        ],
        quiz: [
          {
            q: "Rekursiv funksiyada baza holat bo'lmasa nima bo'ladi?",
            options: [
              "Funksiya avtomatik to'xtaydi",
              "Natija har doim 0 bo'ladi",
              "Kompilyator xatoni o'chiradi",
              "Chaqiruvlar cheksiz davom etib, stek toshib ketadi",
            ],
            answer: 3,
            explain: "To'xtash sharti bo'lmasa, har chaqiruv yangi freym ochadi va oxir-oqibat stek overflow yuz beradi.",
          },
          {
            q: "faktorial(4) rekursiv hisoblanganda qanday natija qaytaradi?",
            options: ["16", "120", "12", "24"],
            answer: 3,
            explain: "4! = 4 * 3 * 2 * 1 = 24.",
          },
          {
            q: "Har bir rekursiv chaqiruv haqidagi to'g'ri gap qaysi?",
            options: [
              "O'zining alohida stek freymiga ega bo'ladi",
              "Boshqa chaqiruvlar bilan bitta freymni bo'lishadi",
              "Xotira ishlatmaydi",
              "Faqat global o'zgaruvchilarda ishlaydi",
            ],
            answer: 0,
            explain: "Har bir chaqiruv uchun parametrlar va mahalliy o'zgaruvchilar saqlanadigan alohida stek freymi ochiladi.",
          },
        ],
      },
      {
        id: 26,
        title: "Qidiruv algoritmlari va murakkablik",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Qidiruv — to'plamdan kerakli elementni topish. <b>Chiziqli qidiruv</b> har bir elementni ketma-ket tekshiradi va tartibsiz massivda ham ishlaydi. <b>Ikkilik qidiruv</b> faqat saralangan massivda ishlaydi, lekin har qadamda qidiruv oralig'ini ikki baravar qisqartiradi. Algoritm samaradorligini <b>Big-O</b> yozuvi bilan baholaymiz.",
          },
          {
            type: "code",
            title: "chiziqli_qidiruv.c",
            code: String.raw`#include <stdio.h>

int chiziqliQidiruv(const int *a, int n, int kalit, int *tekshiruvlar) {
    *tekshiruvlar = 0;
    for (int i = 0; i < n; i++) {
        (*tekshiruvlar)++;
        if (a[i] == kalit) {
            return i;
        }
    }
    return -1;
}

int main(void) {
    int sonlar[6] = {8, 3, 12, 5, 9, 7};
    int tekshiruvlar;
    int indeks = chiziqliQidiruv(sonlar, 6, 9, &tekshiruvlar);

    printf("Indeks: %d\n", indeks);
    printf("Tekshiruvlar: %d\n", tekshiruvlar);
    return 0;
}`,
            output: "Indeks: 4\nTekshiruvlar: 5",
          },
          {
            type: "table",
            head: ["Murakkablik", "Nomi", "Misol"],
            rows: [
              ["<code>O(1)</code>", "Doimiy", "Massiv indeksi bo'yicha murojaat"],
              ["<code>O(log n)</code>", "Logarifmik", "Ikkilik qidiruv"],
              ["<code>O(n)</code>", "Chiziqli", "Chiziqli qidiruv"],
              ["<code>O(n log n)</code>", "Kvazi-chiziqli", "qsort, merge sort"],
              ["<code>O(n²)</code>", "Kvadratik", "Bubble sort, ichma-ich tsikllar"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Nega ikkilik qidiruv tez?",
            html: "1000 elementli massivda chiziqli qidiruv eng yomon holatda 1000 ta tekshiruv qiladi. Ikkilik qidiruv esa har qadamda yarmini tashlab, taxminan <code>log₂(1000) ≈ 10</code> qadamda topadi. Lekin massiv saralanmagan bo'lsa, avval saralash kerak: <code>O(n log n)</code> saralash bir martalik xarajat, keyin har bir qidiruv arzon. Tez-tez qidiruv kerak bo'lsa, hash jadval ham muqobil.",
          },
          {
            type: "code",
            title: "ikkilik_qidiruv.c",
            code: String.raw`#include <stdio.h>

int ikkilikQidiruv(const int *a, int n, int kalit, int *qadamlar) {
    int past = 0;
    int yuqori = n - 1;
    *qadamlar = 0;

    while (past <= yuqori) {
        int orta = past + (yuqori - past) / 2;
        (*qadamlar)++;

        if (a[orta] == kalit) {
            return orta;
        }
        if (a[orta] < kalit) {
            past = orta + 1;
        } else {
            yuqori = orta - 1;
        }
    }
    return -1;
}

int main(void) {
    int sonlar[10] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int qadamlar;
    int indeks = ikkilikQidiruv(sonlar, 10, 23, &qadamlar);

    printf("Indeks: %d\n", indeks);
    printf("Qadamlar: %d\n", qadamlar);
    return 0;
}`,
            output: "Indeks: 5\nQadamlar: 3",
          },
        ],
        quiz: [
          {
            q: "Ikkilik qidiruv qanday massivda to'g'ri ishlaydi?",
            options: [
              "Har qanday massivda",
              "Faqat juft sonlardan iborat massivda",
              "Saralangan massivda",
              "Faqat 10 elementli massivda",
            ],
            answer: 2,
            explain: "Ikkilik qidiruv o'rta element bilan taqqoslab yarmini tashlaydi; bu tartib buzilgan massivda noto'g'ri natija beradi.",
          },
          {
            q: "1024 elementli saralangan massivda ikkilik qidiruv eng ko'pi bilan taxminan necha qadam oladi?",
            options: ["512", "2", "1024", "10"],
            answer: 3,
            explain: "log₂(1024) = 10, shuning uchun eng yomon holatda taxminan 10 ta taqqoslash yetadi.",
          },
          {
            q: "Chiziqli qidiruvning eng yomon holat murakkabligi qanday?",
            options: ["O(1)", "O(log n)", "O(n²)", "O(n)"],
            answer: 3,
            explain: "Eng yomon holatda barcha n ta element tekshiriladi, shuning uchun murakkablik O(n).",
          },
        ],
      },
      {
        id: 27,
        title: "Saralash algoritmlari",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Saralash — elementlarni berilgan tartibga keltirish. Bubble sort, selection sort va insertion sort o'rganish uchun sodda, lekin katta massivlarda sekin. Ular O(n²) ishlaydi, ammo kam elementlarda va deyarli saralangan ma'lumotlarda amaliy bo'lishi mumkin. Haqiqiy loyihalarda odatda <code>qsort</code> yoki maxsus tez algoritmlar ishlatiladi.",
          },
          {
            type: "code",
            title: "bubble_sort.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int a[5] = {5, 1, 4, 2, 8};
    int n = 5;
    int almashish = 0;

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                int vaqt = a[j];
                a[j] = a[j + 1];
                a[j + 1] = vaqt;
                almashish++;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        printf("%d", a[i]);
        if (i < n - 1) {
            printf(" ");
        }
    }
    printf("\n");
    printf("Almashishlar: %d\n", almashish);
    return 0;
}`,
            output: "1 2 4 5 8\nAlmashishlar: 4",
          },
          {
            type: "table",
            head: ["Algoritm", "Eng yaxshi", "O'rtacha", "Barqaror"],
            rows: [
              ["Bubble sort", "O(n)", "O(n²)", "Ha"],
              ["Selection sort", "O(n²)", "O(n²)", "Yo'q"],
              ["Insertion sort", "O(n)", "O(n²)", "Ha"],
              ["qsort", "O(n log n)", "O(n log n)", "Yo'q"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Qaysi algoritmni tanlash?",
            html: "Kichik massiv (o'nlab element) uchun oddiy algoritm yetarli va kod tushunarli bo'ladi. Katta ma'lumot uchun <code>qsort</code> yoki boshqa O(n log n) algoritm tanlang. <b>Barqarorlik</b> teng elementlarning asl tartibini saqlashni bildiradi; bu bir necha maydon bo'yicha saralashda muhim. Har doim real o'lchamda o'lchab ko'ring — nazariy murakkablik yagona mezon emas.",
          },
          {
            type: "code",
            title: "selection_sort.c",
            code: String.raw`#include <stdio.h>

void tanlabSarala(int *a, int n, int *taqqoslashlar) {
    *taqqoslashlar = 0;
    for (int i = 0; i < n - 1; i++) {
        int engKichik = i;
        for (int j = i + 1; j < n; j++) {
            (*taqqoslashlar)++;
            if (a[j] < a[engKichik]) {
                engKichik = j;
            }
        }
        if (engKichik != i) {
            int vaqt = a[i];
            a[i] = a[engKichik];
            a[engKichik] = vaqt;
        }
    }
}

int main(void) {
    int a[5] = {64, 25, 12, 22, 11};
    int taqqoslashlar;

    tanlabSarala(a, 5, &taqqoslashlar);

    for (int i = 0; i < 5; i++) {
        printf("%d", a[i]);
        if (i < 4) {
            printf(" ");
        }
    }
    printf("\n");
    printf("Taqqoslashlar: %d\n", taqqoslashlar);
    return 0;
}`,
            output: "11 12 22 25 64\nTaqqoslashlar: 10",
          },
        ],
        quiz: [
          {
            q: "Bubble sort ning eng yomon holat murakkabligi qanday?",
            options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
            answer: 0,
            explain: "Ichma-ich tsikllar tufayli eng yomon holatda taqqoslashlar soni n(n-1)/2, ya'ni O(n²).",
          },
          {
            q: "Qaysi algoritm barqaror (stable) hisoblanadi?",
            options: ["Selection sort", "qsort", "Insertion sort", "Hech biri"],
            answer: 2,
            explain: "Insertion sort teng elementlarning nisbiy tartibini saqlaydi, shuning uchun barqaror.",
          },
          {
            q: "Selection sort da taqqoslashlar soni massiv tartibiga bog'liqmi?",
            options: ["Faqat 10 elementdan keyin bog'liq", "Faqat manfiy sonlarda bog'liq", "Ha, butunlay bog'liq", "Yo'q, u har doim n(n-1)/2 taqqoslash bajaradi"],
            answer: 3,
            explain: "Selection sort har bir qadamda qolgan barcha elementlarni ko'zdan kechiradi, shuning uchun taqqoslashlar soni doimiy.",
          },
        ],
      },
      {
        id: 28,
        title: "Dinamik massiv (o'suvchi vektor)",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Oddiy massiv hajmi kompilyatsiya vaqtida belgilanadi. Foydalanuvchi nechta element kiritishini oldindan bilmasak, <b>dinamik massiv</b> kerak bo'ladi. U uchta qiymatdan iborat: ma'lumotga ko'rsatkich, joriy elementlar soni (<code>size</code>) va ajratilgan sig'im (<code>capacity</code>). Sig'im tugaganda uni ikki baravar oshiramiz — bu <b>amortizatsiyalangan O(1)</b> qo'shishni beradi.",
          },
          {
            type: "code",
            title: "intvec.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *data;
    size_t size;
    size_t cap;
} IntVec;

int push(IntVec *v, int x) {
    if (v->size == v->cap) {
        size_t yangi = (v->cap == 0) ? 2 : v->cap * 2;
        int *p = realloc(v->data, yangi * sizeof *p);
        if (p == NULL) {
            return 0;
        }
        v->data = p;
        v->cap = yangi;
    }
    v->data[v->size] = x;
    v->size++;
    return 1;
}

int main(void) {
    IntVec v = {0};
    int jami = 0;

    for (int i = 1; i <= 5; i++) {
        if (!push(&v, i * 10)) {
            printf("Xotira yetmadi\n");
            free(v.data);
            return 1;
        }
    }

    for (size_t i = 0; i < v.size; i++) {
        jami += v.data[i];
    }

    printf("size=%zu cap=%zu\n", v.size, v.cap);
    printf("Jami: %d\n", jami);
    free(v.data);
    return 0;
}`,
            output: "size=5 cap=8\nJami: 150",
          },
          {
            type: "table",
            head: ["Maydon", "Ma'nosi", "Misol"],
            rows: [
              ["<code>data</code>", "Elementlar joylashgan blok", "<code>malloc/realloc</code> natijasi"],
              ["<code>size</code>", "Haqiqiy elementlar soni", "5 ta element"],
              ["<code>cap</code>", "Ajratilgan sig'im", "8 ta element uchun joy"],
              ["<code>push</code>", "Oxiriga qo'shadi", "Sig'im tugasa ikki baravar oshadi"],
              ["<code>free</code>", "Butun blokni bo'shatadi", "Oxirida bir marta"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "realloc ni to'g'ri ishlatish",
            html: "<code>realloc</code> natijasini to'g'ridan-to'g'ri <code>v-&gt;data</code> ga yozmang: u <code>NULL</code> qaytarsa, eski blok manzili yo'qoladi va xotira oqadi. Avval vaqtinchalik ko'rsatkichga oling, tekshiring, keyin biriktiring. <code>realloc</code> yangi manzil qaytarishi mumkin, shuning uchun eski manzilni ishlatishda davom etmang. Bo'shatgandan keyin ko'rsatkichni <code>NULL</code> ga qo'yish odat tusiga kirsin.",
          },
          {
            type: "code",
            title: "vectordan_ochirish.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int *data;
    size_t size;
    size_t cap;
} IntVec;

int push(IntVec *v, int x) {
    if (v->size == v->cap) {
        size_t yangi = (v->cap == 0) ? 2 : v->cap * 2;
        int *p = realloc(v->data, yangi * sizeof *p);
        if (p == NULL) {
            return 0;
        }
        v->data = p;
        v->cap = yangi;
    }
    v->data[v->size++] = x;
    return 1;
}

int ochir(IntVec *v, size_t indeks) {
    if (indeks >= v->size) {
        return 0;
    }
    memmove(&v->data[indeks], &v->data[indeks + 1],
            (v->size - indeks - 1) * sizeof *v->data);
    v->size--;
    return 1;
}

int main(void) {
    IntVec v = {0};

    for (int i = 1; i <= 5; i++) {
        if (!push(&v, i * 10)) {
            free(v.data);
            return 1;
        }
    }

    ochir(&v, 1);

    for (size_t i = 0; i < v.size; i++) {
        printf("%d", v.data[i]);
        if (i + 1 < v.size) {
            printf(" ");
        }
    }
    printf("\nsize=%zu\n", v.size);
    free(v.data);
    return 0;
}`,
            output: "10 30 40 50\nsize=4",
          },
        ],
        quiz: [
          {
            q: "Dinamik massivda size va cap o'rtasidagi farq nima?",
            options: ["size — baytlar soni, cap — elementlar soni", "cap faqat manfiy bo'lishi mumkin", "Ikkalasi bir xil", "size — mavjud elementlar soni, cap — ajratilgan joylar soni"],
            answer: 3,
            explain: "size haqiqiy elementlar sonini, cap esa xotirada tayyor turgan elementlar sig'imini bildiradi.",
          },
          {
            q: "realloc natijasini nega vaqtinchalik ko'rsatkichga olish tavsiya etiladi?",
            options: [
              "Kod qisqarishi uchun",
              "realloc har doim NULL qaytaradi",
              "Eski blokni saqlab qolish uchun emas, balki xato bo'lsa manzilni yo'qotmaslik uchun",
              "realloc faqat massivlar uchun ishlaydi",
            ],
            answer: 2,
            explain: "Xato bo'lsa realloc NULL qaytaradi, eski blok esa o'z joyida qoladi; natijani to'g'ridan-to'g'ri yozsangiz eski manzil yo'qoladi.",
          },
          {
            q: "Dinamik massiv o'rtasidan element o'chirish qanday murakkablikda bo'ladi?",
            options: [
              "O(n), keyingi elementlarni siljitish kerak",
              "O(1), faqat size kamayadi",
              "O(log n)",
              "O(n²)",
            ],
            answer: 0,
            explain: "O'chirilgandan keyin qolgan elementlar bir joyga suriladi; bu O(n) vaqt oladi.",
          },
        ],
      },
      {
        id: 29,
        title: "Dinamik matnlar va buferlar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Satr uzunligi ish vaqtida ma'lum bo'lsa, xotirani <code>malloc</code> bilan ajratish kerak. Satr uchun har doim <code>uzunlik + 1</code> bayt olinadi: oxirgi bayt <code>'\\0'</code> uchun. Dinamik satrni yaratgan funksiya uning egasi bo'ladi yoki egalikni chaqiruvchiga aniq topshiradi — bu C'da xotira xatolarining eng ko'p uchraydigan manbai.",
          },
          {
            type: "code",
            title: "birlashtirish.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *birlashtir(const char *a, const char *b) {
    size_t na = strlen(a);
    size_t nb = strlen(b);
    char *natija = malloc(na + nb + 1);

    if (natija == NULL) {
        return NULL;
    }

    memcpy(natija, a, na);
    memcpy(natija + na, b, nb + 1);
    return natija;
}

int main(void) {
    char *matn = birlashtir("Noldan", " C");

    if (matn == NULL) {
        printf("Xotira yetmadi\n");
        return 1;
    }

    printf("%s\n", matn);
    printf("%zu\n", strlen(matn));
    free(matn);
    return 0;
}`,
            output: "Noldan C\n8",
          },
          {
            type: "table",
            head: ["Vazifa", "Funksiya", "E'tibor"],
            rows: [
              ["Uzunlikni aniqlash", "<code>strlen</code>", "O(n) vaqt"],
              ["Xotira ajratish", "<code>malloc(len + 1)</code>", "Nol uchun bitta qo'shimcha bayt"],
              ["Nusxalash", "<code>memcpy</code>", "Nol belgisini ham ko'chirish kerak"],
              ["Formatlash", "<code>snprintf</code>", "Bufer hajmini beradi"],
              ["Bo'shatish", "<code>free</code>", "Har bir malloc uchun bitta"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "snprintf bilan hajmni oldindan o'lchash",
            html: "<code>snprintf(NULL, 0, fmt, ...)</code> hech narsa yozmaydi, lekin natija uchun kerakli belgilar sonini qaytaradi. Bu uzunlikni bilib, <code>malloc(kerak + 1)</code> qilib, keyin haqiqiy formatlashni bajarish mumkin. Bu usul ishonchli va ko'chma. Egalik qoidasini hujjatlashtiring: funksiya qaytargan ko'rsatkichni chaqiruvchi <code>free</code> qiladimi yoki yo'qmi — kod izohida aniq yozing.",
          },
          {
            type: "code",
            title: "olchovli_format.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int kerak = snprintf(NULL, 0, "%s-%02d", "dars", 49);

    if (kerak < 0) {
        printf("Format xatosi\n");
        return 1;
    }

    char *matn = malloc((size_t)kerak + 1);
    if (matn == NULL) {
        printf("Xotira yetmadi\n");
        return 1;
    }

    snprintf(matn, (size_t)kerak + 1, "%s-%02d", "dars", 49);
    printf("%s\n", matn);
    printf("%d\n", kerak);
    free(matn);
    return 0;
}`,
            output: "dars-49\n7",
          },
        ],
        quiz: [
          {
            q: "Uzunligi len bo'lgan satr uchun malloc orqali nechta bayt ajratiladi?",
            options: ["len", "len - 1", "len + 1", "len * 2"],
            answer: 2,
            explain: "Satr oxiridagi '\\0' uchun qo'shimcha bitta bayt kerak, shuning uchun len + 1.",
          },
          {
            q: "snprintf(NULL, 0, ...) chaqiruvining maqsadi nima?",
            options: [
              "Natija uchun kerakli belgilar sonini o'lchash",
              "Xotirani bo'shatish",
              "Satrni nusxalash",
              "Faylni ochish",
            ],
            answer: 0,
            explain: "Bu chaqiruv hech narsa yozmaydi, ammo formatlangan natija uzunligini qaytaradi.",
          },
          {
            q: "Funksiya malloc bilan yaratilgan satrni qaytarsa, uni kim bo'shatishi kerak?",
            options: [
              "Kompilyator avtomatik bo'shatadi",
              "Funksiya o'zi har doim bo'shatadi",
              "Hech kim, u dastur tugaguncha qoladi",
              "Egalik kelishuviga ko'ra chaqiruvchi, odatda free bilan",
            ],
            answer: 3,
            explain: "C'da avtomatik garbage collector yo'q; egalik aniq kelishilishi va odatda chaqiruvchi free qilishi kerak.",
          },
        ],
      },
      {
        id: 30,
        title: "Bog'langan ro'yxat (linked list)",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Bog'langan ro'yxat elementlari xotirada ketma-ket emas; har bir <b>tugun</b> o'z qiymatini va keyingi tugun manzilini saqlaydi. Ro'yxatning boshi <code>head</code> ko'rsatkichi orqali topiladi, oxirgi tugunning <code>next</code> qiymati <code>NULL</code> bo'ladi. Bu tuzilma o'rtasiga tez qo'shish imkonini beradi, lekin indeks bo'yicha murojaat O(n).",
          },
          {
            type: "code",
            title: "royxat.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int qiymat;
    struct Node *keyingi;
} Node;

Node *qosh(Node *bosh, int x) {
    Node *yangi = malloc(sizeof *yangi);
    if (yangi == NULL) {
        return bosh;
    }
    yangi->qiymat = x;
    yangi->keyingi = NULL;

    if (bosh == NULL) {
        return yangi;
    }

    Node *p = bosh;
    while (p->keyingi != NULL) {
        p = p->keyingi;
    }
    p->keyingi = yangi;
    return bosh;
}

void chiqar(const Node *bosh) {
    for (const Node *p = bosh; p != NULL; p = p->keyingi) {
        printf("%d -> ", p->qiymat);
    }
    printf("NULL\n");
}

void tozala(Node *bosh) {
    while (bosh != NULL) {
        Node *keyingi = bosh->keyingi;
        free(bosh);
        bosh = keyingi;
    }
}

int main(void) {
    Node *bosh = NULL;
    int soni = 0;

    bosh = qosh(bosh, 10);
    bosh = qosh(bosh, 20);
    bosh = qosh(bosh, 30);

    chiqar(bosh);
    for (const Node *p = bosh; p != NULL; p = p->keyingi) {
        soni++;
    }
    printf("Tugunlar: %d\n", soni);
    tozala(bosh);
    return 0;
}`,
            output: "10 -> 20 -> 30 -> NULL\nTugunlar: 3",
          },
          {
            type: "table",
            head: ["Amal", "Murakkablik", "Izoh"],
            rows: [
              ["Boshiga qo'shish", "O(1)", "Yangi tugun head bo'ladi"],
              ["Oxiriga qo'shish", "O(n)", "Tail ko'rsatkichi bo'lsa O(1)"],
              ["Qiymat bo'yicha qidirish", "O(n)", "Boshdan oxirigacha yurish"],
              ["Indeks bo'yicha murojaat", "O(n)", "Massivda O(1)"],
              ["O'chirish", "O(n)", "Oldingi tugunni topish kerak"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Head ni yo'qotmang",
            html: "Ro'yxatning yagona kirish nuqtasi — <code>head</code>. Uni nusxalab yursangiz, asl boshni yo'qotib qo'ysangiz, butun ro'yxat xotirasi oqadi. Bo'shatishda avval keyingi tugun manzilini saqlang, keyin joriy tugunni <code>free</code> qiling: <code>Node *keyingi = p-&gt;keyingi; free(p); p = keyingi;</code>. Bo'shatilgandan keyin <code>p-&gt;keyingi</code> ni o'qish — use-after-free xatosi.",
          },
          {
            type: "code",
            title: "boshiga_qoshish.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int qiymat;
    struct Node *keyingi;
} Node;

Node *boshgaQosh(Node *bosh, int x) {
    Node *yangi = malloc(sizeof *yangi);
    if (yangi == NULL) {
        return bosh;
    }
    yangi->qiymat = x;
    yangi->keyingi = bosh;
    return yangi;
}

int main(void) {
    Node *bosh = NULL;

    bosh = boshgaQosh(bosh, 10);
    bosh = boshgaQosh(bosh, 20);
    bosh = boshgaQosh(bosh, 30);

    for (Node *p = bosh; p != NULL; p = p->keyingi) {
        printf("%d", p->qiymat);
        if (p->keyingi != NULL) {
            printf(" -> ");
        }
    }
    printf("\nBosh: %d\n", bosh->qiymat);

    while (bosh != NULL) {
        Node *keyingi = bosh->keyingi;
        free(bosh);
        bosh = keyingi;
    }
    return 0;
}`,
            output: "30 -> 20 -> 10\nBosh: 30",
          },
        ],
        quiz: [
          {
            q: "Bog'langan ro'yxat tuguni odatda nimalardan iborat?",
            options: ["Massiv va uning uzunligi", "Faqat keyingi tugun manzili", "Faqat butun son", "Qiymat va keyingi tugun manzili"],
            answer: 3,
            explain: "Har bir tugun o'z ma'lumotini va keyingi tugunga ko'rsatkichni saqlaydi.",
          },
          {
            q: "Tail ko'rsatkichi bo'lmasa, ro'yxat oxiriga qo'shish murakkabligi qanday?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
            explain: "Oxirgi tugunni topish uchun butun ro'yxat bo'ylab yurish kerak, bu O(n).",
          },
          {
            q: "Ro'yxatni bo'shatishda qaysi tartib xavfsiz?",
            options: [
              "Avval keyingi manzilni saqlab, keyin joriy tugunni free qilish",
              "Avval free qilib, keyin keyingi tugunni o'qish",
              "Barcha tugunlarni bir marta free qilish yetarli emas, ikki marta free qilish kerak",
              "Faqat head ni free qilish",
            ],
            answer: 0,
            explain: "free dan keyin tugun xotirasini o'qib bo'lmaydi, shuning uchun keyingi manzil oldin saqlanadi.",
          },
        ],
      },
      {
        id: 31,
        title: "Ro'yxatda o'chirish va teskari aylantirish",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Bog'langan ro'yxatda o'chirish uchun oldingi tugunning <code>keyingi</code> ko'rsatkichini yangilash kerak. Agar o'chiriladigan tugun bosh bo'lsa, <code>head</code> ning o'zi o'zgaradi. Ro'yxatni teskari aylantirish esa uchta ko'rsatkich bilan bajariladi: oldingi, joriy va keyingi. Bu amallar ko'rsatkichlar bilan ishlashning klassik mashqlari.",
          },
          {
            type: "code",
            title: "ochirish.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int qiymat;
    struct Node *keyingi;
} Node;

Node *boshgaQosh(Node *bosh, int x) {
    Node *yangi = malloc(sizeof *yangi);
    if (yangi == NULL) {
        return bosh;
    }
    yangi->qiymat = x;
    yangi->keyingi = bosh;
    return yangi;
}

Node *ochir(Node *bosh, int x) {
    if (bosh == NULL) {
        return NULL;
    }
    if (bosh->qiymat == x) {
        Node *yangiBosh = bosh->keyingi;
        free(bosh);
        return yangiBosh;
    }

    Node *p = bosh;
    while (p->keyingi != NULL && p->keyingi->qiymat != x) {
        p = p->keyingi;
    }
    if (p->keyingi != NULL) {
        Node *ochiriladigan = p->keyingi;
        p->keyingi = ochiriladigan->keyingi;
        free(ochiriladigan);
    }
    return bosh;
}

int main(void) {
    Node *bosh = NULL;

    bosh = boshgaQosh(bosh, 40);
    bosh = boshgaQosh(bosh, 30);
    bosh = boshgaQosh(bosh, 20);
    bosh = boshgaQosh(bosh, 10);

    bosh = ochir(bosh, 20);

    for (Node *p = bosh; p != NULL; p = p->keyingi) {
        printf("%d", p->qiymat);
        if (p->keyingi != NULL) {
            printf(" -> ");
        }
    }
    printf("\n");

    while (bosh != NULL) {
        Node *keyingi = bosh->keyingi;
        free(bosh);
        bosh = keyingi;
    }
    return 0;
}`,
            output: "10 -> 30 -> 40",
          },
          {
            type: "table",
            head: ["Holat", "Nima qilinadi", "E'tibor"],
            rows: [
              ["Bosh tugunni o'chirish", "<code>head</code> keyingi tugunga o'tadi", "Eski bosh free qilinadi"],
              ["O'rta tugunni o'chirish", "Oldingi tugun <code>next</code> ni yangilaydi", "Oldingi tugunni topish kerak"],
              ["Oxirgi tugunni o'chirish", "Oldingi tugun <code>next = NULL</code>", "Bo'shatish unutilmasin"],
              ["Topilmasa", "Ro'yxat o'zgarmaydi", "Qidiruv oxirigacha boriladi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Teskari aylantirish g'oyasi",
            html: "Har qadamda joriy tugunning <code>next</code> ko'rsatkichini oldingi tugunga qarata o'zgartiramiz. Buning uchun keyingi tugun manzilini oldindan saqlash shart, aks holda qolgan ro'yxat yo'qoladi. Uch ko'rsatkich: <code>oldingi</code>, <code>joriy</code>, <code>keyingi</code>. Oxirida <code>oldingi</code> yangi bosh bo'ladi.",
          },
          {
            type: "code",
            title: "teskari_royxat.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int qiymat;
    struct Node *keyingi;
} Node;

Node *qosh(Node *bosh, int x) {
    Node *yangi = malloc(sizeof *yangi);
    if (yangi == NULL) {
        return bosh;
    }
    yangi->qiymat = x;
    yangi->keyingi = NULL;

    if (bosh == NULL) {
        return yangi;
    }
    Node *p = bosh;
    while (p->keyingi != NULL) {
        p = p->keyingi;
    }
    p->keyingi = yangi;
    return bosh;
}

Node *teskari(Node *bosh) {
    Node *oldingi = NULL;
    while (bosh != NULL) {
        Node *keyingi = bosh->keyingi;
        bosh->keyingi = oldingi;
        oldingi = bosh;
        bosh = keyingi;
    }
    return oldingi;
}

int main(void) {
    Node *bosh = NULL;

    bosh = qosh(bosh, 10);
    bosh = qosh(bosh, 20);
    bosh = qosh(bosh, 30);
    bosh = teskari(bosh);

    for (Node *p = bosh; p != NULL; p = p->keyingi) {
        printf("%d", p->qiymat);
        if (p->keyingi != NULL) {
            printf(" -> ");
        }
    }
    printf("\n");

    while (bosh != NULL) {
        Node *keyingi = bosh->keyingi;
        free(bosh);
        bosh = keyingi;
    }
    return 0;
}`,
            output: "30 -> 20 -> 10",
          },
        ],
        quiz: [
          {
            q: "Bog'langan ro'yxatning bosh tugunini o'chirishda nima o'zgaradi?",
            options: [
              "Faqat qiymat",
              "Hech narsa",
              "Oxirgi tugun",
              "head ko'rsatkichi keyingi tugunga o'tadi",
            ],
            answer: 3,
            explain: "Bosh tugun o'chirilganda ro'yxatning kirish nuqtasi yangilanadi, aks holda bo'shatilgan xotiraga ishora qoladi.",
          },
          {
            q: "Ro'yxatni iterativ teskari aylantirishda nechta ko'rsatkich ishlatiladi?",
            options: ["Ikkita", "To'rtta", "Bitta", "Uchta: oldingi, joriy, keyingi"],
            answer: 3,
            explain: "Keyingi tugunni yo'qotmaslik uchun oldingi, joriy va keyingi ko'rsatkichlari kerak.",
          },
          {
            q: "Singly linked list da o'rta tugunni o'chirish uchun nima kerak?",
            options: [
              "Faqat o'chiriladigan tugun manzili",
              "Faqat head",
              "Oldingi tugun manzili",
              "Butun ro'yxat nusxasi",
            ],
            answer: 2,
            explain: "Oldingi tugunning next ko'rsatkichini yangilash uchun uning manzili kerak.",
          },
        ],
      },
      {
        id: 32,
        title: "Stack (stek)",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Stack — <b>LIFO</b> (Last In, First Out) tuzilmasi: oxirgi qo'yilgan element birinchi olinadi. U funksiya chaqiruvlari, qavslar muvozanatini tekshirish, qaytarish (undo) va ifodalarni hisoblashda ishlatiladi. Massiv asosidagi stek oddiy va tez; asosiy amallar <code>push</code> va <code>pop</code>.",
          },
          {
            type: "code",
            title: "stek.c",
            code: String.raw`#include <stdio.h>

#define MAX 5

typedef struct {
    int data[MAX];
    int top;
} Stack;

void init(Stack *s) {
    s->top = -1;
}

int push(Stack *s, int x) {
    if (s->top == MAX - 1) {
        return 0;
    }
    s->data[++s->top] = x;
    return 1;
}

int pop(Stack *s, int *out) {
    if (s->top < 0) {
        return 0;
    }
    *out = s->data[s->top--];
    return 1;
}

int main(void) {
    Stack s;
    int x;

    init(&s);
    push(&s, 10);
    push(&s, 20);
    push(&s, 30);

    while (pop(&s, &x)) {
        printf("%d\n", x);
    }
    printf("Bosh: %d\n", s.top);
    return 0;
}`,
            output: "30\n20\n10\nBosh: -1",
          },
          {
            type: "table",
            head: ["Amal", "Vazifasi", "Murakkablik"],
            rows: [
              ["<code>push</code>", "Element qo'shadi", "O(1)"],
              ["<code>pop</code>", "Oxirgi elementni oladi", "O(1)"],
              ["<code>peek/top</code>", "Oxirgi elementni o'qiydi", "O(1)"],
              ["<code>isEmpty</code>", "Bo'shligini tekshiradi", "O(1)"],
              ["Qidirish", "Elementni topadi", "O(n)"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Overflow va underflow",
            html: "To'la stekka <code>push</code> qilish — <b>overflow</b>, bo'sh stekdan <code>pop</code> qilish — <b>underflow</b>. Ikkalasini ham tekshirish shart: funksiyalar muvaffaqiyatni <code>1</code>, xatoni <code>0</code> bilan qaytaradi. <code>top</code> indeksi <code>-1</code> bo'lsa stek bo'sh. Dinamik stek uchun massiv o'rniga bog'langan ro'yxat yoki <code>realloc</code> ishlatiladi.",
          },
          {
            type: "code",
            title: "qavslar.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

#define MAX 64

typedef struct {
    char data[MAX];
    int top;
} CharStack;

void init(CharStack *s) {
    s->top = -1;
}

int push(CharStack *s, char c) {
    if (s->top == MAX - 1) {
        return 0;
    }
    s->data[++s->top] = c;
    return 1;
}

int pop(CharStack *s, char *c) {
    if (s->top < 0) {
        return 0;
    }
    *c = s->data[s->top--];
    return 1;
}

int balans(const char *s) {
    CharStack st;
    init(&st);

    for (; *s != '\0'; s++) {
        if (*s == '(' || *s == '[' || *s == '{') {
            if (!push(&st, *s)) {
                return 0;
            }
        } else if (*s == ')' || *s == ']' || *s == '}') {
            char ochilgan;
            if (!pop(&st, &ochilgan)) {
                return 0;
            }
            if ((*s == ')' && ochilgan != '(') ||
                (*s == ']' && ochilgan != '[') ||
                (*s == '}' && ochilgan != '{')) {
                return 0;
            }
        }
    }
    return st.top == -1;
}

int main(void) {
    printf("%d\n", balans("([]{})"));
    printf("%d\n", balans("([)]"));
    printf("%d\n", balans("(("));
    return 0;
}`,
            output: "1\n0\n0",
          },
        ],
        quiz: [
          {
            q: "LIFO tamoyili nimani bildiradi?",
            options: ["Tasodifiy tartibda chiqadi", "Faqat sonlar saqlanadi", "Birinchi kirgan birinchi chiqadi", "Oxirgi kirgan birinchi chiqadi"],
            answer: 3,
            explain: "LIFO — Last In, First Out: eng oxirgi qo'yilgan element birinchi olinadi.",
          },
          {
            q: "Bo'sh stekdan pop qilishdan oldin nima qilish kerak?",
            options: [
              "Hech narsa, pop har doim ishlaydi",
              "Stekni to'ldirish",
              "top ni oshirish",
              "Bo'shligini tekshirib, xatoni qaytarish",
            ],
            answer: 3,
            explain: "Bo'sh stekda pop underflow beradi; shuning uchun top < 0 ekanini tekshirib, xatoni qaytarish kerak.",
          },
          {
            q: "Qavslar muvozanatini tekshirishda stek nima uchun qulay?",
            options: [
              "Ochilgan qavslar ketma-ketligini saqlab, yopilganda oxirgisini tekshiradi",
              "Barcha qavslarni bir vaqtda o'chiradi",
              "Faqat sonlarni saqlaydi",
              "Saralashni bajaradi",
            ],
            answer: 0,
            explain: "Har bir yopiluvchi qavs eng oxirgi ochilgan mos qavs bilan solishtiriladi — bu LIFO tartibi.",
          },
        ],
      },
      {
        id: 33,
        title: "Queue (navbat)",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Queue — <b>FIFO</b> (First In, First Out) tuzilmasi: birinchi qo'shilgan element birinchi olinadi. Navbat printer topshiriqlari, xabar yetkazish va kenglik bo'yicha qidiruvda ishlatiladi. Oddiy massiv bilan navbatni siljitish O(n) bo'ladi; shuning uchun <b>halqali (circular) bufer</b> ishlatiladi: <code>oxir = (oxir + 1) % N</code>.",
          },
          {
            type: "code",
            title: "navbat.c",
            code: String.raw`#include <stdio.h>

#define N 5

typedef struct {
    int data[N];
    int bosh;
    int oxir;
    int soni;
} Queue;

void init(Queue *q) {
    q->bosh = 0;
    q->oxir = 0;
    q->soni = 0;
}

int enqueue(Queue *q, int x) {
    if (q->soni == N) {
        return 0;
    }
    q->data[q->oxir] = x;
    q->oxir = (q->oxir + 1) % N;
    q->soni++;
    return 1;
}

int dequeue(Queue *q, int *x) {
    if (q->soni == 0) {
        return 0;
    }
    *x = q->data[q->bosh];
    q->bosh = (q->bosh + 1) % N;
    q->soni--;
    return 1;
}

int main(void) {
    Queue q;
    int x;

    init(&q);
    enqueue(&q, 10);
    enqueue(&q, 20);
    enqueue(&q, 30);

    while (dequeue(&q, &x)) {
        printf("%d\n", x);
    }
    printf("Soni: %d\n", q.soni);
    return 0;
}`,
            output: "10\n20\n30\nSoni: 0",
          },
          {
            type: "table",
            head: ["Amal", "Vazifasi", "Murakkablik"],
            rows: [
              ["<code>enqueue</code>", "Navbat oxiriga qo'shadi", "O(1)"],
              ["<code>dequeue</code>", "Navbat boshidan oladi", "O(1)"],
              ["<code>front</code>", "Birinchi elementni o'qiydi", "O(1)"],
              ["<code>isEmpty</code>", "Bo'shligini tekshiradi", "O(1)"],
              ["O'rtadan o'chirish", "Navbat uchun odatiy emas", "O(n)"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Nega soni maydoni kerak?",
            html: "Halqali buferda <code>bosh == oxir</code> ham bo'sh, ham to'la holatni bildirishi mumkin. Buni ajratish uchun elementlar soni (<code>soni</code>) saqlanadi yoki bitta katak bo'sh qoldiriladi. <code>soni == N</code> bo'lsa navbat to'la. Indekslarni yangilashda modul ishlatiladi, shuning uchun <code>N</code> musbat butun son bo'lishi shart.",
          },
          {
            type: "code",
            title: "halqa.c",
            code: String.raw`#include <stdio.h>

#define N 4

typedef struct {
    int data[N];
    int bosh;
    int oxir;
    int soni;
} Queue;

void init(Queue *q) {
    q->bosh = 0;
    q->oxir = 0;
    q->soni = 0;
}

int enqueue(Queue *q, int x) {
    if (q->soni == N) {
        return 0;
    }
    q->data[q->oxir] = x;
    q->oxir = (q->oxir + 1) % N;
    q->soni++;
    return 1;
}

int dequeue(Queue *q, int *x) {
    if (q->soni == 0) {
        return 0;
    }
    *x = q->data[q->bosh];
    q->bosh = (q->bosh + 1) % N;
    q->soni--;
    return 1;
}

int main(void) {
    Queue q;
    int x;

    init(&q);
    enqueue(&q, 1);
    enqueue(&q, 2);
    enqueue(&q, 3);
    dequeue(&q, &x);
    enqueue(&q, 4);
    enqueue(&q, 5);

    while (dequeue(&q, &x)) {
        printf("%d", x);
        if (q.soni > 0) {
            printf(" ");
        }
    }
    printf("\nSoni: %d\n", q.soni);
    return 0;
}`,
            output: "2 3 4 5\nSoni: 0",
          },
        ],
        quiz: [
          {
            q: "FIFO tamoyiliga muvofiq elementlar qanday tartibda olinadi?",
            options: [
              "Birinchi qo'shilgan birinchi olinadi",
              "Oxirgi qo'shilgan birinchi olinadi",
              "Eng katta element birinchi olinadi",
              "Tasodifiy tartibda",
            ],
            answer: 0,
            explain: "FIFO — First In, First Out: navbat boshidagi eng eski element birinchi chiqadi.",
          },
          {
            q: "Halqali navbatda oxir indeksi qanday yangilanadi?",
            options: [
              "oxir++",
              "oxir--",
              "oxir = (oxir + 1) % N",
              "oxir = N",
            ],
            answer: 2,
            explain: "Modul amali indeksni N dan oshib ketmasdan boshiga qaytaradi.",
          },
          {
            q: "Nega navbatda elementlar soni alohida saqlanadi?",
            options: ["Elementlarni saralash uchun", "Xotirani bo'shatish uchun", "Indekslarni tezroq hisoblash uchun", "Bo'sh va to'la holatni farqlash uchun"],
            answer: 3,
            explain: "Halqali buferda bosh va oxir teng bo'lishi mumkin; soni bo'sh va to'la holatni aniq ajratadi.",
          },
        ],
      },
      {
        id: 34,
        title: "Ikkilik qidiruv daraxti",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Ikkilik qidiruv daraxti (BST) — har bir tugunda chap qismdagi barcha kalitlar kichik, o'ng qismdagilar katta bo'lgan daraxt. Qidiruv, qo'shish va o'chirish o'rtacha <code>O(log n)</code> vaqt oladi. Daraxt muvozanatsiz bo'lib qolsa, u ro'yxatga aylanib, amallar <code>O(n)</code> ga sekinlashadi.",
          },
          {
            type: "code",
            title: "bst_qoshish.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int kalit;
    struct Node *chap;
    struct Node *ong;
} Node;

Node *qosh(Node *ildiz, int kalit) {
    if (ildiz == NULL) {
        Node *yangi = malloc(sizeof *yangi);
        if (yangi == NULL) {
            return NULL;
        }
        yangi->kalit = kalit;
        yangi->chap = NULL;
        yangi->ong = NULL;
        return yangi;
    }

    if (kalit < ildiz->kalit) {
        ildiz->chap = qosh(ildiz->chap, kalit);
    } else if (kalit > ildiz->kalit) {
        ildiz->ong = qosh(ildiz->ong, kalit);
    }
    return ildiz;
}

void inorder(const Node *ildiz, int *birinchi) {
    if (ildiz == NULL) {
        return;
    }
    inorder(ildiz->chap, birinchi);
    if (!*birinchi) {
        printf(" ");
    }
    printf("%d", ildiz->kalit);
    *birinchi = 0;
    inorder(ildiz->ong, birinchi);
}

void tozala(Node *ildiz) {
    if (ildiz == NULL) {
        return;
    }
    tozala(ildiz->chap);
    tozala(ildiz->ong);
    free(ildiz);
}

int main(void) {
    Node *ildiz = NULL;
    int kalitlar[7] = {50, 30, 70, 20, 40, 60, 80};
    int birinchi = 1;

    for (int i = 0; i < 7; i++) {
        ildiz = qosh(ildiz, kalitlar[i]);
    }

    inorder(ildiz, &birinchi);
    printf("\n");
    tozala(ildiz);
    return 0;
}`,
            output: "20 30 40 50 60 70 80",
          },
          {
            type: "table",
            head: ["Amal", "O'rtacha", "Eng yomon"],
            rows: [
              ["Qidirish", "O(log n)", "O(n)"],
              ["Qo'shish", "O(log n)", "O(n)"],
              ["O'chirish", "O(log n)", "O(n)"],
              ["Inorder traversal", "O(n)", "O(n)"],
              ["Minimal kalit", "O(log n)", "O(n)"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Muvozanat muhim",
            html: "Tartiblangan ma'lumotni oddiy BST ga ketma-ket qo'shsangiz, daraxt bir tomonga cho'zilib, ro'yxatga aylanadi. Bunday holatda qidiruv <code>O(n)</code> bo'ladi. Balanslangan daraxtlar (AVL, qizil-qora) balandlikni <code>O(log n)</code> da ushlab turadi. Takroriy kalitlarni qabul qilish yoki rad etish siyosatini oldindan belgilang — bu darsda teng kalit e'tiborsiz qoldirilgan.",
          },
          {
            type: "code",
            title: "qidirish_va_olchov.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int kalit;
    struct Node *chap;
    struct Node *ong;
} Node;

Node *qosh(Node *ildiz, int kalit) {
    if (ildiz == NULL) {
        Node *yangi = malloc(sizeof *yangi);
        if (yangi == NULL) {
            return NULL;
        }
        yangi->kalit = kalit;
        yangi->chap = NULL;
        yangi->ong = NULL;
        return yangi;
    }
    if (kalit < ildiz->kalit) {
        ildiz->chap = qosh(ildiz->chap, kalit);
    } else if (kalit > ildiz->kalit) {
        ildiz->ong = qosh(ildiz->ong, kalit);
    }
    return ildiz;
}

const Node *izla(const Node *ildiz, int kalit) {
    while (ildiz != NULL) {
        if (kalit == ildiz->kalit) {
            return ildiz;
        }
        ildiz = (kalit < ildiz->kalit) ? ildiz->chap : ildiz->ong;
    }
    return NULL;
}

int balandlik(const Node *n) {
    if (n == NULL) {
        return 0;
    }
    int chap = balandlik(n->chap);
    int ong = balandlik(n->ong);
    return 1 + (chap > ong ? chap : ong);
}

const Node *engKichik(const Node *n) {
    while (n != NULL && n->chap != NULL) {
        n = n->chap;
    }
    return n;
}

int main(void) {
    Node *ildiz = NULL;
    int kalitlar[7] = {50, 30, 70, 20, 40, 60, 80};

    for (int i = 0; i < 7; i++) {
        ildiz = qosh(ildiz, kalitlar[i]);
    }

    printf("%d\n", izla(ildiz, 60) != NULL);
    printf("%d\n", izla(ildiz, 65) != NULL);
    printf("%d\n", balandlik(ildiz));
    printf("%d\n", engKichik(ildiz)->kalit);
    return 0;
}`,
            output: "1\n0\n3\n20",
          },
        ],
        quiz: [
          {
            q: "BST ni inorder tartibida aylanib chiqilsa, kalitlar qanday tartibda chiqadi?",
            options: ["Avval o'ng, keyin chap", "Tasodifiy", "O'sish tartibida", "Kamayish tartibida"],
            answer: 2,
            explain: "Inorder: chap — tugun — o'ng. BST xossasi tufayli natija o'sish tartibida bo'ladi.",
          },
          {
            q: "Muvozanatlashgan BST da qidiruvning o'rtacha murakkabligi qanday?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            answer: 2,
            explain: "Balanslangan daraxt balandligi log n bo'lgani uchun qidiruv O(log n).",
          },
          {
            q: "Daraxtga allaqachon mavjud kalitni yana qo'shsangiz nima bo'ladi?",
            options: [
              "Daraxt avtomatik balanslanadi",
              "Eski tugun o'chiriladi",
              "Dastur xato beradi",
              "Qo'shish siyosatiga bog'liq: rad etish yoki takroriy tugun saqlash",
            ],
            answer: 3,
            explain: "Standart BST odatda teng kalitni rad etadi yoki o'ng tomonga qo'shadi; buni oldindan kelishish kerak.",
          },
        ],
      },
      {
        id: 35,
        title: "Daraxtni aylanib chiqish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Daraxtning barcha tugunlarini ko'rish uchun aylanib chiqish (traversal) kerak. <b>Preorder</b> avval tugunni, keyin chap va o'ngni; <b>inorder</b> chap, tugun, o'ng; <b>postorder</b> chap, o'ng, tugun tartibida yuradi. <b>Level order</b> esa qatorma-qator, navbat yordamida o'tadi. Har bir usul turli masalalarga mos keladi.",
          },
          {
            type: "code",
            title: "traversallar.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int kalit;
    struct Node *chap;
    struct Node *ong;
} Node;

static int birinchi = 1;

void sonChiqar(int x) {
    if (!birinchi) {
        printf(" ");
    }
    printf("%d", x);
    birinchi = 0;
}

Node *qosh(Node *ildiz, int kalit) {
    if (ildiz == NULL) {
        Node *yangi = malloc(sizeof *yangi);
        if (yangi == NULL) {
            return NULL;
        }
        yangi->kalit = kalit;
        yangi->chap = NULL;
        yangi->ong = NULL;
        return yangi;
    }
    if (kalit < ildiz->kalit) {
        ildiz->chap = qosh(ildiz->chap, kalit);
    } else if (kalit > ildiz->kalit) {
        ildiz->ong = qosh(ildiz->ong, kalit);
    }
    return ildiz;
}

void preorder(const Node *n) {
    if (n == NULL) return;
    sonChiqar(n->kalit);
    preorder(n->chap);
    preorder(n->ong);
}

void inorder(const Node *n) {
    if (n == NULL) return;
    inorder(n->chap);
    sonChiqar(n->kalit);
    inorder(n->ong);
}

void postorder(const Node *n) {
    if (n == NULL) return;
    postorder(n->chap);
    postorder(n->ong);
    sonChiqar(n->kalit);
}

void levelorder(const Node *ildiz) {
    const Node *navbat[16];
    int bosh = 0;
    int oxir = 0;

    if (ildiz == NULL) return;
    navbat[oxir++] = ildiz;

    while (bosh < oxir) {
        const Node *n = navbat[bosh++];
        sonChiqar(n->kalit);
        if (n->chap != NULL) navbat[oxir++] = n->chap;
        if (n->ong != NULL) navbat[oxir++] = n->ong;
    }
}

int main(void) {
    Node *ildiz = NULL;
    int kalitlar[7] = {50, 30, 70, 20, 40, 60, 80};

    for (int i = 0; i < 7; i++) {
        ildiz = qosh(ildiz, kalitlar[i]);
    }

    preorder(ildiz);
    printf("\n");
    birinchi = 1;
    inorder(ildiz);
    printf("\n");
    birinchi = 1;
    postorder(ildiz);
    printf("\n");
    birinchi = 1;
    levelorder(ildiz);
    printf("\n");
    return 0;
}`,
            output: "50 30 20 40 70 60 80\n20 30 40 50 60 70 80\n20 40 30 60 80 70 50\n50 30 70 20 40 60 80",
          },
          {
            type: "table",
            head: ["Tur", "Tartib", "Qo'llanishi"],
            rows: [
              ["Preorder", "Tugun, chap, o'ng", "Daraxtni nusxalash, prefiks ifoda"],
              ["Inorder", "Chap, tugun, o'ng", "BST ni saralangan holda chiqarish"],
              ["Postorder", "Chap, o'ng, tugun", "Daraxtni bo'shatish, postfiks ifoda"],
              ["Level order", "Qatorma-qator", "Kenglik bo'yicha qidiruv"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Rekursiya va navbat",
            html: "Preorder, inorder va postorder rekursiya bilan qisqa yoziladi, lekin juda chuqur daraxtda stek toshishi mumkin. Level order navbat talab qiladi va daraxt kengligi bo'yicha xotira oladi. Daraxtni <b>postorder</b> bilan bo'shatish xavfsiz: avval bolalar, keyin ota-tugun <code>free</code> qilinadi. Inorder natijasi BST uchun har doim o'sish tartibida bo'lishi daraxt to'g'riligini tekshirish usuli hamdir.",
          },
          {
            type: "code",
            title: "statistika.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int kalit;
    struct Node *chap;
    struct Node *ong;
} Node;

Node *qosh(Node *ildiz, int kalit) {
    if (ildiz == NULL) {
        Node *yangi = malloc(sizeof *yangi);
        if (yangi == NULL) {
            return NULL;
        }
        yangi->kalit = kalit;
        yangi->chap = NULL;
        yangi->ong = NULL;
        return yangi;
    }
    if (kalit < ildiz->kalit) {
        ildiz->chap = qosh(ildiz->chap, kalit);
    } else if (kalit > ildiz->kalit) {
        ildiz->ong = qosh(ildiz->ong, kalit);
    }
    return ildiz;
}

int tugunlar(const Node *n) {
    if (n == NULL) return 0;
    return 1 + tugunlar(n->chap) + tugunlar(n->ong);
}

int barglar(const Node *n) {
    if (n == NULL) return 0;
    if (n->chap == NULL && n->ong == NULL) return 1;
    return barglar(n->chap) + barglar(n->ong);
}

int balandlik(const Node *n) {
    if (n == NULL) return 0;
    int chap = balandlik(n->chap);
    int ong = balandlik(n->ong);
    return 1 + (chap > ong ? chap : ong);
}

int main(void) {
    Node *ildiz = NULL;
    int kalitlar[7] = {50, 30, 70, 20, 40, 60, 80};

    for (int i = 0; i < 7; i++) {
        ildiz = qosh(ildiz, kalitlar[i]);
    }

    printf("Tugunlar: %d\n", tugunlar(ildiz));
    printf("Barglar: %d\n", barglar(ildiz));
    printf("Balandlik: %d\n", balandlik(ildiz));
    return 0;
}`,
            output: "Tugunlar: 7\nBarglar: 4\nBalandlik: 3",
          },
        ],
        quiz: [
          {
            q: "BST uchun inorder traversal qanday natija beradi?",
            options: [
              "Kalitlarni o'sish tartibida",
              "Kalitlarni kamayish tartibida",
              "Faqat barglarni",
              "Daraxt balandligini",
            ],
            answer: 0,
            explain: "Inorder chap qismni, tugunni, keyin o'ng qismni ko'radi; BST xossasi tufayli natija o'sish tartibida bo'ladi.",
          },
          {
            q: "Preorder traversal qaysi tartibda yuradi?",
            options: [
              "Chap, tugun, o'ng",
              "Chap, o'ng, tugun",
              "Tugun, chap, o'ng",
              "Faqat o'ng, keyin chap",
            ],
            answer: 2,
            explain: "Preorder avval joriy tugunni, keyin chap va o'ng bolalarni ko'radi.",
          },
          {
            q: "Level order traversal qaysi tuzilmadan foydalanadi?",
            options: ["Hash jadval", "Stek", "Navbat", "Faqat massiv indeksi"],
            answer: 2,
            explain: "Qatorma-qator yurish uchun navbat ishlatiladi: bolalar navbat oxiriga qo'shiladi.",
          },
        ],
      },
      {
        id: 36,
        title: "Hash jadval",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Hash jadval kalitni hisoblash yo'li bilan indeksga aylantiradi va qidiruvni o'rtacha <code>O(1)</code> qiladi. Ikki xil kalit bir indeksga tushsa, <b>kolliziya</b> yuz beradi. Bu darsda <b>ochiq adreslash</b> va <b>chiziqli prob</b> usuli ko'rsatiladi: band katak topilsa, keyingi katak tekshiriladi. Jadval to'lib borsa, kolliziyalar ko'payadi.",
          },
          {
            type: "code",
            title: "hash_jadval.c",
            code: String.raw`#include <stdio.h>

#define N 7

typedef struct {
    int kalitlar[N];
    int band[N];
} Jadval;

unsigned hash(int k) {
    return (unsigned)(((k % N) + N) % N);
}

void init(Jadval *j) {
    for (int i = 0; i < N; i++) {
        j->band[i] = 0;
    }
}

int qosh(Jadval *j, int k) {
    unsigned i = hash(k);
    for (int qadam = 0; qadam < N; qadam++) {
        if (!j->band[i]) {
            j->kalitlar[i] = k;
            j->band[i] = 1;
            return 1;
        }
        if (j->kalitlar[i] == k) {
            return 1;
        }
        i = (i + 1) % N;
    }
    return 0;
}

int izla(const Jadval *j, int k) {
    unsigned i = hash(k);
    for (int qadam = 0; qadam < N; qadam++) {
        if (!j->band[i]) {
            return -1;
        }
        if (j->kalitlar[i] == k) {
            return (int)i;
        }
        i = (i + 1) % N;
    }
    return -1;
}

int main(void) {
    Jadval j;
    init(&j);
    qosh(&j, 10);
    qosh(&j, 20);
    qosh(&j, 3);
    qosh(&j, 17);

    printf("17: %d\n", izla(&j, 17));
    printf("20: %d\n", izla(&j, 20));
    printf("99: %d\n", izla(&j, 99));

    int band = 0;
    for (int i = 0; i < N; i++) {
        band += j.band[i];
    }
    printf("Band: %d\n", band);
    return 0;
}`,
            output: "17: 5\n20: 6\n99: -1\nBand: 4",
          },
          {
            type: "table",
            head: ["Tushuncha", "Ma'nosi", "Misol"],
            rows: [
              ["Hash funksiya", "Kalitni indeksga aylantiradi", "<code>k % N</code>"],
              ["Kolliziya", "Ikki kalit bir indeksga tushadi", "3 va 17"],
              ["Linear probing", "Keyingi bo'sh katakni izlaydi", "<code>(i + 1) % N</code>"],
              ["Load factor", "Band kataklar ulushi", "band / N"],
              ["Deletion", "O'chirish uchun tombstone kerak", "Prob zanjirini uzmaslik uchun"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "O'chirish oson emas",
            html: "Ochiq adreslashda katakni shunchaki bo'sh deb belgilash qidiruv zanjirini uzadi. Shuning uchun <b>tombstone</b> (o'chirilgan belgisi) ishlatiladi yoki jadval qayta quriladi. Load factor 0.7 dan oshsa, jadval hajmini kattalashtirib, barcha kalitlarni qayta joylash tavsiya etiladi. Boshqa yondashuv — <b>chaining</b>: har katakda bog'langan ro'yxat saqlanadi.",
          },
          {
            type: "code",
            title: "matn_hash.c",
            code: String.raw`#include <stdio.h>

unsigned hashMatn(const char *s) {
    unsigned h = 0;
    while (*s != '\0') {
        h += (unsigned char)*s;
        s++;
    }
    return h % 10;
}

int main(void) {
    printf("%u\n", hashMatn("C"));
    printf("%u\n", hashMatn("til"));
    printf("%u\n", hashMatn("noldan"));
    return 0;
}`,
            output: "7\n9\n6",
          },
        ],
        quiz: [
          {
            q: "Hash jadvalda kolliziya nima?",
            options: [
              "Jadval bo'sh bo'lishi",
              "Kalitning manfiy bo'lishi",
              "Ikki xil kalit bir indeksga tushishi",
              "Jadvalning to'lib ketishi",
            ],
            answer: 2,
            explain: "Hash funksiya ikki xil kalit uchun bir xil indeks qaytarsa, kolliziya yuz beradi.",
          },
          {
            q: "Chiziqli prob (linear probing) qanday ishlaydi?",
            options: [
              "Band indeksdan keyingi bo'sh katakni ketma-ket izlaydi",
              "Kalitni o'chiradi",
              "Jadvalni ikki baravar kichraytiradi",
              "Barcha kalitlarni saralaydi",
            ],
            answer: 0,
            explain: "Chiziqli probda indeks (i + 1) % N bo'yicha siljib, bo'sh joy topilguncha davom etiladi.",
          },
          {
            q: "Load factor juda yuqori bo'lsa nima yuz beradi?",
            options: [
              "Qidiruv tezlashadi",
              "Xotira kamroq ishlatiladi",
              "Kolliziyalar kamayadi",
              "Kolliziyalar ko'payib, amallar sekinlashadi",
            ],
            answer: 3,
            explain: "Band kataklar ko'paysa, prob zanjirlari uzayadi va qidiruv O(1) dan uzoqlashadi.",
          },
        ],
      },
      {
        id: 37,
        title: "Ikkilik fayllar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Matn fayllari odam o'qiy oladigan ko'rinishda saqlanadi, ikkilik fayllar esa xotiradagi baytlarni to'g'ridan-to'g'ri yozadi. Strukturalar massivini saqlash uchun <code>fwrite</code>, o'qish uchun <code>fread</code> ishlatiladi. Ikkilik rejim <code>\"wb\"</code> va <code>\"rb\"</code> bilan ochiladi; Windows'da matn rejimi bilan aralashtirmaslik kerak.",
          },
          {
            type: "code",
            title: "yozish_bin.c",
            code: String.raw`#include <stdio.h>

typedef struct {
    int id;
    char nom[16];
    double ball;
} Yozuv;

int main(void) {
    Yozuv yozuvlar[2] = {
        {1, "Aziza", 92.5},
        {2, "Bek", 78.0},
    };

    FILE *f = fopen("talabalar.bin", "wb");
    if (f == NULL) {
        printf("Fayl ochilmadi\n");
        return 1;
    }

    size_t yozildi = fwrite(yozuvlar, sizeof yozuvlar[0], 2, f);
    fclose(f);

    printf("Yozildi: %zu\n", yozildi);
    return 0;
}`,
            output: "Yozildi: 2",
          },
          {
            type: "table",
            head: ["Funksiya", "Parametrlar", "Qaytaradi"],
            rows: [
              ["<code>fwrite</code>", "manzil, element hajmi, soni, fayl", "yozilgan elementlar soni"],
              ["<code>fread</code>", "manzil, element hajmi, soni, fayl", "o'qilgan elementlar soni"],
              ["<code>fopen</code>", "nom, <code>\"wb\"</code> yoki <code>\"rb\"</code>", "<code>FILE *</code> yoki <code>NULL</code>"],
              ["<code>fclose</code>", "fayl ko'rsatkichi", "muvaffaqiyatda <code>0</code>"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Ko'chmalik chegarasi",
            html: "Struktura baytlari platformaga bog'liq: <code>int</code> hajmi, tekislash (padding) va bayt tartibi (endianness) farq qilishi mumkin. Shu sababli bir tizimda yozilgan ikkilik fayl boshqasida to'g'ri o'qilmasligi mumkin. Ko'chma format kerak bo'lsa, maydonlarni alohida va aniq o'lchamli turlarda yozing yoki matn/JSON kabi formatdan foydalaning. <code>fwrite</code> qaytargan sonni tekshirish — yozish xatosini aniqlashning oddiy usuli.",
          },
          {
            type: "code",
            title: "oqish_bin.c",
            code: String.raw`#include <stdio.h>

typedef struct {
    int id;
    char nom[16];
    double ball;
} Yozuv;

int main(void) {
    Yozuv yozuvlar[10];

    FILE *f = fopen("talabalar.bin", "rb");
    if (f == NULL) {
        printf("Fayl topilmadi\n");
        return 1;
    }

    size_t n = fread(yozuvlar, sizeof yozuvlar[0], 10, f);
    fclose(f);

    printf("O'qildi: %zu\n", n);
    for (size_t i = 0; i < n; i++) {
        printf("%d %s %.1f\n", yozuvlar[i].id, yozuvlar[i].nom, yozuvlar[i].ball);
    }
    return 0;
}`,
            output: "O'qildi: 2\n1 Aziza 92.5\n2 Bek 78.0",
          },
        ],
        quiz: [
          {
            q: "fwrite funksiyasining to'g'ri parametr tartibi qanday?",
            options: ["soni, hajm, manzil, fayl", "fayl, manzil, hajm, soni", "manzil, element hajmi, elementlar soni, fayl", "manzil, fayl, hajm"],
            answer: 2,
            explain: "fwrite(ptr, size, count, stream) — avval manzil, keyin bitta element hajmi, soni va fayl.",
          },
          {
            q: "\"rb\" rejimi nimani bildiradi?",
            options: [
              "Faylni yozish uchun ochish",
              "Faylni matn sifatida o'qish",
              "Faylni ikkilik rejimda o'qish uchun ochish",
              "Faylni o'chirish",
            ],
            answer: 2,
            explain: "\"r\" o'qish, \"b\" ikkilik rejim; \"rb\" mavjud ikkilik faylni o'qish uchun ochadi.",
          },
          {
            q: "Ikkilik faylga struktura yozishda qaysi muammo ko'chmalikka ta'sir qiladi?",
            options: [
              "Struktura padding va endianness farqlari",
              "Fayl nomi uzunligi",
              "printf formati",
              "Faqat fayl rangi",
            ],
            answer: 0,
            explain: "Tur hajmlari, tekislash va bayt tartibi platformalar orasida farq qilishi mumkin.",
          },
        ],
      },
      {
        id: 38,
        title: "Fayl pozitsiyasi: fseek va ftell",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Har bir ochilgan faylda joriy o'qish-yozish pozitsiyasi mavjud. <code>ftell</code> shu pozitsiyani baytlarda qaytaradi, <code>fseek</code> esa uni o'zgartiradi. <code>SEEK_SET</code> fayl boshidan, <code>SEEK_CUR</code> joriy joydan, <code>SEEK_END</code> fayl oxiridan hisoblaydi. Bu funksiyalar ikkilik faylda yozuvni to'g'ridan-to'g'ri topish uchun qulay.",
          },
          {
            type: "code",
            title: "yozish_sonlar.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int sonlar[5] = {10, 20, 30, 40, 50};

    FILE *f = fopen("sonlar.bin", "wb");
    if (f == NULL) {
        printf("Fayl ochilmadi\n");
        return 1;
    }

    size_t n = fwrite(sonlar, sizeof sonlar[0], 5, f);
    fclose(f);

    printf("%zu ta son yozildi\n", n);
    return 0;
}`,
            output: "5 ta son yozildi",
          },
          {
            type: "table",
            head: ["Parametr", "Hisoblash nuqtasi", "Misol"],
            rows: [
              ["<code>SEEK_SET</code>", "Fayl boshi", "<code>fseek(f, 0, SEEK_SET)</code>"],
              ["<code>SEEK_CUR</code>", "Joriy pozitsiya", "<code>fseek(f, 5, SEEK_CUR)</code>"],
              ["<code>SEEK_END</code>", "Fayl oxiri", "<code>fseek(f, 0, SEEK_END)</code>"],
              ["<code>ftell</code>", "Joriy pozitsiyani qaytaradi", "Baytlarda"],
              ["<code>rewind</code>", "Boshiga qaytaradi", "Xatoni tekshirmaydi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Natijani tekshiring",
            html: "<code>fseek</code> muvaffaqiyatda <code>0</code>, xatoda noldan farqli qiymat qaytaradi. <code>ftell</code> xatoda <code>-1L</code> qaytaradi. Matn rejimida pozitsiya baytlar bilan aniq mos kelmasligi mumkin, shuning uchun <code>fseek</code> ni ikkilik rejimda ishlatish ishonchliroq. Juda katta fayllar uchun <code>long</code> yetmasligi mumkin — platformaga xos katta fayl funksiyalarini tekshiring.",
          },
          {
            type: "code",
            title: "fseek_ftell.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int x;

    FILE *f = fopen("sonlar.bin", "rb");
    if (f == NULL) {
        printf("Fayl topilmadi\n");
        return 1;
    }

    if (fseek(f, 2L * (long)sizeof(int), SEEK_SET) != 0) {
        printf("Pozitsiyani o'zgartirib bo'lmadi\n");
        fclose(f);
        return 1;
    }

    if (fread(&x, sizeof x, 1, f) == 1) {
        printf("Uchinchi: %d\n", x);
    }

    fseek(f, 0, SEEK_END);
    long bayt = ftell(f);
    if (bayt >= 0) {
        printf("Yozuvlar: %ld\n", bayt / (long)sizeof(int));
    }

    fclose(f);
    return 0;
}`,
            output: "Uchinchi: 30\nYozuvlar: 5",
          },
        ],
        quiz: [
          {
            q: "SEEK_END nimaga nisbatan pozitsiya hisoblaydi?",
            options: [
              "Fayl boshiga",
              "Joriy pozitsiyaga",
              "Fayl oxiriga",
              "Xotira boshiga",
            ],
            answer: 2,
            explain: "SEEK_END offsetni fayl oxiridan hisoblaydi.",
          },
          {
            q: "ftell funksiyasi nimani qaytaradi?",
            options: [
              "Joriy fayl pozitsiyasini baytlarda",
              "Fayldagi qatorlar sonini",
              "Fayl nomini",
              "Fayl hajmini har doim",
            ],
            answer: 0,
            explain: "ftell joriy o'qish-yozish pozitsiyasini baytlarda qaytaradi; oxiriga fseek qilib hajmni ham bilib olish mumkin.",
          },
          {
            q: "fseek muvaffaqiyatli bajarilganda qanday qiymat qaytaradi?",
            options: ["SEEK_SET", "1", "0", "-1"],
            answer: 2,
            explain: "fseek muvaffaqiyatda 0, xatoda noldan farqli qiymat qaytaradi.",
          },
        ],
      },
      {
        id: 39,
        title: "errno va xatolarni boshqarish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "C funksiyalari xatoni odatda qaytish qiymati orqali bildiradi: <code>NULL</code>, <code>-1</code> yoki noto'g'ri natija. Qo'shimcha sabab <code>errno</code> global o'zgaruvchisida saqlanadi. Uni faqat funksiya xato qaytargandan keyin tekshirish kerak; oldingi chaqiruvdan qolgan qiymat chalg'itishi mumkin. Shuning uchun chaqiruvdan oldin <code>errno = 0;</code> qilib qo'yish odat tusiga kiradi.",
          },
          {
            type: "code",
            title: "fopen_xatosi.c",
            code: String.raw`#include <stdio.h>
#include <errno.h>

int main(void) {
    errno = 0;
    FILE *f = fopen("mavjud_emas.txt", "r");

    if (f == NULL) {
        printf("Fayl ochilmadi\n");
        printf("errno noldan farqli: %d\n", errno != 0);
    } else {
        printf("Fayl ochildi\n");
        fclose(f);
    }
    return 0;
}`,
            output: "Fayl ochilmadi\nerrno noldan farqli: 1",
          },
          {
            type: "table",
            head: ["Vaziyat", "Tekshirish", "Eslatma"],
            rows: [
              ["Fayl ochilmadi", "<code>f == NULL</code>", "<code>errno</code> sababni beradi"],
              ["Son diapazondan chiqdi", "<code>errno == ERANGE</code>", "strtol/strtod uchun"],
              ["Matn o'girilmadi", "<code>endptr == matn</code>", "Hech qanday raqam yo'q"],
              ["Xato matni", "<code>strerror(errno)</code>", "Matn tizimga bog'liq"],
              ["Darhol xabar", "<code>perror(\"fopen\")</code>", "stderr ga yozadi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "errno — sehrli tayoqcha emas",
            html: "Muvaffaqiyatli funksiya <code>errno</code> ni o'zgartirmasligi ham mumkin, shuning uchun uni faqat xato belgisidan keyin o'qing. <code>ENOENT</code> kabi ba'zi kodlar POSIX standartiga tegishli, sof C17 da kafolatlanmagan; ko'chma kod uchun <code>ERANGE</code>, <code>EDOM</code> yoki shunchaki noldan farqlilikni tekshiring. Xato matnini ekranga chiqarish foydali, lekin dastur mantiqini matnga bog'lamang.",
          },
          {
            type: "code",
            title: "strtol_erange.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main(void) {
    const char *matn = "999999999999999999999";
    char *oxiri;

    errno = 0;
    long qiymat = strtol(matn, &oxiri, 10);

    if (errno == ERANGE) {
        printf("Diapazondan tashqarida\n");
    } else {
        printf("Qiymat: %ld\n", qiymat);
    }

    printf("Qolgan belgilar: '%s'\n", oxiri);
    return 0;
}`,
            output: "Diapazondan tashqarida\nQolgan belgilar: ''",
          },
        ],
        quiz: [
          {
            q: "errno qiymatini qachon tekshirish ma'noga ega?",
            options: ["Faqat printf ichida", "Har doim, funksiya chaqirilishidan oldin", "Funksiya xato yoki kutilmagan natija qaytargandan keyin", "Faqat dastur tugagach"],
            answer: 2,
            explain: "Muvaffaqiyatli chaqiruv errno ni o'zgartirmasligi mumkin; u faqat xato holatida sababni bildiradi.",
          },
          {
            q: "strtol sonni o'girishda diapazon chegarasidan chiqsa qaysi errno qiymati qo'yiladi?",
            options: ["EDOM", "EILSEQ", "ERANGE", "EOF"],
            answer: 2,
            explain: "Son tur diapazoniga sig'masa, strtol ERANGE qo'yadi va chegaraviy qiymat qaytaradi.",
          },
          {
            q: "perror funksiyasi nima qiladi?",
            options: [
              "errno ga mos xato matnini stderr ga chiqaradi",
              "errno ni nolga tenglashtiradi",
              "Faylni yopadi",
              "Dasturni to'xtatadi",
            ],
            answer: 0,
            explain: "perror berilgan prefiks va errno asosidagi tizim xabari bilan birga stderr ga yozadi.",
          },
        ],
      },
      {
        id: 40,
        title: "assert va static_assert",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>assert</code> — ish vaqtidagi tekshiruv: shart yolg'on bo'lsa, dastur xabar bilan to'xtaydi. U dasturchi xatolarini erta topish uchun mo'ljallangan, foydalanuvchi kiritishini tekshirish uchun emas. <code>static_assert</code> esa kompilyatsiya vaqtida tekshiradi va noto'g'ri farazlar bilan kod yig'ilishiga yo'l qo'ymaydi.",
          },
          {
            type: "code",
            title: "assert_bolish.c",
            code: String.raw`#include <stdio.h>
#include <assert.h>

int bolish(int a, int b) {
    assert(b != 0);
    return a / b;
}

int main(void) {
    printf("%d\n", bolish(10, 2));
    assert(1 + 1 == 2);
    printf("Tekshiruvlar o'tdi\n");
    return 0;
}`,
            output: "5\nTekshiruvlar o'tdi",
          },
          {
            type: "table",
            head: ["Vosita", "Tekshirish vaqti", "Xato bo'lsa"],
            rows: [
              ["<code>assert(shart)</code>", "Ish vaqti", "Xabar chiqarib, abort"],
              ["<code>static_assert(shart, msg)</code>", "Kompilyatsiya", "Kompilyatsiya xatosi"],
              ["<code>if + return</code>", "Ish vaqti", "Dastur ishlashda davom etadi"],
              ["<code>NDEBUG</code>", "Kompilyatsiya", "assert lar o'chiriladi"],
              ["Foydalanuvchi kiritmasi", "Ish vaqti", "assert emas, oddiy tekshiruv kerak"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "assert ichida yon ta'sir bo'lmasin",
            html: "Release buildda <code>NDEBUG</code> belgilansa, <code>assert</code> ichidagi ifoda umuman bajarilmaydi. Shuning uchun <code>assert(x++);</code> yoki funksiya chaqiruvi kabi yon ta'sirli yozuvlardan saqlaning. <code>assert</code> foydalanuvchi xatosini emas, dasturchi farazini tekshiradi: fayl topilmadi, noto'g'ri parol kabi holatlar uchun oddiy xato boshqaruvi kerak.",
          },
          {
            type: "code",
            title: "static_assert.c",
            code: String.raw`#include <stdio.h>
#include <assert.h>
#include <stddef.h>

static_assert(sizeof(int) >= 2, "int kamida 16 bit bo'lishi kerak");

int element(const int *a, size_t n, size_t i) {
    assert(a != NULL);
    assert(i < n);
    return a[i];
}

int main(void) {
    int sonlar[3] = {7, 8, 9};
    printf("%d\n", element(sonlar, 3, 1));
    printf("static_assert o'tdi\n");
    return 0;
}`,
            output: "8\nstatic_assert o'tdi",
          },
        ],
        quiz: [
          {
            q: "assert sharti yolg'on bo'lsa nima sodir bo'ladi?",
            options: [
              "Dastur davom etadi",
              "Shart avtomatik tuzatiladi",
              "Faqat ogohlantirish chiqadi",
              "Dastur xabar chiqarib to'xtaydi (abort)",
            ],
            answer: 3,
            explain: "assert bajarilmasa, standart bo'yicha abort chaqiriladi va odatda xabar chop etiladi.",
          },
          {
            q: "NDEBUG makrosi aniqlangan bo'lsa assert ga nima bo'ladi?",
            options: [
              "Har doim ishlaydi",
              "Tekshiruvlar kompilyatsiyada olib tashlanadi",
              "Xato beradi",
              "Faqat birinchi assert ishlaydi",
            ],
            answer: 1,
            explain: "NDEBUG aniqlanganda assert makrosi bo'sh ifodaga aylanadi, shuning uchun release buildda tekshiruvlar o'chadi.",
          },
          {
            q: "static_assert qachon tekshiriladi?",
            options: [
              "Kompilyatsiya vaqtida",
              "Faqat ish vaqtida",
              "Faqat debuggerda",
              "Dastur tugagach",
            ],
            answer: 0,
            explain: "static_assert kompilyator tomonidan kod yig'ilayotganda tekshiriladi.",
          },
        ],
      },
      {
        id: 41,
        title: "gdb bilan debugging",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Xato topishning eng kuchli usuli — dasturni debugger ostida ishga tushirish. <b>gdb</b> dasturni to'xtatib, o'zgaruvchilarni ko'rish, qadamlab yurish va chaqiruvlar zanjirini (backtrace) tekshirish imkonini beradi. Buning uchun kodni <code>-g</code> bayrog'i bilan kompilyatsiya qilish kerak: <code>gcc -g -std=c17 dastur.c -o dastur</code>.",
          },
          {
            type: "code",
            title: "debug.c",
            code: String.raw`#include <stdio.h>

int yigindi(const int *a, int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    return sum;
}

int main(void) {
    int sonlar[4] = {3, 7, 2, 8};
    int jami = yigindi(sonlar, 4);

    printf("Jami: %d\n", jami);
    printf("O'rtacha: %.2f\n", (double)jami / 4);
    return 0;
}`,
            output: "Jami: 20\nO'rtacha: 5.00",
          },
          {
            type: "table",
            head: ["Buyruq", "Vazifasi", "Misol"],
            rows: [
              ["<code>break</code>", "To'xtash nuqtasi qo'yadi", "<code>break main</code>"],
              ["<code>run</code>", "Dasturni ishga tushiradi", "<code>run</code>"],
              ["<code>next</code>", "Keyingi qatorga o'tadi (funksiyaga kirmaydi)", "<code>next</code>"],
              ["<code>step</code>", "Funksiya ichiga kiradi", "<code>step</code>"],
              ["<code>print</code>", "Ifoda qiymatini ko'rsatadi", "<code>print jami</code>"],
              ["<code>backtrace</code>", "Chaqiruvlar zanjirini ko'rsatadi", "<code>bt</code>"],
              ["<code>continue</code>", "Keyingi breakpointgacha davom etadi", "<code>continue</code>"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Amaliy gdb seansi",
            html: "Terminalda <code>gdb ./dastur</code> ochib, <code>break main</code>, <code>run</code>, <code>next</code> buyruqlarini bering. <code>print jami</code> qiymatni, <code>print sonlar[2]</code> massiv elementini ko'rsatadi. <code>bt</code> qaysi funksiyadan chaqirilganini aniqlaydi. Segmentatsiya xatosida <code>run</code> dan keyin <code>bt</code> va <code>frame 0</code> bilan xato joyini toping. gdb buyruqlarini <code>.gdbinit</code> fayliga ham yozish mumkin.",
          },
          {
            type: "code",
            title: "faktorial_debug.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    int n = 5;
    long fakt = 1;

    for (int i = 1; i <= n; i++) {
        fakt *= i;
    }

    printf("%d! = %ld\n", n, fakt);
    return 0;
}`,
            output: "5! = 120",
          },
        ],
        quiz: [
          {
            q: "Kodni gdb bilan debug qilish uchun qaysi kompilyator bayrog'i kerak?",
            options: ["-O3", "-Wall", "-g", "-lm"],
            answer: 2,
            explain: "-g debug ma'lumotlarini qo'shadi, shu tufayli gdb o'zgaruvchi va qatorlarni ko'ra oladi.",
          },
          {
            q: "gdb da break main buyrug'i nima qiladi?",
            options: [
              "main funksiyasiga to'xtash nuqtasi qo'yadi",
              "Dasturni darhol tugatadi",
              "main ni o'chiradi",
              "Barcha o'zgaruvchilarni chop etadi",
            ],
            answer: 0,
            explain: "break main dastur main ga kirganda to'xtashini ta'minlaydi.",
          },
          {
            q: "print jami buyrug'i nima qiladi?",
            options: [
              "jami ni o'zgartiradi",
              "Dasturni qayta ishga tushiradi",
              "Faylni saqlaydi",
              "jami o'zgaruvchisining joriy qiymatini ko'rsatadi",
            ],
            answer: 3,
            explain: "print ifodani baholab, joriy qiymatini ko'rsatadi; u qiymatni o'zgartirmaydi.",
          },
        ],
      },
      {
        id: 42,
        title: "valgrind va sanitizerlar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Xotira xatolari har doim darhol ko'rinmaydi: dastur ishlaydi, keyin boshqa joyda qulaydi. <b>valgrind</b> dasturni instrumentatsiya qilib, oqib ketgan xotira, bo'shatilgandan keyin murojaat va chegaradan chiqishni topadi. <b>AddressSanitizer</b> va <b>UBSan</b> esa kompilyator darajasida tekshiradi va tezroq ishlaydi. Ikkalasi ham debug buildda ishlatiladi.",
          },
          {
            type: "code",
            title: "toza_dastur.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;
    int *a = malloc((size_t)n * sizeof *a);

    if (a == NULL) {
        printf("Xotira yetmadi\n");
        return 1;
    }

    int sum = 0;
    for (int i = 0; i < n; i++) {
        a[i] = i;
        sum += a[i];
    }

    printf("Yig'indi: %d\n", sum);
    free(a);
    a = NULL;
    return 0;
}`,
            output: "Yig'indi: 10",
          },
          {
            type: "table",
            head: ["Vosita", "Nimani topadi", "Ishga tushirish"],
            rows: [
              ["valgrind memcheck", "Leak, invalid read/write, use-after-free", "<code>valgrind --leak-check=full ./dastur</code>"],
              ["AddressSanitizer", "Bufer chegarasi, use-after-free", "<code>gcc -fsanitize=address -g ...</code>"],
              ["UBSan", "Ishorali overflow, noto'g'ri siljish", "<code>gcc -fsanitize=undefined -g ...</code>"],
              ["Sanitizerlar birga", "ASan + UBSan", "<code>-fsanitize=address,undefined</code>"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Hisobotni o'qish",
            html: "valgrind hisobotida <b>definitely lost</b> — manzili yo'qolgan va hech qachon bo'shatilmaydigan blok; <b>invalid write</b> — ajratilgan chegaradan tashqariga yozish; <b>use-after-free</b> — bo'shatilgan xotiraga murojaat. Xatolar soni va stek izlari versiyaga qarab farq qiladi, lekin kategoriyalar barqaror. Sanitizerlar uchun alohida build papkasi ishlatib, ularni release binarga qo'shmang — ular sekinlashtiradi va faqat tekshiruv uchun kerak.",
          },
          {
            type: "code",
            title: "dinamik_satr.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
    const char *manba = "Noldan";
    size_t n = strlen(manba);
    char *nusxa = malloc(n + 1);

    if (nusxa == NULL) {
        printf("Xotira yetmadi\n");
        return 1;
    }

    memcpy(nusxa, manba, n + 1);
    printf("%s (%zu)\n", nusxa, n);
    free(nusxa);
    nusxa = NULL;
    return 0;
}`,
            output: "Noldan (6)",
          },
        ],
        quiz: [
          {
            q: "valgrind memcheck asosan nimani aniqlaydi?",
            options: [
              "Faqat sintaksis xatolarini",
              "Xotira oqishi va yaroqsiz murojaatlarni",
              "Faqat sekin funksiyalarni",
              "Fayl formatini",
            ],
            answer: 1,
            explain: "memcheck dinamik xotira bilan bog'liq oqish, chegaradan chiqish va use-after-free kabi xatolarni topadi.",
          },
          {
            q: "Use-after-free xatosi nima?",
            options: [
              "Xotira ikki marta ajratilishi",
              "Massiv indeksining 0 bo'lishi",
              "free qilingan xotiraga yana murojaat qilish",
              "Faylni yopmaslik",
            ],
            answer: 2,
            explain: "free blokni tizimga qaytaradi; undan keyin o'sha manzilni o'qish yoki yozish use-after-free hisoblanadi.",
          },
          {
            q: "AddressSanitizer ni yoqish uchun qaysi bayroq ishlatiladi?",
            options: ["-fsanitize=address", "-leak", "-fdebug", "-O2"],
            answer: 0,
            explain: "-fsanitize=address GCC va Clang da AddressSanitizer ni yoqadi.",
          },
        ],
      },
      {
        id: 43,
        title: "Make bilan ko'p faylli loyiha",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Loyiha bir nechta <code>.c</code> va <code>.h</code> fayllarga bo'linganda ularni qo'lda kompilyatsiya qilish noqulay. <b>make</b> Makefile'dagi qoidalar bo'yicha faqat o'zgargan fayllarni qayta yig'adi. Qoida uch qismdan iborat: nishon (target), bog'liqliklar va retsept. Retsept satrlari <b>tab</b> bilan boshlanishi shart.",
          },
          {
            type: "code",
            title: "main.c",
            code: String.raw`#include <stdio.h>
#include "hisob.h"

int main(void) {
    printf("Natija: %d\n", qosh(10, 15));
    return 0;
}`,
            output: "Natija: 25",
          },
          {
            type: "code",
            title: "hisob.c",
            code: String.raw`#include "hisob.h"

int qosh(int a, int b) {
    return a + b;
}

#ifdef HISOB_TEST
#include <stdio.h>

int main(void) {
    printf("hisob testi: %s\n", qosh(2, 3) == 5 ? "OK" : "FAIL");
    return 0;
}
#endif`,
            output: "hisob testi: OK",
          },
          {
            type: "code",
            title: "Makefile",
            code: String.raw`CC = gcc
CFLAGS = -std=c17 -Wall -Wextra -O2
OBJ = main.o hisob.o

dastur: $(OBJ)
	$(CC) $(OBJ) -o dastur

main.o: main.c hisob.h
	$(CC) $(CFLAGS) -c main.c

hisob.o: hisob.c hisob.h
	$(CC) $(CFLAGS) -c hisob.c

test: hisob.c hisob.h
	$(CC) $(CFLAGS) -DHISOB_TEST hisob.c -o test_hisob
	./test_hisob

clean:
	rm -f $(OBJ) dastur test_hisob

.PHONY: test clean`,
            output: "gcc -std=c17 -Wall -Wextra -O2 -c main.c\ngcc -std=c17 -Wall -Wextra -O2 -c hisob.c\ngcc main.o hisob.o -o dastur\nNatija: 25",
          },
          {
            type: "table",
            head: ["Qism", "Misol", "Ma'nosi"],
            rows: [
              ["Nishon", "<code>dastur:</code>", "Yaratiladigan fayl"],
              ["Bog'liqlik", "<code>$(OBJ)</code>", "Nishon nimaga bog'liq"],
              ["Retsept", "<code>$(CC) ...</code>", "Bajariladigan buyruq (tab bilan)"],
              ["O'zgaruvchi", "<code>CFLAGS = ...</code>", "Qayta ishlatiladigan sozlamalar"],
              ["<code>.PHONY</code>", "<code>clean</code>", "Fayl emas, buyruq nishoni"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "hisob.h va tozalash",
            html: "<code>hisob.h</code> faylida include guard va prototip bo'ladi: <code>#ifndef HISOB_H</code>, <code>#define HISOB_H</code>, <code>int qosh(int a, int b);</code>, <code>#endif</code>. <code>make</code> faqat o'zgargan obyekt fayllarni qayta yig'adi; <code>make clean</code> natijalarni tozalaydi. Retsept oldidagi bo'shliqlar emas, aynan tab belgisi ishlatilishi kerak. <code>-Wall -Wextra</code> ogohlantirishlarini jiddiy qabul qiling.",
          },
        ],
        quiz: [
          {
            q: "Makefile retsept satrlari qanday belgi bilan boshlanishi kerak?",
            options: ["To'rtta probel", "Nuqta", "Tab", "Kesish belgisi"],
            answer: 2,
            explain: "Make retsept satrlarini tab bilan boshlanishini talab qiladi; probel qo'yilsa xato beradi.",
          },
          {
            q: "make buyrug'i asosan nima qiladi?",
            options: [
              "Faqat o'zgargan bog'liqliklarga mos nishonlarni qayta yig'adi",
              "Barcha fayllarni har doim qayta yozadi",
              "Dasturni debug qiladi",
              "Fayllarni o'chiradi",
            ],
            answer: 0,
            explain: "make vaqt belgilariga qarab faqat kerakli nishonlarni yangilaydi, bu vaqtni tejaydi.",
          },
          {
            q: ".PHONY: clean yozuvining maqsadi nima?",
            options: [
              "clean faylini yaratish",
              "clean ni o'chirish",
              "Barcha fayllarni kompilyatsiya qilish",
              "clean nomli fayl bo'lsa ham nishonni har doim bajarish",
            ],
            answer: 3,
            explain: ".PHONY nishon haqiqiy fayl emasligini bildiradi, shuning uchun clean har chaqirilganda bajariladi.",
          },
        ],
      },
      {
        id: 44,
        title: "CMake asoslari",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "CMake Makefile yozish o'rniga <code>CMakeLists.txt</code> da loyihani tavsiflaydi va platformaga mos build tizimini yaratadi. U katta loyihalarda, kutubxonalar va testlar bilan ishlashda qulay. Odatiy jarayon: <code>cmake -S . -B build</code> bilan sozlash, <code>cmake --build build</code> bilan yig'ish. Manba fayllari loyiha papkasida, natijalar <code>build</code> da turadi.",
          },
          {
            type: "code",
            title: "main.c",
            code: String.raw`#include <stdio.h>

int main(void) {
    printf("Salom, CMake!\n");
    return 0;
}`,
            output: "Salom, CMake!",
          },
          {
            type: "code",
            title: "test_hisob.c",
            code: String.raw`#include <stdio.h>

static int qosh(int a, int b) {
    return a + b;
}

int main(void) {
    if (qosh(2, 3) == 5) {
        printf("Test: OK\n");
        return 0;
    }
    printf("Test: FAIL\n");
    return 1;
}`,
            output: "Test: OK",
          },
          {
            type: "code",
            title: "CMakeLists.txt",
            code: String.raw`cmake_minimum_required(VERSION 3.16)
project(Noldan C)

set(CMAKE_C_STANDARD 17)
set(CMAKE_C_STANDARD_REQUIRED ON)

add_executable(salom main.c)
add_executable(test_hisob test_hisob.c)

target_compile_options(salom PRIVATE -Wall -Wextra)
target_compile_options(test_hisob PRIVATE -Wall -Wextra)`,
            output: "-- Build files have been written to: build\n[ 50%] Built target salom\n[100%] Built target test_hisob",
          },
          {
            type: "table",
            head: ["Buyruq", "Vazifasi", "Natija"],
            rows: [
              ["<code>cmake -S . -B build</code>", "Loyihani sozlaydi", "<code>build/</code> yaratiladi"],
              ["<code>cmake --build build</code>", "Loyihani yig'adi", "Bajariluvchi fayllar"],
              ["<code>ctest --test-dir build</code>", "Testlarni ishga tushiradi", "Test natijalari"],
              ["<code>add_executable</code>", "Bajariluvchi nishon qo'shadi", "<code>salom</code>, <code>test_hisob</code>"],
              ["<code>target_compile_options</code>", "Nishonga bayroq qo'shadi", "<code>-Wall -Wextra</code>"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Manbadan tashqari build",
            html: "Build fayllarini manba yoniga aralashtirmang: <code>build</code> papkasida saqlang, uni versiya nazoratidan chiqaring. CMake 3.16 dan boshlab <code>-S</code> va <code>-B</code> bayroqlari keng qo'llanadi. Yangi kutubxona qo'shsangiz, <code>add_library</code> va <code>target_link_libraries</code> ishlatiladi. <code>cmake_minimum_required</code> ni oshirib yuborish eski tizimlarda sozlashni qiyinlashtirishi mumkin.",
          },
        ],
        quiz: [
          {
            q: "CMakeLists.txt faylining vazifasi nima?",
            options: [
              "C kodini bajarish",
              "Loyiha tuzilishi va build qoidalarini tavsiflash",
              "Xotirani boshqarish",
              "Faqat test natijalarini saqlash",
            ],
            answer: 1,
            explain: "CMakeLists.txt manba fayllar, nishonlar va sozlamalarni tavsiflaydi; CMake undan build tizimi yaratadi.",
          },
          {
            q: "Manbadan tashqari (out-of-source) build qanday amalga oshiriladi?",
            options: [
              "Manba fayllarini build papkasiga ko'chirish",
              "Faqat bitta fayl bilan ishlash",
              "Alohida build papkasida sozlash va yig'ish",
              "CMakeLists.txt ni o'chirish",
            ],
            answer: 2,
            explain: "Sozlash va yig'ish alohida papkada bajariladi; manba daraxti toza qoladi.",
          },
          {
            q: "add_executable buyrug'i nima qiladi?",
            options: [
              "Bajariluvchi nishon yaratadi",
              "Kutubxona ulaydi",
              "Testni o'chiradi",
              "Faylni ochadi",
            ],
            answer: 0,
            explain: "add_executable nom va manba fayllardan bajariluvchi target yaratadi.",
          },
        ],
      },
      {
        id: 45,
        title: "Testlash: mini test freymvork",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Testlar kod o'zgarganda eski xatti-harakat buzilmaganini tekshiradi. Kichik funksiyalar uchun har bir holatni alohida tekshirish kifoya: kutilgan natija va haqiqiy natijani taqqoslaymiz. Katta freymvork shart emas — bir necha yordamchi funksiya va aniq xabar chiqarish ham yetarli. Muhimi: testlar tez ishlashi, bir xil natija berishi va xatoni aniq ko'rsatishi.",
          },
          {
            type: "code",
            title: "mini_test.c",
            code: String.raw`#include <stdio.h>

static int otgan = 0;
static int jami = 0;

int qosh(int a, int b) {
    return a + b;
}

int faktorial(int n) {
    int natija = 1;
    for (int i = 2; i <= n; i++) {
        natija *= i;
    }
    return natija;
}

void tekshir(const char *nom, int kutilgan, int haqiqiy) {
    jami++;
    if (kutilgan == haqiqiy) {
        otgan++;
        printf("OK  %s\n", nom);
    } else {
        printf("FAIL %s: kutilgan %d, olindi %d\n", nom, kutilgan, haqiqiy);
    }
}

int main(void) {
    tekshir("qosh 2+3", 5, qosh(2, 3));
    tekshir("qosh manfiy", -1, qosh(2, -3));
    tekshir("faktorial 0", 1, faktorial(0));
    tekshir("faktorial 5", 120, faktorial(5));

    printf("%d/%d test o'tdi\n", otgan, jami);
    return (otgan == jami) ? 0 : 1;
}`,
            output: "OK  qosh 2+3\nOK  qosh manfiy\nOK  faktorial 0\nOK  faktorial 5\n4/4 test o'tdi",
          },
          {
            type: "table",
            head: ["Test turi", "Misol", "Maqsad"],
            rows: [
              ["Oddiy holat", "qosh(2, 3) == 5", "Asosiy ishni tekshirish"],
              ["Chegaraviy holat", "faktorial(0) == 1", "Nol va bo'sh holat"],
              ["Manfiy qiymat", "qosh(2, -3) == -1", "Ishora bilan ishlash"],
              ["Xato holati", "NULL yoki noto'g'ri indeks", "Himoya kodini tekshirish"],
              ["Regressiya", "Eski testlarni qayta ishga tushirish", "Yangi o'zgarish buzmasligi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Testlarni jadvalga aylantiring",
            html: "Bir xil funksiyani ko'p qiymatlar bilan tekshirish uchun jadval ishlatish qulay: har bir qatorda kirish va kutilgan natija bo'ladi. Bu takroriy kodni kamaytiradi va yangi holat qo'shishni osonlashtiradi. Test dasturi xato bo'lsa noldan farqli kod qaytarsin — shunda uni CI tizimi avtomatik sezadi. Har bir xato uchun aniq kirish qiymatlarini chiqaring, aks holda nosozlikni topish qiyin bo'ladi.",
          },
          {
            type: "code",
            title: "jadval_testi.c",
            code: String.raw`#include <stdio.h>

typedef struct {
    int a;
    int b;
    int kutilgan;
} Holat;

static int qosh(int a, int b) {
    return a + b;
}

int main(void) {
    Holat holatlar[] = {
        {2, 3, 5},
        {0, 0, 0},
        {-2, 3, 1},
        {10, -4, 6},
    };
    int jami = (int)(sizeof(holatlar) / sizeof(holatlar[0]));
    int otgan = 0;

    for (int i = 0; i < jami; i++) {
        int natija = qosh(holatlar[i].a, holatlar[i].b);
        if (natija == holatlar[i].kutilgan) {
            otgan++;
        } else {
            printf("FAIL %d: %d + %d, kutilgan %d, olindi %d\n",
                   i, holatlar[i].a, holatlar[i].b,
                   holatlar[i].kutilgan, natija);
        }
    }

    printf("%d/%d holat o'tdi\n", otgan, jami);
    return (otgan == jami) ? 0 : 1;
}`,
            output: "4/4 holat o'tdi",
          },
        ],
        quiz: [
          {
            q: "Unit test ning asosiy maqsadi nima?",
            options: [
              "Dasturni vizual bezash",
              "Kichik kod bo'lagi kutilganidek ishlashini tekshirish",
              "Fayl hajmini kamaytirish",
              "Faqat kompilyatsiya tezligini oshirish",
            ],
            answer: 1,
            explain: "Unit test alohida funksiya yoki modulning kutilgan natija berishini avtomatik tekshiradi.",
          },
          {
            q: "Kod o'zgarganidan keyin eski testlar qayta ishga tushirilsa, bu qanday tekshiruv?",
            options: [
              "Yuklama testi",
              "Dizayn tekshiruvi",
              "Xavfsizlik auditi",
              "Regressiya testi",
            ],
            answer: 3,
            explain: "Regressiya testi yangi o'zgarish eski ishlaydigan xatti-harakatni buzmasligini aniqlaydi.",
          },
          {
            q: "faktorial(0) ni tekshirish qaysi turdagi testga misol?",
            options: [
              "Chegaraviy holat testi",
              "Tasodifiy test",
              "Yuklama testi",
              "Interfeys testi",
            ],
            answer: 0,
            explain: "Nol — funksiyaning eng kichik chegaraviy kirishi; bunday holatlar alohida tekshiriladi.",
          },
        ],
      },
      {
        id: 46,
        title: "Xotira xavfsizligi va undefined behavior",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "<b>Undefined behavior (UB)</b> — C standarti xatti-harakatni belgilamagan holat. Bu shunchaki \"g'alati natija\" emas: kompilyator kodni optimallashtirib, umuman boshqacha ishlashi mumkin. Eng ko'p uchraydigan sabablar: massiv chegarasidan chiqish, bo'shatilgan xotiraga murojaat, ishlamagan ko'rsatkichni o'qish, ishorali sonning toshishi va <code>NULL</code> dereferensiyasi.",
          },
          {
            type: "code",
            title: "chegara_tekshiruvi.c",
            code: String.raw`#include <stdio.h>
#include <stddef.h>

int xavfsizOqi(const int *a, size_t n, size_t i, int *natija) {
    if (a == NULL || natija == NULL || i >= n) {
        return 0;
    }
    *natija = a[i];
    return 1;
}

int main(void) {
    int sonlar[4] = {10, 20, 30, 40};
    int qiymat;

    if (xavfsizOqi(sonlar, 4, 2, &qiymat)) {
        printf("Qiymat: %d\n", qiymat);
    }

    if (!xavfsizOqi(sonlar, 4, 5, &qiymat)) {
        printf("Indeks chegaradan tashqarida\n");
    }
    return 0;
}`,
            output: "Qiymat: 30\nIndeks chegaradan tashqarida",
          },
          {
            type: "table",
            head: ["Xato", "Nima bo'ladi", "Xavfsiz yechim"],
            rows: [
              ["Massivdan tashqariga yozish", "UB, boshqa ma'lumot buziladi", "Indeksni tekshirish"],
              ["free dan keyin o'qish", "UB, use-after-free", "Ko'rsatkichni <code>NULL</code> qilish"],
              ["Ishorali overflow", "UB", "<code>INT_MAX</code> bilan oldindan tekshirish"],
              ["NULL dereferensiya", "Segmentation fault", "Har doim <code>NULL</code> tekshirish"],
              ["Boshlang'ichsiz o'qish", "Tasodifiy qiymat", "O'zgaruvchini darhol boshlash"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Optimallashtirish UB ni yashirishi mumkin",
            html: "UB bo'lgan dastur debug buildda \"ishlashi\" mumkin, release buildda esa buziladi. Kompilyator UB ga asoslanib, kodning bir qismini olib tashlashi yoki shartni butunlay o'zgartirishi mumkin. Shuning uchun \"mening kompyuterimda ishlayapti\" dalil emas. <code>-fsanitize=address,undefined</code> bilan tekshiring va ogohlantirishlarni jiddiy qabul qiling. Ishorali overflow o'rniga <code>unsigned</code> yoki kengroq tur ishlatish mumkin, lekin ma'no o'zgarishini ham hisobga oling.",
          },
          {
            type: "code",
            title: "overflow_tekshiruvi.c",
            code: String.raw`#include <stdio.h>
#include <limits.h>

int xavfsizQosh(int a, int b, int *natija) {
    if (b > 0 && a > INT_MAX - b) {
        return 0;
    }
    if (b < 0 && a < INT_MIN - b) {
        return 0;
    }
    *natija = a + b;
    return 1;
}

int main(void) {
    int natija;

    printf("%d\n", xavfsizQosh(10, 20, &natija));
    printf("Natija: %d\n", natija);
    printf("%d\n", xavfsizQosh(2000000000, 1000000000, &natija));
    printf("Yakuniy natija: %d\n", natija);
    return 0;
}`,
            output: "1\nNatija: 30\n0\nYakuniy natija: 30",
          },
        ],
        quiz: [
          {
            q: "Undefined behavior nima?",
            options: [
              "Dastur har doim xato bilan to'xtaydi",
              "Kompilyator ogohlantirish beradi, dastur ishlamaydi",
              "Standart xatti-harakatni belgilamagan holat; natijaga kafolat yo'q",
              "Faqat Windows da uchraydigan xato",
            ],
            answer: 2,
            explain: "UB da standart hech qanday talab qo'ymaydi; dastur ishlashi, qulashi yoki boshqa natija berishi mumkin.",
          },
          {
            q: "Ishorali int sonlar yig'indisi INT_MAX dan oshsa nima bo'ladi?",
            options: [
              "Avtomatik unsigned ga o'tadi",
              "Undefined behavior yuz beradi",
              "Dastur har doim xato kod qaytaradi",
              "Qiymat nolga tenglashadi",
            ],
            answer: 1,
            explain: "Ishorali butun sonning toshishi C standartida undefined behavior hisoblanadi.",
          },
          {
            q: "Bo'shatilgandan keyin ko'rsatkich bilan nima qilish xavfsiz?",
            options: [
              "Uni qayta dereferensiya qilish",
              "U orqali qiymat yozish",
              "Uni boshqa blok bilan solishtirish",
              "Uni NULL ga tenglashtirish",
            ],
            answer: 3,
            explain: "free dan keyin ko'rsatkichni NULL qilish tasodifiy qayta ishlatishning oldini oladi.",
          },
        ],
      },
      {
        id: 47,
        title: "Loyiha: kontaktlar menejeri — 1-qism",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi uch darsdan iborat loyihani boshlaymiz: <b>kontaktlar menejeri</b>. Birinchi qismda modelni yaratamiz: <code>Kontakt</code> strukturasi, kontaktlar to'plami va qo'shish, chiqarish, qidirish funksiyalari. Ma'lumotlar dastur ichida beriladi, shuning uchun natija har doim bir xil bo'ladi. Keyingi qismlarda dinamik xotira va fayl saqlash qo'shiladi.",
          },
          {
            type: "code",
            title: "kontaktlar1.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

#define MAX 10

typedef struct {
    char ism[20];
    char telefon[16];
} Kontakt;

typedef struct {
    Kontakt data[MAX];
    int soni;
} Kontaktlar;

int qosh(Kontaktlar *k, const char *ism, const char *telefon) {
    if (k->soni == MAX) {
        return 0;
    }
    if (strlen(ism) >= sizeof k->data[0].ism ||
        strlen(telefon) >= sizeof k->data[0].telefon) {
        return 0;
    }
    strcpy(k->data[k->soni].ism, ism);
    strcpy(k->data[k->soni].telefon, telefon);
    k->soni++;
    return 1;
}

void chiqar(const Kontaktlar *k) {
    for (int i = 0; i < k->soni; i++) {
        printf("%d. %s - %s\n", i + 1, k->data[i].ism, k->data[i].telefon);
    }
}

int main(void) {
    Kontaktlar k = {0};

    qosh(&k, "Aziza", "+998901112233");
    qosh(&k, "Bek", "+998902223344");
    qosh(&k, "Dilnoza", "+998903334455");

    chiqar(&k);
    printf("Jami: %d\n", k.soni);
    return 0;
}`,
            output: "1. Aziza - +998901112233\n2. Bek - +998902223344\n3. Dilnoza - +998903334455\nJami: 3",
          },
          {
            type: "table",
            head: ["Qism", "Vazifasi", "Keyingi qadam"],
            rows: [
              ["<code>Kontakt</code>", "Ism va telefonni birlashtiradi", "Qo'shimcha maydonlar"],
              ["<code>Kontaktlar</code>", "Massiv va elementlar soni", "Dinamik massiv"],
              ["<code>qosh</code>", "Chegara va uzunlikni tekshiradi", "Dublikatni rad etish"],
              ["<code>chiqar</code>", "Ro'yxatni ko'rsatadi", "Saralash va filtr"],
              ["<code>izla</code>", "Ism bo'yicha qidiradi", "Telefon bo'yicha qidirish"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Modelni ajratib yozing",
            html: "Ma'lumot modeli bilan foydalanuvchi interfeysini aralashtirmang. <code>qosh</code>, <code>izla</code>, <code>chiqar</code> funksiyalari <code>main</code> dan mustaqil bo'lsa, ularni testlash oson. Telefon raqamini <code>int</code> da saqlamang: u juda katta, yetakchi nol va <code>+</code> yo'qoladi. Satr sifatida saqlash to'g'ri. Bu bosqichda xotira statik, shuning uchun <code>MAX</code> dan oshib ketishni tekshirish muhim.",
          },
          {
            type: "code",
            title: "qidirish.c",
            code: String.raw`#include <stdio.h>
#include <string.h>

typedef struct {
    char ism[20];
    char telefon[16];
} Kontakt;

typedef struct {
    Kontakt data[10];
    int soni;
} Kontaktlar;

int qosh(Kontaktlar *k, const char *ism, const char *telefon) {
    if (k->soni == 10) {
        return 0;
    }
    strcpy(k->data[k->soni].ism, ism);
    strcpy(k->data[k->soni].telefon, telefon);
    k->soni++;
    return 1;
}

int izla(const Kontaktlar *k, const char *ism) {
    for (int i = 0; i < k->soni; i++) {
        if (strcmp(k->data[i].ism, ism) == 0) {
            return i;
        }
    }
    return -1;
}

int main(void) {
    Kontaktlar k = {0};

    qosh(&k, "Aziza", "+998901112233");
    qosh(&k, "Bek", "+998902223344");
    qosh(&k, "Dilnoza", "+998903334455");

    int i = izla(&k, "Bek");
    if (i >= 0) {
        printf("Topildi: %s - %s\n", k.data[i].ism, k.data[i].telefon);
    }

    if (izla(&k, "Ali") < 0) {
        printf("Ali topilmadi\n");
    }
    return 0;
}`,
            output: "Topildi: Bek - +998902223344\nAli topilmadi",
          },
        ],
        quiz: [
          {
            q: "Kontakt ma'lumotlarini nega struct ichida saqlash qulay?",
            options: [
              "Ism va telefonni bitta mantiqiy birlik sifatida saqlash uchun",
              "Xotirani butunlay tejash uchun",
              "Faylni ochish uchun",
              "Tsiklni tezlashtirish uchun",
            ],
            answer: 0,
            explain: "struct o'zaro bog'liq maydonlarni bitta obyekt sifatida saqlaydi va funksiyalarga birga uzatishni osonlashtiradi.",
          },
          {
            q: "qosh funksiyasi 0 qaytarganda bu nimani bildiradi?",
            options: [
              "Kontakt muvaffaqiyatli qo'shildi",
              "Ro'yxat bo'sh",
              "Qo'shish bajarilmadi: joy yo'q yoki maydon juda uzun",
              "Telefon raqami to'g'ri",
            ],
            answer: 2,
            explain: "Loyihada 0 muvaffaqiyatsizlikni bildiradi: massiv to'lgan yoki satr buferga sig'magan.",
          },
          {
            q: "Ism bo'yicha chiziqli qidiruvning murakkabligi qanday?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            answer: 1,
            explain: "Har bir kontaktni ketma-ket tekshirish eng yomon holatda O(n) vaqt oladi.",
          },
        ],
      },
      {
        id: 48,
        title: "Loyiha: kontaktlar menejeri — 2-qism",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Ikkinchi qismda statik massivni dinamik massivga almashtiramiz va kontaktlarni faylga saqlab, qayta yuklaymiz. Dinamik massiv kontaktlar soni oldindan noma'lum bo'lganda kerak. Saqlash uchun oddiy matn formatini tanlaymiz: har qatorda <code>ism;telefon</code>. Bu formatni qo'lda ham o'qish va tahrirlash mumkin.",
          },
          {
            type: "code",
            title: "dinamik_kontaktlar.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char ism[20];
    char telefon[16];
} Kontakt;

typedef struct {
    Kontakt *data;
    size_t soni;
    size_t cap;
} Kontaktlar;

int qosh(Kontaktlar *k, const char *ism, const char *telefon) {
    if (strlen(ism) >= sizeof k->data[0].ism ||
        strlen(telefon) >= sizeof k->data[0].telefon) {
        return 0;
    }

    if (k->soni == k->cap) {
        size_t yangi = (k->cap == 0) ? 2 : k->cap * 2;
        Kontakt *p = realloc(k->data, yangi * sizeof *p);
        if (p == NULL) {
            return 0;
        }
        k->data = p;
        k->cap = yangi;
    }

    strcpy(k->data[k->soni].ism, ism);
    strcpy(k->data[k->soni].telefon, telefon);
    k->soni++;
    return 1;
}

void chiqar(const Kontaktlar *k) {
    for (size_t i = 0; i < k->soni; i++) {
        printf("%zu. %s - %s\n", i + 1, k->data[i].ism, k->data[i].telefon);
    }
}

int main(void) {
    Kontaktlar k = {0};

    qosh(&k, "Aziza", "+998901112233");
    qosh(&k, "Bek", "+998902223344");
    qosh(&k, "Dilnoza", "+998903334455");
    qosh(&k, "Jasur", "+998904445566");

    chiqar(&k);
    printf("Jami: %zu\n", k.soni);
    printf("Sig'im: %zu\n", k.cap);
    free(k.data);
    return 0;
}`,
            output: "1. Aziza - +998901112233\n2. Bek - +998902223344\n3. Dilnoza - +998903334455\n4. Jasur - +998904445566\nJami: 4\nSig'im: 4",
          },
          {
            type: "table",
            head: ["Operatsiya", "Funksiya", "Xatoni tekshirish"],
            rows: [
              ["Saqlash", "<code>fopen(nom, \"w\")</code>", "NULL bo'lsa xato"],
              ["Qator yozish", "<code>fprintf</code>", "Manfiy qiymat bo'lsa xato"],
              ["O'qish", "<code>fgets</code>", "NULL — fayl tugadi yoki xato"],
              ["Ajratish", "<code>sscanf</code>", "Natija 2 bo'lishi kerak"],
              ["Yopish", "<code>fclose</code>", "0 bo'lishi kerak"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Matn formatining chegaralari",
            html: "Ajratgich sifatida <code>;</code> tanlandi, lekin ism ichida ham shu belgi uchrasa format buziladi. Ishonchli format uchun CSV qoidalari (qo'shtirnoq va escaping) yoki JSON kerak. <code>fgets</code> qatorni o'qiydi, lekin <code>\\n</code> ni ham qo'shadi — uni <code>strcspn</code> bilan olib tashlang. <code>sscanf</code> da <code>%19[^;]</code> va <code>%15s</code> kengliklari bufer chegarasini himoya qiladi. Har bir xatoda faylni yopishni unutmang.",
          },
          {
            type: "code",
            title: "saqlash_yuklash.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char ism[20];
    char telefon[16];
} Kontakt;

typedef struct {
    Kontakt *data;
    size_t soni;
    size_t cap;
} Kontaktlar;

int qosh(Kontaktlar *k, const char *ism, const char *telefon) {
    if (strlen(ism) >= sizeof k->data[0].ism ||
        strlen(telefon) >= sizeof k->data[0].telefon) {
        return 0;
    }
    if (k->soni == k->cap) {
        size_t yangi = (k->cap == 0) ? 2 : k->cap * 2;
        Kontakt *p = realloc(k->data, yangi * sizeof *p);
        if (p == NULL) {
            return 0;
        }
        k->data = p;
        k->cap = yangi;
    }
    strcpy(k->data[k->soni].ism, ism);
    strcpy(k->data[k->soni].telefon, telefon);
    k->soni++;
    return 1;
}

int saqla(const Kontaktlar *k, const char *nom) {
    FILE *f = fopen(nom, "w");
    if (f == NULL) {
        return 0;
    }
    for (size_t i = 0; i < k->soni; i++) {
        if (fprintf(f, "%s;%s\n", k->data[i].ism, k->data[i].telefon) < 0) {
            fclose(f);
            return 0;
        }
    }
    return fclose(f) == 0;
}

int yukla(Kontaktlar *k, const char *nom) {
    FILE *f = fopen(nom, "r");
    if (f == NULL) {
        return 0;
    }
    char qator[64];
    while (fgets(qator, sizeof qator, f) != NULL) {
        qator[strcspn(qator, "\r\n")] = '\0';
        char ism[20];
        char telefon[16];
        if (sscanf(qator, "%19[^;];%15s", ism, telefon) == 2) {
            if (!qosh(k, ism, telefon)) {
                fclose(f);
                return 0;
            }
        }
    }
    return fclose(f) == 0;
}

int main(void) {
    Kontaktlar k = {0};
    qosh(&k, "Aziza", "+998901112233");
    qosh(&k, "Bek", "+998902223344");

    if (saqla(&k, "kontaktlar.txt")) {
        printf("Saqlandi: kontaktlar.txt\n");
    }
    free(k.data);

    Kontaktlar yuklangan = {0};
    if (yukla(&yuklangan, "kontaktlar.txt")) {
        printf("Yuklandi: %zu\n", yuklangan.soni);
        for (size_t i = 0; i < yuklangan.soni; i++) {
            printf("%zu. %s - %s\n", i + 1,
                   yuklangan.data[i].ism, yuklangan.data[i].telefon);
        }
    }
    free(yuklangan.data);
    return 0;
}`,
            output: "Saqlandi: kontaktlar.txt\nYuklandi: 2\n1. Aziza - +998901112233\n2. Bek - +998902223344",
          },
        ],
        quiz: [
          {
            q: "Dinamik massiv sig'imi tugaganda odatda qanday o'stiriladi?",
            options: [
              "Har safar 1 taga",
              "Ikki baravar (yoki ma'lum koeffitsiyent bilan)",
              "Har safar 100 taga, qat'iy",
              "Sig'im o'stirilmaydi",
            ],
            answer: 1,
            explain: "Ikki baravar o'stirish qo'shishni amortizatsiyalangan O(1) qiladi va reallokatsiyalar sonini kamaytiradi.",
          },
          {
            q: "fgets o'qigan qatorda qanday qo'shimcha belgi bo'lishi mumkin?",
            options: [
              "Yangi qator belgisi",
              "Faqat nol belgisi",
              "Har doim bo'sh joy",
              "Fayl nomi",
            ],
            answer: 0,
            explain: "fgets buferga sig'sa, yangi qator belgisini ham saqlaydi; uni keyin olib tashlash kerak.",
          },
          {
            q: "Nega loyihada matn fayl formati tanlandi?",
            options: [
              "U har doim ikkilik fayldan tezroq",
              "U struktura paddingini saqlaydi",
              "U faqat C tilida o'qiladi",
              "Uni qo'lda o'qish va tahrirlash oson",
            ],
            answer: 3,
            explain: "Matn formati ko'chma va tushunarli; foydalanuvchi uni oddiy muharrirda ko'ra oladi.",
          },
        ],
      },
      {
        id: 49,
        title: "Loyiha: kontaktlar menejeri — 3-qism",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Yakuniy qismda loyihaga saralash, o'chirish va tekshiruvlarni qo'shamiz. <code>qsort</code> yordamida kontaktlarni ism bo'yicha tartiblaymiz, o'rtadan elementni <code>memmove</code> bilan o'chiramiz. Shuningdek dublikat telefon raqamlarini rad etamiz va qisqa hisobot chiqaramiz. Bu — oldingi darslardagi dinamik massiv, ko'rsatkichlar, satrlar va fayllar bilimlarining amaliy qo'llanishi.",
          },
          {
            type: "code",
            title: "saralash_ochirish.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char ism[20];
    char telefon[16];
} Kontakt;

typedef struct {
    Kontakt *data;
    size_t soni;
    size_t cap;
} Kontaktlar;

int qosh(Kontaktlar *k, const char *ism, const char *telefon) {
    if (strlen(ism) >= sizeof k->data[0].ism ||
        strlen(telefon) >= sizeof k->data[0].telefon) {
        return 0;
    }
    if (k->soni == k->cap) {
        size_t yangi = (k->cap == 0) ? 2 : k->cap * 2;
        Kontakt *p = realloc(k->data, yangi * sizeof *p);
        if (p == NULL) {
            return 0;
        }
        k->data = p;
        k->cap = yangi;
    }
    strcpy(k->data[k->soni].ism, ism);
    strcpy(k->data[k->soni].telefon, telefon);
    k->soni++;
    return 1;
}

int ismBoyicha(const void *a, const void *b) {
    const Kontakt *x = (const Kontakt *)a;
    const Kontakt *y = (const Kontakt *)b;
    return strcmp(x->ism, y->ism);
}

int ochir(Kontaktlar *k, const char *ism) {
    for (size_t i = 0; i < k->soni; i++) {
        if (strcmp(k->data[i].ism, ism) == 0) {
            memmove(&k->data[i], &k->data[i + 1],
                    (k->soni - i - 1) * sizeof *k->data);
            k->soni--;
            return 1;
        }
    }
    return 0;
}

void chiqar(const Kontaktlar *k) {
    for (size_t i = 0; i < k->soni; i++) {
        printf("%zu. %s - %s\n", i + 1, k->data[i].ism, k->data[i].telefon);
    }
}

int main(void) {
    Kontaktlar k = {0};

    qosh(&k, "Jasur", "+998904445566");
    qosh(&k, "Aziza", "+998901112233");
    qosh(&k, "Dilnoza", "+998903334455");
    qosh(&k, "Bek", "+998902223344");

    qsort(k.data, k.soni, sizeof k.data[0], ismBoyicha);
    chiqar(&k);

    printf("---\n");
    if (ochir(&k, "Bek")) {
        printf("Bek o'chirildi\n");
    }
    chiqar(&k);
    printf("Qoldi: %zu\n", k.soni);

    free(k.data);
    return 0;
}`,
            output: "1. Aziza - +998901112233\n2. Bek - +998902223344\n3. Dilnoza - +998903334455\n4. Jasur - +998904445566\n---\nBek o'chirildi\n1. Aziza - +998901112233\n2. Dilnoza - +998903334455\n3. Jasur - +998904445566\nQoldi: 3",
          },
          {
            type: "table",
            head: ["Talab", "Yechim", "Tekshiruv"],
            rows: [
              ["Saralash", "qsort + strcmp", "Natija alifbo tartibida"],
              ["O'chirish", "memmove + soni--", "Element yo'qoladi, tartib saqlanadi"],
              ["Dublikat", "telefonBormi", "Takroriy raqam rad etiladi"],
              ["Bo'sh ism", "strlen == 0", "Qo'shish bajarilmaydi"],
              ["Hisobot", "soni, eng uzun ism", "Yakuniy konsol xulosasi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Loyihani yanada rivojlantirish",
            html: "Keyingi qadamlar: menyu va foydalanuvchi kiritish (<code>fgets</code> + <code>sscanf</code>), telefon bo'yicha qidirish, tahrirlash, CSV eksport va testlar. Kodni funksiyalarga ajratib, har birini alohida test qiling. Xotira va chegara xatolarini <code>valgrind</code> yoki sanitizerlar bilan tekshiring. Git bilan versiyalab boring: har bir ishlaydigan bosqichni commit qilish keyingi o'zgarishlarni xavfsiz qiladi.",
          },
          {
            type: "code",
            title: "validatsiya_hisobot.c",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char ism[20];
    char telefon[16];
} Kontakt;

typedef struct {
    Kontakt *data;
    size_t soni;
    size_t cap;
} Kontaktlar;

int telefonBormi(const Kontaktlar *k, const char *telefon) {
    for (size_t i = 0; i < k->soni; i++) {
        if (strcmp(k->data[i].telefon, telefon) == 0) {
            return 1;
        }
    }
    return 0;
}

int qosh(Kontaktlar *k, const char *ism, const char *telefon) {
    if (strlen(ism) == 0 || strlen(ism) >= sizeof k->data[0].ism ||
        strlen(telefon) >= sizeof k->data[0].telefon) {
        return 0;
    }
    if (telefonBormi(k, telefon)) {
        return 0;
    }
    if (k->soni == k->cap) {
        size_t yangi = (k->cap == 0) ? 2 : k->cap * 2;
        Kontakt *p = realloc(k->data, yangi * sizeof *p);
        if (p == NULL) {
            return 0;
        }
        k->data = p;
        k->cap = yangi;
    }
    strcpy(k->data[k->soni].ism, ism);
    strcpy(k->data[k->soni].telefon, telefon);
    k->soni++;
    return 1;
}

int main(void) {
    Kontaktlar k = {0};
    int dublikat;
    int bosh;

    qosh(&k, "Aziza", "+998901112233");
    qosh(&k, "Bek", "+998902223344");
    qosh(&k, "Dilnoza", "+998903334455");
    qosh(&k, "Jasur", "+998904445566");

    dublikat = qosh(&k, "Nodira", "+998901112233");
    bosh = qosh(&k, "", "+998905556677");

    size_t engUzun = 0;
    int prefiks = 0;
    for (size_t i = 0; i < k.soni; i++) {
        if (strlen(k.data[i].ism) > strlen(k.data[engUzun].ism)) {
            engUzun = i;
        }
        if (strncmp(k.data[i].telefon, "+998", 4) == 0) {
            prefiks++;
        }
    }

    printf("Kontaktlar: %zu\n", k.soni);
    printf("998 raqamlar: %d\n", prefiks);
    printf("Eng uzun ism: %s\n", k.data[engUzun].ism);
    printf("Dublikat rad etildi: %d\n", dublikat == 0);
    printf("Bo'sh ism rad etildi: %d\n", bosh == 0);

    free(k.data);
    return 0;
}`,
            output: "Kontaktlar: 4\n998 raqamlar: 4\nEng uzun ism: Dilnoza\nDublikat rad etildi: 1\nBo'sh ism rad etildi: 1",
          },
        ],
        quiz: [
          {
            q: "Kontaktlarni ism bo'yicha saralashda qsort taqqoslash funksiyasi nimani qaytarishi kerak?",
            options: [
              "Ismlar uzunliklari yig'indisini",
              "Telefon raqamlari farqini",
              "strcmp natijasini",
              "Har doim 1",
            ],
            answer: 2,
            explain: "Satrlarni lug'at tartibida taqqoslash uchun strcmp natijasi to'g'ridan-to'g'ri qaytariladi.",
          },
          {
            q: "Dinamik massivdan o'rta elementni o'chirishda nima qilinadi?",
            options: [
              "Keyingi elementlar memmove bilan chapga suriladi va soni kamayadi",
              "Faqat soni kamayadi",
              "Massiv qayta malloc qilinadi",
              "Element NULL ga tenglanadi",
            ],
            answer: 0,
            explain: "Tartibni saqlash uchun keyingi elementlar bir joyga suriladi, keyin elementlar soni kamaytiriladi.",
          },
          {
            q: "Loyihada funksiyalarni alohida ajratishning asosiy foydasi nima?",
            options: [
              "Fayl hajmi oshadi",
              "Har bir qismni mustaqil test qilish va qayta ishlatish osonlashadi",
              "Xotira avtomatik bo'shaydi",
              "Kompilyator xatolarni yashirradi",
            ],
            answer: 1,
            explain: "Kichik, aniq funksiyalarni testlash, kengaytirish va qayta ishlatish osonroq bo'ladi.",
          },
        ],
      },
      {
        id: 50,
        title: "Yakuniy imtihon",
        minutes: 20,
        isExam: true,
        blocks: [
          {
            type: "p",
            html: "C kursining yakuniy imtihoni. Savollar 49 dars davomida o'rganilgan asosiy mavzularni qamrab oladi: kompilyatsiya va turlar, operatorlar va tsikllar, funksiyalar, massivlar va matnlar, ko'rsatkichlar va xotira, strukturalar, dinamik tuzilmalar, fayllar, algoritmlar, debugging va xavfsiz kod yozish.",
          },
          {
            type: "ul",
            items: [
              "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
              "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
              "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
              "O'tgandan keyin sertifikatni ko'rish va PDF qilib saqlash mumkin.",
            ],
          },
          {
            type: "table",
            head: ["Bo'lim", "Nimalar tekshiriladi", "Savollar"],
            rows: [
              ["Asoslar", "main, turlar, operatorlar, tsikllar", "2"],
              ["Xotira va ko'rsatkichlar", "manzil, malloc/free, dangling pointer", "3"],
              ["Tuzilmalar va fayllar", "struct, qsort, fseek/ftell", "3"],
              ["Algoritmlar", "BST, bit maskalari", "2"],
              ["Professional amaliyot", "assert, sanitizerlar", "2"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Imtihondan oldin",
            html: "Kod namunalarini yana bir bor ko'zdan kechiring. Ayniqsa <code>sizeof</code> va ko'rsatkichlar, <code>malloc</code>/<code>free</code> juftligi, satr oxiridagi <code>'\\0'</code>, <code>qsort</code> taqqoslash funksiyasi va fayl pozitsiyasi bilan ishlashga e'tibor bering. Har bir savolni oxirigacha o'qing — variantlar bir-biriga juda o'xshash bo'lishi mumkin.",
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
          q: "C dasturida main funksiyasi 0 qaytarganda bu odatda nimani bildiradi?",
          options: [
            "Xotira tugaganini",
            "Fayl topilmaganini",
            "Dastur muvaffaqiyatli tugaganini",
            "Kompilyatsiya xatosi borligini",
          ],
          answer: 2,
          explain: "0 qaytarish muvaffaqiyatli yakunni bildiradi; noldan farqli kod odatda xatoni ko'rsatadi.",
        },
        {
          q: "char ism[] = \"Bek\"; e'lonida massiv nechta bayt egallaydi?",
          options: ["2", "3", "4", "5"],
          answer: 2,
          explain: "Bek — 3 ta harf, oxirida '\\0' uchun yana 1 bayt: jami 4 bayt.",
        },
        {
          q: "Funksiya chaqiruvchining o'zgaruvchisini o'zgartirishi uchun parametr qanday uzatiladi?",
          options: [
            "Qiymat bo'yicha",
            "O'zgaruvchining ko'rsatkichi orqali",
            "Faqat const bilan",
            "Massiv nusxasi orqali",
          ],
          answer: 1,
          explain: "C argumentlarni qiymat bo'yicha uzatadi; asl obyektni o'zgartirish uchun uning manzili beriladi.",
        },
        {
          q: "malloc xotira ajrata olmasa qanday qiymat qaytaradi?",
          options: ["0", "-1", "NULL", "EOF"],
          answer: 2,
          explain: "malloc muvaffaqiyatsiz bo'lsa NULL qaytaradi; natijani har doim tekshirish kerak.",
        },
        {
          q: "Bo'shatilgan blok manzilini saqlab qolgan ko'rsatkich qanday ataladi?",
          options: [
            "Dangling pointer",
            "Null pointer",
            "Function pointer",
            "Void pointer",
          ],
          answer: 0,
          explain: "free dan keyin manzil yaroqsiz bo'ladi; uni saqlagan ko'rsatkich dangling pointer deyiladi.",
        },
        {
          q: "Singly linked list ning oxirgi tugunida keyingi tugun ko'rsatkichi nimaga teng bo'ladi?",
          options: ["O'ziga", "Bosh tugunga", "NULL ga", "Manzilga ega emas"],
          answer: 2,
          explain: "Oxirgi tugunning next ko'rsatkichi NULL bo'ladi — shu belgi ro'yxat tugaganini bildiradi.",
        },
        {
          q: "Strukturalar massivini qsort bilan saralashda element hajmi qanday beriladi?",
          options: [
            "sizeof(int)",
            "sizeof(massiv[0])",
            "Massiv uzunligi",
            "1",
          ],
          answer: 1,
          explain: "qsort ga bitta elementning hajmi kerak; uni sizeof(massiv[0]) bilan ishonchli olish mumkin.",
        },
        {
          q: "Oddiy BST ga tartiblangan kalitlarni ketma-ket qo'shsak, qidiruvning eng yomon murakkabligi qanday bo'ladi?",
          options: ["O(1)", "O(log n)", "O(n log n)", "O(n)"],
          answer: 3,
          explain: "Bunday qo'shish daraxtni bir tomonga cho'zib, ro'yxatga aylantiradi; qidiruv O(n) bo'ladi.",
        },
        {
          q: "Bayroqni yoqish va o'chirishni almashtirish (toggle) uchun qaysi amal ishlatiladi?",
          options: ["x |= maska", "x &= ~maska", "x ^= maska", "x = 0"],
          answer: 2,
          explain: "XOR maska bilan bajarilganda mos bit teskarilanadi: 0 dan 1, 1 dan 0.",
        },
        {
          q: "Release buildda assert tekshiruvlarini o'chirish uchun qaysi makro aniqlanadi?",
          options: ["DEBUG", "NDEBUG", "ASSERT_OFF", "RELEASE"],
          answer: 1,
          explain: "NDEBUG aniqlanganda assert makrosi bo'sh ifodaga aylanadi va tekshiruvlar kompilyatsiyada olib tashlanadi.",
        },
        {
          q: "fseek(f, 0, SEEK_END) dan keyin ftell(f) odatda nimani qaytaradi?",
          options: [
            "Fayl hajmini baytlarda",
            "Fayldagi qatorlar sonini",
            "Birinchi belgini",
            "Fayl oxirgi belgisining kodini",
          ],
          answer: 0,
          explain: "SEEK_END fayl oxiriga o'tadi; ftell joriy pozitsiyani, ya'ni fayl hajmini baytlarda qaytaradi.",
        },
        {
          q: "gcc -fsanitize=address bayrog'i nima uchun ishlatiladi?",
          options: [
            "Kodni optimallashtirish",
            "Xotira xatolarini aniqlash",
            "Faylni statik ulash",
            "Debug ma'lumotini o'chirish",
          ],
          answer: 1,
          explain: "AddressSanitizer bufer chegarasi, use-after-free kabi xotira xatolarini ish vaqtida aniqlaydi.",
        },
      ],
    },
  };
})();
