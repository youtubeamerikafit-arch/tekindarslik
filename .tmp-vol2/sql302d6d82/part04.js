module.exports = [
  {
    id: 65,
    title: "Backup strategiyasi: pg_dump, base backup va WAL",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Zaxira — bu nusxa emas, <b>tiklash mumkin bo'lgan nusxa</b>. PostgreSQL'da uchta asosiy qatlam bor: mantiqiy <code>pg_dump</code>, fizik <code>pg_basebackup</code> va doimiy arxivlanadigan <b>WAL</b>. <code>pg_dump</code> obyektlarni SQL yoki custom formatda chiqaradi, <code>pg_basebackup</code> butun klaster fayllarini oladi, WAL esa nuqtaviy tiklash uchun o'zgarishlar tarixini beradi. Ular bir-birini to'ldiradi, almashtirmaydi."
      },
      {
        type: "table",
        head: ["Usul", "Nimani oladi", "Tiklash", "Mos holat"],
        rows: [
          ["<code>pg_dump -Fc</code>", "Bitta baza obyektlari", "<code>pg_restore</code>", "Kichik baza, versiya ko'chirish"],
          ["<code>pg_dumpall</code>", "Barcha bazalar + rollar", "psql script", "Klaster migratsiyasi"],
          ["<code>pg_basebackup</code>", "Butun klaster fayllari", "Klaster sifatida", "To'liq nusxa, replica"],
          ["WAL arxivi", "Commit'lar tarixi", "PITR", "Nuqtaviy tiklash"],
          ["Snapshot", "Disk darajasidagi nusxa", "VM/diskonni tiklash", "Tez, lekin izchillik tekshiriladi"]
        ]
      },
      {
        type: "code",
        title: "basebackup.sh",
        code: `pg_basebackup -h db-primary -D /backup/base/2024-07-01 \\
  -U replikator -Ft -z -Xs -P

ls -lh /backup/base/2024-07-01/`,
        output: `-rw-r--r-- 1 postgres postgres  42M Jul  1 03:00 base.tar.gz
-rw-r--r-- 1 postgres postgres 1.2G Jul  1 03:02 pg_wal.tar.gz
-rw-r--r-- 1 postgres postgres  256 Jul  1 03:02 backup_manifest`,
        outputLabel: "Nusxa fayllari"
      },
      {
        type: "p",
        html: "<code>-Ft -z</code> tar arxiv va gzip siqishni beradi, <code>-Xs</code> WAL fayllarini nusxaga qo'shadi, <code>-P</code> jarayonni ko'rsatadi. Katta klasterda nusxa vaqtida WAL yig'ilib qolmasligi uchun arxivlash alohida sozlangan bo'lishi kerak. Nusxa tugagach, <code>backup_manifest</code> faylini saqlang: u checksum va tarkibni tasdiqlaydi."
      },
      {
        type: "code",
        title: "wal-arxivi.sql",
        code: `SELECT archived_count,
       last_archived_wal,
       last_archived_time,
       failed_count,
       stats_reset
FROM pg_stat_archiver;`,
        output: `archived_count | last_archived_wal         | last_archived_time        | failed_count | stats_reset
---------------+---------------------------+---------------------------+--------------+----------------------------
1482           | 0000000100000000000000A1  | 2024-07-01 04:00:12+05   | 0            | 2024-01-01 00:00:00+05`,
        outputLabel: "WAL arxivi"
      },
      {
        type: "note",
        variant: "warning",
        title: "3-2-1 qoidasi va sinov",
        html: "Kamida <b>3</b> nusxa, <b>2</b> xil muhit va <b>1</b> nusxa boshqa joyda saqlansin. Eng muhimi — tiklashni muntazam sinab ko'ring: nusxa fayli borligi hali tiklash mumkin degani emas. <code>failed_count</code> o'sishi WAL arxivining uzilganini bildiradi; bu holatda PITR ishlamaydi. Zaxira shifrlangan va faqat kerakli rollarga ochiq bo'lishi kerak."
      }
    ],
    quiz: [
      {
        q: "pg_dump -Fc qanday format yaratadi?",
        options: [
          "Oddiy matnli SQL skript",
          "Custom format, pg_restore bilan tiklanadi",
          "Faqat CSV fayl",
          "WAL segmenti"
        ],
        answer: 1,
        explain: "Custom format siqilgan va tanlab tiklash imkonini beradi; uni pg_restore o'qiydi."
      },
      {
        q: "Point-in-time recovery uchun nima majburiy?",
        options: [
          "Faqat pg_dump nusxasi",
          "Base backup va uzluksiz WAL arxivi",
          "Faqat replica server",
          "Faqat CSV eksport"
        ],
        answer: 1,
        explain: "PITR bazaviy nusxadan boshlab, kerakli vaqtgacha WAL yozuvlarini qo'llaydi."
      },
      {
        q: "pg_stat_archiver dagi failed_count o'sishi nimani bildiradi?",
        options: [
          "WAL arxivlashda xatolik bor",
          "Barcha so'rovlar sekin",
          "Replika ulangan",
          "Indekslar buzilgan"
        ],
        answer: 0,
        explain: "failed_count WAL faylini arxivga ko'chirishda muvaffaqiyatsiz urinishlar sonini ko'rsatadi."
      }
    ]
  },
  {
    id: 66,
    title: "PITR: nuqtaviy tiklash va restore drill",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<b>PITR</b> (Point-In-Time Recovery) bazani bazaviy nusxa va WAL yozuvlari yordamida aniq vaqtga qaytaradi. Masalan, noto'g'ri <code>DELETE</code> 10:42 da bajarilgan bo'lsa, bazani 10:41:59 holatiga tiklash mumkin. Bu jarayon yangi klasterda bajariladi: bazaviy nusxa ochiladi, <code>restore_command</code> WAL fayllarini yetkazadi, PostgreSQL ularni maqsad vaqtgacha qo'llaydi va klasterga aylanadi."
      },
      {
        type: "code",
        title: "recovery-sozlamasi.conf",
        code: `# postgresql.conf
restore_command = 'cp /backup/wal/%f %p'
recovery_target_time = '2024-06-30 23:59:00+05'
recovery_target_action = 'promote'

# Bo'sh klaster ma'lumotlar papkasida:
touch recovery.signal`,
        output: `LOG:  starting point-in-time recovery to 2024-06-30 23:59:00+05
LOG:  restored log file "00000001000000000000008F" from archive
LOG:  redo starts at 0/8E000028
LOG:  consistent recovery state reached at 0/8F0000A8
LOG:  redo done at 0/8F0000A8
LOG:  last completed transaction was at log time 2024-06-30 23:58:41.227+05
LOG:  database system is ready to accept connections`,
        outputLabel: "Tiklash jurnali"
      },
      {
        type: "p",
        html: "<code>recovery.signal</code> PostgreSQL'ga klaster tiklash rejimida ochilishini aytadi. Fayl tiklash tugagach avtomatik o'chadi. <code>recovery_target_time</code> dan keyingi tranzaksiyalar qo'llanmaydi. Agar maqsad vaqt juda eski bo'lsa, WAL arxivida yetarli segment bo'lishi shart. Tiklangan klaster darhol replikatsiya yoki ilovaga ulanmasligi kerak — avval tekshiriladi."
      },
      {
        type: "code",
        title: "tiklash-tekshiruvi.sql",
        code: `SELECT count(*) AS buyurtmalar_soni,
       max(buyurtma_sanasi) AS oxirgi_sana,
       sum(jami_summa) AS jami_summa
FROM buyurtmalar;`,
        output: `buyurtmalar_soni | oxirgi_sana | jami_summa
-----------------+-------------+--------------
12               | 2024-06-30  | 63470000.00`,
        outputLabel: "Tekshiruv"
      },
      {
        type: "table",
        head: ["Qadam", "Amal", "Tekshiruv"],
        rows: [
          ["1", "Bazaviy nusxani yangi serverga ochish", "Fayllar va ruxsatlar"],
          ["2", "WAL arxivini ulash", "<code>restore_command</code> ishlaydi"],
          ["3", "Maqsad vaqtni belgilash", "Vaqt mintaqasi to'g'ri"],
          ["4", "Tiklashni kuzatish", "Jurnalda xato yo'q"],
          ["5", "Ma'lumotni solishtirish", "Sonlar va chegaralar"],
          ["6", "Ilovani ulash", "Faqat tekshiruvdan keyin"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Restore drill",
        html: "Har chorakda haqiqiy tiklash mashqini o'tkazing: nusxani boshqa serverga ochib, <code>SELECT count(*)</code> va biznes ko'rsatkichlarini solishtiring. Mashq davomida sarflangan vaqt — sizning haqiqiy <b>RTO</b> qiymatingiz. Zaxira faylini ochish uchun parol va kalitlar ham mavjudligini tekshiring; ular yo'q bo'lsa, nusxa foydasiz."
      }
    ],
    quiz: [
      {
        q: "PITR qaysi ikki komponentga tayanadi?",
        options: [
          "Faqat SQL dump va CSV",
          "Bazaviy nusxa va WAL arxivi",
          "Faqat replica va trigger",
          "Faqat indeks va view"
        ],
        answer: 1,
        explain: "Bazaviy nusxa boshlang'ich holatni, WAL esa undan keyingi o'zgarishlar tarixini beradi."
      },
      {
        q: "recovery.signal fayli nima uchun kerak?",
        options: [
          "PostgreSQL'ni tiklash rejimida ochish uchun",
          "Jadvalni o'chirish uchun",
          "Replikani to'xtatish uchun",
          "WAL arxivini siqish uchun"
        ],
        answer: 0,
        explain: "Signal fayli mavjud bo'lsa, klaster recovery parametrlarini o'qib, WAL qo'llashni boshlaydi."
      },
      {
        q: "Tiklangan klasterni darhol ilovaga ulash nega xavfli?",
        options: [
          "U har doim sekin ishlaydi",
          "Ma'lumot to'liqligi va izchilligi hali tekshirilmagan",
          "PostgreSQL buni taqiqlaydi",
          "Replika avtomatik o'chadi"
        ],
        answer: 1,
        explain: "Avval sonlar, cheklovlar va biznes ko'rsatkichlari tekshirilishi kerak; aks holda noto'g'ri holat tarqaladi."
      }
    ]
  },
  {
    id: 67,
    title: "Replika monitoringi va failover",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Failover — birlamchi server ishdan chiqqanda replikani asosiy serverga aylantirish. U avtomatik yoki qo'lda bo'lishi mumkin. Muvaffaqiyatli failover uchun replika kechikishi kichik, WAL uzluksiz va ilova ulanishlari yangi birlamchiga yo'naltirilgan bo'lishi kerak. Eng katta xavf — <b>split-brain</b>: eski va yangi birlamchi bir vaqtda yozishni davom ettirishi."
      },
      {
        type: "code",
        title: "kechikish-monitoringi.sql",
        code: `SELECT application_name AS replika,
       state,
       sync_state,
       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn)::bigint AS kechikish_bayt
FROM pg_stat_replication
ORDER BY kechikish_bayt DESC;`,
        output: `replika  | state     | sync_state | kechikish_bayt
---------+-----------+------------+----------------
replica1 | streaming | async      | 8421376
replica2 | streaming | sync       | 0`,
        outputLabel: "Replika kechikishi"
      },
      {
        type: "p",
        html: "8.4 MB kechikish katta emas, lekin agar u doimiy o'ssa, replika ulgurmayapti. <code>replay_lag</code> vaqt bo'yicha, <code>kechikish_bayt</code> hajm bo'yicha baho beradi. Failover qarorida ikkalasi ham hisobga olinadi: ba'zi tizimlar faqat kechikish chegaradan kichik bo'lsa promotsiyaga ruxsat beradi."
      },
      {
        type: "code",
        title: "promote.sql",
        code: `SELECT pg_promote(wait => true, wait_seconds => 30);`,
        output: ` pg_promote
------------
 t
(1 row)`,
        outputLabel: "Promotsiya"
      },
      {
        type: "table",
        head: ["Bosqich", "Amal", "Tekshiruv"],
        rows: [
          ["Aniqlash", "Birlamchi javob bermayapti", "Heartbeat va monitoring"],
          ["Qaror", "Quorum va kechikish", "Avtomatik yoki operator"],
          ["Promotsiya", "<code>pg_promote()</code>", "Yangi timeline"],
          ["Yo'naltirish", "VIP yoki DNS", "Ilova ulanishi"],
          ["Eski server", "Qayta qurish", "Uni replica qilish"],
          ["Tekshiruv", "Yozish va o'qish", "Replika yangilanyapti"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Split-brain oldini olish",
        html: "Eski birlamchi tarmoqdan ajralgan bo'lsa ham yozishni davom ettirishi mumkin. Keyin u qaytib kelsa, ikki tarix paydo bo'ladi. Yechim — <b>quorum</b> asosidagi boshqaruv (Patroni, etcd, Consul) va eskisini majburiy ravishda <code>pg_rewind</code> yoki yangi bazaviy nusxa bilan qayta qurish. Hech qachon ikkala serverni bir vaqtda birlamchi deb qoldirmang."
      }
    ],
    quiz: [
      {
        q: "pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) nimani o'lchaydi?",
        options: [
          "Replika qancha WAL ortda qolganini",
          "Bazadagi jadvallar sonini",
          "Diskdagi bo'sh joyni",
          "Faol ulanishlar sonini"
        ],
        answer: 0,
        explain: "Joriy birlamchi LSN va replikada qo'llangan LSN orasidagi farq kechikishni baytlarda beradi."
      },
      {
        q: "Split-brain nima?",
        options: [
          "Ikki server bir vaqtda o'zini birlamchi deb hisoblab yozishi",
          "Indeksning ikkiga bo'linishi",
          "Bitta tranzaksiyaning ikki marta bajarilishi",
          "Replikatsiya slotining o'chishi"
        ],
        answer: 0,
        explain: "Split-brain da ikki mustaqil tarix paydo bo'ladi, ma'lumotlar birlashtirilmaydi."
      },
      {
        q: "Eski birlamchi qaytib kelganda nima qilish kerak?",
        options: [
          "Uni darhol birlamchi qilib qo'yish",
          "pg_rewind yoki bazaviy nusxa bilan qayta qurib, replica qilish",
          "Bazani o'chirish",
          "Faqat DNS ni o'zgartirish"
        ],
        answer: 1,
        explain: "Eski serverdagi tarix yangidan farq qilishi mumkin; uni xavfsiz tarzda qayta qurish kerak."
      }
    ]
  },
  {
    id: 68,
    title: "Zero-downtime migratsiya: expand va contract",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Ishlab chiqarish bazasida <code>ALTER TABLE</code> bir zumda bajarilmaydi va qulf kutayotgan so'rovlar navbatini keltirib chiqarishi mumkin. <b>Expand/contract</b> naqshi o'zgarishni uch bosqichga bo'ladi: yangi ustun yoki jadval qo'shish (expand), ilovani yangi shaklga o'tkazish va eski qismni olib tashlash (contract). Har bir qadam orqaga qaytariladigan va qisqa qulf bilan bajariladi."
      },
      {
        type: "table",
        head: ["Bosqich", "Amal", "Qulf"],
        rows: [
          ["Expand", "Yangi ustun yoki jadval qo'shish", "Qisqa metadata qulfi"],
          ["Backfill", "Ma'lumotni bo'laklab ko'chirish", "Qator qulflari"],
          ["Dual-write", "Ilova ikkala joyga yozadi", "Yo'q"],
          ["Switch", "O'qish yangi manbadan", "Yo'q"],
          ["Contract", "Eski ustunni olib tashlash", "Keyinroq, alohida"]
        ]
      },
      {
        type: "code",
        title: "expand-migratsiya.sql",
        code: `SET lock_timeout = '3s';

ALTER TABLE mijozlar ADD COLUMN telefon text;

CREATE INDEX CONCURRENTLY idx_mijozlar_telefon
ON mijozlar (telefon);

ALTER TABLE mijozlar
ADD CONSTRAINT telefon_formati
CHECK (telefon IS NULL OR telefon ~ '^[0-9]{12}$') NOT VALID;

ALTER TABLE mijozlar VALIDATE CONSTRAINT telefon_formati;`,
        output: `SET
ALTER TABLE
CREATE INDEX
ALTER TABLE
ALTER TABLE`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "<code>CREATE INDEX CONCURRENTLY</code> jadvalni yozish uchun bloklamaydi, lekin oddiy <code>CREATE INDEX</code> dan sekinroq va tranzaksiya ichida bajarilmaydi. <code>NOT VALID</code> cheklovi mavjud qatorlarni tekshirmasdan qo'shiladi; keyin <code>VALIDATE CONSTRAINT</code> faqat yangi qatorlarni tekshiradi va yengilroq qulf oladi. <code>lock_timeout</code> esa qulf kutib cheksiz osilib qolishning oldini oladi."
      },
      {
        type: "code",
        title: "contract.sql",
        code: `ALTER TABLE mijozlar
DROP CONSTRAINT telefon_formati;

ALTER TABLE mijozlar
DROP COLUMN telefon;`,
        output: `ALTER TABLE
ALTER TABLE`,
        outputLabel: "Yakuniy bosqich"
      },
      {
        type: "note",
        variant: "warning",
        title: "Migration'ni orqaga qaytarish",
        html: "Har bir migratsiya uchun rollback rejasi bo'lsin, lekin ma'lumot yo'qotadigan qadamlar (masalan, <code>DROP COLUMN</code>) kechiktirilsin. Avval kod eski ustunni ishlatmayotganiga ishonch hosil qiling, keyin o'chiring. Migratsiyalarni versiyalash (Flyway, Liquibase, Alembic) va ishlab chiqarishda bajarishdan oldin staging'da sinash — majburiy amaliyot."
      }
    ],
    quiz: [
      {
        q: "Expand/contract naqshining birinchi bosqichi nima?",
        options: [
          "Eski ustunni darhol o'chirish",
          "Yangi ustun yoki jadvalni qo'shish",
          "Barcha indekslarni o'chirish",
          "Bazani qayta ishga tushirish"
        ],
        answer: 1,
        explain: "Avval yangi tuzilma qo'shiladi, ilova unga o'tadi, keyin eski qism xavfsiz olib tashlanadi."
      },
      {
        q: "CHECK cheklovini NOT VALID bilan qo'shish nimani beradi?",
        options: [
          "Mavjud qatorlarni tekshirmasdan cheklovni qo'shadi, keyin VALIDATE qilinadi",
          "Cheklovni butunlay o'chiradi",
          "Jadvalni bloklaydi",
          "Indeks yaratadi"
        ],
        answer: 0,
        explain: "NOT VALID mavjud ma'lumotni skanerlamaydi; VALIDATE bosqichi keyinroq yengilroq qulf bilan bajariladi."
      },
      {
        q: "Nega CREATE INDEX CONCURRENTLY ishlab chiqarishda afzal?",
        options: [
          "U tezroq va tranzaksiya ichida ishlaydi",
          "U jadvalni yozish uchun bloklamaydi",
          "U indeksni avtomatik o'chiradi",
          "U faqat kichik jadvallarda ishlaydi"
        ],
        answer: 1,
        explain: "CONCURRENTLY indeks qurish paytida jadvalga yozishni davom ettirishga imkon beradi."
      }
    ]
  },
  {
    id: 69,
    title: "Katta jadval backfill va dual-write",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Yangi ustunni mavjud millionlab qatorlar uchun to'ldirish bitta <code>UPDATE</code> bilan bajarilsa, uzoq tranzaksiya, katta WAL hajmi va bloklanishga olib keladi. To'g'ri yondashuv — <b>bo'laklab backfill</b>: har safar kichik partiya yangilanadi, tranzaksiya qisqa bo'ladi, yuklama nazorat qilinadi. O'tish davrida ilova eski va yangi ustunga birga yozishi (<b>dual-write</b>) mumkin."
      },
      {
        type: "code",
        title: "backfill.sql",
        code: `WITH batch AS (
    SELECT id
    FROM mijozlar
    WHERE shahar_norm IS NULL
    ORDER BY id
    LIMIT 2
    FOR UPDATE SKIP LOCKED
)
UPDATE mijozlar m
SET shahar_norm = lower(trim(m.shahar))
FROM batch
WHERE m.id = batch.id
RETURNING m.id;`,
        output: ` id
----
  1
  2
(2 rows)

UPDATE 2`,
        outputLabel: "Bitta partiya"
      },
      {
        type: "p",
        html: "Har bir partiya <code>LIMIT</code> bilan cheklangan, <code>FOR UPDATE SKIP LOCKED</code> esa parallel ishchilar bir qatorni ikki marta olmasligini ta'minlaydi. Tsikl ilovada yoki <code>DO</code> blokida ishlaydi; har partiyadan keyin qisqa pauza va <code>pg_sleep</code> yuklamani tekislaydi. Qatorlar soni kamaygani sari partiya hajmini oshirish mumkin, lekin WAL hajmini kuzatib boring."
      },
      {
        type: "code",
        title: "dual-write-trigger.sql",
        code: `CREATE OR REPLACE FUNCTION mijoz_shahar_sync()
RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
    NEW.shahar_norm := lower(trim(NEW.shahar));
    RETURN NEW;
END;
$$;

CREATE TRIGGER trg_mijoz_shahar
BEFORE INSERT OR UPDATE OF shahar ON mijozlar
FOR EACH ROW
EXECUTE FUNCTION mijoz_shahar_sync();`,
        output: `CREATE FUNCTION
CREATE TRIGGER`,
        outputLabel: "Natija"
      },
      {
        type: "table",
        head: ["Xavf", "Sabab", "Chora"],
        rows: [
          ["Uzoq tranzaksiya", "Bitta katta UPDATE", "Partiyalab yangilash"],
          ["WAL portlashi", "Ko'p qator bir vaqtda", "Kichik LIMIT va pauza"],
          ["Bloklanish", "Bir xil qatorlar", "<code>SKIP LOCKED</code>"],
          ["Ikki marta yozish", "Trigger va ilova", "Yagona manba tanlash"],
          ["Noto'g'ri natija", "Trim va registr", "Test va solishtirish"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Backfill tugaganini qanday bilish",
        html: "Monitoring so'rovi qolgan qatorlar sonini kuzatadi: <code>SELECT count(*) FROM mijozlar WHERE shahar_norm IS NULL;</code>. Bu son nolga tushgach, cheklovni <code>SET NOT NULL</code> qilib mustahkamlash mumkin. Dual-write trigger vaqtincha ishlaydi; ilova to'liq yangi maydonga o'tgach, uni olib tashlash kerak, aks holda ikki manba orasida nomuvofiqlik paydo bo'ladi."
      }
    ],
    quiz: [
      {
        q: "Katta jadvalni backfill qilishda eng xavfsiz yondashuv qaysi?",
        options: [
          "Bitta ulkan UPDATE",
          "Kichik partiyalab, qisqa tranzaksiyalarda yangilash",
          "Jadvalni o'chirib qayta yaratish",
          "Faqat SELECT ishlatish"
        ],
        answer: 1,
        explain: "Partiyalash WAL hajmi, qulf va bloklanishni nazorat qilish imkonini beradi."
      },
      {
        q: "FOR UPDATE SKIP LOCKED backfill'da nima uchun foydali?",
        options: [
          "Parallel ishchilar bir qatorni ikki marta olmasligi uchun",
          "Barcha qatorlarni birdan qulflash uchun",
          "Tranzaksiyani avtomatik commit qilish uchun",
          "Indeksni qayta qurish uchun"
        ],
        answer: 0,
        explain: "SKIP LOCKED band qatorlarni o'tkazib yuboradi, ishchilar bir-birini kutmaydi."
      },
      {
        q: "Dual-write trigger qachon olib tashlanadi?",
        options: [
          "Darhol birinchi kundan",
          "Ilova to'liq yangi maydonga o'tgach",
          "Hech qachon",
          "Faqat bayram kunlari"
        ],
        answer: 1,
        explain: "Trigger vaqtinchalik moslikni ta'minlaydi; yagona manba qolgach, ortiqcha yozishni olib tashlash kerak."
      }
    ]
  }
];
