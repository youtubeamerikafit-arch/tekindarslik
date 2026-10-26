/* Noldan — R course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.r = {
  "id": "r",
  "title": "R",
  "logoClass": "course-logo--r",
  "logoText": "R",
  "level": "Boshlovchi",
  "hours": "~20 soat",
  "testCount": 147,
  "lang": "r",
  "interactive": "none",
  "heroTitle": "R: noldan ma'lumot tahliliga",
  "heroDesc": "R tilini noldan o'rganing: vektorlar va data frame'lardan tortib dplyr, tidyr, ggplot2, statistik testlar, regressiya va Shiny'gacha. 49 dars, 147 test va 12 savollik yakuniy imtihon bilan bilimingizni mustahkamlang.",
  "metaDescription": "R kursi: 49 dars, 147 test, 12 savollik imtihon. Vektorlar, data frame, dplyr, tidyr, ggplot2, statistika, regressiya, R Markdown va Shiny O'zbek tilida.",
  "modules": [
    {
      "title": "Asoslar",
      "lessons": [
        1,
        2,
        3
      ]
    },
    {
      "title": "Ma'lumotlar bilan ishlash",
      "lessons": [
        4,
        5,
        6,
        7
      ]
    },
    {
      "title": "Funksiyalar va grafiklar",
      "lessons": [
        8,
        9
      ]
    },
    {
      "title": "Statistika va loyiha asoslari",
      "lessons": [
        10,
        11,
        12
      ]
    },
    {
      "title": "Ma'lumot sifatini boshqarish",
      "lessons": [
        13,
        14,
        15
      ]
    },
    {
      "title": "Tuzilmalar, funksiyalar va matn",
      "lessons": [
        16,
        17,
        18,
        19,
        20,
        21
      ]
    },
    {
      "title": "Tidyverse transformatsiyasi",
      "lessons": [
        22,
        23,
        24,
        25,
        26,
        27,
        28
      ]
    },
    {
      "title": "Vaqt va vizualizatsiya",
      "lessons": [
        29,
        30,
        31,
        32,
        33,
        34,
        35
      ]
    },
    {
      "title": "Statistik xulosa",
      "lessons": [
        36,
        37,
        38,
        39,
        40,
        41
      ]
    },
    {
      "title": "Hisobot va interaktiv ilova",
      "lessons": [
        42,
        43,
        44
      ]
    },
    {
      "title": "Amaliy loyiha",
      "lessons": [
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
      "title": "R nima, RStudio va vektorlarga asoslangan yondashuv",
      "minutes": 12,
      "blocks": [
        {
          "type": "p",
          "html": "R — statistika, ma'lumot tahlili va grafiklar uchun yaratilgan dasturlash tili. Uning eng muhim xususiyati <b>vektor-first</b> yondashuv: bitta son bilan bajariladigan amal butun sonlar to'plamiga bir vaqtda qo'llanadi. Shu sababli R'da tsikllar kamroq yoziladi."
        },
        {
          "type": "code",
          "title": "birinchi-qadam.R",
          "code": "yosh <- c(18, 21, 24, 27)\nyosh\nlength(yosh)\nmean(yosh)\nyosh + 1",
          "output": "[1] 18 21 24 27\n[1] 4\n[1] 22.5\n[1] 19 22 25 28"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Nega vektor-first?",
          "html": "R'da <code>c(1, 2, 3) + 10</code> yozsangiz, har bir elementga 10 qo'shiladi. Bu bitta amal bilan uchta hisobni bajaradi. Vektor — R'ning asosiy g'ishti, data frame va grafiklar ham vektorlarga tayanadi."
        },
        {
          "type": "code",
          "title": "kalkulyator.R",
          "code": "2 + 3 * 4\n(2 + 3) * 4\nsqrt(81)\n1:6\nsum(1:6)",
          "output": "[1] 14\n[1] 20\n[1] 9\n[1] 1 2 3 4 5 6\n[1] 21"
        },
        {
          "type": "table",
          "head": [
            "Atama",
            "Ma'nosi",
            "Misol"
          ],
          "rows": [
            [
              "Skript",
              "Kod saqlanadigan fayl",
              "<code>dars1.R</code>"
            ],
            [
              "Konsol",
              "Kod darhol bajariladigan joy",
              "<code>&gt; 2 + 2</code>"
            ],
            [
              "O'zgaruvchi",
              "Qiymat saqlovchi nom",
              "<code>ball &lt;- 92</code>"
            ],
            [
              "Paket",
              "Qo'shimcha funksiyalar to'plami",
              "<code>ggplot2</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "RStudio'da ishlash",
          "html": "RStudio'da chap tomonda skript, pastda konsol, o'ng tomonda <b>Environment</b> va grafiklar oynasi joylashadi. <code>Alt + -</code> (Windows) yoki <code>Option + -</code> (macOS) belgilarni tez yozadi: <code>&lt;-</code>. Kodni <b>Run</b> bilan bajarib, skriptni <code>Ctrl + S</code> bilan saqlang."
        }
      ],
      "quiz": [
        {
          "q": "R tilining asosiy ma'lumot birligi nima?",
          "options": [
            "Vektor",
            "Fayl",
            "Jadval",
            "Paket"
          ],
          "answer": 0,
          "explain": "R vektorlar ustiga qurilgan: sonlar, matnlar va mantiqiy qiymatlar vektor ko'rinishida saqlanadi."
        },
        {
          "q": "Qiymatni o'zgaruvchiga berishning R'da eng ko'p ishlatiladigan usuli qaysi?",
          "options": [
            "=",
            "<-",
            "->",
            ":="
          ],
          "answer": 1,
          "explain": "<- R'ning an'anaviy assignment operatori. = ham ishlaydi, lekin funksiya argumentlarida chalkashlik keltirishi mumkin."
        },
        {
          "q": "mean(c(10, 20, 30)) natijasi qanday bo'ladi?",
          "options": [
            "10",
            "20",
            "30",
            "60"
          ],
          "answer": 1,
          "explain": "mean() o'rtacha arifmetik qiymatni hisoblaydi: (10 + 20 + 30) / 3 = 20."
        }
      ]
    },
    {
      "id": 2,
      "title": "Vektorlar, ma'lumot turlari va indekslash",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Vektor — bir turdagi qiymatlarning tartiblangan to'plami. U <code>c()</code> (combine) funksiyasi bilan yaratiladi. R'da vektorning barcha elementlari <b>bitta turda</b> bo'ladi: numeric, character yoki logical."
        },
        {
          "type": "code",
          "title": "turlar.R",
          "code": "ismlar <- c(\"Aziza\", \"Bek\", \"Dilnoza\")\nballar <- c(92, 78, 88)\nfaol <- c(TRUE, FALSE, TRUE)\n\nclass(ismlar)\nclass(ballar)\nclass(faol)\nlength(ballar)",
          "output": "[1] \"character\"\n[1] \"numeric\"\n[1] \"logical\"\n[1] 3"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Aralash vektor avtomatik aylanadi",
          "html": "Agar vektorga son va matn aralashsa, R hammasini matnga aylantiradi: <code>c(1, \"ikki\")</code> natijasi <code>\"1\"</code> va <code>\"ikki\"</code> bo'ladi. Mantiqiy qiymatlar esa son kontekstida <code>TRUE = 1</code>, <code>FALSE = 0</code> bo'ladi."
        },
        {
          "type": "table",
          "head": [
            "Tur",
            "Nima saqlaydi",
            "Misol"
          ],
          "rows": [
            [
              "<code>numeric</code>",
              "Butun va kasr sonlar",
              "<code>c(92, 78.5)</code>"
            ],
            [
              "<code>character</code>",
              "Matnlar",
              "<code>c(&quot;R&quot;, &quot;SQL&quot;)</code>"
            ],
            [
              "<code>logical</code>",
              "TRUE yoki FALSE",
              "<code>c(TRUE, FALSE)</code>"
            ],
            [
              "<code>NA</code>",
              "Yo'q yoki noma'lum qiymat",
              "<code>c(1, NA, 3)</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "indekslash.R",
          "code": "ballar[1]\nballar[2]\nballar[c(1, 3)]\nballar[-2]\nballar[ballar >= 85]",
          "output": "[1] 92\n[1] 78\n[1] 92 88\n[1] 92 88\n[1] 92 88"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Indeks 1 dan boshlanadi",
          "html": "Ko'p tillarda birinchi element indeksi 0, R'da esa <b>1</b>. Manfiy indeks elementni chiqarib tashlaydi: <code>ballar[-2]</code> ikkinchi elementni olib tashlaydi. Indeks sifatida mantiqiy vektor ham berilishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Vektor yaratish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "vector()",
            "c()",
            "list()",
            "data.frame()"
          ],
          "answer": 1,
          "explain": "c() — combine, ya'ni qiymatlarni bitta vektorga birlashtiradi."
        },
        {
          "q": "R vektoridagi birinchi element qaysi indeksda turadi?",
          "options": [
            "1",
            "0",
            "-1",
            "2"
          ],
          "answer": 0,
          "explain": "R indekslashi 1 dan boshlanadi, shuning uchun birinchi element ballar[1] bo'ladi."
        },
        {
          "q": "class(TRUE) natijasi nima?",
          "options": [
            "numeric",
            "character",
            "factor",
            "logical"
          ],
          "answer": 3,
          "explain": "TRUE va FALSE logical turiga kiradi."
        }
      ]
    },
    {
      "id": 3,
      "title": "Faktorlar, matnlar va ro'yxatlar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Faktor — cheklangan <b>kategoriyalar</b>ni saqlaydigan maxsus vektor. U takrorlanuvchi matnlarni ixcham saqlaydi va statistik modelda guruh sifatida ishlatiladi. Oddiy matnlar <code>character</code> vektorida, turli turdagi qiymatlar esa <code>list()</code> ichida saqlanadi."
        },
        {
          "type": "code",
          "title": "faktor.R",
          "code": "holat <- factor(c(\"yangi\", \"eski\", \"yangi\", \"yangi\"),\n                levels = c(\"yangi\", \"eski\"))\n\nlevels(holat)\nnlevels(holat)\nas.integer(holat)",
          "output": "[1] \"yangi\"  \"eski\"\n[1] 2\n[1] 1 2 1 1"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "levels nima uchun kerak?",
          "html": "<code>levels</code> faktor qabul qiladigan kategoriyalarni belgilaydi. Ro'yxatda yo'q qiymat kiritilsa, u <code>NA</code> bo'lib qoladi. <code>as.integer()</code> har bir kategoriyaning ichki kodini ko'rsatadi — bu kodlar alifbo tartibida emas, <code>levels</code> tartibida beriladi."
        },
        {
          "type": "code",
          "title": "matn.R",
          "code": "ism <- \"  Aziza Karimova  \"\n\ntrimws(ism)\ntoupper(trimws(ism))\nnchar(\"R tili\")\npaste(\"Salom,\", \"dunyo!\")",
          "output": "[1] \"Aziza Karimova\"\n[1] \"AZIZA KARIMOVA\"\n[1] 6\n[1] \"Salom, dunyo!\""
        },
        {
          "type": "code",
          "title": "list.R",
          "code": "talaba <- list(ism = \"Aziza\", ballar = c(90, 85, 95), faol = TRUE)\n\ntalaba$ism\ntalaba$ballar[2]\nlength(talaba)",
          "output": "[1] \"Aziza\"\n[1] 85\n[1] 3"
        },
        {
          "type": "table",
          "head": [
            "Tur",
            "Nima saqlaydi",
            "Misol"
          ],
          "rows": [
            [
              "Vektor",
              "Bir turdagi qiymatlar",
              "<code>c(90, 85, 95)</code>"
            ],
            [
              "Faktor",
              "Cheklangan kategoriyalar",
              "<code>factor(c(&quot;yangi&quot;, &quot;eski&quot;))</code>"
            ],
            [
              "List",
              "Turli turdagi elementlar",
              "<code>list(ism = &quot;Aziza&quot;, ball = 92)</code>"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "Faktor asosan nimani saqlash uchun ishlatiladi?",
          "options": [
            "Cheklangan kategoriyalarni",
            "Faqat kasr sonlarni",
            "Fayl yo'llarini",
            "Grafik ranglarini"
          ],
          "answer": 0,
          "explain": "Faktor kategoriyali ma'lumot uchun: guruh, holat yoki daraja kabi cheklangan qiymatlar."
        },
        {
          "q": "Matn boshidagi va oxiridagi bo'sh joylarni olib tashlash uchun qaysi funksiya ishlatiladi?",
          "options": [
            "toupper()",
            "trimws()",
            "nchar()",
            "paste()"
          ],
          "answer": 1,
          "explain": "trimws() matnning ikki chetidagi bo'sh joylarni tozalaydi."
        },
        {
          "q": "List elementiga nomi bo'yicha murojaat qilish uchun nima ishlatiladi?",
          "options": [
            "[[]]",
            "$",
            "()",
            "::"
          ],
          "answer": 1,
          "explain": "Nomi bo'yicha qiymat olish uchun talaba$ism yoki talaba[[\"ism\"]] ishlatiladi."
        }
      ]
    },
    {
      "id": 4,
      "title": "Data frame: jadval ko'rinishidagi ma'lumot",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Data frame — R'dagi eng muhim ma'lumot tuzilmasi. U qatorlar va ustunlardan iborat jadval bo'lib, har bir ustun alohida vektor hisoblanadi. Ustunlar turli turda bo'lishi mumkin: ism — matn, ball — son, kurs — matn."
        },
        {
          "type": "code",
          "title": "data-frame.R",
          "code": "talabalar <- data.frame(\n  ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\"),\n  ball = c(92, 78, 88, 65),\n  kurs = c(\"R\", \"R\", \"SQL\", \"SQL\"),\n  stringsAsFactors = FALSE\n)\n\nnrow(talabalar)\nncol(talabalar)\ntalabalar$ism[1]\nmean(talabalar$ball)",
          "output": "[1] 4\n[1] 3\n[1] \"Aziza\"\n[1] 80.75"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "stringsAsFactors nima qiladi?",
          "html": "R 4.0 dan boshlab matn ustunlari standart holatda <code>character</code> bo'lib qoladi. Eski kodlarda <code>stringsAsFactors = TRUE</code> uchraydi — u matnlarni avtomatik faktorga aylantirardi. Yangi loyihalarda bu parametrni <code>FALSE</code> qilib yozish odat tusiga kirgan."
        },
        {
          "type": "table",
          "head": [
            "Ustun",
            "Turi",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>ism</code>",
              "character",
              "Talabaning ismi"
            ],
            [
              "<code>ball</code>",
              "numeric",
              "Yakuniy ball"
            ],
            [
              "<code>kurs</code>",
              "character",
              "Kurs nomi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "ustun-tanlash.R",
          "code": "talabalar[talabalar$ball >= 85, \"ism\"]\ntalabalar[talabalar$ball >= 85, \"ball\"]",
          "output": "[1] \"Aziza\"   \"Dilnoza\"\n[1] 92 88"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qator va ustun mantiqi",
          "html": "<code>talabalar[qatorlar, ustunlar]</code> ko'rinishida ishlaydi. Verguldan oldin qator sharti, keyin ustun nomi yoziladi. <code>$</code> esa bitta ustunni vektor sifatida oladi: <code>talabalar$ball</code>."
        }
      ],
      "quiz": [
        {
          "q": "Data frame nima?",
          "options": [
            "Faqat sonlar saqlanadigan vektor",
            "Qator va ustunlardan iborat jadval",
            "Grafik turi",
            "Paket nomi"
          ],
          "answer": 1,
          "explain": "Data frame — har bir ustuni vektor bo'lgan, turli turdagi ma'lumotni saqlaydigan jadval."
        },
        {
          "q": "Data frame'dagi qatorlar sonini qaysi funksiya qaytaradi?",
          "options": [
            "ncol()",
            "nrow()",
            "length()",
            "names()"
          ],
          "answer": 1,
          "explain": "nrow() qatorlar sonini, ncol() esa ustunlar sonini qaytaradi."
        },
        {
          "q": "talabalar$ball ifodasi nimani beradi?",
          "options": [
            "Faqat birinchi ballni",
            "Butun jadvalni",
            "Ball ustunini vektor sifatida",
            "Ustun nomlarini"
          ],
          "answer": 2,
          "explain": "$ operatori data frame'dagi ustunni oddiy vektor sifatida qaytaradi."
        }
      ]
    },
    {
      "id": 5,
      "title": "CSV import va eksport: read.csv, write.csv",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "CSV — ma'lumotni vergul bilan ajratib saqlaydigan oddiy matn formati. R'da <code>read.csv()</code> faylni o'qiydi, <code>write.csv()</code> esa data frame'ni faylga yozadi. Bu format Excel, Google Sheets va boshqa dasturlar bilan oson almashinadi."
        },
        {
          "type": "code",
          "title": "read-csv.R",
          "code": "csv <- \"ism,ball,kurs\\nAziza,92,R\\nBek,78,R\\nDilnoza,88,SQL\"\n\ntalabalar <- read.csv(text = csv, stringsAsFactors = FALSE)\n\nnrow(talabalar)\nnames(talabalar)\ntalabalar$ball",
          "output": "[1] 3\n[1] \"ism\"  \"ball\" \"kurs\"\n[1] 92 78 88"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "text parametri",
          "html": "<code>read.csv()</code> odatda fayl yo'lini oladi. <code>text =</code> parametri bilan CSV matnini to'g'ridan-to'g'ri o'qish mumkin — bu misollarni sinash uchun qulay. Haqiqiy loyihada <code>read.csv(\"data/talabalar.csv\")</code> yoziladi."
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>read.csv()</code>",
              "Vergul bilan ajratilgan faylni o'qiydi"
            ],
            [
              "<code>write.csv()</code>",
              "Data frame'ni CSV faylga yozadi"
            ],
            [
              "<code>read.csv2()</code>",
              "Nuqta-vergul ajratgichi bilan o'qiydi"
            ],
            [
              "<code>file.exists()</code>",
              "Fayl mavjudligini tekshiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "write-csv.R",
          "code": "yoz <- tempfile(fileext = \".csv\")\nwrite.csv(talabalar, yoz, row.names = FALSE)\n\nfile.exists(yoz)\nsum(read.csv(yoz)$ball)",
          "output": "[1] TRUE\n[1] 258"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "row.names = FALSE",
          "html": "Standart holatda <code>write.csv()</code> qator nomlarini alohida ustunga yozadi. Ko'p hollarda bu keraksiz: <code>row.names = FALSE</code> qo'shsangiz, fayl toza CSV bo'ladi va uni boshqa dasturlar oson o'qiydi."
        }
      ],
      "quiz": [
        {
          "q": "CSV faylni o'qish uchun odatda qaysi funksiya ishlatiladi?",
          "options": [
            "read.csv()",
            "write.csv()",
            "saveRDS()",
            "scan()"
          ],
          "answer": 0,
          "explain": "read.csv() CSV faylini o'qib, data frame qaytaradi."
        },
        {
          "q": "write.csv() da row.names = FALSE nimani beradi?",
          "options": [
            "Ustunlarni o'chiradi",
            "Qator nomlarini faylga yozmaydi",
            "Faylni siqadi",
            "Sonlarni matnga aylantiradi"
          ],
          "answer": 1,
          "explain": "row.names = FALSE qator nomlari ustunini eksport qilmaydi."
        },
        {
          "q": "read.csv() da text parametri nima uchun ishlatiladi?",
          "options": [
            "Fayl nomini o'zgartirish",
            "Ustunlarni tanlash",
            "CSV matnini to'g'ridan-to'g'ri o'qish",
            "Faylni o'chirish"
          ],
          "answer": 2,
          "explain": "text = bilan CSV mazmunini fayl yaratmasdan o'qish mumkin."
        }
      ]
    },
    {
      "id": 6,
      "title": "Filtrlash, ustun tanlash va tartiblash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Ma'lumot tahlilining katta qismi kerakli qator va ustunlarni ajratishdan iborat. Base R'da buni kvadrat qavslar bilan qilamiz: <code>data[qator_sharti, ustunlar]</code>. Zamonaviy uslub esa <b>dplyr</b> paketining <code>filter()</code>, <code>select()</code> va <code>arrange()</code> funksiyalariga tayanadi."
        },
        {
          "type": "code",
          "title": "base-filtr.R",
          "code": "talabalar <- data.frame(\n  ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\"),\n  ball = c(92, 78, 88, 65),\n  kurs = c(\"R\", \"R\", \"SQL\", \"SQL\")\n)\n\ntalabalar$ism[talabalar$ball >= 80]\ntalabalar$ball[talabalar$ball >= 80]\nsort(talabalar$ball, decreasing = TRUE)",
          "output": "[1] \"Aziza\"   \"Dilnoza\"\n[1] 92 88\n[1] 92 88 78 65"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Kvadrat qavs mantiqi",
          "html": "<code>talabalar[talabalar$ball &gt;= 80, ]</code> barcha ustunlarni, <code>talabalar[talabalar$ball &gt;= 80, \"ism\"]</code> esa faqat ism ustunini qaytaradi. <code>order()</code> qatorlarni tartiblash uchun indekslar beradi, <code>sort()</code> esa vektorni o'zi tartiblaydi."
        },
        {
          "type": "table",
          "head": [
            "Vazifa",
            "Base R",
            "dplyr"
          ],
          "rows": [
            [
              "Qatorlarni filtrlash",
              "<code>df[df$x &gt; 10, ]</code>",
              "<code>filter(df, x &gt; 10)</code>"
            ],
            [
              "Ustun tanlash",
              "<code>df[, c(\"a\", \"b\")]</code>",
              "<code>select(df, a, b)</code>"
            ],
            [
              "Tartiblash",
              "<code>df[order(df$x), ]</code>",
              "<code>arrange(df, x)</code>"
            ],
            [
              "Kamayish tartibi",
              "<code>order(df$x, decreasing = TRUE)</code>",
              "<code>arrange(df, desc(x))</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "dplyr-filtr.R",
          "code": "# install.packages(\"dplyr\")  # bir marta\nlibrary(dplyr)\n\ntalabalar |>\n  filter(ball >= 80) |>\n  select(ism, ball) |>\n  arrange(desc(ball))",
          "outputLabel": "Kutilgan natija",
          "output": "# A tibble: 2 × 2\n  ism     ball\n  <chr>  <dbl>\n1 Aziza     92\n2 Dilnoza   88",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Paket haqida",
          "html": "dplyr kurs muhitida o'rnatilmagan bo'lishi mumkin, shuning uchun yuqoridagi natija <b>namuna</b> sifatida ko'rsatilgan. O'z kompyuteringizda <code>install.packages(\"dplyr\")</code> ni bir marta bajarib, har sessiyada <code>library(dplyr)</code> bilan yuklang."
        }
      ],
      "quiz": [
        {
          "q": "Base R'da ball ustuni 80 dan katta qatorlarni tanlash qaysi yozuv bilan boshlanadi?",
          "options": [
            "filter(talabalar, ball > 80)",
            "select(talabalar, ball)",
            "talabalar[talabalar$ball > 80, ]",
            "order(talabalar$ball)"
          ],
          "answer": 2,
          "explain": "Base R'da kvadrat qavs ichida qator sharti va vergul yoziladi."
        },
        {
          "q": "dplyr'da qatorlarni shart bo'yicha tanlash uchun qaysi funksiya ishlatiladi?",
          "options": [
            "filter()",
            "select()",
            "arrange()",
            "mutate()"
          ],
          "answer": 0,
          "explain": "filter() shartga mos qatorlarni qoldiradi."
        },
        {
          "q": "Natijani kamayish tartibida saralash uchun dplyr'da nima yoziladi?",
          "options": [
            "arrange(ball)",
            "sort(ball)",
            "order(ball)",
            "arrange(desc(ball))"
          ],
          "answer": 3,
          "explain": "arrange(desc(ball)) ball ustunini kattadan kichikka saralaydi."
        }
      ]
    },
    {
      "id": 7,
      "title": "Guruh bo'yicha jamlanmalar: aggregate va dplyr",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Ko'pincha alohida qatorlar emas, guruhlar bo'yicha natija kerak bo'ladi: har bir kursning o'rtacha balli, guruhdagi talabalar soni va hokazo. Base R'da <code>aggregate()</code> va <code>tapply()</code>, dplyr'da esa <code>group_by()</code> va <code>summarise()</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "aggregate.R",
          "code": "talabalar <- data.frame(\n  ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\"),\n  ball = c(92, 78, 88, 65),\n  kurs = c(\"R\", \"R\", \"SQL\", \"SQL\")\n)\n\naggregate(ball ~ kurs, data = talabalar, FUN = mean)\nunname(tapply(talabalar$ball, talabalar$kurs, mean))",
          "output": "  kurs ball\n1   R 85.0\n2 SQL 76.5\n[1] 85.0 76.5"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Formula va FUN",
          "html": "<code>ball ~ kurs</code> «ball qiymatlarini kurs bo'yicha guruhla» degani. <code>FUN = mean</code> har bir guruhga qo'llanadigan funksiyani beradi. <code>tapply()</code> esa vektor uzunligidagi guruhlash uchun qulay va nomlangan vektor qaytaradi."
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Qaytaradi",
            "Qachon qulay"
          ],
          "rows": [
            [
              "<code>aggregate()</code>",
              "Data frame",
              "Bir nechta guruh ustuni bilan"
            ],
            [
              "<code>tapply()</code>",
              "Nomlangan vektor",
              "Bitta guruh va bitta hisob"
            ],
            [
              "<code>group_by() + summarise()</code>",
              "Tibble",
              "Ko'p bosqichli dplyr ish oqimi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "dplyr-guruh.R",
          "code": "# install.packages(\"dplyr\")\nlibrary(dplyr)\n\ntalabalar |>\n  group_by(kurs) |>\n  summarise(soni = n(), ortacha = mean(ball))",
          "outputLabel": "Kutilgan natija",
          "output": "# A tibble: 2 × 2\n  kurs  soni ortacha\n  <chr> <int>   <dbl>\n1 R         2      85\n2 SQL       2    76.5",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "n() va na.rm",
          "html": "<code>n()</code> faqat dplyr ichida ishlaydi va guruhdagi qatorlar sonini beradi. <code>mean(ball, na.rm = TRUE)</code> bo'sh qiymatlarni hisobga olmaydi. Base R funksiyalari ham <code>na.rm = TRUE</code> parametrini qabul qiladi."
        }
      ],
      "quiz": [
        {
          "q": "aggregate(ball ~ kurs, data = talabalar, FUN = mean) nima qiladi?",
          "options": [
            "Ballarni tartiblaydi",
            "Har bir kurs bo'yicha o'rtacha ballni hisoblaydi",
            "Kurs ustunini o'chiradi",
            "Faqat birinchi qatorni oladi"
          ],
          "answer": 1,
          "explain": "aggregate formula bo'yicha guruhlab, FUN funksiyasini har bir guruhga qo'llaydi."
        },
        {
          "q": "dplyr'da guruhdagi qatorlar sonini qaysi funksiya beradi?",
          "options": [
            "count_rows()",
            "length()",
            "n()",
            "nrow()"
          ],
          "answer": 2,
          "explain": "summarise() ichida n() guruhdagi qatorlar sonini qaytaradi."
        },
        {
          "q": "O'rtacha hisoblashda NA qiymatlarni tashlab yuborish uchun nima qo'shiladi?",
          "options": [
            "na.rm = TRUE",
            "na.omit = TRUE",
            "rm.na = TRUE",
            "drop.na = TRUE"
          ],
          "answer": 0,
          "explain": "mean() va boshqa jamlovchi funksiyalar na.rm = TRUE bilan NA'larni e'tiborsiz qoldiradi."
        }
      ]
    },
    {
      "id": 8,
      "title": "Funksiyalar, scope va apply oilasi",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya — nomlangan kod bloki. U kirish qiymatlarini (argumentlarni) oladi, hisoblaydi va oxirgi ifoda natijasini qaytaradi. R'da funksiya <code>function()</code> bilan yaratiladi. Scope esa o'zgaruvchining qayerda ko'rinishini belgilaydi."
        },
        {
          "type": "code",
          "title": "funksiya.R",
          "code": "ortacha <- function(x, yumaloq = 1) {\n  round(mean(x), yumaloq)\n}\n\nortacha(c(92, 78, 89))\nortacha(c(92, 78, 89), 0)\n\nx <- 10\noshir <- function(x) {\n  x + 1\n}\n\noshir(5)\nx",
          "output": "[1] 86.3\n[1] 86\n[1] 6\n[1] 10"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Lokal va global scope",
          "html": "Funksiya ichidagi <code>x</code> — lokal o'zgaruvchi; u tashqaridagi <code>x</code> ga ta'sir qilmaydi. Shu sababli <code>oshir(5)</code> dan keyin global <code>x</code> hali ham 10. Global qiymatni o'zgartirish uchun <code>&lt;&lt;-</code> bor, lekin uni kam ishlatish tavsiya etiladi."
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Nima qiladi",
            "Natija turi"
          ],
          "rows": [
            [
              "<code>lapply()</code>",
              "Har bir elementga funksiya qo'llaydi",
              "List"
            ],
            [
              "<code>sapply()</code>",
              "lapply natijasini soddalashtiradi",
              "Vektor yoki matritsa"
            ],
            [
              "<code>vapply()</code>",
              "Natija turini oldindan tekshiradi",
              "Belgilangan tur"
            ],
            [
              "<code>apply()</code>",
              "Matritsa qator yoki ustunlariga qo'llaydi",
              "Vektor"
            ]
          ]
        },
        {
          "type": "code",
          "title": "apply.R",
          "code": "ballar <- matrix(c(90, 85, 70, 60), nrow = 2)\n\napply(ballar, 1, mean)\napply(ballar, 2, max)",
          "output": "[1] 80.0 72.5\n[1] 90 70"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "apply'ning ikkinchi argumenti",
          "html": "<code>apply(m, 1, f)</code> har bir <b>qator</b>ga, <code>apply(m, 2, f)</code> har bir <b>ustun</b>ga funksiya qo'llaydi. Vektorlar uchun <code>lapply()</code> yoki <code>sapply()</code>, ro'yxatlar uchun esa <code>map()</code> (purrr) ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "R'da funksiya yaratish uchun qaysi kalit so'z ishlatiladi?",
          "options": [
            "def",
            "fun",
            "function",
            "lambda"
          ],
          "answer": 2,
          "explain": "R'da funksiya function(arg1, arg2) { tana } ko'rinishida yaratiladi."
        },
        {
          "q": "Funksiya ichida yaratilgan o'zgaruvchi qanday nomlanadi?",
          "options": [
            "Lokal o'zgaruvchi",
            "Global o'zgaruvchi",
            "Doimiy o'zgaruvchi",
            "Vektor"
          ],
          "answer": 0,
          "explain": "Funksiya ichida yaratilgan o'zgaruvchi faqat shu funksiya ichida ko'rinadi."
        },
        {
          "q": "apply(ballar, 1, sum) nimani hisoblaydi?",
          "options": [
            "Ustunlar yig'indisini",
            "Butun matritsani",
            "Faqat birinchi qatorni",
            "Har bir qator yig'indisini"
          ],
          "answer": 3,
          "explain": "Margin 1 qatorlarni bildiradi, shuning uchun har bir qator bo'yicha sum hisoblanadi."
        }
      ]
    },
    {
      "id": 9,
      "title": "Vizualizatsiya: base plot va ggplot2",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Grafik ma'lumotdagi naqshni bir qarashda ko'rsatadi. Base R'da <code>barplot()</code>, <code>hist()</code> va <code>plot()</code> kabi funksiyalar bor. <b>ggplot2</b> esa qatlamlar (layers) asosida chiroyli va moslashuvchan grafiklar yasaydi."
        },
        {
          "type": "code",
          "title": "barplot.R",
          "code": "ballar <- c(65, 78, 88, 92)\nismlar <- c(\"Jasur\", \"Bek\", \"Dilnoza\", \"Aziza\")\n\nrange(ballar)\nbarplot(ballar, names.arg = ismlar, col = \"steelblue\",\n        main = \"Talabalar ballari\", ylab = \"Ball\")",
          "outputLabel": "Konsol va grafik",
          "output": "[1] 65 92\nGrafik: ustunli diagrammada Jasur (65) eng past, Aziza (92) eng baland ustun. X o'qida ismlar, Y o'qida ball ko'rsatiladi."
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Base plot afzalligi",
          "html": "Base R grafiklari qo'shimcha paketsiz ishlaydi. <code>hist()</code> taqsimotni, <code>boxplot()</code> guruhlarni taqqoslashni, <code>plot(x, y)</code> esa nuqtali grafikni chizadi. Tez tekshirish uchun ular juda qulay."
        },
        {
          "type": "table",
          "head": [
            "ggplot2 qatlami",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>geom_col()</code>",
              "Ustunli diagramma"
            ],
            [
              "<code>geom_point()</code>",
              "Nuqtali (scatter) grafik"
            ],
            [
              "<code>geom_line()</code>",
              "Chiziqli grafik"
            ],
            [
              "<code>labs()</code>",
              "Sarlavha va o'q nomlari"
            ],
            [
              "<code>theme_minimal()</code>",
              "Sodda fon va to'r"
            ]
          ]
        },
        {
          "type": "code",
          "title": "ggplot2.R",
          "code": "# install.packages(\"ggplot2\")\nlibrary(ggplot2)\n\ntalabalar <- data.frame(\n  ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\"),\n  ball = c(92, 78, 88, 65)\n)\n\nggplot(talabalar, aes(x = ism, y = ball, fill = ism)) +\n  geom_col() +\n  labs(title = \"Talabalar ballari\", x = \"Talaba\", y = \"Ball\") +\n  theme_minimal()",
          "outputLabel": "Kutilgan grafik",
          "output": "Grafik: har bir talaba uchun alohida rangdagi ustun; Aziza eng baland (92), Jasur eng past (65). Sarlavha «Talabalar ballari», o'qlar «Talaba» va «Ball» deb nomlangan.",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Grafikni saqlash",
          "html": "<code>ggplot2</code> grafigini <code>ggsave(\"ballar.png\", width = 6, height = 4)</code> bilan saqlash mumkin. Base R grafigi uchun esa <code>png()</code> va <code>dev.off()</code> ishlatiladi. O'lcham va ruxsatni oldindan rejalashtiring."
        }
      ],
      "quiz": [
        {
          "q": "Base R'da ustunli diagramma chizish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "hist()",
            "barplot()",
            "plot()",
            "boxplot()"
          ],
          "answer": 1,
          "explain": "barplot() qiymatlarni ustunlar sifatida chizadi; hist() taqsimot uchun."
        },
        {
          "q": "ggplot2'da aes() nima uchun kerak?",
          "options": [
            "Ranglar ro'yxatini berish",
            "Faylni saqlash",
            "O'zgaruvchilarni o'qlarga bog'lash",
            "Ma'lumotni filtrlash"
          ],
          "answer": 2,
          "explain": "aes() estetik bog'lanishlarni belgilaydi: x, y, rang, o'lcham va boshqalar."
        },
        {
          "q": "ggplot2 grafigini faylga saqlash uchun qaysi funksiya ishlatiladi?",
          "options": [
            "ggsave()",
            "write.csv()",
            "saveRDS()",
            "png.save()"
          ],
          "answer": 0,
          "explain": "ggsave() oxirgi ggplot grafigini belgilangan faylga saqlaydi."
        }
      ]
    },
    {
      "id": 10,
      "title": "Statistika asoslari: o'rtacha, korrelyatsiya, lm",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "R statistik tahlil uchun yaratilgan, shuning uchun asosiy hisob-kitoblar bitta funksiya bilan bajariladi. Bu darsda tavsifiy statistika, ikki o'zgaruvchi orasidagi bog'lanish va chiziqli regressiyani ko'rib chiqamiz."
        },
        {
          "type": "code",
          "title": "tavsifiy.R",
          "code": "soat <- c(1, 2, 3, 4, 5)\nball <- c(50, 55, 70, 65, 80)\n\nmean(ball)\nmedian(ball)\nround(sd(ball), 2)\nrange(ball)",
          "output": "[1] 64\n[1] 65\n[1] 11.94\n[1] 50 80"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "O'rtacha va median",
          "html": "<code>mean()</code> o'rtacha arifmetik qiymatni beradi, <code>median()</code> esa tartiblangan qatorning o'rtasidagi qiymatni. Juda katta yoki kichik qiymatlar bo'lsa, median barqarorroq ko'rsatkich hisoblanadi. <code>sd()</code> standart chetlanishni, <code>range()</code> eng kichik va eng katta qiymatni qaytaradi."
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Ma'nosi",
            "Natija (misolda)"
          ],
          "rows": [
            [
              "<code>mean(ball)</code>",
              "O'rtacha",
              "64"
            ],
            [
              "<code>median(ball)</code>",
              "Mediana",
              "65"
            ],
            [
              "<code>sd(ball)</code>",
              "Standart chetlanish",
              "11.94"
            ],
            [
              "<code>cor(soat, ball)</code>",
              "Korrelyatsiya",
              "0.927"
            ],
            [
              "<code>lm(ball ~ soat)</code>",
              "Chiziqli model",
              "ball = 43 + 7 × soat"
            ]
          ]
        },
        {
          "type": "code",
          "title": "regressiya.R",
          "code": "model <- lm(ball ~ soat)\n\ncoef(model)[[\"(Intercept)\"]]\ncoef(model)[[\"soat\"]]\nround(summary(model)$r.squared, 3)\nround(cor(soat, ball), 3)",
          "output": "[1] 43\n[1] 7\n[1] 0.86\n[1] 0.927"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Korrelyatsiya — sabab emas",
          "html": "Yuqori korrelyatsiya ikki o'zgaruvchi birga o'zgarishini bildiradi, lekin biri ikkinchisini keltirib chiqaradi degani emas. Regressiya natijasini izohlashda kontekst, ma'lumot sifati va model shartlarini ham tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "median(c(65, 70, 78, 88, 92)) natijasi nima?",
          "options": [
            "78",
            "70",
            "88",
            "80"
          ],
          "answer": 0,
          "explain": "Tartiblangan qatorning o'rtasidagi qiymat 78."
        },
        {
          "q": "cor(soat, ball) qanday qiymat qaytaradi?",
          "options": [
            "O'rtacha ballni",
            "Eng katta ballni",
            "Model xatosini",
            "Ikki o'zgaruvchi orasidagi korrelyatsiya koeffitsiyentini"
          ],
          "answer": 3,
          "explain": "cor() -1 dan 1 gacha bo'lgan korrelyatsiya koeffitsiyentini hisoblaydi."
        },
        {
          "q": "lm(ball ~ soat) modelida soat koeffitsiyenti 7 bo'lsa, bu nimani bildiradi?",
          "options": [
            "Ball har doim 7 ga teng",
            "Soat 7 ga teng",
            "Soat bir birlikka oshganda ball o'rtacha 7 ga oshadi",
            "Model xatosi 7"
          ],
          "answer": 2,
          "explain": "Nishab (slope) bir birlik o'zgarishga mos o'rtacha o'zgarishni beradi."
        }
      ]
    },
    {
      "id": 11,
      "title": "Loyihalar, paketlar va takrorlanuvchanlik",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "R loyihasi — bu shunchaki bir nechta skript emas. Yaxshi loyihada papkalar tartibga solingan, yo'llar nisbiy, paketlar versiyalari bilan qayd etilgan bo'ladi. Shu tufayli tahlilni bir yildan keyin ham aynan takrorlash mumkin."
        },
        {
          "type": "code",
          "title": "yollar.R",
          "code": "yol <- file.path(\"loyiha\", \"data\", \"talabalar.csv\")\n\nyol\ndirname(yol)\nbasename(yol)",
          "output": "[1] \"loyiha/data/talabalar.csv\"\n[1] \"loyiha/data\"\n[1] \"talabalar.csv\""
        },
        {
          "type": "table",
          "head": [
            "Paket",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>readr</code>",
              "Tez va barqaror CSV o'qish"
            ],
            [
              "<code>dplyr</code>",
              "Filtrlash, guruhlash, ustun yaratish"
            ],
            [
              "<code>tidyr</code>",
              "Ma'lumotni uzun yoki keng ko'rinishga o'tkazish"
            ],
            [
              "<code>ggplot2</code>",
              "Grafiklar"
            ],
            [
              "<code>stringr</code>",
              "Matnlar bilan ishlash"
            ],
            [
              "<code>purrr</code>",
              "Funksional dasturlash vositalari"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Loyiha tuzilishi",
          "html": "Odatda <code>loyiha/</code> ichida <code>data/</code>, <code>scripts/</code>, <code>output/</code> va <code>.Rproj</code> fayli bo'ladi. RStudio'da loyiha ochilsa, ish papkasi avtomatik loyiha ildiziga o'rnatiladi. <code>setwd()</code> bilan yo'lni qo'lda o'zgartirishdan qoching."
        },
        {
          "type": "code",
          "title": "paketlar.R",
          "code": "# Har bir sessiyada kerakli paketlarni yuklang\n# library(readr)\n# library(dplyr)\n# library(ggplot2)\n\npaketlar <- c(\"readr\", \"dplyr\", \"ggplot2\")\nlength(paketlar)\npaste(paketlar, collapse = \", \")",
          "output": "[1] 3\n[1] \"readr, dplyr, ggplot2\""
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Takrorlanuvchanlik",
          "html": "<code>sessionInfo()</code> R va paket versiyalarini ko'rsatadi. <code>renv</code> paketi loyiha kutubxonasini qulflab, boshqa kompyuterda bir xil versiyalarni tiklashga yordam beradi. Tasodifiy sonlar uchun <code>set.seed()</code> ishlatishni unutmang."
        }
      ],
      "quiz": [
        {
          "q": "Paketni sessiyaga yuklash uchun qaysi funksiya ishlatiladi?",
          "options": [
            "library()",
            "install.packages()",
            "require_file()",
            "loadRDS()"
          ],
          "answer": 0,
          "explain": "library() allaqachon o'rnatilgan paketni joriy sessiyaga yuklaydi."
        },
        {
          "q": "Loyihada fayl yo'llari qanday bo'lgani ma'qul?",
          "options": [
            "Har doim to'liq C:\\ yo'l",
            "Faqat ish stolidagi yo'l",
            "Loyiha ildiziga nisbatan",
            "Fayl nomisiz"
          ],
          "answer": 2,
          "explain": "Nisbiy yo'llar loyihani boshqa kompyuterga ko'chirishda ham ishlaydi."
        },
        {
          "q": "R va paket versiyalarini tekshirish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "version()",
            "sessionInfo()",
            "libPaths()",
            "getwd()"
          ],
          "answer": 1,
          "explain": "sessionInfo() R versiyasi, platforma va yuklangan paketlar haqida ma'lumot beradi."
        }
      ]
    },
    {
      "id": 12,
      "title": "Mini loyiha: talabalar ballarini tahlil qilish",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi o'rganganlarimizni birlashtiramiz. Olti talabaning ballari bor. Ma'lumotni data frame'ga yig'amiz, guruhlar bo'yicha o'rtachani hisoblaymiz, yuqori natijalarni ajratamiz, CSV'ga yozamiz va taqsimotni grafikda ko'rsatamiz."
        },
        {
          "type": "code",
          "title": "loyiha-boshlanish.R",
          "code": "talabalar <- data.frame(\n  ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\", \"Malika\", \"Sardor\"),\n  guruh = c(\"A\", \"A\", \"A\", \"B\", \"B\", \"B\"),\n  ball = c(92, 78, 88, 65, 95, 71)\n)\n\nnrow(talabalar)\nmean(talabalar$ball)\naggregate(ball ~ guruh, data = talabalar, FUN = mean)",
          "output": "[1] 6\n[1] 81.5\n  guruh ball\n1     A   86\n2     B   77"
        },
        {
          "type": "ul",
          "items": [
            "Ma'lumotni yuklash va <code>nrow()</code>, <code>mean()</code> bilan tekshirish.",
            "Guruhlar bo'yicha o'rtachani <code>aggregate()</code> bilan hisoblash.",
            "Yuqori natijalarni shart bo'yicha ajratish.",
            "Natijani <code>write.csv()</code> bilan eksport qilish.",
            "Taqsimotni <code>hist()</code> bilan ko'rsatish."
          ]
        },
        {
          "type": "code",
          "title": "loyiha-eksport.R",
          "code": "yuqori <- talabalar[talabalar$ball >= 85, ]\n\nnrow(yuqori)\nyuqori$ism\n\nwrite.csv(yuqori, \"yuqori.csv\", row.names = FALSE)\nfile.exists(\"yuqori.csv\")",
          "output": "[1] 3\n[1] \"Aziza\"   \"Dilnoza\" \"Malika\"\n[1] TRUE"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Loyihani yaxshilang",
          "html": "O'zingiz qo'shib ko'ring: yetishmayotgan ballarni <code>NA</code> bilan belgilang, o'rtachani <code>na.rm = TRUE</code> bilan hisoblang, har bir talabaga baho ustunini qo'shing yoki natijani <code>ggplot2</code> bilan chiroyliroq chizing. Har bir qo'shimcha — yangi amaliyot."
        },
        {
          "type": "code",
          "title": "loyiha-grafik.R",
          "code": "hist(talabalar$ball, breaks = 5, col = \"steelblue\",\n     main = \"Ballar taqsimoti\", xlab = \"Ball\")",
          "outputLabel": "Kutilgan grafik",
          "output": "Grafik: 65 dan 95 gacha bo'lgan ballar besh oraliqqa bo'lingan gistogramma. Eng ko'p talaba 85-95 oralig'ida, eng past natija 65 atrofida ko'rinadi."
        }
      ],
      "quiz": [
        {
          "q": "Loyihada guruh bo'yicha o'rtacha ballni qaysi vosita bilan hisobladik?",
          "options": [
            "sort()",
            "nrow()",
            "read.csv()",
            "aggregate()"
          ],
          "answer": 3,
          "explain": "aggregate(ball ~ guruh, data = talabalar, FUN = mean) har bir guruh uchun o'rtachani beradi."
        },
        {
          "q": "Ball 85 dan yuqori talabalarni ajratish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "talabalar[talabalar$ball >= 85, ]",
            "talabalar$ball >= 85",
            "order(talabalar$ball)",
            "summary(talabalar)"
          ],
          "answer": 0,
          "explain": "Kvadrat qavs ichidagi mantiqiy shart mos qatorlarni tanlaydi."
        },
        {
          "q": "Natijani CSV faylga yozish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "read.csv()",
            "write.csv()",
            "file.exists()",
            "print()"
          ],
          "answer": 1,
          "explain": "write.csv() data frame'ni CSV formatida saqlaydi."
        }
      ]
    },
    {
      "id": 13,
      "title": "Ma'lumotni birinchi qarashda tekshirish",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Yangi ma'lumot to'plamini olgach, darhol tahlilga sho'ng'imang. Avval uning <b>o'lchami</b>, <b>ustun nomlari</b> va <b>turlari</b> bilan tanishing. Bu bosqich keyinchalik «nega bu ustun matn bo'lib qoldi?» degan savollarning oldini oladi."
        },
        {
          "type": "code",
          "title": "tekshirish.R",
          "code": "talabalar <- data.frame(\n  ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\"),\n  ball = c(92, 78, 88, 65),\n  guruh = c(\"A\", \"A\", \"B\", \"B\")\n)\n\ndim(talabalar)\nnames(talabalar)\nunname(sapply(talabalar, class))\nnrow(talabalar)",
          "output": "[1] 4 3\n[1] \"ism\"   \"ball\"  \"guruh\"\n[1] \"character\" \"numeric\"   \"character\"\n[1] 4"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "dim() tartibini yodda tuting",
          "html": "<code>dim()</code> har doim avval <b>qatorlar</b>, keyin <b>ustunlar</b> sonini beradi. <code>nrow()</code> va <code>ncol()</code> esa shu qiymatlarni alohida qaytaradi. <code>sapply(talabalar, class)</code> har bir ustun turini bir yo'la ko'rsatadi."
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Natijasi",
            "Qachon kerak"
          ],
          "rows": [
            [
              "<code>dim()</code>",
              "Qator va ustunlar soni",
              "Jadval hajmini bilish"
            ],
            [
              "<code>names()</code>",
              "Ustun nomlari",
              "Ustun nomini tekshirish"
            ],
            [
              "<code>class()</code>",
              "Bitta obyekt turi",
              "Ustun turini aniqlash"
            ],
            [
              "<code>summary()</code>",
              "Qisqa statistika",
              "Sonlarning taqsimoti"
            ],
            [
              "<code>str()</code>",
              "Tuzilma tavsifi",
              "Chuqurroq tanishish"
            ]
          ]
        },
        {
          "type": "code",
          "title": "summary.R",
          "code": "summary(talabalar$ball)\nrange(talabalar$ball)\nanyNA(talabalar)",
          "output": "   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. \n  65.00   74.75   83.00   80.75   89.00   92.00 \n[1] 65 92\n[1] FALSE"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tekshiruv ro'yxati",
          "html": "Har bir yangi faylda <code>dim()</code>, <code>names()</code>, <code>sapply(..., class)</code>, <code>summary()</code> va <code>anyNA()</code> ni bajaring. Bu beshta qadam ma'lumotdagi nomuvofiqliklarni erta ushlaydi."
        }
      ],
      "quiz": [
        {
          "q": "data.frame uchun dim() qaytaradigan qiymatlar qanday tartibda bo'ladi?",
          "options": [
            "Ustunlar, qatorlar",
            "Qatorlar, ustunlar",
            "Turlar, nomlar",
            "Indekslar, qiymatlar"
          ],
          "answer": 1,
          "explain": "dim() avval qatorlar sonini, keyin ustunlar sonini qaytaradi: 4 qator va 3 ustun."
        },
        {
          "q": "Talabalar jadvalidagi ball ustunining turini qaysi yozuv aniqlaydi?",
          "options": [
            "class(talabalar$ball)",
            "nrow(talabalar)",
            "names(talabalar)",
            "dim(talabalar)"
          ],
          "answer": 0,
          "explain": "class() bitta obyektning turini qaytaradi; talabalar$ball — sonli vektor."
        },
        {
          "q": "summary() sonli vektor haqida qaysi ko'rsatkichni bermaydi?",
          "options": [
            "Minimum",
            "Mediana",
            "Standart chetlanish",
            "Maksimum"
          ],
          "answer": 2,
          "explain": "summary() min, kvartillar, mediana, o'rtacha va maksimumni beradi, lekin standart chetlanishni emas."
        }
      ]
    },
    {
      "id": 14,
      "title": "NA: bo'sh qiymatlarni to'g'ri boshqarish",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Haqiqiy ma'lumotda bo'sh kataklar tez-tez uchraydi: mijoz telefonini kiritmagan, o'lchov esa buzilgan. R'da bunday qiymat <code>NA</code> bilan belgilanadi. NA bilan oddiy taqqoslash mantiqiy javob emas, <b>NA</b> qaytaradi — shuning uchun maxsus funksiyalar kerak."
        },
        {
          "type": "code",
          "title": "na-asoslari.R",
          "code": "x <- c(10, NA, 30, 40)\n\nis.na(x)\nsum(is.na(x))\nmean(x)\nmean(x, na.rm = TRUE)\nsum(x, na.rm = TRUE)",
          "output": "[1] FALSE  TRUE FALSE FALSE\n[1] 1\n[1] NA\n[1] 26.66667\n[1] 80"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "NA == NA ham NA",
          "html": "Bo'sh qiymatni <code>x == NA</code> bilan qidirmang: natija <code>NA</code> bo'ladi. Buning uchun faqat <code>is.na(x)</code> ishlatiladi. Jamlovchi funksiyalarda <code>na.rm = TRUE</code> qo'shmasangiz, bitta NA butun natijani NA qilib qo'yadi."
        },
        {
          "type": "code",
          "title": "qatorlarni-tozalash.R",
          "code": "sotuv <- data.frame(\n  mahsulot = c(\"A\", \"B\", \"C\", \"D\"),\n  narx = c(120, NA, 85, 90)\n)\n\nwhich(is.na(sotuv$narx))\nsum(complete.cases(sotuv))\nmean(sotuv$narx, na.rm = TRUE)\nsotuv$narx[is.na(sotuv$narx)] <- median(sotuv$narx, na.rm = TRUE)\nsotuv$narx",
          "output": "[1] 2\n[1] 3\n[1] 98.33333\n[1] 120  90  85  90"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>is.na(x)</code>",
              "Har bir element bo'sh yoki yo'qligini tekshiradi"
            ],
            [
              "<code>anyNA(x)</code>",
              "Umuman NA bor-yo'qligini bitta TRUE/FALSE bilan beradi"
            ],
            [
              "<code>complete.cases(df)</code>",
              "To'liq bo'lgan qatorlar uchun TRUE qaytaradi"
            ],
            [
              "<code>na.omit(df)</code>",
              "NA bor qatorlarni butunlay olib tashlaydi"
            ],
            [
              "<code>na.rm = TRUE</code>",
              "Hisob-kitobda NA'larni e'tiborsiz qoldiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "O'chirish yoki to'ldirish?",
          "html": "Agar NA juda kam bo'lsa, <code>na.omit()</code> qulay. Lekin muhim ustunda ko'p bo'shliq bo'lsa, o'chirish ma'lumotning katta qismini yo'qotadi. U holda median yoki o'rtacha bilan to'ldirish, sababini hujjatlashtirish ma'qul. Tanlovni hisobotda izohlang."
        }
      ],
      "quiz": [
        {
          "q": "mean(c(4, NA, 8)) ifodasining natijasi nima?",
          "options": [
            "NA",
            "6",
            "4",
            "Xatolik beradi"
          ],
          "answer": 0,
          "explain": "na.rm qo'shilmagani uchun bitta NA butun o'rtachani NA qiladi."
        },
        {
          "q": "sum(is.na(c(1, NA, NA))) natijasi nechchi?",
          "options": [
            "1",
            "2",
            "3",
            "NA"
          ],
          "answer": 1,
          "explain": "is.na() ikkita TRUE qaytaradi, sum() esa TRUE ni 1 deb hisoblab 2 beradi."
        },
        {
          "q": "complete.cases(df) qanday natija qaytaradi?",
          "options": [
            "Data frame",
            "Bitta son",
            "Har bir qator uchun mantiqiy vektor",
            "Ustun nomlari"
          ],
          "answer": 2,
          "explain": "complete.cases() har bir qator to'liq bo'lsa TRUE, biror qiymat NA bo'lsa FALSE beradi."
        }
      ]
    },
    {
      "id": 15,
      "title": "Shartli hisob-kitoblar: ifelse va case_when",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "R'da shartli mantiq nafaqat bitta qiymat, balki butun vektorga qo'llanadi. <code>ifelse()</code> uchlik operatorning vektorlashgan ko'rinishi: shart, rost bo'lganda qiymat va yolg'on bo'lganda qiymat. Ko'p shartlar uchun esa dplyr'ning <code>case_when()</code> funksiyasi o'qishga qulayroq."
        },
        {
          "type": "code",
          "title": "ifelse.R",
          "code": "ball <- c(45, 62, 78, 91)\n\nifelse(ball >= 60, \"o'tdi\", \"qayta topshiradi\")\nbaholar <- ifelse(ball >= 90, \"A\",\n           ifelse(ball >= 70, \"B\",\n                  ifelse(ball >= 60, \"C\", \"F\")))\nbaholar\ntable(baholar)",
          "output": "[1] \"qayta topshiradi\" \"o'tdi\" \"o'tdi\" \"o'tdi\"\n[1] \"F\" \"C\" \"B\" \"A\"\nbaholar\nA B C F \n1 1 1 1 "
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Ichma-ich ifelse o'qilishi qiyinlashadi",
          "html": "Uch-to'rt shartdan keyin qavslar chalkashadi. <code>case_when()</code> har bir shartni alohida qatorga yozish imkonini beradi va <code>TRUE ~ qiymat</code> bilan «qolgan barcha holatlar» uchun javob beradi."
        },
        {
          "type": "code",
          "title": "case-when.R",
          "code": "library(dplyr)\n\ntalabalar <- data.frame(\n  ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\"),\n  ball = ball\n)\n\ntalabalar |>\n  mutate(daraja = case_when(\n    ball >= 90 ~ \"A\",\n    ball >= 70 ~ \"B\",\n    ball >= 60 ~ \"C\",\n    TRUE ~ \"F\"\n  )) |>\n  pull(daraja)",
          "output": "[1] \"A\" \"C\" \"B\" \"F\""
        },
        {
          "type": "table",
          "head": [
            "Holat",
            "Yozuv",
            "Natija"
          ],
          "rows": [
            [
              "Bitta shart",
              "<code>ifelse(x &gt; 0, \"+\", \"-\")</code>",
              "Vektor"
            ],
            [
              "Ko'p shart",
              "<code>case_when(... ~ ..., TRUE ~ ...)</code>",
              "Vektor"
            ],
            [
              "Shart bajarilmasa",
              "<code>ifelse(FALSE, 1, 2)</code>",
              "2"
            ],
            [
              "else berilmasa",
              "<code>ifelse(FALSE, 1)</code>",
              "NA"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tartib muhim",
          "html": "case_when() shartlarni <b>yuqoridan pastga</b> tekshiradi va birinchi mos shartni oladi. Shuning uchun eng qat'iy shartni (masalan, 90 dan yuqori) birinchi yozing. Aks holda kengroq shart uni «yutib yuboradi»."
        }
      ],
      "quiz": [
        {
          "q": "ifelse(c(TRUE, FALSE), \"ha\", \"yo'q\") qanday natija beradi?",
          "options": [
            "\"ha\" \"ha\"",
            "\"yo'q\" \"yo'q\"",
            "\"ha\" \"yo'q\"",
            "NA NA"
          ],
          "answer": 2,
          "explain": "Birinchi shart TRUE bo'lsa \"ha\", ikkinchisi FALSE bo'lsa \"yo'q\" olinadi."
        },
        {
          "q": "case_when() da «qolgan barcha holatlar» uchun qaysi yozuv ishlatiladi?",
          "options": [
            "FALSE ~ qiymat",
            "else ~ qiymat",
            "default ~ qiymat",
            "TRUE ~ qiymat"
          ],
          "answer": 3,
          "explain": "TRUE sharti har doim bajariladi, shuning uchun u oxirgi «zaxira» qoida bo'ladi."
        },
        {
          "q": "ifelse(FALSE, 1) natijasi nima?",
          "options": [
            "0",
            "NA",
            "1",
            "Xatolik"
          ],
          "answer": 1,
          "explain": "Yolg'on holat uchun qiymat berilmagani sababli natija NA bo'ladi."
        }
      ]
    },
    {
      "id": 16,
      "title": "Matritsalar va ko'p o'lchovli massivlar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Matritsa — bir turdagi qiymatlardan tashkil topgan ikki o'lchovli jadval. Data frame'dan farqli ravishda unda barcha elementlar bir turda bo'ladi, shuning uchun matematik amallar tez bajariladi. Matritsalar masofa jadvallari, korrelyatsiya matritsalari va chiziqli algebra uchun asosiy tuzilma."
        },
        {
          "type": "code",
          "title": "matritsa.R",
          "code": "m <- matrix(1:6, nrow = 2, byrow = TRUE)\nm\ndim(m)\nm[2, 3]\nm[, 2]",
          "output": "     [,1] [,2] [,3]\n[1,]    1    2    3\n[2,]    4    5    6\n[1] 2 3\n[1] 6\n[1] 2 5"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Standart to'ldirish ustun bo'ylab",
          "html": "<code>matrix(1:6, nrow = 2)</code> qiymatlarni avval birinchi ustunga, keyin ikkinchisiga joylaydi. Qator bo'ylab to'ldirish uchun <code>byrow = TRUE</code> kerak. Natijani chalkashtirmaslik uchun har doim <code>byrow</code> ni aniq yozing."
        },
        {
          "type": "code",
          "title": "qator-ustun.R",
          "code": "rowSums(m)\ncolSums(m)\nt(m)",
          "output": "[1]  6 15\n[1]  5  7  9\n     [,1] [,2]\n[1,]    1    4\n[2,]    2    5\n[3,]    3    6"
        },
        {
          "type": "table",
          "head": [
            "Tuzilma",
            "O'lchov",
            "Turlar"
          ],
          "rows": [
            [
              "Vektor",
              "1 o'lchov",
              "Bitta tur"
            ],
            [
              "Matritsa",
              "2 o'lchov",
              "Bitta tur"
            ],
            [
              "Array",
              "2 dan ko'p",
              "Bitta tur"
            ],
            [
              "Data frame",
              "2 o'lchov",
              "Har ustun alohida tur"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "cbind va rbind",
          "html": "<code>cbind()</code> ustunlarni, <code>rbind()</code> qatorlarni birlashtiradi. Ikkalasida ham o'lchamlar mos bo'lishi shart. Uch o'lchovli ma'lumot uchun <code>array(1:8, dim = c(2, 2, 2))</code> ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "matrix(1:6, nrow = 2) standart holatda qanday to'ldiriladi?",
          "options": [
            "Ustun bo'ylab",
            "Qator bo'ylab",
            "Tasodifiy",
            "Teskari tartibda"
          ],
          "answer": 0,
          "explain": "byrow = FALSE standart qiymat, shuning uchun sonlar avval ustun bo'ylab joylashadi."
        },
        {
          "q": "m[2, ] yozuvi matritsadan nimani oladi?",
          "options": [
            "Ikkinchi ustunni",
            "Birinchi qatorni",
            "Ikkinchi qatorni",
            "Bitta elementni"
          ],
          "answer": 2,
          "explain": "Verguldan oldingi 2 qator raqami, verguldan keyin bo'sh joy barcha ustunlarni bildiradi."
        },
        {
          "q": "dim(matrix(1:12, nrow = 3)) natijasi qanday bo'ladi?",
          "options": [
            "3 12",
            "12 3",
            "4 3",
            "3 4"
          ],
          "answer": 3,
          "explain": "12 ta qiymat 3 qatorga bo'linadi va 4 ustun hosil bo'ladi."
        }
      ]
    },
    {
      "id": 17,
      "title": "Ro'yxatlar: turli xil ma'lumotni bir joyda saqlash",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Vektor faqat bir turdagi qiymatlarni, data frame esa bir xil uzunlikdagi ustunlarni saqlaydi. <b>List</b> esa har xil uzunlik va turdagi obyektlarni bitta konteynerga yig'adi. Shuning uchun model natijalari, JSON javoblari va murakkab sozlamalar list ko'rinishida bo'ladi."
        },
        {
          "type": "code",
          "title": "list.R",
          "code": "talaba <- list(\n  ism = \"Aziza\",\n  baholar = c(90, 85, 95),\n  kurs = list(nomi = \"R\", davomiyligi = 6)\n)\n\nlength(talaba)\nnames(talaba)\ntalaba$ism\ntalaba[[\"baholar\"]]\ntalaba$kurs$nomi",
          "output": "[1] 3\n[1] \"ism\"     \"baholar\" \"kurs\"   \n[1] \"Aziza\"\n[1] 90 85 95\n[1] \"R\""
        },
        {
          "type": "note",
          "variant": "info",
          "title": "[ va [[ farqi",
          "html": "<code>talaba[\"ism\"]</code> natijasi <b>list</b> bo'lib qoladi, <code>talaba[[\"ism\"]]</code> esa ichidagi <b>qiymatni</b> beradi. Bitta element bilan ishlashda <code>[[ ]]</code> yoki <code>$</code> ishlatiladi. Ro'yxat ustida hisob-kitob qilishdan oldin ko'pincha <code>unlist()</code> kerak bo'ladi."
        },
        {
          "type": "code",
          "title": "lapply-list.R",
          "code": "baholar <- list(A = c(90, 85), B = c(70, 80, 78))\n\nunlist(lapply(baholar, mean))\nsapply(baholar, length)\nclass(talaba[\"ism\"])\nclass(talaba[[\"ism\"]])",
          "output": "   A    B \n85.0 76.0 \nA B \n2 3 \n[1] \"list\"\n[1] \"character\""
        },
        {
          "type": "table",
          "head": [
            "Amal",
            "Yozuv",
            "Natija turi"
          ],
          "rows": [
            [
              "Element nomi bilan",
              "<code>talaba$ism</code>",
              "Qiymat"
            ],
            [
              "Bitta element",
              "<code>talaba[[\"ism\"]]</code>",
              "Qiymat"
            ],
            [
              "Kichik list",
              "<code>talaba[\"ism\"]</code>",
              "List"
            ],
            [
              "Barcha elementlar",
              "<code>unlist(talaba)</code>",
              "Vektor"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Chuqur ro'yxatlar",
          "html": "Ro'yxat ichida ro'yxat bo'lsa, zanjir bilan boring: <code>talaba$kurs$nomi</code>. <code>str(talaba)</code> butun tuzilmani ko'rsatadi. <code>lapply()</code> har bir elementga funksiya qo'llab, yana list qaytaradi — bu keyingi darsning asosiy mavzusi."
        }
      ],
      "quiz": [
        {
          "q": "talaba[\"ism\"] va talaba[[\"ism\"]] orasidagi asosiy farq nima?",
          "options": [
            "Ikkalasi bir xil",
            "Birinchi variant xatolik beradi",
            "Birinchi variant list, ikkinchisi qiymat qaytaradi",
            "Ikkinchi variant faqat sonlar uchun"
          ],
          "answer": 2,
          "explain": "Bitta kvadrat qavs listning bo'lagini, ikkita qavs esa ichidagi obyektni qaytaradi."
        },
        {
          "q": "List qanday ma'lumotlarni saqlashi mumkin?",
          "options": [
            "Turli turdagi va turli uzunlikdagi obyektlarni",
            "Faqat sonlarni",
            "Faqat bir xil uzunlikdagi ustunlarni",
            "Faqat matnlarni"
          ],
          "answer": 0,
          "explain": "List eng moslashuvchan konteyner: ichida vektor, data frame yoki boshqa list bo'lishi mumkin."
        },
        {
          "q": "lapply() qanday natija qaytaradi?",
          "options": [
            "Har doim vektor",
            "List",
            "Data frame",
            "Bitta son"
          ],
          "answer": 1,
          "explain": "lapply() har bir element natijasini list sifatida qaytaradi; soddalashtirish uchun sapply() bor."
        }
      ]
    },
    {
      "id": 18,
      "title": "apply oilasi: apply, tapply, mapply, vapply",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "R'da bir xil amalni ko'p bo'laklarga qo'llash uchun tsikl yozish shart emas. <b>apply oilasi</b> shu ishni ixcham bajaradi: matritsa qatorlari, guruhlar yoki bir nechta vektorlar ustida funksiyani bir yo'la ishga tushiradi."
        },
        {
          "type": "code",
          "title": "apply.R",
          "code": "ballar <- matrix(c(90, 85, 70, 60), nrow = 2)\nballar\napply(ballar, 1, mean)\napply(ballar, 2, max)",
          "output": "     [,1] [,2]\n[1,]   90   70\n[2,]   85   60\n[1] 80.0 72.5\n[1] 90 70"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "margin nima?",
          "html": "<code>apply(m, 1, f)</code> funksiyani har bir <b>qatorga</b>, <code>apply(m, 2, f)</code> har bir <b>ustunga</b> qo'llaydi. Natija vektor yoki matritsa bo'lishi mumkin. Ro'yxat va vektorlar uchun <code>lapply()</code>, <code>sapply()</code> va <code>vapply()</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "tapply-mapply.R",
          "code": "guruh <- c(\"A\", \"A\", \"B\", \"B\")\nball <- c(92, 78, 88, 65)\n\nunname(tapply(ball, guruh, mean))\nmapply(function(x, y) x + y, 1:3, 4:6)\nvapply(1:3, function(x) x^2, numeric(1))",
          "output": "[1] 85.0 76.5\n[1] 5 7 9\n[1] 1 4 9"
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Kirish",
            "Natija"
          ],
          "rows": [
            [
              "<code>apply()</code>",
              "Matritsa yoki data frame",
              "Vektor yoki matritsa"
            ],
            [
              "<code>lapply()</code>",
              "Vektor yoki list",
              "List"
            ],
            [
              "<code>sapply()</code>",
              "Vektor yoki list",
              "Soddalashtirilgan vektor"
            ],
            [
              "<code>tapply()</code>",
              "Vektor + guruh",
              "Guruhlar bo'yicha vektor"
            ],
            [
              "<code>mapply()</code>",
              "Bir nechta vektor",
              "Vektor yoki list"
            ],
            [
              "<code>vapply()</code>",
              "Vektor + FUN.VALUE",
              "Tekshirilgan turdagi vektor"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "vapply nima uchun xavfsiz?",
          "html": "<code>vapply(x, f, numeric(1))</code> har bir natija bitta son bo'lishini oldindan talab qiladi. Agar funksiya kutilmaganda matn qaytarsa, R darhol xatolik beradi. Katta loyihalarda bu jim xatolarning oldini oladi."
        }
      ],
      "quiz": [
        {
          "q": "tapply(ball, guruh, mean) ifodasi nimani hisoblaydi?",
          "options": [
            "Butun vektor o'rtachasini",
            "Faqat birinchi guruhni",
            "Har bir element kvadratini",
            "Har bir guruh bo'yicha o'rtachani"
          ],
          "answer": 3,
          "explain": "tapply() vektorni guruhlarga bo'lib, har bir guruhga mean() ni qo'llaydi."
        },
        {
          "q": "vapply() dagi FUN.VALUE argumenti nima uchun kerak?",
          "options": [
            "Kutilayotgan natija turi va uzunligini belgilash",
            "Grafik rangini tanlash",
            "Fayl nomini berish",
            "NA qiymatlarni o'chirish"
          ],
          "answer": 0,
          "explain": "FUN.VALUE natijaning shablonini beradi; mos kelmasa, R xatolik qaytaradi."
        },
        {
          "q": "apply(m, 2, sum) nimani hisoblaydi?",
          "options": [
            "Qatorlar yig'indisini",
            "Butun matritsa yig'indisini",
            "Ustunlar yig'indisini",
            "Faqat diagonalni"
          ],
          "answer": 2,
          "explain": "margin = 2 ustunlarni bildiradi, shuning uchun har bir ustun bo'yicha yig'indi olinadi."
        }
      ]
    },
    {
      "id": 19,
      "title": "Funksiyalar: standart qiymatlar, ... va xatolarni boshqarish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Yaxshi funksiya — qayta ishlatiladigan va niyati nomidan ko'rinadigan kod. Oldingi darsda oddiy funksiya yasagan edik. Endi standart qiymatlar, kutilmagan kirishlarni tekshirish va qo'shimcha argumentlarni uzatishni o'rganamiz."
        },
        {
          "type": "code",
          "title": "narx-funksiya.R",
          "code": "narx_hisob <- function(narx, soni = 1, chegirma = 0) {\n  stopifnot(narx > 0, soni > 0, chegirma >= 0, chegirma <= 1)\n  narx * soni * (1 - chegirma)\n}\n\nnarx_hisob(450, 2)\nnarx_hisob(450, 2, 0.1)",
          "output": "[1] 900\n[1] 810"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "stopifnot — himoya to'sig'i",
          "html": "<code>stopifnot()</code> ichidagi barcha shartlar TRUE bo'lishi kerak. Aks holda funksiya darhol xatolik bilan to'xtaydi. Bu noto'g'ri narx yoki manfiy soni bilan hisob-kitob davom etishidan saqlaydi."
        },
        {
          "type": "code",
          "title": "uch-nuqta.R",
          "code": "stat <- function(x, ...) {\n  mean(x, ...)\n}\n\nstat(c(10, NA, 30), na.rm = TRUE)\n\nxato <- function(x) {\n  if (length(x) == 0) stop(\"Vektor bo'sh\")\n  sum(x)\n}\n\ntryCatch(xato(numeric(0)), error = function(e) conditionMessage(e))",
          "output": "[1] 20\n[1] \"Vektor bo'sh\""
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "Standart qiymat",
              "<code>soni = 1</code>",
              "Argument berilmasa ishlatiladi"
            ],
            [
              "Qo'shimcha argument",
              "<code>...</code>",
              "Boshqa funksiyaga uzatiladi"
            ],
            [
              "Shart tekshiruvi",
              "<code>stopifnot(shart)</code>",
              "Bajarilmasa xatolik"
            ],
            [
              "Xatoni ushlash",
              "<code>tryCatch(..., error = ...)</code>",
              "Dasturni to'xtatmaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Funksiya nomi fe'l bo'lsin",
          "html": "<code>hisobla</code>, <code>tozala</code>, <code>yukla</code> kabi nomlar funksiya nima qilishini darhol ko'rsatadi. Juda uzun funksiyani kichik yordamchi funksiyalarga bo'ling. Har bir funksiya bitta aniq vazifani bajarsa, test qilish ham osonlashadi."
        }
      ],
      "quiz": [
        {
          "q": "stopifnot() qanday vazifani bajaradi?",
          "options": [
            "Sonlarni yaxlitlaydi",
            "Shart bajarilmasa xatolik beradi",
            "Faylni saqlaydi",
            "Vektorni tartiblaydi"
          ],
          "answer": 1,
          "explain": "stopifnot() kirish qiymatlarini tekshiradi va shart buzilsa funksiyani to'xtatadi."
        },
        {
          "q": "Funksiya argumentidagi ... nimani bildiradi?",
          "options": [
            "Majburiy argumentni",
            "Funksiya tugashini",
            "Qo'shimcha argumentlarni boshqa funksiyaga uzatishni",
            "Global o'zgaruvchini"
          ],
          "answer": 2,
          "explain": "... orqali funksiya o'zi chaqirayotgan funksiyaga qo'shimcha argumentlarni o'tkazadi."
        },
        {
          "q": "Funksiya ichida missing(y) qanday ma'lumot beradi?",
          "options": [
            "y ning qiymatini",
            "y ning turini",
            "y vektormi yoki yo'qmi",
            "y argumenti berilmaganmi-yo'qmi"
          ],
          "answer": 3,
          "explain": "missing() argument chaqiruvda umuman berilmaganini tekshiradi."
        }
      ]
    },
    {
      "id": 20,
      "title": "stringr: matnlarni tozalash va qayta ishlash",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Matn ustunlari deyarli har bir loyihada uchraydi: ismlar, shahar nomlari, mahsulot kodlari. Base R'da <code>gsub()</code>, <code>nchar()</code> kabi funksiyalar bor, lekin <b>stringr</b> ularni bir xil nomlash va barqaror xatti-harakat bilan birlashtiradi. Barcha funksiyalar <code>str_</code> bilan boshlanadi."
        },
        {
          "type": "code",
          "title": "stringr-asoslari.R",
          "code": "library(stringr)\n\nism <- \"  Aziza Karimova  \"\nstr_trim(ism)\nstr_to_upper(str_trim(ism))\nstr_length(\"R tili\")\nstr_sub(\"Toshkent\", 1, 4)\nstr_pad(\"42\", width = 5, pad = \"0\")",
          "output": "[1] \"Aziza Karimova\"\n[1] \"AZIZA KARIMOVA\"\n[1] 6\n[1] \"Tosh\"\n[1] \"00042\""
        },
        {
          "type": "note",
          "variant": "info",
          "title": "str_sub chegaralari",
          "html": "<code>str_sub(matn, 1, 4)</code> birinchi va to'rtinchi belgini <b>ham</b> oladi, ya'ni 4 ta belgi qaytaradi. Manfiy indeks oxirdan sanaydi: <code>str_sub(\"Toshkent\", -3, -1)</code> natijasi <code>\"ent\"</code>."
        },
        {
          "type": "code",
          "title": "qidirish-almashtirish.R",
          "code": "ismlar <- c(\"Aziza\", \"Bek\", \"Dilnoza\")\n\nstr_detect(ismlar, \"a$\")\nstr_replace(ismlar, \"a$\", \"a!\")\nstr_c(ismlar, collapse = \", \")\nstr_count(ismlar, \"a\")",
          "output": "[1]  TRUE FALSE  TRUE\n[1] \"Aziza!\"   \"Bek\"      \"Dilnoza!\"\n[1] \"Aziza, Bek, Dilnoza\"\n[1] 1 0 1"
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Vazifasi",
            "Natija"
          ],
          "rows": [
            [
              "<code>str_trim()</code>",
              "Chetlardagi bo'shliqni olib tashlaydi",
              "Matn"
            ],
            [
              "<code>str_detect()</code>",
              "Naqsh borligini tekshiradi",
              "TRUE/FALSE vektori"
            ],
            [
              "<code>str_replace()</code>",
              "Birinchi moslikni almashtiradi",
              "Matn"
            ],
            [
              "<code>str_replace_all()</code>",
              "Barcha mosliklarni almashtiradi",
              "Matn"
            ],
            [
              "<code>str_split()</code>",
              "Matnni bo'laklarga ajratadi",
              "List"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "NA bilan xatti-harakat",
          "html": "stringr funksiyalari NA ni saqlab qoladi: <code>str_to_upper(NA)</code> natijasi <code>NA</code>. Bu vektorlarni tozalashda qulay, chunki bo'sh qiymatlar o'z-o'zidan yo'qolib ketmaydi. <code>str_c()</code> esa standart holatda NA ni butun natijaga tarqatadi — <code>str_c(ism, NA)</code> NA beradi."
        }
      ],
      "quiz": [
        {
          "q": "str_detect() qanday natija qaytaradi?",
          "options": [
            "Matnning o'zini",
            "Mantiqiy vektor",
            "Sonlar vektorini",
            "List"
          ],
          "answer": 1,
          "explain": "Har bir element uchun naqsh topilsa TRUE, topilmasa FALSE qaytaradi."
        },
        {
          "q": "str_sub(\"Samarqand\", 1, 5) natijasi nima?",
          "options": [
            "\"Samar\"",
            "\"Samarq\"",
            "\"amarq\"",
            "\"qand\""
          ],
          "answer": 0,
          "explain": "1 dan 5 gacha beshta belgi olinadi: S-a-m-a-r."
        },
        {
          "q": "str_pad() standart holatda qaysi tomondan to'ldiradi?",
          "options": [
            "O'ngdan",
            "Ikki tomondan",
            "Faqat markazdan",
            "Chapdan"
          ],
          "answer": 3,
          "explain": "side = \"left\" standart qiymat, shuning uchun \"42\" oldiga nol qo'shiladi."
        }
      ]
    },
    {
      "id": 21,
      "title": "Regex asoslari: naqshlar bilan matn qidirish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Muntazam ifoda (regex) — matn ichidagi naqshni tasvirlash tili. U sana, telefon raqami yoki kod formatini tekshirishda ishlatiladi. stringr'da regex naqshlari oddiy matn sifatida beriladi, faqat teskari chiziq R satrida ikki marta yoziladi."
        },
        {
          "type": "code",
          "title": "sana-tekshirish.R",
          "code": "library(stringr)\n\nmatn <- c(\"2024-01-05\", \"2024-02-10\", \"hisobot\")\n\nstr_detect(matn, \"^\\\\d{4}-\\\\d{2}-\\\\d{2}$\")\nstr_extract(matn, \"\\\\d{4}\")",
          "output": "[1]  TRUE  TRUE FALSE\n[1] \"2024\" \"2024\" NA"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Teskari chiziq ikki marta",
          "html": "R satrida <code>\\d</code> emas, <code>\\\\d</code> yoziladi: birinchi teskari chiziq satr uchun, ikkinchisi regex uchun. Aks holda R <code>d</code> harfini qidiradi. Xuddi shu qoida <code>\\s</code>, <code>\\w</code> va <code>\\b</code> uchun ham amal qiladi."
        },
        {
          "type": "code",
          "title": "almashtirish.R",
          "code": "matn2 <- \"R 2024 va R 2025\"\n\nstr_replace_all(matn2, \"R\", \"R til\")\nstr_extract_all(matn2, \"\\\\d{4}\")[[1]]\nstr_split(\"Toshkent,Buxoro,Samarqand\", \",\")[[1]]",
          "output": "[1] \"R til 2024 va R til 2025\"\n[1] \"2024\" \"2025\"\n[1] \"Toshkent\" \"Buxoro\"   \"Samarqand\""
        },
        {
          "type": "table",
          "head": [
            "Naqsh",
            "Ma'nosi",
            "Misol"
          ],
          "rows": [
            [
              "<code>^</code>",
              "Satr boshi",
              "<code>^R</code>"
            ],
            [
              "<code>$</code>",
              "Satr oxiri",
              "<code>2024$</code>"
            ],
            [
              "<code>\\\\d</code>",
              "Raqam",
              "<code>\\\\d{4}</code>"
            ],
            [
              "<code>+</code>",
              "Bir yoki ko'p takror",
              "<code>a+</code>"
            ],
            [
              "<code>[A-Z]</code>",
              "Katta harf oralig'i",
              "<code>[A-Z]{2}</code>"
            ],
            [
              "<code>|</code>",
              "Yoki",
              "<code>R|Python</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Naqshni kichik qadamda sinang",
          "html": "Murakkab regexni birdan yozmang. Avval bitta satrda <code>str_detect()</code> bilan sinab ko'ring, keyin butun ustunga qo'llang. Natijani <code>sum(str_detect(...))</code> bilan sanash naqsh juda keng yoki juda tor ekanini tez ko'rsatadi."
        }
      ],
      "quiz": [
        {
          "q": "Regexdagi ^ belgisi nimani bildiradi?",
          "options": [
            "Satr oxirini",
            "Ixtiyoriy belgini",
            "Satr boshini",
            "Raqamni"
          ],
          "answer": 2,
          "explain": "^ naqsh satrning boshidan boshlanishini talab qiladi."
        },
        {
          "q": "R satrida raqamni bildiruvchi regex qanday yoziladi?",
          "options": [
            "\"\\\\d\"",
            "\"\\\\\\\\d\"",
            "\"/d/\"",
            "\"d+\""
          ],
          "answer": 1,
          "explain": "R satrida bitta teskari chiziq escape sifatida ishlaydi, shuning uchun regex uchun ikki marta yoziladi."
        },
        {
          "q": "str_extract_all() qanday natija qaytaradi?",
          "options": [
            "Bitta matn",
            "Mantiqiy vektor",
            "Data frame",
            "List"
          ],
          "answer": 3,
          "explain": "Har bir element uchun barcha mosliklar ro'yxati qaytadi, shuning uchun natija list bo'ladi."
        }
      ]
    },
    {
      "id": 22,
      "title": "Faktorlar va forcats bilan tartibni boshqarish",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Faktor kategoriyali ma'lumot uchun: shahar, mahsulot turi yoki baho darajasi. Uning <b>levels</b> tartibi grafiklar va statistik modellarda muhim. Ba'zan tartib alifbo bo'yicha emas, mantiqiy bo'lishi kerak: past, o'rta, yuqori."
        },
        {
          "type": "code",
          "title": "factor.R",
          "code": "holat <- factor(c(\"past\", \"yuqori\", \"o'rta\", \"past\"),\n                levels = c(\"past\", \"o'rta\", \"yuqori\"),\n                ordered = TRUE)\n\nlevels(holat)\nas.integer(holat)\nholat[2] > holat[1]",
          "output": "[1] \"past\" \"o'rta\" \"yuqori\"\n[1] 1 3 2 1\n[1] TRUE"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "levels tartibi ichki kodni belgilaydi",
          "html": "Standart holatda <code>factor()</code> darajalarni alifbo tartibida joylaydi. <code>levels</code> argumenti bilan o'z tartibingizni bersangiz, <code>as.integer()</code> ham shu tartibga mos kod qaytaradi. <code>ordered = TRUE</code> esa «katta-kichik» taqqoslashni yoqadi."
        },
        {
          "type": "code",
          "title": "forcats.R",
          "code": "library(forcats)\n\nf <- factor(c(\"past\", \"past\", \"past\", \"o'rta\", \"o'rta\", \"yuqori\"))\n\nlevels(fct_infreq(f))\nlevels(fct_relevel(f, \"yuqori\"))\nlevels(fct_recode(f, \"quyi\" = \"past\", \"orta\" = \"o'rta\", \"oliy\" = \"yuqori\"))",
          "output": "[1] \"past\"  \"o'rta\" \"yuqori\"\n[1] \"yuqori\" \"past\"  \"o'rta\" \n[1] \"quyi\" \"orta\" \"oliy\""
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>fct_infreq()</code>",
              "Darajalarni ko'p uchraydiganidan boshlab tartiblaydi"
            ],
            [
              "<code>fct_relevel()</code>",
              "Tanlangan darajani boshiga yoki kerakli joyga suradi"
            ],
            [
              "<code>fct_recode()</code>",
              "Daraja nomlarini qo'lda o'zgartiradi"
            ],
            [
              "<code>fct_lump()</code>",
              "Kam uchraydigan darajalarni «boshqa»ga birlashtiradi"
            ],
            [
              "<code>fct_drop()</code>",
              "Ishlatilmagan darajalarni olib tashlaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Grafik tartibini oldindan o'ylang",
          "html": "Ustunli grafikda «past, o'rta, yuqori» tartibi o'quvchi uchun tabiiy. Agar faktor darajalari alifbo bo'yicha qolsa, grafik mantiqsiz ko'rinadi. <code>fct_relevel()</code> yoki <code>fct_infreq()</code> ni grafik qurishdan oldin qo'llang."
        }
      ],
      "quiz": [
        {
          "q": "factor() levels berilmasa, darajalarni qanday tartibda joylaydi?",
          "options": [
            "Alifbo tartibida",
            "Uchrash tartibida",
            "Tasodifiy",
            "Teskari alifboda"
          ],
          "answer": 0,
          "explain": "Standart holatda levels alifbo bo'yicha tartiblanadi; tartibni o'zgartirish uchun levels argumenti kerak."
        },
        {
          "q": "fct_relevel(f, \"yuqori\") nima qiladi?",
          "options": [
            "«yuqori» darajasini o'chiradi",
            "Barcha darajalarni teskari qiladi",
            "«yuqori»ni birinchi darajaga suradi",
            "Faktorni matnga aylantiradi"
          ],
          "answer": 2,
          "explain": "fct_relevel() tanlangan darajani ro'yxat boshiga (yoki berilgan joyga) ko'chiradi."
        },
        {
          "q": "ordered = TRUE bo'lgan faktorda holat[2] > holat[1] qanday aniqlanadi?",
          "options": [
            "Alifbo bo'yicha",
            "levels tartibi bo'yicha",
            "Har doim TRUE",
            "Har doim NA"
          ],
          "answer": 1,
          "explain": "Ordered faktorlar taqqoslashda darajalarning levels tartibidan foydalanadi."
        }
      ]
    },
    {
      "id": 23,
      "title": "tidyr: pivot_longer va pivot_wider",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Bir xil ma'lumot ikki ko'rinishda saqlanishi mumkin: <b>keng</b> (har oy alohida ustun) va <b>uzun</b> (oy nomi alohida ustun, qiymat alohida ustun). ggplot2 va dplyr ko'pincha uzun formatni yaxshi ko'radi. tidyr esa ikki format o'rtasida ishonchli o'tkazadi."
        },
        {
          "type": "code",
          "title": "pivot-longer.R",
          "code": "library(tidyr)\n\nkeng <- data.frame(\n  mahsulot = c(\"A\", \"B\"),\n  yanvar = c(10, 8),\n  fevral = c(12, 9)\n)\n\nuzun <- pivot_longer(keng, cols = c(yanvar, fevral),\n                     names_to = \"oy\", values_to = \"sotuv\")\ndim(uzun)\nnames(uzun)\nuzun$sotuv",
          "output": "[1] 4 3\n[1] \"mahsulot\" \"oy\"       \"sotuv\"   \n[1] 10 12  8  9"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Nega qatorlar ko'paydi?",
          "html": "Ikki mahsulot va ikki oy bor edi: 2 × 2 = 4 qator hosil bo'ldi. <code>cols</code> qaysi ustunlar uzun formatga o'tishini, <code>names_to</code> eski ustun nomlari qaysi yangi ustunga tushishini, <code>values_to</code> esa qiymatlar ustunini belgilaydi."
        },
        {
          "type": "code",
          "title": "pivot-wider.R",
          "code": "qayta <- pivot_wider(uzun, names_from = oy, values_from = sotuv)\ndim(qayta)\nnames(qayta)\nsum(uzun$sotuv)",
          "output": "[1] 2 3\n[1] \"mahsulot\" \"yanvar\"   \"fevral\"  \n[1] 39"
        },
        {
          "type": "table",
          "head": [
            "Vazifa",
            "Funksiya",
            "Muhim argumentlar"
          ],
          "rows": [
            [
              "Kengdan uzunga",
              "<code>pivot_longer()</code>",
              "<code>cols</code>, <code>names_to</code>, <code>values_to</code>"
            ],
            [
              "Uzundan kengga",
              "<code>pivot_wider()</code>",
              "<code>names_from</code>, <code>values_from</code>"
            ],
            [
              "Yetishmayotgan qiymat",
              "—",
              "<code>values_fill</code> bilan to'ldirish"
            ],
            [
              "Nomlarni ajratish",
              "<code>names_sep</code>",
              "Ustun nomidagi ajratgich"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qaysi format kerak?",
          "html": "Grafikda oy bo'yicha chiziq chizish uchun uzun format qulay: <code>aes(x = oy, y = sotuv, group = mahsulot)</code>. Hisobot jadvalida esa keng format o'qishga yengil. Formatni ma'lumotning «haqiqiy» tuzilishi emas, keyingi amal talabiga qarab tanlang."
        }
      ],
      "quiz": [
        {
          "q": "pivot_longer() dan keyin qatorlar soni odatda qanday o'zgaradi?",
          "options": [
            "Kamayadi",
            "Ko'payadi",
            "O'zgarmaydi",
            "Har doim ikkiga bo'linadi"
          ],
          "answer": 1,
          "explain": "Bir nechta ustun o'rniga har bir qiymat alohida qator bo'ladi, shuning uchun qatorlar ko'payadi."
        },
        {
          "q": "Qaysi funksiya uzun formatni keng formatga o'tkazadi?",
          "options": [
            "pivot_longer()",
            "separate()",
            "unite()",
            "pivot_wider()"
          ],
          "answer": 3,
          "explain": "pivot_wider() names_from ustunidagi kategoriyalarni yangi ustunlarga aylantiradi."
        },
        {
          "q": "pivot_longer() dagi values_to argumenti nimani belgilaydi?",
          "options": [
            "Qiymatlar joylashadigan yangi ustun nomini",
            "Guruhlash ustunini",
            "Fayl nomini",
            "NA ni qanday to'ldirishni"
          ],
          "answer": 0,
          "explain": "values_to yangi «qiymat» ustunining nomini beradi; names_to esa o'zgaruvchi nomlari ustunini."
        }
      ]
    },
    {
      "id": 24,
      "title": "tidyr: separate, unite, fill va drop_na",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Ba'zan bitta ustunda ikki ma'lumot aralashib yotadi: «Toshkent-2024» kabi shahar va yil. Ba'zan esa aksincha, ikki ustunni birlashtirish kerak. tidyr'ning <code>separate()</code>, <code>unite()</code>, <code>fill()</code> va <code>drop_na()</code> funksiyalari shu ishlarni bitta qatorda bajaradi."
        },
        {
          "type": "code",
          "title": "separate.R",
          "code": "library(tidyr)\n\ndf <- data.frame(id = 1:3,\n                 info = c(\"Toshkent-2024\", \"Buxoro-2023\", \"Nukus-2024\"))\n\najrat <- separate(df, info, into = c(\"shahar\", \"yil\"), sep = \"-\")\najrat$shahar\najrat$yil\nclass(ajrat$yil)",
          "output": "[1] \"Toshkent\" \"Buxoro\"   \"Nukus\"   \n[1] \"2024\" \"2023\" \"2024\"\n[1] \"character\""
        },
        {
          "type": "note",
          "variant": "info",
          "title": "yil hali son emas",
          "html": "<code>separate()</code> natijadagi yangi ustunlarni matn sifatida qoldiradi. Yil bilan hisob-kitob qilish uchun <code>mutate(yil = as.integer(yil))</code> yoki <code>separate(..., convert = TRUE)</code> kerak. Turini tekshirishni unutmang."
        },
        {
          "type": "code",
          "title": "unite-fill.R",
          "code": "birlash <- unite(ajrat, joy, shahar, yil, sep = \"/\")\nbirlash$joy\n\nfill(data.frame(guruh = c(\"A\", NA, NA, \"B\", NA), qiymat = 1:5), guruh)$guruh\nnrow(drop_na(data.frame(a = c(1, NA, 3), b = c(\"x\", \"y\", NA))))",
          "output": "[1] \"Toshkent/2024\" \"Buxoro/2023\"   \"Nukus/2024\"   \n[1] \"A\" \"A\" \"A\" \"B\" \"B\"\n[1] 1"
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Vazifasi",
            "Muhim argument"
          ],
          "rows": [
            [
              "<code>separate()</code>",
              "Bitta ustunni bir nechtaga bo'ladi",
              "<code>sep</code>, <code>into</code>"
            ],
            [
              "<code>unite()</code>",
              "Bir nechta ustunni birlashtiradi",
              "<code>sep</code>"
            ],
            [
              "<code>fill()</code>",
              "NA ni oldingi yoki keyingi qiymat bilan to'ldiradi",
              "<code>.direction</code>"
            ],
            [
              "<code>drop_na()</code>",
              "NA bor qatorlarni olib tashlaydi",
              "ustunlar tanlovi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "fill har doim mos kelmaydi",
          "html": "Vaqt qatorida bo'sh katak «oldingi qiymat o'zgarmagan» degani bo'lishi mumkin — unda <code>fill(.direction = \"down\")</code> to'g'ri. Lekin so'rovnomada bo'sh javob «javob berilmagan» bo'lsa, uni to'ldirish ma'lumotni buzadi. Avval NA ning ma'nosini aniqlang."
        }
      ],
      "quiz": [
        {
          "q": "separate() dagi into argumenti nimani belgilaydi?",
          "options": [
            "Ajratgich belgisini",
            "Qatorlar sonini",
            "Yangi ustun nomlarini",
            "NA siyosatini"
          ],
          "answer": 2,
          "explain": "into — bo'lingan qismlar joylashadigan yangi ustunlar nomlari vektori."
        },
        {
          "q": "unite() qanday amal bajaradi?",
          "options": [
            "Bir nechta ustunni bitta ustunga birlashtiradi",
            "Qatorlarni filtrlaydi",
            "Faylni o'qiydi",
            "Faktor yaratadi"
          ],
          "answer": 0,
          "explain": "unite() tanlangan ustunlarni sep bilan bog'lab, yangi bitta ustun yasaydi."
        },
        {
          "q": "fill() standart holatda qaysi yo'nalishda to'ldiradi?",
          "options": [
            "Yuqoriga",
            "Ikki tomonga",
            "Tasodifiy",
            "Pastga"
          ],
          "answer": 3,
          "explain": "Standart .direction = \"down\": NA yuqoridagi eng yaqin qiymat bilan to'ldiriladi."
        }
      ]
    },
    {
      "id": 25,
      "title": "dplyr: mutate bilan yangi ustunlar yaratish",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Tahlilning ko'p qismi mavjud ustunlardan yangi ko'rsatkich yasashdan iborat: narx × soni = tushum, ball bo'yicha daraja, sanadan oy. dplyr'da <code>mutate()</code> yangi ustun qo'shadi yoki mavjudini o'zgartiradi, <code>transmute()</code> esa faqat kerakli ustunlarni qoldiradi."
        },
        {
          "type": "code",
          "title": "mutate.R",
          "code": "library(dplyr)\n\nsotuv <- data.frame(\n  mahsulot = c(\"A\", \"B\", \"C\"),\n  narx = c(1200, 350, 850),\n  soni = c(2, 5, 3)\n)\n\nsotuv <- sotuv |> mutate(tushum = narx * soni)\nsotuv$tushum",
          "output": "[1] 2400 1750 2550"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "mutate qatorlarni o'zgartirmaydi",
          "html": "<code>mutate()</code> har bir qator ichida ishlaydi va qatorlar sonini saqlaydi. Yangi ustun uzunligi 1 bo'lsa, u barcha qatorlarga takrorlanadi: <code>mutate(valyuta = \"so'm\")</code>. Guruh bo'yicha hisoblash uchun <code>group_by()</code> bilan birga ishlatiladi."
        },
        {
          "type": "code",
          "title": "transmute-if-else.R",
          "code": "sotuv |>\n  transmute(mahsulot,\n            tushum_mln = tushum / 1000,\n            hajm = if_else(soni >= 3, \"katta\", \"kichik\")) |>\n  pull(hajm)",
          "output": "[1] \"kichik\" \"katta\"  \"katta\" "
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Natijadagi ustunlar"
          ],
          "rows": [
            [
              "<code>mutate()</code>",
              "Barcha eski ustunlar + yangilar"
            ],
            [
              "<code>transmute()</code>",
              "Faqat ko'rsatilgan ustunlar"
            ],
            [
              "<code>select()</code>",
              "Faqat tanlangan eski ustunlar"
            ],
            [
              "<code>rename()</code>",
              "Barcha ustunlar, ba'zilari yangi nom bilan"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Hisobni kichik qadamda tekshiring",
          "html": "Yangi ustun yaratgach, <code>summary()</code> yoki <code>range()</code> bilan natijani tekshiring. Masalan, tushum manfiy chiqsa, narx yoki soni ustunida xatolik bo'lishi mumkin. <code>mutate()</code> ning o'zi mantiqiy xatoni sezmaydi."
        }
      ],
      "quiz": [
        {
          "q": "mutate() qanday ishlaydi?",
          "options": [
            "Faqat tanlangan ustunlarni qoldiradi",
            "Qatorlarni guruhlaydi",
            "Yangi ustun qo'shadi yoki mavjudini o'zgartiradi",
            "Faylni eksport qiladi"
          ],
          "answer": 2,
          "explain": "mutate() barcha qator va ustunlarni saqlab, yangi hisoblangan ustun qo'shadi."
        },
        {
          "q": "transmute() ning mutate() dan asosiy farqi nima?",
          "options": [
            "Faqat ko'rsatilgan ustunlarni qoldiradi",
            "Qatorlarni filtrlaydi",
            "Faqat sonlar bilan ishlaydi",
            "Guruhlar yaratadi"
          ],
          "answer": 0,
          "explain": "transmute() yangi ustunlarni hisoblaydi, lekin natijada faqat ko'rsatilgan ustunlar qoladi."
        },
        {
          "q": "if_else() da shart NA bo'lsa, natija qanday bo'ladi?",
          "options": [
            "Har doim FALSE",
            "NA",
            "Xatolik",
            "TRUE"
          ],
          "answer": 1,
          "explain": "if_else() NA shartni bila olmaydi va natijada NA qaytaradi; kerak bo'lsa alohida ishlov bering."
        }
      ]
    },
    {
      "id": 26,
      "title": "Guruhlab jamlash: group_by, summarise va across",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "«Har bir shahar bo'yicha jami tushum», «har bir kategoriya bo'yicha o'rtacha narx» — bular guruhlab jamlash masalalari. dplyr'da <code>group_by()</code> guruhlarni belgilaydi, <code>summarise()</code> esa har bir guruh uchun bitta qator yasaydi."
        },
        {
          "type": "code",
          "title": "group-summarise.R",
          "code": "library(dplyr)\n\nsotuv <- data.frame(\n  kategoriya = c(\"E\", \"K\", \"E\", \"U\", \"K\", \"E\"),\n  tushum = c(2400, 1750, 2550, 1800, 1680, 1500)\n)\n\nsotuv |>\n  group_by(kategoriya) |>\n  summarise(soni = n(), jami = sum(tushum), ortacha = mean(tushum))",
          "output": "# A tibble: 3 × 4\n  kategoriya  soni  jami ortacha\n  <chr>      <int> <dbl>   <dbl>\n1 E              3  6450    2150\n2 K              2  3430    1715\n3 U              1  1800    1800"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Guruhlash vaqtincha",
          "html": "<code>summarise()</code> dan keyin bitta daraja guruhlash olib tashlanadi, lekin qolganlari saqlanadi. Keyingi hisoblar guruhsiz bo'lishi uchun <code>ungroup()</code> yoki <code>summarise(..., .groups = \"drop\")</code> ishlatiladi. Guruhlar ko'rinmas bo'lsa ham, ular hisob-kitobga ta'sir qiladi."
        },
        {
          "type": "code",
          "title": "across.R",
          "code": "sotuv |>\n  group_by(kategoriya) |>\n  summarise(across(tushum, list(jami = sum, ortacha = mean)),\n            .groups = \"drop\") |>\n  names()",
          "output": "[1] \"kategoriya\"    \"tushum_jami\"   \"tushum_ortacha\""
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>n()</code>",
              "Guruhdagi qatorlar soni"
            ],
            [
              "<code>sum()</code>",
              "Guruh bo'yicha yig'indi"
            ],
            [
              "<code>mean()</code>",
              "Guruh bo'yicha o'rtacha"
            ],
            [
              "<code>n_distinct()</code>",
              "Takrorlanmaydigan qiymatlar soni"
            ],
            [
              "<code>across()</code>",
              "Bir nechta ustunga bir xil funksiyalar"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "NA o'rtachani buzadi",
          "html": "Guruh ichida NA bo'lsa, <code>sum()</code> va <code>mean()</code> NA qaytaradi. <code>na.rm = TRUE</code> qo'shing yoki jamlashdan oldin NA bilan ishlash strategiyasini tanlang. <code>n()</code> esa NA bo'lgan qatorlarni ham sanaydi — bu ba'zan kutilmagan natija beradi."
        }
      ],
      "quiz": [
        {
          "q": "group_by() va summarise() birgalikda qanday natija beradi?",
          "options": [
            "Har bir qator uchun bitta ustun",
            "Butun jadvalni o'zgarmas saqlaydi",
            "Faqat birinchi guruhni",
            "Har bir guruh uchun bitta qator"
          ],
          "answer": 3,
          "explain": "summarise() har bir guruhni bitta jamlangan qatorga aylantiradi."
        },
        {
          "q": "dplyr ichida n() funksiyasi nimani qaytaradi?",
          "options": [
            "Joriy guruhdagi qatorlar sonini",
            "Ustunlar sonini",
            "NA lar sonini",
            "Guruhlar sonini"
          ],
          "answer": 0,
          "explain": "n() faqat guruhlangan kontekstda ishlaydi va joriy guruh hajmini beradi."
        },
        {
          "q": "across() ning vazifasi nima?",
          "options": [
            "Qatorlarni filtrlaydi",
            "Ustunlarni birlashtiradi",
            "Bir nechta ustunga bir xil funksiyani qo'llaydi",
            "Faylga yozadi"
          ],
          "answer": 2,
          "explain": "across() summarise() yoki mutate() ichida bir nechta ustunni bir yo'la qayta ishlaydi."
        }
      ]
    },
    {
      "id": 27,
      "title": "Joinlar: ikki jadvalni kalit bo'yicha birlashtirish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Ma'lumot ko'pincha bir nechta jadvalga bo'lingan: mijozlar alohida, buyurtmalar alohida. Ularni umumiy <b>kalit</b> (masalan, <code>id</code>) bo'yicha birlashtirish uchun joinlar ishlatiladi. dplyr'da <code>left_join()</code>, <code>inner_join()</code>, <code>anti_join()</code> va boshqa variantlar bor."
        },
        {
          "type": "code",
          "title": "left-inner.R",
          "code": "library(dplyr)\n\nmijoz <- data.frame(id = c(1, 2, 3, 4),\n                    ism = c(\"Aziza\", \"Bek\", \"Dilnoza\", \"Jasur\"))\nbuyurtma <- data.frame(id = c(1, 2, 2, 5),\n                       summa = c(120, 80, 60, 200))\n\nleft_join(buyurtma, mijoz, by = \"id\")$ism\nnrow(inner_join(buyurtma, mijoz, by = \"id\"))",
          "output": "[1] \"Aziza\" \"Bek\"   \"Bek\"   NA     \n[1] 3"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "left_join qaysi tomonni saqlaydi?",
          "html": "<code>left_join(x, y)</code> chap jadval <code>x</code> ning <b>barcha</b> qatorlarini saqlaydi. O'ng jadvalda mos kalit topilmasa, yangi ustunlar NA bilan to'ladi. <code>inner_join()</code> esa faqat ikki tomonda ham mos keladigan qatorlarni qoldiradi."
        },
        {
          "type": "code",
          "title": "anti-semi.R",
          "code": "anti_join(mijoz, buyurtma, by = \"id\")$ism\nsemi_join(mijoz, buyurtma, by = \"id\")$ism",
          "output": "[1] \"Dilnoza\" \"Jasur\"  \n[1] \"Aziza\" \"Bek\"  "
        },
        {
          "type": "table",
          "head": [
            "Join",
            "Qaysi qatorlar qoladi"
          ],
          "rows": [
            [
              "<code>inner_join()</code>",
              "Ikki tomonda mos keladiganlar"
            ],
            [
              "<code>left_join()</code>",
              "Chap jadvalning barchasi"
            ],
            [
              "<code>right_join()</code>",
              "O'ng jadvalning barchasi"
            ],
            [
              "<code>full_join()</code>",
              "Ikkala jadvalning barchasi"
            ],
            [
              "<code>anti_join()</code>",
              "Chapda bor, o'ngda yo'q"
            ],
            [
              "<code>semi_join()</code>",
              "Chapda bor va o'ngda mos kelgan"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Kalit takrorlanishi qatorlarni ko'paytiradi",
          "html": "Agar o'ng jadvalda bitta kalit bir necha marta uchrasa, join natijasida ham bir nechta qator hosil bo'ladi. Masalan, mijoz 2 ning ikkita buyurtmasi bor — natijada 2 qator chiqadi. Joindan oldin <code>count(id)</code> bilan kalit unikaligini tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "left_join(x, y) qaysi qatorlarni saqlaydi?",
          "options": [
            "Faqat y jadvalnikini",
            "Faqat mos keladiganlarni",
            "x jadvalning barcha qatorlarini",
            "Hech qaysisini"
          ],
          "answer": 2,
          "explain": "left_join chap jadvalning barcha qatorlarini saqlaydi, mos kelmagan joyda NA qo'yadi."
        },
        {
          "q": "anti_join(mijoz, buyurtma, by = \"id\") nimani qaytaradi?",
          "options": [
            "Buyurtmasi yo'q mijozlarni",
            "Barcha buyurtmalarni",
            "Ikkala jadvalni",
            "Faqat mos kelgan mijozlarni"
          ],
          "answer": 0,
          "explain": "anti_join chap jadvalda bor, lekin o'ng jadvalda uchramaydigan kalitlarni qoldiradi."
        },
        {
          "q": "O'ng jadvalda kalit takrorlansa, join natijasiga nima bo'ladi?",
          "options": [
            "Xatolik beradi",
            "Kalit o'chiriladi",
            "Qatorlar kamayadi",
            "Qatorlar ko'payadi"
          ],
          "answer": 3,
          "explain": "Har bir takroriy kalit uchun alohida qator hosil bo'ladi, shuning uchun natija kattalashadi."
        }
      ]
    },
    {
      "id": 28,
      "title": "Oynali funksiyalar: lag, cumsum va reyting",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Ba'zi hisoblar qatorning o'ziga emas, <b>qo'shni qatorlarga</b> bog'liq: o'tgan oyga nisbatan o'sish, yig'ilib boruvchi jami, eng katta qiymatlar reytingi. dplyr'ning oynali funksiyalari shu ishlarni guruh ichida ham to'g'ri bajaradi."
        },
        {
          "type": "code",
          "title": "lag-cumsum.R",
          "code": "library(dplyr)\n\nsotuv <- data.frame(\n  oy = c(\"yanvar\", \"fevral\", \"mart\", \"aprel\"),\n  tushum = c(120, 150, 130, 180)\n)\n\nsotuv |>\n  mutate(osish = tushum - lag(tushum),\n         jami = cumsum(tushum))",
          "output": "# A tibble: 4 × 4\n  oy     tushum osish  jami\n  <chr>   <dbl> <dbl> <dbl>\n1 yanvar    120    NA   120\n2 fevral    150    30   270\n3 mart      130   -20   400\n4 aprel     180    50   580"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Birinchi qatorda NA normal",
          "html": "Birinchi oy uchun «oldingi oy» yo'q, shuning uchun <code>lag()</code> NA qaytaradi. Buni xatolik deb o'ylamang. Xohlasangiz <code>coalesce(osish, 0)</code> bilan nolga almashtiring yoki tahlilda birinchi qatorni chetlab o'ting."
        },
        {
          "type": "code",
          "title": "reyting.R",
          "code": "sotuv |>\n  mutate(reyting = dense_rank(desc(tushum)),\n         yarim = ntile(tushum, 2)) |>\n  pull(reyting)",
          "output": "[1] 4 2 3 1"
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>lag(x)</code>",
              "Oldingi qatordagi qiymat"
            ],
            [
              "<code>lead(x)</code>",
              "Keyingi qatordagi qiymat"
            ],
            [
              "<code>cumsum(x)</code>",
              "Yig'ilib boruvchi summa"
            ],
            [
              "<code>row_number()</code>",
              "Qatorning tartib raqami"
            ],
            [
              "<code>dense_rank()</code>",
              "Takrorlarsiz reyting"
            ],
            [
              "<code>ntile(x, n)</code>",
              "Qatorlarni n ta teng guruhga bo'ladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Avval arrange, keyin oyna",
          "html": "<code>lag()</code> va <code>cumsum()</code> qatorlar tartibiga bog'liq. Vaqt qatorida avval <code>arrange(sana)</code> qiling, keyin oynali funksiyani qo'llang. Guruh bo'yicha hisoblash uchun <code>group_by()</code> ni oldin qo'shing — aks holda bir guruhning oxiri ikkinchisining boshiga «yopishib» qoladi."
        }
      ],
      "quiz": [
        {
          "q": "Tartiblangan jadvalda birinchi qator uchun lag(tushum) qanday qiymat beradi?",
          "options": [
            "0",
            "NA",
            "Birinchi qiymatning o'zini",
            "Xatolik"
          ],
          "answer": 1,
          "explain": "Oldingi qator mavjud emas, shuning uchun lag() NA qaytaradi."
        },
        {
          "q": "cumsum(c(10, 20, 30)) natijasi nima?",
          "options": [
            "10 20 30",
            "30 30 30",
            "60",
            "10 30 60"
          ],
          "answer": 3,
          "explain": "cumsum har bir qadamda yig'indini to'plab boradi: 10, 10+20, 10+20+30."
        },
        {
          "q": "Reytingda bir xil qiymatlarga bir xil o'rin berish uchun qaysi funksiya mos?",
          "options": [
            "dense_rank()",
            "lag()",
            "ntile()",
            "cumsum()"
          ],
          "answer": 0,
          "explain": "dense_rank() teng qiymatlarga bir xil reyting beradi va keyingi o'rinni sakrabtmaydi."
        }
      ]
    },
    {
      "id": 29,
      "title": "readr: CSV fayllarni tez va aniq o'qish",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Base R'dagi <code>read.csv()</code> oddiy ishlar uchun yetarli. Katta fayllar va qat'iy tur nazorati kerak bo'lsa, <b>readr</b> paketi qulay: u tezroq o'qiydi, matnlarni avtomatik faktorga aylantirmaydi va muammoli qatorlarni alohida ko'rsatadi."
        },
        {
          "type": "code",
          "title": "read-csv.R",
          "code": "library(readr)\n\nyol <- tempfile(fileext = \".csv\")\nwriteLines(c(\"ism,ball\", \"Aziza,92\", \"Bek,78\", \"Dilnoza,88\"), yol)\n\ndf <- read_csv(yol, show_col_types = FALSE)\nnrow(df)\nnames(df)\nclass(df$ism)\nis.data.frame(df)",
          "output": "[1] 3\n[1] \"ism\"  \"ball\"\n[1] \"character\"\n[1] TRUE"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "show_col_types nima uchun?",
          "html": "readr odatda har bir ustun turini konsolga xabar qiladi. Skript natijasini toza saqlash uchun <code>show_col_types = FALSE</code> qo'shiladi. Tur muhim bo'lsa, uni <code>col_types = cols(ball = col_double())</code> bilan qat'iy belgilash mumkin."
        },
        {
          "type": "code",
          "title": "tekshirish.R",
          "code": "df$ball\nsum(df$ball)\nmean(df$ball)\nnrow(problems(df))\nncol(df)",
          "output": "[1] 92 78 88\n[1] 258\n[1] 86\n[1] 0\n[1] 2"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Afzalligi",
            "Kamchiligi"
          ],
          "rows": [
            [
              "<code>read.csv()</code>",
              "Qo'shimcha paket kerak emas",
              "Katta faylda sekinroq"
            ],
            [
              "<code>read_csv()</code>",
              "Tez, tur xabarlari aniq",
              "readr o'rnatilishi kerak"
            ],
            [
              "<code>read_excel()</code>",
              "XLSX varaqlarini o'qiydi",
              "readxl paketi kerak"
            ],
            [
              "<code>readRDS()</code>",
              "R obyektini aynan tiklaydi",
              "Faqat R uchun"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Importdan keyin darhol tekshiring",
          "html": "<code>nrow()</code>, <code>names()</code> va <code>sapply(df, class)</code> bilan fayl kutilganidek o'qilganini tasdiqlang. <code>problems(df)</code> bo'sh bo'lsa, qatorlarni tahlil qilishda xatolik yo'q. Sana ustuni matn bo'lib qolsa, <code>col_date()</code> yoki lubridate bilan alohida ishlang."
        }
      ],
      "quiz": [
        {
          "q": "read_csv() matn ustunlarini standart holatda faktorga aylantiradimi?",
          "options": [
            "Yo'q, character qoldiradi",
            "Ha, har doim",
            "Faqat 10 tadan ko'p qiymatda",
            "Faqat sana ustunlarida"
          ],
          "answer": 0,
          "explain": "readr matnlarni character sifatida qoldiradi; faktor kerak bo'lsa, ataylab aylantiriladi."
        },
        {
          "q": "Excel .xlsx faylini o'qish uchun qaysi paket odatda ishlatiladi?",
          "options": [
            "stringr",
            "readxl",
            "forcats",
            "lubridate"
          ],
          "answer": 1,
          "explain": "readxl paketidagi read_excel() XLSX va XLS fayllarini o'qiydi."
        },
        {
          "q": "show_col_types = FALSE nimani o'chiradi?",
          "options": [
            "Faylning birinchi qatorini",
            "NA qiymatlarni",
            "Ustun turlari haqidagi xabarni",
            "Faylni saqlashni"
          ],
          "answer": 2,
          "explain": "Bu parametr readr ning ustun spetsifikatsiyasi haqidagi konsol xabarini bostiradi."
        }
      ]
    },
    {
      "id": 30,
      "title": "lubridate: sanalarni o'qish va qismlarga ajratish",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Sana va vaqt bilan ishlash oson ko'rinadi, lekin formatlar chalkash: 03/04/2024 Qo'shma Shtatlarda mart, O'zbekistonda aprel bo'lishi mumkin. <b>lubridate</b> sanani yil, oy va kun tartibini aniq ko'rsatuvchi funksiyalar bilan o'qiydi."
        },
        {
          "type": "code",
          "title": "sana.R",
          "code": "library(lubridate)\n\nd <- ymd(\"2024-03-15\")\nclass(d)\nyear(d)\nmonth(d)\nday(d)\nwday(d)\nyday(d)\nd + days(10)",
          "output": "[1] \"Date\"\n[1] 2024\n[1] 3\n[1] 15\n[1] 6\n[1] 75\n[1] \"2024-03-25\""
        },
        {
          "type": "note",
          "variant": "info",
          "title": "wday va yday nimani beradi?",
          "html": "<code>wday()</code> hafta kunini son sifatida qaytaradi: yakshanba — 1, dushanba — 2, ... shanba — 7. <code>yday()</code> esa yil boshidan boshlab kun raqamini beradi. 2024 kabisa yili bo'lgani uchun 15-mart yilning 75-kuni."
        },
        {
          "type": "code",
          "title": "vaqt.R",
          "code": "vaqt <- ymd_hms(\"2024-03-15 14:30:00\")\nhour(vaqt)\nminute(vaqt)\nleap_year(2024)\nunname(days_in_month(ymd(\"2024-02-01\")))",
          "output": "[1] 14\n[1] 30\n[1] TRUE\n[1] 29"
        },
        {
          "type": "table",
          "head": [
            "Funksiya",
            "Vazifasi",
            "Misol natijasi"
          ],
          "rows": [
            [
              "<code>ymd()</code>",
              "Yil-oy-kun tartibida o'qiydi",
              "<code>2024-03-15</code>"
            ],
            [
              "<code>dmy()</code>",
              "Kun-oy-yil tartibida o'qiydi",
              "<code>15/03/2024</code>"
            ],
            [
              "<code>mdy()</code>",
              "Oy-kun-yil tartibida o'qiydi",
              "<code>03/15/2024</code>"
            ],
            [
              "<code>ymd_hms()</code>",
              "Sana va vaqtni o'qiydi",
              "<code>2024-03-15 14:30:00</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Formatni taxmin qilmang",
          "html": "Fayldagi sana «05/03/2024» bo'lsa, u 5-martmi yoki 3-maymi — kontekstga bog'liq. Imkon bo'lsa, ISO formatini (<code>YYYY-MM-DD</code>) ishlating yoki hujjatda tartibni yozib qo'ying. <code>ymd()</code> noto'g'ri formatda jimgina NA qaytarishi mumkin, shuning uchun <code>sum(is.na(...))</code> ni tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "ymd(\"2024-03-15\") qaysi tartibda o'qiydi?",
          "options": [
            "Kun-oy-yil",
            "Yil-oy-kun",
            "Oy-kun-yil",
            "Soat-kun-oy"
          ],
          "answer": 1,
          "explain": "ymd y (year), m (month), d (day) tartibini bildiradi."
        },
        {
          "q": "month(ymd(\"2024-07-09\")) qanday qiymat qaytaradi?",
          "options": [
            "\"iyul\"",
            "9",
            "2024",
            "7"
          ],
          "answer": 3,
          "explain": "label berilmasa month() oy raqamini qaytaradi: iyul — 7."
        },
        {
          "q": "leap_year(2024) natijasi nima?",
          "options": [
            "TRUE",
            "FALSE",
            "29",
            "NA"
          ],
          "answer": 0,
          "explain": "2024 to'rtga bo'linadi va 100 ga karrali emas, shuning uchun kabisa yili."
        }
      ]
    },
    {
      "id": 31,
      "title": "lubridate: oraliqlar, davrlar va guruhlash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Ikki sana orasidagi farqni hisoblash, oylar boshiga yaxlitlash yoki «necha oy o'tdi?» degan savolga javob berish uchun lubridate'ning interval, period va duration tushunchalari kerak. Ular o'xshash ko'rinadi, lekin ma'nosi farq qiladi."
        },
        {
          "type": "code",
          "title": "interval.R",
          "code": "library(lubridate)\n\nboshlanish <- ymd(\"2024-01-01\")\ntugash <- ymd(\"2024-03-01\")\noraliq <- boshlanish %--% tugash\n\noraliq %/% days(1)\nas.numeric(difftime(tugash, boshlanish, units = \"days\"))",
          "output": "[1] 60\n[1] 60"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Interval, period va duration",
          "html": "<b>Interval</b> — aniq ikki sana orasidagi oraliq (<code>%--%</code>). <b>Duration</b> — soniyalarda o'lchanadigan qat'iy davomiylik. <b>Period</b> — «bir oy», «bir yil» kabi inson kalendari bo'yicha davr; u kabisa yili va oy uzunligini hisobga oladi."
        },
        {
          "type": "code",
          "title": "yaxlitlash.R",
          "code": "floor_date(ymd(\"2024-03-15\"), \"month\")\nceiling_date(ymd(\"2024-03-15\"), \"month\")\nround(oraliq / months(1))\nyear(floor_date(ymd(\"2024-12-31\"), \"year\"))",
          "output": "[1] \"2024-03-01\"\n[1] \"2024-04-01\"\n[1] 2\n[1] 2024"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Ma'nosi",
            "Misol"
          ],
          "rows": [
            [
              "<code>%--%</code>",
              "Interval yaratadi",
              "<code>a %--% b</code>"
            ],
            [
              "<code>%/% days(1)</code>",
              "Intervalni kunlarga bo'ladi",
              "60"
            ],
            [
              "<code>floor_date()</code>",
              "Davr boshiga yaxlitlaydi",
              "<code>2024-03-01</code>"
            ],
            [
              "<code>ceiling_date()</code>",
              "Keyingi davr boshiga suradi",
              "<code>2024-04-01</code>"
            ],
            [
              "<code>difftime()</code>",
              "Ikki sana farqini beradi",
              "60 days"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Oylar teng emas",
          "html": "«Bir oy» har doim 30 kun emas. 31-yanvardan 1-martgacha bo'lgan masofa kalendar bo'yicha bir oy, lekin 29 yoki 30 kunga teng bo'lishi mumkin. Shuning uchun biznes hisobotida <code>month()</code> bo'yicha guruhlash ko'pincha <code>floor_date(..., \"month\")</code> bilan boshlanadi."
        }
      ],
      "quiz": [
        {
          "q": "a %--% b yozuvi nimani yaratadi?",
          "options": [
            "Ikki sanani qo'shadi",
            "Vaqt zonasini o'zgartiradi",
            "Interval obyektini",
            "Tasodifiy sana"
          ],
          "answer": 2,
          "explain": "%--% operatori ikki sana orasidagi intervalni yasaydi."
        },
        {
          "q": "floor_date(sana, \"month\") nima qiladi?",
          "options": [
            "Oy boshiga yaxlitlaydi",
            "Oy oxiriga suradi",
            "Oyni o'chiradi",
            "Kunni qaytaradi"
          ],
          "answer": 0,
          "explain": "floor_date berilgan davrning boshiga (oy bo'lsa, 1-sanasiga) tushiradi."
        },
        {
          "q": "difftime() dagi units argumenti nima uchun kerak?",
          "options": [
            "Vaqt zonasini tanlash",
            "Sanani formatlash",
            "Intervalni saqlash",
            "Farqni qaysi birlikda o'lchashni belgilash"
          ],
          "answer": 3,
          "explain": "units = \"days\" kabi qiymat natijaning o'lchov birligini belgilaydi."
        }
      ]
    },
    {
      "id": 32,
      "title": "ggplot2: nuqtali grafik va estetikalar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "ggplot2'da grafik qatlamlardan yig'iladi: <code>ggplot()</code> ma'lumot va estetik bog'lanishlarni oladi, <code>geom_*()</code> esa shaklni chizadi. Nuqtali grafik ikki sonli o'zgaruvchi orasidagi bog'lanishni ko'rishning eng tez usuli."
        },
        {
          "type": "code",
          "title": "korrelyatsiya.R",
          "code": "library(ggplot2)\n\nsotuv <- data.frame(\n  narx = c(12, 15, 20, 25, 30),\n  soni = c(40, 35, 28, 20, 12)\n)\n\ncor(sotuv$narx, sotuv$soni)",
          "output": "[1] -0.9997017"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "aes nima?",
          "html": "<code>aes(x = narx, y = soni)</code> ustunlarni o'qlarga bog'laydi. <code>color = kategoriya</code> yoki <code>size = soni</code> ham shu yerda yoziladi. Agar rangni bitta qiymat qilib bermoqchi bo'lsangiz, uni <code>aes()</code> tashqarisida yozing: <code>geom_point(color = \"steelblue\")</code>."
        },
        {
          "type": "code",
          "title": "scatter.R",
          "code": "ggplot(sotuv, aes(x = narx, y = soni)) +\n  geom_point(size = 3, color = \"steelblue\") +\n  geom_smooth(method = \"lm\", se = FALSE) +\n  labs(title = \"Narx va sotuv hajmi\",\n       x = \"Narx (ming so'm)\", y = \"Sotilgan dona\")",
          "outputLabel": "Kutilgan grafik",
          "output": "Grafik: besh nuqta pastga qarab tushadi. Narx 12 bo'lganda 40 dona, narx 30 bo'lganda 12 dona sotilgan. Ko'k regressiya chizig'i kuchli manfiy bog'lanishni ko'rsatadi; se = FALSE ishonch oralig'i sohasini o'chiradi.",
          "runnable": false
        },
        {
          "type": "table",
          "head": [
            "Element",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>ggplot(df, aes(...))</code>",
              "Ma'lumot va o'qlarni belgilaydi"
            ],
            [
              "<code>geom_point()</code>",
              "Nuqtalarni chizadi"
            ],
            [
              "<code>geom_smooth()</code>",
              "Trend chizig'ini qo'shadi"
            ],
            [
              "<code>labs()</code>",
              "Sarlavha va o'q nomlarini beradi"
            ],
            [
              "<code>theme_minimal()</code>",
              "Fon va to'rni soddalashtiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "O'lchovni tekshiring",
          "html": "Nuqtalar ustma-ust tushsa, <code>alpha = 0.5</code> qo'shing yoki <code>geom_jitter()</code> ishlating. Juda ko'p nuqta bo'lsa, nuqtali grafik o'rniga zichlik yoki quti grafik ma'lumotni yaxshiroq ko'rsatadi. Har doim o'q nomlarida birlikni yozing."
        }
      ],
      "quiz": [
        {
          "q": "ggplot2'da nuqtali (scatter) grafik uchun qaysi geom ishlatiladi?",
          "options": [
            "geom_col()",
            "geom_point()",
            "geom_line()",
            "geom_boxplot()"
          ],
          "answer": 1,
          "explain": "geom_point() har bir kuzatuvni x-y tekisligida nuqta sifatida chizadi."
        },
        {
          "q": "aes(x = narx, y = soni) nimani bildiradi?",
          "options": [
            "Fayl nomini",
            "Ranglar ro'yxatini",
            "Grafik o'lchamini",
            "Ustunlarni o'qlarga bog'lashni"
          ],
          "answer": 3,
          "explain": "aes() estetik bog'lanishlarni belgilaydi: bu yerda x o'qiga narx, y o'qiga soni."
        },
        {
          "q": "geom_smooth(se = FALSE) dagi se = FALSE nima qiladi?",
          "options": [
            "Ishonch oralig'i sohasini o'chiradi",
            "Chiziqni qalinlashtiradi",
            "Nuqtalarni yashiradi",
            "Sarlavhani o'chiradi"
          ],
          "answer": 0,
          "explain": "se = TRUE standart holatda ishonch oralig'i sohasini chizadi; FALSE uni o'chiradi."
        }
      ]
    },
    {
      "id": 33,
      "title": "ggplot2: histogram, zichlik va quti grafik",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Bitta sonli o'zgaruvchining taqsimotini ko'rish uchun uchta asosiy grafik bor: <b>histogram</b> oraliqlar bo'yicha chastotani, <b>zichlik</b> silliq taqsimotni, <b>quti grafik</b> esa median, kvartillar va chetga chiqqan qiymatlarni ko'rsatadi."
        },
        {
          "type": "code",
          "title": "statistika.R",
          "code": "ballar <- c(65, 70, 72, 75, 78, 80, 82, 85, 88, 92, 95)\n\nmean(ballar)\nmedian(ballar)\nIQR(ballar)\nrange(ballar)",
          "output": "[1] 80.18182\n[1] 80\n[1] 13\n[1] 65 95"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Binwidth nimani o'zgartiradi?",
          "html": "<code>geom_histogram(binwidth = 5)</code> har bir ustun 5 ball oralig'ini qamraydi. Kichik binwidth ko'p tafsilot beradi, lekin shovqin ham ko'payadi. Katta binwidth umumiy shaklni ko'rsatadi, ammo tafsilotni yashiradi. Bir necha qiymatni sinab ko'ring."
        },
        {
          "type": "code",
          "title": "taqsimot.R",
          "code": "library(ggplot2)\n\ndf <- data.frame(ball = ballar)\n\nggplot(df, aes(x = ball)) +\n  geom_histogram(binwidth = 5, fill = \"steelblue\", color = \"white\") +\n  labs(title = \"Ballar taqsimoti\", x = \"Ball\", y = \"Talabalar soni\")",
          "outputLabel": "Kutilgan grafik",
          "output": "Grafik: 65 dan 95 gacha bo'lgan ballar 5 birlik oraliqli ustunlarda ko'rsatilgan. Taqsimotning katta qismi 70-90 oralig'ida, 65 va 95 esa chetdagi yakka ustunlarda ko'rinadi. O'rtacha 80.18 va mediana 80.",
          "runnable": false
        },
        {
          "type": "table",
          "head": [
            "Geom",
            "Nimani ko'rsatadi",
            "Muhim argument"
          ],
          "rows": [
            [
              "<code>geom_histogram()</code>",
              "Chastota taqsimoti",
              "<code>binwidth</code>"
            ],
            [
              "<code>geom_density()</code>",
              "Silliq zichlik egri chizig'i",
              "<code>adjust</code>"
            ],
            [
              "<code>geom_boxplot()</code>",
              "Kvartillar va chetga chiqqanlar",
              "<code>outlier.shape</code>"
            ],
            [
              "<code>geom_violin()</code>",
              "Taqsimot shakli guruhlar bo'yicha",
              "<code>scale</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Guruhlarni solishtiring",
          "html": "Quti grafikni guruh bo'yicha chizish uchun <code>aes(x = guruh, y = ball)</code> yozing. Histogramni guruhlar bo'yicha ustma-ust chizish o'rniga <code>facet_wrap(~ guruh)</code> yoki <code>geom_density(alpha = 0.4)</code> ko'proq ma'lumot beradi."
        }
      ],
      "quiz": [
        {
          "q": "geom_histogram() standart holatda y o'qida nimani ko'rsatadi?",
          "options": [
            "O'rtachani",
            "Har bir oraliqdagi kuzatuvlar sonini",
            "Korrelyatsiyani",
            "Standart chetlanishni"
          ],
          "answer": 1,
          "explain": "Histogram y o'qida oraliqlar bo'yicha chastota (count) ko'rsatiladi."
        },
        {
          "q": "binwidth argumenti nimani boshqaradi?",
          "options": [
            "Grafik fonini",
            "Sarlavha o'lchamini",
            "Har bir ustun qamraydigan oraliq kengligini",
            "Nuqtalar sonini"
          ],
          "answer": 2,
          "explain": "binwidth gistogramma ustunlari qamraydigan qiymat oralig'ini belgilaydi."
        },
        {
          "q": "Quti grafikdagi markaziy chiziq nimani bildiradi?",
          "options": [
            "O'rtachani",
            "Maksimumni",
            "Minimumni",
            "Medianani"
          ],
          "answer": 3,
          "explain": "Boxplot markazidagi qalin chiziq medianani, quti esa Q1 va Q3 ni ko'rsatadi."
        }
      ]
    },
    {
      "id": 34,
      "title": "ggplot2: facet, scale va koordinatalar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Bitta grafikda bir nechta guruhni ustma-ust chizish chalkash bo'lishi mumkin. <b>Facet</b> har bir guruh uchun alohida kichik panel yasaydi. <b>Scale</b> o'qlar va ranglarni boshqaradi, <b>coord</b> esa koordinatalar tizimini o'zgartiradi."
        },
        {
          "type": "code",
          "title": "facet-data.R",
          "code": "library(ggplot2)\nlibrary(dplyr)\n\nsotuv <- data.frame(\n  shahar = rep(c(\"Toshkent\", \"Buxoro\"), each = 3),\n  oy = rep(c(\"yanvar\", \"fevral\", \"mart\"), times = 2),\n  tushum = c(120, 150, 170, 80, 95, 110)\n)\n\nnrow(sotuv)\nas.integer(table(sotuv$shahar))",
          "output": "[1] 6\n[1] 3 3"
        },
        {
          "type": "code",
          "title": "facet.R",
          "code": "ggplot(sotuv, aes(x = oy, y = tushum)) +\n  geom_col(fill = \"steelblue\") +\n  facet_wrap(~ shahar, scales = \"free_y\") +\n  labs(title = \"Oylik tushum\", x = \"Oy\", y = \"Mln so'm\")",
          "outputLabel": "Kutilgan grafik",
          "output": "Grafik: ikki panel — chapda Buxoro, o'ngda Toshkent. Har bir panelda uchta ustun: yanvar, fevral, mart. scales = \"free_y\" tufayli har bir panel o'z tushum oralig'iga moslashadi. Toshkent panelidagi ustunlar 120-170, Buxoro panelidagilar 80-110 oralig'ida.",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "info",
          "title": "facet_wrap va facet_grid",
          "html": "<code>facet_wrap(~ shahar)</code> panellarni oqim bo'ylab joylaydi. Ikki o'zgaruvchi bo'yicha to'r kerak bo'lsa, <code>facet_grid(qator ~ ustun)</code> ishlatiladi. <code>scales = \"free\"</code> barcha o'qlarni bo'shatadi, <code>\"free_x\"</code> yoki <code>\"free_y\"</code> esa faqat bittasini."
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>facet_wrap()</code>",
              "Bitta o'zgaruvchi bo'yicha panellar"
            ],
            [
              "<code>facet_grid()</code>",
              "Ikki o'zgaruvchi bo'yicha to'r"
            ],
            [
              "<code>scale_fill_manual()</code>",
              "Ranglarni qo'lda tanlash"
            ],
            [
              "<code>scale_y_continuous()</code>",
              "O'q chegaralari va belgilari"
            ],
            [
              "<code>coord_flip()</code>",
              "X va Y o'qlarini almashtirish"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Bir xil o'q kerakmi?",
          "html": "Guruhlarni solishtirmoqchi bo'lsangiz, bir xil o'q ishlating — <code>scales = \"fixed\"</code>. Har bir guruhning o'z dinamikasini ko'rsatmoqchi bo'lsangiz, <code>\"free_y\"</code> qulay. Tanlovni grafik izohida yozib qo'ying, aks holda o'quvchi panellarni noto'g'ri taqqoslashi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "facet_wrap(~ shahar) nimani yaratadi?",
          "options": [
            "Bitta katta grafik",
            "Har bir shahar uchun alohida panel",
            "Yangi ustun",
            "Ranglar legenda"
          ],
          "answer": 1,
          "explain": "facet_wrap guruhlar bo'yicha kichik panellar yasaydi va ularni bir joyga joylaydi."
        },
        {
          "q": "scales = \"free_y\" nimani beradi?",
          "options": [
            "Barcha panellarga bitta y o'qini",
            "Faqat x o'qini o'chiradi",
            "Legendani yashiradi",
            "Har bir panelga o'z y o'qini"
          ],
          "answer": 3,
          "explain": "free_y har bir panelning y o'qini o'z ma'lumot oralig'iga moslashtiradi."
        },
        {
          "q": "coord_flip() nima qiladi?",
          "options": [
            "Grafikni aylantiradi va ranglarni o'zgartiradi",
            "Fasetlarni birlashtiradi",
            "X va Y o'qlarini almashtiradi",
            "Sarlavhani pastga suradi"
          ],
          "answer": 2,
          "explain": "coord_flip() gorizontal va vertikal o'qlarni almashtiradi; uzun kategoriya nomlari uchun qulay."
        }
      ]
    },
    {
      "id": 35,
      "title": "ggplot2: mavzular, sarlavhalar va grafikni saqlash",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Grafik nafaqat to'g'ri, balki o'qilishi oson bo'lishi kerak. ggplot2'da <code>labs()</code> sarlavha va o'q nomlarini, <code>theme()</code> esa fon, shrift, legenda kabi nozik sozlamalarni boshqaradi. Tayyor grafikni <code>ggsave()</code> bilan faylga saqlaymiz."
        },
        {
          "type": "code",
          "title": "theme.R",
          "code": "library(ggplot2)\n\ndf <- data.frame(\n  oy = c(\"yanvar\", \"fevral\", \"mart\"),\n  tushum = c(120, 150, 170)\n)\n\np <- ggplot(df, aes(x = oy, y = tushum)) +\n  geom_col(fill = \"steelblue\") +\n  labs(title = \"Birinchi chorak tushumi\",\n       subtitle = \"Mln so'mda\",\n       x = NULL, y = \"Tushum\") +\n  theme_minimal() +\n  theme(axis.text.x = element_text(angle = 45, hjust = 1))\n\np",
          "outputLabel": "Kutilgan grafik",
          "output": "Grafik: uchta ko'k ustun (120, 150, 170). Sarlavha «Birinchi chorak tushumi», ostida «Mln so'mda» izohi. X o'qida oy nomlari 45 daraja burilgan, Y o'qida «Tushum» yozuvi. Fon oq, faqat yengil to'r chiziqlari ko'rinadi.",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "info",
          "title": "theme_minimal nima qiladi?",
          "html": "U kulrang fon va qalin ramkani olib tashlaydi, to'r chiziqlarini yengillashtiradi. Boshqa tayyor mavzular: <code>theme_bw()</code>, <code>theme_classic()</code>, <code>theme_light()</code>. <code>theme()</code> ichida esa faqat kerakli elementni o'zgartirasiz — masalan, <code>legend.position = \"bottom\"</code>."
        },
        {
          "type": "code",
          "title": "ggsave.R",
          "code": "p <- ggplot(df, aes(x = oy, y = tushum)) +\n  geom_col(fill = \"steelblue\") +\n  labs(title = \"Birinchi chorak tushumi\", x = NULL, y = \"Tushum\") +\n  theme_minimal()\n\nyol <- tempfile(fileext = \".png\")\nggsave(yol, p, width = 6, height = 4, dpi = 100)\nfile.exists(yol)",
          "output": "[1] TRUE"
        },
        {
          "type": "table",
          "head": [
            "Sozlama",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>labs(title = ...)</code>",
              "Sarlavha qo'shadi"
            ],
            [
              "<code>theme_minimal()</code>",
              "Sodda fon va to'r"
            ],
            [
              "<code>legend.position = \"bottom\"</code>",
              "Legendani pastga suradi"
            ],
            [
              "<code>ggsave(..., width, height)</code>",
              "Fayl o'lchamini dyuymda beradi"
            ],
            [
              "<code>dpi = 300</code>",
              "Chop etish uchun yuqori sifat"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Grafikni saqlash tartibi",
          "html": "Avval grafikni obyektga saqlang (<code>p &lt;- ggplot(...)</code>), keyin <code>ggsave()</code> da shu obyektni ko'rsating. Fayl kengaytmasi formatni belgilaydi: <code>.png</code>, <code>.pdf</code>, <code>.svg</code>. Ekran uchun 6×4 dyuym va 100-150 dpi, chop etish uchun 300 dpi yetarli."
        }
      ],
      "quiz": [
        {
          "q": "ggsave() da plot argumenti berilmasa, u qaysi grafikni saqlaydi?",
          "options": [
            "Oxirgi chizilgan ggplot grafigini",
            "Birinchi grafikni",
            "Barcha grafiklarni",
            "Hech qaysisini"
          ],
          "answer": 0,
          "explain": "ggsave() standart holatda oxirgi ko'rsatilgan ggplot obyektini saqlaydi, lekin aniq obyekt berish xavfsizroq."
        },
        {
          "q": "dpi parametri nimani bildiradi?",
          "options": [
            "Grafikdagi ranglar sonini",
            "Dyuymdagi nuqtalar sonini (aniqlikni)",
            "Fayl nomini",
            "O'qlar qalinligini"
          ],
          "answer": 1,
          "explain": "dpi — dots per inch; yuqori qiymat chop etish uchun tiniqroq rasm beradi."
        },
        {
          "q": "theme_minimal() qanday o'zgarish qiladi?",
          "options": [
            "Grafikni qora fonda chizadi",
            "Barcha yozuvlarni o'chiradi",
            "Fon va ramkani soddalashtiradi",
            "Ma'lumotni filtrlaydi"
          ],
          "answer": 2,
          "explain": "theme_minimal() ortiqcha fon va ramkani olib tashlab, toza ko'rinish beradi."
        }
      ]
    },
    {
      "id": 36,
      "title": "Tavsifiy statistika: tarqoqlik va nisbatlar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "O'rtacha bitta son bilan taqsimotni to'liq tasvirlamaydi. Ikki guruhning o'rtachasi bir xil bo'lishi mumkin, lekin qiymatlarining tarqoqligi butunlay boshqacha. Shuning uchun mediana, kvartillar, standart chetlanish va nisbatlarni birga ko'rib chiqamiz."
        },
        {
          "type": "code",
          "title": "tarqoqlik.R",
          "code": "x <- c(12, 15, 18, 20, 22, 25, 30)\n\nmean(x)\nmedian(x)\nround(sd(x), 2)\nIQR(x)\nunname(quantile(x, c(0.25, 0.5, 0.75)))",
          "output": "[1] 20.28571\n[1] 20\n[1] 6.07\n[1] 7\n[1] 16.5 20.0 23.5"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "IQR va sd qachon mos?",
          "html": "<code>sd()</code> har bir qiymatning o'rtachadan farqini hisobga oladi va katta chetga chiqishlarga sezgir. <code>IQR()</code> markaziy 50% ni qamraydi va chetga chiqqan qiymatlarga chidamli. Ma'lumotda outlier bo'lsa, median va IQR ko'proq ishonchli."
        },
        {
          "type": "code",
          "title": "nisbatlar.R",
          "code": "daraja <- c(\"past\", \"o'rta\", \"past\", \"yuqori\", \"past\")\n\ntable(daraja)\nround(as.numeric(prop.table(table(daraja))), 2)",
          "output": "daraja\no'rta  past yuqori \n    1     3     1 \n[1] 0.2 0.6 0.2"
        },
        {
          "type": "table",
          "head": [
            "Ko'rsatkich",
            "Funksiya",
            "Nimani bildiradi"
          ],
          "rows": [
            [
              "O'rtacha",
              "<code>mean()</code>",
              "Barcha qiymatlar markazi"
            ],
            [
              "Mediana",
              "<code>median()</code>",
              "Tartiblangan qator o'rtasi"
            ],
            [
              "Standart chetlanish",
              "<code>sd()</code>",
              "O'rtacha tarqoqlik"
            ],
            [
              "Kvartillar orasi",
              "<code>IQR()</code>",
              "Markaziy 50% kengligi"
            ],
            [
              "Nisbat",
              "<code>prop.table()</code>",
              "Har bir kategoriya ulushi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Hisobotda bir nechta ko'rsatkich bering",
          "html": "«O'rtacha ball 80» degan bitta jumla yetarli emas. Yoniga mediana, minimal-maksimal va kuzatuvlar sonini qo'shing. Masalan: «O'rtacha 80.2, mediana 80, oraliq 65-95, n = 11». Bu o'quvchiga taqsimot haqida aniq tasavvur beradi."
        }
      ],
      "quiz": [
        {
          "q": "IQR() nimani o'lchaydi?",
          "options": [
            "Eng katta va eng kichik farqni",
            "O'rtachadan chetlanishni",
            "Medianani",
            "Uchinchi va birinchi kvartil farqini"
          ],
          "answer": 3,
          "explain": "IQR = Q3 - Q1, ya'ni ma'lumotning markaziy 50 foizi qamraydigan oraliq."
        },
        {
          "q": "Median qaysi kvantilga mos keladi?",
          "options": [
            "0.5 kvantilga",
            "0.25 kvantilga",
            "0.75 kvantilga",
            "1.0 kvantilga"
          ],
          "answer": 0,
          "explain": "Mediana taqsimotning o'rtasi, ya'ni 0.5 kvantil."
        },
        {
          "q": "sd() qanday birlikda o'lchanadi?",
          "options": [
            "Har doim foizda",
            "Kvadrat birlikda",
            "Asl ma'lumot bilan bir xil birlikda",
            "Birliksiz"
          ],
          "answer": 2,
          "explain": "Standart chetlanishning birligi kuzatuvlar birligi bilan bir xil; dispersiya esa kvadrat birlikda."
        }
      ]
    },
    {
      "id": 37,
      "title": "Ehtimollik va taqsimotlar: r, d, p, q",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "R tasodifiy sonlar va ehtimollik taqsimotlari uchun to'rt harfli qulay tizimdan foydalanadi: <b>r</b> — tasodifiy son, <b>d</b> — zichlik yoki ehtimollik, <b>p</b> — yig'ilgan ehtimollik, <b>q</b> — kvantil. Bu harflar normal, binomial, Puasson va boshqa taqsimotlarga qo'shiladi."
        },
        {
          "type": "code",
          "title": "tasodifiy.R",
          "code": "set.seed(42)\nx <- rnorm(5)\n\nround(x, 2)\nlength(x)\nmean(x)",
          "output": "[1] 1.37 -0.56  0.36  0.63  0.40\n[1] 5\n[1] 0.4413039"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "set.seed nima uchun kerak?",
          "html": "<code>set.seed(42)</code> tasodifiy sonlar generatorini bir xil holatga qaytaradi, shuning uchun natija takrorlanadi. Usiz har safar boshqa son chiqadi va hisobotni qayta tekshirib bo'lmaydi. Loyihada seed raqamini skript boshida yozib qo'ying."
        },
        {
          "type": "code",
          "title": "binom-normal.R",
          "code": "dbinom(2, size = 5, prob = 0.5)\npbinom(1, size = 5, prob = 0.5)\nround(qnorm(0.975), 3)\npnorm(0)",
          "output": "[1] 0.3125\n[1] 0.1875\n[1] 1.96\n[1] 0.5"
        },
        {
          "type": "table",
          "head": [
            "Prefiks",
            "Ma'nosi",
            "Misol"
          ],
          "rows": [
            [
              "<code>r</code>",
              "Tasodifiy son",
              "<code>rnorm(10)</code>"
            ],
            [
              "<code>d</code>",
              "Aynan shu qiymat ehtimoli/zichligi",
              "<code>dbinom(2, 5, 0.5)</code>"
            ],
            [
              "<code>p</code>",
              "Yig'ilgan ehtimollik",
              "<code>pbinom(1, 5, 0.5)</code>"
            ],
            [
              "<code>q</code>",
              "Kvantil",
              "<code>qnorm(0.975)</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "68-95-99.7 qoidasi",
          "html": "Normal taqsimotda qiymatlarning taxminan 68% o'rtachadan bir standart chetlanish ichida, 95% ikki ichida, 99.7% uch ichida bo'ladi. <code>pnorm(1)</code> ≈ 0.84, <code>pnorm(2)</code> ≈ 0.977 ekanini tekshirib ko'ring. Bu qoida natijalarni tez baholashda yordam beradi."
        }
      ],
      "quiz": [
        {
          "q": "dbinom(2, size = 5, prob = 0.5) nimani qaytaradi?",
          "options": [
            "2 tadan ko'p muvaffaqiyat ehtimolini",
            "O'rtacha muvaffaqiyat sonini",
            "Aynan 2 muvaffaqiyat ehtimolini",
            "Tasodifiy sonni"
          ],
          "answer": 2,
          "explain": "d-prefiks aniq bitta qiymat uchun ehtimollikni beradi: 10/32 = 0.3125."
        },
        {
          "q": "pbinom(1, size = 5, prob = 0.5) nimani hisoblaydi?",
          "options": [
            "P(X ≤ 1) ni",
            "P(X = 1) ni",
            "P(X ≥ 1) ni",
            "P(X = 5) ni"
          ],
          "answer": 0,
          "explain": "p-prefiks yig'ilgan ehtimolni beradi, ya'ni birdan ko'p bo'lmagan muvaffaqiyatlar ehtimolini."
        },
        {
          "q": "qnorm(0.975) natijasi taxminan qanday?",
          "options": [
            "0.975",
            "0.025",
            "1.645",
            "1.96"
          ],
          "answer": 3,
          "explain": "Normal taqsimotning 97.5% kvantili taxminan 1.96 ga teng."
        }
      ]
    },
    {
      "id": 38,
      "title": "Ishonch oralig'i va t-test",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Namuna bo'yicha hisoblangan o'rtacha — aniq haqiqat emas, taxmin. <b>Ishonch oralig'i</b> bu taxminning noaniqligini ko'rsatadi. <b>t-test</b> esa ikki o'rtacha yoki o'rtacha bilan berilgan qiymat orasidagi farq tasodifiy ekanini tekshiradi."
        },
        {
          "type": "code",
          "title": "bitta-namuna.R",
          "code": "x <- c(72, 68, 75, 70, 74, 69, 71, 73)\n\nmean(x)\nround(sd(x), 2)\nunname(round(t.test(x)$conf.int[, 1], 2))\nround(t.test(x, mu = 70)$p.value, 4)",
          "output": "[1] 71.5\n[1] 2.45\n[1] 69.45 73.55\n[1] 0.1269"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "p-qiymatni to'g'ri o'qish",
          "html": "<code>p = 0.1269</code> «farq yo'q» degani emas. Bu shunchaki: agar haqiqiy o'rtacha 70 bo'lsa, bunday yoki undan uzoqroq natija olish ehtimoli taxminan 13%. Kichik p-qiymat (odatda 0.05 dan kichik) dalilning kuchli ekanini bildiradi, farqning amaliy ahamiyatini emas."
        },
        {
          "type": "code",
          "title": "ikki-namuna.R",
          "code": "y <- c(78, 74, 80, 76, 79, 75, 77, 81)\n\nround(unname(t.test(y, x)$estimate), 2)\nround(t.test(y, x)$p.value, 4)",
          "output": "[1] 77.5 71.5\n[1] 0.0002"
        },
        {
          "type": "table",
          "head": [
            "Vazifa",
            "Yozuv"
          ],
          "rows": [
            [
              "O'rtacha uchun interval",
              "<code>t.test(x)$conf.int</code>"
            ],
            [
              "Bitta o'rtachani tekshirish",
              "<code>t.test(x, mu = 70)</code>"
            ],
            [
              "Ikki mustaqil guruh",
              "<code>t.test(y, x)</code>"
            ],
            [
              "Bog'langan o'lchovlar",
              "<code>t.test(y, x, paired = TRUE)</code>"
            ],
            [
              "Dispersiyalar teng",
              "<code>var.equal = TRUE</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Taxminlarni tekshiring",
          "html": "t-test o'rtachalar farqini tekshiradi, lekin taqsimot shakli va chetga chiqqan qiymatlarga sezgir. Guruh hajmi kichik bo'lsa, taqsimotni grafikda ko'ring. Juda qiyshiq ma'lumotda Wilcoxon testi (<code>wilcox.test()</code>) muqobil bo'lishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "95% ishonch oralig'i nimani anglatadi?",
          "options": [
            "Barcha kuzatuvlarning 95% shu oraliqda",
            "Haqiqiy o'rtacha shu oraliqda bo'lishiga 95% ishonch",
            "Namuna o'rtachasi 95% aniq",
            "p-qiymat 0.95 ga teng"
          ],
          "answer": 1,
          "explain": "Interval usuli takrorlansa, taxminan 95% holatda haqiqiy parametrni qamrab oladi."
        },
        {
          "q": "Ikki guruh o'rtachasi uchun p = 0.0002 bo'lsa, qanday xulosa mos?",
          "options": [
            "Guruhlar aynan bir xil",
            "Farq isbotlanmagan",
            "Ma'lumot yaroqsiz",
            "Farq statistik jihatdan kuchli dalilga ega"
          ],
          "answer": 3,
          "explain": "Juda kichik p-qiymat kuzatilgan farqning tasodifiy bo'lish ehtimoli pastligini bildiradi."
        },
        {
          "q": "t.test(x, mu = 70) qanday nol gipotezani tekshiradi?",
          "options": [
            "x ning o'rtachasi 70 ga teng",
            "x ning medianasi 70",
            "x da 70 ta kuzatuv bor",
            "x ning standart chetlanishi 70"
          ],
          "answer": 0,
          "explain": "mu parametri taqqoslanadigan nazariy o'rtachani beradi; nol gipoteza — o'rtacha shu qiymatga teng."
        }
      ]
    },
    {
      "id": 39,
      "title": "Korrelyatsiya va xi-kvadrat testi",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Ikki sonli o'zgaruvchi birga o'zgaradimi? Bu savolga korrelyatsiya javob beradi. Ikki kategoriyali o'zgaruvchi bog'liqmi? Buning uchun xi-kvadrat testi ishlatiladi. Ikkalasi ham «bog'lanish bormi?» degan gipotezani tekshiradi, lekin turli ma'lumot uchun."
        },
        {
          "type": "code",
          "title": "korrelyatsiya.R",
          "code": "soat <- c(1, 2, 3, 4, 5, 6)\nball <- c(52, 58, 65, 68, 76, 82)\n\nround(cor(soat, ball), 3)\nsignif(cor.test(soat, ball)$p.value, 2)",
          "output": "[1] 0.996\n[1] 2.2e-05"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Korrelyatsiya sabab emas",
          "html": "0.996 koeffitsiyent ikki o'zgaruvchi deyarli chiziqli birga o'zgarishini bildiradi. Lekin ko'proq soat o'qish ballni oshiradi degan xulosani faqat korrelyatsiya asosida chiqarib bo'lmaydi: uchinchi omil ham ta'sir qilishi mumkin. Sababiy bog'lanish uchun tajriba dizayni kerak."
        },
        {
          "type": "code",
          "title": "xi-kvadrat.R",
          "code": "tab <- matrix(c(30, 20, 15, 35), nrow = 2, byrow = TRUE,\n              dimnames = list(c(\"Erkak\", \"Ayol\"), c(\"Ha\", \"Yo'q\")))\ntab\nround(chisq.test(tab)$p.value, 4)",
          "output": "       Ha Yo'q\nErkak  30   20\nAyol   15   35\n[1] 0.0026"
        },
        {
          "type": "table",
          "head": [
            "Test",
            "Ma'lumot turi",
            "Nol gipoteza"
          ],
          "rows": [
            [
              "<code>cor.test()</code>",
              "Ikki sonli o'zgaruvchi",
              "Korrelyatsiya 0 ga teng"
            ],
            [
              "<code>chisq.test()</code>",
              "Ikki kategoriya jadvali",
              "O'zgaruvchilar mustaqil"
            ],
            [
              "<code>fisher.test()</code>",
              "Kichik 2×2 jadval",
              "Mustaqillik"
            ],
            [
              "<code>wilcox.test()</code>",
              "Sonli, taqsimot normal emas",
              "Medianalar teng"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Kutilgan chastotalar",
          "html": "Xi-kvadrat testi har bir katakda yetarli kuzatuv bo'lishini talab qiladi. Kutilgan chastota 5 dan kichik bo'lsa, natija ishonchsiz bo'lishi mumkin; kichik jadvalda <code>fisher.test()</code> ishlatiladi. Katta jadvalda kam uchraydigan kategoriyalarni birlashtirish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Korrelyatsiya koeffitsiyenti qaysi oraliqda bo'ladi?",
          "options": [
            "0 dan 1 gacha",
            "-1 dan 0 gacha",
            "-1 dan 1 gacha",
            "0 dan 100 gacha"
          ],
          "answer": 2,
          "explain": "cor() -1 (kuchli manfiy) va +1 (kuchli musbat) oralig'idagi qiymatni qaytaradi."
        },
        {
          "q": "Xi-kvadrat testining nol gipotezasi nima?",
          "options": [
            "O'rtachalar teng",
            "Ikki kategoriyali o'zgaruvchi mustaqil",
            "Korrelyatsiya 1 ga teng",
            "Dispersiyalar teng"
          ],
          "answer": 1,
          "explain": "chisq.test() jadvaldagi ikki o'zgaruvchi orasida bog'lanish yo'qligini tekshiradi."
        },
        {
          "q": "p = 0.0026 bo'lsa, mustaqillik haqidagi nol gipoteza...",
          "options": [
            "qabul qilinadi",
            "isbotlanadi",
            "tekshirilmaydi",
            "rad etiladi"
          ],
          "answer": 3,
          "explain": "p 0.05 dan kichik bo'lsa, mustaqillik gipotezasi rad etiladi va bog'lanish borligi aytiladi."
        }
      ]
    },
    {
      "id": 40,
      "title": "Chiziqli regressiya: lm va bashorat",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Regressiya ikki o'zgaruvchi orasidagi <b>miqdoriy</b> bog'lanishni modelga soladi: bir birlik o'zgarish ikkinchisiga qancha ta'sir qiladi? R'da eng oddiy model <code>lm(y ~ x)</code> bilan yasaladi. Nishab, kesishma va R² — natijaning asosiy qismlari."
        },
        {
          "type": "code",
          "title": "model.R",
          "code": "soat <- c(1, 2, 3, 4, 5)\nball <- c(50, 55, 70, 65, 80)\n\nmodel <- lm(ball ~ soat)\ncoef(model)[[\"(Intercept)\"]]\ncoef(model)[[\"soat\"]]\nround(summary(model)$r.squared, 3)",
          "output": "[1] 43\n[1] 7\n[1] 0.86"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Modelni qanday o'qish kerak?",
          "html": "Model: <code>ball = 43 + 7 × soat</code>. Kesishma 43 — soat 0 bo'lgandagi nazariy ball (har doim ham mantiqiy emas). Nishab 7 — soat bittaga oshganda ball o'rtacha 7 ga oshadi. R² = 0.86 ball o'zgarishining 86% model bilan izohlanishini bildiradi."
        },
        {
          "type": "code",
          "title": "bashorat.R",
          "code": "round(unname(predict(model, newdata = data.frame(soat = 6))), 1)\nround(sd(residuals(model)), 2)\nround(range(residuals(model)), 2)",
          "output": "[1] 85\n[1] 4.47\n[1] -6  6"
        },
        {
          "type": "table",
          "head": [
            "Atama",
            "Ma'nosi"
          ],
          "rows": [
            [
              "Kesishma",
              "x = 0 bo'lgandagi bashorat"
            ],
            [
              "Nishab",
              "x bir birlikka oshganda y o'zgarishi"
            ],
            [
              "Residual",
              "Haqiqiy qiymat minus bashorat"
            ],
            [
              "R²",
              "Model izohlaydigan o'zgarish ulushi"
            ],
            [
              "p-qiymat",
              "Nishab noldan farq qilishining dalili"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Bashorat chegarasidan tashqariga chiqmang",
          "html": "Model 1-5 soat oralig'ida o'rgatilgan. 20 soat uchun bashorat qilish ekstrapolyatsiya bo'ladi va ishonchsiz. Bundan tashqari, R² yuqori bo'lsa ham, modelning qoldiqlarini grafikda tekshiring: naqsh ko'rinsa, chiziqli bog'lanish yetarli emas."
        }
      ],
      "quiz": [
        {
          "q": "lm(ball ~ soat) formulasida qaysi o'zgaruvchi bog'liq (natija) hisoblanadi?",
          "options": [
            "ball",
            "soat",
            "lm",
            "Modelning kesishmasi"
          ],
          "answer": 0,
          "explain": "Tilde chap tomonidagi o'zgaruvchi bog'liq, o'ng tomonidagilar izohlovchi hisoblanadi."
        },
        {
          "q": "R² = 0.86 nimani bildiradi?",
          "options": [
            "Model xatosi 86%",
            "Bashorat 86% hollarda to'g'ri",
            "Natija o'zgarishining 86% model bilan izohlanadi",
            "Nishab 0.86 ga teng"
          ],
          "answer": 2,
          "explain": "R² determinatsiya koeffitsiyenti izohlangan dispersiya ulushini beradi."
        },
        {
          "q": "predict() da newdata nima uchun kerak?",
          "options": [
            "Modelni qayta o'rgatish uchun",
            "Bashorat qilinadigan yangi x qiymatlarini berish uchun",
            "Residuallarni o'chirish uchun",
            "R² ni hisoblash uchun"
          ],
          "answer": 1,
          "explain": "newdata izohlovchi o'zgaruvchilarning yangi qiymatlarini data frame sifatida beradi."
        }
      ]
    },
    {
      "id": 41,
      "title": "Ko'p o'zgaruvchili regressiya va diagnostika",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Bitta izohlovchi o'zgaruvchi ko'pincha yetarli emas: ball faqat o'qish soatiga emas, darsga qatnashishga ham bog'liq bo'lishi mumkin. Ko'p o'zgaruvchili model <code>lm(y ~ x1 + x2)</code> ko'rinishida yoziladi. Har bir koeffitsiyent boshqa omillar o'zgarmaganda ta'sirni ko'rsatadi."
        },
        {
          "type": "code",
          "title": "multiple-lm.R",
          "code": "soat <- c(1, 2, 3, 4, 5, 6, 7, 8)\ndavomat <- c(95, 80, 90, 70, 85, 60, 75, 65)\nball <- c(52, 60, 68, 70, 80, 82, 90, 92)\n\nmodel <- lm(ball ~ soat + davomat)\nround(unname(coef(model)), 2)\nround(summary(model)$adj.r.squared, 3)",
          "output": "[1] 35.75  6.24  0.13\n[1] 0.98"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Koeffitsiyentlarni birga o'qing",
          "html": "Model: <code>ball ≈ 35.75 + 6.24 × soat + 0.13 × davomat</code>. Davomat bir foizga oshsa, soat o'zgarmaganda ball o'rtacha 0.13 ga oshadi. Nishablar bir-biridan mustaqil emas — ular birgalikda modelni tashkil qiladi."
        },
        {
          "type": "code",
          "title": "diagnostika.R",
          "code": "round(summary(model)$sigma, 2)\nround(cor(soat, davomat), 2)\nround(max(abs(residuals(model))), 2)",
          "output": "[1] 2\n[1] -0.74\n[1] 2.78"
        },
        {
          "type": "table",
          "head": [
            "Ko'rsatkich",
            "Nimani tekshiradi"
          ],
          "rows": [
            [
              "<code>adj.r.squared</code>",
              "Qo'shilgan o'zgaruvchilar uchun jarima bilan izohlash"
            ],
            [
              "<code>sigma</code>",
              "Qoldiqlarning standart xatosi"
            ],
            [
              "<code>residuals()</code>",
              "Har bir kuzatuvning modeldan chetlanishi"
            ],
            [
              "<code>cor(x1, x2)</code>",
              "Izohlovchilar orasidagi bog'lanish"
            ],
            [
              "<code>confint()</code>",
              "Koeffitsiyentlar uchun ishonch oralig'i"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Multikollinearlik",
          "html": "Agar izohlovchilar bir-biri bilan kuchli bog'langan bo'lsa (<code>|r| &gt; 0.8</code>), koeffitsiyentlarni izohlash qiyinlashadi. Bu holat <b>multikollinearlik</b> deyiladi. Birini modeldan chiqarib ko'ring yoki mazmunan birlashtiring. Har doim modelni oddiy qoldirishga harakat qiling."
        }
      ],
      "quiz": [
        {
          "q": "Ballni soat va davomat bilan modellashtirishning to'g'ri yozuvi qaysi?",
          "options": [
            "lm(soat + davomat ~ ball)",
            "lm(ball ~ soat; davomat)",
            "lm(ball ~ soat + davomat)",
            "lm(ball, soat, davomat)"
          ],
          "answer": 2,
          "explain": "Bog'liq o'zgaruvchi tildening chap tomonida, izohlovchilar + bilan o'ng tomonda yoziladi."
        },
        {
          "q": "Adjusted R² oddiy R² dan qanday farq qiladi?",
          "options": [
            "Qo'shilgan izohlovchilar uchun jarima qo'llaydi",
            "Har doim kattaroq bo'ladi",
            "Faqat bitta o'zgaruvchida ishlaydi",
            "Korrelyatsiyani o'lchaydi"
          ],
          "answer": 0,
          "explain": "Adjusted R² model murakkabligini hisobga oladi va keraksiz o'zgaruvchilar uchun qiymatni pasaytiradi."
        },
        {
          "q": "Izohlovchilar orasidagi korrelyatsiya -0.74 bo'lsa, bu nimaga ishora?",
          "options": [
            "Model umuman ishlamaydi",
            "Bog'liq o'zgaruvchi kuchli",
            "Kuzatuvlar juda kam",
            "Multikollinearlik xavfi bor"
          ],
          "answer": 3,
          "explain": "Kuchli bog'lanish koeffitsiyentlarning barqarorligini pasaytirishi mumkin, shuning uchun tekshirish kerak."
        }
      ]
    },
    {
      "id": 42,
      "title": "R Markdown: tahlildan tayyor hisobotgacha",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Tahlil natijasini Word yoki PDF'ga qo'lda ko'chirish xatolarga to'la. <b>R Markdown</b> matn, kod va natijalarni bitta faylda saqlaydi. «Knit» tugmasi kodni qayta ishga tushirib, yangilangan hisobotni yaratadi — hisob-kitob va matn hech qachon ajralib qolmaydi."
        },
        {
          "type": "code",
          "title": "hisobot.Rmd",
          "code": "---\ntitle: \"Savdo tahlili\"\nauthor: \"Noldan\"\noutput: html_document\n---\n\n```{r}\nlibrary(dplyr)\nsotuv <- read.csv(\"data/sotuv.csv\")\nsummary(sotuv$tushum)\n```",
          "outputLabel": "Fayl tuzilishi",
          "output": "hisobot.Rmd: eng yuqorida --- bilan o'ralgan YAML sarlavhasi, undan keyin matn va bitta {r} kod chunk. «Knit» bosilganda hisobot.html fayli yaratiladi."
        },
        {
          "type": "note",
          "variant": "info",
          "title": "YAML va chunk",
          "html": "YAML sarlavhasi hujjat nomi, muallif va chiqish formatini belgilaydi. Kod chunk uchta teskari apostrof va <code>{r}</code> bilan boshlanib, yana uchta teskari apostrof bilan yopiladi. Chunk ichidagi kod hisobot yaratilayotganda avtomatik bajariladi; xohlasangiz <code>echo = FALSE</code> bilan kodni yashirib, faqat natijani ko'rsatasiz."
        },
        {
          "type": "code",
          "title": "inline-hisob.R",
          "code": "tushum <- c(8.62, 6.28, 5.24)\n\ncat(sprintf(\"Jami: %.2f mln so'm\\n\", sum(tushum)))\ncat(sprintf(\"Eng katta shahar: %s\\n\",\n            c(\"Toshkent\", \"Samarqand\", \"Buxoro\")[which.max(tushum)]))\nsprintf(\"O'rtacha buyurtma: %.2f mln so'm\", mean(tushum))",
          "output": "Jami: 20.14 mln so'm\nEng katta shahar: Toshkent\n[1] \"O'rtacha buyurtma: 6.71 mln so'm\""
        },
        {
          "type": "table",
          "head": [
            "Element",
            "Vazifasi"
          ],
          "rows": [
            [
              "YAML",
              "Sarlavha, muallif, chiqish formati"
            ],
            [
              "Matn",
              "Oddiy izoh va xulosalar"
            ],
            [
              "<code>{r}</code> chunk",
              "Bajariladigan kod bloki"
            ],
            [
              "<code>echo = FALSE</code>",
              "Kodni yashirish"
            ],
            [
              "<code>r sum(x)</code>",
              "Matn ichida hisob natijasini chiqarish"
            ]
          ]
        },
        {
          "type": "code",
          "title": "jadval.R",
          "code": "sotuv <- data.frame(\n  shahar = c(\"Toshkent\", \"Samarqand\", \"Buxoro\"),\n  tushum = c(8.62, 6.28, 5.24)\n)\n\nknitr::kable(sotuv, format = \"pipe\")",
          "output": "|shahar    | tushum|\n|:---------|------:|\n|Toshkent  |   8.62|\n|Samarqand |   6.28|\n|Buxoro    |   5.24|"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Hisobotni qayta yarating",
          "html": "Hisobotni qo'lda tahrirlab, eski raqamlarni qoldirmang. Ma'lumot yangilanganda <code>rmarkdown::render(\"hisobot.Rmd\")</code> ni qayta ishga tushiring. Natija har doim kod bilan bir xil bo'ladi. Bu — takrorlanuvchan tahlilning amaliy ko'rinishi."
        }
      ],
      "quiz": [
        {
          "q": "R Markdown faylidagi YAML sarlavhasi qanday belgilar orasida joylashadi?",
          "options": [
            "<code>&lt;html&gt;</code> teglari",
            "--- qatorlari",
            "### belgilari",
            "uchta teskari apostrof"
          ],
          "answer": 1,
          "explain": "YAML bloki fayl boshida uchta chiziqcha bilan boshlanib, yana uchta chiziqcha bilan yopiladi."
        },
        {
          "q": "R kod chunk qanday boshlanadi?",
          "options": [
            "<code>#r</code>",
            "<code>&lt;r&gt;</code>",
            "<code>---r</code>",
            "uchta teskari apostrof va <code>{r}</code>"
          ],
          "answer": 3,
          "explain": "R Markdown'da kod chunk uchta teskari apostrof va {r} bilan boshlanadi."
        },
        {
          "q": "«Knit» tugmasi nima qiladi?",
          "options": [
            "Kodni ishga tushirib, hisobot faylini yaratadi",
            "Faqat kodni saqlaydi",
            "Ma'lumotni CSV'ga yozadi",
            "Paketlarni o'rnatadi"
          ],
          "answer": 0,
          "explain": "Knit butun hujjatni qayta hisoblab, tanlangan formatdagi tayyor hisobotni yaratadi."
        }
      ]
    },
    {
      "id": 43,
      "title": "Shiny: birinchi interaktiv ilova",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Shiny R kodini brauzerdagi interaktiv ilovaga aylantiradi. Foydalanuvchi slayder yoki matn maydonini o'zgartiradi, natija darhol yangilanadi. Ilova ikki qismdan iborat: <b>UI</b> — ko'rinish, <b>server</b> — hisob-kitob mantiqi."
        },
        {
          "type": "code",
          "title": "app.R",
          "code": "library(shiny)\n\nui <- fluidPage(\n  titlePanel(\"Tushum kalkulyatori\"),\n  numericInput(\"narx\", \"Narx (ming so'm):\", 450),\n  sliderInput(\"soni\", \"Soni:\", min = 1, max = 10, value = 2),\n  textOutput(\"natija\")\n)\n\nserver <- function(input, output) {\n  output$natija <- renderText({\n    paste(\"Tushum:\", input$narx * input$soni, \"ming so'm\")\n  })\n}\n\nshinyApp(ui, server)",
          "outputLabel": "Ilova natijasi",
          "output": "Brauzerda http://127.0.0.1:port manzilida ilova ochiladi. Narx 450 va soni 2 bo'lganda ekranda «Tushum: 900 ming so'm» ko'rinadi. Slayder 3 ga surilsa, matn darhol «Tushum: 1350 ming so'm» ga o'zgaradi."
        },
        {
          "type": "note",
          "variant": "info",
          "title": "input va output",
          "html": "<code>input$narx</code> foydalanuvchi kiritgan qiymatni, <code>output$natija</code> esa ekranga chiqadigan natijani bildiradi. <code>renderText()</code> matn, <code>renderPlot()</code> grafik, <code>renderTable()</code> jadval uchun ishlatiladi. Har bir output nomi UI'dagi nom bilan bir xil bo'lishi shart."
        },
        {
          "type": "code",
          "title": "hisob-mantiqi.R",
          "code": "narx <- 450\nsoni <- 2\n\npaste(\"Tushum:\", narx * soni, \"ming so'm\")\nround(narx * soni / 1000, 2)",
          "output": "[1] \"Tushum: 900 ming so'm\"\n[1] 0.9"
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Funksiya",
            "Vazifasi"
          ],
          "rows": [
            [
              "UI",
              "<code>fluidPage()</code>",
              "Sahifa tuzilishi"
            ],
            [
              "UI",
              "<code>sliderInput()</code>",
              "Son oralig'ini tanlash"
            ],
            [
              "Server",
              "<code>renderText()</code>",
              "Matnli natija"
            ],
            [
              "Server",
              "<code>reactive()</code>",
              "Qayta hisoblanadigan ifoda"
            ],
            [
              "Ishga tushirish",
              "<code>shinyApp()</code>",
              "UI va server ni bog'laydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "son-format.R",
          "code": "format(1500000, big.mark = \" \")\nformat(450 * 2, big.mark = \" \")",
          "output": "[1] \"1 500 000\"\n[1] \"900\""
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Reactive hisobni takrorlamaydi",
          "html": "Bir nechta output bitta hisobga tayansa, uni <code>reactive({ ... })</code> ichiga oling. Shunda Shiny natijani keshlaydi va faqat kirish qiymati o'zgarganda qayta hisoblaydi. Katta ma'lumot bilan ishlaganda bu ilovani sezilarli tezlashtiradi."
        }
      ],
      "quiz": [
        {
          "q": "Shiny ilovasida fluidPage() qaysi qismga tegishli?",
          "options": [
            "Server hisob-kitobiga",
            "Ma'lumot importiga",
            "Foydalanuvchi interfeysiga",
            "Paket o'rnatishga"
          ],
          "answer": 2,
          "explain": "fluidPage() UI qismida sahifa tuzilishini yaratadi."
        },
        {
          "q": "reactive() ning asosiy foydasi nima?",
          "options": [
            "Hisob natijasini kerak bo'lganda qayta ishlatish va keshlash",
            "Grafikni PNG qilib saqlash",
            "Faylni o'qish",
            "Ilovani internetga chiqarish"
          ],
          "answer": 0,
          "explain": "reactive ifoda kirishlarga bog'liq natijani saqlaydi va ortiqcha qayta hisoblashdan saqlaydi."
        },
        {
          "q": "Serverda matnli natijani ekranga chiqarish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "renderPlot()",
            "renderText()",
            "renderTable()",
            "downloadButton()"
          ],
          "answer": 1,
          "explain": "renderText() matn qaytaradi va textOutput() bilan bog'lanadi."
        }
      ]
    },
    {
      "id": 44,
      "title": "Loyiha ish oqimi: papkalar, renv va versiyalar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Tahlil loyihasi bir necha oy davom etadi va ko'pincha boshqa kompyuterda ochiladi. Uni tartibli saqlash uchun papka tuzilishi, nisbiy yo'llar va paket versiyalarini qayd etish kerak. Bu uchlik <b>takrorlanuvchanlik</b>ning asosidir."
        },
        {
          "type": "code",
          "title": "papkalar.R",
          "code": "ildiz <- tempfile(\"loyiha-\")\ndir.create(file.path(ildiz, \"data\"), recursive = TRUE)\ndir.create(file.path(ildiz, \"scripts\"))\ndir.create(file.path(ildiz, \"output\"))\n\nlength(list.files(ildiz))\nfile.exists(file.path(ildiz, \"data\"))",
          "output": "[1] 3\n[1] TRUE"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Nisbiy yo'l nima uchun muhim?",
          "html": "<code>setwd(\"C:/Users/...\")</code> kabi mutlaq yo'l faqat bitta kompyuterda ishlaydi. Loyiha ildiziga nisbatan <code>data/sotuv.csv</code> yozsangiz, papkani ko'chirganda ham kod ishlaydi. RStudio loyihasi ochilganda ish papkasi avtomatik ildizga o'rnatiladi."
        },
        {
          "type": "code",
          "title": "yollar.R",
          "code": "yol <- file.path(\"loyiha\", \"data\", \"sotuv.csv\")\n\ndirname(yol)\nbasename(yol)\ntools::file_ext(yol)",
          "output": "[1] \"loyiha/data\"\n[1] \"sotuv.csv\"\n[1] \"csv\""
        },
        {
          "type": "table",
          "head": [
            "Element",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>.Rproj</code>",
              "RStudio loyihasini belgilaydi"
            ],
            [
              "<code>data/</code>",
              "Xom va tozalangan ma'lumot"
            ],
            [
              "<code>scripts/</code>",
              "R skriptlar"
            ],
            [
              "<code>output/</code>",
              "Grafiklar va hisobotlar"
            ],
            [
              "<code>renv.lock</code>",
              "Paket versiyalari qulfi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "renv bilan versiyalarni qulflang",
          "html": "<code>renv::init()</code> loyiha kutubxonasini yaratadi, <code>renv::snapshot()</code> esa ishlatilgan paketlarni <code>renv.lock</code> ga yozadi. Boshqa kompyuterda <code>renv::restore()</code> aynan shu versiyalarni tiklaydi. Har muhim o'zgarishdan keyin snapshot qiling."
        }
      ],
      "quiz": [
        {
          "q": ".Rproj faylining vazifasi nima?",
          "options": [
            "Ma'lumotni CSV'ga yozish",
            "RStudio loyihasini belgilash va ish papkasini boshqarish",
            "Paketlarni o'rnatish",
            "Grafikni saqlash"
          ],
          "answer": 1,
          "explain": "RStudio .Rproj faylini loyiha ildizi sifatida tanib, ish papkasini shunga moslaydi."
        },
        {
          "q": "renv::snapshot() nima qiladi?",
          "options": [
            "Ma'lumotni zaxiralaydi",
            "Grafikni eksport qiladi",
            "Skriptlarni birlashtiradi",
            "Paket versiyalarini renv.lock ga yozadi"
          ],
          "answer": 3,
          "explain": "snapshot() joriy paket versiyalarini qulflab, keyinchalik restore() uchun saqlaydi."
        },
        {
          "q": "Loyihada nisbiy yo'l ishlatishning asosiy sababi nima?",
          "options": [
            "Boshqa kompyuterda ham kod ishlashi",
            "Fayl hajmi kichrayishi",
            "Kod tezroq bajarilishi",
            "Grafiklar chiroyli chiqishi"
          ],
          "answer": 0,
          "explain": "Nisbiy yo'llar loyiha papkasi ko'chirilganda ham to'g'ri ishlaydi, mutlaq yo'llar esa buziladi."
        }
      ]
    },
    {
      "id": 45,
      "title": "Loyiha I: savdo ma'lumotini yuklash va tozalash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi besh darslik amaliy loyihani boshlaymiz. Onlayn do'konning mart oyidagi savdo faylini oldik. Faylda narxlar matn ko'rinishida, bitta shahar nomida ortiqcha bo'shliq va takroriy qator bor. Avval ma'lumotni yuklab, shu muammolarni tozalaymiz."
        },
        {
          "type": "code",
          "title": "yuklash.R",
          "code": "library(readr)\nlibrary(dplyr)\nlibrary(stringr)\n\nqatorlar <- c(\n  \"id,sana,shahar,kategoriya,narx,soni\",\n  \"1,2024-01-05,Toshkent,Elektronika,\\\"1 200 000\\\",2\",\n  \"2,2024-01-12,Samarqand,Kiyim,\\\"350 000\\\",5\",\n  \"3,2024-02-03,Toshkent,Elektronika,\\\"850 000\\\",3\",\n  \"4,2024-02-14, Buxoro ,Uy,\\\"450 000\\\",4\",\n  \"5,2024-02-21,Samarqand,Kiyim,\\\"280 000\\\",6\",\n  \"6,2024-03-02,Toshkent,Elektronika,\\\"1 500 000\\\",1\",\n  \"7,2024-03-15,Buxoro,Uy,\\\"620 000\\\",2\",\n  \"8,2024-03-22,Samarqand,Elektronika,\\\"950 000\\\",3\",\n  \"9,2024-03-28,Toshkent,Kiyim,\\\"310 000\\\",7\",\n  \"10,2024-03-30,Buxoro,Elektronika,\\\"1 100 000\\\",2\",\n  \"10,2024-03-30,Buxoro,Elektronika,\\\"1 100 000\\\",2\"\n)\n\nyol <- tempfile(fileext = \".csv\")\nwriteLines(qatorlar, yol)\nxom <- read_csv(yol, show_col_types = FALSE, trim_ws = FALSE)\n\nnrow(xom)\nsum(duplicated(xom$id))\nsum(xom$shahar != str_trim(xom$shahar))",
          "output": "[1] 11\n[1] 1\n[1] 1"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Muammolar qayerda?",
          "html": "<code>nrow()</code> 11 qator ko'rsatdi, lekin noyob buyurtma 10 ta. <code>duplicated()</code> takroriy id ni topdi. Shahar nomidagi bo'shliq esa <code>str_trim()</code> bilan solishtirganda ko'rindi. Narx ustuni matn bo'lgani uchun keyingi qadamda uni songa aylantiramiz."
        },
        {
          "type": "code",
          "title": "tozalash.R",
          "code": "sotuv <- xom |>\n  mutate(narx = parse_number(narx),\n         shahar = str_trim(shahar)) |>\n  distinct(id, .keep_all = TRUE) |>\n  mutate(tushum = narx * soni)\n\nnrow(sotuv)\nclass(sotuv$narx)\nsum(sotuv$tushum) / 1e6\nsum(is.na(sotuv$tushum))",
          "output": "[1] 10\n[1] \"numeric\"\n[1] 20.14\n[1] 0"
        },
        {
          "type": "table",
          "head": [
            "Qadam",
            "Funksiya",
            "Natija"
          ],
          "rows": [
            [
              "Matnli sonni ajratish",
              "<code>parse_number()</code>",
              "1200000"
            ],
            [
              "Bo'shliqni tozalash",
              "<code>str_trim()</code>",
              "«Buxoro»"
            ],
            [
              "Takrorni olib tashlash",
              "<code>distinct(id)</code>",
              "10 qator"
            ],
            [
              "Yangi ustun",
              "<code>mutate(tushum = ...)</code>",
              "20.14 mln"
            ],
            [
              "Bo'sh natijani tekshirish",
              "<code>sum(is.na())</code>",
              "0"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tozalashni alohida saqlang",
          "html": "Xom faylni hech qachon ustiga yozmang. Tozalangan versiyani <code>data/sotuv_toza.csv</code> sifatida saqlang, tozalash skriptini esa alohida <code>01-tozalash.R</code> fayliga qo'ying. Shunda xatolik topilsa, jarayonni boshidan qayta ishga tushirish mumkin bo'ladi."
        }
      ],
      "quiz": [
        {
          "q": "parse_number(\"1 200 000\") qanday natija beradi?",
          "options": [
            "Matn \"1 200 000\"",
            "NA",
            "1200000 soni",
            "1.2"
          ],
          "answer": 2,
          "explain": "parse_number matndan raqamlarni ajratib, bo'shliq va ajratgichlarni tashlab son qaytaradi."
        },
        {
          "q": "distinct(id, .keep_all = TRUE) nima qiladi?",
          "options": [
            "Barcha ustunlarni o'chiradi",
            "Har bir id uchun bitta qator qoldirib, qolgan ustunlarni saqlaydi",
            "Faqat id ustunini qoldiradi",
            "Qatorlarni tartiblaydi"
          ],
          "answer": 1,
          "explain": "distinct takroriy id larni olib tashlaydi, .keep_all esa birinchi qatorning barcha ustunlarini saqlaydi."
        },
        {
          "q": "Tozalashdan keyin nrow() 10 bo'lishi nimani tasdiqlaydi?",
          "options": [
            "Narxlar son bo'ldi",
            "Barcha shaharlar bir xil",
            "Tushum hisoblandi",
            "Takroriy buyurtma olib tashlandi"
          ],
          "answer": 3,
          "explain": "11 qatordan bitta takroriy id chiqarilgach, noyob buyurtmalar soni 10 bo'ldi."
        }
      ]
    },
    {
      "id": 46,
      "title": "Loyiha II: shahar va kategoriya bo'yicha tahlil",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Tozalangan 10 buyurtma tayyor. Endi biznes savollariga javob beramiz: qaysi shahar eng ko'p tushum keltirdi, qaysi kategoriya yetakchi, o'rtacha buyurtma qancha? Buning uchun guruhlab jamlash va ulush hisoblash kerak."
        },
        {
          "type": "code",
          "title": "shahar-tahlili.R",
          "code": "library(dplyr)\n\nsotuv <- data.frame(\n  shahar = c(\"Toshkent\", \"Samarqand\", \"Toshkent\", \"Buxoro\", \"Samarqand\",\n             \"Toshkent\", \"Buxoro\", \"Samarqand\", \"Toshkent\", \"Buxoro\"),\n  narx = c(1200000, 350000, 850000, 450000, 280000,\n           1500000, 620000, 950000, 310000, 1100000),\n  soni = c(2, 5, 3, 4, 6, 1, 2, 3, 7, 2)\n) |>\n  mutate(tushum = narx * soni)\n\nsotuv |>\n  group_by(shahar) |>\n  summarise(buyurtma = n(), tushum_mln = sum(tushum) / 1e6) |>\n  mutate(ulush = round(tushum_mln / sum(tushum_mln) * 100, 1)) |>\n  arrange(desc(tushum_mln))",
          "output": "# A tibble: 3 × 4\n  shahar    buyurtma tushum_mln ulush\n  <chr>        <int>      <dbl> <dbl>\n1 Toshkent         4       8.62  42.8\n2 Samarqand        3       6.28  31.2\n3 Buxoro           3       5.24  26.0"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Ulushni qanday hisobladik?",
          "html": "<code>sum(tushum_mln)</code> jamlangan jadval ichida 20.14 ni beradi, chunki summarise'dan keyin har bir shahar uchun bitta qator qolgan. <code>ulush = tushum / jami × 100</code> formula bilan har bir shaharning foizi topiladi. Yaxlitlashdan keyin yig'indi 100.0 bo'lishi kerak."
        },
        {
          "type": "code",
          "title": "kategoriya-tahlili.R",
          "code": "sotuv |>\n  group_by(kategoriya) |>\n  summarise(jami = sum(tushum), ortacha = mean(tushum)) |>\n  arrange(desc(jami))",
          "output": "# A tibble: 3 × 3\n  kategoriya     jami ortacha\n  <chr>         <dbl>   <dbl>\n1 Elektronika 11500000 2300000\n2 Kiyim        5600000 1866667\n3 Uy           3040000 1520000"
        },
        {
          "type": "table",
          "head": [
            "Ko'rsatkich",
            "Qiymat",
            "Ma'nosi"
          ],
          "rows": [
            [
              "Jami tushum",
              "20.14 mln",
              "Barcha buyurtmalar yig'indisi"
            ],
            [
              "Eng katta shahar",
              "Toshkent",
              "8.62 mln, 42.8%"
            ],
            [
              "Eng katta kategoriya",
              "Elektronika",
              "11.5 mln"
            ],
            [
              "Buyurtmalar soni",
              "10",
              "Takrorlar olib tashlangan"
            ],
            [
              "O'rtacha buyurtma",
              "2.014 mln",
              "20.14 / 10"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Xulosani son bilan bog'lang",
          "html": "«Toshkent yetakchi» degan gap yetarli emas. «Toshkent 4 buyurtmada 8.62 mln so'm, ya'ni jami tushumning 42.8% ini tashkil qildi» — aniq va tekshiriladigan xulosa. Har bir raqam ortida qanday hisob borligini yozib qo'ying."
        }
      ],
      "quiz": [
        {
          "q": "group_by(shahar) dan keyin summarise() nechta qator qaytaradi?",
          "options": [
            "Har bir shahar uchun bittadan",
            "Har bir buyurtma uchun bittadan",
            "Har doim bitta",
            "Har doim o'nta"
          ],
          "answer": 0,
          "explain": "summarise() har bir guruhni bitta jamlangan qatorga aylantiradi; uchta shahar — uchta qator."
        },
        {
          "q": "n() bu loyihada nimani sanaydi?",
          "options": [
            "Ustunlar sonini",
            "Har bir shahardagi buyurtmalar sonini",
            "NA lar sonini",
            "Kategoriyalar sonini"
          ],
          "answer": 1,
          "explain": "group_by(shahar) kontekstida n() har bir shahar guruhidagi qatorlar sonini beradi."
        },
        {
          "q": "arrange(desc(tushum_mln)) qanday tartib beradi?",
          "options": [
            "Alifbo bo'yicha",
            "Kamayish tartibida",
            "O'sish tartibida",
            "Tasodifiy"
          ],
          "answer": 1,
          "explain": "desc() tushum ustunini kattadan kichikka qarab saralaydi."
        }
      ]
    },
    {
      "id": 47,
      "title": "Loyiha III: savdo dinamikasi va grafiklar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Raqamlar jadvalda ko'rinadi, lekin naqshni grafik tezroq yetkazadi. Bu darsda oylik tushum dinamikasini hisoblab, shaharlar bo'yicha ustunli grafik chizamiz. Avval sanani oy boshiga keltirib, keyin guruhlaymiz."
        },
        {
          "type": "code",
          "title": "oylik.R",
          "code": "library(dplyr)\nlibrary(lubridate)\n\nsotuv <- data.frame(\n  sana = as.Date(c(\"2024-01-05\", \"2024-01-12\", \"2024-02-03\", \"2024-02-14\",\n                   \"2024-02-21\", \"2024-03-02\", \"2024-03-15\", \"2024-03-22\",\n                   \"2024-03-28\", \"2024-03-30\")),\n  shahar = c(\"Toshkent\", \"Samarqand\", \"Toshkent\", \"Buxoro\", \"Samarqand\",\n             \"Toshkent\", \"Buxoro\", \"Samarqand\", \"Toshkent\", \"Buxoro\"),\n  narx = c(1200000, 350000, 850000, 450000, 280000,\n           1500000, 620000, 950000, 310000, 1100000),\n  soni = c(2, 5, 3, 4, 6, 1, 2, 3, 7, 2)\n) |>\n  mutate(tushum = narx * soni,\n         oy = floor_date(sana, \"month\"))\n\nsotuv |>\n  group_by(oy) |>\n  summarise(jami = sum(tushum) / 1e6) |>\n  pull(jami)",
          "output": "[1] 4.15 6.03 9.96"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Nega floor_date kerak?",
          "html": "Har bir sana har xil kunlarda. <code>floor_date(sana, \"month\")</code> ularni oyning birinchi kuniga keltiradi, shundan keyin <code>group_by(oy)</code> bir oy ichidagi barcha buyurtmalarni birlashtiradi. Bu usul oylar soni qancha bo'lishidan qat'i nazar ishlaydi."
        },
        {
          "type": "code",
          "title": "shahar-grafik.R",
          "code": "library(ggplot2)\n\nshahar_jami <- sotuv |>\n  group_by(shahar) |>\n  summarise(jami = sum(tushum) / 1e6)\n\nggplot(shahar_jami, aes(x = reorder(shahar, -jami), y = jami, fill = shahar)) +\n  geom_col() +\n  labs(title = \"Shaharlar bo'yicha tushum\",\n       x = NULL, y = \"Mln so'm\") +\n  theme_minimal() +\n  theme(legend.position = \"none\")",
          "outputLabel": "Kutilgan grafik",
          "output": "Grafik: uchta ustun kamayish tartibida — Toshkent 8.62, Samarqand 6.28, Buxoro 5.24. Har bir ustun o'z rangida, legenda o'chirilgan. X o'qida shahar nomlari, Y o'qida «Mln so'm» yozuvi bor.",
          "runnable": false
        },
        {
          "type": "table",
          "head": [
            "Grafik turi",
            "Geom",
            "Qachon ishlatiladi"
          ],
          "rows": [
            [
              "Ustunli",
              "<code>geom_col()</code>",
              "Tayyor y qiymatlar bilan"
            ],
            [
              "Ustunli (count)",
              "<code>geom_bar()</code>",
              "Qatorlar sonini sanash"
            ],
            [
              "Chiziqli",
              "<code>geom_line()</code>",
              "Vaqt dinamikasi"
            ],
            [
              "Nuqtali",
              "<code>geom_point()</code>",
              "Ikki sonli o'zgaruvchi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tartibni grafikda boshqaring",
          "html": "<code>reorder(shahar, -jami)</code> ustunlarni kattadan kichikka joylaydi. Bu ma'lumotni o'zgartirmaydi, faqat grafik ichidagi tartibni boshqaradi. Agar ranglar ham shu tartibga bog'liq bo'lsa, <code>fill = shahar</code> ni saqlab qoling."
        }
      ],
      "quiz": [
        {
          "q": "reorder(shahar, -jami) nima qiladi?",
          "options": [
            "Shahar nomini o'chiradi",
            "Jami ustunini filtrlaydi",
            "Grafikni teskari aylantiradi",
            "Shaharlarni jami bo'yicha kamayish tartibida joylaydi"
          ],
          "answer": 3,
          "explain": "reorder ikkinchi argument asosida faktor darajalarini qayta tartiblaydi; minus kamayish tartibini beradi."
        },
        {
          "q": "geom_col() va geom_bar() orasidagi farq nima?",
          "options": [
            "geom_col() tayyor y qiymatlarni oladi, geom_bar() qatorlarni sanaydi",
            "Ikkalasi bir xil",
            "geom_bar() faqat chiziq chizadi",
            "geom_col() faqat vaqt qatorida ishlaydi"
          ],
          "answer": 0,
          "explain": "geom_col() y estetikasini talab qiladi; geom_bar() standart holatda stat = \"count\" bilan ishlaydi."
        },
        {
          "q": "Oylik tushumni guruhlashdan oldin sana bilan nima qilish kerak?",
          "options": [
            "Sanani o'chirish",
            "Matnga aylantirish",
            "floor_date bilan oy boshiga keltirish",
            "Tasodifiy tartiblash"
          ],
          "answer": 2,
          "explain": "floor_date(sana, \"month\") barcha sanalarni oy boshiga keltiradi, keyin group_by(oy) to'g'ri ishlaydi."
        }
      ]
    },
    {
      "id": 48,
      "title": "Loyiha IV: narx va talab bog'lanishini tekshirish",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Loyihaning statistik qismiga o'tamiz. Biznes savoli: narx oshganda sotilgan dona kamayadimi? Buni faqat grafik bilan emas, korrelyatsiya testi va regressiya modeli bilan ham tekshiramiz. Natijani p-qiymat va R² bilan asoslaymiz."
        },
        {
          "type": "code",
          "title": "korrelyatsiya.R",
          "code": "library(dplyr)\n\nsotuv <- data.frame(\n  narx = c(1200000, 350000, 850000, 450000, 280000,\n           1500000, 620000, 950000, 310000, 1100000),\n  soni = c(2, 5, 3, 4, 6, 1, 2, 3, 7, 2)\n) |>\n  mutate(narx_mln = narx / 1e6)\n\nround(cor(sotuv$narx_mln, sotuv$soni), 3)\nround(cor.test(sotuv$narx_mln, sotuv$soni)$p.value, 4)",
          "output": "[1] -0.869\n[1] 0.0011"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Manfiy korrelyatsiya nimani bildiradi?",
          "html": "Koeffitsiyent -0.869: narx oshgan sari sotilgan dona kamayish tendensiyasi kuchli. p = 0.0011 esa 0.05 dan kichik, shuning uchun bu bog'lanish tasodifiy deb hisoblanmaydi. Lekin bu hali «narx o'zgarishi sotuvni keltirib chiqaradi» degan qat'iy xulosa emas."
        },
        {
          "type": "code",
          "title": "regressiya.R",
          "code": "model <- lm(soni ~ narx_mln, data = sotuv)\n\nround(unname(coef(model)), 2)\nround(summary(model)$r.squared, 3)\nround(unname(predict(model, newdata = data.frame(narx_mln = 0.8))), 2)",
          "output": "[1] 6.56 -4.01\n[1] 0.756\n[1] 3.34"
        },
        {
          "type": "table",
          "head": [
            "Ko'rsatkich",
            "Qiymat",
            "Izoh"
          ],
          "rows": [
            [
              "Korrelyatsiya",
              "-0.869",
              "Kuchli manfiy bog'lanish"
            ],
            [
              "p-qiymat",
              "0.0011",
              "0.05 dan kichik — ahamiyatli"
            ],
            [
              "Nishab",
              "-4.01",
              "Narx 1 mln oshsa, sotuv 4 dona kamayadi"
            ],
            [
              "R²",
              "0.756",
              "Sotuv o'zgarishining 75.6% izohlanadi"
            ],
            [
              "Bashorat",
              "3.34 dona",
              "Narx 0.8 mln bo'lganda"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Model chegaralarini yozing",
          "html": "Model 0.28-1.5 mln so'm oralig'idagi ma'lumotda o'rgatilgan. Undan juda past yoki juda yuqori narx uchun bashorat qilish ishonchsiz. Hisobotda kuzatuvlar soni (n = 10), ma'lumot davri va model chegaralarini ko'rsating. Kichik namunada topilgan naqshni kattaroq ma'lumotda qayta tekshirish kerak."
        }
      ],
      "quiz": [
        {
          "q": "p = 0.0011 va korrelyatsiya -0.869 bo'lsa, qanday xulosa asosli?",
          "options": [
            "Bog'lanish yo'q",
            "Narx va sotuv o'rtasida kuchli manfiy bog'lanish bor",
            "Sotuv narxga bog'liq emas",
            "Ma'lumot yaroqsiz"
          ],
          "answer": 1,
          "explain": "p 0.05 dan kichik va koeffitsiyent -1 ga yaqin, shuning uchun manfiy bog'lanish statistik ahamiyatli."
        },
        {
          "q": "Nishab -4.01 bo'lsa, narx 1 mln so'mga oshganda model nimani bashorat qiladi?",
          "options": [
            "Sotuv 4.01 dona kamayadi",
            "Sotuv 4.01 dona ortadi",
            "Narx 4.01 marta oshadi",
            "Sotuv o'zgarmaydi"
          ],
          "answer": 0,
          "explain": "Manfiy nishab izohlovchi bir birlikka oshganda natijaning o'rtacha 4.01 ga kamayishini bildiradi."
        },
        {
          "q": "R² = 0.756 nimani anglatadi?",
          "options": [
            "Model 75.6% hollarda xato qiladi",
            "Bashorat aniqligi 75.6%",
            "Korrelyatsiya 0.756",
            "Sotuv o'zgarishining 75.6% model bilan izohlanadi"
          ],
          "answer": 3,
          "explain": "R² izohlangan dispersiya ulushini beradi; qolgan 24.4% boshqa omillar bilan bog'liq."
        }
      ]
    },
    {
      "id": 49,
      "title": "Loyiha V: hisobot, xulosa va taqdimot",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Tahlil natijalarini qog'ozga yoki slaydga chiqarish ham mahorat. Yaxshi hisobot uchta savolga javob beradi: nima topdik, nega bu muhim va keyingi qadam nima? Bu darsda yakuniy jadvalni yasab, uni CSV'ga saqlaymiz va hisobot tuzilishini rejalashtiramiz."
        },
        {
          "type": "code",
          "title": "yakuniy-jadval.R",
          "code": "xulosa <- data.frame(\n  shahar = c(\"Toshkent\", \"Samarqand\", \"Buxoro\"),\n  tushum_mln = c(8.62, 6.28, 5.24)\n)\n\nxulosa$ulush <- round(xulosa$tushum_mln / sum(xulosa$tushum_mln) * 100, 1)\nxulosa",
          "output": "    shahar tushum_mln ulush\n1  Toshkent       8.62  42.8\n2 Samarqand       6.28  31.2\n3    Buxoro       5.24  26.0"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Jadvalni sodda saqlang",
          "html": "Yakuniy jadvalda faqat qaror qabul qilishga yordam beradigan ustunlar qolsin. Ortiqcha indeks, takroriy nom va yuzlab qator o'quvchini charchatadi. <code>round()</code> bilan o'nlik belgilar sonini belgilang, birlikni esa sarlavhada ko'rsating."
        },
        {
          "type": "code",
          "title": "eksport.R",
          "code": "yol <- tempfile(fileext = \".csv\")\nwrite.csv(xulosa, yol, row.names = FALSE)\n\nfile.exists(yol)\nnrow(read.csv(yol))\nnames(read.csv(yol))",
          "output": "[1] TRUE\n[1] 3\n[1] \"shahar\"     \"tushum_mln\" \"ulush\"     "
        },
        {
          "type": "ul",
          "items": [
            "<b>Xulosa:</b> bitta paragrafda asosiy topilma va raqam.",
            "<b>Metod:</b> ma'lumot manbasi, davr, tozalash qadamlari.",
            "<b>Natijalar:</b> 2-3 grafik va bitta yakuniy jadval.",
            "<b>Cheklovlar:</b> kichik namuna, yetishmayotgan ma'lumot, model chegaralari.",
            "<b>Keyingi qadam:</b> qaysi savolni kattaroq ma'lumotda tekshirish."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Hisobotni noldan qayta ishga tushiring",
          "html": "Yakuniy tekshiruv: R sessiyasini qayta ochib, barcha skriptlarni tartib bilan ishga tushiring. Natijalar bir xil chiqishi kerak. <code>sessionInfo()</code> va <code>renv.lock</code> ni hisobot ilovasiga qo'shing. Bu — tahlilingizning ishonchliligini ko'rsatadigan eng oddiy dalil."
        }
      ],
      "quiz": [
        {
          "q": "Hisobotning «Xulosa» qismida birinchi navbatda nima bo'lishi kerak?",
          "options": [
            "Barcha kod ro'yxati",
            "Asosiy topilma va uning raqami",
            "Paketlar versiyasi",
            "Xom ma'lumotning barcha qatorlari"
          ],
          "answer": 1,
          "explain": "Rahbar birinchi paragrafda asosiy natijani ko'rishi kerak; tafsilotlar keyingi bo'limlarda beriladi."
        },
        {
          "q": "write.csv(..., row.names = FALSE) nimani oldini oladi?",
          "options": [
            "Ustun nomlarini yozishni",
            "Sonlarni yaxlitlashni",
            "Faylni siqishni",
            "Qator raqamlarining ortiqcha ustun bo'lib yozilishini"
          ],
          "answer": 3,
          "explain": "row.names = FALSE qator nomlari ustunini eksport qilmaydi va CSV boshqa dasturlarda toza o'qiladi."
        },
        {
          "q": "Tahlilning takrorlanuvchanligini tekshirishning eng ishonchli usuli qaysi?",
          "options": [
            "Sessiyani qayta ochib, skriptlarni boshidan ishga tushirish",
            "Faqat grafiklarni qo'lda tekshirish",
            "Hisobotdagi raqamlarni ko'chirish",
            "Faylni boshqa nom bilan saqlash"
          ],
          "answer": 0,
          "explain": "Toza sessiyada qayta ishga tushirish yashirin holatga bog'liq xatolarni ko'rsatadi."
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
          "html": "R kursining yakuniy imtihoni. Savollar vektorlar va data frame'lardan tortib apply oilasi, stringr, tidyr, dplyr joinlari, lubridate, ggplot2, statistik testlar, regressiya va R Markdown'gacha bo'lgan butun kursni qamrab oladi."
        },
        {
          "type": "ul",
          "items": [
            "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
            "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
            "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
            "Har bir savol oldingi darslardagi amaliy misollarga tayanadi."
          ]
        },
        {
          "type": "table",
          "head": [
            "Bo'lim",
            "Savollar",
            "Mavzular"
          ],
          "rows": [
            [
              "Asoslar va tuzilmalar",
              "1-3",
              "Vektor, NA, faktor, apply"
            ],
            [
              "Matn va tidyverse",
              "4-8",
              "stringr, pivot, join, mutate, lubridate"
            ],
            [
              "Vizualizatsiya",
              "9",
              "ggplot2 va ggsave"
            ],
            [
              "Statistika",
              "10-11",
              "t-test, regressiya"
            ],
            [
              "Hisobot",
              "12",
              "R Markdown"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Imtihondan oldin",
          "html": "Kod bloklaridagi <code>output</code> larni yana bir bor ko'zdan kechiring. Ayniqsa <code>filter()</code> va <code>summarise()</code>, <code>left_join()</code>, <code>pivot_longer()</code>, <code>t.test()</code> va <code>lm()</code> natijalarini qanday izohlashni takrorlang. Shoshilmang: har bir variantni o'qib chiqing."
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
        "q": "c(4, 8, 12) vektorining uzunligini qaysi funksiya to'g'ri qaytaradi?",
        "options": [
          "length()",
          "nrow()",
          "count()",
          "dim()"
        ],
        "answer": 0,
        "explain": "length() vektordagi elementlar sonini, ya'ni 3 ni qaytaradi."
      },
      {
        "q": "which(is.na(c(5, NA, 9, NA))) qanday natija beradi?",
        "options": [
          "2 4",
          "1 3",
          "TRUE FALSE TRUE FALSE",
          "NA"
        ],
        "answer": 0,
        "explain": "which() mantiqiy vektorda TRUE bo'lgan indekslarni qaytaradi; NA lar 2 va 4-o'rinlarda."
      },
      {
        "q": "Faktor darajalarini qo'lda boshqa tartibga surish uchun qaysi forcats funksiyasi ishlatiladi?",
        "options": [
          "fct_recode()",
          "fct_lump()",
          "fct_relevel()",
          "fct_drop()"
        ],
        "answer": 2,
        "explain": "fct_relevel() tanlangan darajani kerakli joyga ko'chiradi; fct_recode() faqat nomni o'zgartiradi."
      },
      {
        "q": "str_detect(\"Noldan\", \"^N\") natijasi nima?",
        "options": [
          "FALSE",
          "\"N\"",
          "NA",
          "TRUE"
        ],
        "answer": 3,
        "explain": "^N satr boshidagi N harfini qidiradi; \"Noldan\" shu harf bilan boshlanadi."
      },
      {
        "q": "pivot_longer() dan keyin jadval odatda qanday o'zgaradi?",
        "options": [
          "Qatorlar kamayadi",
          "Qatorlar ko'payadi",
          "Ustunlar soni ortadi",
          "Jadval bo'sh bo'ladi"
        ],
        "answer": 1,
        "explain": "Bir nechta ustun qiymatlari alohida qatorlarga aylanadi, shuning uchun qatorlar soni ortadi."
      },
      {
        "q": "left_join(a, b) da b jadvalda mos kalit topilmasa, yangi ustunlarda nima bo'ladi?",
        "options": [
          "0",
          "Bo'sh matn",
          "NA",
          "Xatolik"
        ],
        "answer": 2,
        "explain": "left_join chap jadval qatorini saqlaydi, o'ng tomondan mos qiymat bo'lmasa NA qo'yadi."
      },
      {
        "q": "mutate() va summarise() orasidagi asosiy farq nima?",
        "options": [
          "mutate() qatorlar sonini saqlaydi, summarise() guruhni jamlaydi",
          "mutate() faqat filtrlaydi",
          "summarise() yangi ustun qo'shmaydi",
          "Ikkalasi bir xil"
        ],
        "answer": 0,
        "explain": "mutate() har bir qatorni saqlab ustun qo'shadi; summarise() har bir guruh uchun bitta qator yasaydi."
      },
      {
        "q": "month(ymd(\"2024-12-31\")) qanday qiymat qaytaradi?",
        "options": [
          "12",
          "31",
          "\"dekabr\"",
          "2024"
        ],
        "answer": 0,
        "explain": "month() label berilmasa oy raqamini qaytaradi; dekabr — 12."
      },
      {
        "q": "ggsave() ning vazifasi nima?",
        "options": [
          "Ma'lumotni CSV'ga yozish",
          "ggplot grafigini faylga saqlash",
          "Paketni o'rnatish",
          "Sanalarni formatlash"
        ],
        "answer": 1,
        "explain": "ggsave() oxirgi yoki ko'rsatilgan ggplot grafigini rasm fayli sifatida saqlaydi."
      },
      {
        "q": "t-testda p = 0.03 bo'lsa, 0.05 ahamiyatlilik darajasida qanday xulosa qilinadi?",
        "options": [
          "Nol gipoteza qabul qilinadi",
          "Farq yo'q deb e'lon qilinadi",
          "Ma'lumot yaroqsiz hisoblanadi",
          "Nol gipoteza rad etiladi"
        ],
        "answer": 3,
        "explain": "p < 0.05 bo'lsa, nol gipoteza rad etiladi; natija statistik ahamiyatli deb hisoblanadi."
      },
      {
        "q": "lm(soni ~ narx) modelida narx koeffitsiyenti -4 bo'lsa, bu nimani bildiradi?",
        "options": [
          "Narx bir birlikka oshsa, sotuv o'rtacha 4 birlikka kamayadi",
          "Narx har doim 4 ga teng",
          "Sotuv 4 ga ko'payadi",
          "Model xatosi 4"
        ],
        "answer": 0,
        "explain": "Manfiy nishab izohlovchi bir birlik oshganda natijaning o'rtacha 4 birlikka kamayishini bildiradi."
      },
      {
        "q": "R Markdown'dagi YAML sarlavhasi nimani belgilaydi?",
        "options": [
          "Faqat kodni ishga tushirish tartibini",
          "Paketlar ro'yxatini",
          "Hujjat nomi va chiqish formatini",
          "Ma'lumot fayli manbasini"
        ],
        "answer": 2,
        "explain": "YAML sarlavhasida title, author va output kabi hujjat darajasidagi sozlamalar yoziladi."
      }
    ]
  }
};
})();
