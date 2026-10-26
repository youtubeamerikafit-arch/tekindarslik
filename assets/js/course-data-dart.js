/* Dart course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.dart = {
  "id": "dart",
  "title": "Dart",
  "logoClass": "course-logo--dart",
  "logoText": "Da",
  "level": "Boshlovchi",
  "hours": "~20 soat",
  "testCount": 147,
  "lang": "dart",
  "interactive": "none",
  "heroTitle": "Dart: tez, tipli va ishonchli dasturlash",
  "heroDesc": "Dart tilini noldan o'rganing: 49 dars, 147 test va 12 savollik yakuniy imtihon. Null safety, kolleksiyalar, OOP, Dart 3 recordlari, asinxronlik, isolate, testlash va Flutter asoslari — barchasi amaliy misollar bilan.",
  "metaDescription": "Dart kursi: 49 dars, 147 test va 12 savollik imtihon. Dart 3, null safety, sinflar, generiklar, async, isolate, testlash, Flutter va JSON mavzularini o'zbek tilida noldan o'rganing.",
  "modules": [
    {
      "title": "Asoslar",
      "lessons": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    {
      "title": "Obyektga yo'naltirilgan Dart",
      "lessons": [
        6,
        7
      ]
    },
    {
      "title": "Null safety va asinxronlik",
      "lessons": [
        8,
        9
      ]
    },
    {
      "title": "Xatolar, fayllar va JSON",
      "lessons": [
        10,
        11,
        12
      ]
    },
    {
      "title": "Dart 3 yangiliklari",
      "lessons": [
        13,
        14,
        15,
        16,
        17
      ]
    },
    {
      "title": "Ma'lumotlar bilan ishlash",
      "lessons": [
        18,
        19,
        20,
        21
      ]
    },
    {
      "title": "Ilg'or obyektga yo'naltirish",
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
      "title": "Platforma va tarmoq",
      "lessons": [
        29,
        30,
        31,
        32,
        33,
        34
      ]
    },
    {
      "title": "Sifat va testlash",
      "lessons": [
        35,
        36,
        37,
        38,
        39
      ]
    },
    {
      "title": "Flutter asoslari",
      "lessons": [
        40,
        41,
        42,
        43,
        44,
        45
      ]
    },
    {
      "title": "Yakuniy loyiha",
      "lessons": [
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
      "title": "Dart nima va birinchi dastur",
      "minutes": 12,
      "blocks": [
        {
          "type": "p",
          "html": "Dart — Google tomonidan yaratilgan, obyektga yo'naltirilgan va tipli dasturlash tili. U Flutter orqali mobil, veb va desktop ilovalar yozishda, shuningdek server va buyruq qatori dasturlarida ishlatiladi. Dart kodi oldindan kompilyatsiya qilinadi, shuning uchun xatolar ko'pincha dastur ishga tushishidan oldin ko'rinadi."
        },
        {
          "type": "ul",
          "items": [
            "<b>Dart SDK</b> — kompilyator, <code>dart</code> buyruq qatori va standart kutubxonalar to'plami.",
            "<b>dart run</b> — faylni tahlil qilib, dasturni ishga tushiradi.",
            "<b>dart analyze</b> — kodni o'qib, xato va ogohlantirishlarni topadi.",
            "<b>pub</b> — tashqi paketlarni boshqaradigan vosita."
          ]
        },
        {
          "type": "code",
          "title": "salom.dart",
          "code": "void main() {\n  print('Salom, Noldan!');\n  print('Dart 3 ishlayapti.');\n}",
          "output": "Salom, Noldan!\nDart 3 ishlayapti."
        },
        {
          "type": "note",
          "variant": "info",
          "title": "main() — kirish nuqtasi",
          "html": "Dart dasturi har doim <code>main()</code> funksiyasidan boshlanadi. <code>print()</code> qiymatni konsolga chiqaradi. Qator oxiridagi nuqta-vergul majburiy."
        },
        {
          "type": "code",
          "title": "ismo.dart",
          "code": "void main() {\n  final ism = 'Aziza';\n  final yosh = 16;\n  print('$ism ${yosh + 1} yoshga kiradi.');\n}",
          "output": "Aziza 17 yoshga kiradi."
        },
        {
          "type": "table",
          "head": [
            "Buyruq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>dart --version</code>",
              "O'rnatilgan SDK versiyasini ko'rsatadi"
            ],
            [
              "<code>dart run salom.dart</code>",
              "Faylni tahlil qilib ishga tushiradi"
            ],
            [
              "<code>dart analyze</code>",
              "Loyihadagi xatolarni tekshiradi"
            ],
            [
              "<code>dart compile exe</code>",
              "Dasturni bajariladigan faylga aylantiradi"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "Dart dasturi qaysi funksiyadan ishga tushadi?",
          "options": [
            "main()",
            "start()",
            "run()",
            "init()"
          ],
          "answer": 0,
          "explain": "Dart'da har bir dasturning kirish nuqtasi main() funksiyasidir."
        },
        {
          "q": "Konsolga matn chiqarish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "echo()",
            "print()",
            "printf()",
            "console.log()"
          ],
          "answer": 1,
          "explain": "Dart'da print() qiymatni standart chiqishga yozadi. echo va printf boshqa tillarga xos."
        },
        {
          "q": "Dart faylini ishga tushirishning to'g'ri buyrug'i qaysi?",
          "options": [
            "dart start salom.dart",
            "bash salom.dart",
            "dart run salom.dart",
            "dart salom.dart run"
          ],
          "answer": 2,
          "explain": "dart run faylni tahlil qiladi va dasturni ishga tushiradi."
        }
      ]
    },
    {
      "id": 2,
      "title": "O'zgaruvchilar, final va const",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "O'zgaruvchi — qiymat saqlanadigan nomlangan joy. Dart'da <code>var</code> turni qiymatdan xulosa qiladi, aniq tur esa <code>int</code>, <code>double</code>, <code>String</code> kabi nomlar bilan yoziladi. <code>final</code> qiymatni bir marta bog'laydi, <code>const</code> esa uni kompilyatsiya vaqtida hisoblaydi."
        },
        {
          "type": "code",
          "title": "turlar.dart",
          "code": "void main() {\n  var ism = 'Bek';\n  final yosh = 15;\n  const kurs = 'Dart';\n  String shahar = 'Toshkent';\n  int ball = 92;\n  double ortacha = 4.8;\n  bool faol = true;\n\n  print('$ism, $yosh yosh, $shahar');\n  print('$kurs: $ball ball, baho $ortacha');\n  print(faol);\n}",
          "output": "Bek, 15 yosh, Toshkent\nDart: 92 ball, baho 4.8\ntrue"
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
              "<code>4.8</code>",
              "Kasr son"
            ],
            [
              "<code>String</code>",
              "<code>'Aziza'</code>",
              "Matn"
            ],
            [
              "<code>bool</code>",
              "<code>true</code>",
              "Rost yoki yolg'on"
            ],
            [
              "<code>var</code>",
              "<code>var x = 7;</code>",
              "Turini o'zi xulosa qiladi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "final va const farqi",
          "html": "<code>final</code> qiymati dastur ishlayotganda bir marta hisoblanadi. <code>const</code> esa kompilyatsiya vaqtida ma'lum bo'lgan o'zgarmas qiymat bo'lishi shart. Ikkalasiga ham keyin yangi qiymat berib bo'lmaydi."
        },
        {
          "type": "code",
          "title": "final.dart",
          "code": "void main() {\n  final ism = 'Aziza';\n  const yil = 2026;\n  final royxat = <String>['Ali', 'Bek'];\n  royxat.add('Dilnoza');\n\n  print(ism);\n  print(yil);\n  print(royxat);\n}",
          "output": "Aziza\n2026\n[Ali, Bek, Dilnoza]"
        }
      ],
      "quiz": [
        {
          "q": "Qiymati ish vaqtida bir marta hisoblanadigan, keyin o'zgarmaydigan o'zgaruvchi qaysi kalit so'z bilan e'lon qilinadi?",
          "options": [
            "var",
            "const",
            "late",
            "final"
          ],
          "answer": 3,
          "explain": "final qiymatni ish vaqtida bir marta bog'laydi; const esa kompilyatsiya vaqtidagi o'zgarmas qiymat uchun."
        },
        {
          "q": "var narx = 4.8; yozuvida narx qaysi turga ega bo'ladi?",
          "options": [
            "double",
            "int",
            "num",
            "String"
          ],
          "answer": 0,
          "explain": "Kasr son yozuvi double turi sifatida xulosa qilinadi."
        },
        {
          "q": "final yosh = 15; yozuvidan keyin yosh = 16; bajarilsa nima bo'ladi?",
          "options": [
            "yosh 16 bo'ladi",
            "Kompilyatsiya xatosi chiqadi",
            "Faqat ogohlantirish chiqadi",
            "Dastur davom etadi"
          ],
          "answer": 1,
          "explain": "final o'zgaruvchiga ikkinchi marta qiymat berib bo'lmaydi — kompilyator xato beradi."
        }
      ]
    },
    {
      "id": 3,
      "title": "Shartlar va tsikllar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Shartlar dasturga qaror qabul qilish imkonini beradi: <code>if</code>, <code>else if</code> va <code>else</code>. Dart 3'da <code>switch</code> ifodasi qiymat qaytaradi, shuning uchun uni to'g'ridan-to'g'ri o'zgaruvchiga bog'lash mumkin."
        },
        {
          "type": "code",
          "title": "shartlar.dart",
          "code": "void main() {\n  final ball = 85;\n\n  if (ball >= 90) {\n    print('A');\n  } else if (ball >= 80) {\n    print('B');\n  } else {\n    print('C');\n  }\n\n  final daraja = switch (ball) {\n    >= 90 => 'A',\n    >= 80 => 'B',\n    _ => 'C',\n  };\n  print('Daraja: $daraja');\n}",
          "output": "B\nDaraja: B"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "if shartida == ishlatiladi",
          "html": "Taqqoslash uchun <code>==</code> yoziladi. Bitta <code>=</code> qiymat berish operatori, shuning uchun <code>if (ball = 90)</code> xato beradi. Mantiqiy shartlarda <code>&amp;&amp;</code>, <code>||</code> va <code>!</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "tsikllar.dart",
          "code": "void main() {\n  for (var i = 1; i <= 3; i++) {\n    print('Qadam $i');\n  }\n\n  var son = 3;\n  while (son > 0) {\n    print('Qoldi $son');\n    son--;\n  }\n\n  final ismlar = ['Ali', 'Aziza', 'Bek'];\n  for (final ism in ismlar) {\n    print(ism);\n  }\n}",
          "output": "Qadam 1\nQadam 2\nQadam 3\nQoldi 3\nQoldi 2\nQoldi 1\nAli\nAziza\nBek"
        },
        {
          "type": "table",
          "head": [
            "Tsikl",
            "Qachon qulay"
          ],
          "rows": [
            [
              "<code>for</code>",
              "Takrorlar soni ma'lum bo'lganda"
            ],
            [
              "<code>while</code>",
              "Shart bajarilguncha davom etishi kerak bo'lsa"
            ],
            [
              "<code>do-while</code>",
              "Tana kamida bir marta bajarilishi kerak bo'lsa"
            ],
            [
              "<code>for-in</code>",
              "Ro'yxat yoki to'plam elementlarini ko'rish uchun"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "Dart 3'dagi switch ifodasi nima qiladi?",
          "options": [
            "Har doim void qaytaradi",
            "Faqat print bajaradi",
            "Mos holat bo'yicha bitta qiymat qaytaradi",
            "Tsikl hosil qiladi"
          ],
          "answer": 2,
          "explain": "switch ifodasi tanlangan holat natijasini qaytaradi, shuning uchun uni o'zgaruvchiga bog'lash mumkin."
        },
        {
          "q": "for-in tsikli nima ustida yuradi?",
          "options": [
            "Faqat sonlar ustida",
            "Faqat fayl nomlari ustida",
            "Sinf nomlari ustida",
            "Kolleksiya elementlari ustida"
          ],
          "answer": 3,
          "explain": "for (final ism in ismlar) kolleksiyaning har bir elementini navbat bilan oladi."
        },
        {
          "q": "while (son > 0) tsiklida son dastlab 0 bo'lsa nima bo'ladi?",
          "options": [
            "Tana umuman bajarilmaydi",
            "Tana bir marta bajariladi",
            "Tsikl cheksiz davom etadi",
            "Kompilyatsiya xatosi chiqadi"
          ],
          "answer": 0,
          "explain": "while shartni birinchi tekshiradi; shart yolg'on bo'lsa, tana bir marta ham bajarilmaydi."
        }
      ]
    },
    {
      "id": 4,
      "title": "Funksiyalar va parametrlar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya — nomlangan kod bloki. U parametrlar qabul qiladi va <code>return</code> bilan natija qaytaradi. Dart'da parametrlarning uch turi bor: majburiy positional, ixtiyoriy positional (<code>[]</code>) va nomlangan (<code>{}</code>)."
        },
        {
          "type": "code",
          "title": "funksiya.dart",
          "code": "String salomlash(String ism, [String til = 'uz']) {\n  return til == 'uz' ? 'Salom, $ism!' : 'Hello, $ism!';\n}\n\nvoid main() {\n  print(salomlash('Aziza'));\n  print(salomlash('Bek', 'en'));\n}",
          "output": "Salom, Aziza!\nHello, Bek!"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Turi",
            "Misol"
          ],
          "rows": [
            [
              "<code>String ism</code>",
              "Majburiy positional",
              "<code>salomlash('Ali')</code>"
            ],
            [
              "<code>[String til]</code>",
              "Ixtiyoriy positional",
              "<code>salomlash('Ali', 'en')</code>"
            ],
            [
              "<code>{int bonus = 5}</code>",
              "Ixtiyoriy nomlangan",
              "<code>hisob(ball: 90)</code>"
            ],
            [
              "<code>{required int ball}</code>",
              "Majburiy nomlangan",
              "<code>hisob(ball: 90)</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "nomlangan.dart",
          "code": "String hisobot(String ism, {required int ball, int bonus = 5}) {\n  return '$ism: ${ball + bonus} ball';\n}\n\nvoid main() {\n  print(hisobot('Aziza', ball: 90));\n  print(hisobot('Bek', ball: 80, bonus: 10));\n}",
          "output": "Aziza: 95 ball\nBek: 90 ball"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Qisqa funksiya",
          "html": "Bitta ifodadan iborat funksiyani <code>=&gt;</code> bilan qisqartirish mumkin: <code>int kvadrat(int n) =&gt; n * n;</code> Bu <code>return</code> bilan bir xil natija beradi."
        }
      ],
      "quiz": [
        {
          "q": "Ixtiyoriy positional parametr qaysi qavs ichida yoziladi?",
          "options": [
            "()",
            "[]",
            "{}",
            "<>"
          ],
          "answer": 1,
          "explain": "[ ] ixtiyoriy positional parametrlarni, { } esa nomlangan parametrlarni bildiradi."
        },
        {
          "q": "{required int ball} parametri qanday parametr hisoblanadi?",
          "options": [
            "Ixtiyoriy positional",
            "Majburiy positional",
            "Majburiy nomlangan",
            "Ixtiyoriy nomlangan"
          ],
          "answer": 2,
          "explain": "Jingalak qavs nomlangan parametrni, required esa uni majburiy qiladi."
        },
        {
          "q": "int bonus = 5 parametri chaqiruvda berilmasa, qiymati nechaga teng bo'ladi?",
          "options": [
            "0",
            "null",
            "Kompilyatsiya xatosi",
            "5"
          ],
          "answer": 3,
          "explain": "Nomlangan parametr berilmasa, uning standart qiymati (5) ishlatiladi."
        }
      ]
    },
    {
      "id": 5,
      "title": "Ro'yxatlar, to'plamlar va xaritalar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Dart'da ma'lumotlar to'plamini saqlash uchun uchta asosiy tur bor: <b>List</b> (tartibli ro'yxat), <b>Set</b> (takrorlanmaydigan qiymatlar) va <b>Map</b> (kalit-qiymat juftliklari). Uchalasi ham kuchli metodlarga ega."
        },
        {
          "type": "code",
          "title": "royxat.dart",
          "code": "void main() {\n  final ismlar = <String>['Ali', 'Aziza', 'Bek'];\n  ismlar.add('Dilnoza');\n\n  print(ismlar);\n  print(ismlar.length);\n  print(ismlar[0]);\n  print(ismlar.where((ism) => ism.startsWith('A')).toList());\n}",
          "output": "[Ali, Aziza, Bek, Dilnoza]\n4\nAli\n[Ali, Aziza]"
        },
        {
          "type": "table",
          "head": [
            "Tur",
            "Xususiyati",
            "Misol"
          ],
          "rows": [
            [
              "<code>List</code>",
              "Tartibli, indeks bo'yicha murojaat",
              "<code>[1, 2, 3]</code>"
            ],
            [
              "<code>Set</code>",
              "Takrorlanmaydigan elementlar",
              "<code>{1, 2, 2}</code>"
            ],
            [
              "<code>Map</code>",
              "Kalit orqali qiymat",
              "<code>{'olma': 5000}</code>"
            ],
            [
              "<code>where()</code>",
              "Shartga mos elementlarni tanlaydi",
              "<code>ismlar.where(...)</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "set-map.dart",
          "code": "void main() {\n  final takror = <int>{1, 2, 2, 3, 3};\n  print(takror);\n  print(takror.contains(2));\n\n  final narxlar = <String, int>{'olma': 5000, 'nok': 7000};\n  narxlar['uzum'] = 6000;\n  print(narxlar);\n  print(narxlar['nok']);\n}",
          "output": "{1, 2, 3}\ntrue\n{olma: 5000, nok: 7000, uzum: 6000}\n7000"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "final kolleksiya o'zgarmas emas",
          "html": "<code>final ismlar = &lt;String&gt;[];</code> faqat o'zgaruvchini boshqa ro'yxatga bog'lashni taqiqlaydi. Ro'yxat ichiga <code>add()</code> bilan element qo'shish mumkin. Butunlay o'zgarmas ro'yxat uchun <code>const []</code> yoki <code>List.unmodifiable()</code> ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "Indeks bo'yicha murojaat qilinadigan tartibli kolleksiya qaysi?",
          "options": [
            "List",
            "Set",
            "Map",
            "Future"
          ],
          "answer": 0,
          "explain": "List tartibli kolleksiya bo'lib, elementlarga 0 dan boshlanuvchi indeks orqali murojaat qilinadi."
        },
        {
          "q": "Takrorlanmaydigan qiymatlarni saqlaydigan kolleksiya qaysi?",
          "options": [
            "List",
            "Set",
            "Map",
            "String"
          ],
          "answer": 1,
          "explain": "Set bir xil qiymatlarni ikkinchi marta saqlamaydi."
        },
        {
          "q": "narxlar['nok'] ifodasi nima qaytaradi?",
          "options": [
            "Kalitlar ro'yxatini",
            "Map uzunligini",
            "nok kalitiga mos qiymatni",
            "Har doim null ni"
          ],
          "answer": 2,
          "explain": "Map'da kvadrat qavs ichidagi kalit orqali unga mos qiymat olinadi."
        }
      ]
    },
    {
      "id": 6,
      "title": "Sinflar, konstruktorlar va getterlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Sinf (class) — obyektning holati va xatti-harakatini birlashtiruvchi shablon. Maydonlar ma'lumotni, metodlar amallarni saqlaydi. Konstruktor obyekt yaratilganda ishga tushadi, getter esa hisoblangan qiymatni xossa kabi taqdim etadi."
        },
        {
          "type": "code",
          "title": "sinf.dart",
          "code": "class Talaba {\n  final String ism;\n  int ball;\n\n  Talaba(this.ism, {this.ball = 0});\n\n  Talaba.yangi(this.ism) : ball = 0;\n\n  bool get otdi => ball >= 60;\n\n  String get daraja => otdi ? 'muvaffaqiyatli' : 'qayta topshiradi';\n\n  @override\n  String toString() => '$ism ($ball)';\n}\n\nvoid main() {\n  final a = Talaba('Aziza', ball: 92);\n  final b = Talaba.yangi('Bek');\n\n  print(a);\n  print(a.otdi);\n  print(a.daraja);\n  print(b);\n  print(b.otdi);\n}",
          "output": "Aziza (92)\ntrue\nmuvaffaqiyatli\nBek (0)\nfalse"
        },
        {
          "type": "table",
          "head": [
            "Konstruktor",
            "Yozilishi",
            "Vazifasi"
          ],
          "rows": [
            [
              "Asosiy",
              "<code>Talaba(this.ism)</code>",
              "Obyekt yaratadi"
            ],
            [
              "Nomlangan",
              "<code>Talaba.yangi(this.ism)</code>",
              "Muqobil yaratish usuli"
            ],
            [
              "Nomlangan parametrli",
              "<code>Talaba({this.ball = 0})</code>",
              "Qiymatlarni nom bilan oladi"
            ],
            [
              "Getter",
              "<code>bool get otdi =&gt; ...</code>",
              "Hisoblangan qiymatni beradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "hisob.dart",
          "code": "class Hisob {\n  int balans;\n\n  Hisob({this.balans = 0});\n\n  void qosh(int summa) {\n    if (summa <= 0) return;\n    balans += summa;\n  }\n\n  String get holat => balans > 0 ? 'faol' : 'bosh';\n}\n\nvoid main() {\n  final hisob = Hisob(balans: 100);\n  hisob.qosh(50);\n  print(hisob.balans);\n  print(hisob.holat);\n}",
          "output": "150\nfaol"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Getter va setter",
          "html": "Getter <code>get</code> kalit so'zi bilan, setter <code>set</code> bilan e'lon qilinadi. Ular maydonga to'g'ridan-to'g'ri murojaat qilish o'rniga tekshiruv yoki hisob-kitob qo'shish imkonini beradi."
        }
      ],
      "quiz": [
        {
          "q": "Dart'da konstruktor qanday nomlanadi?",
          "options": [
            "Istalgan nom bilan",
            "Har doim main",
            "Har doim get",
            "Sinf nomi bilan bir xil"
          ],
          "answer": 3,
          "explain": "Asosiy konstruktor sinf nomi bilan bir xil bo'ladi; nomlangan konstruktor sinf nomi va nuqta bilan yoziladi."
        },
        {
          "q": "Hisob({this.balans = 0}) qanday parametrni bildiradi?",
          "options": [
            "Ixtiyoriy nomlangan",
            "Majburiy positional",
            "Faqat static maydon",
            "Getter"
          ],
          "answer": 0,
          "explain": "Jingalak qavs nomlangan parametrni, standart qiymat esa uning ixtiyoriyligini bildiradi."
        },
        {
          "q": "Getter qaysi yozuvda to'g'ri e'lon qilingan?",
          "options": [
            "int yosh() => 15;",
            "int get yosh => 15;",
            "get int yosh = 15;",
            "int get(yosh) => 15;"
          ],
          "answer": 1,
          "explain": "Getter tur, get kalit so'zi va nom bilan yoziladi: int get yosh => 15;"
        }
      ]
    },
    {
      "id": 7,
      "title": "Meros, mixinlar va abstrakt sinflar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Meros (inheritance) umumiy xatti-harakatni ota sinfdan olish imkonini beradi. <b>Abstrakt sinf</b> to'liq bo'lmagan shablon bo'lib, undan obyekt yaratilmaydi. <b>Mixin</b> esa bir nechta sinfga bir xil qobiliyatni qo'shishning moslashuvchan usuli."
        },
        {
          "type": "code",
          "title": "meros.dart",
          "code": "abstract class Hayvon {\n  String get ovozi;\n  String gapir() => 'Men $ovozi deyman';\n}\n\nmixin Suzadi {\n  String suzish() => 'suzayapti';\n}\n\nclass Kuchuk extends Hayvon with Suzadi {\n  @override\n  String get ovozi => 'vov';\n}\n\nvoid main() {\n  final kuchuk = Kuchuk();\n  print(kuchuk.gapir());\n  print(kuchuk.suzish());\n  print(kuchuk is Hayvon);\n}",
          "output": "Men vov deyman\nsuzayapti\ntrue"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Kalit so'z",
            "Vazifasi"
          ],
          "rows": [
            [
              "Meros",
              "<code>extends</code>",
              "Ota sinfning maydon va metodlarini oladi"
            ],
            [
              "Mixin",
              "<code>with</code>",
              "Qo'shimcha qobiliyat qo'shadi"
            ],
            [
              "Interfeys",
              "<code>implements</code>",
              "Metodlarni qayta yozishni talab qiladi"
            ],
            [
              "Abstrakt sinf",
              "<code>abstract class</code>",
              "O'zi obyekt yaratmaydi, shablon beradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "super.dart",
          "code": "class Transport {\n  final String nom;\n\n  Transport(this.nom);\n\n  String harakat() => '$nom harakatlanadi';\n}\n\nclass Velosiped extends Transport {\n  Velosiped() : super('Velosiped');\n\n  @override\n  String harakat() => '${super.harakat()} — pedal bilan';\n}\n\nvoid main() {\n  print(Velosiped().harakat());\n}",
          "output": "Velosiped harakatlanadi — pedal bilan"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Bitta extends, ko'p mixin",
          "html": "Dart'da sinf faqat bitta sinfdan meros olishi mumkin, lekin bir nechta mixinni <code>with A, B</code> ko'rinishida qo'shishi mumkin. Mixinlar tartibi muhim: keyingi mixin avvalgisining metodini qayta yozishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Abstrakt sinfdan to'g'ridan-to'g'ri obyekt yaratish mumkinmi?",
          "options": [
            "Ha, har doim",
            "Faqat main ichida",
            "Yo'q, avval meros oluvchi sinf kerak",
            "Faqat mixin bilan"
          ],
          "answer": 2,
          "explain": "Abstrakt sinf to'liq bo'lmagan shablon; undan meros olgan aniq sinf yaratiladi."
        },
        {
          "q": "Mixin qaysi kalit so'z bilan sinfga qo'shiladi?",
          "options": [
            "extends",
            "implements",
            "mixin",
            "with"
          ],
          "answer": 3,
          "explain": "class Kuchuk extends Hayvon with Suzadi; yozuvida with mixinni qo'shadi."
        },
        {
          "q": "super.harakat() chaqiruvi nima qiladi?",
          "options": [
            "Ota sinfning metodini chaqiradi",
            "Yangi metod yaratadi",
            "Metodni o'chiradi",
            "Faqat getter qaytaradi"
          ],
          "answer": 0,
          "explain": "super ota sinfga murojaat qiladi, shuning uchun uning harakat() metodi bajariladi."
        }
      ]
    },
    {
      "id": 8,
      "title": "Null safety va nullable turlar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Dart'da barcha turlar sukut bo'yicha <b>null bo'lmaydi</b>. Bu xatolarning katta qismini kompilyatsiya vaqtida ushlaydi. Qiymat yo'q bo'lishi mumkin bo'lsa, turga <code>?</code> qo'shiladi: <code>String?</code>."
        },
        {
          "type": "code",
          "title": "nullable.dart",
          "code": "void main() {\n  String? ism;\n  print(ism);\n  print(ism?.length);\n  print(ism ?? 'Mehmon');\n\n  ism = 'Aziza';\n  print(ism.length);\n  print(ism?.toUpperCase());\n}",
          "output": "null\nnull\nMehmon\n5\nAZIZA"
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
              "<code>String?</code>",
              "Null bo'lishi mumkin",
              "<code>String? xabar;</code>"
            ],
            [
              "<code>?.</code>",
              "Null bo'lsa, amal bajarilmaydi",
              "<code>ism?.length</code>"
            ],
            [
              "<code>!</code>",
              "Null emasligini tasdiqlaydi",
              "<code>ism!</code>"
            ],
            [
              "<code>??</code>",
              "Chap null bo'lsa, o'ng qiymat",
              "<code>ism ?? 'Mehmon'</code>"
            ],
            [
              "<code>??=</code>",
              "Faqat null bo'lsa qiymat beradi",
              "<code>ism ??= 'Ali';</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "oqim.dart",
          "code": "void main() {\n  final Map<String, String> sozlamalar = {'til': 'uz'};\n  final til = sozlamalar['til'];\n  print(til ?? 'til tanlanmagan');\n  print(til!.toUpperCase());\n\n  String? xabar;\n  if (xabar != null) {\n    print(xabar.length);\n  } else {\n    print('Xabar kelmadi');\n  }\n}",
          "output": "uz\nUZ\nXabar kelmadi"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "! ni ehtiyotkorlik bilan ishlating",
          "html": "<code>!</code> operatori «bu qiymat null emas» deb kompilyatorga va'da beradi. Agar va'da noto'g'ri bo'lsa, dastur ish vaqtida yiqiladi. Imkon bo'lsa, <code>if</code> tekshiruvi yoki <code>??</code> dan foydalaning. Kechroq tayinlanadigan maydon uchun <code>late</code> ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "Null bo'lishi mumkin bo'lgan matn turi qanday yoziladi?",
          "options": [
            "String",
            "String?",
            "String!",
            "nullable String"
          ],
          "answer": 1,
          "explain": "Tur oxiridagi ? nullable ekanini bildiradi: String? null yoki String qiymat olishi mumkin."
        },
        {
          "q": "ism null bo'lganda ism?.length ifodasi nima qaytaradi?",
          "options": [
            "0",
            "Xato chiqaradi",
            "null",
            "Bo'sh matn"
          ],
          "answer": 2,
          "explain": "?., chaqiruvdan oldin null tekshiradi va null bo'lsa, natija ham null bo'ladi."
        },
        {
          "q": "?? operatori qanday ishlaydi?",
          "options": [
            "Ikkala tomonni qo'shadi",
            "Null ni taqiqlaydi",
            "Turni avtomatik aylantiradi",
            "Chap tomon null bo'lsa, o'ng qiymatni beradi"
          ],
          "answer": 3,
          "explain": "a ?? b ifodasi a null bo'lsa b ni, aks holda a ni qaytaradi."
        }
      ]
    },
    {
      "id": 9,
      "title": "Asinxron Dart: Future va Stream",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ba'zi ishlar darhol tugamaydi: tarmoq so'rovi, faylni o'qish yoki taymer. Asinxron kod shu ishlarni kutish imkonini beradi, lekin dasturning qolgan qismini bloklamaydi. Dart'da bitta kelajak natija uchun <b>Future</b>, ketma-ket qiymatlar oqimi uchun <b>Stream</b> ishlatiladi."
        },
        {
          "type": "code",
          "title": "future.dart",
          "code": "Future<String> malumotOlish() async {\n  await Future<void>.delayed(const Duration(milliseconds: 100));\n  return 'Tayyor';\n}\n\nFuture<void> main() async {\n  print('Boshladik');\n  final natija = await malumotOlish();\n  print(natija);\n  print('Tugadi');\n}",
          "output": "Boshladik\nTayyor\nTugadi"
        },
        {
          "type": "table",
          "head": [
            "Tushuncha",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>Future&lt;T&gt;</code>",
              "Kelajakda bitta natija beradi"
            ],
            [
              "<code>Stream&lt;T&gt;</code>",
              "Ketma-ket bir nechta qiymat beradi"
            ],
            [
              "<code>async</code>",
              "Funksiya ichida await ishlatishga ruxsat beradi"
            ],
            [
              "<code>await</code>",
              "Future tugashini kutadi va natijasini qaytaradi"
            ],
            [
              "<code>async*</code> / <code>yield</code>",
              "Stream uchun qiymat chiqaradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "stream.dart",
          "code": "Stream<int> sanoq() async* {\n  for (var i = 1; i <= 3; i++) {\n    yield i;\n  }\n}\n\nFuture<void> main() async {\n  await for (final son in sanoq()) {\n    print('Son: $son');\n  }\n  print('Sanoq tugadi');\n}",
          "output": "Son: 1\nSon: 2\nSon: 3\nSanoq tugadi"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "await faqat async ichida",
          "html": "<code>await</code> faqat <code>async</code> funksiya ichida ishlatiladi. Dasturning kirish nuqtasi ham asinxron bo'lishi kerak bo'lsa, <code>Future&lt;void&gt; main() async</code> yoziladi."
        }
      ],
      "quiz": [
        {
          "q": "Future nimani ifodalaydi?",
          "options": [
            "Bitta kelajakdagi natijani",
            "Bir nechta kelajak qiymatini",
            "Sinxron funksiyani",
            "Fayl turini"
          ],
          "answer": 0,
          "explain": "Future bitta natija yoki xato bilan yakunlanadigan kelajakdagi hisobni ifodalaydi."
        },
        {
          "q": "await qayerda ishlatiladi?",
          "options": [
            "Har qanday funksiyada",
            "Faqat async funksiya ichida",
            "Faqat main tashqarisida",
            "Faqat class ichida"
          ],
          "answer": 1,
          "explain": "await faqat async deb belgilangan funksiya tanasida ishlatiladi."
        },
        {
          "q": "Stream qiymatlarini ketma-ket o'qish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "for-in faqat",
            "while",
            "await for",
            "switch"
          ],
          "answer": 2,
          "explain": "await for oqim tugaguncha har bir yangi qiymatni navbat bilan oladi."
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
          "html": "Xatolar har qanday dasturda bo'ladi. Dart'da ularni <code>try</code>, <code>on</code>, <code>catch</code> va <code>finally</code> bilan boshqarish mumkin. Fayllar bilan ishlash uchun <code>dart:io</code> kutubxonasidagi <code>File</code> sinfi ishlatiladi."
        },
        {
          "type": "code",
          "title": "xato.dart",
          "code": "class YaroqsizBall implements Exception {\n  final String xabar;\n  YaroqsizBall(this.xabar);\n\n  @override\n  String toString() => 'YaroqsizBall: $xabar';\n}\n\nint bahoTekshir(int ball) {\n  if (ball < 0 || ball > 100) {\n    throw YaroqsizBall('$ball oraliqdan tashqarida');\n  }\n  return ball;\n}\n\nvoid main() {\n  try {\n    print(bahoTekshir(120));\n  } on YaroqsizBall catch (xato) {\n    print(xato);\n  } finally {\n    print('Tekshiruv tugadi');\n  }\n}",
          "output": "YaroqsizBall: 120 oraliqdan tashqarida\nTekshiruv tugadi"
        },
        {
          "type": "table",
          "head": [
            "Kalit so'z",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>try</code>",
              "Xato bo'lishi mumkin bo'lgan kodni o'raydi"
            ],
            [
              "<code>on Tur</code>",
              "Faqat ko'rsatilgan turdagi xatoni ushlaydi"
            ],
            [
              "<code>catch (xato)</code>",
              "Xato obyektini o'zgaruvchiga oladi"
            ],
            [
              "<code>finally</code>",
              "Xato bo'lsa ham bajariladi"
            ],
            [
              "<code>rethrow</code>",
              "Xatoni yuqoriga qayta uzatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "fayl.dart",
          "code": "import 'dart:io';\n\nFuture<void> main() async {\n  final fayl = File('${Directory.systemTemp.path}/noldan_demo.txt');\n  await fayl.writeAsString('Salom, fayl!\\n');\n  final matn = await fayl.readAsString();\n  print(matn.trim());\n  print(await fayl.exists());\n}",
          "output": "Salom, fayl!\ntrue"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "dart:io har joyda mavjud emas",
          "html": "<code>dart:io</code> server, konsol va desktop dasturlarida ishlaydi. Brauzerdagi Flutter Web'da fayl tizimiga bevosita kirish cheklangan, shuning uchun platformaga mos paketlar ishlatiladi. Fayl yo'lini har doim tekshiring va xatoni ushlang."
        }
      ],
      "quiz": [
        {
          "q": "finally bloki qachon bajariladi?",
          "options": [
            "Faqat xato bo'lganda",
            "Faqat muvaffaqiyatli tugaganda",
            "Hech qachon",
            "Har qanday holatda"
          ],
          "answer": 3,
          "explain": "finally try bloki qanday tugashidan qat'i nazar bajariladi — tozalash ishlari uchun qulay."
        },
        {
          "q": "on FormatException catch (xato) nimani ushlaydi?",
          "options": [
            "Faqat FormatException turini",
            "Barcha xatolarni",
            "Faqat fayl xatolarini",
            "Hech narsani"
          ],
          "answer": 0,
          "explain": "on tur bo'yicha filtrlaydi, shuning uchun faqat FormatException ushlanadi."
        },
        {
          "q": "throw kalit so'zi nima qiladi?",
          "options": [
            "Xatoni yashiradi",
            "Xato hosil qiladi va uzatadi",
            "Tsiklni to'xtatadi",
            "Fayl ochadi"
          ],
          "answer": 1,
          "explain": "throw xato obyektini hosil qilib, uni chaqiruvchi tomonga uzatadi."
        }
      ]
    },
    {
      "id": 11,
      "title": "Paketlar, pubspec va JSON",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Dart loyihasining yuragi — <code>pubspec.yaml</code> fayli. Unda loyiha nomi, Dart SDK talabi va tashqi paketlar yoziladi. <code>dart pub get</code> paketlarni yuklab oladi, <code>dart pub add</code> esa yangi bog'liqlik qo'shadi. JSON bilan ishlash uchun <code>dart:convert</code> yetarli."
        },
        {
          "type": "code",
          "title": "pubspec.yaml",
          "code": "name: vazifalar\ndescription: Noldan mini loyiha\nenvironment:\n  sdk: ^3.5.0\ndependencies:\n  path: ^1.9.0",
          "output": "Loyiha: vazifalar\nSDK: ^3.5.0\nBog'liqlik: path ^1.9.0"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Paket qo'shish",
          "html": "Yangi paketni qo'lda yozish shart emas: <code>dart pub add http</code> buyrug'i <code>pubspec.yaml</code> ga bog'liqlikni qo'shadi va uni yuklab oladi. O'rnatilgan versiyalar <code>pubspec.lock</code> faylida qayd etiladi."
        },
        {
          "type": "code",
          "title": "json.dart",
          "code": "import 'dart:convert';\n\nvoid main() {\n  final matn = '{\"ism\":\"Aziza\",\"ball\":92}';\n  final talaba = jsonDecode(matn) as Map<String, dynamic>;\n  print(talaba['ism']);\n  print(talaba['ball']);\n\n  final qayta = jsonEncode({'ism': 'Bek', 'ball': 85});\n  print(qayta);\n}",
          "output": "Aziza\n92\n{\"ism\":\"Bek\",\"ball\":85}"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>dart pub get</code>",
              "Bog'liqliklarni yuklab oladi"
            ],
            [
              "<code>dart pub add nom</code>",
              "Yangi paket qo'shadi"
            ],
            [
              "<code>jsonDecode()</code>",
              "JSON matnini Dart qiymatiga aylantiradi"
            ],
            [
              "<code>jsonEncode()</code>",
              "Dart qiymatini JSON matniga aylantiradi"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "pubspec.yaml faylida nima e'lon qilinadi?",
          "options": [
            "Faqat Dart kodi",
            "Test natijalari",
            "Loyiha nomi, SDK talabi va bog'liqliklar",
            "Kompilyatsiya qilingan fayl"
          ],
          "answer": 2,
          "explain": "pubspec.yaml loyiha metama'lumoti, SDK cheklovi va paket bog'liqliklarini saqlaydi."
        },
        {
          "q": "JSON matnini Dart obyektiga aylantirish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "jsonEncode()",
            "jsonParse()",
            "String()",
            "jsonDecode()"
          ],
          "answer": 3,
          "explain": "jsonDecode() JSON matnini tahlil qilib, Map yoki List qaytaradi."
        },
        {
          "q": "dart pub add http buyrug'i nima qiladi?",
          "options": [
            "http paketini loyihaga qo'shadi",
            "Faylni o'chiradi",
            "Serverni ishga tushiradi",
            "Test yozadi"
          ],
          "answer": 0,
          "explain": "pub add paketni pubspec.yaml ga qo'shadi va yuklab oladi."
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
          "html": "Endi o'rganganlarimizni birlashtiramiz: sinflar, konstruktorlar, getterlar, ro'yxatlar va xatolar bilan ishlash. Yaratadigan dasturimiz vazifa qo'shadi, bajarilganini belgilaydi va qolganlarini sanaydi."
        },
        {
          "type": "code",
          "title": "vazifalar.dart",
          "code": "class Vazifa {\n  final String nom;\n  bool bajarildi;\n\n  Vazifa(this.nom, {this.bajarildi = false});\n\n  @override\n  String toString() => '${bajarildi ? '[x]' : '[ ]'} $nom';\n}\n\nclass VazifaRoyxati {\n  final List<Vazifa> _vazifalar = [];\n\n  void qosh(String nom) {\n    if (nom.trim().isEmpty) {\n      throw ArgumentError('Nom kiritilishi shart');\n    }\n    _vazifalar.add(Vazifa(nom.trim()));\n  }\n\n  void bajar(int indeks) {\n    _vazifalar[indeks].bajarildi = true;\n  }\n\n  List<Vazifa> get bajarilmaganlar =>\n      _vazifalar.where((v) => !v.bajarildi).toList();\n\n  void chop() {\n    for (var i = 0; i < _vazifalar.length; i++) {\n      print('${i + 1}. ${_vazifalar[i]}');\n    }\n  }\n}\n\nvoid main() {\n  final royxat = VazifaRoyxati();\n  royxat.qosh('Dart darslarini takrorlash');\n  royxat.qosh('Mashq yozish');\n  royxat.qosh('Loyihani tugatish');\n\n  royxat.bajar(0);\n  royxat.chop();\n  print('Qoldi: ${royxat.bajarilmaganlar.length}');\n}",
          "output": "1. [x] Dart darslarini takrorlash\n2. [ ] Mashq yozish\n3. [ ] Loyihani tugatish\nQoldi: 2"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Loyihani kengaytiring",
          "html": "Keyingi qadam sifatida vazifalarni JSON ko'rinishida faylga saqlash, <code>enum</code> bilan holatlarni ajratish yoki oddiy menyu qo'shish mumkin. Har bir qo'shimcha — yangi amaliyot."
        },
        {
          "type": "code",
          "title": "json-eksport.dart",
          "code": "import 'dart:convert';\n\nvoid main() {\n  final vazifalar = [\n    {'nom': 'Dars', 'bajarildi': true},\n    {'nom': 'Mashq', 'bajarildi': false},\n  ];\n\n  final matn = jsonEncode(vazifalar);\n  print(matn);\n\n  final qayta = jsonDecode(matn) as List<dynamic>;\n  print('Vazifalar soni: ${qayta.length}');\n}",
          "output": "[{\"nom\":\"Dars\",\"bajarildi\":true},{\"nom\":\"Mashq\",\"bajarildi\":false}]\nVazifalar soni: 2"
        },
        {
          "type": "ul",
          "items": [
            "Ma'lumot modeli: <code>Vazifa</code> sinfi va <code>List&lt;Vazifa&gt;</code>.",
            "Xatti-harakat: <code>qosh()</code>, <code>bajar()</code> va <code>chop()</code> metodlari.",
            "Tekshiruv: bo'sh nom uchun <code>ArgumentError</code> uzatiladi.",
            "Hisobot: getter orqali bajarilmagan vazifalar olinadi."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Mini loyihada vazifalar qayerda saqlanadi?",
          "options": [
            "JSON faylda",
            "Xotiradagi List ichida",
            "Map kalitida",
            "Sinf nomida"
          ],
          "answer": 1,
          "explain": "VazifaRoyxati sinfi ichidagi _vazifalar ro'yxati barcha vazifalarni xotirada saqlaydi."
        },
        {
          "q": "bajarilmaganlar getteri nima qaytaradi?",
          "options": [
            "Barcha vazifalarni",
            "Bajarilganlar sonini",
            "Bajarilmagan vazifalar ro'yxatini",
            "O'chirilgan vazifalarni"
          ],
          "answer": 2,
          "explain": "where((v) => !v.bajarildi) faqat bajarilmagan vazifalarni tanlaydi."
        },
        {
          "q": "throw ArgumentError qaysi holatda ishga tushadi?",
          "options": [
            "Vazifa bajarilganda",
            "Ro'yxat chop etilganda",
            "Dastur tugaganda",
            "Bo'sh nom qo'shilganda"
          ],
          "answer": 3,
          "explain": "qosh() metodi nom.trim().isEmpty bo'lganda ArgumentError uzatadi."
        }
      ]
    },
    {
      "id": 13,
      "title": "Recordlar: bir nechta qiymatni qaytarish",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Dart 3'da <b>record</b> bir nechta qiymatni bitta yengil obyektga jamlaydi. Oddiy sinfdan farqli, unga nom, konstruktor va metodlar yozish shart emas. Record ayniqsa funksiyadan ikki yoki uchta natijani birga qaytarish kerak bo'lganda qulay."
        },
        {
          "type": "code",
          "title": "record.dart",
          "code": "(int, String) talaba() {\n  return (92, 'Aziza');\n}\n\nvoid main() {\n  final natija = talaba();\n  print(natija.$1);\n  print(natija.$2);\n\n  final (ball, ism) = natija;\n  print('$ism: $ball ball');\n}",
          "output": "92\nAziza\nAziza: 92 ball"
        },
        {
          "type": "ul",
          "items": [
            "Pozitsion record maydonlariga <code>$1</code>, <code>$2</code> kabi nomlar bilan murojaat qilinadi.",
            "Nomlangan record maydonlari <code>(ism: 'Ali', ball: 90)</code> ko'rinishida yoziladi va <code>r.ism</code> orqali olinadi.",
            "Recordni <code>final (ball, ism) = natija;</code> bilan qismlarga ajratish destructuring deyiladi.",
            "Recordlar o'zgarmas: yaratilgandan keyin maydon qiymatini almashtirib bo'lmaydi."
          ]
        },
        {
          "type": "code",
          "title": "nomlangan.dart",
          "code": "({String ism, int ball}) natija() {\n  return (ism: 'Bek', ball: 85);\n}\n\nvoid main() {\n  final r = natija();\n  print(r.ism);\n  print(r.ball);\n  print((1, 'a') == (1, 'a'));\n}",
          "output": "Bek\n85\ntrue"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Record yoki sinf?",
          "html": "Record — faqat ma'lumot tashuvchi yengil qiymat. Agar maydonlarni tekshirish, o'zgartirish yoki metodlar kerak bo'lsa, oddiy sinf yozish to'g'riroq. Recordlarning tengligi maydonlar bo'yicha taqqoslanadi, shuning uchun <code>(1, 'a') == (1, 'a')</code> rost qaytaradi."
        }
      ],
      "quiz": [
        {
          "q": "Pozitsion recordning birinchi maydoni qaysi yozuv bilan olinadi?",
          "options": [
            "r.$1",
            "r.first",
            "r[0]",
            "r.1"
          ],
          "answer": 0,
          "explain": "Pozitsion record maydonlari $1, $2, $3 ko'rinishidagi maxsus nomlar bilan olinadi. r.first Iterable uchun ishlaydi."
        },
        {
          "q": "({String ism, int ball}) turidagi recordda ball maydoni qanday o'qiladi?",
          "options": [
            "r.$2",
            "r.ball",
            "r[1]",
            "r.get('ball')"
          ],
          "answer": 1,
          "explain": "Nomlangan record maydoniga uning nomi orqali murojaat qilinadi: r.ball."
        },
        {
          "q": "Recordlar tengligi qanday aniqlanadi?",
          "options": [
            "Faqat obyekt manzili bo'yicha",
            "Faqat toString() orqali",
            "Maydon qiymatlari bo'yicha",
            "Recordlarni taqqoslab bo'lmaydi"
          ],
          "answer": 2,
          "explain": "Bir xil turdagi recordlar maydonlarining qiymatlari bo'yicha taqqoslanadi, shuning uchun (1, 'a') == (1, 'a') rost."
        }
      ]
    },
    {
      "id": 14,
      "title": "Pattern matching: switch va destructuring",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Dart 3'da <b>pattern matching</b> qiymatning shaklini tekshirib, uning qismlarini alohida o'zgaruvchilarga ajratish imkonini beradi. Bu <code>switch</code> ifodasi, obyekt patternlari, ro'yxat patternlari va <code>when</code> qo'shimcha sharti bilan ishlaydi."
        },
        {
          "type": "code",
          "title": "switch.dart",
          "code": "String baho(int ball) {\n  return switch (ball) {\n    >= 90 => 'A',\n    >= 80 => 'B',\n    >= 60 => 'C',\n    _ => 'D',\n  };\n}\n\nvoid main() {\n  for (final ball in [95, 82, 61, 40]) {\n    final daraja = baho(ball);\n    print('$ball -> $daraja');\n  }\n}",
          "output": "95 -> A\n82 -> B\n61 -> C\n40 -> D"
        },
        {
          "type": "ul",
          "items": [
            "Relational pattern <code>&gt;= 90</code> qiymatni chegaraga solishtiradi.",
            "<code>_</code> — wildcard: har qanday qiymatga mos keladigan zaxira holat.",
            "<code>when</code> qo'shimcha shartni tekshiradi; shart yolg'on bo'lsa, keyingi holat sinaladi.",
            "Obyekt patterni maydonlarni <code>Talaba(ism: final ism)</code> kabi ajratib oladi."
          ]
        },
        {
          "type": "code",
          "title": "obyekt.dart",
          "code": "class Talaba {\n  final String ism;\n  final int ball;\n  const Talaba(this.ism, this.ball);\n}\n\nvoid main() {\n  const talaba = Talaba('Aziza', 92);\n\n  switch (talaba) {\n    case Talaba(ism: final ism, ball: final ball) when ball >= 90:\n      print('$ism: ajoyib natija ($ball)');\n    case Talaba(ism: final ism, ball: final ball):\n      print('$ism: $ball ball');\n  }\n\n  final sonlar = [4, 8, 15];\n  if (sonlar case [final birinchi, ...]) {\n    print('Birinchi: $birinchi');\n  }\n}",
          "output": "Aziza: ajoyib natija (92)\nBirinchi: 4"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tartib muhim",
          "html": "Patternlar yuqoridan pastga sinaladi. Kengroq shartni birinchi yozsangiz, aniqroq holatlar bajarilmay qoladi. Shu sababli avval aniq qiymatlar, oxirida <code>_</code> yoki umumiy holat turadi."
        }
      ],
      "quiz": [
        {
          "q": "Pattern matching'da when kalit so'zi nima qiladi?",
          "options": [
            "Yangi o'zgaruvchi yaratadi",
            "Tsiklni to'xtatadi",
            "Xatoni ushlaydi",
            "Qo'shimcha shartni tekshiradi"
          ],
          "answer": 3,
          "explain": "when pattern mos kelgandan keyin qo'shimcha mantiqiy shartni tekshiradi; shart yolg'on bo'lsa keyingi holat sinaladi."
        },
        {
          "q": "switch ichidagi _ belgisi nimani bildiradi?",
          "options": [
            "Har qanday qiymatga mos zaxira holat",
            "Xatoni bildiradi",
            "Oldingi holatni takrorlaydi",
            "Faqat null uchun holat"
          ],
          "answer": 0,
          "explain": "_ wildcard pattern bo'lib, oldingi holatlarga mos kelmagan barcha qiymatlarni qabul qiladi."
        },
        {
          "q": "[final birinchi, ...] ro'yxat patterni qanday ro'yxatga mos keladi?",
          "options": [
            "Faqat bo'sh ro'yxatga",
            "Kamida bitta elementli ro'yxatga",
            "Aynan ikkita elementli ro'yxatga",
            "Faqat sonlardan iborat ro'yxatga"
          ],
          "answer": 1,
          "explain": "Birinchi element alohida bog'lanadi, ... qolgan elementlarni yutadi. Shu sababli ro'yxatda kamida bitta element bo'lishi kerak."
        }
      ]
    },
    {
      "id": 15,
      "title": "Kengaytirilgan enumlar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<code>enum</code> cheklangan nomlangan qiymatlar to'plamini beradi. Dart 3'da enumlar maydon, konstruktor va metodga ega bo'lishi mumkin. Bunday <b>enhanced enum</b> holatlar bilan birga ularga tegishli ma'lumotni ham saqlaydi."
        },
        {
          "type": "code",
          "title": "buyruq.dart",
          "code": "enum Buyruq {\n  boshlash('start', 1),\n  toxtatish('stop', 2),\n  davom('resume', 3);\n\n  const Buyruq(this.kod, this.raqam);\n\n  final String kod;\n  final int raqam;\n\n  String get tavsif => '$kod ($raqam)';\n}\n\nvoid main() {\n  for (final b in Buyruq.values) {\n    print(b.tavsif);\n  }\n  print(Buyruq.values.length);\n}",
          "output": "start (1)\nstop (2)\nresume (3)\n3"
        },
        {
          "type": "table",
          "head": [
            "Imkoniyat",
            "Yozilishi",
            "Natija"
          ],
          "rows": [
            [
              "Konstantalar",
              "<code>enum Holat { yangi, tugadi }</code>",
              "<code>Holat.yangi</code>"
            ],
            [
              "Nom",
              "<code>Holat.yangi.name</code>",
              "<code>'yangi'</code>"
            ],
            [
              "Indeks",
              "<code>Holat.tugadi.index</code>",
              "<code>1</code>"
            ],
            [
              "Maydon",
              "<code>const Buyruq(this.kod);</code>",
              "Har bir holatga qiymat"
            ]
          ]
        },
        {
          "type": "code",
          "title": "holat.dart",
          "code": "enum Holat { yangi, jarayonda, tugadi }\n\nString izoh(Holat holat) => switch (holat) {\n      Holat.yangi => 'Boshlanmagan',\n      Holat.jarayonda => 'Bajarilmoqda',\n      Holat.tugadi => 'Yakunlangan',\n    };\n\nvoid main() {\n  final h = Holat.jarayonda;\n  print(izoh(h));\n  print(h.name);\n  print(h.index);\n  print(Holat.values.map((e) => e.name).join(', '));\n}",
          "output": "Bajarilmoqda\njarayonda\n1\nyangi, jarayonda, tugadi"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Enum konstruktori doim const",
          "html": "Enum ichidagi konstruktor <code>const</code> bo'lishi shart, chunki barcha holatlar dastur ishga tushishidan oldin tayyor bo'ladi. Enum qiymatlarini keyin o'zgartirib bo'lmaydi. <code>switch</code> barcha holatlarni qamrab olsa, <code>_</code> shart emas."
        }
      ],
      "quiz": [
        {
          "q": "Buyruq.values ifodasi nima qaytaradi?",
          "options": [
            "Faqat birinchi konstantani",
            "Enum nomini",
            "Barcha enum konstantalari ro'yxatini",
            "Konstruktor parametrlarini"
          ],
          "answer": 2,
          "explain": "values barcha enum konstantalarini e'lon tartibida saqlaydigan ro'yxatni qaytaradi."
        },
        {
          "q": "Kengaytirilgan enumga maydon qanday qo'shiladi?",
          "options": [
            "Oddiy setter orqali",
            "Faqat static metod orqali",
            "Mixin orqali",
            "const konstruktor va final maydon orqali"
          ],
          "answer": 3,
          "explain": "Har bir holat konstruktorga argument beradi, maydon final bo'ladi, konstruktor esa const bo'lishi shart."
        },
        {
          "q": "Enum bo'yicha switch yozganda barcha holatlar qamrab olinsa, _ shart kerakmi?",
          "options": [
            "Yo'q, ortiqcha bo'ladi",
            "Ha, har doim kerak",
            "Faqat 3 tadan ko'p holatda kerak",
            "Faqat null bo'lsa kerak"
          ],
          "answer": 0,
          "explain": "Barcha enum holatlari qamrab olinsa, switch exhaustive hisoblanadi va _ holatini yozish shart emas."
        }
      ]
    },
    {
      "id": 16,
      "title": "Extension metodlar: mavjud turlarni kengaytirish",
      "minutes": 14,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Extension</b> mavjud turga (masalan, <code>String</code> yoki <code>Iterable&lt;int&gt;</code>) yangi metod va getter qo'shish imkonini beradi. Asl sinfning kodini o'zgartirmaysiz va yangi tur yaratmaysiz — shunchaki qulay yordamchi API qo'shasiz."
        },
        {
          "type": "code",
          "title": "matn_extension.dart",
          "code": "extension MatnYordamchi on String {\n  String get boshHarf {\n    if (isEmpty) return '';\n    return this[0].toUpperCase() + substring(1);\n  }\n\n  bool get email => contains('@') && contains('.');\n}\n\nvoid main() {\n  print('aziza'.boshHarf);\n  print('Bek'.boshHarf);\n  print('ali@mail.uz'.email);\n}",
          "output": "Aziza\nBek\ntrue"
        },
        {
          "type": "ul",
          "items": [
            "<code>on String</code> — extension qaysi turga qo'shilishini bildiradi.",
            "Getter <code>get boshHarf</code> xossadek chaqiriladi: <code>ism.boshHarf</code>.",
            "Extension faqat ko'rinadigan (import qilingan) joyda ishlaydi.",
            "Extension asl turni o'zgartirmaydi va uning private maydonlariga kira olmaydi."
          ]
        },
        {
          "type": "code",
          "title": "iterable_extension.dart",
          "code": "extension Statistika on Iterable<int> {\n  int get yigindi => fold(0, (a, b) => a + b);\n  double get ortacha => isEmpty ? 0 : yigindi / length;\n}\n\nvoid main() {\n  final sonlar = [4, 6, 8];\n  print(sonlar.yigindi);\n  print(sonlar.ortacha);\n}",
          "output": "18\n6.0"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Nom to'qnashuvi",
          "html": "Ikki xil kutubxonada bir xil nomli extension bo'lsa, konflikt yuz beradi. Uni <code>import 'a.dart' show ...</code> bilan cheklash yoki extensionga aniq nom berish orqali hal qilinadi. Extension metodlari dinamik emas — ular kompilyatsiya vaqtida aniqlanadi."
        }
      ],
      "quiz": [
        {
          "q": "Extension qanday kalit so'z bilan e'lon qilinadi?",
          "options": [
            "extends",
            "extension",
            "mixin",
            "implements"
          ],
          "answer": 1,
          "explain": "Extension extension kalit so'zi, nom va on turi bilan e'lon qilinadi: extension Nom on String."
        },
        {
          "q": "extension MatnYordamchi on String bilan qo'shilgan getter qayerda ishlaydi?",
          "options": [
            "Butun dunyoda avtomatik",
            "Faqat main ichida",
            "Faqat shu faylda va import qilingan joylarda",
            "Faqat String yaratilganda"
          ],
          "answer": 2,
          "explain": "Extension ko'rinishi kutubxona chegarasi bilan belgilanadi; undan foydalanish uchun faylni import qilish kerak."
        },
        {
          "q": "Extension asl sinfning private maydoniga kira oladimi?",
          "options": [
            "Ha, har doim",
            "Faqat getter bo'lsa",
            "Faqat enumlarda",
            "Yo'q, boshqa kutubxonada bo'lsa kira olmaydi"
          ],
          "answer": 3,
          "explain": "Extension alohida kutubxonada bo'lsa, private a'zolarga kira olmaydi; u faqat ommaviy API bilan ishlaydi."
        }
      ]
    },
    {
      "id": 17,
      "title": "Generiklar: tur xavfsiz shablonlar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Generik</b> bir xil kodni turli turlar bilan xavfsiz ishlatish imkonini beradi. <code>List&lt;int&gt;</code> faqat butun sonlarni qabul qiladi, <code>List&lt;String&gt;</code> esa matnlarni. O'zingiz ham <code>&lt;T&gt;</code> parametrli sinf va funksiya yozishingiz mumkin."
        },
        {
          "type": "code",
          "title": "quti.dart",
          "code": "class Quti<T> {\n  T? _qiymat;\n\n  void joyla(T qiymat) {\n    _qiymat = qiymat;\n  }\n\n  T? get qiymat => _qiymat;\n}\n\nvoid main() {\n  final sonQuti = Quti<int>();\n  sonQuti.joyla(42);\n  print(sonQuti.qiymat);\n\n  final matnQuti = Quti<String>();\n  matnQuti.joyla('Dart');\n  print(matnQuti.qiymat);\n\n  print(sonQuti.runtimeType);\n}",
          "output": "42\nDart\nQuti<int>"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi",
            "Misol"
          ],
          "rows": [
            [
              "<code>&lt;T&gt;</code>",
              "Erkin tur parametri",
              "<code>class Quti&lt;T&gt;</code>"
            ],
            [
              "<code>&lt;T extends Son&gt;</code>",
              "T shu turdan bo'lishi shart",
              "<code>T extends Comparable&lt;T&gt;</code>"
            ],
            [
              "<code>List&lt;T&gt;</code>",
              "Bir turdagi elementlar ro'yxati",
              "<code>List&lt;String&gt;</code>"
            ],
            [
              "<code>T funksiya&lt;T&gt;(T x)</code>",
              "Umumiy metod",
              "<code>engKatta&lt;int&gt;([1, 2])</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "chegara.dart",
          "code": "T engKatta<T extends Comparable<T>>(List<T> qiymatlar) {\n  var eng = qiymatlar.first;\n  for (final q in qiymatlar.skip(1)) {\n    if (q.compareTo(eng) > 0) {\n      eng = q;\n    }\n  }\n  return eng;\n}\n\nvoid main() {\n  print(engKatta([3, 9, 4]));\n  print(engKatta(['olma', 'uzum', 'nok']));\n}",
          "output": "9\nuzum"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Tur xavfsizligi",
          "html": "<code>Quti&lt;String&gt;</code> ichiga <code>joyla(42)</code> yozib bo'lmaydi — kompilyator tur xatosini beradi. Bu ish vaqtidagi kutilmagan xatolarning oldini oladi. Dart generiklari ish vaqtida ham saqlanadi: <code>runtimeType</code> <code>Quti&lt;int&gt;</code> ni ko'rsatadi."
        }
      ],
      "quiz": [
        {
          "q": "class Quti<T> yozuvidagi T nimani bildiradi?",
          "options": [
            "Tur parametrini",
            "Faqat int turini",
            "Statik maydonni",
            "Xato kodini"
          ],
          "answer": 0,
          "explain": "T — tur parametri; Quti<int>, Quti<String> kabi aniq turlar bilan ishlatiladi."
        },
        {
          "q": "T extends Comparable<T> cheklovi nimani talab qiladi?",
          "options": [
            "T null bo'lmasligini",
            "T Comparable interfeysini bajarishini",
            "T faqat String bo'lishini",
            "T dinamik bo'lishini"
          ],
          "answer": 1,
          "explain": "extends chegarasi T turi Comparable<T> ni implement qilishini talab qiladi, shuning uchun compareTo ishlatish mumkin."
        },
        {
          "q": "Quti<String> obyektiga joyla(42) chaqirilsa nima bo'ladi?",
          "options": [
            "42 matnga aylanadi",
            "Ish vaqtida null bo'ladi",
            "Kompilyatsiya xatosi chiqadi",
            "Dastur sekin ishlaydi"
          ],
          "answer": 2,
          "explain": "Quti<String> faqat String qabul qiladi; int uzatish kompilyator tomonidan tur xatosi sifatida rad etiladi."
        }
      ]
    },
    {
      "id": 18,
      "title": "Kolleksiya operatorlari: spread, collection-if va fold",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Dart ro'yxat va to'plamlarni yig'ishda maxsus operatorlarni beradi. <code>...</code> spread mavjud kolleksiya elementlarini joyiga qo'shadi, <code>if</code> va <code>for</code> esa kolleksiya ichida shart va tsikl yozish imkonini beradi. <code>fold</code> esa butun ro'yxatni bitta qiymatga jamlaydi."
        },
        {
          "type": "code",
          "title": "yigish.dart",
          "code": "void main() {\n  final asosiy = ['Dart', 'Flutter'];\n  final qoshimcha = ['Git', ...asosiy];\n  print(qoshimcha);\n\n  final faol = true;\n  final royxat = [\n    'Boshlash',\n    if (faol) 'Davom etish',\n    for (var i = 1; i <= 2; i++) 'Qadam $i',\n  ];\n  print(royxat);\n}",
          "output": "[Git, Dart, Flutter]\n[Boshlash, Davom etish, Qadam 1, Qadam 2]"
        },
        {
          "type": "table",
          "head": [
            "Operator",
            "Vazifasi",
            "Misol"
          ],
          "rows": [
            [
              "<code>...</code>",
              "Kolleksiya elementlarini yoyadi",
              "<code>[...a, ...b]</code>"
            ],
            [
              "<code>if</code>",
              "Shartga ko'ra element qo'shadi",
              "<code>if (faol) 'Faol'</code>"
            ],
            [
              "<code>for</code>",
              "Tsikl natijalarini qo'shadi",
              "<code>for (final x in a) x</code>"
            ],
            [
              "<code>fold</code>",
              "Bitta natijaga jamlaydi",
              "<code>fold(0, (a, b) =&gt; a + b)</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "hisob.dart",
          "code": "void main() {\n  final baholar = [85, 92, 78, 92];\n\n  print(baholar.fold<int>(0, (sum, b) => sum + b));\n  print(baholar.toSet().toList());\n\n  final nusxa = [...baholar]..sort();\n  print(nusxa);\n  print(baholar.map((b) => b + 5).toList());\n}",
          "output": "347\n[85, 92, 78]\n[78, 85, 92, 92]\n[90, 97, 83, 97]"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Cascade operator",
          "html": "<code>[...baholar]..sort()</code> yozuvida avval nusxa olinadi, keyin <code>..sort()</code> cascade operatori shu nusxani joyida tartiblaydi va nusxaning o'zini qaytaradi. Cascade <code>..</code> bilan boshlanadi va bir nechta amalni ketma-ket bajarishga yordam beradi."
        }
      ],
      "quiz": [
        {
          "q": "Ro'yxat ichida ... operatori nima qiladi?",
          "options": [
            "Elementlarni o'chiradi",
            "Ro'yxatni saralaydi",
            "Yangi ro'yxat turini yaratadi",
            "Boshqa kolleksiya elementlarini joyiga yoyadi"
          ],
          "answer": 3,
          "explain": "Spread operatori ... kolleksiyadagi elementlarni yangi kolleksiya ichiga birma-bir qo'shadi."
        },
        {
          "q": "[if (faol) 'Faol'] yozuvida faol false bo'lsa natija qanday bo'ladi?",
          "options": [
            "[]",
            "['Faol']",
            "[false]",
            "Xato chiqadi"
          ],
          "answer": 0,
          "explain": "collection-if sharti yolg'on bo'lsa, element umuman qo'shilmaydi va bo'sh ro'yxat qoladi."
        },
        {
          "q": "[1, 2, 3] uchun fold(0, (a, b) => a + b) qanday natija beradi?",
          "options": [
            "3",
            "6",
            "123",
            "[1, 2, 3]"
          ],
          "answer": 1,
          "explain": "fold boshlang'ich 0 dan boshlab har bir elementni jamlaydi: 0 + 1 + 2 + 3 = 6."
        }
      ]
    },
    {
      "id": 19,
      "title": "Iterable va lazy hisoblash",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<code>Iterable</code> — ketma-ket o'qiladigan qiymatlar to'plami. <code>map</code>, <code>where</code> va <code>take</code> kabi metodlar yangi Iterable qaytaradi, lekin natijani darhol hisoblamaydi: hisoblash faqat elementlar o'qila boshlanganda bajariladi. Bu <b>lazy</b> ya'ni dangasa hisoblash deyiladi."
        },
        {
          "type": "code",
          "title": "lazy.dart",
          "code": "void main() {\n  final sonlar = [1, 2, 3, 4, 5, 6];\n\n  final juftKvadrat = sonlar\n      .where((s) => s.isEven)\n      .map((s) => s * s)\n      .take(2)\n      .toList();\n  print(juftKvadrat);\n\n  final iter = sonlar.map((s) {\n    print('hisob: $s');\n    return s * 10;\n  });\n\n  print('Hali hisoblanmadi');\n  print(iter.first);\n}",
          "output": "[4, 16]\nHali hisoblanmadi\nhisob: 1\n10"
        },
        {
          "type": "ul",
          "items": [
            "<code>where</code> shartga mos elementlarni tanlaydi, lekin natijani darhol yaratmaydi.",
            "<code>map</code> har bir elementni o'zgartiradi; <code>take(2)</code> faqat birinchi ikkitasini oladi.",
            "<code>first</code> birinchi elementni topishi bilan hisoblashni to'xtatadi — qolgan elementlar o'qilmaydi.",
            "<code>toList()</code> barcha natijalarni materiallashtiradi va yangi ro'yxat qaytaradi."
          ]
        },
        {
          "type": "code",
          "title": "tekshiruv.dart",
          "code": "void main() {\n  final sozlar = ['dart', 'flutter', 'sql'];\n  final harflar = sozlar.expand((s) => s.split('')).toSet();\n\n  print(harflar.length);\n  print(sozlar.any((s) => s.length > 5));\n  print(sozlar.every((s) => s.isNotEmpty));\n  print(sozlar.firstWhere((s) => s.startsWith('f')));\n}",
          "output": "10\ntrue\ntrue\nflutter"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Bir necha marta o'qish",
          "html": "Lazy Iterable har safar qayta hisoblanishi mumkin: uni ikki marta aylansangiz, <code>map</code> funksiyasi ikki marta chaqiriladi. Agar natija bir necha joyda kerak bo'lsa, <code>toList()</code> bilan bir marta hisoblab oling. Stream esa odatda bir marta o'qiladi."
        }
      ],
      "quiz": [
        {
          "q": "map() natijasi qachon hisoblanadi?",
          "options": [
            "Darhol, chaqiruv paytida",
            "Faqat toList() yozilganda",
            "Elementlar o'qila boshlaganda",
            "Faqat dastur tugaganda"
          ],
          "answer": 2,
          "explain": "map lazy ishlaydi: natija Iterable o'qila boshlanganda, masalan first yoki toList chaqirilganda hisoblanadi."
        },
        {
          "q": "iter.first chaqiruvi nima uchun qolgan elementlarni hisoblamaydi?",
          "options": [
            "Chunki map xato beradi",
            "Chunki ro'yxat bo'sh",
            "Chunki first faqat sonlarda ishlaydi",
            "Chunki first birinchi natijadan keyin to'xtaydi"
          ],
          "answer": 3,
          "explain": "first faqat birinchi elementni talab qiladi, shuning uchun lazy zanjir qolgan elementlarni hisoblamaydi."
        },
        {
          "q": "Lazy Iterable natijasini bir marta hisoblab, ro'yxat sifatida saqlash uchun nima ishlatiladi?",
          "options": [
            "toList()",
            "toString()",
            "first",
            "isEmpty"
          ],
          "answer": 0,
          "explain": "toList() barcha elementlarni hisoblab, ularni yangi List ichida saqlaydi."
        }
      ]
    },
    {
      "id": 20,
      "title": "Matnlar va RegExp",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Dart'da matnlar <code>String</code> turida saqlanadi va o'zgarmasdir: har bir o'zgartirish yangi matn qaytaradi. <code>trim</code>, <code>split</code>, <code>replaceAll</code> kabi metodlar kundalik ishlarda ko'p uchraydi. Murakkab qidiruvlar uchun <b>RegExp</b> ishlatiladi."
        },
        {
          "type": "code",
          "title": "matn.dart",
          "code": "void main() {\n  const matn = '  Dart - bu ajoyib til.  ';\n\n  print(matn.trim());\n  print(matn.trim().toUpperCase());\n  print('dart'.padLeft(8, '*'));\n  print('a,b,c'.split(','));\n  print('Dart'.replaceAll('a', 'o'));\n}",
          "output": "Dart - bu ajoyib til.\nDART - BU AJOYIB TIL.\n****dart\n[a, b, c]\nDort"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi",
            "Natija"
          ],
          "rows": [
            [
              "<code>trim()</code>",
              "Bosh va oxirdagi bo'shliqlarni olib tashlaydi",
              "<code>'  a  '.trim()</code> dan <code>'a'</code>"
            ],
            [
              "<code>split(',')</code>",
              "Matnni bo'laklarga ajratadi",
              "<code>'a,b'.split(',')</code> dan <code>[a, b]</code>"
            ],
            [
              "<code>replaceAll()</code>",
              "Barcha mos qismlarni almashtiradi",
              "<code>'aa'.replaceAll('a', 'b')</code> dan <code>'bb'</code>"
            ],
            [
              "<code>padLeft()</code>",
              "Chapdan belgi bilan to'ldiradi",
              "<code>'5'.padLeft(3, '0')</code> dan <code>'005'</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "regexp.dart",
          "code": "void main() {\n  final matn = 'Ali: 90, Aziza: 95, Bek: 85';\n  final reg = RegExp(r'(\\w+): (\\d+)');\n\n  for (final m in reg.allMatches(matn)) {\n    final ism = m.group(1);\n    final ball = m.group(2);\n    print('$ism -> $ball');\n  }\n\n  final faqatRaqam = matn.replaceAll(RegExp(r'[^\\d]+'), ' ');\n  print(faqatRaqam.trim());\n}",
          "output": "Ali -> 90\nAziza -> 95\nBek -> 85\n90 95 85"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Raw string va backslash",
          "html": "RegExp naqshlarida <code>\\d</code>, <code>\\w</code> kabi belgilar uchraydi. Oddiy matnda <code>'\\d'</code> yozilsa, Dart backslashni maxsus belgi deb qabul qiladi. Shuning uchun naqsh <code>r'\\d+'</code> ko'rinishidagi raw string bilan yoziladi."
        }
      ],
      "quiz": [
        {
          "q": "Matn boshidagi va oxiridagi bo'shliqlarni olib tashlaydigan metod qaysi?",
          "options": [
            "clear()",
            "trim()",
            "remove()",
            "stripSpaces()"
          ],
          "answer": 1,
          "explain": "trim() matnning bosh va oxiridagi bo'shliq belgilarini olib tashlab, yangi matn qaytaradi."
        },
        {
          "q": "RegExp(r'\\d+') naqshida r prefiksi nima uchun yoziladi?",
          "options": [
            "Natijani ro'yxatga aylantirish uchun",
            "RegExpni tezlashtirish uchun",
            "Backslashni raw matn sifatida saqlash uchun",
            "Faqat katta harflarni qidirish uchun"
          ],
          "answer": 2,
          "explain": "r prefiksi raw string yaratadi; d kabi belgilar Dart escape qoidalari bilan buzilmasdan RegExpga yetib boradi."
        },
        {
          "q": "'Ali,Aziza,Bek'.split(',') qanday natija beradi?",
          "options": [
            "Bitta matn",
            "Bo'sh ro'yxat",
            "Map obyekti",
            "Uch elementli ro'yxat"
          ],
          "answer": 3,
          "explain": "split vergul bo'yicha ajratadi va ['Ali', 'Aziza', 'Bek'] ro'yxatini qaytaradi."
        }
      ]
    },
    {
      "id": 21,
      "title": "Sana, vaqt va Duration",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<code>DateTime</code> sana va vaqtni, <code>Duration</code> esa vaqt oralig'ini ifodalaydi. Ular bilan sanani qo'shish, ayirish va ikki lahza orasidagi farqni hisoblash mumkin. Dart oylarni 1 dan 12 gacha raqamlaydi."
        },
        {
          "type": "code",
          "title": "sana.dart",
          "code": "void main() {\n  final boshlanish = DateTime(2026, 10, 23, 9, 30);\n  final tugash = boshlanish.add(const Duration(hours: 2, minutes: 45));\n\n  print(boshlanish);\n  print(tugash);\n  print(tugash.difference(boshlanish).inMinutes);\n  print(boshlanish.isBefore(tugash));\n}",
          "output": "2026-10-23 09:30:00.000\n2026-10-23 12:15:00.000\n165\ntrue"
        },
        {
          "type": "table",
          "head": [
            "Amal",
            "Yozilishi",
            "Natija"
          ],
          "rows": [
            [
              "Hozirgi vaqt",
              "<code>DateTime.now()</code>",
              "Joriy lahza"
            ],
            [
              "Qo'shish",
              "<code>sana.add(Duration(days: 3))</code>",
              "Yangi DateTime"
            ],
            [
              "Farq",
              "<code>a.difference(b)</code>",
              "Duration"
            ],
            [
              "ISO matn",
              "<code>sana.toIso8601String()</code>",
              "<code>2026-10-23T09:30:00.000</code>"
            ],
            [
              "Tahlil",
              "<code>DateTime.parse('2026-10-23')</code>",
              "DateTime"
            ]
          ]
        },
        {
          "type": "code",
          "title": "format.dart",
          "code": "void main() {\n  final hozir = DateTime(2026, 10, 23, 14, 5, 9);\n\n  final kun = hozir.day.toString().padLeft(2, '0');\n  final oy = hozir.month.toString().padLeft(2, '0');\n  final yil = hozir.year;\n  final soat = hozir.hour.toString().padLeft(2, '0');\n  final daqiqa = hozir.minute.toString().padLeft(2, '0');\n  print('$kun.$oy.$yil $soat:$daqiqa');\n\n  final davomiylik = Duration(minutes: 125);\n  final soat2 = davomiylik.inHours;\n  final daqiqa2 = davomiylik.inMinutes.remainder(60);\n  print('$soat2 soat $daqiqa2 daqiqa');\n\n  final sana = DateTime.parse('2026-11-05T10:00:00.000');\n  print(sana.year);\n}",
          "output": "23.10.2026 14:05\n2 soat 5 daqiqa\n2026"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Oy 1 dan boshlanadi",
          "html": "<code>DateTime(2026, 1, 15)</code> — 15-yanvar. Oy indeksi 0 dan emas, 1 dan boshlanadi. <code>DateTime.utc()</code> universal vaqtni beradi, oddiy konstruktor esa mahalliy vaqtni oladi. Duration oylar bilan emas, aniq soniyalar bilan hisoblanadi."
        }
      ],
      "quiz": [
        {
          "q": "DateTime(2026, 10, 23) qaysi sanani bildiradi?",
          "options": [
            "2026-yil 23-oktabr",
            "2026-yil 10-noyabr",
            "2026-yil 23-yanvar",
            "2026-yil 10-dekabr"
          ],
          "answer": 0,
          "explain": "Konstruktor tartibi yil, oy, kun: 2026-yil, 10-oy (oktabr), 23-kun."
        },
        {
          "q": "duration.inMinutes.remainder(60) nima qaytaradi?",
          "options": [
            "Umumiy soatni",
            "Daqiqaning 60 ga bo'lingan qoldig'ini",
            "Kunlar sonini",
            "Millisekundlarni"
          ],
          "answer": 1,
          "explain": "remainder(60) daqiqalar sonini 60 ga bo'lgandagi qoldiqni beradi, ya'ni soatga sig'gan qismdan keyingi daqiqalar."
        },
        {
          "q": "sana.toIso8601String() qanday format beradi?",
          "options": [
            "23/10/2026",
            "23-oktabr, 2026",
            "2026-10-23T00:00:00.000",
            "2026 10 23"
          ],
          "answer": 2,
          "explain": "toIso8601String() yil-oy-kunTsoat:daqiqa:soniya.millisekund formatini qaytaradi."
        }
      ]
    },
    {
      "id": 22,
      "title": "static, const konstruktor va factory",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<code>static</code> a'zo sinfning o'ziga tegishli bo'lib, obyekt yaratmasdan ishlatiladi. <code>const</code> konstruktor barcha maydonlari final bo'lganda kompilyatsiya vaqtidagi o'zgarmas obyekt yaratadi. <b>Factory</b> konstruktor esa yangi obyekt qaytarish o'rniga mavjudini qaytarishi yoki boshqa turdagi obyekt yaratishi mumkin."
        },
        {
          "type": "code",
          "title": "valyuta.dart",
          "code": "class Valyuta {\n  final String kod;\n  final double kurs;\n\n  const Valyuta(this.kod, this.kurs);\n\n  static const Valyuta usd = Valyuta('USD', 12650);\n  static const Valyuta eur = Valyuta('EUR', 13720);\n\n  double somda(double miqdor) => miqdor * kurs;\n}\n\nvoid main() {\n  print(Valyuta.usd.kod);\n  print(Valyuta.usd.somda(10));\n  print(identical(Valyuta.usd, const Valyuta('USD', 12650)));\n}",
          "output": "USD\n126500.0\ntrue"
        },
        {
          "type": "ul",
          "items": [
            "<code>static</code> maydon va metod sinf nomi orqali chaqiriladi: <code>Valyuta.usd</code>.",
            "<code>const</code> konstruktor faqat barcha maydonlari <code>final</code> bo'lsa ishlaydi.",
            "Bir xil qiymatli const obyektlar kompilyator tomonidan bitta nusxaga birlashtiriladi (canonicalization).",
            "<code>factory</code> konstruktor <code>return</code> bilan obyekt qaytaradi va keshdan foydalanishi mumkin."
          ]
        },
        {
          "type": "code",
          "title": "factory.dart",
          "code": "class Foydalanuvchi {\n  final String ism;\n  final bool faol;\n\n  Foydalanuvchi._(this.ism, this.faol);\n\n  factory Foydalanuvchi.guest() => Foydalanuvchi._('Mehmon', false);\n\n  factory Foydalanuvchi.fromJson(Map<String, dynamic> json) {\n    final ism = json['ism'] as String;\n    final faol = json['faol'] as bool? ?? false;\n    return Foydalanuvchi._(ism, faol);\n  }\n}\n\nvoid main() {\n  final mehmon = Foydalanuvchi.guest();\n  final ali = Foydalanuvchi.fromJson({'ism': 'Ali', 'faol': true});\n\n  final m1 = mehmon.ism;\n  final m2 = mehmon.faol;\n  final a1 = ali.ism;\n  final a2 = ali.faol;\n  print('$m1 / $m2');\n  print('$a1 / $a2');\n}",
          "output": "Mehmon / false\nAli / true"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Factory qachon kerak?",
          "html": "Factory konstruktor obyektni keshlash, JSON'dan yaratish yoki ichki konstruktorni yashirish uchun qulay. U <code>new</code> kabi chaqiriladi, lekin har safar yangi obyekt yaratishga majbur emas. <code>static</code> esa obyektga emas, butun sinfga tegishli ma'lumot uchun ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "static const Valyuta usd a'zosiga qanday murojaat qilinadi?",
          "options": [
            "Valyuta().usd",
            "usd.Valyuta",
            "Valyuta['usd']",
            "Valyuta.usd"
          ],
          "answer": 3,
          "explain": "static a'zo sinf nomi orqali chaqiriladi: Valyuta.usd. Obyekt yaratish shart emas."
        },
        {
          "q": "const konstruktor qanday shartga javob berishi kerak?",
          "options": [
            "Barcha maydonlari final bo'lishi",
            "Kamida bitta static maydon bo'lishi",
            "Faqat factory bo'lishi",
            "main() ichida chaqirilishi"
          ],
          "answer": 0,
          "explain": "const obyekt o'zgarmas bo'lishi uchun barcha maydonlari final bo'lishi va konstruktor const deb belgilanishi kerak."
        },
        {
          "q": "factory konstruktorning oddiy konstruktordan asosiy farqi nimada?",
          "options": [
            "Faqat const bilan ishlashi",
            "Obyekt qaytarishi va mavjudini qaytarishi mumkin",
            "Obyekt yarata olmasligi",
            "Faqat static bo'lishi"
          ],
          "answer": 1,
          "explain": "Factory konstruktor return orqali obyekt qaytaradi; yangi nusxa yaratmasdan keshdagi obyektni ham qaytarishi mumkin."
        }
      ]
    },
    {
      "id": 23,
      "title": "Abstrakt sinflar va interfeyslar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Abstrakt sinf</b> umumiy shablon beradi va undan to'g'ridan-to'g'ri obyekt yaratilmaydi. <b>Interfeys</b> esa qaysi metodlar bo'lishini talab qiladi, lekin ularning bajarilishini bermaydi. Dart'da har qanday sinf <code>implements</code> orqali interfeys vazifasini o'tashi mumkin."
        },
        {
          "type": "code",
          "title": "tolov.dart",
          "code": "abstract class Tolov {\n  String get nomi;\n  int summa();\n\n  String chek() {\n    final qiymat = summa();\n    return '$nomi - $qiymat so\\'m';\n  }\n}\n\nclass NaqdTolov extends Tolov {\n  @override\n  String get nomi => 'Naqd';\n\n  @override\n  int summa() => 25000;\n}\n\nclass KartaTolov implements Tolov {\n  @override\n  String get nomi => 'Karta';\n\n  @override\n  int summa() => 42000;\n\n  @override\n  String chek() => 'Karta cheki: 42000';\n}\n\nvoid main() {\n  final tolovlar = <Tolov>[NaqdTolov(), KartaTolov()];\n  for (final t in tolovlar) {\n    print(t.chek());\n  }\n  print(tolovlar.fold<int>(0, (s, t) => s + t.summa()));\n}",
          "output": "Naqd - 25000 so'm\nKarta cheki: 42000\n67000"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Kalit so'z",
            "Meros oladi?",
            "Majburiyat"
          ],
          "rows": [
            [
              "Abstrakt sinf",
              "<code>extends</code>",
              "Ha, tayyor metodlar bilan",
              "Abstrakt metodlarni yozish"
            ],
            [
              "Interfeys",
              "<code>implements</code>",
              "Yo'q, faqat shartnoma",
              "Barcha metodlarni yozish"
            ],
            [
              "Oddiy sinf",
              "<code>extends</code>",
              "Ha",
              "Ota sinf metodlarini ishlatish"
            ],
            [
              "Abstract interface",
              "<code>abstract interface class</code>",
              "Yo'q",
              "Faqat implements uchun"
            ]
          ]
        },
        {
          "type": "code",
          "title": "polimorfizm.dart",
          "code": "abstract class Hayvon {\n  String ovqat();\n}\n\nclass Mushuk implements Hayvon {\n  @override\n  String ovqat() => 'sut';\n}\n\nclass It implements Hayvon {\n  @override\n  String ovqat() => 'go\\'sht';\n}\n\nvoid main() {\n  final hayvonlar = <Hayvon>[Mushuk(), It()];\n  for (final h in hayvonlar) {\n    final turi = h.runtimeType;\n    final yem = h.ovqat();\n    print('$turi: $yem');\n  }\n}",
          "output": "Mushuk: sut\nIt: go'sht"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Polimorfizm",
          "html": "<code>List&lt;Tolov&gt;</code> ichida turli sinflar obyektlari turishi mumkin. Chaqiruv paytida har bir obyektning o'z metodi ishlaydi — bu polimorfizm. Interfeys kodi o'zgarishsiz qolgan holda yangi to'lov turini qo'shish imkonini beradi."
        }
      ],
      "quiz": [
        {
          "q": "Sinf implements orqali interfeysni qabul qilsa, tayyor metodlar meros bo'ladimi?",
          "options": [
            "Ha, barcha tayyor metodlar",
            "Faqat getterlar meros bo'ladi",
            "Yo'q, faqat shartnoma olinadi",
            "Faqat konstruktor meros bo'ladi"
          ],
          "answer": 2,
          "explain": "implements faqat interfeys shartnomasini beradi; metodlarning bajarilishini sinf o'zi yozishi kerak."
        },
        {
          "q": "class KartaTolov implements Tolov yozuvida qaysi talab bor?",
          "options": [
            "Faqat nomi getterini yozish",
            "Hech narsa yozmaslik",
            "Faqat konstruktor yozish",
            "Tolov'dagi barcha metod va getterlarni yozish"
          ],
          "answer": 3,
          "explain": "implements interfeys shartnomasini oladi; nomi, summa va chek kabi barcha a'zolar qayta yozilishi kerak."
        },
        {
          "q": "List<Tolov> ichida NaqdTolov va KartaTolov obyektlari tursa, t.chek() qaysi metodni chaqiradi?",
          "options": [
            "Obyektning haqiqiy sinfidagi chek ni",
            "Har doim Tolov.chek ni",
            "Faqat birinchisining chek ini",
            "Xato beradi"
          ],
          "answer": 0,
          "explain": "Polimorfizm tufayli chaqiruv obyektning ish vaqtidagi sinfiga mos metodga yo'naltiriladi."
        }
      ]
    },
    {
      "id": 24,
      "title": "Mixinlar chuqur: tartib va cheklovlar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<b>Mixin</b> bir nechta sinfga bir xil qobiliyatni qo'shish usuli. Sinf bitta sinfdan meros oladi, lekin bir nechta mixinni <code>with</code> bilan qabul qilishi mumkin. Mixin o'z maydonlari va metodlariga ega bo'lishi mumkin."
        },
        {
          "type": "code",
          "title": "log.dart",
          "code": "mixin Loglanadi {\n  void log(String xabar) => print('[LOG] $xabar');\n}\n\nmixin Tekshiriladi {\n  bool tekshir() => true;\n}\n\nclass Xizmat with Loglanadi, Tekshiriladi {\n  void ishla() {\n    if (tekshir()) {\n      log('Xizmat ishladi');\n    }\n  }\n}\n\nvoid main() {\n  Xizmat().ishla();\n}",
          "output": "[LOG] Xizmat ishladi"
        },
        {
          "type": "ul",
          "items": [
            "<code>with A, B</code> — sinfga A va B mixinlarini qo'shadi.",
            "Mixin <code>on A</code> cheklovi orqali faqat A dan meros olgan sinflarda ishlaydi.",
            "Mixin metodlari sinfning o'z metodlariga qaraganda quyi ustunlikda, lekin ota sinfnikidan ustun turadi.",
            "Bir nechta mixin bir xil metodni bersa, ro'yxatda oxirgi turgan mixin yutadi."
          ]
        },
        {
          "type": "code",
          "title": "tartib.dart",
          "code": "mixin A {\n  String nom() => 'A';\n}\n\nmixin B on A {\n  @override\n  String nom() => 'B';\n}\n\nmixin C {\n  @override\n  String nom() => 'C';\n}\n\nclass Demo with A, B, C {}\n\nvoid main() {\n  print(Demo().nom());\n}",
          "output": "C"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Chiziqli tartib",
          "html": "Dart mixinlarni chapdan o'ngga qo'llaydi: <code>with A, B, C</code> uchun metod qidiruvi C, B, A, keyin ota sinf tartibida boradi. Shuning uchun C'nin nom() metodi B va A'nikini bosib ketadi. Tartibni o'zgartirsangiz, natija ham o'zgaradi."
        }
      ],
      "quiz": [
        {
          "q": "class Demo with A, B, C yozuvida bir xil nomli metod qaysi mixindan olinadi?",
          "options": [
            "A dan",
            "C dan",
            "B dan",
            "Kompilyatsiya xatosi"
          ],
          "answer": 1,
          "explain": "Mixinlar chapdan o'ngga qo'llanadi; oxirgi turgan C metodlari oldingi mixinlarnikini bosib ketadi."
        },
        {
          "q": "mixin B on A nimani anglatadi?",
          "options": [
            "B A ning o'rnini bosadi",
            "A B dan meros oladi",
            "B faqat A dan meros olgan sinflarda ishlatiladi",
            "B faqat abstrakt bo'ladi"
          ],
          "answer": 2,
          "explain": "on cheklovi mixinni qo'llash uchun sinf A turini qamrab olishini talab qiladi."
        },
        {
          "q": "Dart'da sinf nechta mixinni qabul qilishi mumkin?",
          "options": [
            "Faqat bitta",
            "Ikkitadan ko'p emas",
            "Mixin faqat abstract sinflarga qo'shiladi",
            "Bir nechta"
          ],
          "answer": 3,
          "explain": "with A, B, C ko'rinishida bir nechta mixin qo'shish mumkin; meros esa faqat bitta sinfdan olinadi."
        }
      ]
    },
    {
      "id": 25,
      "title": "Operatorlarni qayta yuklash va Comparable",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Dart'da <code>+</code>, <code>-</code>, <code>*</code> kabi operatorlarni o'z sinfingiz uchun qayta yuklash mumkin. Buning uchun <code>operator</code> kalit so'zi bilan maxsus metod yoziladi. Saralash uchun esa <code>Comparable</code> interfeysi va <code>compareTo</code> metodi ishlatiladi."
        },
        {
          "type": "code",
          "title": "vektor.dart",
          "code": "class Vektor {\n  final int x;\n  final int y;\n\n  const Vektor(this.x, this.y);\n\n  Vektor operator +(Vektor boshqa) => Vektor(x + boshqa.x, y + boshqa.y);\n  Vektor operator *(int k) => Vektor(x * k, y * k);\n\n  @override\n  String toString() => '($x, $y)';\n}\n\nvoid main() {\n  const a = Vektor(2, 3);\n  const b = Vektor(4, 1);\n\n  print(a + b);\n  print(a * 3);\n}",
          "output": "(6, 4)\n(6, 9)"
        },
        {
          "type": "table",
          "head": [
            "Operator",
            "Metod",
            "Misol"
          ],
          "rows": [
            [
              "<code>+</code>",
              "<code>operator +(Vektor b)</code>",
              "<code>a + b</code>"
            ],
            [
              "<code>*</code>",
              "<code>operator *(int k)</code>",
              "<code>a * 3</code>"
            ],
            [
              "<code>==</code>",
              "<code>operator ==(Object o)</code>",
              "<code>a == b</code>"
            ],
            [
              "<code>[]</code>",
              "<code>operator [](int i)</code>",
              "<code>a[0]</code>"
            ],
            [
              "Saralash",
              "<code>compareTo</code>",
              "<code>royxat.sort()</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "comparable.dart",
          "code": "class Yosh implements Comparable<Yosh> {\n  final int qiymat;\n\n  const Yosh(this.qiymat);\n\n  @override\n  int compareTo(Yosh boshqa) => qiymat.compareTo(boshqa.qiymat);\n\n  @override\n  String toString() => '$qiymat yosh';\n}\n\nvoid main() {\n  final royxat = [Yosh(25), Yosh(19), Yosh(31)];\n  royxat.sort();\n\n  print(royxat);\n  print(royxat.first.compareTo(royxat.last));\n}",
          "output": "[19 yosh, 25 yosh, 31 yosh]\n-1"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "compareTo natijasi",
          "html": "<code>compareTo</code> manfiy son (kichik), 0 (teng) yoki musbat son (katta) qaytaradi. <code>List.sort()</code> aynan shu qiymatga tayanadi. Munosabat operatorlarini (<code>&lt;</code>, <code>&gt;</code>) to'g'ridan-to'g'ri qayta yuklab bo'lmaydi; ular o'rniga Comparable ishlatiladi."
        }
      ],
      "quiz": [
        {
          "q": "Operatorni qayta yuklash qaysi kalit so'z bilan boshlanadi?",
          "options": [
            "operator",
            "overload",
            "override",
            "compare"
          ],
          "answer": 0,
          "explain": "Maxsus metod operator kalit so'zi bilan yoziladi, masalan: Vektor operator +(Vektor boshqa)."
        },
        {
          "q": "compareTo metodi qanday qiymat qaytaradi?",
          "options": [
            "Faqat true yoki false",
            "Manfiy, nol yoki musbat son",
            "Har doim 1",
            "Yangi obyekt"
          ],
          "answer": 1,
          "explain": "compareTo kichiklikni manfiy, tenglikni 0, kattalikni musbat son bilan bildiradi."
        },
        {
          "q": "List.sort() Comparable obyektlar ro'yxatini qanday tartiblaydi?",
          "options": [
            "Tasodifiy",
            "Faqat toString bo'yicha",
            "compareTo natijasiga qarab",
            "Tartiblash uchun operator < kerak"
          ],
          "answer": 2,
          "explain": "sort() elementlarni compareTo orqali taqqoslab, o'sish tartibida joylashtiradi."
        }
      ]
    },
    {
      "id": 26,
      "title": "Tenglik: ==, hashCode va identical",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Dart'da <code>==</code> operatori qiymat tengligini, <code>identical()</code> esa bir xil obyekt ekanini tekshiradi. O'z sinfingizda <code>==</code> ni qayta yuklasangiz, <code>hashCode</code> ni ham mos ravishda qayta yuklashingiz kerak. Aks holda <code>Set</code> va <code>Map</code> noto'g'ri ishlaydi."
        },
        {
          "type": "code",
          "title": "nuqta.dart",
          "code": "class Nuqta {\n  final int x;\n  final int y;\n\n  Nuqta(this.x, this.y);\n\n  @override\n  bool operator ==(Object other) {\n    return other is Nuqta && other.x == x && other.y == y;\n  }\n\n  @override\n  int get hashCode => Object.hash(x, y);\n\n  @override\n  String toString() => 'Nuqta($x, $y)';\n}\n\nvoid main() {\n  final a = Nuqta(1, 2);\n  final b = Nuqta(1, 2);\n  final c = Nuqta(2, 1);\n\n  print(a == b);\n  print(identical(a, b));\n  print({a, b, c}.length);\n}",
          "output": "true\nfalse\n2"
        },
        {
          "type": "table",
          "head": [
            "Tekshiruv",
            "Nimani solishtiradi",
            "Misol natijasi"
          ],
          "rows": [
            [
              "<code>a == b</code>",
              "Qiymat tengligini",
              "<code>true</code>"
            ],
            [
              "<code>identical(a, b)</code>",
              "Bir xil obyektni",
              "<code>false</code>"
            ],
            [
              "<code>a.hashCode</code>",
              "Xesh kodini",
              "Bir xil maydonlarda bir xil"
            ],
            [
              "<code>{a, b, c}</code>",
              "hashCode va == bo'yicha",
              "2 ta element"
            ]
          ]
        },
        {
          "type": "code",
          "title": "map_kalit.dart",
          "code": "class Nuqta {\n  final int x;\n  final int y;\n\n  Nuqta(this.x, this.y);\n\n  @override\n  bool operator ==(Object other) =>\n      other is Nuqta && other.x == x && other.y == y;\n\n  @override\n  int get hashCode => Object.hash(x, y);\n}\n\nvoid main() {\n  final mapa = <Nuqta, String>{Nuqta(1, 2): 'A'};\n\n  print(mapa[Nuqta(1, 2)]);\n  print(Nuqta(1, 2).hashCode == Nuqta(1, 2).hashCode);\n}",
          "output": "A\ntrue"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Tenglik shartnomasi",
          "html": "Agar <code>a == b</code> rost bo'lsa, <code>a.hashCode == b.hashCode</code> ham rost bo'lishi shart. <code>Object.hash()</code> bir nechta maydonni xavfsiz birlashtiradi. O'zgaruvchan maydonlar hashCode'ga qo'shilsa, obyekt Set ichida topilmay qolishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "identical(a, b) nimani tekshiradi?",
          "options": [
            "Maydon qiymatlari tengligini",
            "Hash kodlar yig'indisini",
            "Turlar mosligini",
            "Bir xil obyekt ekanini"
          ],
          "answer": 3,
          "explain": "identical aynan bir xil obyekt nusxasi ekanini tekshiradi; == esa qiymat tengligi uchun qayta yuklanishi mumkin."
        },
        {
          "q": "== qayta yuklangan sinfda hashCode ham qayta yuklanishi nima uchun kerak?",
          "options": [
            "Set va Map to'g'ri ishlashi uchun",
            "Kod chiroyli ko'rinishi uchun",
            "toString tezroq ishlashi uchun",
            "Faqat testlarda kerak"
          ],
          "answer": 0,
          "explain": "Set va Map avval hashCode, keyin == bo'yicha solishtiradi; teng obyektlar bir xil hash kodga ega bo'lishi shart."
        },
        {
          "q": "Bir xil maydonli ikki alohida Nuqta obyekti Set ichiga qo'shilsa, Set'da nechta element bo'ladi?",
          "options": [
            "2 ta",
            "1 ta",
            "0 ta",
            "Xato beradi"
          ],
          "answer": 1,
          "explain": "== va hashCode to'g'ri yozilgan bo'lsa, teng obyektlar dublikat sifatida qabul qilinmaydi va bitta element qoladi."
        }
      ]
    },
    {
      "id": 27,
      "title": "dynamic, Object va tur tekshiruvlari",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<code>Object</code> — Dart'dagi barcha turlarning otasi. <code>dynamic</code> esa kompilyatsiya vaqtidagi tur tekshiruvlarini o'chiradi. <code>is</code> turini tekshiradi, <code>as</code> esa turga aylantiradi. Xavfsiz kodda <code>dynamic</code> o'rniga <code>Object?</code> va patternlardan foydalanish afzal."
        },
        {
          "type": "code",
          "title": "object.dart",
          "code": "void main() {\n  Object qiymat = 'Dart';\n\n  print(qiymat is String);\n  print(qiymat is int);\n\n  if (qiymat is String) {\n    print(qiymat.toUpperCase());\n  }\n\n  final uzunlik = (qiymat as String).length;\n  print(uzunlik);\n}",
          "output": "true\nfalse\nDART\n4"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Tekshiruv vaqti",
            "Xavfsizlik"
          ],
          "rows": [
            [
              "<code>Object</code>",
              "Kompilyatsiyada",
              "Yuqori, umumiy tur"
            ],
            [
              "<code>dynamic</code>",
              "Ish vaqtida",
              "Past, xato kech ko'rinadi"
            ],
            [
              "<code>is</code>",
              "Ish vaqtida tur tekshiruvi",
              "Xavfsiz toraytirish"
            ],
            [
              "<code>as</code>",
              "Ish vaqtida aylantirish",
              "Noto'g'ri bo'lsa TypeError"
            ]
          ]
        },
        {
          "type": "code",
          "title": "pattern_tur.dart",
          "code": "void main() {\n  dynamic x = 5;\n  x = 'matn';\n  print(x.runtimeType);\n\n  final royxat = <Object>['a', 2, true];\n  for (final e in royxat) {\n    final tur = switch (e) {\n      String() => 'String',\n      int() => 'int',\n      bool() => 'bool',\n      _ => 'boshqa',\n    };\n    print(tur);\n  }\n}",
          "output": "String\nString\nint\nbool"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "dynamic'ni suiiste'mol qilmang",
          "html": "<code>dynamic x = 5; x.foo();</code> kompilyatsiyadan o'tadi, lekin ish vaqtida yiqiladi. Iloji boricha aniq tur yoki <code>Object?</code> ishlatib, <code>is</code> yoki pattern bilan tekshiring. <code>as</code> faqat tur haqiqatan mosligiga ishonchingiz komil bo'lsa qo'llaniladi."
        }
      ],
      "quiz": [
        {
          "q": "dynamic turidagi o'zgaruvchining asosiy xavfi nimada?",
          "options": [
            "U juda sekin ishlaydi",
            "U null bo'la olmaydi",
            "Tur xatolari ish vaqtida bilinadi",
            "U faqat sonlarni saqlaydi"
          ],
          "answer": 2,
          "explain": "dynamic kompilyatsiya tekshiruvini chetlab o'tadi, shuning uchun noto'g'ri metod yoki tur ishlatilishi faqat ish vaqtida xato beradi."
        },
        {
          "q": "qiymat is String ifodasi nima qaytaradi?",
          "options": [
            "String qiymatni",
            "null yoki String",
            "Yangi obyekt",
            "bool natijani"
          ],
          "answer": 3,
          "explain": "is operatori mantiqiy natija qaytaradi: tur mos bo'lsa true, aks holda false."
        },
        {
          "q": "(qiymat as String) amali noto'g'ri turda bajarilsa nima bo'ladi?",
          "options": [
            "TypeError tashlanadi",
            "null qaytadi",
            "Avtomatik toString ishlaydi",
            "Dastur davom etadi"
          ],
          "answer": 0,
          "explain": "as noto'g'ri turga aylantirishda ish vaqtida TypeError xatosini beradi; oldindan is bilan tekshirish xavfsizroq."
        }
      ]
    },
    {
      "id": 28,
      "title": "Maxsus xatolar va Result yondashuvi",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Kutilgan xatolarni <code>Exception</code>dan meros olgan maxsus sinf bilan ifodalash mumkin. Bu xatoni turi bo'yicha ushlash va foydalanuvchiga tushunarli xabar berish imkonini beradi. Ba'zi hollarda xato tashlash o'rniga <b>Result</b> tipidagi natija qaytarish qulayroq."
        },
        {
          "type": "code",
          "title": "ombor.dart",
          "code": "class OmborXatosi implements Exception {\n  final String xabar;\n\n  OmborXatosi(this.xabar);\n\n  @override\n  String toString() => 'OmborXatosi: $xabar';\n}\n\nclass Ombor {\n  final Map<String, int> _qoldiq = {'olma': 3};\n\n  int olish(String nom, int soni) {\n    final bor = _qoldiq[nom] ?? 0;\n    if (soni <= 0) {\n      throw OmborXatosi('Soni musbat bo\\'lishi kerak');\n    }\n    if (bor < soni) {\n      throw OmborXatosi('$nom yetarli emas');\n    }\n    _qoldiq[nom] = bor - soni;\n    return _qoldiq[nom]!;\n  }\n}\n\nvoid main() {\n  final ombor = Ombor();\n\n  try {\n    print(ombor.olish('olma', 2));\n  } on OmborXatosi catch (e) {\n    print(e);\n  }\n\n  try {\n    ombor.olish('olma', 5);\n  } on OmborXatosi catch (e) {\n    print(e);\n  }\n}",
          "output": "1\nOmborXatosi: olma yetarli emas"
        },
        {
          "type": "table",
          "head": [
            "Kalit so'z",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>throw</code>",
              "Xato obyektini uzatadi"
            ],
            [
              "<code>on Tur</code>",
              "Faqat shu turdagi xatoni ushlaydi"
            ],
            [
              "<code>catch (e)</code>",
              "Xato obyektini oladi"
            ],
            [
              "<code>finally</code>",
              "Har qanday holatda bajariladi"
            ],
            [
              "<code>rethrow</code>",
              "Xatoni qayta uzatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "result.dart",
          "code": "sealed class Natija<T> {\n  const Natija();\n}\n\nclass Muvaffaqiyat<T> extends Natija<T> {\n  final T qiymat;\n  const Muvaffaqiyat(this.qiymat);\n}\n\nclass Xato<T> extends Natija<T> {\n  final String xabar;\n  const Xato(this.xabar);\n}\n\nNatija<int> ruxsat(int yosh) {\n  if (yosh >= 18) {\n    return const Muvaffaqiyat(18);\n  }\n  return const Xato('Voyaga yetmagan');\n}\n\nvoid main() {\n  for (final yosh in [20, 15]) {\n    final natija = ruxsat(yosh);\n    switch (natija) {\n      case Muvaffaqiyat(:final qiymat):\n        print('Ruxsat: $qiymat');\n      case Xato(:final xabar):\n        print('Rad: $xabar');\n    }\n  }\n}",
          "output": "Ruxsat: 18\nRad: Voyaga yetmagan"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Error va Exception",
          "html": "<code>Exception</code> — kutilgan ish xatosi (fayl topilmadi, noto'g'ri kiritish). <code>Error</code> esa programmalash xatosi (null reference, tur xatosi) va odatda ushlanmaydi. <code>sealed</code> sinf barcha variantlarni bir joyda saqlaydi, shuning uchun switch to'liqligini kompilyator tekshiradi."
        }
      ],
      "quiz": [
        {
          "q": "Maxsus xato sinfi nimadan meros olishi mumkin?",
          "options": [
            "Faqat Error'dan",
            "Exception yoki uning interfeysidan",
            "Faqat Object'dan",
            "Faqat Future'dan"
          ],
          "answer": 1,
          "explain": "Kutilgan xatolar uchun Exception (yoki implements Exception) ishlatiladi; Error programmalash xatolari uchun qoldiriladi."
        },
        {
          "q": "sealed class Natija<T> ning afzalligi nimada?",
          "options": [
            "Undan obyekt yaratish tezlashadi",
            "U avtomatik JSON qiladi",
            "Switch barcha variantlarni qamrab olganini tekshiradi",
            "U xatolarni yashiradi"
          ],
          "answer": 2,
          "explain": "sealed sinfning barcha avlodlari ma'lum bo'lgani uchun switch exhaustive bo'lishi kompilyator tomonidan tekshiriladi."
        },
        {
          "q": "rethrow kalit so'zi nima qiladi?",
          "options": [
            "Xatoni butunlay o'chiradi",
            "Har doim yangi xato yaratadi",
            "Tsiklni davom ettiradi",
            "Xatoni qayta uzatadi"
          ],
          "answer": 3,
          "explain": "rethrow ushlangan xatoni o'zgartirmasdan yuqoriga qayta uzatadi, masalan log yozgandan keyin."
        }
      ]
    },
    {
      "id": 29,
      "title": "Fayl tizimi: File va Directory",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Konsol va server dasturlarida ma'lumotni faylda saqlash kerak bo'ladi. <code>dart:io</code> kutubxonasidagi <code>File</code> faylni, <code>Directory</code> papkani ifodalaydi. Deyarli barcha amallar asinxrondir, shuning uchun ular <code>await</code> bilan bajariladi."
        },
        {
          "type": "code",
          "title": "fayl.dart",
          "code": "import 'dart:io';\n\nFuture<void> main() async {\n  final papka = await Directory.systemTemp.createTemp('noldan_');\n  final yol = papka.path + Platform.pathSeparator + 'matn.txt';\n  final fayl = File(yol);\n\n  await fayl.writeAsString('Birinchi qator\\nIkkinchi qator\\n');\n  final qatorlar = await fayl.readAsLines();\n\n  print(qatorlar.length);\n  print(qatorlar.first);\n\n  await papka.delete(recursive: true);\n  print(await papka.exists());\n}",
          "output": "2\nBirinchi qator\nfalse"
        },
        {
          "type": "table",
          "head": [
            "Amal",
            "Metod",
            "Natija"
          ],
          "rows": [
            [
              "Yozish",
              "<code>writeAsString()</code>",
              "Future&lt;File&gt;"
            ],
            [
              "O'qish",
              "<code>readAsString()</code>",
              "Future&lt;String&gt;"
            ],
            [
              "Qatorlar",
              "<code>readAsLines()</code>",
              "Future&lt;List&lt;String&gt;&gt;"
            ],
            [
              "Mavjudlik",
              "<code>exists()</code>",
              "Future&lt;bool&gt;"
            ],
            [
              "O'chirish",
              "<code>delete()</code>",
              "Future&lt;FileSystemEntity&gt;"
            ]
          ]
        },
        {
          "type": "code",
          "title": "csv.dart",
          "code": "import 'dart:io';\n\nFuture<void> main() async {\n  final fayl = File('hisobot.csv');\n  final satrlar = ['ism,ball', 'Aziza,92', 'Bek,85'];\n\n  await fayl.writeAsString(satrlar.join('\\n'));\n  final matn = await fayl.readAsString();\n\n  for (final satr in matn.split('\\n')) {\n    print(satr.toUpperCase());\n  }\n\n  await fayl.delete();\n}",
          "output": "ISM,BALL\nAZIZA,92\nBEK,85"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xatolarni ushlang",
          "html": "Fayl mavjud bo'lmasa yoki ruxsat yetmasa <code>FileSystemException</code> tashlanadi. Uni <code>try/catch</code> bilan ushlang. Yo'llarni qo'lda birlashtirish o'rniga <code>package:path</code> ishlatish turli operatsion tizimlarda ishonchliroq. <code>dart:io</code> brauzerda mavjud emas."
        }
      ],
      "quiz": [
        {
          "q": "Fayl mazmunini qatorlar ro'yxati sifatida o'qish uchun qaysi metod ishlatiladi?",
          "options": [
            "readAsLines()",
            "readAsString()",
            "readAsBytes()",
            "writeAsString()"
          ],
          "answer": 0,
          "explain": "readAsLines() faylni o'qib, har bir qatorni alohida element sifatida List<String> qilib qaytaradi."
        },
        {
          "q": "Directory.systemTemp.createTemp('noldan_') nima qiladi?",
          "options": [
            "Yangi fayl yaratadi",
            "Vaqtinchalik papka yaratadi",
            "Faylni o'chiradi",
            "Tizim vaqtini oladi"
          ],
          "answer": 1,
          "explain": "createTemp vaqtinchalik papka yaratadi va uning Directory obyektini qaytaradi; keyin uni recursive: true bilan o'chirish mumkin."
        },
        {
          "q": "papka.delete(recursive: true) parametri nimani bildiradi?",
          "options": [
            "Faqat bo'sh papkani o'chirish",
            "Faylni nusxalash",
            "Ichidagi fayl va papkalar bilan o'chirish",
            "Faqat o'qish huquqini berish"
          ],
          "answer": 2,
          "explain": "recursive: true papka ichidagi barcha elementlarni ham o'chirishni bildiradi; usiz bo'sh bo'lmagan papka o'chmaydi."
        }
      ]
    },
    {
      "id": 30,
      "title": "JSON serializatsiya: model va JSON",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "JSON — ma'lumot almashishning keng tarqalgan matn formati. Dart'da <code>dart:convert</code> kutubxonasi <code>jsonDecode()</code> va <code>jsonEncode()</code> funksiyalarini beradi. Katta loyihalarda model sinfiga <code>fromJson</code> va <code>toJson</code> metodlari yoziladi."
        },
        {
          "type": "code",
          "title": "talaba_json.dart",
          "code": "import 'dart:convert';\n\nclass Talaba {\n  final String ism;\n  final int ball;\n\n  Talaba(this.ism, this.ball);\n\n  factory Talaba.fromJson(Map<String, dynamic> json) {\n    return Talaba(json['ism'] as String, json['ball'] as int);\n  }\n\n  Map<String, dynamic> toJson() => {'ism': ism, 'ball': ball};\n}\n\nvoid main() {\n  final matn = '{\"ism\":\"Aziza\",\"ball\":92}';\n  final map = jsonDecode(matn) as Map<String, dynamic>;\n  final talaba = Talaba.fromJson(map);\n\n  print(talaba.ism);\n  print(jsonEncode(talaba.toJson()));\n\n  final royxat = [talaba, Talaba('Bek', 85)];\n  print(jsonEncode(royxat.map((t) => t.toJson()).toList()));\n}",
          "output": "Aziza\n{\"ism\":\"Aziza\",\"ball\":92}\n[{\"ism\":\"Aziza\",\"ball\":92},{\"ism\":\"Bek\",\"ball\":85}]"
        },
        {
          "type": "ul",
          "items": [
            "<code>jsonDecode()</code> obyekt uchun <code>Map&lt;String, dynamic&gt;</code>, massiv uchun <code>List&lt;dynamic&gt;</code> qaytaradi.",
            "Maydon turi aniq bo'lsa, <code>as String</code>, <code>as int</code> bilan aylantiriladi.",
            "<code>jsonEncode()</code> Map, List, String, num va bool qiymatlarini qabul qiladi.",
            "<code>DateTime</code> kabi maxsus turlarni <code>toIso8601String()</code> bilan matnga aylantirish kerak."
          ]
        },
        {
          "type": "code",
          "title": "royxat_json.dart",
          "code": "import 'dart:convert';\n\nvoid main() {\n  final matn = '[{\"ism\":\"Ali\",\"ball\":75},{\"ism\":\"Aziza\",\"ball\":95}]';\n  final data = jsonDecode(matn) as List<dynamic>;\n\n  final ballar = data\n      .map((e) => (e as Map<String, dynamic>)['ball'] as int)\n      .toList();\n\n  print(ballar);\n  print(ballar.reduce((a, b) => a + b));\n\n  final yaroqsiz = {'ism': 'Bek', 'ball': null};\n  print(yaroqsiz['ball'] == null);\n}",
          "output": "[75, 95]\n170\ntrue"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Noto'g'ri JSON",
          "html": "Buzilgan JSON <code>FormatException</code> tashlaydi. Tarmoqdan kelgan javobni tahlil qilishdan oldin status kodini va content-type'ni tekshiring. Maydonlar yo'q bo'lsa <code>as</code> xato beradi; <code>as int?</code> yoki standart qiymat bilan xavfsizroq ishlang."
        }
      ],
      "quiz": [
        {
          "q": "jsonDecode('{\"ism\":\"Ali\"}') qanday tur qaytaradi?",
          "options": [
            "String",
            "List<dynamic>",
            "Talaba",
            "Map<String, dynamic>"
          ],
          "answer": 3,
          "explain": "JSON obyekt qavslari Map<String, dynamic> turiga, massiv qavslari esa List<dynamic> turiga aylanadi."
        },
        {
          "q": "JSON'dagi ball maydonini int sifatida olish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "json['ball'] as int",
            "json.ball",
            "int.parse(json)",
            "jsonDecode(json)"
          ],
          "answer": 0,
          "explain": "json Map<String, dynamic> bo'lgani uchun maydon as int bilan aniq turga aylantiriladi."
        },
        {
          "q": "Dart obyektini JSON matniga aylantirish uchun qaysi funksiya ishlatiladi?",
          "options": [
            "jsonDecode()",
            "jsonEncode()",
            "toStringJson()",
            "encodeObject()"
          ],
          "answer": 1,
          "explain": "jsonEncode() Map yoki List kabi Dart qiymatlarini JSON matniga aylantiradi."
        }
      ]
    },
    {
      "id": 31,
      "title": "HTTP so'rovlar: package:http",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Veb API bilan ishlash uchun <code>package:http</code> eng ko'p ishlatiladigan paketdir. <code>http.get()</code> va <code>http.post()</code> so'rov yuborib, <code>Response</code> qaytaradi. Javobning <code>statusCode</code>, <code>headers</code> va <code>body</code> maydonlari tekshiriladi."
        },
        {
          "type": "code",
          "title": "mock_get.dart",
          "code": "import 'dart:convert';\nimport 'package:http/http.dart' as http;\nimport 'package:http/testing.dart';\n\nFuture<void> main() async {\n  final client = MockClient((request) async {\n    return http.Response(\n      jsonEncode({'ism': 'Aziza', 'ball': 92}),\n      200,\n      headers: {'content-type': 'application/json; charset=utf-8'},\n    );\n  });\n\n  final javob = await client.get(Uri.parse('https://noldan.uz/api/talaba'));\n  final status = javob.statusCode;\n  final tana = jsonDecode(javob.body) as Map<String, dynamic>;\n  final ism = tana['ism'];\n  final ball = tana['ball'];\n\n  print('Status: $status');\n  print('Ism: $ism');\n  print('Ball: $ball');\n}",
          "output": "Status: 200\nIsm: Aziza\nBall: 92"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Vazifasi",
            "Muvaffaqiyat kodi"
          ],
          "rows": [
            [
              "<code>GET</code>",
              "Ma'lumot olish",
              "200"
            ],
            [
              "<code>POST</code>",
              "Yangi ma'lumot yuborish",
              "200 yoki 201"
            ],
            [
              "<code>PUT</code>",
              "Mavjudini almashtirish",
              "200 yoki 204"
            ],
            [
              "<code>DELETE</code>",
              "O'chirish",
              "200 yoki 204"
            ]
          ]
        },
        {
          "type": "code",
          "title": "post.dart",
          "code": "import 'dart:convert';\nimport 'dart:io';\nimport 'package:http/http.dart' as http;\n\nFuture<void> main() async {\n  final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);\n  server.listen((req) async {\n    req.response\n      ..statusCode = 201\n      ..headers.contentType = ContentType.json\n      ..write(jsonEncode({'qabul': true, 'ism': 'Bek'}));\n    await req.response.close();\n  });\n\n  final manzil = 'http://127.0.0.1:' + server.port.toString() + '/talaba';\n  final javob = await http.post(\n    Uri.parse(manzil),\n    headers: {'Content-Type': 'application/json'},\n    body: jsonEncode({'ism': 'Bek'}),\n  );\n\n  final data = jsonDecode(javob.body) as Map<String, dynamic>;\n  print(javob.statusCode);\n  print(data['qabul']);\n\n  await server.close(force: true);\n}",
          "output": "201\ntrue"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Client va xatolar",
          "html": "Bir nechta so'rov uchun bitta <code>http.Client</code> yaratib, oxirida <code>close()</code> qiling. Tarmoq xatolari <code>SocketException</code> yoki <code>ClientException</code> bilan keladi; ularni <code>try/catch</code> qiling. <code>await</code> javob kelguncha boshqa ishlarni bloklamaydi."
        }
      ],
      "quiz": [
        {
          "q": "HTTP javobining muvaffaqiyatli ekanini qaysi maydon orqali tekshirish mumkin?",
          "options": [
            "body",
            "headers",
            "statusCode",
            "contentLength"
          ],
          "answer": 2,
          "explain": "statusCode 200-299 oralig'ida bo'lsa, so'rov odatda muvaffaqiyatli hisoblanadi. 404 va 500 xato kodlaridir."
        },
        {
          "q": "http.get() qanday natija qaytaradi?",
          "options": [
            "String",
            "Map",
            "Stream<int>",
            "Future<Response>"
          ],
          "answer": 3,
          "explain": "http.get asinxron so'rov bo'lib, Future<Response> qaytaradi; natijani await bilan olinadi."
        },
        {
          "q": "Server 404 qaytarsa, bu nimani bildiradi?",
          "options": [
            "Manba topilmadi",
            "So'rov muvaffaqiyatli",
            "Server ichki xatosi",
            "Ruxsat berilmadi"
          ],
          "answer": 0,
          "explain": "404 Not Found so'ralgan resurs serverda mavjud emasligini bildiradi."
        }
      ]
    },
    {
      "id": 32,
      "title": "Future chuqur: wait, any va timeout",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Bir nechta asinxron ishni boshqarish uchun <code>Future.wait</code>, <code>Future.any</code> va <code>timeout</code> ishlatiladi. <code>wait</code> barcha Futurelar tugashini kutadi, <code>any</code> birinchisining natijasini oladi, <code>timeout</code> esa belgilangan vaqtdan keyin xato beradi."
        },
        {
          "type": "code",
          "title": "wait.dart",
          "code": "Future<int> kechik(int son, int ms) async {\n  await Future<void>.delayed(Duration(milliseconds: ms));\n  return son;\n}\n\nFuture<void> main() async {\n  final natijalar = await Future.wait([\n    kechik(1, 100),\n    kechik(2, 50),\n    kechik(3, 150),\n  ]);\n\n  print(natijalar);\n}",
          "output": "[1, 2, 3]"
        },
        {
          "type": "ul",
          "items": [
            "<code>Future.wait</code> natijalarni Futurelar berilgan tartibda qaytaradi, tugash tartibida emas.",
            "<code>Future.any</code> birinchi tugagan Future natijasini oladi, qolganlari e'tiborsiz qoladi.",
            "<code>timeout(Duration)</code> vaqt o'tib ketsa <code>TimeoutException</code> tashlaydi.",
            "<code>then</code> va <code>catchError</code> await'siz zanjir yozish uchun ishlatiladi."
          ]
        },
        {
          "type": "code",
          "title": "any_timeout.dart",
          "code": "import 'dart:async';\n\nFuture<void> main() async {\n  final natija = await Future.any([\n    Future.value('birinchi'),\n    Future.delayed(const Duration(milliseconds: 100), () => 'ikkinchi'),\n  ]);\n  print(natija);\n\n  try {\n    final qiymat = await Future<int>.delayed(\n      const Duration(milliseconds: 200),\n      () => 1,\n    ).timeout(const Duration(milliseconds: 50));\n    print(qiymat);\n  } on TimeoutException {\n    print('Vaqt tugadi');\n  }\n}",
          "output": "birinchi\nVaqt tugadi"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Kutilmagan xatolar",
          "html": "Future ishga tushib, natijasi hech qachon <code>await</code> qilinmasa, uning xatosi e'tiborsiz qolishi mumkin. <code>Future.wait</code> birinchi xatoda to'xtaydi; barcha natijalarni yig'ish uchun <code>eagerError: false</code> yoki har bir Futurega alohida xato boshqaruvi qo'shing."
        }
      ],
      "quiz": [
        {
          "q": "Future.wait([a, b, c]) natijalar tartibi qanday bo'ladi?",
          "options": [
            "Tugash tartibida",
            "Futurelar berilgan tartibda",
            "Tasodifiy",
            "Faqat birinchi natija"
          ],
          "answer": 1,
          "explain": "Future.wait barcha natijalarni kutadi va ularni ro'yxatda berilgan tartibda qaytaradi."
        },
        {
          "q": "Future.any nimani qaytaradi?",
          "options": [
            "Barcha natijalar ro'yxatini",
            "Har doim xatoni",
            "Birinchi tugagan Future natijasini",
            "Eng katta qiymatni"
          ],
          "answer": 2,
          "explain": "Future.any birinchi bo'lib yakunlangan Future natijasi yoki xatosini beradi."
        },
        {
          "q": "Future.timeout vaqt tugaganda qanday xato tashlaydi?",
          "options": [
            "FormatException",
            "StateError",
            "RangeError",
            "TimeoutException"
          ],
          "answer": 3,
          "explain": "timeout belgilangan muddatda tugamasa TimeoutException tashlanadi va uni on TimeoutException bilan ushlash mumkin."
        }
      ]
    },
    {
      "id": 33,
      "title": "Stream chuqur: StreamController va broadcast",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Oldin <code>Stream</code> ni <code>async*</code> bilan yaratgan edik. Endi <code>StreamController</code> orqali oqimga tashqaridan qiymat qo'shishni o'rganamiz. Oddiy controller bitta tinglovchiga, <code>.broadcast()</code> esa bir nechta tinglovchiga xizmat qiladi."
        },
        {
          "type": "code",
          "title": "controller.dart",
          "code": "import 'dart:async';\n\nFuture<void> main() async {\n  final controller = StreamController<int>();\n  final kuzatuv = controller.stream.listen(\n    (son) => print('Qabul: $son'),\n    onDone: () => print('Oqim yopildi'),\n  );\n\n  controller.add(1);\n  controller.add(2);\n  controller.add(3);\n  await controller.close();\n  await kuzatuv.asFuture<void>();\n}",
          "output": "Qabul: 1\nQabul: 2\nQabul: 3\nOqim yopildi"
        },
        {
          "type": "table",
          "head": [
            "Amal",
            "Metod",
            "Izoh"
          ],
          "rows": [
            [
              "Qiymat qo'shish",
              "<code>add(qiymat)</code>",
              "Tinglovchilarga uzatadi"
            ],
            [
              "Xato uzatish",
              "<code>addError(xato)</code>",
              "onError ishlaydi"
            ],
            [
              "Yopish",
              "<code>close()</code>",
              "onDone ishlaydi"
            ],
            [
              "Tinglash",
              "<code>stream.listen()</code>",
              "StreamSubscription qaytaradi"
            ],
            [
              "Bekor qilish",
              "<code>subscription.cancel()</code>",
              "Resursni bo'shatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "broadcast.dart",
          "code": "import 'dart:async';\n\nFuture<void> main() async {\n  final controller = StreamController<String>.broadcast();\n\n  controller.stream.listen((x) => print('A: $x'));\n  controller.stream.listen((x) => print('B: $x'));\n\n  controller.add('salom');\n  await controller.close();\n  await Future<void>.delayed(Duration.zero);\n}",
          "output": "A: salom\nB: salom"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Single-subscription",
          "html": "Oddiy <code>StreamController</code> oqimiga ikkinchi marta <code>listen</code> qilib bo'lmaydi — <code>StateError</code> chiqadi. Bir nechta tinglovchi kerak bo'lsa <code>.broadcast()</code> ishlating. Controller yopilmasa, resurs ochiq qoladi; <code>close()</code> ni unutmang."
        }
      ],
      "quiz": [
        {
          "q": "StreamController.broadcast() nimani ta'minlaydi?",
          "options": [
            "Bir nechta tinglovchini",
            "Faqat bitta tinglovchini",
            "Sinxron hisoblashni",
            "Faylga yozishni"
          ],
          "answer": 0,
          "explain": "broadcast oqimiga bir vaqtda bir nechta listen ulanishi mumkin va har biri voqealarni oladi."
        },
        {
          "q": "controller.close() chaqirilganda listen ichida qaysi callback ishlaydi?",
          "options": [
            "onError",
            "onDone",
            "onData",
            "onCancel"
          ],
          "answer": 1,
          "explain": "Oqim yopilganda onDone callback bajariladi, agar u listen chaqiruvida berilgan bo'lsa."
        },
        {
          "q": "Oddiy StreamController oqimiga ikkinchi marta listen qilinsa nima bo'ladi?",
          "options": [
            "Ikkala tinglovchi ishlaydi",
            "Oqim avtomatik broadcast bo'ladi",
            "StateError chiqadi",
            "Birinchi tinglovchi bekor qilinadi"
          ],
          "answer": 2,
          "explain": "Oddiy controller single-subscription oqim beradi; ikkinchi listen StateError bilan yakunlanadi."
        }
      ]
    },
    {
      "id": 34,
      "title": "Isolate va parallel hisoblash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Dart asosiy isolate'da bitta event loop bilan ishlaydi. Og'ir hisoblash asosiy oqimni bloklab, interfeysni muzlatishi mumkin. <b>Isolate</b> alohida xotira va event loopga ega bo'lgan parallel bajarilish birligidir. <code>Isolate.run</code> eng oddiy usuldir."
        },
        {
          "type": "code",
          "title": "isolate_run.dart",
          "code": "import 'dart:isolate';\n\nint yigindi(int n) {\n  var sum = 0;\n  for (var i = 1; i <= n; i++) {\n    sum += i;\n  }\n  return sum;\n}\n\nFuture<void> main() async {\n  final natija = await Isolate.run(() => yigindi(1000000));\n  print(natija);\n}",
          "output": "500000500000"
        },
        {
          "type": "ul",
          "items": [
            "Har bir isolate o'z xotirasiga ega; obyektlar to'g'ridan-to'g'ri umumiy xotirada bo'lishmaydi.",
            "<code>Isolate.run</code> funksiyani bajarib, natijasini Future sifatida qaytaradi.",
            "<code>Isolate.spawn</code> uzoq yashovchi isolate yaratadi va <code>SendPort</code> orqali xabar almashadi.",
            "Yuboriladigan xabarlar oddiy qiymatlar yoki sendable obyektlar bo'lishi kerak."
          ]
        },
        {
          "type": "code",
          "title": "spawn.dart",
          "code": "import 'dart:isolate';\n\nFuture<void> main() async {\n  final receive = ReceivePort();\n  final xabar = receive.first;\n\n  await Isolate.spawn(salom, receive.sendPort);\n  final natija = await xabar;\n  print(natija);\n\n  receive.close();\n}\n\nvoid salom(SendPort port) {\n  port.send('Salom, isolate!');\n}",
          "output": "Salom, isolate!"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Qachon isolate kerak?",
          "html": "Katta JSON tahlili, rasm ishlash yoki matematik hisob kabi uzoq ishlar uchun isolate ishlatiladi. Tarmoq va fayl amallari allaqachon asinxron bo'lgani uchun ular uchun alohida isolate shart emas. Flutter'da <code>compute()</code> funksiyasi ham shu maqsadda xizmat qiladi."
        }
      ],
      "quiz": [
        {
          "q": "Isolate'larning xotirasi qanday?",
          "options": [
            "Umumiy, barcha isolate ko'radi",
            "Faqat global o'zgaruvchilar umumiy",
            "Xotira ishlatilmaydi",
            "Har bir isolate o'z xotirasiga ega"
          ],
          "answer": 3,
          "explain": "Isolate'lar xotirani baham ko'rmaydi; ular SendPort orqali xabar yuborib muloqot qiladi."
        },
        {
          "q": "Isolate.run nimani qaytaradi?",
          "options": [
            "Future natija bilan",
            "SendPort",
            "Stream",
            "void"
          ],
          "answer": 0,
          "explain": "Isolate.run berilgan funksiyani alohida isolate'da bajarib, natijasini Future sifatida qaytaradi."
        },
        {
          "q": "Og'ir hisobni asosiy isolate'da bajarishning asosiy muammosi nimada?",
          "options": [
            "Natija noto'g'ri bo'ladi",
            "Event loop bloklanib, UI muzlaydi",
            "Xotira yetmaydi",
            "Dart uni taqiqlaydi"
          ],
          "answer": 1,
          "explain": "Asosiy isolate band bo'lsa, boshqa eventlar navbatda kutadi va Flutter interfeysi javob bermay qoladi."
        }
      ]
    },
    {
      "id": 35,
      "title": "Testlar: package:test asoslari",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Testlar kod to'g'ri ishlashini avtomatik tekshiradi. Dart'da <code>package:test</code> eng ko'p ishlatiladigan test paketidir. Testlar odatda <code>test/</code> papkasida, fayl nomi <code>_test.dart</code> bilan tugaydi va <code>dart test</code> buyrug'i bilan ishga tushiriladi."
        },
        {
          "type": "code",
          "title": "test/qosh_test.dart",
          "code": "import 'package:test/test.dart';\n\nint qosh(int a, int b) => a + b;\n\nvoid main() {\n  group('qosh', () {\n    test('musbat sonlar', () {\n      expect(qosh(2, 3), 5);\n    });\n\n    test('manfiy sonlar', () {\n      expect(qosh(-2, -3), -5);\n    });\n\n    test('nol bilan', () {\n      expect(qosh(0, 7), 7);\n    });\n  });\n}",
          "output": "00:00 +0: loading test/qosh_test.dart\n00:00 +0: qosh musbat sonlar\n00:00 +1: qosh manfiy sonlar\n00:00 +2: qosh nol bilan\n00:00 +3: All tests passed!"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi",
            "Misol"
          ],
          "rows": [
            [
              "<code>test()</code>",
              "Bitta test holati",
              "<code>test('nom', () {})</code>"
            ],
            [
              "<code>group()</code>",
              "Testlarni guruhlaydi",
              "<code>group('qosh', ...)</code>"
            ],
            [
              "<code>expect()</code>",
              "Natijani tekshiradi",
              "<code>expect(2 + 2, 4)</code>"
            ],
            [
              "<code>setUp()</code>",
              "Har test oldidan tayyorlaydi",
              "<code>setUp(() => ...)</code>"
            ],
            [
              "<code>tearDown()</code>",
              "Har testdan keyin tozalaydi",
              "<code>tearDown(() => ...)</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "test/hisoblagich_test.dart",
          "code": "import 'package:test/test.dart';\n\nclass Hisoblagich {\n  int qiymat = 0;\n  void oshir() => qiymat++;\n}\n\nvoid main() {\n  late Hisoblagich hisob;\n\n  setUp(() {\n    hisob = Hisoblagich();\n  });\n\n  test('boshida nol', () {\n    expect(hisob.qiymat, 0);\n  });\n\n  test('oshir qiymatni bittaga oshiradi', () {\n    hisob.oshir();\n    expect(hisob.qiymat, 1);\n  });\n\n  test('matcherlar', () {\n    expect([1, 2, 3], contains(2));\n    expect('Dart', startsWith('Da'));\n    expect(hisob.qiymat, isNot(5));\n  });\n}",
          "output": "00:00 +0: loading test/hisoblagich_test.dart\n00:00 +0: boshida nol\n00:00 +1: oshir qiymatni bittaga oshiradi\n00:00 +2: matcherlar\n00:00 +3: All tests passed!"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Yaxshi test nomi",
          "html": "Test nomi nima tekshirilayotganini aniq aytsin: «bo'sh nom xato beradi», «manfiy sonlar qo'shiladi». Har test faqat bitta xatti-harakatni tekshirsa, xato sababini topish osonlashadi. Testlar bir-biriga bog'liq bo'lmasligi kerak."
        }
      ],
      "quiz": [
        {
          "q": "Dart testlarini ishga tushirish uchun qaysi buyruq ishlatiladi?",
          "options": [
            "dart run test",
            "dart check",
            "dart test",
            "dart build test"
          ],
          "answer": 2,
          "explain": "dart test test/ papkasidagi _test.dart fayllarini topib ishga tushiradi."
        },
        {
          "q": "expect(actual, matcher) funksiyasi nima qiladi?",
          "options": [
            "Yangi test yaratadi",
            "Faylni o'qiydi",
            "Testni o'chiradi",
            "Haqiqiy natijani kutilgan matcher bilan solishtiradi"
          ],
          "answer": 3,
          "explain": "expect birinchi argumentni ikkinchi argumentdagi matcher yoki qiymat bilan taqqoslaydi; mos kelmasa test yiqiladi."
        },
        {
          "q": "setUp() qachon bajariladi?",
          "options": [
            "Har bir testdan oldin",
            "Faqat birinchi testdan oldin",
            "Har bir testdan keyin",
            "Faqat xato bo'lganda"
          ],
          "answer": 0,
          "explain": "setUp har bir test oldidan yangi tayyorgarlik bajarish uchun ishlatiladi; setUpAll esa guruh boshida bir marta ishlaydi."
        }
      ]
    },
    {
      "id": 36,
      "title": "Asinxron kodni test qilish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Asinxron funksiyalarni test qilishda test callback'i <code>async</code> bo'lishi va <code>await</code> ishlatilishi mumkin. Stream va Future xatolarini tekshirish uchun <code>expectLater</code>, <code>throwsA</code>, <code>emitsInOrder</code> kabi matcherlar ishlatiladi."
        },
        {
          "type": "code",
          "title": "test/async_test.dart",
          "code": "import 'package:test/test.dart';\n\nFuture<int> kechikish(int ms, int qiymat) async {\n  await Future<void>.delayed(Duration(milliseconds: ms));\n  return qiymat;\n}\n\nvoid main() {\n  test('future natijasini kutadi', () async {\n    final natija = await kechikish(20, 42);\n    expect(natija, 42);\n  });\n\n  test('xatoni tekshiradi', () {\n    expect(\n      Future<int>.error(StateError('yoq')),\n      throwsA(isA<StateError>()),\n    );\n  });\n\n  test('stream ketma-ketligi', () {\n    expect(\n      Stream.fromIterable([1, 2, 3]),\n      emitsInOrder([1, 2, 3, emitsDone]),\n    );\n  });\n}",
          "output": "00:00 +0: loading test/async_test.dart\n00:00 +0: future natijasini kutadi\n00:00 +1: xatoni tekshiradi\n00:00 +2: stream ketma-ketligi\n00:00 +3: All tests passed!"
        },
        {
          "type": "ul",
          "items": [
            "Test callback'i <code>() async { ... }</code> bo'lsa, ichida <code>await</code> ishlatish mumkin.",
            "<code>throwsA(isA&lt;StateError&gt;())</code> Future yoki funksiya xatosini tekshiradi.",
            "<code>emitsInOrder([...])</code> Stream qiymatlarini ketma-ket tekshiradi.",
            "<code>expectLater</code> asinxron matcherlar uchun Future qaytaradi va uni await qilish mumkin."
          ]
        },
        {
          "type": "code",
          "title": "test/timeout_test.dart",
          "code": "import 'package:test/test.dart';\n\nvoid main() {\n  test('kechikish yakunlanadi', () async {\n    await expectLater(\n      Future<void>.delayed(const Duration(milliseconds: 30)),\n      completes,\n    );\n  }, timeout: const Timeout(Duration(seconds: 2)));\n\n  test('qiymatlar mosligi', () {\n    expect(4 / 2, 2.0);\n    expect('Dart', startsWith('Da'));\n    expect([1, 2], contains(2));\n  });\n}",
          "output": "00:00 +0: loading test/timeout_test.dart\n00:00 +0: kechikish yakunlanadi\n00:00 +1: qiymatlar mosligi\n00:00 +2: All tests passed!"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Vaqtga bog'liq testlar",
          "html": "Haqiqiy <code>Future.delayed</code> bilan uzoq kutish testlarni sekinlashtiradi. Flutter testlarida <code>fakeAsync</code> yoki <code>tester.pump()</code> vaqtni boshqarish uchun ishlatiladi. Tarmoq kabi tashqi bog'liqliklarni mock bilan almashtiring."
        }
      ],
      "quiz": [
        {
          "q": "Asinxron test callback'i qanday yoziladi?",
          "options": [
            "() sync { ... }",
            "() async { ... }",
            "() future { ... }",
            "async () { ... }"
          ],
          "answer": 1,
          "explain": "test('nom', () async { ... }) ko'rinishida callback async bo'ladi va ichida await ishlatiladi."
        },
        {
          "q": "Stream qiymatlarini ketma-ket tekshirish uchun qaysi matcher ishlatiladi?",
          "options": [
            "throwsA",
            "contains",
            "emitsInOrder",
            "isNot"
          ],
          "answer": 2,
          "explain": "emitsInOrder([1, 2, 3]) oqimdan kelgan qiymatlarni berilgan tartibda tekshiradi; emitsDone oqim tugashini bildiradi."
        },
        {
          "q": "Timeout kutishni qisqartirish uchun test() ga qaysi parametr beriladi?",
          "options": [
            "limit",
            "duration",
            "wait",
            "timeout"
          ],
          "answer": 3,
          "explain": "test(..., timeout: const Timeout(Duration(seconds: 2))) test uchun maksimal vaqtni belgilaydi."
        }
      ]
    },
    {
      "id": 37,
      "title": "CLI: argumentlar, stdin va chiqish kodi",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Konsol dasturiga buyruq qatoridan qiymat uzatish uchun <code>main(List&lt;String&gt; args)</code> ishlatiladi. Foydalanuvchidan matn olish uchun <code>stdin.readLineSync()</code>, natijani chiqarish uchun <code>stdout.write()</code> va xatolik holatini bildirish uchun <code>exitCode</code> xizmat qiladi."
        },
        {
          "type": "code",
          "title": "salom_cli.dart",
          "code": "import 'dart:io';\n\nvoid main(List<String> args) {\n  if (args.isEmpty) {\n    stderr.writeln('Foydalanish: dart run salom_cli.dart <ism>');\n    exitCode = 64;\n    return;\n  }\n\n  final ism = args.first;\n  print('Salom, $ism!');\n}",
          "output": "Salom, Aziza!"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi",
            "Misol"
          ],
          "rows": [
            [
              "<code>args</code>",
              "Buyruq qatori argumentlari",
              "<code>dart run salom_cli.dart Aziza</code>"
            ],
            [
              "<code>stdin.readLineSync()</code>",
              "Bir qator kiritishni o'qiydi",
              "Foydalanuvchi matni"
            ],
            [
              "<code>stdout.write()</code>",
              "Yangi qatorsiz chiqaradi",
              "Prompt yozish"
            ],
            [
              "<code>exitCode</code>",
              "Dastur tugash kodini belgilaydi",
              "<code>64</code> — noto'g'ri foydalanish"
            ]
          ]
        },
        {
          "type": "code",
          "title": "ism_kiritish.dart",
          "code": "import 'dart:io';\n\nFuture<void> main() async {\n  stdout.write('Ismingiz: ');\n  final ism = stdin.readLineSync();\n\n  if (ism == null || ism.trim().isEmpty) {\n    print('Ism kiritilmadi');\n    return;\n  }\n\n  final tozalangan = ism.trim();\n  print('Xush kelibsiz, $tozalangan!');\n}",
          "output": "Ismingiz: Aziza\nXush kelibsiz, Aziza!"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Murakkab argumentlar",
          "html": "Ko'p bayroqli CLI uchun <code>package:args</code> ishlatiladi: u <code>--nom qiymat</code> va <code>-v</code> kabi variantlarni tahlil qiladi. <code>readLineSync()</code> oqim tugaganda <code>null</code> qaytaradi, shuning uchun natijani har doim tekshiring. Xato holatida nolga teng bo'lmagan <code>exitCode</code> qaytarish skriptlar uchun muhim."
        }
      ],
      "quiz": [
        {
          "q": "Buyruq qatori argumentlarini olish uchun main qanday imzo bilan yoziladi?",
          "options": [
            "void main(List<String> args)",
            "void main(String args)",
            "void main(Map args)",
            "Future<void> main()"
          ],
          "answer": 0,
          "explain": "Dart argumentlarni List<String> sifatida beradi; main(List<String> args) ularni qabul qiladi."
        },
        {
          "q": "exitCode = 64 nimani bildiradi?",
          "options": [
            "Dastur muvaffaqiyatli tugadi",
            "Noto'g'ri foydalanish kabi xato holati",
            "Dastur 64 sekund ishladi",
            "Fayl 64 marta o'qildi"
          ],
          "answer": 1,
          "explain": "Nolga teng bo'lmagan exitCode xato holatini bildiradi; 64 ko'pincha noto'g'ri buyruq qatori uchun ishlatiladi."
        },
        {
          "q": "stdin.readLineSync() oqim tugaganda nima qaytaradi?",
          "options": [
            "Bo'sh matn",
            "0",
            "null",
            "Xato tashlaydi"
          ],
          "answer": 2,
          "explain": "Kiritish oqimi tugasa yoki mavjud bo'lmasa readLineSync null qaytaradi, shuning uchun tekshirish kerak."
        }
      ]
    },
    {
      "id": 38,
      "title": "Hujjatlashtirish va linterlar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Yaxshi kod nafaqat ishlaydi, balki o'qiladi. Dart'da <code>///</code> bilan yozilgan doc commentlar <code>dart doc</code> orqali hujjatga aylanadi. <code>analysis_options.yaml</code> va <code>dart analyze</code> esa uslub xatolarini erta topadi."
        },
        {
          "type": "code",
          "title": "hujjat.dart",
          "code": "/// Talabaning bahosini foizda hisoblaydi.\n///\n/// [ball] 0 dan 100 gacha bo'lishi kerak.\n/// Xato qiymatda [RangeError] uzatiladi.\ndouble foiz(int ball) {\n  if (ball < 0 || ball > 100) {\n    throw RangeError.range(ball, 0, 100, 'ball');\n  }\n  return ball / 100;\n}\n\nvoid main() {\n  print(foiz(92));\n  print(foiz(50));\n}",
          "output": "0.92\n0.5"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi",
            "Buyruq"
          ],
          "rows": [
            [
              "<code>///</code>",
              "Doc comment yozadi",
              "<code>dart doc .</code>"
            ],
            [
              "<code>@Deprecated</code>",
              "Eski API ni belgilaydi",
              "Analyzer ogohlantiradi"
            ],
            [
              "<code>analysis_options.yaml</code>",
              "Lint qoidalarini sozlaydi",
              "<code>include: package:lints/recommended.yaml</code>"
            ],
            [
              "<code>dart analyze</code>",
              "Xato va ogohlantirishlarni topadi",
              "<code>dart analyze</code>"
            ],
            [
              "<code>dart format</code>",
              "Kod uslubini tekislaydi",
              "<code>dart format .</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "deprecated.dart",
          "code": "@Deprecated('yangiNom() dan foydalaning')\nint eskiNom() => 1;\n\nint yangiNom() => 2;\n\nvoid main() {\n  print(yangiNom());\n  print(eskiNom());\n}",
          "output": "2\n1"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Analyzer xabari",
          "html": "<code>eskiNom()</code> chaqiruvi <code>dart analyze</code> da <code>deprecated_member_use</code> ogohlantirishini beradi, lekin dastur ishlayveradi. Ogohlantirishlarni jiddiy qabul qiling: ular kelajakdagi xatolarning belgisi bo'lishi mumkin. <code>dart fix --apply</code> ba'zi muammolarni avtomatik tuzatadi."
        }
      ],
      "quiz": [
        {
          "q": "Dart'da doc comment qaysi belgi bilan boshlanadi?",
          "options": [
            "//",
            "/*",
            "#",
            "///"
          ],
          "answer": 3,
          "explain": "Uch chiziqli /// doc comment hisoblanadi va dart doc tomonidan hujjatga kiritiladi."
        },
        {
          "q": "dart analyze buyrug'i nima qiladi?",
          "options": [
            "Kodni statik tahlil qilib xato va ogohlantirishlarni topadi",
            "Dasturni ishga tushiradi",
            "Faylni formatlaydi",
            "Paketni yuklab oladi"
          ],
          "answer": 0,
          "explain": "dart analyze kodni bajarishsiz tekshiradi va tur, lint hamda uslub muammolarini ko'rsatadi."
        },
        {
          "q": "@Deprecated annotatsiyasining maqsadi nima?",
          "options": [
            "Kodni tezlashtirish",
            "Eski API ishlatilayotganini ogohlantirish",
            "Faylni o'chirish",
            "Yangi test yaratish"
          ],
          "answer": 1,
          "explain": "Deprecated eski API ekanini bildiradi; analyzer undan foydalanilganda deprecated_member_use ogohlantirishini beradi."
        }
      ]
    },
    {
      "id": 39,
      "title": "Kutubxona va paket tuzilishi",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Katta loyiha bir nechta faylga bo'linadi. <code>lib/</code> papkasidagi kod paket sifatida import qilinadi, <code>bin/</code> esa ishga tushiriladigan dasturlarni saqlaydi. <code>library</code>, <code>export</code> va <code>part</code> direktivalari kodni tartibga soladi, pastki chiziq bilan boshlangan nomlar esa kutubxona ichida yopiq bo'ladi."
        },
        {
          "type": "code",
          "title": "lib/geometriya.dart",
          "code": "library;\n\ndouble yuza(double eni, double boyi) => eni * boyi;\n\ndouble _aylana(double radius) => 2 * 3.14159 * radius;\n\ndouble aylana(double radius) => _aylana(radius);",
          "output": "Analyzing geometriya.dart...\nNo issues found!"
        },
        {
          "type": "ul",
          "items": [
            "<code>import 'package:geometriya/geometriya.dart';</code> boshqa paketdagi ommaviy API ni oladi.",
            "<code>export 'src/matematika.dart';</code> ichki faylni tashqariga qayta eksport qiladi.",
            "<code>part 'hisob.dart';</code> faylni bitta kutubxonaning bo'lagi qiladi; part fayl <code>part of</code> bilan boshlanadi.",
            "<code>_aylana</code> kabi pastki chiziqli nomlar faqat o'z kutubxonasida ko'rinadi."
          ]
        },
        {
          "type": "code",
          "title": "bin/demo.dart",
          "code": "import 'package:geometriya/geometriya.dart';\n\nvoid main() {\n  print(yuza(3, 4));\n  print(aylana(2));\n}",
          "output": "12.0\n12.56636"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Paket nashr etish",
          "html": "Paket nomi <code>pubspec.yaml</code> dagi <code>name</code> bilan bir xil bo'lishi kerak. Nashr etishdan oldin <code>dart pub publish --dry-run</code> tekshiruvi bajariladi. Ichki kodni <code>lib/src/</code> ga joylashtirib, faqat kerakli API ni <code>export</code> qilish odatiy amaliyotdir."
        }
      ],
      "quiz": [
        {
          "q": "Pastki chiziq bilan boshlangan _aylana nomi nimani bildiradi?",
          "options": [
            "Global ommaviy funksiya",
            "Faqat testlarda ishlaydi",
            "Faqat kutubxona ichida ko'rinadi",
            "Xato nom"
          ],
          "answer": 2,
          "explain": "Dart'da _ bilan boshlangan identifikatorlar kutubxona darajasida private hisoblanadi va tashqaridan ko'rinmaydi."
        },
        {
          "q": "export direktivasi nima qiladi?",
          "options": [
            "Faylni o'chiradi",
            "Yangi paket yuklaydi",
            "Kodni ishga tushiradi",
            "Boshqa kutubxona API sini qayta eksport qiladi"
          ],
          "answer": 3,
          "explain": "export o'z kutubxonangiz orqali boshqa faylning ommaviy API sini tashqariga taqdim etadi."
        },
        {
          "q": "part direktivasi bilan bog'langan fayl qanday boshlanadi?",
          "options": [
            "part of bilan",
            "import bilan",
            "library faqat",
            "main bilan"
          ],
          "answer": 0,
          "explain": "Part fayl qaysi kutubxonaga tegishli ekanini part of 'asosiy.dart'; yozuvi bilan bildiradi."
        }
      ]
    },
    {
      "id": 40,
      "title": "Flutter asoslari: widget daraxti",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Flutter — Dart asosidagi UI framework. Interfeys <b>widget</b>lardan quriladi: matn, tugma, qator, ustun va butun ekran ham widget. <code>runApp()</code> ildiz widgetni ishga tushiradi, <code>MaterialApp</code> va <code>Scaffold</code> esa ilova va ekran skeletini beradi."
        },
        {
          "type": "code",
          "title": "main.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  debugPrint('Noldan ilovasi ishga tushdi');\n  runApp(const NoldanApp());\n}\n\nclass NoldanApp extends StatelessWidget {\n  const NoldanApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Noldan',\n      home: Scaffold(\n        appBar: AppBar(title: const Text('Noldan')),\n        body: const Center(\n          child: Text('Salom, Flutter!'),\n        ),\n      ),\n    );\n  }\n}",
          "output": "flutter: Noldan ilovasi ishga tushdi"
        },
        {
          "type": "table",
          "head": [
            "Widget",
            "Vazifasi",
            "Misol"
          ],
          "rows": [
            [
              "<code>MaterialApp</code>",
              "Ilova mavzusi va navigatsiyasi",
              "<code>MaterialApp(home: ...)</code>"
            ],
            [
              "<code>Scaffold</code>",
              "Ekran skeleti: AppBar, body",
              "<code>Scaffold(body: ...)</code>"
            ],
            [
              "<code>Text</code>",
              "Matn ko'rsatadi",
              "<code>Text('Salom')</code>"
            ],
            [
              "<code>Column</code>",
              "Bolalarni vertikal joylaydi",
              "<code>Column(children: [...])</code>"
            ],
            [
              "<code>Center</code>",
              "Bolani markazga qo'yadi",
              "<code>Center(child: ...)</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "karta.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  debugPrint('Karta tayyor: Dart kursi');\n  runApp(const MaterialApp(home: KursKartasi()));\n}\n\nclass KursKartasi extends StatelessWidget {\n  const KursKartasi({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: Center(\n        child: Card(\n          child: Padding(\n            padding: const EdgeInsets.all(24),\n            child: Column(\n              mainAxisSize: MainAxisSize.min,\n              children: const [\n                Icon(Icons.code, size: 48),\n                SizedBox(height: 12),\n                Text('Dart kursi', style: TextStyle(fontSize: 22)),\n                Text('49 dars'),\n              ],\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}",
          "output": "flutter: Karta tayyor: Dart kursi"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Hot reload",
          "html": "Flutter ilovasini <code>flutter run</code> bilan ishga tushiring. Kodni o'zgartirib saqlasangiz, hot reload interfeysni tez yangilaydi. Widgetlar o'zgarmas (immutable); <code>build()</code> metodini qayta chaqirish orqali ekran yangilanadi. Flutter loyihasida <code>pubspec.yaml</code> ga <code>flutter</code> SDK bog'liqligi qo'shiladi."
        }
      ],
      "quiz": [
        {
          "q": "Flutter ilovasini ishga tushirish uchun qaysi funksiya chaqiriladi?",
          "options": [
            "mainApp()",
            "runApp()",
            "startFlutter()",
            "buildApp()"
          ],
          "answer": 1,
          "explain": "runApp() ildiz widgetni olib, Flutter engine bilan bog'laydi va ilovani ishga tushiradi."
        },
        {
          "q": "StatelessWidget ichidagi build() metodi nima qaytaradi?",
          "options": [
            "void",
            "Future<Widget>",
            "Widget",
            "String"
          ],
          "answer": 2,
          "explain": "build(BuildContext context) Widget qaytaradi; bu widget daraxtning bir qismini tavsiflaydi."
        },
        {
          "q": "Qaysi widget ekran skeleti va AppBar uchun asos bo'ladi?",
          "options": [
            "Text",
            "Padding",
            "Icon",
            "Scaffold"
          ],
          "answer": 3,
          "explain": "Scaffold appBar, body, floatingActionButton kabi ekran qismlarini joylash uchun skelet beradi."
        }
      ]
    },
    {
      "id": 41,
      "title": "Flutter layout: Row, Column va Expanded",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Flutter'da joylashuv <b>constraints</b> (cheklovlar) orqali hisoblanadi: ota widget bolaga maksimal kenglik va balandlik beradi. <code>Row</code> gorizontal, <code>Column</code> vertikal joylaydi. <code>Expanded</code> bo'sh joyni bolalar o'rtasida teng taqsimlaydi."
        },
        {
          "type": "code",
          "title": "layout.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  debugPrint('Layout demo ishga tushdi');\n  runApp(const MaterialApp(home: LayoutDemo()));\n}\n\nclass LayoutDemo extends StatelessWidget {\n  const LayoutDemo({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Layout')),\n      body: Center(\n        child: SizedBox(\n          width: 360,\n          child: LayoutBuilder(\n            builder: (context, constraints) {\n              final karta = (constraints.maxWidth - 32 - 12) / 2;\n              debugPrint('Kenglik: ' + constraints.maxWidth.toString());\n              debugPrint('Karta: ' + karta.toString());\n              return Padding(\n                padding: const EdgeInsets.all(16),\n                child: Column(\n                  children: [\n                    const Text('Dart kursi'),\n                    const SizedBox(height: 12),\n                    Row(\n                      children: [\n                        Expanded(child: _karta('Darslar', '49')),\n                        const SizedBox(width: 12),\n                        Expanded(child: _karta('Testlar', '147')),\n                      ],\n                    ),\n                  ],\n                ),\n              );\n            },\n          ),\n        ),\n      ),\n    );\n  }\n\n  Widget _karta(String nom, String qiymat) {\n    return Container(\n      padding: const EdgeInsets.all(20),\n      decoration: BoxDecoration(\n        color: Colors.blue.shade50,\n        borderRadius: BorderRadius.circular(12),\n      ),\n      child: Column(\n        children: [Text(nom), Text(qiymat)],\n      ),\n    );\n  }\n}",
          "output": "flutter: Layout demo ishga tushdi\nflutter: Kenglik: 360.0\nflutter: Karta: 158.0"
        },
        {
          "type": "ul",
          "items": [
            "<code>Row</code> bolalarni gorizontal, <code>Column</code> vertikal joylaydi.",
            "<code>Expanded</code> faqat Row yoki Column ichida ishlaydi va qolgan bo'sh joyni egallaydi.",
            "<code>mainAxisAlignment</code> asosiy o'q bo'ylab, <code>crossAxisAlignment</code> ko'ndalang o'q bo'ylab tekislaydi.",
            "<code>SizedBox</code> aniq o'lcham yoki bolalar orasidagi masofa uchun ishlatiladi."
          ]
        },
        {
          "type": "code",
          "title": "hisob.dart",
          "code": "double kartaKengligi(double ekran, {double padding = 16, double oraliq = 12}) {\n  return (ekran - padding * 2 - oraliq) / 2;\n}\n\nvoid main() {\n  for (final ekran in [320.0, 360.0, 414.0]) {\n    final kenglik = kartaKengligi(ekran);\n    print('$ekran -> $kenglik');\n  }\n}",
          "output": "320.0 -> 138.0\n360.0 -> 158.0\n414.0 -> 185.0"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Cheksiz balandlik",
          "html": "Column ichidagi <code>Expanded</code> cheksiz balandlikda ishlamaydi, chunki taqsimlanadigan cheklov yo'q. Row/Column bolalari juda katta bo'lsa, ekranda sariq-qora overflow chizig'i paydo bo'ladi. <code>Expanded</code>, <code>Flexible</code> yoki <code>SingleChildScrollView</code> bilan cheklovlarni boshqaring."
        }
      ],
      "quiz": [
        {
          "q": "Row ichida bolalar o'rtasida bo'sh joyni teng taqsimlash uchun qaysi widget ishlatiladi?",
          "options": [
            "Expanded",
            "Padding",
            "Center",
            "SizedBox"
          ],
          "answer": 0,
          "explain": "Expanded Row yoki Column ichida qolgan bo'sh joyni flex qoidasi bo'yicha egallaydi."
        },
        {
          "q": "Column qaysi yo'nalishda joylaydi?",
          "options": [
            "Gorizontal",
            "Vertikal",
            "Aylana bo'ylab",
            "Faqat markazda"
          ],
          "answer": 1,
          "explain": "Column bolalarni vertikal (yuqoridan pastga) joylaydi; Row gorizontal joylaydi."
        },
        {
          "q": "Flutter'da layout qanday hisoblanadi?",
          "options": [
            "Faqat ranglar asosida",
            "Fayl o'lchami asosida",
            "Ota bergan constraints asosida",
            "Tasodifiy"
          ],
          "answer": 2,
          "explain": "Flutter layout modelida ota widget bolaga cheklovlar beradi, bola esa o'z o'lchamini shu cheklovlar ichida tanlaydi."
        }
      ]
    },
    {
      "id": 42,
      "title": "Flutter holat: StatefulWidget va setState",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "O'zgaruvchan ma'lumot <b>state</b> deyiladi. <code>StatelessWidget</code> o'zgarmaydi, <code>StatefulWidget</code> esa state obyekti orqali qiymatlarni saqlaydi. <code>setState()</code> state o'zgarganini bildiradi va Flutter tegishli widgetni qayta quradi."
        },
        {
          "type": "code",
          "title": "hisoblagich.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const HisoblagichApp());\n\nclass HisoblagichApp extends StatelessWidget {\n  const HisoblagichApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return const MaterialApp(home: HisoblagichSahifasi());\n  }\n}\n\nclass HisoblagichSahifasi extends StatefulWidget {\n  const HisoblagichSahifasi({super.key});\n\n  @override\n  State<HisoblagichSahifasi> createState() => _HisoblagichSahifasiState();\n}\n\nclass _HisoblagichSahifasiState extends State<HisoblagichSahifasi> {\n  int son = 0;\n\n  void oshir() {\n    setState(() {\n      son++;\n    });\n    debugPrint('Son: $son');\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Hisoblagich')),\n      body: Center(\n        child: Column(\n          mainAxisSize: MainAxisSize.min,\n          children: [\n            Text('$son', style: const TextStyle(fontSize: 48)),\n            const SizedBox(height: 16),\n            ElevatedButton(\n              onPressed: oshir,\n              child: const Text('Oshirish'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}",
          "output": "flutter: Son: 1\nflutter: Son: 2\nflutter: Son: 3"
        },
        {
          "type": "table",
          "head": [
            "Metod",
            "Qachon ishlaydi",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>initState()</code>",
              "State birinchi marta yaratilganda",
              "Boshlang'ich sozlash"
            ],
            [
              "<code>build()</code>",
              "Har qayta qurishda",
              "Widget daraxtini qaytaradi"
            ],
            [
              "<code>setState()</code>",
              "State o'zgarganda",
              "Qayta qurishni so'raydi"
            ],
            [
              "<code>dispose()</code>",
              "State yo'q qilinganda",
              "Resurslarni bo'shatadi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "ism_form.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: IsmForm()));\n\nclass IsmForm extends StatefulWidget {\n  const IsmForm({super.key});\n\n  @override\n  State<IsmForm> createState() => _IsmFormState();\n}\n\nclass _IsmFormState extends State<IsmForm> {\n  final _controller = TextEditingController();\n\n  @override\n  void dispose() {\n    _controller.dispose();\n    super.dispose();\n  }\n\n  void yubor() {\n    final ism = _controller.text.trim();\n    if (ism.isEmpty) {\n      debugPrint('Ism kiritilmadi');\n      return;\n    }\n    debugPrint('Salom, $ism!');\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Ism')),\n      body: Padding(\n        padding: const EdgeInsets.all(16),\n        child: Column(\n          children: [\n            TextField(\n              controller: _controller,\n              decoration: const InputDecoration(labelText: 'Ismingiz'),\n            ),\n            const SizedBox(height: 12),\n            ElevatedButton(\n              onPressed: yubor,\n              child: const Text('Yuborish'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}",
          "output": "flutter: Ism kiritilmadi\nflutter: Salom, Aziza!"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "State bilan ehtiyotkorlik",
          "html": "State o'zgarganda uni <code>setState</code> ichida yangilang, aks holda interfeys yangilanmaydi. Widget yo'q qilingandan keyin <code>setState</code> chaqirmang — <code>mounted</code> ni tekshiring. <code>TextEditingController</code> kabi resurslarni <code>dispose()</code> da bo'shating."
        }
      ],
      "quiz": [
        {
          "q": "setState() chaqirilganda Flutter nima qiladi?",
          "options": [
            "Ilovani yopadi",
            "Faylni saqlaydi",
            "Yangi isolate yaratadi",
            "Tegishli widgetni qayta qurishni rejalashtiradi"
          ],
          "answer": 3,
          "explain": "setState state o'zgarganini bildiradi va Flutter keyingi freymda widgetni qayta build qiladi."
        },
        {
          "q": "StatefulWidget'ning state obyekti qaysi metodda yaratiladi?",
          "options": [
            "createState()",
            "build()",
            "dispose()",
            "initState()"
          ],
          "answer": 0,
          "explain": "StatefulWidget createState() metodini qayta yozib, State avlodini yaratadi; initState keyin chaqiriladi."
        },
        {
          "q": "TextEditingController qachon dispose qilinishi kerak?",
          "options": [
            "Har build da",
            "State yo'q qilinayotganda dispose() ichida",
            "Faqat ilova boshida",
            "Hech qachon"
          ],
          "answer": 1,
          "explain": "Controller resurs egasi; u state bilan birga dispose() da bo'shatilishi kerak, aks holda xotira oqishi mumkin."
        }
      ]
    },
    {
      "id": 43,
      "title": "Flutter ro'yxatlar va navigatsiya",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Uzun ro'yxatlarni <code>ListView.builder</code> bilan yaratish samarali: u faqat ko'rinib turgan elementlarni quradi. <code>ListTile</code> har bir qatorni chiroyli joylaydi. Ekranlar orasida o'tish uchun <code>Navigator.push</code>, orqaga qaytish uchun <code>Navigator.pop</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "kurslar.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: KurslarSahifasi()));\n\nclass KurslarSahifasi extends StatelessWidget {\n  const KurslarSahifasi({super.key});\n\n  static const kurslar = ['Dart', 'Flutter', 'SQL', 'Git'];\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Kurslar')),\n      body: ListView.builder(\n        itemCount: kurslar.length,\n        itemBuilder: (context, index) {\n          final nom = kurslar[index];\n          return ListTile(\n            title: Text(nom),\n            trailing: const Icon(Icons.chevron_right),\n            onTap: () {\n              debugPrint('Tanlandi: $nom');\n              Navigator.push(\n                context,\n                MaterialPageRoute(\n                  builder: (context) => DarsSahifasi(nom: nom),\n                ),\n              );\n            },\n          );\n        },\n      ),\n    );\n  }\n}\n\nclass DarsSahifasi extends StatelessWidget {\n  final String nom;\n\n  const DarsSahifasi({super.key, required this.nom});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text(nom)),\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () {\n            debugPrint('Orqaga: $nom');\n            Navigator.pop(context);\n          },\n          child: const Text('Orqaga'),\n        ),\n      ),\n    );\n  }\n}",
          "output": "flutter: Tanlandi: Dart\nflutter: Orqaga: Dart"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Vazifasi",
            "Misol"
          ],
          "rows": [
            [
              "<code>ListView.builder</code>",
              "Ro'yxatni lazily quradi",
              "<code>itemCount, itemBuilder</code>"
            ],
            [
              "<code>ListTile</code>",
              "Standart ro'yxat qatori",
              "<code>ListTile(title: ...)</code>"
            ],
            [
              "<code>Navigator.push</code>",
              "Yangi ekranga o'tadi",
              "<code>MaterialPageRoute</code>"
            ],
            [
              "<code>Navigator.pop</code>",
              "Oldingi ekranga qaytadi",
              "<code>Navigator.pop(context)</code>"
            ],
            [
              "<code>pushNamed</code>",
              "Nomlangan route orqali o'tadi",
              "<code>Navigator.pushNamed(context, '/dars')</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "routes.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(MaterialApp(\n    home: const BoshSahifa(),\n    routes: {\n      '/dars': (context) => const DarsSahifasi(),\n    },\n  ));\n}\n\nclass BoshSahifa extends StatelessWidget {\n  const BoshSahifa({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () {\n            debugPrint('Route: /dars');\n            Navigator.pushNamed(context, '/dars');\n          },\n          child: const Text('Darsni ochish'),\n        ),\n      ),\n    );\n  }\n}\n\nclass DarsSahifasi extends StatelessWidget {\n  const DarsSahifasi({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Dars')),\n      body: const Center(child: Text('Dart asoslari')),\n    );\n  }\n}",
          "output": "flutter: Route: /dars"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Argument uzatish",
          "html": "Ma'lumotni yangi ekranga konstruktor orqali uzating: <code>DarsSahifasi(nom: nom)</code>. Bu tur xavfsiz va oddiy usul. Katta ilovalarda <code>go_router</code> kabi paketlar chuqur havolalar va route parametrlarini qulay boshqaradi. <code>Navigator.push</code> Future qaytaradi; u orqali qaytgan natijani ham olish mumkin."
        }
      ],
      "quiz": [
        {
          "q": "ListView.builder ning afzalligi nimada?",
          "options": [
            "Barcha elementlarni birdan quradi",
            "Internetdan ma'lumot yuklaydi",
            "Faqat ko'rinib turgan elementlarni quradi",
            "Navigatsiyani boshqaradi"
          ],
          "answer": 2,
          "explain": "ListView.builder elementlarni talab bo'lganda quradi, shuning uchun uzun ro'yxatlarda xotira va tezlik tejaladi."
        },
        {
          "q": "Oldingi ekranga qaytish uchun qaysi metod ishlatiladi?",
          "options": [
            "Navigator.push",
            "Navigator.remove",
            "Navigator.open",
            "Navigator.pop"
          ],
          "answer": 3,
          "explain": "Navigator.pop joriy route ni yopib, oldingi ekranga qaytaradi."
        },
        {
          "q": "Navigator.pushNamed(context, '/dars') qayerdan route topadi?",
          "options": [
            "MaterialApp routes jadvalidan",
            "Fayl tizimidan",
            "pubspec.yaml dan",
            "Navigator ichki bazasidan"
          ],
          "answer": 0,
          "explain": "pushNamed nomlangan route ni MaterialApp yoki Navigator route jadvalida qidiradi."
        }
      ]
    },
    {
      "id": 44,
      "title": "Flutter formalar va validatsiya",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Foydalanuvchi kiritgan ma'lumotni tekshirish uchun <code>Form</code>, <code>TextFormField</code> va <code>validator</code> ishlatiladi. <code>GlobalKey&lt;FormState&gt;</code> orqali butun formani tekshirish mumkin. Validator <code>null</code> qaytarsa maydon to'g'ri, matn qaytarsa xato ko'rsatiladi."
        },
        {
          "type": "code",
          "title": "royxat_form.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: RoyxatForm()));\n\nclass RoyxatForm extends StatefulWidget {\n  const RoyxatForm({super.key});\n\n  @override\n  State<RoyxatForm> createState() => _RoyxatFormState();\n}\n\nclass _RoyxatFormState extends State<RoyxatForm> {\n  final _formKey = GlobalKey<FormState>();\n  final _ism = TextEditingController();\n  final _yosh = TextEditingController();\n\n  @override\n  void dispose() {\n    _ism.dispose();\n    _yosh.dispose();\n    super.dispose();\n  }\n\n  void yubor() {\n    if (!_formKey.currentState!.validate()) {\n      debugPrint('Formada xato bor');\n      return;\n    }\n    debugPrint('Yuborildi: ' + _ism.text.trim() + ', ' + _yosh.text);\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Royxatdan o\\'tish')),\n      body: Form(\n        key: _formKey,\n        child: ListView(\n          padding: const EdgeInsets.all(16),\n          children: [\n            TextFormField(\n              controller: _ism,\n              decoration: const InputDecoration(labelText: 'Ism'),\n              validator: (qiymat) {\n                if (qiymat == null || qiymat.trim().isEmpty) {\n                  return 'Ism kiriting';\n                }\n                if (qiymat.trim().length < 3) {\n                  return 'Kamida 3 harf';\n                }\n                return null;\n              },\n            ),\n            const SizedBox(height: 12),\n            TextFormField(\n              controller: _yosh,\n              keyboardType: TextInputType.number,\n              decoration: const InputDecoration(labelText: 'Yosh'),\n              validator: (qiymat) {\n                final yosh = int.tryParse(qiymat ?? '');\n                if (yosh == null || yosh < 7) {\n                  return 'Yosh 7 dan katta bo\\'lsin';\n                }\n                return null;\n              },\n            ),\n            const SizedBox(height: 20),\n            ElevatedButton(\n              onPressed: yubor,\n              child: const Text('Yuborish'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}",
          "output": "flutter: Formada xato bor\nflutter: Yuborildi: Aziza, 15"
        },
        {
          "type": "ul",
          "items": [
            "<code>Form</code> barcha <code>TextFormField</code>larni bitta guruhga birlashtiradi.",
            "<code>validator</code> xato matnini qaytarsa, maydon ostida shu matn ko'rinadi.",
            "<code>_formKey.currentState!.validate()</code> barcha maydonlarni tekshiradi va bool qaytaradi.",
            "<code>TextEditingController</code> maydon matnini o'qish va boshqarish uchun ishlatiladi."
          ]
        },
        {
          "type": "code",
          "title": "validatsiya.dart",
          "code": "String? yoshXatosi(String? matn) {\n  final yosh = int.tryParse(matn ?? '');\n  if (yosh == null) return 'Son kiriting';\n  if (yosh < 7) return 'Juda kichik';\n  if (yosh > 100) return 'Juda katta';\n  return null;\n}\n\nvoid main() {\n  for (final qiymat in ['', 'abc', '5', '15', '120']) {\n    final xato = yoshXatosi(qiymat);\n    print('$qiymat -> $xato');\n  }\n}",
          "output": " -> Son kiriting\nabc -> Son kiriting\n5 -> Juda kichik\n15 -> null\n120 -> Juda katta"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Foydalanuvchiga yordam",
          "html": "Validatsiya xabarlari aniq va harakatga undovchi bo'lsin: «Yosh 7 dan katta bo'lsin» «Xato» dan foydaliroq. Maydonlarni <code>autovalidateMode</code> bilan jonli tekshirish mumkin. Serverga yuborishdan oldin ham ma'lumotni qayta tekshiring — mijoz tekshiruvi xavfsizlik kafolati emas."
        }
      ],
      "quiz": [
        {
          "q": "TextFormField validator funksiyasi null qaytarsa nimani bildiradi?",
          "options": [
            "Maydonda xato bor",
            "Maydon to'g'ri to'ldirilgan",
            "Maydon o'chirilgan",
            "Forma yuborilmagan"
          ],
          "answer": 1,
          "explain": "validator null qaytarsa xato yo'q; matn qaytarsa o'sha matn xato xabari sifatida ko'rsatiladi."
        },
        {
          "q": "Barcha forma maydonlarini tekshirish uchun qaysi chaqiruv ishlatiladi?",
          "options": [
            "formKey.build()",
            "Form.check()",
            "formKey.currentState!.validate()",
            "TextFormField.validateAll()"
          ],
          "answer": 2,
          "explain": "GlobalKey<FormState> orqali currentState olinib, validate() barcha maydon validatorlarini ishga tushiradi."
        },
        {
          "q": "TextEditingController nima uchun kerak?",
          "options": [
            "Faqat rangni o'zgartirish",
            "Navigatsiyani boshqarish",
            "Faylni saqlash",
            "Maydon matnini o'qish va boshqarish"
          ],
          "answer": 3,
          "explain": "Controller maydondagi matnni o'qish, o'zgartirish va tozalash imkonini beradi; u dispose qilinishi kerak."
        }
      ]
    },
    {
      "id": 45,
      "title": "Flutter: HTTP, JSON va FutureBuilder",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Flutter ilovasi ma'lumotni ko'pincha serverdan oladi. <code>package:http</code> so'rov yuboradi, <code>jsonDecode</code> javobni modelga aylantiradi, <code>FutureBuilder</code> esa yuklanish, xato va tayyor holatlarni interfeysda ko'rsatadi."
        },
        {
          "type": "code",
          "title": "talaba_api.dart",
          "code": "import 'dart:convert';\nimport 'package:http/http.dart' as http;\nimport 'package:http/testing.dart';\n\nclass Talaba {\n  final String ism;\n  final int ball;\n\n  const Talaba(this.ism, this.ball);\n\n  factory Talaba.fromJson(Map<String, dynamic> json) {\n    return Talaba(json['ism'] as String, json['ball'] as int);\n  }\n}\n\nclass TalabaApi {\n  final http.Client client;\n\n  const TalabaApi(this.client);\n\n  Future<List<Talaba>> ol() async {\n    final javob = await client.get(Uri.parse('https://noldan.uz/api/talabalar'));\n    if (javob.statusCode != 200) {\n      throw Exception('Server xatosi: ' + javob.statusCode.toString());\n    }\n    final data = jsonDecode(javob.body) as List<dynamic>;\n    return data\n        .map((e) => Talaba.fromJson(e as Map<String, dynamic>))\n        .toList();\n  }\n}\n\nFuture<void> main() async {\n  final client = MockClient((request) async {\n    return http.Response(\n      '[{\"ism\":\"Aziza\",\"ball\":92},{\"ism\":\"Bek\",\"ball\":85}]',\n      200,\n    );\n  });\n\n  final api = TalabaApi(client);\n  final talabalar = await api.ol();\n\n  print(talabalar.map((t) => t.ism).toList());\n  print(talabalar.length);\n}",
          "output": "[Aziza, Bek]\n2"
        },
        {
          "type": "table",
          "head": [
            "Holat",
            "FutureBuilder maydoni",
            "Interfeys"
          ],
          "rows": [
            [
              "Yuklanmoqda",
              "<code>connectionState == waiting</code>",
              "Progress indikator"
            ],
            [
              "Xato",
              "<code>snapshot.hasError</code>",
              "Xato xabari"
            ],
            [
              "Tayyor",
              "<code>snapshot.hasData</code>",
              "Ma'lumot ro'yxati"
            ],
            [
              "Bo'sh",
              "<code>data.isEmpty</code>",
              "Bo'sh holat matni"
            ]
          ]
        },
        {
          "type": "code",
          "title": "talabalar_sahifasi.dart",
          "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: TalabalarSahifasi()));\n\nclass TalabalarSahifasi extends StatefulWidget {\n  const TalabalarSahifasi({super.key});\n\n  @override\n  State<TalabalarSahifasi> createState() => _TalabalarSahifasiState();\n}\n\nclass _TalabalarSahifasiState extends State<TalabalarSahifasi> {\n  late Future<List<String>> _kelajak;\n\n  @override\n  void initState() {\n    super.initState();\n    _kelajak = _yukla();\n  }\n\n  Future<List<String>> _yukla() async {\n    await Future<void>.delayed(const Duration(milliseconds: 100));\n    return ['Aziza', 'Bek'];\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Talabalar')),\n      body: FutureBuilder<List<String>>(\n        future: _kelajak,\n        builder: (context, snapshot) {\n          if (snapshot.connectionState == ConnectionState.waiting) {\n            return const Center(child: CircularProgressIndicator());\n          }\n          if (snapshot.hasError) {\n            return Center(child: Text('Xato: ' + snapshot.error.toString()));\n          }\n          final ismlar = snapshot.data ?? [];\n          debugPrint('Yuklandi: ' + ismlar.length.toString());\n          return ListView(\n            children: [\n              for (final ism in ismlar) ListTile(title: Text(ism)),\n            ],\n          );\n        },\n      ),\n    );\n  }\n}",
          "output": "flutter: Yuklandi: 2"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Future'ni build ichida yaratmang",
          "html": "<code>FutureBuilder(future: api.ol())</code> har build da yangi so'rov yuboradi. Future'ni <code>initState</code> da bir marta yarating yoki state'da saqlang. Yangilash uchun <code>RefreshIndicator</code> bilan yangi Future yaratib, <code>setState</code> qiling. Tarmoq xatosi va bo'sh javobni ham alohida ko'rsating."
        }
      ],
      "quiz": [
        {
          "q": "FutureBuilder snapshot.connectionState waiting bo'lsa nimani ko'rsatish odatiy?",
          "options": [
            "Progress indikator",
            "Xato xabari",
            "Yakuniy ma'lumot",
            "Bo'sh ekran"
          ],
          "answer": 0,
          "explain": "waiting holati future hali tugamaganini bildiradi; foydalanuvchiga yuklanish indikatori ko'rsatiladi."
        },
        {
          "q": "HTTP javob statusCode 200 dan farqli bo'lsa nima qilish kerak?",
          "options": [
            "Baribir JSON tahlil qilish",
            "Xatoni ko'rsatish va qayta ishlash",
            "Dasturni o'chirish",
            "statusCode ni e'tiborsiz qoldirish"
          ],
          "answer": 1,
          "explain": "200-299 dan tashqari kodlar xatoni bildiradi; foydalanuvchiga tushunarli xabar berish va qayta urinish kerak."
        },
        {
          "q": "FutureBuilder uchun Future'ni qayerda yaratish tavsiya etiladi?",
          "options": [
            "Har build ichida",
            "main() ichida har safar",
            "initState yoki state ichida bir marta",
            "validator ichida"
          ],
          "answer": 2,
          "explain": "Future build ichida yaratilsa, har qayta qurishda yangi so'rov ketadi; uni initState da bir marta yaratib saqlash kerak."
        }
      ]
    },
    {
      "id": 46,
      "title": "Loyiha 1: domen modeli va repozitoriy",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi uch darslik amaliy loyiha boshlaymiz: «Kurs boshqaruvi» konsol ilovasi. Birinchi qadamda domendagi <code>Vazifa</code> modelini va xotiradagi <code>VazifaRepozitoriy</code> ni yaratamiz. Model o'zgarmas bo'lib, holat o'zgarganda <code>nusxa</code> qaytaradi."
        },
        {
          "type": "code",
          "title": "model.dart",
          "code": "enum Holat { rejalashtirilgan, jarayonda, tugagan }\n\nclass Vazifa {\n  final String id;\n  final String nom;\n  final Holat holat;\n  final DateTime muddat;\n\n  const Vazifa({\n    required this.id,\n    required this.nom,\n    this.holat = Holat.rejalashtirilgan,\n    required this.muddat,\n  });\n\n  Vazifa nusxa({Holat? holat}) {\n    return Vazifa(\n      id: id,\n      nom: nom,\n      holat: holat ?? this.holat,\n      muddat: muddat,\n    );\n  }\n\n  Map<String, dynamic> toJson() {\n    return {\n      'id': id,\n      'nom': nom,\n      'holat': holat.name,\n      'muddat': muddat.toIso8601String(),\n    };\n  }\n\n  factory Vazifa.fromJson(Map<String, dynamic> json) {\n    return Vazifa(\n      id: json['id'] as String,\n      nom: json['nom'] as String,\n      holat: Holat.values.byName(json['holat'] as String),\n      muddat: DateTime.parse(json['muddat'] as String),\n    );\n  }\n}\n\nvoid main() {\n  final v = Vazifa(\n    id: 'v1',\n    nom: 'Dart loyihasi',\n    muddat: DateTime(2026, 11, 1),\n  );\n\n  print(v.nom);\n  print(v.holat.name);\n  print(v.toJson());\n\n  final yangi = v.nusxa(holat: Holat.jarayonda);\n  print(yangi.holat.name);\n}",
          "output": "Dart loyihasi\nrejalashtirilgan\n{id: v1, nom: Dart loyihasi, holat: rejalashtirilgan, muddat: 2026-11-01T00:00:00.000}\njarayonda"
        },
        {
          "type": "table",
          "head": [
            "Qatlam",
            "Vazifasi",
            "Bu loyihada"
          ],
          "rows": [
            [
              "Model",
              "Domen ma'lumoti va qoidalar",
              "<code>Vazifa</code>, <code>Holat</code>"
            ],
            [
              "Repozitoriy",
              "Saqlash va olish",
              "<code>VazifaRepozitoriy</code>"
            ],
            [
              "Xizmat",
              "Biznes-qoidalar",
              "Keyingi darsda"
            ],
            [
              "Interfeys",
              "Foydalanuvchi bilan muloqot",
              "CLI menyu"
            ]
          ]
        },
        {
          "type": "code",
          "title": "repozitoriy.dart",
          "code": "import 'model.dart';\n\nclass VazifaRepozitoriy {\n  final Map<String, Vazifa> _xotira = {};\n\n  void saqla(Vazifa v) {\n    _xotira[v.id] = v;\n  }\n\n  Vazifa? top(String id) => _xotira[id];\n\n  List<Vazifa> hammasi() {\n    final royxat = _xotira.values.toList();\n    royxat.sort((a, b) => a.muddat.compareTo(b.muddat));\n    return royxat;\n  }\n\n  bool ochir(String id) => _xotira.remove(id) != null;\n}\n\nvoid main() {\n  final repo = VazifaRepozitoriy();\n  repo.saqla(Vazifa(\n    id: 'v2',\n    nom: 'Flutter demo',\n    muddat: DateTime(2026, 12, 1),\n  ));\n  repo.saqla(Vazifa(\n    id: 'v1',\n    nom: 'Dart loyihasi',\n    muddat: DateTime(2026, 11, 1),\n  ));\n\n  for (final v in repo.hammasi()) {\n    print(v.nom);\n  }\n\n  print(repo.ochir('v2'));\n  print(repo.hammasi().length);\n}",
          "output": "Dart loyihasi\nFlutter demo\ntrue\n1"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Nega repozitoriy?",
          "html": "Repozitoriy ma'lumot saqlash tafsilotlarini biznes mantiqdan ajratadi. Bugun xotira, ertaga JSON fayl yoki API bo'lishi mumkin — qolgan kod o'zgarmaydi. Modelni o'zgarmas qilish esa kutilmagan yon ta'sirlarni kamaytiradi va test yozishni osonlashtiradi."
        }
      ],
      "quiz": [
        {
          "q": "Vazifa modelidagi nusxa metodi nima uchun kerak?",
          "options": [
            "Obyektni o'chirish uchun",
            "Faylni saqlash uchun",
            "JSON tahlil qilish uchun",
            "Maydonni o'zgartirib yangi nusxa olish uchun"
          ],
          "answer": 3,
          "explain": "nusxa o'zgarmas modelning kerakli maydonini yangilab, yangi Vazifa qaytaradi; asl obyekt o'zgarmaydi."
        },
        {
          "q": "VazifaRepozitoriy.hammasi() ro'yxatni qanday tartiblaydi?",
          "options": [
            "Muddat bo'yicha o'sish tartibida",
            "Nom bo'yicha alifbo tartibida",
            "Tasodifiy",
            "Holat bo'yicha kamayish tartibida"
          ],
          "answer": 0,
          "explain": "sort((a, b) => a.muddat.compareTo(b.muddat)) muddat bo'yicha eng erta vazifadan boshlab tartiblaydi."
        },
        {
          "q": "Modelni o'zgarmas (immutable) qilishning foydasi nimada?",
          "options": [
            "Kod sekinlashadi",
            "Yon ta'sir kamayadi va test osonlashadi",
            "JSON shart bo'lmaydi",
            "Navigatsiya avtomatik ishlaydi"
          ],
          "answer": 1,
          "explain": "O'zgarmas obyektni tasodifan o'zgartirib bo'lmaydi; bu holatni oldindan aytish va test qilishni osonlashtiradi."
        }
      ]
    },
    {
      "id": 47,
      "title": "Loyiha 2: JSON saqlash va CLI interfeys",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ikkinchi qadamda vazifalarni JSON faylga saqlaymiz va konsol interfeysini qo'shamiz. <code>JsonRepozitoriy</code> repozitoriyni kengaytirib, <code>yukla()</code> va <code>saqlaFaylga()</code> metodlarini beradi. CLI argumentlari oddiy tahlil qilinadi."
        },
        {
          "type": "code",
          "title": "json_repozitoriy.dart",
          "code": "import 'dart:convert';\nimport 'dart:io';\n\nimport 'model.dart';\nimport 'repozitoriy.dart';\n\nclass JsonRepozitoriy extends VazifaRepozitoriy {\n  final File fayl;\n\n  JsonRepozitoriy(this.fayl);\n\n  Future<void> yukla() async {\n    if (!await fayl.exists()) return;\n    final matn = await fayl.readAsString();\n    if (matn.trim().isEmpty) return;\n\n    final data = jsonDecode(matn) as List<dynamic>;\n    for (final e in data) {\n      saqla(Vazifa.fromJson(e as Map<String, dynamic>));\n    }\n  }\n\n  Future<void> saqlaFaylga() async {\n    final data = hammasi().map((v) => v.toJson()).toList();\n    await fayl.writeAsString(jsonEncode(data));\n  }\n}\n\nFuture<void> main() async {\n  final fayl = File('vazifalar.json');\n  final repo = JsonRepozitoriy(fayl);\n\n  repo.saqla(Vazifa(\n    id: 'v1',\n    nom: 'Hisobot',\n    muddat: DateTime(2026, 11, 5),\n  ));\n  await repo.saqlaFaylga();\n\n  final yangi = JsonRepozitoriy(fayl);\n  await yangi.yukla();\n\n  print(yangi.hammasi().length);\n  print(yangi.top('v1')!.nom);\n\n  await fayl.delete();\n}",
          "output": "1\nHisobot"
        },
        {
          "type": "ul",
          "items": [
            "<code>yukla()</code> fayl mavjud bo'lmasa yoki bo'sh bo'lsa hech narsa qilmaydi.",
            "<code>saqlaFaylga()</code> barcha vazifalarni JSON massivga aylantirib yozadi.",
            "<code>File.exists()</code>, <code>readAsString()</code> va <code>writeAsString()</code> asinxron chaqiriladi.",
            "Har bir yozuvdan keyin faylni saqlash ma'lumot yo'qolishini kamaytiradi."
          ]
        },
        {
          "type": "code",
          "title": "cli.dart",
          "code": "class Buyruq {\n  final String nom;\n  final Map<String, String> parametrlar;\n\n  const Buyruq(this.nom, this.parametrlar);\n\n  static Buyruq tahlil(List<String> args) {\n    final nom = args.isEmpty ? 'yordam' : args.first;\n    final parametrlar = <String, String>{};\n\n    for (var i = 1; i < args.length - 1; i += 2) {\n      final kalit = args[i];\n      if (kalit.startsWith('--')) {\n        parametrlar[kalit.substring(2)] = args[i + 1];\n      }\n    }\n\n    return Buyruq(nom, parametrlar);\n  }\n}\n\nvoid main() {\n  final b = Buyruq.tahlil(\n    ['qosh', '--nom', 'Dars', '--muddat', '2026-11-05'],\n  );\n\n  print(b.nom);\n  print(b.parametrlar['nom']);\n  print(b.parametrlar.length);\n}",
          "output": "qosh\nDars\n2"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xatolarni boshqaring",
          "html": "Fayl buzilgan bo'lsa <code>FormatException</code>, maydon yetishmasa tur xatosi chiqadi. <code>yukla()</code> ni <code>try/catch</code> bilan o'rab, foydalanuvchiga «Fayl o'qilmadi» deb xabar bering. CLI'da noto'g'ri buyruq uchun <code>yordam</code> chiqarib, nolga teng bo'lmagan <code>exitCode</code> qaytaring."
        }
      ],
      "quiz": [
        {
          "q": "JsonRepozitoriy.saqlaFaylga() qanday ma'lumot yozadi?",
          "options": [
            "Faqat bitta vazifani",
            "Faqat nomlar ro'yxatini",
            "Barcha vazifalarni JSON massiv sifatida",
            "Hech narsa"
          ],
          "answer": 2,
          "explain": "hammasi() ro'yxati toJson() orqali Map'larga, keyin jsonEncode bilan JSON massivga aylanadi."
        },
        {
          "q": "Buyruq.tahlil(['qosh', '--nom', 'Dars']) natijasida parametrlar ichida nima bo'ladi?",
          "options": [
            "{'qosh': '--nom'}",
            "{'Dars': 'nom'}",
            "Bo'sh map",
            "{'nom': 'Dars'}"
          ],
          "answer": 3,
          "explain": "Juftlik sifatida --nom kaliti olinib, undan keyingi Dars qiymati map ga yoziladi."
        },
        {
          "q": "yukla() da fayl mavjud bo'lmasa nima qilish kerak?",
          "options": [
            "Hech narsa qilmasdan qaytish",
            "Xato tashlash",
            "Yangi tasodifiy fayl yaratish",
            "Dasturni o'chirish"
          ],
          "answer": 0,
          "explain": "Birinchi ishga tushirishda fayl bo'lmasligi normal; exists() tekshiruvi bilan bo'sh repozitoriy qaytish mumkin."
        }
      ]
    },
    {
      "id": 48,
      "title": "Loyiha 3: testlar va refaktoring",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Uchinchi qadamda loyihaga testlar yozamiz va kodni soddalashtiramiz. Testlar repozitoriyning saqlash va tartiblash xatti-harakatini qo'riqlaydi. Refaktoringda takroriy tekshiruvlarni alohida funksiyaga chiqaramiz va xatoni natija sifatida qaytaramiz."
        },
        {
          "type": "code",
          "title": "test/repozitoriy_test.dart",
          "code": "import 'package:test/test.dart';\n\nimport 'package:kundalik/model.dart';\nimport 'package:kundalik/repozitoriy.dart';\n\nvoid main() {\n  group('VazifaRepozitoriy', () {\n    test('saqlash va topish', () {\n      final repo = VazifaRepozitoriy();\n      final v = Vazifa(\n        id: 'v1',\n        nom: 'Test',\n        muddat: DateTime(2026, 11, 1),\n      );\n\n      repo.saqla(v);\n      expect(repo.top('v1'), same(v));\n    });\n\n    test('muddat bo\\'yicha tartiblash', () {\n      final repo = VazifaRepozitoriy();\n      repo.saqla(Vazifa(\n        id: 'k',\n        nom: 'Keyin',\n        muddat: DateTime(2026, 12, 1),\n      ));\n      repo.saqla(Vazifa(\n        id: 'b',\n        nom: 'Avval',\n        muddat: DateTime(2026, 11, 1),\n      ));\n\n      final idlar = repo.hammasi().map((v) => v.id).toList();\n      expect(idlar, ['b', 'k']);\n    });\n  });\n}",
          "output": "00:00 +0: loading test/repozitoriy_test.dart\n00:00 +0: VazifaRepozitoriy saqlash va topish\n00:00 +1: VazifaRepozitoriy muddat bo'yicha tartiblash\n00:00 +2: All tests passed!"
        },
        {
          "type": "table",
          "head": [
            "Test turi",
            "Nimani tekshiradi",
            "Misol"
          ],
          "rows": [
            [
              "Birlik testi",
              "Bitta funksiya yoki sinf",
              "repozitoriy.saqla()"
            ],
            [
              "Chegara testi",
              "Bo'sh va noto'g'ri qiymatlar",
              "bo'sh nom, null"
            ],
            [
              "Integratsiya",
              "Qatlamlar birgaligi",
              "JSON fayl + repozitoriy"
            ],
            [
              "Widget testi",
              "Flutter interfeysi",
              "tester.pumpWidget()"
            ]
          ]
        },
        {
          "type": "code",
          "title": "validatsiya.dart",
          "code": "String? nomXatosi(String nom) {\n  final t = nom.trim();\n  if (t.isEmpty) return 'Nom bo\\'sh bo\\'lmasin';\n  if (t.length > 40) return 'Nom juda uzun';\n  return null;\n}\n\nclass VazifaQoshuvchi {\n  final List<String> _nomlar = [];\n\n  String? qosh(String nom) {\n    final xato = nomXatosi(nom);\n    if (xato != null) return xato;\n\n    final t = nom.trim();\n    if (_nomlar.contains(t)) {\n      return 'Bu vazifa allaqachon bor';\n    }\n\n    _nomlar.add(t);\n    return null;\n  }\n\n  int get soni => _nomlar.length;\n}\n\nvoid main() {\n  final q = VazifaQoshuvchi();\n\n  print(q.qosh('  Dart  '));\n  print(q.qosh(''));\n  print(q.qosh('Dart'));\n  print(q.soni);\n}",
          "output": "null\nNom bo'sh bo'lmasin\nBu vazifa allaqachon bor\n1"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Testlarni doimiy ishga tushiring",
          "html": "<code>dart test</code> barcha testlarni bajaradi. <code>dart test --coverage=coverage</code> qamrovni yig'adi. Har o'zgarishdan keyin testlarni ishga tushirish regressiyani erta topadi. CI muhitida testlar muvaffaqiyatsiz bo'lsa, yig'ish to'xtatilishi kerak."
        }
      ],
      "quiz": [
        {
          "q": "expect(repo.top('v1'), same(v)) qaysi matcherdan foydalanadi?",
          "options": [
            "equals",
            "same",
            "contains",
            "throwsA"
          ],
          "answer": 1,
          "explain": "same aynan bir xil obyekt nusxasini tekshiradi; top() saqlangan obyektning o'zini qaytarishini tasdiqlaydi."
        },
        {
          "q": "VazifaQoshuvchi.qosh() muvaffaqiyatli qo'shilganda nima qaytaradi?",
          "options": [
            "true",
            "Yangi Vazifa",
            "null",
            "Xato matni"
          ],
          "answer": 2,
          "explain": "Metod String? qaytaradi: xato bo'lmasa null, aks holda tushunarli xato matni qaytadi."
        },
        {
          "q": "Refaktoringda tekshiruvni alohida funksiyaga chiqarishning foydasi nimada?",
          "options": [
            "Kod ko'payadi",
            "Fayl o'lchami kichrayadi",
            "Navigatsiya tezlashadi",
            "Takrorlanish kamayadi va test qilish osonlashadi"
          ],
          "answer": 3,
          "explain": "Bitta joyda saqlangan qoida takrorlanmaydi, uni alohida test qilish va o'zgartirish oson bo'ladi."
        }
      ]
    },
    {
      "id": 49,
      "title": "Keyingi qadamlar: toza kod va ekotizim",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Kurs yakuniga yaqinlashdik. Endi Dart'ni kundalik amaliyotda qo'llash muhim: o'zgarmas modellar, aniq holatlar, testlar va kichik bosqichlarda refaktoring. Bu darsda ilovalarda tez-tez ishlatiladigan ikki naqshni ko'rib chiqamiz."
        },
        {
          "type": "code",
          "title": "sozlama.dart",
          "code": "class Sozlama {\n  final bool qorongu;\n  final String til;\n\n  const Sozlama({this.qorongu = false, this.til = 'uz'});\n\n  Sozlama nusxa({bool? qorongu, String? til}) {\n    return Sozlama(\n      qorongu: qorongu ?? this.qorongu,\n      til: til ?? this.til,\n    );\n  }\n\n  @override\n  String toString() => 'Sozlama(qorongu: $qorongu, til: $til)';\n}\n\nvoid main() {\n  const boshi = Sozlama();\n  final yangi = boshi.nusxa(qorongu: true);\n\n  print(boshi);\n  print(yangi);\n  print(boshi == yangi);\n}",
          "output": "Sozlama(qorongu: false, til: uz)\nSozlama(qorongu: true, til: uz)\nfalse"
        },
        {
          "type": "ul",
          "items": [
            "O'zgarmas model va <code>nusxa()</code> yon ta'sirlarni kamaytiradi.",
            "<code>sealed</code> sinflar ekran holatlarini (yuklanish, tayyor, xato) aniq ifodalaydi.",
            "Testlar va <code>dart analyze</code> ni har o'zgarishda ishga tushiring.",
            "Kichik, tushunarli funksiyalar va aniq nomlar uzoq muddatda tejamkor."
          ]
        },
        {
          "type": "code",
          "title": "holat.dart",
          "code": "sealed class Yuklanish {\n  const Yuklanish();\n}\n\nclass Yuklanmoqda extends Yuklanish {\n  const Yuklanmoqda();\n}\n\nclass Tayyor extends Yuklanish {\n  final List<String> malumotlar;\n  const Tayyor(this.malumotlar);\n}\n\nclass Xatolik extends Yuklanish {\n  final String xabar;\n  const Xatolik(this.xabar);\n}\n\nString korsat(Yuklanish holat) => switch (holat) {\n      Yuklanmoqda() => 'Yuklanmoqda...',\n      Tayyor(:final malumotlar) => 'Tayyor: ' + malumotlar.length.toString(),\n      Xatolik(:final xabar) => 'Xato: $xabar',\n    };\n\nvoid main() {\n  final holatlar = <Yuklanish>[\n    const Yuklanmoqda(),\n    const Tayyor(['a', 'b']),\n    const Xatolik('tarmoq'),\n  ];\n\n  for (final h in holatlar) {\n    print(korsat(h));\n  }\n}",
          "output": "Yuklanmoqda...\nTayyor: 2\nXato: tarmoq"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Yo'l xaritasi",
          "html": "Keyingi qadamlar: <b>Flutter</b> bilan interfeys, <b>package:shelf</b> yoki <b>dart_frog</b> bilan server, <b>pub.dev</b> dagi paketlar va ochiq kod loyihalari. Har kuni kichik mashq yozing, o'qigan kodingizni qayta yozib ko'ring va testlar bilan mustahkamlang. Yakuniy imtihon bu bilimlarni tekshirish uchun."
        }
      ],
      "quiz": [
        {
          "q": "Sozlama.nusxa(qorongu: true) nima qaytaradi?",
          "options": [
            "Yangi Sozlama obyektini",
            "Asl obyektni o'zgartiradi",
            "null",
            "JSON matnini"
          ],
          "answer": 0,
          "explain": "nusxa() maydonlarni ko'chirib, kerakli o'zgarish bilan yangi o'zgarmas Sozlama qaytaradi."
        },
        {
          "q": "sealed class bilan yozilgan holatlar switch'da qanday afzallik beradi?",
          "options": [
            "Switch tezroq ishlaydi",
            "Barcha variantlar qamrab olingani tekshiriladi",
            "Kod avtomatik test bo'ladi",
            "JSON avtomatik yaratiladi"
          ],
          "answer": 1,
          "explain": "sealed sinfning avlodlari ma'lum bo'lgani uchun kompilyator switch to'liqligini tekshiradi va yangi holat qo'shilganda xatoni ko'rsatadi."
        },
        {
          "q": "Kod sifatini doimiy saqlash uchun qaysi amaliyot eng foydali?",
          "options": [
            "Faqat katta loyihada test yozish",
            "Kommentlarni o'chirish",
            "Har o'zgarishda test va dart analyze ishga tushirish",
            "Barcha kodni bitta faylga yig'ish"
          ],
          "answer": 2,
          "explain": "Testlar va statik tahlilni muntazam bajarish xatolarni erta topadi va regressiyadan himoya qiladi."
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
          "html": "Dart kursining yakuniy bosqichi. 49 dars va 147 test ortda qoldi. Imtihon butun kursni — o'zgaruvchilar va kolleksiyalardan Dart 3 patternlari, asinxronlik, isolate, testlash, Flutter va JSON bilan ishlashgacha — qamrab oladi."
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
          "type": "table",
          "head": [
            "Bo'lim",
            "Savollar",
            "Nimani tekshiradi"
          ],
          "rows": [
            [
              "Dart 3 va kolleksiyalar",
              "6",
              "Recordlar, patternlar, enum, extension, generiklar, spread"
            ],
            [
              "Null safety, async va isolate",
              "3",
              "late, Future.wait xatosi, SendPort"
            ],
            [
              "Testlash, Flutter va JSON",
              "3",
              "group, FutureBuilder, JSON massiv turlari"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Maslahat",
          "html": "Har bir savolni oxirigacha o'qing va kod misollaridagi qavslar, tur belgilari hamda natijalarga e'tibor bering. Ishonchingiz komil bo'lmasa, tegishli darsga qaytib, misolni o'zingiz qayta yozib ko'ring. Imtihon oldidan barcha 147 testni takrorlash foydali."
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
        "q": "final natija = (92, 'Aziza'); print(natija.$1); qanday natija chiqaradi?",
        "options": [
          "Aziza",
          "(92, Aziza)",
          "Kompilyatsiya xatosi",
          "92"
        ],
        "answer": 3,
        "explain": "Pozitsion recordning birinchi maydoni $1 bo'lib, uning qiymati 92."
      },
      {
        "q": "Talaba(ism: final ism) obyekt patterni nima qiladi?",
        "options": [
          "ism maydonini o'zgaruvchiga bog'laydi",
          "Yangi Talaba obyekti yaratadi",
          "Faqat turni tekshiradi, maydonni olmaydi",
          "ism maydonini o'chiradi"
        ],
        "answer": 0,
        "explain": "Obyekt patterni maydonni ajratib, final ism o'zgaruvchisiga bog'laydi; yangi obyekt yaratmaydi."
      },
      {
        "q": "Kengaytirilgan enumdagi konstruktor qanday bo'lishi shart?",
        "options": [
          "factory",
          "const",
          "static",
          "abstract"
        ],
        "answer": 1,
        "explain": "Enum holatlari kompilyatsiya vaqtida tayyor bo'lgani uchun konstruktor const bo'lishi shart."
      },
      {
        "q": "Extension metodlari qachon aniqlanadi?",
        "options": [
          "Ish vaqtida dinamik",
          "Faqat refleksiya orqali",
          "Kompilyatsiya vaqtida statik",
          "Faqat null qiymatda"
        ],
        "answer": 2,
        "explain": "Extension metodlari statik dispatch bilan kompilyatsiya vaqtida aniqlanadi; asl tur o'zgarmaydi."
      },
      {
        "q": "Quti<int> va Quti<String> haqida qaysi gap to'g'ri?",
        "options": [
          "Ish vaqtida ikkalasi bir xil tur hisoblanadi",
          "Faqat bittasi bir vaqtda ishlay oladi",
          "Generiklar faqat funksiyalarda bo'ladi",
          "Tur argumentlari ish vaqtida saqlanadi"
        ],
        "answer": 3,
        "explain": "Dart generiklari reified: runtimeType Quti<int> yoki Quti<String> ekanini ko'rsatadi."
      },
      {
        "q": "Kolleksiya ichida ..., if va for birgalikda qanday imkoniyat beradi?",
        "options": [
          "Elementlarni yoyish, shartli qo'shish va tsikl bilan qo'shish",
          "Faqat elementlarni saralash",
          "Faqat xato hosil qilish",
          "Yangi Map yaratish"
        ],
        "answer": 0,
        "explain": "Spread ... elementlarni yoyadi, collection-if shartli, collection-for esa tsikl natijalarini qo'shadi."
      },
      {
        "q": "late String ism; print(ism); bajarilsa nima bo'ladi?",
        "options": [
          "null chiqadi",
          "LateInitializationError tashlanadi",
          "Bo'sh matn chiqadi",
          "Kompilyatsiya xatosi chiqadi"
        ],
        "answer": 1,
        "explain": "late o'zgaruvchi ishlatishdan oldin qiymat olishi kerak; olinmasa LateInitializationError yuz beradi."
      },
      {
        "q": "Future.wait ichidagi bitta Future xato bersa, standart holatda nima bo'ladi?",
        "options": [
          "Xato e'tiborsiz qoladi",
          "wait cheksiz kutadi",
          "wait xato bilan yakunlanadi",
          "Boshqa Futurelar bekor qilinadi va natija qaytadi"
        ],
        "answer": 2,
        "explain": "Standart rejimda Future.wait birinchi xatoni qaytaradi va xato bilan yakunlanadi; eagerError bilan boshqariladi."
      },
      {
        "q": "Isolate'lar o'rtasida xabar yuborish uchun nima ishlatiladi?",
        "options": [
          "Global o'zgaruvchi",
          "Faqat File",
          "Navigator",
          "SendPort va ReceivePort"
        ],
        "answer": 3,
        "explain": "Isolate'lar xotirani baham ko'rmaydi; ular SendPort orqali xabar yuborib, ReceivePort orqali qabul qiladi."
      },
      {
        "q": "group() testda nima qiladi?",
        "options": [
          "Testlarni mantiqiy guruhlaydi",
          "Testni o'chiradi",
          "Yangi paket yuklaydi",
          "Faqat vaqtni o'lchaydi"
        ],
        "answer": 0,
        "explain": "group() testlarni nom bilan guruhlaydi va umumiy setUp/tearDown qoidalarini bir joyda berish imkonini yaratadi."
      },
      {
        "q": "FutureBuilder'da snapshot.hasError nimani bildiradi?",
        "options": [
          "Yuklanish davom etmoqda",
          "Future xato bilan yakunlangan",
          "Ma'lumot bo'sh",
          "Widget allaqachon qurilgan"
        ],
        "answer": 1,
        "explain": "hasError true bo'lsa, Future xato bilan yakunlangan; snapshot.error orqali sababni ko'rsatish mumkin."
      },
      {
        "q": "jsonDecode JSON massivni qanday Dart turiga aylantiradi?",
        "options": [
          "Map<String, dynamic>",
          "String",
          "List<dynamic>",
          "Future"
        ],
        "answer": 2,
        "explain": "JSON massiv List<dynamic> ga, JSON obyekt esa Map<String, dynamic> ga aylanadi."
      }
    ]
  }
};
})();
