/* Bash course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.bash = {
  "id": "bash",
  "title": "Bash",
  "logoClass": "course-logo--bash",
  "logoText": "Sh",
  "level": "Boshlovchi",
  "hours": "~20 soat",
  "testCount": 147,
  "lang": "bash",
  "interactive": "none",
  "heroTitle": "Bash: terminalni ishonchli boshqarish",
  "heroDesc": "Terminaldan ishonchli avtomatlashtirishgacha: 49 dars, 147 test va 12-savollik yakuniy imtihon. O'zgaruvchilar, matn vositalari, jq, cron, ssh va real loyihani amaliy misollar bilan o'rganing.",
  "metaDescription": "Bash kursi: 49 dars, 147 test va 12-savollik yakuniy imtihon. Terminal, quvurlar, matn vositalari, xavfsiz skriptlar va log tahlilchisi loyihasini o'zbek tilida noldan o'rganing.",
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
      "title": "Ma'lumotlar, matn va xavfsizlik",
      "lessons": [
        7,
        8,
        9,
        10
      ]
    },
    {
      "title": "Avtomatlashtirish va mini loyiha",
      "lessons": [
        11,
        12
      ]
    },
    {
      "title": "Kengaytirishlar va boshqaruv",
      "lessons": [
        13,
        14,
        15,
        16,
        17
      ]
    },
    {
      "title": "Massiv, funksiya va argumentlar",
      "lessons": [
        18,
        19,
        20,
        21,
        22
      ]
    },
    {
      "title": "Oqimlar va fayl qidirish",
      "lessons": [
        23,
        24,
        25,
        26
      ]
    },
    {
      "title": "Matn va ma'lumot vositalari",
      "lessons": [
        27,
        28,
        29,
        30,
        31,
        32,
        33
      ]
    },
    {
      "title": "Jarayonlar va rejalashtirish",
      "lessons": [
        34,
        35,
        36
      ]
    },
    {
      "title": "Tarmoq, ishonchlilik va test",
      "lessons": [
        37,
        38,
        39,
        40,
        41,
        42,
        43
      ]
    },
    {
      "title": "Amaliy loyiha",
      "lessons": [
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
      "title": "Terminal, shell va birinchi skript",
      "minutes": 12,
      "blocks": [
        {
          "type": "p",
          "html": "Terminal — buyruqlarni kiritadigan oyna. <b>Shell</b> esa bu buyruqlarni o'qib, tizimga uzatadigan dastur. Bash eng keng tarqalgan shellardan biri bo'lib, Linux va macOS'da deyarli har doim mavjud. Skript — bir nechta buyruq yozilgan matn fayli."
        },
        {
          "type": "ul",
          "items": [
            "<code>pwd</code> — joriy papka yo'lini ko'rsatadi.",
            "<code>ls</code> — papkadagi fayllarni ro'yxatlaydi.",
            "<code>cd</code> — boshqa papkaga o'tadi.",
            "<code>bash fayl.sh</code> — skriptni ko'rsatilgan shell bilan bajaradi."
          ]
        },
        {
          "type": "code",
          "title": "salom.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\necho \"Salom, Noldan!\"\necho \"Bash skript ishga tushdi.\"",
          "output": "Salom, Noldan!\nBash skript ishga tushdi."
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "chmod +x salom.sh\n./salom.sh",
          "output": "Salom, Noldan!\nBash skript ishga tushdi."
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Shebang nima?",
          "html": "Birinchi qatordagi <code>#!/usr/bin/env bash</code> — shebang. U faylni bajarishda qaysi interpretatordan foydalanishni aytadi. <code>env</code> bash'ning joylashuvini PATH orqali topadi, shuning uchun yo'l har xil tizimlarda mos keladi."
        },
        {
          "type": "table",
          "head": [
            "Buyruq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>bash salom.sh</code>",
              "Skriptni bash orqali bajaradi"
            ],
            [
              "<code>chmod +x salom.sh</code>",
              "Faylga bajarish huquqini beradi"
            ],
            [
              "<code>./salom.sh</code>",
              "Joriy papkadagi skriptni ishga tushiradi"
            ],
            [
              "<code>bash -n salom.sh</code>",
              "Sintaksisni bajarishsiz tekshiradi"
            ]
          ]
        }
      ],
      "quiz": [
        {
          "q": "Shebang qaysi qatorda yoziladi?",
          "options": [
            "Faqat alohida faylda",
            "Ikkinchi qatorda",
            "Birinchi qatorda",
            "Fayl oxirida"
          ],
          "answer": 2,
          "explain": "Shebang har doim skriptning birinchi qatorida turadi va interpretatorni ko'rsatadi."
        },
        {
          "q": "Skript fayliga bajarish huquqini berish uchun qaysi buyruq ishlatiladi?",
          "options": [
            "chown salom.sh",
            "cp salom.sh",
            "bash -n salom.sh",
            "chmod +x salom.sh"
          ],
          "answer": 3,
          "explain": "chmod +x faylga bajarish (execute) huquqini qo'shadi."
        },
        {
          "q": "#!/usr/bin/env bash qatori nimani bildiradi?",
          "options": [
            "Skriptni o'chirishni",
            "Faqat izoh qoldirishni",
            "Faqat Windows'da ishlashni",
            "Bash yo'lini env orqali topishni"
          ],
          "answer": 3,
          "explain": "env PATH bo'yicha bash interpretatorini topadi, shuning uchun shebang ko'chma bo'ladi."
        }
      ]
    },
    {
      "id": 2,
      "title": "O'zgaruvchilar, muhit va tirnoqlar",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Bash'da o'zgaruvchi <code>nom=qiymat</code> ko'rinishida yaratiladi. Teng belgisi atrofida bo'sh joy bo'lmasligi kerak. Qiymatni o'qish uchun <code>$nom</code> yoki <code>${nom}</code> yoziladi. <code>export</code> o'zgaruvchini muhitga chiqaradi va u tashqi buyruqlarga ham ko'rinadi."
        },
        {
          "type": "code",
          "title": "ozgaruvchi.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nexport KURS=\"Bash\"\nism=\"Aziza\"\n\necho \"$ism $KURS o'rganmoqda\"\necho 'Yagona tirnoq: $ism ochilmaydi'\necho \"Ikki tirnoq: $ism ochiladi\"\nprintf \"Ism uzunligi: %s\\n\" \"${#ism}\"",
          "output": "Aziza Bash o'rganmoqda\nYagona tirnoq: $ism ochilmaydi\nIkki tirnoq: Aziza ochiladi\nIsm uzunligi: 5"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Uch xil himoya",
          "html": "Yagona tirnoq (<code>'...'</code>) ichidagi hamma narsa so'zma-so'z qoladi. Ikki tirnoq (<code>\"...\"</code>) o'zgaruvchilarni kengaytiradi, lekin bo'sh joylarni saqlaydi. Tirnoqsiz matnda esa bo'sh joy bo'yicha ajratish va glob ishlaydi — bu ko'pincha xatoga olib keladi."
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>ism=\"Aziza\"</code>",
              "O'zgaruvchi yaratadi (bo'sh joy yo'q)"
            ],
            [
              "<code>export ism</code>",
              "Muhitga chiqaradi"
            ],
            [
              "<code>${ism}</code>",
              "Qiymatni aniq chegaralar bilan o'qiydi"
            ],
            [
              "<code>${#ism}</code>",
              "Matn uzunligini beradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "default.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nunset TIL\nTIL=\"${TIL:-uz}\"\nreadonly KURS=\"Bash\"\n\necho \"Til: $TIL\"\necho \"Kurs: $KURS\"",
          "output": "Til: uz\nKurs: Bash"
        }
      ],
      "quiz": [
        {
          "q": "O'zgaruvchiga qiymat berishning to'g'ri yozuvi qaysi?",
          "options": [
            "ism: Aziza",
            "ism = \"Aziza\"",
            "ism=\"Aziza\"",
            "set ism=Aziza"
          ],
          "answer": 2,
          "explain": "Teng belgisi atrofida bo'sh joy bo'lmasligi kerak: ism=\"Aziza\"."
        },
        {
          "q": "Yagona tirnoq ichidagi $ism qanday ko'rinishda qoladi?",
          "options": [
            "Xato beradi",
            "Faqat son bo'ladi",
            "O'zgaruvchi qiymatiga almashadi",
            "So'zma-so'z $ism bo'lib qoladi"
          ],
          "answer": 3,
          "explain": "Yagona tirnoq ichida kengaytirish ishlamaydi, shuning uchun $ism matn sifatida qoladi."
        },
        {
          "q": "export buyrug'i nima qiladi?",
          "options": [
            "O'zgaruvchini muhitga chiqaradi",
            "Faylga yozadi",
            "O'zgaruvchini o'chiradi",
            "Faqat o'qiydi"
          ],
          "answer": 0,
          "explain": "export qilingan o'zgaruvchi tashqi buyruqlar va bola jarayonlarga ko'rinadi."
        }
      ]
    },
    {
      "id": 3,
      "title": "Tekshiruvlar va if/elif/else",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Bash'da shartlar <code>if</code>, <code>elif</code> va <code>else</code> bilan yoziladi. Tekshiruv uchun <code>[ ]</code> yoki zamonaviyroq <code>[[ ]]</code> ishlatiladi. Sonlar <code>-eq</code>, <code>-lt</code>, <code>-gt</code> kabi operatorlar bilan, matnlar esa <code>==</code> va <code>!=</code> bilan taqqoslanadi."
        },
        {
          "type": "code",
          "title": "baho.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nball=85\n\nif [[ $ball -ge 90 ]]; then\n  echo \"A\"\nelif [[ $ball -ge 80 ]]; then\n  echo \"B\"\nelse\n  echo \"C\"\nfi",
          "output": "B"
        },
        {
          "type": "table",
          "head": [
            "Tekshiruv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>-eq</code> / <code>-ne</code>",
              "Teng / teng emas (sonlar)"
            ],
            [
              "<code>-lt</code> / <code>-gt</code>",
              "Kichik / katta (sonlar)"
            ],
            [
              "<code>-z</code> / <code>-n</code>",
              "Matn bo'sh / matn bo'sh emas"
            ],
            [
              "<code>-f</code> / <code>-d</code>",
              "Oddiy fayl / papka mavjud"
            ],
            [
              "<code>==</code> / <code>!=</code>",
              "Matn teng / teng emas"
            ]
          ]
        },
        {
          "type": "code",
          "title": "matn.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nism=\"Aziza\"\nyosh=20\n\nif [[ -n $ism && $ism == A* ]]; then\n  echo \"Ism A bilan boshlanadi\"\nfi\n\nif [[ $yosh -ge 18 && $yosh -lt 60 ]]; then\n  echo \"Kattalar oraligida\"\nfi\n\nif [[ \"dart\" == d* ]]; then\n  echo \"Dart mos keldi\"\nfi",
          "output": "Ism A bilan boshlanadi\nKattalar oraligida\nDart mos keldi"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "[ ] va [[ ]] farqi",
          "html": "<code>[[ ]]</code> — Bash'ning kengaytirilgan tekshiruvi: u bo'sh joy bo'yicha ajratmaydi va o'ng tomonda glob namunasini qabul qiladi. Oddiy <code>[ ]</code>da o'zgaruvchini doim qo'shtirnoqqa oling: <code>[ \"$ism\" = \"Aziza\" ]</code>. Aks holda bo'sh qiymat sintaksis xatosiga olib keladi."
        }
      ],
      "quiz": [
        {
          "q": "Sonlarni taqqoslash uchun qaysi operator ishlatiladi?",
          "options": [
            "eq",
            "==",
            "-ge",
            "="
          ],
          "answer": 2,
          "explain": "Sonlar uchun -eq, -ne, -lt, -le, -gt, -ge operatorlari ishlatiladi."
        },
        {
          "q": "[[ -f $fayl ]] nimani tekshiradi?",
          "options": [
            "Papka mavjudligini",
            "Oddiy fayl mavjudligini",
            "Matn bo'shligini",
            "Bajarish huquqini"
          ],
          "answer": 1,
          "explain": "-f oddiy fayl mavjudligini tekshiradi; -d esa papkani tekshiradi."
        },
        {
          "q": "-n operatori nimani bildiradi?",
          "options": [
            "Matn uzunligi nolga teng",
            "Matn uzunligi noldan katta",
            "Fayl mavjud emas",
            "Son manfiy"
          ],
          "answer": 1,
          "explain": "-n matnning uzunligi noldan katta ekanini tekshiradi."
        }
      ]
    },
    {
      "id": 4,
      "title": "for, while va until tsikllari",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "Tsikllar bir xil buyruqlarni bir necha marta bajaradi. <code>for</code> ro'yxat yoki oraliq bo'yicha yuradi, <code>while</code> shart rost bo'lguncha davom etadi, <code>until</code> esa shart rost bo'lguncha to'xtamaydi."
        },
        {
          "type": "code",
          "title": "for.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfor i in 1 2 3; do\n  echo \"Qadam $i\"\ndone\n\nfor fayl in /tmp/demo-a.txt /tmp/demo-b.txt; do\n  echo \"Fayl: $fayl\"\ndone\n\nfor raqam in {1..3}; do\n  printf \"Son: %s\\n\" \"$raqam\"\ndone",
          "output": "Qadam 1\nQadam 2\nQadam 3\nFayl: /tmp/demo-a.txt\nFayl: /tmp/demo-b.txt\nSon: 1\nSon: 2\nSon: 3"
        },
        {
          "type": "table",
          "head": [
            "Tsikl",
            "Qachon ishlatiladi"
          ],
          "rows": [
            [
              "<code>for x in ...</code>",
              "Ro'yxat yoki oraliq elementlari uchun"
            ],
            [
              "<code>for ((i=0; i&lt;3; i++))</code>",
              "C uslubidagi hisoblagich uchun"
            ],
            [
              "<code>while shart</code>",
              "Shart rost bo'lguncha"
            ],
            [
              "<code>until shart</code>",
              "Shart rost bo'lguncha to'xtamaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "set -e va ((son--))",
          "html": "<code>((son--))</code> ifodasi natija 0 bo'lganda muvaffaqiyatsiz holat kodi qaytaradi va <code>set -e</code> bilan skriptni to'xtatib qo'yishi mumkin. Xavfsizroq yozuv: <code>son=$((son - 1))</code>. Hisoblagichni kamaytirishda shu usuldan foydalaning."
        },
        {
          "type": "code",
          "title": "while.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nson=3\nwhile (( son > 0 )); do\n  echo \"Qoldi: $son\"\n  son=$((son - 1))\ndone\n\nuntil (( son >= 3 )); do\n  son=$((son + 1))\ndone\necho \"Yakuniy: $son\"",
          "output": "Qoldi: 3\nQoldi: 2\nQoldi: 1\nYakuniy: 3"
        }
      ],
      "quiz": [
        {
          "q": "until tsikli qachon tugaydi?",
          "options": [
            "break yozilganda",
            "Har doim bir aylanishdan keyin",
            "Shart noto'g'ri bo'lganda",
            "Shart rost bo'lganda"
          ],
          "answer": 3,
          "explain": "until shart rost bo'lguncha aylanadi; shart rost bo'lishi bilan to'xtaydi."
        },
        {
          "q": "{1..3} kengaytmasi qanday qiymatlar beradi?",
          "options": [
            "1,2,3",
            "123",
            "1..3 matni",
            "1 2 3"
          ],
          "answer": 3,
          "explain": "Brace expansion {1..3} 1, 2, 3 qiymatlarini alohida so'zlar sifatida beradi."
        },
        {
          "q": "while tsiklining sharti boshidanoq yolg'on bo'lsa nima bo'ladi?",
          "options": [
            "Tana bir marta bajariladi",
            "Tana hech marta bajarilmaydi",
            "Tsikl cheksiz davom etadi",
            "Sintaksis xatosi chiqadi"
          ],
          "answer": 1,
          "explain": "while shartni oldin tekshiradi, shuning uchun yolg'on shartda tana bajarilmaydi."
        }
      ]
    },
    {
      "id": 5,
      "title": "Funksiyalar va lokal o'zgaruvchilar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya — nomlangan buyruqlar bloki. U <code>nom() { ... }</code> ko'rinishida e'lon qilinadi. Funksiya ichida <code>local</code> bilan yaratilgan o'zgaruvchi tashqariga chiqmaydi. Natijani <code>echo</code> orqali, holat kodini esa <code>return</code> orqali qaytarish mumkin."
        },
        {
          "type": "code",
          "title": "funksiya.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nsalomlash() {\n  local ism=\"$1\"\n  echo \"Salom, $ism!\"\n}\n\nqosh() {\n  local a=\"$1\"\n  local b=\"$2\"\n  echo $((a + b))\n}\n\nsalomlash \"Aziza\"\nnatija=$(qosh 4 5)\necho \"Yigindi: $natija\"",
          "output": "Salom, Aziza!\nYigindi: 9"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>nom() { ... }</code>",
              "Funksiya e'lon qiladi"
            ],
            [
              "<code>local x=1</code>",
              "Faqat funksiya ichida ko'rinadigan o'zgaruvchi"
            ],
            [
              "<code>echo \"$natija\"</code>",
              "Natijani standart chiqishga yozadi"
            ],
            [
              "<code>return 1</code>",
              "Muvaffaqiyatsiz holat kodini qaytaradi"
            ],
            [
              "<code>$(funksiya)</code>",
              "Funksiya chiqishini ushlab oladi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "holat.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nmusbatmi() {\n  local son=\"$1\"\n  if (( son > 0 )); then\n    return 0\n  fi\n  return 1\n}\n\nif musbatmi 5; then\n  echo \"Musbat\"\nfi\n\nif musbatmi -2; then\n  echo \"Bu chiqmaydi\"\nelse\n  echo \"Musbat emas\"\nfi",
          "output": "Musbat\nMusbat emas"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "echo va return alanglamang",
          "html": "<code>echo</code> matn chiqaradi, uni <code>$(...)</code> bilan ushlab olish mumkin. <code>return</code> esa faqat 0–255 oralig'idagi holat kodini qaytaradi. Shuning uchun hisoblangan qiymatni echo bilan, muvaffaqiyat/xatoni return bilan bering."
        }
      ],
      "quiz": [
        {
          "q": "Funksiya ichida faqat shu funksiyaga ko'rinadigan o'zgaruvchi qanday yaratiladi?",
          "options": [
            "local",
            "export",
            "readonly",
            "global"
          ],
          "answer": 0,
          "explain": "local kalit so'zi o'zgaruvchini funksiya doirasi bilan cheklaydi."
        },
        {
          "q": "return 1 nimani qaytaradi?",
          "options": [
            "Funksiya nomini",
            "Standart chiqishga qatorni",
            "1 matnini",
            "Muvaffaqiyatsiz holat kodini"
          ],
          "answer": 3,
          "explain": "return chiqish holat kodini beradi; nolga teng bo'lmagan kod odatda xatoni bildiradi."
        },
        {
          "q": "Funksiya chiqishini o'zgaruvchiga olish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "$(funksiya)",
            "{funksiya}",
            "<funksiya>",
            "[funksiya]"
          ],
          "answer": 0,
          "explain": "Command substitution $(...) funksiyaning standart chiqishini ushlab, qiymat sifatida beradi."
        }
      ]
    },
    {
      "id": 6,
      "title": "Argumentlar, $# va exit kodlari",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Skriptga tashqaridan qiymatlar argument sifatida beriladi: <code>./args.sh olma nok</code>. Ularga <code>$1</code>, <code>$2</code> orqali murojaat qilinadi. <code>$#</code> argumentlar sonini, <code>$@</code> esa ularning barchasini beradi. Xato holatda <code>exit</code> bilan kod qaytariladi."
        },
        {
          "type": "code",
          "title": "args.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nif (( $# < 2 )); then\n  echo \"Foydalanish: $0 MANBA NISHON\" >&2\n  exit 64\nfi\n\necho \"Manba: $1\"\necho \"Nishon: $2\"\necho \"Jami argument: $#\"\n\nfor arg in \"$@\"; do\n  echo \"- $arg\"\ndone",
          "output": "Manba: /tmp/manba.txt\nNishon: /tmp/nishon.txt\nJami argument: 2\n- /tmp/manba.txt\n- /tmp/nishon.txt"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Namuna chaqiruv",
          "html": "Yuqoridagi natija <code>./args.sh /tmp/manba.txt /tmp/nishon.txt</code> chaqiruviga mos. Argument berilmasa, skript foydalanish yo'riqnomasini chiqarib, <code>64</code> kodi bilan tugaydi."
        },
        {
          "type": "table",
          "head": [
            "Belgi",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>$0</code>",
              "Skript nomi"
            ],
            [
              "<code>$1 ... $9</code>",
              "Alohida argumentlar"
            ],
            [
              "<code>$#</code>",
              "Argumentlar soni"
            ],
            [
              "<code>\"$@\"</code>",
              "Har bir argument alohida saqlanadi"
            ],
            [
              "<code>$?</code>",
              "Oxirgi buyruqning holat kodi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "qatiy.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nnomi=\"Salom\"\necho \"Boshladik: $nomi\"\necho \"Noma'lum qiymat: ${mavjud_emas:-standart}\"\necho \"Tugadi\"",
          "output": "Boshladik: Salom\nNoma'lum qiymat: standart\nTugadi"
        }
      ],
      "quiz": [
        {
          "q": "$# nimani beradi?",
          "options": [
            "Argumentlar sonini",
            "Birinchi argumentni",
            "Exit kodini",
            "Fayl nomini"
          ],
          "answer": 0,
          "explain": "$# skriptga berilgan argumentlar sonini saqlaydi."
        },
        {
          "q": "\"$@\" nima uchun qo'shtirnoq ichida yoziladi?",
          "options": [
            "Faylni ochish uchun",
            "Har bir argumentni alohida saqlash uchun",
            "Matnni kichraytirish uchun",
            "Skriptni tezlashtirish uchun"
          ],
          "answer": 1,
          "explain": "Qo'shtirnoqsiz $@ bo'sh joyli argumentlarni bo'lib yuborishi mumkin; \"$@\" ularni alohida saqlaydi."
        },
        {
          "q": "set -u qanday himoya qo'shadi?",
          "options": [
            "Logni faylga yozadi",
            "Aniqlanmagan o'zgaruvchida xato beradi",
            "Quvur xatosini sezadi",
            "Barcha xatolarni yashiradi"
          ],
          "answer": 1,
          "explain": "set -u aniqlanmagan o'zgaruvchiga murojaat qilinsa, skriptni xato bilan to'xtatadi."
        }
      ]
    },
    {
      "id": 7,
      "title": "Massivlar va matn amallari",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Massiv bir nechta qiymatni bitta nom ostida saqlaydi: <code>ismlar=(\"Ali\" \"Aziza\")</code>. Barcha elementlar <code>${ismlar[@]}</code> bilan olinadi. Bash'ning parametr kengaytmalari matnni kesish, almashtirish va katta-kichik harfga o'girish imkonini beradi."
        },
        {
          "type": "code",
          "title": "massiv.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nismlar=(\"Ali\" \"Aziza\" \"Bek\")\nismlar+=(\"Dilnoza\")\n\necho \"Birinchi: ${ismlar[0]}\"\necho \"Soni: ${#ismlar[@]}\"\necho \"Hammasi: ${ismlar[*]}\"\n\nfor ism in \"${ismlar[@]}\"; do\n  echo \"- $ism\"\ndone",
          "output": "Birinchi: Ali\nSoni: 4\nHammasi: Ali Aziza Bek Dilnoza\n- Ali\n- Aziza\n- Bek\n- Dilnoza"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>${ismlar[@]}</code>",
              "Barcha elementlar alohida"
            ],
            [
              "<code>${#ismlar[@]}</code>",
              "Elementlar soni"
            ],
            [
              "<code>${ismlar[0]}</code>",
              "Birinchi element"
            ],
            [
              "<code>ismlar+=(yangi)</code>",
              "Oxiriga element qo'shadi"
            ],
            [
              "<code>${#ismlar[1]}</code>",
              "Ikkinchi element uzunligi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Massivni doim qo'shtirnoqda oching",
          "html": "<code>\"${ismlar[@]}\"</code> yozuvida har bir element alohida so'z bo'lib qoladi, hatto ichida bo'sh joy bo'lsa ham. Tirnoqsiz <code>${ismlar[@]}</code> esa elementlarni bo'lib yuborishi mumkin."
        },
        {
          "type": "code",
          "title": "matn.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nism=\"Aziza\"\nfayl=\"/tmp/hisobot.txt\"\n\necho \"${ism^^}\"\necho \"${ism,,}\"\necho \"${#ism}\"\necho \"${ism:0:3}\"\necho \"${ism/A/Z}\"\necho \"${fayl##*/}\"\necho \"${fayl%.txt}.md\"",
          "output": "AZIZA\naziza\n5\nAzi\nZziza\nhisobot.txt\n/tmp/hisobot.md"
        }
      ],
      "quiz": [
        {
          "q": "Massivning barcha elementlarini alohida olish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "${ismlar[0]}",
            "${ismlar}",
            "${ismlar[@]}",
            "${#ismlar}"
          ],
          "answer": 2,
          "explain": "${ismlar[@]} barcha elementlarni beradi; qo'shtirnoq ichida ular alohida saqlanadi."
        },
        {
          "q": "Massiv elementlari sonini qaysi yozuv beradi?",
          "options": [
            "${ismlar[-1]}",
            "${ismlar}",
            "${#ismlar[@]}",
            "${ismlar[@]}"
          ],
          "answer": 2,
          "explain": "${#nom[@]} massiv elementlarining sonini qaytaradi."
        },
        {
          "q": "${fayl##*/} nima qiladi?",
          "options": [
            "Kengaytmani o'chiradi",
            "Fayl hajmini beradi",
            "Papka yo'lini qoldiradi",
            "Fayl nomini yo'lsiz beradi"
          ],
          "answer": 3,
          "explain": "##*/ boshidan oxirgi slashgacha bo'lgan qismini olib tashlaydi va faqat fayl nomini qoldiradi."
        }
      ]
    },
    {
      "id": 8,
      "title": "Quvurlar, yo'naltirish va globlar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Quvur (<code>|</code>) bir buyruqning chiqishini ikkinchisining kirishiga uzatadi. Yo'naltirish (<code>&gt;</code>, <code>&gt;&gt;</code>) chiqishni faylga yozadi. Globlar (<code>*</code>, <code>?</code>) fayl nomlarini shablon bo'yicha tanlaydi."
        },
        {
          "type": "code",
          "title": "quvur.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan-pipe-demo\"\nmkdir -p \"$demo\"\nprintf \"olma\\nnok\\nuzum\\n\" > \"$demo/mevalar.txt\"\nprintf \"olma\\nuzum\\n\" > \"$demo/saralangan.txt\"\n\nsort \"$demo/mevalar.txt\" | uniq | wc -l\ngrep -c \"uzum\" \"$demo/saralangan.txt\"\nhead -n 2 \"$demo/mevalar.txt\"",
          "output": "3\n1\nolma\nnok"
        },
        {
          "type": "table",
          "head": [
            "Operator",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>&gt; fayl</code>",
              "Chiqishni faylga yozadi (ustiga)"
            ],
            [
              "<code>&gt;&gt; fayl</code>",
              "Chiqishni fayl oxiriga qo'shadi"
            ],
            [
              "<code>2&gt; fayl</code>",
              "Xatolarni faylga yozadi"
            ],
            [
              "<code>2&gt;&amp;1</code>",
              "Xatolarni standart chiqishga qo'shadi"
            ],
            [
              "<code>|</code>",
              "Chiqishni keyingi buyruqqa uzatadi"
            ],
            [
              "<code>&lt; fayl</code>",
              "Faylni kirish sifatida o'qiydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "glob.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan-glob-demo\"\nmkdir -p \"$demo\"\ntouch \"$demo/a.txt\" \"$demo/b.txt\" \"$demo/c.md\"\n\nfor fayl in \"$demo\"/*.txt; do\n  echo \"Topildi: $fayl\"\ndone\n\necho \"Xato xabar\" >&2",
          "output": "Topildi: /tmp/noldan-glob-demo/a.txt\nTopildi: /tmp/noldan-glob-demo/b.txt\nXato xabar"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "> faylni o'chiradi",
          "html": "<code>&gt;</code> mavjud faylning eski mazmunini ustiga yozadi. Muhim faylga yozishdan oldin <code>ls</code> yoki <code>[[ -e ]]</code> bilan tekshirib oling. <code>&gt;&gt;</code> esa mazmunni saqlab, oxiriga qo'shadi."
        }
      ],
      "quiz": [
        {
          "q": ">> operatori nima qiladi?",
          "options": [
            "Fayl oxiriga qo'shadi",
            "Faylni o'qiydi",
            "Xatoni yo'naltiradi",
            "Faylni ustiga yozadi"
          ],
          "answer": 0,
          "explain": ">> mavjud faylni o'chirmaydi, chiqishni uning oxiriga qo'shadi."
        },
        {
          "q": "2>&1 nimani bildiradi?",
          "options": [
            "Xatolarni standart chiqishga yo'naltiradi",
            "Ikkita fayl yaratadi",
            "Xatoni o'chiradi",
            "Standart chiqishni xatolarga yo'naltiradi"
          ],
          "answer": 0,
          "explain": "2 — stderr, 1 — stdout; 2>&1 stderr'ni stdout oqimiga qo'shadi."
        },
        {
          "q": "*.txt yozuvi nima vazifani bajaradi?",
          "options": [
            "O'zgaruvchi e'lon qiladi",
            "Oddiy matn",
            "Fayl nomlarini shablon bo'yicha tanlaydi",
            "Buyruq yaratadi"
          ],
          "answer": 2,
          "explain": "*.txt glob namunasi .txt bilan tugaydigan fayl nomlarini moslashtiradi."
        }
      ]
    },
    {
      "id": 9,
      "title": "grep, sed va awk asoslari",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Uchta matn vositasi kundalik ishda ko'p kerak bo'ladi: <code>grep</code> qatorlarni qidiradi, <code>sed</code> matnni almashtiradi, <code>awk</code> esa ustunlar bo'yicha hisob-kitob qiladi. Ular quvur bilan birga juda kuchli."
        },
        {
          "type": "code",
          "title": "matn.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan-matn.txt\"\nprintf \"Ali 85\\nAziza 92\\nBek 78\\n\" > \"$fayl\"\n\necho \"90 dan yuqori:\"\nawk '$2 > 90 { print $1, $2 }' \"$fayl\"\n\necho \"Az bilan boshlanadi:\"\ngrep \"^Az\" \"$fayl\"\n\necho \"78 ni 80 ga almashtirish:\"\nsed 's/78/80/' \"$fayl\"",
          "output": "90 dan yuqori:\nAziza 92\nAz bilan boshlanadi:\nAziza 92\n78 ni 80 ga almashtirish:\nAli 85\nAziza 92\nBek 80"
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
              "<code>grep</code>",
              "Qatorlarni naqsh bo'yicha qidiradi",
              "<code>grep \"^A\" fayl</code>"
            ],
            [
              "<code>grep -c</code>",
              "Mos qatorlar sonini sanaydi",
              "<code>grep -c \"uzum\" fayl</code>"
            ],
            [
              "<code>sed 's/a/b/'</code>",
              "Birinchi moslikni almashtiradi",
              "<code>sed 's/78/80/' fayl</code>"
            ],
            [
              "<code>sed -n '2p'</code>",
              "Faqat 2-qatorni chiqaradi",
              "<code>sed -n '2p' fayl</code>"
            ],
            [
              "<code>awk '{print $2}'</code>",
              "Ikkinchi ustunni chiqaradi",
              "<code>awk '{print $2}' fayl</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "grep topmasa xato kodi qaytaradi",
          "html": "Mos qator topilmasa, <code>grep</code> <code>1</code> holat kodi bilan tugaydi va <code>set -e</code> skriptni to'xtatishi mumkin. Topilmasligi normal holat bo'lsa, <code>grep ... || true</code> yoki <code>if grep ...; then</code> ishlatilsin. <code>sed -i</code> faylni joyida o'zgartiradi — avval nusxa oling."
        },
        {
          "type": "code",
          "title": "hisob.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan-matn.txt\"\nprintf \"Ali 85\\nAziza 92\\nBek 78\\n\" > \"$fayl\"\n\nprintf \"O'rtacha: \"\nawk '{ summa += $2; son += 1 } END { printf \"%.1f\\n\", summa / son }' \"$fayl\"\n\ngrep -c \"a\" \"$fayl\"\nsed -n '2p' \"$fayl\"",
          "output": "O'rtacha: 85.0\n1\nAziza 92"
        }
      ],
      "quiz": [
        {
          "q": "sed 's/78/80/' fayl buyrug'i nima qiladi?",
          "options": [
            "Yangi fayl yaratadi",
            "Faylni butunlay o'zgartiradi",
            "Birinchi 78 mosligini 80 ga almashtirib chiqaradi",
            "Barcha qatorlarni o'chiradi"
          ],
          "answer": 2,
          "explain": "sed sukut bo'yicha har qatordagi birinchi moslikni almashtiradi va natijani chiqaradi; fayl o'zgarmaydi."
        },
        {
          "q": "awk'da $2 nimani bildiradi?",
          "options": [
            "Ikkinchi maydonni",
            "Ikkinchi qatorni",
            "Jami qatorlar sonini",
            "Fayl nomini"
          ],
          "answer": 0,
          "explain": "awk har qatorni maydonlarga ajratadi; $2 — ikkinchi maydon."
        },
        {
          "q": "grep mos qator topmasa qanday holat kodi qaytaradi?",
          "options": [
            "0",
            "1",
            "2",
            "127"
          ],
          "answer": 1,
          "explain": "Moslik topilmasa grep 1, fayl xatosi bo'lsa 2 kodini qaytaradi."
        }
      ]
    },
    {
      "id": 10,
      "title": "Xatolar va xavfsiz fayl amallari",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Ishonchli skript avval shartlarni tekshiradi, keyin amal bajaradi. Fayl bor-yo'qligi, papka yozishga ochiqligi va buyruq natijasi tekshirilmasa, xato jimgina o'tib ketishi mumkin. <code>set -euo pipefail</code> va aniq xabar shu joyda yordam beradi."
        },
        {
          "type": "code",
          "title": "nusxa.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nmanba=\"/tmp/noldan-manba.txt\"\nnishon=\"/tmp/noldan-nusxa.txt\"\n\nprintf \"muhim ma'lumot\\n\" > \"$manba\"\n\nif [[ ! -f $manba ]]; then\n  echo \"Manba topilmadi: $manba\" >&2\n  exit 1\nfi\n\ncp -- \"$manba\" \"$nishon\"\necho \"Nusxa tayyor: $nishon\"",
          "output": "Nusxa tayyor: /tmp/noldan-nusxa.txt"
        },
        {
          "type": "table",
          "head": [
            "Tekshiruv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>[[ -f $fayl ]]</code>",
              "Oddiy fayl mavjud"
            ],
            [
              "<code>[[ -d $papka ]]</code>",
              "Papka mavjud"
            ],
            [
              "<code>[[ -w $papka ]]</code>",
              "Yozish huquqi bor"
            ],
            [
              "<code>[[ -r $fayl ]]</code>",
              "O'qish huquqi bor"
            ],
            [
              "<code>[[ -e $yo'l ]]</code>",
              "Fayl yoki papka mavjud"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Avval reja, keyin amal",
          "html": "O'chirish yoki ko'chirishdan oldin nima o'zgarishini <code>echo</code> bilan ko'rsating. <code>cp</code> va <code>mv</code> buyruqlarida yo'lni qo'shtirnoqqa oling va <code>--</code> bilan variantlar tugaganini bildiring. Fayllarni butunlay o'chiruvchi buyruqlarni o'ylamasdan ishlatmang — ular qaytarilmas yo'qotishga olib kelishi mumkin."
        },
        {
          "type": "code",
          "title": "xavfsiz.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nxato() {\n  echo \"Xato: $1\" >&2\n  exit 1\n}\n\npapka=\"/tmp/noldan-org\"\n[[ -d $papka ]] || mkdir -p \"$papka\"\n[[ -w $papka ]] || xato \"Papka yozish uchun ochiq emas\"\n\nprintf \"xavfsiz\\n\" > \"$papka/demo.txt\"\necho \"Yozildi: $papka/demo.txt\"",
          "output": "Yozildi: /tmp/noldan-org/demo.txt"
        }
      ],
      "quiz": [
        {
          "q": "Fayl mavjudligini qaysi tekshiruv aniqlaydi?",
          "options": [
            "[[ -z $fayl ]]",
            "[[ -n $fayl ]]",
            "[[ -d $fayl ]]",
            "[[ -f $fayl ]]"
          ],
          "answer": 3,
          "explain": "-f oddiy fayl mavjudligini tekshiradi; -d papka uchun."
        },
        {
          "q": "Fayl yo'lini \"$fayl\" ko'rinishida qo'shtirnoqqa olish nima uchun kerak?",
          "options": [
            "Bo'sh joy va glob xatolaridan saqlaydi",
            "Kodni tezlashtiradi",
            "Faylni rangli qiladi",
            "Faylni o'chiradi"
          ],
          "answer": 0,
          "explain": "Qo'shtirnoq bo'sh joyli yo'lni bitta so'z sifatida saqlaydi va glob kengayishini to'xtatadi."
        },
        {
          "q": "set -e qanday ishlaydi?",
          "options": [
            "Faqat log yozadi",
            "Tsikl yaratadi",
            "Xatoda skriptni to'xtatadi",
            "Xatoni yashiradi"
          ],
          "answer": 2,
          "explain": "set -e muvaffaqiyatsiz buyruqdan keyin skriptni darhol tugatadi."
        }
      ]
    },
    {
      "id": 11,
      "title": "Avtomatlashtirish va skript tuzilishi",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Katta skriptni tartibli saqlash oson: yuqorida sozlamalar va funksiyalar, pastda <code>main \"$@\"</code>. Buyruqlarni <code>case</code> bilan ajratish mumkin. Takrorlanadigan ishlarni rejalashtirish uchun cron xizmati ishlatiladi, lekin cron vazifasini faqat o'z muhitingizda va ehtiyotkorlik bilan sozlang."
        },
        {
          "type": "code",
          "title": "organizer.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nusage() {\n  printf \"Foydalanish: %s [salom|hisobot]\\n\" \"$0\"\n}\n\nsalom() {\n  echo \"Salom, avtomatlashtirish!\"\n}\n\nhisobot() {\n  echo \"Bugungi hisobot tayyor\"\n}\n\nmain() {\n  local buyruq=\"${1:-salom}\"\n  case \"$buyruq\" in\n    salom) salom ;;\n    hisobot) hisobot ;;\n    *) usage; return 64 ;;\n  esac\n}\n\nmain \"$@\"",
          "output": "Salom, avtomatlashtirish!"
        },
        {
          "type": "table",
          "head": [
            "Maydon",
            "Ma'nosi",
            "Qiymat"
          ],
          "rows": [
            [
              "1",
              "Daqiqa",
              "<code>30</code>"
            ],
            [
              "2",
              "Soat",
              "<code>2</code>"
            ],
            [
              "3",
              "Oy kuni",
              "<code>*</code>"
            ],
            [
              "4",
              "Oy",
              "<code>*</code>"
            ],
            [
              "5",
              "Hafta kuni",
              "<code>*</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Cron muhiti minimal",
          "html": "<code>30 2 * * * /home/aziza/bin/zaxira.sh</code> har kuni soat 02:30 da ishga tushadi. Cron'da PATH qisqartirilgan bo'ladi, shuning uchun skript ichida buyruqlarga absolyut yo'l yoki to'liq PATH bering, chiqishni log fayliga yo'naltiring. Ushbu kursda cron o'rnatilmaydi — faqat tuzilishi tushuntiriladi."
        },
        {
          "type": "code",
          "title": "log.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nlog=\"/tmp/noldan-avtomat.log\"\n: > \"$log\"\n\nprintf \"%s | ish boshlandi\\n\" \"2026-10-23 02:30\" >> \"$log\"\nprintf \"%s | hisobot tayyor\\n\" \"2026-10-23 02:31\" >> \"$log\"\n\ncat \"$log\"",
          "output": "2026-10-23 02:30 | ish boshlandi\n2026-10-23 02:31 | hisobot tayyor"
        }
      ],
      "quiz": [
        {
          "q": "Cron yozuvidagi beshta maydon qanday tartibda keladi?",
          "options": [
            "Hafta, kun, oy, soat, daqiqa",
            "Daqiqa, soat, oy kuni, oy, hafta kuni",
            "Soat, daqiqa, kun, oy, hafta",
            "Kun, oy, hafta, daqiqa, soat"
          ],
          "answer": 1,
          "explain": "Cron tartibi: daqiqa, soat, oy kuni, oy, hafta kuni."
        },
        {
          "q": "Cron'da skript nima uchun absolyut yo'llardan foydalanishi kerak?",
          "options": [
            "Faqat Windows'da ishlaydi",
            "Cron to'liq PATH meros oladi",
            "Cron PATH'i minimal bo'lishi mumkin",
            "PATH umuman mavjud emas"
          ],
          "answer": 2,
          "explain": "Cron cheklangan muhitda ishlaydi; nisbiy yo'l va qisqa PATH buyruq topilmasligiga olib kelishi mumkin."
        },
        {
          "q": "case operatori nima uchun ishlatiladi?",
          "options": [
            "Bir nechta variantni taqqoslash uchun",
            "Fayl ochish uchun",
            "Matn almashtirish uchun",
            "Tsikl yaratish uchun"
          ],
          "answer": 0,
          "explain": "case qiymatni bir nechta namunalar bilan taqqoslab, mos blokni bajaradi."
        }
      ]
    },
    {
      "id": 12,
      "title": "Mini loyiha: xavfsiz zaxira skripti",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Endi o'rganganlarimizni birlashtiramiz: argumentlar, tekshiruvlar, tsikl, funksiyalar va dry-run. Skript papkadagi fayllarni boshqa papkaga nusxalaydi. Sukut bo'yicha u faqat rejani ko'rsatadi, <code>DRY_RUN=0</code> berilgandagina haqiqiy nusxa yaratadi."
        },
        {
          "type": "code",
          "title": "zaxira.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nMANBA=\"${1:-/tmp/noldan-loyiha}\"\nNISHON=\"${2:-/tmp/noldan-zaxira}\"\nDRY_RUN=\"${DRY_RUN:-1}\"\n\nmkdir -p \"$MANBA\" \"$NISHON\"\nprintf \"hisobot\\n\" > \"$MANBA/hisobot.txt\"\nprintf \"eslatma\\n\" > \"$MANBA/eslatma.md\"\n\nfor fayl in \"$MANBA\"/*; do\n  [[ -f $fayl ]] || continue\n  nomi=$(basename \"$fayl\")\n  if [[ $DRY_RUN == \"1\" ]]; then\n    echo \"[dry-run] $fayl -> $NISHON/$nomi\"\n  else\n    cp -- \"$fayl\" \"$NISHON/$nomi\"\n    echo \"[nusxa] $fayl -> $NISHON/$nomi\"\n  fi\ndone\n\necho \"Tayyor. Rejim: DRY_RUN=$DRY_RUN\"",
          "output": "[dry-run] /tmp/noldan-loyiha/eslatma.md -> /tmp/noldan-zaxira/eslatma.md\n[dry-run] /tmp/noldan-loyiha/hisobot.txt -> /tmp/noldan-zaxira/hisobot.txt\nTayyor. Rejim: DRY_RUN=1"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Dry-run birinchi",
          "html": "Dry-run rejimi hech narsani nusxalamaydi, faqat nima qilinishini ko'rsatadi. Natijani ko'rib chiqqach, <code>DRY_RUN=0 bash zaxira.sh /tmp/noldan-loyiha /tmp/noldan-zaxira</code> bilan haqiqiy nusxa olish mumkin. Har qanday avtomatlashtirishda avval rejani tekshirish — eng yaxshi odat."
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "DRY_RUN=0 bash zaxira.sh /tmp/noldan-loyiha /tmp/noldan-zaxira",
          "output": "[nusxa] /tmp/noldan-loyiha/eslatma.md -> /tmp/noldan-zaxira/eslatma.md\n[nusxa] /tmp/noldan-loyiha/hisobot.txt -> /tmp/noldan-zaxira/hisobot.txt\nTayyor. Rejim: DRY_RUN=0"
        },
        {
          "type": "ul",
          "items": [
            "Tekshiruv: manba papka mavjudligi va yozish huquqi.",
            "Xavfsizlik: <code>set -euo pipefail</code>, qo'shtirnoqli yo'llar va <code>cp --</code>.",
            "Ko'rinish: har bir fayl uchun aniq <code>[dry-run]</code> yoki <code>[nusxa]</code> qatori.",
            "Kengaytirish: sana bo'yicha papka, log fayli yoki eski nusxalarni tekshirish qo'shish mumkin."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Dry-run rejimi nima qiladi?",
          "options": [
            "Rejani ko'rsatadi, lekin o'zgartirmaydi",
            "Fayllarni o'chiradi",
            "Zaxirani tiklaydi",
            "O'zgarishlarni amalda bajaradi"
          ],
          "answer": 0,
          "explain": "Dry-run faqat bajariladigan amallarni ko'rsatadi; haqiqiy nusxa olinmaydi."
        },
        {
          "q": "basename buyrug'i nima qiladi?",
          "options": [
            "Faqat fayl nomini qaytaradi",
            "Kengaytmani o'chiradi",
            "Fayl hajmini ko'rsatadi",
            "Papka yo'lini qaytaradi"
          ],
          "answer": 0,
          "explain": "basename /tmp/a/b.txt natijasi b.txt bo'ladi — fayl nomi yo'lsiz olinadi."
        },
        {
          "q": "for fayl in \"$MANBA\"/* yozuvida \"$MANBA\" nima uchun qo'shtirnoqda?",
          "options": [
            "Faqat bitta fayl oladi",
            "Globni butunlay o'chiradi",
            "Bo'sh joyli papka yo'lini to'g'ri ishlatadi",
            "Fayllarni o'chiradi"
          ],
          "answer": 2,
          "explain": "Qo'shtirnoq papka yo'lini bitta so'z sifatida saqlaydi, yulduzcha esa glob bo'lib qoladi."
        }
      ]
    },
    {
      "id": 13,
      "title": "Kengaytirishlar: qavslar, buyruq va arifmetika",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Bash buyruqni bajarishdan oldin matn ichidagi maxsus yozuvlarni <b>kengaytiradi</b>. Eng ko'p uchraydiganlari: jingalak qavs (<code>{a,b}</code>), parametr (<code>$ism</code>), buyruq almashtirish (<code>$(buyruq)</code>) va arifmetika (<code>$((ifoda))</code>). Har birining natijasi qachon va qanday hosil bo'lishini bilish xatolarning ko'pini oldini oladi."
        },
        {
          "type": "code",
          "title": "kengaytma.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfor fayl in fayl-{a,b}.txt; do\n  echo \"Fayl: $fayl\"\ndone\n\necho \"Natija: $(printf '%s' \"Noldan\")\"\necho \"Hisob: $((6 * 7))\"",
          "output": "Fayl: fayl-a.txt\nFayl: fayl-b.txt\nNatija: Noldan\nHisob: 42"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Vazifasi",
            "Natija"
          ],
          "rows": [
            [
              "<code>{a,b}</code>",
              "Jingalak qavs ro'yxat yaratadi",
              "<code>a b</code>"
            ],
            [
              "<code>$(buyruq)</code>",
              "Buyruq chiqishini matnga oladi",
              "<code>Noldan</code>"
            ],
            [
              "<code>$((7 * 6))</code>",
              "Butun sonli hisob bajaradi",
              "<code>42</code>"
            ],
            [
              "<code>$ism</code>",
              "O'zgaruvchi qiymatini qo'yadi",
              "<code>Aziza</code>"
            ]
          ]
        },
        {
          "type": "code",
          "title": "tartib.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nism=\"Aziza\"\necho 'Yagona: $ism va $(echo x)'\necho \"Ikki: $ism, uzunlik ${#ism}\"\necho \"Arifmetika: $((2 ** 10))\"\necho \"Qochirilgan: \\$ism\"",
          "output": "Yagona: $ism va $(echo x)\nIkki: Aziza, uzunlik 5\nArifmetika: 1024\nQochirilgan: $ism"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Kengaytirishni qo'shtirnoq boshqaradi",
          "html": "Yagona tirnoq ichida hech qanday kengaytirish ishlamaydi. Ikki tirnoq parametr va buyruq almashtirishni ochadi, lekin bo'sh joy bo'yicha ajratishni to'xtatadi. Shuning uchun o'zgaruvchini deyarli har doim <code>\"$ism\"</code> ko'rinishida yozing. Buyruq almashtirish oxiridagi yangi qatorlarni olib tashlaydi, shuning uchun natijani <code>printf '%s'</code> bilan aniq bering."
        }
      ],
      "quiz": [
        {
          "q": "Bash kengaytirishlarida jingalak qavs qachon bajariladi?",
          "options": [
            "Boshqa kengaytirishlardan oldin",
            "Faqat arifmetikadan keyin",
            "Parametrlardan keyin",
            "Buyruq almashtirishdan keyin"
          ],
          "answer": 0,
          "explain": "Jingalak qavs kengaytirishi boshqa kengaytirishlardan oldin bajariladi, shuning uchun fayl nomlari ro'yxatini tez yaratadi."
        },
        {
          "q": "echo '$ism' buyrug'i o'zgaruvchi o'rniga nimani chiqaradi?",
          "options": [
            "Sintaksis xatosini",
            "$ism qiymatini",
            "$ism matnini o'zini",
            "Bo'sh qatorni"
          ],
          "answer": 2,
          "explain": "Yagona tirnoq ichida parametr kengaytirilmaydi, shuning uchun $ism so'zma-so'z chiqadi."
        },
        {
          "q": "Butun sonli arifmetik hisob qaysi yozuvda bajariladi?",
          "options": [
            "$((5 + 2))",
            "$(5 + 2)",
            "<(5 + 2)",
            "[5 + 2]"
          ],
          "answer": 0,
          "explain": "Ikki qavsli $((...)) arifmetik kengaytirish bo'lib, ifodani hisoblab natijasini beradi."
        }
      ]
    },
    {
      "id": 14,
      "title": "Parametr kengaytmalari: standart va kesish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Parametr kengaytmalari o'zgaruvchi bilan ishlashni ancha xavfsiz qiladi. <code>${ISM:-mehmon}</code> qiymat bo'sh bo'lsa standart qiymat beradi, <code>${ISM:=Aziza}</code> esa o'zgaruvchini ham yaratadi. Fayl yo'llarini kesish uchun <code>%</code>, <code>%%</code>, <code>#</code> va <code>##</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "standart.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nunset ISM\necho \"1: ${ISM:-mehmon}\"\necho \"2: ${ISM:=Aziza}\"\necho \"3: $ISM\"\necho \"4: ${ISM:?ISM kerak}\"\n\nfayl=\"/tmp/noldan/hisobot.txt\"\necho \"5: ${fayl%.txt}.md\"\necho \"6: ${fayl##*/}\"\necho \"7: ${fayl%/*}\"",
          "output": "1: mehmon\n2: Aziza\n3: Aziza\n4: Aziza\n5: /tmp/noldan/hisobot.md\n6: hisobot.txt\n7: /tmp/noldan"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>${X:-q}</code>",
              "Bo'sh bo'lsa <code>q</code> beradi, X o'zgarmaydi"
            ],
            [
              "<code>${X:=q}</code>",
              "Bo'sh bo'lsa q ni X ga yozadi"
            ],
            [
              "<code>${X:?xabar}</code>",
              "Bo'sh bo'lsa xato bilan to'xtaydi"
            ],
            [
              "<code>${X:+q}</code>",
              "X to'la bo'lsa q beradi"
            ],
            [
              "<code>${f%.txt}</code>",
              "Eng qisqa o'ng qo'shimchani olib tashlaydi"
            ],
            [
              "<code>${f##*/}</code>",
              "Eng uzun chap qismni olib tashlaydi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "matn.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nmatn=\"Bash darslari\"\necho \"${matn/dars/amaliy}\"\necho \"${matn//a/A}\"\necho \"${matn:0:4}\"\necho \"${matn^^}\"\necho \"${matn,,}\"",
          "output": "Bash amaliylari\nBAsh dArslAri\nBash\nBASH DARSLARI\nbash darslari"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "set -u bilan birga ishlating",
          "html": "<code>set -u</code> aniqlanmagan o'zgaruvchini xato deb hisoblaydi. <code>${ISM:-mehmon}</code> kabi standart qiymat bu holatda ham xavfsiz ishlaydi. <code>${ISM:?xabar}</code> esa talab qilingan qiymat berilmasa, aniq xabar bilan skriptni to'xtatadi. Bu usul konfiguratsiya va argumentlarni tekshirishda juda foydali."
        }
      ],
      "quiz": [
        {
          "q": "O'zgaruvchi bo'sh bo'lsa, lekin uning o'zi o'zgarmasligi kerak bo'lsa qaysi yozuv ishlatiladi?",
          "options": [
            "${ISM:-mehmon}",
            "${ISM:?mehmon}",
            "${#ISM}",
            "${ISM:=mehmon}"
          ],
          "answer": 0,
          "explain": ":- standart qiymat qaytaradi, ammo o'zgaruvchiga yozmaydi; := esa yozadi."
        },
        {
          "q": "${fayl%.txt} kengaytmasi nima qiladi?",
          "options": [
            "Faqat papka nomini qoldiradi",
            "Fayl nomidan .txt ni olib tashlaydi",
            "Faylning boshiga .txt qo'shadi",
            "Faylni o'chiradi"
          ],
          "answer": 1,
          "explain": "% eng qisqa mos qo'shimchani olib tashlaydi; bu yerda .txt qo'shimchasi olib tashlanadi."
        },
        {
          "q": "${matn^^} natijasi qanday bo'ladi?",
          "options": [
            "Barcha harflarni katta qiladi",
            "Matnni kichik harflarga o'giradi",
            "Birinchi harfni katta qiladi",
            "Matnni teskari qiladi"
          ],
          "answer": 0,
          "explain": "^^ barcha harflarni katta harfga o'giradi; ,, esa kichik harfga o'giradi."
        }
      ]
    },
    {
      "id": 15,
      "title": "Muhit, export va konfiguratsiya",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Har bir jarayon o'z <b>muhitiga</b> ega. <code>export</code> qilingan o'zgaruvchi bola jarayonlarga meros bo'lib o'tadi, oddiy o'zgaruvchi esa faqat joriy shell ichida qoladi. <code>PATH</code>, <code>HOME</code> va <code>LANG</code> kabi muhit o'zgaruvchilari shell xatti-harakatini belgilaydi."
        },
        {
          "type": "code",
          "title": "muhit.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nexport LOYIHA=\"noldan\"\nTIL=\"bash\"\n\necho \"export: $LOYIHA\"\nbash -c 'echo \"bola: $LOYIHA\"'\nbash -c 'echo \"TIL: ${TIL:-belgilanmagan}\"'\necho \"env: $(env | grep '^LOYIHA=')\"",
          "output": "export: noldan\nbola: noldan\nTIL: belgilanmagan\nenv: LOYIHA=noldan"
        },
        {
          "type": "table",
          "head": [
            "Buyruq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>export X=1</code>",
              "X ni muhitga chiqaradi"
            ],
            [
              "<code>env</code>",
              "Muhit o'zgaruvchilarini ko'rsatadi"
            ],
            [
              "<code>unset X</code>",
              "O'zgaruvchini o'chiradi"
            ],
            [
              "<code>readonly X=1</code>",
              "X ni o'zgartirishni taqiqlaydi"
            ],
            [
              "<code>PATH=...:$PATH</code>",
              "Buyruq qidiriladigan yo'llarni kengaytiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "conf.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nconf=\"/tmp/noldan/app.conf\"\nmkdir -p /tmp/noldan\nprintf 'TIL=bash\\nPORT=8080\\n' > \"$conf\"\n\nwhile IFS='=' read -r kalit qiymat; do\n  [[ -z $kalit || $kalit == \\#* ]] && continue\n  printf '%s -> %s\\n' \"$kalit\" \"$qiymat\"\ndone < \"$conf\"",
          "output": "TIL -> bash\nPORT -> 8080"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": ".env avtomatik yuklanmaydi",
          "html": "Bash <code>.env</code> faylini o'zi o'qimaydi; uni <code>source .env</code> yoki yuqoridagi kabi tsikl bilan yuklash kerak. Konfiguratsiyani o'qiyotganda qiymatlarni tekshiring va <code>eval</code> bilan begona matnni bajarmang. Parol va tokenlarni kodga yoki Git tarixiga yozmang — ularni muhit o'zgaruvchisi yoki maxfiy fayl orqali bering."
        }
      ],
      "quiz": [
        {
          "q": "export qilingan o'zgaruvchining asosiy xususiyati nima?",
          "options": [
            "Faqat son bo'ladi",
            "Faqat joriy qatorda ko'rinadi",
            "Bola jarayonlarga meros bo'ladi",
            "Avtomatik o'chiriladi"
          ],
          "answer": 2,
          "explain": "export o'zgaruvchini muhitga chiqaradi va undan keyin ishga tushgan bola jarayonlar ham uni ko'radi."
        },
        {
          "q": "Muhit o'zgaruvchilarining to'liq ro'yxatini qaysi buyruq ko'rsatadi?",
          "options": [
            "readonly",
            "source",
            "set -e",
            "env"
          ],
          "answer": 3,
          "explain": "env joriy muhit o'zgaruvchilarini va ularning qiymatlarini chiqaradi."
        },
        {
          "q": "readonly X=1 qanday natija beradi?",
          "options": [
            "X ni songa aylantiradi",
            "X ni faqat o'qish uchun qulflaydi",
            "X ni o'chiradi",
            "X ni eksport qiladi"
          ],
          "answer": 1,
          "explain": "readonly bilan e'lon qilingan o'zgaruvchiga keyin qiymat berib bo'lmaydi."
        }
      ]
    },
    {
      "id": 16,
      "title": "Murakkab shartlar va arifmetik tekshiruvlar",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Amaliy skriptda bir nechta shartni birga tekshirish kerak bo'ladi. <code>[[ ... && ... ]]</code> mantiqiy VA, <code>||</code> esa YOKI ma'nosini beradi. <code>(( ... ))</code> butun sonlar bilan ishlaydi va <code>=~</code> operatori muntazam ifoda bo'yicha tekshiradi."
        },
        {
          "type": "code",
          "title": "shart.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nyosh=25\nmamlakat=\"UZ\"\n\nif [[ $yosh -ge 18 && $mamlakat == \"UZ\" ]]; then\n  echo \"Ruxsat\"\nfi\n\nif [[ ! -f /tmp/noldan/mavjud-emas-16.txt ]]; then\n  echo \"Fayl yo'q\"\nfi\n\nif [[ \"42\" =~ ^[0-9]+$ ]]; then\n  echo \"Faqat raqam\"\nfi",
          "output": "Ruxsat\nFayl yo'q\nFaqat raqam"
        },
        {
          "type": "code",
          "title": "arifmetika.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nson=17\n(( son % 2 == 1 )) && echo \"Toq\"\n(( son += 5 ))\necho \"Yangi: $son\"\n(( son > 20 )) && echo \"20 dan katta\"",
          "output": "Toq\nYangi: 22\n20 dan katta"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Tekshiradi"
          ],
          "rows": [
            [
              "<code>[[ $a && $b ]]</code>",
              "Ikkala shart ham rost"
            ],
            [
              "<code>[[ $a || $b ]]</code>",
              "Kamida bittasi rost"
            ],
            [
              "<code>[[ ! $a ]]</code>",
              "Shartni inkor qiladi"
            ],
            [
              "<code>[[ $s =~ ^[0-9]+$ ]]</code>",
              "Matn faqat raqamlardan iborat"
            ],
            [
              "<code>(( a &lt; b ))</code>",
              "Sonlar taqqoslanadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "(( )) va set -e",
          "html": "<code>(( son-- ))</code> natijasi nolga teng bo'lsa, buyruq <b>muvaffaqiyatsiz</b> holat kodi qaytaradi. <code>set -e</code> shu sababli skriptni to'xtatishi mumkin. Hisoblagichni kamaytirishda <code>son=$((son - 1))</code> xavfsizroq. <code>=~</code> ichidagi naqshni iqtibosga olmang, aks holda u oddiy matn sifatida qidiriladi."
        }
      ],
      "quiz": [
        {
          "q": "Muntazam ifoda bo'yicha tekshirish uchun qaysi operator ishlatiladi?",
          "options": [
            "!=",
            "-f",
            "==",
            "=~"
          ],
          "answer": 3,
          "explain": "=~ operatori [[ ]] ichida muntazam ifodani qo'llaydi; == esa glob yoki oddiy matn taqqoslaydi."
        },
        {
          "q": "son=17 bo'lsa, (( son += 5 )) dan keyin son nechaga teng?",
          "options": [
            "5",
            "17",
            "22",
            "12"
          ],
          "answer": 2,
          "explain": "+= qo'shib yozadi: 17 + 5 = 22."
        },
        {
          "q": "[[ ! -f $fayl ]] tekshiruvi nimani bildiradi?",
          "options": [
            "Fayl papka",
            "Fayl mavjud",
            "Fayl o'qishga ochiq",
            "Fayl mavjud emas"
          ],
          "answer": 3,
          "explain": "-f oddiy faylni tekshiradi; ! inkori esa fayl mavjud bo'lmaganda shartni rost qiladi."
        }
      ]
    },
    {
      "id": 17,
      "title": "case va select bilan boshqaruv",
      "minutes": 15,
      "blocks": [
        {
          "type": "p",
          "html": "<code>case</code> bitta qiymatni bir nechta namuna bilan taqqoslaydi va mos blokni bajaradi. Bu uzun <code>if/elif</code> zanjiridan o'qishliroq. <code>select</code> esa foydalanuvchiga raqamli menyu ko'rsatadi; u interaktiv skriptlarda qulay."
        },
        {
          "type": "code",
          "title": "menyu.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nbuyruq=\"${1:-holat}\"\ncase \"$buyruq\" in\n  start|boshlash) echo \"Ishga tushdi\" ;;\n  stop|toxtatish) echo \"To'xtatildi\" ;;\n  holat) echo \"Hammasi joyida\" ;;\n  *) echo \"Noma'lum buyruq: $buyruq\" >&2; exit 64 ;;\nesac",
          "output": "Hammasi joyida"
        },
        {
          "type": "table",
          "head": [
            "Namuna",
            "Mos keladi"
          ],
          "rows": [
            [
              "<code>start</code>",
              "Faqat start so'zi"
            ],
            [
              "<code>start|begin</code>",
              "start yoki begin"
            ],
            [
              "<code>*.txt</code>",
              ".txt bilan tugaydigan matn"
            ],
            [
              "<code>[0-9]</code>",
              "Bitta raqam"
            ],
            [
              "<code>*</code>",
              "Har qanday qiymat"
            ]
          ]
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "bash menyu.sh start\nbash menyu.sh \"noma'lum\" 2>&1 || echo \"Kod: $?\"",
          "output": "Ishga tushdi\nNoma'lum buyruq: noma'lum\nKod: 64"
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Standart buyruqni unutmang",
          "html": "Har bir <code>case</code> da <code>*)</code> tarmog'ini qo'shish yaxshi odat: u kutilmagan qiymatni ushlab, tushunarli xabar beradi. Har bir tarmoq <code>;;</code> bilan tugaydi. <code>select</code> menyusida foydalanuvchi kiritgan raqam <code>REPLY</code> da, tanlangan matn esa <code>PS3</code> bilan ko'rsatilgan o'zgaruvchida bo'ladi; <code>break</code> bilan menyudan chiqiladi."
        }
      ],
      "quiz": [
        {
          "q": "case ichida bitta tarmoqni tugatish uchun qaysi belgi ishlatiladi?",
          "options": [
            "&&",
            "||",
            "fi",
            ";;"
          ],
          "answer": 3,
          "explain": "Har bir case tarmog'i ;; bilan tugaydi; bu keyingi namunalarni tekshirmasdan chiqishni bildiradi."
        },
        {
          "q": "case ichidagi *) tarmog'i nima vazifani bajaradi?",
          "options": [
            "Skriptni to'xtatadi",
            "Fayllarni sanaydi",
            "Faqat bo'sh qiymatni oladi",
            "Oldingi tarmoqlarga mos kelmagan qiymatni oladi"
          ],
          "answer": 3,
          "explain": "*) har qanday qiymatga mos keladi va shuning uchun standart (fallback) tarmoq bo'lib xizmat qiladi."
        },
        {
          "q": "start|begin namunasi qanday qiymatlarga mos keladi?",
          "options": [
            "Faqat start",
            "Faqat begin",
            "start yoki begin",
            "start va begin birga"
          ],
          "answer": 2,
          "explain": "case ichida | belgisi alternativani bildiradi; ikkala so'zdan biri mos kelsa, tarmoq bajariladi."
        }
      ]
    },
    {
      "id": 18,
      "title": "Massivlar chuqur: indeks, assotsiativ va mapfile",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Bash massivi bir nom ostida bir nechta qiymat saqlaydi. Indeksli massivda elementlar 0 dan boshlanadi; assotsiativ massivda kalit matn bo'lishi mumkin. <code>mapfile</code> fayl qatorlarini to'g'ridan-to'g'ri massivga o'qiydi va tsikl yozishdan qutqaradi."
        },
        {
          "type": "code",
          "title": "massiv.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nmevalar=(\"olma\" \"nok\" \"uzum\" \"anjir\")\necho \"Soni: ${#mevalar[@]}\"\necho \"Oxirgi: ${mevalar[-1]}\"\nprintf '%s\\n' \"${mevalar[@]:1:2}\"\n\nmevalar[1]=\"behi\"\nunset 'mevalar[0]'\necho \"Indekslar: ${!mevalar[@]}\"\necho \"Qolgan: ${mevalar[*]}\"",
          "output": "Soni: 4\nOxirgi: anjir\nnok\nuzum\nIndekslar: 1 2 3\nQolgan: behi uzum anjir"
        },
        {
          "type": "code",
          "title": "assoc.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndeclare -A narx\nnarx[olma]=12000\nnarx[nok]=15000\n\nfor kalit in \"${!narx[@]}\"; do\n  echo \"$kalit: ${narx[$kalit]}\"\ndone | sort\n\nprintf 'olma\\nnok\\nuzum\\n' > /tmp/noldan/mevalar.txt\nmapfile -t royxat < /tmp/noldan/mevalar.txt\necho \"Qatorlar: ${#royxat[@]}\"\necho \"Birinchi: ${royxat[0]}\"",
          "output": "nok: 15000\nolma: 12000\nQatorlar: 3\nBirinchi: olma"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>${a[@]}</code>",
              "Barcha elementlar alohida"
            ],
            [
              "<code>${a[*]}</code>",
              "Elementlar bitta matnda"
            ],
            [
              "<code>${!a[@]}</code>",
              "Mavjud indekslar yoki kalitlar"
            ],
            [
              "<code>${#a[@]}</code>",
              "Elementlar soni"
            ],
            [
              "<code>${a[@]:2:3}</code>",
              "2-indeksdan 3 ta element"
            ],
            [
              "<code>declare -A a</code>",
              "Assotsiativ massiv yaratadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Bo'sh joyli elementlarni saqlang",
          "html": "Massivni tsiklda ochishda <code>for x in \"${a[@]}\"</code> yozing: qo'shtirnoq har bir elementni alohida saqlaydi. <code>unset 'a[0]'</code> elementni o'chiradi, lekin indekslar siljimaydi — massiv siyrak bo'lib qoladi. <code>mapfile -t</code> har bir qatordagi oxirgi yangi qatorni olib tashlaydi; fayl mavjudligini oldindan tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "Massivning mavjud indekslari yoki assotsiativ kalitlarini qaysi yozuv beradi?",
          "options": [
            "${a[@]}",
            "${#a[@]}",
            "${!a[@]}",
            "${a[-1]}"
          ],
          "answer": 2,
          "explain": "${!a[@]} indekslar (yoki kalitlar) ro'yxatini beradi; ${a[@]} esa qiymatlarni beradi."
        },
        {
          "q": "Massiv oxiriga yangi element qo'shish uchun qaysi yozuv ishlatiladi?",
          "options": [
            "a+=(yangi)",
            "a=yangi",
            "a[0]=yangi",
            "append a yangi"
          ],
          "answer": 0,
          "explain": "+= operatori massivga yangi element qo'shadi; a=(yangi) esa massivni butunlay almashtiradi."
        },
        {
          "q": "mapfile -t qatorlar bilan ishlaganda nimani olib tashlaydi?",
          "options": [
            "Fayl nomini",
            "Bo'sh qatorlarni",
            "Har bir qator oxiridagi yangi qator belgisini",
            "Barcha bo'sh joylarni"
          ],
          "answer": 2,
          "explain": "-t varianti har bir o'qilgan qatordan oxirgi yangi qator belgisini olib tashlaydi."
        }
      ]
    },
    {
      "id": 19,
      "title": "Tsikllar chuqur: break, continue va read",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Tsikl ichida <code>break</code> butun tsikldan chiqadi, <code>continue</code> esa joriy aylanishni tashlab, keyingisiga o'tadi. Fayl qatorlarini o'qishda <code>while IFS= read -r qator</code> eng ishonchli usul hisoblanadi: u bo'sh joy va teskari slashlarni buzmaydi."
        },
        {
          "type": "code",
          "title": "toq.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfor son in {1..10}; do\n  (( son % 2 == 0 )) && continue\n  (( son > 7 )) && break\n  echo \"Toq: $son\"\ndone",
          "output": "Toq: 1\nToq: 3\nToq: 5\nToq: 7"
        },
        {
          "type": "code",
          "title": "read.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/ismlar.txt\"\nprintf 'Ali\\nAziza\\nBek\\n' > \"$fayl\"\n\nwhile IFS= read -r ism; do\n  [[ -z $ism ]] && continue\n  echo \"Salom, $ism\"\ndone < \"$fayl\"",
          "output": "Salom, Ali\nSalom, Aziza\nSalom, Bek"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>for x in ...</code>",
              "Ro'yxat elementlari bo'yicha"
            ],
            [
              "<code>for ((i=0; i&lt;3; i++))</code>",
              "Hisoblagich bilan"
            ],
            [
              "<code>while read -r</code>",
              "Qatorlarni oqimdan o'qiydi"
            ],
            [
              "<code>break</code>",
              "Tsikldan butunlay chiqadi"
            ],
            [
              "<code>continue</code>",
              "Keyingi aylanishga o'tadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Quvurdagi while alohida shell",
          "html": "<code>cat fayl | while read -r q; do son=$((son + 1)); done</code> yozuvida tsikl alohida subshell ichida ishlaydi va <code>son</code> tashqarida o'zgarmaydi. Kirishni <code>while ... done &lt; fayl</code> ko'rinishida bering yoki <code>mapfile</code> dan foydalaning. <code>read -r</code> teskari slashni maxsus belgi sifatida talqin qilmaydi; <code>IFS=</code> esa bosh va oxirgi bo'shliqlarni saqlaydi."
        }
      ],
      "quiz": [
        {
          "q": "continue buyrug'i tsiklda nima qiladi?",
          "options": [
            "Skriptni to'xtatadi",
            "Faylni qayta o'qiydi",
            "Tsiklni butunlay tugatadi",
            "Joriy aylanishni tashlab, keyingisiga o'tadi"
          ],
          "answer": 3,
          "explain": "continue joriy aylanishning qolgan qismini o'tkazib yuboradi, lekin tsikl davom etadi."
        },
        {
          "q": "Nima uchun while read bilan IFS= va read -r ishlatiladi?",
          "options": [
            "Faylni o'chirish uchun",
            "Sonlarni hisoblash uchun",
            "Qatorlarni tezlashtirish uchun",
            "Bo'shliq va teskari slashlarni saqlash uchun"
          ],
          "answer": 3,
          "explain": "IFS= bosh/oxirgi bo'shliqlarni saqlaydi, -r esa teskari slashning maxsus talqinini o'chiradi."
        },
        {
          "q": "for ((i=0; i<3; i++)) tsikli necha marta bajariladi?",
          "options": [
            "Cheksiz",
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "explain": "i 0, 1 va 2 qiymatlarida bajariladi; i=3 bo'lganda shart yolg'on bo'ladi."
        }
      ]
    },
    {
      "id": 20,
      "title": "Funksiyalar chuqur: argumentlar va rekursiya",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Funksiya o'z argumentlarini <code>$1</code>, <code>$2</code> va <code>\"$@\"</code> orqali oladi. <code>local</code> o'zgaruvchini funksiya doirasi bilan cheklaydi. Natijani odatda standart chiqishga yozib, <code>$(...)</code> bilan ushlab olinadi; <code>return</code> esa faqat 0–255 oralig'idagi holat kodini beradi."
        },
        {
          "type": "code",
          "title": "yigindi.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nyigindi() {\n  local summa=0 son\n  for son in \"$@\"; do\n    summa=$((summa + son))\n  done\n  echo \"$summa\"\n}\n\necho \"Natija: $(yigindi 3 4 5)\"",
          "output": "Natija: 12"
        },
        {
          "type": "code",
          "title": "faktorial.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfaktorial() {\n  local n=\"$1\"\n  if (( n <= 1 )); then\n    echo 1\n    return\n  fi\n  local oldingi\n  oldingi=$(faktorial $((n - 1)))\n  echo $((n * oldingi))\n}\n\nozgartir() {\n  local -n nishon=\"$1\"\n  nishon=\"$2\"\n}\n\necho \"5! = $(faktorial 5)\"\nism=\"Ali\"\nozgartir ism \"Aziza\"\necho \"ism=$ism\"",
          "output": "5! = 120\nism=Aziza"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>\"$@\"</code>",
              "Barcha argumentlar alohida"
            ],
            [
              "<code>\"$*\"</code>",
              "Argumentlar bitta matnda"
            ],
            [
              "<code>local x</code>",
              "Faqat funksiya ichida ko'rinadi"
            ],
            [
              "<code>local -n ref=ism</code>",
              "ism ga havola (nameref)"
            ],
            [
              "<code>return 2</code>",
              "Holat kodi 2 qaytaradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "return va echo vazifasi boshqa",
          "html": "<code>return 300</code> 255 ga qisqaradi va bu ma'lumot yo'qotadi. Katta son yoki matnni qaytarish kerak bo'lsa, <code>echo</code> bilan chiqaring va <code>$(funksiya)</code> bilan oling. Funksiya ichida xato bo'lsa, <code>return 1</code> bering yoki aniq xabar yozib <code>exit</code> qiling. Nameref uchun Bash 4.3 yoki yangiroq kerak."
        }
      ],
      "quiz": [
        {
          "q": "Funksiyaning hisoblangan natijasini o'zgaruvchiga olishning odatiy usuli qaysi?",
          "options": [
            "natija=return funksiya",
            "natija=(funksiya)",
            "natija=$(funksiya)",
            "natija=funksiya"
          ],
          "answer": 2,
          "explain": "Funksiya natijani echo bilan chiqarsa, $(...) buyruq almashtirishi uni o'zgaruvchiga oladi."
        },
        {
          "q": "local -n nishon=\"$1\" yozuvi nima qiladi?",
          "options": [
            "Argument nomi bilan o'zgaruvchiga havola yaratadi",
            "Funksiyani rekursiv qiladi",
            "Barcha lokal qiymatlarni o'chiradi",
            "Yangi massiv yaratadi"
          ],
          "answer": 0,
          "explain": "local -n nameref yaratadi: nishon orqali $1 da ko'rsatilgan o'zgaruvchining o'ziga yozish mumkin."
        },
        {
          "q": "Funksiya ichida \"$@\" nima uchun qo'shtirnoqda yoziladi?",
          "options": [
            "Har bir argumentni bo'sh joylar bilan ham alohida saqlash uchun",
            "Funksiyani tezlashtirish uchun",
            "Argumentlarni o'chirish uchun",
            "Argumentlarni bitta so'zga birlashtirish uchun"
          ],
          "answer": 0,
          "explain": "\"$@\" har bir argumentni alohida saqlaydi; qo'shtirnoqsiz $@ ichida bo'sh joy bo'lgan argumentlarni bo'lib yuboradi."
        }
      ]
    },
    {
      "id": 21,
      "title": "getopts bilan professional argumentlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Kichik skriptda <code>$1</code> yetarli bo'lishi mumkin, lekin bir nechta variant kerak bo'lsa <code>getopts</code> ishlatiladi. U <code>-n</code> kabi bayroqlar va <code>-o fayl</code> kabi qiymatli variantlarni tahlil qiladi. Tahlildan keyin <code>shift $((OPTIND - 1))</code> qolgan pozitsion argumentlarni ochadi."
        },
        {
          "type": "code",
          "title": "cli.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nn=false\nchiqish=\"\"\n\nwhile getopts \":no:\" opt; do\n  case \"$opt\" in\n    n) n=true ;;\n    o) chiqish=\"$OPTARG\" ;;\n    :) echo \"Xato: -$OPTARG qiymat talab qiladi\" >&2; exit 64 ;;\n    \\?) echo \"Xato: noma'lum variant -$OPTARG\" >&2; exit 64 ;;\n  esac\ndone\nshift $((OPTIND - 1))\n\necho \"n=$n\"\necho \"chiqish=${chiqish:-standart}\"\necho \"manba=${1:-yoq}\"",
          "output": "n=false\nchiqish=standart\nmanba=yoq"
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "bash cli.sh -n -o hisobot.txt manba.txt\nbash cli.sh -x 2>&1 || echo \"Kod: $?\"\nbash cli.sh -o 2>&1 || echo \"Kod: $?\"",
          "output": "n=true\nchiqish=hisobot.txt\nmanba=manba.txt\nXato: noma'lum variant -x\nKod: 64\nXato: -o qiymat talab qiladi\nKod: 64"
        },
        {
          "type": "table",
          "head": [
            "Element",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>getopts \":no:\" opt</code>",
              "n bayroq, o qiymatli variant"
            ],
            [
              "<code>$OPTARG</code>",
              "Joriy variantning qiymati"
            ],
            [
              "<code>$OPTIND</code>",
              "Keyingi tekshiriladigan argument indeksi"
            ],
            [
              "<code>:</code> tarmog'i",
              "Qiymat yetishmasa ishlaydi"
            ],
            [
              "<code>\\?</code> tarmog'i",
              "Noma'lum variantni ushlaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Uzun variantlar alohida",
          "html": "<code>getopts</code> faqat qisqa variantlarni tushunadi. <code>--json</code> kabi uzun variantlarni <code>while (( $# ))</code> va <code>case</code> bilan qo'lda tahlil qiling. Xato holatda foydalanish yo'riqnomasini <b>stderr</b> ga chiqaring va 64 kodi bilan tugang. Foydalanuvchi ma'lumotini hech qachon <code>eval</code> orqali bajarmang."
        }
      ],
      "quiz": [
        {
          "q": "getopts tahlilida -o fayl variantining fayl qismi qayerda bo'ladi?",
          "options": [
            "$1 ichida",
            "$OPTARG ichida",
            "$OPTIND ichida",
            "$? ichida"
          ],
          "answer": 1,
          "explain": "Qiymatli variantning argumenti $OPTARG o'zgaruvchisiga yoziladi."
        },
        {
          "q": "getopts satrining boshidagi ikki nuqta nima uchun kerak?",
          "options": [
            "Barcha xatolarni yashiradi va ':' tarmog'ini yoqadi",
            "Variantlarni katta harfga o'giradi",
            "Faqat uzun variantlarni o'qiydi",
            "Standart qiymat beradi"
          ],
          "answer": 0,
          "explain": "Boshidagi : shell'ning o'z xato xabarini o'chiradi; yetishmagan qiymat ':' tarmog'ida, noma'lum variant '?' tarmog'ida ushlanadi."
        },
        {
          "q": "getopts tsiklidan keyin shift $((OPTIND - 1)) nima uchun yoziladi?",
          "options": [
            "Skriptni qayta ishga tushirish uchun",
            "Barcha argumentlarni birlashtirish uchun",
            "Xato kodini olish uchun",
            "Variantlarni o'chirib, qolgan argumentlarni oldinga surish uchun"
          ],
          "answer": 3,
          "explain": "getopts variantlarni ko'rib chiqadi; shift ularni olib tashlab, $1 ni birinchi haqiqiy argumentga qaratadi."
        }
      ]
    },
    {
      "id": 22,
      "title": "Exit kodlari va xatolarni boshqarish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Har bir buyruq <b>holat kodi</b> qaytaradi: <code>0</code> — muvaffaqiyat, nolga teng bo'lmagan qiymat — xato. Skriptning <code>exit</code> kodi uni chaqirgan dastur uchun natija hisoblanadi. <code>$?</code> oxirgi buyruqning kodini saqlaydi, lekin uni darhol o'qish kerak: keyingi buyruq uni almashtiradi."
        },
        {
          "type": "code",
          "title": "tekshir.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ntekshir() {\n  local fayl=\"$1\"\n  if [[ ! -f $fayl ]]; then\n    echo \"Topilmadi: $fayl\" >&2\n    return 2\n  fi\n  echo \"Bor: $fayl\"\n}\n\nmkdir -p /tmp/noldan\nprintf 'ok\\n' > /tmp/noldan/bor.txt\ntekshir /tmp/noldan/bor.txt\ntekshir /tmp/noldan/yoq.txt 2>&1 || echo \"Kod: $?\"",
          "output": "Bor: /tmp/noldan/bor.txt\nTopilmadi: /tmp/noldan/yoq.txt\nKod: 2"
        },
        {
          "type": "table",
          "head": [
            "Kod",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>0</code>",
              "Muvaffaqiyat"
            ],
            [
              "<code>1</code>",
              "Umumiy xato"
            ],
            [
              "<code>2</code>",
              "Noto'g'ri foydalanish yoki ichki xato"
            ],
            [
              "<code>64</code>",
              "Buyruq satri xatosi (sysexits)"
            ],
            [
              "<code>126</code>",
              "Fayl bajarishga ruxsat bermagan"
            ],
            [
              "<code>127</code>",
              "Buyruq topilmadi"
            ],
            [
              "<code>130</code>",
              "Ctrl+C (SIGINT) bilan to'xtatilgan"
            ]
          ]
        },
        {
          "type": "code",
          "title": "kod.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nif (( $# == 0 )); then\n  echo \"Argument kerak\" >&2\n  exit 64\nfi\n\necho \"OK\"",
          "output": "Argument kerak"
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "bash kod.sh 2>&1; echo \"Holat: $?\"\nbash kod.sh demo; echo \"Holat: $?\"",
          "output": "Argument kerak\nHolat: 64\nOK\nHolat: 0"
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Kodni ataylab tanlang",
          "html": "Skript muvaffaqiyatli tugasa <code>exit 0</code>, foydalanish xatosida <code>64</code>, kerakli fayl yo'qligida <code>66</code> kabi kodlardan foydalanish mumkin. CI va cron uchun barqaror kodlar muhim. <code>set -e</code> bo'lsa ham <code>if</code>, <code>||</code> va <code>&&</code> ichidagi buyruqlar xatosi butun skriptni to'xtatmasligi mumkin — muhim qadamlar natijasini alohida tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "Buyruq topilmaganda odatda qanday holat kodi qaytadi?",
          "options": [
            "130",
            "0",
            "1",
            "127"
          ],
          "answer": 3,
          "explain": "Shell buyruqni topa olmasa 127 kodini qaytaradi; 126 esa fayl bajarilmaydigan holat uchun."
        },
        {
          "q": "64 holat kodi odatda nimani bildiradi?",
          "options": [
            "Fayl muvaffaqiyatli nusxalanganini",
            "Tarmoq uzilishini",
            "Tizim qayta yuklanishini",
            "Buyruq satri yoki foydalanish xatosini"
          ],
          "answer": 3,
          "explain": "sysexits standartida 64 EX_USAGE — buyruq satri noto'g'ri ishlatilganini bildiradi."
        },
        {
          "q": "Quvurdan keyin $? nimani ko'rsatadi?",
          "options": [
            "Quvurdagi barcha buyruqlar yig'indisini",
            "Oxirgi buyruqning holatini",
            "Birinchi buyruqning har doim holatini",
            "Faqat xato kodini"
          ],
          "answer": 1,
          "explain": "pipefail yoqilmagan bo'lsa $? quvurning oxirgi buyrug'i holatini beradi; barcha kodlar uchun PIPESTATUS ishlatiladi."
        }
      ]
    },
    {
      "id": 23,
      "title": "Quvurlar, pipefail va process substitution",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Quvur (<code>|</code>) chap buyruqning standart chiqishini o'ng buyruqning standart kirishiga uzatadi. <code>set -o pipefail</code> yoqilganda quvur ichidagi birorta buyruq xato bersa, butun quvur xato hisoblanadi. <code>&lt;(buyruq)</code> esa buyruq chiqishini vaqtinchalik fayl kabi taqdim etadi."
        },
        {
          "type": "code",
          "title": "pipefail.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/mevalar23.txt\"\nprintf 'olma\\nnok\\nuzum\\n' > \"$fayl\"\n\ngrep \"uzum\" \"$fayl\" | wc -l\n\nset +e\ngrep \"yoq\" \"$fayl\" | wc -l\nkodlar=(\"${PIPESTATUS[@]}\")\nset -e\necho \"grep=${kodlar[0]} wc=${kodlar[1]}\"",
          "output": "1\n0\ngrep=1 wc=0"
        },
        {
          "type": "code",
          "title": "process.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/ballar23.txt\"\nprintf 'Ali 85\\nAziza 92\\nBek 78\\n' > \"$fayl\"\n\nsort -k2 -n \"$fayl\"\ndiff <(sort \"$fayl\") <(sort \"$fayl\") && echo \"Bir xil\"\n\nwhile read -r ism ball; do\n  echo \"$ism: $ball\"\ndone < <(sort -k2 -nr \"$fayl\")",
          "output": "Bek 78\nAli 85\nAziza 92\nBir xil\nAziza: 92\nAli: 85\nBek: 78"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>a | b</code>",
              "a chiqishini b kirishiga uzatadi"
            ],
            [
              "<code>a |& b</code>",
              "stderr ni ham uzatadi"
            ],
            [
              "<code>set -o pipefail</code>",
              "Quvurdagi xatoni sezadi"
            ],
            [
              "<code>${PIPESTATUS[@]}</code>",
              "Quvur buyruqlari kodlari"
            ],
            [
              "<code>&lt;(buyruq)</code>",
              "Chiqishni fayl kabi beradi"
            ],
            [
              "<code>&gt;(buyruq)</code>",
              "Kirishni fayl kabi beradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "PIPESTATUS tez yo'qoladi",
          "html": "Quvurdan keyin darhol boshqa buyruq bajarsangiz, <code>PIPESTATUS</code> yangilanadi. Shuning uchun kodlarni darhol massivga oling: <code>kodlar=(\\\"${PIPESTATUS[@]}\\\")</code>. <code>grep</code> topmasa 1 qaytaradi; <code>pipefail</code> bilan bu butun quvurni xato qiladi, shuning uchun kutilgan holatda <code>|| true</code> yoki <code>if</code> ishlating."
        }
      ],
      "quiz": [
        {
          "q": "set -o pipefail yoqilganda quvur qanday holat qaytaradi?",
          "options": [
            "Faqat o'ng buyruq holatini",
            "O'ngdan chapga birinchi nolga teng bo'lmagan kodni",
            "Barcha kodlar yig'indisini",
            "Har doim 0"
          ],
          "answer": 1,
          "explain": "pipefail quvur ichidagi muvaffaqiyatsiz buyruklardan eng o'ngdagisining kodini qaytaradi."
        },
        {
          "q": "Buyruq chiqishini vaqtinchalik fayl kabi berish qaysi yozuvda bo'ladi?",
          "options": [
            "<(buyruq)",
            ">(buyruq)",
            "$(buyruq)",
            "<<(buyruq)"
          ],
          "answer": 0,
          "explain": "<(buyruq) process substitution bo'lib, chiqishni /dev/fd orqali fayl nomi kabi taqdim etadi."
        },
        {
          "q": "pipefail o'chirilganda grep topmasa, grep | wc -l quvuri qanday kod qaytaradi?",
          "options": [
            "127",
            "grep kodini, ya'ni 1",
            "wc kodini, ya'ni 0",
            "Har doim 2"
          ],
          "answer": 2,
          "explain": "pipefail bo'lmasa quvur oxirgi buyruq holatini oladi; wc muvaffaqiyatli bo'lgani uchun 0 qaytadi."
        }
      ]
    },
    {
      "id": 24,
      "title": "Fayl deskriptorlari, here-doc va here-string",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Har bir jarayonda uchta standart oqim bor: <code>0</code> — kirish, <code>1</code> — chiqish, <code>2</code> — xatolar. Qo'shimcha deskriptor ochish, masalan <code>exec 3&gt; fayl</code>, bir nechta joydan bitta faylga yozish imkonini beradi. Here-doc ko'p qatorli matnni, here-string esa bitta qatorni buyruqqa kirish sifatida beradi."
        },
        {
          "type": "code",
          "title": "fd.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/jurnal24.txt\"\n: > \"$fayl\"\n\nexec 3>> \"$fayl\"\necho \"birinchi\" >&3\necho \"ikkinchi\" >&3\nexec 3>&-\ncat \"$fayl\"",
          "output": "birinchi\nikkinchi"
        },
        {
          "type": "code",
          "title": "heredoc.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nism=\"Aziza\"\n\ncat <<EOF\nSalom, $ism\nBugungi vazifa: hisobot\nEOF\n\ncat <<'EOF'\nBu yerda $ism ochilmaydi\nEOF\n\nread -r qator <<< \"satr ichida\"\necho \"Here-string: $qator\"",
          "output": "Salom, Aziza\nBugungi vazifa: hisobot\nBu yerda $ism ochilmaydi\nHere-string: satr ichida"
        },
        {
          "type": "table",
          "head": [
            "Deskriptor",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>0</code>",
              "Standart kirish (stdin)"
            ],
            [
              "<code>1</code>",
              "Standart chiqish (stdout)"
            ],
            [
              "<code>2</code>",
              "Standart xato (stderr)"
            ],
            [
              "<code>3</code>",
              "Skript ochgan qo'shimcha oqim"
            ],
            [
              "<code>2&gt;&amp;1</code>",
              "stderr ni stdout joyiga qo'shadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Yo'naltirish tartibi muhim",
          "html": "<code>buyruq &gt;fayl 2&gt;&amp;1</code> ikkala oqimni faylga yozadi. <code>buyruq 2&gt;&amp;1 &gt;fayl</code> esa avval stderr ni eski stdout (terminal) ga bog'laydi, keyin stdout ni faylga o'zgartiradi. Here-doc ochuvchi <code>EOF</code> ni qo'shtirnoqqa olsangiz, ichidagi o'zgaruvchilar ochilmaydi. <code>exec 3&gt;&amp;-</code> bilan ochilgan deskriptorni yoping."
        }
      ],
      "quiz": [
        {
          "q": "exec 3>> fayl buyrug'i nima qiladi?",
          "options": [
            "Joriy shell uchun 3-deskriptorni faylga qo'shib ochadi",
            "3-qatorni faylga yozadi",
            "Faylni faqat o'qish uchun ochadi",
            "Faylni o'chiradi"
          ],
          "answer": 0,
          "explain": "exec 3>> fayl joriy shell doirasida 3-deskriptorni qo'shish rejimida ochadi; keyin >&3 orqali yoziladi."
        },
        {
          "q": "Here-doc ochuvchi so'z qo'shtirnoqda bo'lsa nima bo'ladi?",
          "options": [
            "O'zgaruvchilar ochiladi",
            "O'zgaruvchilar ochilmaydi, matn so'zma-so'z qoladi",
            "Here-doc ishlamaydi",
            "Faqat sonlar ochiladi"
          ],
          "answer": 1,
          "explain": "<<'EOF' ko'rinishida delimiter qo'shtirnoqda bo'lsa, ichidagi $ va teskari qavslar kengaytirilmaydi."
        },
        {
          "q": "buyruq 2>&1 >fayl yozuvida stderr qayerga ketadi?",
          "options": [
            "Faylga",
            "Eski stdout joyiga, odatda terminalga",
            "Hech qayerga",
            "Yangi faylga"
          ],
          "answer": 1,
          "explain": "Yo'naltirishlar chapdan o'ngga bajariladi: 2>&1 stderr ni hozirgi stdout ga bog'laydi, keyin stdout faylga o'zgaradi."
        }
      ]
    },
    {
      "id": 25,
      "title": "find: fayllarni nom, tur va chuqurlik bo'yicha topish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<code>find</code> papka daraxtini aylanib, shartlarga mos fayllarni topadi. U <code>ls</code> chiqishini tahlil qilishdan ko'ra ishonchli: nom, tur, hajm, vaqt va ruxsatlar bo'yicha tekshiradi. Natijani boshqa buyruqqa <code>-exec</code> yoki <code>-print0 | xargs -0</code> bilan uzatish mumkin."
        },
        {
          "type": "code",
          "title": "find.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan/find25\"\nrm -rf \"$demo\"\nmkdir -p \"$demo/papka\"\nprintf 'a\\n' > \"$demo/a.txt\"\nprintf 'b\\n' > \"$demo/b.log\"\nprintf 'c\\n' > \"$demo/papka/c.txt\"\n\nfind \"$demo\" -type f -name '*.txt' -print | sort",
          "output": "/tmp/noldan/find25/a.txt\n/tmp/noldan/find25/papka/c.txt"
        },
        {
          "type": "code",
          "title": "amallar.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan/find25\"\n\nfind \"$demo\" -type f -name '*.txt' -exec basename {} \\; | sort\nfind \"$demo\" -type f ! -name '*.txt' -print | sort\nfind \"$demo\" -maxdepth 1 -type f -print | sort",
          "output": "a.txt\nc.txt\n/tmp/noldan/find25/b.log\n/tmp/noldan/find25/a.txt\n/tmp/noldan/find25/b.log"
        },
        {
          "type": "table",
          "head": [
            "Shart",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>-type f</code>",
              "Oddiy fayl"
            ],
            [
              "<code>-type d</code>",
              "Papka"
            ],
            [
              "<code>-name '*.txt'</code>",
              "Nom shabloni (katta-kichik harfga sezgir)"
            ],
            [
              "<code>-iname</code>",
              "Katta-kichik harfga sezgir emas"
            ],
            [
              "<code>-maxdepth 1</code>",
              "Faqat joriy papka"
            ],
            [
              "<code>-mtime -7</code>",
              "Oxirgi 7 kunda o'zgargan"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Nomdagi bo'shliqqa tayyor turing",
          "html": "Fayl nomida bo'sh joy yoki yangi qator bo'lishi mumkin. <code>find ... -print0 | xargs -0</code> bu holatda xavfsiz ishlaydi. <code>-exec buyruq {} \\;</code> har bir fayl uchun alohida, <code>-exec buyruq {} +</code> esa imkon qadar ko'p faylni birga bajaradi. Naqshni qo'shtirnoqda bering, aks holda shell uni o'zi kengaytirib yuboradi."
        }
      ],
      "quiz": [
        {
          "q": "find da faqat joriy papkadagi fayllarni ko'rish uchun qaysi shart qo'shiladi?",
          "options": [
            "-maxdepth 1",
            "-type d",
            "-name '*'",
            "-mtime 1"
          ],
          "answer": 0,
          "explain": "-maxdepth 1 ichki papkalarga tushmaslikni bildiradi; 0 esa faqat papkaning o'zini ko'rsatadi."
        },
        {
          "q": "-iname sharti -name dan nimasi bilan farq qiladi?",
          "options": [
            "Katta-kichik harfni farqlamaydi",
            "Faqat yashirin fayllarni topadi",
            "Vaqt bo'yicha qidiradi",
            "Faqat papkalarni topadi"
          ],
          "answer": 0,
          "explain": "-iname nomni katta-kichik harfga sezgir bo'lmagan holda taqqoslaydi."
        },
        {
          "q": "find -exec buyrug'ida {} \\; nimani bildiradi?",
          "options": [
            "Natijani faylga yozish",
            "Faqat papkalarni bajarish",
            "Har bir topilgan fayl uchun alohida bajarish",
            "Barcha fayllarni bitta buyruqqa yig'ish"
          ],
          "answer": 2,
          "explain": "{} topilgan fayl nomiga almashtiriladi; \\; esa -exec buyrug'ini har bir fayl uchun alohida tugatadi."
        }
      ]
    },
    {
      "id": 26,
      "title": "xargs va null bilan xavfsiz quvur",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "<code>xargs</code> standart kirishdan kelgan so'zlarni buyruq argumentlariga aylantiradi. Muammo shundaki, bo'sh joyli fayl nomlari oddiy matnda bo'linib ketadi. Buning yechimi — ishlab chiqaruvchi tomonda <code>-print0</code>, qabul qiluvchi tomonda <code>xargs -0</code> ishlatish."
        },
        {
          "type": "code",
          "title": "nomlar.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan/xargs26\"\nrm -rf \"$demo\"\nmkdir -p \"$demo\"\nprintf 'x\\n' > \"$demo/olma nok.txt\"\nprintf 'y\\n' > \"$demo/uzum.txt\"\n\nfind \"$demo\" -type f -print0 | xargs -0 -n1 basename | sort",
          "output": "olma nok.txt\nuzum.txt"
        },
        {
          "type": "code",
          "title": "argumentlar.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nprintf '%s\\n' 3 1 2 | xargs -n1 | sort -n\nprintf '%s\\0' \"a b\" \"c\" | xargs -0 -n1 printf '<%s>\\n'",
          "output": "1\n2\n3\n<a b>\n<c>"
        },
        {
          "type": "table",
          "head": [
            "Variant",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>-0</code>",
              "Nol belgisi bilan ajratilgan kirishni o'qiydi"
            ],
            [
              "<code>-n1</code>",
              "Har bir argument uchun bitta buyruq"
            ],
            [
              "<code>-I{}</code>",
              "Argumentni belgilangan joyga qo'yadi"
            ],
            [
              "<code>-r</code>",
              "Bo'sh kirishda buyruqni bajarmaydi"
            ],
            [
              "<code>-P4</code>",
              "To'rt jarayonni parallel ishga tushiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Fayl nomini buyruq qilib bermang",
          "html": "<code>xargs</code> argumentlarni bo'sh joy bo'yicha ajratadi, agar <code>-0</code> berilmasa. Fayl nomlari ishonchsiz manba bo'lsa, ularni <code>sh -c</code> ichida bajarish xavfli. Imkon bo'lsa <code>find -exec ... {} +</code> dan foydalaning: u ham ko'p faylni birga beradi, lekin nomlarni qayta tahlil qilmaydi."
        }
      ],
      "quiz": [
        {
          "q": "Fayl nomlarida bo'sh joy bo'lsa, find | xargs qanday xavfsiz qilinadi?",
          "options": [
            "find -print | xargs -n1",
            "find -ls | xargs",
            "find -name | xargs -I",
            "find -print0 | xargs -0"
          ],
          "answer": 3,
          "explain": "-print0 nomlarni NUL bilan ajratadi, xargs -0 esa aynan shu ajratgichni o'qiydi."
        },
        {
          "q": "xargs -n1 nimani bildiradi?",
          "options": [
            "Faqat bitta faylni o'chirish",
            "Bitta buyruqda barcha argumentlar",
            "Har bir argument uchun alohida buyruq",
            "Bitta qatorni o'tkazib yuborish"
          ],
          "answer": 2,
          "explain": "-n1 har bir argumentni alohida buyruq chaqiruviga beradi."
        },
        {
          "q": "xargs -I{} dagi {} nima vazifani bajaradi?",
          "options": [
            "Natijani faylga yozadi",
            "Kirish argumenti qo'yiladigan o'rinni belgilaydi",
            "Bo'sh argumentni o'chiradi",
            "Parallel jarayon sonini beradi"
          ],
          "answer": 1,
          "explain": "-I{} har bir kirish qatorini {} o'rniga qo'yib, buyruqni shu argument bilan bajaradi."
        }
      ]
    },
    {
      "id": 27,
      "title": "grep chuqur: regex, rekursiya va kontekst",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>grep</code> qatorlarni naqsh bo'yicha qidiradi. <code>-E</code> kengaytirilgan muntazam ifodani, <code>-v</code> mos kelmagan qatorlarni, <code>-r</code> esa papka ichidagi fayllarni qidiradi. <code>-n</code> qator raqamini, <code>-l</code> faqat mos fayl nomlarini ko'rsatadi."
        },
        {
          "type": "code",
          "title": "grep.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan/grep27\"\nrm -rf \"$demo\"\nmkdir -p \"$demo\"\nprintf 'olma 120\\nnok 80\\nuzum 150\\nanor 90\\n' > \"$demo/narx.txt\"\n\ngrep -E '^(olma|uzum) ' \"$demo/narx.txt\"\necho \"---\"\ngrep -v '^nok' \"$demo/narx.txt\" | wc -l\necho \"---\"\ngrep -n '1' \"$demo/narx.txt\"",
          "output": "olma 120\nuzum 150\n---\n3\n---\n1:olma 120\n3:uzum 150"
        },
        {
          "type": "table",
          "head": [
            "Variant",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>-E</code>",
              "Kengaytirilgan regex (|, +, ?)"
            ],
            [
              "<code>-i</code>",
              "Katta-kichik harfni farqlamaydi"
            ],
            [
              "<code>-v</code>",
              "Mos kelmagan qatorlarni beradi"
            ],
            [
              "<code>-n</code>",
              "Qator raqamini qo'shadi"
            ],
            [
              "<code>-r</code>",
              "Papkalarni rekursiv qidiradi"
            ],
            [
              "<code>-l</code>",
              "Faqat mos fayl nomlarini beradi"
            ],
            [
              "<code>-A2 / -B2</code>",
              "Moslik atrofidagi qatorlar"
            ]
          ]
        },
        {
          "type": "code",
          "title": "rekursiv.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan/grep27\"\nmkdir -p \"$demo/papka\"\nprintf 'xato: disk toldi\\nogohlantirish\\n' > \"$demo/papka/a.log\"\nprintf 'xato: tarmoq\\n' > \"$demo/papka/b.log\"\n\ngrep -rn '^xato' \"$demo/papka\" | sort\necho \"---\"\ngrep -rl 'xato' \"$demo/papka\" | sort",
          "output": "/tmp/noldan/grep27/papka/a.log:1:xato: disk toldi\n/tmp/noldan/grep27/papka/b.log:1:xato: tarmoq\n---\n/tmp/noldan/grep27/papka/a.log\n/tmp/noldan/grep27/papka/b.log"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Topilmaslik ham natija",
          "html": "Mos qator topilmasa <code>grep</code> 1 kodi bilan tugaydi. <code>set -e</code> ostida bu skriptni to'xtatadi; topilmaslik normal holat bo'lsa <code>grep ... || true</code> yoki <code>if grep ...; then</code> ishlating. Naqshni yagona tirnoqda bering, aks holda shell <code>*</code> va <code>$</code> belgilarini o'zi talqin qiladi. Ikkilik fayllarda qidirish uchun <code>grep -a</code> kerak bo'ladi."
        }
      ],
      "quiz": [
        {
          "q": "grep -v nimani chiqaradi?",
          "options": [
            "Faqat mos qatorlarni",
            "Mos kelmagan qatorlarni",
            "Faqat fayl nomlarini",
            "Qator raqamlarini"
          ],
          "answer": 1,
          "explain": "-v inkor rejimi: naqshga mos kelmagan qatorlar chiqariladi."
        },
        {
          "q": "grep -E 'olma|uzum' naqshida | belgisi nimani bildiradi?",
          "options": [
            "Quvurni",
            "Qator boshini",
            "Faylga yozishni",
            "Ikki naqshdan birini tanlashni"
          ],
          "answer": 3,
          "explain": "-E bilan | alternativani bildiradi; shuning uchun olma yoki uzum mos keladi."
        },
        {
          "q": "Papka ichidagi barcha fayllarni rekursiv qidirish uchun qaysi variant kerak?",
          "options": [
            "-c",
            "-r",
            "-n",
            "-v"
          ],
          "answer": 1,
          "explain": "-r papkalarni rekursiv aylanadi; -R ham shunga yaqin, lekin -r odatda yetarli."
        }
      ]
    },
    {
      "id": 28,
      "title": "sed chuqur: manzillar va xavfsiz tahrir",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>sed</code> oqim muharriri: u qatorlarni o'qib, manzil bo'yicha tanlaydi va o'zgartirib chiqaradi. <code>s/eskisi/yangisi/</code> birinchi moslikni, <code>g</code> bayrog'i esa qatordagi barcha mosliklarni almashtiradi. <code>-i</code> faylni joyida o'zgartiradi, shuning uchun avval zaxira olish muhim."
        },
        {
          "type": "code",
          "title": "sed.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/sed28.txt\"\nprintf 'olma: 120\\nnok: 80\\nuzum: 150\\n' > \"$fayl\"\n\nsed -n '2p' \"$fayl\"\necho \"---\"\nsed 's/: */ = /' \"$fayl\"\necho \"---\"\nsed -E 's/([a-z]+): ([0-9]+)/\\2 dona \\1/' \"$fayl\"",
          "output": "nok: 80\n---\nolma = 120\nnok = 80\nuzum = 150\n---\n120 dona olma\n80 dona nok\n150 dona uzum"
        },
        {
          "type": "table",
          "head": [
            "Manzil yoki bayroq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>2p</code>",
              "Faqat 2-qatorni chiqaradi (-n bilan)"
            ],
            [
              "<code>$d</code>",
              "Oxirgi qatorni o'chiradi"
            ],
            [
              "<code>/xato/d</code>",
              "xato so'zi bor qatorlarni o'chiradi"
            ],
            [
              "<code>1,3s/a/b/</code>",
              "1–3 qatorlarda almashtiradi"
            ],
            [
              "<code>s/a/b/g</code>",
              "Barcha mosliklarni almashtiradi"
            ],
            [
              "<code>-i.bak</code>",
              "Joyida o'zgartirib, .bak zaxira qoldiradi"
            ]
          ]
        },
        {
          "type": "code",
          "title": "joyida.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/sed28.txt\"\ncp -- \"$fayl\" \"$fayl.bak\"\nsed -i.bak 's/80/85/' \"$fayl\"\n\ngrep 'nok' \"$fayl\"\necho \"Zaxira: $fayl.bak\"",
          "output": "nok: 85\nZaxira: /tmp/noldan/sed28.txt.bak"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "GNU va BSD sed farqi",
          "html": "Linux'dagi GNU sed <code>-i.bak</code> bilan zaxira yaratadi. macOS'dagi BSD sed <code>-i</code> dan keyin majburiy kengaytma talab qiladi: <code>sed -i '' 's/a/b/' fayl</code>. Skriptni ko'chma qilish kerak bo'lsa, avval nusxa olib, keyin <code>sed</code> natijasini yangi faylga yozing. Murakkab tahrirlar uchun <code>awk</code> yoki <code>perl</code> aniqroq bo'lishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "sed -n '2p' fayl buyrug'i nima qiladi?",
          "options": [
            "2-qatorni o'chiradi",
            "Birinchi 2 qatorni almashtiradi",
            "Faylni ikki marta chiqaradi",
            "Faqat 2-qatorni chiqaradi"
          ],
          "answer": 3,
          "explain": "-n avtomatik chiqarishni o'chiradi, 2p esa faqat 2-qatorni chop etadi."
        },
        {
          "q": "sed -E 's/([a-z]+): ([0-9]+)/\\2 dona \\1/' da \\1 nimani bildiradi?",
          "options": [
            "Ikkinchi ustunni",
            "Birinchi qatorni",
            "Birinchi saqlangan guruhni",
            "Fayl nomini"
          ],
          "answer": 2,
          "explain": "Qavslar guruhlarni saqlaydi; \\1 birinchi guruh, \\2 ikkinchi guruh matniga almashtiriladi."
        },
        {
          "q": "sed -i bilan ishlashdan oldin nima qilish tavsiya etiladi?",
          "options": [
            "Faylni o'chirish",
            "Zaxira nusxa olish",
            "Faylni siqish",
            "Faqat o'qish huquqini berish"
          ],
          "answer": 1,
          "explain": "-i faylni joyida o'zgartiradi; xato bo'lsa asl nusxani tiklash uchun zaxira kerak."
        }
      ]
    },
    {
      "id": 29,
      "title": "awk chuqur: maydonlar, shartlar va massivlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>awk</code> har bir qatorni maydonlarga ajratadi va qoidalar bo'yicha qayta ishlaydi. <code>$1</code> birinchi maydon, <code>$0</code> butun qator, <code>NR</code> qator raqami, <code>NF</code> maydonlar soni. <code>BEGIN</code> bloki ish boshida, <code>END</code> bloki oxirida bir marta bajariladi."
        },
        {
          "type": "code",
          "title": "awk.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/awk29.txt\"\nprintf 'Ali 85 3\\nAziza 92 5\\nBek 78 2\\n' > \"$fayl\"\n\nawk '{ jami += $2; son += 1 } END { printf \"Ortacha: %.1f\\n\", jami / son }' \"$fayl\"\nawk '$2 >= 85 { print $1 \" -> \" $2 }' \"$fayl\"\nawk '{ print NR \":\", $1 }' \"$fayl\"",
          "output": "Ortacha: 85.0\nAli -> 85\nAziza -> 92\n1: Ali\n2: Aziza\n3: Bek"
        },
        {
          "type": "code",
          "title": "guruh.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/awk29b.txt\"\nprintf 'olma 100\\nnok 80\\nolma 50\\n' > \"$fayl\"\n\nawk '{ summa[$1] += $2 } END { for (kalit in summa) print kalit, summa[kalit] }' \"$fayl\" | sort\nawk 'NF != 2 { print \"Yaroqsiz qator: \" NR }' \"$fayl\"",
          "output": "nok 80\nolma 150"
        },
        {
          "type": "table",
          "head": [
            "Belgi",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>$0</code>",
              "Butun joriy qator"
            ],
            [
              "<code>$1, $2</code>",
              "Birinchi va ikkinchi maydon"
            ],
            [
              "<code>NR</code>",
              "Joriy qator raqami"
            ],
            [
              "<code>NF</code>",
              "Joriy qatordagi maydonlar soni"
            ],
            [
              "<code>FS</code>",
              "Maydon ajratgichi"
            ],
            [
              "<code>END</code>",
              "Oxirida bir marta bajariladigan blok"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Dasturni yagona tirnoqda yozing",
          "html": "<code>awk</code> dasturini <code>'...'</code> ichida yozing, aks holda shell <code>$1</code> va <code>{}</code> ni o'zi talqin qiladi. Maydonlarni boshqa belgi bilan ajratish uchun <code>-F:</code> yoki <code>BEGIN { FS=\\\":\\\" }</code> ishlating. Kassir yoki hisobotda kasr sonlar uchun <code>printf</code> ishlatsangiz, lokalga qarab vergul chiqishi mumkin; barqaror natija uchun <code>LC_ALL=C</code> bering."
        }
      ],
      "quiz": [
        {
          "q": "awk da NF nimani beradi?",
          "options": [
            "Qator raqamini",
            "Joriy qatordagi maydonlar sonini",
            "Fayl hajmini",
            "Oxirgi maydon qiymatini"
          ],
          "answer": 1,
          "explain": "NF — number of fields: joriy qatorda nechta maydon borligini bildiradi."
        },
        {
          "q": "awk 'END { print NR }' fayl nimani chiqaradi?",
          "options": [
            "Fayldagi qatorlar sonini",
            "Barcha maydonlar yig'indisini",
            "Fayl nomini",
            "Birinchi qatorni"
          ],
          "answer": 0,
          "explain": "END bloki oxirida bajariladi; NR oxirgi qator raqamini, ya'ni qatorlar sonini saqlaydi."
        },
        {
          "q": "awk dasturini shell talqinidan himoyalash uchun qanday yoziladi?",
          "options": [
            "Qo'shtirnoqsiz",
            "Faqat qavs ichida",
            "Faqat bosh harflar bilan",
            "Yagona tirnoq ichida"
          ],
          "answer": 3,
          "explain": "Yagona tirnoq awk dasturini shell kengaytirishlaridan himoyalaydi; ichida apostrof kerak bo'lsa maxsus usul qo'llanadi."
        }
      ]
    },
    {
      "id": 30,
      "title": "jq asoslari: JSONni o'qish va filtrlash",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<code>jq</code> JSON bilan ishlash uchun standart vosita. U maydon tanlaydi, massivlarni aylanadi, shart bo'yicha filtrlaydi va yangi JSON yasaydi. <code>-r</code> satrni qo'shtirnoqsiz, <code>-c</code> esa ixcham ko'rinishda chiqaradi."
        },
        {
          "type": "code",
          "title": "asos.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/talabalar30.json\"\ncat > \"$fayl\" <<'JSON'\n[\n  {\"ism\": \"Ali\", \"ball\": 85},\n  {\"ism\": \"Aziza\", \"ball\": 92},\n  {\"ism\": \"Bek\", \"ball\": 78}\n]\nJSON\n\njq '.[1].ism' \"$fayl\"\njq -r '.[] | select(.ball >= 85) | .ism' \"$fayl\"\njq 'length' \"$fayl\"",
          "output": "\"Aziza\"\nAziza\nAli\n3"
        },
        {
          "type": "code",
          "title": "yangi_json.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/talabalar30.json\"\njq -r '[.[] | {ism, ball}] | sort_by(.ball) | reverse | .[] | \"\\(.ism): \\(.ball)\"' \"$fayl\"\njq -c 'map(.ism)' \"$fayl\"",
          "output": "Aziza: 92\nAli: 85\nBek: 78\n[\"Ali\",\"Aziza\",\"Bek\"]"
        },
        {
          "type": "table",
          "head": [
            "Filtr",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>.ism</code>",
              "ism maydoni"
            ],
            [
              "<code>.[]</code>",
              "Massivning har bir elementi"
            ],
            [
              "<code>select(.ball &gt;= 85)</code>",
              "Shartga mos elementlar"
            ],
            [
              "<code>map(.ism)</code>",
              "Har bir elementdan ism"
            ],
            [
              "<code>length</code>",
              "Massiv yoki satr uzunligi"
            ],
            [
              "<code>-r</code>",
              "Satrni qo'shtirnoqsiz chiqaradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "jq har doim ham o'rnatilgan emas",
          "html": "Ko'p Linux tizimlarida <code>jq</code> alohida paket sifatida o'rnatiladi. Skript boshida <code>command -v jq &gt;/dev/null || { echo \\\"jq kerak\\\" &gt;&amp;2; exit 69; }</code> bilan tekshirish mumkin. <code>jq -e</code> filtr natijasini holat kodiga aylantiradi: <code>null</code> yoki <code>false</code> bo'lsa muvaffaqiyatsiz tugaydi. API javobini avval <code>jq .</code> bilan tekshirib, keyin maydonlarga murojaat qiling."
        }
      ],
      "quiz": [
        {
          "q": "jq -r nimani o'zgartiradi?",
          "options": [
            "Satr natijasini qo'shtirnoqsiz chiqaradi",
            "Faqat raqamlarni chiqaradi",
            "Faylni o'qiydi",
            "JSONni ixchamlaydi"
          ],
          "answer": 0,
          "explain": "-r raw rejimi JSON satr qo'shtirnoqlarini olib tashlaydi, bu shell o'zgaruvchisiga olishda qulay."
        },
        {
          "q": "select(.ball >= 85) filtri nima qiladi?",
          "options": [
            "Barcha elementlarni qoldiradi",
            "Shartga mos elementlarni qoldiradi",
            "Ball maydonini o'chiradi",
            "Massivni saralaydi"
          ],
          "answer": 1,
          "explain": "select shart rost bo'lgan elementlarnigina keyingi filtrga o'tkazadi."
        },
        {
          "q": "jq '.[]' ifodasi massivda nimani bildiradi?",
          "options": [
            "Butun massivni",
            "Har bir elementni alohida",
            "Faqat birinchi elementni",
            "Massiv uzunligini"
          ],
          "answer": 1,
          "explain": ".[] massiv elementlarini birma-bir chiqaradi; ular keyingi filtrlarga alohida o'tadi."
        }
      ]
    },
    {
      "id": 31,
      "title": "jq bilan API va guruhlangan hisobot",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "API javoblari ko'pincha <code>{\"data\": [...]}</code> ko'rinishida keladi. <code>jq</code> bilan kerakli maydonlarni tanlash, holat bo'yicha sanash va tuman kabi kalit bo'yicha guruhlash mumkin. <code>group_by</code> avval kalit bo'yicha saralaydi, keyin guruhlar massivini beradi."
        },
        {
          "type": "code",
          "title": "filtr.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\njson='{\"data\":[{\"id\":1,\"holat\":\"ok\"},{\"id\":2,\"holat\":\"xato\"},{\"id\":3,\"holat\":\"ok\"}]}'\n\nprintf '%s\\n' \"$json\" | jq -r '.data[] | select(.holat == \"ok\") | .id'\necho \"---\"\nprintf '%s\\n' \"$json\" | jq -r '.data | group_by(.holat)[] | \"\\(.[0].holat)=\\(length)\"'",
          "output": "1\n3\n---\nok=2\nxato=1"
        },
        {
          "type": "code",
          "title": "guruh.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\njson='{\"data\":[{\"tuman\":\"A\",\"son\":4},{\"tuman\":\"B\",\"son\":6},{\"tuman\":\"A\",\"son\":2}]}'\n\nprintf '%s\\n' \"$json\" | jq -r '.data | group_by(.tuman)[] | \"\\(.[0].tuman): \\(map(.son) | add)\"'\necho \"---\"\nprintf '%s\\n' \"$json\" | jq -r '.data | map(.son) | add'",
          "output": "A: 6\nB: 6\n---\n12"
        },
        {
          "type": "table",
          "head": [
            "Filtr",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>group_by(.tuman)</code>",
              "Kalit bo'yicha guruhlaydi"
            ],
            [
              "<code>map(.son)</code>",
              "Har bir guruhdan son maydonini oladi"
            ],
            [
              "<code>add</code>",
              "Massiv sonlarini qo'shadi"
            ],
            [
              "<code>length</code>",
              "Guruhdagi elementlar soni"
            ],
            [
              "<code>sort_by(.son)</code>",
              "Son bo'yicha saralaydi"
            ],
            [
              "<code>--arg nom qiymat</code>",
              "Tashqi qiymatni filtrga beradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Xatoni oldin tekshiring",
          "html": "API xato qaytarsa <code>.data</code> umuman bo'lmasligi mumkin; <code>.data[]</code> xato beradi. Avval <code>jq -e '.data'</code> bilan mavjudligini tekshiring yoki <code>.data // []</code> bilan bo'sh massiv bering. <code>group_by</code> kalitlari matn bo'lsa, ular alifbo tartibida chiqadi — hisobot tartibini aniq nazorat qilish uchun <code>sort_by</code> yoki tashqi <code>sort</code> ishlating."
        }
      ],
      "quiz": [
        {
          "q": "jq group_by(.tuman) natijasi qanday ko'rinishda bo'ladi?",
          "options": [
            "Guruhlar massivi",
            "Faqat sonlar ro'yxati",
            "JSON obyekti kalitlari",
            "Bitta satr"
          ],
          "answer": 0,
          "explain": "group_by har bir kalit uchun elementlar massivini yaratadi, ya'ni massivlar massivini qaytaradi."
        },
        {
          "q": "map(.son) | add ifodasi nimani hisoblaydi?",
          "options": [
            "O'rtacha qiymatni",
            "Maydonlar sonini",
            "son qiymatlarining yig'indisini",
            "Eng katta sonni"
          ],
          "answer": 2,
          "explain": "map har bir elementdan son ni oladi, add esa hosil bo'lgan massivni qo'shadi."
        },
        {
          "q": "--arg nom qiymat varianti nima uchun ishlatiladi?",
          "options": [
            "JSONni o'chirish uchun",
            "Faqat raqamlarni chiqarish uchun",
            "Faylni siqish uchun",
            "Tashqi qiymatni jq filtriga xavfsiz berish uchun"
          ],
          "answer": 3,
          "explain": "--arg filtr ichida $nom sifatida foydalaniladigan tashqi qiymatni beradi; bu satrni kodga ulashdan xavfsizroq."
        }
      ]
    },
    {
      "id": 32,
      "title": "sort, uniq, cut, tr va paste",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Matn bilan ishlashda bir nechta kichik vosita birga ishlatiladi: <code>sort</code> saralaydi, <code>uniq</code> qo'shni takrorlarni birlashtiradi, <code>cut</code> ustunlarni ajratadi, <code>tr</code> belgilarni almashtiradi, <code>paste</code> esa qatorlarni birlashtiradi. Ular odatda quvur orqali ulanadi."
        },
        {
          "type": "code",
          "title": "sanash.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/sozlar32.txt\"\nprintf 'nok\\nolma\\nnok\\nuzum\\nolma\\n' > \"$fayl\"\n\nsort \"$fayl\" | uniq -c | awk '{ print $1, $2 }'\necho \"---\"\nsort -u \"$fayl\" | wc -l",
          "output": "2 nok\n2 olma\n1 uzum\n---\n3"
        },
        {
          "type": "code",
          "title": "ustun.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"/tmp/noldan/ballar32.txt\"\nprintf 'Ali:85:3\\nAziza:92:5\\nBek:78:2\\n' > \"$fayl\"\n\ncut -d: -f1,2 \"$fayl\"\necho \"---\"\ncut -d: -f1 \"$fayl\" | paste -sd, -\necho \"---\"\nprintf 'bash skript\\n' | tr 'a-z' 'A-Z'",
          "output": "Ali:85\nAziza:92\nBek:78\n---\nAli,Aziza,Bek\n---\nBASH SKRIPT"
        },
        {
          "type": "table",
          "head": [
            "Vosita",
            "Foydali varianti"
          ],
          "rows": [
            [
              "<code>sort</code>",
              "<code>-n</code> son bo'yicha, <code>-r</code> teskari"
            ],
            [
              "<code>sort -k2</code>",
              "Ikkinchi maydon bo'yicha"
            ],
            [
              "<code>uniq -c</code>",
              "Takrorlar sonini qo'shadi"
            ],
            [
              "<code>uniq -d</code>",
              "Faqat takrorlarni beradi"
            ],
            [
              "<code>cut -d: -f2</code>",
              "Ajratgich bo'yicha ustun oladi"
            ],
            [
              "<code>tr 'a-z' 'A-Z'</code>",
              "Harflarni almashtiradi"
            ],
            [
              "<code>paste -sd,</code>",
              "Qatorlarni bitta qatorga birlashtiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "uniq avval saralashni talab qiladi",
          "html": "<code>uniq</code> faqat <b>qo'shni</b> bir xil qatorlarni birlashtiradi; shuning uchun oldin <code>sort</code> kerak. <code>sort</code> natijasi lokalga bog'liq bo'lishi mumkin, barqaror natija uchun <code>LC_ALL=C sort</code> ishlating. <code>cut -c</code> ko'p baytli UTF-8 harflarda kutilmagan natija berishi mumkin; matn ustunlari uchun <code>awk</code> ba'zan ishonchliroq."
        }
      ],
      "quiz": [
        {
          "q": "uniq -c to'g'ri ishlashi uchun oldin qaysi amal bajarilishi kerak?",
          "options": [
            "Qatorlarni saralash",
            "Barcha bo'shliqlarni olib tashlash",
            "Faylni siqish",
            "Faylni o'chirish"
          ],
          "answer": 0,
          "explain": "uniq faqat qo'shni takrorlarni sanaydi, shuning uchun avval sort bilan bir xil qatorlarni yonma-yon qo'yish kerak."
        },
        {
          "q": "cut -d: -f2 fayl buyrug'i nima qiladi?",
          "options": [
            "Ikkinchi faylni ochadi",
            "Ikkinchi qatorni oladi",
            "Ikki nuqta bilan ajratilgan ikkinchi maydonni oladi",
            "Faylni 2 marta chiqaradi"
          ],
          "answer": 2,
          "explain": "-d: ajratgichni, -f2 esa ikkinchi maydonni tanlaydi."
        },
        {
          "q": "paste -sd, - buyrug'ining vazifasi nima?",
          "options": [
            "Vergullarni bo'shliqqa almashtiradi",
            "Har bir qatorni alohida chiqaradi",
            "Qatorlarni vergul bilan bitta qatorga birlashtiradi",
            "Faylni o'chiradi"
          ],
          "answer": 2,
          "explain": "-s serial rejimda qatorlarni birlashtiradi, -d, esa ular orasiga vergul qo'yadi."
        }
      ]
    },
    {
      "id": 33,
      "title": "date va printf bilan hisobot formatlash",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Hisobotda sana va sonlar bir xil ko'rinishda bo'lishi kerak. <code>date</code> sana bilan ishlaydi, <code>printf</code> esa ustunlarni tekislaydi. Skriptlarda <code>echo</code> o'rniga <code>printf</code> afzal: u formatni aniq boshqaradi va tizimga qarab kutilmagan xatti-harakat qilmaydi."
        },
        {
          "type": "code",
          "title": "sana.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nTZ=UTC date -d '2026-10-23 14:05:00' '+%Y-%m-%d %H:%M'\nTZ=UTC date -d '2026-10-23' '+%A'\nTZ=UTC date -d '2026-10-23 +7 days' '+%Y-%m-%d'\ndate -u -d '@0' '+%F %T'",
          "output": "2026-10-23 14:05\nFriday\n2026-10-30\n1970-01-01 00:00:00"
        },
        {
          "type": "code",
          "title": "jadval.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nprintf '%-10s | %5s\\n' \"ism\" \"ball\"\nprintf '%-10s | %5d\\n' \"Ali\" 85\nprintf '%-10s | %5d\\n' \"Aziza\" 92\nprintf 'Narx: %.2f\\n' \"12.5\"\nprintf 'Kod: %04o\\n' 42",
          "output": "ism        |  ball\nAli        |    85\nAziza      |    92\nNarx: 12.50\nKod: 0052"
        },
        {
          "type": "table",
          "head": [
            "Format",
            "Natijasi"
          ],
          "rows": [
            [
              "<code>%s</code>",
              "Satr"
            ],
            [
              "<code>%d</code>",
              "Butun son"
            ],
            [
              "<code>%05d</code>",
              "5 xonali, oldiga nol qo'yilgan son"
            ],
            [
              "<code>%-10s</code>",
              "10 belgidan chapga tekislangan satr"
            ],
            [
              "<code>%.2f</code>",
              "Ikki xonali kasr"
            ],
            [
              "<code>%q</code>",
              "Shell uchun xavfsiz iqtiboslangan satr"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "GNU date va BSD date",
          "html": "Linux'dagi GNU date <code>-d 'matn'</code> bilan sanani tahlil qiladi. macOS'dagi BSD date boshqa variantlarni ishlatadi, shuning uchun ko'chma skriptda <code>date -u +%Y-%m-%dT%H:%M:%SZ</code> kabi oddiy formatga tayaning. Hisobotda vaqt zonasini <code>TZ=UTC</code> yoki <code>date -u</code> bilan aniq belgilang — aks holda server va foydalanuvchi vaqti farq qiladi."
        }
      ],
      "quiz": [
        {
          "q": "printf '%05d' 42 natijasi qanday bo'ladi?",
          "options": [
            "42",
            "00042",
            "42.00",
            "  042"
          ],
          "answer": 1,
          "explain": "%05d kenglikni 5 ga to'ldiradi va bo'sh joylar o'rniga nol qo'yadi: 00042."
        },
        {
          "q": "date -u nimani bildiradi?",
          "options": [
            "Fayl o'zgarish vaqtini",
            "Mahalliy vaqtni",
            "UTC vaqtini",
            "Faqat yilni"
          ],
          "answer": 2,
          "explain": "-u universal (UTC) vaqt zonasida chiqaradi; bu server hisobotlari uchun barqaror."
        },
        {
          "q": "Nima uchun skriptlarda echo o'rniga printf ko'proq tavsiya etiladi?",
          "options": [
            "printf tezroq ishlaydi",
            "printf format va chiqishni aniq boshqaradi",
            "echo faqat Windows'da ishlaydi",
            "printf faylni o'chiradi"
          ],
          "answer": 1,
          "explain": "printf format belgilarini aniq talqin qiladi; echo ning variant va escape xatti-harakati shell'ga qarab farq qilishi mumkin."
        }
      ]
    },
    {
      "id": 34,
      "title": "Jarayonlar: fon, jobs, wait va kill",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Shell har bir buyruqni jarayon sifatida ishga tushiradi. Buyruq oxiriga <code>&amp;</code> qo'shsangiz, u fonda ishlaydi va shell keyingi buyruqqa o'tadi. <code>$!</code> oxirgi fon jarayonining PID ini, <code>wait</code> esa uning tugashini kutadi. <code>kill</code> jarayonga signal yuboradi."
        },
        {
          "type": "code",
          "title": "fon.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nbash -c 'echo \"bola ishladi\"' &\nbola=$!\nwait \"$bola\"\necho \"Kod: $?\"",
          "output": "bola ishladi\nKod: 0"
        },
        {
          "type": "code",
          "title": "tekshir.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nsleep 0.1 &\nbola=$!\n\nif kill -0 \"$bola\" 2>/dev/null; then\n  echo \"Bola tirik\"\nfi\n\nwait \"$bola\"\necho \"Kod: $?\"",
          "output": "Bola tirik\nKod: 0"
        },
        {
          "type": "table",
          "head": [
            "Buyruq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>buyruq &amp;</code>",
              "Fonda ishga tushiradi"
            ],
            [
              "<code>$!</code>",
              "Oxirgi fon jarayoni PID i"
            ],
            [
              "<code>jobs</code>",
              "Joriy shell ishlarini ko'rsatadi"
            ],
            [
              "<code>fg %1</code>",
              "Ishni old planga qaytaradi"
            ],
            [
              "<code>wait PID</code>",
              "Jarayon tugashini kutadi"
            ],
            [
              "<code>kill PID</code>",
              "SIGTERM yuboradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Avval muloyim signal",
          "html": "<code>kill PID</code> sukut bo'yicha SIGTERM yuboradi: dastur tozalash ishlarini bajarishga ulgurishi mumkin. <code>kill -9</code> (SIGKILL) esa jarayonni darhol o'ldiradi va unga trap ishlash imkonini bermaydi; uni faqat oxirgi chora sifatida ishlating. <code>jobs</code> faqat joriy shell ishlarini ko'rsatadi, boshqa terminaldagi jarayonlarni emas. PID qayta ishlatilishi mumkin, shuning uchun uni ishonchli manbadan oling."
        }
      ],
      "quiz": [
        {
          "q": "Buyruq oxiridagi & belgisi nimani bildiradi?",
          "options": [
            "Buyruqni ikki marta bajarishni",
            "Xatoni faylga yozishni",
            "Buyruqni bloklashni",
            "Buyruqni fonda ishga tushirishni"
          ],
          "answer": 3,
          "explain": "& buyruqni fonda ishga tushiradi; shell darhol keyingi buyruqqa o'tadi."
        },
        {
          "q": "wait $bola buyrug'i nima qiladi?",
          "options": [
            "Jarayonni o'chiradi",
            "Jarayon tugashini kutadi va holatini beradi",
            "Yangi jarayon yaratadi",
            "PID ni o'zgartiradi"
          ],
          "answer": 1,
          "explain": "wait berilgan bola jarayon tugashini kutadi va uning chiqish holatini qaytaradi."
        },
        {
          "q": "jobs buyrug'i qaysi jarayonlarni ko'rsatadi?",
          "options": [
            "Tizimdagi barcha jarayonlarni",
            "Joriy shell boshqarayotgan ishlarni",
            "Faqat ildiz jarayonlarini",
            "Faqat fondagi tarmoq jarayonlarini"
          ],
          "answer": 1,
          "explain": "jobs joriy shell sessiyasidagi ish (job) ro'yxatini ko'rsatadi; barcha tizim jarayonlari uchun ps yoki top ishlatiladi."
        }
      ]
    },
    {
      "id": 35,
      "title": "Signallar va trap bilan tozalash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Signal — jarayonga yuboriladigan xabar. Ctrl+C SIGINT, terminal yopilganda SIGHUP, tugatish uchun SIGTERM yuboriladi. <code>trap</code> yordamida signalga javob berish yoki skript tugaganda vaqtinchalik fayllarni tozalash mumkin. Bu uzoq ishlaydigan skriptlar uchun juda muhim."
        },
        {
          "type": "code",
          "title": "tozala.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nvaqtincha=\"/tmp/noldan/trap35\"\nmkdir -p \"$vaqtincha\"\n\ntozala() {\n  echo \"Tozalash: $vaqtincha\"\n  rm -rf \"$vaqtincha\"\n}\n\ntrap tozala EXIT\n\nprintf 'ish\\n' > \"$vaqtincha/fayl.txt\"\necho \"Ish tugadi\"",
          "output": "Ish tugadi\nTozalash: /tmp/noldan/trap35"
        },
        {
          "type": "code",
          "title": "signal.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ntrap 'echo \"INT ushlandi\"; exit 130' INT\n\necho \"Boshladik\"\nkill -INT $$\necho \"Bu qator bajarilmaydi\"",
          "output": "Boshladik\nINT ushlandi"
        },
        {
          "type": "table",
          "head": [
            "Signal",
            "Raqam",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>SIGHUP</code>",
              "1",
              "Terminal yopildi"
            ],
            [
              "<code>SIGINT</code>",
              "2",
              "Ctrl+C"
            ],
            [
              "<code>SIGKILL</code>",
              "9",
              "Majburiy o'ldirish, trap yo'q"
            ],
            [
              "<code>SIGTERM</code>",
              "15",
              "Muloyim tugatish so'rovi"
            ],
            [
              "<code>EXIT</code>",
              "—",
              "Shell chiqishida ishlaydigan maxsus trap"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "info",
          "title": "Tozalashni idempotent qiling",
          "html": "<code>trap funksiya EXIT</code> skript normal tugaganda ham, xato bilan chiqqanda ham ishlaydi. Tozalash funksiyasi bir necha marta chaqirilsa ham xatosiz ishlashi kerak: <code>rm -rf</code> va <code>[[ -e ]]</code> shu uchun qulay. SIGKILL va SIGSTOP ni trap bilan ushlab bo'lmaydi. Trap ichida uzoq kutish yoki yangi murakkab ish boshlashdan saqlaning."
        }
      ],
      "quiz": [
        {
          "q": "Qaysi signalni trap bilan ushlab bo'lmaydi?",
          "options": [
            "SIGKILL",
            "EXIT",
            "SIGINT",
            "SIGTERM"
          ],
          "answer": 0,
          "explain": "SIGKILL (9) jarayonga yetib bormaydi va ushlanmaydi; shuning uchun u oxirgi chora."
        },
        {
          "q": "trap 'tozala' EXIT qachon bajariladi?",
          "options": [
            "Har bir qatordan keyin",
            "Shell normal yoki xato bilan chiqayotganda",
            "Faqat Ctrl+C bosilganda",
            "Faqat fayl o'chirilganda"
          ],
          "answer": 1,
          "explain": "EXIT trap shell tugashida ishga tushadi; bu tozalash uchun eng ishonchli joy."
        },
        {
          "q": "trap - INT buyrug'i nima qiladi?",
          "options": [
            "INT uchun trapni tiklaydi",
            "INT trapini o'chiradi va standart xatti-harakatga qaytaradi",
            "INT signalini yuboradi",
            "Barcha traplarni ko'rsatadi"
          ],
          "answer": 1,
          "explain": "- bilan trap o'chiriladi; endi SIGINT yana standart tarzda jarayonni to'xtatadi."
        }
      ]
    },
    {
      "id": 36,
      "title": "cron va rejalashtirilgan vazifalar",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<code>cron</code> buyruqlarni belgilangan vaqtda avtomatik ishga tushiradi. Foydalanuvchi jadvali <code>crontab -e</code> bilan tahrirlanadi. Har bir qatorda besh vaqt maydoni va bajariladigan buyruq bo'ladi: daqiqa, soat, oy kuni, oy, hafta kuni."
        },
        {
          "type": "code",
          "title": "jadval.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\njadval=\"/tmp/noldan/cron36.txt\"\ncat > \"$jadval\" <<'CRON'\n30 2 * * * /usr/local/bin/zaxira.sh >> /var/log/zaxira.log 2>&1\n0 9 * * 1 /usr/local/bin/haftalik.sh\nCRON\ncat \"$jadval\"",
          "output": "30 2 * * * /usr/local/bin/zaxira.sh >> /var/log/zaxira.log 2>&1\n0 9 * * 1 /usr/local/bin/haftalik.sh"
        },
        {
          "type": "code",
          "title": "kunlik.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nlog=\"/tmp/noldan/cron-ish36.log\"\n: > \"$log\"\n\n{\n  printf '%s | start\\n' \"$(TZ=UTC date -d '2026-10-23 02:30:00' '+%F %T')\"\n  echo \"hisobot tayyor\"\n} >> \"$log\"\n\ncat \"$log\"",
          "output": "2026-10-23 02:30:00 | start\nhisobot tayyor"
        },
        {
          "type": "table",
          "head": [
            "Yozuv",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>*/15 * * * *</code>",
              "Har 15 daqiqada"
            ],
            [
              "<code>0 9 * * 1</code>",
              "Dushanba 09:00 da"
            ],
            [
              "<code>0 0 1 * *</code>",
              "Har oyning 1-kuni yarim tunda"
            ],
            [
              "<code>@daily</code>",
              "Kuniga bir marta (00:00)"
            ],
            [
              "<code>@reboot</code>",
              "Tizim yuklanganda"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Cron muhiti minimal",
          "html": "Cron skriptni qisqartirilgan PATH va boshqa muhit bilan ishga tushirishi mumkin. Skript ichida buyruqlarga absolyut yo'l bering, chiqish va xatoni log fayliga yo'naltiring: <code>&gt;&gt; log 2&gt;&amp;1</code>. Bir vaqtda ikki nusxa ishlamasligi uchun <code>flock -n</code> ishlating. Rejalashtirilgan ishni avval qo'lda sinab ko'ring; haqiqiy crontab ni faqat o'z muhitingizda o'zgartiring."
        }
      ],
      "quiz": [
        {
          "q": "*/15 * * * * yozuvi nimani bildiradi?",
          "options": [
            "Faqat 15:00 da",
            "Har 15 daqiqada",
            "Har 15 soatda",
            "Har 15 kunda"
          ],
          "answer": 1,
          "explain": "Birinchi maydon daqiqa; */15 qadam ma'nosi bo'lib, har 15 daqiqada ishga tushadi."
        },
        {
          "q": "Cron buyrug'idagi >> log 2>&1 nimani bajaradi?",
          "options": [
            "Chiqish va xatoni log fayliga qo'shadi",
            "Logni o'chiradi",
            "Buyruqni fonda ishga tushiradi",
            "Faqat xatoni logga yozadi"
          ],
          "answer": 0,
          "explain": ">> stdout ni qo'shib yozadi, 2>&1 esa stderr ni stdout joyiga, ya'ni logga yo'naltiradi."
        },
        {
          "q": "0 9 * * 1 ifodasidagi oxirgi 1 qaysi kunni bildiradi?",
          "options": [
            "Yakshanba",
            "Dushanba",
            "Seshanba",
            "Shanba"
          ],
          "answer": 1,
          "explain": "cron'da hafta kuni 0 yoki 7 yakshanba, 1 dushanba hisoblanadi."
        }
      ]
    },
    {
      "id": 37,
      "title": "ssh: kalitlar, config va masofaviy buyruqlar",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>ssh</code> masofaviy serverga shifrlangan ulanish ochadi. Parol o'rniga kalit ishlatish xavfsizroq: <code>ssh-keygen -t ed25519</code> kalit juftini yaratadi, <code>ssh-copy-id</code> ochiq kalitni serverga joylaydi. <code>~/.ssh/config</code> esa host, foydalanuvchi va portni qisqa nom ostida saqlaydi. Quyidagi natijalar <code>server</code> SSH config'da sozlangan deb olinadi."
        },
        {
          "type": "code",
          "title": "masofaviy.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nssh server 'hostname; whoami'\necho \"---\"\nscp -- /tmp/noldan/hisobot.txt server:/home/aziza/hisobot.txt\nssh server 'wc -l < /home/aziza/hisobot.txt'",
          "output": "noldan-server\naziza\n---\n3"
        },
        {
          "type": "code",
          "title": "config.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nmkdir -p /tmp/noldan/ssh37\ncat > /tmp/noldan/ssh37/config <<'EOF'\nHost noldan-test\n  HostName 203.0.113.10\n  User aziza\n  Port 2222\nEOF\n\nssh -G -F /tmp/noldan/ssh37/config noldan-test 2>/dev/null | grep -E '^(hostname|user|port) ' | sort",
          "output": "hostname 203.0.113.10\nport 2222\nuser aziza"
        },
        {
          "type": "table",
          "head": [
            "Buyruq",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>ssh-keygen -t ed25519</code>",
              "Yangi kalit jufti yaratadi"
            ],
            [
              "<code>ssh-copy-id server</code>",
              "Ochiq kalitni serverga qo'shadi"
            ],
            [
              "<code>ssh server 'buyruq'</code>",
              "Masofaviy buyruq bajaradi"
            ],
            [
              "<code>scp fayl server:/yo'l</code>",
              "Faylni nusxalaydi"
            ],
            [
              "<code>ssh -G host</code>",
              "Sozlamalarni ulanishsiz ko'rsatadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Kalit ruxsatlari va host tekshiruvi",
          "html": "Maxfiy kalit fayli faqat egasi o'qiy oladigan bo'lishi kerak: <code>chmod 600 ~/.ssh/id_ed25519</code>. Birinchi ulanishda host kaliti barmoq izini tekshiring; <code>StrictHostKeyChecking=no</code> ni doimiy ishlatmang. <code>scp</code> o'rniga zamonaviyroq <code>rsync</code> yoki <code>sftp</code> ham ishlatiladi. Serverda buyruq bajarish huquqi jiddiy javobgarlik ekanini unutmang."
        }
      ],
      "quiz": [
        {
          "q": "Maxfiy SSH kaliti uchun tavsiya etiladigan ruxsat qanday?",
          "options": [
            "777",
            "644",
            "600",
            "755"
          ],
          "answer": 2,
          "explain": "600 faqat egaga o'qish/yozish huquqini beradi; SSH boshqa ruxsatlarda kalitni rad etishi mumkin."
        },
        {
          "q": "ssh-copy-id server buyrug'i nima qiladi?",
          "options": [
            "Maxfiy kalitni serverga yuboradi",
            "Serverdagi barcha fayllarni o'chiradi",
            "Ochiq kalitni serverning authorized_keys fayliga qo'shadi",
            "Yangi server yaratadi"
          ],
          "answer": 2,
          "explain": "ssh-copy-id ochiq kalitni serverdagi authorized_keys ga qo'shadi; maxfiy kalit hech qachon yuborilmaydi."
        },
        {
          "q": "ssh server 'wc -l fayl' buyrug'i qanday bajariladi?",
          "options": [
            "Faqat interaktiv shell ochadi",
            "Faylni serverga nusxalaydi",
            "Mahalliy faylni sanaydi",
            "Serverda wc ni bajarib natijani qaytaradi"
          ],
          "answer": 3,
          "explain": "Qo'shtirnoq ichidagi buyruq masofaviy serverda bajariladi va uning chiqishi mahalliy terminalga qaytadi."
        }
      ]
    },
    {
      "id": 38,
      "title": "rsync: xavfsiz sinxronlash va dry-run",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>rsync</code> fayllarni faqat o'zgargan qismini uzatib sinxronlaydi. <code>-a</code> arxiv rejimida ruxsat va vaqtlarni saqlaydi, <code>-n</code> sinov (dry-run), <code>--delete</code> esa nishondagi ortiqcha fayllarni o'chiradi. Manba oxiridagi <code>/</code> ma'noni o'zgartiradi (natijalar rsync 3.x uchun): u bilan papka <b>ichidagi</b> narsalar ko'chiriladi."
        },
        {
          "type": "code",
          "title": "reja.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nmanba=\"/tmp/noldan/rsync38-manba\"\nnishon=\"/tmp/noldan/rsync38-nishon\"\nrm -rf \"$manba\" \"$nishon\"\nmkdir -p \"$manba\" \"$nishon\"\nprintf 'yangi\\n' > \"$manba/yangi.txt\"\nprintf 'eski\\n' > \"$nishon/eski.txt\"\n\nrsync -ain --delete --out-format='%i %n' \"$manba/\" \"$nishon/\" \\\n  | grep -E '^(>f|\\*deleting)' | sed -E 's/ +/ /g' | sort",
          "output": "*deleting eski.txt\n>f+++++++++ yangi.txt"
        },
        {
          "type": "code",
          "title": "slash.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nmanba=\"/tmp/noldan/rsync38-manba\"\nnishon=\"/tmp/noldan/rsync38-nishon\"\n\necho \"Slashsiz:\"\nrsync -an --out-format='%n' \"$manba\" \"$nishon/\" | sed -e '/\\/$/d' -e '/^$/d' | sort\n\necho \"Slash bilan:\"\nrsync -an --out-format='%n' \"$manba/\" \"$nishon/\" | sed -e '/\\/$/d' -e '/^$/d' | sort",
          "output": "Slashsiz:\nrsync38-manba/yangi.txt\nSlash bilan:\nyangi.txt"
        },
        {
          "type": "table",
          "head": [
            "Variant",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>-a</code>",
              "Arxiv rejimi: rekursiya, ruxsat, vaqt"
            ],
            [
              "<code>-n</code>",
              "Hech narsani o'zgartirmasdan sinash"
            ],
            [
              "<code>-v</code>",
              "Batafsil ro'yxat"
            ],
            [
              "<code>--delete</code>",
              "Nishondagi ortiqcha fayllarni o'chiradi"
            ],
            [
              "<code>--exclude='*.tmp'</code>",
              "Naqsh bo'yicha chiqarib tashlaydi"
            ],
            [
              "<code>-z</code>",
              "Uzatishda siqadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "--delete ni avval sinang",
          "html": "<code>--delete</code> nishondagi manbada yo'q fayllarni o'chiradi; yo'lni xato yozsangiz ma'lumot yo'qolishi mumkin. Har doim avval <code>-n</code> bilan rejani ko'ring. Zaxira uchun <code>--backup --backup-dir=...</code> ishlatsa bo'ladi. Masofaviy sinxronlashda <code>rsync -av server:/yo'l/ /mahalliy/</code> ko'rinishidan foydalaniladi; uzatish SSH orqali shifrlanadi."
        }
      ],
      "quiz": [
        {
          "q": "rsync manba yo'li oxiridagi / nimani o'zgartiradi?",
          "options": [
            "Faqat papkani ko'chirishni",
            "Fayllarni o'chirishni",
            "Hech narsani",
            "Papka ichidagi narsalarni ko'chirishni"
          ],
          "answer": 3,
          "explain": "manba/ nishonga ichidagi narsalarni joylaydi; manba (slashsiz) esa papkaning o'zini nishon ichiga ko'chiradi."
        },
        {
          "q": "rsync -n varianti nima qiladi?",
          "options": [
            "Hech narsani o'zgartirmasdan nima bo'lishini ko'rsatadi",
            "Faqat nomlarni o'zgartiradi",
            "Tarmoqni o'chiradi",
            "Fayllarni o'chiradi"
          ],
          "answer": 0,
          "explain": "-n dry-run: reja ko'rsatiladi, lekin fayllar uzatilmaydi yoki o'chirilmaydi."
        },
        {
          "q": "--delete varianti qanday ishlaydi?",
          "options": [
            "Nishondagi manbada yo'q fayllarni o'chiradi",
            "Faqat bo'sh papkalarni o'chiradi",
            "Arxivni o'chiradi",
            "Manbadagi fayllarni o'chiradi"
          ],
          "answer": 0,
          "explain": "--delete nishonni manbaga aynan moslashtirish uchun undagi ortiqcha fayllarni olib tashlaydi."
        }
      ]
    },
    {
      "id": 39,
      "title": "curl: HTTP so'rovlari va API bilan ishlash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "<code>curl</code> HTTP so'rovlarini yuboradi va javobni chiqaradi. <code>-sS</code> jim rejimda ishlaydi, lekin xatoni ko'rsatadi; <code>-f</code> HTTP 400 va undan yuqori kodlarda muvaffaqiyatsiz tugaydi; <code>-o</code> javobni faylga yozadi. Quyidagi natijalar <code>127.0.0.1:8080</code> da ishlayotgan test API uchun; <code>/health.json</code> fayli <code>{\"status\":\"ok\",\"version\":\"1.4\"}</code> qaytaradi."
        },
        {
          "type": "code",
          "title": "api.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\njavob=$(curl -sS --max-time 5 http://127.0.0.1:8080/health.json)\necho \"$javob\"\necho \"---\"\necho \"$javob\" | jq -r '.status'\necho \"---\"\ncurl -sS -o /dev/null -w '%{http_code} %{content_type}\\n' http://127.0.0.1:8080/health.json",
          "output": "{\"status\":\"ok\",\"version\":\"1.4\"}\n---\nok\n---\n200 application/json"
        },
        {
          "type": "code",
          "title": "xato.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nbase=\"http://127.0.0.1:8080\"\n\nif curl -sSf \"$base/yoq.json\" -o /dev/null 2>/dev/null; then\n  echo \"Resurs bor\"\nelse\n  echo \"Topilmadi yoki HTTP xatosi\"\nfi\n\ncurl -sS -o /dev/null -w 'Holat: %{http_code}\\n' \"$base/health.json\"",
          "output": "Topilmadi yoki HTTP xatosi\nHolat: 200"
        },
        {
          "type": "table",
          "head": [
            "Variant",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>-sS</code>",
              "Jim, lekin xatolarni ko'rsatadi"
            ],
            [
              "<code>-f</code>",
              "HTTP xatosida muvaffaqiyatsiz tugaydi"
            ],
            [
              "<code>-o fayl</code>",
              "Javobni faylga yozadi"
            ],
            [
              "<code>-H 'Header: qiymat'</code>",
              "Sarlavha qo'shadi"
            ],
            [
              "<code>-X POST -d '...'</code>",
              "POST so'rovi yuboradi"
            ],
            [
              "<code>-w '%{http_code}'</code>",
              "Holat kodini chiqaradi"
            ],
            [
              "<code>--retry 3</code>",
              "Vaqtinchalik xatoda qayta urinadi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "API javobini tekshiring",
          "html": "<code>curl</code> tarmoq xatosida nolga teng bo'lmagan kod qaytaradi, lekin HTTP 404 yoki 500 ni sukut bo'yicha xato deb hisoblamaydi — buning uchun <code>-f</code> kerak. Skriptda <code>jq -e</code> bilan kutilgan maydon borligini tekshiring. Token va parollarni URL ichiga yozmang: ular tarix va loglarda qoladi. Maxfiy ma'lumotni sarlavha yoki fayl orqali bering, javob hajmini <code>--max-time</code> bilan cheklang."
        }
      ],
      "quiz": [
        {
          "q": "curl -f nimani bildiradi?",
          "options": [
            "So'rovni tezlashtiradi",
            "Javobni faylga yozadi",
            "HTTP xato kodida muvaffaqiyatsiz tugaydi",
            "Faqat sarlavhalarni ko'rsatadi"
          ],
          "answer": 2,
          "explain": "-f fail rejimi: HTTP 400+ javoblarda curl nolga teng bo'lmagan kod bilan chiqadi."
        },
        {
          "q": "curl -o /dev/null nimani qiladi?",
          "options": [
            "Faylni o'chiradi",
            "Javobni ekranga chiqaradi",
            "Javob tanasini tashlab yuboradi",
            "So'rovni bekor qiladi"
          ],
          "answer": 2,
          "explain": "/dev/null — maxsus qurilma; javob tanasi unga yozilib yo'qoladi, holat kodi esa -w bilan ko'rinadi."
        },
        {
          "q": "API tokenini qanday yuborish xavfsizroq?",
          "options": [
            "URL ichida ?token=...",
            "Sarlavha yoki maxfiy fayl orqali",
            "Fayl nomida",
            "Har bir qator boshida"
          ],
          "answer": 1,
          "explain": "Tokenni URL ga qo'shish tarix va server loglarida qolishi mumkin; sarlavha yoki maxfiy fayl xavfsizroq."
        }
      ]
    },
    {
      "id": 40,
      "title": "tar va gzip: arxiv yaratish va tekshirish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<code>tar</code> bir nechta faylni bitta arxivga yig'adi, <code>gzip</code> esa uni siqadi. <code>-c</code> yaratadi, <code>-x</code> ochadi, <code>-t</code> ichini ko'rsatadi; <code>-z</code> gzip, <code>-j</code> bzip2, <code>-J</code> xz siqishni bildiradi. Arxivni ochishdan oldin uning ichini ko'rish — yaxshi xavfsizlik odati."
        },
        {
          "type": "code",
          "title": "yarat.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan/tar40\"\nrm -rf \"$demo\"\nmkdir -p \"$demo/papka\"\nprintf 'bir\\n' > \"$demo/a.txt\"\nprintf 'ikki\\n' > \"$demo/papka/b.txt\"\n\ntar -czf \"$demo/arxiv.tar.gz\" -C \"$demo\" a.txt papka\ntar -tzf \"$demo/arxiv.tar.gz\"",
          "output": "a.txt\npapka/\npapka/b.txt"
        },
        {
          "type": "code",
          "title": "ochish.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\narxiv=\"/tmp/noldan/tar40/arxiv.tar.gz\"\nchiqish=\"/tmp/noldan/tar40-chiqish\"\nrm -rf \"$chiqish\"\nmkdir -p \"$chiqish\"\n\ntar -xzf \"$arxiv\" -C \"$chiqish\"\nfind \"$chiqish\" -type f -print | sort\necho \"---\"\ncat \"$chiqish/papka/b.txt\"",
          "output": "/tmp/noldan/tar40-chiqish/a.txt\n/tmp/noldan/tar40-chiqish/papka/b.txt\n---\nikki"
        },
        {
          "type": "table",
          "head": [
            "Variant",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>-c</code>",
              "Arxiv yaratadi"
            ],
            [
              "<code>-x</code>",
              "Arxivni ochadi"
            ],
            [
              "<code>-t</code>",
              "Arxiv ichini ro'yxatlaydi"
            ],
            [
              "<code>-z</code>",
              "gzip bilan siqadi/ochadi"
            ],
            [
              "<code>-f arxiv</code>",
              "Arxiv faylini ko'rsatadi"
            ],
            [
              "<code>-C papka</code>",
              "Amalni boshqa papkada bajaradi"
            ],
            [
              "<code>--exclude='*.tmp'</code>",
              "Naqsh bo'yicha chiqarib tashlaydi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Arxivni avval ko'ring",
          "html": "Ishonchsiz arxivni ochishdan oldin <code>tar -tzf arxiv.tar.gz</code> bilan ichini tekshiring. <code>../</code> bilan boshlanadigan yo'llar papkadan tashqariga yozishi mumkin. <code>-C</code> bilan aniq maqsad papkani bering. <code>tar -czf</code> mavjud arxivni ustiga yozadi; muhim fayl bo'lsa avval nusxasini saqlang. Katta arxivlarda <code>-v</code> chiqishi juda ko'p bo'lishi mumkin."
        }
      ],
      "quiz": [
        {
          "q": "Arxiv ichidagi fayllarni ochmasdan ko'rish uchun qaysi variant ishlatiladi?",
          "options": [
            "-C",
            "-t",
            "-x",
            "-c"
          ],
          "answer": 1,
          "explain": "-t ro'yxatlash rejimi; -x ochadi, -c yaratadi."
        },
        {
          "q": "tar -C papka nimani bildiradi?",
          "options": [
            "Arxivni siqadi",
            "Amalni ko'rsatilgan papkada bajaradi",
            "Faqat papkalarni arxivlaydi",
            "Arxivni o'chiradi"
          ],
          "answer": 1,
          "explain": "-C keyingi amal uchun joriy papkani o'zgartiradi, shuning uchun arxiv ichida absolyut yo'l qolmaydi."
        },
        {
          "q": "gzip bilan siqilgan tar arxivini ochish uchun qaysi variant kerak?",
          "options": [
            "-v",
            "-z",
            "-j",
            "-J"
          ],
          "answer": 1,
          "explain": "-z gzip oqimini bildiradi; -j bzip2, -J xz uchun."
        }
      ]
    },
    {
      "id": 41,
      "title": "Ishonchli skript: set -euo pipefail",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Ishonchli skript xatoni jimgina yutib yubormaydi. <code>set -e</code> muvaffaqiyatsiz buyruqdan keyin to'xtaydi, <code>set -u</code> aniqlanmagan o'zgaruvchini xato qiladi, <code>set -o pipefail</code> esa quvurdagi xatoni sezadi. Ular birga <code>set -euo pipefail</code> ko'rinishida yoziladi."
        },
        {
          "type": "code",
          "title": "toxta.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\necho \"Boshladik\"\nfalse\necho \"Bu chiqmaydi\"",
          "output": "Boshladik"
        },
        {
          "type": "code",
          "title": "err.sh",
          "code": "#!/usr/bin/env bash\nset -Eeuo pipefail\ntrap 'echo \"Xato: $BASH_COMMAND (qator $LINENO)\" >&2' ERR\n\necho \"Boshladik\"\nfalse\necho \"Yetib kelmaydi\"",
          "output": "Boshladik\nXato: false (qator 6)"
        },
        {
          "type": "table",
          "head": [
            "Sozlama",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>set -e</code>",
              "Xatoda skriptni to'xtatadi"
            ],
            [
              "<code>set -u</code>",
              "Aniqlanmagan o'zgaruvchini xato qiladi"
            ],
            [
              "<code>set -o pipefail</code>",
              "Quvur xatosini sezadi"
            ],
            [
              "<code>set -E</code>",
              "ERR trapni funksiyalarga meros qiladi"
            ],
            [
              "<code>set -x</code>",
              "Bajarilayotgan buyruqlarni ko'rsatadi"
            ],
            [
              "<code>set +e</code>",
              "Xatoda to'xtatishni vaqtincha o'chiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "set -e sehr emas",
          "html": "<code>set -e</code> <code>if</code>, <code>while</code>, <code>||</code> va <code>&amp;&amp;</code> ichidagi buyruqlarda o'chirilgan bo'lishi mumkin. <code>(( hisob++ ))</code> nol natijasida xato kod qaytaradi. Shuning uchun muhim qadamlar natijasini aniq <code>if</code> bilan tekshiring, xatoni esa <code>trap ... ERR</code> orqali qayd eting. <code>set -u</code> bilan massiv va standart qiymatlarni diqqat bilan ishlating."
        }
      ],
      "quiz": [
        {
          "q": "set -u bilan qaysi xato oldindan ushlanadi?",
          "options": [
            "Quvur xatosini yashiradi",
            "Skriptni tezlashtiradi",
            "Aniqlanmagan o'zgaruvchiga murojaatda xato beradi",
            "Barcha fayllarni o'chiradi"
          ],
          "answer": 2,
          "explain": "-u (nounset) mavjud bo'lmagan o'zgaruvchini xato deb hisoblaydi va jimgina bo'sh qiymat ishlatilishini oldini oladi."
        },
        {
          "q": "set -o pipefail nima uchun kerak?",
          "options": [
            "Quvur ichidagi xatoni butun quvur holatiga ko'tarish uchun",
            "Faqat stderr ni yozish uchun",
            "Barcha buyruqlarni fonda ishga tushirish uchun",
            "Quvurni tezlashtirish uchun"
          ],
          "answer": 0,
          "explain": "pipefail bo'lmasa quvur oxirgi buyruq holatini oladi; u bilan ichki xato ham seziladi."
        },
        {
          "q": "set -E qo'shimcha nima qiladi?",
          "options": [
            "Barcha xatolarni o'chiradi",
            "Faqat shebangni o'qiydi",
            "Muhitni tozalaydi",
            "ERR trapni funksiyalar va subshell'larga meros qiladi"
          ],
          "answer": 3,
          "explain": "-E (errtrace) ERR trapning funksiya va subshell ichida ham ishlashini ta'minlaydi."
        }
      ]
    },
    {
      "id": 42,
      "title": "shellcheck bilan statik tahlil",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "<code>shellcheck</code> skriptni bajarmasdan statik tahlil qiladi va keng tarqalgan xatolarni ko'rsatadi: iqtibos qilinmagan o'zgaruvchilar, mo'rt <code>ls</code> tsikllari, noto'g'ri shartlar. Har bir ogohlantirishning SC raqami bor; ular bo'yicha hujjatda tushuntirish mavjud."
        },
        {
          "type": "code",
          "title": "skript.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nfayl=\"$1\"\nif [ -f $fayl ]; then\n  echo \"Bor: $fayl\"\nfi\n\nfor nom in $(ls); do\n  echo $nom\ndone",
          "output": "Bor: hisobot.txt"
        },
        {
          "type": "code",
          "title": "shellcheck",
          "code": "shellcheck -f gcc skript.sh",
          "output": "skript.sh:5:9: note: Double quote to prevent globbing and word splitting. [SC2086]\nskript.sh:9:12: error: Iterating over ls output is fragile. Use globs. [SC2045]\nskript.sh:10:8: note: Double quote to prevent globbing and word splitting. [SC2086]"
        },
        {
          "type": "code",
          "title": "tozalangan.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\ndemo=\"/tmp/noldan/shellcheck42\"\nmkdir -p \"$demo\"\ntouch \"$demo/a.txt\" \"$demo/b.txt\"\n\nfayl=\"${1:-$demo/a.txt}\"\nif [ -f \"$fayl\" ]; then\n  echo \"Bor: $fayl\"\nfi\n\nfor nom in \"$demo\"/*.txt; do\n  echo \"$nom\"\ndone",
          "output": "Bor: /tmp/noldan/shellcheck42/a.txt\n/tmp/noldan/shellcheck42/a.txt\n/tmp/noldan/shellcheck42/b.txt"
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "shellcheck -f gcc tozalangan.sh && echo \"ShellCheck: toza\"",
          "output": "ShellCheck: toza"
        },
        {
          "type": "table",
          "head": [
            "Kod",
            "Ma'nosi"
          ],
          "rows": [
            [
              "<code>SC2086</code>",
              "O'zgaruvchini qo'shtirnoqqa oling"
            ],
            [
              "<code>SC2045</code>",
              "ls chiqishi bo'yicha tsikl mo'rt"
            ],
            [
              "<code>SC2164</code>",
              "cd xatosini tekshiring"
            ],
            [
              "<code>SC2155</code>",
              "E'lon va buyruqni alohida yozing"
            ],
            [
              "<code>SC1090</code>",
              "Dinamik source faylini tekshirib chaqiring"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tahlilni CI ga qo'shing",
          "html": "<code>shellcheck -x skript.sh</code> sourced fayllarni ham tekshiradi va <code>shellcheck</code> o'rnatilgan bo'lishi kerak. <code>-S warning</code> faqat jiddiyroq darajani ko'rsatadi. CI'da <code>shellcheck -f gcc *.sh</code> ishlatib, xato bo'lsa build ni to'xtatish mumkin. Ba'zi ogohlantirishlar ataylab qoldirilsa, ularni sababi bilan izohlab, <code># shellcheck disable=SC2086</code> bilan boshqaring — sababsiz o'chirish keyingi xatolarni yashiradi."
        }
      ],
      "quiz": [
        {
          "q": "SC2086 odatda nimani bildiradi?",
          "options": [
            "O'zgaruvchini qo'shtirnoqqa olish kerak",
            "Shebang yo'q",
            "Tsikl cheksiz",
            "Fayl topilmadi"
          ],
          "answer": 0,
          "explain": "SC2086 globbing va so'z bo'linishidan saqlanish uchun o'zgaruvchini qo'shtirnoqqa olishni tavsiya qiladi."
        },
        {
          "q": "ShellCheck skriptni bajaradimi?",
          "options": [
            "Yo'q, faqat statik tahlil qiladi",
            "Faqat root sifatida bajaradi",
            "Faqat Windows'da bajaradi",
            "Ha, har doim bajaradi"
          ],
          "answer": 0,
          "explain": "ShellCheck kodni o'qib tahlil qiladi, lekin skriptni ishga tushirmaydi."
        },
        {
          "q": "SC2045 qaysi odatni ogohlantiradi?",
          "options": [
            "Shebang yozishni",
            "Funksiya e'lon qilishni",
            "ls chiqishi bo'yicha tsikl yozishni",
            "Faylni o'chirishni"
          ],
          "answer": 2,
          "explain": "ls chiqishini tsiklda ishlatish fayl nomlaridagi bo'shliq va yangi qatorlarda buziladi; glob yoki find ishlatilishi kerak."
        }
      ]
    },
    {
      "id": 43,
      "title": "Bash testlash: mini test ramkasi",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Test skriptga ishonch beradi. Kichik loyihada ham oddiy <code>tekshir</code> funksiyasi yetarli: kutilgan va olingan qiymatni taqqoslaydi, natijani chiqaradi, xatolar sonini yig'adi. Muhim funksiyalar uchun chegaraviy holatlarni ham sinang."
        },
        {
          "type": "code",
          "title": "test.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nqosh() { echo $(($1 + $2)); }\n\ntekshir() {\n  local nom=\"$1\" kutilgan=\"$2\" olindi=\"$3\"\n  if [[ $olindi == \"$kutilgan\" ]]; then\n    echo \"OK $nom\"\n  else\n    echo \"FAIL $nom: kutilgan=$kutilgan olindi=$olindi\" >&2\n    return 1\n  fi\n}\n\ntekshir \"2+3\" 5 \"$(qosh 2 3)\"\ntekshir \"10+5\" 15 \"$(qosh 10 5)\"\necho \"Barcha testlar o'tdi\"",
          "output": "OK 2+3\nOK 10+5\nBarcha testlar o'tdi"
        },
        {
          "type": "code",
          "title": "xato.sh",
          "code": "#!/usr/bin/env bash\nset -uo pipefail\n\nxatolar=0\nqosh() { echo $(($1 + $2)); }\n\ntekshir() {\n  local nom=\"$1\" kutilgan=\"$2\" olindi=\"$3\"\n  if [[ $olindi == \"$kutilgan\" ]]; then\n    echo \"OK $nom\"\n  else\n    echo \"FAIL $nom: kutilgan=$kutilgan olindi=$olindi\" >&2\n    xatolar=$((xatolar + 1))\n  fi\n}\n\ntekshir \"2+3\" 5 \"$(qosh 2 3)\"\ntekshir \"2+2\" 5 \"$(qosh 2 2)\"\n\nif (( xatolar > 0 )); then\n  echo \"$xatolar ta test muvaffaqiyatsiz\" >&2\n  exit 1\nfi\necho \"Barcha testlar o'tdi\"",
          "output": "OK 2+3\nFAIL 2+2: kutilgan=5 olindi=4\n1 ta test muvaffaqiyatsiz"
        },
        {
          "type": "table",
          "head": [
            "Test turi",
            "Misol"
          ],
          "rows": [
            [
              "Oddiy holat",
              "2 + 3 = 5"
            ],
            [
              "Chegara",
              "bo'sh fayl, 0 qator"
            ],
            [
              "Xato",
              "mavjud bo'lmagan fayl"
            ],
            [
              "Chiqish kodi",
              "noto'g'ri argumentda 64"
            ],
            [
              "Format",
              "JSON maydonlari va tartibi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "set -e testlarni to'xtatib qo'ymasin",
          "html": "Test runner ichida <code>set -e</code> bo'lsa, birinchi muvaffaqiyatsiz test butun jarayonni to'xtatadi va qolgan natijalarni ko'rmaysiz. Shuning uchun yuqoridagidek xatolar sonini yig'ib, oxirida <code>exit 1</code> qiling. Va'da qilingan vosita sifatida <code>bats-core</code> yanada boy imkoniyat beradi, lekin kichik skriptlar uchun o'z harness'ingiz yetarli. Vaqtinchalik fayllarni <code>mktemp -d</code> va <code>trap ... EXIT</code> bilan boshqaring."
        }
      ],
      "quiz": [
        {
          "q": "Muvaffaqiyatsiz testdan keyin test runner qanday holat kodi bilan tugashi kerak?",
          "options": [
            "64",
            "Hech qanday kod kerak emas",
            "0",
            "1"
          ],
          "answer": 3,
          "explain": "Muvaffaqiyatsiz test bor bo'lsa nolga teng bo'lmagan kod (odatda 1) qaytarilishi kerak, aks holda CI xatoni sezmaydi."
        },
        {
          "q": "Nima uchun testlarda vaqtinchalik papka ishlatiladi?",
          "options": [
            "Faylni doimiy saqlash uchun",
            "Faqat root huquqi uchun",
            "Testlarni tezlashtirish uchun",
            "Haqiqiy fayllarni ifloslantirmaslik va izolyatsiya uchun"
          ],
          "answer": 3,
          "explain": "mktemp -d izolyatsiyalangan papka beradi; test tugagach trap bilan tozalash mumkin."
        },
        {
          "q": "Test runner ichida set -e ning asosiy xavfi nima?",
          "options": [
            "Faqat stdout ni yopadi",
            "Fayllarni o'qiydi",
            "Barcha testlarni o'chiradi",
            "Birinchi xatoda to'xtab, qolgan natijalarni ko'rsatmaydi"
          ],
          "answer": 3,
          "explain": "set -e muvaffaqiyatsiz testdan keyin runner'ni ham to'xtatadi; xatolarni yig'ib, oxirida qaror qabul qilish yaxshiroq."
        }
      ]
    },
    {
      "id": 44,
      "title": "Loyiha: log tahlilchisi — talablar va CLI",
      "minutes": 16,
      "blocks": [
        {
          "type": "p",
          "html": "Endi kurs bo'ylab o'rganganlarimizni ko'p darsli loyihaga yig'amiz: <code>logstat.sh</code> veb-server access logini tahlil qiladi. U qatorlar, unikal IP, 200 javoblar, baytlar va eng faol IP ni hisoblaydi; <code>--json</code> bilan mashina o'qiydigan natija beradi. Bu darsda CLI va xavfsiz kirish qismini yaratamiz."
        },
        {
          "type": "ul",
          "items": [
            "Bitta majburiy argument: mavjud log fayli.",
            "<code>--json</code> ixtiyoriy bayrog'i va <code>--help</code>.",
            "Xato faylda 66, noto'g'ri argumentda 64 kodi.",
            "Keyingi darslarda tahlil, hisobot, test va cron qo'shiladi."
          ]
        },
        {
          "type": "code",
          "title": "logstat.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nusage() {\n  cat <<'EOF'\nFoydalanish: logstat.sh [--json] LOG_FAYL\n  --json   natijani JSON shaklida chiqaradi\nEOF\n}\n\njson=0\nwhile (( $# > 0 )); do\n  case \"$1\" in\n    --json) json=1; shift ;;\n    -h|--help) usage; exit 0 ;;\n    --) shift; break ;;\n    -*) echo \"Noma'lum variant: $1\" >&2; usage >&2; exit 64 ;;\n    *) break ;;\n  esac\ndone\n\n(( $# == 1 )) || { usage >&2; exit 64; }\n\nlog=\"$1\"\n[[ -f $log ]] || { echo \"Fayl topilmadi: $log\" >&2; exit 66; }\n\necho \"Tahlilga tayyor: $log (json=$json)\"",
          "output": "Foydalanish: logstat.sh [--json] LOG_FAYL\n  --json   natijani JSON shaklida chiqaradi"
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "demo=\"/tmp/noldan/loyiha44\"\nrm -rf \"$demo\"\nmkdir -p \"$demo\"\ncat > \"$demo/access.log\" <<'LOG'\n203.0.113.5 - - [23/Oct/2026:10:00:00 +0000] \"GET /index.html HTTP/1.1\" 200 512\n198.51.100.7 - - [23/Oct/2026:10:01:00 +0000] \"GET /api/users HTTP/1.1\" 200 1024\n203.0.113.5 - - [23/Oct/2026:10:02:00 +0000] \"POST /api/login HTTP/1.1\" 401 64\n192.0.2.44 - - [23/Oct/2026:10:03:00 +0000] \"GET /missing HTTP/1.1\" 404 128\n198.51.100.7 - - [23/Oct/2026:10:04:00 +0000] \"GET /api/orders HTTP/1.1\" 500 256\n203.0.113.5 - - [23/Oct/2026:10:05:00 +0000] \"GET /style.css HTTP/1.1\" 200 2048\nxato qator\nLOG\nbash logstat.sh --help\nbash logstat.sh --json \"$demo/access.log\"",
          "output": "Foydalanish: logstat.sh [--json] LOG_FAYL\n  --json   natijani JSON shaklida chiqaradi\nTahlilga tayyor: /tmp/noldan/loyiha44/access.log (json=1)"
        },
        {
          "type": "table",
          "head": [
            "Dars",
            "Loyiha bosqichi"
          ],
          "rows": [
            [
              "44",
              "CLI, fayl tekshiruvi, fixture"
            ],
            [
              "45",
              "Maydonlarni tahlil qilish"
            ],
            [
              "46",
              "Hisobot va JSON"
            ],
            [
              "47",
              "Testlar"
            ],
            [
              "48",
              "Cron va kunlik ish"
            ],
            [
              "49",
              "Yakuniy yig'ish va reliz"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Fixture — testlarning poydevori",
          "html": "Yuqoridagi log fayli ataylab kichik va aralash: 200, 401, 404, 500 va bitta buzuq qator bor. Har bir keyingi dars shu <code>/tmp/noldan/loyiha44/access.log</code> dan foydalanadi. Haqiqiy log formati farq qilishi mumkin; parser yozishdan oldin namunalarni ko'ring va maydonlar sonini tekshirishni unutmang."
        }
      ],
      "quiz": [
        {
          "q": "logstat.sh noto'g'ri argumentlar sonida qanday kod bilan tugaydi?",
          "options": [
            "0",
            "1",
            "64",
            "127"
          ],
          "answer": 2,
          "explain": "Buyruq satri xatosi uchun 64 (EX_USAGE) kodi ishlatiladi; fayl yo'qligi esa 66 bo'lishi mumkin."
        },
        {
          "q": "--json bayrog'i loyihada nima uchun kerak?",
          "options": [
            "Logni o'chirish uchun",
            "Faqat yordam chiqarish uchun",
            "Faylni siqish uchun",
            "Natijani mashina o'qiydigan JSON shaklida berish uchun"
          ],
          "answer": 3,
          "explain": "JSON boshqa skript yoki jq bilan ishlov berish uchun qulay format beradi."
        },
        {
          "q": "Mavjud bo'lmagan log fayli uchun qaysi kod mos?",
          "options": [
            "127",
            "64",
            "65",
            "66"
          ],
          "answer": 3,
          "explain": "sysexits'da 66 EX_NOINPUT — kerakli kiritish fayli mavjud emasligini bildiradi."
        }
      ]
    },
    {
      "id": 45,
      "title": "Loyiha: log maydonlarini tahlil qilish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Access log qatorini bo'sh joy bo'yicha ajratsak, IP <code>$1</code>, so'rov yo'li <code>$7</code>, HTTP holat <code>$9</code>, javob hajmi <code>$10</code> bo'ladi. Bu format tirnoq ichida bo'sh joy bo'lishi mumkinligini hisobga olmaydi, shuning uchun avval maydonlar sonini tekshirib, buzuq qatorlarni ajratamiz."
        },
        {
          "type": "code",
          "title": "stat.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nlog=\"/tmp/noldan/loyiha44/access.log\"\n[[ -f $log ]] || { echo \"Fixture topilmadi: $log\" >&2; exit 1; }\n\njami=$(wc -l < \"$log\")\nip=$(awk 'NF == 10 { print $1 }' \"$log\" | sort -u | wc -l)\nok=$(awk '$9 == 200 { n += 1 } END { print n + 0 }' \"$log\")\n\necho \"Qatorlar: $jami\"\necho \"Unikal IP: $ip\"\necho \"200 javob: $ok\"",
          "output": "Qatorlar: 7\nUnikal IP: 3\n200 javob: 3"
        },
        {
          "type": "table",
          "head": [
            "Maydon",
            "Mazmuni"
          ],
          "rows": [
            [
              "<code>$1</code>",
              "Mijoz IP manzili"
            ],
            [
              "<code>$4</code>",
              "Sana va vaqt"
            ],
            [
              "<code>$7</code>",
              "So'ralgan yo'l"
            ],
            [
              "<code>$9</code>",
              "HTTP holat kodi"
            ],
            [
              "<code>$10</code>",
              "Javob hajmi (bayt)"
            ]
          ]
        },
        {
          "type": "code",
          "title": "tekshir.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nlog=\"/tmp/noldan/loyiha44/access.log\"\n\nawk 'NF != 10 { print \"Yaroqsiz qator: \" NR }' \"$log\"\necho \"---\"\nawk '$9 ~ /^[45][0-9][0-9]$/ { print $1, $9, $7 }' \"$log\" | sort",
          "output": "Yaroqsiz qator: 7\n---\n192.0.2.44 404 /missing\n198.51.100.7 500 /api/orders\n203.0.113.5 401 /api/login"
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Formatga bog'lanmang",
          "html": "Nginx va Apache log formatlari sozlanadi; ba'zi maydonlar yo'q yoki tartibi boshqacha bo'lishi mumkin. Ishlab chiqarishda log formatini hujjatlashtiring va parserda <code>NF</code> ni tekshiring. Agar yo'lda bo'sh joy bo'lsa, oddiy <code>awk</code> maydonlari siljiydi; bunday holatda muntazam ifoda yoki JSON log ishlatish yaxshiroq. Buzuq qatorlarni jimgina tashlamang — ular sonini hisobotga qo'shing."
        }
      ],
      "quiz": [
        {
          "q": "Nima uchun tahlil oldidan NF == 10 tekshiriladi?",
          "options": [
            "Faylni siqish uchun",
            "Faylni tezlashtirish uchun",
            "Buzuq yoki boshqa formatdagi qatorlarni ajratish uchun",
            "IP ni o'zgartirish uchun"
          ],
          "answer": 2,
          "explain": "Standart log qatorida 10 maydon bor; boshqa sonli qatorlar formatga mos emas va noto'g'ri statistika berishi mumkin."
        },
        {
          "q": "Standart access log qatorida HTTP holat kodi qaysi maydonda?",
          "options": [
            "$9",
            "$10",
            "$1",
            "$7"
          ],
          "answer": 0,
          "explain": "Tirnoqli so'rov uchta maydon sifatida ajralganda holat kodi $9 ga tushadi."
        },
        {
          "q": "Unikal IP lar sonini qaysi quvur beradi?",
          "options": [
            "awk '{print $9}' log | wc -l",
            "cut -d' ' -f10 log | uniq",
            "grep 200 log | wc -l",
            "awk '{print $1}' log | sort -u | wc -l"
          ],
          "answer": 3,
          "explain": "IP maydonini ajratib, sort -u bilan takrorlarni olib tashlab, qatorlar sonini sanash unikal IP sonini beradi."
        }
      ]
    },
    {
      "id": 46,
      "title": "Loyiha: hisobot va JSON chiqarish",
      "minutes": 17,
      "blocks": [
        {
          "type": "p",
          "html": "Endi IP bo'yicha so'rovlar va baytlar yig'indisini hisoblaymiz. <code>awk</code> massivlari kalit bo'yicha yig'ish uchun qulay. Hisobotni JSON ko'rinishida berishdan oldin matnli jadvalni ko'rish foydali: raqamlar to'g'ri chiqayotganiga ishonch hosil qilasiz."
        },
        {
          "type": "code",
          "title": "top_ip.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nlog=\"/tmp/noldan/loyiha44/access.log\"\nawk 'NF == 10 { son[$1] += 1; bayt[$1] += $10 }\nEND { for (ip in son) printf \"%s %d %d\\n\", ip, son[ip], bayt[ip] }' \"$log\" \\\n  | sort -k2,2nr -k1,1",
          "output": "203.0.113.5 3 2624\n198.51.100.7 2 1280\n192.0.2.44 1 128"
        },
        {
          "type": "code",
          "title": "json.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nlog=\"/tmp/noldan/loyiha44/access.log\"\nreport=\"/tmp/noldan/loyiha46.json\"\n\njami=$(wc -l < \"$log\")\nbayt=$(awk 'NF == 10 { s += $10 } END { print s + 0 }' \"$log\")\ntop=$(awk 'NF == 10 { son[$1] += 1 }\nEND { eng=0; for (ip in son) if (son[ip] > eng) { eng=son[ip]; eng_ip=ip } print eng_ip }' \"$log\")\n\nprintf '{\"qatorlar\":%d,\"bayt\":%d,\"top_ip\":\"%s\"}\\n' \"$jami\" \"$bayt\" \"$top\" > \"$report\"\njq . \"$report\"",
          "output": "{\n  \"qatorlar\": 7,\n  \"bayt\": 4032,\n  \"top_ip\": \"203.0.113.5\"\n}"
        },
        {
          "type": "table",
          "head": [
            "Ko'rsatkich",
            "Qiymat"
          ],
          "rows": [
            [
              "Qatorlar",
              "7"
            ],
            [
              "Jami bayt",
              "4032"
            ],
            [
              "200 javob",
              "3"
            ],
            [
              "Eng faol IP",
              "203.0.113.5 (3 so'rov)"
            ],
            [
              "4xx/5xx",
              "3"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "JSON ni qo'lda yasamang",
          "html": "Yuqoridagi <code>printf</code> faqat ishonchli, oddiy qiymatlar uchun mos. IP yoki boshqa matnda qo'shtirnoq, teskari slash bo'lsa JSON buziladi. Bunday holatda <code>jq -n --arg</code> bilan xavfsiz JSON yasang yoki satrlarni JSON kutubxonasi orqali chiqaring. Hisobotni yozgandan keyin <code>jq -e . report.json &gt;/dev/null</code> bilan haqiqiy JSON ekanini tekshiring."
        }
      ],
      "quiz": [
        {
          "q": "awk massivida son[$1] += 1 yozuvi nima qiladi?",
          "options": [
            "IP bo'yicha so'rovlar sonini yig'adi",
            "Faylni o'chiradi",
            "Qatorlarni saralaydi",
            "Baytlarni kamaytiradi"
          ],
          "answer": 0,
          "explain": "Har bir IP kaliti uchun qiymat 1 ga oshiriladi, natijada har bir IP ning uchrash soni hosil bo'ladi."
        },
        {
          "q": "Nima uchun JSON ni printf bilan yasash xavfli bo'lishi mumkin?",
          "options": [
            "printf JSONni o'qimaydi",
            "Matndagi qo'shtirnoq yoki slash JSONni buzishi mumkin",
            "printf faqat son chiqaradi",
            "JSON faqat Windows'da ishlaydi"
          ],
          "answer": 1,
          "explain": "JSON satrlarida maxsus belgilarni ekranlash kerak; buni jq kabi vosita ishonchli bajaradi."
        },
        {
          "q": "jq . report.json buyrug'i nima qiladi?",
          "options": [
            "Faylni siqadi",
            "Faylni o'chiradi",
            "JSONni tekshirib, chiroyli formatda chiqaradi",
            "Faqat qatorlar sonini beradi"
          ],
          "answer": 2,
          "explain": "jq . JSONni tahlil qiladi va standart chiqishga formatlab beradi; sintaksis xatosida nolga teng bo'lmagan kod qaytaradi."
        }
      ]
    },
    {
      "id": 47,
      "title": "Loyiha: testlar bilan himoyalash",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Loyihada hisob-kitoblar o'zgarganda eski xatti-harakat buzilmasligi kerak. Fixture log uchun kutilgan qiymatlarni testga yozamiz: 7 qator, 3 unikal IP, 3 ta 200 javob. Testlar mustaqil va takroriy ishga tushganda ham bir xil natija berishi kerak."
        },
        {
          "type": "code",
          "title": "test.sh",
          "code": "#!/usr/bin/env bash\nset -uo pipefail\n\nlog=\"/tmp/noldan/loyiha44/access.log\"\nxatolar=0\n\ntekshir() {\n  local nom=\"$1\" kutilgan=\"$2\" olindi=\"$3\"\n  if [[ $olindi == \"$kutilgan\" ]]; then\n    echo \"OK $nom\"\n  else\n    echo \"FAIL $nom: kutilgan=$kutilgan olindi=$olindi\" >&2\n    xatolar=$((xatolar + 1))\n  fi\n}\n\ntekshir \"qatorlar\" 7 \"$(wc -l < \"$log\")\"\ntekshir \"unikal IP\" 3 \"$(awk 'NF == 10 { print $1 }' \"$log\" | sort -u | wc -l)\"\ntekshir \"200 javob\" 3 \"$(awk '$9 == 200 { n += 1 } END { print n + 0 }' \"$log\")\"\n\nif (( xatolar > 0 )); then\n  echo \"$xatolar ta test muvaffaqiyatsiz\" >&2\n  exit 1\nfi\necho \"Barcha testlar o'tdi\"",
          "output": "OK qatorlar\nOK unikal IP\nOK 200 javob\nBarcha testlar o'tdi"
        },
        {
          "type": "code",
          "title": "xato.sh",
          "code": "#!/usr/bin/env bash\nset -uo pipefail\n\nlog=\"/tmp/noldan/loyiha44/access.log\"\nxatolar=0\n\ntekshir() {\n  local nom=\"$1\" kutilgan=\"$2\" olindi=\"$3\"\n  if [[ $olindi == \"$kutilgan\" ]]; then\n    echo \"OK $nom\"\n  else\n    echo \"FAIL $nom: kutilgan=$kutilgan olindi=$olindi\" >&2\n    xatolar=$((xatolar + 1))\n  fi\n}\n\ntekshir \"ataylab xato\" 99 \"$(wc -l < \"$log\")\"\n\nif (( xatolar > 0 )); then\n  echo \"$xatolar ta test muvaffaqiyatsiz\" >&2\n  exit 1\nfi\necho \"Barcha testlar o'tdi\"",
          "output": "FAIL ataylab xato: kutilgan=99 olindi=7\n1 ta test muvaffaqiyatsiz"
        },
        {
          "type": "table",
          "head": [
            "Test",
            "Kutilgan"
          ],
          "rows": [
            [
              "Qatorlar soni",
              "7"
            ],
            [
              "Unikal IP",
              "3"
            ],
            [
              "200 javob",
              "3"
            ],
            [
              "Jami bayt",
              "4032"
            ],
            [
              "Fayl yo'qligi",
              "66 kod"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Testlarni CI ga ulang",
          "html": "Testlarni <code>test.sh</code> deb saqlang, bajarish huquqini bering va CI'da <code>bash -n</code>, <code>shellcheck</code> hamda <code>./test.sh</code> ni ketma-ket ishlating. Testlar fixture yaratishga bog'liq bo'lmasin: fixture'ni test ichida yarating yoki versiya nazoratiga qo'shing. Har bir yangi xato uchun avval uni takrorlaydigan test yozing, keyin tuzatish kiriting."
        }
      ],
      "quiz": [
        {
          "q": "Testda kutilgan 99, olingan 7 bo'lsa qanday natija chiqadi?",
          "options": [
            "OK",
            "FAIL va xatolar soni oshadi",
            "Test avtomatik o'chadi",
            "Fayl o'chiriladi"
          ],
          "answer": 1,
          "explain": "Taqqoslash mos kelmaydi, FAIL yoziladi va xatolar hisoblagichi oshiriladi; oxirida nolga teng bo'lmagan kod qaytadi."
        },
        {
          "q": "Nima uchun testlar fixture logga tayanishi ehtiyotkorlik talab qiladi?",
          "options": [
            "Fixture har doim o'zgaradi",
            "Agar fixture yo'q bo'lsa test ishonchsiz bo'ladi",
            "Fixture testni sekinlashtiradi",
            "Fixture faqat JSON uchun"
          ],
          "answer": 1,
          "explain": "Test muhiti barqaror bo'lishi kerak; fixture bo'lmasa natija tasodifiy bo'ladi yoki test butunlay ishlamaydi."
        },
        {
          "q": "CI ketma-ketligida qaysi tekshiruvlar mos?",
          "options": [
            "Faqat cron",
            "Faqat test.sh",
            "bash -n, shellcheck va test.sh",
            "Faqat jq"
          ],
          "answer": 2,
          "explain": "Sintaksis, statik tahlil va funksional testlar birgalikda xatoni erta ushlaydi."
        }
      ]
    },
    {
      "id": 48,
      "title": "Loyiha: cron, lock va kunlik hisobot",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Tahlilchi har kuni avtomatik ishlashi uchun uni cron vazifasiga ulaymiz. Skript sanani argumentdan oladi (demo uchun qat'iy qiymat), hisobotni sana nomli faylga yozadi va log qoldiradi. Bir vaqtda ikki nusxa ishga tushmasligi uchun <code>flock</code> ishlatiladi."
        },
        {
          "type": "code",
          "title": "kunlik.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nlog=\"/tmp/noldan/loyiha44/access.log\"\nsana=\"${1:-2026-10-23}\"\npapka=\"/tmp/noldan/loyiha48/Hisobotlar\"\nmkdir -p \"$papka\"\nhisobot=\"$papka/$sana.json\"\n\njami=$(wc -l < \"$log\")\nbayt=$(awk 'NF == 10 { s += $10 } END { print s + 0 }' \"$log\")\ntop=$(awk 'NF == 10 { son[$1] += 1 }\nEND { eng=0; for (ip in son) if (son[ip] > eng) { eng=son[ip]; eng_ip=ip } print eng_ip }' \"$log\")\n\nprintf '{\"sana\":\"%s\",\"qatorlar\":%d,\"bayt\":%d,\"top_ip\":\"%s\"}\\n' \"$sana\" \"$jami\" \"$bayt\" \"$top\" > \"$hisobot\"\necho \"Hisobot: $hisobot\"\ncat \"$hisobot\"",
          "output": "Hisobot: /tmp/noldan/loyiha48/Hisobotlar/2026-10-23.json\n{\"sana\":\"2026-10-23\",\"qatorlar\":7,\"bayt\":4032,\"top_ip\":\"203.0.113.5\"}"
        },
        {
          "type": "code",
          "title": "crontab",
          "code": "cat <<'CRON'\n30 2 * * * /usr/local/bin/kunlik.sh /usr/local/share/access.log >> /var/log/logstat.log 2>&1\nCRON",
          "output": "30 2 * * * /usr/local/bin/kunlik.sh /usr/local/share/access.log >> /var/log/logstat.log 2>&1"
        },
        {
          "type": "table",
          "head": [
            "Element",
            "Vazifasi"
          ],
          "rows": [
            [
              "<code>30 2 * * *</code>",
              "Har kuni 02:30"
            ],
            [
              "<code>&gt;&gt; log 2&gt;&amp;1</code>",
              "Chiqish va xatoni logga yozadi"
            ],
            [
              "<code>flock -n 9</code>",
              "Ikkinchi nusxani ishga tushirmaydi"
            ],
            [
              "<code>date -u +%F</code>",
              "Kunlik sana (ishlab chiqarishda)"
            ],
            [
              "<code>logrotate</code>",
              "Eski loglarni aylantiradi"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "warning",
          "title": "Ishlab chiqarishda qattiq kod yo'q",
          "html": "Namunada sana <code>2026-10-23</code> qilib qotirilgan, shuning uchun natija har doim bir xil. Ishlab chiqarishda <code>sana=$(date -u +%F)</code> yoki argumentdan foydalaning. <code>flock -n 9 || exit 75</code> bilan takroriy ishni to'xtating, cron satrida absolyut yo'l va log yo'naltirishini qo'shing. Vazifani avval qo'lda, keyin <code>crontab -e</code> orqali qo'shing; begona serverda jadvalni o'zgartirmang."
        }
      ],
      "quiz": [
        {
          "q": "flock -n 9 ning vazifasi nima?",
          "options": [
            "JSONni formatlash",
            "Sana o'zgartirish",
            "Faylni o'chirish",
            "Band lock bo'lsa kutmasdan chiqish"
          ],
          "answer": 3,
          "explain": "-n nonblocking: lock band bo'lsa darhol muvaffaqiyatsiz tugaydi, shuning uchun ikkinchi nusxa ishlamaydi."
        },
        {
          "q": "Nima uchun cron skriptida date -u ishlatiladi?",
          "options": [
            "Vaqt zonasidan qat'i nazar barqaror UTC sana uchun",
            "Faylni siqish uchun",
            "Faqat hafta kunini olish uchun",
            "Mahalliy vaqtni o'chirish uchun"
          ],
          "answer": 0,
          "explain": "Server va foydalanuvchi vaqt zonalari farq qilishi mumkin; UTC hisobot sanasini barqaror qiladi."
        },
        {
          "q": "Cron satrida 2>&1 nima qiladi?",
          "options": [
            "Faylni ikkiga bo'ladi",
            "Ikkita jarayon yaratadi",
            "Logni o'chiradi",
            "Xatoni standart chiqish joyiga, ya'ni log fayliga yuboradi"
          ],
          "answer": 3,
          "explain": "2>&1 stderr ni stdout ning joriy manziliga bog'laydi; >> log bilan ikkalasi ham logga tushadi."
        }
      ]
    },
    {
      "id": 49,
      "title": "Loyiha: yakuniy yig'ish va reliz",
      "minutes": 18,
      "blocks": [
        {
          "type": "p",
          "html": "Yakuniy darsda <code>logstat.sh</code> ning to'liq versiyasini yig'amiz: CLI, validatsiya, statistikalar, JSON va matn chiqishi bir faylda. Relizdan oldin sintaksis, ShellCheck va testlarni ishga tushiring; README'da foydalanish va misol natijani yozing."
        },
        {
          "type": "ul",
          "items": [
            "Fayl mavjudligi va argumentlar 44-darsdagidek tekshiriladi.",
            "Statistikalar awk bilan hisoblanadi, buzuq qatorlar e'tiborsiz qoldiriladi.",
            "<code>--json</code> mashina uchun, oddiy rejim inson uchun.",
            "Test fixture va kutilgan qiymatlar 47-darsda yozilgan."
          ]
        },
        {
          "type": "code",
          "title": "logstat.sh",
          "code": "#!/usr/bin/env bash\nset -euo pipefail\n\nusage() {\n  cat <<'EOF'\nFoydalanish: logstat.sh [--json] LOG_FAYL\n  --json   natijani JSON shaklida chiqaradi\nEOF\n}\n\njson=0\nwhile (( $# > 0 )); do\n  case \"$1\" in\n    --json) json=1; shift ;;\n    -h|--help) usage; exit 0 ;;\n    --) shift; break ;;\n    -*) echo \"Noma'lum variant: $1\" >&2; usage >&2; exit 64 ;;\n    *) break ;;\n  esac\ndone\n\n(( $# == 1 )) || { usage >&2; exit 64; }\n\nlog=\"$1\"\n[[ -f $log ]] || { echo \"Fayl topilmadi: $log\" >&2; exit 66; }\n\njami=$(wc -l < \"$log\")\nip=$(awk 'NF == 10 { print $1 }' \"$log\" | sort -u | wc -l)\nok=$(awk '$9 == 200 { n += 1 } END { print n + 0 }' \"$log\")\nbayt=$(awk 'NF == 10 { s += $10 } END { print s + 0 }' \"$log\")\ntop=$(awk 'NF == 10 { son[$1] += 1 }\nEND { eng=0; for (ip in son) if (son[ip] > eng) { eng=son[ip]; eng_ip=ip } print eng_ip }' \"$log\")\n\nif (( json )); then\n  printf '{\"qatorlar\":%d,\"unikal_ip\":%d,\"ok\":%d,\"bayt\":%d,\"top_ip\":\"%s\"}\\n' \"$jami\" \"$ip\" \"$ok\" \"$bayt\" \"$top\"\nelse\n  printf 'Qatorlar: %d\\nUnikal IP: %d\\n200 javob: %d\\nBayt: %d\\nTop IP: %s\\n' \"$jami\" \"$ip\" \"$ok\" \"$bayt\" \"$top\"\nfi",
          "output": "Foydalanish: logstat.sh [--json] LOG_FAYL\n  --json   natijani JSON shaklida chiqaradi"
        },
        {
          "type": "code",
          "title": "terminal",
          "code": "log=\"/tmp/noldan/loyiha44/access.log\"\nbash logstat.sh \"$log\"\necho \"---\"\nbash logstat.sh --json \"$log\" | jq -r '\"Qatorlar: \\(.qatorlar), top: \\(.top_ip)\"'",
          "output": "Qatorlar: 7\nUnikal IP: 3\n200 javob: 3\nBayt: 4032\nTop IP: 203.0.113.5\n---\nQatorlar: 7, top: 203.0.113.5"
        },
        {
          "type": "table",
          "head": [
            "Reliz tekshiruvi",
            "Buyruq"
          ],
          "rows": [
            [
              "Sintaksis",
              "<code>bash -n logstat.sh</code>"
            ],
            [
              "Statik tahlil",
              "<code>shellcheck -f gcc logstat.sh</code>"
            ],
            [
              "Testlar",
              "<code>bash test.sh</code>"
            ],
            [
              "JSON tekshiruvi",
              "<code>jq -e . report.json</code>"
            ],
            [
              "Ruxsat",
              "<code>chmod +x logstat.sh</code>"
            ]
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Keyingi qadamlar",
          "html": "Loyihani yanada mustahkamlash uchun log formatini argument bilan bering, sana oralig'i filtri qo'shing, hisobotni CSV yoki HTML qilib chiqaring. Har bir o'zgarishdan oldin test yozing va <code>bash -n</code> bilan sintaksisni tekshiring. Kodni Git'ga qo'yganda parol, token va haqiqiy foydalanuvchi ma'lumotlarini qo'shmang. Endi sizda terminaldan ishonchli avtomatlashtirishgacha bo'lgan to'liq amaliy asos bor."
        }
      ],
      "quiz": [
        {
          "q": "Yakuniy logstat.sh standart rejimda qanday chiqish beradi?",
          "options": [
            "Hech qanday chiqish",
            "Faqat JSON",
            "O'qish uchun qatorlar ko'rinishidagi hisobot",
            "Faqat fayl nomi"
          ],
          "answer": 2,
          "explain": "JSON bo'lmaganda printf bilan qatorlar, unikal IP, 200 javob, bayt va top IP matn ko'rinishida chiqariladi."
        },
        {
          "q": "Relizdan oldin qaysi tekshiruvlar tavsiya etiladi?",
          "options": [
            "Faqat cron",
            "Faqat jq",
            "Faqat faylni o'chirish",
            "bash -n, shellcheck va testlar"
          ],
          "answer": 3,
          "explain": "Sintaksis, statik tahlil va testlar reliz sifatini ta'minlaydigan asosiy tekshiruvlardir."
        },
        {
          "q": "Buzuq log qatorlari statistikaga qanday ta'sir qilmasligi kerak?",
          "options": [
            "Ularni IP deb hisoblash",
            "NF == 10 sharti bilan ajratib tashlash",
            "Ularni o'chirish",
            "Faylni qayta yozish"
          ],
          "answer": 1,
          "explain": "NF == 10 filtri faqat kutilgan formatdagi qatorlarni hisobga oladi; buzuq qatorlar statistika va top IP ni buzmaydi."
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
          "html": "Bash kursining yakuniy imtihoni. 12 ta savol butun kursni qamrab oladi: kengaytirishlar, massivlar, argumentlar, quvurlar, fayl qidirish, JSON, cron, ssh, rsync, ishonchli skript va testlash. Har bir savolda bitta to'g'ri javob bor. O'tish chegarasi — 12 savoldan 9 tasi."
        },
        {
          "type": "ul",
          "items": [
            "<strong>12 ta savol</strong>, har biri 4 variantli.",
            "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
            "Imtihonni qayta topshirish mumkin; eng yaxshi natija saqlanadi.",
            "O'tgandan keyin sertifikatni ko'rish va PDF qilib saqlash mumkin."
          ]
        },
        {
          "type": "note",
          "variant": "tip",
          "title": "Tayyorgarlik",
          "html": "Amaliy loyiha darslarini (44–49) qayta ko'rib chiqing: <code>logstat.sh</code> ning CLI, <code>awk</code> tahlili, JSON chiqishi, testlari va cron vazifasi imtihonda qo'llanadi. Javob berishdan oldin savolni oxirigacha o'qing va kod namunalaridagi tirnoqlarga e'tibor bering."
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
        "q": "echo \"{a,b}\" buyrug'i qanday natija beradi?",
        "options": [
          "Sintaksis xatosi",
          "a b",
          "a,b",
          "{a,b}"
        ],
        "answer": 3,
        "explain": "Jingalak qavs kengaytirishi qo'shtirnoq ichida bajarilmaydi, shuning uchun matn o'zgarishsiz qoladi."
      },
      {
        "q": "a=(olma nok uzum) massivida unset 'a[1]' bajarildi. ${#a[@]} qanday qiymat beradi?",
        "options": [
          "1",
          "0",
          "2",
          "3"
        ],
        "answer": 2,
        "explain": "Bitta element o'chirilgach massivda 2 ta element qoladi; indekslar siyrak bo'lib qoladi."
      },
      {
        "q": "getopts bilan cli.sh -n fayl tahlil qilindi. Tsikl tugagach OPTIND odatda nechaga teng bo'ladi?",
        "options": [
          "0",
          "3",
          "2",
          "1"
        ],
        "answer": 2,
        "explain": "-n birinchi argument, fayl ikkinchi; getopts tugagach OPTIND keyingi argument indeksiga, ya'ni 2 ga ishora qiladi."
      },
      {
        "q": "set -o pipefail yoqilgan. false | true quvuri qanday holat kodi qaytaradi?",
        "options": [
          "1",
          "0",
          "2",
          "127"
        ],
        "answer": 0,
        "explain": "pipefail eng o'ngdagi nolga teng bo'lmagan kodni oladi; false 1 qaytargani uchun quvur 1 bo'ladi."
      },
      {
        "q": "find ... -exec wc -l {} + buyrug'i qanday ishlaydi?",
        "options": [
          "Natijani o'chiradi",
          "Har bir fayl uchun alohida wc chaqiradi",
          "Imkon qadar ko'p faylni bitta buyruqqa beradi",
          "Faqat papkalarni sanaydi"
        ],
        "answer": 2,
        "explain": "{} + shakli topilgan fayllarni imkon qadar guruhlab, bitta buyruq chaqiruviga beradi; {} \\; esa har biri uchun alohida ishlaydi."
      },
      {
        "q": "jq -c '.data' buyrug'i natijasini qanday chiqaradi?",
        "options": [
          "Chiroyli ko'p qatorli JSON",
          "Bitta qatorli ixcham JSON",
          "Qo'shtirnoqsiz matn",
          "Faqat kalitlarni"
        ],
        "answer": 1,
        "explain": "-c compact rejimi JSONni bitta qatorga ixchamlaydi; -r esa satr qo'shtirnoqlarini olib tashlaydi."
      },
      {
        "q": "cron'dagi @reboot qachon ishga tushadi?",
        "options": [
          "Har soatda",
          "Har yakshanba",
          "Har daqiqada",
          "Tizim yuklanganda bir marta"
        ],
        "answer": 3,
        "explain": "@reboot maxsus yozuv bo'lib, tizim yuklanganda (cron xizmati ishga tushganda) bajariladi."
      },
      {
        "q": "SSH config'da Host test, HostName 203.0.113.10, User aziza, Port 2222 berilgan. ssh test qayerga ulanadi?",
        "options": [
          "203.0.113.10:2222, foydalanuvchi aziza",
          "203.0.113.10:22, foydalanuvchi aziza",
          "203.0.113.10:2222, foydalanuvchi root",
          "localhost:2222, foydalanuvchi root"
        ],
        "answer": 0,
        "explain": "Host alias test; HostName manzilni, User aziza ni, Port 2222 ni belgilaydi, shuning uchun ulanish shu uchlik bilan bo'ladi."
      },
      {
        "q": "rsync -a varianti nimani ta'minlaydi?",
        "options": [
          "Faqat o'chirishni",
          "Rekursiya, ruxsat va vaqtlarni saqlashni",
          "Faqat siqishni",
          "Faqat matn fayllarini"
        ],
        "answer": 1,
        "explain": "Arxiv rejimi -a rekursiv nusxalaydi va ruxsat, egalik, vaqt kabi metama'lumotlarni saqlaydi."
      },
      {
        "q": "set -e yoqilgan skriptda if grep -q x fayl; then ... fi ichida grep topmasa nima bo'ladi?",
        "options": [
          "Fayl o'chiriladi",
          "Skript darhol to'xtaydi",
          "grep 127 qaytaradi",
          "if shoxi bajarilmaydi, skript davom etadi"
        ],
        "answer": 3,
        "explain": "if shartidagi buyruq xatosi errexitni ishga tushirmaydi; shart yolg'on bo'lib, keyingi qatorlar davom etadi."
      },
      {
        "q": "shellcheck -f gcc skript.sh nimani beradi?",
        "options": [
          "Natijani fayl:qator:ustun formatida beradi",
          "Skriptni bajaradi",
          "Faqat sintaksisni tuzatadi",
          "JSON yaratadi"
        ],
        "answer": 0,
        "explain": "-f gcc formatida har bir topilma fayl:qator:ustun: daraja: xabar ko'rinishida chiqadi."
      },
      {
        "q": "Testlardagi fixture nima?",
        "options": [
          "Tasodifiy fayl",
          "Test uchun oldindan tayyorlangan barqaror kirish ma'lumoti",
          "ShellCheck hisoboti",
          "Cron jadvali"
        ],
        "answer": 1,
        "explain": "Fixture — test har safar bir xil sharoitda ishlashi uchun tayyorlangan namuna ma'lumot yoki fayl."
      }
    ]
  }
};
})();
