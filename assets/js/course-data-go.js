/* Noldan — Go course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";

  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.go = {
    "id": "go",
    "title": "Go",
    "logoClass": "course-logo--go",
    "logoText": "Go",
    "level": "Boshlovchi",
    "hours": "~20 soat",
    "testCount": 147,
    "lang": "go",
    "interactive": "none",
    "heroTitle": "Go: sodda sintaksis, kuchli parallellik",
    "heroDesc": "Go — tez kompilyatsiya qilinadigan, o'qishli va serverlar uchun qulay til. 49 darsda paketlar, slice va map, struct va interfeyslar, generikalar, goroutinlar, HTTP API, ma'lumotlar bazasi va testlashni amaliy kod bilan o'rganing. 147 test va 12 savollik yakuniy imtihon bilimni mustahkamlaydi.",
    "metaDescription": "Go kursi: 49 dars, 147 test, ko'p kod namunalari va 12 savollik yakuniy imtihon. Go asoslaridan HTTP API va ma'lumotlar bazasigacha o'zbek tilida noldan o'rganing.",
    "modules": [
      {
        "title": "Asoslar",
        "lessons": [1, 2, 3]
      },
      {
        "title": "Funksiyalar va ma'lumotlar",
        "lessons": [4, 5, 6, 7]
      },
      {
        "title": "Xatolar va goroutinlar",
        "lessons": [8, 9]
      },
      {
        "title": "Modullar va kolleksiyalar",
        "lessons": [10, 11, 12, 13, 14, 15]
      },
      {
        "title": "Matn, saralash va generikalar",
        "lessons": [16, 17, 18, 19]
      },
      {
        "title": "Struct, interfeys va xatolar",
        "lessons": [20, 21, 22, 23, 24]
      },
      {
        "title": "Testlash va muhandislik vositalari",
        "lessons": [25, 26, 27, 28, 29]
      },
      {
        "title": "Parallellik naqshlari",
        "lessons": [30, 31, 32, 33, 34, 35, 36]
      },
      {
        "title": "HTTP, JSON va shablonlar",
        "lessons": [37, 38, 39, 40]
      },
      {
        "title": "Ma'lumotlar bazasi",
        "lessons": [41, 42]
      },
      {
        "title": "Amaliy loyiha",
        "lessons": [43, 44, 45, 46, 47, 48, 49]
      },
      {
        "title": "Yakuniy imtihon",
        "lessons": [50]
      }
    ],
    "lessons": [
      {
        "id": 1,
        "title": "Go nima, go run va birinchi dastur",
        "minutes": 13,
        "blocks": [
          {
            "type": "p",
            "html": "Go — Google'da yaratilgan, kompilyatsiya qilinadigan va statik tipli dasturlash tili. Uning sintaksisi qisqa, standart kutubxonasi boy. Go kodini <code>go run</code> bilan darhol sinab ko'rish yoki <code>go build</code> bilan bajariladigan faylga aylantirish mumkin."
          },
          {
            "type": "code",
            "title": "salom.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Salom, Noldan!\")\n    fmt.Println(\"Go ishlayapti.\")\n}",
            "output": "Salom, Noldan!\nGo ishlayapti.",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Qism",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>package main</code>",
                "Dastur paketi; bajariladigan ilova shu nomdan boshlanadi"
              ],
              [
                "<code>import \"fmt\"</code>",
                "Formatlash va konsolga chiqarish paketini ulaydi"
              ],
              [
                "<code>func main()</code>",
                "Dasturning kirish nuqtasi"
              ],
              [
                "<code>fmt.Println()</code>",
                "Qiymatlarni qatorga chiqaradi va yangi qator qo'shadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "formatlash.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Print(\"Salom \")\n    fmt.Print(\"dunyo\")\n    fmt.Println()\n    fmt.Printf(\"Go %d yilda chiqdi.\\n\", 2009)\n}",
            "output": "Salom dunyo\nGo 2009 yilda chiqdi.",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "go run yoki go build?",
            "html": "<code>go run salom.go</code> kodni kompilyatsiya qiladi va darhol ishga tushiradi — o'rganish uchun qulay. <code>go build</code> esa bajariladigan faylni yaratadi. Katta loyihalarda buyruqlar <code>go.mod</code> turgan papkada bajariladi."
          }
        ],
        "quiz": [
          {
            "q": "Go dasturi qaysi funksiyadan boshlanadi?",
            "options": ["main()", "run()", "init()", "start()"],
            "answer": 0,
            "explain": "Bajariladigan Go dasturining kirish nuqtasi main() funksiyasidir. U package main ichida bo'ladi."
          },
          {
            "q": "Konsolga ma'lumot chiqarish uchun odatda qaysi paket ishlatiladi?",
            "options": ["time", "fmt", "os", "errors"],
            "answer": 1,
            "explain": "fmt paketi Println, Printf kabi chiqarish funksiyalarini beradi."
          },
          {
            "q": "go run salom.go buyrug'i nima qiladi?",
            "options": ["Kodni umuman tekshirmaydi", "Faqat faylni saqlaydi", "Kompilyatsiya qilib, dasturni darhol ishga tushiradi", "Faqat bajariladigan fayl yaratadi"],
            "answer": 2,
            "explain": "go run avval kodni kompilyatsiya qiladi, keyin natijani ishga tushiradi. Bajariladigan fayl doimiy saqlanmaydi."
          }
        ]
      },
      {
        "id": 2,
        "title": "O'zgaruvchilar, konstantalar va turlar",
        "minutes": 15,
        "blocks": [
          {
            "type": "p",
            "html": "Go — statik tipli til: har bir o'zgaruvchining turi ma'lum. <code>var</code> bilan to'liq e'lon qilish, <code>:=</code> bilan esa funksiya ichida qisqa e'lon qilish mumkin. Qiymat berilmagan o'zgaruvchi o'z turining <b>nol qiymatini</b> oladi."
          },
          {
            "type": "code",
            "title": "turlar.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var ism string = \"Aziza\"\n    var yosh int = 15\n    var baho float64 = 4.8\n    var faol bool = true\n\n    fmt.Println(ism, yosh)\n    fmt.Println(baho, faol)\n}",
            "output": "Aziza 15\n4.8 true",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Tur",
              "Misol",
              "Nol qiymati"
            ],
            "rows": [
              [
                "<code>string</code>",
                "<code>\"Aziza\"</code>",
                "<code>\"\"</code>"
              ],
              [
                "<code>int</code>",
                "<code>15</code>",
                "<code>0</code>"
              ],
              [
                "<code>float64</code>",
                "<code>4.8</code>",
                "<code>0</code>"
              ],
              [
                "<code>bool</code>",
                "<code>true</code>",
                "<code>false</code>"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Ishlatilmagan o'zgaruvchi",
            "html": "Go kompilyatori ishlatilmagan mahalliy o'zgaruvchini xato deb hisoblaydi. Bu tasodifiy qoldiqlarni oldini oladi. Konstantalar <code>const</code> bilan e'lon qilinadi va ularga keyin qiymat berib bo'lmaydi."
          },
          {
            "type": "code",
            "title": "qisqa-elon.go",
            "code": "package main\n\nimport \"fmt\"\n\nconst kurs = \"Go\"\nconst maksBall = 100\n\nfunc main() {\n    yosh := 15\n    yosh = yosh + 1\n    baho := 4.8\n\n    fmt.Println(kurs, maksBall)\n    fmt.Println(\"Yosh:\", yosh, \"Baho:\", baho)\n    fmt.Printf(\"Yosh turi: %T\\n\", yosh)\n}",
            "output": "Go 100\nYosh: 16 Baho: 4.8\nYosh turi: int",
            "runnable": false
          }
        ],
        "quiz": [
          {
            "q": ":= operatori nimani bildiradi?",
            "options": ["Konstanta yaratish", "Faqat izoh", "Taqqoslash", "Qisqa e'lon va qiymat berish"],
            "answer": 3,
            "explain": ":= funksiya ichida o'zgaruvchini e'lon qilib, unga qiymat beradi. Tur odatda o'ng tomondagi qiymatdan aniqlanadi."
          },
          {
            "q": "O'zgarmas qiymat yaratish uchun qaysi kalit so'z ishlatiladi?",
            "options": ["const", "final", "static", "let"],
            "answer": 0,
            "explain": "const bilan e'lon qilingan qiymatni keyinchalik o'zgartirib bo'lmaydi."
          },
          {
            "q": "Qiymat berilmagan int o'zgaruvchining nol qiymati nima?",
            "options": ["nil", "0", "1", "undefined"],
            "answer": 1,
            "explain": "Go'da int uchun nol qiymat 0. nil esa ko'rsatkich, slice, map kabi turlar uchun ishlatiladi."
          }
        ]
      },
      {
        "id": 3,
        "title": "Shartlar, switch va tsikllar",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Shartlar dasturga qaror qabul qilish imkonini beradi. Go'da <code>if</code> shartini qavsga olmaysiz, lekin jingalak qavslar majburiy. <code>switch</code> bir nechta aniq variantni tekshirish uchun qulay."
          },
          {
            "type": "code",
            "title": "shart.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ball := 85\n\n    if ball >= 90 {\n        fmt.Println(\"A daraja\")\n    } else if ball >= 80 {\n        fmt.Println(\"B daraja\")\n    } else {\n        fmt.Println(\"Yana harakat qiling\")\n    }\n}",
            "output": "B daraja",
            "runnable": false
          },
          {
            "type": "code",
            "title": "switch-tsikl.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    kun := 3\n\n    switch kun {\n    case 1, 2:\n        fmt.Println(\"Ish kuni boshi\")\n    case 3:\n        fmt.Println(\"Chorshanba\")\n    default:\n        fmt.Println(\"Boshqa kun\")\n    }\n\n    for i := 1; i <= 3; i++ {\n        fmt.Println(\"Qadam:\", i)\n    }\n\n    son := 3\n    for son > 0 {\n        son--\n    }\n    fmt.Println(\"Qoldi:\", son)\n}",
            "output": "Chorshanba\nQadam: 1\nQadam: 2\nQadam: 3\nQoldi: 0",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Konstruksiya",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>if / else if / else</code>",
                "Shartga qarab blok tanlaydi"
              ],
              [
                "<code>switch / case / default</code>",
                "Bir nechta aniq variantni tekshiradi"
              ],
              [
                "<code>for</code>",
                "Kodni takrorlaydi — Go'da yagona tsikl kalit so'zi"
              ],
              [
                "<code>break / continue</code>",
                "Tsikldan chiqish yoki joriy aylanishni o'tkazish"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Go'da while yo'q",
            "html": "Go'da <code>while</code> o'rniga ham <code>for</code> ishlatiladi: <code>for son &gt; 0 { ... }</code>. <code>switch</code> oxirida <code>break</code> yozish shart emas — case avtomatik tugaydi. Keyingi case'ga o'tish kerak bo'lsa, <code>fallthrough</code> yoziladi."
          }
        ],
        "quiz": [
          {
            "q": "Go'da tsikl yaratish uchun qaysi kalit so'z ishlatiladi?",
            "options": ["while", "loop", "for", "repeat"],
            "answer": 2,
            "explain": "Go'da yagona tsikl kalit so'zi for. U klassik, shartli va cheksiz tsikllarni ifodalay oladi."
          },
          {
            "q": "switch ichida case tugagach nima yozish shart emas?",
            "options": ["return", "continue", "end", "break"],
            "answer": 3,
            "explain": "Go switch'ida har case avtomatik tugaydi, shuning uchun break shart emas. fallthrough keyingi case'ga o'tadi."
          },
          {
            "q": "for i := 1; i <= 3; i++ tsikli necha marta bajariladi?",
            "options": ["3", "4", "Cheksiz", "2"],
            "answer": 0,
            "explain": "i qiymatlari 1, 2, 3 bo'ladi — jami 3 marta."
          }
        ]
      },
      {
        "id": 4,
        "title": "Funksiyalar va bir nechta natija",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Funksiya ma'lum bir ishni bajaradigan kod bloki. Go'da funksiya <code>func</code> bilan e'lon qilinadi, parametr va qaytariladigan qiymat turlari aniq yoziladi. Bir funksiya bir nechta qiymat qaytarishi mumkin — bu xatoni natija bilan birga uzatishda juda qulay."
          },
          {
            "type": "code",
            "title": "funksiya.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc qosh(a int, b int) int {\n    return a + b\n}\n\nfunc salomlash(ism string) {\n    fmt.Println(\"Salom,\", ism+\"!\")\n}\n\nfunc main() {\n    fmt.Println(qosh(2, 3))\n    fmt.Println(qosh(10, 15))\n    salomlash(\"Aziza\")\n}",
            "output": "5\n25\nSalom, Aziza!",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Qism",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>func</code>",
                "Funksiya e'loni"
              ],
              [
                "<code>qosh</code>",
                "Funksiya nomi"
              ],
              [
                "<code>(a int, b int)</code>",
                "Parametrlar va ularning turlari"
              ],
              [
                "<code>int</code> (qavsdan keyin)",
                "Qaytariladigan qiymat turi"
              ],
              [
                "<code>return</code>",
                "Natijani qaytaradi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "bolish.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc bolish(a, b int) (int, bool) {\n    if b == 0 {\n        return 0, false\n    }\n    return a / b, true\n}\n\nfunc main() {\n    natija, ok := bolish(10, 2)\n    fmt.Println(natija, ok)\n\n    natija, ok = bolish(5, 0)\n    fmt.Println(natija, ok)\n}",
            "output": "5 true\n0 false",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Keraksiz natijani tashlab yuborish",
            "html": "Bir nechta qiymatdan faqat bittasi kerak bo'lsa, uni <code>_</code> bilan tashlab yuborish mumkin: <code>natija, _ := bolish(10, 2)</code>. Ishlatilmaydigan o'zgaruvchi qoldirmaslik uchun shu usul ishlatiladi."
          }
        ],
        "quiz": [
          {
            "q": "Funksiya e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
            "options": ["function", "func", "def", "fn"],
            "answer": 1,
            "explain": "Go'da funksiyalar func kalit so'zi bilan e'lon qilinadi: func qosh(a int, b int) int { ... }."
          },
          {
            "q": "func bolish(a, b int) (int, bool) funksiyasi nechta qiymat qaytaradi?",
            "options": ["0", "1", "2", "3"],
            "answer": 2,
            "explain": "Qavs ichidagi (int, bool) ikki xil natija turini bildiradi, shuning uchun funksiya ikki qiymat qaytaradi."
          },
          {
            "q": "natija, ok := bolish(10, 2) yozuvida ok nimani bildiradi?",
            "options": ["Funksiya nomini", "Xato matnini", "Bo'linmaning qoldig'ini", "Amaliyot muvaffaqiyatli bo'lganini bildiruvchi bool"],
            "answer": 3,
            "explain": "Ikkinchi natija bool: true bo'lsa bo'lish bajarilgan, false bo'lsa nolga bo'lishga urinilgan."
          }
        ]
      },
      {
        "id": 5,
        "title": "Slice va map bilan ishlash",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Slice — o'lchami o'zgaradigan ro'yxat. U massiv ustida qurilgan, lekin <code>append</code> bilan kengaytirish mumkin. Map esa kalit bo'yicha qiymat saqlaydigan lug'at: kalitlar noyob bo'ladi."
          },
          {
            "type": "code",
            "title": "slice.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ismlar := []string{\"Ali\", \"Aziza\", \"Bek\"}\n    ismlar = append(ismlar, \"Dilnoza\")\n\n    fmt.Println(ismlar)\n    fmt.Println(len(ismlar))\n    fmt.Println(ismlar[1])\n\n    sonlar := []int{4, 8, 15, 16, 23}\n    fmt.Println(sonlar[1:4])\n}",
            "output": "[Ali Aziza Bek Dilnoza]\n4\nAziza\n[8 15 16]",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Amal",
              "Yozuv"
            ],
            "rows": [
              [
                "Yaratish",
                "<code>sonlar := []int{4, 8, 15}</code>"
              ],
              [
                "Qo'shish",
                "<code>sonlar = append(sonlar, 16)</code>"
              ],
              [
                "Uzunlik",
                "<code>len(sonlar)</code>"
              ],
              [
                "Kesim",
                "<code>sonlar[1:4]</code>"
              ],
              [
                "Xarita yaratish",
                "<code>ballar := map[string]int{}</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "map.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sort\"\n)\n\nfunc main() {\n    ballar := map[string]int{\n        \"Aziza\": 92,\n        \"Bek\":   78,\n    }\n    ballar[\"Dilnoza\"] = 88\n\n    fmt.Println(ballar[\"Aziza\"])\n\n    if ball, bor := ballar[\"Bek\"]; bor {\n        fmt.Println(\"Bek:\", ball)\n    }\n\n    ismlar := make([]string, 0, len(ballar))\n    for ism := range ballar {\n        ismlar = append(ismlar, ism)\n    }\n    sort.Strings(ismlar)\n    fmt.Println(ismlar)\n    fmt.Println(len(ballar))\n}",
            "output": "92\nBek: 78\n[Aziza Bek Dilnoza]\n3",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "append natijasini qayta bering",
            "html": "<code>append</code> yangi slice qaytarishi mumkin, shuning uchun natijani albatta o'zgaruvchiga qayta berish kerak: <code>sonlar = append(sonlar, 16)</code>. Map'da mavjud bo'lmagan kalit o'qilsa, panic bo'lmaydi — tur uchun nol qiymat qaytadi. Kalit borligini <code>ball, bor := ballar[\"Bek\"]</code> bilan tekshirish mumkin."
          }
        ],
        "quiz": [
          {
            "q": "Slice oxiriga element qo'shish uchun qaysi funksiya ishlatiladi?",
            "options": ["append", "push", "add", "insert"],
            "answer": 0,
            "explain": "append(slice, qiymat...) yangi element qo'shilgan slice qaytaradi. Natijani o'zgaruvchiga qayta berish kerak."
          },
          {
            "q": "len(ismlar) nima qaytaradi?",
            "options": ["Birinchi elementni", "Elementlar sonini", "Oxirgi indeksni", "Xotira hajmini"],
            "answer": 1,
            "explain": "len slice yoki map'dagi elementlar sonini qaytaradi. Oxirgi indeks odatda len - 1 bo'ladi."
          },
          {
            "q": "Map'da mavjud bo'lmagan kalitni o'qisangiz nima bo'ladi?",
            "options": ["Panic yuz beradi", "nil qaytadi", "Tur uchun nol qiymat qaytadi", "Xato matni qaytadi"],
            "answer": 2,
            "explain": "Yo'q kalit uchun map qiymat turining nol qiymatini qaytaradi. Kalit bor-yo'qligini comma-ok usuli bilan aniqlash mumkin."
          }
        ]
      },
      {
        "id": 6,
        "title": "Struct va metodlar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Struct — bir nechta maydonni bitta nom ostida birlashtirgan tur. U obyektga o'xshash ma'lumot modelini yaratadi. Struct'ga metodlar bog'lash mumkin: metod receiver orqali qaysi turga tegishli ekanini bildiradi."
          },
          {
            "type": "code",
            "title": "talaba.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Talaba struct {\n    Ism  string\n    Ball int\n}\n\nfunc (t Talaba) Otdi() bool {\n    return t.Ball >= 60\n}\n\nfunc (t *Talaba) BallQosh(qosh int) {\n    t.Ball += qosh\n}\n\nfunc main() {\n    aziza := Talaba{Ism: \"Aziza\", Ball: 85}\n    bek := Talaba{Ism: \"Bek\", Ball: 55}\n\n    fmt.Println(aziza.Ism, aziza.Ball)\n    fmt.Println(\"Aziza o'tdi:\", aziza.Otdi())\n    fmt.Println(\"Bek o'tdi:\", bek.Otdi())\n\n    aziza.BallQosh(5)\n    fmt.Println(\"Yangi ball:\", aziza.Ball)\n}",
            "output": "Aziza 85\nAziza o'tdi: true\nBek o'tdi: false\nYangi ball: 90",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Receiver",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>(t Talaba)</code>",
                "Struct nusxasi bilan ishlaydi, asl qiymat o'zgarmaydi"
              ],
              [
                "<code>(t *Talaba)</code>",
                "Asl struct'ga ko'rsatkich oladi, maydonlarni o'zgartira oladi"
              ],
              [
                "<code>t.Ball</code>",
                "Maydonga murojaat"
              ],
              [
                "<code>t.Otdi()</code>",
                "Metod chaqirish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "kitob.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Kitob struct {\n    Nom    string\n    Sahifa int\n}\n\nfunc yangiKitob(nom string, sahifa int) Kitob {\n    return Kitob{Nom: nom, Sahifa: sahifa}\n}\n\nfunc main() {\n    kitob := yangiKitob(\"Go asoslari\", 320)\n    fmt.Printf(\"%s — %d sahifa\\n\", kitob.Nom, kitob.Sahifa)\n\n    nusxa := kitob\n    nusxa.Sahifa = 400\n    fmt.Println(kitob.Sahifa, nusxa.Sahifa)\n}",
            "output": "Go asoslari — 320 sahifa\n320 400",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Struct nusxalanadi",
            "html": "Struct o'zgaruvchisi boshqasiga berilganda uning nusxasi ko'chiriladi. Shuning uchun <code>nusxa</code>ni o'zgartirish <code>kitob</code>ga ta'sir qilmaydi. Katta struct'ni funksiyaga uzatishda ko'rsatkich (<code>*Kitob</code>) ishlatish samaraliroq."
          }
        ],
        "quiz": [
          {
            "q": "Yangi struct turini e'lon qilish qaysi kalit so'z bilan boshlanadi?",
            "options": ["struct", "object", "class", "type"],
            "answer": 3,
            "explain": "Go'da yangi tur type kalit so'zi bilan e'lon qilinadi: type Talaba struct { ... }."
          },
          {
            "q": "Metod struct maydonini o'zgartirishi uchun receiver qanday bo'lishi kerak?",
            "options": ["*Talaba", "Talaba&", "mut Talaba", "Talaba"],
            "answer": 0,
            "explain": "Ko'rsatkich receiver (*Talaba) asl struct'ni o'zgartiradi. Qiymat receiver'i faqat nusxa bilan ishlaydi."
          },
          {
            "q": "Struct o'zgaruvchisi boshqasiga berilganda nima bo'ladi?",
            "options": ["Faqat birinchi maydon ko'chiriladi", "Nusxa ko'chiriladi", "Bir xil xotiraga havola yaratiladi", "Dastur to'xtaydi"],
            "answer": 1,
            "explain": "Go'da struct qiymat turi: topshirishda butun nusxa ko'chiriladi. Havola kerak bo'lsa, ko'rsatkich ishlatiladi."
          }
        ]
      },
      {
        "id": 7,
        "title": "Interfeyslar",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Interfeys — metodlar to'plamini tavsiflaydi. Unda kod emas, faqat metod imzolari bo'ladi. Bir tur interfeysning barcha metodlarini yozsa, u interfeysni avtomatik qanoatlantiradi — <code>implements</code> kabi kalit so'z kerak emas."
          },
          {
            "type": "code",
            "title": "hayvon.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Hayvon interface {\n    Ovoz() string\n}\n\ntype It struct {\n    Ism string\n}\n\ntype Mushuk struct {\n    Ism string\n}\n\nfunc (i It) Ovoz() string {\n    return \"Vov\"\n}\n\nfunc (m Mushuk) Ovoz() string {\n    return \"Miyov\"\n}\n\nfunc tanishtir(h Hayvon) {\n    fmt.Println(h.Ovoz())\n}\n\nfunc main() {\n    tanishtir(It{Ism: \"Bobik\"})\n    tanishtir(Mushuk{Ism: \"Mimi\"})\n}",
            "output": "Vov\nMiyov",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Tushuncha",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>interface</code>",
                "Metodlar to'plami"
              ],
              [
                "<code>Hayvon</code>",
                "Ovoz() string metodini talab qiluvchi interfeys"
              ],
              [
                "<code>It</code>, <code>Mushuk</code>",
                "Interfeysni o'z metodlari bilan qanoatlantiruvchi turlar"
              ],
              [
                "<code>any</code>",
                "Bo'sh interfeys: har qanday qiymatni qabul qiladi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "mahsulot.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Mahsulot struct {\n    Nom  string\n    Narx int\n}\n\nfunc (m Mahsulot) String() string {\n    return fmt.Sprintf(\"%s (%d so'm)\", m.Nom, m.Narx)\n}\n\nfunc main() {\n    mahsulot := Mahsulot{Nom: \"Kitob\", Narx: 45000}\n    fmt.Println(mahsulot)\n}",
            "output": "Kitob (45000 so'm)",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "fmt.Stringer",
            "html": "<code>String() string</code> metodini yozsangiz, tur <code>fmt.Stringer</code> interfeysini qanoatlantiradi. Shunda <code>fmt.Println</code> obyektni shu metod natijasi bilan chiqaradi. Interfeys qiymatidan aniq turni olish uchun <code>qiymat, ok := x.(Talaba)</code> ko'rinishidagi type assertion ishlatiladi."
          }
        ],
        "quiz": [
          {
            "q": "Tur interfeysni qanday qanoatlantiradi?",
            "options": ["Faqat struct bo'lsa", "implements kalit so'zi bilan", "Interfeys metodlarini yozish orqali avtomatik", "Interfeysni import qilish bilan"],
            "answer": 2,
            "explain": "Go'da implementatsiya oshkora emas: kerakli metodlar bir xil imzo bilan yozilsa, tur interfeysni qanoatlantiradi."
          },
          {
            "q": "Bo'sh interfeys any qanday qiymatlarni qabul qiladi?",
            "options": ["Faqat matnlarni", "Faqat sonlarni", "Faqat struct'larni", "Har qanday turni"],
            "answer": 3,
            "explain": "any (interface{}) hech qanday metod talab qilmaydi, shuning uchun unga har qanday qiymat sig'adi."
          },
          {
            "q": "String() string metodi qaysi interfeysga tegishli?",
            "options": ["fmt.Stringer", "io.Reader", "sort.Interface", "error"],
            "answer": 0,
            "explain": "fmt.Stringer interfeysi String() string metodini talab qiladi va chiqarishda ishlatiladi."
          }
        ]
      },
      {
        "id": 8,
        "title": "Xatolar, defer va panic/recover",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Go'da xatolar odatda qiymat sifatida qaytariladi. Funksiya oxirgi natija sifatida <code>error</code> qaytaradi, chaqiruvchi esa uni tekshiradi. Bu yondashuv xatoni ko'rinadigan va boshqariladigan qiladi."
          },
          {
            "type": "code",
            "title": "xato.go",
            "code": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nfunc bolish(a, b int) (int, error) {\n    if b == 0 {\n        return 0, errors.New(\"nolga bo'lib bo'lmaydi\")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    natija, err := bolish(10, 2)\n    if err != nil {\n        fmt.Println(\"Xato:\", err)\n        return\n    }\n    fmt.Println(\"Natija:\", natija)\n\n    _, err = bolish(5, 0)\n    if err != nil {\n        fmt.Println(\"Xato:\", err)\n    }\n}",
            "output": "Natija: 5\nXato: nolga bo'lib bo'lmaydi",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "info",
            "title": "error — interfeys",
            "html": "<code>error</code> — <code>Error() string</code> metodini talab qiluvchi o'rnatilgan interfeys. Xatoni o'rash uchun <code>fmt.Errorf(\"...: %w\", err)</code>, tekshirish uchun <code>errors.Is</code> va <code>errors.As</code> ishlatiladi."
          },
          {
            "type": "code",
            "title": "defer.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc xavfli() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println(\"Ushlandi:\", r)\n        }\n    }()\n\n    panic(\"kutilmagan holat\")\n}\n\nfunc main() {\n    defer fmt.Println(\"main tugadi\")\n    xavfli()\n    fmt.Println(\"davom etamiz\")\n}",
            "output": "Ushlandi: kutilmagan holat\ndavom etamiz\nmain tugadi",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Qachon ishlatiladi"
            ],
            "rows": [
              [
                "<code>error</code>",
                "Kutilgan xatolarni qaytarish va tekshirish"
              ],
              [
                "<code>defer</code>",
                "Funksiya tugaganda fayl yoki ulanishni yopish"
              ],
              [
                "<code>panic</code>",
                "Davom ettirib bo'lmaydigan holatda dasturni to'xtatish"
              ],
              [
                "<code>recover</code>",
                "Faqat deferred funksiya ichida panic'ni ushlash"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "q": "Go'da kutilgan xato odatda qanday uzatiladi?",
            "options": ["try/catch bilan", "error qiymati sifatida", "Faqat panic bilan", "Global o'zgaruvchi orqali"],
            "answer": 1,
            "explain": "Funksiya natijalaridan biri error bo'ladi; chaqiruvchi err != nil ekanini tekshiradi."
          },
          {
            "q": "defer bilan rejalashtirilgan funksiyalar qanday tartibda bajariladi?",
            "options": ["Faqat panic bo'lganda", "Birinchi yozilgani birinchi", "LIFO — oxirgi yozilgani birinchi", "Tasodifiy tartibda"],
            "answer": 2,
            "explain": "defer chaqiruvlari stack kabi ishlaydi: oxirgi defer birinchi bajariladi."
          },
          {
            "q": "recover() qayerda chaqirilganda panic'ni ushlay oladi?",
            "options": ["Faqat main ichida", "Faqat goroutine boshida", "Har qanday joyda", "Faqat deferred funksiya ichida"],
            "answer": 3,
            "explain": "recover faqat panic paytida bajarilayotgan deferred funksiya ichida ishlaydi."
          }
        ]
      },
      {
        "id": 9,
        "title": "Goroutines, channels va WaitGroup",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Goroutine — Go'ning yengil oqimi. <code>go</code> kalit so'zi funksiyani parallel ishga tushiradi. Goroutinlar orasida ma'lumot almashish uchun <b>channel</b> ishlatiladi; <code>sync.WaitGroup</code> esa ularning tugashini kutishga yordam beradi."
          },
          {
            "type": "code",
            "title": "kanal.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc kvadrat(n int, ch chan<- int) {\n    ch <- n * n\n}\n\nfunc main() {\n    ch := make(chan int)\n\n    for i := 1; i <= 3; i++ {\n        go kvadrat(i, ch)\n    }\n\n    yigindi := 0\n    for i := 0; i < 3; i++ {\n        yigindi += <-ch\n    }\n    fmt.Println(\"Yig'indi:\", yigindi)\n}",
            "output": "Yig'indi: 14",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>go f()</code>",
                "f funksiyasini yangi goroutinda boshlaydi"
              ],
              [
                "<code>ch := make(chan int)</code>",
                "Butun sonlar kanalini yaratadi"
              ],
              [
                "<code>ch &lt;- 5</code>",
                "Kanalga qiymat yuboradi"
              ],
              [
                "<code>x := &lt;-ch</code>",
                "Kanaldan qiymat qabul qiladi"
              ],
              [
                "<code>wg.Wait()</code>",
                "Barcha goroutinlar tugashini kutadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "waitgroup.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    natijalar := make([]int, 3)\n\n    for i := 0; i < 3; i++ {\n        wg.Add(1)\n        go func(indeks int) {\n            defer wg.Done()\n            natijalar[indeks] = (indeks + 1) * 10\n        }(i)\n    }\n\n    wg.Wait()\n    fmt.Println(natijalar)\n}",
            "output": "[10 20 30]",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "main kutmasa, goroutinlar yo'qoladi",
            "html": "main funksiyasi tugasa, dastur barcha goroutinlarni to'xtatadi. Shuning uchun kanal yoki <code>WaitGroup</code> bilan kutish kerak. Umumiy ma'lumotga bir vaqtda yozish <b>data race</b> beradi; bunday kodni <code>go run -race</code> bilan tekshirish mumkin."
          }
        ],
        "quiz": [
          {
            "q": "Goroutine ishga tushirish uchun qaysi kalit so'z ishlatiladi?",
            "options": ["go", "thread", "spawn", "async"],
            "answer": 0,
            "explain": "go f() yozuvi f funksiyasini yangi goroutinda boshlaydi."
          },
          {
            "q": "Kanalga qiymat yuborish qaysi operator bilan yoziladi?",
            "options": ["ch -> 5", "ch <- 5", "ch => 5", "send(ch, 5)"],
            "answer": 1,
            "explain": "ch <- 5 qiymatni kanalga yuboradi; x := <-ch esa kanaldan qabul qiladi."
          },
          {
            "q": "sync.WaitGroup ning asosiy vazifasi nima?",
            "options": ["Ma'lumotni JSON qilish", "Kanallarni yopish", "Goroutinlar tugashini kutish", "Xatolarni ushlash"],
            "answer": 2,
            "explain": "Add bilan hisob qo'shiladi, Done bilan kamayadi, Wait esa hisob nolga tushguncha kutadi."
          }
        ]
      },
      {
        "id": 10,
        "title": "Modullar, paketlar va go.mod",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Modul — bir yoki bir nechta paketdan iborat loyiha chegarasi. Uning nomi va Go versiyasi <code>go.mod</code> faylida saqlanadi. Paket esa bitta papkadagi Go fayllari to'plami; bir paketdagi fayllar bir-birining nomlarini ko'radi."
          },
          {
            "type": "table",
            "head": [
              "Buyruq yoki tushuncha",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>go mod init example/hello</code>",
                "Yangi modul va go.mod faylini yaratadi"
              ],
              [
                "<code>go run .</code>",
                "Joriy paketni ishga tushiradi"
              ],
              [
                "<code>go build</code>",
                "Bajariladigan fayl yaratadi"
              ],
              [
                "<code>go test ./...</code>",
                "Barcha paketlardagi testlarni ishga tushiradi"
              ],
              [
                "<code>package salom</code>",
                "Papkadagi paket nomi; import yo'li modul nomidan boshlanadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "main.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n\n    \"example/hello/salom\"\n)\n\nfunc main() {\n    fmt.Println(salom.Xabar(\"Aziza\"))\n}",
            "output": "Salom, Aziza!",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Eksport va import",
            "html": "Boshqa paketdan ko'rinadigan nom <b>katta harf</b> bilan boshlanadi: <code>Xabar</code>. Kichik harf bilan boshlangan nom faqat paket ichida ishlatiladi. <code>salom</code> paketi <code>example/hello/salom</code> yo'li orqali import qilinadi. Uning <code>salom.go</code> faylida <code>package salom</code> va <code>func Xabar(ism string) string { return \"Salom, \" + ism + \"!\" }</code> bo'lishi kerak."
          },
          {
            "type": "code",
            "title": "alias.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    s \"strings\"\n)\n\nfunc main() {\n    matn := \"go modul\"\n\n    fmt.Println(s.ToUpper(matn))\n    fmt.Println(s.Contains(matn, \"modul\"))\n}",
            "output": "GO MODUL\ntrue",
            "runnable": false
          }
        ],
        "quiz": [
          {
            "q": "go.mod faylida asosan nima saqlanadi?",
            "options": ["Faqat testlar", "HTML sahifa", "Faqat kod", "Modul nomi, Go versiyasi va bog'liqliklar"],
            "answer": 3,
            "explain": "go.mod modul yo'lini, Go versiyasini va tashqi paketlar ro'yxatini saqlaydi."
          },
          {
            "q": "Boshqa paketdan ishlatilishi kerak bo'lgan nom qanday boshlanadi?",
            "options": ["Katta harf bilan", "Kichik harf bilan", "Pastki chiziq bilan", "Raqam bilan"],
            "answer": 0,
            "explain": "Go'da eksport nomi katta harf bilan boshlanadi; kichik harfli nomlar paket ichida qoladi."
          },
          {
            "q": "go build buyrug'i nima qiladi?",
            "options": ["Testlarni o'chiradi", "Bajariladigan fayl yaratadi", "Modulni internetdan yuklaydi", "Kodni formatlaydi"],
            "answer": 1,
            "explain": "go build paketni kompilyatsiya qilib, bajariladigan fayl yaratadi. go run esa darhol ishga tushiradi."
          }
        ]
      },
      {
        "id": 11,
        "title": "Fayllar, JSON va vaqt",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Amaliy dasturlar ma'lumotni faylga saqlaydi, JSON bilan almashadi va vaqt bilan ishlaydi. Go'da bularning barchasi standart kutubxonada: <code>os</code>, <code>encoding/json</code> va <code>time</code> paketlari yetarli."
          },
          {
            "type": "code",
            "title": "json.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Talaba struct {\n    Ism  string `json:\"ism\"`\n    Ball int    `json:\"ball\"`\n}\n\nfunc main() {\n    talaba := Talaba{Ism: \"Aziza\", Ball: 92}\n\n    data, err := json.Marshal(talaba)\n    if err != nil {\n        fmt.Println(\"Xato:\", err)\n        return\n    }\n    fmt.Println(string(data))\n\n    var qayta Talaba\n    if err := json.Unmarshal(data, &qayta); err != nil {\n        fmt.Println(\"Xato:\", err)\n        return\n    }\n    fmt.Println(qayta.Ism, qayta.Ball)\n}",
            "output": "{\"ism\":\"Aziza\",\"ball\":92}\nAziza 92",
            "runnable": false
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>os.ReadFile</code>",
                "Faylni to'liq o'qib, []byte qaytaradi"
              ],
              [
                "<code>os.WriteFile</code>",
                "Ma'lumotni faylga yozadi"
              ],
              [
                "<code>json.Marshal</code>",
                "Go qiymatini JSON matniga aylantiradi"
              ],
              [
                "<code>json.Unmarshal</code>",
                "JSON matnini Go qiymatiga to'ldiradi"
              ],
              [
                "<code>time.Format</code>",
                "Vaqtni andoza bo'yicha matnga aylantiradi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "fayl.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n    \"time\"\n)\n\nfunc main() {\n    xabar := []byte(\"Go fayllar bilan ishlaydi.\")\n    if err := os.WriteFile(\"eslatma.txt\", xabar, 0644); err != nil {\n        fmt.Println(\"Yozib bo'lmadi:\", err)\n        return\n    }\n\n    data, err := os.ReadFile(\"eslatma.txt\")\n    if err != nil {\n        fmt.Println(\"O'qib bo'lmadi:\", err)\n        return\n    }\n    fmt.Println(string(data))\n\n    sana := time.Date(2026, time.October, 23, 9, 30, 0, 0, time.UTC)\n    fmt.Println(sana.Format(\"2006-01-02 15:04\"))\n}",
            "output": "Go fayllar bilan ishlaydi.\n2026-10-23 09:30",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Vaqt andozasi va JSON teglari",
            "html": "Go'da vaqt andozasi — <code>2006-01-02 15:04</code> kabi tayyor namuna sana. JSON'da faqat katta harf bilan boshlangan maydonlar chiqadi. Maydon nomini o'zgartirish uchun struct teg ishlatiladi: <code>json:\"ism\"</code>."
          }
        ],
        "quiz": [
          {
            "q": "json.Marshal qanday natija qaytaradi?",
            "options": ["Fayl nomini", "Obyektni", "JSON matni ([]byte) va error", "Faqat sonni"],
            "answer": 2,
            "explain": "json.Marshal qiymatni JSON baytlariga aylantiradi va xato bo'lsa error qaytaradi."
          },
          {
            "q": "Faylni to'liq o'qish uchun qaysi funksiya ishlatiladi?",
            "options": ["fmt.Println", "json.Unmarshal", "os.WriteFile", "os.ReadFile"],
            "answer": 3,
            "explain": "os.ReadFile fayl mazmunini []byte sifatida qaytaradi. Uni string(data) bilan matnga aylantirish mumkin."
          },
          {
            "q": "time.Format andozasida yil uchun qaysi namuna olinadi?",
            "options": ["2006", "01", "15", "2026"],
            "answer": 0,
            "explain": "Go vaqt andozasi 2006-01-02 15:04 ko'rinishidagi havola vaqtdan foydalanadi. 2006 — yil namunasi."
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
            "html": "O'rganganlarimizni birlashtiramiz. Struct, slice, metodlar va saralash yordamida vazifalarni qo'shadigan, bajarilganini belgilaydigan va qolganlarini sanaydigan konsol dasturini yozamiz. Kiritishni kutmaslik uchun vazifalar kod ichida beriladi — natija har doim bir xil bo'ladi."
          },
          {
            "type": "code",
            "title": "main.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sort\"\n)\n\ntype Vazifa struct {\n    Nom       string\n    Bajarildi bool\n}\n\ntype Royxat struct {\n    Vazifalar []Vazifa\n}\n\nfunc (r *Royxat) Qosh(nom string) {\n    r.Vazifalar = append(r.Vazifalar, Vazifa{Nom: nom})\n}\n\nfunc (r *Royxat) Bajar(indeks int) {\n    if indeks >= 0 && indeks < len(r.Vazifalar) {\n        r.Vazifalar[indeks].Bajarildi = true\n    }\n}\n\nfunc (r Royxat) Chiqar() {\n    for i, v := range r.Vazifalar {\n        holat := \"[ ]\"\n        if v.Bajarildi {\n            holat = \"[x]\"\n        }\n        fmt.Printf(\"%d. %s %s\\n\", i+1, holat, v.Nom)\n    }\n}\n\nfunc (r Royxat) Qolgan() int {\n    soni := 0\n    for _, v := range r.Vazifalar {\n        if !v.Bajarildi {\n            soni++\n        }\n    }\n    return soni\n}\n\nfunc main() {\n    royxat := Royxat{}\n    royxat.Qosh(\"Go o'rnatish\")\n    royxat.Qosh(\"Birinchi dastur yozish\")\n    royxat.Qosh(\"Testlarni o'rganish\")\n    royxat.Bajar(0)\n\n    royxat.Chiqar()\n    fmt.Println(\"Qolgan vazifalar:\", royxat.Qolgan())\n\n    ismlar := []string{}\n    for _, v := range royxat.Vazifalar {\n        if !v.Bajarildi {\n            ismlar = append(ismlar, v.Nom)\n        }\n    }\n    sort.Strings(ismlar)\n    fmt.Println(\"Saralangan:\", ismlar)\n}",
            "output": "1. [x] Go o'rnatish\n2. [ ] Birinchi dastur yozish\n3. [ ] Testlarni o'rganish\nQolgan vazifalar: 2\nSaralangan: [Birinchi dastur yozish Testlarni o'rganish]",
            "runnable": false
          },
          {
            "type": "ul",
            "items": [
              "Ma'lumot modeli: <code>Vazifa</code> struct'i va <code>Royxat</code> ichidagi slice.",
              "Qo'shish: pointer receiver bilan <code>append</code>.",
              "Belgilash: indeks chegarasini tekshirib, maydonni o'zgartirish.",
              "Hisoblash va saralash: tsikl, <code>sort.Strings</code>."
            ]
          },
          {
            "type": "code",
            "title": "saqlash.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Vazifa struct {\n    Nom       string `json:\"nom\"`\n    Bajarildi bool   `json:\"bajarildi\"`\n}\n\nfunc main() {\n    vazifalar := []Vazifa{\n        {Nom: \"Go o'rnatish\", Bajarildi: true},\n        {Nom: \"Mini loyiha yozish\"},\n    }\n\n    data, err := json.MarshalIndent(vazifalar, \"\", \"  \")\n    if err != nil {\n        fmt.Println(\"Xato:\", err)\n        return\n    }\n    fmt.Println(string(data))\n}",
            "output": "[\n  {\n    \"nom\": \"Go o'rnatish\",\n    \"bajarildi\": true\n  },\n  {\n    \"nom\": \"Mini loyiha yozish\",\n    \"bajarildi\": false\n  }\n]",
            "runnable": false
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Loyihani kengaytiring",
            "html": "Vazifani o'chirish, nom bo'yicha qidirish yoki fayldan yuklashni qo'shib ko'ring. Keyingi qadamda ma'lumotni <code>os.WriteFile</code> bilan saqlab, dastur qayta ishga tushganda <code>os.ReadFile</code> orqali tiklang. Har bir qo'shimcha — yangi amaliyot."
          }
        ],
        "quiz": [
          {
            "q": "Loyihada vazifalar ro'yxati qaysi turda saqlanadi?",
            "options": ["map[string]bool", "[]Vazifa", "chan Vazifa", "string"],
            "answer": 1,
            "explain": "Royxat struct'i ichida Vazifa struct'laridan iborat slice saqlanadi."
          },
          {
            "q": "Royxatga vazifa qo'shuvchi metod slice'ni o'zgartirishi uchun receiver qanday bo'lishi kerak?",
            "options": ["[]Vazifa", "Royxat", "*Royxat", "Vazifa"],
            "answer": 2,
            "explain": "Pointer receiver (*Royxat) append natijasini asl struct ichiga yozadi. Qiymat receiver'ida o'zgarish yo'qoladi."
          },
          {
            "q": "json.MarshalIndent nimasi bilan foydali?",
            "options": ["Faqat sonlarni saqlaydi", "Kanal yaratadi", "Faylni o'chiradi", "O'qishli, chekinishlar bilan JSON yasaydi"],
            "answer": 3,
            "explain": "MarshalIndent har bir darajani chekinish bilan chiqaradi, shuning uchun JSON'ni o'qish osonroq."
          }
        ]
      },
      {
        "id": 13,
        "title": "Slice ichki tuzilishi: len, cap va massiv",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Slice oddiy ro'yxatga o'xshaydi, lekin uning ichida uchta qiymat bor: massivga ko'rsatkich, uzunlik (<code>len</code>) va sig'im (<code>cap</code>). Slice o'zi ma'lumotni saqlamaydi — u orqasidagi massivning bir bo'lagini ko'rsatadi. Buni tushunish slice bilan bog'liq kutilmagan o'zgarishlarning oldini oladi."
          },
          {
            "type": "code",
            "title": "slice-header.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    massiv := [3]int{1, 2, 3}\n    nusxa := massiv\n    nusxa[0] = 99\n    fmt.Println(\"array:\", massiv, nusxa)\n\n    asl := []int{10, 20, 30, 40}\n    bolak := asl[1:3]\n    bolak[0] = 200\n    fmt.Println(\"asl:\", asl)\n    fmt.Println(\"bolak:\", bolak, len(bolak), cap(bolak))\n\n    s := make([]int, 0, 2)\n    fmt.Println(\"bosh:\", len(s), cap(s))\n    s = append(s, 1, 2)\n    fmt.Println(\"to'ldi:\", len(s), cap(s))\n    s = append(s, 3)\n    fmt.Println(\"o'sdi:\", len(s), cap(s))\n}",
            "output": "array: [1 2 3] [99 2 3]\nasl: [10 200 30 40]\nbolak: [200 30] 2 3\nbosh: 0 2\nto'ldi: 2 2\no'sdi: 3 4"
          },
          {
            "type": "table",
            "head": [
              "Ifoda",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>len(s)</code>",
                "Slice'da hozir nechta element bor"
              ],
              [
                "<code>cap(s)</code>",
                "Qayta massiv ajratmasdan nechta element sig'adi"
              ],
              [
                "<code>s[1:3]</code>",
                "1-indeksdan 3-indeksgacha (3 kirmaydi) bo'lak"
              ],
              [
                "<code>make([]int, 2, 5)</code>",
                "Uzunligi 2, sig'imi 5 bo'lgan slice"
              ],
              [
                "<code>append(s, x)</code>",
                "Element qo'shadi; sig'im yetmasa yangi massiv oladi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "aliasing.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    a := make([]int, 3, 5)\n    a[0], a[1], a[2] = 1, 2, 3\n\n    b := append(a, 4)\n    c := append(a, 5)\n    fmt.Println(\"a:\", a, len(a), cap(a))\n    fmt.Println(\"b:\", b)\n    fmt.Println(\"c:\", c)\n    fmt.Println(\"b[3]:\", b[3], \"c[3]:\", c[3])\n\n    x := []int{1, 2, 3}\n    y := make([]int, len(x))\n    copy(y, x)\n    y[0] = 100\n    fmt.Println(\"x:\", x, \"y:\", y)\n}",
            "output": "a: [1 2 3] 3 5\nb: [1 2 3 5]\nc: [1 2 3 5]\nb[3]: 5 c[3]: 5\nx: [1 2 3] y: [100 2 3]"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Bo'lak — nusxa emas",
            "html": "<code>asl[1:3]</code> yangi xotira ajratmaydi, u o'sha massivning bir qismini ko'rsatadi. Shuning uchun bo'lakni o'zgartirish asl slice'ga ham ta'sir qiladi. Mustaqil nusxa kerak bo'lsa <code>slices.Clone(s)</code> yoki <code>copy</code> ishlatiladi. <code>append</code> esa sig'im yetganda yangi massiv oladi — o'shanda eski va yangi slice ajralib qoladi."
          }
        ],
        "quiz": [
          {
            "q": "cap(s) qanday qiymat qaytaradi?",
            "options": ["Yangi massiv ajratmasdan sig'adigan elementlar sonini", "Oxirgi elementning indeksini", "Slice egallagan baytlar sonini", "Slice'dagi elementlar sonini"],
            "answer": 0,
            "explain": "cap — sig'im: slice orqasidagi massivda qancha element uchun joy borligini bildiradi. len esa hozir ishlatilayotgan elementlar soni."
          },
          {
            "q": "s[1:3] bo'lagi olinganda xotira jihatidan nima sodir bo'ladi?",
            "options": ["Butun slice nusxalanadi", "Yangi slice asl massivning bir qismini ko'rsatadi", "Har doim yangi massiv ajratiladi", "Slice nil bo'lib qoladi"],
            "answer": 1,
            "explain": "Bo'laklash massivni nusxalamaydi: yangi slice o'sha qayta massivning ko'rsatilgan oralig'ini ko'radi."
          },
          {
            "q": "append paytida mavjud sig'im yetmasa nima bo'ladi?",
            "options": ["Funksiya xato qaytaradi", "Panic yuz beradi", "Yangi, kattaroq massiv ajratiladi", "Element jimgina tashlab yuboriladi"],
            "answer": 2,
            "explain": "Sig'im yetmasa Go kattaroq massiv ajratib, elementlarni ko'chiradi va yangi slice qaytaradi. Shuning uchun append natijasini qayta berish kerak."
          }
        ]
      },
      {
        "id": 14,
        "title": "Slice amallari: nusxalash, o'chirish va qo'shish",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Go 1.21 da <code>slices</code> paketi paydo bo'ldi: unda saralash, qidirish, nusxalash va o'chirish uchun tayyor funksiyalar bor. Ular generic bo'lgani uchun har xil element turlari bilan ishlaydi. Qo'shish va o'chirishning ichki mexanizmini bilish esa xotira bilan ehtiyotkor ishlashga yordam beradi."
          },
          {
            "type": "code",
            "title": "slices-paketi.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"slices\"\n)\n\nfunc main() {\n    sonlar := []int{5, 2, 9, 2, 7}\n    slices.Sort(sonlar)\n    fmt.Println(\"sorted:\", sonlar)\n    fmt.Println(\"contains 9:\", slices.Contains(sonlar, 9))\n    fmt.Println(\"index 7:\", slices.Index(sonlar, 7))\n\n    nusxa := slices.Clone(sonlar)\n    nusxa[0] = 100\n    fmt.Println(\"asl:\", sonlar)\n    fmt.Println(\"nusxa:\", nusxa)\n\n    juft := slices.DeleteFunc(nusxa, func(n int) bool {\n        return n%2 != 0\n    })\n    fmt.Println(\"juft:\", juft)\n}",
            "output": "sorted: [2 2 5 7 9]\ncontains 9: true\nindex 7: 3\nasl: [2 2 5 7 9]\nnusxa: [100 2 5 7 9]\njuft: [100 2]"
          },
          {
            "type": "table",
            "head": [
              "Funksiya",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>slices.Sort(s)</code>",
                "Slice'ni o'sish tartibida saralaydi"
              ],
              [
                "<code>slices.Contains(s, x)</code>",
                "Element bor-yo'qligini bildiradi"
              ],
              [
                "<code>slices.Index(s, x)</code>",
                "Birinchi moslik indeksini qaytaradi, topilmasa -1"
              ],
              [
                "<code>slices.Clone(s)</code>",
                "Yangi massivdagi mustaqil nusxani qaytaradi"
              ],
              [
                "<code>slices.Delete(s, i, j)</code>",
                "i dan j gacha elementlarni olib tashlaydi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "qolda-amallar.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc ochir(s []int, i int) []int {\n    return append(s[:i], s[i+1:]...)\n}\n\nfunc qosh(s []int, i, v int) []int {\n    s = append(s, 0)\n    copy(s[i+1:], s[i:])\n    s[i] = v\n    return s\n}\n\nfunc main() {\n    s := []int{10, 20, 30, 40}\n    s = ochir(s, 1)\n    fmt.Println(s)\n\n    s = qosh(s, 1, 99)\n    fmt.Println(s)\n    fmt.Println(len(s), cap(s))\n}",
            "output": "[10 30 40]\n[10 99 30 40]\n4 4"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Xotirani bo'shatish",
            "html": "Element o'chirilganda slice uzunligi kamayadi, lekin orqadagi massivda eski qiymat qolishi mumkin. Katta obyektlar saqlanib qolmasligi uchun <code>slices.Delete</code> bo'shagan joyni nol qiymat bilan tozalaydi. Qo'lda o'chirishda ham <code>s[len(s)-1] = 0; s = s[:len(s)-1]</code> kabi usuldan foydalanish mumkin."
          }
        ],
        "quiz": [
          {
            "q": "Go 1.21 da slice'ni saralash uchun qaysi chaqiruv ishlatiladi?",
            "options": ["arrays.Sort(s)", "math.Sort(s)", "sort.Array(s)", "slices.Sort(s)"],
            "answer": 3,
            "explain": "slices.Sort generic funksiyasi slice elementlarini o'sish tartibida joylashtiradi. sort.Slice ham bor, lekin u kamroq tip-xavfsiz."
          },
          {
            "q": "slices.Clone nimani qaytaradi?",
            "options": ["Yangi massivdagi mustaqil nusxani", "Asl slice'ga havolani", "Faqat uzunlikni", "Saralangan slice'ni"],
            "answer": 0,
            "explain": "Clone elementlarni yangi massivga ko'chiradi. Nusxani o'zgartirish asl slice'ga ta'sir qilmaydi."
          },
          {
            "q": "O'chirilgan elementning xotirasi slice uzunligi kamayishi bilan darhol bo'shaydimi?",
            "options": ["Ha, har doim darhol bo'shaydi", "Yo'q, orqadagi massivda eski qiymat qolishi mumkin", "Faqat map uchun bo'shaydi", "Faqat cap nolga teng bo'lsa"],
            "answer": 1,
            "explain": "len kamayadi, ammo qayta massiv saqlanib qoladi. Katta obyektlar uchun bo'shagan joyni nol qiymat bilan tozalash tavsiya etiladi."
          }
        ]
      },
      {
        "id": 15,
        "title": "Map chuqurroq: to'plam, guruhlash va tartib",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Map kalit bo'yicha qiymat saqlaydi va o'rtacha hisobda juda tez qidiradi. Uning kalitlari <b>taqqoslanadigan</b> turlar bo'lishi kerak: string, int, struct kabi. Map'dagi tartib kafolatlanmaydi, shuning uchun natijani chiqarishdan oldin kalitlarni saralash odatiy amaliyotdir."
          },
          {
            "type": "code",
            "title": "hisoblash.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sort\"\n)\n\nfunc main() {\n    sozlar := []string{\"olma\", \"anor\", \"olma\", \"uzum\", \"anor\", \"olma\"}\n    soni := make(map[string]int)\n    for _, s := range sozlar {\n        soni[s]++\n    }\n\n    kalitlar := make([]string, 0, len(soni))\n    for k := range soni {\n        kalitlar = append(kalitlar, k)\n    }\n    sort.Strings(kalitlar)\n    for _, k := range kalitlar {\n        fmt.Printf(\"%s: %d\\n\", k, soni[k])\n    }\n\n    toplam := map[string]struct{}{}\n    for _, s := range sozlar {\n        toplam[s] = struct{}{}\n    }\n    fmt.Println(\"noyob:\", len(toplam))\n}",
            "output": "anor: 2\nolma: 3\nuzum: 1\nnoyob: 3"
          },
          {
            "type": "table",
            "head": [
              "Amal",
              "Yozuv"
            ],
            "rows": [
              [
                "Yaratish",
                "<code>m := map[string]int{}</code>"
              ],
              [
                "O'qish",
                "<code>m[\"go\"]</code> — yo'q kalitda nol qiymat"
              ],
              [
                "Borligini tekshirish",
                "<code>v, ok := m[\"go\"]</code>"
              ],
              [
                "Yozish",
                "<code>m[\"go\"] = 5</code>"
              ],
              [
                "O'chirish",
                "<code>delete(m, \"go\")</code>"
              ],
              [
                "Nil map",
                "<code>var m map[string]int</code> — o'qish mumkin, yozish panic"
              ]
            ]
          },
          {
            "type": "code",
            "title": "guruhlash.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sort\"\n)\n\ntype Talaba struct {\n    Ism   string\n    Guruh string\n}\n\nfunc main() {\n    talabalar := []Talaba{\n        {\"Aziza\", \"A1\"}, {\"Bek\", \"B2\"}, {\"Dilnoza\", \"A1\"}, {\"Eldor\", \"B2\"},\n    }\n\n    guruhlar := make(map[string][]string)\n    for _, t := range talabalar {\n        guruhlar[t.Guruh] = append(guruhlar[t.Guruh], t.Ism)\n    }\n\n    nomlar := make([]string, 0, len(guruhlar))\n    for g := range guruhlar {\n        nomlar = append(nomlar, g)\n    }\n    sort.Strings(nomlar)\n    for _, g := range nomlar {\n        fmt.Println(g, guruhlar[g])\n    }\n\n    delete(guruhlar, \"B2\")\n    _, bor := guruhlar[\"B2\"]\n    fmt.Println(\"B2 bor:\", bor)\n\n    var bosh map[string]int\n    fmt.Println(bosh == nil, len(bosh))\n}",
            "output": "A1 [Aziza Dilnoza]\nB2 [Bek Eldor]\nB2 bor: false\ntrue 0"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Tartibga tayanmang",
            "html": "Map ustidagi <code>for range</code> tartibi har safar boshqacha bo'lishi mumkin. Barqaror chiqish kerak bo'lsa, kalitlarni slice'ga yig'ib saralang. Go 1.21 dagi <code>maps.Keys</code> va <code>maps.Values</code> iterator qaytaradi; ularni <code>slices.Collect</code> bilan yig'ish mumkin. Nil map'ga yozish panic beradi, shuning uchun map'ni doim <code>make</code> yoki literal bilan yarating."
          }
        ],
        "quiz": [
          {
            "q": "Map'da kalit borligini ishonchli qanday aniqlash mumkin?",
            "options": ["len(m) ni tekshirib", "Map'ni saralab", "v, ok := m[kalit] yozuvi bilan", "Faqat v := m[kalit] bilan"],
            "answer": 2,
            "explain": "Comma-ok yozuvi qiymat bilan birga kalit mavjudligini bildiruvchi bool qaytaradi. Nol qiymat ham haqiqiy qiymat bo'lishi mumkinligi uchun bu muhim."
          },
          {
            "q": "Nil map'ga yangi kalit yozilsa nima bo'ladi?",
            "options": ["Faqat ogohlantirish chiqadi", "Kalit jimgina qo'shiladi", "Map avtomatik yaratiladi", "Panic yuz beradi"],
            "answer": 3,
            "explain": "Nil map'da xotira ajratilmagan, shuning uchun yozish panic beradi. O'qish va len esa xavfsiz ishlaydi."
          },
          {
            "q": "Map kalitlarining chiqish tartibi haqida nima deyish mumkin?",
            "options": ["Kafolatlanmagan, har safar o'zgarishi mumkin", "Har doim alifbo tartibida", "Faqat string kalitlarda tartibli", "Har doim kiritilish tartibida"],
            "answer": 0,
            "explain": "Go map ustidagi iteratsiya tartibini kafolatlamaydi. Barqaror natija uchun kalitlarni alohida saralash kerak."
          }
        ]
      },
      {
        "id": 16,
        "title": "Matnlar, rune va strings paketi",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Go'da <code>string</code> — o'zgarmas baytlar ketma-ketligi, odatda UTF-8 kodlashda. Har bir belgi bir baytdan ko'p joy olishi mumkin, shuning uchun <code>len</code> har doim ham belgilar sonini bermaydi. Belgilar bilan ishlash uchun <code>rune</code> (bitta Unicode belgisi) va <code>range</code> ishlatiladi."
          },
          {
            "type": "code",
            "title": "bayt-va-rune.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"unicode/utf8\"\n)\n\nfunc main() {\n    matn := \"Go o'zbekcha: salom\"\n    fmt.Println(len(matn))\n    fmt.Println(utf8.RuneCountInString(matn))\n\n    for i, r := range \"Aziza\" {\n        fmt.Printf(\"%d:%c\\n\", i, r)\n    }\n\n    soz := \"kitob\"\n    baytlar := []byte(soz)\n    baytlar[0] = 'K'\n    fmt.Println(string(baytlar))\n}",
            "output": "19\n19\n0:A\n1:z\n2:i\n3:z\n4:a\nKitob"
          },
          {
            "type": "ul",
            "items": [
              "<code>len(s)</code> — baytlar soni, <code>utf8.RuneCountInString(s)</code> — Unicode belgilar soni.",
              "<code>s[i]</code> — bitta bayt qaytaradi, <code>for _, r := range s</code> — rune'lar bo'ylab yuradi.",
              "String o'zgarmas: <code>s[0] = 'X'</code> yozib bo'lmaydi, yangi string yaratish kerak.",
              "Ko'p bo'laklarni birlashtirishda <code>strings.Builder</code> samarali."
            ]
          },
          {
            "type": "code",
            "title": "strings-paketi.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    gap := \"  Go — sodda va tez  \"\n    toza := strings.TrimSpace(gap)\n    fmt.Println(strings.ToUpper(toza))\n    fmt.Println(strings.Contains(toza, \"tez\"))\n    fmt.Println(strings.Split(\"a,b,c\", \",\"))\n    fmt.Println(strings.Join([]string{\"2026\", \"10\", \"23\"}, \"-\"))\n\n    var b strings.Builder\n    for i := 1; i <= 3; i++ {\n        fmt.Fprintf(&b, \"%d;\", i)\n    }\n    fmt.Println(b.String())\n}",
            "output": "GO — SODDA VA TEZ\ntrue\n[a b c]\n2026-10-23\n1;2;3;"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Qaysi usulni tanlash?",
            "html": "Kichik matnlarni <code>+</code> bilan birlashtirish mumkin. Tsikl ichida yuzlab marta <code>+</code> ishlatish har safar yangi string yaratadi va sekinlashadi — bunday joyda <code>strings.Builder</code> ishlating. <code>strings</code> paketi qidirish, almashtirish, kesish va prefiks tekshirish funksiyalarini beradi."
          }
        ],
        "quiz": [
          {
            "q": "len(\"Aziza\") qanday natija beradi?",
            "options": ["10", "5", "4", "6"],
            "answer": 1,
            "explain": "Bu matndagi barcha harflar ASCII, har biri bir bayt. Shuning uchun baytlar soni ham, belgilar soni ham 5."
          },
          {
            "q": "UTF-8 matnda range tsikli indeks sifatida nimani beradi?",
            "options": ["Har doim belgi tartib raqamini", "Rune qiymatini", "Belgining boshlanadigan bayt indeksini", "Baytlar sonini"],
            "answer": 2,
            "explain": "range ikkinchi qiymat sifatida rune beradi, birinchi qiymat esa shu belgi boshlanadigan bayt indeksidir. Ko'p baytli belgilarda indeks sakrab o'tadi."
          },
          {
            "q": "strings.Builder qachon ayniqsa foydali?",
            "options": ["Faylni o'qiganda", "Map kalitlarini saralaganda", "Bitta stringni solishtirganda", "Tsikl ichida ko'p bo'laklarni birlashtirganda"],
            "answer": 3,
            "explain": "Builder ichki buferga yozadi va har safar yangi string yaratmaydi. Bu tsikldagi ko'p birlashtirishlarda xotira va vaqtni tejaydi."
          }
        ]
      },
      {
        "id": 17,
        "title": "Saralash va qidirish: sort va slices",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Saralash — ma'lumotni qulay ko'rish va tez qidirishning asosi. Go'da <code>sort</code> paketi uzoq vaqtdan beri mavjud, Go 1.21 dan boshlab esa <code>slices</code> paketi generic va tip-xavfsiz yechimlarni beradi. Struct'larni bir nechta maydon bo'yicha saralash uchun taqqoslash funksiyasi yoziladi."
          },
          {
            "type": "code",
            "title": "narx-boyicha.go",
            "code": "package main\n\nimport (\n    \"cmp\"\n    \"fmt\"\n    \"slices\"\n)\n\ntype Mahsulot struct {\n    Nom  string\n    Narx int\n}\n\nfunc main() {\n    mahsulotlar := []Mahsulot{\n        {\"Kitob\", 45000},\n        {\"Ruchka\", 8000},\n        {\"Sumka\", 120000},\n        {\"Daftar\", 12000},\n    }\n\n    slices.SortFunc(mahsulotlar, func(a, b Mahsulot) int {\n        return cmp.Compare(a.Narx, b.Narx)\n    })\n    for _, m := range mahsulotlar {\n        fmt.Printf(\"%s: %d\\n\", m.Nom, m.Narx)\n    }\n\n    narxlar := []int{8000, 12000, 45000, 120000}\n    i, bor := slices.BinarySearch(narxlar, 45000)\n    fmt.Println(i, bor)\n}",
            "output": "Ruchka: 8000\nDaftar: 12000\nKitob: 45000\nSumka: 120000\n2 true"
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Qachon ishlatiladi"
            ],
            "rows": [
              [
                "<code>sort.Ints</code>",
                "Butun sonlardan iborat slice uchun"
              ],
              [
                "<code>slices.Sort(s)</code>",
                "Tartiblanadigan oddiy turlar uchun"
              ],
              [
                "<code>slices.SortFunc(s, f)</code>",
                "Struct yoki murakkab mezon bo'yicha"
              ],
              [
                "<code>sort.Slice(s, f)</code>",
                "Eski kodda uchraydigan reflection usuli"
              ],
              [
                "<code>slices.BinarySearch(s, x)</code>",
                "Saralangan slice'da tez qidirish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "barqaror-saralash.go",
            "code": "package main\n\nimport (\n    \"cmp\"\n    \"fmt\"\n    \"slices\"\n)\n\ntype Xodim struct {\n    Ism   string\n    Yoshi int\n}\n\nfunc main() {\n    xodimlar := []Xodim{\n        {\"Aziza\", 30}, {\"Bek\", 25}, {\"Dilnoza\", 30}, {\"Eldor\", 25},\n    }\n\n    slices.SortStableFunc(xodimlar, func(a, b Xodim) int {\n        if c := cmp.Compare(a.Yoshi, b.Yoshi); c != 0 {\n            return c\n        }\n        return cmp.Compare(a.Ism, b.Ism)\n    })\n\n    for _, x := range xodimlar {\n        fmt.Printf(\"%s (%d)\\n\", x.Ism, x.Yoshi)\n    }\n}",
            "output": "Bek (25)\nEldor (25)\nAziza (30)\nDilnoza (30)"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Taqqoslash funksiyasi",
            "html": "Taqqoslash funksiyasi manfiy son qaytarsa <code>a</code> oldin, musbat son qaytarsa <code>b</code> oldin turadi, nol esa tenglikni bildiradi. <code>cmp.Compare</code> shu qoidaga mos natija beradi. <code>BinarySearch</code> faqat saralangan slice'da to'g'ri ishlaydi; saralanmagan ma'lumotda natija ishonchsiz bo'ladi."
          }
        ],
        "quiz": [
          {
            "q": "slices.SortFunc uchun taqqoslash funksiyasi qanday qiymat qaytarishi kerak?",
            "options": ["Manfiy, nol yoki musbat son", "Faqat 0 yoki 1", "Saralangan slice", "Faqat true yoki false"],
            "answer": 0,
            "explain": "Manfiy natija birinchi argument oldin, musbat natija ikkinchi argument oldin turishini bildiradi; nol tenglikni bildiradi."
          },
          {
            "q": "slices.BinarySearch qanday slice'da ishlaydi?",
            "options": ["Faqat string slice'da", "Faqat saralangan slice'da", "Istalgan tartibdagi slice'da", "Faqat bo'sh slice'da"],
            "answer": 1,
            "explain": "Ikkilik qidiruv o'rtani kesib boradi, shuning uchun ma'lumot avval saralangan bo'lishi shart."
          },
          {
            "q": "Teng qiymatlarning dastlabki tartibini saqlab qolish uchun qaysi funksiya ishlatiladi?",
            "options": ["slices.Sort", "slices.BinarySearch", "slices.SortStableFunc", "sort.Ints"],
            "answer": 2,
            "explain": "SortStableFunc barqaror saralash bajaradi: teng elementlar asl nisbiy tartibida qoladi."
          }
        ]
      },
      {
        "id": 18,
        "title": "Generikalar asoslari: type parameters",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Go 1.18 dan boshlab generik funksiyalar mavjud. Ular bir xil mantiqni turli turlar uchun takror yozmaslik imkonini beradi. Tur parametri kvadrat qavs ichida e'lon qilinadi: <code>func Yigindi[T int | float64](s []T) T</code>. Cheklov (constraint) esa <code>T</code> qanday turlarni qabul qilishini belgilaydi."
          },
          {
            "type": "code",
            "title": "generik-funksiya.go",
            "code": "package main\n\nimport (\n    \"cmp\"\n    \"fmt\"\n)\n\nfunc Yigindi[T int | float64](sonlar []T) T {\n    var jami T\n    for _, s := range sonlar {\n        jami += s\n    }\n    return jami\n}\n\nfunc Katta[T cmp.Ordered](a, b T) T {\n    if a > b {\n        return a\n    }\n    return b\n}\n\nfunc main() {\n    fmt.Println(Yigindi([]int{1, 2, 3, 4}))\n    fmt.Println(Yigindi([]float64{1.5, 2.5}))\n    fmt.Println(Katta(10, 7))\n    fmt.Println(Katta(\"a\", \"b\"))\n}",
            "output": "10\n4\n10\nb"
          },
          {
            "type": "table",
            "head": [
              "Constraint",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>any</code>",
                "Har qanday tur, hech qanday amal kafolatlanmaydi"
              ],
              [
                "<code>comparable</code>",
                "Taqqoslash mumkin bo'lgan turlar; map kaliti bo'ladi"
              ],
              [
                "<code>cmp.Ordered</code>",
                "Sonlar va stringlar; <code>&lt;</code>, <code>&gt;</code> mumkin"
              ],
              [
                "<code>~int</code>",
                "Asosi int bo'lgan barcha turlar, jumladan <code>type Ball int</code>"
              ]
            ]
          },
          {
            "type": "code",
            "title": "generik-struct.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Juft[T any] struct {\n    Birinchi  T\n    Ikkinchi  T\n}\n\nfunc (j Juft[T]) Almash() Juft[T] {\n    return Juft[T]{Birinchi: j.Ikkinchi, Ikkinchi: j.Birinchi}\n}\n\ntype Son interface {\n    ~int | ~float64\n}\n\nfunc Ortacha[T Son](sonlar []T) float64 {\n    var jami T\n    for _, s := range sonlar {\n        jami += s\n    }\n    return float64(jami) / float64(len(sonlar))\n}\n\nfunc main() {\n    j := Juft[string]{\"chap\", \"o'ng\"}\n    fmt.Println(j.Almash())\n    fmt.Println(Ortacha([]int{10, 20, 30}))\n\n    type Ball int\n    fmt.Println(Ortacha([]Ball{5, 10}))\n}",
            "output": "{o'ng chap}\n20\n7.5"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Generikani ortiqcha ishlatmang",
            "html": "Har bir funksiyani generic qilish shart emas. Agar mantiq faqat bitta aniq tur uchun kerak bo'lsa, oddiy funksiya sodda va tezroq o'qiladi. Generic asosan bir xil algoritm bir nechta turga qo'llanadigan joyda foydali: kolleksiyalar, saralash, xarita va filtr funksiyalari. Metodga yangi tur parametri qo'shib bo'lmaydi — u faqat receiver turidan foydalanadi."
          }
        ],
        "quiz": [
          {
            "q": "Generic funksiyada tur parametri qanday e'lon qilinadi?",
            "options": ["func F(x any[T])", "func F<T>(x T)", "func F(x T) any", "func F[T any](x T)"],
            "answer": 3,
            "explain": "Tur parametri funksiya nomidan keyin kvadrat qavs ichida, oddiy parametrlardan oldin yoziladi."
          },
          {
            "q": "comparable constraint qanday turlarni qamrab oladi?",
            "options": ["== va != bilan taqqoslanadigan turlarni", "Faqat slice'larni", "Faqat sonlarni", "Faqat stringlarni"],
            "answer": 0,
            "explain": "comparable taqqoslash operatorlari qo'llanadigan turlarni bildiradi. Shu sababli bunday turni map kaliti sifatida ishlatish ham mumkin."
          },
          {
            "q": "~int cheklovi nimani anglatadi?",
            "options": ["Faqat int turini", "Asosi int bo'lgan barcha turlarni", "Faqat musbat sonlarni", "int va stringni"],
            "answer": 1,
            "explain": "Tilda ~ belgisi asosiy turi int bo'lgan barcha aniqlangan turlarni ham qamrab oladi, masalan type Ball int."
          }
        ]
      },
      {
        "id": 19,
        "title": "Generik kolleksiyalar: Map, Filter va Set",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Generik funksiyalar kod takrorini kamaytiradi. Go'da <code>Map</code>, <code>Filter</code> va <code>Reduce</code> kabi yordamchi funksiyalarni bir marta yozib, turli element turlari bilan ishlatish mumkin. Lekin har bir abstraksiya o'z narxiga ega: oddiy tsikl ko'pincha o'qishga qulayroq bo'ladi."
          },
          {
            "type": "code",
            "title": "map-filter.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc Map[T, U any](s []T, f func(T) U) []U {\n    natija := make([]U, 0, len(s))\n    for _, v := range s {\n        natija = append(natija, f(v))\n    }\n    return natija\n}\n\nfunc Filter[T any](s []T, f func(T) bool) []T {\n    natija := make([]T, 0, len(s))\n    for _, v := range s {\n        if f(v) {\n            natija = append(natija, v)\n        }\n    }\n    return natija\n}\n\nfunc main() {\n    sonlar := []int{1, 2, 3, 4, 5}\n    kvadratlar := Map(sonlar, func(n int) int { return n * n })\n    juftlar := Filter(kvadratlar, func(n int) bool { return n%2 == 0 })\n    ismlar := Map(sonlar, func(n int) string {\n        return fmt.Sprintf(\"n%d\", n)\n    })\n\n    fmt.Println(kvadratlar)\n    fmt.Println(juftlar)\n    fmt.Println(ismlar)\n}",
            "output": "[1 4 9 16 25]\n[4 16]\n[n1 n2 n3 n4 n5]"
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
                "<code>Map</code>",
                "Slice va o'zgartirish funksiyasi",
                "Yangi turdagi slice"
              ],
              [
                "<code>Filter</code>",
                "Slice va shart funksiyasi",
                "Shartni qanoatlantirgan elementlar"
              ],
              [
                "<code>Reduce</code>",
                "Slice va yig'uvchi funksiya",
                "Bitta jamlangan qiymat"
              ],
              [
                "<code>Set[T]</code>",
                "Taqqoslanadigan kalitlar",
                "Takrorlanmaydigan to'plam"
              ]
            ]
          },
          {
            "type": "code",
            "title": "generic-set.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Set[T comparable] map[T]struct{}\n\nfunc (s Set[T]) Qosh(v T) {\n    s[v] = struct{}{}\n}\n\nfunc (s Set[T]) Bor(v T) bool {\n    _, ok := s[v]\n    return ok\n}\n\nfunc main() {\n    s := make(Set[string])\n    s.Qosh(\"go\")\n    s.Qosh(\"sql\")\n    s.Qosh(\"go\")\n\n    fmt.Println(len(s), s.Bor(\"sql\"), s.Bor(\"rust\"))\n\n    raqamlar := Set[int]{1: {}, 2: {}, 3: {}}\n    delete(raqamlar, 2)\n    fmt.Println(len(raqamlar))\n}",
            "output": "2 true false\n2"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Nol qiymat va xotira",
            "html": "<code>Set[T]</code> — map ustidagi yengil qobiq. <code>struct{}</code> xotira egallamaydi, shuning uchun to'plam faqat kalitlarni saqlaydi. Generic turdagi literal yaratishda tur argumentini ko'rsatish kerak: <code>make(Set[string])</code>. Funksiya chaqiruvida esa Go ko'pincha turni o'zi aniqlaydi: <code>Map(sonlar, f)</code>."
          }
        ],
        "quiz": [
          {
            "q": "Map generic funksiyasining natija turi nimaga bog'liq?",
            "options": ["Faqat intga", "Faqat kirish slice turiga", "Qaytariladigan funksiyaning natija turiga", "Har doim stringga"],
            "answer": 2,
            "explain": "Map[T, U] ikkita tur parametrini oladi: T kirish elementi, U esa f funksiyasi qaytaradigan yangi tur. Natija []U bo'ladi."
          },
          {
            "q": "Set uchun map qiymati sifatida odatda nima ishlatiladi?",
            "options": ["nil", "Bo'sh string", "true", "struct{}{}"],
            "answer": 3,
            "explain": "struct{}{} nol hajmli tur: qiymat uchun xotira sarflanmaydi, faqat kalitning o'zi muhim bo'ladi."
          },
          {
            "q": "make(Set[string]) yozuvida nima uchun tur argumenti ko'rsatilgan?",
            "options": ["Generic turni yaratishda tur argumenti kerak", "Faqat string kalitlar uchun", "Xatoni oldini olish uchun ixtiyoriy", "Map'ni saralash uchun"],
            "answer": 0,
            "explain": "Generic turdagi qiymat yaratishda kompilyator tur argumentini kontekstdan har doim ham aniqlay olmaydi, shuning uchun Set[string] ko'rsatiladi."
          }
        ]
      },
      {
        "id": 20,
        "title": "Struct embedding va kompozitsiya",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Go'da meros (inheritance) yo'q, lekin <b>embedding</b> bor. Bir struct'ni boshqa struct ichiga nomisiz joylashtirsangiz, uning maydonlari va metodlari tashqi turda ham ko'rinadi. Bu kompozitsiya usuli: kichik qismlardan kattaroq model yasash."
          },
          {
            "type": "code",
            "title": "manzil.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Manzil struct {\n    Shahar string\n    Uy     int\n}\n\nfunc (m Manzil) Toliq() string {\n    return fmt.Sprintf(\"%s, %d-uy\", m.Shahar, m.Uy)\n}\n\ntype Xodim struct {\n    Ism string\n    Manzil\n}\n\nfunc main() {\n    x := Xodim{\n        Ism:    \"Aziza\",\n        Manzil: Manzil{Shahar: \"Toshkent\", Uy: 12},\n    }\n\n    fmt.Println(x.Ism)\n    fmt.Println(x.Shahar)\n    fmt.Println(x.Toliq())\n\n    x.Uy = 15\n    fmt.Println(x.Shahar, x.Uy)\n}",
            "output": "Aziza\nToshkent\nToshkent, 12-uy\nToshkent 15"
          },
          {
            "type": "table",
            "head": [
              "Yozuv",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>type Xodim struct { Manzil }</code>",
                "Manzil embed qilinadi, maydon nomi tur nomi bilan bir xil"
              ],
              [
                "<code>x.Shahar</code>",
                "Embedded maydonga to'g'ridan-to'g'ri murojaat"
              ],
              [
                "<code>x.Manzil.Shahar</code>",
                "To'liq yo'l bilan murojaat"
              ],
              [
                "<code>x.Toliq()</code>",
                "Embedded metodning tashqi turda ko'rinishi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "metod-qoplash.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Hayvon struct {\n    Nom string\n}\n\nfunc (h Hayvon) Ovoz() string {\n    return \"...\"\n}\n\ntype It struct {\n    Hayvon\n}\n\nfunc (i It) Ovoz() string {\n    return \"Vov\"\n}\n\ntype Mushuk struct {\n    Hayvon\n}\n\nfunc (m Mushuk) Ovoz() string {\n    return \"Miyov\"\n}\n\ntype Ovozli interface {\n    Ovoz() string\n}\n\nfunc main() {\n    hayvonlar := []Ovozli{\n        It{Hayvon{Nom: \"Bobik\"}},\n        Mushuk{Hayvon{Nom: \"Mimi\"}},\n    }\n    for _, h := range hayvonlar {\n        fmt.Println(h.Ovoz())\n    }\n\n    it := It{Hayvon{Nom: \"Rex\"}}\n    fmt.Println(it.Nom, it.Hayvon.Ovoz())\n}",
            "output": "Vov\nMiyov\nRex ..."
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Embedding — meros emas",
            "html": "Tashqi struct embedded turning o'rnini bosmaydi: ular alohida turlar. Agar ikkita embedded turda bir xil nomli maydon yoki metod bo'lsa, unga to'g'ridan-to'g'ri murojaat noaniq bo'lib, kompilyatsiya xatosi beradi — to'liq yo'lni ko'rsatish kerak. Interfeyslarni ham embed qilish mumkin: <code>interface { Reader; Writer }</code>."
          }
        ],
        "quiz": [
          {
            "q": "Struct embedding nimani beradi?",
            "options": ["Ikki struct'ni bitta xotira manziliga bog'laydi", "Embedded tur maydon va metodlarini tashqi turda ko'rinadigan qiladi", "Struct'ni interfeysga aylantiradi", "Faqat maydonlarni nusxalaydi, metodlarni emas"],
            "answer": 1,
            "explain": "Embedding orqali ichki turdagi eksport qilingan maydon va metodlar tashqi turda promote qilinadi. Bu kompozitsiya usulidir."
          },
          {
            "q": "Ikki embedded turda bir xil nomli metod bo'lsa, unga qisqa nom bilan murojaat qilinsa nima bo'ladi?",
            "options": ["Oxirgi embed qilingan tur metodi ishlaydi", "Metodlar avtomatik birlashtiriladi", "Kompilyatsiya xatosi: noaniq murojaat", "Birinchi embed qilingan tur metodi ishlaydi"],
            "answer": 2,
            "explain": "Promote qilingan nomlar to'qnashsa, murojaat noaniq bo'ladi. Aniq turni ko'rsatib chaqirish kerak."
          },
          {
            "q": "x.Toliq() chaqiruvi qaysi turdagi metodni ishga tushirishi mumkin?",
            "options": ["Hech qaysi metodni", "Faqat Xodim uchun yozilgan metodni", "Faqat interfeys metodini", "Embedded Manzil turidagi metodni"],
            "answer": 3,
            "explain": "Xodim o'zida Toliq metodini yozmagan, shuning uchun qisqa nom embedded Manzil metodiga yo'naltiriladi."
          }
        ]
      },
      {
        "id": 21,
        "title": "Metodlar, receiverlar va functional options",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Metod receiver'i qiymat yoki ko'rsatkich bo'lishi mumkin. Qiymat receiver'i nusxa bilan ishlaydi, ko'rsatkich receiver'i asl struct'ni o'zgartiradi. Konstruktorda ko'p ixtiyoriy sozlamalar bo'lsa, <b>functional options</b> naqshi kodni o'qishli va kengaytiriladigan qiladi."
          },
          {
            "type": "code",
            "title": "receiver.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Hisob struct {\n    Egasi  string\n    Balans int\n}\n\nfunc (h *Hisob) Qosh(summa int) {\n    h.Balans += summa\n}\n\nfunc (h *Hisob) Yech(summa int) bool {\n    if summa > h.Balans {\n        return false\n    }\n    h.Balans -= summa\n    return true\n}\n\nfunc (h Hisob) Kopiya() int {\n    return h.Balans\n}\n\nfunc main() {\n    h := &Hisob{Egasi: \"Aziza\", Balans: 100}\n    h.Qosh(50)\n    fmt.Println(h.Kopiya())\n\n    qiymat := Hisob{Egasi: \"Bek\", Balans: 10}\n    qiymat.Qosh(5)\n    fmt.Println(qiymat.Balans)\n\n    fmt.Println(qiymat.Yech(50))\n    fmt.Println(qiymat.Balans)\n}",
            "output": "150\n15\nfalse\n15"
          },
          {
            "type": "table",
            "head": [
              "Receiver",
              "Afzalligi",
              "Kamchiligi"
            ],
            "rows": [
              [
                "<code>(h Hisob)</code>",
                "Nusxa bilan xavfsiz ishlaydi",
                "Katta struct'ni ko'chirish qimmat"
              ],
              [
                "<code>(h *Hisob)</code>",
                "Asl qiymatni o'zgartiradi, nusxa ko'chirmaydi",
                "nil receiver'ni tekshirish kerak"
              ],
              [
                "Bir turda ikkalasi",
                "Ba'zan qulay",
                "Uslub buziladi, method set chalkashadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "options.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Server struct {\n    Host    string\n    Port    int\n    Timeout int\n}\n\ntype Option func(*Server)\n\nfunc WithPort(port int) Option {\n    return func(s *Server) { s.Port = port }\n}\n\nfunc WithTimeout(sekund int) Option {\n    return func(s *Server) { s.Timeout = sekund }\n}\n\nfunc NewServer(host string, opts ...Option) *Server {\n    s := &Server{Host: host, Port: 8080, Timeout: 30}\n    for _, opt := range opts {\n        opt(s)\n    }\n    return s\n}\n\nfunc main() {\n    s := NewServer(\"localhost\", WithPort(9090), WithTimeout(5))\n    fmt.Printf(\"%s:%d timeout=%ds\\n\", s.Host, s.Port, s.Timeout)\n\n    standart := NewServer(\"0.0.0.0\")\n    fmt.Println(standart.Port, standart.Timeout)\n}",
            "output": "localhost:9090 timeout=5s\n8080 30"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Qaysi uslubni tanlash?",
            "html": "Ixtiyoriy sozlamalar 2–3 tadan ko'p bo'lsa, <code>Options struct</code> yoki functional options ishlatiladi. Functional options chaqiruvda aniq ko'rinadi va yangi sozlama qo'shganda mavjud kodni buzmaydi. Bir turdagi metodlarda receiver turini bir xil saqlash tavsiya etiladi, ayniqsa tur interfeysni qanoatlantirishi kerak bo'lsa."
          }
        ],
        "quiz": [
          {
            "q": "Qiymat receiver'i bilan yozilgan metod struct maydonini o'zgartira oladimi?",
            "options": ["Yo'q, u nusxa bilan ishlaydi", "Faqat pointer maydonlarda", "Ha, doim o'zgartiradi", "Ha, agar maydon eksport qilingan bo'lsa"],
            "answer": 0,
            "explain": "Qiymat receiver'i struct nusxasini oladi. Maydonni o'zgartirish faqat nusxaga ta'sir qiladi, asl qiymat o'zgarmaydi."
          },
          {
            "q": "opts ...Option parametri nimani bildiradi?",
            "options": ["Interfeys metodlarini", "Ixtiyoriy funksiyalar ro'yxatini", "Faqat bitta majburiy funksiyani", "Option turidagi map'ni"],
            "answer": 1,
            "explain": "Variadic parametr nol yoki undan ko'p Option qiymatini qabul qiladi. NewServer ularni navbat bilan qo'llaydi."
          },
          {
            "q": "Addressable qiymatda pointer receiver metodini chaqirganda nima sodir bo'ladi?",
            "options": ["Struct nusxalanadi", "Kompilyatsiya xatosi chiqadi", "Kompilyator avtomatik & olib, metodni chaqiradi", "Metod e'tiborsiz qoldiriladi"],
            "answer": 2,
            "explain": "Agar qiymat manzilga ega bo'lsa (masalan lokal o'zgaruvchi), kompilyator avtomatik ko'rsatkich oladi. Map elementi kabi addressable bo'lmagan joylarda bu ishlamaydi."
          }
        ]
      },
      {
        "id": 22,
        "title": "Interfeyslar chuqurroq: type switch va nil tuzog'i",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Interfeys qiymati ichida dinamik tur va o'sha turdagi qiymat saqlanadi. Interfeysdan aniq turni olish uchun <b>type assertion</b>, bir nechta turni ajratish uchun <b>type switch</b> ishlatiladi. Go'da kichik interfeyslar afzal: qancha kam metod talab qilinsa, shuncha ko'p tur uni qanoatlantira oladi."
          },
          {
            "type": "code",
            "title": "shakllar.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Shakl interface {\n    Yuza() float64\n}\n\ntype Tortburchak struct {\n    En, Boy float64\n}\n\nfunc (t Tortburchak) Yuza() float64 { return t.En * t.Boy }\n\ntype Aylana struct {\n    R float64\n}\n\nfunc (a Aylana) Yuza() float64 { return 3.14 * a.R * a.R }\n\nfunc main() {\n    shakllar := []Shakl{Tortburchak{3, 4}, Aylana{2}}\n    for _, s := range shakllar {\n        fmt.Printf(\"%.2f\\n\", s.Yuza())\n    }\n\n    var s Shakl = Tortburchak{5, 6}\n    if t, ok := s.(Tortburchak); ok {\n        fmt.Println(\"to'rtburchak:\", t.En, t.Boy)\n    }\n}",
            "output": "12.00\n12.56\nto'rtburchak: 5 6"
          },
          {
            "type": "ul",
            "items": [
              "<code>s.(T)</code> — T turini talab qiladi; mos kelmasa panic bo'ladi.",
              "<code>v, ok := s.(T)</code> — xavfsiz tekshiruv: ok false bo'lsa v nol qiymat.",
              "<code>switch v := x.(type)</code> — dinamik turni bir nechta case bo'yicha ajratadi.",
              "<code>interface{}</code> yoki <code>any</code> — hech qanday metod talab qilmaydigan bo'sh interfeys."
            ]
          },
          {
            "type": "code",
            "title": "type-switch.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Xato struct{}\n\nfunc (e *Xato) Error() string { return \"xato\" }\n\nfunc Turi(x any) string {\n    switch v := x.(type) {\n    case int:\n        return fmt.Sprintf(\"int: %d\", v)\n    case string:\n        return \"string: \" + v\n    case []int:\n        return fmt.Sprintf(\"slice: %v\", v)\n    case nil:\n        return \"nil\"\n    default:\n        return fmt.Sprintf(\"boshqa: %T\", v)\n    }\n}\n\nfunc main() {\n    fmt.Println(Turi(42))\n    fmt.Println(Turi(\"go\"))\n    fmt.Println(Turi([]int{1, 2}))\n    fmt.Println(Turi(nil))\n\n    var err error\n    var x *Xato\n    err = x\n    fmt.Println(err == nil, Turi(err))\n}",
            "output": "int: 42\nstring: go\nslice: [1 2]\nnil\nfalse boshqa: *main.Xato"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Nil interfeys va typed nil",
            "html": "Nil ko'rsatkichni interfeys o'zgaruvchisiga bersangiz, interfeys nil bo'lmaydi: u dinamik turi <code>*Xato</code>, qiymati nil bo'lgan interfeys bo'ladi. Shuning uchun <code>err == nil</code> false qaytaradi. Xatoni qaytaradigan funksiyada ko'rsatkich nil bo'lsa, interfeysga solishdan oldin tekshiring yoki aniq nil qaytaring."
          }
        ],
        "quiz": [
          {
            "q": "v, ok := x.(T) da ok false bo'lsa v qanday qiymat oladi?",
            "options": ["Oldingi qiymatni", "nil interfeysni", "Panic bo'ladi", "T turining nol qiymatini"],
            "answer": 3,
            "explain": "Xavfsiz type assertion muvaffaqiyatsiz bo'lsa, v T turining nol qiymati bo'ladi va ok false bo'ladi."
          },
          {
            "q": "Kichik interfeyslarning asosiy afzalligi nimada?",
            "options": ["Ko'proq turlar ularni oson qanoatlantiradi", "Kompilyatsiyani sekinlashtiradi", "Faqat struct'lar bilan ishlaydi", "Ko'proq xotira egallaydi"],
            "answer": 0,
            "explain": "Kam metodli interfeysni qanoatlantirish osonroq. Masalan io.Writer faqat Write metodini talab qiladi."
          },
          {
            "q": "Nil ko'rsatkich error interfeysiga berilsa, err == nil tekshiruvi nima qaytaradi?",
            "options": ["Kompilyatsiya xatosi", "false, chunki interfeys dinamik turga ega", "Panic", "true, chunki ko'rsatkich nil"],
            "answer": 1,
            "explain": "Interfeys ichida tur ma'lumoti saqlanadi. Tur *Xato bo'lsa, qiymat nil bo'lsa ham interfeys o'zi nil emas."
          }
        ]
      },
      {
        "id": 23,
        "title": "Xatolarni o'rash: errors.Is va errors.As",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Xatoni yuqoriga uzatganda kontekst qo'shish foydali: qaysi amal, qaysi id, qaysi fayl. Buning uchun <code>fmt.Errorf</code> va <code>%w</code> ishlatiladi. O'ralgan xatoni tekshirishda oddiy <code>==</code> emas, <code>errors.Is</code> va <code>errors.As</code> ishlatiladi — ular butun zanjir bo'ylab qidiradi."
          },
          {
            "type": "code",
            "title": "wrapping.go",
            "code": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nvar ErrTopilmadi = errors.New(\"yozuv topilmadi\")\n\nfunc topish(id int) error {\n    if id != 1 {\n        return fmt.Errorf(\"id=%d: %w\", id, ErrTopilmadi)\n    }\n    return nil\n}\n\nfunc main() {\n    err := topish(7)\n    fmt.Println(err)\n    fmt.Println(errors.Is(err, ErrTopilmadi))\n\n    err2 := fmt.Errorf(\"qidiruv: %w\", topish(9))\n    fmt.Println(err2)\n    fmt.Println(errors.Is(err2, ErrTopilmadi))\n}",
            "output": "id=7: yozuv topilmadi\ntrue\nqidiruv: id=9: yozuv topilmadi\ntrue"
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>errors.New</code>",
                "Oddiy yangi xato yaratadi"
              ],
              [
                "<code>fmt.Errorf(\"...: %w\", err)</code>",
                "Xatoni kontekst bilan o'raydi"
              ],
              [
                "<code>errors.Is(err, target)</code>",
                "Zanjirda ma'lum xato borligini tekshiradi"
              ],
              [
                "<code>errors.As(err, &target)</code>",
                "Zanjirdan aniq turdagi xatoni oladi"
              ],
              [
                "<code>errors.Join(a, b)</code>",
                "Bir nechta xatoni bitta xatoga birlashtiradi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "custom-error.go",
            "code": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\ntype ValidatsiyaXatosi struct {\n    Maydon string\n    Xabar  string\n}\n\nfunc (v *ValidatsiyaXatosi) Error() string {\n    return v.Maydon + \": \" + v.Xabar\n}\n\nfunc tekshir(ism string) error {\n    if ism == \"\" {\n        return fmt.Errorf(\"foydalanuvchi: %w\", &ValidatsiyaXatosi{\n            Maydon: \"ism\",\n            Xabar:  \"bo'sh bo'lmasligi kerak\",\n        })\n    }\n    return nil\n}\n\nfunc main() {\n    err := tekshir(\"\")\n    fmt.Println(err)\n\n    var v *ValidatsiyaXatosi\n    if errors.As(err, &v) {\n        fmt.Println(\"maydon:\", v.Maydon)\n    }\n\n    birlashma := errors.Join(errors.New(\"birinchi\"), errors.New(\"ikkinchi\"))\n    fmt.Println(birlashma)\n}",
            "output": "foydalanuvchi: ism: bo'sh bo'lmasligi kerak\nmaydon: ism\nbirinchi\nikkinchi"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Xato bir marta o'raladi",
            "html": "Har bir qatlamda <code>%w</code> bilan o'rash zanjirni uzaytiradi, lekin xatoni qayta-qayta qayta yozish shart emas. Chegarada — masalan HTTP handler yoki CLI — xatoni foydalanuvchiga mos matnga aylantiring. Sentinel xatolar uchun <code>errors.Is</code>, tafsilotli turlar uchun <code>errors.As</code> ishlating; xato matnlarini solishtirmang."
          }
        ],
        "quiz": [
          {
            "q": "fmt.Errorf ichida %w nima qiladi?",
            "options": ["Faqat sonni formatlaydi", "Xato matnini katta harfga o'giradi", "Asl xatoni zanjirga bog'lab o'raydi", "Xatoni jimgina yutadi"],
            "answer": 2,
            "explain": "%w wrapping uchun maxsus verb: natija errors.Is va errors.As orqali asl xatogacha yetib borish imkonini beradi."
          },
          {
            "q": "errors.As nimani qidiradi?",
            "options": ["Faqat xato matnini", "Faqat nil xatoni", "Xatoning uzunligini", "Zanjirdan ma'lum turdagi xatoni"],
            "answer": 3,
            "explain": "errors.As ko'rsatkich orqali aniq turdagi xato qiymatini topadi va unga murojaat qilish imkonini beradi."
          },
          {
            "q": "O'ralgan sentinel xatoni tekshirishning to'g'ri usuli qaysi?",
            "options": ["errors.Is(err, ErrTopilmadi)", "err.Error() == \"topilmadi\"", "err == ErrTopilmadi", "len(err.Error()) > 0"],
            "answer": 0,
            "explain": "O'ralgan xato asl sentinelga teng bo'lmaydi, lekin errors.Is zanjir bo'ylab uni topadi."
          }
        ]
      },
      {
        "id": 24,
        "title": "panic, recover va ishonchli dastur",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<code>panic</code> — davom ettirib bo'lmaydigan dasturchi xatosi uchun ishlatiladi: indeks chegaradan chiqishi, nil ko'rsatkich, noto'g'ri holat. Kutilyotgan xatolar esa <code>error</code> sifatida qaytariladi. <code>recover</code> faqat deferred funksiya ichida panic'ni ushlab, dasturni yoki goroutinni saqlab qolishi mumkin."
          },
          {
            "type": "code",
            "title": "recover.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc xavfsizBolish(a, b int) (natija int, err error) {\n    defer func() {\n        if r := recover(); r != nil {\n            err = fmt.Errorf(\"hisoblashda panic: %v\", r)\n        }\n    }()\n    natija = a / b\n    return natija, nil\n}\n\nfunc main() {\n    n, err := xavfsizBolish(10, 2)\n    fmt.Println(n, err)\n\n    n, err = xavfsizBolish(10, 0)\n    fmt.Println(n, err)\n\n    _, err = strconv.Atoi(\"12x\")\n    fmt.Println(\"parse:\", err)\n}",
            "output": "5 <nil>\n0 hisoblashda panic: runtime error: integer divide by zero\nparse: strconv.Atoi: parsing \"12x\": invalid syntax"
          },
          {
            "type": "table",
            "head": [
              "Holat",
              "Tavsiya"
            ],
            "rows": [
              [
                "Foydalanuvchi noto'g'ri kiritdi",
                "<code>error</code> qaytaring, panic emas"
              ],
              [
                "Fayl topilmadi",
                "<code>error</code> qaytaring va <code>errors.Is</code> bilan tekshiring"
              ],
              [
                "Dasturchi xatosi: nil map'ga yozish",
                "Panic tabiiy; testda topish kerak"
              ],
              [
                "Server handler ichida kutilmagan panic",
                "Middleware'da recover qilib 500 qaytarish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "qayta-panic.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc ishla() (err error) {\n    defer func() {\n        fmt.Println(\"tozalash bajarildi\")\n    }()\n    defer func() {\n        if r := recover(); r != nil {\n            err = fmt.Errorf(\"ishla: %v\", r)\n            panic(\"qayta yuborildi: \" + err.Error())\n        }\n    }()\n\n    panic(\"kutilmagan holat\")\n}\n\nfunc main() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println(\"main ushladi:\", r)\n        }\n    }()\n\n    err := ishla()\n    fmt.Println(err)\n}",
            "output": "tozalash bajarildi\nmain ushladi: qayta yuborildi: ishla: kutilmagan holat"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Recover'ni suiiste'mol qilmang",
            "html": "Recover'ni oddiy xatolarni yashirish uchun ishlatish kodni tushunarsiz qiladi. U faqat goroutine yoki server chegarasida, kutilmagan holatdan keyin resurslarni tozalash va 500 javob qaytarish uchun mos. Panic'dan keyin deferred funksiyalar baribir bajariladi, shuning uchun <code>defer file.Close()</code> kabi tozalash ishlari bajariladi."
          }
        ],
        "quiz": [
          {
            "q": "Panic'ni ushlash uchun recover() qanday sharoitda chaqirilishi kerak?",
            "options": ["Har qanday oddiy funksiyada", "Panic paytida bajarilayotgan deferred funksiya ichida", "Faqat main boshida", "Faqat goroutine yaratishdan oldin"],
            "answer": 1,
            "explain": "recover faqat panic tufayli ishga tushgan deferred funksiya ichida samarali ishlaydi. Oddiy chaqiruv nil qaytaradi."
          },
          {
            "q": "Kutilyotgan xato, masalan fayl topilmasligi, uchun nima qilish kerak?",
            "options": ["Xatoni e'tiborsiz qoldirish", "recover ishlatish", "error qaytarish", "Darhol panic qilish"],
            "answer": 2,
            "explain": "Kutilyotgan xatolar error qiymati sifatida qaytariladi va chaqiruvchi ularni tekshiradi. Panic favqulodda holatlar uchun."
          },
          {
            "q": "Panic yuz berganda oldin ro'yxatdan o'tgan deferred funksiyalar bajariladimi?",
            "options": ["Faqat main'dagi defer", "Yo'q, ular o'tkazib yuboriladi", "Faqat recover bo'lsa", "Ha, stack bo'ylab ochilishda bajariladi"],
            "answer": 3,
            "explain": "Panic stack'ni ocha boshlaydi va har bir qatlamdagi defer'lar bajariladi. Shu sababli tozalash kodini defer'ga qo'yish muhim."
          }
        ]
      },
      {
        "id": 25,
        "title": "Testlash asoslari: go test va table-driven",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Go'da testlar tilning bir qismi: <code>_test.go</code> bilan tugagan fayllar oddiy kompilyatsiyaga kirmaydi, <code>go test</code> esa ularni ishga tushiradi. Test funksiyasi <code>Test</code> bilan boshlanadi va <code>*testing.T</code> oladi. Bir xil mantiqni ko'p holatlarda tekshirish uchun <b>table-driven</b> uslub ishlatiladi."
          },
          {
            "type": "code",
            "title": "kalkulyator.go",
            "code": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nvar ErrNolgaBolish = errors.New(\"nolga bo'lib bo'lmaydi\")\n\nfunc Qosh(a, b int) int {\n    return a + b\n}\n\nfunc Bolish(a, b int) (int, error) {\n    if b == 0 {\n        return 0, ErrNolgaBolish\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    fmt.Println(Qosh(2, 3))\n\n    n, err := Bolish(10, 2)\n    fmt.Println(n, err)\n\n    _, err = Bolish(1, 0)\n    fmt.Println(err)\n}",
            "output": "5\n5 <nil>\nnolga bo'lib bo'lmaydi"
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>go test</code>",
                "Joriy paket testlarini ishga tushiradi"
              ],
              [
                "<code>go test ./...</code>",
                "Barcha paketlardagi testlarni ishga tushiradi"
              ],
              [
                "<code>go test -run TestQosh</code>",
                "Faqat nomi mos testlarni ishga tushiradi"
              ],
              [
                "<code>go test -v</code>",
                "Har bir test va subtest natijasini batafsil chiqaradi"
              ],
              [
                "<code>t.Run(nom, f)</code>",
                "Subtest yaratadi va alohida natija beradi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "kalkulyator_test.go",
            "code": "package main\n\nimport (\n    \"errors\"\n    \"testing\"\n)\n\nfunc TestQosh(t *testing.T) {\n    holatlar := []struct {\n        nom      string\n        a, b     int\n        kutilgan int\n    }{\n        {\"musbat\", 2, 3, 5},\n        {\"manfiy\", -2, 3, 1},\n        {\"nol\", 0, 0, 0},\n    }\n\n    for _, h := range holatlar {\n        t.Run(h.nom, func(t *testing.T) {\n            if natija := Qosh(h.a, h.b); natija != h.kutilgan {\n                t.Errorf(\"Qosh(%d, %d) = %d, kutilgan %d\",\n                    h.a, h.b, natija, h.kutilgan)\n            }\n        })\n    }\n}\n\nfunc TestBolishNol(t *testing.T) {\n    _, err := Bolish(10, 0)\n    if !errors.Is(err, ErrNolgaBolish) {\n        t.Fatalf(\"ErrNolgaBolish kutilgan, olindi: %v\", err)\n    }\n}",
            "output": "=== RUN   TestQosh\n=== RUN   TestQosh/musbat\n=== RUN   TestQosh/manfiy\n=== RUN   TestQosh/nol\n--- PASS: TestQosh (0.00s)\n    --- PASS: TestQosh/musbat (0.00s)\n    --- PASS: TestQosh/manfiy (0.00s)\n    --- PASS: TestQosh/nol (0.00s)\n=== RUN   TestBolishNol\n--- PASS: TestBolishNol (0.00s)\nPASS\nok  \texample/kalkulyator\t0.003s"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Yaxshi testning belgilari",
            "html": "Test aniq xatoni ko'rsatishi kerak: <code>t.Errorf</code> ichida kirish, olingan va kutilgan natijani yozing. Testni tashqi tarmoq yoki vaqtga bog'lamang. <code>t.Helper()</code> yordamchi funksiyalarda xato qatorini to'g'ri ko'rsatadi, <code>t.Cleanup(f)</code> esa test tugaganda resursni yopadi. Testlar bir-biriga bog'liq bo'lmasligi kerak."
          }
        ],
        "quiz": [
          {
            "q": "Test fayli qanday nomlanishi kerak?",
            "options": ["main_test.go kabi _test.go bilan tugaydigan nom", "main.test", "tests.go", "test_main.go"],
            "answer": 0,
            "explain": "go test faqat _test.go bilan tugaydigan fayllarni test sifatida ko'radi. Oddiy main.go testlarni o'z ichiga olmaydi."
          },
          {
            "q": "Table-driven testda holatlar odatda qanday saqlanadi?",
            "options": ["JSON faylida", "Struct'lardan iborat slice'da", "Bitta stringda", "Global map'da"],
            "answer": 1,
            "explain": "Kirish va kutilgan natijalarni struct slice'iga yig'ib, tsikl va t.Run bilan har birini alohida tekshirish qulay."
          },
          {
            "q": "t.Run nimani yaratadi?",
            "options": ["Yangi goroutine", "Yangi paket", "Subtest", "Benchmark"],
            "answer": 2,
            "explain": "t.Run nomlangan subtest yaratadi. U alohida PASS/FAIL natijasi va izolyatsiyalangan t ustasi beradi."
          }
        ]
      },
      {
        "id": 26,
        "title": "Benchmark, coverage va ishlashni o'lchash",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Test kod to'g'ri ishlashini tekshiradi, benchmark esa uning qanchalik tez ishlashini o'lchaydi. Benchmark funksiyasi <code>Benchmark</code> bilan boshlanadi va <code>*testing.B</code> oladi. <code>b.N</code> — framework tanlagan takrorlash soni; kod shu sonda bajarilishi kerak."
          },
          {
            "type": "code",
            "title": "birlash.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc Birlash(son int) string {\n    var b strings.Builder\n    for i := 0; i < son; i++ {\n        b.WriteString(\"go\")\n    }\n    return b.String()\n}\n\nfunc main() {\n    natija := Birlash(3)\n    fmt.Println(natija, len(natija))\n}",
            "output": "gogogo 6"
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Natijasi"
            ],
            "rows": [
              [
                "<code>go test -bench=.</code>",
                "Barcha benchmark'larni ishga tushiradi"
              ],
              [
                "<code>go test -bench=. -benchmem</code>",
                "Xotira ajratishlarini ham ko'rsatadi"
              ],
              [
                "<code>go test -cover</code>",
                "Testlar qamrab olgan kod foizini chiqaradi"
              ],
              [
                "<code>go test -coverprofile=c.out</code>",
                "Qamrov hisobotini faylga yozadi"
              ],
              [
                "<code>go tool cover -html=c.out</code>",
                "Qamrovni brauzerda ko'rsatadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "birlash_test.go",
            "code": "package main\n\nimport \"testing\"\n\nfunc TestBirlash(t *testing.T) {\n    if natija := Birlash(3); natija != \"gogogo\" {\n        t.Fatalf(\"kutilgan gogogo, olindi %q\", natija)\n    }\n}\n\nfunc BenchmarkBirlash(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        _ = Birlash(50)\n    }\n}",
            "output": "=== RUN   TestBirlash\n--- PASS: TestBirlash (0.00s)\nBenchmarkBirlash-8   \t  289336\t      4012 ns/op\nPASS\nok  \texample/bench\t0.006s"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Raqamlar muhitga bog'liq",
            "html": "Benchmark natijalari protsessor, yuklama va Go versiyasiga qarab o'zgaradi — ularni boshqa mashinadagi mutlaq raqam bilan solishtirmang. Bir xil muhitda ikki implementatsiyani solishtirish mantiqiy. Benchmark ichida tayyorgarlik ishlari bo'lsa <code>b.ResetTimer()</code>, natijani saqlab qolish uchun esa paket darajasidagi <code>var Sink string</code> ishlatiladi. Coverage 100% bo'lishi kod xatosiz degani emas."
          }
        ],
        "quiz": [
          {
            "q": "Benchmark funksiyasi nomi qanday boshlanishi kerak?",
            "options": ["Bench", "Perf", "Test", "Benchmark"],
            "answer": 3,
            "explain": "go test faqat Benchmark bilan boshlanadigan va *testing.B oladigan funksiyalarni benchmark sifatida ishga tushiradi."
          },
          {
            "q": "Benchmark ichida b.N nimani bildiradi?",
            "options": ["Framework belgilagan takrorlash sonini", "Xotira hajmini", "Goroutinlar sonini", "Testning davomiyligini"],
            "answer": 0,
            "explain": "testing framework b.N ni o'lchov uchun mos qiymatga sozlaydi. Benchmark tanasi aynan shu sonda bajarilishi kerak."
          },
          {
            "q": "Coverage foizi nimani ko'rsatadi?",
            "options": ["Testlar sonini", "Testlar bajargan kod qismini", "Benchmark tezligini", "Kodning umumiy hajmini"],
            "answer": 1,
            "explain": "Coverage hisoboti testlar davomida bajarilgan operatorlar ulushini ko'rsatadi. U sifat kafolati emas, faqat qamrov o'lchovidir."
          }
        ]
      },
      {
        "id": 27,
        "title": "CLI dasturlar: flag, argument va exit code",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Buyruq qatoridan ishlaydigan dastur foydalanuvchi bilan <code>os.Args</code>, <code>flag</code> paketi va muhit o'zgaruvchilari orqali muloqot qiladi. Yaxshi CLI aniq xato xabari va to'g'ri <b>exit code</b> qaytaradi: 0 — muvaffaqiyat, noldan farqli kod — xato. Avtomatlashtirilgan skriptlar aynan shu kodga tayanadi."
          },
          {
            "type": "code",
            "title": "flaglar.go",
            "code": "package main\n\nimport (\n    \"flag\"\n    \"fmt\"\n    \"os\"\n)\n\nfunc main() {\n    fs := flag.NewFlagSet(\"salom\", flag.ContinueOnError)\n    ism := fs.String(\"ism\", \"mehmon\", \"foydalanuvchi ismi\")\n    yosh := fs.Int(\"yosh\", 0, \"foydalanuvchi yoshi\")\n\n    args := []string{\"-ism\", \"Aziza\", \"-yosh\", \"15\", \"qo'shimcha\"}\n    if err := fs.Parse(args); err != nil {\n        fmt.Fprintln(os.Stderr, err)\n        os.Exit(2)\n    }\n\n    fmt.Printf(\"Salom, %s! Yosh: %d\\n\", *ism, *yosh)\n    fmt.Println(\"Qo'shimcha:\", fs.Args())\n}",
            "output": "Salom, Aziza! Yosh: 15\nQo'shimcha: [qo'shimcha]"
          },
          {
            "type": "code",
            "title": "buyruqlar.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n    \"strconv\"\n)\n\nfunc main() {\n    os.Args = []string{\"calc\", \"qosh\", \"2\", \"3\"}\n\n    if len(os.Args) < 4 {\n        fmt.Fprintln(os.Stderr, \"foydalanish: calc qosh A B\")\n        os.Exit(1)\n    }\n\n    a, err := strconv.Atoi(os.Args[2])\n    if err != nil {\n        fmt.Fprintln(os.Stderr, \"birinchi son noto'g'ri\")\n        os.Exit(1)\n    }\n    b, err := strconv.Atoi(os.Args[3])\n    if err != nil {\n        fmt.Fprintln(os.Stderr, \"ikkinchi son noto'g'ri\")\n        os.Exit(1)\n    }\n\n    switch os.Args[1] {\n    case \"qosh\":\n        fmt.Println(a + b)\n    case \"ayir\":\n        fmt.Println(a - b)\n    default:\n        fmt.Fprintln(os.Stderr, \"noma'lum buyruq\")\n        os.Exit(2)\n    }\n}",
            "output": "5"
          },
          {
            "type": "table",
            "head": [
              "Exit code",
              "Ma'nosi"
            ],
            "rows": [
              [
                "0",
                "Muvaffaqiyatli yakun"
              ],
              [
                "1",
                "Umumiy xato yoki noto'g'ri kiritish"
              ],
              [
                "2",
                "Noto'g'ri foydalanish yoki argument"
              ],
              [
                "Boshqa",
                "Dasturga xos xato holati"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Flag yoki subcommand?",
            "html": "<code>flag</code> standart kutubxonada yetarli: <code>-ism</code>, <code>-yosh</code> kabi oddiy parametrlar uchun ishlating. Murakkab subcommand'lar (<code>git commit</code>, <code>app serve</code>) uchun tashqi kutubxonalar qulay, lekin kichik vositalarda <code>os.Args</code> va <code>switch</code> ham yetarli. Sirli ma'lumotlarni (parol, token) flag bilan emas, muhit o'zgaruvchisi yoki maxfiy fayl orqali bering."
          }
        ],
        "quiz": [
          {
            "q": "flag.Int funksiyasi qanday turdagi qiymat qaytaradi?",
            "options": ["func() int", "int", "*int ko'rsatkichi", "string"],
            "answer": 2,
            "explain": "flag.Int ko'rsatkich qaytaradi. Qiymatni olish uchun *yosh ko'rinishida murojaat qilinadi; flag.Parse qiymatni to'ldiradi."
          },
          {
            "q": "Dastur muvaffaqiyatli tugaganda qanday exit code qaytaradi?",
            "options": ["1", "2", "-1", "0"],
            "answer": 3,
            "explain": "0 muvaffaqiyatni bildiradi. Noldan farqli kod xatoni ko'rsatadi va skriptlarga muammoni aniqlashga yordam beradi."
          },
          {
            "q": "os.Args[0] odatda nimani saqlaydi?",
            "options": ["Dastur nomi yoki ishga tushirilgan yo'lni", "Exit code'ni", "Birinchi foydalanuvchi argumentini", "Muhit o'zgaruvchisini"],
            "answer": 0,
            "explain": "os.Args[0] — dasturning nomi yoki yo'li. Haqiqiy argumentlar 1-indeksdan boshlanadi."
          }
        ]
      },
      {
        "id": 28,
        "title": "Loyiha tuzilishi: qatlamlar, cmd va internal",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Kichik dastur bitta faylda yashashi mumkin, lekin loyiha o'sganda qatlamlarga bo'linadi: kirish nuqtasi, biznes mantiq va ma'lumot saqlash. Go'da papka nomi paket nomiga mos keladi. <code>cmd/</code> — bajariladigan dasturlar, <code>internal/</code> — faqat shu modul ichida ishlatiladigan kod uchun."
          },
          {
            "type": "code",
            "title": "bitta-fayl.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Ombor struct {\n    data map[string]int\n}\n\nfunc main() {\n    o := Ombor{data: map[string]int{}}\n    o.data[\"kitob\"] = 3\n    fmt.Println(\"kitob:\", o.data[\"kitob\"])\n}",
            "output": "kitob: 3"
          },
          {
            "type": "table",
            "head": [
              "Yo'l",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>cmd/api/main.go</code>",
                "Bajariladigan dasturning kirish nuqtasi"
              ],
              [
                "<code>internal/ombor/</code>",
                "Ma'lumot saqlash qatlami"
              ],
              [
                "<code>internal/xizmat/</code>",
                "Biznes mantiq, omborga bog'lanadi"
              ],
              [
                "<code>internal/httpapi/</code>",
                "HTTP handler va marshrutlar"
              ],
              [
                "<code>go.mod</code>",
                "Modul nomi, Go versiyasi va bog'liqliklar"
              ]
            ]
          },
          {
            "type": "code",
            "title": "qatlamlar.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype Saqlagich interface {\n    Qosh(nom string, soni int) error\n    Soni(nom string) int\n}\n\ntype XotiraOmbori struct {\n    data map[string]int\n}\n\nfunc (x *XotiraOmbori) Qosh(nom string, soni int) error {\n    if soni <= 0 {\n        return fmt.Errorf(\"soni musbat bo'lishi kerak\")\n    }\n    x.data[nom] += soni\n    return nil\n}\n\nfunc (x *XotiraOmbori) Soni(nom string) int {\n    return x.data[nom]\n}\n\ntype Xizmat struct {\n    ombor Saqlagich\n}\n\nfunc (x Xizmat) Qabul(nom string, soni int) error {\n    return x.ombor.Qosh(nom, soni)\n}\n\nfunc main() {\n    xizmat := Xizmat{ombor: &XotiraOmbori{data: map[string]int{}}}\n    if err := xizmat.Qabul(\"kitob\", 3); err != nil {\n        panic(err)\n    }\n    fmt.Println(xizmat.ombor.Soni(\"kitob\"))\n}",
            "output": "3"
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Bog'liqlik yo'nalishi",
            "html": "Handler xizmatga, xizmat omborga bog'lanadi; teskari yo'nalishda import qilmang. <code>internal</code> ichidagi paketni faqat shu modul ichidagi kod import qila oladi — bu tasodifiy tashqi bog'liqlikni oldini oladi. Paket nomlarini qisqa va mazmunli qiling: <code>ombor</code>, <code>xizmat</code>, <code>httpapi</code>. Bitta paketda bir nechta mas'uliyatni aralashtirmang."
          }
        ],
        "quiz": [
          {
            "q": "internal/ ichidagi paketni kim import qila oladi?",
            "options": ["Butun internetdagi loyihalar", "Faqat o'sha modul ichidagi kod", "Faqat test fayllari", "Hech kim"],
            "answer": 1,
            "explain": "internal chegarasi modul darajasida ishlaydi: tashqi modul bu paketlarni import qila olmaydi."
          },
          {
            "q": "cmd/ papkasi odatda nimani saqlaydi?",
            "options": ["Faqat hujjatlarni", "Barcha biznes mantiqni", "Bajariladigan dasturlarning main paketlarini", "Faqat testlarni"],
            "answer": 2,
            "explain": "cmd ichida har bir bajariladigan dastur uchun alohida papka va main paket bo'ladi. Umumiy mantiq internal paketlarda turadi."
          },
          {
            "q": "To'g'ri bog'liqlik yo'nalishi qaysi?",
            "options": ["Barchasi bir-birini import qiladi", "Ombor → handler → xizmat", "Xizmat → handler → ombor", "Handler → xizmat → ombor"],
            "answer": 3,
            "explain": "Yuqori qatlam pastga bog'lanadi: HTTP handler xizmatni, xizmat omborni chaqiradi. Bu testlash va almashtirishni osonlashtiradi."
          }
        ]
      },
      {
        "id": 29,
        "title": "Kod sifati: gofmt, go vet va mod tidy",
        "minutes": 16,
        "blocks": [
          {
            "type": "p",
            "html": "Go ekotizimida kod uslubi standartlashtirilgan: <code>gofmt</code> bo'shliqlar va tekislashni avtomatik tuzatadi. <code>go vet</code> esa kompilyator o'tkazib yuboradigan shubhali konstruksiyalarni — noto'g'ri format verb'lari, ishlatilmayotgan natijalar kabi xatolarni topadi. Bu vositalar jamoada kelishuvni osonlashtiradi."
          },
          {
            "type": "code",
            "title": "format-xatosi.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var ism string = \"Go\"\n    fmt.Printf(\"Salom, %d!\\n\", ism)\n}",
            "output": "Salom, %!d(string=Go)!"
          },
          {
            "type": "code",
            "title": "format-tuzatildi.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var ism string = \"Go\"\n    fmt.Printf(\"Salom, %s!\\n\", ism)\n}",
            "output": "Salom, Go!"
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>gofmt -w .</code>",
                "Fayllarni standart formatda qayta yozadi"
              ],
              [
                "<code>go vet ./...</code>",
                "Shubhali konstruksiyalarni tekshiradi"
              ],
              [
                "<code>go mod tidy</code>",
                "Keraksiz bog'liqliklarni olib tashlaydi, yetishmaganini qo'shadi"
              ],
              [
                "<code>go test ./...</code>",
                "Barcha testlarni ishga tushiradi"
              ],
              [
                "<code>go doc fmt.Println</code>",
                "Standart kutubxona hujjatini ko'rsatadi"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Vet xatoni runtime'da emas, oldin topadi",
            "html": "Yuqoridagi <code>%d</code> xatosi kompilyatsiyadan o'tadi, lekin <code>go vet ./...</code> uni darhol ko'rsatadi. <code>%!d(string=Go)</code> — fmt paketining noto'g'ri turni ko'rsatish usuli. IDE'da saqlashda avtomatik formatlashni yoqing. Jamoaviy loyihalarda CI'da <code>gofmt -l</code>, <code>go vet</code> va <code>go test</code> ni majburiy qiling."
          }
        ],
        "quiz": [
          {
            "q": "gofmt nima qiladi?",
            "options": ["Kodni standart uslubda formatlaydi", "Testlarni ishga tushiradi", "Bog'liqliklarni yuklaydi", "Kodni bajariladigan faylga aylantiradi"],
            "answer": 0,
            "explain": "gofmt bo'shliq, qator va tekislashni Go standartiga moslaydi. U kod mantiqini o'zgartirmaydi."
          },
          {
            "q": "go mod tidy qanday ish bajaradi?",
            "options": ["Fayllarni o'chiradi", "Keraksiz bog'liqliklarni olib tashlaydi va yetishmaganini qo'shadi", "Testlarni saralaydi", "Kodni formatlaydi"],
            "answer": 1,
            "explain": "go mod tidy importlarga qarab go.mod va go.sum ni tozalaydi: ishlatilmayotganini olib tashlaydi, yetishmaganini qo'shadi."
          },
          {
            "q": "go vet qanday muammolarni topadi?",
            "options": ["Faqat sintaksis xatolarini", "Faqat test muvaffaqiyatsizliklarini", "Noto'g'ri format verb'lari kabi shubhali konstruksiyalarni", "Faqat xotira yetishmovchiligini"],
            "answer": 2,
            "explain": "go vet kompilyator o'tkazadigan, lekin runtime'da muammo beradigan naqshlarni tekshiradi. Sintaksis xatolarini kompilyatorning o'zi topadi."
          }
        ]
      },
      {
        "id": 30,
        "title": "select va kanal naqshlari",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<code>select</code> bir vaqtning o'zida bir nechta kanal amalini kutadi va tayyor bo'lganini tanlaydi. Bu timeout, bekor qilish va bir nechta manbadan ma'lumot yig'ish uchun asosiy vosita. Agar bir nechta case bir vaqtda tayyor bo'lsa, Go ular orasidan tasodifiy birini tanlaydi — kod bu tanlovga tayanmasligi kerak."
          },
          {
            "type": "code",
            "title": "ikki-kanal.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    ch1 := make(chan string)\n    ch2 := make(chan string)\n\n    go func() {\n        time.Sleep(15 * time.Millisecond)\n        ch1 <- \"birinchi\"\n    }()\n    go func() {\n        time.Sleep(30 * time.Millisecond)\n        ch2 <- \"ikkinchi\"\n    }()\n\n    for i := 0; i < 2; i++ {\n        select {\n        case x := <-ch1:\n            fmt.Println(\"ch1:\", x)\n        case x := <-ch2:\n            fmt.Println(\"ch2:\", x)\n        }\n    }\n}",
            "output": "ch1: birinchi\nch2: ikkinchi"
          },
          {
            "type": "table",
            "head": [
              "Konstruksiya",
              "Ma'nosi"
            ],
            "rows": [
              [
                "<code>select { case ... }</code>",
                "Tayyor kanal amalini kutadi"
              ],
              [
                "<code>default:</code>",
                "Hech biri tayyor bo'lmasa darhol bajariladi"
              ],
              [
                "<code>time.After(d)</code>",
                "d vaqtdan keyin qiymat yuboradigan kanal"
              ],
              [
                "<code>case <-done:</code>",
                "Yopilgan kanal darhol o'qiladi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "default-timeout.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    ch := make(chan int)\n    select {\n    case v := <-ch:\n        fmt.Println(\"qiymat:\", v)\n    default:\n        fmt.Println(\"tayyor emas\")\n    }\n\n    tez := make(chan string, 1)\n    tez <- \"tayyor\"\n    select {\n    case v := <-tez:\n        fmt.Println(v)\n    case <-time.After(50 * time.Millisecond):\n        fmt.Println(\"timeout\")\n    }\n}",
            "output": "tayyor emas\ntayyor"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "select va goroutine oqishi",
            "html": "Bo'sh <code>select {}</code> abadiy bloklaydi. Tsikl ichida <code>time.After</code> ishlatish ko'p taymer yaratishi mumkin; uzoq ishlaydigan kodda <code>context</code> yoki qayta ishlatiladigan <code>time.Timer</code> afzal. Yuboruvchi kanalni yopadi, qabul qiluvchi emas. Yopilgan kanaldan o'qish nol qiymat va <code>ok=false</code> beradi."
          }
        ],
        "quiz": [
          {
            "q": "select nimani kutadi?",
            "options": ["Faqat fayl o'qishni", "Goroutinlar sonini", "Faqat bitta kanalni", "Bir nechta kanal amallaridan tayyor bo'lganini"],
            "answer": 3,
            "explain": "select bir nechta case'ni bir vaqtda kuzatadi va tayyor bo'lgan kanal amalini bajaradi."
          },
          {
            "q": "default case qachon ishga tushadi?",
            "options": ["Boshqa hech bir case tayyor bo'lmaganda darhol", "Har doim birinchi bo'lib", "Faqat timeoutdan keyin", "Faqat kanal yopilganda"],
            "answer": 0,
            "explain": "default select'ni bloklamaydi: birorta kanal amali tayyor bo'lmasa, u darhol bajariladi."
          },
          {
            "q": "Bir vaqtda bir nechta case tayyor bo'lsa nima bo'ladi?",
            "options": ["Barcha case'lar bajariladi", "Tasodifiy tayyor case tanlanadi", "Birinchi yozilgan case tanlanadi", "Oxirgi case tanlanadi"],
            "answer": 1,
            "explain": "Go tayyor case'lar orasidan tasodifiy tanlaydi. Adolatli taqsimot uchun bu foydali, lekin tartibga tayanib bo'lmaydi."
          }
        ]
      },
      {
        "id": 31,
        "title": "Worker pool va buffered kanallar",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Har bir ish uchun alohida goroutine ochish minglab vazifada resurslarni tugatishi mumkin. <b>Worker pool</b> cheklangan miqdorda ishchi goroutin yaratadi va ular umumiy navbatdan ish oladi. Bu yondashuv parallel ishlash tezligini saqlab, xotira va protsessor yukini nazorat qiladi."
          },
          {
            "type": "code",
            "title": "worker-pool.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"slices\"\n    \"sync\"\n)\n\nfunc ishchi(ishlar <-chan int, natijalar chan<- int, wg *sync.WaitGroup) {\n    defer wg.Done()\n    for n := range ishlar {\n        natijalar <- n * n\n    }\n}\n\nfunc main() {\n    ishlar := make(chan int, 5)\n    natijalar := make(chan int)\n\n    var wg sync.WaitGroup\n    for i := 0; i < 2; i++ {\n        wg.Add(1)\n        go ishchi(ishlar, natijalar, &wg)\n    }\n\n    for i := 1; i <= 5; i++ {\n        ishlar <- i\n    }\n    close(ishlar)\n\n    go func() {\n        wg.Wait()\n        close(natijalar)\n    }()\n\n    var sonlar []int\n    for n := range natijalar {\n        sonlar = append(sonlar, n)\n    }\n    slices.Sort(sonlar)\n    fmt.Println(sonlar)\n}",
            "output": "[1 4 9 16 25]"
          },
          {
            "type": "table",
            "head": [
              "Kanal turi",
              "Xatti-harakati"
            ],
            "rows": [
              [
                "<code>make(chan int)</code>",
                "Bufer yo'q: yuborish qabul qiluvchini kutadi"
              ],
              [
                "<code>make(chan int, 3)</code>",
                "3 ta qiymatgacha navbatda saqlaydi"
              ],
              [
                "<code>close(ch)</code>",
                "Yuborishni tugatadi; qolgan qiymatlar o'qiladi"
              ],
              [
                "<code>for v := range ch</code>",
                "Kanal yopilguncha qiymatlarni oladi"
              ],
              [
                "<code>var ch chan int</code>",
                "Nil kanal: har qanday amal abadiy bloklanadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "bufer.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ch := make(chan int, 3)\n    ch <- 10\n    ch <- 20\n    ch <- 30\n    fmt.Println(len(ch), cap(ch))\n    fmt.Println(<-ch)\n    fmt.Println(len(ch))\n\n    close(ch)\n    for v := range ch {\n        fmt.Println(\"qoldi:\", v)\n    }\n\n    v, ok := <-ch\n    fmt.Println(v, ok)\n}",
            "output": "3 3\n10\n2\nqoldi: 20\nqoldi: 30\n0 false"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Kim yopadi?",
            "html": "Kanalni faqat yuboruvchi tomon yopishi kerak; qabul qiluvchi yopsa, boshqa yuboruvchilar panic beradi. Ishchilar soni odatda <code>runtime.NumCPU()</code> yoki tashqi yuklamaga qarab tanlanadi. Natijalar tartibi kafolatlanmaydi — tartib kerak bo'lsa indeks bilan qaytaring yoki keyin saralang. <code>context</code> bilan bekor qilishni ham unutmang."
          }
        ],
        "quiz": [
          {
            "q": "Buferli kanalning sig'imi nimani cheklaydi?",
            "options": ["Kanal nomining uzunligini", "Qabul qiluvchilar sonini", "Bir vaqtda navbatda turishi mumkin bo'lgan qiymatlar sonini", "Goroutinlar sonini"],
            "answer": 2,
            "explain": "Bufer sig'imi to'ldirilgach, keyingi yuborish qabul qiluvchi joy bo'shatishini kutadi. Bu tabiiy backpressure yaratadi."
          },
          {
            "q": "Kanalni odatda kim yopishi kerak?",
            "options": ["main funksiyasi har doim", "Har qanday goroutine", "Qabul qiluvchi", "Yuboruvchi tomon"],
            "answer": 3,
            "explain": "Yuboruvchi kanalni yopadi. Qabul qiluvchi yopsa, boshqa yuboruvchilar yopilgan kanalga yuborib panic qilishi mumkin."
          },
          {
            "q": "Nil kanaldan o'qishga urinish nima qiladi?",
            "options": ["Abadiy bloklaydi", "Kanalni avtomatik yaratadi", "Nol qiymat qaytaradi", "Panic beradi"],
            "answer": 0,
            "explain": "Nil kanal hech qachon tayyor bo'lmaydi, shuning uchun o'qish ham, yozish ham bloklanadi. select ichida bunday case amalda o'chirilgan bo'ladi."
          }
        ]
      },
      {
        "id": 32,
        "title": "sync: Mutex, RWMutex va once",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Bir nechta goroutine bitta o'zgaruvchini bir vaqtda o'qisa yoki yozsa, <b>data race</b> paydo bo'ladi. <code>sync.Mutex</code> kritik qismni bir goroutinga cheklaydi. Ko'p o'qish va kam yozish bo'lsa <code>sync.RWMutex</code>, bir marta bajarilishi kerak bo'lgan tayyorgarlik uchun <code>sync.Once</code> ishlatiladi."
          },
          {
            "type": "code",
            "title": "mutex.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\ntype Hisoblagich struct {\n    mu   sync.Mutex\n    soni int\n}\n\nfunc (h *Hisoblagich) Oshir() {\n    h.mu.Lock()\n    defer h.mu.Unlock()\n    h.soni++\n}\n\nfunc (h *Hisoblagich) Qiymat() int {\n    h.mu.Lock()\n    defer h.mu.Unlock()\n    return h.soni\n}\n\nfunc main() {\n    var h Hisoblagich\n    var wg sync.WaitGroup\n\n    for i := 0; i < 100; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            h.Oshir()\n        }()\n    }\n\n    wg.Wait()\n    fmt.Println(h.Qiymat())\n}",
            "output": "100"
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Qachon ishlatiladi"
            ],
            "rows": [
              [
                "<code>sync.Mutex</code>",
                "Bitta yozuvchi/o'quvchi uchun oddiy qulf"
              ],
              [
                "<code>sync.RWMutex</code>",
                "Ko'p parallel o'quvchi, kam yozuvchi"
              ],
              [
                "<code>sync.Once</code>",
                "Tayyorgarlik aynan bir marta bajarilishi kerak"
              ],
              [
                "<code>sync/atomic</code>",
                "Oddiy son yoki ko'rsatkich ustida qulfsiz amal"
              ],
              [
                "<code>defer mu.Unlock()</code>",
                "Panic bo'lsa ham qulfni bo'shatadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "once-kesh.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\ntype Kesh struct {\n    mu       sync.RWMutex\n    birMarta sync.Once\n    data     map[string]string\n}\n\nfunc (k *Kesh) Yukla() {\n    k.birMarta.Do(func() {\n        k.mu.Lock()\n        defer k.mu.Unlock()\n        k.data[\"go\"] = \"til\"\n        k.data[\"http\"] = \"protokol\"\n        fmt.Println(\"yuklandi\")\n    })\n}\n\nfunc (k *Kesh) Ol(kalit string) string {\n    k.mu.RLock()\n    defer k.mu.RUnlock()\n    return k.data[kalit]\n}\n\nfunc main() {\n    k := &Kesh{data: make(map[string]string)}\n    var wg sync.WaitGroup\n\n    for i := 0; i < 3; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            k.Yukla()\n        }()\n    }\n\n    wg.Wait()\n    fmt.Println(k.Ol(\"go\"), k.Ol(\"http\"))\n}",
            "output": "yuklandi\ntil protokol"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Mutex nusxalanmasligi kerak",
            "html": "Mutex ishlatilgandan keyin uni nusxalash xavfli: har bir nusxa alohida qulf bo'lib qoladi. Shuning uchun mutex saqlagan struct'ni ko'rsatkich orqali uzating va metodlarda <code>*T</code> receiver ishlating. <code>go vet</code> mutex nusxalashni ham aniqlay oladi. RWMutex'da yozuvchi <code>Lock</code>, o'quvchi <code>RLock</code> ishlatadi."
          }
        ],
        "quiz": [
          {
            "q": "Mutex qulfini defer bilan bo'shatishning afzalligi nima?",
            "options": ["Qulf tezroq bo'shaydi", "Panic yoki erta return bo'lsa ham qulf bo'shaydi", "Mutex avtomatik nusxalanadi", "Goroutinlar soni kamayadi"],
            "answer": 1,
            "explain": "defer Unlock har qanday chiqish yo'lida bajariladi, shuning uchun qulf osilib qolmaydi."
          },
          {
            "q": "RWMutex bir vaqtda qanday amallarga ruxsat beradi?",
            "options": ["Faqat bitta o'quvchiga", "Bir nechta yozuvchiga", "Bir nechta o'quvchiga", "Yozuvchi va o'quvchiga birga"],
            "answer": 2,
            "explain": "RLock bilan bir nechta o'quvchi parallel ishlashi mumkin. Lock esa barcha o'quvchi va yozuvchilarni kutadi."
          },
          {
            "q": "Ishlatilgandan keyin mutex saqlagan struct nusxalansa nima bo'ladi?",
            "options": ["Dastur kompilyatsiya bo'lmaydi", "Go avtomatik yangi qulf yaratadi", "Ikkala nusxa bitta qulfni bo'lishadi", "Nusxa qulfsiz ishlaydi, sinxronizatsiya buziladi"],
            "answer": 3,
            "explain": "Nusxalashda mutex holati ham ko'chiriladi, lekin ular mustaqil bo'lib qoladi. Bu himoyani buzadi, shuning uchun bunday struct'lar ko'rsatkich bilan uzatiladi."
          }
        ]
      },
      {
        "id": 33,
        "title": "context: bekor qilish, timeout va qiymatlar",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "<code>context</code> goroutinlar va tashqi chaqiruvlar o'rtasida bekor qilish signalini uzatadi. HTTP so'rovi, ma'lumotlar bazasi so'rovi yoki uzoq hisoblash bekor qilinishi kerak bo'lsa, <code>ctx.Done()</code> kanali yopiladi. Context funksiyaga birinchi parametr sifatida uzatiladi va hech qachon struct maydonida saqlanmaydi."
          },
          {
            "type": "code",
            "title": "timeout.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    ctx, cancel := context.WithTimeout(context.Background(), time.Second)\n    defer cancel()\n\n    select {\n    case <-time.After(10 * time.Millisecond):\n        fmt.Println(\"ish tugadi\")\n    case <-ctx.Done():\n        fmt.Println(\"timeout:\", ctx.Err())\n    }\n\n    otgan, cancel2 := context.WithDeadline(\n        context.Background(), time.Now().Add(-time.Second))\n    defer cancel2()\n    fmt.Println(\"muddat:\", otgan.Err())\n\n    bekor, cancel3 := context.WithCancel(context.Background())\n    defer cancel3()\n    cancel3()\n    fmt.Println(\"bekor:\", bekor.Err())\n}",
            "output": "ish tugadi\nmuddat: context deadline exceeded\nbekor: context canceled"
          },
          {
            "type": "table",
            "head": [
              "Funksiya",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>context.Background()</code>",
                "Bosh kontekst; bekor qilinmaydi"
              ],
              [
                "<code>WithCancel(parent)</code>",
                "Qo'lda bekor qilinadigan ctx va cancel"
              ],
              [
                "<code>WithTimeout(parent, d)</code>",
                "d vaqtdan keyin avtomatik bekor qiladi"
              ],
              [
                "<code>WithValue(parent, k, v)</code>",
                "So'rov doirasidagi qiymat qo'shadi"
              ],
              [
                "<code>ctx.Err()</code>",
                "Bekor sababini qaytaradi yoki nil"
              ]
            ]
          },
          {
            "type": "code",
            "title": "qiymat.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n)\n\ntype kalit string\n\nconst foydalanuvchi kalit = \"foydalanuvchi\"\n\nfunc ishlov(ctx context.Context) {\n    if ism, ok := ctx.Value(foydalanuvchi).(string); ok {\n        fmt.Println(\"foydalanuvchi:\", ism)\n    }\n}\n\nfunc main() {\n    ctx := context.WithValue(context.Background(), foydalanuvchi, \"Aziza\")\n    ishlov(ctx)\n\n    ctx, cancel := context.WithCancel(ctx)\n    cancel()\n    fmt.Println(ctx.Err())\n}",
            "output": "foydalanuvchi: Aziza\ncontext canceled"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Cancel'ni unutmang",
            "html": "<code>WithCancel</code>, <code>WithTimeout</code> va <code>WithDeadline</code> cancel funksiyasini qaytaradi. Uni <code>defer cancel()</code> bilan chaqirmasangiz, taymer va resurslar uzoqroq yashaydi. Context qiymatlariga faqat so'rovga tegishli ma'lumot qo'ying — sozlamalar, ixtiyoriy parametrlar yoki funksiya argumentlarini context orqali uzatmang."
          }
        ],
        "quiz": [
          {
            "q": "Context funksiyaga qanday uzatilishi tavsiya etiladi?",
            "options": ["Birinchi parametr sifatida", "Oxirgi parametr sifatida", "Global o'zgaruvchi orqali", "Struct maydonida saqlab"],
            "answer": 0,
            "explain": "Birinchi parametr sifatidagi ctx Go an'anasi. Bu chaqiruv zanjirini ko'rinadigan qiladi va bekor qilishni oson uzatadi."
          },
          {
            "q": "context.WithTimeout qanday qiymat qaytaradi?",
            "options": ["Faqat context", "Context va cancel funksiyasi", "Faqat error", "Kanal va timer"],
            "answer": 1,
            "explain": "WithTimeout ctx va cancel qaytaradi. Cancel resurslarni darhol bo'shatish uchun defer bilan chaqiriladi."
          },
          {
            "q": "Sozlamalar va ixtiyoriy funksiya parametrlarini context.WithValue orqali uzatish kerakmi?",
            "options": ["Ha, barcha parametrlar uchun", "Ha, agar ular string bo'lsa", "Yo'q, ular aniq parametr yoki config orqali uzatiladi", "Faqat HTTP so'rovlarida"],
            "answer": 2,
            "explain": "Context qiymatlari so'rov doirasidagi metama'lumot uchun. Aniq bog'liqliklarni funksiya parametrlari yoki konfiguratsiya orqali berish yaxshiroq."
          }
        ]
      },
      {
        "id": 34,
        "title": "Pipeline va fan-out/fan-in naqshlari",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Katta ishni kichik bosqichlarga bo'lib, ular orasida kanal orqali ma'lumot uzatish <b>pipeline</b> deyiladi. Bir nechta ishchi bir kirishni parallel qayta ishlasa — <b>fan-out</b>, natijalarni yana bitta kanalga yig'sa — <b>fan-in</b>. Har bir bosqich o'z chiqish kanalini yopishi kerak, aks holda qabul qiluvchi abadiy kutadi."
          },
          {
            "type": "code",
            "title": "pipeline.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc generator(sonlar ...int) <-chan int {\n    ch := make(chan int)\n    go func() {\n        defer close(ch)\n        for _, n := range sonlar {\n            ch <- n\n        }\n    }()\n    return ch\n}\n\nfunc kvadrat(kirish <-chan int) <-chan int {\n    chiqish := make(chan int)\n    go func() {\n        defer close(chiqish)\n        for n := range kirish {\n            chiqish <- n * n\n        }\n    }()\n    return chiqish\n}\n\nfunc yigindi(kirish <-chan int) int {\n    jami := 0\n    for n := range kirish {\n        jami += n\n    }\n    return jami\n}\n\nfunc main() {\n    fmt.Println(yigindi(kvadrat(generator(1, 2, 3, 4))))\n}",
            "output": "30"
          },
          {
            "type": "table",
            "head": [
              "Naqsh",
              "Vazifasi"
            ],
            "rows": [
              [
                "Generator",
                "Ma'lumot yaratib kanalga yuboradi"
              ],
              [
                "Pipeline",
                "Bosqichlar ketma-ket kanallar bilan bog'lanadi"
              ],
              [
                "Fan-out",
                "Bir nechta ishchi bitta navbatdan oladi"
              ],
              [
                "Fan-in",
                "Bir nechta kanal natijasi bitta kanalga yig'iladi"
              ],
              [
                "Done kanali",
                "Bekor qilish signalini barcha bosqichlarga uzatadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "fan-in.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"slices\"\n    \"sync\"\n)\n\nfunc ishchi(ishlar <-chan int, natijalar chan<- int, wg *sync.WaitGroup) {\n    defer wg.Done()\n    for n := range ishlar {\n        natijalar <- n * 10\n    }\n}\n\nfunc main() {\n    ishlar := make(chan int)\n    natijalar := make(chan int)\n\n    var wg sync.WaitGroup\n    for i := 0; i < 3; i++ {\n        wg.Add(1)\n        go ishchi(ishlar, natijalar, &wg)\n    }\n\n    go func() {\n        for i := 1; i <= 6; i++ {\n            ishlar <- i\n        }\n        close(ishlar)\n    }()\n\n    go func() {\n        wg.Wait()\n        close(natijalar)\n    }()\n\n    var natija []int\n    for n := range natijalar {\n        natija = append(natija, n)\n    }\n    slices.Sort(natija)\n    fmt.Println(natija)\n}",
            "output": "[10 20 30 40 50 60]"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Goroutine oqishi",
            "html": "Agar qabul qiluvchi erta to'xtasa va yuboruvchi bloklangan bo'lsa, goroutine abadiy qoladi. Buning oldini olish uchun har bir select'da <code>ctx.Done()</code> yoki <code>done</code> kanalini qo'shing. Kichik pipeline'larda kanallar xarajati sezilarli bo'lishi mumkin — oddiy tsikl yetarli bo'lsa, parallelizm shart emas. Avval o'lchang, keyin optimallashtiring."
          }
        ],
        "quiz": [
          {
            "q": "Pipeline bosqichi chiqish kanalini kim yopishi kerak?",
            "options": ["Keyingi bosqich", "main funksiyasi", "Hech kim, kanal yopilmaydi", "O'sha bosqichning ishlab chiqaruvchi goroutini"],
            "answer": 3,
            "explain": "Chiqish kanalini unga yozayotgan goroutine yopadi. Shunda keyingi bosqich range'ni tugatib, davom etishi mumkin."
          },
          {
            "q": "Fan-out nimani anglatadi?",
            "options": ["Bitta ishni bir nechta ishchi orasida taqsimlash", "Kanalni yopish", "Ma'lumotni faylga yozish", "Bir nechta kanalni bitta kanalga birlashtirish"],
            "answer": 0,
            "explain": "Fan-out — bitta navbatdan bir nechta ishchi parallel ish olishi. Fan-in esa natijalarni bitta kanalga yig'ish."
          },
          {
            "q": "Buferlanmagan kanalga yuborish qachon tugaydi?",
            "options": ["Darhol", "Qabul qiluvchi qiymatni olganda", "Kanal yopilganda", "1 soniyadan keyin"],
            "answer": 1,
            "explain": "Buferlanmagan kanalda yuboruvchi qabul qiluvchi tayyor bo'lguncha kutadi. Bu ikki goroutine o'rtasida sinxronizatsiya yaratadi."
          }
        ]
      },
      {
        "id": 35,
        "title": "Data race va xavfsiz parallellik",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Data race — ikki goroutine bir vaqtda bitta xotira joyiga murojaat qilib, kamida bittasi yozsa va ular sinxronlanmagan bo'lsa yuz beradi. Natija tasodifiy bo'ladi. Go'ning <code>-race</code> detektori bunday xatolarni topishga yordam beradi, lekin u faqat bajarilgan yo'llarni tekshiradi — testlarni real yuklamaga yaqin qiling."
          },
          {
            "type": "code",
            "title": "atomic.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n    \"sync/atomic\"\n)\n\nfunc main() {\n    var soni atomic.Int64\n    var wg sync.WaitGroup\n\n    for i := 0; i < 1000; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            soni.Add(1)\n        }()\n    }\n\n    wg.Wait()\n    fmt.Println(soni.Load())\n}",
            "output": "1000"
          },
          {
            "type": "table",
            "head": [
              "Yondashuv",
              "Mos joy"
            ],
            "rows": [
              [
                "<code>sync.Mutex</code>",
                "Murakkab holat, bir nechta maydon"
              ],
              [
                "<code>sync/atomic</code>",
                "Bitta son yoki ko'rsatkich uchun yengil amal"
              ],
              [
                "Kanal",
                "Ma'lumot egaligini goroutinlar orasida uzatish"
              ],
              [
                "<code>go run -race</code>",
                "Test va mahalliy tekshiruvda race qidirish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "kanal-egaligi.go",
            "code": "package main\n\nimport \"fmt\"\n\ntype buyruq struct {\n    qosh  int\n    javob chan int\n}\n\nfunc egasi(buyruqlar <-chan buyruq) {\n    jami := 0\n    for b := range buyruqlar {\n        jami += b.qosh\n        b.javob <- jami\n    }\n}\n\nfunc main() {\n    ch := make(chan buyruq)\n    go egasi(ch)\n\n    for i := 1; i <= 3; i++ {\n        javob := make(chan int)\n        ch <- buyruq{qosh: i * 10, javob: javob}\n        fmt.Println(<-javob)\n    }\n    close(ch)\n}",
            "output": "10\n30\n60"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Race'ni qanday topish",
            "html": "<code>go test -race ./...</code> yoki <code>go run -race main.go</code> bilan dasturni qayta ishga tushiring. Race topilsa, hisobot ikkita qarama-qarshi murojaatning stack'ini ko'rsatadi. Xatoni <code>sleep</code> bilan yashirmang — bu faqat ehtimolni kamaytiradi. Ma'lumot bitta goroutinga tegishli bo'lsa yoki qulf bilan himoyalangan bo'lsa, race yo'qoladi."
          }
        ],
        "quiz": [
          {
            "q": "go run -race nimani aniqlaydi?",
            "options": ["Ishlatilmagan importlarni", "Sintaksis xatolarini", "Data race'larni", "Sekin funksiyalarni"],
            "answer": 2,
            "explain": "-race instrumentatsiya qo'shib, sinxronlanmagan parallel murojaatlarni topadi. U barcha mumkin bo'lgan yo'llarni kafolatlamaydi."
          },
          {
            "q": "atomic.Int64 ga qiymat qo'shish uchun qaysi metod ishlatiladi?",
            "options": ["Plus", "Increase", "Set", "Add"],
            "answer": 3,
            "explain": "atomic.Int64.Add(delta) atomar qo'shishni bajaradi. Load va Store esa o'qish/yozish uchun."
          },
          {
            "q": "Bir nechta goroutine map'ni bir vaqtda o'qisa va yozsa nima kerak?",
            "options": ["Mutex yoki boshqa sinxronizatsiya", "Map'ni stringga aylantirish", "Hech narsa, map xavfsiz", "Faqat o'qish uchun mutex"],
            "answer": 0,
            "explain": "Go map'i parallel yozishga xavfsiz emas; bunday holat panic yoki race beradi. Mutex, sync.Map yoki kanal orqali egalik ishlatiladi."
          }
        ]
      },
      {
        "id": 36,
        "title": "Rate limiting va semaphore",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Tashqi API yoki ma'lumotlar bazasiga bir vaqtda minglab so'rov yuborish ularni ortiqcha yuklashi mumkin. <b>Semaphore</b> bir vaqtda bajariladigan ishlar sonini cheklaydi. <b>Rate limiter</b> esa vaqt bo'yicha ruxsat berilgan so'rovlar tezligini nazorat qiladi. Ikkalasi ham kanal yoki taymer yordamida quriladi."
          },
          {
            "type": "code",
            "title": "semaphore.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"slices\"\n    \"sync\"\n)\n\nfunc main() {\n    ishlar := []int{1, 2, 3, 4, 5}\n    sem := make(chan struct{}, 2)\n\n    natijalar := make([]int, 0, len(ishlar))\n    var mu sync.Mutex\n    var wg sync.WaitGroup\n\n    for _, n := range ishlar {\n        wg.Add(1)\n        go func(n int) {\n            defer wg.Done()\n            sem <- struct{}{}\n            defer func() { <-sem }()\n\n            mu.Lock()\n            natijalar = append(natijalar, n*n)\n            mu.Unlock()\n        }(n)\n    }\n\n    wg.Wait()\n    slices.Sort(natijalar)\n    fmt.Println(natijalar)\n}",
            "output": "[1 4 9 16 25]"
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Cheklaydi"
            ],
            "rows": [
              [
                "Buferli kanal (semaphore)",
                "Bir vaqtda bajarilayotgan ishlar sonini"
              ],
              [
                "<code>time.Ticker</code>",
                "Vaqt bo'yicha ruxsat chastotasini"
              ],
              [
                "<code>time.Timer</code>",
                "Bitta kechikish yoki timeoutni"
              ],
              [
                "<code>context.WithTimeout</code>",
                "Butun amalning maksimal davomiyligini"
              ]
            ]
          },
          {
            "type": "code",
            "title": "burst-limit.go",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    tokenlar := make(chan struct{}, 3)\n    for i := 0; i < 3; i++ {\n        tokenlar <- struct{}{}\n    }\n\n    sorovlar := []string{\"a\", \"b\", \"c\", \"d\", \"e\"}\n    for _, s := range sorovlar {\n        select {\n        case <-tokenlar:\n            fmt.Println(\"bajarildi:\", s)\n        default:\n            fmt.Println(\"rad etildi:\", s)\n        }\n    }\n}",
            "output": "bajarildi: a\nbajarildi: b\nbajarildi: c\nrad etildi: d\nrad etildi: e"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Kutish yoki rad etish?",
            "html": "Semaphore'da odatda goroutine token bo'shashini kutadi — bu backpressure. Rate limiter esa so'rovni darhol rad etishi yoki navbatga qo'yishi mumkin. Foydalanuvchiga javob berganda <code>429 Too Many Requests</code> va <code>Retry-After</code> sarlavhasi mos. Murakkabroq token bucket uchun <code>golang.org/x/time/rate</code> ishlatiladi, lekin kichik ehtiyojga oddiy kanal yetarli."
          }
        ],
        "quiz": [
          {
            "q": "Buferli kanal semaphore sifatida ishlatilganda sig'im nimani bildiradi?",
            "options": ["Kanalning umrini", "Bir vaqtda bajariladigan ishlarning maksimal sonini", "Jami ishlar sonini", "Xatolar sonini"],
            "answer": 1,
            "explain": "Har bir ish token oladi va tugagach qaytaradi. Sig'im bir vaqtda faol bo'lishi mumkin bo'lgan ishchilar sonini cheklaydi."
          },
          {
            "q": "time.Ticker nima qiladi?",
            "options": ["Goroutin yaratadi", "Bir marta signal beradi", "Belgilangan oraliqda takroriy signal beradi", "Kanalni yopadi"],
            "answer": 2,
            "explain": "Ticker har bir intervalda kanalga vaqt yuboradi. Uni to'xtatish uchun Stop() chaqiriladi."
          },
          {
            "q": "Rate limiting ning asosiy maqsadi nima?",
            "options": ["Xotirani tozalash", "Testlarni tezlashtirish", "Kodni qisqartirish", "Resurslarni ortiqcha yuklanishdan himoyalash"],
            "answer": 3,
            "explain": "Rate limiting so'rov oqimini cheklab, server, API yoki bazani ortiqcha yuklanishdan va suiiste'moldan himoya qiladi."
          }
        ]
      },
      {
        "id": 37,
        "title": "HTTP server asoslari: net/http",
        "minutes": 17,
        "blocks": [
          {
            "type": "p",
            "html": "Go standart kutubxonasidagi <code>net/http</code> to'liq HTTP server yaratish uchun yetarli. Handler — <code>ServeHTTP(w, r)</code> metodli interfeys yoki oddiy funksiya. <code>http.ServeMux</code> yo'lni handler'ga bog'laydi. Ishlab chiqishda serverni <code>httptest</code> bilan xotirada sinash mumkin."
          },
          {
            "type": "code",
            "title": "server.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n)\n\nfunc salom(w http.ResponseWriter, r *http.Request) {\n    if r.Method != http.MethodGet {\n        http.Error(w, \"faqat GET\", http.StatusMethodNotAllowed)\n        return\n    }\n    w.Header().Set(\"Content-Type\", \"text/plain; charset=utf-8\")\n    fmt.Fprintln(w, \"Salom, HTTP!\")\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/salom\", salom)\n\n    rec := httptest.NewRecorder()\n    mux.ServeHTTP(rec, httptest.NewRequest(http.MethodGet, \"/salom\", nil))\n    fmt.Println(rec.Code, rec.Header().Get(\"Content-Type\"))\n    fmt.Print(rec.Body.String())\n\n    rec2 := httptest.NewRecorder()\n    mux.ServeHTTP(rec2, httptest.NewRequest(http.MethodGet, \"/yoq\", nil))\n    fmt.Println(rec2.Code)\n}",
            "output": "200 text/plain; charset=utf-8\nSalom, HTTP!\n404"
          },
          {
            "type": "table",
            "head": [
              "Qism",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>http.ServeMux</code>",
                "Yo'l bo'yicha handler tanlaydi"
              ],
              [
                "<code>mux.HandleFunc(path, f)</code>",
                "Funksiyani yo'lga bog'laydi"
              ],
              [
                "<code>http.ResponseWriter</code>",
                "Javob sarlavhalari va tanasini yozadi"
              ],
              [
                "<code>*http.Request</code>",
                "Metod, URL, sarlavhalar va tanani beradi"
              ],
              [
                "<code>http.Error</code>",
                "Xato status va matnini yozadi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "query-param.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n)\n\nfunc salom(w http.ResponseWriter, r *http.Request) {\n    ism := r.URL.Query().Get(\"ism\")\n    if ism == \"\" {\n        ism = \"mehmon\"\n    }\n    fmt.Fprintf(w, \"Salom, %s!\", ism)\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/salom\", salom)\n\n    rec := httptest.NewRecorder()\n    req := httptest.NewRequest(http.MethodGet, \"/salom?ism=Aziza\", nil)\n    mux.ServeHTTP(rec, req)\n\n    fmt.Println(rec.Body.String())\n}",
            "output": "Salom, Aziza!"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Production server",
            "html": "Haqiqiy serverda <code>http.Server{Addr: \":8080\", Handler: mux}</code> va oqilona <code>ReadHeaderTimeout</code>, <code>ReadTimeout</code>, <code>WriteTimeout</code>, <code>IdleTimeout</code> qiymatlarini bering. Go 1.22 dan boshlab <code>mux.HandleFunc(\"GET /salom\", f)</code> kabi metodli naqshlar ham ishlaydi. Handler ichida uzoq bloklanmang va har bir so'rovni loglang."
          }
        ],
        "quiz": [
          {
            "q": "http.HandlerFunc nima?",
            "options": ["Oddiy funksiyani Handler interfeysiga moslashtiruvchi adapter", "JSON parser", "Router kutubxonasi", "Yangi server turi"],
            "answer": 0,
            "explain": "HandlerFunc — ServeHTTP metodi bo'lgan funksiya turi. U oddiy funksiyani http.Handler sifatida ishlatish imkonini beradi."
          },
          {
            "q": "Status kodni qachon yozish kerak?",
            "options": ["Status kod yozilmaydi", "Javob tanasini yozishdan oldin", "Tana yozilgandan keyin", "Faqat handler oxirida"],
            "answer": 1,
            "explain": "WriteHeader birinchi marta tanaga yozilganda avtomatik 200 bilan yuboriladi. Boshqa status kerak bo'lsa, tanadan oldin chaqiring."
          },
          {
            "q": "404 status kodi nimani bildiradi?",
            "options": ["Serverda ichki xato", "Ruxsat yo'q", "So'ralgan resurs topilmadi", "So'rov juda tez"],
            "answer": 2,
            "explain": "404 Not Found — so'ralgan yo'l yoki resurs mavjud emasligini bildiradi."
          }
        ]
      },
      {
        "id": 38,
        "title": "Middleware, status kodlar va JSON API",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Middleware handler'ni o'rab, qo'shimcha ish bajaradi: sarlavha qo'shish, log yozish, autentifikatsiya tekshirish. U <code>http.Handler</code> olib, yangi <code>http.Handler</code> qaytaradi. JSON API'da javob sarlavhasi va status kodi tanadan oldin o'rnatiladi, xatolar ham bir xil JSON formatida qaytariladi."
          },
          {
            "type": "code",
            "title": "json-middleware.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n)\n\ntype Xabar struct {\n    Matn string `json:\"matn\"`\n}\n\nfunc yarat(w http.ResponseWriter, r *http.Request) {\n    if r.Method != http.MethodPost {\n        http.Error(w, \"faqat POST\", http.StatusMethodNotAllowed)\n        return\n    }\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    w.WriteHeader(http.StatusCreated)\n    json.NewEncoder(w).Encode(Xabar{Matn: \"yaratildi\"})\n}\n\nfunc sarlavha(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set(\"X-Ilova\", \"noldan\")\n        next.ServeHTTP(w, r)\n    })\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.Handle(\"/xabar\", sarlavha(http.HandlerFunc(yarat)))\n\n    rec := httptest.NewRecorder()\n    req := httptest.NewRequest(http.MethodPost, \"/xabar\", nil)\n    mux.ServeHTTP(rec, req)\n\n    fmt.Println(rec.Code)\n    fmt.Println(rec.Header().Get(\"X-Ilova\"))\n    fmt.Print(rec.Body.String())\n}",
            "output": "201\nnoldan\n{\"matn\":\"yaratildi\"}"
          },
          {
            "type": "table",
            "head": [
              "Status",
              "Qachon"
            ],
            "rows": [
              [
                "<code>200 OK</code>",
                "Muvaffaqiyatli o'qish yoki yangilash"
              ],
              [
                "<code>201 Created</code>",
                "Yangi resurs yaratildi"
              ],
              [
                "<code>400 Bad Request</code>",
                "So'rov tanasi yoki parametr noto'g'ri"
              ],
              [
                "<code>404 Not Found</code>",
                "Resurs topilmadi"
              ],
              [
                "<code>405 Method Not Allowed</code>",
                "Metod qo'llab-quvvatlanmaydi"
              ],
              [
                "<code>500 Internal Server Error</code>",
                "Kutilmagan server xatosi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "xato-json.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n)\n\ntype Xato struct {\n    Xabar string `json:\"xato\"`\n}\n\nfunc javob(w http.ResponseWriter, r *http.Request) {\n    if r.Method != http.MethodPost {\n        w.Header().Set(\"Content-Type\", \"application/json\")\n        w.WriteHeader(http.StatusMethodNotAllowed)\n        json.NewEncoder(w).Encode(Xato{Xabar: \"faqat POST\"})\n        return\n    }\n    w.WriteHeader(http.StatusCreated)\n    json.NewEncoder(w).Encode(Xato{Xabar: \"qabul qilindi\"})\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/xabar\", javob)\n\n    rec := httptest.NewRecorder()\n    req := httptest.NewRequest(http.MethodGet, \"/xabar\", nil)\n    mux.ServeHTTP(rec, req)\n\n    fmt.Println(rec.Code)\n    fmt.Print(rec.Body.String())\n}",
            "output": "405\n{\"xato\":\"faqat POST\"}"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "JSON javob qoidalari",
            "html": "<code>Content-Type: application/json</code> ni <code>WriteHeader</code> dan oldin qo'ying. <code>json.NewEncoder(w).Encode</code> oxiriga qator belgisi qo'shadi; bu normal. Xato bo'lsa ham JSON formatini saqlang, shunda mijoz bir xil parse qiladi. Ichki xato matnini foydalanuvchiga ko'rsatmang — logga yozib, umumiy xabar qaytaring. Katta tanani <code>http.MaxBytesReader</code> bilan cheklang."
          }
        ],
        "quiz": [
          {
            "q": "Middleware odatda qanday imzoga ega?",
            "options": ["func() error", "func(http.ResponseWriter)", "func(string) string", "func(http.Handler) http.Handler"],
            "answer": 3,
            "explain": "Middleware handler qabul qilib, uni o'rab yangi handler qaytaradi. Shu tufayli zanjir hosil qilish mumkin."
          },
          {
            "q": "Content-Type sarlavhasini qachon o'rnatish kerak?",
            "options": ["WriteHeader yoki tana yozilishidan oldin", "Javob yuborilgandan keyin", "Faqat 500 xatoda", "Content-Type majburiy emas"],
            "answer": 0,
            "explain": "Status va sarlavhalar javob boshlanganda yuboriladi. Shundan keyin o'zgartirish e'tiborsiz qoladi."
          },
          {
            "q": "json.NewEncoder(w).Encode natijasini nima qilish kerak?",
            "options": ["Har doim e'tiborsiz qoldirish", "Xatosini tekshirish yoki logga yozish", "Faqat testda tekshirish", "Kanalga yuborish"],
            "answer": 1,
            "explain": "Encode yozishda xato qaytarishi mumkin. Javob allaqachon boshlangan bo'lsa statusni o'zgartirib bo'lmaydi, lekin xatoni loglash kerak."
          }
        ]
      },
      {
        "id": 39,
        "title": "HTTP client, timeout va context",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Boshqa servisga so'rov yuborishda cheksiz kutish xavfli. <code>http.Client</code> uchun <code>Timeout</code> butun so'rovni cheklaydi; <code>http.NewRequestWithContext</code> esa so'rovni bekor qilinadigan qilib yaratadi. Javob tanasi har doim yopilishi va status kodi tekshirilishi kerak."
          },
          {
            "type": "code",
            "title": "client-timeout.go",
            "code": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"net/url\"\n    \"time\"\n)\n\nfunc main() {\n    srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        time.Sleep(100 * time.Millisecond)\n        fmt.Fprintln(w, \"kech\")\n    }))\n    defer srv.Close()\n\n    client := &http.Client{Timeout: 20 * time.Millisecond}\n    _, err := client.Get(srv.URL)\n    if err != nil {\n        var urlErr *url.Error\n        if errors.As(err, &urlErr) {\n            fmt.Println(\"timeout:\", urlErr.Timeout())\n        }\n        return\n    }\n    fmt.Println(\"javob keldi\")\n}",
            "output": "timeout: true"
          },
          {
            "type": "code",
            "title": "request-context.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"time\"\n)\n\nfunc main() {\n    srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        time.Sleep(120 * time.Millisecond)\n        fmt.Fprint(w, \"javob\")\n    }))\n    defer srv.Close()\n\n    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Millisecond)\n    defer cancel()\n\n    req, err := http.NewRequestWithContext(ctx, http.MethodGet, srv.URL, nil)\n    if err != nil {\n        panic(err)\n    }\n\n    _, err = http.DefaultClient.Do(req)\n    fmt.Println(\"bekor:\", ctx.Err())\n    fmt.Println(\"xato bor:\", err != nil)\n}",
            "output": "bekor: context deadline exceeded\nxato bor: true"
          },
          {
            "type": "table",
            "head": [
              "Sozlama",
              "Nimani cheklaydi"
            ],
            "rows": [
              [
                "<code>Client.Timeout</code>",
                "Ulanish, sarlavhalar va tanani o'qishni o'z ichiga olgan butun so'rov"
              ],
              [
                "<code>Transport.ResponseHeaderTimeout</code>",
                "Javob sarlavhalarini kutish vaqtini"
              ],
              [
                "<code>Request.Context()</code>",
                "So'rovni bekor qilish yoki deadline berish"
              ],
              [
                "<code>maxResponseBytes</code>",
                "Javob tanasining hajmini cheklash"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Client va body",
            "html": "<code>http.Client</code> ni har so'rovda yangidan yaratmang — u ulanishlarni qayta ishlatadi. <code>resp.Body.Close()</code> ni <code>defer</code> qiling, aks holda ulanish bo'shamaydi. 200 bo'lmagan statusni ham xato deb hisoblash kerakmi — API siyosatiga bog'liq, lekin tekshirish shart. Javobni <code>io.LimitReader</code> bilan o'qing."
          }
        ],
        "quiz": [
          {
            "q": "HTTP javob tanasini nima qilish kerak?",
            "options": ["Global o'zgaruvchiga saqlash", "O'qimasdan qoldirish", "defer bilan yopish", "Faqat 200 bo'lsa yopish"],
            "answer": 2,
            "explain": "Javob tanasi yopilmasa, ulanish qayta ishlatilmaydi va resurs oqishi mumkin. Uni defer resp.Body.Close() bilan yoping."
          },
          {
            "q": "http.Client.Timeout nimani cheklaydi?",
            "options": ["Faqat server javobini yozishni", "Faqat TLS handshake'ni", "Faqat DNS so'rovini", "Butun so'rovni, jumladan tanani o'qishni"],
            "answer": 3,
            "explain": "Client.Timeout so'rov boshidan javob tanasi yopilgunga qadar bo'lgan umumiy vaqtni cheklaydi."
          },
          {
            "q": "So'rovni context bilan bekor qilinadigan qilish uchun qaysi funksiya ishlatiladi?",
            "options": ["http.NewRequestWithContext", "http.ListenAndServe", "http.Get", "http.Post"],
            "answer": 0,
            "explain": "NewRequestWithContext ctx ni so'rovga bog'laydi. Context bekor bo'lsa, so'rov ham bekor qilinadi."
          }
        ]
      },
      {
        "id": 40,
        "title": "HTML shablonlari: html/template",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Server tomonda HTML yaratish uchun <code>html/template</code> ishlatiladi. U ma'lumotni shablonga joylashtiradi va foydalanuvchi matnini avtomatik HTML-escape qiladi — bu XSS hujumlarining oldini oladi. Shablonlar <code>{{.Maydon}}</code>, <code>{{range}}</code> va <code>{{if}}</code> kabi amallarni qo'llab-quvvatlaydi."
          },
          {
            "type": "code",
            "title": "sahifa.go",
            "code": "package main\n\nimport (\n    \"html/template\"\n    \"os\"\n)\n\ntype Sahifa struct {\n    Sarlavha    string\n    Yangiliklar []string\n}\n\nfunc main() {\n    const shablon = `<h1>{{.Sarlavha}}</h1>\n<ul>{{range .Yangiliklar}}<li>{{.}}</li>{{end}}</ul>`\n\n    t := template.Must(template.New(\"sahifa\").Parse(shablon))\n    data := Sahifa{\n        Sarlavha:    \"Go yangiliklari\",\n        Yangiliklar: []string{\"Generikalar\", \"slices paketi\", \"http tuzatishlari\"},\n    }\n\n    if err := t.Execute(os.Stdout, data); err != nil {\n        panic(err)\n    }\n}",
            "output": "<h1>Go yangiliklari</h1>\n<ul><li>Generikalar</li><li>slices paketi</li><li>http tuzatishlari</li></ul>"
          },
          {
            "type": "table",
            "head": [
              "Amal",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>{{.Ism}}</code>",
                "Struktura maydoni yoki map qiymatini chiqaradi"
              ],
              [
                "<code>{{range .Items}}</code>",
                "Slice, map yoki kanal bo'ylab yuradi"
              ],
              [
                "<code>{{if .Bor}}</code>",
                "Shartga qarab blokni chiqaradi"
              ],
              [
                "<code>{{template \"nom\" .}}</code>",
                "Boshqa shablonni chaqiradi"
              ],
              [
                "<code>template.Must</code>",
                "Parse xatosida darhol panic qiladi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "escaping.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"html/template\"\n    \"os\"\n)\n\nfunc main() {\n    t := template.Must(template.New(\"x\").Parse(\n        `{{if .Bor}}<b>{{.Ism}}</b>{{else}}yo'q{{end}}`))\n\n    data := map[string]any{\"Bor\": true, \"Ism\": \"<Aziza>\"}\n    if err := t.Execute(os.Stdout, data); err != nil {\n        panic(err)\n    }\n    fmt.Println()\n}",
            "output": "<b>&lt;Aziza&gt;</b>"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "text/template yoki html/template?",
            "html": "HTML uchun doim <code>html/template</code> ishlating; <code>text/template</code> escape qilmaydi va XSS xavfini tug'diradi. Ishonchli HTML bo'lagini ataylab chiqarish kerak bo'lsa <code>template.HTML</code> turiga o'tkazish mumkin, lekin bu faqat o'zingiz yaratgan, tekshirilgan HTML uchun. Shablonlarni dastur boshida bir marta parse qilib, keyin qayta ishlating."
          }
        ],
        "quiz": [
          {
            "q": "html/template foydalanuvchi kiritgan matn bilan nima qiladi?",
            "options": ["Hech narsa qilmaydi", "HTML belgilarini escape qiladi", "Matnni o'chiradi", "Har doim JSON qiladi"],
            "answer": 1,
            "explain": "Kontekstga mos escaping XSS'ning oldini oladi. Masalan < va > &lt; va &gt; ga aylanadi."
          },
          {
            "q": "Shablonda slice bo'ylab yurish uchun qaysi amal ishlatiladi?",
            "options": ["{{each}}", "{{for}}", "{{range}}", "{{loop}}"],
            "answer": 2,
            "explain": "range slice, map yoki kanal elementlarini takrorlaydi. Tsikl ichida nuqta joriy elementni bildiradi."
          },
          {
            "q": "template.Must shablon parse xato bersa nima qiladi?",
            "options": ["nil qaytaradi", "Xatoni qaytaradi", "Shablonni o'tkazib yuboradi", "Panic qiladi"],
            "answer": 3,
            "explain": "template.Must xatoni darhol panic'ga aylantiradi. Dastur boshidagi statik shablonlar uchun bu qulay."
          }
        ]
      },
      {
        "id": 41,
        "title": "database/sql asoslari: ulanish va so'rovlar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "<code>database/sql</code> — ma'lumotlar bazasi bilan ishlash uchun umumiy interfeys. U aniq bazaga bog'lanmaydi: drayver alohida import qilinadi. <code>sql.Open</code> ulanishlar pulini yaratadi, <code>PingContext</code> esa bazaga yetib borishni tekshiradi. So'rovlar context bilan bajariladi."
          },
          {
            "type": "code",
            "title": "boglanish.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"database/sql\"\n    \"fmt\"\n    \"log\"\n    \"time\"\n\n    _ \"github.com/jackc/pgx/v5/stdlib\"\n)\n\nfunc main() {\n    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\n    defer cancel()\n\n    db, err := sql.Open(\"pgx\",\n        \"postgres://app:secret@localhost:5432/noldan?sslmode=disable\")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer db.Close()\n\n    if err := db.PingContext(ctx); err != nil {\n        log.Fatal(\"bazaga ulanmadi: \", err)\n    }\n\n    var ism string\n    var yosh int\n    err = db.QueryRowContext(ctx,\n        \"SELECT ism, yosh FROM talabalar WHERE id = $1\", 1).Scan(&ism, &yosh)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(ism, yosh)\n}",
            "output": "Aziza 15"
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>sql.Open</code>",
                "Ulanish pulini yaratadi, darhol ulanmaydi"
              ],
              [
                "<code>db.PingContext</code>",
                "Bazaga yetib borishni tekshiradi"
              ],
              [
                "<code>QueryRowContext</code>",
                "Bitta qator qaytaradi; Scan bilan o'qiladi"
              ],
              [
                "<code>QueryContext</code>",
                "Ko'p qatorli natija uchun Rows qaytaradi"
              ],
              [
                "<code>ExecContext</code>",
                "INSERT, UPDATE, DELETE bajaradi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "qatorlar.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"database/sql\"\n    \"fmt\"\n    \"log\"\n\n    _ \"github.com/jackc/pgx/v5/stdlib\"\n)\n\nfunc main() {\n    db, err := sql.Open(\"pgx\",\n        \"postgres://app:secret@localhost:5432/noldan?sslmode=disable\")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer db.Close()\n\n    ctx := context.Background()\n    rows, err := db.QueryContext(ctx,\n        \"SELECT ism, yosh FROM talabalar ORDER BY ism\")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer rows.Close()\n\n    for rows.Next() {\n        var ism string\n        var yosh int\n        if err := rows.Scan(&ism, &yosh); err != nil {\n            log.Fatal(err)\n        }\n        fmt.Printf(\"%s (%d)\\n\", ism, yosh)\n    }\n    if err := rows.Err(); err != nil {\n        log.Fatal(err)\n    }\n}",
            "output": "Aziza (15)\nBek (17)\nDilnoza (16)"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Placeholder va xavfsizlik",
            "html": "SQL'ga qiymatlarni string birlashtirish bilan qo'shmang — bu SQL injection'ga olib keladi. Har bir drayverning placeholder uslubi bor: PostgreSQL <code>$1</code>, MySQL <code>?</code>, SQLite <code>?</code>. <code>QueryRow</code> natijasini <code>Scan</code> qilishda qator topilmasa <code>sql.ErrNoRows</code> qaytadi. <code>Rows</code> ni yopishni unutmang va tsikldan keyin <code>rows.Err()</code> ni tekshiring."
          }
        ],
        "quiz": [
          {
            "q": "sql.ErrNoRows nimani bildiradi?",
            "options": ["So'rov bitta qator qaytarmadi", "Jadval mavjud emas", "SQL sintaksisi noto'g'ri", "Bazaga ulanib bo'lmadi"],
            "answer": 0,
            "explain": "QueryRow.Scan qator topmasa sql.ErrNoRows qaytaradi. Buni errors.Is bilan ajratib, 404 javob berish mumkin."
          },
          {
            "q": "PostgreSQL drayverida parametr joyi qanday yoziladi?",
            "options": ["@1", "$1", "?", ":1"],
            "answer": 1,
            "explain": "PostgreSQL $1, $2 ko'rinishidagi pozitsion parametrlarni ishlatadi. MySQL va SQLite odatda ? dan foydalanadi."
          },
          {
            "q": "sql.Open bazaga darhol ulanadimi?",
            "options": ["Ha, har doim", "Faqat PostgreSQL'da", "Yo'q, ulanish birinchi so'rovda yoki Ping'da ochiladi", "Faqat context bilan"],
            "answer": 2,
            "explain": "sql.Open faqat pool yaratadi. Haqiqiy ulanishni tekshirish uchun Ping yoki birinchi so'rov kerak."
          }
        ]
      },
      {
        "id": 42,
        "title": "database/sql: CRUD va tranzaksiyalar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Bir nechta SQL amal bir butun bo'lib bajarilishi kerak bo'lsa, <b>tranzaksiya</b> ishlatiladi: yoki hammasi muvaffaqiyatli, yoki hech biri. <code>BeginTx</code> tranzaksiyani boshlaydi, <code>Commit</code> tasdiqlaydi, <code>Rollback</code> bekor qiladi. Pul o'tkazmasi — klassik misol: yechish va qo'shish birga bajarilishi shart."
          },
          {
            "type": "code",
            "title": "otkazma.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"database/sql\"\n    \"fmt\"\n    \"log\"\n\n    _ \"github.com/jackc/pgx/v5/stdlib\"\n)\n\nfunc main() {\n    db, err := sql.Open(\"pgx\",\n        \"postgres://app:secret@localhost:5432/noldan?sslmode=disable\")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer db.Close()\n\n    ctx := context.Background()\n    tx, err := db.BeginTx(ctx, nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer tx.Rollback()\n\n    res, err := tx.ExecContext(ctx,\n        \"UPDATE hisoblar SET balans = balans - $1 WHERE id = $2\", 100, 1)\n    if err != nil {\n        log.Fatal(err)\n    }\n    soni, err := res.RowsAffected()\n    if err != nil || soni != 1 {\n        log.Fatal(\"yuboruvchi hisob topilmadi\")\n    }\n\n    res, err = tx.ExecContext(ctx,\n        \"UPDATE hisoblar SET balans = balans + $1 WHERE id = $2\", 100, 2)\n    if err != nil {\n        log.Fatal(err)\n    }\n    soni, err = res.RowsAffected()\n    if err != nil || soni != 1 {\n        log.Fatal(\"qabul qiluvchi hisob topilmadi\")\n    }\n\n    if err := tx.Commit(); err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(\"o'tkazma bajarildi\")\n}",
            "output": "o'tkazma bajarildi"
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>BeginTx(ctx, opts)</code>",
                "Tranzaksiyani boshlaydi"
              ],
              [
                "<code>tx.ExecContext</code>",
                "Tranzaksiya ichida INSERT/UPDATE/DELETE"
              ],
              [
                "<code>tx.QueryRowContext</code>",
                "Tranzaksiya ichida bitta qator o'qish"
              ],
              [
                "<code>tx.Commit()</code>",
                "O'zgarishlarni tasdiqlaydi"
              ],
              [
                "<code>tx.Rollback()</code>",
                "O'zgarishlarni bekor qiladi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "balanslar.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"database/sql\"\n    \"fmt\"\n    \"log\"\n\n    _ \"github.com/jackc/pgx/v5/stdlib\"\n)\n\nfunc main() {\n    db, err := sql.Open(\"pgx\",\n        \"postgres://app:secret@localhost:5432/noldan?sslmode=disable\")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer db.Close()\n\n    ctx := context.Background()\n    rows, err := db.QueryContext(ctx,\n        \"SELECT id, balans FROM hisoblar ORDER BY id\")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer rows.Close()\n\n    for rows.Next() {\n        var id, balans int\n        if err := rows.Scan(&id, &balans); err != nil {\n            log.Fatal(err)\n        }\n        fmt.Printf(\"%d: %d\\n\", id, balans)\n    }\n    if err := rows.Err(); err != nil {\n        log.Fatal(err)\n    }\n}",
            "output": "1: 900\n2: 600"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Tranzaksiya qoidalari",
            "html": "Tranzaksiyani imkon qadar qisqa tuting: uzoq tranzaksiya qulflarni uzoq ushlab turadi. <code>defer tx.Rollback()</code> ni commit'dan keyin ham qo'yish odatiy — muvaffaqiyatli commit'dan keyin u <code>sql.ErrTxDone</code> qaytaradi va e'tiborsiz qoldiriladi. <code>RowsAffected</code> nol bo'lsa, ehtimol id topilmagan; bu holatni biznes xatosi sifatida boshqaring. Tranzaksiya ichida tashqi tarmoq chaqiruvlarini qilmang."
          }
        ],
        "quiz": [
          {
            "q": "Tranzaksiya muvaffaqiyatli Commit qilingandan keyin Rollback chaqirilsa nima bo'ladi?",
            "options": ["Panic yuz beradi", "Yangi tranzaksiya boshlanadi", "O'zgarishlar bekor qilinadi", "sql.ErrTxDone qaytadi, amalda ta'sir qilmaydi"],
            "answer": 3,
            "explain": "Commit'dan keyin tranzaksiya yopilgan. Rollback xato qaytaradi, lekin allaqachon tasdiqlangan o'zgarishlarni bekor qilmaydi."
          },
          {
            "q": "RowsAffected qanday ma'lumot beradi?",
            "options": ["So'rov nechta qatorga ta'sir qilganini", "Jadvaldagi umumiy qatorlar sonini", "So'rov davomiyligini", "Ulanishlar sonini"],
            "answer": 0,
            "explain": "RowsAffected UPDATE yoki DELETE natijasida o'zgargan qatorlar sonini qaytaradi. Uni biznes tekshiruvi uchun ishlatish mumkin."
          },
          {
            "q": "Tranzaksiyadan asosiy maqsad nima?",
            "options": ["So'rovni tezlashtirish", "Bir nechta amalni yaxlit (all-or-nothing) bajarish", "Jadvalni indekslash", "Ulanish sonini oshirish"],
            "answer": 1,
            "explain": "Tranzaksiya atomarlikni ta'minlaydi: xato bo'lsa barcha o'zgarishlar bekor qilinadi, muvaffaqiyatda hammasi tasdiqlanadi."
          }
        ]
      },
      {
        "id": 43,
        "title": "Loyiha: vazifalar API uchun model va ombor",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Endi bir nechta darsdan iborat amaliy loyihani boshlaymiz: vazifalar uchun JSON API. Birinchi qadam — model va xotiradagi ombor. Ombor bir vaqtda bir nechta HTTP so'rovga xizmat qilishi mumkin, shuning uchun map'ni <code>sync.RWMutex</code> bilan himoyalaymiz."
          },
          {
            "type": "code",
            "title": "ombor.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"sort\"\n    \"sync\"\n)\n\ntype Vazifa struct {\n    ID        int    `json:\"id\"`\n    Nom       string `json:\"nom\"`\n    Bajarildi bool   `json:\"bajarildi\"`\n}\n\ntype Ombor struct {\n    mu        sync.RWMutex\n    keyingiID int\n    vazifalar map[int]Vazifa\n}\n\nfunc YangiOmbor() *Ombor {\n    return &Ombor{vazifalar: make(map[int]Vazifa)}\n}\n\nfunc (o *Ombor) Qosh(nom string) Vazifa {\n    o.mu.Lock()\n    defer o.mu.Unlock()\n    o.keyingiID++\n    v := Vazifa{ID: o.keyingiID, Nom: nom}\n    o.vazifalar[v.ID] = v\n    return v\n}\n\nfunc (o *Ombor) Ol(id int) (Vazifa, bool) {\n    o.mu.RLock()\n    defer o.mu.RUnlock()\n    v, ok := o.vazifalar[id]\n    return v, ok\n}\n\nfunc (o *Ombor) Bajar(id int) bool {\n    o.mu.Lock()\n    defer o.mu.Unlock()\n    v, ok := o.vazifalar[id]\n    if !ok {\n        return false\n    }\n    v.Bajarildi = true\n    o.vazifalar[id] = v\n    return true\n}\n\nfunc (o *Ombor) Royxat() []Vazifa {\n    o.mu.RLock()\n    defer o.mu.RUnlock()\n    natija := make([]Vazifa, 0, len(o.vazifalar))\n    for _, v := range o.vazifalar {\n        natija = append(natija, v)\n    }\n    sort.Slice(natija, func(i, j int) bool {\n        return natija[i].ID < natija[j].ID\n    })\n    return natija\n}\n\nfunc main() {\n    o := YangiOmbor()\n    v := o.Qosh(\"Go testlarini yozish\")\n    data, _ := json.Marshal(v)\n    fmt.Println(string(data))\n    fmt.Println(len(o.Royxat()))\n}",
            "output": "{\"id\":1,\"nom\":\"Go testlarini yozish\",\"bajarildi\":false}\n1"
          },
          {
            "type": "table",
            "head": [
              "Metod",
              "Qulf",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>Qosh</code>",
                "Lock",
                "ID beradi va map'ga yozadi"
              ],
              [
                "<code>Ol</code>",
                "RLock",
                "Bitta vazifani o'qiydi"
              ],
              [
                "<code>Bajar</code>",
                "Lock",
                "Bajarildi maydonini o'zgartiradi"
              ],
              [
                "<code>Royxat</code>",
                "RLock",
                "Nusxa slice'ni ID bo'yicha saralab qaytaradi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "demo.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\nfunc main() {\n    o := YangiOmbor()\n    o.Qosh(\"Go testlarini yozish\")\n    o.Qosh(\"API yozish\")\n    o.Bajar(1)\n\n    for _, v := range o.Royxat() {\n        data, _ := json.Marshal(v)\n        fmt.Println(string(data))\n    }\n\n    _, bor := o.Ol(99)\n    fmt.Println(\"topildi:\", bor)\n}",
            "output": "{\"id\":1,\"nom\":\"Go testlarini yozish\",\"bajarildi\":true}\n{\"id\":2,\"nom\":\"API yozish\",\"bajarildi\":false}\ntopildi: false"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Ombor chegarasi",
            "html": "Barcha o'zgartirishlar qulf ostida bajariladi, o'qishlar esa <code>RLock</code> bilan parallel bo'lishi mumkin. <code>Royxat</code> map'ning ichki slice'ini qaytarmaydi, yangi nusxa yasaydi — chaqiruvchi uni o'zgartirsa ombor buzilmaydi. Keyingi darsda shu ombor ustiga HTTP handler'lar qo'shamiz. Omborni interfeys ortiga yashirsangiz, testda xotiradagi, ishlab chiqarishda bazadagi implementatsiyani almashtirish oson bo'ladi."
          }
        ],
        "quiz": [
          {
            "q": "Ombor map'ini mutex bilan himoyalashning sababi nima?",
            "options": ["ID ni kamaytirish uchun", "Map'ni saralash uchun", "HTTP so'rovlari parallel kelganda data race'ni oldini olish uchun", "JSON'ni tezlashtirish uchun"],
            "answer": 2,
            "explain": "net/http har bir so'rovni alohida goroutinda bajaradi. Umumiy map'ga parallel yozish race beradi, shuning uchun qulf kerak."
          },
          {
            "q": "Royxat metodi nima uchun yangi slice qaytaradi?",
            "options": ["JSON'ni chiqarish uchun", "ID ni oshirish uchun", "Map'ni yopish uchun", "Chaqiruvchi ombor ichki holatini tasodifan o'zgartirmasligi uchun"],
            "answer": 3,
            "explain": "Nusxa qaytarish inkapsulyatsiyani saqlaydi. Aks holda chaqiruvchi slice elementini o'zgartirib, ombor ma'lumotini buzishi mumkin."
          },
          {
            "q": "keyingiID qaysi sharoitda oshirilishi kerak?",
            "options": ["Faqat Lock ostida", "Faqat RLock ostida", "Faqat main funksiyasida", "Qulfsiz, har qanday joyda"],
            "answer": 0,
            "explain": "ID hisoblagichi ham umumiy holat. Uni o'qish va oshirish yozuv qulfi ostida bajarilishi kerak, aks holda ikki so'rov bir xil ID olishi mumkin."
          }
        ]
      },
      {
        "id": 44,
        "title": "Loyiha: HTTP handler va marshrutlar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Endi ombor ustiga HTTP qatlamini qo'shamiz. Har bir handler so'rovni tekshiradi, JSON'ni o'qiydi yoki yozadi va mos status kod qaytaradi. Marshrutlash uchun standart <code>http.ServeMux</code> yetarli; murakkab parametrlar uchun yo'lni qo'lda ajratish yoki Go 1.22+ naqshlaridan foydalanish mumkin."
          },
          {
            "type": "code",
            "title": "server.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"strings\"\n    \"sync\"\n)\n\ntype Vazifa struct {\n    ID        int    `json:\"id\"`\n    Nom       string `json:\"nom\"`\n    Bajarildi bool   `json:\"bajarildi\"`\n}\n\ntype Ombor struct {\n    mu        sync.Mutex\n    keyingiID int\n    vazifalar map[int]Vazifa\n}\n\nfunc YangiOmbor() *Ombor {\n    return &Ombor{vazifalar: make(map[int]Vazifa)}\n}\n\nfunc (o *Ombor) Qosh(nom string) Vazifa {\n    o.mu.Lock()\n    defer o.mu.Unlock()\n    o.keyingiID++\n    v := Vazifa{ID: o.keyingiID, Nom: nom}\n    o.vazifalar[v.ID] = v\n    return v\n}\n\nfunc (o *Ombor) Ol(id int) (Vazifa, bool) {\n    o.mu.Lock()\n    defer o.mu.Unlock()\n    v, ok := o.vazifalar[id]\n    return v, ok\n}\n\ntype Server struct {\n    ombor *Ombor\n}\n\nfunc (s *Server) yarat(w http.ResponseWriter, r *http.Request) {\n    if r.Method != http.MethodPost {\n        http.Error(w, \"faqat POST\", http.StatusMethodNotAllowed)\n        return\n    }\n\n    var kirish struct {\n        Nom string `json:\"nom\"`\n    }\n    if err := json.NewDecoder(r.Body).Decode(&kirish); err != nil {\n        http.Error(w, \"JSON noto'g'ri\", http.StatusBadRequest)\n        return\n    }\n    if strings.TrimSpace(kirish.Nom) == \"\" {\n        http.Error(w, \"nom bo'sh\", http.StatusBadRequest)\n        return\n    }\n\n    v := s.ombor.Qosh(kirish.Nom)\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    w.WriteHeader(http.StatusCreated)\n    json.NewEncoder(w).Encode(v)\n}\n\nfunc main() {\n    s := &Server{ombor: YangiOmbor()}\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/vazifalar\", s.yarat)\n\n    body := strings.NewReader(`{\"nom\":\"Go o'rganish\"}`)\n    req := httptest.NewRequest(http.MethodPost, \"/vazifalar\", body)\n    rec := httptest.NewRecorder()\n    mux.ServeHTTP(rec, req)\n\n    fmt.Println(rec.Code)\n    fmt.Print(rec.Body.String())\n}",
            "output": "201\n{\"id\":1,\"nom\":\"Go o'rganish\",\"bajarildi\":false}"
          },
          {
            "type": "table",
            "head": [
              "Metod va yo'l",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>GET /vazifalar</code>",
                "Barcha vazifalar ro'yxati"
              ],
              [
                "<code>POST /vazifalar</code>",
                "Yangi vazifa yaratish"
              ],
              [
                "<code>GET /vazifalar/{id}</code>",
                "Bitta vazifani olish"
              ],
              [
                "<code>PATCH /vazifalar/{id}</code>",
                "Holatni yangilash"
              ],
              [
                "<code>DELETE /vazifalar/{id}</code>",
                "Vazifani o'chirish"
              ]
            ]
          },
          {
            "type": "code",
            "title": "bitta.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"strconv\"\n    \"strings\"\n)\n\nfunc (s *Server) bitta(w http.ResponseWriter, r *http.Request) {\n    idStr := strings.TrimPrefix(r.URL.Path, \"/vazifalar/\")\n    id, err := strconv.Atoi(idStr)\n    if err != nil {\n        http.Error(w, \"noto'g'ri id\", http.StatusBadRequest)\n        return\n    }\n\n    v, ok := s.ombor.Ol(id)\n    if !ok {\n        http.Error(w, \"topilmadi\", http.StatusNotFound)\n        return\n    }\n\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    json.NewEncoder(w).Encode(v)\n}\n\nfunc main() {\n    s := &Server{ombor: YangiOmbor()}\n    s.ombor.Qosh(\"Go o'rganish\")\n\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/vazifalar/\", s.bitta)\n\n    for _, id := range []int{1, 99} {\n        path := fmt.Sprintf(\"/vazifalar/%d\", id)\n        rec := httptest.NewRecorder()\n        mux.ServeHTTP(rec, httptest.NewRequest(http.MethodGet, path, nil))\n        fmt.Println(rec.Code, strings.TrimSpace(rec.Body.String()))\n    }\n}",
            "output": "200 {\"id\":1,\"nom\":\"Go o'rganish\",\"bajarildi\":false}\n404 topilmadi"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Handler qoidalari",
            "html": "So'rov tanasini cheklang (<code>http.MaxBytesReader</code>), noto'g'ri JSON'da 400 qaytaring. Resurs yaratilganda 201 va <code>Location</code> sarlavhasi mos. <code>http.Error</code> matnni oddiy matn sifatida yozadi; API'da JSON xato formati kerak bo'lsa alohida helper yozing. Go 1.22+ da <code>r.PathValue(\"id\")</code> bilan yo'l parametrini olish mumkin, lekin eski versiyalarda <code>TrimPrefix</code> ishlatiladi."
          }
        ],
        "quiz": [
          {
            "q": "Yangi resurs muvaffaqiyatli yaratilganda qaysi status mos?",
            "options": ["200 OK", "201 Created", "204 No Content", "302 Found"],
            "answer": 1,
            "explain": "201 Created yangi resurs yaratilganini bildiradi. Javobda yangi resursning ID si yoki Location sarlavhasi bo'lishi odatiy."
          },
          {
            "q": "POST handler noto'g'ri JSON qabul qilsa qaysi status qaytarishi kerak?",
            "options": ["404 Not Found", "500 Internal Server Error", "400 Bad Request", "401 Unauthorized"],
            "answer": 2,
            "explain": "Mijoz yuborgan tana o'qib bo'lmaydigan bo'lsa, bu mijoz xatosi — 400 Bad Request."
          },
          {
            "q": "ServeMux'da /vazifalar/ naqshiga mos so'rov qaysi handler'ga tushadi?",
            "options": ["Hech qaysi handler'ga", "Faqat POST so'rovlar", "Faqat aniq /vazifalar yo'li", "Shu prefiks bilan boshlanadigan yo'llar"],
            "answer": 3,
            "explain": "Oxirida slash bo'lgan naqsh subtree bo'lib, shu prefiks bilan boshlanadigan barcha yo'llarni qabul qiladi."
          }
        ]
      },
      {
        "id": 45,
        "title": "Loyiha: middleware va markazlashgan xatolar",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "API o'sganda har bir handler'da bir xil tekshiruvlarni takrorlamaslik kerak. Middleware autentifikatsiya, log, sarlavhalar va panic'dan himoyalashni markazlashtiradi. Xatolar ham bitta formatda qaytarilsa, mijoz uchun ishlash osonlashadi: <code>{\"xato\":\"...\"}</code>."
          },
          {
            "type": "code",
            "title": "recover-middleware.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"strings\"\n)\n\nfunc recoverMiddleware(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        defer func() {\n            if rec := recover(); rec != nil {\n                w.Header().Set(\"Content-Type\", \"application/json\")\n                w.WriteHeader(http.StatusInternalServerError)\n                json.NewEncoder(w).Encode(map[string]string{\n                    \"xato\": \"ichki xato\",\n                })\n            }\n        }()\n        next.ServeHTTP(w, r)\n    })\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/ok\", func(w http.ResponseWriter, r *http.Request) {\n        fmt.Fprintln(w, \"ok\")\n    })\n    mux.HandleFunc(\"/buzilgan\", func(w http.ResponseWriter, r *http.Request) {\n        panic(\"kutilmagan holat\")\n    })\n\n    handler := recoverMiddleware(mux)\n    for _, path := range []string{\"/ok\", \"/buzilgan\"} {\n        rec := httptest.NewRecorder()\n        handler.ServeHTTP(rec, httptest.NewRequest(http.MethodGet, path, nil))\n        fmt.Println(rec.Code, strings.TrimSpace(rec.Body.String()))\n    }\n}",
            "output": "200 ok\n500 {\"xato\":\"ichki xato\"}"
          },
          {
            "type": "table",
            "head": [
              "Middleware",
              "Vazifasi"
            ],
            "rows": [
              [
                "Recover",
                "Panic'ni ushlab, 500 JSON qaytaradi"
              ],
              [
                "Logger",
                "Metod, yo'l, status va davomiylikni yozadi"
              ],
              [
                "Auth",
                "Token yoki sessiyani tekshiradi"
              ],
              [
                "Request ID",
                "Har bir so'rovga kuzatuv identifikatori qo'shadi"
              ],
              [
                "CORS",
                "Brauzer uchun ruxsat sarlavhalarini boshqaradi"
              ]
            ]
          },
          {
            "type": "code",
            "title": "xato-helper.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"strings\"\n)\n\ntype XatoJavob struct {\n    Xato string `json:\"xato\"`\n}\n\nfunc xato(w http.ResponseWriter, status int, matn string) {\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    w.WriteHeader(status)\n    json.NewEncoder(w).Encode(XatoJavob{Xato: matn})\n}\n\nfunc yarat(w http.ResponseWriter, r *http.Request) {\n    if r.Method != http.MethodPost {\n        xato(w, http.StatusMethodNotAllowed, \"faqat POST\")\n        return\n    }\n\n    var kirish struct {\n        Nom string `json:\"nom\"`\n    }\n    if err := json.NewDecoder(r.Body).Decode(&kirish); err != nil ||\n        strings.TrimSpace(kirish.Nom) == \"\" {\n        xato(w, http.StatusBadRequest, \"nom bo'sh\")\n        return\n    }\n\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    w.WriteHeader(http.StatusCreated)\n    json.NewEncoder(w).Encode(map[string]string{\"holat\": \"yaratildi\"})\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/vazifalar\", yarat)\n\n    for _, tc := range []struct {\n        method string\n        body   string\n    }{\n        {http.MethodGet, \"\"},\n        {http.MethodPost, `{\"nom\":\"   \"}`},\n    } {\n        rec := httptest.NewRecorder()\n        req := httptest.NewRequest(tc.method, \"/vazifalar\", strings.NewReader(tc.body))\n        mux.ServeHTTP(rec, req)\n        fmt.Println(rec.Code, strings.TrimSpace(rec.Body.String()))\n    }\n}",
            "output": "405 {\"xato\":\"faqat POST\"}\n400 {\"xato\":\"nom bo'sh\"}"
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Ikki marta yozmang",
            "html": "Status yoki tana yozilgandan keyin yana <code>WriteHeader</code> chaqirish samarasiz va logda ogohlantirish beradi. Recover middleware'da handler allaqachon javob yozgan bo'lsa, 500 ni qayta yozib bo'lmaydi — bunday holatda faqat log yozing. Ichki xato tafsilotlarini mijozga ko'rsatmang, ularni request ID bilan logga bog'lang. Middleware tartibi muhim: recover eng tashqarida turishi kerak."
          }
        ],
        "quiz": [
          {
            "q": "Recover middleware qayerda turishi tavsiya etiladi?",
            "options": ["Middleware zanjirining eng tashqarisida", "Faqat testda", "Routerdan keyin, eng ichkarida", "Handler ichida"],
            "answer": 0,
            "explain": "Eng tashqi recover barcha ichki handler va middleware'lardagi panic'ni ushlaydi. Ichkarida tursa, tashqi qatlamlardagi panic ushlanmaydi."
          },
          {
            "q": "API xatolarini bir xil JSON formatida qaytarishning afzalligi nima?",
            "options": ["Kod sekinlashadi", "Mijoz bir xil parse qiladi va xatoni ishonchli ko'rsatadi", "Status kod kerak bo'lmaydi", "Xatolar yo'qoladi"],
            "answer": 1,
            "explain": "Barqaror xato sxemasi mijoz integratsiyasini soddalashtiradi va turli handler'lardagi nomuvofiqlikni yo'qotadi."
          },
          {
            "q": "Handler javobni allaqachon yozgan bo'lsa, recover ichida 500 qaytarish to'g'rimi?",
            "options": ["Ha, lekin faqat 404 bilan", "Ha, har doim", "Yo'q, javob yuborilgan; faqat log yozish mumkin", "Ha, agar Content-Type JSON bo'lsa"],
            "answer": 2,
            "explain": "Javob boshlangandan keyin status va sarlavhalarni o'zgartirib bo'lmaydi. Qo'shimcha yozish mijozni chalg'itadi."
          }
        ]
      },
      {
        "id": 46,
        "title": "Loyiha: httptest bilan API testlari",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "HTTP handler'larni testlash uchun haqiqiy port ochish shart emas. <code>httptest.NewRequest</code> so'rov yaratadi, <code>httptest.NewRecorder</code> javobni xotirada yig'adi. <code>mux.ServeHTTP(rec, req)</code> orqali butun marshrut va handler zanjirini sinash mumkin. Bu testlar tez va tarmoqqa bog'liq emas."
          },
          {
            "type": "code",
            "title": "api_test.go",
            "code": "package main\n\nimport (\n    \"net/http\"\n    \"net/http/httptest\"\n    \"strings\"\n    \"testing\"\n)\n\nfunc TestYarat(t *testing.T) {\n    s := &Server{ombor: YangiOmbor()}\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/vazifalar\", s.yarat)\n\n    body := strings.NewReader(`{\"nom\":\"Go o'rganish\"}`)\n    req := httptest.NewRequest(http.MethodPost, \"/vazifalar\", body)\n    rec := httptest.NewRecorder()\n    mux.ServeHTTP(rec, req)\n\n    if rec.Code != http.StatusCreated {\n        t.Fatalf(\"status %d, kutilgan 201\", rec.Code)\n    }\n    if !strings.Contains(rec.Body.String(), `\"id\":1`) {\n        t.Errorf(\"javobda id yo'q: %s\", rec.Body.String())\n    }\n    if ct := rec.Header().Get(\"Content-Type\"); ct != \"application/json\" {\n        t.Errorf(\"Content-Type %q\", ct)\n    }\n}",
            "output": "=== RUN   TestYarat\n--- PASS: TestYarat (0.00s)\nPASS\nok  \texample/api\t0.004s"
          },
          {
            "type": "table",
            "head": [
              "Vosita",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>httptest.NewRequest</code>",
                "Metod, yo'l va tana bilan so'rov yaratadi"
              ],
              [
                "<code>httptest.NewRecorder</code>",
                "Status, sarlavha va tanani xotirada yig'adi"
              ],
              [
                "<code>mux.ServeHTTP</code>",
                "So'rovni marshrut va handler orqali o'tkazadi"
              ],
              [
                "<code>httptest.NewServer</code>",
                "Haqiqiy TCP port bilan test serveri"
              ]
            ]
          },
          {
            "type": "code",
            "title": "validatsiya_test.go",
            "code": "package main\n\nimport (\n    \"net/http\"\n    \"net/http/httptest\"\n    \"strings\"\n    \"testing\"\n)\n\nfunc TestYaratXato(t *testing.T) {\n    holatlar := []struct {\n        nom  string\n        tana string\n        kod  int\n    }{\n        {\"bosh nom\", `{\"nom\":\"   \"}`, http.StatusBadRequest},\n        {\"buzuq json\", `{`, http.StatusBadRequest},\n    }\n\n    for _, h := range holatlar {\n        t.Run(h.nom, func(t *testing.T) {\n            s := &Server{ombor: YangiOmbor()}\n            mux := http.NewServeMux()\n            mux.HandleFunc(\"/vazifalar\", s.yarat)\n\n            req := httptest.NewRequest(http.MethodPost, \"/vazifalar\",\n                strings.NewReader(h.tana))\n            rec := httptest.NewRecorder()\n            mux.ServeHTTP(rec, req)\n\n            if rec.Code != h.kod {\n                t.Fatalf(\"status %d, kutilgan %d\", rec.Code, h.kod)\n            }\n        })\n    }\n}",
            "output": "=== RUN   TestYaratXato\n=== RUN   TestYaratXato/bosh_nom\n=== RUN   TestYaratXato/buzuq_json\n--- PASS: TestYaratXato (0.00s)\n    --- PASS: TestYaratXato/bosh_nom (0.00s)\n    --- PASS: TestYaratXato/buzuq_json (0.00s)\nPASS\nok  \texample/api\t0.005s"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Nimani tekshirish kerak?",
            "html": "Test status kod, Content-Type va muhim javob maydonlarini tekshirsin — butun JSON matnini satr sifatida solishtirish maydon tartibiga bog'liq bo'lib qoladi. JSON'ni struct'ga decode qilib tekshirish ishonchliroq. <code>t.Fatalf</code> testni darhol to'xtatadi, <code>t.Errorf</code> esa davom etib barcha xatolarni yig'adi. Har bir test o'z omborini yaratsin, global holatdan foydalanmasin."
          }
        ],
        "quiz": [
          {
            "q": "httptest.NewRecorder nima qiladi?",
            "options": ["JSON'ni parse qiladi", "Faylni o'qiydi", "Server portini ochadi", "Javob statusi, sarlavhalari va tanasini xotirada yig'adi"],
            "answer": 3,
            "explain": "Recorder ResponseWriter vazifasini bajaradi va yozilgan javobni keyin tekshirish uchun saqlaydi."
          },
          {
            "q": "Handler testi uchun haqiqiy TCP port ochish shartmi?",
            "options": ["Yo'q, ServeHTTP va Recorder yetarli", "Faqat Windows'da", "Faqat HTTPS uchun", "Ha, har doim"],
            "answer": 0,
            "explain": "Ko'p handler testlarida tarmoq kerak emas. NewServer faqat haqiqiy HTTP client xatti-harakatini sinash kerak bo'lganda ishlatiladi."
          },
          {
            "q": "t.Fatalf va t.Errorf orasidagi farq nima?",
            "options": ["Farqi yo'q", "Fatalf testni darhol to'xtatadi, Errorf davom etadi", "Errorf testni to'xtatadi", "Fatalf faqat benchmark'da ishlaydi"],
            "answer": 1,
            "explain": "Fatalf keyingi tekshiruvlar ma'nosiz bo'lganda ishlatiladi. Errorf bir nechta muammoni bir testda ko'rsatish imkonini beradi."
          }
        ]
      },
      {
        "id": 47,
        "title": "Konfiguratsiya, muhit va slog bilan loglash",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Konfiguratsiyani kodga qattiq yozmaslik kerak: port, muhit va baza manzili joylashtirishga qarab o'zgaradi. Odatda qiymatlar muhit o'zgaruvchilaridan o'qiladi, standart qiymatlar beriladi va noto'g'ri qiymatlar aniq xato bilan rad etiladi. Go 1.21 dagi <code>log/slog</code> tuzilgan loglar uchun zamonaviy yechim."
          },
          {
            "type": "code",
            "title": "config.go",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n    \"strconv\"\n)\n\ntype Config struct {\n    Port  int\n    Muhit string\n}\n\nfunc Yukla() (Config, error) {\n    port := 8080\n    if v := os.Getenv(\"PORT\"); v != \"\" {\n        p, err := strconv.Atoi(v)\n        if err != nil {\n            return Config{}, fmt.Errorf(\"PORT noto'g'ri: %w\", err)\n        }\n        if p < 1 || p > 65535 {\n            return Config{}, fmt.Errorf(\"PORT 1..65535 oralig'ida bo'lishi kerak\")\n        }\n        port = p\n    }\n\n    muhit := os.Getenv(\"MUHIT\")\n    if muhit == \"\" {\n        muhit = \"development\"\n    }\n\n    return Config{Port: port, Muhit: muhit}, nil\n}\n\nfunc main() {\n    os.Setenv(\"PORT\", \"9090\")\n    c, err := Yukla()\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf(\"%s:%d\\n\", c.Muhit, c.Port)\n}",
            "output": "development:9090"
          },
          {
            "type": "code",
            "title": "slog.go",
            "code": "package main\n\nimport (\n    \"log/slog\"\n    \"os\"\n)\n\nfunc main() {\n    opts := &slog.HandlerOptions{\n        ReplaceAttr: func(groups []string, a slog.Attr) slog.Attr {\n            if a.Key == slog.TimeKey {\n                return slog.Attr{}\n            }\n            return a\n        },\n    }\n\n    logger := slog.New(slog.NewTextHandler(os.Stdout, opts))\n    logger.Info(\"server boshlandi\", \"port\", 8080, \"muhit\", \"test\")\n}",
            "output": "level=INFO msg=\"server boshlandi\" port=8080 muhit=test"
          },
          {
            "type": "table",
            "head": [
              "Manba",
              "Afzalligi",
              "Kamchiligi"
            ],
            "rows": [
              [
                "Muhit o'zgaruvchisi",
                "Kodni qayta build qilmasdan o'zgartirish",
                "Turi yo'q, qo'lda parse kerak"
              ],
              [
                "CLI flag",
                "Ishga tushirishda aniq ko'rinadi",
                "Har safar yozish kerak"
              ],
              [
                "Config fayli",
                "Murakkab sozlamalar uchun qulay",
                "Faylni himoyalash kerak"
              ],
              [
                "Standart qiymat",
                "Mahalliy ishni osonlashtiradi",
                "Production'da xavfli bo'lishi mumkin"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Sirli ma'lumotlar",
            "html": "Parol, API kalit va tokenlarni kodga yoki git tarixiga yozmang. Ularni muhit o'zgaruvchisi, maxfiy fayl yoki bulutli secret manager orqali bering. <code>slog</code> da <code>logger.Info</code> o'rniga <code>Debug</code> darajasidagi tafsilotlarni ishlab chiqishda yoqing. Bitta logger yarating va kontekst maydonlari bilan boyiting: <code>logger.With(\"request_id\", id)</code>."
          }
        ],
        "quiz": [
          {
            "q": "Konfiguratsiyani muhit o'zgaruvchilaridan olishning asosiy afzalligi nima?",
            "options": ["Xotira kamayadi", "Testlar avtomatik yoziladi", "Kodni qayta kompilyatsiya qilmasdan sozlash", "Dastur tezroq ishlaydi"],
            "answer": 2,
            "explain": "Bir xil binar fayl turli muhitlarda ishlaydi; port va manzillar deploy paytida beriladi."
          },
          {
            "q": "log/slog da logger.Info chaqiruvi qanday ma'lumot qabul qiladi?",
            "options": ["Faqat JSON", "Faqat xato", "Faqat matn", "Xabar va kalit-qiymat juftliklari"],
            "answer": 3,
            "explain": "slog tuzilgan log yozadi: xabar bilan birga kalit-qiymat juftliklari beriladi, ular text yoki JSON formatida chiqadi."
          },
          {
            "q": "Parol va API tokenlarni qayerda saqlash tavsiya etiladi?",
            "options": ["Muhit o'zgaruvchisi yoki secret manager'da", "README faylida", "Kod ichida", "Git repozitoriyasida"],
            "answer": 0,
            "explain": "Sirli ma'lumotlar kodda saqlanmaydi. Muhit o'zgaruvchilari yoki maxsus secret manager xavfsizroq."
          }
        ]
      },
      {
        "id": 48,
        "title": "Yakuniy loyiha: kitoblar API modeli va ombori",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Yakuniy loyihada kichik kutubxona API'sini yaratamiz. Birinchi qadam — <code>Kitob</code> modeli va uni xavfsiz saqlaydigan ombor. Har bir kitobda ID, nom, muallif va nashr yili bo'ladi. Qo'shishda maydonlar tekshiriladi, ro'yxat esa har doim barqaror tartibda qaytariladi."
          },
          {
            "type": "code",
            "title": "ombor.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"sort\"\n    \"strings\"\n    \"sync\"\n)\n\ntype Kitob struct {\n    ID      int    `json:\"id\"`\n    Nom     string `json:\"nom\"`\n    Muallif string `json:\"muallif\"`\n    Yil     int    `json:\"yil\"`\n}\n\ntype Ombor struct {\n    mu        sync.RWMutex\n    keyingiID int\n    kitoblar  map[int]Kitob\n}\n\nfunc YangiOmbor() *Ombor {\n    return &Ombor{kitoblar: make(map[int]Kitob)}\n}\n\nfunc (o *Ombor) Qosh(nom, muallif string, yil int) (Kitob, error) {\n    nom = strings.TrimSpace(nom)\n    muallif = strings.TrimSpace(muallif)\n    if nom == \"\" {\n        return Kitob{}, fmt.Errorf(\"nom bo'sh bo'lmasligi kerak\")\n    }\n    if muallif == \"\" {\n        return Kitob{}, fmt.Errorf(\"muallif bo'sh bo'lmasligi kerak\")\n    }\n    if yil < 1000 || yil > 2100 {\n        return Kitob{}, fmt.Errorf(\"yil 1000..2100 oralig'ida bo'lishi kerak\")\n    }\n\n    o.mu.Lock()\n    defer o.mu.Unlock()\n    o.keyingiID++\n    k := Kitob{ID: o.keyingiID, Nom: nom, Muallif: muallif, Yil: yil}\n    o.kitoblar[k.ID] = k\n    return k, nil\n}\n\nfunc (o *Ombor) Ol(id int) (Kitob, bool) {\n    o.mu.RLock()\n    defer o.mu.RUnlock()\n    k, ok := o.kitoblar[id]\n    return k, ok\n}\n\nfunc (o *Ombor) Royxat(muallif string) []Kitob {\n    o.mu.RLock()\n    defer o.mu.RUnlock()\n\n    natija := make([]Kitob, 0, len(o.kitoblar))\n    for _, k := range o.kitoblar {\n        if muallif != \"\" && !strings.EqualFold(k.Muallif, muallif) {\n            continue\n        }\n        natija = append(natija, k)\n    }\n    sort.Slice(natija, func(i, j int) bool {\n        return natija[i].ID < natija[j].ID\n    })\n    return natija\n}\n\nfunc main() {\n    o := YangiOmbor()\n    k, err := o.Qosh(\"Go asoslari\", \"Aziza Karimova\", 2024)\n    if err != nil {\n        panic(err)\n    }\n    data, _ := json.Marshal(k)\n    fmt.Println(string(data))\n\n    o.Qosh(\"HTTP amaliyoti\", \"Bek Toshev\", 2025)\n    o.Qosh(\"Testlash\", \"Dilnoza Rahimova\", 2023)\n\n    fmt.Println(len(o.Royxat(\"\")))\n    fmt.Println(len(o.Royxat(\"Aziza Karimova\")))\n    for _, kitob := range o.Royxat(\"\") {\n        fmt.Println(kitob.Yil, kitob.Nom)\n    }\n}",
            "output": "{\"id\":1,\"nom\":\"Go asoslari\",\"muallif\":\"Aziza Karimova\",\"yil\":2024}\n3\n1\n2024 Go asoslari\n2025 HTTP amaliyoti\n2023 Testlash"
          },
          {
            "type": "table",
            "head": [
              "Endpoint",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>GET /kitoblar?muallif=...</code>",
                "Ro'yxat, ixtiyoriy muallif filtri"
              ],
              [
                "<code>GET /kitoblar/{id}</code>",
                "Bitta kitob yoki 404"
              ],
              [
                "<code>POST /kitoblar</code>",
                "Yangi kitob, 201 yoki 400"
              ],
              [
                "<code>PUT /kitoblar/{id}</code>",
                "Mavjud kitobni yangilash"
              ],
              [
                "<code>DELETE /kitoblar/{id}</code>",
                "Kitobni o'chirish, 204"
              ]
            ]
          },
          {
            "type": "code",
            "title": "ombor_test.go",
            "code": "package main\n\nimport \"testing\"\n\nfunc TestQoshValidatsiya(t *testing.T) {\n    o := YangiOmbor()\n    holatlar := []struct {\n        nom     string\n        muallif string\n        yil     int\n    }{\n        {\"\", \"Aziza\", 2024},\n        {\"Go\", \"\", 2024},\n        {\"Go\", \"Aziza\", 900},\n    }\n\n    for _, h := range holatlar {\n        if _, err := o.Qosh(h.nom, h.muallif, h.yil); err == nil {\n            t.Errorf(\"xato kutilgan edi: %+v\", h)\n        }\n    }\n\n    if len(o.Royxat(\"\")) != 0 {\n        t.Fatal(\"ombor bo'sh bo'lishi kerak\")\n    }\n}",
            "output": "=== RUN   TestQoshValidatsiya\n--- PASS: TestQoshValidatsiya (0.00s)\nPASS\nok  \texample/kitoblar\t0.004s"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Keyingi qadam",
            "html": "Ombor hozir xotirada ishlaydi: dastur qayta ishga tushsa ma'lumot yo'qoladi. Keyingi darsda HTTP qatlamini qo'shamiz. Keyin bu omborni <code>database/sql</code> implementatsiyasi bilan almashtirish mumkin — handler'lar o'zgarmaydi, chunki ular ombor metodlariga tayanadi. Har bir yangi imkoniyat uchun avval test yozish odatini saqlang."
          }
        ],
        "quiz": [
          {
            "q": "Kitob qo'shishda yil qiymati nega tekshiriladi?",
            "options": ["ID ni oshirish uchun", "Ma'lumot sifatini ta'minlash va mantiqsiz yillarni rad etish uchun", "JSON'ni tezlashtirish uchun", "Map'ni saralash uchun"],
            "answer": 1,
            "explain": "Validatsiya noto'g'ri ma'lumotning omborga kirishini oldini oladi. Yil uchun oqilona oraliq belgilash mumkin."
          },
          {
            "q": "Royxat metodi ID bo'yicha saralangan natija qaytarishining foydasi nima?",
            "options": ["Muallif filtri o'chadi", "Map tezroq ishlaydi", "API javobi barqaror va test qilish oson bo'ladi", "Xotira kamayadi"],
            "answer": 2,
            "explain": "Barqaror tartib takroriy natijalarni kafolatlaydi, testlar va mijoz ilovalari uchun qulay."
          },
          {
            "q": "Muallif bo'yicha filtrlash qaysi metodda amalga oshirilmoqda?",
            "options": ["YangiOmbor", "Qosh", "Ol", "Royxat"],
            "answer": 3,
            "explain": "Royxat bo'sh bo'lmagan muallif qiymatini olib, mos kitoblarni ajratadi. Taqqoslashda harf registriga e'tibor berilmaydi."
          }
        ]
      },
      {
        "id": 49,
        "title": "Yakuniy loyiha: server, test va ishga tushirish",
        "minutes": 18,
        "blocks": [
          {
            "type": "p",
            "html": "Endi omborni HTTP API'ga ulaymiz: ro'yxat, yaratish va bitta kitobni olish. Handler'lar avvalgi darsdagi <code>Kitob</code> va <code>Ombor</code> turlaridan foydalanadi. Oxirida haqiqiy portda ishlaydigan serverni to'g'ri to'xtatishni — <b>graceful shutdown</b> ni ko'rsatamiz."
          },
          {
            "type": "code",
            "title": "server.go",
            "code": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"strconv\"\n    \"strings\"\n)\n\ntype Server struct {\n    ombor *Ombor\n    mux   *http.ServeMux\n}\n\nfunc YangiServer(o *Ombor) *Server {\n    s := &Server{ombor: o, mux: http.NewServeMux()}\n    s.mux.HandleFunc(\"/kitoblar\", s.kitoblar)\n    s.mux.HandleFunc(\"/kitoblar/\", s.bitta)\n    return s\n}\n\nfunc (s *Server) kitoblar(w http.ResponseWriter, r *http.Request) {\n    switch r.Method {\n    case http.MethodGet:\n        w.Header().Set(\"Content-Type\", \"application/json\")\n        json.NewEncoder(w).Encode(s.ombor.Royxat(r.URL.Query().Get(\"muallif\")))\n    case http.MethodPost:\n        var kirish struct {\n            Nom     string `json:\"nom\"`\n            Muallif string `json:\"muallif\"`\n            Yil     int    `json:\"yil\"`\n        }\n        if err := json.NewDecoder(r.Body).Decode(&kirish); err != nil {\n            http.Error(w, \"JSON noto'g'ri\", http.StatusBadRequest)\n            return\n        }\n        k, err := s.ombor.Qosh(kirish.Nom, kirish.Muallif, kirish.Yil)\n        if err != nil {\n            http.Error(w, err.Error(), http.StatusBadRequest)\n            return\n        }\n        w.Header().Set(\"Content-Type\", \"application/json\")\n        w.WriteHeader(http.StatusCreated)\n        json.NewEncoder(w).Encode(k)\n    default:\n        http.Error(w, \"metod qo'llanmaydi\", http.StatusMethodNotAllowed)\n    }\n}\n\nfunc (s *Server) bitta(w http.ResponseWriter, r *http.Request) {\n    id, err := strconv.Atoi(strings.TrimPrefix(r.URL.Path, \"/kitoblar/\"))\n    if err != nil {\n        http.Error(w, \"noto'g'ri id\", http.StatusBadRequest)\n        return\n    }\n    k, ok := s.ombor.Ol(id)\n    if !ok {\n        http.Error(w, \"topilmadi\", http.StatusNotFound)\n        return\n    }\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    json.NewEncoder(w).Encode(k)\n}\n\nfunc main() {\n    s := YangiServer(YangiOmbor())\n\n    post := httptest.NewRequest(http.MethodPost, \"/kitoblar\",\n        strings.NewReader(`{\"nom\":\"Go asoslari\",\"muallif\":\"Aziza\",\"yil\":2024}`))\n    rec := httptest.NewRecorder()\n    s.mux.ServeHTTP(rec, post)\n    fmt.Println(rec.Code, strings.TrimSpace(rec.Body.String()))\n\n    rec2 := httptest.NewRecorder()\n    s.mux.ServeHTTP(rec2, httptest.NewRequest(http.MethodGet, \"/kitoblar\", nil))\n    fmt.Println(rec2.Code, strings.TrimSpace(rec2.Body.String()))\n}",
            "output": "201 {\"id\":1,\"nom\":\"Go asoslari\",\"muallif\":\"Aziza\",\"yil\":2024}\n200 [{\"id\":1,\"nom\":\"Go asoslari\",\"muallif\":\"Aziza\",\"yil\":2024}]"
          },
          {
            "type": "table",
            "head": [
              "Buyruq",
              "Vazifasi"
            ],
            "rows": [
              [
                "<code>go run ./cmd/api</code>",
                "Serverni ishga tushirish"
              ],
              [
                "<code>go test ./...</code>",
                "Barcha testlarni bajarish"
              ],
              [
                "<code>go vet ./...</code>",
                "Statik tekshiruv"
              ],
              [
                "<code>go build -o bin/api ./cmd/api</code>",
                "Ishlab chiqarish uchun binar yaratish"
              ],
              [
                "<code>curl localhost:8080/kitoblar</code>",
                "API'ni qo'lda sinash"
              ]
            ]
          },
          {
            "type": "code",
            "title": "shutdown.go",
            "code": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n    \"io\"\n    \"net\"\n    \"net/http\"\n    \"time\"\n)\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"/salom\", func(w http.ResponseWriter, r *http.Request) {\n        fmt.Fprintln(w, \"salom\")\n    })\n\n    ln, err := net.Listen(\"tcp\", \"127.0.0.1:0\")\n    if err != nil {\n        panic(err)\n    }\n\n    srv := &http.Server{\n        Handler:           mux,\n        ReadHeaderTimeout: 5 * time.Second,\n    }\n    go func() {\n        if err := srv.Serve(ln); err != nil && err != http.ErrServerClosed {\n            panic(err)\n        }\n    }()\n\n    resp, err := http.Get(\"http://\" + ln.Addr().String() + \"/salom\")\n    if err != nil {\n        panic(err)\n    }\n    body, _ := io.ReadAll(resp.Body)\n    resp.Body.Close()\n    fmt.Printf(\"%d %s\", resp.StatusCode, body)\n\n    ctx, cancel := context.WithTimeout(context.Background(), time.Second)\n    defer cancel()\n    if err := srv.Shutdown(ctx); err != nil {\n        panic(err)\n    }\n    fmt.Println(\"server toza to'xtadi\")\n}",
            "output": "200 salom\nserver toza to'xtadi"
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Tayyor loyihadan keyingi qadamlar",
            "html": "Haqiqiy loyihada ma'lumotni bazaga saqlang, autentifikatsiya va pagination qo'shing, so'rovlarni loglang. <code>Shutdown</code> faol so'rovlarni tugatishga vaqt beradi; jarayonni <code>SIGINT</code>/<code>SIGTERM</code> signali bilan ushlab, shu funksiyani chaqiring. Docker va CI/CD sozlamalari keyingi bosqich. Eng muhimi: har bir o'zgarishni test bilan mustahkamlang."
          }
        ],
        "quiz": [
          {
            "q": "http.Server.Shutdown nima qiladi?",
            "options": ["Yangi so'rovlarni qabul qilmaydi va faol so'rovlarni tugatishni kutadi", "Serverni qayta ishga tushiradi", "Bazaga ulanadi", "Darhol barcha ulanishlarni uzadi"],
            "answer": 0,
            "explain": "Shutdown listener'ni yopadi, keyin faol so'rovlar tugashini kutadi. Context muddati tugasa, majburiy yopadi."
          },
          {
            "q": "ReadHeaderTimeout qaysi xavfdan himoyalaydi?",
            "options": ["Data race'dan", "Sekin sarlavha yuboruvchi mijozlar bilan ulanishni uzoq ushlab turishdan", "SQL injection'dan", "JSON xatolaridan"],
            "answer": 1,
            "explain": "Sekin sarlavha yuborish (slowloris) serverni band qilishi mumkin. ReadHeaderTimeout sarlavhalarni o'qish vaqtini cheklaydi."
          },
          {
            "q": "Loyihadagi barcha paket testlarini ishga tushirish buyrug'i qaysi?",
            "options": ["go run ./...", "go build ./...", "go test ./...", "go vet ./..."],
            "answer": 2,
            "explain": "go test ./... joriy moduldagi barcha paketlarning testlarini topib bajaradi."
          }
        ]
      },
      {
        "id": 50,
        "title": "Yakuniy imtihon",
        "minutes": 15,
        "isExam": true,
        "blocks": [
          {
            "type": "p",
            "html": "Go kursining yakuniy imtihoni. Savollar 49 dars davomida o'rganilgan mavzularni qamrab oladi: paketlar va modullar, slice va map, struct va interfeyslar, xatolar, generikalar, goroutinlar, <code>sync</code> va <code>context</code>, HTTP server, JSON, <code>database/sql</code> hamda testlash."
          },
          {
            "type": "ul",
            "items": [
              "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
              "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
              "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
              "Har bir savol kursning amaliy kod misollariga tayanadi."
            ]
          },
          {
            "type": "table",
            "head": [
              "Yo'nalish",
              "Nimalar tekshiriladi"
            ],
            "rows": [
              [
                "Til asoslari",
                "Paketlar, modul, eksport, turlar"
              ],
              [
                "Ma'lumotlar",
                "Slice sig'imi, map, struct, JSON"
              ],
              [
                "Xatolar va generika",
                "Wrapping, constraintlar, interfeyslar"
              ],
              [
                "Parallellik",
                "Goroutinlar, select, sync, context"
              ],
              [
                "Backend",
                "net/http, database/sql, status kodlar"
              ],
              [
                "Sifat",
                "Testlar, benchmark, qamrov"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "tip",
            "title": "Maslahat",
            "html": "Savolni oxirigacha o'qing va variantlarni solishtiring. Kod misollarini eslang: <code>append</code> natijasi, map'dagi comma-ok, pointer receiver, <code>errors.Is</code>, <code>ctx.Done()</code>, <code>http.ResponseWriter</code> tartibi. Ishonchingiz komil bo'lmagan savolni keyinroq ko'rib chiqing."
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
          "q": "Slice'ning len qiymati cap'dan kichik bo'lsa, append odatda qanday ishlaydi?",
          "options": ["Mavjud massivdagi bo'sh joydan foydalanadi va yangi slice qaytaradi", "Har safar yangi massiv ajratadi", "Slice'ni map'ga aylantiradi", "Panic chaqiradi"],
          "answer": 0,
          "explain": "len < cap bo'lsa, append mavjud massivning bo'sh qismiga yozadi. Natijani baribir slice o'zgaruvchisiga qayta berish kerak."
        },
        {
          "q": "Map'dan qiymat olishda ikkinchi (ok) qiymat nimani bildiradi?",
          "options": ["Kalitning tartib raqamini", "Kalitning mavjudligini", "Qiymatning turini", "Map'ning uzunligini"],
          "answer": 1,
          "explain": "v, ok := m[k] yozuvida ok kalit mavjud bo'lsa true bo'ladi. Bu nol qiymatni yo'q kalitdan farqlashga yordam beradi."
        },
        {
          "q": "Qaysi holatda *T turi interfeysni qanoatlantirib, T turi qanoatlantirmasligi mumkin?",
          "options": ["T struct bo'lmaganda", "Metod qiymat receiver bilan yozilganda", "Metod ko'rsatkich receiver bilan yozilganda", "Interfeys bo'sh bo'lganda"],
          "answer": 2,
          "explain": "Ko'rsatkich receiver'li metodlar *T metodlar to'plamiga kiradi. Shuning uchun bunday interfeysga odatda &t qiymati beriladi."
        },
        {
          "q": "errors.Is(err, ErrTopilmadi) chaqiruvi nima uchun kerak?",
          "options": ["Yangi xato yaratish uchun", "Xato matnini o'zgartirish uchun", "Panic'ni ushlash uchun", "O'ralgan xatolar zanjiridan kerakli xatoni topish uchun"],
          "answer": 3,
          "explain": "errors.Is %w bilan o'ralgan zanjirni tekshiradi va sentinel xatoga mos keladimi-yo'qmi aniqlaydi."
        },
        {
          "q": "Panic yuz bergan goroutinda recover ishlamasa nima bo'ladi?",
          "options": ["Dastur panic bilan yakunlanadi", "Panic e'tiborsiz qoladi", "Goroutine avtomatik qayta ishga tushadi", "Faqat log yoziladi"],
          "answer": 0,
          "explain": "Ushlanmagan panic butun dasturni to'xtatadi va stack trace chiqaradi. recover faqat deferred funksiya ichida ishlaydi."
        },
        {
          "q": "Generik funksiyada kalitlarni map'da ishlatish uchun qaysi constraint mos keladi?",
          "options": ["any", "comparable", "error", "interface{ String() string }"],
          "answer": 1,
          "explain": "Map kaliti == bilan solishtiriladigan bo'lishi kerak. comparable constraint aynan shu talabni ifodalaydi."
        },
        {
          "q": "Buferlanmagan kanalga yuborish qachon davom etadi?",
          "options": ["Faqat select ichida", "Darhol, har doim", "Qabul qiluvchi tayyor bo'lganda", "Kanal yopilganda"],
          "answer": 2,
          "explain": "Buferlanmagan send qabul qiluvchi tayyor bo'lguncha bloklaydi. Ikki tomon ham kutib qolsa deadlock yuz beradi."
        },
        {
          "q": "select ichidagi default bloki qanday vazifani bajaradi?",
          "options": ["Kanalni yopadi", "Panic chaqiradi", "Barcha case'larni navbat bilan bajaradi", "Hech bir case tayyor bo'lmasa darhol bajariladi"],
          "answer": 3,
          "explain": "Default select'ni bloklamaydi: tayyor case bo'lmasa shu tarmoq ishlaydi."
        },
        {
          "q": "context.WithTimeout natijasidagi cancel funksiyasini nima qilish kerak?",
          "options": ["defer cancel() bilan albatta chaqirish", "Goroutine tugashini kutmasdan unutish", "Uni global o'zgaruvchida saqlash", "Faqat xato bo'lsa chaqirish"],
          "answer": 0,
          "explain": "cancel timer va bolalar context'ini to'xtatib, resurslarni bo'shatadi. Shuning uchun defer cancel() yoziladi."
        },
        {
          "q": "Handler'da status kodni o'zgartirish uchun WriteHeader'ni qachon chaqirish kerak?",
          "options": ["Body yozilgandan keyin", "Body yozishdan oldin", "Faqat handler oxirida", "Hech qachon"],
          "answer": 1,
          "explain": "Birinchi Write body'ni yuborib statusni 200 qilib qo'yadi. Shuning uchun WriteHeader body yozishdan oldin chaqiriladi."
        },
        {
          "q": "Query bilan olingan *sql.Rows bilan ishlaganda nima qilish shart?",
          "options": ["Rows'ni global saqlash", "Faqat Scan chaqirish", "Rows'ni Close qilish (odatda defer bilan)", "Har bir qatorda Begin chaqirish"],
          "answer": 2,
          "explain": "Rows ulanishni band qiladi, Close esa resurslarni bo'shatadi. Scan xatolarini ham har qatorda tekshirish kerak."
        },
        {
          "q": "Table-driven testda t.Run nimani beradi?",
          "options": ["Testlarni parallel ishlatishni taqiqlaydi", "Benchmark yaratadi", "Qamrov hisobini o'chiradi", "Har bir holatni alohida subtest sifatida ishga tushiradi"],
          "answer": 3,
          "explain": "t.Run nomlangan subtest yaratadi; qaysi holat yiqilganini aniqlash va alohida ishga tushirish osonlashadi."
        }
      ]
    }
  };
})();
