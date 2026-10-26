/* Noldan — per-snippet Python glossary: explains every construct used in a code example */
(function () {
  "use strict";

  const ICON_BOOK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>';
  const ICON_CHEVRON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

  const TERMS = [
    /* ---------------------------------------------------------------
       Funksiyalar va tayyor vositalar
       --------------------------------------------------------------- */
    {
      id: "print",
      label: "print()",
      cat: "func",
      name: "Chop etish funksiyasi",
      desc: "Ekranga ma'lumot chiqaradi. Qavs ichidagi matn, son yoki o'zgaruvchilar ketma-ket chiqadi: <code>print(\"Salom\")</code>. Bir nechta qiymatni vergul bilan bersangiz, orasiga bo'sh joy qo'yiladi.",
      word: "print",
      call: true,
    },
    {
      id: "input",
      label: "input()",
      cat: "func",
      name: "Kiritish funksiyasi",
      desc: "Foydalanuvchidan matn so'raydi va uni <b>matn (string)</b> ko'rinishida qaytaradi. Son kerak bo'lsa, atrofini <code>int()</code> yoki <code>float()</code> bilan o'rang: <code>int(input(\"Yosh: \"))</code>.",
      word: "input",
      call: true,
    },
    {
      id: "int",
      label: "int()",
      cat: "func",
      name: "Butun songa aylantirish",
      desc: "Matn yoki kasr sonni butun songa aylantiradi: <code>int(\"25\")</code> → 25. Kasr qismi tashlab yuboriladi: <code>int(9.99)</code> → 9.",
      word: "int",
      call: true,
    },
    {
      id: "float",
      label: "float()",
      cat: "func",
      name: "Kasr songa aylantirish",
      desc: "Matn yoki butun sonni kasr songa aylantiradi: <code>float(\"3.14\")</code> → 3.14. Kasr qismi nuqta bilan yoziladi, vergul bilan emas.",
      word: "float",
      call: true,
    },
    {
      id: "str",
      label: "str()",
      cat: "func",
      name: "Matnga aylantirish",
      desc: "Son yoki boshqa qiymatni matnga aylantiradi: <code>str(100)</code> → <code>\"100\"</code>. Matn bilan sonni <code>+</code> bilan ulashdan oldin foydali.",
      word: "str",
      call: true,
    },
    {
      id: "bool",
      label: "bool()",
      cat: "func",
      name: "Mantiqiy qiymatga aylantirish",
      desc: "Qiymatni <code>True</code> yoki <code>False</code> ga aylantiradi. <code>0</code>, bo'sh matn <code>\"\"</code> va <code>None</code> → <code>False</code>; qolganlari → <code>True</code>. <code>True</code> hisobda 1, <code>False</code> 0 kabi ishlaydi.",
      word: "bool",
      call: true,
    },
    {
      id: "type",
      label: "type()",
      cat: "func",
      name: "Turini aniqlash",
      desc: "Qiymat qaysi turga tegishli ekanini aytadi: butun son, kasr son, matn yoki mantiqiy qiymat. Masalan, <code>type(15)</code> butun son turini qaytaradi.",
      word: "type",
      call: true,
    },
    {
      id: "len",
      label: "len()",
      cat: "func",
      name: "Uzunlikni hisoblash",
      desc: "Matndagi belgilar, ro'yxatdagi elementlar yoki lug'atdagi kalitlar sonini qaytaradi: <code>len(\"Python\")</code> → 6.",
      word: "len",
      call: true,
    },
    {
      id: "round",
      label: "round()",
      cat: "func",
      name: "Yaxlitlash",
      desc: "Sonni berilgan xona sonigacha yaxlitlaydi: <code>round(3.14159, 2)</code> → 3.14. Ikkinchi argument berilmasa, butun songa yaxlitlaydi.",
      word: "round",
      call: true,
    },
    {
      id: "abs",
      label: "abs()",
      cat: "func",
      name: "Modul (mutlaq qiymat)",
      desc: "Sonning ishorasiz qiymatini qaytaradi: <code>abs(-7)</code> → 7.",
      word: "abs",
      call: true,
    },
    {
      id: "max",
      label: "max()",
      cat: "func",
      name: "Eng katta qiymat",
      desc: "Argumentlar yoki ro'yxat ichidan eng katta qiymatni topadi: <code>max(4, 9, 2)</code> → 9.",
      word: "max",
      call: true,
    },
    {
      id: "min",
      label: "min()",
      cat: "func",
      name: "Eng kichik qiymat",
      desc: "Argumentlar yoki ro'yxat ichidan eng kichik qiymatni topadi: <code>min(4, 9, 2)</code> → 2.",
      word: "min",
      call: true,
    },
    {
      id: "pow",
      label: "pow()",
      cat: "func",
      name: "Darajaga ko'tarish",
      desc: "Birinchi sonni ikkinchi son darajasiga ko'taradi: <code>pow(2, 5)</code> → 32. Xuddi <code>2 ** 5</code> kabi.",
      word: "pow",
      call: true,
    },
    {
      id: "sum",
      label: "sum()",
      cat: "func",
      name: "Yig'indini hisoblash",
      desc: "Ro'yxat yoki to'plamdagi sonlarni qo'shib, yig'indisini qaytaradi.",
      word: "sum",
      call: true,
    },
    {
      id: "sorted",
      label: "sorted()",
      cat: "func",
      name: "Tartiblangan nusxa",
      desc: "Yangi tartiblangan ro'yxat qaytaradi; asl ro'yxat o'zgarmaydi. <code>reverse=True</code> bersangiz, teskari (kattadan kichikka) tartiblaydi.",
      word: "sorted",
      call: true,
    },
    {
      id: "range",
      label: "range()",
      cat: "func",
      name: "Sonlar ketma-ketligi",
      desc: "Tsikl uchun sonlar ketma-ketligini yaratadi. <code>range(5)</code> → 0, 1, 2, 3, 4. <code>range(1, 10, 2)</code> — 1 dan boshlab, har safar 2 qo'shib boradi. Oxirgi son ketma-ketlikka <b>kirmaydi</b>.",
      word: "range",
      call: true,
    },
    {
      id: "list",
      label: "list()",
      cat: "func",
      name: "Ro'yxatga aylantirish",
      desc: "Boshqa ketma-ketlikni (masalan, lug'at kalitlarini) oddiy ro'yxatga aylantiradi: <code>list(lugat.keys())</code>.",
      word: "list",
      call: true,
    },
    {
      id: "set",
      label: "set()",
      cat: "func",
      name: "To'plamga aylantirish",
      desc: "Ro'yxatdan takrorlanuvchi qiymatlarni olib tashlab, to'plam yaratadi. To'plamda tartib saqlanmaydi.",
      word: "set",
      call: true,
    },
    {
      id: "enumerate",
      label: "enumerate()",
      cat: "func",
      name: "Indeks bilan sanash",
      desc: "Tsiklda har bir elementga tartib raqamini qo'shib beradi: <code>for indeks, meva in enumerate(mevalar)</code>. <code>start=1</code> sanashni 1 dan boshlaydi.",
      word: "enumerate",
      call: true,
    },
    {
      id: "open",
      label: "open()",
      cat: "func",
      name: "Faylni ochish",
      desc: "Kompyuterdagi faylni ochadi: <code>open(\"fayl.txt\", \"w\", encoding=\"utf-8\")</code>. Ikkinchi argument — rejim: <code>\"r\"</code> o'qish, <code>\"w\"</code> yozish, <code>\"a\"</code> qo'shib yozish.",
      word: "open",
      call: true,
    },

    /* ---------------------------------------------------------------
       Kalit so'zlar
       --------------------------------------------------------------- */
    {
      id: "if",
      label: "if",
      cat: "keyword",
      name: "Agar (shart)",
      desc: "Shart <code>True</code> bo'lsa, keyingi chekinilgan blok bajariladi. Shart oxirida <code>:</code> qo'yiladi.",
      word: "if",
    },
    {
      id: "elif",
      label: "elif",
      cat: "keyword",
      name: "Aks holda, agar",
      desc: "Oldingi shartlar <code>False</code> bo'lib, yangi shart <code>True</code> bo'lsa bajariladi. Bir nechta variantni tekshirish uchun ishlatiladi.",
      word: "elif",
    },
    {
      id: "else",
      label: "else",
      cat: "keyword",
      name: "Aks holda",
      desc: "Yuqoridagi barcha shartlar <code>False</code> bo'lsa bajariladigan blok.",
      word: "else",
    },
    {
      id: "for",
      label: "for",
      cat: "keyword",
      name: "Elementlar bo'ylab tsikl",
      desc: "Ro'yxat, matn yoki <code>range()</code> elementlarini birma-bir oladi. Har aylanishda o'zgaruvchiga navbatdagi qiymat beriladi.",
      word: "for",
    },
    {
      id: "while",
      label: "while",
      cat: "keyword",
      name: "Shartli tsikl",
      desc: "Shart <code>True</code> bo'lguncha blokni takrorlaydi. Shartni o'zgartirishni unutmang, aks holda tsikl tugamaydi. <code>while True:</code> va <code>break</code> — cheksiz tsiklni boshqarish usuli.",
      word: "while",
    },
    {
      id: "in",
      label: "in",
      cat: "keyword",
      name: "Ichida / bo'ylab",
      desc: "Ikki vazifasi bor: <code>for x in ro'yxat</code> — elementlar bo'ylab yurish; <code>x in ro'yxat</code> — element bor-yo'qligini tekshirib, <code>True</code>/<code>False</code> qaytarish.",
      word: "in",
    },
    {
      id: "def",
      label: "def",
      cat: "keyword",
      name: "Funksiya e'lon qilish",
      desc: "Yangi funksiya yaratadi: <code>def nom(parametrlar):</code>. Keyingi chekinilgan blok funksiya tanasi bo'ladi. Funksiya nomi bilan chaqiriladi: <code>nom()</code>.",
      word: "def",
    },
    {
      id: "return",
      label: "return",
      cat: "keyword",
      name: "Natijani qaytarish",
      desc: "Funksiyadan qiymat qaytaradi va funksiyani shu joyda tugatadi. <code>return</code> bo'lmasa, funksiya <code>None</code> qaytaradi.",
      word: "return",
    },
    {
      id: "import",
      label: "import",
      cat: "keyword",
      name: "Modulni yuklash",
      desc: "Tayyor kod to'plamini (modulni) dasturga ulaydi: <code>import math</code>. Keyin ichidagi vositalar <code>math.sqrt()</code> kabi ishlatiladi.",
      word: "import",
    },
    {
      id: "from",
      label: "from",
      cat: "keyword",
      name: "Moduldan aniq nom",
      desc: "<code>from math import sqrt</code> — moduldan faqat kerakli nomni oladi. Shundan keyin <code>sqrt()</code> deb, modul nomisiz chaqirasiz.",
      word: "from",
    },
    {
      id: "as",
      label: "as",
      cat: "keyword",
      name: "Taxallus berish",
      desc: "Uzun nomga qisqa nom beradi: <code>import ... as qisqa</code>. Fayl va xatolarda ham ishlatiladi: <code>with open(...) as fayl</code>, <code>except ValueError as xato</code>.",
      word: "as",
    },
    {
      id: "with",
      label: "with",
      cat: "keyword",
      name: "Kontekst menejeri",
      desc: "Faylni ochib, blok tugagach avtomatik yopadi. Faylni qo'lda yopish shart emas — bu xatolardan saqlaydi.",
      word: "with",
    },
    {
      id: "try",
      label: "try",
      cat: "keyword",
      name: "Xavfli kodni sinash",
      desc: "Xato chiqishi mumkin bo'lgan kodni o'raydi. Xato yuz bersa, dastur to'xtamay, mos <code>except</code> blokiga o'tadi.",
      word: "try",
    },
    {
      id: "except",
      label: "except",
      cat: "keyword",
      name: "Xatoni ushlash",
      desc: "Qaysi xato turini ushlashni ko'rsatadi: <code>except ValueError:</code>. Xato yuz berganda shu blok bajariladi va dastur davom etadi.",
      word: "except",
    },
    {
      id: "finally",
      label: "finally",
      cat: "keyword",
      name: "Har holatda bajarish",
      desc: "Xato bo'ladimi-yo'qmi, har qanday holatda bajariladigan blok. Tozalash ishlari uchun ishlatiladi.",
      word: "finally",
    },
    {
      id: "raise",
      label: "raise",
      cat: "keyword",
      name: "Xatoni qo'lda chaqirish",
      desc: "<code>raise ValueError(\"xabar\")</code> — xatoni o'zingiz yaratadi. Dastur to'xtaydi yoki uni <code>try/except</code> ushlab qoladi.",
      word: "raise",
    },
    {
      id: "class",
      label: "class",
      cat: "keyword",
      name: "Klass yaratish",
      desc: "Obyektlar uchun shablon yaratadi: <code>class Nom:</code>. Ichida xossalar (<code>self.ism</code>) va metodlar (<code>def ...</code>) bo'ladi. Qavs ichida ota-klass yozilsa, undan meros olinadi: <code>class Mushuk(Hayvon)</code>.",
      word: "class",
    },
    {
      id: "self",
      label: "self",
      cat: "keyword",
      name: "Joriy obyekt",
      desc: "Metod ichida obyektning o'ziga murojaat qiladi. <code>self.ism</code> — shu obyektning <code>ism</code> xossasi. Metodning birinchi parametri odatda <code>self</code> bo'ladi.",
      word: "self",
    },
    {
      id: "__init__",
      label: "__init__",
      cat: "keyword",
      name: "Konstruktor",
      desc: "Klassdan yangi obyekt yaratilganda avtomatik ishlaydigan maxsus metod. Obyektning boshlang'ich xossalarini o'rnatadi.",
      word: "__init__",
    },
    {
      id: "__str__",
      label: "__str__",
      cat: "keyword",
      name: "Matnli ko'rinish",
      desc: "<code>print(obyekt)</code> qilinganda obyekt qanday matn ko'rinishida chiqishini belgilaydi. <code>return</code> bilan matn qaytariladi.",
      word: "__str__",
    },
    {
      id: "True",
      label: "True",
      cat: "value",
      name: "Rost",
      desc: "Mantiqiy rost qiymat. <code>if</code>, <code>while</code> shartlarida va bayroqcha (flag) sifatida ishlatiladi.",
      word: "True",
    },
    {
      id: "False",
      label: "False",
      cat: "value",
      name: "Yolg'on",
      desc: "Mantiqiy yolg'on qiymat. Shart bajarilmaganda natija <code>False</code> bo'ladi.",
      word: "False",
    },
    {
      id: "None",
      label: "None",
      cat: "value",
      name: "Bo'sh qiymat",
      desc: "Qiymat yo'qligini bildiradi. <code>None</code> — alohida tur; u 0 ham, bo'sh matn ham emas.",
      word: "None",
    },
    {
      id: "and",
      label: "and",
      cat: "keyword",
      name: "VA (mantiqiy)",
      desc: "Ikkala shart ham <code>True</code> bo'lsagina natija <code>True</code> bo'ladi. Aks holda <code>False</code>.",
      word: "and",
    },
    {
      id: "or",
      label: "or",
      cat: "keyword",
      name: "YOKI (mantiqiy)",
      desc: "Kamida bitta shart <code>True</code> bo'lsa, natija <code>True</code> bo'ladi.",
      word: "or",
    },
    {
      id: "not",
      label: "not",
      cat: "keyword",
      name: "INKOR",
      desc: "Mantiqiy qiymatni teskarisiga aylantiradi: <code>True</code> → <code>False</code>, <code>False</code> → <code>True</code>.",
      word: "not",
    },
    {
      id: "break",
      label: "break",
      cat: "keyword",
      name: "Tsiklni to'xtatish",
      desc: "Joriy tsiklni butunlay tugatadi va tsikldan keyingi qatorga o'tadi.",
      word: "break",
    },
    {
      id: "continue",
      label: "continue",
      cat: "keyword",
      name: "Aylanishni o'tkazish",
      desc: "Tsiklning joriy aylanishini o'tkazib yuboradi va keyingi aylanishga o'tadi. Tsikl to'xtamaydi.",
      word: "continue",
    },
    {
      id: "ternary",
      label: "if ... else",
      cat: "keyword",
      name: "Qisqa shart",
      desc: "Bir qatorda tanlov: <code>\"katta\" if yosh >= 18 else \"kichik\"</code>. Shart <code>True</code> bo'lsa birinchi qiymat, <code>False</code> bo'lsa ikkinchi qiymat olinadi.",
      pattern: /=\s*[^\n]*\bif\b[^\n]*\belse\b/,
    },

    /* ---------------------------------------------------------------
       Xato turlari
       --------------------------------------------------------------- */
    {
      id: "ValueError",
      label: "ValueError",
      cat: "error",
      name: "Noto'g'ri qiymat xatosi",
      desc: "Funksiya qiymatni qabul qila olmasa chiqadi. Masalan, <code>int(\"salom\")</code> — matnni songa aylantirib bo'lmaydi.",
      word: "ValueError",
    },
    {
      id: "ZeroDivisionError",
      label: "ZeroDivisionError",
      cat: "error",
      name: "Nolga bo'lish xatosi",
      desc: "Sonni 0 ga bo'lishga urinishda chiqadi: <code>10 / 0</code>.",
      word: "ZeroDivisionError",
    },

    /* ---------------------------------------------------------------
       Metodlar va xossalar
       --------------------------------------------------------------- */
    {
      id: "strip",
      label: ".strip()",
      cat: "method",
      name: "Bo'shliqlarni tozalash",
      desc: "Matnning bosh va oxiridagi bo'shliqlar, tab va yangi qatorlarni olib tashlaydi. Natija — yangi matn.",
      method: "strip",
    },
    {
      id: "upper",
      label: ".upper()",
      cat: "method",
      name: "Katta harflarga aylantirish",
      desc: "Barcha harflarni katta harfga aylantiradi. Asl matn o'zgarmaydi — yangi matn qaytadi.",
      method: "upper",
    },
    {
      id: "replace",
      label: ".replace()",
      cat: "method",
      name: "Bo'lakni almashtirish",
      desc: "Matn ichidagi bo'lakni boshqasiga almashtiradi: <code>gap.replace(\"Python\", \"kod\")</code>.",
      method: "replace",
    },
    {
      id: "split",
      label: ".split()",
      cat: "method",
      name: "Bo'laklarga ajratish",
      desc: "Matnni bo'shliq yoki berilgan belgi bo'yicha ro'yxatga ajratadi: <code>\"men python\".split()</code> → <code>['men', 'python']</code>.",
      method: "split",
    },
    {
      id: "append",
      label: ".append()",
      cat: "method",
      name: "Ro'yxatga qo'shish",
      desc: "Ro'yxatning oxiriga bitta yangi element qo'shadi.",
      method: "append",
    },
    {
      id: "insert",
      label: ".insert()",
      cat: "method",
      name: "Joyiga qo'shish",
      desc: "<code>insert(indeks, qiymat)</code> — ko'rsatilgan indeksga element qo'yadi, qolgan elementlar o'ngga suriladi.",
      method: "insert",
    },
    {
      id: "remove",
      label: ".remove()",
      cat: "method",
      name: "Qiymatni o'chirish",
      desc: "Ro'yxatdan birinchi uchragan qiymatni o'chiradi.",
      method: "remove",
    },
    {
      id: "sort",
      label: ".sort()",
      cat: "method",
      name: "Joyida tartiblash",
      desc: "Ro'yxatning o'zini tartiblaydi va hech narsa qaytarmaydi. Yangi nusxa kerak bo'lsa, <code>sorted()</code> ishlatiladi.",
      method: "sort",
    },
    {
      id: "pop",
      label: ".pop()",
      cat: "method",
      name: "Elementni olib tashlash",
      desc: "Oxirgi elementni (ro'yxatda) yoki berilgan kalitni (lug'atda) olib tashlab, uning qiymatini qaytaradi.",
      method: "pop",
    },
    {
      id: "get",
      label: ".get()",
      cat: "method",
      name: "Xavfsiz qiymat olish",
      desc: "Lug'atdan kalit bo'yicha qiymat oladi. Kalit bo'lmasa, xato bermaydi — <code>None</code> yoki siz bergan zaxira qiymatni qaytaradi.",
      method: "get",
    },
    {
      id: "keys",
      label: ".keys()",
      cat: "method",
      name: "Kalitlar",
      desc: "Lug'atning barcha kalitlarini qaytaradi. Ro'yxat kerak bo'lsa, <code>list()</code> bilan o'rang.",
      method: "keys",
    },
    {
      id: "values",
      label: ".values()",
      cat: "method",
      name: "Qiymatlar",
      desc: "Lug'atning barcha qiymatlarini qaytaradi.",
      method: "values",
    },
    {
      id: "items",
      label: ".items()",
      cat: "method",
      name: "Kalit-qiymat juftlari",
      desc: "Har bir juftlikni beradi: <code>for ism, ball in reyting.items()</code>. Shu bilan kalit va qiymatni birga olish mumkin.",
      method: "items",
    },
    {
      id: "read",
      label: ".read()",
      cat: "method",
      name: "Faylni o'qish",
      desc: "Ochilgan faylning butun matnini qaytaradi.",
      method: "read",
    },
    {
      id: "write",
      label: ".write()",
      cat: "method",
      name: "Faylga yozish",
      desc: "Ochilgan faylga matn yozadi. <code>\\n</code> — yangi qatorga o'tish belgisi.",
      method: "write",
    },
    {
      id: "add",
      label: ".add()",
      cat: "method",
      name: "To'plamga qo'shish",
      desc: "To'plamga yangi element qo'shadi. Element allaqachon bo'lsa, hech narsa o'zgarmaydi.",
      method: "add",
    },
    {
      id: "discard",
      label: ".discard()",
      cat: "method",
      name: "To'plamdan o'chirish",
      desc: "Elementni to'plamdan o'chiradi. Element bo'lmasa ham xato bermaydi.",
      method: "discard",
    },
    {
      id: "sqrt",
      label: ".sqrt()",
      cat: "method",
      name: "Kvadrat ildiz",
      desc: "Sonning kvadrat ildizini qaytaradi: <code>math.sqrt(81)</code> → 9.0.",
      method: "sqrt",
    },
    {
      id: "floor",
      label: ".floor()",
      cat: "method",
      name: "Pastga yaxlitlash",
      desc: "Sonni eng yaqin kichik butun songa tushiradi: <code>math.floor(3.9)</code> → 3.",
      method: "floor",
    },
    {
      id: "ceil",
      label: ".ceil()",
      cat: "method",
      name: "Tepaga yaxlitlash",
      desc: "Sonni eng yaqin katta butun songa ko'taradi: <code>math.ceil(3.1)</code> → 4.",
      method: "ceil",
    },
    {
      id: "choice",
      label: ".choice()",
      cat: "method",
      name: "Tasodifiy tanlash",
      desc: "Ro'yxatdan tasodifiy bitta elementni qaytaradi.",
      method: "choice",
    },
    {
      id: "randint",
      label: ".randint()",
      cat: "method",
      name: "Tasodifiy butun son",
      desc: "<code>random.randint(1, 6)</code> — 1 dan 6 gacha (ikkalasi ham kiradi) tasodifiy butun son qaytaradi.",
      method: "randint",
    },
    {
      id: "strftime",
      label: ".strftime()",
      cat: "method",
      name: "Sanani formatlash",
      desc: "Sanani berilgan shaklda matnga aylantiradi: <code>%d</code> — kun, <code>%m</code> — oy, <code>%Y</code> — yil.",
      method: "strftime",
    },
    {
      id: "year",
      label: ".year",
      cat: "method",
      name: "Yil xossasi",
      desc: "Sana obyektidan yilni oladi: <code>tugilgan.year</code> → 2010.",
      pattern: /\.\s*year\b/,
    },
    {
      id: "month",
      label: ".month",
      cat: "method",
      name: "Oy xossasi",
      desc: "Sana obyektidan oyni raqamda oladi: <code>tugilgan.month</code> → 5.",
      pattern: /\.\s*month\b/,
    },

    /* ---------------------------------------------------------------
       Modullar
       --------------------------------------------------------------- */
    {
      id: "math",
      label: "math",
      cat: "module",
      name: "Matematika moduli",
      desc: "Tayyor matematik funksiyalar: <code>sqrt()</code>, <code>floor()</code>, <code>ceil()</code> va <code>pi</code> soni.",
      word: "math",
    },
    {
      id: "math.pi",
      label: "math.pi",
      cat: "module",
      name: "π (pi) soni",
      desc: "Matematik doimiy: taxminan 3.14159. Aylana hisoblarida ishlatiladi.",
      pattern: /\bmath\s*\.\s*pi\b/,
    },
    {
      id: "random",
      label: "random",
      cat: "module",
      name: "Tasodifiy sonlar moduli",
      desc: "Tasodifiy tanlash uchun vositalar: <code>choice()</code> va <code>randint()</code>.",
      word: "random",
    },
    {
      id: "datetime",
      label: "datetime",
      cat: "module",
      name: "Sana va vaqt moduli",
      desc: "Sana va vaqt bilan ishlash vositalarini beradi: <code>date</code>, <code>datetime</code>.",
      word: "datetime",
    },
    {
      id: "date",
      label: "date()",
      cat: "module",
      name: "Sana yaratish",
      desc: "Yil, oy va kundan sana obyekti yaratadi: <code>date(2010, 5, 14)</code>. <code>.year</code> va <code>.month</code> xossalari bor.",
      word: "date",
    },

    /* ---------------------------------------------------------------
       Argumentlar va fayl rejimlari
       --------------------------------------------------------------- */
    {
      id: "sep",
      label: "sep=",
      cat: "arg",
      name: "Ajratgich",
      desc: "<code>print(..., sep=\"-\")</code> — chop etilayotgan qiymatlar orasiga qo'yiladigan belgi. Odatiy holatda bo'sh joy.",
      pattern: /\bsep\s*=/,
    },
    {
      id: "end",
      label: "end=",
      cat: "arg",
      name: "Qator oxiri",
      desc: "<code>print(..., end=\" \")</code> — chop etishdan keyin qo'yiladigan belgi. Odatiy holatda yangi qator (<code>\\n</code>).",
      pattern: /\bend\s*=/,
    },
    {
      id: "encoding",
      label: "encoding=",
      cat: "arg",
      name: "Kodlash turi",
      desc: "<code>encoding=\"utf-8\"</code> — fayldagi matnni UTF-8 kodlashida o'qish yoki yozish. O'zbek harflari to'g'ri chiqishi uchun muhim.",
      pattern: /\bencoding\s*=/,
    },
    {
      id: "start",
      label: "start=",
      cat: "arg",
      name: "Boshlanish qiymati",
      desc: "<code>enumerate(..., start=1)</code> — sanashni 0 dan emas, 1 dan boshlaydi.",
      pattern: /\bstart\s*=/,
    },
    {
      id: "reverse",
      label: "reverse=",
      cat: "arg",
      name: "Teskari tartib",
      desc: "<code>sorted(..., reverse=True)</code> — kattadan kichikka qarab tartiblaydi.",
      pattern: /\breverse\s*=/,
    },
    {
      id: "utf8",
      label: '"utf-8"',
      cat: "arg",
      name: "UTF-8 kodlash",
      desc: "Matnni kompyuterda saqlash usuli. O'zbekcha harflar va boshqa tillardagi belgilarni to'g'ri saqlaydi.",
      rawPattern: /["']utf-8["']/i,
    },
    {
      id: "mode-w",
      label: '"w"',
      cat: "arg",
      name: "Yozish rejimi",
      desc: "Faylni yozish uchun ochadi. Fayl ichidagi eski matn o'chiriladi. Fayl bo'lmasa, yangi fayl yaratiladi.",
      rawPattern: /["']w["']/,
      rawRequires: /open\s*\(/,
    },
    {
      id: "mode-r",
      label: '"r"',
      cat: "arg",
      name: "O'qish rejimi",
      desc: "Mavjud faylni o'qish uchun ochadi. Fayl topilmasa xato beradi.",
      rawPattern: /["']r["']/,
      rawRequires: /open\s*\(/,
    },
    {
      id: "mode-a",
      label: '"a"',
      cat: "arg",
      name: "Qo'shib yozish rejimi",
      desc: "Fayl oxiriga qo'shib yozadi; eski matn saqlanib qoladi. Fayl bo'lmasa, yaratiladi.",
      rawPattern: /["']a["']/,
      rawRequires: /open\s*\(/,
    },

    /* ---------------------------------------------------------------
       Belgilar va qoidalar
       --------------------------------------------------------------- */
    {
      id: "parens",
      label: "( )",
      cat: "operator",
      name: "Qavslar",
      desc: "Funksiya chaqirish (<code>print()</code>), parametrlar, ifoda guruhi yoki kortej: <code>(3, 5)</code>. Bo'sh <code>()</code> — funksiyani chaqirish belgisi.",
      pattern: /\(/,
    },
    {
      id: "assign",
      label: "=",
      cat: "operator",
      name: "Tenglashtirish",
      desc: "O'ngdagi qiymatni chapdagi o'zgaruvchiga saqlaydi: <code>yosh = 14</code>. Argumentga nom bilan qiymat ham beradi: <code>sep=\"-\"</code>. Taqqoslash uchun <b><code>==</code></b> ishlatiladi!",
      pattern: /(?<![=!<>+\-*\/%&|^])=(?!=)/,
    },
    {
      id: "eq",
      label: "==",
      cat: "operator",
      name: "Tenglikni tekshirish",
      desc: "Ikki qiymat tengligini tekshiradi va <code>True</code>/<code>False</code> qaytaradi: <code>ism == \"Aziza\"</code>. Bu tenglashtirish (<code>=</code>) emas.",
      pattern: /==/,
    },
    {
      id: "neq",
      label: "!=",
      cat: "operator",
      name: "Teng emas",
      desc: "Ikki qiymat teng bo'lmasa <code>True</code> qaytaradi.",
      pattern: /!=/,
    },
    {
      id: "gt",
      label: ">",
      cat: "operator",
      name: "Katta",
      desc: "Chapdagi qiymat o'ngdagidan katta bo'lsa <code>True</code> bo'ladi.",
      pattern: /(?<![<>=!-])>(?!=)/,
    },
    {
      id: "lt",
      label: "<",
      cat: "operator",
      name: "Kichik",
      desc: "Chapdagi qiymat o'ngdagidan kichik bo'lsa <code>True</code> bo'ladi.",
      pattern: /(?<![<>=!])<(?![:=])/,
    },
    {
      id: "gte",
      label: ">=",
      cat: "operator",
      name: "Katta yoki teng",
      desc: "Chapdagi qiymat o'ngdagidan katta yoki teng bo'lsa <code>True</code>.",
      pattern: />=/,
    },
    {
      id: "lte",
      label: "<=",
      cat: "operator",
      name: "Kichik yoki teng",
      desc: "Chapdagi qiymat o'ngdagidan kichik yoki teng bo'lsa <code>True</code>.",
      pattern: /<=/,
    },
    {
      id: "plus",
      label: "+",
      cat: "operator",
      name: "Qo'shish / ulash",
      desc: "Sonlarni qo'shadi. Matnlarni birlashtiradi: <code>\"Salom, \" + ism</code>. Ro'yxatlarni ham birlashtiradi.",
      pattern: /(?<![+\-*\/%])\+(?![+=])/,
    },
    {
      id: "minus",
      label: "-",
      cat: "operator",
      name: "Ayirish / manfiy",
      desc: "Sonlarni ayiradi. Son oldida manfiy ishora bo'ladi: <code>-1</code>. To'plamlarda farqni beradi: <code>a - b</code>.",
      pattern: /(?<![<-])-(?![-=>])/,
    },
    {
      id: "multiply",
      label: "*",
      cat: "operator",
      name: "Ko'paytirish / takrorlash",
      desc: "Sonlarni ko'paytiradi. Matn yoki ro'yxatni takrorlaydi: <code>\"-\" * 20</code>.",
      pattern: /(?<![*\/])\*(?![*=])/,
    },
    {
      id: "power",
      label: "**",
      cat: "operator",
      name: "Daraja",
      desc: "<code>2 ** 3</code> → 8. Darajalar o'ngdan chapga hisoblanadi: <code>2 ** 3 ** 2</code> = 2<sup>9</sup>.",
      pattern: /\*\*/,
    },
    {
      id: "divide",
      label: "/",
      cat: "operator",
      name: "Bo'lish",
      desc: "Bo'linmani hisoblaydi va har doim kasr son qaytaradi: <code>10 / 2</code> → 5.0.",
      pattern: /(?<!\/)\/(?!\/|=)/,
    },
    {
      id: "floor-divide",
      label: "//",
      cat: "operator",
      name: "Butun bo'lish",
      desc: "Bo'linmaning butun qismini qaytaradi: <code>17 // 5</code> → 3.",
      pattern: /\/\//,
    },
    {
      id: "modulo",
      label: "%",
      cat: "operator",
      name: "Qoldiq",
      desc: "Bo'lishdan qolgan qoldiqni qaytaradi: <code>17 % 5</code> → 2. Juft/toqni <code>son % 2 == 0</code> bilan tekshirish mumkin.",
      pattern: /%/,
    },
    {
      id: "plus-assign",
      label: "+=",
      cat: "operator",
      name: "Qo'shib saqlash",
      desc: "<code>son += 1</code> — <code>son = son + 1</code> bilan bir xil. Qiymatni oshirib borishda qisqa yozuv.",
      pattern: /\+=/,
    },
    {
      id: "amp",
      label: "&",
      cat: "operator",
      name: "Kesishma (to'plamlar)",
      desc: "Ikkala to'plamda ham mavjud elementlarni beradi: <code>a & b</code>.",
      pattern: /&/,
    },
    {
      id: "pipe",
      label: "|",
      cat: "operator",
      name: "Birlashma (to'plamlar)",
      desc: "Ikkala to'plamdagi barcha elementlarni birlashtiradi: <code>a | b</code>.",
      pattern: /\|/,
    },
    {
      id: "colon",
      label: ":",
      cat: "syntax",
      name: "Ikki nuqta",
      desc: "Blok boshlanishini bildiradi: <code>if shart:</code>, <code>for ...:</code>, <code>def ...:</code>. Lug'atda kalit va qiymatni, kesimda oraliqni ham ajratadi: <code>ismlar[0:2]</code>.",
      pattern: /:/,
    },
    {
      id: "comma",
      label: ",",
      cat: "syntax",
      name: "Vergul",
      desc: "Funksiya argumentlarini, ro'yxat/lug'at elementlarini va bir nechta o'zgaruvchini ajratadi: <code>a, b = 3, 7</code>.",
      pattern: /,/,
    },
    {
      id: "dot",
      label: ".",
      cat: "syntax",
      name: "Nuqta",
      desc: "Obyekt yoki modul ichidagi funksiya yoki xossaga murojaat qiladi: <code>matn.upper()</code>, <code>math.pi</code>.",
      pattern: /\.(?=\s*[A-Za-z_])/,
    },
    {
      id: "brackets",
      label: "[ ]",
      cat: "syntax",
      name: "Kvadrat qavslar",
      desc: "Ro'yxat yaratish, indeks bo'yicha element olish: <code>ismlar[0]</code>. Kesim (slice) ham olinadi: <code>ismlar[0:2]</code>.",
      pattern: /\[/,
    },
    {
      id: "braces",
      label: "{ }",
      cat: "syntax",
      name: "Jingalak qavslar",
      desc: "Lug'at (<code>{\"kalit\": qiymat}</code>) yoki to'plam (<code>{1, 2, 3}</code>) yaratadi.",
      pattern: /\{/,
    },
    {
      id: "comment",
      label: "#",
      cat: "syntax",
      name: "Izoh",
      desc: "<code>#</code> dan keyingi matn bajarilmaydi — u faqat inson uchun eslatma. Kodni tushuntirish uchun yoziladi.",
      flag: "comment",
    },
    {
      id: "string",
      label: '"..."',
      cat: "syntax",
      name: "Matn (string)",
      desc: "Qo'shtirnoq ichidagi belgilar matn hisoblanadi. <code>\"Salom\"</code> va <code>'Salom'</code> — bir xil matn.",
      flag: "plain",
    },
    {
      id: "fstring",
      label: 'f"..."',
      cat: "syntax",
      name: "f-matn",
      desc: "<code>f</code> prefiksi matn ichidagi <code>{o'zgaruvchi}</code> joylarini uning qiymatiga almashtiradi: <code>f\"Salom, {ism}!\"</code>.",
      flag: "fstring",
    },
    {
      id: "triple-string",
      label: '"""..."""',
      cat: "syntax",
      name: "Ko'p qatorli matn",
      desc: "Uchta qo'shtirnoq bir nechta qatorga cho'zilgan matn yozishga imkon beradi.",
      flag: "triple",
    },
    {
      id: "newline-escape",
      label: "\\n",
      cat: "syntax",
      name: "Yangi qator belgisi",
      desc: "Matn ichida keyingi qatorga o'tadi. Faylga yozishda <code>\"Salom\\n\"</code> — matndan keyin yangi qator qo'shadi.",
      flag: "escape",
    },
    {
      id: "number",
      label: "0–9",
      cat: "syntax",
      name: "Sonlar",
      desc: "Raqamlar son sifatida o'qiladi: <code>14</code> — butun son, <code>12.5</code> — kasr son. Qo'shtirnoqqa olsangiz (<code>\"14\"</code>), u matn bo'lib qoladi.",
      pattern: /\b\d+(?:\.\d+)?\b/,
    },
    {
      id: "indent",
      label: "↹",
      cat: "syntax",
      name: "Chekinish (indent)",
      desc: "Bloklar <code>:</code> dan keyin 4 bo'sh joy yoki Tab bilan chekinadi. Chekinish qaysi qatorlar blokka tegishli ekanini bildiradi.",
      flag: "indent",
    },
    {
      id: "list-comprehension",
      label: "[ifoda for x in ...]",
      cat: "syntax",
      name: "Ro'yxat comprehension",
      desc: "Ro'yxatni bitta qatorda yasaydi: <code>[n ** 2 for n in range(1, 6)]</code>. Boshidagi ifoda har bir element uchun hisoblanadi. <code>if</code> qo'shsangiz, faqat shartga mos elementlar olinadi.",
      pattern: /\[[^\]\n]+for\s+\w+\s+in/,
    },
    {
      id: "dict-comprehension",
      label: "{kalit: qiymat for ...}",
      cat: "syntax",
      name: "Lug'at comprehension",
      desc: "Lug'atni bir qatorda yasaydi: <code>{ism: len(ism) for ism in ismlar}</code>. Har bir element uchun kalit va qiymat juftligi hosil qilinadi.",
      pattern: /\{[^{}\n]+for\s+\w+\s+in/,
    },
    {
      id: "lambda",
      label: "lambda",
      cat: "keyword",
      name: "Nomsiz funksiya",
      desc: "Qisqa, bir qatorli funksiya yaratadi: <code>lambda x: x * 2</code>. Ko'pincha <code>sorted(..., key=lambda ...)</code> kabi joylarda vaqtinchalik funksiya sifatida ishlatiladi.",
      word: "lambda",
    },
    {
      id: "yield",
      label: "yield",
      cat: "keyword",
      name: "Generator qiymati",
      desc: "Funksiya natijani birdan qaytarmasdan, har chaqirilganda bittadan qiymat beradi. <code>yield</code> ishlatilgan funksiya <b>generator</b> bo'ladi — xotirani tejaydi va katta ma'lumotlar bilan ishlaydi.",
      word: "yield",
    },
    {
      id: "next",
      label: "next()",
      cat: "func",
      name: "Keyingi qiymat",
      desc: "Generatordan yoki iteratordan keyingi qiymatni oladi: <code>next(gen)</code>. Qiymatlar tugasa, <code>StopIteration</code> xatosi chiqadi.",
      word: "next",
      call: true,
    },
    {
      id: "json",
      label: "json",
      cat: "module",
      name: "JSON moduli",
      desc: "JSON formatidagi matn bilan ishlaydi. API va fayllardan kelgan ma'lumotlarni Python lug'ati yoki ro'yxatiga aylantiradi va teskarisini qiladi.",
      word: "json",
    },
    {
      id: "json-dumps",
      label: ".dumps()",
      cat: "method",
      name: "JSON matniga aylantirish",
      desc: "Python obyektini JSON matniga aylantiradi: <code>json.dumps(data)</code>. <code>ensure_ascii=False</code> o'zbekcha harflarni saqlab qoladi.",
      method: "dumps",
    },
    {
      id: "json-loads",
      label: ".loads()",
      cat: "method",
      name: "JSON matnini o'qish",
      desc: "JSON matnini Python lug'ati yoki ro'yxatiga aylantiradi: <code>json.loads(matn)</code>. Shundan keyin kalitlar orqali ma'lumot olasiz.",
      method: "loads",
    },
    {
      id: "urlopen",
      label: "urlopen()",
      cat: "func",
      name: "Internetdan ochish",
      desc: "Manzil (URL) bo'yicha internet resursini ochadi. API javobini olish uchun ishlatiladi; <code>with</code> bilan o'ralganda aloqa avtomatik yopiladi.",
      word: "urlopen",
      call: true,
    },
    {
      id: "property",
      label: "@property",
      cat: "keyword",
      name: "Xossa sifatida metod",
      desc: "Metodni xossadek ishlatish imkonini beradi: <code>hisob.balans</code> — qavssiz murojaat. Ichida tekshiruv yozib, qiymatni himoyalash mumkin.",
      pattern: /@property\b/,
    },
    {
      id: "setter",
      label: ".setter",
      cat: "keyword",
      name: "Qiymat o'rnatuvchi",
      desc: "<code>@balans.setter</code> — xossaga yangi qiymat berilganda ishlaydigan metod. Shu yerda qiymatni tekshirib, noto'g'risini rad etish mumkin.",
      rawPattern: /\.setter\b/,
    },
    {
      id: "dataclass",
      label: "@dataclass",
      cat: "keyword",
      name: "Ma'lumot klassi",
      desc: "<code>@dataclass</code> klass uchun <code>__init__</code>, taqqoslash va matn ko'rinishini avtomatik yaratadi. Maydonlar oddiy o'zgaruvchi kabi yoziladi: <code>ism: str</code>.",
      rawPattern: /@dataclass\b/,
    },
    {
      id: "type-hint",
      label: ": str / : int",
      cat: "syntax",
      name: "Tur ko'rsatmasi",
      desc: "O'zgaruvchi yoki parametr qaysi turda bo'lishini bildiradi: <code>ism: str</code>, <code>ball: int = 0</code>. Python buni tekshirmaydi, lekin kodni o'qish va muharrir yordamini osonlashtiradi.",
      rawPattern: /:\s*(?:str|int|float|bool)\b/,
    },
    {
      id: "assert",
      label: "assert",
      cat: "keyword",
      name: "Tekshiruv (test)",
      desc: "Shart rostligini tekshiradi. Shart <code>False</code> bo'lsa, <code>AssertionError</code> chiqadi: <code>assert natija == 5</code>. Testlarda kutilgan natijani tasdiqlash uchun ishlatiladi.",
      word: "assert",
    },
    {
      id: "sqlite3",
      label: "sqlite3",
      cat: "module",
      name: "SQLite moduli",
      desc: "Python ichida kichik SQL ma'lumotlar bazasi bilan ishlash imkonini beradi. Alohida server kerak emas; <code>:memory:</code> — vaqtinchalik xotira bazasi.",
      word: "sqlite3",
    },
    {
      id: "connect",
      label: ".connect()",
      cat: "method",
      name: "Bazaga ulanish",
      desc: "Ma'lumotlar bazasini ochadi yoki yaratadi: <code>sqlite3.connect(\"fayl.db\")</code>. Qaytgan <code>conn</code> orqali so'rovlar yuboriladi.",
      method: "connect",
    },
    {
      id: "cursor",
      label: ".cursor()",
      cat: "method",
      name: "So'rov oynasi",
      desc: "Baza bilan ishlash uchun kursor yaratadi. SQL buyruqlar <code>execute()</code> orqali shu kursor bilan yuboriladi va natijalar undan o'qiladi.",
      method: "cursor",
    },
    {
      id: "execute",
      label: ".execute()",
      cat: "method",
      name: "SQL buyrug'i",
      desc: "Bazaga bitta SQL buyrug'ini yuboradi: <code>cur.execute(\"SELECT ...\")</code>. Qiymatlarni <code>?</code> belgisi orqali xavfsiz uzatish mumkin.",
      method: "execute",
    },
    {
      id: "executemany",
      label: ".executemany()",
      cat: "method",
      name: "Ko'p qator qo'shish",
      desc: "Bir xil SQL buyrug'ini ro'yxatdagi ko'p qiymatlar uchun bajaradi. Har bir kortej bitta qator ma'lumotini bildiradi.",
      method: "executemany",
    },
    {
      id: "commit",
      label: ".commit()",
      cat: "method",
      name: "O'zgarishni saqlash",
      desc: "INSERT, UPDATE yoki DELETE natijalarini bazaga doimiy yozadi. <code>commit()</code> qilinmasa, o'zgarishlar saqlanmasligi mumkin.",
      method: "commit",
    },
    {
      id: "fetchall",
      label: ".fetchall()",
      cat: "method",
      name: "Barcha natijalar",
      desc: "SELECT so'rovining barcha qatorlarini ro'yxat ko'rinishida qaytaradi. Har bir qator kortej bo'ladi: <code>(\"Aziza\", 85)</code>.",
      method: "fetchall",
    },
    {
      id: "db-close",
      label: ".close()",
      cat: "method",
      name: "Ulanishni yopish",
      desc: "Baza bilan aloqani yopadi va resurslarni bo'shatadi. Ish tugagach <code>conn.close()</code> qilish odat.",
      method: "close",
    },
    {
      id: "main-guard",
      label: '__name__ == "__main__"',
      cat: "syntax",
      name: "Asosiy dastur sharti",
      desc: "Fayl to'g'ridan-to'g'ri ishga tushirilganda <code>True</code> bo'ladi, modul sifatida import qilinganda esa <code>False</code>. Shu sababli kod faqat kerakli holatda ishlaydi.",
      rawPattern: /__name__\s*==\s*["']__main__["']/,
    },
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function scanCode(code) {
    const flags = { plain: -1, fstring: -1, triple: -1, comment: -1, escape: -1, indent: -1 };
    let cleaned = "";
    let i = 0;
    const length = code.length;

    while (i < length) {
      const ch = code[i];

      if (ch === "#") {
        if (flags.comment < 0) flags.comment = i;
        while (i < length && code[i] !== "\n") {
          cleaned += " ";
          i += 1;
        }
        continue;
      }

      if (ch === '"' || ch === "'") {
        const triple = code.startsWith(ch.repeat(3), i);
        const prefix = code[i - 1];
        const hasF =
          (prefix === "f" || prefix === "F") && (i < 2 || !/[A-Za-z0-9_]/.test(code[i - 2]));
        if (hasF && flags.fstring < 0) flags.fstring = i;
        if (triple && flags.triple < 0) flags.triple = i;
        if (!hasF && !triple && flags.plain < 0) flags.plain = i;

        const quoteLength = triple ? 3 : 1;
        cleaned += " ".repeat(quoteLength);
        i += quoteLength;

        while (i < length) {
          if (code[i] === "\\") {
            if (flags.escape < 0 && code[i + 1] === "n") flags.escape = i;
            cleaned += code[i + 1] === "\n" ? "\n " : "  ";
            i += 2;
            continue;
          }
          if (triple ? code.startsWith(ch.repeat(3), i) : code[i] === ch) {
            cleaned += " ".repeat(quoteLength);
            i += quoteLength;
            break;
          }
          if (!triple && code[i] === "\n") break;
          cleaned += code[i] === "\n" ? "\n" : " ";
          i += 1;
        }
        continue;
      }

      cleaned += ch;
      i += 1;
    }

    const indentMatch = /(^|\n)[^\n]*:[ \t]*\n([ \t]+)(?=\S)/.exec(cleaned);
    if (indentMatch) {
      flags.indent = indentMatch.index + indentMatch[0].length - indentMatch[2].length;
    }

    return { cleaned: cleaned, raw: code, flags: flags };
  }

  function locate(term, scanned) {
    const cleaned = scanned.cleaned;

    if (term.word) {
      const expression = term.call
        ? new RegExp("\\b" + term.word + "\\s*\\(")
        : new RegExp("\\b" + term.word + "\\b");
      const match = expression.exec(cleaned);
      return match ? match.index : -1;
    }

    if (term.method) {
      const match = new RegExp("\\.\\s*" + term.method + "\\b").exec(cleaned);
      return match ? match.index : -1;
    }

    if (term.pattern) {
      const match = term.pattern.exec(cleaned);
      return match ? match.index : -1;
    }

    if (term.rawPattern) {
      if (term.rawRequires && !term.rawRequires.test(scanned.raw)) return -1;
      const match = term.rawPattern.exec(scanned.raw);
      return match ? match.index : -1;
    }

    if (term.flag) {
      return typeof scanned.flags[term.flag] === "number" ? scanned.flags[term.flag] : -1;
    }

    return -1;
  }

  function build(code) {
    const scanned = scanCode(code);
    const found = [];

    TERMS.forEach((term, order) => {
      const index = locate(term, scanned);
      if (index >= 0) found.push({ term: term, index: index, order: order });
    });

    found.sort((a, b) => a.index - b.index || a.order - b.order);
    return found.map((entry) => entry.term);
  }

  function formatDescription(html) {
    return html.replace(/<code>([\s\S]*?)<\/code>/g, function (match, content) {
      const text = content.replace(/<[^>]+>/g, "");
      return '<code' + (text.length <= 24 ? ' class="code-nowrap"' : "") + ">" + content + "</code>";
    });
  }

  function render(code, key) {
    const terms = build(code);
    if (!terms.length) return "";

    const bodyId = "gloss-" + key;
    const expanded = !(window.matchMedia && window.matchMedia("(max-width: 760px)").matches);
    const items = terms
      .map(
        (term) => `
          <div class="code-gloss__item code-gloss__item--${term.cat}">
            <dt class="code-gloss__term">
              <code>${escapeHtml(term.label)}</code>
              <span>${escapeHtml(term.name)}</span>
            </dt>
            <dd>${formatDescription(term.desc)}</dd>
          </div>`
      )
      .join("");

    return `
      <div class="code-gloss${expanded ? "" : " is-collapsed"}" data-glossary>
        <button class="code-gloss__toggle" type="button" data-glossary-toggle aria-expanded="${expanded}" aria-controls="${bodyId}">
          <span class="code-gloss__icon">${ICON_BOOK}</span>
          <span class="code-gloss__title">Kod lug'ati</span>
          <span class="code-gloss__count">${terms.length} ta tushuntirish</span>
          <span class="code-gloss__chev">${ICON_CHEVRON}</span>
        </button>
        <div class="code-gloss__body" id="${bodyId}" data-glossary-body${expanded ? "" : " hidden"}>
          <dl class="code-gloss__list">${items}</dl>
        </div>
      </div>`;
  }

  window.NoldanGlossary = { build: build, render: render };
})();
