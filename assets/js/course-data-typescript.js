/* TypeScript course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.typescript = {
    id: "typescript",
    title: "TypeScript",
    logoClass: "course-logo--ts",
    logoText: "TS",
    level: "Boshlovchi",
    hours: "~20 soat",
    testCount: 147,
    lang: "ts",
    interactive: "none",
    heroTitle: "TypeScript: JavaScript'ga ishonchli tiplar",
    heroDesc:
      "TypeScript — JavaScript ustiga statik tiplar qo'shadigan til. Kurs 49 dars, 147 test va 12-savollik yakuniy imtihondan iborat: tsc va strict rejimdan tortib generiklar, dekoratorlar, Express, React, testlash va deploygacha amaliy misollar bilan o'rganasiz.",
    metaDescription:
      "TypeScript kursi: 49 dars, 147 test, TypeScript 5 va strict rejim amaliyoti, Express, React, Vitest, build hamda 12-savollik yakuniy imtihon. O'zbek tilida noldan o'rganing.",
    modules: [
      { title: "Asoslar va tiplar", lessons: [1, 2, 3] },
      { title: "Obyektlar, union va massivlar", lessons: [4, 5, 6] },
      { title: "Klasslar va enumlar", lessons: [7, 8] },
      { title: "Utility tiplar va modullar asosi", lessons: [9, 10, 11] },
      { title: "Amaliy poydevor", lessons: [12, 13, 14, 15] },
      { title: "Tip tizimi chuqur", lessons: [16, 17, 18, 19, 20, 21, 22] },
      { title: "Xavfsiz kod va klass dizayni", lessons: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32] },
      { title: "Dekoratorlar va modul tizimi", lessons: [33, 34, 35, 36, 37] },
      { title: "Async va backend", lessons: [38, 39, 40, 41] },
      { title: "React, testlash va build", lessons: [42, 43, 44, 45, 46] },
      { title: "Amaliy loyihalar", lessons: [47, 48, 49] },
      { title: "Yakuniy imtihon", lessons: [50] },
    ],
    lessons: [
      {
        id: 1,
        title: "TypeScript nima va tsc bilan tanishuv",
        minutes: 12,
        blocks: [
          {
            type: "p",
            html: "TypeScript — JavaScript ustiga <b>statik tiplar</b> qo'shadigan til. Brauzer va Node.js TypeScript'ni to'g'ridan-to'g'ri tushunmaydi: avval <code>tsc</code> kompilyatori uni oddiy JavaScript'ga aylantiradi, keyin natija ishga tushiriladi. Kurs namunalari TypeScript 5.x va qat'iy rejimga mos yozilgan.",
          },
          {
            type: "code",
            title: "salom.ts",
            code: "const ism: string = \"Aziza\";\nconst yosh: number = 16;\n\nconsole.log(\"Salom, \" + ism + \"!\");\nconsole.log(\"Yosh:\", yosh);",
            output: "Salom, Aziza!\nYosh: 16",
          },
          {
            type: "p",
            html: "Loyihada ishni <code>npm init -y</code> bilan boshlang, so'ng <code>npm install --save-dev typescript</code> o'rnating. <code>npx tsc --init</code> <code>tsconfig.json</code> yaratadi. Kodni <code>npx tsc</code> bilan kompilyatsiya qilib, chiqqan <code>dist/salom.js</code> faylini <code>node dist/salom.js</code> orqali ishga tushirasiz.",
          },
          {
            type: "table",
            head: ["Savol", "JavaScript", "TypeScript"],
            rows: [
              ["Qanday bajariladi?", "Brauzer yoki Node to'g'ridan-to'g'ri", "Avval tsc, keyin oddiy JS"],
              ["Xato qachon bilinadi?", "Ko'pincha ish vaqtida", "Kompilyatsiya vaqtida"],
              ["Fayl kengaytmasi", "<code>.js</code>", "<code>.ts</code>"],
              ["Tip yozish majburiymi?", "Yo'q", "Inferens ishlaydi, lekin tekshiriladi"],
            ],
          },
          {
            type: "code",
            title: "hisob.ts",
            code: "function kopaytir(a: number, b: number): number {\n  return a * b;\n}\n\nconsole.log(kopaytir(6, 7));\nconsole.log(typeof kopaytir);",
            output: "42\nfunction",
          },
          {
            type: "note",
            variant: "info",
            title: "Tiplar o'chib ketadi",
            html: "Kompilyatsiyadan keyin barcha tip belgilari yo'qoladi — brauzerda oddiy JavaScript qoladi. Shuning uchun TypeScript xatoni <b>kod yozayotganda</b> ushlaydi, ishlash tezligini esa kamaytirmaydi.",
          },
        ],
        quiz: [
          {
            q: "Brauzer .ts faylni qanday bajaradi?",
            options: ["To'g'ridan-to'g'ri o'qiydi", "Faqat serverda ishlaydi", "HTML ichiga avtomatik ko'chiradi", "Avval tsc bilan .js ga aylantiradi"],
            answer: 3,
            explain: "Brauzer TypeScript'ni tushunmaydi. tsc uni JavaScript'ga aylantiradi, keyin brauzer natijani bajaradi.",
          },
          {
            q: "TypeScript kompilyatorini ishga tushirish uchun qaysi buyruq ishlatiladi?",
            options: ["node tsc", "npx tsc", "npm typescript", "ts run"],
            answer: 1,
            explain: "npx tsc loyihadagi TypeScript kompilyatorini ishga tushiradi.",
          },
          {
            q: "Qaysi yozuv type annotation'ni to'g'ri ko'rsatadi?",
            options: ["const yosh: number = 16", "const yosh = number 16", "const yosh number = 16", "number yosh = 16"],
            answer: 0,
            explain: "Annotatsiya o'zgaruvchi nomidan keyin ikki nuqta va tip bilan yoziladi: yosh: number.",
          },
        ],
      },
      {
        id: 2,
        title: "Tiplar: annotatsiya va inferens",
        minutes: 14,
        blocks: [
          {
            type: "p",
            html: "Tipni qo'lda yozish <b>annotatsiya</b>, kompilyatorning qiymatdan o'zi aniqlashi esa <b>inferens</b> deyiladi. Ko'p hollarda <code>const ism = \"Aziza\"</code> yetarli: TypeScript bu qiymat <code>string</code> ekanini o'zi biladi.",
          },
          {
            type: "code",
            title: "turlar.ts",
            code: "const ism: string = \"Bek\";\nlet yosh: number = 18;\nlet faol: boolean = true;\nconst ball: number = 92.5;\n\nconsole.log(typeof ism, typeof yosh, typeof faol);\nconsole.log(ism + \" — \" + ball);",
            output: "string number boolean\nBek — 92.5",
          },
          {
            type: "table",
            head: ["Tip", "Misol", "Nima saqlaydi"],
            rows: [
              ["<code>string</code>", "<code>\"Salom\"</code>", "Matn"],
              ["<code>number</code>", "<code>42</code>, <code>3.14</code>", "Butun va kasr sonlar"],
              ["<code>boolean</code>", "<code>true</code>, <code>false</code>", "Mantiqiy qiymat"],
              ["<code>null</code> / <code>undefined</code>", "<code>null</code>", "Yo'q yoki berilmagan qiymat"],
              ["<code>unknown</code>", "<code>unknown</code>", "Noma'lum, avval tekshiriladi"],
            ],
          },
          {
            type: "code",
            title: "inferens.ts",
            code: "let shahar = \"Toshkent\";\nconst davlat = \"O'zbekiston\";\n\nshahar = \"Samarqand\";\nconsole.log(shahar.toUpperCase());\nconsole.log(davlat.length);",
            output: "SAMARQAND\n11",
          },
          {
            type: "note",
            variant: "warning",
            title: "any emas, unknown",
            html: "<code>any</code> tip tekshiruvini butunlay o'chirib qo'yadi va xatoni yashirishi mumkin. Noma'lum qiymat uchun <code>unknown</code> ishlating: undan foydalanishdan oldin <code>typeof</code> yoki boshqa tekshiruv bilan toraytirish shart. <code>strict</code> rejimida esa yashirin <code>any</code> taqiqlanadi.",
          },
        ],
        quiz: [
          {
            q: "let ball = 92; yozuvida ball qanday tip oladi?",
            options: ["any", "string", "number", "unknown"],
            answer: 2,
            explain: "Inferens qiymatga qarab tipni aniqlaydi: 92 son bo'lgani uchun ball number bo'ladi.",
          },
          {
            q: "const faol = true; da faol qanday tip oladi?",
            options: ["string", "number", "boolean", "any"],
            answer: 2,
            explain: "true va false boolean tipiga kiradi; TypeScript buni o'zi aniqlaydi.",
          },
          {
            q: "Qaysi tip xavfsizroq va ishlatishdan oldin tekshirishni talab qiladi?",
            options: ["unknown", "any", "never", "object"],
            answer: 0,
            explain: "unknown qiymat bilan ishlashdan oldin toraytirish kerak. any esa tekshiruvni o'chirib yuboradi.",
          },
        ],
      },
      {
        id: 3,
        title: "Funksiyalar va parametrlar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Funksiyada har bir parametr va qaytadigan qiymat tipi ko'rsatiladi. Bu funksiyani noto'g'ri chaqirishdan himoya qiladi: matn o'rniga son yuborilsa, xato darhol ko'rinadi.",
          },
          {
            type: "code",
            title: "salomlash.ts",
            code: "function salomlash(ism: string, familiya?: string): string {\n  if (familiya) {\n    return \"Salom, \" + ism + \" \" + familiya + \"!\";\n  }\n  return \"Salom, \" + ism + \"!\";\n}\n\nconsole.log(salomlash(\"Aziza\"));\nconsole.log(salomlash(\"Bek\", \"Karimov\"));",
            output: "Salom, Aziza!\nSalom, Bek Karimov!",
          },
          {
            type: "p",
            html: "<b>Ixtiyoriy</b> parametr <code>?</code> bilan belgilanadi va oxirida turadi. <b>Standart qiymat</b> <code>= 5</code> ko'rinishida beriladi. <b>Qolgan parametrlar</b> <code>...sonlar</code> bilan yig'iladi va massiv sifatida keladi.",
          },
          {
            type: "code",
            title: "daraja.ts",
            code: "function daraja(ball: number, bonus: number = 5): number {\n  return ball + bonus;\n}\n\nfunction yigindi(...sonlar: number[]): number {\n  return sonlar.reduce((jami, son) => jami + son, 0);\n}\n\nconsole.log(daraja(80));\nconsole.log(daraja(80, 10));\nconsole.log(yigindi(1, 2, 3, 4));",
            output: "85\n90\n10",
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi"],
            rows: [
              ["<code>ism: string</code>", "Majburiy parametr"],
              ["<code>familiya?: string</code>", "Ixtiyoriy, bo'lmasligi mumkin"],
              ["<code>bonus = 5</code>", "Standart qiymat, tip inferens bilan aniqlanadi"],
              ["<code>...sonlar: number[]</code>", "Qolgan barcha sonlarni massivga yig'adi"],
              ["<code>): number</code>", "Funksiya son qaytaradi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Qaytish tipini yozing",
            html: "Kichik funksiyada tipni inferens qoldirish mumkin. Jamoat funksiyalarida <code>: number</code> yoki <code>: string</code> ni aniq yozish xatoni erta ushlaydi. Hech narsa qaytarmaydigan funksiya <code>void</code>, har doim xato tashlaydigan funksiya <code>never</code> tipida bo'ladi.",
          },
        ],
        quiz: [
          {
            q: "Ixtiyoriy parametr qaysi belgi bilan yoziladi?",
            options: ["*", "!", "&", "?"],
            answer: 3,
            explain: "Parametr nomidan keyin ? qo'yilsa, u ixtiyoriy bo'ladi: familiya?: string.",
          },
          {
            q: "function yigindi(...sonlar: number[]) da sonlar qanday ko'rinishda keladi?",
            options: ["Bitta son", "number[] massivi", "string", "undefined"],
            answer: 1,
            explain: "Rest parametr barcha argumentlarni bitta massivga yig'adi.",
          },
          {
            q: "Qiymat qaytarmaydigan funksiyaning qaytish tipi odatda qanday yoziladi?",
            options: ["null", "void", "never", "empty"],
            answer: 1,
            explain: "void funksiya foydali qiymat qaytarmasligini bildiradi. never esa funksiya hech qachon tugamasligini (masalan, doim xato tashlashini) bildiradi.",
          },
        ],
      },
      {
        id: 4,
        title: "Obyektlar, type alias va interfeyslar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Obyekt tipi uning xossalari va ularning tiplarini belgilaydi. <b>Type alias</b> (<code>type</code>) yangi nom yaratadi, <b>interface</b> esa obyekt shaklini tavsiflaydi. Ikkalasi ham katta kodda takrorlanishni kamaytiradi.",
          },
          {
            type: "code",
            title: "talaba.ts",
            code: "type Talaba = {\n  ism: string;\n  yosh: number;\n  faol?: boolean;\n};\n\nconst talaba: Talaba = { ism: \"Aziza\", yosh: 16 };\n\nfunction tanishtir(t: Talaba): string {\n  return t.ism + \", \" + t.yosh + \" yosh\" + (t.faol ? \" (faol)\" : \"\");\n}\n\nconsole.log(tanishtir(talaba));",
            output: "Aziza, 16 yosh",
          },
          {
            type: "p",
            html: "Interface'ni boshqa interface kengaytirishi mumkin: <code>interface Talaba extends Inson { ... }</code>. Type alias esa union, tuple yoki funksiya tipi kabi murakkabroq shakllar uchun ham ishlatiladi. Ikkalasini bir loyihada aralashtirish mumkin.",
          },
          {
            type: "code",
            title: "kurs.ts",
            code: "interface Kurs {\n  nom: string;\n  soat: number;\n}\n\nconst kurs: Kurs = { nom: \"TypeScript\", soat: 5 };\n\nfunction kursMatni(k: Kurs): string {\n  return k.nom + \" — \" + k.soat + \" soat\";\n}\n\nconsole.log(kursMatni(kurs));",
            output: "TypeScript — 5 soat",
          },
          {
            type: "table",
            head: ["Xususiyat", "type alias", "interface"],
            rows: [
              ["Obyekt shakli", "Ha", "Ha"],
              ["Kengaytirish", "<code>A &amp; B</code>", "<code>extends</code>"],
              ["Union / tuple", "Ha", "Yo'q"],
              ["Bir nom bilan qo'shilish", "Yo'q (xato)", "Ha (declaration merging)"],
              ["Odatda ishlatiladi", "Murakkab tiplar", "Obyekt shartnomalari"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "readonly va ixtiyoriy xossalar",
            html: "<code>faol?: boolean</code> xossani ixtiyoriy qiladi — obyektda umuman bo'lmasligi mumkin. <code>readonly id: number</code> esa yaratilgandan keyin o'zgartirishni taqiqlaydi. Bu sozlamalar, konfiguratsiya va identifikatorlar uchun juda foydali.",
          },
        ],
        quiz: [
          {
            q: "Type alias qaysi kalit so'z bilan e'lon qilinadi?",
            options: ["alias", "interface", "typedef", "type"],
            answer: 3,
            explain: "type kalit so'zi yangi tip nomini yaratadi: type Talaba = { ... }.",
          },
          {
            q: "Interface boshqa interface'ni qanday kengaytiradi?",
            options: ["interface B : A", "interface B & A", "interface B extends A", "interface B = A"],
            answer: 2,
            explain: "extends kalit so'zi orqali interface meros oladi.",
          },
          {
            q: "interface Talaba { faol?: boolean } da faol nimani anglatadi?",
            options: ["Xossa bo'lmasligi ham mumkin", "Har doim true", "Faqat o'qish uchun", "Tipi boolean emas"],
            answer: 0,
            explain: "? belgisi xossani ixtiyoriy qiladi: obyektda u bo'lmasa ham xato bermaydi.",
          },
        ],
      },
      {
        id: 5,
        title: "Unionlar, literal tiplar va narrowing",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<b>Union</b> bir nechta tipdan birini bildiradi: <code>string | number</code>. <b>Literal tip</b> esa aniq qiymatlarni cheklaydi: <code>\"yangi\" | \"bajarilgan\"</code>. Bu holatlarni ifodalashning eng ishonchli usuli.",
          },
          {
            type: "code",
            title: "holat.ts",
            code: "type Holat = \"yangi\" | \"bajarilgan\" | \"bekor\";\n\nfunction izoh(holat: Holat): string {\n  switch (holat) {\n    case \"yangi\":\n      return \"Hali boshlanmagan\";\n    case \"bajarilgan\":\n      return \"Tayyor\";\n    case \"bekor\":\n      return \"Bekor qilingan\";\n    default:\n      return \"Noma'lum\";\n  }\n}\n\nconsole.log(izoh(\"yangi\"));\nconsole.log(izoh(\"bajarilgan\"));",
            output: "Hali boshlanmagan\nTayyor",
          },
          {
            type: "p",
            html: "Union tipni toraytirish <b>narrowing</b> deyiladi. <code>typeof</code> primitivlarni, <code>in</code> obyekt xossalarini, <code>instanceof</code> klasslarni ajratadi. Oddiy tekshiruvdan keyin TypeScript shu tarmoqda aniq tipni biladi. Tekshiruvni qayta ishlatish uchun <b>type guard</b> funksiya yoziladi.",
          },
          {
            type: "code",
            title: "narrowing.ts",
            code: "function format(qiymat: string | number): string {\n  if (typeof qiymat === \"number\") {\n    return qiymat.toFixed(2);\n  }\n  return qiymat.trim().toUpperCase();\n}\n\ntype Kitob = { nom: string; muallif: string };\n\nfunction kitobmi(qiymat: unknown): qiymat is Kitob {\n  return (\n    typeof qiymat === \"object\" &&\n    qiymat !== null &&\n    \"nom\" in qiymat &&\n    \"muallif\" in qiymat\n  );\n}\n\nconst malumot: unknown = { nom: \"Dune\", muallif: \"Frank Herbert\" };\n\nconsole.log(format(3.14159));\nconsole.log(format(\"  salom  \"));\nif (kitobmi(malumot)) {\n  console.log(malumot.nom);\n}",
            output: "3.14\nSALOM\nDune",
          },
          {
            type: "table",
            head: ["Usul", "Misol", "Nimani ajratadi"],
            rows: [
              ["<code>typeof</code>", "<code>typeof x === \"string\"</code>", "Primitiv tiplarni"],
              ["<code>in</code>", "<code>\"nom\" in x</code>", "Obyekt xossasini"],
              ["<code>instanceof</code>", "<code>x instanceof Date</code>", "Klass nusxasini"],
              ["Custom guard", "<code>x is Kitob</code>", "O'z shartingizni"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Discriminated union",
            html: "Har bir variantda umumiy <code>tur</code> xossasi bo'lsa, <code>switch (x.tur)</code> barcha holatlarni tekshiradi. Yangi variant qo'shsangiz, TypeScript tugallanmagan joyni ko'rsatadi. Bu xatolarni kompilyatsiya vaqtida ushlashning kuchli usuli.",
          },
        ],
        quiz: [
          {
            q: "type Holat = \"yangi\" | \"bajarilgan\"; qanday tip hisoblanadi?",
            options: ["Tuple", "Interface", "Generic", "Literal union"],
            answer: 3,
            explain: "Aniq matn qiymatlaridan tuzilgan union literal union deyiladi.",
          },
          {
            q: "typeof qiymat === \"number\" tekshiruvidan keyin TypeScript nimani biladi?",
            options: ["qiymat string", "qiymat number", "qiymat any", "qiymat null"],
            answer: 1,
            explain: "typeof tekshiruvi shu tarmoqda qiymatni number tipiga toraytiradi.",
          },
          {
            q: "Custom type guard qaytish tipi qanday yoziladi?",
            options: [": qiymat is Kitob", ": boolean", ": unknown", ": void"],
            answer: 0,
            explain: "x is Kitob ko'rinishidagi predikat TypeScript'ga tekshiruv natijasini aytadi.",
          },
        ],
      },
      {
        id: 6,
        title: "Massivlar, tuple'lar va generiklar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Massiv tipi elementlar tipini bildiradi: <code>string[]</code> yoki <code>Array&lt;number&gt;</code>. Massivga boshqa tipdagi qiymat qo'shishga urinish kompilyatsiya xatosiga olib keladi.",
          },
          {
            type: "code",
            title: "massiv.ts",
            code: "const ismlar: string[] = [\"Ali\", \"Aziza\", \"Bek\"];\nconst baholar: number[] = [80, 92, 75];\n\nconst bonusli = baholar.map((ball) => ball + 5);\nconsole.log(ismlar.length);\nconsole.log(bonusli);\nconsole.log(ismlar.join(\", \"));",
            output: "3\n[ 85, 97, 80 ]\nAli, Aziza, Bek",
          },
          {
            type: "p",
            html: "<b>Tuple</b> — uzunligi va tartibi qat'iy belgilangan massiv: <code>[string, number]</code>. <b>Generik</b> esa tipni parametr sifatida qabul qiladi. <code>function birinchi&lt;T&gt;(royxat: T[]): T | undefined</code> har xil massivlar bilan ishlaydi va tipni saqlab qoladi.",
          },
          {
            type: "code",
            title: "tuple-generik.ts",
            code: "const juftlik: [string, number] = [\"Aziza\", 92];\n\nfunction minMax(sonlar: number[]): [number, number] {\n  const min = Math.min(...sonlar);\n  const max = Math.max(...sonlar);\n  return [min, max];\n}\n\nfunction birinchi<T>(royxat: T[]): T | undefined {\n  return royxat[0];\n}\n\nconst [kichik, katta] = minMax([4, 9, 2, 7]);\nconsole.log(juftlik[0], juftlik[1]);\nconsole.log(kichik, katta);\nconsole.log(birinchi([\"olma\", \"nok\"]));\nconsole.log(birinchi([10, 20, 30]));",
            output: "Aziza 92\n2 9\nolma\n10",
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi", "Misol"],
            rows: [
              ["<code>string[]</code>", "Matnlar massivi", "<code>[\"Ali\", \"Bek\"]</code>"],
              ["<code>[string, number]</code>", "Ikki elementli tuple", "<code>[\"Aziza\", 92]</code>"],
              ["<code>T[]</code>", "T tipidagi massiv", "<code>number[]</code>"],
              ["<code>&lt;T&gt;</code>", "Generik parametr", "<code>function id&lt;T&gt;(x: T): T</code>"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Massivni o'zgartirmaslik",
            html: "<code>readonly string[]</code> massivni o'zgartirishni taqiqlaydi. <code>noUncheckedIndexedAccess</code> yoqilganda <code>ismlar[0]</code> natijasi <code>string | undefined</code> bo'ladi, chunki indeks mavjudligiga kafolat yo'q. <code>for...of</code> yoki <code>map</code> ko'pincha xavfsizroq.",
          },
        ],
        quiz: [
          {
            q: "[string, number] tipidagi tuple nimani cheklaydi?",
            options: ["Faqat qiymatlarni", "Faqat uzunlikni", "Elementlar soni va tartibini", "Hech narsani"],
            answer: 2,
            explain: "Tuple birinchi element string, ikkinchisi number bo'lishini va uzunligi 2 ekanini talab qiladi.",
          },
          {
            q: "string[] tipi nimani bildiradi?",
            options: ["Bitta string", "Sonlar massivi", "Stringlar massivi", "String va son tuple'i"],
            answer: 2,
            explain: "string[] — har bir elementi string bo'lgan massiv.",
          },
          {
            q: "Generik funksiya qanday e'lon qilinadi?",
            options: ["function birinchi<T>(royxat: T[]): T", "function birinchi(T royxat: T[])", "function birinchi[royxat: T[]]", "generic function birinchi(T)"],
            answer: 0,
            explain: "Tip parametri funksiya nomidan keyin <T> ko'rinishida yoziladi.",
          },
        ],
      },
      {
        id: 7,
        title: "Klasslar, modifikatorlar va implements",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Klass — ma'lumot va uni boshqaradigan metodlarni bir joyda saqlaydi. TypeScript'da klass maydonlari, konstruktor parametrlari va metodlar tip bilan yoziladi. <b>Access modifier</b> klass ichidagi ma'lumotni tashqaridan yashirishga yordam beradi.",
          },
          {
            type: "code",
            title: "hisob.ts",
            code: "class Hisob {\n  private balans: number;\n\n  constructor(boshlangich: number) {\n    this.balans = boshlangich;\n  }\n\n  public oshir(qiymat: number): void {\n    this.balans += qiymat;\n  }\n\n  public korish(): number {\n    return this.balans;\n  }\n}\n\nconst hisob = new Hisob(100);\nhisob.oshir(50);\nconsole.log(hisob.korish());",
            output: "150",
          },
          {
            type: "p",
            html: "<b>implements</b> klass qaysi interface shartnomasini bajarishini bildiradi. Klass interface'dagi barcha xossa va metodlarni taqdim etishi shart, aks holda kompilyator xato beradi. Bu turli klasslarni bir xil tipda ishlatish imkonini beradi.",
          },
          {
            type: "code",
            title: "shakl.ts",
            code: "interface Shakl {\n  nom: string;\n  yuza(): number;\n}\n\nclass Tortburchak implements Shakl {\n  constructor(\n    public nom: string,\n    private en: number,\n    private boy: number,\n  ) {}\n\n  yuza(): number {\n    return this.en * this.boy;\n  }\n}\n\nconst shakl: Shakl = new Tortburchak(\"Kvadrat\", 4, 4);\nconsole.log(shakl.nom, shakl.yuza());",
            output: "Kvadrat 16",
          },
          {
            type: "table",
            head: ["Modifikator", "Kim ko'radi?", "Qachon ishlatiladi"],
            rows: [
              ["<code>public</code>", "Hamma joyda (sukut bo'yicha)", "Ochiq API"],
              ["<code>private</code>", "Faqat shu klass ichida", "Ichki holat, balans"],
              ["<code>protected</code>", "Shu klass va meros oluvchilar", "Meros uchun umumiy qism"],
              ["<code>readonly</code>", "Hamma, lekin faqat o'qiydi", "Konstruktorda bir marta beriladi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "extends va implements",
            html: "<code>extends</code> ota klassning kodini meros oladi, <code>implements</code> esa faqat shakl shartnomasini tekshiradi. Interfeys bir nechta bo'lishi mumkin: <code>class A implements B, C</code>. Abstrakt klass umumiy kod beradi, lekin o'zi nusxa olmaydi.",
          },
        ],
        quiz: [
          {
            q: "private xossaga qayerdan murojaat qilish mumkin?",
            options: ["Loyihaning istalgan joyidan", "Faqat meros oluvchi klassdan", "Faqat konstruktorda", "Faqat klass ichidan"],
            answer: 3,
            explain: "private faqat o'sha klass ichida ko'rinadi; tashqaridan murojaat kompilyatsiya xatosi beradi.",
          },
          {
            q: "implements kalit so'zi nimani bildiradi?",
            options: ["Klass meros oladi", "Klass interface shartnomasini bajaradi", "Interfeys klassga aylanadi", "Metod yashiriladi"],
            answer: 1,
            explain: "implements klass interface'dagi barcha talablarni bajarishini bildiradi.",
          },
          {
            q: "constructor(public nom: string) yozuvi nimani yaratadi?",
            options: ["Faqat parametr", "Ochiq nom xossasi va parametr", "private metod", "Interface"],
            answer: 1,
            explain: "Konstruktor parametridagi public modifikatori avtomatik nom xossasini yaratadi va qiymatni beradi.",
          },
        ],
      },
      {
        id: 8,
        title: "Enumlar, readonly va ixtiyoriy xossalar",
        minutes: 14,
        blocks: [
          {
            type: "p",
            html: "<b>Enum</b> nomlangan qiymatlar to'plamidir. String enum holatlarni o'qishli qiladi va noto'g'ri qiymat yozishdan saqlaydi. Kichik, yopiq ro'yxatlar uchun literal union ham yaxshi alternativ.",
          },
          {
            type: "code",
            title: "buyruq.ts",
            code: "enum Buyruq {\n  Yangi = \"yangi\",\n  Bajarilgan = \"bajarilgan\",\n  Bekor = \"bekor\",\n}\n\nfunction izoh(buyruq: Buyruq): string {\n  switch (buyruq) {\n    case Buyruq.Bajarilgan:\n      return \"Tayyor\";\n    case Buyruq.Yangi:\n      return \"Qabul qilindi\";\n    case Buyruq.Bekor:\n      return \"Bekor qilindi\";\n    default:\n      return \"Noma'lum\";\n  }\n}\n\nconsole.log(izoh(Buyruq.Bajarilgan));",
            output: "Tayyor",
          },
          {
            type: "p",
            html: "<code>readonly</code> xossa yaratilgandan keyin o'zgartirilmaydi. <code>?</code> esa xossani ixtiyoriy qiladi. Ixtiyoriy xossani o'qiganda natija <code>undefined</code> bo'lishi mumkin, shuning uchun <code>??</code> bilan zaxira qiymat berish odatiy hol.",
          },
          {
            type: "code",
            title: "sozlama.ts",
            code: "interface Sozlama {\n  readonly til: string;\n  mavzu?: string;\n}\n\nconst sozlama: Sozlama = { til: \"uz\" };\nconsole.log(sozlama.til);\nconsole.log(sozlama.mavzu ?? \"yorug'\");\n\nconst tillar: readonly string[] = [\"uz\", \"en\"];\nconsole.log(tillar.join(\" / \"));",
            output: "uz\nyorug'\nuz / en",
          },
          {
            type: "table",
            head: ["Yozuv", "Afzalligi", "Kamchiligi"],
            rows: [
              ["String enum", "O'qishli, nom maydoni bor", "Kompilyatsiyada qo'shimcha kod"],
              ["Literal union", "Yengil, JS'da kod qoldirmaydi", "Nom maydoni yo'q"],
              ["<code>readonly</code>", "O'zgartirishni taqiqlaydi", "Chuqur obyektlarga ta'sir qilmaydi"],
              ["<code>?</code>", "Xossa bo'lmasligini bildiradi", "Har o'qishda tekshirish kerak"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Qachon enum, qachon union?",
            html: "Agar qiymatlar faqat kod ichida ishlatilsa, <code>type Holat = \"yangi\" | \"bajarilgan\"</code> yengilroq. Enum nomlari bilan ishlash yoki tashqi API bilan moslashtirish kerak bo'lsa, string enum qulay. <code>const enum</code> ba'zi build vositalarida muammo berishi mumkin, shuning uchun oddiy enum xavfsizroq.",
          },
        ],
        quiz: [
          {
            q: "String enum qiymatlari ish vaqtida qanday ko'rinadi?",
            options: ["Faqat sonlar", "undefined", "Avtomatik indekslar", "Belgilangan matnlar"],
            answer: 3,
            explain: "Har bir a'zoga aniq matn berilgan, shuning uchun ish vaqtida o'sha matn qoladi.",
          },
          {
            q: "readonly xossaga konstruktordan tashqarida qiymat berilsa nima bo'ladi?",
            options: ["Qiymat o'zgaradi", "Faqat ogohlantirish", "Kompilyatsiya xatosi", "Xossa o'chadi"],
            answer: 2,
            explain: "readonly faqat e'lon yoki konstruktorda qiymat olishga ruxsat beradi; keyingi yozuv xato.",
          },
          {
            q: "mavzu?: string bo'lsa, sozlama.mavzu qanday tipga ega?",
            options: ["string | undefined", "string", "null", "any"],
            answer: 0,
            explain: "Ixtiyoriy xossa mavjud bo'lmasligi mumkin, shuning uchun tipiga undefined qo'shiladi.",
          },
        ],
      },
      {
        id: 9,
        title: "Utility tiplar va keyof",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "TypeScript o'rnatilgan <b>utility tiplar</b> bilan mavjud tipdan yangi tip yasaydi. <code>Partial</code> barcha xossalarni ixtiyoriy, <code>Pick</code> tanlanganlarini oladi, <code>Omit</code> esa keraksizlarini chiqarib tashlaydi.",
          },
          {
            type: "code",
            title: "yangi.ts",
            code: "interface Talaba {\n  id: number;\n  ism: string;\n  yosh: number;\n  faol: boolean;\n}\n\ntype YangiTalaba = Omit<Talaba, \"id\">;\ntype Qisqa = Pick<Talaba, \"ism\" | \"yosh\">;\ntype Yangilanish = Partial<Talaba>;\n\nconst yangi: YangiTalaba = { ism: \"Aziza\", yosh: 16, faol: true };\nconst qisqa: Qisqa = { ism: \"Bek\", yosh: 18 };\nconst ozgarish: Yangilanish = { faol: false };\n\nconsole.log(yangi.ism, qisqa.yosh, ozgarish.faol);",
            output: "Aziza 18 false",
          },
          {
            type: "p",
            html: "<code>Record&lt;K, V&gt;</code> kalitlari K, qiymatlari V bo'lgan obyekt tipini yaratadi. <code>keyof T</code> esa T ning barcha kalitlaridan union hosil qiladi. Ikkalasi birga xavfsiz lug'at va qidiruv funksiyalarini yozishga yordam beradi.",
          },
          {
            type: "code",
            title: "record-keyof.ts",
            code: "type Baholar = Record<string, number>;\nconst baholar: Baholar = { Aziza: 92, Bek: 78 };\n\nfunction qiymat<T, K extends keyof T>(obyekt: T, kalit: K): T[K] {\n  return obyekt[kalit];\n}\n\nconst talaba = { ism: \"Dilnoza\", yosh: 17 };\nconsole.log(baholar.Aziza);\nconsole.log(qiymat(talaba, \"yosh\"));",
            output: "92\n17",
          },
          {
            type: "table",
            head: ["Utility", "Vazifasi", "Misol"],
            rows: [
              ["<code>Partial&lt;T&gt;</code>", "Barcha xossalarni ixtiyoriy qiladi", "<code>Partial&lt;Talaba&gt;</code>"],
              ["<code>Pick&lt;T, K&gt;</code>", "Faqat tanlangan kalitlarni oladi", "<code>Pick&lt;Talaba, \"ism\"&gt;</code>"],
              ["<code>Omit&lt;T, K&gt;</code>", "Tanlangan kalitlarni chiqarib tashlaydi", "<code>Omit&lt;Talaba, \"id\"&gt;</code>"],
              ["<code>Record&lt;K, V&gt;</code>", "Kalit-qiymat obyekti yasaydi", "<code>Record&lt;string, number&gt;</code>"],
              ["<code>keyof T</code>", "Kalitlar union'ini beradi", "<code>\"ism\" | \"yosh\"</code>"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Yana foydali tiplar",
            html: "<code>Required&lt;T&gt;</code> ixtiyoriy xossalarni majburiy qiladi, <code>Readonly&lt;T&gt;</code> hammasini o'qish uchun qulflaydi, <code>ReturnType&lt;F&gt;</code> funksiya qaytish tipini oladi. Utility tiplar kod takrorlanishini kamaytiradi va API shartnomalarini bir joydan boshqaradi.",
          },
        ],
        quiz: [
          {
            q: "Omit<Talaba, \"id\"> nima qiladi?",
            options: ["id ni majburiy qiladi", "Faqat id ni qoldiradi", "id tipini stringga aylantiradi", "id kalitini olib tashlaydi"],
            answer: 3,
            explain: "Omit ko'rsatilgan kalitlarni chiqarib tashlab, qolganlaridan yangi tip yasaydi.",
          },
          {
            q: "Partial<T> barcha xossalarga qanday ta'sir qiladi?",
            options: ["Majburiy qiladi", "Ixtiyoriy qiladi", "Faqat o'qish qiladi", "O'chiradi"],
            answer: 1,
            explain: "Partial har bir xossaga ? qo'shadi, ya'ni hammasi ixtiyoriy bo'ladi.",
          },
          {
            q: "keyof Talaba natijasi nima?",
            options: ["Kalitlar union'i", "Talaba nusxasi", "Qiymatlar massivi", "number"],
            answer: 0,
            explain: "keyof obyekt tipidagi barcha kalitlardan union tip yasaydi.",
          },
        ],
      },
      {
        id: 10,
        title: "Modullar, Promise va fetch tiplari",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Katta loyiha fayllarga bo'linadi. <code>export</code> bilan belgilangan narsa boshqa faylda <code>import</code> qilinadi. Faqat tip kerak bo'lsa, <code>import type</code> ishlatiladi — u kompilyatsiyadan keyin o'chib ketadi.",
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi"],
            rows: [
              ["<code>export function f()</code>", "Nomlangan eksport"],
              ["<code>export default class A</code>", "Bitta asosiy eksport"],
              ["<code>import { f } from \"./modul\"</code>", "Nomlangan import"],
              ["<code>import type { T } from \"./tiplar\"</code>", "Faqat tip importi"],
              ["<code>Promise&lt;T&gt;</code>", "Keyin T qaytaradigan asinxron natija"],
            ],
          },
          {
            type: "code",
            title: "promise.ts",
            code: "function kechikish(ms: number): Promise<void> {\n  return new Promise((resolve) => {\n    setTimeout(resolve, ms);\n  });\n}\n\nasync function ishgaTushir(): Promise<void> {\n  console.log(\"Boshlandi\");\n  await kechikish(10);\n  console.log(\"Tayyor\");\n}\n\nishgaTushir();",
            output: "Boshlandi\nTayyor",
          },
          {
            type: "p",
            html: "<code>async</code> funksiya har doim <code>Promise</code> qaytaradi, <code>await</code> esa natijani kutadi. <code>fetch</code> <code>Promise&lt;Response&gt;</code> beradi; <code>javob.json()</code> esa tekshirilmagan ma'lumot qaytaradi. Shuning uchun javobni tekshirish yoki ehtiyotkorlik bilan tipga keltirish kerak.",
          },
          {
            type: "code",
            title: "fetch.ts",
            code: "interface Mahsulot {\n  id: number;\n  nom: string;\n}\n\nasync function mahsulotOl(id: number): Promise<Mahsulot> {\n  const javob = await fetch(\"https://api.example.com/mahsulot/\" + id);\n  if (!javob.ok) {\n    throw new Error(\"HTTP \" + javob.status);\n  }\n  return (await javob.json()) as Mahsulot;\n}\n\nconsole.log(\"mahsulotOl tayyor\");",
            output: "mahsulotOl tayyor",
          },
          {
            type: "note",
            variant: "warning",
            title: "as — tekshiruv emas",
            html: "<code>as Mahsulot</code> faqat kompilyatorga ishontirish, ish vaqtida ma'lumotni tekshirmaydi. Server boshqa shakl qaytarsa, xato keyinroq chiqadi. Muhim API javoblarini schema kutubxonasi yoki qo'lda type guard bilan tekshiring. Kurs misollarida tashqi tarmoq ishlatilmaydi.",
          },
        ],
        quiz: [
          {
            q: "Boshqa fayldagi funksiyani ishlatish uchun nima qilinadi?",
            options: ["Faqat nusxa ko'chiriladi", "HTML'ga qo'shiladi", "export qilinadi va import qilinadi", "global o'zgaruvchi qilinadi"],
            answer: 2,
            explain: "Modul eksport qilinadi, boshqa faylda import bilan chaqiriladi.",
          },
          {
            q: "async funksiya qanday qiymat qaytaradi?",
            options: ["Har doim string", "undefined", "Har doim Promise", "Faqat son"],
            answer: 2,
            explain: "async funksiyaning natijasi avtomatik Promise'ga o'raladi.",
          },
          {
            q: "fetch javobini as Mahsulot qilish nimani kafolatlaydi?",
            options: ["Faqat kompilyatorga tipni aytadi", "Ma'lumot shaklini tekshiradi", "Tarmoqni tezlashtiradi", "Xatoni ushlaydi"],
            answer: 0,
            explain: "as — type assertion, ish vaqtida tekshiruv o'tkazmaydi.",
          },
        ],
      },
      {
        id: 11,
        title: "tsconfig, strict rejim va vositalar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>tsconfig.json</code> kompilyatorning xatti-harakatini boshqaradi. <code>strict: true</code> eng muhim tekshiruvlarni yoqadi: <code>strictNullChecks</code>, <code>noImplicitAny</code> va boshqalar. Yangi loyihada strict'ni darhol yoqish tavsiya etiladi.",
          },
          {
            type: "code",
            title: "strict-null.ts",
            code: "function uzunlik(matn: string | null): number {\n  return matn === null ? 0 : matn.length;\n}\n\nconsole.log(uzunlik(\"TypeScript\"));\nconsole.log(uzunlik(null));",
            output: "10\n0",
          },
          {
            type: "table",
            head: ["Sozlama", "Vazifasi"],
            rows: [
              ["<code>strict</code>", "Barcha qat'iy tekshiruvlar to'plami"],
              ["<code>target</code>", "Qaysi JavaScript versiyasi chiqadi"],
              ["<code>module</code>", "Modul formati (NodeNext, ESNext)"],
              ["<code>outDir</code>", "Kompilyatsiya natijalari papkasi"],
              ["<code>noEmit</code>", "Faqat tekshirish, fayl yozmaslik"],
              ["<code>include</code>", "Loyihaga qaysi fayllar kiradi"],
            ],
          },
          {
            type: "code",
            title: "noimplicit.ts",
            code: "function ikkilant(qiymat: number): number {\n  return qiymat * 2;\n}\n\nconst natija: number = ikkilant(21);\nconsole.log(natija);",
            output: "42",
          },
          {
            type: "note",
            variant: "tip",
            title: "Kundalik ish jarayoni",
            html: "Tekshirish uchun <code>npx tsc --noEmit</code>, build uchun <code>npx tsc</code> ishlatiladi. <b>ESLint</b> xatolar va uslub muammolarini topadi, <b>Prettier</b> kodni bir xil formatlaydi. <code>npm install --save-dev eslint prettier</code> dan keyin <code>npx eslint .</code> va <code>npx prettier --write .</code> buyruqlari bilan tekshirib ko'ring. Muharrirda saqlashda formatlashni yoqing.",
          },
        ],
        quiz: [
          {
            q: "strict: true nimani yoqadi?",
            options: ["Faqat ranglarni", "Faqat build tezligini", "HTML validatsiyasini", "Qat'iy tip tekshiruvlari to'plamini"],
            answer: 3,
            explain: "strict bir nechta qat'iy tekshiruvni, jumladan strictNullChecks va noImplicitAny ni yoqadi.",
          },
          {
            q: "npx tsc --noEmit nima qiladi?",
            options: ["Fayllarni o'chiradi", "Tekshiradi, lekin JS yozmaydi", "Serverni ishga tushiradi", "Testlarni bajaradi"],
            answer: 1,
            explain: "noEmit rejimida faqat tip tekshiruvi bajariladi, chiqish fayllari yozilmaydi.",
          },
          {
            q: "Qaysi vosita kodni avtomatik formatlaydi?",
            options: ["ESLint", "Prettier", "tsc", "npm"],
            answer: 1,
            explain: "Prettier kodni bir xil uslubda formatlaydi; ESLint ko'proq xato va qoidalarni tekshiradi.",
          },
        ],
      },
      {
        id: 12,
        title: "Mini loyiha: tipli konsol vazifa menejeri",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi o'rganganlarimizni birlashtiramiz: interfeys, literal union, klass, private maydon va massiv metodlari bilan konsolda ishlaydigan vazifa menejerini yozamiz. Kod bitta <code>vazifa.ts</code> faylida bo'ladi.",
          },
          {
            type: "code",
            title: "vazifa.ts",
            code: "type Holat = \"yangi\" | \"bajarilgan\";\n\ninterface Vazifa {\n  id: number;\n  nom: string;\n  holat: Holat;\n}\n\nclass VazifaRoyxati {\n  private vazifalar: Vazifa[] = [];\n  private keyingiId = 1;\n\n  qosh(nom: string): Vazifa {\n    const vazifa: Vazifa = { id: this.keyingiId, nom, holat: \"yangi\" };\n    this.keyingiId += 1;\n    this.vazifalar.push(vazifa);\n    return vazifa;\n  }\n\n  bajar(id: number): boolean {\n    const vazifa = this.vazifalar.find((v) => v.id === id);\n    if (!vazifa) return false;\n    vazifa.holat = \"bajarilgan\";\n    return true;\n  }\n\n  korish(): void {\n    for (const vazifa of this.vazifalar) {\n      const belgi = vazifa.holat === \"bajarilgan\" ? \"[x]\" : \"[ ]\";\n      console.log(belgi + \" \" + vazifa.id + \". \" + vazifa.nom);\n    }\n  }\n\n  royxati(): Vazifa[] {\n    return [...this.vazifalar];\n  }\n\n  soni(): number {\n    return this.vazifalar.length;\n  }\n}\n\nconst royxat = new VazifaRoyxati();\nroyxat.qosh(\"TypeScript asoslarini takrorlash\");\nroyxat.qosh(\"Mini loyihani yig'ish\");\nroyxat.bajar(1);\nroyxat.korish();\nconsole.log(\"Jami:\", royxat.soni());",
            output: "[x] 1. TypeScript asoslarini takrorlash\n[ ] 2. Mini loyihani yig'ish\nJami: 2",
          },
          {
            type: "p",
            html: "Quyidagi qo'shimcha yuqoridagi klassdan foydalanadi va vazifalarni holat bo'yicha filtrlaydi. Natijada faqat filtr qatorlari ko'rsatilgan, chunki asosiy ro'yxat yuqorida allaqachon chop etilgan.",
          },
          {
            type: "code",
            title: "vazifa.ts (filtr qo'shimchasi)",
            code: "type Filtr = \"barchasi\" | \"yangi\" | \"bajarilgan\";\n\nfunction filtrla(vazifalar: Vazifa[], filtr: Filtr): Vazifa[] {\n  if (filtr === \"barchasi\") return vazifalar;\n  return vazifalar.filter((v) => v.holat === filtr);\n}\n\nconst yangilar = filtrla(royxat.royxati(), \"yangi\");\nconsole.log(\"Yangi vazifalar:\", yangilar.length);\nconsole.log(yangilar[0]?.nom ?? \"Yo'q\");",
            output: "Yangi vazifalar: 1\nMini loyihani yig'ish",
          },
          {
            type: "ul",
            items: [
              "Model: <code>Vazifa</code> interfeysi va <code>Holat</code> literal union'i.",
              "Inkapsulyatsiya: massiv <code>private</code>, tashqariga faqat nusxa qaytariladi.",
              "Amallar: <code>qosh</code>, <code>bajar</code>, <code>korish</code>, <code>filtrla</code>.",
              "Ishga tushirish: <code>npx tsc</code>, so'ng <code>node dist/vazifa.js</code>.",
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Loyihani kengaytiring",
            html: "Vazifani o'chirish, muhimlik darajasi, sana yoki faylga saqlashni qo'shib ko'ring. Har bir yangi xususiyatni avval tip bilan tavsiflab, keyin kod yozing — shunda TypeScript xatolarni erta ko'rsatadi. Keyingi qadam: yakuniy imtihon va sertifikat.",
          },
        ],
        quiz: [
          {
            q: "VazifaRoyxati klassidagi vazifalar massivi nega private?",
            options: ["Kodni qisqartirish uchun", "Massivni tezlashtirish uchun", "TypeScript talab qilgani uchun", "Tashqaridan nazoratsiz o'zgartirishni oldini olish uchun"],
            answer: 3,
            explain: "private massivni klass metodlari orqali boshqarishni ta'minlaydi va tashqi noto'g'ri o'zgarishlarni to'xtatadi.",
          },
          {
            q: "Holat tipi \"yangi\" | \"bajarilgan\" bo'lishi nimani beradi?",
            options: ["Istalgan matnni qabul qiladi", "Sonlarni qabul qilmaydi", "Faqat ruxsat etilgan holatlarni qabul qiladi", "Klassni tezlashtiradi"],
            answer: 2,
            explain: "Literal union faqat ko'rsatilgan qiymatlarga ruxsat beradi, xato yozuv kompilyatsiyada ushlanadi.",
          },
          {
            q: "filtrla funksiyasi qaytish tipi qanday?",
            options: ["Vazifa[]", "Vazifa", "boolean", "void"],
            answer: 0,
            explain: "Funksiya shartga mos vazifalar massivini qaytaradi, shuning uchun tip Vazifa[].",
          },
        ],
      },
      {
        id: 13,
        title: "type alias va interface: farqi va tanlov",
        minutes: 14,
        blocks: [
          {
            type: "p",
            html: "Obyekt shaklini ikki usulda ta'riflash mumkin: <code>interface</code> yoki <code>type</code>. Ikkalasi ham kompilyatsiya vaqtida tekshiriladi va JavaScript'da izsiz yo'qoladi. Farq imkoniyatlarda: <b>type alias</b> istalgan tipga nom beradi, <b>interface</b> esa asosan obyekt va funksiya shakllarini tavsiflaydi.",
          },
          {
            type: "code",
            title: "shakllar.ts",
            code: `interface Foydalanuvchi {
  id: number;
  ism: string;
}

interface Admin extends Foydalanuvchi {
  huquqlar: string[];
}

type ID = string | number;
type Nuqta = [number, number];

const admin: Admin = { id: 1, ism: "Aziza", huquqlar: ["elon"] };
const id: ID = 42;
const nuqta: Nuqta = [3, 4];

console.log(admin.ism, admin.huquqlar[0]);
console.log(id, nuqta.join(":"));`,
            output: "Aziza elon\n42 3:4",
          },
          {
            type: "p",
            html: "Yuqorida <code>type ID</code> union tipga, <code>type Nuqta</code> esa tuple'ga nom berdi. Bunday nomlarni interface bilan yozib bo'lmaydi. Interface'ning kuchli tomoni — <b>declaration merging</b>: bir xil nomdagi ikki e'lon avtomatik birlashadi. Kutubxona tiplarini kengaytirishda bu juda qo'l keladi.",
          },
          {
            type: "code",
            title: "birlashuv.ts",
            code: `interface Hisob {
  nom: string;
}

interface Hisob {
  qiymat: number;
}

const hisob: Hisob = { nom: "Xarajat", qiymat: 125000 };
console.log(hisob.nom + ": " + hisob.qiymat + " so'm");`,
            output: "Xarajat: 125000 so'm",
          },
          {
            type: "table",
            head: ["Imkoniyat", "type alias", "interface"],
            rows: [
              ["Union / tuple / primitiv", "Ha", "Yo'q"],
              ["Obyekt shakli", "Ha", "Ha"],
              ["Declaration merging", "Yo'q", "Ha"],
              ["extends bilan meros", "Intersection orqali", "To'g'ridan-to'g'ri"],
              ["Bir nomni qayta e'lon qilish", "Xato", "Birlashadi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Amaliy tanlov",
            html: "Jamoa qoidasi bo'lmasa, obyekt shakllari uchun <code>interface</code>, union, tuple va murakkab hisoblangan tiplar uchun <code>type</code> ishlating. Bitta loyihada izchillik muhim: bir xil vazifaga ikki xil yondashuv aralashmasin.",
          },
        ],
        quiz: [
          {
            q: "Union yoki tuple tipiga nom berish uchun qaysi konstruksiya mos?",
            options: ["interface", "class", "enum", "type alias"],
            answer: 3,
            explain: "type alias istalgan tipni, jumladan union va tuple'ni nomlash imkonini beradi.",
          },
          {
            q: "Bir xil nomdagi ikki interface e'lon qilinsa nima yuz beradi?",
            options: ["Kompilyatsiya xatosi", "E'lonlar avtomatik birlashadi", "Ikkinchisi e'tiborsiz qoladi", "Faqat birinchisi ishlaydi"],
            answer: 1,
            explain: "Interface'lar declaration merging orqali birlashadi; type alias'da bunday imkoniyat yo'q.",
          },
          {
            q: "Interface boshqa interface'ning xossalarini qaysi kalit so'z bilan oladi?",
            options: ["extends", "implements", "merges", "inherits"],
            answer: 0,
            explain: "interface Admin extends Foydalanuvchi yozuvi barcha xossalarni meros oladi.",
          },
        ],
      },
      {
        id: 14,
        title: "Union va intersection: birlashtirish va kesishma",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>A | B</code> — <b>union</b>: qiymat A yoki B bo'lishi mumkin. <code>A & B</code> — <b>intersection</b>: qiymat ikkala tipning barcha talablarini bajaradi. Union moslashuvchanlik beradi, intersection esa imkoniyatlarni birlashtiradi.",
          },
          {
            type: "code",
            title: "xodim.ts",
            code: `type Xodim = { ism: string; bolim: string };
type Dasturchi = { til: string; daraja: "junior" | "middle" };

type FullStack = Xodim & Dasturchi;

const xodim: Xodim = { ism: "Dilnoza", bolim: "Platforma" };
const dasturchi: FullStack = {
  ism: "Dilnoza",
  bolim: "Platforma",
  til: "TypeScript",
  daraja: "middle",
};

console.log(xodim.ism, dasturchi.til);
console.log(Object.keys(dasturchi).length);`,
            output: "Dilnoza TypeScript\n4",
          },
          {
            type: "p",
            html: "Intersection'da xossa turlari bir xil nom bilan uchrashsa, ular ham kesishadi. Masalan, <code>{ yosh: number } &amp; { yosh: string }</code> dan amalda foydalanib bo'lmaydigan <code>never</code> tipi chiqadi. Shuning uchun birlashtirilayotgan shakllarda nomlar to'qnashmasligi kerak.",
          },
          {
            type: "code",
            title: "javob.ts",
            code: `type Muvaffaqiyat = { holat: "ok"; malumot: string };
type Xatolik = { holat: "xato"; xabar: string };
type Javob = Muvaffaqiyat | Xatolik;

function chiqar(javob: Javob): void {
  if (javob.holat === "ok") {
    console.log("Ma'lumot:", javob.malumot);
  } else {
    console.log("Xato:", javob.xabar);
  }
}

chiqar({ holat: "ok", malumot: "Saqlandi" });
chiqar({ holat: "xato", xabar: "Ruxsat yo'q" });`,
            output: "Ma'lumot: Saqlandi\nXato: Ruxsat yo'q",
          },
          {
            type: "ul",
            items: [
              "Union'da faqat barcha tarmoqlarda mavjud xossalarga to'g'ridan-to'g'ri murojaat qilinadi.",
              "Intersection'da har bir tarmoqning xossalari mavjud bo'ladi.",
              "Obyektlar uchun <code>interface</code> + <code>extends</code> ham intersection vazifasini bajaradi.",
              "Union'ni ajratish uchun umumiy literal xossa — <b>discriminant</b> — eng ishonchli usul.",
            ],
          },
        ],
        quiz: [
          {
            q: "A & B tipidagi qiymat qanday talabni bajaradi?",
            options: ["Faqat A xossalarini", "Faqat B xossalarini", "A va B ning barcha xossalarini", "Ixtiyoriy bir xossasini"],
            answer: 2,
            explain: "Intersection ikkala tipning barcha talablarini bir vaqtda qo'llaydi.",
          },
          {
            q: "Union tipidagi qiymatda faqat bitta tarmoqqa xos xossaga murojaat qilsangiz nima bo'ladi?",
            options: ["Qiymat avtomatik o'zgaradi", "Xossa undefined bo'ladi", "Kompilyator xato beradi", "Union avtomatik intersection bo'ladi"],
            answer: 2,
            explain: "Avval narrowing qilish kerak; aks holda xossa barcha tarmoqlarda mavjud emas deb hisoblanadi.",
          },
          {
            q: "Union tarmoqlarini ishonchli ajratish uchun ishlatiladigan umumiy literal xossa qanday ataladi?",
            options: ["Discriminant", "Indeks", "Konstruktor", "Predikat"],
            answer: 0,
            explain: "discriminant (yoki tag) — masalan holat: \"ok\" | \"xato\" — switch yoki if orqali narrowing beradi.",
          },
        ],
      },
      {
        id: 15,
        title: "Narrowing: union'ni xavfsiz toraytirish",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<b>Narrowing</b> — tekshiruvdan keyin TypeScript union tipini aniqroq tarmoqqa toraytirishi. <code>typeof</code>, <code>instanceof</code>, <code>in</code>, taqqoslash va truthiness tekshiruvlari shu ishni bajaradi. Qoida oddiy: avval tekshiring, keyin tarmoqqa xos metodni chaqiring.",
          },
          {
            type: "code",
            title: "qiymat.ts",
            code: `function tavsifla(qiymat: string | number | null): string {
  if (qiymat === null) return "bo'sh";
  if (typeof qiymat === "number") return "son: " + qiymat.toFixed(1);
  return "matn: " + qiymat.toUpperCase();
}

console.log(tavsifla(12.345));
console.log(tavsifla("typescript"));
console.log(tavsifla(null));`,
            output: "son: 12.3\nmatn: TYPESCRIPT\nbo'sh",
          },
          {
            type: "p",
            html: "Obyektlar unionida <code>in</code> operatori xossa mavjudligini tekshiradi. <code>instanceof</code> esa klass nusxasini aniqlaydi. Diskriminatsiyalangan union'da esa <code>switch</code> eng o'qiladigan yechim: har bir <code>case</code> ichida tip avtomatik torayadi.",
          },
          {
            type: "code",
            title: "shakl.ts",
            code: `type Doira = { turi: "doira"; radius: number };
type Kvadrat = { turi: "kvadrat"; tomon: number };
type Shakl = Doira | Kvadrat;

function yuza(shakl: Shakl): number {
  switch (shakl.turi) {
    case "doira":
      return Number((Math.PI * shakl.radius ** 2).toFixed(2));
    case "kvadrat":
      return shakl.tomon ** 2;
    default: {
      const tugadi: never = shakl;
      return tugadi;
    }
  }
}

console.log(yuza({ turi: "doira", radius: 2 }));
console.log(yuza({ turi: "kvadrat", tomon: 5 }));`,
            output: "12.57\n25",
          },
          {
            type: "note",
            variant: "info",
            title: "never tekshiruvi",
            html: "Agar kelajakda union'ga yangi tarmoq qo'shilsa-yu, <code>switch</code> yangilanmasa, <code>const tugadi: never = shakl</code> satri kompilyatsiya xatosini beradi. Bu — to'liqlikni (exhaustiveness) tekshirishning arzon usuli.",
          },
          {
            type: "ul",
            items: [
              "<code>if (qiymat)</code> — <code>false</code>, <code>0</code>, <code>\"\"</code>, <code>null</code>, <code>undefined</code> kabi qiymatlarni chiqarib tashlaydi.",
              "<code>typeof</code> — primitiv turlarni ajratadi, lekin <code>null</code> uchun \"object\" qaytaradi.",
              "<code>in</code> — obyekt tipidagi union'ni xossa bo'yicha ajratadi.",
              "<code>instanceof</code> — klass meros zanjirini hisobga oladi.",
            ],
          },
        ],
        quiz: [
          {
            q: "typeof x === \"string\" tekshiruvidan keyin x qanday tipda qaraladi?",
            options: ["Barcha union tarmoqlarida", "Faqat number tarmog'ida", "any", "Faqat string tarmog'ida"],
            answer: 3,
            explain: "typeof tekshiruvi string tarmog'ini qoldirib, qolgan tarmoqlarni chiqarib tashlaydi.",
          },
          {
            q: "in operatori obyekt unionini nimaga qarab ajratadi?",
            options: ["Qiymat uzunligiga qarab", "Xossa mavjudligiga qarab", "Fayl nomiga qarab", "Faqat son qiymatiga qarab"],
            answer: 1,
            explain: "masalan, \"radius\" in shakl tekshiruvi doira tarmog'ini aniqlaydi.",
          },
          {
            q: "switch to'liqligini kompilyatorga tekshirtirish uchun default tarmoqda nima yoziladi?",
            options: ["return undefined", "const tugadi: never = shakl", "throw \"xato\"", "let tugadi: any = shakl"],
            answer: 1,
            explain: "Qolgan qiymat never bo'lishi kerak; yangi tarmoq qo'shilsa, bu satr xato beradi.",
          },
        ],
      },
      {
        id: 16,
        title: "Type guard va assertion funksiyalar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<b>Type guard</b> — qaytish tipi <code>qiymat is Tip</code> bo'lgan funksiya. U boolean qaytaradi va TypeScript'ga tekshiruv natijasini aytadi. <b>Assertion funksiya</b> esa <code>asserts qiymat is Tip</code> bilan yoziladi: muvaffaqiyatli tugasa tip torayadi, aks holda xato tashlaydi.",
          },
          {
            type: "code",
            title: "guard.ts",
            code: `function matnmi(qiymat: unknown): qiymat is string {
  return typeof qiymat === "string";
}

const aralash: unknown[] = ["olma", 42, "nok", true, "uzum"];
const mevalar = aralash.filter(matnmi);

console.log(mevalar.join(", "));
console.log(mevalar.length);`,
            output: "olma, nok, uzum\n3",
          },
          {
            type: "p",
            html: "Diqqat: guard ichida faqat tekshiruv bo'lishi shart emas, lekin u haqiqatan ham <code>true</code> qaytarganda tip kafolatini bersin. Noto'g'ri yozilgan guard kompilyatorni ishontirib, ish vaqtida xatoga olib kelishi mumkin.",
          },
          {
            type: "code",
            title: "assert.ts",
            code: `function ishonch(matn: unknown): asserts matn is string {
  if (typeof matn !== "string") {
    throw new Error("Matn kutilgan edi");
  }
}

function boshHarf(matn: unknown): string {
  ishonch(matn);
  return matn.charAt(0).toUpperCase();
}

console.log(boshHarf("noldan"));
try {
  boshHarf(7);
} catch (xato) {
  console.log(xato instanceof Error ? xato.message : "Noma'lum xato");
}`,
            output: "N\nMatn kutilgan edi",
          },
          {
            type: "table",
            head: ["Vosita", "Yozilishi", "Qachon ishlatiladi"],
            rows: [
              ["Type guard", "<code>function f(x: unknown): x is T</code>", "boolean natija kerak bo'lsa"],
              ["Assertion", "<code>function f(x: unknown): asserts x is T</code>", "tekshiruvdan keyin davom etilsa"],
              ["Cast", "<code>x as T</code>", "kafolat aniq, lekin tekshiruv yo'q"],
            ],
          },
        ],
        quiz: [
          {
            q: "Type guard funksiyasining qaytish tipi qanday yoziladi?",
            options: ["asserts qiymat is string", "string | boolean", "Promise<string>", "qiymat is string"],
            answer: 3,
            explain: "x is T predikati guard uchun ishlatiladi va boolean qaytaradi.",
          },
          {
            q: "Assertion funksiya muvaffaqiyatsiz tekshiruvda nima qilishi kerak?",
            options: ["false qaytarishi", "undefined qaytarishi", "Xato tashlashi", "Tipni any ga aylantirishi"],
            answer: 2,
            explain: "asserts funksiyasi davom etsa tip kafolatlanadi; shuning uchun shart bajarilmasa xato tashlanadi.",
          },
          {
            q: "unknown[] massivida filter(matnmi) natijasining tipi qanday bo'ladi?",
            options: ["string[]", "unknown[]", "boolean[]", "any[]"],
            answer: 0,
            explain: "Guard predikati filter natijasini string[] qilib toraytiradi.",
          },
        ],
      },
      {
        id: 17,
        title: "Generiklar asoslari: qayta ishlatiladigan tiplar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<b>Generik</b> — tipni parametrga aylantirish. <code>function birinchi&lt;T&gt;(massiv: T[])</code> da <code>T</code> chaqiruvdagi qiymatga qarab aniqlanadi. Shu bilan <code>any</code> dan voz kechib, bir kodni turli tiplar bilan xavfsiz ishlatasiz.",
          },
          {
            type: "code",
            title: "birinchi.ts",
            code: `function birinchiElement<T>(massiv: T[]): T | undefined {
  return massiv[0];
}

const son = birinchiElement([10, 20, 30]);
const shahar = birinchiElement(["Buxoro", "Xiva"]);
const yoq = birinchiElement<number>([]);

console.log(son, shahar, yoq);`,
            output: "10 Buxoro undefined",
          },
          {
            type: "p",
            html: "Generik faqat funksiyalarga emas, interfeys, type alias va klasslarga ham qo'llanadi. <code>Quti&lt;T&gt;</code> — \"ichida T saqlanadigan quti\". Tip argumenti aniq bo'lsa, xossa va metodlar ham aniq tip qaytaradi.",
          },
          {
            type: "code",
            title: "quti.ts",
            code: `interface Quti<T> {
  qiymat: T;
  ochish(): T;
}

class OddiyQuti<T> implements Quti<T> {
  constructor(public qiymat: T) {}

  ochish(): T {
    return this.qiymat;
  }
}

const quti = new OddiyQuti<{ nom: string }>({ nom: "Kitob" });
console.log(quti.ochish().nom);
console.log(new OddiyQuti(5).ochish() + 1);`,
            output: "Kitob\n6",
          },
          {
            type: "note",
            variant: "tip",
            title: "any o'rniga T",
            html: "<code>any</code> tipni o'chirib, xatolarni yashiradi. Generik esa \"tipni keyinroq beraman\" deydi, lekin bog'lanishni saqlaydi: massivdan olingan qiymat bilan uning elementi bir xil tipda qoladi.",
          },
        ],
        quiz: [
          {
            q: "Generik parametr nima vazifani bajaradi?",
            options: ["Kodni minifikatsiya qiladi", "Faqat sonlarni qabul qiladi", "Ish vaqtida tekshiruv qo'shadi", "Tipni chaqiruv joyiga moslashtiradi"],
            answer: 3,
            explain: "T o'rniga chaqiruvdagi yoki ko'rsatilgan aniq tip qo'yiladi; kod qayta ishlatiladi.",
          },
          {
            q: "birinchiElement([1, 2]) chaqiruvida T qanday tip oladi?",
            options: ["string", "number", "unknown", "never"],
            answer: 1,
            explain: "TypeScript massiv elementlaridan T = number deb inferens qiladi.",
          },
          {
            q: "Quti<number> yozuvi nimani bildiradi?",
            options: ["Quti ichida number saqlanadi", "Quti faqat son qabul qiladi", "Quti o'zi number bo'ladi", "Quti barcha tiplarni rad etadi"],
            answer: 0,
            explain: "T = number bo'lgani uchun qiymat va ochish() natijasi number tipida bo'ladi.",
          },
        ],
      },
      {
        id: 18,
        title: "Generik cheklovlar va standart tip parametrlari",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Ba'zan generik funksiya tipning faqat ma'lum qismiga tayanadi. <code>T extends { id: number }</code> — <b>cheklov</b>: T qanday bo'lishidan qat'i nazar, <code>id</code> xossasi borligi kafolatlanadi. Standart parametr esa <code>&lt;T = string&gt;</code> ko'rinishida yoziladi.",
          },
          {
            type: "code",
            title: "cheklov.ts",
            code: `interface IDBor {
  id: number;
}

function identifikator<T extends IDBor>(element: T): string {
  return "ID-" + element.id;
}

console.log(identifikator({ id: 7, ism: "Aziza" }));
console.log(identifikator({ id: 9, narx: 45000 }));`,
            output: "ID-7\nID-9",
          },
          {
            type: "p",
            html: "Cheklovsiz <code>T</code> ustida <code>element.id</code> yozib bo'lmaydi, chunki T har qanday tip bo'lishi mumkin. <code>extends</code> esa kompilyatorga minimal shaklni aytadi. Bu meros emas, aynan <b>moslik sharti</b>.",
          },
          {
            type: "code",
            title: "standart.ts",
            code: `interface Javob<T = unknown> {
  muvaffaqiyat: boolean;
  malumot: T;
}

interface Talaba {
  ism: string;
}

const javob: Javob<Talaba> = {
  muvaffaqiyat: true,
  malumot: { ism: "Bek" },
};

const xom: Javob = { muvaffaqiyat: false, malumot: undefined };

console.log(javob.malumot.ism);
console.log(xom.malumot === undefined);`,
            output: "Bek\ntrue",
          },
          {
            type: "ul",
            items: [
              "<code>extends</code> cheklovi faqat kerakli xossalarni talab qiladi, ortiqcha xossalar ruxsat etiladi.",
              "Standart tip argumenti tip ko'rsatilmasa va inferens imkonsiz bo'lsa ishlatiladi.",
              "Bir nechta cheklovni intersection bilan yozish mumkin: <code>T extends A &amp; B</code>.",
              "Cheklov xatosi chaqiruv joyida, kompilyatsiya vaqtida ko'rinadi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Generic'dagi extends kalit so'zi nimani bildiradi?",
            options: ["Klass merosini", "Interfeysni o'chirishni", "Tipning minimal moslik shartini", "Funksiya overload'ini"],
            answer: 2,
            explain: "Generic extends — constraint: T ko'rsatilgan shaklga mos bo'lishi shart.",
          },
          {
            q: "T uchun standart tip argumenti qachon qo'llanadi?",
            options: ["Har doim", "Faqat klasslarda", "Tip argumenti berilmasa va inferens bo'lmasa", "Faqat xato bo'lganda"],
            answer: 2,
            explain: "Agar chaqiruvdan T aniqlanmasa va argument ko'rsatilmasa, standart qiymat olinadi.",
          },
          {
            q: "Nega T extends { id: number } cheklovi foydali?",
            options: ["element.id ga xavfsiz murojaat beradi", "id ni ixtiyoriy qiladi", "Barcha xossalarni o'chiradi", "Funksiyani sinxron qiladi"],
            answer: 0,
            explain: "Cheklov id mavjudligini kafolatlaydi, shuning uchun unga to'g'ridan-to'g'ri murojaat qilish mumkin.",
          },
        ],
      },
      {
        id: 19,
        title: "keyof, typeof va indekslangan tiplar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<code>keyof T</code> — T obyektining kalitlaridan iborat union. <code>typeof qiymat</code> — mavjud qiymatning tipini olish. <code>T[K]</code> esa kalit bo'yicha xossa tipini oladi. Uchala vosita birgalikda tipli \"obyektdan maydon olish\" funksiyasini yozish imkonini beradi.",
          },
          {
            type: "code",
            title: "kalitlar.ts",
            code: `interface Foydalanuvchi {
  id: number;
  ism: string;
  faol: boolean;
}

type Kalit = keyof Foydalanuvchi;

const kalitlar: Kalit[] = ["id", "ism", "faol"];
const foydalanuvchi: Foydalanuvchi = { id: 1, ism: "Aziza", faol: true };

console.log(kalitlar.join(" | "));
console.log(foydalanuvchi.faol);`,
            output: "id | ism | faol\ntrue",
          },
          {
            type: "p",
            html: "Endi umumiy funksiya yozamiz: <code>K extends keyof T</code> cheklovi tufayli noto'g'ri kalit uzatilsa kompilyator darhol xato beradi, qaytish tipi esa aynan o'sha xossaning tipi bo'ladi.",
          },
          {
            type: "code",
            title: "qiymat.ts",
            code: `function qiymatOl<T, K extends keyof T>(obyekt: T, kalit: K): T[K] {
  return obyekt[kalit];
}

const talaba = { ism: "Bek", yosh: 17, faol: true };

const ism = qiymatOl(talaba, "ism");
const yosh = qiymatOl(talaba, "yosh");

console.log(ism.toUpperCase());
console.log(yosh + 1);`,
            output: "BEK\n18",
          },
          {
            type: "code",
            title: "typeof.ts",
            code: `const sozlama = {
  mavzu: "qorong'i",
  til: "uz",
  kottaShrift: false,
} as const;

type SozlamaKaliti = keyof typeof sozlama;
type MavzuTuri = typeof sozlama.mavzu;

const kalit: SozlamaKaliti = "til";
const mavzu: MavzuTuri = "qorong'i";

console.log(kalit, mavzu);`,
            output: "til qorong'i",
          },
          {
            type: "note",
            variant: "info",
            title: "Tip fazasi va qiymat fazasi",
            html: "<code>keyof</code> va indekslangan murojaat faqat tip fazasida ishlaydi, <code>typeof</code> esa tip pozitsiyasida qiymatning tipini oladi. <code>typeof</code> ni oddiy ifodada ishlatsangiz, bu JavaScript operatori bo'lib qoladi.",
          },
        ],
        quiz: [
          {
            q: "keyof Foydalanuvchi qanday tip hosil qiladi?",
            options: ["Xossalar qiymatlari unionini", "Faqat stringni", "Obyekt nusxasini", "Xossalar nomlari unionini"],
            answer: 3,
            explain: "keyof obyekt kalitlaridan union yasaydi, masalan \"id\" | \"ism\" | \"faol\".",
          },
          {
            q: "const sozlama = {...}; type K = keyof typeof sozlama; bu yerda typeof nima qiladi?",
            options: ["Ish vaqtida turni tekshiradi", "Qiymat tipini tip fazasiga olib chiqadi", "Yangi obyekt yaratadi", "Kalitlarni o'chiradi"],
            answer: 1,
            explain: "Tip pozitsiyasidagi typeof qiymatning statik tipini beradi; keyin keyof undan kalitlar unionini oladi.",
          },
          {
            q: "T[K] yozuvi nimani anglatadi?",
            options: ["Massiv uzunligini", "K kalitli xossaning tipini", "Funksiya parametrini", "Union tarmoqlari sonini"],
            answer: 1,
            explain: "Indekslangan murojaat T tipidagi K kalitning qiymat tipini qaytaradi.",
          },
        ],
      },
      {
        id: 20,
        title: "Mapped types: tiplarni xaritaga aylantirish",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<b>Mapped type</b> mavjud tipning har bir kalitini aylanib chiqib, yangi tip yasaydi: <code>{ [K in keyof T]: ... }</code>. <code>Partial</code>, <code>Readonly</code> kabi tayyor utility tiplar ham shu mexanizm asosida qurilgan. Bu yerda ularni o'zimiz yozamiz.",
          },
          {
            type: "code",
            title: "xarita.ts",
            code: `interface Talaba {
  id: number;
  ism: string;
  yosh: number;
}

type Ixtiyoriy<T> = { [K in keyof T]?: T[K] };
type Majburiy<T> = { [K in keyof T]-?: T[K] };

const yangilanish: Ixtiyoriy<Talaba> = { ism: "Aziza" };
const toliq: Majburiy<Ixtiyoriy<Talaba>> = { id: 1, ism: "Bek", yosh: 17 };

console.log(Object.keys(yangilanish).join(","));
console.log(toliq.yosh);`,
            output: "ism\n17",
          },
          {
            type: "p",
            html: "<code>?</code> qo'shimchasi xossani ixtiyoriy qiladi, <code>-?</code> esa ixtiyoriylikni olib tashlaydi. Xuddi shunday <code>readonly</code> va <code>-readonly</code> modifier'lari mavjud. Kalitlarni <code>as</code> bilan qayta nomlash ham mumkin — bu <b>key remapping</b> deyiladi.",
          },
          {
            type: "code",
            title: "getter.ts",
            code: `interface Mahsulot {
  narx: number;
  soni: number;
}

type Getterlar<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

const getter: Getterlar<Mahsulot> = {
  getNarx: () => 12000,
  getSoni: () => 5,
};

console.log(getter.getNarx() * getter.getSoni());`,
            output: "60000",
          },
          {
            type: "note",
            variant: "info",
            title: "Faqat tip darajasida",
            html: "Mapped type ish vaqtida hech qanday obyekt yaratmaydi — u faqat kompilyatsiya paytida tekshiriladi. <code>Capitalize&lt;string &amp; K&gt;</code> yozuvidagi <code>string &amp;</code> K ning literal kalit ekanini kafolatlaydi.",
          },
          {
            type: "ul",
            items: [
              "<code>keyof T</code> kalitlar unionini beradi, <code>[K in ...]</code> esa ular bo'ylab yuradi.",
              "Modifier'lar: <code>?</code>, <code>-?</code>, <code>readonly</code>, <code>-readonly</code>.",
              "Key remapping: <code>[K in keyof T as YangiNom]</code>.",
              "Mapped type'lar generic yordamida istalgan obyekt shakliga qo'llanadi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Mapped type qaysi sintaksis bilan kalitlar bo'ylab yuradi?",
            options: ["[K of T]", "for (K in T)", "{ K: T }", "[K in keyof T]"],
            answer: 3,
            explain: "Mapped type'da [K in keyof T] yozuvi har bir kalit uchun yangi xossa yasaydi.",
          },
          {
            q: "Mapped type'dagi -? modifier'i nima qiladi?",
            options: ["Xossani ixtiyoriy qiladi", "Xossani readonly qiladi", "Ixtiyoriylikni olib tashlaydi", "Kalitni o'chiradi"],
            answer: 2,
            explain: "-? optional modifier'ini olib tashlab, barcha xossalarni majburiy qiladi.",
          },
          {
            q: "Mapped type ish vaqtida qanday natija beradi?",
            options: ["Hech qanday ish vaqtida kod qoldirmaydi", "Yangi obyekt yaratadi", "Massivni saralaydi", "JSON'ga aylantiradi"],
            answer: 0,
            explain: "Bu tip darajasidagi konstruksiya; kompilyatsiyadan keyin u butunlay o'chadi.",
          },
        ],
      },
      {
        id: 21,
        title: "Conditional types va infer",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<b>Conditional type</b> tipni shart bo'yicha tanlaydi: <code>T extends U ? X : Y</code>. Bu oddiy ternary operatorning tip versiyasi. <code>infer</code> esa shart ichida tipning bir qismini \"ushlab olish\" imkonini beradi.",
          },
          {
            type: "code",
            title: "shart.ts",
            code: `type Matnmi<T> = T extends string ? "ha" : "yo'q";

type A = Matnmi<"salom">;
type B = Matnmi<42>;

const a: A = "ha";
const b: B = "yo'q";

console.log(a, b);`,
            output: "ha yo'q",
          },
          {
            type: "p",
            html: "<code>infer U</code> faqat <code>extends</code> shartining chap qismida ishlaydi. U massiv elementini, funksiya qaytish tipini yoki obyekt maydonini ajratib olishda qo'llanadi. Natija yana tip bo'lgani uchun undan keyingi hisoblarda foydalanish mumkin.",
          },
          {
            type: "code",
            title: "infer.ts",
            code: `type Element<T> = T extends (infer U)[] ? U : never;
type ApiData<T> = T extends { data: infer D } ? D : never;

const son: Element<number[]> = 42;
const ism: ApiData<{ data: { ism: string } }> = { ism: "Aziza" };

console.log(son, ism.ism);`,
            output: "42 Aziza",
          },
          {
            type: "code",
            title: "distributivlik.ts",
            code: `type Tozalash<T> = T extends null | undefined ? never : T;

type Qiymat = Tozalash<string | null | number>;
const x: Qiymat = "tayyor";
const y: Qiymat = 7;

console.log(x, y);`,
            output: "tayyor 7",
          },
          {
            type: "note",
            variant: "tip",
            title: "Distributivlik",
            html: "Shartda yalang'och <code>T</code> ishlatilsa, union har bir a'zo bo'yicha alohida tekshiriladi. <code>Tozalash&lt;string | null&gt;</code> avtomatik <code>string</code> bo'ladi. Bu xatti-harakatni to'xtatish uchun <code>[T] extends [...]</code> yoziladi.",
          },
        ],
        quiz: [
          {
            q: "Conditional type qanday sintaksisga ega?",
            options: ["T ? extends U : X", "if T extends U then X", "T -> U | X", "T extends U ? X : Y"],
            answer: 3,
            explain: "T extends U ? X : Y — tip darajasidagi shartli tanlov.",
          },
          {
            q: "infer kalit so'zi qayerda ishlatiladi?",
            options: ["Funksiya tanasida", "extends shartining chap tomonida", "Faqat klass deklaratsiyasida", "tsconfig ichida"],
            answer: 1,
            explain: "infer faqat conditional type'ning extends qismida tip o'zgaruvchisini aniqlaydi.",
          },
          {
            q: "type F<T> = T extends string ? 1 : 0; F<string | number> natijasi nima?",
            options: ["1 | 0", "1", "0", "never"],
            answer: 0,
            explain: "Yalang'och T distributiv bo'lgani uchun string uchun 1, number uchun 0 birlashadi: 1 | 0.",
          },
        ],
      },
      {
        id: 22,
        title: "Template literal types",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "TypeScript tip darajasida matn shablonlarini yasay oladi: <code>`salom_${T}`</code>. Bu imkoniyat API kalitlari, event nomlari va tarjima identifikatorlarini qat'iy ro'yxatga olishda juda foydali. Union'lar shablon ichida avtomatik ko'paytiriladi.",
          },
          {
            type: "code",
            title: "tarjima.ts",
            code: `type Til = "uz" | "ru" | "en";
type TarjimaKaliti = \`tarjima_\${Til}\`;

const tarjimalar: Record<TarjimaKaliti, string> = {
  tarjima_uz: "Salom",
  tarjima_ru: "Privet",
  tarjima_en: "Hello",
};

console.log(Object.keys(tarjimalar).length);
console.log(tarjimalar.tarjima_uz);`,
            output: "3\nSalom",
          },
          {
            type: "p",
            html: "Nostandart kalit yozsangiz kompilyator darhol xato beradi. Shablon ichida <code>Capitalize</code>, <code>Uppercase</code>, <code>Lowercase</code> va <code>Uncapitalize</code> kabi ichki utility tiplardan foydalanish mumkin.",
          },
          {
            type: "code",
            title: "handler.ts",
            code: `type HodisaNomi = "click" | "focus" | "blur";
type HandlerNomi = \`on\${Capitalize<HodisaNomi>}\`;

const handlers: Partial<Record<HandlerNomi, () => void>> = {
  onClick: () => console.log("bosildi"),
  onFocus: () => console.log("fokus"),
};

handlers.onClick?.();
console.log(Object.keys(handlers).join(","));`,
            output: "bosildi\nonClick,onFocus",
          },
          {
            type: "table",
            head: ["Yozuv", "Natija"],
            rows: [
              ["<code>`id_${number}`</code>", "<code>id_1</code>, <code>id_2</code> ... (cheksiz)"],
              ["<code>`${'a' | 'b'}_${'x' | 'y'}`</code>", "<code>a_x | a_y | b_x | b_y</code>"],
              ["<code>Uppercase<'ts'></code>", "<code>'TS'</code>"],
              ["<code>`on${Capitalize<'click'>}`</code>", "<code>'onClick'</code>"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Cheksiz naqshlardan ehtiyot bo'ling",
            html: "<code>`${number}`</code> kabi naqsh cheksiz ko'p satrni qabul qiladi. Kalitlarni qat'iy ro'yxatga olish uchun literal union ishlating, aks holda kompilyator kutgan xatoni bermaydi.",
          },
        ],
        quiz: [
          {
            q: "Template literal type qaysi belgilar ichida yoziladi?",
            options: ["Qo'shtirnoq", "Kvadrat qavs", "Backtick (teskari apostrof)", "Slash"],
            answer: 2,
            explain: "Bu turdagi tiplar JavaScript template literal'iga o'xshab backtick ichida yoziladi.",
          },
          {
            q: "type K = `x_${'a' | 'b'}`; natija qanday bo'ladi?",
            options: ["'x_ab'", "never", "'x_a' | 'x_b'", "string"],
            answer: 2,
            explain: "Shablon union bo'ylab tarqaladi va ikkita literal tip hosil qiladi.",
          },
          {
            q: "Capitalize utility tipi nima qiladi?",
            options: ["Birinchi harfni katta qiladi", "Barcha harflarni katta qiladi", "Satrni kesadi", "Sonni matnga aylantiradi"],
            answer: 0,
            explain: "Capitalize faqat birinchi harfni katta qiladi; Uppercase esa hammasini.",
          },
        ],
      },
      {
        id: 23,
        title: "Utility tiplar: Partial, Required, Pick, Omit, Record",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Utility tiplar — TypeScript bilan keladigan tayyor tip transformatorlari. Ular kodni takrorlamasdan yangi shakllar yasaydi: yangilash uchun <code>Partial</code>, to'liq obyekt uchun <code>Required</code>, kerakli maydonlar uchun <code>Pick</code>, keraksizlarini olib tashlash uchun <code>Omit</code>, lug'at uchun <code>Record</code>.",
          },
          {
            type: "code",
            title: "yangilash.ts",
            code: `interface Talaba {
  id: number;
  ism: string;
  yosh: number;
  faol: boolean;
}

function yangila(talaba: Talaba, ozgarish: Partial<Talaba>): Talaba {
  return { ...talaba, ...ozgarish };
}

const boshlangich: Talaba = { id: 1, ism: "Aziza", yosh: 17, faol: true };
const yangilangan = yangila(boshlangich, { yosh: 18 });

console.log(yangilangan.ism, yangilangan.yosh);
console.log(Object.keys(boshlangich).length);`,
            output: "Aziza 18\n4",
          },
          {
            type: "p",
            html: "<code>Pick</code> faqat sanab o'tilgan kalitlarni qoldiradi, <code>Omit</code> esa ularni chiqarib tashlaydi. Ikkalasi ham kalitlarni <code>keyof T</code> ichidan oladi, shuning uchun mavjud bo'lmagan kalit yozilsa kompilyatsiya xatosi bo'ladi.",
          },
          {
            type: "code",
            title: "shakllar.ts",
            code: `interface Talaba {
  id: number;
  ism: string;
  yosh: number;
  faol: boolean;
}

type Kiritish = Omit<Talaba, "id" | "faol">;
type Korsatish = Pick<Talaba, "ism" | "yosh">;
type Guruhlar = Record<"a" | "b", string[]>;

const kiritish: Kiritish = { ism: "Dilnoza", yosh: 18 };
const korsatish: Korsatish = kiritish;
const guruhlar: Guruhlar = { a: ["Aziza"], b: ["Bek"] };

console.log(JSON.stringify(korsatish));
console.log(guruhlar.a.length + guruhlar.b.length);`,
            output: "{\"ism\":\"Dilnoza\",\"yosh\":18}\n2",
          },
          {
            type: "table",
            head: ["Utility", "Vazifasi", "Misol"],
            rows: [
              ["<code>Partial&lt;T&gt;</code>", "Barcha xossalarni ixtiyoriy qiladi", "Yangilash payload'i"],
              ["<code>Required&lt;T&gt;</code>", "Barcha xossalarni majburiy qiladi", "To'liq konfiguratsiya"],
              ["<code>Pick&lt;T, K&gt;</code>", "Faqat K kalitlarni qoldiradi", "Ro'yxat ko'rinishi"],
              ["<code>Omit&lt;T, K&gt;</code>", "K kalitlarni olib tashlaydi", "Yaratish payload'i"],
              ["<code>Record&lt;K, V&gt;</code>", "K kalitlardan V qiymatli obyekt", "Lug'at, guruhlar"],
            ],
          },
        ],
        quiz: [
          {
            q: "Required<T> tipi qanday natija beradi?",
            options: ["Barcha xossalarni ixtiyoriy qiladi", "Faqat id ni qoldiradi", "Obyektni readonly qiladi", "Barcha xossalarni majburiy qiladi"],
            answer: 3,
            explain: "Required optional belgilarini olib tashlab, har bir xossani majburiy qiladi.",
          },
          {
            q: "Pick<Talaba, \"ism\" | \"yosh\"> nimani qiladi?",
            options: ["ism va yoshni olib tashlaydi", "Faqat ism va yoshni qoldiradi", "Barcha xossalarni ixtiyoriy qiladi", "Yoshni numberga aylantiradi"],
            answer: 1,
            explain: "Pick ko'rsatilgan kalitlardan iborat yangi tip yasaydi.",
          },
          {
            q: "Record<\"a\" | \"b\", number[]> qanday qiymatni talab qiladi?",
            options: ["Faqat a kalitini", "a va b kalitlari, har biri number[] bo'lgan obyektni", "number[] massivini", "Istalgan kalitli obyektni"],
            answer: 1,
            explain: "Record barcha ko'rsatilgan kalitlarni majburiy qiladi va ularga number[] tipini beradi.",
          },
        ],
      },
      {
        id: 24,
        title: "Kuchli utility tiplar: Exclude, Extract, ReturnType, Awaited",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Ba'zi utility tiplar union va funksiya turlarini tahlil qiladi. <code>Exclude</code> union'dan ayiradi, <code>Extract</code> esa faqat mos qismini qoldiradi. <code>NonNullable</code> <code>null</code> va <code>undefined</code> ni olib tashlaydi.",
          },
          {
            type: "code",
            title: "union.ts",
            code: `type Holat = "yangi" | "bajarilgan" | "bekor";
type FaolHolat = Exclude<Holat, "bekor">;
type YakuniyHolat = Extract<Holat, "bajarilgan" | "bekor">;

const faollar: FaolHolat[] = ["yangi", "bajarilgan"];
const yakuniy: YakuniyHolat = "bekor";

console.log(faollar.join(","), yakuniy);`,
            output: "yangi,bajarilgan bekor",
          },
          {
            type: "p",
            html: "<code>ReturnType</code> funksiyaning qaytish tipini, <code>Parameters</code> esa parametrlarini tuple sifatida oladi. Ularni ishlatish uchun funksiya <b>tipi</b> kerak: <code>typeof funksiya</code>. <code>Awaited</code> esa Promise ichidagi qiymatni ochadi.",
          },
          {
            type: "code",
            title: "funksiya.ts",
            code: `function qoshish(a: number, b: number): number {
  return a + b;
}

type Argumentlar = Parameters<typeof qoshish>;
type Natija = ReturnType<typeof qoshish>;

const args: Argumentlar = [4, 5];
const natija: Natija = qoshish(...args);

console.log(natija);

async function talabaOl(): Promise<{ id: number }> {
  return { id: 1 };
}

type Ochilgan = Awaited<ReturnType<typeof talabaOl>>;
const talaba: Ochilgan = { id: 1 };

console.log(talaba.id);`,
            output: "9\n1",
          },
          {
            type: "code",
            title: "nonnullable.ts",
            code: `type Ism = NonNullable<string | null | undefined>;
const ism: Ism = "Bek";

function topish(ismlar: (string | null)[], kalit: string): string | null {
  return ismlar.find((ism) => ism === kalit) ?? null;
}

const natija = topish(["Aziza", "Bek"], "Aziza");
console.log(natija?.toUpperCase() ?? "YO'Q");
console.log(ism);`,
            output: "AZIZA\nBek",
          },
          {
            type: "note",
            variant: "tip",
            title: "Utility'larni o'qish",
            html: "<code>ReturnType&lt;typeof fn&gt;</code> — funksiyani o'zgartirmasdan uning shartnomasini boshqa joyda qayta ishlatish usuli. <code>Awaited</code> ni esa async funksiya qaytargan Promise'ni ochish uchun ishlating; <code>Promise&lt;T&gt;</code> ni qo'lda yozib yurmang.",
          },
        ],
        quiz: [
          {
            q: "Exclude<\"a\" | \"b\" | \"c\", \"b\"> natijasi nima?",
            options: ["\"b\"", "\"a\" | \"b\" | \"c\"", "never", "\"a\" | \"c\""],
            answer: 3,
            explain: "Exclude ikkinchi argumentga mos a'zolarni union'dan chiqarib tashlaydi.",
          },
          {
            q: "ReturnType ni funksiyaga qanday qo'llash to'g'ri?",
            options: ["ReturnType<qoshish>", "ReturnType<() => qoshish>", "ReturnType<typeof qoshish>", "ReturnType<qoshish()>"],
            answer: 2,
            explain: "Qiymatning tipini olish uchun typeof kerak: ReturnType<typeof qoshish>.",
          },
          {
            q: "Awaited<Promise<number>> natijasi qanday tip bo'ladi?",
            options: ["number", "Promise<number>", "unknown", "void"],
            answer: 0,
            explain: "Awaited Promise'ni ochib, ichidagi number tipini qaytaradi.",
          },
        ],
      },
      {
        id: 25,
        title: "readonly va const assertion bilan o'zgarmaslik",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>readonly</code> xossa yoki massivni kompilyatsiya darajasida o'zgartirishdan saqlaydi. <code>as const</code> esa qiymatni literal tipda va chuqur readonly qilib \"muzlatadi\". Bu konfiguratsiya va konstantalar uchun ideal.",
          },
          {
            type: "code",
            title: "ranglar.ts",
            code: `const ranglar = ["qizil", "yashil", "ko'k"] as const;

type Rang = typeof ranglar[number];

const birinchi: Rang = ranglar[0];

console.log(birinchi.toUpperCase());
console.log(ranglar.length);`,
            output: "QIZIL\n3",
          },
          {
            type: "p",
            html: "Oddiy <code>const ranglar = [...]</code> da massiv <code>string[]</code> bo'lib qoladi. <code>as const</code> bilan u <code>readonly [\"qizil\", \"yashil\", \"ko'k\"]</code> tuple'ga aylanadi: elementlar soni va har bir literal saqlanadi. <code>push</code> kabi mutatsiyalar xato beradi.",
          },
          {
            type: "code",
            title: "readonly.ts",
            code: `interface Sozlama {
  readonly host: string;
  port: number;
}

const sozlama: Readonly<Sozlama> = { host: "localhost", port: 3000 };

function yigindi(massiv: readonly number[]): number {
  return massiv.reduce((a, b) => a + b, 0);
}

const sonlar: readonly number[] = [1, 2, 3];

console.log(sozlama.host, yigindi(sonlar));`,
            output: "localhost 6",
          },
          {
            type: "table",
            head: ["Yozuv", "Nimani himoya qiladi", "Ish vaqtida?"],
            rows: [
              ["<code>readonly x: string</code>", "Xossaga qayta yozishni", "Yo'q"],
              ["<code>Readonly&lt;T&gt;</code>", "Barcha xossalarni", "Yo'q"],
              ["<code>readonly string[]</code>", "Massiv metodlarini", "Yo'q"],
              ["<code>Object.freeze(obj)</code>", "Haqiqiy mutatsiyani", "Ha"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "const va readonly farqi",
            html: "<code>const</code> o'zgaruvchi qayta bog'lanishini taqiqlaydi, lekin obyekt ichini himoya qilmaydi. <code>readonly</code> esa aynan ichki maydonlarga yozishni bloklaydi. Ikkalasi birgalikda ishlatilganda eng qat'iy kafolat beriladi.",
          },
        ],
        quiz: [
          {
            q: "as const massivga qanday ta'sir qiladi?",
            options: ["Uni string[] qiladi", "Uni bo'sh massivga aylantiradi", "Faqat uzunlikni saqlaydi", "Readonly tuple va literal tiplarga aylantiradi"],
            answer: 3,
            explain: "as const elementlarni literal tipda saqlaydi va massivni readonly tuple qiladi.",
          },
          {
            q: "readonly massivga push qilishga urinish qachon xato beradi?",
            options: ["Ish vaqtida", "Kompilyatsiya vaqtida", "Faqat brauzerda", "Hech qachon"],
            answer: 1,
            explain: "readonly faqat tip tizimi cheklovi; kompilyator push metodini taqiqlaydi.",
          },
          {
            q: "const obyekt = { a: 1 }; obyekt.a = 2; natijasi nima?",
            options: ["Ishlaydi, chunki ichki xossa readonly emas", "Kompilyatsiya xatosi", "Ish vaqtida xato", "Obyekt muzlaydi"],
            answer: 0,
            explain: "const faqat qayta bog'lashni taqiqlaydi; xossani o'zgartirish uchun readonly yoki Object.freeze kerak.",
          },
        ],
      },
      {
        id: 26,
        title: "strictNullChecks: null va undefined bilan ishlash",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>strictNullChecks</code> yoqilganda <code>null</code> va <code>undefined</code> alohida tiplar bo'ladi: ularni <code>string</code> o'rniga bera olmaysiz. Bu \"kutilmagan null\" xatolarining katta qismini kompilyatsiya bosqichida ushlaydi. <code>strict: true</code> uning ham yoqadi.",
          },
          {
            type: "code",
            title: "email.ts",
            code: `interface Talaba {
  ism: string;
  email: string | null;
}

function emailYubor(talaba: Talaba): string {
  if (talaba.email === null) {
    return talaba.ism + ": email yo'q";
  }
  return talaba.ism + ": " + talaba.email;
}

console.log(emailYubor({ ism: "Aziza", email: "aziza@noldan.uz" }));
console.log(emailYubor({ ism: "Bek", email: null }));`,
            output: "Aziza: aziza@noldan.uz\nBek: email yo'q",
          },
          {
            type: "p",
            html: "Massiv metodlari ko'pincha topilmasa <code>undefined</code> qaytaradi. <code>find</code> natijasi <code>T | undefined</code> bo'ladi. Shuning uchun natijani ishlatishdan oldin tekshirish yoki <code>?.</code> bilan xavfsiz murojaat qilish kerak.",
          },
          {
            type: "code",
            title: "topish.ts",
            code: `interface Talaba {
  ism: string;
}

const talabalar: Talaba[] = [{ ism: "Aziza" }, { ism: "Bek" }];

function topish(ism: string): Talaba | undefined {
  return talabalar.find((talaba) => talaba.ism === ism);
}

const natija = topish("Dilnoza");

if (natija === undefined) {
  console.log("Topilmadi");
} else {
  console.log(natija.ism);
}

console.log(natija?.ism.length ?? 0);`,
            output: "Topilmadi\n0",
          },
          {
            type: "ul",
            items: [
              "<code>strictNullChecks</code> o'chiq bo'lsa, null va undefined har qanday tipga mos keladi — bu xavfli.",
              "Ixtiyoriy xossa <code>email?: string</code> aslida <code>string | undefined</code>.",
              "Funksiya qaytish tipiga <code>| undefined</code> ni ochiq yozing, chaqiruvchi tekshirishga majbur bo'lsin.",
              "<code>!</code> (non-null assertion) dan faqat kafolat 100% bo'lsa foydalaning.",
            ],
          },
        ],
        quiz: [
          {
            q: "strictNullChecks yoqilganda qanday o'zgarish bo'ladi?",
            options: ["null har qanday tipga mos keladi", "Barcha tiplar any bo'ladi", "null va undefined alohida tekshiriladi", "Optional xossalar taqiqlanadi"],
            answer: 2,
            explain: "Ular alohida tip sifatida qaraladi va faqat mos union ichida ruxsat etiladi.",
          },
          {
            q: "string | null tipidagi qiymatni to'g'ridan-to'g'ri string parametriga berish mumkinmi?",
            options: ["Ha, har doim", "Faqat const bo'lsa", "Yo'q, avval null tekshirilishi kerak", "Faqat brauzerda"],
            answer: 2,
            explain: "strict rejimda null ehtimoli bor tip string o'rniga o'tmaydi; narrowing talab qilinadi.",
          },
          {
            q: "Array.find() natijasining tipi odatda qanday bo'ladi?",
            options: ["T | undefined", "T", "T[]", "null"],
            answer: 0,
            explain: "Element topilmasligi mumkinligi uchun find T | undefined qaytaradi.",
          },
        ],
      },
      {
        id: 27,
        title: "Optional chaining va nullish coalescing",
        minutes: 14,
        blocks: [
          {
            type: "p",
            html: "<code>?.</code> zanjirning bir qismi <code>null</code> yoki <code>undefined</code> bo'lsa, butun ifodani xato bermasdan <code>undefined</code> qilib qaytaradi. <code>??</code> esa faqat nullish qiymatlarda o'ng tomondagi zaxira qiymatni oladi. Ular birgalikda xavfsiz, qisqa kod beradi.",
          },
          {
            type: "code",
            title: "profil.ts",
            code: `interface Manzil {
  shahar: string;
}

interface Profil {
  ism: string;
  manzil?: Manzil;
  telefon?: string;
}

const profil: Profil = { ism: "Aziza" };

console.log(profil.manzil?.shahar ?? "Manzil kiritilmagan");
console.log(profil.telefon?.length ?? "Telefon yo'q");`,
            output: "Manzil kiritilmagan\nTelefon yo'q",
          },
          {
            type: "p",
            html: "<code>?.</code> ni faqat haqiqatan nullish bo'lishi mumkin bo'lgan joyda ishlating. U mavjud bo'lmagan xossani ham jimgina <code>undefined</code> qiladi, shuning uchun imlo xatosi yashirinishi mumkin. Qat'iy tiplar bunday xatoni e'lon qilingan interfeysda ushlaydi.",
          },
          {
            type: "code",
            title: "fallback.ts",
            code: `const hisob = { ball: 0, ism: "" };

const ball = hisob.ball ?? 10;
const ballOr = hisob.ball || 10;
const ism = hisob.ism ?? "Noma'lum";

console.log(ball, ballOr);
console.log(ism === "" ? "bo'sh ism saqlandi" : ism);

const sozlama: { mavzu?: string } = {};
sozlama.mavzu ??= "yorug'";
console.log(sozlama.mavzu);`,
            output: "0 10\nbo'sh ism saqlandi\nyorug'",
          },
          {
            type: "table",
            head: ["Operator", "Chap qiymat", "Natija"],
            rows: [
              ["<code>??</code>", "<code>0</code>, <code>\"\"</code>, <code>false</code>", "Chap qiymat qoladi"],
              ["<code>??</code>", "<code>null</code>, <code>undefined</code>", "O'ng qiymat olinadi"],
              ["<code>||</code>", "<code>0</code>, <code>\"\"</code>, <code>false</code>", "O'ng qiymat olinadi"],
              ["<code>??=</code>", "<code>undefined</code> konteyner", "O'ng qiymat yoziladi"],
            ],
          },
        ],
        quiz: [
          {
            q: "obyekt?.xossa ifodasi obyekt null bo'lsa nima qaytaradi?",
            options: ["Xato tashlaydi", "null", "0", "undefined"],
            answer: 3,
            explain: "Optional chaining nullish qiymatda xato bermay undefined qaytaradi.",
          },
          {
            q: "ball 0 bo'lganda ball || 10 va ball ?? 10 natijalari qanday farq qiladi?",
            options: ["Ikkalasi 10 beradi", "|| 10, ?? 0 beradi", "|| 0, ?? 10 beradi", "Ikkalasi 0 beradi"],
            answer: 1,
            explain: "|| 0 ni falsy deb almashtiradi; ?? faqat null/undefined bo'lsa almashtiradi.",
          },
          {
            q: "sozlama.mavzu ??= \"yorug'\" operatori nima qiladi?",
            options: ["Har doim qiymat yozadi", "mavzu nullish bo'lsagina yozadi", "mavzuni o'chiradi", "Taqqoslash bajaradi"],
            answer: 1,
            explain: "??= logik tayinlash operatori faqat chap qiymat nullish bo'lganda yozadi.",
          },
        ],
      },
      {
        id: 28,
        title: "Funksiya tiplari, overload va this",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Funksiya tipi <code>(a: number, b: number) =&gt; number</code> ko'rinishida yoziladi. Uni type alias yoki interfeysga saqlab, callback va strategiyalarni xavfsiz uzatish mumkin. Bir funksiya turli argument shakllarini qabul qilsa, <b>overload</b> imzolaridan foydalaniladi.",
          },
          {
            type: "code",
            title: "overload.ts",
            code: `type Amal = (a: number, b: number) => number;

const qosh: Amal = (a, b) => a + b;

function formatla(qiymat: string): string;
function formatla(qiymat: number): string;
function formatla(qiymat: string | number): string {
  return typeof qiymat === "number" ? qiymat.toFixed(2) : qiymat.trim();
}

console.log(qosh(2, 3));
console.log(formatla(3.14159));
console.log(formatla("  salom  "));`,
            output: "5\n3.14\nsalom",
          },
          {
            type: "p",
            html: "Overload'da tashqi imzolar chaqiruvchiga ko'rinadi, implementatsiya imzosi esa yashirin. Shuning uchun implementatsiya barcha imzolarga mos kelishi kerak. <code>this</code> parametri funksiyaga qanday kontekstda murojaat qilinishini tekshiradi va kompilyatsiyadan keyin yo'qoladi.",
          },
          {
            type: "code",
            title: "this.ts",
            code: `function salomlash(this: { ism: string }): string {
  return "Salom, " + this.ism;
}

const foydalanuvchi = { ism: "Aziza", salomlash };

console.log(foydalanuvchi.salomlash());

const ajratilgan = foydalanuvchi.salomlash;
console.log(typeof ajratilgan);`,
            output: "Salom, Aziza\nfunction",
          },
          {
            type: "note",
            variant: "warn",
            title: "this ni yo'qotmang",
            html: "Metodni obyektdan ajratib olsangiz, <code>this</code> bog'lanishi yo'qoladi. Bunday holatda <code>bind</code>, arrow funksiya yoki klass maydonidagi arrow ishlatiladi. <code>this</code> parametri faqat kompilyatorga yordam beradi, ish vaqtida argument sifatida uzatilmaydi.",
          },
        ],
        quiz: [
          {
            q: "Funksiya tipi qanday yoziladi?",
            options: ["function (number, number): number", "number => (a, b)", "callable<number>", "(a: number, b: number) => number"],
            answer: 3,
            explain: "Arrow ko'rinishidagi (parametrlar) => qaytishTipi funksiya tipini bildiradi.",
          },
          {
            q: "Overload'dagi tashqi imzolardan qaysi biri chaqiruvchiga ko'rinadi?",
            options: ["Faqat implementatsiya imzosi", "Hech biri", "Barcha e'lon qilingan overload imzolari", "Faqat birinchisi"],
            answer: 2,
            explain: "Chaqiruvlar overload imzolari bo'yicha tekshiriladi; implementatsiya yashirin qoladi.",
          },
          {
            q: "this: { ism: string } parametri ish vaqtida nima qiladi?",
            options: ["Hech narsa — faqat tip tekshiruvi", "Yangi obyekt yaratadi", "Argument sifatida uzatiladi", "this ni muzlatadi"],
            answer: 0,
            explain: "this parametri tip tizimi uchun; u kompilyatsiyada o'chiriladi va argument bo'lmaydi.",
          },
        ],
      },
      {
        id: 29,
        title: "Klasslar: accessor, static va parameter properties",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Klassda <code>private</code> maydonni tashqaridan yashirib, <code>get</code>/<code>set</code> accessor'lari orqali boshqarish mumkin. <code>static</code> a'zolar nusxaga emas, klassning o'ziga tegishli. Konstruktordagi <code>public readonly</code> kabi modifier'lar maydon va tayinlashni bir satrda yaratadi.",
          },
          {
            type: "code",
            title: "hisob.ts",
            code: `class Hisob {
  private balans = 0;

  constructor(public readonly egasi: string) {}

  get summa(): number {
    return this.balans;
  }

  qoshish(qiymat: number): void {
    if (qiymat <= 0) {
      throw new Error("Qiymat musbat bo'lishi kerak");
    }
    this.balans += qiymat;
  }
}

const hisob = new Hisob("Aziza");
hisob.qoshish(50000);
hisob.qoshish(25000);

console.log(hisob.egasi, hisob.summa);`,
            output: "Aziza 75000",
          },
          {
            type: "p",
            html: "<code>get summa()</code> metod sifatida emas, xossa sifatida o'qiladi: <code>hisob.summa</code>. Bu inkapsulyatsiyani saqlab, tashqi API'ni sodda qiladi. <code>readonly</code> egasi esa faqat konstruktorda tayinlanadi.",
          },
          {
            type: "code",
            title: "static.ts",
            code: `class Matematika {
  static readonly PI = 3.14159;

  static doiraYuzi(radius: number): number {
    return Number((this.PI * radius ** 2).toFixed(2));
  }
}

console.log(Matematika.PI);
console.log(Matematika.doiraYuzi(2));
console.log(typeof Matematika.doiraYuzi);
console.log("doiraYuzi" in new Matematika());`,
            output: "3.14159\n12.57\nfunction\nfalse",
          },
          {
            type: "ul",
            items: [
              "Konstruktorda <code>private x: number</code> yozilsa, maydon avtomatik yaratiladi va parametr tayinlanadi.",
              "<code>static</code> metod ichida <code>this</code> klassning o'zini bildiradi.",
              "Nusxa orqali static a'zoga murojaat qilib bo'lmaydi.",
              "Accessor ichida validatsiya qilib, noto'g'ri holatni oldini olish mumkin.",
            ],
          },
        ],
        quiz: [
          {
            q: "get summa() accessor'iga qanday murojaat qilinadi?",
            options: ["hisob.summa()", "hisob.getSumma()", "get(hisob.summa)", "hisob.summa"],
            answer: 3,
            explain: "Getter xossa kabi o'qiladi; qavs qo'yilmaydi.",
          },
          {
            q: "static metod qaysi obyektga tegishli?",
            options: ["Har bir nusxaga", "Klassning o'ziga", "Faqat birinchi nusxaga", "Prototipga"],
            answer: 1,
            explain: "static a'zolar klass konstruktoriga tegishli, nusxalarga ko'chirilmaydi.",
          },
          {
            q: "constructor(public readonly egasi: string) yozuvi nima yaratadi?",
            options: ["Maydon va konstruktorda tayinlash", "Faqat lokal parametr", "Statik xossa", "Getter"],
            answer: 0,
            explain: "Parameter property public readonly maydonni yaratadi va argumentni unga tayinlaydi.",
          },
        ],
      },
      {
        id: 30,
        title: "Abstract class va polimorfizm",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<b>Abstract class</b> — to'liq bo'lmagan umumiy asos. Undan nusxa yaratib bo'lmaydi, lekin meros olish mumkin. <b>Abstract metod</b> tanasi bo'lmaydi: har bir merosxo'r uni o'ziga mos amalga oshirishi shart. Bu umumiy xatti-harakatni saqlab, farqni bolalarga qoldiradi.",
          },
          {
            type: "code",
            title: "hayvon.ts",
            code: `abstract class Hayvon {
  constructor(public ism: string) {}

  abstract ovoz(): string;

  tanish(): string {
    return this.ism + ": " + this.ovoz();
  }
}

class It extends Hayvon {
  ovoz(): string {
    return "Vov";
  }
}

class Mushuk extends Hayvon {
  ovoz(): string {
    return "Miyov";
  }
}

const hayvonlar: Hayvon[] = [new It("Bobik"), new Mushuk("Mimi")];
hayvonlar.forEach((hayvon) => console.log(hayvon.tanish()));`,
            output: "Bobik: Vov\nMimi: Miyov",
          },
          {
            type: "p",
            html: "Massiv <code>Hayvon[]</code> tipida bo'lsa ham, har bir element o'z <code>ovoz()</code> implementatsiyasini chaqiradi. Bu — <b>polimorfizm</b>. Kod umumiy interfeysga tayanadi, aniq klassni bilishi shart emas.",
          },
          {
            type: "code",
            title: "shakl.ts",
            code: `abstract class Shakl {
  abstract yuza(): number;

  get malumot(): string {
    return this.constructor.name + ": " + this.yuza();
  }
}

class Tortburchak extends Shakl {
  constructor(private a: number, private b: number) {
    super();
  }

  yuza(): number {
    return this.a * this.b;
  }
}

const shakl: Shakl = new Tortburchak(3, 4);
console.log(shakl.malumot);`,
            output: "Tortburchak: 12",
          },
          {
            type: "note",
            variant: "warn",
            title: "Abstract va interface",
            html: "Interface faqat shaklni tavsiflaydi, abstract class esa umumiy kodni ham beradi. Agar merosxo'rlar bir xil tayyor metodlardan foydalansa — abstract class; faqat shartnoma kerak bo'lsa — interface yetarli.",
          },
        ],
        quiz: [
          {
            q: "Abstract class'dan to'g'ridan-to'g'ri nusxa yaratish mumkinmi?",
            options: ["Ha, new bilan", "Faqat generic bilan", "Yo'q, faqat meros olish mumkin", "Faqat static metod bilan"],
            answer: 2,
            explain: "abstract class to'liq emas; undan new qilib bo'lmaydi, merosxo'r yaratiladi.",
          },
          {
            q: "Abstract metod haqida qaysi gap to'g'ri?",
            options: ["Tanasi bo'ladi", "Faqat private bo'ladi", "Merosxo'r uni amalga oshirishi shart", "Ish vaqtida avtomatik yaratiladi"],
            answer: 2,
            explain: "Abstract metod faqat imzo beradi; har bir merosxo'r implementatsiya yozadi.",
          },
          {
            q: "Hayvon[] massividagi har xil bolalar metodini chaqirish qanday imkoniyat?",
            options: ["Polimorfizm", "Inkapsulyatsiya", "Overload", "Narrowing"],
            answer: 0,
            explain: "Umumiy asos tipi orqali har bir obyektning o'z metodini chaqirish polimorfizmdir.",
          },
        ],
      },
      {
        id: 31,
        title: "Interfeys bilan klass dizayni va dependency injection",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<code>implements</code> klassning interfeys shartnomasiga mosligini tekshiradi. Repository pattern'ida ma'lumot manbasi interfeys ortiga yashiriladi: biznes kodi xotira, fayl yoki API ekanini bilmaydi. Bu testlash va almashtirishni osonlashtiradi.",
          },
          {
            type: "code",
            title: "repo.ts",
            code: `interface Talaba {
  id: number;
  ism: string;
}

interface Repozitoriy<T> {
  saqlash(element: T): void;
  topish(id: number): T | undefined;
  hammasi(): T[];
}

class XotiraRepozitoriyasi<T extends { id: number }> implements Repozitoriy<T> {
  private elementlar: T[] = [];

  saqlash(element: T): void {
    this.elementlar.push(element);
  }

  topish(id: number): T | undefined {
    return this.elementlar.find((element) => element.id === id);
  }

  hammasi(): T[] {
    return [...this.elementlar];
  }
}

const repo = new XotiraRepozitoriyasi<Talaba>();
repo.saqlash({ id: 1, ism: "Aziza" });
repo.saqlash({ id: 2, ism: "Bek" });

console.log(repo.topish(2)?.ism);
console.log(repo.hammasi().length);`,
            output: "Bek\n2",
          },
          {
            type: "p",
            html: "Endi xizmat klassini aniq repozitoriyga bog'lamaymiz. Konstruktor orqali interfeys qabul qilamiz — bu <b>dependency injection</b>. Testda soxta (fake) repozitoriy, ishlab chiqarishda haqiqiy API repozitoriysi uzatiladi.",
          },
          {
            type: "code",
            title: "xizmat.ts",
            code: `interface XabarYuboruvchi {
  yubor(xabar: string): void;
}

class EmailYuboruvchi implements XabarYuboruvchi {
  yubor(xabar: string): void {
    console.log("Email:", xabar);
  }
}

class Xizmat {
  constructor(private yuboruvchi: XabarYuboruvchi) {}

  eslat(ism: string): void {
    this.yuboruvchi.yubor("Salom, " + ism);
  }
}

const xizmat = new Xizmat(new EmailYuboruvchi());
xizmat.eslat("Aziza");`,
            output: "Email: Salom, Aziza",
          },
          {
            type: "ul",
            items: [
              "<code>implements</code> meros emas: klass interfeysning shakliga mosligini tekshiradi.",
              "Interfeys ortiga yashirilgan ma'lumot manbasi testda oson almashtiriladi.",
              "Konstruktor injection bog'liqlikni tashqaridan berish imkonini yaratadi.",
              "Generic repository bir kod bilan turli entity'larni xizmat qiladi.",
            ],
          },
        ],
        quiz: [
          {
            q: "implements kalit so'zi nimani ta'minlaydi?",
            options: ["Interfeysning ish vaqtida bajarilishini", "Klassni abstract qilishni", "Metodlarni avtomatik yaratishni", "Klassning interfeys shakliga mosligini"],
            answer: 3,
            explain: "implements klass interfeys talablarini bajarishini kompilyatorga tekshirtiradi.",
          },
          {
            q: "Repository interfeysidan foydalanishning asosiy foydasi nima?",
            options: ["Kodni sekinlashtirish", "Ma'lumot manbasini almashtirish va testlash osonligi", "Barcha tiplarni any qilish", "Faqat xotira ishlatish"],
            answer: 1,
            explain: "Biznes kod interfeysga tayanadi; xotira, fayl yoki API implementatsiyasini almashtirish mumkin.",
          },
          {
            q: "Konstruktorga XabarYuboruvchi qabul qilish qanday naqsh hisoblanadi?",
            options: ["Meros", "Dependency injection", "Overload", "Declaration merging"],
            answer: 1,
            explain: "Bog'liqlikni klass ichida yaratmasdan tashqaridan uzatish dependency injection deyiladi.",
          },
        ],
      },
      {
        id: 32,
        title: "Enum, const enum va union alternativasi",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Enum nomlangan konstantalar to'plami. Raqamli enum ish vaqtida obyekt yaratadi va teskari xaritalash beradi; satrli enum o'qiladigan qiymatlar saqlaydi. Ko'p hollarda literal union + <code>Record</code> yengilroq va xavfsizroq alternativa bo'ladi.",
          },
          {
            type: "code",
            title: "enum.ts",
            code: `enum BuyurtmaHolati {
  Yangi = "yangi",
  Jonatilgan = "jonatilgan",
  Yetkazilgan = "yetkazilgan",
}

function holatMatni(holat: BuyurtmaHolati): string {
  switch (holat) {
    case BuyurtmaHolati.Yangi:
      return "Kutilmoqda";
    case BuyurtmaHolati.Jonatilgan:
      return "Yo'lda";
    case BuyurtmaHolati.Yetkazilgan:
      return "Yetkazildi";
    default:
      return "Noma'lum";
  }
}

console.log(holatMatni(BuyurtmaHolati.Yangi));
console.log(Object.values(BuyurtmaHolati).join(","));`,
            output: "Kutilmoqda\nyangi,jonatilgan,yetkazilgan",
          },
          {
            type: "p",
            html: "Satrli enum qiymatlari aniq va JSON'ga to'g'ridan-to'g'ri yoziladi. Raqamli enum'da esa <code>Enum[0]</code> nomni qaytaradi — bu teskari mapping. <code>const enum</code> kompilyatsiyada joyiga qo'yiladi, lekin bundler va <code>isolatedModules</code> bilan cheklovlari bor.",
          },
          {
            type: "code",
            title: "union.ts",
            code: `type Holat = "yangi" | "jonatilgan" | "yetkazilgan";

const yorliqlar: Record<Holat, string> = {
  yangi: "Kutilmoqda",
  jonatilgan: "Yo'lda",
  yetkazilgan: "Yetkazildi",
};

function yorliq(holat: Holat): string {
  return yorliqlar[holat];
}

const holat: Holat = "yetkazilgan";
console.log(yorliq(holat));
console.log(typeof holat);`,
            output: "Yetkazildi\nstring",
          },
          {
            type: "table",
            head: ["Yondashuv", "Ish vaqtida kod", "Afzalligi"],
            rows: [
              ["Satrli enum", "Obyekt", "Nomlar guruhlangan, IDE yordami"],
              ["Raqamli enum", "Obyekt + teskari mapping", "Kam joy, lekin qiymatlar noaniq"],
              ["const enum", "Yo'q (inline)", "Eng yengil, lekin tooling cheklovi"],
              ["Literal union", "Yo'q", "Sof tiplar, JSON bilan tabiiy"],
            ],
          },
        ],
        quiz: [
          {
            q: "Satrli enum qiymati ish vaqtida qanday saqlanadi?",
            options: ["Raqam sifatida", "Faqat tip sifatida", "JSON faylida", "E'lon qilingan satr sifatida"],
            answer: 3,
            explain: "Satrli enum obyektga aylanadi va ko'rsatilgan matn qiymatlarini saqlaydi.",
          },
          {
            q: "Literal union'ning enum'ga nisbatan qaysi afzalligi bor?",
            options: ["Ko'proq xotira oladi", "Faqat raqamlarni qabul qiladi", "Ish vaqtida obyekt yaratmaydi", "Har doim tezroq kompilyatsiya qiladi"],
            answer: 2,
            explain: "Union butunlay tip darajasida qoladi, JavaScript chiqishida qo'shimcha kod bo'lmaydi.",
          },
          {
            q: "Raqamli enum'da Enum[0] odatda nimani qaytaradi?",
            options: ["Birinchi a'zo nomini", "0 qiymatini", "undefined", "Xato"],
            answer: 0,
            explain: "Raqamli enum teskari mapping yaratadi: raqam bo'yicha nomni qaytaradi.",
          },
        ],
      },
      {
        id: 33,
        title: "Dekoratorlar asoslari: TS 5 standart sintaksisi",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Dekorator — klass yoki uning a'zosini e'lon qilishda chaqiriladigan funksiya. TypeScript 5 standart (stage 3) dekoratorlarni qo'llab-quvvatlaydi; ular klass e'loni paytida bir marta ishlaydi. Eski <code>experimentalDecorators</code> rejimi alohida va imzolari boshqacha.",
          },
          {
            type: "code",
            title: "klass.ts",
            code: `function elon<C extends new (...args: any[]) => any>(
  value: C,
  context: ClassDecoratorContext<C>
): void {
  console.log("Dekorator:", context.kind, context.name);
}

@elon
class Mahsulot {
  constructor(public nom: string) {}
}

const mahsulot = new Mahsulot("Kitob");
console.log(mahsulot.nom);`,
            output: "Dekorator: class Mahsulot\nKitob",
          },
          {
            type: "p",
            html: "Metod dekoratori asl metodni o'rovchi yangi funksiya qaytarishi mumkin. <code>context.name</code> metod nomini, <code>context.kind</code> esa bezatilayotgan a'zo turini beradi. Bu logging, keshlash va ruxsat tekshiruvi uchun ishlatiladi.",
          },
          {
            type: "code",
            title: "metod.ts",
            code: `function log<This, Args extends unknown[], R>(
  value: (this: This, ...args: Args) => R,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => R>
) {
  return function (this: This, ...args: Args): R {
    const natija = value.call(this, ...args);
    console.log(String(context.name) + "(" + args.join(", ") + ") = " + natija);
    return natija;
  };
}

class Kalkulyator {
  @log
  qosh(a: number, b: number): number {
    return a + b;
  }
}

console.log(new Kalkulyator().qosh(2, 3));`,
            output: "qosh(2, 3) = 5\n5",
          },
          {
            type: "note",
            variant: "warn",
            title: "Rejimni aralashtirmang",
            html: "Standart dekoratorlar <code>experimentalDecorators</code> talab qilmaydi. Agar loyiha eski legacy dekoratorlarda bo'lsa, <code>context</code> argumenti bo'lmaydi va imzo boshqacha. Bitta loyihada ikkala uslubni aralashtirish mumkin emas.",
          },
          {
            type: "ul",
            items: [
              "Klass dekoratori klass konstruktorini qabul qiladi.",
              "Metod dekoratori metod funksiyasini va context'ni oladi.",
              "Dekoratorlar sinf ta'rifida, nusxa yaratilishidan oldin ishlaydi.",
              "Bezatish tartibi muhim: ifodalar yuqoridan pastga, chaqiruvlar pastdan yuqoriga.",
            ],
          },
        ],
        quiz: [
          {
            q: "TS 5 standart dekoratorlari uchun qaysi flag shart?",
            options: ["experimentalDecorators: true", "emitDecoratorMetadata: true", "target: ESNext", "Hech qanday maxsus flag shart emas"],
            answer: 3,
            explain: "TS 5 standart dekoratorlarni flagsiz qo'llab-quvvatlaydi; experimentalDecorators legacy rejim uchun.",
          },
          {
            q: "Metod dekoratori qachon chaqiriladi?",
            options: ["Metod chaqirilganda", "Klass e'lon qilinganda", "Har bir nusxada", "Faqat testda"],
            answer: 1,
            explain: "Dekorator funksiyasi klass ta'rifi paytida ishlaydi; qaytgan wrapper metod chaqirilganda ishlaydi.",
          },
          {
            q: "context.kind qiymati metod dekoratorida odatda nima bo'ladi?",
            options: ["method", "class", "field", "accessor"],
            answer: 0,
            explain: "Metodni bezatganda context.kind \"method\" bo'ladi.",
          },
        ],
      },
      {
        id: 34,
        title: "Dekoratorlar amaliyoti: factory va field initializer",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Dekoratorni sozlanadigan qilish uchun <b>factory</b> ishlatiladi: funksiya argument oladi va dekorator qaytaradi. Field dekoratori esa maydon boshlang'ich qiymatini o'zgartira oladi — masalan, kiruvchi matnni normallashtirish yoki validatsiya qilish.",
          },
          {
            type: "code",
            title: "factory.ts",
            code: `function versiya(nom: string) {
  return function <C extends new (...args: any[]) => any>(
    _value: C,
    context: ClassDecoratorContext<C>
  ): void {
    console.log(String(context.name) + " versiyasi: " + nom);
  };
}

@versiya("1.2.0")
class Plagin {
  ishgaTush(): string {
    return "tayyor";
  }
}

console.log(new Plagin().ishgaTush());`,
            output: "Plagin versiyasi: 1.2.0\ntayyor",
          },
          {
            type: "p",
            html: "Field dekoratori <code>undefined</code> qiymat va context oladi, qaytgan funksiya esa har bir nusxa yaratilganda boshlang'ich qiymat bilan chaqiriladi. Shu joyda qiymatni o'zgartirish mumkin, lekin tipni saqlash uchun cast yoki tekshiruv kerak bo'ladi.",
          },
          {
            type: "code",
            title: "field.ts",
            code: `function katta<This, V extends string>(
  _value: undefined,
  _context: ClassFieldDecoratorContext<This, V>
) {
  return function (this: This, boshlangich: V): V {
    return boshlangich.toUpperCase() as V;
  };
}

class Foydalanuvchi {
  @katta ism = "aziza";
}

const foydalanuvchi = new Foydalanuvchi();
console.log(foydalanuvchi.ism);`,
            output: "AZIZA",
          },
          {
            type: "ul",
            items: [
              "Dekorator factory darhol emas, klass e'loni paytida chaqiriladi.",
              "Field initializer har bir yangi nusxa uchun ishlaydi.",
              "Bir nechta dekorator yozilsa, chaqiruvlar pastdan yuqoriga bajariladi.",
              "Dekoratorlar biznes mantig'ini bezash uchun, murakkab oqim uchun emas.",
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Testda tekshiring",
            html: "Dekoratorlar sehrli ko'rinadi, lekin ular oddiy funksiyalar. Klass yaratilganda va metod chaqirilganda tartibni <code>console.log</code> bilan kuzatib, kutilgan vaqtda ishlayotganiga ishonch hosil qiling.",
          },
        ],
        quiz: [
          {
            q: "Dekorator factory nima qaytaradi?",
            options: ["Yangi klassni", "Promise'ni", "Dekorator funksiyasini", "JSON obyektini"],
            answer: 2,
            explain: "Factory argumentlarni yopib oladi va haqiqiy dekorator funksiyasini qaytaradi.",
          },
          {
            q: "Field dekoratoridan qaytgan initializer qachon ishlaydi?",
            options: ["Klass e'lon qilinganda bir marta", "Faqat metod chaqirilganda", "Har bir nusxa yaratilganda", "Faqat testda"],
            answer: 2,
            explain: "Field initializer har bir instansiya uchun boshlang'ich qiymat hisoblashda chaqiriladi.",
          },
          {
            q: "Bir a'zoga ikki dekorator yozilsa, chaqiruv tartibi qanday?",
            options: ["Pastdan yuqoriga", "Yuqoridan pastga", "Tasodifiy", "Faqat birinchisi ishlaydi"],
            answer: 0,
            explain: "Ifodalar yuqoridan pastga baholanadi, dekorator chaqiruvlari esa pastdan yuqoriga bajariladi.",
          },
        ],
      },
      {
        id: 35,
        title: "Modullar: import, export va type-only import",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "TypeScript ES modullarini to'liq qo'llab-quvvatlaydi: <code>export</code> bilan ochiq API belgilanadi, <code>import</code> bilan boshqa fayldan olinadi. Faqat tip uchun kerak bo'lgan import'ni <code>import type</code> bilan yozish chiqish JavaScript'ni yengillashtiradi.",
          },
          {
            type: "code",
            title: "matematika.ts + main.ts",
            code: `// matematika.ts
export function qosh(a: number, b: number): number {
  return a + b;
}

export type Amal = "qosh" | "ayir";

// main.ts
import { qosh, type Amal } from "./matematika.js";

const amal: Amal = "qosh";
console.log(amal, qosh(4, 5));`,
            output: "qosh 9",
          },
          {
            type: "p",
            html: "NodeNext modul tizimida nisbiy import yo'li <code>.js</code> kengaytmasi bilan yoziladi — hatto manba fayl <code>.ts</code> bo'lsa ham. Bundler (Vite, esbuild) ishlatilsa, odatda kengaytmasiz yozish ham mumkin, lekin <code>tsconfig</code>dagi <code>moduleResolution</code>ga mos bo'lishi shart.",
          },
          {
            type: "code",
            title: "salom.ts + main.ts",
            code: `// salom.ts
export default function salom(ism: string): string {
  return "Salom, " + ism;
}

export const versiya = "1.0.0";

// main.ts
import salom, { versiya } from "./salom.js";
import * as modul from "./salom.js";

console.log(salom("Bek"));
console.log(versiya, modul.versiya);`,
            output: "Salom, Bek\n1.0.0 1.0.0",
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi"],
            rows: [
              ["<code>export const x</code>", "Nomlangan eksport"],
              ["<code>export default</code>", "Bitta standart eksport"],
              ["<code>import type</code>", "Faqat tip, JS'da o'chadi"],
              ["<code>export * from</code>", "Boshqa modulni qayta eksport qilish"],
              ["<code>import * as m</code>", "Butun modulni namespace sifatida olish"],
            ],
          },
        ],
        quiz: [
          {
            q: "import type nimani bildiradi?",
            options: ["Qiymatni import qiladi", "Modulni dinamik yuklaydi", "Default eksportni oladi", "Faqat tipni import qiladi va JS'da o'chadi"],
            answer: 3,
            explain: "import type faqat kompilyatsiya vaqtida ishlatiladi; chiqish JavaScript'da import qolmaydi.",
          },
          {
            q: "Default eksportni import qilganda nom qanday bo'ladi?",
            options: ["Faqat default nomi bilan", "Ixtiyoriy nom berish mumkin", "Faqat fayl nomi bilan", "Faqat katta harflar bilan"],
            answer: 1,
            explain: "Default import uchun lokal nomni o'zingiz tanlaysiz.",
          },
          {
            q: "NodeNext modul tizimida nisbiy import qanday yoziladi?",
            options: ["./matematika", "./matematika.js", "matematika.js", "/matematika.ts"],
            answer: 1,
            explain: "ESM Node'da nisbiy yo'l to'liq kengaytma bilan yoziladi, odatda .js.",
          },
        ],
      },
      {
        id: 36,
        title: "Namespace va declaration fayllari (.d.ts)",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>namespace</code> — nomlar to'qnashuvini oldini oluvchi eski guruhlash usuli. Zamonaviy ESM modullarida u kamdan-kam kerak, lekin eski kodda uchraydi. <code>.d.ts</code> fayllari esa JavaScript kutubxonalari uchun faqat tip ma'lumotini e'lon qiladi va hech qanday kod chiqarmaydi.",
          },
          {
            type: "code",
            title: "namespace.ts",
            code: `namespace Matematika {
  export const PI = 3.14;

  export function doiraYuzi(radius: number): number {
    return Number((PI * radius ** 2).toFixed(2));
  }
}

console.log(Matematika.doiraYuzi(2));
console.log(Matematika.PI);`,
            output: "12.56\n3.14",
          },
          {
            type: "p",
            html: "Namespace ichidagi a'zolar tashqaridan ko'rinishi uchun <code>export</code> bilan belgilanadi. <code>declare</code> esa \"bu mavjud, lekin implementatsiyasini men yozmayman\" degani. Shuning uchun ambient deklaratsiyalar faqat tip tekshiruvi uchun xizmat qiladi.",
          },
          {
            type: "code",
            title: "turlar.d.ts + main.ts",
            code: `// turlar.d.ts
declare interface Mahsulot {
  id: number;
  nom: string;
  narx: number;
}

// main.ts
const mahsulot: Mahsulot = {
  id: 1,
  nom: "Kitob",
  narx: 45000,
};

console.log(mahsulot.nom + ": " + mahsulot.narx);`,
            output: "Kitob: 45000",
          },
          {
            type: "note",
            variant: "warn",
            title: "Yangi loyihada namespace emas, modul",
            html: "Bugungi loyihalarda <code>import</code>/<code>export</code> afzal. <code>isolatedModules</code> yoqilgan bo'lsa, global namespace bilan muammo chiqishi mumkin. <code>.d.ts</code> esa uchinchi tomon JS kutubxonasini tiplashda asosiy vosita bo'lib qoladi.",
          },
          {
            type: "ul",
            items: [
              "<code>declare module \"nom\"</code> — modul uchun ambient tip e'lon qiladi.",
              "<code>declare global</code> — global obyektni kengaytiradi (modul ichida yoziladi).",
              "<code>declare const</code> — ish vaqtida mavjud konstantani tavsiflaydi.",
              "Deklaratsiya fayllari kompilyatsiyada tekshiriladi, lekin JS chiqarmaydi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Namespace a'zosini tashqaridan ko'rinadigan qilish uchun nima kerak?",
            options: ["public kalit so'zi", "readonly", "declare", "export kalit so'zi"],
            answer: 3,
            explain: "Namespace ichida export belgilanmagan a'zo faqat ichki ko'rinishda qoladi.",
          },
          {
            q: ".d.ts fayli kompilyatsiyada qanday chiqish beradi?",
            options: ["JavaScript fayl", "Source map", "Hech qanday JS chiqarmaydi", "JSON"],
            answer: 2,
            explain: "Declaration fayllari faqat tip ma'lumoti; ular JavaScript'ga aylanmaydi.",
          },
          {
            q: "declare kalit so'zining ma'nosi nima?",
            options: ["Mavjud nomning tipini e'lon qilish", "Implementatsiyani yaratish", "Faylni o'chirish", "Kodni minifikatsiya qilish"],
            answer: 0,
            explain: "declare faqat tip shartnomasini beradi, ish vaqtida kod yaratmaydi.",
          },
        ],
      },
      {
        id: 37,
        title: "Xatolar: unknown, custom Error va natija tipi",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Strict rejimda <code>catch</code> o'zgaruvchisi <code>unknown</code> bo'ladi — unga darhol <code>.message</code> yozib bo'lmaydi. Avval <code>instanceof Error</code> bilan tekshirish kerak. O'z xato klasslaringizni <code>Error</code> dan meros qilib, turini aniq ajratish mumkin.",
          },
          {
            type: "code",
            title: "xato.ts",
            code: `class ValidatsiyaXatosi extends Error {
  constructor(public maydon: string, xabar: string) {
    super(xabar);
    this.name = "ValidatsiyaXatosi";
  }
}

function tekshir(yosh: number): void {
  if (yosh < 0) {
    throw new ValidatsiyaXatosi("yosh", "Yosh manfiy bo'lmaydi");
  }
}

try {
  tekshir(-1);
} catch (xato: unknown) {
  if (xato instanceof ValidatsiyaXatosi) {
    console.log(xato.name, xato.maydon, xato.message);
  } else {
    console.log("Noma'lum xato");
  }
}`,
            output: "ValidatsiyaXatosi yosh Yosh manfiy bo'lmaydi",
          },
          {
            type: "p",
            html: "Har doim xato tashlash shart emas. Kutilishi mumkin bo'lgan holatlar (foydalanuvchi kiritmasi, nolga bo'lish) uchun <b>natija union</b> ko'proq nazorat beradi: chaqiruvchi <code>ok</code> ni tekshirishga majbur bo'ladi va try/catch oqimi chalkashmaydi.",
          },
          {
            type: "code",
            title: "natija.ts",
            code: `type Natija<T> =
  | { ok: true; qiymat: T }
  | { ok: false; xato: string };

function bolish(a: number, b: number): Natija<number> {
  if (b === 0) {
    return { ok: false, xato: "Nolga bo'lish mumkin emas" };
  }
  return { ok: true, qiymat: a / b };
}

const natija = bolish(10, 2);
console.log(natija.ok ? natija.qiymat : natija.xato);

const xatolik = bolish(1, 0);
console.log(xatolik.ok ? xatolik.qiymat : xatolik.xato);`,
            output: "5\nNolga bo'lish mumkin emas",
          },
          {
            type: "ul",
            items: [
              "Xato klassida <code>super(xabar)</code> chaqirilmasa, klass to'g'ri ishlamaydi.",
              "<code>this.name</code> ni o'zgartirish log va monitoringda turni ajratishga yordam beradi.",
              "Kutilmagan xatoni yuqori qatlamda ushlang, lekin uni jimgina yutmang.",
              "Natija tipi xatoni qiymat sifatida qaytaradi — bu funksional yondashuv.",
            ],
          },
        ],
        quiz: [
          {
            q: "strict rejimda catch (xato) o'zgaruvchisining tipi qanday?",
            options: ["any", "Error", "string", "unknown"],
            answer: 3,
            explain: "useUnknownInCatchVariables strict tarkibida yoqiladi; avval tekshirish kerak.",
          },
          {
            q: "Error'dan meros olgan klassda nima chaqirilishi shart?",
            options: ["this.init()", "super(xabar)", "Object.freeze", "console.log"],
            answer: 1,
            explain: "Bola konstruktorida super() chaqirilmasa, Error obyekti to'g'ri shakllanmaydi.",
          },
          {
            q: "Natija<T> unionining asosiy foydasi nima?",
            options: ["Xatoni tip bilan ifodalaydi va tekshirishga majbur qiladi", "Barcha xatolarni yashiradi", "try/catch ni tezlashtiradi", "Faqat sync kod uchun ishlaydi"],
            answer: 0,
            explain: "ok diskriminanti orqali muvaffaqiyat va xato tarmoqlari xavfsiz ajratiladi.",
          },
        ],
      },
      {
        id: 38,
        title: "Async/await va Promise tiplari",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<code>async</code> funksiya har doim <code>Promise&lt;T&gt;</code> qaytaradi. <code>await</code> Promise ochib, ichidagi <code>T</code> ni beradi va faqat async funksiya ichida ishlatiladi. Xatolar <code>try/catch</code> bilan ushlanadi; parallel ishlarni <code>Promise.all</code> bilan tezlashtirish mumkin.",
          },
          {
            type: "code",
            title: "tartib.ts",
            code: `function kut(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ishgaTushir(): Promise<void> {
  console.log("Boshlandi");
  await kut(10);
  console.log("Tugadi");
}

ishgaTushir();
console.log("Navbatdagi kod");`,
            output: "Boshlandi\nNavbatdagi kod\nTugadi",
          },
          {
            type: "p",
            html: "Yuqoridagi tartib event loop'ni ko'rsatadi: <code>await</code>gacha bo'lgan qism sinxron bajariladi, keyingi qatorlar davom etadi, timer tugagach async funksiya qolgan joyidan davom etadi. Shuning uchun <code>await</code> ni \"bloklash\" deb tushunmaslik kerak.",
          },
          {
            type: "code",
            title: "parallel.ts",
            code: `async function yukla(id: number, xato = false): Promise<string> {
  if (xato) throw new Error("Yuklanmadi: " + id);
  return "Fayl-" + id;
}

async function main(): Promise<void> {
  const [a, b] = await Promise.all([yukla(1), yukla(2)]);
  console.log(a, b);

  const natijalar = await Promise.allSettled([yukla(3), yukla(4, true)]);
  natijalar.forEach((natija) => console.log(natija.status));
}

main();`,
            output: "Fayl-1 Fayl-2\nfulfilled\nrejected",
          },
          {
            type: "table",
            head: ["Vosita", "Natija", "Xato bo'lsa"],
            rows: [
              ["<code>await p</code>", "<code>T</code>", "throw qiladi"],
              ["<code>Promise.all</code>", "<code>T[]</code> yoki tuple", "Birinchi xatoda reject"],
              ["<code>Promise.allSettled</code>", "Status obyektlari", "Hammasi tugashini kutadi"],
              ["<code>Promise.race</code>", "Birinchi tugagan", "Birinchi xato g'olib"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Parallel yuklash",
            html: "Mustaqil so'rovlarni ketma-ket <code>await</code> qilish vaqtni behuda sarflaydi. Ularni massivga yig'ib <code>Promise.all</code> bilan parallel yuboring. Natija tartibi massiv tartibiga mos qoladi.",
          },
        ],
        quiz: [
          {
            q: "async funksiyadan qaytarilgan oddiy qiymat qanday o'raladi?",
            options: ["Massivga aylanadi", "JSON'ga serializatsiya qilinadi", "Promise ichiga o'raladi", "Stringga aylantiriladi"],
            answer: 2,
            explain: "async funksiya qaytgan qiymatni avtomatik Promise ichiga o'raydi; await bilan ochiladi.",
          },
          {
            q: "await ifodasining natija tipi qanday bo'ladi?",
            options: ["Promise<T>", "void", "T", "unknown"],
            answer: 2,
            explain: "await Promise'ni ochib, ichidagi qiymat tipini beradi.",
          },
          {
            q: "Promise.all bitta Promise reject bo'lsa qanday xatti-harakat qiladi?",
            options: ["Butun Promise reject bo'ladi", "Barcha natijalarni qaytaradi", "Xatoni e'tiborsiz qoldiradi", "Faqat statuslarni beradi"],
            answer: 0,
            explain: "Promise.all birinchi reject'da to'xtaydi; barcha natijalar kerak bo'lsa allSettled ishlatiladi.",
          },
        ],
      },
      {
        id: 39,
        title: "Fetch API va HTTP javoblarini tiplash",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<code>fetch</code> Promise&lt;Response&gt; qaytaradi. <code>response.ok</code> 200–299 oralig'ini bildiradi; uni tekshirmasdan <code>json()</code> chaqirish xatoni yashirishi mumkin. <code>response.json()</code> tipi <code>any</code> bo'lgani uchun natijani darhol ishonchli deb hisoblamang.",
          },
          {
            type: "code",
            title: "post.ts",
            code: `interface Post {
  id: number;
  title: string;
}

async function postOl(id: number): Promise<Post> {
  const javob = await fetch("https://api.example.com/posts/" + id);
  if (!javob.ok) {
    throw new Error("HTTP " + javob.status);
  }
  return (await javob.json()) as Post;
}

globalThis.fetch = async () =>
  new Response(JSON.stringify({ id: 1, title: "TypeScript" }), { status: 200 });

postOl(1).then((post) => console.log(post.id, post.title));`,
            output: "1 TypeScript",
          },
          {
            type: "p",
            html: "Bu misolda tarmoq javobi deterministik bo'lishi uchun <code>fetch</code> almashtirilgan. Haqiqiy loyihada <code>as Post</code> faqat kompilyatorga ishonch bildiradi — API boshqa shakl qaytarsa, xato ish vaqtida chiqadi. Shuning uchun javobni schema (masalan, Zod) bilan tekshirish tavsiya etiladi.",
          },
          {
            type: "code",
            title: "xato.ts",
            code: `async function xavfsizOl(url: string): Promise<unknown> {
  const javob = await fetch(url);
  if (!javob.ok) {
    throw new Error("HTTP " + javob.status);
  }
  return javob.json();
}

globalThis.fetch = async () => new Response("Topilmadi", { status: 404 });

xavfsizOl("https://api.example.com/yoq")
  .then((malumot) => console.log("OK", malumot))
  .catch((xato: unknown) =>
    console.log(xato instanceof Error ? xato.message : "Noma'lum xato")
  );`,
            output: "HTTP 404",
          },
          {
            type: "ul",
            items: [
              "<code>response.status</code> — HTTP kodi, <code>response.ok</code> — muvaffaqiyat bayrog'i.",
              "<code>response.json()</code> — Promise qaytaradi, shuning uchun <code>await</code> kerak.",
              "POST so'rovda <code>method</code>, <code>headers</code> va <code>JSON.stringify</code> ishlatiladi.",
              "Tarmoq xatosi (DNS, offline) ham <code>catch</code> orqali ushlanadi.",
            ],
          },
        ],
        quiz: [
          {
            q: "fetch javobining muvaffaqiyatli ekanini qaysi xossa bildiradi?",
            options: ["response.status === 0", "response.json", "response.url", "response.ok"],
            answer: 3,
            explain: "response.ok status 200–299 oralig'ida true bo'ladi.",
          },
          {
            q: "response.json() qanday qiymat qaytaradi?",
            options: ["Obyektni darhol", "Promise, uni await qilish kerak", "Faqat string", "Response"],
            answer: 1,
            explain: "json() asinxron o'qiydi va Promise qaytaradi.",
          },
          {
            q: "as Post cast'i ish vaqtida javobni tekshiradimi?",
            options: ["Ha, har doim", "Yo'q, faqat kompilyatorga ishontiradi", "Faqat 404 da", "Faqat Node'da"],
            answer: 1,
            explain: "Type assertion kod chiqarmaydi; runtime validatsiya alohida kerak.",
          },
        ],
      },
      {
        id: 40,
        title: "Node.js muhitida TypeScript",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Node.js loyihasida TypeScript ishlatish uchun <code>typescript</code>, <code>@types/node</code> va ishga tushirish vositasi kerak. <code>tsx</code> TS fayllarni to'g'ridan-to'g'ri bajaradi; ishlab chiqarish uchun esa <code>tsc</code> bilan <code>dist</code>ga kompilyatsiya qilinadi. Node API'lari <code>node:</code> prefiksi bilan import qilinadi.",
          },
          {
            type: "code",
            title: "yollar.ts",
            code: `import { posix } from "node:path";

const yol = posix.join("src", "lib", "util.ts");

console.log(yol);
console.log(posix.basename(yol));
console.log(posix.extname(yol));`,
            output: "src/lib/util.ts\nutil.ts\n.ts",
          },
          {
            type: "p",
            html: "Fayl tizimi bilan ishlashda <code>node:fs/promises</code> asinxron API'sidan foydalaning. JSON faylni o'qib, <code>JSON.parse</code> natijasini tip bilan e'lon qilish mumkin, lekin tashqi fayl mazmuni ishonchsiz: schema tekshiruvi yoki himoyalangan parser afzal.",
          },
          {
            type: "code",
            title: "hisobot.ts",
            code: `import { readFile, writeFile } from "node:fs/promises";

interface Hisobot {
  ism: string;
  ball: number;
}

const hisobot: Hisobot = { ism: "Aziza", ball: 92 };
await writeFile("hisobot.json", JSON.stringify(hisobot), "utf8");

const matn = await readFile("hisobot.json", "utf8");
const oqilgan = JSON.parse(matn) as Hisobot;

console.log(oqilgan.ism, oqilgan.ball);`,
            output: "Aziza 92",
          },
          {
            type: "table",
            head: ["Buyruq / paket", "Vazifasi"],
            rows: [
              ["<code>npm i -D typescript tsx @types/node</code>", "Kompilyator, runner va Node tiplari"],
              ["<code>npx tsx src/index.ts</code>", "TS faylni to'g'ridan-to'g'ri ishga tushirish"],
              ["<code>npx tsc</code>", "JS chiqarish"],
              ["<code>node --watch dist/index.js</code>", "Natijani kuzatib qayta ishga tushirish"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Top-level await",
            html: "Yuqoridagi <code>await</code> faqat ESM modulda ishlaydi. <code>package.json</code>da <code>\"type\": \"module\"</code> va <code>tsconfig</code>da <code>module: \"NodeNext\"</code> bo'lsa, <code>tsx</code> ham, Node ham buni qo'llab-quvvatlaydi. CommonJS'da bunday yozuv xato beradi.",
          },
        ],
        quiz: [
          {
            q: "Node API'lari uchun tip ma'lumotini qaysi paket beradi?",
            options: ["node-typescript", "types-node", "ts-node", "@types/node"],
            answer: 3,
            explain: "@types/node fs, path, process kabi Node modullarining tiplarini taqdim etadi.",
          },
          {
            q: "tsx vositasining vazifasi nima?",
            options: ["Faqat testlarni bajarish", "Faqat formatlash", "TS faylni to'g'ridan-to'g'ri ishga tushirish", "Brauzer uchun bundle qilish"],
            answer: 2,
            explain: "tsx esbuild asosida TypeScript/ESM fayllarni kompilyatsiya qilib ishga tushiradi.",
          },
          {
            q: "Top-level await qaysi sharoitda ishlaydi?",
            options: ["Faqat ESM modulda", "Har qanday scriptda", "Faqat CommonJS'da", "Faqat brauzerda"],
            answer: 0,
            explain: "Top-level await ESM modul semantikasiga tayanadi; CommonJS'da mavjud emas.",
          },
        ],
      },
      {
        id: 41,
        title: "Express bilan tipli REST API",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Express'da handler funksiyalari <code>Request</code> va <code>Response</code> tiplarini oladi. <code>Request&lt;Params, ResBody, ReqBody, ReqQuery&gt;</code> generic'lari orqali URL parametri, javob va tana shaklini aniq belgilash mumkin. JSON tanani o'qish uchun <code>express.json()</code> middleware'i shart.",
          },
          {
            type: "code",
            title: "server.ts",
            code: `import express, { type Request, type Response } from "express";

interface Talaba {
  id: number;
  ism: string;
}

const talabalar: Talaba[] = [
  { id: 1, ism: "Aziza" },
  { id: 2, ism: "Bek" },
];

const app = express();
app.use(express.json());

app.get(
  "/talabalar/:id",
  (req: Request<{ id: string }>, res: Response<Talaba | { xato: string }>) => {
    const talaba = talabalar.find((t) => t.id === Number(req.params.id));
    if (!talaba) {
      res.status(404).json({ xato: "Topilmadi" });
      return;
    }
    res.json(talaba);
  }
);

app.listen(3000, () => console.log("Server: http://localhost:3000"));`,
            output: "Server: http://localhost:3000",
          },
          {
            type: "p",
            html: "E'tibor bering: <code>req.params.id</code> har doim matn. Uni <code>Number</code> yoki <code>parseInt</code> bilan songa aylantirish kerak. Javob qaytarishdan oldin <code>return</code> qo'yish <code>undefined</code> bilan davom etib ketishning oldini oladi.",
          },
          {
            type: "code",
            title: "validatsiya.ts",
            code: `import express, { type Request, type Response } from "express";

interface YangiTalaba {
  ism: string;
  yosh: number;
}

function talabaValid(body: unknown): body is YangiTalaba {
  if (typeof body !== "object" || body === null) return false;
  const nomzod = body as { ism?: unknown; yosh?: unknown };
  return typeof nomzod.ism === "string" && typeof nomzod.yosh === "number";
}

const app = express();
app.use(express.json());

app.post("/talabalar", (req: Request, res: Response) => {
  if (!talabaValid(req.body)) {
    res.status(400).json({ xato: "Noto'g'ri ma'lumot" });
    return;
  }
  res.status(201).json({ id: 3, ...req.body });
});

console.log(talabaValid({ ism: "Dilnoza", yosh: 18 }));
console.log(talabaValid({ ism: "Dilnoza" }));`,
            output: "true\nfalse",
          },
          {
            type: "table",
            head: ["Vazifa", "Yechim"],
            rows: [
              ["JSON tanani o'qish", "<code>app.use(express.json())</code>"],
              ["URL parametrini tiplash", "<code>Request&lt;{ id: string }&gt;</code>"],
              ["Muvaffaqiyatli yaratish", "<code>res.status(201).json(...)</code>"],
              ["Xato javobi", "<code>res.status(400).json({ xato })</code>"],
              ["Yo'nalishlarni ajratish", "<code>express.Router()</code>"],
            ],
          },
        ],
        quiz: [
          {
            q: "Express'da JSON so'rov tanasini o'qish uchun qaysi middleware kerak?",
            options: ["express.static()", "express.urlencoded() faqat", "cookieParser()", "express.json()"],
            answer: 3,
            explain: "express.json() kelgan JSON tanani parse qilib req.body ga joylaydi.",
          },
          {
            q: "Request<{ id: string }> generic'i nimani tiplaydi?",
            options: ["Javob tanasini", "URL parametrlarini", "Query stringni", "Headerni"],
            answer: 1,
            explain: "Birinchi generic parametr route parametrlarining shakli hisoblanadi.",
          },
          {
            q: "Yangi resurs yaratilganda qaysi HTTP status odatiy?",
            options: ["201", "200", "204", "404"],
            answer: 0,
            explain: "201 Created yangi resurs muvaffaqiyatli yaratilganini bildiradi.",
          },
        ],
      },
      {
        id: 42,
        title: "React va TypeScript: props va state",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "React komponentining props'i interfeys bilan tavsiflanadi. State esa <code>useState&lt;T&gt;()</code> orqali tiplanadi. TSX fayllarida JSX bilan birga oddiy TypeScript yoziladi; noto'g'ri prop nomi yoki tipi kompilyatsiyada ushlanadi.",
          },
          {
            type: "code",
            title: "Salom.tsx",
            code: `import { renderToStaticMarkup } from "react-dom/server";

interface SalomProps {
  ism: string;
  yosh?: number;
}

function Salom({ ism, yosh }: SalomProps) {
  const xabar = "Salom, " + ism + "!" + (yosh ? " Yosh: " + yosh : "");
  return <p>{xabar}</p>;
}

const html = renderToStaticMarkup(<Salom ism="Aziza" yosh={17} />);
console.log(html);`,
            output: "<p>Salom, Aziza! Yosh: 17</p>",
          },
          {
            type: "p",
            html: "Props'ni komponent ichida o'zgartirmang — ular o'qish uchun. State'ni yangilash uchun <code>setSon</code> kabi setter ishlatiladi. Typed state bilan <code>son + 1</code> kabi amallar xavfsiz bo'ladi, noto'g'ri tip esa darhol xato beradi.",
          },
          {
            type: "code",
            title: "Hisoblagich.tsx",
            code: `import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

function Hisoblagich() {
  const [son, setSon] = useState<number>(0);
  return <button onClick={() => setSon(son + 1)}>{"Bosildi: " + son}</button>;
}

console.log(renderToStaticMarkup(<Hisoblagich />));
console.log(typeof Hisoblagich);`,
            output: "<button>Bosildi: 0</button>\nfunction",
          },
          {
            type: "table",
            head: ["Holat", "Yozuv"],
            rows: [
              ["Props interfeysi", "<code>interface Props { ism: string }</code>"],
              ["State", "<code>const [son, setSon] = useState&lt;number&gt;(0)</code>"],
              ["Input hodisasi", "<code>React.ChangeEvent&lt;HTMLInputElement&gt;</code>"],
              ["Click hodisasi", "<code>React.MouseEvent&lt;HTMLButtonElement&gt;</code>"],
              ["Bolalar", "<code>React.ReactNode</code>"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Boshlang'ich holat",
            html: "<code>useState(0)</code> da tip avtomatik <code>number</code> bo'ladi, lekin murakkab holatlarda generic'ni ochiq yozing: <code>useState&lt;Vazifa[]&gt;([])</code>. Bo'sh massiv aks holda <code>never[]</code> bo'lib qolishi mumkin.",
          },
        ],
        quiz: [
          {
            q: "React komponent props'i qanday tiplanadi?",
            options: ["Faqat any bilan", "useEffect bilan", "Props interfeysi bilan", "CSS class bilan"],
            answer: 2,
            explain: "Props shakli interfeys yoki type bilan yoziladi va komponent parametriga qo'llanadi.",
          },
          {
            q: "useState<number>(0) yozuvida generic nima vazifani bajaradi?",
            options: ["Komponent nomini o'zgartiradi", "Faqat 0 ni saqlaydi", "State tipini number qiladi", "State'ni readonly qiladi"],
            answer: 2,
            explain: "Generic state va setter tipini belgilaydi; setter faqat number qabul qiladi.",
          },
          {
            q: "Input o'zgarish hodisasi uchun qaysi tip mos?",
            options: ["React.ChangeEvent<HTMLInputElement>", "React.MouseEvent<HTMLDivElement>", "React.FormEvent<HTMLFormElement>", "string"],
            answer: 0,
            explain: "ChangeEvent<HTMLInputElement> inputdagi o'zgarishni tavsiflaydi.",
          },
        ],
      },
      {
        id: 43,
        title: "React: generik komponentlar, hook va context",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Generik komponent bir xil mantiqni turli ma'lumot shakllari uchun qayta ishlatadi. Render funksiyalari (<code>kalit</code>, <code>korsat</code>) tipni saqlaydi. Context esa daraxt bo'ylab qiymat uzatadi; standart qiymat <code>undefined</code> bo'lsa, hook orqali himoya qilish odat tusiga kiradi.",
          },
          {
            type: "code",
            title: "Royxat.tsx",
            code: `import { renderToStaticMarkup } from "react-dom/server";

interface RoyxatProps<T> {
  elementlar: T[];
  kalit: (element: T) => string;
  korsat: (element: T) => string;
}

function Royxat<T>({ elementlar, kalit, korsat }: RoyxatProps<T>) {
  return (
    <ul>
      {elementlar.map((element) => (
        <li key={kalit(element)}>{korsat(element)}</li>
      ))}
    </ul>
  );
}

const html = renderToStaticMarkup(
  <Royxat
    elementlar={[{ id: "1", ism: "Aziza" }]}
    kalit={(element) => element.id}
    korsat={(element) => element.ism}
  />
);

console.log(html);`,
            output: "<ul><li>Aziza</li></ul>",
          },
          {
            type: "p",
            html: "Context yaratishda <code>createContext&lt;Mavzu | undefined&gt;(undefined)</code> yozuvi provider yo'qligini kompilyatorga bildiradi. Maxsus <code>useMavzu</code> hook'i qiymatni tekshiradi va yo'q bo'lsa tushunarli xato tashlaydi. Bu \"undefined bilan ishlash\" xatolarini oldini oladi.",
          },
          {
            type: "code",
            title: "Mavzu.tsx",
            code: `import { createContext, useContext } from "react";
import { renderToStaticMarkup } from "react-dom/server";

interface Mavzu {
  rang: string;
}

const MavzuContext = createContext<Mavzu | undefined>(undefined);

function useMavzu(): Mavzu {
  const mavzu = useContext(MavzuContext);
  if (mavzu === undefined) {
    throw new Error("MavzuProvider topilmadi");
  }
  return mavzu;
}

function Sarlavha() {
  const mavzu = useMavzu();
  return <h1 style={{ color: mavzu.rang }}>Noldan</h1>;
}

const html = renderToStaticMarkup(
  <MavzuContext.Provider value={{ rang: "blue" }}>
    <Sarlavha />
  </MavzuContext.Provider>
);

console.log(html);`,
            output: "<h1 style=\"color:blue\">Noldan</h1>",
          },
          {
            type: "ul",
            items: [
              "Generik komponentda tip JSX atributlaridan avtomatik inferens qilinadi.",
              "Ro'yxatda <code>key</code> barqaror va unikal bo'lishi shart.",
              "Context uchun standart qiymatni <code>undefined</code> qilib, hook'da tekshiring.",
              "Custom hook nomi <code>use</code> bilan boshlanadi va faqat komponent/hook ichida chaqiriladi.",
            ],
          },
        ],
        quiz: [
          {
            q: "Generik Royxat komponentida T qanday aniqlanadi?",
            options: ["Har doim any", "Faqat qo'lda ko'rsatiladi", "CSS orqali", "elementlar prop'idan inferens qilinadi"],
            answer: 3,
            explain: "elementlar massivi tipidan T avtomatik aniqlanadi; kalit va korsat ham shu tipga moslashadi.",
          },
          {
            q: "Context standart qiymati undefined bo'lsa, hook'da nima qilish tavsiya etiladi?",
            options: ["Undefinedni e'tiborsiz qoldirish", "Tekshirib, yo'q bo'lsa xato tashlash", "Har doim null qaytarish", "Contextni o'chirish"],
            answer: 1,
            explain: "Provider yo'qligini aniqlash uchun tekshiruv va tushunarli xato eng xavfsiz yechim.",
          },
          {
            q: "Ro'yxat elementlaridagi key nima uchun kerak?",
            options: ["Faqat stil uchun", "React elementlarni barqaror aniqlashi uchun", "TypeScript tipi uchun", "Server so'rovi uchun"],
            answer: 1,
            explain: "key React'ga ro'yxat o'zgarishlarida elementlarni to'g'ri moslashtirishga yordam beradi.",
          },
        ],
      },
      {
        id: 44,
        title: "Testlash: Vitest bilan tipli unit testlar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Unit test funksiyaning kutilgan xatti-harakatini avtomatik tekshiradi. Vitest TS'ni to'g'ridan-to'g'ri tushunadi, <code>describe</code>/<code>it</code> bilan testlarni guruhlaydi va <code>expect</code> bilan taqqoslaydi. Test fayli odatda <code>*.test.ts</code> deb nomlanadi.",
          },
          {
            type: "code",
            title: "matematika.test.ts",
            code: `import { describe, expect, it } from "vitest";
import { bolish } from "./matematika";

describe("bolish", () => {
  it("musbat sonlarni bo'ladi", () => {
    expect(bolish(10, 2)).toBe(5);
  });

  it("nolga bo'lishda xato beradi", () => {
    expect(() => bolish(1, 0)).toThrow("Nolga bo'lish mumkin emas");
  });
});`,
            output: "✓ matematika.test.ts (2 tests) 12ms\n\nTest Files  1 passed (1)\n     Tests  2 passed (2)",
          },
          {
            type: "p",
            html: "Misolda <code>matematika.ts</code>da <code>bolish(a, b)</code>, <code>api.ts</code>da esa <code>postOl(id)</code> funksiyasi bor deb hisoblanadi. <code>toBe</code> aniq tenglikni, <code>toEqual</code> chuqur tenglikni tekshiradi. Xato tashlanishini <code>toThrow</code>, chaqiruvlar sonini <code>toHaveBeenCalledTimes</code> bilan tekshirish mumkin. Testlar bir-biridan mustaqil bo'lsin: har biri o'z holatini yaratishi kerak.",
          },
          {
            type: "code",
            title: "api.test.ts",
            code: `import { expect, it, vi } from "vitest";
import { postOl } from "./api";

it("postni yuklaydi", async () => {
  const mockFetch = vi.fn(async () =>
    new Response(JSON.stringify({ id: 1, title: "TypeScript" }), {
      status: 200,
    })
  );

  vi.stubGlobal("fetch", mockFetch);

  const post = await postOl(1);

  expect(post.title).toBe("TypeScript");
  expect(mockFetch).toHaveBeenCalledTimes(1);

  vi.unstubAllGlobals();
});`,
            output: "✓ api.test.ts (1 test)\n\nTest Files  1 passed (1)\n     Tests  1 passed (1)",
          },
          {
            type: "table",
            head: ["API", "Vazifasi"],
            rows: [
              ["<code>describe</code>", "Testlarni guruhlash"],
              ["<code>it</code> / <code>test</code>", "Bitta stsenariy"],
              ["<code>expect</code>", "Natijani taqqoslash"],
              ["<code>vi.fn()</code>", "Soxta funksiya yaratish"],
              ["<code>vi.stubGlobal</code>", "Global obyektni vaqtincha almashtirish"],
            ],
          },
          {
            type: "note",
            variant: "warn",
            title: "Mock'ni tozalang",
            html: "Global <code>fetch</code>ni almashtirgan testdan keyin <code>vi.unstubAllGlobals()</code> chaqirmasangiz, keyingi testlar ham soxta funksiyani ko'rishi mumkin. Yaxshiroq yechim — <code>afterEach</code> ichida tozalash.",
          },
        ],
        quiz: [
          {
            q: "Vitest'da qiymatlar aniq tengligini qaysi matcher tekshiradi?",
            options: ["toThrow", "toHaveLength", "toMatch", "toBe"],
            answer: 3,
            explain: "toBe Object.is asosida aniq tenglikni tekshiradi; obyektlar uchun toEqual mos.",
          },
          {
            q: "vi.fn() nima yaratadi?",
            options: ["Yangi test faylini", "HTTP server", "Chaqiruvlarni qayd qiluvchi soxta funksiya", "TypeScript tipini"],
            answer: 2,
            explain: "vi.fn() mock funksiya yaratadi; chaqiruvlar soni va argumentlarini tekshirish mumkin.",
          },
          {
            q: "async test funksiyasida await ishlatilsa, test qachon tugaydi?",
            options: ["Promise hal bo'lgach", "Darhol", "Faqat xato bo'lsa", "Hech qachon"],
            answer: 0,
            explain: "Vitest qaytarilgan Promise'ni kutadi; await tugagach assertionlar bajariladi.",
          },
        ],
      },
      {
        id: 45,
        title: "tsconfig.json: strict, lib va modul sozlamalari",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "<code>tsconfig.json</code> kompilyator xatti-harakatini boshqaradi. <code>target</code> chiqadigan JavaScript sintaksisini, <code>module</code>/<code>moduleResolution</code> import tizimini, <code>lib</code> esa mavjud global API'larni belgilaydi. <code>strict: true</code> bir necha qat'iy tekshiruvni yoqadi.",
          },
          {
            type: "code",
            title: "indeks.ts",
            code: `const ranglar: string[] = ["qizil", "yashil"];

const birinchi = ranglar[0];

console.log(birinchi?.toUpperCase() ?? "yo'q");
console.log(ranglar.length);`,
            output: "QIZIL\n2",
          },
          {
            type: "p",
            html: "<code>noUncheckedIndexedAccess</code> yoqilganda <code>ranglar[0]</code> tipi <code>string | undefined</code> bo'ladi — bu massiv chegarasidan chiqish xatolarini kamaytiradi. <code>exactOptionalPropertyTypes</code> esa ixtiyoriy xossaga <code>undefined</code> yozishni alohida nazorat qiladi.",
          },
          {
            type: "code",
            title: "sozlama.ts",
            code: `interface Sozlama {
  rejim?: "dev" | "prod";
  port?: number;
}

const sozlama: Sozlama = {};

console.log(sozlama.rejim ?? "dev");
console.log(sozlama.port ?? 3000);`,
            output: "dev\n3000",
          },
          {
            type: "table",
            head: ["Sozlama", "Vazifasi"],
            rows: [
              ["<code>target: \"ES2022\"</code>", "Chiqish JS sintaksisi va kutubxona imkoniyatlari"],
              ["<code>module: \"NodeNext\"</code>", "Node ESM/CJS qoidalari"],
              ["<code>moduleResolution: \"Bundler\"</code>", "Vite/esbuild uslubidagi importlar"],
              ["<code>strict: true</code>", "noImplicitAny, strictNullChecks va boshqalar"],
              ["<code>lib: [\"ES2022\", \"DOM\"]</code>", "Brauzer va til global API'lari"],
              ["<code>noEmit: true</code>", "Faqat tekshirish, JS chiqarmaslik"],
              ["<code>paths</code>", "Import alias'lari (<code>@/...</code>)"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "strict oilasi",
            html: "<code>strict</code> — bitta bayroq emas, bir necha tekshiruv to'plami. <code>noUncheckedIndexedAccess</code> va <code>exactOptionalPropertyTypes</code> unga kirmaydi; ularni alohida yoqish kerak. Yangi loyihada strict'ni boshidan yoqing — keyin qo'shish ancha og'riqli.",
          },
        ],
        quiz: [
          {
            q: "strict: true qaysi tekshiruvni o'z ichiga olmaydi?",
            options: ["noImplicitAny", "strictNullChecks", "strictFunctionTypes", "noUncheckedIndexedAccess"],
            answer: 3,
            explain: "noUncheckedIndexedAccess alohida yoqiladi; strict oilasiga noImplicitAny, strictNullChecks va boshqalar kiradi.",
          },
          {
            q: "npx tsc --noEmit buyrug'i nima qiladi?",
            options: ["JS chiqaradi", "Faqat tip tekshiradi, fayl yozmaydi", "Testlarni ishga tushiradi", "tsconfig yaratadi"],
            answer: 1,
            explain: "--noEmit kompilyatsiya natijasini yozmasdan faqat xatolarni tekshiradi.",
          },
          {
            q: "target sozlamasi nimaga ta'sir qiladi?",
            options: ["Chiqadigan JavaScript sintaksisiga", "Faqat fayl nomiga", "Faqat testlarga", "Faqat CSS'ga"],
            answer: 0,
            explain: "target qaysi JS versiyasi uchun kod tushirilishini belgilaydi.",
          },
        ],
      },
      {
        id: 46,
        title: "Build va deploy: tsc, source map va CI",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Build — TypeScript'ni ishga tayyor JavaScript'ga aylantirish. <code>tsc</code> tiplarni tekshirib, <code>outDir</code>ga JS yozadi. Server loyihalarida ko'pincha <code>tsc</code>, brauzer loyihalarida esa Vite yoki esbuild bundle qiladi. Deploy oldidan build va testlar CI'da avtomatik bajarilishi kerak.",
          },
          {
            type: "code",
            title: "env.ts",
            code: `const port = Number(process.env.PORT ?? "3000");

if (!Number.isInteger(port) || port <= 0) {
  throw new Error("PORT musbat butun son bo'lishi kerak");
}

console.log("Port:", port);`,
            output: "Port: 3000",
          },
          {
            type: "p",
            html: "Muhit o'zgaruvchilari har doim matn yoki <code>undefined</code>. Ularni <code>Number</code> bilan aylantirib, qiymatni tekshiring. Build vaqtida <code>NODE_ENV=production</code> qo'yish, konfiguratsiyani kodga yozmaslik va sirlarni (token, parol) repoga qo'shmaslik muhim.",
          },
          {
            type: "code",
            title: "deploy.ts",
            code: `interface DeploySozlamasi {
  outDir: string;
  sourcemap: boolean;
  minify: boolean;
}

const sozlama = {
  outDir: "dist",
  sourcemap: true,
  minify: false,
} satisfies DeploySozlamasi;

console.log(sozlama.outDir, sozlama.sourcemap);
console.log(Object.keys(sozlama).length);`,
            output: "dist true\n3",
          },
          {
            type: "table",
            head: ["Qadam", "Buyruq / sozlama"],
            rows: [
              ["Tip tekshirish", "<code>npx tsc --noEmit</code>"],
              ["Build", "<code>npx tsc</code> yoki <code>npm run build</code>"],
              ["Source map", "<code>\"sourceMap\": true</code>"],
              ["Deklaratsiya", "<code>\"declaration\": true</code>"],
              ["CI o'rnatish", "<code>npm ci</code>"],
              ["Ishga tushirish", "<code>node dist/index.js</code>"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Deploy tartibi",
            html: "CI'da <code>npm ci</code> → <code>npm run typecheck</code> → <code>npm test</code> → <code>npm run build</code> ketma-ketligini qo'llang. Faqat build muvaffaqiyatli bo'lsa deploy qiling. <code>dist</code>ni repoga qo'shmang; u har buildda qayta yaratiladi.",
          },
        ],
        quiz: [
          {
            q: "sourceMap: true nima uchun foydali?",
            options: ["Kodni minifikatsiya qiladi", "Tiplarni tekshiradi", "Fayl hajmini oshiradi, lekin xatoni manba TS qatoriga bog'laydi", "Testlarni avtomatik yozadi"],
            answer: 2,
            explain: "Source map stack trace'dagi JS qatorini asl TypeScript manbasiga moslashtiradi.",
          },
          {
            q: "CI muhitida bog'liqliklarni toza o'rnatish uchun qaysi buyruq afzal?",
            options: ["npm install", "npm update", "npm ci", "npx npm"],
            answer: 2,
            explain: "npm ci lock faylga qat'iy tayanadi va toza, takrorlanadigan o'rnatish beradi.",
          },
          {
            q: "declaration: true sozlamasi nima yaratadi?",
            options: [".d.ts deklaratsiya fayllari", "CSS fayllari", "Test hisobotlari", "Docker image"],
            answer: 0,
            explain: "declaration true bo'lsa, tsc har bir modul uchun .d.ts tip faylini chiqaradi.",
          },
        ],
      },
      {
        id: 47,
        title: "Loyiha 1: tipli CLI vazifa menejeri",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi o'rganganlarimizni bitta amaliy loyihaga yig'amiz: konsoldan ishlaydigan vazifa menejeri. Domen tiplarini alohida faylga ajratamiz, biznes qoidalarni funksiyalarga joylaymiz, CLI qatlami esa faqat argumentlarni o'qib, xizmatni chaqiradi.",
          },
          {
            type: "code",
            title: "domain.ts",
            code: `type Holat = "yangi" | "bajarilgan";

interface Vazifa {
  id: number;
  matn: string;
  holat: Holat;
}

const vazifalar: Vazifa[] = [];

function qosh(matn: string): Vazifa {
  const vazifa: Vazifa = { id: vazifalar.length + 1, matn, holat: "yangi" };
  vazifalar.push(vazifa);
  return vazifa;
}

function bajar(id: number): boolean {
  const vazifa = vazifalar.find((element) => element.id === id);
  if (vazifa === undefined) return false;
  vazifa.holat = "bajarilgan";
  return true;
}

function hisobot(): string {
  const tugallangan = vazifalar.filter((v) => v.holat === "bajarilgan").length;
  return tugallangan + "/" + vazifalar.length + " bajarildi";
}

qosh("TypeScript o'rganish");
qosh("Loyihani yig'ish");
bajar(1);

console.log(hisobot());
console.log(vazifalar.map((v) => v.id + ":" + v.holat).join(", "));`,
            output: "1/2 bajarildi\n1:bajarilgan, 2:yangi",
          },
          {
            type: "p",
            html: "<code>Holat</code> union'i faqat ikki qiymatga ruxsat beradi. Yangi holat qo'shsangiz, <code>switch</code> yoki shartlar to'liqligini kompilyator tekshiradi. <code>id</code>ni massiv uzunligidan olish o'quv loyihasi uchun yetarli; haqiqiy tizimda alohida hisoblagich yoki ma'lumotlar bazasi ishlatiladi.",
          },
          {
            type: "code",
            title: "cli.ts",
            code: `interface Buyruq {
  amal: "qosh" | "bajar" | "royxat";
  argument?: string;
}

function buyruqOqi(args: string[]): Buyruq {
  const [amal, argument] = args;

  if (amal === "qosh" || amal === "bajar") {
    if (argument === undefined) {
      throw new Error(amal + " uchun argument kerak");
    }
    return { amal, argument };
  }

  return { amal: "royxat" };
}

const args = process.argv.slice(2);

console.log(JSON.stringify(buyruqOqi(["qosh", "Kitob o'qish"])));
console.log(JSON.stringify(buyruqOqi(["royxat"])));
console.log(args.length);`,
            output: "{\"amal\":\"qosh\",\"argument\":\"Kitob o'qish\"}\n{\"amal\":\"royxat\"}\n0",
          },
          {
            type: "table",
            head: ["Fayl", "Vazifasi"],
            rows: [
              ["<code>src/domain.ts</code>", "Vazifa tipi va biznes qoidalar"],
              ["<code>src/store.ts</code>", "Ma'lumotni saqlash (xotira yoki fayl)"],
              ["<code>src/cli.ts</code>", "Argumentlarni o'qish va chiqish"],
              ["<code>src/index.ts</code>", "Kirish nuqtasi"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Keyingi qadam",
            html: "<code>process.argv.slice(2)</code> birinchi ikki elementni (node yo'li va skript yo'li) tashlab yuboradi. Keyingi bosqichda vazifalarni JSON faylga saqlang, <code>tsx src/cli.ts qosh \"...\"</code> bilan sinab ko'ring va xatolarni <code>try/catch</code> bilan chiroyli chiqaring.",
          },
        ],
        quiz: [
          {
            q: "CLI argumentlarini olish uchun qaysi yozuv ishlatiladi?",
            options: ["process.args", "argv.slice(1)", "console.argv", "process.argv.slice(2)"],
            answer: 3,
            explain: "Birinchi ikki element node va skript yo'li; foydalanuvchi argumentlari 2-indeksdan boshlanadi.",
          },
          {
            q: "Holat tipini \"yangi\" | \"bajarilgan\" qilishning foydasi nima?",
            options: ["Kodni avtomatik saqlaydi", "Noto'g'ri holat qiymatini kompilyator rad etadi", "Ma'lumotlar bazasini yaratadi", "Faylni siqadi"],
            answer: 1,
            explain: "Literal union faqat ruxsat etilgan holatlarni qabul qiladi va xatoni oldindan ushlaydi.",
          },
          {
            q: "bajar funksiyasi mavjud bo'lmagan id uchun nima qaytaradi?",
            options: ["true", "false", "throw", "undefined"],
            answer: 1,
            explain: "find topmasa undefined bo'ladi; funksiya false qaytarib muvaffaqiyatsizlikni bildiradi.",
          },
        ],
      },
      {
        id: 48,
        title: "Loyiha 2: Express API va validatsiya",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Ikkinchi loyiha — vazifalar uchun REST API. Marshrutlar, so'rov validatsiyasi va status kodlarini tipli handler'lar bilan yozamiz. Ma'lumot xotirada saqlanadi: bu o'quv loyihasi, keyin uni repository ortiga ko'chirish mumkin.",
          },
          {
            type: "code",
            title: "server.ts",
            code: `import express, { type Request, type Response } from "express";

interface Vazifa {
  id: number;
  matn: string;
  bajarilgan: boolean;
}

let keyingiId = 3;
const vazifalar: Vazifa[] = [
  { id: 1, matn: "TypeScript", bajarilgan: true },
  { id: 2, matn: "API yozish", bajarilgan: false },
];

const app = express();
app.use(express.json());

app.get("/vazifalar", (_req: Request, res: Response<Vazifa[]>) => {
  res.json(vazifalar);
});

app.post(
  "/vazifalar",
  (
    req: Request<Record<string, never>, Vazifa | { xato: string }, { matn?: unknown }>,
    res: Response<Vazifa | { xato: string }>
  ) => {
    if (typeof req.body.matn !== "string" || req.body.matn.trim() === "") {
      res.status(400).json({ xato: "matn majburiy" });
      return;
    }
    const vazifa: Vazifa = {
      id: keyingiId++,
      matn: req.body.matn.trim(),
      bajarilgan: false,
    };
    vazifalar.push(vazifa);
    res.status(201).json(vazifa);
  }
);

console.log("API tayyor: " + vazifalar.length + " vazifa");`,
            output: "API tayyor: 2 vazifa",
          },
          {
            type: "p",
            html: "Quyidagi PATCH marshruti yuqoridagi <code>server.ts</code> faylining davomi. Validatsiya handler ichida bo'lsa, har bir marshrutda takrorlanadi. Uni alohida funksiya yoki middleware'ga chiqarish mumkin. Muhim qoida: noto'g'ri kirish uchun 400, topilmagan resurs uchun 404, yaratish uchun 201 qaytaring.",
          },
          {
            type: "code",
            title: "server.ts (davomi)",
            code: `app.patch(
  "/vazifalar/:id",
  (
    req: Request<{ id: string }, Vazifa | { xato: string }, { bajarilgan?: unknown }>,
    res: Response<Vazifa | { xato: string }>
  ) => {
    const vazifa = vazifalar.find((element) => element.id === Number(req.params.id));

    if (vazifa === undefined) {
      res.status(404).json({ xato: "Topilmadi" });
      return;
    }

    if (typeof req.body.bajarilgan !== "boolean") {
      res.status(400).json({ xato: "bajarilgan boolean bo'lsin" });
      return;
    }

    vazifa.bajarilgan = req.body.bajarilgan;
    res.json(vazifa);
  }
);

console.log("PATCH /vazifalar/:id qo'shildi");
app.listen(3000, () => console.log("API: http://localhost:3000"));`,
            output: "PATCH /vazifalar/:id qo'shildi\nAPI: http://localhost:3000",
          },
          {
            type: "table",
            head: ["Metod", "Yo'l", "Natija"],
            rows: [
              ["GET", "<code>/vazifalar</code>", "200, massiv"],
              ["POST", "<code>/vazifalar</code>", "201 yoki 400"],
              ["PATCH", "<code>/vazifalar/:id</code>", "200, 400 yoki 404"],
              ["GET", "<code>/vazifalar/:id</code>", "200 yoki 404"],
            ],
          },
          {
            type: "note",
            variant: "warn",
            title: "Xotira API chegarasi",
            html: "Server qayta ishga tushsa, xotiradagi ma'lumot yo'qoladi. Haqiqiy loyihada ma'lumotlar bazasi, migratsiya va autentifikatsiya qo'shiladi. Shunga qaramay, tipli marshrutlar va validatsiya o'sha yerda ham bir xil ishlaydi.",
          },
        ],
        quiz: [
          {
            q: "PATCH metodi odatda nimani bildiradi?",
            options: ["Resursni butunlay o'chirish", "Yangi resurs yaratish", "Faqat o'qish", "Resursni qisman yangilash"],
            answer: 3,
            explain: "PATCH mavjud resursning bir qismini yangilaydi; PUT to'liq almashtirishga moyil.",
          },
          {
            q: "POST handler'da muvaffaqiyatli yaratilganda qaysi status qaytariladi?",
            options: ["301", "404", "201", "500"],
            answer: 2,
            explain: "201 Created yangi resurs yaratilganini bildiradi.",
          },
          {
            q: "Request<{ id: string }, ...> dagi birinchi generic nima?",
            options: ["URL parametrlari shakli", "Javob tanasi", "Query parametrlari", "Headerlar"],
            answer: 0,
            explain: "Birinchi generic params tipini, keyingilari res body, req body va queryni bildiradi.",
          },
        ],
      },
      {
        id: 49,
        title: "Loyiha 3: React ilova va yakuniy sayqal",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Uchinchi loyiha — vazifalar API'sini ko'rsatadigan React interfeysi. API mijozi generic funksiya bilan tiplanadi, komponent esa yuklanish va xato holatlarini boshqaradi. Bu yerda fetch, React va TypeScript birgalikda ishlaydi.",
          },
          {
            type: "code",
            title: "api.ts",
            code: `interface Vazifa {
  id: number;
  matn: string;
  bajarilgan: boolean;
}

async function jsonOl<T>(url: string): Promise<T> {
  const javob = await fetch(url);
  if (!javob.ok) {
    throw new Error("HTTP " + javob.status);
  }
  return (await javob.json()) as T;
}

globalThis.fetch = async () =>
  new Response(
    JSON.stringify([
      { id: 1, matn: "TypeScript", bajarilgan: true },
      { id: 2, matn: "API", bajarilgan: false },
    ]),
    { status: 200 }
  );

jsonOl<Vazifa[]>("/api/vazifalar").then((vazifalar) => {
  const qolgan = vazifalar.filter((vazifa) => !vazifa.bajarilgan).length;
  console.log(qolgan);
});`,
            output: "1",
          },
          {
            type: "p",
            html: "<code>jsonOl&lt;T&gt;</code> qulay, lekin <code>as T</code> ish vaqtida tekshirmaydi. Ishlab chiqarishda javobni schema bilan validatsiya qiling yoki <code>unknown</code> qaytarib, tip guard orqali tekshiring. Shunda API shakli o'zgarsa, foydalanuvchi oq ekran o'rniga tushunarli xato ko'radi.",
          },
          {
            type: "code",
            title: "VazifaRoyxati.tsx",
            code: `import { renderToStaticMarkup } from "react-dom/server";

interface Vazifa {
  id: number;
  matn: string;
  bajarilgan: boolean;
}

interface Props {
  vazifalar: Vazifa[];
}

function VazifaRoyxati({ vazifalar }: Props) {
  return (
    <ul>
      {vazifalar.map((vazifa) => (
        <li key={vazifa.id}>
          {vazifa.matn + (vazifa.bajarilgan ? " [bajarildi]" : " [yangi]")}
        </li>
      ))}
    </ul>
  );
}

const html = renderToStaticMarkup(
  <VazifaRoyxati vazifalar={[{ id: 2, matn: "API", bajarilgan: false }]} />
);

console.log(html);`,
            output: "<ul><li>API [yangi]</li></ul>",
          },
          {
            type: "ul",
            items: [
              "Yuklanish holati uchun <code>useState&lt;boolean&gt;(true)</code>, xato uchun <code>useState&lt;string | null&gt;(null)</code> ishlating.",
              "Ma'lumot olishni <code>useEffect</code> ichida boshlang va bekor qilish (abort) ni unutmang.",
              "Ro'yxatda <code>key</code> sifatida barqaror <code>id</code> ishlating, indeks emas.",
              "API javobini validatsiya qiling; generic cast yolg'on xavfsizlik hissi berishi mumkin.",
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Yakuniy sayqal",
            html: "Loyihani uch qatlamga ajrating: <code>api</code> (tarmoq), <code>components</code> (ko'rinish), <code>types</code> (umumiy shakllar). Har qatlam faqat qo'shnisiga tayansin. Build oldidan <code>tsc --noEmit</code> va testlarni ishga tushiring — shunda deploy ishonchli bo'ladi.",
          },
        ],
        quiz: [
          {
            q: "jsonOl<T> funksiyasidagi T nimani bildiradi?",
            options: ["HTTP statusni", "Fayl nomini", "React state'ini", "Kutilayotgan javob tipini"],
            answer: 3,
            explain: "Chaqiruvda T ko'rsatiladi yoki inferens qilinadi va qaytish tipi Promise<T> bo'ladi.",
          },
          {
            q: "Ma'lumot yuklanayotganda foydalanuvchiga nima ko'rsatish tavsiya etiladi?",
            options: ["Hech narsa", "Yuklanish holati", "Doim xato", "API kalitini"],
            answer: 1,
            explain: "Loading indikatori foydalanuvchiga jarayon davom etayotganini bildiradi.",
          },
          {
            q: "React ro'yxatida key uchun nima ishlatish yaxshi?",
            options: ["Barqaror unikal id", "Massiv indeksi", "Tasodifiy son", "Element matni"],
            answer: 0,
            explain: "Barqaror id React'ga elementlarni qayta tartiblashda to'g'ri moslashtirishga yordam beradi.",
          },
        ],
      },
      {
        id: 50,
        title: "Yakuniy imtihon",
        minutes: 20,
        isExam: true,
        blocks: [
          {
            type: "p",
            html: "Tabriklaymiz — siz 49 darsni bosib o'tdingiz. Yakuniy imtihon butun kursni qamrab oladi: type alias va interface, union va narrowing, generiklar, <code>keyof</code>, mapped va conditional tiplar, utility tiplar, klasslar, dekoratorlar, modullar, async/fetch, Express, React, testlash va build.",
          },
          {
            type: "ul",
            items: [
              "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
              "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
              "Har bir savol 1 ball; noto'g'ri javob ballni kamaytirmaydi.",
              "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Oxirgi maslahat",
            html: "Avval kod misollarini eslang, keyin savollarni o'qing. Ikki variant bir xil ko'rinsa, tip tizimining aniq qoidasini (masalan, <code>extends</code> cheklovi yoki <code>-?</code> modifier'i) eslab qaror qiling. Tushunish yodlashdan uzoq muddatli foyda beradi.",
          },
        ],
        quiz: [],
      },
    ],
    exam: {
      passScore: 9,
      total: 12,
      questions: [
        {
          q: "Interface'ning type alias'ga nisbatan o'ziga xos imkoniyati qaysi?",
          options: ["Union tip yasash", "Tuple tip yasash", "Bir xil nom bilan e'lon qilinib birlashish", "Primitiv tipga nom berish"],
          answer: 2,
          explain: "Declaration merging faqat interface'da bor; type alias bir xil nom bilan qayta e'lon qilinsa xato beradi.",
        },
        {
          q: "type A = { x: number }; type B = { y: string }; A & B tipidagi obyekt qanday bo'lishi shart?",
          options: ["Faqat x xossasi bilan", "Faqat y xossasi bilan", "x va y xossalari bilan", "x yoki y dan biri bilan"],
          answer: 2,
          explain: "Intersection ikkala tipning barcha talablarini birlashtiradi.",
        },
        {
          q: "Abstract metodni amalga oshirmagan konkret bola klass qanday natija beradi?",
          options: ["Kompilyatsiya xatosi beradi", "Avtomatik bo'sh metod oladi", "Ish vaqtida ishlaydi", "Faqat ogohlantirish beradi"],
          answer: 0,
          explain: "Konkret klass abstract metodni amalga oshirishi shart, aks holda kompilyator xato beradi.",
        },
        {
          q: "type Kiritish = Omit<Talaba, \"id\"> nimani beradi?",
          options: ["Faqat id xossasi", "Barcha xossalar ixtiyoriy", "Faqat readonly xossalar", "id dan boshqa barcha xossalar"],
          answer: 3,
          explain: "Omit ko'rsatilgan kalitni chiqarib tashlab, qolgan xossalardan yangi tip yasaydi.",
        },
        {
          q: "function f(x: string | number) { return x.toUpperCase(); } nima uchun kompilyatsiya xatosi beradi?",
          options: ["toUpperCase stringda mavjud emas", "x avval narrowing qilinmagan", "Funksiya qaytish tipi yo'q", "string union bo'la olmaydi"],
          answer: 1,
          explain: "Union'da toUpperCase faqat string tarmog'ida mavjud; typeof tekshiruvi bilan toraytirish kerak.",
        },
        {
          q: "const sozlama = { til: \"uz\", mavzu: \"qorong'i\" }; type K = keyof typeof sozlama; K qanday tip bo'ladi?",
          options: ["string", "\"til\" | \"mavzu\"", "number", "typeof sozlama"],
          answer: 1,
          explain: "typeof qiymat tipini oladi, keyof esa uning kalitlari unionini beradi.",
        },
        {
          q: "type M<T> = { readonly [K in keyof T]-?: T[K] }; M<{ a?: number }> natijasi qanday?",
          options: ["{ a?: number }", "{ a?: readonly number }", "never", "{ readonly a: number }"],
          answer: 3,
          explain: "-? ixtiyoriylikni olib tashlaydi, readonly esa xossani o'qish uchun qulflaydi.",
        },
        {
          q: "type E<T> = T extends (infer U)[] ? U : never; E<Date[]> natijasi nima?",
          options: ["Date[]", "never", "Date", "unknown"],
          answer: 2,
          explain: "infer U massiv elementini ushlab oladi; Date[] uchun U = Date.",
        },
        {
          q: "Standart metod dekoratorining ikkinchi argumenti nima?",
          options: ["ClassMethodDecoratorContext obyekti", "Metod argumentlari", "Klass nusxasi", "Promise"],
          answer: 0,
          explain: "TS 5 standart dekoratori funksiya va context obyektini oladi; context.name, kind kabi maydonlarni beradi.",
        },
        {
          q: "Express'da JSON so'rov tanasini req.body ga joylash uchun nima qo'shiladi?",
          options: ["app.use(express.static())", "app.set(\"json\", true)", "express.body()", "app.use(express.json())"],
          answer: 3,
          explain: "express.json() middleware'i JSON tanani parse qiladi; usiz req.body bo'sh bo'ladi.",
        },
        {
          q: "Bo'sh massiv bilan useState([]) yozilsa, TypeScript odatda qanday tip chiqaradi?",
          options: ["any[]", "never[]", "unknown[]", "string[]"],
          answer: 1,
          explain: "Bo'sh massivdan element tipi aniqlanmaydi va never[] bo'ladi; useState<Vazifa[]>([]) yozish kerak.",
        },
        {
          q: "Promise.allSettled natijasidagi har bir element qanday maydonlarga ega?",
          options: ["status va value yoki reason", "faqat value", "faqat reason", "ok va data"],
          answer: 0,
          explain: "Har bir element {status:\"fulfilled\", value} yoki {status:\"rejected\", reason} shaklida bo'ladi.",
        },
      ],
    },
  };
})();
