/* Noldan — Ruby course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.ruby = {
  "id": "ruby",
  "title": "Ruby",
  "logoClass": "course-logo--ruby",
  "logoText": "Rb",
  "level": "Boshlovchi",
  "hours": "~20 soat",
  "testCount": 147,
  "lang": "ruby",
  "interactive": "none",
  "heroTitle": "Ruby: o'qishli va quvnoq dasturlash",
  "heroDesc": "49 dars va 147 test orqali Ruby 3.x ni noldan o'rganing: matnlar, kolleksiyalar, OOP, metaprogramming, fayllar, testlar, Sinatra va Rails. Yakunida 12-savollik imtihon sizni kutadi.",
  "metaDescription": "Ruby kursi: 49 dars, 147 test, 12-savollik yakuniy imtihon. Bloklar, massivlar, hash'lar, OOP, metaprogramming, Minitest, RSpec, Sinatra va Rails amaliy loyihalar bilan.",
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
      "title": "Metodlar, kolleksiyalar va obyektlar",
      "lessons": [
        5,
        6,
        7,
        8
      ]
    },
    {
      "title": "Xatolar va ekotizim",
      "lessons": [
        9,
        10,
        11
      ]
    },
    {
      "title": "Mini loyiha va matnlar",
      "lessons": [
        12,
        13
      ]
    },
    {
      "title": "Kolleksiyalar chuqur",
      "lessons": [
        14,
        15,
        16,
        17,
        18
      ]
    },
    {
      "title": "OOP va metaprogramming",
      "lessons": [
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    },
    {
      "title": "Xatolar, IO va idiomalar",
      "lessons": [
        26,
        27,
        28,
        29,
        30,
        31
      ]
    },
    {
      "title": "Formatlar va tashqi dunyo",
      "lessons": [
        32,
        33,
        34,
        35
      ]
    },
    {
      "title": "Testlash va vositalar",
      "lessons": [
        36,
        37,
        38,
        39,
        40
      ]
    },
    {
      "title": "Web: Sinatra va Rails",
      "lessons": [
        41,
        42,
        43,
        44,
        45,
        46,
        47
      ]
    },
    {
      "title": "Yakuniy loyiha",
      "lessons": [
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
      "title": "Ruby nima va birinchi dastur",
      "minutes": 12,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby — 1995-yilda Yukihiro Matsumoto tomonidan yaratilgan dinamik, obyektga yo'naltirilgan til. Uning asosiy g'oyasi — dasturchi zavqlanadigan, o'qishli kod. Ruby interpretatsiya qilinadi: kompilyatsiya bosqichisiz <code>ruby fayl.rb</code> bilan ishga tushadi."
        },
        {
          "type": "code",
          "title": "salom.rb",
          "code": "puts \"Salom, Noldan!\"\nputs \"Ruby ishlayapti.\"\n\nism = \"Aziza\"\nputs \"Foydalanuvchi: #{ism}\"",
          "output": "Salom, Noldan!\nRuby ishlayapti.\nFoydalanuvchi: Aziza"
        },
        {
          "type": "table",
          "head": [
            "Buyruq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>ruby salom.rb</code>",
              "Faylni ishga tushiradi"
            ],
            [
              "<code>irb</code>",
              "Interaktiv Ruby konsolini ochadi"
            ],
            [
              "<code>puts</code>",
              "Qiymatni qator bilan chiqaradi"
            ],
            [
              "<code>print</code>",
              "Qiymatni qator oxirisiz chiqaradi"
            ],
            [
              "<code>p</code>",
              "Qiymatni inspect ko'rinishida chiqaradi"
            ],
            [
              "<code>#</code>",
              "Bir qatorli izoh boshlaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "puts, print va p",
          "html": "<code>puts</code> har bir qiymatdan keyin yangi qator qo'shadi. <code>print</code> qo'shmaydi. <code>p</code> esa matnni qo'shtirnoq bilan ko'rsatadi va <code>nil</code> ni ham aniq chiqaradi — nosozlikni tekshirishda foydali."
        },
        {
          "type": "code",
          "title": "hisob.rb",
          "code": "ism = \"Aziza\"\nyosh = 15\n\nputs \"#{ism} keyingi yil #{yosh + 1} yoshda bo'ladi.\"\nputs \"Kvadrat: #{5 ** 2}\"",
          "output": "Aziza keyingi yil 16 yoshda bo'ladi.\nKvadrat: 25"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "irb bilan tajriba qiling",
          "html": "Terminalda <code>irb</code> ni ochib, kichik ifodalarni darhol sinab ko'rish mumkin. <code>ruby -v</code> o'rnatilgan versiyani ko'rsatadi. Xato chiqsa, xabar oxiridagi qator raqamiga qarang."
        }
      ],
      "quiz": [
        {
          "q": "Ruby fayllari odatda qaysi kengaytmada saqlanadi?",
          "options": [
            ".rb",
            ".ruby",
            ".py",
            ".js"
          ],
          "answer": 0,
          "explain": "Ruby manba fayllari .rb kengaytmasidan foydalanadi, masalan salom.rb."
        },
        {
          "q": "puts va print orasidagi farq nima?",
          "options": [
            "print qator oxiriga newline qo'shadi",
            "Ikkalasi fayl yozadi",
            "puts faqat sonlar bilan ishlaydi",
            "puts qator oxiriga newline qo'shadi"
          ],
          "answer": 3,
          "explain": "puts har bir chiqarilgan qiymatdan keyin yangi qator qo'shadi; print qo'shmaydi."
        },
        {
          "q": "irb nima?",
          "options": [
            "Fayl kompilyatori",
            "Interaktiv Ruby konsoli",
            "Gem o'rnatuvchi",
            "Test freymvorki"
          ],
          "answer": 1,
          "explain": "irb — Interactive Ruby: kodni qatorma-qator yozib, natijani darhol ko'rish muhiti."
        }
      ]
    },
    {
      "id": 2,
      "title": "O'zgaruvchilar, belgilar va matnlar",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da mahalliy o'zgaruvchilar kichik harf yoki pastki chiziq bilan boshlanadi va odatda <code>snake_case</code> uslubida yoziladi. Simvol (symbol) — <code>:ism</code> kabi o'zgarmas nom; u hash kalitlari uchun juda qulay. Matnlar esa <code>String</code> obyektlari."
        },
        {
          "type": "code",
          "title": "turlar.rb",
          "code": "ism = \"Aziza\"\nyosh = 15\nholat = :faol\nnarx = 12.5\n\nputs ism.class\nputs yosh.class\nputs holat.class\nputs narx.class\nputs \"Salom, #{ism}! Siz #{yosh} yoshdasiz.\"",
          "output": "String\nInteger\nSymbol\nFloat\nSalom, Aziza! Siz 15 yoshdasiz."
        },
        {
          "type": "table",
          "head": [
            "Tur",
            "Misol",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>String</code>",
              "<code>Aziza</code>",
              "Matn"
            ],
            [
              "<code>Integer</code>",
              "<code>15</code>",
              "Butun son"
            ],
            [
              "<code>Float</code>",
              "<code>12.5</code>",
              "Kasr son"
            ],
            [
              "<code>Symbol</code>",
              "<code>:faol</code>",
              "O'zgarmas nom"
            ],
            [
              "<code>Array</code>",
              "<code>[1, 2]</code>",
              "Tartiblangan ro'yxat"
            ],
            [
              "<code>Hash</code>",
              "<code>{ism: 'Aziza'}</code>",
              "Kalit va qiymatlar"
            ],
            [
              "<code>nil</code>",
              "<code>nil</code>",
              "Qiymat yo'qligi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Nega symbol?",
          "html": "Bir xil symbol xotirada qayta ishlatiladi va o'zgarmaydi. Shuning uchun hash kaliti sifatida satrga qaraganda tejamkor va xavfsizroq. <code>:ism</code> va <code>:ism</code> — aynan bir obyekt."
        },
        {
          "type": "code",
          "title": "matn.rb",
          "code": "ism = \"Aziza\"\n\nputs \"Salom, #{ism}!\"\nputs 'Salom, #{ism}!'\nputs \"Katta: #{ism.upcase}\"\nputs \"Uzunlik: #{ism.length}\"\n\nbelgi = :faol\nputs \"Belgi: #{belgi}\"\nputs belgi == :faol",
          "output": "Salom, Aziza!\nSalom, #{ism}!\nKatta: AZIZA\nUzunlik: 5\nBelgi: faol\ntrue"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Qo'shtirnoq farqi",
          "html": "Interpolatsiya faqat qo'sh tirnoqli matnda ishlaydi. Bitta tirnoq ichida <code>#{ism}</code> oddiy matn bo'lib qoladi. Hash yozuvida <code>ism: \"Aziza\"</code> kaliti avtomatik <code>:ism</code> symbol bo'ladi."
        }
      ],
      "quiz": [
        {
          "q": "Symbol qanday yoziladi?",
          "options": [
            ":ism",
            "@ism",
            "$ism",
            "#ism"
          ],
          "answer": 0,
          "explain": "Symbol ikki nuqta bilan boshlanadi: :ism. @ instans o'zgaruvchisi, $ global o'zgaruvchi uchun."
        },
        {
          "q": "Qaysi matnda interpolatsiya ishlaydi?",
          "options": [
            "'Salom, #{ism}!'",
            "\"Salom, #{ism}!\"",
            "Faqat %q ichida",
            "Ikkalasida ham"
          ],
          "answer": 1,
          "explain": "Ruby faqat qo'sh tirnoqli (va shunga o'xshash) matnlarda #{} ichidagi ifodani bajaradi."
        },
        {
          "q": "Mahalliy o'zgaruvchi nomi uchun qaysi uslub odatiy?",
          "options": [
            "CamelCase",
            "UPPER_CASE",
            "snake_case",
            "PascalCase"
          ],
          "answer": 2,
          "explain": "Ruby konvensiyasiga ko'ra mahalliy o'zgaruvchilar snake_case uslubida yoziladi."
        }
      ]
    },
    {
      "id": 3,
      "title": "Shartlar, unless va case",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da shartlar <code>if</code>, <code>elsif</code> va <code>else</code> bilan yoziladi. Teskari shart uchun <code>unless</code> bor. <code>case</code> esa bir qiymatni bir nechta variant bilan solishtiradi va natijani qaytaradi."
        },
        {
          "type": "code",
          "title": "shartlar.rb",
          "code": "ball = 85\n\nif ball >= 90\n  daraja = \"A\"\nelsif ball >= 80\n  daraja = \"B\"\nelse\n  daraja = \"C\"\nend\n\nputs \"Ball: #{ball}, daraja: #{daraja}\"\n\nyosh = 20\nputs \"Kattalar\" if yosh >= 18\nputs \"Bolalar\" unless yosh >= 18",
          "output": "Ball: 85, daraja: B\nKattalar"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>if</code>",
              "Shart rost bo'lsa bajaradi"
            ],
            [
              "<code>elsif</code>",
              "Oldingi shartlar yolg'on bo'lsa tekshiriladi"
            ],
            [
              "<code>unless</code>",
              "Shart yolg'on bo'lsa bajaradi"
            ],
            [
              "<code>&&</code>",
              "VA — ikkalasi rost bo'lishi kerak"
            ],
            [
              "<code>||</code>",
              "YOKI — bittasi rost bo'lsa yetarli"
            ],
            [
              "<code>!</code>",
              "EMAS — mantiqiy teskarisi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "case.rb",
          "code": "kun = \"shanba\"\n\nish_kuni = case kun\n           when \"shanba\", \"yakshanba\"\n             false\n           else\n             true\n           end\n\nputs ish_kuni ? \"Ish kuni\" : \"Dam olish kuni\"\n\nbaho = 92\nnatija = case baho\n         when 90.. then \"A\"\n         when 80...90 then \"B\"\n         else \"C\"\n         end\n\nputs \"Baho: #{natija}\"",
          "output": "Dam olish kuni\nBaho: A"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ruby'da faqat nil va false yolg'on",
          "html": "Boshqa tillardan farqli o'laroq, <code>0</code> va bo'sh matn <code>\"\"</code> ham rost hisoblanadi. Shuning uchun <code>if son</code> degan tekshiruv son nol bo'lsa ham rost bo'ladi. Bo'shligini alohida tekshiring."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "caseni qiymat sifatida ishlating",
          "html": "Ruby'da <code>case</code> oxirgi bajarilgan tarmoqning qiymatini qaytaradi, shuning uchun uni o'zgaruvchiga berish mumkin. <code>when 90..</code> — 90 va undan katta qiymatlarni qamrab oladi."
        }
      ],
      "quiz": [
        {
          "q": "unless nimani bildiradi?",
          "options": [
            "Agar shart yolg'on bo'lsa",
            "Agar shart rost bo'lsa",
            "Tsikl boshlash",
            "Funksiya e'lon qilish"
          ],
          "answer": 0,
          "explain": "unless — if ning teskarisi: shart false bo'lganda kod bajariladi."
        },
        {
          "q": "Ruby'da qaysi qiymatlar false hisoblanadi?",
          "options": [
            "0 va bo'sh matn",
            "Faqat 0",
            "Hech qaysi qiymat",
            "nil va false"
          ],
          "answer": 3,
          "explain": "Ruby'da faqat nil va false yolg'on; 0 va bo'sh matn ham rost hisoblanadi."
        },
        {
          "q": "case ifodasi natijani qaytaradimi?",
          "options": [
            "Yo'q, faqat chiqaradi",
            "Ha, bajarilgan tarmoq qiymatini qaytaradi",
            "Faqat true yoki false qaytaradi",
            "Faqat sonlarni qaytaradi"
          ],
          "answer": 1,
          "explain": "case ifodasining qiymati bajarilgan when tarmog'ining natijasi bo'ladi."
        }
      ]
    },
    {
      "id": 4,
      "title": "Tsikllar: each, times va range",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da tsikllar ko'pincha iteratorlar bilan yoziladi: <code>each</code> massivni kezadi, <code>times</code> kodni belgilangan marta takrorlaydi, range esa oraliqni bildiradi. <code>while</code> va <code>until</code> shartga bog'liq takrorlash uchun qoldiriladi."
        },
        {
          "type": "code",
          "title": "iteratsiya.rb",
          "code": "sonlar = [1, 2, 3, 4, 5]\n\nsonlar.each do |son|\n  puts \"Son: #{son}\"\nend\n\n3.times do |i|\n  puts \"Qadam: #{i + 1}\"\nend\n\n(1..3).each { |n| puts \"Range: #{n}\" }",
          "output": "Son: 1\nSon: 2\nSon: 3\nSon: 4\nSon: 5\nQadam: 1\nQadam: 2\nQadam: 3\nRange: 1\nRange: 2\nRange: 3"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>each</code>",
              "Har bir element ustida ishlaydi"
            ],
            [
              "<code>times</code>",
              "Blokni n marta takrorlaydi, 0 dan boshlaydi"
            ],
            [
              "<code>upto</code>, <code>downto</code>",
              "Sonlar oralig'ini kezadi"
            ],
            [
              "<code>1..3</code>",
              "Ikkala chegarani ham o'z ichiga oladi"
            ],
            [
              "<code>1...3</code>",
              "Oxirgi chegarani o'z ichiga olmaydi"
            ],
            [
              "<code>map</code>, <code>select</code>",
              "O'zgartiradi yoki filtrlaydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "shartli-tsikl.rb",
          "code": "son = 3\nwhile son > 0\n  puts \"Qoldi: #{son}\"\n  son -= 1\nend\n\nson = 1\nuntil son > 3\n  puts \"Until: #{son}\"\n  son += 1\nend\n\n(1..10).each do |n|\n  next if n == 3\n  break if n == 6\n  puts n\nend",
          "output": "Qoldi: 3\nQoldi: 2\nQoldi: 1\nUntil: 1\nUntil: 2\nUntil: 3\n1\n2\n4\n5"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "each qaytaradigan qiymat",
          "html": "<code>each</code> asl massivni qaytaradi, <code>map</code> esa har bir natijadan yangi massiv yasaydi. Faqat ko'rish kerak bo'lsa <code>each</code>, o'zgartirish kerak bo'lsa <code>map</code> tanlanadi."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Cheksiz loop",
          "html": "Ba'zan tsikl shartini oldindan bilmaymiz. <code>loop do ... break if shart end</code> yozish mumkin, lekin <code>break</code> bo'lmasa dastur to'xtamaydi. Massivni kezish paytida uning hajmini o'zgartirmang."
        }
      ],
      "quiz": [
        {
          "q": "3.times blokidagi i birinchi qiymati nechaga teng?",
          "options": [
            "1",
            "0",
            "3",
            "nil"
          ],
          "answer": 1,
          "explain": "times hisoblagichni 0 dan boshlaydi, shuning uchun birinchi i qiymati 0."
        },
        {
          "q": "(1..3).to_a natijasi nima?",
          "options": [
            "[1, 2]",
            "[0, 1, 2]",
            "[1, 3]",
            "[1, 2, 3]"
          ],
          "answer": 3,
          "explain": "Ikki nuqtali range ikkala chegarani ham o'z ichiga oladi: [1, 2, 3]."
        },
        {
          "q": "each ichida next nima qiladi?",
          "options": [
            "Tsiklni butunlay to'xtatadi",
            "Massivni tozalaydi",
            "Joriy aylanishni o'tkazib yuboradi",
            "Yangi massiv qaytaradi"
          ],
          "answer": 2,
          "explain": "next joriy elementni tashlab, keyingi aylanishga o'tadi; break esa tsiklni to'xtatadi."
        }
      ]
    },
    {
      "id": 5,
      "title": "Metodlar va bloklar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Metod <code>def</code> bilan e'lon qilinadi va <code>end</code> bilan tugaydi. Ruby'da oxirgi ifodaning qiymati avtomatik qaytariladi, shuning uchun oddiy metodlarda <code>return</code> ko'pincha yozilmaydi. Blok — metodga biriktirib beriladigan kod bo'lagi."
        },
        {
          "type": "code",
          "title": "metodlar.rb",
          "code": "def salomlash(ism)\n  \"Salom, #{ism}!\"\nend\n\ndef qosh(a, b = 0)\n  a + b\nend\n\nputs salomlash(\"Aziza\")\nputs qosh(2, 3)\nputs qosh(10)",
          "output": "Salom, Aziza!\n5\n10"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>def nom</code>",
              "Metod e'lon qiladi"
            ],
            [
              "<code>return</code>",
              "Erta chiqish yoki aniq natija"
            ],
            [
              "<code>b = 0</code>",
              "Standart parametr"
            ],
            [
              "<code>nom?</code>",
              "Mantiqiy natija qaytaruvchi metod"
            ],
            [
              "<code>nom!</code>",
              "Obyektni o'zgartiruvchi metod"
            ],
            [
              "<code>*args</code>",
              "Istalgancha argument yig'adi"
            ],
            [
              "<code>key:</code>",
              "Kalit so'zli argument"
            ]
          ]
        },
        {
          "type": "code",
          "title": "bloklar.rb",
          "code": "def ozgarish\n  yield 3\n  yield 5\nend\n\nozgarish { |n| puts \"Blok oldi: #{n}\" }\n\nsonlar = [1, 2, 3]\nkvadratlar = sonlar.map { |n| n ** 2 }\nputs kvadratlar.inspect\n\nyigindi = sonlar.reduce(0) { |sum, n| sum + n }\nputs yigindi",
          "output": "Blok oldi: 3\nBlok oldi: 5\n[1, 4, 9]\n6"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Blok va yield",
          "html": "Metod chaqirilganda <code>{ ... }</code> yoki <code>do ... end</code> bloki berilishi mumkin. Metod ichida <code>yield</code> shu blokni ishga tushiradi. <code>{ }</code> qisqa bir qatorli bloklar uchun, <code>do ... end</code> esa ko'p qatorli bloklar uchun odatiy."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Nomlash odati",
          "html": "Metod nomlari <code>snake_case</code> uslubida yoziladi. Qavslar ixtiyoriy, lekin argumentlar ko'p bo'lsa yoki ifoda chalkash bo'lsa qavs qo'yish kodni o'qishni osonlashtiradi."
        }
      ],
      "quiz": [
        {
          "q": "Ruby metodida oxirgi ifoda natijasi nima bo'ladi?",
          "options": [
            "Har doim nil",
            "Faqat return bilan qaytariladi",
            "Avtomatik qaytariladi",
            "Konsolga chiqadi"
          ],
          "answer": 2,
          "explain": "Ruby metodning oxirgi ifodasini avtomatik qaytaradi; return faqat aniq holatlarda kerak."
        },
        {
          "q": "Metodga berilgan blokni chaqirish uchun nima ishlatiladi?",
          "options": [
            "yield",
            "call_block",
            "block",
            "invoke"
          ],
          "answer": 0,
          "explain": "yield metodga biriktirilgan blokni ishga tushiradi."
        },
        {
          "q": "def qosh(a, b = 0) da qosh(5) chaqirilsa, b nechaga teng bo'ladi?",
          "options": [
            "nil",
            "5",
            "0",
            "Xato"
          ],
          "answer": 2,
          "explain": "Ikkinchi argument berilmagani uchun standart qiymat 0 ishlatiladi."
        }
      ]
    },
    {
      "id": 6,
      "title": "Massivlar va xeshlar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Massiv tartiblangan qiymatlar ro'yxati, hash esa kalit va qiymat juftliklari to'plami. Ruby'da ikkalasi ham obyekt bo'lib, boy metodlar to'plamiga ega. Hash kalitlari sifatida symbol ishlatish odatiy."
        },
        {
          "type": "code",
          "title": "massivlar.rb",
          "code": "ismlar = [\"Ali\", \"Aziza\", \"Bek\"]\n\nismlar << \"Dilnoza\"\nputs ismlar.length\nputs ismlar[0]\nputs ismlar.last\nputs ismlar.include?(\"Bek\")\nputs ismlar.inspect",
          "output": "4\nAli\nDilnoza\ntrue\n[\"Ali\", \"Aziza\", \"Bek\", \"Dilnoza\"]"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>&lt;&lt;</code>",
              "Oxiriga element qo'shadi"
            ],
            [
              "<code>pop</code>",
              "Oxirgi elementni oladi"
            ],
            [
              "<code>shift</code>",
              "Birinchi elementni oladi"
            ],
            [
              "<code>include?</code>",
              "Element bor-yo'qligini tekshiradi"
            ],
            [
              "<code>map</code>",
              "Har bir elementni o'zgartiradi"
            ],
            [
              "<code>select</code>",
              "Shartga mos elementlarni tanlaydi"
            ],
            [
              "<code>sort</code>",
              "Tartiblangan yangi massiv qaytaradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "hashes.rb",
          "code": "talaba = {\n  ism: \"Aziza\",\n  yosh: 16,\n  ball: 92\n}\n\nputs talaba[:ism]\ntalaba[:ball] = 95\ntalaba[:faol] = true\n\ntalaba.each do |kalit, qiymat|\n  puts \"#{kalit}: #{qiymat}\"\nend\n\nputs talaba.key?(:yosh)",
          "output": "Aziza\nism: Aziza\nyosh: 16\nball: 95\nfaol: true\ntrue"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Hash tartibi va fetch",
          "html": "Ruby hash'lari kiritilgan tartibni saqlaydi. Yo'q kalitni o'qish <code>nil</code> qaytaradi; standart qiymat yoki xato kerak bo'lsa <code>talaba.fetch(:ism)</code> ishlatiladi. <code>dig</code> ichma-ich hash'larga xavfsiz kirish uchun qulay."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Massivning oxiri va boshi",
          "html": "Ruby'da manfiy indeks oxirdan sanaydi: <code>ismlar[-1]</code> — oxirgi element. <code>first</code> va <code>last</code> metodlari kodni yanada o'qishli qiladi."
        }
      ],
      "quiz": [
        {
          "q": "Massiv oxiriga element qo'shish uchun nima ishlatiladi?",
          "options": [
            "pop",
            "shift",
            ">>",
            "<<"
          ],
          "answer": 3,
          "explain": "<< operatori elementni massiv oxiriga qo'shadi."
        },
        {
          "q": "Hash'dan :ism qiymatini qanday olamiz?",
          "options": [
            "talaba.ism",
            "talaba[:ism]",
            "talaba(ism)",
            "talaba->ism"
          ],
          "answer": 1,
          "explain": "Hash kaliti kvadrat qavs ichida beriladi: talaba[:ism]."
        },
        {
          "q": "select metodi nima qaytaradi?",
          "options": [
            "Barcha elementlarni",
            "Bitta son",
            "Har doim nil",
            "Shartga mos elementlar massivini"
          ],
          "answer": 3,
          "explain": "select blok sharti rost bo'lgan elementlardan yangi massiv yasaydi."
        }
      ]
    },
    {
      "id": 7,
      "title": "Klasslar, obyektlar va attr_accessor",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Klass — obyekt uchun shablon. <code>initialize</code> metodi obyekt yaratilganda ishlaydi va boshlang'ich qiymatlarni o'rnatadi. Instans o'zgaruvchilari <code>@</code> bilan boshlanadi va har bir obyektning o'z holatini saqlaydi."
        },
        {
          "type": "code",
          "title": "talaba.rb",
          "code": "class Talaba\n  attr_reader :ism, :ball\n  attr_accessor :yosh\n\n  def initialize(ism, yosh, ball = 0)\n    @ism = ism\n    @yosh = yosh\n    @ball = ball\n  end\n\n  def ball_qosh(qoshimcha)\n    @ball += qoshimcha\n  end\n\n  def tanishtir\n    \"#{@ism}, #{@yosh} yosh\"\n  end\nend\n\ntalaba = Talaba.new(\"Aziza\", 16)\ntalaba.ball_qosh(92)\ntalaba.yosh = 17\n\nputs talaba.tanishtir\nputs \"Ball: #{talaba.ball}\"\nputs \"Yosh: #{talaba.yosh}\"",
          "output": "Aziza, 17 yosh\nBall: 92\nYosh: 17"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>class</code>",
              "Yangi klass e'lon qiladi"
            ],
            [
              "<code>initialize</code>",
              "Obyekt yaratilganda ishlaydi"
            ],
            [
              "<code>@ism</code>",
              "Instans o'zgaruvchisi"
            ],
            [
              "<code>attr_reader</code>",
              "Faqat o'qish metodini yaratadi"
            ],
            [
              "<code>attr_writer</code>",
              "Faqat yozish metodini yaratadi"
            ],
            [
              "<code>attr_accessor</code>",
              "O'qish va yozishni birga beradi"
            ],
            [
              "<code>self</code>",
              "Joriy obyektga murojaat"
            ]
          ]
        },
        {
          "type": "code",
          "title": "hisob.rb",
          "code": "class Hisob\n  attr_reader :balans\n\n  def initialize(balans = 0)\n    @balans = balans\n  end\n\n  def oshir(qiymat)\n    @balans += qiymat\n    self\n  end\n\n  def to_s\n    \"Hisob: #{@balans} so'm\"\n  end\nend\n\nhisob = Hisob.new(100)\nhisob.oshir(50).oshir(25)\nputs hisob",
          "output": "Hisob: 175 so'm"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "attr_* nima qiladi?",
          "html": "<code>attr_reader :ism</code> <code>ism</code> metodini yaratadi. <code>attr_writer :yosh</code> <code>yosh=</code> metodini beradi. <code>attr_accessor</code> ikkalasini ham yaratadi. Bu metodlar instans o'zgaruvchisiga xavfsiz kirishni osonlashtiradi."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Obyektni chiqarish",
          "html": "<code>puts obyekt</code> chaqirilganda Ruby <code>to_s</code> metodidan foydalanadi. Uni qayta yozib, obyektning o'qishli ko'rinishini berish mumkin. <code>self</code> qaytarish metodlarni zanjirga ulash imkonini beradi."
        }
      ],
      "quiz": [
        {
          "q": "Instans o'zgaruvchisi qanday belgi bilan boshlanadi?",
          "options": [
            "@@",
            "@",
            "$",
            ":"
          ],
          "answer": 1,
          "explain": "@ism kabi bitta @ instans o'zgaruvchisini bildiradi; @@ klass o'zgaruvchisi uchun."
        },
        {
          "q": "attr_accessor nima yaratadi?",
          "options": [
            "Faqat o'qish metodini",
            "Faqat yozish metodini",
            "O'qish va yozish metodlarini",
            "Konstruktorni"
          ],
          "answer": 2,
          "explain": "attr_accessor o'qish (getter) va yozish (setter) metodlarini birga yaratadi."
        },
        {
          "q": "initialize metodi qachon chaqiriladi?",
          "options": [
            "Klass e'lon qilinganda",
            "Har metod chaqirig'ida",
            "Faqat qo'lda",
            "Talaba.new bilan obyekt yaratilganda"
          ],
          "answer": 3,
          "explain": "new obyekt yaratadi va initialize metodini avtomatik chaqiradi."
        }
      ]
    },
    {
      "id": 8,
      "title": "Meros, modullar va mixinlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Meros ota klassning xatti-harakatini qayta ishlatish imkonini beradi: <code>class Bola &lt; Ota</code>. Ruby'da bitta klassdan meros olinadi, lekin modullar orqali bir nechta xatti-harakatni qo'shish mumkin. Bu usul <b>mixin</b> deyiladi."
        },
        {
          "type": "code",
          "title": "meros.rb",
          "code": "class Talaba\n  def initialize(ism, ball)\n    @ism = ism\n    @ball = ball\n  end\n\n  def daraja\n    @ball >= 90 ? \"A\" : \"B\"\n  end\n\n  def tanishtir\n    \"#{@ism}: #{@ball} ball\"\n  end\nend\n\nclass GrantTalaba < Talaba\n  def initialize(ism, ball, grant)\n    super(ism, ball)\n    @grant = grant\n  end\n\n  def tanishtir\n    \"#{super}, grant #{@grant}%\"\n  end\nend\n\ntalaba = GrantTalaba.new(\"Bek\", 91, 50)\nputs talaba.tanishtir\nputs \"Daraja: #{talaba.daraja}\"",
          "output": "Bek: 91 ball, grant 50%\nDaraja: A"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>&lt;</code>",
              "Klassdan meros olish"
            ],
            [
              "<code>super</code>",
              "Ota klassdagi shu nomli metodni chaqiradi"
            ],
            [
              "<code>module</code>",
              "Metodlar to'plamini e'lon qiladi"
            ],
            [
              "<code>include</code>",
              "Modul metodlarini instans metodlari qilib qo'shadi"
            ],
            [
              "<code>extend</code>",
              "Modul metodlarini klass metodlari qilib qo'shadi"
            ],
            [
              "<code>ancestors</code>",
              "Metod qidirish zanjirini ko'rsatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "mixin.rb",
          "code": "module Baholanadigan\n  def daraja\n    @ball >= 90 ? \"A\" : \"B\"\n  end\nend\n\nmodule Salomlashadigan\n  def salomlash\n    \"Salom, #{@ism}!\"\n  end\nend\n\nclass Talaba\n  include Baholanadigan\n  include Salomlashadigan\n\n  def initialize(ism, ball)\n    @ism = ism\n    @ball = ball\n  end\nend\n\ntalaba = Talaba.new(\"Aziza\", 95)\nputs talaba.salomlash\nputs talaba.daraja",
          "output": "Salom, Aziza!\nA"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "include va extend",
          "html": "<code>include</code> modul metodlarini obyektning o'ziga qo'shadi, <code>extend</code> esa ularni klass metodlari sifatida qo'shadi. Ruby bitta klassdan meros olishga ruxsat beradi, lekin bir nechta modulni include qilish mumkin."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Kompozitsiyani ham o'ylang",
          "html": "Har bir munosabat meros bo'lavermaydi. Ba'zan obyektni boshqa obyekt tarkibiga qo'shish (kompozitsiya) soddaroq va moslashuvchan. <code>ancestors</code> yordamida metod qayerdan kelayotganini tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "Ruby'da meros olish uchun qaysi belgi ishlatiladi?",
          "options": [
            "<",
            ">",
            ":",
            "extends"
          ],
          "answer": 0,
          "explain": "class GrantTalaba < Talaba yozuvi ota klassni bildiradi."
        },
        {
          "q": "super nima qiladi?",
          "options": [
            "Yangi obyekt yaratadi",
            "Modulni ulaydi",
            "Ota klassdagi shu nomli metodni chaqiradi",
            "Xatoni ushlaydi"
          ],
          "answer": 2,
          "explain": "super ota klassdagi bir xil nomli metodga murojaat qiladi."
        },
        {
          "q": "include modul bilan nima qiladi?",
          "options": [
            "Klass metodlarini qo'shadi",
            "Modul metodlarini instans metodlari sifatida qo'shadi",
            "Faylni yuklaydi",
            "Yangi modul yaratadi"
          ],
          "answer": 1,
          "explain": "include modul metodlarini klass obyektlarida ishlatish imkonini beradi."
        }
      ]
    },
    {
      "id": 9,
      "title": "Xatolar va fayllar bilan ishlash",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da xatolar istisno (exception) sifatida yuzaga keladi. <code>begin</code> / <code>rescue</code> / <code>ensure</code> bloklari xatoni ushlash va tozalash ishlarini boshqaradi. Fayl bilan ishlashda <code>File</code> klassining blokli metodlari faylni avtomatik yopadi."
        },
        {
          "type": "code",
          "title": "istisno.rb",
          "code": "def bolish(a, b)\n  raise ArgumentError, \"Nolga bo'lish mumkin emas\" if b.zero?\n  a / b.to_f\nend\n\nbegin\n  puts bolish(10, 2)\n  puts bolish(5, 0)\nrescue ArgumentError => e\n  puts \"Xato: #{e.message}\"\nensure\n  puts \"Tekshiruv tugadi.\"\nend",
          "output": "5.0\nXato: Nolga bo'lish mumkin emas\nTekshiruv tugadi."
        },
        {
          "type": "table",
          "head": [
            "Kalit so'z",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>begin</code>",
              "Xavfli kod blokini boshlaydi"
            ],
            [
              "<code>rescue</code>",
              "Mos turdagi xatoni ushlaydi"
            ],
            [
              "<code>ensure</code>",
              "Har qanday holatda bajariladi"
            ],
            [
              "<code>retry</code>",
              "Blokni qaytadan bajarishga urinadi"
            ],
            [
              "<code>raise</code>",
              "Istisno otadi"
            ],
            [
              "<code>StandardError</code>",
              "Oddiy xatolar uchun asosiy klass"
            ]
          ]
        },
        {
          "type": "code",
          "title": "fayl.rb",
          "code": "fayl = File.join(__dir__, \"eslatma.txt\")\n\nFile.write(fayl, <<~MATN)\n  Birinchi qator\n  Ikkinchi qator\nMATN\n\nputs File.exist?(fayl) ? \"Fayl yozildi\" : \"Fayl yo'q\"\n\nFile.foreach(fayl) do |qator|\n  puts qator.chomp\nend",
          "output": "Fayl yozildi\nBirinchi qator\nIkkinchi qator"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Heredoc bilan ko'p qatorli matn",
          "html": "<code>&lt;&lt;~MATN</code> — squiggly heredoc: matnni chekinishdan tozalab, <code>MATN</code> belgisigacha o'qiydi. Ko'p qatorli matnlarni o'qishli yozish uchun qulay. <code>File.foreach</code> faylni qatorma-qator o'qiydi va blok tugagach yopadi."
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xatolarni yutib yubormang",
          "html": "Fayl mavjud bo'lmasa <code>Errno::ENOENT</code> yuzaga keladi. Uni oldindan <code>File.exist?</code> bilan tekshirish yoki <code>rescue</code> bilan boshqarish mumkin. <code>rescue Exception</code> yozmang — u dasturni to'xtatuvchi jiddiy xatolarni ham yashiradi. Odatiy holatlar uchun <code>StandardError</code> yetarli."
        }
      ],
      "quiz": [
        {
          "q": "Xatoni ushlash uchun qaysi kalit so'z ishlatiladi?",
          "options": [
            "rescue",
            "catch",
            "except",
            "handle"
          ],
          "answer": 0,
          "explain": "Ruby'da begin blokidagi xato rescue bilan ushlanadi."
        },
        {
          "q": "ensure bloki qachon bajariladi?",
          "options": [
            "Faqat xato bo'lsa",
            "Faqat xatosiz bo'lsa",
            "Har qanday holatda",
            "Hech qachon"
          ],
          "answer": 2,
          "explain": "ensure xato bo'lsa ham, bo'lmasa ham bajariladi — tozalash uchun ishlatiladi."
        },
        {
          "q": "Faylni qatorma-qator o'qish uchun qaysi metod ishlatiladi?",
          "options": [
            "File.write",
            "File.delete",
            "File.exist?",
            "File.foreach"
          ],
          "answer": 3,
          "explain": "File.foreach har bir qatorni blokka beradi va faylni avtomatik yopadi."
        }
      ]
    },
    {
      "id": 10,
      "title": "Gemlar, Bundler va standart kutubxona",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "RubyGems — kutubxona (gem) o'rnatish tizimi. Bundler esa loyiha uchun kerakli gemlarni <code>Gemfile</code> asosida boshqaradi va versiyalarni <code>Gemfile.lock</code> da qulflaydi. Ko'p foydali vositalar (JSON, Date, FileUtils) standart kutubxonada tayyor keladi."
        },
        {
          "type": "code",
          "title": "Gemfile",
          "code": "source \"https://rubygems.org\"\n\ngem \"rake\", \"~> 13.2\"",
          "output": "bundle install buyrug'i rake gemini o'rnatadi va Gemfile.lock faylini yaratadi. Buyruqlarni bundle exec bilan ishga tushirish versiyalar mosligini ta'minlaydi."
        },
        {
          "type": "table",
          "head": [
            "Buyruq yoki fayl",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>gem install nom</code>",
              "Bitta gemni o'rnatadi"
            ],
            [
              "<code>Gemfile</code>",
              "Loyiha bog'liqliklarini e'lon qiladi"
            ],
            [
              "<code>bundle install</code>",
              "Barcha gemlarni o'rnatadi"
            ],
            [
              "<code>bundle exec</code>",
              "Gemfile versiyalari bilan buyruq bajaradi"
            ],
            [
              "<code>Gemfile.lock</code>",
              "Aniq versiyalarni qulflaydi"
            ],
            [
              "<code>ruby -v</code>",
              "Ruby versiyasini ko'rsatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "stdlib.rb",
          "code": "require \"json\"\nrequire \"date\"\n\nsana = Date.new(2026, 10, 23)\nmalumot = { sana: sana.iso8601, mavzu: \"Ruby\" }\n\nputs JSON.generate(malumot)\nputs sana.strftime(\"%d.%m.%Y\")",
          "output": "{\"sana\":\"2026-10-23\",\"mavzu\":\"Ruby\"}\n23.10.2026"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Gemfile.lock nima uchun kerak?",
          "html": "U o'rnatilgan gemlarning aniq versiyalarini yozadi. Jamoa a'zolari va server bir xil versiyalarni ishlatishi uchun <code>Gemfile.lock</code> git'ga qo'shiladi. Maxfiy kalitlar esa Gemfile'ga emas, env o'zgaruvchilarga yoziladi."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Avval standart kutubxonani tekshiring",
          "html": "JSON, Date, Time, FileUtils, SecureRandom kabi ko'p ehtiyojlar Ruby bilan birga keladi. Yangi gem qo'shishdan oldin standart kutubxonada tayyor yechim bor-yo'qligini ko'rib chiqing."
        }
      ],
      "quiz": [
        {
          "q": "Loyiha bog'liqliklari qaysi faylda yoziladi?",
          "options": [
            "Gemfile",
            "package.json",
            "composer.json",
            "requirements.txt"
          ],
          "answer": 0,
          "explain": "Bundler Gemfile'dagi gem ro'yxatini o'qiydi; boshqa fayllar boshqa tillarga xos."
        },
        {
          "q": "bundle exec nima uchun ishlatiladi?",
          "options": [
            "Gemlarni o'chiradi",
            "Ruby'ni yangilaydi",
            "Gemfile.lock versiyalari bilan buyruq bajaradi",
            "Test yozadi"
          ],
          "answer": 2,
          "explain": "bundle exec buyruqni loyihadagi aniq gem versiyalari muhitida ishga tushiradi."
        },
        {
          "q": "JSON bilan ishlash uchun nima qilinadi?",
          "options": [
            "require 'json'",
            "include JSON",
            "import json",
            "using json"
          ],
          "answer": 0,
          "explain": "Ruby'da kutubxonani require bilan yuklaymiz: require 'json'."
        }
      ]
    },
    {
      "id": 11,
      "title": "Idiomatik Ruby va Minitest asoslari",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Idiomatik Ruby — til imkoniyatlaridan tabiiy foydalanish: qisqa guard clause'lar, <code>map</code> / <code>select</code>, symbol-to-proc va aniq nomlar. Kod yozilgandan keyin uni test bilan mustahkamlash odat tusiga kirishi kerak. Minitest Ruby bilan birga keladigan yengil test freymvorki."
        },
        {
          "type": "code",
          "title": "idiomlar.rb",
          "code": "def daraja(ball)\n  return \"A\" if ball >= 90\n  return \"B\" if ball >= 80\n  \"C\"\nend\n\nismlar = [\"ali\", \"aziza\", \"bek\"]\nputs ismlar.map(&:capitalize).inspect\n\njuftlar = (1..10).select(&:even?)\nputs juftlar.inspect\n\nputs daraja(85)",
          "output": "[\"Ali\", \"Aziza\", \"Bek\"]\n[2, 4, 6, 8, 10]\nB"
        },
        {
          "type": "table",
          "head": [
            "Idioma",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>return ... if shart</code>",
              "Guard clause — erta chiqish"
            ],
            [
              "<code>map(&:capitalize)</code>",
              "Har elementga metod qo'llaydi"
            ],
            [
              "<code>||=</code>",
              "Qiymat nil bo'lsa o'rnatadi"
            ],
            [
              "<code>a, b = 1, 2</code>",
              "Ko'p o'zgaruvchiga qiymat berish"
            ],
            [
              "<code>unless</code>",
              "Teskari shart"
            ],
            [
              "<code>each_with_object</code>",
              "Yig'ish uchun qulay iterator"
            ]
          ]
        },
        {
          "type": "code",
          "title": "test_qosh.rb",
          "code": "require \"minitest\"\nrequire \"minitest/test\"\nrequire \"stringio\"\n\ndef qosh(a, b)\n  a + b\nend\n\nclass QoshTest < Minitest::Test\n  def test_qoshish\n    assert_equal 5, qosh(2, 3)\n  end\n\n  def test_manfiy_son\n    assert_equal(-2, qosh(-5, 3))\n  end\nend\n\nhisobot = StringIO.new\nasl_stdout = $stdout\n$stdout = hisobot\nnatija = Minitest.run([\"--no-plugins\"])\n$stdout = asl_stdout\n\nputs \"Muvaffaqiyat: #{natija}\"\nputs \"Testlar: #{QoshTest.instance_methods.grep(/^test_/).length}\"",
          "output": "Muvaffaqiyat: true\nTestlar: 2"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Minitest qanday ishlaydi?",
          "html": "<code>Minitest::Test</code> dan meros olgan klassdagi <code>test_</code> bilan boshlanadigan metodlar avtomatik ishga tushadi. <code>assert_equal kutilgan, haqiqiy</code> tenglikni tekshiradi. Oddiy ishga tushirishda Minitest seed va vaqt bilan batafsil hisobot chiqaradi; bu misolda natijani qisqa ko'rsatish uchun hisobot vaqtincha <code>StringIO</code> ga yoziladi."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Testlarni odat qiling",
          "html": "Test faylini <code>_test.rb</code> bilan nomlang va <code>ruby test_qosh.rb</code> orqali ishga tushiring. Har bir xatti-harakat uchun bitta aniq test yozing. <code>assert</code>, <code>refute</code>, <code>assert_raises</code> kabi yordamchilar mavjud."
        }
      ],
      "quiz": [
        {
          "q": "map(&:capitalize) nima qiladi?",
          "options": [
            "Har bir elementni capitalize qiladi",
            "Faqat birinchi elementni o'zgartiradi",
            "Massivni saralaydi",
            "Har doim nil qaytaradi"
          ],
          "answer": 0,
          "explain": "&:capitalize symbolni blokka aylantirib, har bir elementga capitalize metodini qo'llaydi."
        },
        {
          "q": "Guard clause nima?",
          "options": [
            "Tsiklni to'xtatish",
            "Shart bajarilsa erta return qilish",
            "Klassni meros olish",
            "Faylni yopish"
          ],
          "answer": 1,
          "explain": "Guard clause istalmagan holatni boshida tekshirib, metoddan erta chiqadi va kodni tekis qiladi."
        },
        {
          "q": "assert_equal nimani tekshiradi?",
          "options": [
            "Fayl mavjudligini",
            "Klass merosini",
            "Qiymatlar tengligini",
            "Blok chaqirig'ini"
          ],
          "answer": 2,
          "explain": "assert_equal kutilgan va haqiqiy qiymat tengligini tekshiradi."
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
          "html": "Endi o'rganganlarimizni birlashtiramiz: klasslar, modullar, JSON, fayl va CLI argumentlari yordamida oddiy vazifa menejerini yasaymiz. Vazifalar <code>vazifalar.json</code> faylida saqlanadi, shuning uchun dastur yopilgandan keyin ham qoladi. Kod blokidagi natija bir nechta buyruq ketma-ket bajarilganda olinadi."
        },
        {
          "type": "code",
          "title": "storage.rb",
          "code": "require \"json\"\n\nmodule Storage\n  def self.yukla(fayl)\n    return [] unless File.exist?(fayl)\n\n    JSON.parse(File.read(fayl))\n  end\n\n  def self.saqla(fayl, vazifalar)\n    File.write(fayl, JSON.pretty_generate(vazifalar))\n  end\nend",
          "output": "Bu fayl faqat Storage modulini e'lon qiladi. Alohida ishga tushirilganda hech qanday matn chiqarmaydi; modul keyingi faylda ishlatiladi."
        },
        {
          "type": "code",
          "title": "task_manager.rb",
          "code": "require_relative \"storage\"\n\nFAYL = File.join(__dir__, \"vazifalar.json\")\nvazifalar = Storage.yukla(FAYL)\nbuyruq = ARGV[0] || \"list\"\n\ncase buyruq\nwhen \"add\"\n  matn = ARGV.drop(1).join(\" \").strip\n\n  if matn.empty?\n    puts \"Vazifa matnini kiriting.\"\n    exit 1\n  end\n\n  vazifalar << {\n    \"id\" => vazifalar.length + 1,\n    \"matn\" => matn,\n    \"bajarildi\" => false\n  }\n  Storage.saqla(FAYL, vazifalar)\n  puts \"Qo'shildi: #{matn}\"\nwhen \"done\"\n  id = (ARGV[1] || \"0\").to_i\n  vazifa = vazifalar.find { |v| v[\"id\"] == id }\n\n  if vazifa\n    vazifa[\"bajarildi\"] = true\n    Storage.saqla(FAYL, vazifalar)\n    matn = vazifa[\"matn\"]\n    puts \"Bajarildi: #{matn}\"\n  else\n    puts \"Topilmadi: #{id}\"\n  end\nwhen \"list\"\n  if vazifalar.empty?\n    puts \"Vazifalar yo'q.\"\n  else\n    vazifalar.each do |vazifa|\n      belgi = vazifa[\"bajarildi\"] ? \"[x]\" : \"[ ]\"\n      raqam = vazifa[\"id\"]\n      matn = vazifa[\"matn\"]\n      puts \"#{belgi} #{raqam}. #{matn}\"\n    end\n  end\nelse\n  puts \"Buyruqlar: add, done, list\"\nend",
          "output": "Qo'shildi: Ruby o'rganish\nQo'shildi: Minitest yozish\nBajarildi: Ruby o'rganish\n[x] 1. Ruby o'rganish\n[ ] 2. Minitest yozish"
        },
        {
          "type": "table",
          "head": [
            "Buyruq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>add Matn</code>",
              "Yangi vazifa qo'shadi"
            ],
            [
              "<code>done ID</code>",
              "Vazifani bajarilgan deb belgilaydi"
            ],
            [
              "<code>list</code>",
              "Barcha vazifalarni ko'rsatadi"
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            "Ma'lumot modeli: <code>id</code>, <code>matn</code>, <code>bajarildi</code>.",
            "Saqlash: JSON fayl va <code>Storage</code> moduli.",
            "Buyruqlar: <code>ARGV</code> massividan o'qiladi.",
            "Holat: har bir vazifa hash sifatida saqlanadi."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Loyihani kengaytiring",
          "html": "O'chirish, tahrirlash, muddat yoki prioritet qo'shishni sinab ko'ring. Vazifalarni filtrlash uchun <code>select</code> ishlating. Keyin shu g'oyani Sinatra yoki Rails bilan veb-ilovaga aylantirishingiz mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Mini loyihada vazifalar qaysi formatda saqlanadi?",
          "options": [
            "YAML",
            "CSV",
            "HTML",
            "JSON"
          ],
          "answer": 3,
          "explain": "Storage moduli vazifalarni JSON faylga yozadi va JSON.parse bilan qayta o'qiydi."
        },
        {
          "q": "ARGV nima?",
          "options": [
            "Fayl nomi",
            "Buyruq satri argumentlari",
            "Klass metodi",
            "Xato turi"
          ],
          "answer": 1,
          "explain": "ARGV dastur ishga tushirilganda berilgan buyruq satri argumentlarini saqlaydi."
        },
        {
          "q": "Storage.yukla fayl mavjud bo'lmasa nima qaytaradi?",
          "options": [
            "nil",
            "Bo'sh massiv",
            "Xato",
            "false"
          ],
          "answer": 1,
          "explain": "Fayl yo'q bo'lsa, yukla bo'sh massiv qaytaradi; shunda list xavfsiz ishlaydi."
        }
      ]
    },
    {
      "id": 13,
      "title": "Matnlar bilan chuqur ishlash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da matn — <code>String</code> obyekti va uning o'ndan ortiq foydali metodlari bor. Bu darsda tozalash, qidirish, almashtirish va bo'laklash amallarini ko'rib chiqamiz. Matnlar sukut bo'yicha o'zgaruvchan (mutable), shuning uchun bir obyektni ikki nom bilan ushlab qolsangiz, o'zgarish ikkalasida ham ko'rinadi."
        },
        {
          "type": "code",
          "title": "tozalash.rb",
          "code": "matn = \"  Ruby — o'qishli til  \"\n\nputs matn.strip\nputs matn.strip.length\nputs matn.include?(\"o'qishli\")\nputs matn.start_with?(\"  Ruby\")\nputs \"salom dunyo\".capitalize\nputs \"RUBY\".downcase",
          "output": "Ruby — o'qishli til\n19\ntrue\ntrue\nSalom dunyo\nruby"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>strip</code>",
              "Boshi va oxiridagi bo'sh joylarni olib tashlaydi"
            ],
            [
              "<code>include?(\"til\")</code>",
              "Ichida shunday bo'lak bor-yo'qligini tekshiradi"
            ],
            [
              "<code>start_with?</code>, <code>end_with?</code>",
              "Boshlanishi yoki oxirini tekshiradi"
            ],
            [
              "<code>sub</code>, <code>gsub</code>",
              "Birinchi yoki barcha moslikni almashtiradi"
            ],
            [
              "<code>split</code>",
              "Matnni ajratgich bo'yicha massivga bo'ladi"
            ],
            [
              "<code>center</code>, <code>ljust</code>, <code>rjust</code>",
              "Kenglik bo'yicha tekislaydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "almashtirish.rb",
          "code": "gap = \"Aziza 85, Bek 72, Dilnoza 91\"\n\ngap.split(\", \").each { |qism| puts qism }\nputs gap.gsub(/[0-9]+/, \"#\")\nputs \"ruby\".center(10, \"*\")\nputs \"Ruby\".ljust(8, \".\") + \"3.x\"\nputs \"a-b-c\".split(\"-\").inspect",
          "output": "Aziza 85\nBek 72\nDilnoza 91\nAziza #, Bek #, Dilnoza #\n***ruby***\nRuby....3.x\n[\"a\", \"b\", \"c\"]"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Nusxa olishni unutmang",
          "html": "<code>matn2 = matn</code> yangi matn yaratmaydi — ikkala nom bir obyektni ko'rsatadi. Mustaqil nusxa uchun <code>matn.dup</code> yoki <code>matn + \"\"</code> ishlating. <code>freeze</code> esa matnni o'zgartirib bo'lmaydigan qilib qo'yadi; fayl boshiga <code># frozen_string_literal: true</code> izohi barcha literal matnlarni muzlatadi."
        },
        {
          "type": "p",
          "html": "Amaliy maslahat: foydalanuvchi kiritgan matnni har doim <code>strip</code> qiling va bo'shligini alohida tekshiring. <code>\"\"</code> Ruby'da rost qiymat, shuning uchun <code>if ism</code> bo'sh matnni o'tkazib yuboradi. <code>ism.empty?</code> yoki <code>ism.strip.empty?</code> aniqroq shart beradi."
        }
      ],
      "quiz": [
        {
          "q": "\"  ruby  \".strip natijasi nima?",
          "options": [
            "\"  ruby  \"",
            "\"ruby\"",
            "\" ruby \"",
            "nil"
          ],
          "answer": 1,
          "explain": "strip matnning boshidagi va oxiridagi barcha bo'sh joylarni olib tashlaydi."
        },
        {
          "q": "gsub metodi nima qiladi?",
          "options": [
            "Faqat birinchi moslikni almashtiradi",
            "Matnni massivga bo'ladi",
            "Barcha mosliklarni almashtiradi",
            "Matn uzunligini qaytaradi"
          ],
          "answer": 2,
          "explain": "gsub — global substitution: topilgan barcha mosliklarni yangi qiymat bilan almashtiradi. sub esa faqat birinchisini almashtiradi."
        },
        {
          "q": "\"a-b-c\".split(\"-\") qanday natija beradi?",
          "options": [
            "[\"a-b-c\"]",
            "\"abc\"",
            "3",
            "[\"a\", \"b\", \"c\"]"
          ],
          "answer": 3,
          "explain": "split ajratgich bo'yicha bo'laklaydi va har bir bo'lakdan massiv yasaydi."
        }
      ]
    },
    {
      "id": 14,
      "title": "Massivlar: indeks, slice va mutatsiya",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Massiv — tartiblangan kolleksiya. Ruby'da indekslar <code>0</code> dan boshlanadi, manfiy indeks esa oxiridan sanaydi: <code>-1</code> — oxirgi element. Massivning ko'p metodlari ikki xil bo'ladi: yangi massiv qaytaradiganlari va o'zini o'zgartiradiganlari (<code>sort!</code>, <code>map!</code>, <code>delete</code>)."
        },
        {
          "type": "code",
          "title": "massiv.rb",
          "code": "sonlar = [4, 1, 2, 2, 7, 3]\n\nputs sonlar[0]\nputs sonlar[-1]\nputs sonlar.first(2).inspect\nsonlar << 9\nsonlar.delete(2)\nputs sonlar.inspect\nputs sonlar.sort.inspect\nputs sonlar.uniq.inspect\nputs sonlar.sum",
          "output": "4\n3\n[4, 1]\n[4, 1, 7, 3, 9]\n[1, 3, 4, 7, 9]\n[4, 1, 7, 3, 9]\n24"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "O'zgarishi",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>push</code>, <code>&lt;&lt;</code>",
              "O'zini",
              "Oxiriga element qo'shadi"
            ],
            [
              "<code>pop</code>, <code>shift</code>",
              "O'zini",
              "Oxiridan yoki boshidan olib tashlaydi"
            ],
            [
              "<code>sort</code>, <code>map</code>",
              "Yangi massiv",
              "Saralaydi yoki o'zgartiradi"
            ],
            [
              "<code>sort!</code>, <code>map!</code>",
              "O'zini",
              "Xuddi shu ishni joyida bajaradi"
            ],
            [
              "<code>compact</code>",
              "Yangi massiv",
              "<code>nil</code> larni olib tashlaydi"
            ],
            [
              "<code>flatten</code>",
              "Yangi massiv",
              "Ichki massivlarni yozib yuboradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "matritsa.rb",
          "code": "matritsa = [[1, 2], [3, 4], [5, 6]]\n\nputs matritsa.flatten.inspect\nputs matritsa.transpose.inspect\nputs matritsa[1].inspect\nmatritsa.each_with_index do |qator, i|\n  puts \"#{i}: #{qator.sum}\"\nend\nputs matritsa.dig(2, 1)",
          "output": "[1, 2, 3, 4, 5, 6]\n[[1, 3, 5], [2, 4, 6]]\n[3, 4]\n0: 3\n1: 7\n2: 11\n6"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Bang metodlar va xavfsizlik",
          "html": "<code>sort!</code> kabi bang metodlar asl massivni o'zgartiradi va ko'pincha o'zini qaytaradi. <code>delete(2)</code> esa barcha <code>2</code> larni o'chiradi, faqat bittasini emas. Massivni kezish paytida unga element qo'shish yoki o'chirish tartibni buzadi — avval nusxa oling yoki yangi massiv yig'ing."
        },
        {
          "type": "p",
          "html": "Indeks bo'yicha xavfsiz olish uchun <code>fetch</code> ishlating: <code>sonlar.fetch(10)</code> xato beradi, <code>sonlar[10]</code> esa <code>nil</code> qaytaradi. <code>fetch(10, 0)</code> esa standart qiymat beradi. Bu farq ma'lumot yo'qligini jimgina yashirmaslikka yordam beradi."
        }
      ],
      "quiz": [
        {
          "q": "Massivning oxirgi elementini qaysi indeks bilan olish mumkin?",
          "options": [
            "0",
            "1",
            "-1",
            "length"
          ],
          "answer": 2,
          "explain": "Ruby'da -1 oxirgi elementni, -2 undan oldingisini bildiradi."
        },
        {
          "q": "[1, 2, 2, 3].delete(2) natijasida massiv qanday bo'ladi?",
          "options": [
            "[1, 2, 3]",
            "[3]",
            "[1, 2, 2, 3]",
            "[1, 3]"
          ],
          "answer": 3,
          "explain": "delete berilgan qiymatning barcha nusxalarini o'chiradi, shuning uchun ikkala 2 ham yo'qoladi."
        },
        {
          "q": "Qaysi metod massivni joyida saralaydi?",
          "options": [
            "sort!",
            "sorted",
            "sort_by",
            "sort"
          ],
          "answer": 0,
          "explain": "sort! asl massivni o'zgartiradi; sort esa yangi saralangan massiv qaytaradi."
        }
      ]
    },
    {
      "id": 15,
      "title": "Hash'lar: fetch, dig va guruhlash",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Hash — kalit va qiymat juftliklaridan iborat kolleksiya. Kalit sifatida symbol, matn yoki son ishlatilishi mumkin. Ruby 3.x hash'da kiritilish tartibini saqlaydi, shuning uchun <code>each</code> kalitlarni yozilgan tartibda kezadi. Bu xususiyat hisobot chiqarishda juda qulay."
        },
        {
          "type": "code",
          "title": "talaba.rb",
          "code": "talaba = { ism: \"Aziza\", ball: 85, shahar: \"Toshkent\" }\n\nputs talaba[:ism]\nputs talaba.fetch(:ball)\nputs talaba.fetch(:yosh, 0)\nputs talaba.dig(:ism)\ntalaba[:ball] = 90\nputs talaba[:ball]\ntalaba.each { |kalit, qiymat| puts \"#{kalit}: #{qiymat}\" }",
          "output": "Aziza\n85\n0\nAziza\n90\nism: Aziza\nball: 90\nshahar: Toshkent"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>h[:kalit]</code>",
              "Qiymat yoki yo'q bo'lsa <code>nil</code> qaytaradi"
            ],
            [
              "<code>h.fetch(:kalit)</code>",
              "Yo'q bo'lsa xato beradi (yoki standart qiymat)"
            ],
            [
              "<code>h.dig(:a, :b)</code>",
              "Ichma-ich hash'dan xavfsiz qiymat oladi"
            ],
            [
              "<code>h.merge(boshqa)</code>",
              "Ikki hash'ni birlashtiradi"
            ],
            [
              "<code>h.transform_values</code>",
              "Qiymatlarni blok orqali o'zgartiradi"
            ],
            [
              "<code>h.key?</code>, <code>h.value?</code>",
              "Kalit yoki qiymat borligini tekshiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "guruhlash.rb",
          "code": "guruh = { \"Aziza\" => 85, \"Bek\" => 72, \"Dilnoza\" => 91, \"Jasur\" => 64 }\n\nnatija = guruh.group_by do |ism, ball|\n  ball >= 80 ? :otdi : :qoldi\nend\n\nputs natija[:otdi].map(&:first).inspect\nputs natija[:qoldi].map(&:first).inspect\nputs guruh.transform_values { |ball| ball + 5 }.values.inspect",
          "output": "[\"Aziza\", \"Dilnoza\"]\n[\"Bek\", \"Jasur\"]\n[90, 77, 96, 69]"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "nil bilan ishlash tuzog'i",
          "html": "<code>talaba[:yoq]</code> va mavjud bo'lib qiymati <code>nil</code> bo'lgan kalit bir xil natija beradi. Qaysi holat muhim bo'lsa, <code>key?</code> yoki <code>fetch</code> dan foydalaning. Hash'ni standart qiymat bilan yaratsangiz (<code>Hash.new(0)</code>), yo'q kalitga murojaat uni jimgina yaratmaydi — faqat standart qiymat qaytaradi."
        },
        {
          "type": "p",
          "html": "Ichma-ich tuzilmalarda <code>dig</code> zanjirni qisqartiradi: <code>profil.dig(:manzil, :shahar)</code> oraliq qiymat <code>nil</code> bo'lsa xato bermaydi. <code>values_at</code> bir nechta kalitni bir yo'la oladi, <code>slice</code> esa kerakli kalitlardan yangi hash yasaydi. Bu metodlar ma'lumotni filtrashda kodni ancha o'qishli qiladi."
        }
      ],
      "quiz": [
        {
          "q": "h.fetch(:yoq, 0) qanday ishlaydi?",
          "options": [
            "Xato beradi",
            "nil qaytaradi",
            "Kalit yaratadi",
            "0 qaytaradi"
          ],
          "answer": 3,
          "explain": "fetch ikkinchi argument sifatida standart qiymat oladi va kalit yo'q bo'lsa shuni qaytaradi."
        },
        {
          "q": "Hash'dan ichma-ich qiymatni xavfsiz olish uchun qaysi metod mos?",
          "options": [
            "dig",
            "flatten",
            "compact",
            "slice!"
          ],
          "answer": 0,
          "explain": "dig kalitlar zanjiri bo'ylab yuradi va oraliq nil bo'lsa ham xato bermaydi."
        },
        {
          "q": "group_by bloki qanday qiymat qaytarishi kerak?",
          "options": [
            "Faqat true yoki false",
            "Har bir element uchun guruh kaliti",
            "Yangi massiv",
            "Hech narsa"
          ],
          "answer": 1,
          "explain": "group_by blok natijasini guruh kaliti sifatida ishlatadi va shu kalit bo'yicha massivlar yasaydi."
        }
      ]
    },
    {
      "id": 16,
      "title": "Bloklar, yield va block_given?",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Blok — metod chaqiruviga yopishtirilgan kod bo'lagi. Metod ichida uni <code>yield</code> bilan ishga tushirish mumkin. Blok metodning oddiy argumenti emas, shuning uchun uni faqat bitta berish mumkin. Blokni keyinroq ishlatish kerak bo'lsa, <code>&amp;blok</code> orqali <code>Proc</code> ga aylantirib saqlanadi."
        },
        {
          "type": "code",
          "title": "yield.rb",
          "code": "def vaqt\n  puts \"Boshladik\"\n  natija = yield(3)\n  puts \"Natija: #{natija}\"\nend\n\nvaqt { |son| son * 2 }\n\ndef ikki_qadam\n  yield(1, \"bir\")\n  yield(2, \"ikki\")\nend\n\nikki_qadam { |son, nom| puts \"#{son} — #{nom}\" }",
          "output": "Boshladik\nNatija: 6\n1 — bir\n2 — ikki"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>{ ... }</code>",
              "Bir qatorli blok, yuqori ustuvorlik"
            ],
            [
              "<code>do ... end</code>",
              "Ko'p qatorli blok, past ustuvorlik"
            ],
            [
              "<code>yield</code>",
              "Blokni berilgan argumentlar bilan chaqiradi"
            ],
            [
              "<code>block_given?</code>",
              "Blok berilganini tekshiradi"
            ],
            [
              "<code>&amp;blok</code>",
              "Blokni Proc obyektiga aylantiradi"
            ],
            [
              "<code>blok.call</code>",
              "Saqlangan Proc'ni ishga tushiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "ixtiyoriy-blok.rb",
          "code": "def tekshir\n  return \"blok yo'q\" unless block_given?\n  yield\nend\n\nputs tekshir\nnatija = tekshir { \"blok bor\" }\nputs natija\n\ndef takrorla(n, &blok)\n  n.times { |i| blok.call(i) }\nend\n\ntakrorla(3) { |i| puts \"Qadam #{i}\" }",
          "output": "blok yo'q\nblok bor\nQadam 0\nQadam 1\nQadam 2"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Blok va return",
          "html": "Blok ichidagi <code>return</code> metodni butunlay tark etadi, chunki blok metodning bir qismi. <code>Proc</code> ichidagi <code>return</code> ham chaqiruvchi metodga ta'sir qiladi, lambda'da esa faqat lambda'dan chiqadi. Bu farq keyingi darsda batafsil ko'riladi."
        },
        {
          "type": "p",
          "html": "<code>yield</code> qaytargan qiymat blokning oxirgi ifodasi bo'ladi. Shuning uchun blokli metodlar ko'pincha natijani yig'ib qaytaradi: <code>map</code>, <code>select</code> va <code>each_with_object</code> shu tamoyilda ishlaydi. Blokni majburiy qilish uchun metod boshida <code>block_given?</code> ni tekshiring yoki <code>raise ArgumentError</code> bilan aniq xabar bering."
        }
      ],
      "quiz": [
        {
          "q": "Metod ichida berilgan blokni ishga tushirish uchun nima ishlatiladi?",
          "options": [
            "yield",
            "call",
            "block",
            "invoke"
          ],
          "answer": 0,
          "explain": "yield blokni darhol chaqiradi va uning natijasini qaytaradi."
        },
        {
          "q": "block_given? nimani tekshiradi?",
          "options": [
            "Metod natijasini",
            "Blok berilganini",
            "Argumentlar sonini",
            "Blokning turini"
          ],
          "answer": 1,
          "explain": "block_given? joriy metodga blok berilgan-bo'lmaganini true yoki false qilib qaytaradi."
        },
        {
          "q": "&blok parametri metod ichida qanday obyekt bo'ladi?",
          "options": [
            "String",
            "Symbol",
            "Proc",
            "Array"
          ],
          "answer": 2,
          "explain": "& belgisi blokni Proc obyektiga aylantiradi; uni saqlash va keyin call bilan chaqirish mumkin."
        }
      ]
    },
    {
      "id": 17,
      "title": "Proc, lambda va closure",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Blokni qayta ishlatish uchun uni obyektga aylantirish kerak. <code>proc</code> va <code>lambda</code> shu ishni qiladi. Ikkalasi ham <code>call</code> bilan chaqiriladi, lekin argumentlar soniga munosabati va <code>return</code> xatti-harakati bilan farq qiladi. Lambda qat'iyroq va oddiy metodga o'xshaydi."
        },
        {
          "type": "code",
          "title": "proc-lambda.rb",
          "code": "qosh = ->(a, b) { a + b }\nkopaytir = proc { |a, b| a * b }\n\nputs qosh.call(2, 3)\nputs qosh.(4, 5)\nputs kopaytir.call(2, 4)\nputs qosh.lambda?\nputs kopaytir.lambda?\nputs qosh.arity",
          "output": "5\n9\n8\ntrue\nfalse\n2"
        },
        {
          "type": "table",
          "head": [
            "Xususiyat",
            "Proc",
            "Lambda"
          ],
          "rows": [
            [
              "<code>lambda?</code>",
              "<code>false</code>",
              "<code>true</code>"
            ],
            [
              "Argumentlar soni",
              "Ortiqchasini tashlaydi, yetishmasa nil beradi",
              "Qat'iy tekshiradi"
            ],
            [
              "<code>return</code>",
              "Chaqiruvchi metodni tark etadi",
              "Faqat lambda'dan chiqadi"
            ],
            [
              "Yaratish",
              "<code>proc { }</code>",
              "<code>-&gt; { }</code> yoki <code>lambda { }</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "closure.rb",
          "code": "def hisoblagich\n  son = 0\n  -> { son += 1 }\nend\n\nc = hisoblagich\nputs c.call\nputs c.call\nputs c.call\n\nkoef = 10\nkopaytir = ->(x) { x * koef }\nputs kopaytir.call(3)",
          "output": "1\n2\n3\n30"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Closure nima?",
          "html": "Closure — yaratilgan joyidagi mahalliy o'zgaruvchilarni eslab qoladigan funksiya. <code>hisoblagich</code> qaytargan lambda <code>son</code> ni xotirada saqlaydi va har chaqiruvda o'zgartiradi. Bu holat (state) ni obyekt yaratmasdan saqlashning qulay usuli, lekin kutilmagan umumiy holatga olib kelmasligi uchun ehtiyot bo'ling."
        },
        {
          "type": "p",
          "html": "Lambda'ni metodga blok sifatida uzatish uchun <code>&amp;lambda</code> yoziladi. Masalan, <code>[1, 2, 3].map(&amp;qosh)</code> ishlamaydi, chunki <code>qosh</code> ikki argument kutadi; lekin <code>map(&amp;:to_s)</code> kabi symbol-proc keng qo'llanadi. <code>curry</code> yordamida ko'p argumentli lambda'ni bosqichma-bosqich chaqirish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Lambda va Proc orasidagi asosiy farqlardan biri nima?",
          "options": [
            "Lambda faqat sonlar bilan ishlaydi",
            "Proc call qabul qilmaydi",
            "Lambda argumentlar sonini qat'iy tekshiradi",
            "Proc lambda? true qaytaradi"
          ],
          "answer": 2,
          "explain": "Lambda argumentlar sonini metod kabi qat'iy tekshiradi; oddiy Proc ortiqcha argumentlarni tashlab yuboradi."
        },
        {
          "q": "Lambda'ni chaqirishning qaysi yozuvi to'g'ri?",
          "options": [
            "qosh.invoke(2, 3)",
            "qosh.yield(2, 3)",
            "qosh.run(2, 3)",
            "qosh.call(2, 3)"
          ],
          "answer": 3,
          "explain": "Proc va lambda call metodi bilan chaqiriladi; qosh.(2, 3) ham mumkin."
        },
        {
          "q": "Closure qanday ishlaydi?",
          "options": [
            "Faqat global o'zgaruvchilarni ko'radi",
            "Yaratilgan joyidagi mahalliy o'zgaruvchilarni eslab qoladi",
            "Har chaqiruvda yangi jarayon ochadi",
            "Faqat sonlarni saqlaydi"
          ],
          "answer": 1,
          "explain": "Closure tashqi mahalliy o'zgaruvchilarga bog'lanadi va ularni keyingi chaqiruvlarda ham ishlatadi."
        }
      ]
    },
    {
      "id": 18,
      "title": "Enumerable: map, select, reduce",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>Enumerable</code> — Ruby kolleksiyalarining umumiy interfeysi. Massiv, hash, range va boshqa ko'p obyektlar <code>each</code> asosida o'nlab metodni bepul oladi. Ularni bilish tsikllarni qisqartiradi va kodni niyatingizga yaqinlashtiradi: filtrash, aylantirish, yig'ish."
        },
        {
          "type": "code",
          "title": "kolleksiya.rb",
          "code": "sonlar = [3, 8, 1, 10, 5]\n\nputs sonlar.map { |n| n * 2 }.inspect\nputs sonlar.select(&:even?).inspect\nputs sonlar.reject { |n| n > 5 }.inspect\nputs sonlar.reduce(0) { |sum, n| sum + n }\nputs sonlar.sum\nputs sonlar.max",
          "output": "[6, 16, 2, 20, 10]\n[8, 10]\n[3, 1, 5]\n27\n27\n10"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>map</code>",
              "Har bir element o'zgartirilgan yangi massiv"
            ],
            [
              "<code>select</code>, <code>reject</code>",
              "Shartga mos yoki mos bo'lmagan elementlar"
            ],
            [
              "<code>reduce</code>, <code>inject</code>",
              "Bitta yig'ma qiymat"
            ],
            [
              "<code>find</code>",
              "Birinchi mos element yoki <code>nil</code>"
            ],
            [
              "<code>any?</code>, <code>all?</code>",
              "Kamida bittasi yoki hammasi shartni bajaradimi"
            ],
            [
              "<code>sort_by</code>",
              "Blok natijasi bo'yicha saralash"
            ]
          ]
        },
        {
          "type": "code",
          "title": "ismlar.rb",
          "code": "ismlar = %w[Aziza bek Dilnoza jasur]\n\nputs ismlar.partition { |ism| ism.start_with?(\"A\", \"D\") }.inspect\nputs ismlar.sort_by(&:downcase).inspect\nismlar.group_by(&:length).each do |uzunlik, guruh|\n  puts \"#{uzunlik}: #{guruh.join(', ')}\"\nend\nputs ismlar.any? { |ism| ism.length > 6 }\nputs ismlar.count { |ism| ism.start_with?(\"b\") }",
          "output": "[[\"Aziza\", \"Dilnoza\"], [\"bek\", \"jasur\"]]\n[\"Aziza\", \"bek\", \"Dilnoza\", \"jasur\"]\n5: Aziza, jasur\n3: bek\n7: Dilnoza\ntrue\n1"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "each_with_object va lazy",
          "html": "Hash yig'ish uchun <code>each_with_object({}) { |x, h| ... }</code> qulay: blok ikkinchi argument sifatida akkumulyatorni oladi. Juda katta yoki cheksiz ketma-ketliklarda <code>lazy</code> oraliq massivlar yaratmaslikka yordam beradi: <code>(1..Float::INFINITY).lazy.map { ... }.first(5)</code>."
        },
        {
          "type": "p",
          "html": "<code>reduce</code> ning argumenti — boshlang'ich qiymat. Uni bermasangiz, birinchi element akkumulyator bo'ladi; bo'sh massivda bu <code>nil</code> qaytaradi, shuning uchun aniq boshlang'ich berish xavfsizroq. <code>map</code> va <code>select</code> zanjirlanganda har bosqich yangi massiv yaratadi — kichik ma'lumotlarda bu muammo emas."
        }
      ],
      "quiz": [
        {
          "q": "select va map orasidagi farq nima?",
          "options": [
            "Ikkalasi bir xil",
            "select o'zini o'zgartiradi",
            "map faqat sonlar bilan ishlaydi",
            "select filtrlaydi, map o'zgartiradi"
          ],
          "answer": 3,
          "explain": "select shartga mos elementlarni qoldiradi; map esa har bir elementdan yangi qiymat yasaydi."
        },
        {
          "q": "[1, 2, 3].reduce(10) { |s, n| s + n } natijasi nima?",
          "options": [
            "16",
            "6",
            "10",
            "nil"
          ],
          "answer": 0,
          "explain": "Boshlang'ich qiymat 10 ga 1, 2 va 3 qo'shiladi: 10 + 6 = 16."
        },
        {
          "q": "partition metodi nimani qaytaradi?",
          "options": [
            "Bitta son",
            "Hash",
            "Ikki massivdan iborat massiv",
            "nil yoki true"
          ],
          "answer": 2,
          "explain": "partition shartni bajargan va bajarmagan elementlarni ikkita alohida massivga ajratadi."
        }
      ]
    },
    {
      "id": 19,
      "title": "Comparable va obyektlarni saralash",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "O'z klasslaringizni saralash uchun <code>&lt;=&gt;</code> (spaceship) metodini yozib, <code>Comparable</code> modulini qo'shish kifoya. Modul <code>&lt;</code>, <code>&gt;</code>, <code>==</code>, <code>between?</code>, <code>clamp</code> kabi o'nlab metodni avtomatik beradi. Shunda obyektlaringiz sonlar kabi tutadi."
        },
        {
          "type": "code",
          "title": "talaba.rb",
          "code": "class Talaba\n  include Comparable\n  attr_reader :ism, :ball\n\n  def initialize(ism, ball)\n    @ism = ism\n    @ball = ball\n  end\n\n  def <=>(boshqa)\n    ball <=> boshqa.ball\n  end\n\n  def to_s\n    \"#{ism} (#{ball})\"\n  end\nend\n\ntalabalar = [\n  Talaba.new(\"Aziza\", 85),\n  Talaba.new(\"Bek\", 72),\n  Talaba.new(\"Dilnoza\", 91)\n]\n\nputs talabalar.sort.map(&:to_s)\nputs talabalar.min.ism\nputs talabalar.max.ball",
          "output": "Bek (72)\nAziza (85)\nDilnoza (91)\nBek\n91"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>a &lt;=&gt; b</code>",
              "Manfiy, nol yoki musbat son"
            ],
            [
              "<code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>",
              "<code>&lt;=&gt;</code> asosida solishtiradi"
            ],
            [
              "<code>==</code>",
              "<code>&lt;=&gt;</code> nol bo'lsa true"
            ],
            [
              "<code>between?(a, b)</code>",
              "Oraliqda ekanini tekshiradi"
            ],
            [
              "<code>clamp(min, max)</code>",
              "Chegaralar ichiga qisqartiradi"
            ],
            [
              "<code>sort</code>",
              "Comparable obyektlarni saralaydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "ball.rb",
          "code": "class Ball\n  include Comparable\n  attr_reader :qiymat\n\n  def initialize(qiymat)\n    @qiymat = qiymat\n  end\n\n  def <=>(boshqa)\n    qiymat <=> boshqa.qiymat\n  end\n\n  def to_s = \"#{qiymat} ball\"\nend\n\na = Ball.new(80)\nb = Ball.new(90)\nputs a < b\nputs a == Ball.new(80)\nputs a.between?(Ball.new(70), b)\nputs a.clamp(Ball.new(85), Ball.new(95))",
          "output": "true\ntrue\ntrue\n85 ball"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Taqqoslanmaydigan qiymatlar",
          "html": "<code>&lt;=&gt;</code> taqqoslab bo'lmaydigan qiymatlar uchun <code>nil</code> qaytarishi mumkin. <code>sort</code> bunday holatda <code>ArgumentError</code> beradi. Turli klasslarni solishtirishdan oldin turlari mosligini tekshiring yoki <code>return nil unless boshqa.is_a?(Ball)</code> yozing."
        },
        {
          "type": "p",
          "html": "Saralash mezonini vaqtincha o'zgartirish uchun <code>sort_by</code> qulayroq: <code>talabalar.sort_by(&amp;:ball)</code>. <code>Comparable</code> esa obyektning tabiiy tartibini belgilaydi. Ishqalanish bo'lsa, <code>sort</code> dan ko'ra <code>sort_by</code> ni tanlang — u blokdagi kalit bo'yicha barqarorroq va tushunarliroq ishlaydi."
        }
      ],
      "quiz": [
        {
          "q": "Comparable modulini qo'shish uchun qaysi metod majburiy?",
          "options": [
            "<=>",
            "each",
            "to_s",
            "=="
          ],
          "answer": 0,
          "explain": "Comparable barcha solishtirishlarni <=> natijasiga tayanadi, shuning uchun uni yozish shart."
        },
        {
          "q": "a <=> b qanday qiymat qaytarsa, a va b teng hisoblanadi?",
          "options": [
            "1",
            "0",
            "-1",
            "nil"
          ],
          "answer": 1,
          "explain": "0 — ikkala qiymat tengligini bildiradi; manfiy a kichik, musbat a katta ekanini bildiradi."
        },
        {
          "q": "Comparable qaysi metodni avtomatik bermaydi?",
          "options": [
            "between?",
            "clamp",
            "<",
            "sort_by"
          ],
          "answer": 3,
          "explain": "sort_by Enumerable'dan keladi va solishtirish kalitini blok orqali oladi; Comparable uni bermaydi."
        }
      ]
    },
    {
      "id": 20,
      "title": "Struct va Data bilan qiymat obyektlari",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kichik ma'lumot tuzilmalari uchun to'liq klass yozish ortiqcha bo'lishi mumkin. <code>Struct</code> atributlar, konstruktor va tenglikni bir qatorda beradi. Ruby 3.2'dan boshlab <code>Data</code> ham bor: u o'zgarmas (immutable) va qiymat obyektlari uchun xavfsizroq."
        },
        {
          "type": "code",
          "title": "struct.rb",
          "code": "Nuqta = Struct.new(:x, :y)\na = Nuqta.new(2, 3)\n\nputs a.x\na.x = 5\nputs a.x\nputs a == Nuqta.new(5, 3)\nputs a.to_h.values.inspect\nputs a.members.inspect",
          "output": "2\n5\ntrue\n[5, 3]\n[:x, :y]"
        },
        {
          "type": "table",
          "head": [
            "Xususiyat",
            "Struct",
            "Data"
          ],
          "rows": [
            [
              "O'zgaruvchanlik",
              "Atributlarni o'zgartirish mumkin",
              "O'zgarmas"
            ],
            [
              "Yaratish",
              "<code>Struct.new(:x, :y)</code>",
              "<code>Data.define(:x, :y)</code>"
            ],
            [
              "Nusxa o'zgartirish",
              "Joyida yoziladi",
              "<code>with(...)</code> yangi obyekt qaytaradi"
            ],
            [
              "Tenglik",
              "Qiymatlar bo'yicha",
              "Qiymatlar bo'yicha"
            ],
            [
              "Versiya",
              "Barcha Ruby 3.x",
              "Ruby 3.2 va undan yuqori"
            ]
          ]
        },
        {
          "type": "code",
          "title": "data.rb",
          "code": "Kitob = Data.define(:nom, :narx)\n\nk = Kitob.new(nom: \"Ruby asoslari\", narx: 120_000)\nputs k.nom\nputs k.narx\n\nyangilangan = k.with(narx: 100_000)\nputs yangilangan.narx\nputs k.narx\nputs yangilangan == Kitob.new(nom: \"Ruby asoslari\", narx: 100_000)",
          "output": "Ruby asoslari\n120000\n100000\n120000\ntrue"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qachon qaysi biri?",
          "html": "Ma'lumot o'zgarishi kerak bo'lsa <code>Struct</code>, qiymatlar tug'ilgandan keyin o'zgarmasligi kerak bo'lsa <code>Data</code> tanlanadi. Ikkalasi ham <code>to_h</code>, <code>members</code> va tenglikni beradi. Katta biznes logikasi, validatsiya yoki ko'p metod kerak bo'lsa oddiy klass yozgan ma'qul."
        },
        {
          "type": "p",
          "html": "<code>Struct.new</code> ga <code>keyword_init: true</code> berilsa, maydonlarni nom bilan uzatish mumkin: <code>Nuqta.new(x: 2, y: 3)</code>. <code>OpenStruct</code> esa har qanday nomni qabul qiladi, lekin sekinroq va xatolarni kechiktirib ko'rsatadi — ishlab chiqarish kodida ehtiyotkorlik bilan ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "Struct bilan yaratilgan obyekt atributini o'zgartirish mumkinmi?",
          "options": [
            "Yo'q, faqat o'qish mumkin",
            "Ha, setter metodi orqali",
            "Faqat freeze bilan",
            "Faqat initialize ichida"
          ],
          "answer": 1,
          "explain": "Struct o'zgaruvchan: a.x = 5 kabi yozuv setter metodini chaqiradi."
        },
        {
          "q": "Data obyektini o'zgartirilgan nusxasini qaysi metod beradi?",
          "options": [
            "merge",
            "update",
            "with",
            "clone!"
          ],
          "answer": 2,
          "explain": "Data#with berilgan maydonlarni almashtirgan yangi obyekt qaytaradi, asl obyekt o'zgarmaydi."
        },
        {
          "q": "Struct.new(:x, :y).new(1, 2).members qanday natija beradi?",
          "options": [
            "[:x, :y]",
            "{x: 1, y: 2}",
            "[1, 2]",
            "\"x, y\""
          ],
          "answer": 0,
          "explain": "members maydon nomlarini symbol massivi sifatida qaytaradi."
        }
      ]
    },
    {
      "id": 21,
      "title": "OOP chuqur: private, class metodlar, to_s",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da inkapsulyatsiya uch qadamda quriladi: holatni instans o'zgaruvchilarida saqlash, unga faqat metodlar orqali kirish va ichki yordamchi metodlarni <code>private</code> qilish. <code>private</code> metodni faqat obyekt ichidan, aniq qabul qiluvchisiz chaqirish mumkin. <code>protected</code> esa bir xil klass oilasidagi obyektlarga ruxsat beradi."
        },
        {
          "type": "code",
          "title": "hisob.rb",
          "code": "class Hisob\n  def initialize(balans)\n    @balans = balans\n  end\n\n  def to_s = \"Hisob(#{@balans} so'm)\"\n\n  def qoshish(x)\n    @balans += tekshir(x)\n    self\n  end\n\n  private\n\n  def tekshir(x)\n    raise ArgumentError, \"Musbat bo'lishi kerak\" if x <= 0\n    x\n  end\nend\n\nh = Hisob.new(1000)\nh.qoshish(500).qoshish(250)\nputs h",
          "output": "Hisob(1750 so'm)"
        },
        {
          "type": "table",
          "head": [
            "Ko'rinish",
            "Qayerdan chaqiriladi"
          ],
          "rows": [
            [
              "<code>public</code>",
              "Har joydan, obyekt orqali"
            ],
            [
              "<code>private</code>",
              "Faqat o'z ichidan, qabul qiluvchisiz"
            ],
            [
              "<code>protected</code>",
              "O'z klassi yoki vorisi obyektlaridan"
            ],
            [
              "<code>self.metod</code>",
              "Klass metodini belgilaydi"
            ],
            [
              "<code>class &lt;&lt; self</code>",
              "Klass metodlari guruhi"
            ],
            [
              "<code>to_s</code>",
              "<code>puts</code> va interpolatsiya uchun matn ko'rinishi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "klass-metod.rb",
          "code": "class Hisob\n  @soni = 0\n\n  class << self\n    attr_reader :soni\n\n    def yarat(balans)\n      @soni += 1\n      new(balans)\n    end\n  end\n\n  def initialize(balans) = @balans = balans\n  def balans = @balans\nend\n\na = Hisob.yarat(100)\nb = Hisob.yarat(200)\nputs Hisob.soni\nputs a.balans + b.balans",
          "output": "2\n300"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "self bilan private chaqirish",
          "html": "<code>self.tekshir(x)</code> private metod uchun Ruby'da xato beradi (setter metodlar bundan mustasno). Shuning uchun ichki chaqiruvlarda shunchaki <code>tekshir(x)</code> yoziladi. <code>send</code> esa ko'rinishni chetlab o'tadi — testlarda foydali, ishlab chiqarishda ehtiyotkorlik talab qiladi."
        },
        {
          "type": "p",
          "html": "Klass metodini <code>def self.nom</code> bilan ham yozish mumkin. Klass instans o'zgaruvchilari (<code>@soni</code>) obyektlarnikidan alohida yashaydi; ularni meros oluvchi klasslar avtomatik ko'rmaydi. <code>to_s</code> ni odam o'qiydigan qisqa matn, <code>inspect</code> ni esa dasturchi uchun batafsil ko'rinish qilib yozing."
        }
      ],
      "quiz": [
        {
          "q": "private metodni qanday chaqirish mumkin?",
          "options": [
            "obyekt.metod orqali",
            "Klass nomi orqali",
            "self.metod orqali",
            "Faqat o'z ichidan qabul qiluvchisiz"
          ],
          "answer": 3,
          "explain": "private metod faqat shu obyektning boshqa metodlari ichidan, aniq qabul qiluvchisiz chaqiriladi."
        },
        {
          "q": "def self.yarat yozuvi qanday metod yaratadi?",
          "options": [
            "Instans metod",
            "Klass metod",
            "Private metod",
            "Modul metodi"
          ],
          "answer": 1,
          "explain": "self klassning o'zini bildiradi, shuning uchun metod klassga tegishli bo'ladi."
        },
        {
          "q": "puts obyekt chaqirganda qaysi metod ishlatiladi?",
          "options": [
            "inspect",
            "to_h",
            "to_s",
            "call"
          ],
          "answer": 2,
          "explain": "puts obyektni matnga aylantirish uchun to_s metodini chaqiradi."
        }
      ]
    },
    {
      "id": 22,
      "title": "Meros: super, prepend va metod qidiruvi",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Meros ota klassning xatti-harakatini qayta ishlatishga yordam beradi, lekin chuqur ierarxiya kodni mo'rt qiladi. <code>super</code> ota klassdagi bir xil nomli metodni chaqiradi. Argumentsiz <code>super</code> joriy argumentlarni uzatadi, <code>super()</code> esa bo'sh ro'yxat bilan chaqiradi — bu farqni bilish muhim."
        },
        {
          "type": "code",
          "title": "meros.rb",
          "code": "class Hayvon\n  def ovoz = \"...\"\n  def nom = \"Hayvon\"\nend\n\nclass Mushuk < Hayvon\n  def ovoz = \"#{super} miyov\"\n  def nom = \"Mushuk\"\nend\n\nm = Mushuk.new\nputs m.ovoz\nputs m.nom\nputs Mushuk.superclass\nputs Mushuk.ancestors.first(2).inspect",
          "output": "... miyov\nMushuk\nHayvon\n[Mushuk, Hayvon]"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Xatti-harakati"
          ],
          "rows": [
            [
              "<code>super</code>",
              "Barcha joriy argumentlarni uzatadi"
            ],
            [
              "<code>super()</code>",
              "Hech qanday argument uzatmaydi"
            ],
            [
              "<code>super(x)</code>",
              "Faqat <code>x</code> ni uzatadi"
            ],
            [
              "<code>include</code>",
              "Modul klassdan keyin turadi"
            ],
            [
              "<code>prepend</code>",
              "Modul klassdan oldin turadi"
            ],
            [
              "<code>ancestors</code>",
              "Metod qidiruv zanjirini ko'rsatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "prepend.rb",
          "code": "module Salom\n  def salom = \"moduldan salom\"\nend\n\nclass Inson\n  def salom = \"klassdan salom\"\nend\n\nclass Inson\n  prepend Salom\nend\n\nputs Inson.new.salom\nputs Inson.ancestors.first(3).inspect",
          "output": "moduldan salom\n[Salom, Inson, Object]"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Metod qidiruvi tartibi",
          "html": "Ruby avval obyektning singleton klassiga, keyin <code>prepend</code> qilingan modullarga, so'ng klassning o'ziga, <code>include</code> qilingan modullarga va nihoyat ota klasslarga qaraydi. <code>ancestors</code> shu tartibni ko'rsatadi. Bir xil metod bir necha joyda bo'lsa, birinchi topilgani ishlaydi."
        },
        {
          "type": "p",
          "html": "Merosni faqat \"umumiy kod\" uchun emas, \"bir xil turdagi\" munosabat uchun ishlating. Mushuk — hayvon, shuning uchun meros mantiqiy. Kompozitsiya ko'proq mos keladigan holatlarda obyektni boshqasiga joylang. Ruby bitta klassdan meros oladi, lekin cheksiz modul mixin qo'shish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Argumentsiz super nimani uzatadi?",
          "options": [
            "Joriy metod argumentlarini",
            "Hech narsa",
            "Faqat birinchi argumentni",
            "nil"
          ],
          "answer": 0,
          "explain": "Yalang'och super chaqiruvchi metodning barcha argumentlarini ota metodga uzatadi; super() bo'sh uzatadi."
        },
        {
          "q": "prepend qilingan modul metod qidiruvida qayerda turadi?",
          "options": [
            "Klassdan keyin",
            "Faqat ota klassdan keyin",
            "Klassdan oldin",
            "Eng oxirida"
          ],
          "answer": 2,
          "explain": "prepend modulni klassdan oldin qo'yadi, shuning uchun modul metodi ustuvor bo'ladi."
        },
        {
          "q": "Mushuk.ancestors birinchi element sifatida nimani ko'rsatadi?",
          "options": [
            "Object",
            "Hayvon",
            "Kernel",
            "Mushuk"
          ],
          "answer": 3,
          "explain": "ancestors obyektning o'zidan boshlanadi, shuning uchun birinchi element Mushuk bo'ladi."
        }
      ]
    },
    {
      "id": 23,
      "title": "Modullar: namespace, extend va hooks",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Modul ikki vazifani bajaradi: nomlar maydoni (namespace) va mixin. <code>Matematika::PI</code> kabi yozuv konfliktlarni oldini oladi. <code>include</code> modul metodlarini instans metodlari qiladi, <code>extend</code> esa obyektning o'ziga (singleton klassga) qo'shadi. <code>module_function</code> metodni ham modul metodi, ham private instans metodi qiladi."
        },
        {
          "type": "code",
          "title": "namespace.rb",
          "code": "module Matematika\n  PI = 3.14159\n\n  def self.kvadrat(x) = x * x\n  def self.aylana(r) = (2 * PI * r).round(2)\nend\n\nputs Matematika::PI\nputs Matematika.kvadrat(5)\nputs Matematika.aylana(2)",
          "output": "3.14159\n25\n12.57"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>module</code>",
              "Namespace va mixin uchun konteyner"
            ],
            [
              "<code>include</code>",
              "Metodlarni instans metodlari qiladi"
            ],
            [
              "<code>extend</code>",
              "Metodlarni obyekt yoki klass metodlari qiladi"
            ],
            [
              "<code>module_function</code>",
              "Modul metodi va private instans metodi yaratadi"
            ],
            [
              "<code>self.included(base)</code>",
              "Include paytida ishga tushadigan hook"
            ],
            [
              "<code>::</code>",
              "Ichki konstanta yoki modulga murojaat"
            ]
          ]
        },
        {
          "type": "code",
          "title": "hook.rb",
          "code": "module Sanaladigan\n  def self.included(base)\n    puts \"#{base} modulni qabul qildi\"\n  end\n\n  def sanash = \"men sanayman\"\nend\n\nclass Quti\n  include Sanaladigan\nend\n\nputs Quti.new.sanash\n\nism = \"Aziza\"\nism.extend(Sanaladigan)\nputs ism.sanash",
          "output": "Quti modulni qabul qildi\nmen sanayman\nmen sanayman"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "extend bilan obyektni kengaytirish",
          "html": "<code>ism.extend(Sanaladigan)</code> modul metodini faqat shu bitta matn obyektiga qo'shadi. Bu Ruby'ning singleton klass mexanizmi. Klassga <code>extend</code> qilsangiz, metodlar klass metodlari bo'ladi. Modul metodlarini <code>def self.nom</code> bilan yozish ham xuddi shu natijani beradi."
        },
        {
          "type": "p",
          "html": "Katta loyihalarda modullar bilan gorizontal bo'lish yaxshi ishlaydi: <code>Comparable</code>, <code>Enumerable</code>, <code>JSON::Ext::Generator</code> kabi standart misollar. Hook ichida <code>base.extend(ClassMethods)</code> qilish klass metodlarini ham qo'shishning keng tarqalgan usuli. Hook'larni suiiste'mol qilish o'rganish qiyin sehr yaratadi."
        }
      ],
      "quiz": [
        {
          "q": "Matematika modulidagi PI konstantasiga qanday murojaat qilinadi?",
          "options": [
            "Matematika.PI",
            "Matematika::PI",
            "Matematika->PI",
            "Matematika[PI]"
          ],
          "answer": 1,
          "explain": "Konstanta va ichki modullarga :: operatori orqali murojaat qilinadi."
        },
        {
          "q": "extend modul metodlarini nimaga qo'shadi?",
          "options": [
            "Klassning barcha instanslariga",
            "Global scope'ga",
            "Faqat ota klassga",
            "Obyektning singleton klassiga"
          ],
          "answer": 3,
          "explain": "extend qabul qiluvchining singleton klassiga metod qo'shadi; include esa instans metodlarini beradi."
        },
        {
          "q": "module_function nimani yaratadi?",
          "options": [
            "Modul metodi va private instans metodi",
            "Faqat klass metod",
            "Faqat private metod",
            "Yangi modul"
          ],
          "answer": 0,
          "explain": "module_function metodni modulda chaqiriladigan qiladi va include qilganda private instans metodi sifatida beradi."
        }
      ]
    },
    {
      "id": 24,
      "title": "Metaprogramming 1: send va define_method",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Metaprogramming — dastur o'zini o'zi tekshirishi yoki o'zgartirishi. Ruby'da bu ko'pincha metodlarni nom bo'yicha chaqirish va dinamik yaratish bilan boshlanadi. <code>send</code> istalgan metodni, jumladan private'ni chaqiradi; <code>public_send</code> faqat ochiq metodlarga ruxsat beradi."
        },
        {
          "type": "code",
          "title": "send.rb",
          "code": "class Kalkulyator\n  def qosh(a, b) = a + b\n\n  private\n\n  def maxfiy = \"maxfiy\"\nend\n\nk = Kalkulyator.new\nputs k.send(:qosh, 5, 3)\nputs k.send(:maxfiy)\nputs k.public_send(:qosh, 1, 2)\nputs k.respond_to?(:maxfiy)\nputs k.respond_to?(:maxfiy, true)",
          "output": "8\nmaxfiy\n3\nfalse\ntrue"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>send(:nom, ...)</code>",
              "Ko'rinishni chetlab, metodni chaqiradi"
            ],
            [
              "<code>public_send</code>",
              "Faqat public metodni chaqiradi"
            ],
            [
              "<code>respond_to?</code>",
              "Metod mavjudligini tekshiradi"
            ],
            [
              "<code>method(:nom)</code>",
              "Metod obyektini qaytaradi"
            ],
            [
              "<code>define_method</code>",
              "Klass ichida metodni dinamik yaratadi"
            ],
            [
              "<code>instance_methods</code>",
              "Mavjud metodlar ro'yxati"
            ]
          ]
        },
        {
          "type": "code",
          "title": "define_method.rb",
          "code": "class Hisoblagich\n  %i[qosh ayir].each do |amal|\n    define_method(amal) do |a, b|\n      puts \"#{amal}: #{a} va #{b}\"\n      amal == :qosh ? a + b : a - b\n    end\n  end\nend\n\nh = Hisoblagich.new\nputs h.qosh(4, 2)\nputs h.ayir(4, 2)",
          "output": "qosh: 4 va 2\n6\nayir: 4 va 2\n2"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Foydalanuvchi kiritishini send qilmang",
          "html": "<code>send(params[:amal])</code> kabi kod foydalanuvchiga istalgan metodni chaqirish imkonini beradi — bu xavfli. Ruxsat etilgan nomlar ro'yxatini tuzing yoki <code>public_send</code> bilan ochiq metodlar doirasida qoling. Dinamik metodlar qulay, lekin kodni qidirishni qiyinlashtiradi."
        },
        {
          "type": "p",
          "html": "<code>define_method</code> blokni qabul qiladi va blok yaratilgan muhitni eslab qoladi. Shu sababli tsikl ichida yaratilgan metodlar tsikl o'zgaruvchisini to'g'ri ushlaydi. <code>method(:nom).call</code> yoki <code>method(:nom).arity</code> metod haqida ma'lumot olishning xavfsiz yo'li."
        }
      ],
      "quiz": [
        {
          "q": "send va public_send orasidagi farq nima?",
          "options": [
            "send faqat sonlar bilan ishlaydi",
            "public_send argument qabul qilmaydi",
            "public_send private metodni chaqirmaydi",
            "Ikkalasi bir xil"
          ],
          "answer": 2,
          "explain": "send ko'rinishni chetlab o'tadi, public_send esa faqat public metodlarni chaqiradi."
        },
        {
          "q": "respond_to?(:maxfiy, true) ikkinchi argumenti nimani bildiradi?",
          "options": [
            "Private metodlarni ham hisobga olish",
            "Metodni chaqirish",
            "Argumentlar soni",
            "Natijani qaytarish"
          ],
          "answer": 0,
          "explain": "true qiymati private metodlarni ham tekshirishga qo'shadi; sukut bo'yicha faqat public hisoblanadi."
        },
        {
          "q": "define_method qanday obyekt qabul qiladi?",
          "options": [
            "Faqat matn",
            "Blok yoki Proc",
            "Faqat symbol",
            "Faqat massiv"
          ],
          "answer": 1,
          "explain": "define_method metod tanasini blok yoki Proc orqali oladi va uni dinamik metodga aylantiradi."
        }
      ]
    },
    {
      "id": 25,
      "title": "Metaprogramming 2: method_missing va hooks",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>method_missing</code> — mavjud bo'lmagan metod chaqirilganda ishga tushadigan maxsus metod. U orqali dinamik API yasash mumkin, masalan <code>get_port</code> kabi so'rovlarni avtomatik qayta ishlash. Lekin har bir sehrli metod <code>respond_to_missing?</code> bilan ham qo'llab-quvvatlanishi kerak."
        },
        {
          "type": "code",
          "title": "method_missing.rb",
          "code": "class Konfig\n  def method_missing(nom, *args)\n    if nom.to_s.start_with?(\"get_\")\n      \"qiymat: #{nom.to_s.sub('get_', '')}\"\n    else\n      super\n    end\n  end\n\n  def respond_to_missing?(nom, include_private = false)\n    nom.to_s.start_with?(\"get_\") || super\n  end\nend\n\nk = Konfig.new\nputs k.get_port\nputs k.respond_to?(:get_host)\nputs k.respond_to?(:yoq)",
          "output": "qiymat: port\ntrue\nfalse"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>method_missing</code>",
              "Topilmagan metod chaqiruvini ushlaydi"
            ],
            [
              "<code>respond_to_missing?</code>",
              "Dinamik metodlarni respond_to? ga qo'shadi"
            ],
            [
              "<code>const_get</code>",
              "Nom bo'yicha konstantani oladi"
            ],
            [
              "<code>const_defined?</code>",
              "Konstanta borligini tekshiradi"
            ],
            [
              "<code>class_eval</code>",
              "Klass kontekstida kod bajaradi"
            ],
            [
              "<code>instance_variable_get</code>",
              "Instans o'zgaruvchisini o'qiydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "const_get.rb",
          "code": "module Sozlamalar\n  LIMIT = 10\nend\n\nputs Sozlamalar.const_get(:LIMIT)\n\nclass Dinamik\nend\n\nDinamik.class_eval do\n  def salom = \"dinamik salom\"\nend\n\nputs Dinamik.new.salom",
          "output": "10\ndinamik salom"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Sehrning narxi",
          "html": "<code>method_missing</code> xatolarni kechiktirishi va debug qilishni qiyinlashtirishi mumkin. Noma'lum metodni albatta <code>super</code> ga uzating, aks holda <code>NoMethodError</code> yo'qoladi. Dinamik API uchun avval <code>define_method</code> bilan aniq metodlar yaratishni o'ylang — ular tezroq va ko'rinadigan."
        },
        {
          "type": "p",
          "html": "<code>class_eval</code> ga berilgan blok klass kontekstida bajariladi; <code>instance_eval</code> esa obyekt kontekstida. <code>const_get</code> nomni dynamic ravishda oladi, lekin foydalanuvchi kiritgan nomni to'g'ridan-to'g'ri uzatmang. Metaprogramming — kuchli vosita, lekin jamoa o'qiy oladigan kod yozish ustuvor."
        }
      ],
      "quiz": [
        {
          "q": "method_missing ichida noma'lum metodni super ga uzatmasangiz nima bo'ladi?",
          "options": [
            "Dastur tezlashadi",
            "NoMethodError yo'qoladi",
            "Metod avtomatik yaratiladi",
            "Ruby ogohlantirish beradi"
          ],
          "answer": 1,
          "explain": "super chaqirilmasa, Ruby'ning standart NoMethodError xatosi ko'rsatilmaydi va nosozlikni topish qiyinlashadi."
        },
        {
          "q": "respond_to_missing? nima uchun kerak?",
          "options": [
            "Metodni chaqirish uchun",
            "Xatoni yashirish uchun",
            "respond_to? dinamik metodlarni ko'rishi uchun",
            "Konstanta yaratish uchun"
          ],
          "answer": 2,
          "explain": "respond_to_missing? respond_to? so'roviga dinamik metodlarni ham qo'shib, obyekt haqidagi ma'lumotni to'g'ri qiladi."
        },
        {
          "q": "Sozlamalar.const_get(:LIMIT) qanday natija beradi?",
          "options": [
            "Symbol :LIMIT",
            ":LIMIT nomli yangi konstanta",
            "nil",
            "LIMIT konstantasining qiymati"
          ],
          "answer": 3,
          "explain": "const_get nom bo'yicha mavjud konstantani topib, uning qiymatini qaytaradi."
        }
      ]
    },
    {
      "id": 26,
      "title": "Xatolar chuqur: custom error, retry, ensure",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da xato — obyekt. <code>raise</code> bilan xato ko'tariladi, <code>rescue</code> bilan ushlanadi, <code>ensure</code> esa har qanday holatda bajariladi. Standart xatolar yetarli bo'lmaganda <code>StandardError</code> dan meros oluvchi o'z xato klassini yasang. Bu chaqiruvchiga xatoni turi bo'yicha ajratish imkonini beradi."
        },
        {
          "type": "code",
          "title": "custom-error.rb",
          "code": "class YetarliEmas < StandardError; end\n\ndef yech(balans, summa)\n  raise YetarliEmas, \"balans yetarli emas\" if summa > balans\n  balans - summa\nend\n\nbegin\n  puts yech(100, 40)\n  puts yech(100, 150)\nrescue YetarliEmas => e\n  puts \"Xato: #{e.message}\"\nensure\n  puts \"Amal yakunlandi\"\nend",
          "output": "60\nXato: balans yetarli emas\nAmal yakunlandi"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>raise</code>",
              "Xato ko'taradi"
            ],
            [
              "<code>rescue</code>",
              "Mos xatoni ushlaydi"
            ],
            [
              "<code>ensure</code>",
              "Xato bo'lsa ham bajariladi"
            ],
            [
              "<code>retry</code>",
              "Begin blokini qaytadan bajaradi"
            ],
            [
              "<code>e.message</code>",
              "Xato matni"
            ],
            [
              "<code>e.backtrace</code>",
              "Chaqiruvlar izi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "retry.rb",
          "code": "urinishlar = 0\n\nbegin\n  urinishlar += 1\n  raise \"vaqtincha xato\" if urinishlar < 3\n  puts \"Muvaffaqiyat: #{urinishlar}-urinish\"\nrescue => e\n  puts \"Qayta: #{e.message}\"\n  retry if urinishlar < 3\nend",
          "output": "Qayta: vaqtincha xato\nQayta: vaqtincha xato\nMuvaffaqiyat: 3-urinish"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Exception emas, StandardError",
          "html": "Yalang'och <code>rescue</code> <code>StandardError</code> va uning vorislarini ushlaydi — bu odatda kerakli xatti-harakat. <code>rescue Exception</code> esa <code>Interrupt</code> va <code>SystemExit</code> kabi tizim signallarini ham yutib yuboradi, shuning uchun undan qoching. <code>retry</code> ni cheksiz qilmang: urinishlar sonini cheklang."
        },
        {
          "type": "p",
          "html": "Xatoni qayta ko'tarish uchun <code>raise</code> yozish yetarli — u joriy xatoni qayta tashlaydi. Boshqa xatoga o'rash uchun <code>raise YangiXato, \"izoh\"</code> ishlating va sababni <code>cause</code> orqali saqlang. <code>ensure</code> ichida <code>return</code> ishlatmang: u xatoni jimgina yutishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "rescue ichida argumentsiz raise chaqirilsa nima bo'ladi?",
          "options": [
            "nil qaytaradi",
            "Xatoni butunlay o'chiradi",
            "Joriy xatoni qayta ko'taradi",
            "Har doim yangi RuntimeError yaratadi"
          ],
          "answer": 2,
          "explain": "Argumentsiz raise ushlangan xatoni qayta ko'taradi; shu bilan xato yuqoriga uzatiladi."
        },
        {
          "q": "Custom xato klassi odatda nimadan meros oladi?",
          "options": [
            "Exception",
            "Object",
            "RuntimeError",
            "StandardError"
          ],
          "answer": 3,
          "explain": "StandardError dan meros olish xatoni oddiy rescue bilan ushlash imkonini beradi."
        },
        {
          "q": "retry kalit so'zi nima qiladi?",
          "options": [
            "Begin blokini qaytadan bajaradi",
            "Dasturni to'xtatadi",
            "Xatoni o'chiradi",
            "Yangi metod yaratadi"
          ],
          "answer": 0,
          "explain": "retry rescue ichida begin qismini boshidan qayta ishga tushiradi; shuning uchun urinishlar sonini cheklash kerak."
        }
      ]
    },
    {
      "id": 27,
      "title": "Fayllar va IO: o'qish, yozish, Pathname",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da fayl bilan ishlash uchun <code>File</code> va <code>IO</code> sinflari bor. Kichik fayllar uchun <code>File.read</code> va <code>File.write</code> qulay. Katta fayllarni qatorma-qator o'qish uchun <code>File.foreach</code> ishlating — u butun faylni xotiraga yuklamaydi. Blokli <code>File.open</code> faylni avtomatik yopadi."
        },
        {
          "type": "code",
          "title": "fayl.rb",
          "code": "File.write(\"kunlar.txt\", \"dushanba\\nseshanba\\nchorshanba\\n\")\n\nmatn = File.read(\"kunlar.txt\")\nputs matn.lines.size\n\nFile.foreach(\"kunlar.txt\").with_index(1) do |qator, i|\n  puts \"#{i}. #{qator.chomp}\"\nend\n\nputs File.exist?(\"kunlar.txt\")",
          "output": "3\n1. dushanba\n2. seshanba\n3. chorshanba\ntrue"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>File.read</code>",
              "Butun faylni matn qilib qaytaradi"
            ],
            [
              "<code>File.write</code>",
              "Matnni faylga yozadi (mavjudini almashtiradi)"
            ],
            [
              "<code>File.foreach</code>",
              "Qatorlarni birma-bir beradi"
            ],
            [
              "<code>File.readlines(chomp: true)</code>",
              "Qatorlar massivi, oxirgi belgisisiz"
            ],
            [
              "<code>File.exist?</code>",
              "Fayl borligini tekshiradi"
            ],
            [
              "<code>File.open(..., \"a\")</code>",
              "Fayl oxiriga qo'shadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "pathname.rb",
          "code": "require \"pathname\"\n\np = Pathname.new(\"kunlar.txt\")\nputs p.extname\nputs p.basename\nputs p.read.lines.first.chomp\n\nFile.open(\"qoshimcha.txt\", \"w\") do |f|\n  f.puts \"yangi qator\"\nend\n\nputs File.read(\"qoshimcha.txt\").chomp",
          "output": ".txt\nkunlar.txt\ndushanba\nyangi qator"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Blok faylni yopadi",
          "html": "<code>File.open(\"fayl\", \"w\") { |f| ... }</code> bloki tugagach fayl avtomatik yopiladi, xato bo'lsa ham. Blok ishlatmasangiz <code>f.close</code> ni o'zingiz chaqirishingiz kerak. <code>Pathname</code> yo'l bilan ishlashni o'qishli qiladi: <code>join</code>, <code>dirname</code>, <code>glob</code> kabi metodlar bor."
        },
        {
          "type": "p",
          "html": "Fayl yo'llarini qo'lda birlashtirmang — <code>File.join(\"data\", \"kunlar.txt\")</code> yoki <code>Pathname#join</code> ishlating. Matn kodlashini <code>File.read(\"fayl\", encoding: \"UTF-8\")</code> bilan aniq bering. Ikkilik fayllar uchun <code>\"rb\"</code> rejimi kerak. Vaqtinchalik fayllar uchun <code>Tempfile</code> xavfsizroq."
        }
      ],
      "quiz": [
        {
          "q": "File.read(\"data.txt\") nimani qaytaradi?",
          "options": [
            "Fayl obyekti",
            "Qatorlar massivi",
            "Baytlar soni",
            "Butun fayl matni"
          ],
          "answer": 3,
          "explain": "File.read faylning butun mazmunini bitta String sifatida qaytaradi."
        },
        {
          "q": "Blokli File.open nima uchun afzal?",
          "options": [
            "Faylni avtomatik yopadi",
            "Faylni tezroq o'qiydi",
            "Kodlashni o'zgartiradi",
            "Xatolarni yashiradi"
          ],
          "answer": 0,
          "explain": "Blok tugagach fayl avtomatik yopiladi, shu bilan resurs sizib chiqishi oldini oladi."
        },
        {
          "q": "File.foreach ning afzalligi nimada?",
          "options": [
            "Faylni o'chiradi",
            "Faylni qatorma-qator o'qiydi",
            "Faqat sonlarni o'qiydi",
            "Faylni yozadi"
          ],
          "answer": 1,
          "explain": "foreach katta faylni butunlay xotiraga yuklamasdan, qatorlarni ketma-ket beradi."
        }
      ]
    },
    {
      "id": 28,
      "title": "Idiomatik Ruby va pattern matching",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Idiomatik Ruby — kam kod bilan niyatni aniq ifodalash. Ko'p qiymatni bir yo'la olish, splat, xavfsiz navigatsiya (<code>&amp;.</code>) va <code>then</code> kabi vositalar kodni qisqartiradi. Ruby 3'dagi pattern matching esa ma'lumot tuzilmasini tekshirish va bo'laklashni bir amalda bajaradi."
        },
        {
          "type": "code",
          "title": "idiomalar.rb",
          "code": "ism, yosh = [\"Aziza\", 15]\nbirinchi, *qolgan = [1, 2, 3, 4]\n\nputs ism\nputs yosh\nputs qolgan.inspect\n\nprofil = { ism: \"Bek\", manzil: nil }\nputs profil.dig(:manzil, :shahar).inspect\nputs profil[:manzil]&.upcase.inspect\nputs [1, 2, 3].sum { |n| n * 2 }",
          "output": "Aziza\n15\n[2, 3, 4]\nnil\nnil\n12"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>a, b = [1, 2]</code>",
              "Destrukturizatsiya"
            ],
            [
              "<code>a, *qolgan</code>",
              "Qolgan elementlarni massivga yig'adi"
            ],
            [
              "<code>obj&amp;.metod</code>",
              "<code>nil</code> bo'lsa metodni chaqirmaydi"
            ],
            [
              "<code>qiymat.then { }</code>",
              "Qiymatni blokga uzatadi"
            ],
            [
              "<code>def nom = ifoda</code>",
              "Bir qatorli metod"
            ],
            [
              "<code>case ... in</code>",
              "Pattern matching"
            ]
          ]
        },
        {
          "type": "code",
          "title": "pattern.rb",
          "code": "def baho(ball)\n  case ball\n  in 90.. then \"A\"\n  in 80...90 then \"B\"\n  in Integer if ball.negative? then \"noto'g'ri\"\n  else \"C\"\n  end\nend\n\nputs baho(95)\nputs baho(84)\nputs baho(-1)\nputs baho(50)",
          "output": "A\nB\nnoto'g'ri\nC"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "&. faqat nil uchun",
          "html": "<code>&amp;.</code> faqat <code>nil</code> ni chetlab o'tadi; <code>false</code> yoki boshqa qiymat ustida metod chaqiriladi. U zanjirning oxirigacha xavfsiz qiladi, lekin xatoni yashirishi mumkin. <code>fetch</code> bilan birga ishlatilganda kutilmagan <code>nil</code> ni erta ushlash yaxshiroq."
        },
        {
          "type": "p",
          "html": "<code>then</code> (eski nomi <code>yield_self</code>) qiymatni blokga beradi va blok natijasini qaytaradi. Bu uzun metod zanjirlarini bosqichlarga bo'lishga yordam beradi. Pattern matching esa <code>case/when</code> dan kuchliroq: u nafaqat tenglikni, balki tuzilma, tur va oraliqni bir vaqtda tekshiradi."
        }
      ],
      "quiz": [
        {
          "q": "obj&.ism yozuvi qachon nil qaytaradi?",
          "options": [
            "obj nil bo'lsa",
            "obj false bo'lsa",
            "ism nil bo'lsa",
            "Har doim"
          ],
          "answer": 0,
          "explain": "Xavfsiz navigatsiya faqat qabul qiluvchi nil bo'lganda metodni chaqirmay nil qaytaradi."
        },
        {
          "q": "birinchi, *qolgan = [1, 2, 3] da qolgan nimaga teng?",
          "options": [
            "1",
            "[2, 3]",
            "[1, 2, 3]",
            "3"
          ],
          "answer": 1,
          "explain": "Splat qolgan barcha elementlarni massivga yig'adi; birinchi alohida olinadi."
        },
        {
          "q": "case ifodasida pattern matching qaysi kalit so'z bilan yoziladi?",
          "options": [
            "when",
            "match",
            "in",
            "with"
          ],
          "answer": 2,
          "explain": "Ruby 3 pattern matching'da case ichida when o'rniga in ishlatiladi."
        }
      ]
    },
    {
      "id": 29,
      "title": "Pattern matching: massiv, hash va find",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Pattern matching tuzilmani bo'laklaydi. Hash pattern kalitlar bo'yicha, array pattern tartib bo'yicha moslikni tekshiradi. <code>*</code> qolgan elementlarni yutadi, <code>**</code> esa qolgan kalitlarni. Guard (<code>if</code>) qo'shimcha shart beradi. Bu uslub JSON javoblarini va konfiguratsiyalarni tahlil qilishda juda qulay."
        },
        {
          "type": "code",
          "title": "tuzilma.rb",
          "code": "holat = { turi: \"kitob\", nomi: \"Ruby\", narx: 120_000 }\n\ncase holat\nin { turi: \"kitob\", nomi:, narx: 0..100_000 }\n  puts \"Arzon kitob: #{nomi}\"\nin { turi: \"kitob\", nomi: }\n  puts \"Kitob: #{nomi}\"\nelse\n  puts \"Boshqa\"\nend\n\ncase [1, 2, 3, 4]\nin [birinchi, *orta, oxirgi]\n  puts \"#{birinchi}-#{oxirgi}, o'rta: #{orta.inspect}\"\nend",
          "output": "Kitob: Ruby\n1-4, o'rta: [2, 3]"
        },
        {
          "type": "table",
          "head": [
            "Pattern",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>{ kalit: }</code>",
              "Kalitni tekshiradi va qiymatni o'zgaruvchiga oladi"
            ],
            [
              "<code>[a, b]</code>",
              "Aynan ikki elementli massiv"
            ],
            [
              "<code>[a, *qolgan]</code>",
              "Birinchi element va qolganlari"
            ],
            [
              "<code>{ **qolgan }</code>",
              "Qolgan kalitlarni yig'adi"
            ],
            [
              "<code>Integer =&gt; n</code>",
              "Turi mos kelsa <code>n</code> ga bog'laydi"
            ],
            [
              "<code>in ... if shart</code>",
              "Guard qo'shadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "find-pattern.rb",
          "code": "yozuvlar = [\n  { tur: :kirim, summa: 100 },\n  { tur: :chiqim, summa: 40 },\n  { tur: :chiqim, summa: 60 }\n]\n\nchiqimlar = yozuvlar.filter_map do |yozuv|\n  case yozuv\n  in { tur: :chiqim, summa: }\n    summa\n  else\n    nil\n  end\nend\n\nputs chiqimlar.inspect\nputs chiqimlar.sum",
          "output": "[40, 60]\n100"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "=> va in farqi",
          "html": "Rightward assignment <code>qiymat =&gt; pattern</code> moslik bo'lmasa <code>NoMatchingPatternError</code> ko'taradi. <code>case ... in</code> esa mos variantni tanlaydi, hech biri mos kelmasa <code>NoMatchingPatternError</code> beradi (else bo'lmasa). Ma'lumot ishonchli bo'lsa rightward assignment qisqa, lekin himoyalangan bo'lishi kerak."
        },
        {
          "type": "p",
          "html": "Hash pattern qo'shimcha kalitlarga e'tibor bermaydi — bu qulay, chunki javobga yangi maydon qo'shilsa kod buzilmaydi. <code>**nil</code> esa qo'shimcha kalit bo'lmasligini talab qiladi. Array patternda <code>*</code> dan keyin boshqa element qo'yib bo'lmaydi; moslashuvchanlik kerak bo'lsa <code>find</code> pattern yoki qo'lda tekshiruvdan foydalaning."
        }
      ],
      "quiz": [
        {
          "q": "in { nomi: } pattern nimani qiladi?",
          "options": [
            "Yangi hash yaratadi",
            "nomi ni o'chiradi",
            "nomi kaliti qiymatini o'zgaruvchiga bog'laydi",
            "Faqat true qaytaradi"
          ],
          "answer": 2,
          "explain": "Qisqa hash pattern mavjud nomi kalitining qiymatini shu nomli mahalliy o'zgaruvchiga beradi."
        },
        {
          "q": "[a, *qolgan] pattern qanday massivga mos keladi?",
          "options": [
            "Faqat bo'sh massivga",
            "Har qanday hash'ga",
            "Faqat ikki elementli massivga",
            "Kamida bitta elementli massivga"
          ],
          "answer": 3,
          "explain": "Birinchi element a ga, qolganlari massiv sifatida qolgan ga bog'lanadi; kamida bitta element kerak."
        },
        {
          "q": "Rightward assignment moslik topilmasa nima bo'ladi?",
          "options": [
            "nil qaytaradi",
            "NoMatchingPatternError ko'taradi",
            "false qaytaradi",
            "Patternni o'tkazib yuboradi"
          ],
          "answer": 1,
          "explain": "=> bilan yozilgan pattern majburiy: moslik bo'lmasa NoMatchingPatternError xatosi ko'tariladi."
        }
      ]
    },
    {
      "id": 30,
      "title": "RegExp asoslari: qidirish va almashtirish",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Regulyar ifoda matndagi naqshni topadi. Ruby'da u <code>/.../</code> orasida yoziladi. <code>match?</code> mavjudligini tez tekshiradi, <code>match</code> esa topilgan qism va guruhlar haqida <code>MatchData</code> qaytaradi. <code>scan</code> barcha mosliklarni yig'adi, <code>gsub</code> ularni almashtiradi."
        },
        {
          "type": "code",
          "title": "qidirish.rb",
          "code": "matn = \"Aziza 85 ball, Bek 72 ball\"\n\nputs matn.match?(/[0-9]+/)\nm = matn.match(/([A-Za-z]+) ([0-9]+)/)\nputs m[1]\nputs m[2]\nputs matn.scan(/[0-9]+/).inspect\nputs matn.gsub(/[0-9]+/, \"N\")",
          "output": "true\nAziza\n85\n[\"85\", \"72\"]\nAziza N ball, Bek N ball"
        },
        {
          "type": "table",
          "head": [
            "Belgi yoki metod",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>[0-9]</code>",
              "Bitta raqam"
            ],
            [
              "<code>+</code>, <code>*</code>, <code>?</code>",
              "Bir yoki ko'p, nol yoki ko'p, ixtiyoriy"
            ],
            [
              "<code>\\A</code>, <code>\\z</code>",
              "Matn boshi va oxiri"
            ],
            [
              "<code>^</code>, <code>$</code>",
              "Qator boshi va oxiri"
            ],
            [
              "<code>(...)</code>",
              "Guruh, <code>m[1]</code> bilan olinadi"
            ],
            [
              "<code>match?</code>",
              "Boolean natija, MatchData yaratmaydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "anchor.rb",
          "code": "parol = \"ruby2026\"\n\nputs !!(parol =~ /\\A[a-z]+[0-9]{4}\\z/)\nputs parol.match?(/\\A[A-Z]/)\nputs \"a1 b22 c333\".scan(/[a-z][0-9]+/).inspect\nputs \"2026-10-23\".split(\"-\").map(&:to_i).inspect",
          "output": "true\nfalse\n[\"a1\", \"b22\", \"c333\"]\n[2026, 10, 23]"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Greedy va lazy",
          "html": "<code>.*</code> imkon qadar ko'p matnni yutadi (greedy). <code>.*?</code> esa eng qisqa moslikni oladi (lazy). Masalan, <code>&lt;b&gt;bir&lt;/b&gt;&lt;b&gt;ikki&lt;/b&gt;</code> da <code>&lt;b&gt;.*&lt;\\/b&gt;</code> hammasini, <code>&lt;b&gt;.*?&lt;\\/b&gt;</code> faqat birinchi bo'lakni topadi. Naqshni imkon qadar aniq yozing."
        },
        {
          "type": "p",
          "html": "<code>=~</code> moslik indeksini yoki <code>nil</code> qaytaradi; <code>match?</code> esa faqat true/false. Tekshiruv uchun <code>match?</code> tezroq va aniqroq. Katta matnlarda murakkab naqshlar sekinlashishi mumkin — avval oddiy <code>include?</code> bilan tekshirish ko'pincha yetarli. Regex'ni izoh bilan hujjatlashtiring."
        }
      ],
      "quiz": [
        {
          "q": "match? metodi nimani qaytaradi?",
          "options": [
            "MatchData",
            "Guruhlar massivi",
            "Moslik indeksi",
            "true yoki false"
          ],
          "answer": 3,
          "explain": "match? faqat mavjudlikni tekshirib boolean qaytaradi, MatchData obyekti yaratmaydi."
        },
        {
          "q": "scan metodi nima qiladi?",
          "options": [
            "Barcha mosliklarni massivga yig'adi",
            "Birinchi moslikni almashtiradi",
            "Matnni qatorlarga bo'ladi",
            "Faqat true qaytaradi"
          ],
          "answer": 0,
          "explain": "scan naqshga mos barcha bo'laklarni topib, ularni massiv sifatida qaytaradi."
        },
        {
          "q": "\\A va \\z qaysi chegaralarni bildiradi?",
          "options": [
            "Qator boshi va oxiri",
            "So'z boshi va oxiri",
            "Matn boshi va oxiri",
            "Faqat raqamlar"
          ],
          "answer": 2,
          "explain": "\\A butun matnning boshi, \\z butun matnning oxiri; ^ va $ esa qator chegaralari."
        }
      ]
    },
    {
      "id": 31,
      "title": "RegExp amaliyoti: validatsiya va guruhlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Regex amaliyotda email, telefon va sana kabi formatlarni tekshirishda ishlatiladi. Muhim qoida: naqshni imkon qadar tor yozing va natijani <code>match?</code> bilan tekshiring. Nomlangan guruhlar <code>(?&lt;nom&gt;...)</code> murakkab matndan ma'lumotni o'qishli ajratib oladi."
        },
        {
          "type": "code",
          "title": "email.rb",
          "code": "EMAIL = /\\A[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,}\\z/i\n\n[\"aziza@example.com\", \"bek@mail\", \"dilnoza@noldan.uz\"].each do |manzil|\n  puts \"#{manzil}: #{EMAIL.match?(manzil)}\"\nend",
          "output": "aziza@example.com: true\nbek@mail: false\ndilnoza@noldan.uz: true"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>(?&lt;yil&gt;[0-9]{4})</code>",
              "Nomlangan guruh"
            ],
            [
              "<code>m[:yil]</code>",
              "Nomlangan guruh qiymati"
            ],
            [
              "<code>/.../i</code>",
              "Katta-kichik harfga befarq"
            ],
            [
              "<code>Regexp.escape(matn)</code>",
              "Matndagi maxsus belgilarni himoyalaydi"
            ],
            [
              "<code>gsub(/.../) { |m| ... }</code>",
              "Har bir moslikni blok natijasi bilan almashtiradi"
            ],
            [
              "<code>source</code>",
              "Naqshning matn ko'rinishi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "guruhlar.rb",
          "code": "sana = \"2026-10-23\"\nm = sana.match(/(?<yil>[0-9]{4})-(?<oy>[0-9]{2})-(?<kun>[0-9]{2})/)\n\nputs m[:yil]\nputs m[:oy]\nputs m[:kun]\n\nmatn = \"narx: 120000 so'm\"\nputs matn.gsub(/[0-9]+/) { |son| \"[#{son}]\" }",
          "output": "2026\n10\n23\nnarx: [120000] so'm"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Regex hamma narsani hal qilmaydi",
          "html": "Email'ning to'liq standartini bitta regex bilan tekshirish deyarli imkonsiz. Amalda oddiy naqsh yetarli, keyin tasdiqlash xati yuboriladi. Telefon raqamlarida mamlakat kodi va ajratgichlarni alohida normallashtiring. Murakkab naqshlar <code>ReDoS</code> (juda sekin ishlash) xavfini tug'diradi."
        },
        {
          "type": "p",
          "html": "<code>Regexp.escape(\"a.b\")</code> nuqtani oddiy belgi sifatida himoyalaydi — foydalanuvchi kiritgan matndan naqsh yasaganda majburiy. <code>m.pre_match</code> va <code>m.post_match</code> moslik atrofidagi matnni beradi. Nomlangan guruhlar kodni o'qishli qiladi va <code>m[1]</code> kabi mo'rt indekslardan qutqaradi."
        }
      ],
      "quiz": [
        {
          "q": "Nomlangan guruh qiymatini qanday olamiz?",
          "options": [
            "m[:yil]",
            "m.named(:yil)",
            "m->yil",
            "m.group_yil"
          ],
          "answer": 0,
          "explain": "MatchData obyekti nomlangan guruhga symbol kalit bilan murojaat qilishni qo'llab-quvvatlaydi."
        },
        {
          "q": "Regex oxiridagi i bayrog'i nimani bildiradi?",
          "options": [
            "Ko'p qatorli",
            "Katta-kichik harfga befarq",
            "Unicode",
            "Izoh"
          ],
          "answer": 1,
          "explain": "i (ignore case) bayrog'i harflarning katta-kichikligini hisobga olmaydi."
        },
        {
          "q": "Regexp.escape nima uchun ishlatiladi?",
          "options": [
            "Naqshni tezlashtirish",
            "Matnni kichik harfga o'tkazish",
            "Guruhlarni o'chirish",
            "Matndagi maxsus belgilarni oddiy belgiga aylantirish"
          ],
          "answer": 3,
          "explain": "Regexp.escape foydalanuvchi matnidagi ., *, + kabi belgilarni regex uchun xavfsiz qilib himoyalaydi."
        }
      ]
    },
    {
      "id": 32,
      "title": "Sana va vaqt bilan ishlash",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby'da <code>Date</code> faqat kalendarga, <code>Time</code> esa soat va vaqt mintaqasiga javob beradi. Sana bilan ishlash uchun <code>require \"date\"</code> kerak. Sanalar orasidagi farq kunlarda hisoblanadi, <code>&gt;&gt;</code> operatori oylarni qo'shadi, <code>strftime</code> esa formatni boshqaradi."
        },
        {
          "type": "code",
          "title": "sana.rb",
          "code": "require \"date\"\n\ntugilgan = Date.new(2010, 5, 14)\nbugun = Date.new(2026, 10, 23)\n\nputs (bugun - tugilgan).to_i\nputs tugilgan.strftime(\"%d.%m.%Y\")\nputs bugun.wday\nputs bugun.friday?\nputs (tugilgan >> 1).strftime(\"%Y-%m-%d\")",
          "output": "6006\n14.05.2010\n5\ntrue\n2010-06-14"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>Date.new(2026, 10, 23)</code>",
              "Aniq sana"
            ],
            [
              "<code>date + 14</code>",
              "14 kun keyin"
            ],
            [
              "<code>date &gt;&gt; 1</code>",
              "Bir oy keyin"
            ],
            [
              "<code>date.wday</code>",
              "Hafta kuni: 0 — yakshanba"
            ],
            [
              "<code>strftime(\"%d.%m.%Y\")</code>",
              "Formatlangan matn"
            ],
            [
              "<code>Date.parse</code>",
              "Matndan sana ajratadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "vaqt.rb",
          "code": "vaqt = Time.new(2026, 10, 23, 14, 30, 0)\n\nputs vaqt.strftime(\"%H:%M\")\nputs (vaqt + 90 * 60).strftime(\"%H:%M\")\nputs vaqt.year\nputs vaqt.monday?\nputs Time.new(2026, 1, 31) + (24 * 60 * 60) == Time.new(2026, 2, 1)",
          "output": "14:30\n16:00\n2026\nfalse\ntrue"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Vaqt mintaqasi tuzoqlari",
          "html": "<code>Time.now</code> mahalliy mintaqada ishlaydi, shuning uchun uni saqlash va solishtirishda <code>UTC</code> yoki aniq offset ishlating. Yozgi vaqtga o'tish kunlarda <code>+ 24 * 60 * 60</code> har doim bir kalendar kun degani emas. Server va foydalanuvchi vaqti farqini unutmang."
        },
        {
          "type": "p",
          "html": "Kunlar farqini hisoblashda <code>(b - a).to_i</code> ishlatsangiz, kasr qismi tashlanadi. Soat va daqiqa ham muhim bo'lsa <code>Time</code> obyektlariga o'ting yoki farqni <code>Rational</code> ko'rinishida saqlang. <code>Time#iso8601</code> standart almashinuv formati bo'lib, API'larda keng qo'llanadi."
        }
      ],
      "quiz": [
        {
          "q": "Date obyektlarini ayirish natijasi nimani beradi?",
          "options": [
            "Yangi Date obyekti",
            "Ikki sana orasidagi kunlar soni",
            "String",
            "true yoki false"
          ],
          "answer": 1,
          "explain": "Date ayirmasi kunlardagi Rational qiymatni beradi; to_i bilan butun kunlar olinadi."
        },
        {
          "q": "date >> 1 operatori nima qiladi?",
          "options": [
            "Bir kun qo'shadi",
            "Bir yil qo'shadi",
            "Bir oy qo'shadi",
            "Sanani nusxalaydi"
          ],
          "answer": 2,
          "explain": ">> oylarda siljitadi; 31-yanvardan keyin fevralning oxirgi kuniga moslashadi."
        },
        {
          "q": "Time obyektiga 90 daqiqa qo'shish uchun nima yoziladi?",
          "options": [
            "vaqt + 90 * 60",
            "vaqt + 90.minutes",
            "vaqt + 90",
            "vaqt.add(90)"
          ],
          "answer": 0,
          "explain": "Time soniyalarda hisoblaydi, shuning uchun 90 daqiqa = 90 * 60 soniya."
        }
      ]
    },
    {
      "id": 33,
      "title": "JSON: API ma'lumotlarini o'qish va yozish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "JSON — matn ko'rinishidagi ma'lumot almashish formati. Ruby'ning <code>json</code> kutubxonasi hash va massivlarni JSON matniga aylantiradi va teskarisini qiladi. API bilan ishlashda bu ko'nikma majburiy: javobni <code>JSON.parse</code> qilib, kerakli maydonlarni olasiz."
        },
        {
          "type": "code",
          "title": "generate.rb",
          "code": "require \"json\"\n\ntalaba = { \"ism\" => \"Aziza\", \"ball\" => 85, \"fanlar\" => [\"Ruby\", \"SQL\"] }\njson = JSON.generate(talaba)\nputs json\n\nqayta = JSON.parse(json)\nputs qayta[\"ism\"]\nputs qayta[\"fanlar\"].first\nputs qayta.class",
          "output": "{\"ism\":\"Aziza\",\"ball\":85,\"fanlar\":[\"Ruby\",\"SQL\"]}\nAziza\nRuby\nHash"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>JSON.generate(obj)</code>",
              "Ruby obyektini JSON matniga aylantiradi"
            ],
            [
              "<code>JSON.parse(matn)</code>",
              "JSON matnini hash yoki massivga aylantiradi"
            ],
            [
              "<code>JSON.pretty_generate</code>",
              "O'qishli, ko'p qatorli JSON"
            ],
            [
              "<code>symbolize_names: true</code>",
              "Kalitlarni symbol qiladi"
            ],
            [
              "<code>to_json</code>",
              "Obyektni JSON ga aylantiradi"
            ],
            [
              "<code>JSON::ParserError</code>",
              "Buzilgan JSON xatosi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "parse.rb",
          "code": "require \"json\"\n\nmatn = '{\"ism\":\"Bek\",\"ball\":72}'\nobyekt = JSON.parse(matn, symbolize_names: true)\n\nputs obyekt[:ism]\nputs obyekt.fetch(:ball)\nputs JSON.pretty_generate({ ism: \"Bek\", ball: 72 })",
          "output": "Bek\n72\n{\n  \"ism\": \"Bek\",\n  \"ball\": 72\n}"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ishonchsiz JSON",
          "html": "<code>JSON.parse</code> buzilgan matnda <code>JSON::ParserError</code> ko'taradi — uni <code>rescue</code> bilan ushlang. Tashqi manbadan kelgan juda katta JSON'ni cheklovsiz yuklamang. Ruby obyektini qaytarib yozishda (<code>JSON.load</code>) xavfsizlik cheklovlarini tekshiring; ishonchsiz ma'lumot uchun faqat <code>parse</code> ishlating."
        },
        {
          "type": "p",
          "html": "JSON kalitlari har doim matn bo'ladi, shuning uchun <code>symbolize_names</code> yoqilmasa <code>obyekt[:ism]</code> emas, <code>obyekt[\"ism\"]</code> yoziladi. Hash'dagi symbol kalitlar JSON'ga o'tganda matnga aylanadi. Raqamlar butun yoki kasr bo'lib qaytadi, sanalar esa odatda ISO 8601 matn ko'rinishida keladi."
        }
      ],
      "quiz": [
        {
          "q": "JSON.parse natijasi odatda qanday Ruby obyekti bo'ladi?",
          "options": [
            "String",
            "Symbol",
            "Struct",
            "Hash yoki Array"
          ],
          "answer": 3,
          "explain": "JSON obyektlari Hash, massivlar esa Array bo'lib qaytadi."
        },
        {
          "q": "symbolize_names: true nima qiladi?",
          "options": [
            "Qiymatlarni symbol qiladi",
            "Kalitlarni symbol qiladi",
            "JSON'ni chiroyli formatlaydi",
            "Raqamlarni matnga aylantiradi"
          ],
          "answer": 1,
          "explain": "Bu parametr hash kalitlarini symbolga aylantiradi, shunda obyekt[:ism] yozish mumkin."
        },
        {
          "q": "JSON.pretty_generate ning vazifasi nima?",
          "options": [
            "JSON'ni siqadi",
            "Faqat massivlarni qabul qiladi",
            "O'qishli, chekinishli JSON yasaydi",
            "Xatoni yashiradi"
          ],
          "answer": 2,
          "explain": "pretty_generate qatorlarga bo'lingan va chekinish qo'shilgan JSON matnini qaytaradi."
        }
      ]
    },
    {
      "id": 34,
      "title": "CSV: jadval ma'lumotlarini o'qish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "CSV — vergul bilan ajratilgan jadval. Ruby'ning <code>csv</code> kutubxonasi sarlavhalar, qo'shtirnoq ichidagi vergullar va tur o'zgartirishlarni boshqaradi. <code>headers: true</code> bilan har bir qatorni hash kabi o'qish mumkin, <code>converters</code> esa sonlarni avtomatik aylantiradi."
        },
        {
          "type": "code",
          "title": "oqi.rb",
          "code": "require \"csv\"\n\nmatn = \"ism,ball\\nAziza,85\\nBek,72\\n\"\ncsv = CSV.parse(matn, headers: true)\n\ncsv.each do |qator|\n  puts \"#{qator['ism']}: #{qator['ball']}\"\nend\n\nputs csv.headers.inspect\nputs csv.size",
          "output": "Aziza: 85\nBek: 72\n[\"ism\", \"ball\"]\n2"
        },
        {
          "type": "table",
          "head": [
            "Parametr",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>headers: true</code>",
              "Birinchi qatorni sarlavha qiladi"
            ],
            [
              "<code>converters: :numeric</code>",
              "Sonlarni Integer yoki Float qiladi"
            ],
            [
              "<code>col_sep: \";\"</code>",
              "Boshqa ajratgichni belgilaydi"
            ],
            [
              "<code>skip_blanks: true</code>",
              "Bo'sh qatorlarni o'tkazib yuboradi"
            ],
            [
              "<code>CSV.foreach</code>",
              "Katta faylni qatorma-qator o'qiydi"
            ],
            [
              "<code>CSV.generate</code>",
              "CSV matnini yasaydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "yoz.rb",
          "code": "require \"csv\"\n\nqatorlar = [\n  [\"ism\", \"ball\"],\n  [\"Dilnoza\", 91],\n  [\"Jasur\", 64]\n]\n\ncsv = CSV.generate do |chiqish|\n  qatorlar.each { |qator| chiqish << qator }\nend\n\nputs csv\n\nyangi = CSV.parse(csv, headers: true, converters: :numeric)\nputs yangi[0][\"ball\"] + 1",
          "output": "ism,ball\nDilnoza,91\nJasur,64\n92"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Qo'shtirnoq va kodlash",
          "html": "CSV ichida vergul bo'lsa, maydon qo'shtirnoqqa olinadi: <code>\"Toshkent, Chilonzor\"</code>. Kutubxona buni o'zi to'g'ri yozadi, shuning uchun qatorlarni qo'lda birlashtirmang. Excel fayllari ba'zan BOM bilan keladi; <code>\"bom|utf-8\"</code> kodlashini ishlating. Katta fayllar uchun <code>CSV.foreach</code> xotirani tejaydi."
        },
        {
          "type": "p",
          "html": "<code>converter</code> lar maydonlarni avtomatik o'zgartiradi, lekin telefon raqami kabi yetakchi nolli matnlarni ham songa aylantirib qo'yishi mumkin. Bunday ustunlar uchun konvertatsiyani o'chiring yoki maydonni matn sifatida qabul qiling. Har bir qatorning maydonlari sonini tekshirish ma'lumot sifatini oshiradi."
        }
      ],
      "quiz": [
        {
          "q": "CSV.parse da headers: true nimani beradi?",
          "options": [
            "Birinchi qatorni sarlavha qiladi",
            "Barcha qatorlarni o'chiradi",
            "Faqat sonlarni o'qiydi",
            "Faylni yozadi"
          ],
          "answer": 0,
          "explain": "headers: true birinchi qatorni ustun nomlari sifatida ishlatadi va qatorlarni hash kabi o'qish imkonini beradi."
        },
        {
          "q": "converters: :numeric nima qiladi?",
          "options": [
            "Barcha maydonlarni matnga aylantiradi",
            "Vergulni nuqtaga almashtiradi",
            "Son ko'rinishidagi maydonlarni son tipiga o'giradi",
            "Sarlavhalarni o'chiradi"
          ],
          "answer": 2,
          "explain": "numeric converter raqamga o'xshash maydonlarni Integer yoki Float qilib qaytaradi."
        },
        {
          "q": "CSV.generate nima qaytaradi?",
          "options": [
            "Fayl obyekti",
            "Massivlar massivi",
            "Hash",
            "CSV formatidagi matn"
          ],
          "answer": 3,
          "explain": "CSV.generate blok orqali qatorlarni yig'ib, CSV formatidagi String qaytaradi."
        }
      ]
    },
    {
      "id": 35,
      "title": "HTTP client: Net::HTTP bilan API",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby standart kutubxonasida <code>Net::HTTP</code> bor. U bilan GET, POST va boshqa so'rovlarni yuborish mumkin. So'rov obyektini yasash, sarlavhalarni qo'shish va javob kodini tekshirish asosiy qadamlar. Timeout'larni albatta belgilang, aks holda dastur server javobini cheksiz kutishi mumkin."
        },
        {
          "type": "code",
          "title": "sorov.rb",
          "code": "require \"net/http\"\nrequire \"uri\"\n\nuri = URI(\"https://api.example.com/holat\")\nso = Net::HTTP.new(uri.host, uri.port)\nso.use_ssl = true\nso.open_timeout = 3\nso.read_timeout = 5\n\nsorov = Net::HTTP::Get.new(uri)\nsorov[\"Accept\"] = \"application/json\"\n\nputs sorov.method\nputs sorov.path\nputs sorov[\"Accept\"]\nputs so.use_ssl?",
          "output": "GET\n/holat\napplication/json\ntrue"
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>URI</code>",
              "Manzilni host, port va yo'lga ajratadi"
            ],
            [
              "<code>Net::HTTP::Get</code>",
              "GET so'rov obyekti"
            ],
            [
              "<code>use_ssl = true</code>",
              "HTTPS ulanishini yoqadi"
            ],
            [
              "<code>open_timeout</code>",
              "Ulanish uchun kutish vaqti"
            ],
            [
              "<code>read_timeout</code>",
              "Javob uchun kutish vaqti"
            ],
            [
              "<code>response.code</code>",
              "HTTP status kodi (matn)"
            ]
          ]
        },
        {
          "type": "code",
          "title": "javob.rb",
          "code": "require \"json\"\n\njavob = '{\"holat\":\"ok\",\"foydalanuvchi\":{\"ism\":\"Aziza\"}}'\nmalumot = JSON.parse(javob)\n\nputs malumot[\"holat\"]\nputs malumot.dig(\"foydalanuvchi\", \"ism\")\n\nbegin\n  raise \"server javob bermadi\" if malumot[\"holat\"] != \"ok\"\n  puts \"Tayyor\"\nrescue => e\n  puts \"Xato: #{e.message}\"\nend",
          "output": "ok\nAziza\nTayyor"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Haqiqiy so'rov qanday yoziladi",
          "html": "Javobni olish uchun <code>javob = Net::HTTP.start(uri.host, uri.port, use_ssl: true) { |http| http.request(sorov) }</code> yoziladi. So'ng <code>javob.code</code> ni tekshirib, <code>javob.body</code> ni <code>JSON.parse</code> qiling. <code>Net::OpenTimeout</code>, <code>Net::ReadTimeout</code> va <code>SocketError</code> kabi xatolarni alohida ushlang."
        },
        {
          "type": "p",
          "html": "2xx — muvaffaqiyat, 3xx — yo'naltirish, 4xx — mijoz xatosi, 5xx — server xatosi. 429 javobida kutish va qayta urinish kerak. API kalitlarini kodga yozmang — muhit o'zgaruvchilaridan oling. User-Agent sarlavhasini qo'shish va javob hajmini cheklash yaxshi amaliyot."
        }
      ],
      "quiz": [
        {
          "q": "HTTPS ulanishi uchun Net::HTTP da nima yoqiladi?",
          "options": [
            "https = true",
            "use_ssl = true",
            "secure = 1",
            "ssl_mode = on"
          ],
          "answer": 1,
          "explain": "Net::HTTP obyektida use_ssl ni true qilish HTTPS orqali ulanishni ta'minlaydi."
        },
        {
          "q": "Javobning HTTP status kodi qaysi metodda bo'ladi?",
          "options": [
            "response.status_code",
            "response.result",
            "response.http",
            "response.code"
          ],
          "answer": 3,
          "explain": "Net::HTTPResponse#code status kodini matn ko'rinishida qaytaradi, masalan \"200\"."
        },
        {
          "q": "read_timeout nima uchun kerak?",
          "options": [
            "Server javobini cheksiz kutmaslik uchun",
            "Faylni tezroq yozish uchun",
            "JSON'ni formatlash uchun",
            "SSL'ni o'chirish uchun"
          ],
          "answer": 0,
          "explain": "read_timeout javob kelishi uchun maksimal kutish vaqtini belgilaydi va osilib qolishning oldini oladi."
        }
      ]
    },
    {
      "id": 36,
      "title": "Gemlar va Bundler chuqur",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Gem — Ruby kutubxonasi. <code>Gemfile</code> loyihaning bog'liqliklarini sanaydi, Bundler esa ularni o'rnatadi va versiyalarni qulflaydi. <code>bundle exec</code> buyruqni loyihadagi aniq versiyalar bilan ishga tushiradi. <code>Gemfile.lock</code> ni versiya nazoratiga qo'shish jamoa uchun bir xil muhitni kafolatlaydi."
        },
        {
          "type": "code",
          "title": "Gemfile",
          "code": "source \"https://rubygems.org\"\n\nruby \"3.3.0\"\n\ngem \"sinatra\", \"~> 4.0\"\ngem \"rackup\"\ngem \"json\"\n\ngroup :development, :test do\n  gem \"rspec\", \"~> 3.13\"\n  gem \"rubocop\", require: false\nend",
          "output": "$ bundle install\nBundle complete! 5 Gemfile dependencies, 23 gems now installed."
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>\"~&gt; 4.0\"</code>",
              "4.0 dan katta yoki teng, 5.0 dan kichik"
            ],
            [
              "<code>\"~&gt; 4.0.1\"</code>",
              "4.0.1 dan katta yoki teng, 4.1 dan kichik"
            ],
            [
              "<code>\"= 2.1.0\"</code>",
              "Aynan shu versiya"
            ],
            [
              "<code>require: false</code>",
              "Gemni avtomatik yuklamaydi"
            ],
            [
              "<code>group :test</code>",
              "Faqat test muhitida o'rnatiladi"
            ],
            [
              "<code>bundle exec</code>",
              "Loyiha versiyalari bilan ishga tushiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "versiya.rb",
          "code": "require \"rubygems\"\n\nv1 = Gem::Version.new(\"4.0.0\")\nv2 = Gem::Version.new(\"4.1.2\")\n\nputs v1 < v2\nputs Gem::Version.new(\"3.13.0\").segments.inspect\nputs Gem::Version.correct?(\"1.2.3\")\nputs Gem::Version.new(\"2.0.0\").prerelease?\nputs Gem::Version.new(\"4.0.5\").release.to_s",
          "output": "true\n[3, 13, 0]\ntrue\nfalse\n4.0.5"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "bundle exec nima uchun?",
          "html": "Tizimda bir nechta gem versiyasi bo'lishi mumkin. <code>bundle exec rspec</code> loyihadagi <code>Gemfile.lock</code> versiyalaridan foydalanishni kafolatlaydi. Muammo chiqsa <code>bundle check</code>, <code>bundle list</code> va <code>bundle outdated</code> yordam beradi. <code>bundle update</code> ni ehtiyotkorlik bilan qiling: u versiyalarni ko'taradi."
        },
        {
          "type": "p",
          "html": "Yangi gem qo'shganda <code>bundle add nom</code> qulay, so'ng <code>Gemfile</code> ni o'qing va keraksiz bog'liqliklarni olib tashlang. Ishlab chiqarishda <code>bundle install --deployment</code> yoki <code>BUNDLE_FROZEN=true</code> ishlatiladi. Gem yozish uchun <code>bundle gem nom</code> skelet yaratadi, <code>gemspec</code> esa metama'lumotni saqlaydi."
        }
      ],
      "quiz": [
        {
          "q": "\"~> 4.0\" cheklovi qaysi versiyalarni qabul qiladi?",
          "options": [
            "Faqat 4.0.0",
            "4.0 dan 4.1 gacha",
            "4.0 dan 5.0 gacha (5.0 kirmaydi)",
            "Barcha 4.x va 5.x"
          ],
          "answer": 2,
          "explain": "~> 4.0 eng kichik 4.0, eng katta 5.0 dan kichik versiyalarni qabul qiladi."
        },
        {
          "q": "Nega bundle exec ishlatiladi?",
          "options": [
            "Loyihadagi aniq gem versiyalari bilan buyruq ishga tushirish uchun",
            "Gemlarni o'rnatish uchun",
            "Ruby'ni yangilash uchun",
            "Fayllarni siqish uchun"
          ],
          "answer": 0,
          "explain": "bundle exec buyruqni Gemfile.lock da qulflangan versiyalar muhitida bajaradi."
        },
        {
          "q": "Gemfile.lock fayli nima uchun kerak?",
          "options": [
            "Gemlarni reklama qilish",
            "Barcha o'rnatilgan versiyalarni qulflash",
            "Faqat testlarni saqlash",
            "Ruby kodini kompilyatsiya qilish"
          ],
          "answer": 1,
          "explain": "Gemfile.lock aniq o'rnatilgan versiyalarni yozib, jamoada bir xil muhitni ta'minlaydi."
        }
      ]
    },
    {
      "id": 37,
      "title": "Minitest chuqur: assertion va setup",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Minitest — Ruby standart kutubxonasiga yaqin, yengil test freymvorki. Test klassi <code>Minitest::Test</code> dan meros oladi, <code>test_</code> bilan boshlanadigan metodlar avtomatik ishga tushadi. <code>setup</code> har bir testdan oldin, <code>teardown</code> esa keyin bajariladi."
        },
        {
          "type": "code",
          "title": "kalkulyator_test.rb",
          "code": "require \"minitest/autorun\"\n\nclass Kalkulyator\n  def qosh(a, b) = a + b\n\n  def bol(a, b)\n    raise ZeroDivisionError, \"nolga bo'lish\" if b.zero?\n    a / b\n  end\nend\n\nclass KalkulyatorTest < Minitest::Test\n  def setup\n    @k = Kalkulyator.new\n  end\n\n  def test_qoshish\n    assert_equal 5, @k.qosh(2, 3)\n  end\n\n  def test_bolish_xatosi\n    assert_raises(ZeroDivisionError) { @k.bol(1, 0) }\n  end\nend",
          "output": "Run options: --seed 12345\n\n# Running:\n\n..\n\nFinished in 0.001123s, 1780.9439 runs/s, 1780.9439 assertions/s.\n\n2 runs, 2 assertions, 0 failures, 0 errors, 0 skips"
        },
        {
          "type": "table",
          "head": [
            "Assertion",
            "Tekshiruvi"
          ],
          "rows": [
            [
              "<code>assert_equal</code>",
              "Ikki qiymat tengligi"
            ],
            [
              "<code>refute</code>",
              "Shart yolg'onligi"
            ],
            [
              "<code>assert_nil</code>, <code>refute_nil</code>",
              "<code>nil</code> bilan solishtirish"
            ],
            [
              "<code>assert_includes</code>",
              "Kolleksiyada element borligi"
            ],
            [
              "<code>assert_raises</code>",
              "Blok xato ko'tarishi"
            ],
            [
              "<code>assert_match</code>",
              "Regex mosligi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "xato_test.rb",
          "code": "require \"minitest/autorun\"\n\nclass HisobTest < Minitest::Test\n  def test_yigindi\n    assert_equal 6, 2 + 3\n  end\nend",
          "output": "Run options: --seed 12345\n\n# Running:\n\nF\n\nFinished in 0.001042s, 959.6929 runs/s, 959.6929 assertions/s.\n\n  1) Failure:\nHisobTest#test_yigindi [test.rb:5]:\nExpected: 6\n  Actual: 5\n\n1 runs, 1 assertions, 1 failures, 0 errors, 0 skips"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Seed va vaqt haqida",
          "html": "Minitest testlarni tasodifiy tartibda ishga tushiradi; <code>--seed</code> shu tartibni takrorlash uchun kerak. Yuqoridagi vaqt va tezlik har ishga tushirishda o'zgaradi — muhimi oxirgi qatordagi <code>0 failures</code>. Test nomlarini aniq yozing: xato bo'lsa, hisobotda aynan shu nom ko'rinadi."
        },
        {
          "type": "p",
          "html": "Har bir test bitta xatti-harakatni tekshirsin. <code>setup</code> da og'ir resurs yaratmang; uni faqat kerakli umumiy tayyorgarlik uchun ishlating. <code>assert_raises</code> blokni qabul qiladi va kutilgan xato sinfini tekshiradi. Tashqi dunyoga bog'liq testlarni stub yoki fake obyekt bilan ajratish kerak."
        }
      ],
      "quiz": [
        {
          "q": "Minitest setup metodi qachon bajariladi?",
          "options": [
            "Faqat birinchi testdan oldin",
            "Har bir testdan oldin",
            "Barcha testlardan keyin",
            "Faqat xato bo'lganda"
          ],
          "answer": 1,
          "explain": "setup har bir test metodi oldidan alohida ishlaydi, shunda testlar bir-biriga bog'liq bo'lmaydi."
        },
        {
          "q": "Blok xato ko'tarishini qaysi assertion tekshiradi?",
          "options": [
            "assert_nil",
            "assert_includes",
            "assert_raises",
            "assert_equal"
          ],
          "answer": 2,
          "explain": "assert_raises kutilgan xato sinfini oladi va blok bajarilganda shu xato chiqishini tekshiradi."
        },
        {
          "q": "Minitest hisobotida 1 failures nimani bildiradi?",
          "options": [
            "Test ishlamadi",
            "Testlar o'tkazib yuborildi",
            "Bitta fayl topilmadi",
            "Bitta test kutilgan natijani bermadi"
          ],
          "answer": 3,
          "explain": "failures — assertion muvaffaqiyatsiz bo'lgan testlar soni; errors esa kutilmagan xatolar soni."
        }
      ]
    },
    {
      "id": 38,
      "title": "RSpec asoslari: describe, let va expect",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "RSpec — xatti-harakatni tavsiflovchi test freymvorki. <code>describe</code> va <code>context</code> testlarni guruhlaydi, <code>it</code> bitta stsenariyni yozadi, <code>expect(...).to eq(...)</code> esa kutishni ifodalaydi. <code>let</code> kerak bo'lganda bir marta hisoblanadigan yordamchi qiymat beradi."
        },
        {
          "type": "code",
          "title": "hisob_spec.rb",
          "code": "class Hisob\n  attr_reader :balans\n\n  def initialize(balans) = @balans = balans\n  def qosh(x) = @balans += x\nend\n\nRSpec.describe Hisob do\n  let(:hisob) { Hisob.new(100) }\n\n  it \"summani qo'shadi\" do\n    hisob.qosh(50)\n    expect(hisob.balans).to eq(150)\n  end\n\n  it \"yangi obyekt yaratadi\" do\n    expect(hisob.balans).to eq(100)\n  end\nend",
          "output": "..\n\nFinished in 0.002 seconds (files took 0.081 seconds to load)\n2 examples, 0 failures"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>describe</code>",
              "Klass yoki mavzu bo'yicha guruh"
            ],
            [
              "<code>it</code>",
              "Bitta stsenariy"
            ],
            [
              "<code>let(:nom)</code>",
              "Lazy yordamchi qiymat"
            ],
            [
              "<code>before</code>",
              "Har bir example oldidan tayyorgarlik"
            ],
            [
              "<code>eq</code>",
              "Qiymat tengligi"
            ],
            [
              "<code>raise_error</code>",
              "Xato kutilishi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "matcher_spec.rb",
          "code": "RSpec.describe \"matcherlar\" do\n  it \"qiymatlarni tekshiradi\" do\n    expect([1, 2, 3]).to include(2)\n    expect(\"ruby\").to start_with(\"ru\")\n    expect { raise \"xato\" }.to raise_error(RuntimeError)\n    expect(5).to be > 3\n  end\nend",
          "output": ".\n\nFinished in 0.001 seconds (files took 0.079 seconds to load)\n1 example, 0 failures"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "let qachon hisoblanadi?",
          "html": "<code>let</code> birinchi murojaatda hisoblanadi va shu example ichida keshlanadi. <code>let!</code> esa <code>before</code> kabi darhol yaratiladi. Har bir example yangi obyekt oladi, shuning uchun testlar orasida holat saqlanib qolmaydi. Bu izolyatsiyani ta'minlaydi."
        },
        {
          "type": "p",
          "html": "RSpec fayllari odatda <code>spec/</code> papkasida va <code>_spec.rb</code> bilan tugaydi. Ishga tushirish: <code>bundle exec rspec</code>. <code>--format documentation</code> har bir stsenariy nomini chiqaradi. Minitest'da assertion, RSpec'da matcher ishlatiladi; ikkalasi ham bir xil maqsadga xizmat qiladi."
        }
      ],
      "quiz": [
        {
          "q": "RSpec let metodi qachon hisoblanadi?",
          "options": [
            "Fayl yuklanganda",
            "Har bir expect da qayta",
            "Birinchi murojaatda",
            "Test tugagach"
          ],
          "answer": 2,
          "explain": "let lazy: qiymat birinchi marta ishlatilganda hisoblanadi va shu example davomida keshlanadi."
        },
        {
          "q": "RSpec da kutish qanday yoziladi?",
          "options": [
            "assert_equal 5, x",
            "x.should 5",
            "check x == 5",
            "expect(x).to eq(5)"
          ],
          "answer": 3,
          "explain": "RSpec ning asosiy sintaksisi expect(qiymat).to matcher; eq tenglikni tekshiradi."
        },
        {
          "q": "RSpec test fayllari odatda qanday nomlanadi?",
          "options": [
            "_spec.rb",
            ".test.rb",
            ".rspec_test",
            "spec_ruby.rb"
          ],
          "answer": 0,
          "explain": "Konvensiyaga ko'ra fayl nomi _spec.rb bilan tugaydi, masalan hisob_spec.rb."
        }
      ]
    },
    {
      "id": 39,
      "title": "Rake: vazifalarni avtomatlashtirish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Rake — Ruby uchun vazifa boshqaruvchisi. <code>Rakefile</code> da nomlangan vazifalar yoziladi va terminalda <code>rake nom</code> bilan chaqiriladi. Vazifalar bog'liqliklarga ega bo'lishi mumkin: <code>task report: :test</code> avval testni bajaradi. Namespace esa vazifalarni guruhlaydi."
        },
        {
          "type": "code",
          "title": "Rakefile",
          "code": "desc \"Testlarni ishga tushirish\"\ntask :test do\n  puts \"Testlar ishga tushdi\"\nend\n\ndesc \"Hisobot yasash\"\ntask report: :test do\n  puts \"Hisobot tayyor\"\nend\n\ntask default: :test",
          "output": "$ rake report\nTestlar ishga tushdi\nHisobot tayyor"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>task :nom</code>",
              "Oddiy vazifa"
            ],
            [
              "<code>task report: :test</code>",
              "Avval <code>test</code> bajariladi"
            ],
            [
              "<code>desc</code>",
              "<code>rake -T</code> uchun tavsif"
            ],
            [
              "<code>namespace :db</code>",
              "Vazifalarni guruhlaydi"
            ],
            [
              "<code>task default: :test</code>",
              "Argument berilmasa ishlaydigan vazifa"
            ],
            [
              "<code>file &quot;chiqish&quot; =&gt; &quot;kirish&quot;</code>",
              "Fayl o'zgargan bo'lsa bajariladi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "namespace.rb",
          "code": "namespace :db do\n  desc \"Bazani tozalash\"\n  task :tozalash do\n    puts \"Baza tozalandi\"\n  end\nend\n\ntask :salom, [:ism] do |t, args|\n  puts \"Salom, #{args[:ism]}\"\nend",
          "output": "$ rake db:tozalash\nBaza tozalandi\n$ rake \"salom[Aziza]\"\nSalom, Aziza"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "rake -T",
          "html": "<code>rake -T</code> barcha <code>desc</code> berilgan vazifalarni ko'rsatadi. Vazifalar bir marta bajariladi: bir nechta vazifa bir xil bog'liqlikni talab qilsa ham, u takrorlanmaydi. Xato bo'lsa rake jarayoni nol bo'lmagan kod bilan tugaydi, bu CI uchun muhim."
        },
        {
          "type": "p",
          "html": "Rake vazifalarini kichik va aniq tuting: <code>db:migrate</code>, <code>test</code>, <code>lint</code>. Rails'da <code>bin/rails</code> ko'p ishlarni bajaradi, lekin Rake hali ham mavjud. Vazifa ichida <code>sh</code> yoki <code>ruby</code> buyrug'ini ishlatish mumkin; murakkab mantiqni alohida klassga chiqarib, vazifani yupqa qobiq qiling."
        }
      ],
      "quiz": [
        {
          "q": "task report: :test yozuvida :test nimani bildiradi?",
          "options": [
            "Vazifa nomi",
            "Namespace",
            "Argument",
            "Bajarilishi kerak bo'lgan oldingi vazifa"
          ],
          "answer": 3,
          "explain": "report vazifasi ishga tushishidan oldin :test vazifasi bajariladi — bu prerequisite."
        },
        {
          "q": "db namespace ichidagi tozalash vazifasi qanday chaqiriladi?",
          "options": [
            "rake db:tozalash",
            "rake db",
            "rake tozalash",
            "rake namespace:db"
          ],
          "answer": 0,
          "explain": "Namespace va vazifa nomi ikki nuqta bilan birlashtiriladi: db:tozalash."
        },
        {
          "q": "rake -T buyrug'i nima qiladi?",
          "options": [
            "Barcha vazifalarni o'chiradi",
            "Tavsiflangan vazifalar ro'yxatini ko'rsatadi",
            "Testlarni ishga tushiradi",
            "Yangi Rakefile yaratadi"
          ],
          "answer": 1,
          "explain": "rake -T desc bilan belgilangan vazifalar va ularning tavsiflarini chiqaradi."
        }
      ]
    },
    {
      "id": 40,
      "title": "CLI: OptionParser bilan argumentlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Konsol ilovasi uchun argumentlarni qo'lda tahlil qilish zerikarli. <code>OptionParser</code> bayroqlar, qiymatlar va yordam matnini avtomatik boshqaradi. <code>parse!</code> tanilgan argumentlarni <code>ARGV</code> dan olib tashlaydi, qolganlari bilan keyin ishlash mumkin."
        },
        {
          "type": "code",
          "title": "salom.rb",
          "code": "require \"optparse\"\n\noptions = { ism: \"Mehmon\", takror: 1 }\n\nparser = OptionParser.new do |opts|\n  opts.banner = \"Foydalanish: ruby salom.rb [options]\"\n  opts.on(\"-i\", \"--ism ISM\", \"Ism\") { |v| options[:ism] = v }\n  opts.on(\"-n\", \"--takror N\", Integer, \"N marta\") { |v| options[:takror] = v }\nend\n\nparser.parse!([\"--ism\", \"Aziza\", \"-n\", \"2\"])\noptions[:takror].times { puts \"Salom, #{options[:ism]}!\" }",
          "output": "Salom, Aziza!\nSalom, Aziza!"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>opts.on(&quot;-v&quot;)</code>",
              "Qisqa bayroq"
            ],
            [
              "<code>opts.on(&quot;--ism ISM&quot;)</code>",
              "Uzun nom va qiymat"
            ],
            [
              "<code>Integer</code>",
              "Qiymatni songa aylantiradi"
            ],
            [
              "<code>Float</code>",
              "Qiymatni kasr songa aylantiradi"
            ],
            [
              "<code>parse!</code>",
              "ARGV ni o'zgartirib, tanilganlarini olib tashlaydi"
            ],
            [
              "<code>--help</code>",
              "Yordam matnini avtomatik chiqaradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "xato.rb",
          "code": "require \"optparse\"\n\nparser = OptionParser.new\nparser.banner = \"Foydalanish: ruby cli.rb [options]\"\nparser.on(\"-v\", \"--verbose\", \"Batafsil\") { puts \"Batafsil\" }\n\nbegin\n  parser.parse!([\"--notogri\"])\nrescue OptionParser::InvalidOption => e\n  puts \"Xato: #{e.message}\"\n  puts parser.banner\n  exit 1\nend",
          "output": "Xato: invalid option: --notogri\nFoydalanish: ruby cli.rb [options]"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Exit kodlari",
          "html": "Muvaffaqiyatli tugagan dastur <code>0</code>, xato bilan tugagani noldan farqli kod qaytarishi kerak. <code>exit 1</code> buni ta'minlaydi. <code>parse!</code> ishlatilsa, tanilmagan argumentlar <code>ARGV</code> da qoladi; <code>parse</code> esa ARGV ni o'zgartirmaydi. Ikkalasini aralashtirmang."
        },
        {
          "type": "p",
          "html": "<code>-n 2</code> va <code>--takror=2</code> — ikkalasi ham ishlaydi. Bayroqlarni qisqa va tushunarli qiling, standart <code>--help</code> ni saqlang. Katta CLI uchun buyruqlarni subcommand'larga bo'ling yoki <code>Thor</code> kabi gemdan foydalaning. Foydalanuvchi kiritgan qiymatlarni har doim tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "OptionParser#parse! ARGV bilan nima qiladi?",
          "options": [
            "Tanilgan argumentlarni olib tashlaydi",
            "O'zgartirmaydi",
            "Barcha argumentlarni o'chiradi",
            "Faqat sonlarni qoldiradi"
          ],
          "answer": 0,
          "explain": "parse! tanilgan bayroq va qiymatlarni ARGV dan olib tashlaydi; parse esa nusxada ishlaydi."
        },
        {
          "q": "opts.on(\"-n\", \"--takror N\", Integer) da Integer nima qiladi?",
          "options": [
            "Bayroqni majburiy qiladi",
            "Qiymatni butun songa aylantiradi",
            "Yordam matnini chiqaradi",
            "Qiymatni o'chiradi"
          ],
          "answer": 1,
          "explain": "Integer konverteri kelgan matn qiymatini butun songa aylantiradi va noto'g'ri qiymatda xato beradi."
        },
        {
          "q": "Xato bilan tugagan CLI qanday exit kod qaytarishi kerak?",
          "options": [
            "0",
            "Har doim 200",
            "1 yoki boshqa noldan farqli",
            "-1"
          ],
          "answer": 2,
          "explain": "Nol muvaffaqiyatni, noldan farqli kod xatoni bildiradi; skriptlar shu kodga qarab qaror qabul qiladi."
        }
      ]
    },
    {
      "id": 41,
      "title": "Sinatra asoslari: route va JSON API",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Sinatra — yengil web freymvork. Bitta faylda route'lar yozib, bir necha daqiqada HTTP API ko'tarish mumkin. Route HTTP metodi va yo'ldan iborat: <code>get \"/salom\"</code>. Yo'ldagi <code>:ism</code> kabi qismlar <code>params</code> orqali o'qiladi."
        },
        {
          "type": "code",
          "title": "app.rb",
          "code": "require \"sinatra\"\n\nget \"/\" do\n  \"Salom, Noldan!\"\nend\n\nget \"/salom/:ism\" do\n  \"Salom, #{params[:ism]}!\"\nend",
          "output": "$ curl -s localhost:4567/salom/Aziza\nSalom, Aziza!"
        },
        {
          "type": "table",
          "head": [
            "Route",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>get &quot;/&quot;</code>",
              "Bosh sahifa"
            ],
            [
              "<code>get &quot;/salom/:ism&quot;</code>",
              "Yo'l parametri"
            ],
            [
              "<code>post &quot;/api&quot;</code>",
              "Ma'lumot qabul qilish"
            ],
            [
              "<code>params[:ism]</code>",
              "Parametr qiymati"
            ],
            [
              "<code>content_type :json</code>",
              "Javob turi"
            ],
            [
              "<code>status 201</code>",
              "HTTP status kodini o'rnatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "api.rb",
          "code": "require \"sinatra\"\nrequire \"json\"\n\nget \"/api/talaba/:id\" do\n  content_type :json\n  { id: params[:id].to_i, ism: \"Aziza\" }.to_json\nend\n\npost \"/api/talaba\" do\n  data = JSON.parse(request.body.read)\n  status 201\n  { qabul_qilindi: data[\"ism\"] }.to_json\nend",
          "output": "$ curl -s localhost:4567/api/talaba/7\n{\"id\":7,\"ism\":\"Aziza\"}\n$ curl -s -X POST -H \"Content-Type: application/json\" -d '{\"ism\":\"Bek\"}' localhost:4567/api/talaba\n{\"qabul_qilindi\":\"Bek\"}"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Serverni ishga tushirish",
          "html": "<code>ruby app.rb</code> sukut bo'yicha 4567-portda ishlaydi. Ishlab chiqarishda <code>rackup</code> yoki <code>puma</code> ishlatiladi. Sinatra klassik uslubda bitta global ilova yaratadi; kattaroq loyihada <code>Sinatra::Base</code> dan meros olib, modulli tuzilma qurish yaxshiroq."
        },
        {
          "type": "p",
          "html": "Sinatra route'ni yuqoridan pastga tekshiradi, shuning uchun aniq yo'llarni umumiyroq yo'llardan oldin yozing. <code>halt 404, \"topilmadi\"</code> bilan javobni darhol tugatish mumkin. Foydalanuvchi kiritgan JSON'ni <code>JSON.parse</code> qilganda xatoni ushlang va 400 status qaytaring."
        }
      ],
      "quiz": [
        {
          "q": "Sinatra'da yo'l parametri qayerdan olinadi?",
          "options": [
            "ARGV dan",
            "ENV dan",
            "params hash'idan",
            "session dan"
          ],
          "answer": 2,
          "explain": "Route'dagi :ism kabi nomlar params[:ism] orqali o'qiladi."
        },
        {
          "q": "content_type :json nima qiladi?",
          "options": [
            "Yangi route yaratadi",
            "So'rovni to'xtatadi",
            "Faylni o'qiydi",
            "Javobni JSON deb belgilaydi"
          ],
          "answer": 3,
          "explain": "content_type javobning Content-Type sarlavhasini application/json qilib o'rnatadi."
        },
        {
          "q": "Sinatra ilovasi sukut bo'yicha qaysi portda ishlaydi?",
          "options": [
            "3000",
            "4567",
            "8080",
            "80"
          ],
          "answer": 1,
          "explain": "Sinatra klassik ilovasi sukut bo'yicha 4567-portda tinglaydi."
        }
      ]
    },
    {
      "id": 42,
      "title": "Sinatra: CRUD, ERB va status kodlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "CRUD — yaratish, o'qish, yangilash va o'chirish. Sinatra'da buni bir nechta route bilan qurish mumkin. Ma'lumotni vaqtincha massivda saqlash o'rganish uchun qulay; keyin uni bazaga almashtirasiz. ERB esa HTML ichiga Ruby kodini qo'shish imkonini beradi."
        },
        {
          "type": "code",
          "title": "crud.rb",
          "code": "require \"sinatra\"\nrequire \"json\"\n\nTALABALAR = [{ id: 1, ism: \"Aziza\" }]\n\nget \"/talabalar\" do\n  content_type :json\n  TALABALAR.to_json\nend\n\npost \"/talabalar\" do\n  data = JSON.parse(request.body.read)\n  yangi = { id: TALABALAR.size + 1, ism: data.fetch(\"ism\") }\n  TALABALAR << yangi\n  status 201\n  yangi.to_json\nend",
          "output": "$ curl -s -X POST -H \"Content-Type: application/json\" -d '{\"ism\":\"Bek\"}' localhost:4567/talabalar\n{\"id\":2,\"ism\":\"Bek\"}\n$ curl -s localhost:4567/talabalar\n[{\"id\":1,\"ism\":\"Aziza\"},{\"id\":2,\"ism\":\"Bek\"}]"
        },
        {
          "type": "table",
          "head": [
            "Amal",
            "HTTP",
            "Status"
          ],
          "rows": [
            [
              "Ro'yxat",
              "<code>GET /talabalar</code>",
              "200"
            ],
            [
              "Bitta yozuv",
              "<code>GET /talabalar/:id</code>",
              "200 yoki 404"
            ],
            [
              "Yaratish",
              "<code>POST /talabalar</code>",
              "201"
            ],
            [
              "Yangilash",
              "<code>PATCH /talabalar/:id</code>",
              "200 yoki 204"
            ],
            [
              "O'chirish",
              "<code>DELETE /talabalar/:id</code>",
              "204"
            ],
            [
              "Xato so'rov",
              "Har qanday",
              "400 yoki 422"
            ]
          ]
        },
        {
          "type": "code",
          "title": "view.rb",
          "code": "require \"sinatra\"\n\nget \"/\" do\n  @ism = \"Aziza\"\n  erb :index\nend\n\n__END__\n@@ index\n<h1>Salom, <%= @ism %>!</h1>",
          "output": "<h1>Salom, Aziza!</h1>"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "ERB teglari",
          "html": "<code>&lt;%= ... %&gt;</code> natijani HTML ga chiqaradi, <code>&lt;% ... %&gt;</code> esa faqat kod bajaradi. Foydalanuvchi kiritgan matnni avtomatik escaping qilish uchun <code>Rack::Utils.escape_html</code> yoki <code>erb</code> bilan <code>escape_html: true</code> ishlating. Xavfsizlik uchun shablonlarda ishonchsiz HTML chiqarmang."
        },
        {
          "type": "p",
          "html": "<code>before</code> filtri har bir so'rov oldidan ishlaydi — autentifikatsiya yoki umumiy sarlavhalar uchun qulay. <code>not_found</code> esa 404 uchun alohida javob beradi. CRUD'ni kattalashtirganda ma'lumotni bazaga ko'chiring va validatsiyani modelga joylang; route'da biznes mantiqini ko'paytirmang."
        }
      ],
      "quiz": [
        {
          "q": "Yangi resurs yaratilganda qaysi HTTP status mos?",
          "options": [
            "200",
            "404",
            "204",
            "201"
          ],
          "answer": 3,
          "explain": "201 Created yangi resurs muvaffaqiyatli yaratilganini bildiradi."
        },
        {
          "q": "ERB da qaysi teg natijani HTML ga chiqaradi?",
          "options": [
            "<%= ... %>",
            "<% ... %>",
            "<%# ... %>",
            "<%== ... %>"
          ],
          "answer": 0,
          "explain": "<%= %> ifoda natijasini chiqaradi; <% %> faqat kod bajaradi."
        },
        {
          "q": "before filtri qachon ishlaydi?",
          "options": [
            "Javobdan keyin",
            "Faqat POST so'rovida",
            "Har bir so'rov oldidan",
            "Faqat xato bo'lganda"
          ],
          "answer": 2,
          "explain": "before har bir so'rovga ishlov berishdan oldin bajariladi va umumiy tayyorgarlik uchun ishlatiladi."
        }
      ]
    },
    {
      "id": 43,
      "title": "Rails kirish: MVC va loyiha tuzilmasi",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Rails — to'liq web freymvork. U MVC (Model-View-Controller) arxitekturasini majburlaydi: model ma'lumot va qoidalar, view ko'rinish, controller so'rovni boshqaradi. Rails'ning shiori — konvensiya konfiguratsiyadan ustun. Fayl nomlari va joylashuvi odatiy bo'lsa, kam kod yozasiz."
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "rails new kutubxona --minimal\ncd kutubxona\nbin/rails generate model Kitob nom:string narx:integer\nbin/rails db:migrate",
          "output": "      create  app/models/kitob.rb\n      invoke  active_record\n      create    db/migrate/20261023120000_create_kitobs.rb\n== 20261023120000 CreateKitobs: migrating =====================\n-- create_table(:kitobs)\n   -> 0.0015s\n== 20261023120000 CreateKitobs: migrated (0.0018s) ============"
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Vazifasi",
            "Joyi"
          ],
          "rows": [
            [
              "Model",
              "Ma'lumot, validatsiya, biznes qoidalar",
              "<code>app/models</code>"
            ],
            [
              "View",
              "HTML yoki JSON ko'rinishi",
              "<code>app/views</code>"
            ],
            [
              "Controller",
              "So'rovni qabul qilib, javob tayyorlaydi",
              "<code>app/controllers</code>"
            ],
            [
              "Route",
              "URL ni controllerga bog'laydi",
              "<code>config/routes.rb</code>"
            ],
            [
              "Migration",
              "Ma'lumotlar bazasi sxemasini o'zgartiradi",
              "<code>db/migrate</code>"
            ],
            [
              "Gemfile",
              "Loyiha bog'liqliklari",
              "ildiz"
            ]
          ]
        },
        {
          "type": "code",
          "title": "routes.rb",
          "code": "Rails.application.routes.draw do\n  resources :kitoblar\n  get \"/salom\", to: \"salom#index\"\nend",
          "output": "$ bin/rails routes\n      Prefix Verb   URI Pattern              Controller#Action\n    kitoblar GET    /kitoblar(.:format)      kitoblar#index\n             POST   /kitoblar(.:format)      kitoblar#create\n new_kitob   GET    /kitoblar/new(.:format)  kitoblar#new\nedit_kitob   GET    /kitoblar/:id/edit(.:format) kitoblar#edit\n     kitob   GET    /kitoblar/:id(.:format)  kitoblar#show\n             PATCH  /kitoblar/:id(.:format)  kitoblar#update\n             DELETE /kitoblar/:id(.:format)  kitoblar#destroy\n      salom  GET    /salom(.:format)         salom#index"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Sukut bo'yicha fayllar",
          "html": "Rails ilovasida <code>app/</code> kod, <code>config/</code> sozlamalar, <code>db/</code> migratsiyalar, <code>bin/</code> buyruqlar uchun. <code>bin/rails server</code> serverni 3000-portda ko'taradi. <code>bin/rails console</code> bilan model va bazani interaktiv sinash mumkin. <code>bin/rails routes</code> barcha yo'llarni ko'rsatadi."
        },
        {
          "type": "p",
          "html": "Rails'da controller yupqa, model semiz bo'lishi kerak degan tamoyil bor: biznes mantiq model yoki alohida service obyektida turadi. View'da murakkab Ruby kod yozmang — helper yoki presenter ishlating. Migratsiyalar versiya nazoratida saqlanadi va jamoada bir xil sxemani ta'minlaydi."
        }
      ],
      "quiz": [
        {
          "q": "Rails MVC da so'rovni qabul qilib javob tayyorlaydigan qism qaysi?",
          "options": [
            "Controller",
            "View",
            "Model",
            "Migration"
          ],
          "answer": 0,
          "explain": "Controller route'dan so'rovni oladi, model bilan ishlaydi va view yoki JSON javob qaytaradi."
        },
        {
          "q": "Route'lar qaysi faylda yoziladi?",
          "options": [
            "app/models/route.rb",
            "config/routes.rb",
            "routes.txt",
            "config/database.yml"
          ],
          "answer": 1,
          "explain": "Rails route'lari config/routes.rb faylida belgilanadi."
        },
        {
          "q": "Model nimani ifodalaydi?",
          "options": [
            "Faqat HTML",
            "Fayl tizimini",
            "HTTP sarlavhalarini",
            "Ma'lumot va biznes qoidalarini"
          ],
          "answer": 3,
          "explain": "Model ma'lumotlar bazasi jadvali bilan ishlaydi va validatsiya, assotsiatsiya kabi qoidalarni saqlaydi."
        }
      ]
    },
    {
      "id": 44,
      "title": "Rails routing va controllers",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Rails'da <code>resources :kitoblar</code> yettita RESTful route yaratadi. Controller'dagi har bir action HTTP metodiga mos keladi. <code>before_action</code> umumiy tayyorgarlikni bir joyda saqlaydi, strong parameters esa ommaviy biriktirishdan (<code>mass assignment</code>) himoya qiladi."
        },
        {
          "type": "code",
          "title": "kitoblar_controller.rb",
          "code": "class KitoblarController < ApplicationController\n  before_action :topish, only: %i[show edit update destroy]\n\n  def index\n    @kitoblar = Kitob.order(:nom)\n  end\n\n  def show; end\n\n  private\n\n  def topish\n    @kitob = Kitob.find(params[:id])\n  end\n\n  def kitob_params\n    params.require(:kitob).permit(:nom, :narx)\n  end\nend",
          "output": "$ bin/rails routes -g kitob\n    kitoblar GET    /kitoblar(.:format)      kitoblar#index\n    kitoblar POST   /kitoblar(.:format)      kitoblar#create\n new_kitob   GET    /kitoblar/new(.:format)  kitoblar#new\nedit_kitob   GET    /kitoblar/:id/edit(.:format) kitoblar#edit\n     kitob   GET    /kitoblar/:id(.:format)  kitoblar#show\n     kitob   PATCH  /kitoblar/:id(.:format)  kitoblar#update\n             DELETE /kitoblar/:id(.:format)  kitoblar#destroy"
        },
        {
          "type": "table",
          "head": [
            "Action",
            "HTTP",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>index</code>",
              "GET",
              "Ro'yxatni ko'rsatadi"
            ],
            [
              "<code>show</code>",
              "GET",
              "Bitta yozuvni ko'rsatadi"
            ],
            [
              "<code>new</code>, <code>create</code>",
              "GET, POST",
              "Yangi yozuv formasi va yaratish"
            ],
            [
              "<code>edit</code>, <code>update</code>",
              "GET, PATCH",
              "Tahrirlash formasi va saqlash"
            ],
            [
              "<code>destroy</code>",
              "DELETE",
              "Yozuvni o'chiradi"
            ],
            [
              "<code>before_action</code>",
              "—",
              "Action oldidan filtr"
            ]
          ]
        },
        {
          "type": "code",
          "title": "create action",
          "code": "def create\n  @kitob = Kitob.new(kitob_params)\n\n  if @kitob.save\n    redirect_to @kitob, notice: \"Kitob qo'shildi\"\n  else\n    render :new, status: :unprocessable_entity\n  end\nend",
          "output": "Started POST \"/kitoblar\" for 127.0.0.1\nProcessing by KitoblarController#create\nRedirected to http://localhost:3000/kitoblar/3\nCompleted 302 Found"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Strong parameters",
          "html": "<code>params.require(:kitob).permit(:nom, :narx)</code> faqat ruxsat etilgan maydonlarni o'tkazadi. <code>params[:kitob]</code> ni to'g'ridan-to'g'ri <code>new</code> ga bermang — foydalanuvchi <code>admin</code> kabi yashirin maydonni o'zgartirishi mumkin. <code>require</code> bo'lmasa <code>ActionController::ParameterMissing</code> xatosi chiqadi."
        },
        {
          "type": "p",
          "html": "<code>find</code> topilmasa <code>ActiveRecord::RecordNotFound</code> ko'taradi va Rails 404 qaytaradi. <code>redirect_to</code> yangi so'rov yuboradi, <code>render</code> esa shu so'rov ichida javob qaytaradi. Muvaffaqiyatsiz saqlashda <code>status: :unprocessable_entity</code> (422) berish formani qayta ko'rsatishda to'g'ri status hisoblanadi."
        }
      ],
      "quiz": [
        {
          "q": "Strong parameters nima uchun kerak?",
          "options": [
            "HTML ni tezlashtirish uchun",
            "Faqat ruxsat etilgan maydonlarni qabul qilish uchun",
            "Route yaratish uchun",
            "Bazani tozalash uchun"
          ],
          "answer": 1,
          "explain": "permit ro'yxati foydalanuvchi yuborgan ruxsatsiz maydonlarni filtrlab, mass assignment xavfini kamaytiradi."
        },
        {
          "q": "before_action qachon ishlaydi?",
          "options": [
            "Action ichida",
            "Faqat actiondan keyin",
            "Action oldidan",
            "Faqat xato bo'lganda"
          ],
          "answer": 2,
          "explain": "before_action ko'rsatilgan action(lar) bajarilishidan oldin ishga tushadi."
        },
        {
          "q": "resources :kitoblar nechta RESTful route yaratadi?",
          "options": [
            "7",
            "5",
            "4",
            "9"
          ],
          "answer": 0,
          "explain": "resources standart ravishda index, show, new, create, edit, update, destroy uchun yettita route beradi."
        }
      ]
    },
    {
      "id": 45,
      "title": "ActiveRecord: model, so'rov va assotsiatsiya",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "ActiveRecord — Rails'ning ORM qatlami. Har bir model jadvalga mos keladi, obyektlar qatorlarga. <code>create!</code>, <code>where</code>, <code>pluck</code> kabi metodlar SQL yozmasdan so'rov qilish imkonini beradi. Assotsiatsiyalar (<code>has_many</code>, <code>belongs_to</code>) jadvallar orasidagi bog'lanishni ifodalaydi."
        },
        {
          "type": "code",
          "title": "console.rb",
          "code": "muallif = Muallif.create!(ism: \"Aziza Karimova\")\nk = Kitob.create!(nom: \"Ruby asoslari\", narx: 120_000, muallif: muallif)\nputs k.persisted?\nputs Kitob.where(\"narx > ?\", 100_000).pluck(:nom).inspect\nputs Kitob.count",
          "output": "true\n[\"Ruby asoslari\"]\n1"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>create!</code>",
              "Yozuv yaratadi, xatoda exception beradi"
            ],
            [
              "<code>where</code>",
              "Shart bo'yicha so'rov"
            ],
            [
              "<code>pluck(:nom)</code>",
              "Faqat kerakli ustun qiymatlarini oladi"
            ],
            [
              "<code>order</code>, <code>limit</code>",
              "Saralash va cheklash"
            ],
            [
              "<code>has_many</code>",
              "Bir modeldan ko'p bog'lanish"
            ],
            [
              "<code>belongs_to</code>",
              "Boshqa modelga tegishlilik"
            ]
          ]
        },
        {
          "type": "code",
          "title": "associations.rb",
          "code": "muallif = Muallif.create!(ism: \"Aziza Karimova\")\nmuallif.kitoblar.create!(nom: \"Ruby asoslari\", narx: 120_000)\n\nputs muallif.kitoblar.count\nputs muallif.kitoblar.first.nom\nputs muallif.kitoblar.sum(:narx)",
          "output": "1\nRuby asoslari\n120000"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "N+1 muammosi",
          "html": "Ro'yxatda har bir kitobning muallifini chaqirsangiz, Rails har biri uchun alohida so'rov yuborishi mumkin. <code>Kitob.includes(:muallif)</code> buni oldini oladi. <code>pluck</code> model obyekti yaratmaydi va tez ishlaydi, lekin callback'larni ishga tushirmaydi. Katta jadvallarda <code>find_each</code> bilan bo'laklab ishlang."
        },
        {
          "type": "p",
          "html": "Migratsiya sxemani versiyalaydi: <code>bin/rails generate migration AddTuriToKitobs turi:string</code>, so'ng <code>bin/rails db:migrate</code>. Ustunlarni o'chirish yoki turini o'zgartirishdan oldin zaxira va mavjud ma'lumotni ko'chirish rejasini tuzing. Ishlab chiqarishda migratsiyalarni orqaga qaytarish ham o'ylangan bo'lishi kerak."
        }
      ],
      "quiz": [
        {
          "q": "Kitob.where(...).pluck(:nom) nima qaytaradi?",
          "options": [
            "Kitob obyektlari",
            "SQL so'rovi",
            "Bitta matn",
            "Nomlar massivi"
          ],
          "answer": 3,
          "explain": "pluck tanlangan ustun qiymatlarini massiv qilib qaytaradi va model obyektlarini yaratmaydi."
        },
        {
          "q": "has_many :kitoblar qaysi modelda yoziladi?",
          "options": [
            "Kitob modelida",
            "Muallif modelida",
            "Controllerda",
            "Route faylida"
          ],
          "answer": 1,
          "explain": "Muallifda ko'p kitob bo'lsa, has_many Muallif modelida, Kitobda esa belongs_to :muallif yoziladi."
        },
        {
          "q": "create! va create orasidagi farq nima?",
          "options": [
            "create tezroq",
            "create! faqat o'qiydi",
            "create! xatoda exception ko'taradi",
            "Farqi yo'q"
          ],
          "answer": 2,
          "explain": "create! validatsiya yoki baza xatosida exception beradi; create esa false qaytaradi."
        }
      ]
    },
    {
      "id": 46,
      "title": "Rails views: ERB, layout va partial",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Rails view qatlami HTML yasaydi. ERB shablonlarida <code>&lt;%= %&gt;</code> natijani chiqaradi, <code>&lt;% %&gt;</code> esa faqat kod bajaradi. Layout umumiy ramkani (menyu, footer) beradi, partial esa qayta ishlatiladigan bo'lakni ajratadi. Helper'lar view'dagi takrorlanuvchi mantiqni qisqartiradi."
        },
        {
          "type": "code",
          "title": "app/views/kitoblar/index.html.erb",
          "code": "<% @kitoblar.each do |kitob| %>\n  <article>\n    <h2><%= link_to kitob.nom, kitob_path(kitob) %></h2>\n    <p><%= number_with_delimiter(kitob.narx, delimiter: \" \") %> so'm</p>\n  </article>\n<% end %>",
          "output": "<article>\n  <h2><a href=\"/kitoblar/1\">Ruby asoslari</a></h2>\n  <p>120 000 so'm</p>\n</article>"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>&lt;%= %&gt;</code>",
              "Natijani HTML ga chiqaradi"
            ],
            [
              "<code>&lt;% %&gt;</code>",
              "Kodni bajaradi, natija chiqarmaydi"
            ],
            [
              "<code>link_to</code>",
              "Havola yasaydi"
            ],
            [
              "<code>render \"qator\"</code>",
              "Partial'ni qo'shadi"
            ],
            [
              "<code>yield</code>",
              "Layout ichiga sahifa mazmunini qo'yadi"
            ],
            [
              "<code>number_with_delimiter</code>",
              "Sonni mingliklarga ajratadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "app/views/kitoblar/_form.html.erb",
          "code": "<%= form_with model: @kitob do |f| %>\n  <div>\n    <%= f.label :nom, \"Nom\" %>\n    <%= f.text_field :nom %>\n  </div>\n  <%= f.submit \"Saqlash\" %>\n<% end %>",
          "output": "<label for=\"kitob_nom\">Nom</label>\n<input type=\"text\" name=\"kitob[nom]\" id=\"kitob_nom\">\n<input type=\"submit\" name=\"commit\" value=\"Saqlash\">"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "XSS va CSRF",
          "html": "ERB sukut bo'yicha chiqarilgan matnni escape qiladi, shuning uchun foydalanuvchi kiritgan HTML bajarilmaydi. <code>raw</code> yoki <code>html_safe</code> ni ishonchsiz ma'lumotga ishlatmang. <code>form_with</code> CSRF tokenini avtomatik qo'shadi; API uchun token siyosatini alohida sozlang."
        },
        {
          "type": "p",
          "html": "Layout <code>app/views/layouts/application.html.erb</code> da bo'ladi va <code>&lt;%= yield %&gt;</code> joyiga sahifa kiradi. Partial nomi pastki chiziq bilan boshlanadi: <code>_qator.html.erb</code>, chaqiruvda esa <code>render \"qator\"</code>. View'da biznes mantiq yozmang: hisob-kitobni model yoki helper'ga ko'chiring."
        }
      ],
      "quiz": [
        {
          "q": "ERB da natijani HTML ga chiqaradigan teg qaysi?",
          "options": [
            "<%= code %>",
            "<% code %>",
            "<%# izoh %>",
            "<%! code %>"
          ],
          "answer": 0,
          "explain": "<%= %> ifoda natijasini chiqaradi; <% %> esa faqat kod bajaradi."
        },
        {
          "q": "form_with nima uchun ishlatiladi?",
          "options": [
            "Route o'chirish uchun",
            "Fayl o'qish uchun",
            "Forma yasash uchun",
            "Migratsiya yozish uchun"
          ],
          "answer": 2,
          "explain": "form_with model yoki yo'l asosida forma va maydonlarni yaratadi, CSRF tokenini ham qo'shadi."
        },
        {
          "q": "Partial fayl nomi qanday boshlanadi?",
          "options": [
            "nuqta bilan",
            "katta harf bilan",
            "raqam bilan",
            "pastki chiziq bilan"
          ],
          "answer": 3,
          "explain": "Partial nomi _ bilan boshlanadi, masalan _qator.html.erb; render \"qator\" deb chaqiriladi."
        }
      ]
    },
    {
      "id": 47,
      "title": "Rails validatsiyalari va callback'lar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Validatsiya modelni saqlashdan oldin ma'lumotni tekshiradi. <code>valid?</code> xato bo'lsa <code>false</code> qaytaradi va <code>errors</code> ni to'ldiradi; <code>save</code> ham shu tekshiruvdan o'tadi. Callback'lar hayot sikli voqealari — <code>before_save</code>, <code>after_create</code> — atrofida kod bajaradi."
        },
        {
          "type": "code",
          "title": "kitob.rb",
          "code": "class Kitob < ApplicationRecord\n  validates :nom, presence: true, length: { minimum: 3 }\n  validates :narx, numericality: { greater_than: 0 }\n  validate :narx_chegarasi\n\n  private\n\n  def narx_chegarasi\n    errors.add(:narx, \"juda katta\") if narx.to_i > 10_000_000\n  end\nend\n\nk = Kitob.new(nom: \"Ru\", narx: 0)\nputs k.valid?\nputs k.errors.full_messages.inspect",
          "output": "false\n[\"Nom is too short (minimum is 3 characters)\", \"Narx must be greater than 0\"]"
        },
        {
          "type": "table",
          "head": [
            "Validatsiya",
            "Tekshiruvi"
          ],
          "rows": [
            [
              "<code>presence: true</code>",
              "Bo'sh emasligi"
            ],
            [
              "<code>length: { minimum: 3 }</code>",
              "Belgilar soni"
            ],
            [
              "<code>numericality: { greater_than: 0 }</code>",
              "Son va chegara"
            ],
            [
              "<code>uniqueness: true</code>",
              "Takrorlanmasligi"
            ],
            [
              "<code>validate :metod</code>",
              "O'z tekshiruvingiz"
            ],
            [
              "<code>errors.add</code>",
              "Xabar qo'shish"
            ]
          ]
        },
        {
          "type": "code",
          "title": "callback.rb",
          "code": "class Kitob < ApplicationRecord\n  before_save { self.nom = nom.strip }\n  after_create { Rails.logger.info \"Kitob yaratildi: #{id}\" }\nend\n\nk = Kitob.create!(nom: \"  Ruby  \", narx: 1000)\nputs k.nom\nputs k.persisted?",
          "output": "Ruby\ntrue"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "save va save!",
          "html": "<code>save</code> validatsiya muvaffaqiyatsiz bo'lsa <code>false</code> qaytaradi; <code>save!</code> esa <code>ActiveRecord::RecordInvalid</code> ko'taradi. Callback ichida <code>throw :abort</code> bilan saqlashni to'xtatish mumkin. Callback'lar bir-biriga bog'lanib ketmasligi uchun ularni kichik va aniq tuting."
        },
        {
          "type": "p",
          "html": "Murakkab biznes jarayonlari uchun callback o'rniga service obyekt ishlatish ko'pincha osonroq test qilinadi. Tranzaksiya ichida bir nechta yozuvni saqlash kerak bo'lsa <code>ActiveRecord::Base.transaction</code> dan foydalaning. <code>errors.full_messages</code> foydalanuvchiga ko'rsatish uchun tayyor matn beradi."
        }
      ],
      "quiz": [
        {
          "q": "valid? metodi validatsiya xatosida nima qaytaradi?",
          "options": [
            "true",
            "false",
            "Exception",
            "nil"
          ],
          "answer": 1,
          "explain": "valid? tekshiradi va xato bo'lsa false qaytaradi; exception ko'tarmaydi."
        },
        {
          "q": "errors.full_messages nimani beradi?",
          "options": [
            "Model atributlarini",
            "Faqat bitta xatoni",
            "SQL so'rovini",
            "Barcha xato matnlarini"
          ],
          "answer": 3,
          "explain": "full_messages har bir xatoni atribut nomi bilan birga o'qishli matn massivi sifatida qaytaradi."
        },
        {
          "q": "before_save callback qachon ishlaydi?",
          "options": [
            "Yozuv saqlanishidan oldin",
            "Yozuv o'chirilgandan keyin",
            "Faqat validatsiyada",
            "Faqat konsolda"
          ],
          "answer": 0,
          "explain": "before_save model saqlanishidan oldin, validatsiyadan keyin ishga tushadi."
        }
      ]
    },
    {
      "id": 48,
      "title": "Loyiha 1: kutubxona domenini loyihalash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi o'rganganlarimizni loyihaga birlashtiramiz. Kutubxona tizimida kitob, a'zo va qarz tushunchalari bor. Avval domen qoidalarini aniqlaymiz: kitob bir vaqtda faqat bitta kishiga beriladi, qarz muddati 14 kun, kechikish sanadan hisoblanadi. Kod yozishdan oldin shu qoidalarni jadvalga tushirish foydali."
        },
        {
          "type": "code",
          "title": "domain.rb",
          "code": "require \"date\"\n\nclass Kitob\n  attr_reader :nom\n  attr_accessor :mavjud\n\n  def initialize(nom)\n    @nom = nom\n    @mavjud = true\n  end\nend\n\nclass Qarz\n  KUN = 14\n  attr_reader :kitob, :olingan\n\n  def initialize(kitob, olingan)\n    @kitob = kitob\n    @olingan = olingan\n    kitob.mavjud = false\n  end\n\n  def qaytarish_sana = olingan + KUN\n  def kechikdi?(bugun) = bugun > qaytarish_sana\nend\n\nkitob = Kitob.new(\"Ruby asoslari\")\nqarz = Qarz.new(kitob, Date.new(2026, 10, 23))\n\nputs kitob.nom\nputs kitob.mavjud\nputs qarz.qaytarish_sana\nputs qarz.kechikdi?(Date.new(2026, 11, 10))",
          "output": "Ruby asoslari\nfalse\n2026-11-06\ntrue"
        },
        {
          "type": "table",
          "head": [
            "Qoida",
            "Tekshiruv"
          ],
          "rows": [
            [
              "Kitob mavjud bo'lishi kerak",
              "<code>mavjud</code> bayrog'i"
            ],
            [
              "Qarz muddati 14 kun",
              "<code>olingan + 14</code>"
            ],
            [
              "Kechikish sanadan aniqlanadi",
              "<code>bugun &gt; qaytarish_sana</code>"
            ],
            [
              "Band kitob qayta berilmaydi",
              "Custom xato"
            ],
            [
              "Har bir qarz bitta kitobga",
              "Qarz obyekti"
            ],
            [
              "Qaytarish kitobni bo'shatadi",
              "<code>mavjud = true</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "service.rb",
          "code": "class KitobMavjudEmas < StandardError; end\n\nclass Kitob\n  attr_reader :nom\n  attr_accessor :mavjud\n\n  def initialize(nom)\n    @nom = nom\n    @mavjud = true\n  end\nend\n\nclass Kutubxona\n  attr_reader :qarzlar\n\n  def initialize\n    @qarzlar = []\n  end\n\n  def qarzga_ber(kitob, sana)\n    raise KitobMavjudEmas, \"Kitob band: #{kitob.nom}\" unless kitob.mavjud\n    kitob.mavjud = false\n    @qarzlar << { kitob: kitob, sana: sana }\n    @qarzlar.last\n  end\nend\n\nk = Kitob.new(\"Ruby asoslari\")\nkutubxona = Kutubxona.new\nkutubxona.qarzga_ber(k, \"2026-10-23\")\nputs kutubxona.qarzlar.size\n\nbegin\n  kutubxona.qarzga_ber(k, \"2026-10-24\")\nrescue KitobMavjudEmas => e\n  puts e.message\nend",
          "output": "1\nKitob band: Ruby asoslari"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Domenni ajratish",
          "html": "Kitob va Qarz — domen obyektlari; ular HTTP yoki JSON haqida bilmasligi kerak. <code>Kutubxona</code> — service: qoidalarni bajaradi va xatolarni aniq tur bilan ko'taradi. Keyingi darsda shu g'oyalar asosida Sinatra API quramiz. Bu ajratish test yozishni sezilarli osonlashtiradi."
        },
        {
          "type": "p",
          "html": "ID larni qo'lda emas, markazlashgan joyda bering; haqiqiy bazada bu vazifani baza bajaradi. Sanalarni matn emas, <code>Date</code> obyekti sifatida saqlang. Qaytarish amali ham alohida metod bo'lishi kerak: u qarzni yopadi va kitobni yana mavjud qiladi. Moliyaviy yoki hisob-kitobli loyihalarda pulni <code>Integer</code> tiyinda saqlang."
        }
      ],
      "quiz": [
        {
          "q": "Domen obyekti qanday mas'uliyatga ega bo'lishi kerak?",
          "options": [
            "HTTP so'rovlarini boshqarish",
            "HTML yasash",
            "Biznes qoidalarini saqlash",
            "Route yozish"
          ],
          "answer": 2,
          "explain": "Domen obyekti kitob, qarz kabi biznes tushunchalar va qoidalarni ifodalaydi; transport yoki ko'rinish bilan aralashmaydi."
        },
        {
          "q": "Band kitobni qayta berishga urinishda qanday xato mos?",
          "options": [
            "KitobMavjudEmas custom xatosi",
            "Standart RuntimeError",
            "nil qaytarish",
            "Jimgina o'tkazish"
          ],
          "answer": 0,
          "explain": "Custom xato chaqiruvchiga sababni aniq ajratish imkonini beradi va API'da 409 kabi statusga bog'lanadi."
        },
        {
          "q": "Qarz muddatini hisoblash uchun qaysi tur mos?",
          "options": [
            "String",
            "Date",
            "Boolean",
            "Symbol"
          ],
          "answer": 1,
          "explain": "Date kalendar kunlari bilan ishlaydi va 14 kun qo'shish hamda kechikishni to'g'ri hisoblaydi."
        }
      ]
    },
    {
      "id": 49,
      "title": "Loyiha 2: Sinatra API va Rack testlari",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Domenni HTTP ustiga chiqaramiz. API uchta muhim qoidaga tayanishi kerak: topilmagan resurs — 404, band kitob — 409, muvaffaqiyat — 200 yoki 201. Javob har doim JSON bo'lsin. Testlar route'ning statusi va mazmunini tekshiradi, shunda refaktoring xavfsiz bo'ladi."
        },
        {
          "type": "code",
          "title": "app.rb",
          "code": "require \"sinatra\"\nrequire \"json\"\n\nKITOBLAR = [{ id: 1, nom: \"Ruby asoslari\", mavjud: true }]\n\nget \"/api/kitoblar\" do\n  content_type :json\n  KITOBLAR.to_json\nend\n\npost \"/api/kitoblar/:id/qarz\" do\n  content_type :json\n  kitob = KITOBLAR.find { |k| k[:id] == params[:id].to_i }\n  halt 404, { xato: \"topilmadi\" }.to_json unless kitob\n  halt 409, { xato: \"band\" }.to_json unless kitob[:mavjud]\n\n  kitob[:mavjud] = false\n  status 200\n  kitob.to_json\nend",
          "output": "$ curl -s -X POST localhost:4567/api/kitoblar/1/qarz\n{\"id\":1,\"nom\":\"Ruby asoslari\",\"mavjud\":false}\n$ curl -s localhost:4567/api/kitoblar\n[{\"id\":1,\"nom\":\"Ruby asoslari\",\"mavjud\":false}]"
        },
        {
          "type": "table",
          "head": [
            "Endpoint",
            "Muvaffaqiyat",
            "Xato"
          ],
          "rows": [
            [
              "<code>GET /api/kitoblar</code>",
              "200 + massiv",
              "—"
            ],
            [
              "<code>POST /api/kitoblar/:id/qarz</code>",
              "200 + kitob",
              "404 topilmadi, 409 band"
            ],
            [
              "<code>GET /api/kitoblar/:id</code>",
              "200 + kitob",
              "404"
            ],
            [
              "<code>DELETE /api/qarzlar/:id</code>",
              "204",
              "404"
            ],
            [
              "Noto'g'ri JSON",
              "400",
              "—"
            ],
            [
              "Ruxsatsiz so'rov",
              "401 yoki 403",
              "—"
            ]
          ]
        },
        {
          "type": "code",
          "title": "api_test.rb",
          "code": "require \"minitest/autorun\"\nrequire \"rack/test\"\nrequire_relative \"app\"\n\nclass ApiTest < Minitest::Test\n  include Rack::Test::Methods\n\n  def app = Sinatra::Application\n\n  def test_kitoblar\n    get \"/api/kitoblar\"\n    assert last_response.ok?\n    assert last_response.body.include?(\"Ruby asoslari\")\n  end\n\n  def test_yoq_kitob\n    post \"/api/kitoblar/999/qarz\"\n    assert_equal 404, last_response.status\n  end\nend",
          "output": "Run options: --seed 12345\n\n# Running:\n\n..\n\nFinished in 0.003210s, 623.0529 runs/s, 934.5794 assertions/s.\n\n2 runs, 3 assertions, 0 failures, 0 errors, 0 skips"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Vaqtinchalik xotira yetarli emas",
          "html": "Massivdagi ma'lumot server qayta ishga tushganda yo'qoladi va bir nechta jarayonda umumiy bo'lmaydi. Keyingi qadam — SQLite yoki PostgreSQL. Har bir yozuv uchun noyob ID, tranzaksiya va indeks kerak. API kaliti, CORS va so'rov hajmini cheklashni ham unutmang."
        },
        {
          "type": "p",
          "html": "Testlarni izolyatsiya qiling: har bir testdan oldin ma'lumotni tiklang, aks holda tartibga bog'liq natijalar chiqadi. <code>Rack::Test</code> HTTP server ochmasdan ilovani chaqiradi, shuning uchun tez ishlaydi. Keyingi bosqichda autentifikatsiya, sahifalash va xatolarni yagona JSON formatida qaytarishni qo'shing."
        }
      ],
      "quiz": [
        {
          "q": "Band kitobni qayta qarzga berishda qaysi status mos?",
          "options": [
            "409",
            "201",
            "404",
            "200"
          ],
          "answer": 0,
          "explain": "409 Conflict resursning joriy holati so'rovga zid ekanini bildiradi, masalan kitob allaqachon band."
        },
        {
          "q": "Rack::Test nima uchun ishlatiladi?",
          "options": [
            "Faqat bazani tozalash",
            "HTTP server ochmasdan ilovani test qilish",
            "JSON formatlash",
            "Gem o'rnatish"
          ],
          "answer": 1,
          "explain": "Rack::Test so'rovlarni to'g'ridan-to'g'ri Rack ilovasiga yuboradi; alohida serverni ishga tushirish shart emas."
        },
        {
          "q": "Topilmagan resurs uchun qaysi status qaytariladi?",
          "options": [
            "500",
            "200",
            "404",
            "301"
          ],
          "answer": 2,
          "explain": "404 Not Found so'ralgan resurs mavjud emasligini bildiradi."
        }
      ]
    },
    {
      "id": 50,
      "title": "Yakuniy imtihon",
      "minutes": 25,
      "isExam": true,
      "blocks": [
        {
          "type": "p",
          "html": "Ruby kursining yakuniy imtihoni. Savollar butun yo'lni qamrab oladi: sintaksis va kolleksiyalar, bloklar va lambda'lar, OOP va modullar, metaprogramming, xatolar, fayllar, JSON, testlash, Sinatra va Rails asoslari."
        },
        {
          "type": "ul",
          "items": [
            "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
            "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
            "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
            "Har bir savol oldingi darslardagi amaliy tushunchalarga tayanadi."
          ]
        },
        {
          "type": "table",
          "head": [
            "Mavzu",
            "Savollar"
          ],
          "rows": [
            [
              "Til asoslari va kolleksiyalar",
              "1–2"
            ],
            [
              "Bloklar, Proc va lambda",
              "3"
            ],
            [
              "OOP, modullar, metaprogramming",
              "4–5"
            ],
            [
              "Xatolar va fayllar",
              "6–7"
            ],
            [
              "Regex va JSON",
              "8–9"
            ],
            [
              "Testlash, Sinatra, Rails",
              "10–12"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tayyorgarlik",
          "html": "Kod misollarini mustaqil yozib ko'ring: <code>map</code> va <code>select</code>, <code>fetch</code>, <code>prepend</code>, <code>rescue/ensure</code>, <code>JSON.parse</code>, Minitest va Rails <code>pluck</code>. Xatoni o'qish ham ko'nikma: backtrace'dagi birinchi qator ko'pincha sababni ko'rsatadi."
        },
        {
          "type": "p",
          "html": "Imtihonni boshlashdan oldin har bir savolni oxirigacha o'qing va variantlarni solishtiring. Shoshilmang: 12 savol uchun 25 daqiqa yetarli. Muvaffaqiyat — bu kursda yozgan kodlaringizning tabiiy davomi."
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
        "q": "Ruby'da 0 qiymati shartli ifodada qanday baholanadi?",
        "options": [
          "Yolg'on",
          "Rost",
          "Xato beradi",
          "nil ga aylanadi"
        ],
        "answer": 1,
        "explain": "Ruby'da faqat nil va false yolg'on; 0 ham, bo'sh matn ham rost hisoblanadi."
      },
      {
        "q": "[1, 2, 3].map { |n| n + 1 } qanday massiv qaytaradi?",
        "options": [
          "[1, 2, 3]",
          "[2, 3, 4]",
          "6",
          "[2, 4, 6]"
        ],
        "answer": 1,
        "explain": "map har bir elementga blokni qo'llaydi va yangi massiv qaytaradi: [2, 3, 4]."
      },
      {
        "q": "->(x) { x * 2 }.lambda? natijasi nima?",
        "options": [
          "true",
          "false",
          "2",
          "nil"
        ],
        "answer": 0,
        "explain": "Strelka sintaksisi bilan yaratilgan obyekt lambda bo'ladi, shuning uchun lambda? true qaytaradi."
      },
      {
        "q": "prepend qilingan modul metodi metod qidiruvida qanday o'rin tutadi?",
        "options": [
          "Klass metodidan oldin turadi",
          "Har doim eng oxirida turadi",
          "Faqat private bo'ladi",
          "Faqat bir marta chaqiriladi"
        ],
        "answer": 0,
        "explain": "prepend modulni klassdan oldin qo'yadi, shuning uchun uning metodi ustuvor bo'ladi."
      },
      {
        "q": "public_send(:maxfiy) private metodga murojaat qilsa nima bo'ladi?",
        "options": [
          "Metodni chaqiradi",
          "nil qaytaradi",
          "NoMethodError beradi",
          "Metodni public qiladi"
        ],
        "answer": 2,
        "explain": "public_send faqat ochiq metodlarni chaqiradi; private metod uchun NoMethodError ko'tariladi."
      },
      {
        "q": "rescue bilan ushlanmagan xato dasturda nima qiladi?",
        "options": [
          "Dasturni to'xtatadi va backtrace chiqaradi",
          "Jimgina o'tkazib yuboradi",
          "nil qaytaradi",
          "Avtomatik qayta urinadi"
        ],
        "answer": 0,
        "explain": "Ushlanmagan xato dasturni to'xtatadi va xato sinfi, xabar hamda backtrace'ni ko'rsatadi."
      },
      {
        "q": "Fayl mavjudligini tekshirish uchun qaysi metod ishlatiladi?",
        "options": [
          "File.present?",
          "File.exist?",
          "File.find",
          "File.exists?"
        ],
        "answer": 1,
        "explain": "Zamonaviy Ruby'da File.exist? ishlatiladi; File.exists? eskirgan."
      },
      {
        "q": "/\\A[a-z]+\\z/ qanday matnga mos keladi?",
        "options": [
          "Raqamlardan iborat matnga",
          "Bo'sh matnga",
          "Faqat kichik lotin harflaridan iborat butun matnga",
          "Katta harfli matnga"
        ],
        "answer": 2,
        "explain": "\\A va \\z butun matn chegaralarini, [a-z]+ esa faqat kichik lotin harflarini bildiradi."
      },
      {
        "q": "JSON.parse('{\"a\":1}') qaytgan hash'ning kaliti qanday turda bo'ladi?",
        "options": [
          "Symbol :a",
          "O'zgaruvchi a",
          "Son 1",
          "Matn \"a\""
        ],
        "answer": 3,
        "explain": "symbolize_names berilmasa JSON kalitlari matn bo'lib qoladi, shuning uchun hash[\"a\"] yoziladi."
      },
      {
        "q": "Minitest'da har bir test oldidan bajariladigan metod qaysi?",
        "options": [
          "before",
          "init",
          "setup",
          "prepare"
        ],
        "answer": 2,
        "explain": "Minitest setup metodini har bir test metodi oldidan alohida ishga tushiradi."
      },
      {
        "q": "Sinatra'da halt 404 nima qiladi?",
        "options": [
          "Serverni to'xtatadi",
          "Marshrutni o'chiradi",
          "Faylni qaytaradi",
          "Javobni darhol 404 status bilan tugatadi"
        ],
        "answer": 3,
        "explain": "halt joriy so'rovni darhol to'xtatib, berilgan status va ixtiyoriy matn bilan javob qaytaradi."
      },
      {
        "q": "ActiveRecord'da faqat nom ustuni qiymatlarini olish uchun qaysi metod mos?",
        "options": [
          "select(:nom)",
          "only(:nom)",
          "pluck(:nom)",
          "values(:nom)"
        ],
        "answer": 2,
        "explain": "pluck(:nom) faqat shu ustun qiymatlarini massiv qilib qaytaradi va model obyektlarini yaratmaydi."
      }
    ]
  }
};
})();
