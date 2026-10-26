/* Noldan — Kotlin course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.kotlin = {
  "id": "kotlin",
  "title": "Kotlin",
  "logoClass": "course-logo--kotlin",
  "logoText": "Kt",
  "level": "Boshlovchi",
  "hours": "~20 soat",
  "testCount": 147,
  "lang": "kotlin",
  "interactive": "none",
  "heroTitle": "Kotlin: zamonaviy va xavfsiz JVM tili",
  "heroDesc": "Kotlin kursi: 49 dars, 147 test va 12 savollik yakuniy imtihon. Null safety, funksiyalar, OOP, kolleksiyalar, generics, coroutines, Flow, Ktor, Android, Jetpack Compose va amaliy loyiha bosqichma-bosqich o'rgatiladi.",
  "metaDescription": "Kotlin kursi: 49 dars, 147 test, 12-savollik imtihon. Kotlin 2.x asoslari, OOP, generics, coroutines, Flow, Ktor, Android va Jetpack Compose — O'zbek tilida noldan.",
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
      "title": "Funksiyalar, kolleksiyalar va null xavfsizlik",
      "lessons": [
        5,
        6,
        7
      ]
    },
    {
      "title": "OOP, xatolar va amaliyot",
      "lessons": [
        8,
        9,
        10,
        11,
        12
      ]
    },
    {
      "title": "Null xavfsizligi va funksiyalar chuqur",
      "lessons": [
        13,
        14
      ]
    },
    {
      "title": "Klasslar va tiplar",
      "lessons": [
        15,
        16,
        17
      ]
    },
    {
      "title": "Generics va funksional Kotlin",
      "lessons": [
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    {
      "title": "Xatolar, fayllar, Java va testlar",
      "lessons": [
        24,
        25,
        26,
        27,
        28
      ]
    },
    {
      "title": "Coroutines olami",
      "lessons": [
        29,
        30,
        31
      ]
    },
    {
      "title": "Ktor, Android va Compose",
      "lessons": [
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39
      ]
    },
    {
      "title": "Ekotizim va loyiha",
      "lessons": [
        40,
        41,
        42,
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
      "title": "Kotlin nima: JVM, main va println",
      "minutes": 12,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin — JetBrains kompaniyasi yaratgan zamonaviy til. U <b>JVM</b> (Java Virtual Machine) uchun bayt-kodga kompilyatsiya qilinadi, shuning uchun Java kutubxonalari bilan birga ishlaydi. Android'da rasmiy til sifatida ham keng qo'llanadi. Kurs namunalari Kotlin 2.x sintaksisiga mos."
        },
        {
          "type": "code",
          "title": "salom.kt",
          "code": "fun main() {\n    println(\"Salom, Noldan!\")\n    val ism = \"Aziza\"\n    println(\"Kotlin ishlayapti, $ism\")\n}",
          "output": "Salom, Noldan!\nKotlin ishlayapti, Aziza"
        },
        {
          "type": "p",
          "html": "Faylni kompilyatsiya qilish uchun terminalda <code>kotlinc salom.kt -include-runtime -d salom.jar</code>, ishga tushirish uchun <code>java -jar salom.jar</code> yoziladi. IntelliJ IDEA'da esa yangi Kotlin loyihasi yaratib, <code>Main.kt</code> faylidagi yashil uchburchak bilan ishga tushirish qulay."
        },
        {
          "type": "table",
          "head": [
            "Atama",
            "Ma'nosi"
          ],
          "rows": [
            [
              "JVM",
              "Kotlin bayt-kodini bajaradigan virtual mashina"
            ],
            [
              "<code>kotlinc</code>",
              "Kotlin kompilyatori"
            ],
            [
              "<code>fun main()</code>",
              "Dasturning kirish nuqtasi"
            ],
            [
              "<code>println()</code>",
              "Matnni yangi qatorda chiqaradi"
            ],
            [
              "Bayt-kod",
              "JVM tushunadigan oraliq kod"
            ]
          ]
        },
        {
          "type": "code",
          "title": "hisob.kt",
          "code": "fun main() {\n    val yil = 2026\n    val til = \"Kotlin\"\n    println(\"$til $yil\")\n    println(\"2 + 3 = \" + (2 + 3))\n}",
          "output": "Kotlin 2026\n2 + 3 = 5"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Fayl nomi va main",
          "html": "Kotlin'da fayl nomi klass nomiga mos bo'lishi shart emas. <code>main</code> funksiyasi top-level, ya'ni klass ichida bo'lmasdan ham yozilishi mumkin. Bitta faylda bitta <code>fun main()</code> bo'lishi kerak — dastur aynan shundan boshlanadi."
        }
      ],
      "quiz": [
        {
          "q": "Kotlin kodi qanday bajariladi?",
          "options": [
            "To'g'ridan-to'g'ri brauzerda",
            "JVM uchun bayt-kodga kompilyatsiya qilinadi",
            "Faqat interpretatsiya qilinadi",
            "Python orqali"
          ],
          "answer": 1,
          "explain": "kotlinc kodni JVM bayt-kodiga aylantiradi, keyin JVM uni bajaradi."
        },
        {
          "q": "Kotlin dasturining kirish nuqtasi qaysi?",
          "options": [
            "fun start()",
            "fun main()",
            "class Main",
            "println()"
          ],
          "answer": 1,
          "explain": "Dastur fun main() dan boshlanadi; u top-level bo'lishi mumkin."
        },
        {
          "q": "Konsolga matn chiqarish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "console.log()",
            "printLine()",
            "println()",
            "echo()"
          ],
          "answer": 2,
          "explain": "println() matnni chiqaradi va yangi qatorga o'tadi. print() esa qatorni tugatmaydi."
        }
      ]
    },
    {
      "id": 2,
      "title": "val, var, tiplar va string shablonlari",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "<code>val</code> — qiymati o'zgarmaydigan havola, <code>var</code> — o'zgaradigan o'zgaruvchi. Kotlin tipni ko'pincha o'zi aniqlaydi (inferens), lekin uni aniq yozish ham mumkin: <code>val yosh: Int = 16</code>."
        },
        {
          "type": "code",
          "title": "turlar.kt",
          "code": "fun main() {\n    val ism: String = \"Aziza\"\n    var yosh: Int = 16\n    yosh = 17\n    val baho: Double = 4.8\n    val faol: Boolean = true\n    val harf: Char = 'A'\n\n    println(\"$ism, $yosh yosh\")\n    println(\"Baho: $baho, faol: $faol, harf: $harf\")\n}",
          "output": "Aziza, 17 yosh\nBaho: 4.8, faol: true, harf: A"
        },
        {
          "type": "table",
          "head": [
            "Tip",
            "Misol",
            "Nima saqlaydi"
          ],
          "rows": [
            [
              "<code>Int</code>",
              "<code>42</code>",
              "Butun son"
            ],
            [
              "<code>Double</code>",
              "<code>4.8</code>",
              "Kasr son"
            ],
            [
              "<code>String</code>",
              "<code>\"Salom\"</code>",
              "Matn"
            ],
            [
              "<code>Boolean</code>",
              "<code>true</code>",
              "Rost yoki yolg'on"
            ],
            [
              "<code>Char</code>",
              "<code>'A'</code>",
              "Bitta belgi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "shablon.kt",
          "code": "fun main() {\n    val narx = 12000\n    val soni = 3\n    val jami = narx * soni\n    println(\"Jami: $jami so'm\")\n    println(\"Narx: ${narx * soni}\")\n\n    val matn = \"\"\"\n        Birinchi qator\n        Ikkinchi qator\n    \"\"\".trimIndent()\n    println(matn)\n}",
          "output": "Jami: 36000 so'm\nNarx: 36000\nBirinchi qator\nIkkinchi qator"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "val nimani qulflaydi?",
          "html": "<code>val</code> faqat havolani qulflaydi: unga boshqa obyekt berib bo'lmaydi. Lekin <code>val royxat = mutableListOf(1, 2)</code> qilsangiz, royxat ichidagi elementlarni o'zgartirish mumkin. O'zgarmas ro'yxat kerak bo'lsa, <code>listOf()</code> ishlating."
        }
      ],
      "quiz": [
        {
          "q": "Qiymati keyinchalik o'zgarmaydigan havola qaysi kalit so'z bilan yaratiladi?",
          "options": [
            "var",
            "val",
            "let",
            "const"
          ],
          "answer": 1,
          "explain": "val bilan bog'langan havola boshqa qiymatga o'zgartirilmaydi."
        },
        {
          "q": "\"Salom, $ism\" yozuvi nima qiladi?",
          "options": [
            "Xato beradi",
            "ism qiymatini matnga qo'shadi",
            "Faqat $ism matnini chiqaradi",
            "ismni o'chiradi"
          ],
          "answer": 1,
          "explain": "$ism string shabloni bo'lib, o'zgaruvchi qiymatini matnga joylaydi."
        },
        {
          "q": "val narx = 4.8; da narx qanday tip oladi?",
          "options": [
            "Int",
            "Float",
            "Double",
            "String"
          ],
          "answer": 2,
          "explain": "Kotlin kasr sonni sukut bo'yicha Double deb qabul qiladi."
        }
      ]
    },
    {
      "id": 3,
      "title": "Shartlar: if ifodasi va when",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da <code>if</code> nafaqat buyruq, balki <b>ifoda</b> (expression) hamdir: u qiymat qaytaradi. Shuning uchun natijani to'g'ridan-to'g'ri o'zgaruvchiga yoki <code>return</code> ga berish mumkin. <code>when</code> esa ko'p variantli tanlov uchun qulay."
        },
        {
          "type": "code",
          "title": "daraja.kt",
          "code": "fun daraja(ball: Int): String {\n    return if (ball >= 90) {\n        \"A\"\n    } else if (ball >= 80) {\n        \"B\"\n    } else if (ball >= 70) {\n        \"C\"\n    } else {\n        \"D\"\n    }\n}\n\nfun main() {\n    println(daraja(85))\n    println(daraja(64))\n}",
          "output": "B\nD"
        },
        {
          "type": "p",
          "html": "<code>when</code> bir nechta shartni ketma-ket tekshiradi. Oddiy qiymatlar, oraliqlar (<code>in 500..599</code>) va murakkab shartlar bilan ishlaydi. Har bir tarmoq <code>-&gt;</code> belgisidan keyin ifoda qaytaradi."
        },
        {
          "type": "code",
          "title": "holat.kt",
          "code": "fun holat(kod: Int): String = when (kod) {\n    200 -> \"OK\"\n    404 -> \"Topilmadi\"\n    in 500..599 -> \"Server xatosi\"\n    else -> \"Noma'lum\"\n}\n\nfun main() {\n    println(holat(200))\n    println(holat(404))\n    println(holat(503))\n}",
          "output": "OK\nTopilmadi\nServer xatosi"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Qachon ishlatiladi"
          ],
          "rows": [
            [
              "<code>if / else if / else</code>",
              "Ikki-uch variant va mantiqiy shartlar"
            ],
            [
              "<code>when (qiymat)</code>",
              "Ko'p aniq variantlar"
            ],
            [
              "<code>in 1..10</code>",
              "Qiymat oraliqda ekanini tekshirish"
            ],
            [
              "<code>else</code>",
              "when ifoda bo'lsa, qolgan holatlar uchun"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "when va enum",
          "html": "Enum yoki sealed klass ustida <code>when</code> ishlatilsa va barcha variantlar qoplansa, <code>else</code> shart emas. Kotlin kompilyatori qolgan variantni bilsa, uni qo'shishni talab qiladi — bu yangi holat qo'shilganda xatoni darhol ko'rsatadi."
        }
      ],
      "quiz": [
        {
          "q": "Kotlin'da if nimasi bilan JavaScript'nikidan farq qiladi?",
          "options": [
            "Faqat true qabul qiladi",
            "Qiymat qaytaradigan ifodadir",
            "else talab qilmaydi",
            "Faqat sonlar bilan ishlaydi"
          ],
          "answer": 1,
          "explain": "Kotlin'da if expression hisoblanadi, shuning uchun natijani o'zgaruvchiga berish mumkin."
        },
        {
          "q": "when ichida in 500..599 nimani tekshiradi?",
          "options": [
            "500 va 599 ni alohida",
            "500 dan 599 gacha oraliqni",
            "599 dan katta sonlarni",
            "Faqat 500 ni"
          ],
          "answer": 1,
          "explain": ".. operatori ikkala chegarani ham o'z ichiga olgan oraliq yaratadi."
        },
        {
          "q": "when ifoda sifatida ishlatilganda qaysi tarmoq majburiy bo'lishi mumkin?",
          "options": [
            "break",
            "return",
            "else",
            "default"
          ],
          "answer": 2,
          "explain": "Barcha holatlar qoplanmasa, ifoda qiymat qaytarishi uchun else tarmog'i kerak bo'ladi."
        }
      ]
    },
    {
      "id": 4,
      "title": "Tsikllar va oraliqlar",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da <code>for</code> kolleksiya yoki oraliq bo'ylab yuradi, <code>while</code> esa shart rost bo'lguncha takrorlaydi. Oraliqlar <code>..</code>, <code>until</code>, <code>downTo</code> va <code>step</code> bilan quriladi."
        },
        {
          "type": "code",
          "title": "tsikl.kt",
          "code": "fun main() {\n    for (i in 1..5) {\n        println(\"Qadam: $i\")\n    }\n\n    for (i in 5 downTo 1 step 2) {\n        println(\"Orqaga: $i\")\n    }\n\n    var son = 3\n    while (son > 0) {\n        println(\"Qoldi: $son\")\n        son--\n    }\n}",
          "output": "Qadam: 1\nQadam: 2\nQadam: 3\nQadam: 4\nQadam: 5\nOrqaga: 5\nOrqaga: 3\nOrqaga: 1\nQoldi: 3\nQoldi: 2\nQoldi: 1"
        },
        {
          "type": "p",
          "html": "Massiv yoki ro'yxat elementlarini ko'rish uchun <code>for (ism in ismlar)</code> yoziladi. <code>break</code> tsiklni butunlay to'xtatadi, <code>continue</code> esa joriy qadamni o'tkazib yuboradi."
        },
        {
          "type": "code",
          "title": "break-continue.kt",
          "code": "fun main() {\n    for (i in 1..10) {\n        if (i == 3) continue\n        if (i == 6) break\n        println(i)\n    }\n\n    val ismlar = listOf(\"Ali\", \"Aziza\")\n    for (ism in ismlar) {\n        println(\"Salom, $ism\")\n    }\n}",
          "output": "1\n2\n4\n5\nSalom, Ali\nSalom, Aziza"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Natija"
          ],
          "rows": [
            [
              "<code>1..5</code>",
              "1, 2, 3, 4, 5 (ikkalasi kiradi)"
            ],
            [
              "<code>1 until 5</code>",
              "1, 2, 3, 4 (oxirgisi kirmaydi)"
            ],
            [
              "<code>5 downTo 1</code>",
              "5, 4, 3, 2, 1"
            ],
            [
              "<code>1..10 step 2</code>",
              "1, 3, 5, 7, 9"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "repeat va while",
          "html": "Aniq sondagi takror uchun <code>repeat(3) { println(it) }</code> qisqa yozuv mavjud; <code>it</code> 0 dan boshlanadi. <code>do { ... } while (shart)</code> esa kamida bir marta bajariladi. Har doim tsikl tugash shartini tekshirib yozing."
        }
      ],
      "quiz": [
        {
          "q": "1 until 5 oraliq qaysi sonlarni beradi?",
          "options": [
            "1, 2, 3, 4, 5",
            "1, 2, 3, 4",
            "0, 1, 2, 3, 4",
            "5, 4, 3, 2, 1"
          ],
          "answer": 1,
          "explain": "until oxirgi chegarani kiritmaydi, shuning uchun 1..4 qoladi."
        },
        {
          "q": "5 downTo 1 step 2 ketma-ketligi qanday?",
          "options": [
            "5, 3, 1",
            "5, 4, 3, 2, 1",
            "1, 3, 5",
            "5, 2, 1"
          ],
          "answer": 0,
          "explain": "downTo kamayish tartibini, step 2 esa har ikkinchi sonni beradi: 5, 3, 1."
        },
        {
          "q": "continue operatori nima qiladi?",
          "options": [
            "Tsiklni to'xtatadi",
            "Joriy qadamni o'tkazib yuboradi",
            "Dasturni tugatadi",
            "Shartni o'zgartiradi"
          ],
          "answer": 1,
          "explain": "continue joriy aylanishning qolgan qismini tashlab, keyingi qadamga o'tadi."
        }
      ]
    },
    {
      "id": 5,
      "title": "Funksiyalar, standart argumentlar va lambdalar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya <code>fun</code> kalit so'zi bilan e'lon qilinadi. Parametrga standart qiymat berish, argumentlarni nomi bilan uzatish va <code>vararg</code> bilan o'zgaruvchan son olish mumkin. Qaytish tipi ko'rsatilmasa, Kotlin uni o'zi aniqlaydi."
        },
        {
          "type": "code",
          "title": "funksiya.kt",
          "code": "fun salomlash(ism: String, familiya: String = \"Karimov\"): String {\n    return \"Salom, $ism $familiya!\"\n}\n\nfun yigindi(vararg sonlar: Int): Int {\n    var jami = 0\n    for (son in sonlar) {\n        jami += son\n    }\n    return jami\n}\n\nfun main() {\n    println(salomlash(\"Aziza\"))\n    println(salomlash(familiya = \"Aliyeva\", ism = \"Dilnoza\"))\n    println(yigindi(1, 2, 3, 4))\n}",
          "output": "Salom, Aziza Karimov!\nSalom, Dilnoza Aliyeva!\n10"
        },
        {
          "type": "p",
          "html": "<b>Lambda</b> — nomlanmagan funksiya: <code>{ n -&gt; n * n }</code>. Uni o'zgaruvchiga saqlash yoki boshqa funksiyaga argument sifatida berish mumkin. Bitta parametrli lambda ichida u <code>it</code> deb ataladi."
        },
        {
          "type": "code",
          "title": "lambda.kt",
          "code": "fun main() {\n    val kvadrat: (Int) -> Int = { n -> n * n }\n    val qosh: (Int, Int) -> Int = { a, b -> a + b }\n    val ismlar = listOf(\"ali\", \"aziza\", \"bek\")\n\n    println(kvadrat(6))\n    println(qosh(4, 5))\n    println(ismlar.map { it.uppercase() })\n    println(ismlar.filter { it.length > 3 })\n}",
          "output": "36\n9\n[ALI, AZIZA, BEK]\n[aziza]"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>ism: String</code>",
              "Majburiy parametr"
            ],
            [
              "<code>familiya: String = \"Karimov\"</code>",
              "Standart qiymat"
            ],
            [
              "<code>salomlash(ism = \"Ali\")</code>",
              "Nomi bilan argument uzatish"
            ],
            [
              "<code>vararg sonlar: Int</code>",
              "Istalgan sondagi argumentlar"
            ],
            [
              "<code>(Int) -&gt; Int</code>",
              "Funksiya tipi: Int qabul qilib, Int qaytaradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Trailing lambda",
          "html": "Oxirgi parametr funksiya bo'lsa, lambda qavsdan tashqarida yoziladi: <code>ismlar.map { it.length }</code>. Bu Kotlin'ning eng ko'p ishlatiladigan uslublaridan biri. Qiymat qaytarmaydigan funksiyalar <code>Unit</code> qaytaradi."
        }
      ],
      "quiz": [
        {
          "q": "Standart qiymatli parametrga argument berilmasa nima bo'ladi?",
          "options": [
            "Xato chiqadi",
            "Standart qiymat ishlatiladi",
            "null beriladi",
            "Funksiya ishlamaydi"
          ],
          "answer": 1,
          "explain": "Argument uzatilmasa, parametrning standart qiymati qo'llanadi."
        },
        {
          "q": "Nomi bilan argument uzatish nimani beradi?",
          "options": [
            "Argument tartibini o'zgartirish imkonini",
            "Funksiyani tezlashtiradi",
            "Tipni o'zgartiradi",
            "Standart qiymatni o'chiradi"
          ],
          "answer": 0,
          "explain": "nom = qiymat yozuvi argumentlarni nom bo'yicha moslaydi, tartib muhim bo'lmaydi."
        },
        {
          "q": "Bitta parametrli lambdada parametrning standart nomi qanday?",
          "options": [
            "this",
            "arg",
            "it",
            "param"
          ],
          "answer": 2,
          "explain": "Bitta parametr ko'rsatilmasa, lambda ichida u it deb ataladi."
        }
      ]
    },
    {
      "id": 6,
      "title": "Kolleksiyalar: List, MutableList, Map, Set",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin kolleksiyalari ikki guruhga bo'linadi: faqat o'qish uchun (<code>List</code>, <code>Map</code>, <code>Set</code>) va o'zgartirish mumkin bo'lgan (<code>MutableList</code>, <code>MutableMap</code>, <code>MutableSet</code>). Chegarani tip darajasida ko'rsatish kodni xavfsiz qiladi."
        },
        {
          "type": "code",
          "title": "kolleksiya.kt",
          "code": "fun main() {\n    val ismlar = listOf(\"Ali\", \"Aziza\", \"Bek\")\n    val sonlar = mutableListOf(10, 20, 30)\n    sonlar.add(40)\n\n    val baholar = mapOf(\"Aziza\" to 92, \"Bek\" to 78)\n    val unik = setOf(1, 2, 2, 3)\n\n    println(ismlar)\n    println(sonlar)\n    println(baholar[\"Aziza\"])\n    println(unik)\n}",
          "output": "[Ali, Aziza, Bek]\n[10, 20, 30, 40]\n92\n[1, 2, 3]"
        },
        {
          "type": "p",
          "html": "<code>map</code>, <code>filter</code>, <code>sorted</code>, <code>sum</code> kabi funksiyalar yangi natija qaytaradi va asl kolleksiyani o'zgartirmaydi. Map elementlarini <code>for ((kalit, qiymat) in mapa)</code> ko'rinishida ochib olish mumkin."
        },
        {
          "type": "code",
          "title": "amallar.kt",
          "code": "fun main() {\n    val sonlar = listOf(5, 3, 8, 1)\n    println(sonlar.sorted())\n    println(sonlar.sum())\n    println(sonlar.map { it * 2 })\n\n    val m = mutableMapOf<String, Int>()\n    m[\"Aziza\"] = 92\n    m[\"Bek\"] = 78\n    m[\"Aziza\"] = 95\n    println(m)\n\n    for ((ism, ball) in m) {\n        println(\"$ism: $ball\")\n    }\n}",
          "output": "[1, 3, 5, 8]\n17\n[10, 6, 16, 2]\n{Aziza=95, Bek=78}\nAziza: 95\nBek: 78"
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
              "Saqlanadi",
              "Ruxsat etiladi"
            ],
            [
              "<code>Set</code>",
              "Odatda saqlanadi",
              "Taqiqlanadi"
            ],
            [
              "<code>Map</code>",
              "Kalitlar tartibi",
              "Kalitlar noyob"
            ],
            [
              "<code>MutableList</code>",
              "Saqlanadi",
              "Ruxsat etiladi, o'zgartirish mumkin"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Map'dan xavfsiz o'qish",
          "html": "<code>map[\"kalit\"]</code> mavjud bo'lmagan kalit uchun <code>null</code> qaytaradi. Zaxira qiymat kerak bo'lsa, <code>map.getOrElse(\"kalit\") { 0 }</code> yoki <code>map[\"kalit\"] ?: 0</code> ishlatiladi. <code>getValue()</code> esa kalit bo'lmasa xato tashlaydi."
        }
      ],
      "quiz": [
        {
          "q": "listOf() bilan yaratilgan ro'yxatni o'zgartirish mumkinmi?",
          "options": [
            "Ha, add() ishlaydi",
            "Yo'q, faqat o'qish uchun",
            "Faqat birinchi elementni",
            "Faqat o'chirish mumkin"
          ],
          "answer": 1,
          "explain": "listOf read-only List qaytaradi; o'zgartirish uchun mutableListOf kerak."
        },
        {
          "q": "Map'da mavjud bo'lmagan kalit bilan murojaat qilinsa nima qaytadi?",
          "options": [
            "0",
            "null",
            "Xato",
            "Bo'sh matn"
          ],
          "answer": 1,
          "explain": "Map indeks operatori topilmagan kalit uchun null qaytaradi."
        },
        {
          "q": "setOf(1, 2, 2, 3) natijasida nechta element bo'ladi?",
          "options": [
            "4",
            "3",
            "2",
            "1"
          ],
          "answer": 1,
          "explain": "Set takrorlanuvchi qiymatlarni saqlamaydi, natija [1, 2, 3] bo'ladi."
        }
      ]
    },
    {
      "id": 7,
      "title": "Null safety: ?., ?: va lateinit",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da <code>String</code> va <code>String?</code> — ikki xil tip. Oddiy tipga <code>null</code> berib bo'lmaydi; bu <b>null safety</b> ning asosi. Null bo'lishi mumkin bo'lgan qiymat bilan ishlash uchun xavfsiz chaqiruv yoki zaxira qiymat ishlatiladi."
        },
        {
          "type": "code",
          "title": "null.kt",
          "code": "fun main() {\n    val ism: String? = null\n    println(ism?.length)\n    println(ism ?: \"Mehmon\")\n\n    val uzunlik = ism?.length ?: 0\n    println(uzunlik)\n\n    val shahar: String? = \"Toshkent\"\n    println(shahar?.uppercase())\n}",
          "output": "null\nMehmon\n0\nTOSHKENT"
        },
        {
          "type": "p",
          "html": "<code>?.</code> — xavfsiz chaqiruv: obyekt null bo'lsa, natija ham null bo'ladi. <code>?:</code> — Elvis operatori: chap tomon null bo'lsa, o'ng tomondagi zaxira qiymat olinadi. <code>!!</code> esa null bo'lsa xato tashlaydi, shuning uchun undan ehtiyotkorlik bilan foydalaning."
        },
        {
          "type": "code",
          "title": "lateinit.kt",
          "code": "class Foydalanuvchi {\n    lateinit var ism: String\n\n    fun tayyorla() {\n        ism = \"Aziza\"\n    }\n}\n\nfun main() {\n    val f = Foydalanuvchi()\n    f.tayyorla()\n    println(f.ism)\n\n    val matn: String? = \"Kotlin\"\n    if (matn != null) {\n        println(matn.length)\n    }\n}",
          "output": "Aziza\n6"
        },
        {
          "type": "table",
          "head": [
            "Operator",
            "Ma'nosi",
            "Misol"
          ],
          "rows": [
            [
              "<code>?</code>",
              "Tip null bo'lishi mumkin",
              "<code>String?</code>"
            ],
            [
              "<code>?.</code>",
              "Xavfsiz chaqiruv",
              "<code>ism?.length</code>"
            ],
            [
              "<code>?:</code>",
              "Null bo'lsa zaxira qiymat",
              "<code>ism ?: \"Mehmon\"</code>"
            ],
            [
              "<code>!!</code>",
              "Null bo'lsa xato tashlaydi",
              "<code>ism!!.length</code>"
            ],
            [
              "<code>lateinit</code>",
              "Keyinroq majburiy beriladigan var",
              "<code>lateinit var ism: String</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "!! dan qoching",
          "html": "<code>!!</code> xatoni yashirmaydi, faqat uni keyinroq portlatadi. Null bo'lishi mumkin bo'lgan qiymat uchun <code>?.</code>, <code>?:</code> yoki <code>if (x != null)</code> ishlating. <code>lateinit</code> faqat <code>var</code>, null bo'lmagan va primitiv bo'lmagan tipga qo'llanadi; ishlatishdan oldin qiymat berilganiga ishonch hosil qiling."
        }
      ],
      "quiz": [
        {
          "q": "ism null bo'lganda ism?.length qanday natija beradi?",
          "options": [
            "0",
            "null",
            "Xato",
            "undefined"
          ],
          "answer": 1,
          "explain": "?. xavfsiz chaqiruv null ni tarqatadi, shuning uchun natija null bo'ladi."
        },
        {
          "q": "?: operatori nima qiladi?",
          "options": [
            "Null bo'lsa zaxira qiymat qaytaradi",
            "Null ni xatoga aylantiradi",
            "Tipni o'zgartiradi",
            "Ikki qiymatni qo'shadi"
          ],
          "answer": 0,
          "explain": "Elvis operatori chap qiymat null bo'lganda o'ng tomondagi zaxirani beradi."
        },
        {
          "q": "Null qiymatga !! qo'llansa nima bo'ladi?",
          "options": [
            "null qaytadi",
            "NullPointerException tashlanadi",
            "0 bo'ladi",
            "Kompilyatsiya xatosi"
          ],
          "answer": 1,
          "explain": "!! null bo'lsa ish vaqtida NullPointerException tashlaydi."
        }
      ]
    },
    {
      "id": 8,
      "title": "Klasslar, konstruktorlar va data class",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Klass <code>class</code> kalit so'zi bilan yaratiladi. Asosiy konstruktor klass sarlavhasida turadi, uning parametrlari <code>val</code> yoki <code>var</code> bilan xossaga aylanadi. <code>private</code> esa ichki holatni tashqaridan yashiradi."
        },
        {
          "type": "code",
          "title": "hisob.kt",
          "code": "class Hisob(private var balans: Int) {\n    fun oshir(qiymat: Int) {\n        balans += qiymat\n    }\n\n    fun korish(): Int = balans\n}\n\nfun main() {\n    val hisob = Hisob(100)\n    hisob.oshir(50)\n    println(hisob.korish())\n}",
          "output": "150"
        },
        {
          "type": "p",
          "html": "<code>data class</code> ma'lumot saqlash uchun mo'ljallangan: u <code>toString()</code>, <code>equals()</code>, <code>hashCode()</code> va <code>copy()</code> funksiyalarini avtomatik yaratadi. Bu model obyektlari uchun juda qulay."
        },
        {
          "type": "code",
          "title": "data.kt",
          "code": "data class Talaba(val ism: String, val yosh: Int, val ball: Int = 0)\n\nfun main() {\n    val a = Talaba(\"Aziza\", 16, 92)\n    val b = a.copy(ball = 95)\n\n    println(a)\n    println(b)\n    println(a == Talaba(\"Aziza\", 16, 92))\n\n    val (ism, yosh) = b\n    println(\"$ism — $yosh\")\n}",
          "output": "Talaba(ism=Aziza, yosh=16, ball=92)\nTalaba(ism=Aziza, yosh=16, ball=95)\ntrue\nAziza — 16"
        },
        {
          "type": "table",
          "head": [
            "Xususiyat",
            "Oddiy class",
            "data class"
          ],
          "rows": [
            [
              "<code>toString()</code>",
              "Manzilga o'xshash matn",
              "Maydonlar bilan o'qishli"
            ],
            [
              "<code>equals()</code>",
              "Havola bo'yicha",
              "Qiymatlar bo'yicha"
            ],
            [
              "<code>copy()</code>",
              "Yo'q",
              "Avtomatik mavjud"
            ],
            [
              "Destructuring",
              "Yo'q",
              "Ha"
            ],
            [
              "Asosiy maqsad",
              "Xatti-harakat",
              "Ma'lumot modeli"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "init va qo'shimcha konstruktor",
          "html": "<code>init { ... }</code> bloki asosiy konstruktordan keyin ishlaydi va tekshiruvlar uchun qulay. Qo'shimcha konstruktor <code>constructor(...) : this(...)</code> ko'rinishida yoziladi. Parametr oldiga <code>val/var</code> qo'yilmasa, u faqat konstruktor ichida mavjud bo'ladi, klass xossasiga aylanmaydi."
        }
      ],
      "quiz": [
        {
          "q": "data class avtomatik qaysi funksiyani yaratadi?",
          "options": [
            "main()",
            "copy()",
            "println()",
            "readLine()"
          ],
          "answer": 1,
          "explain": "data class copy(), equals(), hashCode() va toString() ni generatsiya qiladi."
        },
        {
          "q": "Klassning asosiy konstruktori qayerda yoziladi?",
          "options": [
            "Klass sarlavhasida",
            "Faqat init blokida",
            "main ichida",
            "Alohida faylda"
          ],
          "answer": 0,
          "explain": "Asosiy konstruktor klass nomidan keyin qavs ichida, sarlavhada yoziladi."
        },
        {
          "q": "Konstruktorda private var balans bo'lsa, unga tashqaridan murojaat qilish mumkinmi?",
          "options": [
            "Ha, har doim",
            "Yo'q, faqat klass ichida",
            "Faqat meros oluvchida",
            "Faqat main'da"
          ],
          "answer": 1,
          "explain": "private xossa faqat o'sha klass ichida ko'rinadi."
        }
      ]
    },
    {
      "id": 9,
      "title": "Meros, interfeyslar va sealed klasslar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da klasslar sukut bo'yicha <b>final</b> — ulardan meros olish uchun <code>open</code> kerak. Interfeys esa shartnoma beradi: uni bir nechta klass bajarishi mumkin. Metodni qayta yozishda <code>override</code> majburiy."
        },
        {
          "type": "code",
          "title": "meros.kt",
          "code": "interface Shakl {\n    val nom: String\n    fun yuza(): Double\n}\n\nopen class Tortburchak(\n    val en: Double,\n    val boy: Double,\n) : Shakl {\n    override val nom: String = \"To'rtburchak\"\n\n    override fun yuza(): Double = en * boy\n}\n\nfun main() {\n    val shakl: Shakl = Tortburchak(4.0, 5.0)\n    println(\"${shakl.nom}: ${shakl.yuza()}\")\n}",
          "output": "To'rtburchak: 20.0"
        },
        {
          "type": "p",
          "html": "<b>Sealed klass</b> cheklangan variantlar to'plamini bildiradi. Uning barcha avlodlari bir faylda e'lon qilinadi, shuning uchun <code>when</code> barcha holatlarni tekshirib, <code>else</code> siz ham to'liq bo'ladi. Bu xatolarni kompilyatsiya vaqtida ushlaydi."
        },
        {
          "type": "code",
          "title": "sealed.kt",
          "code": "sealed class Natija {\n    data class Muvaffaqiyat(val qiymat: Int) : Natija()\n    data class Xato(val xabar: String) : Natija()\n}\n\nfun izohla(natija: Natija): String = when (natija) {\n    is Natija.Muvaffaqiyat -> \"Natija: ${natija.qiymat}\"\n    is Natija.Xato -> \"Xato: ${natija.xabar}\"\n}\n\nfun main() {\n    println(izohla(Natija.Muvaffaqiyat(42)))\n    println(izohla(Natija.Xato(\"Fayl topilmadi\")))\n}",
          "output": "Natija: 42\nXato: Fayl topilmadi"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>open</code>",
              "Klass yoki metodni meros uchun ochadi"
            ],
            [
              "<code>override</code>",
              "Ota klassdagi a'zoni qayta yozadi"
            ],
            [
              "<code>interface</code>",
              "Shartnoma; metodlar standart tanaga ega bo'lishi mumkin"
            ],
            [
              "<code>abstract</code>",
              "Nusxa olmaydigan, lekin meros beriladigan klass"
            ],
            [
              "<code>sealed</code>",
              "Cheklangan avlodlar to'plami"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Ota metodni chaqirish",
          "html": "Qayta yozilgan metod ichida ota klass versiyasini <code>super.metod()</code> bilan chaqirish mumkin. Klass sarlavhasida avval ota klass, keyin interfeyslar yoziladi: <code>class A : B(), C</code>. Interfeyslarda qavs yo'q, chunki ular konstruktorga ega emas."
        }
      ],
      "quiz": [
        {
          "q": "Klassdan meros olish uchun nima qilish kerak?",
          "options": [
            "Klassni abstract qilish",
            "Klassni open deb belgilash",
            "Interfeysga aylantirish",
            "data class qilish"
          ],
          "answer": 1,
          "explain": "Kotlin klasslari sukut bo'yicha final; meros uchun open kerak."
        },
        {
          "q": "Sealed klass when bilan ishlatilganda nimasi qulay?",
          "options": [
            "else shart emas, barcha variantlar ma'lum",
            "Null bo'lishi mumkin emas",
            "Har doim tezroq ishlaydi",
            "Interfeysga aylanadi"
          ],
          "answer": 0,
          "explain": "Sealed klass avlodlari cheklangan bo'lgani uchun when to'liqligini kompilyator tekshiradi."
        },
        {
          "q": "Interfeys metodini klassda qayta yozish uchun qaysi kalit so'z ishlatiladi?",
          "options": [
            "override",
            "open",
            "super",
            "extend"
          ],
          "answer": 0,
          "explain": "override qayta yozilayotgan a'zoni belgilaydi."
        }
      ]
    },
    {
      "id": 10,
      "title": "Xatolar va fayllar bilan ishlash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Xatolar <code>try / catch / finally</code> bilan ushlanadi. Kotlin'da tekshiriladigan (checked) istisnolar yo'q, shuning uchun har bir chaqiruvni o'rash shart emas. <code>require()</code> noto'g'ri argumentni darhol xatoga aylantiradi."
        },
        {
          "type": "code",
          "title": "xato.kt",
          "code": "fun bolish(a: Int, b: Int): Int {\n    require(b != 0) { \"Bo'luvchi nol bo'lmasin\" }\n    return a / b\n}\n\nfun main() {\n    try {\n        println(bolish(10, 2))\n        println(bolish(5, 0))\n    } catch (xato: IllegalArgumentException) {\n        println(\"Xato: ${xato.message}\")\n    } finally {\n        println(\"Tugadi\")\n    }\n}",
          "output": "5\nXato: Bo'luvchi nol bo'lmasin\nTugadi"
        },
        {
          "type": "p",
          "html": "Fayl bilan ishlash uchun JVM'dagi <code>java.io.File</code> ishlatiladi: <code>writeText()</code> yozadi, <code>readText()</code> o'qiydi, <code>readLines()</code> qatorlar ro'yxatini beradi. Katta fayllarni bo'laklab o'qish uchun <code>useLines()</code> qulay."
        },
        {
          "type": "code",
          "title": "fayl.kt",
          "code": "import java.io.File\n\nfun main() {\n    val fayl = File(\"vazifalar.txt\")\n    val matn = \"\"\"\n        Kotlin asoslari\n        Coroutines asoslari\n    \"\"\".trimIndent()\n\n    fayl.writeText(matn)\n    val satrlar = fayl.readLines()\n\n    println(satrlar.size)\n    for (satr in satrlar) {\n        println(\"- $satr\")\n    }\n    fayl.delete()\n}",
          "output": "2\n- Kotlin asoslari\n- Coroutines asoslari"
        },
        {
          "type": "table",
          "head": [
            "Blok",
            "Qachon ishlaydi"
          ],
          "rows": [
            [
              "<code>try</code>",
              "Xavfli kod bajariladi"
            ],
            [
              "<code>catch</code>",
              "Mos istisno ushlanganda"
            ],
            [
              "<code>finally</code>",
              "Har qanday holatda, oxirida"
            ],
            [
              "<code>throw</code>",
              "Yangi istisno tashlaydi"
            ],
            [
              "<code>use</code>",
              "Resursni avtomatik yopadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xatoni yutib yubormang",
          "html": "Bo'sh <code>catch</code> xatoni jimgina yashiradi va keyin tushunarsiz muammoga aylanadi. Xabarni kamida logga yozing yoki qayta <code>throw</code> qiling. Fayl oqimlari uchun <code>use { ... }</code> ishlating — u istisno bo'lsa ham resursni yopadi."
        }
      ],
      "quiz": [
        {
          "q": "finally bloki qachon bajariladi?",
          "options": [
            "Faqat xato bo'lsa",
            "Faqat xato bo'lmasa",
            "Har qanday holatda",
            "Hech qachon"
          ],
          "answer": 2,
          "explain": "finally try muvaffaqiyatli yoki xato bilan tugashidan qat'i nazar bajariladi."
        },
        {
          "q": "require(b != 0) shart bajarilmasa qanday istisno tashlaydi?",
          "options": [
            "NullPointerException",
            "IllegalArgumentException",
            "IOException",
            "Error"
          ],
          "answer": 1,
          "explain": "require noto'g'ri argument uchun IllegalArgumentException tashlaydi."
        },
        {
          "q": "File.readLines() qanday natija qaytaradi?",
          "options": [
            "String",
            "List<String>",
            "Int",
            "Boolean"
          ],
          "answer": 1,
          "explain": "readLines fayldagi qatorlardan iborat List<String> qaytaradi."
        }
      ]
    },
    {
      "id": 11,
      "title": "Coroutines asoslari",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Coroutine</b> — uzoq ishlarni bloklamasdan bajarish usuli. <code>suspend</code> funksiya kutish paytida oqimni bo'shatadi, <code>launch</code> fon vazifasini boshlaydi, <code>async</code> esa natijali parallel ish uchun <code>Deferred</code> qaytaradi."
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>suspend</code>",
              "Kutish mumkin bo'lgan funksiyani belgilaydi"
            ],
            [
              "<code>launch</code>",
              "Natijasiz fonda ish boshlaydi"
            ],
            [
              "<code>async</code>",
              "Natijali ish boshlab, Deferred qaytaradi"
            ],
            [
              "<code>delay()</code>",
              "Oqimni bloklamasdan kutadi"
            ],
            [
              "<code>runBlocking</code>",
              "Oddiy main uchun coroutine doirasini yaratadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "coroutine.kt",
          "code": "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    launch {\n        delay(100)\n        println(\"Fon vazifasi tugadi\")\n    }\n    println(\"Asosiy kod davom etdi\")\n}",
          "output": "Asosiy kod davom etdi\nFon vazifasi tugadi"
        },
        {
          "type": "p",
          "html": "Bu misollar uchun rasmiy <code>kotlinx-coroutines-core</code> kutubxonasi kerak. Gradle'da <code>implementation(\"org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.2\")</code> qo'shiladi. IntelliJ IDEA'da Gradle loyihasi bu bog'liqlikni o'zi yuklab oladi."
        },
        {
          "type": "code",
          "title": "async.kt",
          "code": "import kotlinx.coroutines.*\n\nsuspend fun yukla(nom: String): String {\n    delay(50)\n    return \"$nom tayyor\"\n}\n\nfun main() = runBlocking {\n    val natijalar = listOf(\"A\", \"B\").map { nom ->\n        async { yukla(nom) }\n    }.awaitAll()\n    println(natijalar)\n}",
          "output": "[A tayyor, B tayyor]"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qayerda ishlatiladi?",
          "html": "Tarmoq so'rovi, ma'lumot bazasi va fayl o'qish kabi kutish ishlarida coroutines UI'ni qotirmaydi. Android'da <code>runBlocking</code> o'rniga <code>lifecycleScope</code> yoki <code>viewModelScope</code> ishlatiladi. <code>runBlocking</code> faqat demo va testlarda mos."
        }
      ],
      "quiz": [
        {
          "q": "suspend funksiya ichida qaysi funksiyani chaqirish mumkin?",
          "options": [
            "Faqat println",
            "delay kabi suspend funksiyalarni",
            "Faqat Thread.sleep",
            "Hech qanday funksiyani"
          ],
          "answer": 1,
          "explain": "suspend funksiya boshqa suspend funksiyalarni chaqira oladi; delay ham shular qatorida."
        },
        {
          "q": "async va launch orasidagi asosiy farq nima?",
          "options": [
            "async natija qaytaradi, launch qaytarmaydi",
            "launch tezroq",
            "async faqat Android'da ishlaydi",
            "Farqi yo'q"
          ],
          "answer": 0,
          "explain": "async Deferred qaytaradi, undan await() bilan natija olinadi; launch natija qaytarmaydi."
        },
        {
          "q": "runBlocking qanday maqsadda ishlatiladi?",
          "options": [
            "Har doim productionda",
            "Main yoki testda coroutine doirasini yaratish uchun",
            "Fayl o'qish uchun",
            "UI'ni tezlashtirish uchun"
          ],
          "answer": 1,
          "explain": "runBlocking joriy oqimni to'xtatib, coroutine tugashini kutadi; asosan demo va testlarda ishlatiladi."
        }
      ]
    },
    {
      "id": 12,
      "title": "Mini loyiha: konsol vazifa menejeri",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi o'rganganlarimizni birlashtiramiz: <code>data class</code>, <code>MutableList</code>, klass metodlari va null safety bilan konsolda ishlaydigan vazifa menejerini yasaymiz. Barcha kod <code>Vazifa.kt</code> faylida."
        },
        {
          "type": "code",
          "title": "Vazifa.kt",
          "code": "data class Vazifa(val id: Int, val nom: String, var bajarildi: Boolean = false)\n\nclass VazifaRoyxati {\n    private val vazifalar = mutableListOf<Vazifa>()\n    private var keyingiId = 1\n\n    fun qosh(nom: String): Vazifa {\n        val vazifa = Vazifa(keyingiId, nom)\n        keyingiId++\n        vazifalar.add(vazifa)\n        return vazifa\n    }\n\n    fun bajar(id: Int): Boolean {\n        val vazifa = vazifalar.find { it.id == id } ?: return false\n        vazifa.bajarildi = true\n        return true\n    }\n\n    fun korish() {\n        for (v in vazifalar) {\n            val belgi = if (v.bajarildi) \"[x]\" else \"[ ]\"\n            println(\"$belgi ${v.id}. ${v.nom}\")\n        }\n    }\n\n    val soni: Int\n        get() = vazifalar.size\n}\n\nfun main() {\n    val royxat = VazifaRoyxati()\n    royxat.qosh(\"Kotlin asoslarini takrorlash\")\n    royxat.qosh(\"Mini loyihani yig'ish\")\n    royxat.bajar(1)\n    royxat.korish()\n    println(\"Jami: ${royxat.soni}\")\n}",
          "output": "[x] 1. Kotlin asoslarini takrorlash\n[ ] 2. Mini loyihani yig'ish\nJami: 2"
        },
        {
          "type": "code",
          "title": "Vazifa.kt (CLI varianti)",
          "code": "fun main(args: Array<String>) {\n    val royxat = VazifaRoyxati()\n    royxat.qosh(\"Kotlin asoslarini takrorlash\")\n    royxat.qosh(\"Mini loyihani yig'ish\")\n\n    if (args.firstOrNull() == \"bajar\") {\n        val id = args.getOrNull(1)?.toIntOrNull() ?: 0\n        println(\"Bajarildi: \" + royxat.bajar(id))\n    }\n\n    royxat.korish()\n}",
          "output": "Bajarildi: true\n[x] 1. Kotlin asoslarini takrorlash\n[ ] 2. Mini loyihani yig'ish"
        },
        {
          "type": "ul",
          "items": [
            "Model: <code>data class Vazifa</code> — id, nom va holat.",
            "Saqlash: <code>private</code> <code>MutableList</code> va <code>keyingiId</code>.",
            "Amallar: <code>qosh</code>, <code>bajar</code>, <code>korish</code>, <code>soni</code>.",
            "Ishga tushirish: <code>kotlinc Vazifa.kt -include-runtime -d Vazifa.jar</code>, so'ng <code>java -jar Vazifa.jar bajar 1</code>.",
            "CLI varianti oddiy <code>main()</code> o'rniga qo'yiladi, chunki bitta faylda bitta main bo'ladi."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Loyihani kengaytiring",
          "html": "O'chirish, muhimlik darajasi, sana va faylga saqlashni qo'shib ko'ring. Klass metodlarini kichik saqlang, holatni faqat klass ichida o'zgartiring. Keyingi qadam: yakuniy imtihon va sertifikat."
        }
      ],
      "quiz": [
        {
          "q": "VazifaRoyxati vazifalarni qayerda saqlaydi?",
          "options": [
            "Faylda",
            "private MutableList ichida",
            "Map kalitida",
            "main o'zgaruvchisida"
          ],
          "answer": 1,
          "explain": "Klass ichida private mutableListOf<Vazifa>() ishlatilgan, tashqaridan yopiq."
        },
        {
          "q": "CLI variantida argument bo'lmasa, id qanday qiymat oladi?",
          "options": [
            "null",
            "1",
            "0",
            "Xato beradi"
          ],
          "answer": 2,
          "explain": "args.getOrNull(1)?.toIntOrNull() ?: 0 ifodasi zaxira qiymat sifatida 0 beradi."
        },
        {
          "q": "bajar(id) funksiyasi nima qaytaradi?",
          "options": [
            "Vazifa",
            "Boolean",
            "String",
            "Unit"
          ],
          "answer": 1,
          "explain": "Topilsa true, topilmasa false qaytaradi."
        }
      ]
    },
    {
      "id": 13,
      "title": "Null xavfsizlik chuqur: ?., let va requireNotNull",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da <code>String</code> va <code>String?</code> — butunlay boshqa tip. Nullable tipga ega qiymat bilan ishlashdan oldin kompilyator tekshiruv talab qiladi: xavfsiz chaqiruv, Elvis operatori yoki aniq null tekshiruvi. Bu darsda zanjirli chaqiruvlar, <code>let</code>, <code>takeIf</code> va majburiy tekshiruv funksiyalarini chuqurroq ko'ramiz."
        },
        {
          "type": "code",
          "title": "manzil.kt",
          "code": "data class Manzil(val shahar: String?)\ndata class Foydalanuvchi(val ism: String, val manzil: Manzil?)\n\nfun shaharNomi(f: Foydalanuvchi): String {\n    return f.manzil?.shahar?.uppercase() ?: \"Noma'lum\"\n}\n\nfun main() {\n    val a = Foydalanuvchi(\"Aziza\", Manzil(\"Toshkent\"))\n    val b = Foydalanuvchi(\"Bek\", null)\n    println(shaharNomi(a))\n    println(shaharNomi(b))\n    println(shaharNomi(b) == \"Noma'lum\")\n}",
          "output": "TOSHKENT\nNoma'lum\ntrue"
        },
        {
          "type": "p",
          "html": "<code>f.manzil?.shahar?.uppercase()</code> zanjirida biror bo'g'in null bo'lsa, butun ifoda null qaytaradi va keyingi chaqiruv bajarilmaydi. <code>?:</code> (Elvis) esa null o'rniga zaxira qiymat beradi. <code>let</code> nullable qiymatni null bo'lmaganda ishlatish uchun qulay: <code>x?.let { ... }</code> bloki faqat x null bo'lmaganda bajariladi."
        },
        {
          "type": "code",
          "title": "qisqa.kt",
          "code": "fun qisqa(ism: String?): String {\n    val tozalangan = ism?.trim()?.takeIf { it.isNotEmpty() }\n        ?: return \"Mehmon\"\n    return tozalangan.replaceFirstChar { it.uppercase() }\n}\n\nfun main() {\n    println(qisqa(\"  aziza \"))\n    println(qisqa(\"   \"))\n    val son: Int? = null\n    println(son ?: 10)\n    println(\"42\".toIntOrNull() ?: error(\"Son kerak\"))\n}",
          "output": "Aziza\nMehmon\n10\n42"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Natija"
          ],
          "rows": [
            [
              "<code>x?.foo()</code>",
              "x null bo'lsa null, aks holda foo natijasi"
            ],
            [
              "<code>x ?: zaxira</code>",
              "x null bo'lsa zaxira qiymat"
            ],
            [
              "<code>x as? T</code>",
              "T bo'lmasa yoki null bo'lsa null"
            ],
            [
              "<code>x!!</code>",
              "null bo'lsa NullPointerException"
            ],
            [
              "<code>requireNotNull(x)</code>",
              "null bo'lsa IllegalArgumentException"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Platform tiplar",
          "html": "Java'dan qaytgan qiymat <code>String!</code> kabi platform tipga ega bo'lishi mumkin. Kompilyator bunday qiymatni null bo'lishi mumkin deb hisoblamaydi, lekin Java tomonidan null kelishi mumkin. Chegarada darhol <code>val x: String? = javaQiymat</code> deb aniq nullable tip yozing yoki <code>requireNotNull()</code> bilan tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "Zanjirli xavfsiz chaqiruvda (a?.b?.c) natija qachon null bo'ladi?",
          "options": [
            "Zanjirdagi biror bo'g'in null bo'lsa",
            "Faqat a null bo'lsa",
            "Faqat c null bo'lsa",
            "Hech qachon"
          ],
          "answer": 0,
          "explain": "Xavfsiz chaqiruv null ni zanjir bo'ylab tarqatadi, shuning uchun birinchi null bo'g'in natijani null qiladi."
        },
        {
          "q": "takeIf { it.isNotEmpty() } shart bajarilmasa nima qaytaradi?",
          "options": [
            "false",
            "null",
            "Asl qiymatni",
            "Istisno tashlaydi"
          ],
          "answer": 1,
          "explain": "takeIf shart false bo'lsa null, true bo'lsa asl qiymatni qaytaradi."
        },
        {
          "q": "requireNotNull(x) x null bo'lganda qaysi istisnoni tashlaydi?",
          "options": [
            "NullPointerException",
            "IllegalStateException",
            "IllegalArgumentException",
            "UnsupportedOperationException"
          ],
          "answer": 2,
          "explain": "requireNotNull argument tekshiruvi uchun ishlatiladi va IllegalArgumentException tashlaydi."
        }
      ]
    },
    {
      "id": 14,
      "title": "Funksiyalar chuqur: standart qiymatlar, infix va tailrec",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya parametrlariga standart qiymat berish chaqiruvni qisqartiradi, nomlangan argumentlar esa tartibni unutib yuborish xavfini kamaytiradi. <code>vararg</code> o'zgaruvchan sondagi argumentlarni qabul qiladi. Bu darsda shu vositalar, lokal funksiyalar, <code>infix</code> va <code>tailrec</code> bilan tanishamiz."
        },
        {
          "type": "code",
          "title": "buyurtma.kt",
          "code": "fun hisobla(narx: Int, soni: Int = 1, chegirma: Int = 0): Int {\n    val jami = narx * soni\n    return jami - chegirma\n}\n\nfun main() {\n    println(hisobla(12000))\n    println(hisobla(12000, 3))\n    println(hisobla(12000, chegirma = 2000, soni = 2))\n}",
          "output": "12000\n36000\n22000"
        },
        {
          "type": "p",
          "html": "Funksiya ichida yordamchi funksiya e'lon qilish mumkin — u faqat shu funksiya doirasida ko'rinadi. <b>Tail recursion</b> esa rekursiv chaqiruvni tsiklga aylantirib, stek o'sishini oldini oladi. Buning uchun <code>tailrec</code> modifikatori va rekursiv chaqiruvning funksiyadagi eng oxirgi amal bo'lishi kerak. <code>infix</code> funksiya esa <code>a op b</code> ko'rinishida o'qiladigan qisqa yozuv beradi."
        },
        {
          "type": "code",
          "title": "yigindi.kt",
          "code": "tailrec fun yigindi(n: Int, jami: Int = 0): Int =\n    if (n == 0) jami else yigindi(n - 1, jami + n)\n\ninfix fun Int.kopaytir(boshqa: Int): Int = this * boshqa\n\nfun main() {\n    fun formatla(qiymat: Int) = \"Natija: $qiymat\"\n    println(formatla(yigindi(100)))\n    println(6 kopaytir 7)\n}",
          "output": "Natija: 5050\n42"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>soni: Int = 1</code>",
              "Argument berilmasa standart qiymat ishlaydi"
            ],
            [
              "<code>hisobla(soni = 3, narx = 500)</code>",
              "Nomlangan argumentlar tartibdan qat'i nazar bog'lanadi"
            ],
            [
              "<code>vararg sonlar: Int</code>",
              "Istalgan sondagi argumentlarni qabul qiladi"
            ],
            [
              "<code>infix fun Int.kopaytir(...)</code>",
              "<code>6 kopaytir 7</code> ko'rinishidagi chaqiruv"
            ],
            [
              "<code>tailrec</code>",
              "Quyruq rekursiyani tsiklga aylantiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "vararg va spread",
          "html": "Massivni <code>vararg</code> parametrga uzatish uchun <code>*</code> operatori ishlatiladi: <code>yigindi(*sonlar)</code>. Bir nechta qiymatni qo'shish ham mumkin: <code>yigindi(*sonlar, 10)</code>. Nomlangan argumentdan keyin pozitsiyaviy argument yozib bo'lmaydi — tartibni saqlang."
        }
      ],
      "quiz": [
        {
          "q": "Standart qiymatli parametrlarni nomi bilan uzatishning asosiy foydasi nima?",
          "options": [
            "Kodni kompilyatsiyasiz ishga tushirish",
            "Argument tartibidan qat'i nazar aniq parametrga bog'lash",
            "Null qiymatlarni taqiqlash",
            "Funksiyani avtomatik inline qilish"
          ],
          "answer": 1,
          "explain": "Nomlangan argumentlar qiymatni parametr nomiga bog'laydi, shuning uchun uzun ro'yxatda xato kamayadi."
        },
        {
          "q": "Infix funksiyaning infix chaqiruv shakli qaysi?",
          "options": [
            "6.kopaytir(7)",
            "kopaytir(6, 7)",
            "6 kopaytir 7",
            "kopaytir 6, 7"
          ],
          "answer": 2,
          "explain": "Infix chaqiruvda nuqta va qavs yozilmaydi: chap operand, funksiya nomi va o'ng operand."
        },
        {
          "q": "tailrec optimizatsiyasi qanday shartda qo'llanadi?",
          "options": [
            "Funksiya inline bo'lsa",
            "Barcha parametrlar standart qiymatga ega bo'lsa",
            "Funksiya qaytish tipini ko'rsatmasa",
            "Rekursiv chaqiruv funksiyaning oxirgi amali bo'lsa"
          ],
          "answer": 3,
          "explain": "Kompilyator rekursiv chaqiruvdan keyin boshqa ish bo'lmasa uni tsiklga aylantira oladi."
        }
      ]
    },
    {
      "id": 15,
      "title": "Klasslar chuqur: init, konstruktorlar va xossalar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Klassning asosiy konstruktori sarlavhada turadi, <code>init</code> bloki esa obyekt yaratilganda tekshiruvlar bajaradi. Qo'shimcha konstruktor <code>: this(...)</code> orqali asosiysiga delegatsiya qiladi. Xossaga maxsus getter va setter yozish, shuningdek <code>private set</code> bilan yozishni yopish mumkin."
        },
        {
          "type": "code",
          "title": "hisob.kt",
          "code": "class Hisob(val egasi: String) {\n    var balans: Int = 0\n        private set\n\n    init {\n        require(egasi.isNotBlank()) { \"Egasi bo'sh bo'lmasin\" }\n    }\n\n    constructor(egasi: String, boshlangich: Int) : this(egasi) {\n        require(boshlangich >= 0) { \"Balans manfiy bo'lmasin\" }\n        balans = boshlangich\n    }\n\n    fun oshir(qiymat: Int) {\n        balans += qiymat\n    }\n}\n\nfun main() {\n    val a = Hisob(\"Aziza\", 500)\n    a.oshir(250)\n    println(\"${a.egasi}: ${a.balans}\")\n}",
          "output": "Aziza: 750"
        },
        {
          "type": "p",
          "html": "Getter va setter oddiy xossa sintaksisi bilan yoziladi. Setter ichida <code>field</code> — xossaning orqa fon maydoni. Agar setterda <code>field</code> ishlatilmasa, xossa o'z qiymatini saqlamaydi va har murojaatda qayta hisoblanadi. Hisoblangan xossa uchun faqat getter yozish mumkin."
        },
        {
          "type": "code",
          "title": "harorat.kt",
          "code": "class Harorat(celsius: Double) {\n    var celsius: Double = celsius\n        set(qiymat) {\n            require(qiymat >= -273.15) { \"Mutlaq noldan past bo'lmaydi\" }\n            field = qiymat\n        }\n\n    val fahrenheit: Double\n        get() = celsius * 9 / 5 + 32\n}\n\nfun main() {\n    val h = Harorat(25.0)\n    println(h.fahrenheit)\n    h.celsius = 30.0\n    println(h.fahrenheit)\n}",
          "output": "77.0\n86.0"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>init { ... }</code>",
              "Obyekt yaratilganda bir marta bajariladi"
            ],
            [
              "<code>constructor(...) : this(...)</code>",
              "Qo'shimcha konstruktor asosiysiga delegatsiya qiladi"
            ],
            [
              "<code>private set</code>",
              "Tashqaridan faqat o'qishga ruxsat beradi"
            ],
            [
              "<code>field</code>",
              "Setter ichidagi orqa fon qiymati"
            ],
            [
              "<code>val x get() = ...</code>",
              "Hisoblangan, saqlanmaydigan xossa"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Obyekt yaratish tartibi",
          "html": "Avval asosiy konstruktor parametrlari ishlanadi, keyin xossalar va <code>init</code> bloklari yuqoridan pastga bajariladi. Qo'shimcha konstruktor tanasi eng oxirida ishlaydi. Shuning uchun <code>init</code> ichida hali to'ldirilmagan xossaga tayanmang."
        }
      ],
      "quiz": [
        {
          "q": "private set qaysi imkoniyatni yopadi?",
          "options": [
            "Xossani o'qishni",
            "Klassdan nusxa olishni",
            "Klass tashqarisidan xossaga qiymat berishni",
            "Konstruktorni chaqirishni"
          ],
          "answer": 2,
          "explain": "private set setter'ni yashiradi; getter ochiq qoladi va xossa tashqaridan o'qiladi."
        },
        {
          "q": "Setter ichidagi field nimani bildiradi?",
          "options": [
            "Konstruktor parametrini",
            "Setterga kelgan yangi qiymatni",
            "Klass nomini",
            "Xossaning orqa fondagi saqlangan qiymatini"
          ],
          "answer": 3,
          "explain": "field xossaning haqiqiy saqlanadigan qiymatiga murojaat qiladi; unga yozish xossa qiymatini yangilaydi."
        },
        {
          "q": "Qo'shimcha konstruktordagi : this(...) nima qiladi?",
          "options": [
            "Boshqa konstruktorga delegatsiya qiladi",
            "Interfeysni bajaradi",
            "Ota klassdan meros oladi",
            "Xossani private qiladi"
          ],
          "answer": 0,
          "explain": "this(...) qo'shimcha konstruktordan asosiy yoki boshqa konstruktorga o'tadi."
        }
      ]
    },
    {
      "id": 16,
      "title": "Enum, sealed class va sealed interface",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Enum</b> cheklangan nomlangan konstantalar to'plamidir; har bir konstantada qo'shimcha xossa va metod bo'lishi mumkin. <b>Sealed</b> ierarxiya esa turli shakldagi ma'lumotlarni bitta tip ostida birlashtiradi. Ikkalasi ham <code>when</code> bilan ishlatilganda to'liqlikni kompilyatsiya vaqtida tekshirish imkonini beradi."
        },
        {
          "type": "code",
          "title": "buyruq.kt",
          "code": "enum class Buyruq(val kod: Int) {\n    BOSHLA(1) {\n        override fun izoh() = \"Tizim boshlandi\"\n    },\n    TOXTAT(2) {\n        override fun izoh() = \"Tizim to'xtadi\"\n    };\n\n    abstract fun izoh(): String\n}\n\nfun main() {\n    for (b in Buyruq.entries) {\n        println(\"${b.kod}: ${b.izoh()}\")\n    }\n    println(Buyruq.valueOf(\"BOSHLA\").kod)\n}",
          "output": "1: Tizim boshlandi\n2: Tizim to'xtadi\n1"
        },
        {
          "type": "p",
          "html": "Sealed interfeysning barcha to'g'ridan-to'g'ri avlodlari bir modul va paketda e'lon qilinishi kerak. Shu sababli kompilyator ularning to'liq ro'yxatini biladi va <code>when</code> ifodasida <code>else</code> talab qilmaydi. <code>data object</code> holat uchun yagona nusxani, <code>data class</code> esa parametrli holatni beradi."
        },
        {
          "type": "code",
          "title": "holat.kt",
          "code": "sealed interface Holat {\n    data object Yuklanmoqda : Holat\n    data class Tayyor(val soni: Int) : Holat\n    data class Xato(val xabar: String) : Holat\n}\n\nfun korinish(h: Holat): String = when (h) {\n    Holat.Yuklanmoqda -> \"Yuklanmoqda...\"\n    is Holat.Tayyor -> \"${h.soni} ta element\"\n    is Holat.Xato -> \"Xato: ${h.xabar}\"\n}\n\nfun main() {\n    println(korinish(Holat.Yuklanmoqda))\n    println(korinish(Holat.Tayyor(12)))\n}",
          "output": "Yuklanmoqda...\n12 ta element"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Xususiyati"
          ],
          "rows": [
            [
              "Enum",
              "Nomlangan konstantalar, bitta turdagi qiymatlar"
            ],
            [
              "Sealed class",
              "Cheklangan avlodlar, holatni ifodalash"
            ],
            [
              "Sealed interface",
              "Bir nechta klassga erkin implementatsiya"
            ],
            [
              "<code>entries</code>",
              "Enum'ning barcha konstantalari ro'yxati"
            ],
            [
              "<code>valueOf(\"NOM\")</code>",
              "Nom bo'yicha konstantani topadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qaysi birini tanlash?",
          "html": "Faqat bir nechta nomlangan variant kerak bo'lsa — <code>enum</code>. Har bir variant o'z ma'lumotiga ega bo'lsa yoki boshqa klasslar ham shu interfeysni bajarishi kerak bo'lsa — <code>sealed</code>. Sealed ierarxiyaga yangi avlod qo'shsangiz, <code>when</code> joylarini kompilyator darhol ko'rsatadi."
        }
      ],
      "quiz": [
        {
          "q": "Enum'dagi barcha konstantalar ro'yxatini qaysi xossa beradi?",
          "options": [
            "items",
            "values",
            "keys",
            "entries"
          ],
          "answer": 3,
          "explain": "Kotlin 1.9'dan boshlab Buyruq.entries barcha konstantalarni ro'yxat sifatida qaytaradi."
        },
        {
          "q": "Sealed interfeys ustidagi when nima uchun else talab qilmaydi?",
          "options": [
            "Chunki barcha avlodlar ma'lum va kompilyator to'liqligini tekshiradi",
            "Chunki sealed interfeys null qiymat qabul qilmaydi",
            "Chunki when har doim else'siz ishlaydi",
            "Chunki avlodlar faqat bitta bo'ladi"
          ],
          "answer": 0,
          "explain": "Sealed ierarxiya yopiq bo'lgani uchun kompilyator barcha variantlar qoplanganini biladi."
        },
        {
          "q": "Enum konstantasining nomini matn ko'rinishida olish uchun qaysi xossa ishlatiladi?",
          "options": [
            "ordinal",
            "name",
            "index",
            "code"
          ],
          "answer": 1,
          "explain": "name konstantaning e'lon qilingan nomini qaytaradi; ordinal esa tartib raqamini beradi."
        }
      ]
    },
    {
      "id": 17,
      "title": "Meros, abstrakt klasslar va delegatsiya",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin klasslari sukut bo'yicha <b>final</b>: meros olish uchun <code>open</code>, majburiy metod uchun <code>abstract</code> ishlatiladi. Interfeys bir nechta klass tomonidan bajarilishi mumkin. Klass sarlavhasida avval ota klass, keyin interfeyslar yoziladi: <code>class A : Ota(), Interfeys</code>."
        },
        {
          "type": "code",
          "title": "xodim.kt",
          "code": "abstract class Xodim(val ism: String) {\n    abstract fun ishHaqi(): Int\n\n    open fun tavsif(): String = \"$ism: ${ishHaqi()} so'm\"\n}\n\nclass Dasturchi(ism: String, val soat: Int) : Xodim(ism) {\n    override fun ishHaqi(): Int = soat * 50_000\n\n    override fun tavsif(): String = super.tavsif() + \" (dasturchi)\"\n}\n\nfun main() {\n    val x: Xodim = Dasturchi(\"Aziza\", 80)\n    println(x.tavsif())\n}",
          "output": "Aziza: 4000000 so'm (dasturchi)"
        },
        {
          "type": "p",
          "html": "Interfeys metodlarini boshqa obyektga <b>delegatsiya</b> qilish uchun <code>by</code> ishlatiladi. Bu kompozitsiyani merosga o'xshash qulay sintaksis bilan beradi: klass o'z metodlarini yozmasdan, barcha chaqiruvlarni ichki obyektga uzatadi. Kerak bo'lsa, ayrim metodlarni qayta yozib, qolganini delegatsiyada qoldirish mumkin."
        },
        {
          "type": "code",
          "title": "logger.kt",
          "code": "interface Logger {\n    fun log(xabar: String)\n}\n\nclass KonsolLogger : Logger {\n    override fun log(xabar: String) = println(\"[LOG] $xabar\")\n}\n\nclass Xizmat(private val logger: Logger) : Logger by logger\n\nfun main() {\n    val xizmat = Xizmat(KonsolLogger())\n    xizmat.log(\"Saqlandi\")\n}",
          "output": "[LOG] Saqlandi"
        },
        {
          "type": "table",
          "head": [
            "Kalit so'z",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>open</code>",
              "Klass yoki metodni meros uchun ochadi"
            ],
            [
              "<code>abstract</code>",
              "Nusxa olmaydigan, avlodda bajarilishi shart bo'lgan a'zo"
            ],
            [
              "<code>override</code>",
              "Ota a'zosini qayta yozadi"
            ],
            [
              "<code>super.metod()</code>",
              "Ota klass implementatsiyasini chaqiradi"
            ],
            [
              "<code>by obyekt</code>",
              "Interfeys metodlarini delegatsiya qiladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Olmos muammosi",
          "html": "Ikki interfeysda bir xil nomli standart metod bo'lsa, klass ikkalasini ham bajarib, konfliktni o'zi hal qilishi kerak: <code>super&lt;A&gt;.foo()</code> yoki <code>super&lt;B&gt;.foo()</code>. Faqat <code>super.foo()</code> yozish noaniq bo'lgani uchun kompilyatsiya xatosi beradi."
        }
      ],
      "quiz": [
        {
          "q": "Kotlin'da klass sukut bo'yicha qanday bo'ladi?",
          "options": [
            "final",
            "open",
            "abstract",
            "sealed"
          ],
          "answer": 0,
          "explain": "Meros olish uchun klassni alohida open deb belgilash kerak."
        },
        {
          "q": "class Xizmat(private val logger: Logger) : Logger by logger yozuvi nima beradi?",
          "options": [
            "Loggerdan meros oladi",
            "Logger metodlarini logger obyektiga delegatsiya qiladi",
            "Yangi Logger nusxasini yaratadi",
            "Interfeysni butunlay o'chiradi"
          ],
          "answer": 1,
          "explain": "by delegatsiyasi interfeys chaqiruvlarini berilgan obyektga uzatadi."
        },
        {
          "q": "Qayta yozilgan metodda ota klass versiyasini chaqirish uchun nima yoziladi?",
          "options": [
            "parent.tavsif()",
            "base.tavsif()",
            "super.tavsif()",
            "this@Ota.tavsif()"
          ],
          "answer": 2,
          "explain": "super ota klass yoki interfeys implementatsiyasiga murojaat qiladi."
        }
      ]
    },
    {
      "id": 18,
      "title": "Generics: cheklovlar, variance va type erasure",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Generics tipni parametrga aylantiradi: bitta <code>Quti&lt;T&gt;</code> turli tipdagi qiymatlarni xavfsiz saqlaydi. <code>&lt;T : Comparable&lt;T&gt;&gt;</code> kabi cheklov T ustida qaysi amallar bajarilishini kafolatlaydi. Bu darsda generic funksiya va klasslar, <code>out</code>/<code>in</code> variance hamda JVM'dagi type erasure haqida gaplashamiz."
        },
        {
          "type": "code",
          "title": "quti.kt",
          "code": "class Quti<T>(private val element: T) {\n    fun ol(): T = element\n}\n\nfun <T : Comparable<T>> engKatta(a: T, b: T): T = if (a >= b) a else b\n\nfun main() {\n    val quti = Quti(\"Kotlin\")\n    println(quti.ol())\n    println(engKatta(12, 7))\n    println(engKatta(\"olma\", \"anor\"))\n}",
          "output": "Kotlin\n12\nolma"
        },
        {
          "type": "p",
          "html": "<code>List&lt;out T&gt;</code> — ishlab chiqaruvchi (producer): undan o'qish mumkin, lekin element qo'shib bo'lmaydi. Shu sababli <code>List&lt;Int&gt;</code> ni <code>List&lt;Any&gt;</code> o'rnida ishlatish mumkin. <code>MutableList&lt;in T&gt;</code> esa iste'molchi: unga yozish mumkin, lekin o'qishda tip aniqligi yo'qoladi. <code>out</code> va <code>in</code> o'rnini almashtirsangiz, kompilyator xavfli amalni taqiqlaydi."
        },
        {
          "type": "code",
          "title": "variance.kt",
          "code": "fun jami(sonlar: List<Number>): Double = sonlar.sumOf { it.toDouble() }\n\nfun nusxa(dan: List<Int>, ga: MutableList<Any>) {\n    ga.addAll(dan)\n}\n\nfun main() {\n    println(jami(listOf(1, 2, 3)))\n    val natija = mutableListOf<Any>(\"bosh\")\n    nusxa(listOf(4, 5), natija)\n    println(natija)\n}",
          "output": "6.0\n[bosh, 4, 5]"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>class Quti&lt;T&gt;</code>",
              "T tipidagi qiymat bilan ishlaydigan klass"
            ],
            [
              "<code>fun &lt;T&gt; foo(x: T)</code>",
              "Generic funksiya"
            ],
            [
              "<code>&lt;T : Comparable&lt;T&gt;&gt;</code>",
              "T uchun yuqori chegara"
            ],
            [
              "<code>List&lt;out T&gt;</code>",
              "Kovariant producer"
            ],
            [
              "<code>MutableList&lt;in T&gt;</code>",
              "Kontravariant consumer"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Type erasure",
          "html": "JVM'da generic tip argumentlari ish vaqtida o'chiriladi: <code>List&lt;Int&gt;</code> va <code>List&lt;String&gt;</code> bir xil klassga aylanadi. Shuning uchun <code>is List&lt;Int&gt;</code> deb tekshirib bo'lmaydi. Istisno — <code>inline</code> funksiyadagi <code>reified</code> tip parametri; u kompilyatsiya vaqtida kod ichiga joylanadi."
        }
      ],
      "quiz": [
        {
          "q": "<T : Comparable<T>> cheklovi nimani talab qiladi?",
          "options": [
            "T ixtiyoriy tip bo'lishi mumkin",
            "T Comparable interfeysini bajarishi kerak",
            "T faqat son bo'lishi kerak",
            "T null bo'lishi shart"
          ],
          "answer": 1,
          "explain": "Yuqori chegara T ustida compareTo kabi amallar mavjudligini kafolatlaydi."
        },
        {
          "q": "List<out T> dagi out nimani bildiradi?",
          "options": [
            "Faqat qiymat qabul qiladi, ya'ni consumer",
            "Tip butunlay o'chiriladi",
            "Faqat qiymat qaytaradi, ya'ni producer",
            "Kolleksiya null bo'ladi"
          ],
          "answer": 2,
          "explain": "out kovariantlikni beradi: List<Int> ni List<Any> sifatida o'qish mumkin."
        },
        {
          "q": "Generic tip ma'lumotlari JVM'da ish vaqtida saqlanadimi?",
          "options": [
            "Ha, to'liq saqlanadi",
            "Faqat List uchun saqlanadi",
            "Faqat inline funksiyalarda saqlanadi",
            "Yo'q, type erasure tufayli o'chiriladi"
          ],
          "answer": 3,
          "explain": "JVM type erasure generic argumentlarni o'chiradi; reified faqat inline funksiya ichida ishlaydi."
        }
      ]
    },
    {
      "id": 19,
      "title": "Extension funksiyalar va xossalar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Extension funksiya mavjud klassni o'zgartirmasdan unga yangi metod qo'shadi. U top-level yoki boshqa klass ichida e'lon qilinadi va oddiy funksiya kabi chaqiriladi. Muhim jihat: extension <b>statik</b> tarzda hal qilinadi — u klassning haqiqiy a'zosi bo'lib qolmaydi va merosda polimorfik ishlamaydi."
        },
        {
          "type": "code",
          "title": "matn.kt",
          "code": "fun String.qisqartir(limit: Int = 10): String =\n    if (length <= limit) this else take(limit) + \"...\"\n\nfun Int.kvadrat(): Int = this * this\n\nfun main() {\n    println(\"Kotlin darsliklari\".qisqartir(6))\n    println(\"Salom\".qisqartir())\n    println(7.kvadrat())\n}",
          "output": "Kotlin...\nSalom\n49"
        },
        {
          "type": "p",
          "html": "Extension funksiyani nullable receiver bilan ham yozish mumkin: <code>fun String?.yokiZaxira(...)</code>. U null qiymatda ham chaqiriladi, shuning uchun ichkarida null tekshiruvi qilish kerak. Extension xossa esa <code>val String.birinchi: Char</code> kabi sintaksis beradi, lekin u ham haqiqiy maydon emas — qiymat har murojaatda hisoblanadi."
        },
        {
          "type": "code",
          "title": "zaxira.kt",
          "code": "fun String?.yokiZaxira(zaxira: String): String {\n    if (this == null || this.isBlank()) return zaxira\n    return this\n}\n\nval String.sozlarSoni: Int\n    get() = trim().split(Regex(\"\\\\s+\")).count { it.isNotEmpty() }\n\nfun main() {\n    val a: String? = null\n    val b: String? = \"   \"\n    println(a.yokiZaxira(\"Mehmon\"))\n    println(b.yokiZaxira(\"Mehmon\"))\n    println(\"Kotlin tilini o'rganamiz\".sozlarSoni)\n}",
          "output": "Mehmon\nMehmon\n3"
        },
        {
          "type": "table",
          "head": [
            "Holat",
            "Natija"
          ],
          "rows": [
            [
              "Extension va member bir xil nomda",
              "Member ustun turadi"
            ],
            [
              "Extension ichida private a'zo",
              "Ko'rinmaydi, faqat public API ishlaydi"
            ],
            [
              "Nullable receiver",
              "null qiymatda ham chaqiriladi"
            ],
            [
              "Extension merosda",
              "Statik hal qilinadi, override bo'lmaydi"
            ],
            [
              "Import",
              "Top-level extension'ni import qilish kerak"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Extension qachon mos?",
          "html": "Mavjud tipga kichik, yon ta'sirsiz yordamchi amal qo'shmoqchi bo'lsangiz — extension yaxshi tanlov. Klassning ichki holatini boshqarish yoki katta xatti-harakat kerak bo'lsa, oddiy klass yoki interfeys ishlating. Extension'lar bilan API'ni haddan tashqari to'ldirib yubormaslik kerak."
        }
      ],
      "quiz": [
        {
          "q": "Extension funksiya klassning private a'zolariga kira oladimi?",
          "options": [
            "Ha, har doim",
            "Faqat data class'da",
            "Yo'q, faqat public a'zolarga",
            "Faqat meros bilan"
          ],
          "answer": 2,
          "explain": "Extension klass tashqarisida e'lon qilinadi, shuning uchun private a'zolar ko'rinmaydi."
        },
        {
          "q": "Bir xil nomli member funksiya va extension mavjud bo'lsa qaysi biri tanlanadi?",
          "options": [
            "Extension funksiya",
            "Kompilyatsiya xatosi",
            "Ikkalasi navbat bilan",
            "Member funksiya"
          ],
          "answer": 3,
          "explain": "Member funksiya har doim ustun turadi; extension faqat zaxira variant bo'ladi."
        },
        {
          "q": "String? uchun yozilgan extension funksiyani null qiymatda chaqirish mumkinmi?",
          "options": [
            "Ha, funksiya ichida null holatini tekshirish mumkin",
            "Yo'q, NullPointerException bo'ladi",
            "Faqat ?. bilan",
            "Faqat !! bilan"
          ],
          "answer": 0,
          "explain": "Nullable receiver extension'i null qiymatni qabul qiladi va ichkarida xavfsiz tekshiruv yoziladi."
        }
      ]
    },
    {
      "id": 20,
      "title": "Scope funksiyalar: let, run, with, apply, also",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Scope funksiyalar obyekt bilan qisqa blok ichida ishlashga yordam beradi. Ular ikki narsada farq qiladi: blok ichida obyekt <code>this</code> yoki <code>it</code> orqali keladi va funksiya nima qaytaradi — obyektning o'zini yoki lambda natijasini. To'g'ri tanlash kodni qisqartiradi, noto'g'ri tanlash esa o'qishni qiyinlashtiradi."
        },
        {
          "type": "code",
          "title": "foydalanuvchi.kt",
          "code": "data class Foydalanuvchi(var ism: String = \"\", var faol: Boolean = false)\n\nfun main() {\n    val f = Foydalanuvchi().apply {\n        ism = \"Aziza\"\n        faol = true\n    }\n\n    val uzunlik = f.let { it.ism.length }\n    val tavsif = f.run { \"$ism: $faol\" }\n    val yana = f.also { println(\"Tekshirildi: ${it.ism}\") }\n\n    println(uzunlik)\n    println(tavsif)\n    println(yana.ism)\n}",
          "output": "Tekshirildi: Aziza\n5\nAziza: true\nAziza"
        },
        {
          "type": "p",
          "html": "<code>apply</code> obyektni sozlash uchun eng qulay: blok ichida <code>this</code> mavjud va funksiya obyektning o'zini qaytaradi. <code>also</code> ham obyektni qaytaradi, lekin unda obyekt <code>it</code> bo'lib keladi — shuning uchun log yozish yoki tekshirish uchun mos. <code>let</code> esa nullable qiymatni xavfsiz qayta ishlashda ko'p ishlatiladi."
        },
        {
          "type": "code",
          "title": "matn.kt",
          "code": "fun main() {\n    val matn = buildString {\n        append(\"Kotlin\")\n        append(\" \")\n        append(\"2.x\")\n    }\n    println(matn)\n\n    val uzunlik = with(matn) {\n        length\n    }\n    println(uzunlik)\n}",
          "output": "Kotlin 2.x\n10"
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Obyekt",
            "Qaytaradi",
            "Odatiy maqsad"
          ],
          "rows": [
            [
              "<code>let</code>",
              "it",
              "Lambda natijasi",
              "Nullable bilan ishlash"
            ],
            [
              "<code>run</code>",
              "this",
              "Lambda natijasi",
              "Sozlash va hisoblash"
            ],
            [
              "<code>with</code>",
              "this",
              "Lambda natijasi",
              "Bir obyekt ustida bir nechta amal"
            ],
            [
              "<code>apply</code>",
              "this",
              "Obyektning o'zi",
              "Obyektni sozlash"
            ],
            [
              "<code>also</code>",
              "it",
              "Obyektning o'zi",
              "Log va yon ta'sir"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Ichma-ich ishlatmang",
          "html": "Scope funksiyalarni bir necha qavat ichma-ich yozish <code>this</code> va <code>it</code> ni chalkashtiradi. Har bir blokda bitta aniq maqsad bo'lsin. Agar blok 10 qatordan oshsa, uni alohida funksiyaga ajratish yoki oddiy kod yozish yaxshiroq."
        }
      ],
      "quiz": [
        {
          "q": "apply qanday qiymat qaytaradi?",
          "options": [
            "Lambda natijasini",
            "Har doim Unit",
            "null",
            "Receiver obyektning o'zini"
          ],
          "answer": 3,
          "explain": "apply blokni bajaradi va sozlangan obyektni qaytaradi, shuning uchun zanjir davom ettiriladi."
        },
        {
          "q": "let va run orasidagi asosiy farq nima?",
          "options": [
            "let obyektni it, run esa this orqali beradi",
            "run natija qaytarmaydi",
            "let faqat null bilan ishlaydi",
            "Ular butunlay bir xil"
          ],
          "answer": 0,
          "explain": "let lambda parametri sifatida it beradi; run receiver sifatida this beradi. Ikkalasi ham lambda natijasini qaytaradi."
        },
        {
          "q": "also odatda nima uchun ishlatiladi?",
          "options": [
            "Obyektni sozlash uchun",
            "Log yoki yon ta'sir uchun",
            "Null qiymatni almashtirish uchun",
            "Meros olish uchun"
          ],
          "answer": 1,
          "explain": "also obyektni o'zgartirmaydi va o'zini qaytaradi; u tekshiruv yoki log kabi yon ta'sirlar uchun qulay."
        }
      ]
    },
    {
      "id": 21,
      "title": "Lambdalar va yuqori tartibli funksiyalar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Lambda — nomlanmagan funksiya. Uning tipi <code>(Int) -&gt; Int</code> kabi yoziladi. Funksiya boshqa funksiyani parametr sifatida qabul qilsa yoki qaytarsa, u <b>yuqori tartibli funksiya</b> deyiladi. <code>map</code>, <code>filter</code>, <code>forEach</code> — shularning amaliy misollari."
        },
        {
          "type": "code",
          "title": "amal.kt",
          "code": "fun kopaytir(a: Int, b: Int): Int = a * b\n\nfun amal(a: Int, b: Int, f: (Int, Int) -> Int): Int = f(a, b)\n\nfun main() {\n    println(amal(6, 3) { x, y -> x + y })\n    println(amal(6, 3, ::kopaytir))\n    val kvadrat: (Int) -> Int = { it * it }\n    println(kvadrat(9))\n}",
          "output": "9\n18\n81"
        },
        {
          "type": "p",
          "html": "Oxirgi parametr funksiya bo'lsa, lambda qavsdan tashqarida yoziladi — bu <b>trailing lambda</b>. Lambda bir parametrli bo'lsa va nomi ko'rsatilmasa, u <code>it</code> deb ataladi. <code>inline</code> funksiya lambdani obyektga aylantirmasdan kod ichiga joylaydi; shu sababli inline lambda ichidan tashqi funksiyadan <code>return</code> qilish (non-local return) mumkin."
        },
        {
          "type": "code",
          "title": "takrorla.kt",
          "code": "inline fun takrorla(soni: Int, amal: (Int) -> Unit) {\n    for (i in 1..soni) amal(i)\n}\n\nfun birinchiJuft(sonlar: List<Int>): Int? {\n    sonlar.forEach { son ->\n        if (son % 2 == 0) return son\n    }\n    return null\n}\n\nfun main() {\n    takrorla(3) { println(\"Qadam: $it\") }\n    println(birinchiJuft(listOf(3, 5, 8, 10)))\n}",
          "output": "Qadam: 1\nQadam: 2\nQadam: 3\n8"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>(Int) -&gt; String</code>",
              "Int qabul qilib String qaytaradigan funksiya"
            ],
            [
              "<code>(Int, Int) -&gt; Int</code>",
              "Ikki Int qabul qiladigan funksiya"
            ],
            [
              "<code>A.(Int) -&gt; Unit</code>",
              "Receiver'li lambda"
            ],
            [
              "<code>{ it * it }</code>",
              "Bitta parametrli lambda"
            ],
            [
              "<code>::kopaytir</code>",
              "Funksiya havolasi"
            ],
            [
              "<code>inline</code>",
              "Lambda va chaqiruv xarajatini kamaytiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "non-local return",
          "html": "Inline bo'lmagan funksiyaga berilgan lambda ichida <code>return</code> yozilsa, u faqat lambdadan qaytadi. Inline funksiyada esa tashqi funksiyadan qaytish mumkin. Bu farqni tushunmaslik kutilmagan natijaga olib keladi; kodni o'qiyotganda funksiyaning <code>inline</code> ekanini tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "(Int) -> String tipi nimani bildiradi?",
          "options": [
            "Int qabul qilib String qaytaradigan funksiya",
            "String qabul qilib Int qaytaradigan funksiya",
            "Ikki Int qabul qiladigan funksiya",
            "Hech narsa qaytarmaydigan funksiya"
          ],
          "answer": 0,
          "explain": "Funksiya tipida qavs ichi parametrlar, strelkadan keyingisi qaytish tipidir."
        },
        {
          "q": "Inline lambda ichidagi non-local return nimani anglatadi?",
          "options": [
            "Lambda ichidagi tsiklni to'xtatadi",
            "Tashqi funksiyadan qaytadi",
            "Yangi istisno tashlaydi",
            "Faqat Unit qaytaradi"
          ],
          "answer": 1,
          "explain": "inline lambda kod ichiga joylashgani uchun return tashqi funksiyaning qaytish nuqtasi bo'ladi."
        },
        {
          "q": "Mavjud funksiyaga havola qanday yoziladi?",
          "options": [
            "kopaytir::",
            "@kopaytir",
            "::kopaytir",
            "fun.kopaytir"
          ],
          "answer": 2,
          "explain": "Ikki nuqta va funksiya nomi funksiya havolasini beradi va uni funksiya tipidagi qiymat sifatida uzatish mumkin."
        }
      ]
    },
    {
      "id": 22,
      "title": "Kolleksiyalar chuqur: groupBy, fold, zip va sequence",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin standart kutubxonasida kolleksiyalarni qayta ishlash uchun boy funksiyalar to'plami bor. <code>groupBy</code> kalit bo'yicha guruhlaydi, <code>partition</code> shart bo'yicha ikki ro'yxatga ajratadi, <code>fold</code> esa akkumulyator bilan hisoblaydi. Bu amallar yangi natija qaytaradi va odatda asl kolleksiyani o'zgartirmaydi."
        },
        {
          "type": "code",
          "title": "talabalar.kt",
          "code": "data class Talaba(val ism: String, val guruh: String, val ball: Int)\n\nfun main() {\n    val talabalar = listOf(\n        Talaba(\"Aziza\", \"A1\", 92),\n        Talaba(\"Bek\", \"A1\", 78),\n        Talaba(\"Dilnoza\", \"B2\", 88),\n        Talaba(\"Eldor\", \"B2\", 64),\n    )\n\n    val guruhlar = talabalar.groupBy { it.guruh }\n    println(guruhlar.keys)\n    println(guruhlar[\"A1\"]?.map { it.ism })\n\n    println(talabalar.map { it.ball }.average())\n\n    val (otgan, qolgan) = talabalar.partition { it.ball >= 80 }\n    println(\"O'tdi: ${otgan.size}, qoldi: ${qolgan.size}\")\n}",
          "output": "[A1, B2]\n[Aziza, Bek]\n80.5\nO'tdi: 2, qoldi: 2"
        },
        {
          "type": "p",
          "html": "<code>zipWithNext</code> qo'shni elementlar juftliklarini beradi, <code>chunked</code> ro'yxatni bo'laklarga ajratadi, <code>windowed</code> esa siljuvchi oynalar yasaydi. <b>Sequence</b> esa oraliq amallarni darhol bajarmaydi: butun zanjir faqat terminal amal (<code>toList</code>, <code>first</code>, <code>sum</code>) chaqirilganda ishlaydi va kerak bo'lsa erta to'xtaydi."
        },
        {
          "type": "code",
          "title": "amallar.kt",
          "code": "fun main() {\n    val sonlar = listOf(3, 7, 2, 9, 5)\n\n    println(sonlar.fold(0) { jami, son -> jami + son })\n    println(sonlar.zipWithNext { a, b -> b - a })\n    println(sonlar.chunked(2))\n    println(sonlar.windowed(3).size)\n\n    val indeks = sonlar.associateBy { it % 3 }\n    println(indeks)\n}",
          "output": "26\n[4, -5, 7, -4]\n[[3, 7], [2, 9], [5]]\n3\n{0=9, 1=7, 2=5}"
        },
        {
          "type": "table",
          "head": [
            "Amal",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>groupBy { ... }</code>",
              "Map&lt;K, List&lt;T&gt;&gt;"
            ],
            [
              "<code>partition { ... }</code>",
              "Ikki ro'yxatdan iborat Pair"
            ],
            [
              "<code>fold(0) { ... }</code>",
              "Bitta akkumulyator qiymati"
            ],
            [
              "<code>zipWithNext</code>",
              "Qo'shni juftliklar ro'yxati"
            ],
            [
              "<code>associateBy { ... }</code>",
              "Kalit bo'yicha Map"
            ],
            [
              "<code>asSequence()</code>",
              "Lazy zanjir"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qachon sequence?",
          "html": "Katta kolleksiyada bir nechta <code>map</code> va <code>filter</code> zanjiri bo'lsa, <code>asSequence()</code> oraliq ro'yxatlar yaratilishini kamaytiradi. Kichik ro'yxatlarda oddiy kolleksiya amallari tezroq va o'qishli bo'lishi mumkin. Har doim o'lchab ko'ring, taxmin qilmang."
        }
      ],
      "quiz": [
        {
          "q": "partition qanday natija qaytaradi?",
          "options": [
            "Map",
            "Ikki ro'yxatdan iborat Pair",
            "Set",
            "Bitta birlashtirilgan ro'yxat"
          ],
          "answer": 1,
          "explain": "partition shartni qanoatlantirgan va qanoatlantirmagan elementlarni ikkita ro'yxat qilib Pair sifatida qaytaradi."
        },
        {
          "q": "associateBy da bir xil kalit qayta uchrasa nima bo'ladi?",
          "options": [
            "Kompilyatsiya xatosi chiqadi",
            "Birinchi qiymat saqlanadi",
            "Oxirgi qiymat oldingisini almashtiradi",
            "Ikkala qiymat ro'yxatga yig'iladi"
          ],
          "answer": 2,
          "explain": "Map kalitlari noyob; bir xil kalit kelganda oxirgi qiymat qoladi."
        },
        {
          "q": "Sequence'dagi oraliq map va filter qachon bajariladi?",
          "options": [
            "Zanjir yozilishi bilanoq",
            "Faqat dastur tugaganda",
            "Hech qachon",
            "Terminal amal chaqirilganda"
          ],
          "answer": 3,
          "explain": "Sequence lazy ishlaydi: hisoblash terminal amal chaqirilguncha kechiktiriladi."
        }
      ]
    },
    {
      "id": 23,
      "title": "Kotlin idiomalari: destructuring, smart cast va lazy",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da ma'lumotni qulay ochish va kodni qisqartirish uchun bir nechta idioma bor. <b>Destructuring</b> obyekt yoki ro'yxat elementlarini alohida o'zgaruvchilarga ajratadi. <b>Smart cast</b> tip tekshiruvidan keyin avtomatik cast beradi. <code>lazy</code> esa qimmat hisobni birinchi murojaatgacha kechiktiradi."
        },
        {
          "type": "code",
          "title": "nuqta.kt",
          "code": "data class Nuqta(val x: Int, val y: Int)\n\nfun main() {\n    val (x, y) = Nuqta(3, 4)\n    println(\"$x, $y\")\n\n    val juftlik = \"Aziza\" to 92\n    val (ism, ball) = juftlik\n    println(\"$ism: $ball\")\n\n    val royxat = listOf(10, 20, 30)\n    val (birinchi, _, uchinchi) = royxat\n    println(birinchi + uchinchi)\n}",
          "output": "3, 4\nAziza: 92\n40"
        },
        {
          "type": "p",
          "html": "<code>data class</code> avtomatik <code>component1()</code>, <code>component2()</code> va hokazo funksiyalarni yaratadi — destructuring shularga tayanadi. Smart cast <code>is</code> tekshiruvidan keyin ishlaydi, lekin o'zgaruvchi <code>var</code> bo'lsa va boshqa oqimda o'zgarishi mumkin bo'lsa, kompilyator uni rad etishi mumkin. <code>by lazy</code> esa faqat <code>val</code> uchun ishlaydi va natijani keshlaydi."
        },
        {
          "type": "code",
          "title": "shakl.kt",
          "code": "sealed interface Shakl\ndata class Kvadrat(val tomon: Int) : Shakl\ndata class Aylana(val radius: Double) : Shakl\n\nfun yuza(shakl: Shakl): Double = when (shakl) {\n    is Kvadrat -> (shakl.tomon * shakl.tomon).toDouble()\n    is Aylana -> 3.14 * shakl.radius * shakl.radius\n}\n\nval ogirHisob: Int by lazy {\n    println(\"Bir marta hisoblandi\")\n    6 * 7\n}\n\nfun main() {\n    println(yuza(Kvadrat(4)))\n    println(yuza(Aylana(2.0)))\n    println(ogirHisob)\n    println(ogirHisob)\n}",
          "output": "16.0\n12.56\nBir marta hisoblandi\n42\n42"
        },
        {
          "type": "table",
          "head": [
            "Idioma",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>val (a, b) = obyekt</code>",
              "Destructuring orqali maydonlarni ochish"
            ],
            [
              "<code>val (a, _, b) = royxat</code>",
              "Keraksiz elementni <code>_</code> bilan tashlab ketish"
            ],
            [
              "<code>is Tip -&gt; shakl.maydon</code>",
              "Smart cast"
            ],
            [
              "<code>by lazy { ... }</code>",
              "Birinchi murojaatda hisoblash va keshlash"
            ],
            [
              "<code>lateinit var</code>",
              "Keyinroq majburiy beriladigan o'zgaruvchi"
            ],
            [
              "<code>typealias</code>",
              "Uzun tipga qisqa nom"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "lateinit va lazy farqi",
          "html": "<code>lateinit</code> faqat <code>var</code>, null bo'lmagan va primitiv bo'lmagan tipga qo'llanadi; u qiymatni keshlash emas, kechiktirilgan tayinlashdir. <code>lazy</code> esa <code>val</code> uchun va bir marta hisoblanadi. Ikkalasini ham ishlatishdan oldin tayyorligiga ishonch hosil qiling."
        }
      ],
      "quiz": [
        {
          "q": "by lazy bloki qachon bajariladi?",
          "options": [
            "Dastur ishga tushganda",
            "Har bir murojaatda",
            "Xossaga birinchi murojaatda",
            "Faqat testlarda"
          ],
          "answer": 2,
          "explain": "lazy kechiktirilgan hisoblash beradi va natijani eslab qoladi, shuning uchun blok bir marta ishlaydi."
        },
        {
          "q": "Data class'ni destructuring orqali ochish qaysi funksiyalarga tayanadi?",
          "options": [
            "toString funksiyasiga",
            "copy funksiyasiga",
            "equals funksiyasiga",
            "componentN funksiyalariga"
          ],
          "answer": 3,
          "explain": "Kompilyator component1, component2 kabi funksiyalarni chaqirib, qiymatlarni o'zgaruvchilarga ajratadi."
        },
        {
          "q": "Smart cast qaysi holatda ishlaydi?",
          "options": [
            "Tip tekshiruvidan keyin, kompilyator xavfsiz deb hisoblaganda",
            "Har qanday o'zgaruvchida doim",
            "Faqat var o'zgaruvchilarda",
            "Faqat null qiymatlarda"
          ],
          "answer": 0,
          "explain": "is tekshiruvidan keyin kompilyator tipni aniq biladi; var va mutable holatda esa cheklovlar bo'lishi mumkin."
        }
      ]
    },
    {
      "id": 24,
      "title": "Xatolar, custom exception va Result",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da barcha istisnolar <b>unchecked</b>: ularni catch qilish shart emas. Xato holatini ifodalash uchun o'z istisno klassini yaratish mumkin. <code>require</code> noto'g'ri argumentni, <code>check</code> esa noto'g'ri holatni tekshiradi. <code>runCatching</code> esa istisnoni <code>Result</code> ichiga o'rab, funksional uslubda ishlashga yordam beradi."
        },
        {
          "type": "code",
          "title": "hisob.kt",
          "code": "class YetarliMablagYoq(val kerak: Int, val mavjud: Int) :\n    Exception(\"Kerak: $kerak, mavjud: $mavjud\")\n\nfun yech(balans: Int, summa: Int): Int {\n    if (summa > balans) throw YetarliMablagYoq(summa, balans)\n    return balans - summa\n}\n\nfun main() {\n    try {\n        println(yech(100, 30))\n        println(yech(100, 150))\n    } catch (x: YetarliMablagYoq) {\n        println(x.message)\n    }\n}",
          "output": "70\nKerak: 150, mavjud: 100"
        },
        {
          "type": "p",
          "html": "<code>runCatching</code> blokdagi istisnoni ushlaydi va <code>Result&lt;T&gt;</code> qaytaradi. Muvaffaqiyatda <code>getOrNull()</code> natijani, xatoda <code>exceptionOrNull()</code> istisnoni beradi; <code>getOrDefault()</code> esa xavfsiz zaxira qiymat qaytaradi. Result natijani yo'qotmasdan xato bilan ishlash uchun qulay, lekin uni oddiy nazorat oqimi o'rniga suiiste'mol qilmang."
        },
        {
          "type": "code",
          "title": "bolish.kt",
          "code": "fun bolish(a: Int, b: Int): Result<Int> = runCatching {\n    require(b != 0) { \"Nolga bo'lib bo'lmaydi\" }\n    a / b\n}\n\nfun main() {\n    val natija = bolish(12, 3)\n    println(natija.getOrNull())\n\n    val xato = bolish(5, 0)\n    println(xato.isFailure)\n    println(xato.exceptionOrNull()?.message)\n    println(xato.getOrDefault(-1))\n}",
          "output": "4\ntrue\nNolga bo'lib bo'lmaydi\n-1"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>try / catch / finally</code>",
              "Istisnoni ushlash va tozalash"
            ],
            [
              "<code>throw</code>",
              "Yangi istisno tashlash"
            ],
            [
              "<code>require(shart) { ... }</code>",
              "Argument tekshiruvi, IllegalArgumentException"
            ],
            [
              "<code>check(shart) { ... }</code>",
              "Holat tekshiruvi, IllegalStateException"
            ],
            [
              "<code>runCatching { ... }</code>",
              "Natijani Result ichida qaytarish"
            ],
            [
              "<code>Result.fold</code>",
              "Muvaffaqiyat va xatoni bitta joyda ishlash"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xatoni yutib yubormang",
          "html": "Bo'sh <code>catch</code> yoki <code>.getOrNull()</code> natijasini e'tiborsiz qoldirish muammoni yashiradi. Xabarni logga yozing, foydalanuvchiga tushunarli xabar bering yoki xatoni yuqoriga qayta tashlang. <code>finally</code> esa resursni yopish uchun har qanday holatda bajariladi."
        }
      ],
      "quiz": [
        {
          "q": "runCatching xatoni qanday qaytaradi?",
          "options": [
            "Istisnoni qayta tashlaydi",
            "null qaytaradi",
            "Boolean qaytaradi",
            "Result ichida qaytaradi"
          ],
          "answer": 3,
          "explain": "runCatching istisnoni ushlab, muvaffaqiyat yoki xatoni Result sifatida beradi."
        },
        {
          "q": "require shart buzilganda qaysi istisnoni tashlaydi?",
          "options": [
            "IllegalArgumentException",
            "IllegalStateException",
            "IOException",
            "NullPointerException"
          ],
          "answer": 0,
          "explain": "require argumentlar to'g'riligini tekshiradi va IllegalArgumentException tashlaydi."
        },
        {
          "q": "Muvaffaqiyatli Result uchun exceptionOrNull() nima qaytaradi?",
          "options": [
            "Xato matnini",
            "null",
            "Natijani",
            "Unit qiymatini"
          ],
          "answer": 1,
          "explain": "Xato bo'lmagani uchun exceptionOrNull null qaytaradi; natija getOrNull bilan olinadi."
        }
      ]
    },
    {
      "id": 25,
      "title": "Fayllar va JSON: Path API va kotlinx.serialization",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin/JVM'da fayllar bilan ishlash uchun zamonaviy <code>java.nio.file.Path</code> API qulay: <code>Files.readString</code>, <code>Files.writeString</code> va <code>Files.readAllLines</code>. JSON bilan ishlashda esa <code>kotlinx.serialization</code> kutubxonasi <code>@Serializable</code> klasslardan serializator yaratadi. Bu darsda ikkala vosita bilan amaliy misol qilamiz."
        },
        {
          "type": "code",
          "title": "fayl.kt",
          "code": "import java.nio.file.Files\nimport java.nio.file.Path\n\nfun main() {\n    val fayl = Path.of(\"kunlik.txt\")\n    Files.writeString(fayl, \"Birinchi qator\\nIkkinchi qator\\n\")\n\n    val qatorlar = Files.readAllLines(fayl)\n    println(qatorlar.size)\n    println(qatorlar.first())\n\n    Files.delete(fayl)\n}",
          "output": "2\nBirinchi qator"
        },
        {
          "type": "p",
          "html": "<code>kotlinx.serialization</code> uchun Gradle'da serialization plugin va <code>kotlinx-serialization-json</code> bog'liqligi kerak. <code>Json { prettyPrint = true }</code> chiqishni o'qishli qiladi. <code>encodeToString</code> obyektni JSON matnga, <code>decodeFromString</code> esa JSON matnni qayta obyektga aylantiradi. Maydon nomlari <code>@SerialName</code> bilan o'zgartirilishi mumkin."
        },
        {
          "type": "code",
          "title": "dars.kt",
          "code": "import kotlinx.serialization.json.Json\nimport kotlinx.serialization.Serializable\n\n@Serializable\ndata class Dars(val nom: String, val minut: Int)\n\nfun main() {\n    val json = Json { prettyPrint = true }\n    val dars = Dars(\"Kotlin\", 16)\n    val matn = json.encodeToString(Dars.serializer(), dars)\n    println(matn)\n\n    val qayta = json.decodeFromString(Dars.serializer(), matn)\n    println(qayta.nom + \": \" + qayta.minut)\n}",
          "output": "{\n    \"nom\": \"Kotlin\",\n    \"minut\": 16\n}\nKotlin: 16"
        },
        {
          "type": "table",
          "head": [
            "API",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>Files.readString(path)</code>",
              "Butun faylni matn sifatida o'qiydi"
            ],
            [
              "<code>Files.readAllLines(path)</code>",
              "Qatorlar ro'yxatini qaytaradi"
            ],
            [
              "<code>Files.writeString(path, text)</code>",
              "Matnni faylga yozadi"
            ],
            [
              "<code>@Serializable</code>",
              "Serializator generatsiyasini yoqadi"
            ],
            [
              "<code>Json.encodeToString</code>",
              "Obyektni JSON matnga aylantiradi"
            ],
            [
              "<code>Json.decodeFromString</code>",
              "JSON matnni obyektga aylantiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Resurslarni yoping",
          "html": "Katta fayllarni <code>Files.lines(path).use { ... }</code> bilan oqim sifatida o'qing — bu xotirani tejaydi va oqimni avtomatik yopadi. JSON faylni yozishdan oldin vaqtinchalik faylga yozib, keyin almashtirish ma'lumot yo'qolishidan himoya qiladi. Har doim fayl yo'lini foydalanuvchi kiritmasidan tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "@Serializable annotatsiyasi nimani ta'minlaydi?",
          "options": [
            "Serialization kodini generatsiya qiladi",
            "Null safety qo'shadi",
            "UI komponentlarini chizadi",
            "Faylni avtomatik yaratadi"
          ],
          "answer": 0,
          "explain": "Plugin kompilyatsiya vaqtida klass uchun serializator yaratadi, shuning uchun qo'lda JSON yozish shart emas."
        },
        {
          "q": "Files.readAllLines(path) qanday natija qaytaradi?",
          "options": [
            "String",
            "List<String>",
            "Sequence<String>",
            "ByteArray"
          ],
          "answer": 1,
          "explain": "readAllLines fayl qatorlaridan iborat ro'yxat qaytaradi."
        },
        {
          "q": "Json.decodeFromString nima qiladi?",
          "options": [
            "Obyektni JSON matnga aylantiradi",
            "Faylga yozadi",
            "JSON matnni obyektga aylantiradi",
            "Tarmoq so'rovi yuboradi"
          ],
          "answer": 2,
          "explain": "decodeFromString deserializatsiya qiladi, ya'ni JSON matnidan obyekt yasaydi."
        }
      ]
    },
    {
      "id": 26,
      "title": "Java interop: platform tiplar va JVM annotatsiyalari",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin JVM'da ishlaydi, shuning uchun Java kutubxonalarini to'g'ridan-to'g'ri chaqiradi. Java'dan qaytgan tip ba'zan <code>String!</code> kabi <b>platform tip</b> bo'ladi: kompilyator null bo'lishi mumkinligini biladi, lekin majburiy tekshiruv qo'ymaydi. Bu chegarada ehtiyotkorlik kerak. Kotlin kodini Java'dan chaqirish uchun esa <code>@JvmStatic</code>, <code>@JvmOverloads</code> kabi annotatsiyalar yordam beradi."
        },
        {
          "type": "code",
          "title": "java.kt",
          "code": "import java.time.LocalDate\nimport java.util.ArrayList\n\nfun main() {\n    val royxat = ArrayList<String>()\n    royxat.add(\"Kotlin\")\n    royxat.add(\"Java\")\n\n    val sana = LocalDate.of(2026, 10, 23)\n    println(royxat.joinToString())\n    println(sana.plusDays(7))\n}",
          "output": "Kotlin, Java\n2026-10-30"
        },
        {
          "type": "p",
          "html": "Java kolleksiyalari bilan ishlaganda Kotlin'ning kengaytmalari ham mavjud, lekin mutable va immutable farqini yodda tuting. Platform tipni darhol nullable tipga o'zlashtiring yoki null bo'lmasligini <code>requireNotNull</code> bilan tekshiring. Bu keyinchalik kutilmagan <code>NullPointerException</code> dan saqlaydi."
        },
        {
          "type": "code",
          "title": "xarita.kt",
          "code": "fun main() {\n    val xarita = java.util.HashMap<String, Int>()\n    xarita[\"olma\"] = 3\n\n    val qiymat: Int? = xarita[\"nok\"]\n    println(qiymat ?: 0)\n\n    val matn: String? = java.lang.System.getProperty(\"noldan.yoq\")\n    println(matn == null)\n}",
          "output": "0\ntrue"
        },
        {
          "type": "table",
          "head": [
            "Annotatsiya",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>@JvmStatic</code>",
              "Object metodini Java uchun statik qiladi"
            ],
            [
              "<code>@JvmOverloads</code>",
              "Standart argumentlar uchun Java overload'lar yaratadi"
            ],
            [
              "<code>@JvmName</code>",
              "JVM'dagi nomni o'zgartiradi"
            ],
            [
              "<code>@JvmField</code>",
              "Xossani getter'siz maydon qilib beradi"
            ],
            [
              "<code>@file:JvmName(\"Yordamchi\")</code>",
              "Fayl facade klass nomini o'zgartiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Java'dan Kotlin'ni chaqirish",
          "html": "Top-level funksiyalar Java'da <code>FaylNomKt</code> klassi orqali ko'rinadi. Standart argumentli funksiyani Java'dan chaqirmoqchi bo'lsangiz, <code>@JvmOverloads</code> qo'shing — aks holda barcha argumentlarni berishga to'g'ri keladi. Checked istisnolar Kotlin'da majburiy emas, lekin Java tomonida ularni catch qilish kerak bo'lishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Java metodidan qaytgan String! nimani bildiradi?",
          "options": [
            "Qiymat hech qachon null bo'lmaydi",
            "Platform tip: null bo'lishi mumkin, lekin kompilyator majburlamaydi",
            "Faqat null qiymat",
            "Majburiy cast xatosi"
          ],
          "answer": 1,
          "explain": "Platform tipda null tekshiruvi Java tomoniga tayanadi; Kotlin chegarasida ehtiyotkorlik kerak."
        },
        {
          "q": "@JvmStatic nima qiladi?",
          "options": [
            "Funksiyani inline qiladi",
            "Null safety qo'shadi",
            "Object metodini Java uchun statik qiladi",
            "Faqat Android'da ishlaydi"
          ],
          "answer": 2,
          "explain": "@JvmStatic companion yoki object a'zosini Java'da statik metod sifatida ko'rsatadi."
        },
        {
          "q": "Kotlin'da checked exception bormi?",
          "options": [
            "Ha, barcha IOException checked",
            "Faqat Java bilan ishlaganda",
            "Faqat Android'da",
            "Yo'q, Kotlin'da checked istisnolar yo'q"
          ],
          "answer": 3,
          "explain": "Kotlin istisnolarni tekshiriladigan va tekshirilmaydigan deb ajratmaydi; catch qilish shart emas."
        }
      ]
    },
    {
      "id": 27,
      "title": "Gradle va Kotlin loyihasi tuzilishi",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Haqiqiy Kotlin loyihasi odatda <b>Gradle</b> bilan yig'iladi. <code>build.gradle.kts</code> fayli Kotlin DSL'da yoziladi: pluginlar, repozitoriylar va bog'liqliklar shu yerda e'lon qilinadi. Standart loyihada asosiy kod <code>src/main/kotlin</code>, testlar <code>src/test/kotlin</code>, resurslar esa <code>src/main/resources</code> ichida turadi."
        },
        {
          "type": "code",
          "title": "build.gradle.kts",
          "code": "plugins {\n    kotlin(\"jvm\") version \"2.1.0\"\n    application\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation(\"org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.1\")\n    testImplementation(kotlin(\"test\"))\n}\n\napplication {\n    mainClass.set(\"MainKt\")\n}",
          "output": "> Task :compileKotlin\n> Task :jar\nBUILD SUCCESSFUL in 4s"
        },
        {
          "type": "p",
          "html": "<code>application</code> plugin dasturni <code>./gradlew run</code> bilan ishga tushirish imkonini beradi. <code>mainClass</code> sifatida fayl nomidan hosil bo'lgan facade klass ko'rsatiladi: <code>Main.kt</code> uchun <code>MainKt</code>. Bog'liqliklar <code>implementation</code>, <code>api</code> va <code>testImplementation</code> kabi konfiguratsiyalarga bo'linadi."
        },
        {
          "type": "code",
          "title": "Main.kt",
          "code": "fun main() {\n    val vazifalar = listOf(\"o'qish\", \"mashq\")\n    println(\"Salom, Gradle!\")\n    vazifalar.forEachIndexed { indeks, vazifa ->\n        println(\"${indeks + 1}. $vazifa\")\n    }\n}",
          "output": "Salom, Gradle!\n1. o'qish\n2. mashq"
        },
        {
          "type": "table",
          "head": [
            "Yo'l yoki fayl",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>src/main/kotlin</code>",
              "Asosiy Kotlin kodlari"
            ],
            [
              "<code>src/main/resources</code>",
              "Konfiguratsiya va resurs fayllari"
            ],
            [
              "<code>src/test/kotlin</code>",
              "Unit testlar"
            ],
            [
              "<code>build.gradle.kts</code>",
              "Pluginlar va bog'liqliklar"
            ],
            [
              "<code>settings.gradle.kts</code>",
              "Loyiha nomi va modullar"
            ],
            [
              "<code>gradlew</code>",
              "Gradle wrapper skripti"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Wrapper va versiyalar",
          "html": "Har doim <code>./gradlew</code> dan foydalaning — u loyiha uchun qulflangan Gradle versiyasini ishga tushiradi. Bog'liqlik versiyalarini <code>gradle/libs.versions.toml</code> katalogiga chiqarish takrorlanishni kamaytiradi. Kotlin plugin versiyasi bilan Kotlin kutubxonalari versiyasi mos bo'lishi kerak."
        }
      ],
      "quiz": [
        {
          "q": "src/main/kotlin papkasida nima saqlanadi?",
          "options": [
            "Faqat testlar",
            "Gradle keshi",
            "Asosiy Kotlin kodi",
            "Rasmlar va shriftlar"
          ],
          "answer": 2,
          "explain": "Bu papka asosiy source set hisoblanadi va ilova kodini o'z ichiga oladi."
        },
        {
          "q": "testImplementation bog'liqligi qayerda ko'rinadi?",
          "options": [
            "Asosiy kodda",
            "Har doim runtime'da",
            "Faqat Android UI'da",
            "Faqat test kompilyatsiyasi va bajarilishida"
          ],
          "answer": 3,
          "explain": "testImplementation test source set'iga tegishli bo'lib, production kodiga qo'shilmaydi."
        },
        {
          "q": "application pluginidagi mainClass nimani ko'rsatadi?",
          "options": [
            "Dasturning kirish nuqtasini",
            "Test sinfini",
            "Kotlin versiyasini",
            "Resurs papkasini"
          ],
          "answer": 0,
          "explain": "mainClass run vazifasi qaysi main funksiyani ishga tushirishini belgilaydi."
        }
      ]
    },
    {
      "id": 28,
      "title": "Testlash: kotlin.test va JUnit",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Testlar kodning kutilganidek ishlashini tekshiradi va o'zgarishlardan keyin regressiyani erta ushlaydi. Kotlin'da <code>kotlin.test</code> kutubxonasi JUnit bilan birga ishlaydi: <code>@Test</code> annotatsiyasi, <code>assertEquals</code>, <code>assertTrue</code> va <code>assertFailsWith</code> yetarli. Testlarni <code>src/test/kotlin</code> ichida, asosiy kod bilan bir xil paketda saqlang."
        },
        {
          "type": "code",
          "title": "Kalkulyator.kt",
          "code": "class Kalkulyator {\n    fun bolish(a: Int, b: Int): Int {\n        require(b != 0) { \"Nolga bo'lish mumkin emas\" }\n        return a / b\n    }\n}\n\nfun main() {\n    println(Kalkulyator().bolish(12, 3))\n}",
          "output": "4"
        },
        {
          "type": "p",
          "html": "Test nomi nima tekshirilayotganini aniq aytsin: <code>nolgaBolishXatoBeradi</code> kabi. Bitta testda bitta xatti-harakatni tekshiring. Xato bo'lsa, <code>assertEquals</code> kutilgan va haqiqiy qiymatni ko'rsatadi — bu sababni tez topishga yordam beradi. Testlar bir-biriga bog'liq bo'lmasligi va tartibga tayanmasligi kerak."
        },
        {
          "type": "code",
          "title": "KalkulyatorTest.kt",
          "code": "import kotlin.test.Test\nimport kotlin.test.assertEquals\nimport kotlin.test.assertFailsWith\n\nclass KalkulyatorTest {\n    private val kalkulyator = Kalkulyator()\n\n    @Test\n    fun bolishNatijasiTogri() {\n        assertEquals(4, kalkulyator.bolish(12, 3))\n    }\n\n    @Test\n    fun nolgaBolishXatoBeradi() {\n        val xato = assertFailsWith<IllegalArgumentException> {\n            kalkulyator.bolish(5, 0)\n        }\n        assertEquals(\"Nolga bo'lish mumkin emas\", xato.message)\n    }\n}",
          "output": "> Task :test\n2 tests completed, 0 failed\nBUILD SUCCESSFUL in 2s"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>@Test</code>",
              "Metodni test sifatida belgilaydi"
            ],
            [
              "<code>assertEquals(kutilgan, haqiqiy)</code>",
              "Qiymatlarni taqqoslaydi"
            ],
            [
              "<code>assertTrue(shart)</code>",
              "Shart rostligini tekshiradi"
            ],
            [
              "<code>assertFailsWith&lt;T&gt; { ... }</code>",
              "Istisno tashlanishini tekshiradi"
            ],
            [
              "<code>@BeforeTest / @AfterTest</code>",
              "Har test oldidan va keyin tayyorlash"
            ],
            [
              "<code>@Ignore</code>",
              "Testni vaqtincha o'tkazib yuboradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Testlarni yugurtirish",
          "html": "Barcha testlar: <code>./gradlew test</code>. Faqat bitta klass: <code>./gradlew test --tests KalkulyatorTest</code>. Hisobot <code>build/reports/tests/test/index.html</code> da bo'ladi. Testlarni CI'da har bir commit'da ishga tushiring; sekin integratsiya testlarini alohida source set'ga ajrating."
        }
      ],
      "quiz": [
        {
          "q": "assertFailsWith nima qaytaradi?",
          "options": [
            "Boolean",
            "Unit",
            "null",
            "Tashlangan istisno obyektini"
          ],
          "answer": 3,
          "explain": "Qaytgan istisno orqali uning xabarini yoki maydonlarini qo'shimcha tekshirish mumkin."
        },
        {
          "q": "assertEquals da birinchi argument nima bo'lishi kerak?",
          "options": [
            "Haqiqiy natija",
            "Kutilgan qiymat",
            "Xato matni",
            "Test nomi"
          ],
          "answer": 0,
          "explain": "kotlin.test'da birinchi argument expected, ikkinchisi actual hisoblanadi."
        },
        {
          "q": "Test metodi qaysi annotatsiya bilan belgilanadi?",
          "options": [
            "@Benchmark",
            "@Test",
            "@Preview",
            "@Composable"
          ],
          "answer": 1,
          "explain": "@Test JUnit va kotlin.test tomonidan test metodi sifatida tan olinadi."
        }
      ]
    },
    {
      "id": 29,
      "title": "Coroutines chuqur: scope, dispatcher va bekor qilish",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Coroutine — bloklamaydigan parallel ish modeli. <b>Structured concurrency</b> qoidasiga ko'ra har bir coroutine ota <code>CoroutineScope</code> ichida yashaydi va ota tugaguncha bolalari ham yakunlanadi. <code>launch</code> natijasiz <code>Job</code>, <code>async</code> esa natijali <code>Deferred</code> qaytaradi. <code>withContext</code> dispatcherni almashtirib, natijani qaytaradi."
        },
        {
          "type": "code",
          "title": "yuklash.kt",
          "code": "import kotlinx.coroutines.*\n\nsuspend fun malumot(): String = withContext(Dispatchers.Default) {\n    delay(100)\n    \"tayyor\"\n}\n\nfun main() = runBlocking {\n    println(\"Boshlanish\")\n    val natija = malumot()\n    println(natija)\n    println(\"Tugadi\")\n}",
          "output": "Boshlanish\ntayyor\nTugadi"
        },
        {
          "type": "p",
          "html": "Bekor qilish <b>kooperativ</b>: coroutine <code>delay</code>, <code>yield</code> yoki boshqa suspend nuqtalarida bekor qilishni tekshiradi. <code>cancelAndJoin()</code> avval bekor qiladi, keyin tugashini kutadi. Bloklovchi <code>Thread.sleep</code> ishlatilsa bekor qilish kechikadi — shuning uchun coroutine ichida suspend funksiyalardan foydalaning."
        },
        {
          "type": "code",
          "title": "bekor.kt",
          "code": "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    val ish = launch {\n        repeat(5) { i ->\n            delay(100)\n            println(\"Qadam $i\")\n        }\n    }\n    delay(250)\n    ish.cancelAndJoin()\n    println(\"Bekor qilindi: ${ish.isCancelled}\")\n}",
          "output": "Qadam 0\nQadam 1\nBekor qilindi: true"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>CoroutineScope</code>",
              "Coroutine'lar hayot doirasini boshqaradi"
            ],
            [
              "<code>Job</code>",
              "Bitta ishning holati va bekor qilinishi"
            ],
            [
              "<code>Dispatchers.Default</code>",
              "CPU uchun umumiy fon dispatcheri"
            ],
            [
              "<code>Dispatchers.IO</code>",
              "Bloklovchi I/O amallari uchun"
            ],
            [
              "<code>withContext</code>",
              "Dispatcher almashtirib natija qaytaradi"
            ],
            [
              "<code>supervisorScope</code>",
              "Bola xatosi birodarlarni bekor qilmaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Istisnolar va scope",
          "html": "Oddiy <code>launch</code> ichidagi ushlanmagan istisno butun scope'ni bekor qiladi. Mustaqil bolalar kerak bo'lsa <code>supervisorScope</code> yoki <code>SupervisorJob</code> ishlating. Istisnoni <code>CoroutineExceptionHandler</code> bilan logga yozing, lekin uni jimgina yutib yubormang. <code>runBlocking</code> faqat demo va testlarda mos."
        }
      ],
      "quiz": [
        {
          "q": "withContext nima qiladi?",
          "options": [
            "Dispatcherni almashtiradi va natija qaytaradi",
            "Yangi thread yaratib, uni boshqarmaydi",
            "Coroutine'ni butunlay bekor qiladi",
            "Faqat delay qiladi"
          ],
          "answer": 0,
          "explain": "withContext blokni boshqa dispatcherda bajaradi va oxirgi ifoda natijasini qaytaradi."
        },
        {
          "q": "cancelAndJoin() qanday ishlaydi?",
          "options": [
            "Faqat bekor qiladi",
            "Bekor qiladi va tugashini kutadi",
            "Ishni qayta boshlaydi",
            "Har doim istisno tashlaydi"
          ],
          "answer": 1,
          "explain": "cancelAndJoin avval cancel, keyin join bajaradi, shuning uchun resurslar xavfsiz yopiladi."
        },
        {
          "q": "supervisorScope ichida bitta bola xato bersa nima bo'ladi?",
          "options": [
            "Barcha bolalar bekor qilinadi",
            "Xato butunlay yutiladi",
            "Faqat xato bola yakunlanadi, boshqalari davom etadi",
            "Yangi thread yaratiladi"
          ],
          "answer": 2,
          "explain": "supervisorScope bolalar xatosini bir-biriga tarqatmaydi; har bir bola mustaqil yakunlanadi."
        }
      ]
    },
    {
      "id": 30,
      "title": "Flow: sovuq oqimlar, operatorlar va StateFlow",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Flow</b> vaqt o'tishi bilan bir nechta qiymat chiqaradigan oqimdir. <code>flow { }</code> quruvchisi bilan yaratilgan oqim <b>sovuq</b>: kod har bir <code>collect</code> chaqiruvida qaytadan bajariladi. <code>map</code>, <code>filter</code>, <code>take</code> kabi operatorlar oqimni o'zgartiradi, <code>collect</code> esa terminal amal hisoblanadi."
        },
        {
          "type": "code",
          "title": "sonlar.kt",
          "code": "import kotlinx.coroutines.delay\nimport kotlinx.coroutines.flow.*\nimport kotlinx.coroutines.runBlocking\n\nfun sonlar(): Flow<Int> = flow {\n    for (i in 1..4) {\n        delay(50)\n        emit(i)\n    }\n}\n\nfun main() = runBlocking {\n    sonlar()\n        .filter { it % 2 == 0 }\n        .map { it * 10 }\n        .collect { println(it) }\n}",
          "output": "20\n40"
        },
        {
          "type": "p",
          "html": "<b>StateFlow</b> — issiq oqim: u har doim joriy qiymatga ega va yangi kollektorga darhol oxirgi qiymatni beradi. UI holati uchun juda mos. <b>SharedFlow</b> esa umumiy hodisalarni tarqatadi va replay sozlamasiga qarab eski qiymatlarni qaytaradi. <code>flowOn</code> yuqori (upstream) operatorlarning dispatcherini o'zgartiradi."
        },
        {
          "type": "code",
          "title": "holat.kt",
          "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun main() = runBlocking {\n    val holat = MutableStateFlow(\"boshlandi\")\n    val ish = launch {\n        holat.collect { println(\"Kuzatildi: $it\") }\n    }\n    delay(50)\n    holat.value = \"yuklanmoqda\"\n    delay(50)\n    holat.value = \"tayyor\"\n    delay(50)\n    ish.cancel()\n}",
          "output": "Kuzatildi: boshlandi\nKuzatildi: yuklanmoqda\nKuzatildi: tayyor"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Xususiyati"
          ],
          "rows": [
            [
              "<code>Flow</code>",
              "Sovuq, har collect'da qayta ishlaydi"
            ],
            [
              "<code>StateFlow</code>",
              "Issiq, doim joriy qiymat bor, konflatsiya qiladi"
            ],
            [
              "<code>SharedFlow</code>",
              "Issiq, ko'p kollektorga hodisa tarqatadi"
            ],
            [
              "<code>flowOn</code>",
              "Upstream dispatcherini o'zgartiradi"
            ],
            [
              "<code>catch</code>",
              "Upstream istisnolarini ushlaydi"
            ],
            [
              "<code>stateIn</code>",
              "Flow'ni StateFlow'ga aylantiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "UI uchun oqim",
          "html": "Android'da ViewModel ichida <code>MutableStateFlow</code> saqlab, tashqariga <code>asStateFlow()</code> bering. UI <code>collectAsStateWithLifecycle()</code> bilan yig'adi. <code>SharedFlow</code> navigatsiya yoki bir martalik xabarlar uchun mos, lekin hodisa yo'qolmasligi uchun bufer va replay siyosatini ongli tanlang."
        }
      ],
      "quiz": [
        {
          "q": "flow { } quruvchisi qanday oqim yaratadi?",
          "options": [
            "Issiq oqim",
            "Sovuq oqim",
            "Faqat UI oqimi",
            "Bir martalik kanal"
          ],
          "answer": 1,
          "explain": "Sovuq oqim har bir collector uchun quruvchi kodini qaytadan bajaradi."
        },
        {
          "q": "StateFlow haqida qaysi gap to'g'ri?",
          "options": [
            "U faqat bitta qiymat chiqaradi",
            "U sovuq oqim hisoblanadi",
            "Uning har doim joriy qiymati bo'ladi",
            "Uni collect qilib bo'lmaydi"
          ],
          "answer": 2,
          "explain": "StateFlow holat konteyneri bo'lib, yangi kollektorga darhol oxirgi qiymatni beradi."
        },
        {
          "q": "flowOn qaysi qismning dispatcherini o'zgartiradi?",
          "options": [
            "Quyi (downstream) operatorlarni",
            "Butun dasturni",
            "Faqat collect'ni",
            "Yuqori (upstream) operatorlarni"
          ],
          "answer": 3,
          "explain": "flowOn o'zidan yuqorida turgan flow quruvchisi va operatorlarga ta'sir qiladi."
        }
      ]
    },
    {
      "id": 31,
      "title": "Kanallar: send, receive va produce",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Channel</b> coroutine'lar o'rtasida qiymat uzatish uchun navbatdir. Yuboruvchi <code>send</code>, qabul qiluvchi <code>receive</code> yoki <code>for</code> tsikli bilan ishlaydi. Kanal sig'imi (<code>capacity</code>) yuboruvchini qachon kutishini belgilaydi. <code>close()</code> chaqirilgach, mavjud qiymatlar olinadi va tsikl tugaydi."
        },
        {
          "type": "code",
          "title": "kanal.kt",
          "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.channels.Channel\n\nfun main() = runBlocking {\n    val kanal = Channel<Int>(capacity = 3)\n    val ish = launch {\n        for (i in 1..3) {\n            kanal.send(i * 10)\n            println(\"Yuborildi: ${i * 10}\")\n        }\n        kanal.close()\n    }\n    ish.join()\n    for (qiymat in kanal) {\n        println(\"Qabul: $qiymat\")\n    }\n}",
          "output": "Yuborildi: 10\nYuborildi: 20\nYuborildi: 30\nQabul: 10\nQabul: 20\nQabul: 30"
        },
        {
          "type": "p",
          "html": "<code>produce { }</code> quruvchisi kanal yaratib, uni <code>ReceiveChannel</code> sifatida qaytaradi — producer-consumer naqshlari uchun qulay. Bir nechta iste'molchi bitta kanaldan o'qisa, har bir qiymat faqat bittasiga yetadi (fan-out). Kanal yopilganda <code>for</code> tsikli tugaydi, lekin buferdagi qiymatlar yo'qolmaydi."
        },
        {
          "type": "code",
          "title": "kvadrat.kt",
          "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.channels.produce\n\nfun main() = runBlocking {\n    val kvadratlar = produce {\n        for (i in 1..3) send(i * i)\n    }\n    for (q in kvadratlar) {\n        println(q)\n    }\n}",
          "output": "1\n4\n9"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>Channel&lt;T&gt;()</code>",
              "Rendezvous kanal, sig'im 0"
            ],
            [
              "<code>Channel(capacity = 3)</code>",
              "Buferli kanal"
            ],
            [
              "<code>send / receive</code>",
              "Suspend bo'ladigan yuborish va qabul qilish"
            ],
            [
              "<code>close()</code>",
              "Yuborishni yakunlaydi, o'qish tugaydi"
            ],
            [
              "<code>produce { }</code>",
              "ReceiveChannel qaytaruvchi producer"
            ],
            [
              "<code>CONFLATED</code>",
              "Faqat oxirgi qiymatni saqlaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Kanalni yopish",
          "html": "Kanalni yuboruvchi tomon yopishi kerak; iste'molchi yopmasligi lozim. Yopilgan kanalga <code>send</code> qilish istisno beradi, <code>receive</code> esa qolgan qiymatlarni qaytarib, keyin yopilish sababini beradi. Kanal coroutine scope'iga bog'langan bo'lsa, scope bekor qilinganda avtomatik yopiladi."
        }
      ],
      "quiz": [
        {
          "q": "close() chaqirilgach qabul qiluvchi for tsikli nima qiladi?",
          "options": [
            "Cheksiz kutadi",
            "Darhol istisno tashlaydi",
            "Qolgan qiymatlarni olib, tugaydi",
            "Kanalni qayta ochadi"
          ],
          "answer": 2,
          "explain": "close yuborishni tugatadi, buferdagi qiymatlar berilgach oqim yakunlanadi."
        },
        {
          "q": "produce quruvchisi qanday tip qaytaradi?",
          "options": [
            "SendChannel",
            "Flow",
            "Job",
            "ReceiveChannel"
          ],
          "answer": 3,
          "explain": "produce ichkarida yuboradi, tashqariga esa o'qish uchun ReceiveChannel qaytaradi."
        },
        {
          "q": "capacity = 3 bo'lgan kanalda yuboruvchi qachon kutadi?",
          "options": [
            "Bufer to'lib qolganda",
            "Har doim",
            "Hech qachon",
            "Faqat close chaqirilganda"
          ],
          "answer": 0,
          "explain": "Sig'im to'lguncha send darhol bajariladi, keyin bo'sh joy paydo bo'lishini kutadi."
        }
      ]
    },
    {
      "id": 32,
      "title": "Ktor server: routing va JSON javoblar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Ktor</b> — Kotlin uchun asinxron server va client framework'i. Server <code>embeddedServer</code> bilan ishga tushadi, marshrutlar <code>routing { }</code> DSL'ida yoziladi. <code>call.respondText</code> oddiy matn, <code>call.respond</code> esa ContentNegotiation plugin bilan obyektni JSON'ga aylantirib qaytaradi."
        },
        {
          "type": "code",
          "title": "Application.kt",
          "code": "import io.ktor.server.application.*\nimport io.ktor.server.engine.*\nimport io.ktor.server.netty.*\nimport io.ktor.server.response.*\nimport io.ktor.server.routing.*\n\nfun main() {\n    embeddedServer(Netty, port = 8080) {\n        routing {\n            get(\"/\") {\n                call.respondText(\"Salom, Ktor!\")\n            }\n        }\n    }.start(wait = true)\n}",
          "output": "Responding at http://0.0.0.0:8080"
        },
        {
          "type": "p",
          "html": "JSON javob uchun <code>ContentNegotiation</code> pluginini o'rnating va <code>json()</code> serializerini yoqing. Marshrut parametri <code>call.parameters[\"id\"]</code> orqali olinadi. Muvaffaqiyatli javobda <code>HttpStatusCode.Created</code>, xatoda <code>NotFound</code> kabi aniq status qaytarish REST uslubining muhim qismidir."
        },
        {
          "type": "code",
          "title": "Application.kt (JSON)",
          "code": "import io.ktor.serialization.kotlinx.json.*\nimport io.ktor.server.application.*\nimport io.ktor.server.plugins.contentnegotiation.*\nimport io.ktor.server.response.*\nimport io.ktor.server.routing.*\nimport kotlinx.serialization.Serializable\n\n@Serializable\ndata class Vazifa(val id: Int, val nom: String, val bajarildi: Boolean)\n\nfun Application.module() {\n    install(ContentNegotiation) {\n        json()\n    }\n    routing {\n        get(\"/vazifalar/{id}\") {\n            val id = call.parameters[\"id\"]?.toIntOrNull() ?: 0\n            call.respond(Vazifa(id, \"Kotlin o'rganish\", false))\n        }\n    }\n}",
          "output": "$ curl localhost:8080/vazifalar/7\n{\"id\":7,\"nom\":\"Kotlin o'rganish\",\"bajarildi\":false}"
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>embeddedServer(Netty, port = 8080)</code>",
              "Serverni ishga tushiradi"
            ],
            [
              "<code>routing { get(\"/\") { ... } }</code>",
              "Marshrutlarni e'lon qiladi"
            ],
            [
              "<code>call.respondText</code>",
              "Matn javobi"
            ],
            [
              "<code>call.respond(obj)</code>",
              "Serializatsiya qilingan javob"
            ],
            [
              "<code>call.parameters[\"id\"]</code>",
              "Yo'l parametrini o'qiydi"
            ],
            [
              "<code>start(wait = true)</code>",
              "Jarayonni server bilan ushlab turadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Bog'liqliklar",
          "html": "Server uchun <code>ktor-server-core</code>, <code>ktor-server-netty</code>, JSON uchun <code>ktor-server-content-negotiation</code> va <code>ktor-serialization-kotlinx-json</code> kerak. <code>ktor-server-test-host</code> testlarda <code>testApplication</code> beradi. Portni konfiguratsiyadan oling, kodga qattiq yozmang."
        }
      ],
      "quiz": [
        {
          "q": "Ktor'da marshrutlar qaysi DSL ichida yoziladi?",
          "options": [
            "routes { }",
            "server { }",
            "controller { }",
            "routing { }"
          ],
          "answer": 3,
          "explain": "routing bloki HTTP metodlari va yo'llarni ro'yxatga oladi."
        },
        {
          "q": "call.respond(obj) obyektni JSON qilib qaytarishi uchun nima kerak?",
          "options": [
            "ContentNegotiation plugin",
            "Faqat println",
            "Netty dvigateli yetarli",
            "Qo'shimcha coroutine"
          ],
          "answer": 0,
          "explain": "ContentNegotiation va json serializer o'rnatilmasa, obyektni avtomatik JSON qilib bo'lmaydi."
        },
        {
          "q": "start(wait = true) nima qiladi?",
          "options": [
            "Server darhol to'xtaydi",
            "Server jarayoni ishlashda davom etadi",
            "Portni o'chiradi",
            "Faqat testda ishlaydi"
          ],
          "answer": 1,
          "explain": "wait = true asosiy oqimni server to'xtaguncha ushlab turadi."
        }
      ]
    },
    {
      "id": 33,
      "title": "Ktor client: so'rovlar va JSON deserializatsiya",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Ktor client yordamida HTTP so'rov yuborish mumkin. <code>HttpClient(CIO)</code> yoki boshqa engine bilan client yaratiladi, <code>client.get(url)</code> javob qaytaradi. Clientni har so'rovda yangidan yaratmang — u ulanishlar havzasini boshqaradi, shuning uchun bitta nusxani qayta ishlatib, oxirida <code>close()</code> qiling."
        },
        {
          "type": "code",
          "title": "status.kt",
          "code": "import io.ktor.client.*\nimport io.ktor.client.engine.cio.*\nimport io.ktor.client.request.*\nimport io.ktor.client.statement.*\nimport kotlinx.coroutines.runBlocking\n\nfun main() = runBlocking {\n    val client = HttpClient(CIO)\n    val javob: HttpResponse = client.get(\"https://example.com/\")\n    println(javob.status.value)\n    println(javob.bodyAsText().isNotEmpty())\n    client.close()\n}",
          "output": "200\ntrue"
        },
        {
          "type": "p",
          "html": "JSON javobni obyektga aylantirish uchun clientga <code>ContentNegotiation</code> o'rnatiladi va <code>body&lt;T&gt;()</code> ishlatiladi. <code>@Serializable</code> klass maydonlari JSON maydonlariga mos bo'lishi kerak. Xatolarni <code>HttpResponse.status</code> orqali tekshiring yoki <code>expectSuccess = true</code> qilib, 4xx/5xx da istisno olishni yoqing."
        },
        {
          "type": "code",
          "title": "post.kt",
          "code": "import io.ktor.client.*\nimport io.ktor.client.call.*\nimport io.ktor.client.engine.cio.*\nimport io.ktor.client.plugins.contentnegotiation.*\nimport io.ktor.client.request.*\nimport io.ktor.serialization.kotlinx.json.*\nimport kotlinx.coroutines.runBlocking\nimport kotlinx.serialization.Serializable\n\n@Serializable\ndata class Post(val id: Int, val title: String)\n\nfun main() = runBlocking {\n    val client = HttpClient(CIO) {\n        install(ContentNegotiation) { json() }\n    }\n    val post: Post = client.get(\"https://jsonplaceholder.typicode.com/posts/1\").body()\n    println(post.id)\n    println(post.title)\n    client.close()\n}",
          "output": "1\nsunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        },
        {
          "type": "table",
          "head": [
            "Sozlama",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>HttpClient(CIO)</code>",
              "Client va engine yaratadi"
            ],
            [
              "<code>client.get(url)</code>",
              "GET so'rovi yuboradi"
            ],
            [
              "<code>bodyAsText()</code>",
              "Javobni matn sifatida o'qiydi"
            ],
            [
              "<code>body&lt;T&gt;()</code>",
              "Javobni T tipiga deserializatsiya qiladi"
            ],
            [
              "<code>ContentNegotiation</code>",
              "JSON avtomatik o'girish"
            ],
            [
              "<code>HttpTimeout</code>",
              "So'rov vaqtini cheklaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Ishlab chiqarishda client",
          "html": "Clientni bitta joyda yaratib, dependency injection orqali bering. <code>expectSuccess = true</code>, taymout va retry siyosatini sozlang. Maxfiy tokenlarni kodga yozmang — muhit o'zgaruvchilari yoki xavfsiz konfiguratsiyadan oling. Testlarda <code>MockEngine</code> bilan tarmoqsiz javoblarni tekshirish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "HttpClient'ni har so'rovda yangidan yaratish nima uchun tavsiya etilmaydi?",
          "options": [
            "Ulanishlar va resurslar isrof bo'ladi",
            "JSON umuman ishlamaydi",
            "Faqat Android'da ishlaydi",
            "Kompilyatsiya xatosi beradi"
          ],
          "answer": 0,
          "explain": "Client ulanishlar havzasini boshqaradi; uni qayta ishlatish samaraliroq."
        },
        {
          "q": "body<Post>() nima qiladi?",
          "options": [
            "Yangi so'rov yuboradi",
            "Javobni Post tipiga deserializatsiya qiladi",
            "Status kodni o'zgartiradi",
            "Faylga yozadi"
          ],
          "answer": 1,
          "explain": "body reified tip yordamida javob tanasini kerakli obyektga aylantiradi."
        },
        {
          "q": "Ktor client'da ContentNegotiation nima uchun kerak?",
          "options": [
            "Portni ochish uchun",
            "Server routing uchun",
            "JSON'ni avtomatik o'girish uchun",
            "Testlarni o'chirish uchun"
          ],
          "answer": 2,
          "explain": "Client plugin JSON serializerini so'rov va javoblarga qo'llaydi."
        }
      ]
    },
    {
      "id": 34,
      "title": "Android asoslari: Activity va lifecycle",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Android ilova komponentlardan iborat: <b>Activity</b> bitta ekran hayotini boshqaradi, <b>Service</b> fonda ishlaydi, <b>BroadcastReceiver</b> tizim hodisalarini qabul qiladi. Activity'ning <b>lifecycle</b> bosqichlari <code>onCreate</code>, <code>onStart</code>, <code>onResume</code>, <code>onPause</code>, <code>onStop</code> va <code>onDestroy</code> metodlari orqali keladi. Resurslarni <code>onCreate</code> da tayyorlab, <code>onDestroy</code> da bo'shatish odatiy amaliyot."
        },
        {
          "type": "code",
          "title": "MainActivity.kt",
          "code": "package com.noldan.app\n\nimport android.os.Bundle\nimport android.util.Log\nimport androidx.activity.ComponentActivity\n\nclass MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        Log.d(\"Noldan\", \"onCreate ishga tushdi\")\n    }\n\n    override fun onStart() {\n        super.onStart()\n        Log.d(\"Noldan\", \"onStart\")\n    }\n\n    override fun onDestroy() {\n        super.onDestroy()\n        Log.d(\"Noldan\", \"onDestroy\")\n    }\n}",
          "output": "D/Noldan: onCreate ishga tushdi\nD/Noldan: onStart\nD/Noldan: onDestroy"
        },
        {
          "type": "p",
          "html": "Ekran burilganda Activity qayta yaratiladi. Unda saqlanishi kerak bo'lgan UI holatini <b>ViewModel</b> yoki <code>rememberSaveable</code> da saqlang. ViewModel Activity'dan uzoqroq yashaydi va konfiguratsiya o'zgarishida yo'qolmaydi. Tarmoq yoki baza kabi uzoq ishlarni Activity'ning o'zida emas, ViewModel ichida bajaring."
        },
        {
          "type": "code",
          "title": "HisobHolati.kt",
          "code": "import kotlinx.coroutines.flow.MutableStateFlow\nimport kotlinx.coroutines.flow.StateFlow\nimport kotlinx.coroutines.flow.asStateFlow\n\nclass HisobHolati {\n    private val _soni = MutableStateFlow(0)\n    val soni: StateFlow<Int> = _soni.asStateFlow()\n\n    fun oshir() {\n        _soni.value += 1\n    }\n}\n\nfun main() {\n    val h = HisobHolati()\n    repeat(3) { h.oshir() }\n    println(h.soni.value)\n}",
          "output": "3"
        },
        {
          "type": "table",
          "head": [
            "Komponent yoki metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>Activity</code>",
              "Bitta ekran va uning hayot doirasi"
            ],
            [
              "<code>onCreate</code>",
              "Activity birinchi marta yaratilganda"
            ],
            [
              "<code>onStart / onStop</code>",
              "Ekran ko'rinishi boshlanishi va yashirilishi"
            ],
            [
              "<code>onResume / onPause</code>",
              "Foydalanuvchi bilan faol ishlash chegarasi"
            ],
            [
              "<code>ViewModel</code>",
              "UI holatini konfiguratsiya o'zgarishidan saqlaydi"
            ],
            [
              "<code>Lifecycle</code>",
              "Komponent holatini kuzatadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Manifest va ruxsatlar",
          "html": "Har bir Activity <code>AndroidManifest.xml</code> da ro'yxatdan o'tishi kerak. Internet, kamera kabi ruxsatlar manifestda e'lon qilinadi; xavfli ruxsatlar ish vaqtida so'raladi. Android 13'dan boshlab bildirishnoma ruxsati alohida so'raladi. Ruxsatni faqat haqiqatan kerak bo'lganda so'rang."
        }
      ],
      "quiz": [
        {
          "q": "Activity UI birinchi marta yaratilganda qaysi metod chaqiriladi?",
          "options": [
            "onStart",
            "onCreate",
            "onResume",
            "onDestroy"
          ],
          "answer": 1,
          "explain": "onCreate Activity yaratilishida bir marta chaqiriladi va boshlang'ich tayyorlash uchun xizmat qiladi."
        },
        {
          "q": "Konfiguratsiya o'zgarganda (masalan, ekran burilganda) ViewModel saqlanadimi?",
          "options": [
            "Yo'q, har safar yangidan yaratiladi",
            "Faqat Compose ishlatilganda",
            "Ha, konfiguratsiya o'zgarishida saqlanadi",
            "Faqat ekran aylantirilmasa"
          ],
          "answer": 2,
          "explain": "ViewModel Activity'dan uzoqroq yashaydi, shuning uchun UI holati qayta yaratishda yo'qolmaydi."
        },
        {
          "q": "Android'da uzoq ishlar uchun qaysi scope tavsiya etiladi?",
          "options": [
            "GlobalScope",
            "Thread",
            "main()",
            "viewModelScope yoki lifecycleScope"
          ],
          "answer": 3,
          "explain": "Bu scope'lar komponent hayotiga bog'langan va kerak bo'lganda avtomatik bekor qilinadi."
        }
      ]
    },
    {
      "id": 35,
      "title": "Jetpack Compose asoslari",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Jetpack Compose</b> — Android'da deklarativ UI yozish usuli. XML layout o'rniga <code>@Composable</code> funksiyalar ekranning qanday ko'rinishini tavsiflaydi. Holat o'zgarganda Compose faqat zarur qismlarni qayta chizadi — bu <b>recomposition</b> deyiladi. <code>remember</code> va <code>mutableStateOf</code> UI holatini saqlaydi."
        },
        {
          "type": "code",
          "title": "holat.kt",
          "code": "data class HisobHolati(val soni: Int = 0) {\n    fun oshir(): HisobHolati = copy(soni = soni + 1)\n}\n\nfun main() {\n    var holat = HisobHolati()\n    repeat(2) { holat = holat.oshir() }\n    println(holat)\n}",
          "output": "HisobHolati(soni=2)"
        },
        {
          "type": "p",
          "html": "Composable funksiya oddiy funksiya kabi chaqiriladi, lekin uni faqat boshqa composable ichidan yoki <code>setContent</code> dan chaqirish mumkin. <code>Column</code>, <code>Row</code>, <code>Box</code> joylashuvni, <code>Modifier</code> o'lcham va bo'shliqni boshqaradi. <code>Button</code> kabi komponentlar Material 3 dizayn tizimidan olinadi."
        },
        {
          "type": "code",
          "title": "Hisoblagich.kt",
          "code": "import android.util.Log\nimport androidx.compose.foundation.layout.Column\nimport androidx.compose.foundation.layout.padding\nimport androidx.compose.material3.Button\nimport androidx.compose.material3.Text\nimport androidx.compose.runtime.*\nimport androidx.compose.ui.Modifier\nimport androidx.compose.ui.unit.dp\n\n@Composable\nfun Hisoblagich() {\n    var holat by remember { mutableStateOf(HisobHolati()) }\n\n    Column(modifier = Modifier.padding(16.dp)) {\n        Text(\"Soni: ${holat.soni}\")\n        Button(onClick = {\n            holat = holat.oshir()\n            Log.d(\"Noldan\", \"Yangi soni: ${holat.soni}\")\n        }) {\n            Text(\"Oshir\")\n        }\n    }\n}",
          "output": "D/Noldan: Yangi soni: 1\nD/Noldan: Yangi soni: 2"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>@Composable</code>",
              "UI funksiyasini belgilaydi"
            ],
            [
              "<code>remember</code>",
              "Qiymatni recomposition orasida saqlaydi"
            ],
            [
              "<code>mutableStateOf</code>",
              "Kuzatiladigan holat yaratadi"
            ],
            [
              "<code>recomposition</code>",
              "Holat o'zgarganda UI'ni qayta chizish"
            ],
            [
              "<code>Modifier</code>",
              "O'lcham, padding va ko'rinish zanjiri"
            ],
            [
              "<code>LazyColumn</code>",
              "Katta ro'yxatni samarali chizadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Compose loyihasi",
          "html": "Compose uchun <code>buildFeatures { compose = true }</code> va Compose BOM bog'liqliklari kerak. <code>@Preview</code> annotatsiyasi Android Studio'da komponentni kod orqali ko'rish imkonini beradi. Compose'da ham Activity kerak: <code>setContent { Ilova() }</code> orqali ildiz composable ulanadi."
        }
      ],
      "quiz": [
        {
          "q": "@Composable annotatsiyasi nimani bildiradi?",
          "options": [
            "Ma'lumot klassini belgilaydi",
            "Test metodini belgilaydi",
            "UI funksiyasini belgilaydi",
            "Server marshrutini belgilaydi"
          ],
          "answer": 2,
          "explain": "Compose kompilyatori @Composable funksiyani UI tavsifi sifatida qayta ishlaydi."
        },
        {
          "q": "remember { mutableStateOf(...) } nima uchun kerak?",
          "options": [
            "Har recompositionda qiymatni nolga qaytarish uchun",
            "Tarmoq so'rovi yuborish uchun",
            "Faylga yozish uchun",
            "Holatni recomposition orasida saqlash uchun"
          ],
          "answer": 3,
          "explain": "remember qiymatni kompozitsiya davomida eslab qoladi, mutableStateOf esa uning o'zgarishini kuzatadi."
        },
        {
          "q": "Compose'da UI qanday yangilanadi?",
          "options": [
            "Holat o'zgarganda qayta kompozitsiya orqali",
            "Faqat ilova qayta ishga tushganda",
            "findViewById orqali qo'lda",
            "Har soniyada avtomatik"
          ],
          "answer": 0,
          "explain": "Holat o'zgarishi recomposition'ni ishga tushiradi va kerakli UI qismlarini yangilaydi."
        }
      ]
    },
    {
      "id": 36,
      "title": "Compose: state hoisting, effektlar va ro'yxatlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Compose'da holatni eng pastki komponentda yashirmasdan, yuqoriga ko'tarish — <b>state hoisting</b> deyiladi. Komponent qiymatni parametr sifatida oladi, o'zgarishni esa lambda orqali yuqoriga xabar qiladi. Bu komponentni qayta ishlatish va test qilishni osonlashtiradi. <code>LazyColumn</code> esa faqat ko'rinib turgan elementlarni chizadi."
        },
        {
          "type": "code",
          "title": "VazifaEkrani.kt",
          "code": "class VazifaViewModel : ViewModel() {\n    private val _vazifalar = MutableStateFlow<List<String>>(emptyList())\n    val vazifalar = _vazifalar.asStateFlow()\n\n    init {\n        _vazifalar.value = listOf(\"Kotlin\", \"Compose\", \"Ktor\")\n    }\n}\n\n@Composable\nfun VazifaEkrani(vm: VazifaViewModel) {\n    val vazifalar by vm.vazifalar.collectAsStateWithLifecycle()\n    LaunchedEffect(vazifalar) {\n        Log.d(\"Noldan\", \"Ro'yxat: $vazifalar\")\n    }\n    LazyColumn {\n        items(vazifalar) { nom ->\n            Text(nom, modifier = Modifier.padding(8.dp))\n        }\n    }\n}",
          "output": "D/Noldan: Ro'yxat: [Kotlin, Compose, Ktor]"
        },
        {
          "type": "p",
          "html": "<code>LaunchedEffect(kalit)</code> kompozitsiyaga kirilganda yoki kalit o'zgarganda coroutine ishga tushiradi. <code>DisposableEffect</code> resursni ochib-yopish uchun, <code>SideEffect</code> esa har muvaffaqiyatli kompozitsiyadan keyin bajariladi. Tarmoq yoki ma'lumot o'qish kabi ishlarni composable ichida to'g'ridan-to'g'ri bajarmang — ViewModel yoki effektga topshiring."
        },
        {
          "type": "code",
          "title": "Qidiruv.kt",
          "code": "@Composable\nfun Qidiruv(matn: String, onMatn: (String) -> Unit) {\n    OutlinedTextField(\n        value = matn,\n        onValueChange = {\n            onMatn(it)\n            Log.d(\"Noldan\", \"Qidiruv: $it\")\n        },\n        label = { Text(\"Qidirish\") },\n    )\n}\n\n@Composable\nfun Ekran() {\n    var matn by remember { mutableStateOf(\"\") }\n    Qidiruv(matn = matn, onMatn = { matn = it })\n}",
          "output": "D/Noldan: Qidiruv: k\nD/Noldan: Qidiruv: ko\nD/Noldan: Qidiruv: kot"
        },
        {
          "type": "table",
          "head": [
            "API",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>collectAsStateWithLifecycle()</code>",
              "Flow'ni lifecycle'ga mos UI holatiga aylantiradi"
            ],
            [
              "<code>LaunchedEffect(key)</code>",
              "Kalit o'zgarganda coroutine ishga tushiradi"
            ],
            [
              "<code>DisposableEffect(key)</code>",
              "Resurs ochish va tozalash"
            ],
            [
              "<code>SideEffect</code>",
              "Har kompozitsiyadan keyin yon ta'sir"
            ],
            [
              "<code>rememberCoroutineScope()</code>",
              "UI hodisalaridan coroutine boshlash"
            ],
            [
              "<code>LazyColumn + items</code>",
              "Ro'yxatni samarali chizish"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Effektlar takrorlanishi",
          "html": "<code>LaunchedEffect(Unit)</code> kompozitsiyadan chiqib qayta kirilganda yana ishlaydi. Og'ir ishni har recompositionda boshlab yubormaslik uchun kalitni to'g'ri tanlang. <code>rememberCoroutineScope()</code> scope'i kompozitsiya tugaganda bekor qilinadi, shuning uchun uzoq muddatli ishlar uchun ViewModel scope'idan foydalaning."
        }
      ],
      "quiz": [
        {
          "q": "collectAsStateWithLifecycle() nimasi bilan foydali?",
          "options": [
            "Faqat testlarda ishlaydi",
            "JSON'ni o'giradi",
            "Server yaratadi",
            "Flow'ni lifecycle holatiga moslab yig'adi"
          ],
          "answer": 3,
          "explain": "U UI ko'rinmayotganda collect'ni to'xtatib, resursni tejaydi va hayot doirasiga mos ishlaydi."
        },
        {
          "q": "LaunchedEffect(Unit) qachon qayta ishga tushadi?",
          "options": [
            "Kompozitsiyaga qayta kirilganda yoki kalit o'zgarganda",
            "Har recompositionda",
            "Har soniyada",
            "Hech qachon"
          ],
          "answer": 0,
          "explain": "Unit kaliti o'zgarmaydi, lekin kompozitsiyadan chiqib qayta kirilsa effekt yana boshlanadi."
        },
        {
          "q": "LazyColumn nima uchun ishlatiladi?",
          "options": [
            "Fayl o'qish uchun",
            "Katta ro'yxatni samarali ko'rsatish uchun",
            "Tarmoq so'rovi uchun",
            "Test yozish uchun"
          ],
          "answer": 1,
          "explain": "LazyColumn faqat ko'rinadigan elementlarni kompozitsiya qiladi, shuning uchun katta ro'yxatda samarali."
        }
      ]
    },
    {
      "id": 37,
      "title": "Android'da Room: Entity, DAO va ma'lumotlar bazasi",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Room</b> — SQLite ustidagi abstraksiya. <code>@Entity</code> klass jadvalga, <code>@Dao</code> interfeys SQL so'rovlariga mos keladi. KSP plugin kompilyatsiya vaqtida DAO implementatsiyasini yaratadi. <code>@Query</code> metodlari <code>Flow</code> qaytarishi mumkin — baza o'zgarganda UI avtomatik yangilanadi."
        },
        {
          "type": "code",
          "title": "VazifaEntity.kt + VazifaDao.kt",
          "code": "import androidx.room.*\nimport kotlinx.coroutines.flow.Flow\n\n@Entity(tableName = \"vazifalar\")\ndata class VazifaEntity(\n    @PrimaryKey(autoGenerate = true) val id: Long = 0,\n    val nom: String,\n    val bajarildi: Boolean = false,\n)\n\n@Dao\ninterface VazifaDao {\n    @Query(\"SELECT * FROM vazifalar ORDER BY id\")\n    fun kuzat(): Flow<List<VazifaEntity>>\n\n    @Insert\n    suspend fun qosh(vazifa: VazifaEntity)\n\n    @Query(\"UPDATE vazifalar SET bajarildi = :holat WHERE id = :id\")\n    suspend fun belgila(id: Long, holat: Boolean)\n}",
          "output": "> Task :app:kspDebugKotlin\nBUILD SUCCESSFUL in 5s"
        },
        {
          "type": "p",
          "html": "DAO'ni test qilish uchun interfeysni oddiy xotira implementatsiyasi bilan almashtirish mumkin. Repozitoriy DAO'ni yashiradi va domen modeliga o'giradi. <code>suspend</code> funksiyalar asosiy oqimni bloklamaydi; Room ularni ichki dispatcherda bajaradi. <code>@Transaction</code> bir nechta so'rovni atomar qiladi."
        },
        {
          "type": "code",
          "title": "XotiraDao.kt",
          "code": "import kotlinx.coroutines.runBlocking\n\ndata class Vazifa(val id: Long = 0, val nom: String, val bajarildi: Boolean = false)\n\ninterface VazifaDao {\n    suspend fun hammasi(): List<Vazifa>\n    suspend fun qosh(vazifa: Vazifa)\n}\n\nclass XotiraDao : VazifaDao {\n    private val qatorlar = mutableListOf<Vazifa>()\n\n    override suspend fun hammasi() = qatorlar.toList()\n\n    override suspend fun qosh(vazifa: Vazifa) {\n        qatorlar.add(vazifa.copy(id = (qatorlar.size + 1).toLong()))\n    }\n}\n\nclass VazifaRepozitoriy(private val dao: VazifaDao) {\n    suspend fun qosh(nom: String) = dao.qosh(Vazifa(nom = nom.trim()))\n    suspend fun hammasi() = dao.hammasi()\n}\n\nfun main() = runBlocking {\n    val repo = VazifaRepozitoriy(XotiraDao())\n    repo.qosh(\" Kotlin \")\n    repo.qosh(\"Compose\")\n    println(repo.hammasi())\n}",
          "output": "[Vazifa(id=1, nom=Kotlin, bajarildi=false), Vazifa(id=2, nom=Compose, bajarildi=false)]"
        },
        {
          "type": "table",
          "head": [
            "Annotatsiya",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>@Entity</code>",
              "Klassni jadvalga moslaydi"
            ],
            [
              "<code>@PrimaryKey</code>",
              "Asosiy kalitni belgilaydi"
            ],
            [
              "<code>@Dao</code>",
              "So'rov interfeysini belgilaydi"
            ],
            [
              "<code>@Query</code>",
              "SQL so'rovni yozish imkonini beradi"
            ],
            [
              "<code>@Insert / @Update / @Delete</code>",
              "Standart CRUD amallari"
            ],
            [
              "<code>@Database</code>",
              "Baza klassini e'lon qiladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Migratsiyalar",
          "html": "Baza sxemasi o'zgarganda <code>version</code> ni oshiring va <code>Migration</code> yozing. <code>fallbackToDestructiveMigration()</code> faqat prototipda mos — u foydalanuvchi ma'lumotini o'chiradi. Ishlab chiqarishda sxemani eksport qilib, migratsiyalarni test bilan tekshiring. Bazani ilova bo'ylab bitta singleton sifatida saqlang."
        }
      ],
      "quiz": [
        {
          "q": "@Entity annotatsiyasi nimani bildiradi?",
          "options": [
            "Klass jadvalga mos kelishini",
            "Klass DAO ekanini",
            "Baza versiyasini",
            "UI komponentini"
          ],
          "answer": 0,
          "explain": "Room @Entity klassni SQLite jadvali sifatida ko'radi."
        },
        {
          "q": "@Query metodi qanday natija qaytarishi mumkin?",
          "options": [
            "Faqat Unit",
            "Flow<List<T>> kabi kuzatiladigan natija",
            "Faqat String",
            "Faqat Int"
          ],
          "answer": 1,
          "explain": "Room Flow qaytaruvchi so'rovlarni kuzatadi va jadval o'zgarganda yangi natija beradi."
        },
        {
          "q": "Room DAO metodlari nima uchun suspend qilinadi?",
          "options": [
            "JSON uchun",
            "UI chizish uchun",
            "Asosiy oqimni bloklamaslik uchun",
            "Testlarni o'chirish uchun"
          ],
          "answer": 2,
          "explain": "Suspend funksiya baza ishini fon oqimida bajarib, UI oqimini bloklamaydi."
        }
      ]
    },
    {
      "id": 38,
      "title": "Android coroutines: lifecycleScope va viewModelScope",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Android'da coroutine'lar komponent hayotiga bog'lanishi kerak. <b>viewModelScope</b> ViewModel tozalanganda bekor qilinadi, <b>lifecycleScope</b> esa Activity yoki Fragment hayotiga bog'lanadi. UI oqimida ishlash uchun <code>Dispatchers.Main</code> ishlatiladi, tarmoq va baza ishlari esa <code>Dispatchers.IO</code> yoki Room tomonidan bajariladi."
        },
        {
          "type": "code",
          "title": "YangiliklarViewModel.kt",
          "code": "class YangiliklarViewModel(\n    private val repo: YangiliklarRepozitoriy,\n) : ViewModel() {\n    private val _holat = MutableStateFlow<Holat>(Holat.Yuklanmoqda)\n    val holat: StateFlow<Holat> = _holat.asStateFlow()\n\n    fun yukla() {\n        viewModelScope.launch {\n            Log.d(\"Noldan\", \"Yuklash boshlandi\")\n            _holat.value = Holat.Yuklanmoqda\n            val yangi = runCatching { repo.ol() }\n                .fold(\n                    onSuccess = { Holat.Tayyor(it) },\n                    onFailure = { Holat.Xato(it.message ?: \"Noma'lum xato\") },\n                )\n            _holat.value = yangi\n            Log.d(\"Noldan\", \"Holat: $yangi\")\n        }\n    }\n}",
          "output": "D/Noldan: Yuklash boshlandi\nD/Noldan: Holat: Tayyor(3)"
        },
        {
          "type": "p",
          "html": "UI <code>StateFlow</code> ni to'g'ridan-to'g'ri <code>collect</code> qilsa, ekran fonda bo'lganda ham ishlayveradi. Buning oldini olish uchun <code>repeatOnLifecycle(Lifecycle.State.STARTED)</code> ishlatiladi: lifecycle STARTED bo'lganda collect boshlanadi, pastga tushganda bekor qilinadi. Bu resursni tejaydi va xotira oqishini oldini oladi."
        },
        {
          "type": "code",
          "title": "MainActivity.kt",
          "code": "class MainActivity : ComponentActivity() {\n    private val viewModel: YangiliklarViewModel by viewModels()\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        lifecycleScope.launch {\n            repeatOnLifecycle(Lifecycle.State.STARTED) {\n                viewModel.holat.collect { holat ->\n                    Log.d(\"Noldan\", \"UI holati: $holat\")\n                }\n            }\n        }\n    }\n}",
          "output": "D/Noldan: UI holati: Yuklanmoqda\nD/Noldan: UI holati: Tayyor(3)"
        },
        {
          "type": "table",
          "head": [
            "Scope yoki API",
            "Qachon bekor qilinadi"
          ],
          "rows": [
            [
              "<code>viewModelScope</code>",
              "ViewModel tozalanganda"
            ],
            [
              "<code>lifecycleScope</code>",
              "Activity yoki Fragment yo'q qilganda"
            ],
            [
              "<code>repeatOnLifecycle(STARTED)</code>",
              "Lifecycle STARTED ostiga tushganda"
            ],
            [
              "<code>Dispatchers.Main</code>",
              "UI yangilash uchun"
            ],
            [
              "<code>Dispatchers.IO</code>",
              "Bloklovchi tarmoq va fayl ishlari uchun"
            ],
            [
              "<code>GlobalScope</code>",
              "Tavsiya etilmaydi, nazorat qiyin"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Main dispatcher",
          "html": "Unit testlarda <code>Dispatchers.Main</code> mavjud bo'lmaydi; <code>kotlinx-coroutines-test</code> dagi <code>Dispatchers.setMain</code> bilan almashtiring. Android UI'ni faqat Main oqimida yangilang. <code>withContext(Dispatchers.IO)</code> dan keyin UI holatini yangilash xavfsiz, chunki qaytish yana Main'da bo'ladi."
        }
      ],
      "quiz": [
        {
          "q": "viewModelScope qachon bekor qilinadi?",
          "options": [
            "Har recompositionda",
            "ViewModel tozalanganda",
            "Activity onCreate'da",
            "Hech qachon"
          ],
          "answer": 1,
          "explain": "ViewModel o'z hayot doirasini tugatganda unga bog'langan coroutine'lar ham bekor qilinadi."
        },
        {
          "q": "repeatOnLifecycle(STARTED) nima qiladi?",
          "options": [
            "Faqat bir marta collect qiladi",
            "Doimiy fonda ishlaydi",
            "STARTED bo'lganda collect boshlaydi, pastga tushganda bekor qiladi",
            "Faylni ochadi"
          ],
          "answer": 2,
          "explain": "U lifecycle holatiga mos ravishda collect'ni qayta boshlaydi va to'xtatadi."
        },
        {
          "q": "runCatching natijasini muvaffaqiyat va xato bo'yicha ishlash uchun qaysi metod qulay?",
          "options": [
            "fold",
            "map",
            "zip",
            "filter"
          ],
          "answer": 3,
          "explain": "fold success va failure uchun ikkita lambda olib, yagona natija qaytaradi."
        }
      ]
    },
    {
      "id": 39,
      "title": "MVVM arxitektura va qatlamlar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<b>MVVM</b> — Model, View, ViewModel. View faqat UI chizadi va foydalanuvchi hodisalarini ViewModel'ga uzatadi. ViewModel biznes logikani boshqaradi va UI holatini beradi. Model qatlami esa repository orqali tarmoq, baza yoki xotira kabi manbalarni yashiradi. Bu bo'linish test yozishni va kodni qayta ishlatishni osonlashtiradi."
        },
        {
          "type": "code",
          "title": "domen.kt",
          "code": "import kotlinx.coroutines.runBlocking\n\ndata class Vazifa(val id: Int, val nom: String, val bajarildi: Boolean)\n\ninterface VazifaRepozitoriy {\n    suspend fun hammasi(): List<Vazifa>\n}\n\nclass FaolVazifalar(private val repo: VazifaRepozitoriy) {\n    suspend operator fun invoke(): List<Vazifa> =\n        repo.hammasi().filterNot { it.bajarildi }\n}\n\nfun main() = runBlocking {\n    val repo = object : VazifaRepozitoriy {\n        override suspend fun hammasi() = listOf(\n            Vazifa(1, \"Kotlin\", false),\n            Vazifa(2, \"Test\", true),\n        )\n    }\n    println(FaolVazifalar(repo)())\n}",
          "output": "[Vazifa(id=1, nom=Kotlin, bajarildi=false)]"
        },
        {
          "type": "p",
          "html": "ViewModel <code>MutableStateFlow</code> ni ichkarida saqlaydi, tashqariga esa faqat o'qish uchun <code>StateFlow</code> beradi. UI bir yo'nalishda oqadi: foydalanuvchi hodisasi → ViewModel → yangi holat → UI. Bir martalik navigatsiya yoki xabar uchun alohida event oqimi ishlating, holat ichiga aralashtirmang."
        },
        {
          "type": "code",
          "title": "VazifaViewModel.kt",
          "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\ndata class Vazifa(val id: Int, val nom: String, val bajarildi: Boolean)\n\ninterface VazifaRepozitoriy {\n    suspend fun hammasi(): List<Vazifa>\n}\n\nsealed interface UIHolat {\n    data object Yuklanmoqda : UIHolat\n    data class Tayyor(val vazifalar: List<Vazifa>) : UIHolat\n    data class Xato(val xabar: String) : UIHolat\n}\n\nclass VazifaViewModel(\n    private val repo: VazifaRepozitoriy,\n    private val scope: CoroutineScope,\n) {\n    private val _holat = MutableStateFlow<UIHolat>(UIHolat.Yuklanmoqda)\n    val holat = _holat.asStateFlow()\n\n    fun yangila() {\n        scope.launch {\n            _holat.value = runCatching { repo.hammasi() }\n                .fold(\n                    onSuccess = { UIHolat.Tayyor(it) },\n                    onFailure = { UIHolat.Xato(it.message ?: \"Xato\") },\n                )\n        }\n    }\n}\n\nfun main() = runBlocking {\n    val repo = object : VazifaRepozitoriy {\n        override suspend fun hammasi() = listOf(Vazifa(1, \"Kotlin\", false))\n    }\n    val vm = VazifaViewModel(repo, this)\n    vm.yangila()\n    println(vm.holat.value)\n}",
          "output": "Tayyor(vazifalar=[Vazifa(id=1, nom=Kotlin, bajarildi=false)])"
        },
        {
          "type": "table",
          "head": [
            "Qatlam",
            "Vazifasi"
          ],
          "rows": [
            [
              "Model",
              "Domen modellari va biznes qoidalar"
            ],
            [
              "Repository",
              "Ma'lumot manbalarini yashiradi"
            ],
            [
              "Use case",
              "Bitta biznes stsenariyni bajaradi"
            ],
            [
              "ViewModel",
              "UI holatini boshqaradi"
            ],
            [
              "View",
              "UI chizadi va hodisalarni uzatadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Testlash",
          "html": "Repository interfeysi tufayli ViewModel'ni fake manba bilan test qilish mumkin. ViewModel'ga <code>CoroutineScope</code> yoki dispatcher bering — testda <code>TestScope</code> ishlatasiz. UI testlari esa haqiqiy ekran bilan oxirgi qadam bo'lsin. Biznes qoidalarni View ichiga yozmang."
        }
      ],
      "quiz": [
        {
          "q": "MVVM'da View qatlami nimaga bog'liq bo'lmasligi kerak?",
          "options": [
            "ViewModel'ga",
            "UI holatiga",
            "Ma'lumot manbasining tafsilotlariga",
            "Resurslarga"
          ],
          "answer": 2,
          "explain": "View faqat holat va hodisalar bilan ishlaydi; baza yoki tarmoq tafsilotlari repository orqasida yashirinadi."
        },
        {
          "q": "Repository qatlamining vazifasi nima?",
          "options": [
            "UI chizish",
            "Test yozish",
            "Server portini ochish",
            "Ma'lumot manbalarini yashirib, yagona API berish"
          ],
          "answer": 3,
          "explain": "Repository xotira, baza yoki tarmoqni bir xil interfeys ortiga yashiradi."
        },
        {
          "q": "ViewModel tashqariga holatni qanday bergani ma'qul?",
          "options": [
            "Faqat o'qish uchun StateFlow",
            "MutableStateFlow",
            "private oddiy List",
            "GlobalScope"
          ],
          "answer": 0,
          "explain": "Tashqariga immutable ko'rinish berish holatni faqat ViewModel o'zgartirishini kafolatlaydi."
        }
      ]
    },
    {
      "id": 40,
      "title": "Kotlin Multiplatform: umumiy kod va platformalar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Kotlin Multiplatform (KMP)</b> bir xil Kotlin kodini JVM, Android, iOS, JavaScript va native platformalarga chiqarish imkonini beradi. Umumiy kod <code>commonMain</code> da, platformaga xos implementatsiya <code>androidMain</code>, <code>iosMain</code>, <code>jvmMain</code> kabi source set'larda turadi. <code>expect</code> umumiy deklaratsiyani, <code>actual</code> esa platformadagi amalga oshirishni bildiradi."
        },
        {
          "type": "code",
          "title": "Platforma.kt",
          "code": "// commonMain\nexpect fun platformaNomi(): String\n\n// jvmMain\nactual fun platformaNomi(): String = \"JVM\"\n\nfun main() {\n    println(\"Salom, ${platformaNomi()}\")\n}",
          "output": "Salom, JVM"
        },
        {
          "type": "p",
          "html": "Gradle konfiguratsiyasida targetlar e'lon qilinadi: <code>jvm()</code>, <code>androidTarget()</code>, <code>iosArm64()</code>, <code>js(IR)</code> va boshqalar. Har bir target uchun kompilyatsiya vazifasi alohida bo'ladi. KMP'da UI umumiy bo'lishi shart emas: Android'da Compose, iOS'da SwiftUI ishlatib, faqat biznes logikani bo'lishish keng tarqalgan."
        },
        {
          "type": "code",
          "title": "build.gradle.kts",
          "code": "kotlin {\n    jvm()\n    androidTarget()\n    iosArm64()\n    iosSimulatorArm64()\n    js(IR) { browser() }\n\n    sourceSets {\n        commonMain.dependencies {\n            implementation(\"org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.1\")\n        }\n    }\n}",
          "output": "> Task :compileKotlinJvm\n> Task :compileKotlinJs\nBUILD SUCCESSFUL in 12s"
        },
        {
          "type": "table",
          "head": [
            "Target yoki papka",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>commonMain</code>",
              "Barcha platformalar uchun umumiy kod"
            ],
            [
              "<code>androidMain</code>",
              "Android'ga xos kod"
            ],
            [
              "<code>iosMain</code>",
              "iOS'ga xos kod"
            ],
            [
              "<code>jvm()</code>",
              "JVM target"
            ],
            [
              "<code>js(IR)</code>",
              "JavaScript target"
            ],
            [
              "<code>iosArm64()</code>",
              "iOS qurilma uchun native target"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "KMP va Compose Multiplatform",
          "html": "KMP biznes logikani bo'lishadi; <b>Compose Multiplatform</b> esa UI'ni ham umumiy qilish imkonini beradi. Boshlash uchun Kotlin Multiplatform wizard'dan foydalaning. Umumiy kodda platformaga xos API ishlatmang — buning uchun <code>expect/actual</code> yoki interfeys va dependency injection dan foydalaning."
        }
      ],
      "quiz": [
        {
          "q": "expect va actual nimani ta'minlaydi?",
          "options": [
            "JSON serializatsiyasini",
            "UI chizishni",
            "Test izolyatsiyasini",
            "Umumiy deklaratsiya va platformaga xos implementatsiyani bog'laydi"
          ],
          "answer": 3,
          "explain": "commonMain'da expect, platforma source set'ida actual yoziladi va kompilyator ularni moslaydi."
        },
        {
          "q": "KMP'da umumiy kod qaysi source set'da saqlanadi?",
          "options": [
            "commonMain",
            "androidMain",
            "iosMain",
            "test"
          ],
          "answer": 0,
          "explain": "commonMain barcha targetlar uchun umumiy deklaratsiyalar va logikani saqlaydi."
        },
        {
          "q": "KMP faqat Android va iOS uchunmi?",
          "options": [
            "Ha, boshqa target yo'q",
            "Yo'q, JVM, JavaScript va native targetlar ham bor",
            "Faqat server uchun",
            "Faqat desktop uchun"
          ],
          "answer": 1,
          "explain": "KMP bir nechta targetni qo'llab-quvvatlaydi, jumladan JVM, JS, Wasm va native platformalar."
        }
      ]
    },
    {
      "id": 41,
      "title": "Type-safe DSL va lambda receiver",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<b>DSL</b> (domain-specific language) — ma'lum soha uchun qulay mini-til. Kotlin'da uni lambda receiver va extension funksiyalar bilan qurish mumkin. <code>Royxat.() -&gt; Unit</code> tipidagi lambda ichida receiver a'zolariga to'g'ridan-to'g'ri murojaat qilinadi, shuning uchun <code>element(\"Kotlin\")</code> kabi o'qishli yozuv hosil bo'ladi. Gradle Kotlin DSL ham shu uslubda qurilgan."
        },
        {
          "type": "code",
          "title": "royxat.kt",
          "code": "class Royxat {\n    private val elementlar = mutableListOf<String>()\n\n    fun element(qiymat: String) {\n        elementlar.add(qiymat)\n    }\n\n    override fun toString() = elementlar.joinToString(prefix = \"[\", postfix = \"]\")\n}\n\nfun royxat(blok: Royxat.() -> Unit): Royxat {\n    val r = Royxat()\n    r.blok()\n    return r\n}\n\nfun main() {\n    val r = royxat {\n        element(\"Kotlin\")\n        element(\"Compose\")\n    }\n    println(r)\n}",
          "output": "[Kotlin, Compose]"
        },
        {
          "type": "p",
          "html": "Ichma-ich DSL bloklarida tashqi receiver'ga tasodifiy murojaat qilish xavfi bor. <code>@DslMarker</code> annotatsiyasi shu muammoni hal qiladi: marker bilan belgilangan receiver'lar bir-birini yashirib, faqat eng yaqin kontekstga murojaat qoladi. Builder funksiyasi odatda qurilgan obyektni qaytaradi, shuning uchun natijani darhol ishlatish mumkin."
        },
        {
          "type": "code",
          "title": "html.kt",
          "code": "@DslMarker\nannotation class HtmlDsl\n\n@HtmlDsl\nclass Div {\n    private val bolalar = mutableListOf<String>()\n\n    fun p(matn: String) {\n        bolalar.add(\"<p>$matn</p>\")\n    }\n\n    fun div(blok: Div.() -> Unit) {\n        val ichki = Div().apply(blok)\n        bolalar.add(\"<div>${ichki.render()}</div>\")\n    }\n\n    fun render() = bolalar.joinToString(\"\")\n}\n\nfun html(blok: Div.() -> Unit): String = Div().apply(blok).render()\n\nfun main() {\n    val natija = html {\n        p(\"Salom\")\n        div {\n            p(\"Noldan\")\n        }\n    }\n    println(natija)\n}",
          "output": "<p>Salom</p><div><p>Noldan</p></div>"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>A.() -&gt; Unit</code>",
              "Receiver'li lambda tipi"
            ],
            [
              "<code>fun html(blok: Div.() -&gt; Unit)</code>",
              "Builder funksiyasi"
            ],
            [
              "<code>apply(blok)</code>",
              "Receiverni sozlab, o'zini qaytaradi"
            ],
            [
              "<code>@DslMarker</code>",
              "Ichma-ich receiver'larni cheklaydi"
            ],
            [
              "<code>buildString { }</code>",
              "Standart kutubxonadagi DSL misoli"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "DSL qachon oqlanadi?",
          "html": "Takrorlanuvchi konfiguratsiya yoki ierarxik tuzilma (HTML, test scenariysi, UI layout) uchun DSL juda qulay. Oddiy biznes logikani DSL ko'rinishida yozish ortiqcha abstraksiya bo'ladi. DSL'ni kichik tuting, xatolarni kompilyatsiya vaqtida ushlash uchun tiplardan foydalaning."
        }
      ],
      "quiz": [
        {
          "q": "Royxat.() -> Unit tipidagi lambda nima imkon beradi?",
          "options": [
            "Receiver a'zolariga to'g'ridan-to'g'ri murojaat qilish",
            "Faqat it orqali murojaat qilish",
            "Faqat qiymat qaytarish",
            "Faqat null bilan ishlash"
          ],
          "answer": 0,
          "explain": "Receiver'li lambda ichida this avtomatik Royxat bo'ladi, shuning uchun a'zolar qisqa yoziladi."
        },
        {
          "q": "@DslMarker nima uchun kerak?",
          "options": [
            "Tashqi receiver'ga tasodifiy murojaatni cheklash uchun",
            "JSON generatsiyasi uchun",
            "Testlarni avtomatlashtirish uchun",
            "Null safety uchun"
          ],
          "answer": 1,
          "explain": "Marker ichma-ich DSL bloklarida qaysi receiver faol ekanini aniq qiladi va chalkashlikni kamaytiradi."
        },
        {
          "q": "Builder funksiyasi odatda nimani qaytaradi?",
          "options": [
            "Har doim Unit",
            "Faqat String",
            "Qurilgan obyektni",
            "Boolean"
          ],
          "answer": 2,
          "explain": "Builder lambdani bajarib, tayyor obyekt yoki uning natijasini qaytaradi."
        }
      ]
    },
    {
      "id": 42,
      "title": "Annotatsiyalar va reflection",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Annotatsiya</b> kodga metama'lumot qo'shadi: qaysi jadvalga mos kelish, qanday saqlanish yoki qanday tekshirilish. <code>@Target</code> annotatsiya qayerda qo'llanishini, <code>@Retention</code> esa qancha vaqt saqlanishini belgilaydi. <code>RUNTIME</code> retention bilan annotatsiyani reflection orqali o'qish mumkin. Reflection <code>kotlin-reflect</code> kutubxonasini talab qiladi."
        },
        {
          "type": "code",
          "title": "jadval.kt",
          "code": "@Target(AnnotationTarget.CLASS)\n@Retention(AnnotationRetention.RUNTIME)\nannotation class Jadval(val nom: String)\n\n@Jadval(\"foydalanuvchilar\")\ndata class Foydalanuvchi(val id: Int, val ism: String)\n\nfun main() {\n    val annotatsiya = Foydalanuvchi::class.annotations\n        .filterIsInstance<Jadval>()\n        .first()\n    println(annotatsiya.nom)\n    println(Foydalanuvchi::class.simpleName)\n}",
          "output": "foydalanuvchilar\nFoydalanuvchi"
        },
        {
          "type": "p",
          "html": "Reflection orqali klass nomi, xossalari va funksiyalarini ish vaqtida o'rganish mumkin. <code>memberProperties</code> barcha xossalarni beradi; tartib kafolatlanmagani uchun natijani saralash yaxshi amaliyot. Reflection kuchli, lekin sekin: uni freymvorklar va kutubxonalar uchun ishlating, oddiy biznes kodda undan qoching."
        },
        {
          "type": "code",
          "title": "xossalar.kt",
          "code": "import kotlin.reflect.full.memberProperties\n\ndata class Mahsulot(val nom: String, val narx: Int)\n\nfun main() {\n    val p = Mahsulot(\"Kitob\", 45000)\n    for (xossa in Mahsulot::class.memberProperties.sortedBy { it.name }) {\n        println(\"${xossa.name} = ${xossa.get(p)}\")\n    }\n}",
          "output": "narx = 45000\nnom = Kitob"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>@Target</code>",
              "Annotatsiya qo'llanish joylarini belgilaydi"
            ],
            [
              "<code>@Retention(RUNTIME)</code>",
              "Annotatsiyani ish vaqtida saqlaydi"
            ],
            [
              "<code>@Repeatable</code>",
              "Bir nechta marta qo'llashga ruxsat beradi"
            ],
            [
              "<code>KClass</code>",
              "Klass haqidagi reflection obyekti"
            ],
            [
              "<code>memberProperties</code>",
              "Xossalar ro'yxatini beradi"
            ],
            [
              "<code>findAnnotation&lt;T&gt;()</code>",
              "Annotatsiyani qulay topadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Reflection narxi",
          "html": "Reflection chaqiruvlari oddiy kodga qaraganda sekinroq va kodni kuzatishni qiyinlashtiradi. Serializatsiya, ORM yoki DI kabi umumiy vazifalar uchun tayyor kutubxonalar bor. O'z annotatsiyangizni yaratishdan oldin Kotlin standart vositalari yetarliligini tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "Annotatsiyani reflection orqali ish vaqtida o'qish uchun qaysi retention kerak?",
          "options": [
            "SOURCE",
            "RUNTIME",
            "BINARY",
            "LOCAL"
          ],
          "answer": 1,
          "explain": "RUNTIME annotatsiya klass faylida saqlanadi va reflection orqali mavjud bo'ladi."
        },
        {
          "q": "KClass obyektini qanday olish mumkin?",
          "options": [
            "Obyekt.class",
            "classOf<Obyekt>()",
            "Obyekt::class",
            "Obyekt::javaClass"
          ],
          "answer": 2,
          "explain": "::class Kotlin reflection obyekti KClass ni qaytaradi."
        },
        {
          "q": "@Target nimani belgilaydi?",
          "options": [
            "Annotatsiya qiymatini",
            "Saqlash muddatini",
            "Fayl nomini",
            "Annotatsiya qo'llanishi mumkin bo'lgan joylarni"
          ],
          "answer": 3,
          "explain": "Target klass, funksiya, parametr kabi ruxsat etilgan qo'llanish joylarini cheklaydi."
        }
      ]
    },
    {
      "id": 43,
      "title": "JVM concurrency: thread, atomika va Mutex",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Bir nechta oqim bitta umumiy holatni bir vaqtda o'zgartirsa, <b>race condition</b> yuzaga keladi. Yechimlar: umumiy holatni o'zgartirmaslik, atomar operatsiyalar (<code>AtomicInteger</code>), sinxronizatsiya yoki coroutine'larda <code>Mutex</code>. Har bir yechimning narxi bor, shuning uchun avval muammoni o'lchab, keyin tanlang."
        },
        {
          "type": "code",
          "title": "atomik.kt",
          "code": "import java.util.concurrent.atomic.AtomicInteger\nimport kotlin.concurrent.thread\n\nfun main() {\n    val hisob = AtomicInteger(0)\n    val ishlar = (1..4).map {\n        thread {\n            repeat(1000) { hisob.incrementAndGet() }\n        }\n    }\n    ishlar.forEach { it.join() }\n    println(hisob.get())\n}",
          "output": "4000"
        },
        {
          "type": "p",
          "html": "<code>synchronized</code> bloki oddiy oqimlarda ishlaydi, lekin oqimni bloklaydi. Coroutine'larda esa <code>Mutex.withLock { }</code> ishlatiladi — u bloklamaydi, suspend qiladi. <code>Dispatchers.Default.limitedParallelism(1)</code> ham umumiy holatni ketma-ket ishlatish uchun qulay. Muhim qoida: kritik bo'limni iloji boricha qisqa tuting."
        },
        {
          "type": "code",
          "title": "mutex.kt",
          "code": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.sync.Mutex\nimport kotlinx.coroutines.sync.withLock\n\nfun main() = runBlocking {\n    val mutex = Mutex()\n    var hisob = 0\n    val ishlar = List(4) {\n        launch(Dispatchers.Default) {\n            repeat(1000) {\n                mutex.withLock { hisob++ }\n            }\n        }\n    }\n    ishlar.joinAll()\n    println(hisob)\n}",
          "output": "4000"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Xususiyati"
          ],
          "rows": [
            [
              "<code>thread { }</code>",
              "JVM oqimini ishga tushiradi"
            ],
            [
              "<code>AtomicInteger</code>",
              "Atomar oshirish va o'qish"
            ],
            [
              "<code>synchronized</code>",
              "Bloklovchi mutual exclusion"
            ],
            [
              "<code>Mutex.withLock</code>",
              "Suspend bo'ladigan mutual exclusion"
            ],
            [
              "<code>limitedParallelism(1)</code>",
              "Bitta koroutine bajarilishini ta'minlaydi"
            ],
            [
              "<code>Immutable holat</code>",
              "Musobaqa muammosini butunlay yo'q qiladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Ko'rinuvchanlik",
          "html": "Bir oqim yozgan qiymat boshqa oqimda darhol ko'rinmasligi mumkin. <code>@Volatile</code> o'zgaruvchi uchun ko'rinuvchanlikni ta'minlaydi, lekin murakkab amallarni atomar qilmaydi. <code>AtomicInteger</code> yoki lock ishlating. Coroutine'lar uchun esa umumiy holatni bitta kontekstda saqlash eng sodda yechim bo'lishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "AtomicInteger nima uchun ishlatiladi?",
          "options": [
            "UI chizish uchun",
            "JSON o'girish uchun",
            "Bir nechta oqimda xavfsiz hisoblash uchun",
            "Fayl yozish uchun"
          ],
          "answer": 2,
          "explain": "AtomicInteger oshirish kabi amallarni atomar bajaradi, race condition'ni oldini oladi."
        },
        {
          "q": "Mutex nimasi bilan synchronized dan farq qiladi?",
          "options": [
            "Mutex tezroq ishlaydi",
            "Ular butunlay bir xil",
            "Mutex faqat Android'da ishlaydi",
            "Mutex suspend funksiyalarda bloklamasdan ishlaydi"
          ],
          "answer": 3,
          "explain": "Mutex kutish paytida oqimni bloklamaydi, balki coroutine'ni suspend qiladi."
        },
        {
          "q": "Race condition qachon yuzaga keladi?",
          "options": [
            "Bir nechta oqim umumiy holatni bir vaqtda o'zgartirsa",
            "Faqat bitta oqim bo'lganda",
            "Kod kompilyatsiya bo'lmasa",
            "Fayl yopilmasa"
          ],
          "answer": 0,
          "explain": "Sinxronizatsiyasiz parallel o'zgarishlar natijani oldindan aytib bo'lmaydigan qiladi."
        }
      ]
    },
    {
      "id": 44,
      "title": "Performance: sequence, inline va value class",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin'da samarali kod yozish uchun ortiqcha oraliq kolleksiyalar, lambda obyektlari va wrapper'lardan qochish muhim. <b>Sequence</b> katta zanjirlarda oraliq ro'yxat yaratmaydi, <b>inline</b> lambda chaqiruvini kod ichiga joylaydi, <b>value class</b> esa bitta maydonli wrapper'ni imkon qadar obyektsiz saqlaydi. Avval o'lchov qiling, keyin optimallashtiring."
        },
        {
          "type": "code",
          "title": "sequence.kt",
          "code": "fun main() {\n    val natija = (1..5)\n        .asSequence()\n        .map {\n            println(\"map: $it\")\n            it * 2\n        }\n        .first { it > 5 }\n    println(\"Natija: $natija\")\n}",
          "output": "map: 1\nmap: 2\nmap: 3\nNatija: 6"
        },
        {
          "type": "p",
          "html": "Sequence barcha elementlarni qayta ishlamaydi: <code>first</code> shart bajarilishi bilan to'xtaydi. Kichik ro'yxatlarda esa oddiy <code>map</code> tezroq bo'lishi mumkin, chunki sequence har element uchun qo'shimcha obyekt yaratadi. <code>inline</code> funksiya lambda parametrini kodga joylashtiradi va non-local return'ga ruxsat beradi; juda katta funksiyani inline qilish kod hajmini oshiradi."
        },
        {
          "type": "code",
          "title": "qiymat.kt",
          "code": "@JvmInline\nvalue class FoydalanuvchiId(val qiymat: Long)\n\nfun salom(id: FoydalanuvchiId) = \"ID: ${id.qiymat}\"\n\ninline fun olchov(blok: () -> String): String = blok()\n\nfun main() {\n    println(salom(FoydalanuvchiId(42)))\n    println(olchov { \"inline ishladi\" })\n}",
          "output": "ID: 42\ninline ishladi"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Qachon foydali"
          ],
          "rows": [
            [
              "<code>Sequence</code>",
              "Katta kolleksiyada uzun map/filter zanjiri"
            ],
            [
              "<code>inline</code>",
              "Kichik, tez-tez chaqiriladigan HOF"
            ],
            [
              "<code>value class</code>",
              "Tip xavfsizligi kerak, wrapper narxi yo'q"
            ],
            [
              "<code>buildString</code>",
              "Ko'p bo'lakli matn yig'ish"
            ],
            [
              "<code>use</code>",
              "Resursni avtomatik yopish"
            ],
            [
              "<code>Benchmark</code>",
              "Optimizatsiyani o'lchash"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Erta optimizatsiya",
          "html": "\"Mikro-optimizatsiya\" ko'pincha kodni murakkablashtiradi, foyda esa sezilmaydi. Avval profiler bilan eng qimmat joyni toping, keyin o'lchangan yaxshilanish kiriting. Kod o'qishliligi va xavfsizligi odatda bir necha millisekunddan muhimroq. JMH yoki kotlinx-benchmark bilan ishonchli o'lchov qiling."
        }
      ],
      "quiz": [
        {
          "q": "Sequence'dagi oraliq operatorlar qachon bajariladi?",
          "options": [
            "Zanjir yozilganda darhol",
            "Har element qo'shilganda",
            "Faqat dastur oxirida",
            "Terminal operator chaqirilganda"
          ],
          "answer": 3,
          "explain": "Sequence lazy: map/filter kabi amallar first yoki toList kabi terminal amalda ishga tushadi."
        },
        {
          "q": "Value class'ning asosiy afzalligi nima?",
          "options": [
            "Qo'shimcha wrapper obyekt ajratilishini kamaytiradi",
            "JSON'ni avtomatik tezlashtiradi",
            "Null safety'ni o'chiradi",
            "Har doim sinxronizatsiya qiladi"
          ],
          "answer": 0,
          "explain": "Value class ko'p holatda primitive yoki mavjud tip sifatida saqlanadi, lekin tip xavfsizligini beradi."
        },
        {
          "q": "Inline funksiya nimani kamaytiradi?",
          "options": [
            "Lambda obyektlari va chaqiruv xarajatini",
            "Kod hajmini har doim",
            "Xotirani butunlay",
            "Testlar sonini"
          ],
          "answer": 1,
          "explain": "Inline lambda kodini chaqiruv joyiga joylaydi, shuning uchun alohida lambda obyekti kerak bo'lmaydi."
        }
      ]
    },
    {
      "id": 45,
      "title": "Kotlin'da dizayn patternlar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Ko'p dizayn patternlar Kotlin'da til vositalari bilan soddalashadi. <b>Singleton</b> uchun <code>object</code>, <b>factory</b> uchun sealed ierarxiya va <code>when</code>, <b>strategy</b> uchun funksiya tipidagi lambda, <b>decorator</b> uchun interfeys delegatsiyasi ishlatiladi. Pattern nomini yodlash emas, muammoga mos yechim tanlash muhim."
        },
        {
          "type": "code",
          "title": "tolov.kt",
          "code": "object Sozlamalar {\n    var til: String = \"uz\"\n    fun korsat() = \"Til: $til\"\n}\n\nsealed interface Tolov {\n    data class Naqd(val summa: Int) : Tolov\n    data class Karta(val summa: Int, val raqam: String) : Tolov\n}\n\nfun toloveniBoshla(tolov: Tolov): String = when (tolov) {\n    is Tolov.Naqd -> \"Naqd: ${tolov.summa}\"\n    is Tolov.Karta -> \"Karta: ${tolov.raqam.takeLast(4)}\"\n}\n\nfun main() {\n    Sozlamalar.til = \"en\"\n    println(Sozlamalar.korsat())\n    println(toloveniBoshla(Tolov.Karta(50000, \"8600123412345678\")))\n}",
          "output": "Til: en\nKarta: 5678"
        },
        {
          "type": "p",
          "html": "Decorator mavjud obyektni o'rab, xatti-harakatini kengaytiradi. Kotlin'da <code>by</code> delegatsiyasi barcha metodlarni ichki obyektga uzatadi, klass esa faqat o'zgartirmoqchi bo'lgan metodini yozadi. Strategy uchun alohida interfeys shart emas: <code>(Int) -&gt; Int</code> kabi funksiya tipi yetarli."
        },
        {
          "type": "code",
          "title": "narx.kt",
          "code": "interface Narx {\n    fun hisobla(soni: Int): Int\n}\n\nclass AsosiyNarx(private val birlik: Int) : Narx {\n    override fun hisobla(soni: Int) = birlik * soni\n}\n\nclass Chegirma(\n    private val asosiy: Narx,\n    private val foiz: Int,\n) : Narx by asosiy {\n    override fun hisobla(soni: Int) = asosiy.hisobla(soni) * (100 - foiz) / 100\n}\n\nfun main() {\n    val narx = Chegirma(AsosiyNarx(20000), 10)\n    println(narx.hisobla(3))\n}",
          "output": "54000"
        },
        {
          "type": "table",
          "head": [
            "Pattern",
            "Kotlin vositasi"
          ],
          "rows": [
            [
              "Singleton",
              "<code>object</code> yoki <code>companion object</code>"
            ],
            [
              "Factory",
              "Sealed ierarxiya va <code>when</code>"
            ],
            [
              "Strategy",
              "Funksiya tipi va lambda"
            ],
            [
              "Decorator",
              "Interfeys delegatsiyasi <code>by</code>"
            ],
            [
              "Observer",
              "<code>Flow</code> yoki <code>StateFlow</code>"
            ],
            [
              "Builder",
              "Receiver'li lambda va <code>apply</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Ortiqcha abstraksiya",
          "html": "Kichik loyihada barcha patternlarni qo'llash shart emas. Avval oddiy funksiya yozing; takrorlanish yoki o'zgarish nuqtasi paydo bo'lganda abstraksiya kiriting. Pattern kodni tushunarli qilishi kerak, pattern uchun kod yozish esa teskari natija beradi."
        }
      ],
      "quiz": [
        {
          "q": "object deklaratsiyasi nimani beradi?",
          "options": [
            "Singleton nusxani",
            "Har chaqiruvda yangi obyektni",
            "Interfeysni",
            "Data class'ni"
          ],
          "answer": 0,
          "explain": "object bir marta yaratiladi va butun dastur bo'ylab bitta nusxada ishlaydi."
        },
        {
          "q": "Strategy pattern'ni Kotlin'da qanday soddalashtirish mumkin?",
          "options": [
            "Funksiya tipidagi lambdalar bilan",
            "Faqat meros orqali",
            "Faqat reflection bilan",
            "Faqat coroutines bilan"
          ],
          "answer": 1,
          "explain": "Xatti-harakatni funksiya sifatida uzatish alohida klasslar sonini kamaytiradi."
        },
        {
          "q": ": Narx by asosiy qaysi patternni amalga oshiradi?",
          "options": [
            "Factory",
            "Observer",
            "Decorator yoki delegatsiya",
            "Singleton"
          ],
          "answer": 2,
          "explain": "Klass interfeys metodlarini ichki obyektga uzatib, o'z xatti-harakatini kengaytiradi."
        }
      ]
    },
    {
      "id": 46,
      "title": "Loyiha 1: Vazifa API — domen modeli va repository",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Kursning amaliy loyihasi — <b>Vazifa API</b>: vazifalarni qo'shish, ko'rish va bajarilgan deb belgilash uchun kichik REST xizmat. Loyihani to'rt bosqichda quramiz: domen va repository, xizmat qatlami va testlar, Ktor marshrutlari, so'ngra client va UI. Birinchi qadamda o'zgarmas model va saqlash interfeysini yaratamiz."
        },
        {
          "type": "code",
          "title": "Vazifa.kt",
          "code": "data class Vazifa(\n    val id: Int,\n    val nom: String,\n    val bajarildi: Boolean = false,\n)\n\ninterface VazifaRepozitoriy {\n    fun hammasi(): List<Vazifa>\n    fun qosh(nom: String): Vazifa\n    fun bajar(id: Int): Boolean\n}\n\nfun main() {\n    val v = Vazifa(1, \"Kotlin o'rganish\")\n    val yangi = v.copy(bajarildi = true)\n    println(v)\n    println(yangi)\n    println(v == yangi)\n}",
          "output": "Vazifa(id=1, nom=Kotlin o'rganish, bajarildi=false)\nVazifa(id=1, nom=Kotlin o'rganish, bajarildi=true)\nfalse"
        },
        {
          "type": "p",
          "html": "Model <code>data class</code> bo'lgani uchun <code>copy()</code> bilan yangilangan nusxa yaratish oson, tenglik esa qiymatlar bo'yicha tekshiriladi. Repository interfeysi saqlash usulini yashiradi: keyinchalik xotira o'rniga Room yoki PostgreSQL qo'ysangiz, xizmat va route kodlari o'zgarmaydi. Hozircha oddiy xotira implementatsiyasi yetarli."
        },
        {
          "type": "code",
          "title": "XotiraRepozitoriy.kt",
          "code": "class XotiraRepozitoriy : VazifaRepozitoriy {\n    private val vazifalar = mutableListOf<Vazifa>()\n    private var keyingiId = 1\n\n    override fun hammasi(): List<Vazifa> = vazifalar.toList()\n\n    override fun qosh(nom: String): Vazifa {\n        val vazifa = Vazifa(keyingiId, nom)\n        keyingiId++\n        vazifalar.add(vazifa)\n        return vazifa\n    }\n\n    override fun bajar(id: Int): Boolean {\n        val indeks = vazifalar.indexOfFirst { it.id == id }\n        if (indeks == -1) return false\n        vazifalar[indeks] = vazifalar[indeks].copy(bajarildi = true)\n        return true\n    }\n}\n\nfun main() {\n    val repo = XotiraRepozitoriy()\n    repo.qosh(\"Kotlin o'rganish\")\n    repo.qosh(\"Loyihani yakunlash\")\n    repo.bajar(1)\n    repo.hammasi().forEach(::println)\n    println(\"Ochiq: \" + repo.hammasi().count { !it.bajarildi })\n}",
          "output": "Vazifa(id=1, nom=Kotlin o'rganish, bajarildi=true)\nVazifa(id=2, nom=Loyihani yakunlash, bajarildi=false)\nOchiq: 1"
        },
        {
          "type": "ul",
          "items": [
            "<code>Vazifa.kt</code> — o'zgarmas domen modeli va repository shartnomasi.",
            "<code>XotiraRepozitoriy.kt</code> — ro'yxat, ID hisoblagichi va CRUD amallari.",
            "<code>VazifaXizmati.kt</code> — keyingi darsda qo'shiladigan biznes qoidalar.",
            "<code>Application.kt</code> — Ktor marshrutlari va JSON javoblar.",
            "<code>client/</code> — API'ni iste'mol qiluvchi client va Compose ekran."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Nega interfeys?",
          "html": "Interfeys testda fake repository, ishlab chiqarishda haqiqiy baza ulash imkonini beradi. <code>hammasi()</code> ichki ro'yxatning nusxasini qaytaradi — tashqi kod ro'yxatni o'zgartirib, repository holatini buzolmaydi. Bu kichik himoya keyinchalik nozik xatolarning oldini oladi."
        }
      ],
      "quiz": [
        {
          "q": "Repository interfeysi nima uchun kerak?",
          "options": [
            "UI'ni tezlashtirish uchun",
            "Saqlash usulini biznes kodidan ajratish uchun",
            "JSON'ni o'girish uchun",
            "Testlarni o'chirish uchun"
          ],
          "answer": 1,
          "explain": "Interfeys orqali xotira, baza yoki tarmoq implementatsiyasini almashtirish mumkin."
        },
        {
          "q": "hammasi() nima uchun toList() qaytaradi?",
          "options": [
            "Nusxa tezroq ishlaydi",
            "Saralash uchun",
            "Ichki ro'yxatni tashqi o'zgarishdan himoya qiladi",
            "Null safety uchun"
          ],
          "answer": 2,
          "explain": "Nusxa qaytarish orqali tashqi kod repository'ning ichki kolleksiyasini o'zgartira olmaydi."
        },
        {
          "q": "Mavjud vazifani yangilash uchun qaysi funksiya ishlatiladi?",
          "options": [
            "clone()",
            "new()",
            "cast",
            "copy()"
          ],
          "answer": 3,
          "explain": "data class copy() tanlangan maydon o'zgartirilgan yangi nusxa beradi."
        }
      ]
    },
    {
      "id": 47,
      "title": "Loyiha 2: xizmat qatlami va testlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Repository faqat saqlash bilan shug'ullanadi; biznes qoidalar alohida <b>xizmat qatlami</b>da bo'lishi kerak. Masalan, vazifa nomi bo'sh yoki juda qisqa bo'lmasligi, mavjud bo'lmagan ID uchun xato qaytarilishi. Xizmat natijani <code>Result</code> bilan qaytaradi — route va UI xatoni bir xil usulda ko'radi."
        },
        {
          "type": "code",
          "title": "VazifaXizmati.kt",
          "code": "data class Vazifa(val id: Int, val nom: String, val bajarildi: Boolean = false)\n\ninterface VazifaRepozitoriy {\n    fun hammasi(): List<Vazifa>\n    fun qosh(nom: String): Vazifa\n    fun bajar(id: Int): Boolean\n}\n\nclass VazifaXizmati(private val repo: VazifaRepozitoriy) {\n    fun qosh(nom: String): Result<Vazifa> = runCatching {\n        val toza = nom.trim()\n        require(toza.length >= 3) { \"Nom kamida 3 belgi bo'lsin\" }\n        repo.qosh(toza)\n    }\n\n    fun bajar(id: Int): Result<Unit> = runCatching {\n        require(repo.bajar(id)) { \"Vazifa topilmadi: $id\" }\n    }\n}\n\nfun main() {\n    val xizmat = VazifaXizmati(object : VazifaRepozitoriy {\n        private val royxat = mutableListOf<Vazifa>()\n\n        override fun hammasi() = royxat.toList()\n\n        override fun qosh(nom: String): Vazifa {\n            val v = Vazifa(royxat.size + 1, nom)\n            royxat.add(v)\n            return v\n        }\n\n        override fun bajar(id: Int): Boolean {\n            val indeks = royxat.indexOfFirst { it.id == id }\n            if (indeks == -1) return false\n            royxat[indeks] = royxat[indeks].copy(bajarildi = true)\n            return true\n        }\n    })\n\n    println(xizmat.qosh(\"Kotlin\"))\n    println(xizmat.qosh(\"  \"))\n    println(xizmat.qosh(\"Testlar yozish\").getOrNull()?.id)\n}",
          "output": "Success(Vazifa(id=1, nom=Kotlin, bajarildi=false))\nFailure(java.lang.IllegalArgumentException: Nom kamida 3 belgi bo'lsin)\n2"
        },
        {
          "type": "p",
          "html": "Xizmatni test qilish uchun repository'ning sodda fake nusxasi yetarli. Testlar biznes qoidalarini tekshiradi, tarmoq yoki bazaga bog'lanmaydi — shuning uchun tez va barqaror. Xato holatida <code>isFailure</code> va <code>exceptionOrNull()</code> ni, muvaffaqiyatda esa <code>getOrNull()</code> ni tekshiring."
        },
        {
          "type": "code",
          "title": "VazifaXizmatiTest.kt",
          "code": "import kotlin.test.Test\nimport kotlin.test.assertEquals\nimport kotlin.test.assertTrue\n\nprivate class FakeRepo : VazifaRepozitoriy {\n    private val royxat = mutableListOf<Vazifa>()\n\n    override fun hammasi() = royxat.toList()\n\n    override fun qosh(nom: String) =\n        Vazifa(royxat.size + 1, nom).also { royxat.add(it) }\n\n    override fun bajar(id: Int) = false\n}\n\nclass VazifaXizmatiTest {\n    @Test\n    fun qisqaNomRadEtildi() {\n        val xizmat = VazifaXizmati(FakeRepo())\n        val natija = xizmat.qosh(\"ab\")\n        assertTrue(natija.isFailure)\n        assertEquals(\n            \"Nom kamida 3 belgi bo'lsin\",\n            natija.exceptionOrNull()?.message,\n        )\n    }\n\n    @Test\n    fun togriNomQabulQilindi() {\n        val xizmat = VazifaXizmati(FakeRepo())\n        assertEquals(\"Kotlin\", xizmat.qosh(\" Kotlin \").getOrNull()?.nom)\n    }\n}",
          "output": "> Task :test\n2 tests completed, 0 failed\nBUILD SUCCESSFUL in 2s"
        },
        {
          "type": "table",
          "head": [
            "Qatlam",
            "Mas'uliyati"
          ],
          "rows": [
            [
              "Repository",
              "Saqlash va o'qish, biznes qoidasiz"
            ],
            [
              "Xizmat",
              "Validatsiya va biznes qoidalar"
            ],
            [
              "Route",
              "HTTP, status kod va JSON"
            ],
            [
              "Test",
              "Qoidalarni izolyatsiyada tekshirish"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Result chegarasi",
          "html": "<code>require</code> istisnosi <code>runCatching</code> ichida ushlanadi va <code>Result.failure</code> ga aylanadi. Route qatlami bu natijani HTTP statusga o'giradi: xato xabari 400 yoki 404 bo'lishi mumkin. Istisnoni butun ilova bo'ylab tashlash o'rniga chegarada aniq javobga aylantiring."
        }
      ],
      "quiz": [
        {
          "q": "Biznes qoidalar qaysi qatlamda tekshirilishi kerak?",
          "options": [
            "Faqat route'da",
            "Faqat UI'da",
            "Xizmat qatlamida",
            "Faqat ma'lumotlar bazasida"
          ],
          "answer": 2,
          "explain": "Xizmat qatlami qoidalarni markazlashtiradi, shuning uchun ularni qayta ishlatish va test qilish oson."
        },
        {
          "q": "require shart buzilganda runCatching natijasi qanday bo'ladi?",
          "options": [
            "Success",
            "null",
            "Istisno tashqariga chiqadi",
            "Failure"
          ],
          "answer": 3,
          "explain": "runCatching istisnoni ushlab, xato holatini Result.failure sifatida qaytaradi."
        },
        {
          "q": "Nega validatsiyani to'g'ridan-to'g'ri route ichida yozish tavsiya etilmaydi?",
          "options": [
            "Qoidalar takrorlanadi va ularni test qilish qiyinlashadi",
            "Ktor umuman ishlamaydi",
            "JSON buziladi",
            "Port band bo'lib qoladi"
          ],
          "answer": 0,
          "explain": "Route faqat HTTP bilan shug'ullanishi, qoidalar esa bir joyda turishi kerak."
        }
      ]
    },
    {
      "id": 48,
      "title": "Loyiha 3: Ktor REST API",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi xizmatni HTTP orqali ochamiz. Ktor'da har bir endpoint <code>routing { }</code> ichida yoziladi. <code>GET /vazifalar</code> ro'yxatni, <code>POST /vazifalar</code> yangi vazifa yaratishni, <code>PATCH /vazifalar/{id}/bajar</code> esa bajarilgan deb belgilashni beradi. JSON uchun ContentNegotiation plugin o'rnatiladi."
        },
        {
          "type": "code",
          "title": "Application.kt",
          "code": "import io.ktor.http.*\nimport io.ktor.serialization.kotlinx.json.*\nimport io.ktor.server.application.*\nimport io.ktor.server.engine.*\nimport io.ktor.server.netty.*\nimport io.ktor.server.plugins.contentnegotiation.*\nimport io.ktor.server.request.*\nimport io.ktor.server.response.*\nimport io.ktor.server.routing.*\nimport kotlinx.serialization.Serializable\n\n@Serializable\ndata class Vazifa(val id: Int, val nom: String, val bajarildi: Boolean = false)\n\n@Serializable\ndata class YangiVazifa(val nom: String)\n\nclass XotiraRepozitoriy {\n    private val vazifalar = mutableListOf<Vazifa>()\n    private var keyingiId = 1\n\n    fun hammasi(): List<Vazifa> = vazifalar.toList()\n\n    fun qosh(nom: String): Vazifa {\n        val v = Vazifa(keyingiId++, nom)\n        vazifalar.add(v)\n        return v\n    }\n\n    fun bajar(id: Int): Boolean {\n        val indeks = vazifalar.indexOfFirst { it.id == id }\n        if (indeks == -1) return false\n        vazifalar[indeks] = vazifalar[indeks].copy(bajarildi = true)\n        return true\n    }\n}\n\nfun Application.module() {\n    install(ContentNegotiation) { json() }\n    val repo = XotiraRepozitoriy()\n\n    routing {\n        get(\"/vazifalar\") {\n            call.respond(repo.hammasi())\n        }\n        post(\"/vazifalar\") {\n            val sorov = call.receive<YangiVazifa>()\n            call.respond(HttpStatusCode.Created, repo.qosh(sorov.nom))\n        }\n        patch(\"/vazifalar/{id}/bajar\") {\n            val id = call.parameters[\"id\"]?.toIntOrNull() ?: 0\n            if (repo.bajar(id)) {\n                call.respond(HttpStatusCode.NoContent)\n            } else {\n                call.respond(HttpStatusCode.NotFound, mapOf(\"xato\" to \"Topilmadi\"))\n            }\n        }\n    }\n}\n\nfun main() {\n    embeddedServer(Netty, port = 8080, module = Application::module)\n        .start(wait = true)\n}",
          "output": "$ curl -X POST localhost:8080/vazifalar -H \"Content-Type: application/json\" -d '{\"nom\":\"Kotlin asoslari\"}'\n{\"id\":1,\"nom\":\"Kotlin asoslari\",\"bajarildi\":false}\n$ curl localhost:8080/vazifalar\n[{\"id\":1,\"nom\":\"Kotlin asoslari\",\"bajarildi\":false}]"
        },
        {
          "type": "p",
          "html": "API'ni test qilish uchun haqiqiy port ochish shart emas: <code>testApplication</code> va <code>ktor-server-test-host</code> yordamida marshrutlar xotirada tekshiriladi. Test HTTP statusni va javob tanasini tekshiradi. Keyingi qadamda repository'ni baza bilan almashtirsangiz, testlar o'zgarmaydi."
        },
        {
          "type": "code",
          "title": "ApiTest.kt",
          "code": "import io.ktor.client.request.*\nimport io.ktor.client.statement.*\nimport io.ktor.http.*\nimport io.ktor.server.testing.*\nimport kotlin.test.Test\nimport kotlin.test.assertEquals\n\nclass ApiTest {\n    @Test\n    fun boshRoyxatQaytadi() = testApplication {\n        application { module() }\n        val javob = client.get(\"/vazifalar\")\n        assertEquals(HttpStatusCode.OK, javob.status)\n        assertEquals(\"[]\", javob.bodyAsText())\n    }\n}",
          "output": "> Task :test\n1 test completed, 0 failed\nBUILD SUCCESSFUL in 3s"
        },
        {
          "type": "table",
          "head": [
            "Endpoint",
            "Muvaffaqiyatli javob"
          ],
          "rows": [
            [
              "<code>GET /vazifalar</code>",
              "200 OK va JSON ro'yxat"
            ],
            [
              "<code>POST /vazifalar</code>",
              "201 Created va yangi vazifa"
            ],
            [
              "<code>PATCH /vazifalar/{id}/bajar</code>",
              "204 No Content"
            ],
            [
              "<code>GET /vazifalar/{id}</code>",
              "200 yoki 404"
            ],
            [
              "Xato so'rov",
              "400 Bad Request"
            ],
            [
              "Topilmagan ID",
              "404 Not Found"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ishlab chiqarishga tayyorlash",
          "html": "Hozirgi repository xotirada, server qayta ishga tushsa ma'lumot yo'qoladi. Keyingi qadam: bazaga saqlash, autentifikatsiya, CORS va so'rov tezligini cheklash. Port va maxfiy kalitlarni muhit o'zgaruvchilaridan oling. API'ni konteynerda ishga tushirish uchun Dockerfile qo'shing."
        }
      ],
      "quiz": [
        {
          "q": "POST yangi resurs yaratganda qaysi status kod mos?",
          "options": [
            "200",
            "204",
            "404",
            "201"
          ],
          "answer": 3,
          "explain": "201 Created yangi resurs muvaffaqiyatli yaratilganini bildiradi."
        },
        {
          "q": "call.receive<YangiVazifa>() nima qiladi?",
          "options": [
            "JSON tanani deserializatsiya qiladi",
            "Javob yuboradi",
            "Status kodni o'rnatadi",
            "Yangi marshrut yaratadi"
          ],
          "answer": 0,
          "explain": "receive so'rov tanasini ContentNegotiation orqali kerakli tipga aylantiradi."
        },
        {
          "q": "Mavjud bo'lmagan vazifa ID'si uchun qaysi status qaytariladi?",
          "options": [
            "201",
            "404",
            "500",
            "301"
          ],
          "answer": 1,
          "explain": "Resurs topilmaganda 404 Not Found qaytarish REST semantikasiga mos."
        }
      ]
    },
    {
      "id": 49,
      "title": "Loyiha 4: client, Compose UI va yakunlash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Oxirgi qadamda API'ni client bilan iste'mol qilamiz. Ktor client <code>ContentNegotiation</code> bilan JSON javobni modelga aylantiradi. Clientni bir marta yaratib, butun ilova bo'ylab qayta ishlating. Quyidagi misol ochiq test API'sidan ikki vazifani o'qiydi — xuddi shu kodni o'z serveringiz manziliga ham qaratish mumkin."
        },
        {
          "type": "code",
          "title": "VazifaClient.kt",
          "code": "import io.ktor.client.*\nimport io.ktor.client.call.*\nimport io.ktor.client.engine.cio.*\nimport io.ktor.client.plugins.contentnegotiation.*\nimport io.ktor.client.request.*\nimport io.ktor.serialization.kotlinx.json.*\nimport kotlinx.coroutines.runBlocking\nimport kotlinx.serialization.Serializable\n\n@Serializable\ndata class Vazifa(val id: Int, val title: String, val completed: Boolean)\n\nfun main() = runBlocking {\n    val client = HttpClient(CIO) {\n        install(ContentNegotiation) { json() }\n    }\n    val vazifalar: List<Vazifa> = client\n        .get(\"https://jsonplaceholder.typicode.com/todos?_limit=2\")\n        .body()\n    vazifalar.forEach {\n        val holat = if (it.completed) \"bajarildi\" else \"ochiq\"\n        println(\"${it.id}. ${it.title} ($holat)\")\n    }\n    client.close()\n}",
          "output": "1. delectus aut autem (ochiq)\n2. quis ut nam facilis et officia qui (ochiq)"
        },
        {
          "type": "p",
          "html": "Compose ekranida holat sealed interfeys bilan ifodalanadi: yuklanmoqda, tayyor yoki xato. ViewModel API'dan ma'lumot olib, <code>StateFlow</code> orqali UI'ga beradi. UI <code>collectAsStateWithLifecycle()</code> bilan yig'adi va har holat uchun mos ko'rinish chizadi. Bu — bir yo'nalishli ma'lumot oqimining amaliy ko'rinishi."
        },
        {
          "type": "code",
          "title": "VazifaEkrani.kt",
          "code": "class VazifaViewModel(\n    private val api: VazifaApi,\n) : ViewModel() {\n    private val _holat = MutableStateFlow<UIHolat>(UIHolat.Yuklanmoqda)\n    val holat = _holat.asStateFlow()\n\n    fun yukla() {\n        viewModelScope.launch {\n            Log.d(\"Noldan\", \"Yuklash boshlandi\")\n            _holat.value = runCatching { api.ol() }\n                .fold(\n                    onSuccess = {\n                        Log.d(\"Noldan\", \"Yuklandi: ${it.size} ta vazifa\")\n                        UIHolat.Tayyor(it)\n                    },\n                    onFailure = { UIHolat.Xato(it.message ?: \"Xato\") },\n                )\n        }\n    }\n}\n\n@Composable\nfun VazifaEkrani(vm: VazifaViewModel) {\n    val holat by vm.holat.collectAsStateWithLifecycle()\n    when (holat) {\n        UIHolat.Yuklanmoqda -> CircularProgressIndicator()\n        is UIHolat.Xato -> Text(\"Xato: ${holat.xabar}\")\n        is UIHolat.Tayyor -> LazyColumn {\n            items(holat.vazifalar) { v ->\n                Text(\"${v.id}. ${v.title}\")\n            }\n        }\n    }\n}",
          "output": "D/Noldan: Yuklash boshlandi\nD/Noldan: Yuklandi: 2 ta vazifa"
        },
        {
          "type": "table",
          "head": [
            "Tekshiruv",
            "Natija"
          ],
          "rows": [
            [
              "API ishlayapti",
              "GET va POST testlari o'tadi"
            ],
            [
              "UI holatlari",
              "Yuklanmoqda, Tayyor, Xato qoplangan"
            ],
            [
              "Xatolar",
              "Tarmoq xatosi foydalanuvchiga ko'rsatiladi"
            ],
            [
              "Konfiguratsiya",
              "URL va port kodda qattiq yozilmagan"
            ],
            [
              "Testlar",
              "Xizmat va marshrut testlari yashil"
            ],
            [
              "Hujjat",
              "Endpointlar va namunalar yozilgan"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Keyingi qadamlar",
          "html": "Loyihaga bazani (Room yoki PostgreSQL), autentifikatsiyani va sahifalashni qo'shing. API'ni Docker bilan joylashtiring, CI'da testlarni ishga tushiring. UI'ni Compose Multiplatform bilan iOS'ga ham chiqarish mumkin. Eng muhimi: har yangi imkoniyat uchun avval test yozing."
        }
      ],
      "quiz": [
        {
          "q": "HttpClient bilan qanday ishlash ma'qul?",
          "options": [
            "Bir marta yaratib, qayta ishlatish",
            "Har chaqiruvda yangi client yaratish",
            "Har ekranda alohida client ochish",
            "Faqat testlarda ishlatish"
          ],
          "answer": 0,
          "explain": "Client ulanishlar havzasini boshqaradi; uni qayta ishlatish resursni tejaydi."
        },
        {
          "q": "UI holatini yuklanmoqda, tayyor va xato deb ifodalash uchun nima qulay?",
          "options": [
            "String",
            "Sealed interfeys",
            "Int",
            "Thread"
          ],
          "answer": 1,
          "explain": "Sealed ierarxiya holatlarni tiplar bilan ifodalab, when to'liqligini kafolatlaydi."
        },
        {
          "q": "API manzilini kodga qattiq yozish o'rniga nima qilish kerak?",
          "options": [
            "Har faylda takrorlash",
            "Butunlay o'chirish",
            "Konfiguratsiyaga chiqarish",
            "Faqat izohda qoldirish"
          ],
          "answer": 2,
          "explain": "Manzil va maxfiy sozlamalar muhit yoki konfiguratsiya faylidan olinishi kerak."
        }
      ]
    },
    {
      "id": 50,
      "title": "Yakuniy imtihon",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Kotlin kursining yakuniy imtihoni. Savollar butun kursni qamrab oladi: asoslar va tiplar, null xavfsizlik, funksiyalar, OOP va sealed ierarxiyalar, generics, kolleksiyalar, lambdalar, xatolar, coroutines va Flow, Ktor, Android va Jetpack Compose, testlash hamda loyiha arxitekturasi."
        },
        {
          "type": "ul",
          "items": [
            "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
            "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
            "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
            "Har bir savolga javob bergach, izohlarni ko'rib chiqing.",
            "O'tgandan keyin sertifikatni yuklab olish mumkin."
          ]
        },
        {
          "type": "p",
          "html": "Imtihondan oldin asosiy darslardagi kod misollarini qayta yozib ko'ring. Ayniqsa <code>when</code> to'liqligi, nullable tiplar, <code>Result</code>, coroutine scope'lari va Compose holat boshqaruviga e'tibor bering. Savollarni oxirigacha o'qing va barcha variantlarni solishtiring."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tayyorgarlik",
          "html": "Har bir noto'g'ri javobdan keyin dars raqamiga qaytib, mavzuni amaliyotda mustahkamlang. Kodni o'zgartirib, chiqishni taxmin qiling, keyin ishga tushirib tekshiring. Bu usul imtihonga tayyorlanishning eng samarali yo'li."
        }
      ],
      "quiz": [],
      "isExam": true
    }
  ],
  "exam": {
    "passScore": 9,
    "total": 12,
    "questions": [
      {
        "q": "Kotlin'da qiymat ichidagi ifodani string shablonga qo'shish uchun qaysi yozuv ishlatiladi?",
        "options": [
          "\"$narx * 2\"",
          "\"${narx * 2}\"",
          "\"%(narx * 2)\"",
          "\"{{narx * 2}}\""
        ],
        "answer": 1,
        "explain": "${...} ichida ixtiyoriy ifoda yoziladi; oddiy $nom faqat o'zgaruvchi nomi uchun ishlaydi."
      },
      {
        "q": "as? operatori qiymatni mos tipga aylantirib bo'lmasa nima qaytaradi?",
        "options": [
          "Istisno tashlaydi",
          "0",
          "null",
          "false"
        ],
        "answer": 2,
        "explain": "as? xavfsiz cast qiladi va mos kelmasa null qaytaradi; as esa istisno tashlaydi."
      },
      {
        "q": "Klassning init bloki qachon bajariladi?",
        "options": [
          "Faqat metod chaqirilganda",
          "Obyekt yaratilayotganda, xossa tayinlashlari bilan birgalikda",
          "Faqat meros olinganda",
          "Har bir copy() chaqiruvida"
        ],
        "answer": 1,
        "explain": "init bloklari obyekt yaratilganda, e'lon tartibiga mos ravishda bajariladi."
      },
      {
        "q": "Sealed interfeysning to'g'ridan-to'g'ri avlodlari qayerda e'lon qilinishi kerak?",
        "options": [
          "Istalgan modulda",
          "Faqat bitta faylda",
          "Shu modul va paketda",
          "Faqat companion object ichida"
        ],
        "answer": 2,
        "explain": "Sealed ierarxiya yopiq bo'lishi uchun avlodlar bir modul va paketda joylashadi."
      },
      {
        "q": "MutableList<in String> tipidagi kolleksiya bilan qaysi amal xavfsiz?",
        "options": [
          "Unga String qo'shish",
          "Undan String o'qib boshqa joyga berish",
          "Undan Int o'qish",
          "Uni List<String> ga aylantirish"
        ],
        "answer": 0,
        "explain": "in kontravariant consumer: String qabul qilish xavfsiz, lekin o'qishda aniq tip kafolatlanmaydi."
      },
      {
        "q": "groupBy funksiyasi qanday natija qaytaradi?",
        "options": [
          "List<T>",
          "Map<T, K>",
          "Set<T>",
          "Map<K, List<T>>"
        ],
        "answer": 3,
        "explain": "Har bir kalit uchun shu kalitga mos elementlar ro'yxati saqlanadi."
      },
      {
        "q": "@BeforeTest annotatsiyasi nima qiladi?",
        "options": [
          "Har bir testdan oldin tayyorgarlik kodini bajaradi",
          "Faqat birinchi testdan oldin ishlaydi",
          "Testdan keyin tozalaydi",
          "Testni butunlay o'tkazib yuboradi"
        ],
        "answer": 0,
        "explain": "@BeforeTest har bir test metodidan oldin bajariladi; testdan keyingi tozalash uchun @AfterTest bor."
      },
      {
        "q": "Dispatchers.IO qanday ishlar uchun mo'ljallangan?",
        "options": [
          "UI chizish",
          "Faqat CPU hisoblash",
          "Bloklovchi tarmoq, fayl va baza ishlari",
          "JSON serializatsiyasi"
        ],
        "answer": 2,
        "explain": "IO dispatcher bloklovchi kiritish-chiqarish amallari uchun mo'ljallangan."
      },
      {
        "q": "Flow operatorlari qachon haqiqatan bajariladi?",
        "options": [
          "flow quruvchisi chaqirilganda",
          "collect kabi terminal amal chaqirilganda",
          "Fayl ochilganda",
          "Dastur tugaganda"
        ],
        "answer": 1,
        "explain": "Sovuq Flow lazy ishlaydi: quruvchi va operatorlar terminal amalda ishga tushadi."
      },
      {
        "q": "Ktor server route'ida yo'l parametrini qaysi ifoda orqali olasiz?",
        "options": [
          "call.response.status",
          "call.request.headers",
          "call.parameters[\"id\"]",
          "call.attributes"
        ],
        "answer": 2,
        "explain": "call.parameters marshrutdagi nomlangan parametrlarni beradi."
      },
      {
        "q": "Compose'da state hoisting mohiyati nimada?",
        "options": [
          "Holatni yuqoriga ko'tarib, o'zgarishni lambda orqali uzatish",
          "Holatni composable ichida yashirish",
          "Har komponent uchun global o'zgaruvchi ishlatish",
          "Faqat SharedPreferences'da saqlash"
        ],
        "answer": 0,
        "explain": "Komponent holatni parametr oladi va hodisani lambda bilan yuqoriga yuboradi, shu bilan qayta ishlatiladi."
      },
      {
        "q": "MVVM'da use case qatlamining vazifasi nima?",
        "options": [
          "HTTP marshrutlarini ro'yxatga olish",
          "UI holatini chizish",
          "Ma'lumotlar bazasini yaratish",
          "Bitta biznes stsenariyni bajarish"
        ],
        "answer": 3,
        "explain": "Use case repository'lardan foydalanib, bitta aniq biznes vazifasini bajaradi."
      }
    ]
  }
};
})();
