module.exports = [
  {
    id: 50,
    title: "Query planner anatomiyasi: cost model va statistika",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ikkinchi jildda biz yangi, kattaroq sxema — <b>onlayn do'kon</b> bilan ishlaymiz. Oldingi jilddagi <code>talabalar</code> va <code>kurslar</code> o'rniga endi <code>mijozlar</code>, <code>mahsulotlar</code>, <code>buyurtmalar</code> va <code>buyurtma_qatorlari</code> jadvallari ishlatiladi. Bu jadvallar bir-biriga tashqi kalitlar bilan bog'langan, shuning uchun real loyihalardagi kabi JOIN, agregat va optimizatsiya masalalarini ko'rish mumkin."
      },
      {
        type: "table",
        head: ["Jadval", "Qatorlar", "Vazifasi"],
        rows: [
          ["<code>mijozlar</code>", "10", "Mijoz profili, shahar va segment"],
          ["<code>mahsulotlar</code>", "10", "Katalog, kategoriya, narx va ombor"],
          ["<code>buyurtmalar</code>", "12", "Buyurtma sarlavhasi va holati"],
          ["<code>buyurtma_qatorlari</code>", "20", "Buyurtma ichidagi mahsulot qatorlari"]
        ]
      },
      {
        type: "p",
        html: "PostgreSQL'dagi <b>query planner</b> har bir so'rov uchun bir nechta bajarish rejasini ko'rib chiqadi va eng arzonini tanlaydi. Narx (<b>cost</b>) diskdan sahifa o'qish, qatorlarni qayta ishlash va natijani tayyorlash xarajatlaridan yig'iladi. Planner qancha qator mos kelishini taxmin qilish uchun <code>pg_statistic</code> dagi statistikaga tayanadi; bu statistikaning ko'rinadigan qismi <code>pg_stats</code> view'idir."
      },
      {
        type: "code",
        title: "statistika.sql",
        code: `SELECT attname AS ustun,
       n_distinct,
       null_frac,
       round(100 * null_frac, 1) AS null_foiz
FROM pg_stats
WHERE schemaname = 'public'
  AND tablename = 'buyurtmalar'
ORDER BY attname;`,
        output: `ustun           | n_distinct | null_frac | null_foiz
----------------+------------+-----------+-----------
buyurtma_sanasi | -1         | 0         | 0.0
holat           | 5          | 0         | 0.0
id              | -1         | 0         | 0.0
jami_summa      | -1         | 0         | 0.0
mijoz_id        | 9          | 0         | 0.0`,
        outputLabel: "pg_stats natijasi"
      },
      {
        type: "p",
        html: "Bu yerda <code>n_distinct = -1</code> ustundagi barcha qiymatlar amalda noyob ekanini bildiradi. <code>holat</code> uchun 5 xil qiymat bor, <code>mijoz_id</code> esa 9 xil mijozni qamraydi. Planner aynan shu raqamlardan foydalanib, <code>WHERE holat = 'yetkazilgan'</code> sharti qatorlarning taxminan beshdan birini tanlaydi deb hisoblaydi. Agar statistika eskirgan bo'lsa, taxmin ham, tanlangan reja ham xato bo'ladi."
      },
      {
        type: "code",
        title: "reja-narxi.sql",
        code: `EXPLAIN
SELECT id, mijoz_id, jami_summa
FROM buyurtmalar
WHERE holat = 'yetkazilgan'
  AND jami_summa > 1000000;`,
        output: `Seq Scan on buyurtmalar  (cost=0.00..1.18 rows=6 width=20)
  Filter: (((holat)::text = 'yetkazilgan'::text) AND (jami_summa > '1000000'::numeric))`,
        outputLabel: "So'rov rejasi"
      },
      {
        type: "note",
        variant: "tip",
        title: "Statistikani yangilab turing",
        html: "Katta yuklamali jadvalda qatorlar soni sezilarli o'zgarsa, <code>ANALYZE buyurtmalar;</code> ni qo'lda ishga tushiring. PostgreSQL'da <code>autovacuum</code> odatda buni o'zi qiladi, lekin qisqa muddatli katta importdan keyin darhol <code>ANALYZE</code> qilish rejani to'g'rilaydi. <code>EXPLAIN</code> faqat rejani ko'rsatadi, so'rovni bajarmaydi."
      }
    ],
    quiz: [
      {
        q: "PostgreSQL query planner reja tanlashda asosan nimaga tayanadi?",
        options: [
          "Foydalanuvchining so'rovni qanday yozganiga",
          "Statistika asosidagi qatorlar va xarajat taxminlariga",
          "Jadval nomining alifbo tartibiga",
          "Faqat indekslar soniga"
        ],
        answer: 1,
        explain: "Planner pg_stats kabi statistika yordamida selektivlikni baholaydi va rejalarning cost qiymatini solishtiradi."
      },
      {
        q: "pg_stats view'idagi n_distinct = -1 qiymati nimani anglatadi?",
        options: [
          "Ustundagi qiymatlar amalda noyob",
          "Ustunda faqat bitta qiymat bor",
          "Statistika umuman yig'ilmagan",
          "Ustunda faqat NULL qiymatlar bor"
        ],
        answer: 0,
        explain: "Manfiy qiymat nisbiy emas, mutlaq noyoblikni bildiradi; -1 barcha qiymatlar turlicha degani."
      },
      {
        q: "Jadvalga 500 ming qator qo'shgandan keyin statistika yangilanmasa, qanday xavf bor?",
        options: [
          "Tashqi kalitlar avtomatik o'chadi",
          "Baza ishlamay qoladi",
          "Tranzaksiyalar avtomatik bekor bo'ladi",
          "Planner qatorlar sonini xato baholab, yomon reja tanlashi mumkin"
        ],
        answer: 3,
        explain: "Eskirgan statistika selektivlikni noto'g'ri baholaydi va masalan, juda katta jadvalda noto'g'ri join usulini tanlaydi."
      }
    ]
  },
  {
    id: 51,
    title: "EXPLAIN ANALYZE: haqiqiy vaqt, qatorlar va buferlar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<code>EXPLAIN</code> faqat taxminiy rejani ko'rsatadi. <code>EXPLAIN ANALYZE</code> esa so'rovni haqiqatan bajaradi va har bir tugun uchun real vaqt, qatorlar soni hamda <b>loops</b> qiymatini qo'shadi. <code>BUFFERS</code> qo'shimchasi qancha sahifa keshdan (<code>shared hit</code>) va diskdan (<code>shared read</code>) o'qilganini ko'rsatadi. Bu ma'lumotlar sekin so'rovning qayerda vaqt yo'qotayotganini topishga yordam beradi."
      },
      {
        type: "code",
        title: "analiz-rejasi.sql",
        code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT m.shahar, count(*) AS buyurtmalar
FROM buyurtmalar b
JOIN mijozlar m ON m.id = b.mijoz_id
WHERE b.holat = 'yetkazilgan'
GROUP BY m.shahar
ORDER BY buyurtmalar DESC;`,
        output: `Sort  (cost=2.42..2.43 rows=3 width=17) (actual time=0.092..0.093 rows=3 loops=1)
  Sort Key: (count(*)) DESC
  Sort Method: quicksort  Memory: 25kB
  Buffers: shared hit=3
  ->  HashAggregate  (cost=2.37..2.40 rows=3 width=17) (actual time=0.081..0.083 rows=3 loops=1)
        Group Key: m.shahar
        Buffers: shared hit=3
        ->  Hash Join  (cost=1.23..2.29 rows=8 width=9) (actual time=0.045..0.063 rows=8 loops=1)
              Hash Cond: (b.mijoz_id = m.id)
              Buffers: shared hit=3
              ->  Seq Scan on buyurtmalar b  (cost=0.00..1.12 rows=8 width=4) (actual time=0.011..0.013 rows=8 loops=1)
                    Filter: ((holat)::text = 'yetkazilgan'::text)
                    Rows Removed by Filter: 4
                    Buffers: shared hit=1
              ->  Hash  (cost=1.10..1.10 rows=10 width=13) (actual time=0.018..0.018 rows=10 loops=1)
                    Buckets: 1024  Batches: 1  Memory Usage: 9kB
                    Buffers: shared hit=1
                    ->  Seq Scan on mijozlar m  (cost=0.00..1.10 rows=10 width=13) (actual time=0.006..0.008 rows=10 loops=1)
                          Buffers: shared hit=1
Planning Time: 0.214 ms
Execution Time: 0.142 ms`,
        outputLabel: "ANALYZE natijasi"
      },
      {
        type: "p",
        html: "Rejani pastdan yuqoriga o'qing: avval jadvallar o'qiladi, keyin join va agregat bajariladi. <code>actual time</code> birinchi va oxirgi qator olingan vaqt, <code>rows</code> esa shu tugun qaytargan qatorlar soni. <code>loops</code> bir nechta bo'lsa, umumiy vaqtni hisoblash uchun <code>actual time × loops</code> ni qo'llang. <code>Rows Removed by Filter: 4</code> — jadvaldan 12 qator o'qilib, 4 tasi shartga mos kelmagan."
      },
      {
        type: "table",
        head: ["Ko'rsatkich", "Ma'nosi", "Nimaga qarash kerak"],
        rows: [
          ["<code>cost</code>", "Taxminiy xarajat birligi", "Rejalar orasidagi farq uchun"],
          ["<code>actual time</code>", "Real millisekund", "Eng sekin tugunni topish uchun"],
          ["<code>rows</code>", "Tugundan chiqqan qatorlar", "Taxmin bilan solishtirish uchun"],
          ["<code>loops</code>", "Tugun necha marta bajarilgani", "Actual vaqtni ko'paytirish uchun"],
          ["<code>shared read</code>", "Diskdan o'qilgan sahifa", "Kesh yetishmayotganini bilish uchun"]
        ]
      },
      {
        type: "code",
        title: "sekin-sorovlar.sql",
        code: `SELECT left(query, 42) AS sorov,
       calls,
       round(mean_exec_time::numeric, 2) AS ort_vaqt_ms
FROM pg_stat_statements
WHERE query NOT LIKE '%pg_stat_statements%'
ORDER BY total_exec_time DESC
LIMIT 3;`,
        output: `sorov                                      | calls | ort_vaqt_ms
-------------------------------------------+-------+-------------
SELECT m.shahar, count(*) AS buyurtmalar F | 148   | 0.84
UPDATE buyurtmalar SET holat = $1 WHERE id  | 1204  | 0.12
SELECT id, jami_summa FROM buyurtmalar WHE | 860   | 0.31`,
        outputLabel: "Eng qimmat so'rovlar"
      },
      {
        type: "note",
        variant: "warning",
        title: "Ehtiyotkorlik",
        html: "<code>EXPLAIN ANALYZE</code> so'rovni haqiqatan bajaradi. <code>UPDATE</code>, <code>DELETE</code> yoki <code>INSERT</code> ni tahlil qilishdan oldin tranzaksiya ochib, oxirida <code>ROLLBACK</code> qiling. Ishlab chiqarishda katta so'rovni <code>ANALYZE</code> qilish yuklamani oshiradi; iloji bo'lsa nusxa bazada yoki <code>EXPLAIN (ANALYZE, BUFFERS, WAL, SETTINGS)</code> bilan cheklangan muhitda sinang."
      }
    ],
    quiz: [
      {
        q: "EXPLAIN ANALYZE oddiy EXPLAIN'dan nimasi bilan farq qiladi?",
        options: [
          "Faqat rejani chiroyli formatlaydi",
          "Indekslarni avtomatik yaratadi",
          "So'rovni haqiqatan bajarib, real vaqt va qatorlarni ko'rsatadi",
          "So'rovni bekor qiladi"
        ],
        answer: 2,
        explain: "ANALYZE opsiyasi so'rovni bajaradi va har bir tugun uchun actual time, rows va loops qiymatlarini qo'shadi."
      },
      {
        q: "Rejada actual rows=2, loops=100 bo'lsa, tugun jami nechta qator qaytargan?",
        options: [
          "200",
          "100",
          "2",
          "102"
        ],
        answer: 0,
        explain: "actual rows har bir loop uchun o'rtacha qatorlar soni; jami natija 2 × 100 = 200."
      },
      {
        q: "BUFFERS qo'shimchasidagi shared hit nimani bildiradi?",
        options: [
          "So'rov diskdan o'qigan sahifalar",
          "Indekslar soni",
          "So'rov qaytargan qatorlar",
          "Kerakli sahifalar keshda topilganini"
        ],
        answer: 3,
        explain: "shared hit — shared buffers keshida mavjud bo'lgan sahifalar; shared read esa diskdan o'qilganini bildiradi."
      }
    ]
  },
  {
    id: 52,
    title: "Indeks strategiyalari: partial, expression va covering",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Oddiy indeks har bir qatorni indekslaydi. Ammo ko'p hollarda so'rovlar jadvalning faqat bir qismi bilan ishlaydi yoki ustundagi ifoda bo'yicha qidiradi. Bunday holatlar uchun <b>partial</b> (qismiy), <b>expression</b> (ifodali) va <b>covering</b> (qoplovchi) indekslar mos keladi. Ular indeks hajmini kichraytiradi va kerakli ustunlarni to'g'ridan-to'g'ri indeksdan olishga imkon beradi."
      },
      {
        type: "table",
        head: ["Indeks turi", "Misol", "Qachon mos"],
        rows: [
          ["Partial", "<code>WHERE holat &lt;&gt; 'bekor'</code>", "So'rov doim bir qismni tanlasa"],
          ["Expression", "<code>lower(email)</code>", "Qidiruv ifoda bo'yicha bo'lsa"],
          ["Covering", "<code>INCLUDE (jami_summa)</code>", "Jadvalga borishni kamaytirish uchun"],
          ["Composite", "<code>(mijoz_id, sana DESC)</code>", "Tenglik va tartib birga bo'lsa"]
        ]
      },
      {
        type: "code",
        title: "qismiy-indeks.sql",
        code: `CREATE INDEX idx_buyurtmalar_faol
ON buyurtmalar (mijoz_id, buyurtma_sanasi DESC)
WHERE holat <> 'bekor';`,
        output: `CREATE INDEX
Indeks "idx_buyurtmalar_faol" yaratildi.`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Qismiy indeks faqat <code>holat &lt;&gt; 'bekor'</code> shartiga mos qatorlarni saqlaydi. Shu sababli u kichikroq va tezroq yangilanadi. So'rovda aynan shu shart bo'lishi kerak, aks holda planner indeksdan foydalanmasligi mumkin. Quyidagi so'rov mijoz 1 ning bekor qilinmagan buyurtmalarini eng yangisidan boshlab qaytaradi."
      },
      {
        type: "code",
        title: "qismiy-indeksdan-foydalanish.sql",
        code: `SELECT id, buyurtma_sanasi, jami_summa
FROM buyurtmalar
WHERE holat <> 'bekor'
  AND mijoz_id = 1
ORDER BY buyurtma_sanasi DESC;`,
        output: `id  | buyurtma_sanasi | jami_summa
----+-----------------+------------
111 | 2024-06-29      | 12850000.00
106 | 2024-06-18      | 15700000.00
105 | 2024-06-15      | 1410000.00
101 | 2024-06-01      | 12780000.00`,
        outputLabel: "Natija"
      },
      {
        type: "code",
        title: "ifodali-indeks.sql",
        code: `CREATE INDEX idx_mijozlar_email_lower
ON mijozlar (lower(email));`,
        output: `CREATE INDEX
Indeks "idx_mijozlar_email_lower" yaratildi.`,
        outputLabel: "Natija"
      },
      {
        type: "note",
        variant: "info",
        title: "Indeksni tanlash qoidasi",
        html: "Avval eng ko'p bajariladigan so'rovlarni yozib oling, keyin ularning <code>WHERE</code>, <code>JOIN</code> va <code>ORDER BY</code> qismlariga qarab indeks tanlang. Bitta keng indeks ko'p tor indekslardan yaxshiroq bo'lishi mumkin, lekin har bir qo'shimcha indeks yozish tezligini pasaytiradi. <code>INCLUDE</code> ustunlari indeks kalitiga kirmaydi, shuning uchun ular bo'yicha qidiruv samarali emas."
      }
    ],
    quiz: [
      {
        q: "Qismiy indeks qaysi holatda eng katta foyda beradi?",
        options: [
          "Jadvalning barcha qatorlari teng ishlatilganda",
          "So'rovlar doim jadvalning kichik bir qismini tanlaganda",
          "Jadvalda faqat bitta ustun bo'lganda",
          "Hech qanday so'rov bajarilmaganda"
        ],
        answer: 1,
        explain: "Qismiy indeks faqat kerakli qatorlarni saqlaydi, shuning uchun kichik va tez yangilanadi."
      },
      {
        q: "lower(email) bo'yicha qidiradigan so'rov uchun qaysi indeks mos?",
        options: [
          "email ustunidagi oddiy B-tree, har doim yetarli",
          "Faqat primary key",
          "Faqat GIN indeks",
          "lower(email) ifodasi bo'yicha expression indeks"
        ],
        answer: 3,
        explain: "So'rovdagi ifoda indeks kaliti bilan aynan mos bo'lishi kerak; aks holda oddiy indeks ishlatilmaydi."
      },
      {
        q: "INCLUDE (jami_summa) qo'shilgan qoplovchi indeks nimaga yordam beradi?",
        options: [
          "Kerakli ustunni jadvalga bormasdan indeksdan olishga",
          "Jadvalni butunlay o'chirishga",
          "Tashqi kalitni avtomatik yaratishga",
          "Qatorlar sonini kamaytirishga"
        ],
        answer: 0,
        explain: "Covering indeks so'rov uchun kerakli barcha ustunlarni o'zida saqlaydi, bu heap sahifalariga murojaatni kamaytiradi."
      }
    ]
  },
  {
    id: 53,
    title: "Index-only scan, VACUUM va jadval shishishi",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "PostgreSQL'da <code>UPDATE</code> va <code>DELETE</code> eski qator versiyasini darhol o'chirmaydi — ularni <b>o'lik qator</b> (dead tuple) deb belgilaydi. Vaqt o'tishi bilan jadval va indekslar shishadi, so'rovlar esa ortiqcha sahifalarni o'qiydi. <code>VACUUM</code> o'lik qatorlarni tozalaydi va <b>visibility map</b> ni yangilaydi. Aynan visibility map tufayli <b>index-only scan</b> jadval sahifalariga umuman murojaat qilmasligi mumkin."
      },
      {
        type: "code",
        title: "jadval-statistikasi.sql",
        code: `SELECT relname,
       n_live_tup,
       n_dead_tup,
       last_autovacuum,
       last_autoanalyze
FROM pg_stat_user_tables
WHERE relname IN ('buyurtmalar', 'buyurtma_qatorlari')
ORDER BY relname;`,
        output: `relname            | n_live_tup | n_dead_tup | last_autovacuum     | last_autoanalyze
-------------------+------------+------------+---------------------+---------------------
buyurtma_qatorlari | 20         | 1          | 2024-07-01 03:14:22 | 2024-07-01 03:14:24
buyurtmalar        | 12         | 4          | 2024-07-01 03:14:21 | 2024-07-01 03:14:23`,
        outputLabel: "Jadval holati"
      },
      {
        type: "p",
        html: "<code>n_dead_tup</code> o'lik qatorlar sonini ko'rsatadi. Agar bu qiymat jadvalning katta qismiga yetsa va uzoq vaqt kamaymasa, <code>autovacuum</code> jadvalni ushlab ulgurmayapti. Sabab uzoq ochiq tranzaksiya yoki juda katta jadval bo'lishi mumkin. Avval <code>pg_stat_activity</code> dan eng uzoq tranzaksiyani tekshiring, keyin qo'lda <code>VACUUM (ANALYZE)</code> ishlating."
      },
      {
        type: "code",
        title: "vacuum.sql",
        code: `VACUUM (VERBOSE, ANALYZE) buyurtmalar;`,
        output: `INFO:  vacuuming "public.buyurtmalar"
INFO:  finished vacuuming "public.buyurtmalar": index scans: 1
pages: 0 removed, 1 remain, 0 skipped due to pins, 0 skipped frozen
tuples: 4 removed, 12 remain, 4 are dead but not yet removable
removable cutoff: 2841, which was 0 XIDs old when operation started
index scan not needed: 0 pages from table (0.00% of total) had 0 dead item identifiers
VACUUM`,
        outputLabel: "VACUUM natijasi"
      },
      {
        type: "table",
        head: ["Belgi", "Sabab", "Chora"],
        rows: [
          ["<code>n_dead_tup</code> o'sadi", "Ko'p UPDATE/DELETE", "VACUUM va autovacuum sozlamalari"],
          ["Jadval hajmi o'sadi", "Bloklar qayta ishlatilmaydi", "<code>VACUUM FULL</code> yoki pg_repack"],
          ["Index-only scan sekin", "Visibility map eskirgan", "VACUUM dan keyin qayta tekshirish"],
          ["Autovacuum uxlab qolgan", "Uzoq tranzaksiya", "Tranzaksiyani yakunlash"]
        ]
      },
      {
        type: "code",
        title: "faqat-indeks.sql",
        code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT mijoz_id, buyurtma_sanasi
FROM buyurtmalar
WHERE mijoz_id = 1
ORDER BY buyurtma_sanasi;`,
        output: `Index Only Scan using idx_buyurtmalar_faol on buyurtmalar  (cost=0.14..4.19 rows=4 width=8) (actual time=0.018..0.021 rows=4 loops=1)
  Index Cond: (mijoz_id = 1)
  Heap Fetches: 0
  Buffers: shared hit=2
Planning Time: 0.087 ms
Execution Time: 0.039 ms`,
        outputLabel: "Reja"
      },
      {
        type: "note",
        variant: "warning",
        title: "VACUUM FULL ehtiyotkorlik talab qiladi",
        html: "<code>VACUUM FULL</code> jadvalni qayta yozadi va bajarilish davomida <b>ACCESS EXCLUSIVE</b> qulfini ushlab turadi. Katta ishlab chiqarish jadvalida bu uzoq bloklanishga olib keladi. Buning o'rniga <code>pg_repack</code> yoki rejalashtirilgan texnik oyna ishlatiladi. Oddiy <code>VACUUM</code> esa jadvalni bloklamaydi va kundalik ish uchun xavfsiz."
      }
    ],
    quiz: [
      {
        q: "Index-only scan jadval sahifalariga murojaat qilmasligi uchun nima zarur?",
        options: [
          "Jadvalda hech qanday indeks bo'lmasligi",
          "Faqat primary key bo'lishi",
          "Visibility map indeksdagi barcha qatorlarni ko'rinadigan deb belgilashi",
          "Jadvalda NULL qiymatlar bo'lmasligi"
        ],
        answer: 2,
        explain: "Visibility map qatorlarning barcha tranzaksiyalar uchun ko'rinishini tasdiqlasa, indeksdan olingan ma'lumot yetarli bo'ladi."
      },
      {
        q: "pg_stat_user_tables dagi n_dead_tup nimani ko'rsatadi?",
        options: [
          "Tozalanishi kerak bo'lgan o'lik qator versiyalari sonini",
          "Jadvaldagi indekslar sonini",
          "Faol ulanishlar sonini",
          "Diskdagi bo'sh joyni"
        ],
        answer: 0,
        explain: "UPDATE/DELETE dan keyin qolgan eski versiyalar dead tuple hisoblanadi va VACUUM tomonidan tozalanadi."
      },
      {
        q: "Nega VACUUM FULL ni katta ishlab chiqarish jadvalida ehtiyotkorlik bilan ishlatish kerak?",
        options: [
          "U indekslarni butunlay o'chiradi",
          "U jadvalni qayta yozadi va bajarilish davomida kuchli qulf ushlaydi",
          "U faqat MySQL'da ishlaydi",
          "U ma'lumotlarni o'chiradi"
        ],
        answer: 1,
        explain: "VACUUM FULL jadval faylini qayta yozadi va ACCESS EXCLUSIVE qulfi tufayli uzoq bloklanishga sabab bo'ladi."
      }
    ]
  },
  {
    id: 54,
    title: "Sargable so'rovlar: indeksni o'ldirmaslik",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Indeks mavjud bo'lsa ham, so'rov uni ishlata olmasligi mumkin. Bunga ustunni funksiya ichiga olish, <code>LIKE '%...'</code> bilan boshlash yoki turini noto'g'ri o'zgartirish sabab bo'ladi. Bunday shartlar <b>non-sargable</b> deyiladi: baza har bir qator uchun ifodani hisoblashga majbur bo'ladi. Yechim — shartni ustunga nisbatan «toza» ko'rinishga keltirish."
      },
      {
        type: "table",
        head: ["Sekin shart", "Tez shart", "Sabab"],
        rows: [
          ["<code>EXTRACT(YEAR FROM sana) = 2024</code>", "<code>sana &gt;= '2024-01-01' AND sana &lt; '2025-01-01'</code>", "Ustun funksiya ichida emas"],
          ["<code>lower(email) = 'a@mail.uz'</code>", "<code>email = 'a@mail.uz'</code> yoki expression indeks", "Ifoda indekssiz qoladi"],
          ["<code>narx::text LIKE '12%'</code>", "<code>narx BETWEEN 12000000 AND 12999999</code>", "Tur o'zgarishi indeksni buzadi"],
          ["<code>nom LIKE '%pro%'</code>", "Trigram yoki full-text indeks", "Prefikssiz LIKE B-tree'ga mos emas"]
        ]
      },
      {
        type: "code",
        title: "sana-indeksi.sql",
        code: `CREATE INDEX idx_buyurtmalar_sana
ON buyurtmalar (buyurtma_sanasi);`,
        output: `CREATE INDEX
Indeks "idx_buyurtmalar_sana" yaratildi.`,
        outputLabel: "Natija"
      },
      {
        type: "code",
        title: "sekin-shart.sql",
        code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT count(*)
FROM buyurtmalar
WHERE EXTRACT(YEAR FROM buyurtma_sanasi) = 2024;`,
        output: `Aggregate  (cost=1.27..1.28 rows=1 width=8) (actual time=0.028..0.028 rows=1 loops=1)
  Buffers: shared hit=1
  ->  Seq Scan on buyurtmalar  (cost=0.00..1.24 rows=12 width=0) (actual time=0.006..0.019 rows=12 loops=1)
        Filter: (date_part('year'::text, (buyurtma_sanasi)::timestamp with time zone) = '2024'::double precision)
        Rows Removed by Filter: 0
        Buffers: shared hit=1
Planning Time: 0.112 ms
Execution Time: 0.045 ms`,
        outputLabel: "Sekin reja"
      },
      {
        type: "code",
        title: "tez-shart.sql",
        code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT count(*)
FROM buyurtmalar
WHERE buyurtma_sanasi >= DATE '2024-01-01'
  AND buyurtma_sanasi < DATE '2025-01-01';`,
        output: `Aggregate  (cost=1.12..1.13 rows=1 width=8) (actual time=0.014..0.014 rows=1 loops=1)
  Buffers: shared hit=1
  ->  Index Only Scan using idx_buyurtmalar_sana on buyurtmalar  (cost=0.14..1.10 rows=12 width=0) (actual time=0.010..0.012 rows=12 loops=1)
        Index Cond: ((buyurtma_sanasi >= '2024-01-01'::date) AND (buyurtma_sanasi < '2025-01-01'::date))
        Heap Fetches: 0
        Buffers: shared hit=1
Planning Time: 0.098 ms
Execution Time: 0.031 ms`,
        outputLabel: "Tez reja"
      },
      {
        type: "p",
        html: "Ikkinchi so'rovda oraliq sharti indeksning bevosita kaliti bo'lib qoldi, shuning uchun planner <b>Index Only Scan</b> tanladi. Kichik jadvalda farq millisekundlarda ko'rinmaydi, lekin millionlab qatorlarda bu tafovut o'nlab marta o'sadi. Shuning uchun sekin so'rovni ko'rganda birinchi navbatda <code>WHERE</code> shartlarining sargable ekanini tekshiring."
      },
      {
        type: "note",
        variant: "tip",
        title: "OR shartni UNION'ga aylantirish",
        html: "Ba'zan <code>WHERE a = 1 OR b = 2</code> kabi shart ikki xil indeksni talab qiladi. PostgreSQL bitmap OR ishlatishi mumkin, lekin katta jadvallarda <code>SELECT ... WHERE a = 1 UNION ALL SELECT ... WHERE b = 2</code> tezroq bo'ladi. Har bir qism alohida indeksdan foydalanadi; <code>UNION ALL</code> dublikatlarni tekshirmaydi, shuning uchun qismlar kesishmasligiga ishonch hosil qiling."
      }
    ],
    quiz: [
      {
        q: "Qaysi shart sargable hisoblanadi?",
        options: [
          "EXTRACT(YEAR FROM buyurtma_sanasi) = 2024",
          "buyurtma_sanasi::text LIKE '2024%'",
          "upper(holat) = 'YETKAZILGAN'",
          "buyurtma_sanasi >= DATE '2024-01-01' AND buyurtma_sanasi < DATE '2025-01-01'"
        ],
        answer: 3,
        explain: "Ustun funksiya ichida emas va oraliq sifatida berilgan, shuning uchun B-tree indeks to'g'ridan-to'g'ri ishlaydi."
      },
      {
        q: "WHERE EXTRACT(YEAR FROM sana) = 2024 nega indeksdan foydalanmasligi mumkin?",
        options: [
          "Har bir qator uchun funksiya hisoblanadi, indeks esa ustun qiymatiga qurilgan",
          "EXTRACT faqat MySQL'da mavjud",
          "Sana turi indekslanmaydi",
          "Yil qiymati juda kichik"
        ],
        answer: 0,
        explain: "Indeks ustundagi xom qiymatlar bo'yicha tartiblangan; funksiya qo'llanganda planner oddiy indeksdan foydalana olmaydi."
      },
      {
        q: "Prefikssiz LIKE '%pro%' uchun qaysi yondashuv mos?",
        options: [
          "Oddiy B-tree indeks",
          "Primary key",
          "pg_trgm yoki full-text indeks",
          "Jadvalni butunlay o'chirish"
        ],
        answer: 2,
        explain: "Prefikssiz qidiruvda B-tree ishlamaydi; trigram yoki full-text qidiruv maxsus indeks talab qiladi."
      }
    ]
  }
];
