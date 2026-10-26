/* Noldan — Scala course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.scala = {
    "id": "scala",
    "title": "Scala",
    "logoClass": "course-logo--scala",
    "logoText": "Sc",
    "level": "Boshlovchi",
    "hours": "~20 soat",
    "testCount": 147,
    "lang": "scala",
    "interactive": "none",
    "heroTitle": "Scala: JVM'da kuchli va xavfsiz kod",
    "heroDesc": "Scala 3 tilini noldan o'rganing: 49 dars, 147 test va 12 savollik yakuniy imtihon. O'zgarmas qiymatlar, pattern matching, generiklar, given'lar, Future, testlash, Akka, Cats, Spark va to'rt qismli amaliy loyiha.",
    "metaDescription": "Scala kursi: 49 dars, 147 test, Scala 3, sbt, kolleksiyalar, pattern matching, given va type classes, Future, Akka, Cats, Spark hamda 12 savollik yakuniy imtihon. O'zbek tilida noldan o'rganing.",
    "modules": [
      {
        "title": "Asoslar",
        "lessons": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "title": "Kolleksiyalar va obyektlar",
        "lessons": [
          5,
          6,
          7,
          8
        ]
      },
      {
        "title": "Funksional yondashuv",
        "lessons": [
          9,
          10,
          11,
          12
        ]
      },
      {
        "title": "Pattern matching va ADT",
        "lessons": [
          13,
          14,
          15,
          16,
          17,
          18
        ]
      },
      {
        "title": "Kolleksiyalar ustaxonasi",
        "lessons": [
          19,
          20,
          21,
          22,
          23
        ]
      },
      {
        "title": "Funksiyalar va tiplar",
        "lessons": [
          24,
          25,
          26,
          27,
          28,
          29
        ]
      },
      {
        "title": "Scala 3 imkoniyatlari",
        "lessons": [
          30,
          31,
          32,
          33,
          34
        ]
      },
      {
        "title": "Asinxronlik va testlash",
        "lessons": [
          35,
          36,
          37
        ]
      },
      {
        "title": "Ekotizim",
        "lessons": [
          38,
          39,
          40,
          41,
          42
        ]
      },
      {
        "title": "Amaliy loyiha",
        "lessons": [
          43,
          44,
          45,
          46,
          47,
          48,
          49
        ]
      },
      {
        "title": "Yakuniy imtihon",
        "lessons": [
          50
        ]
      }
    ],
    "lessons": [
      {
        "id": 1,
        "title": "Scala, JVM va birinchi dastur",
        "minutes": 13,
        "blocks": [
          {
            "type": "p",
            "html": "Scala — <b>JVM</b> (Java Virtual Machine) ustida ishlaydigan zamonaviy dasturlash tili. U funksional va obyektga yo'naltirilgan yondashuvlarni birlashtiradi: o'zgarmas qiymatlar, kuchli tip tizimi, pattern matching va boy kolleksiyalar shu tilning asosiy belgilaridir."
          },
          {
            "type": "code",
            "title": "salom.scala",
            "code": "val ism = \"Aziza\"\nprintln(s\"Salom, $ism!\")\nprintln(2 + 3 * 4)",
            "output": "Salom, Aziza!\n14"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "println nima qiladi?",
            "html": "<code>println()</code> qiymatni konsolga chiqaradi va yangi qatorga o'tadi. <code>s\"matn $ism\"</code> — string interpolatsiya: <code>$ism</code> o'rniga o'zgaruvchining qiymati qo'yiladi."
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>scala-cli run fayl.scala</code>",
                "Skriptni darhol kompilyatsiya qilib ishga tushirish"
              ],
              [
                "<code>sbt run</code>",
                "Loyihadagi asosiy dasturni ishga tushirish"
              ],
              [
                "<code>sbt compile</code>",
                "Manba kodini kompilyatsiya qilish"
              ],
              [
                "<code>sbt test</code>",
                "Loyiha testlarini bajarish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "Main.scala",
            "code": "object Main {\n  def main(args: Array[String]): Unit = {\n    println(\"Salom, Scala!\")\n    println(\"JVM ustida ishlayapti\")\n  }\n}",
            "output": "Salom, Scala!\nJVM ustida ishlayapti"
          },
          {
            "type": "ul",
            "items": [
              "Scala 3 — kursda ishlatiladigan asosiy versiya.",
              "<code>scala-cli</code> kichik skript va mashqlar uchun qulay.",
              "<code>sbt</code> katta loyihalarni boshqarish va testlash uchun ishlatiladi.",
              "JVM tufayli Java kutubxonalaridan bevosita foydalanish mumkin."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Scala qaysi platformada ishlaydi?",
            "options": [
              "Faqat brauzerda",
              "JVM'da",
              "Faqat mobil qurilmada",
              "Faqat Windows'da"
            ],
            "answer": 1,
            "explain": "Scala kodi JVM bayt-kodiga kompilyatsiya qilinadi va JVM mavjud har qanday muhitda ishlaydi."
          },
          {
            "q": "Kichik Scala skriptini tez ishga tushirish uchun qaysi vosita qulay?",
            "options": [
              "scala-cli",
              "sbt-only",
              "npm",
              "pip"
            ],
            "answer": 0,
            "explain": "scala-cli bitta buyruq bilan kompilyatsiya va ishga tushirishni bajaradi."
          },
          {
            "q": "println(\"Salom\") konsolga nimani chiqaradi?",
            "options": [
              "\"Salom\" qo'shtirnoq bilan",
              "salom",
              "Salom",
              "Xato"
            ],
            "answer": 2,
            "explain": "println matnning o'zini chiqaradi; qo'shtirnoqlar kod sintaksisining qismi."
          }
        ]
      },
      {
        "id": 2,
        "title": "val, var, tip inference va matnlar",
        "minutes": 14,
        "blocks": [
          {
            "type": "p",
            "html": "Scala'da qiymat <code>val</code> yoki o'zgaruvchi <code>var</code> bilan yaratiladi. <code>val</code> — o'zgarmas bog'lanish: unga boshqa qiymat berib bo'lmaydi. <code>var</code> esa keyinchalik o'zgartirilishi mumkin. Boshlovchi sifatida deyarli har doim <code>val</code> tanlang."
          },
          {
            "type": "code",
            "title": "qiymatlar.scala",
            "code": "val ism: String = \"Aziza\"\nval yosh = 16\nvar ball = 90\nball = ball + 5\n\nprintln(ism)\nprintln(yosh)\nprintln(ball)\nprintln(ism.toUpperCase)",
            "output": "Aziza\n16\n95\nAZIZA"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "var bilan ehtiyot bo'ling",
            "html": "O'zgaruvchan holat (mutable state) kodni kuzatishni qiyinlashtiradi. <code>var</code> faqat haqiqatan kerak bo'lganda ishlatilsin. Yangi qiymat yaratish uchun <code>val yangi = eski + 1</code> yozish ko'pincha yaxshiroq."
          },
          {
            "type": "table",
            "head": [
              "Turi",
              "Misol",
              "Izoh"
            ],
            "rows": [
              [
                "<code>Int</code>",
                "<code>val yosh = 16</code>",
                "Butun son"
              ],
              [
                "<code>Double</code>",
                "<code>val narx = 4.5</code>",
                "Kasr son"
              ],
              [
                "<code>String</code>",
                "<code>val ism = \"Aziza\"</code>",
                "Matn"
              ],
              [
                "<code>Boolean</code>",
                "<code>val faol = true</code>",
                "true yoki false"
              ]
            ]
          },
          {
            "type": "code",
            "title": "matn.scala",
            "code": "val ism = \"Bek\"\nval ball = 88\n\nprintln(s\"$ism $ball ball to'pladi\")\nprintln(\"Keyingi ball: \" + (ball + 5))\nprintln(ism.length)",
            "output": "Bek 88 ball to'pladi\nKeyingi ball: 93\n3"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Tip inference",
            "html": "Scala ko'p hollarda tipni o'zi aniqlaydi: <code>16</code> — <code>Int</code>, <code>4.5</code> — <code>Double</code>. Lekin murakkab joylarda tipni aniq yozish kodni o'qishni osonlashtiradi: <code>val ism: String = \"Aziza\"</code>."
          }
        ],
        "quiz": [
          {
            "q": "O'zgarmas qiymat yaratish uchun qaysi kalit so'z ishlatiladi?",
            "options": [
              "val",
              "var",
              "def",
              "let"
            ],
            "answer": 0,
            "explain": "val bilan bog'langan qiymatni keyinchalik o'zgartirib bo'lmaydi."
          },
          {
            "q": "val yosh = 16 da yosh tipi qanday aniqlanadi?",
            "options": [
              "String",
              "Int",
              "Double",
              "AnyVal"
            ],
            "answer": 1,
            "explain": "Butun son literali Int sifatida qabul qilinadi; bu tip inference deyiladi."
          },
          {
            "q": "s\"$ism\" yozuvi nima qiladi?",
            "options": [
              "Matnni faylga yozadi",
              "Matnni katta harfga o'tkazadi",
              "Matnga o'zgaruvchi qiymatini qo'shadi",
              "Sonni yaxlitlaydi"
            ],
            "answer": 2,
            "explain": "s-interpolator $ belgisidan keyingi o'zgaruvchi qiymatini matnga joylashtiradi."
          }
        ]
      },
      {
        "id": 3,
        "title": "Shartlar, ifodalar va match",
        "minutes": 15,
        "blocks": [
          {
            "type": "p",
            "html": "Scala'da <code>if</code> shunchaki buyruq emas, <b>ifoda</b> (expression): u natija qaytaradi. Shu sababli <code>if</code> natijasini to'g'ridan-to'g'ri o'zgaruvchiga berish mumkin. Ko'p variantli tanlov uchun <code>match</code> ishlatiladi."
          },
          {
            "type": "code",
            "title": "shart.scala",
            "code": "val ball = 85\nval baho =\n  if (ball >= 90) \"A\"\n  else if (ball >= 80) \"B\"\n  else \"C\"\n\nprintln(baho)\nprintln(if (ball >= 60) \"O'tdi\" else \"Yiqildi\")",
            "output": "B\nO'tdi"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "if — ifoda",
            "html": "Scala'da <code>if</code> blokining oxirgi ifodasi natija bo'ladi. <code>val x = if (a &gt; b) a else b</code> to'liq qonuniy yozuv. Alohida ternary operator yo'q, chunki unga ehtiyoj qolmaydi."
          },
          {
            "type": "table",
            "head": [
              "Qurilma",
              "Qachon ishlatiladi",
              "Misol"
            ],
            "rows": [
              [
                "<code>if / else</code>",
                "Ikki-uch variantli shart",
                "<code>if (ball &gt;= 60) \"O'tdi\" else \"Yiqildi\"</code>"
              ],
              [
                "<code>match</code>",
                "Ko'p variantli tanlov",
                "<code>kun match { case 1 =&gt; \"Dushanba\"; case _ =&gt; \"Boshqa\" }</code>"
              ],
              [
                "<code>case _</code>",
                "Standart (default) holat",
                "<code>case _ =&gt; \"Boshqa\"</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "match.scala",
            "code": "val kun = 3\nval nom = kun match {\n  case 1 => \"Dushanba\"\n  case 2 => \"Seshanba\"\n  case 3 => \"Chorshanba\"\n  case _ => \"Boshqa kun\"\n}\n\nprintln(nom)\n\nval rol = \"admin\"\nval ruxsat = rol match {\n  case \"admin\" => \"to'liq\"\n  case \"user\" => \"cheklangan\"\n  case _ => \"yo'q\"\n}\nprintln(ruxsat)",
            "output": "Chorshanba\nto'liq"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "match to'liq bo'lishi kerak",
            "html": "<code>match</code> barcha mumkin bo'lgan holatlarni qamrab olishi shart. Aks holda kompilyator ogohlantiradi yoki ish vaqtida <code>MatchError</code> yuz beradi. <code>case _</code> — qolgan barcha holatlar uchun zaxira variant."
          }
        ],
        "quiz": [
          {
            "q": "Scala'da if qanday qurilma?",
            "options": [
              "Faqat operator, natija qaytarmaydi",
              "Natija qaytaruvchi ifoda",
              "Faqat tsikl",
              "Faqat metod"
            ],
            "answer": 1,
            "explain": "if blokining oxirgi ifodasi qiymat sifatida qaytadi."
          },
          {
            "q": "match ichida standart holat qanday yoziladi?",
            "options": [
              "default",
              "else",
              "any",
              "case _"
            ],
            "answer": 3,
            "explain": "case _ barcha qolgan holatlarni ushlaydi."
          },
          {
            "q": "match ifodasi bajarilganda nima bo'ladi?",
            "options": [
              "Birinchi mos case natijasini qaytaradi",
              "Barcha case'larni bajaradi",
              "Faqat oxirgi case'ni bajaradi",
              "Har doim xato beradi"
            ],
            "answer": 0,
            "explain": "match yuqoridan pastga tekshiradi va birinchi mos case natijasini qaytaradi."
          }
        ]
      },
      {
        "id": 4,
        "title": "Funksiyalar, standart va nomlangan parametrlar",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Funksiya — qayta ishlatiladigan kod bloki. Scala'da u <code>def</code> bilan e'lon qilinadi: nom, parametrlar, qaytish tipi va tana. Bir qatorli funksiyada jingalak qavslar tushirib qoldirilishi mumkin."
          },
          {
            "type": "code",
            "title": "funksiyalar.scala",
            "code": "def salomlash(ism: String): String = s\"Salom, $ism!\"\n\ndef qosh(a: Int, b: Int = 10): Int = a + b\n\nprintln(salomlash(\"Aziza\"))\nprintln(qosh(5))\nprintln(qosh(5, 20))\nprintln(qosh(b = 7, a = 3))",
            "output": "Salom, Aziza!\n15\n25\n10"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Standart va nomlangan parametrlar",
            "html": "<code>b: Int = 10</code> — standart qiymat: argument berilmasa, 10 ishlatiladi. <code>qosh(b = 7, a = 3)</code> esa nomlangan argumentlar: tartib muhim emas. Bu uzoq parametr ro'yxatli funksiyalarda o'qishni ancha osonlashtiradi."
          },
          {
            "type": "table",
            "head": [
              "Qism",
              "Misol"
            ],
            "rows": [
              [
                "Kalit so'z",
                "<code>def</code>"
              ],
              [
                "Parametrlar",
                "<code>(a: Int, b: Int = 10)</code>"
              ],
              [
                "Qaytish tipi",
                "<code>: Int</code>"
              ],
              [
                "Tana",
                "<code>= a + b</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "rekursiya.scala",
            "code": "def faktorial(n: Int): Long =\n  if (n <= 1) 1L\n  else n * faktorial(n - 1)\n\nprintln(faktorial(5))\nprintln(faktorial(10))",
            "output": "120\n3628800"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Tail recursion",
            "html": "Chuqur rekursiya stack'ni to'ldirishi mumkin. Scala kompilyatori <code>@annotation.tailrec</code> bilan belgilangan funksiyani tsiklga aylantira oladi, lekin faqat oxirgi chaqiruv rekursiv bo'lsa. Oddiy misollarda <code>foldLeft</code> ham yaxshi alternativ."
          }
        ],
        "quiz": [
          {
            "q": "Funksiya e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
            "options": [
              "fun",
              "function",
              "def",
              "lambda"
            ],
            "answer": 2,
            "explain": "Scala'da def funksiya yoki metodni e'lon qiladi."
          },
          {
            "q": "def qosh(a: Int, b: Int = 10) uchun qosh(5) natijasi nima?",
            "options": [
              "5",
              "15",
              "10",
              "Xato"
            ],
            "answer": 1,
            "explain": "b uchun standart qiymat 10 ishlatiladi, natija 5 + 10 = 15."
          },
          {
            "q": "Nomlangan argumentlar nimaga yordam beradi?",
            "options": [
              "Argument tartibini eslab qolish shart emas",
              "Funksiyani o'chiradi",
              "Tipni avtomatik o'zgartiradi",
              "Faqat sonlar bilan ishlaydi"
            ],
            "answer": 0,
            "explain": "qosh(b = 7, a = 3) kabi yozuvda parametrlar nomi bo'yicha bog'lanadi."
          }
        ]
      },
      {
        "id": 5,
        "title": "Kolleksiyalar: List, Vector, Map, Set",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Scala kolleksiyalari — ma'lumotlar bilan ishlashning asosiy vositasi. <code>List</code> va <code>Vector</code> tartiblangan elementlar, <code>Map</code> kalit-qiymat juftlari, <code>Set</code> esa takrorlanmaydigan qiymatlarni saqlaydi. Standart kolleksiyalar odatda <b>o'zgarmas</b>."
          },
          {
            "type": "code",
            "title": "list.scala",
            "code": "val sonlar = List(1, 2, 3, 4, 5)\n\nprintln(sonlar.map(_ * 2))\nprintln(sonlar.filter(_ % 2 == 0))\nprintln(sonlar.foldLeft(0)(_ + _))",
            "output": "List(2, 4, 6, 8, 10)\nList(2, 4)\n15"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "map, filter, foldLeft",
            "html": "<code>map</code> har bir elementni o'zgartiradi, <code>filter</code> shartga moslarini qoldiradi, <code>foldLeft</code> esa boshlang'ich qiymatdan boshlab natijani jamlaydi. Ular asl kolleksiyani o'zgartirmaydi — yangi kolleksiya qaytaradi."
          },
          {
            "type": "table",
            "head": [
              "Kolleksiya",
              "Tartib",
              "Takrorlanish"
            ],
            "rows": [
              [
                "<code>List</code>",
                "Bor",
                "Bor"
              ],
              [
                "<code>Vector</code>",
                "Bor",
                "Bor"
              ],
              [
                "<code>Set</code>",
                "Kafolatlanmaydi",
                "Yo'q"
              ],
              [
                "<code>Map</code>",
                "Kalitlar tartibi kafolatlanmaydi",
                "Kalitlar takrorlanmaydi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "map-set.scala",
            "code": "val ismlar = Vector(\"Aziza\", \"Bek\", \"Dilnoza\")\nval baholar = Map(\"Aziza\" -> 92, \"Bek\" -> 78)\nval kurslar = Set(\"R\", \"Scala\", \"R\")\n\nprintln(ismlar(1))\nprintln(baholar(\"Aziza\"))\nprintln(baholar.getOrElse(\"Dilnoza\", 0))\nprintln(kurslar.size)\nprintln(kurslar.contains(\"Scala\"))",
            "output": "Bek\n92\n0\n2\ntrue"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Map'da yo'q kalit",
            "html": "<code>baholar(\"Dilnoza\")</code> kalit bo'lmasa <code>NoSuchElementException</code> beradi. Xavfsiz usul — <code>get()</code> yoki <code>getOrElse()</code>: ular <code>Option</code> yoki standart qiymat qaytaradi. <code>Set</code> esa takroriy <code>\"R\"</code> ni avtomatik olib tashlaydi."
          }
        ],
        "quiz": [
          {
            "q": "List(1, 2, 3).map(_ * 2) natijasi nima?",
            "options": [
              "List(2, 4, 6)",
              "List(1, 2, 3)",
              "6",
              "List(2, 3, 4)"
            ],
            "answer": 0,
            "explain": "map har bir elementga funksiyani qo'llab, yangi List qaytaradi."
          },
          {
            "q": "Map'da yo'q kalit uchun xavfsiz qiymat olish usuli qaysi?",
            "options": [
              "map(key)",
              "apply(key)",
              "getOrElse(key, default)",
              "keys(key)"
            ],
            "answer": 2,
            "explain": "getOrElse kalit bo'lmasa ko'rsatilgan standart qiymatni qaytaradi."
          },
          {
            "q": "Set qanday xususiyatga ega?",
            "options": [
              "Takroriy elementlarni saqlaydi",
              "Takroriy elementlarni olib tashlaydi",
              "Faqat sonlarni saqlaydi",
              "Tartibni kafolatlaydi"
            ],
            "answer": 1,
            "explain": "Set to'plam bo'lgani uchun bir xil qiymat faqat bir marta saqlanadi."
          }
        ]
      },
      {
        "id": 6,
        "title": "Case class, pattern matching va Option",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "<b>Case class</b> — ma'lumot modeli yaratishning eng qulay usuli. U tenglikni taqqoslash, <code>toString</code>, <code>copy</code> va pattern matching uchun kerakli metodlarni avtomatik yaratadi. <code>Option</code> esa qiymat bor-yo'qligini xavfsiz ifodalaydi."
          },
          {
            "type": "code",
            "title": "case-class.scala",
            "code": "case class Talaba(ism: String, ball: Int)\n\nval aziza = Talaba(\"Aziza\", 92)\nprintln(aziza)\nprintln(aziza.copy(ball = 95))\nprintln(aziza.ism)",
            "output": "Talaba(Aziza,92)\nTalaba(Aziza,95)\nAziza"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Case class nima beradi?",
            "html": "<code>new</code> yozmasdan obyekt yaratish, maydonlar bo'yicha taqqoslash, <code>copy()</code> bilan nusxa yaratish va <code>match</code> ichida maydonlarni ajratish. Bu — Scala'dagi ma'lumot modeli uchun standart tanlov."
          },
          {
            "type": "table",
            "head": [
              "Konstruksiya",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>case class</code>",
                "Ma'lumot modeli va avtomatik metodlar"
              ],
              [
                "<code>match</code>",
                "Qiymatni naqshlar bo'yicha ajratish"
              ],
              [
                "<code>Option</code>",
                "Qiymat bor (<code>Some</code>) yoki yo'q (<code>None</code>)"
              ]
            ]
          },
          {
            "type": "code",
            "title": "pattern.scala",
            "code": "case class Talaba(ism: String, ball: Int)\n\ndef baho(t: Talaba): String = t match {\n  case Talaba(_, ball) if ball >= 90 => \"A\"\n  case Talaba(_, ball) if ball >= 80 => \"B\"\n  case _ => \"C\"\n}\n\nprintln(baho(Talaba(\"Aziza\", 92)))\nprintln(baho(Talaba(\"Bek\", 78)))",
            "output": "A\nC"
          },
          {
            "type": "code",
            "title": "option.scala",
            "code": "def topish(ism: String): Option[Int] =\n  Map(\"Aziza\" -> 92, \"Bek\" -> 78).get(ism)\n\nprintln(topish(\"Aziza\"))\nprintln(topish(\"Jasur\"))\nprintln(topish(\"Jasur\").getOrElse(0))",
            "output": "Some(92)\nNone\n0"
          }
        ],
        "quiz": [
          {
            "q": "case class'ning copy metodi nima qiladi?",
            "options": [
              "Obyektni o'chiradi",
              "Nusxa yaratib, ayrim maydonlarni o'zgartiradi",
              "Faqat matn qaytaradi",
              "Yangi sinf yaratadi"
            ],
            "answer": 1,
            "explain": "copy() mavjud obyektdan nusxa olib, ko'rsatilgan maydonlarni yangilaydi."
          },
          {
            "q": "Pattern matching'da guard (qo'shimcha shart) qayerda yoziladi?",
            "options": [
              "case dan oldin",
              "=> dan keyin",
              "Faqat _ bilan",
              "case naqshi va => orasida"
            ],
            "answer": 3,
            "explain": "Masalan: case Talaba(_, ball) if ball >= 90 => \"A\"."
          },
          {
            "q": "Map(\"a\" -> 1).get(\"b\") natijasi nima?",
            "options": [
              "None",
              "Some(1)",
              "0",
              "Xato"
            ],
            "answer": 0,
            "explain": "get() kalit bo'lmasa xato bermaydi, None qaytaradi."
          }
        ]
      },
      {
        "id": 7,
        "title": "OOP: class, object, trait va meros",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Scala to'liq obyektga yo'naltirilgan til. <code>class</code> — obyektlar shabloni, <code>object</code> — aynan bitta nusxa (singleton), <code>trait</code> esa interfeys va tayyor xatti-harakatni birlashtiradi. Meros olish <code>extends</code> bilan amalga oshiriladi."
          },
          {
            "type": "code",
            "title": "class.scala",
            "code": "class Hisob(var balans: Double) {\n  def oshir(summa: Double): Unit = {\n    balans += summa\n  }\n}\n\nval hisob = new Hisob(100.0)\nhisob.oshir(50.0)\nprintln(hisob.balans)",
            "output": "150.0"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "class va object farqi",
            "html": "<code>class</code> dan <code>new</code> bilan ko'p nusxa yaratiladi. <code>object</code> esa bitta nusxa: u dastur boshlanganda yaratiladi. Bir xil nomdagi class va object <b>companion</b> deyiladi va bir-birining private a'zolariga kira oladi."
          },
          {
            "type": "table",
            "head": [
              "Konstruksiya",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>class</code>",
                "Obyektlar shabloni, ko'p nusxa"
              ],
              [
                "<code>object</code>",
                "Singleton, yordamchi metodlar"
              ],
              [
                "<code>trait</code>",
                "Interfeys + tayyor metodlar"
              ],
              [
                "<code>extends</code>",
                "Meros olish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "trait.scala",
            "code": "trait Hayvon {\n  def ovoz: String\n  def tanishtir(): String = \"Men \" + ovoz + \" deyman\"\n}\n\nclass Mushuk extends Hayvon {\n  def ovoz: String = \"miyov\"\n}\n\nclass Talaba(val ism: String)\n\nobject Talaba {\n  def yarat(ism: String): Talaba = new Talaba(ism)\n}\n\nval mushuk = new Mushuk\nprintln(mushuk.tanishtir())\nprintln(Talaba.yarat(\"Aziza\").ism)",
            "output": "Men miyov deyman\nAziza"
          },
          {
            "type": "ul",
            "items": [
              "<code>trait</code> ichida abstract metod ham, tayyor metod ham bo'lishi mumkin.",
              "<code>class Mushuk extends Hayvon</code> — trait'ni meros olish.",
              "<code>object Talaba</code> — class bilan bir xil nomdagi companion object.",
              "Companion object ko'pincha obyekt yaratish uchun <code>yarat()</code> kabi fabrika metodini saqlaydi."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Trait nima?",
            "options": [
              "Faqat o'zgaruvchi",
              "Fayl tizimi",
              "Metodlari bo'lishi mumkin bo'lgan interfeysga o'xshash konstruksiya",
              "Faqat sikl"
            ],
            "answer": 2,
            "explain": "trait abstract va tayyor metodlarni birlashtiradi va class'lar tomonidan meros olinadi."
          },
          {
            "q": "object'ning class'dan asosiy farqi nima?",
            "options": [
              "Bir nechta nusxa yaratadi",
              "Singleton — faqat bitta nusxa",
              "Faqat meros oladi",
              "Faqat son saqlaydi"
            ],
            "answer": 1,
            "explain": "object — singleton: dasturda uning bitta nusxasi bo'ladi."
          },
          {
            "q": "class parametri var bilan yozilsa nima bo'ladi?",
            "options": [
              "Maydon o'zgartiriladigan bo'ladi",
              "Maydon o'zgarmas bo'ladi",
              "Class abstract bo'ladi",
              "Faqat konstruktorda ko'rinadi"
            ],
            "answer": 0,
            "explain": "var maydon uchun setter yaratiladi, shuning uchun qiymatni o'zgartirish mumkin."
          }
        ]
      },
      {
        "id": 8,
        "title": "Xatolarni boshqarish: Try, Either, Option",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Xato yuz berishi mumkin bo'lgan kodda istisnolarni tashlash o'rniga natijani <b>qiymat</b> sifatida qaytarish mumkin. Scala buning uchun <code>Option</code>, <code>Either</code> va <code>Try</code> beradi. Bu yondashuv kodni oldindan aytiladigan va kompilyator tekshiradigan qiladi."
          },
          {
            "type": "code",
            "title": "try.scala",
            "code": "import scala.util.{Try, Success, Failure}\n\ndef bolish(a: Int, b: Int): Try[Int] = Try(a / b)\n\nprintln(bolish(10, 2))\nprintln(bolish(10, 0))",
            "output": "Success(5)\nFailure(java.lang.ArithmeticException: / by zero)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Try nimani ushlaydi?",
            "html": "<code>Try</code> blok ichida yuz bergan istisnoni ushlab, <code>Failure</code> ga aylantiradi. Muvaffaqiyatli natija <code>Success</code> bo'ladi. <code>recover</code> va <code>getOrElse</code> bilan xatoga javob berish mumkin."
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Qachon ishlatiladi"
            ],
            "rows": [
              [
                "<code>Option[A]</code>",
                "Qiymat bo'lmasligi normal holat"
              ],
              [
                "<code>Either[E, A]</code>",
                "Xato haqida ma'lumot kerak"
              ],
              [
                "<code>Try[A]</code>",
                "Istisno tashlashi mumkin bo'lgan kod"
              ]
            ]
          },
          {
            "type": "code",
            "title": "either-option.scala",
            "code": "def parseYosh(matn: String): Either[String, Int] =\n  matn.toIntOption match {\n    case Some(yosh) if yosh >= 0 => Right(yosh)\n    case Some(_) => Left(\"Yosh manfiy bo'lmasin\")\n    case None => Left(\"Son emas\")\n  }\n\nprintln(parseYosh(\"16\"))\nprintln(parseYosh(\"-3\"))\nprintln(parseYosh(\"abc\"))\n\nval son: Option[Int] = \"42\".toIntOption\nprintln(son.map(_ * 2))\nprintln(son.getOrElse(0))",
            "output": "Right(16)\nLeft(Yosh manfiy bo'lmasin)\nLeft(Son emas)\nSome(84)\n42"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Qaysi birini tanlash?",
            "html": "Qiymat yo'qligi kutilgan holat bo'lsa — <code>Option</code>. Xato sababini ko'rsatish kerak bo'lsa — <code>Either</code>. Tashqi kutubxona istisno tashlashi mumkin bo'lsa — <code>Try</code>. Ular bir-biriga aylantiriladi: <code>toOption</code>, <code>toEither</code>."
          }
        ],
        "quiz": [
          {
            "q": "Try(a / b) muvaffaqiyatli bo'lsa nima qaytaradi?",
            "options": [
              "Failure",
              "None",
              "Right",
              "Success"
            ],
            "answer": 3,
            "explain": "Muvaffaqiyatli natija Success ichida qaytadi."
          },
          {
            "q": "Either'da xatolik odatda qaysi tomonda saqlanadi?",
            "options": [
              "Right",
              "Left",
              "None",
              "Some"
            ],
            "answer": 1,
            "explain": "Konvensiyaga ko'ra Left xatoni, Right muvaffaqiyatli natijani saqlaydi."
          },
          {
            "q": "Some(5).getOrElse(0) natijasi nima?",
            "options": [
              "0",
              "None",
              "5",
              "Xato"
            ],
            "answer": 2,
            "explain": "Some ichida qiymat bor, shuning uchun 5 qaytadi."
          }
        ]
      },
      {
        "id": 9,
        "title": "O'zgarmaslik va higher-order funksiyalar",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Funksional dasturlashning markazida <b>o'zgarmaslik</b> turadi: mavjud qiymatni o'zgartirish o'rniga yangi qiymat yaratiladi. Bu yondashuv kodni bashorat qilinadigan qiladi. <b>Higher-order function</b> esa funksiyani argument sifatida oladi yoki natija sifatida qaytaradi."
          },
          {
            "type": "code",
            "title": "immutable.scala",
            "code": "val sonlar = List(1, 2, 3)\nval yangi = sonlar :+ 4\n\nprintln(sonlar)\nprintln(yangi)\nprintln(sonlar == yangi)",
            "output": "List(1, 2, 3)\nList(1, 2, 3, 4)\nfalse"
          },
          {
            "type": "note",
            "variant": "info",
            "title": ":+ nimani anglatadi?",
            "html": "<code>:+</code> kolleksiya oxiriga element qo'shib, <b>yangi</b> kolleksiya qaytaradi. Asl <code>sonlar</code> o'zgarmaydi. Shu tufayli bir ma'lumotni bir nechta joyda xavfsiz ishlatish mumkin."
          },
          {
            "type": "table",
            "head": [
              "Funksiya",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>map(f)</code>",
                "Har bir elementni o'zgartiradi"
              ],
              [
                "<code>filter(p)</code>",
                "Shartga mos elementlarni qoldiradi"
              ],
              [
                "<code>foldLeft(z)(f)</code>",
                "Chapdan jamlaydi"
              ],
              [
                "<code>reduce(f)</code>",
                "Elementlarni bitta qiymatga jamlaydi"
              ],
              [
                "<code>exists(p)</code>",
                "Kamida bitta element shartga mosmi"
              ],
              [
                "<code>forall(p)</code>",
                "Barcha elementlar shartga mosmi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "hof.scala",
            "code": "def qollash(f: Int => Int, sonlar: List[Int]): List[Int] =\n  sonlar.map(f)\n\nval sonlar = List(1, 2, 3, 4)\n\nprintln(qollash(x => x * x, List(1, 2, 3)))\nprintln(qollash(_ + 10, List(1, 2, 3)))\nprintln(sonlar.reduce(_ + _))\nprintln(sonlar.foldLeft(1)(_ * _))",
            "output": "List(1, 4, 9)\nList(11, 12, 13)\n10\n24"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Sof funksiya",
            "html": "Bir xil kirish uchun doim bir xil natija qaytaradigan va tashqi holatni o'zgartirmaydigan funksiya <b>sof</b> deyiladi. Sof funksiyalarni test qilish va parallel ishlatish oson. Yon ta'sirlarni (fayl, konsol, tarmoq) kod chetiga chiqarishga harakat qiling."
          }
        ],
        "quiz": [
          {
            "q": "O'zgarmas kolleksiyaga element qo'shganda nima bo'ladi?",
            "options": [
              "Yangi kolleksiya qaytadi",
              "Asl kolleksiya o'zgaradi",
              "Xato beradi",
              "Element yo'qoladi"
            ],
            "answer": 0,
            "explain": "Immutable kolleksiya o'zgarmaydi; operator yangi nusxa qaytaradi."
          },
          {
            "q": "Higher-order function nima?",
            "options": [
              "Son qaytaruvchi funksiya",
              "Faqat tsikl",
              "Faqat metod",
              "Funksiyani argument sifatida oladigan yoki qaytaradigan funksiya"
            ],
            "answer": 3,
            "explain": "map, filter va fold funksiyalarni argument sifatida oladi — bu higher-order."
          },
          {
            "q": "foldLeft(0)(_ + _) nima qiladi?",
            "options": [
              "Ko'paytiradi",
              "Chapdan boshlab yig'indi hisoblaydi",
              "Faqat birinchi elementni oladi",
              "Tartiblaydi"
            ],
            "answer": 1,
            "explain": "Boshlang'ich 0 dan boshlab har bir elementni qo'shib boradi."
          }
        ]
      },
      {
        "id": 10,
        "title": "sbt, loyiha tuzilishi va fayllar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Katta Scala loyihasi odatda <b>sbt</b> bilan quriladi. sbt bog'liqliklarni yuklaydi, kodni kompilyatsiya qiladi, testlarni bajaradi va paket yaratadi. Loyiha papkalari standart tartibda bo'lsa, yangi dasturchi ham kodni tez tushunadi."
          },
          {
            "type": "table",
            "head": [
              "Yo'l",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>build.sbt</code>",
                "Loyiha nomi, Scala versiyasi, kutubxonalar"
              ],
              [
                "<code>src/main/scala/</code>",
                "Asosiy manba kodlari"
              ],
              [
                "<code>src/test/scala/</code>",
                "Testlar"
              ],
              [
                "<code>project/build.properties</code>",
                "sbt versiyasi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "fayllar.scala",
            "code": "import java.nio.file.Files\nimport java.nio.charset.StandardCharsets\n\nval yol = Files.createTempFile(\"talabalar\", \".csv\")\nval qatorlar = List(\"ism,ball\", \"Aziza,92\", \"Bek,78\")\nFiles.write(yol, qatorlar.mkString(\"\\n\").getBytes(StandardCharsets.UTF_8))\n\nprintln(Files.exists(yol))\nprintln(Files.readAllLines(yol).size())",
            "output": "true\n3"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "sbt buyruqlari",
            "html": "Loyiha papkasida <code>sbt run</code> dasturni ishga tushiradi, <code>sbt compile</code> kodni tekshiradi, <code>sbt test</code> testlarni bajaradi. <code>build.sbt</code> ichida <code>scalaVersion := \"3.3.4\"</code> kabi sozlamalar yoziladi."
          },
          {
            "type": "code",
            "title": "json.scala",
            "code": "case class Talaba(ism: String, ball: Int)\n\nval talabalar = List(Talaba(\"Aziza\", 92), Talaba(\"Bek\", 78))\nval json = talabalar\n  .map(t => s\"\"\"{\"ism\":\"${t.ism}\",\"ball\":${t.ball}}\"\"\")\n  .mkString(\"[\", \",\", \"]\")\n\nprintln(json)",
            "output": "[{\"ism\":\"Aziza\",\"ball\":92},{\"ism\":\"Bek\",\"ball\":78}]"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "JSON va real loyiha",
            "html": "Qo'lda JSON yasash faqat o'rganish uchun qulay. Haqiqiy loyihada <code>upickle</code> yoki <code>circe</code> kabi kutubxona ishlatiladi: ular escaping, tiplar va xatolarni to'g'ri boshqaradi. Bog'liqlik <code>build.sbt</code> dagi <code>libraryDependencies</code> ga qo'shiladi."
          }
        ],
        "quiz": [
          {
            "q": "sbt loyihasining asosiy konfiguratsiya fayli qaysi?",
            "options": [
              "main.scala",
              "pom.xml",
              "build.sbt",
              "package.json"
            ],
            "answer": 2,
            "explain": "build.sbt loyiha nomi, Scala versiyasi va bog'liqliklarni belgilaydi."
          },
          {
            "q": "Scala manba fayllari odatda qaysi papkada joylashadi?",
            "options": [
              "src/main/scala",
              "src/main/java",
              "lib/",
              "bin/"
            ],
            "answer": 0,
            "explain": "sbt standart tuzilishida asosiy kod src/main/scala ichida bo'ladi."
          },
          {
            "q": "Files.write nima qiladi?",
            "options": [
              "Faylni o'qiydi",
              "Faylga baytlar yozadi",
              "Faylni o'chiradi",
              "Papka yaratadi"
            ],
            "answer": 1,
            "explain": "Files.write berilgan Path ga bayt massivini yozadi."
          }
        ]
      },
      {
        "id": 11,
        "title": "Future va asinxronlik asoslari",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<b>Future</b> — keyinroq tayyor bo'ladigan natijani ifodalaydi. Uzoq davom etadigan ish (fayl, tarmoq, hisob) alohida thread'da bajariladi, dastur esa kutib qolmaydi. Natija tayyor bo'lganda <code>map</code>, <code>flatMap</code> yoki <code>onComplete</code> ishga tushadi."
          },
          {
            "type": "code",
            "title": "future.scala",
            "code": "import scala.concurrent.{Future, Await}\nimport scala.concurrent.duration.*\nimport scala.concurrent.ExecutionContext.Implicits.global\n\nval ish = Future {\n  Thread.sleep(100)\n  21 * 2\n}\n\nprintln(Await.result(ish, 2.seconds))",
            "output": "42"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Await faqat o'rganish uchun",
            "html": "<code>Await.result()</code> joriy thread'ni to'xtatib, natijani kutadi. Uni test va kichik misollarda ishlatish mumkin, lekin server kodida bloklashdan qoching. U yerda <code>map</code>, <code>flatMap</code> va <code>onComplete</code> ishlatiladi."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>map</code>",
                "Natijani o'zgartiradi"
              ],
              [
                "<code>flatMap</code>",
                "Natijadan yangi Future yasaydi"
              ],
              [
                "<code>sequence</code>",
                "Future'lar ro'yxatini bitta Future'ga jamlaydi"
              ],
              [
                "<code>recover</code>",
                "Xato bo'lsa zaxira qiymat qaytaradi"
              ],
              [
                "<code>Await.result</code>",
                "Natijani bloklab kutadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "sequence.scala",
            "code": "import scala.concurrent.{Future, Await}\nimport scala.concurrent.duration.*\nimport scala.concurrent.ExecutionContext.Implicits.global\n\nval natijalar = Future.sequence(List(Future(1 + 1), Future(2 + 2)))\nprintln(Await.result(natijalar, 2.seconds))\n\nval xato = Future(1 / 0).recover {\n  case _: ArithmeticException => -1\n}\nprintln(Await.result(xato, 2.seconds))",
            "output": "List(2, 4)\n-1"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "ExecutionContext nima uchun kerak?",
            "html": "Future ishlari qaysi thread pool'da bajarilishini <code>ExecutionContext</code> belgilaydi. <code>Implicits.global</code> — oddiy boshlanish uchun qulay variant. Serverda odatda alohida, o'lchamlangan pool beriladi."
          }
        ],
        "quiz": [
          {
            "q": "Future nimani ifodalaydi?",
            "options": [
              "Faqat o'zgaruvchini",
              "Keyinroq tayyor bo'ladigan natijani",
              "Fayl tizimini",
              "Sinflar ro'yxatini"
            ],
            "answer": 1,
            "explain": "Future asinxron hisob natijasini ifodalaydi."
          },
          {
            "q": "Future natijasini bloklab kutish uchun nima ishlatiladi?",
            "options": [
              "Future.wait",
              "sleep",
              "join",
              "Await.result"
            ],
            "answer": 3,
            "explain": "Await.result(future, timeout) natijani yoki istisnoni qaytaradi."
          },
          {
            "q": "Nega ExecutionContext kerak?",
            "options": [
              "Fayl o'qish uchun",
              "Grafik chizish uchun",
              "Future ishlari qaysi thread pool'da bajarilishini belgilash uchun",
              "JSON yozish uchun"
            ],
            "answer": 2,
            "explain": "ExecutionContext Future vazifalarini bajaradigan thread pool'ni ta'minlaydi."
          }
        ]
      },
      {
        "id": 12,
        "title": "Mini loyiha: konsol vazifalar menejeri",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Endi o'rganganlarimizni birlashtiramiz: vazifalar ro'yxatini boshqaradigan konsol ilovasi. Model uchun <code>case class</code>, ro'yxat uchun <code>List</code>, amallar uchun funksiyalar va natijani chiqarish uchun <code>foreach</code> ishlatamiz."
          },
          {
            "type": "code",
            "title": "vazifalar.scala",
            "code": "case class Vazifa(id: Int, nom: String, bajarildi: Boolean = false)\n\nobject Vazifalar {\n  var royxat: List[Vazifa] = List(\n    Vazifa(1, \"R darsini takrorlash\"),\n    Vazifa(2, \"Scala mashqlari\")\n  )\n\n  def qosh(nom: String): List[Vazifa] = {\n    val yangiId = royxat.map(_.id).maxOption.getOrElse(0) + 1\n    royxat = royxat :+ Vazifa(yangiId, nom)\n    royxat\n  }\n\n  def belgila(id: Int): List[Vazifa] = {\n    royxat = royxat.map { v =>\n      if (v.id == id) v.copy(bajarildi = true) else v\n    }\n    royxat\n  }\n}\n\nVazifalar.qosh(\"JSON formatini o'rganish\")\nVazifalar.belgila(1)\nVazifalar.royxat.foreach { v =>\n  val holat = if (v.bajarildi) \"bajarildi\" else \"yangi\"\n  println(v.id + \". \" + v.nom + \" - \" + holat)\n}",
            "output": "1. R darsini takrorlash - bajarildi\n2. Scala mashqlari - yangi\n3. JSON formatini o'rganish - yangi"
          },
          {
            "type": "ul",
            "items": [
              "<b>Model:</b> <code>Vazifa(id, nom, bajarildi)</code> — case class.",
              "<b>Qo'shish:</b> yangi ID hisoblanadi va ro'yxat oxiriga qo'shiladi.",
              "<b>Belgilash:</b> <code>map</code> va <code>copy</code> bilan faqat kerakli vazifa yangilanadi.",
              "<b>Ko'rsatish:</b> <code>foreach</code> har bir vazifani konsolga chiqaradi."
            ]
          },
          {
            "type": "code",
            "title": "hisobot.scala",
            "code": "case class Vazifa(id: Int, nom: String, bajarildi: Boolean = false)\n\nval vazifalar = List(\n  Vazifa(1, \"R darsini takrorlash\", true),\n  Vazifa(2, \"Scala mashqlari\", false),\n  Vazifa(3, \"Mini loyiha\", false)\n)\n\nval jami = vazifalar.size\nval bajarilgan = vazifalar.count(_.bajarildi)\nval foiz = bajarilgan * 100 / jami\n\nprintln(\"Jami: \" + jami)\nprintln(\"Bajarilgan: \" + bajarilgan)\nprintln(\"Foiz: \" + foiz + \"%\")",
            "output": "Jami: 3\nBajarilgan: 1\nFoiz: 33%"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Loyihani kengaytiring",
            "html": "Haqiqiy ilovada <code>scala.io.StdIn.readLine()</code> bilan buyruqlarni o'qing va <code>while</code> tsiklida menyu ko'rsating. Vazifalarni JSON faylga saqlang, o'chirish va tahrirlash amallarini qo'shing, keyin <code>munit</code> yoki <code>ScalaTest</code> bilan testlar yozing."
          }
        ],
        "quiz": [
          {
            "q": "Vazifani model qilish uchun qaysi konstruksiya qulay?",
            "options": [
              "case class",
              "Faqat Int",
              "Faqat trait",
              "Fayl"
            ],
            "answer": 0,
            "explain": "case class maydonlar, copy va pattern matching bilan qulay model beradi."
          },
          {
            "q": "Bajarilgan vazifalar sonini qaysi metod beradi?",
            "options": [
              "size",
              "count",
              "length",
              "foreach"
            ],
            "answer": 1,
            "explain": "count(_.bajarildi) shartga mos elementlar sonini qaytaradi."
          },
          {
            "q": "Scala'da 1 * 100 / 3 natijasi qanday bo'ladi?",
            "options": [
              "33.33",
              "34",
              "0",
              "33"
            ],
            "answer": 3,
            "explain": "Butun sonlar bilan bo'lishda kasr qism tashlanadi, natija 33."
          }
        ]
      },
      {
        "id": 13,
        "title": "Pattern matching chuqurroq: ro'yxat, tuple va extractor",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Oddiy <code>match</code> qiymatni bir necha variant bilan taqqoslaydi. Lekin Scala naqshlari (pattern) <b>ichki tuzilishni</b> ham ajratib oladi: ro'yxatning boshini va qolganini, tuple elementlarini yoki o'zingiz yozgan extractor natijasini. Bu imkoniyat murakkab ma'lumotni if-else zanjirisiz tahlil qilishga yordam beradi."
          },
          {
            "type": "code",
            "title": "royxat-naqshlari.scala",
            "code": "def tavsif(xs: List[Int]): String = xs match\n  case Nil => \"bo'sh\"\n  case bosh :: Nil => s\"bitta: $bosh\"\n  case bosh :: ikkinchi :: _ => s\"kamida ikkita: $bosh, $ikkinchi\"\n\nprintln(tavsif(Nil))\nprintln(tavsif(List(7)))\nprintln(tavsif(List(3, 5, 8)))",
            "output": "bo'sh\nbitta: 7\nkamida ikkita: 3, 5"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Naqshlar yuqoridan pastga tekshiriladi",
            "html": "<code>case bosh :: qolgan</code> barcha bo'sh bo'lmagan ro'yxatlarga mos keladi. Shuning uchun aniqroq naqshlar (<code>Nil</code>, <code>bosh :: Nil</code>) umumiy naqshdan <b>oldin</b> turishi kerak. Aks holda keyingi case'lar hech qachon bajarilmaydi."
          },
          {
            "type": "table",
            "head": [
              "Naqsh",
              "Nimani ajratadi"
            ],
            "rows": [
              [
                "<code>case Nil</code>",
                "Bo'sh ro'yxat"
              ],
              [
                "<code>case bosh :: qolgan</code>",
                "Birinchi element va qolgan ro'yxat"
              ],
              [
                "<code>case (a, b)</code>",
                "Ikki elementli tuple"
              ],
              [
                "<code>case Juft(a, b)</code>",
                "Extractor qaytargan qiymatlar"
              ]
            ]
          },
          {
            "type": "code",
            "title": "extractor.scala",
            "code": "object Juft:\n  def unapply(n: Int): Option[(Int, Int)] =\n    if n % 2 == 0 then Some((n, n / 2)) else None\n\ndef tekshir(n: Int): String = n match\n  case Juft(a, b) => s\"juft: $a / 2 = $b\"\n  case _ => \"toq\"\n\nprintln(tekshir(42))\nprintln(tekshir(7))\n\nval (ism, ball) = (\"Aziza\", 92)\nprintln(s\"$ism $ball\")",
            "output": "juft: 42 / 2 = 21\ntoq\nAziza 92"
          },
          {
            "type": "ul",
            "items": [
              "<code>unapply</code> — extractor uchun kirish nuqtasi; u <code>Option</code> qaytaradi.",
              "Tuple naqshi o'zgaruvchilarni bir qatorda e'lon qilish imkonini beradi.",
              "<code>case _</code> yoki <code>case _ :: _</code> keraksiz qismlarni e'tiborsiz qoldiradi.",
              "Har bir yangi naqshni kichik funksiyada sinab ko'rish xatolarni tez topadi."
            ]
          }
        ],
        "quiz": [
          {
            "q": "List(1, 2, 3) ni case bosh :: qolgan bilan moslashtirsa, qolgan nimaga teng bo'ladi?",
            "options": [
              "List(1)",
              "List(1, 2, 3)",
              "List(2, 3)",
              "Nil"
            ],
            "answer": 2,
            "explain": "bosh = 1, qolgan esa qolgan elementlardan iborat List(2, 3)."
          },
          {
            "q": "Pattern matching ichida extractor ishlashi uchun obyekt qaysi metodni taqdim etadi?",
            "options": [
              "unapply",
              "apply",
              "extract",
              "toString"
            ],
            "answer": 0,
            "explain": "Kompilyator naqshni tekshirishda unapply metodini chaqiradi."
          },
          {
            "q": "val (a, b) = (1, \"bir\") yozuvida b qanday tipga ega bo'ladi?",
            "options": [
              "Int",
              "Tuple2",
              "String",
              "Any"
            ],
            "answer": 2,
            "explain": "Ikkinchi element \"bir\" matni bo'lgani uchun b: String bo'ladi."
          }
        ]
      },
      {
        "id": 14,
        "title": "Sealed trait, enum va algebraik tiplar",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Bir necha aniq variantdan iborat ma'lumot modeli <b>algebraik tip</b> (ADT) deyiladi. Scala'da uning ikki asosiy usuli bor: <code>sealed trait</code> va <code>enum</code>. <code>sealed</code> barcha meros oluvchilarni bitta faylda e'lon qilishni talab qiladi — shu tufayli kompilyator <code>match</code> to'liqligini tekshira oladi."
          },
          {
            "type": "code",
            "title": "tolov.scala",
            "code": "sealed trait Tolov\ncase class Naqd(summa: Double) extends Tolov\ncase class Karta(summa: Double, raqam: String) extends Tolov\n\ndef izoh(t: Tolov): String = t match\n  case Naqd(s) => s\"Naqd: $s\"\n  case Karta(s, r) => s\"Karta: $s, oxiri \" + r.takeRight(4)\n\nprintln(izoh(Naqd(50000.0)))\nprintln(izoh(Karta(120000.0, \"8600123412345678\")))",
            "output": "Naqd: 50000.0\nKarta: 120000.0, oxiri 5678"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Nega sealed muhim?",
            "html": "Agar yangi <code>case class Click(summa: Double) extends Tolov</code> qo'shilsa, kompilyator <code>izoh</code> funksiyasidagi <code>match</code> to'liq emasligini aytadi. Bu — runtime'dagi <code>MatchError</code> o'rniga kompilyatsiya vaqtida xatoni ko'rish imkoniyati."
          },
          {
            "type": "table",
            "head": [
              "Yondashuv",
              "Qulay tomoni",
              "Qachon tanlanadi"
            ],
            "rows": [
              [
                "<code>sealed trait</code> + case class",
                "Har bir variant o'z maydonlariga ega",
                "Murakkab, kengaytiriladigan model"
              ],
              [
                "<code>enum</code>",
                "Qisqa sintaksis, <code>values</code> ro'yxati",
                "Oddiy variantlar to'plami"
              ],
              [
                "<code>enum</code> parametrli case",
                "Variant ichida ma'lumot",
                "Kichik ADT"
              ]
            ]
          },
          {
            "type": "code",
            "title": "holat.scala",
            "code": "enum Holat:\n  case Yangi, Jarayonda, Bajarildi\n\ndef rang(h: Holat): String = h match\n  case Holat.Yangi => \"ko'k\"\n  case Holat.Jarayonda => \"sariq\"\n  case Holat.Bajarildi => \"yashil\"\n\nprintln(Holat.values.toList)\nprintln(Holat.values.map(rang).mkString(\", \"))\nprintln(Holat.valueOf(\"Bajarildi\"))",
            "output": "List(Yangi, Jarayonda, Bajarildi)\nko'k, sariq, yashil\nBajarildi"
          },
          {
            "type": "ul",
            "items": [
              "ADT variantlarini <code>case object</code> bilan ma'lumotsiz ham yasash mumkin.",
              "Har bir variant ustida ishlashni <code>match</code> orqali markazlashtiring.",
              "Yangi variant qo'shganda kompilyator barcha joylarni ko'rsatib beradi.",
              "<code>enum</code> qiymatlarini <code>values</code> orqali ro'yxatga olish mumkin."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Nima uchun ADT'da sealed trait ishlatiladi?",
            "options": [
              "Kodni tezroq bajarish uchun",
              "Barcha variantlarni bilib, match to'liqligini tekshirish uchun",
              "Faqat matn saqlash uchun",
              "Meros olishni taqiqlash uchun"
            ],
            "answer": 1,
            "explain": "sealed meros oluvchilarni cheklaydi va kompilyatorga to'liq to'plamni ma'lum qiladi."
          },
          {
            "q": "enum Holat: case Yangi, Jarayonda, Bajarildi uchun Holat.values qanday qiymat beradi?",
            "options": [
              "Barcha uchta variant massivi",
              "Faqat Yangi",
              "String qiymatlar ro'yxati",
              "Bo'sh ro'yxat"
            ],
            "answer": 0,
            "explain": "values barcha enum case'larini o'z ichiga olgan massivni qaytaradi."
          },
          {
            "q": "sealed trait'ning barcha bevosita meros oluvchilari qayerda bo'lishi kerak?",
            "options": [
              "O'sha trait bilan bir xil faylda",
              "Faqat test faylida",
              "Faqat object ichida",
              "Istalgan paketda"
            ],
            "answer": 0,
            "explain": "sealed cheklovi tufayli barcha variantlar bitta faylda e'lon qilinadi."
          }
        ]
      },
      {
        "id": 15,
        "title": "Tuple va ma'lumotni destructuring qilish",
        "minutes": 14,
        "blocks": [
          {
            "type": "p",
            "html": "Tuple — har xil tipli bir nechta qiymatni vaqtincha birlashtiradigan yengil konteyner. Uning elementlariga <code>._1</code>, <code>._2</code> kabi indekslar orqali murojaat qilinadi. Tuple ayniqsa funksiyadan ikki-uch qiymat qaytarish va ro'yxat elementlarini juftlik sifatida saqlash uchun qulay."
          },
          {
            "type": "code",
            "title": "tuple.scala",
            "code": "val talaba = (\"Aziza\", 92, true)\n\nprintln(talaba)\nprintln(talaba._1)\nprintln(talaba._2 + 8)\nprintln(talaba.productArity)\n\nval juftlik = \"Bek\" -> 78\nprintln(juftlik)\nprintln(juftlik._2)",
            "output": "(Aziza,92,true)\nAziza\n100\n3\n(Bek,78)\n78"
          },
          {
            "type": "table",
            "head": [
              "Amal",
              "Misol",
              "Natija"
            ],
            "rows": [
              [
                "Element",
                "<code>talaba._1</code>",
                "<code>Aziza</code>"
              ],
              [
                "Juftlik yasash",
                "<code>\"Bek\" -> 78</code>",
                "<code>(Bek,78)</code>"
              ],
              [
                "Destructuring",
                "<code>val (ism, ball) = juftlik</code>",
                "ikki alohida qiymat"
              ],
              [
                "Elementlar soni",
                "<code>talaba.productArity</code>",
                "<code>3</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "baholar.scala",
            "code": "val baholar = List((\"Aziza\", 92), (\"Bek\", 78), (\"Dilnoza\", 88))\n\nprintln(baholar.map { case (ism, ball) => s\"$ism: $ball\" })\n\nval (engYaxshi, engBall) = baholar.maxBy(_._2)\nprintln(s\"$engYaxshi $engBall\")\n\nval guruhlangan = baholar.groupBy(_._2 >= 80)\nprintln(guruhlangan(true).map(_._1))",
            "output": "List(Aziza: 92, Bek: 78, Dilnoza: 88)\nAziza 92\nList(Aziza, Dilnoza)"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Tuple yoki case class?",
            "html": "Tuple qisqa muddatli, ichki ma'lumot uchun yaxshi. Lekin maydonlarga nom berish, hujjatlashtirish va keyinchalik kengaytirish kerak bo'lsa, <code>case class Talaba(ism: String, ball: Int)</code> tanlang. Nomlangan maydonlar kodni o'qishni sezilarli osonlashtiradi."
          },
          {
            "type": "ul",
            "items": [
              "Tuple elementlari soni 2 dan 22 gacha bo'lishi mumkin.",
              "Ikki elementli tuple uchun <code>a -> b</code> qisqa yozuvi ishlatiladi.",
              "Map'ni <code>toList</code> qilganda elementlar <code>(kalit, qiymat)</code> tuple'lari bo'ladi.",
              "Katta tuple o'rniga nomlangan model yaratish odatda yaxshiroq."
            ]
          }
        ],
        "quiz": [
          {
            "q": "tuple._2 qaysi elementni qaytaradi?",
            "options": [
              "Birinchi elementni",
              "Ikkinchi elementni",
              "Oxirgi elementni",
              "Elementlar sonini"
            ],
            "answer": 1,
            "explain": "Indekslash _1 dan boshlanadi, shuning uchun _2 ikkinchi element."
          },
          {
            "q": "(\"Aziza\", 92, true) qanday tuple hisoblanadi?",
            "options": [
              "Tuple3",
              "Tuple2",
              "Tuple4",
              "List"
            ],
            "answer": 0,
            "explain": "Uchta element bor, demak bu Tuple3."
          },
          {
            "q": "val (ism, ball) = (\"Aziza\", 92) dan keyin ism qiymati nima?",
            "options": [
              "92",
              "true",
              "Tuple2",
              "Aziza"
            ],
            "answer": 3,
            "explain": "Destructuring birinchi elementni ism o'zgaruvchisiga bog'laydi."
          }
        ]
      },
      {
        "id": 16,
        "title": "Option bilan xavfsiz ishlash",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "<code>Option[A]</code> qiymat borligini (<code>Some(a)</code>) yoki yo'qligini (<code>None</code>) aniq ifodalaydi. Bu <code>null</code> bilan ishlashdagi kutilmagan <code>NullPointerException</code> o'rniga tip tizimi orqali ehtiyotkorlikni talab qiladi: qiymat yo'qligini hisobga olishni kompilyator eslatadi."
          },
          {
            "type": "code",
            "title": "option.scala",
            "code": "def topish(ism: String): Option[Int] =\n  Map(\"Aziza\" -> 92, \"Bek\" -> 78).get(ism)\n\nprintln(topish(\"Aziza\"))\nprintln(topish(\"Jasur\"))\nprintln(topish(\"Jasur\").getOrElse(0))\nprintln(topish(\"Aziza\").map(_ + 5))\nprintln(topish(\"Bek\").filter(_ >= 90))",
            "output": "Some(92)\nNone\n0\nSome(97)\nNone"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "None — xato emas",
            "html": "Qiymat topilmasligi ko'pincha normal holat: foydalanuvchi qidiruvda yo'q, sozlama berilmagan, maydon bo'sh. <code>Option</code> bunday holatni istisno tashlash o'rniga <b>qiymat</b> sifatida qaytarishga undaydi. Natijani <code>getOrElse</code>, <code>fold</code> yoki <code>match</code> bilan ochiq ko'rsatishingiz mumkin."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>map(f)</code>",
                "Qiymat bor bo'lsa o'zgartiradi"
              ],
              [
                "<code>flatMap(f)</code>",
                "Yana Option qaytaradigan amalni ulaydi"
              ],
              [
                "<code>filter(p)</code>",
                "Shart bajarilmasa None qiladi"
              ],
              [
                "<code>getOrElse(z)</code>",
                "Yo'q bo'lsa zaxira qiymat"
              ],
              [
                "<code>fold(z)(f)</code>",
                "Ikkala holatni bitta natijaga keltiradi"
              ],
              [
                "<code>orElse(b)</code>",
                "None bo'lsa muqobil Option"
              ]
            ]
          },
          {
            "type": "code",
            "title": "email.scala",
            "code": "case class Foydalanuvchi(ism: String, email: Option[String])\n\nval aziza = Foydalanuvchi(\"Aziza\", Some(\"aziza@example.com\"))\nval bek = Foydalanuvchi(\"Bek\", None)\n\ndef xabar(u: Foydalanuvchi): String =\n  u.email.fold(\"email yo'q\")(e => s\"email: $e\")\n\nprintln(xabar(aziza))\nprintln(xabar(bek))\nprintln(bek.email.orElse(Some(\"test@example.com\")))\nprintln(aziza.email.exists(_.contains(\"@\")))",
            "output": "email: aziza@example.com\nemail yo'q\nSome(test@example.com)\ntrue"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "get() dan ehtiyotkorlik bilan foydalaning",
            "html": "<code>option.get</code> None bo'lsa <code>NoSuchElementException</code> beradi va Option'ning butun ma'nosini yo'q qiladi. Uni faqat qiymat borligiga amin bo'lganingizda ishlating. Amalda <code>getOrElse</code>, <code>fold</code> yoki <code>match</code> xavfsizroq."
          }
        ],
        "quiz": [
          {
            "q": "Some(5).map(_ * 2) natijasi nima?",
            "options": [
              "10",
              "Some(10)",
              "Some(5)",
              "None"
            ],
            "answer": 1,
            "explain": "map Some ichidagi qiymatni o'zgartiradi va Some(10) qaytaradi."
          },
          {
            "q": "None.getOrElse(7) qanday natija beradi?",
            "options": [
              "7",
              "None",
              "0",
              "Xato"
            ],
            "answer": 0,
            "explain": "None bo'lgani uchun getOrElse zaxira qiymat 7 ni qaytaradi."
          },
          {
            "q": "Option'dan foydalanishning asosiy afzalligi nimada?",
            "options": [
              "Qiymat yo'qligini tip darajasida ko'rsatadi",
              "Sonlarni avtomatik yaxlitlaydi",
              "Kodni har doim qisqartiradi",
              "Fayllarni tezroq o'qiydi"
            ],
            "answer": 0,
            "explain": "Option yo'qlikni aniq ifodalab, null bilan bog'liq xatolarni kamaytiradi."
          }
        ]
      },
      {
        "id": 17,
        "title": "Either bilan xatolarni zanjirlash",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "<code>Either[E, A]</code> ikki mumkin bo'lgan natijani saqlaydi: <code>Left(e)</code> — xato, <code>Right(a)</code> — muvaffaqiyat. <code>Option</code> dan farqli ravishda u xatoning <b>sababini</b> ham olib yuradi. Bir necha tekshiruvni <code>for</code> yoki <code>flatMap</code> bilan ulab, birinchi xatoda to'xtaydigan oqim yasash mumkin."
          },
          {
            "type": "code",
            "title": "either.scala",
            "code": "def butun(matn: String): Either[String, Int] =\n  matn.toIntOption.toRight(s\"Son emas: $matn\")\n\ndef musbat(n: Int): Either[String, Int] =\n  if n > 0 then Right(n) else Left(\"Musbat bo'lishi kerak\")\n\ndef ikkilantir(matn: String): Either[String, Int] =\n  for\n    n <- butun(matn)\n    m <- musbat(n)\n  yield m * 2\n\nprintln(ikkilantir(\"21\"))\nprintln(ikkilantir(\"-2\"))\nprintln(ikkilantir(\"x\"))",
            "output": "Right(42)\nLeft(Musbat bo'lishi kerak)\nLeft(Son emas: x)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Nega Left — xato?",
            "html": "Bu shunchaki konvensiya, lekin Scala ekotizimida deyarli hamma joyda qabul qilingan: <code>Left</code> xatoni, <code>Right</code> foydali natijani bildiradi. <code>Either</code> \"o'ng\" (right) qiymatga moyilligi tufayli <code>map</code> va <code>flatMap</code> aynan Right ustida ishlaydi."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>map(f)</code>",
                "Right qiymatini o'zgartiradi"
              ],
              [
                "<code>flatMap(f)</code>",
                "Right dan yangi Either yasaydi"
              ],
              [
                "<code>left.map(g)</code>",
                "Xato qiymatini o'zgartiradi"
              ],
              [
                "<code>getOrElse(z)</code>",
                "Xato bo'lsa zaxira qiymat"
              ],
              [
                "<code>toOption</code>",
                "Right ni Some, Left ni None qiladi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "xato-bilan-ishlash.scala",
            "code": "val yaxshi: Either[String, Int] = Right(10)\nval yomon: Either[String, Int] = Left(\"tarmoq xatosi\")\n\nprintln(yaxshi.map(_ + 5))\nprintln(yomon.left.map(_.toUpperCase))\nprintln(yomon.getOrElse(0))\nprintln(yomon.fold(xato => s\"Xato: $xato\", n => s\"Natija: $n\"))\nprintln(yomon.toOption)",
            "output": "Right(15)\nLeft(TARMOQ XATOSI)\n0\nXato: tarmoq xatosi\nNone"
          },
          {
            "type": "ul",
            "items": [
              "Validatsiya funksiyalari xato matni yoki xato ADT'sini Left ichida qaytarsin.",
              "Bir nechta mustaqil xatoni yig'ish kerak bo'lsa, <code>Either</code> o'rniga maxsus accumulyator ishlatiladi.",
              "<code>Either</code> ni <code>for</code> ichida ishlatish birinchi Left'da avtomatik to'xtaydi.",
              "Xato tipini <code>String</code> emas, sealed trait bilan modellashtirish yanada xavfsiz."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Either ustidagi for-ifoda aslida qaysi metodlarga aylanadi?",
            "options": [
              "flatMap va map",
              "map va filter",
              "foreach va collect",
              "get va getOrElse"
            ],
            "answer": 0,
            "explain": "Har bir generator flatMap, yakuniy yield esa map bo'lib qo'llanadi."
          },
          {
            "q": "Right(10).map(_ + 5) natijasi qanday bo'ladi?",
            "options": [
              "Left(15)",
              "Right(15)",
              "Right(10)",
              "Right(5)"
            ],
            "answer": 1,
            "explain": "map faqat Right qiymatiga qo'llanadi va Right(15) qaytadi."
          },
          {
            "q": "Konvensiyaga ko'ra xato ma'lumoti Either'ning qaysi tomonida saqlanadi?",
            "options": [
              "Right",
              "Left",
              "Some",
              "Failure"
            ],
            "answer": 1,
            "explain": "Left xatoni, Right muvaffaqiyatli natijani ifodalaydi."
          }
        ]
      },
      {
        "id": 18,
        "title": "Try, Using va resurslarni xavfsiz boshqarish",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Ba'zi kodlar istisno tashlashi mumkin: fayl ochish, JSON o'qish, tarmoq chaqiruvi. <code>Try</code> bunday hisobni <code>Success</code> yoki <code>Failure</code> ga aylantiradi, dastur esa yiqilmaydi. Fayl yoki ulanish kabi resurslar esa har qanday holatda ham yopilishi kerak — buni <code>scala.util.Using</code> kafolatlaydi."
          },
          {
            "type": "code",
            "title": "using.scala",
            "code": "import scala.util.Using\nimport scala.io.Source\nimport java.io.StringReader\n\nval qatorlar = Using.resource(Source.fromReader(new StringReader(\"bir\\nikki\\n\"))) { src =>\n  src.getLines().toList\n}\n\nprintln(qatorlar)\nprintln(qatorlar.size)",
            "output": "List(bir, ikki)\n2"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Using.resource kafolati",
            "html": "<code>Using.resource</code> blok muvaffaqiyatli tugasa ham, istisno tashlasa ham resursni yopadi. Bu <code>try/finally</code> ni qo'lda yozishdan xavfsizroq: yopishni unutish yoki istisno paytida o'tkazib yuborish ehtimoli yo'q."
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Natija",
              "Qachon"
            ],
            "rows": [
              [
                "<code>Try[A]</code>",
                "<code>Success</code> / <code>Failure</code>",
                "Istisno tashlashi mumkin bo'lgan kod"
              ],
              [
                "<code>Either[E, A]</code>",
                "<code>Right</code> / <code>Left</code>",
                "Xato sababi muhim bo'lsa"
              ],
              [
                "<code>Option[A]</code>",
                "<code>Some</code> / <code>None</code>",
                "Yo'qlik oddiy holat bo'lsa"
              ],
              [
                "<code>Using</code>",
                "Resurs + natija",
                "Fayl, ulanish, oqim"
              ]
            ]
          },
          {
            "type": "code",
            "title": "try.scala",
            "code": "import scala.util.Try\n\nval natija = for\n  a <- Try(\"10\".toInt)\n  b <- Try(\"2\".toInt)\nyield a / b\n\nprintln(natija)\nprintln(Try(\"x\".toInt).recover { case _: NumberFormatException => -1 })\nprintln(Try(\"x\".toInt).toOption)\nprintln(Try(\"8\".toInt).map(_ * 3).filter(_ > 30))",
            "output": "Success(5)\nSuccess(-1)\nNone\nFailure(java.util.NoSuchElementException: Predicate does not hold for 24)"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Istisnoni chegarada ushlang",
            "html": "Butun dasturni <code>Try</code> ga o'rash o'rniga faqat tashqi ta'sir (fayl, tarmoq, kutubxona) joylashgan chegarani o'rang. Ichki biznes mantiq <code>Either</code> yoki sof funksiyalar bilan ishlashi kerak. Shunda xatolar oqimi aniq va test qilinadigan bo'ladi."
          }
        ],
        "quiz": [
          {
            "q": "Try { 6 / 2 } qanday natija qaytaradi?",
            "options": [
              "Success(3)",
              "Some(3)",
              "Right(3)",
              "3"
            ],
            "answer": 0,
            "explain": "Muvaffaqiyatli hisob Try ichida Success(3) bo'ladi."
          },
          {
            "q": "Using.resource nimani kafolatlaydi?",
            "options": [
              "Resursning har qanday holatda yopilishini",
              "Kodni tezroq bajarishni",
              "Xatoni avtomatik tuzatishni",
              "Natijani faylga yozishni"
            ],
            "answer": 0,
            "explain": "Blok tugagach yoki istisno yuz berganda resurs yopiladi."
          },
          {
            "q": "Failure ustida recover qo'llansa nima qaytadi?",
            "options": [
              "Xato tashlanadi",
              "Doim Failure",
              "None",
              "Success bilan zaxira qiymat"
            ],
            "answer": 3,
            "explain": "recover mos xato uchun qiymat beradi va natija Success bo'ladi."
          }
        ]
      },
      {
        "id": 19,
        "title": "Kolleksiya transformatsiyalari: map, flatMap, collect",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Scala kolleksiyalarida ma'lumotni o'zgartirishning asosiy qurollari — <code>map</code>, <code>filter</code>, <code>flatMap</code> va <code>collect</code>. Ular asl kolleksiyani o'zgartirmaydi, balki yangisini qaytaradi. Shu sababli bir xil ma'lumotdan bir necha xil ko'rinishni xavfsiz yasash mumkin."
          },
          {
            "type": "code",
            "title": "transform.scala",
            "code": "val sonlar = List(1, 2, 3, 4, 5, 6)\n\nprintln(sonlar.map(_ * 3))\nprintln(sonlar.filter(_ % 2 == 0))\nprintln(sonlar.collect { case n if n % 3 == 0 => n * 10 })\nprintln(sonlar.flatMap(n => List(n, -n)))",
            "output": "List(3, 6, 9, 12, 15, 18)\nList(2, 4, 6)\nList(30, 60)\nList(1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "map va flatMap farqi",
            "html": "<code>map</code> har bir element uchun <b>bitta</b> natija beradi. <code>flatMap</code> esa har bir elementdan kolleksiya yasab, ularni bitta tekis kolleksiyaga birlashtiradi. Shuning uchun ichma-ich ro'yxatlarni ochish yoki bir elementdan bir nechta natija chiqarishda flatMap ishlatiladi."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Kirish",
              "Natija"
            ],
            "rows": [
              [
                "<code>map(f)</code>",
                "Har bir element",
                "Har biriga bitta yangi qiymat"
              ],
              [
                "<code>flatMap(f)</code>",
                "Har bir element",
                "Kolleksiyalar birlashtirilgan tekis natija"
              ],
              [
                "<code>filter(p)</code>",
                "Shart",
                "Mos elementlar"
              ],
              [
                "<code>collect(pf)</code>",
                "Qismiy funksiya",
                "Faqat mos holatlar, o'zgartirilgan"
              ],
              [
                "<code>distinct</code>",
                "Kolleksiya",
                "Takrorlanmaydigan elementlar"
              ]
            ]
          },
          {
            "type": "code",
            "title": "gaplar.scala",
            "code": "val gaplar = List(\"Scala juda kuchli\", \"Funksional yondashuv\")\n\nprintln(gaplar.flatMap(_.split(\" \").toList))\nprintln(gaplar.map(_.split(\" \").length))\nprintln(gaplar.flatMap(_.split(\" \").toList).map(_.toLowerCase).distinct)",
            "output": "List(Scala, juda, kuchli, Funksional, yondashuv)\nList(3, 2)\nList(scala, juda, kuchli, funksional, yondashuv)"
          },
          {
            "type": "ul",
            "items": [
              "Zanjirni chapdan o'ngga o'qing: <code>filter</code> keyin <code>map</code> ko'pincha tejamkor.",
              "<code>collect</code> bir vaqtda filtrlash va o'zgartirishni bajaradi.",
              "Ichma-ich kolleksiyani ochish uchun <code>flatten</code> ham ishlatiladi.",
              "Har bir bosqich natijasini alohida <code>val</code> ga olish kodni oson tushuntiradi."
            ]
          }
        ],
        "quiz": [
          {
            "q": "List(1, 2, 3).flatMap(n => List(n, n * 10)) natijasi qanday?",
            "options": [
              "List(1, 2, 3, 10, 20, 30)",
              "List(1, 10, 2, 20, 3, 30)",
              "List(11, 22, 33)",
              "List(1, 2, 3)"
            ],
            "answer": 1,
            "explain": "Har bir elementdan ikki qiymatli ro'yxat yasalib, tartib saqlangan holda tekislanadi."
          },
          {
            "q": "collect metodi oddiy filter va map o'rniga qachon qulay?",
            "options": [
              "Faqat mos elementlarni olib, ularni bir vaqtda o'zgartirishda",
              "Barcha elementlarni o'chirishda",
              "Faqat sonlar bilan ishlaganda",
              "Kolleksiyani saralashda"
            ],
            "answer": 0,
            "explain": "collect qismiy funksiya orqali ham filtrlaydi, ham qiymatni o'zgartiradi."
          },
          {
            "q": "List(1, 1, 2, 2, 3).distinct natijasi nima?",
            "options": [
              "List(1, 2, 3)",
              "List(3, 2, 1)",
              "List(1, 2)",
              "List(1, 1, 2, 2, 3)"
            ],
            "answer": 0,
            "explain": "distinct takrorlarni olib tashlab, birinchi uchrash tartibini saqlaydi."
          }
        ]
      },
      {
        "id": 20,
        "title": "Guruhlash, saralash va partition",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Haqiqiy ma'lumotlar ko'pincha guruhlarga bo'linadi: xodimlar bo'lim bo'yicha, sotuvlar mahsulot bo'yicha, talabalar baho bo'yicha. <code>groupBy</code>, <code>groupMap</code>, <code>sortBy</code> va <code>partition</code> shunday hisobotlarni bir necha qatorda yasaydi."
          },
          {
            "type": "code",
            "title": "guruhlash.scala",
            "code": "case class Xodim(ism: String, bolim: String, oylik: Int)\n\nval xodimlar = List(\n  Xodim(\"Aziza\", \"IT\", 1200),\n  Xodim(\"Bek\", \"IT\", 900),\n  Xodim(\"Dilnoza\", \"HR\", 800),\n  Xodim(\"Jasur\", \"HR\", 1000)\n)\n\nval guruh = xodimlar.groupBy(_.bolim)\nprintln(guruh.keys.toList.sorted)\nprintln(guruh(\"IT\").map(_.ism))\nprintln(xodimlar.sortBy(_.oylik).map(_.ism))\nprintln(xodimlar.sortBy(_.oylik).reverse.map(_.ism))\n\nval (boy, oddiy) = xodimlar.partition(_.oylik >= 1000)\nprintln(boy.map(_.ism))",
            "output": "List(HR, IT)\nList(Aziza, Bek)\nList(Dilnoza, Bek, Jasur, Aziza)\nList(Aziza, Jasur, Bek, Dilnoza)\nList(Aziza, Jasur)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "groupBy qanday ishlaydi?",
            "html": "<code>groupBy(f)</code> har bir element uchun kalit hisoblaydi va <code>Map[K, List[A]]</code> qaytaradi. Kalitlar tartibi kafolatlanmaydi, shuning uchun chiqarishdan oldin <code>keys.toList.sorted</code> qilish foydali. Guruh ichidagi elementlar esa asl tartibda qoladi."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>groupBy(f)</code>",
                "Kalit bo'yicha guruhlaydi"
              ],
              [
                "<code>groupMap(f)(g)</code>",
                "Guruhlab, har bir elementni o'zgartiradi"
              ],
              [
                "<code>groupMapReduce(f)(g)(r)</code>",
                "Guruhlab, qiymatlarni jamlaydi"
              ],
              [
                "<code>sortBy(f)</code>",
                "Kalit bo'yicha saralaydi"
              ],
              [
                "<code>partition(p)</code>",
                "Mos va mos emas elementlarni ajratadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "sotuvlar.scala",
            "code": "val sotuvlar = List((\"olma\", 3), (\"nok\", 2), (\"olma\", 5), (\"uzum\", 4), (\"nok\", 6))\n\nval jami = sotuvlar.groupMapReduce(_._1)(_._2)(_ + _)\nprintln(jami.toList.sortBy(e => (-e._2, e._1)))\n\nval nomlar = sotuvlar.groupMap(_._1)(_._2)\nprintln(nomlar.toList.sortBy(_._1))",
            "output": "List((nok,8), (olma,8), (uzum,4))\nList((nok,List(2, 6)), (olma,List(3, 5)), (uzum,List(4)))"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Map tartibiga tayanmang",
            "html": "<code>groupBy</code> qaytargan Map'ning kalitlar tartibi kichik to'plamlarda tasodifiy ko'rinishi mumkin. Hisobot chiqarishda har doim <code>toList.sortBy</code> yoki <code>keys.toList.sorted</code> ishlatilsin. Bu testlarni barqaror qiladi."
          }
        ],
        "quiz": [
          {
            "q": "groupBy qanday tipdagi natija qaytaradi?",
            "options": [
              "Map[K, List[A]]",
              "List[(K, List[A])]",
              "Set[A]",
              "Option[List[A]]"
            ],
            "answer": 0,
            "explain": "groupBy kalit bo'yicha Map qaytaradi, har bir qiymat esa ro'yxat."
          },
          {
            "q": "Chet eldagi xodimlarni ikki guruhga ajratish uchun qaysi metod qulay?",
            "options": [
              "groupMapReduce",
              "sortBy",
              "partition",
              "distinct"
            ],
            "answer": 2,
            "explain": "partition shartga mos va mos emas elementlarni ikki ro'yxatga ajratadi."
          },
          {
            "q": "groupMapReduce(_._1)(_._2)(_ + _) qanday hisob bajaradi?",
            "options": [
              "Elementlarni saralaydi",
              "Faqat birinchi qiymatni oladi",
              "Har bir kalit bo'yicha qiymatlarni qo'shadi",
              "Takrorlarni o'chiradi"
            ],
            "answer": 2,
            "explain": "U kalit bo'yicha guruhlab, qiymatlarni qo'shish orqali bitta natijaga jamlaydi."
          }
        ]
      },
      {
        "id": 21,
        "title": "fold, scan, zip va unzip",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Ba'zan kolleksiyani bitta qiymatga jamlash kerak: yig'indi, maksimum, matn birlashtirish. <code>foldLeft</code> va <code>foldRight</code> buni boshlang'ich qiymat bilan xavfsiz bajaradi. <code>scan</code> esa har bir qadamdagi oraliq natijalarni ham qaytaradi, <code>zip</code> esa ikki kolleksiyani juftlaydi."
          },
          {
            "type": "code",
            "title": "fold.scala",
            "code": "val sonlar = List(4, 7, 1, 9)\n\nprintln(sonlar.foldLeft(0)(_ + _))\nprintln(sonlar.foldLeft(0)(_ - _))\nprintln(sonlar.foldRight(0)(_ - _))\nprintln(sonlar.scanLeft(0)(_ + _))\nprintln(sonlar.reduce(math.max))",
            "output": "21\n-21\n-11\nList(0, 4, 11, 12, 21)\n9"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Chapdan va o'ngdan",
            "html": "<code>foldLeft</code> chapdan boshlab akkumulyatorni yangilaydi, <code>foldRight</code> esa o'ngdan. Ayirish kabi tartibga sezgir amallarda natija farq qiladi: <code>0 - 4 - 7 - 1 - 9 = -21</code>, o'ngdan hisoblansa <code>-11</code>. Qo'shish va ko'paytirishda farq yo'q."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Boshlang'ich qiymat",
              "Natija"
            ],
            "rows": [
              [
                "<code>foldLeft(z)(f)</code>",
                "Bor",
                "Bitta qiymat"
              ],
              [
                "<code>foldRight(z)(f)</code>",
                "Bor",
                "Bitta qiymat"
              ],
              [
                "<code>reduce(f)</code>",
                "Yo'q",
                "Bitta qiymat, bo'shda xato"
              ],
              [
                "<code>scanLeft(z)(f)</code>",
                "Bor",
                "Oraliq natijalar ro'yxati"
              ],
              [
                "<code>zip(ys)</code>",
                "Yo'q",
                "Juftliklar ro'yxati"
              ]
            ]
          },
          {
            "type": "code",
            "title": "zip.scala",
            "code": "val ismlar = List(\"Aziza\", \"Bek\", \"Dilnoza\")\nval ballar = List(92, 78, 88)\n\nval juftlar = ismlar.zip(ballar)\nprintln(juftlar)\nprintln(juftlar.map { case (i, b) => s\"$i:$b\" })\nprintln(juftlar.toMap.get(\"Bek\"))\n\nval (yangiIsmlar, yangiBallar) = juftlar.unzip\nprintln(yangiIsmlar)\nprintln(yangiBallar.sum)\nprintln(yangiBallar.foldLeft(0)(math.max))",
            "output": "List((Aziza,92), (Bek,78), (Dilnoza,88))\nList(Aziza:92, Bek:78, Dilnoza:88)\nSome(78)\nList(Aziza, Bek, Dilnoza)\n258\n92"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Bo'sh kolleksiyada reduce",
            "html": "<code>List.empty[Int].reduce(_ + _)</code> <code>UnsupportedOperationException</code> beradi, chunki boshlang'ich qiymat yo'q. <code>foldLeft(0)(_ + _)</code> esa 0 qaytaradi. Bo'sh kirish ehtimoli bo'lsa, doim fold tanlang yoki avval <code>nonEmpty</code> ni tekshiring."
          }
        ],
        "quiz": [
          {
            "q": "List(1, 2, 3).foldLeft(10)(_ + _) natijasi nima?",
            "options": [
              "6",
              "16",
              "10",
              "15"
            ],
            "answer": 1,
            "explain": "10 dan boshlanadi: 10+1=11, 11+2=13, 13+3=16."
          },
          {
            "q": "scanLeft nimasi bilan foldLeft dan farq qiladi?",
            "options": [
              "Faqat sonlar bilan ishlaydi",
              "Har bir oraliq natijani ham qaytaradi",
              "Boshlang'ich qiymat talab qilmaydi",
              "Kolleksiyani teskari qiladi"
            ],
            "answer": 1,
            "explain": "scanLeft har bir qadamdagi akkumulyator qiymatlarini ro'yxat sifatida beradi."
          },
          {
            "q": "Uzunligi 3 va 5 bo'lgan ikki ro'yxatni zip qilsa, natija nechta juftlikdan iborat?",
            "options": [
              "3",
              "5",
              "8",
              "2"
            ],
            "answer": 0,
            "explain": "zip qisqaroq kolleksiya uzunligicha juftlik yasaydi."
          }
        ]
      },
      {
        "id": 22,
        "title": "Matnlar, interpolatsiya va foydali string metodlari",
        "minutes": 15,
        "blocks": [
          {
            "type": "p",
            "html": "Matn bilan ishlash har qanday dasturda uchraydi: foydalanuvchi kiritmasi, fayl qatorlari, hisobot. Scala'ning <code>String</code> tipi Java metodlarini meros oladi, ustiga <code>s</code>, <code>f</code> va <code>raw</code> interpolatorlari qo'shiladi. Ularni to'g'ri tanlash kodni qisqa va o'qishga qulay qiladi."
          },
          {
            "type": "code",
            "title": "tozalash.scala",
            "code": "val xom = \"  Scala — kuchli til  \"\nval toza = xom.trim\n\nprintln(toza)\nprintln(toza.split(\" \").length)\nprintln(toza.toUpperCase)\nprintln(\"abc123\".filter(_.isLetter))\nprintln(\"a,b,c\".split(\",\").mkString(\" | \"))",
            "output": "Scala — kuchli til\n4\nSCALA — KUCHLI TIL\nabc\na | b | c"
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Natija"
            ],
            "rows": [
              [
                "<code>trim</code>",
                "Bosh va oxirdagi bo'shliqlarni olib tashlaydi"
              ],
              [
                "<code>split(sep)</code>",
                "Bo'laklar massivi"
              ],
              [
                "<code>mkString(sep)</code>",
                "Bo'laklarni bitta matnga birlashtiradi"
              ],
              [
                "<code>startsWith / endsWith</code>",
                "Boshlanish yoki tugashni tekshiradi"
              ],
              [
                "<code>replace(a, b)</code>",
                "Barcha uchragan joyni almashtiradi"
              ],
              [
                "<code>take(n) / drop(n)</code>",
                "Boshi yoki qolgan qismi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "interpolatsiya.scala",
            "code": "val ism = \"Aziza\"\nval ball = 92\n\nprintln(s\"$ism: $ball\")\nprintln(s\"Keyingi yil: \" + (ball + 5))\nprintln(f\"$ball%.1f\")\nprintln(raw\"yangi\\nqator\")\nprintln(\"Scala\".reverse)\nprintln(\"scala\".head.toUpper + \"scala\".tail)",
            "output": "Aziza: 92\nKeyingi yil: 97\n92.0\nyangi\\nqator\nalacS\nScala"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "s, f va raw",
            "html": "<code>s\"...\"</code> o'zgaruvchilarni oddiy matnga qo'shadi. <code>f\"...\"</code> format spetsifikatsiyasini qo'llaydi: <code>f\"$x%.2f\"</code> ikki xona kasr. <code>raw\"...\"</code> esa escape belgilarini (<code>\\n</code>, <code>\\t</code>) ochmasdan, ularni matn sifatida qoldiradi."
          },
          {
            "type": "ul",
            "items": [
              "Katta matnlarni <code>mkString</code> bilan yig'ish qayta-qayta <code>+</code> qilishdan tezroq.",
              "<code>split</code> oddiy holatlarda ishlaydi; murakkab naqsh uchun regex kerak.",
              "Foydalanuvchi kiritmasini har doim <code>trim</code> qilib tekshiring.",
              "Unicode belgilar uchun <code>length</code> har doim ham ko'rinadigan belgilar sonini bermaydi."
            ]
          }
        ],
        "quiz": [
          {
            "q": "f\"$ball%.1f\" qanday natija beradi, agar ball = 92 bo'lsa?",
            "options": [
              "92",
              "92.0",
              "92.00",
              "92.1"
            ],
            "answer": 1,
            "explain": "f-interpolator bir xona kasr formatini qo'llaydi va 92.0 chiqaradi."
          },
          {
            "q": "raw\"yangi\\nqator\" konsolga nimani chiqaradi?",
            "options": [
              "Ikki qator matn",
              "yangi\\nqator matnini bir qatorda",
              "Bo'sh qator",
              "Xato"
            ],
            "answer": 1,
            "explain": "raw interpolatori \\n ni escape sifatida ochmaydi, belgilarni o'zini qoldiradi."
          },
          {
            "q": "\"a,b,c\".split(\",\").mkString(\"-\") natijasi nima?",
            "options": [
              "a,b,c",
              "abc",
              "List(a, b, c)",
              "a-b-c"
            ],
            "answer": 3,
            "explain": "mkString bo'laklarni tanlangan ajratgich bilan birlashtiradi."
          }
        ]
      },
      {
        "id": 23,
        "title": "for-comprehension asoslari",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "<code>for</code> — Scala'da ro'yxatlar, <code>Option</code>, <code>Either</code> va boshqa konteynerlar ustida ishlashning o'qishga qulay shakli. U yangi tsikl emas: kompilyator uni <code>map</code>, <code>flatMap</code> va <code>withFilter</code> chaqiruvlariga aylantiradi. Shu sababli bir xil yozuv turli konteynerlar bilan ishlaydi."
          },
          {
            "type": "code",
            "title": "for-asos.scala",
            "code": "val kvadratlar = for\n  n <- List(1, 2, 3)\nyield n * n\n\nprintln(kvadratlar)\n\nval juftlar = for\n  a <- List(1, 2)\n  b <- List(\"x\", \"y\")\nyield s\"$a$b\"\n\nprintln(juftlar)\n\nval juftSonlar = for\n  n <- List(1, 2, 3, 4)\n  if n % 2 == 0\nyield n\n\nprintln(juftSonlar)",
            "output": "List(1, 4, 9)\nList(1x, 1y, 2x, 2y)\nList(2, 4)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Generator va yield",
            "html": "<code>n &lt;- List(1, 2, 3)</code> — generator: navbat bilan har bir elementni oladi. <code>yield</code> esa natijani yasaydi. Bir nechta generator bo'lsa, ularning barcha kombinatsiyalari ko'rib chiqiladi. <code>if</code> bilan yozilgan shart esa <code>withFilter</code> ga aylanadi."
          },
          {
            "type": "table",
            "head": [
              "for yozuvi",
              "Kompilyatsiyadan keyin"
            ],
            "rows": [
              [
                "<code>for x &lt;- xs yield f(x)</code>",
                "<code>xs.map(f)</code>"
              ],
              [
                "<code>for x &lt;- xs; y &lt;- ys yield f(x, y)</code>",
                "<code>xs.flatMap(x => ys.map(y => f(x, y)))</code>"
              ],
              [
                "<code>for x &lt;- xs if p(x) yield f(x)</code>",
                "<code>xs.withFilter(p).map(f)</code>"
              ],
              [
                "<code>for x &lt;- opt yield f(x)</code>",
                "<code>opt.map(f)</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "for-option.scala",
            "code": "def yosh(matn: String): Option[Int] = matn.toIntOption.filter(_ >= 0)\n\nval yigindi = for\n  a <- yosh(\"20\")\n  b <- yosh(\"5\")\nyield a + b\n\nprintln(yigindi)\n\nval xato = for\n  a <- yosh(\"x\")\n  b <- yosh(\"5\")\nyield a + b\nprintln(xato)\n\nval narxlar = Map(\"olma\" -> 12000, \"nok\" -> 15000)\nval arzon = for\n  (nom, narx) <- narxlar.toList\n  if narx < 14000\nyield s\"$nom: $narx\"\nprintln(arzon)",
            "output": "Some(25)\nNone\nList(olma: 12000)"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Qachon oddiy map yetarli?",
            "html": "Bitta generator va bitta <code>yield</code> bo'lsa, <code>map</code> qisqaroq. <code>for</code> esa ikki va undan ortiq generator, shart yoki <code>Option</code>/<code>Either</code> zanjiri bo'lganda kodni ancha o'qishli qiladi. Ikkala uslub ham bir xil natija beradi."
          }
        ],
        "quiz": [
          {
            "q": "for n <- List(1, 2, 3) yield n * 2 qanday natija beradi?",
            "options": [
              "List(2, 4, 6)",
              "List(1, 2, 3)",
              "6",
              "List(2, 3, 4)"
            ],
            "answer": 0,
            "explain": "yield har bir element uchun n * 2 hisoblab, yangi ro'yxat qaytaradi."
          },
          {
            "q": "Ikki generatorli for-ifoda qaysi metodga tayanadi?",
            "options": [
              "filter",
              "reduce",
              "flatMap",
              "foldLeft"
            ],
            "answer": 2,
            "explain": "Kompilyator tashqi generatorni flatMap bilan ochadi."
          },
          {
            "q": "Option ustidagi for zanjirida generatorlardan biri None bo'lsa, natija nima bo'ladi?",
            "options": [
              "0",
              "None",
              "Xato",
              "Some(0)"
            ],
            "answer": 1,
            "explain": "Option qisqa tutashuv hosil qiladi va butun ifoda None qaytaradi."
          }
        ]
      },
      {
        "id": 24,
        "title": "for-comprehension: murakkab oqim va Either",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Oldingi darsda <code>for</code> ning asosiy shaklini ko'rdik. Endi uni haqiqiy vazifalarda qo'llaymiz: bir nechta manbadan ma'lumot olish, oraliq qiymat hisoblash, shartlar qo'shish va <code>Either</code> bilan validatsiya zanjirini yasash. Bu yerda <code>for</code> kodni ichma-ich <code>flatMap</code> lardan xalos qiladi."
          },
          {
            "type": "code",
            "title": "talabalar.scala",
            "code": "case class Talaba(ism: String, yosh: Int, ball: Int)\n\nval talabalar = List(\n  Talaba(\"Aziza\", 16, 92),\n  Talaba(\"Bek\", 15, 74),\n  Talaba(\"Dilnoza\", 17, 88)\n)\n\nval natija = for\n  t <- talabalar\n  if t.ball >= 80\n  baho = if t.ball >= 90 then \"A\" else \"B\"\nyield t.ism + \": \" + baho\n\nprintln(natija)\n\nval jadval = for\n  i <- 1 to 3\n  j <- 1 to 3\n  if (i + j) % 2 == 0\nyield s\"$i+$j\"\n\nprintln(jadval)",
            "output": "List(Aziza: A, Dilnoza: B)\nList(1+1, 1+3, 2+2, 3+1, 3+3)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Oraliq qiymat va shartlar",
            "html": "<code>baho = ...</code> kabi qator generator emas, <b>orasidagi ta'rif</b>: u har bir <code>t</code> uchun bir marta hisoblanadi. <code>if</code> qatorlari esa qaysi kombinatsiyalar davom etishini belgilaydi. Barcha qatorlar bir xil chekinishda turishi kerak."
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>x &lt;- xs</code>",
                "Generator"
              ],
              [
                "<code>y = ifoda</code>",
                "Oraliq o'zgaruvchi"
              ],
              [
                "<code>if shart</code>",
                "Filtr (guard)"
              ],
              [
                "<code>yield ifoda</code>",
                "Natijani yasash"
              ],
              [
                "<code>(a, b) &lt;- juftliklar</code>",
                "Naqsh bo'yicha ajratish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "either-zanjir.scala",
            "code": "def ism(matn: String): Either[String, String] =\n  if matn.trim.nonEmpty then Right(matn.trim) else Left(\"Ism bo'sh\")\n\ndef yosh(n: Int): Either[String, Int] =\n  if n >= 7 && n <= 100 then Right(n) else Left(\"Yosh noto'g'ri\")\n\ndef talaba(matn: String, n: Int): Either[String, String] =\n  for\n    i <- ism(matn)\n    y <- yosh(n)\n  yield s\"$i ($y yosh)\"\n\nprintln(talaba(\"Aziza\", 16))\nprintln(talaba(\"  \", 16))\nprintln(talaba(\"Bek\", 3))",
            "output": "Right(Aziza (16 yosh))\nLeft(Ism bo'sh)\nLeft(Yosh noto'g'ri)"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Birinchi xatoda to'xtash",
            "html": "Either zanjirida birinchi <code>Left</code> uchraydi va qolgan qadamlar bajarilmaydi. Bu validatsiya uchun qulay: foydalanuvchiga eng birinchi topilgan xatoni ko'rsatasiz. Barcha xatolarni bir vaqtda yig'ish kerak bo'lsa, boshqa yondashuv (masalan, xatolar ro'yxati) tanlanadi."
          }
        ],
        "quiz": [
          {
            "q": "for ichidagi \"baho = if ...\" qatori qanday rol o'ynaydi?",
            "options": [
              "Yangi generator",
              "Har bir element uchun oraliq qiymat",
              "Filtr",
              "Tsiklni to'xtatadi"
            ],
            "answer": 1,
            "explain": "Tenglik bilan yozilgan qator oraliq o'zgaruvchi hisoblanadi, generator emas."
          },
          {
            "q": "Either ustidagi for zanjirida Left paydo bo'lsa nima sodir bo'ladi?",
            "options": [
              "Xato tashlanadi",
              "Keyingi qadamlar bajarilmaydi, Left qaytadi",
              "Left Right ga aylanadi",
              "Barcha qadamlar davom etadi"
            ],
            "answer": 1,
            "explain": "Either qisqa tutashuv qiladi va birinchi Left natija bo'lib qoladi."
          },
          {
            "q": "Ikki generator i <- 1 to 2 va j <- 1 to 2 nechta kombinatsiya beradi?",
            "options": [
              "2",
              "3",
              "8",
              "4"
            ],
            "answer": 3,
            "explain": "Har bir i uchun ikkita j ko'rib chiqiladi: jami 2 * 2 = 4."
          }
        ]
      },
      {
        "id": 25,
        "title": "Currying, funksiya qiymatlari va qismiy qo'llash",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Scala'da funksiya ham qiymat: uni o'zgaruvchiga berish, argument sifatida uzatish va qaytarish mumkin. <b>Currying</b> — bir necha parametrni ketma-ket parametr ro'yxatlariga bo'lish. Bu qismiy qo'llash (partial application) va konfiguratsiyani qulay qiladi."
          },
          {
            "type": "code",
            "title": "currying.scala",
            "code": "def qosh(a: Int)(b: Int): Int = a + b\n\nval beshQosh = qosh(5)\nprintln(beshQosh(3))\nprintln(qosh(2)(8))\n\ndef takrorlash(n: Int)(matn: String): String = matn * n\nprintln(takrorlash(2)(\"ha\"))\n\nval kopaytir: (Int, Int) => Int = _ * _\nprintln(kopaytir(4, 5))",
            "output": "8\n10\nhaha\n20"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Nega currying foydali?",
            "html": "<code>qosh(5)</code> natijasi <code>Int => Int</code> funksiyasi bo'lib qoladi. Uni saqlab, keyin turli argumentlar bilan chaqirish mumkin. Bu ayniqsa umumiy funksiyani ma'lum sozlamalar bilan \"maxsuslashtirish\" kerak bo'lganda qulay: <code>val solishtir = taqqosla(standartTartib)</code>."
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>(Int, Int) => Int</code>",
                "Ikki argumentli funksiya tipi"
              ],
              [
                "<code>Int => Int => Int</code>",
                "Curried funksiya tipi"
              ],
              [
                "<code>f(3, _: Int)</code>",
                "Qismiy qo'llash"
              ],
              [
                "<code>x => x * 2</code>",
                "Anonim funksiya (lambda)"
              ],
              [
                "<code>_ * 2</code>",
                "Qisqa lambda yozuvi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "qismiy.scala",
            "code": "def kopaytir(a: Int, b: Int): Int = a * b\nval uchga = kopaytir(3, _: Int)\nprintln(uchga(4))\n\nval formatla: (String, Int) => String = (ism, ball) => s\"$ism: $ball\"\nprintln(formatla(\"Aziza\", 92))\n\ndef qollash(f: Int => Int, n: Int): Int = f(n)\nprintln(qollash(_ + 10, 5))\nprintln(qollash(x => x * x, 5))",
            "output": "12\nAziza: 92\n15\n25"
          },
          {
            "type": "ul",
            "items": [
              "Curried funksiyani <code>f(a)(b)</code> ko'rinishida chaqirasiz.",
              "Ikkinchi parametrlar ro'yxatini <code>using</code> bilan ham ajratish mumkin.",
              "Funksiya qiymatini saqlaganda tipni yozish xatolarni erta ushlaydi.",
              "Metodni funksiya qiymatiga aylantirish eta-expansion deyiladi."
            ]
          }
        ],
        "quiz": [
          {
            "q": "def qosh(a: Int)(b: Int) uchun qosh(2) ifodasi qanday tipga ega?",
            "options": [
              "Int",
              "(Int, Int) => Int",
              "Int => Int",
              "Unit"
            ],
            "answer": 2,
            "explain": "Birinchi parametr berilgach, qolgan b parametrni kutuvchi funksiya qaytadi."
          },
          {
            "q": "Quyidagilardan qaysi biri ikki argumentli funksiya qiymati tipi?",
            "options": [
              "(Int, Int) => Int",
              "Int => Int => Int",
              "Int -> Int",
              "Function[Int]"
            ],
            "answer": 0,
            "explain": "Tuple ko'rinishidagi parametrlar (Int, Int) => Int deb yoziladi."
          },
          {
            "q": "kopaytir(3, _: Int) ifodasi nima hosil qiladi?",
            "options": [
              "Birinchi argumentni 3 ga tenglashtiradigan yangi funksiya",
              "Xato beradi",
              "Darhol 3 ni qaytaradi",
              "Ikki argumentli funksiya"
            ],
            "answer": 0,
            "explain": "Pastki chiziq qolgan parametr uchun joy qoldirib, qismiy qo'llangan funksiya yasaydi."
          }
        ]
      },
      {
        "id": 26,
        "title": "Rekursiya va @tailrec",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Rekursiya — funksiyaning o'zini chaqirishi. Ro'yxatni bo'laklab qayta ishlash, daraxtni aylanish va matematik hisoblar uchun tabiiy usul. Lekin har bir chaqiruv stack'da joy egallaydi. <code>@tailrec</code> yordamida oxirgi chaqiruvni tsiklga aylantirib, stack'ni tejash mumkin."
          },
          {
            "type": "code",
            "title": "faktorial.scala",
            "code": "import scala.annotation.tailrec\n\ndef faktorial(n: BigInt): BigInt =\n  @tailrec\n  def yordam(k: BigInt, acc: BigInt): BigInt =\n    if k <= 1 then acc else yordam(k - 1, acc * k)\n  yordam(n, 1)\n\nprintln(faktorial(5))\nprintln(faktorial(20))",
            "output": "120\n2432902008176640000"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Tail call nima?",
            "html": "Rekursiv chaqiruv funksiyaning <b>eng oxirgi</b> amali bo'lsa, uning natijasidan keyin boshqa hisob qolmasa — bu tail call. Kompilyator uni tsiklga aylantira oladi. <code>@tailrec</code> ana shu shart bajarilganini kompilyatsiya vaqtida tekshiradi."
          },
          {
            "type": "table",
            "head": [
              "Shakl",
              "Misol",
              "Xavf"
            ],
            "rows": [
              [
                "Tail recursive",
                "<code>yordam(k - 1, acc * k)</code>",
                "Stack o'smaydi"
              ],
              [
                "Oddiy rekursiya",
                "<code>bosh + yigindi(qolgan)</code>",
                "Chuqur kirishda stack overflow"
              ],
              [
                "Iteratsiya",
                "<code>while</code> yoki <code>foldLeft</code>",
                "Odatda xavfsiz"
              ]
            ]
          },
          {
            "type": "code",
            "title": "yigindi.scala",
            "code": "def yigindi(xs: List[Int]): Int = xs match\n  case Nil => 0\n  case bosh :: qolgan => bosh + yigindi(qolgan)\n\nprintln(yigindi(List(1, 2, 3, 4)))\nprintln(yigindi((1 to 100).toList))\n\ndef fib(n: Int): Long =\n  @annotation.tailrec\n  def loop(k: Int, a: Long, b: Long): Long =\n    if k == 0 then a else loop(k - 1, b, a + b)\n  loop(n, 0L, 1L)\n\nprintln((0 to 10).map(fib).mkString(\", \"))",
            "output": "10\n5050\n0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Har qanday rekursiya tail bo'lavermaydi",
            "html": "<code>bosh + yigindi(qolgan)</code> da qo'shish chaqiruvdan keyin bajariladi, shuning uchun bu tail call emas. Uni akkumulyator qo'shib <code>yigindi(qolgan, acc + bosh)</code> ko'rinishiga keltirish mumkin. Katta ro'yxatlarda <code>foldLeft</code> ko'pincha eng sodda yechim."
          }
        ],
        "quiz": [
          {
            "q": "@tailrec annotatsiyasi nimani tekshiradi?",
            "options": [
              "Funksiya natijasini",
              "Faqat sonlar bilan ishlashni",
              "Rekursiv chaqiruv tail holatda ekanini",
              "Stack hajmini"
            ],
            "answer": 2,
            "explain": "Agar rekursiya tail bo'lmasa, kompilyator xato beradi."
          },
          {
            "q": "faktorial(0) tailrec yordamchisi bilan qanday natija beradi?",
            "options": [
              "0",
              "1",
              "Xato",
              "Cheksiz"
            ],
            "answer": 1,
            "explain": "k <= 1 sharti bajarilib, akkumulyatorning boshlang'ich qiymati 1 qaytadi."
          },
          {
            "q": "Chuqur oddiy (tail bo'lmagan) rekursiyaning asosiy xavfi nima?",
            "options": [
              "Sekinlashish",
              "Natija noto'g'ri bo'lishi",
              "Tip yo'qolishi",
              "Stack overflow"
            ],
            "answer": 3,
            "explain": "Har bir tugallanmagan chaqiruv stack'da qolib, chuqurlikda stack overflow beradi."
          }
        ]
      },
      {
        "id": 27,
        "title": "lazy val va by-name parametrlar",
        "minutes": 15,
        "blocks": [
          {
            "type": "p",
            "html": "Ba'zi qiymatlar qimmatga tushadi yoki har doim ham kerak bo'lmaydi. <code>lazy val</code> faqat birinchi murojaatda hisoblanadi va keyin eslab qolinadi. <b>By-name</b> parametr (<code>=></code>) esa har chaqirilganda qayta baholanadi — bu shartli hisoblash va o'z dasturlash tillarini yasashda foydali."
          },
          {
            "type": "code",
            "title": "lazy.scala",
            "code": "lazy val qimmat =\n  println(\"hisoblanmoqda\")\n  42\n\nprintln(\"oldin\")\nprintln(qimmat)\nprintln(qimmat)",
            "output": "oldin\nhisoblanmoqda\n42\n42"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Bir marta hisoblash",
            "html": "<code>lazy val</code> birinchi o'qilganda hisoblanadi, keyingi murojaatlarda tayyor natija qaytadi. <code>def</code> esa har chaqiruvda qaytadan bajariladi. Shuning uchun og'ir konfiguratsiya yoki ulanishni bir marta tayyorlash uchun lazy val mos keladi."
          },
          {
            "type": "table",
            "head": [
              "Konstruksiya",
              "Qachon hisoblanadi",
              "Necha marta"
            ],
            "rows": [
              [
                "<code>val</code>",
                "E'lon qilinganda",
                "Bir marta"
              ],
              [
                "<code>lazy val</code>",
                "Birinchi murojaatda",
                "Bir marta"
              ],
              [
                "<code>def</code>",
                "Har chaqiruvda",
                "Har safar"
              ],
              [
                "<code>x: => A</code>",
                "Parametr ishlatilganda",
                "Har ishlatilganda"
              ]
            ]
          },
          {
            "type": "code",
            "title": "by-name.scala",
            "code": "def vaqt(matn: => String): Unit =\n  println(\"boshlandi\")\n  println(matn)\n\nvaqt {\n  println(\"baholanyapti\")\n  \"natija\"\n}\n\ndef ikkiMarta(x: => Int): Int = x + x\nvar hisob = 0\n\ndef keyingi(): Int =\n  hisob += 1\n  hisob\n\nprintln(ikkiMarta(keyingi()))\nprintln(hisob)",
            "output": "boshlandi\nbaholanyapti\nnatija\n3\n2"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "By-name yon ta'sirni takrorlashi mumkin",
            "html": "<code>ikkiMarta(keyingi())</code> da <code>keyingi()</code> ikki marta chaqirildi: birinchi natija 1, ikkinchisi 2, yig'indi 3. By-name parametrni yon ta'sirli funksiya bilan ishlatganda buni yodda tuting. Sof hisoblar uchun muammo yo'q."
          }
        ],
        "quiz": [
          {
            "q": "lazy val birinchi murojaatdan keyin keyingi murojaatlarda nima qiladi?",
            "options": [
              "Qaytadan hisoblaydi",
              "null qaytaradi",
              "Xato beradi",
              "Saqlangan natijani qaytaradi"
            ],
            "answer": 3,
            "explain": "lazy val natijani memolaydi va keyingi safar tayyor qiymatni beradi."
          },
          {
            "q": "x: => Int parametri qanday xususiyatga ega?",
            "options": [
              "Faqat bir marta baholanadi",
              "Faqat funksiya qabul qiladi",
              "Doim 0 bo'ladi",
              "Har ishlatilganda qayta baholanadi"
            ],
            "answer": 3,
            "explain": "By-name parametr har murojaatda ifodani qaytadan baholaydi."
          },
          {
            "q": "Qaysi holatda def o'rniga lazy val afzal?",
            "options": [
              "Har chaqiruvda yangi natija kerak bo'lsa",
              "Qiymat juda kichik bo'lsa",
              "Qimmat hisobni bir marta bajarib eslab qolish kerak bo'lsa",
              "Faqat yon ta'sir kerak bo'lsa"
            ],
            "answer": 2,
            "explain": "Qimmat hisobni bir marta bajarish va natijani saqlash lazy val vazifasi."
          }
        ]
      },
      {
        "id": 28,
        "title": "Generiklar: tip parametrlari bilan umumiy kod",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Generik funksiya yoki sinf bir necha tip bilan bir xil ishlaydi, lekin tip xavfsizligini saqlaydi. <code>List[A]</code>, <code>Option[A]</code> — buning tayyor misollari. O'z kodingizda <code>[A]</code> tip parametrini qo'shib, takroriy funksiyalarni birlashtirishingiz mumkin."
          },
          {
            "type": "code",
            "title": "generik.scala",
            "code": "def birinchi[A](xs: List[A]): Option[A] = xs.headOption\n\nprintln(birinchi(List(10, 20)))\nprintln(birinchi(List(\"a\", \"b\")))\nprintln(birinchi(List.empty[Double]))\n\ncase class Quti[A](qiymat: A):\n  def ozgartir[B](f: A => B): Quti[B] = Quti(f(qiymat))\n\nprintln(Quti(21).ozgartir(_ * 2))\nprintln(Quti(\"scala\").ozgartir(_.length))",
            "output": "Some(10)\nSome(a)\nNone\nQuti(42)\nQuti(5)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "A — aniq tip emas",
            "html": "<code>A</code> — tip parametri: funksiya chaqirilganda kompilyator uning o'rniga aniq tipni qo'yadi. <code>birinchi(List(10, 20))</code> da <code>A = Int</code>, matnlar ro'yxatida esa <code>A = String</code>. Shu sababli natija tipi ham to'g'ri saqlanadi."
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>def f[A](x: A)</code>",
                "Bitta tip parametrli metod"
              ],
              [
                "<code>class Quti[A]</code>",
                "Tip parametrli sinf"
              ],
              [
                "<code>Quti[Int]</code>",
                "Aniq tip bilan qo'llash"
              ],
              [
                "<code>[A, B]</code>",
                "Ikki mustaqil tip parametri"
              ]
            ]
          },
          {
            "type": "code",
            "title": "juftlik.scala",
            "code": "case class Juftlik[A, B](birinchi: A, ikkinchi: B)\n\ndef almashtir[A, B](j: Juftlik[A, B]): Juftlik[B, A] =\n  Juftlik(j.ikkinchi, j.birinchi)\n\nprintln(almashtir(Juftlik(\"yosh\", 16)))\nprintln(almashtir(Juftlik(1, true)))",
            "output": "Juftlik(16,yosh)\nJuftlik(true,1)"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Qachon generik kerak?",
            "html": "Agar funksiya mantiq tipga bog'liq bo'lmasa — generik yozing. Agar har bir tip uchun alohida xatti-harakat kerak bo'lsa — type class yoki pattern matching ishlatiladi. Generik kodni majburan murakkablashtirmang: ikki-uch aniq tip yetarli bo'lsa, soddaroq yechim afzal."
          }
        ],
        "quiz": [
          {
            "q": "def birinchi[A](xs: List[A]) dagi A nima?",
            "options": [
              "Aniq Int tipi",
              "Kolleksiya nomi",
              "Faqat String",
              "Tip parametri"
            ],
            "answer": 3,
            "explain": "A chaqiruvda aniqlanadigan umumiy tip parametri."
          },
          {
            "q": "Quti(21).ozgartir(_.toString) qanday tipdagi natija beradi?",
            "options": [
              "Quti[String]",
              "String",
              "Quti[Int]",
              "Option[String]"
            ],
            "answer": 0,
            "explain": "B tipi String bo'ladi, natija Quti[String]."
          },
          {
            "q": "Generik funksiyaning asosiy foydasi nimada?",
            "options": [
              "Faqat sonlarni qabul qilish",
              "Kodni sekinlashtirish",
              "Har bir tip uchun kodni takrorlamaslik va tipni saqlash",
              "Tipni o'chirish"
            ],
            "answer": 2,
            "explain": "Bitta mantiq turli tiplar bilan ishlaydi, kompilyator esa tipni tekshiradi."
          }
        ]
      },
      {
        "id": 29,
        "title": "Variance: +A va -A",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Agar <code>Mushuk</code> <code>Hayvon</code> ning kenja tipi bo'lsa, <code>List[Mushuk]</code> ni <code>List[Hayvon]</code> o'rnida ishlatish mumkinmi? Bu savolga <b>variance</b> javob beradi. Scala uch xil variantni qo'llaydi: kovariant <code>[+A]</code>, kontravariant <code>[-A]</code> va invariant <code>[A]</code>."
          },
          {
            "type": "code",
            "title": "kovariant.scala",
            "code": "class Hayvon\nclass Mushuk extends Hayvon\n\nclass Quti[+A](val qiymat: A)\n\ndef ol(q: Quti[Hayvon]): Hayvon = q.qiymat\n\nval mushuklar: Quti[Mushuk] = Quti(new Mushuk)\nprintln(ol(mushuklar).getClass.getSimpleName)\n\nval royxat: List[Mushuk] = List(new Mushuk)\nval hayvonlar: List[Hayvon] = royxat\nprintln(hayvonlar.size)",
            "output": "Mushuk\n1"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Kovariant — ishlab chiqaruvchi",
            "html": "<code>Quti[+A]</code> faqat A tipidagi qiymatni <b>qaytaradi</b>. <code>Quti[Mushuk]</code> ni <code>Quti[Hayvon]</code> kabi o'qish xavfsiz, chunki olingan har bir Mushuk ham Hayvon. <code>List</code>, <code>Option</code>, <code>Vector</code> kovariant."
          },
          {
            "type": "table",
            "head": [
              "Belgi",
              "Nomi",
              "Munosabat"
            ],
            "rows": [
              [
                "<code>[+A]</code>",
                "Kovariant",
                "<code>Mushuk &lt;: Hayvon</code> bo'lsa, <code>Quti[Mushuk] &lt;: Quti[Hayvon]</code>"
              ],
              [
                "<code>[-A]</code>",
                "Kontravariant",
                "Munosabat teskari"
              ],
              [
                "<code>[A]</code>",
                "Invariant",
                "Faqat aynan bir xil tip"
              ]
            ]
          },
          {
            "type": "code",
            "title": "kontravariant.scala",
            "code": "trait Ishlovchi[-A]:\n  def ishla(a: A): String\n\nval hayvonIshlovchi: Ishlovchi[Hayvon] = new Ishlovchi[Hayvon]:\n  def ishla(a: Hayvon): String = \"hayvon ishlandi\"\n\nval mushukIshlovchi: Ishlovchi[Mushuk] = hayvonIshlovchi\nprintln(mushukIshlovchi.ishla(new Mushuk))",
            "output": "hayvon ishlandi"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Iste'molchi qoidasi",
            "html": "Agar tip faqat parametr sifatida <b>qabul qilinsa</b> (iste'molchi), u kontravariant bo'lishi mumkin. Agar faqat natija sifatida <b>qaytarilsa</b> (ishlab chiqaruvchi), kovariant. Funksiya tipi <code>Function1[-T, +R]</code> — bu qoidaning klassik misoli."
          }
        ],
        "quiz": [
          {
            "q": "Mushuk Hayvon'ning kenja tipi. Quti[+A] uchun qaysi munosabat to'g'ri?",
            "options": [
              "Ikkalasi teng",
              "Quti[Hayvon] <: Quti[Mushuk]",
              "Quti[Mushuk] <: Quti[Hayvon]",
              "Munosabat yo'q"
            ],
            "answer": 2,
            "explain": "Kovariantlik kenja tip munosabatini saqlaydi."
          },
          {
            "q": "Ishlovchi[-A] kontravariant bo'lsa, Ishlovchi[Hayvon] ni qanday ishlatish mumkin?",
            "options": [
              "Faqat Ishlovchi[Hayvon] sifatida",
              "Umuman ishlatib bo'lmaydi",
              "Faqat Any sifatida",
              "Ishlovchi[Mushuk] o'rnida"
            ],
            "answer": 3,
            "explain": "Kontravariantlikda munosabat teskari: Hayvon ishlovchisi Mushuk bilan ham ishlay oladi."
          },
          {
            "q": "Funksiya tipi Function1[-T, +R] nima uchun shunday yozilgan?",
            "options": [
              "Variance ahamiyatsiz",
              "T qaytariladi, R qabul qilinadi",
              "Ikkalasi ham qaytariladi",
              "T qabul qilinadi, R qaytariladi"
            ],
            "answer": 3,
            "explain": "Parametr iste'mol qilinadi (kontravariant), natija ishlab chiqariladi (kovariant)."
          }
        ]
      },
      {
        "id": 30,
        "title": "Traitlar chuqurroq: mixin, linearization va self-type",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Trait — nafaqat interfeys, balki tayyor xatti-harakatni aralashtirish (mixin) usuli. Bir class bir nechta traitni <code>with</code> bilan qabul qilishi mumkin. Bir xil metod bir nechta traitda bo'lsa, Scala <b>linearization</b> tartibida qaysi <code>super</code> chaqirilishini hal qiladi."
          },
          {
            "type": "code",
            "title": "linearization.scala",
            "code": "trait A:\n  def nom: String = \"A\"\n\ntrait B extends A:\n  override def nom: String = \"B->\" + super.nom\n\ntrait C extends A:\n  override def nom: String = \"C->\" + super.nom\n\nclass D extends B with C\n\nprintln((new D).nom)\nprintln((new D).getClass.getSimpleName)",
            "output": "C->B->A\nD"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "super qayerga boradi?",
            "html": "<code>class D extends B with C</code> uchun linearization <code>D -> C -> B -> A</code>. Shuning uchun <code>C.nom</code> dagi <code>super</code> B ga, <code>B.nom</code> dagi <code>super</code> esa A ga murojaat qiladi. Eng o'ngdagi trait birinchi ishlaydi."
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>extends B with C</code>",
                "B va C traitlarini qo'shish"
              ],
              [
                "<code>super.nom</code>",
                "Linearization bo'yicha keyingi implementatsiya"
              ],
              [
                "<code>override</code>",
                "Mavjud metodni qayta yozish"
              ],
              [
                "<code>self: Ombor =></code>",
                "Self-type: host tipiga talab"
              ]
            ]
          },
          {
            "type": "code",
            "title": "self-type.scala",
            "code": "trait Ombor:\n  def saqlash(x: String): Unit\n\ntrait Xizmat:\n  self: Ombor =>\n  def qosh(x: String): Unit = saqlash(x)\n\nclass Xotira extends Ombor:\n  var n = 0\n  def saqlash(x: String): Unit =\n    n += 1\n    println(s\"saqlandi: $x\")\n\nval x = new Xotira with Xizmat\nx.qosh(\"olma\")\nprintln(x.n)",
            "output": "saqlandi: olma\n1"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Self-type meros emas",
            "html": "<code>Xizmat</code> <code>Ombor</code> dan meros olmaydi, lekin u faqat <code>Ombor</code> bilan birga aralashtirilgan class ichida ishlay oladi. Bu kompozitsiyani merosdan ajratish imkonini beradi. Self-type talabi bajarilmasa, kompilyator xato beradi."
          }
        ],
        "quiz": [
          {
            "q": "class D extends B with C uchun linearization qanday tartibda bo'ladi?",
            "options": [
              "A -> B -> C -> D",
              "D -> B -> C -> A",
              "D -> C -> B -> A",
              "B -> C -> D -> A"
            ],
            "answer": 2,
            "explain": "Eng o'ngdagi trait birinchi keladi, so'ng chapdagilar va oxirida ota trait."
          },
          {
            "q": "Self-type (self: Ombor =>) nimani bildiradi?",
            "options": [
              "Trait Ombor dan meros oladi",
              "Faqat Ombor obyektlarida ishlaydi",
              "Ombor maydonini o'chiradi",
              "Yangi Ombor yaratadi"
            ],
            "answer": 1,
            "explain": "Self-type traitni qo'shgan class Ombor bo'lishini talab qiladi."
          },
          {
            "q": "Bir nechta traitda bir xil metod bo'lsa, konfliktni qanday hal qilinadi?",
            "options": [
              "Kompilyator tasodifiy tanlaydi",
              "Birinchi trait doim yutadi",
              "Classda override bilan aniq implementatsiya yoziladi",
              "Metod o'chiriladi"
            ],
            "answer": 2,
            "explain": "Class aniq override qilib, super chaqiruvlar tartibini belgilaydi."
          }
        ]
      },
      {
        "id": 31,
        "title": "Given va using: Scala 3'da implicits",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Ba'zi parametrlarni har safar qo'lda berish ortiqcha: tartiblash qoidasi, execution context, konfiguratsiya. Scala 3'da <code>given</code> bunday standart qiymatni e'lon qiladi, <code>using</code> esa uni avtomatik qabul qiluvchi parametrni belgilaydi. Bu eski <code>implicit</code> mexanizmining yangi, aniqroq ko'rinishi."
          },
          {
            "type": "code",
            "title": "given.scala",
            "code": "case class Foydalanuvchi(ism: String, til: String)\n\ngiven standartTil: String = \"uz\"\n\ndef salomlash(f: Foydalanuvchi)(using til: String): String =\n  s\"Salom, $f.ism! Til: $til\"\n\nprintln(salomlash(Foydalanuvchi(\"Aziza\", \"en\")))\nprintln(salomlash(Foydalanuvchi(\"Bek\", \"ru\"))(using \"ru\"))",
            "output": "Salom, Aziza! Til: uz\nSalom, Bek! Til: ru"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "using parametr qanday topiladi?",
            "html": "Chaqiruvda <code>using</code> parametr uchun aniq argument berilmasa, kompilyator ko'rinish doirasidagi (scope) mos <code>given</code> ni qidiradi. Topilmasa yoki bir nechta mos variant bo'lsa — kompilyatsiya xatosi. Bu oddiy parametrdan farqli, lekin aniq va tekshiriladigan mexanizm."
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>given nom: Type = qiymat</code>",
                "Nomlangan given"
              ],
              [
                "<code>given Type with ...</code>",
                "Anonim given obyekt"
              ],
              [
                "<code>(using x: Type)</code>",
                "Avtomatik parametr"
              ],
              [
                "<code>summon[Type]</code>",
                "Given ni qo'lda olish"
              ],
              [
                "<code>import obj.given</code>",
                "Given ni import qilish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "shifr.scala",
            "code": "trait Shifrlagich:\n  def shifrla(matn: String): String\n\ngiven standart: Shifrlagich with\n  def shifrla(matn: String): String = matn.reverse\n\ndef yubor(matn: String)(using s: Shifrlagich): String = s.shifrla(matn)\n\nprintln(yubor(\"Scala\"))\n\nval katta = new Shifrlagich:\n  def shifrla(matn: String): String = matn.toUpperCase.reverse\n\nprintln(yubor(\"Scala\")(using katta))\nprintln(summon[Shifrlagich].shifrla(\"abc\"))",
            "output": "alacS\nALACS\ncba"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Aniq argument ustuvor",
            "html": "Agar chaqiruvda <code>(using katta)</code> kabi aniq argument berilsa, u standart given o'rnida ishlatiladi. Bu testlarda soxta implementatsiya berish yoki alohida konfiguratsiya bilan ishlash uchun qulay. Given ni suiiste'mol qilmasdan, faqat haqiqiy \"muhit\" qiymatlari uchun ishlating."
          }
        ],
        "quiz": [
          {
            "q": "given nimani ta'minlaydi?",
            "options": [
              "Yangi class",
              "using parametr uchun standart qiymat",
              "Faqat testlarni",
              "Fayl tizimini"
            ],
            "answer": 1,
            "explain": "given kompilyator using parametrni to'ldirishi uchun mos qiymat beradi."
          },
          {
            "q": "def f(x: Int)(using s: String) chaqiruvida s qayerdan olinadi?",
            "options": [
              "Har doim bo'sh matn",
              "Faqat qo'lda beriladi",
              "Fayl nomidan",
              "Ko'rinishdagi mos given yoki aniq using argumentidan"
            ],
            "answer": 3,
            "explain": "Aniq argument bo'lmasa, scope'dagi mos given avtomatik topiladi."
          },
          {
            "q": "summon[Shifrlagich] nima qiladi?",
            "options": [
              "Yangi Shifrlagich yaratadi",
              "Given ni o'chiradi",
              "Mavjud given Shifrlagich ni qaytaradi",
              "Faqat tipni tekshiradi"
            ],
            "answer": 2,
            "explain": "summon joriy scope'dagi given nusxasini olib beradi."
          }
        ]
      },
      {
        "id": 32,
        "title": "Extension metodlar bilan kodni kengaytirish",
        "minutes": 15,
        "blocks": [
          {
            "type": "p",
            "html": "Mavjud tipga o'z metodingizni qo'shish uchun uni o'zgartirish shart emas. Scala 3'da <code>extension</code> bloki String, Int yoki o'zingizning tipingizga yangi metod qo'shadi. Bu utility funksiyalarni tabiiy <code>qiymat.metod</code> ko'rinishida ishlatish imkonini beradi."
          },
          {
            "type": "code",
            "title": "extension.scala",
            "code": "extension (matn: String)\n  def qisqa(n: Int): String =\n    if matn.length <= n then matn else matn.take(n) + \"...\"\n\nprintln(\"Scala 3 juda qulay\".qisqa(9))\nprintln(\"salom\".qisqa(10))\n\nextension (n: Int)\n  def kvadrat: Int = n * n\n  def juftmi: Boolean = n % 2 == 0\n\nprintln(7.kvadrat)\nprintln(8.juftmi)",
            "output": "Scala 3 j...\nsalom\n49\ntrue"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Extension qanday ishlaydi?",
            "html": "Kompilyator <code>\"salom\".qisqa(3)</code> ni <code>qisqa(\"salom\", 3)</code> kabi statik chaqiruvga aylantiradi. Hech qanday runtime o'zgarishi yo'q: metod String sinfiga haqiqatan qo'shilmaydi, lekin kodda xuddi shunday ko'rinadi. Extension ko'rinishi qayerda bo'lsa, o'sha scope'da ishlaydi."
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>extension (s: String)</code>",
                "String uchun metod qo'shish"
              ],
              [
                "<code>extension (n: Int)</code>",
                "Int uchun metod qo'shish"
              ],
              [
                "<code>extension [A](xs: List[A])</code>",
                "Generik kolleksiya uchun"
              ],
              [
                "<code>this.qisqa</code>",
                "Extension ichida asl qiymatga murojaat"
              ]
            ]
          },
          {
            "type": "code",
            "title": "generik-extension.scala",
            "code": "extension [A](xs: List[A])\n  def ikkinchi: Option[A] = xs.drop(1).headOption\n  def ozgartirib(f: A => A): List[A] = xs.map(f)\n\nprintln(List(10, 20, 30).ikkinchi)\nprintln(List(1, 2, 3).ozgartirib(_ * 10))\nprintln(List(\"a\", \"b\").ikkinchi)",
            "output": "Some(20)\nList(10, 20, 30)\nSome(b)"
          },
          {
            "type": "ul",
            "items": [
              "Extension nomi mavjud metod bilan to'qnashsa, class metod ustuvor bo'ladi.",
              "Bir nechta extensionni bitta faylda guruhlash mumkin.",
              "Katta utility to'plamini object ichida saqlab, keyin import qiling.",
              "Extension faqat sintaksis qulaylik; murakkab mantiqni alohida funksiyada saqlang."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Extension metod aslida qanday bajariladi?",
            "options": [
              "Runtime'da classga qo'shiladi",
              "Faqat interpretatsiya qilinadi",
              "Statik funksiya chaqiruviga aylanadi",
              "Boshqa tilga o'giriladi"
            ],
            "answer": 2,
            "explain": "Kompilyator extension chaqiruvini oddiy statik metod chaqiruviga aylantiradi."
          },
          {
            "q": "List uchun generik extension e'lon qilishda qaysi shakl to'g'ri?",
            "options": [
              "extension (xs: List)",
              "extension (A: List)",
              "extension List[A](xs)",
              "extension [A](xs: List[A])"
            ],
            "answer": 3,
            "explain": "Tip parametri kvadrat qavsda, parametr esa List[A] tipida yoziladi."
          },
          {
            "q": "Extension bilan bir xil nomdagi class metodi to'qnashsa nima bo'ladi?",
            "options": [
              "Kompilyatsiya xatosi doim",
              "Extension ustuvor",
              "Ikkalasi birga ishlaydi",
              "Class metodi ustuvor"
            ],
            "answer": 3,
            "explain": "Mavjud a'zo metod extensiondan ustun turadi."
          }
        ]
      },
      {
        "id": 33,
        "title": "Type classes: given bilan umumiy xatti-harakat",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Type class — ma'lum tip uchun xatti-harakatni alohida e'lon qilish usuli. U uch qismdan iborat: <b>trait</b> (interfeys), <b>given</b> nusxalar va <b>using</b> parametr bilan yozilgan umumiy funksiya. Bu yondashuv classni o'zgartirmasdan yangi imkoniyat qo'shishga imkon beradi."
          },
          {
            "type": "code",
            "title": "kodlash.scala",
            "code": "trait Kodlash[A]:\n  def kodla(qiymat: A): String\n\ngiven Kodlash[Int] with\n  def kodla(qiymat: Int): String = qiymat.toString\n\ngiven Kodlash[String] with\n  def kodla(qiymat: String): String = \"\\\"\" + qiymat + \"\\\"\"\n\ndef json[A](qiymat: A)(using k: Kodlash[A]): String = k.kodla(qiymat)\n\nprintln(json(42))\nprintln(json(\"scala\"))",
            "output": "42\n\"scala\""
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Nega classga metod qo'shmaymiz?",
            "html": "Int va String — bizniki bo'lmagan tiplar. Ularning classini o'zgartira olmaymiz. Type class xatti-harakatni tashqarida e'lon qiladi va kerak bo'lganda yangi tip uchun qo'shadi. Bu \"ad-hoc polimorfizm\" deyiladi."
          },
          {
            "type": "table",
            "head": [
              "Qism",
              "Misol",
              "Rol"
            ],
            "rows": [
              [
                "Trait",
                "<code>Kodlash[A]</code>",
                "Xatti-harakat shartnomasi"
              ],
              [
                "Given",
                "<code>given Kodlash[Int]</code>",
                "Aniq tip uchun implementatsiya"
              ],
              [
                "Using",
                "<code>(using k: Kodlash[A])</code>",
                "Implementatsiyani qabul qilish"
              ],
              [
                "Yordamchi",
                "<code>Kodlash.apply</code>",
                "Given ni qulay olish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "royxat-kodlash.scala (davomi)",
            "code": "given [A](using k: Kodlash[A]): Kodlash[List[A]] with\n  def kodla(qiymat: List[A]): String =\n    qiymat.map(k.kodla).mkString(\"[\", \",\", \"]\")\n\nprintln(json(List(1, 2, 3)))\nprintln(json(List(\"a\", \"b\")))\nprintln(json(List(List(1), List(2))))",
            "output": "[1,2,3]\n[\"a\",\"b\"]\n[[1],[2]]"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Rekursiv given",
            "html": "List uchun given o'zi <code>Kodlash[A]</code> ni talab qiladi. Shu tufayli <code>List[Int]</code> uchun ishlaydi, <code>List[List[Int]]</code> uchun ham: given zanjiri rekursiv ravishda yig'iladi. Mos given topilmasa, kompilyator aniq xato beradi."
          }
        ],
        "quiz": [
          {
            "q": "Type class yondashuvining uch asosiy qismi qaysilar?",
            "options": [
              "class, object, trait",
              "trait, given, using",
              "val, var, def",
              "map, filter, fold"
            ],
            "answer": 1,
            "explain": "Trait shartnoma, given implementatsiya, using esa uni qabul qiluvchi parametr."
          },
          {
            "q": "given [A](using k: Kodlash[A]): Kodlash[List[A]] nimani ta'minlaydi?",
            "options": [
              "Faqat Int ro'yxatini",
              "Ro'yxat uchun rekursiv kodlash",
              "Stringni o'chiradi",
              "Yangi List yaratadi"
            ],
            "answer": 1,
            "explain": "Element uchun Kodlash bo'lsa, ro'yxat uchun ham Kodlash yasaladi."
          },
          {
            "q": "Type class'ning asosiy afzalligi nimada?",
            "options": [
              "O'zgaruvchilarni kamaytirish",
              "Kodni har doim tezlashtirish",
              "Faqat JVM'siz ishlash",
              "Classni o'zgartirmasdan yangi xatti-harakat qo'shish"
            ],
            "answer": 3,
            "explain": "Mavjud tiplarga tashqi implementatsiya orqali polimorfizm qo'shiladi."
          }
        ]
      },
      {
        "id": 34,
        "title": "Ordering va context bound bilan saralash",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "<code>sorted</code>, <code>max</code>, <code>min</code> kabi metodlar qaysi qiymat kichik ekanini bilishi kerak. Scala'da bu vazifani <code>Ordering[A]</code> bajaradi. U ham type class: standart tiplar uchun given tayyor, o'z modelingiz uchun esa o'zingiz e'lon qilasiz."
          },
          {
            "type": "code",
            "title": "ordering.scala",
            "code": "def engKatta[A](xs: List[A])(using ord: Ordering[A]): A = xs.max\n\nprintln(engKatta(List(3, 1, 4)))\nprintln(engKatta(List(\"olma\", \"nok\")))\n\ndef tartibla[A: Ordering](xs: List[A]): List[A] = xs.sorted\n\nprintln(tartibla(List(\"Bek\", \"Aziza\", \"Dilnoza\")))\nprintln(tartibla(List(9, 2, 7, 4)))",
            "output": "4\nolma\nList(Aziza, Bek, Dilnoza)\nList(2, 4, 7, 9)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Context bound nima?",
            "html": "<code>[A: Ordering]</code> — <code>(using Ordering[A])</code> ning qisqa yozuvi. U \"A tipi uchun Ordering mavjud bo'lsin\" degan talabni bildiradi. Metod ichida <code>summon[Ordering[A]]</code> orqali qoidaga murojaat qilish mumkin."
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>Ordering[A]</code>",
                "Taqqoslash qoidasi"
              ],
              [
                "<code>[A: Ordering]</code>",
                "Context bound"
              ],
              [
                "<code>Ordering.by(_.maydon)</code>",
                "Maydon bo'yicha tartib"
              ],
              [
                "<code>sorted</code>",
                "Ordering yordamida saralash"
              ],
              [
                "<code>sortBy(f)</code>",
                "Kalit funksiyasi bo'yicha saralash"
              ]
            ]
          },
          {
            "type": "code",
            "title": "talaba-ordering.scala",
            "code": "case class Talaba(ism: String, ball: Int)\n\ngiven Ordering[Talaba] with\n  def compare(a: Talaba, b: Talaba): Int = a.ball.compare(b.ball)\n\nval talabalar = List(\n  Talaba(\"Aziza\", 92),\n  Talaba(\"Bek\", 78),\n  Talaba(\"Dilnoza\", 88)\n)\n\nprintln(talabalar.sorted.map(_.ism))\nprintln(talabalar.max)\nprintln(talabalar.sortBy(_.ism).map(_.ism))",
            "output": "List(Bek, Dilnoza, Aziza)\nTalaba(Aziza,92)\nList(Aziza, Bek, Dilnoza)"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Ordering izchil bo'lsin",
            "html": "Taqqoslash qoidasi matematik tartib bo'lishi kerak: <code>a == b</code> da 0, simmetrik va tranzitiv. Aks holda <code>sorted</code> natijasi kutilmagan bo'ladi. Teng qiymatlar uchun qo'shimcha maydon bilan tartibni aniqlashtirish mumkin."
          }
        ],
        "quiz": [
          {
            "q": "[A: Ordering] context bound nimaga aylanadi?",
            "options": [
              "Yangi classga",
              "Ordering[A] merosiga",
              "(using Ordering[A]) parametriga",
              "Faqat izohga"
            ],
            "answer": 2,
            "explain": "Context bound kompilyator tomonidan using parametr sifatida qo'shiladi."
          },
          {
            "q": "List(3, 1, 2).sorted ishlashi uchun nima mavjud bo'lishi kerak?",
            "options": [
              "Faqat Int",
              "Ordering[Int]",
              "Kodlash[Int]",
              "Option[Int]"
            ],
            "answer": 1,
            "explain": "sorted elementlar tipi uchun Ordering givenini talab qiladi."
          },
          {
            "q": "Ordering.by(_.ball) qanday qoida yasaydi?",
            "options": [
              "Ism bo'yicha tartib",
              "Tasodifiy tartib",
              "Ball maydoni bo'yicha tartib",
              "Faqat tenglik"
            ],
            "answer": 2,
            "explain": "Ordering.by kalit funksiyasidan taqqoslash qoidasini yasaydi."
          }
        ]
      },
      {
        "id": 35,
        "title": "Future kompozitsiyasi: map, flatMap va sequence",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "<code>Future</code> bilan bitta asinxron hisobni emas, ularning <b>zanjirini</b> ko'pincha yozamiz: ma'lumotni yuklash, keyin uni qayta ishlash, so'ng saqlash. <code>map</code> natijani o'zgartiradi, <code>flatMap</code> esa natijaga bog'liq keyingi Future'ni ulaydi. <code>for</code> bu zanjirni o'qishli qiladi."
          },
          {
            "type": "code",
            "title": "future-zanjir.scala",
            "code": "import scala.concurrent.{Future, Await}\nimport scala.concurrent.duration.*\nimport scala.concurrent.ExecutionContext.Implicits.global\n\ndef kechik(n: Int): Future[Int] = Future {\n  Thread.sleep(50)\n  n * 2\n}\n\nval natija = for\n  a <- kechik(5)\n  b <- kechik(a)\nyield a + b\n\nprintln(Await.result(natija, 2.seconds))",
            "output": "30"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Kechikish haqiqiy hayotda",
            "html": "Bu misolda <code>Thread.sleep</code> faqat kechikishni ko'rsatish uchun. Haqiqiy kodda bu o'rnida tarmoq so'rovi yoki fayl o'qish bo'ladi. Muhimi: <code>for</code> ichidagi ikkinchi hisob birinchisining natijasiga bog'liq, shuning uchun ular ketma-ket bajariladi."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Natija",
              "Qachon"
            ],
            "rows": [
              [
                "<code>map(f)</code>",
                "<code>Future[B]</code>",
                "Natijani oddiy o'zgartirish"
              ],
              [
                "<code>flatMap(f)</code>",
                "<code>Future[B]</code>",
                "Keyingi Future'ga ulash"
              ],
              [
                "<code>sequence(xs)</code>",
                "<code>Future[List[A]]</code>",
                "Ro'yxatdagi barcha Future'lar"
              ],
              [
                "<code>traverse(xs)(f)</code>",
                "<code>Future[List[B]]</code>",
                "Har bir elementni Future qilish"
              ],
              [
                "<code>zip(that)</code>",
                "<code>Future[(A, B)]</code>",
                "Ikki natijani juftlash"
              ]
            ]
          },
          {
            "type": "code",
            "title": "sequence.scala (davomi)",
            "code": "val juftlar = List(Future(1), Future(2), Future(3))\nprintln(Await.result(Future.sequence(juftlar), 1.second))\n\nval natijalar = Future.traverse(List(1, 2, 3))(n => Future(n * 10))\nprintln(Await.result(natijalar, 1.second))\n\nval xato = Future(10 / 0).recover { case _: ArithmeticException => 0 }\nprintln(Await.result(xato, 1.second))",
            "output": "List(1, 2, 3)\nList(10, 20, 30)\n0"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Await faqat test va o'rganish uchun",
            "html": "<code>Await.result</code> joriy thread'ni to'xtatadi va asinxronlikning foydasini yo'qotadi. Server yoki UI kodida natijani <code>map</code>, <code>flatMap</code>, <code>onComplete</code> yoki framework'ning asinxron API'si orqali bering. Await'ni faqat test, skript va kichik demo uchun qoldiring."
          }
        ],
        "quiz": [
          {
            "q": "Future[Int] ustidagi map(f: Int => String) qanday tip qaytaradi?",
            "options": [
              "Option[String]",
              "String",
              "Future[String]",
              "Future[Int]"
            ],
            "answer": 2,
            "explain": "map natijani Future ichida o'zgartiradi va Future[String] beradi."
          },
          {
            "q": "List[Future[Int]] ni bitta Future[List[Int]] ga jamlash uchun qaysi metod ishlatiladi?",
            "options": [
              "Future.map",
              "Future.zip",
              "Future.recover",
              "Future.sequence"
            ],
            "answer": 3,
            "explain": "sequence Future'lar ro'yxatini bitta Future ichidagi ro'yxatga yig'adi."
          },
          {
            "q": "Future'lar orasidagi bog'liq ketma-ket qadamlar uchun flatMap nima uchun kerak?",
            "options": [
              "Natijani bloklash uchun",
              "Keyingi Future oldingi natijaga bog'liq bo'lganda",
              "Faqat xatoni yashirish uchun",
              "Thread yaratish uchun"
            ],
            "answer": 1,
            "explain": "flatMap oldingi natijadan yangi Future yasab, ularni ketma-ket ulaydi."
          }
        ]
      },
      {
        "id": 36,
        "title": "Future xatolari: recover, fallbackTo va traverse",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Asinxron hisob ham xato berishi mumkin: tarmoq uzildi, server 500 qaytardi, ma'lumot topilmadi. Future ichidagi istisno <b>failed Future</b> ga aylanadi. Uni <code>recover</code>, <code>recoverWith</code> yoki <code>fallbackTo</code> bilan boshqarish mumkin. Muhimi — xatoni jimgina yutib yubormaslik."
          },
          {
            "type": "code",
            "title": "future-xato.scala",
            "code": "import scala.concurrent.{Future, Await}\nimport scala.concurrent.duration.*\nimport scala.concurrent.ExecutionContext.Implicits.global\n\ndef yukla(id: Int): Future[String] = Future {\n  if id == 2 then throw new RuntimeException(s\"id=$id topilmadi\")\n  else s\"yozuv-$id\"\n}\n\nval xato = Future.traverse(List(1, 2, 3))(yukla)\n  .recover { case e => \"xato: \" + e.getMessage }\n\nprintln(Await.result(xato, 2.seconds))\n\nval zaxira = Future[String](throw new RuntimeException(\"tarmoq\"))\n  .fallbackTo(Future.successful(\"keshdan\"))\nprintln(Await.result(zaxira, 1.second))",
            "output": "xato: id=2 topilmadi\nkeshdan"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Fail-fast xatti-harakat",
            "html": "<code>Future.traverse</code> ro'yxatdagi birinchi xatoda to'xtaydi va failed Future qaytaradi. Qolgan ishlar allaqachon boshlangan bo'lishi mumkin, lekin natija birlashtirilmaydi. Har bir elementning xatosini alohida saqlash kerak bo'lsa, avval har birini <code>recover</code> qilib, keyin <code>sequence</code> qiling."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>recover</code>",
                "Xatoni oddiy qiymatga almashtiradi"
              ],
              [
                "<code>recoverWith</code>",
                "Xatoni boshqa Future bilan almashtiradi"
              ],
              [
                "<code>fallbackTo</code>",
                "Asosiy Future yiqilsa, zaxira Future"
              ],
              [
                "<code>transform</code>",
                "Muvaffaqiyat va xatoni birga qayta ishlaydi"
              ],
              [
                "<code>failed</code>",
                "Faqat xatoni ko'rish uchun Future"
              ]
            ]
          },
          {
            "type": "code",
            "title": "parallel.scala (davomi)",
            "code": "val birinchi = Future { Thread.sleep(30); 10 }\nval ikkinchi = Future { Thread.sleep(10); 20 }\n\nval yigindi = for\n  a <- birinchi\n  b <- ikkinchi\nyield a + b\n\nprintln(Await.result(yigindi, 1.second))\n\nval mustaqil = Await.result(\n  Future.sequence(List(Future(1), Future(2), Future(3))),\n  1.second\n)\nprintln(mustaqil.sum)",
            "output": "30\n6"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Xatoni log qiling",
            "html": "Server kodida <code>recover</code> ichida xatoni log qilish yoki monitoring tizimiga yuborish kerak. Faqat standart qiymat qaytarish muammoni yashirishi mumkin. <code>recoverWith</code> esa boshqa manbadan qayta urinish uchun mos."
          }
        ],
        "quiz": [
          {
            "q": "Future.traverse ichida bitta hisob xato bersa, umumiy natija qanday bo'ladi?",
            "options": [
              "Failed Future qaytadi",
              "Xato tashlab yuboriladi",
              "Xato element tashlanadi",
              "List bo'sh bo'ladi"
            ],
            "answer": 0,
            "explain": "traverse fail-fast ishlaydi va birinchi xato bilan failed Future qaytaradi."
          },
          {
            "q": "recover metodi muvaffaqiyatli Future uchun nimani o'zgartiradi?",
            "options": [
              "Natijani 0 qiladi",
              "Xato tashlaydi",
              "Future'ni bekor qiladi",
              "Hech narsani, u faqat xato holatida ishlaydi"
            ],
            "answer": 3,
            "explain": "recover faqat failed Future holatida qo'llanadi."
          },
          {
            "q": "fallbackTo qachon ishga tushadi?",
            "options": [
              "Asosiy Future muvaffaqiyatli bo'lganda",
              "Faqat timeoutda",
              "Asosiy Future yiqilganda",
              "Har doim"
            ],
            "answer": 2,
            "explain": "fallbackTo asosiy Future failed bo'lsa, zaxira Future natijasini oladi."
          }
        ]
      },
      {
        "id": 37,
        "title": "Testlash asoslari: munit va chegaraviy holatlar",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Test — kodning kutilgan xatti-harakatini avtomatik tekshirish. Yaxshi test kichik, mustaqil va tez bo'ladi. Scala ekotizimida <code>munit</code> eng ommabop yengil frameworklardan biri. Avval sof funksiyalar uchun oddiy tekshiruvlarni, keyin munit yozuvini ko'rib chiqamiz."
          },
          {
            "type": "code",
            "title": "hisob.scala",
            "code": "def qosh(a: Int, b: Int): Int = a + b\n\ndef bol(a: Int, b: Int): Either[String, Int] =\n  if b == 0 then Left(\"nolga bo'lish mumkin emas\") else Right(a / b)\n\ndef tekshir(nom: String)(shart: => Boolean): Unit =\n  println((if shart then \"OK   \" else \"XATO \") + nom)\n\ntekshir(\"qo'shish\")(qosh(2, 3) == 5)\ntekshir(\"bo'lish\")(bol(10, 2) == Right(5))\ntekshir(\"nolga bo'lish\")(bol(10, 0) == Left(\"nolga bo'lish mumkin emas\"))",
            "output": "OK   qo'shish\nOK   bo'lish\nOK   nolga bo'lish"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "munit bilan bir xil g'oya",
            "html": "<code>class HisobSuite extends munit.FunSuite</code> ichida <code>test(\"qo'shish\") { assertEquals(qosh(2, 3), 5) }</code> yoziladi. <code>assertEquals</code> birinchi argument sifatida olingan natijani, ikkinchi argument sifatida kutilgan qiymatni oladi. Testlar <code>sbt test</code> yoki <code>scala-cli test .</code> bilan ishga tushadi."
          },
          {
            "type": "table",
            "head": [
              "Tekshiruv",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>assertEquals(a, b)</code>",
                "Ikki qiymat tengligi"
              ],
              [
                "<code>assert(condition)</code>",
                "Shart rostligi"
              ],
              [
                "<code>intercept[Exception]</code>",
                "Istisno kutilganini tekshirish"
              ],
              [
                "<code>assertNoDiff(a, b)</code>",
                "Matnlarni aniq taqqoslash"
              ]
            ]
          },
          {
            "type": "code",
            "title": "holatlar.scala",
            "code": "def qosh(a: Int, b: Int): Int = a + b\n\nval holatlar = List(\n  (2, 3, 5),\n  (-1, 1, 0),\n  (0, 0, 0),\n  (10, -4, 6)\n)\n\nval xatolar = holatlar.filter { case (a, b, kutilgan) => qosh(a, b) != kutilgan }\nprintln(xatolar)\nprintln(if xatolar.isEmpty then \"barcha holatlar o'tdi\" else \"xato topildi\")",
            "output": "List()\nbarcha holatlar o'tdi"
          },
          {
            "type": "ul",
            "items": [
              "Har bir test bitta xatti-harakatni tekshirsin va nomi nima tekshirilayotganini aytsin.",
              "Chegaraviy holatlar: bo'sh ro'yxat, nol, manfiy son, juda katta kirish.",
              "Xato holatlari ham test qilinishi kerak, faqat muvaffaqiyatli yo'l emas.",
              "Testlar bir-biriga bog'liq bo'lmasin: tartib o'zgarsa ham natija bir xil bo'lsin."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Yaxshi unit test qanday bo'lishi kerak?",
            "options": [
              "Katta va ko'p qatlamli",
              "Tashqi tarmoqqa bog'liq",
              "Kichik, tez va mustaqil",
              "Faqat qo'lda bajariladigan"
            ],
            "answer": 2,
            "explain": "Kichik, tez va mustaqil testlar ishonchli va oson saqlanadi."
          },
          {
            "q": "munit'dagi assertEquals(olingan, kutilgan) da birinchi argument nima?",
            "options": [
              "Kutilgan qiymat",
              "Xato matni",
              "Test nomi",
              "Haqiqiy olingan natija"
            ],
            "answer": 3,
            "explain": "Birinchi argument tekshirilayotgan haqiqiy natija, ikkinchisi kutilgan qiymat."
          },
          {
            "q": "Nega nolga bo'lish kabi holat alohida test qilinadi?",
            "options": [
              "Kodni sekinlashtirish uchun",
              "Bu chegaraviy xato holati bo'lgani uchun",
              "Faqat chiroyli ko'rinishi uchun",
              "Testlar sonini ko'paytirish uchun"
            ],
            "answer": 1,
            "explain": "Chegaraviy va xato holatlari ko'pincha eng muhim xatolarni ochib beradi."
          }
        ]
      },
      {
        "id": 38,
        "title": "sbt: loyiha tuzilishi, modullar va bog'liqliklar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<b>sbt</b> — Scala loyihalarining standart qurish vositasi. U kompilyatsiya, test, paketlash va kutubxona bog'liqliklarini boshqaradi. <code>build.sbt</code> fayli oddiy matn emas, Scala DSL: unda <code>val</code>, funksiya va ifodalardan foydalanish mumkin. Katta loyihalar bir necha modulga bo'linadi."
          },
          {
            "type": "code",
            "title": "build-namuna.scala",
            "code": "case class Modul(nom: String, bogliqliklar: List[String])\n\nval core = Modul(\"core\", Nil)\nval app = Modul(\"app\", List(\"core\"))\n\ndef sbtQator(m: Modul): String =\n  val deps =\n    if m.bogliqliklar.isEmpty then \"\"\n    else \".dependsOn(\" + m.bogliqliklar.mkString(\", \") + \")\"\n  \"lazy val \" + m.nom + \" = project\" + deps\n\nprintln(\"ThisBuild / scalaVersion := \\\"3.3.4\\\"\")\nList(core, app).foreach(m => println(sbtQator(m)))",
            "output": "ThisBuild / scalaVersion := \"3.3.4\"\nlazy val core = project\nlazy val app = project.dependsOn(core)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Nega modullarga bo'lish?",
            "html": "<code>core</code> moduli biznes mantiqni, <code>app</code> esa ishga tushirish nuqtasini saqlashi mumkin. <code>app.dependsOn(core)</code> tufayli app core'dagi classlardan foydalanadi, aksi esa mumkin emas. Bu bog'liqliklar yo'nalishini tartibga soladi va kompilyatsiyani tezlashtiradi."
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>sbt compile</code>",
                "Kodni kompilyatsiya qiladi"
              ],
              [
                "<code>sbt test</code>",
                "Testlarni bajaradi"
              ],
              [
                "<code>sbt run</code>",
                "Asosiy dasturni ishga tushiradi"
              ],
              [
                "<code>sbt projects</code>",
                "Modullar ro'yxatini ko'rsatadi"
              ],
              [
                "<code>sbt app/run</code>",
                "Aniq modulni ishga tushiradi"
              ],
              [
                "<code>sbt reload</code>",
                "build.sbt o'zgarishlarini qayta yuklaydi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "bogliqlik.scala",
            "code": "case class Bogliqlik(guruh: String, artefakt: String, versiya: String, scope: String)\n\nval munit = Bogliqlik(\"org.scalameta\", \"munit\", \"1.0.2\", \"Test\")\n\ndef qator(b: Bogliqlik): String =\n  \"libraryDependencies += \\\"\" + b.guruh + \"\\\" %% \\\"\" +\n    b.artefakt + \"\\\" % \\\"\" + b.versiya + \"\\\" % \" + b.scope\n\nprintln(qator(munit))\nprintln(\"src/main/scala\")\nprintln(\"src/test/scala\")",
            "output": "libraryDependencies += \"org.scalameta\" %% \"munit\" % \"1.0.2\" % Test\nsrc/main/scala\nsrc/test/scala"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "%% va % farqi",
            "html": "sbt'da <code>%</code> artefakt nomini o'zgartirmaydi, <code>%%</code> esa Scala versiyasiga mos suffix qo'shadi: <code>munit_3</code>. Shuning uchun Scala kutubxonalari uchun deyarli har doim <code>%%</code> ishlatiladi. <code>% Test</code> bog'liqlikni faqat test scope'iga qo'shadi."
          }
        ],
        "quiz": [
          {
            "q": "build.sbt fayli qanday til sintaksisidan foydalanadi?",
            "options": [
              "XML",
              "Scala DSL",
              "JSON",
              "YAML"
            ],
            "answer": 1,
            "explain": "build.sbt — Scala DSL, unda val, funksiya va ifodalarni yozish mumkin."
          },
          {
            "q": "lazy val app = project.dependsOn(core) nimani bildiradi?",
            "options": [
              "app core ga bog'liq",
              "core app ga bog'liq",
              "Ikkalasi mustaqil",
              "app core'ni o'chiradi"
            ],
            "answer": 0,
            "explain": "app moduli core modulidagi kodga bog'lanadi."
          },
          {
            "q": "sbt'da %% operatori qo'shimcha nima qiladi?",
            "options": [
              "Versiyani oshiradi",
              "Artefakt nomiga Scala versiyasi suffixini qo'shadi",
              "Testlarni o'tkazib yuboradi",
              "Kodni formatlaydi"
            ],
            "answer": 1,
            "explain": "%% kutubxona nomiga _3 kabi Scala binary versiyasini qo'shadi."
          }
        ]
      },
      {
        "id": 39,
        "title": "JSON bilan ishlash: upickle va derives",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "API va fayllar bilan ishlashda ma'lumotni JSON ga aylantirish (serialization) va qaytarish (deserialization) kerak bo'ladi. Qo'lda satr yasash xavfli: qo'shtirnoq, escape va maydon nomlari xato beradi. <b>upickle</b> case class asosida xavfsiz kodek yaratadi."
          },
          {
            "type": "code",
            "title": "json.scala",
            "code": "import upickle.default.*\n\ncase class Talaba(ism: String, ball: Int) derives ReadWriter\n\nval t = Talaba(\"Aziza\", 92)\nval json = write(t)\nprintln(json)\nprintln(read[Talaba](json))\nprintln(write(List(t)))",
            "output": "{\"ism\":\"Aziza\",\"ball\":92}\nTalaba(Aziza,92)\n[{\"ism\":\"Aziza\",\"ball\":92}]"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "derives ReadWriter nima qiladi?",
            "html": "<code>derives ReadWriter</code> kompilyatorga case class maydonlari asosida o'qish va yozish kodekini yaratishni buyuradi. Maydon nomlari JSON kalitlari bo'ladi, tiplar esa tekshiriladi. Yangi maydon qo'shsangiz, kodek avtomatik yangilanadi."
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>write(qiymat)</code>",
                "Scala qiymatini JSON matniga aylantiradi"
              ],
              [
                "<code>read[T](matn)</code>",
                "JSON dan T tipini o'qiydi"
              ],
              [
                "<code>write(qiymat, indent = 2)</code>",
                "Chiroyli formatlangan JSON"
              ],
              [
                "<code>readwriter[T]</code>",
                "Kodekni qo'lda olish"
              ],
              [
                "<code>derives ReadWriter</code>",
                "Avtomatik kodek"
              ]
            ]
          },
          {
            "type": "code",
            "title": "json-oqish.scala",
            "code": "import upickle.default.*\n\ncase class Talaba(ism: String, ball: Int) derives ReadWriter\n\nval t = Talaba(\"Aziza\", 92)\nval matn = \"\"\"{\"ism\":\"Bek\",\"ball\":78}\"\"\"\nprintln(read[Talaba](matn).ball)\nprintln(read[List[Talaba]](\"\"\"[{\"ism\":\"Aziza\",\"ball\":92}]\"\"\").map(_.ism))\nprintln(write(t, indent = 2))",
            "output": "78\nList(Aziza)\n{\n  \"ism\": \"Aziza\",\n  \"ball\": 92\n}"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Noto'g'ri JSON — istisno",
            "html": "<code>read[T]</code> noto'g'ri yoki yetishmayotgan maydon uchun istisno tashlaydi. Ishonchsiz kirishni <code>Try(read[T](matn))</code> yoki <code>Either</code> bilan o'rang. Ixtiyoriy maydon uchun <code>Option[T]</code> ishlatsangiz, upickle yo'q maydonni <code>None</code> qilib o'qiydi."
          }
        ],
        "quiz": [
          {
            "q": "case class'dagi derives ReadWriter nimani yaratadi?",
            "options": [
              "Yangi JSON fayl",
              "Faqat toString",
              "O'qish-yozish kodekini",
              "Ma'lumotlar bazasi jadvali"
            ],
            "answer": 2,
            "explain": "ReadWriter case class uchun JSON o'qish va yozish qobiliyatini beradi."
          },
          {
            "q": "write(qiymat, indent = 2) qanday natija beradi?",
            "options": [
              "Bir qatorli JSON",
              "Faqat maydon nomlari",
              "XML",
              "Chiroyli formatlangan ko'p qatorli JSON"
            ],
            "answer": 3,
            "explain": "indent parametri JSON ni chekinish bilan chiroyli formatlaydi."
          },
          {
            "q": "Ishonchsiz JSON kirishini o'qishda eng xavfsiz yondashuv qaysi?",
            "options": [
              "read natijasiga ishonish",
              "JSON ni qo'lda parse qilish",
              "Natijani Try yoki Either bilan o'rash",
              "Maydonlarni o'chirish"
            ],
            "answer": 2,
            "explain": "Try yoki Either parsing xatosini boshqariladigan qiymatga aylantiradi."
          }
        ]
      },
      {
        "id": 40,
        "title": "Akka aktyorlari: parallel holatni xavfsiz boshqarish",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<b>Akka</b> — JVM uchun actor model kutubxonasi. Aktyor — o'z holati va pochta qutisi (mailbox) bo'lgan yengil birlik. Unga xabar yuboriladi, u xabarlarni <b>ketma-ket</b> qayta ishlaydi. Shu tufayli umumiy o'zgaruvchan holat va lock'larsiz parallel tizim yasash mumkin."
          },
          {
            "type": "code",
            "title": "hisobchi.scala",
            "code": "import akka.actor.{Actor, ActorSystem, Props}\nimport com.typesafe.config.ConfigFactory\n\nclass Hisobchi extends Actor:\n  private var jami = 0\n  def receive =\n    case n: Int =>\n      jami += n\n      println(s\"jami: $jami\")\n\nval config = ConfigFactory.parseString(\"akka.loglevel = OFF\")\nval system = ActorSystem(\"hisob\", config)\nval actor = system.actorOf(Props[Hisobchi](), \"hisobchi\")\nactor ! 10\nactor ! 20\nThread.sleep(300)\nsystem.terminate()",
            "output": "jami: 10\njami: 30"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Nega lock kerak emas?",
            "html": "Aktyor holatiga faqat o'zining <code>receive</code> metodi tegadi, xabarlar esa birma-bir qayta ishlanadi. Tashqi kod holatni to'g'ridan-to'g'ri o'zgartira olmaydi — faqat xabar yuboradi. Bu \"holatni ulashish o'rniga xabar almashish\" tamoyili."
          },
          {
            "type": "table",
            "head": [
              "Tushuncha",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>ActorSystem</code>",
                "Aktyorlar muhiti va thread pool"
              ],
              [
                "<code>Props[Hisobchi]()</code>",
                "Aktyor yaratish retsepti"
              ],
              [
                "<code>ActorRef</code>",
                "Aktyorga xabar yuborish dastasi"
              ],
              [
                "<code>actor ! xabar</code>",
                "Tell: javob kutmay yuborish"
              ],
              [
                "<code>actor ? xabar</code>",
                "Ask: Future bilan javob olish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "ask.scala",
            "code": "import akka.actor.{Actor, ActorSystem, Props}\nimport akka.pattern.ask\nimport akka.util.Timeout\nimport com.typesafe.config.ConfigFactory\nimport scala.concurrent.Await\nimport scala.concurrent.duration.*\n\ncase class Qosh(n: Int)\ncase object Jami\n\nclass Hisobchi extends Actor:\n  private var jami = 0\n  def receive =\n    case Qosh(n) => jami += n\n    case Jami => sender() ! jami\n\ngiven Timeout = Timeout(2.seconds)\nval config = ConfigFactory.parseString(\"akka.loglevel = OFF\")\nval system = ActorSystem(\"hisob2\", config)\nval actor = system.actorOf(Props[Hisobchi](), \"hisobchi\")\nactor ! Qosh(10)\nactor ! Qosh(5)\nprintln(Await.result((actor ? Jami).mapTo[Int], 3.seconds))\nsystem.terminate()",
            "output": "15"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Akka va Pekko",
            "html": "Akka 2.6.x Apache 2.0 litsenziyasida, yangiroq 2.7+ versiyalari esa BSL shartlarida. Ochiq manba loyihalari uchun Apache Pekko — Akka'ning fork'i mos alternativa. O'rganish uchun API deyarli bir xil, shuning uchun actor tushunchalari bevosita ko'chadi."
          }
        ],
        "quiz": [
          {
            "q": "Aktyor o'z holatini qanday himoya qiladi?",
            "options": [
              "Lock bilan",
              "Holatni global qilib",
              "Har bir xabarga yangi thread ochib",
              "Xabarlarni ketma-ket qayta ishlab, holatni faqat o'zi o'zgartirib"
            ],
            "answer": 3,
            "explain": "Aktyor holati uning ichida qoladi, xabarlar esa navbat bilan bajariladi."
          },
          {
            "q": "actor ! xabar operatori qanday aloqa usuli?",
            "options": [
              "Tell — javob kutmay yuboradi",
              "Javobni bloklab kutadi",
              "Faqat sinxron chaqiruv",
              "Xabarni o'chiradi"
            ],
            "answer": 0,
            "explain": "! tell usuli xabarni yuboradi va darhol qaytadi."
          },
          {
            "q": "actor ? xabar ifodasi nima qaytaradi?",
            "options": [
              "Future javob",
              "Unit",
              "ActorRef",
              "Option"
            ],
            "answer": 0,
            "explain": "Ask naqshi javobni Future sifatida qaytaradi."
          }
        ]
      },
      {
        "id": 41,
        "title": "Cats'ga kirish: Functor, Applicative va Monad",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<b>Cats</b> — funksional dasturlash abstraksiyalarini taqdim etuvchi kutubxona. <code>Functor</code> \"ichidagi qiymatni o'zgartirish\" (<code>map</code>), <code>Applicative</code> mustaqil effektlarni birlashtirish, <code>Monad</code> esa ketma-ket bog'lash (<code>flatMap</code>) qobiliyatini ifodalaydi. Bular type class sifatida yozilgan."
          },
          {
            "type": "code",
            "title": "functor.scala",
            "code": "import cats.*\nimport cats.implicits.*\n\ncase class Quti[A](qiymat: A)\n\ngiven Functor[Quti] with\n  def map[A, B](fa: Quti[A])(f: A => B): Quti[B] = Quti(f(fa.qiymat))\n\nprintln(Quti(21).map(_ * 2))\nprintln(List(1, 2, 3).map(_ + 1))\nprintln(List(1, 2, 3).combineAll)",
            "output": "Quti(42)\nList(2, 3, 4)\n6"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "map qayerdan keldi?",
            "html": "<code>Quti</code> classida <code>map</code> metodi yo'q, lekin <code>Functor[Quti]</code> giveni bor. <code>cats.implicits.*</code> importi sintaksis qo'shib, <code>Quti(21).map(...)</code> yozish imkonini beradi. Bu — type class naqshining amaliy ko'rinishi."
          },
          {
            "type": "table",
            "head": [
              "Type class",
              "Asosiy amal",
              "Misol"
            ],
            "rows": [
              [
                "<code>Functor</code>",
                "<code>map</code>",
                "<code>Option(1).map(_ + 1)</code>"
              ],
              [
                "<code>Semigroup</code>",
                "<code>combine</code>",
                "<code>\"a\".combine(\"b\")</code>"
              ],
              [
                "<code>Applicative</code>",
                "<code>mapN</code>, <code>tupled</code>",
                "Ikki Option natijasini juftlash"
              ],
              [
                "<code>Monad</code>",
                "<code>flatMap</code>",
                "Bog'liq hisoblar zanjiri"
              ],
              [
                "<code>Traverse</code>",
                "<code>traverse</code>",
                "Ro'yxatni effekt ichiga ko'tarish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "applicative.scala",
            "code": "import cats.*\nimport cats.implicits.*\n\nval natija = (Option(2), Option(3)).mapN(_ * _)\nprintln(natija)\n\nprintln(List(1, 2, 3).traverse(n => Option(n * 10)))\n\nval xato: Either[String, Int] = Left(\"xato\")\nprintln(xato.leftMap(_.toUpperCase))",
            "output": "Some(6)\nSome(List(10, 20, 30))\nLeft(XATO)"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Cats o'rganish tartibi",
            "html": "Avval <code>map</code>/<code>flatMap</code> ni Option, List va Either da puxta o'zlashtiring. Keyin <code>Functor</code>, <code>Semigroup</code>, <code>Monad</code> qonunlarini o'rganing. Cats kodni \"sehrli\" qilmaydi: u umumiy abstraksiyalar orqali bir xil mantiqni turli konteynerlarga qo'llaydi."
          }
        ],
        "quiz": [
          {
            "q": "Functor type class qaysi amalni ta'minlaydi?",
            "options": [
              "flatMap",
              "map",
              "filter",
              "foldLeft"
            ],
            "answer": 1,
            "explain": "Functor ichidagi qiymatni map orqali o'zgartiradi."
          },
          {
            "q": "List(1, 2, 3).traverse(n => Option(n * 10)) qanday natija beradi?",
            "options": [
              "List(Some(10), ...)",
              "Option(30)",
              "Some(List(10, 20, 30))",
              "None"
            ],
            "answer": 2,
            "explain": "traverse effektlarni yig'ib, bitta Option ichida ro'yxat qaytaradi."
          },
          {
            "q": "Cats'dagi type class yondashuvining mohiyati nimada?",
            "options": [
              "Umumiy abstraksiya orqali turli konteynerlarga bir xil mantiq",
              "Faqat sintaksisni qisqartirish",
              "JVM'ni almashtirish",
              "O'zgaruvchanlikni oshirish"
            ],
            "answer": 0,
            "explain": "Type class'lar map, flatMap kabi amallarni umumlashtiradi."
          }
        ]
      },
      {
        "id": 42,
        "title": "Spark'ga kirish: DataFrame va katta ma'lumotlar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<b>Apache Spark</b> — katta hajmdagi ma'lumotlarni klasterda qayta ishlash uchun tizim. Uning yuqori darajadagi API'si — <b>DataFrame</b>: jadval ko'rinishidagi ma'lumot ustida <code>select</code>, <code>filter</code>, <code>groupBy</code> kabi amallar. Transformatsiyalar <b>lazy</b>: faqat action chaqirilganda hisoblanadi."
          },
          {
            "type": "code",
            "title": "sotuvlar.scala",
            "code": "import spark.implicits._\nimport org.apache.spark.sql.functions._\n\nval sotuvlar = Seq(\n  (\"olma\", 3, 1200),\n  (\"nok\", 2, 1500),\n  (\"olma\", 5, 1200)\n).toDF(\"mahsulot\", \"dona\", \"narx\")\n\nval jami = sotuvlar\n  .withColumn(\"summa\", col(\"dona\") * col(\"narx\"))\n  .groupBy(\"mahsulot\")\n  .agg(sum(\"summa\").as(\"jami\"))\n  .orderBy(desc(\"jami\"))\n\njami.collect().foreach(r => println(r.getString(0) + \": \" + r.getLong(1)))",
            "output": "olma: 9600\nnok: 3000"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Lazy hisoblash",
            "html": "<code>withColumn</code>, <code>groupBy</code>, <code>orderBy</code> faqat reja yasaydi. <code>collect</code>, <code>show</code>, <code>count</code> kabi action'lar rejani ishga tushiradi. Shu tufayli Spark butun zanjirni optimallashtirib, keraksiz ma'lumotni o'qimasligi mumkin."
          },
          {
            "type": "table",
            "head": [
              "Amal",
              "Turi",
              "Natija"
            ],
            "rows": [
              [
                "<code>select</code>, <code>filter</code>",
                "Transformatsiya",
                "Yangi DataFrame"
              ],
              [
                "<code>groupBy</code>, <code>agg</code>",
                "Transformatsiya",
                "Guruhlangan natija"
              ],
              [
                "<code>show</code>, <code>count</code>",
                "Action",
                "Konsol yoki son"
              ],
              [
                "<code>collect</code>",
                "Action",
                "Barcha qatorlar drayvga"
              ],
              [
                "<code>write.parquet</code>",
                "Action",
                "Faylga yozish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "filtr.scala (davomi)",
            "code": "spark.sparkContext.setLogLevel(\"ERROR\")\n\nval tozalangan = sotuvlar.filter(col(\"dona\") > 2)\nprintln(tozalangan.count())\nprintln(tozalangan.select(\"mahsulot\").distinct().count())\n\nval reja = sotuvlar.groupBy(\"mahsulot\").count()\nprintln(reja.columns.mkString(\",\"))",
            "output": "2\n1\nmahsulot,count"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Spark va Scala versiyasi",
            "html": "Spark 3.5 va 4.0 asosan Scala <b>2.13</b> uchun qurilgan; Scala 3 bilan to'liq rasmiy moslik hali yo'q. Shuning uchun Spark ishlarida Scala 2.13 sintaksisi ishlatiladi. Misollar spark-shell muhitida bajariladi va oldingi blokdagi <code>sotuvlar</code> DataFrame'i bilan davom etadi. Kursdagi boshqa mavzular Scala 3 da o'rganiladi."
          }
        ],
        "quiz": [
          {
            "q": "DataFrame ustidagi qaysi amal action hisoblanadi?",
            "options": [
              "filter",
              "select",
              "withColumn",
              "count"
            ],
            "answer": 3,
            "explain": "count natijani darhol hisoblaydi, qolganlari lazy transformatsiyalar."
          },
          {
            "q": "Spark'da groupBy va agg odatda nima uchun ishlatiladi?",
            "options": [
              "Faylni o'chirish uchun",
              "Guruhlar bo'yicha jamlangan hisob uchun",
              "Faqat saralash uchun",
              "Klaster sozlash uchun"
            ],
            "answer": 1,
            "explain": "groupBy guruhlaydi, agg esa sum, count kabi jamlanmalarni hisoblaydi."
          },
          {
            "q": "Spark 4.0 asosan qaysi Scala versiyasida ishlaydi?",
            "options": [
              "Scala 3",
              "Scala 2.12",
              "Scala 1",
              "Scala 2.13"
            ],
            "answer": 3,
            "explain": "Spark 4.0 Scala 2.13 uchun qurilgan; Scala 3 rasmiy mosligi cheklangan."
          }
        ]
      },
      {
        "id": 43,
        "title": "Loyiha 1: domen modeli va validatsiya",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Endi kurs bo'yi o'rgangan vositalarni bitta loyihaga yig'amiz: <b>vazifalar menejeri</b>. Uning domen modeli vazifa, uning holati va prioritetidan iborat. Avval tip bilan aniq model yasaymiz, keyin kirishni validatsiya qilamiz. Bu loyiha keyingi uch darsda davom etadi."
          },
          {
            "type": "code",
            "title": "domen.scala",
            "code": "enum Prioritet:\n  case Past, Orta, Yuqori\n\nsealed trait Holat\nobject Holat:\n  case object Yangi extends Holat\n  case object Jarayonda extends Holat\n  case object Bajarildi extends Holat\n\ncase class Vazifa(id: Int, nom: String, prioritet: Prioritet, holat: Holat)\n\nval v = Vazifa(1, \"Scala loyihasi\", Prioritet.Yuqori, Holat.Yangi)\nprintln(v)\nprintln(v.copy(holat = Holat.Bajarildi))\nprintln(v.prioritet)",
            "output": "Vazifa(1,Scala loyihasi,Yuqori,Yangi)\nVazifa(1,Scala loyihasi,Yuqori,Bajarildi)\nYuqori"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Nega sealed trait va enum birga?",
            "html": "<code>Prioritet</code> — oddiy variantlar to'plami, shuning uchun enum qulay. <code>Holat</code> ham shunday bo'lishi mumkin edi, lekin sealed trait keyinchalik har bir holatga alohida maydon qo'shish imkonini beradi. Ikkala yondashuv ham to'liq pattern matching beradi."
          },
          {
            "type": "table",
            "head": [
              "Qatlam",
              "Vazifasi",
              "Bu darsda"
            ],
            "rows": [
              [
                "Domen",
                "Tip va biznes tushunchalar",
                "Vazifa, Holat, Prioritet"
              ],
              [
                "Validatsiya",
                "Kirishni tekshirish",
                "Nom, uzunlik, takroriy ID"
              ],
              [
                "Repository",
                "Saqlash va o'qish",
                "Keyingi dars"
              ],
              [
                "Servis",
                "Biznes amallar",
                "Keyingi dars"
              ],
              [
                "CLI",
                "Foydalanuvchi bilan aloqa",
                "3-dars"
              ],
              [
                "Test",
                "Regressiyani tekshirish",
                "4-dars"
              ]
            ]
          },
          {
            "type": "code",
            "title": "validatsiya.scala",
            "code": "enum Prioritet:\n  case Past, Orta, Yuqori\n\nsealed trait Holat\nobject Holat:\n  case object Yangi extends Holat\n  case object Jarayonda extends Holat\n  case object Bajarildi extends Holat\n\ncase class Vazifa(id: Int, nom: String, prioritet: Prioritet, holat: Holat)\n\nenum Xato:\n  case BoshNom\n  case JudaUzun(n: Int)\n  case Takroriy(id: Int)\n\ndef tekshir(v: Vazifa, mavjud: Set[Int]): Either[Xato, Vazifa] =\n  if v.nom.trim.isEmpty then Left(Xato.BoshNom)\n  else if v.nom.length > 40 then Left(Xato.JudaUzun(v.nom.length))\n  else if mavjud.contains(v.id) then Left(Xato.Takroriy(v.id))\n  else Right(v)\n\nprintln(tekshir(Vazifa(1, \"  \", Prioritet.Orta, Holat.Yangi), Set.empty))\nprintln(tekshir(Vazifa(2, \"Testlar\", Prioritet.Past, Holat.Yangi), Set(2)))\nprintln(tekshir(Vazifa(3, \"Hisobot\", Prioritet.Yuqori, Holat.Yangi), Set.empty))",
            "output": "Left(BoshNom)\nLeft(Takroriy(2))\nRight(Vazifa(3,Hisobot,Yuqori,Yangi))"
          },
          {
            "type": "ul",
            "items": [
              "Xato holatlarini <code>String</code> emas, alohida enum bilan modellashtirish keyin xabarni lokalizatsiya qilishni osonlashtiradi.",
              "Validatsiya sof funksiya: bir xil kirish uchun bir xil Either qaytadi.",
              "Tekshiruvlar tartibi muhim — foydalanuvchiga birinchi muhim xatoni ko'rsating.",
              "Domen modelini keyingi qatlamlarga bog'lamasdan saqlang."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Loyihada Xato ni enum qilib yasashning afzalligi nimada?",
            "options": [
              "Faqat bitta xato turi qolishi",
              "Kodni sekinlashtirish",
              "Xatolarni matn bilan aralashtirmaslik",
              "JSON ni o'chirish"
            ],
            "answer": 2,
            "explain": "Enum xato turlarini aniq ajratadi va pattern matching bilan ishlashni beradi."
          },
          {
            "q": "tekshir funksiyasi muvaffaqiyatli holatda nima qaytaradi?",
            "options": [
              "Right(v)",
              "true",
              "Left(Xato.BoshNom)",
              "Option(v)"
            ],
            "answer": 0,
            "explain": "Barcha tekshiruvlar o'tsa, tekshirilgan Vazifa Right ichida qaytadi."
          },
          {
            "q": "Domen modelini birinchi qatlamda yasashning sababi nima?",
            "options": [
              "Faylni kichraytirish",
              "Testlarni o'chirish",
              "Tip orqali biznes qoidalarini aniq ifodalash",
              "Faqat JSON uchun"
            ],
            "answer": 2,
            "explain": "Aniq domen tipi noto'g'ri ma'lumotni kompilyatsiya vaqtida ushlashga yordam beradi."
          }
        ]
      },
      {
        "id": 44,
        "title": "Loyiha 2: repository va servis qatlami",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Domen modeli tayyor. Endi ma'lumotni saqlash uchun <b>repository</b> va biznes amallarni bajarish uchun <b>servis</b> qatlamini ajratamiz. Repository saqlash tafsilotini yashiradi, servis esa faqat qoidalar bilan ishlaydi. Bu ajratish testlash va keyinchalik bazaga o'tishni osonlashtiradi."
          },
          {
            "type": "code",
            "title": "repo.scala",
            "code": "sealed trait Holat\nobject Holat:\n  case object Yangi extends Holat\n  case object Jarayonda extends Holat\n  case object Bajarildi extends Holat\n\ncase class Vazifa(id: Int, nom: String, holat: Holat)\n\ntrait Repo:\n  def hammasi: List[Vazifa]\n  def topish(id: Int): Option[Vazifa]\n  def qosh(v: Vazifa): Either[String, Vazifa]\n  def yangila(v: Vazifa): Either[String, Vazifa]\n\nclass XotiraRepo(var vazifalar: List[Vazifa] = Nil) extends Repo:\n  def hammasi = vazifalar\n  def topish(id: Int) = vazifalar.find(_.id == id)\n\n  def qosh(v: Vazifa): Either[String, Vazifa] =\n    if vazifalar.exists(_.id == v.id) then Left(\"id \" + v.id + \" mavjud\")\n    else\n      vazifalar = vazifalar :+ v\n      Right(v)\n\n  def yangila(v: Vazifa): Either[String, Vazifa] =\n    if vazifalar.exists(_.id == v.id) then\n      vazifalar = vazifalar.map(x => if x.id == v.id then v else x)\n      Right(v)\n    else Left(\"id \" + v.id + \" topilmadi\")\n\nval repo = new XotiraRepo()\nprintln(repo.qosh(Vazifa(1, \"Birinchi\", Holat.Yangi)))\nprintln(repo.qosh(Vazifa(1, \"Takror\", Holat.Yangi)))\nprintln(repo.hammasi.map(_.nom))",
            "output": "Right(Vazifa(1,Birinchi,Yangi))\nLeft(id 1 mavjud)\nList(Birinchi)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Repository nimani yashiradi?",
            "html": "Yuqori qatlam <code>repo.hammasi</code> yoki <code>repo.qosh</code> ni biladi, lekin ma'lumot xotiradami, fayldami yoki bazadami — bu muhim emas. Ertaga <code>XotiraRepo</code> o'rniga <code>PostgresRepo</code> yozsangiz, servis kodi o'zgarmaydi. Bu — bog'liqliklarni kamaytirish (decoupling)."
          },
          {
            "type": "table",
            "head": [
              "Amal",
              "Qoida",
              "Xato"
            ],
            "rows": [
              [
                "Qo'shish",
                "ID takrorlanmasin",
                "<code>id N mavjud</code>"
              ],
              [
                "Yangilash",
                "ID mavjud bo'lsin",
                "<code>id N topilmadi</code>"
              ],
              [
                "Boshlash",
                "Bajarilgan vazifa qayta boshlanmasin",
                "<code>allaqachon bajarilgan</code>"
              ],
              [
                "Topish",
                "Yo'q ID uchun Option",
                "<code>None</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "servis.scala (davomi)",
            "code": "class Xizmat(repo: Repo):\n  def boshlash(id: Int): Either[String, Vazifa] =\n    repo.topish(id) match\n      case None => Left(\"topilmadi\")\n      case Some(v) if v.holat == Holat.Bajarildi => Left(\"allaqachon bajarilgan\")\n      case Some(v) => repo.yangila(v.copy(holat = Holat.Jarayonda))\n\n  def yakunlash(id: Int): Either[String, Vazifa] =\n    repo.topish(id) match\n      case None => Left(\"topilmadi\")\n      case Some(v) if v.holat == Holat.Bajarildi => Left(\"allaqachon bajarilgan\")\n      case Some(v) => repo.yangila(v.copy(holat = Holat.Bajarildi))\n\nval repo2 = new XotiraRepo()\nrepo2.qosh(Vazifa(1, \"Hisobot\", Holat.Yangi))\nval xizmat = new Xizmat(repo2)\nprintln(xizmat.boshlash(1))\nprintln(xizmat.yakunlash(1))\nprintln(xizmat.yakunlash(1))\nprintln(xizmat.boshlash(9))",
            "output": "Right(Vazifa(1,Hisobot,Jarayonda))\nRight(Vazifa(1,Hisobot,Bajarildi))\nLeft(allaqachon bajarilgan)\nLeft(topilmadi)"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Servis qatlami qoidalarni markazlashtiradi",
            "html": "Holat o'tishlari (<code>Yangi -> Jarayonda -> Bajarildi</code>) faqat servisda tekshirilsa, CLI yoki HTTP qatlami qoidalarni takrorlamaydi. Har bir qatlam bitta vazifani bajarsa, xatoni topish va test yozish osonlashadi."
          }
        ],
        "quiz": [
          {
            "q": "Repository qatlamining asosiy vazifasi nima?",
            "options": [
              "Foydalanuvchi interfeysi",
              "Faqat test yozish",
              "Saqlash tafsilotlarini yashirish",
              "Domen tipini o'chirish"
            ],
            "answer": 2,
            "explain": "Repository ma'lumotni qanday saqlashni yashiradi va yuqori qatlamga sodda API beradi."
          },
          {
            "q": "Servis bajarilgan vazifani qayta yakunlashga urinsa qanday natija qaytadi?",
            "options": [
              "Right(Vazifa)",
              "None",
              "Xato tashlanadi",
              "Left(allaqachon bajarilgan)"
            ],
            "answer": 3,
            "explain": "Qoidaga ko'ra bajarilgan vazifa yana yakunlanmaydi va Left qaytadi."
          },
          {
            "q": "XotiraRepo o'rniga boshqa repository yozilsa servis kodiga nima bo'ladi?",
            "options": [
              "Odatda o'zgarmaydi, chunki u Repo interfeysiga tayanadi",
              "Butunlay o'zgaradi",
              "Ishlamay qoladi",
              "Faqat testlar o'chadi"
            ],
            "answer": 0,
            "explain": "Servis Repo abstraksiyasiga bog'liq, implementatsiya almashsa ham API saqlanadi."
          }
        ]
      },
      {
        "id": 45,
        "title": "Loyiha 3: CLI va JSON bilan saqlash",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Endi loyihaga foydalanuvchi kirishi va saqlash qo'shamiz. CLI buyruqlarni matndan ajratib oladi, xatolarni <code>Either</code> bilan qaytaradi. Ma'lumot esa JSON faylga yoziladi va keyingi ishga tushirishda qayta o'qiladi. Bu qismda upickle va <code>java.nio.file</code> birga ishlaydi."
          },
          {
            "type": "code",
            "title": "fayl.scala",
            "code": "import upickle.default.*\nimport java.nio.file.{Files, Paths}\n\ncase class Vazifa(id: Int, nom: String, bajarildi: Boolean = false) derives ReadWriter\n\nval boshlangich = List(Vazifa(1, \"Scala\"), Vazifa(2, \"Testlar\"))\nval yangi = boshlangich.map(v => if v.id == 2 then v.copy(bajarildi = true) else v)\n\nval yol = Paths.get(\"vazifalar.json\")\nFiles.writeString(yol, write(yangi))\n\nprintln(Files.exists(yol))\nprintln(read[List[Vazifa]](Files.readString(yol)).map(_.nom))",
            "output": "true\nList(Scala, Testlar)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Fayl qayerda paydo bo'ladi?",
            "html": "<code>Paths.get(\"vazifalar.json\")</code> joriy ish papkasiga nisbatan yo'l yasaydi. Skript qayerdan ishga tushirilgan bo'lsa, fayl o'sha yerda paydo bo'ladi. Haqiqiy ilovada yo'lni konfiguratsiyadan olish va foydalanuvchi papkasidan foydalanish yaxshiroq."
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Ma'nosi",
              "Natija"
            ],
            "rows": [
              [
                "<code>qosh Scala</code>",
                "Yangi vazifa",
                "<code>Qosh(Scala)</code>"
              ],
              [
                "<code>bajar 2</code>",
                "Vazifani bajarildi qilish",
                "<code>Bajar(2)</code>"
              ],
              [
                "<code>royxat</code>",
                "Ro'yxatni ko'rsatish",
                "<code>Royxat</code>"
              ],
              [
                "<code>bajar x</code>",
                "ID son emas",
                "<code>Left(...)</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "buyruq.scala",
            "code": "sealed trait Buyruq\ncase class Qosh(nom: String) extends Buyruq\ncase class Bajar(id: Int) extends Buyruq\ncase object Royxat extends Buyruq\n\ndef oqi(matn: String): Either[String, Buyruq] =\n  matn.trim.split(\" \").toList match\n    case \"qosh\" :: nom :: Nil if nom.nonEmpty => Right(Qosh(nom))\n    case \"bajar\" :: id :: Nil =>\n      id.toIntOption.map(Bajar.apply).toRight(\"ID son bo'lishi kerak\")\n    case \"royxat\" :: Nil => Right(Royxat)\n    case _ => Left(\"noma'lum buyruq\")\n\nprintln(oqi(\"qosh Scala\"))\nprintln(oqi(\"bajar x\"))\nprintln(oqi(\"royxat\"))\nprintln(oqi(\"o'chir 1\"))",
            "output": "Right(Qosh(Scala))\nLeft(ID son bo'lishi kerak)\nRight(Royxat)\nLeft(noma'lum buyruq)"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Faylga yozishda ehtiyotkorlik",
            "html": "To'g'ridan-to'g'ri asosiy faylga yozish yarim yo'lda uzilsa, ma'lumot buzilishi mumkin. Ishonchli usul: avval vaqtinchalik faylga yozib, keyin uni asosiy fayl ustiga atomar ko'chirish. Shuningdek, yozishdan oldin papka mavjudligini tekshiring."
          }
        ],
        "quiz": [
          {
            "q": "Files.writeString qanday vazifani bajaradi?",
            "options": [
              "Faylni o'qiydi",
              "Papka yaratadi",
              "Faylni o'chiradi",
              "Matnni faylga yozadi"
            ],
            "answer": 3,
            "explain": "writeString berilgan yo'lga matn yozadi, kerak bo'lsa faylni yaratadi."
          },
          {
            "q": "id.toIntOption.map(Bajar.apply).toRight(...) nimani qaytaradi?",
            "options": [
              "Har doim Bajar",
              "Son bo'lsa Right(Bajar), aks holda Left",
              "Faqat 0",
              "Istisno"
            ],
            "answer": 1,
            "explain": "toIntOption xavfsiz parse qiladi, toRight esa xatoni Left ga aylantiradi."
          },
          {
            "q": "Ma'lumotni faylga saqlashni alohida qatlamga ajratishning foydasi nima?",
            "options": [
              "Fayl nomini yashirish va saqlashni almashtirishni osonlashtirish",
              "Kodni sekinlashtirish",
              "JSON ni o'chirish",
              "Faqat test uchun"
            ],
            "answer": 0,
            "explain": "Saqlash tafsiloti ajratilsa, fayl o'rniga baza qo'yish osonlashadi."
          }
        ]
      },
      {
        "id": 46,
        "title": "Loyiha 4: regressiya testlari va paketlash",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Loyiha ishlayapti, lekin har o'zgarishdan keyin qo'lda tekshirish ishonchsiz. <b>Regressiya testlari</b> eski xatti-harakat saqlanib qolganini tekshiradi. So'ng loyihani <b>JAR</b> yoki konteyner uchun paketlaymiz. sbt bu ishlarni buyruqlar bilan bajaradi."
          },
          {
            "type": "code",
            "title": "regressiya.scala",
            "code": "case class Vazifa(id: Int, nom: String, bajarildi: Boolean = false)\n\ndef bajar(vazifalar: List[Vazifa], id: Int): Either[String, List[Vazifa]] =\n  if vazifalar.exists(_.id == id) then\n    Right(vazifalar.map(v => if v.id == id then v.copy(bajarildi = true) else v))\n  else Left(\"topilmadi\")\n\ndef tekshir(nom: String)(shart: => Boolean): Unit =\n  println((if shart then \"OK   \" else \"XATO \") + nom)\n\nval vazifalar = List(Vazifa(1, \"Scala\"), Vazifa(2, \"Testlar\"))\n\ntekshir(\"bajarish\")(bajar(vazifalar, 1).toOption.exists(_.count(_.bajarildi) == 1))\ntekshir(\"yo'q id\")(bajar(vazifalar, 9) == Left(\"topilmadi\"))\ntekshir(\"asl ro'yxat o'zgarmadi\")(vazifalar.forall(v => !v.bajarildi))",
            "output": "OK   bajarish\nOK   yo'q id\nOK   asl ro'yxat o'zgarmadi"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "munit bilan bir xil test",
            "html": "Haqiqiy loyihada bu tekshiruvlar <code>class VazifaSuite extends munit.FunSuite</code> ichida yoziladi: <code>test(\"bajarish\") { assertEquals(...) }</code>. <code>sbt test</code> barcha suite'larni ishga tushiradi. <code>testOnly *VazifaSuite</code> faqat bitta suite'ni tekshiradi — xatoni izlashda tezroq."
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Natija"
            ],
            "rows": [
              [
                "<code>sbt test</code>",
                "Barcha testlar"
              ],
              [
                "<code>sbt testOnly *VazifaSuite</code>",
                "Bitta test suite"
              ],
              [
                "<code>sbt package</code>",
                "Oddiy JAR"
              ],
              [
                "<code>sbt assembly</code>",
                "Bog'liqliklari bilan bitta JAR (plugin)"
              ],
              [
                "<code>sbt clean</code>",
                "Build natijalarini tozalash"
              ]
            ]
          },
          {
            "type": "code",
            "title": "hisobot.scala",
            "code": "case class Test(nom: String, otdi: Boolean)\n\nval testlar = List(\n  Test(\"bajarish\", true),\n  Test(\"yo'q id\", true),\n  Test(\"asl ro'yxat o'zgarmadi\", true)\n)\n\nval otdi = testlar.count(_.otdi)\nprintln(otdi.toString + \"/\" + testlar.size + \" test o'tdi\")\nprintln(if otdi == testlar.size then \"build muvaffaqiyatli\" else \"build yiqildi\")",
            "output": "3/3 test o'tdi\nbuild muvaffaqiyatli"
          },
          {
            "type": "ul",
            "items": [
              "Testlarni CI'da har push'da avtomatik ishga tushiring.",
              "Paketlashdan oldin <code>sbt clean test</code> bajarish odat.",
              "JAR nomi va versiyasini <code>build.sbt</code> da aniq belgilang.",
              "Maxfiy sozlamalarni JAR ichiga yozmang — muhit o'zgaruvchilaridan oling."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Regressiya testining asosiy maqsadi nima?",
            "options": [
              "Yangi funksiya yozish",
              "Kodni tezlashtirish",
              "Eski xatti-harakat o'zgarib ketmaganini tekshirish",
              "Faylni o'chirish"
            ],
            "answer": 2,
            "explain": "Regressiya testlari o'zgarishdan keyin eski natijalar saqlanishini tekshiradi."
          },
          {
            "q": "munit test suite qaysi classdan meros oladi?",
            "options": [
              "JUnit",
              "TestCase",
              "FunSuite",
              "Main"
            ],
            "answer": 2,
            "explain": "munit.FunSuite test bloklarini taqdim etadi."
          },
          {
            "q": "sbt package odatda nima yaratadi?",
            "options": [
              "Docker image",
              "JAR fayl",
              "JSON hisobot",
              "SQL baza"
            ],
            "answer": 1,
            "explain": "package kompilyatsiya natijalarini JAR arxiviga yig'adi."
          }
        ]
      },
      {
        "id": 47,
        "title": "Concurrency: parallel hisoblash va xavfsiz holat",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Bir vaqtning o'zida bir necha ishni bajarish tezlik beradi, lekin umumiy holatni noto'g'ri boshqarish race condition'ga olib keladi. Scala'da <code>Future</code> asinxron ishlarni, parallel kolleksiyalar esa CPU'ga og'ir hisoblarni bo'lishish uchun ishlatiladi. Muhimi — holatni xavfsiz yangilash."
          },
          {
            "type": "code",
            "title": "parallel.scala",
            "code": "import scala.concurrent.{Future, Await}\nimport scala.concurrent.duration.*\nimport scala.concurrent.ExecutionContext.Implicits.global\nimport java.util.concurrent.atomic.AtomicInteger\n\nval hisob = AtomicInteger(0)\nval ishlar = (1 to 100).map(_ => Future(hisob.incrementAndGet()))\nAwait.result(Future.sequence(ishlar), 3.seconds)\nprintln(hisob.get())\n\nval natija = Await.result(\n  Future.traverse(List(1, 2, 3, 4))(n => Future(n * n)),\n  2.seconds\n)\nprintln(natija)",
            "output": "100\nList(1, 4, 9, 16)"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "var + parallel = xavf",
            "html": "Bir necha thread bir vaqtda <code>var hisob = hisob + 1</code> bajarsa, yangilanishlar yo'qolishi mumkin. <code>AtomicInteger</code> bunday yangilanishni atomar qiladi. Umumiy o'zgaruvchan holatdan qochish yoki uni lock/atomic bilan himoyalash kerak."
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Qachon",
              "Ehtiyot"
            ],
            "rows": [
              [
                "<code>Future</code>",
                "Tarmoq, fayl, asinxron I/O",
                "ExecutionContext, xatolar"
              ],
              [
                "<code>Future.traverse</code>",
                "Ko'p mustaqil asinxron ish",
                "Fail-fast xatti-harakati"
              ],
              [
                "Parallel kolleksiya",
                "CPU'ga og'ir sof hisob",
                "Yon ta'sirsiz funksiya"
              ],
              [
                "<code>AtomicInteger</code>",
                "Umumiy hisoblagich",
                "Faqat oddiy atomar amallar"
              ]
            ]
          },
          {
            "type": "code",
            "title": "par-collection.scala",
            "code": "import scala.collection.parallel.CollectionConverters.*\n\nval sonlar = (1 to 10).toList\nval kvadratlar = sonlar.par.map(n => n * n).toList\n\nprintln(kvadratlar.sorted)\nprintln(kvadratlar.sum)",
            "output": "List(1, 4, 9, 16, 25, 36, 49, 64, 81, 100)\n385"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Parallel kolleksiya qachon foydali?",
            "html": "Har bir element ustidagi amal mustaqil va sof bo'lsa, parallel kolleksiya ishni yadrolar orasida bo'ladi. Kichik ro'yxatlarda esa boshqaruv xarajati foydadan ko'p. Avval oddiy kod yozing, o'lchov natijasi sekinlikni ko'rsatsa, keyin parallellashtiring."
          }
        ],
        "quiz": [
          {
            "q": "Nega parallel yangilanadigan hisoblagich uchun AtomicInteger ishlatiladi?",
            "options": [
              "Yangilanishni atomar qiladi",
              "U sonni matnga aylantiradi",
              "Thread yaratmaydi",
              "Xotirani tozalaydi"
            ],
            "answer": 0,
            "explain": "AtomicInteger increment kabi amallarni race condition'siz bajaradi."
          },
          {
            "q": "Future.traverse qachon mos keladi?",
            "options": [
              "Xatolarni yashirish uchun",
              "Faqat sinxron hisob uchun",
              "Faqat fayl o'qish uchun",
              "Mustaqil asinxron ishlarni birdan boshlash uchun"
            ],
            "answer": 3,
            "explain": "traverse har bir element uchun Future yasab, ularni birga bajaradi va natijalarni yig'adi."
          },
          {
            "q": "Parallel kolleksiyadan foydalanishning asosiy sharti nima?",
            "options": [
              "Har doim kamida 10 element",
              "Faqat String ishlatish",
              "Amallar yon ta'sirsiz va mustaqil bo'lishi",
              "Faqat test muhitida"
            ],
            "answer": 2,
            "explain": "Yon ta'sirli amallar tartib va natija buzilishiga olib kelishi mumkin."
          }
        ]
      },
      {
        "id": 48,
        "title": "Kod sifati va unumdorlik asoslari",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Idiomatik Scala kodi qisqa, lekin avvalo <b>tushunarli</b> bo'lishi kerak. O'zgarmaslik, aniq tiplar va kichik funksiyalar xatolarni kamaytiradi. Unumdorlik haqida gap ketganda esa \"mikro-optimizatsiya\" emas, to'g'ri ma'lumot tuzilmasi va algoritm tanlash muhimroq."
          },
          {
            "type": "code",
            "title": "tailrec.scala",
            "code": "import scala.annotation.tailrec\n\n@tailrec\ndef yigindi(xs: List[Int], acc: Long = 0): Long = xs match\n  case Nil => acc\n  case bosh :: qolgan => yigindi(qolgan, acc + bosh)\n\nprintln(yigindi(List.fill(100000)(1)))\nprintln(yigindi(List(10, 20, 30)))",
            "output": "100000\n60"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "To'g'ri ma'lumot tuzilmasi",
            "html": "<code>List</code> boshiga qo'shishda (<code>x :: xs</code>) tez, oxiriga qo'shishda (<code>xs :+ x</code>) esa O(n). Tez-tez indeks bo'yicha murojaat kerak bo'lsa <code>Vector</code>, kalit bo'yicha qidiruv kerak bo'lsa <code>Map</code> tanlang. Algoritm tanlovi kodni \"mayda\" optimallashtirishdan ko'ra kattaroq ta'sir qiladi."
          },
          {
            "type": "table",
            "head": [
              "Amal",
              "List",
              "Vector"
            ],
            "rows": [
              [
                "Boshiga qo'shish",
                "O(1)",
                "O(log n) (amalda tez)"
              ],
              [
                "Oxiriga qo'shish",
                "O(n)",
                "O(log n) (amalda tez)"
              ],
              [
                "Indeks bo'yicha olish",
                "O(n)",
                "O(log n)"
              ],
              [
                "Boshini olish",
                "O(1)",
                "O(log n)"
              ],
              [
                "Xotira sarfi",
                "Kam",
                "Biroz ko'proq"
              ]
            ]
          },
          {
            "type": "code",
            "title": "string-builder.scala",
            "code": "val sb = new StringBuilder\n(1 to 5).foreach(i => sb.append(i).append(\"-\"))\nprintln(sb.toString.dropRight(1))\n\nval matn = (1 to 5).map(i => i.toString).mkString(\"-\")\nprintln(matn)\n\nval yangi = 0 +: List(1, 2, 3)\nprintln(yangi)",
            "output": "1-2-3-4-5\n1-2-3-4-5\nList(0, 1, 2, 3)"
          },
          {
            "type": "ul",
            "items": [
              "Avval o'lchang, keyin optimallashtiring: taxmin ko'pincha noto'g'ri bo'ladi.",
              "Katta matnni ko'p marta <code>+</code> bilan yig'ish o'rniga <code>StringBuilder</code> yoki <code>mkString</code> ishlating.",
              "Erta <code>return</code> va chuqur indentation o'rniga kichik funksiyalarga bo'ling.",
              "Tipni aniq yozish va <code>val</code> dan foydalanish kodni o'qishni osonlashtiradi."
            ]
          }
        ],
        "quiz": [
          {
            "q": "List boshiga element qo'shishning murakkabligi qanday?",
            "options": [
              "O(n)",
              "O(n log n)",
              "O(log n)",
              "O(1)"
            ],
            "answer": 3,
            "explain": "List bog'langan ro'yxat bo'lib, boshiga qo'shish doimiy vaqt oladi."
          },
          {
            "q": "Ko'p marta matn qo'shishda StringBuilder nima uchun ishlatiladi?",
            "options": [
              "Matnni shifrlash uchun",
              "Sonlarni yaxlitlash uchun",
              "Fayl ochish uchun",
              "Ortiqcha nusxa yaratishni kamaytirish uchun"
            ],
            "answer": 3,
            "explain": "StringBuilder o'zgaruvchan buferda yig'adi va oraliq String lar sonini kamaytiradi."
          },
          {
            "q": "Unumdorlikni oshirishning eng ishonchli birinchi qadami nima?",
            "options": [
              "Kodni qisqartirish",
              "Har joyda var ishlatish",
              "Barcha funksiyalarni parallel qilish",
              "O'lchash va sekin joyni aniqlash"
            ],
            "answer": 3,
            "explain": "O'lchov haqiqiy muammoni ko'rsatadi; optimizatsiyani taxmin bilan boshlamang."
          }
        ]
      },
      {
        "id": 49,
        "title": "Scala ekotizimi va keyingi qadamlar",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Kurs yakuniga yetdi. Endi Scala'ning qayerda ishlatilishini va qaysi yo'nalishlarda davom ettirish mumkinligini ko'rib chiqamiz. Ekotizim katta: backend, ma'lumot muhandisligi, oqimli ishlov berish, Android va hatto brauzer ham. Muhimi — asoslarni mustahkamlab, bitta real loyiha ustida ishlash."
          },
          {
            "type": "code",
            "title": "yakuniy.scala",
            "code": "case class Natija(ism: String, ball: Int)\n\ngiven Ordering[Natija] with\n  def compare(a: Natija, b: Natija): Int = b.ball.compare(a.ball)\n\nval natijalar = List(\n  Natija(\"Aziza\", 92),\n  Natija(\"Bek\", 78),\n  Natija(\"Dilnoza\", 88)\n)\n\nprintln(natijalar.sorted.map(_.ism))\nprintln(natijalar.maxBy(_.ball).ism)\nprintln(natijalar.map(_.ball).sum / natijalar.size)",
            "output": "List(Aziza, Dilnoza, Bek)\nAziza\n86"
          },
          {
            "type": "table",
            "head": [
              "Yo'nalish",
              "Asosiy kutubxonalar",
              "Nima quriladi"
            ],
            "rows": [
              [
                "Backend",
                "http4s, Tapir, Play, ZIO HTTP",
                "REST API, servislar"
              ],
              [
                "Effektlar",
                "Cats Effect, ZIO",
                "Asinxron va resursli dasturlar"
              ],
              [
                "Ma'lumot",
                "Spark, Flink, Kafka",
                "Katta hajmli ma'lumot oqimlari"
              ],
              [
                "Baza",
                "Doobie, Slick, Quill",
                "SQL va repository qatlami"
              ],
              [
                "Frontend",
                "Scala.js, Laminar",
                "Brauzer ilovalari"
              ],
              [
                "Parallel",
                "Akka/Pekko, fs2",
                "Aktyorlar va oqimlar"
              ]
            ]
          },
          {
            "type": "code",
            "title": "quvur.scala",
            "code": "case class Natija(ism: String, ball: Int)\n\nextension (n: Natija)\n  def daraja: String =\n    if n.ball >= 90 then \"A\"\n    else if n.ball >= 80 then \"B\"\n    else \"C\"\n\ndef qabul(n: Natija): Either[String, String] =\n  if n.ism.trim.isEmpty then Left(\"ism bo'sh\")\n  else if n.ball < 0 || n.ball > 100 then Left(\"ball noto'g'ri\")\n  else Right(n.ism + \": \" + n.daraja)\n\nval natijalar = List(Natija(\"Aziza\", 92), Natija(\"Bek\", 78))\nprintln(natijalar.map(qabul).mkString(\", \"))\nprintln(natijalar.flatMap(n => qabul(n).toOption).mkString(\" | \"))",
            "output": "Right(Aziza: A), Right(Bek: C)\nAziza: A | Bek: C"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Keyingi 30 kun",
            "html": "Bitta kichik loyihani tanlang: masalan, CSV hisobot yoki REST API. Uni sbt bilan yuriting, munit testlar yozing, JSON va fayl saqlashni qo'shing. Har kuni 30-45 daqiqa kod yozish bir oyda sezilarli natija beradi. Rasmiy <code>docs.scala-lang.org</code> va kutubxona hujjatlari eng ishonchli manba."
          },
          {
            "type": "ul",
            "items": [
              "Asoslarni takrorlang: pattern matching, kolleksiyalar, Option/Either, testlar.",
              "Keyin bitta effekt tizimini (Cats Effect yoki ZIO) chuqur o'rganing.",
              "Ochiq manba loyihasiga kichik hujjat yoki test hissa qo'shib ko'ring.",
              "Intervyuga tayyorlanishda Big-O, immutability va concurrency savollariga e'tibor bering."
            ]
          }
        ],
        "quiz": [
          {
            "q": "Scala.js asosan nima uchun ishlatiladi?",
            "options": [
              "Scala kodini JavaScript ga kompilyatsiya qilish",
              "Ma'lumotlar bazasini boshqarish",
              "Faqat test yozish",
              "JVM'ni o'chirish"
            ],
            "answer": 0,
            "explain": "Scala.js Scala kodini brauzerda ishlaydigan JavaScript ga aylantiradi."
          },
          {
            "q": "Cats Effect va ZIO qanday muammoni hal qiladi?",
            "options": [
              "Grafik dizayn",
              "Asinxron va resursli effektlarni xavfsiz boshqarish",
              "Faqat SQL so'rovlar",
              "Matn formatlash"
            ],
            "answer": 1,
            "explain": "Ular effektlarni tavsiflab, xato va resurslarni boshqaradigan runtime beradi."
          },
          {
            "q": "Kursdan keyingi eng foydali qadam qaysi?",
            "options": [
              "Kichik real loyihani testlar bilan qurish",
              "Faqat video ko'rish",
              "Barcha kutubxonalarni bir kunda o'rganish",
              "Hech narsa qilmaslik"
            ],
            "answer": 0,
            "explain": "Amaliy loyiha bilimlarni mustahkamlaydi va portfolio yaratadi."
          }
        ]
      },
      {
        "id": 50,
        "title": "Yakuniy imtihon",
        "minutes": 20,
        "isExam": true,
        "blocks": [
          {
            "type": "p",
            "html": "49 dars va amaliy loyiha yakunlandi. Yakuniy imtihon butun kursni qamrab oladi: pattern matching va ADT, kolleksiyalar, generiklar, Option/Either, Scala 3 given'lari, Future, sbt, testlash, Akka, Cats va Spark. Savollar kodning mazmunini tushunishni tekshiradi, sintaksisni yodlashni emas."
          },
          {
            "type": "h",
            "html": "Imtihon formati"
          },
          {
            "type": "ul",
            "items": [
              "<strong>12 ta savol</strong>, har birida 4 variant va bitta to'g'ri javob.",
              "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
              "Barcha savollarga taxminan 20 daqiqa ajratish tavsiya etiladi.",
              "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
              "O'tgandan so'ng sertifikatni ko'rish va PDF qilib saqlash mumkin."
            ]
          },
          {
            "type": "table",
            "head": [
              "Blok",
              "Savollar",
              "Nimani tekshiradi"
            ],
            "rows": [
              [
                "Til va pattern matching",
                "4",
                "Naqshlar, ADT, generiklar, kolleksiya natijalari"
              ],
              [
                "Tiplar va xatolar",
                "3",
                "Either, for-guard, Future xatolari"
              ],
              [
                "Ekotizim",
                "3",
                "munit, sbt, Akka, Cats, Spark"
              ],
              [
                "Amaliy tushuncha",
                "2",
                "Loyiha qatlamlari va kod uslubi"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Imtihondan oldin",
            "html": "Kod bloklaridagi natijalarni qayta o'qib chiqing, ayniqsa <code>foldLeft</code>, <code>Either</code>, <code>Future.recoverWith</code> va <code>given</code> misollarini. Har bir variantni oxirigacha o'qing: ba'zi javoblar bir-biriga juda yaqin. Savol mazmuniga e'tibor bering, kalit so'zni emas."
          }
        ],
        "quiz": []
      }
    ],
    "exam": {
      "passScore": 9,
      "total": 12,
      "questions": [
        {
          "q": "Bo'sh bo'lmagan ro'yxatni bosh element va qolgan qismga ajratadigan naqsh qaysi?",
          "options": [
            "case Nil",
            "case bosh :: qolgan",
            "case List()",
            "case (a, b)"
          ],
          "answer": 1,
          "explain": ":: naqshi birinchi elementni va qolgan ro'yxatni alohida bog'laydi."
        },
        {
          "q": "sealed trait asosidagi ADT'ga yangi variant qo'shilsa, kompilyator qanday yordam beradi?",
          "options": [
            "To'liq bo'lmagan match'lar haqida ogohlantiradi",
            "Barcha match'larni avtomatik to'ldiradi",
            "Yangi testlarni o'zi yozadi",
            "Eski variantni o'chiradi"
          ],
          "answer": 0,
          "explain": "sealed to'plam to'liq ma'lum bo'lgani uchun qamrab olinmagan variant aniqlanadi."
        },
        {
          "q": "def almashtir[A, B](j: Juftlik[A, B]) funksiyasi Juftlik[B, A] qaytarsa, bu qanday imkoniyatni ko'rsatadi?",
          "options": [
            "Variance avtomatik qo'llanadi",
            "Faqat Int bilan ishlaydi",
            "Tip parametrlari mustaqil almashadi",
            "Juftlik o'zgaruvchan bo'ladi"
          ],
          "answer": 2,
          "explain": "A va B mustaqil tip parametrlari bo'lib, natijada joylari almashadi."
        },
        {
          "q": "List(1, 2, 3, 4).foldLeft(0)(_ + _) qanday natija beradi?",
          "options": [
            "4",
            "24",
            "10",
            "0"
          ],
          "answer": 2,
          "explain": "0 dan boshlab barcha elementlar qo'shiladi: 1 + 2 + 3 + 4 = 10."
        },
        {
          "q": "Muvaffaqiyatli natijani Right, xato sababini Left da saqlaydigan tip qaysi?",
          "options": [
            "Option",
            "Try",
            "Future",
            "Either"
          ],
          "answer": 3,
          "explain": "Either ikki tomonlama natija beradi: Left xato, Right muvaffaqiyat."
        },
        {
          "q": "for-ifoda ichidagi if sharti kompilyatsiyada qaysi metodga aylanadi?",
          "options": [
            "map",
            "withFilter",
            "flatMap",
            "reduce"
          ],
          "answer": 1,
          "explain": "Guard shartlari kolleksiyada withFilter chaqiruviga aylanadi."
        },
        {
          "q": "recoverWith metodi qanday vazifani bajaradi?",
          "options": [
            "Muvaffaqiyatli Future natijasini o'zgartiradi",
            "Future'ni bloklab kutadi",
            "Faqat timeoutni oshiradi",
            "Failed Future'ni boshqa Future bilan almashtiradi"
          ],
          "answer": 3,
          "explain": "recoverWith xato holatida yangi Future qaytarish imkonini beradi."
        },
        {
          "q": "munit'da alohida tekshiruv qaysi blok ichida yoziladi?",
          "options": [
            "assertOnly(...)",
            "case class Test(...)",
            "def main()",
            "test(\"nom\") { ... }"
          ],
          "answer": 3,
          "explain": "FunSuite ichida test(\"nom\") { ... } bloklari ishlatiladi."
        },
        {
          "q": "sbt'da app/run buyrug'i nima qiladi?",
          "options": [
            "app modulining asosiy dasturini ishga tushiradi",
            "Barcha testlarni ishga tushiradi",
            "Yangi modul yaratadi",
            "Kodni formatlaydi"
          ],
          "answer": 0,
          "explain": "Modul nomi bilan prefikslangan run o'sha modulning mainini ishga tushiradi."
        },
        {
          "q": "Akka aktyorining ichki holatiga tashqi kod qanday ta'sir qiladi?",
          "options": [
            "Maydonni to'g'ridan-to'g'ri o'zgartirib",
            "Lock olib",
            "Faqat xabar yuborish orqali",
            "Global o'zgaruvchi orqali"
          ],
          "answer": 2,
          "explain": "Aktyor holati inkapsulyatsiya qilinadi; muloqot faqat xabarlar orqali bo'ladi."
        },
        {
          "q": "Cats'dagi Monad qaysi amalni ta'minlaydi?",
          "options": [
            "map",
            "flatMap",
            "filter",
            "zip"
          ],
          "answer": 1,
          "explain": "Monad bog'liq hisoblarni flatMap orqali ketma-ket ulaydi."
        },
        {
          "q": "Spark DataFrame transformatsiyalari qachon haqiqatan bajariladi?",
          "options": [
            "Action chaqirilganda",
            "Har chaqiruvda darhol",
            "Faqat kompilyatsiya vaqtida",
            "Faqat spark-shell yopilganda"
          ],
          "answer": 0,
          "explain": "Spark lazy ishlaydi: reja action (show, count, collect) bilan ishga tushadi."
        }
      ]
    }
  };
})();
