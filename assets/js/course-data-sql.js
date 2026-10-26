/* Noldan — SQL course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.sql = {
 "id": "sql",
 "title": "SQL",
 "logoClass": "course-logo--sql",
 "logoText": "SQL",
 "level": "Boshlovchi",
 "hours": "~20 soat",
 "testCount": 147,
 "lang": "sql",
 "interactive": "none",
 "heroTitle": "SQL: noldan ilg'or so'rovlargacha",
 "heroDesc": "SQL kursida 49 dars, 147 test va 12 savollik yakuniy imtihon sizni noldan ilg'or so'rovlargacha olib boradi: SELECT, JOIN, subquery, CTE, oynali funksiyalar, indekslar, tranzaksiyalar va real kutubxona loyihasi.",
 "metaDescription": "SQL kursi: 49 dars, 147 test, 12 savollik imtihon. SELECT, JOIN, subquery, CTE, oynali funksiyalar, indekslar, tranzaksiyalar va kutubxona loyihasi o'zbek tilida.",
 "modules": [
  {
   "title": "Asoslar",
   "lessons": [
    1,
    2,
    3,
    4,
    5
   ]
  },
  {
   "title": "Filtrlash, saralash va guruhlash",
   "lessons": [
    6,
    7,
    8,
    9
   ]
  },
  {
   "title": "Jadvallarni bog'lash va amaliy DML",
   "lessons": [
    10,
    11,
    12
   ]
  },
  {
   "title": "Matn, sana, NULL va CASE",
   "lessons": [
    13,
    14,
    15,
    16
   ]
  },
  {
   "title": "Subquery va to'plam amallari",
   "lessons": [
    17,
    18,
    19,
    20,
    21
   ]
  },
  {
   "title": "CTE va oynali funksiyalar",
   "lessons": [
    22,
    23,
    24,
    25,
    26,
    27,
    28
   ]
  },
  {
   "title": "View, indeks va so'rov rejasi",
   "lessons": [
    29,
    30,
    31,
    32
   ]
  },
  {
   "title": "Sxema dizayni va DDL/DML",
   "lessons": [
    33,
    34,
    35,
    36
   ]
  },
  {
   "title": "Tranzaksiya va server imkoniyatlari",
   "lessons": [
    37,
    38,
    39,
    40,
    41,
    42
   ]
  },
  {
   "title": "Migratsiya, xavfsizlik va zaxira",
   "lessons": [
    43,
    44,
    45,
    46
   ]
  },
  {
   "title": "Loyiha: maktab kutubxonasi",
   "lessons": [
    47,
    48,
    49
   ]
  },
  {
   "title": "Yakuniy imtihon",
   "lessons": [
    50
   ]
  }
 ],
 "lessons": [
  {
   "id": 1,
   "title": "SQL nima va ma'lumotlar bazasi qanday ishlaydi?",
   "minutes": 13,
   "blocks": [
    {
     "type": "p",
     "html": "SQL — <b>Structured Query Language</b>, ya'ni tuzilgan so'rovlar tili. U ma'lumotlar bazasidagi jadvallarga so'rov yuborish, ma'lumot qo'shish, o'zgartirish va o'chirish uchun ishlatiladi. SQL — dasturlash tili emas, balki ma'lumot bilan ishlash tili."
    },
    {
     "type": "p",
     "html": "Ma'lumotlar bazasi — jadvallar to'plami. Har bir <b>jadval</b> qatorlar (yozuvlar) va ustunlardan (maydonlar) iborat. Masalan, <code>talabalar</code> jadvalida har bir qator bitta talabani, ustunlar esa uning ismi, balli va kursini saqlaydi."
    },
    {
     "type": "table",
     "head": [
      "Atama",
      "Ma'nosi",
      "Misol"
     ],
     "rows": [
      [
       "Jadval (table)",
       "Bir turdagi ma'lumotlar to'plami",
       "<code>talabalar</code>"
      ],
      [
       "Qator (row)",
       "Bitta yozuv",
       "Aziza haqidagi ma'lumot"
      ],
      [
       "Ustun (column)",
       "Ma'lumotning bir turi",
       "<code>ism</code>, <code>ball</code>"
      ],
      [
       "So'rov (query)",
       "Bazaga yuborilgan buyruq",
       "<code>SELECT ...</code>"
      ]
     ]
    },
    {
     "type": "code",
     "title": "birinchi-so'rov.sql",
     "code": "SELECT ism, ball\nFROM talabalar;",
     "output": "ism      | ball\n---------+-----\nAziza    | 92\nBek      | 78\nDilnoza  | 88\nJasur    | 65",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "code",
     "title": "filtrlangan-so'rov.sql",
     "code": "SELECT ism, ball\nFROM talabalar\nWHERE ball >= 85\nORDER BY ball DESC;",
     "output": "ism     | ball\n--------+-----\nAziza   | 92\nDilnoza | 88",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "info",
     "title": "So'rov qanday o'qiladi?",
     "html": "<code>SELECT ism, ball</code> — «ism va ball ustunlarini tanla», <code>FROM talabalar</code> — «talabalar jadvalidan». SQL so'rovi ingliz tiliga o'xshab o'qiladi, shuning uchun kalit so'zlarni katta harflarda yozish odat tusiga kirgan."
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "SQL dialektlari",
     "html": "SQLite, PostgreSQL, MySQL va SQL Server — barchasi SQL bilan ishlaydi, lekin kichik farqlari bor. Kursdagi namunalar standart SQL'ga yaqin va SQLite'da ham ishlaydi. Brauzerda SQL bajaruvchi vosita yo'q, shuning uchun natijalar tayyor ko'rsatiladi."
    }
   ],
   "quiz": [
    {
     "q": "SQL nimaning qisqartmasi?",
     "options": [
      "Simple Question Language",
      "Structured Query Language",
      "System Quality Logic",
      "Structured Quick Loader"
     ],
     "answer": 1,
     "explain": "SQL — Structured Query Language, tuzilgan so'rovlar tili."
    },
    {
     "q": "Jadvaldagi bitta yozuv nima deyiladi?",
     "options": [
      "Fayl",
      "Ustun",
      "Qator",
      "Baza"
     ],
     "answer": 2,
     "explain": "Har bir qator (row) bitta yozuvni, ya'ni bitta obyekt haqidagi ma'lumotni saqlaydi."
    },
    {
     "q": "SELECT so'rovi nima qiladi?",
     "options": [
      "Ma'lumotni o'qiydi va tanlaydi",
      "Yangi foydalanuvchi yaratadi",
      "Faqat sonlarni qo'shadi",
      "Jadvalni o'chiradi"
     ],
     "answer": 0,
     "explain": "SELECT jadvaldan kerakli ustun va qatorlarni tanlab, natija sifatida qaytaradi."
    }
   ]
  },
  {
   "id": 2,
   "title": "SELECT va FROM: kerakli ma'lumotni tanlash",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "Eng ko'p ishlatiladigan so'rov — <code>SELECT</code>. U qaysi ustunlar kerakligini, <code>FROM</code> esa ma'lumot qaysi jadvaldan olinishini bildiradi. Barcha ustunlar kerak bo'lsa, <code>*</code> belgisi ishlatiladi."
    },
    {
     "type": "code",
     "title": "tanlash.sql",
     "code": "SELECT *\nFROM talabalar;",
     "output": "id | ism      | ball | kurs_id\n---+----------+------+--------\n1  | Aziza    | 92   | 1\n2  | Bek      | 78   | 1\n3  | Dilnoza  | 88   | 2\n4  | Jasur    | 65   | NULL",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "p",
     "html": "Ustunga vaqtincha yangi nom berish uchun <code>AS</code> ishlatiladi. Bu natija jadvalini o'qishni osonlashtiradi. Ustunlar ustida oddiy hisob-kitob ham qilish mumkin."
    },
    {
     "type": "code",
     "title": "alias.sql",
     "code": "SELECT ism AS \"Talaba ismi\",\n       ball,\n       ball + 5 AS bonus\nFROM talabalar;",
     "output": "Talaba ismi | ball | bonus\n------------+------+------\nAziza       | 92   | 97\nBek         | 78   | 83\nDilnoza     | 88   | 93\nJasur       | 65   | 70",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "table",
     "head": [
      "Yozuv",
      "Vazifasi"
     ],
     "rows": [
      [
       "<code>SELECT *</code>",
       "Barcha ustunlarni tanlaydi"
      ],
      [
       "<code>SELECT ism, ball</code>",
       "Faqat ko'rsatilgan ustunlarni tanlaydi"
      ],
      [
       "<code>AS nom</code>",
       "Ustun yoki jadvalga vaqtincha nom beradi"
      ],
      [
       "<code>;</code>",
       "So'rovni tugatadi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Katta jadvalda * ishlatmang",
     "html": "O'quv mashqlarida <code>SELECT *</code> qulay, lekin katta jadvalda barcha ustunlarni olish ortiqcha ma'lumot va sekinlikka olib keladi. Faqat kerakli ustunlarni tanlang."
    }
   ],
   "quiz": [
    {
     "q": "Barcha ustunlarni tanlash uchun nima yoziladi?",
     "options": [
      "SELECT TOP",
      "SELECT ALL",
      "SELECT *",
      "SELECT ANY"
     ],
     "answer": 2,
     "explain": "Yulduzcha (*) barcha ustunlarni bildiradi."
    },
    {
     "q": "FROM kalit so'zi nimani bildiradi?",
     "options": [
      "Qaysi ustunlar chiqishini",
      "Tartiblash usulini",
      "Foydalanuvchi nomini",
      "Qaysi jadvaldan olinishini"
     ],
     "answer": 3,
     "explain": "FROM ma'lumot manbai — qaysi jadvaldan so'rov bajarilishini ko'rsatadi."
    },
    {
     "q": "SELECT ball + 5 AS bonus nima qiladi?",
     "options": [
      "Jadvalga yangi ustun qo'shadi",
      "Natijada hisoblangan ustun chiqaradi",
      "Barcha ballarni 5 ga bo'ladi",
      "Jadvalni o'chiradi"
     ],
     "answer": 1,
     "explain": "Hisob-kitob faqat natijada ko'rinadi; jadvaldagi ma'lumot o'zgarmaydi."
    }
   ]
  },
  {
   "id": 3,
   "title": "CREATE TABLE: jadval, turlar va kalitlar",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Jadval yaratish uchun <code>CREATE TABLE</code> ishlatiladi. Har bir ustun nomi va ma'lumot turi ko'rsatiladi. Cheklovlar (constraints) esa noto'g'ri ma'lumot kiritilishining oldini oladi."
    },
    {
     "type": "code",
     "title": "jadval-yaratish.sql",
     "code": "CREATE TABLE talabalar (\n    id INTEGER PRIMARY KEY,\n    ism TEXT NOT NULL,\n    ball INTEGER DEFAULT 0,\n    kurs_id INTEGER,\n    FOREIGN KEY (kurs_id) REFERENCES kurslar(id)\n);",
     "output": "Jadval yaratildi: talabalar",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "jadval-tuzilishi.sql",
     "code": "SELECT column_name, data_type, is_nullable\nFROM information_schema.columns\nWHERE table_name = 'talabalar'\nORDER BY ordinal_position;",
     "output": "column_name | data_type | is_nullable\n------------+-----------+------------\nid          | integer   | NO\nism         | text      | NO\nball        | integer   | YES\nkurs_id     | integer   | YES",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Cheklov",
      "Vazifasi",
      "Misol"
     ],
     "rows": [
      [
       "<code>PRIMARY KEY</code>",
       "Har bir qator uchun noyob kalit",
       "<code>id INTEGER PRIMARY KEY</code>"
      ],
      [
       "<code>NOT NULL</code>",
       "Bo'sh (NULL) qiymat taqiqlanadi",
       "<code>ism TEXT NOT NULL</code>"
      ],
      [
       "<code>DEFAULT</code>",
       "Qiymat berilmasa ishlatiladigan qiymat",
       "<code>ball INTEGER DEFAULT 0</code>"
      ],
      [
       "<code>UNIQUE</code>",
       "Qiymat takrorlanmasligi shart",
       "<code>email TEXT UNIQUE</code>"
      ],
      [
       "<code>FOREIGN KEY</code>",
       "Boshqa jadvalga bog'lanish",
       "<code>REFERENCES kurslar(id)</code>"
      ]
     ]
    },
    {
     "type": "table",
     "head": [
      "Tur",
      "Nima saqlaydi",
      "Misol"
     ],
     "rows": [
      [
       "<code>INTEGER</code>",
       "Butun son",
       "<code>42</code>"
      ],
      [
       "<code>TEXT</code>",
       "Matn",
       "<code>'Aziza'</code>"
      ],
      [
       "<code>REAL</code>",
       "Kasr son",
       "<code>4.8</code>"
      ],
      [
       "<code>DATE</code>",
       "Sana",
       "<code>'2026-10-23'</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Kalitlar nima uchun kerak?",
     "html": "<code>PRIMARY KEY</code> qatorni bir ma'noda aniqlaydi — uning ID kabi. <code>FOREIGN KEY</code> esa boshqa jadvaldagi qatorga ishora qiladi. Masalan, talabaning <code>kurs_id</code> qiymati <code>kurslar</code> jadvalidagi mavjud kursga bog'lanadi. Bu ma'lumotlar bir-biriga mos bo'lishini ta'minlaydi."
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Dialekt farqi",
     "html": "SQLite'da avtomatik o'suvchi kalit uchun <code>INTEGER PRIMARY KEY AUTOINCREMENT</code> yoziladi. PostgreSQL'da <code>SERIAL</code>, MySQL'da <code>AUTO_INCREMENT</code> ishlatiladi. Asosiy mantiq bir xil."
    }
   ],
   "quiz": [
    {
     "q": "Yangi jadval yaratish buyrug'i qaysi?",
     "options": [
      "NEW TABLE",
      "ADD TABLE",
      "MAKE TABLE",
      "CREATE TABLE"
     ],
     "answer": 3,
     "explain": "CREATE TABLE yangi jadval va uning ustunlarini yaratadi."
    },
    {
     "q": "Har bir qatorni noyob aniqlovchi kalit qanday ataladi?",
     "options": [
      "PRIMARY KEY",
      "DEFAULT",
      "INDEX",
      "FOREIGN KEY"
     ],
     "answer": 0,
     "explain": "PRIMARY KEY takrorlanmaydigan va NULL bo'lmaydigan asosiy kalit."
    },
    {
     "q": "ustun TEXT NOT NULL nimani bildiradi?",
     "options": [
      "Ustun bo'sh bo'lishi mumkin",
      "Ustunga faqat son yoziladi",
      "Ustun bo'sh bo'lishi mumkin emas",
      "Ustun avtomatik o'chadi"
     ],
     "answer": 2,
     "explain": "NOT NULL cheklovi ustunga NULL qiymat kiritishni taqiqlaydi."
    }
   ]
  },
  {
   "id": 4,
   "title": "INSERT INTO: ma'lumot qo'shish",
   "minutes": 14,
   "blocks": [
    {
     "type": "p",
     "html": "Jadvalga yangi yozuv qo'shish uchun <code>INSERT INTO</code> ishlatiladi. Ustunlar ro'yxatini va <code>VALUES</code> ichida ularga mos qiymatlarni yozasiz."
    },
    {
     "type": "code",
     "title": "qoshish.sql",
     "code": "INSERT INTO talabalar (id, ism, ball, kurs_id)\nVALUES (5, 'Nodira', 95, 1);",
     "output": "1 qator qo'shildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Bir nechta qatorni bitta so'rov bilan ham qo'shish mumkin. Qavslar orasidagi qiymatlar ustunlar tartibiga mos bo'lishi kerak."
    },
    {
     "type": "code",
     "title": "kop-qator.sql",
     "code": "INSERT INTO talabalar (ism, ball, kurs_id)\nVALUES\n    ('Sardor', 81, 2),\n    ('Malika', 90, 1),\n    ('Otabek', 73, 2);",
     "output": "3 qator qo'shildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Matn va tirnoqlar",
     "html": "Matn qiymatlari <b>bir tirnoq</b> ichida yoziladi: <code>'Aziza'</code>. Agar matnning o'zida tirnoq bo'lsa, uni ikkilantiring: <code>'Karim''s'</code>. Sonlar esa tirnoqsiz yoziladi."
    },
    {
     "type": "table",
     "head": [
      "Yozuv",
      "Ma'nosi"
     ],
     "rows": [
      [
       "<code>INSERT INTO talabalar</code>",
       "Qaysi jadvalga qo'shiladi"
      ],
      [
       "<code>(ism, ball)</code>",
       "Qaysi ustunlarga qiymat beriladi"
      ],
      [
       "<code>VALUES ('Aziza', 92)</code>",
       "Tegishli qiymatlar"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "ID ni har doim yozish shart emas",
     "html": "Agar <code>id</code> avtomatik o'sadigan kalit bo'lsa, uni ro'yxatdan tashlab ketish mumkin. Baza o'zi noyob ID beradi. Qo'lda yozilgan ID takrorlansa, xato chiqadi."
    }
   ],
   "quiz": [
    {
     "q": "Jadvalga yangi qator qo'shish uchun qaysi buyruq ishlatiladi?",
     "options": [
      "INSERT INTO",
      "PUT INTO",
      "CREATE ROW",
      "ADD INTO"
     ],
     "answer": 0,
     "explain": "INSERT INTO jadvalga yangi yozuv qo'shadi."
    },
    {
     "q": "Matn qiymatlari qanday yoziladi?",
     "options": [
      "Qavslar ichida",
      "Bir tirnoq ichida",
      "Faqat katta harflarda",
      "Tirnoqsiz"
     ],
     "answer": 1,
     "explain": "SQL'da matn qiymatlari bir tirnoq ichida yoziladi: 'Aziza'."
    },
    {
     "q": "VALUES (ism, ball) yozuvida nimaga e'tibor berish kerak?",
     "options": [
      "Faqat bitta qiymat bo'lishi",
      "Barcha qiymatlar son bo'lishi",
      "Ustunlar nomi kerak emas",
      "Qiymatlar ustunlar tartibiga mos bo'lishi"
     ],
     "answer": 3,
     "explain": "Qavs ichidagi qiymatlar avval ko'rsatilgan ustunlar tartibiga mos kelishi shart."
    }
   ]
  },
  {
   "id": 5,
   "title": "WHERE: shart bo'yicha filtrlash",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "<code>WHERE</code> faqat shartga mos qatorlarni qaytaradi. Shartlar taqqoslash operatorlari (<code>=</code>, <code>&lt;&gt;</code>, <code>&gt;</code>, <code>&lt;</code>) va mantiqiy <code>AND</code>, <code>OR</code>, <code>NOT</code> bilan tuziladi."
    },
    {
     "type": "code",
     "title": "filtr.sql",
     "code": "SELECT ism, ball\nFROM talabalar\nWHERE ball >= 80 AND kurs_id = 1;",
     "output": "ism   | ball\n------+-----\nAziza | 92",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "table",
     "head": [
      "Operator",
      "Ma'nosi",
      "Misol"
     ],
     "rows": [
      [
       "<code>=</code>",
       "Teng",
       "<code>kurs_id = 1</code>"
      ],
      [
       "<code>&lt;&gt;</code>",
       "Teng emas",
       "<code>ball &lt;&gt; 80</code>"
      ],
      [
       "<code>&gt;</code> / <code>&lt;</code>",
       "Katta / kichik",
       "<code>ball &gt; 70</code>"
      ],
      [
       "<code>&gt;=</code> / <code>&lt;=</code>",
       "Katta yoki teng / kichik yoki teng",
       "<code>ball &lt;= 90</code>"
      ],
      [
       "<code>AND</code>",
       "Ikkala shart ham rost",
       "<code>ball &gt; 70 AND kurs_id = 1</code>"
      ],
      [
       "<code>OR</code>",
       "Kamida bitta shart rost",
       "<code>kurs_id = 1 OR kurs_id = 2</code>"
      ],
      [
       "<code>NOT</code>",
       "Shartni inkor qiladi",
       "<code>NOT kurs_id = 2</code>"
      ]
     ]
    },
    {
     "type": "code",
     "title": "and-or.sql",
     "code": "SELECT ism, ball, kurs_id\nFROM talabalar\nWHERE (kurs_id = 1 OR kurs_id = 2)\n  AND ball < 85;",
     "output": "ism  | ball | kurs_id\n-----+------+--------\nBek  | 78   | 1",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Qavslar muhim",
     "html": "SQL'da <code>AND</code> odatda <code>OR</code> dan oldin bajariladi. Shubha bo'lsa, qavs qo'ying. <code>A OR B AND C</code> va <code>(A OR B) AND C</code> butunlay boshqa natija berishi mumkin."
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Teng emas",
     "html": "Standart SQL'da <code>&lt;&gt;</code> ishlatiladi. Ko'p bazalarda <code>!=</code> ham qabul qilinadi, lekin portativlik uchun <code>&lt;&gt;</code> afzal."
    }
   ],
   "quiz": [
    {
     "q": "Qatorlarni shart bo'yicha filtrlash uchun qaysi kalit so'z ishlatiladi?",
     "options": [
      "FILTER",
      "WHERE",
      "HAVING",
      "IF"
     ],
     "answer": 1,
     "explain": "WHERE qatorlarni so'rovda shart bo'yicha cheklaydi."
    },
    {
     "q": "ball <> 80 sharti nimani bildiradi?",
     "options": [
      "Ball 80 dan katta",
      "Ball 80 ga teng",
      "Ball 80 ga teng emas",
      "Ball bo'sh"
     ],
     "answer": 2,
     "explain": "<> teng emas operatori; ball 80 bo'lmagan qatorlar qaytadi."
    },
    {
     "q": "ball > 70 AND kurs_id = 1 sharti qachon rost bo'ladi?",
     "options": [
      "Faqat ikkala shart ham rost bo'lsa",
      "Hech qachon",
      "Faqat ball 70 dan kichik bo'lsa",
      "Ikkala shartdan biri rost bo'lsa"
     ],
     "answer": 0,
     "explain": "AND ikkala shartning ham bajarilishini talab qiladi."
    }
   ]
  },
  {
   "id": 6,
   "title": "ORDER BY, LIMIT va DISTINCT",
   "minutes": 14,
   "blocks": [
    {
     "type": "p",
     "html": "Natijani tartiblash uchun <code>ORDER BY</code>, qatorlar sonini cheklash uchun <code>LIMIT</code>, takrorlanuvchi qiymatlarni olib tashlash uchun <code>DISTINCT</code> ishlatiladi."
    },
    {
     "type": "code",
     "title": "tartiblash.sql",
     "code": "SELECT ism, ball\nFROM talabalar\nORDER BY ball DESC\nLIMIT 3;",
     "output": "ism     | ball\n--------+-----\nAziza   | 92\nDilnoza | 88\nBek     | 78",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "table",
     "head": [
      "So'z",
      "Vazifasi"
     ],
     "rows": [
      [
       "<code>ORDER BY ball</code>",
       "Ball bo'yicha o'sish tartibida (ASC)"
      ],
      [
       "<code>ORDER BY ball DESC</code>",
       "Ball bo'yicha kamayish tartibida"
      ],
      [
       "<code>LIMIT 3</code>",
       "Faqat birinchi 3 qatorni qaytaradi"
      ],
      [
       "<code>LIMIT 3 OFFSET 2</code>",
       "3 qatorni 2-qatordan keyin oladi (sahifalash)"
      ],
      [
       "<code>DISTINCT kurs_id</code>",
       "Takrorlanmagan qiymatlarni qaytaradi"
      ]
     ]
    },
    {
     "type": "code",
     "title": "distinct.sql",
     "code": "SELECT DISTINCT kurs_id\nFROM talabalar\nORDER BY kurs_id;",
     "output": "kurs_id\n-------\n1\n2\nNULL",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Nima uchun talabalar tartibi muhim?",
     "html": "ORDER BY bir nechta ustun bilan ham ishlaydi: <code>ORDER BY kurs_id ASC, ball DESC</code> — avval kurs bo'yicha o'sish, ichida ball bo'yicha kamayish tartibida saralaydi. Tartiblash <code>LIMIT</code> dan oldin bajariladi."
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Boshqa dialektlar",
     "html": "SQL Server'da <code>SELECT TOP 3 ...</code>, Oracle'da <code>FETCH FIRST 3 ROWS ONLY</code> ishlatiladi. <code>LIMIT</code> odatiy va eng keng tarqalgan variant."
    }
   ],
   "quiz": [
    {
     "q": "Natijani kamayish tartibida saralash uchun nima qo'shiladi?",
     "options": [
      "DISTINCT",
      "ASC",
      "DESC",
      "LIMIT"
     ],
     "answer": 2,
     "explain": "ORDER BY ustun DESC — kamayish tartibi. ASC esa o'sish (standart)."
    },
    {
     "q": "LIMIT 3 nima qiladi?",
     "options": [
      "3 marta takrorlaydi",
      "3 ta jadvalni bog'laydi",
      "3 ustunni tanlaydi",
      "Natijadan faqat 3 qator qaytaradi"
     ],
     "answer": 3,
     "explain": "LIMIT qaytariladigan qatorlar sonini cheklaydi."
    },
    {
     "q": "DISTINCT qanday ishlaydi?",
     "options": [
      "Barcha qatorlarni takrorlaydi",
      "Takrorlanuvchi qiymatlarni olib tashlaydi",
      "Jadvalni tartiblaydi",
      "Ustunni o'chiradi"
     ],
     "answer": 1,
     "explain": "DISTINCT tanlangan ustunlardagi bir xil qiymatlarni bitta qilib qaytaradi."
    }
   ]
  },
  {
   "id": 7,
   "title": "NULL, IN, BETWEEN va LIKE",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "<code>NULL</code> — qiymat yo'qligini bildiradi, u 0 yoki bo'sh matn emas. NULL bilan taqqoslash uchun <code>=</code> emas, <code>IS NULL</code> yoki <code>IS NOT NULL</code> ishlatiladi."
    },
    {
     "type": "code",
     "title": "null.sql",
     "code": "SELECT ism\nFROM talabalar\nWHERE kurs_id IS NULL;",
     "output": "ism\n-----\nJasur",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "code",
     "title": "oraliq-va-like.sql",
     "code": "SELECT ism, ball\nFROM talabalar\nWHERE ball BETWEEN 60 AND 95\n  AND ism LIKE '%a';",
     "output": "ism     | ball\n--------+-----\nAziza   | 92\nDilnoza | 88",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "table",
     "head": [
      "Operator",
      "Ma'nosi",
      "Misol"
     ],
     "rows": [
      [
       "<code>IS NULL</code>",
       "Qiymat yo'q",
       "<code>WHERE kurs_id IS NULL</code>"
      ],
      [
       "<code>IN</code>",
       "Ro'yxatdagi qiymatlardan biri",
       "<code>WHERE kurs_id IN (1, 2)</code>"
      ],
      [
       "<code>BETWEEN a AND b</code>",
       "a va b orasida (ikkalasi ham kiradi)",
       "<code>ball BETWEEN 70 AND 90</code>"
      ],
      [
       "<code>LIKE 'A%'</code>",
       "A bilan boshlanadi",
       "<code>ism LIKE 'A%'</code>"
      ],
      [
       "<code>LIKE '%a'</code>",
       "a bilan tugaydi",
       "<code>ism LIKE '%a'</code>"
      ],
      [
       "<code>LIKE '%li%'</code>",
       "ichida li bor",
       "<code>ism LIKE '%li%'</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "NULL bilan = ishlamaydi",
     "html": "<code>WHERE kurs_id = NULL</code> hech qachon qator qaytarmaydi, chunki NULL «noma'lum» degani. Har doim <code>IS NULL</code> ishlating. NULL'ni boshqa qiymat bilan almashtirish uchun <code>COALESCE(kurs_id, 0)</code> ishlatish mumkin."
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "LIKE va %",
     "html": "<code>%</code> — istalgan miqdordagi belgilar, <code>_</code> — aynan bitta belgi. <code>'A_'</code> — A bilan boshlanib, jami 2 ta belgi. Katta-kichik harflarga sezgirlik bazaga bog'liq."
    }
   ],
   "quiz": [
    {
     "q": "Bo'sh qiymatni tekshirish uchun nima ishlatiladi?",
     "options": [
      "NULL = 0",
      "= 'NULL'",
      "= NULL",
      "IS NULL"
     ],
     "answer": 3,
     "explain": "NULL bilan = ishlamaydi; IS NULL yoki IS NOT NULL ishlatiladi."
    },
    {
     "q": "ball BETWEEN 70 AND 90 nimani tanlaydi?",
     "options": [
      "70 dan 90 gacha, ikkalasi bilan birga",
      "70 dan kichik yoki 90 dan katta",
      "Faqat 70 va 90 ni",
      "70 dan katta, 90 dan kichikni"
     ],
     "answer": 0,
     "explain": "BETWEEN chegaralarni ham o'z ichiga oladi, ya'ni 70 <= ball <= 90."
    },
    {
     "q": "ism LIKE 'A%' sharti nimani bildiradi?",
     "options": [
      "Ism bo'sh",
      "Ism A bilan tugaydi",
      "Ism A bilan boshlanadi",
      "Ismda faqat A harfi bor"
     ],
     "answer": 2,
     "explain": "% istalgan belgilarni bildiradi; 'A%' — A bilan boshlanadigan matn."
    }
   ]
  },
  {
   "id": 8,
   "title": "Agregat funksiyalar: COUNT, SUM, AVG, MIN, MAX",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "Agregat funksiyalar bir nechta qatorni bitta qiymatga jamlaydi. Ular hisobot va statistika uchun asosiy vosita: qatorlar soni, yig'indi, o'rtacha, eng katta va eng kichik qiymat."
    },
    {
     "type": "code",
     "title": "statistika.sql",
     "code": "SELECT COUNT(*) AS jami,\n       AVG(ball) AS ortacha,\n       MAX(ball) AS eng_yuqori,\n       MIN(ball) AS eng_past\nFROM talabalar;",
     "output": "jami | ortacha | eng_yuqori | eng_past\n-----+---------+------------+---------\n4    | 80.75   | 92         | 65",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "table",
     "head": [
      "Funksiya",
      "Vazifasi",
      "Natija (misolda)"
     ],
     "rows": [
      [
       "<code>COUNT(*)</code>",
       "Qatorlar soni",
       "4"
      ],
      [
       "<code>SUM(ball)</code>",
       "Yig'indi",
       "323"
      ],
      [
       "<code>AVG(ball)</code>",
       "O'rtacha qiymat",
       "80.75"
      ],
      [
       "<code>MIN(ball)</code>",
       "Eng kichik qiymat",
       "65"
      ],
      [
       "<code>MAX(ball)</code>",
       "Eng katta qiymat",
       "92"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "COUNT(*) va COUNT(ustun) farqi",
     "html": "<code>COUNT(*)</code> barcha qatorlarni sanaydi. <code>COUNT(kurs_id)</code> esa faqat NULL bo'lmagan qiymatlarni sanaydi. Agar Jasurning kurs_id si NULL bo'lsa, natija 3 bo'ladi. Agregat funksiyalar odatda NULL'ni hisobga olmaydi."
    },
    {
     "type": "code",
     "title": "shartli-agregat.sql",
     "code": "SELECT COUNT(*) AS jami_talaba,\n       SUM(ball) AS umumiy_ball,\n       ROUND(AVG(ball), 1) AS ortacha\nFROM talabalar\nWHERE kurs_id = 1;",
     "output": "jami_talaba | umumiy_ball | ortacha\n------------+-------------+--------\n2           | 170         | 85.0",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Natijani yaxlitlash",
     "html": "SQLite va ko'p bazalarda <code>ROUND(qiymat, xonalar)</code> mavjud. Hisoblangan ustunga <code>AS</code> bilan nom bering, aks holda natija sarlavhasi o'qib bo'lmas uzun funksiya nomi bo'lib qoladi."
    }
   ],
   "quiz": [
    {
     "q": "Qatorlar sonini hisoblash uchun qaysi funksiya ishlatiladi?",
     "options": [
      "COUNT()",
      "AVG()",
      "MAX()",
      "SUM()"
     ],
     "answer": 0,
     "explain": "COUNT(*) qatorlar sonini qaytaradi."
    },
    {
     "q": "AVG(ball) nima qaytaradi?",
     "options": [
      "Eng katta ballni",
      "Ballarning o'rtacha qiymatini",
      "Ballar sonini",
      "Ballar yig'indisini"
     ],
     "answer": 1,
     "explain": "AVG — average, ya'ni o'rtacha arifmetik qiymat."
    },
    {
     "q": "COUNT(*) va COUNT(kurs_id) qanday farqlanadi?",
     "options": [
      "COUNT(*) faqat sonlarni sanaydi",
      "COUNT(kurs_id) faqat NULL larni sanaydi",
      "Farqi yo'q",
      "COUNT(kurs_id) NULL qiymatlarni sanamaydi"
     ],
     "answer": 3,
     "explain": "COUNT(*) barcha qatorlarni, COUNT(ustun) esa shu ustunda NULL bo'lmagan qiymatlarni sanaydi."
    }
   ]
  },
  {
   "id": 9,
   "title": "GROUP BY va HAVING",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Bir xil qiymatli qatorlarni guruhlab, har bir guruh bo'yicha statistika olish uchun <code>GROUP BY</code> ishlatiladi. Guruhlarni filtrlash uchun esa <code>HAVING</code> kerak — <code>WHERE</code> guruhlashdan <b>oldin</b>, <code>HAVING</code> esa <b>keyin</b> ishlaydi."
    },
    {
     "type": "code",
     "title": "guruhlash.sql",
     "code": "SELECT kurs_id,\n       COUNT(*) AS talabalar_soni,\n       AVG(ball) AS ortacha_ball\nFROM talabalar\nGROUP BY kurs_id;",
     "output": "kurs_id | talabalar_soni | ortacha_ball\n--------+----------------+-------------\n1       | 2              | 85.0\n2       | 1              | 88.0\nNULL    | 1              | 65.0",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "code",
     "title": "having.sql",
     "code": "SELECT kurs_id,\n       COUNT(*) AS talabalar_soni,\n       AVG(ball) AS ortacha_ball\nFROM talabalar\nGROUP BY kurs_id\nHAVING AVG(ball) >= 80\nORDER BY ortacha_ball DESC;",
     "output": "kurs_id | talabalar_soni | ortacha_ball\n--------+----------------+-------------\n2       | 1              | 88.0\n1       | 2              | 85.0",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "table",
     "head": [
      "Bosqich",
      "Kalit so'z",
      "Vazifasi"
     ],
     "rows": [
      [
       "1",
       "<code>WHERE</code>",
       "Alohida qatorlarni filtrlaydi"
      ],
      [
       "2",
       "<code>GROUP BY</code>",
       "Qolgan qatorlarni guruhlaydi"
      ],
      [
       "3",
       "<code>HAVING</code>",
       "Guruhlarni filtrlaydi"
      ],
      [
       "4",
       "<code>ORDER BY</code>",
       "Yakuniy natijani tartiblaydi"
      ],
      [
       "5",
       "<code>LIMIT</code>",
       "Qatorlar sonini cheklaydi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "SELECT'dagi ustunlar",
     "html": "GROUP BY ishlatilganda SELECT ro'yxatida odatda faqat guruhlangan ustun va agregat funksiyalar bo'lishi kerak. <code>SELECT ism, COUNT(*) ... GROUP BY kurs_id</code> kabi so'rov ko'p bazalarda xato beradi, chunki har bir guruhda bir nechta ism bor."
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Har bir guruh — bitta qator",
     "html": "Guruhlash natijasida har bir unikal <code>kurs_id</code> uchun bitta qator chiqadi. NULL ham alohida guruh hisoblanadi — shuning uchun yuqoridagi natijada <code>NULL</code> qatori ham bor."
    }
   ],
   "quiz": [
    {
     "q": "Qatorlarni guruhlash uchun qaysi kalit so'z ishlatiladi?",
     "options": [
      "JOIN",
      "GROUP BY",
      "ORDER BY",
      "HAVING"
     ],
     "answer": 1,
     "explain": "GROUP BY bir xil qiymatli qatorlarni guruhlaydi."
    },
    {
     "q": "Guruhlarni filtrlash uchun nima ishlatiladi?",
     "options": [
      "DISTINCT",
      "WHERE",
      "HAVING",
      "LIMIT"
     ],
     "answer": 2,
     "explain": "HAVING guruhlashdan keyin guruhlarni filtrlaydi."
    },
    {
     "q": "WHERE va HAVING farqi nima?",
     "options": [
      "WHERE guruhlashdan oldin, HAVING keyin ishlaydi",
      "HAVING faqat JOIN bilan ishlaydi",
      "WHERE faqat sonlar uchun",
      "Farqi yo'q"
     ],
     "answer": 0,
     "explain": "WHERE alohida qatorlarni, HAVING esa shakllangan guruhlarni filtrlaydi."
    }
   ]
  },
  {
   "id": 10,
   "title": "JOIN: jadvallarni bog'lash",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Ma'lumot ko'pincha bir nechta jadvalga bo'lingan. <code>JOIN</code> umumiy ustun orqali jadvallarni birlashtiradi. Eng ko'p ishlatiladigani — <code>INNER JOIN</code>: faqat ikkala jadvalda ham moslik topilgan qatorlar qaytadi. Bizda ikkita jadval bor: <code>talabalar</code> (ism, ball, kurs_id) va <code>kurslar</code> (id, nom). Talabaning kurs nomini ko'rish uchun ularni <code>kurs_id = kurslar.id</code> sharti bilan bog'laymiz."
    },
    {
     "type": "code",
     "title": "inner-join.sql",
     "code": "SELECT t.ism, k.nom AS kurs\nFROM talabalar t\nINNER JOIN kurslar k ON t.kurs_id = k.id;",
     "output": "ism     | kurs\n--------+-----------\nAziza   | Python\nBek     | Python\nDilnoza | JavaScript",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "p",
     "html": "Jasurning <code>kurs_id</code> qiymati NULL bo'lgani uchun INNER JOIN'da ko'rinmaydi. Uning qatorini ham saqlab qolish uchun <code>LEFT JOIN</code> ishlatiladi — chap jadvaldagi barcha qatorlar qaytadi, moslik topilmasa o'ng ustunlar NULL bo'ladi."
    },
    {
     "type": "code",
     "title": "left-join.sql",
     "code": "SELECT t.ism, k.nom AS kurs\nFROM talabalar t\nLEFT JOIN kurslar k ON t.kurs_id = k.id\nORDER BY t.id;",
     "output": "ism     | kurs\n--------+-----------\nAziza   | Python\nBek     | Python\nDilnoza | JavaScript\nJasur   | NULL",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "table",
     "head": [
      "JOIN turi",
      "Natijasi"
     ],
     "rows": [
      [
       "<code>INNER JOIN</code>",
       "Faqat ikkala jadvalda mos kelgan qatorlar"
      ],
      [
       "<code>LEFT JOIN</code>",
       "Chap jadvalning barcha qatorlari + mos o'ng qatorlar"
      ],
      [
       "<code>RIGHT JOIN</code>",
       "O'ng jadvalning barcha qatorlari + mos chap qatorlar"
      ],
      [
       "<code>FULL OUTER JOIN</code>",
       "Ikkala jadvalning barcha qatorlari"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "ON shartini unutmang",
     "html": "JOIN'dan keyin <code>ON</code> bilan bog'lanish sharti yozilmasa, natija har bir qatorning har bir qator bilan juftlashuvi (katta jadval) bo'lib qoladi. Bu deyarli har doim xato bo'ladi."
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Jadval taxalluslari",
     "html": "<code>t</code> va <code>k</code> — jadval taxalluslari. Ular so'rovni qisqartiradi va bir xil nomli ustunlar (<code>id</code>) to'qnashganda aniqlik beradi: <code>t.id</code>, <code>k.id</code>."
    }
   ],
   "quiz": [
    {
     "q": "INNER JOIN qanday qatorlarni qaytaradi?",
     "options": [
      "Barcha mumkin bo'lgan juftliklarni",
      "Faqat chap jadvaldagi barcha qatorlarni",
      "Ikkala jadvalda mos kelgan qatorlarni",
      "Faqat NULL qatorlarni"
     ],
     "answer": 2,
     "explain": "INNER JOIN faqat bog'lanish sharti bajarilgan qatorlarni qaytaradi."
    },
    {
     "q": "JOIN'dagi ON qismi nimani bildiradi?",
     "options": [
      "Tartiblash usulini",
      "Ustunlar sonini",
      "Jadval nomini",
      "Bog'lanish shartini"
     ],
     "answer": 3,
     "explain": "ON ikkala jadval qatorlarini qanday bog'lashni belgilaydi."
    },
    {
     "q": "LEFT JOIN'da o'ng jadvalda moslik topilmasa nima bo'ladi?",
     "options": [
      "So'rov xato beradi",
      "Chap qator qoladi, o'ng ustunlar NULL bo'ladi",
      "Ikkala jadval teskari aylanadi",
      "Qator o'chiriladi"
     ],
     "answer": 1,
     "explain": "LEFT JOIN chap qatorni saqlaydi; o'ng tomondagi ustunlar NULL bilan to'ldiriladi."
    }
   ]
  },
  {
   "id": 11,
   "title": "UPDATE, DELETE va tranzaksiyalar",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Mavjud ma'lumotni o'zgartirish uchun <code>UPDATE</code>, o'chirish uchun <code>DELETE</code> ishlatiladi. Bu buyruqlar juda kuchli: <code>WHERE</code> yozilmasa, ular jadvaldagi <b>barcha</b> qatorlarga ta'sir qiladi. Bir nechta amalni «hammasi yoki hech narsa» tamoyili bilan bajarish uchun tranzaksiya ishlatiladi. Amallar muvaffaqiyatli bo'lsa <code>COMMIT</code>, xato bo'lsa <code>ROLLBACK</code> bilan bekor qilinadi."
    },
    {
     "type": "code",
     "title": "yangilash.sql",
     "code": "UPDATE talabalar\nSET ball = ball + 5\nWHERE ism = 'Bek';",
     "output": "1 qator yangilandi.",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "ochirish.sql",
     "code": "DELETE FROM talabalar\nWHERE id = 4;",
     "output": "1 qator o'chirildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "WHERE'siz DELETE — xavfli",
     "html": "<code>DELETE FROM talabalar;</code> jadvaldagi barcha yozuvlarni o'chiradi. Real loyihada avval <code>SELECT</code> bilan aynan qaysi qatorlar o'chishini tekshiring, keyin <code>WHERE</code> bilan delete qiling. Ishlab chiqarish bazasida har doim zaxira nusxa bo'lishi kerak."
    },
    {
     "type": "code",
     "title": "tranzaksiya.sql",
     "code": "BEGIN TRANSACTION;\n\nUPDATE talabalar SET ball = ball + 5 WHERE id = 2;\nDELETE FROM talabalar WHERE id = 4;\n\nCOMMIT;",
     "output": "Tranzaksiya yakunlandi: ikkala amal ham saqlandi.",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Buyruq",
      "Vazifasi"
     ],
     "rows": [
      [
       "<code>UPDATE jadval SET ustun = qiymat</code>",
       "Qiymatlarni yangilaydi"
      ],
      [
       "<code>DELETE FROM jadval</code>",
       "Qatorlarni o'chiradi"
      ],
      [
       "<code>BEGIN TRANSACTION</code>",
       "Tranzaksiyani boshlaydi"
      ],
      [
       "<code>COMMIT</code>",
       "O'zgarishlarni saqlaydi"
      ],
      [
       "<code>ROLLBACK</code>",
       "O'zgarishlarni bekor qiladi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Bog'langan jadvallar",
     "html": "Agar boshqa jadvaldagi qatorlar o'chirilayotgan qatorga bog'langan bo'lsa, <code>FOREIGN KEY</code> o'chirishga to'sqinlik qilishi mumkin. Bunday holatda <code>ON DELETE CASCADE</code> yoki avval bog'langan yozuvlarni boshqarish kerak."
    }
   ],
   "quiz": [
    {
     "q": "Mavjud qatorlarni o'zgartirish uchun qaysi buyruq ishlatiladi?",
     "options": [
      "ALTER",
      "SELECT",
      "INSERT",
      "UPDATE"
     ],
     "answer": 3,
     "explain": "UPDATE mavjud qatorlardagi qiymatlarni yangilaydi."
    },
    {
     "q": "DELETE FROM talabalar; buyrug'i nima qiladi?",
     "options": [
      "Barcha qatorlarni o'chiradi",
      "Faqat NULL qatorlarni o'chiradi",
      "Jadvalni o'chiradi",
      "Birinchi qatorni o'chiradi"
     ],
     "answer": 0,
     "explain": "WHERE yo'q bo'lsa, DELETE barcha qatorlarga qo'llanadi."
    },
    {
     "q": "Tranzaksiyadagi o'zgarishlarni bekor qilish uchun nima ishlatiladi?",
     "options": [
      "UNDO",
      "COMMIT",
      "ROLLBACK",
      "CANCEL"
     ],
     "answer": 2,
     "explain": "ROLLBACK tranzaksiya boshidan buyon qilingan o'zgarishlarni bekor qiladi."
    }
   ]
  },
  {
   "id": 12,
   "title": "Subquery, CASE, indekslar va mini loyiha",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Bu darsda SQL'ning kuchli vositalarini birlashtiramiz: ichki so'rov (subquery), shartli ustun (<code>CASE</code>) va tezlashtiruvchi indeks. Oxirida barchasini mini loyihada qo'llaymiz. <b>Subquery</b> — boshqa so'rov ichidagi so'rov. U ko'pincha bitta qiymat yoki ro'yxat qaytaradi va tashqi shartda ishlatiladi. <code>CASE</code> — SQL'dagi if/else. U shartlarga qarab turli qiymat qaytaradi va natijada yangi ustun yaratadi."
    },
    {
     "type": "code",
     "title": "subquery.sql",
     "code": "SELECT ism, ball\nFROM talabalar\nWHERE ball > (SELECT AVG(ball) FROM talabalar);",
     "output": "ism     | ball\n--------+-----\nAziza   | 92\nDilnoza | 88",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "code",
     "title": "case.sql",
     "code": "SELECT ism,\n       CASE\n           WHEN ball >= 90 THEN 'A'\n           WHEN ball >= 80 THEN 'B'\n           WHEN ball >= 70 THEN 'C'\n           ELSE 'D'\n       END AS baho\nFROM talabalar;",
     "output": "ism     | baho\n--------+-----\nAziza   | A\nBek     | C\nDilnoza | B\nJasur   | D",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "p",
     "html": "<b>Indeks</b> — jadvaldagi ustunlar bo'yicha tez qidiruv uchun qo'shimcha tuzilma. U <code>WHERE</code> va <code>JOIN</code> shartlarini tezlashtiradi, lekin har bir indeks yozish amalini biroz sekinlashtiradi. Endi hammasini birlashtirib, har bir kurs bo'yicha talabalar soni va o'rtacha ballni chiqaradigan hisobot tuzamiz. Bu — haqiqiy dashboard'larda ishlatiladigan so'rov shakli."
    },
    {
     "type": "code",
     "title": "indeks.sql",
     "code": "CREATE INDEX idx_talabalar_kurs\nON talabalar (kurs_id);",
     "output": "Indeks yaratildi: idx_talabalar_kurs",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "loyiha-hisobot.sql",
     "code": "SELECT k.nom AS kurs,\n       COUNT(t.id) AS talabalar,\n       ROUND(AVG(t.ball), 1) AS ortacha\nFROM kurslar k\nLEFT JOIN talabalar t ON t.kurs_id = k.id\nGROUP BY k.nom\nORDER BY ortacha DESC;",
     "output": "kurs       | talabalar | ortacha\n-----------+-----------+--------\nJavaScript | 1         | 88.0\nPython     | 2         | 85.0\nSQL        | 0         | NULL",
     "outputLabel": "Natija jadvali"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Keyingi qadam",
     "html": "<ul><li><code>LEFT JOIN</code> — talabasiz kurslar ham hisobotda qoladi.</li><li><code>COUNT(t.id)</code> — mos talaba bo'lmasa 0 qaytaradi (<code>COUNT(*)</code> emas).</li><li><code>GROUP BY k.nom</code> — har bir kurs uchun bitta qator.</li><li><code>ORDER BY ortacha DESC</code> — eng yaxshi o'rtacha ball yuqorida.</li></ul>Yakuniy imtihondan o'tib sertifikat oling. Keyin ilova kodidan SQL'ni chaqirish (parametrli so'rovlar, ORM), indekslarni tahlil qilish (<code>EXPLAIN</code>) va ma'lumotlar bazasi loyihalashni o'rganishni davom eting."
    }
   ],
   "quiz": [
    {
     "q": "Subquery nima?",
     "options": [
      "Boshqa so'rov ichidagi so'rov",
      "Jadvaldagi ustun",
      "Indeks turi",
      "Tranzaksiya nomi"
     ],
     "answer": 0,
     "explain": "Subquery — ichki so'rov; natijasi tashqi so'rovda shart yoki qiymat sifatida ishlatiladi."
    },
    {
     "q": "CASE ifodasi nima qiladi?",
     "options": [
      "Jadvalni o'chiradi",
      "Shartlarga qarab qiymat qaytaradi",
      "Faqat sonlarni qo'shadi",
      "Indeks yaratadi"
     ],
     "answer": 1,
     "explain": "CASE — SQL'dagi shartli ifoda; WHEN shartlari bo'yicha THEN qiymatlaridan birini qaytaradi."
    },
    {
     "q": "Indeks nima uchun yaratiladi?",
     "options": [
      "Ma'lumotni o'chirish uchun",
      "Tranzaksiyani bekor qilish uchun",
      "Jadvalni chiroyli qilish uchun",
      "Qidiruv va JOIN'ni tezlashtirish uchun"
     ],
     "answer": 3,
     "explain": "Indeks tez qidiruvni ta'minlaydi, lekin yozish amallariga qo'shimcha yuk beradi."
    }
   ]
  },
  {
   "id": 13,
   "title": "Matn funksiyalari: tozalash, kesish va birlashtirish",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "Matn (text) — bazadagi eng ko'p uchraydigan ma'lumot turi. Ism, shahar, email va izohlar bilan ishlashda SQL'ning matn funksiyalari yordam beradi. Ularni <code>SELECT</code> ichida yangi ustun yaratish uchun ham, <code>WHERE</code> ichida filtrlash uchun ham ishlatish mumkin."
    },
    {
     "type": "table",
     "head": [
      "Funksiya",
      "Vazifasi",
      "Misol natijasi"
     ],
     "rows": [
      [
       "<code>UPPER(s)</code>",
       "Barcha harflarni katta qiladi",
       "<code>UPPER('sql')</code> → <code>SQL</code>"
      ],
      [
       "<code>LOWER(s)</code>",
       "Barcha harflarni kichik qiladi",
       "<code>LOWER('SQL')</code> → <code>sql</code>"
      ],
      [
       "<code>CHAR_LENGTH(s)</code>",
       "Belgilar sonini qaytaradi",
       "<code>CHAR_LENGTH('Aziza')</code> → <code>5</code>"
      ],
      [
       "<code>SUBSTRING(s FROM 1 FOR 3)</code>",
       "Matnning bir qismini oladi",
       "<code>'Dilnoza'</code> → <code>Dil</code>"
      ],
      [
       "<code>TRIM(s)</code>",
       "Ikki tomondagi bo'sh joyni olib tashlaydi",
       "<code>'  SQL  '</code> → <code>SQL</code>"
      ],
      [
       "<code>CONCAT(a, b)</code>",
       "Matnlarni birlashtiradi",
       "<code>'SQL', ' kursi'</code> → <code>SQL kursi</code>"
      ],
      [
       "<code>REPLACE(s, a, b)</code>",
       "Matn ichidagi qismni almashtiradi",
       "<code>'a@b.uz'</code> → <code>a</code>"
      ]
     ]
    },
    {
     "type": "code",
     "title": "matn-funksiyalari.sql",
     "code": "SELECT ism,\n       UPPER(ism) AS katta,\n       CHAR_LENGTH(ism) AS uzunlik,\n       SUBSTRING(ism FROM 1 FOR 3) AS qisqa\nFROM talabalar\nORDER BY id\nLIMIT 5;",
     "output": "ism     | katta   | uzunlik | qisqa\n--------+---------+---------+-------\nAziza   | AZIZA   |       5 | Azi\nBek     | BEK     |       3 | Bek\nDilnoza | DILNOZA |       7 | Dil\nJasur   | JASUR   |       5 | Jas\nNodira  | NODIRA  |       6 | Nod",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>CHAR_LENGTH</code> belgilar sonini, <code>OCTET_LENGTH</code> esa baytlar sonini qaytaradi. UTF-8'da o'zbekcha <b>o'</b> va <b>g'</b> harflari bir nechta bayt egallashi mumkin, shuning uchun foydalanuvchiga ko'rinadigan uzunlik uchun har doim <code>CHAR_LENGTH</code> ishlating. MySQL'da <code>LENGTH</code> baytlarda, <code>CHAR_LENGTH</code> belgilarda hisoblaydi."
    },
    {
     "type": "code",
     "title": "manzil-va-login.sql",
     "code": "SELECT ism,\n       CONCAT(shahar, ' shahri') AS manzil,\n       REPLACE(email, '@example.uz', '') AS login\nFROM talabalar\nWHERE shahar = 'Toshkent'\nORDER BY ism;",
     "output": "ism    | manzil          | login\n-------+-----------------+--------\nAziza  | Toshkent shahri | aziza\nNodira | Toshkent shahri | nodira\nOtabek | Toshkent shahri | otabek",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "NULL va matn birlashtirish",
     "html": "PostgreSQL va SQLite'da <code>NULL || ' matn'</code> natijasi <code>NULL</code> bo'ladi. MySQL'da <code>CONCAT</code> ham biror argument NULL bo'lsa NULL qaytaradi, PostgreSQL'da esa <code>CONCAT</code> NULL'larni e'tiborsiz qoldiradi. Ishonchli natija uchun avval <code>COALESCE(ustun, '')</code> ishlatib oling."
    }
   ],
   "quiz": [
    {
     "q": "SELECT ichida SUBSTRING(ism FROM 1 FOR 3) qanday natija beradi?",
     "options": [
      "Ismning oxirgi uchta harfini",
      "Ismning birinchi uchta belgisini",
      "Ism uzunligini",
      "Ismni katta harflarga o'giradi"
     ],
     "answer": 1,
     "explain": "SUBSTRING matnning 1-pozitsiyasidan boshlab 3 ta belgisini oladi."
    },
    {
     "q": "Matnning ikki tomonidagi ortiqcha bo'sh joylarni qaysi funksiya olib tashlaydi?",
     "options": [
      "REPLACE",
      "UPPER",
      "TRIM",
      "POSITION"
     ],
     "answer": 2,
     "explain": "TRIM standart bo'yicha bosh va oxirdagi bo'shliqlarni tozalaydi."
    },
    {
     "q": "O'zbekcha harflar bilan ishlaganda belgilar sonini olish uchun qaysi funksiya ishonchli?",
     "options": [
      "CHAR_LENGTH",
      "OCTET_LENGTH",
      "BIT_LENGTH",
      "ASCII"
     ],
     "answer": 0,
     "explain": "CHAR_LENGTH belgilar sonini beradi; OCTET_LENGTH va BIT_LENGTH hajmni o'lchaydi."
    }
   ]
  },
  {
   "id": 14,
   "title": "Sana va vaqt: oraliqlar, guruhlash va hisoblar",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Sana va vaqt bilan ishlashda uchta tushunchani ajratish muhim: <b>DATE</b> (faqat sana), <b>TIME</b> (kun ichidagi vaqt) va <b>TIMESTAMP</b> (sana + vaqt). Ro'yxatdan o'tish sanasi, tug'ilgan kun yoki to'lov muddati kabi ma'lumotlar uchun mos tur tanlanadi."
    },
    {
     "type": "table",
     "head": [
      "Amal",
      "Standart yozuv",
      "Izoh"
     ],
     "rows": [
      [
       "Bugungi sana",
       "<code>CURRENT_DATE</code>",
       "Qavssiz ham yoziladi"
      ],
      [
       "Sana yaratish",
       "<code>DATE '2026-01-01'</code>",
       "ISO format: YYYY-MM-DD"
      ],
      [
       "Qismini olish",
       "<code>EXTRACT(YEAR FROM sana)</code>",
       "Yil, oy, kun, soat"
      ],
      [
       "Oraliq qo'shish",
       "<code>sana + INTERVAL '30 days'</code>",
       "PostgreSQL, MySQL"
      ],
      [
       "Oy bo'yicha guruhlash",
       "<code>DATE_TRUNC('month', sana)</code>",
       "PostgreSQL"
      ],
      [
       "Ikki sana farqi",
       "<code>DATEDIFF(kun1, kun2)</code>",
       "MySQL; PostgreSQL'da ayirish"
      ]
     ]
    },
    {
     "type": "code",
     "title": "sana-qismlari.sql",
     "code": "SELECT ism,\n       tugilgan_sana,\n       EXTRACT(YEAR FROM tugilgan_sana) AS yil,\n       EXTRACT(MONTH FROM tugilgan_sana) AS oy\nFROM talabalar\nWHERE id <= 4\nORDER BY tugilgan_sana;",
     "output": "ism     | tugilgan_sana | yil  | oy\n--------+---------------+------+----\nJasur   | 2002-01-30    | 2002 |  1\nBek     | 2003-11-05    | 2003 | 11\nAziza   | 2004-03-12    | 2004 |  3\nDilnoza | 2004-07-21    | 2004 |  7",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Sanalarni guruhlashda <code>DATE_TRUNC</code> vaqtning kerakli qismini nolga tushiradi: <code>2025-10-05 14:30</code> qiymati <code>2025-10-01 00:00</code> bo'ladi. Shundan keyin <code>GROUP BY</code> bilan har oy uchun yozilishlar sonini hisoblash mumkin. Bu usul dashboard'lardagi oylik grafiklarning asosi."
    },
    {
     "type": "code",
     "title": "oylik-yozilishlar.sql",
     "code": "SELECT CAST(DATE_TRUNC('month', sana) AS DATE) AS oy,\n       COUNT(*) AS yozilishlar\nFROM yozilishlar\nGROUP BY DATE_TRUNC('month', sana)\nORDER BY oy;",
     "output": "oy         | yozilishlar\n-----------+------------\n2025-09-01 |           8\n2025-10-01 |           4\n2025-11-01 |           2",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Oraliqni yarim ochiq qilib yozing",
     "html": "<code>sana >= DATE '2025-10-01' AND sana < DATE '2025-11-01'</code> sharti bir oylik ma'lumotni aniq tanlaydi va indeksdan foydalanishga imkon beradi. <code>BETWEEN</code> bilan timestamp ustida ishlaganda kun oxiridagi vaqtlar tushib qolishi mumkin. MySQL'da <code>DATE_TRUNC</code> o'rniga <code>DATE_FORMAT(sana, '%Y-%m-01')</code> ishlatiladi."
    }
   ],
   "quiz": [
    {
     "q": "EXTRACT(MONTH FROM DATE '2026-10-23') qanday qiymat qaytaradi?",
     "options": [
      "3",
      "23",
      "10",
      "2026"
     ],
     "answer": 2,
     "explain": "EXTRACT oy qismini, ya'ni 10 ni qaytaradi."
    },
    {
     "q": "Bir oylik yozuvlarni indeksdan foydalanib tanlash uchun qaysi shart shakli yaxshi?",
     "options": [
      "CAST(sana AS TEXT) LIKE '2025-10%'",
      "YEAR(sana) = 2025 AND MONTH(sana) = 10",
      "sana BETWEEN '2025-10-01' AND '2025-10-31'",
      "sana >= '2025-10-01' AND sana < '2025-11-01'"
     ],
     "answer": 3,
     "explain": "Ustunga funksiya qo'llamaydigan yarim ochiq oraliq indeksdan yaxshi foydalanadi."
    },
    {
     "q": "MySQL'da ikki sana orasidagi kunlar sonini qaysi funksiya qaytaradi?",
     "options": [
      "DATE_FORMAT",
      "DATEDIFF",
      "DATE_ADD",
      "NOW"
     ],
     "answer": 1,
     "explain": "DATEDIFF(kun1, kun2) ikki sana orasidagi kunlar sonini beradi."
    }
   ]
  },
  {
   "id": 15,
   "title": "NULL bilan chuqur ishlash: uch qiymatli mantiq",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "<code>NULL</code> — nol ham, bo'sh satr ham emas; bu <b>noma'lum qiymat</b>. Shuning uchun <code>NULL = NULL</code> sharti <code>TRUE</code> emas, <code>UNKNOWN</code> qaytaradi. SQL'dagi mantiq uch qiymatli: <code>TRUE</code>, <code>FALSE</code> va <code>UNKNOWN</code>. <code>WHERE</code> faqat <code>TRUE</code> bo'lgan qatorlarni o'tkazadi."
    },
    {
     "type": "table",
     "head": [
      "Ifoda",
      "Natija",
      "Sabab"
     ],
     "rows": [
      [
       "<code>NULL = NULL</code>",
       "<code>UNKNOWN</code>",
       "Noma'lum noma'lumga teng emas"
      ],
      [
       "<code>NULL AND FALSE</code>",
       "<code>FALSE</code>",
       "FALSE butun ifodani yolg'on qiladi"
      ],
      [
       "<code>NULL OR TRUE</code>",
       "<code>TRUE</code>",
       "TRUE yetarli"
      ],
      [
       "<code>NULL + 5</code>",
       "<code>NULL</code>",
       "Noma'lum songa qo'shilmaydi"
      ],
      [
       "<code>COALESCE(NULL, 0)</code>",
       "<code>0</code>",
       "Birinchi NULL bo'lmagan qiymat"
      ]
     ]
    },
    {
     "type": "code",
     "title": "null-arifmetika.sql",
     "code": "SELECT ism,\n       ball,\n       kurs_id,\n       ball + kurs_id AS yigindi,\n       COALESCE(kurs_id, 0) AS kurs_yoki_0\nFROM talabalar\nWHERE id IN (4, 8)\nORDER BY id;",
     "output": "ism    | ball | kurs_id | yigindi | kurs_yoki_0\n-------+------+---------+---------+-------------\nJasur  |   65 |         |         |           0\nOtabek |   73 |       2 |      75 |           2",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Agregat funksiyalar NULL'larni e'tiborsiz qoldiradi: <code>AVG(ball)</code> faqat NULL bo'lmagan ballar bo'yicha hisoblanadi, <code>COUNT(kurs_id)</code> esa faqat kursi bor talabalarni sanaydi. <code>COUNT(*)</code> esa barcha qatorlarni, shu jumladan NULL'li qatorlarni ham sanaydi."
    },
    {
     "type": "code",
     "title": "null-statistika.sql",
     "code": "SELECT COUNT(*) AS jami,\n       COUNT(kurs_id) AS kursli,\n       COUNT(*) - COUNT(kurs_id) AS kurs_siz,\n       AVG(ball) AS ortacha\nFROM talabalar;",
     "output": "jami | kursli | kurs_siz | ortacha\n-----+--------+----------+---------\n   8 |      7 |        1 |   82.75",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "NOT IN ichida NULL bo'lsa",
     "html": "<code>WHERE kurs_id NOT IN (SELECT id FROM kurslar)</code> ichki so'rov NULL qaytarsa, natija bo'sh bo'lib qolishi mumkin: taqqoslash <code>UNKNOWN</code> bo'ladi. Bunday holatda <code>NOT EXISTS</code> ishlating yoki ichki so'rovga <code>WHERE id IS NOT NULL</code> qo'shing. PostgreSQL'da <code>IS DISTINCT FROM</code> NULL'ni oddiy qiymat kabi taqqoslaydi."
    }
   ],
   "quiz": [
    {
     "q": "WHERE shartida NULL = NULL natijasi qanday bo'ladi?",
     "options": [
      "Xato beradi",
      "TRUE",
      "FALSE",
      "UNKNOWN"
     ],
     "answer": 3,
     "explain": "NULL noma'lum qiymat, shuning uchun taqqoslash UNKNOWN qaytaradi va qator tanlanmaydi."
    },
    {
     "q": "COUNT(kurs_id) qanday qatorlarni sanaydi?",
     "options": [
      "Faqat kurs_id NULL bo'lmagan qatorlarni",
      "Barcha qatorlarni",
      "Faqat NULL qatorlarni",
      "Faqat takrorlanmagan qatorlarni"
     ],
     "answer": 0,
     "explain": "COUNT(ustun) NULL qiymatlarni e'tiborsiz qoldiradi; barcha qatorlar uchun COUNT(*) kerak."
    },
    {
     "q": "COALESCE(kurs_id, 0) qachon 0 qaytaradi?",
     "options": [
      "kurs_id musbat bo'lsa",
      "kurs_id matn bo'lsa",
      "kurs_id NULL bo'lsa",
      "kurs_id har doim 0 bo'lsa"
     ],
     "answer": 2,
     "explain": "COALESCE argumentlarni chapdan o'ngga tekshiradi va birinchi NULL bo'lmagan qiymatni qaytaradi."
    }
   ]
  },
  {
   "id": 16,
   "title": "CASE: shartli mantiq va shartli agregatsiya",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "<code>CASE</code> — SQL'dagi if/else. U shartlarni yuqoridan pastga tekshiradi va birinchi <code>TRUE</code> bo'lgan shoxning qiymatini qaytaradi. <code>CASE</code> yangi ustun yaratish, saralash va bir so'rovda bir nechta ko'rsatkichni hisoblash uchun ishlatiladi."
    },
    {
     "type": "code",
     "title": "baho-shkalasi.sql",
     "code": "SELECT ism,\n       ball,\n       CASE\n           WHEN ball >= 90 THEN 'A'\n           WHEN ball >= 80 THEN 'B'\n           WHEN ball >= 70 THEN 'C'\n           ELSE 'D'\n       END AS baho\nFROM talabalar\nORDER BY id;",
     "output": "ism     | ball | baho\n--------+------+------\nAziza   |   92 | A\nBek     |   78 | C\nDilnoza |   88 | B\nJasur   |   65 | D\nNodira  |   95 | A\nSardor  |   81 | B\nMalika  |   90 | A\nOtabek  |   73 | C",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Shartli agregatsiya — bitta so'rovda turli shartlar bo'yicha hisoblash usuli. <code>COUNT(CASE WHEN shart THEN 1 END)</code> shart bajarilgan qatorlarni sanaydi, qolganlarida <code>NULL</code> hosil bo'ladi va COUNT uni tashlab ketadi. Bu pivot jadval yasashning eng ko'chma usuli."
    },
    {
     "type": "code",
     "title": "kurs-pivot.sql",
     "code": "SELECT k.nom,\n       COUNT(CASE WHEN t.ball >= 90 THEN 1 END) AS yuqori,\n       COUNT(CASE WHEN t.ball BETWEEN 80 AND 89 THEN 1 END) AS orta,\n       COUNT(CASE WHEN t.ball < 80 THEN 1 END) AS past\nFROM kurslar k\nLEFT JOIN talabalar t ON t.kurs_id = k.id\nGROUP BY k.nom\nORDER BY k.nom;",
     "output": "nom        | yuqori | orta | past\n-----------+--------+------+------\nJavaScript |      0 |    2 |    1\nPython     |      3 |    0 |    1\nSQL        |      0 |    0 |    0",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Shakl",
      "Misol",
      "Qachon ishlatiladi"
     ],
     "rows": [
      [
       "Oddiy CASE",
       "<code>CASE holat WHEN 'faol' THEN 1 ELSE 0 END</code>",
       "Bitta ustunni bir necha aniq qiymat bilan taqqoslash"
      ],
      [
       "Qidiruvchi CASE",
       "<code>CASE WHEN ball >= 90 THEN 'A' END</code>",
       "Murakkab shartlar va oraliqlar"
      ],
      [
       "CASE saralashda",
       "<code>ORDER BY CASE WHEN holat = 'faol' THEN 1 ELSE 2 END</code>",
       "Natijani biznes tartibida chiqarish"
      ],
      [
       "CASE agregatsiyada",
       "<code>SUM(CASE WHEN ... THEN summa ELSE 0 END)</code>",
       "Bir nechta ko'rsatkichni bitta so'rovda olish"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "ELSE va ma'lumot turi",
     "html": "<code>ELSE</code> yozilmasa, hech qanday shart bajarilmasa natija <code>NULL</code> bo'ladi. Barcha <code>THEN</code> shoxlari bir xil yoki mos turdagi qiymat qaytarishi kerak: bir shoxda son, boshqasida matn qaytarish ba'zi bazalarda xatoga olib keladi. Shartlarni eng toridan emas, odatda eng kattasidan boshlab yozing."
    }
   ],
   "quiz": [
    {
     "q": "CASE ifodasida birinchi TRUE shart bajarilgandan keyin nima bo'ladi?",
     "options": [
      "Keyingi shartlar e'tiborsiz qoldiriladi",
      "So'rov bekor qilinadi",
      "Faqat ELSE bajariladi",
      "Barcha shartlar yana tekshiriladi"
     ],
     "answer": 0,
     "explain": "CASE birinchi mos shoxni tanlaydi va qolgan shartlarni tekshirmaydi."
    },
    {
     "q": "CASE'da ELSE yozilmagan va hech bir shart bajarilmagan bo'lsa, natija nega bo'ladi?",
     "options": [
      "Bo'sh satr",
      "NULL",
      "Xato",
      "0"
     ],
     "answer": 1,
     "explain": "ELSE yo'q bo'lsa, CASEning standart natijasi NULL bo'ladi."
    },
    {
     "q": "Shartli agregatsiyada COUNT(CASE WHEN ... THEN 1 END) nega ishlaydi?",
     "options": [
      "CASE avtomatik GROUP BY qiladi",
      "CASE barcha qatorlarni o'chiradi",
      "COUNT faqat 1 qiymatini biladi",
      "Shart bajarilmagan qatorlarda NULL hosil bo'lib, COUNT uni sanamaydi"
     ],
     "answer": 3,
     "explain": "Shart bajarilmaganda CASE NULL qaytaradi, COUNT esa NULL'larni e'tiborsiz qoldiradi."
    }
   ]
  },
  {
   "id": 17,
   "title": "UNION, INTERSECT va EXCEPT: to'plam amallari",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "To'plam amallari ikki yoki undan ortiq <code>SELECT</code> natijasini vertikal ravishda birlashtiradi. Bu <code>JOIN</code>dan farq qiladi: JOIN ustunlarni yonma-yon qo'shsa, to'plam amallari qatorlarni ustiga qo'yadi. Barcha SELECT'lar bir xil sondagi ustun va mos turdagi qiymatlarni qaytarishi kerak."
    },
    {
     "type": "code",
     "title": "union.sql",
     "code": "SELECT ism\nFROM talabalar\nWHERE shahar = 'Toshkent'\nUNION\nSELECT ism\nFROM talabalar\nWHERE ball >= 90\nORDER BY ism;",
     "output": "ism\n--------\nAziza\nMalika\nNodira\nOtabek",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>UNION</code> takrorlanuvchi qatorlarni olib tashlaydi va natijani saralash uchun qo'shimcha ish bajaradi. Agar takrorlar muhim bo'lsa yoki tezlik ustuvor bo'lsa, <code>UNION ALL</code> ishlatiladi. Amalda ko'p hollarda dublikatlar bo'lmasligi aniq bo'lsa, <code>UNION ALL</code> afzal."
    },
    {
     "type": "code",
     "title": "union-all.sql",
     "code": "SELECT ism\nFROM talabalar\nWHERE shahar = 'Toshkent'\nUNION ALL\nSELECT ism\nFROM talabalar\nWHERE ball >= 90\nORDER BY ism;",
     "output": "ism\n--------\nAziza\nAziza\nMalika\nNodira\nNodira\nOtabek",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "intersect-except.sql",
     "code": "SELECT ism\nFROM talabalar\nWHERE shahar = 'Toshkent'\nINTERSECT\nSELECT ism\nFROM talabalar\nWHERE ball >= 90\nORDER BY ism;\n\nSELECT ism\nFROM talabalar\nWHERE shahar = 'Toshkent'\nEXCEPT\nSELECT ism\nFROM talabalar\nWHERE ball >= 90\nORDER BY ism;",
     "output": "INTERSECT natijasi\n------------------\nAziza\nNodira\n\nEXCEPT natijasi\n---------------\nOtabek",
     "outputLabel": "Ikki natija"
    },
    {
     "type": "table",
     "head": [
      "Amal",
      "Ma'nosi",
      "Takrorlar"
     ],
     "rows": [
      [
       "<code>UNION</code>",
       "Ikkala natijadagi barcha qatorlar",
       "Olib tashlanadi"
      ],
      [
       "<code>UNION ALL</code>",
       "Ikkala natijadagi barcha qatorlar",
       "Saqlanadi"
      ],
      [
       "<code>INTERSECT</code>",
       "Ikkala natijada ham bor qatorlar",
       "Olib tashlanadi"
      ],
      [
       "<code>EXCEPT</code>",
       "Birinchi natijada bor, ikkinchisida yo'q qatorlar",
       "Olib tashlanadi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Dialekt eslatmalari",
     "html": "Standart SQL'da <code>EXCEPT</code> deb ataladigan amal Oracle'da <code>MINUS</code> bo'ladi. MySQL 8.0.31 gacha <code>INTERSECT</code> va <code>EXCEPT</code>ni qo'llab-quvvatlamagan; eski versiyalarda ularni <code>JOIN</code> yoki <code>NOT EXISTS</code> bilan ifodalash kerak. <code>ORDER BY</code> faqat oxirgi SELECT'dan keyin yoziladi va butun birlashgan natijaga ta'sir qiladi."
    }
   ],
   "quiz": [
    {
     "q": "UNION va UNION ALL orasidagi asosiy farq nima?",
     "options": [
      "UNION faqat ikki jadval bilan ishlaydi",
      "UNION takroriy qatorlarni olib tashlaydi, UNION ALL saqlaydi",
      "UNION ALL natijani saralamaydi, UNION saralaydi",
      "UNION faqat sonlar bilan ishlaydi"
     ],
     "answer": 1,
     "explain": "UNION dublikatlarni tozalaydi; UNION ALL barcha qatorlarni, shu jumladan takrorlarni qaytaradi."
    },
    {
     "q": "INTERSECT qanday qatorlarni qaytaradi?",
     "options": [
      "Faqat birinchi so'rovda uchraydigan qatorlarni",
      "Faqat ikkinchi so'rovda uchraydigan qatorlarni",
      "Ikkala so'rov natijasida ham mavjud qatorlarni",
      "Barcha qatorlarni ikki marta"
     ],
     "answer": 2,
     "explain": "INTERSECT ikki natijaning umumiy qismini, ya'ni kesishmasini qaytaradi."
    },
    {
     "q": "Birinchi so'rovda bor, ikkinchisida yo'q qatorlarni qaysi amal beradi?",
     "options": [
      "EXCEPT",
      "UNION ALL",
      "INTERSECT",
      "CROSS JOIN"
     ],
     "answer": 0,
     "explain": "EXCEPT birinchi natijadan ikkinchi natijada uchraydigan qatorlarni ayiradi."
    }
   ]
  },
  {
   "id": 18,
   "title": "Skalar subquery: bitta qiymat qaytaruvchi so'rov",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Subquery</b> — boshqa so'rov ichida yozilgan so'rov. <b>Skalar subquery</b> ko'pi bilan bitta qator va bitta ustun qaytaradi; shuning uchun uning natijasini oddiy qiymat kabi ishlatish mumkin. U <code>WHERE</code>, <code>SELECT</code>, <code>HAVING</code> va hatto <code>ORDER BY</code> ichida uchrashi mumkin."
    },
    {
     "type": "table",
     "head": [
      "Joylashuvi",
      "Misol",
      "Natija"
     ],
     "rows": [
      [
       "WHERE shartida",
       "<code>WHERE ball > (SELECT AVG(ball) FROM talabalar)</code>",
       "O'rtachadan yuqori talabalar"
      ],
      [
       "SELECT ichida",
       "<code>SELECT (SELECT MAX(ball) FROM talabalar) AS eng_yuqori</code>",
       "Har bir qatorda bir xil qiymat"
      ],
      [
       "HAVING ichida",
       "<code>HAVING AVG(ball) > (SELECT AVG(ball) FROM talabalar)</code>",
       "Guruhlarni umumiy o'rtacha bilan taqqoslash"
      ],
      [
       "Qiymat sifatida",
       "<code>SET ball = (SELECT ...)</code>",
       "Boshqa jadvaldan hisoblangan qiymat"
      ]
     ]
    },
    {
     "type": "code",
     "title": "ortachadan-yuqori.sql",
     "code": "SELECT ism, ball\nFROM talabalar\nWHERE ball > (SELECT AVG(ball) FROM talabalar)\nORDER BY ball DESC;",
     "output": "ism     | ball\n--------+------\nNodira  |   95\nAziza   |   92\nMalika  |   90\nDilnoza |   88",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Ichki so'rov avval bajariladi va bitta qiymat qaytaradi; tashqi so'rov shu qiymatni oddiy son kabi ishlatadi. Bu yerda <code>AVG(ball)</code> 82.75 ga teng, shuning uchun 82.75 dan katta balli talabalar tanlanadi. Skalar subquery natijasi <code>NULL</code> bo'lsa, tashqi taqqoslash ham <code>UNKNOWN</code> bo'lib, qatorlar tanlanmaydi."
    },
    {
     "type": "code",
     "title": "farqni-hisoblash.sql",
     "code": "SELECT ism,\n       ball,\n       (SELECT MAX(ball) FROM talabalar) AS eng_yuqori,\n       (SELECT MAX(ball) FROM talabalar) - ball AS farq\nFROM talabalar\nWHERE id <= 3\nORDER BY id;",
     "output": "ism     | ball | eng_yuqori | farq\n--------+------+------------+------\nAziza   |   92 |         95 |    3\nBek     |   78 |         95 |   17\nDilnoza |   88 |         95 |    7",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Bir qatordan ko'p bo'lsa",
     "html": "Skalar subquery bir nechta qator qaytarsa, baza <code>more than one row returned by a subquery used as an expression</code> xatosini beradi. Bunga yo'l qo'ymaslik uchun <code>MAX</code>, <code>MIN</code> yoki <code>LIMIT 1</code> bilan natijani kafolatlash kerak. Korrelyatsion bo'lmagan skalar subquery odatda bir marta hisoblanadi, lekin ba'zi optimizatorlar uni qayta baholashi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "Skalar subquery ko'pi bilan nechta qiymat qaytarishi kerak?",
     "options": [
      "Faqat sonlar ustuni",
      "Cheksiz",
      "Bitta qator va bitta ustun",
      "Ikki ustun"
     ],
     "answer": 2,
     "explain": "Skalar subquery yagona qiymat sifatida ishlatiladi, shuning uchun natija bir qator va bir ustundan oshmasligi kerak."
    },
    {
     "q": "Skalar subquery hech qanday qator topmasa, ifoda qiymati nega teng bo'ladi?",
     "options": [
      "Bo'sh satr",
      "Xato",
      "0",
      "NULL"
     ],
     "answer": 3,
     "explain": "Nol qator natijasi NULL sifatida qaytadi; bu xato emas."
    },
    {
     "q": "WHERE ball > (SELECT AVG(ball) FROM talabalar) so'rovida ichki so'rov odatda necha marta bajariladi?",
     "options": [
      "Har bir talaba uchun bir marta",
      "Faqat bir marta, chunki u tashqi so'rovga bog'liq emas",
      "Har bir ustun uchun",
      "Umuman bajarilmaydi"
     ],
     "answer": 1,
     "explain": "Korrelyatsion bo'lmagan skalar subquery bir marta hisoblanib, natijasi qayta ishlatiladi."
    }
   ]
  },
  {
   "id": 19,
   "title": "Korrelyatsion subquery: tashqi qatorga bog'langan so'rov",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Korrelyatsion subquery</b> tashqi so'rovning ustunlariga murojaat qiladi. Shuning uchun u tashqi so'rovning har bir qatori uchun qayta bajarilishi mumkin. Bu kuchli, lekin ehtiyotsiz ishlatilsa sekin vosita. Uni ko'pincha <code>JOIN</code> yoki oynali funksiya bilan almashtirish mumkin."
    },
    {
     "type": "code",
     "title": "kurslar-boyicha-sanoq.sql",
     "code": "SELECT k.nom,\n       (SELECT COUNT(*)\n        FROM talabalar t\n        WHERE t.kurs_id = k.id) AS talabalar_soni\nFROM kurslar k\nORDER BY k.id;",
     "output": "nom        | talabalar_soni\n-----------+---------------\nPython     |             4\nJavaScript |             3\nSQL        |             0",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Bu yerda <code>t.kurs_id = k.id</code> sharti ichki so'rovni tashqi so'rovning joriy kursiga bog'laydi. Python kursi uchun 4, JavaScript uchun 3, SQL uchun 0 talaba sanaladi. <code>COUNT(*)</code> mos qator bo'lmasa ham 0 qaytaradi, shuning uchun <code>LEFT JOIN</code>siz ham kurslar ro'yxati to'liq chiqadi."
    },
    {
     "type": "code",
     "title": "oz-kursida-yaxshi.sql",
     "code": "SELECT t.ism, t.kurs_id, t.ball\nFROM talabalar t\nWHERE t.ball > (\n    SELECT AVG(t2.ball)\n    FROM talabalar t2\n    WHERE t2.kurs_id = t.kurs_id\n)\nORDER BY t.kurs_id, t.ball DESC;",
     "output": "ism     | kurs_id | ball\n--------+---------+------\nNodira  |       1 |   95\nAziza   |       1 |   92\nMalika  |       1 |   90\nDilnoza |       2 |   88\nSardor  |       2 |   81",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Yondashuv",
      "Qachon qulay",
      "Ehtiyot qismi"
     ],
     "rows": [
      [
       "Korrelyatsion subquery",
       "Har bir guruh uchun kichik hisob-kitob",
       "Katta jadvalda sekin bo'lishi mumkin"
      ],
      [
       "JOIN + GROUP BY",
       "Guruhlar bo'yicha agregat",
       "Bir nechta jadval bo'lsa murakkablashadi"
      ],
      [
       "Oynali funksiya",
       "Har bir qatorni guruh o'rtachasi bilan taqqoslash",
       "Baza uni qo'llab-quvvatlashi kerak"
      ],
      [
       "EXISTS",
       "Faqat mavjudlikni tekshirish",
       "Ustun qiymatlari kerak bo'lsa mos emas"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Unumdorlikni o'lchang",
     "html": "Korrelyatsion subquery 8 qatorda ajoyib ishlaydi, million qatorda esa har bir qator uchun alohida qidiruv qimmatga tushishi mumkin. <code>EXPLAIN ANALYZE</code> bilan rejani ko'ring; ko'pincha <code>JOIN</code> yoki <code>AVG(...) OVER (PARTITION BY kurs_id)</code> yaxshiroq. Aliaslarni majburiy ishlating: <code>t</code> va <code>t2</code> bo'lmasa, qaysi jadval nazarda tutilgani noaniq bo'ladi."
    }
   ],
   "quiz": [
    {
     "q": "Korrelyatsion subqueryni qanday aniqlash mumkin?",
     "options": [
      "U faqat FROM ichida yoziladi",
      "U GROUP BY talab qiladi",
      "U har doim bitta ustun qaytaradi",
      "U tashqi so'rovning ustunlariga murojaat qiladi"
     ],
     "answer": 3,
     "explain": "Tashqi so'rov ustuniga bog'lanish korrelyatsiyaning asosiy belgisidir."
    },
    {
     "q": "Korrelyatsion subquery odatda qanday bajariladi?",
     "options": [
      "Tashqi so'rovning har bir qatori uchun qayta baholanishi mumkin",
      "Hech qachon bajarilmaydi",
      "Faqat indeks bo'lsa bajariladi",
      "Faqat bir marta, boshida"
     ],
     "answer": 0,
     "explain": "Ichki so'rov tashqi qator qiymatlariga bog'liq bo'lgani uchun har bir qator uchun qayta hisoblanishi mumkin."
    },
    {
     "q": "Har bir talabani o'z kursining o'rtachasi bilan taqqoslash uchun qaysi yondashuv eng tabiiy?",
     "options": [
      "Faqat UNION ALL",
      "Faqat DISTINCT",
      "Korrelyatsion subquery yoki PARTITION BY bilan oynali funksiya",
      "Faqat CROSS JOIN"
     ],
     "answer": 2,
     "explain": "Guruh ichidagi taqqoslash uchun korrelyatsiya yoki oyna funksiyasi mos keladi."
    }
   ]
  },
  {
   "id": 20,
   "title": "EXISTS va NOT EXISTS: mavjudlikni tekshirish",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "<code>EXISTS</code> ichki so'rov natijasida kamida bitta qator bor-yo'qligini tekshiradi va <code>TRUE</code> yoki <code>FALSE</code> qaytaradi. U qiymatlarni solishtirmaydi, shuning uchun ichki so'rovda <code>SELECT 1</code> yozish odatiy hol. Baza birinchi mos qatorni topishi bilan qidiruvni to'xtatishi mumkin."
    },
    {
     "type": "code",
     "title": "talabasi-bor-kurslar.sql",
     "code": "SELECT k.nom\nFROM kurslar k\nWHERE EXISTS (\n    SELECT 1\n    FROM talabalar t\n    WHERE t.kurs_id = k.id\n)\nORDER BY k.nom;",
     "output": "nom\n-----------\nJavaScript\nPython",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>NOT EXISTS</code> esa ichki so'rov hech qanday qator topmasa <code>TRUE</code> bo'ladi. Bu — «bo'sh» yoki «bog'lanmagan» yozuvlarni topishning xavfsiz usuli. <code>NOT IN</code>dan farqli, ichki so'rovda NULL uchrasa ham mantiq buzilmaydi."
    },
    {
     "type": "code",
     "title": "talabasiz-kurslar.sql",
     "code": "SELECT k.nom\nFROM kurslar k\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM talabalar t\n    WHERE t.kurs_id = k.id\n)\nORDER BY k.nom;",
     "output": "nom\n-----\nSQL",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Vosita",
      "Nima qaytaradi",
      "NULL bilan xavfi"
     ],
     "rows": [
      [
       "<code>EXISTS</code>",
       "Mavjudlik bo'yicha TRUE/FALSE",
       "Yo'q"
      ],
      [
       "<code>NOT EXISTS</code>",
       "Mavjud emasligi bo'yicha TRUE/FALSE",
       "Yo'q"
      ],
      [
       "<code>IN</code>",
       "Qiymat ro'yxatda borligi",
       "Ro'yxatda NULL bo'lsa UNKNOWN"
      ],
      [
       "<code>NOT IN</code>",
       "Qiymat ro'yxatda yo'qligi",
       "NULL bo'lsa natija bo'sh bo'lishi mumkin"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "EXISTS ichida nima tanlanadi?",
     "html": "<code>EXISTS</code> uchun ustunlar ro'yxati muhim emas; <code>SELECT 1</code>, <code>SELECT *</code> yoki <code>SELECT NULL</code> bir xil mantiqiy natija beradi. Muhimi — <code>WHERE</code> sharti. Ba'zi bazalar <code>EXISTS</code>ni yarim birlashuv (semi-join) sifatida optimallashtiradi, shuning uchun u katta jadvallarda <code>IN</code>dan tezroq bo'lishi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "EXISTS ichidagi so'rovda SELECT 1 yozishning ma'nosi nima?",
     "options": [
      "Qator bor-yo'qligi muhim, tanlangan ustun muhim emas",
      "So'rovni tezlashtiradigan maxsus kalit so'z",
      "Natijani cheklaydi",
      "Faqat 1 qiymati saqlanadi"
     ],
     "answer": 0,
     "explain": "EXISTS faqat qator mavjudligini tekshiradi; qaysi ustun tanlangani ahamiyatsiz."
    },
    {
     "q": "Qaysi holatda NOT EXISTS NOT IN'ga qaraganda xavfsizroq?",
     "options": [
      "Har doim, chunki ular bir xil",
      "Ichki so'rovda NULL qiymat bo'lishi mumkin bo'lsa",
      "Jadvalda indeks bo'lmasa",
      "Faqat sonlar bilan ishlaganda"
     ],
     "answer": 1,
     "explain": "NOT IN ro'yxatida NULL bo'lsa natija UNKNOWN bo'lib qolishi mumkin; NOT EXISTS bunday muammoga uchramaydi."
    },
    {
     "q": "Talabasi yo'q kurslarni topish uchun qaysi so'rov mos?",
     "options": [
      "SELECT * FROM kurslar CROSS JOIN talabalar",
      "SELECT DISTINCT kurs_id FROM talabalar",
      "SELECT * FROM kurslar WHERE EXISTS (SELECT 1 FROM talabalar t WHERE t.kurs_id = kurslar.id)",
      "SELECT * FROM kurslar WHERE NOT EXISTS (SELECT 1 FROM talabalar t WHERE t.kurs_id = kurslar.id)"
     ],
     "answer": 3,
     "explain": "NOT EXISTS ichki so'rovda mos talaba topilmasa kursni qaytaradi."
    }
   ]
  },
  {
   "id": 21,
   "title": "Derived table: FROM ichidagi so'rov",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Ba'zan avval agregat hisoblab, keyin uning natijasini filtrlash kerak bo'ladi. Buning bir usuli — <code>FROM</code> ichida so'rov yozish. Bunday vaqtinchalik natija <b>derived table</b> yoki <b>inline view</b> deb ataladi. Uning har bir ustuniga tashqi so'rovdan murojaat qilish mumkin."
    },
    {
     "type": "code",
     "title": "ortachasi-yuqori-kurslar.sql",
     "code": "SELECT x.kurs_id,\n       x.soni,\n       ROUND(x.ortacha, 1) AS ortacha\nFROM (\n    SELECT kurs_id,\n           COUNT(*) AS soni,\n           AVG(ball) AS ortacha\n    FROM talabalar\n    GROUP BY kurs_id\n) AS x\nWHERE x.ortacha > 80\nORDER BY x.ortacha DESC;",
     "output": "kurs_id | soni | ortacha\n--------+------+---------\n      1 |    4 |    88.8\n      2 |    3 |    80.7",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Derived table'ga <b>alias</b> berish majburiy: <code>AS x</code> bo'lmasa, PostgreSQL va MySQL xato beradi. Ichki so'rov avval bajariladi, natijasi oddiy jadval kabi ko'riladi. Tashqi so'rovda <code>WHERE</code>, <code>JOIN</code>, <code>ORDER BY</code> va boshqa amallarni qo'llash mumkin."
    },
    {
     "type": "code",
     "title": "derived-join.sql",
     "code": "SELECT k.nom, x.soni\nFROM (\n    SELECT kurs_id, COUNT(*) AS soni\n    FROM talabalar\n    WHERE kurs_id IS NOT NULL\n    GROUP BY kurs_id\n) AS x\nJOIN kurslar k ON k.id = x.kurs_id\nORDER BY x.soni DESC, k.nom;",
     "output": "nom        | soni\n-----------+------\nPython     |    4\nJavaScript |    3",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Tur",
      "Qayerda yoziladi",
      "Natija"
     ],
     "rows": [
      [
       "Skalar subquery",
       "WHERE yoki SELECT ichida",
       "Bitta qiymat"
      ],
      [
       "Derived table",
       "FROM ichida",
       "Jadval ko'rinishidagi natija"
      ],
      [
       "Korrelyatsion subquery",
       "WHERE ichida, tashqi ustunga bog'lanadi",
       "Har bir qator uchun qiymat"
      ],
      [
       "CTE",
       "WITH bilan so'rov boshida",
       "Nomlangan vaqtinchalik natija"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Optimizator nima qiladi?",
     "html": "Ko'p bazalar derived table'ni tashqi so'rov bilan birlashtirib yuboradi (merge). Agar ichki so'rovda <code>LIMIT</code>, <code>DISTINCT</code> yoki agregat bo'lsa, u alohida bajarilishi mumkin. Katta hajmda <code>EXPLAIN</code> orqali qaysi yo'l tanlanganini tekshiring; ba'zan CTE yoki oynali funksiya yaxshiroq o'qiladi."
    }
   ],
   "quiz": [
    {
     "q": "FROM ichidagi derived table'ga nima berish majburiy?",
     "options": [
      "ORDER BY",
      "Alias",
      "PRIMARY KEY",
      "INDEX"
     ],
     "answer": 1,
     "explain": "Derived table tashqi so'rovda nom bilan murojaat qilinishi uchun alias talab qiladi."
    },
    {
     "q": "Derived table natijasi qanday ko'rinishda bo'ladi?",
     "options": [
      "Faqat JSON",
      "Faqat bitta son",
      "Vaqtinchalik jadval ko'rinishida",
      "Har doim matn"
     ],
     "answer": 2,
     "explain": "FROM ichidagi so'rov qator va ustunlardan iborat vaqtinchalik jadval qaytaradi."
    },
    {
     "q": "Agregat natijasini filtrlamoqchi bo'lsangiz, qaysi joyda shart yozish mumkin?",
     "options": [
      "Derived table ustiga tashqi WHERE yoki HAVING bilan",
      "Faqat ORDER BY ichida",
      "Faqat LIMIT bilan",
      "Faqat WHERE ichida, GROUP BY'dan oldin"
     ],
     "answer": 0,
     "explain": "Agregatdan keyingi filtrlash uchun HAVING yoki derived table ustidagi tashqi WHERE ishlatiladi."
    }
   ]
  },
  {
   "id": 22,
   "title": "CTE: WITH bilan so'rovni bo'laklarga ajratish",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "<b>CTE</b> (Common Table Expression) — <code>WITH</code> bilan e'lon qilinadigan nomlangan vaqtinchalik natija. U murakkab so'rovni o'qiladigan bo'laklarga ajratadi va bir natijani bir necha joyda ishlatish imkonini beradi. CTE faqat o'zidan keyingi bitta <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code> yoki <code>DELETE</code> davomida mavjud bo'ladi."
    },
    {
     "type": "code",
     "title": "kurs-statistikasi.sql",
     "code": "WITH kurs_stat AS (\n    SELECT k.id,\n           k.nom,\n           COUNT(t.id) AS soni,\n           AVG(t.ball) AS ortacha\n    FROM kurslar k\n    LEFT JOIN talabalar t ON t.kurs_id = k.id\n    GROUP BY k.id, k.nom\n)\nSELECT nom,\n       soni,\n       COALESCE(ROUND(ortacha, 1), 0) AS ortacha\nFROM kurs_stat\nORDER BY soni DESC, nom;",
     "output": "nom        | soni | ortacha\n-----------+------+---------\nPython     |    4 |    88.8\nJavaScript |    3 |    80.7\nSQL        |    0 |       0",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Bir nechta CTE'ni vergul bilan ketma-ket e'lon qilish mumkin. Keyingi CTE oldingisiga murojaat qila oladi, lekin oldingisi keyingisini ko'rmaydi. Bu zanjir hisobotlarni qadam-baqadam qurish uchun juda qulay: avval xom agregat, keyin filtr, keyin yakuniy tanlov."
    },
    {
     "type": "code",
     "title": "kop-cte.sql",
     "code": "WITH kurs_stat AS (\n    SELECT k.id,\n           k.nom,\n           COUNT(t.id) AS soni,\n           AVG(t.ball) AS ortacha\n    FROM kurslar k\n    LEFT JOIN talabalar t ON t.kurs_id = k.id\n    GROUP BY k.id, k.nom\n),\nyaxshi_kurslar AS (\n    SELECT nom, soni, ortacha\n    FROM kurs_stat\n    WHERE soni >= 3\n)\nSELECT nom, soni, ROUND(ortacha, 1) AS ortacha\nFROM yaxshi_kurslar\nORDER BY ortacha DESC;",
     "output": "nom        | soni | ortacha\n-----------+------+---------\nPython     |    4 |    88.8\nJavaScript |    3 |    80.7",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Xususiyat",
      "Derived table",
      "CTE"
     ],
     "rows": [
      [
       "Joylashuvi",
       "FROM ichida",
       "So'rov boshida, WITH bilan"
      ],
      [
       "Nomi",
       "Har doim alias kerak",
       "WITH nomi bilan"
      ],
      [
       "Qayta ishlatish",
       "Qiyin",
       "Bir so'rovda bir necha marta"
      ],
      [
       "O'qilishi",
       "Chuqur ichma-ich",
       "Yuqoridan pastga"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Materializatsiya farqi",
     "html": "PostgreSQL 12'dan boshlab CTE odatda inline qilinadi, agar u bir necha marta ishlatilmasa yoki <code>MATERIALIZED</code> so'ralmasa. Oldingi versiyalarda CTE har doim alohida hisoblanardi. MySQL 8 va SQLite ham CTE'ni qo'llab-quvvatlaydi. CTE nomini jadval nomi bilan bir xil qilmang — chalkashlik keltiradi."
    }
   ],
   "quiz": [
    {
     "q": "CTE qaysi kalit so'z bilan boshlanadi?",
     "options": [
      "HAVING",
      "CREATE VIEW",
      "WITH",
      "FROM"
     ],
     "answer": 2,
     "explain": "CTE WITH nom AS (so'rov) shaklida e'lon qilinadi."
    },
    {
     "q": "Bitta so'rovda bir nechta CTE e'lon qilinsa, keyingi CTE nimaga murojaat qilishi mumkin?",
     "options": [
      "Faqat o'zidan keyingi CTE'larga",
      "Hech biriga",
      "Faqat tizim jadvallariga",
      "Faqat o'zidan oldin e'lon qilingan CTE'larga"
     ],
     "answer": 3,
     "explain": "CTE'lar ketma-ket ko'rinadi; keyingisi avvalgilariga murojaat qiladi, teskarisi emas."
    },
    {
     "q": "CTE natijasi qancha vaqt saqlanadi?",
     "options": [
      "Baza o'chirilguncha",
      "Faqat o'zidan keyingi bitta so'rov davomida",
      "Bir kunga",
      "Tranzaksiya tugagach ham doim"
     ],
     "answer": 1,
     "explain": "CTE vaqtinchalik; u faqat bog'langan bitta so'rov bajarilishi davomida mavjud."
    }
   ]
  },
  {
   "id": 23,
   "title": "Rekursiv CTE: daraxt va ketma-ketliklar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Rekursiv CTE o'ziga o'zi murojaat qiladi. U ierarxiyalarni (bo'limlar, kategoriyalar, izohlar daraxti) va sonlar ketma-ketligini yuritish uchun ishlatiladi. So'rov ikki qismdan iborat: <b>anchor</b> (boshlang'ich qator) va <b>recursive member</b> (oldingi natijaga tayanadigan qatorlar), ular <code>UNION ALL</code> bilan ulanadi."
    },
    {
     "type": "code",
     "title": "mavzular-daraxti.sql",
     "code": "WITH RECURSIVE daraxt AS (\n    SELECT id, nom, ota_id,\n           1 AS daraja,\n           nom AS yol\n    FROM mavzular\n    WHERE ota_id IS NULL\n    UNION ALL\n    SELECT m.id, m.nom, m.ota_id,\n           d.daraja + 1,\n           d.yol || ' > ' || m.nom\n    FROM mavzular m\n    JOIN daraxt d ON m.ota_id = d.id\n)\nSELECT daraja, yol\nFROM daraxt\nORDER BY yol;",
     "output": "daraja | yol\n-------+------------------------------------\n1      | SQL\n2      | SQL > CTE\n2      | SQL > JOIN\n3      | SQL > JOIN > INNER JOIN\n3      | SQL > JOIN > LEFT JOIN\n2      | SQL > Oyna funksiyalari\n3      | SQL > Oyna funksiyalari > RANK\n3      | SQL > Oyna funksiyalari > ROW_NUMBER\n2      | SQL > Rekursiv CTE\n2      | SQL > SELECT\n2      | SQL > WHERE",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Birinchi qism 1-darajadagi ildizni oladi. Ikkinchi qism har safar oldingi natijadagi qatorlarga bolalarni qo'shadi va <code>daraja</code>ni bittaga oshiradi. Qachonki yangi bola topilmasa, rekursiya o'z-o'zidan to'xtaydi. <b>To'xtash shartini</b> noto'g'ri yozish cheksiz siklga olib kelishi mumkin."
    },
    {
     "type": "code",
     "title": "sonlar-ketma-ketligi.sql",
     "code": "WITH RECURSIVE sonlar(n) AS (\n    SELECT 1\n    UNION ALL\n    SELECT n + 1\n    FROM sonlar\n    WHERE n < 5\n)\nSELECT n, n * n AS kvadrat\nFROM sonlar;",
     "output": "n | kvadrat\n--+--------\n1 |       1\n2 |       4\n3 |       9\n4 |      16\n5 |      25",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Qism",
      "Vazifasi",
      "Misol"
     ],
     "rows": [
      [
       "Anchor",
       "Boshlang'ich qatorlarni beradi",
       "<code>WHERE ota_id IS NULL</code>"
      ],
      [
       "UNION ALL",
       "Anchor va rekursiv qismni ulaydi",
       "Standart shakl"
      ],
      [
       "Recursive member",
       "Oldingi natijaga tayanadi",
       "<code>JOIN daraxt d ON m.ota_id = d.id</code>"
      ],
      [
       "To'xtash sharti",
       "Siklning tugashini kafolatlaydi",
       "<code>WHERE n < 5</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Dialekt va cheksiz sikl",
     "html": "PostgreSQL, SQLite va MySQL 8 <code>WITH RECURSIVE</code> yozuvini talab qiladi; SQL Server'da <code>RECURSIVE</code> so'zi yozilmaydi. MySQL'da <code>cte_max_recursion_depth</code> chegarasi bor. Agar ma'lumotda sikl bo'lsa, cheksiz takrorlanishning oldini olish uchun yo'l yoki tashrif buyurilgan ID'lar massivini kuzatib boring. Matn birlashtirish uchun PostgreSQL/SQLite'da <code>||</code>, MySQL'da <code>CONCAT</code> ishlatiladi."
    }
   ],
   "quiz": [
    {
     "q": "Rekursiv CTE'ning anchor qismi nima qiladi?",
     "options": [
      "Har doim barcha jadvalni o'chiradi",
      "Faqat indeks yaratadi",
      "Natijani saralaydi",
      "Boshlang'ich qatorlarni qaytaradi"
     ],
     "answer": 3,
     "explain": "Anchor rekursiyaning birinchi qadamini, ya'ni boshlang'ich to'plamni beradi."
    },
    {
     "q": "Rekursiv CTE qanday to'xtaydi?",
     "options": [
      "Rekursiv qism yangi qator qaytarmaganda yoki to'xtash sharti bajarilganda",
      "UNION ALL yozilganda",
      "ORDER BY bajarilganda",
      "Har doim 10 qatordan keyin avtomatik"
     ],
     "answer": 0,
     "explain": "Rekursiya recursive member bo'sh natija qaytarganda yoki WHERE sharti to'xtaganda tugaydi."
    },
    {
     "q": "Sonlar ketma-ketligini yasashda qaysi to'xtash sharti to'g'ri?",
     "options": [
      "To'xtash sharti umuman kerak emas",
      "WHERE n > 5 cheksiz o'sishda",
      "WHERE n < 5 rekursiv qismda",
      "WHERE n = NULL"
     ],
     "answer": 2,
     "explain": "Rekursiv qismda n < 5 sharti 5 dan keyin yangi qator yaratilishini to'xtatadi."
    }
   ]
  },
  {
   "id": 24,
   "title": "Oynali funksiyalar: OVER va PARTITION BY",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Oynali funksiya</b> har bir qator uchun qo'shni qatorlar to'plami (oyna) bo'yicha hisoblaydi, lekin qatorlar sonini kamaytirmaydi. <code>GROUP BY</code> har guruhni bitta qatorga siqadi; oyna esa har bir qatorni saqlab, unga guruh statistikasini qo'shadi. Sintaksis: <code>funksiya(...) OVER (PARTITION BY ... ORDER BY ...)</code>."
    },
    {
     "type": "code",
     "title": "kurs-ortachasi.sql",
     "code": "SELECT ism,\n       kurs_id,\n       ball,\n       ROUND(AVG(ball) OVER (PARTITION BY kurs_id), 1) AS kurs_ortachasi,\n       ROUND(ball - AVG(ball) OVER (PARTITION BY kurs_id), 1) AS farq\nFROM talabalar\nWHERE kurs_id IS NOT NULL\nORDER BY kurs_id, ball DESC;",
     "output": "ism     | kurs_id | ball | kurs_ortachasi | farq\n--------+---------+------+----------------+------\nNodira  |       1 |   95 |           88.8 |  6.3\nAziza   |       1 |   92 |           88.8 |  3.3\nMalika  |       1 |   90 |           88.8 |  1.3\nBek     |       1 |   78 |           88.8 | -10.8\nDilnoza |       2 |   88 |           80.7 |  7.3\nSardor  |       2 |   81 |           80.7 |  0.3\nOtabek  |       2 |   73 |           80.7 | -7.7",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>PARTITION BY</code> oynani guruhlarga bo'ladi, lekin qatorlarni birlashtirmaydi. <code>PARTITION BY</code> yozilmasa, butun natija bitta oyna hisoblanadi. <code>ORDER BY</code> oyna ichidagi tartibni belgilaydi va running total, LAG/LEAD kabi funksiyalar uchun muhim."
    },
    {
     "type": "code",
     "title": "guruh-sanoq.sql",
     "code": "SELECT kurs_id,\n       ism,\n       ball,\n       COUNT(*) OVER (PARTITION BY kurs_id) AS guruhdagi,\n       SUM(ball) OVER (PARTITION BY kurs_id) AS guruh_summasi\nFROM talabalar\nWHERE kurs_id IS NOT NULL\nORDER BY kurs_id, ball DESC;",
     "output": "kurs_id | ism     | ball | guruhdagi | guruh_summasi\n--------+---------+------+-----------+---------------\n      1 | Nodira  |   95 |         4 |           355\n      1 | Aziza   |   92 |         4 |           355\n      1 | Malika  |   90 |         4 |           355\n      1 | Bek     |   78 |         4 |           355\n      2 | Dilnoza |   88 |         3 |           242\n      2 | Sardor  |   81 |         3 |           242\n      2 | Otabek  |   73 |         3 |           242",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Tushuncha",
      "Vazifasi",
      "Misol"
     ],
     "rows": [
      [
       "<code>OVER()</code>",
       "Oynani belgilaydi",
       "Barcha qatorlar bo'yicha"
      ],
      [
       "<code>PARTITION BY</code>",
       "Oynani guruhlarga bo'ladi",
       "Har kurs alohida"
      ],
      [
       "<code>ORDER BY</code>",
       "Oyna ichida tartib beradi",
       "Ball bo'yicha kamayish"
      ],
      [
       "Frame",
       "Oyna ichidagi qatorlar oralig'i",
       "<code>ROWS BETWEEN ...</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "WHERE'da ishlatib bo'lmaydi",
     "html": "Oynali funksiya <code>WHERE</code> ichida ishlatilmaydi, chunki u <code>WHERE</code>dan keyin hisoblanadi. Natijani filtrlash kerak bo'lsa, avval CTE yoki derived table'da oynali ustunni yarating, keyin tashqi so'rovda <code>WHERE</code> qo'llang. PostgreSQL, MySQL 8, SQLite 3.25+ va SQL Server oynali funksiyalarni qo'llab-quvvatlaydi."
    }
   ],
   "quiz": [
    {
     "q": "Oynali funksiya GROUP BY'dan qanday farq qiladi?",
     "options": [
      "Har bir qatorni saqlab, unga guruh hisobini qo'shadi",
      "Faqat sonlar bilan ishlaydi",
      "Indeks yaratadi",
      "Qatorlar sonini kamaytiradi"
     ],
     "answer": 0,
     "explain": "GROUP BY guruhni bitta qatorga siqadi; oyna har bir qatorni saqlaydi."
    },
    {
     "q": "PARTITION BY kurs_id nimani anglatadi?",
     "options": [
      "Natijani kurs_id bo'yicha o'chiradi",
      "Oynani har bir kurs uchun alohida hisoblaydi",
      "Jadvalni ikkiga bo'ladi",
      "Faqat bitta kursni tanlaydi"
     ],
     "answer": 1,
     "explain": "PARTITION BY oynani guruhlarga ajratadi va hisob har bir guruhda qaytadan boshlanadi."
    },
    {
     "q": "Oynali funksiya natijasini WHERE bilan filtrlash uchun nima qilish kerak?",
     "options": [
      "GROUP BY qo'shish",
      "ORDER BY olib tashlash",
      "Uni to'g'ridan-to'g'ri WHERE ichida yozish",
      "CTE yoki derived table ichida hisoblab, tashqi WHERE bilan filtrlash"
     ],
     "answer": 3,
     "explain": "Oynali funksiya WHERE'dan keyin hisoblanadi, shuning uchun avval CTE/derived table kerak."
    }
   ]
  },
  {
   "id": 25,
   "title": "ROW_NUMBER, RANK va DENSE_RANK: o'rinlar",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Reyting yasashda uchta funksiya tez-tez ishlatiladi: <code>ROW_NUMBER</code> har bir qatorga yagona tartib raqam beradi, <code>RANK</code> teng qiymatlarga bir xil o'rin berib, keyingi o'rinlarni tashlab ketadi, <code>DENSE_RANK</code> esa tashlab ketmaydi. Tanlov hisobot talabiga bog'liq."
    },
    {
     "type": "code",
     "title": "orinlar-taqqoslash.sql",
     "code": "WITH natijalar AS (\n    SELECT 'Aziza' AS ism, 90 AS ball\n    UNION ALL SELECT 'Bek', 90\n    UNION ALL SELECT 'Dilnoza', 85\n    UNION ALL SELECT 'Jasur', 85\n    UNION ALL SELECT 'Nodira', 80\n)\nSELECT ism,\n       ball,\n       ROW_NUMBER() OVER (ORDER BY ball DESC, ism) AS rn,\n       RANK() OVER (ORDER BY ball DESC) AS rank,\n       DENSE_RANK() OVER (ORDER BY ball DESC) AS dense\nFROM natijalar\nORDER BY ball DESC, ism;",
     "output": "ism     | ball | rn | rank | dense\n--------+------+----+------+-------\nAziza   |   90 |  1 |    1 |     1\nBek     |   90 |  2 |    1 |     1\nDilnoza |   85 |  3 |    3 |     2\nJasur   |   85 |  4 |    3 |     2\nNodira  |   80 |  5 |    5 |     3",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Teng balli ikki talaba <code>RANK</code>da 1-o'rinni bo'lishadi, keyingi talaba esa 3-o'rindan boshlaydi. <code>DENSE_RANK</code>da keyingi talaba 2-o'rin oladi. <code>ROW_NUMBER</code>da tenglikni buzish uchun qo'shimcha ustun (masalan, <code>ism</code>) qo'shish muhim, aks holda natija har safar boshqacha bo'lishi mumkin."
    },
    {
     "type": "code",
     "title": "har-kursdan-top2.sql",
     "code": "SELECT ism, kurs_id, ball, rn\nFROM (\n    SELECT ism,\n           kurs_id,\n           ball,\n           ROW_NUMBER() OVER (\n               PARTITION BY kurs_id\n               ORDER BY ball DESC, ism\n           ) AS rn\n    FROM talabalar\n    WHERE kurs_id IS NOT NULL\n) AS x\nWHERE rn <= 2\nORDER BY kurs_id, rn;",
     "output": "ism     | kurs_id | ball | rn\n--------+---------+------+----\nNodira  |       1 |   95 |  1\nAziza   |       1 |   92 |  2\nDilnoza |       2 |   88 |  1\nSardor  |       2 |   81 |  2",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Funksiya",
      "Teng qiymatlarda",
      "Keyingi o'rin"
     ],
     "rows": [
      [
       "<code>ROW_NUMBER()</code>",
       "Har xil raqam beradi",
       "1, 2, 3, 4"
      ],
      [
       "<code>RANK()</code>",
       "Bir xil o'rin beradi",
       "1, 1, 3, 3, 5"
      ],
      [
       "<code>DENSE_RANK()</code>",
       "Bir xil o'rin beradi",
       "1, 1, 2, 2, 3"
      ],
      [
       "<code>NTILE(n)</code>",
       "Qatorlarni chelaklarga bo'ladi",
       "Kvantillar"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Top-N uchun naqsh",
     "html": "«Har guruhdan eng yaxshi N ta» masalasining klassik yechimi: ichki so'rovda <code>ROW_NUMBER() OVER (PARTITION BY guruh ORDER BY mezon DESC)</code> hisoblab, tashqi so'rovda <code>rn <= N</code> shartini qo'llash. Teng qiymatlar muhim bo'lsa, <code>RANK</code> yoki <code>DENSE_RANK</code>dan foydalaning, lekin N dan ko'p qator chiqishi mumkinligini yodda tuting."
    }
   ],
   "quiz": [
    {
     "q": "Teng balli qatorlarga har xil, ketma-ket raqam beradigan funksiya qaysi?",
     "options": [
      "DENSE_RANK",
      "ROW_NUMBER",
      "NTILE",
      "RANK"
     ],
     "answer": 1,
     "explain": "ROW_NUMBER har bir qatorga yagona ketma-ket raqam beradi, tenglikni qo'shimcha ustun bilan hal qilish kerak."
    },
    {
     "q": "Ballar 90, 90, 85 bo'lsa, RANK qanday o'rinlar beradi?",
     "options": [
      "1, 2, 3",
      "1, 1, 2",
      "1, 1, 3",
      "2, 2, 3"
     ],
     "answer": 2,
     "explain": "RANK tenglarga 1 beradi va keyingi o'rinni 3 dan davom ettiradi."
    },
    {
     "q": "Har bir kursdan eng yaxshi 2 talabani tanlash uchun qaysi yondashuv mos?",
     "options": [
      "ROW_NUMBER bilan PARTITION BY va tashqi rn <= 2",
      "Faqat LIMIT 2",
      "Faqat DISTINCT",
      "Faqat ORDER BY ball"
     ],
     "answer": 0,
     "explain": "Guruh ichida ROW_NUMBER hisoblab, tashqi so'rovda rn <= 2 filtri qo'llanadi."
    }
   ]
  },
  {
   "id": 26,
   "title": "LAG va LEAD: oldingi va keyingi qator bilan taqqoslash",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "<code>LAG</code> joriy qatordan oldingi qatorning qiymatini, <code>LEAD</code> esa keyingi qatorning qiymatini qaytaradi. Ular o'sish, pasayish va ketma-ket o'zgarishlarni hisoblashda ishlatiladi. Ikkala funksiya ham <code>OVER</code> ichida <code>ORDER BY</code> talab qiladi."
    },
    {
     "type": "code",
     "title": "ball-farqi.sql",
     "code": "SELECT ism,\n       kurs_id,\n       ball,\n       LAG(ball) OVER (PARTITION BY kurs_id ORDER BY ball DESC) AS oldingi,\n       LEAD(ball) OVER (PARTITION BY kurs_id ORDER BY ball DESC) AS keyingi,\n       ball - LAG(ball) OVER (PARTITION BY kurs_id ORDER BY ball DESC) AS farq\nFROM talabalar\nWHERE kurs_id IS NOT NULL\nORDER BY kurs_id, ball DESC;",
     "output": "ism     | kurs_id | ball | oldingi | keyingi | farq\n--------+---------+------+---------+---------+------\nNodira  |       1 |   95 |         |      92 |     \nAziza   |       1 |   92 |      95 |      90 |   -3\nMalika  |       1 |   90 |      92 |      78 |   -2\nBek     |       1 |   78 |      90 |         |  -12\nDilnoza |       2 |   88 |         |      81 |     \nSardor  |       2 |   81 |      88 |      73 |   -7\nOtabek  |       2 |   73 |      81 |         |   -8",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Birinchi qatorda <code>LAG</code> uchun oldingi qator yo'q, shuning uchun natija <code>NULL</code>. Buni <code>LAG(ball, 1, 0)</code> kabi uchinchi argument bilan almashtirish mumkin: u holda birinchi qiymat 0 bo'ladi. <code>LEAD</code> oxirgi qatorda xuddi shunday NULL qaytaradi. Offset va default qiymatlarni bilish hisobotlarni to'g'ri shakllantirishga yordam beradi."
    },
    {
     "type": "code",
     "title": "oylik-ozgarish.sql",
     "code": "WITH oylik AS (\n    SELECT CAST(DATE_TRUNC('month', sana) AS DATE) AS oy,\n           COUNT(*) AS soni\n    FROM yozilishlar\n    GROUP BY DATE_TRUNC('month', sana)\n)\nSELECT oy,\n       soni,\n       LAG(soni) OVER (ORDER BY oy) AS oldingi_oy,\n       soni - LAG(soni) OVER (ORDER BY oy) AS ozgarish\nFROM oylik\nORDER BY oy;",
     "output": "oy         | soni | oldingi_oy | ozgarish\n-----------+------+------------+----------\n2025-09-01 |    8 |            |         \n2025-10-01 |    4 |          8 |       -4\n2025-11-01 |    2 |          4 |       -2",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Funksiya",
      "Qaysi qatorni oladi",
      "Odatiy qo'llanish"
     ],
     "rows": [
      [
       "<code>LAG(qiymat)</code>",
       "Oldingi",
       "O'sish/pasayish"
      ],
      [
       "<code>LEAD(qiymat)</code>",
       "Keyingi",
       "Keyingi hodisagacha vaqt"
      ],
      [
       "<code>LAG(qiymat, 2)</code>",
       "Ikki qator oldingi",
       "Silliqlash"
      ],
      [
       "<code>LAG(qiymat, 1, 0)</code>",
       "Oldingi yoki 0",
       "NULL o'rniga standart qiymat"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "PARTITION BY ni unutmang",
     "html": "Agar <code>PARTITION BY kurs_id</code> yozilmasa, <code>LAG</code> butun natija bo'ylab oldingi qatorni oladi va kurs chegarasida noto'g'ri taqqoslash yuz beradi. Har bir guruh ichida hisoblash uchun <code>PARTITION BY</code> qo'shing. <code>LAG/LEAD</code> MySQL 8, PostgreSQL, SQLite 3.25+ va SQL Server'da mavjud."
    }
   ],
   "quiz": [
    {
     "q": "LAG funksiyasi qaysi qator qiymatini qaytaradi?",
     "options": [
      "Birinchi qator",
      "Keyingi qator",
      "Oldingi qator",
      "Joriy qator"
     ],
     "answer": 2,
     "explain": "LAG oynadagi joriy qatordan oldin joylashgan qator qiymatini oladi."
    },
    {
     "q": "Birinchi qatorda LAG natijasi nima bo'ladi?",
     "options": [
      "Xato",
      "Birinchi qatorning o'zi",
      "0",
      "NULL yoki berilgan default"
     ],
     "answer": 3,
     "explain": "Oldingi qator bo'lmagani uchun NULL qaytadi; uchinchi argument berilsa, o'sha default ishlatiladi."
    },
    {
     "q": "Kurs chegarasida LAG noto'g'ri ishlamasligi uchun nima qo'shish kerak?",
     "options": [
      "GROUP BY",
      "PARTITION BY kurs_id",
      "DISTINCT",
      "LIMIT 1"
     ],
     "answer": 1,
     "explain": "PARTITION BY har bir kurs ichida alohida oyna yaratadi."
    }
   ]
  },
  {
   "id": 27,
   "title": "Running total va oyna ramkalari",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Yig'ilib boruvchi jami (<b>running total</b>) — har bir qatorda o'sha qatorgacha bo'lgan yig'indini ko'rsatadi. Uni oynali <code>SUM</code> va aniq <b>frame</b> bilan hisoblash mumkin. Frame oyna ichidagi qatorlar oralig'ini belgilaydi: <code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> boshidan joriy qatorgacha degani."
    },
    {
     "type": "code",
     "title": "kunlik-yigindi.sql",
     "code": "SELECT sana,\n       id,\n       baho,\n       SUM(baho) OVER (\n           ORDER BY sana, id\n           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n       ) AS yigindi\nFROM yozilishlar\nWHERE sana >= DATE '2025-09-01'\n  AND sana < DATE '2025-10-01'\nORDER BY sana, id;",
     "output": "sana       | id | baho | yigindi\n------------+----+------+---------\n2025-09-02 |  1 |   92 |      92\n2025-09-03 |  2 |   78 |     170\n2025-09-05 |  3 |   88 |     258\n2025-09-10 |  4 |   85 |     343\n2025-09-11 |  5 |   95 |     438\n2025-09-12 |  6 |   81 |     519\n2025-09-15 |  7 |   90 |     609\n2025-09-16 |  8 |   73 |     682",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Agar frame yozilmasa, <code>ORDER BY</code> bilan birga standart frame <code>RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> ishlaydi. <code>RANGE</code> teng <code>ORDER BY</code> qiymatlarini birga qo'shadi, <code>ROWS</code> esa faqat jismoniy qatorlarni sanaydi. Aniq natija uchun har doim <code>ROWS</code> yoki <code>RANGE</code>ni ochiq yozish tavsiya etiladi."
    },
    {
     "type": "code",
     "title": "oylik-jamlanma.sql",
     "code": "WITH oylik AS (\n    SELECT CAST(DATE_TRUNC('month', sana) AS DATE) AS oy,\n           SUM(baho) AS summa\n    FROM yozilishlar\n    GROUP BY DATE_TRUNC('month', sana)\n)\nSELECT oy,\n       summa,\n       SUM(summa) OVER (ORDER BY oy\n           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS jami,\n       SUM(summa) OVER (ORDER BY oy\n           ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS ikki_oy\nFROM oylik\nORDER BY oy;",
     "output": "oy         | summa | jami | ikki_oy\n-----------+-------+------+---------\n2025-09-01 |   682 |  682 |     682\n2025-10-01 |   168 |  850 |     850\n2025-11-01 |   177 | 1027 |     345",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Frame",
      "Ma'nosi",
      "Natija"
     ],
     "rows": [
      [
       "<code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code>",
       "Boshidan joriy qatorgacha",
       "Running total"
      ],
      [
       "<code>ROWS BETWEEN 1 PRECEDING AND CURRENT ROW</code>",
       "Oldingi va joriy qator",
       "Ikki davr yig'indisi"
      ],
      [
       "<code>ROWS BETWEEN 6 PRECEDING AND CURRENT ROW</code>",
       "Joriy va oldingi 6 qator",
       "7 kunlik harakatlanuvchi o'rtacha"
      ],
      [
       "<code>ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code>",
       "Butun oyna",
       "Guruh umumiy yig'indisi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Teng sanalar va tartib",
     "html": "Running total barqaror bo'lishi uchun <code>ORDER BY</code>da noyoblikni kafolatlang: <code>ORDER BY sana, id</code>. Faqat <code>sana</code> bo'yicha tartiblash bir kunda bir nechta yozuv bo'lsa, natija tasodifiy ko'rinishi mumkin. <code>ROWS</code> ishlatilganda teng qiymatlar ketma-ket qo'shiladi, <code>RANGE</code>da esa ular bir vaqtda qo'shilib, oraliq yig'indi ko'rinmasligi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "Running total hisoblashda qaysi frame eng mos?",
     "options": [
      "ROWS BETWEEN 1 FOLLOWING AND 2 FOLLOWING",
      "Faqat ORDER BY, frame kerak emas",
      "GROUP BY bilan bir xil",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW"
     ],
     "answer": 3,
     "explain": "Boshidan joriy qatorgacha bo'lgan frame yig'ilib boruvchi jamini beradi."
    },
    {
     "q": "ROWS BETWEEN 1 PRECEDING AND CURRENT ROW nimani hisoblaydi?",
     "options": [
      "Oldingi va joriy qator yig'indisini",
      "Butun jadvalni",
      "Keyingi ikki qatorni",
      "Faqat joriy qatorni"
     ],
     "answer": 0,
     "explain": "Frame oldingi bitta qator va joriy qatorni o'z ichiga oladi."
    },
    {
     "q": "Nega ORDER BY sana, id kabi noyob tartib ishlatiladi?",
     "options": [
      "Indeksni o'chirish uchun",
      "Natijani tezlashtirish uchun",
      "Bir kundagi bir nechta qatorlarda barqaror running total uchun",
      "Sanalarni matnga aylantirish uchun"
     ],
     "answer": 2,
     "explain": "Qo'shimcha noyob ustun teng sanalarda qatorlar tartibini barqaror qiladi."
    }
   ]
  },
  {
   "id": 28,
   "title": "NTILE va foizli o'rinlar: kvantil tahlili",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "Taqsimotni tushunish uchun qatorlarni teng chelaklarga bo'lish foydali. <code>NTILE(n)</code> qatorlarni tartib bo'yicha <code>n</code> ta guruhga ajratadi va har biriga chelak raqamini beradi. Qatorlar soni <code>n</code>ga bo'linmasa, birinchi chelaklar bittadan ko'p qator olishi mumkin."
    },
    {
     "type": "code",
     "title": "ball-kvartillari.sql",
     "code": "SELECT ism,\n       ball,\n       NTILE(4) OVER (ORDER BY ball DESC, ism) AS kvartil\nFROM talabalar\nORDER BY ball DESC, ism;",
     "output": "ism     | ball | kvartil\n--------+------+---------\nNodira  |   95 |       1\nAziza   |   92 |       1\nMalika  |   90 |       2\nDilnoza |   88 |       2\nSardor  |   81 |       3\nBek     |   78 |       3\nOtabek  |   73 |       4\nJasur   |   65 |       4",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>PERCENT_RANK</code> qatorning nisbiy o'rnini 0 va 1 oralig'ida beradi: <code>(rank - 1) / (qatorlar_soni - 1)</code>. <code>CUME_DIST</code> esa shu qiymatdan kichik yoki teng qatorlar ulushini ko'rsatadi. Ular reyting hisobotlari va chegara tahlilida ishlatiladi."
    },
    {
     "type": "code",
     "title": "foizli-orinlar.sql",
     "code": "SELECT ism,\n       ball,\n       ROUND((PERCENT_RANK() OVER (ORDER BY ball))::numeric * 100, 1) AS foiz_rank,\n       ROUND((CUME_DIST() OVER (ORDER BY ball))::numeric * 100, 1) AS kumulyativ_foiz\nFROM talabalar\nORDER BY ball;",
     "output": "ism     | ball | foiz_rank | kumulyativ_foiz\n--------+------+-----------+-----------------\nJasur   |   65 |       0.0 |            12.5\nOtabek  |   73 |      14.3 |            25.0\nBek     |   78 |      28.6 |            37.5\nSardor  |   81 |      42.9 |            50.0\nDilnoza |   88 |      57.1 |            62.5\nMalika  |   90 |      71.4 |            75.0\nAziza   |   92 |      85.7 |            87.5\nNodira  |   95 |     100.0 |           100.0",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Funksiya",
      "Qaytaradi",
      "Chegaralar"
     ],
     "rows": [
      [
       "<code>NTILE(4)</code>",
       "1 dan 4 gacha chelak raqami",
       "Teng bo'lmagan guruhlar bo'lishi mumkin"
      ],
      [
       "<code>PERCENT_RANK()</code>",
       "Nisbiy o'rin",
       "0 dan 1 gacha"
      ],
      [
       "<code>CUME_DIST()</code>",
       "Shu qiymatgacha ulush",
       "0 dan 1 gacha, 1 kirmaydi"
      ],
      [
       "<code>RANK()</code>",
       "Raqamli o'rin",
       "1 dan boshlanadi, bo'shliqlar bor"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Kvantil biznes ma'nosi",
     "html": "Kvartillar mijozlarni 4 guruhga, desillar 10 guruhga bo'ladi. Masalan, eng yuqori kvartil «VIP» mijozlar bo'lishi mumkin. Lekin kichik namunada kvantillar beqaror: 8 qatorni 4 ga bo'lish har chelakka 2 tadan tushadi, shuning uchun chegaralar tasodifiy ko'rinishi mumkin. Katta ma'lumotda <code>APPROX_PERCENTILE</code> kabi taqribiy funksiyalar tezroq ishlaydi."
    }
   ],
   "quiz": [
    {
     "q": "NTILE(4) qatorlarni nima qiladi?",
     "options": [
      "Tartib bo'yicha to'rt chelakka ajratadi",
      "To'rt marta takrorlaydi",
      "Faqat to'rt qator qoldiradi",
      "To'rt ustunga bo'ladi"
     ],
     "answer": 0,
     "explain": "NTILE(4) qatorlarni tartib bo'yicha 4 ta guruhga bo'lib, chelak raqamini beradi."
    },
    {
     "q": "PERCENT_RANK qiymati qaysi oraliqda bo'ladi?",
     "options": [
      "1 dan 100 gacha",
      "0 dan 1 gacha",
      "-1 dan 1 gacha",
      "Faqat 0 yoki 1"
     ],
     "answer": 1,
     "explain": "PERCENT_RANK nisbiy o'rin bo'lib, 0 va 1 oralig'ida qiymat qaytaradi."
    },
    {
     "q": "CUME_DIST nimani ko'rsatadi?",
     "options": [
      "Faqat o'rtacha qiymatni",
      "Eng katta qiymatni",
      "Qatorlar sonini",
      "Joriy qiymatdan kichik yoki teng qatorlar ulushini"
     ],
     "answer": 3,
     "explain": "CUME_DIST kumulyativ taqsimotni, ya'ni shu qiymatgacha bo'lgan ulushni beradi."
    }
   ]
  },
  {
   "id": 29,
   "title": "View: murakkab so'rovni soddalashtirish",
   "minutes": 15,
   "blocks": [
    {
     "type": "p",
     "html": "<b>View</b> — saqlangan so'rovga berilgan nom. U ma'lumotni o'zida saqlamaydi; har murojaatda asosiy jadvallar bo'yicha so'rov qayta bajariladi. View murakkab JOIN va agregatlarni yashirib, ilova kodini soddalashtiradi va ustunlar darajasida ruxsatni boshqarishga yordam beradi."
    },
    {
     "type": "code",
     "title": "kurs-hisoboti-view.sql",
     "code": "CREATE VIEW kurs_hisoboti AS\nSELECT k.id AS kurs_id,\n       k.nom,\n       COUNT(t.id) AS talabalar_soni,\n       ROUND(AVG(t.ball), 1) AS ortacha\nFROM kurslar k\nLEFT JOIN talabalar t ON t.kurs_id = k.id\nGROUP BY k.id, k.nom;",
     "output": "CREATE VIEW\nView \"kurs_hisoboti\" yaratildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "viewdan-foydalanish.sql",
     "code": "SELECT nom,\n       talabalar_soni,\n       COALESCE(ortacha, 0) AS ortacha\nFROM kurs_hisoboti\nORDER BY talabalar_soni DESC, nom;",
     "output": "nom        | talabalar_soni | ortacha\n-----------+----------------+---------\nPython     |              4 |    88.8\nJavaScript |              3 |    80.7\nSQL        |              0 |       0",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "View ustida <code>WHERE</code>, <code>ORDER BY</code> va hatto boshqa view yasash mumkin. PostgreSQL'da <code>CREATE OR REPLACE VIEW</code> bilan ta'rifni yangilash mumkin, MySQL'da ham shunday. Agar view ustunlari o'zgarsa, unga bog'liq ilova kodini tekshirish kerak. View'ni o'chirish uchun <code>DROP VIEW kurs_hisoboti;</code> ishlatiladi."
    },
    {
     "type": "table",
     "head": [
      "Afzalligi",
      "Cheklovi"
     ],
     "rows": [
      [
       "Murakkab so'rovni bir joyga yashiradi",
       "Har murojaatda qayta hisoblanishi mumkin"
      ],
      [
       "Ustunlarni tanlab ko'rsatadi",
       "Ba'zi view'lar yangilanmaydi"
      ],
      [
       "Ruxsatni soddalashtiradi",
       "View ortidagi jadval baribir himoyalanishi kerak"
      ],
      [
       "Nomlash va hujjatlashtirishni yaxshilaydi",
       "Chuqur qatlamlar sekinlashuvga olib kelishi mumkin"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Yangilanadigan view",
     "html": "Oddiy bitta jadval ustidagi view'ga <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> qilish mumkin, lekin agregat, <code>DISTINCT</code>, <code>UNION</code> yoki bir nechta jadval bo'lsa cheklovlar paydo bo'ladi. PostgreSQL'da <code>WITH CHECK OPTION</code> view shartidan tashqariga chiqadigan o'zgarishlarni bloklaydi. Xavfsizlik uchun view'ni himoya qatlami deb hisoblamang — asosiy jadvalga ham alohida ruxsat bering."
    }
   ],
   "quiz": [
    {
     "q": "View ma'lumotni qanday saqlaydi?",
     "options": [
      "Barcha qatorlarni nusxalab",
      "So'rov ta'rifini saqlaydi, ma'lumot asosiy jadvalda qoladi",
      "Faqat indekslarni",
      "Faqat ustun nomlarini"
     ],
     "answer": 1,
     "explain": "View virtual jadval: ta'rif saqlanadi, murojaatda so'rov qayta bajariladi."
    },
    {
     "q": "View'ni yaratish uchun qaysi buyruq ishlatiladi?",
     "options": [
      "MAKE VIEW",
      "SELECT VIEW",
      "CREATE VIEW",
      "CREATE TABLE"
     ],
     "answer": 2,
     "explain": "CREATE VIEW nom AS so'rov shaklida view yaratiladi."
    },
    {
     "q": "Asosiy jadvaldagi ma'lumot o'zgarsa, view'da nima ko'rinadi?",
     "options": [
      "Yangilangan ma'lumot, chunki view qayta hisoblanadi",
      "Hech narsa",
      "View avtomatik o'chadi",
      "Eski nusxa"
     ],
     "answer": 0,
     "explain": "View ma'lumotni saqlamaydi, shuning uchun har murojaatda joriy ma'lumotni ko'rsatadi."
    }
   ]
  },
  {
   "id": 30,
   "title": "Materialized view: natijani keshlash",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Materialized view</b> oddiy view'dan farqli, so'rov natijasini diskda saqlaydi. Bu og'ir agregat hisobotlarni tez ochish imkonini beradi, lekin ma'lumot eskirishi mumkin. Yangilash uchun <code>REFRESH MATERIALIZED VIEW</code> buyrug'i ishlatiladi. PostgreSQL'da bu imkoniyat mavjud, MySQL'da esa yo'q."
    },
    {
     "type": "code",
     "title": "materialized-view.sql",
     "code": "CREATE MATERIALIZED VIEW oylik_yozilishlar AS\nSELECT CAST(DATE_TRUNC('month', sana) AS DATE) AS oy,\n       COUNT(*) AS soni\nFROM yozilishlar\nGROUP BY DATE_TRUNC('month', sana)\nWITH NO DATA;",
     "output": "CREATE MATERIALIZED VIEW\nMaterialized view \"oylik_yozilishlar\" yaratildi (ma'lumotsiz).",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>WITH NO DATA</code> view'ni bo'sh yaratadi; birinchi o'qishdan oldin uni to'ldirish kerak. Uni tashlab yubormasangiz, <code>REFRESH MATERIALIZED VIEW oylik_yozilishlar;</code> barcha natijani qayta hisoblaydi. Katta jadvalda bu uzoq davom etishi va jadvalni bloklashi mumkin."
    },
    {
     "type": "code",
     "title": "refresh-va-oqish.sql",
     "code": "REFRESH MATERIALIZED VIEW oylik_yozilishlar;\n\nSELECT oy, soni\nFROM oylik_yozilishlar\nORDER BY oy;",
     "output": "REFRESH MATERIALIZED VIEW\n\noy         | soni\n-----------+------\n2025-09-01 |    8\n2025-10-01 |    4\n2025-11-01 |    2",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Xususiyat",
      "View",
      "Materialized view"
     ],
     "rows": [
      [
       "Ma'lumot saqlanishi",
       "Yo'q, har safar hisoblanadi",
       "Ha, diskda saqlanadi"
      ],
      [
       "Tezlik",
       "So'rovga bog'liq",
       "O'qish tez, refresh qimmat"
      ],
      [
       "Yangilik",
       "Har doim joriy",
       "Refresh'gacha eski"
      ],
      [
       "Indeks",
       "Odatda yo'q",
       "Yaratish mumkin (PostgreSQL)"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Refresh strategiyalari",
     "html": "Katta hajmda <code>REFRESH MATERIALIZED VIEW CONCURRENTLY ...</code> o'qishni bloklamaydi, lekin view'da noyob indeks bo'lishi shart. Refresh'ni cron, scheduler yoki ma'lumot o'zgarganidan keyin ishga tushirish mumkin. MySQL'da shunga o'xshash natijani jamlanma jadval va <code>EVENT</code> bilan yasash mumkin. Har doim ma'lumotning qanchalik eskirishiga ruxsat berilganini biznes bilan kelishib oling."
    }
   ],
   "quiz": [
    {
     "q": "Materialized view oddiy view'dan nimasi bilan farq qiladi?",
     "options": [
      "Indeks yaratishni taqiqlaydi",
      "Har doim avtomatik yangilanadi",
      "Natijani diskda saqlaydi",
      "Faqat SELECT'ni tezlashtiradi"
     ],
     "answer": 2,
     "explain": "Materialized view so'rov natijasini saqlaydi, shuning uchun tezroq o'qiladi."
    },
    {
     "q": "Materialized view natijasini yangilash uchun qaysi buyruq ishlatiladi?",
     "options": [
      "REBUILD VIEW",
      "COMMIT VIEW",
      "UPDATE VIEW",
      "REFRESH MATERIALIZED VIEW"
     ],
     "answer": 3,
     "explain": "PostgreSQL'da REFRESH MATERIALIZED VIEW natijani qayta hisoblaydi."
    },
    {
     "q": "Materialized view'ning asosiy kamchiligi nima?",
     "options": [
      "Har doim xato beradi",
      "Ma'lumot refresh'gacha eskirgan bo'lishi mumkin",
      "Uni SELECT qilib bo'lmaydi",
      "Faqat bitta ustun saqlaydi"
     ],
     "answer": 1,
     "explain": "Saqlangan natija yangilanmaguncha joriy ma'lumotdan orqada qoladi."
    }
   ]
  },
  {
   "id": 31,
   "title": "Indekslar chuqur: B-tree, kompozit va qoplovchi indeks",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Indeks — qidiruvni tezlashtiradigan alohida tuzilma. PostgreSQL, MySQL va SQLite'da standart indeks <b>B-tree</b> bo'lib, tenglik, oraliq va tartiblashda ishlaydi. Indekssiz baza ko'p hollarda butun jadvalni ketma-ket o'qiydi (<b>seq scan</b>). Indeks har doim foyda bermaydi: kichik jadvalda seq scan tezroq bo'lishi mumkin."
    },
    {
     "type": "code",
     "title": "kompozit-indeks.sql",
     "code": "CREATE INDEX idx_talabalar_kurs_ball\nON talabalar (kurs_id, ball DESC);",
     "output": "CREATE INDEX\nIndeks \"idx_talabalar_kurs_ball\" yaratildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Kompozit indeksda ustunlar tartibi muhim. <code>(kurs_id, ball)</code> indeksi <code>WHERE kurs_id = 1</code>, <code>WHERE kurs_id = 1 AND ball >= 90</code> va <code>ORDER BY kurs_id, ball</code> so'rovlariga yordam beradi. Lekin faqat <code>WHERE ball >= 90</code> uchun u unchalik foydali emas, chunki indeksning birinchi ustuni ishlatilmayapti. Bu <b>chapdan prefiks</b> qoidasi."
    },
    {
     "type": "code",
     "title": "indeks-rejasi.sql",
     "code": "EXPLAIN\nSELECT ism, ball\nFROM talabalar\nWHERE kurs_id = 1\n  AND ball >= 90\nORDER BY ball DESC;",
     "output": "Sort  (cost=8.20..8.21 rows=3 width=20)\n  Sort Key: ball DESC\n  ->  Index Scan using idx_talabalar_kurs_ball on talabalar  (cost=0.15..8.17 rows=3 width=20)\n        Index Cond: ((kurs_id = 1) AND (ball >= 90))",
     "outputLabel": "So'rov rejasi"
    },
    {
     "type": "table",
     "head": [
      "Indeks turi",
      "Qachon ishlatiladi",
      "Misol"
     ],
     "rows": [
      [
       "B-tree",
       "Tenglik, oraliq, tartib",
       "Eng ko'p uchraydigan tur"
      ],
      [
       "Hash",
       "Faqat tenglik",
       "<code>USING HASH</code> (PostgreSQL)"
      ],
      [
       "GIN",
       "Massiv, JSONB, to'liq matn",
       "<code>USING GIN</code>"
      ],
      [
       "GiST",
       "Geometriya, qidiruv diapazonlari",
       "PostGIS"
      ],
      [
       "Partial",
       "Jadvalning bir qismi",
       "<code>WHERE holat = 'faol'</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Indeks bepul emas",
     "html": "Har bir indeks <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>da yangilanishi kerak, shuning uchun disk va yozish tezligini sarflaydi. Kam tanlanadigan (masalan, faqat 2 xil qiymatli) ustunga indeks ko'pincha foydasiz. Indeksni o'chirishdan oldin <code>EXPLAIN</code> va statistikani tekshiring. PostgreSQL'da <code>CREATE INDEX CONCURRENTLY</code> ishlab chiqarishda jadvalni bloklamaydi; MySQL'da <code>ALGORITHM=INPLACE</code> imkoniyatlarini tekshiring."
    }
   ],
   "quiz": [
    {
     "q": "Kompozit indeks (kurs_id, ball) qaysi so'rovga eng yaxshi yordam beradi?",
     "options": [
      "Faqat ism LIKE 'A%'",
      "Faqat ORDER BY ism",
      "Faqat ball >= 90",
      "kurs_id = 1 AND ball >= 90"
     ],
     "answer": 3,
     "explain": "Indeksning ikkala ustuni ham shartda ishlatilmoqda, birinchi ustun prefiks sifatida mos."
    },
    {
     "q": "Indeksning yozish amallariga ta'siri qanday?",
     "options": [
      "Yozishni sekinlashtirishi mumkin, chunki indeks ham yangilanadi",
      "Hech qanday ta'sir qilmaydi",
      "Faqat o'qishni sekinlashtiradi",
      "INSERT/UPDATE/DELETE'ni tezlashtiradi"
     ],
     "answer": 0,
     "explain": "Har bir yozuv indeks tuzilmasini ham yangilaydi, bu qo'shimcha ish demak."
    },
    {
     "q": "EXPLAIN natijasida Index Scan ko'rinsa, bu nimani bildiradi?",
     "options": [
      "So'rov bajarilmagan",
      "Indeks buzilgan",
      "Baza indeksdan foydalanyapti",
      "Jadval o'chirilgan"
     ],
     "answer": 2,
     "explain": "Index Scan reja tuguni indeks orqali qidiruv amalga oshirilganini ko'rsatadi."
    }
   ]
  },
  {
   "id": 32,
   "title": "EXPLAIN: so'rov rejasini o'qish",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<b>EXPLAIN</b> so'rovni bajarish rejasini ko'rsatadi. <code>EXPLAIN ANALYZE</code> esa so'rovni haqiqatan bajaradi va haqiqiy vaqt hamda qatorlar sonini qo'shadi. Rejani o'qish uchun uchta narsaga qarang: qaysi tugun ishlayapti (Seq Scan, Index Scan, Join), taxminiy qatorlar soni va haqiqiy vaqt qayerda ko'p sarflanmoqda."
    },
    {
     "type": "code",
     "title": "explain-analyze.sql",
     "code": "EXPLAIN ANALYZE\nSELECT k.nom, COUNT(t.id) AS talabalar\nFROM kurslar k\nLEFT JOIN talabalar t ON t.kurs_id = k.id\nGROUP BY k.nom;",
     "output": "HashAggregate  (cost=1.29..1.33 rows=3 width=20) (actual time=0.070..0.071 rows=3 loops=1)\n  Group Key: k.nom\n  ->  Hash Left Join  (cost=1.09..1.21 rows=8 width=12) (actual time=0.035..0.047 rows=8 loops=1)\n        Hash Cond: (t.kurs_id = k.id)\n        ->  Seq Scan on talabalar t  (cost=0.00..1.08 rows=8 width=8) (actual time=0.008..0.010 rows=8 loops=1)\n        ->  Hash  (cost=1.03..1.03 rows=3 width=12) (actual time=0.012..0.012 rows=3 loops=1)\n              ->  Seq Scan on kurslar k  (cost=0.00..1.03 rows=3 width=12) (actual time=0.006..0.007 rows=3 loops=1)\nPlanning Time: 0.160 ms\nExecution Time: 0.098 ms",
     "outputLabel": "Reja"
    },
    {
     "type": "p",
     "html": "Reja pastdan yuqoriga o'qiladi: avval jadvallar skanerlanadi, keyin birlashadi, oxirida agregat hisoblanadi. <code>cost</code> taxminiy xarajat, <code>rows</code> taxminiy qatorlar soni, <code>actual time</code> haqiqiy millisekund. <code>loops</code> tugunning necha marta bajarilganini ko'rsatadi; uning vaqtini <code>actual time × loops</code> bilan baholang."
    },
    {
     "type": "code",
     "title": "indeksdan-oldin-keyin.sql",
     "code": "EXPLAIN\nSELECT *\nFROM yozilishlar\nWHERE sana >= DATE '2025-10-01';\n\nCREATE INDEX idx_yozilishlar_sana ON yozilishlar (sana);\n\nEXPLAIN\nSELECT *\nFROM yozilishlar\nWHERE sana >= DATE '2025-10-01';",
     "output": "Seq Scan on yozilishlar  (cost=0.00..1.18 rows=6 width=40)\n  Filter: (sana >= '2025-10-01'::date)\n  Rows Removed by Filter: 8\n\nCREATE INDEX\n\nIndex Scan using idx_yozilishlar_sana on yozilishlar  (cost=0.14..8.16 rows=6 width=40)\n  Index Cond: (sana >= '2025-10-01'::date)",
     "outputLabel": "Ikki reja"
    },
    {
     "type": "table",
     "head": [
      "Tugun",
      "Ma'nosi",
      "Qachon yaxshi"
     ],
     "rows": [
      [
       "Seq Scan",
       "Butun jadval o'qiladi",
       "Kichik jadval yoki katta qism kerak"
      ],
      [
       "Index Scan",
       "Indeks orqali qatorlar olinadi",
       "Kam qator, aniq shart"
      ],
      [
       "Bitmap Heap Scan",
       "Indeksdan bitmap yasab, jadvaldan o'qish",
       "O'rtacha miqdordagi qatorlar"
      ],
      [
       "Nested Loop",
       "Har bir tashqi qator uchun ichki qidiruv",
       "Kichik tashqi to'plam va indeks"
      ],
      [
       "Hash Join",
       "Xesh jadval orqali birlashuv",
       "Katta to'plamlar, tenglik sharti"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Taxmin va haqiqat farqi",
     "html": "Agar <code>rows</code> taxmini haqiqiy qatorlardan juda farq qilsa, statistika eskirgan bo'lishi mumkin: PostgreSQL'da <code>ANALYZE jadval;</code> ishlatiladi. MySQL'da <code>EXPLAIN ANALYZE</code> 8.0.18+ da mavjud, <code>EXPLAIN FORMAT=JSON</code> batafsil ma'lumot beradi. Rejani faqat cost bo'yicha emas, haqiqiy vaqt va biznes talabiga qarab baholang."
    }
   ],
   "quiz": [
    {
     "q": "EXPLAIN va EXPLAIN ANALYZE orasidagi farq nima?",
     "options": [
      "EXPLAIN ANALYZE so'rovni haqiqatan bajaradi va vaqtni ko'rsatadi",
      "EXPLAIN ANALYZE faqat indeks yaratadi",
      "EXPLAIN tezroq, chunki u natijani saqlaydi",
      "Ikkalasi bir xil"
     ],
     "answer": 0,
     "explain": "EXPLAIN faqat reja beradi; ANALYZE qo'shilganda so'rov bajariladi va actual metrics chiqadi."
    },
    {
     "q": "Seq Scan qachon odatiy va normal bo'lishi mumkin?",
     "options": [
      "Faqat JOIN ishlatilganda",
      "Jadval juda kichik bo'lsa yoki qatorlarning katta qismi kerak bo'lsa",
      "Har doim xato hisoblanadi",
      "Faqat indeks bo'lmaganda"
     ],
     "answer": 1,
     "explain": "Kichik jadvalda yoki katta qism o'qilganda ketma-ket skanerlash indeksdan tezroq bo'lishi mumkin."
    },
    {
     "q": "Rejada Rows Removed by Filter katta bo'lsa, bu nimaga ishora?",
     "options": [
      "So'rov juda tez ishlayapti",
      "Jadvalda indeks yo'qligi aniq",
      "Natija bo'sh bo'ladi",
      "Ko'p qatorlar behuda o'qilib, keyin filtrlanmoqda; indeks yordam berishi mumkin"
     ],
     "answer": 3,
     "explain": "Filtr ko'p qatorni tashlab yuborsa, mos indeks qidiruvni qisqartirishi mumkin."
    }
   ]
  },
  {
   "id": 33,
   "title": "Normalizatsiya: 1NF, 2NF va 3NF",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Normalizatsiya — ma'lumotni takrorlanish va nomuvofiqlikdan himoya qilish uchun jadvallarni bo'lish jarayoni. Yaxshi sxema har bir faktni bir joyda saqlaydi. Normallashtirishning uchta asosiy bosqichi: <b>1NF</b> (atomar qiymatlar), <b>2NF</b> (qismiy bog'liqlik yo'q) va <b>3NF</b> (tranzitiv bog'liqlik yo'q)."
    },
    {
     "type": "code",
     "title": "nomormal-jadval.sql",
     "code": "CREATE TABLE talabalar_xom (\n    talaba_id INTEGER,\n    ism TEXT,\n    kurslar TEXT\n);\n\nINSERT INTO talabalar_xom\nVALUES (1, 'Aziza', 'Python, SQL');",
     "output": "CREATE TABLE\nINSERT 0 1\n\n-- Bitta katakda ikki kurs: 1NF buzilgan.",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Yuqoridagi jadvalda <code>kurslar</code> ustunida ro'yxat saqlanmoqda. Bu qidiruvni qiyinlashtiradi, bitta kursni o'zgartirish uchun matnni tahrirlash kerak bo'ladi va takrorlanish paydo bo'ladi. Yechim — kurslarni alohida jadvalga chiqarib, talaba va kurs orasidagi bog'lanishni uchinchi jadvalda saqlash."
    },
    {
     "type": "code",
     "title": "normal-sxema.sql",
     "code": "CREATE TABLE kurslar_yangi (\n    id INTEGER PRIMARY KEY,\n    nom TEXT NOT NULL UNIQUE\n);\n\nCREATE TABLE talabalar_yangi (\n    id INTEGER PRIMARY KEY,\n    ism TEXT NOT NULL\n);\n\nCREATE TABLE yozilishlar_yangi (\n    id INTEGER PRIMARY KEY,\n    talaba_id INTEGER NOT NULL REFERENCES talabalar_yangi(id),\n    kurs_id INTEGER NOT NULL REFERENCES kurslar_yangi(id),\n    baho INTEGER,\n    UNIQUE (talaba_id, kurs_id)\n);",
     "output": "CREATE TABLE\nCREATE TABLE\nCREATE TABLE",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Shakl",
      "Talab",
      "Buzilish misoli"
     ],
     "rows": [
      [
       "1NF",
       "Har bir katak atomar (bo'linmas) qiymat",
       "«Python, SQL» bitta katakda"
      ],
      [
       "2NF",
       "1NF + kompozit kalitning bir qismiga bog'liqlik yo'q",
       "Talaba ismi faqat talaba_id ga bog'liq"
      ],
      [
       "3NF",
       "2NF + kalitdan tranzitiv bog'liqlik yo'q",
       "Kurs nomi kurs_id orqali keladi"
      ],
      [
       "Denormalizatsiya",
       "Ataylab takrorlash",
       "Hisobot tezligi uchun jamlanma ustun"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Normalizatsiya — maqsad emas, vosita",
     "html": "3NF ko'p ilovalar uchun yaxshi boshlang'ich nuqta. Lekin analitik hisobotlarda ko'p JOIN sekin bo'lishi mumkin; shunda yulduzcha sxema yoki materialized view kabi denormalizatsiya usullari qo'llanadi. Har qanday takrorlanishni darhol yo'q qilish shart emas — muhimi, ma'lumotning yagona manbasi va uni yangilash qoidalari aniq bo'lsin."
    }
   ],
   "quiz": [
    {
     "q": "1NF talabiga ko'ra katakda nima saqlanishi kerak?",
     "options": [
      "Bir nechta qiymat ro'yxati",
      "Faqat atomar qiymat",
      "Faqat JSON",
      "Faqat NULL"
     ],
     "answer": 1,
     "explain": "1NF har bir katakda bo'linmas, atomar qiymat bo'lishini talab qiladi."
    },
    {
     "q": "2NF qanday bog'liqlikni yo'q qiladi?",
     "options": [
      "Faqat tranzitiv bog'liqlikni",
      "Indekslarni",
      "Kompozit kalitning bir qismiga qismiy bog'liqlikni",
      "Barcha FOREIGN KEY'larni"
     ],
     "answer": 2,
     "explain": "2NF kompozit kalitning bir qismiga bog'liq bo'lgan ustunlarni alohida jadvalga chiqaradi."
    },
    {
     "q": "3NF qanday bog'liqlikni bartaraf etadi?",
     "options": [
      "Kalit bo'lmagan ustunning boshqa kalit bo'lmagan ustunga bog'liqligini (tranzitiv)",
      "Barcha matn ustunlarini",
      "Faqat birinchi darajali kalitlarni",
      "Sanalar orasidagi bog'liqlikni"
     ],
     "answer": 0,
     "explain": "3NF tranzitiv bog'liqliklarni, ya'ni kalit bo'lmagan ustunlar orqali keladigan bog'liqliklarni yo'q qiladi."
    }
   ]
  },
  {
   "id": 34,
   "title": "Cheklovlar: ma'lumot sifatini baza himoya qiladi",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Cheklovlar (<b>constraints</b>) — baza darajasidagi qoidalar. Ular noto'g'ri ma'lumot kiritilishini ilova kodidan qat'i nazar to'xtatadi. Asosiy turlar: <code>NOT NULL</code>, <code>PRIMARY KEY</code>, <code>UNIQUE</code>, <code>FOREIGN KEY</code>, <code>CHECK</code> va <code>DEFAULT</code>. Cheklov nomini aniq berish xatolarni tushunishni osonlashtiradi."
    },
    {
     "type": "code",
     "title": "yozilishlar-cheklovlari.sql",
     "code": "CREATE TABLE yozilishlar_yangi (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    talaba_id INTEGER NOT NULL,\n    kurs_id INTEGER NOT NULL,\n    baho INTEGER CHECK (baho BETWEEN 0 AND 100),\n    holat TEXT NOT NULL DEFAULT 'faol'\n        CHECK (holat IN ('faol', 'tugatgan', 'bekor')),\n    FOREIGN KEY (talaba_id) REFERENCES talabalar(id)\n        ON DELETE CASCADE,\n    FOREIGN KEY (kurs_id) REFERENCES kurslar(id)\n        ON DELETE RESTRICT,\n    UNIQUE (talaba_id, kurs_id)\n);",
     "output": "CREATE TABLE\nJadval \"yozilishlar_yangi\" yaratildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>PRIMARY KEY</code> qatorni noyob aniqlaydi va NULL'ga yo'l qo'ymaydi. <code>UNIQUE (talaba_id, kurs_id)</code> bir talaba bir kursga ikki marta yozilishini taqiqlaydi, lekin har bir ustun alohida takrorlanishi mumkin. <code>CHECK</code> qiymat mantiqini tekshiradi. <code>FOREIGN KEY</code> bog'langan jadvalda mavjud bo'lmagan ID'ga yozishni bloklaydi."
    },
    {
     "type": "code",
     "title": "notogri-baho.sql",
     "code": "INSERT INTO yozilishlar_yangi (talaba_id, kurs_id, baho)\nVALUES (1, 1, 120);",
     "output": "ERROR:  new row for relation \"yozilishlar_yangi\" violates check constraint \"yozilishlar_yangi_baho_check\"\nDETAIL:  Failing row contains (1, 1, 1, 120, faol).",
     "outputLabel": "Xato"
    },
    {
     "type": "table",
     "head": [
      "Cheklov",
      "Nimani ta'minlaydi",
      "Misol"
     ],
     "rows": [
      [
       "<code>NOT NULL</code>",
       "Ustun bo'sh bo'lmaydi",
       "<code>ism TEXT NOT NULL</code>"
      ],
      [
       "<code>PRIMARY KEY</code>",
       "Noyoblik + NOT NULL",
       "<code>id PRIMARY KEY</code>"
      ],
      [
       "<code>UNIQUE</code>",
       "Takrorlanmaslik",
       "<code>email UNIQUE</code>"
      ],
      [
       "<code>CHECK</code>",
       "Qiymat sharti",
       "<code>baho BETWEEN 0 AND 100</code>"
      ],
      [
       "<code>FOREIGN KEY</code>",
       "Bog'langan qator mavjudligi",
       "<code>REFERENCES kurslar(id)</code>"
      ],
      [
       "<code>DEFAULT</code>",
       "Standart qiymat",
       "<code>holat DEFAULT 'faol'</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "ON DELETE qoidalari",
     "html": "<code>CASCADE</code> ota qator o'chganda bolalarni ham o'chiradi, <code>RESTRICT</code> o'chirishni taqiqlaydi, <code>SET NULL</code> bog'lanishni NULL qiladi (ustun NULL'ga ruxsat berishi kerak). <code>SET DEFAULT</code> standart qiymat qo'yadi. Ishlab chiqarishda <code>CASCADE</code>ni ehtiyotkorlik bilan ishlating: bitta o'chirish ko'p jadvalga ta'sir qilishi mumkin. PostgreSQL'da cheklovlar <code>DEFERRABLE</code> bo'lishi mumkin, MySQL'da esa bunday imkoniyat cheklangan."
    }
   ],
   "quiz": [
    {
     "q": "CHECK cheklovi nimani tekshiradi?",
     "options": [
      "Faqat NULL'ni",
      "Boshqa jadvalda qator borligini",
      "Ustun qiymati berilgan shartga mosligini",
      "Indeks mavjudligini"
     ],
     "answer": 2,
     "explain": "CHECK har bir kiritilayotgan yoki yangilanayotgan qiymatni mantiqiy shart bo'yicha tekshiradi."
    },
    {
     "q": "ON DELETE CASCADE qanday ishlaydi?",
     "options": [
      "O'chirishni butunlay taqiqlaydi",
      "Faqat birinchi bolani o'chiradi",
      "Bog'lanishni NULL qiladi",
      "Ota qator o'chganda unga bog'langan bolalarni ham o'chiradi"
     ],
     "answer": 3,
     "explain": "CASCADE ota yozuvga bog'langan barcha bola yozuvlarni avtomatik o'chiradi."
    },
    {
     "q": "UNIQUE (talaba_id, kurs_id) qanday takrorlanishni taqiqlaydi?",
     "options": [
      "Bir xil talaba_id yoki kurs_id'ning har qanday takrorlanishini",
      "Aynan bir xil juftlikning ikki marta yozilishini",
      "Faqat NULL qiymatlarni",
      "Faqat matn ustunlarini"
     ],
     "answer": 1,
     "explain": "Kompozit UNIQUE juftlik darajasida noyoblikni ta'minlaydi; ustunlar alohida takrorlanishi mumkin."
    }
   ]
  },
  {
   "id": 35,
   "title": "DDL chuqur: ALTER, TRUNCATE va vaqtinchalik jadvallar",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "DDL (<b>Data Definition Language</b>) sxemani o'zgartiradi: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code>. Ishlab chiqarish bazasida DDLni ehtiyotkorlik bilan qo'llash kerak: ba'zi amallar jadvalni bloklaydi yoki qaytarib bo'lmaydigan o'zgarish keltiradi. Avval zaxira, keyin o'zgarish."
    },
    {
     "type": "code",
     "title": "alter-table.sql",
     "code": "ALTER TABLE talabalar ADD COLUMN telefon TEXT;\n\nALTER TABLE talabalar ALTER COLUMN ball SET DEFAULT 0;\n\nALTER TABLE kurslar ADD COLUMN daraja TEXT DEFAULT 'boshlovchi';",
     "output": "ALTER TABLE\nALTER TABLE\nALTER TABLE",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>ALTER TABLE ... ADD COLUMN</code> yangi ustun qo'shadi. Standart qiymatli ustun qo'shish PostgreSQL 11+ va MySQL 8'da tezroq, chunki barcha qatorlar darhol qayta yozilmasligi mumkin. Ustun turini o'zgartirish esa qayta yozish va bloklashga olib kelishi mumkin, ayniqsa katta jadvalda."
    },
    {
     "type": "code",
     "title": "arxiv-va-truncate.sql",
     "code": "CREATE TABLE arxiv_talabalar AS\nSELECT id, ism, ball\nFROM talabalar\nWHERE ball < 70;\n\nSELECT COUNT(*) AS arxivda\nFROM arxiv_talabalar;\n\nTRUNCATE TABLE arxiv_talabalar;",
     "output": "CREATE TABLE AS\n arxivda\n---------\n       1\n(1 qator)\n\nTRUNCATE TABLE",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Buyruq",
      "Nima qiladi",
      "Qaytarish"
     ],
     "rows": [
      [
       "<code>DELETE</code>",
       "Qatorlarni WHERE bo'yicha o'chiradi",
       "<code>ROLLBACK</code> mumkin"
      ],
      [
       "<code>TRUNCATE</code>",
       "Jadvalni tez bo'shatadi",
       "PostgreSQL'da tranzaksiyada qaytariladi, MySQL'da odatda yo'q"
      ],
      [
       "<code>DROP TABLE</code>",
       "Jadval tuzilmasi va ma'lumotni o'chiradi",
       "Juda xavfli"
      ],
      [
       "<code>CREATE TEMP TABLE</code>",
       "Sessiya davomida yashaydigan jadval",
       "Sessiya tugaganda yo'qoladi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "DDL va tranzaksiya",
     "html": "PostgreSQL'da DDL tranzaksion: <code>BEGIN; ALTER TABLE ...; ROLLBACK;</code> o'zgarishni qaytaradi. MySQL 8'da ko'p DDL buyruqlari bajarilishdan oldin avtomatik commit qiladi, shuning uchun qaytarish kafolatlanmaydi. Katta jadvalga ustun qo'shishdan oldin <code>pg_dump --schema-only</code> yoki muqobil migratsiya rejasini tayyorlang. <code>TRUNCATE</code> FOREIGN KEY bilan bog'langan jadvalda cheklovlarga uchrashi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "TRUNCATE TABLE DELETE'dan nimasi bilan farq qiladi?",
     "options": [
      "Faqat bitta qatorni o'chiradi",
      "Jadval tuzilmasini ham o'chiradi",
      "WHERE shartini talab qiladi",
      "Jadvalni tezroq bo'shatadi va odatda qatorlar bo'yicha log yozmaydi"
     ],
     "answer": 3,
     "explain": "TRUNCATE butun jadvalni tez bo'shatadi; DELETE qatorlarni WHERE bilan o'chiradi."
    },
    {
     "q": "Yangi ustun qo'shish uchun qaysi buyruq ishlatiladi?",
     "options": [
      "ALTER TABLE jadval ADD COLUMN ustun turi",
      "UPDATE TABLE jadval ADD ustun",
      "CREATE COLUMN jadval.ustun",
      "INSERT COLUMN ustun"
     ],
     "answer": 0,
     "explain": "ALTER TABLE ... ADD COLUMN mavjud jadvalga yangi ustun qo'shadi."
    },
    {
     "q": "Vaqtinchalik jadval qancha vaqt mavjud bo'ladi?",
     "options": [
      "Faqat SELECT davomida",
      "Baza o'chirilguncha",
      "Joriy sessiya yoki tranzaksiya tugaguncha",
      "Bir yil"
     ],
     "answer": 2,
     "explain": "TEMP jadval sessiya (yoki ON COMMIT bilan tranzaksiya) tugaganda yo'qoladi."
    }
   ]
  },
  {
   "id": 36,
   "title": "DML chuqur: INSERT SELECT, UPSERT va RETURNING",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "DML ma'lumotni o'zgartiradi. Oddiy <code>INSERT ... VALUES</code>dan tashqari, bir jadvaldan boshqasiga ko'chirish uchun <code>INSERT ... SELECT</code>, mavjud yozuvni yangilash yoki qo'shish uchun <b>upsert</b>, o'zgargan qatorlarni qaytarish uchun <code>RETURNING</code> ishlatiladi. Bu vositalar ETL va sinxronizatsiyada juda foydali."
    },
    {
     "type": "code",
     "title": "insert-select.sql",
     "code": "CREATE TABLE arxiv_talabalar (\n    id INTEGER,\n    ism TEXT,\n    ball INTEGER\n);\n\nINSERT INTO arxiv_talabalar (id, ism, ball)\nSELECT id, ism, ball\nFROM talabalar\nWHERE ball < 70;",
     "output": "CREATE TABLE\nINSERT 0 1",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>INSERT ... SELECT</code> manba va maqsad ustunlarini moslashtiradi. Manba so'rovida <code>WHERE</code>, <code>JOIN</code>, agregat bo'lishi mumkin. Agar maqsad jadvalda <code>UNIQUE</code> yoki <code>PRIMARY KEY</code> bo'lsa, takroriy yozuv xato beradi. Uni boshqarish uchun upsert ishlatiladi."
    },
    {
     "type": "code",
     "title": "upsert-returning.sql",
     "code": "INSERT INTO kurslar (id, nom, oqituvchi, narx)\nVALUES (3, 'SQL', 'Dilshod Rahimov', 420000)\nON CONFLICT (id) DO UPDATE\n    SET narx = EXCLUDED.narx\nRETURNING id, nom, narx;",
     "output": "INSERT 0 1\n id | nom | narx\n----+-----+--------\n  3 | SQL | 420000\n(1 qator)",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Vazifa",
      "PostgreSQL / SQLite",
      "MySQL"
     ],
     "rows": [
      [
       "Qator qo'shish",
       "<code>INSERT ... VALUES</code>",
       "Bir xil"
      ],
      [
       "Jadvaldan ko'chirish",
       "<code>INSERT ... SELECT</code>",
       "Bir xil"
      ],
      [
       "Upsert",
       "<code>ON CONFLICT ... DO UPDATE</code>",
       "<code>ON DUPLICATE KEY UPDATE</code>"
      ],
      [
       "O'zgargan qatorni qaytarish",
       "<code>RETURNING</code>",
       "MySQL 8'da cheklangan"
      ],
      [
       "Jadvalni yangilash",
       "<code>UPDATE ... FROM</code>",
       "<code>UPDATE ... JOIN</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Xavfsiz ommaviy yangilash",
     "html": "Katta jadvalda <code>UPDATE</code> yoki <code>DELETE</code>ni birdaniga bajarmang: avval <code>SELECT</code> bilan qamrovni tekshiring, keyin kichik partiyalarda bajaring. <code>RETURNING</code> yordamida qaysi qatorlar o'zgarganini bilib olish mumkin. MySQL'da <code>RETURNING</code> o'rniga <code>LAST_INSERT_ID()</code> yoki alohida <code>SELECT</code> ishlatiladi. Standart SQL'da <code>MERGE</code> ham mavjud, lekin har bir bazada qo'llab-quvvatlash darajasi farq qiladi."
    }
   ],
   "quiz": [
    {
     "q": "Bir jadvaldagi qatorlarni boshqasiga ko'chirish uchun qaysi shakl ishlatiladi?",
     "options": [
      "INSERT INTO maqsad SELECT ... FROM manba",
      "SELECT INTO maqsad",
      "UPDATE maqsad SET SELECT",
      "COPY SELECT"
     ],
     "answer": 0,
     "explain": "INSERT ... SELECT manba so'rovi natijasini maqsad jadvalga yozadi."
    },
    {
     "q": "PostgreSQL'da ON CONFLICT (id) DO UPDATE nima qiladi?",
     "options": [
      "Konflikt bo'lsa qatorni o'chiradi",
      "Konflikt bo'lsa mavjud qatorni yangilaydi",
      "Har doim yangi qator qo'shadi",
      "Jadvalni qulflaydi"
     ],
     "answer": 1,
     "explain": "ON CONFLICT ... DO UPDATE noyoblik to'qnashuvida mavjud qatorni yangilaydi."
    },
    {
     "q": "RETURNING qismi nima uchun ishlatiladi?",
     "options": [
      "So'rovni bekor qilish uchun",
      "Faqat WHERE shartini yozish uchun",
      "Jadval nomini o'zgartirish uchun",
      "O'zgargan qatorlarning qiymatlarini qaytarish uchun"
     ],
     "answer": 3,
     "explain": "RETURNING INSERT/UPDATE/DELETE natijasida o'zgargan qatorlarni qaytaradi."
    }
   ]
  },
  {
   "id": 37,
   "title": "Tranzaksiyalar va ACID: hammasi yoki hech narsa",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Tranzaksiya</b> bir nechta amalni yagona birlik sifatida bajaradi: yo hammasi muvaffaqiyatli saqlanadi, yo hech biri. Bank o'tkazmasi klassik misol: bir hisobdan pul yechilib, ikkinchisiga qo'shilishi kerak. O'rtada xato bo'lsa, ikkala amal ham bekor qilinishi shart."
    },
    {
     "type": "code",
     "title": "pul-otkazmasi.sql",
     "code": "BEGIN;\n\nUPDATE talabalar SET ball = ball - 5 WHERE id = 1;\nUPDATE talabalar SET ball = ball + 5 WHERE id = 2;\n\nCOMMIT;",
     "output": "BEGIN\nUPDATE 1\nUPDATE 1\nCOMMIT",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Tranzaksiya ichida <code>SAVEPOINT</code> yaratib, faqat bir qismini bekor qilish mumkin. <code>ROLLBACK TO SAVEPOINT nomi</code> shu nuqtadan keyingi amallarni qaytaradi, undan oldingilari saqlanib qoladi. Bu murakkab jarayonlarda xatoni qayta ishlash uchun qulay. Tranzaksiya oxirida <code>COMMIT</code> yoki <code>ROLLBACK</code> majburiy."
    },
    {
     "type": "code",
     "title": "savepoint.sql",
     "code": "BEGIN;\n\nUPDATE kurslar SET narx = narx * 1.10 WHERE id = 1;\nSAVEPOINT narx_saqlangan;\n\nUPDATE kurslar SET narx = narx * 1.10 WHERE id = 2;\nROLLBACK TO SAVEPOINT narx_saqlangan;\n\nCOMMIT;",
     "output": "BEGIN\nUPDATE 1\nSAVEPOINT\nUPDATE 1\nROLLBACK\nCOMMIT\n\n-- 1-kurs narxi o'zgardi, 2-kurs o'zgarmadi.",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "ACID",
      "Ma'nosi",
      "Amaliy ko'rinishi"
     ],
     "rows": [
      [
       "Atomicity",
       "Hammasi yoki hech narsa",
       "Xatoda ROLLBACK"
      ],
      [
       "Consistency",
       "Baza qoidalari buzilmaydi",
       "Cheklovlar va kalitlar"
      ],
      [
       "Isolation",
       "Parallel tranzaksiyalar bir-biriga xalaqit bermaydi",
       "Isolation level"
      ],
      [
       "Durability",
       "Commitdan keyin ma'lumot saqlanadi",
       "WAL, fsync, zaxira"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Uzoq tranzaksiyadan saqlaning",
     "html": "Tranzaksiya ochiq turgan vaqtda qulflar ushlab turiladi, bu boshqa so'rovlarni kutishga majbur qiladi. Tarmoq uzilishi yoki ilova xatosi tranzaksiyani osilib qoldirishi mumkin. Har doim <code>try/finally</code> yoki ORM'ning tranzaksiya blokidan foydalanib, xatoda <code>ROLLBACK</code>ni kafolatlang. PostgreSQL'da <code>statement_timeout</code> va <code>idle_in_transaction_session_timeout</code> yordam beradi."
    }
   ],
   "quiz": [
    {
     "q": "Tranzaksiyadagi o'zgarishlarni doimiy saqlash uchun qaysi buyruq ishlatiladi?",
     "options": [
      "ROLLBACK",
      "COMMIT",
      "SAVEPOINT",
      "BEGIN"
     ],
     "answer": 1,
     "explain": "COMMIT tranzaksiyani yakunlab, o'zgarishlarni doimiy qiladi."
    },
    {
     "q": "ACID'ning Atomicity xususiyati nimani anglatadi?",
     "options": [
      "Har bir so'rov alohida tranzaksiya",
      "Tranzaksiya qismlari alohida saqlanishi mumkin",
      "Tranzaksiya to'liq bajariladi yoki umuman bajarilmaydi",
      "Ma'lumot faqat o'qiladi"
     ],
     "answer": 2,
     "explain": "Atomicity tranzaksiyani bo'linmas birlik qiladi: hammasi yoki hech narsa."
    },
    {
     "q": "SAVEPOINT nimaga yordam beradi?",
     "options": [
      "Tranzaksiyaning bir qismini bekor qilib, qolganini davom ettirishga",
      "Bazani zaxiralashga",
      "Indeks yaratishga",
      "Foydalanuvchi yaratishga"
     ],
     "answer": 0,
     "explain": "SAVEPOINT oraliq nuqta yaratadi; unga qaytish faqat keyingi amallarni bekor qiladi."
    }
   ]
  },
  {
   "id": 38,
   "title": "Izolyatsiya darajalari va parallel ishlash",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Bir vaqtda ishlayotgan tranzaksiyalar bir-birining ma'lumotini ko'rishi mumkin. <b>Izolyatsiya darajasi</b> qaysi g'alati holatlarga yo'l qo'yilishini belgilaydi. Uch asosiy anomaliya: <b>dirty read</b> (commit qilinmagan o'qish), <b>non-repeatable read</b> (bir tranzaksiyada ikki marta o'qishda qiymat o'zgarishi) va <b>phantom read</b> (yangi qatorlar paydo bo'lishi)."
    },
    {
     "type": "code",
     "title": "repeatable-read.sql",
     "code": "-- 1-sessiya\nBEGIN ISOLATION LEVEL REPEATABLE READ;\n\nSELECT ball FROM talabalar WHERE id = 1;\n\n-- 2-sessiya: UPDATE talabalar SET ball = 99 WHERE id = 1; COMMIT;\n\nSELECT ball FROM talabalar WHERE id = 1;\n\nCOMMIT;",
     "output": "BEGIN\n\n ball\n------\n   92\n(1 qator)\n\n ball\n------\n   92\n(1 qator)\n\nCOMMIT",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "REPEATABLE READ'da tranzaksiya boshidagi surat (snapshot) saqlanadi, shuning uchun ikkinchi o'qish bir xil qiymatni ko'radi. READ COMMITTED'da esa har bir so'rov eng so'nggi commit qilingan ma'lumotni ko'radi. PostgreSQL'da standart daraja READ COMMITTED, MySQL InnoDB'da REPEATABLE READ."
    },
    {
     "type": "code",
     "title": "read-committed.sql",
     "code": "-- 1-sessiya\nBEGIN ISOLATION LEVEL READ COMMITTED;\n\nSELECT ball FROM talabalar WHERE id = 1;\n\n-- 2-sessiya: UPDATE talabalar SET ball = 99 WHERE id = 1; COMMIT;\n\nSELECT ball FROM talabalar WHERE id = 1;\n\nCOMMIT;",
     "output": "BEGIN\n\n ball\n------\n   92\n(1 qator)\n\n ball\n------\n   99\n(1 qator)\n\nCOMMIT",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Daraja",
      "Dirty read",
      "Non-repeatable",
      "Phantom"
     ],
     "rows": [
      [
       "READ UNCOMMITTED",
       "Mumkin",
       "Mumkin",
       "Mumkin"
      ],
      [
       "READ COMMITTED",
       "Yo'q",
       "Mumkin",
       "Mumkin"
      ],
      [
       "REPEATABLE READ",
       "Yo'q",
       "Yo'q",
       "Standart bo'yicha yo'q"
      ],
      [
       "SERIALIZABLE",
       "Yo'q",
       "Yo'q",
       "Yo'q"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Qulflar va deadlock",
     "html": "Bir qatorni o'zgartirishdan oldin uni qulflash uchun <code>SELECT ... FOR UPDATE</code> ishlatiladi. Ikki tranzaksiya bir-birini kutib qolsa <b>deadlock</b> yuz beradi; baza bittasini bekor qiladi. Qulflarni bir xil tartibda olish, tranzaksiyalarni qisqa tutish va keraksiz <code>FOR UPDATE</code>dan qochish yordam beradi. PostgreSQL'da <code>SELECT ... FOR UPDATE SKIP LOCKED</code> navbat tizimlarida foydali."
    }
   ],
   "quiz": [
    {
     "q": "Dirty read nima?",
     "options": [
      "Bir tranzaksiyada ikki marta bir xil o'qish",
      "Indekssiz qidiruv",
      "Boshqa tranzaksiya commit qilmagan ma'lumotni o'qish",
      "Jadvalni butunlay o'chirish"
     ],
     "answer": 2,
     "explain": "Dirty read commit qilinmagan, keyin bekor qilinishi mumkin bo'lgan ma'lumotni o'qishdir."
    },
    {
     "q": "Qaysi izolyatsiya darajasi barcha uch anomaliyani ham bartaraf etadi?",
     "options": [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
     ],
     "answer": 3,
     "explain": "SERIALIZABLE eng qat'iy daraja bo'lib, dirty, non-repeatable va phantom read'larni istisno qiladi."
    },
    {
     "q": "SELECT ... FOR UPDATE nima qiladi?",
     "options": [
      "Faqat o'qish huquqini beradi",
      "Tanlangan qatorlarni tranzaksiya tugaguncha qulflaydi",
      "So'rovni tezlashtiradi",
      "Jadvalni o'chiradi"
     ],
     "answer": 1,
     "explain": "FOR UPDATE tanlangan qatorlarga yozish qulfini qo'yadi, boshqa tranzaksiyalar kutadi."
    }
   ]
  },
  {
   "id": 39,
   "title": "Saqlangan funksiyalar va protseduralar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Funksiya va protsedura — bazada saqlanadigan kod. <b>Funksiya</b> qiymat qaytaradi va <code>SELECT</code> ichida ishlatilishi mumkin. <b>Protsedura</b> odatda qiymat qaytarmaydi, <code>CALL</code> bilan chaqiriladi va bir nechta SQL amalini bajaradi. Ular mantiqni markazlashtirib, bir nechta ilova uchun umumiy qoida yaratadi."
    },
    {
     "type": "code",
     "title": "baho-funksiyasi.sql",
     "code": "CREATE FUNCTION baho_yorligi(ball INTEGER)\nRETURNS TEXT\nLANGUAGE SQL\nIMMUTABLE\nAS $$\n    SELECT CASE\n        WHEN ball >= 90 THEN 'A'\n        WHEN ball >= 80 THEN 'B'\n        WHEN ball >= 70 THEN 'C'\n        ELSE 'D'\n    END;\n$$;",
     "output": "CREATE FUNCTION\nFunksiya \"baho_yorligi\" yaratildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "funktsiyani-chaqirish.sql",
     "code": "SELECT ism,\n       ball,\n       baho_yorligi(ball) AS baho\nFROM talabalar\nWHERE id <= 4\nORDER BY id;",
     "output": "ism     | ball | baho\n--------+------+------\nAziza   |   92 | A\nBek     |   78 | C\nDilnoza |   88 | B\nJasur   |   65 | D",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>LANGUAGE SQL</code> oddiy SQL tanasini bildiradi. Murakkab mantiq uchun PostgreSQL'da <code>plpgsql</code>, MySQL'da o'zining protsedura tili ishlatiladi. <code>IMMUTABLE</code> funksiya bir xil kirish uchun doim bir xil natija qaytarishini bildiradi va optimizatorga yordam beradi. Ma'lumot o'qiyotgan funksiya <code>STABLE</code>, jadvalni o'zgartiruvchi funksiya <code>VOLATILE</code> bo'ladi."
    },
    {
     "type": "code",
     "title": "protsedura.sql",
     "code": "CREATE PROCEDURE kurs_narxini_oshir(kurs_id INTEGER, foiz NUMERIC)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    UPDATE kurslar\n    SET narx = ROUND(narx * (1 + foiz / 100))\n    WHERE id = kurs_id;\nEND;\n$$;\n\nCALL kurs_narxini_oshir(1, 10);\n\nSELECT nom, narx FROM kurslar WHERE id = 1;",
     "output": "CREATE PROCEDURE\nCALL\n nom    | narx\n--------+--------\n Python | 495000\n(1 qator)",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Xususiyat",
      "Funksiya",
      "Protsedura"
     ],
     "rows": [
      [
       "Qiymat qaytaradi",
       "Ha",
       "Odatda yo'q"
      ],
      [
       "Chaqirish",
       "<code>SELECT funksiya(...)</code>",
       "<code>CALL protsedura(...)</code>"
      ],
      [
       "Tranzaksiya boshqaruvi",
       "Cheklangan",
       "Ko'pincha mumkin"
      ],
      [
       "SELECT ichida",
       "Ha",
       "Yo'q"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Xavfsizlik va versiyalash",
     "html": "Saqlangan kodni migratsiya bilan birga versiyalang. <code>SECURITY DEFINER</code> funksiya uni yaratgan foydalanuvchi huquqlari bilan ishlaydi; bu qulay, lekin xavfli — <code>search_path</code>ni qat'iy belgilang. Dinamik SQL yozsangiz, parametrlarni albatta ajratib bering. MySQL'da protsedura yaratishda <code>DELIMITER</code> o'zgartiriladi, chunki ichki nuqtali vergul buyruqni erta tugatadi."
    }
   ],
   "quiz": [
    {
     "q": "Funksiya va protsedura orasidagi asosiy farq nima?",
     "options": [
      "Funksiya faqat MySQL'da ishlaydi",
      "Protsedura SELECT ichida ishlaydi",
      "Ular butunlay bir xil",
      "Funksiya qiymat qaytaradi, protsedura odatda qaytarmaydi"
     ],
     "answer": 3,
     "explain": "Funksiya qiymat qaytarib SELECT ichida ishlatiladi; protsedura CALL bilan chaqiriladi."
    },
    {
     "q": "Protsedurani chaqirish uchun qaysi buyruq ishlatiladi?",
     "options": [
      "CALL",
      "EXECUTE FUNCTION",
      "BEGIN",
      "SELECT"
     ],
     "answer": 0,
     "explain": "Protsedura CALL protsedura_nomi(...) bilan chaqiriladi."
    },
    {
     "q": "IMMUTABLE belgisi nimani bildiradi?",
     "options": [
      "Funksiya faqat bir marta ishlaydi",
      "Funksiya tranzaksiyani bekor qiladi",
      "Funksiya bir xil kirish uchun doim bir xil natija qaytaradi",
      "Funksiya jadvalni o'zgartiradi"
     ],
     "answer": 2,
     "explain": "IMMUTABLE funksiya tashqi holatga bog'liq emas va bir xil argumentlar uchun bir xil natija beradi."
    }
   ]
  },
  {
   "id": 40,
   "title": "Triggerlar: o'zgarishlarga avtomatik javob",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Trigger</b> — jadvaldagi <code>INSERT</code>, <code>UPDATE</code> yoki <code>DELETE</code> hodisasiga bog'langan avtomatik kod. U audit yozish, tarix saqlash, murakkab tekshiruvlar yoki hosila ustunlarni yangilash uchun ishlatiladi. Trigger ilova kodidan yashirin ishlaydi, shuning uchun uni hujjatlashtirish juda muhim."
    },
    {
     "type": "code",
     "title": "audit-jadvali.sql",
     "code": "CREATE TABLE audit_log (\n    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    talaba_id INTEGER NOT NULL,\n    eski_ball INTEGER,\n    yangi_ball INTEGER,\n    ozgardi TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n);",
     "output": "CREATE TABLE\nAudit jadvali yaratildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "PostgreSQL'da trigger funksiyasi <code>TRIGGER</code> turini qaytaradi va <code>NEW</code> hamda <code>OLD</code> yozuvlariga murojaat qiladi: <code>NEW</code> — yangi qiymatlar, <code>OLD</code> — eski qiymatlar. <code>AFTER UPDATE OF ball</code> trigger faqat shu ustun o'zgarganda ishga tushadi."
    },
    {
     "type": "code",
     "title": "ball-audit-trigger.sql",
     "code": "CREATE FUNCTION ball_audit() RETURNS TRIGGER AS $$\nBEGIN\n    IF NEW.ball IS DISTINCT FROM OLD.ball THEN\n        INSERT INTO audit_log (talaba_id, eski_ball, yangi_ball)\n        VALUES (OLD.id, OLD.ball, NEW.ball);\n    END IF;\n    RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_ball_audit\nAFTER UPDATE OF ball ON talabalar\nFOR EACH ROW EXECUTE FUNCTION ball_audit();",
     "output": "CREATE FUNCTION\nCREATE TRIGGER",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "triggerni-tekshirish.sql",
     "code": "UPDATE talabalar\nSET ball = 93\nWHERE id = 1;\n\nSELECT talaba_id, eski_ball, yangi_ball\nFROM audit_log\nORDER BY id DESC\nLIMIT 1;",
     "output": "UPDATE 1\n\n talaba_id | eski_ball | yangi_ball\n-----------+-----------+-----------\n         1 |        92 |        93\n(1 qator)",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Turi",
      "Qachon ishlaydi",
      "Misol"
     ],
     "rows": [
      [
       "BEFORE",
       "Amaldan oldin",
       "Qiymatni to'g'rilash yoki rad etish"
      ],
      [
       "AFTER",
       "Amaldan keyin",
       "Audit yozish"
      ],
      [
       "FOR EACH ROW",
       "Har bir qator uchun",
       "Eski/yangi qiymatlarni ko'rish"
      ],
      [
       "FOR EACH STATEMENT",
       "Butun amal uchun bir marta",
       "Ommaviy amal statistikasi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Yashirin mantiq xavfi",
     "html": "Trigger xatosi butun <code>UPDATE</code>ni bekor qiladi, shuning uchun uning ichida sekin yoki ishonchsiz amal qilmang. Trigger boshqa triggerni ishga tushirib, cheksiz zanjir yaratmasin. PostgreSQL'da trigger funksiyalari <code>SECURITY DEFINER</code> bo'lsa, huquqlarni alohida tekshiring. MySQL'da trigger sintaksisi boshqacha: <code>CREATE TRIGGER ... BEFORE UPDATE ON ... FOR EACH ROW BEGIN ... END;</code>."
    }
   ],
   "quiz": [
    {
     "q": "Trigger qachon ishga tushadi?",
     "options": [
      "Jadvaldagi INSERT, UPDATE yoki DELETE hodisasida avtomatik",
      "Faqat SELECTda",
      "Baza qayta ishga tushganda",
      "Faqat qo'lda chaqirilganda"
     ],
     "answer": 0,
     "explain": "Trigger jadvaldagi tegishli DML hodisasiga bog'lanib, avtomatik bajariladi."
    },
    {
     "q": "PostgreSQL trigger funksiyasida NEW nimani bildiradi?",
     "options": [
      "Eski qator qiymatlarini",
      "Yangi qator qiymatlarini",
      "Jadval nomini",
      "Tranzaksiya ID'sini"
     ],
     "answer": 1,
     "explain": "NEW yangi kiritilayotgan yoki yangilanayotgan qator qiymatlarini beradi; OLD esa eskisini."
    },
    {
     "q": "Triggerning asosiy xavflaridan biri nima?",
     "options": [
      "U har doim sekin ishlaydi",
      "Uni SELECT bilan chaqirib bo'lmaydi",
      "U faqat bir marta ishlaydi",
      "Yashirin mantiq va kutilmagan zanjirli ishga tushish"
     ],
     "answer": 3,
     "explain": "Trigger ilova kodida ko'rinmaydi va boshqa triggerlarni ishga tushirib, murakkab zanjir yaratishi mumkin."
    }
   ]
  },
  {
   "id": 41,
   "title": "JSON ma'lumotlar: JSONB, operatorlar va indekslar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Ba'zi ma'lumotlar qat'iy jadvalga sig'maydi: sozlamalar, foydalanuvchi profili, tashqi API javobi. PostgreSQL'da <code>JSON</code> va <code>JSONB</code> turlari shunday ma'lumotni saqlaydi. <b>JSONB</b> ikkilik formatda saqlanadi, qayta tahlil qilinmaydi va indekslanadi, shuning uchun amalda ko'pincha u tanlanadi. MySQL'da <code>JSON</code> turi mavjud."
    },
    {
     "type": "table",
     "head": [
      "Operator",
      "Vazifasi",
      "Natija turi"
     ],
     "rows": [
      [
       "<code>profil -> 'shahar'</code>",
       "Kalit bo'yicha JSON qiymati",
       "JSONB"
      ],
      [
       "<code>profil ->> 'shahar'</code>",
       "Kalit bo'yicha matn",
       "TEXT"
      ],
      [
       "<code>profil #> '{a,b}'</code>",
       "Ichki yo'l bo'yicha JSON",
       "JSONB"
      ],
      [
       "<code>profil @> '{\"faol\": true}'</code>",
       "O'z ichiga oladi",
       "BOOLEAN"
      ],
      [
       "<code>profil ? 'email'</code>",
       "Kalit mavjudmi",
       "BOOLEAN"
      ],
      [
       "<code>jsonb_array_elements(...)</code>",
       "Massivni qatorlarga ochadi",
       "Set"
      ]
     ]
    },
    {
     "type": "code",
     "title": "json-oqish.sql",
     "code": "SELECT id,\n       ism,\n       profil->>'shahar' AS shahar,\n       profil->'ko''nikmalar' AS konikmalar\nFROM talabalar_json\nWHERE id <= 3\nORDER BY id;",
     "output": "id | ism     | shahar    | konikmalar\n---+---------+-----------+----------------------\n 1 | Aziza   | Toshkent  | [\"SQL\", \"Python\"]\n 2 | Bek     | Samarqand | [\"JavaScript\"]\n 3 | Dilnoza | Buxoro    | [\"SQL\", \"Excel\"]",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>-></code> JSON qiymatini, <code>->></code> esa oddiy matnni qaytaradi. Matnni <code>WHERE ism = ...</code> kabi taqqoslashda ishlatish uchun <code>->></code> kerak. Massiv ichida qidirish uchun <code>@></code> operatori va <code>JSONB</code> konteyner tekshiruvi qulay. JSON maydonlarini tez-tez filtrlasangiz, <code>GIN</code> indeks yaratish mumkin."
    },
    {
     "type": "code",
     "title": "json-index.sql",
     "code": "CREATE INDEX idx_talabalar_json_profil\nON talabalar_json USING GIN (profil);\n\nSELECT ism\nFROM talabalar_json\nWHERE profil->'ko''nikmalar' @> '[\"SQL\"]'::jsonb\nORDER BY ism;",
     "output": "CREATE INDEX\n\nism\n---------\nAziza\nDilnoza",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "JSON — hamma narsa uchun emas",
     "html": "Tez-tez filtrlanadigan, bog'lanadigan va cheklovlar bilan himoyalanadigan ma'lumotni oddiy ustunlarda saqlang. JSON moslashuvchan, lekin sxema va <code>FOREIGN KEY</code> nazoratini yo'qotadi. PostgreSQL'da <code>JSONB</code> yozishda biroz sekinroq, o'qishda tezroq. MySQL'da <code>JSON_EXTRACT(profil, '$.shahar')</code> yoki <code>profil->>'$.shahar'</code> ishlatiladi. Katta JSON'ni har bir so'rovda to'liq o'qishdan saqlaning."
    }
   ],
   "quiz": [
    {
     "q": "JSONB'dagi qiymatni oddiy matn sifatida olish uchun qaysi operator ishlatiladi?",
     "options": [
      "->",
      "->>",
      "@>",
      "?"
     ],
     "answer": 1,
     "explain": "->> JSON qiymatini matnga aylantirib qaytaradi; -> esa JSON turini saqlaydi."
    },
    {
     "q": "@> operatori nimani tekshiradi?",
     "options": [
      "Massiv uzunligini",
      "Kalitni o'chiradi",
      "Chapdagi JSON o'ngdagini o'z ichiga oladimi",
      "Ikki son tengmi"
     ],
     "answer": 2,
     "explain": "@> konteyner operatori chap JSON qiymat o'ngdagi JSON fragmentini o'z ichiga olishini tekshiradi."
    },
    {
     "q": "JSONB ustunidagi murakkab qidiruvni tezlashtirish uchun qaysi indeks mos?",
     "options": [
      "GIN",
      "Hash",
      "Hech qanday indeks mumkin emas",
      "B-tree faqat"
     ],
     "answer": 0,
     "explain": "GIN JSONB kalitlari, massivlari va konteyner qidiruvlari uchun mos indeks turi."
    }
   ]
  },
  {
   "id": 42,
   "title": "To'liq matnli qidiruv: tsvector, tsquery va GIN",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<code>LIKE '%so'z%'</code> kichik jadvalda ishlaydi, lekin katta matnda sekin va morfologiyani tushunmaydi. <b>To'liq matnli qidiruv</b> matnni so'zlarga ajratadi, ildizga keltiradi va indeks yordamida tez qidiradi. PostgreSQL'da <code>to_tsvector</code> hujjatni, <code>to_tsquery</code> qidiruv so'rovini tayyorlaydi, <code>@@</code> esa ularni moslashtiradi."
    },
    {
     "type": "code",
     "title": "matnli-qidiruv.sql",
     "code": "SELECT sarlavha, muallif\nFROM maqolalar\nWHERE to_tsvector('simple', sarlavha || ' ' || matn)\n      @@ to_tsquery('simple', 'indeks:* | normalizatsiya')\nORDER BY sarlavha;",
     "output": "sarlavha                  | muallif\n--------------------------+------------------\nMa'lumotlar bazasi dizayni | Nodira Yusupova\nSQL indekslari             | Dilshod Rahimov",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "<code>to_tsquery</code>da <code>&</code> — VA, <code>|</code> — YOKI, <code>!</code> — EMAS. <code>indeks:*</code> kabi prefiks qidiruvi shu ildizdan boshlanadigan so'zlarni ham qamrab oladi — o'zbekcha qo'shimchalar uchun bu muhim. <code>plainto_tsquery</code> foydalanuvchi kiritgan oddiy matnni xavfsiz so'rovga aylantiradi. <code>'simple'</code> konfiguratsiyasi tilga xos qo'shimchalarni olib tashlamaydi; ingliz tili uchun <code>'english'</code>, lug'at qo'shilsa boshqa tillar uchun mos konfiguratsiya ishlatiladi."
    },
    {
     "type": "code",
     "title": "fts-index.sql",
     "code": "CREATE INDEX idx_maqolalar_qidiruv\nON maqolalar\nUSING GIN (to_tsvector('simple', sarlavha || ' ' || matn));\n\nEXPLAIN\nSELECT sarlavha\nFROM maqolalar\nWHERE to_tsvector('simple', sarlavha || ' ' || matn)\n      @@ to_tsquery('simple', 'indeks:*');",
     "output": "CREATE INDEX\n\nBitmap Heap Scan on maqolalar  (cost=12.05..16.07 rows=1 width=32)\n  Recheck Cond: (to_tsvector('simple'::regconfig, ((sarlavha || ' '::text) || matn)) @@ to_tsquery('simple'::regconfig, 'indeks:*'::text))\n  ->  Bitmap Index Scan on idx_maqolalar_qidiruv  (cost=0.00..12.05 rows=1 width=0)\n        Index Cond: (to_tsvector('simple'::regconfig, ((sarlavha || ' '::text) || matn)) @@ to_tsquery('simple'::regconfig, 'indeks:*'::text))",
     "outputLabel": "Reja"
    },
    {
     "type": "table",
     "head": [
      "Yondashuv",
      "Kuchli tomoni",
      "Cheklovi"
     ],
     "rows": [
      [
       "<code>LIKE '%matn%'</code>",
       "Oddiy, indekssiz ham ishlaydi",
       "Sekin, morfologiya yo'q"
      ],
      [
       "<code>to_tsvector @@ to_tsquery</code>",
       "So'zlar, operatorlar, GIN indeks",
       "Til konfiguratsiyasi kerak"
      ],
      [
       "<code>pg_trgm</code>",
       "Xatolarga chidamli o'xshashlik",
       "Qo'shimcha kengaytma"
      ],
      [
       "MySQL <code>MATCH ... AGAINST</code>",
       "To'liq matn indeksi",
       "Minimal so'z uzunligi sozlamasi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Indeks ifodasi aynan mos bo'lsin",
     "html": "GIN indeks qaysi ifoda ustida yaratilgan bo'lsa, so'rovdagi ifoda ham aynan shunday bo'lishi kerak. Agar indeks <code>to_tsvector('simple', sarlavha || ' ' || matn)</code> bo'lsa, so'rovda ham shu konfiguratsiya va shu birlashtirish ishlatilsin. MySQL'da <code>FULLTEXT</code> indeks va <code>MATCH(col) AGAINST('soz' IN BOOLEAN MODE)</code> ishlatiladi; SQLite'da <code>FTS5</code> virtual jadvali mavjud."
    }
   ],
   "quiz": [
    {
     "q": "PostgreSQL'da to'liq matnli qidiruvda qaysi operator moslikni tekshiradi?",
     "options": [
      "LIKE",
      "@>",
      "@@",
      "->>"
     ],
     "answer": 2,
     "explain": "@@ tsvector va tsquery o'rtasidagi moslikni tekshiradi."
    },
    {
     "q": "To'liq matnli qidiruv indeksi uchun qaysi tur odatiy?",
     "options": [
      "B-tree",
      "Hash",
      "GiST faqat",
      "GIN"
     ],
     "answer": 3,
     "explain": "GIN tsvector bo'yicha teskari indeks yaratib, so'zlar bo'yicha tez qidiruv beradi."
    },
    {
     "q": "LIKE '%so'z%' nima uchun katta jadvalda sekin?",
     "options": [
      "U indeksni o'chiradi",
      "Boshidagi % oddiy B-tree indeksdan foydalanishga to'sqinlik qiladi",
      "LIKE faqat sonlar bilan ishlaydi",
      "LIKE har doim xato beradi"
     ],
     "answer": 1,
     "explain": "Boshidagi wildcard tufayli baza ko'p hollarda butun jadvalni skanerlashga majbur bo'ladi."
    }
   ]
  },
  {
   "id": 43,
   "title": "Migratsiyalar: sxemani xavfsiz va versiyalangan o'zgartirish",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Migratsiya</b> — sxema o'zgarishini versiyalangan SQL fayl sifatida saqlash usuli. Har bir o'zgarish alohida fayl, tartib raqami yoki vaqt belgisi bilan yoziladi va barcha muhitlarda bir xil tartibda qo'llanadi. Bu jamoaga o'zgarishlar tarixini, qaytarish yo'lini va takrorlanuvchi deploy'ni beradi."
    },
    {
     "type": "code",
     "title": "V2026_01_15__telefon.sql",
     "code": "-- Up migratsiya\nALTER TABLE talabalar\nADD COLUMN telefon TEXT;\n\nCREATE INDEX idx_talabalar_telefon\nON talabalar (telefon);",
     "output": "ALTER TABLE\nCREATE INDEX",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Har bir migratsiya uchun <b>down</b> (qaytarish) skriptini ham yozish foydali, garchi ba'zi jamoalar uni ishlatmasa ham. Qaytarish skripti ma'lumotni yo'qotmasligi kerak: ustunni o'chirishdan oldin undagi ma'lumot boshqa joyga ko'chirilganiga ishonch hosil qiling. Migratsiya faylini qo'llangandan keyin tahrirlash mumkin emas — yangi migratsiya yozing."
    },
    {
     "type": "code",
     "title": "U2026_01_15__telefon.sql",
     "code": "-- Down migratsiya\nDROP INDEX IF EXISTS idx_talabalar_telefon;\n\nALTER TABLE talabalar\nDROP COLUMN IF EXISTS telefon;",
     "output": "DROP INDEX\nALTER TABLE",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Qoida",
      "Sababi"
     ],
     "rows": [
      [
       "Har bir migratsiya — alohida fayl",
       "Tarix va review osonlashadi"
      ],
      [
       "Faylni qo'llangandan keyin o'zgartirmaslik",
       "Muhitlar orasida nomuvofiqlik bo'lmasligi uchun"
      ],
      [
       "Tranzaksiya imkonini tekshirish",
       "Xato bo'lsa qisman o'zgarish qolmasligi uchun"
      ],
      [
       "Katta o'zgarishni bosqichlarga bo'lish",
       "Bloklash va uzoq lock'lardan qochish"
      ],
      [
       "Deploy oldidan zaxira",
       "Qaytarish uchun xavfsizlik tarmog'i"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Expand-contract usuli",
     "html": "Ustun nomini yoki turini birdaniga o'zgartirish ilovani buzishi mumkin. <b>Expand</b> bosqichida yangi ustun qo'shiladi va ikkala ustun parallel yoziladi; <b>contract</b> bosqichida eski ustun olib tashlanadi. Bu usul nol to'xtash (zero-downtime) deploy'ga yordam beradi. Flyway, Liquibase, Alembic, Prisma Migrate va Rails Migrations kabi vositalar migratsiyalarni tartib bilan boshqaradi."
    }
   ],
   "quiz": [
    {
     "q": "Migratsiya faylini qo'llangandan keyin o'zgartirish nega tavsiya etilmaydi?",
     "options": [
      "SQL sintaksisi buziladi",
      "Baza avtomatik o'chadi",
      "Fayl hajmi kattalashadi",
      "Muhitlarda allaqachon bajarilgan versiya bilan nomuvofiqlik paydo bo'ladi"
     ],
     "answer": 3,
     "explain": "Qo'llangan migratsiya tarixga yozilgan; uni tahrirlash boshqa muhitlardagi holat bilan farq keltiradi."
    },
    {
     "q": "Down migratsiyaning vazifasi nima?",
     "options": [
      "Oldingi migratsiya o'zgarishini qaytarish",
      "Ma'lumotni o'chirish",
      "Indeksni avtomatik tanlash",
      "Yangi jadval yaratish"
     ],
     "answer": 0,
     "explain": "Down migratsiya oxirgi o'zgarishni bekor qilib, oldingi sxema holatiga qaytaradi."
    },
    {
     "q": "Expand-contract usulida birinchi qadam nima?",
     "options": [
      "Faqat indeksni o'chirish",
      "Eski ustunni darhol o'chirish",
      "Yangi ustun qo'shib, ikkala ustunni parallel ishlatish",
      "Bazani to'liq qayta yaratish"
     ],
     "answer": 2,
     "explain": "Avval yangi tuzilma qo'shiladi va parallel yoziladi, keyin eski tuzilma xavfsiz olib tashlanadi."
    }
   ]
  },
  {
   "id": 44,
   "title": "Ruxsatlar va xavfsizlik: eng kam huquq tamoyili",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Baza xavfsizligi foydalanuvchi va rollardan boshlanadi. Har bir ilova yoki xodim faqat kerakli huquqqa ega bo'lishi kerak — bu <b>eng kam huquq</b> tamoyili. PostgreSQL'da <code>CREATE ROLE</code>, <code>GRANT</code> va <code>REVOKE</code> orqali ruxsatlar boshqariladi. MySQL'da ham shunga o'xshash <code>GRANT</code> sintaksisi bor."
    },
    {
     "type": "code",
     "title": "analitik-ruxsatlari.sql",
     "code": "CREATE ROLE analitik LOGIN PASSWORD 'kuchli-parol';\n\nGRANT CONNECT ON DATABASE maktab TO analitik;\nGRANT USAGE ON SCHEMA public TO analitik;\n\nGRANT SELECT ON talabalar, kurslar TO analitik;\n\nREVOKE INSERT, UPDATE, DELETE ON talabalar FROM analitik;",
     "output": "CREATE ROLE\nGRANT\nGRANT\nGRANT\nREVOKE",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Analitik faqat o'qiy oladi, o'zgartira olmaydi. <code>REVOKE</code> huquqni qaytarib oladi. Rollarni guruhlab, <code>GRANT rol TO foydalanuvchi</code> bilan boshqarish qulay. Ilova uchun alohida foydalanuvchi yarating, unga jadval egasi huquqini bermang. Parolni kodga yozmang — muhit o'zgaruvchisi yoki maxfiy saqlash xizmatidan oling."
    },
    {
     "type": "code",
     "title": "sql-injection-xavfli.sql",
     "code": "-- Ilova foydalanuvchi kiritgan matnni to'g'ridan-to'g'ri uladi:\nSELECT id, ism\nFROM talabalar\nWHERE ism = '' OR 1=1; -- ';",
     "output": "id | ism\n---+---------\n 1 | Aziza\n 2 | Bek\n 3 | Dilnoza\n 4 | Jasur\n 5 | Nodira\n 6 | Sardor\n 7 | Malika\n 8 | Otabek",
     "outputLabel": "Barcha qatorlar qaytdi"
    },
    {
     "type": "code",
     "title": "parametrli-so'rov.sql",
     "code": "PREPARE talaba_qidiruv (TEXT) AS\nSELECT id, ism\nFROM talabalar\nWHERE ism = $1;\n\nEXECUTE talaba_qidiruv('Aziza');",
     "output": "PREPARE\n\n id | ism\n----+-------\n  1 | Aziza\n(1 qator)",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Xavf",
      "Himoya"
     ],
     "rows": [
      [
       "SQL injection",
       "Parametrli so'rov, ORM, ruxsatlar"
      ],
      [
       "Ortiqcha huquq",
       "Eng kam huquq, alohida rollar"
      ],
      [
       "Parolning kodda ochiqligi",
       "Maxfiy saqlash, muhit o'zgaruvchilari"
      ],
      [
       "Ma'lumotni to'liq ko'rish",
       "View, row-level security, ustun ruxsatlari"
      ],
      [
       "Audit yo'qligi",
       "Loglar, trigger, kirish monitoringi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Injection faqat tirnoq bilan emas",
     "html": "Foydalanuvchi kiritgan qiymatni <code>WHERE ism = '\"+ism+\"'</code> kabi birlashtirish xavfli. Raqamli maydonlar, <code>ORDER BY</code> ustuni va <code>LIMIT</code> ham injection manbai bo'lishi mumkin. <code>ORDER BY</code> uchun dinamik ustun nomini oq ro'yxatdan tanlang. PostgreSQL'da row-level security siyosatlari foydalanuvchi faqat o'z qatorlarini ko'rishini ta'minlaydi. Barcha imtiyozli amallarni audit logga yozing."
    }
   ],
   "quiz": [
    {
     "q": "Foydalanuvchiga faqat o'qish huquqini berish uchun qaysi buyruq ishlatiladi?",
     "options": [
      "GRANT SELECT ON ...",
      "REVOKE SELECT ON ...",
      "DROP ROLE",
      "CREATE INDEX"
     ],
     "answer": 0,
     "explain": "GRANT SELECT jadval ustida faqat o'qish huquqini beradi."
    },
    {
     "q": "Eng kam huquq tamoyili nimani talab qiladi?",
     "options": [
      "Har kimga admin huquqi berish",
      "Foydalanuvchiga faqat ish uchun zarur huquqlarni berish",
      "Barcha huquqlarni vaqtincha o'chirish",
      "Faqat jadval egasiga ruxsat berish"
     ],
     "answer": 1,
     "explain": "Foydalanuvchi faqat o'z vazifasini bajarish uchun kerakli minimal huquqlarga ega bo'lishi kerak."
    },
    {
     "q": "SQL injection'ning eng ishonchli oldini qanday olinadi?",
     "options": [
      "Faqat kichik harflarda yozish",
      "Indeks yaratish",
      "So'rovdagi tirnoqlarni olib tashlash",
      "Parametrlangan so'rovlar va foydalanuvchi kiritishini ajratish"
     ],
     "answer": 3,
     "explain": "Qiymatlarni parametr sifatida uzatish ularning SQL kodiga aylanishini oldini oladi."
    }
   ]
  },
  {
   "id": 45,
   "title": "Zaxira va tiklash: RPO, RTO va sinov",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Zaxira — ma'lumot yo'qolishidan himoya. Ikki muhim ko'rsatkich bor: <b>RPO</b> (qancha ma'lumot yo'qotishga ruxsat) va <b>RTO</b> (tiklash qancha vaqt olishi mumkin). Zaxira rejasi texnologiya bilan birga jarayonni ham qamrab oladi: kim zaxira oladi, qayerda saqlaydi va tiklashni qanday sinovdan o'tkazadi."
    },
    {
     "type": "code",
     "title": "jadval-zaxirasi.sql",
     "code": "COPY (\n    SELECT id, ism, ball, kurs_id\n    FROM talabalar\n    ORDER BY id\n)\nTO '/var/backups/talabalar.csv'\nWITH (FORMAT csv, HEADER true);",
     "output": "COPY 8",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Kichik jadval yoki hisobotni zaxiralash uchun <code>COPY ... TO</code> qulay. Butun baza uchun <code>pg_dump</code> (PostgreSQL) yoki <code>mysqldump</code> (MySQL) ishlatiladi. Katta bazada physical backup va write-ahead log (WAL) yoki binlog orqali point-in-time recovery (PITR) qo'llanadi. Zaxira faylini boshqa disk yoki bulutga nusxalash shart."
    },
    {
     "type": "code",
     "title": "zaxiradan-tiklash.sql",
     "code": "CREATE TABLE talabalar_zaxira\n(LIKE talabalar INCLUDING ALL);\n\nCOPY talabalar_zaxira\nFROM '/var/backups/talabalar.csv'\nWITH (FORMAT csv, HEADER true);\n\nSELECT COUNT(*) AS tiklangan\nFROM talabalar_zaxira;",
     "output": "CREATE TABLE\nCOPY 8\n tiklangan\n-----------\n         8\n(1 qator)",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Zaxira turi",
      "Nimani saqlaydi",
      "Tiklash"
     ],
     "rows": [
      [
       "Logical (pg_dump, mysqldump)",
       "SQL buyruqlari yoki arxiv",
       "Yangi bazaga yuklash"
      ],
      [
       "Physical",
       "Fayl tizimi darajasidagi nusxa",
       "To'liq klaster"
      ],
      [
       "WAL / binlog",
       "O'zgarishlar jurnali",
       "PITR, aniq vaqtga qaytarish"
      ],
      [
       "Snapshot",
       "Disk holati",
       "Tez, lekin ilova bilan moslashtirish kerak"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Tiklanmagan zaxira — zaxira emas",
     "html": "Har oy kamida bir marta zaxirani alohida muhitga tiklab ko'ring. <code>pg_restore --list</code> bilan arxiv tarkibini tekshiring, tiklash vaqtini o'lchang. Zaxirani shifrlang, kirishni cheklang va saqlash muddatini belgilang. <code>pg_dump</code> bir vaqtning o'zida izchil snapshot beradi, lekin juda katta bazada uzoq davom etishi mumkin. PITR uchun WAL arxivlari doimiy ravishda boshqa joyga ko'chirilishi kerak."
    }
   ],
   "quiz": [
    {
     "q": "RPO nimani bildiradi?",
     "options": [
      "Tiklash uchun ruxsat etilgan maksimal vaqt",
      "Yo'qotishga ruxsat etilgan maksimal ma'lumot miqdori yoki vaqt oralig'i",
      "Zaxira faylining hajmi",
      "Indekslar soni"
     ],
     "answer": 1,
     "explain": "RPO — recovery point objective, ya'ni qancha ma'lumot yo'qotishga ruxsat berilgani."
    },
    {
     "q": "Point-in-time recovery qaysi mexanizmga tayanadi?",
     "options": [
      "Faqat view'ga",
      "Faqat CSV faylga",
      "WAL yoki binlog jurnallariga",
      "Faqat indeksga"
     ],
     "answer": 2,
     "explain": "WAL/binlog o'zgarishlar tarixini beradi va bazani aniq vaqtga qaytarish imkonini yaratadi."
    },
    {
     "q": "Zaxira strategiyasida eng muhim amaliy tekshiruv nima?",
     "options": [
      "Tiklashni muntazam sinovdan o'tkazish",
      "Faqat zaxira hajmini o'lchash",
      "Zaxirani asosiy diskda saqlash",
      "Zaxira faylini hech ochmaslik"
     ],
     "answer": 0,
     "explain": "Zaxira faqat tiklash muvaffaqiyatli bo'lganda qiymatga ega; sinov majburiy."
    }
   ]
  },
  {
   "id": 46,
   "title": "PostgreSQL va MySQL: amaliy farqlar",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "PostgreSQL va MySQL — eng ko'p ishlatiladigan ochiq kodli relatsion bazalar. Ikkalasi ham SQL standartining katta qismini qo'llab-quvvatlaydi, lekin sintaksis, turlar va xatti-harakatlarda farq bor. Loyiha uchun bazani tanlashda jamoa tajribasi, hosting, replikatsiya va kengaytmalar ham hisobga olinadi."
    },
    {
     "type": "table",
     "head": [
      "Mavzu",
      "PostgreSQL",
      "MySQL"
     ],
     "rows": [
      [
       "Avto ID",
       "<code>GENERATED ... AS IDENTITY</code> yoki <code>serial</code>",
       "<code>AUTO_INCREMENT</code>"
      ],
      [
       "Qaytarish",
       "<code>RETURNING</code>",
       "Cheklangan; <code>LAST_INSERT_ID()</code>"
      ],
      [
       "JSON",
       "<code>JSONB</code> (indekslanadi)",
       "<code>JSON</code>"
      ],
      [
       "Upsert",
       "<code>ON CONFLICT</code>",
       "<code>ON DUPLICATE KEY UPDATE</code>"
      ],
      [
       "DDL tranzaksiyasi",
       "Ha",
       "Ko'p hollarda yo'q"
      ],
      [
       "Standart izolyatsiya",
       "READ COMMITTED",
       "REPEATABLE READ (InnoDB)"
      ],
      [
       "Matn qidiruvi",
       "<code>tsvector</code> + GIN",
       "<code>FULLTEXT</code> + MATCH"
      ]
     ]
    },
    {
     "type": "code",
     "title": "postgresql-namuna.sql",
     "code": "CREATE TABLE demo_pg (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    nom TEXT NOT NULL,\n    meta JSONB\n);\n\nINSERT INTO demo_pg (nom, meta)\nVALUES ('SQL', '{\"daraja\":\"boshlovchi\"}')\nRETURNING id, nom;",
     "output": "CREATE TABLE\nINSERT 0 1\n id | nom\n----+-----\n  1 | SQL\n(1 qator)",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "mysql-namuna.sql",
     "code": "CREATE TABLE demo_mysql (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    nom VARCHAR(100) NOT NULL,\n    meta JSON\n);\n\nINSERT INTO demo_mysql (nom, meta)\nVALUES ('SQL', '{\"daraja\":\"boshlovchi\"}');\n\nSELECT LAST_INSERT_ID() AS id;",
     "output": "Query OK, 0 rows affected\nQuery OK, 1 row affected\n\n+----+\n| id |\n+----+\n|  1 |\n+----+",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "MySQL'da ma'lumotlar bazasi va jadval nomlari operatsion tizimga qarab katta-kichik harfga sezgir bo'lishi mumkin; PostgreSQL'da qo'shtirnoqsiz nomlar kichik harfga keltiriladi. MySQL'da <code>LIMIT offset, count</code>, PostgreSQL'da <code>LIMIT count OFFSET offset</code> ishlatiladi. Ikkalasi ham <code>EXPLAIN</code> beradi, lekin reja formati farq qiladi."
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Ko'chma SQL yozish",
     "html": "Asosiy SQL'ni standart shaklda yozing, dialektga xos qismlarni kichik adapterga ajrating. Sana funksiyalari, string birlashtirish, upsert va JSON operatorlari eng ko'p farq qiladigan joylar. Testlarni ikkala bazada ham ishga tushirish mumkin bo'lsa, migratsiya xatolari erta ko'rinadi. Tanlovda «qaysi baza kuchliroq» emas, «qaysi baza jamoaga va vazifaga mos» degan savolga javob bering."
    }
   ],
   "quiz": [
    {
     "q": "PostgreSQL'da INSERT natijasini darhol qaytarish uchun nima ishlatiladi?",
     "options": [
      "AUTO_INCREMENT",
      "OUTPUT",
      "RETURNING",
      "LAST_INSERT_ID"
     ],
     "answer": 2,
     "explain": "RETURNING qo'shilgan yoki o'zgargan qator ustunlarini qaytaradi."
    },
    {
     "q": "MySQL'da avtomatik o'suvchi kalit uchun qaysi atribut ishlatiladi?",
     "options": [
      "SERIAL",
      "SEQUENCE",
      "IDENTITY",
      "AUTO_INCREMENT"
     ],
     "answer": 3,
     "explain": "MySQL'da AUTO_INCREMENT ustunga avtomatik qiymat beradi."
    },
    {
     "q": "Qaysi tur PostgreSQL'da ikkilik formatda saqlanadi va GIN indekslanadi?",
     "options": [
      "VARCHAR",
      "JSONB",
      "TEXT",
      "BLOB"
     ],
     "answer": 1,
     "explain": "JSONB ikkilik JSON turi bo'lib, operatorlar va GIN indekslar bilan yaxshi ishlaydi."
    }
   ]
  },
  {
   "id": 47,
   "title": "Loyiha 1: kutubxona sxemasi va sekin so'rovni tezlashtirish",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Uch darslik amaliy loyihada maktab kutubxonasi bazasini quramiz. Maqsad — kitoblar, o'quvchilar va qarz tarixini saqlash, hisobot chiqarish va so'rovlarni optimallashtirish. Birinchi qadamda sxemani yaratamiz va eng ko'p ishlatiladigan so'rovning rejasini ko'ramiz."
    },
    {
     "type": "table",
     "head": [
      "Jadval",
      "Asosiy ustunlar",
      "Vazifasi"
     ],
     "rows": [
      [
       "<code>kitoblar</code>",
       "id, nom, muallif, janr, nashr_yili, nusxalar_soni",
       "Kutubxona fondi"
      ],
      [
       "<code>azolar</code>",
       "id, ism, sinf, telefon, royxatdan_otgan",
       "O'quvchilar"
      ],
      [
       "<code>qarzlar</code>",
       "id, kitob_id, azo_id, olingan_sana, qaytarilgan_sana, holat",
       "Qarz harakati"
      ]
     ]
    },
    {
     "type": "code",
     "title": "kutubxona-sxemasi.sql",
     "code": "CREATE TABLE kitoblar (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    nom TEXT NOT NULL,\n    muallif TEXT NOT NULL,\n    janr TEXT NOT NULL,\n    nashr_yili INTEGER,\n    nusxalar_soni INTEGER NOT NULL DEFAULT 1\n);\n\nCREATE TABLE azolar (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    ism TEXT NOT NULL,\n    sinf TEXT NOT NULL,\n    telefon TEXT,\n    royxatdan_otgan DATE NOT NULL DEFAULT CURRENT_DATE\n);\n\nCREATE TABLE qarzlar (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    kitob_id INTEGER NOT NULL REFERENCES kitoblar(id),\n    azo_id INTEGER NOT NULL REFERENCES azolar(id),\n    olingan_sana DATE NOT NULL DEFAULT CURRENT_DATE,\n    qaytarilgan_sana DATE,\n    holat TEXT NOT NULL DEFAULT 'faol'\n        CHECK (holat IN ('faol', 'qaytarilgan'))\n);",
     "output": "CREATE TABLE\nCREATE TABLE\nCREATE TABLE",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Eng ko'p ishlatiladigan so'rov — faol qarzlarni o'quvchi va kitob nomi bilan chiqarish. Kichik jadvalda reja <code>Seq Scan</code> va <code>Hash Join</code> ko'rsatishi normal: 10 qator uchun indeks qidiruvi qimmatroq. Katta hajmda vaziyat o'zgaradi, shuning uchun rejani ma'lumot o'sganda qayta tekshirish kerak."
    },
    {
     "type": "code",
     "title": "faol-qarzlar-rejasi.sql",
     "code": "EXPLAIN ANALYZE\nSELECT a.ism, k.nom\nFROM qarzlar q\nJOIN azolar a ON a.id = q.azo_id\nJOIN kitoblar k ON k.id = q.kitob_id\nWHERE q.holat = 'faol'\nORDER BY q.olingan_sana;",
     "output": "Sort  (cost=2.45..2.46 rows=5 width=32) (actual time=0.098..0.099 rows=5 loops=1)\n  Sort Key: q.olingan_sana\n  Sort Method: quicksort  Memory: 25kB\n  ->  Hash Join  (cost=1.56..2.40 rows=5 width=32) (actual time=0.045..0.090 rows=5 loops=1)\n        Hash Cond: (q.azo_id = a.id)\n        ->  Hash Join  (cost=1.29..2.08 rows=5 width=24) (actual time=0.028..0.065 rows=5 loops=1)\n              Hash Cond: (q.kitob_id = k.id)\n              ->  Seq Scan on qarzlar q  (cost=0.00..1.10 rows=5 width=12) (actual time=0.008..0.012 rows=5 loops=1)\n                    Filter: (holat = 'faol'::text)\n                    Rows Removed by Filter: 5\n              ->  Hash  (cost=1.08..1.08 rows=8 width=20) (actual time=0.008..0.009 rows=8 loops=1)\n                    ->  Seq Scan on kitoblar k  (cost=0.00..1.08 rows=8 width=20)\n        ->  Hash  (cost=1.08..1.08 rows=6 width=20) (actual time=0.008..0.009 rows=6 loops=1)\n              ->  Seq Scan on azolar a  (cost=0.00..1.08 rows=6 width=20)\nPlanning Time: 0.210 ms\nExecution Time: 0.145 ms",
     "outputLabel": "Reja"
    },
    {
     "type": "code",
     "title": "kutubxona-indekslari.sql",
     "code": "CREATE INDEX idx_qarzlar_holat_sana\nON qarzlar (holat, olingan_sana);\n\nCREATE INDEX idx_qarzlar_azo\nON qarzlar (azo_id);\n\nCREATE INDEX idx_qarzlar_kitob\nON qarzlar (kitob_id);\n\nANALYZE qarzlar;",
     "output": "CREATE INDEX\nCREATE INDEX\nCREATE INDEX\nANALYZE",
     "outputLabel": "Natija"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Optimallashtirishni o'lchovdan boshlang",
     "html": "<code>holat, olingan_sana</code> kompozit indeksi faol qarzlarni sana bo'yicha tartibda beradi. <code>azo_id</code> va <code>kitob_id</code> indekslari JOIN va «shu o'quvchining qarzlari» so'rovlarini tezlashtiradi. PostgreSQL FOREIGN KEY ustunlarini avtomatik indekslamaydi, MySQL InnoDB esa indeks yaratadi. 10 qatorli jadvalda planner baribir <code>Seq Scan</code> tanlashi mumkin — bu xato emas, shunchaki kichik hajm uchun to'g'ri qaror."
    }
   ],
   "quiz": [
    {
     "q": "Loyihada faol qarzlarni holat va sana bo'yicha tez olish uchun qaysi indeks mos?",
     "options": [
      "qarzlar (ism)",
      "kitoblar (nashr_yili)",
      "azolar (telefon)",
      "qarzlar (holat, olingan_sana)"
     ],
     "answer": 3,
     "explain": "Kompozit indeks holat bo'yicha filtr va sana bo'yicha tartiblashni birga qo'llab-quvvatlaydi."
    },
    {
     "q": "Nega kichik jadvalda EXPLAIN Seq Scan ko'rsatishi mumkin?",
     "options": [
      "Kichik hajmda butun jadvalni o'qish indeksdan arzonroq",
      "Seq Scan faqat xato rejim",
      "FOREIGN KEY yo'qligi sababli",
      "Indekslar umuman ishlamaydi"
     ],
     "answer": 0,
     "explain": "Optimizator xarajatni baholaydi; kichik jadvalda to'liq skanerlash tezroq bo'lishi mumkin."
    },
    {
     "q": "PostgreSQL'da FOREIGN KEY ustuni avtomatik indekslanadimi?",
     "options": [
      "Faqat MySQL'da",
      "Ha, har doim",
      "Yo'q, kerak bo'lsa indeksni qo'lda yaratish kerak",
      "Faqat jadval katta bo'lsa"
     ],
     "answer": 2,
     "explain": "PostgreSQL FOREIGN KEY cheklovini yaratadi, lekin bog'lanish ustuniga avtomatik indeks qo'shmaydi."
    }
   ]
  },
  {
   "id": 48,
   "title": "Loyiha 2: kutubxona uchun tahliliy hisobotlar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Endi kutubxona ma'lumotlari asosida foydali hisobotlar tuzamiz: oylik qarz dinamikasi, eng faol o'quvchilar va muddati o'tgan kitoblar. Tahliliy so'rovlarda davr, holat va foydalanuvchi kesimini bir-biridan ajratish muhim. PostgreSQL'da shartli agregat uchun <code>FILTER (WHERE ...)</code> qulay, boshqa bazalarda <code>COUNT(CASE WHEN ... THEN 1 END)</code> ishlatiladi."
    },
    {
     "type": "code",
     "title": "oylik-qarzlar.sql",
     "code": "SELECT CAST(DATE_TRUNC('month', olingan_sana) AS DATE) AS oy,\n       COUNT(*) AS qarzlar,\n       COUNT(*) FILTER (WHERE holat = 'faol') AS faol\nFROM qarzlar\nGROUP BY DATE_TRUNC('month', olingan_sana)\nORDER BY oy;",
     "output": "oy         | qarzlar | faol\n-----------+---------+------\n2025-09-01 |       3 |    0\n2025-10-01 |       4 |    3\n2025-11-01 |       3 |    2",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "eng-faol-azolar.sql",
     "code": "WITH azo_qarz AS (\n    SELECT a.id,\n           a.ism,\n           COUNT(*) AS qarzlar_soni\n    FROM azolar a\n    JOIN qarzlar q ON q.azo_id = a.id\n    GROUP BY a.id, a.ism\n)\nSELECT ism,\n       qarzlar_soni,\n       RANK() OVER (ORDER BY qarzlar_soni DESC) AS orin\nFROM azo_qarz\nORDER BY orin, ism;",
     "output": "ism     | qarzlar_soni | orin\n--------+--------------+------\nAziza   |            2 |    1\nBek     |            2 |    1\nDilnoza |            2 |    1\nSardor  |            2 |    1\nJasur   |            1 |    5\nNodira  |            1 |    5",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Muddati o'tgan qarz — qaytarilmagan va ma'lum sanadan oldin olingan yozuv. Hisobotda <code>qaytarilgan_sana IS NULL</code> shartini unutmang, aks holda qaytarilgan kitoblar ham «qarzdor» bo'lib ko'rinadi. Sana chegarasini qat'iy belgilash hisobotni takrorlanuvchi qiladi."
    },
    {
     "type": "code",
     "title": "muddati-otganlar.sql",
     "code": "SELECT a.ism AS azo,\n       k.nom AS kitob,\n       q.olingan_sana,\n       DATE '2026-01-01' - q.olingan_sana AS kunlar\nFROM qarzlar q\nJOIN azolar a ON a.id = q.azo_id\nJOIN kitoblar k ON k.id = q.kitob_id\nWHERE q.qaytarilgan_sana IS NULL\n  AND q.olingan_sana < DATE '2025-11-01'\nORDER BY kunlar DESC;",
     "output": "azo    | kitob          | olingan_sana | kunlar\n-------+----------------+--------------+-------\nNodira | SQL asoslari   | 2025-10-01   |    92\nAziza  | Mehrobdan chayon | 2025-10-05 |    88\nJasur  | O'tkan kunlar  | 2025-10-12   |    81",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Ko'rsatkich",
      "Ta'rif",
      "Ehtiyot qismi"
     ],
     "rows": [
      [
       "Oylik qarzlar",
       "Oy bo'yicha olingan kitoblar soni",
       "Sana mintaqasi"
      ],
      [
       "Faol qarzlar",
       "Qaytarilmagan yozuvlar",
       "<code>IS NULL</code> sharti"
      ],
      [
       "Eng faol azo",
       "Eng ko'p qarz olgan o'quvchi",
       "Tenglikda RANK"
      ],
      [
       "Muddati o'tgan",
       "Belgilangan sanadan oldin olingan va qaytarilmagan",
       "Biznes qoidasi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Hisobotni himoya qiling",
     "html": "Tahliliy so'rovlar sekin bo'lishi mumkin, shuning uchun ularni ish vaqtida og'ir yuklamasdan, replica yoki materialized view ustida bajarish ma'qul. Natijani keshlashdan oldin ma'lumot qanchalik tez o'zgarishini hisobga oling. Har bir metrikada «nima sanaladi» savoliga aniq javob bering: qarzlar sonimi, noyob kitoblar sonimi yoki noyob o'quvchilar sonimi?"
    }
   ],
   "quiz": [
    {
     "q": "PostgreSQL'da faqat faol qatorlarni sanash uchun qaysi shakl qulay?",
     "options": [
      "COUNT(*) FILTER (WHERE holat = 'faol')",
      "COUNT(*) WHERE holat = 'faol'",
      "SUM(holat)",
      "DISTINCT holat"
     ],
     "answer": 0,
     "explain": "FILTER agregatga shart qo'shib, faqat mos qatorlarni hisoblaydi."
    },
    {
     "q": "Muddati o'tgan qarzlarni aniqlashda qaysi shart majburiy?",
     "options": [
      "kitob_id IS NULL",
      "qaytarilgan_sana IS NULL",
      "qaytarilgan_sana IS NOT NULL",
      "holat = 'qaytarilgan'"
     ],
     "answer": 1,
     "explain": "Qaytarilmagan qarzlardagina qaytarilgan_sana NULL bo'ladi; aks holda kitob allaqachon qaytarilgan."
    },
    {
     "q": "Bir nechta o'quvchi bir xil qarz soniga ega bo'lsa, RANK ularga qanday munosabatda bo'ladi?",
     "options": [
      "Ularni o'chiradi",
      "Faqat birinchisini ko'rsatadi",
      "Har biriga har xil o'rin beradi",
      "Bir xil o'rin beradi va keyingi o'rinni tashlab ketadi"
     ],
     "answer": 3,
     "explain": "RANK teng qiymatlarga bir xil o'rin beradi, keyingi o'rin esa tashlab ketiladi."
    }
   ]
  },
  {
   "id": 49,
   "title": "Loyiha 3: view, keyset sahifalash va ishga tushirish",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Oxirgi bosqichda loyihani amaliyotga tayyorlaymiz: tez-tez ishlatiladigan so'rovni view qilamiz, katta ro'yxatni sahifalaymiz va ishga tushirish ro'yxatini tekshiramiz. Bu uch amal real loyihalarda kodni soddalashtiradi, javob vaqtini yaxshilaydi va xatarlarni kamaytiradi."
    },
    {
     "type": "code",
     "title": "faol-qarzlar-view.sql",
     "code": "CREATE VIEW faol_qarzlar AS\nSELECT q.id,\n       a.ism AS azo,\n       k.nom AS kitob,\n       q.olingan_sana,\n       DATE '2026-01-01' - q.olingan_sana AS kunlar\nFROM qarzlar q\nJOIN azolar a ON a.id = q.azo_id\nJOIN kitoblar k ON k.id = q.kitob_id\nWHERE q.qaytarilgan_sana IS NULL;",
     "output": "CREATE VIEW\nView \"faol_qarzlar\" yaratildi.",
     "outputLabel": "Natija"
    },
    {
     "type": "p",
     "html": "Katta ro'yxatni <code>LIMIT ... OFFSET ...</code> bilan sahifalash oson, lekin chuqur sahifalarda baza ko'p qatorni o'qib tashlab yuboradi. <b>Keyset pagination</b> oxirgi ko'rilgan qatorning kalitidan foydalanadi: <code>WHERE (olingan_sana, id) < (oxirgi_sana, oxirgi_id)</code>. Bu usul barqaror va tezroq, ayniqsa indeks mavjud bo'lsa."
    },
    {
     "type": "code",
     "title": "birinchi-sahifa.sql",
     "code": "SELECT id, azo, kitob, olingan_sana\nFROM faol_qarzlar\nORDER BY olingan_sana DESC, id DESC\nLIMIT 3;",
     "output": "id | azo    | kitob          | olingan_sana\n---+--------+----------------+--------------\n10 | Sardor | SQL asoslari   | 2025-11-10\n 8 | Dilnoza| Python sirlari | 2025-11-01\n 7 | Jasur  | O'tkan kunlar  | 2025-10-12",
     "outputLabel": "Natija"
    },
    {
     "type": "code",
     "title": "keyingi-sahifa.sql",
     "code": "SELECT id, azo, kitob, olingan_sana\nFROM faol_qarzlar\nWHERE (olingan_sana, id) < (DATE '2025-10-12', 7)\nORDER BY olingan_sana DESC, id DESC\nLIMIT 3;",
     "output": "id | azo    | kitob            | olingan_sana\n---+--------+------------------+--------------\n 5 | Aziza  | Mehrobdan chayon | 2025-10-05\n 4 | Nodira | SQL asoslari     | 2025-10-01",
     "outputLabel": "Natija"
    },
    {
     "type": "table",
     "head": [
      "Tekshiruv",
      "Holat"
     ],
     "rows": [
      [
       "Indekslar yaratilgan",
       "holat+sana, azo_id, kitob_id"
      ],
      [
       "View va ruxsatlar",
       "Faqat kerakli rollarga SELECT"
      ],
      [
       "Zaxira va tiklash sinovi",
       "Rejalashtirilgan"
      ],
      [
       "Monitoring",
       "Sekin so'rovlar va xatolar kuzatiladi"
      ],
      [
       "Migratsiya",
       "Versiyalangan va qaytarish rejasi bor"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Yakuniy nazorat ro'yxati",
     "html": "Ishga tushirishdan oldin <code>EXPLAIN ANALYZE</code> bilan asosiy so'rovlarni tekshiring, <code>NOT NULL</code> va <code>FOREIGN KEY</code>larni joyida qoldiring, ortiqcha indekslarni olib tashlang. View'lar ilova kodini soddalashtiradi, lekin ularni xavfsizlik devori deb hisoblamang. Keyset pagination uchun saralash ustunlari bo'yicha mos indeks bo'lishi shart. Zaxira, monitoring va ruxsatlar — kod bilan bir xil darajada muhim."
    }
   ],
   "quiz": [
    {
     "q": "Keyset pagination qaysi qiymatga tayanadi?",
     "options": [
      "Jadval nomiga",
      "Oldingi sahifadagi oxirgi qatorning saralash kalitiga",
      "Tasodifiy ID'ga",
      "Faqat OFFSET soniga"
     ],
     "answer": 1,
     "explain": "Keyset usuli oxirgi ko'rilgan qator kalitidan foydalanib, keyingi qatorlarni tanlaydi."
    },
    {
     "q": "Nega chuqur OFFSET sekinlashishi mumkin?",
     "options": [
      "OFFSET faqat MySQL'da ishlaydi",
      "LIMIT bilan ishlatilmaydi",
      "Baza oldingi qatorlarni ham o'qib tashlashi mumkin",
      "OFFSET indeksni o'chiradi"
     ],
     "answer": 2,
     "explain": "Katta OFFSET'da baza ko'p qatorni hisoblab, keyin tashlab yuborishi mumkin."
    },
    {
     "q": "Ishga tushirish ro'yxatida qaysi band majburiy?",
     "options": [
      "Zaxira, ruxsatlar va so'rov rejalarini tekshirish",
      "Barcha indekslarni o'chirish",
      "Faqat bitta foydalanuvchi yaratish",
      "Faqat sayt dizayni"
     ],
     "answer": 0,
     "explain": "Zaxira, xavfsizlik va unumdorlik tekshiruvlari ishlab chiqarishga chiqishdan oldin bajarilishi kerak."
    }
   ]
  },
  {
   "id": 50,
   "title": "Yakuniy imtihon",
   "minutes": 15,
   "isExam": true,
   "blocks": [
    {
     "type": "p",
     "html": "Bu — 49 darslik SQL kursining yakuniy imtihoni. Savollar SELECT va filtrlashdan tortib JOIN, subquery, CTE, oynali funksiyalar, indekslar, tranzaksiyalar, xavfsizlik va zaxiraga qadar butun kursni qamrab oladi. Har bir savolda bitta to'g'ri javob bor."
    },
    {
     "type": "ul",
     "items": [
      "<strong>12 ta savol</strong>, har birida 4 ta variant.",
      "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
      "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
      "O'tgandan keyin sertifikatni ko'rish va PDF qilib saqlash mumkin."
     ]
    },
    {
     "type": "table",
     "head": [
      "Bo'lim",
      "Savollar",
      "Nimani tekshiradi"
     ],
     "rows": [
      [
       "Asoslar, NULL va JOIN",
       "1-4",
       "Filtrlash, guruhlash, bog'lash"
      ],
      [
       "Subquery va CTE",
       "5-6",
       "EXISTS, rekursiya"
      ],
      [
       "Oynali funksiyalar",
       "7",
       "PARTITION BY va reyting"
      ],
      [
       "View, indeks va EXPLAIN",
       "8-10",
       "Saqlangan natija, reja, indeks"
      ],
      [
       "Tranzaksiya va xavfsizlik",
       "11-12",
       "Izolyatsiya, huquqlar, zaxira"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Topshirishdan oldin",
     "html": "Har bir savolni oxirigacha o'qing va variantlarni solishtiring. Hisob-kitob talab qiladigan savollarda avval mantiqni qog'ozda tekshirib oling. Shoshilmang: 12 savol uchun 15 daqiqa yetarli. Omad!"
    }
   ],
   "quiz": []
  }
 ],
 "exam": {
  "passScore": 9,
  "total": 12,
  "questions": [
   {
    "q": "UNION ALL UNION'dan qanday farq qiladi?",
    "options": [
     "Natijani avtomatik kamayish tartibida saralaydi",
     "Jadval tuzilmasini o'zgartiradi",
     "Takroriy qatorlarni ham natijada qoldiradi",
     "Faqat bitta ustun qaytaradi"
    ],
    "answer": 2,
    "explain": "UNION dublikatlarni olib tashlaydi, UNION ALL esa barcha qatorlarni, shu jumladan takrorlarni qaytaradi."
   },
   {
    "q": "GROUP BY natijasidagi guruhlarni filtrlamoqchi bo'lsangiz, qaysi banddan foydalanasiz?",
    "options": [
     "HAVING",
     "LIMIT",
     "ORDER BY",
     "WHERE"
    ],
    "answer": 0,
    "explain": "WHERE guruhlashdan oldin qatorlarni, HAVING esa guruhlashdan keyin guruhlarni filtrlaydi."
   },
   {
    "q": "WHERE kurs_id = NULL sharti nega hech qanday qator tanlamaydi?",
    "options": [
     "NULL har doim 0 ga teng",
     "Kurs_id ustuni indekslanmagan",
     "WHERE NULL bilan ishlay olmaydi",
     "NULL bilan = taqqoslash UNKNOWN qaytaradi"
    ],
    "answer": 3,
    "explain": "NULL noma'lum qiymat; uni tekshirish uchun IS NULL yoki IS NOT NULL ishlatiladi, = emas."
   },
   {
    "q": "LEFT JOIN natijasida o'ng jadvalda moslik topilmagan qator uchun COUNT(t.id) odatda nimaga teng?",
    "options": [
     "Xato beradi",
     "0",
     "1",
     "NULL"
    ],
    "answer": 1,
    "explain": "Moslik bo'lmasa o'ng ustunlar NULL bo'ladi, COUNT(t.id) esa NULL'larni sanamaydi va 0 qaytaradi."
   },
   {
    "q": "Kursda kamida bitta talaba bor-yo'qligini tekshirish uchun qaysi konstruksiya tabiiy mos?",
    "options": [
     "ORDER BY ball",
     "UNION ALL",
     "EXISTS (SELECT 1 FROM talabalar t WHERE t.kurs_id = k.id)",
     "GROUP BY kurs_id"
    ],
    "answer": 2,
    "explain": "EXISTS ichki so'rovda kamida bitta mos qator borligini tekshiradi va qolganlarini qidirmaydi."
   },
   {
    "q": "Rekursiv CTE'dagi anchor qismning vazifasi nima?",
    "options": [
     "Boshlang'ich qatorlarni berish",
     "Rekursiyani cheksiz davom ettirish",
     "Natijani saralash",
     "Jadvalga indeks yaratish"
    ],
    "answer": 0,
    "explain": "Anchor rekursiyaning birinchi to'plamini beradi; recursive member keyingi qatorlarni shundan hosil qiladi."
   },
   {
    "q": "ROW_NUMBER() OVER (PARTITION BY kurs_id ORDER BY ball DESC) har bir kursda qanday raqam beradi?",
    "options": [
     "Butun jadval bo'ylab 1 dan boshlanadi",
     "Faqat teng ballarga bir xil raqam beradi",
     "Har bir kursda 0 dan boshlanadi",
     "Har bir kursda 1 dan boshlanib, eng yuqori ballga 1 beradi"
    ],
    "answer": 3,
    "explain": "PARTITION BY har bir kursda raqamlashni qaytadan boshlaydi; ORDER BY ball DESC eng yuqori ballni birinchi qiladi."
   },
   {
    "q": "Materialized view oddiy view'dan nimasi bilan ajralib turadi?",
    "options": [
     "Indeks yaratishga yo'l qo'ymaydi",
     "So'rov natijasini diskda saqlaydi",
     "Faqat SELECT'ni taqiqlaydi",
     "Har doim avtomatik yangilanadi"
    ],
    "answer": 1,
    "explain": "Materialized view natijani saqlaydi va REFRESH bilan yangilanadi; oddiy view har safar qayta hisoblanadi."
   },
   {
    "q": "Kompozit indeks (holat, sana) qaysi so'rovga ko'proq yordam beradi?",
    "options": [
     "WHERE holat = 'faol' AND sana >= DATE '2025-10-01'",
     "WHERE ism LIKE 'A%'",
     "ORDER BY nom",
     "WHERE sana IS NULL"
    ],
    "answer": 0,
    "explain": "Indeksning ikkala ustuni ham shartda ishlatilmoqda; birinchi ustun prefiks sifatida mos keladi."
   },
   {
    "q": "EXPLAIN ANALYZE ishlatilganda nima sodir bo'ladi?",
    "options": [
     "Jadval avtomatik indekslanadi",
     "Natija diskda materialized view bo'lib saqlanadi",
     "So'rov haqiqatan bajariladi va haqiqiy vaqt hamda qatorlar soni ko'rsatiladi",
     "So'rov bajarilmaydi, faqat taxminiy reja chiqadi"
    ],
    "answer": 2,
    "explain": "EXPLAIN faqat reja beradi; ANALYZE qo'shilganda so'rov bajarilib, actual time va rows ko'rsatiladi."
   },
   {
    "q": "REPEATABLE READ darajasidagi tranzaksiyada bir xil SELECT ikki marta bajarilsa, odatda qanday natija kutiladi?",
    "options": [
     "Ikkinchi o'qishda har doim boshqa qiymat",
     "Birinchi o'qishda xato",
     "Faqat NULL qaytadi",
     "Ikkala o'qishda ham bir xil snapshot qiymati"
    ],
    "answer": 3,
    "explain": "REPEATABLE READ tranzaksiya davomida barqaror snapshotni saqlaydi, shuning uchun takroriy o'qish bir xil bo'ladi."
   },
   {
    "q": "Ishlab chiqarish bazasida xavfsizlik va zaxira bo'yicha qaysi amaliyot to'g'ri?",
    "options": [
     "Zaxira borligini hech qachon tekshirmaslik",
     "Ilovaga faqat kerakli huquqlarni berish va zaxirani muntazam tiklab sinash",
     "Barcha foydalanuvchilarga admin huquqini berish",
     "Zaxirani faqat asosiy server diskida saqlash"
    ],
    "answer": 1,
    "explain": "Eng kam huquq tamoyili va muntazam tiklash sinovi xavfsizlik hamda ma'lumot saqlanishining asosidir."
   }
  ]
 }
};
})();
