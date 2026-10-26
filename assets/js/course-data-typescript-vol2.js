/* TypeScript course volume 2 (50 ilg'or dars: id 50-99 + yakuniy imtihon id 100) */
(function () {
  "use strict";
  window.NOLDAN_COURSE_VOLUMES = window.NOLDAN_COURSE_VOLUMES || {};
  window.NOLDAN_COURSE_VOLUMES.typescript = {
 "modules": [
  {
   "title": "Ilg'or tip tizimi",
   "lessons": [
    50,
    51,
    52,
    53,
    54,
    55
   ]
  },
  {
   "title": "Validatsiya va tip xavfsizligi",
   "lessons": [
    56,
    57,
    58,
    59,
    60
   ]
  },
  {
   "title": "Generiklar va arxitektura",
   "lessons": [
    61,
    62,
    63,
    64,
    65
   ]
  },
  {
   "title": "Dekoratorlar va metadata",
   "lessons": [
    66,
    67,
    68,
    69,
    70
   ]
  },
  {
   "title": "Monorepo va konfiguratsiya",
   "lessons": [
    71,
    72,
    73,
    74,
    75
   ]
  },
  {
   "title": "Node.js va Express",
   "lessons": [
    76,
    77,
    78,
    79,
    80
   ]
  },
  {
   "title": "React va Next.js",
   "lessons": [
    81,
    82,
    83,
    84,
    85
   ]
  },
  {
   "title": "Testlash va performance",
   "lessons": [
    86,
    87,
    88,
    89,
    90
   ]
  },
  {
   "title": "Kutubxona va build",
   "lessons": [
    91,
    92,
    93,
    94
   ]
  },
  {
   "title": "Full-stack loyiha va intervyu",
   "lessons": [
    95,
    96,
    97,
    98,
    99
   ]
  },
  {
   "title": "Yakuniy imtihon",
   "lessons": [
    100
   ]
  }
 ],
 "lessons": [
  {
   "id": 50,
   "title": "Mapped types chuqur: key remapping va modifierlar",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Mapped type — mavjud tipning har bir xossasidan yangi tip yasash usuli. <code>{ [K in keyof T]: ... }</code> sintaksisi xossalarni aylanib chiqadi, <code>as</code> kaliti esa kalit nomini o'zgartirish yoki kalitni butunlay olib tashlash imkonini beradi. Bu imkoniyat API javoblarini qayta shakllantirishda, DTO yasashda va kutubxona tiplarida keng qo'llanadi."
    },
    {
     "type": "code",
     "title": "kalitlarni qayta nomlash",
     "code": "type Talaba = {\n  id: number;\n  ism: string;\n  yosh: number;\n};\n\ntype Opsiyal = { [K in keyof Talaba]?: Talaba[K] };\ntype Malumot = { [K in keyof Talaba as `malumot_${K}`]: Talaba[K] };\n\nconst qisqa: Opsiyal = { ism: \"Aziza\" };\nconst toliq: Malumot = {\n  malumot_id: 1,\n  malumot_ism: \"Aziza\",\n  malumot_yosh: 16,\n};\n\nconsole.log(Object.keys(qisqa).length);\nconsole.log(Object.keys(toliq).join(\", \"));",
     "output": "1\nmalumot_id, malumot_ism, malumot_yosh"
    },
    {
     "type": "p",
     "html": "<code>as</code> bandi faqat kalitni qayta nomlamaydi: agar u <code>never</code> qaytarsa, kalit natijaviy tipdan butunlay chiqib ketadi. Shu usulda ichki yoki maxfiy maydonlarni ommaviy DTO'dan olib tashlash mumkin. Modifikatorlar ham boshqariladi: <code>+?</code> ixtiyoriylikni qo'shadi, <code>-?</code> uni olib tashlaydi, <code>-readonly</code> esa faqat o'qish cheklovini bekor qiladi."
    },
    {
     "type": "code",
     "title": "modifikatorlar va kalitni filtrlash",
     "code": "type Forma = {\n  readonly id: number;\n  ism?: string;\n  parol?: string;\n};\n\ntype Tahrirlanadigan = {\n  -readonly [K in keyof Forma as K extends \"id\" ? never : K]-?: Forma[K];\n};\n\nconst yangi: Tahrirlanadigan = { ism: \"Ali\", parol: \"1234\" };\nyangi.ism = \"Vali\";\nconsole.log(JSON.stringify(yangi));",
     "output": "{\"ism\":\"Vali\",\"parol\":\"1234\"}"
    },
    {
     "type": "table",
     "head": [
      "Yozuv",
      "Ma'nosi"
     ],
     "rows": [
      [
       "<code>[K in keyof T]</code>",
       "T ning barcha kalitlari bo'ylab aylanadi"
      ],
      [
       "<code>as YangiKalit</code>",
       "Kalit nomini qayta hisoblaydi"
      ],
      [
       "<code>-?</code>",
       "Ixtiyoriy belgisini olib tashlaydi"
      ],
      [
       "<code>+readonly</code>",
       "Xossani faqat o'qishga aylantiradi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Homomorphic mapped type",
     "html": "<code>[K in keyof T]</code> ko'rinishidagi mapped type homomorphic hisoblanadi: u massiv va tuple'larning maxsus xatti-harakatini saqlaydi. Masalan, <code>Partial&lt;string[]&gt;</code> massivning o'zini ixtiyoriy qilmaydi, balki elementlarini ixtiyoriy qiladi. Kalitni <code>as</code> bilan o'zgartirsangiz, bu xususiyat yo'qolishi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "Mapped type ichida kalit nomini shartli ravishda o'zgartirish uchun qaysi sintaksis ishlatiladi?",
     "options": [
      "[K in keyof T rename Shart<K>]",
      "[K: keyof T => Shart<K>]",
      "[K in keyof T as Shart<K>]",
      "[keyof T as K]"
     ],
     "answer": 2,
     "explain": "TS 4.1 dan boshlab mapped type'da `as` bandi kalitni qayta hisoblash imkonini beradi: `[K in keyof T as YangiKalit]`."
    },
    {
     "q": "`-readonly [K in keyof T]` yozuvi natijada nimani beradi?",
     "options": [
      "Barcha xossalardan readonly cheklovini olib tashlaydi",
      "Barcha xossalarni readonly qiladi",
      "Faqat `readonly` nomli kalitni olib tashlaydi",
      "Xossalarni ixtiyoriy qiladi"
     ],
     "answer": 0,
     "explain": "`-readonly` prefiksi mapped type'dagi barcha xossalardan readonly modifikatorini olib tashlaydi. `+readonly` esa teskarisini qiladi."
    },
    {
     "q": "Kalit ifodasi `never` qaytarsa, mapped type'da bu kalit bilan nima bo'ladi?",
     "options": [
      "Kalit `never` tipi bilan qoladi",
      "Kompilyator xato beradi",
      "Kalit ixtiyoriy bo'lib qoladi",
      "Kalit natijaviy tipdan butunlay olib tashlanadi"
     ],
     "answer": 3,
     "explain": "`as` bandida `never` qaytargan kalit natijaga qo'shilmaydi. Shu usulda `Omit` ga o'xshash filtrlash yasaladi."
    }
   ]
  },
  {
   "id": 51,
   "title": "Conditional types va distributivlik",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Conditional type <code>T extends U ? X : Y</code> tip darajasidagi shartli ifodadir. Agar <code>T</code> union bo'lsa va u yalang'och tip parametri sifatida turg'an bo'lsa, shart unionning har bir a'zosiga alohida qo'llanadi. Bu <b>distributivlik</b> deyiladi va ko'p utility tiplarning asosidir."
    },
    {
     "type": "code",
     "title": "union ustida distributivlik",
     "code": "type Ajrat<T, U> = T extends U ? never : T;\ntype Holat = \"yangi\" | \"faol\" | \"arxiv\";\ntype Ochiq = Ajrat<Holat, \"arxiv\">;\n\nconst h: Ochiq = \"faol\";\nconsole.log(h);\n\n// @ts-expect-error arxiv chiqarib tashlangan\nconst a: Ochiq = \"arxiv\";",
     "output": "faol"
    },
    {
     "type": "p",
     "html": "Yuqoridagi <code>Ajrat</code> aslida standart <code>Exclude</code> ning soddalashtirilgan ko'rinishi. Distributivlik faqat \"naked\" parametrda ishlaydi: <code>T</code> ni massiv yoki tuple ichiga olsangiz, shart butun union ustida bir marta bajariladi. Bu farqni bilish <code>IsEqual</code> kabi tiplarni yozishda hal qiluvchi ahamiyatga ega."
    },
    {
     "type": "code",
     "title": "distributivlikni to'sish",
     "code": "type Juft<T> = T extends unknown ? [T, T] : never;\ntype J = Juft<\"a\" | \"b\">;\n\nconst j: J = [\"a\", \"a\"];\nconsole.log(j.length);\n\ntype BirXil<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;\ntype T1 = BirXil<string | number, number | string>;\nconst t: T1 = true;\nconsole.log(t);",
     "output": "2\ntrue"
    },
    {
     "type": "ul",
     "items": [
      "Yalang'och <code>T</code> — distributiv, har bir a'zo alohida tekshiriladi.",
      "<code>[T] extends [U]</code> — tuple ichiga olingan, distributivlik o'chadi.",
      "<code>boolean</code> aslida <code>true | false</code> bo'lgani uchun u ham ikkiga bo'linadi.",
      "<code>never</code> distributiv shartda bo'sh union sifatida natija ham <code>never</code> beradi."
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Amaliy qopqon",
     "html": "API'dan kelgan <code>string | undefined</code> ni tekshirganda distributivlik kutilmagan natija berishi mumkin: <code>T extends string ? T : never</code> <code>undefined</code> ni jimgina yo'qotadi. Ba'zan bu foydali, ba'zan esa xatoni yashirishdir — niyatingizni aniq yozing."
    }
   ],
   "quiz": [
    {
     "q": "Yalang'och tip parametridagi conditional type union bilan chaqirilganda nima sodir bo'ladi?",
     "options": [
      "Union bitta tip sifatida tekshiriladi",
      "Shart unionning har bir a'zosiga alohida qo'llanadi",
      "Kompilyator unionni rad etadi",
      "Natija har doim `never` bo'ladi"
     ],
     "answer": 1,
     "explain": "`T extends U ? X : Y` da T naked parametr bo'lsa, distributivlik ishga tushadi va union a'zolari bo'yicha natijalar birlashtiriladi."
    },
    {
     "q": "Qaysi yozuv distributivlikni o'chirish uchun ishlatiladi?",
     "options": [
      "T extends U ? X : Y",
      "keyof T extends U ? X : Y",
      "[T] extends [U] ? X : Y",
      "T[] extends U ? X : Y"
     ],
     "answer": 2,
     "explain": "T ni tuple ichiga olish `[T] extends [U]` distributivlikni to'xtatadi va union yaxlit tekshiriladi."
    },
    {
     "q": "`Exclude<\"a\" | \"b\" | \"c\", \"a\" | \"c\">` natijasi qanday?",
     "options": [
      "\"b\"",
      "\"a\"",
      "\"a\" | \"c\"",
      "never"
     ],
     "answer": 0,
     "explain": "Exclude har bir a'zoni chiqariladigan union bilan solishtiradi va faqat mos kelmaydigan `\"b\"` qoladi."
    }
   ]
  },
  {
   "id": 52,
   "title": "infer bilan tipni ajratib olish",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<code>infer</code> conditional type ichida noma'lum tipni \"ushlab olish\" uchun xizmat qiladi. U faqat <code>extends</code> ning chap tomonidagi shablonda yozilishi mumkin: funksiya qaytish tipi, parametrlar tuple'i, Promise qiymati yoki tuple elementini ajratishda ishlatiladi."
    },
    {
     "type": "code",
     "title": "qaytish tipi va tuple boshi",
     "code": "type Qaytish<T> = T extends (...args: never[]) => infer R ? R : never;\ntype X = Qaytish<() => number>;\nconst n: X = 42;\nconsole.log(n * 2);\n\ntype Birinchi<T> = T extends [infer B, ...unknown[]] ? B : never;\ntype B = Birinchi<[string, number, boolean]>;\nconst b: B = \"salom\";\nconsole.log(b);",
     "output": "84\nsalom"
    },
    {
     "type": "p",
     "html": "Shablonga bir nechta <code>infer</code> qo'yish mumkin. Funksiya parametrlarini <code>infer P</code> bilan tuple sifatida olish, keyin uning elementlariga murojaat qilish odatiy amaliyotdir. <code>infer</code> topilmasa, shartning <code>false</code> tarmog'i ishlaydi — shuning uchun har doim xavfsiz zaxira tip yozing."
    },
    {
     "type": "code",
     "title": "Promise va parametrlarni ajratish",
     "code": "type PromiseQiymati<T> = T extends Promise<infer V> ? V : T;\ntype A = PromiseQiymati<Promise<{ id: number }>>;\nconst a: A = { id: 7 };\nconsole.log(a.id);\n\ntype Parametrlar<T> = T extends (...args: infer P) => unknown ? P : never;\ntype P = Parametrlar<(ism: string, yosh: number) => void>;\nconst p: P = [\"Aziza\", 16];\nconsole.log(p.join(\" | \"));",
     "output": "7\nAziza | 16"
    },
    {
     "type": "table",
     "head": [
      "Vazifa",
      "Shablon"
     ],
     "rows": [
      [
       "Massiv elementi",
       "<code>T extends (infer U)[] ? U : never</code>"
      ],
      [
       "Promise qiymati",
       "<code>T extends Promise&lt;infer V&gt; ? V : never</code>"
      ],
      [
       "Funksiya natijasi",
       "<code>T extends (...args: any[]) =&gt; infer R ? R : never</code>"
      ],
      [
       "Tuple oxiri",
       "<code>T extends [...unknown[], infer L] ? L : never</code>"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "infer va variatsiya",
     "html": "Bir xil harf bilan bir necha joyda <code>infer</code> yozilsa, TypeScript nomzodlarni birlashtiradi. Kontravariant joylarda (parametrlar) kesishma, kovariant joylarda (qaytish tipi) birlashma olinadi — bu til spetsifikatsiyasidagi nozik qoidadir."
    }
   ],
   "quiz": [
    {
     "q": "`infer` kalit so'zini qayerda ishlatish mumkin?",
     "options": [
      "Har qanday tip alias ichida mustaqil",
      "Faqat funksiya parametrlarida",
      "Faqat interfeys metodlarida",
      "Faqat conditional type'ning `extends` shablonida"
     ],
     "answer": 3,
     "explain": "`infer` faqat conditional type shartining `extends` qismidagi shablon ichida uchraydi; u yerda tip o'zgaruvchisini e'lon qiladi."
    },
    {
     "q": "`type Element<T> = T extends (infer U)[] ? U : never;` uchun `Element<(string | number)[]>` natijasi nima?",
     "options": [
      "string",
      "string | number",
      "number",
      "never"
     ],
     "answer": 1,
     "explain": "Massiv elementi `string | number` bo'lgani uchun `U` shu unionni oladi. Bu yerda distributivlik emas, element tipi ajratiladi."
    },
    {
     "q": "`type P<T> = T extends Promise<infer V> ? V : T;` uchun `P<Promise<boolean>>` natijasi qanday?",
     "options": [
      "Promise<boolean>",
      "unknown",
      "boolean",
      "never"
     ],
     "answer": 2,
     "explain": "Shablon mos keladi va `V` Promise ichidagi `boolean` tipini oladi. Mos kelmagan qiymatda esa `T` o'zi qaytadi."
    }
   ]
  },
  {
   "id": 53,
   "title": "Template literal types amaliyoti",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Template literal type — satr shablonlarini tip darajasida ifodalash usuli. U literal tiplar bilan birgalikda chekli kombinatsiyalar yasaydi: marshrutlar, CSS xossalari, event handler nomlari va kalit prefikslari shular jumlasidan. Union qatnashsa, natija barcha kombinatsiyalarning birlashmasi bo'ladi."
    },
    {
     "type": "code",
     "title": "marshrutlar uchun literal union",
     "code": "type Til = \"uz\" | \"ru\";\ntype Bolim = \"kurslar\" | \"blog\";\ntype Marshrut = `/${Til}/${Bolim}`;\n\nconst m: Marshrut = \"/uz/kurslar\";\nconsole.log(m);\nconsole.log(m.split(\"/\").filter(Boolean).join(\"-\"));\n\n// @ts-expect-error \"en\" ro'yxatda yo'q\nconst xato: Marshrut = \"/en/kurslar\";",
     "output": "/uz/kurslar\nuz-kurslar"
    },
    {
     "type": "p",
     "html": "Yuqorida <code>Til</code> (2 ta) va <code>Bolim</code> (2 ta) union bo'lgani uchun <code>Marshrut</code> to'rtta aniq satrdan iborat: <code>/uz/kurslar</code>, <code>/uz/blog</code>, <code>/ru/kurslar</code>, <code>/ru/blog</code>. Kompilyator noto'g'ri kombinatsiyani darhol rad etadi. <code>m.split(...)</code> ishlashi uchun natija <code>string</code> ga kengayadi, shuning uchun bu amal xavfsiz."
    },
    {
     "type": "code",
     "title": "event handler nomlari",
     "code": "type Hodisa = \"click\" | \"focus\" | \"blur\";\ntype HandlerNom = `on${Capitalize<Hodisa>}`;\ntype Handlers = { [K in HandlerNom]?: () => void };\n\nconst h: Handlers = {\n  onClick: () => console.log(\"bosildi\"),\n  onFocus: () => console.log(\"fokus\"),\n};\n\nh.onClick?.();\nconsole.log(Object.keys(h).length);",
     "output": "bosildi\n2"
    },
    {
     "type": "ul",
     "items": [
      "<code>Uppercase</code>, <code>Lowercase</code>, <code>Capitalize</code>, <code>Uncapitalize</code> — satr tiplarini o'zgartiradi.",
      "Shablon ichida <code>infer</code> bilan marshrut parametrlarini ajratish mumkin.",
      "Juda katta unionlar tipni portlatishi mumkin: 10 × 10 × 10 kombinatsiya minglab satr beradi.",
      "Template literal type faqat tip darajasida yashaydi, ish vaqtida oddiy satr qoladi."
     ]
    }
   ],
   "quiz": [
    {
     "q": "Ikki til va uchta bo'limdan iborat template literal type nechta aniq satr literalini hosil qiladi?",
     "options": [
      "6",
      "2",
      "5",
      "9"
     ],
     "answer": 0,
     "explain": "Template literal unionlar ustida dekart ko'paytma yasaydi: 2 ta til × 3 ta bo'lim = 6 ta satr."
    },
    {
     "q": "`Capitalize<\"click\">` natijasi qanday bo'ladi?",
     "options": [
      "\"click\"",
      "\"CLICK\"",
      "\"click!\"",
      "\"Click\""
     ],
     "answer": 3,
     "explain": "`Capitalize` birinchi harfni katta qiladi, qolganini o'zgartirmaydi: `\"Click\"`."
    },
    {
     "q": "Template literal type qaysi amaliyotda ayniqsa foydali?",
     "options": [
      "Sonlar ustida arifmetik hisoblashda",
      "Kalit prefiksi yoki event nomini tip bilan cheklashda",
      "Faylni diskdan o'qishda",
      "Massivni saralashda"
     ],
     "answer": 1,
     "explain": "U satr shaklidagi kalitlar, marshrutlar va handler nomlarini aniq literal union sifatida modellashtiradi."
    }
   ]
  },
  {
   "id": 54,
   "title": "Variantlik: covariance, contravariance va bivariance",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "TypeScript strukturaviy tizimga ega, lekin variantlik qoidalari amalda muhim. <b>Kovariantlik</b> — tor tipni keng tip o'rniga qo'yish mumkinligi (masalan, <code>Mushuk[]</code> ni <code>Hayvon[]</code> ga). <b>Kontravariantlik</b> funksiya parametrlarida uchraydi: kengroq parametr qabul qiluvchi funksiya torroq talab o'rniga mos keladi."
    },
    {
     "type": "code",
     "title": "massivlardagi kovariantlik va uning xavfi",
     "code": "class Hayvon { nom = \"hayvon\"; }\nclass Mushuk extends Hayvon { miyovla(): string { return \"miyov\"; } }\n\nconst mushuklar: Mushuk[] = [new Mushuk()];\nconst hayvonlar: Hayvon[] = mushuklar; // ruxsat etiladi\nhayvonlar.push(new Hayvon());\n\nconsole.log(mushuklar.length);\nconsole.log(typeof (mushuklar[1] as Mushuk).miyovla);",
     "output": "2\nundefined"
    },
    {
     "type": "p",
     "html": "Massivlar kovariant bo'lgani uchun yuqoridagi kod kompilyatsiyadan o'tadi, ammo ish vaqtida <code>mushuklar</code> ichida oddiy <code>Hayvon</code> paydo bo'ladi. Bu TypeScript'ning ma'lum \"unsound\" joyi. <code>readonly Mushuk[]</code> ishlatilsa, <code>push</code> taqiqlanadi va xavf kamayadi."
    },
    {
     "type": "code",
     "title": "parametrlar kontravariantligi",
     "code": "type HayvonQabul = (h: Hayvon) => void;\ntype MushukQabul = (m: Mushuk) => void;\n\nconst hayvonQabul: HayvonQabul = (h) => console.log(\"qabul:\", h.nom);\nconst mushukQabul: MushukQabul = hayvonQabul;\nmushukQabul(new Mushuk());\n\n// @ts-expect-error tor parametr kengroq o'rniga mos emas\nconst teskari: HayvonQabul = (m: Mushuk) => console.log(m.miyovla());",
     "output": "qabul: hayvon"
    },
    {
     "type": "table",
     "head": [
      "Pozitsiya",
      "Variantlik",
      "Misol"
     ],
     "rows": [
      [
       "Massiv elementi",
       "Kovariant",
       "<code>Mushuk[] → Hayvon[]</code>"
      ],
      [
       "Funksiya natijasi",
       "Kovariant",
       "<code>() =&gt; Mushuk → () =&gt; Hayvon</code>"
      ],
      [
       "Funksiya parametri",
       "Kontravariant",
       "<code>(Hayvon) =&gt; void → (Mushuk) =&gt; void</code>"
      ],
      [
       "Metod parametri",
       "Bivariant",
       "<code>strictFunctionTypes</code> metodlarga ta'sir qilmaydi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "strictFunctionTypes",
     "html": "<code>strictFunctionTypes</code> funksiya tipidagi parametrlarni kontravariant tekshiradi. Lekin metod sintaksisi (<code>{ f(m: Mushuk): void }</code>) bivariant qoladi — bu tarixiy murosadir. Muhim API'larda funksiya xossasini afzal ko'ring."
    }
   ],
   "quiz": [
    {
     "q": "Qaytish tipi bo'yicha funksiya qanday variantlikka ega?",
     "options": [
      "Kontravariant",
      "Invariant",
      "Kovariant",
      "Bivariant"
     ],
     "answer": 2,
     "explain": "`() => Mushuk` ni `() => Hayvon` o'rniga qo'yish xavfsiz, chunki qaytgan qiymat kengroq tip talabini qondiradi. Bu kovariantlik."
    },
    {
     "q": "`strictFunctionTypes` yoqilganda funksiya parametrlari qanday tekshiriladi?",
     "options": [
      "Kontravariant",
      "Kovariant",
      "Har doim bivariant",
      "Tekshirilmaydi"
     ],
     "answer": 0,
     "explain": "Qat'iy rejimda parametrlar kontravariant bo'ladi: kengroq qabul qiluvchi funksiya torroq talab o'rniga mos keladi, teskarisi emas."
    },
    {
     "q": "Nega `const hayvonlar: Hayvon[] = mushuklar; hayvonlar.push(new Hayvon());` xavfli?",
     "options": [
      "Chunki massivlar invariant",
      "Chunki push metodi mavjud emas",
      "Chunki Hayvon abstrakt klass bo'lishi shart",
      "Chunki ish vaqtida Mushuk massivida Hayvon paydo bo'ladi"
     ],
     "answer": 3,
     "explain": "TypeScript massivlarni kovariant qabul qiladi, lekin yozishga ruxsat beradi. Natijada `Mushuk` deb hisoblangan element aslida `Hayvon` bo'lib qoladi."
    }
   ]
  },
  {
   "id": 55,
   "title": "Rekursiv tiplar va type-level hisoblash",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Rekursiv tip — o'ziga o'zi murojaat qiladigan tip. JSON, daraxt, fayl tizimi yoki nested izohlar kabi cheksiz chuqurlikdagi ma'lumotlarni ifodalashda ishlatiladi. TypeScript rekursiyani tip darajasida ham qo'llaydi: shartli tiplar va mapped tiplar bilan chuqur o'zgartirishlar yasash mumkin, lekin instantsiya chuqurligi cheklangan."
    },
    {
     "type": "code",
     "title": "rekursiv JSON tipi",
     "code": "type JSONQiymat =\n  | string\n  | number\n  | boolean\n  | null\n  | JSONQiymat[]\n  | { [kalit: string]: JSONQiymat };\n\nconst javob: JSONQiymat = {\n  ok: true,\n  data: [{ id: 1, nom: \"Olma\" }],\n};\n\nconsole.log(JSON.stringify(javob));",
     "output": "{\"ok\":true,\"data\":[{\"id\":1,\"nom\":\"Olma\"}]}"
    },
    {
     "type": "p",
     "html": "Rekursiv tipda har bir tarmoq qoidasi muhim: massiv ham, obyekt ham o'z ichida <code>JSONQiymat</code> qabul qiladi. Natijada ixtiyoriy chuqurlikdagi JSON xavfsiz ifodalanadi. Xuddi shu usulda komponent daraxti, kategoriyalar ierarxiyasi yoki menyu strukturasini yozish mumkin."
    },
    {
     "type": "code",
     "title": "chuqur readonly",
     "code": "type ChuqurReadonly<T> = T extends (infer U)[]\n  ? readonly ChuqurReadonly<U>[]\n  : T extends object\n    ? { readonly [K in keyof T]: ChuqurReadonly<T[K]> }\n    : T;\n\ntype Sozlama = { tema: { rang: string; shrift: string } };\nconst s: ChuqurReadonly<Sozlama> = {\n  tema: { rang: \"ko'k\", shrift: \"Inter\" },\n};\n\n// @ts-expect-error ichki xossa ham readonly\ns.tema.rang = \"qizil\";\nconsole.log(s.tema.rang);",
     "output": "ko'k"
    },
    {
     "type": "ul",
     "items": [
      "Rekursiyani obyekt yoki massiv ichida to'xtating, aks holda tip cheksiz kengayadi.",
      "Interfeys rekursiv bo'lishi mumkin, type alias ham mumkin — lekin circular alias faqat struktura ichida ruxsat etiladi.",
      "Chuqur o'zgartirishlarda odatda <code>depth</code> cheklovi yoki massiv uchun alohida tarmoq kerak bo'ladi.",
      "Ish vaqtida rekursiv tipning hech qanday izi qolmaydi — u faqat kompilyatorda tekshiriladi."
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Chuqurlik chegarasi",
     "html": "Juda murakkab rekursiv tip <code>Type instantiation is excessively deep and possibly infinite</code> xatosini beradi. Bunday holatda rekursiyani 5–10 qatlam bilan cheklang yoki aniq tipni qo'lda yozing. Kompilyator sekinlashuvining asosiy sabablaridan biri ham shu."
    }
   ],
   "quiz": [
    {
     "q": "Rekursiv JSON tipida obyekt qiymati qanday tip bilan ifodalanadi?",
     "options": [
      "Faqat `string`",
      "O'ziga havola qiluvchi `{ [kalit: string]: JSONQiymat }`",
      "`Object`",
      "`unknown[]`"
     ],
     "answer": 1,
     "explain": "Obyektning har bir qiymati yana JSON qiymat bo'lishi mumkin, shuning uchun indeks imzosi tipning o'ziga murojaat qiladi."
    },
    {
     "q": "`ChuqurReadonly<T>` natijasida ichki obyekt xossalari qanday bo'ladi?",
     "options": [
      "Faqat yuqori daraja readonly bo'ladi",
      "Barcha xossalar ixtiyoriy bo'ladi",
      "Ichki xossalar ham rekursiv readonly bo'ladi",
      "Tip `any` ga aylanadi"
     ],
     "answer": 2,
     "explain": "Mapped type har bir qiymatga yana `ChuqurReadonly` qo'llaydi, shuning uchun cheksiz chuqurlikdagi barcha xossalar readonly bo'ladi."
    },
    {
     "q": "Rekursiv tip juda chuqur kengayganda kompilyator qanday xato beradi?",
     "options": [
      "`Type instantiation is excessively deep and possibly infinite`",
      "`Cannot find name`",
      "`Object is possibly null`",
      "`Duplicate identifier`"
     ],
     "answer": 0,
     "explain": "TypeScript instantsiya chuqurligi chegarasiga yetganda aynan shu xabarni beradi; rekursiyani cheklash yoki soddalashtirish kerak."
    }
   ]
  },
  {
   "id": 56,
   "title": "Branded types va nominal tiplash",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "TypeScript strukturaviy: bir xil shakldagi tiplar bir-birining o'rnida ishlatiladi. Shuning uchun <code>UserId</code> va <code>OrderId</code>, ikkalasi ham <code>string</code> bo'lsa, kompilyator ularni farqlamaydi. <b>Branded type</b> — bazaviy tipga sun'iy, faqat tip darajasida mavjud belgi qo'shib, nominal xavfsizlik yaratish usuli."
    },
    {
     "type": "code",
     "title": "unique symbol bilan brend",
     "code": "declare const userIdBrand: unique symbol;\ntype UserId = string & { readonly [userIdBrand]: \"UserId\" };\n\nfunction userId(value: string): UserId {\n  if (!/^u_\\d+$/.test(value)) throw new Error(\"noto'g'ri user id\");\n  return value as UserId;\n}\n\nconst u = userId(\"u_42\");\nconsole.log(u);\n\n// @ts-expect-error oddiy string UserId o'rniga mos emas\nconst yomon: UserId = \"u_42\";",
     "output": "u_42"
    },
    {
     "type": "p",
     "html": "Brend ish vaqtida mavjud emas: <code>u</code> oddiy <code>\"u_42\"</code> satri bo'lib qoladi, qo'shimcha xotira sarflanmaydi. Faqat tekshirilgan qiymatgina <code>as UserId</code> orqali yaratiladi. Konstruktor funksiyasini yagona chiqish nuqtasi qilib qo'ying — shunda noto'g'ri satr tipga kirib qolmaydi."
    },
    {
     "type": "code",
     "title": "generic Brand yordamchisi",
     "code": "declare const brand: unique symbol;\ntype Brand<T, B extends string> = T & { readonly [brand]: B };\n\ntype Email = Brand<string, \"Email\">;\ntype Telefon = Brand<string, \"Telefon\">;\n\nfunction email(value: string): Email {\n  if (!value.includes(\"@\")) throw new Error(\"email noto'g'ri\");\n  return value as Email;\n}\n\nconst e = email(\"ali@noldan.uz\");\nconsole.log(e.split(\"@\")[1]);\nconst t: Telefon = \"+998901234567\" as Telefon;\nconsole.log(t.slice(0, 4));",
     "output": "noldan.uz\n+998"
    },
    {
     "type": "table",
     "head": [
      "Yondashuv",
      "Afzalligi",
      "Kamchiligi"
     ],
     "rows": [
      [
       "Oddiy alias",
       "Sodda",
       "Nominal farq yo'q"
      ],
      [
       "Brand + unique symbol",
       "Kuchli xavfsizlik",
       "Konstruktor intizomi kerak"
      ],
      [
       "Klass wrapper",
       "Ish vaqtida ham tekshiriladi",
       "Qo'shimcha obyekt va xotira"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Brendni qayerda ishlatish kerak",
     "html": "ID'lar, pul birliklari, o'lchov birliklari, validatsiyadan o'tgan email/telefon va xavfsiz HTML uchun brend juda foydali. Lekin har bir satr uchun brend yasash kodni og'irlashtiradi — faqat aralashtirish xatosi real xavf tug'diradigan joyda qo'llang."
    }
   ],
   "quiz": [
    {
     "q": "Branded type qanday muammoni hal qiladi?",
     "options": [
      "Ish vaqtida satr uzunligini tekshiradi",
      "Kompilyatsiya tezligini oshiradi",
      "JSON'ni avtomatik parse qiladi",
      "Bir xil bazaviy tipdagi turli ma'noli qiymatlarni aralashtirishni oldini oladi"
     ],
     "answer": 3,
     "explain": "Strukturaviy tizimda `UserId` va `OrderId` bir xil string bo'lib qoladi; brend ularni kompilyator uchun ajratadi."
    },
    {
     "q": "Nega brendda `unique symbol` ishlatiladi?",
     "options": [
      "Ish vaqtida qiymatni saqlash uchun",
      "Brend kalitining tasodifan boshqa tip bilan to'qnashmasligi uchun",
      "Satrni katta harfga aylantirish uchun",
      "Massiv indeksini tekshirish uchun"
     ],
     "answer": 1,
     "explain": "`unique symbol` har bir e'londa yagona bo'ladi, shuning uchun boshqa modul bir xil nomli kalit yasab, brendni tasodifan qalbakilashtira olmaydi."
    },
    {
     "q": "Branded qiymat ish vaqtida qanday ko'rinishga ega?",
     "options": [
      "Qo'shimcha `__brand` maydoni bilan obyekt",
      "Har doim `Symbol`",
      "Oddiy bazaviy qiymat (masalan, string)",
      "JSON'ga aylantirib bo'lmaydigan maxsus tip"
     ],
     "answer": 2,
     "explain": "Brend faqat tip tizimida mavjud. Kompilyatsiyadan keyin qiymat oddiy string bo'lib qoladi va hech qanday qo'shimcha maydon qo'shilmaydi."
    }
   ]
  },
  {
   "id": 57,
   "title": "Type guard va assertion funksiyalari chuqur",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Type guard funksiyasi <code>qiymat is Tip</code> qaytaradi va <code>if</code> ichida tipni toraytiradi. Assertion funksiyasi esa <code>asserts qiymat is Tip</code> yoziladi: u xato tashlamasa, chaqiruvdan keyingi kodda tip toraygan bo'ladi. Ikkalasi ham ish vaqtida tekshiruv bajaradi, shuning uchun <code>as</code> dan farqli ravishda xavfsiz."
    },
    {
     "type": "code",
     "title": "diskriminant union va guard",
     "code": "type Shakl =\n  | { tur: \"doira\"; radius: number }\n  | { tur: \"kvadrat\"; tomon: number };\n\nfunction yuza(s: Shakl): number {\n  switch (s.tur) {\n    case \"doira\":\n      return Math.PI * s.radius ** 2;\n    case \"kvadrat\":\n      return s.tomon ** 2;\n  }\n}\n\nconsole.log(yuza({ tur: \"kvadrat\", tomon: 4 }));\nconsole.log(yuza({ tur: \"doira\", radius: 1 }).toFixed(2));",
     "output": "16\n3.14"
    },
    {
     "type": "p",
     "html": "Diskriminant maydon (<code>tur</code>) bo'yicha <code>switch</code> avtomatik narrowing beradi. Barcha holatlar qoplangani uchun funksiya oxirida qaytish tipi to'g'ri aniqlanadi. Yangi variant qo'shilsa, kompilyator qoplamagan <code>case</code> ni ko'rsatadi — bu <b>exhaustiveness</b> tekshiruvining amaliy foydasi."
    },
    {
     "type": "code",
     "title": "assertion funksiyasi",
     "code": "type Foydalanuvchi = { id: number; ism: string };\n\nfunction assertFoydalanuvchi(x: unknown): asserts x is Foydalanuvchi {\n  if (typeof x !== \"object\" || x === null) {\n    throw new Error(\"obyekt emas\");\n  }\n  const y = x as Record<string, unknown>;\n  if (typeof y.id !== \"number\" || typeof y.ism !== \"string\") {\n    throw new Error(\"shakl noto'g'ri\");\n  }\n}\n\nconst kirish: unknown = { id: 3, ism: \"Dilnoza\" };\nassertFoydalanuvchi(kirish);\nconsole.log(kirish.ism.toUpperCase());",
     "output": "DILNOZA"
    },
    {
     "type": "ul",
     "items": [
      "<code>x is T</code> — boolean qaytaruvchi guard; <code>if</code> ichida ishlaydi.",
      "<code>asserts x is T</code> — xato tashlash orqali keyingi kodni xavfsiz qiladi.",
      "Assertion funksiyasi aniq qaytish tipiga ega bo'lishi shart, aks holda TS2775 xatosi chiqadi.",
      "Ichki tekshiruvni bitta joyga jamlang: guard va assertion bir xil qoidalarga tayanishi kerak."
     ]
    }
   ],
   "quiz": [
    {
     "q": "Foydalanuvchi tipini tekshiruvchi guard funksiyasining qaytish tipi qanday yoziladi?",
     "options": [
      "`x is T`",
      "`boolean`",
      "`asserts x`",
      "`T | undefined`"
     ],
     "answer": 0,
     "explain": "Type predicate `x is T` shaklida yoziladi va `if (guard(x))` ichida `x` tipini `T` ga toraytiradi."
    },
    {
     "q": "Assertion funksiyasi `asserts x is T` ning guard'dan asosiy farqi nimada?",
     "options": [
      "U ish vaqtida tekshirmaydi",
      "U boolean qaytaradi",
      "U faqat klasslar uchun ishlaydi",
      "U muvaffaqiyatsizlikda xato tashlaydi va keyingi kodda tipni toraytiradi"
     ],
     "answer": 3,
     "explain": "Assertion funksiya shart bajarilmasa throw qiladi; chaqiruvdan keyingi qatorlarda x avtomatik T sifatida qaraladi."
    },
    {
     "q": "`s.tur` bo'yicha `switch` nega union tipini toraytiradi?",
     "options": [
      "Chunki `tur` oddiy string",
      "Chunki literal tip diskriminant sifatida ishlatiladi",
      "Chunki switch har doim `any` qaytaradi",
      "Chunki TypeScript switch'ni runtime'da bajaradi"
     ],
     "answer": 1,
     "explain": "Har bir variantda `tur` alohida literal tipga ega. `case \"doira\"` tekshiruvi qolgan maydonlar faqat doira shakliga tegishli ekanini aniqlaydi."
    }
   ]
  },
  {
   "id": 58,
   "title": "Zod bilan sxema validatsiyasi",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "TypeScript tiplari ish vaqtida yo'qoladi, tashqi JSON esa har qanday shaklda kelishi mumkin. <b>Zod</b> — sxemani bir marta yozib, undan ham ish vaqtidagi validatsiya, ham statik tip olish imkonini beradigan kutubxona. Chegara (HTTP, fayl, localStorage) da <code>unknown</code> ni sxema orqali o'tkazish odatiy amaliyotdir."
    },
    {
     "type": "code",
     "title": "safeParse va xato yo'li",
     "code": "import { z } from \"zod\";\n\nconst TalabaSxema = z.object({\n  id: z.number().int().positive(),\n  ism: z.string().min(2, \"ism kamida 2 ta harf\"),\n  yosh: z.number().min(7, \"yosh 7 dan kichik\"),\n});\n\nconst natija = TalabaSxema.safeParse({\n  id: 1,\n  ism: \"A\",\n  yosh: 16,\n});\n\nif (!natija.success) {\n  console.log(natija.error.issues[0].path.join(\".\"));\n  console.log(natija.error.issues[0].message);\n}",
     "output": "ism\nism kamida 2 ta harf"
    },
    {
     "type": "p",
     "html": "<code>parse</code> muvaffaqiyatsizlikda <code>ZodError</code> tashlaydi, <code>safeParse</code> esa <code>{ success: true, data }</code> yoki <code>{ success: false, error }</code> qaytaradi. Serverda odatda <code>safeParse</code> afzal: xatoni 400 javobiga aylantirish oson. <code>error.issues</code> massivida har bir muammoning yo'li va izohi bor."
    },
    {
     "type": "code",
     "title": "parse va natija tipi",
     "code": "import { z } from \"zod\";\n\nconst TalabaSxema = z.object({\n  id: z.number(),\n  ism: z.string(),\n  yosh: z.number(),\n});\n\nconst xom: unknown = JSON.parse(\n  '{\"id\":2,\"ism\":\"Bekzod\",\"yosh\":21}',\n);\n\nconst talaba = TalabaSxema.parse(xom);\nconsole.log(talaba.ism);\nconsole.log(talaba.yosh + 1);",
     "output": "Bekzod\n22"
    },
    {
     "type": "table",
     "head": [
      "Metod",
      "Xato bo'lsa",
      "Qaytish tipi"
     ],
     "rows": [
      [
       "<code>parse</code>",
       "ZodError tashlaydi",
       "T (toza ma'lumot)"
      ],
      [
       "<code>safeParse</code>",
       "Xato obyektini qaytaradi",
       "Natija union'i"
      ],
      [
       "<code>parseAsync</code>",
       "Promise rad etiladi",
       "Promise&lt;T&gt;"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "success",
     "title": "Standart xatti-harakat",
     "html": "Zod obyekt sxemasi noma'lum kalitlarni o'chirib tashlaydi. Agar ularni saqlash kerak bo'lsa <code>.passthrough()</code>, taqiqlash kerak bo'lsa <code>.strict()</code> ishlatiladi. Bu API shartnomasini aniq belgilashda muhim tanlov."
    }
   ],
   "quiz": [
    {
     "q": "`safeParse` muvaffaqiyatsizlikda nima qaytaradi?",
     "options": [
      "`null`",
      "Xato tashlaydi",
      "`{ success: false, error }` obyektini",
      "Bo'sh massiv"
     ],
     "answer": 2,
     "explain": "`safeParse` hech qachon throw qilmaydi; u diskriminant union ko'rinishidagi natija qaytaradi va xato `error` maydonida bo'ladi."
    },
    {
     "q": "Zod obyekt sxemasi standart holatda noma'lum kalitlar bilan nima qiladi?",
     "options": [
      "Ularni o'chirib tashlaydi",
      "Ularni saqlaydi",
      "Xato beradi",
      "Ularni `any` ga aylantiradi"
     ],
     "answer": 0,
     "explain": "Standart rejimda faqat sxemada ko'rsatilgan kalitlar qoladi. Saqlash uchun `.passthrough()`, xato berish uchun `.strict()` kerak."
    },
    {
     "q": "Nega tashqi JSON'ni `as Talaba` bilan tipga kiritish xavfli?",
     "options": [
      "Chunki `as` sekin ishlaydi",
      "Chunki u JSON'ni o'zgartirib yuboradi",
      "Chunki `as` faqat massivlarda ishlaydi",
      "Chunki u hech qanday runtime tekshiruv qilmaydi"
     ],
     "answer": 3,
     "explain": "`as` faqat kompilyatorni ishontiradi. Noto'g'ri maydon yoki tip kelsa, xato keyinroq, uzoq joyda portlaydi. Zod esa chegarada tekshiradi."
    }
   ]
  },
  {
   "id": 59,
   "title": "z.infer va API chegarasida parsing",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Sxema — haqiqat manbai. Undan <code>z.infer</code> orqali tip olib, qo'lda yozilgan interfeys bilan takrorlanishni yo'qotasiz. <code>z.input</code> transformatsiyadan oldingi, <code>z.output</code> esa keyingi tipni beradi — bu forma va API qatlamlarida juda muhim farq."
    },
    {
     "type": "code",
     "title": "z.infer va coerce",
     "code": "import { z } from \"zod\";\n\nconst YangiPost = z.object({\n  sarlavha: z.string().min(3),\n  korishlar: z.coerce.number().int().nonnegative().default(0),\n});\n\ntype YangiPost = z.infer<typeof YangiPost>;\n\nfunction yarat(input: unknown): YangiPost {\n  return YangiPost.parse(input);\n}\n\nconst post = yarat({ sarlavha: \"TS asoslari\", korishlar: \"12\" });\nconsole.log(post.korishlar);\nconsole.log(typeof post.korishlar);",
     "output": "12\nnumber"
    },
    {
     "type": "p",
     "html": "HTML forma maydonlari har doim satr qaytaradi. <code>z.coerce.number()</code> kirishni avtomatik songa aylantiradi, <code>.default(0)</code> esa maydon umuman kelmasa qiymat beradi. <code>z.infer</code> natijasida <code>korishlar: number</code> bo'ladi, ya'ni keyingi qatlamda qayta parse qilish shart emas."
    },
    {
     "type": "code",
     "title": "transform va input/output tiplari",
     "code": "import { z } from \"zod\";\n\nconst Sana = z.string().transform((s) => new Date(s));\ntype SanaKirish = z.input<typeof Sana>;\ntype SanaChiqish = z.output<typeof Sana>;\n\nconst kirish: SanaKirish = \"2026-10-23\";\nconst d: SanaChiqish = Sana.parse(kirish);\n\nconsole.log(d instanceof Date);\nconsole.log(d.toISOString().slice(0, 10));",
     "output": "true\n2026-10-23"
    },
    {
     "type": "ul",
     "items": [
      "Sxemani <code>shared</code> paketga qo'ying — backend va frontend bitta shartnomadan foydalanadi.",
      "Tashqi chegara: <code>unknown</code> → sxema → tipli obyekt. Ichki qatlamlarda esa allaqachon tip ishonchli.",
      "Transformatsiya bor joyda <code>z.input</code> va <code>z.output</code> ni alohida ishlating.",
      "Xato xabarlarini foydalanuvchi tilida yozing, maydon yo'lini forma xatolariga bog'lang."
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Sxema va tipni takrorlamang",
     "html": "Avval interfeys yozib, keyin unga mos sxema yasash ikki manba yaratadi va ular vaqt o'tib ajralib ketadi. Sxemadan <code>z.infer</code> olish yagona manba tamoyilini saqlaydi. Faqat tip kerak bo'lsa, sxema baribir runtime qiymat sifatida bundle'ga tushishini unutmang."
    }
   ],
   "quiz": [
    {
     "q": "`z.infer<typeof Sxema>` qanday tipni beradi?",
     "options": [
      "Sxemaning o'z tipini",
      "Parse natijasidagi chiqish tipini",
      "Har doim `unknown`",
      "Sxema kalitlari unionini"
     ],
     "answer": 1,
     "explain": "`z.infer` sxemadan chiqadigan xulosa tipini oladi; transformatsiya bo'lsa natijaviy (output) tip qaytadi."
    },
    {
     "q": "Transformatsiyali sxemada `z.input` nimani bildiradi?",
     "options": [
      "Transformatsiyadan keyingi natija tipini",
      "Faqat ixtiyoriy maydonlarni",
      "Transformatsiyadan oldingi qabul qilinadigan tipni",
      "Xatolar massivini"
     ],
     "answer": 2,
     "explain": "`z.input` — parse'ga beriladigan xom ma'lumot tipi, `z.output` esa transformatsiyadan keyingi natija tipi."
    },
    {
     "q": "Validatsiyani qayerda bajarish eng mantiqiy?",
     "options": [
      "Tizim chegarasida: HTTP, fayl yoki xabar qabul qilingan joyda",
      "Har bir funksiya ichida",
      "Faqat testlarda",
      "Faqat frontendda"
     ],
     "answer": 0,
     "explain": "Chegarada bir marta parse qilinsa, ichki qatlamlar tipli ma'lumotga ishonishi mumkin. Har joyda takroriy parse ortiqcha va chalkash bo'ladi."
    }
   ]
  },
  {
   "id": 60,
   "title": "Xatolarni tiplash: Result va exhaustiveness",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Har bir xato uchun <code>throw</code> ishlatish har doim ham to'g'ri emas: ba'zi xatolar kutilgan natija (masalan, validatsiya yoki topilmadi). <b>Result</b> tipi muvaffaqiyat va xatoni bitta qaytish qiymatida ifodalaydi, kompilyator esa ikkala tarmoqni tekshirishga majbur qiladi. Bu funksional uslubdagi xatolarni boshqarishning asosidir."
    },
    {
     "type": "code",
     "title": "Result tipi",
     "code": "type Ok<T> = { ok: true; value: T };\ntype Err<E> = { ok: false; error: E };\ntype Result<T, E> = Ok<T> | Err<E>;\n\nfunction bolish(a: number, b: number): Result<number, string> {\n  if (b === 0) {\n    return { ok: false, error: \"nolga bo'lish mumkin emas\" };\n  }\n  return { ok: true, value: a / b };\n}\n\nconst r = bolish(10, 4);\nif (r.ok) console.log(r.value);\nelse console.log(r.error);",
     "output": "2.5"
    },
    {
     "type": "p",
     "html": "<code>r.ok</code> diskriminant bo'lgani uchun <code>if</code> ichida <code>r.value</code>, <code>else</code> ichida <code>r.error</code> mavjud. Agar xato e'tibordan chetda qolsa, TypeScript qaysi maydon borligini bilmaydi va xato beradi. Bu <code>try/catch</code> dagi \"xatoni unutish\" muammosini yo'q qiladi."
    },
    {
     "type": "code",
     "title": "never bilan to'liqlik tekshiruvi",
     "code": "type Holat = \"kutilmoqda\" | \"bajarildi\" | \"bekor\";\n\nfunction izoh(h: Holat): string {\n  switch (h) {\n    case \"kutilmoqda\":\n      return \"Kutilmoqda\";\n    case \"bajarildi\":\n      return \"Bajarildi\";\n    case \"bekor\":\n      return \"Bekor qilindi\";\n    default: {\n      const tugadi: never = h;\n      return tugadi;\n    }\n  }\n}\n\nconsole.log(izoh(\"bajarildi\"));",
     "output": "Bajarildi"
    },
    {
     "type": "ul",
     "items": [
      "Kutilgan xato — <code>Result</code>; dastur buzilishi — <code>throw</code>.",
      "<code>never</code> ga tayinlash orqali yangi variant qo'shilganda kompilyator darhol ogohlantiradi.",
      "Xato tipini <code>string</code> emas, alohida union yoki klass bilan modellashtiring.",
      "HTTP qatlamida <code>Result</code> ni status kodga aylantirish oddiy va markazlashgan bo'ladi."
     ]
    }
   ],
   "quiz": [
    {
     "q": "Result tipining asosiy afzalligi nimada?",
     "options": [
      "Xatoni e'tiborsiz qoldirishga imkon beradi",
      "Ish vaqtini tezlashtiradi",
      "Barcha xatolarni avtomatik tuzatadi",
      "Muvaffaqiyat va xatoni tip darajasida ajratib, ikkalasini tekshirishga majbur qiladi"
     ],
     "answer": 3,
     "explain": "Diskriminant union tufayli `ok` tekshirilmasa, `value` yoki `error` ga xavfsiz murojaat qilib bo'lmaydi."
    },
    {
     "q": "`switch` ning `default` tarmog'ida `const x: never = h;` yozishdan maqsad nima?",
     "options": [
      "Xotirani tejash",
      "Yangi variant qo'shilsa, qoplanmagan holatni kompilyator aniqlashi",
      "Qiymatni `any` ga aylantirish",
      "Runtime'da xato tashlash"
     ],
     "answer": 1,
     "explain": "Barcha variantlar qoplangan bo'lsa, `h` faqat `never` bo'lishi mumkin. Yangi variant qo'shilsa, tayinlash xato beradi va kod yangilanishini talab qiladi."
    },
    {
     "q": "`never` tipi qanday xususiyatga ega?",
     "options": [
      "Faqat `null` qabul qiladi",
      "Faqat `string` ga tayinlanadi",
      "Hech qanday qiymat qabul qilmaydi va barcha tipga tayinlanadi",
      "Ish vaqtida `undefined` bo'ladi"
     ],
     "answer": 2,
     "explain": "`never` bo'sh tip: uning qiymati yo'q, lekin u har qanday tipning ostida turadi, shuning uchun `never` ni boshqa tipga tayinlash mumkin."
    }
   ]
  },
  {
   "id": 61,
   "title": "Ilg'or generiklar: bir nechta parametr va cheklovlar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Generik parametrlar bir-biriga bog'lanishi mumkin: <code>K extends keyof T</code> kalitni aniq tipga bog'laydi, standart parametrlar esa chaqiruvni soddalashtiradi. TS 5 dagi <code>const</code> tip parametri literal qiymatlarni kengaytirmasdan saqlaydi — bu konfiguratsiya va tuple qaytaruvchi funksiyalar uchun juda foydali."
    },
    {
     "type": "code",
     "title": "kalit va qiymat bog'lanishi",
     "code": "function xossa<T, K extends keyof T>(obj: T, kalit: K): T[K] {\n  return obj[kalit];\n}\n\nconst talaba = { ism: \"Aziza\", yosh: 16 };\nconsole.log(xossa(talaba, \"ism\"));\nconsole.log(xossa(talaba, \"yosh\") + 1);\n\n// @ts-expect-error \"manzil\" kaliti mavjud emas\nxossa(talaba, \"manzil\");",
     "output": "Aziza\n17"
    },
    {
     "type": "p",
     "html": "Bu yerda <code>T[K]</code> indekslangan murojaat bo'lib, qaytish tipi tanlangan kalitga qarab o'zgaradi: <code>\"ism\"</code> uchun <code>string</code>, <code>\"yosh\"</code> uchun <code>number</code>. Noto'g'ri kalit esa kompilyatsiyada to'xtatiladi. Bu naqsh API javoblarini xavfsiz o'qishda asos bo'ladi."
    },
    {
     "type": "code",
     "title": "const parametr va standart tip",
     "code": "function juftlik<const A extends readonly unknown[]>(...qiymatlar: A): A {\n  return qiymatlar;\n}\n\nconst j = juftlik(\"a\", 1, true);\nconsole.log(j.length);\nconsole.log(j[1]);\n\ntype Konfig<T extends Record<string, unknown>, K extends keyof T = keyof T> = {\n  manba: T;\n  kalitlar: K[];\n};\n\nconst k: Konfig<{ tema: string; til: string }> = {\n  manba: { tema: \"qorong'i\", til: \"uz\" },\n  kalitlar: [\"tema\", \"til\"],\n};\nconsole.log(k.kalitlar.join(\",\"));",
     "output": "3\n1\ntema,til"
    },
    {
     "type": "table",
     "head": [
      "Yozuv",
      "Natija"
     ],
     "rows": [
      [
       "<code>T</code>",
       "Erkin tip parametri"
      ],
      [
       "<code>K extends keyof T</code>",
       "K faqat T kalitlari bo'la oladi"
      ],
      [
       "<code>K = keyof T</code>",
       "Standart qiymat beriladi"
      ],
      [
       "<code>const T</code>",
       "Literal va tuple saqlanadi, kengaymaydi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "const generik qachon kerak",
     "html": "Oddiy generik massivni <code>(string | number | boolean)[]</code> ga kengaytirib yuborishi mumkin. <code>const</code> parametr esa aniq tuple <code>readonly [\"a\", 1, true]</code> ni saqlaydi. Marshaler, router va konfiguratsiya yordamchilarida bu muhim."
    }
   ],
   "quiz": [
    {
     "q": "`K extends keyof T` cheklovi nimani kafolatlaydi?",
     "options": [
      "K faqat T tipida mavjud kalitlardan biri bo'ladi",
      "K har doim string bo'ladi",
      "T faqat obyekt bo'ladi",
      "K va T bir xil tip bo'ladi"
     ],
     "answer": 0,
     "explain": "`keyof T` kalitlar unionini beradi, `K extends` esa K ni shu union bilan cheklaydi. Natijada mavjud bo'lmagan kalit rad etiladi."
    },
    {
     "q": "Tip parametriga standart qiymat qanday yoziladi?",
     "options": [
      "`<T extends Default>`",
      "`<T: Default>`",
      "`<T default Default>`",
      "`<T = Default>`"
     ],
     "answer": 3,
     "explain": "Standart tip parametri tenglik belgisi bilan yoziladi: `type Konfig<T, K = keyof T>`. Chaqiruvda K ko'rsatilmasa, standart ishlatiladi."
    },
    {
     "q": "`const` tip parametri nima qiladi?",
     "options": [
      "Qiymatni runtime'da muzlatadi",
      "Literal va tuple tiplarni kengaytirmasdan saqlaydi",
      "Faqat `as const` bilan ishlaydi",
      "Tip parametrini o'zgarmas qiladi"
     ],
     "answer": 1,
     "explain": "`function f<const T>(x: T)` argumentdan literal tipni xulosa qiladi, oddiy T esa ko'pincha kengroq tipga kengayadi."
    }
   ]
  },
  {
   "id": 62,
   "title": "Generik builder va factory patternlar",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Builder har bir qo'shilgan maydonni tipga jamlay oladi: har chaqiruvda yangi generik holat qaytariladi. Natijada <code>yasa()</code> aynan yig'ilgan maydonlar tipini beradi, ortiqcha yoki yetishmayotgan maydon esa kompilyatorda ko'rinadi. Factory esa obyekt yaratishni markazlashtiradi, lekin uning tip xavfsizligini alohida ta'minlash kerak."
    },
    {
     "type": "code",
     "title": "tipni jamlovchi builder",
     "code": "class SorovBuilder<B extends Record<string, unknown> = {}> {\n  private params: Record<string, unknown> = {};\n\n  qosh<K extends string, V>(kalit: K, qiymat: V): SorovBuilder<B & Record<K, V>> {\n    this.params[kalit] = qiymat;\n    return this as unknown as SorovBuilder<B & Record<K, V>>;\n  }\n\n  yasa(): B {\n    return this.params as B;\n  }\n}\n\nconst sorov = new SorovBuilder()\n  .qosh(\"sahifa\", 2)\n  .qosh(\"qidiruv\", \"ts\")\n  .yasa();\n\nconsole.log(sorov.sahifa);\nconsole.log(sorov.qidiruv);",
     "output": "2\nts"
    },
    {
     "type": "p",
     "html": "Har bir <code>qosh</code> chaqiruvi <code>B</code> ga yangi kalitni qo'shadi. Shu sababli <code>sorov.sahifa</code> va <code>sorov.qidiruv</code> kompilyatorga ma'lum. Ichkarida <code>as unknown as</code> ishlatilgan, chunki sinf ichidagi parametr tipi generik holat bilan avtomatik bog'lanmaydi — bu builder'ning amaliy cheklovi."
    },
    {
     "type": "code",
     "title": "factory registri",
     "code": "const registr = new Map<string, () => unknown>();\n\nfunction royxat<T>(nom: string, yarat: () => T): void {\n  registr.set(nom, yarat);\n}\n\nfunction ol<T>(nom: string): T {\n  const yarat = registr.get(nom);\n  if (!yarat) throw new Error(\"topilmadi: \" + nom);\n  return yarat() as T;\n}\n\nroyxat(\"sana\", () => new Date(\"2026-01-01\"));\nconst d = ol<Date>(\"sana\");\nconsole.log(d.getFullYear());\nconsole.log(registr.size);",
     "output": "2026\n1"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Factory'da tip ishonchi",
     "html": "Registr ish vaqtida tipni saqlamaydi: <code>ol&lt;Date&gt;(\"sana\")</code> dagi <code>Date</code> — sizning va'dangiz, kompilyator tekshira olmaydi. Registr kalitlarini union tip bilan bog'lang yoki sxema orqali natijani tekshiring."
    },
    {
     "type": "ul",
     "items": [
      "Builder — bosqichma-bosqich yig'iladigan so'rov yoki konfiguratsiya uchun.",
      "Har bir metod qaytish tipini yangilang: <code>SorovBuilder&lt;B &amp; Record&lt;K, V&gt;&gt;</code>.",
      "Factory ichida <code>unknown</code> dan chiqishda validatsiya qo'shish xavfsizlikni oshiradi.",
      "Zanjir tugagach <code>yasa()</code> ni chaqirishni unutmang — yo'qsa tip emas, builder qaytadi."
     ]
    }
   ],
   "quiz": [
    {
     "q": "Builder'da har bir `qosh` chaqiruvi qaytish tipini nima uchun yangilaydi?",
     "options": [
      "Ish vaqtida maydonlarni tekshirish uchun",
      "Xotirani kamaytirish uchun",
      "Yig'ilgan maydonlar tipini keyingi chaqiruvlarga olib o'tish uchun",
      "Metodlarni private qilish uchun"
     ],
     "answer": 2,
     "explain": "Yangi generik holat oldingi maydonlar bilan kesishadi, shuning uchun `yasa()` to'liq yig'ilgan tipni qaytaradi."
    },
    {
     "q": "Factory registrida `ol<T>(nom)` tip xavfsizligi bo'yicha qanday cheklov bor?",
     "options": [
      "Registr kaliti va T o'rtasidagi bog'lanish runtime'da tekshirilmaydi",
      "U har doim to'liq xavfsiz",
      "Faqat sinflar bilan ishlaydi",
      "T faqat string bo'lishi mumkin"
     ],
     "answer": 0,
     "explain": "Generic faqat kompilyator uchun va'da; Map ish vaqtida qanday obyekt saqlanishini bilmaydi. Noto'g'ri kalit va T mos kelmasligi mumkin."
    },
    {
     "q": "Builder zanjirida `yasa()` ni chaqirmasdan natijani ishlatsangiz nima bo'ladi?",
     "options": [
      "Natija avtomatik obyektga aylanadi",
      "Kompilyator har doim xato beradi",
      "Runtime'da xato tashlanadi",
      "Builder obyektining o'zi qaytadi, kutilgan tip emas"
     ],
     "answer": 3,
     "explain": "`yasa()` yakuniy tipni qaytaradi; usiz builder instansiyasi qoladi. Ba'zi builder'larda bu kompilyator orqali ham taqiqlanadi."
    }
   ]
  },
  {
   "id": 63,
   "title": "Declaration merging va modul augmentation",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "TypeScript bir xil nomdagi e'lonlarni birlashtira oladi: interfeyslar qo'shiladi, namespace'lar kengayadi, modul esa <code>declare module</code> orqali to'ldiriladi. Bu xususiyat kutubxona tiplarini kengaytirishda, ayniqsa Express <code>Request</code> ga o'z maydonlarini qo'shishda keng qo'llanadi. Lekin merging global nomlar fazosini ifloslantirishi mumkin."
    },
    {
     "type": "code",
     "title": "interface va namespace merging",
     "code": "interface Sozlama {\n  tema: string;\n}\ninterface Sozlama {\n  til: string;\n}\n\nconst s: Sozlama = { tema: \"qorong'i\", til: \"uz\" };\nconsole.log(s.tema + \"/\" + s.til);\n\nnamespace Hisob {\n  export const pi = 3.14;\n}\nnamespace Hisob {\n  export function doira(r: number): number {\n    return pi * r * r;\n  }\n}\nconsole.log(Hisob.doira(2).toFixed(2));",
     "output": "qorong'i/uz\n12.56"
    },
    {
     "type": "p",
     "html": "Interfeys mergingida bir xil nomli a'zolar bir xil tipga ega bo'lishi shart, aks holda xato chiqadi. Namespace merging esa funksiya va konstanta kabi qiymatlarni bitta nom ostida yig'adi. Zamonaviy kodda namespace o'rniga ES modullar afzal, lekin eski kutubxonalar bilan ishlashda merging bilimi kerak."
    },
    {
     "type": "code",
     "title": "Express Request ni kengaytirish",
     "code": "import type { Request } from \"express\";\n\ndeclare module \"express-serve-static-core\" {\n  interface Request {\n    foydalanuvchi?: { id: number; rol: \"admin\" | \"user\" };\n  }\n}\n\nfunction kontekst(req: Request): string {\n  return req.foydalanuvchi ? req.foydalanuvchi.rol : \"mehmon\";\n}\n\nconsole.log(kontekst({} as Request));",
     "output": "mehmon"
    },
    {
     "type": "ul",
     "items": [
      "Modul augmentation mavjud tipni almashtirmaydi, unga qo'shadi.",
      "Augmentatsiya fayli <code>declare module</code> bilan boshlanadi va modul sifatida ko'rinishi kerak (import/export bo'lishi shart).",
      "Global tipni kengaytirish uchun <code>declare global</code> ishlatiladi, lekin bu butun loyihaga ta'sir qiladi.",
      "Kutubxona versiyasi o'zgarsa, augmentation eskirishi mumkin — testlar bilan qo'llab-quvvatlang."
     ]
    }
   ],
   "quiz": [
    {
     "q": "Ikki `interface Sozlama` e'loni qanday natija beradi?",
     "options": [
      "Ikkinchisi birinchisini almashtiradi",
      "Ularning a'zolari birlashtiriladi",
      "Kompilyator duplicate xato beradi",
      "Faqat birinchisi ishlatiladi"
     ],
     "answer": 1,
     "explain": "Interfeyslar declaration merging orqali birlashadi. Bir xil nomli a'zolar tipi mos bo'lishi kerak."
    },
    {
     "q": "Express `Request` tipiga maydon qo'shish uchun to'g'ri yo'l qaysi?",
     "options": [
      "`type Request = { ... }`",
      "`class Request { ... }`",
      "`declare module \"express-serve-static-core\" { interface Request { ... } }`",
      "`namespace Request { ... }`"
     ],
     "answer": 2,
     "explain": "Express tiplari `express-serve-static-core` modulida e'lon qilingan; augmentation o'sha modul nomi bilan yoziladi."
    },
    {
     "q": "Modul augmentatsiyasi qaysi holatda ishlamaydi?",
     "options": [
      "Fayl modul bo'lmasa, ya'ni import/export bo'lmasa",
      "Fayl `.ts` bo'lsa",
      "Interfeys ishlatilsa",
      "Strict rejim yoqilgan bo'lsa"
     ],
     "answer": 0,
     "explain": "`declare module` augmentation faqat modul kontekstida ishlaydi. Fayl global script bo'lsa, u modul sifatida qaralmaydi; kamida bo'sh `export {}` qo'shish kerak."
    }
   ]
  },
  {
   "id": 64,
   "title": "Dependency injection va interfeys arxitekturasi",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Dependency injection (DI) — sinf o'z bog'liqliklarini o'zi yaratmasdan, tashqaridan qabul qilishi. TypeScript'da bu odatda interfeys va konstruktor parametri orqali amalga oshiriladi. Natijada qatlamlar bir-biriga kam bog'lanadi, testda esa haqiqiy bazani oddiy fake bilan almashtirish mumkin bo'ladi."
    },
    {
     "type": "code",
     "title": "interfeys orqali injection",
     "code": "interface Ombor {\n  saqla(mahsulot: string): void;\n  hammasi(): string[];\n}\n\nclass XotiraOmbori implements Ombor {\n  private items: string[] = [];\n  saqla(m: string): void { this.items.push(m); }\n  hammasi(): string[] { return [...this.items]; }\n}\n\nclass Xizmat {\n  constructor(private ombor: Ombor) {}\n  qosh(m: string): void { this.ombor.saqla(m); }\n  royxat(): string[] { return this.ombor.hammasi(); }\n}\n\nconst xizmat = new Xizmat(new XotiraOmbori());\nxizmat.qosh(\"Olma\");\nxizmat.qosh(\"Nok\");\nconsole.log(xizmat.royxat().join(\", \"));",
     "output": "Olma, Nok"
    },
    {
     "type": "p",
     "html": "<code>Xizmat</code> aniq <code>XotiraOmbori</code> ga bog'lanmagan — unga faqat <code>Ombor</code> shartnomasi muhim. Bu <b>Dependency Inversion</b> tamoyilining amaliy ko'rinishi. Obyektlarni yig'ish joyi (composition root) odatda ilova kirish nuqtasida bo'ladi."
    },
    {
     "type": "code",
     "title": "test uchun fake",
     "code": "class FakeOmbor implements Ombor {\n  yozuvlar: string[] = [];\n  saqla(m: string): void { this.yozuvlar.push(m.toUpperCase()); }\n  hammasi(): string[] { return this.yozuvlar; }\n}\n\nconst fake = new FakeOmbor();\nconst xizmat = new Xizmat(fake);\nxizmat.qosh(\"olma\");\n\nconsole.log(fake.yozuvlar[0]);\nconsole.log(fake.yozuvlar.length);",
     "output": "OLMA\n1"
    },
    {
     "type": "table",
     "head": [
      "Yondashuv",
      "Bog'lanish",
      "Test qulayligi"
     ],
     "rows": [
      [
       "Sinf ichida `new`",
       "Yuqori",
       "Past"
      ],
      [
       "Konstruktor injection",
       "Past",
       "Yuqori"
      ],
      [
       "Global singleton",
       "O'rtacha",
       "O'rtacha"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Interfeysni qayerda e'lon qilish",
     "html": "Interfeysni iste'molchi modulda emas, domen qatlamida e'lon qiling. Shunda infratuzilma (Postgres, Redis, HTTP) domen qoidalariga bog'lanmaydi va almashtirish oson bo'ladi."
    }
   ],
   "quiz": [
    {
     "q": "Konstruktor injection ning asosiy foydasi nima?",
     "options": [
      "Kod hajmini kichraytiradi",
      "Runtime tezligini oshiradi",
      "Interfeyslarni avtomatik yaratadi",
      "Bog'liqlikni tashqaridan almashtirish va test qilish osonlashadi"
     ],
     "answer": 3,
     "explain": "Sinf konkret implementatsiyani o'zi yaratmaydi; test yoki boshqa muhitda fake berish mumkin."
    },
    {
     "q": "Composition root nima?",
     "options": [
      "Interfeys e'lon qilinadigan fayl",
      "Ilova kirish nuqtasida obyektlar va bog'liqliklar yig'iladigan joy",
      "Test fayli",
      "tsconfig sozlamasi"
     ],
     "answer": 1,
     "explain": "Composition root — barcha konkret implementatsiyalar tanlanib, obyektlar grafi quriladigan markaziy joy."
    },
    {
     "q": "Nega `Xizmat` ichida `new XotiraOmbori()` yozish yomon?",
     "options": [
      "Chunki u sekin ishlaydi",
      "Chunki TypeScript buni taqiqlaydi",
      "Chunki sinf konkret infratuzilmaga bog'lanib qoladi va uni almashtirish qiyinlashadi",
      "Chunki konstruktor parametri bo'lmaydi"
     ],
     "answer": 2,
     "explain": "To'g'ridan-to'g'ri yaratish qattiq bog'lanish yaratadi: testda bazani almashtirish yoki konfiguratsiya berish qiyin bo'ladi."
    }
   ]
  },
  {
   "id": 65,
   "title": "Tipli repository va API klient qatlami",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Katta ilovada ma'lumotlarga murojaat qilish kodning turli joylariga tarqalib ketmasligi kerak. <b>Repository</b> interfeysi domen qatlamiga \"nima kerak\"ni aytadi, infratuzilma esa \"qanday olinadi\"ni hal qiladi. Tashqi API bilan ishlaganda esa javobni <code>unknown</code> deb qabul qilib, sxema orqali parse qilish standart amaliyotdir."
    },
    {
     "type": "code",
     "title": "generik repository",
     "code": "type Entity = { id: number };\n\ninterface Repository<T extends Entity> {\n  top(id: number): Promise<T | null>;\n  hammasi(): Promise<T[]>;\n}\n\nclass XotiraRepository<T extends Entity> implements Repository<T> {\n  constructor(private data: T[] = []) {}\n  async top(id: number): Promise<T | null> {\n    return this.data.find((x) => x.id === id) ?? null;\n  }\n  async hammasi(): Promise<T[]> {\n    return [...this.data];\n  }\n}\n\ntype Post = { id: number; sarlavha: string };\nconst repo = new XotiraRepository<Post>([{ id: 1, sarlavha: \"TS\" }]);\nrepo.top(1).then((p) => console.log(p?.sarlavha));\nrepo.hammasi().then((p) => console.log(p.length));",
     "output": "TS\n1"
    },
    {
     "type": "p",
     "html": "<code>T extends Entity</code> cheklovi barcha repository turlarida <code>id</code> borligini kafolatlaydi. Xotira implementatsiyasi test va prototip uchun qulay; production'da xuddi shu interfeysni Postgres yoki Prisma bilan amalga oshirasiz. Domen kodi qaysi baza ishlatilayotganini bilmaydi."
    },
    {
     "type": "code",
     "title": "sxema bilan API klient",
     "code": "import { z } from \"zod\";\n\nconst PostSxema = z.object({ id: z.number(), sarlavha: z.string() });\ntype Post = z.infer<typeof PostSxema>;\n\ntype FetchFn = (url: string) => Promise<{\n  ok: boolean;\n  status: number;\n  json(): Promise<unknown>;\n}>;\n\nasync function api<T>(\n  yol: string,\n  sxema: z.ZodType<T>,\n  fetchFn: FetchFn,\n): Promise<T> {\n  const javob = await fetchFn(\"https://api.noldan.uz\" + yol);\n  if (!javob.ok) throw new Error(\"HTTP \" + javob.status);\n  return sxema.parse(await javob.json());\n}\n\nconst fakeFetch: FetchFn = async () => ({\n  ok: true,\n  status: 200,\n  json: async () => ({ id: 1, sarlavha: \"Tipli API\" }),\n});\n\napi(\"/posts/1\", PostSxema, fakeFetch).then((p) => console.log(p.sarlavha));",
     "output": "Tipli API"
    },
    {
     "type": "ul",
     "items": [
      "Repository interfeysi domen tipini qaytaradi, HTTP yoki SQL tafsilotlarini emas.",
      "Har bir tashqi javobni sxema bilan parse qiling: <code>as Post</code> kafolat bermaydi.",
      "Xatolarni yagona formatga keltiring: tarmoq xatosi, HTTP xatosi va validatsiya xatosi alohida.",
      "Keshlash, retry va autentifikatsiya kabi kesishuvchi masalalarni alohida qatlamga chiqaring."
     ]
    },
    {
     "type": "note",
     "variant": "success",
     "title": "Testda fetch'ni almashtirish",
     "html": "Yuqoridagi funksiya <code>fetchFn</code> ni parametr sifatida qabul qiladi. Bu DI yondashuvi tufayli testda haqiqiy tarmoqqa chiqmasdan, oldindan tayyorlangan javob bilan klientni tekshirish mumkin."
    }
   ],
   "quiz": [
    {
     "q": "Repository interfeysidagi `T extends Entity` cheklovi nima uchun kerak?",
     "options": [
      "Barcha entity'larda `id` borligini kafolatlash uchun",
      "T ni faqat string qilish uchun",
      "Ma'lumotni JSON'ga aylantirish uchun",
      "Bazani avtomatik yaratish uchun"
     ],
     "answer": 0,
     "explain": "`Entity` — `{ id: number }`. Cheklov tufayli repository metodlari `x.id` ga xavfsiz murojaat qiladi."
    },
    {
     "q": "Tashqi API javobini tiplashning eng xavfsiz yo'li qaysi?",
     "options": [
      "`const data = await res.json() as Post`",
      "`const data: Post = await res.json()`",
      "Javobni `any` ga aylantirish",
      "`unknown` qabul qilib, sxema orqali parse qilish"
     ],
     "answer": 3,
     "explain": "`json()` har qanday shakl qaytarishi mumkin. Sxema ish vaqtida tekshiradi va faqat mos ma'lumotni tipli qatlamga o'tkazadi."
    },
    {
     "q": "API klient funksiyasiga `fetchFn` ni parametr qilib berishning foydasi nima?",
     "options": [
      "So'rov tezligi oshadi",
      "Testda tarmoqsiz fake bilan almashtirish mumkin bo'ladi",
      "TypeScript fetch'ni tekshirmaydi",
      "Avtomatik autentifikatsiya qo'shiladi"
     ],
     "answer": 1,
     "explain": "Bu dependency injectionning oddiy ko'rinishi: testda deterministik javob qaytaruvchi funksiya beriladi."
    }
   ]
  },
  {
   "id": 66,
   "title": "TC39 dekoratorlari: class va method",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "TypeScript 5 standart (TC39) dekoratorlarini qo'llab-quvvatlaydi. Ular <code>experimentalDecorators</code> bayrog'isiz ishlaydi va kontekst obyekti orqali boyroq ma'lumot beradi. Dekorator — <code>@</code> bilan yoziladigan funksiya bo'lib, class, metod, accessor yoki maydon ta'rifini o'raydi. Muhim farq: standart dekoratorlarda parametr dekoratorlari yo'q."
    },
    {
     "type": "code",
     "title": "class dekoratori",
     "code": "function muhr<T extends abstract new (...args: any[]) => any>(\n  value: T,\n  context: ClassDecoratorContext<T>,\n): T {\n  context.addInitializer(function () {\n    console.log(\"sinf ro'yxatga olindi:\", String(context.name));\n  });\n  return value;\n}\n\n@muhr\nclass Hisoblagich {\n  qiymat = 0;\n  oshir(): number {\n    this.qiymat += 1;\n    return this.qiymat;\n  }\n}\n\nconsole.log(new Hisoblagich().oshir());",
     "output": "sinf ro'yxatga olindi: Hisoblagich\n1"
    },
    {
     "type": "p",
     "html": "Class dekoratori class'ning o'zini qaytarishi yoki almashtirishi mumkin. <code>context.addInitializer</code> class tayyor bo'lgach bir marta bajariladigan qo'shimcha ishni ro'yxatdan o'tkazadi. Diqqat: bu initializer har bir instansiyada emas, class aniqlanganda ishlaydi — instansiya uchun maydon dekoratoridan foydalaning."
    },
    {
     "type": "code",
     "title": "metod dekoratori",
     "code": "function log<This, Args extends unknown[], R>(\n  value: (this: This, ...args: Args) => R,\n  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => R>,\n) {\n  const nom = String(context.name);\n  return function (this: This, ...args: Args): R {\n    console.log(\"chaqiruv:\", nom, args.join(\",\"));\n    return value.call(this, ...args);\n  };\n}\n\nclass Kalkulyator {\n  @log\n  qosh(a: number, b: number): number {\n    return a + b;\n  }\n}\n\nconsole.log(new Kalkulyator().qosh(2, 3));",
     "output": "chaqiruv: qosh 2,3\n5"
    },
    {
     "type": "table",
     "head": [
      "Dekorator turi",
      "Birinchi argument",
      "Kontekst"
     ],
     "rows": [
      [
       "Class",
       "Class konstruktori",
       "ClassDecoratorContext"
      ],
      [
       "Method",
       "Metod funksiyasi",
       "ClassMethodDecoratorContext"
      ],
      [
       "Field",
       "`undefined`",
       "ClassFieldDecoratorContext"
      ],
      [
       "Accessor",
       "Getter/setter juftligi",
       "ClassAccessorDecoratorContext"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Legacy va standart",
     "html": "<code>experimentalDecorators: true</code> legacy rejimni yoqadi; u parametr dekoratorlarini qo'llaydi, lekin standart bilan mos emas. Yangi loyihada standart dekoratorlarni tanlang. NestJS kabi freymvorklar hozircha legacy rejimga tayanadi."
    }
   ],
   "quiz": [
    {
     "q": "TC39 standart metod dekoratorida ikkinchi argument sifatida qanday obyekt keladi?",
     "options": [
      "Metod nomi satri",
      "Prototype obyekti",
      "Class kontekst obyekti (`ClassMethodDecoratorContext`)",
      "Parametrlar massivi"
     ],
     "answer": 2,
     "explain": "Birinchi argument metod funksiyasi, ikkinchisi kontekst: nom, static/private belgilari va `addInitializer` shu yerda."
    },
    {
     "q": "TC39 standart dekoratorlarida qaysi imkoniyat mavjud emas?",
     "options": [
      "Parametr dekoratori",
      "Class dekoratori",
      "Metod dekoratori",
      "Accessor dekoratori"
     ],
     "answer": 0,
     "explain": "Standart spetsifikatsiyada parametr dekoratorlari yo'q. Ular faqat legacy `experimentalDecorators` rejimida ishlaydi."
    },
    {
     "q": "Metod dekoratoridan funksiya qaytarilsa nima bo'ladi?",
     "options": [
      "Dekorator e'tiborsiz qoldiriladi",
      "Metod private bo'ladi",
      "Class instansiyasi muzlatiladi",
      "Qaytgan funksiya metodni almashtiradi"
     ],
     "answer": 3,
     "explain": "Metod dekoratori yangi funksiya qaytarsa, u asl metod o'rniga qo'yiladi — logging, memoization va retry shu usulda yasaladi."
    }
   ]
  },
  {
   "id": 67,
   "title": "Dekorator factory va konfiguratsiya",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Dekoratorga parametr berish uchun <b>factory</b> ishlatiladi: <code>@logla(\"API\")</code> avval funksiya chaqirib, dekorator qaytaradi. Factory class aniqlanayotganda bir marta bajariladi, qaytgan dekorator esa tegishli elementga qo'llanadi. Bu naqsh routing, ruxsatlar va keshlash kabi konfiguratsiyalarni deklarativ qiladi."
    },
    {
     "type": "code",
     "title": "sozlanadigan metod dekoratori",
     "code": "function logla(prefix: string) {\n  return function <This, Args extends unknown[], R>(\n    value: (this: This, ...args: Args) => R,\n    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => R>,\n  ) {\n    return function (this: This, ...args: Args): R {\n      console.log(\"[\" + prefix + \"] \" + String(context.name));\n      return value.call(this, ...args);\n    };\n  };\n}\n\nclass Xizmat {\n  @logla(\"API\")\n  yukla(id: number): string {\n    return \"post-\" + id;\n  }\n}\n\nconsole.log(new Xizmat().yukla(7));",
     "output": "[API] yukla\npost-7"
    },
    {
     "type": "p",
     "html": "Factory ichidagi <code>prefix</code> yopilgan (closure) holda qoladi. Bir nechta metodga turli sozlamalar berish mumkin, kod takrorlanmaydi. Factory darhol bajarilishini unutmang: uning ichida og'ir ish qilmang, chunki bu class yuklanishida sodir bo'ladi."
    },
    {
     "type": "code",
     "title": "class registry factory",
     "code": "const rotalar = new Map<string, string>();\n\nfunction controller(yol: string) {\n  return function <T extends abstract new (...args: any[]) => any>(\n    value: T,\n    context: ClassDecoratorContext<T>,\n  ): T {\n    rotalar.set(yol, String(context.name));\n    return value;\n  };\n}\n\n@controller(\"/users\")\nclass UsersController {}\n\n@controller(\"/posts\")\nclass PostsController {}\n\nconsole.log(rotalar.get(\"/users\"));\nconsole.log(rotalar.size);",
     "output": "UsersController\n2"
    },
    {
     "type": "ul",
     "items": [
      "Dekorator ifodasi class e'lon qilinayotganda baholanadi, instansiya yaratilganda emas.",
      "Factory parametrlari orqali ruxsat darajasi, kesh muddati yoki route yo'lini bering.",
      "Standart dekoratorlar method, field, accessor va class bilan cheklangan — parametrlar yo'q.",
      "Dekoratorlar tartibini hujjatlashtiring: bir nechta dekorator qo'llansa, bajarilish tartibi muhim."
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Yon ta'sirni cheklang",
     "html": "Dekorator ichida global registry'ni to'ldirish qulay, lekin test izolyatsiyasini buzishi mumkin. Registry'ni har test oldidan tozalang yoki dependency injection orqali bering."
    }
   ],
   "quiz": [
    {
     "q": "`@logla(\"API\")` kabi yozuvda `logla` qachon chaqiriladi?",
     "options": [
      "Metod har safar chaqirilganda",
      "Class e'lon qilinayotganda, dekorator olinayotganda",
      "Class instansiyasi yaratilganda",
      "Faqat test paytida"
     ],
     "answer": 1,
     "explain": "`@ifoda` avval baholanadi. `logla(\"API\")` dekorator funksiyasini qaytaradi, u keyin metodga qo'llanadi."
    },
    {
     "q": "Dekorator factory ning asosiy foydasi nima?",
     "options": [
      "Runtime tezligini oshiradi",
      "Tip xatolarini o'chiradi",
      "Dekoratorni parametrlar bilan sozlash imkonini beradi",
      "Metodni abstract qiladi"
     ],
     "answer": 2,
     "explain": "Factory qo'shimcha argumentlarni qabul qilib, ularni yopilgan holda ishlatadigan dekorator qaytaradi."
    },
    {
     "q": "Dekoratorlar ketma-ket qo'llanganda qaysi omil muhim?",
     "options": [
      "Bajarilish tartibi va bir-biriga ta'siri",
      "Dekoratorlar soni har doim ikkitadan oshmasligi",
      "Faqat class dekoratorlari ishlatilishi",
      "Dekoratorlar faqat productionda ishlashi"
     ],
     "answer": 0,
     "explain": "Bir nechta dekorator bir elementni o'raydi; tartib va ularning bir-biriga ta'siri natijani o'zgartiradi. Buni hujjatlashtirish kerak."
    }
   ]
  },
  {
   "id": 68,
   "title": "reflect-metadata bilan metadata",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Dekoratorlar ko'pincha tip haqidagi ma'lumotni ish vaqtida saqlashi kerak: validatsiya qoidalari, ORM ustunlari, DI tokenlari. <code>reflect-metadata</code> polifilli <code>Reflect.defineMetadata</code> va <code>Reflect.getMetadata</code> API'sini beradi. Legacy dekoratorlar <code>emitDecoratorMetadata</code> bilan birga <code>design:type</code> kabi ma'lumotni avtomatik yozishi mumkin."
    },
    {
     "type": "code",
     "title": "o'z metadata kaliti",
     "code": "import \"reflect-metadata\";\n\nfunction maydon(turi: string): PropertyDecorator {\n  return (target, kalit) => {\n    Reflect.defineMetadata(\"turi\", turi, target, kalit);\n  };\n}\n\nclass Foydalanuvchi {\n  @maydon(\"email\")\n  email!: string;\n}\n\nconst f = new Foydalanuvchi();\nconsole.log(Reflect.getMetadata(\"turi\", f, \"email\"));\nconsole.log(Reflect.hasMetadata(\"turi\", f, \"email\"));",
     "output": "email\ntrue"
    },
    {
     "type": "p",
     "html": "Metadataning kaliti — target (obyekt yoki prototype) va ixtiyoriy property key. Instansiya orqali so'ralsa, metadata prototype zanjiridan topiladi. Bu xususiyat ORM va validatorlarga maydon qoidalarini deklarativ yozish imkonini beradi. Standart dekoratorlarda bunday metadata avtomatik chiqmaydi — uni qo'lda yozish kerak."
    },
    {
     "type": "code",
     "title": "design:type (legacy)",
     "code": "import \"reflect-metadata\";\n\nfunction tekshir(target: object, kalit: string | symbol): void {\n  const turi = Reflect.getMetadata(\"design:type\", target, kalit);\n  console.log(String(kalit), turi.name);\n}\n\nclass Mahsulot {\n  @tekshir\n  narx!: number;\n\n  @tekshir\n  nom!: string;\n}",
     "output": "narx Number\nnom String"
    },
    {
     "type": "table",
     "head": [
      "Sozlama",
      "Vazifasi"
     ],
     "rows": [
      [
       "<code>emitDecoratorMetadata</code>",
       "`design:type` kabi metadatan i avtomatik chiqaradi"
      ],
      [
       "<code>experimentalDecorators</code>",
       "Legacy dekoratorlarni yoqadi"
      ],
      [
       "<code>import \"reflect-metadata\"</code>",
       "Reflect metadata API'sini polyfill qiladi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Runtime narxi",
     "html": "<code>design:type</code> faqat legacy rejimda va faqat dekorator qo'llangan elementlar uchun yoziladi. U tipni to'liq tiklamaydi: generic parametrlar, unionlar va literal tiplar yo'qoladi. Validatsiya uchun Zod kabi sxemalar ishonchliroq."
    }
   ],
   "quiz": [
    {
     "q": "`Reflect.defineMetadata` ishlashi uchun nima kerak?",
     "options": [
      "Faqat tsconfig `strict`",
      "Node.js 12",
      "Class nomi katta harf bilan boshlanishi",
      "`reflect-metadata` polifilli import qilinishi"
     ],
     "answer": 3,
     "explain": "Reflect metadata API standart ECMAScript'da hali yo'q; `reflect-metadata` paketi uni global Reflect obyektiga qo'shadi."
    },
    {
     "q": "`design:type` metadatasini avtomatik olish uchun qaysi sozlama kerak?",
     "options": [
      "`strictNullChecks`",
      "`emitDecoratorMetadata` va legacy dekoratorlar",
      "`noImplicitAny`",
      "`moduleResolution: bundler`"
     ],
     "answer": 1,
     "explain": "`emitDecoratorMetadata` legacy dekoratorlar bilan birga ishlaydi va dekoratorlangan a'zolar uchun `design:type` yozadi."
    },
    {
     "q": "Metadata instansiya orqali o'qilganda qayerdan topiladi?",
     "options": [
      "Faqat instansiyaning o'z maydonidan",
      "Har doim global obyektdan",
      "Prototype zanjiridan",
      "JSON fayldan"
     ],
     "answer": 2,
     "explain": "Property metadata odatda prototype'ga yoziladi; instansiya orqali so'ralganda Reflect prototype zanjiri bo'ylab qidiradi."
    }
   ]
  },
  {
   "id": 69,
   "title": "Dekoratorlar bilan mini DI konteyner",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "NestJS uslubidagi DI dekoratorlar va metadata ustiga quriladi. Bu darsda kichik konteyner yasaymiz: <code>@Injectable</code> class'ni ro'yxatga oladi, <code>@Inject</code> konstruktor parametriga token yozadi, konteyner esa bog'liqliklarni rekursiv yechadi. Kod legacy dekoratorlar va <code>reflect-metadata</code> talab qiladi."
    },
    {
     "type": "code",
     "title": "konteyner yadrosi",
     "code": "import \"reflect-metadata\";\n\nconst zavodlar = new Map<string, () => unknown>();\nconst bogliqliklar = new Map<Function, string[]>();\n\ntype Konstruktor = new (...args: any[]) => any;\n\nfunction Injectable(nom: string) {\n  return function (target: Konstruktor): void {\n    zavodlar.set(nom, () => {\n      const args = (bogliqliklar.get(target) ?? []).map((n) => ol(n));\n      return new target(...args);\n    });\n  };\n}\n\nfunction Inject(nom: string) {\n  return function (\n    target: object,\n    _kalit: string | symbol | undefined,\n    index: number,\n  ): void {\n    const m = bogliqliklar.get(target as unknown as Konstruktor) ?? [];\n    m[index] = nom;\n    bogliqliklar.set(target as unknown as Konstruktor, m);\n  };\n}\n\nfunction ol<T>(nom: string): T {\n  const zavod = zavodlar.get(nom);\n  if (!zavod) throw new Error(\"topilmadi: \" + nom);\n  return zavod() as T;\n}\n\nzavodlar.set(\"demo\", () => 42);\nconsole.log(\"zavodlar:\", zavodlar.size);",
     "output": "zavodlar: 1"
    },
    {
     "type": "p",
     "html": "Ro'yxatdan o'tish tartibi muhim: bog'liqlik yechilayotganda <code>ol</code> chaqiriladi, shuning uchun barcha kerakli xizmatlar oldin ro'yxatga olinishi kerak. Bu sodda konteyner singleton emas — har chaqiruvda yangi instansiya yaratadi. Production'da scope (singleton/transient) va tsikl aniqlash qo'shiladi."
    },
    {
     "type": "code",
     "title": "xizmatlarni ulash",
     "code": "interface Ombor {\n  soni(): number;\n}\n\n@Injectable(\"ombor\")\nclass XotiraOmbor implements Ombor {\n  soni(): number { return 3; }\n}\n\n@Injectable(\"xizmat\")\nclass HisobotXizmati {\n  constructor(@Inject(\"ombor\") private ombor: Ombor) {}\n  hisobot(): string {\n    return \"soni: \" + this.ombor.soni();\n  }\n}\n\nconst xizmat = ol<HisobotXizmati>(\"xizmat\");\nconsole.log(xizmat.hisobot());\nconsole.log(ol<Ombor>(\"ombor\") === ol<Ombor>(\"ombor\"));",
     "output": "soni: 3\nfalse"
    },
    {
     "type": "table",
     "head": [
      "Qism",
      "Vazifasi"
     ],
     "rows": [
      [
       "<code>@Injectable</code>",
       "Class uchun zavod yaratadi va nom bilan ro'yxatga oladi"
      ],
      [
       "<code>@Inject</code>",
       "Konstruktor parametriga token yozadi"
      ],
      [
       "<code>ol&lt;T&gt;</code>",
       "Token bo'yicha instansiya yechadi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Standart dekoratorlar bilan ham mumkin",
     "html": "TC39 dekoratorlarida parametr dekoratori yo'q, lekin maydon dekoratori orqali injection qilish mumkin. Ko'p freymvorklar hali legacy rejimda: yangi loyihada freymvork talabini tekshiring, ikkala rejimni aralashtirmang."
    }
   ],
   "quiz": [
    {
     "q": "Nega bu mini konteynerda avval barcha xizmatlarni ro'yxatga olish kerak?",
     "options": [
      "Chunki `ol` chaqirilganda zavod allaqachon mavjud bo'lishi kerak",
      "Chunki TypeScript aks holda sintaksis xato beradi",
      "Chunki decoratorlar faqat bir marta ishlaydi",
      "Chunki Map bo'sh bo'lishi shart"
     ],
     "answer": 0,
     "explain": "Bog'liqlik yechish paytida `ol(token)` chaqiriladi; token topilmasa xato tashlanadi. Shuning uchun ro'yxatdan o'tish tartibi muhim."
    },
    {
     "q": "`@Inject(\"ombor\")` qaysi dekorator turidan foydalanadi?",
     "options": [
      "Class dekoratori",
      "Field dekoratori (standart)",
      "Accessor dekoratori",
      "Konstruktor parametr dekoratori (legacy)"
     ],
     "answer": 3,
     "explain": "Konstruktor parametriga biriktirilgan dekorator legacy parametr dekoratoridir; standart TC39 dekoratorlarida bunday tur yo'q."
    },
    {
     "q": "`ol<Ombor>(\"ombor\") === ol<Ombor>(\"ombor\")` natijasi nega `false`?",
     "options": [
      "Chunki Ombor interfeys",
      "Chunki har bir chaqiruv yangi instansiya yaratadi (transient scope)",
      "Chunki dekoratorlar ishlamaydi",
      "Chunki `===` obyektlarni taqqoslay olmaydi"
     ],
     "answer": 1,
     "explain": "Konteyner zavodni har safar chaqiradi va `new target(...)` bajaradi. Singleton scope uchun instansiyani keshlash kerak."
    }
   ]
  },
  {
   "id": 70,
   "title": "ORM va validatsiya dekoratorlari",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "TypeORM, NestJS va class-validator kabi kutubxonalar dekoratorlarni metadata manbai sifatida ishlatadi. <code>@Column</code> bazadagi ustunni, <code>@IsEmail</code> esa validatsiya qoidasini tavsiflaydi. Muhim tushuncha: dekoratorlar TypeScript tipini ish vaqtiga olib chiqmaydi — ular faqat siz yozgan konfiguratsiyani saqlaydi."
    },
    {
     "type": "code",
     "title": "ORM uslubidagi metadata",
     "code": "type UstunSozlama = { nom: string; turi: string };\nconst ustunlar: string[] = [];\n\nfunction Ustun(sozlama: UstunSozlama) {\n  return function (target: object, kalit: string | symbol): void {\n    ustunlar.push(sozlama.nom + \":\" + sozlama.turi);\n  };\n}\n\nclass Post {\n  @Ustun({ nom: \"id\", turi: \"int\" })\n  id!: number;\n\n  @Ustun({ nom: \"sarlavha\", turi: \"varchar\" })\n  sarlavha!: string;\n}\n\nconsole.log(ustunlar.join(\", \"));\nconsole.log(Post.name);",
     "output": "id:int, sarlavha:varchar\nPost"
    },
    {
     "type": "p",
     "html": "Haqiqiy ORM shu metadata asosida jadval sxemasini quradi. Lekin sxema o'zgarishi migratsiya talab qiladi: dekoratorni o'zgartirish production bazasini avtomatik yangilamaydi. Shuning uchun migratsiyalarni versiyalab, test bazasida tekshirib borish kerak."
    },
    {
     "type": "code",
     "title": "class-validator bilan tekshirish",
     "code": "import \"reflect-metadata\";\nimport { IsEmail, MinLength, validate } from \"class-validator\";\n\nclass RoyxatDto {\n  @IsEmail({}, { message: \"email noto'g'ri\" })\n  email!: string;\n\n  @MinLength(8, { message: \"parol kamida 8 belgi\" })\n  parol!: string;\n}\n\nconst dto = new RoyxatDto();\ndto.email = \"ali\";\ndto.parol = \"123\";\n\nvalidate(dto).then((xatolar) => {\n  console.log(xatolar.length);\n  console.log(\n    xatolar.map((e) => Object.keys(e.constraints ?? {})[0]).join(\",\"),\n  );\n});",
     "output": "2\nisEmail,minLength"
    },
    {
     "type": "table",
     "head": [
      "Kutubxona",
      "Decorator",
      "Vazifasi"
     ],
     "rows": [
      [
       "TypeORM",
       "<code>@Entity</code>, <code>@Column</code>",
       "Jadval va ustunlar sxemasi"
      ],
      [
       "class-validator",
       "<code>@IsEmail</code>, <code>@MinLength</code>",
       "Runtime validatsiya"
      ],
      [
       "NestJS",
       "<code>@Controller</code>, <code>@Injectable</code>",
       "Routing va DI"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Tiplar yetarli emas",
     "html": "<code>email!: string</code> kompilyator uchun yetarli, ammo noto'g'ri email ish vaqtida ham string. Shu sababli DTO'da ham statik tip, ham runtime qoida kerak. Ikkalasini bir manbadan (masalan, Zod sxemasidan) yasash takrorlanishni kamaytiradi."
    }
   ],
   "quiz": [
    {
     "q": "ORM dekoratori sxemani o'zgartirganda production bazasi haqida nima to'g'ri?",
     "options": [
      "Baza avtomatik yangilanadi",
      "TypeScript bazani o'zi yangilaydi",
      "Migratsiya alohida bajarilishi kerak",
      "Faqat testlarda o'zgaradi"
     ],
     "answer": 2,
     "explain": "Dekorator faqat metadata beradi. Haqiqiy jadval o'zgarishi uchun migratsiya yozish va qo'llash zarur."
    },
    {
     "q": "class-validator qachon ishlaydi?",
     "options": [
      "Ish vaqtida `validate` chaqirilganda",
      "Faqat kompilyatsiyada",
      "Faqat IDE ichida",
      "Faqat JSON parse paytida avtomatik"
     ],
     "answer": 0,
     "explain": "U runtime kutubxonasi: dekoratorlar metadata yozadi, `validate` esa obyektni tekshirib xatolar massivini qaytaradi."
    },
    {
     "q": "Nega `email!: string` o'zi validatsiya hisoblanmaydi?",
     "options": [
      "Chunki `!` faqat readonly uchun",
      "Chunki email har doim `unknown`",
      "Chunki class-validator tipni taqiqlaydi",
      "Chunki tip ish vaqtida o'chadi va noto'g'ri satr baribir string bo'ladi"
     ],
     "answer": 3,
     "explain": "Statik tip faqat kompilyatorga ma'lum. Runtime'da `\"ali\"` ham string, shuning uchun qo'shimcha tekshiruv kerak."
    }
   ]
  },
  {
   "id": 71,
   "title": "tsconfig.json chuqur: strict oilasi",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<code>strict: true</code> bir nechta tekshiruvni yoqadi, lekin hammasini emas. <code>noUncheckedIndexedAccess</code>, <code>exactOptionalPropertyTypes</code> va <code>noPropertyAccessFromIndexSignature</code> alohida yoqiladi. Yangi loyihada qat'iyroq to'plamni tanlash keyinchalik xatolarni kamaytiradi, mavjud loyihada esa bosqichma-bosqich ko'chirish osonroq."
    },
    {
     "type": "code",
     "title": "noUncheckedIndexedAccess",
     "code": "const massiv: string[] = [\"a\", \"b\"];\nconst x = massiv[5];\nconsole.log(x === undefined);\nconsole.log(x?.toUpperCase() ?? \"yo'q\");\n\nconst sozlamalar: Record<string, number> = {};\nconst qiymat = sozlamalar[\"limit\"];\nconsole.log(qiymat ?? 10);",
     "output": "true\nyo'q\n10"
    },
    {
     "type": "p",
     "html": "Standart rejimda <code>massiv[5]</code> tipi <code>string</code> bo'ladi va xato ish vaqtida chiqadi. <code>noUncheckedIndexedAccess</code> har bir indeks murojaatiga <code>undefined</code> qo'shadi, shuning uchun tekshiruvsiz ishlatib bo'lmaydi. Bu ayniqsa JSON massivlari va dinamik kalitlarda foydali."
    },
    {
     "type": "code",
     "title": "exactOptionalPropertyTypes",
     "code": "type Sozlama = { tema?: \"yorug'\" | \"qorong'i\" };\n\nconst s: Sozlama = {};\n// @ts-expect-error aniq undefined berish taqiqlangan\nconst xato: Sozlama = { tema: undefined };\n\nconst t: Sozlama = { tema: \"qorong'i\" };\nconsole.log(Object.keys(s).length);\nconsole.log(t.tema);",
     "output": "0\nqorong'i"
    },
    {
     "type": "table",
     "head": [
      "Bayroq",
      "strict ichida?",
      "Ta'siri"
     ],
     "rows": [
      [
       "strictNullChecks",
       "Ha",
       "null/undefined alohida tip"
      ],
      [
       "noImplicitAny",
       "Ha",
       "Yashirin any taqiqlanadi"
      ],
      [
       "strictPropertyInitialization",
       "Ha",
       "Class maydoni konstruktorda to'ladi"
      ],
      [
       "noUncheckedIndexedAccess",
       "Yo'q",
       "Indeks natijasi `T | undefined`"
      ],
      [
       "exactOptionalPropertyTypes",
       "Yo'q",
       "`undefined` faqat aniq ruxsat bilan"
      ],
      [
       "verbatimModuleSyntax",
       "Yo'q",
       "`import type` majburiy bo'ladi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Bosqichma-bosqich qat'iylashtirish",
     "html": "Mavjud loyihada barcha bayroqlarni birdan yoqish minglab xato berishi mumkin. Avval <code>strict</code>, keyin <code>noUncheckedIndexedAccess</code>, so'ng <code>exactOptionalPropertyTypes</code> ni yoqing. Har bosqichda testlarni ishga tushiring."
    }
   ],
   "quiz": [
    {
     "q": "`strict: true` tarkibiga kirmaydigan bayroq qaysi?",
     "options": [
      "`strictNullChecks`",
      "`noUncheckedIndexedAccess`",
      "`noImplicitAny`",
      "`strictFunctionTypes`"
     ],
     "answer": 1,
     "explain": "`noUncheckedIndexedAccess` alohida yoqiladi; u indekslangan murojaatlarga `undefined` qo'shadi va strict oilasiga kirmaydi."
    },
    {
     "q": "`exactOptionalPropertyTypes` yoqilganda `{ tema?: string }` tipiga `{ tema: undefined }` berish mumkinmi?",
     "options": [
      "Ha, har doim",
      "Faqat `strictNullChecks` o'chirilganda",
      "Yo'q, ixtiyoriy maydon yo'qligi bilan `undefined` qiymati farqlanadi",
      "Faqat massivlarda"
     ],
     "answer": 2,
     "explain": "Bu bayroq `tema?: string` ni `tema?: string` (yo'q yoki string) deb qat'iy talqin qiladi; aniq `undefined` berish xato bo'ladi."
    },
    {
     "q": "`verbatimModuleSyntax` yoqilganda faqat tip uchun import qanday yozilishi kerak?",
     "options": [
      "`import type { Tip }`",
      "Oddiy `import { Tip }`",
      "`require(\"tip\")`",
      "`import * as Tip`"
     ],
     "answer": 0,
     "explain": "Bayroq import'larni o'zgartirmasdan saqlaydi, shuning uchun tip-only import aniq `import type` bilan belgilanishi shart."
    }
   ]
  },
  {
   "id": 72,
   "title": "Project references va composite build",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Katta monorepo'da har bir paketni alohida TypeScript loyihasi sifatida ko'rsatish mumkin. <b>Project references</b> paketlar orasidagi bog'liqlikni kompilyatorga aytadi, <code>tsc -b</code> esa faqat o'zgargan loyihalarni qayta quradi. Bu build vaqtini qisqartiradi va paket chegaralarini qat'iy saqlaydi."
    },
    {
     "type": "code",
     "title": "packages/shared/src/index.ts",
     "code": "export type User = { id: number; ism: string };\n\nexport function salomlash(user: User): string {\n  return \"Salom, \" + user.ism;\n}\n\nexport function yoshTekshir(yosh: number): boolean {\n  return yosh >= 18;\n}\n\nconsole.log(yoshTekshir(20));",
     "output": "true"
    },
    {
     "type": "p",
     "html": "Har bir paketning <code>tsconfig.json</code> ida <code>composite: true</code> va <code>declaration: true</code> bo'ladi, root konfiguratsiyada esa <code>references</code> ro'yxati turadi. Bog'liq paket <code>@noldan/shared</code> dan import qiladi; TypeScript d.ts fayllar orqali tipni oladi, runtime'da esa workspace havolasi ishlaydi."
    },
    {
     "type": "code",
     "title": "apps/api/src/index.ts",
     "code": "import { salomlash, yoshTekshir, type User } from \"@noldan/shared\";\n\nconst user: User = { id: 1, ism: \"Aziza\" };\nconsole.log(salomlash(user));\nconsole.log(yoshTekshir(16));",
     "output": "Salom, Aziza\nfalse"
    },
    {
     "type": "table",
     "head": [
      "Sozlama",
      "Qayerda",
      "Ma'nosi"
     ],
     "rows": [
      [
       "composite: true",
       "Har bir paket",
       "Referens qilinadigan loyiha bo'ladi"
      ],
      [
       "declaration: true",
       "Har bir paket",
       "`.d.ts` chiqariladi"
      ],
      [
       "references: [{ path: ... }]",
       "Root/app",
       "Bog'liq loyihalar ro'yxati"
      ],
      [
       "tsc -b",
       "CI/terminal",
       "Bog'liqlik tartibida build"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "rootDir va include",
     "html": "Har bir paketda <code>rootDir</code> ni <code>src</code> qilib belgilang va <code>include</code> ni faqat shu papkaga qarating. Aks holda <code>dist</code> yoki test fayllari tasodifan build'ga kirib, chiqish tuzilishini buzadi."
    }
   ],
   "quiz": [
    {
     "q": "Project reference uchun paket konfiguratsiyasida qaysi bayroq shart?",
     "options": [
      "`noEmit: true`",
      "`allowJs: true`",
      "`isolatedModules: false`",
      "`composite: true`"
     ],
     "answer": 3,
     "explain": "`composite` loyihani referens qilishga tayyorlaydi va odatda `declaration` bilan birga ishlatiladi."
    },
    {
     "q": "`tsc -b` buyrug'ining afzalligi nima?",
     "options": [
      "Faqat bitta faylni kompilyatsiya qiladi",
      "Bog'liqlik grafigi bo'yicha faqat eskirgan loyihalarni quradi",
      "TypeScript'ni o'rnatadi",
      "Testlarni ishga tushiradi"
     ],
     "answer": 1,
     "explain": "Build mode loyihalar orasidagi bog'liqlikni hisobga oladi va incremental holatga qarab kerakli qismini qayta quradi."
    },
    {
     "q": "Bog'liq paket tipni qayerdan oladi?",
     "options": [
      "Faqat runtime JavaScript'dan",
      "tsconfig izohlaridan",
      "Chiqarilgan `.d.ts` declaration fayllaridan",
      "Node.js global cache'dan"
     ],
     "answer": 2,
     "explain": "Project references declaration fayllari orqali tip ma'lumotini beradi; shuning uchun `declaration: true` muhim."
    }
   ]
  },
  {
   "id": 73,
   "title": "pnpm workspaces va paket chegaralari",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Workspace — bitta repozitoriyda bir nechta paketni boshqarish usuli. <b>pnpm</b> qat'iy <code>node_modules</code> tuzilishi bilan \"phantom dependency\" muammosini kamaytiradi: paket faqat o'z <code>package.json</code> ida e'lon qilgan bog'liqliklarga murojaat qiladi. <code>workspace:*</code> esa lokal paketga aniq havola beradi."
    },
    {
     "type": "code",
     "title": "packages/shared/src/index.ts",
     "code": "export const API_VERSION = \"v1\";\n\nexport type ApiResult<T> =\n  | { data: T; xato: null }\n  | { data: null; xato: string };\n\nexport function muvaffaqiyat<T>(data: T): ApiResult<T> {\n  return { data, xato: null };\n}\n\nconsole.log(muvaffaqiyat(1).data);",
     "output": "1"
    },
    {
     "type": "p",
     "html": "Root <code>pnpm-workspace.yaml</code> qaysi papkalar paket ekanini belgilaydi. Har bir paketda o'z <code>package.json</code>, <code>tsconfig.json</code> va <code>src</code> bo'ladi. Ichki bog'liqlik <code>\"@noldan/shared\": \"workspace:*\"</code> ko'rinishida yoziladi — pnpm uni lokal papkaga bog'laydi, npm registry'ga murojaat qilmaydi."
    },
    {
     "type": "code",
     "title": "apps/web/src/index.ts",
     "code": "import { API_VERSION, muvaffaqiyat, type ApiResult } from \"@noldan/shared\";\n\nconst natija: ApiResult<number> = muvaffaqiyat(200);\nconsole.log(API_VERSION + \":\" + natija.data);\n\nconst xato: ApiResult<number> = { data: null, xato: \"topilmadi\" };\nconsole.log(xato.data ?? xato.xato);",
     "output": "v1:200\ntopilmadi"
    },
    {
     "type": "table",
     "head": [
      "Buyruq",
      "Vazifasi"
     ],
     "rows": [
      [
       "pnpm install",
       "Barcha workspace bog'liqliklarini o'rnatadi"
      ],
      [
       "pnpm -r build",
       "Har bir paketda build ishga tushiradi"
      ],
      [
       "pnpm --filter web dev",
       "Faqat tanlangan paketda dev"
      ],
      [
       "pnpm --filter web... build",
       "web va unga bog'liq paketlarda build"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Paket chegarasi — arxitektura",
     "html": "Workspace faqat qulaylik emas: u bog'liqlik yo'nalishini ko'rinadigan qiladi. <code>shared</code> hech qachon <code>web</code> yoki <code>api</code> dan import qilmasligi kerak. Bunday taqiqni ESLint <code>no-restricted-imports</code> bilan mustahkamlash mumkin."
    }
   ],
   "quiz": [
    {
     "q": "`workspace:*` protokoli nimani bildiradi?",
     "options": [
      "Lokal workspace paketiga havola",
      "Paketni npm'dan eng so'nggi versiyada olish",
      "Paketni butunlay o'chirish",
      "Faqat devDependency sifatida o'rnatish"
     ],
     "answer": 0,
     "explain": "pnpm bu protokolni lokal paket papkasiga bog'laydi; registry'dan yuklamaydi."
    },
    {
     "q": "pnpm'ning qat'iy `node_modules` tuzilishi qanday muammoni kamaytiradi?",
     "options": [
      "TypeScript kompilyatsiya xatolarini",
      "CSS konfliktlarini",
      "Git merge conflict'larini",
      "E'lon qilinmagan (phantom) bog'liqliklarga tasodifiy murojaatni"
     ],
     "answer": 3,
     "explain": "Har bir paket faqat o'z bog'liqliklarini ko'radi; boshqa paketning bog'liqligi tasodifan ishlatilmaydi."
    },
    {
     "q": "Nega `shared` paketi `web` dan import qilmasligi kerak?",
     "options": [
      "Chunki shared'da TypeScript ishlamaydi",
      "Chunki bu bog'liqlik yo'nalishini teskari aylantiradi va tsikl yaratadi",
      "Chunki web faqat brauzerda ishlaydi",
      "Chunki pnpm buni taqiqlaydi"
     ],
     "answer": 1,
     "explain": "Pastki qatlam yuqori qatlamga bog'lanmasligi kerak. Aks holda build tartibi va arxitektura buziladi."
    }
   ]
  },
  {
   "id": 74,
   "title": "Turborepo va build keshi",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Monorepo'da har o'zgarishdan keyin barcha paketlarni qayta build qilish qimmat. <b>Turborepo</b> vazifalar grafigini tuzadi, kirish fayllari va muhit o'zgaruvchilaridan kesh kaliti yasaydi, natijani keshlaydi. Kesh hit bo'lsa, build qayta bajarilmaydi — natija shunchaki tiklanadi. Remote cache jamoaga bir xil artifact'larni ulashish imkonini beradi."
    },
    {
     "type": "code",
     "title": "vazifalar grafigi",
     "code": "type Vazifa = { bogliq: string[]; chiqish: string[] };\n\nconst pipeline: Record<string, Vazifa> = {\n  build: { bogliq: [], chiqish: [\"dist/**\"] },\n  test: { bogliq: [\"build\"], chiqish: [\"coverage/**\"] },\n  lint: { bogliq: [], chiqish: [] },\n};\n\nfunction tartib(nom: string): string[] {\n  const v = pipeline[nom];\n  return [...v.bogliq.flatMap(tartib), nom];\n}\n\nconsole.log(tartib(\"test\").join(\" → \"));\nconsole.log(pipeline.build.chiqish[0]);",
     "output": "build → test\ndist/**"
    },
    {
     "type": "p",
     "html": "Haqiqiy <code>turbo.json</code> da <code>dependsOn</code> ichida <code>\"^build\"</code> yoziladi: bu \"bog'liq paketlarning build'i avval bajarilsin\" degani. <code>outputs</code> keshdan tiklanadigan papkalarni belgilaydi. Agar <code>outputs</code> noto'g'ri bo'lsa, kesh hit bo'lsa ham natija yo'qoladi."
    },
    {
     "type": "code",
     "title": "kesh xatti-harakati",
     "code": "const kesh = new Map<string, string>();\n\nfunction bajar(kalit: string, hisobla: () => string): string {\n  const bor = kesh.get(kalit);\n  if (bor !== undefined) {\n    console.log(\"cache hit:\", kalit);\n    return bor;\n  }\n  const natija = hisobla();\n  kesh.set(kalit, natija);\n  return natija;\n}\n\nconsole.log(bajar(\"build-abc\", () => \"dist\"));\nconsole.log(bajar(\"build-abc\", () => \"dist\"));",
     "output": "dist\ncache hit: build-abc\ndist"
    },
    {
     "type": "ul",
     "items": [
      "Kesh kaliti kirish fayllari, lockfile, muhit o'zgaruvchilari va vazifa ta'rifiga bog'liq.",
      "<code>--filter</code> bilan faqat o'zgargan paketni build qilish mumkin.",
      "Remote cache CI va lokal muhit o'rtasida artifact almashadi.",
      "Keshdan tashqarida qolgan fayl (masalan, `.env`) natijani eskirgan holda tiklaydi — uni `inputs` ga qo'shing."
     ]
    }
   ],
   "quiz": [
    {
     "q": "`turbo.json` da `\"dependsOn\": [\"^build\"]` nimani bildiradi?",
     "options": [
      "Joriy paketdagi build ikki marta bajariladi",
      "Build butunlay o'chiriladi",
      "Bog'liq paketlarning build'i avval bajariladi",
      "Faqat root paket build qilinadi"
     ],
     "answer": 2,
     "explain": "`^` prefiksi bog'liqliklar bo'ylab harakatni bildiradi: avval dependency'larning `build` vazifasi tugashi kerak."
    },
    {
     "q": "Turborepo keshdan foydalanganda qaysi maydon natijani tiklanishini belgilaydi?",
     "options": [
      "`outputs`",
      "`dependsOn`",
      "`persistent`",
      "`cache` nomi"
     ],
     "answer": 0,
     "explain": "`outputs` keshga saqlanadigan va hit bo'lganda tiklanadigan papka/fayllarni ko'rsatadi."
    },
    {
     "q": "Qaysi holat keshni noto'g'ri qilishi mumkin?",
     "options": [
      "Barcha paketlar bir xil nomda bo'lsa",
      "`outputs` to'g'ri yozilgan bo'lsa",
      "Remote cache yoqilgan bo'lsa",
      "Muhit o'zgaruvchisi `inputs` yoki `env` da hisobga olinmasa"
     ],
     "answer": 3,
     "explain": "Kesh kaliti muhim kirishni qamramasa, eski natija qaytariladi. Muhit o'zgaruvchilari va konfiguratsiya fayllarini kiritish kerak."
    }
   ]
  },
  {
   "id": 75,
   "title": "Muhit o'zgaruvchilari va konfiguratsiya tiplari",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "<code>process.env</code> har doim <code>string | undefined</code> qaytaradi: port ham, bayroq ham, sir ham satr. Konfiguratsiyani ilova ishga tushishida bir marta o'qib, sxema bilan tekshirib, tipli obyektga aylantirish eng ishonchli usul. Xato bo'lsa ilova darhol to'xtaydi — noto'g'ri sozlama bilan uzoq yashamaydi."
    },
    {
     "type": "code",
     "title": "Zod bilan env validatsiyasi",
     "code": "import { z } from \"zod\";\n\nconst EnvSxema = z.object({\n  NODE_ENV: z.enum([\"development\", \"test\", \"production\"]).default(\"development\"),\n  PORT: z.coerce.number().int().positive().default(3000),\n  DATABASE_URL: z.string().url(),\n});\n\nconst env = EnvSxema.parse({\n  NODE_ENV: \"production\",\n  PORT: \"8080\",\n  DATABASE_URL: \"postgres://localhost:5432/noldan\",\n});\n\nconsole.log(env.PORT + 1);\nconsole.log(env.NODE_ENV);",
     "output": "8081\nproduction"
    },
    {
     "type": "p",
     "html": "<code>z.coerce.number()</code> satrni songa aylantiradi, <code>.default()</code> esa qiymat berilmasa ishlaydi. <code>z.enum</code> faqat ruxsat etilgan muhitlarni qabul qiladi. Natijada <code>env</code> obyekti butun ilova bo'ylab tipli va o'zgarmas bo'lib qoladi; <code>process.env.PORT</code> ni har joyda qayta o'qish shart emas."
    },
    {
     "type": "code",
     "title": "qo'lda tipli konfiguratsiya",
     "code": "type Konfig = { port: number; muhit: \"dev\" | \"prod\" };\n\nfunction konfigYukla(xom: Record<string, string | undefined>): Konfig {\n  const port = Number(xom.PORT ?? 3000);\n  if (!Number.isInteger(port) || port <= 0) {\n    throw new Error(\"PORT noto'g'ri: \" + xom.PORT);\n  }\n  const muhit = xom.NODE_ENV === \"production\" ? \"prod\" : \"dev\";\n  return { port, muhit };\n}\n\nconst k = konfigYukla({ PORT: \"4000\", NODE_ENV: \"production\" });\nconsole.log(k.port);\nconsole.log(k.muhit);",
     "output": "4000\nprod"
    },
    {
     "type": "table",
     "head": [
      "Muammo",
      "Yechim"
     ],
     "rows": [
      [
       "Env qiymati har doim satr",
       "`z.coerce` yoki aniq `Number()`"
      ],
      [
       "Qiymat yo'q",
       "`.default()` yoki majburiy xato"
      ],
      [
       "Noto'g'ri qiymat",
       "Ishga tushishda fail-fast"
      ],
      [
       "Sir repo'da qolishi",
       "`.env` gitignore, secrets manager"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Konfiguratsiyani import qilmang",
     "html": "Konfiguratsiya moduli import paytida env o'qisa, testlarda uni almashtirish qiyin. <code>konfigYukla(process.env)</code> kabi funksiya yozing va composition root'da bir marta chaqiring. Bu testda turli muhitlarni oson taqlid qilish imkonini beradi."
    }
   ],
   "quiz": [
    {
     "q": "Nega env qiymatlarini ishga tushishda darhol tekshirish kerak?",
     "options": [
      "Kompilyatsiya tezligi oshadi",
      "Noto'g'ri sozlama bilan ilova ishlashda davom etmasligi uchun",
      "TypeScript talab qiladi",
      "Docker aks holda ishlamaydi"
     ],
     "answer": 1,
     "explain": "Fail-fast yondashuvi xatoni manbaga yaqin joyda ko'rsatadi; aks holda muammo keyinroq, tushunarsiz joyda chiqadi."
    },
    {
     "q": "`process.env.PORT` qanday tipga ega?",
     "options": [
      "`number`",
      "`number | undefined`",
      "`string | undefined`",
      "`any`"
     ],
     "answer": 2,
     "explain": "Muhit o'zgaruvchilari OS'dan satr sifatida keladi yoki umuman bo'lmasligi mumkin. Shuning uchun avtomatik songa aylantirish kerak."
    },
    {
     "q": "Konfiguratsiyani test qilish uchun eng qulay yondashuv qaysi?",
     "options": [
      "Konfiguratsiyani funksiya parametri sifatida qabul qilish",
      "`process.env` ni butun kodda to'g'ridan-to'g'ri o'qish",
      "Har testda `.env` faylini o'zgartirish",
      "Env'ni `any` ga aylantirish"
     ],
     "answer": 0,
     "explain": "Sof funksiya sifatida konfiguratsiya obyektini berish testda izolyatsiya va deterministik natija beradi."
    }
   ]
  },
  {
   "id": 76,
   "title": "Node.js tiplari va ESM sozlash",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Node.js loyihasida <code>process</code>, <code>Buffer</code>, <code>fs</code> kabi global va modul tiplari <code>@types/node</code> dan keladi. ESM rejimida <code>package.json</code> da <code>\"type\": \"module\"</code> bo'ladi, <code>tsconfig</code> da <code>module: \"NodeNext\"</code> tanlanadi. Nisbiy import'larda kengaytma yozish qoidasi Node'ning o'z talabidir."
    },
    {
     "type": "code",
     "title": "node:path bilan ishlash",
     "code": "import path from \"node:path\";\n\nconst yol = path.posix.join(\"src\", \"utils\", \"math.ts\");\nconsole.log(path.extname(yol));\nconsole.log(path.basename(yol, \".ts\"));\nconsole.log(path.dirname(yol));\nconsole.log(process.platform.length > 0);",
     "output": ".ts\nmath\nsrc/utils\ntrue"
    },
    {
     "type": "p",
     "html": "<code>path.posix</code> ataylab ishlatildi: Windows va Linux'da bir xil natija beradi. Server kodida yo'llarni har doim <code>path.join</code> yoki <code>path.resolve</code> bilan yasang, satr qo'shish bilan emas. <code>process.platform</code> kabi global ham <code>@types/node</code> bilan tiplanadi."
    },
    {
     "type": "code",
     "title": "ESM metadata",
     "code": "const meta: ImportMeta = import.meta;\n\nconsole.log(typeof meta.url);\nconsole.log(meta.url.startsWith(\"file:\"));\nconsole.log(process.version.startsWith(\"v\"));\n\nconst xato: unknown = new Error(\"demo\");\nconsole.log(xato instanceof Error ? xato.message : \"noma'lum\");",
     "output": "string\ntrue\ntrue\ndemo"
    },
    {
     "type": "table",
     "head": [
      "Sozlama",
      "Qiymat",
      "Sabab"
     ],
     "rows": [
      [
       "package.json type",
       "module",
       "`.js` fayllar ESM bo'ladi"
      ],
      [
       "module",
       "NodeNext",
       "Node ESM qoidalariga mos"
      ],
      [
       "moduleResolution",
       "NodeNext",
       "Import va exports'ni to'g'ri yechadi"
      ],
      [
       "Import kengaytmasi",
       "./math.js",
       "Manba `.ts` bo'lsa ham"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Dev va production",
     "html": "Dev rejimda <code>tsx</code> yoki <code>node --watch</code> bilan TypeScript'ni to'g'ridan-to'g'ri ishga tushirish qulay. Production'da avval <code>tsc</code> bilan <code>dist</code> yig'ib, keyin <code>node dist/index.js</code> ishlatiladi. Ikkala rejimda ham bir xil ESM qoidalari amal qiladi."
    }
   ],
   "quiz": [
    {
     "q": "`module: \"NodeNext\"` da nisbiy import qanday yoziladi?",
     "options": [
      "`import { f } from \"./math\"`",
      "`import { f } from \"math\"`",
      "`require(\"./math\")`",
      "`import { f } from \"./math.js\"`"
     ],
     "answer": 3,
     "explain": "Node ESM kengaytmani talab qiladi. TypeScript manba `.ts` bo'lsa ham import'da `.js` yoziladi, kompilyator uni to'g'ri bog'laydi."
    },
    {
     "q": "`process`, `Buffer` va `node:fs` tiplarini qaysi paket beradi?",
     "options": [
      "`typescript`",
      "`@types/node`",
      "`ts-node`",
      "`eslint`"
     ],
     "answer": 1,
     "explain": "`@types/node` Node.js API'lari uchun declaration fayllarini taqdim etadi; uni devDependency sifatida o'rnatish odatiy."
    },
    {
     "q": "`package.json` da `\"type\": \"module\"` nimani anglatadi?",
     "options": [
      "Faqat TypeScript ishlaydi",
      "CommonJS majburiy bo'ladi",
      "Barcha `.js` fayllar ESM sifatida talqin qilinadi",
      "Node versiyasi 18 bo'lishi shart"
     ],
     "answer": 2,
     "explain": "Bu maydon `.js` kengaytmali fayllarning standart modul tizimini ESM qiladi. CommonJS kerak bo'lsa `.cjs` ishlatiladi."
    }
   ]
  },
  {
   "id": 77,
   "title": "Express REST API'ni tiplash",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Express handler'lari uchun tiplar <code>Request</code>, <code>Response</code> va <code>NextFunction</code> orqali beriladi. <code>Request</code> to'rt generik qabul qiladi: params, response body, request body va query. Ularni to'g'ri ko'rsatish handler ichida <code>req.body</code> va <code>res.json</code> ni xavfsiz qiladi. Esda tuting: URL parametrlari va query har doim satr."
    },
    {
     "type": "code",
     "title": "tipli GET handler",
     "code": "import type { Request, Response } from \"express\";\n\ntype Post = { id: number; sarlavha: string };\nconst postlar: Post[] = [{ id: 1, sarlavha: \"TS\" }];\n\nfunction handler(\n  req: Request<{ id: string }>,\n  res: Response<Post | { xato: string }>,\n): void {\n  const post = postlar.find((p) => p.id === Number(req.params.id));\n  if (!post) {\n    res.status(404).json({ xato: \"topilmadi\" });\n    return;\n  }\n  res.status(200).json(post);\n}\n\nconst req = { params: { id: \"1\" } } as Request<{ id: string }>;\nconst res = {\n  status(kod: number) { console.log(\"status:\", kod); return this; },\n  json(tana: Post | { xato: string }) { console.log(JSON.stringify(tana)); return this; },\n} as unknown as Response<Post | { xato: string }>;\n\nhandler(req, res);",
     "output": "status: 200\n{\"id\":1,\"sarlavha\":\"TS\"}"
    },
    {
     "type": "p",
     "html": "Javob tipi <code>Post | { xato: string }</code> deb belgilangani uchun <code>res.json</code> faqat shu shakllarni qabul qiladi. Bu API shartnomasini kodda ko'rinadigan qiladi. Biroq generic'lar runtime validatsiyani almashtirmaydi: kiruvchi <code>req.body</code> ni baribir Zod bilan tekshiring."
    },
    {
     "type": "code",
     "title": "Request generiklari",
     "code": "import type { Request } from \"express\";\n\ntype Sorov = Request<\n  { id: string },\n  unknown,\n  { sarlavha: string },\n  { draft?: string }\n>;\n\nconst params: Sorov[\"params\"] = { id: \"7\" };\nconst body: Sorov[\"body\"] = { sarlavha: \"Yangi\" };\nconst query: Sorov[\"query\"] = { draft: \"1\" };\n\nconsole.log(params.id + \":\" + body.sarlavha + \":\" + query.draft);\nconsole.log(typeof params.id);",
     "output": "7:Yangi:1\nstring"
    },
    {
     "type": "table",
     "head": [
      "Generik",
      "Misol",
      "Eslatma"
     ],
     "rows": [
      [
       "Params",
       "`{ id: string }`",
       "Route parametrlari satr"
      ],
      [
       "ResBody",
       "`Post | Xato`",
       "`res.json` shakli"
      ],
      [
       "ReqBody",
       "`YaratishDto`",
       "Runtime'da tekshirilmaydi"
      ],
      [
       "Query",
       "`{ draft?: string }`",
       "Query ham satr"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Handler qaytishi",
     "html": "Express handler'ida <code>return res.json(...)</code> yozish ba'zi tip versiyalarida xato beradi, chunki kutilgan qaytish <code>void</code>. <code>res.json(...); return;</code> ko'rinishida yozing yoki qaytish tipini aniq bering."
    }
   ],
   "quiz": [
    {
     "q": "`Request` generiklarining to'g'ri tartibi qanday?",
     "options": [
      "Params, ResBody, ReqBody, Query",
      "Body, Query, Params, ResBody",
      "Params, ReqBody, Query, ResBody",
      "Query, Params, Body"
     ],
     "answer": 0,
     "explain": "Express tiplarida tartib: `Request<Params, ResBody, ReqBody, Query>`. Ko'pincha faqat Params va ReqBody kerak bo'ladi."
    },
    {
     "q": "`req.params.id` ning tipi odatda qanday?",
     "options": [
      "`number`",
      "`string | undefined`",
      "`any`",
      "`string`"
     ],
     "answer": 3,
     "explain": "Route parametrlari URL'dan satr sifatida keladi. Songa aylantirishni siz bajarishingiz va tekshirishingiz kerak."
    },
    {
     "q": "`Response<Post>` generikasi nimani kafolatlaydi?",
     "options": [
      "Post ish vaqtida validatsiya qilinadi",
      "`res.json` faqat Post shaklini qabul qiladi",
      "Baza Post qaytaradi",
      "Route avtomatik yaratiladi"
     ],
     "answer": 1,
     "explain": "Bu faqat kompilyator tekshiruvi: javob tanasi tipi Post bilan cheklanadi. Runtime validatsiya alohida kerak."
    }
   ]
  },
  {
   "id": 78,
   "title": "Middleware, xato handler va async wrapper",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Express'da middleware <code>next()</code> orqali zanjirni davom ettiradi, <code>next(xato)</code> esa xato handler'ga o'tadi. Xato middleware'i to'rt argumentli bo'lishi shart: <code>(err, req, res, next)</code>. Async handler'dagi rad etilgan Promise'ni Express 4 avtomatik ushlamaydi — shuning uchun wrapper yoki Express 5 kerak."
    },
    {
     "type": "code",
     "title": "HttpXato va asyncWrap",
     "code": "import type { NextFunction, Request, Response } from \"express\";\n\nclass HttpXato extends Error {\n  constructor(public status: number, message: string) {\n    super(message);\n  }\n}\n\nfunction asyncWrap(\n  fn: (req: Request, res: Response) => Promise<void>,\n) {\n  return (req: Request, res: Response, next: NextFunction): void => {\n    fn(req, res).catch(next);\n  };\n}\n\nconst handler = asyncWrap(async () => {\n  throw new HttpXato(404, \"topilmadi\");\n});\n\nconst next = (xato: unknown): void => {\n  const e = xato as HttpXato;\n  console.log(\"next:\", e.status, e.message);\n};\n\nhandler({} as Request, {} as Response, next);",
     "output": "next: 404 topilmadi"
    },
    {
     "type": "p",
     "html": "Wrapper har bir async handler'ni o'rab, rad etilgan Promise'ni <code>next</code> ga uzatadi. Natijada xatolar markazlashgan handler'ga tushadi va har bir route'da <code>try/catch</code> takrorlanmaydi. <code>HttpXato</code> statusni tashiydi, kutilmagan xatolar esa 500 bo'lib qoladi."
    },
    {
     "type": "code",
     "title": "markaziy xato handler",
     "code": "import type { NextFunction, Request, Response } from \"express\";\n\nclass HttpXato extends Error {\n  constructor(public status: number, message: string) {\n    super(message);\n  }\n}\n\nfunction xatoHandler(\n  xato: unknown,\n  _req: Request,\n  res: Response,\n  _next: NextFunction,\n): void {\n  const status = xato instanceof HttpXato ? xato.status : 500;\n  const xabar = xato instanceof Error ? xato.message : \"kutilmagan xato\";\n  res.status(status).json({ xato: xabar });\n}\n\nconst res = {\n  status(kod: number) { console.log(\"status:\", kod); return this; },\n  json(tana: unknown) { console.log(JSON.stringify(tana)); return this; },\n} as unknown as Response;\n\nxatoHandler(\n  new HttpXato(400, \"noto'g'ri so'rov\"),\n  {} as Request,\n  res,\n  (() => {}) as NextFunction,\n);",
     "output": "status: 400\n{\"xato\":\"noto'g'ri so'rov\"}"
    },
    {
     "type": "ul",
     "items": [
      "Xato middleware'i barcha route'lardan keyin ro'yxatdan o'tkaziladi.",
      "To'rtinchi argument <code>next</code> bo'lmasa, Express buni oddiy middleware deb qaraydi.",
      "<code>next(xato)</code> qolgan oddiy middleware'larni o'tkazib yuboradi.",
      "Production'da stack trace'ni javobga qo'shmang; uni logga yozing."
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Express 5",
     "html": "Express 5 async handler'dan qaytgan Promise rad etilsa, uni avtomatik <code>next</code> ga uzatadi. Express 4 da esa wrapper yoki <code>express-async-errors</code> kerak. Versiyani aniq bilib, uslubni shunga moslang."
    }
   ],
   "quiz": [
    {
     "q": "Express xato middleware'i nechta argument qabul qilishi shart?",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answer": 2,
     "explain": "Signature `(err, req, res, next)` — to'rt argument. Ular orqali Express xato handler ekanini taniydi."
    },
    {
     "q": "Express 4 da async route ichida `throw` qilinsa nima bo'ladi?",
     "options": [
      "Promise rad etiladi va xato handler'ga o'zi o'tmaydi",
      "Avtomatik 400 javobi qaytadi",
      "Ilova darhol qayta ishga tushadi",
      "TypeScript xato beradi"
     ],
     "answer": 0,
     "explain": "Express 4 Promise'ni kuzatmaydi. Rad etilgan Promise ushlanmasa, so'rov osilib qolishi yoki process ogohlantirishi mumkin."
    },
    {
     "q": "`next(xato)` chaqirilganda nima sodir bo'ladi?",
     "options": [
      "Javob avtomatik 200 bo'ladi",
      "Zanjir boshidan boshlanadi",
      "Faqat konsolga yoziladi",
      "Oddiy middleware'lar o'tkazib yuborilib, xato handler'ga o'tiladi"
     ],
     "answer": 3,
     "explain": "Xato bilan `next` chaqiruvi Express'ni keyingi xato middleware'iga o'tkazadi, oddiy handler'lar bajarilmaydi."
    }
   ]
  },
  {
   "id": 79,
   "title": "JWT autentifikatsiya va request augmentation",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "JWT autentifikatsiyada token imzosi serverda tekshiriladi, payload esa tipli bo'lishi kerak. Tekshirilgan foydalanuvchi ma'lumotini <code>req</code> ga qo'shish uchun Express <code>Request</code> interfeysini kengaytirish odatiy usul. Muhim: token ichidagi ma'lumotga ishonishdan oldin imzo va muddat tekshiriladi; parol yoki maxfiy ma'lumot token payload'iga yozilmaydi."
    },
    {
     "type": "code",
     "title": "token yaratish va tekshirish",
     "code": "import jwt from \"jsonwebtoken\";\n\ntype TokenPayload = { sub: string; rol: \"admin\" | \"user\" };\nconst sir = \"test-sir\";\n\nconst token = jwt.sign(\n  { sub: \"42\", rol: \"admin\" } satisfies TokenPayload,\n  sir,\n  { expiresIn: \"1h\" },\n);\n\nconst ochilgan = jwt.verify(token, sir) as TokenPayload;\nconsole.log(ochilgan.sub);\nconsole.log(ochilgan.rol);\nconsole.log(typeof token);",
     "output": "42\nadmin\nstring"
    },
    {
     "type": "p",
     "html": "<code>jwt.verify</code> imzo noto'g'ri yoki muddat o'tgan bo'lsa xato tashlaydi. Qaytgan qiymat <code>string | JwtPayload</code> bo'lgani uchun payload tipini tekshirish yoki sxema bilan parse qilish kerak. <code>as TokenPayload</code> faqat kompilyator uchun; runtime'da maydonlar mavjudligini kafolatlamaydi."
    },
    {
     "type": "code",
     "title": "Request ni kengaytirish va rol tekshiruvi",
     "code": "import type { Request } from \"express\";\n\ntype TokenPayload = { sub: string; rol: \"admin\" | \"user\" };\n\ndeclare module \"express-serve-static-core\" {\n  interface Request {\n    foydalanuvchi?: TokenPayload;\n  }\n}\n\nfunction faqatAdmin(req: Request): boolean {\n  return req.foydalanuvchi?.rol === \"admin\";\n}\n\nconst r1 = { foydalanuvchi: { sub: \"1\", rol: \"admin\" } } as Request;\nconst r2 = {} as Request;\nconsole.log(faqatAdmin(r1));\nconsole.log(faqatAdmin(r2));",
     "output": "true\nfalse"
    },
    {
     "type": "table",
     "head": [
      "Holat",
      "Status",
      "Ma'nosi"
     ],
     "rows": [
      [
       "Token yo'q yoki buzilgan",
       "401",
       "Autentifikatsiya kerak"
      ],
      [
       "Token to'g'ri, ruxsat yo'q",
       "403",
       "Autentifikatsiya bor, ruxsat yo'q"
      ],
      [
       "Muddat tugagan",
       "401",
       "Qayta login kerak"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Token saqlash",
     "html": "Brauzerda token'ni <code>localStorage</code> da saqlash XSS xavfini oshiradi. Session cookie <code>HttpOnly</code> va <code>Secure</code> bayroqlari bilan ko'proq himoyalangan. Har qanday holatda sirni kodga yozmang — env yoki secrets manager ishlatiladi."
    }
   ],
   "quiz": [
    {
     "q": "JWT imzosini qayerda tekshirish kerak?",
     "options": [
      "Faqat brauzerda",
      "Serverda, har bir himoyalangan so'rovda",
      "Faqat login paytida",
      "Token yaratilayotganda bir marta"
     ],
     "answer": 1,
     "explain": "Mijoz token'ni o'zgartirishi mumkin. Server imzo va muddatni har so'rovda tekshiradi."
    },
    {
     "q": "Foydalanuvchi autentifikatsiyadan o'tgan, lekin admin huquqi bo'lmasa qaysi status mos?",
     "options": [
      "401",
      "404",
      "403",
      "500"
     ],
     "answer": 2,
     "explain": "401 — kimligi tasdiqlanmagan; 403 — kimligi ma'lum, ammo ruxsat yetarli emas."
    },
    {
     "q": "`declare module \"express-serve-static-core\"` bilan nima qilinadi?",
     "options": [
      "`Request` interfeysiga qo'shimcha maydon qo'shiladi",
      "Yangi Express server yaratiladi",
      "JWT paketi o'rnatiladi",
      "Route'lar avtomatik generatsiya qilinadi"
     ],
     "answer": 0,
     "explain": "Bu modul augmentation: mavjud Request interfeysi kengaytirilib, `foydalanuvchi` kabi maydon tiplanadi."
    }
   ]
  },
  {
   "id": 80,
   "title": "Production: logging, shutdown va healthcheck",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Production server uchun uchta narsa muhim: kuzatiladigan loglar, toza to'xtash va sog'liq tekshiruvi. Strukturalangan JSON loglar agregatorlarda qidirishni osonlashtiradi. <code>SIGTERM</code> kelganda yangi so'rovlarni qabul qilmasdan, mavjudlarini tugatib, keyin chiqish kerak. Healthcheck esa orchestratorga instansiya tayyor yoki yo'qligini aytadi."
    },
    {
     "type": "code",
     "title": "graceful shutdown",
     "code": "type Server = { close(cb: () => void): void };\n\nfunction yopish(server: Server, signal: string): void {\n  console.log(\"signal:\", signal);\n  server.close(() => {\n    console.log(\"toza yopildi\");\n  });\n}\n\nconst soxtaServer: Server = {\n  close(cb) { cb(); },\n};\n\nyopish(soxtaServer, \"SIGTERM\");\nconsole.log(\"yangi so'rovlar qabul qilinmaydi\");",
     "output": "signal: SIGTERM\ntoza yopildi\nyangi so'rovlar qabul qilinmaydi"
    },
    {
     "type": "p",
     "html": "Haqiqiy serverda <code>server.close()</code> mavjud ulanishlar tugashini kutadi. Undan oldin readiness holatini <code>false</code> ga o'zgartirib, load balancer'ga trafik yubormaslikni aytish kerak. Belgilangan vaqtdan keyin majburiy chiqish uchun taymer qo'ying, aks holda osilgan ulanish process'ni ushlab turadi."
    },
    {
     "type": "code",
     "title": "strukturalangan log",
     "code": "type LogDarajasi = \"info\" | \"warn\" | \"error\";\n\nfunction log(\n  daraja: LogDarajasi,\n  xabar: string,\n  qoshimcha: Record<string, unknown> = {},\n): void {\n  console.log(JSON.stringify({ daraja, xabar, ...qoshimcha }));\n}\n\nlog(\"info\", \"server started\", { port: 3000 });\nlog(\"error\", \"db failed\", { code: \"ECONNREFUSED\", retry: 3 });",
     "output": "{\"daraja\":\"info\",\"xabar\":\"server started\",\"port\":3000}\n{\"daraja\":\"error\",\"xabar\":\"db failed\",\"code\":\"ECONNREFUSED\",\"retry\":3}"
    },
    {
     "type": "table",
     "head": [
      "Tekshiruv",
      "Nimani bildiradi",
      "Misol"
     ],
     "rows": [
      [
       "Liveness",
       "Process tirikmi",
       "`GET /healthz` → 200"
      ],
      [
       "Readiness",
       "Trafik qabul qilishga tayyormi",
       "DB ulanishi tekshiriladi"
      ],
      [
       "Startup",
       "Ilova ishga tushdimi",
       "Migratsiyalar tugadi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Logga sir yozmang",
     "html": "Token, parol, karta raqami va shaxsiy ma'lumot logga tushmasligi kerak. Pino kabi loggerlarda <code>redact</code> sozlamasi bilan maydonlarni yashiring. Log hajmi ham xarajat: har so'rovda to'liq tanani yozmang."
    }
   ],
   "quiz": [
    {
     "q": "Readiness probe nimani tekshiradi?",
     "options": [
      "Process umuman tirikmi",
      "Kod kompilyatsiya bo'lganmi",
      "Git branch to'g'rimi",
      "Instansiya trafik qabul qilishga tayyormi"
     ],
     "answer": 3,
     "explain": "Readiness tayyorlikni bildiradi: baza ulanishi va migratsiyalar kabi shartlar bajarilmasa, trafik yuborilmaydi."
    },
    {
     "q": "`SIGTERM` kelganda birinchi navbatda nima qilish mantiqiy?",
     "options": [
      "Darhol `process.exit(0)`",
      "Yangi so'rovlarni to'xtatib, mavjudlarini tugatish",
      "Serverni qayta ishga tushirish",
      "Barcha loglarni o'chirish"
     ],
     "answer": 1,
     "explain": "Graceful shutdown mavjud so'rovlarga zarar yetkazmaslik uchun avval trafikni to'xtatadi, keyin ulanishlarni yopadi."
    },
    {
     "q": "Strukturalangan JSON logning afzalligi nima?",
     "options": [
      "Fayl hajmi kamayadi",
      "TypeScript talab qiladi",
      "Maydonlar bo'yicha qidirish va filtrlash osonlashadi",
      "Konsol rangli bo'ladi"
     ],
     "answer": 2,
     "explain": "JSON loglar mashina o'qiy oladigan maydonlarga ega; agregatorlar ular bo'yicha samarali qidiradi va ogohlantirish quradi."
    }
   ]
  },
  {
   "id": 81,
   "title": "React 19 tiplari va komponent patternlari",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "React komponentlarida props tipi — API shartnomasi. <code>children</code> uchun <code>ReactNode</code>, hodisalar uchun <code>React.MouseEvent</code> yoki <code>ChangeEvent</code> ishlatiladi. React 19 bilan birga tiplar yaxshilandi: endi <code>React.FC</code> shart emas, oddiy funksiya va aniq props tipi yetarli. Diskriminant union props esa noto'g'ri kombinatsiyalarni kompilyatorda to'xtatadi."
    },
    {
     "type": "code",
     "title": "tipli tugma komponenti",
     "code": "import { renderToStaticMarkup } from \"react-dom/server\";\n\ntype TugmaProps = {\n  nom: string;\n  tur?: \"asosiy\" | \"xavfli\";\n  bosildi: () => void;\n};\n\nfunction Tugma({ nom, tur = \"asosiy\", bosildi }: TugmaProps) {\n  return (\n    <button data-tur={tur} onClick={bosildi}>\n      {nom}\n    </button>\n  );\n}\n\nconsole.log(\n  renderToStaticMarkup(<Tugma nom=\"Saqlash\" bosildi={() => {}} />),\n);",
     "output": "<button data-tur=\"asosiy\">Saqlash</button>"
    },
    {
     "type": "p",
     "html": "<code>renderToStaticMarkup</code> faqat namoyish uchun: u hodisalarni bog'lamaydi, lekin komponentning boshlang'ich HTML'ini tekshirishda foydali. Haqiqiy ilovada event handler ishlaydi, tip esa <code>onClick</code> noto'g'ri funksiya qabul qilmasligini kafolatlaydi. <code>data-*</code> atributlari ham HTML'da saqlanadi."
    },
    {
     "type": "code",
     "title": "children va karta",
     "code": "import type { ReactNode } from \"react\";\nimport { renderToStaticMarkup } from \"react-dom/server\";\n\ntype KartaProps = {\n  sarlavha: string;\n  children: ReactNode;\n};\n\nfunction Karta({ sarlavha, children }: KartaProps) {\n  return (\n    <section>\n      <h2>{sarlavha}</h2>\n      {children}\n    </section>\n  );\n}\n\nconsole.log(\n  renderToStaticMarkup(\n    <Karta sarlavha=\"Natija\">\n      <p>42</p>\n    </Karta>,\n  ),\n);",
     "output": "<section><h2>Natija</h2><p>42</p></section>"
    },
    {
     "type": "table",
     "head": [
      "Ehtiyoj",
      "Tip"
     ],
     "rows": [
      [
       "Bolalar",
       "`ReactNode`"
      ],
      [
       "Click hodisasi",
       "`React.MouseEvent<HTMLButtonElement>`"
      ],
      [
       "Input o'zgarishi",
       "`React.ChangeEvent<HTMLInputElement>`"
      ],
      [
       "Ref",
       "`React.RefObject<HTMLInputElement | null>`"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Diskriminant props",
     "html": "Komponent ikki xil rejimda ishlashi mumkin bo'lsa, props'ni union qiling: <code>{ tur: \"havola\"; href: string } | { tur: \"tugma\"; onClick: () =&gt; void }</code>. Bu noto'g'ri kombinatsiyani kompilyatorda to'xtatadi va ichkarida narrowing beradi."
    }
   ],
   "quiz": [
    {
     "q": "React komponentining `children` prop'i uchun eng mos tip qaysi?",
     "options": [
      "`ReactNode`",
      "`string`",
      "`JSX.Element`",
      "`HTMLElement`"
     ],
     "answer": 0,
     "explain": "`ReactNode` satr, raqam, element, massiv va boshqa render qilinadigan qiymatlarni qamraydi."
    },
    {
     "q": "Input o'zgarish hodisasi uchun qaysi tip ishlatiladi?",
     "options": [
      "`React.MouseEvent<HTMLInputElement>`",
      "`Event`",
      "`React.FormEvent<HTMLInputElement>`",
      "`React.ChangeEvent<HTMLInputElement>`"
     ],
     "answer": 3,
     "explain": "Input qiymati o'zgarganda `ChangeEvent<HTMLInputElement>` ishlatiladi va `event.target.value` tiplanadi."
    },
    {
     "q": "Nega `React.FC` endi tavsiya etilmaydi?",
     "options": [
      "U props tipini bilmaydi",
      "U ortiqcha `children` va boshqa noaniqliklarni qo'shadi, oddiy funksiya yetarli",
      "U faqat class komponentlarda ishlaydi",
      "React 19 uni butunlay o'chirgan"
     ],
     "answer": 1,
     "explain": "Oddiy funksiya va aniq props tipi yetarli; `React.FC` implicit `children` kabi eski xatti-harakatlarga ega."
    }
   ]
  },
  {
   "id": 82,
   "title": "Generik komponentlar va render props",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Ro'yxat, jadval yoki tanlov komponenti turli tipdagi ma'lumot bilan ishlashi mumkin. Generik komponent <code>function Royxat&lt;T&gt;</code> ko'rinishida yoziladi va element tipini saqlaydi. Render prop esa ko'rinishni tashqariga chiqaradi: komponent faqat mantiqni boshqaradi, foydalanuvchi esa har bir elementni qanday chizishni beradi."
    },
    {
     "type": "code",
     "title": "generik ro'yxat",
     "code": "import { renderToStaticMarkup } from \"react-dom/server\";\n\ntype RoyxatProps<T> = {\n  elementlar: T[];\n  kalit: (x: T) => string;\n  korsat: (x: T) => string;\n};\n\nfunction Royxat<T>({ elementlar, kalit, korsat }: RoyxatProps<T>) {\n  return (\n    <ul>\n      {elementlar.map((x) => (\n        <li key={kalit(x)}>{korsat(x)}</li>\n      ))}\n    </ul>\n  );\n}\n\nconsole.log(\n  renderToStaticMarkup(\n    <Royxat\n      elementlar={[\"a\", \"b\"]}\n      kalit={(x) => x}\n      korsat={(x) => x.toUpperCase()}\n    />,\n  ),\n);",
     "output": "<ul><li>A</li><li>B</li></ul>"
    },
    {
     "type": "p",
     "html": "<code>T</code> chaqiruv joyida aniqlanadi: massiv satr bo'lsa, <code>kalit</code> va <code>korsat</code> ham satr qabul qiladi. Ob'ekt massivi berilsa, TypeScript maydonlarga murojaatni tekshiradi. <code>key</code> React'ning maxsus prop'i bo'lib, oddiy props tipiga qo'shilmaydi."
    },
    {
     "type": "code",
     "title": "render prop",
     "code": "import type { ReactNode } from \"react\";\nimport { renderToStaticMarkup } from \"react-dom/server\";\n\ntype TanlovProps<T> = {\n  qiymat: T;\n  korsat: (x: T) => ReactNode;\n};\n\nfunction Tanlov<T>({ qiymat, korsat }: TanlovProps<T>) {\n  return <div>{korsat(qiymat)}</div>;\n}\n\ntype Post = { id: number; nom: string };\n\nconsole.log(\n  renderToStaticMarkup(\n    <Tanlov\n      qiymat={{ id: 1, nom: \"TS\" } as Post}\n      korsat={(x) => <b>{x.nom}</b>}\n    />,\n  ),\n);",
     "output": "<div><b>TS</b></div>"
    },
    {
     "type": "ul",
     "items": [
      "Generik komponentda props tipi <code>T</code> ga bog'lanadi, lekin runtime'da bu yo'q — noto'g'ri ma'lumot baribir kelishi mumkin.",
      "Render prop funksiyasi har renderda yangi bo'lsa, memoizatsiya natijasini buzishi mumkin.",
      "Muqobil: <code>children</code> ni funksiya sifatida berish yoki slot pattern.",
      "Ro'yxat kaliti barqaror va unikal bo'lishi kerak; indeksni kalit qilish tartib o'zgarsa xato beradi."
     ]
    }
   ],
   "quiz": [
    {
     "q": "Generik komponentning afzalligi nimada?",
     "options": [
      "Runtime'da tezroq ishlaydi",
      "CSS'ni avtomatik yozadi",
      "Har bir element tipini kompilyatorda saqlaydi",
      "Barcha props'ni ixtiyoriy qiladi"
     ],
     "answer": 2,
     "explain": "`T` orqali element va callback tiplari bog'lanadi; noto'g'ri maydon yoki qaytish tipi kompilyatorda ko'rinadi."
    },
    {
     "q": "Render prop patternida komponent nimani tashqariga beradi?",
     "options": [
      "Elementni qanday chizishni funksiya orqali",
      "Faqat CSS klasslarini",
      "Butun state'ni global qiladi",
      "Router konfiguratsiyasini"
     ],
     "answer": 0,
     "explain": "Render prop funksiyasi ma'lumotni qabul qilib, ko'rinishni qaytaradi; komponent mantiqni, chaqiruvchi esa prezentatsiyani boshqaradi."
    },
    {
     "q": "React'da ro'yxat elementlarining `key` prop'i qanday tipga kiradi?",
     "options": [
      "Oddiy props sifatida uzatiladi",
      "Faqat string bo'lishi shart",
      "Faqat indeks bo'lishi mumkin",
      "React tomonidan maxsus ishlatiladi va komponent props'iga kirmaydi"
     ],
     "answer": 3,
     "explain": "`key` — React'ning maxsus atributi; u komponent funksiyasiga prop sifatida berilmaydi, reconciliation uchun ishlatiladi."
    }
   ]
  },
  {
   "id": 83,
   "title": "Next.js App Router: server va client komponentlar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Next.js App Router'da komponentlar standart holatda server komponent: ular serverda render bo'ladi, brauzer bundle'iga qo'shilmaydi va to'g'ridan-to'g'ri ma'lumot bazasiga murojaat qilishi mumkin. Interaktivlik kerak bo'lsa, fayl boshiga <code>\"use client\"</code> yoziladi. Next 15 da <code>params</code> va <code>searchParams</code> Promise bo'lib, ularni <code>await</code> qilish kerak."
    },
    {
     "type": "code",
     "title": "async server komponent (Next 15)",
     "code": "type Params = { slug: string };\n\nexport default async function PostSahifa({\n  params,\n}: {\n  params: Promise<Params>;\n}) {\n  const { slug } = await params;\n  console.log(\"server render:\", slug);\n  return <h1>{slug}</h1>;\n}\n\nPostSahifa({ params: Promise.resolve({ slug: \"typescript\" }) });",
     "output": "server render: typescript"
    },
    {
     "type": "p",
     "html": "Server komponentda <code>useState</code>, <code>onClick</code> yoki brauzer API'lari ishlatilmaydi. Ular faqat client komponentga xos. Chegara qanchalik past bo'lsa, bundle shunchalik kichik bo'ladi: interaktiv qismni kichik client komponentga ajratib, qolganini serverda qoldiring."
    },
    {
     "type": "code",
     "title": "client komponent",
     "code": "\"use client\";\n\nimport { useState } from \"react\";\nimport { renderToStaticMarkup } from \"react-dom/server\";\n\nexport function Hisoblagich({ boshlangich }: { boshlangich: number }) {\n  const [qiymat, setQiymat] = useState(boshlangich);\n  return (\n    <button onClick={() => setQiymat((q) => q + 1)}>\n      {qiymat}\n    </button>\n  );\n}\n\nconsole.log(\n  renderToStaticMarkup(<Hisoblagich boshlangich={3} />),\n);",
     "output": "<button>3</button>"
    },
    {
     "type": "table",
     "head": [
      "Xususiyat",
      "Server komponent",
      "Client komponent"
     ],
     "rows": [
      [
       "`useState`",
       "Yo'q",
       "Bor"
      ],
      [
       "Ma'lumot bazasi",
       "To'g'ridan-to'g'ri",
       "API orqali"
      ],
      [
       "Bundle",
       "Yuborilmaydi",
       "Yuboriladi"
      ],
      [
       "`onClick`",
       "Yo'q",
       "Bor"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "\"use client\" chegarasi",
     "html": "Direktiva modulning yuqorisida turishi va client komponent faylining birinchi qatori bo'lishi kerak. U butun modulni va undan import qilingan komponentlarni client bundle'ga tortadi — katta faylni butunlay client qilishdan saqlaning."
    }
   ],
   "quiz": [
    {
     "q": "Next.js App Router'da komponent standart holatda qanday bo'ladi?",
     "options": [
      "Client komponent",
      "Server komponent",
      "Statik HTML",
      "Class komponent"
     ],
     "answer": 1,
     "explain": "App Router'da standart — server komponent. Interaktivlik uchun fayl boshiga `\"use client\"` qo'shiladi."
    },
    {
     "q": "Next 15 da sahifa `params` prop'i qanday tipga ega?",
     "options": [
      "`{ slug: string }`",
      "`string`",
      "`Promise<{ slug: string }>`",
      "`Record<string, number>`"
     ],
     "answer": 2,
     "explain": "Next 15 da `params` va `searchParams` Promise sifatida keladi; server komponentda `await` qilinadi."
    },
    {
     "q": "Qaysi amal server komponentda bajarilmaydi?",
     "options": [
      "`useState` bilan holat saqlash",
      "`await fetch(...)`",
      "Ma'lumot bazasidan o'qish",
      "JSX qaytarish"
     ],
     "answer": 0,
     "explain": "`useState` va boshqa hook'lar client komponentda ishlaydi; server komponentda faqat ma'lumot va JSX mantiqi bo'ladi."
    }
   ]
  },
  {
   "id": 84,
   "title": "Server actions va formalar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<b>Server action</b> — serverda bajariladigan async funksiya bo'lib, uni forma yoki client komponentdan chaqirish mumkin. U <code>\"use server\"</code> direktivasi bilan belgilanadi va <code>FormData</code> qabul qiladi. Server action'lar progressiv yaxshilanish beradi: JavaScript yuklanmasa ham forma ishlaydi. Kiruvchi ma'lumotni har doim sxema bilan tekshiring."
    },
    {
     "type": "code",
     "title": "Zod bilan server action",
     "code": "\"use server\";\n\nimport { z } from \"zod\";\n\nconst Sxema = z.object({ email: z.string().email() });\n\nexport async function royhatdanOtish(formData: FormData) {\n  const natija = Sxema.safeParse({ email: formData.get(\"email\") });\n  if (!natija.success) {\n    return { xato: \"email noto'g'ri\" };\n  }\n  return { ok: true, email: natija.data.email };\n}\n\nconst forma = new FormData();\nforma.set(\"email\", \"ali@noldan.uz\");\nroyhatdanOtish(forma).then((n) => console.log(JSON.stringify(n)));",
     "output": "{\"ok\":true,\"email\":\"ali@noldan.uz\"}"
    },
    {
     "type": "p",
     "html": "<code>formData.get</code> <code>string | File | null</code> qaytaradi, shuning uchun sxema satrni talab qiladi. Xatoni forma holatiga qaytarish uchun oddiy obyekt ishlatiladi; <code>redirect</code> yoki <code>revalidatePath</code> esa muvaffaqiyatdan keyin chaqiriladi. Action ichida autentifikatsiya va ruxsatni tekshirishni unutmang — u tashqi dunyoga ochiq endpoint."
    },
    {
     "type": "code",
     "title": "useActionState bilan forma",
     "code": "\"use client\";\n\nimport { useActionState } from \"react\";\n\ntype Holat = { xato?: string; muvaffaqiyat?: boolean };\n\nasync function yubor(_oldingi: Holat, forma: FormData): Promise<Holat> {\n  const email = String(forma.get(\"email\") ?? \"\");\n  return email.includes(\"@\")\n    ? { muvaffaqiyat: true }\n    : { xato: \"email noto'g'ri\" };\n}\n\nexport function RoyxatFormasi() {\n  const [holat, action, kutilmoqda] = useActionState(yubor, {});\n  return (\n    <form action={action}>\n      <input name=\"email\" />\n      <button disabled={kutilmoqda}>Yuborish</button>\n      {holat.xato && <p>{holat.xato}</p>}\n    </form>\n  );\n}\n\nconsole.log(\"action turi:\", typeof yubor);",
     "output": "action turi: function"
    },
    {
     "type": "ul",
     "items": [
      "Server action fayl yoki funksiya darajasida <code>\"use server\"</code> bilan belgilanadi.",
      "<code>useActionState</code> uchlik qaytaradi: holat, action va pending bayrog'i.",
      "Action natijasi serializatsiya qilinadigan bo'lishi kerak — funksiya yoki class qaytarmang.",
      "Har bir action'da autentifikatsiya, ruxsat va validatsiyani qayta tekshiring."
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Progressive enhancement",
     "html": "Forma <code>action={serverAction}</code> bilan bog'lansa, JavaScript ishlamasa ham brauzer oddiy POST yuboradi. Bu SEO va sekin qurilmalar uchun foydali. Client tomonda esa <code>useActionState</code> xatolarni ko'rsatib, tugmani bloklaydi."
    }
   ],
   "quiz": [
    {
     "q": "Server action funksiyasi qanday bo'lishi shart?",
     "options": [
      "Sinxron va oddiy funksiya",
      "Faqat class metodi",
      "Faqat client komponentda",
      "Async va `\"use server\"` bilan belgilangan"
     ],
     "answer": 3,
     "explain": "Action serverda bajariladi va Promise qaytaradi; `\"use server\"` direktivasi uni server funksiyasi sifatida belgilaydi."
    },
    {
     "q": "`FormData.get(\"email\")` qanday tip qaytaradi?",
     "options": [
      "`string`",
      "`string | File | null`",
      "`unknown`",
      "`number`"
     ],
     "answer": 1,
     "explain": "FormData qiymati satr, fayl yoki mavjud bo'lmasa `null` bo'lishi mumkin. Shuning uchun validatsiya zarur."
    },
    {
     "q": "`useActionState` qanday natija qaytaradi?",
     "options": [
      "Faqat holat",
      "Faqat xato",
      "Holat, action va pending bayrog'i",
      "Promise"
     ],
     "answer": 2,
     "explain": "Destrukturizatsiya `[holat, action, kutilmoqda]` ko'rinishida bo'ladi; uchinchi element forma yuborilayotganini bildiradi."
    }
   ]
  },
  {
   "id": 85,
   "title": "Next.js ma'lumot oqimi va kesh",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "App Router'da ma'lumot server komponentda olinadi. Next.js <code>fetch</code> ni kengaytiradi: <code>next.revalidate</code> bilan vaqt bo'yicha, <code>next.tags</code> bilan esa <code>revalidateTag</code> orqali yangilash mumkin. Next 15 da keshlash standart holatda o'chirilgan — aniq xohlamasangiz, har so'rov yangi ma'lumot oladi."
    },
    {
     "type": "code",
     "title": "server komponentda ma'lumot",
     "code": "type Post = { id: number; sarlavha: string };\n\nconst postlar: Post[] = [\n  { id: 1, sarlavha: \"TS asoslari\" },\n  { id: 2, sarlavha: \"Generiklar\" },\n];\n\nexport default async function Sahifa() {\n  const data = await Promise.resolve(postlar);\n  console.log(\"render:\", data.length);\n  return (\n    <ul>\n      {data.map((p) => (\n        <li key={p.id}>{p.sarlavha}</li>\n      ))}\n    </ul>\n  );\n}\n\nSahifa();",
     "output": "render: 2"
    },
    {
     "type": "p",
     "html": "Haqiqiy loyihada <code>fetch(url, { next: { revalidate: 60, tags: [\"posts\"] } })</code> yoziladi. Ma'lumot o'zgarganda <code>revalidateTag(\"posts\")</code> keshni bekor qiladi; <code>revalidatePath(\"/posts\")</code> esa sahifa darajasida ishlaydi. Kesh strategiyasi biznes talabiga bog'liq: narxlar tez o'zgaradi, blog postlari esa kamdan-kam."
    },
    {
     "type": "code",
     "title": "searchParams (Next 15)",
     "code": "type Qidiruv = { q?: string };\n\nexport default async function QidiruvSahifa({\n  searchParams,\n}: {\n  searchParams: Promise<Qidiruv>;\n}) {\n  const { q } = await searchParams;\n  console.log(\"qidiruv:\", q ?? \"hammasi\");\n  return <p>{q ?? \"hammasi\"}</p>;\n}\n\nQidiruvSahifa({ searchParams: Promise.resolve({ q: \"typescript\" }) });",
     "output": "qidiruv: typescript"
    },
    {
     "type": "table",
     "head": [
      "Vazifa",
      "Vosita"
     ],
     "rows": [
      [
       "Vaqt bo'yicha yangilash",
       "`fetch(..., { next: { revalidate: 60 } })`"
      ],
      [
       "Teg bo'yicha bekor qilish",
       "`revalidateTag(\"posts\")`"
      ],
      [
       "Sahifa bo'yicha bekor qilish",
       "`revalidatePath(\"/posts\")`"
      ],
      [
       "Sekin qismni kechiktirish",
       "`<Suspense>` + streaming"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Sekin so'rovni bloklamang",
     "html": "Butun sahifani bitta sekin so'rov ortida kutish o'rniga mustaqil qismlarni <code>&lt;Suspense&gt;</code> bilan o'rang. Foydalanuvchi skeletni darhol ko'radi, ma'lumot kelganda bo'lim to'ldiriladi. Bu idrok etiladigan tezlikni sezilarli oshiradi."
    }
   ],
   "quiz": [
    {
     "q": "Next.js'da `fetch` keshini teg orqali bekor qilish uchun nima ishlatiladi?",
     "options": [
      "`revalidateTag`",
      "`revalidatePath`",
      "`router.refresh`",
      "`cache.delete`"
     ],
     "answer": 0,
     "explain": "`revalidateTag(\"posts\")` shu teg bilan keshlangan barcha ma'lumotlarni keyingi so'rovda yangilaydi."
    },
    {
     "q": "Next 15 da `searchParams` prop'i qanday keladi?",
     "options": [
      "Oddiy obyekt",
      "Satr",
      "Faqat client komponentda mavjud",
      "Promise, `await` qilish kerak"
     ],
     "answer": 3,
     "explain": "Next 15 da `params` va `searchParams` Promise sifatida uzatiladi; server komponentda ularni `await` qilish kerak."
    },
    {
     "q": "Sekin ma'lumot blokini qanday qilib sahifani bloklamasdan ko'rsatish mumkin?",
     "options": [
      "Butun sahifani client komponent qilish",
      "`<Suspense>` bilan o'rash va streaming",
      "`useEffect` ichida fetch qilish",
      "Keshni butunlay o'chirish"
     ],
     "answer": 1,
     "explain": "`Suspense` fallback darhol ko'rsatiladi, tayyor bo'lgan qism stream orqali yuboriladi."
    }
   ]
  },
  {
   "id": 86,
   "title": "Vitest: mock, fake timers va tipli testlar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Vitest zamonaviy Vite loyihalari uchun test runner. <code>vi.fn()</code> mock funksiya yaratadi, <code>vi.mock()</code> modulni almashtiradi, <code>vi.useFakeTimers()</code> esa vaqtni boshqaradi. Tipli mock yozish testning o'zini ham xavfsiz qiladi: noto'g'ri argument yoki qaytish tipi kompilyatorda ko'rinadi."
    },
    {
     "type": "code",
     "title": "tipli mock va chaqiruv tekshiruvi",
     "code": "import { expect, test, vi } from \"vitest\";\n\ntype Ombor = { saqla(x: string): void };\n\nfunction xizmat(ombor: Ombor, qiymat: string): void {\n  ombor.saqla(qiymat.trim());\n}\n\ntest(\"saqlash trim bilan chaqiriladi\", () => {\n  const saqla = vi.fn<(x: string) => void>();\n  xizmat({ saqla }, \"  salom  \");\n  expect(saqla).toHaveBeenCalledWith(\"salom\");\n  console.log(\"chaqiruvlar:\", saqla.mock.calls.length);\n});",
     "output": "chaqiruvlar: 1"
    },
    {
     "type": "p",
     "html": "<code>vi.fn&lt;(x: string) =&gt; void&gt;()</code> mock'ning imzosini belgilaydi. <code>mock.calls</code> barcha chaqiruvlarni saqlaydi, <code>toHaveBeenCalledWith</code> esa argumentlarni tekshiradi. Har test oldidan mock'larni tozalash uchun <code>vi.clearAllMocks()</code> yoki konfiguratsiyadagi <code>clearMocks</code> ishlatiladi."
    },
    {
     "type": "code",
     "title": "fake timers",
     "code": "import { afterEach, beforeEach, expect, test, vi } from \"vitest\";\n\nfunction kechiktir(cb: () => void): void {\n  setTimeout(cb, 1000);\n}\n\nbeforeEach(() => vi.useFakeTimers());\nafterEach(() => vi.useRealTimers());\n\ntest(\"taymer bir soniyada ishlaydi\", () => {\n  const cb = vi.fn();\n  kechiktir(cb);\n  vi.advanceTimersByTime(1000);\n  expect(cb).toHaveBeenCalledOnce();\n  console.log(\"chaqirildi:\", cb.mock.calls.length);\n});",
     "output": "chaqirildi: 1"
    },
    {
     "type": "table",
     "head": [
      "API",
      "Vazifasi"
     ],
     "rows": [
      [
       "`vi.fn()`",
       "Mock funksiya"
      ],
      [
       "`vi.mock(\"modul\")`",
       "Butun modulni almashtirish (hoisted)"
      ],
      [
       "`vi.useFakeTimers()`",
       "`setTimeout` va `Date` ni boshqarish"
      ],
      [
       "`vi.spyOn(obj, \"metod\")`",
       "Mavjud metodni kuzatish"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Ortiqcha mock",
     "html": "Hamma narsani mock qilish testni ishonchsiz qiladi: u haqiqiy integratsiyani tekshirmaydi. Faqat tashqi chegara (tarmoq, vaqt, tasodif, fayl tizimi) ni mock qiling; domen mantiqini haqiqiy kod bilan sinang."
    }
   ],
   "quiz": [
    {
     "q": "`vi.mock()` qanday xususiyatga ega?",
     "options": [
      "Fayl oxirida bajariladi",
      "Faqat async funksiyalarda ishlaydi",
      "Hoisted — import'lardan oldin ko'tariladi",
      "Faqat Node modullarini mock qiladi"
     ],
     "answer": 2,
     "explain": "Vitest `vi.mock` chaqiruvini import'lardan yuqoriga ko'taradi, shuning uchun modul allaqachon mock bilan yuklanadi."
    },
    {
     "q": "Fake timers bilan `setTimeout` ni tekshirish uchun nima qilinadi?",
     "options": [
      "`vi.advanceTimersByTime(1000)`",
      "Haqiqiy 1 soniya kutish",
      "`await new Promise(r => setTimeout(r, 1000))`",
      "`vi.clearAllMocks()`"
     ],
     "answer": 0,
     "explain": "Fake timers vaqtni sun'iy oldinga suradi; test tez va deterministik bo'ladi."
    },
    {
     "q": "Qaysi holatda mock ortiqcha bo'ladi?",
     "options": [
      "Tashqi HTTP API chaqirig'ida",
      "Tasodifiy son generatorida",
      "Joriy vaqtni olishda",
      "Sof domen hisob-kitobida"
     ],
     "answer": 3,
     "explain": "Sof funksiyani mock qilish haqiqiy mantiqni tekshirmaslikka olib keladi. Uni to'g'ridan-to'g'ri chaqirib test qilish kerak."
    }
   ]
  },
  {
   "id": 87,
   "title": "Type-level testlar: expect-type va tsd",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Runtime testlar tip xatolarini ushlamaydi: noto'g'ri tip bilan ham JavaScript ishlashi mumkin. <b>Type-level test</b> kompilyatorni tekshiradi. <code>expect-type</code> yoki <code>tsd</code> yordamida funksiya qaytish tipi, generik xulosa va brendlar qulflab qo'yiladi. Bu kutubxonalar uchun ayniqsa muhim."
    },
    {
     "type": "code",
     "title": "expect-type bilan xulosa tekshiruvi",
     "code": "import { expectTypeOf } from \"expect-type\";\n\nfunction juftlik<T>(x: T): [T, T] {\n  return [x, x];\n}\n\nexpectTypeOf(juftlik<string>(\"a\")).toEqualTypeOf<[string, string]>();\nexpectTypeOf(juftlik<number>(1)).toEqualTypeOf<[number, number]>();\n\nconsole.log(juftlik(\"a\").length);\nconsole.log(typeof juftlik(1)[0]);",
     "output": "2\nnumber"
    },
    {
     "type": "p",
     "html": "<code>expectTypeOf</code> chaqiruvlari runtime'da deyarli hech narsa qilmaydi, lekin noto'g'ri tipda kompilyatsiya to'xtaydi. Bu testlar <code>vitest --typecheck</code> yoki alohida <code>tsc --noEmit</code> bilan CI'da ishga tushiriladi. Ularni oddiy unit testlar bilan bir joyda saqlash mumkin."
    },
    {
     "type": "code",
     "title": "@ts-expect-error bilan salbiy test",
     "code": "type UserId = string & { readonly __brand: \"UserId\" };\nconst id = \"u_1\" as UserId;\n\n// @ts-expect-error oddiy string brendlangan tip emas\nconst xato: UserId = \"u_2\";\n\nconsole.log(id.toUpperCase());\nconsole.log(\"salbiy test o'tdi\");",
     "output": "U_1\nsalbiy test o'tdi"
    },
    {
     "type": "ul",
     "items": [
      "<code>@ts-expect-error</code> xato bo'lmasa o'zi xato beradi — bu uni haqiqiy salbiy testga aylantiradi.",
      "<code>@ts-ignore</code> esa jim o'tkazadi va test emas.",
      "<code>tsd</code> testlari <code>.test-d.ts</code> fayllarida yoziladi va faqat tipni tekshiradi.",
      "Runtime qismida ham kamida bitta haqiqiy chaqiruv qoldiring, aks holda kod o'lik bo'lib qoladi."
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Qaysi vositani tanlash",
     "html": "Kichik loyihada <code>expect-type</code> yetarli. Nashr etiladigan kutubxonada <code>tsd</code> yoki <code>vitest --typecheck</code> bilan alohida CI qadami qo'shish odatiy. Ikkalasi ham TypeScript versiyasiga bog'liq — versiyani yangilaganda testlarni qayta ishga tushiring."
    }
   ],
   "quiz": [
    {
     "q": "`@ts-expect-error` oddiy izohdan qanday farq qiladi?",
     "options": [
      "Xatoni butunlay o'chiradi",
      "Kutilgan xato bo'lmasa, o'zi xato beradi",
      "Faqat test fayllarida ishlaydi",
      "Runtime'da xato tashlaydi"
     ],
     "answer": 1,
     "explain": "Agar keyingi qator xato bermasa, TypeScript \"Unused '@ts-expect-error' directive\" xatosini beradi. Bu salbiy testni ishonchli qiladi."
    },
    {
     "q": "`expectTypeOf` qachon bajariladi?",
     "options": [
      "Faqat runtime'da",
      "Faqat brauzerda",
      "Kompilyatsiya vaqtida, runtime'da izi qolmaydi",
      "Faqat test runner ishga tushganda"
     ],
     "answer": 2,
     "explain": "Bu tip darajasidagi assertion; u type checker tomonidan tekshiriladi va JavaScript'ga aylantirilganda o'chadi."
    },
    {
     "q": "Type-level testlar nimani ushlay olmaydi?",
     "options": [
      "Runtime'dagi noto'g'ri biznes mantiqni",
      "Noto'g'ri qaytish tipini",
      "Brendlangan tipning buzilishini",
      "Generik xulosaning o'zgarishini"
     ],
     "answer": 0,
     "explain": "Type testlar faqat tip shaklini tekshiradi. Hisob-kitob xatosi yoki noto'g'ri shart runtime testlar orqali topiladi."
    }
   ]
  },
  {
   "id": 88,
   "title": "Integratsion va E2E testlar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Unit test bitta funksiyani tekshiradi; integratsion test esa bir necha qatlamni — HTTP, validatsiya, baza — birga sinaydi. E2E test brauzer orqali haqiqiy foydalanuvchi yo'lini bosib o'tadi. Ular sekinroq va qimmatroq, shuning uchun test piramidasida kamroq bo'ladi, lekin eng muhim oqimlarni qoplaydi."
    },
    {
     "type": "code",
     "title": "Supertest bilan API testi",
     "code": "import request from \"supertest\";\nimport { expect, test } from \"vitest\";\nimport { app } from \"../src/app\";\n\ntest(\"POST /posts yangi post yaratadi\", async () => {\n  const javob = await request(app)\n    .post(\"/posts\")\n    .send({ sarlavha: \"Yangi\" })\n    .expect(201);\n\n  expect(javob.body.sarlavha).toBe(\"Yangi\");\n  console.log(\"status:\", javob.status);\n});",
     "output": "status: 201"
    },
    {
     "type": "p",
     "html": "Supertest ilovani port ochmasdan chaqiradi va HTTP javobini tekshiradi. Test bazasini har test oldidan tozalash yoki tranzaksiya ichida ishlatish izolyatsiyani ta'minlaydi. Haqiqiy production bazasiga hech qachon test yozmang — alohida test konteyneri yoki xotira bazasi ishlatiladi."
    },
    {
     "type": "code",
     "title": "Playwright bilan E2E",
     "code": "import { expect, test } from \"@playwright/test\";\n\ntest(\"royxatdan o'tish oqimi\", async ({ page }) => {\n  await page.goto(\"/royxat\");\n  await page.getByLabel(\"Email\").fill(\"ali@noldan.uz\");\n  await page.getByRole(\"button\", { name: \"Yuborish\" }).click();\n  await expect(page.getByText(\"Muvaffaqiyat\")).toBeVisible();\n  console.log(\"e2e tugadi\");\n});",
     "output": "e2e tugadi"
    },
    {
     "type": "table",
     "head": [
      "Daraja",
      "Nimani tekshiradi",
      "Tezlik"
     ],
     "rows": [
      [
       "Unit",
       "Bitta funksiya/klass",
       "Juda tez"
      ],
      [
       "Integratsion",
       "API + baza + validatsiya",
       "O'rtacha"
      ],
      [
       "E2E",
       "Brauzerdagi to'liq oqim",
       "Sekin"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Flaky testlar",
     "html": "E2E testlarda <code>sleep</code> emas, holatga asoslangan kutish (<code>toBeVisible</code>) ishlatilsin. Har test o'z ma'lumotini yaratsin va tozalasin; testlar tartibiga bog'liq bo'lmasin. Flaky testga e'tiborsiz qolish butun to'plamga ishonchni yo'qotadi."
    }
   ],
   "quiz": [
    {
     "q": "Integratsion test unit testdan nimasi bilan farq qiladi?",
     "options": [
      "Faqat brauzerda ishlaydi",
      "Har doim tezroq",
      "TypeScript'siz ishlaydi",
      "Bir necha qatlamni birgalikda tekshiradi"
     ],
     "answer": 3,
     "explain": "Integratsion test HTTP, validatsiya va baza kabi qatlamlarning birgalikda ishlashini tekshiradi."
    },
    {
     "q": "Playwright'da element paydo bo'lishini kutishning to'g'ri usuli qaysi?",
     "options": [
      "`await page.waitForTimeout(3000)`",
      "`await expect(locator).toBeVisible()`",
      "`while (!visible) {}`",
      "`sleep(3)`"
     ],
     "answer": 1,
     "explain": "Playwright avtomatik kutadi; holatga asoslangan assertion flaky testni kamaytiradi. Qattiq kutish vaqtni behuda sarflaydi."
    },
    {
     "q": "E2E testlar test piramidasida nega kam bo'ladi?",
     "options": [
      "Ular TypeScript'ni qo'llamaydi",
      "Ular faqat backendni tekshiradi",
      "Ular sekin va qimmat, lekin muhim oqimlarni qoplaydi",
      "Ular har doim noto'g'ri natija beradi"
     ],
     "answer": 2,
     "explain": "E2E sekin va murakkab, shuning uchun asosiy foydalanuvchi oqimlarini qoplash bilan cheklanadi; ko'p tekshiruv unit/integratsion darajada bo'ladi."
    }
   ]
  },
  {
   "id": 89,
   "title": "TypeScript performance va kompilyatsiya",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "TypeScript kompilyatori tipni hisoblash uchun vaqt sarflaydi. Katta unionlar, rekursiv conditional tiplar va <code>keyof</code> bo'ylab og'ir mapped tiplar instantsiyalar sonini portlatishi mumkin. Sekinlashuvning belgilari: IDE'da sekin autocomplete, <code>tsc</code> vaqtining o'sishi va \"excessively deep\" xatolari. Avval o'lchash, keyin optimallashtirish kerak."
    },
    {
     "type": "code",
     "title": "template literal portlashi",
     "code": "type Rang = \"qizil\" | \"yashil\" | \"ko'k\";\ntype Olcham = \"s\" | \"m\" | \"l\";\ntype Kombinatsiya = `${Rang}-${Olcham}`;\n\nconst barchasi: Kombinatsiya[] = [\n  \"qizil-s\", \"qizil-m\", \"qizil-l\",\n  \"yashil-s\", \"yashil-m\", \"yashil-l\",\n  \"ko'k-s\", \"ko'k-m\", \"ko'k-l\",\n];\n\nconsole.log(barchasi.length);\nconsole.log(new Set(barchasi).size);",
     "output": "9\n9"
    },
    {
     "type": "p",
     "html": "3 × 3 = 9 kombinatsiya zararsiz. Lekin 30 ta rang va 10 ta o'lcham 300 ta literal beradi; ular bir necha joyda kesishsa, instantsiyalar soni tez o'sadi. Bunday holatda aniq literal union o'rniga <code>string</code> yoki cheklangan generik ishlatish kompilyatorni yengillashtiradi."
    },
    {
     "type": "code",
     "title": "chuqur mapped tip",
     "code": "type Chuqur<T> = {\n  [K in keyof T]: T[K] extends object ? Chuqur<T[K]> : T[K];\n};\n\ntype Konfig = { a: { b: { c: { d: string } } } };\nconst k: Chuqur<Konfig> = {\n  a: { b: { c: { d: \"tayyor\" } } },\n};\n\nconsole.log(k.a.b.c.d);\nconsole.log(typeof k.a.b);",
     "output": "tayyor\nobject"
    },
    {
     "type": "table",
     "head": [
      "Belgi",
      "Nima qilish"
     ],
     "rows": [
      [
       "Sekin IDE",
       "`tsc --extendedDiagnostics` bilan o'lchash"
      ],
      [
       "Ko'p instantsiya",
       "Union va rekursiyani kamaytirish"
      ],
      [
       "Kutubxona tiplari sekin",
       "`skipLibCheck: true`"
      ],
      [
       "Har build to'liq",
       "Project references + incremental"
      ],
      [
       "Trace kerak",
       "`tsc --generateTrace trace`"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Mikro-optimizatsiya qilmang",
     "html": "Kichik loyihada 200 ms farq sezilmaydi. Avval o'lchov: <code>tsc --diagnostics</code> umumiy vaqtni, <code>--extendedDiagnostics</code> instantsiyalar va type count'ni ko'rsatadi. Eng qimmat joyni topmasdan turib tiplarni soddalashtirish vaqtni behuda sarflash bo'lishi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "Qaysi omil TypeScript kompilyatsiyasini sekinlashtirishi mumkin?",
     "options": [
      "Katta template literal unionlar",
      "`const` o'zgaruvchilar",
      "Oddiy interfeyslar",
      "`readonly` massivlar"
     ],
     "answer": 0,
     "explain": "Unionlar kesishganda kombinatsiyalar soni portlaydi va har bir kombinatsiya alohida instantsiya sifatida hisoblanadi."
    },
    {
     "q": "Uchinchi tomon kutubxonalarining declaration tekshiruvini o'tkazib yuborish uchun qaysi bayroq ishlatiladi?",
     "options": [
      "`noEmit`",
      "`isolatedModules`",
      "`allowJs`",
      "`skipLibCheck`"
     ],
     "answer": 3,
     "explain": "`skipLibCheck: true` `.d.ts` fayllarini o'zaro tekshirishni o'tkazib yuboradi va build vaqtini qisqartiradi."
    },
    {
     "q": "Build vaqtini qisqartirishning arxitekturaviy usuli qaysi?",
     "options": [
      "Barcha kodni bitta faylga yig'ish",
      "Project references va incremental build",
      "`any` ni ko'paytirish",
      "Testlarni o'chirish"
     ],
     "answer": 1,
     "explain": "Project references va incremental faqat o'zgargan loyihalarni qayta quradi, katta monorepo'da vaqtni sezilarli tejaydi."
    }
   ]
  },
  {
   "id": 90,
   "title": "Sifat darvozalari: ESLint, Prettier va CI",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "TypeScript hamma xatoni ushlamaydi: ishlatilmagan Promise, noto'g'ri import tartibi yoki testda qolgan <code>console.log</code> kompilyatordan o'tadi. <b>typescript-eslint</b> tip ma'lumotiga tayangan qoidalar bilan bu bo'shliqni to'ldiradi. Prettier formatlashni, CI esa barcha tekshiruvlarni har push'da majburiy qiladi."
    },
    {
     "type": "code",
     "title": "tipga tayangan lint xatosi",
     "code": "async function yukla(): Promise<number> {\n  return 42;\n}\n\nfunction ishgaTushir(): void {\n  yukla();\n  console.log(\"boshlandi\");\n}\n\nishgaTushir();\nconsole.log(\"tayyor\");",
     "output": "boshlandi\ntayyor"
    },
    {
     "type": "p",
     "html": "Yuqoridagi kod ishlaydi, lekin <code>@typescript-eslint/no-floating-promises</code> qoidasi <code>yukla()</code> natijasi e'tiborsiz qolganini ko'rsatadi. Tuzatish: <code>await</code>, <code>void</code> yoki <code>.catch()</code>. Bunday qoidalar tip ma'lumotini talab qiladi, shuning uchun ESLint konfiguratsiyasida <code>parserOptions.projectService</code> yoqiladi."
    },
    {
     "type": "code",
     "title": "CI qadamlar tartibi",
     "code": "const qadamlar = [\"typecheck\", \"lint\", \"test\", \"build\"] as const;\n\nfor (const qadam of qadamlar) {\n  console.log(\"→\", qadam);\n}\n\nconst tez = qadamlar.indexOf(\"lint\") < qadamlar.indexOf(\"test\");\nconsole.log(\"lint testdan oldin:\", tez);",
     "output": "→ typecheck\n→ lint\n→ test\n→ build\nlint testdan oldin: true"
    },
    {
     "type": "table",
     "head": [
      "Vosita",
      "Vazifasi",
      "CI buyrug'i"
     ],
     "rows": [
      [
       "TypeScript",
       "Tip tekshiruvi",
       "`tsc --noEmit`"
      ],
      [
       "ESLint",
       "Xavfli patternlar",
       "`eslint .`"
      ],
      [
       "Prettier",
       "Format",
       "`prettier --check .`"
      ],
      [
       "Vitest",
       "Testlar",
       "`vitest run`"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Tez qadam birinchi",
     "html": "CI'da eng arzon va tez tekshiruvni birinchi qo'ying: tip va lint odatda testdan tez tugaydi. Xato bo'lsa keyingi qadamlar bajarilmaydi va resurs tejaladi. Shu bilan birga barcha qadamlar lokal <code>pre-commit</code> hook'da ham ishlashi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "`no-floating-promises` qoidasi nimani aniqlaydi?",
     "options": [
      "Ishlatilmagan o'zgaruvchilarni",
      "Noto'g'ri import tartibini",
      "Natijasi kutilmagan yoki ushlanmagan Promise'ni",
      "Juda uzun funksiyalarni"
     ],
     "answer": 2,
     "explain": "Promise rad etilsa va hech kim ushlamasa, xato yo'qoladi. Qoida `await`, `void` yoki `.catch()` talab qiladi."
    },
    {
     "q": "Tipga tayangan ESLint qoidalari ishlashi uchun nima kerak?",
     "options": [
      "TypeScript parser va loyiha ma'lumoti (`projectService` yoki `project`)",
      "Faqat `eslint:recommended`",
      "Prettier o'rnatilgan bo'lishi",
      "Node 14"
     ],
     "answer": 0,
     "explain": "Qoidalar tip ma'lumotini talab qiladi; parser TypeScript AST va tsconfig kontekstini bilishi kerak."
    },
    {
     "q": "CI'da tekshiruvlar tartibi qanday bo'lishi ma'qul?",
     "options": [
      "Eng sekin testlar birinchi",
      "Tartib muhim emas",
      "Faqat build birinchi",
      "Eng tez va arzon tekshiruvlar birinchi"
     ],
     "answer": 3,
     "explain": "Tip va lint tez ishlaydi; erta to'xtash CI vaqtini va xarajatini tejaydi."
    }
   ]
  },
  {
   "id": 91,
   "title": "Kutubxona API dizayni va semver",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Kutubxona API'si — foydalanuvchilar bilan shartnoma. Uni o'zgartirish semver qoidalariga bo'ysunadi: patch — xato tuzatish, minor — mos keladigan qo'shimcha, major — buzuvchi o'zgarish. Tajribali dizayn parametrlarni obyekt qilib beradi, standart qiymatlarni aniq belgilaydi va xato holatlarini tiplaydi. Kengaytirish uchun joy qoldirish keyingi major'ni kechiktiradi."
    },
    {
     "type": "code",
     "title": "options obyekti va standartlar",
     "code": "type SorovSozlamasi = {\n  timeoutMs?: number;\n  retry?: number;\n  onRetry?: (urinish: number) => void;\n};\n\nconst standart = {\n  timeoutMs: 5000,\n  retry: 2,\n} satisfies Required<Pick<SorovSozlamasi, \"timeoutMs\" | \"retry\">>;\n\nfunction sozlamaniYig(options: SorovSozlamasi = {}) {\n  return { ...standart, ...options };\n}\n\nconsole.log(sozlamaniYig({ retry: 0 }).timeoutMs);\nconsole.log(sozlamaniYig().retry);\nconsole.log(sozlamaniYig({ timeoutMs: 100 }).retry);",
     "output": "5000\n2\n2"
    },
    {
     "type": "p",
     "html": "Obyekt parametri keyinchalik yangi ixtiyoriy maydon qo'shishni osonlashtiradi: mavjud chaqiruvlar buzilmaydi. Pozitsion parametrlar esa har qo'shimcha argumentda API'ni buzadi. Standart qiymatlarni bitta joyda saqlash hujjat va kod o'rtasidagi farqni kamaytiradi."
    },
    {
     "type": "code",
     "title": "orqaga mos overload",
     "code": "function format(qiymat: string): string;\nfunction format(qiymat: number, decimals: number): string;\nfunction format(qiymat: string | number, decimals = 0): string {\n  return typeof qiymat === \"string\"\n    ? qiymat\n    : qiymat.toFixed(decimals);\n}\n\nconsole.log(format(\"salom\"));\nconsole.log(format(3.14159, 2));\nconsole.log(format(42, 0));",
     "output": "salom\n3.14\n42"
    },
    {
     "type": "table",
     "head": [
      "O'zgarish",
      "Tur",
      "Misol"
     ],
     "rows": [
      [
       "Xato tuzatish",
       "patch",
       "Ichki mantiq, API o'zgarmaydi"
      ],
      [
       "Yangi ixtiyoriy parametr",
       "minor",
       "`options.cache?: boolean`"
      ],
      [
       "Majburiy maydon qo'shish",
       "major",
       "Mavjud chaqiruvlar buziladi"
      ],
      [
       "Export o'chirish",
       "major",
       "Import xatosi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Tiplar ham API",
     "html": "Qaytish tipini toraytirish yoki parametrni kengaytirish odatda xavfsiz, teskarisi esa buzuvchi bo'lishi mumkin. Eksport qilingan har bir tip, hatto ichki ko'ringan bo'lsa ham, foydalanuvchi kodiga ta'sir qiladi. <code>export *</code> o'rniga aniq ro'yxat ishlating."
    }
   ],
   "quiz": [
    {
     "q": "Mavjud funksiyaga yangi majburiy parametr qo'shish semver bo'yicha qanday o'zgarish?",
     "options": [
      "Patch",
      "Major",
      "Minor",
      "Semverga ta'sir qilmaydi"
     ],
     "answer": 1,
     "explain": "Barcha mavjud chaqiruvlar argument yetishmovchiligi bilan buziladi, shuning uchun major versiya kerak."
    },
    {
     "q": "Options obyekti pozitsion parametrlardan nimasi bilan afzal?",
     "options": [
      "Tezroq ishlaydi",
      "TypeScript talab qiladi",
      "Yangi ixtiyoriy maydonlarni buzmasdan qo'shish oson",
      "Kamroq xotira oladi"
     ],
     "answer": 2,
     "explain": "Obyektga yangi ixtiyoriy kalit qo'shish mavjud chaqiruvlarni o'zgartirmaydi; pozitsion tartib esa qattiq bog'langan."
    },
    {
     "q": "Qaysi o'zgarish odatda minor versiyaga mos?",
     "options": [
      "Yangi ixtiyoriy parametr qo'shish",
      "Eksportni o'chirish",
      "Majburiy maydon qo'shish",
      "Funksiya nomini o'zgartirish"
     ],
     "answer": 0,
     "explain": "Yangi ixtiyoriy imkoniyat mavjud kodni buzmaydi, shuning uchun minor hisoblanadi."
    }
   ]
  },
  {
   "id": 92,
   "title": "Deklaratsiya fayllari va declaration emit",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<code>.d.ts</code> fayli faqat tip ma'lumotini saqlaydi: funksiya imzosi, interfeys, eksport. U ish vaqtida bajarilmaydi. Kutubxona build qilganda <code>declaration: true</code> bilan avtomatik yaratiladi. Qo'lda yozilgan declaration esa tipsiz npm paketlar yoki global API'lar uchun ishlatiladi."
    },
    {
     "type": "code",
     "title": "manba va natija",
     "code": "// src/math.ts\nexport function yigindi(a: number, b: number): number {\n  return a + b;\n}\n\nexport const VERSIYA = \"1.0.0\";\n\nconsole.log(yigindi(2, 3));\nconsole.log(VERSIYA);",
     "output": "5\n1.0.0"
    },
    {
     "type": "p",
     "html": "Kompilyatsiyadan keyin <code>dist/math.d.ts</code> faqat imzolarni saqlaydi: <code>export declare function yigindi(a: number, b: number): number;</code>. Jism yo'q, izohlar va tiplar bor. <code>emitDeclarationOnly</code> bilan faqat shu fayllarni chiqarish, JavaScript'ni esa boshqa bundlerga topshirish mumkin."
    },
    {
     "type": "code",
     "title": "tipsiz paket uchun ambient modul",
     "code": "// types/legacy-utils.d.ts\ndeclare module \"legacy-utils\" {\n  export function slugify(input: string): string;\n  export const version: string;\n}\n\n// src/index.ts\nimport { slugify } from \"legacy-utils\";\nconsole.log(slugify(\"Salom Dunyo\"));",
     "output": "salom-dunyo"
    },
    {
     "type": "table",
     "head": [
      "Sozlama",
      "Natija"
     ],
     "rows": [
      [
       "`declaration: true`",
       "`.js` bilan birga `.d.ts`"
      ],
      [
       "`emitDeclarationOnly: true`",
       "Faqat `.d.ts`"
      ],
      [
       "`declarationMap: true`",
       "Editor'da manbaga sakrash"
      ],
      [
       "`types` / `include`",
       "Qo'lda yozilgan `.d.ts` loyihaga qo'shiladi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Declaration faylni tekshiring",
     "html": "`declaration: true` bilan build qilinganda chiqqan <code>.d.ts</code> ni ochib ko'ring: ichki tiplar tashqariga chiqib qolmasin, yo'l xatolari bo'lmasin. <code>@arethetypeswrong/cli</code> kabi vosita paketning tip rezolyutsiyasini tekshiradi."
    }
   ],
   "quiz": [
    {
     "q": "`.d.ts` faylida nima saqlanadi?",
     "options": [
      "Bajariladigan JavaScript",
      "Testlar",
      "Source map",
      "Faqat tip imzolari va deklaratsiyalar"
     ],
     "answer": 3,
     "explain": "Declaration fayl runtime kodini saqlamaydi; u kompilyatorga API shaklini aytadi."
    },
    {
     "q": "Faqat declaration fayllarini chiqarish uchun qaysi bayroq ishlatiladi?",
     "options": [
      "`noEmit`",
      "`emitDeclarationOnly`",
      "`removeComments`",
      "`allowJs`"
     ],
     "answer": 1,
     "explain": "`emitDeclarationOnly` JavaScript chiqarmaydi, faqat `.d.ts` yozadi. Odatda `declaration: true` bilan birga ishlaydi."
    },
    {
     "q": "Tipsiz npm paket uchun qanday fayl yoziladi?",
     "options": [
      "Oddiy `.js` fayl",
      "`tsconfig.json`",
      "Ambient `declare module` bilan `.d.ts`",
      "`package-lock.json`"
     ],
     "answer": 2,
     "explain": "`declare module \"paket-nomi\" { ... }` paket API'sini tip bilan ta'minlaydi, paketning o'zida tiplar bo'lmasa ham."
    }
   ]
  },
  {
   "id": 93,
   "title": "package.json exports va dual ESM/CJS",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Zamonaviy paket ham ESM, ham CommonJS iste'molchilarni qo'llab-quvvatlashi mumkin. <code>package.json</code> dagi <code>exports</code> xaritasi qaysi shartda qaysi fayl berilishini belgilaydi. <code>types</code> sharti birinchi turishi kerak, aks holda TypeScript noto'g'ri deklaratsiyani topishi mumkin. Dual paketda ikkita nusxa yuklanish xavfi bor."
    },
    {
     "type": "code",
     "title": "paketning public entry'si",
     "code": "export { format } from \"./format.js\";\nexport type { FormatOptions } from \"./types.js\";\n\nconst versiya = \"2.1.0\";\nconsole.log(\"public API:\", versiya);",
     "output": "public API: 2.1.0"
    },
    {
     "type": "p",
     "html": "Eksport xaritasi taxminan shunday ko'rinadi: <code>\".\"</code> uchun <code>import</code> → <code>./dist/index.js</code>, <code>require</code> → <code>./dist/index.cjs</code>, <code>types</code> → <code>./dist/index.d.ts</code>. Ichki fayllar <code>exports</code> da ko'rsatilmasa, ularga chuqur import qilish yopiladi — bu API chegarasini himoya qiladi."
    },
    {
     "type": "code",
     "title": "iste'molchi tomoni",
     "code": "import { format } from \"@noldan/format\";\nimport type { FormatOptions } from \"@noldan/format\";\n\nconst sozlama: FormatOptions = { decimals: 2 };\nconsole.log(format(3.14159, sozlama));\nconsole.log(typeof format);",
     "output": "3.14\nfunction"
    },
    {
     "type": "table",
     "head": [
      "Shart",
      "Fayl",
      "Izoh"
     ],
     "rows": [
      [
       "`types`",
       "`dist/index.d.ts`",
       "Birinchi turishi kerak"
      ],
      [
       "`import`",
       "`dist/index.js`",
       "ESM iste'molchilar"
      ],
      [
       "`require`",
       "`dist/index.cjs`",
       "CommonJS iste'molchilar"
      ],
      [
       "`default`",
       "`dist/index.js`",
       "Zaxira"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Dual package hazard",
     "html": "Agar ESM va CJS build alohida modul holatini (masalan, global kesh yoki singleton) saqlasa, ilovada ikki nusxa paydo bo'ladi. Bunday holatda bitta formatni asosiy qilib, ikkinchisini wrapper qiling yoki holatni tashqi xizmatga chiqaring."
    }
   ],
   "quiz": [
    {
     "q": "`exports` xaritasida qaysi shart birinchi turishi kerak?",
     "options": [
      "`types`",
      "`import`",
      "`require`",
      "`default`"
     ],
     "answer": 0,
     "explain": "TypeScript `types` shartini birinchi ko'rishi kerak; aks holda noto'g'ri yoki topilmagan deklaratsiya xatosi chiqadi."
    },
    {
     "q": "`exports` da ko'rsatilmagan ichki faylga import qilinsa nima bo'ladi?",
     "options": [
      "Ishlayveradi",
      "Avtomatik ESM bo'ladi",
      "Faqat testda ishlaydi",
      "Node va bundler uni rad etadi (subpath yopilgan)"
     ],
     "answer": 3,
     "explain": "`exports` mavjud bo'lsa, faqat ko'rsatilgan subpath'lar ochiq. Bu ichki tuzilmani yashirish va API barqarorligini saqlash usuli."
    },
    {
     "q": "Dual package hazard nimadan kelib chiqadi?",
     "options": [
      "Paket nomi uzun bo'lganda",
      "Bir paketning ESM va CJS nusxalari alohida holat saqlaganda",
      "TypeScript strict yoqilganda",
      "`types` maydoni bo'lmasa"
     ],
     "answer": 1,
     "explain": "Ikki format alohida yuklansa, singleton yoki kesh ikki nusxada bo'lishi mumkin; bu kutilmagan xatti-harakatga olib keladi."
    }
   ]
  },
  {
   "id": 94,
   "title": "tsup/esbuild va npm'ga publish",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Kutubxonani nashr etish uchun JavaScript, declaration va to'g'ri <code>package.json</code> kerak. <b>tsup</b> esbuild ustida ishlaydi va ESM/CJS hamda <code>.d.ts</code> ni bitta konfiguratsiyada yig'adi. Nashrdan oldin versiyani oshirish, test va build'ni ishga tushirish, keyin <code>npm publish</code> qilish kerak. Scoped paketlar uchun <code>--access public</code> talab qilinadi."
    },
    {
     "type": "code",
     "title": "tsup konfiguratsiyasi",
     "code": "import { defineConfig } from \"tsup\";\n\nconst sozlama = defineConfig({\n  entry: [\"src/index.ts\"],\n  format: [\"esm\", \"cjs\"],\n  dts: true,\n  sourcemap: true,\n  clean: true,\n  external: [\"zod\"],\n});\n\nconsole.log(sozlama.format?.join(\",\"));\nconsole.log(sozlama.dts);\nconsole.log(sozlama.entry);",
     "output": "esm,cjs\ntrue\n[ 'src/index.ts' ]"
    },
    {
     "type": "p",
     "html": "<code>external</code> — bundle'ga kirmaydigan peer yoki runtime bog'liqliklar. <code>dts: true</code> tiplarni yig'adi, <code>clean</code> eski <code>dist</code> ni tozalaydi. Build natijasini <code>package.json</code> dagi <code>exports</code>, <code>main</code>, <code>module</code> va <code>types</code> yo'llariga moslang."
    },
    {
     "type": "code",
     "title": "esbuild bilan API build",
     "code": "import { build } from \"esbuild\";\n\nawait build({\n  entryPoints: [\"src/index.ts\"],\n  bundle: true,\n  format: \"esm\",\n  platform: \"neutral\",\n  outfile: \"dist/index.js\",\n  external: [\"zod\"],\n});\n\nconsole.log(\"build tugadi\");\nconsole.log(\"chiqish: dist/index.js\");",
     "output": "build tugadi\nchiqish: dist/index.js"
    },
    {
     "type": "ul",
     "items": [
      "`prepublishOnly` skriptida test va build'ni majburiy qiling.",
      "`files` maydonida faqat `dist`, `README`, `LICENSE` qoldiring — manba va testlar paketga kirmasin.",
      "Versiyani semver bo'yicha oshiring; git tag va changelog yozing.",
      "`npm publish --dry-run` bilan tarkibni oldindan tekshiring.",
      "Scoped paket uchun `npm publish --access public`; provenance uchun CI'da `--provenance`."
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Nashrdan keyin qaytarib bo'lmaydi",
     "html": "npm'dagi versiyani o'chirish yoki qayta yozish mumkin emas (faqat 72 soat ichida unpublish cheklovi bor). Xato nashr etsangiz, yangi patch versiya chiqaring. Shuning uchun <code>npm pack</code> yoki <code>--dry-run</code> bilan tarkibni avval ko'ring."
    }
   ],
   "quiz": [
    {
     "q": "`tsup` konfiguratsiyasida `external` nimani bildiradi?",
     "options": [
      "Fayllarni o'chirish",
      "Faqat TypeScript fayllari",
      "Bundle'ga kiritilmaydigan bog'liqliklar",
      "Testlarni chiqarib tashlash"
     ],
     "answer": 2,
     "explain": "`external` ro'yxatidagi paketlar bundle'ga kirmaydi; iste'molchi ularni o'zi o'rnatadi (peer yoki runtime dependency)."
    },
    {
     "q": "Scoped paketni ochiq nashr etish uchun qaysi bayroq kerak?",
     "options": [
      "`--access public`",
      "`--private`",
      "`--global`",
      "`--force`"
     ],
     "answer": 0,
     "explain": "`@scope/name` paketlari standart holatda cheklangan bo'lishi mumkin; `--access public` uni ochiq qiladi."
    },
    {
     "q": "Nashrdan oldin tarkibni ko'rish uchun eng xavfsiz buyruq qaysi?",
     "options": [
      "`npm publish`",
      "`npm install`",
      "`npm audit fix`",
      "`npm publish --dry-run`"
     ],
     "answer": 3,
     "explain": "`--dry-run` hech narsa yubormaydi, lekin paketga nima kirishini ko'rsatadi. Xatoni nashrdan oldin topish imkonini beradi."
    }
   ]
  },
  {
   "id": 95,
   "title": "Full-stack loyiha: arxitektura va shared tiplar",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Yakuniy loyiha — \"Noldan Blog\": foydalanuvchi post yaratadi, ularni ko'radi va nashr holatini boshqaradi. Repozitoriy uch qismdan iborat: <code>apps/api</code> (Express + Prisma), <code>apps/web</code> (React + TanStack Query) va <code>packages/shared</code> (Zod sxemalar va API kontraktlari). Shared paket hech qanday ilova kodini import qilmaydi — u eng past qatlam."
    },
    {
     "type": "code",
     "title": "packages/shared/src/contracts.ts",
     "code": "import { z } from \"zod\";\n\nexport const PostSxema = z.object({\n  id: z.number().int(),\n  sarlavha: z.string().min(3),\n  nashr: z.boolean(),\n});\n\nexport type Post = z.infer<typeof PostSxema>;\n\nexport const XatoSxema = z.object({\n  code: z.string(),\n  message: z.string(),\n});\n\nexport type Xato = z.infer<typeof XatoSxema>;\n\nexport type ApiJavob<T> =\n  | { ok: true; data: T }\n  | { ok: false; xato: Xato };\n\nconst namuna = PostSxema.parse({ id: 1, sarlavha: \"TS\", nashr: true });\nconsole.log(Object.keys(PostSxema.shape).join(\",\"));\nconsole.log(namuna.sarlavha);",
     "output": "id,sarlavha,nashr\nTS"
    },
    {
     "type": "p",
     "html": "Backend va frontend bir xil <code>Post</code> tipini ishlatadi, lekin haqiqiy validatsiya faqat sxemada. API javobi <code>ApiJavob&lt;T&gt;</code> bilan ifodalanadi: muvaffaqiyat va xato shakli aniq. Bu kontraktni o'zgartirish ikkala tomonga bir vaqtda ta'sir qiladi, shuning uchun versiyalash va kelishuv muhim."
    },
    {
     "type": "code",
     "title": "natijani xavfsiz ochish",
     "code": "type Xato = { code: string; message: string };\ntype ApiJavob<T> =\n  | { ok: true; data: T }\n  | { ok: false; xato: Xato };\n\ntype Post = { id: number; sarlavha: string; nashr: boolean };\n\nfunction och(javob: ApiJavob<Post>): Post {\n  if (!javob.ok) {\n    throw new Error(javob.xato.code + \": \" + javob.xato.message);\n  }\n  return javob.data;\n}\n\nconst yaxshi: ApiJavob<Post> = {\n  ok: true,\n  data: { id: 1, sarlavha: \"Birinchi post\", nashr: false },\n};\n\nconsole.log(och(yaxshi).sarlavha);\nconsole.log(yaxshi.ok);",
     "output": "Birinchi post\ntrue"
    },
    {
     "type": "table",
     "head": [
      "Qatlam",
      "Mas'uliyat",
      "Bog'liqlik"
     ],
     "rows": [
      [
       "shared",
       "Sxema, DTO, API kontrakti",
       "Hech kimga"
      ],
      [
       "api",
       "HTTP, baza, biznes qoidalar",
       "shared"
      ],
      [
       "web",
       "UI, forma, kesh",
       "shared"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Kontraktni bir joyda saqlang",
     "html": "Agar frontend o'z DTO'sini, backend boshqasini yozsa, ular vaqt o'tib ajraladi. Shared sxema yagona manba bo'ladi: o'zgarish ikkala tomonda kompilyatsiya xatosini beradi. Bu monorepo'ning eng katta amaliy foydasi."
    }
   ],
   "quiz": [
    {
     "q": "Shared paket qaysi qatlamga bog'liq bo'lishi kerak?",
     "options": [
      "Faqat web'ga",
      "Hech qaysi ilova qatlamiga",
      "Faqat api'ga",
      "Ikkala ilovaga bir vaqtda"
     ],
     "answer": 1,
     "explain": "Shared eng past qatlam: u ilovalar haqida bilmasligi kerak, aks holda tsikl va noto'g'ri bog'liqlik paydo bo'ladi."
    },
    {
     "q": "API javobini `ApiJavob<T>` union'i bilan modellashtirishning foydasi nima?",
     "options": [
      "HTTP status avtomatik tanlanadi",
      "JSON hajmi kamayadi",
      "Muvaffaqiyat va xato shakllari tipda ajraladi",
      "Baza sxemasi avtomatik yangilanadi"
     ],
     "answer": 2,
     "explain": "Diskriminant union `ok` maydoni orqali ikkala holatni xavfsiz tekshirish imkonini beradi."
    },
    {
     "q": "Nega shared sxemani backend va frontendda birga ishlatish muhim?",
     "options": [
      "Shartnoma yagona manbadan kelib, ikki tomon mosligi kompilyatorda tekshiriladi",
      "Kod hajmi kamayadi, lekin tip xavfsizligi yo'qoladi",
      "Frontend bazaga to'g'ridan-to'g'ri ulanadi",
      "Zod faqat brauzerda ishlaydi"
     ],
     "answer": 0,
     "explain": "Yagona sxema va undan olingan tiplar kontraktning ajralib ketishini oldini oladi."
    }
   ]
  },
  {
   "id": 96,
   "title": "Full-stack loyiha: Express + Prisma backend",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Backend qatlamida Prisma sxemasi jadval tuzilishini, Zod esa kiruvchi ma'lumotni boshqaradi. Prisma generatsiya qilgan tiplar so'rov natijasini aniq qiladi. Muhim qoida: tashqi kirishni route'da parse qiling, keyin xizmatga uzating; bazadan chiqqan maxfiy maydonlarni DTO'da olib tashlang."
    },
    {
     "type": "code",
     "title": "baza yozuvidan DTO",
     "code": "type PostYozuv = {\n  id: number;\n  sarlavha: string;\n  matn: string;\n  nashr: boolean;\n  yaratilgan: Date;\n};\n\ntype PostDto = { id: number; sarlavha: string; sana: string };\n\nfunction dto(yozuv: PostYozuv): PostDto {\n  return {\n    id: yozuv.id,\n    sarlavha: yozuv.sarlavha,\n    sana: yozuv.yaratilgan.toISOString().slice(0, 10),\n  };\n}\n\nconst yozuv: PostYozuv = {\n  id: 1,\n  sarlavha: \"TS asoslari\",\n  matn: \"...\",\n  nashr: true,\n  yaratilgan: new Date(\"2026-10-23T10:00:00Z\"),\n};\n\nconsole.log(JSON.stringify(dto(yozuv)));",
     "output": "{\"id\":1,\"sarlavha\":\"TS asoslari\",\"sana\":\"2026-10-23\"}"
    },
    {
     "type": "p",
     "html": "Prisma'da bu yozuv <code>Post</code> modeliga mos keladi; <code>prisma.post.findMany()</code> natijasi shu tipda bo'ladi. <code>matn</code> kabi katta yoki maxfiy maydonlarni ro'yxat DTO'siga qo'shmaslik trafikni kamaytiradi. Har bir route javobi qanday tip qaytarishini aniq belgilang."
    },
    {
     "type": "code",
     "title": "Zod bilan yaratish xizmati",
     "code": "import { z } from \"zod\";\n\nconst YaratishSxema = z.object({\n  sarlavha: z.string().min(3),\n  matn: z.string().min(1),\n});\n\ntype Post = { id: number; sarlavha: string; matn: string; nashr: boolean };\n\nasync function postYarat(body: unknown): Promise<Post> {\n  const data = YaratishSxema.parse(body);\n  return { id: 1, ...data, nashr: false };\n}\n\npostYarat({ sarlavha: \"Yangi\", matn: \"Matn\" }).then((p) => {\n  console.log(p.id, p.sarlavha, p.nashr);\n});",
     "output": "1 Yangi false"
    },
    {
     "type": "ul",
     "items": [
      "Route: autentifikatsiya → Zod parse → xizmat → DTO javob.",
      "Prisma tranzaksiyasi bir nechta yozuvni atomar bajarish uchun ishlatiladi.",
      "Migratsiyalarni deploydan oldin, orqaga mos shaklda qo'llang.",
      "Xatoni markaziy handler'ga uzating; foydalanuvchiga stack trace ko'rsatmang."
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Prisma tiplari — kafolat emas",
     "html": "Prisma natija tipini baza sxemasidan generatsiya qiladi, lekin ish vaqtidagi ma'lumot baribir noto'g'ri bo'lishi mumkin (qo'lda o'zgartirilgan baza, migratsiya farqi). Chegarada validatsiya va testlar bu bo'shliqni yopadi."
    }
   ],
   "quiz": [
    {
     "q": "Nega bazadan chiqqan yozuvni to'g'ridan-to'g'ri javobga qaytarmaslik kerak?",
     "options": [
      "Prisma buni taqiqlaydi",
      "JSON'ga aylantirib bo'lmaydi",
      "TypeScript xato beradi",
      "Ortiqcha yoki maxfiy maydonlar tashqariga chiqishi mumkin"
     ],
     "answer": 3,
     "explain": "DTO orqali faqat kerakli maydonlar tanlanadi; parol hash'i, ichki izohlar kabi ma'lumotlar javobga tushmaydi."
    },
    {
     "q": "Route'da kiruvchi `req.body` bilan birinchi navbatda nima qilinadi?",
     "options": [
      "To'g'ridan-to'g'ri bazaga yoziladi",
      "Zod sxemasi bilan parse qilinadi",
      "JSON.stringify qilinadi",
      "Logga to'liq yoziladi"
     ],
     "answer": 1,
     "explain": "Tashqi ma'lumot `unknown` deb qaraladi; sxema tekshiruvidan o'tgandan keyingina tipli xizmatga uzatiladi."
    },
    {
     "q": "Bir nechta yozuvni atomar bajarish uchun Prisma'da nima ishlatiladi?",
     "options": [
      "`$connect`",
      "`$disconnect`",
      "`$transaction`",
      "`findFirst`"
     ],
     "answer": 2,
     "explain": "`$transaction` operatsiyalarni bir tranzaksiyada bajaradi: birortasi xato bo'lsa, hammasi qaytariladi."
    }
   ]
  },
  {
   "id": 97,
   "title": "Full-stack loyiha: React + TanStack Query frontend",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Frontend server holatini TanStack Query bilan boshqaradi: kesh, qayta so'rov, xato va yuklanish holatlari avtomatik. Query kaliti barqaror va serializatsiya qilinadigan bo'lishi kerak. Mutatsiyadan keyin tegishli kalitni invalidatsiya qilish ma'lumotni yangilaydi; optimistik yangilash esa UI'ni darhol javob beradigan qiladi."
    },
    {
     "type": "code",
     "title": "QueryClient bilan tipli so'rov",
     "code": "import { QueryClient } from \"@tanstack/react-query\";\n\ntype Post = { id: number; sarlavha: string };\n\nconst client = new QueryClient();\n\nasync function postlarOl(): Promise<Post[]> {\n  console.log(\"server so'rovi\");\n  return [{ id: 1, sarlavha: \"TS\" }];\n}\n\nclient\n  .fetchQuery({ queryKey: [\"posts\"], queryFn: postlarOl })\n  .then((data) => console.log(data.length));",
     "output": "server so'rovi\n1"
    },
    {
     "type": "p",
     "html": "Komponentda bu sozlama <code>useQuery({ queryKey: [\"posts\"], queryFn: postlarOl })</code> ko'rinishida ishlatiladi. <code>isPending</code>, <code>error</code> va <code>data</code> holatlari aniq tipga ega. <code>staleTime</code> ma'lumot qancha vaqt yangi hisoblanishini, <code>gcTime</code> esa keshda qancha qolishini belgilaydi."
    },
    {
     "type": "code",
     "title": "mutatsiyadan keyin kesh",
     "code": "import { QueryClient } from \"@tanstack/react-query\";\n\ntype Post = { id: number; sarlavha: string };\nconst client = new QueryClient();\nconst kalit = [\"posts\"] as const;\n\nclient.setQueryData<Post[]>(kalit, [{ id: 1, sarlavha: \"Yangi\" }]);\nconst kesh = client.getQueryData<Post[]>(kalit);\n\nconsole.log(kesh?.[0].sarlavha);\nconsole.log(client.getQueryCache().getAll().length);\n\nclient.removeQueries({ queryKey: kalit });\nconsole.log(client.getQueryCache().getAll().length);",
     "output": "Yangi\n1\n0"
    },
    {
     "type": "table",
     "head": [
      "API",
      "Vazifasi"
     ],
     "rows": [
      [
       "`useQuery`",
       "Ma'lumot o'qish va keshni kuzatish"
      ],
      [
       "`useMutation`",
       "Yozish amali va holat"
      ],
      [
       "`invalidateQueries`",
       "Kalitni eskirgan deb belgilash"
      ],
      [
       "`setQueryData`",
       "Keshni qo'lda yangilash"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "info",
     "title": "Optimistik yangilash",
     "html": "Mutatsiya boshlanganda keshni darhol yangilang, xato bo'lsa oldingi holatni qaytaring (<code>onError</code> da <code>setQueryData</code>). Bu seziladigan tezlikni oshiradi, lekin rollback mantiqini sinchiklab yozish kerak. Har doim server javobi bilan yakuniy holatni tasdiqlang."
    }
   ],
   "quiz": [
    {
     "q": "TanStack Query'da query kaliti qanday bo'lishi kerak?",
     "options": [
      "Barqaror va serializatsiya qilinadigan massiv",
      "Tasodifiy UUID",
      "Faqat funksiya",
      "Faqat Date obyekti"
     ],
     "answer": 0,
     "explain": "Kalit keshni identifikatsiya qiladi. U barqaror va JSON-ga o'xshash bo'lishi kerak, aks holda kesh noto'g'ri ishlaydi."
    },
    {
     "q": "Mutatsiyadan keyin ro'yxatni yangilashning odatiy usuli qaysi?",
     "options": [
      "Sahifani to'liq reload qilish",
      "`localStorage.clear()`",
      "`useEffect` ni o'chirish",
      "`invalidateQueries({ queryKey: [\"posts\"] })`"
     ],
     "answer": 3,
     "explain": "Invalidatsiya kalitni eskirgan deb belgilaydi va faol query'ni qayta so'raydi."
    },
    {
     "q": "Optimistik yangilashda xato bo'lsa nima qilish kerak?",
     "options": [
      "Keshni o'zgartirmasdan qoldirish",
      "Oldingi kesh holatini qaytarish (rollback)",
      "Foydalanuvchini bloklash",
      "Serverni qayta ishga tushirish"
     ],
     "answer": 1,
     "explain": "Optimistik o'zgarish server tasdiqlamasa, oldingi holatga qaytish kerak; aks holda UI haqiqatga mos kelmaydi."
    }
   ]
  },
  {
   "id": 98,
   "title": "Full-stack loyiha: deploy va monitoring",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Deploy — kodni nusxalash emas, nazorat qilinadigan jarayon. Har bir reliz versiyalangan bo'lishi, migratsiyalar orqaga mos bo'lishi va sog'liq tekshiruvlaridan o'tishi kerak. Monitoring xatolar, kechikish va biznes metrikalarni kuzatadi; yomon relizni qaytarish uchun oldindan reja bo'lishi shart."
    },
    {
     "type": "code",
     "title": "relizni tekshirish",
     "code": "type Muhit = \"staging\" | \"production\";\n\ntype Reliz = {\n  muhit: Muhit;\n  versiya: string;\n  migratsiya: boolean;\n};\n\nfunction tekshir(r: Reliz): string[] {\n  const xatolar: string[] = [];\n  if (!/^\\d+\\.\\d+\\.\\d+$/.test(r.versiya)) {\n    xatolar.push(\"versiya semver emas\");\n  }\n  if (r.muhit === \"production\" && !r.migratsiya) {\n    xatolar.push(\"migratsiya yo'q\");\n  }\n  return xatolar;\n}\n\nconsole.log(tekshir({ muhit: \"production\", versiya: \"1.2.0\", migratsiya: true }).length);\nconsole.log(\n  tekshir({ muhit: \"production\", versiya: \"v1\", migratsiya: false }).join(\"; \"),\n);",
     "output": "0\nversiya semver emas; migratsiya yo'q"
    },
    {
     "type": "p",
     "html": "Migratsiya \"expand-contract\" usulida bajariladi: avval yangi ustun qo'shiladi, kod ikkala shaklni qo'llab-quvvatlaydi, keyin eski ustun olib tashlanadi. Bu bir vaqtda ishlayotgan eski va yangi instansiyalarni buzmaydi. Deploydan oldin zaxira nusxa va qaytarish rejasi tayyor bo'lsin."
    },
    {
     "type": "code",
     "title": "metrikaga qarab qaror",
     "code": "type Metrika = { xatolar: number; kechikishMs: number };\n\ntype Qaror = \"yaxshi\" | \"ogohlantirish\" | \"rollback\";\n\nfunction bahola(m: Metrika): Qaror {\n  if (m.xatolar > 0.05 || m.kechikishMs > 1000) return \"rollback\";\n  if (m.xatolar > 0.01 || m.kechikishMs > 500) return \"ogohlantirish\";\n  return \"yaxshi\";\n}\n\nconsole.log(bahola({ xatolar: 0.02, kechikishMs: 600 }));\nconsole.log(bahola({ xatolar: 0.08, kechikishMs: 300 }));\nconsole.log(bahola({ xatolar: 0.001, kechikishMs: 120 }));",
     "output": "ogohlantirish\nrollback\nyaxshi"
    },
    {
     "type": "ul",
     "items": [
      "Har relizda versiya, commit va migratsiya holatini yozib boring.",
      "Readiness probe o'tmaguncha trafik yubormang.",
      "Xatolar va kechikish bo'yicha alert chegaralarini oldindan belgilang.",
      "Rollback — oldingi image'ga qaytish; migratsiya orqaga mos bo'lsa xavfsiz.",
      "Sir va kalitlarni image ichiga emas, secrets manager orqali bering."
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Kuzatuvsiz deploy qilmang",
     "html": "Relizdan keyin 10–30 daqiqa davomida xato darajasi, kechikish va asosiy biznes oqimlarini kuzating. Muammo bo'lsa darhol qaytaring; tuzatishni keyingi relizga qoldirish xavfli. Postmortem yozib, sababni tuzating."
    }
   ],
   "quiz": [
    {
     "q": "Expand-contract migratsiya usulining mohiyati nima?",
     "options": [
      "Barcha ustunlarni bir zumda o'chirish",
      "Migratsiyani butunlay o'tkazib yuborish",
      "Avval qo'shish, moslikni saqlash, keyin eskisini olib tashlash",
      "Faqat stagingda ishlash"
     ],
     "answer": 2,
     "explain": "Bu usul eski va yangi ilova versiyalari bir vaqtda ishlaganda sxema mosligini saqlaydi."
    },
    {
     "q": "Deploydan keyin xatolar keskin oshsa birinchi qadam nima?",
     "options": [
      "Oldingi barqaror versiyaga qaytarish",
      "Yangi funksiya qo'shish",
      "Barcha loglarni o'chirish",
      "Bazani o'chirish"
     ],
     "answer": 0,
     "explain": "Rollback foydalanuvchi ta'sirini kamaytiradi; sabab keyin xotirjam tekshiriladi."
    },
    {
     "q": "Readiness probe nima uchun kerak?",
     "options": [
      "Kodni kompilyatsiya qilish uchun",
      "Git tarixini tekshirish uchun",
      "Faqat CPUni o'lchash uchun",
      "Instansiya trafik qabul qilishga tayyorligini aniqlash uchun"
     ],
     "answer": 3,
     "explain": "Tayyor bo'lmagan instansiyaga trafik yuborilmasa, deploy paytida xatolar kamayadi."
    }
   ]
  },
  {
   "id": 99,
   "title": "Intervyu savollari va yakuniy takrorlash",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Yakuniy darsda eng ko'p so'raladigan mavzularni takrorlaymiz: structural typing va nominal brendlar, conditional/mapped tiplar, <code>unknown</code> va <code>never</code>, generik cheklovlar, declaration merging, dekoratorlar, monorepo va paket nashri. Intervyuda muhim narsa — atamani aytish emas, misol bilan tushuntirish va cheklovni tan olish."
    },
    {
     "type": "code",
     "title": "DeepPartial va cheklov",
     "code": "type DeepPartial<T> = T extends object\n  ? { [K in keyof T]?: DeepPartial<T[K]> }\n  : T;\n\ntype Konfig = {\n  server: { port: number; host: string };\n  debug: boolean;\n};\n\nconst k: DeepPartial<Konfig> = { server: { port: 3000 } };\nconsole.log(k.server?.port);\nconsole.log(JSON.stringify(k));\nconsole.log(k.debug === undefined);",
     "output": "3000\n{\"server\":{\"port\":3000}}\ntrue"
    },
    {
     "type": "p",
     "html": "<code>DeepPartial</code> massiv va funksiyalarni ham obyekt deb qaraydi; production kutubxonada ular uchun alohida tarmoq qo'shiladi. Intervyuda shu cheklovni aytish kuchli javob hisoblanadi: \"ishlaydi, lekin massiv/funksiya holatida aniqlashtirish kerak\". Type-level yechimlarda cheksiz rekursiya va unumdorlik ham muhim."
    },
    {
     "type": "code",
     "title": "tipli event emitter",
     "code": "type Events = {\n  xabar: { matn: string };\n  yopildi: void;\n};\n\nclass Emitter<M extends Record<string, unknown>> {\n  private handlers: { [K in keyof M]?: Array<(p: M[K]) => void> } = {};\n\n  on<K extends keyof M>(nom: K, cb: (p: M[K]) => void): void {\n    (this.handlers[nom] ??= []).push(cb);\n  }\n\n  emit<K extends keyof M>(nom: K, payload: M[K]): void {\n    this.handlers[nom]?.forEach((cb) => cb(payload));\n  }\n}\n\nconst e = new Emitter<Events>();\ne.on(\"xabar\", (p) => console.log(\"xabar:\", p.matn));\ne.emit(\"xabar\", { matn: \"salom\" });\ne.emit(\"yopildi\", undefined);",
     "output": "xabar: salom"
    },
    {
     "type": "table",
     "head": [
      "Savol",
      "Qisqa javob"
     ],
     "rows": [
      [
       "interface vs type",
       "Interface kengaytiriladi va merge bo'ladi; type union, tuple va mapped bilan kuchliroq"
      ],
      [
       "unknown vs any",
       "unknown xavfsiz: ishlatishdan oldin toraytirish kerak; any tekshiruvni o'chiradi"
      ],
      [
       "never qachon",
       "Imkonsiz qiymat, exhaustiveness va filtrlovchi conditional natijalari"
      ],
      [
       "satisfies",
       "Qiymatni tekshiradi, lekin xulosa tipini kengaytirmaydi"
      ],
      [
       "covariance",
       "Massiv va qaytish tipi kovariant; parametr kontravariant"
      ],
      [
       "branded type",
       "Strukturaviy tenglikni buzib, nominal farq yaratadi"
      ],
      [
       "declaration merging",
       "Interfeys/namespace/modulni kengaytiradi"
      ],
      [
       "project references",
       "`tsc -b` bilan bog'liq loyihalarni inkremental quradi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "success",
     "title": "Kurs yakuni",
     "html": "Endi sizda 99 darslik poydevor bor: tildan tortib monorepo, React, Next.js, testlash va kutubxona nashrigacha. Keyingi qadam — kichik real loyiha yozish va qarorlaringizni yozma asoslash. Intervyuda aynan shu amaliy tajriba va savdo qobiliyati ajralib turadi."
    }
   ],
   "quiz": [
    {
     "q": "`unknown` tipidagi qiymat bilan ishlashning to'g'ri yo'li qaysi?",
     "options": [
      "`as any` qilib ishlatish",
      "Type guard yoki sxema bilan toraytirib, keyin ishlatish",
      "To'g'ridan-to'g'ri metod chaqirish",
      "Uni e'tiborsiz qoldirish"
     ],
     "answer": 1,
     "explain": "`unknown` barcha qiymatlarni qabul qiladi, lekin tekshiruvsiz ishlatishga ruxsat bermaydi. Guard yoki parse orqali toraytiriladi."
    },
    {
     "q": "`satisfies` operatorining `as` dan asosiy farqi nima?",
     "options": [
      "`satisfies` faqat massivlarda ishlaydi",
      "`as` runtime tekshiruv qiladi",
      "`satisfies` qiymatni tekshiradi, lekin xulosa tipini o'zgartirmaydi",
      "Ikkalasi bir xil"
     ],
     "answer": 2,
     "explain": "`satisfies` moslikni tekshiradi, ammo qiymatning aniqroq turini saqlaydi; `as` esa tipni majburan o'zgartiradi."
    },
    {
     "q": "Intervyuda `interface` va `type` farqini qanday tushuntirish eng to'g'ri?",
     "options": [
      "Interface merge va implements uchun qulay; type union, tuple va mapped tiplarni ifodalaydi",
      "Faqat interface ishlatiladi",
      "Type fayllarda umuman ishlamaydi",
      "Farqi yo'q, ikkalasi bir xil"
     ],
     "answer": 0,
     "explain": "Ikkalasi ham obyekt shaklini beradi, lekin imkoniyatlari va kengaytirish usullari farq qiladi; tanlov ehtiyojga bog'liq."
    }
   ]
  }
 ],
 "examLesson": {
  "id": 100,
  "title": "Yakuniy imtihon",
  "minutes": 25,
  "isExam": true,
  "blocks": [
   {
    "type": "p",
    "html": "Bu yakuniy imtihon butun TypeScript kursini — 99 ta o'quv darsini — qamraydi. Jami <b>12 savol</b>, har birida bitta to'g'ri javob bor. O'tish uchun kamida <b>9 ta</b> to'g'ri javob kerak (75%). Savollar tip tizimi, validatsiya, arxitektura, backend, frontend va build mavzularidan tanlangan."
   },
   {
    "type": "ul",
    "items": [
     "Mapped, conditional va template literal tiplar hamda <code>infer</code>.",
     "Variantlik, branded types va Zod bilan chegara validatsiyasi.",
     "Dekoratorlar, DI va monorepo konfiguratsiyasi.",
     "Express, React, Next.js, testlash va paket nashri."
    ]
   },
   {
    "type": "table",
    "head": [
     "Ko'rsatkich",
     "Qiymat"
    ],
    "rows": [
     [
      "Savollar soni",
      "12"
     ],
     [
      "To'g'ri javob uchun",
      "1 ball"
     ],
     [
      "O'tish bali",
      "9 / 12"
     ],
     [
      "Tavsiya etilgan vaqt",
      "25 daqiqa"
     ]
    ]
   },
   {
    "type": "note",
    "variant": "info",
    "title": "Qanday tayyorgarlik ko'rish",
    "html": "Xato qilgan mavzularingizga qaytib, tegishli darsning kod misollarini o'zingiz qayta yozib ko'ring. Intervyu darsidagi jadval va yakuniy loyiha bo'limlari eng ko'p uchraydigan savollarni qamraydi. Shoshilmang: har bir variantni oxirigacha o'qing."
   }
  ],
  "quiz": []
 },
 "exam": {
  "passScore": 9,
  "total": 12,
  "questions": [
   {
    "q": "`type Ochiq<T> = { [K in keyof T as K extends \"parol\" ? never : K]: T[K] }` natijasida `parol` maydoni bilan nima bo'ladi?",
    "options": [
     "`never` tipida saqlanadi",
     "Natijaviy tipdan olib tashlanadi",
     "Ixtiyoriy maydonga aylanadi",
     "`string` tipiga kengayadi"
    ],
    "answer": 1,
    "explain": "`as` bandida `never` qaytargan kalit mapped type natijasiga qo'shilmaydi; shu usulda maydon filtrlash amalga oshiriladi."
   },
   {
    "q": "`type Args<T> = T extends (...args: infer A) => unknown ? A : never;` uchun `Args<(a: string, b: number) => void>` qanday tip beradi?",
    "options": [
     "`string | number`",
     "`(a: string, b: number) => void`",
     "`never`",
     "`[string, number]`"
    ],
    "answer": 3,
    "explain": "`infer A` funksiya parametrlari tuple'ini ushlaydi; natija `[string, number]` bo'ladi."
   },
   {
    "q": "`strictFunctionTypes` yoqilganda `(h: Hayvon) => void` tipidagi funksiyani `(m: Mushuk) => void` o'rniga qo'yish mumkinmi?",
    "options": [
     "Ha, parametr kontravariantligi tufayli",
     "Yo'q, chunki parametrlar invariant",
     "Ha, chunki massivlar kovariant",
     "Faqat `any` bilan"
    ],
    "answer": 0,
    "explain": "Kengroq parametr qabul qiluvchi funksiya torroq talab o'rnida xavfsiz ishlaydi. Bu parametr kontravariantligi."
   },
   {
    "q": "Nega `type UserId = string & { readonly __brand: \"UserId\" }` tipiga oddiy `\"u_1\"` satrini to'g'ridan-to'g'ri tayinlab bo'lmaydi?",
    "options": [
     "Chunki string literal ish vaqtida o'chadi",
     "Chunki `readonly` tayinlashni taqiqlaydi",
     "Chunki brend xossasi yetishmaydi",
     "Chunki `UserId` runtime'da mavjud emas"
    ],
    "answer": 2,
    "explain": "Intersection brend xossasini talab qiladi; oddiy satrda u yo'q. Shu sababli faqat tekshiruvchi konstruktor orqali yaratiladi."
   },
   {
    "q": "`const S = z.string().transform((s) => new Date(s));` uchun xom kirishni qabul qiluvchi funksiya parametri qaysi tipda bo'lishi kerak?",
    "options": [
     "`z.output<typeof S>` — `Date`",
     "`z.input<typeof S>` — `string`",
     "`Date`",
     "`unknown`"
    ],
    "answer": 1,
    "explain": "Transformatsiyadan oldin qiymat satr. `z.input` xom kirish tipini, `z.output` esa natija tipini beradi."
   },
   {
    "q": "Legacy parametr dekoratorlaridan foydalanish uchun `tsconfig.json` da qaysi bayroq yoqiladi?",
    "options": [
     "`emitDecoratorMetadata: false`",
     "`verbatimModuleSyntax: true`",
     "`isolatedModules: true`",
     "`experimentalDecorators: true`"
    ],
    "answer": 3,
    "explain": "Parametr dekoratorlari TC39 standartida yo'q; ular legacy rejimda, `experimentalDecorators` bilan ishlaydi."
   },
   {
    "q": "Monorepo'da paketlar bog'liqligini hisobga olib, faqat eskirgan loyihalarni qayta qurish uchun qaysi buyruq ishlatiladi?",
    "options": [
     "`tsc -b`",
     "`tsc --noEmit`",
     "`tsc --init`",
     "`tsc --watch`"
    ],
    "answer": 0,
    "explain": "Build mode (`tsc -b`) project references grafigi bo'ylab yuradi va incremental holatga qarab kerakli loyihalarni quradi."
   },
   {
    "q": "Express 4 da async route ichida yuz bergan rad etishni markaziy xato handler'ga uzatishning ishonchli usuli qaysi?",
    "options": [
     "Bo'sh `try {} catch {}` bloki",
     "`process.exit(1)` chaqiruvi",
     "`fn(req, res).catch(next)` wrapper",
     "`res.send(error)`"
    ],
    "answer": 2,
    "explain": "Express 4 Promise'ni kuzatmaydi. Wrapper rad etishni `next` ga uzatadi va xato middleware ishga tushadi."
   },
   {
    "q": "Server komponentdan client komponentga props orqali qanday ma'lumot uzatish mumkin?",
    "options": [
     "Har qanday class instansiyasi",
     "Serializatsiya qilinadigan qiymatlar",
     "Funksiya va closure",
     "Ma'lumot bazasi ulanishi"
    ],
    "answer": 1,
    "explain": "Chegara orqali faqat serializatsiya qilinadigan props o'tadi; funksiya, class instansiyasi va ulanish uzatilmaydi."
   },
   {
    "q": "`package.json` dagi `exports` xaritasida `\".\"` kaliti nimani bildiradi?",
    "options": [
     "Faqat test papkasini",
     "Ichki fayllarni yopishni",
     "TypeScript versiyasini",
     "Paketning asosiy kirish nuqtasini"
    ],
    "answer": 3,
    "explain": "`\".\"` — paket nomi bilan import qilinganda ishlatiladigan asosiy subpath. Qolgan kalitlar qo'shimcha subpath'lardir."
   },
   {
    "q": "Dual ESM/CJS paketda CommonJS iste'molchilar uchun qaysi fayl kengaytmasi odatda ishlatiladi?",
    "options": [
     "`.cjs`",
     "`.mjs`",
     "`.d.ts`",
     "`.jsx`"
    ],
    "answer": 0,
    "explain": "`.cjs` fayl `package.json` dagi `type` dan qat'i nazar CommonJS bo'lib qoladi; ESM uchun `.mjs` yoki `type: module` ishlatiladi."
   },
   {
    "q": "Integratsion testlarda ma'lumotlar bazasini izolyatsiya qilishning eng ishonchli usuli qaysi?",
    "options": [
     "Production bazasidan foydalanish",
     "Testlarni tartib bilan ishga tushirish",
     "Har testni tranzaksiyada bajarib, oxirida qaytarish",
     "Bazani umuman tekshirmaslik"
    ],
    "answer": 2,
    "explain": "Tranzaksiyani qaytarish har testdan keyin bazani toza holatda qoldiradi va testlar bir-biriga ta'sir qilmaydi."
   }
  ]
 },
 "hours": "~40 soat",
 "testCount": 297,
 "heroDesc": "TypeScript kursining ikkinchi jildi: 50 ta ilg'or dars, 150 test va 12 savollik yakuniy imtihon. Mapped va conditional tiplar, Zod, dekoratorlar, monorepo, Express, React, Next.js, testlash, performance va kutubxona nashri — full-stack loyiha bilan mustahkamlanadi.",
 "metaDescription": "TypeScript ilg'or kursi: 50 yangi dars, 150 test va 12 savollik imtihon. Conditional tiplar, Zod, dekoratorlar, monorepo, Express, React, Next.js, testlash va npm publish o'zbek tilida."
};
})();
