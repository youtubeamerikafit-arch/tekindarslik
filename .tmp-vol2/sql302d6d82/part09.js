module.exports = [
  {
    id: 90,
    title: "ETL/ELT: staging, watermark va idempotent yuklash",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Analitik omborga ma'lumot <b>ETL</b> (Extract, Transform, Load) yoki <b>ELT</b> (Extract, Load, Transform) oqimi orqali keladi. PostgreSQL kuchli transformatsiya qila olgani uchun ko'pincha ELT tanlanadi: xom ma'lumot avval staging jadvaliga yuklanadi, keyin SQL bilan tozalanib, fakt va dimensiyalarga taqsimlanadi. Har bir yuklash <b>idempotent</b> bo'lishi kerak: bir xil partiya ikki marta kelsa ham natija o'zgarmasin."
      },
      {
        type: "table",
        head: ["Tushuncha", "Vazifasi", "Amaliy misol"],
        rows: [
          ["Watermark", "Oxirgi yuklangan nuqta", "<code>max(updated_at)</code>"],
          ["Staging", "Xom ma'lumot maydoni", "<code>stg_buyurtmalar</code>"],
          ["Idempotent", "Qayta yuklash xavfsiz", "Unique kalit + upsert"],
          ["Batch", "Bir yuklash partiyasi", "<code>load_id</code>"],
          ["Reconciliation", "Manba va omborni solishtirish", "Qatorlar soni va summa"]
        ]
      },
      {
        type: "code",
        title: "etl-yuklash.sql",
        code: `CREATE TABLE etl_yuklash (
    yuklash_id int PRIMARY KEY,
    manba text NOT NULL,
    oxirgi_sana date NOT NULL,
    qatorlar int NOT NULL,
    holat text NOT NULL
);

INSERT INTO etl_yuklash VALUES
    (1, 'buyurtmalar', DATE '2024-06-30', 12, 'muvaffaqiyatli'),
    (2, 'mahsulotlar', DATE '2024-06-30', 10, 'muvaffaqiyatli'),
    (3, 'mijozlar', DATE '2024-06-30', 10, 'xato');

INSERT INTO etl_yuklash (yuklash_id, manba, oxirgi_sana, qatorlar, holat)
VALUES (1, 'buyurtmalar', DATE '2024-07-01', 8, 'muvaffaqiyatli')
ON CONFLICT (yuklash_id) DO UPDATE
SET oxirgi_sana = EXCLUDED.oxirgi_sana,
    qatorlar = EXCLUDED.qatorlar,
    holat = EXCLUDED.holat;`,
        output: `CREATE TABLE
INSERT 0 3
INSERT 0 1`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "<code>ON CONFLICT</code> bir xil <code>yuklash_id</code> qayta kelganda yangilaydi, dublikat qo'shmaydi. Watermark sifatida <code>updated_at</code> yoki oxirgi muvaffaqiyatli sana ishlatiladi. Manba tizim vaqti bilan ombor vaqti mos kelmasligi mumkin, shuning uchun watermark har doim manba vaqtida saqlanadi va yuklash oynasi bir necha daqiqa orqaga suriladi."
      },
      {
        type: "code",
        title: "watermark-holati.sql",
        code: `SELECT manba,
       max(oxirgi_sana) AS watermark,
       sum(qatorlar) AS jami_qator,
       count(*) FILTER (WHERE holat = 'xato') AS xatolar
FROM etl_yuklash
GROUP BY manba
ORDER BY manba;`,
        output: `manba       | watermark  | jami_qator | xatolar
------------+------------+------------+---------
buyurtmalar | 2024-07-01 | 20         | 0
mahsulotlar | 2024-06-30 | 10         | 0
mijozlar    | 2024-06-30 | 10         | 1`,
        outputLabel: "Yuklash holati"
      },
      {
        type: "note",
        variant: "warning",
        title: "Xatoni jimgina o'tkazmang",
        html: "Bir manba xato bo'lsa, butun oqimni to'xtatish shart emas, lekin xato ko'rinadigan bo'lishi kerak: monitoring, alert va qayta urinish. Har bir yuklashdan keyin manba va ombor qatorlarini hamda summalarini solishtiring. <code>TRUNCATE + INSERT</code> qulay ko'rinadi, lekin u qisqa vaqt ichida ma'lumotni yo'q qiladi va parallel o'quvchilarga bo'sh jadval ko'rsatishi mumkin. Upsert yoki staging + swap xavfsizroq."
      }
    ],
    quiz: [
      {
        q: "ETL jarayonida watermark nimani saqlaydi?",
        options: [
          "Oxirgi muvaffaqiyatli yuklangan nuqtani",
          "Jadvaldagi barcha indekslarni",
          "Foydalanuvchi parolini",
          "Disk hajmini"
        ],
        answer: 0,
        explain: "Watermark keyingi yuklash qayerdan boshlanishini belgilaydi, takroriy yoki o'tkazib yuborilgan qatorlarni oldini oladi."
      },
      {
        q: "Idempotent yuklash nimani anglatadi?",
        options: [
          "Bir xil partiya qayta yuklansa ham natija o'zgarmaydi",
          "Har safar yangi qator qo'shiladi",
          "Yuklash faqat bir marta ishlaydi",
          "Ma'lumot o'chiriladi"
        ],
        answer: 0,
        explain: "Idempotentlik unique kalit va upsert orqali ta'minlanadi; qayta urinish dublikat yaratmaydi."
      },
      {
        q: "ELT'ning ETL'ga nisbatan afzalligi nimada?",
        options: [
          "Transformatsiya ombor ichida SQL bilan bajariladi",
          "U umuman transformatsiya qilmaydi",
          "U faqat CSV bilan ishlaydi",
          "U watermarkni talab qilmaydi"
        ],
        answer: 0,
        explain: "ELT xom ma'lumotni avval yuklaydi, keyin kuchli baza SQL yordamida transformatsiya qiladi."
      }
    ]
  },
  {
    id: 91,
    title: "Loyiha 1: analitik sxema va seed ma'lumotlar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Endi kursning yakuniy loyihasini quramiz: onlayn do'kon uchun sotuv analitikasi. Avval <code>analitika</code> sxemasida mijoz va sotuv jadvallarini yaratamiz. Har bir sotuv qatori — bitta oylik buyurtma; <b>grain</b> «mijoz × oy × buyurtma». Bu daraja kohort, RFM va oylik daromad hisobotlari uchun yetarli. Ma'lumotlar 2024-yil yanvardan iyulgacha, 36 ta sotuv."
      },
      {
        type: "code",
        title: "loyiha-sxemasi.sql",
        code: `DROP SCHEMA IF EXISTS analitika CASCADE;
CREATE SCHEMA analitika;

CREATE TABLE analitika.dim_mijoz (
    mijoz_id int PRIMARY KEY,
    ism text NOT NULL,
    shahar text,
    royxatdan date NOT NULL,
    kohort_oy date NOT NULL
);

CREATE TABLE analitika.fakt_sotuv (
    sotuv_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    buyurtma_id int NOT NULL UNIQUE,
    mijoz_id int NOT NULL REFERENCES analitika.dim_mijoz(mijoz_id),
    oy date NOT NULL,
    summa numeric(12, 2) NOT NULL CHECK (summa > 0)
);

INSERT INTO analitika.dim_mijoz VALUES
    (1, 'Aziza Karimova', 'Toshkent', '2024-01-05', '2024-01-01'),
    (2, 'Bekzod Toshev', 'Samarqand', '2024-01-18', '2024-01-01'),
    (3, 'Dilnoza Yusupova', 'Buxoro', '2024-02-02', '2024-02-01'),
    (4, 'Jasur Rahimov', 'Toshkent', '2024-02-20', '2024-02-01'),
    (5, 'Nodira Ismoilova', 'Nukus', '2024-03-03', '2024-03-01'),
    (6, 'Sardor Qodirov', 'Andijon', '2024-03-15', '2024-03-01'),
    (7, 'Malika Sobirova', 'Toshkent', '2024-04-01', '2024-04-01'),
    (8, 'Otabek Nazarov', 'Fargona', '2024-04-12', '2024-04-01'),
    (9, 'Kamola Ergasheva', 'Samarqand', '2024-05-06', '2024-05-01'),
    (10, 'Rustam Yoldoshev', 'Buxoro', '2024-05-21', '2024-05-01');`,
        output: `DROP SCHEMA
CREATE SCHEMA
CREATE TABLE
CREATE TABLE
INSERT 0 10`,
        outputLabel: "Sxema"
      },
      {
        type: "p",
        html: "Sotuvlar jadvali 36 qatordan iborat. Har bir mijoz faol bo'lgan oyda bitta buyurtma qilgan. Bu soddalashtirilgan model real tizimdan farq qiladi, lekin kohort va segmentatsiya mantiqini aniq ko'rsatish uchun yetarli. Keyingi darslarda bu jadval ustida retention, RFM va dashboard hisobotlarini quramiz."
      },
      {
        type: "code",
        title: "seed-sotuvlar.sql",
        code: `INSERT INTO analitika.fakt_sotuv (buyurtma_id, mijoz_id, oy, summa) VALUES
    (1001, 1, '2024-01-01', 1250000.00),
    (1002, 2, '2024-01-01', 950000.00),
    (1003, 1, '2024-02-01', 2400000.00),
    (1004, 2, '2024-02-01', 700000.00),
    (1005, 3, '2024-02-01', 1850000.00),
    (1006, 4, '2024-02-01', 450000.00),
    (1007, 1, '2024-03-01', 3200000.00),
    (1008, 3, '2024-03-01', 1100000.00),
    (1009, 4, '2024-03-01', 2300000.00),
    (1010, 5, '2024-03-01', 12500000.00),
    (1011, 6, '2024-03-01', 950000.00),
    (1012, 1, '2024-04-01', 1450000.00),
    (1013, 2, '2024-04-01', 3200000.00),
    (1014, 5, '2024-04-01', 720000.00),
    (1015, 7, '2024-04-01', 1850000.00),
    (1016, 8, '2024-04-01', 350000.00),
    (1017, 1, '2024-05-01', 12850000.00),
    (1018, 3, '2024-05-01', 1410000.00),
    (1019, 6, '2024-05-01', 1080000.00),
    (1020, 7, '2024-05-01', 3700000.00),
    (1021, 9, '2024-05-01', 950000.00),
    (1022, 10, '2024-05-01', 700000.00),
    (1023, 1, '2024-06-01', 6400000.00),
    (1024, 2, '2024-06-01', 2400000.00),
    (1025, 4, '2024-06-01', 1080000.00),
    (1026, 5, '2024-06-01', 1850000.00),
    (1027, 8, '2024-06-01', 12500000.00),
    (1028, 9, '2024-06-01', 3200000.00),
    (1029, 10, '2024-06-01', 450000.00),
    (1030, 1, '2024-07-01', 2100000.00),
    (1031, 2, '2024-07-01', 1750000.00),
    (1032, 3, '2024-07-01', 3200000.00),
    (1033, 5, '2024-07-01', 900000.00),
    (1034, 7, '2024-07-01', 2400000.00),
    (1035, 9, '2024-07-01', 1800000.00),
    (1036, 10, '2024-07-01', 1250000.00);`,
        output: `INSERT 0 36`,
        outputLabel: "Natija"
      },
      {
        type: "note",
        variant: "tip",
        title: "Reproduktivlik",
        html: "Loyiha seed'i kod sifatida saqlanadi, shuning uchun istalgan muhitda bir xil natijani beradi. <code>DROP SCHEMA ... CASCADE</code> faqat o'quv muhitida xavfsiz — ishlab chiqarishda bunday buyruqni hech qachon qo'lda bajarmang. Har bir loyiha qadamidan keyin <code>count(*)</code> va nazorat summalarini yozib boring; keyingi darslarda natijalar shu ma'lumotga tayanadi."
      }
    ],
    quiz: [
      {
        q: "Loyihadagi fakt_sotuv grain'i nima?",
        options: [
          "Bitta mijoz × oy × buyurtma",
          "Butun kompaniya yillik savdosi",
          "Faqat mahsulot kategoriyasi",
          "Har bir sahifa ko'rishi"
        ],
        answer: 0,
        explain: "Har bir qator bitta mijozning bir oydagi bitta buyurtmasini ifodalaydi."
      },
      {
        q: "Nega o'quv loyihasida seed ma'lumotlar kodda saqlanadi?",
        options: [
          "Bir xil natijani qayta ishlab chiqarish uchun",
          "Fayl hajmini oshirish uchun",
          "Indekslarni o'chirish uchun",
          "Tranzaksiyani bloklash uchun"
        ],
        answer: 0,
        explain: "Seed kodda bo'lsa, har bir muhitda bir xil tahlil natijalari olinadi va mashqlarni tekshirish oson."
      },
      {
        q: "DROP SCHEMA ... CASCADE qayerda xavfsiz?",
        options: [
          "Faqat o'quv yoki vaqtinchalik muhitda",
          "Har qanday ishlab chiqarish bazasida",
          "Faqat replikada",
          "Faqat zaxira nusxada"
        ],
        answer: 0,
        explain: "CASCADE bog'langan obyektlarni ham o'chiradi; ishlab chiqarishda bu qaytarilmas yo'qotishga olib keladi."
      }
    ]
  },
  {
    id: 92,
    title: "Loyiha 2: kohort va retention tahlili",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<b>Kohort</b> — bir xil davrda birinchi marta faol bo'lgan mijozlar guruhi. <b>Retention</b> — shu guruhdan qancha mijoz keyingi oylarda ham faol qolganini ko'rsatadigan foiz. Bu metrika o'sish sifatini baholaydi: yangi mijozlar kelishi yetarlimi yoki ular tez yo'qoladimi? Kohort tahlili uchun har bir mijozning birinchi oyi va keyingi faollik oylarini bilish kerak."
      },
      {
        type: "code",
        title: "kohort-retention.sql",
        code: `WITH kohort AS (
    SELECT mijoz_id, min(oy) AS kohort_oy
    FROM analitika.fakt_sotuv
    GROUP BY mijoz_id
),
faollik AS (
    SELECT f.mijoz_id,
           k.kohort_oy,
           f.oy,
           (EXTRACT(YEAR FROM age(f.oy, k.kohort_oy)) * 12
            + EXTRACT(MONTH FROM age(f.oy, k.kohort_oy)))::int AS oy_indeksi
    FROM analitika.fakt_sotuv f
    JOIN kohort k USING (mijoz_id)
)
SELECT k.kohort_oy,
       count(DISTINCT k.mijoz_id) AS hajm,
       round(100.0 * count(DISTINCT CASE WHEN f.oy_indeksi = 1
             THEN f.mijoz_id END) / count(DISTINCT k.mijoz_id), 1) AS m1,
       round(100.0 * count(DISTINCT CASE WHEN f.oy_indeksi = 2
             THEN f.mijoz_id END) / count(DISTINCT k.mijoz_id), 1) AS m2
FROM kohort k
LEFT JOIN faollik f USING (mijoz_id, kohort_oy)
GROUP BY k.kohort_oy
ORDER BY k.kohort_oy;`,
        output: `kohort_oy  | hajm |  m1   |  m2
------------+------+-------+-------
2024-01-01 |    2 | 100.0 |  50.0
2024-02-01 |    2 | 100.0 |   0.0
2024-03-01 |    2 |  50.0 |  50.0
2024-04-01 |    2 |  50.0 |  50.0
2024-05-01 |    2 | 100.0 | 100.0`,
        outputLabel: "Retention matritsasi"
      },
      {
        type: "p",
        html: "Matritsa o'qilishi: yanvar kohortidagi 2 mijozning 100 foizi fevralda, 50 foizi martda faol bo'lgan. Fevral kohorti aprelda umuman qaytmagan (0.0), may kohorti esa iyulda ham to'liq qolgan. Kichik kohortlarda foizlar keskin sakraydi, shuning uchun hajm ustunini ham ko'rsatish muhim. Katta ma'lumotda oylik kohortlar o'rniga haftalik yoki kvartallik kesim ishlatiladi."
      },
      {
        type: "code",
        title: "yanvar-kohorti.sql",
        code: `WITH kohort AS (
    SELECT mijoz_id
    FROM analitika.fakt_sotuv
    GROUP BY mijoz_id
    HAVING min(oy) = DATE '2024-01-01'
)
SELECT f.oy,
       count(DISTINCT f.mijoz_id) AS faol_mijozlar
FROM analitika.fakt_sotuv f
JOIN kohort k USING (mijoz_id)
GROUP BY f.oy
ORDER BY f.oy;`,
        output: `oy         | faol_mijozlar
------------+---------------
2024-01-01 |             2
2024-02-01 |             2
2024-03-01 |             1
2024-04-01 |             2
2024-05-01 |             1
2024-06-01 |             2
2024-07-01 |             2`,
        outputLabel: "Yanvar kohorti"
      },
      {
        type: "note",
        variant: "warning",
        title: "Faollik ta'rifini qat'iy belgilang",
        html: "Retention «faol» so'zini qanday ta'riflashga bog'liq: buyurtma berganmi, tizimga kirganmi, mahsulot ko'rganmi? Har bir hisobotda ta'rif bir xil bo'lishi kerak. To'liq bo'lmagan joriy oyni matritsaga qo'shmang, aks holda oxirgi kohortlar sun'iy ravishda past ko'rinadi. Kohort oyi sifatida ro'yxatdan o'tgan oyni emas, birinchi xarid oyni ishlatish ko'proq biznes ma'nosiga ega."
      }
    ],
    quiz: [
      {
        q: "Kohort tahlilida kohort qanday aniqlanadi?",
        options: [
          "Bir xil davrda birinchi marta faol bo'lgan mijozlar guruhi",
          "Barcha mijozlar ro'yxati",
          "Faqat eng ko'p pul sarflaganlar",
          "Bir shahardagi barcha odamlar"
        ],
        answer: 0,
        explain: "Kohort a'zolari umumiy boshlanish davriga ega; keyingi faollik shu davrga nisbatan o'lchanadi."
      },
      {
        q: "Retention 50% nimani bildiradi?",
        options: [
          "Kohortning yarmi keyingi davrda ham faol",
          "Barcha mijozlar ketgan",
          "Yangi mijozlar ikki barobar ko'paygan",
          "Daromad 50% oshgan"
        ],
        answer: 0,
        explain: "Retention foizi kohort hajmiga nisbatan keyingi davrda faol qolganlar ulushini ko'rsatadi."
      },
      {
        q: "Nega retention jadvalida kohort hajmini ham ko'rsatish kerak?",
        options: [
          "Kichik guruhlarda foizlar beqaror bo'ladi",
          "Hajm foizni o'zgartiradi",
          "Faqat hajm muhim",
          "Hajm indeksni tezlashtiradi"
        ],
        answer: 0,
        explain: "2 kishilik kohortda bitta mijoz 50% farq qiladi; hajm konteksti xulosani to'g'ri talqin qilishga yordam beradi."
      }
    ]
  },
  {
    id: 93,
    title: "Loyiha 3: RFM segmentatsiyasi va LTV",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<b>RFM</b> mijozlarni uch o'lchovda baholaydi: <b>Recency</b> (oxirgi xarid qanchalik yaqin), <b>Frequency</b> (necha oy faol bo'lgan) va <b>Monetary</b> (jami xarid summasi). Har bir o'lchov 1–3 ballga bo'linadi va ularning kombinatsiyasi segmentni beradi. <b>LTV</b> (customer lifetime value) esa mijozning bizga keltirgan tarixiy qiymatini ko'rsatadi; bu loyihada uni jami xarid summasi sifatida hisoblaymiz."
      },
      {
        type: "table",
        head: ["Segment", "Shart", "Amaliy harakat"],
        rows: [
          ["Chempion", "R=3, F≥2, M≥2", "Sodiqlik dasturi, eksklyuziv taklif"],
          ["Sodiq", "R≥2, F≥2", "Cross-sell, yangi mahsulot"],
          ["Yangi", "F=1", "Onboarding, ikkinchi xarid"],
          ["Xavf ostida", "R=1, F≥2", "Qaytarish kampaniyasi"],
          ["Yo'qotilgan", "Boshqa", "Arzon reaktivatsiya"]
        ]
      },
      {
        type: "code",
        title: "rfm-ballari.sql",
        code: `WITH mijoz_oy AS (
    SELECT mijoz_id,
           max(oy) AS oxirgi_oy,
           count(*) AS faollik_oy,
           sum(summa) AS jami
    FROM analitika.fakt_sotuv
    WHERE oy <= DATE '2024-06-01'
    GROUP BY mijoz_id
),
ball AS (
    SELECT mijoz_id,
           CASE WHEN oxirgi_oy >= DATE '2024-06-01' THEN 3
                WHEN oxirgi_oy >= DATE '2024-05-01' THEN 2
                ELSE 1 END AS r,
           CASE WHEN faollik_oy >= 4 THEN 3
                WHEN faollik_oy = 3 THEN 2
                ELSE 1 END AS f,
           CASE WHEN jami >= 10000000 THEN 3
                WHEN jami >= 4000000 THEN 2
                ELSE 1 END AS m,
           jami
    FROM mijoz_oy
)
SELECT mijoz_id, r, f, m,
       (r * 100 + f * 10 + m) AS rfm,
       jami
FROM ball
ORDER BY rfm DESC;`,
        output: `mijoz_id | r | f | m | rfm | jami
---------+---+---+---+-----+-------------
       1 | 3 | 3 | 3 | 333 | 27550000.00
       2 | 3 | 3 | 2 | 332 |  7250000.00
       5 | 3 | 2 | 3 | 323 | 15070000.00
       4 | 3 | 2 | 1 | 321 |  3830000.00
       8 | 3 | 1 | 3 | 313 | 12850000.00
       9 | 3 | 1 | 2 | 312 |  4150000.00
      10 | 3 | 1 | 1 | 311 |  1150000.00
       3 | 2 | 2 | 2 | 222 |  4360000.00
       7 | 2 | 1 | 2 | 212 |  5550000.00
       6 | 2 | 1 | 1 | 211 |  2030000.00`,
        outputLabel: "RFM ballari"
      },
      {
        type: "p",
        html: "1-mijoz barcha uch o'lchovda eng yuqori ballga ega: yaqinda xarid qilgan, tez-tez va katta summada. 8-mijoz faqat ikki oy faol bo'lgan, lekin katta xarid qilgan — u «yangi» segmentda, ammo monetar jihatdan qimmatli. RFM yagona haqiqat emas: biznes konteksti va mijoz umri davomiyligini hisobga olish kerak. Chegaralarni (10 mln, 4 mln) ma'lumot taqsimotiga qarab qayta ko'ring."
      },
      {
        type: "code",
        title: "segment-ltv.sql",
        code: `WITH mijoz_oy AS (
    SELECT mijoz_id,
           max(oy) AS oxirgi_oy,
           count(*) AS faollik_oy,
           sum(summa) AS jami
    FROM analitika.fakt_sotuv
    WHERE oy <= DATE '2024-06-01'
    GROUP BY mijoz_id
),
segment AS (
    SELECT mijoz_id,
           jami,
           CASE WHEN oxirgi_oy >= DATE '2024-06-01' THEN 3
                WHEN oxirgi_oy >= DATE '2024-05-01' THEN 2
                ELSE 1 END AS r,
           CASE WHEN faollik_oy >= 4 THEN 3
                WHEN faollik_oy = 3 THEN 2
                ELSE 1 END AS f,
           CASE WHEN jami >= 10000000 THEN 3
                WHEN jami >= 4000000 THEN 2
                ELSE 1 END AS m
    FROM mijoz_oy
),
belgi AS (
    SELECT *,
           CASE WHEN r = 3 AND f >= 2 AND m >= 2 THEN 'chempion'
                WHEN r >= 2 AND f >= 2 THEN 'sodiq'
                WHEN f = 1 THEN 'yangi'
                ELSE 'xavf ostida' END AS segment
    FROM segment
)
SELECT segment,
       count(*) AS mijozlar,
       sum(jami) AS daromad,
       round(avg(jami), 2) AS ltv
FROM belgi
GROUP BY segment
ORDER BY daromad DESC;`,
        output: `segment   | mijozlar | daromad     | ltv
----------+----------+-------------+-------------
chempion  |        3 | 49870000.00 | 16623333.33
yangi     |        5 | 25730000.00 |  5146000.00
sodiq     |        2 |  8190000.00 |  4095000.00`,
        outputLabel: "Segment va LTV"
      },
      {
        type: "note",
        variant: "tip",
        title: "LTV ni boyitish",
        html: "Tarixiy LTV faqat o'tmishni ko'rsatadi. Prognoz uchun o'rtacha oylik xarid, retention va marjani qo'shing: <code>ARPU × o'rtacha umr × marja</code>. Segmentlar bo'yicha LTV farqi marketing byudjetini taqsimlashda ishlatiladi. RFM chegaralarini har chorakda qayta hisoblang; mijozlar segmentlar orasida o'tishi normal. Natijalarni haftalik snapshot jadvalida saqlasangiz, vaqt bo'yicha o'tishni kuzatish mumkin."
      }
    ],
    quiz: [
      {
        q: "RFM'dagi R nimani o'lchaydi?",
        options: [
          "Oxirgi xarid qanchalik yaqinligini",
          "Xaridlar sonini",
          "Jami summani",
          "Mijoz yoshini"
        ],
        answer: 0,
        explain: "Recency oxirgi faollikdan boshlab o'tgan vaqtni baholaydi; yaqin xarid yuqori ball oladi."
      },
      {
        q: "F=1 bo'lgan mijoz qaysi segmentga tushadi?",
        options: [
          "Yangi",
          "Chempion",
          "Sodiq",
          "Xavf ostida"
        ],
        answer: 0,
        explain: "Bir oylik faollik yangi mijozni bildiradi; uni ikkinchi xaridga undash kerak."
      },
      {
        q: "Ushbu loyihada LTV qanday hisoblanadi?",
        options: [
          "Mijozning jami xarid summasi",
          "Faqat oxirgi oy summasi",
          "Mijozlar soni",
          "O'rtacha chek soni"
        ],
        answer: 0,
        explain: "Bu yerda tarixiy LTV sifatida har bir mijozning jami xarid summasi olinadi."
      }
    ]
  },
  {
    id: 94,
    title: "Loyiha 4: materialized view va dashboard",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Dashboard har safar xom fakt jadvalini skanerlamasligi kerak. <b>Materialized view</b> so'rov natijasini diskda saqlaydi va o'qishni tezlashtiradi. Oddiy view har safar qayta hisoblanadi, matview esa jadval kabi saqlanadi. Narxi — yangilanish: <code>REFRESH MATERIALIZED VIEW</code> butun natijani qayta quradi, <code>CONCURRENTLY</code> esa o'quvchilarni bloklamaydi, lekin unique indeks talab qiladi."
      },
      {
        type: "code",
        title: "oylik-daromad.sql",
        code: `CREATE MATERIALIZED VIEW analitika.oylik_daromad AS
SELECT oy,
       count(DISTINCT mijoz_id) AS mijozlar,
       sum(summa) AS daromad
FROM analitika.fakt_sotuv
GROUP BY oy;

CREATE UNIQUE INDEX idx_oylik_daromad_oy
ON analitika.oylik_daromad (oy);`,
        output: `CREATE MATERIALIZED VIEW
CREATE INDEX`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Unique indeks <code>CONCURRENTLY</code> refresh uchun majburiy. Refresh paytida PostgreSQL eski va yangi natijani solishtiradi va faqat farq qilgan qatorlarni almashtiradi. Bu jarayon oddiy refresh'dan sekinroq, lekin dashboard foydalanuvchilari uchun uzilish bo'lmaydi. Matview ustiga qo'shimcha indekslar ham qo'yish mumkin."
      },
      {
        type: "code",
        title: "dashboard.sql",
        code: `REFRESH MATERIALIZED VIEW CONCURRENTLY
    analitika.oylik_daromad;

SELECT oy, mijozlar, daromad
FROM analitika.oylik_daromad
WHERE oy >= DATE '2024-05-01'
ORDER BY oy;`,
        output: `REFRESH MATERIALIZED VIEW
 oy         | mijozlar | daromad
------------+----------+-------------
 2024-05-01 |        6 | 20690000.00
 2024-06-01 |        7 | 27880000.00
 2024-07-01 |        7 | 13400000.00`,
        outputLabel: "Dashboard"
      },
      {
        type: "table",
        head: ["Yondashuv", "Tezlik", "Yangilik", "Bloklanish"],
        rows: [
          ["View", "Har safar hisob", "Doim yangi", "Yo'q"],
          ["Matview", "Tez o'qish", "Refresh bilan", "Refresh turiga bog'liq"],
          ["CONCURRENTLY", "Sekinroq refresh", "Refresh bilan", "Deyarli yo'q"],
          ["Jadval + ETL", "Eng tez", "Jadval bo'yicha", "Yuklashga bog'liq"],
          ["Kesh", "Juda tez", "TTL", "Yo'q"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Refresh jadvali va monitoring",
        html: "Matview qanchalik tez-tez yangilanishi biznes talabiga bog'liq. Har daqiqada refresh qilish og'ir so'rovni takrorlaydi; kuniga bir marta esa eskirgan raqamlarni ko'rsatadi. <code>pg_cron</code> yoki tashqi scheduler bilan jadval tuzing va refresh davomiyligini logga yozing. Refresh xato bersa, eski natija saqlanib qoladi — bu yaxshi, lekin monitoringda ko'rinishi kerak. Matview'ni jadval deb unutmang: unga to'g'ridan-to'g'ri <code>INSERT</code> qilib bo'lmaydi."
      }
    ],
    quiz: [
      {
        q: "Materialized view oddiy view'dan nimasi bilan farq qiladi?",
        options: [
          "Natijani diskda saqlaydi",
          "Har doim yangi ma'lumot beradi",
          "Faqat SELECT uchun ishlaydi",
          "Indeks talab qilmaydi"
        ],
        answer: 0,
        explain: "Matview natijani jismonan saqlaydi, shuning uchun tez o'qiladi, lekin refresh kerak."
      },
      {
        q: "REFRESH MATERIALIZED VIEW CONCURRENTLY uchun nima zarur?",
        options: [
          "Kamida bitta unique indeks",
          "Trigger",
          "Faqat primary key",
          "Replika"
        ],
        answer: 0,
        explain: "Concurrent refresh eski va yangi natijani solishtirishi uchun unique indeks talab qiladi."
      },
      {
        q: "Matview qachon eskirgan ma'lumot ko'rsatadi?",
        options: [
          "Oxirgi refresh'dan keyin manba o'zgargan bo'lsa",
          "Har safar SELECTda",
          "Faqat indeks bo'lmasa",
          "Faqat NULL bo'lsa"
        ],
        answer: 0,
        explain: "Matview snapshot saqlaydi; manba o'zgarishi refresh bo'lmaguncha ko'rinmaydi."
      }
    ]
  }
];
