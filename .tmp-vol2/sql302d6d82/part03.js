module.exports = [
  {
    id: 60,
    title: "MVCC: xmin, xmax va qator versiyalari",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "PostgreSQL <b>MVCC</b> (Multi-Version Concurrency Control) yordamida o'quvchilarni yozuvchilardan bloklamaydi. Har bir qator versiyasi ikkita yashirin ustunga ega: <code>xmin</code> — versiyani yaratgan tranzaksiya, <code>xmax</code> — uni o'chirgan yoki yangilagan tranzaksiya. <code>UPDATE</code> aslida eski qatorni <code>xmax</code> bilan belgilab, yangi versiya qo'shadi. Shu sababli bir vaqtda ishlaydigan tranzaksiyalar bir xil jadvalning turli «suratlarini» ko'radi."
      },
      {
        type: "code",
        title: "qator-versiyalari.sql",
        code: `SELECT xmin::text AS yaratgan,
       xmax::text AS ochirgan,
       id,
       holat
FROM buyurtmalar
WHERE id IN (101, 102)
ORDER BY id;`,
        output: `yaratgan | ochirgan | id  | holat
---------+----------+-----+------------
2840     | 0        | 101 | yetkazilgan
2841     | 0        | 102 | yetkazilgan`,
        outputLabel: "Ko'rinadigan versiyalar"
      },
      {
        type: "p",
        html: "<code>xmax = 0</code> qator hali o'chirilmaganini bildiradi. Qator yangilanganda eski versiyada <code>xmax</code> joriy tranzaksiya raqamiga aylanadi, yangi versiyada esa yangi <code>xmin</code> paydo bo'ladi. Eski versiya boshqa tranzaksiyalar uni ko'rmaguncha saqlanadi; keyin <code>VACUUM</code> uni tozalaydi. Aynan shu mexanizm uzoq tranzaksiyalar paytida jadval shishishining asosiy sababidir."
      },
      {
        type: "code",
        title: "yangilash-versiyasi.sql",
        code: `BEGIN;

UPDATE buyurtmalar
SET holat = 'jonatilgan'
WHERE id = 101;

SELECT xmin::text AS yaratgan,
       xmax::text AS ochirgan,
       holat
FROM buyurtmalar
WHERE id = 101;

ROLLBACK;`,
        output: `BEGIN
UPDATE 1
 yaratgan | ochirgan | holat
----------+----------+-----------
 2847     | 0        | jonatilgan
(1 row)

ROLLBACK`,
        outputLabel: "Yangi versiya"
      },
      {
        type: "table",
        head: ["Amal", "Eski qator", "Yangi qator"],
        rows: [
          ["<code>INSERT</code>", "Yo'q", "<code>xmin</code> joriy tranzaksiya"],
          ["<code>UPDATE</code>", "<code>xmax</code> belgilanadi", "Yangi <code>xmin</code> bilan nusxa"],
          ["<code>DELETE</code>", "<code>xmax</code> belgilanadi", "Yaratilmaydi"],
          ["<code>VACUUM</code>", "Keraksiz versiya o'chiriladi", "Ko'rinish xaritasi yangilanadi"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Uzoq tranzaksiya — katta muammo",
        html: "Ochiq tranzaksiya <code>VACUUM</code> ga eski versiyalarni tozalashga ruxsat bermaydi. Bir kungi hisobot tranzaksiyasi bir necha soat ochiq qolsa, butun baza bo'ylab o'lik qatorlar to'planadi. Monitoringda <code>pg_stat_activity</code> dagi <code>xact_start</code> va <code>state</code> ni kuzatib, <code>idle in transaction</code> sessiyalarni yoping. Analitik so'rovlar uchun <code>statement_timeout</code> o'rnating."
      }
    ],
    quiz: [
      {
        q: "Qatorning xmin ustuni nimani saqlaydi?",
        options: [
          "Qatorni yaratgan tranzaksiya raqamini",
          "Qatorning fizik manzilini",
          "Jadval egasining id sini",
          "Indeks sahifalari sonini"
        ],
        answer: 0,
        explain: "xmin — versiyani yaratgan tranzaksiya identifikatori; MVCC ko'rinishini aniqlashda ishlatiladi."
      },
      {
        q: "UPDATE bajarilganda eski qator versiyasiga nima yoziladi?",
        options: [
          "Yangi xmin",
          "xmax joriy tranzaksiya raqami bilan belgilanadi",
          "Qator butunlay o'chiriladi",
          "Hech narsa o'zgarmaydi"
        ],
        answer: 1,
        explain: "Eski versiya xmax orqali «o'chirilgan» deb belgilanadi, yangi versiya alohida yoziladi."
      },
      {
        q: "Nega uzoq ochiq tranzaksiya jadval shishishiga olib keladi?",
        options: [
          "U barcha indekslarni o'chiradi",
          "U yangi qatorlarni bloklaydi",
          "VACUUM eski versiyalarni xavfsiz tozalay olmaydi",
          "U tranzaksiya raqamini tugatadi"
        ],
        answer: 2,
        explain: "Ochiq tranzaksiya hali ko'rishi mumkin bo'lgan eski versiyalar saqlanadi, shuning uchun VACUUM ularni o'chira olmaydi."
      }
    ]
  },
  {
    id: 61,
    title: "Izolyatsiya darajalari va anomaliyalar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Tranzaksiya izolyatsiyasi parallel ishlayotgan sessiyalar bir-biriga qanday ta'sir qilishini belgilaydi. SQL standarti to'rt darajani tavsiflaydi: <code>READ UNCOMMITTED</code>, <code>READ COMMITTED</code>, <code>REPEATABLE READ</code> va <code>SERIALIZABLE</code>. PostgreSQL'da amalda uchtasi ishlaydi: READ UNCOMMITTED READ COMMITTED kabi bajariladi. Daraja qanchalik qat'iy bo'lsa, anomaliyalar shunchalik kam, lekin konflikt va qayta urinish ehtimoli shunchalik yuqori."
      },
      {
        type: "table",
        head: ["Anomaliya", "Mazmuni", "Qaysi darajada oldi olinadi"],
        rows: [
          ["Dirty read", "Boshqa tranzaksiyaning tasdiqlanmagan o'zgarishini o'qish", "READ COMMITTED"],
          ["Non-repeatable read", "Bir tranzaksiyada ikki o'qish turlicha", "REPEATABLE READ"],
          ["Phantom read", "Oraliqda paydo bo'lgan yangi qatorlar", "REPEATABLE READ (PG)"],
          ["Lost update", "Ikki yozuv bir-birini bosib ketishi", "SERIALIZABLE yoki qulf"],
          ["Write skew", "Ikki tranzaksiya birgalikda invariantni buzishi", "SERIALIZABLE"]
        ]
      },
      {
        type: "code",
        title: "repeatable-read.sql",
        code: `-- Sessiya A
BEGIN ISOLATION LEVEL REPEATABLE READ;

SELECT sum(jami_summa) AS jami
FROM buyurtmalar
WHERE holat = 'yetkazilgan';

-- Sessiya B shu orada yangi buyurtma qo'shib commit qiladi

SELECT sum(jami_summa) AS jami
FROM buyurtmalar
WHERE holat = 'yetkazilgan';

COMMIT;`,
        output: `BEGIN
      jami
----------------
 47770000.00
(1 row)

      jami
----------------
 47770000.00
(1 row)

COMMIT`,
        outputLabel: "Bir xil natija"
      },
      {
        type: "p",
        html: "REPEATABLE READ darajasida tranzaksiya boshidagi snapshot butun tranzaksiya davomida saqlanadi, shuning uchun ikki o'qish bir xil natija beradi. Bu <b>non-repeatable read</b> va <b>phantom read</b> ni to'sadi. Lekin ikki tranzaksiya bir vaqtda bir xil qatorni yangilasa, PostgreSQL <code>could not serialize access due to concurrent update</code> xatosini berishi mumkin — bu xato ayb emas, himoya."
      },
      {
        type: "code",
        title: "serializable-konflikt.sql",
        code: `BEGIN ISOLATION LEVEL SERIALIZABLE;

UPDATE mahsulotlar
SET narx = narx * 1.10
WHERE kategoriya = 'Elektronika';

COMMIT;`,
        output: `BEGIN
ERROR:  could not serialize access due to concurrent update
DETAIL:  Reason code: Canceled on identification as a pivot, during write.
HINT:  The transaction might succeed if retried.
ROLLBACK`,
        outputLabel: "Serializatsiya xatosi"
      },
      {
        type: "note",
        variant: "tip",
        title: "Qayta urinishni rejalashtiring",
        html: "SERIALIZABLE va hatto REPEATABLE READ da konflikt xatosi normal holat. Ilova <code>40001</code> (serialization_failure) va <code>40P01</code> (deadlock_detected) kodlarini ushlab, tranzaksiyani cheklangan marta qayta boshlashi kerak. Qayta urinish soni va oraliqni cheklang, aks holda yuklama ostida cheksiz sikl paydo bo'ladi. Hisobot tranzaksiyalari uchun <code>READ ONLY</code> va <code>DEFERRABLE</code> dan foydalanish mumkin."
      }
    ],
    quiz: [
      {
        q: "PostgreSQL'da READ UNCOMMITTED amalda qanday ishlaydi?",
        options: [
          "READ COMMITTED kabi",
          "SERIALIZABLE kabi",
          "Umuman qo'llab-quvvatlanmaydi va xato beradi",
          "Faqat o'qish uchun ishlaydi"
        ],
        answer: 0,
        explain: "PostgreSQL dirty read ga yo'l qo'ymaydi, shuning uchun READ UNCOMMITTED READ COMMITTED darajasida bajariladi."
      },
      {
        q: "Qaysi anomaliya ikki tranzaksiyaning birgalikda invariantni buzishini tasvirlaydi?",
        options: [
          "Dirty read",
          "Phantom read",
          "Write skew",
          "Non-repeatable read"
        ],
        answer: 2,
        explain: "Write skew da har bir tranzaksiya alohida to'g'ri ishlaydi, lekin birgalikda biznes qoidasini buzadi; SERIALIZABLE buni aniqlaydi."
      },
      {
        q: "Serialization failure xatosidan keyin ilova nima qilishi kerak?",
        options: [
          "Tranzaksiyani butunlay tashlab ketishi",
          "Bazani qayta ishga tushirishi",
          "Cheklangan marta tranzaksiyani qayta boshlashi",
          "Indeksni o'chirishi"
        ],
        answer: 2,
        explain: "Konflikt vaqtinchalik; tranzaksiyani qayta boshlash odatiy amaliyot, lekin urinishlar soni cheklangan bo'lishi kerak."
      }
    ]
  },
  {
    id: 62,
    title: "Qulflar: row, table va advisory lock",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "PostgreSQL qulflarni obyekt darajasida boshqaradi: qator, jadval, sahifa va advisory qulflar. Oddiy <code>SELECT</code> hech narsani bloklamaydi, <code>UPDATE</code> esa o'zgartirilayotgan qatorlarga <b>row lock</b> qo'yadi. Agar biznes mantiq «avval o'qi, keyin yoz» bo'lsa, poyga holatini oldini olish uchun <code>SELECT ... FOR UPDATE</code> ishlatiladi. <b>Advisory lock</b> esa jadval qatoriga bog'lanmagan, ilova darajasidagi qulfdir."
      },
      {
        type: "table",
        head: ["Qulf", "Misol", "Qachon ishlatiladi"],
        rows: [
          ["Row share", "<code>SELECT ... FOR UPDATE</code>", "Qatorni keyin yangilash uchun"],
          ["Row exclusive", "<code>UPDATE</code>, <code>DELETE</code>", "Yozuv paytida avtomatik"],
          ["Share", "<code>CREATE INDEX</code> (ba'zi hollarda)", "Jadvalni o'qishga ruxsat"],
          ["Access exclusive", "<code>ALTER TABLE</code>, <code>DROP</code>", "Tuzilmani o'zgartirish"],
          ["Advisory", "<code>pg_advisory_lock</code>", "Ilova darajasidagi vazifalar"]
        ]
      },
      {
        type: "code",
        title: "qulflar-monitoringi.sql",
        code: `SELECT l.pid,
       l.locktype,
       l.mode,
       l.granted,
       left(a.query, 32) AS sorov
FROM pg_locks l
JOIN pg_stat_activity a USING (pid)
WHERE l.relation = 'buyurtmalar'::regclass
ORDER BY l.pid, l.mode;`,
        output: `pid  | locktype | mode           | granted | sorov
-----+----------+----------------+---------+----------------------------------
1842 | relation | RowExclusiveLock | t     | UPDATE buyurtmalar SET holat = $1
1843 | relation | AccessShareLock  | t     | SELECT id, holat FROM buyurtmalar
1844 | tuple    | ExclusiveLock    | f     | UPDATE buyurtmalar SET holat = $1`,
        outputLabel: "Faol qulflar"
      },
      {
        type: "p",
        html: "<code>granted = f</code> qator kutilayotgan qulfni ko'rsatadi: 1844 jarayoni 1842 ushlab turgan qatorni ozod qilishini kutmoqda. Bunday holatda <code>pg_blocking_pids(pid)</code> funksiyasi kim kimni bloklayotganini aniqlaydi. Qulf kutish zanjiri uzun bo'lsa, <code>lock_timeout</code> va <code>statement_timeout</code> bilan cheklang."
      },
      {
        type: "code",
        title: "skip-locked.sql",
        code: `BEGIN;

SELECT id, holat
FROM buyurtmalar
WHERE holat = 'yangi'
ORDER BY id
FOR UPDATE SKIP LOCKED;

COMMIT;`,
        output: `BEGIN
 id  | holat
-----+-------
 112 | yangi
(1 row)

COMMIT`,
        outputLabel: "Navbatdagi ish"
      },
      {
        type: "note",
        variant: "info",
        title: "SKIP LOCKED naqsh",
        html: "<code>SKIP LOCKED</code> band qilingan qatorlarni o'tkazib yuboradi va bir nechta ishchi jarayon bir xil vazifani olmasligini ta'minlaydi. Bu navbat (queue) tizimlarida keng qo'llaniladi. Muhim cheklov: so'rov barqaror tartibda ishlamasligi mumkin, shuning uchun <code>ORDER BY</code> qo'shing. Tranzaksiya juda uzoq ochiq qolsa, qulf boshqa ishchilarni to'sib qo'yadi."
      }
    ],
    quiz: [
      {
        q: "SELECT ... FOR UPDATE nima qiladi?",
        options: [
          "Tanlangan qatorlarga yozuv qulfini qo'yadi",
          "Jadvalni butunlay bloklaydi",
          "Faqat o'qish snapshot yaratadi",
          "Tranzaksiyani avtomatik commit qiladi"
        ],
        answer: 0,
        explain: "FOR UPDATE tanlangan qatorlarni boshqa yozuvchilardan himoya qiladi, shuning uchun keyingi UPDATE xavfsiz bo'ladi."
      },
      {
        q: "SKIP LOCKED qanday vazifani hal qiladi?",
        options: [
          "Boshqa sessiya qulflagan qatorlarni kutmasdan o'tkazib yuboradi",
          "Barcha qulflarni majburan ochadi",
          "Tranzaksiyani SERIALIZABLE qiladi",
          "Indeksni qayta quradi"
        ],
        answer: 0,
        explain: "SKIP LOCKED band qatorlarni chetlab o'tadi, bu parallel navbat ishchilari uchun foydali."
      },
      {
        q: "pg_locks dagi granted = false nimani bildiradi?",
        options: [
          "Qulf berilgan",
          "Jarayon qulf olishni kutmoqda",
          "Qulf faqat o'qish uchun",
          "Jadval o'chirilgan"
        ],
        answer: 1,
        explain: "granted false bo'lsa, so'ralgan qulf hali berilmagan va jarayon bloklangan."
      }
    ]
  },
  {
    id: 63,
    title: "Deadlock: aniqlash, tahlil va oldini olish",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<b>Deadlock</b> — ikki yoki undan ortiq tranzaksiya bir-birining ushlab turgan qulfini kutishi. PostgreSQL deadlock'ni avtomatik aniqlaydi va bir tranzaksiyani bekor qiladi, shunda ikkinchisi davom etadi. Bu xatoni ilova qayta urinish orqali hal qilishi mumkin, lekin sababni tuzatmasa, u qayta-qayta takrorlanadi. Odatda sabab — resurslarni turli tartibda qulflash."
      },
      {
        type: "code",
        title: "deadlock-xatosi.sql",
        code: `-- Sessiya A: 101-qatorni, keyin 102-qatorni yangilaydi
-- Sessiya B: 102-qatorni, keyin 101-qatorni yangilaydi
UPDATE buyurtmalar SET holat = 'tolangan' WHERE id = 101;
UPDATE buyurtmalar SET holat = 'tolangan' WHERE id = 102;`,
        output: `ERROR:  deadlock detected
DETAIL:  Process 1844 waits for ShareLock on transaction 2851; blocked by process 1842.
        Process 1842 waits for ShareLock on transaction 2852; blocked by process 1844.
HINT:  See server log for query details.
CONTEXT:  while updating tuple (0,3) in relation "buyurtmalar"`,
        outputLabel: "Server xatosi"
      },
      {
        type: "p",
        html: "PostgreSQL kutish grafigida sikl topganda <code>deadlock_timeout</code> (odatda 1 soniya) dan keyin tekshiradi va bitta tranzaksiyani <code>40P01</code> kodi bilan bekor qiladi. Bu xato tranzaksiya darajasida bo'ladi: butun tranzaksiya rollback qilinadi. Ilova xatoni ushlab, qayta urinishi kerak. Lekin eng yaxshi yechim — qulflash tartibini standartlashtirish."
      },
      {
        type: "code",
        title: "bloklangan-sorovlar.sql",
        code: `SELECT pid,
       pg_blocking_pids(pid) AS kutayotgan,
       wait_event_type,
       wait_event,
       state,
       left(query, 34) AS sorov
FROM pg_stat_activity
WHERE cardinality(pg_blocking_pids(pid)) > 0
ORDER BY pid;`,
        output: `pid  | kutayotgan | wait_event_type | wait_event | state  | sorov
-----+------------+-----------------+------------+--------+------------------------------------
1844 | {1842}     | Lock            | transactionid | active | UPDATE buyurtmalar SET holat = $1
1845 | {1844}     | Lock            | tuple      | active | DELETE FROM buyurtma_qatorlari WHE`,
        outputLabel: "Bloklangan sessiyalar"
      },
      {
        type: "ul",
        items: [
          "Qatorlarni har doim bir xil tartibda yangilang, masalan <code>ORDER BY id</code> bilan.",
          "Bitta tranzaksiyada juda ko'p qatorni uzoq vaqt ushlab turmang.",
          "Qulf kutish uchun <code>lock_timeout</code> qo'ying; u deadlock'ni kutishdan tezroq xato beradi.",
          "Advisory lock ishlatsangiz, kalitlarni ham bir xil tartibda oling.",
          "Deadlock xatosini logda kuzatib, eng ko'p uchraydigan naqshni tuzating."
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Deadlock'ni jazolash emas, tuzatish kerak",
        html: "<code>deadlock_timeout</code> ni oshirish faqat aniqlashni kechiktiradi, muammoni yo'qotmaydi. <code>40P01</code> ni ko'rganingizda avval ikkala sessiyaning so'rovlarini va qulflash tartibini solishtiring. Ba'zi ORM'lar qatorlarni tasodifiy tartibda yangilaydi; bunday joyda aniq <code>ORDER BY</code> yoki bitta ommaviy <code>UPDATE</code> yechim bo'ladi."
      }
    ],
    quiz: [
      {
        q: "PostgreSQL deadlock'ni qanday hal qiladi?",
        options: [
          "Ikkala tranzaksiyani ham kutadi",
          "Kutish grafigidagi siklni topib, bitta tranzaksiyani bekor qiladi",
          "Bazani qayta ishga tushiradi",
          "Barcha qulflarni majburan ochadi"
        ],
        answer: 1,
        explain: "Deadlock detector siklini aniqlagach, bitta tranzaksiyani 40P01 xatosi bilan rollback qiladi."
      },
      {
        q: "Deadlock'ning eng ko'p uchraydigan sababi nima?",
        options: [
          "Resurslarni turli tartibda qulflash",
          "Jadvalda NULL qiymatlar bo'lishi",
          "Indekslar soni ko'p bo'lishi",
          "SERIALIZABLE darajasi"
        ],
        answer: 0,
        explain: "A va B tranzaksiyalar qatorlarni qarama-qarshi tartibda qulflasa, sikl paydo bo'ladi."
      },
      {
        q: "lock_timeout qanday foyda beradi?",
        options: [
          "Deadlock'ni butunlay yo'q qiladi",
          "Qulf kutishni cheklab, uzoq bloklanishni oldini oladi",
          "Tranzaksiyani avtomatik commit qiladi",
          "Indeksni tezlashtiradi"
        ],
        answer: 1,
        explain: "lock_timeout belgilangan vaqtdan keyin xato beradi, shuning uchun sessiya cheksiz kutmaydi."
      }
    ]
  },
  {
    id: 64,
    title: "Race condition: UPSERT va atomik yangilash",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "«Avval o'qi, keyin yoz» naqshi ikki foydalanuvchi bir vaqtda ishlaganda <b>lost update</b> ga olib keladi. Masalan, ikki sessiya ombordagi oxirgi mahsulotni ko'radi va ikkalasi ham sotib oladi. Yechim — hisobni bitta atomik <code>UPDATE</code> ichida bajarish yoki qatorni <code>FOR UPDATE</code> bilan qulflash. <b>UPSERT</b> esa qo'shish va yangilashni bitta atomik amalda birlashtiradi."
      },
      {
        type: "code",
        title: "atomik-kamaytirish.sql",
        code: `UPDATE mahsulotlar
SET ombor_soni = ombor_soni - 1
WHERE id = 2
  AND ombor_soni >= 1
RETURNING id, nom, ombor_soni;`,
        output: `id | nom              | ombor_soni
---+------------------+-----------
2  | Simsiz sichqoncha | 79
(1 row)`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Shart va kamaytirish bitta <code>UPDATE</code> ichida bajarilgani uchun boshqa sessiya oraliqqa kirib qolmaydi. Agar <code>ombor_soni = 0</code> bo'lsa, <code>UPDATE 0</code> qaytadi va ilova «tovar tugagan» deb javob beradi. Bu naqshni <code>SELECT ... FOR UPDATE</code> bilan ham qilish mumkin, lekin atomik UPDATE kamroq qulf va kamroq kod talab qiladi."
      },
      {
        type: "code",
        title: "upsert.sql",
        code: `INSERT INTO mijozlar (id, ism, email, shahar, segment)
VALUES (1, 'Aziza Karimova', 'aziza@mail.uz', 'Toshkent', 'premium')
ON CONFLICT (email) DO UPDATE
SET shahar = EXCLUDED.shahar
RETURNING id, ism, (xmax = 0) AS yangi_qator;`,
        output: `id | ism           | yangi_qator
---+---------------+-------------
1  | Aziza Karimova | f
(1 row)`,
        outputLabel: "UPSERT natijasi"
      },
      {
        type: "table",
        head: ["Vaziyat", "Yechim", "Muhim shart"],
        rows: [
          ["Hisoblagichni kamaytirish", "Atomik <code>UPDATE ... WHERE</code>", "Shart va amal bir so'rovda"],
          ["Qatorni band qilish", "<code>SELECT ... FOR UPDATE</code>", "Tranzaksiya qisqa bo'lsin"],
          ["Takroriy qo'shish", "<code>ON CONFLICT</code>", "Unique yoki exclusion cheklovi"],
          ["Navbat ishchilari", "<code>SKIP LOCKED</code>", "Tartiblangan so'rov"],
          ["Tashqi API idempotentligi", "Idempotency key jadvali", "Unique kalit + natija"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Idempotentlik kaliti",
        html: "To'lov yoki buyurtma yaratishda tashqi tizim so'rovni qayta yuborishi mumkin. <code>idempotency_key</code> ustunini unique qilib, birinchi natijani saqlang. Qayta kelgan so'rovda <code>INSERT ... ON CONFLICT DO NOTHING</code> dan keyin mavjud natijani qaytaring. Bu tarmoq uzilishida ikkita bir xil to'lov yozilishini oldini oladi."
      }
    ],
    quiz: [
      {
        q: "Lost update muammosining ishonchli yechimi qaysi?",
        options: [
          "Qiymatni ilovada o'qib, keyin alohida UPDATE yuborish",
          "Shart va kamaytirishni bitta atomik UPDATE ichida bajarish",
          "Tranzaksiyani butunlay olib tashlash",
          "Jadvalga ko'proq indeks qo'shish"
        ],
        answer: 1,
        explain: "Atomik UPDATE o'qish va yozish orasida boshqa sessiya kirishiga yo'l qo'ymaydi."
      },
      {
        q: "ON CONFLICT (email) DO UPDATE uchun nima zarur?",
        options: [
          "email ustunida unique yoki primary key cheklovi",
          "Jadvalda trigger bo'lishi",
          "Faqat SERIALIZABLE darajasi",
          "email ustunida NULL qiymatlar"
        ],
        answer: 0,
        explain: "ON CONFLICT konfliktni aniqlash uchun unique indeks yoki cheklovga tayanadi."
      },
      {
        q: "Qayta yuborilgan to'lov so'rovini qanday idempotent qilish mumkin?",
        options: [
          "Har safar yangi buyurtma yaratish",
          "Idempotency key ni unique saqlab, mavjud natijani qaytarish",
          "Tranzaksiyani o'chirish",
          "Faqat SELECT ishlatish"
        ],
        answer: 1,
        explain: "Unique idempotency key bir xil so'rov ikki marta yozilishini to'sadi va birinchi natijani qayta ishlatish imkonini beradi."
      }
    ]
  }
];
