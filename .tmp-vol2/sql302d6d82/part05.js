module.exports = [
  {
    id: 70,
    title: "Rollar va grantlar: eng kam huquq tamoyili",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "SQL'da huquqlar <b>rollar</b> orqali beriladi. PostgreSQL'da foydalanuvchi ham, guruh ham rol hisoblanadi. Ilova uchun <code>superuser</code> yoki jadval egasi huquqini berish xavfli: bitta xato butun bazani buzishi mumkin. <b>Eng kam huquq</b> tamoyili faqat vazifa uchun zarur bo'lgan minimal ruxsatlarni berishni talab qiladi. O'qish va yozish rollarini ajratish, keyin ularni ilova foydalanuvchisiga ulash odatiy amaliyotdir."
      },
      {
        type: "table",
        head: ["Rol", "Huquqlar", "Nima uchun"],
        rows: [
          ["<code>dukon_read</code>", "SELECT", "Hisobot va dashboard"],
          ["<code>dukon_write</code>", "SELECT, INSERT, UPDATE, DELETE", "Ilova API"],
          ["<code>dukon_migrator</code>", "DDL, schema egasi", "Migratsiya jarayoni"],
          ["<code>dukon_audit</code>", "Faqat audit jadvalini o'qish", "Xavfsizlik tekshiruvi"],
          ["<code>dukon_app</code>", "LOGIN, read/write rollari", "Ilova ulanishi"]
        ]
      },
      {
        type: "code",
        title: "rollar.sql",
        code: `CREATE ROLE dukon_read NOLOGIN;
CREATE ROLE dukon_write NOLOGIN;
CREATE ROLE dukon_app LOGIN PASSWORD 'kuchli-parol';

GRANT CONNECT ON DATABASE dukon TO dukon_read, dukon_write;
GRANT USAGE ON SCHEMA public TO dukon_read, dukon_write;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO dukon_read;
GRANT SELECT, INSERT, UPDATE, DELETE
    ON ALL TABLES IN SCHEMA public TO dukon_write;
GRANT dukon_read, dukon_write TO dukon_app;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT ON TABLES TO dukon_read;`,
        output: `CREATE ROLE
CREATE ROLE
CREATE ROLE
GRANT
GRANT
GRANT
GRANT
GRANT
ALTER DEFAULT PRIVILEGES`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "<code>NOLOGIN</code> rollar guruh sifatida ishlaydi, ular bilan to'g'ridan-to'g'ri ulanib bo'lmaydi. <code>dukon_app</code> esa login qiladi va guruh huquqlarini meros oladi. <code>ALTER DEFAULT PRIVILEGES</code> kelajakda yaratiladigan jadvallarga ham o'qish huquqini beradi; usiz yangi jadval paydo bo'lganda hisobotlar <code>permission denied</code> bilan to'xtaydi."
      },
      {
        type: "code",
        title: "huquqlar-tekshiruvi.sql",
        code: `SELECT grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'buyurtmalar'
  AND grantee IN ('dukon_read', 'dukon_write')
ORDER BY grantee, privilege_type;`,
        output: `grantee     | privilege_type
------------+----------------
dukon_read  | SELECT
dukon_write | DELETE
dukon_write | INSERT
dukon_write | SELECT
dukon_write | UPDATE`,
        outputLabel: "Berilgan huquqlar"
      },
      {
        type: "note",
        variant: "warning",
        title: "Public va search_path",
        html: "Yangi bazada <code>PUBLIC</code> yetakchi jadval va funksiyalarga ortiqcha huquqlarga ega bo'lishi mumkin. <code>REVOKE ALL ON SCHEMA public FROM PUBLIC;</code> bilan boshlang, keyin kerakli rollarga aniq ruxsat bering. Ilova ulanishida <code>search_path</code> ni <code>public</code> bilan qat'iy belgilang; aks holda foydalanuvchi o'z sxemasida bir xil nomli jadval yaratib, so'rovni chalg'itishi mumkin."
      }
    ],
    quiz: [
      {
        q: "Eng kam huquq tamoyili nimani talab qiladi?",
        options: [
          "Barcha foydalanuvchilarga superuser berish",
          "Faqat vazifa uchun zarur bo'lgan minimal ruxsatlarni berish",
          "Barcha huquqlarni olib tashlash",
          "Faqat SELECT berish"
        ],
        answer: 1,
        explain: "Har bir rol faqat o'z ishini bajarish uchun kerakli obyektlarga va amallarga ruxsat olishi kerak."
      },
      {
        q: "ALTER DEFAULT PRIVILEGES nima qiladi?",
        options: [
          "Kelajakda yaratiladigan obyektlarga avtomatik huquq beradi",
          "Mavjud jadvallarni o'chiradi",
          "Rollarni bloklaydi",
          "Faqat indekslarga ta'sir qiladi"
        ],
        answer: 0,
        explain: "U yangi jadvallar yaratilganda qanday huquqlar berilishini belgilaydi."
      },
      {
        q: "NOLOGIN roli qanday maqsadda ishlatiladi?",
        options: [
          "To'g'ridan-to'g'ri ulanish uchun",
          "Huquqlar guruhi sifatida, boshqa rollarga berish uchun",
          "Faqat superuser uchun",
          "Zaxira nusxa uchun"
        ],
        answer: 1,
        explain: "NOLOGIN rol ulanish uchun emas, huquqlar to'plamini guruhlash uchun xizmat qiladi."
      }
    ]
  },
  {
    id: 71,
    title: "Row-level security va multi-tenant izolyatsiya",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Ba'zi ilovalarda bir baza ko'p mijozga (tenant) xizmat qiladi. Har bir tenant faqat o'z qatorlarini ko'rishi kerak. Buni ilova kodida <code>WHERE tenant_id = ...</code> bilan qilish mumkin, lekin bitta unutilgan shart ma'lumot oqishiga olib keladi. <b>Row-level security</b> (RLS) qoidani baza darajasida majburiy qiladi: foydalanuvchi qanday so'rov yozmasin, faqat ruxsat etilgan qatorlar ko'rinadi."
      },
      {
        type: "code",
        title: "rls-yoqish.sql",
        code: `ALTER TABLE buyurtmalar
    ADD COLUMN tenant_id int NOT NULL DEFAULT 1;

ALTER TABLE buyurtmalar ENABLE ROW LEVEL SECURITY;

CREATE POLICY buyurtma_tenant_policy
ON buyurtmalar
USING (tenant_id = current_setting('app.tenant_id')::int)
WITH CHECK (tenant_id = current_setting('app.tenant_id')::int);`,
        output: `ALTER TABLE
ALTER TABLE
CREATE POLICY`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "<code>USING</code> mavjud qatorlarni o'qish va yangilashda ko'rinishni cheklaydi, <code>WITH CHECK</code> esa yangi yoki o'zgartirilgan qatorlar qoidaga mos kelishini tekshiradi. Ikkalasini yozish muhim: faqat USING bo'lsa, foydalanuvchi o'ziga ko'rinmaydigan tenant_id bilan yangi qator qo'shishi mumkin. Jadval egasi odatda RLS'ni chetlab o'tadi; ilova alohida rol bilan ulanishi kerak."
      },
      {
        type: "code",
        title: "tenant-test.sql",
        code: `SET ROLE dukon_app;
SET app.tenant_id = '2';

SELECT tenant_id, count(*) AS buyurtmalar
FROM buyurtmalar
GROUP BY tenant_id;

RESET ROLE;`,
        output: `SET
SET
 tenant_id | buyurtmalar
-----------+-------------
         2 | 2
(1 row)

RESET`,
        outputLabel: "Faqat tenant 2"
      },
      {
        type: "table",
        head: ["Sozlama", "Vazifasi", "Ehtiyot chorasi"],
        rows: [
          ["<code>ENABLE ROW LEVEL SECURITY</code>", "Jadvalda RLS'ni yoqadi", "Egasi chetlab o'tadi"],
          ["<code>FORCE ROW LEVEL SECURITY</code>", "Egaga ham qo'llaydi", "Migratsiya uchun alohida rol"],
          ["<code>USING</code>", "Mavjud qatorlarni filtrlaydi", "Yo'q bo'lsa hamma ko'rinadi"],
          ["<code>WITH CHECK</code>", "Yozilayotgan qatorni tekshiradi", "Yo'q bo'lsa tenant almashishi mumkin"],
          ["<code>current_setting</code>", "Sessiya konteksti", "Har ulanishda o'rnatilsin"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Kontekstni to'g'ri o'rnating",
        html: "<code>current_setting('app.tenant_id')</code> har bir ulanishda o'rnatilishi kerak. Ulanishlar puli (connection pool) ishlatilsa, oldingi so'rovdan qolgan qiymat keyingi foydalanuvchiga o'tib ketmasin. <code>SET LOCAL</code> tranzaksiya tugagach avtomatik tozalanadi. RLS har bir so'rovga qo'shimcha shart qo'shadi, shuning uchun <code>tenant_id</code> ustuniga indeks qo'yish unumdorlik uchun muhim."
      }
    ],
    quiz: [
      {
        q: "RLS'dagi WITH CHECK nimani tekshiradi?",
        options: [
          "Faqat SELECT natijasini",
          "Yangi yoki o'zgartirilgan qator qoidaga mos kelishini",
          "Indeksning hajmini",
          "Foydalanuvchi parolini"
        ],
        answer: 1,
        explain: "WITH CHECK yozuv amallarida qator qiymatlarini tekshiradi, masalan tenant_id boshqa tenantga o'tishini to'sadi."
      },
      {
        q: "Nega connection pool bilan SET LOCAL afzal?",
        options: [
          "Tranzaksiya tugagach qiymat avtomatik tozalanadi",
          "U tezroq ishlaydi",
          "U barcha qatorlarni ko'rsatadi",
          "U RLS'ni o'chiradi"
        ],
        answer: 0,
        explain: "SET LOCAL tranzaksiya doirasida amal qiladi va ulanish boshqa foydalanuvchiga qaytganda kontekst qolib ketmaydi."
      },
      {
        q: "Jadval egasi RLS'ni chetlab o'tmasligi uchun nima qilish kerak?",
        options: [
          "FORCE ROW LEVEL SECURITY",
          "DROP POLICY",
          "ALTER TABLE DISABLE TRIGGER",
          "SET search_path"
        ],
        answer: 0,
        explain: "FORCE ROW LEVEL SECURITY egaga ham qoidalarni qo'llaydi."
      }
    ]
  },
  {
    id: 72,
    title: "SQL injection va xavfsiz dinamik so'rovlar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "SQL injection — foydalanuvchi kiritgan matn so'rovning bir qismiga aylanib qolishi. <code>' OR 1=1 --</code> kabi oddiy satr butun shartni o'zgartirishi mumkin. Himoyaning eng ishonchli yo'li — qiymatlarni <b>parametr</b> sifatida uzatish, ularni matnga yopishtirmaslik. Dinamik SQL zarur bo'lsa, identifikatorlarni oq ro'yxat bilan tekshiring va qiymatlarni <code>USING</code> yoki <code>format('%L')</code> bilan bering."
      },
      {
        type: "code",
        title: "xavfli-funksiya.sql",
        code: `CREATE FUNCTION mijoz_qidir_xavfli(q text)
RETURNS TABLE (id int, ism text)
LANGUAGE plpgsql AS $$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT id, ism FROM mijozlar WHERE ism = ''' || q || '''';
END;
$$;`,
        output: `CREATE FUNCTION`,
        outputLabel: "Natija"
      },
      {
        type: "p",
        html: "Yuqoridagi funksiya <code>q = 'x'' OR 1=1 --'</code> bo'lsa, barcha mijozlarni qaytaradi. Bu oddiy misol, lekin real hujumda <code>UNION SELECT</code> orqali boshqa jadvallar ham o'qilishi mumkin. Yechim — so'rovni parametr bilan tayyorlash. <code>EXECUTE ... USING</code> qiymatni SQL matnidan ajratadi, shuning uchun maxsus belgilar koddan tashqarida qoladi."
      },
      {
        type: "code",
        title: "xavfsiz-funksiya.sql",
        code: `CREATE FUNCTION mijoz_qidir(q text)
RETURNS TABLE (id int, ism text)
LANGUAGE plpgsql AS $$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT id, ism FROM mijozlar WHERE ism = $1' USING q;
END;
$$;

SELECT * FROM mijoz_qidir('Aziza Karimova');`,
        output: `CREATE FUNCTION
 id | ism
----+---------------
  1 | Aziza Karimova
(1 row)`,
        outputLabel: "Xavfsiz natija"
      },
      {
        type: "table",
        head: ["Xavf", "Noto'g'ri", "To'g'ri"],
        rows: [
          ["Qiymat", "<code>|| q ||</code>", "<code>USING q</code>"],
          ["Jadval nomi", "Foydalanuvchi kiritgan nom", "Oq ro'yxatdan tanlash"],
          ["Ustun nomi", "To'g'ridan-to'g'ri matn", "<code>quote_ident</code> va tekshiruv"],
          ["LIKE qidiruv", "<code>'%' || q || '%'</code>", "Parametr + <code>ESCAPE</code>"],
          ["Dinamik tartib", "Matn", "Faqat ruxsat etilgan yo'nalishlar"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "SECURITY DEFINER",
        html: "<code>SECURITY DEFINER</code> funksiya uni chaqirgan foydalanuvchi emas, egasi huquqi bilan ishlaydi. Bu qulay, lekin xavfli: funksiya ichida <code>search_path</code> ni qat'iy belgilang (<code>SET search_path = public, pg_temp</code>), aks holda foydalanuvchi o'z sxemasida soxta funksiya yoki operator yaratib, huquqni oshirishi mumkin. Imkon bo'lsa <code>SECURITY INVOKER</code> dan foydalaning."
      }
    ],
    quiz: [
      {
        q: "SQL injection'dan himoyaning eng ishonchli usuli qaysi?",
        options: [
          "Qiymatlarni parametr sifatida uzatish",
          "Barcha apostroflarni o'chirish",
          "So'rovni kichik harflarda yozish",
          "Faqat SELECT ishlatish"
        ],
        answer: 0,
        explain: "Parametrlar SQL matnidan alohida uzatiladi, shuning uchun kiritilgan matn kod sifatida bajarilmaydi."
      },
      {
        q: "Dinamik SQL'da identifikatorni qanday xavfsiz qilish mumkin?",
        options: [
          "Oq ro'yxat bilan tekshirish va quote_ident ishlatish",
          "Hech qanday tekshiruvsiz qo'shish",
          "Faqat katta harflarga o'tkazish",
          "Parametr sifatida berish"
        ],
        answer: 0,
        explain: "Identifikatorlarni parametr qilib bo'lmaydi; ularni ruxsat etilgan ro'yxatdan tanlash va quote_ident bilan himoyalash kerak."
      },
      {
        q: "SECURITY DEFINER funksiyada search_path nega qat'iy belgilanishi kerak?",
        options: [
          "Foydalanuvchi soxta obyekt yaratib, huquqni oshirishi mumkin",
          "U tezroq ishlaydi",
          "Aks holda funksiya umuman ishlamaydi",
          "U RLS'ni o'chiradi"
        ],
        answer: 0,
        explain: "Belgilanmagan search_path hujumchiga o'z sxemasida bir xil nomli obyekt yaratish imkonini beradi."
      }
    ]
  },
  {
    id: 73,
    title: "Audit, pgaudit va maxfiy ma'lumotlar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Audit — kim, qachon, qaysi ma'lumotni o'zgartirganini bilish. PostgreSQL'da ikki daraja bor: server darajasidagi <b>pgaudit</b> barcha so'rovlarni jurnalga yozadi, jadval darajasidagi <b>audit trigger</b> esa biznes jihatdan muhim o'zgarishlarni alohida jadvalga saqlaydi. Audit yozuvlari o'zgartirilmasligi va yetarli muddat saqlanishi kerak."
      },
      {
        type: "code",
        title: "audit-jadvali.sql",
        code: `SELECT id,
       jadval,
       amal,
       foydalanuvchi,
       sana
FROM audit_log
ORDER BY id DESC
LIMIT 3;`,
        output: `id  | jadval      | amal   | foydalanuvchi | sana
----+-------------+--------+---------------+----------------------------
903 | buyurtmalar | UPDATE | dukon_app     | 2024-07-01 10:42:17.221+05
902 | mijozlar    | INSERT | dukon_app     | 2024-07-01 10:40:03.118+05
901 | buyurtmalar | DELETE | dukon_admin   | 2024-07-01 10:38:55.904+05`,
        outputLabel: "Oxirgi yozuvlar"
      },
      {
        type: "p",
        html: "Audit jadvali faqat qo'shish uchun ochiq bo'lishi kerak: ilova roli <code>INSERT</code> qiladi, <code>UPDATE</code> va <code>DELETE</code> huquqi berilmaydi. Yozuvga tranzaksiya raqami, foydalanuvchi nomi, eski va yangi qiymatlar (JSONB) qo'shiladi. Maxfiy maydonlar (parol, karta raqami) auditda ham maskalanishi shart."
      },
      {
        type: "code",
        title: "pgaudit-log.txt",
        code: `-- postgresql.conf
pgaudit.log = 'write, ddl, role'
pgaudit.log_parameter = on
pgaudit.log_relation = on`,
        output: `LOG:  AUDIT: SESSION,3,1,WRITE,UPDATE,TABLE,public.buyurtmalar,
      "UPDATE buyurtmalar SET holat = 'tolangan' WHERE id = 112",
      <none>
LOG:  AUDIT: SESSION,3,2,ROLE,GRANT,ROLE,public.dukon_app,
      "GRANT dukon_read TO dukon_app", <none>`,
        outputLabel: "Server jurnali"
      },
      {
        type: "table",
        head: ["Nima log qilinadi", "Manba", "Ehtiyot chorasi"],
        rows: [
          ["DDL o'zgarishlari", "pgaudit <code>ddl</code>", "Migratsiya bilan bog'lash"],
          ["Yozuv amallari", "pgaudit <code>write</code>", "Parametrlar maxfiy bo'lmasin"],
          ["Rol va huquqlar", "pgaudit <code>role</code>", "Har o'zgarishni kuzatish"],
          ["Biznes o'zgarishlari", "Audit trigger", "Eski va yangi qiymat"],
          ["Login urinishlari", "log_connections", "Muvaffaqiyatsiz urinishlar"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Auditni saqlash va himoya",
        html: "Audit jadvalini asosiy baza bilan bir xil diskda saqlash yetarli emas: baza buzilsa, audit ham yo'qoladi. Uni alohida serverga yuboring yoki <code>pgAudit</code> jurnalini markaziy log tizimiga uzating. Saqlash muddatini qonunchilik va biznes talablariga moslang. Audit yozuvlarini o'chirish huquqi faqat tor doiradagi rollarga berilsin."
      }
    ],
    quiz: [
      {
        q: "pgaudit.log = 'write, ddl, role' nimani jurnalga yozadi?",
        options: [
          "Faqat SELECT so'rovlarini",
          "Yozuv, DDL va rol o'zgarishlarini",
          "Faqat xatolarni",
          "Barcha fayl tizimi amallarini"
        ],
        answer: 1,
        explain: "pgaudit toifalari kerakli amallar guruhini tanlash imkonini beradi; write, ddl va role shularga kiradi."
      },
      {
        q: "Audit jadvaliga ilova roli qanday huquqlarga ega bo'lishi kerak?",
        options: [
          "Faqat INSERT",
          "INSERT, UPDATE, DELETE",
          "Faqat SELECT",
          "Superuser"
        ],
        answer: 0,
        explain: "Audit yozuvlari o'zgartirilmasligi uchun ilova faqat qo'shish huquqiga ega bo'lishi kerak."
      },
      {
        q: "Audit yozuvlarini asosiy baza bilan bir joyda saqlashning kamchiligi nima?",
        options: [
          "Baza bilan birga yo'qolishi mumkin",
          "Ular juda tez o'chadi",
          "Ular faqat o'qish uchun",
          "Ular indekslanmaydi"
        ],
        answer: 0,
        explain: "Baza buzilishi yoki o'chirilishi auditni ham yo'q qiladi; markaziy log saqlash ishonchliroq."
      }
    ]
  },
  {
    id: 74,
    title: "Shifrlash: TLS, pgcrypto va kalit boshqaruvi",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ma'lumotni himoyalash uch xil qatlamda ko'riladi: <b>transitda</b> (TLS), <b>diskda</b> (volume yoki fayl tizimi shifrlash) va <b>ilova darajasida</b> (maydonlarni tanlab shifrlash). PostgreSQL'da TLS <code>ssl = on</code> bilan yoqiladi, maydon darajasidagi shifrlash uchun <code>pgcrypto</code> kengaytmasi ishlatiladi. Parollar hech qachon qaytariladigan shifrlash bilan saqlanmaydi — ular uchun <code>scram-sha-256</code> yoki kuchli hash kerak."
      },
      {
        type: "table",
        head: ["Qatlam", "Vosita", "Nimani himoya qiladi"],
        rows: [
          ["Transit", "TLS sertifikati", "Tarmoqdagi tutish"],
          ["Disk", "LUKS, EBS encryption", "Diskni qo'lga kiritish"],
          ["Maydon", "<code>pgcrypto</code>", "Tanlangan maxfiy ustunlar"],
          ["Parol", "<code>scram-sha-256</code>", "Parolning o'g'irlanishi"],
          ["Kalit", "KMS, Vault", "Shifrlash kalitlari"]
        ]
      },
      {
        type: "code",
        title: "pgcrypto.sql",
        code: `CREATE EXTENSION IF NOT EXISTS pgcrypto;

WITH shifrlangan AS (
    SELECT pgp_sym_encrypt('998901234567', 'maxfiy-kalit') AS c
)
SELECT pgp_sym_decrypt(c, 'maxfiy-kalit') AS telefon
FROM shifrlangan;`,
        output: `CREATE EXTENSION
   telefon
-------------
 998901234567
(1 row)`,
        outputLabel: "Ochilgan qiymat"
      },
      {
        type: "p",
        html: "Bu misolda kalit so'rov ichida ochiq yozilgan — faqat sintaksisni ko'rsatish uchun. Haqiqiy tizimda kalit ilovaga KMS yoki Vault orqali keladi, kodda va repoda saqlanmaydi. Shifrlangan ustun bo'yicha qidiruv qiyin: har safar shifr ochish kerak bo'ladi. Qidiruv uchun <b>deterministik</b> shifrlash yoki alohida hash ustuni ishlatiladi, lekin ularning xavfsizlik chegaralarini hisobga oling."
      },
      {
        type: "code",
        title: "tls-sozlamalari.sql",
        code: `SELECT name, setting
FROM pg_settings
WHERE name IN (
    'ssl',
    'ssl_min_protocol_version',
    'ssl_ciphers'
)
ORDER BY name;`,
        output: `name                     | setting
-------------------------+--------------------------------------------
ssl                      | on
ssl_ciphers              | HIGH:!aNULL:!MD5
ssl_min_protocol_version | TLSv1.3`,
        outputLabel: "TLS holati"
      },
      {
        type: "note",
        variant: "warning",
        title: "Kalitni yo'qotish — ma'lumotni yo'qotish",
        html: "Maydon shifrlashda kalit zaxirasi ma'lumot zaxirasidan alohida saqlanadi. Kalit yo'qolsa, shifrlangan ustun abadiy o'qilmaydi. Kalitlarni muntazam almashtirish (rotation) rejasini tuzing va eski kalitlar bilan shifrlangan ma'lumotni bosqichma-bosqich qayta shifrlang. <code>pgcrypto</code> kalitni o'zi boshqarmaydi; bu mas'uliyat to'liq sizda."
      }
    ],
    quiz: [
      {
        q: "TLS qaysi qatlamda ma'lumotni himoya qiladi?",
        options: [
          "Diskda saqlashda",
          "Tarmoq orqali uzatishda",
          "Faqat zaxira nusxada",
          "Faqat indeksda"
        ],
        answer: 1,
        explain: "TLS klient va server orasidagi trafikni shifrlaydi, tutib olish va o'zgartirishni qiyinlashtiradi."
      },
      {
        q: "Parollarni qaytariladigan shifrlash bilan saqlash nega noto'g'ri?",
        options: [
          "Kalit qo'lga tushsa, barcha parollar ochiladi",
          "U juda sekin",
          "U PostgreSQL'da ishlamaydi",
          "U indeksni buzadi"
        ],
        answer: 0,
        explain: "Parolni tekshirish uchun qaytarish kerak emas; bir tomonlama kuchli hash va tuz ishlatiladi."
      },
      {
        q: "Maydon shifrlashda kalit yo'qolsa nima bo'ladi?",
        options: [
          "Ma'lumot avtomatik ochiladi",
          "Shifrlangan qiymatlar o'qilmay qoladi",
          "Baza sekinlashadi",
          "Faqat indeks o'chadi"
        ],
        answer: 1,
        explain: "Shifrni ochish uchun kalit zarur; kalit zaxirasi bo'lmasa, ma'lumot yo'qolgan hisoblanadi."
      }
    ]
  }
];
