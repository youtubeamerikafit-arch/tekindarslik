module.exports = [
  {
    id: 75,
    title: "JSONB: path operatorlari va aggregatsiya",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "JSONB PostgreSQL'da ikkilik formatda saqlanadigan JSON turi. U qidiruv va indekslash uchun qulay, matn esa qayta yozilganda kalitlar tartibi va bo'sh joylar normallashtiriladi. <code>JSON</code> turi matnni aynan saqlaydi, <code>JSONB</code> esa tahlil qilingan ko'rinishda saqlaydi. Ko'p hollarda JSONB tanlanadi: u operatorlar, GIN indeks va <code>jsonpath</code> bilan yaxshiroq ishlaydi."
      },
      {
        type: "table",
        head: ["Operator", "Natija turi", "Misol"],
        rows: [
          ["<code>j -> 'kalit'</code>", "jsonb", "Ichki obyekt yoki massiv"],
          ["<code>j ->> 'kalit'</code>", "text", "Matn qiymat"],
          ["<code>j #> '{a,b}'</code>", "jsonb", "Chuqur path"],
          ["<code>j #>> '{a,b}'</code>", "text", "Chuqur path matni"],
          ["<code>j @> '{\"a\":1}'</code>", "boolean", "O'z ichiga oladimi"],
          ["<code>j ? 'kalit'</code>", "boolean", "Kalit mavjudmi"]
        ]
      },
      {
        type: "code",
        title: "jsonb-sorov.sql",
        code: `WITH hujjat AS (
    SELECT '{"id":101,
             "mijoz":{"ism":"Aziza","shahar":"Toshkent"},
             "qatorlar":[{"nom":"Noutbuk","miqdor":1},
                         {"nom":"Sichqoncha","miqdor":2}]}'::jsonb AS j
)
SELECT j->>'id' AS id,
       j#>>'{mijoz,ism}' AS ism,
       jsonb_array_length(j->'qatorlar') AS qatorlar_soni,
       (j->'qatorlar'->0->>'miqdor')::int AS birinchi_miqdor
FROM hujjat;`,
        output: `id  | ism   | qatorlar_soni | birinchi_miqdor
----+-------+---------------+-----------------
101 | Aziza | 2             | 1`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "<code>-></code> JSON qiymatini, <code>->></code> esa uni matnga aylantirib qaytaradi. Massiv elementiga <code>-> 0</code> bilan murojaat qilinadi; indekslar noldan boshlanadi. Matnni songa aylantirish uchun <code>::int</code> yoki <code>CAST</code> ishlatiladi. JSONB ichidagi maydon bo'yicha filtr juda tez-tez uchraydi, shuning uchun unga GIN indeks qo'yish foydali."
      },
      {
        type: "code",
        title: "jsonb-agregatsiya.sql",
        code: `WITH qatorlar AS (
    SELECT * FROM (VALUES
        (101, 'Noutbuk', 1, 12500000),
        (101, 'Sichqoncha', 2, 280000)
    ) AS v(buyurtma_id, nom, miqdor, narx)
)
SELECT buyurtma_id,
       jsonb_agg(jsonb_build_object(
           'nom', nom,
           'miqdor', miqdor
       ) ORDER BY nom) AS tarkib
FROM qatorlar
GROUP BY buyurtma_id;`,
        output: `buyurtma_id | tarkib
------------+--------------------------------------------------------------------
101         | [{"nom": "Noutbuk", "miqdor": 1}, {"nom": "Sichqoncha", "miqdor": 2}]`,
        outputLabel: "JSON massiv"
      },
      {
        type: "note",
        variant: "tip",
        title: "GIN va jsonpath",
        html: "JSONB ustuniga <code>CREATE INDEX ... USING GIN (j jsonb_path_ops)</code> qo'ysangiz, <code>@></code> va <code>?</code> operatorlari tezlashadi. <code>jsonb_path_query</code> va <code>jsonb_path_exists</code> SQL/JSON yo'l sintaksisini beradi, murakkab filtrlarni bitta ifodada yozish mumkin. JSONB ni oddiy jadval o'rnini bosuvchi deb qaramang: tez-tez yangilanadigan maydonlar uchun alohida ustun samaraliroq."
      }
    ],
    quiz: [
      {
        q: "JSONB operatorlaridan qaysi biri matn qiymat qaytaradi?",
        options: [
          "->",
          "->>",
          "#>",
          "@>"
        ],
        answer: 1,
        explain: "->> JSON qiymatini text ga aylantiradi; -> esa jsonb qaytaradi."
      },
      {
        q: "JSONB ustunidagi containment qidiruvini tezlashtirish uchun qaysi indeks mos?",
        options: [
          "B-tree",
          "GIN",
          "BRIN",
          "Hash"
        ],
        answer: 1,
        explain: "GIN JSONB ichidagi kalit va qiymatlarni indekslaydi, @> kabi operatorlarni tezlashtiradi."
      },
      {
        q: "jsonb_agg nimani yig'adi?",
        options: [
          "Qatorlarni bitta JSON massivga",
          "Faqat sonlarni",
          "Jadval indekslarini",
          "Tranzaksiya jurnalini"
        ],
        answer: 0,
        explain: "jsonb_agg guruhdagi qiymatlardan JSON massiv yasaydi, ORDER BY bilan tartibni boshqarish mumkin."
      }
    ]
  },
  {
    id: 76,
    title: "Full-text qidiruv: tsvector, tsquery va GIN",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Full-text qidiruv matnni so'zlarga ajratib, ularni normallashtiradi va tez qidirish uchun indekslaydi. PostgreSQL'da hujjat <b>tsvector</b>, so'rov esa <b>tsquery</b> ko'rinishida bo'ladi. <code>to_tsvector</code> matnni leksemalarga ajratadi, <code>plainto_tsquery</code> foydalanuvchi kiritgan matndan so'rov yasaydi. <code>@@</code> operatori moslikni tekshiradi, <code>ts_rank</code> esa reytingni hisoblaydi."
      },
      {
        type: "code",
        title: "tsvector.sql",
        code: `SELECT id,
       to_tsvector('simple', nom) AS vektor
FROM mahsulotlar
WHERE id IN (1, 2, 8)
ORDER BY id;`,
        output: `id | vektor
---+------------------------------
 1 | '14':3 'noutbuk':1 'pro':2
 2 | 'sichqoncha':2 'simsiz':1
 8 | 'aeropress':1`,
        outputLabel: "Leksemalar"
      },
      {
        type: "p",
        html: "Bu yerda <code>simple</code> konfiguratsiyasi ishlatilgan: u faqat kichik harfga o'giradi va stop-so'zlarni olib tashlamaydi. <code>english</code> konfiguratsiyasi qo'shimchalarni qisqartiradi (<code>running → run</code>) va <code>the</code> kabi so'zlarni tashlaydi. O'zbek tili uchun tayyor stemmer yo'q, shuning uchun amalda <code>simple</code> yoki maxsus dictionary ishlatiladi. Indeks uchun <code>GIN (vektor)</code> eng ko'p qo'llaniladi."
      },
      {
        type: "code",
        title: "fts-qidiruv.sql",
        code: `SELECT id, nom
FROM mahsulotlar
WHERE to_tsvector('simple', nom)
      @@ plainto_tsquery('simple', 'noutbuk pro')
ORDER BY id;`,
        output: `id | nom
---+--------------
 1 | Noutbuk Pro 14`,
        outputLabel: "Natija"
      },
      {
        type: "table",
        head: ["Vosita", "Vazifasi", "Misol"],
        rows: [
          ["<code>to_tsvector</code>", "Matnni leksemalarga ajratadi", "Hujjat vektori"],
          ["<code>plainto_tsquery</code>", "So'zlarni AND bilan bog'laydi", "Oddiy qidiruv"],
          ["<code>to_tsquery</code>", "Operatorlar bilan so'rov", "<code>noutbuk & !pro</code>"],
          ["<code>ts_rank</code>", "Reyting hisoblaydi", "Natijalarni saralash"],
          ["<code>ts_headline</code>", "Fragmentni ajratib ko'rsatadi", "Qidiruv natijasida"],
          ["<code>pg_trgm</code>", "Xatolarga chidamli o'xshashlik", "<code>similarity</code>"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Unumdorlik va til",
        html: "Har so'rovda <code>to_tsvector</code> ni qayta hisoblash qimmat. Uni alohida ustunga saqlang yoki <code>generated always as</code> qilib avtomatik yangilang, so'ng GIN indeks qo'ying. Qidiruv so'rovini ham oldindan tayyorlab, parametr bilan bering. <code>ts_rank</code> natijalarni mazmunan yaxshilaydi, lekin indeksdan foydalanishni kafolatlamaydi; <code>@@</code> shartini saqlab qoling."
      }
    ],
    quiz: [
      {
        q: "tsvector nima?",
        options: [
          "Matnning normallashtirilgan leksemalar to'plami",
          "Jadvaldagi qatorlar soni",
          "Indeksning fizik hajmi",
          "Tranzaksiya identifikatori"
        ],
        answer: 0,
        explain: "to_tsvector matnni leksemalar va ularning pozitsiyalariga aylantiradi, qidiruv shu ko'rinishda bajariladi."
      },
      {
        q: "Full-text qidiruv uchun qaysi indeks odatda ishlatiladi?",
        options: [
          "B-tree",
          "GIN",
          "BRIN",
          "Partial unique"
        ],
        answer: 1,
        explain: "GIN tsvector ichidagi leksemalarni indekslaydi va @@ operatorini tezlashtiradi."
      },
      {
        q: "plainto_tsquery qanday so'rov yasaydi?",
        options: [
          "Kiritilgan so'zlarni AND bilan bog'laydi",
          "Faqat bitta so'zni qidiradi",
          "OR bilan majburiy bog'laydi",
          "Regex qidiruv qiladi"
        ],
        answer: 0,
        explain: "plainto_tsquery oddiy matnni leksemalarga ajratib, ularni AND orqali bog'laydi."
      }
    ]
  },
  {
    id: 77,
    title: "Spatial SQL: PostGIS, SRID va GiST",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Geoma'lumotlar bilan ishlash uchun PostgreSQL'ga <b>PostGIS</b> kengaytmasi o'rnatiladi. U <code>geometry</code> va <code>geography</code> turlarini, masofa, kesishish va hudud operatorlarini beradi. <code>geometry</code> tekis koordinatalar bilan, <code>geography</code> esa Yer sferasi bo'yicha aniqroq ishlaydi. Har bir geometriya <b>SRID</b> (spatial reference ID) ga ega bo'lishi kerak; 4326 — WGS84 koordinatalari."
      },
      {
        type: "table",
        head: ["Funksiya", "Vazifasi", "Misol"],
        rows: [
          ["<code>ST_MakePoint</code>", "Nuqta yasaydi", "Koordinata"],
          ["<code>ST_SetSRID</code>", "SRID biriktiradi", "4326"],
          ["<code>ST_Contains</code>", "Polygon ichidaligini tekshiradi", "Hudud"],
          ["<code>ST_DWithin</code>", "Masofa chegarasida", "Yaqin atrof"],
          ["<code>ST_Distance</code>", "Masofani hisoblaydi", "Metr yoki daraja"],
          ["<code>ST_Intersects</code>", "Kesishishni tekshiradi", "Yo'l va hudud"]
        ]
      },
      {
        type: "code",
        title: "hudud-tekshiruvi.sql",
        code: `CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE hududlar (
    id int PRIMARY KEY,
    nom text,
    zona geometry(Polygon, 4326)
);

INSERT INTO hududlar VALUES
(1, 'Toshkent', ST_GeomFromText(
    'POLYGON((69.20 41.25, 69.35 41.25, 69.35 41.36, 69.20 41.36, 69.20 41.25))', 4326)),
(2, 'Samarqand', ST_GeomFromText(
    'POLYGON((66.90 39.58, 67.05 39.58, 67.05 39.70, 66.90 39.70, 66.90 39.58))', 4326));

SELECT nom,
       ST_Contains(zona, ST_SetSRID(ST_MakePoint(69.24, 41.30), 4326)) AS ichida
FROM hududlar
ORDER BY nom;`,
        output: `CREATE EXTENSION
CREATE TABLE
INSERT 0 2
  nom      | ichida
-----------+--------
 Samarqand | f
 Toshkent  | t`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Toshkent nuqtasi o'z polygonida, Samarqand nuqtasi esa yo'q — shuning uchun <code>f</code>. Koordinatalar tartibi <b>lon, lat</b>, ya'ni avval uzunlik, keyin kenglik. Bu ko'p uchraydigan xato: <code>ST_MakePoint(lat, lon)</code> yozilsa, nuqta butunlay boshqa joyga tushadi. Hududlar bo'yicha tez qidiruv uchun GiST indeks qo'yiladi."
      },
      {
        type: "code",
        title: "masofa.sql",
        code: `SELECT round(
           ST_Distance(
               ST_SetSRID(ST_MakePoint(69.2401, 41.2995), 4326),
               ST_SetSRID(ST_MakePoint(69.3345, 41.3111), 4326)
           )::numeric, 4
       ) AS daraja;`,
        output: `daraja
--------
0.0951`,
        outputLabel: "Geometrik masofa"
      },
      {
        type: "note",
        variant: "warning",
        title: "geometry va geography",
        html: "<code>geometry</code> bo'yicha <code>ST_Distance</code> SRID birligida (4326 uchun daraja) qaytaradi. Metr kerak bo'lsa <code>geography</code> turidan yoki <code>ST_DistanceSphere</code> dan foydalaning. Katta hududlarda <code>ST_DWithin</code> indeksdan foydalanadi, oddiy masofa solishtirish esa yo'q. GiST indeks: <code>CREATE INDEX ... ON hududlar USING GIST (zona);</code> — spatial so'rovlar uchun deyarli majburiy."
      }
    ],
    quiz: [
      {
        q: "PostGIS'da koordinatalar qanday tartibda beriladi?",
        options: [
          "Kenglik, uzunlik",
          "Uzunlik, kenglik",
          "Balandlik, vaqt",
          "SRID, geometriya"
        ],
        answer: 1,
        explain: "ST_MakePoint lon, lat tartibida ishlaydi; WGS84'da bu uzunlik va kenglik."
      },
      {
        q: "SRID nimani bildiradi?",
        options: [
          "Geometriyaning koordinata tizimini",
          "Jadvalning egasini",
          "Indeks turini",
          "Masofaning birligini"
        ],
        answer: 0,
        explain: "SRID spatial reference identifikatori bo'lib, koordinatalar qaysi tizimda ekanini belgilaydi."
      },
      {
        q: "Spatial qidiruvni tezlashtirish uchun qaysi indeks mos?",
        options: [
          "B-tree",
          "Hash",
          "GiST",
          "BRIN"
        ],
        answer: 2,
        explain: "GiST geometriya va hudud operatorlarini indekslaydi, ST_Contains va ST_DWithin kabi funksiyalarni tezlashtiradi."
      }
    ]
  },
  {
    id: 78,
    title: "Massivlar, range va multirange turlari",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "PostgreSQL massivlarni bitta ustunda saqlashga ruxsat beradi. Bu teglar, telefon raqamlari yoki kichik ro'yxatlar uchun qulay. <b>Range</b> turlari esa intervalni — vaqt oralig'i, narx chegarasi yoki band qilingan davrni — bitta qiymat sifatida saqlaydi. Massivlar 1 dan boshlab indekslanadi, range'lar esa <code>[</code> va <code>)</code> belgilari bilan ochiq/yopiq chegaralarni ifodalaydi."
      },
      {
        type: "table",
        head: ["Tur", "Misol", "Asosiy operator"],
        rows: [
          ["Massiv", "<code>ARRAY['yangi','premium']</code>", "<code>@></code>, <code>&&</code>, <code>ANY</code>"],
          ["int4range", "<code>int4range(10, 20)</code>", "<code>&&</code>, <code>@></code>"],
          ["daterange", "<code>daterange('2024-06-01','2024-07-01')</code>", "<code>@></code>, <code>-|-</code>"],
          ["tsrange", "Vaqt oralig'i", "<code>&&</code> overlap"],
          ["multirange", "Bir nechta range", "<code>range_agg</code>"]
        ]
      },
      {
        type: "code",
        title: "massiv.sql",
        code: `SELECT ARRAY[1, 2, 3] @> ARRAY[2] AS bor,
       ARRAY[1, 2, 3] && ARRAY[3, 4] AS kesishadi,
       array_length(ARRAY['a', 'b', 'c'], 1) AS uzunlik,
       (ARRAY['a', 'b', 'c'])[2] AS ikkinchi;`,
        output: `bor | kesishadi | uzunlik | ikkinchi
----+------------+---------+----------
t   | t          | 3       | b`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "<code>@></code> — chap massiv o'ng massivning barcha elementlarini o'z ichiga oladimi, <code>&&</code> — umumiy element bormi. Massiv indeksi 1 dan boshlanadi; <code>[2]</code> ikkinchi elementni oladi. Massiv bo'yicha qidiruvni tezlashtirish uchun GIN indeks ishlatiladi: <code>CREATE INDEX ... USING GIN (teglar);</code>. Katta massivlarni normallashtirilgan jadvalga ko'chirish ko'pincha samaraliroq."
      },
      {
        type: "code",
        title: "range.sql",
        code: `SELECT int4range(10, 20) && int4range(15, 25) AS kesishadi,
       int4range(10, 20) @> 15 AS ichida,
       daterange('2024-06-01', '2024-07-01') @> DATE '2024-06-15' AS sanada,
       int4range(10, 20) -|- int4range(20, 30) AS qoshni;`,
        output: `kesishadi | ichida | sanada | qoshni
-----------+--------+--------+--------
t          | t      | t      | t`,
        outputLabel: "Range natijalari"
      },
      {
        type: "note",
        variant: "tip",
        title: "Band qilish va exclusion cheklovi",
        html: "Range turlari band qilingan vaqtni saqlash uchun juda qulay. <code>EXCLUDE USING GIST (xonadon_id WITH =, davr WITH &&)</code> cheklovi bir xonada ikki band oraliq ustma-ust tushishini bazada taqiqlaydi. Bu kalendar va bron tizimlarida poyga holatini oldini oladi. Multirange esa bir nechta uzluksiz bo'lmagan oraliqni bitta ustunda saqlaydi."
      }
    ],
    quiz: [
      {
        q: "PostgreSQL massivining birinchi elementi qaysi indeksda?",
        options: [
          "0",
          "1",
          "NULL",
          "-1"
        ],
        answer: 1,
        explain: "PostgreSQL massivlari 1 dan boshlanadi; [0] mavjud emas."
      },
      {
        q: "Massiv ustunida containment qidiruvini tezlashtirish uchun qaysi indeks mos?",
        options: [
          "GIN",
          "B-tree",
          "BRIN",
          "Hash"
        ],
        answer: 0,
        explain: "GIN massiv elementlarini indekslaydi va @> operatorini tezlashtiradi."
      },
      {
        q: "EXCLUDE USING GIST cheklovi nima qiladi?",
        options: [
          "Bir xil kalit bo'yicha oraliqlar ustma-ust tushishini taqiqlaydi",
          "Jadvalni o'chiradi",
          "Faqat NULL qiymatlarni taqiqlaydi",
          "Indeksni qayta quradi"
        ],
        answer: 0,
        explain: "Exclusion constraint qatorlar juftligi bo'yicha tenglik va overlap shartlarini birga tekshiradi."
      }
    ]
  },
  {
    id: 79,
    title: "Rekursiv CTE: ierarxiya va graf yurishi",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Rekursiv CTE o'z-o'ziga murojaat qiladigan so'rovdir. U ikki qismdan iborat: <b>anchor</b> — boshlang'ich qatorlar, va <b>recursive</b> — oldingi qadam natijasiga bog'langan davom. Har bir qadamda yangi qatorlar qo'shiladi, toki shart bajarilmay qoladi. Bu yondashuv tashkilot ierarxiyasi, kategoriyalar daraxti va graf bo'ylab yurish uchun ishlatiladi."
      },
      {
        type: "code",
        title: "ierarxiya.sql",
        code: `WITH RECURSIVE org(id, ism, boshliq_id) AS (
    VALUES
        (1, 'Dilshod', NULL),
        (2, 'Aziza', 1),
        (3, 'Bek', 1),
        (4, 'Jasur', 2),
        (5, 'Malika', 2),
        (6, 'Nodira', 4)
),
zanjir AS (
    SELECT id, ism, boshliq_id, 1 AS daraja
    FROM org
    WHERE boshliq_id IS NULL
    UNION ALL
    SELECT x.id, x.ism, x.boshliq_id, z.daraja + 1
    FROM org x
    JOIN zanjir z ON x.boshliq_id = z.id
)
SELECT id, ism, daraja
FROM zanjir
ORDER BY daraja, ism;`,
        output: `id | ism     | daraja
---+---------+--------
 1 | Dilshod | 1
 2 | Aziza   | 2
 3 | Bek     | 2
 4 | Jasur   | 3
 5 | Malika  | 3
 6 | Nodira  | 4`,
        outputLabel: "Daraxt"
      },
      {
        type: "p",
        html: "Anchor qism <code>WHERE boshliq_id IS NULL</code> bilan eng yuqori rahbarni topadi. Rekursiv qism har safar oldingi qatordagi xodimga bo'ysunadiganlarni qo'shadi va <code>daraja</code> ni bittaga oshiradi. <code>UNION ALL</code> ishlatiladi, chunki har bir qator faqat bir marta chiqadi; <code>UNION</code> dublikatlarni tekshirib, ortiqcha ish qiladi."
      },
      {
        type: "code",
        title: "yuqoriga-yurish.sql",
        code: `WITH RECURSIVE org(id, ism, boshliq_id) AS (
    VALUES
        (1, 'Dilshod', NULL),
        (2, 'Aziza', 1),
        (3, 'Bek', 1),
        (4, 'Jasur', 2),
        (5, 'Malika', 2),
        (6, 'Nodira', 4)
),
zanjir AS (
    SELECT id, ism, boshliq_id, 1 AS qadam
    FROM org
    WHERE id = 6
    UNION ALL
    SELECT b.id, b.ism, b.boshliq_id, z.qadam + 1
    FROM org b
    JOIN zanjir z ON b.id = z.boshliq_id
)
SELECT id, ism, qadam
FROM zanjir
ORDER BY qadam;`,
        output: `id | ism     | qadam
---+---------+-------
 6 | Nodira  | 1
 4 | Jasur   | 2
 2 | Aziza   | 3
 1 | Dilshod | 4`,
        outputLabel: "Rahbarlar zanjiri"
      },
      {
        type: "table",
        head: ["Xavf", "Sabab", "Chora"],
        rows: [
          ["Cheksiz sikl", "Grafda halqa", "Yo'lni massivda saqlash va tekshirish"],
          ["Katta natija", "Chuqur ierarxiya", "<code>LIMIT</code> yoki chuqurlik sharti"],
          ["Sekin ishlash", "Har qadamda JOIN", "Indeks va materializatsiya"],
          ["Noto'g'ri tartib", "Daraja bo'yicha saralash", "Path ustuni bilan tartiblash"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Halqani to'xtating",
        html: "Agar ma'lumotda <code>A → B → A</code> kabi halqa bo'lsa, rekursiya cheksiz davom etadi. PostgreSQL'da <code>CYCLE</code> bandi yoki yo'lni massivda saqlab, <code>WHERE NOT tugun = ANY(yol)</code> sharti bilan to'xtatish mumkin. Chuqurlik chegarasini ham qo'shing: <code>WHERE qadam &lt; 20</code>. Rekursiv CTE katta natijalarda xotirani ko'p ishlatadi, shuning uchun natijani toraytirib boshlang."
      }
    ],
    quiz: [
      {
        q: "Rekursiv CTE'ning anchor qismi nima qiladi?",
        options: [
          "Boshlang'ich qatorlarni beradi",
          "Barcha qatorlarni o'chiradi",
          "Indeks yaratadi",
          "Tranzaksiyani tugatadi"
        ],
        answer: 0,
        explain: "Anchor birinchi qadam natijasini beradi; recursive qism shundan keyin davom etadi."
      },
      {
        q: "Rekursiv CTE'da nega ko'pincha UNION ALL ishlatiladi?",
        options: [
          "Chunki UNION dublikatlarni tekshirib, ortiqcha xarajat qiladi",
          "Chunki UNION ALL rekursiyani taqiqlaydi",
          "Chunki UNION faqat MySQL'da ishlaydi",
          "Chunki UNION ALL indeks yaratadi"
        ],
        answer: 0,
        explain: "Qatorlar takrorlanmasligi odatda kafolatlangan; UNION ALL ortiqcha deduplikatsiyani oldini oladi."
      },
      {
        q: "Grafdagi halqa rekursiyada qanday muammo tug'diradi?",
        options: [
          "Cheksiz davom etishi mumkin",
          "Natijani avtomatik tartiblaydi",
          "Indeksni o'chiradi",
          "Tranzaksiyani tezlashtiradi"
        ],
        answer: 0,
        explain: "Halqa bo'lsa, har qadamda yangi qator qo'shilib, rekursiya to'xtamaydi; yo'l yoki CYCLE bilan cheklash kerak."
      }
    ]
  }
];
