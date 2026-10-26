/* Noldan — Kotlin course, 2-jild (100 dars: 99 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSE_VOLUMES = window.NOLDAN_COURSE_VOLUMES || {};
  window.NOLDAN_COURSE_VOLUMES.kotlin = {
 "modules": [
  {
   "title": "Inline, value class va tip tizimi",
   "lessons": [
    50,
    51,
    52,
    53,
    54
   ]
  },
  {
   "title": "Generics, variance va delegatsiya",
   "lessons": [
    55,
    56,
    57,
    58,
    59
   ]
  },
  {
   "title": "Reflection, DSL va metaprogramma",
   "lessons": [
    60,
    61,
    62,
    63,
    64
   ]
  },
  {
   "title": "Coroutines va Flow chuqur",
   "lessons": [
    65,
    66,
    67,
    68,
    69
   ]
  },
  {
   "title": "Ktor, serialization va ma'lumotlar bazasi",
   "lessons": [
    70,
    71,
    72,
    73,
    74
   ]
  },
  {
   "title": "Android va Jetpack Compose chuqur",
   "lessons": [
    75,
    76,
    77,
    78,
    79
   ]
  },
  {
   "title": "Multiplatform, performance va Gradle",
   "lessons": [
    80,
    81,
    82,
    83,
    84
   ]
  },
  {
   "title": "Arxitektura va dizayn patternlar",
   "lessons": [
    85,
    86,
    87,
    88,
    89
   ]
  },
  {
   "title": "Amaliy loyiha: Ktor + Android",
   "lessons": [
    90,
    91,
    92,
    93,
    94
   ]
  },
  {
   "title": "Takrorlash, intervyu va keyingi qadamlar",
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
   "title": "Inline funksiyalar: noinline, crossinline va non-local return",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<code>inline</code> modifikatori lambda parametrli funksiyaning tanasini chaqiruv joyiga ko'chiradi. Natijada lambda uchun alohida obyekt yaratilmaydi va kompilyator qo'shimcha imkoniyatlar beradi: inline lambda ichidan tashqi funksiyadan <code>return</code> qilish (non-local return) mumkin. Bu vosita ayniqsa kichik, tez-tez chaqiriladigan API'larda foydali."
    },
    {
     "type": "code",
     "title": "inline.kt",
     "code": "inline fun qayta(marotaba: Int, amal: (Int) -> Unit) {\n    for (i in 1..marotaba) amal(i)\n}\n\nfun birinchiJuft(sonlar: List<Int>): Int? {\n    qayta(sonlar.size) { index ->\n        if (sonlar[index] % 2 == 0) return sonlar[index]\n    }\n    return null\n}\n\nfun main() {\n    println(birinchiJuft(listOf(3, 5, 8, 10)))\n    println(birinchiJuft(listOf(1, 3, 5)))\n    println(birinchiJuft(emptyList()))\n}",
     "output": "8\nnull\nnull"
    },
    {
     "type": "p",
     "html": "Lambda inline qilingani uchun <code>return sonlar[index]</code> lambda ichidan emas, <code>birinchiJuft</code> funksiyasidan chiqadi. Agar lambda boshqa funksiyaga uzatilsa yoki saqlansa, uni inline qilib bo'lmaydi — shunda <code>noinline</code> ishlatiladi. <code>crossinline</code> esa lambda'ni boshqa bajarilish kontekstiga (masalan, thread yoki callback) uzatishga ruxsat beradi, lekin non-local return'ni taqiqlaydi."
    },
    {
     "type": "code",
     "title": "crossinline.kt",
     "code": "inline fun orqada(crossinline ish: () -> Unit) {\n    val oqim = Thread({ ish() }, \"ishchi-1\")\n    oqim.start()\n    oqim.join()\n}\n\ninline fun tanla(noinline shart: () -> Boolean, amal: () -> Unit) {\n    if (shart()) amal()\n}\n\nfun main() {\n    orqada { println(Thread.currentThread().name) }\n    tanla({ true }) { println(\"tanlandi\") }\n    tanla({ false }) { println(\"bu chiqmaydi\") }\n}",
     "output": "ishchi-1\ntanlandi"
    },
    {
     "type": "table",
     "head": [
      "Yozuv",
      "Ma'nosi"
     ],
     "rows": [
      [
       "<code>inline fun</code>",
       "Lambda tanasi chaqiruv joyiga ko'chiriladi"
      ],
      [
       "<code>noinline ish</code>",
       "Bu lambda inline qilinmaydi, obyekt sifatida uzatiladi"
      ],
      [
       "<code>crossinline ish</code>",
       "Boshqa kontekstda ishlaydi, non-local return taqiqlanadi"
      ],
      [
       "<code>return</code> inline lambda ichida",
       "Tashqi funksiyadan chiqadi"
      ],
      [
       "<code>return@qayta</code>",
       "Faqat lambda'dan chiqadi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Inline chegaralari",
     "html": "Katta funksiyani har joyda inline qilish bayt-kod hajmini oshiradi. Public inline funksiya <code>private</code> a'zolarga murojaat qila olmaydi — bunday API uchun <code>@PublishedApi internal</code> ishlatiladi. Rekursiv inline funksiya yozib bo'lmaydi, virtual funksiyalarni ham inline qilish mumkin emas."
    }
   ],
   "quiz": [
    {
     "q": "Inline funksiya lambda parametri bilan ishlaganda asosiy texnik foyda nima?",
     "options": [
      "Lambda uchun oraliq obyekt allokatsiyasini kamaytiradi",
      "Nullable qiymatlarni avtomatik tekshiradi",
      "Klasslarga meros olishni taqiqlaydi",
      "Runtime'da reflection'ni yoqadi"
     ],
     "answer": 0,
     "explain": "Inline lambda tanasi chaqiruv joyiga ko'chiriladi, shuning uchun alohida lambda obyekti kerak bo'lmaydi."
    },
    {
     "q": "<code>crossinline</code> qanday cheklov qo'yadi?",
     "options": [
      "Lambda'ni faqat bir marta chaqirishga majbur qiladi",
      "Lambda'ni suspend funksiyaga aylantiradi",
      "Lambda ichidan tashqi funksiyadan return qilishni taqiqlaydi",
      "Parametrni vararg qiladi"
     ],
     "answer": 2,
     "explain": "crossinline lambda boshqa kontekstda bajarilishi mumkin, shuning uchun non-local return xavfsiz emas va taqiqlanadi."
    },
    {
     "q": "Qaysi holatda funksiyani inline qilish tavsiya etilmaydi?",
     "options": [
      "Funksiya bitta lambda qabul qiladi",
      "Funksiya juda katta va ko'p joyda chaqiriladi",
      "Funksiya reified tip parametridan foydalanadi",
      "Funksiya qisqa va tez-tez chaqiriladi"
     ],
     "answer": 1,
     "explain": "Katta tanani ko'p joyga ko'chirish bayt-kod hajmini sezilarli oshiradi; inline kichik API'lar uchun mos."
    }
   ]
  },
  {
   "id": 51,
   "title": "Value class: tip xavfsizligi va nol allokatsiya",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "<code>@JvmInline value class</code> bitta <code>val</code> xossani o'raydi va kompilyatsiya paytida ko'p hollarda alohida obyekt yaratmaydi. Uning asosiy kuchi — bir xil asosiy tipdagi qiymatlarni semantik jihatdan ajratish: <code>UserId</code> va <code>OrderId</code> ikkalasi ham <code>Int</code> bo'lsa ham, ularni aralashtirib bo'lmaydi. Value class konstruktori xususiy bo'lishi va validatsiya bilan nomlangan zavod funksiyasini berishi mumkin."
    },
    {
     "type": "code",
     "title": "email.kt",
     "code": "@JvmInline\nvalue class UserId(val value: Int)\n\n@JvmInline\nvalue class Email private constructor(val value: String) {\n    companion object {\n        fun parse(xom: String): Email {\n            val tozalangan = xom.trim().lowercase()\n            require(\"@\" in tozalangan) { \"Email noto'g'ri\" }\n            return Email(tozalangan)\n        }\n    }\n}\n\nfun foydalanuvchiNomi(id: UserId) = \"Foydalanuvchi #${id.value}\"\n\nfun main() {\n    val id = UserId(42)\n    println(id)\n    println(foydalanuvchiNomi(id))\n    println(Email.parse(\"  AZIZA@NOLDAN.UZ \"))\n    val xato = runCatching { Email.parse(\"aziza\") }\n    println(xato.exceptionOrNull()?.message)\n}",
     "output": "UserId(value=42)\nFoydalanuvchi #42\nEmail(value=aziza@noldan.uz)\nEmail noto'g'ri"
    },
    {
     "type": "p",
     "html": "Value class JVM'da ko'p hollarda oddiy <code>Int</code> yoki <code>String</code> kabi saqlanadi, lekin nullable bo'lganda, generic tipga argument bo'lganda yoki interfeys ortiga yashirilganda “qutiga” (boxing) solinadi. Shuning uchun uning qiymati katta bo'lsa yoki tez-tez generic kolleksiyalarda ishlatilsa, allokatsiya qaytishi mumkin. Value class meros ololmaydi va faqat bitta orqa fon maydoniga ega bo'ladi."
    },
    {
     "type": "code",
     "title": "olchov.kt",
     "code": "@JvmInline\nvalue class Metr(val qiymat: Double)\n\n@JvmInline\nvalue class Sekund(val qiymat: Double)\n\nfun tezlik(masofa: Metr, vaqt: Sekund): Double = masofa.qiymat / vaqt.qiymat\n\ninline fun <reified T> qutidanChiqar(qiymat: T): String = \"${T::class.simpleName}: $qiymat\"\n\nfun main() {\n    val m = Metr(100.0)\n    val s = Sekund(8.0)\n    println(\"${tezlik(m, s)} m/s\")\n    println(qutidanChiqar(Metr(2.5)))\n    println(m == Metr(100.0))\n}",
     "output": "12.5 m/s\nMetr: Metr(qiymat=2.5)\ntrue"
    },
    {
     "type": "table",
     "head": [
      "Holat",
      "Natija"
     ],
     "rows": [
      [
       "Oddiy lokal o'zgaruvchi",
       "Odatda qutisiz"
      ],
      [
       "Nullable <code>Metr?</code>",
       "Boxing bo'ladi"
      ],
      [
       "<code>List&lt;Metr&gt;</code>",
       "Elementlar qutiga solinadi"
      ],
      [
       "Interfeys tipidagi o'zgaruvchi",
       "Boxing bo'ladi"
      ],
      [
       "<code>Metr(0.0)</code> tengligi",
       "<code>equals</code> orqali qiymat bo'yicha"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Typealias emas",
     "html": "Value class yangi runtime tipini yaratadi va tenglikni o'z qiymati bo'yicha aniqlaydi. <code>typealias Metr = Double</code> esa shunchaki nom almashtirish: u hech qanday himoya bermaydi. Validatsiya kerak bo'lsa — <code>init</code> yoki private konstruktor + factory ishlatiladi."
    }
   ],
   "quiz": [
    {
     "q": "Value class qaysi holatda albatta boxing bilan saqlanadi?",
     "options": [
      "Faqat lokal o'zgaruvchi sifatida",
      "Nullable tip yoki generic argument sifatida",
      "Faqat funksiya parametri sifatida",
      "Faqat companion object ichida"
     ],
     "answer": 1,
     "explain": "Nullable va generic kontekstlarda value classning aniq tipi saqlanishi uchun u obyektga o'raladi."
    },
    {
     "q": "Value class'ning typealias'dan asosiy farqi nimada?",
     "options": [
      "Typealias runtime'da qutisiz ishlaydi, value class esa har doim qutiladi",
      "Value class faqat String'ni o'rashi mumkin",
      "Typealias meros olishni taqiqlaydi",
      "Value class yangi tip va validatsiya beradi, typealias esa faqat nom"
     ],
     "answer": 3,
     "explain": "typealias mavjud tipga taxallus beradi; value class esa alohida tip bo'lib, konstruktor validatsiyasini saqlaydi."
    },
    {
     "q": "Value class bo'yicha qaysi cheklov to'g'ri?",
     "options": [
      "Bitta val orqa fon maydoni bo'ladi va klassdan meros olmaydi",
      "Ichida bir nechta var xossa bo'lishi mumkin",
      "Boshqa klassdan meros olishi mumkin",
      "Faqat JVM'da ishlamaydi"
     ],
     "answer": 0,
     "explain": "Value class bitta val xossaga tayanadi, sinflar ierarxiyasida qatnashmaydi, lekin interfeyslarni amalga oshirishi mumkin."
    }
   ]
  },
  {
   "id": 52,
   "title": "Typealias va domen tipidagi aliaslar",
   "minutes": 14,
   "blocks": [
    {
     "type": "p",
     "html": "<code>typealias</code> mavjud tipga o'qish uchun qulay nom beradi. U yangi tip yaratmaydi: kompilyator uchun <code>UserId</code> va <code>Long</code> bir xil. Shuning uchun typealias uzun generic imzolarni, lambda tiplarini va domen atamalarini soddalashtirish uchun ishlatiladi, lekin xavfsizlik kafolati sifatida qabul qilinmasligi kerak."
    },
    {
     "type": "code",
     "title": "aliaslar.kt",
     "code": "typealias UserId = Long\ntypealias UserMap = Map<UserId, String>\ntypealias Handler<T> = (T) -> Unit\n\nfun salomla(id: UserId, foydalanuvchilar: UserMap) {\n    val ism = foydalanuvchilar[id] ?: \"Noma'lum\"\n    println(\"$ism (#$id)\")\n}\n\nfun main() {\n    val foydalanuvchilar: UserMap = mapOf(1L to \"Aziza\", 2L to \"Bek\")\n    salomla(2L, foydalanuvchilar)\n    println(foydalanuvchilar.keys)\n    val handler: Handler<String> = { println(\"Salom, $it\") }\n    handler(\"Noldan\")\n}",
     "output": "Bek (#2)\n[1, 2]\nSalom, Noldan"
    },
    {
     "type": "p",
     "html": "Lambda tipiga nom berish, ayniqsa bir nechta parametrli funksiyalarda imzoni o'qishni yengillashtiradi. Quyidagi misolda <code>Predicate&lt;T&gt;</code> va <code>Mapper&lt;A, B&gt;</code> aliaslari kodni qisqartiradi. Diqqat: aliasni extension funksiyaga qo'llash asosiy tipga extension yozish bilan bir xil natija beradi."
    },
    {
     "type": "code",
     "title": "predikat.kt",
     "code": "typealias Predicate<T> = (T) -> Boolean\ntypealias Mapper<A, B> = (A) -> B\n\nfun <T> List<T>.filterBy(shart: Predicate<T>): List<T> = filter(shart)\n\nfun main() {\n    val sonlar = listOf(1, 2, 3, 4, 5)\n    val juft: Predicate<Int> = { it % 2 == 0 }\n    val matnga: Mapper<Int, String> = { \"son-$it\" }\n    println(sonlar.filterBy(juft))\n    println(sonlar.filterBy(juft).map(matnga))\n    val katta: Predicate<String> = { it.length > 4 }\n    println(listOf(\"Kotlin\", \"Ktor\", \"Compose\").filterBy(katta))\n}",
     "output": "[2, 4]\n[son-2, son-4]\n[Kotlin, Compose]"
    },
    {
     "type": "table",
     "head": [
      "Vosita",
      "Yangi tipmi?",
      "Validatsiya",
      "Runtime farqi"
     ],
     "rows": [
      [
       "<code>typealias</code>",
       "Yo'q",
       "Yo'q",
       "Yo'q"
      ],
      [
       "Value class",
       "Ha",
       "Ha",
       "Odatda qutisiz"
      ],
      [
       "<code>data class</code>",
       "Ha",
       "Ha",
       "To'liq obyekt"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Aliasni suiiste'mol qilmang",
     "html": "<code>typealias Milliliters = Int</code> va <code>typealias Grams = Int</code> bir-biridan himoyalanmaydi: funksiya ikkalasini ham qabul qiladi. Bu xatoni runtime'da topish qiyin. Agar birliklar aralashishi mumkin bo'lsa, value class bilan alohida tip yarating. Public API'da aliasdan foydalansangiz, IDE ba'zan asosiy tipni ko'rsatadi — hujjatda kelishuvni yozib qo'ying."
    }
   ],
   "quiz": [
    {
     "q": "<code>typealias</code> qanday imkoniyat beradi?",
     "options": [
      "Yangi runtime tipini yaratadi",
      "Konstruktorda validatsiya qo'shadi",
      "Mavjud tip uchun qisqa nom beradi",
      "Nullable tipni avtomatik xavfsiz qiladi"
     ],
     "answer": 2,
     "explain": "typealias faqat nomlash vositasidir; u yangi tip, meros yoki runtime tekshiruvi yaratmaydi."
    },
    {
     "q": "Qaysi vazifa uchun typealias mos?",
     "options": [
      "Uzun lambda imzosiga o'qiladigan nom berish",
      "Millilitr va grammni bir-biridan himoyalash",
      "Email formatini tekshirish",
      "Klassga yangi metod qo'shish"
     ],
     "answer": 0,
     "explain": "Lambda yoki generic imzolarni nomlash typealias'ning eng foydali qo'llanishi; validatsiya va tip himoyasi boshqa vositalar bilan hal qilinadi."
    },
    {
     "q": "<code>typealias Milliliters = Int</code> haqida qaysi gap to'g'ri?",
     "options": [
      "Millilitrni grammdan ajratib turuvchi yangi tip yaratadi",
      "Faqat JVM bo'lmagan platformalarda ishlaydi",
      "Avtomatik ravishda value class'ga aylanadi",
      "Aslida Int bo'lgani uchun boshqa Int qiymatlar bilan aralashishi mumkin"
     ],
     "answer": 3,
     "explain": "Alias yangi tip emas; kompilyator uchun Milliliters ham, Grams ham Int. Himoya kerak bo'lsa value class ishlating."
    }
   ]
  },
  {
   "id": 53,
   "title": "Reified generics va inline API dizayni",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "JVM'da generic tip argumentlari odatda runtime'da o'chiriladi (type erasure). Shu sababli oddiy funksiya ichida <code>T::class</code> yoki <code>x is T</code> yozib bo'lmaydi. <code>inline</code> funksiya bilan birga <code>reified</code> ishlatilsa, kompilyator tip argumentini kodga “tikib” qo'yadi va bu amallar mumkin bo'ladi. Bu imkoniyat <code>filterIsInstance</code>, <code>enumValues</code> kabi stdlib API'larida keng qo'llanadi."
    },
    {
     "type": "code",
     "title": "reified.kt",
     "code": "inline fun <reified T> List<*>.filtr(): List<T> = filterIsInstance<T>()\n\ninline fun <reified T : Any> Any.kabi(): T = this as T\n\ninline fun <reified T> boshQiymat(): T? = null\n\nfun main() {\n    val aralash: List<Any> = listOf(1, \"ikki\", 3.0, 4)\n    println(aralash.filtr<Int>())\n    println(aralash.filtr<String>())\n    val qiymat: Any = \"Kotlin\"\n    println(qiymat.kabi<String>().uppercase())\n    println(boshQiymat<String>() ?: \"null\")\n}",
     "output": "[1, 4]\n[ikki]\nKOTLIN\nnull"
    },
    {
     "type": "p",
     "html": "Reified tipni kolleksiya yaratish, enum ro'yxatini olish yoki DI konteynerida tur bo'yicha registratsiya qilishda ishlatish mumkin. Lekin reified parametrni klass darajasida saqlab bo'lmaydi: <code>class Repo&lt;reified T&gt;</code> noto'g'ri. Bunday holatda <code>KClass&lt;T&gt;</code> yoki <code>typeOf&lt;T&gt;()</code> kabi runtime ma'lumotni alohida uzatish kerak."
    },
    {
     "type": "code",
     "title": "enumlar.kt",
     "code": "inline fun <reified T> royxat(vararg qiymatlar: T): List<T> = qiymatlar.toList()\n\ninline fun <reified T : Enum<T>> nomlar(): List<String> =\n    enumValues<T>().map { it.name }\n\nenum class Rang { QIZIL, YASHIL, KOK }\n\nclass Konteyner {\n    private val ombor = mutableMapOf<String, Any>()\n\n    inline fun <reified T : Any> qoy(qiymat: T) {\n        ombor[T::class.qualifiedName!!] = qiymat\n    }\n\n    inline fun <reified T : Any> ol(): T? =\n        ombor[T::class.qualifiedName!!] as? T\n}\n\nfun main() {\n    println(royxat(\"a\", \"b\", \"c\"))\n    println(nomlar<Rang>())\n    val k = Konteyner()\n    k.qoy(\"Kotlin\")\n    println(k.ol<String>())\n}",
     "output": "[a, b, c]\n[QIZIL, YASHIL, KOK]\nKotlin"
    },
    {
     "type": "table",
     "head": [
      "Imkoniyat",
      "Oddiy generic",
      "reified inline"
     ],
     "rows": [
      [
       "<code>is T</code>",
       "Mumkin emas",
       "Mumkin"
      ],
      [
       "<code>T::class</code>",
       "Mumkin emas",
       "Mumkin"
      ],
      [
       "<code>enumValues&lt;T&gt;()</code>",
       "Mumkin emas",
       "Mumkin"
      ],
      [
       "Klass tipida saqlash",
       "Mumkin",
       "Mumkin emas"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Public inline API",
     "html": "Public inline funksiya tanasi chaqiruvchi modulda kompilyatsiya qilinadi. Shu sababli uning ichida ishlatilgan <code>internal</code> a'zolar <code>@PublishedApi</code> bilan belgilanishi kerak. Reified funksiya imzosini keyinchalik o'zgartirish binary moslikni buzishi mumkin — kutubxona API'sida ehtiyot bo'ling."
    }
   ],
   "quiz": [
    {
     "q": "<code>reified</code> tip parametri qayerda ishlatilishi mumkin?",
     "options": [
      "Har qanday generic klassda",
      "Faqat interfeys metodida",
      "Faqat suspend funksiyada",
      "Faqat inline funksiyada"
     ],
     "answer": 3,
     "explain": "reified uchun tip argumenti chaqiruv joyida ma'lum bo'lishi kerak; shuning uchun funksiya inline bo'lishi shart."
    },
    {
     "q": "Nega oddiy generic funksiyada <code>x is T</code> yozib bo'lmaydi?",
     "options": [
      "Kotlin `is` operatorini qo'llamaydi",
      "JVM generic tipni runtime'da o'chiradi",
      "T faqat nullable bo'ladi",
      "Bunday tekshiruv faqat Java'da mavjud"
     ],
     "answer": 1,
     "explain": "Type erasure tufayli runtime'da T haqida ma'lumot qolmaydi; reified inline bu ma'lumotni kodga joylaydi."
    },
    {
     "q": "Reified funksiyaning qaysi cheklovi mavjud?",
     "options": [
      "U hech qanday kolleksiya bilan ishlamaydi",
      "U faqat `String` tipi uchun ishlaydi",
      "Uni klass darajasidagi tip parametri sifatida saqlab bo'lmaydi",
      "U suspension funksiyalarda chaqirilmaydi"
     ],
     "answer": 2,
     "explain": "reified faqat inline funksiya doirasida ma'lum; klassning generic parametriga aylantirib bo'lmaydi."
    }
   ]
  },
  {
   "id": 54,
   "title": "Contracts: kompilyatorga niyatingizni ayting",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Kontrakt funksiyaning kompilyatorga ma'lum bo'lgan xatti-harakatini e'lon qiladi: “bu funksiya normal qaytsa, shart bajarilgan bo'ladi” yoki “lambda aynan bir marta chaqiriladi”. Shu tufayli <code>require(x != null)</code> dan keyin kompilyator <code>x</code> ni smart cast qiladi. Custom kontraktlar <code>kotlin.contracts</code> DSL'i bilan yoziladi va odatda <code>@OptIn(ExperimentalContracts::class)</code> talab qiladi."
    },
    {
     "type": "code",
     "title": "shart.kt",
     "code": "import kotlin.contracts.ExperimentalContracts\nimport kotlin.contracts.contract\n\n@OptIn(ExperimentalContracts::class)\nfun talabIsm(qiymat: String?) {\n    contract { returns() implies (qiymat != null) }\n    if (qiymat == null) throw IllegalArgumentException(\"ism null\")\n}\n\nfun salomla(ism: String?) {\n    talabIsm(ism)\n    println(ism.length)\n}\n\nfun main() {\n    salomla(\"Aziza\")\n    val xato = runCatching { salomla(null) }\n    println(xato.exceptionOrNull()?.message)\n}",
     "output": "5\nism null"
    },
    {
     "type": "p",
     "html": "<code>callsInPlace</code> kontrakti lambda qancha marta chaqirilishini bildiradi. <code>EXACTLY_ONCE</code> bo'lsa, kompilyator lambda ichida <code>val</code> ni bir marta tayinlashni “aniq bajarilgan” deb hisoblaydi. Bu stdlib'dagi <code>run</code>, <code>with</code>, <code>buildList</code> kabi funksiyalarning qulayligi asosida yotadi."
    },
    {
     "type": "code",
     "title": "birmarta.kt",
     "code": "import kotlin.contracts.ExperimentalContracts\nimport kotlin.contracts.InvocationKind\nimport kotlin.contracts.contract\n\n@OptIn(ExperimentalContracts::class)\ninline fun birMarta(blok: () -> Unit) {\n    contract { callsInPlace(blok, InvocationKind.EXACTLY_ONCE) }\n    blok()\n}\n\nfun main() {\n    val narx: Int\n    birMarta { narx = 42 }\n    println(narx)\n\n    val royxat = buildList {\n        add(\"Kotlin\")\n        add(\"Ktor\")\n        add(\"Compose\")\n    }\n    println(royxat)\n    println(royxat.size)\n}",
     "output": "42\n[Kotlin, Ktor, Compose]\n3"
    },
    {
     "type": "table",
     "head": [
      "Kontrakt",
      "Ma'nosi"
     ],
     "rows": [
      [
       "<code>returns() implies (x != null)</code>",
       "Normal qaytsa, x null emas"
      ],
      [
       "<code>returns(false) implies (...)</code>",
       "false qaytsa, shart bajarilgan"
      ],
      [
       "<code>callsInPlace(blok, EXACTLY_ONCE)</code>",
       "Lambda aynan bir marta chaqiriladi"
      ],
      [
       "<code>callsInPlace(blok, AT_LEAST_ONCE)</code>",
       "Lambda kamida bir marta chaqiriladi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Kontrakt — va'da",
     "html": "Kontrakt runtime'da tekshirilmaydi; u faqat kompilyatorga ma'lumot beradi. Agar funksiya kontraktni buzsa (masalan, “bir marta” deb aytib, lambda'ni ikki marta chaqirsa), dastur noto'g'ri ishlashi mumkin. Kontraktni faqat haqiqatan kafolatlay oladigan funksiyalarga yozing."
    }
   ],
   "quiz": [
    {
     "q": "Custom kontraktning vazifasi nima?",
     "options": [
      "Kompilyatorga funksiya xatti-harakati haqida ma'lumot berish",
      "Runtime'da qo'shimcha tekshiruv qo'shish",
      "Istisnolarni avtomatik ushlash",
      "Funksiyani suspendga aylantirish"
     ],
     "answer": 0,
     "explain": "Kontraktlar kompilyator tahlili uchun ma'lumot beradi; ular bajariladigan kod emas."
    },
    {
     "q": "<code>contract { callsInPlace(blok, InvocationKind.EXACTLY_ONCE) }</code> qanday imkoniyat beradi?",
     "options": [
      "Lambda'ni ikki marta chaqiradi",
      "Lambda'ni alohida thread'da bajaradi",
      "Nullable qiymatni majburiy qiladi",
      "Lambda ichida val'ni bir marta tayinlab, keyin o'qishga ruxsat beradi"
     ],
     "answer": 3,
     "explain": "EXACTLY_ONCE kompilyatorga tayinlash aniq bajarilishini bildiradi, shuning uchun val'ni lambda ichida boshlash mumkin."
    },
    {
     "q": "<code>returns() implies (qiymat != null)</code> kontraktidan keyin kompilyator nima qiladi?",
     "options": [
      "Qiymatni avtomatik `lateinit` qiladi",
      "Runtime'da NullPointerException tashlaydi",
      "Normal qaytishda qiymat null emasligini hisobga oladi",
      "Qiymatni String'ga aylantiradi"
     ],
     "answer": 2,
     "explain": "Kontrakt normal qaytish shartini ifodalaydi, shu asosda smart cast qo'llanadi. Tekshiruvning o'zi funksiya tanasida bajarilishi kerak."
    }
   ]
  },
  {
   "id": 55,
   "title": "Generics chuqur: cheklovlar, where va star-projection",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Generic funksiyaga bir nechta yuqori chegara qo'yish uchun <code>where</code> ishlatiladi. Bu usul bir vaqtning o'zida bir nechta interfeys talab qiladigan algoritmlarda imzoni aniq qiladi. <code>List&lt;*&gt;</code> kabi star-projection esa tip argumentini bilmagan holda kolleksiyani xavfsiz o'qish imkonini beradi: elementlar <code>Any?</code> sifatida ko'rinadi, lekin yozish taqiqlanadi."
    },
    {
     "type": "code",
     "title": "chegaralar.kt",
     "code": "interface Identifiable { val id: Long }\ninterface Named { val name: String }\n\nfun <T> engKatta(a: T, b: T): T where T : Comparable<T> =\n    if (a >= b) a else b\n\nfun <T> malumot(x: T): String where T : Identifiable, T : Named =\n    \"#${x.id}: ${x.name}\"\n\ndata class Mahsulot(\n    override val id: Long,\n    override val name: String,\n    val narx: Int\n) : Identifiable, Named\n\nfun main() {\n    println(engKatta(12, 31))\n    println(engKatta(\"olma\", \"anor\"))\n    println(malumot(Mahsulot(7, \"Kotlin kitobi\", 120000)))\n}",
     "output": "31\nolma\n#7: Kotlin kitobi"
    },
    {
     "type": "p",
     "html": "Star-projection o'qish uchun xavfsiz, yozish uchun emas. <code>List&lt;*&gt;</code> dan element olib, uni <code>filterIsInstance</code> yoki <code>is</code> bilan tekshirish mumkin. <code>MutableList&lt;*&gt;</code> ga esa hech narsa qo'shib bo'lmaydi, chunki kompilyator qaysi tip xavfsiz ekanini bilmaydi. Bu cheklov generic kolleksiyalarni API chegarasida xavfsiz saqlashga yordam beradi."
    },
    {
     "type": "code",
     "title": "projection.kt",
     "code": "fun jami(sonlar: List<*>): Int =\n    sonlar.filterIsInstance<Int>().sum()\n\nfun birinchi(map: Map<*, *>): Any? =\n    map.entries.firstOrNull()?.value\n\nfun main() {\n    val aralash: List<Any> = listOf(1, 2, \"uch\", 4)\n    println(jami(aralash))\n    val sozlamalar: Map<String, Int> = mapOf(\"port\" to 8080)\n    println(birinchi(sozlamalar))\n    val royxat: MutableList<*> = mutableListOf(1, 2, 3)\n    println(royxat.size)\n    // royxat.add(4) — kompilyatsiya xatosi\n}",
     "output": "7\n8080\n3"
    },
    {
     "type": "table",
     "head": [
      "Yozuv",
      "O'qish",
      "Yozish"
     ],
     "rows": [
      [
       "<code>List&lt;*&gt;</code>",
       "<code>Any?</code>",
       "Yo'q"
      ],
      [
       "<code>MutableList&lt;*&gt;</code>",
       "<code>Any?</code>",
       "Taqiqlangan"
      ],
      [
       "<code>Map&lt;*, *&gt;</code>",
       "kalit/qiymat <code>Any?</code>",
       "Taqiqlangan"
      ],
      [
       "<code>Comparable&lt;*&gt;</code>",
       "cheklangan",
       "Taqiqlangan"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "`where` yoki bitta chegara",
     "html": "Bitta chegara uchun <code>&lt;T : Comparable&lt;T&gt;&gt;</code> yetarli. Ikki va undan ortiq chegarada <code>where</code> o'qishni yaxshilaydi va xatoni aniq ko'rsatadi. Chegaralar orasida vergul emas, yangi qator yoki bo'sh joy ishlatiladi; klass tip parametrlari uchun ham xuddi shu sintaksis amal qiladi."
    }
   ],
   "quiz": [
    {
     "q": "Bir nechta yuqori chegara qo'shish uchun qaysi sintaksis ishlatiladi?",
     "options": [
      "<code>&lt;T : A, B&gt;</code>",
      "<code>&lt;T : A &amp; B&gt;</code>",
      "<code>&lt;T&gt; where T : A, T : B</code>",
      "<code>&lt;T extends A, B&gt;</code>"
     ],
     "answer": 2,
     "explain": "Kotlin'da bir nechta chegara <code>where T : A, T : B</code> ko'rinishida yoziladi; vergulli ro'yxat tip parametridan keyin kelmaydi."
    },
    {
     "q": "<code>List&lt;*&gt;</code> dan olingan elementning kompilyator ma'lum tipi qanday?",
     "options": [
      "<code>Nothing</code>",
      "<code>Any?</code>",
      "<code>Any</code>",
      "<code>T</code>"
     ],
     "answer": 1,
     "explain": "Star-projection tip argumentini noma'lum deb hisoblaydi, shuning uchun o'qilgan qiymat <code>Any?</code> bo'ladi."
    },
    {
     "q": "<code>MutableList&lt;*&gt;</code> uchun qaysi amal ruxsat etilgan?",
     "options": [
      "Unga istalgan qiymat qo'shish",
      "Undan elementni olib, aniq tipga cast qilmasdan ishlatish",
      "Uni <code>MutableList&lt;String&gt;</code> ga tayinlash",
      "Uning <code>size</code> xossasini o'qish"
     ],
     "answer": 3,
     "explain": "O'qish va o'lcham kabi tipga bog'liq bo'lmagan amallar mumkin; yozish esa tip noma'lumligi sababli taqiqlangan."
    }
   ]
  },
  {
   "id": 56,
   "title": "Variance: in, out va foydalanish joyidagi variance",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Variance generic tipning kichik tipdan katta tipga qanday moslashishini belgilaydi. <code>out T</code> — kovariant: <code>Manba&lt;Int&gt;</code> ni <code>Manba&lt;Number&gt;</code> o'rnida ishlatish mumkin, chunki u faqat T qaytaradi. <code>in T</code> — kontravariant: <code>Qabul&lt;Any&gt;</code> ni <code>Qabul&lt;Int&gt;</code> o'rnida ishlatish mumkin, chunki u faqat T qabul qiladi. Bu qoida “producer out, consumer in” deb eslab qolinadi."
    },
    {
     "type": "code",
     "title": "variance.kt",
     "code": "interface Manba<out T> { fun olish(): T }\ninterface Qabul<in T> { fun qoyish(qiymat: T) }\n\nclass Raqamlar : Manba<Int> {\n    override fun olish() = 42\n}\n\nclass ChopEtuvchi : Qabul<Any> {\n    override fun qoyish(qiymat: Any) = println(\"qabul: $qiymat\")\n}\n\nfun main() {\n    val manba: Manba<Number> = Raqamlar()\n    println(manba.olish())\n    val qabul: Qabul<Int> = ChopEtuvchi()\n    qabul.qoyish(7)\n}",
     "output": "42\nqabul: 7"
    },
    {
     "type": "p",
     "html": "Ba'zan tipni faqat bitta funksiyada xavfsiz o'zgartirish kerak bo'ladi. U holda declaration-site variance yetarli emas va foydalanish joyidagi projection qo'llanadi: <code>List&lt;Quti&lt;out Any&gt;&gt;</code> yoki <code>MutableList&lt;in String&gt;</code>. Bu Java'dagi wildcard'larga o'xshaydi, lekin Kotlin'da ancha o'qishli yoziladi."
    },
    {
     "type": "code",
     "title": "use-site.kt",
     "code": "data class Quti<T>(val qiymat: T)\n\nfun qutilarniChop(qutilar: List<Quti<out Any>>) {\n    qutilar.forEach { println(it.qiymat) }\n}\n\nfun <T> nusxa(doc: MutableList<in T>, manba: List<T>) {\n    manba.forEach { doc.add(it) }\n}\n\nfun main() {\n    val matnlar: List<Quti<String>> = listOf(Quti(\"matn\"))\n    val sonlar: List<Quti<Int>> = listOf(Quti(5))\n    qutilarniChop(matnlar)\n    qutilarniChop(sonlar)\n    val any = mutableListOf<Any>()\n    nusxa(any, listOf(\"x\", \"y\"))\n    println(any)\n}",
     "output": "matn\n5\n[x, y]"
    },
    {
     "type": "table",
     "head": [
      "Yozuv",
      "Ma'nosi",
      "Xavfsiz amal"
     ],
     "rows": [
      [
       "<code>out T</code>",
       "Faqat qaytaradi",
       "T o'qish"
      ],
      [
       "<code>in T</code>",
       "Faqat qabul qiladi",
       "T yozish"
      ],
      [
       "<code>List&lt;out Any&gt;</code>",
       "Use-site kovariatsiya",
       "O'qish"
      ],
      [
       "<code>MutableList&lt;in String&gt;</code>",
       "Use-site kontravariatsiya",
       "String qo'shish"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Massivlar invariant",
     "html": "<code>Array&lt;String&gt;</code> ni <code>Array&lt;Any&gt;</code> ga tayinlab bo'lmaydi — massivlar invariant. Bu runtime'da <code>ArrayStoreException</code> ning oldini oladi. Kolleksiyalar uchun <code>List</code> kovariant, <code>MutableList</code> esa invariant. <code>@UnsafeVariance</code> faqat kutubxona muallifi juda ishonchli bo'lsa ishlatiladi."
    }
   ],
   "quiz": [
    {
     "q": "<code>interface Manba&lt;out T&gt;</code> da T qanday ishlatilishi mumkin?",
     "options": [
      "Faqat funksiya parametri sifatida",
      "Ham parametr, ham qaytish tipi sifatida",
      "Faqat xossa setterida",
      "Faqat qaytish tipi sifatida"
     ],
     "answer": 3,
     "explain": "out kovariantlikni beradi, shuning uchun T faqat “chiqish” joyida — qaytish tipida ishlatiladi."
    },
    {
     "q": "<code>Qabul&lt;Any&gt;</code> ni <code>Qabul&lt;Int&gt;</code> o'rnida ishlatish mumkin bo'lsa, Qabul qanday variance'ga ega?",
     "options": [
      "Kontravariant (<code>in</code>)",
      "Kovariant (<code>out</code>)",
      "Invariant",
      "Star-projected"
     ],
     "answer": 0,
     "explain": "Kontravariant tip kattaroq parametrni qabul qilishi mumkin: Any qabul qiluvchi Int qabul qiluvchi vazifasini bajaradi."
    },
    {
     "q": "Nega <code>Array&lt;String&gt;</code> ni <code>Array&lt;Any&gt;</code> ga tayinlab bo'lmaydi?",
     "options": [
      "Massivlar faqat primitiv tiplarni saqlaydi",
      "Massivlar invariant, aks holda noto'g'ri tip yozilishi mumkin",
      "Kotlin'da massivlar umuman yo'q",
      "Array har doim nullable"
     ],
     "answer": 1,
     "explain": "Massivlar invariant bo'lib, runtime'dagi tip xavfsizligini saqlaydi; kovariant kolleksiya uchun List ishlatiladi."
    }
   ]
  },
  {
   "id": 57,
   "title": "Delegatsiya: by bilan kompozitsiya",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Kotlin interfeys metodlarini boshqa obyektga <code>by</code> orqali topshirish imkonini beradi. Bu meros olishdan ko'ra moslashuvchan: sinf ichida bir nechta interfeysni turli implementatsiyalarga ulash, ba'zi metodlarni qayta yozish va xatti-harakatni bezash mumkin. Delegatsiya “composition over inheritance” tamoyilining amaliy ko'rinishi."
    },
    {
     "type": "code",
     "title": "logli.kt",
     "code": "interface Hisoblagich {\n    fun oshir()\n    fun qiymat(): Int\n}\n\nclass Asosiy : Hisoblagich {\n    private var n = 0\n    override fun oshir() { n++ }\n    override fun qiymat() = n\n}\n\nclass Logli(private val asosiy: Hisoblagich) : Hisoblagich by asosiy {\n    override fun oshir() {\n        println(\"oldin: ${asosiy.qiymat()}\")\n        asosiy.oshir()\n        println(\"keyin: ${asosiy.qiymat()}\")\n    }\n}\n\nfun main() {\n    val c = Logli(Asosiy())\n    c.oshir()\n    c.oshir()\n    println(c.qiymat())\n}",
     "output": "oldin: 0\nkeyin: 1\noldin: 1\nkeyin: 2\n2"
    },
    {
     "type": "p",
     "html": "Bir sinf bir nechta interfeysni delegatsiya qilishi mumkin. Qayta yozilgan metod delegatnikini to'liq almashtiradi; qolgan metodlar avtomatik uzatiladi. Bu xususiyat repository, logger, cache kabi ko'ndalang kesimlarni (cross-cutting concerns) asosiy biznes kodidan ajratishda juda qulay."
    },
    {
     "type": "code",
     "title": "xizmat.kt",
     "code": "interface Ombor { fun saqla(x: String): Boolean }\ninterface Hisobot { fun chop() }\n\nclass XotiraOmbor : Ombor {\n    private val qatorlar = mutableListOf<String>()\n    override fun saqla(x: String): Boolean = qatorlar.add(x)\n    override fun toString() = qatorlar.toString()\n}\n\nclass KonsolHisobot : Hisobot {\n    override fun chop() = println(\"hisobot tayyor\")\n}\n\nclass Xizmat(\n    ombor: Ombor,\n    hisobot: Hisobot\n) : Ombor by ombor, Hisobot by hisobot\n\nfun main() {\n    val ombor = XotiraOmbor()\n    val xizmat = Xizmat(ombor, KonsolHisobot())\n    xizmat.saqla(\"Kotlin\")\n    xizmat.saqla(\"Ktor\")\n    xizmat.chop()\n    println(ombor)\n    println(xizmat is Ombor)\n}",
     "output": "hisobot tayyor\n[Kotlin, Ktor]\ntrue"
    },
    {
     "type": "table",
     "head": [
      "Konstruksiya",
      "Vazifasi"
     ],
     "rows": [
      [
       "<code>: Ombor by ombor</code>",
       "Interfeys metodlarini obyektga uzatadi"
      ],
      [
       "<code>override fun chop()</code>",
       "Delegat metodini almashtiradi"
      ],
      [
       "Bir nechta <code>by</code>",
       "Bir nechta interfeysni birlashtiradi"
      ],
      [
       "<code>by lazy</code>",
       "Xossani kechiktirib hisoblaydi"
      ],
      [
       "<code>by map</code>",
       "Map qiymatlarini xossaga bog'laydi"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Delegatni almashtirish",
     "html": "Delegatsiya <code>val</code> yoki <code>var</code> xossaga ham qo'llanadi. Interfeys delegatsiyasida delegat konstruktorda beriladi va odatda <code>private val</code> qilib saqlanadi. Agar delegat metodini butunlay yashirish kerak bo'lsa, uni <code>final override</code> qilib qo'ying; meros olishda bu metodni yana o'zgartirib bo'lmaydi."
    }
   ],
   "quiz": [
    {
     "q": "<code>class Xizmat(o: Ombor) : Ombor by o</code> nimani ta'minlaydi?",
     "options": [
      "Ombor metodlarini o'z ichida qayta yozishni talab qiladi",
      "Ombor metodlarini o obyektiga avtomatik uzatadi",
      "Ombor'ni interfeysdan klassga aylantiradi",
      "Har bir chaqiruvda yangi Ombor yaratadi"
     ],
     "answer": 1,
     "explain": "by delegatsiyasi interfeys a'zolarini berilgan obyektga yo'naltiradi; faqat kerakli metodlar override qilinadi."
    },
    {
     "q": "Delegatsiya qilingan metodni sinf ichida qayta yozsangiz nima bo'ladi?",
     "options": [
      "Kompilyatsiya xatosi chiqadi",
      "Ikkala metod ham chaqiriladi",
      "Override versiyasi ishlaydi, delegat metodi chaqirilmaydi",
      "Delegat avtomatik o'chiriladi"
     ],
     "answer": 2,
     "explain": "Aniq yozilgan override delegatnikini almashtiradi; delegat faqat override qilinmagan a'zolar uchun ishlatiladi."
    },
    {
     "q": "Delegatsiya qaysi dizayn tamoyiliga ko'proq mos keladi?",
     "options": [
      "Kompozitsiya orqali xatti-harakatni yig'ish",
      "Meros ierarxiyasini chuqurlashtirish",
      "Global holatdan foydalanish",
      "Barcha metodlarni bitta sinfga jamlash"
     ],
     "answer": 0,
     "explain": "by kompozitsiyani qulay sintaksis bilan ta'minlaydi va chuqur meros ierarxiyasidan qochishga yordam beradi."
    }
   ]
  },
  {
   "id": 58,
   "title": "Xossa delegatsiyasi: observable, vetoable va custom delegate",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Xossa delegatsiyasi o'qish va yozishni alohida obyektga topshiradi. <code>Delegates.observable</code> qiymat o'zgargandan keyin callback chaqiradi, <code>Delegates.vetoable</code> esa o'zgarishdan oldin qaror qabul qiladi va <code>false</code> qaytarsa yozishni bekor qiladi. Bu vositalar validatsiya, audit va reaktiv xatti-harakat uchun qulay."
    },
    {
     "type": "code",
     "title": "kuzatuv.kt",
     "code": "import kotlin.properties.Delegates\n\nclass Profil {\n    var yosh: Int by Delegates.vetoable(0) { _, eski, yangi ->\n        yangi >= 0 && yangi <= 120\n    }\n\n    var ism: String by Delegates.observable(\"Mehmon\") { _, eski, yangi ->\n        println(\"ism: $eski -> $yangi\")\n    }\n}\n\nfun main() {\n    val p = Profil()\n    p.yosh = 25\n    p.yosh = -5\n    println(p.yosh)\n    p.ism = \"Aziza\"\n    p.ism = \"Bek\"\n}",
     "output": "25\nism: Mehmon -> Aziza\nism: Aziza -> Bek"
    },
    {
     "type": "p",
     "html": "Murakkabroq mantiq uchun o'z delegatingizni yozish mumkin. <code>ReadWriteProperty&lt;Any?, T&gt;</code> interfeysi <code>getValue</code> va <code>setValue</code> metodlarini talab qiladi. <code>KProperty</code> orqali xossa nomini olish, log yozish yoki keshlash mumkin. Bu pattern Android'da SharedPreferences yoki konfiguratsiya xossalarini o'rashda tez-tez uchraydi."
    },
    {
     "type": "code",
     "title": "custom.kt",
     "code": "import kotlin.properties.ReadWriteProperty\nimport kotlin.reflect.KProperty\n\nclass Keshlangan<T>(boshlangich: T) : ReadWriteProperty<Any?, T> {\n    private var qiymat = boshlangich\n\n    override fun getValue(thisRef: Any?, property: KProperty<*>): T {\n        println(\"o'qildi: ${property.name}\")\n        return qiymat\n    }\n\n    override fun setValue(thisRef: Any?, property: KProperty<*>, value: T) {\n        println(\"yozildi: ${property.name} = $value\")\n        qiymat = value\n    }\n}\n\nclass Sozlama {\n    var port: Int by Keshlangan(8080)\n}\n\nfun main() {\n    val s = Sozlama()\n    println(s.port)\n    s.port = 9090\n    println(s.port)\n}",
     "output": "o'qildi: port\n8080\nyozildi: port = 9090\no'qildi: port\n9090"
    },
    {
     "type": "table",
     "head": [
      "Delegat",
      "Qachon ishlaydi",
      "Natija"
     ],
     "rows": [
      [
       "<code>lazy</code>",
       "Birinchi o'qishda",
       "Keyingi o'qishlar keshlanadi"
      ],
      [
       "<code>observable</code>",
       "Yozgandan keyin",
       "Callback chaqiriladi"
      ],
      [
       "<code>vetoable</code>",
       "Yozishdan oldin",
       "<code>false</code> — bekor qiladi"
      ],
      [
       "<code>ReadWriteProperty</code>",
       "Har o'qish/yozishda",
       "O'z mantigingiz"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Thread safety",
     "html": "<code>by lazy</code> sukut bo'yicha <code>SYNCHRONIZED</code> rejimida ishlaydi; <code>LazyThreadSafetyMode.NONE</code> tezroq, lekin faqat bitta thread uchun xavfsiz. <code>observable</code> va <code>vetoable</code> thread-safe emas: parallel yozish bo'lsa, tashqi sinxronizatsiya yoki atomik yondashuv kerak."
    }
   ],
   "quiz": [
    {
     "q": "<code>Delegates.vetoable</code> qachon callback chaqiradi?",
     "options": [
      "Qiymat yozilishidan oldin va qaytgan Boolean qaror qiladi",
      "Qiymat yozilgandan keyin",
      "Faqat xossa o'qilganda",
      "Faqat obyekt yaratilganda"
     ],
     "answer": 0,
     "explain": "vetoable yozishdan oldin ishlaydi; <code>false</code> qaytsa, yangi qiymat saqlanmaydi."
    },
    {
     "q": "<code>Delegates.observable</code> callback'i qachon bajariladi?",
     "options": [
      "Yozishdan oldin, bekor qilish uchun",
      "Faqat dastlabki qiymat berilganda",
      "Yangi qiymat allaqachon o'rnatilgandan keyin",
      "Faqat setter xato berganda"
     ],
     "answer": 2,
     "explain": "observable kuzatuv uchun ishlatiladi va qiymat o'zgargach eski/yangi qiymatlar bilan chaqiriladi."
    },
    {
     "q": "<code>ReadWriteProperty</code> qaysi ikki metodni amalga oshirishni talab qiladi?",
     "options": [
      "<code>get</code> va <code>set</code>",
      "<code>getValue</code> va <code>setValue</code>",
      "<code>read</code> va <code>write</code>",
      "<code>invoke</code> va <code>call</code>"
     ],
     "answer": 1,
     "explain": "Delegat interfeysi aynan <code>getValue(thisRef, property)</code> va <code>setValue(thisRef, property, value)</code> metodlarini talab qiladi."
    }
   ]
  },
  {
   "id": 59,
   "title": "Sealed ierarxiyalar va algebraik ma'lumot tiplari",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Sealed ierarxiya mumkin bo'lgan variantlarni yopiq to'plamda ifodalaydi. <code>sealed interface</code> va <code>sealed class</code> avlodlari bir modul va paketda e'lon qilinadi; shu sababli <code>when</code> barcha variantlarni qamrab olsa, <code>else</code> talab qilinmaydi. Bu holat mashinasi, natija tipi va UI holatlarini modellashtirishda xatolarni kompilyatsiya vaqtida ushlaydi."
    },
    {
     "type": "code",
     "title": "natija.kt",
     "code": "sealed interface Natija<out T> {\n    data class Muvaffaqiyat<T>(val qiymat: T) : Natija<T>\n    data class Xato(val kod: Int, val xabar: String) : Natija<Nothing>\n    data object Yuklanmoqda : Natija<Nothing>\n}\n\nfun <T> chop(natija: Natija<T>): String = when (natija) {\n    is Natija.Muvaffaqiyat<*> -> \"OK: ${natija.qiymat}\"\n    is Natija.Xato -> \"Xato ${natija.kod}: ${natija.xabar}\"\n    Natija.Yuklanmoqda -> \"...\"\n}\n\nfun main() {\n    println(chop(Natija.Muvaffaqiyat(42)))\n    println(chop(Natija.Xato(404, \"topilmadi\")))\n    println(chop(Natija.Yuklanmoqda))\n}",
     "output": "OK: 42\nXato 404: topilmadi\n..."
    },
    {
     "type": "p",
     "html": "Sealed ierarxiyada har bir variant o'z ma'lumotini olib yuradi — bu algebraik ma'lumot tipi (ADT) deyiladi. <code>data object</code> yagona nusxa bo'lishi kerak bo'lgan holatlar uchun mos: u <code>equals</code>, <code>hashCode</code> va o'qishli <code>toString</code> beradi. Enum'dan farqli o'laroq, sealed variantlar parametrlarga ega bo'lishi va turli shakllarda bo'lishi mumkin."
    },
    {
     "type": "code",
     "title": "hodisa.kt",
     "code": "sealed class Hodisa {\n    data class Bosildi(val x: Int, val y: Int) : Hodisa()\n    data class MatnKiritildi(val matn: String) : Hodisa()\n    data object Tozalandi : Hodisa()\n}\n\nfun izohla(hodisa: Hodisa): String = when (hodisa) {\n    is Hodisa.Bosildi -> \"bosish ${hodisa.x},${hodisa.y}\"\n    is Hodisa.MatnKiritildi -> \"matn: ${hodisa.matn}\"\n    Hodisa.Tozalandi -> \"tozalandi\"\n}\n\nfun main() {\n    val hodisalar = listOf(\n        Hodisa.Bosildi(10, 20),\n        Hodisa.MatnKiritildi(\"Kotlin\"),\n        Hodisa.Tozalandi\n    )\n    hodisalar.forEach { println(izohla(it)) }\n}",
     "output": "bosish 10,20\nmatn: Kotlin\ntozalandi"
    },
    {
     "type": "table",
     "head": [
      "Vosita",
      "Variantlar",
      "Parametrlar",
      "Exhaustive when"
     ],
     "rows": [
      [
       "Enum",
       "qat'iy ro'yxat",
       "Yo'q",
       "Ha"
      ],
      [
       "Sealed",
       "yopiq ierarxiya",
       "Har xil",
       "Ha"
      ],
      [
       "Ochiq interfeys",
       "cheksiz",
       "Har xil",
       "<code>else</code> kerak"
      ]
     ]
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Yangi variant qo'shilsa",
     "html": "Sealed ierarxiyaga yangi avlod qo'shsangiz, uni qamrab olmagan barcha <code>when</code> ifodalari kompilyatsiya xatosiga uchraydi. Bu ataylab shunday: yangi holatni qo'llab-quvvatlash uchun barcha joylarni ko'rib chiqishga majbur bo'lasiz. Shu sababli sealed ierarxiyani kutubxona API'sida ehtiyotkorlik bilan kengaytiring."
    }
   ],
   "quiz": [
    {
     "q": "Sealed ierarxiyaning asosiy afzalligi nima?",
     "options": [
      "U har doim enum'dan tezroq ishlaydi",
      "Variantlar to'plami yopiq va <code>when</code> to'liqligi tekshiriladi",
      "U faqat bitta obyekt yaratishga ruxsat beradi",
      "U avtomatik JSON serializatsiyasini beradi"
     ],
     "answer": 1,
     "explain": "Sealed ierarxiya variantlarni cheklaydi, shuning uchun kompilyator exhaustive when'ni tekshira oladi."
    },
    {
     "q": "Sealed ierarxiyaga yangi variant qo'shilsa nima bo'ladi?",
     "options": [
      "Mavjud barcha kod avtomatik yangilanadi",
      "Eski variantlar o'chiriladi",
      "Faqat runtime'da ogohlantirish chiqadi",
      "Yangi variantni qamramagan exhaustive <code>when</code> lar kompilyatsiya xatosiga uchraydi"
     ],
     "answer": 3,
     "explain": "Yopiq ierarxiya tufayli kompilyator barcha <code>when</code> tarmoqlarini qayta tekshiradi va yetishmayotgan variantni ko'rsatadi."
    },
    {
     "q": "<code>data object</code> qanday holat uchun mos?",
     "options": [
      "Yagona nusxa va o'qishli <code>toString</code> kerak bo'lgan holat uchun",
      "Har safar yangi nusxa kerak bo'lganda",
      "Parametrli murakkab variant uchun",
      "Faqat nullable qiymat uchun"
     ],
     "answer": 0,
     "explain": "data object singleton bo'lib qoladi, lekin data class kabi foydali <code>toString</code>, <code>equals</code> va <code>hashCode</code> beradi."
    }
   ]
  },
  {
   "id": 60,
   "title": "Reflection: KClass, KFunction va metadata",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Kotlin reflection <code>kotlin-reflect</code> kutubxonasi orqali klasslar, xossalar, funksiyalar va konstruktorlar haqidagi ma'lumotni ish vaqtida o'qish imkonini beradi. <code>KClass</code> Java <code>Class</code> dan ko'ra boyroq API beradi: nullable tiplar, default parametrlar va declaration-site ma'lumotlari mavjud. Reflection kuchli, lekin sekin vosita — uni issiq yo'lda ishlatmang."
    },
    {
     "type": "code",
     "title": "korinish.kt",
     "code": "import kotlin.reflect.full.memberProperties\nimport kotlin.reflect.full.primaryConstructor\n\ndata class Foydalanuvchi(val id: Int, val ism: String, var faol: Boolean)\n\nfun main() {\n    val k = Foydalanuvchi::class\n    println(k.simpleName)\n    println(k.primaryConstructor?.parameters?.joinToString { it.name ?: \"?\" })\n\n    val user = Foydalanuvchi(1, \"Aziza\", true)\n    k.memberProperties.sortedBy { it.name }.forEach {\n        println(\"${it.name} = ${it.get(user)}\")\n    }\n\n    val ctor = k.primaryConstructor!!\n    val nusxa = ctor.callBy(\n        mapOf(\n            ctor.parameters[0] to 2,\n            ctor.parameters[1] to \"Bek\",\n            ctor.parameters[2] to false\n        )\n    )\n    println(nusxa)\n}",
     "output": "Foydalanuvchi\nid, ism, faol\nfaol = true\nid = 1\nism = Aziza\nFoydalanuvchi(id=2, ism=Bek, faol=false)"
    },
    {
     "type": "p",
     "html": "Funksiyalarni ham xuddi shunday tekshirish va chaqirish mumkin: <code>KClass.functions</code> ro'yxatidan nom bo'yicha topib, <code>call()</code> bilan bajariladi. Bu mexanizm DI konteynerlari, routerlar va test framework'lari asosida yotadi. Har bir chaqiruv argumentlarni tekshiradi va qutilar yaratadi, shuning uchun oddiy virtual chaqiruvdan ancha qimmat."
    },
    {
     "type": "code",
     "title": "funksiya.kt",
     "code": "import kotlin.reflect.full.functions\n\nclass Kalkulyator {\n    fun qosh(a: Int, b: Int) = a + b\n    fun kopayt(a: Int, b: Int) = a * b\n}\n\nfun main() {\n    val k = Kalkulyator::class\n    val qosh = k.functions.first { it.name == \"qosh\" }\n    println(qosh.call(Kalkulyator(), 2, 5))\n    println(k.functions.filter { it.name.startsWith(\"ko\") }.map { it.name })\n    println(qosh.parameters.map { it.name })\n}",
     "output": "7\n[kopayt]\n[a, b]"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Reflection narxi",
     "html": "<code>KClass</code> obyektini olish va a'zolarni izlash keshlanishi mumkin, lekin <code>call</code>/<code>get</code> har safar tekshiruv bilan ishlaydi. Android'da reflection ilova hajmini oshiradi va R8 optimizatsiyasini qiyinlashtiradi. Serializatsiya, DI yoki validatsiya uchun KSP kabi compile-time yechim afzal."
    }
   ],
   "quiz": [
    {
     "q": "Kotlin reflection'da klass metama'lumotini qaysi obyekt ifodalaydi?",
     "options": [
      "<code>Class&lt;*&gt;</code>",
      "<code>KType</code>",
      "<code>KClass&lt;*&gt;</code>",
      "<code>KFunction</code>"
     ],
     "answer": 2,
     "explain": "<code>KClass</code> Kotlin'ga xos metama'lumot beradi; Java <code>Class</code> bilan <code>.java</code> orqali bog'lanadi."
    },
    {
     "q": "<code>KClass.memberProperties</code> qaysi xossalarni qaytaradi?",
     "options": [
      "Klassning o'zida va merosda mavjud a'zo xossalarni",
      "Faqat private xossalarni",
      "Faqat konstruktordagi parametrlarni",
      "Faqat companion object xossalarini"
     ],
     "answer": 0,
     "explain": "memberProperties klass ierarxiyasidagi a'zo xossalarni beradi; faqat e'lon qilinganlarini olish uchun declaredMemberProperties ishlatiladi."
    },
    {
     "q": "Nega reflection'ni tez-tez chaqiriladigan kodda ishlatish tavsiya etilmaydi?",
     "options": [
      "U har doim istisno tashlaydi",
      "U faqat JVM'da ishlamaydi",
      "U generic tiplarni o'chirib yuboradi",
      "Har bir chaqiruv qo'shimcha tekshiruv va allokatsiya qiladi"
     ],
     "answer": 3,
     "explain": "Reflection dinamik tekshiruvlar bajaradi, bu oddiy statik chaqiruvdan sezilarli sekinroq."
    }
   ]
  },
  {
   "id": 61,
   "title": "Annotatsiyalar va runtime reflection amaliyoti",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "Annotatsiya — kodga biriktiriladigan metama'lumot. Uning qayerda ishlatilishini <code>@Target</code>, qancha saqlanishini <code>@Retention</code> belgilaydi. <code>AnnotationRetention.RUNTIME</code> bo'lsa, reflection orqali o'qish mumkin; <code>CLASS</code> (sukut) faqat kompilyatorga ko'rinadi; <code>SOURCE</code> esa kompilyatsiyadan keyin yo'qoladi. Validatsiya va ORM'lar aynan runtime annotatsiyalariga tayanadi."
    },
    {
     "type": "code",
     "title": "ustun.kt",
     "code": "@Target(AnnotationTarget.PROPERTY)\n@Retention(AnnotationRetention.RUNTIME)\nannotation class Ustun(val nom: String, val uzunlik: Int = 255)\n\ndata class Mahsulot(\n    @Ustun(\"mahsulot_nomi\", 120) val nom: String,\n    @Ustun(\"narx\") val narx: Int\n)\n\nfun main() {\n    Mahsulot::class.memberProperties.sortedBy { it.name }.forEach { xossa ->\n        val ustun = xossa.annotations.filterIsInstance<Ustun>().firstOrNull()\n        println(\"${xossa.name} -> ${ustun?.nom ?: xossa.name} (${ustun?.uzunlik ?: \"-\"})\")\n    }\n}",
     "output": "narx -> narx (-)\nnom -> mahsulot_nomi (120)"
    },
    {
     "type": "p",
     "html": "Annotatsiya argumentlari cheklangan: primitivlar, <code>String</code>, enum, <code>KClass</code>, boshqa annotatsiya va ularning massivlari. Murakkab obyekt yoki lambda uzatib bo'lmaydi. Quyidagi misolda ruxsat rollari massiv sifatida berilgan va reflection orqali o'qilgan — bu yondashuv ruxsatlar matritsasini deklarativ qiladi."
    },
    {
     "type": "code",
     "title": "ruxsat.kt",
     "code": "enum class Rol { ADMIN, USER }\n\n@Target(AnnotationTarget.CLASS)\n@Retention(AnnotationRetention.RUNTIME)\nannotation class Ruxsat(val rollar: Array<Rol>)\n\n@Ruxsat([Rol.ADMIN, Rol.USER])\nclass Hisobot\n\n@Ruxsat([Rol.ADMIN])\nclass Sozlama\n\nfun main() {\n    listOf(Hisobot::class, Sozlama::class).forEach { klass ->\n        val ruxsat = klass.annotations.filterIsInstance<Ruxsat>().first()\n        println(\"${klass.simpleName}: ${ruxsat.rollar.joinToString { it.name }}\")\n    }\n}",
     "output": "Hisobot: ADMIN, USER\nSozlama: ADMIN"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Retention tanlovi",
     "html": "Agar annotatsiya faqat IDE yoki lint uchun bo'lsa, <code>SOURCE</code> yetarli. Agar reflection o'qiydigan bo'lsa, <code>RUNTIME</code> majburiy. <code>@Repeatable</code> bilan bir elementga bir nechta annotatsiya qo'llanadi. Runtime annotatsiyalarini o'qish uchun <code>kotlin-reflect</code> kerak; KSP bilan bir xil ma'lumotni kompilyatsiya vaqtida olish mumkin."
    }
   ],
   "quiz": [
    {
     "q": "Annotatsiya e'lonida <code>@Retention</code> ko'rsatilmasa, sukut bo'yicha qaysi rejim ishlaydi?",
     "options": [
      "SOURCE",
      "BINARY",
      "RUNTIME",
      "CLASS"
     ],
     "answer": 3,
     "explain": "Kotlin'da sukut retention CLASS: annotatsiya bayt-kodda qoladi, lekin reflection orqali ko'rinmaydi."
    },
    {
     "q": "Bitta annotatsiyani faqat xossalarga qo'llash uchun nima qilish kerak?",
     "options": [
      "<code>@Retention(SOURCE)</code> yozish",
      "<code>@Target(AnnotationTarget.PROPERTY)</code> yozish",
      "Annotatsiyani data class ichida e'lon qilish",
      "<code>@Repeatable</code> qo'shish"
     ],
     "answer": 1,
     "explain": "Target annotatsiyaning qo'llanish joylarini cheklaydi; PROPERTY faqat xossalarga ruxsat beradi."
    },
    {
     "q": "Annotatsiya argumenti sifatida qaysi qiymatni uzatib bo'lmaydi?",
     "options": [
      "Enum konstantasi",
      "<code>String</code>",
      "Ixtiyoriy klass obyekti",
      "<code>KClass&lt;*&gt;</code>"
     ],
     "answer": 2,
     "explain": "Annotatsiya argumentlari kompilyatsiya vaqtida ma'lum bo'lgan cheklangan turlar bo'ladi; ixtiyoriy obyekt yoki lambda mumkin emas."
    }
   ]
  },
  {
   "id": 62,
   "title": "Type-safe DSL: lambda receiver va @DslMarker",
   "minutes": 16,
   "blocks": [
    {
     "type": "p",
     "html": "DSL (domain-specific language) Kotlin'da lambda receiver yordamida quriladi. <code>Royxat.() -> Unit</code> tipidagi parametr lambda ichida <code>this</code> ni <code>Royxat</code> qilib beradi, shuning uchun metodlar nuqtasiz chaqiriladi. Builder funksiyasi obyektni yaratadi, lambdani bajaradi va tayyor natijani qaytaradi. Bu yondashuv Gradle, Compose va Ktor konfiguratsiyalarida keng ishlatiladi."
    },
    {
     "type": "code",
     "title": "royxat.kt",
     "code": "class Royxat {\n    private val elementlar = mutableListOf<String>()\n\n    fun element(qiymat: String) {\n        elementlar.add(qiymat)\n    }\n\n    fun natija(): List<String> = elementlar.toList()\n}\n\nfun royxat(blok: Royxat.() -> Unit): List<String> {\n    val r = Royxat()\n    r.blok()\n    return r.natija()\n}\n\nfun main() {\n    val mevalar = royxat {\n        element(\"olma\")\n        element(\"anor\")\n        element(\"uzum\")\n    }\n    println(mevalar)\n    println(mevalar.size)\n}",
     "output": "[olma, anor, uzum]\n3"
    },
    {
     "type": "p",
     "html": "Ichma-ich DSL'larda tashqi receiver'ga beixtiyor murojaat qilish xatolarga olib keladi. <code>@DslMarker</code> annotatsiyasi bilan belgilangan receiverlar uchun kompilyator eng yaqin (ichki) receiverni tanlaydi va tashqi receiverga yashirin murojaatni taqiqlaydi. Bu ayniqsa HTML yoki UI daraxti quruvchilarida muhim."
    },
    {
     "type": "code",
     "title": "marker.kt",
     "code": "@DslMarker\nannotation class HtmlDsl\n\n@HtmlDsl\nclass Html {\n    private val bolalar = mutableListOf<String>()\n\n    fun p(matn: String) {\n        bolalar.add(\"<p>$matn</p>\")\n    }\n\n    fun div(blok: Html.() -> Unit) {\n        val ichki = Html()\n        ichki.blok()\n        bolalar.add(\"<div>${ichki.render()}</div>\")\n    }\n\n    fun render(): String = bolalar.joinToString(\"\")\n}\n\nfun html(blok: Html.() -> Unit): String {\n    val h = Html()\n    h.blok()\n    return h.render()\n}\n\nfun main() {\n    val sahifa = html {\n        p(\"Salom\")\n        div {\n            p(\"Kotlin\")\n            // p(\"tashqi\") bu yerda tashqi Html'ga murojaat qilolmaydi\n        }\n    }\n    println(sahifa)\n}",
     "output": "<p>Salom</p><div><p>Kotlin</p></div>"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "DSL dizayni",
     "html": "Builder'da noto'g'ri holatni oldini olish uchun <code>require</code> yoki majburiy parametrlarni konstruktorda tekshiring. DSL'ni kutubxona API'si sifatida bersangiz, funksiya nomlari va default qiymatlarni barqaror saqlang. Lambda receiver DSL'ni qisqa qiladi, lekin juda chuqur ierarxiya kodni o'qishni qiyinlashtirishi mumkin."
    }
   ],
   "quiz": [
    {
     "q": "<code>Royxat.() -> Unit</code> tipidagi lambda ichida <code>this</code> nimani bildiradi?",
     "options": [
      "<code>Royxat</code> nusxasini (receiver)",
      "Tashqi funksiya obyektini",
      "Unit qiymatini",
      "Lambdaning parametrini"
     ],
     "answer": 0,
     "explain": "Receiver lambda ichida <code>this</code> receiver obyektiga ishora qiladi, shuning uchun uning metodlari nuqtasiz chaqiriladi."
    },
    {
     "q": "<code>@DslMarker</code> qo'llanilganda ichki lambda tashqi receiver metodini chaqirsa nima bo'ladi?",
     "options": [
      "Metod ikkala receiverda ham bajariladi",
      "Runtime'da istisno tashlanadi",
      "Metod avtomatik ichki receiverdan qidiriladi",
      "Kompilyator xato beradi, chunki tashqi receiver yashirin"
     ],
     "answer": 3,
     "explain": "DslMarker eng yaqin receiverni ko'rinadigan qiladi; tashqi receiver'ga yashirin murojaat kompilyatsiya vaqtida taqiqlanadi."
    },
    {
     "q": "Type-safe DSL'ning oddiy string birlashtirishdan asosiy afzalligi nima?",
     "options": [
      "U har doim tezroq ishlaydi",
      "U reflection'ni avtomatik yoqadi",
      "Noto'g'ri tuzilma va tip xatolari kompilyatsiyada ushlanadi",
      "U faqat Android'da ishlaydi"
     ],
     "answer": 2,
     "explain": "DSL metodlari va tiplar bilan chegaralangan, shuning uchun xato tuzilma kompilyator tomonidan aniqlanadi."
    }
   ]
  },
  {
   "id": 63,
   "title": "DSL amaliyoti: HTML va SQL quruvchilari",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Type-safe builderni amalda HTML generatorida sinab ko'ramiz. Har bir teg o'z atributlari va bolalarini yig'adi; <code>render()</code> natijani satrga aylantiradi. Bu yerda muhim jihat — foydalanuvchi noto'g'ri yopilish tartibini yozolmaydi, chunki daraxtni builder boshqaradi. Xuddi shu usul bilan SQL, JSON yoki konfiguratsiya fayllarini qurish mumkin."
    },
    {
     "type": "code",
     "title": "html.kt",
     "code": "class Teg(val nom: String) {\n    private val atributlar = mutableMapOf<String, String>()\n    private val bolalar = mutableListOf<String>()\n\n    fun attr(kalit: String, qiymat: String) {\n        atributlar[kalit] = qiymat\n    }\n\n    fun matn(qiymat: String) {\n        bolalar.add(qiymat)\n    }\n\n    fun teg(nom: String, blok: Teg.() -> Unit = {}) {\n        val ichki = Teg(nom)\n        ichki.blok()\n        bolalar.add(ichki.render())\n    }\n\n    fun render(): String {\n        val attrlar = if (atributlar.isEmpty()) \"\" else\n            atributlar.entries.joinToString(\" \", prefix = \" \") { \"${it.key}=\\\"${it.value}\\\"\" }\n        return \"<$nom$attrlar>${bolalar.joinToString(\"\")}</$nom>\"\n    }\n}\n\nfun html(blok: Teg.() -> Unit): String {\n    val h = Teg(\"html\")\n    h.blok()\n    return h.render()\n}\n\nfun main() {\n    val sahifa = html {\n        teg(\"body\") {\n            attr(\"class\", \"asosiy\")\n            teg(\"h1\") { matn(\"Noldan\") }\n            teg(\"p\") { matn(\"Kotlin DSL\") }\n        }\n    }\n    println(sahifa)\n}",
     "output": "<html><body class=\"asosiy\"><h1>Noldan</h1><p>Kotlin DSL</p></body></html>"
    },
    {
     "type": "p",
     "html": "SQL quruvchisida shartlarni ro'yxat sifatida yig'ish, keyin <code>AND</code> bilan birlashtirish qulay. <code>buildString</code> va <code>apply</code> kabi stdlib funksiyalari DSL kodini yanada qisqartiradi. Muhim qoida: foydalanuvchi kiritgan qiymatlarni to'g'ridan-to'g'ri SQL'ga qo'shmang — parametrlangan so'rovlar ishlating."
    },
    {
     "type": "code",
     "title": "sql.kt",
     "code": "class Sorov {\n    private var jadval = \"\"\n    private val shartlar = mutableListOf<String>()\n\n    fun from(nom: String) {\n        jadval = nom\n    }\n\n    fun where(shart: String) {\n        shartlar.add(shart)\n    }\n\n    fun build(): String = buildString {\n        append(\"SELECT * FROM \").append(jadval)\n        if (shartlar.isNotEmpty()) {\n            append(\" WHERE \").append(shartlar.joinToString(\" AND \"))\n        }\n    }\n}\n\nfun sorov(blok: Sorov.() -> Unit): String = Sorov().apply(blok).build()\n\nfun main() {\n    val sql = sorov {\n        from(\"tasks\")\n        where(\"done = false\")\n        where(\"user_id = 7\")\n    }\n    println(sql)\n    println(sql.contains(\"LIMIT\"))\n}",
     "output": "SELECT * FROM tasks WHERE done = false AND user_id = 7\nfalse"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "SQL injection",
     "html": "Yuqoridagi builder faqat struktura uchun. Qiymatlarni <code>where(\"nom = '$kiritilgan'\")</code> ko'rinishida qo'shish SQL injection xavfini tug'diradi. Haqiqiy loyihada Exposed yoki parametrlangan <code>PreparedStatement</code> ishlating. DSL faqat so'rov shaklini xavfsiz qurishga yordam beradi, ma'lumotni emas."
    }
   ],
   "quiz": [
    {
     "q": "HTML builder'da teg yopilish tartibini kim boshqaradi?",
     "options": [
      "Foydalanuvchi qo'lda yozadi",
      "Brauzer avtomatik tuzatadi",
      "Builder daraxtni qurib, <code>render()</code> da yopadi",
      "Reflection"
     ],
     "answer": 2,
     "explain": "Builder har bir tegni obyekt sifatida yig'adi va render paytida to'g'ri ochish/yopish tartibini o'zi yaratadi."
    },
    {
     "q": "SQL builder'da qiymatlarni to'g'ridan-to'g'ri satrga qo'shishning asosiy xavfi nima?",
     "options": [
      "Kod sekinlashadi",
      "SQL injection va noto'g'ri escaping",
      "Builder umuman ishlamaydi",
      "Ma'lumotlar bazasi ulanmaydi"
     ],
     "answer": 1,
     "explain": "Foydalanuvchi kiritgan matn SQL sintaksisiga aralashishi mumkin; parametrlangan so'rovlar bu xavfni yo'q qiladi."
    },
    {
     "q": "<code>Sorov().apply(blok).build()</code> da <code>apply</code> nima qaytaradi?",
     "options": [
      "<code>String</code> natijani",
      "<code>Unit</code>",
      "Lambdaning natijasini",
      "Qabul qiluvchi <code>Sorov</code> obyektini"
     ],
     "answer": 3,
     "explain": "apply lambdani receiver bilan bajaradi va o'sha receiver'ni qaytaradi, shuning uchun zanjirda build() chaqiriladi."
    }
   ]
  },
  {
   "id": 64,
   "title": "KSP va kod generatsiyasi: metaprogramma chegaralari",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "KSP (Kotlin Symbol Processing) annotatsiyalar asosida kompilyatsiya vaqtida kod generatsiya qiladi. U KAPT'ga qaraganda tezroq: Java stub'lar yaratmaydi va Kotlin API'si bilan bevosita ishlaydi. Room, Moshi, Hilt va boshqa kutubxonalar KSP orqali kod yaratadi. Natijada runtime reflection kamayadi va ilova tezroq ishga tushadi."
    },
    {
     "type": "code",
     "title": "build.gradle.kts",
     "code": "plugins {\n    kotlin(\"jvm\") version \"2.1.0\"\n    id(\"com.google.devtools.ksp\") version \"2.1.0-1.0.29\"\n}\n\ndependencies {\n    implementation(\"com.google.devtools.ksp:symbol-processing-api:2.1.0-1.0.29\")\n    ksp(project(\":processor\"))\n}\n\nksp {\n    arg(\"noldan.package\", \"noldan.generated\")\n}",
     "output": "> Task :app:kspKotlin\n[ksp] generated: build/generated/ksp/main/kotlin/noldan/generated/UserFactory.kt\nBUILD SUCCESSFUL in 3s"
    },
    {
     "type": "p",
     "html": "Processor <code>SymbolProcessor</code> interfeysini amalga oshiradi. <code>Resolver</code> orqali annotatsiya qo'llanilgan elementlar topiladi, <code>CodeGenerator</code> esa yangi fayl yaratadi. Quyidagi soddalashtirilgan processor har bir <code>@Factory</code> klass uchun <code>createX()</code> funksiyasini generatsiya qiladi. Haqiqiy loyihada xatolarni <code>logger.error</code> bilan xabar qilish va incremental processing'ni hisobga olish kerak."
    },
    {
     "type": "code",
     "title": "processor.kt",
     "code": "class FactoryProcessor(\n    private val codeGenerator: CodeGenerator,\n    private val logger: KSPLogger\n) : SymbolProcessor {\n\n    override fun process(resolver: Resolver): List<KSAnnotated> {\n        resolver.getSymbolsWithAnnotation(\"noldan.Factory\")\n            .filterIsInstance<KSClassDeclaration>()\n            .forEach { decl ->\n                val nom = decl.simpleName.asString()\n                val fayl = codeGenerator.createNewFile(\n                    dependencies = Dependencies(true, decl.containingFile!!),\n                    packageName = \"noldan.generated\",\n                    fileName = \"${nom}Factory\"\n                )\n                fayl.writer().use {\n                    it.write(\"package noldan.generated\\n\")\n                    it.write(\"fun create$nom() = $nom()\\n\")\n                }\n                logger.info(\"generated: ${nom}Factory\")\n            }\n        return emptyList()\n    }\n}",
     "output": "[ksp] generated: UserFactory\n[ksp] generated: OrderFactory\n[ksp] generated: TaskFactory"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Metaprogramma chegaralari",
     "html": "KSP kodni o'zgartirmaydi, faqat yangi kod qo'shadi; mavjud funksiyani “sehrli” almashtirish uchun compiler plugin kerak. Generatsiya qilingan kod build papkasida bo'ladi va qo'lda tahrirlanmaydi. Processor'da og'ir ish qilsangiz build sekinlashadi; keshlash va incremental API'dan foydalaning."
    }
   ],
   "quiz": [
    {
     "q": "KSP qaysi bosqichda ishlaydi?",
     "options": [
      "Dastur ishga tushganda",
      "Faqat testlarda",
      "Faqat Android runtime'da",
      "Kompilyatsiya vaqtida"
     ],
     "answer": 3,
     "explain": "KSP kompilyator bilan birga ishlaydi va generatsiya qilingan kod keyin oddiy kompilyatsiyaga qo'shiladi."
    },
    {
     "q": "KSP'ning KAPT'ga nisbatan asosiy afzalligi nima?",
     "options": [
      "Java stub'lar yaratmasdan tezroq ishlaydi",
      "U faqat runtime reflection beradi",
      "U barcha annotatsiyalarni o'chiradi",
      "U faqat Kotlin Multiplatform'da ishlaydi"
     ],
     "answer": 0,
     "explain": "KSP Kotlin symbol API'sidan foydalanadi va oraliq Java stub generatsiyasini talab qilmaydi."
    },
    {
     "q": "Generatsiya qilingan KSP kodi odatda qayerda joylashadi?",
     "options": [
      "<code>src/main/kotlin</code> ichida",
      "<code>build/generated/ksp</code> ostida",
      "Faqat <code>res/values</code> ichida",
      "<code>gradle.properties</code> ichida"
     ],
     "answer": 1,
     "explain": "KSP natijalari build katalogida generatsiya qilinadi va manba kod sifatida kompilyatsiyaga qo'shiladi."
    }
   ]
  },
  {
   "id": 65,
   "title": "Structured concurrency: scope, supervisorScope va bekor qilish",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Structured concurrency — har bir coroutine ota-scope ichida tugashi kafolati. <code>coroutineScope</code> barcha bolalarni kutadi; ulardan biri xato bersa, qolgan bolalar bekor qilinadi va xato tashqariga uzatiladi. <code>supervisorScope</code> esa bolalar xatosini bir-biriga tarqatmaydi. Bekor qilish kooperativ: <code>delay</code>, <code>yield</code> va boshqa suspend nuqtalari bekor qilishni tekshiradi, <code>finally</code> esa tozalash uchun ishlaydi."
    },
    {
     "type": "code",
     "title": "korinish.kt",
     "code": "import kotlinx.coroutines.*\n\nsuspend fun xato(): String {\n    delay(50)\n    throw IllegalStateException(\"buzildi\")\n}\n\nfun main() = runBlocking {\n    val natija = runCatching {\n        coroutineScope {\n            launch {\n                try {\n                    delay(200)\n                    println(\"aka tugadi\")\n                } finally {\n                    println(\"aka bekor qilindi\")\n                }\n            }\n            launch { println(xato()) }\n        }\n    }\n    println(natija.exceptionOrNull()?.message)\n}",
     "output": "aka bekor qilindi\nbuzildi"
    },
    {
     "type": "p",
     "html": "<code>supervisorScope</code> ichida bitta bolaning xatosi boshqalarni to'xtatmaydi. Bu xususiyat mustaqil parallel ishlar uchun muhim: bitta tarmoq so'rovi yiqilsa, qolganlarini bekor qilish shart emas. Lekin supervisorScope ham barcha bolalarni kutadi va xato qilingan <code>async</code> natijasini <code>await()</code> orqali ko'rsatadi."
    },
    {
     "type": "code",
     "title": "supervisor.kt",
     "code": "import kotlinx.coroutines.*\n\nsuspend fun ish(nom: String, xato: Boolean): String {\n    delay(20)\n    if (xato) error(\"$nom xato\")\n    return \"$nom ok\"\n}\n\nfun main() = runBlocking {\n    supervisorScope {\n        val a = async { ish(\"A\", true) }\n        val b = async { ish(\"B\", false) }\n        println(runCatching { a.await() }.exceptionOrNull()?.message)\n        println(b.await())\n    }\n    val natija = withTimeoutOrNull(100) { delay(200) }\n    println(natija ?: \"timeout\")\n}",
     "output": "A xato\nB ok\ntimeout"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Bekor qilishni yutib yubormang",
     "html": "<code>runCatching</code> <code>CancellationException</code> ni ham ushlaydi, bu esa bekor qilishni buzadi. Coroutine ichida xatoni ushlaganda <code>if (e is CancellationException) throw e</code> qilib qayta tashlang yoki <code>ensureActive()</code> dan foydalaning. <code>NonCancellable</code> faqat finally'dagi tozalash ishlari uchun ishlatiladi."
    }
   ],
   "quiz": [
    {
     "q": "<code>coroutineScope</code> ichidagi bola xato bersa nima bo'ladi?",
     "options": [
      "Faqat o'sha bola to'xtaydi",
      "Qolgan bolalar bekor qilinadi va xato tashqariga uzatiladi",
      "Xato yo'qoladi",
      "Scope avtomatik qayta ishga tushadi"
     ],
     "answer": 1,
     "explain": "coroutineScope failure'ni yuqoriga propagatsiya qiladi va aka-uka coroutine'larni bekor qiladi."
    },
    {
     "q": "<code>supervisorScope</code> qanday xatti-harakat beradi?",
     "options": [
      "Har bir bola xatosi butun scope'ni yiqitadi",
      "Bolalar umuman xato bera olmaydi",
      "Bitta bolaning xatosi boshqa bolalarni bekor qilmaydi",
      "Xatolar avtomatik `Result` ga aylanadi"
     ],
     "answer": 2,
     "explain": "supervisorScope bolalar xatosini izolyatsiya qiladi; xato faqat o'sha bolaning natijasida ko'rinadi."
    },
    {
     "q": "Coroutine bekor qilish qanday ishlaydi?",
     "options": [
      "Suspend nuqtalarida bekor qilish holati tekshiriladi",
      "Thread majburan o'chiriladi",
      "JVM jarayoni to'xtatiladi",
      "Har bir satr orasida avtomatik `return` qo'shiladi"
     ],
     "answer": 0,
     "explain": "Bekor qilish kooperativ: coroutine o'zi suspend nuqtalarida tekshiradi va to'g'ri tozalash imkoniyatiga ega bo'ladi."
    }
   ]
  },
  {
   "id": 66,
   "title": "Coroutines'da xatolar: handler, Result va retry",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<code>launch</code> ichidagi xato ota-scope'ga tarqaladi; <code>async</code> xatosi esa <code>await()</code> chaqirilganda ko'rinadi. Root coroutine uchun <code>CoroutineExceptionHandler</code> o'rnatish mumkin, lekin u <code>async</code> xatolarini ushlamaydi. Tarmoq kabi beqaror amallarda xatoni <code>Result</code> bilan qaytarish, qayta urinish (retry) va taym-autni birgalikda ishlatish kerak."
    },
    {
     "type": "code",
     "title": "handler.kt",
     "code": "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    val handler = CoroutineExceptionHandler { _, e ->\n        println(\"handler: ${e.message}\")\n    }\n    val scope = CoroutineScope(SupervisorJob() + Dispatchers.Default + handler)\n    scope.launch { error(\"fon xatosi\") }\n    delay(100)\n    println(\"davom etdi\")\n    scope.cancel()\n}",
     "output": "handler: fon xatosi\ndavom etdi"
    },
    {
     "type": "p",
     "html": "Retry funksiyasi xatoni yutmasligi, balki cheklangan urinishdan keyin <code>Result.failure</code> qaytarishi kerak. Quyidagi misolda har bir urinish <code>runCatching</code> bilan o'ralgan, orasida qisqa kutish bor. <code>CancellationException</code> ni qayta tashlashni unutmang — aks holda bekor qilingan ish “muvaffaqiyatsiz urinish” sifatida davom etadi."
    },
    {
     "type": "code",
     "title": "retry.kt",
     "code": "import kotlinx.coroutines.*\n\nvar urinish = 0\n\nsuspend fun beqaror(): String {\n    urinish++\n    if (urinish < 3) error(\"tarmoq xatosi #$urinish\")\n    return \"ma'lumot\"\n}\n\nsuspend fun <T> qayta(n: Int, blok: suspend () -> T): Result<T> {\n    var oxirgi: Throwable? = null\n    repeat(n) {\n        val natija = runCatching { blok() }\n        if (natija.isSuccess) return natija\n        oxirgi = natija.exceptionOrNull()\n        delay(10)\n    }\n    return Result.failure(oxirgi ?: IllegalStateException(\"noma'lum\"))\n}\n\nfun main() = runBlocking {\n    println(qayta(3) { beqaror() }.getOrNull() ?: \"xato\")\n    println(\"urinishlar: $urinish\")\n    val xato = qayta(2) { error(\"doim xato\") }\n    println(xato.exceptionOrNull()?.message)\n}",
     "output": "ma'lumot\nurinishlar: 3\ndoim xato"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Xato siyosati",
     "html": "Tarmoq xatosini foydalanuvchiga ko'rsatishdan oldin turini ajrating: timeout, 4xx, 5xx, serializatsiya. 4xx ni qayta urinish ko'pincha foydasiz; 5xx va timeout uchun eksponensial kutish mos. Handler'da UI'ga xabar bering, lekin biznes mantiqni scope'ning xato siyosatidan ajratib turing."
    }
   ],
   "quiz": [
    {
     "q": "<code>CoroutineExceptionHandler</code> qaysi holatda chaqiriladi?",
     "options": [
      "Root <code>launch</code> coroutine'dagi ushlanmagan xatoda",
      "Har qanday <code>async</code> xatosida",
      "Faqat <code>runCatching</code> ichidagi xatoda",
      "Har safar coroutine yaratilganda"
     ],
     "answer": 0,
     "explain": "Handler root launch kabi ushlanmagan xatolar uchun ishlaydi; async xatosi odatda await() orqali olinadi."
    },
    {
     "q": "Retry funksiyasida <code>CancellationException</code> bilan nima qilish kerak?",
     "options": [
      "Uni ham oddiy xato kabi yutish",
      "Uni <code>Result.success</code> ga aylantirish",
      "Qayta tashlash, chunki bekor qilishni davom ettirish kerak",
      "E'tiborsiz qoldirish"
     ],
     "answer": 2,
     "explain": "Bekor qilish signalini yutish coroutine'ni to'xtatib qo'yadi; CancellationException qayta tashlanishi shart."
    },
    {
     "q": "Nega barcha xatolarni bir xil qayta urinish tavsiya etilmaydi?",
     "options": [
      "Retry har doim xotirani to'ldiradi",
      "4xx kabi xatolar qayta urinishda ham o'zgarmaydi",
      "5xx xatolar umuman qayta urinilmaydi",
      "Retry faqat UI thread'da ishlaydi"
     ],
     "answer": 1,
     "explain": "Mijoz xatosi (masalan, 400) so'rovni takrorlash bilan tuzalmaydi; retry siyosati xato turiga bog'liq bo'lishi kerak."
    }
   ]
  },
  {
   "id": 67,
   "title": "Flow chuqur: cold, hot, buffer, conflate va flatMap",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<code>Flow</code> sovuq (cold) oqim: builder tanasi faqat <code>collect</code> chaqirilganda ishlaydi va har bir kollektor uchun qaytadan bajariladi. Operatorlar zanjiri deklarativ, lekin bajarilish kollektor tezligiga bog'liq. Sekin kollektor uchun <code>buffer</code> oraliq bufer beradi, <code>conflate</code> esa eng yangi qiymatni saqlab, eskilarini tashlab yuboradi. <code>flatMapLatest</code> yangi qiymat kelganda oldingi ichki oqimni bekor qiladi."
    },
    {
     "type": "code",
     "title": "sovuq.kt",
     "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun sonlar(): Flow<Int> = flow {\n    for (i in 1..3) {\n        println(\"emit $i\")\n        emit(i)\n        delay(50)\n    }\n}\n\nfun main() = runBlocking {\n    println(\"oldin\")\n    sonlar().map { it * 10 }.collect { println(\"collect $it\") }\n    println(\"keyin\")\n}",
     "output": "oldin\nemit 1\ncollect 10\nemit 2\ncollect 20\nemit 3\ncollect 30\nkeyin"
    },
    {
     "type": "p",
     "html": "<code>collectLatest</code> yangi qiymat kelganda oldingi blokni bekor qiladi — qidiruv maydoni yoki jonli filtr uchun ideal. <code>flatMapLatest</code> esa har bir qiymat uchun yangi oqim yaratadi va faqat oxirgisini tugatadi. Ikkalasi ham “faqat eng so'nggi natija muhim” degan UI stsenariylarida ortiqcha ishni yo'q qiladi."
    },
    {
     "type": "code",
     "title": "latest.kt",
     "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun qidiruv(soz: String): Flow<String> = flow {\n    delay(60)\n    emit(\"$soz natijasi\")\n}\n\nfun main() = runBlocking {\n    flowOf(\"k\", \"ko\", \"kot\")\n        .flatMapLatest { qidiruv(it) }\n        .collect { println(it) }\n\n    (1..5).asFlow().onEach { delay(30) }.collectLatest { qiymat ->\n        println(\"boshlandi $qiymat\")\n        delay(80)\n        println(\"tugadi $qiymat\")\n    }\n}",
     "output": "kot natijasi\nboshlandi 1\nboshlandi 2\nboshlandi 3\nboshlandi 4\nboshlandi 5\ntugadi 5"
    },
    {
     "type": "table",
     "head": [
      "Operator",
      "Xatti-harakati",
      "Qachon ishlatiladi"
     ],
     "rows": [
      [
       "<code>buffer()</code>",
       "Ishlab chiqaruvchi va kollektorni ajratadi",
       "Sekin kollektor"
      ],
      [
       "<code>conflate()</code>",
       "Oraliq qiymatlarni tashlaydi",
       "Faqat oxirgi holat muhim"
      ],
      [
       "<code>collectLatest</code>",
       "Oldingi blokni bekor qiladi",
       "Jonli qidiruv"
      ],
      [
       "<code>flatMapLatest</code>",
       "Oldingi ichki oqimni bekor qiladi",
       "Yangi so'rov eskisini bekor qilsa"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "Cold Flow qachon ishlay boshlaydi?",
     "options": [
      "<code>flow { }</code> yaratilganda",
      "Birinchi <code>collect</code> chaqirilganda",
      "Har doim fonda darhol",
      "Faqat <code>launch</code> ichida"
     ],
     "answer": 1,
     "explain": "Cold flow deklarativ: builder tanasi kollektor paydo bo'lganda bajariladi va har bir kollektor uchun qayta ishlaydi."
    },
    {
     "q": "<code>collectLatest</code> yangi qiymat kelganda nima qiladi?",
     "options": [
      "Oldingi qiymatni navbatga qo'yadi",
      "Oqimni butunlay to'xtatadi",
      "Qiymatni ikki marta chiqaradi",
      "Oldingi kollektor blokini bekor qiladi"
     ],
     "answer": 3,
     "explain": "collectLatest yangi emissiya uchun oldingi blokni bekor qiladi, shuning uchun faqat oxirgi ishlov tugaydi."
    },
    {
     "q": "<code>flatMapLatest</code> qaysi stsenariyga mos?",
     "options": [
      "Yangi qidiruv so'rovi kelganda eskisini bekor qilish",
      "Barcha so'rovlarni parallel bajarish va hammasini qaytarish",
      "Oqimni ro'yxatga yig'ish",
      "Xatolarni butunlay yutish"
     ],
     "answer": 0,
     "explain": "flatMapLatest har bir yangi qiymatda oldingi ichki oqimni bekor qiladi, bu autocomplete uchun mos."
    }
   ]
  },
  {
   "id": 68,
   "title": "StateFlow va SharedFlow amaliyoti",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<code>StateFlow</code> — har doim qiymatga ega bo'lgan issiq oqim (hot flow). U dastlabki qiymatni talab qiladi, takroriy teng qiymatlarni tashlab yuboradi va oxirgi holatni yangi kollektorga darhol beradi. <code>SharedFlow</code> esa umumiy hodisalar uchun mos: <code>replay</code> va bufer hajmini sozlash mumkin. UI holati uchun StateFlow, bir martalik hodisalar uchun SharedFlow yoki Channel ishlatiladi."
    },
    {
     "type": "code",
     "title": "state.kt",
     "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun main() = runBlocking {\n    val holat = MutableStateFlow(0)\n    val kuzatuvchi = launch {\n        holat.collect { println(\"kuzatuvchi: $it\") }\n    }\n    delay(20)\n    holat.value = 1\n    yield()\n    holat.value = 1\n    holat.update { it + 1 }\n    yield()\n    kuzatuvchi.cancel()\n    println(\"yakuniy: ${holat.value}\")\n}",
     "output": "kuzatuvchi: 0\nkuzatuvchi: 1\nkuzatuvchi: 2\nyakuniy: 2"
    },
    {
     "type": "p",
     "html": "<code>SharedFlow</code> bilan oxirgi hodisalarni yangi kuzatuvchiga qayta ko'rsatish mumkin. <code>replay = 2</code> oxirgi ikki qiymatni saqlaydi; <code>extraBufferCapacity</code> esa sekin kollektor uchun qo'shimcha joy beradi. StateFlow'dan farqli ravishda SharedFlow dastlabki qiymatga ega emas va teng qiymatlarni avtomatik tashlamaydi — bu hodisalar uchun to'g'ri."
    },
    {
     "type": "code",
     "title": "shared.kt",
     "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun main() = runBlocking {\n    val hodisalar = MutableSharedFlow<Int>(replay = 2)\n    hodisalar.emit(1)\n    hodisalar.emit(2)\n    hodisalar.emit(3)\n    hodisalar.take(2).collect { println(\"yangi kuzatuvchi: $it\") }\n    println(\"replay: ${hodisalar.replayCache}\")\n    val state = MutableStateFlow(\"boshlangich\")\n    state.value = \"tayyor\"\n    println(state.value)\n}",
     "output": "yangi kuzatuvchi: 2\nyangi kuzatuvchi: 3\nreplay: [2, 3]\ntayyor"
    },
    {
     "type": "table",
     "head": [
      "Xususiyat",
      "StateFlow",
      "SharedFlow",
      "Channel"
     ],
     "rows": [
      [
       "Dastlabki qiymat",
       "Bor",
       "Yo'q",
       "Yo'q"
      ],
      [
       "Takroriy qiymat",
       "Tashlanadi",
       "Uzatiladi",
       "Uzatiladi"
      ],
      [
       "Replay",
       "1",
       "Sozlanadi",
       "Yo'q"
      ],
      [
       "Asosiy maqsad",
       "UI holati",
       "Hodisalar",
       "Navbat/ish oqimi"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "<code>StateFlow</code> qanday xususiyatga ega?",
     "options": [
      "Faqat bitta kollektorga ruxsat beradi",
      "Replay qiymatini sozlash mumkin",
      "Dastlabki qiymat talab qiladi va har doim qiymatga ega",
      "U faqat Channel bilan ishlaydi"
     ],
     "answer": 2,
     "explain": "StateFlow doim holatga ega; <code>value</code> orqali joriy qiymatni o'qish mumkin."
    },
    {
     "q": "<code>MutableSharedFlow(replay = 2)</code> ga keyin ulangan kollektor nimani oladi?",
     "options": [
      "Oxirgi ikki qiymatni",
      "Hech narsa",
      "Barcha tarixiy qiymatlarni",
      "Faqat kelajakdagi birinchi qiymatni"
     ],
     "answer": 0,
     "explain": "replay=2 oxirgi ikki qiymatni saqlaydi va yangi kollektorga qayta beradi."
    },
    {
     "q": "<code>stateIn(SharingStarted.WhileSubscribed(5000))</code> qanday ishlaydi?",
     "options": [
      "Oqimni abadiy fonda ushlab turadi",
      "Har 5 sekundda qiymat chiqaradi",
      "Faqat 5 ta kollektorga ruxsat beradi",
      "Obunachilar bo'lmasa 5 sekunddan keyin upstream'ni to'xtatadi"
     ],
     "answer": 3,
     "explain": "WhileSubscribed timeouti oxirgi obunachi ketgandan keyin upstream'ni to'xtatish uchun kutish vaqtini belgilaydi."
    }
   ]
  },
  {
   "id": 69,
   "title": "Kanallar, pipeline va Flow testlash",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "<code>Channel</code> coroutine'lar orasida navbat beradi. <code>capacity = 0</code> rendezvous, musbat qiymat bufer, <code>Channel.UNLIMITED</code> cheksiz; yuboruvchi bufer to'lsa kutadi. <code>produce</code> builder kanal yaratadi va blok tugagach uni yopadi. Kanallar fan-out (bir nechta iste'molchi) va pipeline uchun qulay, lekin UI holati uchun Flow afzal."
    },
    {
     "type": "code",
     "title": "kanal.kt",
     "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.channels.*\n\nfun main() = runBlocking {\n    val kanal = produce(capacity = 3) {\n        for (i in 1..3) send(i * 10)\n        println(\"yuboruvchi tugadi\")\n    }\n    for (qiymat in kanal) {\n        println(\"olindi: $qiymat\")\n    }\n    println(\"closed: ${kanal.isClosedForReceive}\")\n}",
     "output": "yuboruvchi tugadi\nolindi: 10\nolindi: 20\nolindi: 30\nclosed: true"
    },
    {
     "type": "p",
     "html": "Pipeline'da har bir bosqich oldingi kanaldan o'qib, keyingisiga yozadi. Bu model backendda ishlov berish zanjirlari, Android'da esa fon vazifalarini bo'lish uchun ishlatiladi. Flow testlashda <code>runTest</code> virtual vaqtni boshqaradi; Turbine kutubxonasi esa oqim hodisalarini <code>awaitItem()</code> bilan aniq tekshiradi."
    },
    {
     "type": "code",
     "title": "test.kt",
     "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.channels.*\nimport kotlinx.coroutines.flow.*\nimport kotlinx.coroutines.test.*\nimport app.cash.turbine.test\nimport kotlin.test.Test\nimport kotlin.test.assertEquals\n\nclass HolatTest {\n    @Test\n    fun holatOqimi() = runTest {\n        val holat = MutableStateFlow(0)\n        holat.test {\n            assertEquals(0, awaitItem())\n            holat.value = 1\n            assertEquals(1, awaitItem())\n            cancelAndIgnoreRemainingEvents()\n        }\n        println(\"test tugadi\")\n    }\n}",
     "output": "test tugadi\nBUILD SUCCESSFUL"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Kanalni yopish",
     "html": "<code>close()</code> dan keyin yuborish <code>ClosedSendChannelException</code> beradi; qabul qiluvchi qolgan buferni o'qib, keyin tsiklni tugatadi. <code>consumeEach</code> kanalni avtomatik yopadi. Bir nechta iste'molchi bo'lsa, har bir element faqat bittasiga boradi — bu fan-out. Xatoni kanal orqali uzatish uchun <code>close(cause)</code> ishlatiladi."
    }
   ],
   "quiz": [
    {
     "q": "<code>capacity = 3</code> bo'lgan kanalda yuboruvchi qachon kutadi?",
     "options": [
      "Har bir yuborishda",
      "Faqat kanal yopilganda",
      "Hech qachon",
      "Bufer to'lganda"
     ],
     "answer": 3,
     "explain": "Bufer to'lgunча yuborish davom etadi; to'lgach, send iste'molchi joy bo'shatishini kutadi."
    },
    {
     "q": "<code>produce</code> builder qanday obyekt qaytaradi?",
     "options": [
      "<code>Flow</code>",
      "<code>ReceiveChannel</code>",
      "<code>Deferred</code>",
      "<code>Job</code> faqat"
     ],
     "answer": 1,
     "explain": "produce kanal qaytaradi (ReceiveChannel); blok tugagach kanal avtomatik yopiladi."
    },
    {
     "q": "Turbine kutubxonasidagi <code>awaitItem()</code> nima qiladi?",
     "options": [
      "Oqimni butunlay yopadi",
      "Har bir elementni ikki marta oladi",
      "Oqimdan keyingi elementni kutadi va qaytaradi",
      "Faqat StateFlow bilan ishlaydi"
     ],
     "answer": 2,
     "explain": "Turbine oqim hodisalarini navbat bilan tekshirish uchun awaitItem, awaitComplete kabi API'larni beradi."
    }
   ]
  },
  {
   "id": 70,
   "title": "Ktor server chuqur: pluginlar, auth va status pages",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Ktor server modulli: har bir imkoniyat plugin sifatida o'rnatiladi. <code>ContentNegotiation</code> JSON bilan ishlashni, <code>StatusPages</code> markazlashgan xato javoblarini, <code>Authentication</code> esa token tekshiruvini ta'minlaydi. Pluginlar <code>Application.module()</code> da bir marta sozlanadi va barcha marshrutlarga ta'sir qiladi. Bu tuzilma kodni takrorlanishdan saqlaydi."
    },
    {
     "type": "code",
     "title": "server.kt",
     "code": "import io.ktor.server.application.*\nimport io.ktor.server.auth.*\nimport io.ktor.server.plugins.contentnegotiation.*\nimport io.ktor.server.plugins.statuspages.*\nimport io.ktor.server.response.*\nimport io.ktor.server.routing.*\nimport io.ktor.serialization.kotlinx.json.*\nimport io.ktor.http.*\n\nfun Application.module() {\n    install(ContentNegotiation) { json() }\n    install(StatusPages) {\n        exception<IllegalArgumentException> { call, cause ->\n            call.respond(HttpStatusCode.BadRequest, mapOf(\"xato\" to cause.message))\n        }\n    }\n    install(Authentication) {\n        bearer(\"auth\") {\n            authenticate { token ->\n                if (token.token == \"secret\") UserIdPrincipal(\"aziza\") else null\n            }\n        }\n    }\n    routing {\n        get(\"/health\") { call.respond(mapOf(\"status\" to \"ok\")) }\n        authenticate(\"auth\") {\n            get(\"/me\") {\n                val user = call.principal<UserIdPrincipal>()!!\n                call.respond(mapOf(\"user\" to user.name))\n            }\n        }\n    }\n}",
     "output": "$ curl -s localhost:8080/health\n{\"status\":\"ok\"}\n$ curl -s -o /dev/null -w \"%{http_code}\\n\" localhost:8080/me\n401\n$ curl -s -H \"Authorization: Bearer secret\" localhost:8080/me\n{\"user\":\"aziza\"}"
    },
    {
     "type": "p",
     "html": "StatusPages xatolarni yagona formatga keltiradi, lekin biznes xatolarini istisno sifatida tashlash har doim ham qulay emas. Kichik loyihada <code>require</code> va <code>call.respond</code> yetarli, katta loyihada esa natija tipini <code>sealed</code> bilan modellashtirib, marshrutda status kodga aylantirish yaxshiroq. Quyida noto'g'ri so'rov va muvaffaqiyatli yaratish ko'rsatilgan."
    },
    {
     "type": "code",
     "title": "validation.kt",
     "code": "import io.ktor.server.application.*\nimport io.ktor.server.plugins.contentnegotiation.*\nimport io.ktor.server.plugins.statuspages.*\nimport io.ktor.server.request.*\nimport io.ktor.server.response.*\nimport io.ktor.server.routing.*\nimport io.ktor.serialization.kotlinx.json.*\nimport io.ktor.http.*\nimport kotlinx.serialization.Serializable\n\n@Serializable data class YangiVazifa(val sarlavha: String)\n\nfun Application.module() {\n    install(ContentNegotiation) { json() }\n    install(StatusPages) {\n        exception<IllegalArgumentException> { call, e ->\n            call.respond(HttpStatusCode.BadRequest, mapOf(\"xato\" to e.message))\n        }\n    }\n    routing {\n        post(\"/tasks\") {\n            val kirish = call.receive<YangiVazifa>()\n            require(kirish.sarlavha.isNotBlank()) { \"sarlavha bo'sh\" }\n            call.respond(HttpStatusCode.Created, mapOf(\"id\" to 1, \"sarlavha\" to kirish.sarlavha))\n        }\n    }\n}",
     "output": "$ curl -s -X POST localhost:8080/tasks -H \"Content-Type: application/json\" -d '{\"sarlavha\":\"\"}'\n{\"xato\":\"sarlavha bo'sh\"}\n$ curl -s -X POST localhost:8080/tasks -H \"Content-Type: application/json\" -d '{\"sarlavha\":\"Kotlin\"}'\n{\"id\":1,\"sarlavha\":\"Kotlin\"}"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Server pluginlari",
     "html": "Amaliy loyihada <code>CallLogging</code>, <code>Compression</code>, <code>CORS</code>, <code>RateLimit</code>, <code>ForwardedHeaders</code> va <code>RequestValidation</code> pluginlari tez-tez kerak bo'ladi. Ularni <code>application.conf</code> yoki kod orqali sozlang. Autentifikatsiya sirini kodga yozmang — environment yoki secret manager'dan oling."
    }
   ],
   "quiz": [
    {
     "q": "<code>StatusPages</code> pluginining asosiy vazifasi nima?",
     "options": [
      "Istisnolarni yagona HTTP javob formatiga aylantirish",
      "Marshrutlarni avtomatik yaratish",
      "Ma'lumotlar bazasiga ulanish",
      "JSON'ni siqish"
     ],
     "answer": 0,
     "explain": "StatusPages istisno va status kodlarni markazlashgan holda javobga aylantiradi."
    },
    {
     "q": "Ktor'da <code>bearer(\"auth\")</code> nima qiladi?",
     "options": [
      "Authorization header'ini avtomatik o'chiradi",
      "Faqat cookie'larni qabul qiladi",
      "JSON serializatsiyasini yoqadi",
      "Bearer tokenini tekshiruvchi autentifikatsiya providerini yaratadi"
     ],
     "answer": 3,
     "explain": "bearer provider token qiymatini tekshiradi va muvaffaqiyatli bo'lsa principal qaytaradi."
    },
    {
     "q": "Noto'g'ri so'rov tanasi uchun qaysi status kod mos?",
     "options": [
      "200 OK",
      "201 Created",
      "400 Bad Request",
      "500 Internal Server Error"
     ],
     "answer": 2,
     "explain": "Validatsiya xatosi mijoz tomonidan yuborilgan noto'g'ri ma'lumotni bildiradi — 400."
    }
   ]
  },
  {
   "id": 71,
   "title": "Ktor client: timeout, retry va MockEngine testlari",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<code>HttpClient</code> og'ir obyekt: ulanishlar hovuzi, pluginlar va konfiguratsiya saqlanadi. Uni ilova davomida bir marta yaratib qayta ishlatish kerak; har so'rovda yangi client yaratish resurslarni sarflaydi. <code>ContentNegotiation</code> JSON'ni avtomatik o'qiydi, <code>HttpTimeout</code> kutish vaqtini cheklaydi, <code>HttpRequestRetry</code> esa vaqtinchalik xatolarda so'rovni takrorlaydi."
    },
    {
     "type": "code",
     "title": "client.kt",
     "code": "import io.ktor.client.*\nimport io.ktor.client.call.*\nimport io.ktor.client.engine.cio.*\nimport io.ktor.client.plugins.*\nimport io.ktor.client.plugins.contentnegotiation.*\nimport io.ktor.client.request.*\nimport io.ktor.serialization.kotlinx.json.*\nimport kotlinx.coroutines.runBlocking\nimport kotlinx.serialization.Serializable\n\n@Serializable data class Vazifa(val id: Int, val sarlavha: String, val bajarildi: Boolean)\n\nval client = HttpClient(CIO) {\n    install(ContentNegotiation) { json() }\n    install(HttpTimeout) {\n        requestTimeoutMillis = 5_000\n        connectTimeoutMillis = 2_000\n    }\n    install(HttpRequestRetry) {\n        retryOnServerErrors(maxRetries = 2)\n        exponentialDelay()\n    }\n    defaultRequest {\n        url(\"https://api.noldan.uz\")\n        header(\"Accept\", \"application/json\")\n    }\n}\n\nsuspend fun vazifa(id: Int): Vazifa = client.get(\"/tasks/$id\").body()\n\nfun main() = runBlocking {\n    println(vazifa(7))\n    client.close()\n}",
     "output": "Vazifa(id=7, sarlavha=Kotlin, bajarildi=false)"
    },
    {
     "type": "p",
     "html": "Tarmoqni testlashda haqiqiy serverga bog'lanmaslik uchun <code>MockEngine</code> ishlatiladi. U so'rovni ushlab, oldindan tayyorlangan javobni qaytaradi; shu bilan serializatsiya va marshrut mantiqini tez, barqaror tekshirish mumkin. Testda client'ni yopishni unutmang — aks holda test jarayoni osilib qolishi mumkin."
    },
    {
     "type": "code",
     "title": "mock.kt",
     "code": "import io.ktor.client.*\nimport io.ktor.client.call.*\nimport io.ktor.client.engine.mock.*\nimport io.ktor.client.plugins.contentnegotiation.*\nimport io.ktor.client.request.*\nimport io.ktor.http.*\nimport io.ktor.serialization.kotlinx.json.*\nimport kotlinx.coroutines.runBlocking\nimport kotlinx.serialization.Serializable\n\n@Serializable data class Vazifa(val id: Int, val sarlavha: String, val bajarildi: Boolean)\n\nfun main() = runBlocking {\n    val engine = MockEngine { request ->\n        println(\"so'rov: ${request.url.encodedPath}\")\n        respond(\n            content = \"\"\"{\"id\":1,\"sarlavha\":\"Mock\",\"bajarildi\":true}\"\"\",\n            status = HttpStatusCode.OK,\n            headers = headersOf(HttpHeaders.ContentType, \"application/json\")\n        )\n    }\n    val client = HttpClient(engine) { install(ContentNegotiation) { json() } }\n    val vazifa = client.get(\"https://test.local/tasks/1\").body<Vazifa>()\n    println(vazifa)\n    println(vazifa.bajarildi)\n    client.close()\n}",
     "output": "so'rov: /tasks/1\nVazifa(id=1, sarlavha=Mock, bajarildi=true)\ntrue"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Retry va idempotentlik",
     "html": "Retry faqat idempotent so'rovlar (GET, PUT, DELETE) uchun xavfsiz. POST'ni avtomatik takrorlash ikki marta yaratishga olib kelishi mumkin; bunday holatda idempotency key ishlating. Timeout xatosini ham qayta urinish mumkin, lekin umumiy urinishlar sonini cheklang."
    }
   ],
   "quiz": [
    {
     "q": "Nega <code>HttpClient</code> ni har so'rovda yangidan yaratish tavsiya etilmaydi?",
     "options": [
      "U JSON'ni o'qiy olmaydi",
      "U faqat bitta oqimda ishlaydi",
      "U juda katta obyekt va ulanish hovuzini qayta yaratadi",
      "U avtomatik ravishda server ochadi"
     ],
     "answer": 2,
     "explain": "Client konfiguratsiya va resurslarni saqlaydi; qayta ishlatish unumdorlik va barqarorlik beradi."
    },
    {
     "q": "<code>MockEngine</code> qaysi maqsadda ishlatiladi?",
     "options": [
      "Haqiqiy serverga yukni oshirish",
      "Tarmoq so'rovlarini testda taqlid qilish",
      "Ma'lumotlar bazasini migratsiya qilish",
      "HttpClient'ni butunlay o'chirish"
     ],
     "answer": 1,
     "explain": "MockEngine so'rovlarga oldindan belgilangan javob qaytaradi, shuning uchun test tashqi tarmoqqa bog'liq bo'lmaydi."
    },
    {
     "q": "<code>requestTimeoutMillis</code> nimani cheklaydi?",
     "options": [
      "Ulanish ochilishini",
      "Faqat DNS so'rovini",
      "Serverdagi ishlov vaqtini",
      "Butun so'rovning bajarilish vaqtini"
     ],
     "answer": 3,
     "explain": "requestTimeoutMillis butun so'rov (yuborish va javobni kutish) uchun umumiy chegara beradi."
    }
   ]
  },
  {
   "id": 72,
   "title": "kotlinx.serialization chuqur: custom va polimorfizm",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<code>@Serializable</code> klass uchun serializer generatsiya qiladi, lekin ba'zi tiplar (masalan, <code>java.time.LocalDate</code>) uchun maxsus serializer kerak. <code>KSerializer</code> interfeysi <code>serialize</code> va <code>deserialize</code> metodlarini talab qiladi. Custom serializer'ni <code>@Serializable(with = ...)</code> bilan xossaga yoki butun tipga ulash mumkin."
    },
    {
     "type": "code",
     "title": "sana.kt",
     "code": "import kotlinx.serialization.*\nimport kotlinx.serialization.json.*\nimport java.time.LocalDate\n\nobject LocalDateSerializer : KSerializer<LocalDate> {\n    override val descriptor = PrimitiveSerialDescriptor(\"LocalDate\", PrimitiveKind.STRING)\n    override fun serialize(encoder: Encoder, value: LocalDate) =\n        encoder.encodeString(value.toString())\n    override fun deserialize(decoder: Decoder): LocalDate =\n        LocalDate.parse(decoder.decodeString())\n}\n\n@Serializable\ndata class Tadbir(\n    val nom: String,\n    @Serializable(with = LocalDateSerializer::class) val sana: LocalDate\n)\n\nfun main() {\n    val json = Json { prettyPrint = true }\n    val matn = json.encodeToString(Tadbir(\"Kotlin kunlari\", LocalDate.of(2026, 11, 5)))\n    println(matn)\n    val qayta = json.decodeFromString<Tadbir>(matn)\n    println(qayta.sana)\n}",
     "output": "{\n    \"nom\": \"Kotlin kunlari\",\n    \"sana\": \"2026-11-05\"\n}\n2026-11-05"
    },
    {
     "type": "p",
     "html": "Sealed ierarxiya uchun kotlinx.serialization polimorfik serializatsiyani qo'llab-quvvatlaydi. Har bir avlod <code>@Serializable</code> va <code>@SerialName</code> bilan belgilanadi; JSON'da diskriminator maydoni tipni ajratadi. Bu REST API'da turli shakldagi hodisalarni bitta ro'yxatda uzatish uchun qulay. <code>classDiscriminator</code> nomini o'zgartirish mumkin."
    },
    {
     "type": "code",
     "title": "shakl.kt",
     "code": "import kotlinx.serialization.*\nimport kotlinx.serialization.json.*\n\n@Serializable\nsealed interface Shakl {\n    @Serializable @SerialName(\"circle\")\n    data class Doira(val r: Double) : Shakl\n\n    @Serializable @SerialName(\"square\")\n    data class Kvadrat(val tomon: Double) : Shakl\n}\n\nfun main() {\n    val json = Json { classDiscriminator = \"tur\" }\n    val royxat: List<Shakl> = listOf(Shakl.Doira(2.0), Shakl.Kvadrat(3.0))\n    val matn = json.encodeToString(royxat)\n    println(matn)\n    val qayta = json.decodeFromString<List<Shakl>>(matn)\n    println(qayta)\n}",
     "output": "[{\"tur\":\"circle\",\"r\":2.0},{\"tur\":\"square\",\"tomon\":3.0}]\n[Doira(r=2.0), Kvadrat(tomon=3.0)]"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Json konfiguratsiyasi",
     "html": "<code>ignoreUnknownKeys = true</code> eski client bilan moslikni saqlaydi; <code>explicitNulls = false</code> null maydonlarni chiqarmaydi; <code>encodeDefaults = true</code> default qiymatlarni ham yozadi. <code>JsonNamingStrategy.SnakeCase</code> bilan maydon nomlarini avtomatik o'zgartirish mumkin, lekin u experimental API ekanini yodda tuting."
    }
   ],
   "quiz": [
    {
     "q": "Custom serializer qaysi interfeysni amalga oshiradi?",
     "options": [
      "<code>Serializer</code>",
      "<code>JsonEncoder</code>",
      "<code>Serializable</code>",
      "<code>KSerializer</code>"
     ],
     "answer": 3,
     "explain": "<code>KSerializer&lt;T&gt;</code> serialize/deserialize va descriptor'ni talab qiladi."
    },
    {
     "q": "Polimorfik JSON'da tipni ajratuvchi maydon qaysi sozlama bilan nomlanadi?",
     "options": [
      "<code>classDiscriminator</code>",
      "<code>prettyPrint</code>",
      "<code>ignoreUnknownKeys</code>",
      "<code>isLenient</code>"
     ],
     "answer": 0,
     "explain": "classDiscriminator diskriminator maydon nomini belgilaydi; sukut bo'yicha \"type\"."
    },
    {
     "q": "<code>ignoreUnknownKeys = true</code> nima uchun foydali?",
     "options": [
      "Barcha maydonlarni null qiladi",
      "Noma'lum maydonlarni o'qishda xatoni oldini oladi",
      "JSON'ni tekshirmaydi",
      "Faqat sealed klasslarda ishlaydi"
     ],
     "answer": 1,
     "explain": "Server yangi maydon qo'shganda eski client xato bermasligi uchun noma'lum kalitlar tashlab yuboriladi."
    }
   ]
  },
  {
   "id": 73,
   "title": "REST API dizayni: versiyalash, xatolar va validatsiya",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "Yaxshi REST API resurslarga tayanadi: <code>/api/v1/tasks</code>, <code>/api/v1/tasks/{id}</code>. Versiya yo'lda yoki header'da bo'lishi mumkin, lekin uni boshidan belgilash keyingi o'zgarishlarni osonlashtiradi. Ro'yxat uchun pagination (<code>limit</code>, <code>offset</code> yoki cursor), yaratish uchun <code>201 Created</code> va <code>Location</code> header, xatolar uchun esa izchil JSON sxema kerak."
    },
    {
     "type": "code",
     "title": "pagination.kt",
     "code": "import io.ktor.http.*\nimport io.ktor.server.application.*\nimport io.ktor.server.response.*\nimport io.ktor.server.routing.*\nimport kotlinx.serialization.Serializable\n\n@Serializable data class Vazifa(val id: Int, val sarlavha: String)\n@Serializable data class Sahifa(val elementlar: List<Vazifa>, val keyingi: String?)\n\nval barcha = listOf(Vazifa(1, \"Kotlin\"), Vazifa(2, \"Ktor\"), Vazifa(3, \"Compose\"))\n\nfun Routing.vazifaRoutes() {\n    get(\"/api/v1/tasks\") {\n        val limit = call.request.queryParameters[\"limit\"]?.toIntOrNull() ?: 20\n        require(limit in 1..100) { \"limit 1..100 oralig'ida bo'lsin\" }\n        val natija = barcha.take(limit)\n        val keyingi = if (barcha.size > limit) \"?offset=$limit\" else null\n        call.respond(Sahifa(natija, keyingi))\n    }\n}",
     "output": "$ curl -s \"localhost:8080/api/v1/tasks?limit=2\"\n{\"elementlar\":[{\"id\":1,\"sarlavha\":\"Kotlin\"},{\"id\":2,\"sarlavha\":\"Ktor\"}],\"keyingi\":\"?offset=2\"}\n$ curl -s -o /dev/null -w \"%{http_code}\\n\" \"localhost:8080/api/v1/tasks?limit=500\"\n400"
    },
    {
     "type": "p",
     "html": "Yaratishda server yangi resurs manzilini <code>Location</code> header'ida qaytarishi kerak. Xatolar esa <code>{ \"kod\": \"...\", \"xabar\": \"...\" }</code> kabi barqaror shaklda bo'lishi lozim: client matnni emas, <code>kod</code> ni tekshiradi. Quyidagi yordamchi funksiya biznes xato kodini HTTP statusga aylantiradi; shu bilan marshrutlar qisqa qoladi."
    },
    {
     "type": "code",
     "title": "statuslar.kt",
     "code": "import io.ktor.http.*\n\ndata class ApiXato(val kod: String, val xabar: String)\n\nfun httpStatus(kod: String): HttpStatusCode = when (kod) {\n    \"VALIDATION\" -> HttpStatusCode.BadRequest\n    \"AUTH\" -> HttpStatusCode.Unauthorized\n    \"FORBIDDEN\" -> HttpStatusCode.Forbidden\n    \"NOT_FOUND\" -> HttpStatusCode.NotFound\n    \"CONFLICT\" -> HttpStatusCode.Conflict\n    else -> HttpStatusCode.InternalServerError\n}\n\nfun main() {\n    listOf(\"VALIDATION\", \"NOT_FOUND\", \"CONFLICT\", \"NOMA'LUM\").forEach {\n        println(\"$it -> ${httpStatus(it).value}\")\n    }\n}",
     "output": "VALIDATION -> 400\nNOT_FOUND -> 404\nCONFLICT -> 409\nNOMA'LUM -> 500"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "API shartnomasi",
     "html": "Pagination uchun <code>limit/offset</code> oddiy, lekin katta jadvalda cursor ishonchliroq. <code>PUT</code> idempotent, <code>PATCH</code> qismiy yangilanish, <code>DELETE</code> takrorlansa ham bir xil natija berishi kerak. Xato javobida stack trace, SQL yoki ichki yo'l ko'rsatilmasin — bu xavfsizlik muammosi."
    }
   ],
   "quiz": [
    {
     "q": "Yangi resurs yaratilganda qaysi status va header juftligi mos?",
     "options": [
      "200 OK va ETag",
      "201 Created va Location",
      "204 No Content va Allow",
      "302 Found va Set-Cookie"
     ],
     "answer": 1,
     "explain": "201 yaratilgan resursni bildiradi, Location esa uning manzilini ko'rsatadi."
    },
    {
     "q": "Nega xato javobida barqaror <code>kod</code> maydoni kerak?",
     "options": [
      "HTTP status kodini almashtiradi",
      "JSON hajmini oshiradi",
      "Client xato turini tarjima matniga bog'lanmasdan aniqlaydi",
      "Faqat log uchun kerak"
     ],
     "answer": 2,
     "explain": "Mashina o'qiy oladigan kod client uchun barqaror; xabar matni o'zgarishi mumkin."
    },
    {
     "q": "<code>PUT</code> so'rovining idempotentligi nimani bildiradi?",
     "options": [
      "Bir xil so'rov takrorlansa ham resurs holati bir xil bo'ladi",
      "So'rov faqat bir marta yuboriladi",
      "So'rov hech qachon xato bermaydi",
      "Server javobni keshlaydi"
     ],
     "answer": 0,
     "explain": "Idempotentlik takroriy bajarishning natijani o'zgartirmasligini bildiradi, so'rovlar sonini emas."
    }
   ]
  },
  {
   "id": 74,
   "title": "Exposed: DSL, transaction va repository",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Exposed — Kotlin uchun yengil SQL kutubxonasi. U ikki uslubni beradi: type-safe DSL va DAO. DSL'da jadval <code>Table</code> obyekti sifatida e'lon qilinadi, so'rovlar Kotlin kodida yoziladi va kompilyator ustun nomlarini tekshiradi. Har bir ma'lumotlar bazasi amali <code>transaction { }</code> ichida bajariladi: xato bo'lsa o'zgarishlar qaytariladi."
    },
    {
     "type": "code",
     "title": "jadval.kt",
     "code": "import org.jetbrains.exposed.sql.*\nimport org.jetbrains.exposed.sql.transactions.transaction\n\nobject Vazifalar : Table(\"tasks\") {\n    val id = integer(\"id\").autoIncrement()\n    val sarlavha = varchar(\"sarlavha\", 200)\n    val bajarildi = bool(\"bajarildi\").default(false)\n    override val primaryKey = PrimaryKey(id)\n}\n\nfun main() {\n    Database.connect(\"jdbc:h2:mem:test;DB_CLOSE_DELAY=-1\", driver = \"org.h2.Driver\")\n    transaction {\n        SchemaUtils.create(Vazifalar)\n        Vazifalar.insert { it[sarlavha] = \"Kotlin\" }\n        Vazifalar.insert {\n            it[sarlavha] = \"Ktor\"\n            it[bajarildi] = true\n        }\n        Vazifalar.selectAll().orderBy(Vazifalar.id).forEach {\n            println(\"${it[Vazifalar.id]}: ${it[Vazifalar.sarlavha]} (${it[Vazifalar.bajarildi]})\")\n        }\n    }\n}",
     "output": "1: Kotlin (false)\n2: Ktor (true)"
    },
    {
     "type": "p",
     "html": "Repository qatlami SQL detallarini biznes kodidan yashiradi. Quyidagi misolda yaratish, yangilash va o'qish alohida metodlarda; har biri o'z tranzaksiyasida ishlaydi. Amaliy loyihada <code>transaction</code> blokini suspend funksiya ichida uzoq ushlab turmang — <code>newSuspendedTransaction</code> yoki <code>Dispatchers.IO</code> bilan chegaralang."
    },
    {
     "type": "code",
     "title": "repository.kt",
     "code": "import org.jetbrains.exposed.sql.*\nimport org.jetbrains.exposed.sql.transactions.transaction\n\nclass VazifaRepository(private val db: Database) {\n    fun yarat(sarlavha: String): Int = transaction(db) {\n        val stmt = Vazifalar.insert { it[Vazifalar.sarlavha] = sarlavha }\n        stmt[Vazifalar.id]\n    }\n\n    fun bajarildi(id: Int): Boolean = transaction(db) {\n        Vazifalar.update({ Vazifalar.id eq id }) {\n            it[Vazifalar.bajarildi] = true\n        } > 0\n    }\n\n    fun hammasi(): List<Pair<Int, String>> = transaction(db) {\n        Vazifalar.selectAll().map {\n            it[Vazifalar.id] to it[Vazifalar.sarlavha]\n        }\n    }\n}\n\nfun main() {\n    val db = Database.connect(\"jdbc:h2:mem:repo;DB_CLOSE_DELAY=-1\", driver = \"org.h2.Driver\")\n    transaction(db) { SchemaUtils.create(Vazifalar) }\n    val repo = VazifaRepository(db)\n    val id = repo.yarat(\"Kotlin\")\n    println(repo.bajarildi(id))\n    println(repo.hammasi())\n}",
     "output": "true\n[(1, Kotlin)]"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Tranzaksiya chegaralari",
     "html": "Bir tranzaksiya ichida tarmoq so'rovi yoki uzoq CPU ishi qilmang: ulanish band qoladi va boshqa so'rovlar kutadi. Migratsiyalar uchun Flyway yoki Liquibase, ulanishlar hovuzi uchun HikariCP ishlatiladi. <code>SchemaUtils.create</code> faqat prototip va testlarda mos; production'da versiyalangan migratsiya kerak."
    }
   ],
   "quiz": [
    {
     "q": "Exposed'da <code>transaction { }</code> bloki nima beradi?",
     "options": [
      "Amallarni atomik bajaradi va xatoda qaytaradi",
      "SQL so'rovlarini avtomatik keshlaydi",
      "Ma'lumotlar bazasini avtomatik yaratadi",
      "Faqat o'qish so'rovlariga ruxsat beradi"
     ],
     "answer": 0,
     "explain": "Tranzaksiya chegarasi atomiklikni ta'minlaydi; istisno bo'lsa o'zgarishlar rollback qilinadi."
    },
    {
     "q": "Exposed DSL'da tenglik sharti qaysi operator bilan yoziladi?",
     "options": [
      "<code>==</code>",
      "<code>equals</code>",
      "<code>eq</code>",
      "<code>is</code>"
     ],
     "answer": 2,
     "explain": "Ustun uchun <code>eq</code> infix operatori SQL tenglik shartini yaratadi."
    },
    {
     "q": "Coroutine ichida Exposed ishlatganda uzoq tranzaksiyadan qochishning sababi nima?",
     "options": [
      "Tranzaksiya coroutine'ni avtomatik bekor qiladi",
      "Ulanish band qolib, boshqa so'rovlarni kutdirishi mumkin",
      "Exposed suspend funksiyalarni qo'llamaydi",
      "SQLite tranzaksiyani qo'llamaydi"
     ],
     "answer": 1,
     "explain": "Tranzaksiya davomida ulanish band; uzoq I/O hovuzni tugatib, kechikish va deadlock xavfini oshiradi."
    }
   ]
  },
  {
   "id": 75,
   "title": "Android arxitekturasi: ViewModel, UDF va SavedStateHandle",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Android'da UI holati yagona manbadan boshqarilishi kerak. Unidirectional Data Flow (UDF) qoidasi: UI event yuboradi, ViewModel holatni yangilaydi, UI yangi holatni chizadi. Holat immutable <code>data class</code> bo'ladi, o'zgarishlar esa <code>copy</code> bilan yangi nusxa yaratadi. Bu yondashuv testlashni osonlashtiradi va tasodifiy holat buzilishlarini kamaytiradi."
    },
    {
     "type": "code",
     "title": "reducer.kt",
     "code": "data class VazifaUiState(\n    val yuklanmoqda: Boolean = false,\n    val vazifalar: List<String> = emptyList(),\n    val xato: String? = null,\n    val filtr: String = \"hammasi\"\n)\n\nsealed interface VazifaEvent {\n    data object Yukla : VazifaEvent\n    data class Muvaffaqiyat(val royxat: List<String>) : VazifaEvent\n    data class Xato(val xabar: String) : VazifaEvent\n}\n\nfun reduce(holat: VazifaUiState, event: VazifaEvent): VazifaUiState = when (event) {\n    VazifaEvent.Yukla -> holat.copy(yuklanmoqda = true, xato = null)\n    is VazifaEvent.Muvaffaqiyat -> holat.copy(yuklanmoqda = false, vazifalar = event.royxat, xato = null)\n    is VazifaEvent.Xato -> holat.copy(yuklanmoqda = false, xato = event.xabar)\n}\n\nfun main() {\n    var holat = VazifaUiState()\n    listOf(\n        VazifaEvent.Yukla,\n        VazifaEvent.Muvaffaqiyat(listOf(\"Kotlin\")),\n        VazifaEvent.Xato(\"tarmoq\")\n    ).forEach {\n        holat = reduce(holat, it)\n        println(holat)\n    }\n}",
     "output": "VazifaUiState(yuklanmoqda=true, vazifalar=[], xato=null, filtr=hammasi)\nVazifaUiState(yuklanmoqda=false, vazifalar=[Kotlin], xato=null, filtr=hammasi)\nVazifaUiState(yuklanmoqda=false, vazifalar=[Kotlin], xato=tarmoq, filtr=hammasi)"
    },
    {
     "type": "p",
     "html": "<code>ViewModel</code> konfiguratsiya o'zgarganda yashaydi, lekin process o'ldirilsa yo'qoladi. Muhim filtr yoki tanlangan elementni <code>SavedStateHandle</code> ga yozib qo'yish kerak. ViewModel <code>Context</code>, <code>Activity</code> yoki View'ni saqlamasligi shart — aks holda memory leak bo'ladi. Quyidagi ViewModel holatni reducer orqali yangilaydi va filtrni tiklaydi."
    },
    {
     "type": "code",
     "title": "viewmodel.kt",
     "code": "class VazifaViewModel(\n    private val repo: VazifaRepository,\n    private val saved: SavedStateHandle\n) : ViewModel() {\n    private val _holat = MutableStateFlow(VazifaUiState())\n    val holat: StateFlow<VazifaUiState> = _holat.asStateFlow()\n\n    init {\n        val filtr = saved.get<String>(\"filtr\") ?: \"hammasi\"\n        _holat.update { it.copy(filtr = filtr) }\n        println(\"ViewModel yaratildi: filtr=$filtr\")\n    }\n\n    fun yukla() {\n        viewModelScope.launch {\n            _holat.update { reduce(it, VazifaEvent.Yukla) }\n            runCatching { repo.hammasi() }\n                .onSuccess { royxat ->\n                    _holat.update { reduce(it, VazifaEvent.Muvaffaqiyat(royxat)) }\n                }\n                .onFailure { e ->\n                    _holat.update { reduce(it, VazifaEvent.Xato(e.message ?: \"xato\")) }\n                }\n            println(\"holat: ${_holat.value}\")\n        }\n    }\n\n    fun filtrOzgardi(yangi: String) {\n        saved[\"filtr\"] = yangi\n        _holat.update { it.copy(filtr = yangi) }\n    }\n}",
     "output": "I/System.out: ViewModel yaratildi: filtr=bugun\nI/System.out: holat: VazifaUiState(yuklanmoqda=false, vazifalar=[Kotlin], xato=null, filtr=bugun)"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Context va leak",
     "html": "ViewModel'ga <code>Application</code> kerak bo'lsa, <code>AndroidViewModel</code> yoki DI orqali bering; Activity context'ini saqlamang. <code>SavedStateHandle</code> faqat kichik, serializatsiyalanadigan qiymatlar uchun. Katta ro'yxat yoki bitmap'ni saqlash Bundle hajmini oshirib, <code>TransactionTooLargeException</code> ga olib keladi."
    }
   ],
   "quiz": [
    {
     "q": "<code>SavedStateHandle</code> asosan nima uchun kerak?",
     "options": [
      "Katta rasmlarni saqlash",
      "Process o'ldirilgach muhim UI holatini tiklash",
      "Tarmoq so'rovlarini keshlash",
      "Ma'lumotlar bazasini almashtirish"
     ],
     "answer": 1,
     "explain": "SavedStateHandle kichik holatni Bundle orqali saqlaydi va process death'dan keyin tiklaydi."
    },
    {
     "q": "UDF'da UI holatini kim o'zgartiradi?",
     "options": [
      "UI bevosita repository'ni o'zgartiradi",
      "Layout XML avtomatik",
      "Har bir Composable global o'zgaruvchini yozadi",
      "ViewModel event asosida yangi immutable holat yaratadi"
     ],
     "answer": 3,
     "explain": "UDF'da event ViewModel'ga keladi, u holatni yangilaydi, UI esa faqat o'qib chizadi."
    },
    {
     "q": "Nega ViewModel'da Activity context'ini saqlash xavfli?",
     "options": [
      "Activity'dan uzoq yashovchi ViewModel leak'ga olib keladi",
      "Konfiguratsiya o'zgarganda ViewModel yo'qoladi",
      "Context serializatsiya qilinmaydi",
      "ViewModel faqat Application bilan ishlaydi"
     ],
     "answer": 0,
     "explain": "ViewModel konfiguratsiya o'zgarishidan uzoq yashaydi; eski Activity'ga havola leak qiladi."
    }
   ]
  },
  {
   "id": 76,
   "title": "Compose ichki olami: recomposition, stability va performance",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Compose UI'ni qayta chizmaydi — u faqat o'qilgan state o'zgarganda tegishli kompozitsiya qismlarini qayta bajaradi (recomposition). <code>remember</code> qiymatni qayta kompozitsiyalar orasida saqlaydi; kalit o'zgarsa, qiymat qaytadan yaratiladi. <code>derivedStateOf</code> esa boshqa state'lardan hisoblangan qiymatni keshlaydi va faqat natija o'zgarganda obunachilarni xabardor qiladi."
    },
    {
     "type": "code",
     "title": "hisoblagich.kt",
     "code": "@Composable\nfun Hisoblagich() {\n    var son by remember { mutableIntStateOf(0) }\n    println(\"recompose: $son\")\n    Button(onClick = { son++ }) {\n        Text(\"Bosildi: $son\")\n    }\n}",
     "output": "I/System.out: recompose: 0\nI/System.out: recompose: 1\nI/System.out: recompose: 2"
    },
    {
     "type": "p",
     "html": "Compose kompilyatori barqaror (stable) parametrli composable'ni o'zgartirmasdan o'tkazib yuborishi (skip) mumkin. <code>data class</code> barcha maydonlari immutable bo'lsa barqaror hisoblanadi; <code>List</code> esa interfeys bo'lgani uchun har doim barqaror emas — <code>kotlinx.collections.immutable</code> yoki <code>@Immutable</code> yordam beradi. Lambda'lar beqaror bo'lsa, <code>remember</code> bilan o'raladi."
    },
    {
     "type": "code",
     "title": "derived.kt",
     "code": "import androidx.compose.runtime.derivedStateOf\nimport androidx.compose.runtime.mutableStateOf\n\nfun main() {\n    val matn = mutableStateOf(\"Kotlin\")\n    val qisqa = derivedStateOf { matn.value.length <= 3 }\n    println(qisqa.value)\n    matn.value = \"Kot\"\n    println(qisqa.value)\n    matn.value = \"Kotlin\"\n    println(qisqa.value)\n}",
     "output": "false\ntrue\nfalse"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "LazyColumn kalitlari",
     "html": "<code>LazyColumn</code> elementlariga <code>key = { it.id }</code> bering: ro'yxat qayta tartiblanganda <code>remember</code> holati noto'g'ri elementga ko'chib ketmaydi. Og'ir hisobni composable ichida emas, <code>remember(key)</code> yoki ViewModel'da bajaring. Recomposition'ni kamaytirish uchun state'ni imkon qadar pastga (eng yaqin iste'molchiga) uzating."
    }
   ],
   "quiz": [
    {
     "q": "<code>remember</code> nima vazifani bajaradi?",
     "options": [
      "Tarmoq so'rovini bajaradi",
      "Composable'ni butunlay o'chiradi",
      "Recomposition orasida qiymatni saqlaydi",
      "State'ni global qiladi"
     ],
     "answer": 2,
     "explain": "remember qiymatni kompozitsiya hayoti davomida eslab qoladi; kalit o'zgarsa qayta hisoblanadi."
    },
    {
     "q": "<code>derivedStateOf</code> qachon obunachilarni xabardor qiladi?",
     "options": [
      "Hisoblangan natija haqiqatan o'zgarganda",
      "Har bir recompositionda",
      "Faqat dastur ishga tushganda",
      "Har soniyada"
     ],
     "answer": 0,
     "explain": "derivedStateOf natijani keshlaydi va faqat natija o'zgarganda o'zgarish signalini beradi."
    },
    {
     "q": "LazyColumn'da <code>key</code> parametrining vazifasi nima?",
     "options": [
      "Elementlarni avtomatik saralaydi",
      "Ro'yxatni cheksiz qiladi",
      "Har bir elementni qayta yaratadi",
      "Element identifikatorini saqlab, holatni to'g'ri elementga bog'laydi"
     ],
     "answer": 3,
     "explain": "Barqaror key Compose'ga elementlarni kuzatish va remember holatini to'g'ri saqlash imkonini beradi."
    }
   ]
  },
  {
   "id": 77,
   "title": "Compose Navigation va ko'p ekranli oqim",
   "minutes": 17,
   "blocks": [
    {
     "type": "p",
     "html": "<code>NavController</code> ekranlar orasidagi o'tish va orqaga qaytish stekini boshqaradi. <code>NavHost</code> ichida marshrutlar <code>composable(\"route\")</code> bilan e'lon qilinadi; parametrlar yo'lda <code>{id}</code> ko'rinishida uzatiladi. Ekranlar bir-biriga to'g'ridan-to'g'ri bog'lanmasligi kerak: navigatsiya callback orqali yuqoriga uzatiladi, bu testlash va qayta ishlatishni osonlashtiradi."
    },
    {
     "type": "code",
     "title": "navhost.kt",
     "code": "@Composable\nfun Ilova() {\n    val nav = rememberNavController()\n    NavHost(navController = nav, startDestination = \"royxat\") {\n        composable(\"royxat\") {\n            RoyxatEkrani(onOpen = { id ->\n                println(\"navigate: tafsilot/$id\")\n                nav.navigate(\"tafsilot/$id\")\n            })\n        }\n        composable(\n            route = \"tafsilot/{id}\",\n            arguments = listOf(navArgument(\"id\") { type = NavType.IntType })\n        ) { entry ->\n            val id = entry.arguments?.getInt(\"id\") ?: 0\n            TafsilotEkrani(id, onBack = {\n                println(\"back: royxat\")\n                nav.popBackStack()\n            })\n        }\n    }\n}",
     "output": "I/System.out: navigate: tafsilot/7\nI/System.out: tafsilot: 7\nI/System.out: back: royxat"
    },
    {
     "type": "p",
     "html": "Navigation 2.8+ type-safe marshrutlarni qo'llab-quvvatlaydi: marshrut <code>@Serializable</code> obyekt yoki data class bo'ladi, argumentlar esa maydon sifatida uzatiladi. Bu satr xatolarini yo'q qiladi va IDE'da refactoring'ni osonlashtiradi. <code>toRoute()</code> joriy destination argumentlarini tipga xavfsiz aylantiradi."
    },
    {
     "type": "code",
     "title": "typesafe.kt",
     "code": "import androidx.navigation.compose.*\nimport androidx.navigation.toRoute\nimport kotlinx.serialization.Serializable\n\n@Serializable data object Royxat\n@Serializable data class Tafsilot(val id: Int)\n\n@Composable\nfun Ilova() {\n    val nav = rememberNavController()\n    NavHost(navController = nav, startDestination = Royxat) {\n        composable<Royxat> {\n            RoyxatEkrani(onOpen = { id -> nav.navigate(Tafsilot(id)) })\n        }\n        composable<Tafsilot> { entry ->\n            val route: Tafsilot = entry.toRoute()\n            println(\"type-safe id: ${route.id}\")\n            TafsilotEkrani(route.id, onBack = { nav.popBackStack() })\n        }\n    }\n}",
     "output": "I/System.out: type-safe id: 42"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Navigatsiya qoidalari",
     "html": "Ekranlar orasida butun obyektni emas, identifikatorni uzating — state'ni ViewModel yoki repository'dan qayta yuklang. Chuqur havolalar (deep link) uchun <code>deepLinks</code> ro'yxatini e'lon qiling. Pastki navigatsiyada har bir tab o'z back stack'iga ega bo'lishi uchun <code>saveState/restoreState</code> ishlatiladi. Back tugmasi <code>popBackStack()</code> orqali ishlaydi."
    }
   ],
   "quiz": [
    {
     "q": "<code>NavHost</code> nima vazifani bajaradi?",
     "options": [
      "Ma'lumotlar bazasini yaratadi",
      "Faqat animatsiyalarni boshqaradi",
      "Tarmoq so'rovlarini yuboradi",
      "Marshrutlarni (destination) ro'yxatga olib, joriy ekranni ko'rsatadi"
     ],
     "answer": 3,
     "explain": "NavHost NavController bilan bog'lanib, marshrutlarga mos composable'ni chizadi."
    },
    {
     "q": "Oldingi ekranga qaytish uchun qaysi metod ishlatiladi?",
     "options": [
      "<code>navigate()</code>",
      "<code>popBackStack()</code>",
      "<code>clearBackStack()</code>",
      "<code>restart()</code>"
     ],
     "answer": 1,
     "explain": "popBackStack back stack'dan joriy destination'ni olib tashlab, oldingisiga qaytadi."
    },
    {
     "q": "Type-safe navigation'da marshrut qanday e'lon qilinadi?",
     "options": [
      "Satr sifatida, faqat kichik harflar bilan",
      "XML faylda",
      "<code>@Serializable</code> obyekt yoki data class sifatida",
      "Faqat enum orqali"
     ],
     "answer": 2,
     "explain": "Navigation 2.8+ @Serializable marshrutlarni qabul qiladi va argumentlarni tipga xavfsiz bog'laydi."
    }
   ]
  },
  {
   "id": 78,
   "title": "Room chuqur: relations, migration va Flow",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Room — SQLite ustidagi type-safe qatlam. <code>@Entity</code> jadvalni, <code>@Dao</code> so'rovlarni, <code>@Database</code> esa bazani belgilaydi. Bog'langan jadvallar uchun <code>@Relation</code> ishlatiladi: u asosiy obyektga bog'liq ro'yxatni alohida so'rov bilan yuklaydi. <code>@Transaction</code> esa natijaning izchilligini kafolatlaydi."
    },
    {
     "type": "code",
     "title": "entities.kt",
     "code": "@Entity(tableName = \"users\")\ndata class UserEntity(@PrimaryKey val id: Long, val ism: String)\n\n@Entity(\n    tableName = \"tasks\",\n    foreignKeys = [ForeignKey(\n        entity = UserEntity::class,\n        parentColumns = [\"id\"],\n        childColumns = [\"user_id\"],\n        onDelete = ForeignKey.CASCADE\n    )],\n    indices = [Index(\"user_id\")]\n)\ndata class TaskEntity(\n    @PrimaryKey val id: Long,\n    val sarlavha: String,\n    @ColumnInfo(name = \"user_id\") val userId: Long\n)\n\ndata class UserWithTasks(\n    @Embedded val user: UserEntity,\n    @Relation(parentColumn = \"id\", entityColumn = \"user_id\")\n    val tasks: List<TaskEntity>\n)\n\n@Dao\ninterface UserDao {\n    @Transaction\n    @Query(\"SELECT * FROM users\")\n    fun kuzat(): Flow<List<UserWithTasks>>\n}",
     "output": "I/Room: jadval yaratildi: users(id, ism), tasks(id, sarlavha, user_id)\nI/Room: indeks: index_tasks_user_id"
    },
    {
     "type": "p",
     "html": "Baza sxemasi o'zgarganda versiyani oshirib, <code>Migration</code> yozish kerak. Migratsiya eski jadvalni yangi sxemaga o'tkazadi; noto'g'ri SQL ma'lumotni yo'qotishi mumkin. <code>fallbackToDestructiveMigration()</code> faqat prototipda mos — production'da u barcha ma'lumotni o'chiradi. Migratsiyaniinstrumental testda tekshirish tavsiya etiladi."
    },
    {
     "type": "code",
     "title": "migration.kt",
     "code": "val MIGRATION_1_2 = object : Migration(1, 2) {\n    override fun migrate(db: SupportSQLiteDatabase) {\n        db.execSQL(\n            \"ALTER TABLE tasks ADD COLUMN priority INTEGER NOT NULL DEFAULT 0\"\n        )\n        println(\"migration 1 -> 2 tugadi\")\n    }\n}\n\nval baza = Room.databaseBuilder(context, AppDatabase::class.java, \"noldan.db\")\n    .addMigrations(MIGRATION_1_2)\n    .build()\n\nfun main() {\n    println(\"Room versiyasi: 2\")\n    println(\"migratsiya tayyor: ${MIGRATION_1_2.endVersion}\")\n}",
     "output": "I/System.out: migration 1 -> 2 tugadi\nI/System.out: Room versiyasi: 2\nI/System.out: migratsiya tayyor: 2"
    },
    {
     "type": "note",
     "variant": "warning",
     "title": "Flow va tranzaksiya",
     "html": "DAO <code>Flow</code> qaytarsa, jadval o'zgarganda yangi ro'yxat avtomatik keladi. Uni UI'da <code>collectAsStateWithLifecycle</code> bilan yig'ing. Katta ro'yxatni asosiy thread'da o'qimang: Room suspend funksiyalarni o'zi background'da bajaradi. <code>@Relation</code> ichki so'rovlari uchun <code>@Transaction</code> majburiy."
    }
   ],
   "quiz": [
    {
     "q": "<code>@Relation</code> nimani yuklaydi?",
     "options": [
      "Boshqa jadvaldagi bog'langan obyektlar ro'yxatini",
      "Faqat bitta ustunni",
      "Indekslarni avtomatik",
      "Migratsiya tarixini"
     ],
     "answer": 0,
     "explain": "@Relation asosiy entityga tegishli bog'langan entity'lar ro'yxatini alohida so'rov bilan to'ldiradi."
    },
    {
     "q": "Room'da sxema o'zgarganda nima qilish kerak?",
     "options": [
      "Hech narsa, Room avtomatik hal qiladi",
      "Bazani o'chirish har ishga tushishda",
      "Faqat DAO'ni o'zgartirish",
      "Versiyani oshirib, migratsiya yozish"
     ],
     "answer": 3,
     "explain": "Har bir sxema o'zgarishi yangi versiya va eski ma'lumotni saqlovchi migratsiya talab qiladi."
    },
    {
     "q": "DAO <code>Flow</code> qaytarganda qanday afzallik beradi?",
     "options": [
      "So'rovni faqat bir marta bajaradi",
      "Ma'lumotlar bazasini o'chiradi",
      "Jadval o'zgarganda yangi ma'lumot avtomatik oqadi",
      "UI thread'da bloklaydi"
     ],
     "answer": 2,
     "explain": "Room Flow'ni kuzatadi va tegishli jadval o'zgarganda yangi natijani chiqaradi."
    }
   ]
  },
  {
   "id": 79,
   "title": "Android testlash: unit, Compose UI va DI",
   "minutes": 18,
   "blocks": [
    {
     "type": "p",
     "html": "Android testlash uch qatlamga bo'linadi: sof Kotlin unit testlari, ViewModel testlari va UI (instrumentation) testlari. ViewModel'da <code>viewModelScope</code> <code>Dispatchers.Main</code> dan foydalanadi, shuning uchun testda <code>Dispatchers.setMain(StandardTestDispatcher())</code> o'rnatiladi. Repository o'rniga fake ishlatilsa, test tarmoqqa va vaqtga bog'liq bo'lmaydi."
    },
    {
     "type": "code",
     "title": "viewmodeltest.kt",
     "code": "@OptIn(ExperimentalCoroutinesApi::class)\nclass VazifaViewModelTest {\n    private val dispatcher = StandardTestDispatcher()\n\n    @BeforeTest\n    fun oldin() {\n        Dispatchers.setMain(dispatcher)\n    }\n\n    @AfterTest\n    fun keyin() {\n        Dispatchers.resetMain()\n    }\n\n    @Test\n    fun yuklash() = runTest {\n        val repo = FakeRepo(listOf(\"Kotlin\", \"Ktor\"))\n        val vm = VazifaViewModel(repo, SavedStateHandle())\n        vm.yukla()\n        advanceUntilIdle()\n        assertEquals(listOf(\"Kotlin\", \"Ktor\"), vm.holat.value.vazifalar)\n        assertFalse(vm.holat.value.yuklanmoqda)\n    }\n}",
     "output": "> Task :app:testDebugUnitTest\nBUILD SUCCESSFUL in 4s\n2 actionable tasks: 2 executed"
    },
    {
     "type": "p",
     "html": "Compose UI testlari semantik daraxt orqali ishlaydi: <code>onNodeWithText</code>, <code>onNodeWithTag</code> va <code>performClick</code> kabi amallar. Test uchun alohida logic va UI'ni ajratish muhim: ViewModel testda tekshiriladi, Compose test esa faqat ko'rinish va foydalanuvchi amallarini qamraydi. DI (Hilt yoki Koin) testda fake modul bilan almashtiriladi."
    },
    {
     "type": "code",
     "title": "composeTest.kt",
     "code": "@get:Rule\nval compose = createComposeRule()\n\n@Test\nfun tugmaBosilgandaSonOshadi() {\n    compose.setContent { Hisoblagich() }\n    compose.onNodeWithText(\"Bosildi: 0\").assertExists()\n    compose.onNodeWithText(\"Bosildi: 0\").performClick()\n    compose.onNodeWithText(\"Bosildi: 1\").assertExists()\n}",
     "output": "> Task :app:connectedDebugAndroidTest\nStarting 1 tests on Pixel_7_API_35\nBUILD SUCCESSFUL in 12s"
    },
    {
     "type": "note",
     "variant": "tip",
     "title": "Test piramidasi",
     "html": "Ko'p unit test, o'rtacha integratsiya testi, kam UI test — bu test piramidasi. Fake repository haqiqiy biznes qoidalarini tekshirish uchun mock'dan yaxshiroq. Coroutine oqimlarini Turbine bilan, vaqtni <code>runTest</code> virtual clock bilan boshqaring. UI testda matn o'zgarishiga emas, semantik tegga tayaning."
    }
   ],
   "quiz": [
    {
     "q": "ViewModel testida <code>Dispatchers.setMain</code> nima uchun kerak?",
     "options": [
      "Tarmoqni o'chirish uchun",
      "UI'ni chizish uchun",
      "<code>viewModelScope</code> test dispatcher'ida ishlashi uchun",
      "Bazani yaratish uchun"
     ],
     "answer": 2,
     "explain": "viewModelScope Main dispatcher'ga tayanadi; testda uni StandardTestDispatcher bilan almashtirish kerak."
    },
    {
     "q": "Compose testida elementni matni bo'yicha topish uchun qaysi API ishlatiladi?",
     "options": [
      "<code>findViewById</code>",
      "<code>onNodeWithText</code>",
      "<code>querySelector</code>",
      "<code>getElementById</code>"
     ],
     "answer": 1,
     "explain": "Compose test semantik daraxtdan <code>onNodeWithText</code> kabi finder'lar bilan element topadi."
    },
    {
     "q": "Fake repository mock'dan nimasi bilan afzal?",
     "options": [
      "U har doim tezroq kompilyatsiya bo'ladi",
      "U tarmoqni avtomatik yoqadi",
      "U UI'ni almashtiradi",
      "Haqiqiy xatti-harakatni taqlid qilib, testni barqaror qiladi"
     ],
     "answer": 3,
     "explain": "Fake aniq va bashorat qilinadigan natija beradi; mock esa ko'pincha chaqiruvlarni tekshirishga qaratiladi."
    }
   ]
  }
 ],
 "examLesson": {
  "id": 100,
  "title": "Yakuniy imtihon",
  "minutes": 25,
  "blocks": [
   {
    "type": "p",
    "html": "Kotlin kursining yakuniy imtihoni. 12 ta savol butun yo'lni qamrab oladi: til asoslari va null xavfsizlik, OOP va sealed ierarxiyalar, generics va variance, delegatsiya, inline va value class, contracts, coroutines va Flow, Ktor, serialization, Exposed, Jetpack Compose, KMP hamda arxitektura qarorlari."
   },
   {
    "type": "ul",
    "items": [
     "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
     "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
     "Savollar 1–99-darslar bo'yicha, jumladan 2-jildning ilg'or mavzulari bo'yicha.",
     "Har bir javobdan keyin izoh ko'rsatiladi; imtihonni qayta topshirish mumkin.",
     "O'tgandan so'ng sertifikat yuklab olinadi."
    ]
   },
   {
    "type": "p",
    "html": "Avval kod misollarini mustaqil yozib ko'ring: inline funksiyada non-local return, <code>out</code>/<code>in</code> variance, <code>by</code> delegatsiyasi, <code>stateIn</code> bilan Flow, Ktor client sozlamalari va Exposed tranzaksiyasi. Har bir noto'g'ri javobdan keyin tegishli darsga qaytib, mavzuni amalda mustahkamlang."
   },
   {
    "type": "note",
    "variant": "tip",
    "title": "Imtihon strategiyasi",
    "html": "Savolni oxirigacha o'qing va barcha variantlarni solishtiring. Xato qilishdan qo'rqmasdan javob bering: izoh sizga aniq mavzuni ko'rsatadi. Vaqt yetmasa, avval o'zingiz ishonchli bilgan savollarni belgilang."
   }
  ],
  "quiz": [],
  "isExam": true
 },
 "exam": {
  "passScore": 9,
  "total": 12,
  "questions": []
 },
 "hours": "~40 soat",
 "testCount": 297,
 "heroDesc": "Kotlin kursining 2-jildi: 50 ta ilg'or dars, 150 test va 12 savollik imtihon. Inline va value class, variance, delegatsiya, contracts, reflection, DSL, Flow va kanallar, Ktor, Exposed, Jetpack Compose, KMP, performance, Gradle, patternlar va Ktor + Android loyihasi.",
 "metaDescription": "Kotlin 2-jild: 100 darslik to'liq kurs. Inline, value class, generics, variance, delegatsiya, contracts, reflection, DSL, coroutines, Flow, Ktor, serialization, Exposed, Jetpack Compose, Room, KMP, performance va amaliy loyiha — O'zbek tilida."
};
})();
