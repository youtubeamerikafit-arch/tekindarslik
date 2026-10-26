module.exports = [
  {
    id: 55,
    title: "Partitioning: RANGE, LIST va HASH bo'linish",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Jadval o'sib millionlab qatorga yetsa, bitta katta fayl bilan ishlash qiyinlashadi: indekslar kattalashadi, eski ma'lumotni o'chirish uzoq davom etadi, so'rovlar esa ortiqcha sahifalarni o'qiydi. <b>Partitioning</b> jadvalni mantiqiy jihatdan bitta, jismonan esa bir nechta bo'lakka ajratadi. PostgreSQL'da deklarativ partitioning <code>RANGE</code>, <code>LIST</code> va <code>HASH</code> usullarini qo'llab-quvvatlaydi."
      },
      {
        type: "table",
        head: ["Usul", "Bo'linish mezoni", "Mos misol"],
        rows: [
          ["RANGE", "Qiymatlar oralig'i", "Oy yoki chorak bo'yicha sana"],
          ["LIST", "Aniq qiymatlar ro'yxati", "Viloyat yoki filial kodi"],
          ["HASH", "Hash funksiyasi qoldig'i", "Teng taqsimlash uchun mijoz id"],
          ["Subpartition", "Ichki qo'shimcha bo'linish", "Yil → oy"]
        ]
      },
      {
        type: "code",
        title: "range-partition.sql",
        code: `CREATE TABLE ombor_harakatlari (
    id bigint GENERATED ALWAYS AS IDENTITY,
    mahsulot_id int NOT NULL REFERENCES mahsulotlar(id),
    turi text NOT NULL CHECK (turi IN ('kirim', 'chiqim')),
    miqdor int NOT NULL CHECK (miqdor > 0),
    sana date NOT NULL,
    PRIMARY KEY (id, sana)
) PARTITION BY RANGE (sana);

CREATE TABLE ombor_2024_q1 PARTITION OF ombor_harakatlari
    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');
CREATE TABLE ombor_2024_q2 PARTITION OF ombor_harakatlari
    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');`,
        output: `CREATE TABLE
CREATE TABLE
CREATE TABLE`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Asosiy jadvalda qator saqlanmaydi — u faqat tuzilma va chegaralarni e'lon qiladi. <code>INSERT</code> kelganda PostgreSQL qiymat qaysi bo'lakka tushishini o'zi aniqlaydi. Chegaralar ustma-ust tushmasligi va bo'shliq qoldirmasligi muhim: mos bo'lak topilmasa, <code>no partition of relation found for row</code> xatosi chiqadi. Har bir bo'lakning o'z indekslari bo'ladi."
      },
      {
        type: "code",
        title: "bolimlar.sql",
        code: `SELECT inhrelid::regclass AS bolim,
       pg_get_expr(c.relpartbound, c.oid) AS chegarasi
FROM pg_inherits i
JOIN pg_class c ON c.oid = i.inhrelid
WHERE i.inhparent = 'ombor_harakatlari'::regclass
ORDER BY bolim;`,
        output: `bolim           | chegarasi
----------------+--------------------------------------------------------
ombor_2024_q1   | FOR VALUES FROM ('2024-01-01') TO ('2024-04-01')
ombor_2024_q2   | FOR VALUES FROM ('2024-04-01') TO ('2024-07-01')`,
        outputLabel: "Bo'limlar ro'yxati"
      },
      {
        type: "note",
        variant: "warning",
        title: "Kalit cheklovlari",
        html: "Bo'lingan jadvaldagi <code>PRIMARY KEY</code> va <code>UNIQUE</code> cheklovlar partition kalitini o'z ichiga olishi shart. Shuning uchun yuqorida <code>PRIMARY KEY (id, sana)</code> yozildi. Tashqi kalitlar ham mos bo'lakka yo'naltiriladi, lekin har bir bo'lak alohida indeksga ega bo'ladi. Partition soni o'nlabdan oshsa, rejalashtirish vaqti o'sishini hisobga oling."
      }
    ],
    quiz: [
      {
        q: "RANGE partitioning qaysi holat uchun eng mos?",
        options: [
          "Viloyat kodlari bo'yicha aniq ro'yxat",
          "Sana yoki narx oralig'i bo'yicha bo'lish",
          "Har bir qatorni alohida faylga yozish",
          "Faqat bitta qiymatli ustun"
        ],
        answer: 1,
        explain: "RANGE chegaralangan oraliqlar uchun ishlatiladi; sana bo'yicha oylik yoki choraklik bo'linish odatiy misol."
      },
      {
        q: "Partition kaliti PRIMARY KEY tarkibiga kirmasa nima bo'ladi?",
        options: [
          "Baza jadvalni avtomatik HASH qiladi",
          "Hech qanday muammo yo'q",
          "Cheklov yaratilmaydi, chunki unique indeks barcha bo'laklarni qamrashi kerak",
          "Faqat MySQL'da xato beradi"
        ],
        answer: 2,
        explain: "Unikallik faqat bitta bo'lak ichida kafolatlanadi; global unikallik uchun partition kaliti cheklovga qo'shilishi kerak."
      },
      {
        q: "Qator uchun mos partition topilmasa qanday xato yuz beradi?",
        options: [
          "no partition of relation found for row",
          "division by zero",
          "permission denied",
          "deadlock detected"
        ],
        answer: 0,
        explain: "PostgreSQL qatorni joylashtiradigan bo'lakni topa olmasa, aynan shu xabarni qaytaradi."
      }
    ]
  },
  {
    id: 56,
    title: "Partition lifecycle: pruning, detach va arxivlash",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Partitioning'ning asosiy foydasi — <b>partition pruning</b>: so'rovdagi shartga mos bo'lmagan bo'laklar rejadan butunlay chiqariladi. Masalan, aprel–iyun oylari bo'yicha hisob faqat <code>ombor_2024_q2</code> ni o'qiydi. Bu indeksdan ham muhimroq: diskdan o'qiladigan ma'lumot hajmi keskin kamayadi. Eski bo'limni arxivlash uchun uni <code>DETACH</code> qilib, alohida jadval sifatida saqlash mumkin."
      },
      {
        type: "code",
        title: "pruning.sql",
        code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT count(*)
FROM ombor_harakatlari
WHERE sana >= DATE '2024-04-01'
  AND sana < DATE '2024-07-01';`,
        output: `Aggregate  (cost=1.10..1.11 rows=1 width=8) (actual time=0.019..0.019 rows=1 loops=1)
  Buffers: shared hit=1
  ->  Seq Scan on ombor_2024_q2  (cost=0.00..1.09 rows=3 width=0) (actual time=0.008..0.011 rows=3 loops=1)
        Filter: ((sana >= '2024-04-01'::date) AND (sana < '2024-07-01'::date))
        Buffers: shared hit=1
Planning Time: 0.221 ms
Execution Time: 0.041 ms`,
        outputLabel: "Faqat bitta bo'lak"
      },
      {
        type: "p",
        html: "Rejada <code>Append</code> tuguni ostida faqat <code>ombor_2024_q2</code> qoldi. Agar shart <code>sana</code> ustida bo'lmasa yoki funksiya ichida bersangiz, pruning ishlamaydi va barcha bo'laklar skanerlanadi. Shuning uchun partition kaliti bo'yicha shartni har doim «toza» oraliq ko'rinishida yozing."
      },
      {
        type: "table",
        head: ["Amal", "Buyruq", "Bloklanish"],
        rows: [
          ["Yangi bo'lak", "<code>CREATE TABLE ... PARTITION OF</code>", "Qisqa metadata qulfi"],
          ["Bo'lakni ajratish", "<code>DETACH PARTITION ... CONCURRENTLY</code>", "Deyarli bloklamaydi"],
          ["Bo'lakni ulash", "<code>ATTACH PARTITION</code>", "Tekshiruv vaqtida qulf"],
          ["Bo'lakni o'chirish", "<code>DROP TABLE bo'lak</code>", "Faqat shu bo'lak"],
          ["Arxivga ko'chirish", "<code>ALTER TABLE ... SET SCHEMA arxiv</code>", "Metadata amali"]
        ]
      },
      {
        type: "code",
        title: "arxivlash.sql",
        code: `ALTER TABLE ombor_harakatlari
DETACH PARTITION ombor_2024_q1 CONCURRENTLY;

ALTER TABLE ombor_2024_q1 SET SCHEMA arxiv;`,
        output: `ALTER TABLE
ALTER TABLE`,
        outputLabel: "Natija"
      },
      {
        type: "note",
        variant: "tip",
        title: "Default partition",
        html: "Chegaradan tashqari qatorlar uchun <code>DEFAULT PARTITION</code> yaratish mumkin, lekin u pruning'ni qiyinlashtiradi va yangi bo'lak ulashda to'liq skanerlashni talab qiladi. Ishlab chiqarishda default bo'lakni vaqtinchalik «tutqich» sifatida ishlatib, keyin undagi qatorlarni to'g'ri bo'laklarga ko'chirish tavsiya etiladi. Har oy oldindan keyingi bo'lakni yaratib qo'yish unutilmasin."
      }
    ],
    quiz: [
      {
        q: "Partition pruning qachon ishlamaydi?",
        options: [
          "Shart partition kaliti bo'yicha aniq oraliqda berilganda",
          "Shart partition kalitini funksiya ichida o'rab bersa",
          "Jadvalda indeks bo'lmaganda",
          "Faqat ikkita bo'lak bo'lganda"
        ],
        answer: 1,
        explain: "Planner bo'lak chegaralarini shart bilan solishtira olmaydi, agar kalit funksiya ichida yoki turi o'zgartirilgan holda bo'lsa."
      },
      {
        q: "DETACH PARTITION CONCURRENTLY ning afzalligi nima?",
        options: [
          "Bo'lakni avtomatik o'chiradi",
          "Barcha indekslarni qayta quradi",
          "Jadvalni deyarli bloklamasdan bo'lakni ajratadi",
          "Faqat MySQL'da ishlaydi"
        ],
        answer: 2,
        explain: "CONCURRENTLY varianti uzoq ACCESS EXCLUSIVE qulfidan qochish imkonini beradi, shuning uchun ishlab chiqarishda xavfsizroq."
      },
      {
        q: "DEFAULT partition qanday xavf tug'diradi?",
        options: [
          "Yangi bo'lak ulashda defaultdagi qatorlarni tekshirish qo'shimcha skanerlash talab qiladi",
          "U barcha indekslarni o'chiradi",
          "U tranzaksiyalarni taqiqlaydi",
          "U faqat LIST partitioning'da ishlaydi"
        ],
        answer: 0,
        explain: "Yangi chegara qo'shilganda PostgreSQL default bo'lakda mos keladigan qator yo'qligiga ishonch hosil qilishi kerak."
      }
    ]
  },
  {
    id: 57,
    title: "Replikatsiya: streaming, logical va read replica",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Replikatsiya — bir serverdagi o'zgarishlarni boshqa serverga ko'chirish. PostgreSQL'da ikki asosiy yo'l bor: <b>physical streaming replication</b> butun klaster sahifalarini WAL orqali ko'chiradi, <b>logical replication</b> esa jadval darajasidagi qator o'zgarishlarini uzatadi. Birinchisi to'liq nusxa va failover uchun, ikkinchisi tanlangan jadvallar, versiyalar orasidagi ko'chirish va analitika uchun mos."
      },
      {
        type: "code",
        title: "replika-holati.sql",
        code: `SELECT application_name AS replika,
       client_addr,
       state,
       sync_state,
       replay_lag
FROM pg_stat_replication
ORDER BY application_name;`,
        output: `replika | client_addr | state     | sync_state | replay_lag
--------+-------------+-----------+------------+------------
replica1 | 10.0.0.12   | streaming | async      | 00:00:00.42
replica2 | 10.0.0.13   | streaming | sync       | 00:00:00.01`,
        outputLabel: "Replikalar holati"
      },
      {
        type: "p",
        html: "<code>replay_lag</code> — birlamchi serverdagi o'zgarish replikada qo'llanishigacha kechikish. U vaqti-vaqti bilan o'ssa, tarmoq, disk yoki replikadagi og'ir so'rov sabab bo'lishi mumkin. <code>sync_state = sync</code> bo'lgan replika uchun birlamchi server commit'ni tasdiqlashdan oldin javobni kutadi; bu ma'lumot yo'qotilmasligini kafolatlaydi, lekin yozish tezligini pasaytiradi."
      },
      {
        type: "table",
        head: ["Turi", "Nimani ko'chiradi", "Afzalligi", "Cheklovi"],
        rows: [
          ["Physical", "Butun klaster WAL sahifalari", "To'liq nusxa, failover", "Bir xil versiya va platforma"],
          ["Logical", "Tanlangan jadvallar qatorlari", "Qisman nusxa, versiyalar arasi", "DDL avtomatik ko'chmaydi"],
          ["Read replica", "Physical nusxa, faqat o'qish", "O'qish yuklamasini bo'lishish", "Replika kechikishi"],
          ["Cascading", "Replikadan keyingi replika", "Birlamchi yuklamasini kamaytirish", "Kechikish zanjiri"]
        ]
      },
      {
        type: "code",
        title: "logical-publication.sql",
        code: `CREATE PUBLICATION dukon_pub
FOR TABLE mijozlar, buyurtmalar;

CREATE SUBSCRIPTION dukon_sub
CONNECTION 'host=replica-db port=5432 dbname=dukon'
PUBLICATION dukon_pub;`,
        output: `CREATE PUBLICATION
CREATE SUBSCRIPTION`,
        outputLabel: "Natija"
      },
      {
        type: "note",
        variant: "warning",
        title: "Replika zaxira emas",
        html: "Replika birlamchi serverdagi xato <code>DELETE</code> yoki buzilgan migratsiyani ham takrorlaydi. U zaxira o'rnini bosmaydi. Bundan tashqari, logical replication uchun <code>wal_level = logical</code> va yetarli <code>max_replication_slots</code> kerak. Slot ishlatilmasa WAL to'planib diskni to'ldirishi mumkin, shuning uchun <code>pg_replication_slots</code> dagi <code>active</code> va <code>retained_bytes</code> ni kuzatib boring."
      }
    ],
    quiz: [
      {
        q: "Physical streaming replication nimani ko'chiradi?",
        options: [
          "Faqat SELECT natijalarini",
          "Butun klasterning WAL yozuvlarini",
          "Faqat bitta jadval qatorlarini",
          "Faqat foydalanuvchi huquqlarini"
        ],
        answer: 1,
        explain: "Physical replikatsiya WAL orqali klaster sahifalarini aynan takrorlaydi, shu sababli to'liq nusxa hisoblanadi."
      },
      {
        q: "sync_state = sync bo'lgan replika qanday ta'sir qiladi?",
        options: [
          "Commit replika tasdiqlaguncha kutadi",
          "Replika faqat o'qish uchun ochiladi",
          "Birlamchi serverda WAL yozilmaydi",
          "Barcha so'rovlar sekinlashadi"
        ],
        answer: 0,
        explain: "Synchronous replikada commit javobi replika o'zgarishni qabul qilgandan keyin qaytariladi; bu durability'ni oshiradi."
      },
      {
        q: "Logical replication uchun qaysi sozlama majburiy?",
        options: [
          "fsync = off",
          "wal_level = logical",
          "archive_mode = always",
          "hot_standby = off"
        ],
        answer: 1,
        explain: "Logical decoding uchun WAL yetarli darajada batafsil bo'lishi kerak, ya'ni wal_level logical bo'lishi shart."
      }
    ]
  },
  {
    id: 58,
    title: "Sharding: shard key tanlash va cross-shard so'rovlar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Bitta server imkoniyati yetmaganda ma'lumot bir nechta serverga bo'linadi — bu <b>sharding</b>. Partitioning bitta server ichida ishlasa, sharding tugunlar orasida ishlaydi. Eng muhim qaror — <b>shard key</b>: u ma'lumotni teng taqsimlashi va ko'p so'rovlarni bitta shardga yo'naltirishi kerak. Citus kabi kengaytmalar taqsimlangan jadval va shard joylashuvini boshqaradi."
      },
      {
        type: "table",
        head: ["Shard key", "Afzalligi", "Xavfi"],
        rows: [
          ["<code>mijoz_id</code>", "Bir mijozning barcha buyurtmalari bir shardda", "Yirik mijozlar hotspot yaratadi"],
          ["<code>buyurtma_id</code>", "Yozishlar teng taqsimlanadi", "Mijoz bo'yicha JOIN qimmat"],
          ["<code>sana</code>", "Arxivlash oson", "Yangi ma'lumot bitta shardga tushadi"],
          ["<code>shahar</code>", "Geografik yaqinlik", "Ba'zi shaharlar katta bo'ladi"]
        ]
      },
      {
        type: "code",
        title: "taqsimlash.sql",
        code: `SELECT create_distributed_table('buyurtmalar', 'mijoz_id');
SELECT create_distributed_table('mijozlar', 'id');`,
        output: ` create_distributed_table
--------------------------
 
(1 row)

 create_distributed_table
--------------------------
 
(1 row)`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Citus <code>mijozlar</code> va <code>buyurtmalar</code> ni bir xil kalit bo'yicha taqsimlaydi, shuning uchun ular orasidagi JOIN ko'p hollarda bitta shard ichida bajariladi. Bu <b>colocation</b> deyiladi. Agar jadvallar turli kalitlarda taqsimlansa, JOIN shardlar orasida ko'chirishni talab qiladi va sekinlashadi."
      },
      {
        type: "code",
        title: "shard-joylashuvi.sql",
        code: `SELECT s.shardid,
       p.nodename,
       p.nodeport,
       s.shardminvalue,
       s.shardmaxvalue
FROM pg_dist_shard s
JOIN pg_dist_shard_placement p USING (shardid)
WHERE s.logicalrelid = 'buyurtmalar'::regclass
ORDER BY s.shardid;`,
        output: `shardid | nodename  | nodeport | shardminvalue | shardmaxvalue
--------+-----------+----------+---------------+---------------
102008  | worker-1  | 5432     | 1             | 4
102009  | worker-2  | 5432     | 5             | 7
102010  | worker-3  | 5432     | 8             | 9
102011  | worker-4  | 5432     | 10            | 10`,
        outputLabel: "Shardlar"
      },
      {
        type: "note",
        variant: "warning",
        title: "Cross-shard so'rovlar",
        html: "Barcha shardlardan natija yig'ish <b>fan-out</b> deyiladi va shard soni oshgani sari sekinlashadi. <code>GROUP BY</code>, <code>ORDER BY</code> va <code>LIMIT</code> ko'pincha koordinator tugunda qo'shimcha ish talab qiladi. Shuning uchun eng ko'p ishlatiladigan so'rovlar bitta shardga tushadigan kalitni tanlang; global hisobotlar uchun esa alohida analitik omborni qurish yaxshiroq."
      }
    ],
    quiz: [
      {
        q: "Shard key tanlashda asosiy maqsad nima?",
        options: [
          "Barcha so'rovlarni bitta serverga yuborish",
          "Ma'lumotni teng taqsimlash va ko'p so'rovlarni bitta shardga yo'naltirish",
          "Indekslarni butunlay olib tashlash",
          "Faqat sana bo'yicha bo'lish"
        ],
        answer: 1,
        explain: "Yaxshi shard key yuklamani teng bo'ladi va tez-tez uchraydigan so'rovlarni bitta shardda bajarishga imkon beradi."
      },
      {
        q: "Colocation nimani anglatadi?",
        options: [
          "Bog'langan jadvallarning bir xil shard kaliti bo'yicha bir joyda joylashishi",
          "Barcha jadvallarni bitta faylga yozish",
          "Replikani o'chirish",
          "Indeksni qayta qurish"
        ],
        answer: 0,
        explain: "Colocation JOIN va tranzaksiyalarni bitta shard ichida bajarishga yordam beradi."
      },
      {
        q: "Cross-shard fan-out so'rovining asosiy muammosi nima?",
        options: [
          "U har doim noto'g'ri natija beradi",
          "U faqat bitta shardni o'qiydi",
          "Shardlar soni oshgan sari koordinatsiya va kechikish o'sadi",
          "U tranzaksiyani avtomatik bekor qiladi"
        ],
        answer: 2,
        explain: "Ko'p sharddan natija yig'ish tarmoq va koordinatsiya xarajatini oshiradi, ayniqsa agregat va tartiblashda."
      }
    ]
  },
  {
    id: 59,
    title: "Parallel so'rovlar va resurs boshqaruvi",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "PostgreSQL katta jadvallarni bir nechta ishchi jarayon (<b>worker</b>) yordamida parallel o'qishi mumkin. Planner parallel rejani faqat jadval hajmi va xarajat yetarli bo'lganda tanlaydi. Parallelizm har doim foyda bermaydi: kichik so'rovda workerlarni ishga tushirish xarajati natijadan katta bo'lishi mumkin. Resurslarni <code>work_mem</code>, <code>max_parallel_workers_per_gather</code> va boshqa sozlamalar bilan boshqarish mumkin."
      },
      {
        type: "code",
        title: "parallel-reja.sql",
        code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT qurilma, count(*)
FROM sessiyalar
WHERE boshlangan >= DATE '2024-06-01'
GROUP BY qurilma;`,
        output: `Finalize GroupAggregate  (cost=12840.22..12843.10 rows=3 width=17) (actual time=182.441..182.452 rows=3 loops=1)
  Group Key: qurilma
  Buffers: shared hit=4212 read=1860
  ->  Gather Merge  (cost=12840.22..12842.94 rows=6 width=17) (actual time=182.430..182.441 rows=6 loops=1)
        Workers Planned: 2
        Workers Launched: 2
        Buffers: shared hit=4212 read=1860
        ->  Partial GroupAggregate  (cost=12740.20..12740.28 rows=3 width=17) (actual time=178.902..178.904 rows=3 loops=3)
              Group Key: qurilma
              ->  Parallel Seq Scan on sessiyalar  (cost=0.00..12490.00 rows=83333 width=9) (actual time=2.104..166.331 rows=80000 loops=3)
                    Filter: (boshlangan >= '2024-06-01'::date)
                    Rows Removed by Filter: 720000
                    Buffers: shared hit=4212 read=1860
Planning Time: 0.312 ms
Execution Time: 182.611 ms`,
        outputLabel: "Parallel reja"
      },
      {
        type: "p",
        html: "<code>Workers Planned: 2</code> va <code>Workers Launched: 2</code> — planner ikki ishchi rejalashtirgan va ikkalasi ham ishga tushgan. <code>loops=3</code> agregat uchun: ikki worker va yetakchi jarayon. Parallel skan har bir workerda jadvalning bir qismini o'qiydi. Natija to'g'riligi uchun <code>Gather</code> bosqichi qism natijalarni birlashtiradi."
      },
      {
        type: "code",
        title: "resurs-sozlamalari.sql",
        code: `SELECT name, setting, unit
FROM pg_settings
WHERE name IN (
    'max_parallel_workers',
    'max_parallel_workers_per_gather',
    'work_mem',
    'maintenance_work_mem',
    'parallel_setup_cost'
)
ORDER BY name;`,
        output: `name                            | setting | unit
--------------------------------+---------+-----
maintenance_work_mem            | 65536   | kB
max_parallel_workers            | 8       |
max_parallel_workers_per_gather | 2       |
parallel_setup_cost             | 1000    |
work_mem                        | 4096    | kB`,
        outputLabel: "Joriy sozlamalar"
      },
      {
        type: "table",
        head: ["Sozlama", "Vazifasi", "Ehtiyot chorasi"],
        rows: [
          ["<code>work_mem</code>", "Saralash va hash uchun xotira", "Har bir operatsiya uchun alohida"],
          ["<code>max_parallel_workers_per_gather</code>", "Bitta so'rovdagi workerlar", "Ko'p ulanishda CPU to'yinishi"],
          ["<code>parallel_setup_cost</code>", "Parallelizm boshlash narxi", "Juda past qilish keraksiz parallelizm"],
          ["<code>maintenance_work_mem</code>", "VACUUM, CREATE INDEX", "Bir vaqtda bir nechta jarayon"],
          ["<code>max_parallel_workers</code>", "Umumiy workerlar soni", "Server yadrolaridan oshmasin"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "work_mem ni global oshirmang",
        html: "<code>work_mem</code> har bir operatsiya uchun ajratiladi; bitta so'rovda bir nechta saralash bo'lsa, xotira bir necha barobar ko'payadi. Uni global juda katta qilish o'rniga og'ir hisobotlar uchun sessiya darajasida <code>SET LOCAL work_mem = '256MB'</code> qiling. Parallel so'rovlar soni CPU yadrolaridan oshsa, kontekst almashinuvi tufayli umumiy unumdorlik tushadi."
      }
    ],
    quiz: [
      {
        q: "Planner qachon parallel rejani tanlaydi?",
        options: [
          "Har doim, jadval hajmidan qat'i nazar",
          "Jadval yetarli katta bo'lsa va parallel xarajat foydali bo'lsa",
          "Faqat indeks mavjud bo'lmaganda",
          "Faqat MySQL'da"
        ],
        answer: 1,
        explain: "Parallel reja jadval hajmi va xarajat modeliga bog'liq; kichik jadvalda oddiy skan tezroq bo'ladi."
      },
      {
        q: "work_mem qanday ajratiladi?",
        options: [
          "Butun server uchun bir marta",
          "Har bir operatsiya (saralash, hash) uchun alohida",
          "Faqat indeks yaratishda",
          "Faqat replikada"
        ],
        answer: 1,
        explain: "work_mem har bir operatsiya uchun alohida ajratiladi, shuning uchun bitta so'rovda bir necha barobar sarflanishi mumkin."
      },
      {
        q: "Parallel so'rovlarda workerlar sonini cheklashning sababi nima?",
        options: [
          "Ko'p worker CPU va xotirani bo'lib, boshqa so'rovlarni sekinlashtirishi mumkin",
          "PostgreSQL ikkitadan ko'p workerni qo'llab-quvvatlamaydi",
          "Workerlar faqat INSERT uchun ishlaydi",
          "Workerlar natijani buzadi"
        ],
        answer: 0,
        explain: "Har bir worker resurs talab qiladi; me'yordan oshsa, tizim bo'ylab raqobat va kechikish oshadi."
      }
    ]
  }
];
