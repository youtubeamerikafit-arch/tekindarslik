/* Noldan — JavaScript course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.javascript = {
  "id": "javascript",
  "title": "JavaScript",
  "logoClass": "course-logo--js",
  "logoText": "JS",
  "level": "Boshlovchi",
  "hours": "~20 soat",
  "testCount": 147,
  "lang": "js",
  "interactive": "none",
  "heroTitle": "JavaScript: veb-sahifalarga jon berish",
  "heroDesc": "JavaScript'ni noldan o'rganing: 49 dars, 147 test va 12-savollik imtihon. O'zgaruvchilardan closure, class, modul, fetch va testlashgacha — har bir mavzu brauzerda ishlaydigan kod bilan mustahkamlanadi.",
  "metaDescription": "JavaScript kursi: 49 dars, 147 test va 12-savollik imtihon. Scope, closure, async/await, DOM, fetch, xavfsizlik va uch bosqichli amaliy loyiha bilan zamonaviy JavaScript o'rganing.",
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
      "title": "Funksiyalar va ma'lumotlar",
      "lessons": [
        5,
        6,
        7
      ]
    },
    {
      "title": "Brauzer va DOM",
      "lessons": [
        8,
        9
      ]
    },
    {
      "title": "Ma'lumot, asinxronlik va loyiha",
      "lessons": [
        10,
        11,
        12
      ]
    },
    {
      "title": "Til chuqurligi",
      "lessons": [
        13,
        14,
        15,
        16
      ]
    },
    {
      "title": "Zamonaviy sintaksis",
      "lessons": [
        17,
        18,
        19,
        20,
        21
      ]
    },
    {
      "title": "Kolleksiyalar va massivlar",
      "lessons": [
        22,
        23,
        24
      ]
    },
    {
      "title": "OOP va modullar",
      "lessons": [
        25,
        26,
        27,
        28
      ]
    },
    {
      "title": "Regex, sana va xatolar",
      "lessons": [
        29,
        30,
        31,
        32
      ]
    },
    {
      "title": "Asinxronlik va brauzer",
      "lessons": [
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40
      ]
    },
    {
      "title": "Sifat va amaliyot",
      "lessons": [
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
      "title": "JavaScript nima va u qayerda ishlaydi?",
      "minutes": 12,
      "blocks": [
        {
          "type": "p",
          "html": "JavaScript — veb-sahifalarga <b>harakat</b> qo'shadigan dasturlash tili. HTML sahifaning tuzilishini, CSS ko'rinishini belgilasa, JavaScript foydalanuvchi bilan muloqot qiladi: tugma bosilganda javob beradi, ma'lumotni hisoblaydi va ekranni yangilaydi."
        },
        {
          "type": "ul",
          "items": [
            "HTML — <b>skelet</b>: sarlavha, matn, rasm va tugmalar.",
            "CSS — <b>ko'rinish</b>: ranglar, o'lchamlar va joylashuv.",
            "JavaScript — <b>xatti-harakat</b>: bosish, hisoblash va o'zgartirish."
          ]
        },
        {
          "type": "code",
          "title": "birinchi.js",
          "code": "console.log(\"Salom, Noldan!\");\nconsole.log(\"JavaScript ishlayapti.\");\n\nconst ism = \"Aziza\";\nconsole.log(\"Foydalanuvchi:\", ism);",
          "output": "Salom, Noldan!\nJavaScript ishlayapti.\nFoydalanuvchi: Aziza",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "info",
          "title": "console.log() nima qiladi?",
          "html": "U ma'lumotni brauzer <b>konsoli</b>ga chiqaradi. Dasturchilar kod ishlayotganini tekshirish uchun undan eng ko'p foydalanadi. Kodni sahifada ko'rsatish uchun keyinroq DOM bilan ishlashni o'rganamiz."
        },
        {
          "type": "code",
          "title": "hisoblash.js",
          "code": "const narx = 12000;\nconst soni = 3;\nconst jami = narx * soni;\n\nconsole.log(\"Jami:\", jami, \"so'm\");\nconsole.log(\"Chegirma bilan:\", jami * 0.9);",
          "output": "Jami: 36000 so'm\nChegirma bilan: 32400",
          "runnable": true
        },
        {
          "type": "p",
          "html": "JavaScript brauzerdan tashqarida ham ishlaydi: serverlarda (Node.js), mobil ilovalarda va hatto robotlarda. Lekin bizning kurs brauzerdagi amaliyotga qaratilgan, chunki bu yerda natijani darhol ko'rasiz."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "O'rganish usuli",
          "html": "Har bir kodni o'zingiz yozib ko'ring. Faqat o'qish xotirani mustahkamlamaydi — barmoqlar ham o'rganadi. Kodni o'zgartirib, natija qanday o'zgarishini kuzating."
        }
      ],
      "quiz": [
        {
          "q": "JavaScript veb-sahifada qanday vazifani bajaradi?",
          "options": [
            "Sahifa tuzilishini yaratadi",
            "Sahifaga harakat va mantiq qo'shadi",
            "Faqat ranglarni belgilaydi",
            "Serverni o'rnatadi"
          ],
          "answer": 1,
          "explain": "HTML tuzilma, CSS ko'rinish, JavaScript esa harakat va mantiq uchun javob beradi."
        },
        {
          "q": "Konsolga ma'lumot chiqarish uchun nima ishlatiladi?",
          "options": [
            "console.log()",
            "print()",
            "echo()",
            "console.write()"
          ],
          "answer": 0,
          "explain": "JavaScript'da console.log() qiymatlarni brauzer konsoliga chiqaradi. print() va echo() boshqa tillarga xos."
        },
        {
          "q": "Quyidagilardan qaysi biri o'zgaruvchi yaratadi?",
          "options": [
            "variable ism",
            "let ism",
            "var: ism",
            "define ism"
          ],
          "answer": 1,
          "explain": "let (yoki const) zamonaviy JavaScript'da o'zgaruvchi yaratish uchun ishlatiladi."
        }
      ]
    },
    {
      "id": 2,
      "title": "O'zgaruvchilar va ma'lumot turlari",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "O'zgaruvchi — ma'lumot saqlanadigan nomlangan quti. JavaScript'da <code>let</code> qiymati o'zgaradigan, <code>const</code> esa o'zgarmas o'zgaruvchi uchun ishlatiladi."
        },
        {
          "type": "code",
          "title": "turlar.js",
          "code": "let yosh = 15;\nconst ism = \"Aziza\";\nlet baho = 4.8;\nlet faol = true;\n\nconsole.log(typeof ism);\nconsole.log(typeof yosh);\nconsole.log(typeof faol);\nconsole.log(ism, yosh, baho);",
          "output": "string\nnumber\nboolean\nAziza 15 4.8",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Tur",
            "Misol",
            "Nima saqlaydi"
          ],
          "rows": [
            [
              "string",
              "<code>\"Salom\"</code>",
              "Matn"
            ],
            [
              "number",
              "<code>42</code>, <code>3.14</code>",
              "Son"
            ],
            [
              "boolean",
              "<code>true</code>, <code>false</code>",
              "Rost yoki yolg'on"
            ],
            [
              "undefined",
              "<code>let x;</code>",
              "Qiymat berilmagan"
            ],
            [
              "null",
              "<code>null</code>",
              "Ataylab bo'sh qiymat"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "const nimani anglatadi?",
          "html": "<code>const</code> nomni boshqa qiymatga bog'lashni taqiqlaydi, lekin obyekt yoki massiv ichidagi ma'lumotni o'zgartirish mumkin. Masalan, <code>const ismlar = []; ismlar.push(\"Ali\")</code> ishlaydi."
        },
        {
          "type": "p",
          "html": "Matnlarni birlashtirish uchun <code>+</code> yoki zamonaviy <b>template literal</b> ishlatiladi. Template literal — orqaga qiya belgi bilan yoziladigan matn bo'lib, ichida <code>${}</code> orqali qiymat qo'shish mumkin."
        },
        {
          "type": "code",
          "title": "matn.js",
          "code": "const ism = \"Aziza\";\nconst yosh = 15;\nconst xabar = \"Salom, \" + ism + \"!\";\nconst xabar2 = `Salom, ${ism}! Siz ${yosh} yoshdasiz.`;\n\nconsole.log(xabar);\nconsole.log(xabar2);",
          "output": "Salom, Aziza!\nSalom, Aziza! Siz 15 yoshdasiz.",
          "runnable": true
        }
      ],
      "quiz": [
        {
          "q": "Qiymati keyinchalik o'zgaradigan o'zgaruvchi qaysi kalit so'z bilan yaratiladi?",
          "options": [
            "const",
            "let",
            "fixed",
            "static"
          ],
          "answer": 1,
          "explain": "let bilan yaratilgan o'zgaruvchiga yangi qiymat berish mumkin; const bilan yaratilganiga esa yo'q."
        },
        {
          "q": "typeof \"Salom\" natijasi nima?",
          "options": [
            "number",
            "string",
            "boolean",
            "text"
          ],
          "answer": 1,
          "explain": "Qo'shtirnoq ichidagi matn string turiga kiradi."
        },
        {
          "q": "Qaysi yozuv matnga o'zgaruvchi qiymatini qo'shadi?",
          "options": [
            "`Salom, ${ism}!`",
            "\"Salom, {ism}!\"",
            "\"Salom, $ism!\"",
            "matn(Salom, ism)"
          ],
          "answer": 0,
          "explain": "Template literal ichida ${ifoda} yozilsa, ifoda natijasi matnga qo'shiladi."
        }
      ]
    },
    {
      "id": 3,
      "title": "Operatorlar va shart operatorlari",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Operatorlar qiymatlar ustida amal bajaradi: qo'shish, ayirish, taqqoslash va mantiqiy tekshirish. Shart operatori <code>if</code> esa dasturga qaror qabul qilish imkonini beradi."
        },
        {
          "type": "code",
          "title": "shartlar.js",
          "code": "const ball = 85;\n\nif (ball >= 90) {\n  console.log(\"A daraja\");\n} else if (ball >= 80) {\n  console.log(\"B daraja\");\n} else if (ball >= 70) {\n  console.log(\"C daraja\");\n} else {\n  console.log(\"Yana harakat qiling\");\n}\n\nconsole.log(10 % 3);\nconsole.log(Math.floor(17 / 5));",
          "output": "B daraja\n1\n3",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Python'dagi // JavaScript'da boshqacha",
          "html": "JavaScript'da butun bo'lish uchun <code>Math.floor(17 / 5)</code> yoziladi. <code>//</code> esa izoh boshlanishini bildiradi, shuning uchun <code>17 // 5</code> kodning qolgan qismini izohga aylantirib yuboradi."
        },
        {
          "type": "p",
          "html": "Taqqoslashda <code>===</code> dan foydalaning. U qiymat va turni birga tekshiradi. <code>==</code> esa turlarni avtomatik aylantirib yuborishi mumkin, shuning uchun kutilmagan natijalar chiqadi."
        },
        {
          "type": "code",
          "title": "taqqoslash.js",
          "code": "console.log(5 == \"5\");\nconsole.log(5 === \"5\");\nconsole.log(5 !== \"5\");\n\nconst yosh = 20;\nconst ruxsat = yosh >= 18 && yosh < 60;\nconsole.log(\"Ruxsat:\", ruxsat);\n\nconst holat = yosh >= 18 ? \"kattalar\" : \"bolalar\";\nconsole.log(holat);",
          "output": "true\nfalse\ntrue\nRuxsat: true\nkattalar",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Mantiqiy operatorlar",
          "html": "<code>&&</code> — VA (ikkalasi rost bo'lishi kerak), <code>||</code> — YOKI (bittasi rost bo'lsa yetarli), <code>!</code> — EMAS (rostni yolg'onga aylantiradi)."
        }
      ],
      "quiz": [
        {
          "q": "Qiymat va turni qat'iy tekshiruvchi operator qaysi?",
          "options": [
            "==",
            "=",
            "!=",
            "==="
          ],
          "answer": 3,
          "explain": "=== qiymat va turni birga tekshiradi; == esa turlarni aylantirib yuborishi mumkin."
        },
        {
          "q": "17 ni 5 ga bo'lganda butun qismini qaysi ifoda beradi?",
          "options": [
            "Math.floor(17 / 5)",
            "17 // 5",
            "17 % 5",
            "Math.round(17 / 5)"
          ],
          "answer": 0,
          "explain": "Math.floor(17 / 5) 3.4 ni 3 ga tushiradi. 17 % 5 esa qoldiqni (2) qaytaradi."
        },
        {
          "q": "yosh >= 18 && yosh < 60 ifodasi qachon true bo'ladi?",
          "options": [
            "Yosh 18 dan kichik bo'lsa",
            "Yosh 60 dan katta bo'lsa",
            "Yosh 18 yoki undan katta va 60 dan kichik bo'lsa",
            "Har doim"
          ],
          "answer": 2,
          "explain": "&& ikkala shartning ham rost bo'lishini talab qiladi."
        }
      ]
    },
    {
      "id": 4,
      "title": "Tsikllar: for va while",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Tsikl bir xil kodni bir necha marta bajaradi. <code>for</code> — takrorlar soni ma'lum bo'lganda, <code>while</code> — shartga bog'liq holda ishlatiladi."
        },
        {
          "type": "code",
          "title": "tsikl.js",
          "code": "for (let i = 1; i <= 5; i += 1) {\n  console.log(\"Qadam:\", i);\n}\n\nlet son = 3;\nwhile (son > 0) {\n  console.log(\"Qoldi:\", son);\n  son -= 1;\n}\n\nconsole.log(\"Tayyor!\");",
          "output": "Qadam: 1\nQadam: 2\nQadam: 3\nQadam: 4\nQadam: 5\nQoldi: 3\nQoldi: 2\nQoldi: 1\nTayyor!",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>let i = 1</code>",
              "Boshlang'ich qiymat — bir marta bajariladi"
            ],
            [
              "<code>i &lt;= 5</code>",
              "Har aylanishdan oldin tekshiriladigan shart"
            ],
            [
              "<code>i += 1</code>",
              "Har aylanishdan keyin bajariladigan qadam"
            ]
          ]
        },
        {
          "type": "p",
          "html": "<code>break</code> tsiklni butunlay to'xtatadi, <code>continue</code> esa joriy aylanishni o'tkazib yuborib, keyingisiga o'tadi."
        },
        {
          "type": "code",
          "title": "break-continue.js",
          "code": "for (let i = 1; i <= 10; i += 1) {\n  if (i === 3) continue;\n  if (i === 6) break;\n  console.log(i);\n}",
          "output": "1\n2\n4\n5",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Cheksiz tsikl",
          "html": "<code>while</code> ichida shartni o'zgartiradigan kod bo'lmasa, tsikl hech qachon tugamaydi. Brauzer qotib qolishi mumkin. Har doim shartning o'zgarishini tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "for tsiklining qaysi qismi har aylanishdan keyin bajariladi?",
          "options": [
            "Boshlang'ich qiymat",
            "Shart",
            "Qadam (i += 1)",
            "Tsikl tanasi"
          ],
          "answer": 2,
          "explain": "for (boshlanish; shart; qadam) tuzilishida qadam har aylanishdan keyin bajariladi."
        },
        {
          "q": "continue operatori nima qiladi?",
          "options": [
            "Tsiklni butunlay to'xtatadi",
            "Joriy aylanishni o'tkazib yuboradi",
            "Dasturni tugatadi",
            "Qaytadan boshlaydi"
          ],
          "answer": 1,
          "explain": "continue joriy aylanishning qolgan qismini o'tkazib yuborib, keyingi aylanishga o'tadi."
        },
        {
          "q": "Qaysi holatda while tsikli cheksiz davom etishi mumkin?",
          "options": [
            "Shart har doim false bo'lsa",
            "Shartni o'zgartiradigan kod bo'lmasa",
            "for ishlatilsa",
            "break yozilsa"
          ],
          "answer": 1,
          "explain": "Shart doim true bo'lib qolsa, tsikl tugamaydi. Shartni o'zgartirish yoki break ishlatish kerak."
        }
      ]
    },
    {
      "id": 5,
      "title": "Funksiyalar va arrow funksiyalar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya — nomlangan kod bloki. Uni bir marta yozib, kerak bo'lganda qayta chaqirasiz. Funksiya parametrlar qabul qiladi va <code>return</code> bilan natija qaytaradi."
        },
        {
          "type": "code",
          "title": "funksiya.js",
          "code": "function salomlash(ism) {\n  return \"Salom, \" + ism + \"!\";\n}\n\nfunction qosh(a, b) {\n  return a + b;\n}\n\nconsole.log(salomlash(\"Aziza\"));\nconsole.log(qosh(2, 3));\nconsole.log(qosh(10, 15));",
          "output": "Salom, Aziza!\n5\n25",
          "runnable": true
        },
        {
          "type": "p",
          "html": "Arrow funksiya — qisqaroq yozuv. Bir ifodadan iborat bo'lsa, <code>return</code> va jingalak qavslar tushirib qoldiriladi."
        },
        {
          "type": "code",
          "title": "arrow.js",
          "code": "const kvadrat = (n) => n * n;\nconst qosh = (a, b) => a + b;\nconst salomlash = (ism) => `Salom, ${ism}!`;\n\nconsole.log(kvadrat(6));\nconsole.log(qosh(4, 5));\nconsole.log(salomlash(\"Bek\"));",
          "output": "36\n9\nSalom, Bek!",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qachon qaysi biri?",
          "html": "Oddiy funksiya metodlar va e'lon qilishda o'qishli. Arrow funksiya kalit so'zsiz qisqa funksiyalar va <code>map</code>, <code>filter</code> kabi metodlarga juda qulay."
        },
        {
          "type": "code",
          "title": "default.js",
          "code": "function daraja(ball, yulduz = 5) {\n  return \"Ball: \" + ball + \", yulduz: \" + yulduz;\n}\n\nconsole.log(daraja(80));\nconsole.log(daraja(90, 4));",
          "output": "Ball: 80, yulduz: 5\nBall: 90, yulduz: 4",
          "runnable": true
        }
      ],
      "quiz": [
        {
          "q": "Funksiyadan qiymat qaytarish uchun nima ishlatiladi?",
          "options": [
            "print",
            "return",
            "give",
            "yield"
          ],
          "answer": 1,
          "explain": "return qiymatni funksiya natijasi sifatida qaytaradi."
        },
        {
          "q": "const kvadrat = (n) => n * n; yozuvida kvadrat(5) nima qaytaradi?",
          "options": [
            "10",
            "25",
            "5",
            "undefined"
          ],
          "answer": 1,
          "explain": "Arrow funksiya 5 * 5 = 25 ni qaytaradi."
        },
        {
          "q": "function daraja(ball, yulduz = 5) da daraja(80) chaqirilsa, yulduz nechaga teng bo'ladi?",
          "options": [
            "undefined",
            "0",
            "5",
            "Xato"
          ],
          "answer": 2,
          "explain": "Argument berilmasa, parametrning standart qiymati (5) ishlatiladi."
        }
      ]
    },
    {
      "id": 6,
      "title": "Massivlar va massiv metodlari",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Massiv — bir nechta qiymatni tartib bilan saqlaydigan ro'yxat. Indekslar <b>0</b> dan boshlanadi: birinchi element <code>ismlar[0]</code>."
        },
        {
          "type": "code",
          "title": "massiv.js",
          "code": "const ismlar = [\"Ali\", \"Aziza\", \"Bek\"];\n\nismlar.push(\"Dilnoza\");\nconsole.log(ismlar);\nconsole.log(ismlar[0]);\nconsole.log(ismlar.length);\n\nismlar[1] = \"Aziza N.\";\nconsole.log(ismlar);",
          "output": "[\"Ali\",\"Aziza\",\"Bek\",\"Dilnoza\"]\nAli\n4\n[\"Ali\",\"Aziza N.\",\"Bek\",\"Dilnoza\"]",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>push()</code>",
              "Oxiriga element qo'shadi"
            ],
            [
              "<code>pop()</code>",
              "Oxirgi elementni olib tashlaydi"
            ],
            [
              "<code>shift()</code>",
              "Birinchi elementni olib tashlaydi"
            ],
            [
              "<code>includes()</code>",
              "Element bor-yo'qligini tekshiradi"
            ],
            [
              "<code>indexOf()</code>",
              "Elementning indeksini topadi"
            ]
          ]
        },
        {
          "type": "p",
          "html": "<code>map</code> har bir elementni o'zgartirib, yangi massiv qaytaradi. <code>filter</code> esa shartga mos elementlarni tanlaydi. Ikkalasi ham asl massivni o'zgartirmaydi."
        },
        {
          "type": "code",
          "title": "map-filter.js",
          "code": "const sonlar = [1, 2, 3, 4, 5, 6];\n\nconst kvadratlar = sonlar.map((n) => n * n);\nconst juftlar = sonlar.filter((n) => n % 2 === 0);\nconst yigindi = sonlar.reduce((sum, n) => sum + n, 0);\n\nconsole.log(kvadratlar);\nconsole.log(juftlar);\nconsole.log(yigindi);",
          "output": "[1,4,9,16,25,36]\n[2,4,6]\n21",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "for...of",
          "html": "Massiv elementlarini oddiy tsikl bilan ko'rish uchun <code>for (const ism of ismlar) { console.log(ism); }</code> yozish mumkin. Bu indekslar bilan ovora bo'lmaslikka yordam beradi."
        }
      ],
      "quiz": [
        {
          "q": "Massivning birinchi elementi qaysi indeksda turadi?",
          "options": [
            "1",
            "-1",
            "0",
            "length"
          ],
          "answer": 2,
          "explain": "JavaScript massiv indekslari 0 dan boshlanadi."
        },
        {
          "q": "Har bir elementni o'zgartirib, yangi massiv qaytaruvchi metod qaysi?",
          "options": [
            "filter()",
            "push()",
            "find()",
            "map()"
          ],
          "answer": 3,
          "explain": "map() har bir element uchun funksiyani bajaradi va natijalardan yangi massiv yasaydi."
        },
        {
          "q": "[1, 2, 3, 4].filter((n) => n % 2 === 0) natijasi nima?",
          "options": [
            "[2,4]",
            "[1,3]",
            "[1,2,3,4]",
            "2"
          ],
          "answer": 0,
          "explain": "filter faqat shartga mos (juft) elementlarni qoldiradi."
        }
      ]
    },
    {
      "id": 7,
      "title": "Obyektlar va destructuring",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Obyekt — kalit va qiymat juftliklaridan iborat ma'lumot. U bitta narsa haqidagi turli ma'lumotlarni bir joyda saqlaydi: ism, yosh, kurs va hokazo."
        },
        {
          "type": "code",
          "title": "obyekt.js",
          "code": "const talaba = {\n  ism: \"Aziza\",\n  yosh: 16,\n  kurs: \"JavaScript\",\n  faol: true,\n};\n\nconsole.log(talaba.ism);\nconsole.log(talaba[\"kurs\"]);\n\ntalaba.yosh = 17;\ntalaba.ball = 92;\nconsole.log(talaba);",
          "output": "Aziza\nJavaScript\n{ ism: \"Aziza\", yosh: 17, kurs: \"JavaScript\", faol: true, ball: 92 }",
          "runnable": true
        },
        {
          "type": "p",
          "html": "Destructuring obyektdan qiymatlarni qisqa yo'l bilan ajratib olish usuli. Bu funksiyalar parametrlarida ayniqsa foydali."
        },
        {
          "type": "code",
          "title": "destructuring.js",
          "code": "const talaba = { ism: \"Bek\", yosh: 18, ball: 88 };\n\nconst { ism, ball } = talaba;\nconsole.log(ism, ball);\n\nfunction tanishtir({ ism, yosh }) {\n  return `${ism} — ${yosh} yosh`;\n}\n\nconsole.log(tanishtir(talaba));",
          "output": "Bek 88\nBek — 18 yosh",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Obyekt metodlari",
          "html": "Obyekt ichida funksiya ham saqlanishi mumkin. Unga <b>metod</b> deyiladi: <code>const hisob = { balans: 100, oshir(qiymat) { this.balans += qiymat; } };</code> Bu yerda <code>this</code> obyektning o'zini bildiradi."
        },
        {
          "type": "code",
          "title": "metod.js",
          "code": "const hisob = {\n  egasi: \"Aziza\",\n  balans: 100,\n  oshir(qiymat) {\n    this.balans += qiymat;\n    return this.balans;\n  },\n};\n\nconsole.log(hisob.oshir(50));\nconsole.log(hisob.balans);",
          "output": "150\n150",
          "runnable": true
        }
      ],
      "quiz": [
        {
          "q": "Obyekt xossasiga qanday murojaat qilinadi?",
          "options": [
            "talaba->ism",
            "talaba::ism",
            "talaba[ism]",
            "talaba.ism"
          ],
          "answer": 3,
          "explain": "Nuqta orqali: talaba.ism. Kvadrat qavsda kalit matn sifatida beriladi: talaba[\"ism\"]."
        },
        {
          "q": "const { ism } = talaba; yozuvi nima qiladi?",
          "options": [
            "talaba obyektidan ism xossasini ajratib oladi",
            "Yangi obyekt yaratadi",
            "ismni o'chiradi",
            "Obyektni massivga aylantiradi"
          ],
          "answer": 0,
          "explain": "Bu destructuring — obyektdan kerakli xossani qisqa yo'l bilan oladi."
        },
        {
          "q": "Obyekt metodi ichida joriy obyektga murojaat qilish uchun nima ishlatiladi?",
          "options": [
            "self",
            "obj",
            "this",
            "me"
          ],
          "answer": 2,
          "explain": "JavaScript'da metod ichida this joriy obyektni bildiradi."
        }
      ]
    },
    {
      "id": 8,
      "title": "DOM: sahifa bilan ishlash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "DOM (Document Object Model) — brauzerdagi HTML sahifaning dasturiy ko'rinishi. JavaScript DOM orqali elementlarni topadi, matnini o'zgartiradi, klass qo'shadi yoki olib tashlaydi."
        },
        {
          "type": "code",
          "title": "index.html",
          "code": "<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>DOM</title>\n</head>\n<body>\n  <h1 id=\"sarlavha\">Salom</h1>\n  <p class=\"matn\">Bu matn JavaScript bilan o'zgaradi.</p>\n  <button id=\"tugma\">Bosish</button>\n  <script>\n    const sarlavha = document.querySelector(\"#sarlavha\");\n    const tugma = document.querySelector(\"#tugma\");\n\n    tugma.addEventListener(\"click\", () => {\n      sarlavha.textContent = \"Tugma bosildi!\";\n      sarlavha.classList.toggle(\"faol\");\n    });\n  </script>\n</body>\n</html>",
          "outputLabel": "Natija",
          "output": "Sahifada “Salom” sarlavhasi va tugma chiqadi. Tugma bosilganda sarlavha “Tugma bosildi!” ga o'zgaradi.",
          "runnable": true
        },
        {
          "type": "ul",
          "items": [
            "<code>querySelector()</code> — CSS selektori bo'yicha birinchi elementni topadi.",
            "<code>querySelectorAll()</code> — barcha mos elementlarni ro'yxat qilib qaytaradi.",
            "<code>textContent</code> — element matnini o'qiydi yoki o'zgartiradi.",
            "<code>classList.add/remove/toggle</code> — CSS klasslarini boshqaradi.",
            "<code>style</code> — to'g'ridan-to'g'ri uslub berish uchun (kamroq tavsiya etiladi)."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Element hali mavjud bo'lmasa?",
          "html": "Skript HTML'dagi elementdan <b>oldin</b> ishga tushsa, element topilmaydi. Skriptni sahifa oxiriga qo'ying yoki <code>DOMContentLoaded</code> hodisasini kuting."
        },
        {
          "type": "code",
          "title": "royxat.html",
          "code": "<!DOCTYPE html>\n<html lang=\"uz\">\n<head><meta charset=\"UTF-8\"><title>Ro'yxat</title></head>\n<body>\n  <ul id=\"ismlar\"></ul>\n  <script>\n    const ismlar = [\"Ali\", \"Aziza\", \"Bek\"];\n    const royxat = document.querySelector(\"#ismlar\");\n\n    ismlar.forEach((ism) => {\n      const li = document.createElement(\"li\");\n      li.textContent = ism;\n      royxat.appendChild(li);\n    });\n  </script>\n</body>\n</html>",
          "outputLabel": "Natija",
          "output": "Sahifada Ali, Aziza va Bek nuqtali ro'yxat bo'lib chiqadi.",
          "runnable": true
        }
      ],
      "quiz": [
        {
          "q": "CSS selektori bo'yicha bitta elementni topish uchun nima ishlatiladi?",
          "options": [
            "document.getHtml()",
            "document.querySelector()",
            "document.find()",
            "document.select()"
          ],
          "answer": 1,
          "explain": "querySelector() CSS selektori bo'yicha birinchi mos elementni qaytaradi."
        },
        {
          "q": "Element matnini o'zgartirish uchun qaysi xossa ishlatiladi?",
          "options": [
            "textContent",
            "innerTextOnly",
            "valueText",
            "font"
          ],
          "answer": 0,
          "explain": "textContent element ichidagi matnni o'qiydi va o'zgartiradi."
        },
        {
          "q": "Tugma bosilishini tinglash uchun nima ishlatiladi?",
          "options": [
            "addEventListener(\"click\", ...)",
            "onPress()",
            "clickButton()",
            "listenClick()"
          ],
          "answer": 0,
          "explain": "addEventListener hodisa nomi va funksiya bilan bog'lanadi."
        }
      ]
    },
    {
      "id": 9,
      "title": "Formalar, input va validatsiya",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Formalar foydalanuvchidan ma'lumot olish uchun ishlatiladi. JavaScript yuborilishni to'xtatib, maydonlarni tekshirib, xabar ko'rsatishi mumkin."
        },
        {
          "type": "code",
          "title": "forma.html",
          "code": "<!DOCTYPE html>\n<html lang=\"uz\">\n<head><meta charset=\"UTF-8\"><title>Forma</title></head>\n<body>\n  <form id=\"forma\">\n    <label for=\"ism\">Ismingiz</label>\n    <input id=\"ism\" type=\"text\" placeholder=\"Ism kiriting\">\n    <button type=\"submit\">Yuborish</button>\n  </form>\n  <p id=\"natija\"></p>\n\n  <script>\n    const forma = document.querySelector(\"#forma\");\n    const ism = document.querySelector(\"#ism\");\n    const natija = document.querySelector(\"#natija\");\n\n    forma.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n      const qiymat = ism.value.trim();\n      if (qiymat.length < 3) {\n        natija.textContent = \"Ism kamida 3 harf bo'lishi kerak.\";\n        return;\n      }\n      natija.textContent = \"Salom, \" + qiymat + \"!\";\n      forma.reset();\n    });\n  </script>\n</body>\n</html>",
          "outputLabel": "Natija",
          "output": "Ism kiritilib “Yuborish” bosilsa, sahifada “Salom, <ism>!” chiqadi. 3 harfdan qisqa ism xato xabarini ko'rsatadi.",
          "runnable": true
        },
        {
          "type": "ul",
          "items": [
            "<code>input.value</code> — maydondagi joriy matn.",
            "<code>trim()</code> — bosh va oxirdagi bo'sh joylarni olib tashlaydi.",
            "<code>preventDefault()</code> — formaning sahifani yangilashini to'xtatadi.",
            "<code>form.reset()</code> — maydonlarni tozalaydi.",
            "<code>required</code>, <code>minlength</code> — brauzerning o'z tekshiruvlari."
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Foydalanuvchi kiritgan matnga ishonmang",
          "html": "Kiritilgan matnni <code>innerHTML</code> ga to'g'ridan-to'g'ri qo'ymang — bu XSS xavfiga olib kelishi mumkin. Matn uchun <code>textContent</code> ishlatilsin."
        },
        {
          "type": "code",
          "title": "email.js",
          "code": "const email = document.querySelector(\"#email\");\nconst xabar = document.querySelector(\"#xabar\");\n\nemail.addEventListener(\"input\", () => {\n  const qiymat = email.value.trim();\n  const togri = qiymat.includes(\"@\") && qiymat.includes(\".\");\n  xabar.textContent = togri ? \"Email to'g'ri\" : \"Email formati xato\";\n  email.classList.toggle(\"xato\", !togri);\n});",
          "output": "Maydonga “aziza@mail.uz” yozilsa, “Email to'g'ri” chiqadi. “aziza@mail” yozilsa, “Email formati xato” va qizil chegara ko'rinadi.",
          "runnable": false
        }
      ],
      "quiz": [
        {
          "q": "Formaning sahifani yangilashini qanday to'xtatamiz?",
          "options": [
            "event.stop()",
            "form.reset()",
            "return false",
            "event.preventDefault()"
          ],
          "answer": 3,
          "explain": "submit hodisasida event.preventDefault() standart yuborishni bekor qiladi."
        },
        {
          "q": "Kiritish maydonidagi matn qaysi xossada saqlanadi?",
          "options": [
            "input.value",
            "input.text",
            "input.content",
            "input.data"
          ],
          "answer": 0,
          "explain": "input.value maydondagi joriy qiymatni beradi."
        },
        {
          "q": "Foydalanuvchi matnini xavfsiz ko'rsatish uchun nima ishlatiladi?",
          "options": [
            "innerHTML",
            "eval()",
            "textContent",
            "document.write()"
          ],
          "answer": 2,
          "explain": "textContent matnni HTML sifatida talqin qilmaydi, shuning uchun XSS xavfini kamaytiradi."
        }
      ]
    },
    {
      "id": 10,
      "title": "JSON va localStorage",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "JSON — ma'lumotni matn ko'rinishida saqlash formati. Brauzerdagi <code>localStorage</code> esa sahifa yopilgandan keyin ham saqlanadigan kichik ombor."
        },
        {
          "type": "code",
          "title": "json.js",
          "code": "const talaba = { ism: \"Aziza\", yosh: 16, ball: 92 };\n\nconst matn = JSON.stringify(talaba);\nconsole.log(matn);\nconsole.log(typeof matn);\n\nconst qayta = JSON.parse(matn);\nconsole.log(qayta.ism);\nconsole.log(qayta.ball);",
          "output": "{\"ism\":\"Aziza\",\"yosh\":16,\"ball\":92}\nstring\nAziza\n92",
          "runnable": true
        },
        {
          "type": "p",
          "html": "<code>localStorage</code> faqat matn saqlaydi. Shuning uchun obyektni saqlashdan oldin <code>JSON.stringify()</code>, o'qishda esa <code>JSON.parse()</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "saqlash.js",
          "code": "const sozlamalar = { mavzu: \"qorong'i\", til: \"uz\" };\n\nlocalStorage.setItem(\"sozlamalar\", JSON.stringify(sozlamalar));\n\nconst saqlangan = localStorage.getItem(\"sozlamalar\");\nconsole.log(saqlangan);\n\nconst oqilgan = JSON.parse(saqlangan);\nconsole.log(oqilgan.mavzu);",
          "outputLabel": "Kutilgan natija",
          "output": "{\"mavzu\":\"qorong'i\",\"til\":\"uz\"}\nqorong'i",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xavfsizlik",
          "html": "localStorage'da parol, bank kartasi yoki maxfiy token saqlamang — unga sahifadagi har qanday skript kira oladi. U faqat qulaylik uchun mo'ljallangan."
        }
      ],
      "quiz": [
        {
          "q": "Obyektni JSON matniga aylantirish uchun nima ishlatiladi?",
          "options": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toText()",
            "String(object)"
          ],
          "answer": 1,
          "explain": "JSON.stringify() obyektni JSON matniga aylantiradi."
        },
        {
          "q": "JSON matnini JavaScript obyektiga aylantirish uchun nima ishlatiladi?",
          "options": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.object()",
            "eval()"
          ],
          "answer": 0,
          "explain": "JSON.parse() JSON matnini tahlil qilib, obyekt yoki massiv qaytaradi."
        },
        {
          "q": "localStorage qanday turdagi ma'lumot saqlaydi?",
          "options": [
            "Faqat obyekt",
            "Faqat son",
            "Matn (string)",
            "Fayl"
          ],
          "answer": 2,
          "explain": "localStorage qiymatlarni matn ko'rinishida saqlaydi; obyektlar JSON'ga aylantiriladi."
        }
      ]
    },
    {
      "id": 11,
      "title": "Asinxron JavaScript: Promise, async/await, fetch",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ba'zi ishlar darhol tugamaydi: internetdan javob kelishi, taymer yoki faylni o'qish vaqt oladi. Asinxron kod shu ishlar tugashini kutish imkonini beradi, boshqa ishlarni bloklamaydi."
        },
        {
          "type": "code",
          "title": "promise.js",
          "code": "function kechikish(ms) {\n  return new Promise((resolve) => {\n    setTimeout(resolve, ms);\n  });\n}\n\nasync function salom() {\n  console.log(\"Boshladik\");\n  await kechikish(500);\n  console.log(\"500 ms o'tdi\");\n}\n\nsalom();\nconsole.log(\"Bu darhol chiqadi\");",
          "outputLabel": "Kutilgan natija",
          "output": "Boshladik\nBu darhol chiqadi\n500 ms o'tdi",
          "runnable": false
        },
        {
          "type": "p",
          "html": "<code>async</code> funksiya har doim Promise qaytaradi. <code>await</code> esa Promise bajarilguncha kutadi. <code>fetch()</code> serverga so'rov yuborish uchun zamonaviy usul."
        },
        {
          "type": "code",
          "title": "fetch.js",
          "code": "async function mahsulotlar() {\n  try {\n    const javob = await fetch(\"https://api.example.com/mahsulotlar\");\n    if (!javob.ok) throw new Error(\"Server xatosi: \" + javob.status);\n    const data = await javob.json();\n    console.log(data);\n  } catch (xato) {\n    console.log(\"Yuklab bo'lmadi:\", xato.message);\n  }\n}\n\nmahsulotlar();",
          "outputLabel": "Kutilgan natija",
          "output": "Server javobi kelganda ma'lumotlar konsolga chiqadi. Xato bo'lsa, \"Yuklab bo'lmadi: ...\" xabari ko'rinadi.",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Nega bu misollar Namuna?",
          "html": "Ushbu misollar internet yoki taymerga bog'liq. Kurs muhiti xavfsiz sandboxda ishlaydi, shuning uchun ularni tashqi so'rovsiz ko'rib chiqing. O'z loyihangizda <code>fetch</code> ishlatishdan oldin API manzilini tekshiring."
        },
        {
          "type": "ul",
          "items": [
            "<b>Promise</b> — hozir emas, keyin tayyor bo'ladigan natija.",
            "<b>await</b> — Promise natijasini kutish.",
            "<b>try/catch</b> — asinxron xatolarni ushlash.",
            "<b>fetch</b> — HTTP so'rov yuborish."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Promise natijasini kutish uchun qaysi kalit so'z ishlatiladi?",
          "options": [
            "wait",
            "await",
            "pause",
            "sync"
          ],
          "answer": 1,
          "explain": "await faqat async funksiya ichida ishlatiladi va Promise bajarilishini kutadi."
        },
        {
          "q": "async funksiya qanday qiymat qaytaradi?",
          "options": [
            "Har doim Promise",
            "Har doim matn",
            "Har doim undefined",
            "Faqat son"
          ],
          "answer": 0,
          "explain": "async funksiyaning natijasi avtomatik Promise'ga o'raladi."
        },
        {
          "q": "fetch() bilan olingan JSON javobni qanday o'qiymiz?",
          "options": [
            "await javob.text()",
            "await javob.json()",
            "javob.parse()",
            "JSON(javob)"
          ],
          "answer": 1,
          "explain": "await javob.json() javob tanasini JavaScript obyektiga aylantiradi."
        }
      ]
    },
    {
      "id": 12,
      "title": "Mini loyiha: vazifalar ro'yxati",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi o'rganganlarimizni birlashtiramiz: massiv, obyekt, DOM, forma, localStorage va funksiyalar yordamida oddiy vazifalar ilovasini yasaymiz."
        },
        {
          "type": "code",
          "title": "index.html",
          "code": "<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Vazifalar</title>\n  <style>\n    body { font-family: sans-serif; max-width: 420px; margin: 40px auto; }\n    form { display: flex; gap: 8px; }\n    input { flex: 1; padding: 10px; }\n    button { padding: 10px 14px; }\n    li { margin: 8px 0; }\n    .bajarildi { text-decoration: line-through; color: #888; }\n  </style>\n</head>\n<body>\n  <h1>Vazifalar</h1>\n  <form id=\"forma\">\n    <input id=\"matn\" placeholder=\"Yangi vazifa\" autocomplete=\"off\">\n    <button type=\"submit\">Qo'shish</button>\n  </form>\n  <ul id=\"royxat\"></ul>\n\n  <script>\n    const forma = document.querySelector(\"#forma\");\n    const matn = document.querySelector(\"#matn\");\n    const royxat = document.querySelector(\"#royxat\");\n    let vazifalar = JSON.parse(localStorage.getItem(\"vazifalar\") || \"[]\");\n\n    function saqla() {\n      localStorage.setItem(\"vazifalar\", JSON.stringify(vazifalar));\n    }\n\n    function chiz() {\n      royxat.innerHTML = \"\";\n      vazifalar.forEach((vazifa, index) => {\n        const li = document.createElement(\"li\");\n        li.textContent = vazifa.nom + \" \";\n        li.classList.toggle(\"bajarildi\", vazifa.bajarildi);\n\n        const done = document.createElement(\"button\");\n        done.textContent = \"✓\";\n        done.addEventListener(\"click\", () => {\n          vazifalar[index].bajarildi = !vazifalar[index].bajarildi;\n          saqla();\n          chiz();\n        });\n\n        const remove = document.createElement(\"button\");\n        remove.textContent = \"×\";\n        remove.addEventListener(\"click\", () => {\n          vazifalar.splice(index, 1);\n          saqla();\n          chiz();\n        });\n\n        li.append(done, remove);\n        royxat.appendChild(li);\n      });\n    }\n\n    forma.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n      const nom = matn.value.trim();\n      if (!nom) return;\n      vazifalar.push({ nom: nom, bajarildi: false });\n      matn.value = \"\";\n      saqla();\n      chiz();\n    });\n\n    chiz();\n  </script>\n</body>\n</html>",
          "outputLabel": "Natija",
          "output": "Vazifa qo'shish, bajarilganini belgilash va o'chirish mumkin. Ma'lumotlar localStorage'da saqlanadi va sahifa yangilanganda ham qoladi.",
          "runnable": false
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Loyihani yaxshilang",
          "html": "O'zingiz qo'shib ko'ring: vazifalarni filtrlash (barchasi / bajarilgan / bajarilmagan), tahrirlash, sana qo'shish yoki qorong'i mavzu. Har bir qo'shimcha — yangi amaliyot."
        },
        {
          "type": "code",
          "title": "saqlash.js",
          "code": "function yukla() {\n  try {\n    return JSON.parse(localStorage.getItem(\"vazifalar\")) || [];\n  } catch (xato) {\n    console.log(\"Saqlangan ma'lumot buzilgan\");\n    return [];\n  }\n}\n\nfunction saqla(vazifalar) {\n  localStorage.setItem(\"vazifalar\", JSON.stringify(vazifalar));\n}\n\nconst namuna = [{ nom: \"Dars qilish\", bajarildi: false }];\nsaqla(namuna);\nconsole.log(yukla().length);\nconsole.log(yukla()[0].nom);",
          "output": "1\nDars qilish",
          "runnable": false
        },
        {
          "type": "ul",
          "items": [
            "Ma'lumot modeli: <code>{ nom, bajarildi }</code> obyektlari massivi.",
            "Saqlash: <code>localStorage</code> + JSON.",
            "Ko'rinish: <code>createElement</code> va <code>appendChild</code>.",
            "Hodisalar: forma <code>submit</code>, tugma <code>click</code>."
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Keyingi qadam",
          "html": "Bu loyiha asoslarni birlashtirdi. Oldinda tilning chuqur qismlari bor: scope, closure, <code>this</code>, classlar, modullar, regex, testlash va yana uch bosqichli kattaroq loyiha. Har bir dars oldingi bilim ustiga quriladi — shoshilmang."
        }
      ],
      "quiz": [
        {
          "q": "Loyihada vazifalar massivi qayerda saqlanadi?",
          "options": [
            "sessionStorage'da faqat",
            "localStorage'da JSON ko'rinishida",
            "Serverda",
            "CSS faylida"
          ],
          "answer": 1,
          "explain": "vazifalar massivi JSON.stringify orqali localStorage'ga yoziladi va JSON.parse bilan qayta o'qiladi."
        },
        {
          "q": "Yangi vazifa qo'shilganda massivga qaysi metod element qo'shadi?",
          "options": [
            "push()",
            "pop()",
            "map()",
            "join()"
          ],
          "answer": 0,
          "explain": "push() yangi elementni massiv oxiriga qo'shadi."
        },
        {
          "q": "Bosilgan tugma qaysi vazifaga tegishli ekanini bilish uchun loyihada nima ishlatildi?",
          "options": [
            "forEach indeksi",
            "CSS rangi",
            "Fayl nomi",
            "Math.random()"
          ],
          "answer": 0,
          "explain": "forEach((vazifa, index) => ...) indeks orqali tugma qaysi vazifaga tegishli ekanini aniqlaydi."
        }
      ]
    },
    {
      "id": 13,
      "title": "Scope, hoisting va TDZ",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Scope — o'zgaruvchi qayerdan ko'rinishini belgilaydigan doira. JavaScript'da uch daraja bor: <b>global</b> (butun skript), <b>funksiya</b> (funksiya ichi) va <b>blok</b> (jingalak qavslar ichi). <code>let</code> va <code>const</code> blok doirasida yashaydi, <code>var</code> esa funksiya doirasiga chiqib ketadi."
        },
        {
          "type": "code",
          "title": "scope.js",
          "code": "let tashqi = \"global\";\n\nfunction tekshir() {\n  let ichki = \"funksiya\";\n  if (true) {\n    let blok = \"blok\";\n    console.log(tashqi, ichki, blok);\n  }\n  console.log(typeof blok);\n}\n\ntekshir();",
          "output": "global funksiya blok\nundefined",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Kalit so'z",
            "Doira",
            "Qayta e'lon",
            "Hoisting"
          ],
          "rows": [
            [
              "<code>let</code>",
              "Blok",
              "Yo'q",
              "E'lon paytigacha TDZ"
            ],
            [
              "<code>const</code>",
              "Blok",
              "Yo'q",
              "E'lon paytigacha TDZ"
            ],
            [
              "<code>var</code>",
              "Funksiya",
              "Ha",
              "<code>undefined</code> bilan ko'tariladi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "hoisting.js",
          "code": "console.log(a);\nvar a = 1;\n\ntry {\n  console.log(b);\n  let b = 2;\n} catch (xato) {\n  console.log(xato.name);\n}\n\nsalom();\nfunction salom() {\n  console.log(\"Funksiya hoisting ishladi\");\n}",
          "output": "undefined\nReferenceError\nFunksiya hoisting ishladi",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "var'ni yangi kodda ishlatmang",
          "html": "Hoisting — e'lonlarni ko'tarish. <code>var</code> o'zgaruvchisi e'londan oldin ham mavjud bo'lib, <code>undefined</code> beradi. <code>let</code> va <code>const</code> esa <b>TDZ</b> (vaqtinchalik o'lik zona) tufayli e'londan oldin ishlatilsa <code>ReferenceError</code> beradi. Bu xatoni erta ushlashga yordam beradi."
        }
      ],
      "quiz": [
        {
          "q": "let bilan e'lon qilingan o'zgaruvchi qayerda ko'rinadi?",
          "options": [
            "Butun faylda",
            "Faqat funksiya ichida",
            "E'lon qilingan blokda va uning ichki bloklarida",
            "Faqat global obyektda"
          ],
          "answer": 2,
          "explain": "let va const blok doirasiga ega: ular qaysi jingalak qavs ichida e'lon qilinsa, shu blokda ko'rinadi."
        },
        {
          "q": "E'lon qilinishidan oldin var o'zgaruvchisini console.log qilsak nima chiqadi?",
          "options": [
            "undefined",
            "ReferenceError",
            "null",
            "0"
          ],
          "answer": 0,
          "explain": "var hoisting tufayli yuqoriga ko'tariladi, lekin qiymati hali berilmagani uchun undefined chiqadi."
        },
        {
          "q": "TDZ (vaqtinchalik o'lik zona) qaysi holatda xatolik beradi?",
          "options": [
            "var e'lon qilingandan keyin murojaat qilinsa",
            "let o'zgaruvchisiga e'lon qilinishidan oldin murojaat qilinsa",
            "const o'zgaruvchisi e'londan keyin o'qilsa",
            "Funksiya chaqirilganda"
          ],
          "answer": 1,
          "explain": "TDZ let/const e'loni bajarilgunga qadar davom etadi; bu vaqtda o'qish ReferenceError beradi."
        }
      ]
    },
    {
      "id": 14,
      "title": "Closures: funksiya xotirasi",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Closure</b> — funksiya o'zi yaratilgan tashqi doiradagi o'zgaruvchilarni eslab qolishi. Tashqi funksiya tugagandan keyin ham ichki o'zgaruvchilar yashab qoladi, chunki ularga murojaat qiladigan funksiya qaytarilgan. Bu holatni saqlashning eng toza usullaridan biri."
        },
        {
          "type": "code",
          "title": "hisoblagich.js",
          "code": "function hisoblagich() {\n  let soni = 0;\n  return function () {\n    soni += 1;\n    return soni;\n  };\n}\n\nconst inc = hisoblagich();\nconsole.log(inc(), inc(), inc());",
          "output": "1 2 3",
          "runnable": true
        },
        {
          "type": "p",
          "html": "Har <code>hisoblagich()</code> chaqirig'i o'z <code>soni</code>siga ega yangi closure yaratadi. Shuning uchun ikki hisoblagich bir-biriga ta'sir qilmaydi — bu holatni saqlashning xavfsiz usuli."
        },
        {
          "type": "code",
          "title": "mustaqil.js",
          "code": "function hisoblagich() {\n  let soni = 0;\n  return () => (soni += 1);\n}\n\nconst a = hisoblagich();\nconst b = hisoblagich();\nconsole.log(a(), a(), b());",
          "output": "1 2 1",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Closure qayerda foydali?",
          "html": "Hisoblagichlar, foydalanuvchi sozlamalari, funksiya fabrikalari, hodisa ishlovchilari va <b>private</b> holat uchun. Closure tufayli ma'lumotni global o'zgaruvchiga chiqarmasdan, funksiya ichida yashirib saqlash mumkin."
        },
        {
          "type": "table",
          "head": [
            "Foydalanish",
            "Misol"
          ],
          "rows": [
            [
              "Holatni saqlash",
              "Savatchadagi mahsulotlar soni"
            ],
            [
              "Private o'zgaruvchi",
              "Faqat metod orqali o'zgaradigan balans"
            ],
            [
              "Funksiya fabrikasi",
              "Tilga mos salomlashuv yaratish"
            ],
            [
              "Hodisa ishlovchisi",
              "Tugma bosilganda eski qiymatni eslab qolish"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "Closure nima?",
          "options": [
            "Funksiyani darhol chaqiradigan usul",
            "Massivni nusxalash operatori",
            "Funksiya tashqi doiradagi o'zgaruvchilarni eslab qolishi",
            "Xatoni ushlash bloki"
          ],
          "answer": 2,
          "explain": "Closure — funksiya va u yaratilgan muhitning birikmasi; funksiya tashqi o'zgaruvchilarga keyin ham murojaat qila oladi."
        },
        {
          "q": "const a = hisoblagich(); const b = hisoblagich(); console.log(a(), a(), b()); natijasi qanday?",
          "options": [
            "1 2 3",
            "1 2 1",
            "1 1 1",
            "0 1 2"
          ],
          "answer": 1,
          "explain": "Har hisoblagich alohida closure oladi: a ikki marta oshib 1 va 2 beradi, b esa o'z hisobini 1 dan boshlaydi."
        },
        {
          "q": "Closure qaysi muammoni hal qiladi?",
          "options": [
            "JSON matnini obyektga aylantiradi",
            "Global o'zgaruvchilarni tezlashtiradi",
            "Tsikl sonini kamaytiradi",
            "Ichki holatni tashqaridan yashirin saqlaydi"
          ],
          "answer": 3,
          "explain": "Closure yordamida o'zgaruvchi global bo'lmagan holda, faqat qaytarilgan funksiya orqali boshqariladi."
        }
      ]
    },
    {
      "id": 15,
      "title": "this: kontekstni tushunish",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<code>this</code> — funksiya bajarilayotgan paytdagi kontekst. Uning qiymati funksiya <b>qanday chaqirilganiga</b> bog'liq: obyekt metodi sifatida, oddiy funksiya sifatida yoki <code>call</code>, <code>apply</code>, <code>bind</code> orqali. Arrow funksiyada esa <code>this</code> umuman boshqacha aniqlanadi."
        },
        {
          "type": "code",
          "title": "metod.js",
          "code": "const talaba = {\n  ism: \"Aziza\",\n  salom() {\n    return \"Salom, \" + this.ism;\n  },\n};\n\nconsole.log(talaba.salom());\nconst bogliq = talaba.salom.bind(talaba);\nconsole.log(bogliq());",
          "output": "Salom, Aziza\nSalom, Aziza",
          "runnable": true
        },
        {
          "type": "ul",
          "items": [
            "<code>call(thisArg, a, b)</code> — funksiyani darhol chaqiradi, argumentlar alohida beriladi.",
            "<code>apply(thisArg, [a, b])</code> — darhol chaqiradi, argumentlar massivda beriladi.",
            "<code>bind(thisArg)</code> — chaqirmaydi, <code>this</code> bog'langan yangi funksiya qaytaradi.",
            "Metodni o'zgaruvchiga ajratsangiz, <code>this</code> yo'qoladi: <code>const f = talaba.salom; f()</code> noto'g'ri kontekstda ishlaydi, chunki <code>this</code> endi <code>talaba</code>ga bog'liq emas."
          ]
        },
        {
          "type": "code",
          "title": "call-apply.js",
          "code": "const hisob = { egasi: \"Bek\", balans: 100 };\n\nfunction oshir(qiymat) {\n  return this.balans + qiymat;\n}\n\nconsole.log(oshir.call(hisob, 50));\nconsole.log(oshir.apply(hisob, [25]));\n\nconst jamoa = {\n  nom: \"Noldan\",\n  azolar: [\"Ali\", \"Aziza\"],\n  chiqar() {\n    return this.azolar.map((ism) => this.nom + \": \" + ism).join(\" | \");\n  },\n};\nconsole.log(jamoa.chiqar());",
          "output": "150\n125\nNoldan: Ali | Noldan: Aziza",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Arrow funksiyada this boshqacha",
          "html": "Arrow funksiya o'z <code>this</code>iga ega emas — u <b>tashqi</b> (lexik) doiradagi <code>this</code>ni ishlatadi. Shu sababli obyekt metodi sifatida arrow yozish ko'pincha xato natija beradi. Metod uchun oddiy funksiya yoki qisqa metod sintaksisini tanlang."
        }
      ],
      "quiz": [
        {
          "q": "Oddiy funksiya obyekt metodi sifatida chaqirilganda this nimaga teng?",
          "options": [
            "Global obyektga",
            "Shu obyektga",
            "Doim undefined'ga",
            "Funksiyaning o'ziga"
          ],
          "answer": 1,
          "explain": "Metod chaqiruvida this chaqiruvchi obyektga teng bo'ladi: talaba.salom() ichida this — talaba."
        },
        {
          "q": "apply() call() dan nimasi bilan farq qiladi?",
          "options": [
            "this qiymatini umuman qabul qilmaydi",
            "Funksiyani darhol chaqirmaydi",
            "Argumentlarni massivda qabul qiladi",
            "Yangi funksiya qaytaradi"
          ],
          "answer": 2,
          "explain": "call argumentlarni Vergul bilan, apply esa bitta massiv sifatida oladi; ikkalasi ham darhol chaqiradi."
        },
        {
          "q": "Arrow funksiya ichidagi this qanday aniqlanadi?",
          "options": [
            "Tashqi (lexik) doiradan",
            "Chaqiruv joyidagi obyektdan",
            "Har doim window'dan",
            "Har doim undefined'dan"
          ],
          "answer": 0,
          "explain": "Arrow funksiya o'z this'ini yaratmaydi, u yaratilgan joydagi tashqi this'ni meros oladi."
        }
      ]
    },
    {
      "id": 16,
      "title": "Arrow va oddiy funksiyalar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Arrow funksiya qisqaroq yozuv beradi, lekin u oddiy funksiyaning <b>o'rnini to'liq bosmaydi</b>. Farqlar: arrow o'z <code>this</code>iga, <code>arguments</code> obyektiga va <code>prototype</code>iga ega emas; uni konstruktor sifatida <code>new</code> bilan chaqirib bo'lmaydi."
        },
        {
          "type": "code",
          "title": "arguments.js",
          "code": "function yigindi() {\n  return Array.from(arguments).reduce((sum, n) => sum + n, 0);\n}\n\nconst yigindi2 = (...sonlar) => sonlar.reduce((sum, n) => sum + n, 0);\nconsole.log(yigindi(1, 2, 3));\nconsole.log(yigindi2(4, 5, 6));",
          "output": "6\n15",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Xususiyat",
            "Oddiy funksiya",
            "Arrow funksiya"
          ],
          "rows": [
            [
              "<code>this</code>",
              "Chaqiruvga bog'liq",
              "Tashqi doiradan"
            ],
            [
              "<code>arguments</code>",
              "Bor",
              "Yo'q (rest ishlatiladi)"
            ],
            [
              "<code>new</code> bilan",
              "Mumkin",
              "Mumkin emas"
            ],
            [
              "Qisqa yozuv",
              "Yo'q",
              "Bor"
            ]
          ]
        },
        {
          "type": "code",
          "title": "konstruktor.js",
          "code": "const Shaxs = function (ism) {\n  this.ism = ism;\n};\nconst shaxs = new Shaxs(\"Aziza\");\nconsole.log(shaxs.ism);\n\nconst Strelka = (ism) => {\n  this.ism = ism;\n};\ntry {\n  new Strelka(\"Bek\");\n} catch (xato) {\n  console.log(xato.name);\n}",
          "output": "Aziza\nTypeError",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qaysi birini tanlash?",
          "html": "<b>Arrow</b> — <code>map</code>, <code>filter</code>, <code>setTimeout</code> kabi qisqa callback'lar va tashqi <code>this</code> kerak bo'lgan joylar uchun. <b>Oddiy funksiya</b> — obyekt metodi, konstruktor, <code>arguments</code> kerak bo'lgan yoki o'z <code>this</code>i muhim bo'lgan joylar uchun."
        }
      ],
      "quiz": [
        {
          "q": "Arrow funksiyada o'z arguments obyekti bormi?",
          "options": [
            "Ha, har doim",
            "Faqat strict mode'da",
            "Yo'q, tashqi funksiyaniki ishlatiladi",
            "Faqat parametrlar bilan"
          ],
          "answer": 2,
          "explain": "Arrow funksiyada arguments yo'q; ko'p argument kerak bo'lsa rest parametridan foydalaniladi."
        },
        {
          "q": "Qaysi funksiyani new bilan konstruktor qilib bo'lmaydi?",
          "options": [
            "Arrow funksiya",
            "Oddiy funksiya e'loni",
            "Function expression",
            "Class"
          ],
          "answer": 0,
          "explain": "Arrow funksiyada prototype va o'z this'i yo'q, shuning uchun new bilan chaqirilganda TypeError beradi."
        },
        {
          "q": "Metod ichida this kerak bo'lsa qaysi variant mos?",
          "options": [
            "Arrow funksiya",
            "Oddiy funksiya yoki qisqa metod sintaksisi",
            "IIFE",
            "Generator funksiya"
          ],
          "answer": 1,
          "explain": "Metod o'z this'iga ega bo'lishi kerak; buning uchun oddiy funksiya yoki obyekt ichidagi qisqa metod yozuvi ishlatiladi."
        }
      ]
    },
    {
      "id": 17,
      "title": "Destructuring chuqur",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Destructuring — massiv yoki obyektdan qiymatlarni <b>bitta yozuvda</b> ajratib olish. Uzun <code>talaba.ism</code>, <code>talaba.yosh</code> yozuvlari o'rniga kerakli maydonlarni bir qatorda olasiz. Obyektda nom bo'yicha, massivda tartib bo'yicha ajratiladi."
        },
        {
          "type": "code",
          "title": "obyekt.js",
          "code": "const foydalanuvchi = {\n  ism: \"Aziza\",\n  manzil: { shahar: \"Toshkent\", kod: 100000 },\n};\n\nconst { ism, manzil: { shahar }, yosh = 16 } = foydalanuvchi;\nconsole.log(ism, shahar, yosh);",
          "output": "Aziza Toshkent 16",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>const { ism } = obj</code>",
              "ism xossasini oladi"
            ],
            [
              "<code>const { ism: ismcha } = obj</code>",
              "Yangi nom beradi"
            ],
            [
              "<code>const { yosh = 16 } = obj</code>",
              "Qiymat <code>undefined</code> bo'lsa, default ishlatadi"
            ],
            [
              "<code>const { manzil: { shahar } } = obj</code>",
              "Ichki obyektni ochadi"
            ],
            [
              "<code>const [a, ...qolgan] = arr</code>",
              "Birinchi element va qolganlari"
            ]
          ]
        },
        {
          "type": "code",
          "title": "massiv.js",
          "code": "let a = 1;\nlet b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);\n\nconst [birinchi, ...qolganlar] = [10, 20, 30, 40];\nconsole.log(birinchi, qolganlar.length, qolganlar.join(\"-\"));",
          "output": "2 1\n10 3 20-30-40",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ko'p uchraydigan xatolar",
          "html": "Default qiymat faqat <code>undefined</code> uchun ishlaydi; <code>null</code> bo'lsa ishlamaydi. <code>null</code> yoki <code>undefined</code>ni destructuring qilish <code>TypeError</code> beradi. Funksiya parametrida xavfsiz variant: <code>function f({ ism } = {})</code>."
        }
      ],
      "quiz": [
        {
          "q": "const { yosh = 16 } = { yosh: undefined }; yosh nechaga teng?",
          "options": [
            "undefined",
            "16",
            "null",
            "Xato"
          ],
          "answer": 1,
          "explain": "Destructuring default'i faqat qiymat undefined bo'lganda qo'llanadi, shuning uchun yosh 16 bo'ladi."
        },
        {
          "q": "Obyekt xossasini boshqa nom bilan olish yozuvi qaysi?",
          "options": [
            "const { ism: ismcha } = talaba;",
            "const { ism as ismcha } = talaba;",
            "const { ism -> ismcha } = talaba;",
            "const [ism: ismcha] = talaba;"
          ],
          "answer": 0,
          "explain": "Obyekt destructuringida ikki nuqta yangi nom beradi: { eskiNom: yangiNom }."
        },
        {
          "q": "let a = 1; let b = 2; [a, b] = [b, a]; natijada a va b qanday bo'ladi?",
          "options": [
            "1 2",
            "2 2",
            "1 1",
            "2 1"
          ],
          "answer": 3,
          "explain": "Massiv destructuringi bilan qiymatlar joy almashadi: a 2, b 1 bo'ladi."
        }
      ]
    },
    {
      "id": 18,
      "title": "Spread va rest operatorlari",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Ikkala operator ham <code>...</code> bilan yoziladi, lekin vazifasi qarama-qarshi. <b>Spread</b> massiv yoki obyektni <b>yoyadi</b> (elementlarga ajratadi), <b>rest</b> esa bir nechta qiymatni <b>yig'adi</b> (massivga joylaydi)."
        },
        {
          "type": "code",
          "title": "spread.js",
          "code": "const a = [1, 2];\nconst b = [3, 4];\nconsole.log([...a, ...b].join(\",\"));\nconsole.log(Math.max(...a, ...b));",
          "output": "1,2,3,4\n4",
          "runnable": true
        },
        {
          "type": "code",
          "title": "obyekt.js",
          "code": "const asos = { til: \"JavaScript\", daraja: \"boshlovchi\" };\nconst yangilangan = { ...asos, daraja: \"o'rta\", yil: 2026 };\nconsole.log(JSON.stringify(yangilangan));\n\nconst { til, ...qolgan } = yangilangan;\nconsole.log(til);\nconsole.log(Object.keys(qolgan).join(\", \"));",
          "output": "{\"til\":\"JavaScript\",\"daraja\":\"o'rta\",\"yil\":2026}\nJavaScript\ndaraja, yil",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Sayoz nusxa",
          "html": "Spread obyektning faqat <b>yuqori qatlamini</b> nusxalaydi. Ichki obyektlar umumiy bo'lib qoladi: <code>const nusxa = { ...asl }</code> dan keyin <code>nusxa.manzil.shahar</code>ni o'zgartirsangiz, <code>asl</code> ham o'zgaradi. Chuqur nusxa uchun <code>structuredClone()</code> kerak."
        },
        {
          "type": "code",
          "title": "rest.js",
          "code": "function malumot(ism, ...baholar) {\n  const ortacha = baholar.reduce((s, n) => s + n, 0) / baholar.length;\n  return ism + \": \" + ortacha.toFixed(1);\n}\n\nconsole.log(malumot(\"Aziza\", 90, 80, 100));\nconsole.log(malumot(\"Bek\", 70));",
          "output": "Aziza: 90.0\nBek: 70.0",
          "runnable": true
        }
      ],
      "quiz": [
        {
          "q": "Spread operatori nima qiladi?",
          "options": [
            "Faqat massivlarni birlashtiradi",
            "Funksiya ichida qolgan argumentlarni yig'adi",
            "Massiv yoki obyekt elementlarini yoyadi",
            "Obyektni muzlatadi"
          ],
          "answer": 2,
          "explain": "Spread ... massiv elementlarini yoki obyekt xossalarini alohida qiymatlar sifatida yoyadi."
        },
        {
          "q": "Rest parametri parametrlar ro'yxatida qayerda turishi kerak?",
          "options": [
            "Parametrlar boshida",
            "Istalgan joyda",
            "Faqat arrow funksiyada",
            "Parametrlar oxirida"
          ],
          "answer": 3,
          "explain": "Rest qolgan barcha argumentlarni oladi, shuning uchun u har doim oxirgi parametr bo'lishi shart."
        },
        {
          "q": "const asos = { til: 'js' }; const yangi = { ...asos, til: 'ts' }; yangi.til nima?",
          "options": [
            "js",
            "ts",
            "undefined",
            "Xato"
          ],
          "answer": 1,
          "explain": "Keyin kelgan xossa oldingisini bosadi; til keyin 'ts' qilib berilgan."
        }
      ]
    },
    {
      "id": 19,
      "title": "Template literals chuqur",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Template literal — orqaga qiya belgi bilan yoziladigan matn. U uchta qulaylik beradi: ko'p qatorli matn, <code>${ifoda}</code> orqali qiymat qo'shish va <b>tagged template</b> yordamida matnni qayta ishlash."
        },
        {
          "type": "code",
          "title": "xabar.js",
          "code": "const ism = \"Aziza\";\nconst ballar = [90, 85, 92];\nconst ortacha = ballar.reduce((s, n) => s + n, 0) / ballar.length;\n\nconst xabar = `Talaba: ${ism}\nBall: ${ortacha.toFixed(1)}\nHolat: ${ortacha >= 85 ? \"a'lo\" : \"yaxshi\"}`;\n\nconsole.log(xabar);",
          "output": "Talaba: Aziza\nBall: 89.0\nHolat: a'lo",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ko'chirish va bo'sh joylar",
          "html": "Ko'p qatorli template literalda qator boshidagi bo'shliqlar ham matnga kiradi. Shuning uchun kodni chiroyli joylashtirish uchun qo'shilgan chekinishlar natijaga chiqib qolishi mumkin. Matn ichida backtick yozish uchun <code>\\`</code>, <code>${</code> belgisini oddiy matn sifatida yozish uchun <code>\\${</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "tagged.js",
          "code": "function xavfsiz(qismlar, ...qiymatlar) {\n  return qismlar.reduce((matn, qism, i) => {\n    const qiymat = qiymatlar[i] === undefined ? \"\" : String(qiymatlar[i]).toUpperCase();\n    return matn + qism + qiymat;\n  }, \"\");\n}\n\nconsole.log(xavfsiz`Salom, ${\"aziza\"}!`);",
          "output": "Salom, AZIZA!",
          "runnable": true
        },
        {
          "type": "ul",
          "items": [
            "<b>HTML shablonlari:</b> kichik ro'yxat yoki kartochka yasashda qulay.",
            "<b>Xato xabarlari:</b> qiymatlarni matnga chiroyli qo'shish.",
            "<b>Tagged template:</b> matnni tozalash, tarjima qilish yoki formatlash.",
            "<b>Ko'p qatorli matn:</b> uzun xabar yoki SQL so'rovini yozish."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Template literal ichida ifoda natijasini qo'shish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "#{ifoda}",
            "${ifoda}",
            "{{ifoda}}",
            "%ifoda%"
          ],
          "answer": 1,
          "explain": "Template literalda ${...} ichidagi ifoda bajariladi va natijasi matnga qo'shiladi."
        },
        {
          "q": "Template literal yordamida ko'p qatorli matn yozish mumkinmi?",
          "options": [
            "Ha, qatorlar orasidagi yangi qator saqlanadi",
            "Yo'q, faqat bitta qatorda yoziladi",
            "Faqat \\n belgisi bilan",
            "Faqat HTML ichida"
          ],
          "answer": 0,
          "explain": "Template literalda oddiy Enter bilan yozilgan har bir yangi qator matnning bir qismi bo'ladi."
        },
        {
          "q": "Tagged template funksiyasining birinchi argumenti nima bo'ladi?",
          "options": [
            "Birinchi o'zgaruvchining qiymati",
            "Funksiya nomi",
            "this obyekti",
            "Matn qismlari massivi"
          ],
          "answer": 3,
          "explain": "Tag funksiyasi birinchi argument sifatida statik matn qismlari massivini, keyin esa ifoda qiymatlarini oladi."
        }
      ]
    },
    {
      "id": 20,
      "title": "String metodlari amalda",
      "minutes": 13,
      "blocks": [
        {
          "type": "p",
          "html": "Matnlar bilan ishlash veb-dasturlashning katta qismi: qidiruv, forma tekshiruvi, chiroyli chiqarish. JavaScript'dagi stringlar <b>o'zgarmas</b> — har bir metod yangi matn qaytaradi, asl matn o'zgarmaydi."
        },
        {
          "type": "code",
          "title": "matn.js",
          "code": "const matn = \"  Noldan  \";\nconsole.log(`[${matn.trim()}]`);\nconsole.log(\"JavaScript\".slice(0, 4));\nconsole.log(\"JavaScript\".includes(\"Script\"));\nconsole.log(\"olma,anor,uzum\".split(\",\").join(\" | \"));\nconsole.log(\"7\".padStart(3, \"0\"));\nconsole.log(\"salom\".replace(\"s\", \"S\"));",
          "output": "[Noldan]\nJava\ntrue\nolma | anor | uzum\n007\nSalom",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>trim()</code>",
              "Bosh va oxirdagi bo'shliqlarni olib tashlaydi"
            ],
            [
              "<code>slice(start, end)</code>",
              "Matn bo'lagini oladi (manfiy indeks ham mumkin)"
            ],
            [
              "<code>includes()</code>",
              "Ichida matn bor-yo'qligini tekshiradi"
            ],
            [
              "<code>split()</code> / <code>join()</code>",
              "Matnni massivga va orqaga aylantiradi"
            ],
            [
              "<code>padStart()</code>",
              "Boshiga belgi qo'shib, uzunlikni to'ldiradi"
            ],
            [
              "<code>replace()</code> / <code>replaceAll()</code>",
              "Birinchi moslikni / barcha mosliklarni almashtiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "almashtirish.js",
          "code": "const izoh = \"Bu kurs juda foydali. Bu kurs bepul.\";\nconsole.log(izoh.replaceAll(\"Bu kurs\", \"U\"));\nconsole.log(izoh.toLowerCase().includes(\"bepul\"));\nconsole.log(izoh.slice(-6));",
          "output": "U juda foydali. U bepul.\ntrue\nbepul.",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Unicode va o'zgarmaslik",
          "html": "<code>length</code> UTF-16 birliklarini sanaydi, shuning uchun emoji ikki birlik sifatida ko'rinishi mumkin. Matnni solishtirishda <code>localeCompare()</code> foydali. Metodlar asl matnni o'zgartirmaydi: <code>const yangi = matn.trim()</code> natijani yangi o'zgaruvchiga oling."
        }
      ],
      "quiz": [
        {
          "q": "replaceAll() va replace() orasidagi farq nima?",
          "options": [
            "replaceAll faqat katta harflar bilan ishlaydi",
            "replace barcha mosliklarni almashtiradi",
            "replaceAll barcha mosliklarni, replace esa birinchisini almashtiradi",
            "Farqi yo'q"
          ],
          "answer": 2,
          "explain": "replace() matnda birinchi uchragan moslikni, replaceAll() esa barcha mosliklarni almashtiradi."
        },
        {
          "q": "trim() nima qiladi?",
          "options": [
            "Bosh va oxirdagi bo'shliqlarni olib tashlaydi",
            "Matnni kichik harflarga o'tkazadi",
            "Matnni massivga aylantiradi",
            "Birinchi harfni o'chiradi"
          ],
          "answer": 0,
          "explain": "trim() matnning boshidagi va oxiridagi bo'shliq belgilarini kesib tashlaydi, o'rtadagilarga tegmaydi."
        },
        {
          "q": "\"salom\".slice(-2) natijasi nima?",
          "options": [
            "sa",
            "om",
            "lo",
            "salom"
          ],
          "answer": 1,
          "explain": "Manfiy indeks oxirdan hisoblanadi: -2 oxirgi ikki harfni, ya'ni 'om'ni beradi."
        }
      ]
    },
    {
      "id": 21,
      "title": "Sonlar, Math va BigInt",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "JavaScript'da barcha oddiy sonlar <code>number</code> turiga kiradi — butun va kasr sonlar alohida tur emas. Ikkilik sanoq tizimidagi cheklov tufayli ba'zi kasrlar aniq saqlanmaydi. Pul va juda katta butun sonlarda bu jiddiy oqibatlarga olib kelishi mumkin."
        },
        {
          "type": "code",
          "title": "sonlar.js",
          "code": "console.log(0.1 + 0.2);\nconsole.log((0.1 + 0.2).toFixed(2));\nconsole.log(Number(\"42\") + 8);\nconsole.log(parseInt(\"42px\", 10));\nconsole.log(Number.isNaN(Number(\"salom\")));\nconsole.log(10 / 0);",
          "output": "0.30000000000000004\n0.30\n50\n42\ntrue\nInfinity",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Pulni kasr son bilan saqlamang",
          "html": "Pulni <b>tiyin</b>da butun son qilib saqlang yoki eng kichik birlikda hisoblang. <code>0.1 + 0.2 === 0.3</code> natijasi <code>false</code>. Taqqoslashda <code>Math.abs(a - b) &lt; 1e-9</code> kabi toleransdan foydalaning. <code>isNaN()</code> o'rniga <code>Number.isNaN()</code> afzal, chunki u turni majburan aylantirmaydi."
        },
        {
          "type": "code",
          "title": "math.js",
          "code": "console.log(Math.max(3, 9, 4));\nconsole.log(Math.min(...[5, 2, 8]));\nconsole.log(Math.round(2.5));\nconsole.log(Math.trunc(-4.7));\nconsole.log(2 ** 10);\nconsole.log((1234.5678).toFixed(1));",
          "output": "9\n2\n3\n-4\n1024\n1234.6",
          "runnable": true
        },
        {
          "type": "code",
          "title": "bigint.js",
          "code": "const katta = 9007199254740993n;\nconsole.log((katta + 1n).toString());\nconsole.log(typeof katta);\n\ntry {\n  console.log(katta + 1);\n} catch (xato) {\n  console.log(xato.name);\n}",
          "output": "9007199254740994\nbigint\nTypeError",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "BigInt qachon kerak?",
          "html": "<code>Number.MAX_SAFE_INTEGER</code> (9007199254740991) dan katta butun sonlar uchun <code>BigInt</code> ishlatiladi: <code>123n</code>. BigInt va oddiy sonni aralashtirib bo'lmaydi — avval bir turga o'tkazish kerak. BigInt'da kasr qism yo'q."
        }
      ],
      "quiz": [
        {
          "q": "0.1 + 0.2 ifodasining natijasi nima?",
          "options": [
            "0.3",
            "0.30000000000000004",
            "0.30",
            "NaN"
          ],
          "answer": 1,
          "explain": "Ikkilik kasrlar aniq ifodalanmagani uchun kichik xatolik yuzaga keladi: 0.30000000000000004."
        },
        {
          "q": "parseInt(\"42px\", 10) natijasi nima?",
          "options": [
            "NaN",
            "4",
            "42",
            "42px"
          ],
          "answer": 2,
          "explain": "parseInt boshidagi raqamlarni o'qiydi va harflar boshlanishida to'xtaydi; natija 42."
        },
        {
          "q": "1n + 1 ifodasi nima beradi?",
          "options": [
            "2n",
            "2",
            "NaN",
            "TypeError"
          ],
          "answer": 3,
          "explain": "BigInt va number aralashtirilmaydi; bunday amal TypeError beradi. 1n + 1n yozish kerak."
        }
      ]
    },
    {
      "id": 22,
      "title": "Massiv metodlari chuqur",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Massiv — eng ko'p ishlatiladigan tuzilma. Asosiy <code>map</code>, <code>filter</code>, <code>reduce</code>dan tashqari qidiruv, tekshiruv va tartiblash uchun yana bir nechta muhim metod bor. Ularni to'g'ri tanlash kodni qisqartiradi va niyatni aniq ifodalaydi."
        },
        {
          "type": "code",
          "title": "qidiruv.js",
          "code": "const sonlar = [5, 12, 8, 130, 44];\nconsole.log(sonlar.find((n) => n > 10));\nconsole.log(sonlar.findIndex((n) => n > 10));\nconsole.log(sonlar.some((n) => n < 0));\nconsole.log(sonlar.every((n) => n > 0));\nconsole.log(sonlar.at(-1));",
          "output": "12\n1\nfalse\ntrue\n44",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Natija"
          ],
          "rows": [
            [
              "<code>find()</code>",
              "Shartga mos birinchi element"
            ],
            [
              "<code>findIndex()</code>",
              "Shartga mos birinchi element indeksi"
            ],
            [
              "<code>some()</code>",
              "Kamida bittasi shartga mos bo'lsa <code>true</code>"
            ],
            [
              "<code>every()</code>",
              "Hammasi mos bo'lsagina <code>true</code>"
            ],
            [
              "<code>flat()</code> / <code>flatMap()</code>",
              "Ichki massivlarni tekislaydi"
            ],
            [
              "<code>at(-1)</code>",
              "Oxirgi elementni oladi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "tartiblash.js",
          "code": "const baholar = [75, 92, 60, 88];\nconsole.log([...baholar].sort((a, b) => a - b).join(\",\"));\nconsole.log([...baholar].sort((a, b) => b - a).join(\",\"));\nconsole.log([1, [2, [3, 4]]].flat(2).join(\"-\"));\nconsole.log(baholar.includes(88));",
          "output": "60,75,88,92\n92,88,75,60\n1-2-3-4\ntrue",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "sort() massivni o'zgartiradi",
          "html": "Standart <code>sort()</code> elementlarni <b>matn</b> sifatida solishtiradi: <code>[10, 9, 1].sort()</code> natijasi <code>[1, 10, 9]</code>. Raqamlar uchun <code>(a, b) =&gt; a - b</code> yozing. Asl massivni saqlash uchun avval <code>[...baholar]</code> bilan nusxa oling."
        },
        {
          "type": "ul",
          "items": [
            "<code>map</code>, <code>filter</code>, <code>slice</code> — yangi massiv qaytaradi.",
            "<code>push</code>, <code>pop</code>, <code>splice</code>, <code>sort</code>, <code>reverse</code> — asl massivni o'zgartiradi.",
            "<code>some</code> va <code>every</code> massiv bo'ylab to'liq yurmasdan natijani erta qaytarishi mumkin.",
            "Zanjir yozishda har bir qadam qanday tur qaytarishini kuzatib boring."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Massivdan shartga mos birinchi elementni qaytaruvchi metod qaysi?",
          "options": [
            "find()",
            "filter()",
            "map()",
            "some()"
          ],
          "answer": 0,
          "explain": "find() shartga mos birinchi elementni, filter() esa barcha mos elementlardan yangi massiv qaytaradi."
        },
        {
          "q": "[10, 9, 1].sort() natijasi qanday bo'ladi?",
          "options": [
            "[1, 9, 10]",
            "[10, 9, 1]",
            "[1, 10, 9]",
            "TypeError"
          ],
          "answer": 2,
          "explain": "Standart sort() matn bo'yicha solishtiradi: '1' < '10' < '9', shuning uchun [1, 10, 9] chiqadi."
        },
        {
          "q": "some() va every() orasidagi farq nima?",
          "options": [
            "some() barcha elementlarni tekshiradi, every() faqat bittasini",
            "some() kamida bittasi mos bo'lsa true, every() hammasi mos bo'lsa true qaytaradi",
            "Ikkalasi ham yangi massiv qaytaradi",
            "Farqi faqat tezlikda"
          ],
          "answer": 1,
          "explain": "some() mavjudlikni, every() esa umumiy moslikni tekshiradi; ikkalasi boolean qaytaradi."
        }
      ]
    },
    {
      "id": 23,
      "title": "Obyektlar: kalitlar va xavfsiz murojaat",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Obyektlar bilan ishlashda ko'pincha barcha kalitlarni ko'rish, qiymatlarni aylantirish yoki yo'q xossaga xavfsiz murojaat qilish kerak bo'ladi. <code>Object.keys/values/entries</code>, <code>Object.fromEntries</code>, optional chaining va nullish coalescing shu ishlar uchun."
        },
        {
          "type": "code",
          "title": "kalitlar.js",
          "code": "const talaba = { ism: \"Aziza\", yosh: 16, ball: 92 };\nconsole.log(Object.keys(talaba).join(\", \"));\nconsole.log(Object.values(talaba).join(\", \"));\nconsole.log(Object.entries(talaba).length);\nconsole.log(Object.hasOwn(talaba, \"ball\"));",
          "output": "ism, yosh, ball\nAziza, 16, 92\n3\ntrue",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>Object.keys(obj)</code>",
              "Kalitlar massivi"
            ],
            [
              "<code>Object.values(obj)</code>",
              "Qiymatlar massivi"
            ],
            [
              "<code>Object.entries(obj)</code>",
              "<code>[kalit, qiymat]</code> juftliklari"
            ],
            [
              "<code>Object.fromEntries(arr)</code>",
              "Juftliklardan obyekt yasaydi"
            ],
            [
              "<code>Object.freeze(obj)</code>",
              "Yuqori qatlamni o'zgartirishni taqiqlaydi"
            ],
            [
              "<code>Object.hasOwn(obj, key)</code>",
              "Xossa obyektning o'ziniki ekanini tekshiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "xavfsiz.js",
          "code": "const sozlama = { til: \"uz\", mavzu: { nom: \"qorong'i\" } };\nconsole.log(sozlama?.mavzu?.nom);\nconsole.log(sozlama?.foydalanuvchi?.ism ?? \"Mehmon\");\n\nconst kalit = \"yosh\";\nconst yangi = { ism: \"Bek\", [kalit]: 18 };\nconsole.log(JSON.stringify(yangi));",
          "output": "qorong'i\nMehmon\n{\"ism\":\"Bek\",\"yosh\":18}",
          "runnable": true
        },
        {
          "type": "code",
          "title": "entrylar.js",
          "code": "const narxlar = { olma: 12000, anor: 18000 };\nconst chek = Object.entries(narxlar)\n  .map(([nom, narx]) => nom + \": \" + narx)\n  .join(\"; \");\nconsole.log(chek);\n\nconst qayta = Object.fromEntries([[\"a\", 1], [\"b\", 2]]);\nconsole.log(qayta.b);",
          "output": "olma: 12000; anor: 18000\n2",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Nusxa va havola",
          "html": "Obyektni <code>const nusxa = asl</code> bilan tenglashtirsangiz, nusxa emas <b>havola</b> olasiz: bittasini o'zgartirsangiz, ikkalasi o'zgaradi. Yuza nusxa uchun <code>{ ...asl }</code>, chuqur nusxa uchun <code>structuredClone(asl)</code>. <code>Object.freeze()</code> faqat yuqori qatlamni muzlatadi."
        }
      ],
      "quiz": [
        {
          "q": "Object.entries() nima qaytaradi?",
          "options": [
            "Faqat kalitlar massivini",
            "Faqat qiymatlar massivini",
            "Obyektning matn ko'rinishini",
            "Kalit va qiymat juftliklari massivini"
          ],
          "answer": 3,
          "explain": "Object.entries() har bir xossa uchun [kalit, qiymat] ko'rinishidagi massivlar massivini qaytaradi."
        },
        {
          "q": "sozlama?.mavzu?.nom ifodasi mavzu bo'lmasa nima qaytaradi?",
          "options": [
            "undefined",
            "null",
            "Xato (TypeError)",
            "Bo'sh matn"
          ],
          "answer": 0,
          "explain": "Optional chaining zanjirning istalgan bo'g'ini null yoki undefined bo'lsa, xato bermasdan undefined qaytaradi."
        },
        {
          "q": "?? operatori || dan nimasi bilan farq qiladi?",
          "options": [
            "?? faqat raqamlar bilan ishlaydi",
            "?? mantiqiy EMAS vazifasini bajaradi",
            "?? faqat null va undefined bo'lsa o'ng qiymatni oladi",
            "Farqi yo'q"
          ],
          "answer": 2,
          "explain": "|| barcha falsey qiymatlarda (0, '', false) o'ng tomonga o'tadi; ?? faqat null va undefinedda."
        }
      ]
    },
    {
      "id": 24,
      "title": "Map va Set kolleksiyalari",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Obyekt va massiv har doim ham eng qulay tanlov emas. <b>Map</b> — kalitlari istalgan turdagi qiymat bo'lishi mumkin bo'lgan xarita; <b>Set</b> esa takrorlanmaydigan qiymatlar to'plami. Ikkalasi ham element qo'shilish tartibini saqlaydi."
        },
        {
          "type": "code",
          "title": "map.js",
          "code": "const narxlar = new Map();\nnarxlar.set(\"olma\", 12000);\nnarxlar.set(\"anor\", 18000);\nnarxlar.set(\"olma\", 13000);\n\nconsole.log(narxlar.size);\nconsole.log(narxlar.get(\"olma\"));\nconsole.log(narxlar.has(\"uzum\"));",
          "output": "2\n13000\nfalse",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Xususiyat",
            "Object",
            "Map"
          ],
          "rows": [
            [
              "Kalit turi",
              "Matn yoki symbol",
              "Istalgan tur"
            ],
            [
              "Elementlar soni",
              "Qo'lda hisoblanadi",
              "<code>size</code> xossasi"
            ],
            [
              "Tartib",
              "Murakkab qoidalar",
              "Qo'shilish tartibi"
            ],
            [
              "Ko'p marta yozish",
              "Oxirgi qiymat qoladi",
              "Oxirgi qiymat qoladi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "set.js",
          "code": "const sonlar = [1, 2, 2, 3, 3, 4];\nconst unikal = [...new Set(sonlar)];\nconsole.log(unikal.join(\", \"));\n\nconst ismlar = new Set([\"Ali\", \"Aziza\"]);\nismlar.add(\"Ali\");\nconsole.log(ismlar.size);\nfor (const ism of ismlar) {\n  console.log(ism);\n}",
          "output": "1, 2, 3, 4\n2\nAli\nAziza",
          "runnable": true
        },
        {
          "type": "code",
          "title": "aylanish.js",
          "code": "const sozlar = new Map([[\"bir\", 1], [\"ikki\", 2]]);\nfor (const [kalit, qiymat] of sozlar) {\n  console.log(kalit + \" = \" + qiymat);\n}\nconsole.log([...sozlar.keys()].join(\",\"));",
          "output": "bir = 1\nikki = 2\nbir,ikki",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qachon ishlatiladi?",
          "html": "Kalitlar matn emas (obyekt, son, funksiya) bo'lsa yoki tez-tez qo'shish/o'chirish kerak bo'lsa — <b>Map</b>. Takrorlarni olib tashlash, tegishlilikni tekshirish yoki unikal ro'yxat yasash — <b>Set</b>. JSON'ga aylantirish kerak bo'lsa, oddiy obyekt yoki massiv afzal."
        }
      ],
      "quiz": [
        {
          "q": "Map'ning obyektdan asosiy farqi nimada?",
          "options": [
            "Map faqat raqamlarni saqlaydi",
            "Map'ning kalitlari istalgan turdagi qiymat bo'lishi mumkin",
            "Map avtomatik JSON'ga aylanadi",
            "Map'da tartib saqlanmaydi"
          ],
          "answer": 1,
          "explain": "Map kalit sifatida obyekt, funksiya yoki sonni ham qabul qiladi; obyekt kalitlari esa matnga aylanadi."
        },
        {
          "q": "new Set([1, 2, 2, 3]).size natijasi nechaga teng?",
          "options": [
            "2",
            "3",
            "5",
            "4"
          ],
          "answer": 1,
          "explain": "Set takroriy qiymatlarni saqlamaydi: 1, 2, 3 qoladi, size 3 bo'ladi."
        },
        {
          "q": "Map'da mavjud bo'lmagan kalit bilan get() chaqirilsa nima qaytadi?",
          "options": [
            "null",
            "0",
            "Xato",
            "undefined"
          ],
          "answer": 3,
          "explain": "Map.get() topilmagan kalit uchun undefined qaytaradi; mavjudligini has() bilan tekshirish mumkin."
        }
      ]
    },
    {
      "id": 25,
      "title": "Classlar: zamonaviy OOP",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Class — bir xil tuzilishdagi obyektlar uchun shablon. U konstruktor, metodlar, getter/setter, statik metodlar va private maydonlarni bitta joyda jamlaydi. Class — prototip merosining qulay sintaksisi, butunlay boshqa mexanizm emas."
        },
        {
          "type": "code",
          "title": "talaba.js",
          "code": "class Talaba {\n  #ball = 0;\n\n  constructor(ism) {\n    this.ism = ism;\n  }\n\n  get ball() {\n    return this.#ball;\n  }\n\n  set ball(qiymat) {\n    if (qiymat < 0 || qiymat > 100) {\n      throw new RangeError(\"Ball 0-100 oralig'ida\");\n    }\n    this.#ball = qiymat;\n  }\n\n  get daraja() {\n    return this.#ball >= 90 ? \"A\" : \"B\";\n  }\n\n  static yarat(ism) {\n    return new Talaba(ism);\n  }\n}\n\nconst t = Talaba.yarat(\"Aziza\");\nt.ball = 92;\nconsole.log(`${t.ism}: ${t.ball} (${t.daraja})`);",
          "output": "Aziza: 92 (A)",
          "runnable": true
        },
        {
          "type": "ul",
          "items": [
            "<code>constructor</code> — <code>new</code> bilan obyekt yaratilganda ishlaydigan maxsus metod.",
            "<code>get</code> / <code>set</code> — xossaga murojaatni metod orqali boshqaradi.",
            "<code>static</code> — class'ning o'ziga tegishli metod, nusxaga emas.",
            "<code>#maydon</code> — class ichidagina ko'rinadigan private maydon.",
            "<code>instanceof</code> — obyekt shu class'dan yaratilganini tekshiradi."
          ]
        },
        {
          "type": "code",
          "title": "hisob.js",
          "code": "class Hisob {\n  #balans = 0;\n\n  oshir(summa) {\n    this.#balans += summa;\n    return this;\n  }\n\n  get balans() {\n    return this.#balans;\n  }\n}\n\nconst h = new Hisob();\nconsole.log(h.oshir(50).oshir(25).balans);\nconsole.log(h instanceof Hisob);\nconsole.log(typeof Hisob);",
          "output": "75\ntrue\nfunction",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Class e'loni TDZ'da bo'ladi",
          "html": "Class e'loni ham ko'tariladi, lekin <b>TDZ</b> tufayli e'lon qilinishidan oldin ishlatib bo'lmaydi. Class ichidagi kod avtomatik <b>strict mode</b>da bajariladi. Private maydonga tashqaridan <code>h.#balans</code> deb murojaat qilish <code>SyntaxError</code> beradi."
        }
      ],
      "quiz": [
        {
          "q": "Private maydon qanday e'lon qilinadi?",
          "options": [
            "private balans = 0;",
            "_balans = 0;",
            "#balans = 0;",
            "@balans = 0;"
          ],
          "answer": 2,
          "explain": "Private maydon nomi # bilan boshlanadi va faqat class ichidan murojaat qilinadi."
        },
        {
          "q": "Static metod qanday chaqiriladi?",
          "options": [
            "Talaba.yarat('Aziza') — class nomi orqali",
            "new Talaba().yarat('Aziza') — nusxa orqali",
            "static.yarat('Aziza')",
            "Talaba.prototype.yarat('Aziza')"
          ],
          "answer": 0,
          "explain": "Static metod class'ning o'ziga tegishli, shuning uchun class nomi orqali chaqiriladi."
        },
        {
          "q": "Getter va setter nima uchun ishlatiladi?",
          "options": [
            "Faqat kodni qisqartirish uchun",
            "Class'ni meros qilish uchun",
            "Metodlarni private qilish uchun",
            "Xossaga murojaatni nazorat qilish va tekshirish uchun"
          ],
          "answer": 3,
          "explain": "Getter/setter orqali qiymatni o'qish yoki yozish paytida tekshiruv va qo'shimcha mantiq qo'llanadi."
        }
      ]
    },
    {
      "id": 26,
      "title": "Meros va prototiplar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "JavaScript'da meros <b>prototip zanjiri</b> orqali ishlaydi: obyekt xossani o'zida topmasa, prototipida qidiradi. <code>class</code> va <code>extends</code> bu zanjirni qulay yozish usulidir. Meros umumiy xatti-harakatni takrorlamaslik uchun kerak."
        },
        {
          "type": "code",
          "title": "meros.js",
          "code": "class Hayvon {\n  constructor(nom) {\n    this.nom = nom;\n  }\n\n  ovoz() {\n    return \"...\";\n  }\n}\n\nclass Mushuk extends Hayvon {\n  constructor(nom, rang) {\n    super(nom);\n    this.rang = rang;\n  }\n\n  ovoz() {\n    return `${this.nom}: miyov`;\n  }\n}\n\nconst m = new Mushuk(\"Mosh\", \"oq\");\nconsole.log(m.ovoz());\nconsole.log(m instanceof Hayvon);\nconsole.log(Object.getPrototypeOf(Mushuk.prototype) === Hayvon.prototype);",
          "output": "Mosh: miyov\ntrue\ntrue",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>extends</code>",
              "Ota class'ni meros qiladi"
            ],
            [
              "<code>super(nom)</code>",
              "Ota class konstruktorini chaqiradi"
            ],
            [
              "Metodni qayta yozish",
              "Bola class o'z versiyasini beradi"
            ],
            [
              "<code>instanceof</code>",
              "Butun prototip zanjirini tekshiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "object-create.js",
          "code": "const shakl = {\n  turi: \"shakl\",\n  info() {\n    return this.turi;\n  },\n};\n\nconst doira = Object.create(shakl);\ndoira.turi = \"doira\";\n\nconsole.log(doira.info());\nconsole.log(\"turi\" in doira);\nconsole.log(Object.hasOwn(doira, \"turi\"));\nconsole.log(Object.hasOwn(doira, \"info\"));",
          "output": "doira\ntrue\ntrue\nfalse",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Merosni ortiqcha ishlatmang",
          "html": "Chuqur meros zanjiri kodni mo'rt qiladi. Ko'pincha <b>kompozitsiya</b> — obyektni boshqa obyekt ichida saqlash — soddaroq va moslashuvchan. <code>super()</code> bola konstruktorda <code>this</code> ishlatilishidan oldin chaqirilishi shart."
        }
      ],
      "quiz": [
        {
          "q": "Bola class konstruktorida super() ni qachon chaqirish kerak?",
          "options": [
            "this ishlatilgandan keyin",
            "this ishlatilishidan oldin",
            "Faqat class oxirida",
            "Chaqirish shart emas"
          ],
          "answer": 1,
          "explain": "super() ota konstruktorini bajaradi va this'ni tayyorlaydi; undan oldin this'ga murojaat xato beradi."
        },
        {
          "q": "instanceof operatori nimani tekshiradi?",
          "options": [
            "Obyekt prototip zanjirida shu class bor-yo'qligini",
            "Obyektning turi faqat 'object' ekanini",
            "Class nomi matn ekanini",
            "Funksiya async ekanini"
          ],
          "answer": 0,
          "explain": "instanceof obyektning prototip zanjirida ko'rsatilgan konstruktorning prototype'i borligini tekshiradi."
        },
        {
          "q": "Object.create(shakl) nima yaratadi?",
          "options": [
            "shaklning nusxasini",
            "shaklning massivini",
            "Prototipi shakl bo'lgan yangi bo'sh obyektni",
            "shaklni muzlatadi"
          ],
          "answer": 2,
          "explain": "Object.create(proto) berilgan obyektni prototip qilib oladigan yangi obyekt yaratadi."
        }
      ]
    },
    {
      "id": 27,
      "title": "Modullar: import va export",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Katta dasturni bitta faylda saqlash qiyin. <b>ES module</b> kodni alohida fayllarga bo'lib, kerakli qismini <code>import</code> va <code>export</code> orqali ulash imkonini beradi. Brauzerda modul skripti <code>type=\"module\"</code> bilan yuklanadi."
        },
        {
          "type": "code",
          "title": "math.js",
          "code": "export const PI = 3.14159;\n\nexport function doiraYuzasi(r) {\n  return PI * r * r;\n}\n\nexport default function salom(ism) {\n  return `Salom, ${ism}!`;\n}",
          "output": "Bu fayl yuklanganda konsolga hech narsa chiqarmaydi.\nTashqariga PI, doiraYuzasi (named) va salom (default) eksport qilinadi.",
          "runnable": false,
          "outputLabel": "Eksportlar"
        },
        {
          "type": "code",
          "title": "app.js",
          "code": "import salom, { PI, doiraYuzasi } from \"./math.js\";\n\nconsole.log(doiraYuzasi(2).toFixed(2));\nconsole.log(salom(\"Aziza\"));\nconsole.log(PI);",
          "output": "12.57\nSalom, Aziza!\n3.14159",
          "runnable": false,
          "outputLabel": "Konsol"
        },
        {
          "type": "ul",
          "items": [
            "<b>Named export:</b> <code>export const PI = ...</code> → <code>import { PI } from \"./math.js\"</code>.",
            "<b>Default export:</b> har faylda bitta → <code>import salom from \"./math.js\"</code>.",
            "<b>Hammasini olish:</b> <code>import * as math from \"./math.js\"</code>.",
            "<b>Nomini o'zgartirish:</b> <code>import { PI as pi } from \"./math.js\"</code>.",
            "<b>Dinamik import:</b> <code>const modul = await import(\"./math.js\")</code> — kerak bo'lganda yuklaydi."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Modul fayllari server orqali ochiladi",
          "html": "Modul <code>file://</code> protokolida ishlamaydi: brauzer CORS siyosati tufayli lokal faylni modul sifatida yuklashni bloklaydi. Vite, <code>npx serve</code> yoki boshqa lokal serverdan foydalaning. Modullar avtomatik <b>defer</b> bo'ladi va o'z doirasida ishlaydi."
        }
      ],
      "quiz": [
        {
          "q": "Default eksportni import qilishning to'g'ri yozuvi qaysi?",
          "options": [
            "import { salom } from \"./math.js\";",
            "import salom from \"./math.js\";",
            "import default salom from \"./math.js\";",
            "export salom from \"./math.js\";"
          ],
          "answer": 1,
          "explain": "Default eksport jingalak qavssiz import qilinadi va ixtiyoriy nom berilishi mumkin."
        },
        {
          "q": "Named eksportni import qilishda nima ishlatiladi?",
          "options": [
            "Qavssiz nom",
            "Faqat * belgisi",
            "Jingalak qavslar ichida nom",
            "default kalit so'zi"
          ],
          "answer": 2,
          "explain": "Named eksportlar { nom } ko'rinishida import qilinadi; nomlar fayldagi nom bilan mos bo'lishi kerak."
        },
        {
          "q": "Brauzerda modul skripti qanday ulangan bo'lishi kerak?",
          "options": [
            "<script type=\"module\" src=\"app.js\"></script>",
            "<script type=\"text/javascript\" src=\"app.js\"></script>",
            "<link rel=\"module\" href=\"app.js\">",
            "<script src=\"app.js\" defer=\"module\"></script>"
          ],
          "answer": 0,
          "explain": "Brauzer ES modul sintaksisini faqat type=\"module\" bo'lgan script tegida taniydi."
        }
      ]
    },
    {
      "id": 28,
      "title": "Iteratorlar va generatorlar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Iterator — qiymatlarni birma-bir beradigan obyekt. Uning <code>next()</code> metodi <code>{ value, done }</code> qaytaradi. <b>Generator</b> — <code>function*</code> bilan yoziladigan funksiya bo'lib, <code>yield</code>da to'xtab, keyin davom etadi. U katta yoki cheksiz ketma-ketliklarni dangasa hisoblash uchun qulay."
        },
        {
          "type": "code",
          "title": "generator.js",
          "code": "function* sonlar() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst gen = sonlar();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\nconsole.log([...sonlar()].join(\",\"));",
          "output": "1\n2\n1,2,3",
          "runnable": true
        },
        {
          "type": "code",
          "title": "iterable.js",
          "code": "function* cheksiz() {\n  let i = 1;\n  while (true) {\n    yield i;\n    i += 1;\n  }\n}\n\nconst g = cheksiz();\nconsole.log(g.next().value, g.next().value, g.next().value);\n\nconst juftlar = {\n  *[Symbol.iterator]() {\n    yield 2;\n    yield 4;\n    yield 6;\n  },\n};\nconsole.log([...juftlar].join(\" + \"));",
          "output": "1 2 3\n2 + 4 + 6",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Generatorlar qayerda foydali?",
          "html": "Katta faylni bo'laklab o'qish, sahifalab ma'lumot yuklash, cheksiz ketma-ketlik (ID, Fibonachchi) va murakkab holat mashinalari uchun. <code>for...of</code>, spread va destructuring iterator protokoli orqali ishlaydi."
        },
        {
          "type": "ul",
          "items": [
            "<code>yield</code> qiymat qaytaradi va funksiyani to'xtatadi.",
            "<code>next(arg)</code> to'xtagan joyga qiymat yuborishi mumkin: <code>const x = yield</code>.",
            "<code>return()</code> generatorni erta tugatadi.",
            "Oddiy massiv ko'pincha generatorga qaraganda soddaroq — faqat kerak bo'lganda ishlating."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Generator ichida yield nima qiladi?",
          "options": [
            "Funksiyani butunlay tugatadi",
            "Qiymat qaytaradi va funksiyani vaqtincha to'xtatadi",
            "Faqat xato chiqaradi",
            "Massiv yaratadi"
          ],
          "answer": 1,
          "explain": "yield qiymatni tashqariga beradi va keyingi next() chaqirilguncha bajarilishni to'xtatib turadi."
        },
        {
          "q": "Generator funksiyasini chaqirganda darhol nima qaytadi?",
          "options": [
            "Birinchi yield qiymati",
            "Promise",
            "Massiv",
            "Iterator obyekti"
          ],
          "answer": 3,
          "explain": "Generator chaqirilganda tana bajarilmaydi; next() metodi bor iterator obyekti qaytadi."
        },
        {
          "q": "for...of massiv ustida ishlashda qaysi protokoldan foydalanadi?",
          "options": [
            "Symbol.iterator",
            "JSON.parse",
            "toString",
            "valueOf"
          ],
          "answer": 0,
          "explain": "for...of obyektning Symbol.iterator metodini chaqirib, iterator qiymatlarini ketma-ket oladi."
        }
      ]
    },
    {
      "id": 29,
      "title": "Regular expressions asoslari",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Regular expression (regex) — matndan naqsh bo'yicha qidirish, tekshirish va almashtirish vositasi. U kuchli, lekin murakkab naqshlar o'qish qiyin va xatoga moyil. Oddiy <code>includes</code> yetadigan joyda regex ishlatmang."
        },
        {
          "type": "code",
          "title": "email.js",
          "code": "const email = /^[^\\s@]+@[^\\s@]+\\.[a-z]{2,}$/i;\n\nconsole.log(email.test(\"ali@mail.uz\"));\nconsole.log(email.test(\"ali@mail\"));\nconsole.log(email.test(\"ali mail@uz\"));",
          "output": "true\nfalse\nfalse",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Belgi / flag",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>^</code> / <code>$</code>",
              "Matn boshi / oxiri"
            ],
            [
              "<code>\\d</code> / <code>\\w</code> / <code>\\s</code>",
              "Raqam / harf-raqam / bo'shliq"
            ],
            [
              "<code>+</code> / <code>*</code> / <code>?</code>",
              "Bir yoki ko'p / nol yoki ko'p / ixtiyoriy"
            ],
            [
              "<code>{2,}</code>",
              "Kamida 2 marta takror"
            ],
            [
              "<code>/g</code> / <code>/i</code>",
              "Barcha mosliklar / katta-kichik harfni ajratmaslik"
            ]
          ]
        },
        {
          "type": "code",
          "title": "almashtirish.js",
          "code": "const sana = \"2026-10-23\";\nconsole.log(sana.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, \"$3.$2.$1\"));\n\nconst natija = \"narx: 12000 so'm\".match(/(?<qiymat>\\d+)/);\nconsole.log(natija.groups.qiymat);\n\nconsole.log(\"a1b2c3\".replace(/\\d/g, \"#\"));",
          "output": "23.10.2026\n12000\na#b#c#",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xavfsizlik va unumdorlik",
          "html": "Regex bilan foydalanuvchi matnini <b>tozalash</b> uchun HTML teglarini o'chirishga urinmang — to'liq himoya bermaydi. XSS uchun <code>textContent</code> yoki ishonchli sanitizer ishlatilsin. <code>/g</code> bilan <code>test()</code> ishlatilsa, regex <code>lastIndex</code>ni eslab qoladi; yangi regex yaratish xavfsizroq."
        }
      ],
      "quiz": [
        {
          "q": "/i flagi nimani bildiradi?",
          "options": [
            "Barcha mosliklarni topadi",
            "Ko'p qatorli rejimni yoqadi",
            "Katta-kichik harfni ajratmaydi",
            "Faqat raqamlarni qidiradi"
          ],
          "answer": 2,
          "explain": "i (insensitive) flagi qidiruvda A va a ni bir xil deb qabul qiladi."
        },
        {
          "q": "RegExp.test() qanday turdagi qiymat qaytaradi?",
          "options": [
            "boolean",
            "string",
            "massiv",
            "number"
          ],
          "answer": 0,
          "explain": "test() moslik bor-yo'qligini true yoki false ko'rinishida qaytaradi."
        },
        {
          "q": "Named capture group qiymatiga qanday murojaat qilinadi?",
          "options": [
            "natija[0].qiymat",
            "natija.groups.qiymat",
            "natija.qiymat()",
            "natija.capture('qiymat')"
          ],
          "answer": 1,
          "explain": "match() natijasidagi groups obyektida nomlangan guruhlar kalit bo'yicha saqlanadi."
        }
      ]
    },
    {
      "id": 30,
      "title": "Sanalar va Intl",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "<code>Date</code> obyekti sana va vaqtni millisekund aniqligida saqlaydi. Ichkarida bu <b>Unix epoch</b> — 1970-yil 1-yanvardan o'tgan millisekundlar soni. Sanalarni hisoblashda vaqt zonasi va oy indeksi (0 dan boshlanadi) eng ko'p xatoga sabab bo'ladi."
        },
        {
          "type": "code",
          "title": "sanalar.js",
          "code": "const tugilgan = new Date(Date.UTC(2010, 4, 15));\nconsole.log(tugilgan.toISOString());\nconsole.log(tugilgan.getUTCFullYear());\n\nconst boshlanish = new Date(Date.UTC(2026, 0, 1));\nconst tugash = new Date(Date.UTC(2026, 0, 31));\nconsole.log((tugash - boshlanish) / 86400000);",
          "output": "2010-05-15T00:00:00.000Z\n2010\n30",
          "runnable": true
        },
        {
          "type": "code",
          "title": "intl.js",
          "code": "console.log(new Intl.NumberFormat(\"en-US\").format(1250000));\n\nconst sana = new Date(\"2026-10-23T00:00:00Z\");\nconsole.log(sana.toISOString().slice(0, 10));\nconsole.log(sana.toISOString().slice(0, 7));",
          "output": "1,250,000\n2026-10-23\n2026-10",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Sana bilan ishlashning tuzoqlari",
          "html": "Oy indeksi <b>0</b> dan boshlanadi: <code>0</code> — yanvar, <code>11</code> — dekabr. <code>Date</code> obyektlari o'zgaruvchan: <code>setMonth()</code> asl obyektni o'zgartiradi. Server bilan almashishda <b>ISO 8601</b> (<code>toISOString()</code>) ishlatilsin. HTML input uchun qiymat formati <code>YYYY-MM-DD</code>."
        },
        {
          "type": "ul",
          "items": [
            "<code>Date.now()</code> — hozirgi vaqtning millisekunddagi qiymati.",
            "<code>new Date(ms)</code> — millisekunddan sana yasaydi.",
            "<code>getTime()</code> — sanani millisekundga aylantiradi.",
            "<code>Intl.DateTimeFormat</code> — til va mintaqaga mos format beradi.",
            "<code>Intl.NumberFormat</code> — sonlarni valyuta yoki mingliklar bilan formatlaydi."
          ]
        }
      ],
      "quiz": [
        {
          "q": "new Date(2026, 0, 15) qaysi oyni bildiradi?",
          "options": [
            "Yanvar",
            "Fevral",
            "Dekabr",
            "Xato beradi"
          ],
          "answer": 0,
          "explain": "Date konstruktorida oy indeksi 0 dan boshlanadi, shuning uchun 0 — yanvar."
        },
        {
          "q": "Date.now() qanday birlikda qiymat qaytaradi?",
          "options": [
            "Sekund",
            "Kun",
            "Millisekund",
            "Soat"
          ],
          "answer": 2,
          "explain": "Date.now() 1970-yildan o'tgan millisekundlar sonini qaytaradi."
        },
        {
          "q": "Sanalar bilan ishlashda qaysi amal asl obyektni o'zgartiradi?",
          "options": [
            "toISOString()",
            "getTime()",
            "toLocaleDateString()",
            "setMonth()"
          ],
          "answer": 3,
          "explain": "setMonth() kabi setter metodlar Date obyektining o'zini o'zgartiradi; formatlash metodlari esa o'zgartirmaydi."
        }
      ]
    },
    {
      "id": 31,
      "title": "Xatolar bilan ishlash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Xato — dasturning normal qismi. Muhimi: uni <b>jimgina yutib yubormaslik</b> va foydalanuvchiga tushunarli xabar berish. <code>try</code> ichida xavfli kod bajariladi, <code>catch</code> xatoni ushlaydi, <code>finally</code> esa har qanday holatda bajariladi."
        },
        {
          "type": "code",
          "title": "bolish.js",
          "code": "function bolish(a, b) {\n  if (b === 0) {\n    throw new RangeError(\"Nolga bo'lib bo'lmaydi\");\n  }\n  return a / b;\n}\n\ntry {\n  console.log(bolish(10, 2));\n  console.log(bolish(5, 0));\n} catch (xato) {\n  console.log(xato.name + \": \" + xato.message);\n} finally {\n  console.log(\"Tekshiruv tugadi\");\n}",
          "output": "5\nRangeError: Nolga bo'lib bo'lmaydi\nTekshiruv tugadi",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Xato turi",
            "Qachon uchraydi"
          ],
          "rows": [
            [
              "<code>SyntaxError</code>",
              "Kod sintaksisi noto'g'ri"
            ],
            [
              "<code>ReferenceError</code>",
              "Mavjud bo'lmagan o'zgaruvchiga murojaat"
            ],
            [
              "<code>TypeError</code>",
              "Noto'g'ri turdagi qiymat yoki metod"
            ],
            [
              "<code>RangeError</code>",
              "Qiymat ruxsat etilgan oraliqdan tashqarida"
            ]
          ]
        },
        {
          "type": "code",
          "title": "custom-error.js",
          "code": "class ValidatsiyaXatosi extends Error {\n  constructor(maydon) {\n    super(maydon + \" noto'g'ri\");\n    this.name = \"ValidatsiyaXatosi\";\n    this.maydon = maydon;\n  }\n}\n\ntry {\n  throw new ValidatsiyaXatosi(\"email\");\n} catch (xato) {\n  console.log(xato.name);\n  console.log(xato.message);\n  console.log(xato instanceof Error);\n}",
          "output": "ValidatsiyaXatosi\nemail noto'g'ri\ntrue",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xatoni yutib yubormang",
          "html": "Bo'sh <code>catch {}</code> xatoni yashiradi va sababni topishni qiyinlashtiradi. Hech bo'lmasa log yozing yoki qayta tashlang. <code>throw \"xato\"</code> o'rniga <code>new Error(\"xato\")</code> ishlating — unda <code>message</code> va <code>stack</code> bor. Boshqa xatoni qayta ishlash uchun <code>cause</code> parametridan foydalaning: <code>new Error(\"Yuklash\", { cause: xato })</code>."
        },
        {
          "type": "ul",
          "items": [
            "Faqat <b>kutilayotgan</b> xatoni ushlang; dasturchi xatosini yashirmang.",
            "Foydalanuvchiga texnik stack emas, tushunarli xabar ko'rsating.",
            "Resursni tozalash (taymer, ulanish) uchun <code>finally</code> ishlating.",
            "Async funksiyada <code>try/catch</code> yoki <code>.catch()</code> ishlatilishini tekshiring."
          ]
        }
      ],
      "quiz": [
        {
          "q": "try/catch/finally da finally bloki qachon bajariladi?",
          "options": [
            "Faqat xato bo'lsa",
            "Faqat xato bo'lmasa",
            "Har qanday holatda",
            "Hech qachon"
          ],
          "answer": 2,
          "explain": "finally try ichida xato bo'lishi yoki bo'lmasligidan qat'i nazar bajariladi."
        },
        {
          "q": "Maxsus xato class'i yaratishda nimadan meros olish kerak?",
          "options": [
            "Object",
            "Error",
            "Promise",
            "Function"
          ],
          "answer": 1,
          "explain": "Maxsus xato Error'dan meros oladi; shunda message, name va stack kabi xossalar saqlanadi."
        },
        {
          "q": "Nega throw \"xato\" o'rniga new Error(\"xato\") ishlatiladi?",
          "options": [
            "Error tezroq ishlaydi",
            "Matn bilan throw umuman ishlamaydi",
            "Error avtomatik try/catch yaratadi",
            "Error'da message, name va stack kabi foydali ma'lumot bo'ladi"
          ],
          "answer": 3,
          "explain": "Error obyekti xato haqida tuzilgan ma'lumot beradi; oddiy matnda stack va turni aniqlash qiyin."
        }
      ]
    },
    {
      "id": 32,
      "title": "JSON chuqur va structuredClone",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "JSON — ma'lumot almashishning universal matn formati. U faqat obyekt, massiv, matn, son, boolean va <code>null</code>ni biladi. <code>JSON.stringify()</code> JavaScript qiymatini matnga, <code>JSON.parse()</code> esa matnni qiymatga aylantiradi."
        },
        {
          "type": "code",
          "title": "parse.js",
          "code": "const matn = '{\"ism\":\"Aziza\",\"yosh\":16,\"faol\":true}';\nconst odam = JSON.parse(matn);\nconsole.log(odam.ism, typeof odam.yosh);\n\nconst chiroyli = JSON.stringify(odam, null, 2);\nconsole.log(chiroyli.split(\"\\n\").length);\nconsole.log(JSON.stringify({ sana: new Date(\"2026-01-01T00:00:00Z\") }));",
          "output": "Aziza number\n5\n{\"sana\":\"2026-01-01T00:00:00.000Z\"}",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "JavaScript qiymati",
            "JSON natijasi"
          ],
          "rows": [
            [
              "<code>undefined</code>, funksiya",
              "Obyektdan tushib qoladi"
            ],
            [
              "<code>Date</code>",
              "ISO formatidagi matn"
            ],
            [
              "<code>Map</code>, <code>Set</code>",
              "<code>{}</code> bo'lib qoladi"
            ],
            [
              "<code>NaN</code>, <code>Infinity</code>",
              "<code>null</code>"
            ],
            [
              "Aylanma havola",
              "<code>TypeError</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "clone.js",
          "code": "const asl = { ism: \"Bek\", sozlama: { mavzu: \"yorug'\" } };\nconst sayoz = { ...asl };\nsayoz.sozlama.mavzu = \"qorong'i\";\nconsole.log(asl.sozlama.mavzu);\n\nconst chuqur = structuredClone(asl);\nchuqur.sozlama.mavzu = \"ko'k\";\nconsole.log(asl.sozlama.mavzu, chuqur.sozlama.mavzu);",
          "output": "qorong'i\nqorong'i ko'k",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Date qaytib kelganda matn bo'ladi",
          "html": "JSON orqali saqlangan <code>Date</code> qayta o'qilganda <b>string</b> bo'ladi. Uni <code>new Date(qiymat)</code> bilan tiklash kerak. Date va Map kabi murakkab turlarni saqlash kerak bo'lsa <code>structuredClone()</code> yoki maxsus serializatsiya ishlatiladi. JSON'da izoh va verguldan keyingi ortiqcha vergul bo'lmaydi."
        },
        {
          "type": "ul",
          "items": [
            "<code>JSON.stringify(qiymat, null, 2)</code> — chiroyli format.",
            "<code>JSON.parse(matn, reviver)</code> — qiymatlarni o'qish paytida o'zgartirish.",
            "<code>JSON.stringify(qiymat, replacer)</code> — kerakli maydonlarni tanlash.",
            "<code>structuredClone(qiymat)</code> — Date va Map'ni ham to'g'ri ko'chiradi."
          ]
        }
      ],
      "quiz": [
        {
          "q": "JSON.parse() qanday qiymat qaytaradi?",
          "options": [
            "Matn",
            "Obyekt yoki massiv",
            "Har doim boolean",
            "Promise"
          ],
          "answer": 1,
          "explain": "JSON.parse() JSON matnini tahlil qilib, mos JavaScript obyekti yoki massivini qaytaradi."
        },
        {
          "q": "Obyektda aylanma havola bo'lsa JSON.stringify() nima qiladi?",
          "options": [
            "Cheksiz matn yasaydi",
            "Aylanmani null qiladi",
            "TypeError tashlaydi",
            "Obyektni o'chiradi"
          ],
          "answer": 2,
          "explain": "JSON aylanma tuzilmani ifodalay olmaydi, shuning uchun stringify TypeError beradi."
        },
        {
          "q": "JSON.stringify({ a: undefined, b: 1 }) natijasi nima?",
          "options": [
            "{\"a\":null,\"b\":1}",
            "{\"b\":1}",
            "{\"a\":undefined,\"b\":1}",
            "Xato"
          ],
          "answer": 1,
          "explain": "undefined qiymatli xossalar JSON'ga kiritilmaydi; natijada faqat b qoladi."
        }
      ]
    },
    {
      "id": 33,
      "title": "Promises chuqur",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Promise — kelajakda tayyor bo'ladigan natijaning obyekti. U uch holatda bo'ladi: <b>pending</b> (kutilmoqda), <b>fulfilled</b> (bajarildi) va <b>rejected</b> (rad etildi). Holat bir marta o'zgargach, qaytmaydi. <code>then</code>, <code>catch</code>, <code>finally</code> orqali natijani qabul qilasiz."
        },
        {
          "type": "code",
          "title": "zanjir.js",
          "code": "const muvaffaqiyat = Promise.resolve(42);\n\nmuvaffaqiyat\n  .then((qiymat) => qiymat * 2)\n  .then((qiymat) => console.log(\"Natija:\", qiymat))\n  .catch((xato) => console.log(\"Xato:\", xato.message));\n\nconsole.log(\"So'rov yuborildi\");",
          "output": "So'rov yuborildi\nNatija: 84",
          "runnable": true
        },
        {
          "type": "code",
          "title": "kombinatorlar.js",
          "code": "async function ishla() {\n  const [a, b] = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n  ]);\n  console.log(a + b);\n\n  const natijalar = await Promise.allSettled([\n    Promise.resolve(\"ok\"),\n    Promise.reject(new Error(\"xato\")),\n  ]);\n  console.log(natijalar[0].status, natijalar[1].status);\n\n  const birinchi = await Promise.race([\n    new Promise((resolve) => setTimeout(() => resolve(\"sekin\"), 50)),\n    Promise.resolve(\"tez\"),\n  ]);\n  console.log(birinchi);\n}\n\nishla();",
          "output": "3\nfulfilled rejected\ntez",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Xatti-harakati"
          ],
          "rows": [
            [
              "<code>Promise.all</code>",
              "Hammasi bajarilsa natijalar; bittasi rad etsa, darhol xato"
            ],
            [
              "<code>Promise.allSettled</code>",
              "Hammasini kutadi, har birining holatini beradi"
            ],
            [
              "<code>Promise.race</code>",
              "Birinchi tugagan (bajarilgan yoki rad etilgan) natija"
            ],
            [
              "<code>Promise.any</code>",
              "Birinchi muvaffaqiyatli natija; hammasi rad etsa, AggregateError"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Zanjirda qiymatni qaytaring",
          "html": "<code>then</code> ichida Promise qaytarsangiz, zanjir uni kutadi. <code>return</code> yozishni unutmang — aks holda keyingi <code>then</code> <code>undefined</code> oladi. Xatoni zanjir oxirida bitta <code>catch</code> bilan ushlash mumkin. Rad etilgan Promise'ni hech kim ushlamasa, <b>unhandled rejection</b> yuzaga keladi."
        }
      ],
      "quiz": [
        {
          "q": "Promise.all ichidagi bitta Promise rad etilsa nima bo'ladi?",
          "options": [
            "Qolganlarini kutib, keyin xato beradi",
            "Darhol rad etiladi va xato qaytaradi",
            "Rad etilganini e'tiborsiz qoldiradi",
            "Massivni null bilan to'ldiradi"
          ],
          "answer": 1,
          "explain": "Promise.all fail-fast ishlaydi: birinchi rad etilishda butun natija rad etiladi."
        },
        {
          "q": "Promise.allSettled natijasida har bir element qanday ko'rinishda bo'ladi?",
          "options": [
            "Faqat qiymat",
            "Faqat xato matni",
            "{ status, value } yoki { status, reason }",
            "true yoki false"
          ],
          "answer": 2,
          "explain": "allSettled har bir Promise uchun status va value/reason maydonlarini o'z ichiga olgan obyekt qaytaradi."
        },
        {
          "q": "Promise zanjirida catch() eng yaxshi qayerda qo'yiladi?",
          "options": [
            "Zanjir oxirida, barcha xatolarni ushlash uchun",
            "Faqat birinchi then oldida",
            "Har bir then ichida alohida",
            "catch umuman kerak emas"
          ],
          "answer": 0,
          "explain": "Zanjir oxiridagi bitta catch oldingi barcha bosqichlardan kelgan xatolarni ushlaydi."
        }
      ]
    },
    {
      "id": 34,
      "title": "async/await chuqur",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<code>async</code> funksiya har doim Promise qaytaradi. <code>await</code> Promise natijasini kutadi va kodni sinxron ko'rinishda yozish imkonini beradi. Lekin <code>await</code> ketma-ket ishlaydi: mustaqil so'rovlarni parallel qilish uchun <code>Promise.all</code> kerak."
        },
        {
          "type": "code",
          "title": "ketma-ket.js",
          "code": "function kut(ms, qiymat) {\n  return new Promise((resolve) => setTimeout(() => resolve(qiymat), ms));\n}\n\nasync function ketmaKet() {\n  const a = await kut(10, \"A\");\n  const b = await kut(10, \"B\");\n  console.log(a + b);\n}\n\nketmaKet();",
          "output": "AB",
          "runnable": true
        },
        {
          "type": "code",
          "title": "xato.js",
          "code": "async function yukla() {\n  try {\n    const natija = await Promise.reject(new Error(\"Server javob bermadi\"));\n    console.log(natija);\n  } catch (xato) {\n    console.log(\"Xato ushlandi:\", xato.message);\n  } finally {\n    console.log(\"Yuklash tugadi\");\n  }\n}\n\nyukla();",
          "output": "Xato ushlandi: Server javob bermadi\nYuklash tugadi",
          "runnable": true
        },
        {
          "type": "ul",
          "items": [
            "<code>await</code> faqat <code>async</code> funksiya ichida yoki modulning yuqori qatlamida ishlaydi.",
            "Ketma-ket: <code>const a = await f(); const b = await g();</code> — umumiy vaqt yig'indisi.",
            "Parallel: <code>const [a, b] = await Promise.all([f(), g()]);</code> — umumiy vaqt uzunrog'ining vaqti.",
            "Xatoni ushlash uchun <code>try/catch</code> yoki chaqiruvchi tomonda <code>.catch()</code>."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "async funksiyani chaqirishni unutmang",
          "html": "<code>async function ishla()</code> e'loni kodni bajarmaydi — uni <code>ishla()</code> deb chaqirish kerak. Chaqiruv natijasini kutmasangiz, xato <b>unhandled rejection</b> bo'lishi mumkin. <code>forEach</code> ichida <code>await</code> ishlamaydi; ketma-ketlik uchun <code>for...of</code>, parallel uchun <code>map</code> + <code>Promise.all</code> ishlatilsin."
        }
      ],
      "quiz": [
        {
          "q": "async funksiya ichida await bajarilganda nima sodir bo'ladi?",
          "options": [
            "Funksiya butunlay to'xtaydi va boshqa chaqirilmaydi",
            "Promise bajarilguncha funksiya pauza qiladi, boshqa kod davom etadi",
            "Asosiy oqim sinxron bloklanadi",
            "Har safar yangi oqim (thread) ochiladi"
          ],
          "answer": 1,
          "explain": "await funksiyani vaqtincha to'xtatadi, lekin asosiy oqim bloklanmaydi; natija tayyor bo'lgach davom etadi."
        },
        {
          "q": "Ikki mustaqil so'rovni parallel bajarish uchun nima ishlatiladi?",
          "options": [
            "Ularni ketma-ket await qilish",
            "setTimeout",
            "await Promise.all([f(), g()])",
            "Async funksiyani ikki marta e'lon qilish"
          ],
          "answer": 2,
          "explain": "Promise.all ikkala Promise'ni bir vaqtda boshlaydi va ikkalasi tugagach natijalarni beradi."
        },
        {
          "q": "awaitni oddiy (async bo'lmagan) funksiya ichida ishlatish mumkinmi?",
          "options": [
            "Ha, har qanday funksiyada",
            "Ha, faqat arrow funksiyada",
            "Ha, faqat strict mode'da",
            "Yo'q, SyntaxError bo'ladi"
          ],
          "answer": 3,
          "explain": "await faqat async funksiya yoki modulning yuqori qatlamida sintaktik jihatdan ruxsat etilgan."
        }
      ]
    },
    {
      "id": 35,
      "title": "Event loop va mikrotasklar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "JavaScript <b>bitta oqimda</b> (single-thread) ishlaydi, lekin tarmoq va taymerlar brauzer tomonidan fonda bajariladi. <b>Event loop</b> navbatlarni navbat bilan bo'shatadi: avval sinxron kod, keyin <b>mikrotasklar</b> (Promise, <code>queueMicrotask</code>), so'ng <b>makrotasklar</b> (<code>setTimeout</code>, hodisalar, I/O)."
        },
        {
          "type": "code",
          "title": "tartib.js",
          "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nqueueMicrotask(() => console.log(\"4\"));\nconsole.log(\"5\");",
          "output": "1\n5\n3\n4\n2",
          "runnable": true
        },
        {
          "type": "code",
          "title": "async-tartib.js",
          "code": "console.log(\"skript\");\n\nasync function ish() {\n  console.log(\"async boshlandi\");\n  await null;\n  console.log(\"awaitdan keyin\");\n}\n\nish();\nPromise.resolve().then(() => console.log(\"promise\"));\nconsole.log(\"skript oxiri\");",
          "output": "skript\nasync boshlandi\nskript oxiri\nawaitdan keyin\npromise",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Navbat",
            "Nimalar kiradi",
            "Qachon"
          ],
          "rows": [
            [
              "Call stack",
              "Sinxron kod",
              "Darhol"
            ],
            [
              "Mikrotask",
              "Promise.then, queueMicrotask, MutationObserver",
              "Joriy kod tugagach"
            ],
            [
              "Makrotask",
              "setTimeout, setInterval, DOM hodisalari",
              "Mikrotasklar bo'shagach"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Asosiy oqimni bloklamang",
          "html": "Uzoq <code>while</code> yoki og'ir hisob sahifani muzlatadi: foydalanuvchi bosishi, render va taymerlar kutib qoladi. Katta ishni bo'laklarga bo'ling yoki Web Worker'ga o'tkazing. <code>setTimeout(fn, 0)</code> darhol bajarilmaydi — u keyingi makrotask navbatiga qo'yiladi. <code>requestAnimationFrame</code> animatsiya uchun mos."
        }
      ],
      "quiz": [
        {
          "q": "Event loopda qaysi navbat avval bo'shatiladi?",
          "options": [
            "Makrotasklar",
            "Mikrotasklar",
            "Ikkalasi bir vaqtda",
            "Faqat setTimeout"
          ],
          "answer": 1,
          "explain": "Har bir makrotaskdan keyin barcha mikrotasklar tugaguncha bajariladi, keyin keyingi makrotask boshlanadi."
        },
        {
          "q": "Promise.then callback'i qaysi navbatga qo'yiladi?",
          "options": [
            "Mikrotask navbatiga",
            "Makrotask navbatiga",
            "Call stack boshiga",
            "Hech qayerga, darhol bajariladi"
          ],
          "answer": 0,
          "explain": "Promise callbacks mikrotask sifatida navbatga qo'yiladi va sinxron kod tugagach bajariladi."
        },
        {
          "q": "Uzoq davom etadigan sinxron tsikl sahifaga qanday ta'sir qiladi?",
          "options": [
            "Faqat konsol sekinlashadi",
            "Hech qanday ta'sir yo'q",
            "Taymerlarni tezlashtiradi",
            "Render va foydalanuvchi hodisalarini bloklaydi"
          ],
          "answer": 3,
          "explain": "Call stack band bo'lsa, brauzer render qila olmaydi va foydalanuvchi kiritishiga javob bermaydi."
        }
      ]
    },
    {
      "id": 36,
      "title": "Fetch API chuqur",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>fetch()</code> — brauzerdagi HTTP so'rov vositasi. U Promise qaytaradi. Muhim noziklik: <b>404 yoki 500 ham rad etilmaydi</b> — Promise bajariladi, xatoni <code>response.ok</code> orqali o'zingiz tekshirasiz. Tarmoq uzilishigina Promise'ni rad etadi."
        },
        {
          "type": "code",
          "title": "get.js",
          "code": "async function foydalanuvchi(id) {\n  const javob = await fetch(\"https://jsonplaceholder.typicode.com/users/\" + id);\n  if (!javob.ok) {\n    throw new Error(\"HTTP \" + javob.status);\n  }\n  const data = await javob.json();\n  return data.name;\n}\n\nfoydalanuvchi(1)\n  .then((ism) => console.log(ism))\n  .catch((xato) => console.log(\"Xato:\", xato.message));",
          "output": "Leanne Graham",
          "runnable": false,
          "outputLabel": "Kutilgan konsol"
        },
        {
          "type": "code",
          "title": "post.js",
          "code": "async function saqla(payload) {\n  const controller = new AbortController();\n  const timer = setTimeout(() => controller.abort(), 3000);\n\n  try {\n    const javob = await fetch(\"https://api.example.com/kitoblar\", {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify(payload),\n      signal: controller.signal,\n    });\n    if (!javob.ok) throw new Error(\"HTTP \" + javob.status);\n    return await javob.json();\n  } finally {\n    clearTimeout(timer);\n  }\n}\n\nsaqla({ nom: \"Kitob\" })\n  .then((data) => console.log(\"Saqlandi, id:\", data.id))\n  .catch((xato) =>\n    console.log(xato.name === \"AbortError\" ? \"Vaqt tugadi\" : xato.message)\n  );",
          "output": "Saqlandi, id: 101",
          "runnable": false,
          "outputLabel": "Kutilgan konsol"
        },
        {
          "type": "table",
          "head": [
            "Tekshiruv",
            "Nima qilish kerak"
          ],
          "rows": [
            [
              "HTTP xatosi",
              "<code>if (!javob.ok) throw ...</code>"
            ],
            [
              "JSON javob",
              "<code>await javob.json()</code> (bir marta)"
            ],
            [
              "Matn javob",
              "<code>await javob.text()</code>"
            ],
            [
              "Status kodi",
              "<code>javob.status</code>"
            ],
            [
              "Sekin so'rov",
              "<code>AbortController</code> + taymer"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "CORS va maxfiy kalitlar",
          "html": "Brauzerdan boshqa domenga so'rov yuborilsa, server <b>CORS</b> ruxsatini berishi kerak. API kalitini frontend kodida saqlamang — u har kimga ko'rinadi. <code>fetch</code> boshqa domenga cookie yubormaydi; kerak bo'lsa <code>credentials: \"include\"</code> va server ruxsati talab qilinadi."
        }
      ],
      "quiz": [
        {
          "q": "fetch() 404 javob qaytarsa Promise qanday holatda bo'ladi?",
          "options": [
            "Rad etiladi (rejected)",
            "Pending bo'lib qoladi",
            "Bajariladi (fulfilled), lekin response.ok false bo'ladi",
            "Avtomatik qayta so'rov yuboradi"
          ],
          "answer": 2,
          "explain": "fetch faqat tarmoq xatosida rad etiladi; HTTP 4xx/5xx javoblari fulfilled bo'lib, ok false bo'ladi."
        },
        {
          "q": "response.json() nima qaytaradi?",
          "options": [
            "Darhol obyekt",
            "Promise",
            "Matn",
            "boolean"
          ],
          "answer": 1,
          "explain": "response.json() javob tanasini o'qib, obyektga aylantirilgan natija bilan Promise qaytaradi."
        },
        {
          "q": "So'rovni vaqt bo'yicha bekor qilish uchun nima ishlatiladi?",
          "options": [
            "clearTimeout(fetch)",
            "fetch.cancel()",
            "Promise.race faqat",
            "AbortController va signal"
          ],
          "answer": 3,
          "explain": "AbortController.abort() signal orqali fetch so'rovini bekor qiladi va AbortError beradi."
        }
      ]
    },
    {
      "id": 37,
      "title": "DOM chuqur: yaratish va o'zgartirish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "DOM — sahifaning dasturiy daraxti. Elementni nafaqat topish, balki <b>yaratish</b>, joylash, atributlarini boshqarish va xavfsiz matn yozish kerak bo'ladi. Ko'p element qo'shganda <code>DocumentFragment</code> yoki bitta konteynerga yig'ish reflow sonini kamaytiradi."
        },
        {
          "type": "code",
          "title": "royxat.js",
          "code": "const royxat = document.querySelector(\"#royxat\");\nconst fragment = document.createDocumentFragment();\n\n[\"Ali\", \"Aziza\", \"Bek\"].forEach((ism) => {\n  const li = document.createElement(\"li\");\n  li.textContent = ism;\n  li.dataset.ism = ism.toLowerCase();\n  fragment.append(li);\n});\n\nroyxat.append(fragment);\nconsole.log(royxat.children.length);",
          "output": "3",
          "runnable": false,
          "outputLabel": "Konsol"
        },
        {
          "type": "code",
          "title": "karta.js",
          "code": "const karta = document.querySelector(\"#karta\");\nkarta.classList.add(\"faol\");\nkarta.setAttribute(\"aria-busy\", \"true\");\n\nconst sarlavha = document.createElement(\"h2\");\nsarlavha.textContent = \"Salom, Aziza\";\nkarta.replaceChildren(sarlavha);\n\nconsole.log(karta.className);\nconsole.log(karta.getAttribute(\"aria-busy\"));\nconsole.log(karta.textContent);",
          "output": "faol\ntrue\nSalom, Aziza",
          "runnable": false,
          "outputLabel": "Konsol"
        },
        {
          "type": "table",
          "head": [
            "Xossa / metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>createElement(tag)</code>",
              "Yangi element yaratadi"
            ],
            [
              "<code>append()</code> / <code>prepend()</code>",
              "Ichiga qo'shadi"
            ],
            [
              "<code>before()</code> / <code>after()</code>",
              "Yoniga qo'shadi"
            ],
            [
              "<code>replaceChildren()</code>",
              "Bolalarni almashtiradi"
            ],
            [
              "<code>dataset</code>",
              "<code>data-*</code> atributlariga murojaat"
            ],
            [
              "<code>classList</code>",
              "Klasslarni qo'shish, o'chirish, almashtirish"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Atribut va xossa farqi",
          "html": "<code>input.value</code> — joriy qiymat (xossa), <code>input.getAttribute(\"value\")</code> — HTML'dagi boshlang'ich qiymat (atribut). <code>checked</code>, <code>selected</code>, <code>disabled</code> kabi holatlar xossa sifatida ishonchliroq. Foydalanuvchi matnini <code>innerHTML</code>ga qo'ymang; <code>textContent</code> ishlating."
        }
      ],
      "quiz": [
        {
          "q": "Yangi element yaratish uchun qaysi metod ishlatiladi?",
          "options": [
            "document.createElement()",
            "document.newElement()",
            "document.append()",
            "document.querySelector()"
          ],
          "answer": 0,
          "explain": "createElement(tag) berilgan teg nomi bilan yangi DOM elementini yaratadi."
        },
        {
          "q": "data-user-id atributiga dataset orqali qanday murojaat qilinadi?",
          "options": [
            "element.dataset.dataUserId",
            "element.dataset.userId",
            "element.dataset['data-user-id']",
            "element.attr.userId"
          ],
          "answer": 1,
          "explain": "data-* atributidagi chiziqchadan keyingi qism camelCase bo'ladi: data-user-id → dataset.userId."
        },
        {
          "q": "Nega foydalanuvchi matnini innerHTML o'rniga textContent bilan yozish xavfsizroq?",
          "options": [
            "textContent tezroq ishlaydi",
            "innerHTML faqat raqamlarni qabul qiladi",
            "textContent HTML teglarini bajarmaydi, shuning uchun skript ishga tushmaydi",
            "innerHTML brauzerda mavjud emas"
          ],
          "answer": 2,
          "explain": "textContent matnni HTML sifatida talqin qilmaydi; innerHTML esa ichidagi skript va teglarni bajarishi mumkin."
        }
      ]
    },
    {
      "id": 38,
      "title": "Hodisalar: bubbling, capturing va delegation",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Hodisa avval <b>capturing</b> bosqichida yuqoridan pastga, keyin <b>target</b>, so'ng <b>bubbling</b> bosqichida pastdan yuqoriga tarqaladi. <b>Delegation</b> — bitta ota elementga tinglovchi qo'yib, bolalardan kelgan hodisalarni <code>event.target</code> orqali aniqlash usuli."
        },
        {
          "type": "code",
          "title": "delegation.js",
          "code": "const royxat = document.querySelector(\"#royxat\");\n\nroyxat.addEventListener(\"click\", (event) => {\n  const tugma = event.target.closest(\"button[data-id]\");\n  if (!tugma) return;\n  console.log(\"O'chirildi:\", tugma.dataset.id);\n});",
          "output": "O'chirildi: 2",
          "runnable": false,
          "outputLabel": "Konsol (2-id tugma bosilganda)"
        },
        {
          "type": "code",
          "title": "bubbling.js",
          "code": "const tashqi = document.querySelector(\"#tashqi\");\nconst ichki = document.querySelector(\"#ichki\");\n\ntashqi.addEventListener(\"click\", () => console.log(\"capture\"), true);\ntashqi.addEventListener(\"click\", () => console.log(\"tashqi\"));\nichki.addEventListener(\"click\", () => console.log(\"ichki\"));",
          "output": "capture\nichki\ntashqi",
          "runnable": false,
          "outputLabel": "Konsol (#ichki bosilganda)"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>event.target</code>",
              "Hodisa sodir bo'lgan eng ichki element"
            ],
            [
              "<code>event.currentTarget</code>",
              "Tinglovchi ulangan element"
            ],
            [
              "<code>closest(sel)</code>",
              "O'zidan yuqoriga qarab mos ota elementni topadi"
            ],
            [
              "<code>stopPropagation()</code>",
              "Hodisaning yuqoriga tarqalishini to'xtatadi"
            ],
            [
              "<code>preventDefault()</code>",
              "Brauzerning standart harakatini bekor qiladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ikki metodni aralashtirmang",
          "html": "<code>stopPropagation()</code> hodisaning ota elementlarga yetib borishini to'xtatadi, <code>preventDefault()</code> esa havola ochilishi yoki forma yuborilishi kabi standart harakatni bekor qiladi. Delegation ishlatilganda <code>event.target</code> matn tugunlari bo'lishi mumkinligini hisobga oling — <code>closest()</code> shu muammoni hal qiladi."
        }
      ],
      "quiz": [
        {
          "q": "Event delegation'ning asosiy afzalligi nima?",
          "options": [
            "Har bir tugmaga alohida listener qo'shadi",
            "Hodisani butunlay to'xtatadi",
            "Ko'p bolalar uchun bitta ota tinglovchi yetadi, dinamik elementlar ham ishlaydi",
            "Faqat klaviatura hodisalarida ishlaydi"
          ],
          "answer": 2,
          "explain": "Delegation bitta ota tinglovchi orqali keyin qo'shilgan bolalarni ham qamrab oladi va xotirani tejaydi."
        },
        {
          "q": "preventDefault() nimani bekor qiladi?",
          "options": [
            "Hodisaning yuqoriga tarqalishini",
            "Brauzerning standart harakatini (masalan, forma yuborish)",
            "Boshqa tinglovchilarni",
            "Elementni DOM'dan olib tashlashni"
          ],
          "answer": 1,
          "explain": "preventDefault() standart brauzer harakatini bekor qiladi; tarqalishni stopPropagation() to'xtatadi."
        },
        {
          "q": "event.target.closest('button') nima qaytaradi?",
          "options": [
            "Hodisa sodir bo'lgan joydan yuqoriga qarab birinchi mos button'ni",
            "Faqat bevosita ota button'ni",
            "Barcha button'lar massivini",
            "Button'ning matnini"
          ],
          "answer": 0,
          "explain": "closest() joriy elementdan boshlab ota elementlar bo'ylab qidiradi va birinchi mos elementni qaytaradi."
        }
      ]
    },
    {
      "id": 39,
      "title": "Formalar va validatsiya chuqur",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Forma — foydalanuvchi bilan muloqotning asosiy yo'li. Zamonaviy brauzer <b>Constraint Validation API</b> bilan tekshiruvni o'zi qila oladi: <code>required</code>, <code>type=\"email\"</code>, <code>minlength</code>, <code>pattern</code>. JavaScript esa murakkab qoidalar va yaxshi xabar uchun qo'shiladi."
        },
        {
          "type": "code",
          "title": "formdata.js",
          "code": "const forma = document.querySelector(\"#forma\");\n\nforma.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  if (!forma.checkValidity()) {\n    forma.reportValidity();\n    return;\n  }\n\n  const data = new FormData(forma);\n  const qiymatlar = Object.fromEntries(data);\n  console.log(qiymatlar.email);\n  forma.reset();\n});",
          "output": "aziza@mail.uz",
          "runnable": false,
          "outputLabel": "Konsol (email to'g'ri kiritilganda)"
        },
        {
          "type": "code",
          "title": "parol.js",
          "code": "const parol = document.querySelector(\"#parol\");\nconst tasdiq = document.querySelector(\"#tasdiq\");\nconst xabar = document.querySelector(\"#xabar\");\n\nfunction tekshir() {\n  const mos = tasdiq.value === parol.value;\n  tasdiq.setCustomValidity(mos ? \"\" : \"Parollar mos emas\");\n  xabar.textContent = mos ? \"\" : \"Parollar mos emas\";\n}\n\nparol.addEventListener(\"input\", tekshir);\ntasdiq.addEventListener(\"input\", tekshir);",
          "output": "Parollar mos bo'lmasa, maydon ostida “Parollar mos emas” chiqadi va forma yuborilmaydi.",
          "runnable": false,
          "outputLabel": "Natija"
        },
        {
          "type": "table",
          "head": [
            "Atribut",
            "Tekshiruv"
          ],
          "rows": [
            [
              "<code>required</code>",
              "Bo'sh bo'lmasligi"
            ],
            [
              "<code>type=\"email\"</code>",
              "Email formati"
            ],
            [
              "<code>minlength</code> / <code>maxlength</code>",
              "Belgilar soni"
            ],
            [
              "<code>min</code> / <code>max</code>",
              "Son yoki sana oralig'i"
            ],
            [
              "<code>pattern</code>",
              "Regex naqshi"
            ],
            [
              "<code>setCustomValidity()</code>",
              "O'z xato xabaringiz"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Client validatsiyasi xavfsizlik emas",
          "html": "Brauzerdagi tekshiruvni chetlab o'tish oson. Server har doim ma'lumotni qayta tekshirishi shart. <code>input</code> hodisasi har bir harfda ishlaydi — og'ir tekshiruvni <b>debounce</b> qiling. Xato xabarini maydon yoniga qo'ying va <code>aria-describedby</code> bilan bog'lang, shunda ekran o'quvchi ham eshitadi."
        }
      ],
      "quiz": [
        {
          "q": "Forma maydonlari brauzer tekshiruvidan o'tganini qaysi metod bildiradi?",
          "options": [
            "form.submit()",
            "form.checkValidity()",
            "form.reset()",
            "form.reportValidity()"
          ],
          "answer": 1,
          "explain": "checkValidity() barcha cheklovlarni tekshirib, boolean qaytaradi; reportValidity() xabarlarni ko'rsatadi."
        },
        {
          "q": "FormData'ni oddiy obyektga aylantirish uchun nima ishlatiladi?",
          "options": [
            "JSON.stringify(formData)",
            "formData.toObject()",
            "Object.keys(formData)",
            "Object.fromEntries(formData)"
          ],
          "answer": 3,
          "explain": "Object.fromEntries FormData iteratoridagi [nom, qiymat] juftliklaridan obyekt yasaydi."
        },
        {
          "q": "Nega faqat client-side validatsiya yetarli emas?",
          "options": [
            "Uni chetlab o'tish oson, serverda qayta tekshirish shart",
            "Brauzerlar uni qo'llab-quvvatlamaydi",
            "U faqat raqamlarni tekshiradi",
            "U formani yuborishni bloklaydi"
          ],
          "answer": 0,
          "explain": "Foydalanuvchi so'rovni o'zgartirishi mumkin, shuning uchun server tomonda ishonchli tekshiruv majburiy."
        }
      ]
    },
    {
      "id": 40,
      "title": "Brauzer API'lari: storage, URL va history",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Brauzer JavaScript'ga kod tashqarisida ham ko'p imkoniyat beradi: ma'lumot saqlash, manzil parametrlarini o'qish, sahifa tarixini boshqarish. Bu API'larning chegaralarini bilish muhim — ular sinxron, hajmi cheklangan va maxfiy ma'lumot uchun mos emas."
        },
        {
          "type": "code",
          "title": "storage.js",
          "code": "localStorage.setItem(\"mavzu\", \"qorong'i\");\nsessionStorage.setItem(\"qadam\", \"2\");\n\nconsole.log(localStorage.getItem(\"mavzu\"));\nconsole.log(sessionStorage.getItem(\"qadam\"));\n\nlocalStorage.removeItem(\"mavzu\");\nconsole.log(localStorage.getItem(\"mavzu\"));",
          "output": "qorong'i\n2\nnull",
          "runnable": false,
          "outputLabel": "Konsol"
        },
        {
          "type": "table",
          "head": [
            "Ombor",
            "Qancha yashaydi",
            "Hajm"
          ],
          "rows": [
            [
              "<code>localStorage</code>",
              "Brauzer tozalanmaguncha",
              "~5 MB"
            ],
            [
              "<code>sessionStorage</code>",
              "Tab yopilguncha",
              "~5 MB"
            ],
            [
              "Cookie",
              "Muddatga qarab, serverga yuboriladi",
              "~4 KB"
            ]
          ]
        },
        {
          "type": "code",
          "title": "url.js",
          "code": "const params = new URLSearchParams(\"?til=js&daraja=2\");\nconsole.log(params.get(\"til\"));\n\nparams.set(\"daraja\", \"3\");\nconsole.log(params.toString());\n\nconst yangi = new URL(\"https://noldan.uz/kurs?til=js\");\nconsole.log(yangi.pathname);\nconsole.log(yangi.searchParams.get(\"til\"));",
          "output": "js\ntil=js&daraja=3\n/kurs\njs",
          "runnable": true
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Maxfiy ma'lumotni saqlamang",
          "html": "<code>localStorage</code> sahifadagi har qanday skriptga ochiq — token yoki parol saqlash XSS xavfini oshiradi. Cookie'ga <code>HttpOnly</code> va <code>Secure</code> belgilari server qo'yishi kerak. <code>history.pushState()</code> sahifani qayta yuklamaydi; \"orqaga\" tugmasi uchun <code>popstate</code> tinglanadi."
        },
        {
          "type": "ul",
          "items": [
            "<code>localStorage</code> — matn saqlaydi, obyekt uchun JSON kerak.",
            "<code>URLSearchParams</code> — <code>?kalit=qiymat</code> parametrlarini o'qish va yasash.",
            "<code>new URL(manzil)</code> — manzil qismlarini tahlil qilish.",
            "<code>history.pushState(state, '', url)</code> — tarixga yozuv qo'shadi.",
            "<code>navigator.clipboard.writeText()</code> — ruxsat bilan buferga yozadi."
          ]
        }
      ],
      "quiz": [
        {
          "q": "localStorage va sessionStorage orasidagi asosiy farq nima?",
          "options": [
            "localStorage faqat raqam saqlaydi",
            "sessionStorage serverga yuboriladi",
            "localStorage brauzer tozalanmaguncha, sessionStorage tab yopilguncha saqlanadi",
            "Farqi yo'q"
          ],
          "answer": 2,
          "explain": "localStorage doimiyroq, sessionStorage esa faqat joriy tab sessiyasi davomida yashaydi."
        },
        {
          "q": "URLSearchParams bilan '?til=js' dan til qiymatini qanday olasiz?",
          "options": [
            "params.get('til')",
            "params.value('til')",
            "params.til",
            "params.query('til')"
          ],
          "answer": 0,
          "explain": "URLSearchParams.get(kalit) berilgan parametr qiymatini yoki null qaytaradi."
        },
        {
          "q": "history.pushState() sahifani qayta yuklaydimi?",
          "options": [
            "Ha, har doim",
            "Yo'q, manzil va tarix yozuvini o'zgartiradi",
            "Faqat HTTPS'da",
            "Faqat formada"
          ],
          "answer": 1,
          "explain": "pushState brauzer tarixiga yozuv qo'shadi va manzilni o'zgartiradi, lekin sahifani qayta yuklamaydi."
        }
      ]
    },
    {
      "id": 41,
      "title": "Testlash asoslari",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Test — kodning kutilganini avtomatik tekshiradigan qism. U regressiyadan himoya qiladi: bir joyni o'zgartirib, boshqa joyni buzganingizni darhol bilasiz. Kichik <b>unit test</b>lardan boshlang: kirish, chiqish va chegaraviy holatlar."
        },
        {
          "type": "code",
          "title": "narx.js",
          "code": "function narxHisobla(narx, soni, chegirma = 0) {\n  const jami = narx * soni;\n  return Math.round(jami * (1 - chegirma));\n}\n\nconsole.log(narxHisobla(12000, 3));\nconsole.log(narxHisobla(12000, 3, 0.1));",
          "output": "36000\n32400",
          "runnable": true
        },
        {
          "type": "code",
          "title": "assert.js",
          "code": "function qosh(a, b) {\n  return a + b;\n}\n\nfunction teng(haqiqiy, kutilgan) {\n  if (haqiqiy !== kutilgan) {\n    throw new Error(\"Kutilgan \" + kutilgan + \", olindi \" + haqiqiy);\n  }\n  console.log(\"OK:\", haqiqiy);\n}\n\nteng(qosh(2, 3), 5);\nteng(qosh(-2, -3), -5);",
          "output": "OK: 5\nOK: -5",
          "runnable": true
        },
        {
          "type": "ul",
          "items": [
            "<b>Arrange</b> — kirish ma'lumotini tayyorlang.",
            "<b>Act</b> — tekshiriladigan funksiyani chaqiring.",
            "<b>Assert</b> — natijani kutilgan qiymat bilan solishtiring.",
            "Har bir test bitta xatti-harakatni tekshirsin va bir-biriga bog'liq bo'lmasin."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Node'ning o'z test vositasi",
          "html": "Node 18+ da <code>node:test</code> va <code>node:assert/strict</code> bor: <code>test(\"nom\", () => assert.equal(...))</code>. Brauzerda Vitest yoki Jest keng tarqalgan. Testlar <code>*.test.js</code> fayllarida saqlanadi. 100% coverage — maqsad emas; muhim biznes qoidalari va chegaraviy holatlar qamrab olinishi kerak."
        },
        {
          "type": "table",
          "head": [
            "Test turi",
            "Nimani tekshiradi"
          ],
          "rows": [
            [
              "Unit",
              "Bitta funksiya yoki modul"
            ],
            [
              "Integration",
              "Bir nechta qismning birgalikda ishlashi"
            ],
            [
              "E2E",
              "Butun foydalanuvchi oqimi (brauzerda)"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "Unit test nimani tekshiradi?",
          "options": [
            "Butun tarmoqni",
            "Bitta funksiya yoki kichik modul xatti-harakatini",
            "Faqat HTML ko'rinishini",
            "Faqat server bazasini"
          ],
          "answer": 1,
          "explain": "Unit test izolyatsiyadagi eng kichik kod birligini tekshiradi."
        },
        {
          "q": "Testdagi assertion nima vazifani bajaradi?",
          "options": [
            "Testni avtomatik yozadi",
            "Kodni tezlashtiradi",
            "Haqiqiy natijani kutilgan natija bilan solishtiradi",
            "Serverga so'rov yuboradi"
          ],
          "answer": 2,
          "explain": "Assertion natija kutilganga mosligini tekshiradi va mos kelmasa xato beradi."
        },
        {
          "q": "Qaysi holatlar testda alohida tekshirilishi kerak?",
          "options": [
            "Faqat eng katta kirish qiymati",
            "Faqat tarmoq xatosi",
            "Faqat chiroyli natija",
            "Bo'sh qiymat, 0, chegara va xato holatlari"
          ],
          "answer": 3,
          "explain": "Chegaraviy va noto'g'ri kirishlar ko'pincha xatolar yashiringan joy bo'ladi."
        }
      ]
    },
    {
      "id": 42,
      "title": "npm, package.json va Vite",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Zamonaviy JavaScript loyihasi paketlar va yig'uvchi vositalarsiz kamdan-kam yoziladi. <b>npm</b> kutubxonalarni o'rnatadi, <code>package.json</code> loyiha pasporti, <b>Vite</b> esa tez dev-server va ishlab chiqarish uchun optimallashtirilgan build beradi."
        },
        {
          "type": "code",
          "title": "package.json",
          "code": "{\n  \"name\": \"noldan-loyiha\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"preview\": \"vite preview\"\n  },\n  \"devDependencies\": {\n    \"vite\": \"^7.0.0\"\n  }\n}",
          "output": "npm run dev — lokal dev-server va HMR.\nnpm run build — dist/ papkaga optimallashtirilgan fayllar.\nnpm run preview — build natijasini lokal tekshirish.",
          "runnable": false,
          "outputLabel": "Skriptlar",
          "lang": "json"
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "npm install\nnpm run dev",
          "output": "VITE v7.0.0  ready in 312 ms\n\n➜  Local:   http://localhost:5173/\n➜  Network: use --host to expose",
          "runnable": false,
          "outputLabel": "Terminal",
          "lang": "bash"
        },
        {
          "type": "table",
          "head": [
            "Atama",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>dependencies</code>",
              "Ishlab chiqarishda ham kerak bo'lgan paketlar"
            ],
            [
              "<code>devDependencies</code>",
              "Faqat ishlab chiqishda kerak (Vite, ESLint)"
            ],
            [
              "<code>^7.0.0</code>",
              "7.x.x ichida yangilanishga ruxsat"
            ],
            [
              "<code>package-lock.json</code>",
              "O'rnatilgan aniq versiyalarni qulflaydi"
            ],
            [
              "<code>node_modules</code>",
              "O'rnatilgan paketlar; git'ga qo'shilmaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "node_modules'ni commit qilmang",
          "html": "Paketlarni <code>package.json</code> va <code>package-lock.json</code> orqali qayta tiklash mumkin. <code>.gitignore</code>ga <code>node_modules</code> va <code>dist</code> yozing. Vite import'larni, CSS'ni va asset'larni avtomatik yig'adi; production build'da kod minifikatsiya qilinadi. Sifat uchun <b>ESLint</b> va <b>Prettier</b> qo'shing."
        }
      ],
      "quiz": [
        {
          "q": "Qaysi paket devDependencies'ga yoziladi?",
          "options": [
            "Foydalanuvchi ko'radigan kutubxona",
            "Serverdagi ma'lumotlar bazasi",
            "Faqat ishlab chiqishda kerak bo'ladigan Vite yoki ESLint",
            "Har bir HTML fayl"
          ],
          "answer": 2,
          "explain": "devDependencies faqat lokal ishlab chiqish va build jarayonida kerak bo'lgan vositalar uchun."
        },
        {
          "q": "Vite'da production build qaysi buyruq bilan yig'iladi?",
          "options": [
            "npm run build",
            "npm run dev",
            "npm install",
            "npm start"
          ],
          "answer": 0,
          "explain": "package.json'dagi build skripti odatda vite build bo'lib, natijani dist/ papkaga yozadi."
        },
        {
          "q": "package-lock.json nima uchun kerak?",
          "options": [
            "Kodni minifikatsiya qiladi",
            "Serverni ishga tushiradi",
            "Testlarni yozadi",
            "Paketlarning aniq o'rnatilgan versiyalarini qulflaydi"
          ],
          "answer": 3,
          "explain": "Lock fayli boshqa muhitda ham bir xil versiyalar o'rnatilishini ta'minlaydi."
        }
      ]
    },
    {
      "id": 43,
      "title": "Unumdorlik: tez va silliq kod",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Unumdorlik — foydalanuvchi kutish vaqtini kamaytirish. Brauzerda asosiy oqim band bo'lsa, sahifa muzlaydi. Eng ko'p uchraydigan muammolar: ortiqcha DOM yangilanishi, har harfda og'ir ish, katta rasmlar va tozalanmagan taymerlar."
        },
        {
          "type": "code",
          "title": "debounce.js",
          "code": "function debounce(fn, ms) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), ms);\n  };\n}\n\nconst qidir = debounce((matn) => console.log(\"Qidiruv:\", matn), 300);\nqidir(\"j\");\nqidir(\"ja\");\nqidir(\"jav\");",
          "output": "Qidiruv: jav",
          "runnable": true,
          "outputLabel": "Konsol (300 ms dan keyin)"
        },
        {
          "type": "code",
          "title": "throttle.js",
          "code": "function throttle(fn, ms) {\n  let tayyor = true;\n  return function (...args) {\n    if (!tayyor) return;\n    tayyor = false;\n    fn.apply(this, args);\n    setTimeout(() => {\n      tayyor = true;\n    }, ms);\n  };\n}\n\nconst saqla = throttle((n) => console.log(\"Saqlandi:\", n), 100);\nsaqla(1);\nsaqla(2);\nsaqla(3);\nsetTimeout(() => saqla(4), 150);",
          "output": "Saqlandi: 1\nSaqlandi: 4",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Usul",
            "Qachon ishlatiladi"
          ],
          "rows": [
            [
              "<b>Debounce</b>",
              "Qidiruv maydoni, validatsiya — oxirgi harakatdan keyin"
            ],
            [
              "<b>Throttle</b>",
              "Scroll, resize — belgilangan oraliqda bir marta"
            ],
            [
              "<b>DocumentFragment</b>",
              "Ko'p elementni bitta joylashda"
            ],
            [
              "<b>requestAnimationFrame</b>",
              "Animatsiya va vizual yangilanish"
            ],
            [
              "<b>Lazy loading</b>",
              "Rasm va og'ir modullarni kerak bo'lganda yuklash"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xotira oqishi",
          "html": "Tozalanmagan <code>setInterval</code>, o'chirilmagan <code>addEventListener</code> va DOM'dan olib tashlangan elementga ushlab turilgan havolalar xotirani oshiradi. Komponent yo'q bo'lganda taymer va tinglovchilarni tozalang. Avvalo <b>o'lchov</b> qiling: DevTools Performance paneli qayerda vaqt ketayotganini ko'rsatadi."
        }
      ],
      "quiz": [
        {
          "q": "Debounce qanday ishlaydi?",
          "options": [
            "Har chaqiruvda darhol bajaradi",
            "Ketma-ket chaqiruvlarda faqat oxirgisini kechikishdan keyin bajaradi",
            "Chaqiruvlarni butunlay tashlab yuboradi",
            "Faqat birinchi chaqiruvni bajaradi"
          ],
          "answer": 1,
          "explain": "Debounce har yangi chaqiruvda taymerni qayta boshlaydi va faqat tinchlikdan keyingi oxirgi chaqiruvni bajaradi."
        },
        {
          "q": "Ko'p DOM elementini qo'shishda qaysi usul reflow'ni kamaytiradi?",
          "options": [
            "Har bir elementdan keyin console.log",
            "Har bir elementni alohida append qilish",
            "DocumentFragment'ga yig'ib, bir marta qo'shish",
            "innerHTML'ni har safar qayta yozish"
          ],
          "answer": 2,
          "explain": "DocumentFragment'da yig'ilgan elementlar bitta operatsiyada DOM'ga qo'shiladi."
        },
        {
          "q": "Quyidagilardan qaysi biri xotira oqimiga olib kelishi mumkin?",
          "options": [
            "Tozalanmagan setInterval va o'chirilmagan hodisa tinglovchilari",
            "const bilan e'lon qilingan massiv",
            "JSON.stringify ishlatish",
            "classList.add()"
          ],
          "answer": 0,
          "explain": "Taymer va tinglovchilar obyektga havola ushlab turadi; ularni tozalamaslik xotirani oshiradi."
        }
      ]
    },
    {
      "id": 44,
      "title": "Xavfsizlik: XSS va himoya",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Frontend xavfsizligining birinchi qoidasi: foydalanuvchi kiritgan har qanday matnga <b>ishonmang</b>. Uni HTML sifatida bajarish <b>XSS</b> (Cross-Site Scripting) ga olib keladi — hujumchi sahifangizda o'z skriptini ishga tushirib, token yoki shaxsiy ma'lumotni o'g'irlashi mumkin."
        },
        {
          "type": "code",
          "title": "xss.js",
          "code": "const izoh = '<img src=x onerror=\"alert(1)\">';\nconst xavfli = document.querySelector(\"#xavfli\");\nconst xavfsiz = document.querySelector(\"#xavfsiz\");\n\nxavfli.innerHTML = izoh;\nxavfsiz.textContent = izoh;\n\nconsole.log(xavfsiz.textContent);",
          "output": "<img src=x onerror=\"alert(1)\">",
          "runnable": false,
          "outputLabel": "Konsol"
        },
        {
          "type": "code",
          "title": "havola.js",
          "code": "function xavfsizHavola(url) {\n  try {\n    const manzil = new URL(url, location.origin);\n    const ruxsat = [\"http:\", \"https:\"];\n    return ruxsat.includes(manzil.protocol) ? manzil.href : \"#\";\n  } catch {\n    return \"#\";\n  }\n}\n\nconsole.log(xavfsizHavola(\"https://noldan.uz/kurs\"));\nconsole.log(xavfsizHavola(\"javascript:alert(1)\"));",
          "output": "https://noldan.uz/kurs\n#",
          "runnable": false,
          "outputLabel": "Konsol"
        },
        {
          "type": "table",
          "head": [
            "Xavf",
            "Himoya"
          ],
          "rows": [
            [
              "XSS",
              "Matn uchun <code>textContent</code>, kerak bo'lsa sanitizer"
            ],
            [
              "Yomon URL",
              "Faqat <code>http:</code>/<code>https:</code> protokollariga ruxsat"
            ],
            [
              "Maxfiy kalit",
              "Frontend kodida saqlamang, server orqali ishlating"
            ],
            [
              "Buzilgan paket",
              "Versiyalarni qulflang va audit o'tkazing"
            ],
            [
              "Clickjacking",
              "Serverda <code>X-Frame-Options</code> yoki CSP"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "CSP va tozalash",
          "html": "<b>Content Security Policy</b> (CSP) qaysi manbalardan skript yuklanishini cheklaydi. <code>innerHTML</code> bilan ishonchsiz HTML qo'shish kerak bo'lsa, <b>DOMPurify</b> kabi sanitizer ishlating — uy qurilishi regex yechimi yetarli emas. Cookie'larga <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite</code> qo'ying. API kalitlari faqat serverda saqlanadi."
        }
      ],
      "quiz": [
        {
          "q": "Foydalanuvchi matnini sahifada xavfsiz ko'rsatish uchun nima ishlatiladi?",
          "options": [
            "innerHTML",
            "textContent",
            "document.write",
            "eval"
          ],
          "answer": 1,
          "explain": "textContent matnni HTML sifatida talqin qilmaydi, shuning uchun teglar va skriptlar bajarilmaydi."
        },
        {
          "q": "CSP (Content Security Policy) nima qiladi?",
          "options": [
            "Ma'lumotlar bazasini shifrlaydi",
            "Parollarni avtomatik yaratadi",
            "Fayllarni siqadi",
            "Qaysi manbalardan skript va resurs yuklanishini cheklaydi"
          ],
          "answer": 3,
          "explain": "CSP brauzerga ruxsat etilgan manbalar ro'yxatini beradi va ruxsatsiz skript bajarilishini bloklaydi."
        },
        {
          "q": "API kalitini frontend JavaScript kodida saqlash nega xavfli?",
          "options": [
            "Kodni ko'rgan har kim kalitni olishi mumkin",
            "Brauzer kalitni o'chirib tashlaydi",
            "Kalit faqat HTTPS'da ishlaydi",
            "JavaScript kalitni qabul qilmaydi"
          ],
          "answer": 0,
          "explain": "Frontend kodi foydalanuvchiga yuboriladi; undagi barcha kalitlar va sirlar ochiq hisoblanadi."
        }
      ]
    },
    {
      "id": 45,
      "title": "Loyiha 1: xarajatlar ilovasi — model",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Uch darslik loyihada shaxsiy xarajatlar ilovasini yasaymiz. Birinchi bosqich — <b>model</b>: ma'lumot tuzilishi va sof funksiyalar. Ko'rinishga o'tishdan oldin hisob-kitoblarni alohida funksiyalarga ajratamiz, shunda ularni testlash oson bo'ladi."
        },
        {
          "type": "code",
          "title": "model.js",
          "code": "const xarajatlar = [\n  { id: 1, nom: \"Non\", summa: 500000, kategoriya: \"oziq-ovqat\" },\n  { id: 2, nom: \"Avtobus\", summa: 200000, kategoriya: \"transport\" },\n  { id: 3, nom: \"Kitob\", summa: 4500000, kategoriya: \"ta'lim\" },\n];\n\nfunction jamiRoyxat(royxat) {\n  return royxat.reduce((sum, x) => sum + x.summa, 0);\n}\n\nconsole.log(jamiRoyxat(xarajatlar));\nconsole.log(xarajatlar.filter((x) => x.kategoriya === \"transport\").length);",
          "output": "5200000\n1",
          "runnable": true
        },
        {
          "type": "code",
          "title": "guruhlash.js",
          "code": "const xarajatlar = [\n  { id: 1, nom: \"Non\", summa: 500000, kategoriya: \"oziq-ovqat\" },\n  { id: 2, nom: \"Avtobus\", summa: 200000, kategoriya: \"transport\" },\n  { id: 3, nom: \"Kitob\", summa: 4500000, kategoriya: \"ta'lim\" },\n];\n\nfunction kategoriyaBoyicha(royxat) {\n  return royxat.reduce((natija, x) => {\n    natija[x.kategoriya] = (natija[x.kategoriya] || 0) + x.summa;\n    return natija;\n  }, {});\n}\n\nconsole.log(JSON.stringify(kategoriyaBoyicha(xarajatlar)));",
          "output": "{\"oziq-ovqat\":500000,\"transport\":200000,\"ta'lim\":4500000}",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Maydon",
            "Turi",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>id</code>",
              "number",
              "Unikal identifikator"
            ],
            [
              "<code>nom</code>",
              "string",
              "Xarajat nomi"
            ],
            [
              "<code>summa</code>",
              "number",
              "Tiyinda butun son"
            ],
            [
              "<code>kategoriya</code>",
              "string",
              "Guruhlash uchun kalit"
            ],
            [
              "<code>sana</code>",
              "string",
              "ISO sana (keyin qo'shiladi)"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Nega tiyin?",
          "html": "Pulni <code>12.5</code> kabi kasr son bilan saqlamang — <code>0.1 + 0.2</code> muammosi yig'indini buzadi. <b>Tiyin</b>da butun son saqlang: 12 500 so'm → <code>1250000</code>. Ko'rsatishda 100 ga bo'lib formatlang. <code>id</code> uchun <code>crypto.randomUUID()</code> yoki o'sib boruvchi son ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "Xarajatlar yig'indisini hisoblash uchun qaysi metod qulay?",
          "options": [
            "sort()",
            "find()",
            "reduce()",
            "join()"
          ],
          "answer": 2,
          "explain": "reduce() massivni bitta qiymatga yig'adi; summani hisoblash uning klassik qo'llanishi."
        },
        {
          "q": "Pul summasini nega tiyinda butun son saqlash tavsiya etiladi?",
          "options": [
            "Kasr sonlarda yaxlitlash xatosi yig'ilmasligi uchun",
            "Brauzer kasr sonni qo'llab-quvvatlamaydi",
            "JSON kasr sonni saqlamaydi",
            "Bu faqat dizayn talabi"
          ],
          "answer": 0,
          "explain": "Ikkilik kasrlar aniq saqlanmagani uchun pulni eng kichik birlikda butun son qilib saqlash xatoni oldini oladi."
        },
        {
          "q": "Loyihada modelni ko'rinishdan ajratishning foydasi nima?",
          "options": [
            "HTML teglarini kamaytiradi",
            "Hisob-kitoblarni alohida testlash va qayta ishlatish osonlashadi",
            "CSS yozish shart bo'lmaydi",
            "Ma'lumot avtomatik serverga ketadi"
          ],
          "answer": 1,
          "explain": "Sof funksiyalar DOM'ga bog'liq emas, shuning uchun ularni mustaqil tekshirish va boshqa joyda ishlatish oson."
        }
      ]
    },
    {
      "id": 46,
      "title": "Loyiha 2: render, filtr va saqlash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi modelni ekranga chiqaramiz. Render funksiyasi har safar ro'yxatni tozalab, filtrlangan ma'lumotdan yangi elementlar yasaydi. Saqlash uchun <code>localStorage</code> va JSON ishlatamiz; buzilgan ma'lumotga tayyor bo'lish uchun <code>try/catch</code> qo'shamiz."
        },
        {
          "type": "code",
          "title": "render.js",
          "code": "const royxatEl = document.querySelector(\"#royxat\");\nconst xarajatlar = [\n  { id: 1, nom: \"Non\", summa: 500000, kategoriya: \"oziq-ovqat\" },\n  { id: 2, nom: \"Avtobus\", summa: 200000, kategoriya: \"transport\" },\n];\n\nfunction chiz(royxat, kategoriya = \"barchasi\") {\n  const korinadigan =\n    kategoriya === \"barchasi\"\n      ? royxat\n      : royxat.filter((x) => x.kategoriya === kategoriya);\n\n  royxatEl.replaceChildren(\n    ...korinadigan.map((x) => {\n      const li = document.createElement(\"li\");\n      li.textContent = x.nom + \" — \" + (x.summa / 100) + \" so'm\";\n      li.dataset.id = x.id;\n      return li;\n    })\n  );\n}\n\nchiz(xarajatlar, \"transport\");",
          "output": "Ro'yxatda faqat “Avtobus — 2000 so'm” qoladi.",
          "runnable": false,
          "outputLabel": "Natija"
        },
        {
          "type": "code",
          "title": "saqlash.js",
          "code": "const kalit = \"xarajatlar-v1\";\n\nfunction saqla(royxat) {\n  localStorage.setItem(kalit, JSON.stringify(royxat));\n}\n\nfunction yukla() {\n  try {\n    const saqlangan = localStorage.getItem(kalit);\n    return saqlangan ? JSON.parse(saqlangan) : [];\n  } catch {\n    return [];\n  }\n}\n\nsaqla([\n  { id: 1, nom: \"Non\", summa: 500000 },\n  { id: 2, nom: \"Avtobus\", summa: 200000 },\n]);\nconsole.log(yukla().length);\nconsole.log(yukla()[1].nom);",
          "output": "2\nAvtobus",
          "runnable": false,
          "outputLabel": "Konsol"
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>chiz()</code>",
              "Modeldan DOM yasaydi"
            ],
            [
              "<code>filtr</code>",
              "Kategoriya bo'yicha tanlaydi"
            ],
            [
              "<code>saqla()</code>",
              "JSON'ga aylantirib localStorage'ga yozadi"
            ],
            [
              "<code>yukla()</code>",
              "Buzilgan ma'lumotda bo'sh massiv qaytaradi"
            ],
            [
              "<code>dataset.id</code>",
              "O'chirish/tahrirlashda yozuvni topish uchun"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Renderdan keyin saqlang",
          "html": "Har o'zgarishdan keyin avval modelni yangilang, keyin <code>saqla()</code> va <code>chiz()</code>ni chaqiring. Tugmalarni har renderda qayta yaratish o'rniga ota elementga <b>delegation</b> qo'ying. <code>innerHTML = \"\"</code> o'rniga <code>replaceChildren()</code> ishlatilsa, eski tinglovchilar bilan bog'liq xatolar kamayadi."
        }
      ],
      "quiz": [
        {
          "q": "Ro'yxatni yangilashda bolalarni xavfsiz almashtirish uchun qaysi metod ishlatiladi?",
          "options": [
            "replaceChildren()",
            "removeAll()",
            "clearList()",
            "innerText = ''"
          ],
          "answer": 0,
          "explain": "replaceChildren() barcha bolalarni yangi elementlar bilan bitta operatsiyada almashtiradi."
        },
        {
          "q": "Render funksiyasida filtr qanday qo'llaniladi?",
          "options": [
            "Barcha elementlarni o'chirib, yangisini yozish bilan",
            "CSS display: none bilan",
            "filter() orqali mos yozuvlarni tanlab, ulardan DOM yasash bilan",
            "Ma'lumotni serverga yuborish bilan"
          ],
          "answer": 2,
          "explain": "Model massivida filter() qo'llanib, faqat mos yozuvlar render qilinadi."
        },
        {
          "q": "localStorage'dagi JSON buzilgan bo'lsa nima qilish kerak?",
          "options": [
            "Sahifani cheksiz qayta yuklash",
            "try/catch bilan ushlab, bo'sh massiv qaytarish",
            "Xatoni e'tiborsiz qoldirish",
            "JSON.parse'ni ikki marta chaqirish"
          ],
          "answer": 1,
          "explain": "Buzilgan saqlangan ma'lumotni ushlash va xavfsiz bo'sh holatga qaytish kerak."
        }
      ]
    },
    {
      "id": 47,
      "title": "Loyiha 3: async, xatolar va sayqal",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Yakuniy bosqichda ilovani server bilan sinxronlash, yuklanish/xato/bo'sh holatlarni ko'rsatish va kodni modullarga bo'lish qoladi. Yaxshi interfeys foydalanuvchiga <b>nima bo'layotganini</b> har doim aytadi: yuklanmoqda, xato yoki ma'lumot yo'q."
        },
        {
          "type": "code",
          "title": "holat.js",
          "code": "function holatKorinishi(holat) {\n  if (holat.yuklanmoqda) return \"Yuklanmoqda...\";\n  if (holat.xato) return \"Xato: \" + holat.xato;\n  if (!holat.malumotlar.length) return \"Hozircha xarajat yo'q\";\n  return holat.malumotlar.length + \" ta yozuv\";\n}\n\nconsole.log(holatKorinishi({ yuklanmoqda: true, xato: \"\", malumotlar: [] }));\nconsole.log(holatKorinishi({ yuklanmoqda: false, xato: \"Tarmoq yo'q\", malumotlar: [] }));\nconsole.log(holatKorinishi({ yuklanmoqda: false, xato: \"\", malumotlar: [1, 2] }));",
          "output": "Yuklanmoqda...\nXato: Tarmoq yo'q\n2 ta yozuv",
          "runnable": true
        },
        {
          "type": "code",
          "title": "sinxronla.js",
          "code": "async function sinxronla(manba) {\n  try {\n    const data = await manba();\n    return data;\n  } catch (xato) {\n    console.log(\"Sinxronlashda xato:\", xato.message);\n    return [];\n  }\n}\n\nsinxronla(async () => {\n  throw new Error(\"Server javob bermadi\");\n}).then((data) => console.log(\"Olingan:\", data.length));",
          "output": "Sinxronlashda xato: Server javob bermadi\nOlingan: 0",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Holat",
            "Foydalanuvchiga ko'rsatish"
          ],
          "rows": [
            [
              "Yuklanmoqda",
              "Skeleton yoki “Yuklanmoqda...”"
            ],
            [
              "Xato",
              "Tushunarli xabar va “Qayta urinish”"
            ],
            [
              "Bo'sh",
              "Nima qilish kerakligi haqida maslahat"
            ],
            [
              "Muvaffaqiyat",
              "Ma'lumot va jami summa"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Yakuniy sayqal",
          "html": "Serverdan kelgan xarajatlarni ham <b>tiyin</b>da butun son sifatida qabul qiling. Tarmoq xatosida mavjud lokal ma'lumotni saqlab qoling. Forma maydonlariga <code>label</code>, xato xabarlariga <code>aria-live</code> qo'shing. Kodni <code>model.js</code>, <code>storage.js</code>, <code>ui.js</code>ga ajratsangiz, loyiha o'sganda ham boshqarish oson bo'ladi."
        }
      ],
      "quiz": [
        {
          "q": "Interfeysda qaysi holatlar alohida ko'rsatilishi kerak?",
          "options": [
            "Faqat muvaffaqiyat",
            "Faqat xato",
            "Yuklanmoqda, bo'sh, xato va muvaffaqiyat",
            "Faqat bo'sh ro'yxat"
          ],
          "answer": 2,
          "explain": "Foydalanuvchi har bir holatda nima bo'layotganini tushunishi kerak; ayniqsa yuklanish va xatoni yashirmaslik muhim."
        },
        {
          "q": "async funksiyada tarmoq xatosini qanday ushlash mumkin?",
          "options": [
            "try/catch yoki chaqiruvda .catch() bilan",
            "Faqat console.log bilan",
            "JSON.parse bilan",
            "Xatoni e'tiborsiz qoldirib"
          ],
          "answer": 0,
          "explain": "await chaqiruvini try/catch o'rab oladi; chaqiruvchi tomonda esa Promise.catch ishlatiladi."
        },
        {
          "q": "Optimistic UI yangilanishi nimani anglatadi?",
          "options": [
            "Ma'lumotni serverga yubormaslik",
            "Faqat xatoni ko'rsatish",
            "Sahifani qayta yuklash",
            "Natijani darhol ko'rsatib, server javobiga qarab keyin tuzatish"
          ],
          "answer": 3,
          "explain": "Optimistic UI foydalanuvchiga tez javob beradi, so'ng server natijasi bilan holatni tasdiqlaydi yoki qaytaradi."
        }
      ]
    },
    {
      "id": 48,
      "title": "Debugging va DevTools",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Xatoni topish — dasturlashning yarmi. Brauzer DevTools'ida <b>Console</b>, <b>Sources</b> (breakpoint), <b>Network</b> va <b>Performance</b> panellari bor. Xatoni tuzatishdan oldin uni <b>takrorlash</b> va aniq joyini topish kerak."
        },
        {
          "type": "code",
          "title": "xato.js",
          "code": "console.log(typeof nomaLum);\n\ntry {\n  console.log(nomaLum);\n} catch (xato) {\n  console.log(xato.name + \": \" + xato.message);\n}",
          "output": "undefined\nReferenceError: nomaLum is not defined",
          "runnable": true
        },
        {
          "type": "code",
          "title": "stack.js",
          "code": "function uchinchi() {\n  throw new Error(\"Sinov xatosi\");\n}\nfunction ikkinchi() {\n  uchinchi();\n}\nfunction birinchi() {\n  ikkinchi();\n}\n\ntry {\n  birinchi();\n} catch (xato) {\n  console.log(xato.message);\n  console.log(xato.stack.split(\"\\n\")[1].includes(\"uchinchi\"));\n}",
          "output": "Sinov xatosi\ntrue",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Xato",
            "Ko'p uchraydigan sabab"
          ],
          "rows": [
            [
              "<code>ReferenceError</code>",
              "Nom xato yozilgan yoki o'zgaruvchi mavjud emas"
            ],
            [
              "<code>TypeError</code>",
              "null/undefined xossasiga murojaat yoki noto'g'ri tur"
            ],
            [
              "<code>SyntaxError</code>",
              "Qavs, tirnoq yoki vergul xatosi"
            ],
            [
              "<code>404 (Network)</code>",
              "Fayl yo'li yoki API manzili noto'g'ri"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Amaliy debugging tartibi",
          "html": "1) Konsoldagi birinchi xatoni o'qing — keyingilari ko'pincha uning oqibati. 2) <code>debugger;</code> yoki Sources panelida breakpoint qo'ying. 3) Qiymatlarni <code>console.log</code> yoki Scope panelida tekshiring. 4) Network panelida so'rov statusi va javobini ko'ring. 5) Tuzatgach, xatoni qayta takrorlab tekshiring. Production'da ortiqcha log'larni olib tashlang."
        }
      ],
      "quiz": [
        {
          "q": "console.error() va console.log() orasidagi farq nima?",
          "options": [
            "error faqat raqamlarni chiqaradi",
            "log xatoni to'xtatadi",
            "error xabarni xato sifatida, ko'pincha qizil va stack bilan ko'rsatadi",
            "Farqi yo'q"
          ],
          "answer": 2,
          "explain": "console.error xabarni xato darajasida ko'rsatadi; DevTools uni ajratib beradi va filtrlay oladi."
        },
        {
          "q": "debugger; bayonoti nima qiladi?",
          "options": [
            "Xatoni avtomatik tuzatadi",
            "DevTools ochiq bo'lsa, bajarilishni shu joyda to'xtatadi",
            "Konsolni tozalaydi",
            "Serverni qayta ishga tushiradi"
          ],
          "answer": 1,
          "explain": "debugger bayonoti DevTools ochiq bo'lganda breakpoint kabi ishlaydi va shu qatorda to'xtaydi."
        },
        {
          "q": "ReferenceError nimani bildiradi?",
          "options": [
            "Mavjud bo'lmagan nomga murojaat qilinganini",
            "Fayl topilmaganini",
            "Tarmoq uzilganini",
            "JSON buzilganini"
          ],
          "answer": 0,
          "explain": "ReferenceError o'zgaruvchi yoki funksiya nomi topilmaganda yuzaga keladi."
        }
      ]
    },
    {
      "id": 49,
      "title": "Suhbatga tayyorgarlik: yakuniy takrorlash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Bu dars — kurs bo'ylab o'rganganlarni <b>suhbat savollari</b> ko'rinishida takrorlash. Maqsad formulani yodlash emas, balki har bir javobni <b>sababi bilan</b> tushuntirish. Quyidagi kod natijalarini avval o'zingiz taxmin qilib ko'ring, keyin tekshiring."
        },
        {
          "type": "code",
          "title": "tuzoqlar.js",
          "code": "console.log(JSON.stringify([] + []));\nconsole.log([] + {});\nconsole.log(typeof null);\nconsole.log(0.1 + 0.2 === 0.3);\nconsole.log(\"5\" - 2);\nconsole.log(\"5\" + 2);",
          "output": "\"\"\n[object Object]\nobject\nfalse\n3\n52",
          "runnable": true
        },
        {
          "type": "code",
          "title": "var-let.js",
          "code": "for (var i = 0; i < 3; i += 1) {\n  setTimeout(() => console.log(\"var:\", i), 0);\n}\n\nfor (let j = 0; j < 3; j += 1) {\n  setTimeout(() => console.log(\"let:\", j), 0);\n}",
          "output": "var: 3\nvar: 3\nvar: 3\nlet: 0\nlet: 1\nlet: 2",
          "runnable": true
        },
        {
          "type": "table",
          "head": [
            "Mavzu",
            "Asosiy g'oya"
          ],
          "rows": [
            [
              "Scope",
              "<code>let</code>/<code>const</code> blokda, <code>var</code> funksiyada"
            ],
            [
              "Closure",
              "Funksiya tashqi o'zgaruvchilarni eslab qoladi"
            ],
            [
              "<code>this</code>",
              "Chaqiruvga bog'liq; arrow tashqi <code>this</code>ni oladi"
            ],
            [
              "Async",
              "Promise, event loop, mikrotasklar"
            ],
            [
              "DOM",
              "Delegation, xavfsiz <code>textContent</code>"
            ],
            [
              "Sifat",
              "Test, modullar, Vite, unumdorlik, xavfsizlik"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Suhbatda qanday javob berish",
          "html": "Savolga qisqa javob bering, keyin <b>misol</b> keltiring va <b>sababini</b> tushuntiring. \"Bilmayman\" o'rniga \"buni qanday tekshirish mumkinligini aytib bera olaman\" deyish ham kuchli javob. Loyihada qabul qilgan qarorlaringiz va trade-off'larni tayyorlab boring: nima uchun Map, nima uchun modul, qanday test yozdingiz."
        },
        {
          "type": "ul",
          "items": [
            "Har kuni bitta kichik funksiya yoki komponent yozing.",
            "O'rgangan mavzuni boshqasiga tushuntirib bering — bilim mustahkamlanadi.",
            "Kodni o'qish va refaktoring qilishni mashq qiling.",
            "Keyingi qadam: React yoki Vue, so'ng Node.js va ma'lumotlar bazasi."
          ]
        }
      ],
      "quiz": [
        {
          "q": "typeof null natijasi nima?",
          "options": [
            "null",
            "object",
            "undefined",
            "NaN"
          ],
          "answer": 1,
          "explain": "Bu JavaScript'ning tarixiy xatosi: typeof null 'object' qaytaradi, garchi null alohida tur bo'lsa ham."
        },
        {
          "q": "[] + {} ifodasining natijasi nima?",
          "options": [
            "[object Object]",
            "0",
            "undefined",
            "TypeError"
          ],
          "answer": 0,
          "explain": "Massiv bo'sh matnga, obyekt '[object Object]'ga aylanadi; natija '[object Object]' bo'ladi."
        },
        {
          "q": "var bilan yozilgan tsiklda setTimeout 3 marta 'var: 3' chiqarishining sababi nima?",
          "options": [
            "setTimeout har doim 3 ni qaytaradi",
            "var faqat 3 tagacha qiymat oladi",
            "setTimeout callback'i ishlamaydi",
            "var bitta funksiya doirasidagi o'zgaruvchini bo'lishadi, callback'lar oxirgi qiymatni ko'radi"
          ],
          "answer": 3,
          "explain": "var funksiya doirasiga ega; uchala callback bitta i o'zgaruvchisiga havola qiladi va u 3 ga yetgan bo'ladi."
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
          "html": "JavaScript kursining yakuniy imtihoni. Savollar butun kursni qamrab oladi: scope va closure, <code>this</code>, destructuring va spread, Map/Set, class va meros, modullar, Promise va event loop, DOM hodisalari, xavfsizlik hamda testlash."
        },
        {
          "type": "ul",
          "items": [
            "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
            "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
            "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
            "O'tgandan keyin sertifikatni ko'rish va PDF qilib saqlash mumkin."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Topshirishdan oldin",
          "html": "Har bir savolni oxirigacha o'qing va barcha variantlarni ko'rib chiqing. Kod natijasi haqidagi savollarda qiymatni <b>o'zingiz hisoblab</b> ko'ring. Ishonchingiz komil bo'lmasa, tegishli darsga qaytib misolni qayta ishlating."
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
        "q": "Hoisting bo'yicha qaysi bayonot to'g'ri?",
        "options": [
          "let o'zgaruvchilari e'londan oldin undefined bo'ladi",
          "var e'lonlari ko'tariladi, let va const esa e'lon paytigacha TDZ'da bo'ladi",
          "Funksiya e'lonlari umuman ko'tarilmaydi",
          "const ham var kabi funksiya doirasida ishlaydi"
        ],
        "answer": 1,
        "explain": "var e'loni ko'tarilib undefined beradi; let/const ham ko'tariladi, lekin TDZ tufayli e'londan oldin murojaat xato beradi."
      },
      {
        "q": "Closure yaratilgan tashqi o'zgaruvchilarga nima bo'ladi?",
        "options": [
          "Birinchi chaqiruvdan keyin o'chib ketadi",
          "Faqat global o'zgaruvchilar yashaydi",
          "Closure ularga havola saqlagani uchun yashab qoladi",
          "Avtomatik ravishda JSON'ga aylanadi"
        ],
        "answer": 2,
        "explain": "Closure tashqi doiradagi o'zgaruvchilarga havolani saqlaydi, shuning uchun ular funksiya tugagach ham yashaydi."
      },
      {
        "q": "Arrow funksiyaning this qiymati qanday aniqlanadi?",
        "options": [
          "Tashqi lexik doiradan olinadi",
          "Har chaqiruvda o'zgaradi",
          "Har doim window obyektiga teng",
          "Faqat bind() bilan ishlaydi"
        ],
        "answer": 0,
        "explain": "Arrow funksiya o'z this'ini yaratmaydi; u yaratilgan joydagi tashqi this'ni oladi."
      },
      {
        "q": "const { a = 5 } = { a: null }; natijada a qanday qiymat oladi?",
        "options": [
          "5",
          "undefined",
          "Xato beradi",
          "null"
        ],
        "answer": 3,
        "explain": "Destructuring default'i faqat undefined uchun ishlaydi; null o'z qiymati sifatida qoladi."
      },
      {
        "q": "Spread operatori bilan obyekt nusxalanganda qaysi bayonot to'g'ri?",
        "options": [
          "To'liq chuqur nusxa yaratiladi",
          "Funksiyalar ham majburan nusxalanadi",
          "Faqat yuqori qatlam nusxalanadi",
          "Map va Set to'g'ri ko'chiriladi"
        ],
        "answer": 2,
        "explain": "Object spread sayoz nusxa beradi: ichki obyektlar ikkala nusxada ham umumiy qoladi."
      },
      {
        "q": "Map'ning oddiy obyektdan qaysi afzalligi bor?",
        "options": [
          "JSON'ga avtomatik aylanadi",
          "Kalit sifatida istalgan turdagi qiymatni qabul qiladi va size xossasi bor",
          "Faqat matn kalitlarini qabul qiladi",
          "Elementlar tartibini saqlamaydi"
        ],
        "answer": 1,
        "explain": "Map kalit sifatida obyekt yoki sonni ham oladi, elementlar sonini size orqali beradi va tartibni saqlaydi."
      },
      {
        "q": "Bola class konstruktorida super() chaqirilmasa nima yuz beradi?",
        "options": [
          "Class avtomatik ishlaydi",
          "Faqat konsol ogohlantirishi chiqadi",
          "Ota class metodlari o'chib ketadi",
          "this ishlatilganda ReferenceError bo'ladi"
        ],
        "answer": 3,
        "explain": "Bola konstruktorda this'ga murojaat qilishdan oldin super() chaqirilishi shart; aks holda ReferenceError beradi."
      },
      {
        "q": "Promise.allSettled() qanday natija qaytaradi?",
        "options": [
          "Har bir Promise holati va qiymati yoki xatosini",
          "Faqat birinchi bajarilgan natijani",
          "Faqat rad etilgan Promise'larni",
          "Promise emas, darhol massivni"
        ],
        "answer": 0,
        "explain": "allSettled barcha Promise'larni kutadi va har biri uchun status hamda value/reason beradi."
      },
      {
        "q": "Event delegation uchun qaysi yondashuv mos?",
        "options": [
          "Har bir tugmaga alohida listener va stopPropagation",
          "window resize va setTimeout",
          "Ota elementga bitta listener va event.target.closest()",
          "preventDefault va form.reset"
        ],
        "answer": 2,
        "explain": "Delegation ota elementga bitta tinglovchi qo'yib, event.target.closest() orqali qaysi bola ekanini aniqlaydi."
      },
      {
        "q": "Foydalanuvchi kiritgan matnni XSS xavfisiz joylashtirish uchun nima ishlatiladi?",
        "options": [
          "innerHTML",
          "document.write",
          "eval",
          "textContent"
        ],
        "answer": 3,
        "explain": "textContent matnni HTML sifatida talqin qilmaydi, shuning uchun ichidagi skript bajarilmaydi."
      },
      {
        "q": "Dinamik importning to'g'ri yozuvi qaysi?",
        "options": [
          "require('./modul.js')",
          "include('./modul.js')",
          "await import('./modul.js')",
          "load module('./modul.js')"
        ],
        "answer": 2,
        "explain": "Dinamik import import() funksiyasi ko'rinishida yoziladi va Promise qaytaradi; modul muhitida await bilan kutiladi."
      },
      {
        "q": "Event loop bo'yicha qaysi tartib to'g'ri?",
        "options": [
          "Sinxron kod → Promise.then → setTimeout callback",
          "setTimeout callback → Promise.then → sinxron kod",
          "Promise.then → sinxron kod → setTimeout callback",
          "Barchasi bir vaqtda bajariladi"
        ],
        "answer": 0,
        "explain": "Avval sinxron kod tugaydi, keyin mikrotasklar (Promise.then), so'ng keyingi makrotask (setTimeout) bajariladi."
      }
    ]
  }
};
})();
