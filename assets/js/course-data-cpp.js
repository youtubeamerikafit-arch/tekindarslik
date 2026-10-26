/* C++ course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.cpp = {
  "id": "cpp",
  "title": "C++",
  "logoClass": "course-logo--cpp",
  "logoText": "C++",
  "level": "Boshlovchi",
  "hours": "~20 soat",
  "testCount": 147,
  "lang": "cpp",
  "interactive": "none",
  "heroTitle": "C++: tez va kuchli dasturlash tili",
  "heroDesc": "49 darsda C++ asoslaridan zamonaviy C++ va yakuniy loyihagacha: sintaksis, STL, OOP, smart pointerlar, CMake va parallelizm. 147 test va 12-savollik imtihon bilan bilimingizni sinang.",
  "metaDescription": "C++ kursi: 49 dars, 147 test, kod namunalari va 12 savollik yakuniy imtihon. C++ asoslarini o'zbek tilida noldan o'rganing.",
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
      "title": "Mantiq va funksiyalar",
      "lessons": [
        4,
        5,
        6
      ]
    },
    {
      "title": "Ma'lumotlar va xotira",
      "lessons": [
        7,
        8,
        9
      ]
    },
    {
      "title": "Amaliyot va zamonaviy asoslar",
      "lessons": [
        10,
        11,
        12,
        13,
        14
      ]
    },
    {
      "title": "Matn, konteynerlar va algoritmlar",
      "lessons": [
        15,
        16,
        17,
        18,
        19
      ]
    },
    {
      "title": "Lambda, shablonlar va OOP",
      "lessons": [
        20,
        21,
        22,
        23,
        24
      ]
    },
    {
      "title": "Resurslar va istisnolar",
      "lessons": [
        25,
        26,
        27,
        28,
        29
      ]
    },
    {
      "title": "Muhit, sifat va parallelizm",
      "lessons": [
        30,
        31,
        32,
        33,
        34
      ]
    },
    {
      "title": "Unumdorlik, tuzilmalar va vaqt",
      "lessons": [
        35,
        36,
        37,
        38,
        39
      ]
    },
    {
      "title": "Tasodif, fayllar va sifat",
      "lessons": [
        40,
        41,
        42,
        43,
        44
      ]
    },
    {
      "title": "Loyiha va yakun",
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
      "title": "C++ nima va dastur qanday ishlaydi?",
      "minutes": 13,
      "blocks": [
        {
          "type": "p",
          "html": "C++ — tez va samarali dasturlash tili. U kompilyatsiya qilinadi: yozilgan kod avval mashina kodiga aylantiriladi, keyin bajariladi. Shuning uchun o'yinlar, brauzerlar va operatsion tizimlarning ayrim qismlari C++'da yozilgan."
        },
        {
          "type": "code",
          "title": "main.cpp",
          "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Salom, Noldan!\" << std::endl;\n    std::cout << \"C++ ishlayapti.\" << std::endl;\n    return 0;\n}",
          "output": "Salom, Noldan!\nC++ ishlayapti."
        },
        {
          "type": "code",
          "title": "chiqarish.cpp",
          "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Noldan\" << \" — \" << \"C++\" << '\\n';\n    std::cout << \"2 + 3 = \" << 2 + 3 << '\\n';\n    return 0;\n}",
          "output": "Noldan — C++\n2 + 3 = 5"
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>#include &lt;iostream&gt;</code>",
              "Kirish-chiqarish kutubxonasini ulaydi"
            ],
            [
              "<code>int main()</code>",
              "Dasturning kirish nuqtasi"
            ],
            [
              "<code>std::cout</code>",
              "Konsolga chiqarish oqimi"
            ],
            [
              "<code>&lt;&lt;</code>",
              "Qiymatni oqimga yuborish"
            ],
            [
              "<code>return 0;</code>",
              "Dastur muvaffaqiyatli tugadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Nega ; kerak?",
          "html": "C++'da har bir buyruq <code>;</code> bilan tugaydi. Bu kompilyatorga buyruq qayerda tugashini bildiradi. Qavslar <code>{ }</code> esa bloklarni o'raydi."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Kompilyatsiya",
          "html": "Kodni <code>g++ main.cpp -o main</code> bilan kompilyatsiya qilib, <code>./main</code> bilan ishga tushirish mumkin. Kursda misollar natijasi tayyor ko'rsatiladi, chunki brauzerda C++ kompilyatori yo'q."
        }
      ],
      "quiz": [
        {
          "q": "C++ dasturi qaysi funksiyadan boshlanadi?",
          "options": [
            "main()",
            "run()",
            "cout()",
            "start()"
          ],
          "answer": 0,
          "explain": "Har bir C++ dasturida bitta main() funksiyasi bo'ladi va bajarish shundan boshlanadi."
        },
        {
          "q": "Konsolga chiqarish uchun nima ishlatiladi?",
          "options": [
            "print()",
            "std::cout",
            "echo()",
            "console.log()"
          ],
          "answer": 1,
          "explain": "std::cout chiqarish oqimi; << operatori qiymatni unga yuboradi."
        },
        {
          "q": "#include <iostream> nima qiladi?",
          "options": [
            "O'zgaruvchi yaratadi",
            "Faylni o'chiradi",
            "Kirish-chiqarish kutubxonasini ulaydi",
            "Dasturni to'xtatadi"
          ],
          "answer": 2,
          "explain": "iostream kutubxonasi cout, cin kabi vositalarni beradi."
        }
      ]
    },
    {
      "id": 2,
      "title": "O'zgaruvchilar va ma'lumot turlari",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "C++ — <b>statik tipli</b> til: o'zgaruvchi yaratilganda uning turi aniq ko'rsatiladi. Tur xotira hajmi va qanday amallar bajarilishini belgilaydi."
        },
        {
          "type": "code",
          "title": "turlar.cpp",
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int yosh = 15;\n    double baho = 4.8;\n    char harf = 'A';\n    bool faol = true;\n    std::string ism = \"Aziza\";\n\n    std::cout << ism << \" — \" << yosh << \" yosh\" << std::endl;\n    std::cout << \"Baho: \" << baho << std::endl;\n    std::cout << \"Harf: \" << harf << std::endl;\n    std::cout << \"Faol: \" << faol << std::endl;\n\n    const int MAX_BALL = 100;\n    std::cout << \"Maksimal ball: \" << MAX_BALL << std::endl;\n    return 0;\n}",
          "output": "Aziza — 15 yosh\nBaho: 4.8\nHarf: A\nFaol: 1\nMaksimal ball: 100"
        },
        {
          "type": "code",
          "title": "arifmetika.cpp",
          "code": "#include <iostream>\n\nint main() {\n    int olma = 7;\n    int boluvchi = 2;\n    std::cout << \"Butun bo'lish: \" << olma / boluvchi << '\\n';\n\n    double narx = 12.5;\n    std::cout << \"Narx: \" << narx << '\\n';\n\n    char harf = 'A';\n    std::cout << \"Keyingi harf: \" << static_cast<char>(harf + 1) << '\\n';\n    return 0;\n}",
          "output": "Butun bo'lish: 3\nNarx: 12.5\nKeyingi harf: B"
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
              "<code>int</code>",
              "<code>42</code>",
              "Butun son"
            ],
            [
              "<code>double</code>",
              "<code>3.14</code>",
              "Kasr son"
            ],
            [
              "<code>char</code>",
              "<code>'A'</code>",
              "Bitta belgi"
            ],
            [
              "<code>bool</code>",
              "<code>true</code>",
              "Rost/yolg'on"
            ],
            [
              "<code>std::string</code>",
              "<code>\"Aziza\"</code>",
              "Matn"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Eslatma",
          "html": "<code>bool</code> qiymati konsolda <code>1</code> yoki <code>0</code> bo'lib chiqadi. Matnda chiqarish uchun <code>std::boolalpha</code> ishlatish mumkin. Qo'shtirnoq <code>\"</code> matn, bir tirnoq <code>'</code> esa bitta belgi uchun."
        }
      ],
      "quiz": [
        {
          "q": "Kasr sonlar uchun qaysi tur ishlatiladi?",
          "options": [
            "char",
            "bool",
            "int",
            "double"
          ],
          "answer": 3,
          "explain": "double kasr sonlarni saqlaydi. float ham bor, lekin double odatda aniqroq."
        },
        {
          "q": "Bitta belgi qaysi turda saqlanadi?",
          "options": [
            "char",
            "bool",
            "double",
            "string"
          ],
          "answer": 0,
          "explain": "char bitta belgini saqlaydi: 'A'."
        },
        {
          "q": "const int MAX = 100; nima anglatadi?",
          "options": [
            "Qiymatni keyin o'zgartirish mumkin",
            "Qiymat o'zgarmas",
            "O'zgaruvchi butun son emas",
            "Xato"
          ],
          "answer": 1,
          "explain": "const o'zgaruvchini o'zgarmas qiladi, keyin unga qiymat berib bo'lmaydi."
        }
      ]
    },
    {
      "id": 3,
      "title": "Kiritish va chiqarish: cin, getline",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "Foydalanuvchidan ma'lumot olish uchun <code>std::cin</code> ishlatiladi. Oddiy son yoki bitta so'z uchun <code>cin &gt;&gt; qiymat</code>, bo'sh joyli butun qator uchun <code>getline(cin, matn)</code> kerak."
        },
        {
          "type": "code",
          "title": "kiritish.cpp",
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string ism;\n    int yosh;\n\n    std::cout << \"Ismingiz: \";\n    std::cin >> ism;\n\n    std::cout << \"Yoshingiz: \";\n    std::cin >> yosh;\n\n    std::cout << \"Salom, \" << ism << \"! Siz \" << yosh << \" yoshdasiz.\" << std::endl;\n    return 0;\n}",
          "output": "Ismingiz: Aziza\nYoshingiz: 15\nSalom, Aziza! Siz 15 yoshdasiz.",
          "outputLabel": "Kutilgan natija (kiritish bilan)"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "cin faqat bitta so'zni oladi",
          "html": "<code>cin &gt;&gt; ism</code> bo'sh joygacha o'qiydi. “Aziza Karimova” kabi to'liq ism uchun <code>getline(cin, ism)</code> ishlatiladi. Ba'zan oldingi <code>cin</code> qoldirgan yangi qatorni tozalash uchun <code>cin.ignore()</code> kerak bo'ladi."
        },
        {
          "type": "code",
          "title": "getline.cpp",
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string toliqIsm;\n    std::cout << \"To'liq ismingiz: \";\n    std::getline(std::cin, toliqIsm);\n    std::cout << \"Xush kelibsiz, \" << toliqIsm << \"!\" << std::endl;\n    return 0;\n}",
          "output": "To'liq ismingiz: Aziza Karimova\nXush kelibsiz, Aziza Karimova!",
          "outputLabel": "Kutilgan natija (kiritish bilan)"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Natija",
            "Qachon ishlatiladi"
          ],
          "rows": [
            [
              "<code>cin &gt;&gt; ism</code>",
              "Bitta so'z",
              "Bo'sh joysiz qiymat"
            ],
            [
              "<code>getline(cin, matn)</code>",
              "Butun qator",
              "Bo'sh joyli matn"
            ],
            [
              "<code>cin.ignore()</code>",
              "Buferdagi belgini tashlaydi",
              "Aralash kiritishdan keyin"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "Son o'qish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "input(yosh)",
            "cin << yosh",
            "cin >> yosh",
            "cout >> yosh"
          ],
          "answer": 2,
          "explain": "cin >> yosh klaviaturadan yosh o'zgaruvchisiga qiymat o'qiydi."
        },
        {
          "q": "Bo'sh joyli to'liq matnni o'qish uchun nima ishlatiladi?",
          "options": [
            "cout << matn",
            "read(matn)",
            "cin >> matn",
            "getline(cin, matn)"
          ],
          "answer": 3,
          "explain": "getline butun qatorni, bo'sh joylarni ham qo'shib o'qiydi."
        },
        {
          "q": "cout qaysi operator bilan qiymat qabul qiladi?",
          "options": [
            "<<",
            "=",
            "=>",
            ">>"
          ],
          "answer": 0,
          "explain": "<< qiymatni chiqarish oqimiga yuboradi."
        }
      ]
    },
    {
      "id": 4,
      "title": "Shart operatorlari: if, else va switch",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Shartlar dasturga qaror qabul qilish imkonini beradi. <code>if</code> shartni tekshiradi, <code>else if</code> boshqa variantni, <code>else</code> esa qolgan holatni bajaradi."
        },
        {
          "type": "code",
          "title": "shart.cpp",
          "code": "#include <iostream>\n\nint main() {\n    int ball = 85;\n\n    if (ball >= 90) {\n        std::cout << \"A daraja\" << std::endl;\n    } else if (ball >= 80) {\n        std::cout << \"B daraja\" << std::endl;\n    } else if (ball >= 70) {\n        std::cout << \"C daraja\" << std::endl;\n    } else {\n        std::cout << \"Yana harakat qiling\" << std::endl;\n    }\n\n    return 0;\n}",
          "output": "B daraja"
        },
        {
          "type": "p",
          "html": "Bir nechta aniq variantni tekshirish uchun <code>switch</code> qulay. Har bir <code>case</code> oxirida <code>break</code> qo'yilmasa, keyingi case ham bajarilib ketadi."
        },
        {
          "type": "code",
          "title": "switch.cpp",
          "code": "#include <iostream>\n\nint main() {\n    int kun = 3;\n\n    switch (kun) {\n        case 1:\n            std::cout << \"Dushanba\";\n            break;\n        case 2:\n            std::cout << \"Seshanba\";\n            break;\n        case 3:\n            std::cout << \"Chorshanba\";\n            break;\n        default:\n            std::cout << \"Boshqa kun\";\n    }\n\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "Chorshanba"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Mantiqiy operatorlar",
          "html": "<code>&&</code> — VA, <code>||</code> — YOKI, <code>!</code> — EMAS. Taqqoslash uchun <code>==</code> ishlatiladi; bitta <code>=</code> qiymat beradi, uni shartda adashtirmang."
        }
      ],
      "quiz": [
        {
          "q": "Taqqoslash operatori qaysi?",
          "options": [
            "=",
            "==",
            "=>",
            "::"
          ],
          "answer": 1,
          "explain": "== ikki qiymatni taqqoslaydi; = o'zgaruvchiga qiymat beradi."
        },
        {
          "q": "switch ichida case tugagach nima yozilishi kerak?",
          "options": [
            "end",
            "continue",
            "break",
            "stop"
          ],
          "answer": 2,
          "explain": "break switch blokidan chiqadi; aks holda keyingi case ham bajariladi."
        },
        {
          "q": "Ikkala shart rost bo'lishini talab qiluvchi operator qaysi?",
          "options": [
            "!",
            "==",
            "||",
            "&&"
          ],
          "answer": 3,
          "explain": "&& mantiqiy VA operatori; ikkala shart true bo'lsa true qaytaradi."
        }
      ]
    },
    {
      "id": 5,
      "title": "Tsikllar: for, while va do-while",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Tsikllar kodni bir necha marta bajaradi. <code>for</code> takrorlar soni ma'lum bo'lganda, <code>while</code> shartga bog'liq holda, <code>do-while</code> esa kamida bir marta bajarilishi kerak bo'lganda ishlatiladi."
        },
        {
          "type": "code",
          "title": "tsikl.cpp",
          "code": "#include <iostream>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        std::cout << \"Qadam: \" << i << std::endl;\n    }\n\n    int son = 3;\n    while (son > 0) {\n        std::cout << \"Qoldi: \" << son << std::endl;\n        son--;\n    }\n\n    int urinish = 0;\n    do {\n        urinish++;\n        std::cout << \"Urinish: \" << urinish << std::endl;\n    } while (urinish < 2);\n\n    return 0;\n}",
          "output": "Qadam: 1\nQadam: 2\nQadam: 3\nQadam: 4\nQadam: 5\nQoldi: 3\nQoldi: 2\nQoldi: 1\nUrinish: 1\nUrinish: 2"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Cheksiz tsikl",
          "html": "<code>while</code> sharti hech qachon false bo'lmasa, dastur tugamaydi. Shartni o'zgartiradigan kod borligini tekshiring. Zarur bo'lsa <code>break</code> bilan chiqing."
        },
        {
          "type": "code",
          "title": "break-continue.cpp",
          "code": "#include <iostream>\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i == 3) continue;\n        if (i == 6) break;\n        std::cout << i << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "1 2 4 5"
        },
        {
          "type": "ul",
          "items": [
            "<code>for</code> — takrorlar soni oldindan ma'lum bo'lsa.",
            "<code>while</code> — qachon tugashini shart belgilasa.",
            "<code>do-while</code> — tana kamida bir marta bajarilishi kerak bo'lsa.",
            "<code>break</code> — tsikldan chiqish, <code>continue</code> — joriy aylanishni o'tkazib yuborish."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Kamida bir marta bajariladigan tsikl qaysi?",
          "options": [
            "do-while",
            "switch",
            "for",
            "while"
          ],
          "answer": 0,
          "explain": "do-while avval tanani bajaradi, keyin shartni tekshiradi."
        },
        {
          "q": "continue operatori nima qiladi?",
          "options": [
            "Tsiklni tugatadi",
            "Joriy aylanishni o'tkazib yuboradi",
            "Dasturni to'xtatadi",
            "Funksiyaga qaytadi"
          ],
          "answer": 1,
          "explain": "continue qolgan qismni o'tkazib, keyingi aylanishga o'tadi."
        },
        {
          "q": "for (int i = 0; i < 3; i++) necha marta bajariladi?",
          "options": [
            "Cheksiz",
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "explain": "i = 0, 1, 2 — jami 3 marta."
        }
      ]
    },
    {
      "id": 6,
      "title": "Funksiyalar va parametrlar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya ma'lum bir ishni bajaradigan kod bloki. C++'da funksiya turi, nomi, parametrlari va qaytaradigan qiymati turi ko'rsatiladi. <code>main</code>dan oldin e'lon qilish yoki prototip yozish kerak."
        },
        {
          "type": "code",
          "title": "funksiya.cpp",
          "code": "#include <iostream>\n#include <string>\n\nint qosh(int a, int b) {\n    return a + b;\n}\n\ndouble ortacha(double a, double b) {\n    return (a + b) / 2;\n}\n\nvoid salomlash(std::string ism) {\n    std::cout << \"Salom, \" << ism << \"!\" << std::endl;\n}\n\nint main() {\n    std::cout << qosh(2, 3) << std::endl;\n    std::cout << ortacha(10, 20) << std::endl;\n    salomlash(\"Aziza\");\n    return 0;\n}",
          "output": "5\n15\nSalom, Aziza!"
        },
        {
          "type": "table",
          "head": [
            "Qism",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>int</code> (oldida)",
              "Qaytariladigan qiymat turi"
            ],
            [
              "<code>qosh</code>",
              "Funksiya nomi"
            ],
            [
              "<code>(int a, int b)</code>",
              "Parametrlar"
            ],
            [
              "<code>return</code>",
              "Natijani qaytarish"
            ],
            [
              "<code>void</code>",
              "Qiymat qaytarmaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Overloading",
          "html": "Bir xil nomli funksiyalar parametrlari bilan farqlanishi mumkin: <code>qosh(int, int)</code> va <code>qosh(double, double)</code>. Kompilyator qaysi birini chaqirishni argumentlarga qarab tanlaydi."
        },
        {
          "type": "code",
          "title": "overload.cpp",
          "code": "#include <iostream>\n#include <string>\n\nint qosh(int a, int b) {\n    return a + b;\n}\n\ndouble qosh(double a, double b) {\n    return a + b;\n}\n\nstd::string qosh(const std::string& a, const std::string& b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << qosh(2, 3) << '\\n';\n    std::cout << qosh(1.5, 2.5) << '\\n';\n    std::cout << qosh(std::string(\"C++\"), std::string(\"!\")) << '\\n';\n    return 0;\n}",
          "output": "5\n4\nC++!"
        }
      ],
      "quiz": [
        {
          "q": "Qiymat qaytarmaydigan funksiya turi qaysi?",
          "options": [
            "double",
            "return",
            "int",
            "void"
          ],
          "answer": 3,
          "explain": "void funksiya hech qanday qiymat qaytarmaydi."
        },
        {
          "q": "Funksiyadan natija qaytarish uchun nima ishlatiladi?",
          "options": [
            "return",
            "cout",
            "yield",
            "print"
          ],
          "answer": 0,
          "explain": "return qiymatni qaytaradi va funksiyani tugatadi."
        },
        {
          "q": "int qosh(int a, int b) funksiyasida qosh(3, 4) nima qaytaradi?",
          "options": [
            "4",
            "7",
            "34",
            "3"
          ],
          "answer": 1,
          "explain": "Agar funksiya a + b qaytarsa, 3 + 4 = 7 bo'ladi."
        }
      ]
    },
    {
      "id": 7,
      "title": "Massivlar va vector",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Massiv bir xil turdagi elementlarni ketma-ket saqlaydi. Oddiy massiv o'lchami oldindan ma'lum bo'lishi kerak; <code>std::vector</code> esa o'lchamini o'zgartira oladi."
        },
        {
          "type": "code",
          "title": "massiv.cpp",
          "code": "#include <iostream>\n\nint main() {\n    int sonlar[5] = {4, 8, 15, 16, 23};\n\n    for (int i = 0; i < 5; i++) {\n        std::cout << sonlar[i] << \" \";\n    }\n    std::cout << std::endl;\n\n    int yigindi = 0;\n    for (int i = 0; i < 5; i++) {\n        yigindi += sonlar[i];\n    }\n    std::cout << \"Yig'indi: \" << yigindi << std::endl;\n    return 0;\n}",
          "output": "4 8 15 16 23 \nYig'indi: 66"
        },
        {
          "type": "code",
          "title": "vector.cpp",
          "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> sonlar = {4, 8, 15};\n\n    sonlar.push_back(16);\n    sonlar.push_back(23);\n\n    std::cout << \"Soni: \" << sonlar.size() << std::endl;\n    std::cout << \"Birinchi: \" << sonlar.front() << std::endl;\n    std::cout << \"Oxirgi: \" << sonlar.back() << std::endl;\n\n    for (int son : sonlar) {\n        std::cout << son << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "Soni: 5\nBirinchi: 4\nOxirgi: 23\n4 8 15 16 23"
        },
        {
          "type": "table",
          "head": [
            "Xususiyat",
            "int a[5]",
            "std::vector<int>"
          ],
          "rows": [
            [
              "O'lcham",
              "Kompilyatsiya vaqtida qat'iy",
              "Ishlash vaqtida o'zgaradi"
            ],
            [
              "O'lchamni bilish",
              "Yo'q",
              "<code>size()</code> bor"
            ],
            [
              "Element qo'shish",
              "Yo'q",
              "<code>push_back()</code> bor"
            ],
            [
              "Xotira",
              "Obyekt joylashgan joyda",
              "Dinamik xotirada"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Indeks chegarasi",
          "html": "Massiv indekslari <code>0</code> dan boshlanadi va <code>size - 1</code> da tugaydi. Mavjud bo'lmagan indeksga murojaat qilish xotira xatosiga olib kelishi mumkin. <code>vector</code>da xavfsizroq usul — <code>at()</code>."
        }
      ],
      "quiz": [
        {
          "q": "Massivning birinchi elementi qaysi indeksda?",
          "options": [
            "size",
            "1",
            "0",
            "-1"
          ],
          "answer": 2,
          "explain": "C++ massivlari 0 dan indekslanadi."
        },
        {
          "q": "vector oxiriga element qo'shish uchun nima ishlatiladi?",
          "options": [
            "append()",
            "add()",
            "insert_end()",
            "push_back()"
          ],
          "answer": 3,
          "explain": "push_back() vector oxiriga yangi element qo'shadi."
        },
        {
          "q": "vector elementlari sonini qaysi metod qaytaradi?",
          "options": [
            "size()",
            "total()",
            "length()",
            "count()"
          ],
          "answer": 0,
          "explain": "size() elementlar sonini qaytaradi."
        }
      ]
    },
    {
      "id": 8,
      "title": "Havolalar va ko'rsatkichlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Havola (reference) — mavjud o'zgaruvchining boshqa nomi. Ko'rsatkich (pointer) esa xotiradagi manzilni saqlaydi. Ular C++ning kuchli, ammo ehtiyotkorlik talab qiladigan vositalari."
        },
        {
          "type": "code",
          "title": "reference.cpp",
          "code": "#include <iostream>\n\nvoid oshir(int& son) {\n    son += 10;\n}\n\nint main() {\n    int ball = 5;\n    oshir(ball);\n    std::cout << ball << std::endl;\n    return 0;\n}",
          "output": "15"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "& belgisi",
          "html": "Funksiya parametrida <code>int&amp; son</code> — havola. Funksiya asl o'zgaruvchini o'zgartiradi, nusxasini emas. Bu katta obyektlarni ham nusxalashsiz uzatish imkonini beradi."
        },
        {
          "type": "code",
          "title": "pointer.cpp",
          "code": "#include <iostream>\n\nint main() {\n    int son = 42;\n    int* manzil = &son;\n\n    std::cout << \"Qiymat: \" << son << std::endl;\n    std::cout << \"Manzil orqali: \" << *manzil << std::endl;\n\n    *manzil = 100;\n    std::cout << \"Yangi qiymat: \" << son << std::endl;\n    return 0;\n}",
          "output": "Qiymat: 42\nManzil orqali: 42\nYangi qiymat: 100"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xotira xavfsizligi",
          "html": "Boshlovchi sifatida ko'rsatkichlarni ehtiyotkorlik bilan ishlating. Hech qachon bo'shatilgan xotiraga murojaat qilmang va <code>nullptr</code>ni tekshirmasdan ishlatmang. Zamonaviy C++'da <code>std::vector</code> va smart pointerlar afzal."
        }
      ],
      "quiz": [
        {
          "q": "int& son yozuvida & nimani bildiradi?",
          "options": [
            "Manzil operatori",
            "Havola",
            "Mantiqiy VA",
            "Faqat bezak"
          ],
          "answer": 1,
          "explain": "Tur nomidan keyingi & havola ekanini bildiradi."
        },
        {
          "q": "Ko'rsatkich qaysi qiymatni saqlaydi?",
          "options": [
            "Faylni",
            "Faqat sonni",
            "Xotira manzilini",
            "Matnni"
          ],
          "answer": 2,
          "explain": "Pointer boshqa o'zgaruvchining xotira manzilini saqlaydi."
        },
        {
          "q": "Ko'rsatkich orqali qiymatni olish uchun qaysi operator ishlatiladi?",
          "options": [
            "->",
            "::",
            "&",
            "*"
          ],
          "answer": 3,
          "explain": "* dereference operatori manzildagi qiymatni oladi."
        }
      ]
    },
    {
      "id": 9,
      "title": "Struct va class yordamida obyektlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Klass — o'zgaruvchilar (xossalar) va funksiyalar (metodlar)ni birlashtirgan shablon. <code>struct</code> ham shunga o'xshaydi, lekin uning a'zolari standart holatda ochiq (<code>public</code>), klassda esa yopiq (<code>private</code>)."
        },
        {
          "type": "code",
          "title": "talaba.cpp",
          "code": "#include <iostream>\n#include <string>\n\nclass Talaba {\npublic:\n    std::string ism;\n    int ball;\n\n    Talaba(const std::string& ism, int ball) {\n        this->ism = ism;\n        this->ball = ball;\n    }\n\n    void tanishtir() {\n        std::cout << ism << \" — \" << ball << \" ball\" << std::endl;\n    }\n\n    bool otdi() {\n        return ball >= 60;\n    }\n};\n\nint main() {\n    Talaba aziza(\"Aziza\", 85);\n    Talaba bek(\"Bek\", 55);\n\n    aziza.tanishtir();\n    bek.tanishtir();\n\n    std::cout << \"Aziza o'tdi: \" << aziza.otdi() << std::endl;\n    std::cout << \"Bek o'tdi: \" << bek.otdi() << std::endl;\n    return 0;\n}",
          "output": "Aziza — 85 ball\nBek — 55 ball\nAziza o'tdi: 1\nBek o'tdi: 0"
        },
        {
          "type": "ul",
          "items": [
            "<code>public</code> — a'zolar tashqaridan ochiq.",
            "<code>private</code> — faqat klass ichida ishlatiladi.",
            "Konstruktor — obyekt yaratilganda ishlaydigan maxsus metod.",
            "<code>this</code> — obyektning o'ziga ko'rsatkich."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Encapsulation",
          "html": "Xossalarni <code>private</code> qilib, ularga metod orqali murojaat qilish yaxshi amaliyot. Shunda qiymatni tekshirish va himoyalash mumkin. Bu OOPning asosiy tamoyillaridan biri."
        },
        {
          "type": "code",
          "title": "inkapsulyatsiya.cpp",
          "code": "#include <iostream>\n\nclass Hisob {\npublic:\n    explicit Hisob(int boshlangich) : balans_(boshlangich) {}\n\n    void qosh(int summa) {\n        if (summa > 0) {\n            balans_ += summa;\n        }\n    }\n\n    int balans() const {\n        return balans_;\n    }\n\nprivate:\n    int balans_;\n};\n\nint main() {\n    Hisob h(100);\n    h.qosh(50);\n    std::cout << \"Balans: \" << h.balans() << '\\n';\n    return 0;\n}",
          "output": "Balans: 150"
        }
      ],
      "quiz": [
        {
          "q": "Obyekt yaratilganda avtomatik ishlaydigan metod qanday nomlanadi?",
          "options": [
            "Konstruktor",
            "Main",
            "Init",
            "Destruktor"
          ],
          "answer": 0,
          "explain": "Konstruktor klass nomi bilan ataladi va obyekt yaratilganda ishlaydi."
        },
        {
          "q": "class a'zolari standart holatda qanday bo'ladi?",
          "options": [
            "public",
            "private",
            "static",
            "virtual"
          ],
          "answer": 1,
          "explain": "class'da standart kirish huquqi private; struct'da public."
        },
        {
          "q": "this ko'rsatkichi nimani bildiradi?",
          "options": [
            "Faylni",
            "Natijani",
            "Joriy obyektni",
            "Klass nomini"
          ],
          "answer": 2,
          "explain": "this metod chaqirilgan joriy obyektga ishora qiladi."
        }
      ]
    },
    {
      "id": 10,
      "title": "Xatolar va fayllar bilan ishlash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Xato yuz berishi mumkin bo'lgan kodni <code>try</code> blokiga olish va <code>catch</code> bilan ushlash dasturni to'liq to'xtab qolishdan saqlaydi. <code>throw</code> esa xatoni o'zingiz yaratish uchun ishlatiladi."
        },
        {
          "type": "code",
          "title": "xato.cpp",
          "code": "#include <iostream>\n#include <stdexcept>\n\nint bol(int a, int b) {\n    if (b == 0) {\n        throw std::runtime_error(\"Nolga bo'lib bo'lmaydi\");\n    }\n    return a / b;\n}\n\nint main() {\n    try {\n        std::cout << bol(10, 2) << std::endl;\n        std::cout << bol(5, 0) << std::endl;\n    } catch (const std::runtime_error& xato) {\n        std::cout << \"Xato: \" << xato.what() << std::endl;\n    }\n    return 0;\n}",
          "output": "5\nXato: Nolga bo'lib bo'lmaydi"
        },
        {
          "type": "p",
          "html": "Faylga yozish uchun <code>std::ofstream</code>, fayldan o'qish uchun <code>std::ifstream</code> ishlatiladi. Fayl avtomatik yopilishi uchun obyekt blokdan chiqishida destructor ishlaydi."
        },
        {
          "type": "code",
          "title": "fayl.cpp",
          "code": "#include <iostream>\n#include <fstream>\n#include <string>\n\nint main() {\n    std::ofstream yozish(\"natija.txt\");\n    yozish << \"Salom, fayl!\" << std::endl;\n    yozish.close();\n\n    std::ifstream oqish(\"natija.txt\");\n    std::string qator;\n    while (std::getline(oqish, qator)) {\n        std::cout << qator << std::endl;\n    }\n    return 0;\n}",
          "output": "Salom, fayl!",
          "outputLabel": "Kutilgan natija"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Fayl ochildimi?",
          "html": "Fayl mavjud bo'lmasa yoki ruxsat bo'lmasa, oqim ochilmaydi. Ishonchli kodda <code>if (!oqish) { ... }</code> bilan tekshirish kerak."
        }
      ],
      "quiz": [
        {
          "q": "Xatoni ushlash uchun qaysi blok ishlatiladi?",
          "options": [
            "if/else",
            "for/while",
            "switch/case",
            "try/catch"
          ],
          "answer": 3,
          "explain": "try ichidagi xato catch blokida ushlanadi."
        },
        {
          "q": "Xatoni qo'lda yaratish uchun nima ishlatiladi?",
          "options": [
            "throw",
            "break",
            "cout",
            "return"
          ],
          "answer": 0,
          "explain": "throw istisno (exception) yaratadi."
        },
        {
          "q": "Fayldan o'qish uchun qaysi tur ishlatiladi?",
          "options": [
            "ofstream",
            "ifstream",
            "fstream::write",
            "stringstream"
          ],
          "answer": 1,
          "explain": "ifstream kirish (input) fayl oqimi hisoblanadi."
        }
      ]
    },
    {
      "id": 11,
      "title": "STL: vector, map va algoritmlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "STL (Standard Template Library) — C++ning tayyor ma'lumot tuzilmalari va algoritmlari. <code>vector</code>, <code>map</code>, <code>sort</code>, <code>find</code> kabi vositalar kodni qisqa va ishonchli qiladi."
        },
        {
          "type": "code",
          "title": "map.cpp",
          "code": "#include <iostream>\n#include <map>\n#include <string>\n\nint main() {\n    std::map<std::string, int> ballar;\n\n    ballar[\"Aziza\"] = 92;\n    ballar[\"Bek\"] = 78;\n    ballar[\"Dilnoza\"] = 88;\n\n    for (const auto& juft : ballar) {\n        std::cout << juft.first << \": \" << juft.second << std::endl;\n    }\n\n    std::cout << \"Aziza: \" << ballar[\"Aziza\"] << std::endl;\n    std::cout << \"Soni: \" << ballar.size() << std::endl;\n    return 0;\n}",
          "output": "Aziza: 92\nBek: 78\nDilnoza: 88\nAziza: 92\nSoni: 3"
        },
        {
          "type": "code",
          "title": "sort.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> sonlar = {42, 8, 15, 4, 23};\n\n    std::sort(sonlar.begin(), sonlar.end());\n\n    for (int son : sonlar) {\n        std::cout << son << \" \";\n    }\n    std::cout << std::endl;\n\n    bool bor = std::find(sonlar.begin(), sonlar.end(), 15) != sonlar.end();\n    std::cout << \"15 bor: \" << bor << std::endl;\n    return 0;\n}",
          "output": "4 8 15 23 42 \n15 bor: 1"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Range for",
          "html": "<code>for (int son : sonlar)</code> — vector yoki massiv elementlarini indekssiz ko'rish usuli. O'zgartirish kerak bo'lsa <code>for (int&amp; son : sonlar)</code> yoziladi."
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Qaysi konteyner?",
          "html": "Tartib muhim bo'lsa — <code>vector</code>. Kalit bo'yicha tez qidirish kerak bo'lsa — <code>map</code>. Noyob elementlar to'plami kerak bo'lsa — <code>set</code>."
        }
      ],
      "quiz": [
        {
          "q": "Kalit va qiymat juftliklarini saqlovchi STL konteyneri qaysi?",
          "options": [
            "array",
            "vector",
            "map",
            "string"
          ],
          "answer": 2,
          "explain": "map kalit -> qiymat ko'rinishida saqlaydi."
        },
        {
          "q": "Vektorni tartiblash uchun qaysi funksiya ishlatiladi?",
          "options": [
            "std::order",
            "std::arrange",
            "vector.sort()",
            "std::sort"
          ],
          "answer": 3,
          "explain": "std::sort(begin, end) elementlarni o'sish tartibida tartiblaydi."
        },
        {
          "q": "for (int son : sonlar) qanday tsikl?",
          "options": [
            "Range-based for",
            "do-while",
            "switch",
            "while"
          ],
          "answer": 0,
          "explain": "Bu range-based for bo'lib, har bir elementni navbat bilan oladi."
        }
      ]
    },
    {
      "id": 12,
      "title": "Mini loyiha: talabalar jurnali",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "O'rganganlarimizni birlashtiramiz: <code>struct</code>, <code>vector</code>, funksiyalar va STL yordamida talabalar ro'yxatini boshqaradigan konsol dasturi yozamiz."
        },
        {
          "type": "code",
          "title": "main.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nstruct Talaba {\n    std::string ism;\n    int ball;\n};\n\nvoid qosh(std::vector<Talaba>& talabalar, const std::string& ism, int ball) {\n    talabalar.push_back({ism, ball});\n}\n\nvoid chiqar(const std::vector<Talaba>& talabalar) {\n    for (const auto& talaba : talabalar) {\n        std::cout << talaba.ism << \": \" << talaba.ball << std::endl;\n    }\n}\n\nint main() {\n    std::vector<Talaba> talabalar;\n\n    qosh(talabalar, \"Aziza\", 92);\n    qosh(talabalar, \"Bek\", 78);\n    qosh(talabalar, \"Dilnoza\", 88);\n\n    std::sort(talabalar.begin(), talabalar.end(),\n              [](const Talaba& a, const Talaba& b) {\n                  return a.ball > b.ball;\n              });\n\n    std::cout << \"Ball bo'yicha reyting:\" << std::endl;\n    chiqar(talabalar);\n\n    int jami = 0;\n    for (const auto& talaba : talabalar) {\n        jami += talaba.ball;\n    }\n    std::cout << \"O'rtacha: \" << jami / talabalar.size() << std::endl;\n\n    return 0;\n}",
          "output": "Ball bo'yicha reyting:\nAziza: 92\nDilnoza: 88\nBek: 78\nO'rtacha: 86"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Loyihani kengaytiring",
          "html": "Faylga saqlash, talabani o'chirish, ism bo'yicha qidirish yoki eng yaxshi 3 talabani chiqarishni qo'shib ko'ring. Har bir qo'shimcha — yangi amaliyot."
        },
        {
          "type": "ul",
          "items": [
            "Ma'lumot modeli: <code>struct Talaba</code>.",
            "Saqlash: <code>std::vector&lt;Talaba&gt;</code>.",
            "Tartiblash: <code>std::sort</code> va lambda.",
            "Hisoblash: range-based for va yig'indi."
          ]
        },
        {
          "type": "code",
          "title": "qidirish.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nstruct Talaba {\n    std::string ism;\n    int ball;\n};\n\nconst Talaba* top(const std::vector<Talaba>& talabalar, const std::string& ism) {\n    auto it = std::find_if(talabalar.begin(), talabalar.end(),\n        [&ism](const Talaba& t) { return t.ism == ism; });\n    return it == talabalar.end() ? nullptr : &*it;\n}\n\nint main() {\n    std::vector<Talaba> talabalar = {{\"Aziza\", 92}, {\"Bek\", 78}};\n    const Talaba* t = top(talabalar, \"Bek\");\n\n    if (t != nullptr) {\n        std::cout << t->ism << \": \" << t->ball << '\\n';\n    }\n    return 0;\n}",
          "output": "Bek: 78"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Keyingi qadam",
          "html": "Bu mini loyiha asoslar bosqichini yakunlaydi. Keyingi darslarda havolalar va const, matn bilan ishlash, STL algoritmlari, OOP, smart pointerlar va yakuniy loyihani chuqurroq o'rganamiz."
        }
      ],
      "quiz": [
        {
          "q": "Loyihada talabalar qaysi konteynerda saqlanadi?",
          "options": [
            "map",
            "vector",
            "set",
            "string"
          ],
          "answer": 1,
          "explain": "std::vector<Talaba> talabalar ro'yxatini saqlaydi."
        },
        {
          "q": "Talabalarni ball bo'yicha kamayish tartibida tartiblash uchun nima ishlatilgan?",
          "options": [
            "map",
            "while",
            "std::sort va lambda",
            "std::reverse"
          ],
          "answer": 2,
          "explain": "std::sort comparator sifatida lambda qabul qiladi: a.ball > b.ball."
        },
        {
          "q": "const auto& talaba : talabalar yozuvida & nima uchun?",
          "options": [
            "Rang berish",
            "Massiv yaratish",
            "Xatoni yashirish",
            "Nusxalashni kamaytirish"
          ],
          "answer": 3,
          "explain": "Havola orqali har bir element nusxalanmaydi, bu katta obyektlarda samarali."
        }
      ]
    },
    {
      "id": 13,
      "title": "Havola va ko'rsatkich: qachon qaysi biri?",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Oldingi darsda ikkalasini ham ko'rdik. Endi farqini amalda aniqlaymiz. <b>Havola</b> — mavjud obyektning ikkinchi nomi: u yaratilganda albatta biror obyektga bog'lanadi va boshqa obyektga ko'chirilmaydi. <b>Ko'rsatkich</b> — manzilni saqlaydigan alohida o'zgaruvchi: u <code>nullptr</code> bo'lishi, boshqa manzilga yo'naltirilishi mumkin."
        },
        {
          "type": "code",
          "title": "havola.cpp",
          "code": "#include <iostream>\n\nvoid oshir(int& son) {\n    son += 5;\n}\n\nint main() {\n    int ball = 10;\n    int& havola = ball;\n    havola += 2;\n    oshir(ball);\n\n    std::cout << \"ball: \" << ball << '\\n';\n    std::cout << \"havola: \" << havola << '\\n';\n    return 0;\n}",
          "output": "ball: 17\nhavola: 17"
        },
        {
          "type": "p",
          "html": "Havola bilan ishlaganda <code>ball</code> va <code>havola</code> — bitta xotira katagining ikki nomi. Shuning uchun biri orqali qilingan o'zgarish ikkinchisida ham darhol ko'rinadi. Funksiya parametri <code>int&amp;</code> bo'lsa, funksiya nusxa emas, asl o'zgaruvchini oladi."
        },
        {
          "type": "code",
          "title": "korsatkich.cpp",
          "code": "#include <iostream>\n\nvoid xavfsizOshir(int* son) {\n    if (son != nullptr) {\n        *son += 1;\n    }\n}\n\nint main() {\n    int ball = 41;\n    int* korsatkich = &ball;\n\n    xavfsizOshir(korsatkich);\n    xavfsizOshir(nullptr);\n\n    std::cout << \"ball: \" << ball << '\\n';\n    std::cout << \"korsatkich bormi: \" << (korsatkich != nullptr) << '\\n';\n    return 0;\n}",
          "output": "ball: 42\nkorsatkich bormi: 1"
        },
        {
          "type": "table",
          "head": [
            "Mezon",
            "Havola",
            "Ko'rsatkich"
          ],
          "rows": [
            [
              "Bo'sh bo'lishi",
              "Yo'q",
              "Bor — <code>nullptr</code>"
            ],
            [
              "Boshqa obyektga bog'lanish",
              "Mumkin emas",
              "Mumkin"
            ],
            [
              "Manzilni olish",
              "Odatda kerak emas",
              "<code>&amp;x</code>"
            ],
            [
              "Xavfsizlik",
              "Yuqoriroq",
              "Tekshirish talab qiladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Amaliy qoida",
          "html": "Funksiya parametri majburiy bo'lsa va obyektni o'zgartirish kerak bo'lsa — havola ishlating. Parametr ixtiyoriy bo'lsa yoki \"obyekt yo'q\" holatini bildirish kerak bo'lsa — ko'rsatkich ishlating. Zamonaviy C++da egalik uchun smart pointerlar bor; ularni keyinroq ko'ramiz."
        }
      ],
      "quiz": [
        {
          "q": "Havola yaratilganda nimaga bog'lanishi shart?",
          "options": [
            "Mavjud obyektga",
            "Faqat massivga",
            "Faqat butun songa",
            "Hech narsaga"
          ],
          "answer": 0,
          "explain": "Havola yaratilish paytida albatta bir obyektga bog'lanadi; keyin boshqasiga ko'chirilmaydi."
        },
        {
          "q": "Qaysi holatda ko'rsatkich havoladan qulayroq?",
          "options": [
            "Har doim",
            "Qiymat yo'qligini ifodalash kerak bo'lganda",
            "Kichik sonlarni uzatishda",
            "const bilan ishlashda"
          ],
          "answer": 1,
          "explain": "Ko'rsatkich nullptr bo'lishi mumkin, shuning uchun ixtiyoriy obyektni bildirish uchun mos."
        },
        {
          "q": "int* const p yozuvida nimani o'zgartirib bo'lmaydi?",
          "options": [
            "hech narsani",
            "p ko'rsatgan qiymatni",
            "p ning o'zini boshqa manzilga yo'naltirishni",
            "p ni nullptr qilishni"
          ],
          "answer": 2,
          "explain": "const ko'rsatkichning o'zidan keyin turadi: manzil o'zgarmas, lekin *p orqali qiymat o'zgarishi mumkin."
        }
      ]
    },
    {
      "id": 14,
      "title": "const to'g'riligi: xavfsiz va aniq kod",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<code>const</code> — kompilyatorga \"bu qiymat o'zgarmaydi\" deb aytish usuli. U nafaqat xatolarni erta ushlaydi, balki funksiya va metodning niyatini hujjatlashtiradi. Katta obyektlarni <code>const&amp;</code> bilan uzatish nusxalashni ham oldini oladi."
        },
        {
          "type": "code",
          "title": "const-parametr.cpp",
          "code": "#include <iostream>\n#include <string>\n\nvoid salomlash(const std::string& ism) {\n    std::cout << \"Salom, \" << ism << \"!\\n\";\n}\n\nint main() {\n    std::string ism = \"Aziza\";\n    salomlash(ism);\n\n    const int yosh = 15;\n    // yosh = 16; // kompilyatsiya xatosi\n    std::cout << \"Yosh: \" << yosh << '\\n';\n    return 0;\n}",
          "output": "Salom, Aziza!\nYosh: 15"
        },
        {
          "type": "p",
          "html": "Metod oxiridagi <code>const</code> esa \"bu metod obyektning mantiqiy holatini o'zgartirmaydi\" degan va'da. <code>const</code> obyektda faqat shunday metodlarni chaqirish mumkin. Bu kompilyatorga optimallashtirish uchun ham ma'lumot beradi."
        },
        {
          "type": "code",
          "title": "const-metod.cpp",
          "code": "#include <iostream>\n\nclass Tortburchak {\npublic:\n    Tortburchak(int en, int boy) : en_(en), boy_(boy) {}\n\n    int yuza() const {\n        return en_ * boy_;\n    }\n\nprivate:\n    int en_;\n    int boy_;\n};\n\nint main() {\n    const Tortburchak t(4, 5);\n    std::cout << \"Yuza: \" << t.yuza() << '\\n';\n    return 0;\n}",
          "output": "Yuza: 20"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>const int x = 5;</code>",
              "x ning qiymati o'zgarmaydi"
            ],
            [
              "<code>const int* p</code>",
              "p ko'rsatgan qiymat o'zgarmaydi"
            ],
            [
              "<code>int* const p</code>",
              "p ning manzili o'zgarmaydi"
            ],
            [
              "<code>int metod() const</code>",
              "metod obyektni o'zgartirmaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "const qayerda turadi?",
          "html": "Qoida oddiy: <code>const</code> o'zidan keyingi narsani himoyalaydi. <code>const int*</code> — qiymatni, <code>int* const</code> — ko'rsatkichning o'zini. Ikkalasini birga ishlatish ham mumkin: <code>const int* const p</code>."
        }
      ],
      "quiz": [
        {
          "q": "void f(const std::string& s) parametrida const nima beradi?",
          "options": [
            "Kompilyatsiyani tezlashtirish",
            "Dinamik xotira ajratish",
            "Virtual chaqiruv",
            "Nusxa olmaslik va matnni o'zgartirmaslik"
          ],
          "answer": 3,
          "explain": "const& katta obyektni nusxalashsiz uzatadi va funksiya ichida o'zgartirishni taqiqlaydi."
        },
        {
          "q": "const obyekt qaysi metodlarni chaqira oladi?",
          "options": [
            "Faqat const metodlarni",
            "Faqat private metodlarni",
            "Barcha metodlarni",
            "Faqat konstruktorni"
          ],
          "answer": 0,
          "explain": "const obyekt uchun faqat obyektni o'zgartirmaydigan, ya'ni const deb belgilangan metodlar ruxsat etiladi."
        },
        {
          "q": "const int* p bo'lsa nimani o'zgartirib bo'lmaydi?",
          "options": [
            "p ning manzilini",
            "*p orqali ko'rsatilgan qiymatni",
            "ikkalasini",
            "hech birini"
          ],
          "answer": 1,
          "explain": "Bu yerda const qiymatga tegishli: *p ni o'zgartirish mumkin emas, lekin p ni boshqa manzilga yo'naltirish mumkin."
        }
      ]
    },
    {
      "id": 15,
      "title": "enum, enum class va std::optional",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Ba'zi qiymatlar faqat bir nechta aniq variantdan iborat bo'ladi: hafta kuni, rang, holat. Buning uchun <code>enum</code> ishlatiladi. Zamonaviy C++da <code>enum class</code> afzal: uning nomlari boshqa nomlar bilan to'qnashmaydi va tasodifiy songa aylanmaydi."
        },
        {
          "type": "code",
          "title": "enum-class.cpp",
          "code": "#include <iostream>\n\nenum class Rang { Qizil, Yashil, Sariq };\n\nint main() {\n    Rang r = Rang::Yashil;\n\n    if (r == Rang::Yashil) {\n        std::cout << \"Rang: yashil\\n\";\n    }\n\n    std::cout << \"Kod: \" << static_cast<int>(r) << '\\n';\n    return 0;\n}",
          "output": "Rang: yashil\nKod: 1"
        },
        {
          "type": "p",
          "html": "Ba'zan funksiya natija topmasligi mumkin. <code>-1</code> qaytarish har doim ham xavfsiz emas: -1 haqiqiy qiymat bo'lishi mumkin. <code>std::optional&lt;T&gt;</code> \"qiymat bor yoki yo'q\" holatini tur darajasida ifodalaydi — bu <code>&lt;optional&gt;</code> headerida."
        },
        {
          "type": "code",
          "title": "optional.cpp",
          "code": "#include <iostream>\n#include <optional>\n\nstd::optional<int> indeksTop(const int* sonlar, int n, int izla) {\n    for (int i = 0; i < n; ++i) {\n        if (sonlar[i] == izla) {\n            return i;\n        }\n    }\n    return std::nullopt;\n}\n\nint main() {\n    int sonlar[] = {4, 8, 15};\n\n    auto bor = indeksTop(sonlar, 3, 15);\n    auto yoq = indeksTop(sonlar, 3, 7);\n\n    std::cout << \"15 indeksi: \" << bor.value() << '\\n';\n    std::cout << \"7 bormi: \" << yoq.has_value() << '\\n';\n    std::cout << \"Zaxira: \" << yoq.value_or(-1) << '\\n';\n    return 0;\n}",
          "output": "15 indeksi: 2\n7 bormi: 0\nZaxira: -1"
        },
        {
          "type": "ul",
          "items": [
            "<code>enum class</code> qiymatlari faqat <code>Rang::Yashil</code> ko'rinishida yoziladi.",
            "<code>has_value()</code> qiymat borligini tekshiradi.",
            "<code>value()</code> qiymat yo'q bo'lsa istisno tashlaydi, shuning uchun avval tekshirish kerak.",
            "<code>value_or(zaxira)</code> xavfsiz zaxira qiymat beradi."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "value() ni ehtiyotsiz chaqirmang",
          "html": "Bo'sh <code>optional</code>da <code>value()</code> chaqirilsa <code>std::bad_optional_access</code> istisnosi yuz beradi. Avval <code>has_value()</code> yoki <code>if (x)</code> bilan tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "enum class ning oddiy enumga nisbatan asosiy afzalligi nima?",
          "options": [
            "Ko'proq xotira oladi",
            "Faqat sonlarni saqlaydi",
            "Nomlari o'z scope ichida qoladi",
            "Avtomatik matnga aylanadi"
          ],
          "answer": 2,
          "explain": "enum class nomlari scope bilan chegaralangan, shu sababli nomlar to'qnashmaydi va yashirin songa aylanish xavfi kamayadi."
        },
        {
          "q": "std::optional qiymat yo'qligini qanday ifodalaydi?",
          "options": [
            "Har doim -1 orqali",
            "Istisno tashlash orqali",
            "nullptr orqali",
            "std::nullopt orqali"
          ],
          "answer": 3,
          "explain": "std::nullopt — optional ning bo'sh holati uchun maxsus belgi."
        },
        {
          "q": "optional<int> uchun value_or(0) nima qaytaradi?",
          "options": [
            "Qiymat bo'lsa qiymatni, aks holda 0",
            "Har doim 0",
            "Har doim istisno",
            "Yangi optional"
          ],
          "answer": 0,
          "explain": "value_or ichidagi qiymat mavjud bo'lsa uni, bo'lmasa berilgan zaxira qiymatni qaytaradi."
        }
      ]
    },
    {
      "id": 16,
      "title": "std::string bilan chuqurroq ishlash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<code>std::string</code> — matnlarni boshqaradigan boy sinf. U o'lchamini biladi, xotirani avtomatik boshqaradi va qidirish, kesish, qo'shish kabi metodlarni beradi. Oddiy <code>char[]</code> massividan farqli o'laroq, u bilan ishlash ancha xavfsiz."
        },
        {
          "type": "code",
          "title": "string-asos.cpp",
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string ism = \"Aziza\";\n    ism += \" Karimova\";\n\n    std::cout << ism << '\\n';\n    std::cout << \"Uzunlik: \" << ism.size() << '\\n';\n    std::cout << \"Kesim: \" << ism.substr(0, 5) << '\\n';\n    std::cout << \"Bo'sh joy: \" << ism.find(' ') << '\\n';\n    return 0;\n}",
          "output": "Aziza Karimova\nUzunlik: 14\nKesim: Aziza\nBo'sh joy: 5"
        },
        {
          "type": "p",
          "html": "<code>find</code> topilmasa <code>std::string::npos</code> qaytaradi. Bu oddiy <code>-1</code> emas, balki <code>size_t</code> ning eng katta qiymati. Shuning uchun natijani albatta <code>npos</code> bilan solishtirish kerak."
        },
        {
          "type": "code",
          "title": "email-tahlil.cpp",
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string email = \"aziza@noldan.uz\";\n    std::size_t at = email.find('@');\n\n    if (at != std::string::npos) {\n        std::cout << \"Foydalanuvchi: \" << email.substr(0, at) << '\\n';\n        std::cout << \"Domen: \" << email.substr(at + 1) << '\\n';\n    }\n\n    std::cout << \"Nuqta oxiri: \" << email.rfind('.') << '\\n';\n    return 0;\n}",
          "output": "Foydalanuvchi: aziza\nDomen: noldan.uz\nNuqta oxiri: 12"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>size()</code>",
              "Baytlar sonini qaytaradi"
            ],
            [
              "<code>substr(pos, n)</code>",
              "pos dan n ta belgi nusxasini oladi"
            ],
            [
              "<code>find(x)</code>",
              "Birinchi uchrash joyini qaytaradi"
            ],
            [
              "<code>rfind(x)</code>",
              "Oxirgi uchrash joyini qaytaradi"
            ],
            [
              "<code>c_str()</code>",
              "C uslubidagi const char* beradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "UTF-8 va size()",
          "html": "<code>size()</code> belgilar emas, baytlar sonini qaytaradi. O'zbek lotin harflari odatda bir bayt, lekin emoji yoki kirill harflari bir nechta bayt egallaydi. Unicode belgilar sonini hisoblash uchun alohida kutubxona kerak bo'ladi."
        }
      ],
      "quiz": [
        {
          "q": "std::string::find topilmasa nima qaytaradi?",
          "options": [
            "0",
            "std::string::npos",
            "-1 sonini",
            "Istisno"
          ],
          "answer": 1,
          "explain": "find npos qaytaradi; natijani aynan shu konstanta bilan solishtirish kerak."
        },
        {
          "q": "substr(2, 3) nima qiladi?",
          "options": [
            "2 ta belgini o'chiradi",
            "Butun satrni qaytaradi",
            "2-indeksdan boshlab 3 belgi oladi",
            "3-indeksdan 2 belgi oladi"
          ],
          "answer": 2,
          "explain": "Birinchi argument boshlanish indeksi, ikkinchisi olinadigan belgilar soni."
        },
        {
          "q": "std::string::size() aslida nimani qaytaradi?",
          "options": [
            "Unicode belgilar sonini",
            "So'zlar sonini",
            "Xotira hajmini",
            "Baytlar sonini"
          ],
          "answer": 3,
          "explain": "size() saqlangan baytlar soni; ko'p baytli UTF-8 belgilarda bu belgilar sonidan katta bo'lishi mumkin."
        }
      ]
    },
    {
      "id": 17,
      "title": "vector va iteratorlar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Iterator — konteyner elementlari bo'ylab yurish uchun umumiy \"ko'rsatkich\". <code>begin()</code> birinchi elementga, <code>end()</code> esa oxirgi elementdan keyingi xayoliy joyga ishora qiladi. STL algoritmlari aynan shu juftlik bilan ishlaydi."
        },
        {
          "type": "code",
          "title": "iterator.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <iterator>\n\nint main() {\n    std::vector<int> sonlar = {4, 8, 15, 16};\n\n    auto it = sonlar.begin();\n    std::cout << \"Birinchi: \" << *it << '\\n';\n    ++it;\n    std::cout << \"Ikkinchi: \" << *it << '\\n';\n    std::cout << \"Masofa: \" << std::distance(sonlar.begin(), sonlar.end()) << '\\n';\n    return 0;\n}",
          "output": "Birinchi: 4\nIkkinchi: 8\nMasofa: 4"
        },
        {
          "type": "p",
          "html": "<code>insert</code> element qo'shadi, <code>erase</code> elementni o'chiradi. <code>erase</code> o'chirilgan elementdan keyingi iteratorni qaytaradi — shu tufayli tsikl ichida xavfsiz o'chirish mumkin. Lekin <code>push_back</code> xotirani qayta ajratsa, eski iteratorlar yaroqsiz bo'lib qoladi."
        },
        {
          "type": "code",
          "title": "insert-erase.cpp",
          "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> sonlar = {1, 2, 3, 4};\n\n    sonlar.insert(sonlar.begin() + 1, 99);\n    sonlar.erase(sonlar.begin() + 3);\n\n    for (std::size_t i = 0; i < sonlar.size(); ++i) {\n        std::cout << (i ? \" \" : \"\") << sonlar[i];\n    }\n    std::cout << '\\n';\n    std::cout << \"Oxirgi: \" << sonlar.back() << '\\n';\n    return 0;\n}",
          "output": "1 99 2 4\nOxirgi: 4"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Iterator invalidation",
          "html": "<code>push_back</code> yangi xotira ajratganda barcha iteratorlar, havolalar va ko'rsatkichlar yaroqsiz bo'lishi mumkin. Element qo'shib, keyin eski iterator bilan davom etmang. Kerak bo'lsa indeks yoki yangi <code>begin()</code> ishlating."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qaysi usul?",
          "html": "Oddiy to'liq aylanish uchun range-based for qulay. Element o'chirish yoki bir nechta pozitsiyada ishlash kerak bo'lsa iteratorlar kerak. Indeks kerak bo'lsa <code>for (std::size_t i = 0; ...)</code> ishlating."
        }
      ],
      "quiz": [
        {
          "q": "vector::begin() nimaga ishora qiladi?",
          "options": [
            "Birinchi elementga",
            "Xotiraning oxiriga",
            "Hech qaysi elementga",
            "Oxirgi elementga"
          ],
          "answer": 0,
          "explain": "begin() birinchi element iteratorini qaytaradi; end() esa oxirgi elementdan keyingi joyni bildiradi."
        },
        {
          "q": "vector::erase qanday iterator qaytaradi?",
          "options": [
            "nullptr",
            "O'chirilgan elementdan keyingisiga",
            "Doim begin() ga",
            "Doim end() ga"
          ],
          "answer": 1,
          "explain": "C++11 dan boshlab erase o'chirilgan elementdan keyingi iteratorni qaytaradi."
        },
        {
          "q": "push_back dan keyin eski iteratorlarga nima bo'lishi mumkin?",
          "options": [
            "Const bo'lib qoladi",
            "Doim ishlayveradi",
            "Qayta ajratishda yaroqsiz bo'ladi",
            "Avtomatik yangilanadi"
          ],
          "answer": 2,
          "explain": "Xotira qayta ajratilganda elementlar ko'chadi va eski iteratorlar yaroqsiz bo'lib qoladi."
        }
      ]
    },
    {
      "id": 18,
      "title": "std::array va xavfsiz massivlar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Oddiy C massivi juda yalang'och: u o'z o'lchamini bilmaydi va chegarani tekshirmaydi. <code>std::array&lt;T, N&gt;</code> — o'lchami kompilyatsiya vaqtida qat'iy belgilangan, lekin o'lchamini biladigan va STL bilan ishlaydigan zamonaviy massiv."
        },
        {
          "type": "code",
          "title": "array-asos.cpp",
          "code": "#include <iostream>\n#include <array>\n#include <algorithm>\n\nint main() {\n    std::array<int, 5> sonlar = {5, 2, 9, 1, 7};\n\n    std::sort(sonlar.begin(), sonlar.end());\n\n    std::cout << \"Soni: \" << sonlar.size() << '\\n';\n    std::cout << \"Eng kichik: \" << sonlar.front() << '\\n';\n    std::cout << \"Eng katta: \" << sonlar.back() << '\\n';\n    std::cout << \"2-indeks: \" << sonlar.at(2) << '\\n';\n    return 0;\n}",
          "output": "Soni: 5\nEng kichik: 1\nEng katta: 9\n2-indeks: 5"
        },
        {
          "type": "p",
          "html": "<code>std::array</code> ham oddiy massiv kabi ketma-ket xotirada yotadi, shuning uchun tez. Farqi shundaki, u <code>size()</code>, <code>begin()</code>, <code>end()</code> kabi metodlarni beradi va funksiyaga uzatilganda avtomatik ko'rsatkichga aylanmaydi. Ikki o'lchamli jadvalni ham shu tarzda yozish mumkin."
        },
        {
          "type": "code",
          "title": "array-2d.cpp",
          "code": "#include <iostream>\n#include <array>\n\nint main() {\n    std::array<std::array<int, 3>, 2> jadval = {{{1, 2, 3}, {4, 5, 6}}};\n\n    int yigindi = 0;\n    for (const auto& qator : jadval) {\n        for (int son : qator) {\n            yigindi += son;\n        }\n    }\n\n    std::cout << \"Qatorlar: \" << jadval.size() << '\\n';\n    std::cout << \"Yig'indi: \" << yigindi << '\\n';\n    return 0;\n}",
          "output": "Qatorlar: 2\nYig'indi: 21"
        },
        {
          "type": "table",
          "head": [
            "Usul",
            "Chegara tekshiruvi",
            "Qachon mos"
          ],
          "rows": [
            [
              "<code>a[i]</code>",
              "Yo'q",
              "Indeks aniq to'g'ri bo'lsa"
            ],
            [
              "<code>a.at(i)</code>",
              "Bor, istisno tashlaydi",
              "Ishonchsiz indeksda"
            ],
            [
              "<code>a.front()</code>",
              "Bo'sh massivda xavfli",
              "Birinchi element kerak bo'lsa"
            ],
            [
              "<code>a.back()</code>",
              "Bo'sh massivda xavfli",
              "Oxirgi element kerak bo'lsa"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Nol o'lchamli array",
          "html": "<code>std::array&lt;int, 0&gt;</code> sintaksis jihatdan mumkin, lekin uning <code>front()</code> yoki <code>back()</code> metodini chaqirish xavfli. O'lcham nol bo'lishi mumkin bo'lsa, <code>vector</code> yoki oldindan tekshiruv ishlating."
        }
      ],
      "quiz": [
        {
          "q": "std::array o'lchami qachon aniqlanadi?",
          "options": [
            "Fayl ochilganda",
            "Har bir elementda",
            "Dastur ishlaganda",
            "Kompilyatsiya vaqtida"
          ],
          "answer": 3,
          "explain": "std::array o'lchami turkumning bir qismi, shuning uchun kompilyatsiya vaqtida ma'lum bo'ladi."
        },
        {
          "q": "std::array::at() ning [] dan asosiy farqi nima?",
          "options": [
            "Chegarani tekshiradi va istisno tashlashi mumkin",
            "Har doim tezroq",
            "Faqat o'qish uchun",
            "nullptr qaytaradi"
          ],
          "answer": 0,
          "explain": "at() indeks chegarasini tekshiradi; noto'g'ri indeksda std::out_of_range tashlaydi."
        },
        {
          "q": "std::array obyekti xotirasi qayerda joylashadi?",
          "options": [
            "Har doim heapda",
            "Obyekt qayerda yaratilgan bo'lsa, shu yerda",
            "Faqat static xotirada",
            "Faqat stackda"
          ],
          "answer": 1,
          "explain": "std::array oddiy massiv kabi joylashadi: lokal obyekt stackda, global yoki dinamik obyekt esa tegishli joyda bo'ladi."
        }
      ]
    },
    {
      "id": 19,
      "title": "STL algoritmlari: sort, find, accumulate",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "STL algoritmlari konteynerdan mustaqil ishlaydi: ularga iterator juftligi bering, qolganini algoritm bajaradi. <code>std::sort</code> tartiblaydi, <code>std::find</code> qiymat qidiradi, <code>std::accumulate</code> esa yig'indi kabi amallarni hisoblaydi."
        },
        {
          "type": "code",
          "title": "sort-find.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <iterator>\n\nint main() {\n    std::vector<int> sonlar = {42, 8, 15, 4, 23};\n\n    std::sort(sonlar.begin(), sonlar.end());\n\n    for (std::size_t i = 0; i < sonlar.size(); ++i) {\n        std::cout << (i ? \" \" : \"\") << sonlar[i];\n    }\n    std::cout << '\\n';\n\n    auto it = std::find(sonlar.begin(), sonlar.end(), 15);\n    if (it != sonlar.end()) {\n        std::cout << \"15 indeksi: \" << std::distance(sonlar.begin(), it) << '\\n';\n    }\n    return 0;\n}",
          "output": "4 8 15 23 42\n15 indeksi: 2"
        },
        {
          "type": "p",
          "html": "Algoritmlar yarim ochiq oraliqda ishlaydi: <code>[begin, end)</code>. <code>end()</code> oxirgi element emas, undan keyingi joy. Shuning uchun <code>find</code> topmasa <code>end()</code> qaytaradi va buni tekshirish shart."
        },
        {
          "type": "code",
          "title": "accumulate.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <numeric>\n#include <algorithm>\n\nint main() {\n    std::vector<int> sonlar = {4, 8, 15, 16};\n\n    int yigindi = std::accumulate(sonlar.begin(), sonlar.end(), 0);\n    int juftlar = std::count_if(sonlar.begin(), sonlar.end(),\n                                [](int x) { return x % 2 == 0; });\n\n    std::cout << \"Yig'indi: \" << yigindi << '\\n';\n    std::cout << \"Juftlar: \" << juftlar << '\\n';\n    std::cout << \"O'rtacha: \" << yigindi / static_cast<int>(sonlar.size()) << '\\n';\n    return 0;\n}",
          "output": "Yig'indi: 43\nJuftlar: 3\nO'rtacha: 10"
        },
        {
          "type": "table",
          "head": [
            "Algoritm",
            "Header",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>std::sort</code>",
              "<code>&lt;algorithm&gt;</code>",
              "O'sish tartibida saralaydi"
            ],
            [
              "<code>std::find</code>",
              "<code>&lt;algorithm&gt;</code>",
              "Birinchi mos elementni topadi"
            ],
            [
              "<code>std::count_if</code>",
              "<code>&lt;algorithm&gt;</code>",
              "Shartga mos elementlar sonini sanaydi"
            ],
            [
              "<code>std::accumulate</code>",
              "<code>&lt;numeric&gt;</code>",
              "Oraliq bo'yicha yig'indi hisoblaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Nega sort tez?",
          "html": "<code>std::sort</code> odatda O(n log n) murakkablikda ishlaydi va ichki optimallashtirilgan. Qo'lda pufaksimon saralash yozish o'rniga tayyor algoritmdan foydalanish ham qisqaroq, ham ishonchliroq."
        }
      ],
      "quiz": [
        {
          "q": "std::find qiymat topmasa nima qaytaradi?",
          "options": [
            "-1 sonini",
            "begin() iteratorini",
            "end() iteratorini",
            "nullptr"
          ],
          "answer": 2,
          "explain": "Topilmasa find oraliq oxirini, ya'ni end() ni qaytaradi; shu sababli natija end() bilan solishtiriladi."
        },
        {
          "q": "std::accumulate qaysi headerda e'lon qilingan?",
          "options": [
            "<vector>",
            "<utility>",
            "<algorithm>",
            "<numeric>"
          ],
          "answer": 3,
          "explain": "accumulate raqamli algoritmlar bilan birga <numeric> headerida joylashgan."
        },
        {
          "q": "std::sort ning odatdagi o'rtacha murakkabligi qanday?",
          "options": [
            "O(n log n)",
            "O(n²)",
            "O(1)",
            "O(n)"
          ],
          "answer": 0,
          "explain": "std::sort odatda O(n log n) vaqt sarflaydi; bu taqqoslashga asoslangan saralash uchun yaxshi natija."
        }
      ]
    },
    {
      "id": 20,
      "title": "Lambda ifodalar va transform",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Lambda — nom kerak bo'lmagan qisqa funksiya. Uni ayniqsa STL algoritmlariga shart yoki amal uzatishda ishlatamiz. Sintaksis: <code>[ushlash](parametrlar) { tana }</code>. Ushlash qismi tashqi o'zgaruvchilarni qanday ko'rishni belgilaydi."
        },
        {
          "type": "code",
          "title": "transform.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> sonlar = {1, 2, 3, 4};\n\n    std::transform(sonlar.begin(), sonlar.end(), sonlar.begin(),\n                   [](int x) { return x * x; });\n\n    for (std::size_t i = 0; i < sonlar.size(); ++i) {\n        std::cout << (i ? \" \" : \"\") << sonlar[i];\n    }\n    std::cout << '\\n';\n    return 0;\n}",
          "output": "1 4 9 16"
        },
        {
          "type": "p",
          "html": "<code>[chegara]</code> — tashqi o'zgaruvchini qiymat bo'yicha nusxalab oladi. <code>[&amp;chegara]</code> — havola orqali ko'radi. <code>[&amp;]</code> barcha tashqi o'zgaruvchilarni havola bilan, <code>[=]</code> esa qiymat bilan ushlaydi. Havola bilan ushlangan obyekt lambda ishlaguncha yashashi kerak."
        },
        {
          "type": "code",
          "title": "capture-sort.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> sonlar = {5, 2, 8, 1, 9, 4};\n    int chegara = 4;\n\n    int katta = std::count_if(sonlar.begin(), sonlar.end(),\n                              [chegara](int x) { return x > chegara; });\n\n    std::sort(sonlar.begin(), sonlar.end(),\n              [](int a, int b) { return a > b; });\n\n    std::cout << \"4 dan katta: \" << katta << '\\n';\n    std::cout << \"Eng katta: \" << sonlar.front() << '\\n';\n    return 0;\n}",
          "output": "4 dan katta: 3\nEng katta: 9"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Havola bilan ushlashda ehtiyot bo'ling",
          "html": "Lambda boshqa joyda, masalan, keyinroq bajarilishi mumkin. <code>[&amp;]</code> bilan ushlangan lokal o'zgaruvchi allaqachon yo'q bo'lsa, lambda osilib qolgan havolaga murojaat qiladi. Bunday holatda qiymat bilan ushlash xavfsizroq."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qachon alohida funksiya?",
          "html": "Lambda juda uzun bo'lsa yoki bir necha joyda ishlatilsa, uni nomli funksiyaga ajratish kodni o'qishni osonlashtiradi. Qisqa, bir martalik shartlar uchun lambda ideal."
        }
      ],
      "quiz": [
        {
          "q": "Lambda aslida nima?",
          "options": [
            "Faqat ko'rsatkich",
            "Nomsiz funksiya obyekti",
            "Preprocessor makrosi",
            "Maxsus klass"
          ],
          "answer": 1,
          "explain": "Lambda kompilyator tomonidan yaratiladigan nomsiz funksiya obyekti; uni oddiy funksiya kabi chaqirish mumkin."
        },
        {
          "q": "Lambda boshidagi [&] nimani bildiradi?",
          "options": [
            "Faqat constlarni ushlash",
            "Hech narsani ushlamaslik",
            "Tashqi o'zgaruvchilarni havola orqali ushlash",
            "Barchasini qiymat orqali ushlash"
          ],
          "answer": 2,
          "explain": "[&] ishlatilgan tashqi o'zgaruvchilarni havola orqali ko'rishni bildiradi."
        },
        {
          "q": "std::transform nima qiladi?",
          "options": [
            "Elementlarni saralaydi",
            "Elementlarni o'chiradi",
            "Faqat qidiradi",
            "Har bir elementga funksiya qo'llab natijani yozadi"
          ],
          "answer": 3,
          "explain": "transform kirish oralig'idagi har bir elementga berilgan amalni qo'llab, natijani chiqish oralig'iga yozadi."
        }
      ]
    },
    {
      "id": 21,
      "title": "Shablonlar: umumiy funksiyalar va klasslar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Bir xil mantiq turli turlar uchun kerak bo'lsa, kodni takrorlamaslik uchun <b>shablon</b> ishlatiladi. <code>template &lt;typename T&gt;</code> kompilyatorga \"T o'rniga chaqiruvda kelgan turni qo'y\" deydi. Bu runtime emas, kompilyatsiya vaqtidagi umumlashtirish."
        },
        {
          "type": "code",
          "title": "template-funksiya.cpp",
          "code": "#include <iostream>\n#include <string>\n\ntemplate <typename T>\nT katta(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << katta(3, 7) << '\\n';\n    std::cout << katta(2.5, 1.5) << '\\n';\n    std::cout << katta<std::string>(\"olma\", \"anor\") << '\\n';\n    return 0;\n}",
          "output": "7\n2.5\nolma"
        },
        {
          "type": "p",
          "html": "Shablon faqat funksiyaga emas, klassga ham tegishli. <code>Quti&lt;int&gt;</code> va <code>Quti&lt;std::string&gt;</code> — bitta shablonning ikki xil konkret turi. Kompilyator har ishlatilgan tur uchun alohida kod yaratadi, shuning uchun bu yondashuv tez, lekin kod hajmini oshirishi mumkin."
        },
        {
          "type": "code",
          "title": "template-klass.cpp",
          "code": "#include <iostream>\n#include <string>\n\ntemplate <typename T>\nclass Quti {\npublic:\n    explicit Quti(T qiymat) : qiymat_(qiymat) {}\n\n    T ol() const {\n        return qiymat_;\n    }\n\nprivate:\n    T qiymat_;\n};\n\nint main() {\n    Quti<int> son(42);\n    Quti<std::string> matn(\"salom\");\n\n    std::cout << son.ol() << '\\n';\n    std::cout << matn.ol() << '\\n';\n    return 0;\n}",
          "output": "42\nsalom"
        },
        {
          "type": "ul",
          "items": [
            "<code>typename T</code> — tur parametri; nomi ixtiyoriy, odatda T, U yoki Item ishlatiladi.",
            "Bir xil turdagi argumentlar kerak: <code>katta(3, 7.5)</code> chalkashtirishi mumkin.",
            "Shablon ta'rifi odatda header faylida bo'ladi, chunki kompilyator uni har ishlatilgan joyda ko'rishi kerak.",
            "C++20 conceptlar yordamida T ga talablarni yanada aniq yozish mumkin."
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Shablon va makro farqi",
          "html": "Makro matnni almashtiradi va tur tekshiruvini chetlab o'tadi. Shablon esa kompilyator tomonidan tekshiriladi, xatolar tushunarliroq bo'ladi va debug qilish osonroq."
        }
      ],
      "quiz": [
        {
          "q": "template <typename T> nimani beradi?",
          "options": [
            "Tur bo'yicha umumiy kod",
            "Faqat runtime polimorfizm",
            "Avtomatik xotira tozalash",
            "Faylga yozish"
          ],
          "answer": 0,
          "explain": "Shablon bir mantiqni turli turlar uchun qayta ishlatish imkonini beradi."
        },
        {
          "q": "Shablon parametri T qachon konkret turga aylanadi?",
          "options": [
            "Har bir tsiklda",
            "Kompilyatsiya vaqtida",
            "Dastur ishlaganda",
            "Faqat fayl ochilganda"
          ],
          "answer": 1,
          "explain": "Shablon instansiyalashuvi kompilyatsiya vaqtida bo'ladi; bajarilish vaqtida T degan narsa qolmaydi."
        },
        {
          "q": "Nega shablon funksiyasi odatda header faylida yoziladi?",
          "options": [
            "Xotirani tejash uchun",
            "Bu C++ talabi emas, shunchaki odat",
            "Kompilyator uni ishlatilgan har bir joyda ko'rishi kerak",
            "Header tezroq ishlaydi"
          ],
          "answer": 2,
          "explain": "Shablon kodini instansiyalash uchun kompilyatorga to'liq ta'rif kerak bo'ladi, shuning uchun u headerda bo'ladi."
        }
      ]
    },
    {
      "id": 22,
      "title": "Operatorlarni qayta yuklash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "O'z turingiz uchun <code>+</code>, <code>==</code> yoki <code>&lt;&lt;</code> kabi operatorlarga mantiqiy ma'no berish mumkin. Bu kodni tabiiy o'qishga yordam beradi, lekin faqat ma'no kutilganidek bo'lsa ishlatish kerak: <code>a + b</code> haqiqatan qo'shishni bildirsin."
        },
        {
          "type": "code",
          "title": "operator-plus.cpp",
          "code": "#include <iostream>\n\nstruct Nuqta {\n    int x;\n    int y;\n};\n\nNuqta operator+(const Nuqta& a, const Nuqta& b) {\n    return {a.x + b.x, a.y + b.y};\n}\n\nint main() {\n    Nuqta a{1, 2};\n    Nuqta b{3, 4};\n    Nuqta c = a + b;\n\n    std::cout << c.x << ' ' << c.y << '\\n';\n    return 0;\n}",
          "output": "4 6"
        },
        {
          "type": "p",
          "html": "<code>operator&lt;&lt;</code> ni qayta yuklab, obyektni <code>std::cout</code> ga chiqarish mumkin. U <code>std::ostream&amp;</code> qaytarishi kerak, shunda <code>std::cout &lt;&lt; a &lt;&lt; b</code> kabi zanjir ishlaydi. <code>==</code> esa taqqoslashning tabiiy ma'nosini beradi."
        },
        {
          "type": "code",
          "title": "operator-eq.cpp",
          "code": "#include <iostream>\n\nstruct Pul {\n    int som;\n};\n\nbool operator==(const Pul& a, const Pul& b) {\n    return a.som == b.som;\n}\n\nstd::ostream& operator<<(std::ostream& out, const Pul& p) {\n    out << p.som << \" so'm\";\n    return out;\n}\n\nint main() {\n    Pul a{12000};\n    Pul b{12000};\n    Pul c{15000};\n\n    std::cout << a << '\\n';\n    std::cout << \"a == b: \" << (a == b) << '\\n';\n    std::cout << \"a == c: \" << (a == c) << '\\n';\n    return 0;\n}",
          "output": "12000 so'm\na == b: 1\na == c: 0"
        },
        {
          "type": "ul",
          "items": [
            "Bir turdagi ikkita obyektni oladigan operatorlarni ko'pincha sinfdan tashqarida yozish qulay.",
            "<code>operator&lt;&lt;</code> birinchi parametr sifatida oqimni oladi va uni qaytaradi.",
            "Qayta yuklangan operator ham oddiy funksiya; parametr turlari va soni qat'iy qoidalarga bo'ysunadi.",
            "<code>&amp;&amp;</code> va <code>||</code> ni qayta yuklash qisqa tutashuv (short-circuit) xususiyatini yo'qotadi, shuning uchun tavsiya etilmaydi."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ma'noni buzmaslik",
          "html": "Agar <code>+</code> obyektlarni birlashtirishni bildirmasa yoki <code>==</code> haqiqiy tenglikni tekshirmasa, kodni o'qigan boshqa dasturchi xato qiladi. Operatorlarni faqat intuitiv ma'no mavjud bo'lganda qayta yuklang."
        }
      ],
      "quiz": [
        {
          "q": "a + b ifodasi qayta yuklangan operator+ bilan qanday bajariladi?",
          "options": [
            "Faqat a.add(b)",
            "Faqat b.operator+(a)",
            "Har doim mavjud operator ishlaydi",
            "a.operator+(b) yoki operator+(a, b)"
          ],
          "answer": 3,
          "explain": "Operator ham funksiya: a'zo bo'lsa a.operator+(b), erkin funksiya bo'lsa operator+(a, b) chaqiriladi."
        },
        {
          "q": "operator<< ni oqim uchun qayta yuklashda birinchi parametr qanday bo'ladi?",
          "options": [
            "std::ostream&",
            "int",
            "Nuqta",
            "std::string"
          ],
          "answer": 0,
          "explain": "Birinchi parametr chiqish oqimi bo'ladi va funksiya o'sha oqimga havola qaytaradi."
        },
        {
          "q": "Qaysi operatorni qayta yuklash odatda tavsiya etilmaydi?",
          "options": [
            "<<",
            "&&",
            "==",
            "+"
          ],
          "answer": 1,
          "explain": "&& va || ning qisqa tutashuv xususiyati qayta yuklanganda saqlanmaydi, shuning uchun ularni qayta yuklashdan saqlanish kerak."
        }
      ]
    },
    {
      "id": 23,
      "title": "Meros olish: inheritance asoslari",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Meros olish — umumiy xatti-harakatni ota klassda yozib, farqli qismini bola klassda qo'shish usuli. Bu kodni takrorlamaydi va \"It ham Hayvon\" kabi mantiqiy munosabatni kodda ifodalaydi. C++da eng ko'p ishlatiladigan shakli — <code>public</code> meros."
        },
        {
          "type": "code",
          "title": "meros.cpp",
          "code": "#include <iostream>\n#include <string>\n\nclass Hayvon {\npublic:\n    Hayvon(const std::string& nomi) : nomi_(nomi) {}\n\n    void tanishtir() const {\n        std::cout << \"Men \" << nomi_ << '\\n';\n    }\n\nprotected:\n    std::string nomi_;\n};\n\nclass It : public Hayvon {\npublic:\n    It(const std::string& nomi) : Hayvon(nomi) {}\n\n    void hur() const {\n        std::cout << nomi_ << \": vov!\\n\";\n    }\n};\n\nint main() {\n    It it(\"Bobik\");\n    it.tanishtir();\n    it.hur();\n    return 0;\n}",
          "output": "Men Bobik\nBobik: vov!"
        },
        {
          "type": "p",
          "html": "Bola klass konstruktori avval ota klass konstruktorini chaqiradi, keyin o'z tanasini bajaradi. Yo'q qilishda tartib teskari: avval bola, keyin ota. <code>protected</code> a'zolar tashqaridan ko'rinmaydi, lekin meros olgan klass ichida ishlatiladi."
        },
        {
          "type": "code",
          "title": "tartib.cpp",
          "code": "#include <iostream>\n\nclass Baza {\npublic:\n    Baza() { std::cout << \"Baza ctor\\n\"; }\n    ~Baza() { std::cout << \"Baza dtor\\n\"; }\n};\n\nclass Bola : public Baza {\npublic:\n    Bola() { std::cout << \"Bola ctor\\n\"; }\n    ~Bola() { std::cout << \"Bola dtor\\n\"; }\n};\n\nint main() {\n    Bola b;\n    return 0;\n}",
          "output": "Baza ctor\nBola ctor\nBola dtor\nBaza dtor"
        },
        {
          "type": "table",
          "head": [
            "Meros turi",
            "Ota klassning public a'zosi",
            "protected a'zosi"
          ],
          "rows": [
            [
              "<code>public</code>",
              "public bo'lib qoladi",
              "protected bo'lib qoladi"
            ],
            [
              "<code>protected</code>",
              "protected bo'ladi",
              "protected bo'ladi"
            ],
            [
              "<code>private</code>",
              "private bo'ladi",
              "private bo'ladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Object slicing",
          "html": "Bola obyektni ota turidagi o'zgaruvchiga <b>qiymat bo'yicha</b> nusxalasangiz, faqat ota qismi ko'chadi va bola qismi yo'qoladi. Bu \"object slicing\" deyiladi. Polimorfizm kerak bo'lsa, havola yoki ko'rsatkich ishlating."
        }
      ],
      "quiz": [
        {
          "q": "public meros olganda ota klassning public a'zolari bola klassda qanday bo'ladi?",
          "options": [
            "protected",
            "butunlay yo'qoladi",
            "public",
            "private"
          ],
          "answer": 2,
          "explain": "public merosda kirish huquqlari saqlanadi: public public bo'lib qoladi."
        },
        {
          "q": "Bola obyekt yaratilganda konstruktorlar qanday tartibda ishlaydi?",
          "options": [
            "Avval bola, keyin ota",
            "Faqat bola",
            "Tasodifiy tartibda",
            "Avval ota, keyin bola"
          ],
          "answer": 3,
          "explain": "Ota qismi avval qurilishi kerak, shuning uchun ota konstruktori birinchi chaqiriladi."
        },
        {
          "q": "Object slicing qachon yuz beradi?",
          "options": [
            "Bola obyektni ota turiga qiymat bo'yicha nusxalaganda",
            "Ota obyektni bola turiga o'zgartirganda",
            "Virtual funksiya chaqirilganda",
            "Konstruktor private bo'lganda"
          ],
          "answer": 0,
          "explain": "Qiymat bo'yicha nusxalashda faqat ota qismi saqlanadi, bola klassga xos qism kesilib qoladi."
        }
      ]
    },
    {
      "id": 24,
      "title": "Polimorfizm va virtual funksiyalar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Polimorfizm — bitta interfeys orqali turli obyektlarni boshqarish. Ota klassda <code>virtual</code> funksiya e'lon qilinsa, chaqiruv obyektning haqiqiy turiga qarab runtimeda tanlanadi. Bu kengaytiriladigan kod yozishning asosiy usuli."
        },
        {
          "type": "code",
          "title": "virtual-yuza.cpp",
          "code": "#include <iostream>\n\nclass Shakl {\npublic:\n    virtual double yuza() const = 0;\n    virtual ~Shakl() = default;\n};\n\nclass Kvadrat : public Shakl {\npublic:\n    explicit Kvadrat(double tomon) : tomon_(tomon) {}\n    double yuza() const override { return tomon_ * tomon_; }\nprivate:\n    double tomon_;\n};\n\nclass Tortburchak : public Shakl {\npublic:\n    Tortburchak(double en, double boy) : en_(en), boy_(boy) {}\n    double yuza() const override { return en_ * boy_; }\nprivate:\n    double en_;\n    double boy_;\n};\n\nint main() {\n    Kvadrat k(4);\n    Tortburchak t(3, 5);\n    Shakl* shakllar[] = {&k, &t};\n\n    for (Shakl* s : shakllar) {\n        std::cout << s->yuza() << '\\n';\n    }\n    return 0;\n}",
          "output": "16\n15"
        },
        {
          "type": "p",
          "html": "<code>= 0</code> — sof virtual funksiya: ota klass bu funksiyaning tanasini bermaydi va undan obyekt yaratib bo'lmaydi. Bola klass uni albatta qayta yuklashi kerak. <code>override</code> esa kompilyatorga \"men ota funksiyasini haqiqatan qayta yuklayapman\" deb tekshirtiradi."
        },
        {
          "type": "code",
          "title": "virtual-chaqiruv.cpp",
          "code": "#include <iostream>\n#include <string>\n\nclass Xodim {\npublic:\n    virtual std::string vazifa() const {\n        return \"umumiy ish\";\n    }\n    virtual ~Xodim() = default;\n};\n\nclass Dasturchi : public Xodim {\npublic:\n    std::string vazifa() const override {\n        return \"kod yozadi\";\n    }\n};\n\nvoid chop(const Xodim& x) {\n    std::cout << x.vazifa() << '\\n';\n}\n\nint main() {\n    Xodim x;\n    Dasturchi d;\n\n    chop(x);\n    chop(d);\n    return 0;\n}",
          "output": "umumiy ish\nkod yozadi"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Virtual destructor",
          "html": "Polimorfik klassni ko'rsatkich orqali <code>delete</code> qilmoqchi bo'lsangiz, destruktor <code>virtual</code> bo'lishi shart. Aks holda faqat ota qismining destruktori ishlaydi va resurslar oqishi mumkin. <code>virtual ~Shakl() = default;</code> — qisqa va xavfsiz yozuv."
        }
      ],
      "quiz": [
        {
          "q": "virtual funksiya qanday afzallik beradi?",
          "options": [
            "Faqat sonlar bilan ishlaydi",
            "Chaqiruvni obyektning haqiqiy turiga qarab tanlaydi",
            "Kompilyatsiyani butunlay yo'q qiladi",
            "Xotirani avtomatik tozalaydi"
          ],
          "answer": 1,
          "explain": "Virtual funksiya orqali runtime polimorfizm ishlaydi: ko'rsatkich ota turida bo'lsa ham bola versiyasi chaqiriladi."
        },
        {
          "q": "virtual double yuza() const = 0; yozuvidagi = 0 nimani bildiradi?",
          "options": [
            "O'chirilgan funksiya",
            "Doimiy funksiya",
            "Sof virtual funksiya",
            "Standart qiymat"
          ],
          "answer": 2,
          "explain": "= 0 funksiyani sof virtual qiladi; ota klassning o'zidan obyekt yaratilmaydi va bola klass uni amalga oshiradi."
        },
        {
          "q": "Polimorfik klass destruktori qanday bo'lishi kerak?",
          "options": [
            "private",
            "static",
            "const",
            "virtual"
          ],
          "answer": 3,
          "explain": "Ota ko'rsatkichi orqali o'chirishda bola destruktori ham ishlashi uchun destruktor virtual bo'lishi kerak."
        }
      ]
    },
    {
      "id": 25,
      "title": "RAII: resurslarni avtomatik boshqarish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "RAII (Resource Acquisition Is Initialization) — resursni obyekt konstruktorida olish va destruktorida bo'shatish g'oyasi. Fayl, mutex, xotira yoki tarmoq ulanishi qo'lda emas, obyektning yashash muddati bilan boshqariladi. Bu C++ning eng muhim xavfsizlik naqshlaridan biri."
        },
        {
          "type": "code",
          "title": "raii-scope.cpp",
          "code": "#include <iostream>\n\nclass Resurs {\npublic:\n    Resurs() { std::cout << \"Resurs ochildi\\n\"; }\n    ~Resurs() { std::cout << \"Resurs yopildi\\n\"; }\n};\n\nvoid ish() {\n    Resurs r;\n    std::cout << \"Ish bajarilmoqda\\n\";\n}\n\nint main() {\n    std::cout << \"Oldin\\n\";\n    ish();\n    std::cout << \"Keyin\\n\";\n    return 0;\n}",
          "output": "Oldin\nResurs ochildi\nIsh bajarilmoqda\nResurs yopildi\nKeyin"
        },
        {
          "type": "p",
          "html": "RAII ning kuchi istisnolarda ko'rinadi. Funksiyadan istisno chiqib ketsa ham, lokal obyektlarning destruktorlari avtomatik chaqiriladi. Ya'ni resurs \"yo'qolib qolmaydi\" — bu qo'lda <code>delete</code> yoki <code>close</code> yozishdan ancha ishonchli."
        },
        {
          "type": "code",
          "title": "raii-exception.cpp",
          "code": "#include <iostream>\n#include <stdexcept>\n\nclass Hisoblagich {\npublic:\n    Hisoblagich() { ++tirik_; }\n    ~Hisoblagich() { --tirik_; }\n\n    static int tirik() { return tirik_; }\n\nprivate:\n    static int tirik_;\n};\n\nint Hisoblagich::tirik_ = 0;\n\nvoid xato() {\n    Hisoblagich h;\n    throw std::runtime_error(\"xato\");\n}\n\nint main() {\n    std::cout << \"Boshida: \" << Hisoblagich::tirik() << '\\n';\n    try {\n        xato();\n    } catch (const std::exception& e) {\n        std::cout << \"Ushlandi: \" << e.what() << '\\n';\n    }\n    std::cout << \"Oxirida: \" << Hisoblagich::tirik() << '\\n';\n    return 0;\n}",
          "output": "Boshida: 0\nUshlandi: xato\nOxirida: 0"
        },
        {
          "type": "ul",
          "items": [
            "<code>std::vector</code> xotirani o'zi ajratadi va bo'shatadi.",
            "<code>std::ofstream</code> faylni konstruktorda ochadi, destruktorda yopadi.",
            "<code>std::lock_guard</code> mutexni blok boshida qulflaydi, oxirida ochadi.",
            "<code>std::unique_ptr</code> egalik qilgan xotirani avtomatik <code>delete</code> qiladi."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Rule of Zero",
          "html": "Agar klassingiz resursni to'g'ridan-to'g'ri boshqarmasa, destruktor, kopiya konstruktori va kopiya operatorini yozmang. <code>std::string</code>, <code>std::vector</code>, smart pointer kabi a'zolardan foydalaning — ular RAII ni o'zi bajaradi."
        }
      ],
      "quiz": [
        {
          "q": "RAII ning asosiy g'oyasi nima?",
          "options": [
            "Resurs umrini obyekt umriga bog'lash",
            "Resursni faqat qo'lda bo'shatish",
            "Faqat heap xotirasini ishlatish",
            "Faqat fayllar bilan ishlash"
          ],
          "answer": 0,
          "explain": "RAII resursni konstruktorda oladi va destruktorda bo'shatadi, shu bilan uni scope bilan bog'laydi."
        },
        {
          "q": "Lokal RAII obyektining destruktori qachon ishlaydi?",
          "options": [
            "Hech qachon",
            "Scope tugaganda",
            "Faqat return 0 bajarilganda",
            "Faqat new chaqirilganda"
          ],
          "answer": 1,
          "explain": "Lokal obyekt scope tugaganda, shu jumladan istisno bilan chiqilganda ham yo'q qilinadi."
        },
        {
          "q": "Istisno tashlanganda lokal RAII obyektlariga nima bo'ladi?",
          "options": [
            "O'chirilmaydi",
            "Faqat int obyektlari saqlanadi",
            "Destruktorlari avtomatik chaqiriladi",
            "Xotirada qolib ketadi"
          ],
          "answer": 2,
          "explain": "Stack unwinding paytida lokal obyektlarning destruktorlari ishlaydi, shuning uchun resurslar bo'shatiladi."
        }
      ]
    },
    {
      "id": 26,
      "title": "Smart pointerlar: unique_ptr va shared_ptr",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Dinamik xotira bilan ishlashda <code>new</code> va <code>delete</code> ni qo'lda boshqarish xatolarga to'la. Smart pointerlar RAII asosida egalikni ifodalaydi: xotira egasi aniq bo'ladi va obyekt kerak bo'lmaganda avtomatik bo'shatiladi. <code>&lt;memory&gt;</code> headerini ulash kerak."
        },
        {
          "type": "code",
          "title": "unique-ptr.cpp",
          "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto p = std::make_unique<int>(42);\n    std::cout << \"Qiymat: \" << *p << '\\n';\n\n    auto q = std::move(p);\n    std::cout << \"q: \" << *q << '\\n';\n    std::cout << \"p bo'sh: \" << (p == nullptr) << '\\n';\n    return 0;\n}",
          "output": "Qiymat: 42\nq: 42\np bo'sh: 1"
        },
        {
          "type": "p",
          "html": "<code>std::unique_ptr</code> yagona egaga ega: uni nusxalab bo'lmaydi, faqat <code>std::move</code> bilan boshqa egaga o'tkazish mumkin. <code>std::shared_ptr</code> esa egalikni baham ko'radi va ichki hisoblagich yordamida oxirgi egasi yo'q bo'lganda xotirani bo'shatadi."
        },
        {
          "type": "code",
          "title": "shared-ptr.cpp",
          "code": "#include <iostream>\n#include <memory>\n\nint main() {\n    auto a = std::make_shared<int>(7);\n\n    {\n        auto b = a;\n        std::cout << \"Ichkarida: \" << a.use_count() << '\\n';\n    }\n\n    std::cout << \"Tashqarida: \" << a.use_count() << '\\n';\n    std::cout << \"Qiymat: \" << *a << '\\n';\n    return 0;\n}",
          "output": "Ichkarida: 2\nTashqarida: 1\nQiymat: 7"
        },
        {
          "type": "table",
          "head": [
            "Pointer",
            "Egalik",
            "Nusxalash",
            "Qachon ishlatish"
          ],
          "rows": [
            [
              "<code>unique_ptr</code>",
              "Yagona",
              "Faqat move",
              "Default tanlov"
            ],
            [
              "<code>shared_ptr</code>",
              "Baham ko'rilgan",
              "Mumkin",
              "Haqiqatan bir necha egasi bo'lsa"
            ],
            [
              "<code>weak_ptr</code>",
              "Egasiz kuzatuvchi",
              "Mumkin",
              "Aylanma bog'lanishni oldini olish"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "shared_ptr aylanasi",
          "html": "Ikki <code>shared_ptr</code> bir-birini ushlab tursa, hisoblagich hech qachon nolga tushmaydi va xotira oqadi. Bunday holatda bir tomonni <code>std::weak_ptr</code> qilib saqlang. Ko'p hollarda <code>unique_ptr</code> yetarli va arzonroq."
        }
      ],
      "quiz": [
        {
          "q": "std::unique_ptr ni nusxalash mumkinmi?",
          "options": [
            "Ha, cheksiz marta",
            "Faqat const holatda",
            "Faqat nullptr bo'lsa",
            "Yo'q, faqat move qilish mumkin"
          ],
          "answer": 3,
          "explain": "unique_ptr yagona egalikni bildiradi, shuning uchun kopiya taqiqlangan; egalik std::move bilan o'tkaziladi."
        },
        {
          "q": "std::shared_ptr egalikni qanday boshqaradi?",
          "options": [
            "Ichki reference counting orqali",
            "Qo'lda delete orqali",
            "Axlat yig'uvchi orqali",
            "Stack hisoblagichi orqali"
          ],
          "answer": 0,
          "explain": "shared_ptr nechta egasi borligini sanaydi va oxirgisi yo'q bo'lganda obyektni o'chiradi."
        },
        {
          "q": "std::make_unique ning afzalligi nima?",
          "options": [
            "shared_ptr yaratadi",
            "Xavfsiz va istisnolarga chidamli yaratish",
            "Har doim tezroq runtime",
            "nullptr qaytaradi"
          ],
          "answer": 1,
          "explain": "make_unique xotira ajratish va unique_ptr yaratishni birgalikda xavfsiz bajaradi; alohida new ishlatish shart emas."
        }
      ]
    },
    {
      "id": 27,
      "title": "Move semantikasi va std::move",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Katta obyektni nusxalash qimmat: yangi xotira ajratiladi va barcha elementlar ko'chiriladi. <b>Move</b> esa resursni \"o'zlashtirib olish\" imkonini beradi. <code>std::move(x)</code> obyektni ko'chirmaydi — u shunchaki <code>x</code> ni rvalue havola sifatida ko'rsatadi, keyin move konstruktor yoki move assignment ishlaydi."
        },
        {
          "type": "code",
          "title": "vector-move.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <utility>\n\nint main() {\n    std::vector<int> a = {1, 2, 3, 4};\n    std::vector<int> b = std::move(a);\n\n    std::cout << \"b size: \" << b.size() << '\\n';\n    std::cout << \"b front: \" << b.front() << '\\n';\n    return 0;\n}",
          "output": "b size: 4\nb front: 1"
        },
        {
          "type": "p",
          "html": "Move konstruktori manba obyektning resursini oladi va manbani bo'sh holatga keltiradi. Manba obyekt yo'q qilinishi mumkin, lekin unga qayta qiymat berish yoki uni o'qishdan oldin holatini bilish kerak. Standart bo'yicha ko'chirilgan obyekt \"valid, lekin aniqlanmagan\" holatda qoladi."
        },
        {
          "type": "code",
          "title": "move-ctor.cpp",
          "code": "#include <iostream>\n#include <utility>\n\nclass Buffer {\npublic:\n    explicit Buffer(int qiymat) : data_(new int(qiymat)) {}\n    ~Buffer() { delete data_; }\n\n    Buffer(const Buffer&) = delete;\n    Buffer& operator=(const Buffer&) = delete;\n\n    Buffer(Buffer&& boshqa) noexcept : data_(boshqa.data_) {\n        boshqa.data_ = nullptr;\n    }\n\n    int qiymat() const {\n        return data_ ? *data_ : -1;\n    }\n\nprivate:\n    int* data_;\n};\n\nint main() {\n    Buffer a(42);\n    Buffer b(std::move(a));\n\n    std::cout << \"b: \" << b.qiymat() << '\\n';\n    std::cout << \"a: \" << a.qiymat() << '\\n';\n    return 0;\n}",
          "output": "b: 42\na: -1"
        },
        {
          "type": "ul",
          "items": [
            "<code>std::move</code> — bu cast; u hech qanday baytni ko'chirmaydi.",
            "Move konstruktori va move assignment odatda <code>noexcept</code> bo'ladi, aks holda <code>vector</code> ularni ishonchsiz deb hisoblashi mumkin.",
            "Lokal obyektni <code>return std::move(x);</code> qilib qaytarmang — bu optimallashtirishni (NRVO) to'sqinlik qilishi mumkin.",
            "Const obyektni move qilish odatda nusxalashga olib keladi, chunki const resursni o'zgartirishga ruxsat bermaydi."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qachon move ishlatiladi?",
          "html": "Obyektni boshqa egaga o'tkazmoqchi bo'lsangiz, masalan, <code>std::vector&lt;std::unique_ptr&lt;T&gt;&gt;</code> ga qo'shayotganda yoki katta konteynerni funksiyadan qaytarayotganda move ishlatiladi. Ko'p hollarda kompilyator o'zi ham move qiladi."
        }
      ],
      "quiz": [
        {
          "q": "std::move(x) aslida nima qiladi?",
          "options": [
            "Xotirani bo'shatadi",
            "x dan nusxa oladi",
            "x ni rvalue havolaga cast qiladi",
            "Resursni darhol ko'chiradi"
          ],
          "answer": 2,
          "explain": "std::move hech narsani ko'chirmaydi; u x ni rvalue sifatida ko'rsatib, move konstruktor/assignment tanlanishiga yordam beradi."
        },
        {
          "q": "Move konstruktori odatda qanday belgilanadi?",
          "options": [
            "const",
            "virtual",
            "static",
            "noexcept"
          ],
          "answer": 3,
          "explain": "noexcept move muvaffaqiyatsizlikda istisno tashlamasligini bildiradi; konteynerlar bunga tayanadi."
        },
        {
          "q": "Ko'chirilgan (moved-from) obyekt bilan nima qilish xavfsiz?",
          "options": [
            "Qayta qiymat berish yoki yo'q qilish",
            "Cheksiz o'qish",
            "Faqat delete qilish",
            "Hech narsa qilmaslik"
          ],
          "answer": 0,
          "explain": "Moved-from obyekt valid, lekin aniqlanmagan holatda bo'ladi; unga qayta qiymat berish yoki uni yo'q qilish xavfsiz."
        }
      ]
    },
    {
      "id": 28,
      "title": "Istisnolar: try, catch, throw va noexcept",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Istisno — funksiya bajarib bo'lmaydigan holatni yuqoriga xabar qilish usuli. <code>throw</code> istisno obyektini tashlaydi, <code>try</code> bloki uni kuzatadi, <code>catch</code> esa ushlab, dasturni davom ettirish imkonini beradi. Bu ayniqsa chuqur chaqiruvlarda xatoni qaytarish kodini har qadamda tekshirishdan qutqaradi."
        },
        {
          "type": "code",
          "title": "throw-catch.cpp",
          "code": "#include <iostream>\n#include <stdexcept>\n\nint bol(int a, int b) {\n    if (b == 0) {\n        throw std::invalid_argument(\"nolga bo'lish\");\n    }\n    return a / b;\n}\n\nint main() {\n    try {\n        std::cout << bol(10, 2) << '\\n';\n        std::cout << bol(5, 0) << '\\n';\n    } catch (const std::exception& e) {\n        std::cout << \"Xato: \" << e.what() << '\\n';\n    }\n\n    std::cout << \"Davom etamiz\\n\";\n    return 0;\n}",
          "output": "5\nXato: nolga bo'lish\nDavom etamiz"
        },
        {
          "type": "p",
          "html": "Istisnoni har doim <code>const&amp;</code> havola bilan ushlang: nusxa olinmaydi va polimorfizm saqlanadi. Maxsus istisno sinfi yaratish uchun <code>std::runtime_error</code> yoki <code>std::logic_error</code> dan meros olish qulay. <code>noexcept</code> esa funksiya tashqariga istisno chiqarmasligini bildiradi."
        },
        {
          "type": "code",
          "title": "noexcept.cpp",
          "code": "#include <iostream>\n#include <stdexcept>\n\nint xavfsizBol(int a, int b) noexcept {\n    if (b == 0) {\n        return 0;\n    }\n    return a / b;\n}\n\nint main() {\n    try {\n        throw std::out_of_range(\"indeks chegaradan tashqarida\");\n    } catch (const std::invalid_argument& e) {\n        std::cout << \"Argument: \" << e.what() << '\\n';\n    } catch (const std::exception& e) {\n        std::cout << \"Boshqa: \" << e.what() << '\\n';\n    }\n\n    std::cout << \"Natija: \" << xavfsizBol(8, 2) << '\\n';\n    return 0;\n}",
          "output": "Boshqa: indeks chegaradan tashqarida\nNatija: 4"
        },
        {
          "type": "ul",
          "items": [
            "<code>throw</code> bilan tashlangan obyekt turi catch parametriga mos bo'lishi kerak.",
            "Birinchi mos <code>catch</code> bajariladi; aniqroq turlarni umumiyroq turlardan oldin yozing.",
            "Istisno stack unwinding paytida lokal RAII obyektlarini yo'q qiladi.",
            "<code>noexcept</code> funksiyadan istisno chiqsa, <code>std::terminate</code> chaqiriladi — buni faqat haqiqatan kafolat bera olsangiz yozing."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Istisno va resurs",
          "html": "Agar istisno tashlashdan oldin <code>new</code> bilan xotira olgan bo'lsangiz, uni qo'lda <code>delete</code> qilishni unutmang yoki smart pointer ishlating. Eng yaxshi yo'l — RAII: resurs egasi obyekt istisno paytida ham avtomatik tozalanadi."
        }
      ],
      "quiz": [
        {
          "q": "Istisno qaysi kalit so'z bilan ushlanadi?",
          "options": [
            "handle",
            "catch",
            "throw",
            "try"
          ],
          "answer": 1,
          "explain": "try blokidagi istisno catch blokida ushlanadi."
        },
        {
          "q": "Nega catch (const std::exception& e) shakli tavsiya etiladi?",
          "options": [
            "Chunki boshqa shakl taqiqlangan",
            "Xatoni yashirish uchun",
            "Nusxa olmaslik va polimorfizmni saqlash uchun",
            "Faqat tezroq ishlashi uchun"
          ],
          "answer": 2,
          "explain": "Havola orqali nusxa olinmaydi va haqiqiy istisno turining what() kabi virtual xatti-harakati saqlanadi."
        },
        {
          "q": "noexcept nimani bildiradi?",
          "options": [
            "Funksiya hech qachon xato qilmaydi",
            "Funksiya virtual bo'ladi",
            "Funksiya const bo'ladi",
            "Funksiya tashqariga istisno chiqarmaydi"
          ],
          "answer": 3,
          "explain": "noexcept funksiya istisno tashlamasligi haqidagi va'da; buzilsa std::terminate chaqiriladi."
        }
      ]
    },
    {
      "id": 29,
      "title": "Fayllar va oqimlar: fstream, stringstream",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "C++da fayl ham oqim (stream) sifatida ko'riladi. <code>std::ofstream</code> yozadi, <code>std::ifstream</code> o'qiydi, <code>std::fstream</code> ikkalasini qila oladi. Oqim obyekti scope tugaganda faylni avtomatik yopadi — bu RAII ning amaliy namunasi."
        },
        {
          "type": "code",
          "title": "fayl-yozish-oqish.cpp",
          "code": "#include <iostream>\n#include <fstream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out(\"natija.txt\");\n        out << \"Birinchi qator\\n\";\n        out << \"Ikkinchi qator\\n\";\n    }\n\n    std::ifstream in(\"natija.txt\");\n    std::string qator;\n    int soni = 0;\n\n    while (std::getline(in, qator)) {\n        ++soni;\n        std::cout << soni << \": \" << qator << '\\n';\n    }\n    return 0;\n}",
          "output": "1: Birinchi qator\n2: Ikkinchi qator"
        },
        {
          "type": "p",
          "html": "<code>std::getline</code> qatorni o'qiydi va oqimni qaytaradi. Uni shartda ishlatganda oqim <code>bool</code> ga aylanadi: o'qish muvaffaqiyatli bo'lsa true, fayl tugasa yoki xato bo'lsa false. Shu sababli <code>while (std::getline(in, qator))</code> — odatiy va xavfsiz usul."
        },
        {
          "type": "code",
          "title": "stringstream.cpp",
          "code": "#include <iostream>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::string matn = \"42 3.5 salom\";\n    std::istringstream kirish(matn);\n\n    int son;\n    double kasr;\n    std::string soz;\n\n    kirish >> son >> kasr >> soz;\n\n    std::cout << \"Son: \" << son << '\\n';\n    std::cout << \"Kasr: \" << kasr << '\\n';\n    std::cout << \"So'z: \" << soz << '\\n';\n    return 0;\n}",
          "output": "Son: 42\nKasr: 3.5\nSo'z: salom"
        },
        {
          "type": "table",
          "head": [
            "Oqim",
            "Vazifasi",
            "Header"
          ],
          "rows": [
            [
              "<code>std::ifstream</code>",
              "Fayldan o'qish",
              "<code>&lt;fstream&gt;</code>"
            ],
            [
              "<code>std::ofstream</code>",
              "Faylga yozish",
              "<code>&lt;fstream&gt;</code>"
            ],
            [
              "<code>std::stringstream</code>",
              "Matnni oqim sifatida o'qish/yozish",
              "<code>&lt;sstream&gt;</code>"
            ],
            [
              "<code>std::cin / std::cout</code>",
              "Konsol kiritish/chiqarish",
              "<code>&lt;iostream&gt;</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Fayl ochildimi?",
          "html": "Fayl mavjud bo'lmasa yoki ruxsat yetmasa, oqim xato holatiga o'tadi. <code>if (!in) { ... }</code> yoki <code>in.is_open()</code> bilan tekshiring. <code>out</code> bilan yozgandan keyin fayl muvaffaqiyatli yopilganini ham tekshirish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Faylga yozish uchun qaysi oqim turi mos?",
          "options": [
            "std::ofstream",
            "std::ifstream",
            "std::istringstream",
            "std::cin"
          ],
          "answer": 0,
          "explain": "ofstream — output file stream, faylga yozish uchun ishlatiladi."
        },
        {
          "q": "while (std::getline(in, qator)) sharti nimaga tayanadi?",
          "options": [
            "soni o'zgaruvchisiga",
            "getline qaytargan oqimning holatiga",
            "qator uzunligiga",
            "fayl nomiga"
          ],
          "answer": 1,
          "explain": "getline oqimni qaytaradi; oqim bool ga aylanganda o'qish muvaffaqiyatini bildiradi."
        },
        {
          "q": "std::stringstream nima uchun ishlatiladi?",
          "options": [
            "Tarmoq ulanishi uchun",
            "Thread yaratish uchun",
            "Matn bilan oqim kabi ishlash uchun",
            "Faylni ochish uchun"
          ],
          "answer": 2,
          "explain": "stringstream matnni xotirada oqim sifatida o'qish yoki shakllantirish imkonini beradi."
        }
      ]
    },
    {
      "id": 30,
      "title": "Xatolarni qayta ishlash usullari",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Xatoni qayd etishning bir necha yo'li bor: istisno, <code>std::optional</code>, xato kodi yoki natija va xatoni birga qaytaruvchi tur. Muhimi — bir loyihada izchil qoidaga amal qilish va xatoni jimgina yutib yubormaslik."
        },
        {
          "type": "code",
          "title": "optional-parse.cpp",
          "code": "#include <iostream>\n#include <optional>\n#include <string>\n\nstd::optional<int> songaAylantir(const std::string& matn) {\n    try {\n        std::size_t ishlatilgan = 0;\n        int son = std::stoi(matn, &ishlatilgan);\n        if (ishlatilgan != matn.size()) {\n            return std::nullopt;\n        }\n        return son;\n    } catch (const std::exception&) {\n        return std::nullopt;\n    }\n}\n\nint main() {\n    auto a = songaAylantir(\"123\");\n    auto b = songaAylantir(\"12x\");\n\n    std::cout << \"123: \" << (a ? std::to_string(*a) : \"xato\") << '\\n';\n    std::cout << \"12x: \" << (b ? std::to_string(*b) : \"xato\") << '\\n';\n    return 0;\n}",
          "output": "123: 123\n12x: xato"
        },
        {
          "type": "p",
          "html": "<code>optional</code> qiymat yo'qligi <b>normal</b> holat bo'lganda juda mos: foydalanuvchi noto'g'ri matn kiritdi, qidiruv natija bermadi. Istisno esa kutilmagan, kam uchraydigan va odatdagi oqimni buzadigan holatlar uchun."
        },
        {
          "type": "code",
          "title": "xato-kodi.cpp",
          "code": "#include <iostream>\n\nenum class Xato { Yoq, NolgaBolish, Manfiy };\n\nXato bol(int a, int b, int& natija) {\n    if (b == 0) {\n        return Xato::NolgaBolish;\n    }\n    if (a < 0 || b < 0) {\n        return Xato::Manfiy;\n    }\n    natija = a / b;\n    return Xato::Yoq;\n}\n\nint main() {\n    int natija = 0;\n\n    Xato x = bol(10, 2, natija);\n    std::cout << \"Holat: \" << static_cast<int>(x) << '\\n';\n    std::cout << \"Natija: \" << natija << '\\n';\n\n    Xato y = bol(10, 0, natija);\n    std::cout << \"Holat: \" << static_cast<int>(y) << '\\n';\n    return 0;\n}",
          "output": "Holat: 0\nNatija: 5\nHolat: 1"
        },
        {
          "type": "table",
          "head": [
            "Usul",
            "Qachon mos",
            "Kamchiligi"
          ],
          "rows": [
            [
              "Istisno",
              "Kutilmagan, jiddiy xato",
              "Nazorat oqimini bilvosita o'zgartiradi"
            ],
            [
              "<code>optional</code>",
              "Qiymat yo'qligi normal holat",
              "Xato sababini saqlamaydi"
            ],
            [
              "Xato kodi",
              "Past darajali, tez-tez uchraydigan holat",
              "Tekshirishni unutish oson"
            ],
            [
              "Natija + xato",
              "Sabab va qiymat birga kerak",
              "Qo'shimcha tur yozish kerak"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Bitta qoida tanlang",
          "html": "Agar funksiya xato kodi qaytarsa, uni har chaqiruvda tekshiring. Agar istisno ishlatsangiz, uni yuqori darajada markazlashtirib ushlang. Aralash usul faqat aniq sabab bilan ishlatilsin."
        }
      ],
      "quiz": [
        {
          "q": "std::optional qaysi holatda eng mos?",
          "options": [
            "Har doim, istisno o'rniga",
            "Faqat fayl ochishda",
            "Faqat threadlarda",
            "Qiymat yo'qligi normal holat bo'lsa"
          ],
          "answer": 3,
          "explain": "optional qiymat bor-yo'qligini ifodalaydi; qidiruv natijasi yoki ixtiyoriy kiritma kabi holatlar uchun mos."
        },
        {
          "q": "Xato kodi qaytaruvchi funksiyada nima muhim?",
          "options": [
            "Har bir chaqiruv natijasini tekshirish",
            "Natijani e'tiborsiz qoldirish",
            "Faqat cout ishlatish",
            "Har doim throw qilish"
          ],
          "answer": 0,
          "explain": "Xato kodi faqat tekshirilsa foyda beradi; e'tiborsiz qoldirilsa, xato jimgina o'tib ketadi."
        },
        {
          "q": "Istisno qaysi holatda ko'proq mos keladi?",
          "options": [
            "Faqat fayl yozishda",
            "Kutilmagan va kam uchraydigan xatolikda",
            "Har bir oddiy shartda",
            "Faqat tsikl ichida"
          ],
          "answer": 1,
          "explain": "Istisno odatdagi oqimni buzadigan, chuqur joyda aniqlangan jiddiy xatoni yuqoriga uzatish uchun mos."
        }
      ]
    },
    {
      "id": 31,
      "title": "Namespace, header va ko'p faylli loyiha",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Loyiha o'sgani sari nomlar to'qnashishi mumkin. <code>namespace</code> nomlarni guruhlaydi: <code>matematika::qosh</code> va <code>test::qosh</code> bir-biriga xalal bermaydi. Katta loyihada kod bir necha <code>.h</code> va <code>.cpp</code> fayllarga bo'linadi."
        },
        {
          "type": "code",
          "title": "namespace.cpp",
          "code": "#include <iostream>\n\nnamespace matematika {\n    int qosh(int a, int b) {\n        return a + b;\n    }\n}\n\nnamespace test {\n    int qosh(int a, int b) {\n        return a * b;\n    }\n}\n\nint main() {\n    std::cout << \"Matematika: \" << matematika::qosh(2, 3) << '\\n';\n    std::cout << \"Test: \" << test::qosh(2, 3) << '\\n';\n    return 0;\n}",
          "output": "Matematika: 5\nTest: 6"
        },
        {
          "type": "p",
          "html": "Header fayl odatda faqat e'lonlarni saqlaydi, <code>.cpp</code> esa ta'riflarni. Header bir necha marta ulanishidan himoyalash uchun <code>#pragma once</code> yoki include guard ishlatiladi. <code>using namespace std;</code> ni header ichida yozmaslik kerak — u boshqa fayllarga ham ta'sir qiladi."
        },
        {
          "type": "code",
          "title": "anonim-namespace.cpp",
          "code": "#include <iostream>\n\nnamespace {\n    int maxfiy = 42;\n\n    int oshir(int x) {\n        return x + 1;\n    }\n}\n\nint main() {\n    std::cout << \"Maxfiy: \" << maxfiy << '\\n';\n    std::cout << \"Oshirilgan: \" << oshir(41) << '\\n';\n    return 0;\n}",
          "output": "Maxfiy: 42\nOshirilgan: 42"
        },
        {
          "type": "ul",
          "items": [
            "<code>#pragma once</code> — header bir marta ulanishini ta'minlaydi.",
            "<code>inline</code> funksiyalar headerda ta'riflanishi mumkin, bir nechta translation unitda xato bermaydi.",
            "Global o'zgaruvchilarni <code>extern</code> bilan headerda e'lon qilib, bitta <code>.cpp</code> da ta'riflang.",
            "Nomlar ziddiyatini kamaytirish uchun <code>using namespace</code> o'rniga <code>std::</code> prefiksini yozing."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Bir ta'rif qoidasi (ODR)",
          "html": "Oddiy funksiya yoki global o'zgaruvchi butun dasturda faqat bir marta ta'riflanishi kerak. Headerda ta'rif yozsangiz va u bir necha <code>.cpp</code> ga ulansa, linker \"multiple definition\" xatosini beradi. Yechim: headerda e'lon, bitta <code>.cpp</code> da ta'rif."
        }
      ],
      "quiz": [
        {
          "q": "namespace ning asosiy vazifasi nima?",
          "options": [
            "Dasturni tezlashtirish",
            "Faylni ochish",
            "Nomlar to'qnashuvini oldini olish",
            "Xotirani tejash"
          ],
          "answer": 2,
          "explain": "namespace nomlarni mantiqiy guruhlaydi va bir xil nomlarning to'qnashuvini kamaytiradi."
        },
        {
          "q": "Nega using namespace std; header faylida yozilmaydi?",
          "options": [
            "Kompilyatsiya butunlay buziladi",
            "Xotira oqadi",
            "C++ buni taqiqlagan",
            "U boshqa fayllarga ham nomlarni sizdiradi"
          ],
          "answer": 3,
          "explain": "Header boshqa fayllarga ulanadi; undagi using namespace ularning ham nom qidiruvini o'zgartiradi."
        },
        {
          "q": "Header guard yoki #pragma once nima qiladi?",
          "options": [
            "Bir header bir marta ulanishini ta'minlaydi",
            "Faylni tezlashtiradi",
            "Yangi namespace yaratadi",
            "Kodni bajaradi"
          ],
          "answer": 0,
          "explain": "Takroriy ulanish oldini olinadi, shu bilan bir xil e'lonlarning bir necha marta kelishi bartaraf etiladi."
        }
      ]
    },
    {
      "id": 32,
      "title": "CMake va kompilyatsiya jarayoni",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Kod yozish yetarli emas: uni kompilyatsiya va link qilish kerak. <b>Preprocessing</b> header va makrolarni ochadi, <b>kompilyatsiya</b> har bir <code>.cpp</code> ni obyekt faylga aylantiradi, <b>linker</b> ularni bitta dasturga bog'laydi. CMake bu jarayonni tavsiflab, platformaga mos build fayllarini yaratadi."
        },
        {
          "type": "code",
          "title": "standard.cpp",
          "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Standard: \" << __cplusplus << '\\n';\n\n#if __cplusplus >= 201703L\n    std::cout << \"C++17 yoki yangiroq\\n\";\n#endif\n    return 0;\n}",
          "output": "Standard: 201703\nC++17 yoki yangiroq"
        },
        {
          "type": "p",
          "html": "Oddiy loyihada <code>CMakeLists.txt</code> fayli shunday ko'rinadi: <code>cmake_minimum_required(VERSION 3.16)</code>, <code>project(Ilova LANGUAGES CXX)</code>, <code>add_executable(ilova main.cpp)</code> va <code>target_compile_features(ilova PRIVATE cxx_std_17)</code>. Build qilish uchun manba papkasidan <code>cmake -S . -B build</code>, keyin <code>cmake --build build</code> buyruqlari ishlatiladi."
        },
        {
          "type": "code",
          "title": "build-turi.cpp",
          "code": "#include <iostream>\n\nint main() {\n#ifdef NDEBUG\n    std::cout << \"Optimallashtirilgan build\\n\";\n#else\n    std::cout << \"Debug build\\n\";\n#endif\n    return 0;\n}",
          "output": "Debug build"
        },
        {
          "type": "table",
          "head": [
            "Buyruq / sozlama",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>cmake -S . -B build</code>",
              "Build papkasini yaratib, konfiguratsiya qiladi"
            ],
            [
              "<code>cmake --build build</code>",
              "Loyihani kompilyatsiya qiladi"
            ],
            [
              "<code>CMAKE_BUILD_TYPE=Debug</code>",
              "Debug belgilarini qo'shadi"
            ],
            [
              "<code>CMAKE_BUILD_TYPE=Release</code>",
              "Optimallashtirishni yoqadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Manba va buildni ajrating",
          "html": "Build fayllarini alohida <code>build/</code> papkasida saqlang. Shunda manba papkasi toza qoladi, kerak bo'lsa <code>build/</code> ni o'chirib, noldan qurish oson bo'ladi. <code>cmake -S . -B build</code> aynan shu ish uchun."
        }
      ],
      "quiz": [
        {
          "q": "CMake asosan nima qiladi?",
          "options": [
            "Kutubxona yozadi",
            "Build tizimi uchun konfiguratsiya yaratadi",
            "C++ kodini bajaradi",
            "Xatolarni debug qiladi"
          ],
          "answer": 1,
          "explain": "CMake platformaga mos build fayllarini (masalan, Makefile yoki Visual Studio loyihasini) generatsiya qiladi."
        },
        {
          "q": "target_compile_features(ilova PRIVATE cxx_std_17) nimani bildiradi?",
          "options": [
            "Debug rejimini yoqadi",
            "Testlarni ishga tushiradi",
            "ilova uchun C++17 standartini talab qiladi",
            "Yangi fayl qo'shadi"
          ],
          "answer": 2,
          "explain": "Bu buyruq target uchun kamida C++17 standartini talab qiladi; CMake kerakli kompilyator bayroqlarini qo'shadi."
        },
        {
          "q": "Nega build natijalarini alohida papkada saqlash tavsiya etiladi?",
          "options": [
            "Kompilyator boshqacha ishlashi uchun",
            "C++ shuni talab qiladi",
            "Faqat Windows uchun",
            "Manba fayllar bilan aralashmasligi va toza qurish oson bo'lishi uchun"
          ],
          "answer": 3,
          "explain": "Alohida build papkasi manba daraxtini toza saqlaydi va buildni osongina noldan boshlash imkonini beradi."
        }
      ]
    },
    {
      "id": 33,
      "title": "Debugging va testlash asoslari",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Xato topishning eng qimmat usuli — dasturni qo'lda sinab ko'rish. Yaxshiroq yo'l: kichik funksiyalarni alohida testlar bilan tekshirish va xatoni erta ushlash. Debugger esa dasturni qadam-baqadam kuzatish, o'zgaruvchilar qiymatini ko'rish imkonini beradi."
        },
        {
          "type": "code",
          "title": "test-harness.cpp",
          "code": "#include <iostream>\n\nint qosh(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int otgan = 0;\n    int jami = 0;\n\n    auto tekshir = [&](bool shart) {\n        ++jami;\n        if (shart) {\n            ++otgan;\n        }\n    };\n\n    tekshir(qosh(2, 3) == 5);\n    tekshir(qosh(-1, 1) == 0);\n    tekshir(qosh(0, 0) == 0);\n\n    std::cout << otgan << \"/\" << jami << \" test o'tdi\\n\";\n    return 0;\n}",
          "output": "3/3 test o'tdi"
        },
        {
          "type": "p",
          "html": "Test nafaqat to'g'ri natijani, balki chegaraviy holatlarni ham tekshirishi kerak: nol, bo'sh konteyner, manfiy son, eng katta qiymat. <code>assert</code> shart bajarilmasa dasturni to'xtatadi, lekin <code>NDEBUG</code> bilan o'chirilishi mumkin — shuning uchun doimiy testlarda o'z tekshiruv funksiyangiz ishonchliroq."
        },
        {
          "type": "code",
          "title": "xato-ushlash.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <stdexcept>\n\nint main() {\n    std::vector<int> sonlar = {10, 20, 30};\n\n    try {\n        std::cout << sonlar.at(5) << '\\n';\n    } catch (const std::out_of_range&) {\n        std::cout << \"Indeks chegaradan tashqarida\\n\";\n    }\n\n    std::cout << \"Dastur davom etdi\\n\";\n    return 0;\n}",
          "output": "Indeks chegaradan tashqarida\nDastur davom etdi"
        },
        {
          "type": "ul",
          "items": [
            "Debug buildda <code>-g</code> bayrog'i debug belgilarini qo'shadi.",
            "AddressSanitizer (<code>-fsanitize=address</code>) xotira xatolarini topadi.",
            "UndefinedBehaviorSanitizer (<code>-fsanitize=undefined</code>) aniqlanmagan xatti-harakatlarni ushlaydi.",
            "Katta loyihada GoogleTest, Catch2 yoki doctest kabi test freymvorklari ishlatiladi."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Xatoni qayta hosil qiling",
          "html": "Avval xatoni eng kichik kirish bilan qayta hosil qiling, keyin tuzating. Har tuzatishdan keyin test qo'shing — shunda xato qaytib kelmasligiga ishonch oshadi. Bu \"regression test\" deyiladi."
        }
      ],
      "quiz": [
        {
          "q": "Unit test nima?",
          "options": [
            "Kodning kichik qismini alohida tekshirish",
            "Butun dasturni qo'lda ishga tushirish",
            "Debuggerning bir turi",
            "Kompilyator bayrog'i"
          ],
          "answer": 0,
          "explain": "Unit test bitta funksiya yoki kichik modulning kutilgan natijasini avtomatik tekshiradi."
        },
        {
          "q": "vector::at() noto'g'ri indeksda nima qiladi?",
          "options": [
            "nullptr qaytaradi",
            "std::out_of_range istisnosini tashlaydi",
            "Jim 0 qaytaradi",
            "Dasturni davom ettiradi"
          ],
          "answer": 1,
          "explain": "at() chegarani tekshiradi va xato indeksda std::out_of_range tashlaydi."
        },
        {
          "q": "Sanitizer nima vazifani bajaradi?",
          "options": [
            "Testlarni yozadi",
            "Kutubxona o'rnatadi",
            "Xotira va aniqlanmagan xatti-harakat xatolarini topadi",
            "Kodni formatlaydi"
          ],
          "answer": 2,
          "explain": "Sanitizerlar kompilyatsiya va bajarilish paytida xotira oqishi, bufer oshishi kabi xatolarni aniqlaydi."
        }
      ]
    },
    {
      "id": 34,
      "title": "Concurrency: thread va mutex",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Zamonaviy protsessor bir necha yadroga ega, shuning uchun ishni parallel bajarish tezlik beradi. <code>std::thread</code> yangi oqim yaratadi, <code>std::mutex</code> esa umumiy ma'lumotni bir vaqtda faqat bitta oqim o'zgartirishini ta'minlaydi. Sinxronizatsiyasiz umumiy o'zgaruvchini o'zgartirish <b>data race</b> — aniqlanmagan xatti-harakat."
        },
        {
          "type": "code",
          "title": "atomic.cpp",
          "code": "#include <iostream>\n#include <thread>\n#include <atomic>\n\nstd::atomic<int> hisob{0};\n\nvoid ish() {\n    for (int i = 0; i < 1000; ++i) {\n        ++hisob;\n    }\n}\n\nint main() {\n    std::thread a(ish);\n    std::thread b(ish);\n\n    a.join();\n    b.join();\n\n    std::cout << \"Hisob: \" << hisob.load() << '\\n';\n    return 0;\n}",
          "output": "Hisob: 2000"
        },
        {
          "type": "p",
          "html": "Bir nechta amalni birgalikda himoyalash kerak bo'lsa, <code>std::mutex</code> va <code>std::lock_guard</code> ishlatiladi. <code>lock_guard</code> konstruktorda qulflaydi, destruktorda ochadi — RAII tufayli istisno bo'lsa ham mutex ochiladi. Har bir thread tugagach <code>join()</code> yoki <code>detach()</code> chaqirilishi shart."
        },
        {
          "type": "code",
          "title": "mutex.cpp",
          "code": "#include <iostream>\n#include <thread>\n#include <mutex>\n\nstd::mutex qulf;\nint hisob = 0;\n\nvoid qosh() {\n    for (int i = 0; i < 1000; ++i) {\n        std::lock_guard<std::mutex> himoya(qulf);\n        ++hisob;\n    }\n}\n\nint main() {\n    std::thread a(qosh);\n    std::thread b(qosh);\n\n    a.join();\n    b.join();\n\n    std::cout << \"Hisob: \" << hisob << '\\n';\n    return 0;\n}",
          "output": "Hisob: 2000"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi",
            "Qachon ishlatish"
          ],
          "rows": [
            [
              "<code>std::thread</code>",
              "Yangi oqim yaratadi",
              "Ishni parallel bajarish"
            ],
            [
              "<code>std::mutex</code>",
              "Kritik bo'limni qulflaydi",
              "Umumiy ma'lumotni himoyalash"
            ],
            [
              "<code>std::lock_guard</code>",
              "Mutexni scope bilan boshqaradi",
              "Oddiy qulflash"
            ],
            [
              "<code>std::atomic</code>",
              "Atomar amallar",
              "Bitta o'zgaruvchi uchun"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Data race va deadlock",
          "html": "Ikki thread bir vaqtda bir xil o'zgaruvchini sinxronizatsiyasiz yozsa, natija buziladi. Ikki mutexni turli tartibda qulflash esa deadlock berishi mumkin. Mutexlarni doim bir xil tartibda oling yoki <code>std::scoped_lock</code> bilan birga qulflang. Compile qilishda <code>-pthread</code> kerak bo'ladi."
        }
      ],
      "quiz": [
        {
          "q": "std::thread obyekti bilan nima qilish kerak?",
          "options": [
            "delete qilish",
            "Hech narsa qilmaslik",
            "throw qilish",
            "join() yoki detach() chaqirish"
          ],
          "answer": 3,
          "explain": "Thread obyekti yo'q qilinishidan oldin join() yoki detach() chaqirilishi kerak, aks holda std::terminate bo'ladi."
        },
        {
          "q": "Data race nima?",
          "options": [
            "Bir vaqtda umumiy xotiraga sinxronizatsiyasiz murojaat",
            "Thread yaratish usuli",
            "Mutexning bir turi",
            "Faqat join xatosi"
          ],
          "answer": 0,
          "explain": "Kamida bitta yozuv bo'lgan, sinxronlanmagan parallel murojaat data race hisoblanadi va aniqlanmagan xatti-harakatga olib keladi."
        },
        {
          "q": "std::lock_guard ning vazifasi nima?",
          "options": [
            "Faylni ochadi",
            "Mutexni scope davomida qulflab, oxirida ochadi",
            "Yangi thread yaratadi",
            "Xotira ajratadi"
          ],
          "answer": 1,
          "explain": "lock_guard RAII yordamida mutexni konstruktorda qulflaydi va destruktorda ochadi."
        }
      ]
    },
    {
      "id": 35,
      "title": "Unumdorlik va Big-O",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Big-O algoritmning kirish hajmi o'sganda qanchalik sekinlashishini tavsiflaydi. Bu aniq millisekund emas, o'sish sur'ati. Masalan, O(n) — har element uchun bir amal, O(n²) — har bir element uchun yana n ta amal. Katta ma'lumotda bu farq juda katta bo'ladi."
        },
        {
          "type": "code",
          "title": "linear.cpp",
          "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> sonlar = {1, 2, 3, 4, 5};\n\n    int amallar = 0;\n    int yigindi = 0;\n    for (int x : sonlar) {\n        ++amallar;\n        yigindi += x;\n    }\n\n    std::cout << \"Yig'indi: \" << yigindi << '\\n';\n    std::cout << \"Amallar: \" << amallar << '\\n';\n    return 0;\n}",
          "output": "Yig'indi: 15\nAmallar: 5"
        },
        {
          "type": "p",
          "html": "Quyidagi kod barcha juftliklarni ko'rib chiqadi. 5 ta element uchun 10 ta juftlik bor: 5 × 4 / 2. Elementlar soni ikki baravar oshsa, amallar soni taxminan to'rt baravar oshadi. Bu O(n²) ning amaliy ko'rinishi."
        },
        {
          "type": "code",
          "title": "quadratic.cpp",
          "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> sonlar = {1, 2, 3, 4, 5};\n\n    int juftlar = 0;\n    for (std::size_t i = 0; i < sonlar.size(); ++i) {\n        for (std::size_t j = i + 1; j < sonlar.size(); ++j) {\n            ++juftlar;\n        }\n    }\n\n    std::cout << \"Juftlar: \" << juftlar << '\\n';\n    return 0;\n}",
          "output": "Juftlar: 10"
        },
        {
          "type": "table",
          "head": [
            "Murakkablik",
            "Misol",
            "n = 1000 uchun taxminiy amal"
          ],
          "rows": [
            [
              "<code>O(1)</code>",
              "Massivga indeks orqali murojaat",
              "1"
            ],
            [
              "<code>O(log n)</code>",
              "Binar qidiruv",
              "~10"
            ],
            [
              "<code>O(n)</code>",
              "Bitta tsikl",
              "1000"
            ],
            [
              "<code>O(n log n)</code>",
              "Samarali saralash",
              "~10 000"
            ],
            [
              "<code>O(n²)</code>",
              "Ichma-ich ikki tsikl",
              "1 000 000"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Avval o'lchang",
          "html": "Big-O nazariy baho beradi, lekin doimiylar va kesh ham muhim. Optimallashtirishdan oldin <code>std::chrono</code> bilan o'lchang, profiler ishlating. Ko'pincha eng katta foyda noto'g'ri algoritm yoki ortiqcha nusxalashni olib tashlashdan keladi."
        }
      ],
      "quiz": [
        {
          "q": "O(n) nimani bildiradi?",
          "options": [
            "Vaqt o'zgarmaydi",
            "Faqat logarifmik o'sadi",
            "Kirish o'sishi bilan vaqt chiziqli o'sadi",
            "Vaqt kvadratik o'sadi"
          ],
          "answer": 2,
          "explain": "O(n) da amallar soni kirish hajmiga proporsional, masalan bitta to'liq tsikl."
        },
        {
          "q": "0 dan n gacha ikkita ichma-ich tsikl odatda qanday murakkablikka ega?",
          "options": [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n²)"
          ],
          "answer": 3,
          "explain": "Har bir tashqi qadamda ichki tsikl n marta ishlaydi, jami n × n amal — O(n²)."
        },
        {
          "q": "Big-O asosan nimani tavsiflaydi?",
          "options": [
            "O'sish sur'atini",
            "Aniq millisekundni",
            "Xotira manzilini",
            "Kompilyator turini"
          ],
          "answer": 0,
          "explain": "Big-O kirish kattalashganda ish hajmining qanday o'sishini, ya'ni asimptotik murakkablikni bildiradi."
        }
      ]
    },
    {
      "id": 36,
      "title": "Rekursiya va algoritmlar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Rekursiya — funksiyaning o'zini chaqirishi. Muammoni kichikroq bir xil muammoga bo'lish mumkin bo'lsa, rekursiya juda qulay. Har rekursiv funksiyada <b>base case</b> bo'lishi shart, aks holda chaqiruvlar to'xtamaydi va stack overflow yuz beradi."
        },
        {
          "type": "code",
          "title": "faktorial.cpp",
          "code": "#include <iostream>\n\nlong long faktorial(int n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * faktorial(n - 1);\n}\n\nint main() {\n    std::cout << \"5! = \" << faktorial(5) << '\\n';\n    std::cout << \"0! = \" << faktorial(0) << '\\n';\n    return 0;\n}",
          "output": "5! = 120\n0! = 1"
        },
        {
          "type": "p",
          "html": "Rekursiv binar qidiruv tartiblangan massivda ishlaydi: o'rta elementni tekshiradi va kerakli yarimga o'tadi. Har qadamda oraliq ikki baravar kichrayadi, shuning uchun murakkablik O(log n). Bu iterativ variantga nisbatan ba'zan o'qishga qulayroq."
        },
        {
          "type": "code",
          "title": "binar-qidiruv.cpp",
          "code": "#include <iostream>\n#include <vector>\n\nint qidir(const std::vector<int>& a, int chap, int ong, int izla) {\n    if (chap > ong) {\n        return -1;\n    }\n\n    int orta = chap + (ong - chap) / 2;\n    if (a[orta] == izla) {\n        return orta;\n    }\n    if (a[orta] < izla) {\n        return qidir(a, orta + 1, ong, izla);\n    }\n    return qidir(a, chap, orta - 1, izla);\n}\n\nint main() {\n    std::vector<int> a = {1, 3, 5, 7, 9, 11};\n\n    std::cout << \"7 indeksi: \" << qidir(a, 0, static_cast<int>(a.size()) - 1, 7) << '\\n';\n    std::cout << \"4 indeksi: \" << qidir(a, 0, static_cast<int>(a.size()) - 1, 4) << '\\n';\n    return 0;\n}",
          "output": "7 indeksi: 3\n4 indeksi: -1"
        },
        {
          "type": "ul",
          "items": [
            "Base case har doim eng boshida tekshirilsin.",
            "Har bir rekursiv chaqiruv muammoni kichraytirishi kerak.",
            "Chuqur rekursiya stackni to'ldirishi mumkin; iterativ yechim yoki memoizatsiya o'ylab ko'riladi.",
            "Bir xil kichik masalalar qayta hisoblansa, natijalarni jadvalda saqlash (memoization) tezlikni oshiradi."
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Rekursiya va tail call",
          "html": "Ba'zi rekursiv chaqiruvlar \"tail call\" bo'lishi mumkin, lekin C++ kompilyatori buni har doim optimallashtirishiga kafolat yo'q. Chuqur kirishlarda iterativ yechim xavfsizroq."
        }
      ],
      "quiz": [
        {
          "q": "Rekursiv funksiyada eng muhim shart nima?",
          "options": [
            "Fayl ochilishi",
            "Base case bo'lishi",
            "Global o'zgaruvchi ishlatilishi",
            "Faqat while bo'lishi"
          ],
          "answer": 1,
          "explain": "Base case rekursiyani to'xtatadi; usiz chaqiruvlar cheksiz davom etadi."
        },
        {
          "q": "Rekursiya qachon stack overflow berishi mumkin?",
          "options": [
            "Faqat int bilan ishlaganda",
            "Faqat vektor ishlatilganda",
            "Chaqiruvlar chuqurligi juda katta bo'lsa",
            "Har doim"
          ],
          "answer": 2,
          "explain": "Har bir chaqiruv stackda joy egallaydi; juda chuqur rekursiya stackni tugatishi mumkin."
        },
        {
          "q": "5! (besh faktorial) nechaga teng?",
          "options": [
            "25",
            "60",
            "720",
            "120"
          ],
          "answer": 3,
          "explain": "5! = 5 × 4 × 3 × 2 × 1 = 120."
        }
      ]
    },
    {
      "id": 37,
      "title": "Ma'lumotlar tuzilmalari: stack, queue, set, map",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Konteyner tanlash ma'lumot bilan qanday ishlashingizga bog'liq. <b>Stack</b> — oxirgi kirgan birinchi chiqadi (LIFO). <b>Queue</b> — birinchi kirgan birinchi chiqadi (FIFO). <b>Set</b> noyob elementlarni, <b>map</b> esa kalit va qiymat juftlarini saqlaydi."
        },
        {
          "type": "code",
          "title": "stack-queue.cpp",
          "code": "#include <iostream>\n#include <stack>\n#include <queue>\n\nint main() {\n    std::stack<int> st;\n    st.push(1);\n    st.push(2);\n    st.push(3);\n\n    std::cout << \"Stack tepa: \" << st.top() << '\\n';\n    st.pop();\n    std::cout << \"Stack yangi tepa: \" << st.top() << '\\n';\n\n    std::queue<int> q;\n    q.push(10);\n    q.push(20);\n    q.push(30);\n\n    std::cout << \"Queue old: \" << q.front() << '\\n';\n    q.pop();\n    std::cout << \"Queue yangi old: \" << q.front() << '\\n';\n    return 0;\n}",
          "output": "Stack tepa: 3\nStack yangi tepa: 2\nQueue old: 10\nQueue yangi old: 20"
        },
        {
          "type": "p",
          "html": "<code>std::set</code> takroriy qiymatlarni saqlamaydi va odatda tartiblangan holda yuradi. <code>std::map</code> kalit bo'yicha qidiradi; kalitlar noyob va saralangan. Ikkalasi ham qizil-qora daraxt asosida, shuning uchun qidiruv O(log n)."
        },
        {
          "type": "code",
          "title": "set-map.cpp",
          "code": "#include <iostream>\n#include <set>\n#include <map>\n#include <string>\n\nint main() {\n    std::set<int> noyob = {3, 1, 3, 2, 1};\n    std::cout << \"Set:\";\n    for (int x : noyob) {\n        std::cout << ' ' << x;\n    }\n    std::cout << '\\n';\n    std::cout << \"Soni: \" << noyob.size() << '\\n';\n\n    std::map<std::string, int> yosh;\n    yosh[\"Aziza\"] = 15;\n    yosh[\"Bek\"] = 17;\n\n    std::cout << \"Aziza: \" << yosh[\"Aziza\"] << '\\n';\n    std::cout << \"Kalitlar:\";\n    for (const auto& juft : yosh) {\n        std::cout << ' ' << juft.first;\n    }\n    std::cout << '\\n';\n    return 0;\n}",
          "output": "Set: 1 2 3\nSoni: 3\nAziza: 15\nKalitlar: Aziza Bek"
        },
        {
          "type": "table",
          "head": [
            "Tuzilma",
            "Tartib",
            "Qidiruv",
            "Asosiy amal"
          ],
          "rows": [
            [
              "<code>stack</code>",
              "LIFO",
              "Faqat tepa",
              "<code>push / pop / top</code>"
            ],
            [
              "<code>queue</code>",
              "FIFO",
              "Faqat old",
              "<code>push / pop / front</code>"
            ],
            [
              "<code>set</code>",
              "Saralangan, noyob",
              "O(log n)",
              "<code>insert / find / erase</code>"
            ],
            [
              "<code>map</code>",
              "Kalit bo'yicha saralangan",
              "O(log n)",
              "<code>[] / insert / find</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "map[] va yangi kalit",
          "html": "<code>map</code> da <code>operator[]</code> bilan mavjud bo'lmagan kalitga murojaat qilsangiz, u avtomatik qo'shiladi va qiymat standart holatda yaratiladi. Faqat tekshirish uchun <code>find()</code> yoki <code>contains()</code> (C++20) ishlating."
        }
      ],
      "quiz": [
        {
          "q": "Stack qanday tartibda ishlaydi?",
          "options": [
            "LIFO — oxirgi kirgan birinchi chiqadi",
            "FIFO — birinchi kirgan birinchi chiqadi",
            "Tasodifiy tartibda",
            "Har doim saralangan"
          ],
          "answer": 0,
          "explain": "Stackda faqat tepadan kirish va chiqish mumkin, shuning uchun oxirgi element birinchi olinadi."
        },
        {
          "q": "std::set takroriy elementlarga nima qiladi?",
          "options": [
            "Avtomatik o'chiradi",
            "Ularni saqlamaydi",
            "Ikkalasini ham saqlaydi",
            "Xato beradi"
          ],
          "answer": 1,
          "explain": "set faqat noyob qiymatlarni saqlaydi; takroriy qo'shish yangi element yaratmaydi."
        },
        {
          "q": "std::map elementlari qanday tartibda yuriladi?",
          "options": [
            "Tasodifiy",
            "Doim teskari",
            "Kalit bo'yicha odatda saralangan",
            "Kiritilish tartibida"
          ],
          "answer": 2,
          "explain": "std::map odatda qizil-qora daraxt bo'lib, kalitlar bo'yicha saralangan tartibda yuriladi."
        }
      ]
    },
    {
      "id": 38,
      "title": "pair, tuple va structured bindings",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya bir vaqtda ikki yoki undan ortiq qiymat qaytarishi kerak bo'lsa, <code>std::pair</code> yoki <code>std::tuple</code> ishlatiladi. <code>pair</code> ikki qiymat uchun, <code>tuple</code> esa ixtiyoriy sondagi turli turdagi qiymatlar uchun mos. C++17 structured bindings ularni qulay nomlash imkonini beradi."
        },
        {
          "type": "code",
          "title": "pair.cpp",
          "code": "#include <iostream>\n#include <utility>\n\nstd::pair<int, int> minMax(int a, int b) {\n    if (a < b) {\n        return {a, b};\n    }\n    return {b, a};\n}\n\nint main() {\n    auto [kichik, katta] = minMax(8, 3);\n\n    std::cout << \"Kichik: \" << kichik << '\\n';\n    std::cout << \"Katta: \" << katta << '\\n';\n    return 0;\n}",
          "output": "Kichik: 3\nKatta: 8"
        },
        {
          "type": "p",
          "html": "<code>auto [a, b] = juftlik;</code> — structured binding. U pair, tuple, massiv va oddiy struct a'zolarini bir qatorda ajratib oladi. Bu <code>juftlik.first</code> va <code>juftlik.second</code> yozishdan qisqaroq va o'qishga qulay."
        },
        {
          "type": "code",
          "title": "tuple.cpp",
          "code": "#include <iostream>\n#include <tuple>\n#include <string>\n\nstd::tuple<int, std::string, double> talaba() {\n    return {3, \"Aziza\", 4.5};\n}\n\nint main() {\n    auto [kurs, ism, baho] = talaba();\n\n    std::cout << \"Ism: \" << ism << '\\n';\n    std::cout << \"Kurs: \" << kurs << '\\n';\n    std::cout << \"Baho: \" << baho << '\\n';\n    return 0;\n}",
          "output": "Ism: Aziza\nKurs: 3\nBaho: 4.5"
        },
        {
          "type": "ul",
          "items": [
            "<code>pair</code> a'zolariga <code>.first</code> va <code>.second</code> orqali murojaat qilinadi.",
            "<code>tuple</code> elementlariga <code>std::get&lt;0&gt;(t)</code> yoki structured binding orqali erishiladi.",
            "<code>std::tie(a, b) = juftlik;</code> mavjud o'zgaruvchilarga qiymatlarni taqsimlaydi.",
            "Pair va tuple taqqoslash operatorlarini qo'llab-quvvatlaydi, bu ularni saralashda foydali qiladi."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Ma'noli struct afzalroq",
          "html": "Agar qaytariladigan qiymatlar doimiy guruh bo'lsa va nomlar muhim bo'lsa, <code>struct Natija { int ball; std::string izoh; };</code> kabi alohida tur yozish yaxshiroq. Tuple ko'proq qisqa, umumiy holatlar uchun."
        }
      ],
      "quiz": [
        {
          "q": "std::pair elementlariga qanday murojaat qilinadi?",
          "options": [
            "Indeks operatori [] orqali",
            "Faqat .first va .second orqali",
            "Faqat std::get orqali",
            "Ikkalasi ham mumkin"
          ],
          "answer": 3,
          "explain": "pair a'zolariga .first/.second ham, std::get<0>/<1> orqali ham murojaat qilish mumkin."
        },
        {
          "q": "Structured bindings qaysi C++ standartidan boshlab mavjud?",
          "options": [
            "C++17",
            "C++20",
            "C++11",
            "C++14"
          ],
          "answer": 0,
          "explain": "auto [a, b] = ... sintaksisi C++17 da qo'shilgan."
        },
        {
          "q": "std::tuple qanday qiymatlarni saqlay oladi?",
          "options": [
            "Faqat ikkitasini",
            "Har xil turdagi bir nechta qiymatni",
            "Faqat bir xil turdagi qiymatlarni",
            "Faqat bitta qiymatni"
          ],
          "answer": 1,
          "explain": "tuple ixtiyoriy (amalda cheklangan) sondagi turli turdagi qiymatlarni saqlaydi; pair uning ikki elementli xususiy holatidir."
        }
      ]
    },
    {
      "id": 39,
      "title": "std::chrono: vaqtni o'lchash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<code>&lt;chrono&gt;</code> — vaqt oralig'i (<code>duration</code>) va vaqt nuqtasi (<code>time_point</code>) bilan ishlash kutubxonasi. U millisekund, sekund, daqiqa kabi birliklarni tur xavfsizligi bilan boshqaradi. Unumdorlikni o'lchashda va vaqtincha kutishlarda ishlatiladi."
        },
        {
          "type": "code",
          "title": "duration.cpp",
          "code": "#include <iostream>\n#include <chrono>\n\nint main() {\n    using namespace std::chrono;\n\n    auto davomiylik = milliseconds(2500);\n    auto sekund = duration_cast<seconds>(davomiylik);\n    auto daqiqa = duration_cast<minutes>(davomiylik);\n\n    std::cout << \"Millisekund: \" << davomiylik.count() << '\\n';\n    std::cout << \"Sekund: \" << sekund.count() << '\\n';\n    std::cout << \"Daqiqa: \" << daqiqa.count() << '\\n';\n    return 0;\n}",
          "output": "Millisekund: 2500\nSekund: 2\nDaqiqa: 0"
        },
        {
          "type": "p",
          "html": "<code>duration_cast</code> katta birlikdan kichigiga o'tishda qoldiqni tashlaydi: 2500 millisekund — 2 sekund, 0 daqiqa. Aniqroq natija kerak bo'lsa, kichikroq birlikda hisoblang. Vaqt nuqtalari orasidagi farq esa <code>duration</code> qaytaradi."
        },
        {
          "type": "code",
          "title": "time-point.cpp",
          "code": "#include <iostream>\n#include <chrono>\n\nint main() {\n    using namespace std::chrono;\n    using Nuqta = time_point<steady_clock, milliseconds>;\n\n    Nuqta bosh(milliseconds(1000));\n    Nuqta oxir(milliseconds(3500));\n    auto farq = oxir - bosh;\n\n    std::cout << \"Farq ms: \" << farq.count() << '\\n';\n    std::cout << \"Farq s: \" << duration_cast<seconds>(farq).count() << '\\n';\n    return 0;\n}",
          "output": "Farq ms: 2500\nFarq s: 2"
        },
        {
          "type": "table",
          "head": [
            "Soat",
            "Maqsad",
            "Eslatma"
          ],
          "rows": [
            [
              "<code>steady_clock</code>",
              "Intervallarni o'lchash",
              "Orqaga qaytmaydi"
            ],
            [
              "<code>system_clock</code>",
              "Kalendar vaqti",
              "Tizim vaqtiga bog'liq"
            ],
            [
              "<code>high_resolution_clock</code>",
              "Eng kichik birlik",
              "Ko'pincha boshqa soatga taxallus"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Kichik oraliqlar",
          "html": "Juda qisqa kod bo'lagini bir marta o'lchash ishonchsiz: tizim yuklamasi va soat aniqligi ta'sir qiladi. Bir necha marta o'lchab, o'rtachasini oling. Aniq vaqtni chop etish o'rniga, odatda o'lchangan qiymatni solishtiring."
        }
      ],
      "quiz": [
        {
          "q": "duration_cast<seconds>(milliseconds(2500)).count() nechaga teng?",
          "options": [
            "2500",
            "3",
            "2",
            "2.5"
          ],
          "answer": 2,
          "explain": "Millisekunddan sekundga o'tishda butun qism olinadi: 2500 ms = 2 s."
        },
        {
          "q": "Vaqt oralig'ini o'lchash uchun qaysi soat afzal?",
          "options": [
            "system_clock",
            "high_resolution_clock har doim",
            "local_clock",
            "steady_clock"
          ],
          "answer": 3,
          "explain": "steady_clock monotonik bo'lib, interval o'lchash uchun ishonchli."
        },
        {
          "q": "Ikki time_point ayirmasi nima qaytaradi?",
          "options": [
            "duration",
            "time_point",
            "int soniya",
            "std::string"
          ],
          "answer": 0,
          "explain": "time_point - time_point amali duration qaytaradi; uni duration_cast bilan kerakli birlikka o'tkazish mumkin."
        }
      ]
    },
    {
      "id": 40,
      "title": "Tasodifiy sonlar va <random>",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "O'yin, simulyatsiya yoki test ma'lumotlari uchun tasodifiy sonlar kerak. C++da <code>&lt;random&gt;</code> kutubxonasi mavjud: <b>engine</b> tasodifiy bitlar ketma-ketligini beradi, <b>distribution</b> esa ularni kerakli oraliq va taqsimotga moslaydi. Eski <code>rand()</code>dan ko'ra sifatliroq va boshqariladigan."
        },
        {
          "type": "code",
          "title": "engine.cpp",
          "code": "#include <iostream>\n#include <random>\n\nint main() {\n    std::mt19937 rng(42);\n\n    std::cout << \"Tasodifiy:\";\n    for (int i = 0; i < 5; ++i) {\n        std::cout << ' ' << (rng() % 100);\n    }\n    std::cout << '\\n';\n    return 0;\n}",
          "output": "Tasodifiy: 42 67 76 14 26"
        },
        {
          "type": "p",
          "html": "Seed bir xil bo'lsa, ketma-ketlik ham bir xil bo'ladi — bu testlarni takrorlash uchun foydali. Haqiqiy tasodifiylik kerak bo'lsa, <code>std::random_device</code> dan seed olinadi. <code>rng() % 100</code> oddiy, lekin taqsimot biroz notekis bo'lishi mumkin; muhim holatlarda <code>uniform_int_distribution</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "distribution.cpp",
          "code": "#include <iostream>\n#include <random>\n\nint main() {\n    std::mt19937 rng(7);\n    std::uniform_int_distribution<int> zar(1, 6);\n\n    bool hammasiOraliqda = true;\n    for (int i = 0; i < 20; ++i) {\n        int tashlash = zar(rng);\n        if (tashlash < 1 || tashlash > 6) {\n            hammasiOraliqda = false;\n        }\n    }\n\n    std::cout << \"Min: \" << zar.min() << '\\n';\n    std::cout << \"Max: \" << zar.max() << '\\n';\n    std::cout << \"Hammasi 1..6: \" << hammasiOraliqda << '\\n';\n    return 0;\n}",
          "output": "Min: 1\nMax: 6\nHammasi 1..6: 1"
        },
        {
          "type": "ul",
          "items": [
            "<code>std::mt19937</code> — keng qo'llaniladigan Mersenne Twister engine.",
            "<code>std::uniform_int_distribution&lt;int&gt;(a, b)</code> — [a, b] oralig'ida butun son.",
            "<code>std::uniform_real_distribution&lt;double&gt;(a, b)</code> — [a, b) oralig'ida kasr son.",
            "Har bir engine va distribution obyektini alohida saqlang; har chaqiruvda yangidan yaratmang."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Seedni takrorlamang",
          "html": "Har safar <code>std::mt19937 rng(time(nullptr))</code> kabi seed berish tez ketma-ket chaqiruvlarda bir xil seed olishi mumkin. Bitta engine yarating va uni uzoq muddat ishlating. Xavfsizlik uchun tasodifiy sonlar kerak bo'lsa, `<random>` kriptografik maqsadlar uchun mo'ljallanmagan."
        }
      ],
      "quiz": [
        {
          "q": "Nega zamonaviy C++da rand() o'rniga <random> afzal?",
          "options": [
            "C++ uni majburiy qilgan",
            "Sifatliroq va boshqariladigan generatorlar beradi",
            "Har doim tezroq ishlaydi",
            "Kamroq xotira oladi"
          ],
          "answer": 1,
          "explain": "<random> bir necha engine va distribution beradi, seedni boshqarish va taqsimotni tanlash imkonini yaratadi."
        },
        {
          "q": "Bir xil seed bilan mt19937 qanday natija beradi?",
          "options": [
            "Faqat nollarni",
            "Xato beradi",
            "Bir xil ketma-ketlik",
            "Har safar boshqa ketma-ketlik"
          ],
          "answer": 2,
          "explain": "Pseudo-random generatorlar deterministik: bir xil seed bir xil ketma-ketlikni hosil qiladi."
        },
        {
          "q": "uniform_int_distribution vazifasi nima?",
          "options": [
            "Faqat 0 yoki 1 qaytaradi",
            "Sonlarni saralaydi",
            "Seed yaratadi",
            "Berilgan oraliqda teng taqsimlangan butun son beradi"
          ],
          "answer": 3,
          "explain": "uniform_int_distribution engine chiqishini berilgan butun son oralig'iga teng taqsimlab moslaydi."
        }
      ]
    },
    {
      "id": 41,
      "title": "std::filesystem bilan ishlash",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "C++17 <code>&lt;filesystem&gt;</code> kutubxonasi papka va fayl yo'llari bilan ishlashni osonlashtiradi: mavjudligini tekshirish, papka yaratish, fayl hajmini bilish, katalog bo'ylab yurish. Oldin buning uchun platformaga bog'liq API lar kerak edi."
        },
        {
          "type": "code",
          "title": "path-exists.cpp",
          "code": "#include <iostream>\n#include <filesystem>\n#include <fstream>\n\nnamespace fs = std::filesystem;\n\nint main() {\n    fs::path papka = \"noldan_test\";\n    fs::create_directories(papka);\n\n    fs::path fayl = papka / \"salom.txt\";\n    {\n        std::ofstream out(fayl);\n        out << \"salom\";\n    }\n\n    std::cout << \"Mavjud: \" << fs::exists(fayl) << '\\n';\n    std::cout << \"Fayl nomi: \" << fayl.filename().string() << '\\n';\n    std::cout << \"Kengaytma: \" << fayl.extension().string() << '\\n';\n    std::cout << \"Hajm: \" << fs::file_size(fayl) << '\\n';\n\n    fs::remove_all(papka);\n    return 0;\n}",
          "output": "Mavjud: 1\nFayl nomi: salom.txt\nKengaytma: .txt\nHajm: 5"
        },
        {
          "type": "p",
          "html": "<code>fs::path</code> yo'lni platformaga mos holda saqlaydi. <code>operator/</code> yo'l qismlarini birlashtiradi: <code>papka / \"fayl.txt\"</code>. <code>create_directories</code> kerak bo'lsa oraliq papkalarni ham yaratadi, <code>remove_all</code> esa papkani ichidagilari bilan o'chiradi."
        },
        {
          "type": "code",
          "title": "katalog.cpp",
          "code": "#include <iostream>\n#include <filesystem>\n#include <fstream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nnamespace fs = std::filesystem;\n\nint main() {\n    fs::path papka = \"noldan_royxat\";\n    fs::create_directories(papka);\n\n    std::ofstream(papka / \"b.txt\") << \"b\";\n    std::ofstream(papka / \"a.txt\") << \"a\";\n\n    std::vector<std::string> nomlar;\n    for (const auto& yozuv : fs::directory_iterator(papka)) {\n        if (yozuv.is_regular_file()) {\n            nomlar.push_back(yozuv.path().filename().string());\n        }\n    }\n    std::sort(nomlar.begin(), nomlar.end());\n\n    std::cout << \"Fayllar:\";\n    for (const auto& nom : nomlar) {\n        std::cout << ' ' << nom;\n    }\n    std::cout << '\\n';\n\n    fs::remove_all(papka);\n    return 0;\n}",
          "output": "Fayllar: a.txt b.txt"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Katalog tartibi kafolatlanmaydi",
          "html": "<code>directory_iterator</code> fayllarni qanday tartibda qaytarishi standart bilan kafolatlanmagan. Chiqish yoki test natijasi tartibga bog'liq bo'lsa, nomlarni yig'ib, <code>std::sort</code> qiling. Xatolarni ushlash uchun <code>error_code</code> qabul qiladigan versiyalardan ham foydalanish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "fs::exists(p) qanday qiymat qaytaradi?",
          "options": [
            "bool",
            "std::string",
            "int soni",
            "fs::path"
          ],
          "answer": 0,
          "explain": "exists yo'l mavjudligini bool sifatida qaytaradi."
        },
        {
          "q": "fs::path papka = \"a\"; auto f = papka / \"b.txt\"; nima qiladi?",
          "options": [
            "Faylni nusxalaydi",
            "Yo'l qismlarini birlashtiradi",
            "Faylni ochadi",
            "Faylni o'chiradi"
          ],
          "answer": 1,
          "explain": "path uchun operator/ yo'l qismlarini platformaga mos ajratgich bilan birlashtiradi."
        },
        {
          "q": "directory_iterator elementlari qanday tartibda keladi?",
          "options": [
            "Har doim teskari tartibda",
            "Faqat yaratilish vaqti bo'yicha",
            "Standart tomonidan kafolatlanmagan",
            "Har doim alifbo tartibida"
          ],
          "answer": 2,
          "explain": "Katalog yozuvlari tartibi kafolatlanmagan; kerakli tartibni o'zingiz ta'minlashingiz kerak."
        }
      ]
    },
    {
      "id": 42,
      "title": "CSV fayllarni o'qish va yozish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "CSV (comma-separated values) — jadval ma'lumotlarini oddiy matn sifatida saqlash formati. Har qator — yozuv, maydonlar vergul bilan ajratiladi. C++da uni <code>std::getline</code> va <code>std::stringstream</code> yordamida qatorma-qator tahlil qilish mumkin."
        },
        {
          "type": "code",
          "title": "csv-qator.cpp",
          "code": "#include <iostream>\n#include <sstream>\n#include <string>\n\nint main() {\n    std::string qator = \"Aziza,15,Toshkent\";\n    std::istringstream oqim(qator);\n\n    std::string ism;\n    std::string yosh;\n    std::string shahar;\n\n    std::getline(oqim, ism, ',');\n    std::getline(oqim, yosh, ',');\n    std::getline(oqim, shahar, ',');\n\n    std::cout << \"Ism: \" << ism << '\\n';\n    std::cout << \"Yosh: \" << yosh << '\\n';\n    std::cout << \"Shahar: \" << shahar << '\\n';\n    return 0;\n}",
          "output": "Ism: Aziza\nYosh: 15\nShahar: Toshkent"
        },
        {
          "type": "p",
          "html": "Faylga yozishda sarlavha qatorini qo'shish odat tusiga kirgan. O'qishda sarlavhani tashlab yuborish va har bir maydonni tekshirish kerak: <code>std::stoi</code> noto'g'ri matnda istisno tashlaydi. Quyidagi misolda sarlavha tashlanadi va ballar yig'indisi hisoblanadi."
        },
        {
          "type": "code",
          "title": "csv-fayl.cpp",
          "code": "#include <iostream>\n#include <fstream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out(\"talabalar.csv\");\n        out << \"ism,ball\\n\";\n        out << \"Aziza,92\\n\";\n        out << \"Bek,78\\n\";\n    }\n\n    std::ifstream in(\"talabalar.csv\");\n    std::string qator;\n    int malumotQatorlari = 0;\n    int jami = 0;\n\n    while (std::getline(in, qator)) {\n        if (qator == \"ism,ball\") {\n            continue;\n        }\n        ++malumotQatorlari;\n\n        std::size_t vergul = qator.find(',');\n        if (vergul != std::string::npos) {\n            jami += std::stoi(qator.substr(vergul + 1));\n        }\n    }\n\n    std::cout << \"Malumot qatorlari: \" << malumotQatorlari << '\\n';\n    std::cout << \"Ballar yig'indisi: \" << jami << '\\n';\n    return 0;\n}",
          "output": "Malumot qatorlari: 2\nBallar yig'indisi: 170"
        },
        {
          "type": "ul",
          "items": [
            "Har bir qatorni alohida o'qing va bo'sh qatorlarni o'tkazib yuboring.",
            "Maydonlar soni kutilganidan farq qilsa, xatoni qayd eting.",
            "Sonlarni <code>std::stoi</code> yoki <code>std::stod</code> bilan aylantirib, istisnolarni ushlang.",
            "Qo'shtirnoq ichidagi vergul, qator ko'chirish va UTF-8 BOM kabi holatlarni hisobga oling."
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Oddiy split har doim yetarli emas",
          "html": "CSV maydoni qo'shtirnoq ichida vergul yoki yangi qator saqlashi mumkin: <code>\"Toshkent, Chilonzor\"</code>. Bunday fayllar uchun to'liq CSV parser yoki tayyor kutubxonadan foydalaning. O'zingiz yozsangiz, qo'shtirnoq va escape qoidalarini sinab ko'ring."
        }
      ],
      "quiz": [
        {
          "q": "CSV faylda maydonlar odatda nima bilan ajratiladi?",
          "options": [
            "Nuqta",
            "Bo'sh joy",
            "Yangi qator",
            "Vergul"
          ],
          "answer": 3,
          "explain": "CSV nomi ham comma-separated values, ya'ni vergul bilan ajratilgan qiymatlardan kelib chiqqan."
        },
        {
          "q": "getline(oqim, matn, ',') nima qiladi?",
          "options": [
            "Vergulgacha o'qiydi",
            "Butun faylni o'qiydi",
            "Faylni yopadi",
            "Faqat son qaytaradi"
          ],
          "answer": 0,
          "explain": "Uchinchi argument ajratgichni belgilaydi; getline shu belgigacha bo'lgan qismni matnga yozadi."
        },
        {
          "q": "Nega oddiy vergul bo'yicha split har doim to'g'ri emas?",
          "options": [
            "UTF-8 ishlatilmaydi",
            "Qo'shtirnoq ichida vergul bo'lishi mumkin",
            "CSV faqat sonlardan iborat",
            "Fayl juda kichik"
          ],
          "answer": 1,
          "explain": "CSV standarti qo'shtirnoq ichidagi vergul va qator ko'chirishni ruxsat etadi, shuning uchun oddiy split xato qiladi."
        }
      ]
    },
    {
      "id": 43,
      "title": "Kopiya semantikasi va Rule of 0/3/5",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Klass obyektini nusxalashda kompilyator standart kopiya konstruktorini yaratadi. U har bir a'zoni nusxalaydi — bu odatda to'g'ri. Lekin klass xom ko'rsatkich orqali resursga ega bo'lsa, standart nusxa faqat manzilni ko'chiradi va ikki obyekt bir xotirani ikki marta bo'shatishi mumkin."
        },
        {
          "type": "code",
          "title": "chuqur-kopiya.cpp",
          "code": "#include <iostream>\n#include <string>\n\nclass Matn {\npublic:\n    explicit Matn(const char* s) : data_(new std::string(s)) {}\n    ~Matn() { delete data_; }\n\n    Matn(const Matn& boshqa) : data_(new std::string(*boshqa.data_)) {}\n\n    Matn& operator=(const Matn& boshqa) {\n        if (this != &boshqa) {\n            *data_ = *boshqa.data_;\n        }\n        return *this;\n    }\n\n    const std::string& qiymat() const {\n        return *data_;\n    }\n\nprivate:\n    std::string* data_;\n};\n\nint main() {\n    Matn a(\"salom\");\n    Matn b = a;\n    b = Matn(\"xayr\");\n\n    std::cout << \"a: \" << a.qiymat() << '\\n';\n    std::cout << \"b: \" << b.qiymat() << '\\n';\n    return 0;\n}",
          "output": "a: salom\nb: xayr"
        },
        {
          "type": "p",
          "html": "Yuqoridagi klassda destruktor, kopiya konstruktori va kopiya assignment operatori birgalikda yozilgan — bu <b>Rule of Three</b>. Agar resursni ko'chirish ham samarali bo'lishi kerak bo'lsa, move konstruktori va move assignment qo'shiladi: <b>Rule of Five</b>. Zamonaviy C++da esa ko'pincha <b>Rule of Zero</b> afzal."
        },
        {
          "type": "code",
          "title": "rule-of-zero.cpp",
          "code": "#include <iostream>\n#include <string>\n#include <vector>\n#include <utility>\n\nclass Talaba {\npublic:\n    Talaba(std::string ism, std::vector<int> baholar)\n        : ism_(std::move(ism)), baholar_(std::move(baholar)) {}\n\n    const std::string& ism() const { return ism_; }\n\n    int jami() const {\n        int sum = 0;\n        for (int b : baholar_) {\n            sum += b;\n        }\n        return sum;\n    }\n\nprivate:\n    std::string ism_;\n    std::vector<int> baholar_;\n};\n\nint main() {\n    Talaba a(\"Aziza\", {90, 80});\n    Talaba b = a;\n\n    std::cout << \"a: \" << a.ism() << \" \" << a.jami() << '\\n';\n    std::cout << \"b: \" << b.ism() << \" \" << b.jami() << '\\n';\n    return 0;\n}",
          "output": "a: Aziza 170\nb: Aziza 170"
        },
        {
          "type": "ul",
          "items": [
            "<code>std::string</code>, <code>std::vector</code> va smart pointerlar o'z kopiyasini to'g'ri boshqaradi.",
            "Xom resurs egasi bo'lsangiz, destruktor, kopiya va move amallarini birgalikda ko'rib chiqing.",
            "Kopiya assignmentda o'z-o'ziga tayinlashni (<code>this == &amp;boshqa</code>) tekshiring.",
            "Agar nusxalash mantiqiy bo'lmasa, kopiya konstruktori va assignmentni <code>= delete</code> qiling."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Copy-and-swap",
          "html": "Kuchli istisno xavfsizligi kerak bo'lsa, assignment operatorini copy-and-swap usulida yozish mumkin: avval nusxa yaratiladi, keyin u bilan almashinadi. Lekin ko'p hollarda a'zolarni <code>std::string</code> va <code>std::vector</code> kabi tayyor turlarga almashtirib, Rule of Zero ga o'tish eng yaxshi yechim."
        }
      ],
      "quiz": [
        {
          "q": "Rule of Zero nimani tavsiya qiladi?",
          "options": [
            "Kopiyani butunlay taqiqlash",
            "Faqat xom ko'rsatkich ishlatish",
            "Resursni standart a'zolar bilan boshqarish va ortiqcha maxsus funksiyalar yozmaslik",
            "Har doim destruktor yozish"
          ],
          "answer": 2,
          "explain": "Agar klass a'zolari o'z resurslarini to'g'ri boshqarsa, kompilyator yaratgan standart amallar yetarli bo'ladi."
        },
        {
          "q": "Sayoz nusxa (shallow copy) nimaga olib kelishi mumkin?",
          "options": [
            "Dasturning tezlashishiga",
            "Xotira tejashiga",
            "Hech qanday muammoga",
            "Bir xotirani ikki marta bo'shatishga"
          ],
          "answer": 3,
          "explain": "Ikki obyekt bir xil manzilni ko'rsatib qolsa, ikkalasi ham destruktorda delete qilishi mumkin — double free."
        },
        {
          "q": "Rule of Three qaysi uchta funksiyani nazarda tutadi?",
          "options": [
            "Destruktor, kopiya konstruktori, kopiya assignment",
            "Konstruktor, destruktor, main",
            "new, delete, malloc",
            "begin, end, size"
          ],
          "answer": 0,
          "explain": "Resursni qo'lda boshqaradigan klassda bu uchta funksiya birgalikda izchil yozilishi kerak."
        }
      ]
    },
    {
      "id": 44,
      "title": "Konteyner tanlash: vector, list, map",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Bir xil vazifani bir necha konteyner bajarishi mumkin, lekin ularning xotira tuzilishi va amal murakkabligi farq qiladi. <code>vector</code> elementlarni ketma-ket saqlaydi va indeks bo'yicha tez; <code>list</code> bog'langan ro'yxat, o'rtaga qo'shish tez, lekin indeks bilan yurish sekin. Tanlov amallaringizga bog'liq."
        },
        {
          "type": "code",
          "title": "vector-list.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <list>\n\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    v.insert(v.begin() + 1, 99);\n    std::cout << \"Vector:\";\n    for (int x : v) {\n        std::cout << ' ' << x;\n    }\n    std::cout << '\\n';\n\n    std::list<int> l = {1, 2, 3};\n    auto it = l.begin();\n    ++it;\n    l.insert(it, 99);\n    std::cout << \"List:\";\n    for (int x : l) {\n        std::cout << ' ' << x;\n    }\n    std::cout << '\\n';\n    return 0;\n}",
          "output": "Vector: 1 99 2 3\nList: 1 99 2 3"
        },
        {
          "type": "p",
          "html": "<code>std::map</code> kalit bo'yicha tartiblangan va O(log n) qidiradi. <code>std::unordered_map</code> xesh-jadval ishlatadi, o'rtacha O(1), lekin tartib kafolatlanmaydi. Tartib muhim bo'lsa map, tezlik muhim bo'lsa unordered_map tanlanadi."
        },
        {
          "type": "code",
          "title": "map-unordered.cpp",
          "code": "#include <iostream>\n#include <map>\n#include <unordered_map>\n#include <string>\n\nint main() {\n    std::map<std::string, int> tartibli;\n    tartibli[\"Bek\"] = 2;\n    tartibli[\"Aziza\"] = 1;\n    tartibli[\"Dilnoza\"] = 3;\n\n    std::cout << \"Map:\";\n    for (const auto& [ism, son] : tartibli) {\n        std::cout << ' ' << ism << \"=\" << son;\n    }\n    std::cout << '\\n';\n\n    std::unordered_map<std::string, int> tez;\n    tez[\"Bek\"] = 2;\n    tez[\"Aziza\"] = 1;\n    tez[\"Dilnoza\"] = 3;\n\n    std::cout << \"Aziza: \" << tez[\"Aziza\"] << '\\n';\n    std::cout << \"Soni: \" << tez.size() << '\\n';\n    return 0;\n}",
          "output": "Map: Aziza=1 Bek=2 Dilnoza=3\nAziza: 1\nSoni: 3"
        },
        {
          "type": "table",
          "head": [
            "Konteyner",
            "Kuchli tomoni",
            "Zaif tomoni"
          ],
          "rows": [
            [
              "<code>vector</code>",
              "Ketma-ket xotira, indeks, kesh",
              "Boshiga qo'shish sekin"
            ],
            [
              "<code>deque</code>",
              "Ikki tomondan tez qo'shish",
              "O'rtaga qo'shish sekin"
            ],
            [
              "<code>list</code>",
              "Iterator bilan o'rtaga tez qo'shish",
              "Keshga mos emas, indeks yo'q"
            ],
            [
              "<code>map</code>",
              "Tartiblangan kalit, O(log n)",
              "Har element uchun qo'shimcha xotira"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Default — vector",
          "html": "Aksariyat holatda <code>std::vector</code> eng yaxshi tanlov: u sodda, keshga mos va amalda tez. Avval vector bilan yozib ko'ring, profiler aniq muammo ko'rsatsa, keyin boshqa konteynerga o'ting."
        }
      ],
      "quiz": [
        {
          "q": "Odatda eng ko'p ishlatiladigan umumiy maqsadli konteyner qaysi?",
          "options": [
            "std::stack",
            "std::vector",
            "std::list",
            "std::map"
          ],
          "answer": 1,
          "explain": "vector ketma-ket xotirasi va indeksga tez murojaati tufayli ko'p holatlarda eng qulay tanlov."
        },
        {
          "q": "std::map va std::unordered_map orasidagi asosiy farq nima?",
          "options": [
            "unordered_map takroriy kalit saqlaydi",
            "Farqi yo'q",
            "map kalitlar bo'yicha tartiblangan, unordered_map tartibi kafolatlanmagan",
            "map har doim tezroq"
          ],
          "answer": 2,
          "explain": "map tartiblangan daraxt, unordered_map xesh-jadval; shu sababli tartib va murakkablik farq qiladi."
        },
        {
          "q": "std::list qaysi amalda vector dan yaxshiroq bo'lishi mumkin?",
          "options": [
            "Indeks bo'yicha tez murojaat",
            "Xotirani tejash",
            "Saralash",
            "Iterator ma'lum bo'lganda o'rtaga element qo'shish"
          ],
          "answer": 3,
          "explain": "list tugunlar bilan bog'langan; iterator ma'lum bo'lsa, o'rtaga qo'shish elementlarni ko'chirmaydi."
        }
      ]
    },
    {
      "id": 45,
      "title": "Kod uslubi va refaktoring",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Ishlaydigan kod yetarli emas — uni o'qish va o'zgartirish oson bo'lishi kerak. Refaktoring tashqi xatti-harakatni o'zgartirmasdan ichki tuzilmani yaxshilaydi: takrorlarni olib tashlash, funksiyalarni kichraytirish, nomlarni aniqlashtirish. Bu xatolarni kamaytiradi."
        },
        {
          "type": "code",
          "title": "oldin.cpp",
          "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> baholar = {80, 90, 70};\n    int jami = 0;\n    for (int b : baholar) {\n        jami += b;\n    }\n    int ortacha = jami / static_cast<int>(baholar.size());\n\n    std::vector<int> baholar2 = {60, 100};\n    int jami2 = 0;\n    for (int b : baholar2) {\n        jami2 += b;\n    }\n    int ortacha2 = jami2 / static_cast<int>(baholar2.size());\n\n    std::cout << \"Birinchi: \" << ortacha << '\\n';\n    std::cout << \"Ikkinchi: \" << ortacha2 << '\\n';\n    return 0;\n}",
          "output": "Birinchi: 80\nIkkinchi: 80"
        },
        {
          "type": "p",
          "html": "Yuqoridagi kod bir xil hisobni ikki marta takrorlaydi. Takroriy mantiqni nomli funksiyaga ajratsak, xato ehtimoli kamayadi va o'zgartirish bitta joyda bo'ladi. Funksiya nomi nima qilishini aniq aytsin: <code>ortacha</code> kabi."
        },
        {
          "type": "code",
          "title": "keyin.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <numeric>\n\nint ortacha(const std::vector<int>& baholar) {\n    if (baholar.empty()) {\n        return 0;\n    }\n    int jami = std::accumulate(baholar.begin(), baholar.end(), 0);\n    return jami / static_cast<int>(baholar.size());\n}\n\nint main() {\n    std::cout << \"Birinchi: \" << ortacha({80, 90, 70}) << '\\n';\n    std::cout << \"Ikkinchi: \" << ortacha({60, 100}) << '\\n';\n    return 0;\n}",
          "output": "Birinchi: 80\nIkkinchi: 80"
        },
        {
          "type": "ul",
          "items": [
            "Nomlar o'zgaruvchining ma'nosini aytsin: <code>ball</code>, <code>ortacha</code>, <code>talabalar</code>.",
            "Har funksiya bitta aniq ish qilsin; juda uzun funksiyani bo'laklarga ajrating.",
            "O'zgarmaydigan parametrlarni <code>const&amp;</code> qiling.",
            "Kompilyatorni <code>-Wall -Wextra -Wpedantic</code> bilan yoqing va ogohlantirishlarni tuzating."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Avtomatik formatlash",
          "html": "<code>clang-format</code> kodni bir xil uslubga keltiradi, <code>clang-tidy</code> esa potensial xatolarni ko'rsatadi. Jamoada uslub bo'yicha kelishib, formatlashni avtomatlashtirish vaqtni tejaydi va diffni oson o'qiydi."
        }
      ],
      "quiz": [
        {
          "q": "Yaxshi funksiya nomi qanday bo'lishi kerak?",
          "options": [
            "Vazifasini aniq bildiradigan",
            "Bir harfdan iborat",
            "Faqat raqamli",
            "Faqat izohda tushuntiriladigan"
          ],
          "answer": 0,
          "explain": "Nom kodni o'qiyotganda ma'noni yetkazishi kerak; qisqa noaniq nomlar chalkashlik keltiradi."
        },
        {
          "q": "Takrorlangan kodni nima qilish tavsiya etiladi?",
          "options": [
            "Faqat izoh qo'shish",
            "Umumiy funksiyaga ajratish",
            "Yana ko'paytirish",
            "O'chirib yuborish"
          ],
          "answer": 1,
          "explain": "Takroriy mantiqni bitta funksiyaga yig'ish o'zgartirish va testlashni osonlashtiradi."
        },
        {
          "q": "-Wall -Wextra bayroqlari nima uchun ishlatiladi?",
          "options": [
            "Debug belgilarini qo'shish",
            "Testlarni ishga tushirish",
            "Kompilyator ogohlantirishlarini yoqish",
            "Optimallashtirishni o'chirish"
          ],
          "answer": 2,
          "explain": "Bu bayroqlar ko'proq ogohlantirish ko'rsatadi, shu bilan yashirin xatolarni erta topish mumkin."
        }
      ]
    },
    {
      "id": 46,
      "title": "Loyiha tuzilmasi va arxitektura",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Kichik dastur bitta faylda yashashi mumkin, lekin loyiha o'sganda uni qatlamlarga ajratish kerak. Bizning yakuniy loyihamiz — kutubxona jurnali: <b>model</b> ma'lumotni, <b>repository</b> saqlashni, <b>service</b> qoidalarni, <b>CLI</b> esa foydalanuvchi bilan aloqani boshqaradi. Har qatlam o'z vazifasini biladi."
        },
        {
          "type": "code",
          "title": "model.cpp",
          "code": "#include <iostream>\n#include <string>\n#include <stdexcept>\n#include <utility>\n\nstruct Kitob {\n    int id;\n    std::string nom;\n    int yil;\n\n    Kitob(int id, std::string nom, int yil)\n        : id(id), nom(std::move(nom)), yil(yil) {\n        if (this->nom.empty()) {\n            throw std::invalid_argument(\"nom bo'sh\");\n        }\n    }\n};\n\nint main() {\n    Kitob k(1, \"C++ asoslari\", 2024);\n    std::cout << k.id << \": \" << k.nom << \" (\" << k.yil << \")\\n\";\n    return 0;\n}",
          "output": "1: C++ asoslari (2024)"
        },
        {
          "type": "p",
          "html": "Repository — saqlash tafsilotini yashiradigan qatlam. Bugun u <code>std::vector</code> bo'lishi mumkin, ertaga fayl yoki ma'lumotlar bazasi. Service va CLI repositoryning ichki tuzilishini bilmasligi kerak; shunda saqlash usulini almashtirish oson bo'ladi."
        },
        {
          "type": "code",
          "title": "repository.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nstruct Kitob {\n    int id;\n    std::string nom;\n};\n\nclass Kutubxona {\npublic:\n    void qosh(const Kitob& k) {\n        kitoblar_.push_back(k);\n    }\n\n    const Kitob* top(int id) const {\n        auto it = std::find_if(kitoblar_.begin(), kitoblar_.end(),\n            [id](const Kitob& k) { return k.id == id; });\n        return it == kitoblar_.end() ? nullptr : &*it;\n    }\n\n    std::size_t soni() const {\n        return kitoblar_.size();\n    }\n\nprivate:\n    std::vector<Kitob> kitoblar_;\n};\n\nint main() {\n    Kutubxona k;\n    k.qosh({1, \"C++ asoslari\"});\n    k.qosh({2, \"STL amaliyoti\"});\n\n    const Kitob* topilgan = k.top(2);\n    std::cout << \"Soni: \" << k.soni() << '\\n';\n    if (topilgan != nullptr) {\n        std::cout << \"Topildi: \" << topilgan->nom << '\\n';\n    }\n    return 0;\n}",
          "output": "Soni: 2\nTopildi: STL amaliyoti"
        },
        {
          "type": "table",
          "head": [
            "Papka / fayl",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>include/kutubxona/</code>",
              "Ommaviy header fayllar"
            ],
            [
              "<code>src/</code>",
              "Model, repository, service va CLI ta'riflari"
            ],
            [
              "<code>tests/</code>",
              "Unit testlar"
            ],
            [
              "<code>CMakeLists.txt</code>",
              "Build konfiguratsiyasi"
            ],
            [
              "<code>README.md</code>",
              "Qurish va ishlatish yo'riqnomasi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Ortiqcha murakkablashtirmang",
          "html": "Kichik loyihaga bir necha qatlam qo'shish shart emas. Lekin model va saqlashni ajratish keyinchalik testlash va o'zgartirishni ancha osonlashtiradi. Har qatlam uchun aniq javobgarlik belgilang."
        }
      ],
      "quiz": [
        {
          "q": "Nega model va foydalanuvchi interfeysi ajratiladi?",
          "options": [
            "Kod uzunroq bo'ladi",
            "Xotira kamayadi",
            "Kompilyator tezlashadi",
            "Testlash va o'zgartirish osonlashadi"
          ],
          "answer": 3,
          "explain": "Ajratilgan qatlamlarni mustaqil test qilish va almashtirish mumkin; UI o'zgarsa, model buzilmaydi."
        },
        {
          "q": "Repository qatlamining vazifasi nima?",
          "options": [
            "Ma'lumot saqlashni yashirish",
            "Foydalanuvchi uchun menyu chizish",
            "Faqat test yozish",
            "Kompilyatsiya qilish"
          ],
          "answer": 0,
          "explain": "Repository saqlash tafsilotlarini (vector, fayl, baza) yashiradi va model obyektlarini beradi."
        },
        {
          "q": "Header fayl odatda nimani saqlaydi?",
          "options": [
            "Faqat testlarni",
            "E'lonlarni",
            "Barcha funksiya ta'riflarini",
            "Faqat main funksiyasini"
          ],
          "answer": 1,
          "explain": "Header odatda turlar va funksiyalarning e'lonlarini saqlaydi; ta'riflar .cpp fayllarda bo'ladi."
        }
      ]
    },
    {
      "id": 47,
      "title": "Loyiha: model va repository",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi yakuniy loyihani qurishni boshlaymiz. Birinchi qadam — <b>model</b>: kitobning identifikatori, nomi va yili. Model o'z invariantlarini konstruktorda tekshiradi: id musbat, nom bo'sh emas. Shunda noto'g'ri obyekt yaratilmaydi."
        },
        {
          "type": "code",
          "title": "kitob.cpp",
          "code": "#include <iostream>\n#include <string>\n#include <stdexcept>\n#include <utility>\n\nclass Kitob {\npublic:\n    Kitob(int id, std::string nom, int yil)\n        : id_(id), nom_(std::move(nom)), yil_(yil) {\n        if (id_ <= 0) {\n            throw std::invalid_argument(\"id noto'g'ri\");\n        }\n        if (nom_.empty()) {\n            throw std::invalid_argument(\"nom bo'sh\");\n        }\n    }\n\n    int id() const { return id_; }\n    const std::string& nom() const { return nom_; }\n    int yil() const { return yil_; }\n\nprivate:\n    int id_;\n    std::string nom_;\n    int yil_;\n};\n\nint main() {\n    try {\n        Kitob k(1, \"C++ asoslari\", 2024);\n        std::cout << k.nom() << \" (\" << k.yil() << \")\\n\";\n\n        Kitob xato(0, \"Xato\", 2020);\n    } catch (const std::invalid_argument& e) {\n        std::cout << \"Xato: \" << e.what() << '\\n';\n    }\n    return 0;\n}",
          "output": "C++ asoslari (2024)\nXato: id noto'g'ri"
        },
        {
          "type": "p",
          "html": "Repository model obyektlarini saqlaydi va ular bo'yicha amallarni beradi: qo'shish, id bo'yicha topish, o'chirish. U ichki konteynerni yashiradi. Keyingi darsda uning ustiga service qatlamini quramiz, shunda biznes qoidalar CLI dan ajraladi."
        },
        {
          "type": "code",
          "title": "repository.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <utility>\n\nclass Kitob {\npublic:\n    Kitob(int id, std::string nom) : id_(id), nom_(std::move(nom)) {}\n    int id() const { return id_; }\n    const std::string& nom() const { return nom_; }\n\nprivate:\n    int id_;\n    std::string nom_;\n};\n\nclass KitobRepository {\npublic:\n    void qosh(const Kitob& k) {\n        kitoblar_.push_back(k);\n    }\n\n    const Kitob* idBoyicha(int id) const {\n        auto it = std::find_if(kitoblar_.begin(), kitoblar_.end(),\n            [id](const Kitob& k) { return k.id() == id; });\n        return it == kitoblar_.end() ? nullptr : &*it;\n    }\n\n    bool ochir(int id) {\n        auto oldingi = kitoblar_.size();\n        kitoblar_.erase(\n            std::remove_if(kitoblar_.begin(), kitoblar_.end(),\n                [id](const Kitob& k) { return k.id() == id; }),\n            kitoblar_.end());\n        return kitoblar_.size() != oldingi;\n    }\n\n    std::size_t soni() const { return kitoblar_.size(); }\n\nprivate:\n    std::vector<Kitob> kitoblar_;\n};\n\nint main() {\n    KitobRepository repo;\n    repo.qosh(Kitob(1, \"C++ asoslari\"));\n    repo.qosh(Kitob(2, \"STL amaliyoti\"));\n\n    std::cout << \"Soni: \" << repo.soni() << '\\n';\n    std::cout << \"2 topildi: \" << (repo.idBoyicha(2) != nullptr) << '\\n';\n    std::cout << \"O'chirildi: \" << repo.ochir(1) << '\\n';\n    std::cout << \"Yangi soni: \" << repo.soni() << '\\n';\n    return 0;\n}",
          "output": "Soni: 2\n2 topildi: 1\nO'chirildi: 1\nYangi soni: 1"
        },
        {
          "type": "ul",
          "items": [
            "Model faqat ma'lumot va o'z qoidalarini biladi; u fayl yoki konsol haqida o'ylamaydi.",
            "Repository id bo'yicha qidirish va o'chirishni ta'minlaydi.",
            "Topilmasa <code>nullptr</code> qaytarish — \"obyekt yo'q\" holatini aniq bildiradi.",
            "Keyingi qadam: service qatlamida takroriy id va biznes qoidalarini tekshirish."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Kichik qadamlar",
          "html": "Loyihani bir kunda tugatish shart emas. Har darsdan keyin kodni kompilyatsiya qilib, bitta yangi imkoniyatni sinab ko'ring. Kichik, ishlaydigan qadamlar xatoni erta topishga yordam beradi."
        }
      ],
      "quiz": [
        {
          "q": "Repository ning asosiy vazifasi nima?",
          "options": [
            "Modelni tekshirish",
            "Faqat test yozish",
            "Saqlashni yashirib, model obyektlarini boshqarish",
            "Foydalanuvchi kiritishini tahlil qilish"
          ],
          "answer": 2,
          "explain": "Repository saqlash tafsilotini yashiradi va qo'shish, topish, o'chirish kabi amallarni beradi."
        },
        {
          "q": "id bo'yicha qidiruv topilmasa nima qaytarish ma'qul?",
          "options": [
            "Doim birinchi kitob",
            "Yangi kitob",
            "Xato kodi o'rniga 0 soni",
            "nullptr"
          ],
          "answer": 3,
          "explain": "Ko'rsatkich qaytaruvchi qidiruvda nullptr topilmaganini aniq bildiradi."
        },
        {
          "q": "Model invariantini qayerda tekshirish mumkin?",
          "options": [
            "Konstruktorda",
            "Faqat main funksiyasida",
            "Faqat testlarda",
            "Hech qayerda"
          ],
          "answer": 0,
          "explain": "Konstruktor noto'g'ri obyekt yaratilishining oldini oladi; invariant buzilgan obyekt paydo bo'lmaydi."
        }
      ]
    },
    {
      "id": 48,
      "title": "Loyiha: xizmatlar qatlami va CLI",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Repository faqat saqlaydi; biznes qoidalari — takroriy id bo'lmasligi, nom bo'sh emasligi, o'chirish huquqi — <b>service</b> qatlamida tekshiriladi. CLI esa foydalanuvchi matnini tahlil qilib, service metodlarini chaqiradi. Bu ajratish testlashni osonlashtiradi: CLI ni ishga tushirmasdan service ni tekshirish mumkin."
        },
        {
          "type": "code",
          "title": "service.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <stdexcept>\n\nstruct Kitob {\n    int id;\n    std::string nom;\n};\n\nclass KutubxonaService {\npublic:\n    void qosh(int id, const std::string& nom) {\n        if (nom.empty()) {\n            throw std::invalid_argument(\"nom bo'sh\");\n        }\n        auto bor = std::find_if(kitoblar_.begin(), kitoblar_.end(),\n            [id](const Kitob& k) { return k.id == id; });\n        if (bor != kitoblar_.end()) {\n            throw std::runtime_error(\"id takroriy\");\n        }\n        kitoblar_.push_back({id, nom});\n    }\n\n    std::size_t soni() const {\n        return kitoblar_.size();\n    }\n\nprivate:\n    std::vector<Kitob> kitoblar_;\n};\n\nint main() {\n    KutubxonaService s;\n    s.qosh(1, \"C++ asoslari\");\n    s.qosh(2, \"STL amaliyoti\");\n\n    try {\n        s.qosh(1, \"Takroriy\");\n    } catch (const std::exception& e) {\n        std::cout << \"Xato: \" << e.what() << '\\n';\n    }\n\n    std::cout << \"Soni: \" << s.soni() << '\\n';\n    return 0;\n}",
          "output": "Xato: id takroriy\nSoni: 2"
        },
        {
          "type": "p",
          "html": "CLI qatlami kiritishni tahlil qiladi va service ga uzatadi. U biznes qoidalarini takrorlamaydi; faqat buyruqni ajratadi, xatoni foydalanuvchiga tushunarli ko'rinishda ko'rsatadi. Quyidagi misolda buyruqlar ro'yxati oldindan berilgan — haqiqiy dasturda ular <code>std::getline(std::cin, qator)</code> bilan o'qiladi."
        },
        {
          "type": "code",
          "title": "cli.cpp",
          "code": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <vector>\n\nint main() {\n    std::vector<std::string> buyruqlar = {\n        \"qosh 1 C++\",\n        \"qosh 2 STL\",\n        \"soni\"\n    };\n    int soni = 0;\n\n    for (const std::string& qator : buyruqlar) {\n        std::istringstream oqim(qator);\n        std::string buyruq;\n        oqim >> buyruq;\n\n        if (buyruq == \"qosh\") {\n            int id;\n            std::string nom;\n            oqim >> id >> nom;\n            ++soni;\n            std::cout << \"Qo'shildi: \" << id << \" \" << nom << '\\n';\n        } else if (buyruq == \"soni\") {\n            std::cout << \"Soni: \" << soni << '\\n';\n        } else {\n            std::cout << \"Noma'lum buyruq\\n\";\n        }\n    }\n    return 0;\n}",
          "output": "Qo'shildi: 1 C++\nQo'shildi: 2 STL\nSoni: 2"
        },
        {
          "type": "ul",
          "items": [
            "Service biznes qoidalarini markazlashtiradi; CLI va UI ularni takrorlamaydi.",
            "Xatolarni istisno bilan yuqoriga uzatib, CLI da foydalanuvchiga mos xabar bering.",
            "Buyruq nomlarini kichik harflarda va izchil saqlang: <code>qosh</code>, <code>ochir</code>, <code>royxat</code>.",
            "Har bir buyruq uchun kutilgan argumentlar sonini tekshiring."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "CLI ni yupqa saqlang",
          "html": "CLI da biznes mantiqni yozmang. U faqat matnni tahlil qilsin, service ni chaqirsin va natijani chiqarsin. Shunda keyin veb yoki grafik interfeys qo'shsangiz, service ni o'zgartirmasdan qayta ishlatish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Service qatlami asosan nimani boshqaradi?",
          "options": [
            "Kompilyatsiya jarayonini",
            "Biznes qoidalarini",
            "Fayl formatini",
            "Konsol ranglarini"
          ],
          "answer": 1,
          "explain": "Service takroriy id, nom tekshiruvi kabi biznes qoidalarini markazlashtiradi."
        },
        {
          "q": "CLI kiritishini tahlil qilishni alohida qatlamga ajratish nima beradi?",
          "options": [
            "Xotirani kamaytiradi",
            "Kompilyatsiyani tezlashtiradi",
            "Testlash va qayta ishlatishni osonlashtiradi",
            "Kodni uzaytiradi"
          ],
          "answer": 2,
          "explain": "Kiritishni ajratish service ni CLI siz test qilish va boshqa interfeysda qayta ishlatish imkonini beradi."
        },
        {
          "q": "Takroriy id ni qayerda tekshirish ma'qul?",
          "options": [
            "Faqat CLI da",
            "Faqat model konstruktorida",
            "Hech qayerda",
            "Service yoki repository qoidasida"
          ],
          "answer": 3,
          "explain": "Takroriylikni saqlash qatlami yoki service qoidasi markaziy joyda tekshirishi kerak."
        }
      ]
    },
    {
      "id": 49,
      "title": "Loyiha: test, build va yakunlash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Yakuniy bosqichda loyihani tekshirib, hujjatlashtirib va build qilib topshiramiz. Avval eng muhim qoidalar uchun kichik testlar yozamiz: chegara qiymatlari, noto'g'ri kirish, takroriy id. Testlar kelajakda o'zgartirish kiritganda regressiyani ushlaydi."
        },
        {
          "type": "code",
          "title": "testlar.cpp",
          "code": "#include <iostream>\n#include <string>\n\nbool yaroqliId(int id) {\n    return id > 0;\n}\n\nint main() {\n    int otgan = 0;\n    int jami = 0;\n\n    auto tekshir = [&](bool shart, const std::string& nom) {\n        ++jami;\n        if (shart) {\n            ++otgan;\n        } else {\n            std::cout << \"FAIL: \" << nom << '\\n';\n        }\n    };\n\n    tekshir(yaroqliId(1), \"1 yaroqli\");\n    tekshir(!yaroqliId(0), \"0 yaroqsiz\");\n    tekshir(!yaroqliId(-5), \"-5 yaroqsiz\");\n    tekshir(yaroqliId(999), \"999 yaroqli\");\n\n    std::cout << otgan << \"/\" << jami << \" test o'tdi\\n\";\n    return 0;\n}",
          "output": "4/4 test o'tdi"
        },
        {
          "type": "p",
          "html": "Endi qismlarni birlashtiramiz: model, tartiblash, lambda va smart pointer. Bu kichik dastur kursda o'rgangan asosiy g'oyalarni bir joyda ko'rsatadi. Katta loyihada bu qismlar alohida fayllarda bo'ladi, lekin mantiq shu."
        },
        {
          "type": "code",
          "title": "yakuniy.cpp",
          "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <memory>\n\nstruct Kitob {\n    int id;\n    std::string nom;\n};\n\nint main() {\n    std::vector<Kitob> kitoblar = {\n        {2, \"STL amaliyoti\"},\n        {1, \"C++ asoslari\"}\n    };\n\n    std::sort(kitoblar.begin(), kitoblar.end(),\n        [](const Kitob& a, const Kitob& b) {\n            return a.id < b.id;\n        });\n\n    std::cout << \"Kutubxona:\\n\";\n    for (const auto& k : kitoblar) {\n        std::cout << k.id << \". \" << k.nom << '\\n';\n    }\n\n    auto egasi = std::make_unique<int>(static_cast<int>(kitoblar.size()));\n    std::cout << \"Jami: \" << *egasi << '\\n';\n    return 0;\n}",
          "output": "Kutubxona:\n1. C++ asoslari\n2. STL amaliyoti\nJami: 2"
        },
        {
          "type": "ul",
          "items": [
            "Kodni <code>-Wall -Wextra -Wpedantic</code> bilan ogohlantirishsiz kompilyatsiya qiling.",
            "Testlarni ishga tushiring va xotira xatolari uchun sanitizer bilan tekshiring.",
            "README da build, ishga tushirish va buyruqlar misolini yozing.",
            "Git tarixini mazmunli commitlar bilan saqlang va yakuniy versiyani belgilang."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tabriklaymiz!",
          "html": "Siz 49 dars davomida C++ asoslaridan loyiha qurishgacha bo'lgan yo'lni bosib o'tdingiz. Endi 147 ta test bo'yicha bilimingizni mustahkamlab, 12 savollik yakuniy imtihonga o'tishingiz mumkin. O'tish uchun 75% (9 ta to'g'ri javob) kerak; qayta topshirish imkoniyati ham bor."
        }
      ],
      "quiz": [
        {
          "q": "Testlar nima uchun yoziladi?",
          "options": [
            "Regressiyani erta ushlash uchun",
            "Kodni uzaytirish uchun",
            "Kompilyatsiyani sekinlashtirish uchun",
            "Xotirani ko'paytirish uchun"
          ],
          "answer": 0,
          "explain": "Testlar o'zgartirishdan keyin eski xatti-harakat buzilmaganini tez tekshirishga yordam beradi."
        },
        {
          "q": "Buildni noldan qurish uchun nima qilish kerak?",
          "options": [
            "Kompilyatorni o'chirish",
            "Build papkasini tozalab, CMake ni qayta ishga tushirish",
            "Faqat main.cpp ni o'zgartirish",
            "Testlarni o'chirish"
          ],
          "answer": 1,
          "explain": "Eski build fayllarini tozalab, konfiguratsiya va buildni qaytadan bajarish ishonchli natija beradi."
        },
        {
          "q": "Loyihani topshirishdan oldin nima tayyor bo'lishi kerak?",
          "options": [
            "Faqat kompilyator sozlamalari",
            "Faqat testlarsiz kod",
            "README, testlar va barqaror build",
            "Faqat bitta kod fayli"
          ],
          "answer": 2,
          "explain": "Hujjat, testlar va qayta quriladigan build loyihani boshqalarga topshirish uchun zarur."
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
          "html": "Bu C++ kursining yakuniy imtihoni. 49 dars va 147 ta test davomida siz sintaksisdan tortib zamonaviy C++gacha — havolalar, STL, shablonlar, OOP, smart pointerlar, xatolar, fayllar, CMake, parallelizm va yakuniy loyihagacha bo'lgan mavzularni o'rgandingiz. Imtihon butun kursni qamrab oladi."
        },
        {
          "type": "ul",
          "items": [
            "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
            "Har bir savol teng baholanadi; jami 12 ball.",
            "O'tish chegarasi — <strong>75%</strong>, ya'ni kamida <strong>9 ta</strong> to'g'ri javob.",
            "Imtihonni qayta topshirish mumkin; eng yaxshi natija saqlanadi.",
            "O'tgandan keyin sertifikatni ko'rish va PDF qilib saqlash mumkin."
          ]
        },
        {
          "type": "p",
          "html": "Savollar 1–12 darslardagi asoslar bilan birga 13–49 darslardagi ilg'or mavzularni ham tekshiradi: <code>std::optional</code>, <code>const</code> metodlar, virtual polimorfizm, smart pointerlar, move semantikasi, istisnolar, oqimlar, CMake va threadlar. Shoshilmang: har bir variantni o'qib, eng aniq javobni tanlang."
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Imtihondan oldin",
          "html": "Kod misollarini qayta o'qib chiqing, ayniqsa <code>unique_ptr</code> va <code>std::move</code>, <code>virtual</code>, <code>try/catch</code>, <code>std::sort</code> va <code>std::mutex</code> misollarini. Savol noto'g'ri tuyulsa, avval eng sodda va standartga mos javobni tanlang."
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Natija va sertifikat",
          "html": "12 savoldan 9 tasi to'g'ri bo'lsa, imtihon o'tgan hisoblanadi. Aks holda kursni qayta ko'rib, imtihonni yana topshirishingiz mumkin. Sertifikat kurs tugaganingiz va imtihondan muvaffaqiyatli o'tganingizni tasdiqlaydi."
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
        "q": "std::endl va '\\n' orasidagi asosiy farq nima?",
        "options": [
          "'\\n' oqimni flush qiladi, std::endl qilmaydi",
          "std::endl oqimni flush qiladi, '\\n' qilmaydi",
          "Ikkalasi butunlay bir xil",
          "std::endl faqat fayllarda ishlaydi"
        ],
        "answer": 1,
        "explain": "std::endl yangi qator yozadi va oqimni flush qiladi; '\\n' faqat yangi qator belgisini yozadi."
      },
      {
        "q": "int a = 7, b = 2; std::cout << a / b; nima chiqadi?",
        "options": [
          "3",
          "3.5",
          "4",
          "Kompilyatsiya xatosi"
        ],
        "answer": 0,
        "explain": "Ikkala operand int bo'lsa, butun bo'lish bajariladi va qoldiq tashlanadi: 7 / 2 = 3."
      },
      {
        "q": "noexcept deb belgilangan funksiyadan istisno chiqib ketsa nima yuz beradi?",
        "options": [
          "Avtomatik catch bloki ishlaydi",
          "Dastur istisnoni e'tiborsiz qoldiradi",
          "std::terminate chaqiriladi",
          "Funksiya xato kodi qaytaradi"
        ],
        "answer": 2,
        "explain": "noexcept va'dasi buzilsa, standart bo'yicha std::terminate chaqiriladi va dastur favqulodda tugaydi."
      },
      {
        "q": "Metod e'loniga qo'shilgan const nimani va'da qiladi?",
        "options": [
          "Metod obyektning mantiqiy holatini o'zgartirmaydi",
          "Metod har doim tezroq bajariladi",
          "Metod yangi obyekt qaytaradi",
          "Metod faqat private a'zolarni o'qiydi"
        ],
        "answer": 0,
        "explain": "const metod obyekt holatini o'zgartirmasligini bildiradi; uni const obyektlarda ham chaqirish mumkin."
      },
      {
        "q": "std::optional qaysi muammoni hal qilish uchun mo'ljallangan?",
        "options": [
          "Xotirani avtomatik bo'shatish",
          "Qiymat yo'qligini xavfsiz va aniq ifodalash",
          "Faylni ikkilik rejimda ochish",
          "Yangi thread yaratish"
        ],
        "answer": 1,
        "explain": "std::optional qiymat mavjud yoki yo'qligini tur darajasida ifodalaydi va -1 kabi sun'iy belgilardan qutqaradi."
      },
      {
        "q": "std::sort ga maxsus tartib berish uchun uchinchi argument sifatida nima beriladi?",
        "options": [
          "Massiv o'lchami",
          "Tasodifiy seed",
          "Boshlang'ich indeks",
          "Taqqoslash funksiyasi (comparator)"
        ],
        "answer": 3,
        "explain": "std::sort uchinchi argument sifatida ikkita elementni taqqoslaydigan funksiya yoki lambdani qabul qiladi."
      },
      {
        "q": "Virtual funksiya orqali chaqiruv qachon obyektning haqiqiy turiga qarab tanlanadi?",
        "options": [
          "Faqat kompilyatsiya vaqtida",
          "Faqat konstruktor ichida",
          "Runtimeda",
          "Faqat namespace ichida"
        ],
        "answer": 2,
        "explain": "Virtual funksiyalar jadval orqali runtimeda hal qilinadi; shu bilan polimorfizm ta'minlanadi."
      },
      {
        "q": "unique_ptr egaligini boshqa unique_ptr ga qanday o'tkazish mumkin?",
        "options": [
          "std::copy orqali",
          "std::move orqali",
          "Oddiy operator= orqali",
          "std::share orqali"
        ],
        "answer": 1,
        "explain": "unique_ptr nusxalanmaydi; egalik faqat std::move bilan rvalue havola sifatida o'tkaziladi."
      },
      {
        "q": "Move konstruktorini noexcept qilish nima uchun muhim?",
        "options": [
          "Konteynerlar move dan ishonchli foydalanishi uchun",
          "Kompilyatsiya vaqti qisqarishi uchun",
          "Xotira hajmi kamayishi uchun",
          "Virtual chaqiruv tezlashishi uchun"
        ],
        "answer": 0,
        "explain": "std::vector kabi konteynerlar qayta ajratishda move noexcept bo'lsa ko'chirishni xavfsiz tanlaydi."
      },
      {
        "q": "Fayl oqimi obyekti scope tugaganda nima bo'ladi?",
        "options": [
          "Fayl avtomatik o'chiriladi",
          "Dastur to'xtaydi",
          "Hech narsa bo'lmaydi",
          "Fayl avtomatik yopiladi"
        ],
        "answer": 3,
        "explain": "ofstream/ifstream destruktori faylni yopadi; bu RAII ning amaliy ko'rinishi."
      },
      {
        "q": "Manba papkasidan yangi build papkasini yaratib, CMake ni ishga tushirish uchun qaysi buyruq ishlatiladi?",
        "options": [
          "cmake -S . -B build",
          "g++ main.cpp",
          "rm -rf build",
          "./main"
        ],
        "answer": 0,
        "explain": "-S manba papkasini, -B build papkasini bildiradi; CMake konfiguratsiyani shu yerda yaratadi."
      },
      {
        "q": "Data race oldini olish uchun qaysi vositalar ishlatiladi?",
        "options": [
          "Faqat std::cout",
          "Mutex yoki atomic",
          "Faqat std::vector",
          "Faqat sleep()"
        ],
        "answer": 1,
        "explain": "Umumiy ma'lumotga murojaatni mutex bilan himoyalash yoki atomic amallardan foydalanish data race ni oldini oladi."
      }
    ]
  }
};
})();
