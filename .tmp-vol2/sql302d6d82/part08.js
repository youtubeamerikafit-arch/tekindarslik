module.exports = [
  {
    id: 85,
    title: "Funksiya unumdorligi: volatility va plan keshi",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Funksiya ichida SQL yozish qulay, lekin uning <b>volatility</b> belgisi muhim. <code>IMMUTABLE</code> funksiya bir xil kirish uchun doim bir xil natija beradi va indeksda ishlatilishi mumkin. <code>STABLE</code> funksiya bitta so'rov ichida barqaror, lekin vaqtga bog'liq bo'lishi mumkin. <code>VOLATILE</code> funksiya har safar qayta hisoblanadi. Noto'g'ri belgi noto'g'ri reja yoki indeksning ishlamasligiga olib keladi."
      },
      {
        type: "table",
        head: ["Belgi", "Misol", "Indeksda"],
        rows: [
          ["IMMUTABLE", "Matematik hisob, formatlash", "Mumkin"],
          ["STABLE", "<code>now()</code>, jadvaldan o'qish", "Cheklangan"],
          ["VOLATILE", "<code>random()</code>, <code>nextval()</code>", "Tavsiya etilmaydi"],
          ["STRICT", "NULL kirishda NULL qaytaradi", "Optimizatsiyaga yordam"],
          ["PARALLEL SAFE", "Parallel rejada xavfsiz", "Muhim"]
        ]
      },
      {
        type: "code",
        title: "immutable-funksiya.sql",
        code: `CREATE FUNCTION narx_qqs(p_narx numeric)
RETURNS numeric
LANGUAGE sql
IMMUTABLE
STRICT
AS $$
    SELECT round(p_narx * 1.12, 2);
$$;

CREATE INDEX idx_mahsulot_narx_qqs
ON mahsulotlar (narx_qqs(narx));`,
        output: `CREATE FUNCTION
CREATE INDEX`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Funksiya <code>IMMUTABLE</code> bo'lgani uchun uning natijasi bo'yicha indeks qurish mumkin. Endi <code>WHERE narx_qqs(narx) &gt; 2000000</code> kabi so'rov indeksdan foydalanadi. Agar funksiya <code>STABLE</code> yoki <code>VOLATILE</code> deb belgilansa, PostgreSQL uni indeks kaliti sifatida qabul qilmaydi yoki har bir qator uchun qayta hisoblaydi. Belgi noto'g'ri bo'lsa, natija ham noto'g'ri bo'lishi mumkin."
      },
      {
        type: "code",
        title: "funksiya-natijasi.sql",
        code: `SELECT nom,
       narx,
       narx_qqs(narx) AS qqs_bilan
FROM mahsulotlar
WHERE kategoriya = 'Mebel'
ORDER BY narx;`,
        output: `nom         | narx        | qqs_bilan
------------+-------------+-------------
Ofis kursisi | 1850000.00  | 2072000.00
Yozuv stoli  | 2400000.00  | 2688000.00`,
        outputLabel: "Natija"
      },
      {
        type: "note",
        variant: "tip",
        title: "SQL yoki PL/pgSQL?",
        html: "Oddiy ifoda uchun <code>LANGUAGE sql</code> funksiyasi tezroq va planner tomonidan «inline» qilinishi mumkin. Murakkab mantiq, tsikl va xato boshqaruvi kerak bo'lsa PL/pgSQL tanlanadi. PL/pgSQL funksiyalarining rejasi sessiya davomida keshlanadi; <code>search_path</code> yoki jadval tuzilmasi o'zgarsa, reja eskirishi mumkin. <code>EXPLAIN (ANALYZE, VERBOSE)</code> bilan funksiya chaqiruvi qayerda bajarilayotganini tekshiring."
      }
    ],
    quiz: [
      {
        q: "Qaysi volatility belgisi funksiyani indeksda ishlatishga imkon beradi?",
        options: [
          "VOLATILE",
          "STABLE",
          "IMMUTABLE",
          "Hech qaysi"
        ],
        answer: 2,
        explain: "IMMUTABLE funksiya bir xil kirish uchun doim bir xil natija beradi, shuning uchun indeks kaliti bo'la oladi."
      },
      {
        q: "now() funksiyasi qaysi toifaga kiradi?",
        options: [
          "IMMUTABLE",
          "STABLE",
          "VOLATILE",
          "STRICT"
        ],
        answer: 1,
        explain: "now() bitta so'rov ichida bir xil qiymat qaytaradi, lekin vaqt o'tishi bilan o'zgaradi — STABLE."
      },
      {
        q: "SQL funksiyasining PL/pgSQL'ga nisbatan afzalligi nima?",
        options: [
          "Planner uni inline qilishi va soddaroq optimallashtirishi mumkin",
          "U har doim parallel ishlaydi",
          "U tranzaksiyani boshqaradi",
          "U indeks yaratadi"
        ],
        answer: 0,
        explain: "Oddiy SQL funksiyalar ko'pincha so'rov ichiga singdiriladi, bu qo'shimcha chaqiruv xarajatini kamaytiradi."
      }
    ]
  },
  {
    id: 86,
    title: "Data warehouse: star schema, grain va faktlar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Analitik ombor operatsion bazadan ajratiladi, chunki uning savollari boshqacha: «oylik daromad qancha?», «qaysi kategoriya o'sdi?». <b>Star schema</b> markazda <b>fakt</b> jadvali va atrofida <b>o'lchov</b> (dimension) jadvallaridan iborat. Fakt o'lchanadigan hodisani (sotuv, to'lov, tashrif), dimensiya esa uning kontekstini (mijoz, mahsulot, sana) saqlaydi. Eng muhim qaror — <b>grain</b>: faktning bitta qatori nimani anglatadi."
      },
      {
        type: "table",
        head: ["Komponent", "Mazmuni", "Misol"],
        rows: [
          ["Fact", "O'lchovlar va kalitlar", "<code>fakt_sotuv</code>"],
          ["Dimension", "Kontekst atributlari", "<code>dim_mahsulot</code>"],
          ["Grain", "Bitta qator darajasi", "Bitta sotuv qatori"],
          ["Surrogate key", "Ichki barqaror kalit", "<code>mahsulot_sk</code>"],
          ["Measure", "Additiv qiymat", "<code>summa</code>, <code>miqdor</code>"]
        ]
      },
      {
        type: "code",
        title: "star-schema.sql",
        code: `CREATE SCHEMA analitika;

CREATE TABLE analitika.dim_mijoz (
    mijoz_sk int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mijoz_id int NOT NULL,
    ism text NOT NULL,
    shahar text,
    segment text
);

CREATE TABLE analitika.dim_mahsulot (
    mahsulot_sk int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mahsulot_id int NOT NULL,
    nom text NOT NULL,
    kategoriya text NOT NULL
);

CREATE TABLE analitika.dim_sana (
    sana_sk int PRIMARY KEY,
    sana date NOT NULL,
    yil int NOT NULL,
    oy int NOT NULL
);

CREATE TABLE analitika.fakt_sotuv (
    sotuv_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    sana_sk int NOT NULL REFERENCES analitika.dim_sana(sana_sk),
    mijoz_sk int NOT NULL REFERENCES analitika.dim_mijoz(mijoz_sk),
    mahsulot_sk int NOT NULL REFERENCES analitika.dim_mahsulot(mahsulot_sk),
    miqdor int NOT NULL,
    summa numeric(12, 2) NOT NULL
);`,
        output: `CREATE SCHEMA
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Fakt jadvalida business kalitlar emas, dimensiyalarning <b>surrogate key</b> lari saqlanadi. Bu tarixiy o'zgarishlarni (SCD) va manba tizimlar almashinuvini osonlashtiradi. Grain «bitta sotuv qatori» bo'lsa, bitta buyurtmada bir nechta mahsulot bo'lsa, har biri alohida fakt qatori bo'ladi. Grainni oldindan aniq aytib qo'ymaslik keyinchalik ikki marta sanash xatolariga olib keladi."
      },
      {
        type: "code",
        title: "yulduz-sorov.sql",
        code: `WITH fakt_sotuv(mahsulot_id, summa) AS (
    VALUES
        (1, 12500000.00),
        (2, 560000.00),
        (5, 1850000.00),
        (3, 950000.00),
        (1, 12500000.00),
        (9, 540000.00)
),
dim_mahsulot(mahsulot_id, kategoriya) AS (
    VALUES
        (1, 'Elektronika'), (2, 'Elektronika'),
        (3, 'Elektronika'), (5, 'Mebel'), (9, 'Oshxona')
)
SELECT d.kategoriya,
       sum(f.summa) AS daromad
FROM fakt_sotuv f
JOIN dim_mahsulot d USING (mahsulot_id)
GROUP BY d.kategoriya
ORDER BY daromad DESC;`,
        output: `kategoriya  | daromad
------------+-------------
Elektronika | 26510000.00
Mebel       | 1850000.00
Oshxona     | 540000.00`,
        outputLabel: "Kategoriya bo'yicha"
      },
      {
        type: "note",
        variant: "warning",
        title: "Star yoki snowflake?",
        html: "Star schema soddaroq va so'rovlar uchun tezroq; snowflake dimensiyalarni normallashtiradi, lekin ko'proq JOIN talab qiladi. Analitikada denormalizatsiya odatiy: <code>dim_mahsulot</code> ichida kategoriya nomi takrorlansa ham, bu join sonini kamaytiradi. Fakt jadvalini ilova bilan real vaqtda yangilashdan saqlaning: ETL/ELT oqimi kechikishi va yuklama uchun alohida boshqariladi."
      }
    ],
    quiz: [
      {
        q: "Fakt jadvalining grain'i nimani bildiradi?",
        options: [
          "Bitta qator qaysi hodisani ifodalashini",
          "Jadvalning disk hajmini",
          "Indekslar sonini",
          "Dimensiyalar sonini"
        ],
        answer: 0,
        explain: "Grain — faktning eng past darajadagi ma'nosi; u barcha o'lchovlarning aniqligini belgilaydi."
      },
      {
        q: "Surrogate key nima?",
        options: [
          "Manba tizimning business kaliti",
          "Dimensiya uchun generatsiya qilingan ichki kalit",
          "Faqat sana uchun ishlatiladigan kalit",
          "Tashqi kalit cheklovi"
        ],
        answer: 1,
        explain: "Surrogate key barqaror va manbadan mustaqil; tarixiy versiyalarni bog'lashda qulay."
      },
      {
        q: "Star schema'da fakt jadvali odatda nimani saqlaydi?",
        options: [
          "Faqat matnli izohlarni",
          "Dimensiya kalitlari va o'lchovlarni",
          "Faqat foydalanuvchi parollarini",
          "Barcha dimensiya atributlarini"
        ],
        answer: 1,
        explain: "Fakt markazda kalitlar va additiv o'lchovlarni saqlaydi; atributlar dimensiyalarda bo'ladi."
      }
    ]
  },
  {
    id: 87,
    title: "SCD Type 2: tarixiy o'zgarishlarni saqlash",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Mijoz shahri yoki segmenti vaqt o'tishi bilan o'zgaradi. Agar faqat joriy qiymat saqlansa, o'tmishdagi hisobotlar buziladi. <b>SCD Type 2</b> har bir versiya uchun alohida qator yaratadi va <code>valid_from</code>, <code>valid_to</code> hamda <code>faol</code> belgisi bilan amal qilish davrini saqlaydi. Type 1 eski qiymatni almashtiradi, Type 3 esa cheklangan oldingi qiymatni qo'shadi."
      },
      {
        type: "table",
        head: ["Tur", "Yondashuv", "Tarix"],
        rows: [
          ["Type 1", "Qiymatni yangilash", "Yo'qoladi"],
          ["Type 2", "Yangi qator + amal davri", "To'liq saqlanadi"],
          ["Type 3", "Oldingi qiymat ustuni", "Faqat bitta oldingi"],
          ["Type 4", "Alohida tarix jadvali", "To'liq, lekin murakkab"],
          ["Type 6", "Gibrid", "Murakkab hisobotlar"]
        ]
      },
      {
        type: "code",
        title: "scd2-jadval.sql",
        code: `CREATE TABLE dim_mijoz (
    mijoz_sk int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mijoz_id int NOT NULL,
    ism text NOT NULL,
    shahar text,
    valid_from date NOT NULL,
    valid_to date NOT NULL DEFAULT DATE '9999-12-31',
    faol boolean NOT NULL DEFAULT true,
    CHECK (valid_from < valid_to)
);

INSERT INTO dim_mijoz (mijoz_id, ism, shahar, valid_from, valid_to, faol)
VALUES
    (1, 'Aziza Karimova', 'Toshkent', DATE '2024-01-05', DATE '2024-03-31', false),
    (1, 'Aziza Karimova', 'Samarqand', DATE '2024-04-01', DATE '9999-12-31', true),
    (2, 'Bekzod Toshev', 'Samarqand', DATE '2024-01-18', DATE '9999-12-31', true);`,
        output: `CREATE TABLE
INSERT 0 3`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Yangi versiya qo'shishda avval eski qatorning <code>valid_to</code> si yangi sanadan bir kun oldin qilib yopiladi, <code>faol = false</code> qilinadi, keyin yangi qator ochiladi. Bu ikki amal bitta tranzaksiyada bajarilishi kerak. <code>valid_to = '9999-12-31'</code> — amalda ochiq davr uchun qulay shartli qiymat. <code>CHECK (valid_from &lt; valid_to)</code> noto'g'ri oraliqni to'sadi."
      },
      {
        type: "code",
        title: "point-in-time.sql",
        code: `SELECT f.sotuv_id,
       f.sana,
       d.shahar
FROM (VALUES
        (1, DATE '2024-02-10'),
        (2, DATE '2024-05-10')
     ) AS f(sotuv_id, sana)
JOIN dim_mijoz d
  ON d.mijoz_id = 1
 AND f.sana >= d.valid_from
 AND f.sana < d.valid_to
ORDER BY f.sotuv_id;`,
        output: `sotuv_id | sana       | shahar
---------+------------+-----------
       1 | 2024-02-10 | Toshkent
       2 | 2024-05-10 | Samarqand`,
        outputLabel: "Tarixiy holat"
      },
      {
        type: "note",
        variant: "warning",
        title: "Kech kelgan ma'lumot",
        html: "Manba tizim o'zgarishni kech yuborsa, SCD qatorlarini qayta ochish kerak bo'ladi. Bunday «late-arriving» holatlar uchun yuklash jarayoni versiyalarni qayta hisoblashi va keyingi qatorlarning <code>valid_from</code> ini tuzatishi mumkin. Har bir dimensiya uchun bitta faol qator qoidasini partial unique indeks bilan himoyalang: <code>CREATE UNIQUE INDEX ... ON dim_mijoz (mijoz_id) WHERE faol;</code>."
      }
    ],
    quiz: [
      {
        q: "SCD Type 2 da o'zgarish qanday saqlanadi?",
        options: [
          "Eski qiymat ustiga yoziladi",
          "Yangi qator va amal davri qo'shiladi",
          "Faqat bitta oldingi ustun saqlanadi",
          "Tarix butunlay o'chiriladi"
        ],
        answer: 1,
        explain: "Type 2 har bir versiyani alohida qator sifatida valid_from/valid_to bilan saqlaydi."
      },
      {
        q: "Point-in-time join qaysi shartga tayanadi?",
        options: [
          "Sana valid_from va valid_to oralig'ida bo'lishiga",
          "Faqat ism tengligiga",
          "Faqat joriy faol qatorga",
          "Surrogate key kattaligiga"
        ],
        answer: 0,
        explain: "Tarixiy holatni olish uchun voqea sanasi dimensiya versiyasining amal davriga tushishi kerak."
      },
      {
        q: "Bitta mijoz uchun faol qatorlar bittadan oshmasligini qanday kafolatlash mumkin?",
        options: [
          "Partial unique indeks bilan",
          "Faqat CHECK bilan",
          "Trigger bilan",
          "Jadvalni o'chirish bilan"
        ],
        answer: 0,
        explain: "WHERE faol shartli unique indeks har bir mijoz uchun faqat bitta ochiq qator bo'lishini ta'minlaydi."
      }
    ]
  },
  {
    id: 88,
    title: "OLAP: GROUPING SETS, ROLLUP va CUBE",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Hisobotda bir vaqtning o'zida kategoriya bo'yicha, shahar bo'yicha va umumiy jami kerak bo'ladi. Buni uchta alohida so'rov bilan qilish mumkin, lekin <b>GROUPING SETS</b> barcha kesimlarni bitta so'rovda beradi. <b>ROLLUP</b> ierarxik jamilar (kategoriya → jami), <b>CUBE</b> esa barcha kombinatsiyalarni yasaydi. <code>GROUPING()</code> funksiyasi qaysi ustun jamlanganini ajratishga yordam beradi."
      },
      {
        type: "table",
        head: ["Konstruksiya", "Natija", "Qachon"],
        rows: [
          ["<code>GROUPING SETS</code>", "Aniq kesimlar ro'yxati", "Tanlangan hisobotlar"],
          ["<code>ROLLUP (a, b)</code>", "(a,b), (a), ()", "Ierarxik jamilar"],
          ["<code>CUBE (a, b)</code>", "(a,b), (a), (b), ()", "Barcha kombinatsiyalar"],
          ["<code>GROUPING(a)</code>", "1 — jamlangan, 0 — yo'q", "Yorliqlash"],
          ["<code>GROUPING_ID</code>", "Bitmask", "Murakkab kesimlar"]
        ]
      },
      {
        type: "code",
        title: "rollup.sql",
        code: `WITH sotuv(kategoriya, shahar, summa) AS (
    VALUES
        ('Elektronika', 'Toshkent', 26510000.00),
        ('Mebel', 'Toshkent', 1850000.00),
        ('Oshxona', 'Buxoro', 540000.00)
)
SELECT kategoriya,
       shahar,
       sum(summa) AS daromad
FROM sotuv
GROUP BY ROLLUP (kategoriya, shahar)
ORDER BY kategoriya NULLS LAST,
         shahar NULLS LAST;`,
        output: `kategoriya  | shahar   | daromad
------------+----------+-------------
Elektronika | Toshkent | 26510000.00
Elektronika |          | 26510000.00
Mebel       | Toshkent | 1850000.00
Mebel       |          | 1850000.00
Oshxona     | Buxoro   | 540000.00
Oshxona     |          | 540000.00
            |          | 28900000.00`,
        outputLabel: "Rollup natijasi"
      },
      {
        type: "p",
        html: "Bo'sh katak — o'sha kesimda jamlangan qiymat, NULL ma'lumot emas. Shu sababli hisobotda <code>GROUPING()</code> bilan farqlash kerak: <code>CASE WHEN GROUPING(shahar) = 1 THEN 'Barcha shaharlar' ELSE shahar END</code>. Aks holda haqiqiy NULL bilan subtotalni aralashtirib yuborish oson. <code>ROLLUP</code> ustunlar tartibi muhim: avval eng yuqori daraja, keyin ichki daraja."
      },
      {
        type: "code",
        title: "grouping-sets.sql",
        code: `WITH sotuv(kategoriya, shahar, summa) AS (
    VALUES
        ('Elektronika', 'Toshkent', 26510000.00),
        ('Mebel', 'Toshkent', 1850000.00),
        ('Oshxona', 'Buxoro', 540000.00)
)
SELECT kategoriya,
       shahar,
       GROUPING(kategoriya) AS kat_jami,
       GROUPING(shahar) AS shahar_jami,
       sum(summa) AS daromad
FROM sotuv
GROUP BY GROUPING SETS ((kategoriya), (shahar), ())
ORDER BY kat_jami, shahar_jami, kategoriya NULLS LAST, shahar NULLS LAST;`,
        output: `kategoriya  | shahar   | kat_jami | shahar_jami | daromad
------------+----------+----------+-------------+-------------
Elektronika |          |        0 |           1 | 26510000.00
Mebel       |          |        0 |           1 | 1850000.00
Oshxona     |          |        0 |           1 | 540000.00
            | Buxoro   |        1 |           0 | 540000.00
            | Toshkent |        1 |           0 | 28360000.00
            |          |        1 |           1 | 28900000.00`,
        outputLabel: "GROUPING SETS"
      },
      {
        type: "note",
        variant: "tip",
        title: "Hisobot qatlami",
        html: "OLAP so'rovlari ko'pincha juda katta jadvallarda bajariladi. Avval kerakli davr va o'lchamlarni toraytiring, keyin jamlang. Materialized view yoki ustunli saqlash (columnar) yechimlari takroriy hisobotlarni tezlashtiradi. <code>CUBE</code> ustunlar soni oshgan sari kombinatsiyalar portlab ketadi: 5 ustun 32 kesim beradi. Faqat biznesga kerakli kesimlarni <code>GROUPING SETS</code> bilan aniq sanang."
      }
    ],
    quiz: [
      {
        q: "ROLLUP (kategoriya, shahar) qanday kesimlarni beradi?",
        options: [
          "(kategoriya, shahar), (kategoriya), ()",
          "Faqat (kategoriya, shahar)",
          "Barcha kombinatsiyalar",
          "Faqat ()"
        ],
        answer: 0,
        explain: "ROLLUP ierarxik ravishda o'ngdan chapga jamlaydi: to'liq kesim, yuqori daraja va umumiy jami."
      },
      {
        q: "GROUPING(shahar) = 1 nimani bildiradi?",
        options: [
          "Shahar bo'yicha jamlangan qator",
          "Shahar NULL ekanini",
          "Shahar indekslanganini",
          "Shahar bo'yicha filtrlanganini"
        ],
        answer: 0,
        explain: "GROUPING 1 bo'lsa, bu qatorda shahar ustuni jamlash uchun olib tashlangan."
      },
      {
        q: "CUBE'ning ROLLUP'dan farqi nima?",
        options: [
          "CUBE barcha kombinatsiyalarni, ROLLUP esa ierarxik qismlarni beradi",
          "CUBE faqat bitta ustun bilan ishlaydi",
          "ROLLUP umumiy jami bermaydi",
          "CUBE NULL qiymatlarni o'chiradi"
        ],
        answer: 0,
        explain: "CUBE barcha ustun kombinatsiyalarini yasaydi, ROLLUP esa faqat prefiks bo'yicha ierarxiyani."
      }
    ]
  },
  {
    id: 89,
    title: "Oyna ramkalari: ROWS, RANGE, GROUPS va EXCLUDE",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Oynali funksiyalarda <code>OVER</code> ichidagi <b>frame</b> qaysi qatorlar hisobga olinishini belgilaydi. Standart ramka <code>RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code>, lekin mobil o'rtacha yoki oxirgi N qator uchun aniq ramka kerak. <code>ROWS</code> fizik qatorlar soni bo'yicha, <code>RANGE</code> qiymatlar oralig'i bo'yicha, <code>GROUPS</code> esa teng qiymatlar guruhi bo'yicha ishlaydi."
      },
      {
        type: "table",
        head: ["Ramka", "Birlik", "Misol"],
        rows: [
          ["<code>ROWS</code>", "Fizik qator", "Oxirgi 3 qator"],
          ["<code>RANGE</code>", "ORDER BY qiymati", "Oxirgi 7 kun"],
          ["<code>GROUPS</code>", "Teng qiymatlar guruhi", "Joriy va oldingi guruh"],
          ["<code>UNBOUNDED</code>", "Cheksiz chegara", "Boshidan jami"],
          ["<code>EXCLUDE</code>", "Joriy qatorni chiqarish", "Oldingi bilan solishtirish"]
        ]
      },
      {
        type: "code",
        title: "mobil-ortacha.sql",
        code: `WITH kunlik(kun, summa) AS (
    VALUES (1, 100), (2, 200), (3, 300),
           (4, 400), (5, 500), (6, 600)
)
SELECT kun,
       summa,
       sum(summa) OVER (
           ORDER BY kun
           ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ) AS uch_kunlik,
       round(avg(summa) OVER (
           ORDER BY kun
           ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ), 2) AS ortacha
FROM kunlik
ORDER BY kun;`,
        output: `kun | summa | uch_kunlik | ortacha
----+-------+------------+---------
  1 |   100 |        100 |  100.00
  2 |   200 |        300 |  150.00
  3 |   300 |        600 |  200.00
  4 |   400 |        900 |  300.00
  5 |   500 |       1200 |  400.00
  6 |   600 |       1500 |  500.00`,
        outputLabel: "Harakatlanuvchi oyna"
      },
      {
        type: "p",
        html: "<code>ROWS BETWEEN 2 PRECEDING AND CURRENT ROW</code> joriy qator va undan oldingi ikkitasini oladi. Birinchi qatorda oldingi qatorlar yo'q, shuning uchun faqat 100 hisoblanadi. <code>RANGE</code> ishlatilganda <code>ORDER BY</code> qiymati bir xil bo'lgan qatorlar «peer» hisoblanadi va birga kiradi. <code>GROUPS</code> esa nechta teng qiymatlar guruhini olishni belgilaydi."
      },
      {
        type: "code",
        title: "range-groups.sql",
        code: `WITH kunlik(kun, summa) AS (
    VALUES (1, 100), (2, 100), (3, 300), (4, 400)
)
SELECT kun,
       summa,
       sum(summa) OVER (
           ORDER BY summa
           RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS range_jami,
       sum(summa) OVER (
           ORDER BY summa
           GROUPS BETWEEN 1 PRECEDING AND CURRENT ROW
       ) AS groups_jami,
       last_value(summa) OVER (
           ORDER BY kun
           ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING
       ) AS oxirgi
FROM kunlik
ORDER BY kun;`,
        output: `kun | summa | range_jami | groups_jami | oxirgi
----+-------+------------+-------------+--------
  1 |   100 |        200 |         200 |    400
  2 |   100 |        200 |         200 |    400
  3 |   300 |        500 |         500 |    400
  4 |   400 |        900 |         700 |    400`,
        outputLabel: "RANGE va GROUPS"
      },
      {
        type: "note",
        variant: "warning",
        title: "Ramkani aniq yozing",
        html: "Ramka yozilmasa, PostgreSQL <code>RANGE UNBOUNDED PRECEDING AND CURRENT ROW</code> ni qo'llaydi. Bu ko'p hollarda kutilgan natijadan farq qiladi, ayniqsa takroriy qiymatlarda. <code>EXCLUDE CURRENT ROW</code> joriy qatorni chiqarib tashlaydi va «oldingi qiymat bilan solishtirish» uchun qulay. Ramka <code>ORDER BY</code> bilan birga ishlatilmasa, barcha qatorlar peer bo'lib qolishi mumkin."
      }
    ],
    quiz: [
      {
        q: "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW nechta qatorni qamraydi (yetarli qator bo'lsa)?",
        options: [
          "2",
          "3",
          "4",
          "Cheksiz"
        ],
        answer: 1,
        explain: "Ikki oldingi qator va joriy qator — jami 3 ta qator."
      },
      {
        q: "RANGE ramkasi qaysi birlik bo'yicha ishlaydi?",
        options: [
          "Fizik qatorlar soni",
          "ORDER BY qiymatlari oralig'i",
          "Jadvaldagi sahifalar",
          "Indekslar soni"
        ],
        answer: 1,
        explain: "RANGE ORDER BY ustun qiymatlari bo'yicha chegarani belgilaydi; teng qiymatlar birga kiradi."
      },
      {
        q: "EXCLUDE CURRENT ROW nima qiladi?",
        options: [
          "Joriy qatorni ramkadan chiqaradi",
          "Butun oynani o'chiradi",
          "Faqat birinchi qatorni oladi",
          "Ramkani cheksiz qiladi"
        ],
        answer: 0,
        explain: "EXCLUDE CURRENT ROW joriy qatorni hisobga olmaydi, masalan oldingi qatorlar bilan solishtirishda."
      }
    ]
  }
];
