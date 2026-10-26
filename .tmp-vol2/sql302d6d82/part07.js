module.exports = [
  {
    id: 80,
    title: "Generated columns, domain va enum turlari",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Ma'lumot modelini boyitish uchun PostgreSQL maxsus turlarni beradi. <b>Generated column</b> boshqa ustunlardan avtomatik hisoblanadi va ilova tomonidan yozilmaydi. <b>Domain</b> — mavjud turga nom va cheklov qo'shish usuli. <b>Enum</b> esa cheklangan qiymatlar ro'yxatini alohida tur sifatida saqlaydi. Ular ma'lumot sifatini kod emas, sxema darajasida himoya qiladi."
      },
      {
        type: "table",
        head: ["Konstruksiya", "Afzalligi", "Cheklovi"],
        rows: [
          ["Generated", "Har doim izchil hisob", "Faqat immutable ifoda"],
          ["Domain", "Qayta ishlatiladigan cheklov", "Murakkab biznes qoidalari uchun tor"],
          ["Enum", "Aniq qiymatlar ro'yxati", "Yangi qiymat qo'shish migration talab qiladi"],
          ["Composite", "Bir nechta maydonni bitta turga", "ORM'lar bilan mosligi"],
          ["Check", "Oddiy qator qoidasi", "Boshqa jadvalga bog'lanmaydi"]
        ]
      },
      {
        type: "code",
        title: "generated-column.sql",
        code: `CREATE TABLE savat (
    id int PRIMARY KEY,
    narx numeric(10, 2) NOT NULL CHECK (narx > 0),
    miqdor int NOT NULL CHECK (miqdor > 0),
    jami numeric(12, 2)
        GENERATED ALWAYS AS (narx * miqdor) STORED
);

INSERT INTO savat (id, narx, miqdor)
VALUES (1, 1250000.00, 1)
RETURNING id, jami;`,
        output: `CREATE TABLE
 id | jami
----+-----------
  1 | 1250000.00
(1 row)`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Generated column <code>STORED</code> rejimida diskda saqlanadi va har bir yozuvda qayta hisoblanadi. Uning ifodasi immutable bo'lishi shart: <code>now()</code> yoki jadvaldagi boshqa qatorlarga murojaat qiluvchi funksiya ishlamaydi. Agar hisob faqat o'qishda kerak bo'lsa, view yoki indeksdagi ifoda yaxshiroq bo'lishi mumkin. Generated ustunni to'g'ridan-to'g'ri <code>INSERT</code> yoki <code>UPDATE</code> qilish taqiqlanadi."
      },
      {
        type: "code",
        title: "enum-domain.sql",
        code: `CREATE TYPE buyurtma_holati AS ENUM
    ('yangi', 'tolangan', 'jonatilgan', 'yetkazilgan', 'bekor');

CREATE DOMAIN musbat_summa AS numeric(12, 2)
    CHECK (VALUE > 0);

SELECT enumlabel, enumsortorder
FROM pg_enum
WHERE enumtypid = 'buyurtma_holati'::regtype
ORDER BY enumsortorder;`,
        output: `CREATE TYPE
CREATE DOMAIN
 enumlabel   | enumsortorder
-------------+---------------
 yangi       | 1
 tolangan    | 2
 jonatilgan  | 3
 yetkazilgan | 4
 bekor       | 5`,
        outputLabel: "Enum qiymatlari"
      },
      {
        type: "note",
        variant: "warning",
        title: "Enum va migration",
        html: "Enum tartibi <code>ORDER BY</code> da ishlatiladi, shuning uchun qiymatlar biznes jarayon tartibida qo'shilishi kerak. Yangi qiymat qo'shish <code>ALTER TYPE ... ADD VALUE</code> bilan amalga oshiriladi, lekin uni tranzaksiya ichida ishlatib bo'lmaydi (eski versiyalarda). Domain cheklovi butun jadval bo'ylab bir xil qoidani beradi, lekin <code>NOT VALID</code> kabi moslashuvchanlikka ega emas. Katta tizimda enum o'rniga alohida lug'at jadvali ko'proq moslashuvchan bo'lishi mumkin."
      }
    ],
    quiz: [
      {
        q: "Generated column ifodasiga qanday talab qo'yiladi?",
        options: [
          "Immutable bo'lishi",
          "Har safar now() ishlatishi",
          "Faqat text qaytarishi",
          "Boshqa jadvalga murojaat qilishi"
        ],
        answer: 0,
        explain: "Hisoblangan ustun barqaror natija berishi kerak; now() kabi volatile funksiyalar taqiqlanadi."
      },
      {
        q: "PostgreSQL'da enum qiymatlari qanday tartiblanadi?",
        options: [
          "Alifbo bo'yicha",
          "Qo'shilgan tartib (enumsortorder) bo'yicha",
          "Tasodifiy",
          "Faqat uzunligi bo'yicha"
        ],
        answer: 1,
        explain: "Enum ichki tartib raqamiga ega; ORDER BY shu tartibni ishlatadi."
      },
      {
        q: "Domain nima?",
        options: [
          "Mavjud turga nom va cheklov qo'shgan maxsus tur",
          "Jadvalning boshqa nomi",
          "Indeks turi",
          "Faqat raqamlar uchun tur"
        ],
        answer: 0,
        explain: "Domain asosiy tur va CHECK cheklovini birlashtiradi, uni bir nechta ustunda qayta ishlatish mumkin."
      }
    ]
  },
  {
    id: 81,
    title: "PL/pgSQL: bloklar, xato boshqaruvi va dinamik SQL",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "PL/pgSQL — PostgreSQL'ning protsedural tili. U o'zgaruvchilar, shartlar, tsikllar va xato boshqaruvini SQL bilan birlashtiradi. Har bir funksiya yoki <code>DO</code> bloki <code>DECLARE</code>, <code>BEGIN</code> va <code>END</code> qismlaridan iborat. <code>EXCEPTION</code> bloki xatoni ushlab, tranzaksiyani saqlab qolish yoki tushunarli xabar berish imkonini beradi."
      },
      {
        type: "code",
        title: "xato-boshqaruvi.sql",
        code: `DO $$
DECLARE
    v_son int := 0;
BEGIN
    BEGIN
        PERFORM 10 / v_son;
    EXCEPTION WHEN division_by_zero THEN
        RAISE NOTICE 'Nolga bo''lish ushlandi';
    END;
END;
$$;`,
        output: `NOTICE:  Nolga bo'lish ushlandi
DO`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Ichki <code>BEGIN ... EXCEPTION ... END</code> bloki xatoni ushlaydi va tashqi blok davom etadi. <code>SQLSTATE</code> kodlari orqali aniq xatoni tanlash mumkin: <code>unique_violation</code>, <code>foreign_key_violation</code>, <code>division_by_zero</code>. Xatoni ushlab, sababini yashirmang — logga <code>SQLERRM</code> va <code>SQLSTATE</code> ni yozing. Bo'sh <code>EXCEPTION WHEN OTHERS THEN NULL</code> — jimgina yutilgan xatolarning eng katta manbai."
      },
      {
        type: "code",
        title: "funksiya.sql",
        code: `CREATE FUNCTION mijoz_buyurtmalari(p_mijoz_id int)
RETURNS TABLE (buyurtma_id int, summa numeric)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
    RETURN QUERY
    SELECT b.id, b.jami_summa
    FROM buyurtmalar b
    WHERE b.mijoz_id = p_mijoz_id
    ORDER BY b.id;
END;
$$;

SELECT * FROM mijoz_buyurtmalari(1);`,
        output: `CREATE FUNCTION
 buyurtma_id | summa
-------------+-----------
         101 | 12780000.00
         105 | 1410000.00
         106 | 15700000.00
         111 | 12850000.00
(4 rows)`,
        outputLabel: "Natija"
      },
      {
        type: "table",
        head: ["Tushuncha", "Vazifasi", "Eslatma"],
        rows: [
          ["<code>RETURN QUERY</code>", "So'rov natijasini qaytaradi", "Funksiya jadval qaytaradi"],
          ["<code>PERFORM</code>", "Natijasiz so'rov bajaradi", "Faqat yon ta'sir uchun"],
          ["<code>FOUND</code>", "Oxirgi amal qator topganini bildiradi", "UPDATE/DELETE dan keyin"],
          ["<code>GET DIAGNOSTICS</code>", "Qatorlar sonini oladi", "<code>ROW_COUNT</code>"],
          ["<code>format %I %L</code>", "Identifikator va literalni xavfsiz qo'shadi", "Dinamik SQL uchun"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Dinamik SQLni xavfsiz yozing",
        html: "Dinamik SQL kerak bo'lsa, qiymatlarni <code>USING</code> bilan bering, identifikatorlarni <code>format('%I', nom)</code> bilan himoyalang. <code>quote_ident</code> va <code>quote_literal</code> dan ham foydalanish mumkin. Funksiya egasi huquqi bilan ishlaydigan <code>SECURITY DEFINER</code> bo'lsa, <code>search_path</code> ni albatta qat'iy belgilang. PL/pgSQL kodi migratsiya bilan versiyalansin."
      }
    ],
    quiz: [
      {
        q: "PL/pgSQL'dagi EXCEPTION bloki nima qiladi?",
        options: [
          "Xatoni ushlab, blokdan chiqishga imkon beradi",
          "Barcha jadvallarni o'chiradi",
          "Tranzaksiyani avtomatik commit qiladi",
          "Faqat SELECT uchun ishlaydi"
        ],
        answer: 0,
        explain: "EXCEPTION xato turini ushlaydi va belgilangan kodni bajaradi; xato yutilmasligi uchun log yozish muhim."
      },
      {
        q: "RETURN QUERY qayerda ishlatiladi?",
        options: [
          "Jadval qaytaradigan funksiya ichida",
          "Faqat DO blokida",
          "Faqat triggerda",
          "Faqat indeks yaratishda"
        ],
        answer: 0,
        explain: "RETURN QUERY so'rov natijasini funksiyaning qaytarish qiymatiga qo'shadi."
      },
      {
        q: "SECURITY DEFINER funksiyada search_path nega muhim?",
        options: [
          "Foydalanuvchi soxta obyekt orqali huquqni oshirishi mumkin",
          "U funksiyani tezlashtiradi",
          "Aks holda funksiya yaratilmaydi",
          "U tranzaksiyani bloklaydi"
        ],
        answer: 0,
        explain: "Belgilanmagan search_path hujumchiga bir xil nomli obyekt yaratib, funksiya ichidagi murojaatni chalg'itish imkonini beradi."
      }
    ]
  },
  {
    id: 82,
    title: "Protseduralar, kursor va paketli yuklash",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Funksiya qiymat qaytaradi va so'rov ichida ishlatiladi; <b>protsedura</b> esa <code>CALL</code> bilan chaqiriladi va o'z ichida tranzaksiyani boshqarishi mumkin. Bu uzoq davom etadigan paketli ishlov uchun muhim: protsedura har bir partiyadan keyin <code>COMMIT</code> qilib, tranzaksiya jurnalini kichik ushlab turishi mumkin. <b>Kursor</b> esa katta natijani qatorlab o'qish imkonini beradi."
      },
      {
        type: "table",
        head: ["Obyekt", "Chaqirish", "Tranzaksiya", "Qaytarish"],
        rows: [
          ["Function", "<code>SELECT</code> ichida", "Chaqiruvchi boshqaradi", "Qiymat yoki jadval"],
          ["Procedure", "<code>CALL</code>", "O'zi COMMIT qilishi mumkin", "Yo'q"],
          ["Cursor", "<code>OPEN/FETCH</code>", "Chaqiruvchi", "Qatorlab"],
          ["DO block", "Bir martalik", "Chaqiruvchi", "Yo'q"]
        ]
      },
      {
        type: "code",
        title: "protsedura.sql",
        code: `CREATE PROCEDURE holat_yangila(p_id int, p_holat text)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE buyurtmalar
    SET holat = p_holat
    WHERE id = p_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Buyurtma % topilmadi', p_id;
    END IF;

    COMMIT;
END;
$$;

CALL holat_yangila(112, 'tolangan');`,
        output: `CREATE PROCEDURE
CALL`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Protsedura ichidagi <code>COMMIT</code> faqat <code>CALL</code> tranzaksiya blokidan tashqarida bajarilganda ishlaydi. Agar chaqiruvchi allaqachon <code>BEGIN</code> ochgan bo'lsa, PostgreSQL xato beradi. Shuning uchun paketli yuklash protsedurasi mustaqil chaqirilishi kerak. <code>IF NOT FOUND</code> tekshiruvi <code>UPDATE</code> dan keyin darhol bajariladi; orada boshqa SQL qo'shsangiz, <code>FOUND</code> qiymati o'zgaradi."
      },
      {
        type: "code",
        title: "kursor-batch.sql",
        code: `DO $$
DECLARE
    r record;
    jami int := 0;
BEGIN
    FOR r IN
        SELECT id FROM buyurtmalar
        WHERE holat = 'yetkazilgan'
        ORDER BY id
    LOOP
        jami := jami + 1;
    END LOOP;

    RAISE NOTICE 'Qayta ishlangan: %', jami;
END;
$$;`,
        output: `NOTICE:  Qayta ishlangan: 8
DO`,
        outputLabel: "Natija"
      },
      {
        type: "note",
        variant: "tip",
        title: "Katta natijani bo'laklang",
        html: "Millionlab qatorni bitta kursorda ochish xotirani to'ldiradi. Keyset pagination (<code>WHERE id > oxirgi_id ORDER BY id LIMIT 1000</code>) yoki server-side cursor bilan partiyalab ishlang. Har partiyadan keyin qisqa pauza va progress log qo'shing. Protsedura ichida <code>COMMIT</code> qilsangiz, xato yuz berganda qaysi partiya tugaganini alohida jadvalda qayd eting — qayta ishga tushirish uchun."
      }
    ],
    quiz: [
      {
        q: "Protsedurani chaqirish uchun qaysi buyruq ishlatiladi?",
        options: [
          "SELECT",
          "CALL",
          "EXECUTE",
          "PERFORM"
        ],
        answer: 1,
        explain: "Protsedura CALL bilan chaqiriladi; funksiya esa SELECT ichida ishlatiladi."
      },
      {
        q: "Protsedura ichida COMMIT qachon ishlaydi?",
        options: [
          "Har doim",
          "Chaqiruvchi tranzaksiya blokida bo'lmasa",
          "Faqat trigger ichida",
          "Faqat SELECT dan keyin"
        ],
        answer: 1,
        explain: "Agar CALL allaqachon ochiq tranzaksiya ichida bo'lsa, ichki COMMIT taqiqlanadi."
      },
      {
        q: "Katta natijani qatorlab o'qish uchun nima ishlatiladi?",
        options: [
          "Kursor",
          "Indeks",
          "Trigger",
          "Domain"
        ],
        answer: 0,
        explain: "Kursor natijani bo'laklab o'qish imkonini beradi, ayniqsa server-side cursor bilan."
      }
    ]
  },
  {
    id: 83,
    title: "Triggerlar: audit, validatsiya va derived data",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Trigger — jadvaldagi <code>INSERT</code>, <code>UPDATE</code> yoki <code>DELETE</code> hodisasiga avtomatik javob. U <b>BEFORE</b> (yozuvdan oldin), <b>AFTER</b> (keyin) yoki <b>INSTEAD OF</b> (view o'rniga) ishga tushadi. Trigger biznes qoidasini bazada markazlashtiradi, lekin uni ko'rinmas «sehr»ga aylantirmaslik kerak: har bir trigger hujjatlashtirilgan va testlangan bo'lishi shart."
      },
      {
        type: "code",
        title: "audit-trigger.sql",
        code: `CREATE TABLE audit_log (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    jadval text NOT NULL,
    amal text NOT NULL,
    foydalanuvchi text NOT NULL,
    eski jsonb,
    yangi jsonb,
    sana timestamptz NOT NULL DEFAULT now()
);

CREATE FUNCTION audit_buyurtma()
RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO audit_log (jadval, amal, foydalanuvchi, eski, yangi)
    VALUES (
        TG_TABLE_NAME,
        TG_OP,
        current_user,
        CASE WHEN TG_OP = 'INSERT' THEN NULL ELSE to_jsonb(OLD) END,
        CASE WHEN TG_OP = 'DELETE' THEN NULL ELSE to_jsonb(NEW) END
    );
    RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER trg_buyurtma_audit
AFTER INSERT OR UPDATE OR DELETE ON buyurtmalar
FOR EACH ROW
EXECUTE FUNCTION audit_buyurtma();`,
        output: `CREATE TABLE
CREATE FUNCTION
CREATE TRIGGER`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Bu trigger har bir qator o'zgarishini <code>audit_log</code> ga yozadi. <code>TG_OP</code> amal turini, <code>TG_TABLE_NAME</code> jadval nomini beradi. <code>COALESCE(NEW, OLD)</code> — AFTER trigger uchun qaytariladigan qator; DELETE da <code>NEW</code> bo'lmaydi. Audit yozuvi asosiy tranzaksiya bilan birga commit bo'ladi: agar asosiy amal rollback bo'lsa, audit ham yo'qoladi."
      },
      {
        type: "code",
        title: "audit-tekshiruvi.sql",
        code: `SELECT id, amal, foydalanuvchi, sana
FROM audit_log
ORDER BY id DESC
LIMIT 3;`,
        output: `id | amal   | foydalanuvchi | sana
---+--------+---------------+----------------------------
 3 | UPDATE | dukon_app     | 2024-07-01 11:02:14.882+05
 2 | INSERT | dukon_app     | 2024-07-01 11:01:47.115+05
 1 | DELETE | dukon_admin   | 2024-07-01 10:58:03.771+05`,
        outputLabel: "Audit yozuvlari"
      },
      {
        type: "table",
        head: ["Trigger turi", "Qachon", "Nima uchun"],
        rows: [
          ["BEFORE ROW", "Yozuvdan oldin", "Validatsiya, maydonni to'ldirish"],
          ["AFTER ROW", "Yozuvdan keyin", "Audit, boshqa jadvalni yangilash"],
          ["BEFORE STATEMENT", "Butun amaldan oldin", "Ogohlantirish, ruxsat"],
          ["AFTER STATEMENT", "Butun amaldan keyin", "Transition table bilan"],
          ["INSTEAD OF", "View ustida", "View'ni yoziladigan qilish"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Trigger xatolari va rekursiya",
        html: "Trigger ichidagi xato butun tranzaksiyani bekor qiladi. <code>WHEN</code> sharti bilan triggerni faqat kerakli holatlarda ishga tushiring: <code>WHEN (OLD.holat IS DISTINCT FROM NEW.holat)</code>. Agar trigger o'zi o'zgargan jadvalga yozsa, cheksiz rekursiya paydo bo'ladi; <code>pg_trigger_depth()</code> bilan cheklang yoki AFTER triggerda boshqa jadvalga yozing. Har bir trigger uchun test va migratsiya bo'lsin."
      }
    ],
    quiz: [
      {
        q: "AFTER triggerda DELETE amali uchun qaysi rekord mavjud?",
        options: [
          "NEW",
          "OLD",
          "Ikkalasi ham",
          "Hech biri"
        ],
        answer: 1,
        explain: "DELETE da yangi qator yo'q, shuning uchun faqat OLD mavjud."
      },
      {
        q: "Triggerdagi WHEN sharti nima uchun foydali?",
        options: [
          "Triggerni faqat kerakli holatlarda ishga tushirish uchun",
          "Trigger nomini o'zgartirish uchun",
          "Jadvalni o'chirish uchun",
          "Indeks yaratish uchun"
        ],
        answer: 0,
        explain: "WHEN ortiqcha ishlarni kamaytiradi va masalan, faqat holat o'zgarganda audit yozadi."
      },
      {
        q: "Trigger o'zi o'zgargan jadvalga yozsa nima bo'lishi mumkin?",
        options: [
          "Cheksiz rekursiya",
          "Avtomatik indeks",
          "Tranzaksiya tezlashadi",
          "RLS o'chadi"
        ],
        answer: 0,
        explain: "Trigger qayta ishga tushib, cheksiz sikl hosil qilishi mumkin; chuqurlikni cheklash kerak."
      }
    ]
  },
  {
    id: 84,
    title: "LISTEN/NOTIFY, pg_cron va rejalashtirilgan vazifalar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ba'zan baza hodisa haqida ilovaga darhol xabar berishi kerak: yangi buyurtma keldi, navbatga vazifa qo'shildi, hisobot tayyor bo'ldi. <b>LISTEN/NOTIFY</b> PostgreSQL'ning ichki pub/sub mexanizmi. U oddiy va tranzaksiyaga bog'langan, lekin xabar saqlanmaydi: tinglovchi ulanmagan bo'lsa, xabar yo'qoladi. Takroriy vazifalar uchun <b>pg_cron</b> kengaytmasi ishlatiladi."
      },
      {
        type: "code",
        title: "listen-notify.sql",
        code: `LISTEN buyurtma_yangi;

NOTIFY buyurtma_yangi,
       '{"id":113,"mijoz_id":10,"summa":6400000}';`,
        output: `LISTEN
NOTIFY
Asynchronous notification "buyurtma_yangi" with payload
"{\\"id\\":113,\\"mijoz_id\\":10,\\"summa\\":6400000}" received from server process with PID 1842.`,
        outputLabel: "Xabar"
      },
      {
        type: "p",
        html: "<code>NOTIFY</code> joriy tranzaksiya commit bo'lgandagina yuboriladi. Agar tranzaksiya rollback bo'lsa, xabar ham bekor bo'ladi. Bu xususiyat xabarni ma'lumot o'zgarishi bilan izchil qiladi. Xabar hajmi kichik bo'lishi kerak: katta JSON yuborish o'rniga id yuborib, tinglovchi bazadan o'zi o'qiydi. Bir nechta kanal va prefikslar bilan hodisalarni ajratish mumkin."
      },
      {
        type: "code",
        title: "pg-cron.sql",
        code: `CREATE EXTENSION IF NOT EXISTS pg_cron;

SELECT cron.schedule(
    'kechagi-hisobot',
    '0 3 * * *',
    $$REFRESH MATERIALIZED VIEW CONCURRENTLY kunlik_hisobot$$
) AS job_id;

SELECT jobid, schedule, command
FROM cron.job
ORDER BY jobid;`,
        output: `CREATE EXTENSION
 job_id
--------
      7
(1 row)

 jobid | schedule  | command
-------+-----------+--------------------------------------------------------
     7 | 0 3 * * * | REFRESH MATERIALIZED VIEW CONCURRENTLY kunlik_hisobot
(1 row)`,
        outputLabel: "Rejalashtirilgan vazifa"
      },
      {
        type: "table",
        head: ["Vosita", "Afzalligi", "Cheklovi"],
        rows: [
          ["LISTEN/NOTIFY", "Tranzaksiyaga bog'langan, darhol", "Xabar saqlanmaydi"],
          ["pg_cron", "Baza ichida jadval", "Bitta baza, failover bilan"],
          ["Tashqi scheduler", "Kuchli monitoring", "Alohida xizmat"],
          ["Trigger + queue jadval", "Ishonchli, qayta urinish", "Qo'shimcha jadval"],
          ["Logical replication", "Boshqa tizimga oqim", "Sozlash murakkabroq"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Kamida bir marta yetkazish",
        html: "<code>NOTIFY</code> «eng yaxshi urinish» modelida ishlaydi: tinglovchi uzilgan bo'lsa, xabar yo'qoladi. Muhim hodisalar uchun <b>outbox</b> jadvali ishlating: biznes amali bilan bir tranzaksiyada qator yozing, keyin fon jarayoni navbatni o'qib, qayta urinish bilan yuboradi. <code>pg_cron</code> vazifalari failover paytida boshqa serverda ishga tushishi mumkin, shuning uchun ular idempotent bo'lishi shart."
      }
    ],
    quiz: [
      {
        q: "NOTIFY xabari qachon yuboriladi?",
        options: [
          "So'rov bajarilishi bilanoq",
          "Tranzaksiya commit bo'lganda",
          "Faqat rollbackda",
          "Har soatda"
        ],
        answer: 1,
        explain: "Xabar tranzaksiya bilan bog'langan; commit bo'lsa yuboriladi, rollback bo'lsa bekor qilinadi."
      },
      {
        q: "LISTEN/NOTIFY ning asosiy cheklovi nima?",
        options: [
          "Xabarlar saqlanmaydi, tinglovchi yo'q bo'lsa yo'qoladi",
          "U faqat MySQL'da ishlaydi",
          "U tranzaksiyani bloklaydi",
          "U 1 MB dan katta xabarni talab qiladi"
        ],
        answer: 0,
        explain: "NOTIFY doimiy navbat emas; ishonchli yetkazish uchun outbox jadvali kerak."
      },
      {
        q: "pg_cron vazifasi nega idempotent bo'lishi kerak?",
        options: [
          "Failover yoki qayta ishga tushishda ikki marta bajarilishi mumkin",
          "U har doim sekin ishlaydi",
          "U faqat bir marta ishlaydi",
          "U tranzaksiyani o'chiradi"
        ],
        answer: 0,
        explain: "Rejalashtirilgan vazifa qayta ishga tushsa, takroriy natija yoki ikki marta yozuv paydo bo'lmasligi kerak."
      }
    ]
  }
];
