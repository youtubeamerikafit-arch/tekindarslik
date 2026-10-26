module.exports = [
  {
    id: 95,
    title: "Loyiha 5: ishlab chiqarish, monitoring va himoya",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Loyiha kod yozilganda tugamaydi. Ishlab chiqarishda baza sekin so'rovlar, replika kechikishi, muvaffaqiyatsiz yuklashlar va qulf kutishlari haqida o'zi signal berishi kerak. <b>Monitoring</b> uchta savolga javob beradi: tizim hozir ishlayaptimi, sekinlashuv qayerda va ma'lumot ishonchli kelayaptimi? Buning uchun metrikalar, alertlar va aniq <b>runbook</b> kerak."
      },
      {
        type: "table",
        head: ["Metrika", "Manba", "Chegara"],
        rows: [
          ["Sekin so'rovlar", "<code>pg_stat_statements</code>", "mean > 500 ms"],
          ["Replika kechikishi", "<code>pg_stat_replication</code>", "> 100 MB yoki > 30 s"],
          ["Ulanishlar", "<code>pg_stat_activity</code>", "80% limit"],
          ["O'lik qatorlar", "<code>pg_stat_user_tables</code>", "jadvalning 20%"],
          ["ETL xatolari", "<code>etl_yuklash</code>", "har qanday xato"],
          ["Disk", "OS metrikasi", "85% to'lgan"]
        ]
      },
      {
        type: "code",
        title: "top-sorovlar.sql",
        code: `SELECT left(query, 40) AS sorov,
       calls,
       round(total_exec_time::numeric, 1) AS jami_ms,
       round(mean_exec_time::numeric, 2) AS ort_ms
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 3;`,
        output: `sorov                                    | calls | jami_ms | ort_ms
-----------------------------------------+-------+---------+--------
REFRESH MATERIALIZED VIEW CONCURRENTLY a |    30 | 18420.4 | 614.01
SELECT oy, mijozlar, daromad FROM analitik |  1440 |   922.8 |   0.64
INSERT INTO analitika.fakt_sotuv (buyurtm |    36 |   210.3 |   5.84`,
        outputLabel: "Eng qimmat so'rovlar"
      },
      {
        type: "p",
        html: "Birinchi qator matview refresh'i — dashboard uchun qabul qilinishi mumkin, chunki u fonda ishlaydi. Ikkinchi so'rov juda ko'p chaqirilgan, lekin o'rtacha 0.64 ms. Uchinchi so'rov ETL yuklamasi. Har bir sekin so'rov uchun egasi, sababi va tuzatish rejasi bo'lishi kerak. <code>pg_stat_statements</code> normalizatsiya qilingan so'rovlarni ko'rsatadi, shuning uchun parametrlar alohida ko'rinmaydi."
      },
      {
        type: "code",
        title: "replika-alert.sql",
        code: `SELECT application_name AS replika,
       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn)::bigint
           AS kechikish_bayt,
       CASE
           WHEN pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn)
                > 104857600 THEN 'ALERT'
           ELSE 'OK'
       END AS holat
FROM pg_stat_replication
ORDER BY kechikish_bayt DESC;`,
        output: `replika  | kechikish_bayt | holat
---------+-----------------+-------
replica1 |         8421376 | OK
replica2 |               0 | OK`,
        outputLabel: "Replika holati"
      },
      {
        type: "ul",
        items: [
          "Har bir alert uchun kim javob berishini va birinchi qadamni yozing.",
          "Sekin so'rovni <code>EXPLAIN (ANALYZE, BUFFERS)</code> bilan tekshirib, indeks yoki so'rovni tuzating.",
          "Replika kechikishi o'ssa, avval tarmoq va replikadagi og'ir so'rovlarni ko'ring.",
          "Migratsiyadan oldin <code>lock_timeout</code> va orqaga qaytish rejasini tayyorlang.",
          "Zaxira tiklashni har chorakda sinab ko'ring va natijani yozib qo'ying."
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Runbook — jamoaning xotirasi",
        html: "Runbook qisqa va amaliy bo'lsin: alomat, tekshiruv so'rovi, xavfsiz tuzatish va eskalyatsiya. Masalan, «sayt sekin» signali uchun birinchi so'rov <code>pg_stat_activity</code> dagi uzoq tranzaksiyalar, keyin <code>pg_locks</code>, keyin <code>pg_stat_statements</code>. Har bir hodisadan keyin <b>postmortem</b> yozing: nima bo'ldi, nima uchun sezilmadi, qanday oldini olamiz. Bu kursning eng muhim amaliy ko'nikmasi."
      }
    ],
    quiz: [
      {
        q: "pg_stat_statements nimani ko'rsatadi?",
        options: [
          "Normalizatsiya qilingan so'rovlar bo'yicha chaqiruv va vaqt statistikasini",
          "Faqat jadval hajmini",
          "Faqat replika holatini",
          "Foydalanuvchi parollarini"
        ],
        answer: 0,
        explain: "U so'rov matni bo'yicha chaqiruvlar, umumiy va o'rtacha bajarilish vaqtini yig'adi."
      },
      {
        q: "Replika kechikishini qaysi view'dan kuzatish mumkin?",
        options: [
          "pg_stat_replication",
          "pg_stat_user_tables",
          "information_schema.columns",
          "pg_indexes"
        ],
        answer: 0,
        explain: "pg_stat_replication replay_lsn va joriy LSN orasidagi farqni hisoblash imkonini beradi."
      },
      {
        q: "Runbook'ning maqsadi nima?",
        options: [
          "Hodisaga javobni standartlashtirish va tezlashtirish",
          "Barcha so'rovlarni sekinlashtirish",
          "Indekslarni o'chirish",
          "Faqat hisobot chiqarish"
        ],
        answer: 0,
        explain: "Aniq qadamlar jamoaga stress paytida to'g'ri va xavfsiz harakat qilish imkonini beradi."
      }
    ]
  },
  {
    id: 96,
    title: "Intervyu: JOIN, NULL va agregatlar savollari",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Intervyuda SQL savollari ko'pincha oddiy ko'rinadi, lekin tafsilotda yashiringan. <code>COUNT(*)</code> va <code>COUNT(ustun)</code> farqi, <code>LEFT JOIN</code> dan keyingi filtr, <code>NULL</code> bilan <code>=</code> va <code>NOT IN</code> tuzog'i — eng ko'p uchraydigan mavzular. Javob berishda avval mantiqni tushuntiring, keyin so'rovni yozing."
      },
      {
        type: "table",
        head: ["Savol", "Tuzoq", "To'g'ri yondashuv"],
        rows: [
          ["Har kategoriyada nechta mahsulot?", "LEFT JOIN + COUNT(*)", "COUNT(m.id)"],
          ["NULL qiymatlarni topish", "<code>= NULL</code>", "<code>IS NULL</code>"],
          ["NOT IN ro'yxat", "Ro'yxatda NULL bo'lsa", "<code>NOT EXISTS</code>"],
          ["O'rtacha", "NULL qatorlar hisobga olinmaydi", "COALESCE yoki FILTER"],
          ["Guruhda bo'sh guruh", "INNER JOIN bo'sh guruhni yo'qotadi", "LEFT JOIN"]
        ]
      },
      {
        type: "code",
        title: "kategoriya-soni.sql",
        code: `SELECT k.kategoriya,
       count(m.id) AS mahsulotlar
FROM (VALUES
        ('Elektronika'), ('Mebel'), ('Oshxona'), ('Sport')
     ) AS k(kategoriya)
LEFT JOIN mahsulotlar m
       ON m.kategoriya = k.kategoriya
GROUP BY k.kategoriya
ORDER BY k.kategoriya;`,
        output: `kategoriya  | mahsulotlar
------------+-------------
Elektronika |           4
Mebel       |           2
Oshxona     |           2
Sport       |           0`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "<code>COUNT(*)</code> qatorlarni sanaydi, shuning uchun mos mahsulot bo'lmasa ham 1 qaytaradi. <code>COUNT(m.id)</code> esa faqat NULL bo'lmagan id larni sanaydi va Sport uchun 0 beradi. Bu farq intervyuda eng ko'p tekshiriladigan nuqtalardan biri. <code>LEFT JOIN</code> dan keyin o'ng jadval ustuniga <code>WHERE</code> sharti qo'shsangiz, join amalda INNER JOIN ga aylanadi — shartni <code>ON</code> ichiga ko'chirish kerak."
      },
      {
        type: "code",
        title: "null-tuzoqlari.sql",
        code: `SELECT count(*) AS buyurtmalar,
       count(DISTINCT mijoz_id) AS mijozlar,
       count(*) FILTER (WHERE jami_summa > 1000000) AS yirik,
       count(*) - count(DISTINCT mijoz_id) AS farq
FROM buyurtmalar;`,
        output: `buyurtmalar | mijozlar | yirik | farq
-------------+----------+-------+------
          12 |        9 |     7 |    3`,
        outputLabel: "Natija"
      },
      {
        type: "note",
        variant: "tip",
        title: "Javobni tushuntirish tartibi",
        html: "Intervyuda avval biznes savolni aniqlang: «kategoriya» nima, «mahsulot» deganda faol mahsulotmi yoki barchasi? Keyin grain va join turini ayting, oxirida so'rovni yozing. <code>NOT IN (SELECT ...)</code> ichida NULL bo'lsa, natija bo'sh bo'lishi mumkin; bunday joyda <code>NOT EXISTS</code> xavfsiz. Agregatda <code>FILTER (WHERE ...)</code> bir nechta shartli ko'rsatkichni bitta so'rovda beradi."
      }
    ],
    quiz: [
      {
        q: "LEFT JOIN dan keyin nechta mahsulot borligini to'g'ri sanash uchun qaysi funksiya ishlatiladi?",
        options: [
          "COUNT(*)",
          "COUNT(m.id)",
          "SUM(m.id)",
          "COUNT(DISTINCT k.kategoriya)"
        ],
        answer: 1,
        explain: "COUNT(m.id) NULL larni sanamaydi, shuning uchun mos mahsulot yo'q kategoriyada 0 beradi."
      },
      {
        q: "WHERE ustun = NULL sharti nima qaytaradi?",
        options: [
          "Barcha NULL qatorlarni",
          "Hech qanday qatorni, chunki NULL bilan = noma'lum beradi",
          "Barcha qatorlarni",
          "Xato beradi"
        ],
        answer: 1,
        explain: "NULL bilan tenglik TRUE emas, UNKNOWN qaytaradi; NULL tekshirish uchun IS NULL ishlatiladi."
      },
      {
        q: "NOT IN ichidagi NULL qiymat qanday xavf tug'diradi?",
        options: [
          "Natijani bo'sh qilishi mumkin",
          "So'rovni tezlashtiradi",
          "Indeks yaratadi",
          "Faqat MySQL'da ishlaydi"
        ],
        answer: 0,
        explain: "NULL bilan solishtirish UNKNOWN beradi; NOT IN sharti hech qachon TRUE bo'lmasligi mumkin. NOT EXISTS xavfsizroq."
      }
    ]
  },
  {
    id: 97,
    title: "Intervyu: oynali funksiyalar, CTE va top-N",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Oynali funksiyalar intervyuda deyarli har doim so'raladi: har guruhda eng yuqori N ta qator, oldingi qator bilan farq, running total. Asosiy tuzoq — <code>WHERE</code> da oynali funksiyani ishlatib bo'lmaydi; u <code>SELECT</code> dan keyin hisoblanadi, shuning uchun CTE yoki subquery kerak. <code>ROW_NUMBER</code>, <code>RANK</code> va <code>DENSE_RANK</code> teng qiymatlarda turlicha ishlaydi."
      },
      {
        type: "table",
        head: ["Funksiya", "Teng qiymatda", "Misol"],
        rows: [
          ["ROW_NUMBER", "Tartib bo'yicha 1,2,3", "Unikal o'rin"],
          ["RANK", "1,1,3", "Musobaqa o'rinlari"],
          ["DENSE_RANK", "1,1,2", "Zich o'rinlar"],
          ["LAG/LEAD", "Oldingi/keyingi qator", "Farq hisoblash"],
          ["NTILE", "Guruhlarga bo'ladi", "Kvantillar"]
        ]
      },
      {
        type: "code",
        title: "top-n.sql",
        code: `WITH reyting AS (
    SELECT kategoriya,
           nom,
           narx,
           row_number() OVER (
               PARTITION BY kategoriya
               ORDER BY narx DESC
           ) AS rn
    FROM mahsulotlar
)
SELECT kategoriya, nom, narx
FROM reyting
WHERE rn = 1
ORDER BY kategoriya;`,
        output: `kategoriya  | nom              | narx
------------+------------------+-------------
Aksessuar   | Ryukzak 25L      | 350000.00
Elektronika | Noutbuk Pro 14   | 12500000.00
Mebel       | Yozuv stoli      | 2400000.00
Oshxona     | Aeropress        | 720000.00
Uy          | Choyshab toplami | 450000.00`,
        outputLabel: "Har kategoriyada eng qimmat"
      },
      {
        type: "p",
        html: "CTE ichida <code>row_number()</code> hisoblanadi, tashqi so'rovda esa <code>rn = 1</code> sharti qo'llanadi. Oynali funksiyani to'g'ridan-to'g'ri <code>WHERE</code> da ishlatsangiz, PostgreSQL xato beradi. Agar teng narxlilar ham kerak bo'lsa, <code>RANK</code> yoki <code>DENSE_RANK</code> tanlanadi. Top-N har guruhda <code>LATERAL</code> yoki indeks bilan ham tezlashtirilishi mumkin."
      },
      {
        type: "code",
        title: "gaps-islands.sql",
        code: `WITH kunlar(kun) AS (
    VALUES (1), (2), (3), (5), (6), (8)
),
guruh AS (
    SELECT kun,
           kun - row_number() OVER (ORDER BY kun) AS guruh_raqami
    FROM kunlar
)
SELECT min(kun) AS boshlanish,
       max(kun) AS tugash,
       count(*) AS kunlar_soni
FROM guruh
GROUP BY guruh_raqami
ORDER BY boshlanish;`,
        output: `boshlanish | tugash | kunlar_soni
------------+--------+-------------
          1 |      3 |            3
          5 |      6 |            2
          8 |      8 |            1`,
        outputLabel: "Uzluksiz oraliqlar"
      },
      {
        type: "note",
        variant: "tip",
        title: "Rekursiya va CTE",
        html: "Rekursiv CTE savolida anchor va recursive qismni ajratib tushuntiring. Halqa bo'lishi mumkinligini ayting va <code>CYCLE</code> yoki yo'l massivi bilan to'xtatishni taklif qiling. <code>WITH ... MATERIALIZED</code> og'ir CTE natijasini bir marta hisoblashga majbur qiladi; PostgreSQL 12+ da CTE odatda inline bo'ladi. Intervyuda «qaysi reja chiqadi?» deb so'ralsa, <code>EXPLAIN</code> bilan tekshirishni taklif qiling."
      }
    ],
    quiz: [
      {
        q: "Nega oynali funksiyani WHERE ichida ishlatib bo'lmaydi?",
        options: [
          "U SELECT ro'yxatidan keyin hisoblanadi",
          "U faqat MySQL'da mavjud",
          "U indeks talab qiladi",
          "U faqat raqamlar bilan ishlaydi"
        ],
        answer: 0,
        explain: "WHERE qatorlarni filtrlashda bajariladi, oyna esa SELECT bosqichida hisoblanadi; shuning uchun CTE yoki subquery kerak."
      },
      {
        q: "RANK va DENSE_RANK teng qiymatlarda qanday farqlanadi?",
        options: [
          "RANK keyingi o'rinni tashlab ketadi, DENSE_RANK ketma-ket beradi",
          "Ular bir xil",
          "DENSE_RANK faqat bitta qator qaytaradi",
          "RANK NULL bilan ishlamaydi"
        ],
        answer: 0,
        explain: "RANK 1,1,3 beradi; DENSE_RANK 1,1,2 beradi."
      },
      {
        q: "Top-N per group so'rovida qaysi konstruksiya ishlatiladi?",
        options: [
          "PARTITION BY va ROW_NUMBER, keyin tashqi filtr",
          "Faqat GROUP BY",
          "Faqat ORDER BY",
          "Faqat DISTINCT"
        ],
        answer: 0,
        explain: "Guruh ichida raqamlash va tashqi so'rovda rn <= N sharti klassik yechimdir."
      }
    ]
  },
  {
    id: 98,
    title: "PostgreSQL, MySQL va SQLite: tanlov mezonlari",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Uch tizim ham SQL bilan ishlaydi, lekin maqsadi boshqacha. <b>PostgreSQL</b> — boy tur tizimi, kuchli planner, JSONB, PostGIS va kengaytmalar. <b>MySQL</b> — keng tarqalgan, oddiy replikatsiya va ko'p hosting bilan mos. <b>SQLite</b> — server talab qilmaydigan ichki baza; mobil ilova, test va kichik vositalar uchun ideal. Tanlov litsenziya, jamoa tajribasi va ish yuklamasiga bog'liq."
      },
      {
        type: "table",
        head: ["Mezon", "PostgreSQL", "MySQL", "SQLite"],
        rows: [
          ["Tur tizimi", "Juda boy, custom type", "Yaxshi, cheklanganroq", "Dinamik, 5 tur"],
          ["JSON", "JSONB + GIN", "JSON, cheklangan indeks", "JSON1 kengaytmasi"],
          ["To'liq matn", "tsvector + GIN", "FULLTEXT indeks", "FTS5"],
          ["Tranzaksiya", "To'liq, DDL ham", "InnoDB, DDL alohida", "To'liq, bitta yozuvchi"],
          ["Replikatsiya", "Physical/logical", "Binlog asosida", "Yo'q (fayl nusxasi)"],
          ["Concurrency", "MVCC, yuqori", "InnoDB MVCC", "Bitta yozuvchi"]
        ]
      },
      {
        type: "code",
        title: "distinct-on.sql",
        code: `SELECT DISTINCT ON (kategoriya)
       kategoriya, nom, narx
FROM mahsulotlar
ORDER BY kategoriya, narx DESC;`,
        output: `kategoriya  | nom              | narx
------------+------------------+-------------
Aksessuar   | Ryukzak 25L      | 350000.00
Elektronika | Noutbuk Pro 14   | 12500000.00
Mebel       | Yozuv stoli      | 2400000.00
Oshxona     | Aeropress        | 720000.00
Uy          | Choyshab toplami | 450000.00`,
        outputLabel: "PostgreSQL usuli"
      },
      {
        type: "p",
        html: "PostgreSQL'ning <code>DISTINCT ON</code> qisqartmasi MySQL'da yo'q. MySQL 8 da shu natija oynali funksiya bilan olinadi. Ikkala so'rov bir xil natija beradi, lekin reja va indeks talablari farq qiladi. Eski MySQL versiyalarida oynali funksiyalar umuman yo'q; SQLite 3.25+ da mavjud. Ko'chirishda sintaksis emas, semantika va tranzaksiya xatti-harakatini ham tekshiring."
      },
      {
        type: "code",
        title: "mysql-window.sql",
        code: `SELECT kategoriya, nom, narx
FROM (
    SELECT kategoriya, nom, narx,
           ROW_NUMBER() OVER (
               PARTITION BY kategoriya
               ORDER BY narx DESC
           ) AS rn
    FROM mahsulotlar
) t
WHERE rn = 1
ORDER BY kategoriya;`,
        output: `kategoriya  | nom              | narx
------------+------------------+-------------
Aksessuar   | Ryukzak 25L      | 350000.00
Elektronika | Noutbuk Pro 14   | 12500000.00
Mebel       | Yozuv stoli      | 2400000.00
Oshxona     | Aeropress        | 720000.00
Uy          | Choyshab toplami | 450000.00`,
        outputLabel: "MySQL 8 usuli"
      },
      {
        type: "note",
        variant: "tip",
        title: "Amaliy tanlov",
        html: "Murakkab analitika, geoma'lumot, JSON va kengaytmalar kerak bo'lsa PostgreSQL tanlanadi. Keng hosting va oddiy OLTP uchun MySQL qulay. SQLite'ni ko'p yozuvchi veb-ilova uchun ishlatmang: u butun bazani bitta fayl bilan qulflaydi. Har qanday tanlovda migratsiya yo'lini oldindan o'ylang: ma'lumot turlari, <code>NULL</code> semantikasi, identifikatorlar va tranzaksiya izolyatsiyasi farq qiladi."
      }
    ],
    quiz: [
      {
        q: "PostgreSQL'da INSERT natijasini darhol qaytarish uchun nima ishlatiladi?",
        options: [
          "RETURNING",
          "LAST_INSERT_ID()",
          "OUTPUT",
          "SELECT LASTVAL()"
        ],
        answer: 0,
        explain: "PostgreSQL RETURNING bandi qo'shilgan yoki yangilangan qatorlarni qaytaradi."
      },
      {
        q: "MySQL'da takroriy kalitda yangilash uchun qaysi sintaksis ishlatiladi?",
        options: [
          "ON CONFLICT DO UPDATE",
          "ON DUPLICATE KEY UPDATE",
          "MERGE",
          "UPSERT"
        ],
        answer: 1,
        explain: "MySQL ON DUPLICATE KEY UPDATE dan foydalanadi; PostgreSQL'da ON CONFLICT mavjud."
      },
      {
        q: "SQLite qaysi holat uchun eng mos?",
        options: [
          "Mobil ilova yoki kichik ichki vosita",
          "Yuqori parallel yozuvli veb-baza",
          "Ko'p tugunli sharding",
          "Katta analitik ombor"
        ],
        answer: 0,
        explain: "SQLite serversiz va faylga asoslangan; u kichik, bitta yozuvchi stsenariylar uchun qulay."
      }
    ]
  },
  {
    id: 99,
    title: "Yakuniy takrorlash: 30 kunlik reja va savollar xaritasi",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Kurs tugadi, lekin ko'nikma takrorlash bilan mustahkamlanadi. Keyingi 30 kun uchun reja tuzamiz: birinchi hafta asoslar va JOIN, ikkinchi hafta analitika, uchinchi hafta indeks va tranzaksiya, to'rtinchi hafta loyiha va intervyu. Har kuni 45–60 daqiqa yetarli; muhimi — har kuni amaliy so'rov yozish."
      },
      {
        type: "table",
        head: ["Hafta", "Mavzular", "Amaliy natija"],
        rows: [
          ["1", "SELECT, JOIN, NULL, agregatlar", "10 ta intervyu savoli"],
          ["2", "CTE, oynali funksiyalar, OLAP", "Kohort va RFM hisoboti"],
          ["3", "Indeks, EXPLAIN, tranzaksiya, qulflar", "3 ta sekin so'rovni tezlashtirish"],
          ["4", "Loyiha, xavfsizlik, zaxira, intervyu", "Yakuniy imtihon va runbook"]
        ]
      },
      {
        type: "code",
        title: "baza-hajmi.sql",
        code: `SELECT relname,
       pg_size_pretty(pg_total_relation_size(relid)) AS hajm,
       n_live_tup
FROM pg_stat_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 3;`,
        output: `relname            | hajm   | n_live_tup
-------------------+--------+------------
buyurtma_qatorlari | 96 kB  | 20
buyurtmalar        | 48 kB  | 12
mijozlar           | 32 kB  | 10`,
        outputLabel: "Eng katta jadvallar"
      },
      {
        type: "p",
        html: "Bu so'rov qaysi jadvallar eng ko'p joy egallayotganini ko'rsatadi. Kichik o'quv bazasida farq kichik, lekin ishlab chiqarishda <code>pg_total_relation_size</code> indekslar va TOAST'ni ham qo'shadi. Hajm o'sishini vaqt bo'yicha kuzatish disk rejasini tuzishga yordam beradi. Katta jadvalda <code>n_live_tup</code> taxminiy ekanini unutmang."
      },
      {
        type: "code",
        title: "tayyorlik-tekshiruvi.sql",
        code: `SELECT
    (SELECT count(*) FROM etl_yuklash WHERE holat = 'xato') AS xato_yuklash,
    (SELECT count(*) FROM pg_stat_activity
     WHERE state = 'idle in transaction') AS osilgan,
    (SELECT count(*) FROM pg_stat_replication) AS replikalar,
    (SELECT count(*) FROM pg_stat_activity
     WHERE query_start < now() - interval '5 minutes'
       AND state = 'active') AS uzoq_sorov;`,
        output: `xato_yuklash | osilgan | replikalar | uzoq_sorov
--------------+---------+------------+------------
            0 |       0 |          2 |          0`,
        outputLabel: "Ishga tayyorlik"
      },
      {
        type: "ul",
        items: [
          "Har kuni bitta real savolni o'zingiz yozib, natijani qo'lda tekshiring.",
          "Sekin so'rovni <code>EXPLAIN ANALYZE</code> bilan tahlil qilishni odat qiling.",
          "Yozgan so'rovingiz uchun indeks kerakmi yoki yo'qmi — asoslab bering.",
          "Tranzaksiya va qulf stsenariylarini ikki sessiyada sinab ko'ring.",
          "Yakuniy imtihondan oldin 96–98 darslardagi savollarni takrorlang."
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Keyingi qadam",
        html: "Endi siz SELECT'dan tortib partition, replikatsiya, xavfsizlik va analitik loyihagacha bo'lgan yo'lni bosib o'tdingiz. Keyingi bosqich — haqiqiy loyihada ishlash: kichik API uchun sxema loyihalash, migratsiyalar yozish va monitoring o'rnatish. Har bir yangi mavzuni kichik tajriba bilan mustahkamlang. Yakuniy imtihonda omad tilaymiz!"
      }
    ],
    quiz: [
      {
        q: "30 kunlik rejada birinchi hafta nimaga qaratilgan?",
        options: [
          "Asoslar, JOIN, NULL va agregatlar",
          "Faqat replikatsiya",
          "Faqat shifrlash",
          "Faqat partition",
        ],
        answer: 0,
        explain: "Birinchi hafta poydevorni mustahkamlaydi: filtrlash, bog'lash, NULL semantikasi va agregatlar."
      },
      {
        q: "Nega n_live_tup ni aniq qatorlar soni deb hisoblamaslik kerak?",
        options: [
          "U statistika yig'uvchi tomonidan taxminiy yangilanadi",
          "U faqat indekslarni sanaydi",
          "U NULL qatorlarni sanamaydi",
          "U faqat MySQL'da mavjud"
        ],
        answer: 0,
        explain: "pg_stat_user_tables ko'rsatkichlari taxminiy; aniq son uchun count(*) kerak."
      },
      {
        q: "Ishga tayyorlik tekshiruvida idle in transaction sessiyalar nega muhim?",
        options: [
          "Ular VACUUM va qulflarga xalal beradi",
          "Ular so'rovni tezlashtiradi",
          "Ular indeks yaratadi",
          "Ular replikani o'chiradi"
        ],
        answer: 0,
        explain: "Uzoq ochiq tranzaksiya eski versiyalarni ushlab turadi va bloklanishga sabab bo'ladi."
      }
    ]
  }
];
