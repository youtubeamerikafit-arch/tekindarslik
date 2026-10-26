/* Noldan — JavaScript course, 2-jild (50–100): 50 ta yangi dars + yakuniy imtihon */
(function () {
  "use strict";
  window.NOLDAN_COURSE_VOLUMES = window.NOLDAN_COURSE_VOLUMES || {};

  var lessons = [
  {
    "id": 50,
    "title": "Event loop anatomiyasi: stack, heap va navbatlar",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Birinchi kitobda event loopning umumiy tartibini ko'rgan edik. Endi uning <b>ichki anatomiyasini</b> ochamiz: <code>call stack</code>, <code>heap</code>, makrotask navbati, mikrotask navbati va brauzerning <b>render</b> bosqichi. Har bir aylanish (tick) oldingi ishlarni tugatadi, keyin navbatlarni bo'shatadi."
      },
      {
        "type": "h",
        "html": "Bitta tick qadam-baqadam"
      },
      {
        "type": "code",
        "title": "tick.js",
        "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve()\n  .then(() => {\n    console.log(\"C\");\n    return Promise.resolve(\"D\");\n  })\n  .then((x) => console.log(x));\nqueueMicrotask(() => console.log(\"E\"));\nconsole.log(\"F\");",
        "output": "A\nF\nC\nE\nD\nB"
      },
      {
        "type": "p",
        "html": "Sinxron kod <code>A</code> va <code>F</code> ni darhol bajaradi. So'ng mikrotask navbati bo'shatiladi: avval <code>C</code>, keyin <code>E</code>. <code>C</code> ichida yaratilgan yangi promise mikrotask navbatining <b>oxiriga</b> qo'shiladi, shuning uchun <code>D</code> faqat <code>E</code> dan keyin chiqadi. Shundan keyingina <code>setTimeout</code> makrotaski <code>B</code> bajariladi."
      },
      {
        "type": "code",
        "title": "click-tick.js",
        "code": "const tugma = document.querySelector(\"#tugma\");\ntugma.addEventListener(\"click\", () => {\n  console.log(\"1: handler\");\n  Promise.resolve().then(() => console.log(\"2: mikrotask\"));\n  setTimeout(() => console.log(\"3: taymer\"), 0);\n});\nconsole.log(\"0: skript\");\n// Foydalanuvchi tugmani bir marta bosganda konsol:",
        "output": "0: skript\n1: handler\n2: mikrotask\n3: taymer"
      },
      {
        "type": "table",
        "head": [
          "Bosqich",
          "Nima bajariladi",
          "Muhim jihat"
        ],
        "rows": [
          [
            "Call stack",
            "Sinxron funksiyalar, ifodalar",
            "Bitta tick tugaguncha bo'shamaydi"
          ],
          [
            "Mikrotask",
            "Promise.then, queueMicrotask, MutationObserver",
            "To'liq bo'shaguncha takrorlanadi"
          ],
          [
            "Render",
            "Style, layout, paint, composite",
            "Har tickda kafolatlanmagan"
          ],
          [
            "Makrotask",
            "Taymer, DOM hodisasi, I/O",
            "Bittasi bir tickda olinadi"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Render ham navbatda",
        "html": "Brauzer render qilishni <b>mikrotasklar tugagach</b> va odatda keyingi makrotaskdan oldin rejalashtiradi. Agar mikrotasklar zanjiri uzluksiz davom etsa, render och qoladi: sahifa «qotgan» ko'rinadi. Og'ir ishni <code>setTimeout</code> bilan bo'laklarga bo'ling yoki Web Worker'ga bering."
      }
    ],
    "quiz": [
      {
        "q": "Bitta event loop tickida makrotask bajarilgandan so'ng navbat qanday bo'shatiladi?",
        "options": [
          "Barcha mikrotasklar tugaguncha bajariladi",
          "Faqat bitta mikrotask bajariladi",
          "Darhol keyingi makrotask olinadi",
          "Render bosqichi o'tkazib yuboriladi"
        ],
        "answer": 0,
        "explain": "Makrotask tugagach mikrotask navbati to'liq bo'shatiladi; shu paytda qo'shilgan yangi mikrotasklar ham navbat oxirida bajariladi."
      },
      {
        "q": "Nega `C` ichida qaytarilgan promise natijasi `E` dan keyin chiqadi?",
        "options": [
          "setTimeout birinchi bo'lib ishga tushadi",
          "Promise'lar makrotask sifatida ishlaydi",
          "queueMicrotask ustuvorlikka ega emas",
          "Yangi promise callback mikrotask navbatining oxiriga qo'shiladi"
        ],
        "answer": 3,
        "explain": "then ichida yaratilgan yangi reaksiya navbatning oxiriga qo'shiladi, shuning uchun oldindan navbatda turgan E avval bajariladi."
      },
      {
        "q": "Qaysi holatda brauzer render qilish imkoniyatini yo'qotadi?",
        "options": [
          "Bitta setTimeout ishlatilganda",
          "Promise bir marta await qilinganda",
          "Mikrotasklar navbati uzluksiz to'lib turganda",
          "click hodisasi bir marta tinglanganda"
        ],
        "answer": 2,
        "explain": "Mikrotask navbati bo'shamasa, event loop render bosqichiga o'tolmaydi va sahifa muzlaydi."
      }
    ]
  },
  {
    "id": 51,
    "title": "Mikrotasklar amalda: promise zanjiri va starvatsiya",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Mikrotask — joriy sinxron kod tugagach, lekin keyingi makrotaskdan oldin bajariladigan kichik vazifa. <code>Promise.then</code>, <code>await</code> dan keyingi qism, <code>queueMicrotask</code> va <code>MutationObserver</code> shu navbatga tushadi. Bu navbat <b>FIFO</b>, ammo zanjir davomida o'sib borishi mumkin."
      },
      {
        "type": "code",
        "title": "zanjir.js",
        "code": "const natija = [];\nPromise.resolve(1)\n  .then((x) => { natija.push(x); return x + 1; })\n  .then((x) => { natija.push(x); return x * 2; })\n  .then((x) => natija.push(x));\nqueueMicrotask(() => natija.push(\"micro\"));\nsetTimeout(() => {\n  natija.push(\"timeout\");\n  console.log(natija.join(\" -> \"));\n}, 0);",
        "output": "1 -> micro -> 2 -> 4 -> timeout"
      },
      {
        "type": "p",
        "html": "Promise zanjirining har bir bo'g'ini oldingi natijaga bog'liq. Shu sababli <code>then</code> lar ketma-ket, bittadan navbatga qo'shiladi. <code>queueMicrotask</code> bilan qo'shilgan <code>micro</code> esa ikkinchi bo'g'indan oldin turadi. <code>setTimeout</code> esa butun mikrotask navbati bo'shagachgina ishlaydi."
      },
      {
        "type": "code",
        "title": "starvatsiya.js",
        "code": "let count = 0;\nfunction cheksiz() {\n  count += 1;\n  if (count < 4) queueMicrotask(cheksiz);\n  else console.log(\"mikrotask tugadi:\", count);\n}\nsetTimeout(() => console.log(\"timeout\"), 0);\nqueueMicrotask(cheksiz);",
        "output": "mikrotask tugadi: 4\ntimeout"
      },
      {
        "type": "table",
        "head": [
          "Manba",
          "Navbat",
          "Qachon bajariladi"
        ],
        "rows": [
          [
            "Promise.then / catch / finally",
            "Mikrotask",
            "Joriy stack bo'shagach"
          ],
          [
            "await dan keyingi kod",
            "Mikrotask",
            "Kutilayotgan promise hal bo'lgach"
          ],
          [
            "queueMicrotask",
            "Mikrotask",
            "Darhol navbat oxirida"
          ],
          [
            "setTimeout / setInterval",
            "Makrotask",
            "Mikrotasklar tugagach"
          ],
          [
            "DOM hodisalari",
            "Makrotask",
            "Hodisa qayta ishlanganda"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Starvatsiya — mikrotask ochligi",
        "html": "Mikrotask o'zini qayta navbatga qo'shsa, navbat hech qachon bo'shamaydi. Taymerlar, render va foydalanuvchi hodisalari cheksiz kutadi. Bu odatda noto'g'ri yozilgan rekurtsiyada uchraydi: <code>queueMicrotask</code> yoki <code>Promise.resolve().then</code> ni tsikl shartisiz qayta chaqirmang."
      }
    ],
    "quiz": [
      {
        "q": "Promise zanjirida `then` callback'i ichida qaytarilgan yangi promise qanday navbatga tushadi?",
        "options": [
          "Makrotask navbatining boshiga",
          "Joriy mikrotask navbatining oxiriga",
          "Call stackning eng tepasiga",
          "Hech qayerga, sinxron bajariladi"
        ],
        "answer": 1,
        "explain": "Yangi reaksiya mikrotask navbatining oxiriga qo'shiladi va shu tickda, keyingi makrotaskdan oldin bajariladi."
      },
      {
        "q": "`await` dan keyingi kod qaysi navbatda davom etadi?",
        "options": [
          "Mikrotask navbatida",
          "Alohida oqimda",
          "Makrotask navbatida",
          "Render bosqichida"
        ],
        "answer": 0,
        "explain": "await promise hal bo'lishini kutadi va davomi mikrotask sifatida navbatga qo'yiladi."
      },
      {
        "q": "Mikrotask o'zini cheksiz qayta navbatga qo'ysa nima bo'ladi?",
        "options": [
          "Brauzer avtomatik to'xtatadi",
          "Promise xatoga o'tadi",
          "Taymerlar va render kutib qoladi",
          "Makrotasklar ustuvor bajariladi"
        ],
        "answer": 2,
        "explain": "Mikrotask navbati bo'shamagani uchun event loop keyingi bosqichga o'tmaydi; taymer va render starvatsiyaga uchraydi."
      }
    ]
  },
  {
    "id": 52,
    "title": "Taymerlar aniqligi va requestAnimationFrame",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "<code>setTimeout(fn, 0)</code> «darhol» degani emas: brauzer minimal kechikishni qo'llaydi va taymer faqat joriy ish tugagach navbatga tushadi. Orqa fondagi tabda taymerlar yanada sekinlashadi. Animatsiya uchun <code>requestAnimationFrame</code> (rAF) ekran yangilanishiga moslashadi."
      },
      {
        "type": "code",
        "title": "taymer-tartib.js",
        "code": "console.log(\"start\");\nsetTimeout(() => console.log(\"100ms\"), 100);\nsetTimeout(() => console.log(\"0ms\"), 0);\nPromise.resolve().then(() => console.log(\"mikrotask\"));\nconsole.log(\"end\");",
        "output": "start\nend\nmikrotask\n0ms\n100ms"
      },
      {
        "type": "p",
        "html": "Sinxron <code>start</code> va <code>end</code> birinchi. Keyin mikrotask <code>mikrotask</code>, so'ng 0 ms lik taymer, oxirida 100 ms lik taymer bajariladi. Taymerlar orasidagi tartib ularning navbatga qo'shilish vaqtiga bog'liq, kechikish qiymati esa faqat minimal kutishdir."
      },
      {
        "type": "code",
        "title": "raf.js",
        "code": "let kadr = 0;\nfunction qadam(vaqt) {\n  kadr += 1;\n  if (kadr < 3) {\n    requestAnimationFrame(qadam);\n  } else {\n    console.log(\"3 kadr bajarildi\");\n    console.log(\"oxirgi vaqt:\", typeof vaqt);\n  }\n}\nrequestAnimationFrame(qadam);",
        "output": "3 kadr bajarildi\noxirgi vaqt: number"
      },
      {
        "type": "table",
        "head": [
          "Vosita",
          "Aniqlik",
          "Maqsad"
        ],
        "rows": [
          [
            "setTimeout",
            "Taxminiy, minimal kechikish bilan",
            "Kechiktirilgan bir martalik ish"
          ],
          [
            "setInterval",
            "Drift to'planadi",
            "Takroriy ish (ehtiyotkorlik bilan)"
          ],
          [
            "requestAnimationFrame",
            "Ekran yangilanishiga sinxron",
            "Animatsiya va render"
          ],
          [
            "queueMicrotask",
            "Juda tez, renderdan oldin",
            "Kichik reaktiv yangilanish"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Driftni to'g'rilash",
        "html": "Aniq interval kerak bo'lsa, <code>setInterval</code> o'rniga <code>setTimeout</code> bilan keyingi vaqtni hisoblang yoki <code>performance.now()</code> asosida rejalashtiring. Ko'rinmas tabda ishlaydigan og'ir taymerlarni to'xtating: <code>document.visibilityState</code> ni kuzating."
      }
    ],
    "quiz": [
      {
        "q": "Nega `setTimeout(fn, 0)` sinxron koddan keyin bajariladi?",
        "options": [
          "Brauzer uni bloklaydi",
          "setTimeout sinxron ishlaydi",
          "Taymer callback'i makrotask navbatiga qo'yiladi",
          "Callback call stack boshiga qo'shiladi"
        ],
        "answer": 2,
        "explain": "Taymer callback'i makrotask sifatida navbatga tushadi va joriy stack hamda mikrotasklar tugagach bajariladi."
      },
      {
        "q": "Animatsiya uchun qaysi vosita eng mos?",
        "options": [
          "setInterval(fn, 1)",
          "while tsikli",
          "queueMicrotask",
          "requestAnimationFrame"
        ],
        "answer": 3,
        "explain": "requestAnimationFrame brauzerning kadr ritmiga moslashadi va ko'rinmas tabda avtomatik to'xtaydi."
      },
      {
        "q": "setInterval ning asosiy kamchiligi nimada?",
        "options": [
          "Mikrotasklarni bloklaydi",
          "Faqat bir marta ishlaydi",
          "requestAnimationFrame bilan ishlamaydi",
          "Vaqt drifti to'planib boradi"
        ],
        "answer": 3,
        "explain": "Har bir callback bajarilish vaqti hisobga olinmagani uchun interval asta-sekin siljiydi; setTimeout bilan keyingi vaqtni qayta hisoblash yaxshiroq."
      }
    ]
  },
  {
    "id": 53,
    "title": "AbortController bilan bekor qilish",
    "minutes": 15,
    "blocks": [
      {
        "type": "p",
        "html": "Tarmoq so'rovi, taymer yoki obuna keraksiz bo'lib qolsa, uni <b>bekor qilish</b> kerak. <code>AbortController</code> bitta <code>AbortSignal</code> yaratadi va uni ko'p API'larga ulash mumkin: <code>fetch</code>, <code>addEventListener</code>, stream, IndexedDB so'rovlari. Bekor qilingan ish natijasi e'tiborsiz qoladi."
      },
      {
        "type": "code",
        "title": "sekin-ish.js",
        "code": "function sekinIsh(signal) {\n  return new Promise((resolve, reject) => {\n    const timer = setTimeout(() => resolve(\"tayyor\"), 500);\n    signal.addEventListener(\"abort\", () => {\n      clearTimeout(timer);\n      reject(new DOMException(\"Bekor qilindi\", \"AbortError\"));\n    });\n  });\n}\nconst controller = new AbortController();\nsekinIsh(controller.signal).catch((xato) => console.log(xato.name));\ncontroller.abort();\nconsole.log(\"sinxron oxiri\");",
        "output": "sinxron oxiri\nAbortError"
      },
      {
        "type": "p",
        "html": "<code>abort()</code> sinxron ravishda signalni <code>aborted</code> holatiga o'tkazadi va tinglovchilarni chaqiradi. Promise rad etilishi esa mikrotaskda sodir bo'ladi, shuning uchun <code>catch</code> satri keyinroq bajariladi. Tarmoq so'rovida <code>fetch</code> ham xuddi shu sabab bilan <code>AbortError</code> beradi."
      },
      {
        "type": "code",
        "title": "timeout.js",
        "code": "const signal = AbortSignal.timeout(1000);\nconsole.log(signal.aborted);\nsignal.addEventListener(\"abort\", () => {\n  console.log(\"sabab:\", signal.reason.name);\n});\nsetTimeout(() => console.log(\"1.1 soniyadan keyin\"), 1100);",
        "output": "false\nsabab: TimeoutError\n1.1 soniyadan keyin"
      },
      {
        "type": "ul",
        "items": [
          "Bitta controller dan bir nechta so'rovni bekor qilishda foydalaning: komponent yo'q qilinsa, hammasi to'xtaydi.",
          "<code>AbortSignal.any([a, b])</code> bir nechta signalni birlashtiradi.",
          "Har bir yangi qidiruv so'rovida eski controllerni bekor qiling — natijalar aralashib ketmaydi.",
          "<code>signal.reason</code> bekor qilish sababini saqlaydi: <code>TimeoutError</code>, <code>AbortError</code> yoki o'z sababingiz."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Bekor qilishni tekshiring",
        "html": "Uzoq tsikl yoki rekursiv ish ichida <code>signal.aborted</code> ni tekshirmasangiz, bekor qilish hech narsani to'xtatmaydi. Har bo'lakdan keyin tekshiring yoki <code>signal.throwIfAborted()</code> chaqiring."
      }
    ],
    "quiz": [
      {
        "q": "AbortController yaratilganda qaysi obyekt olinadi?",
        "options": [
          "Promise",
          "BroadcastChannel",
          "AbortSignal",
          "ReadableStream"
        ],
        "answer": 2,
        "explain": "Controller bilan bog'langan AbortSignal olinadi va uni fetch yoki hodisa tinglovchisiga uzatish mumkin."
      },
      {
        "q": "`controller.abort()` chaqirilganda `signal.aborted` qanday bo'ladi?",
        "options": [
          "false bo'lib qoladi",
          "Darhol true bo'ladi",
          "Keyingi tickda true bo'ladi",
          "Faqat fetch ichida true bo'ladi"
        ],
        "answer": 1,
        "explain": "abort() sinxron ishlaydi: signal darhol aborted holatiga o'tadi va abort hodisasi tinglovchilarga yuboriladi."
      },
      {
        "q": "AbortSignal.timeout(1000) bekor bo'lganda `reason` odatda qanday nomlanadi?",
        "options": [
          "AbortError",
          "TimeoutError",
          "NetworkError",
          "SyntaxError"
        ],
        "answer": 1,
        "explain": "Vaqt tugashi alohida sabab bilan keladi: reason.name odatda TimeoutError bo'ladi."
      }
    ]
  },
  {
    "id": 54,
    "title": "ReadableStream: ma'lumotni bo'laklab o'qish",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Katta fayl yoki tarmoq javobini butunlay xotiraga yuklash shart emas. <b>Streams</b> ma'lumotni bo'lak-bo'lak (chunk) beradi: birinchi bayt kelishi bilan ishlashni boshlash, xotirani tejash va <b>backpressure</b> orqali oqim tezligini boshqarish mumkin."
      },
      {
        "type": "code",
        "title": "stream.js",
        "code": "const stream = new ReadableStream({\n  start(controller) {\n    controller.enqueue(\"Salom, \");\n    controller.enqueue(\"stream!\");\n    controller.close();\n  },\n});\nconst reader = stream.getReader();\nasync function oq() {\n  while (true) {\n    const { value, done } = await reader.read();\n    if (done) break;\n    console.log(\"bo'lak:\", value);\n  }\n  console.log(\"tugadi\");\n}\noq();",
        "output": "bo'lak: Salom, \nbo'lak: stream!\ntugadi"
      },
      {
        "type": "p",
        "html": "Reader oqimdan bittadan bo'lak oladi. <code>done: true</code> oqim yopilganini bildiradi. Brauzerdagi <code>fetch</code> javobi ham <code>body</code> orqali stream beradi: <code>response.body</code> ni o'qib, progress ko'rsatish yoki katta JSON ni bo'laklab tahlil qilish mumkin."
      },
      {
        "type": "code",
        "title": "ndjson.js",
        "code": "const baytlar = new TextEncoder().encode('{\"id\":1}\\n{\"id\":2}\\n');\nconst oqim = new ReadableStream({\n  start(c) {\n    c.enqueue(baytlar.slice(0, 8));\n    c.enqueue(baytlar.slice(8));\n    c.close();\n  },\n});\nconst reader = oqim.pipeThrough(new TextDecoderStream()).getReader();\nlet bufer = \"\";\nfor (;;) {\n  const { value, done } = await reader.read();\n  if (done) break;\n  bufer += value;\n}\nconst qatorlar = bufer.trim().split(\"\\n\").map(JSON.parse);\nconsole.log(qatorlar.map((x) => x.id).join(\",\"));",
        "output": "1,2"
      },
      {
        "type": "ul",
        "items": [
          "<code>getReader()</code> oqimni qulflaydi — bir vaqtda faqat bitta o'quvchi bo'ladi.",
          "<code>pipeThrough()</code> transform stream orqali o'tkazadi: dekodlash, siqishni ochish, filtrlash.",
          "<code>pipeTo()</code> oqimni boshqa oqimga ulaydi va backpressure ni avtomatik uzatadi.",
          "Xato bo'lsa <code>reader.cancel()</code> yoki <code>controller.error()</code> bilan oqimni yoping."
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Xotirani tejang",
        "html": "10 MB li JSON ni <code>await response.json()</code> bilan bir zumda parse qilish xotirani ikki barobar egallaydi. Katta fayllar uchun NDJSON yoki bo'laklab o'qishdan foydalaning; foydalanuvchiga progress ko'rsatish uchun har chunk hajmini yig'ib boring."
      }
    ],
    "quiz": [
      {
        "q": "Streamdan bitta bo'lak o'qish uchun qaysi metod ishlatiladi?",
        "options": [
          "reader.next()",
          "reader.read()",
          "stream.pull()",
          "stream.get()"
        ],
        "answer": 1,
        "explain": "Reader.read() promise qaytaradi; natijada value va done bo'ladi."
      },
      {
        "q": "Backpressure nimani anglatadi?",
        "options": [
          "Iste'molchi sekin bo'lsa, ishlab chiqaruvchini sekinlashtirish",
          "Oqimni majburan yopish",
          "Ma'lumotni teskari tartibda o'qish",
          "Bir nechta readerni ulash"
        ],
        "answer": 0,
        "explain": "Backpressure oqim tezligini iste'molchi imkoniyatiga moslaydi, xotira to'lib ketishining oldini oladi."
      },
      {
        "q": "Bayt oqimini matnga aylantirish uchun qaysi transform mos?",
        "options": [
          "TextEncoderStream",
          "JSONStream",
          "BlobStream",
          "TextDecoderStream"
        ],
        "answer": 3,
        "explain": "TextDecoderStream baytlarni UTF-8 matnga dekodlaydi; TextEncoderStream esa teskarisini qiladi."
      }
    ]
  },
  {
    "id": 55,
    "title": "ESM chuqur: dynamic import va import.meta",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Statik <code>import</code> modulni yuklanish boshida bog'laydi. <b>Dinamik import</b> <code>import()</code> esa promise qaytaradi va modulni keyinroq, shart asosida yuklaydi. Bu kod bo'lish (code splitting), og'ir kutubxonalarni kechiktirish va nosozlikni ushlash uchun asosiy vosita."
      },
      {
        "type": "code",
        "title": "dinamik.mjs",
        "code": "const math = await import(\"./math.js\");\nconsole.log(math.qosh(2, 3));\nconsole.log(import.meta.url.endsWith(\"/dinamik.mjs\"));",
        "output": "5\ntrue"
      },
      {
        "type": "p",
        "html": "<code>import()</code> statik importdan farqli ravishda ifoda ichida, shart bilan yoki o'zgaruvchan yo'l bilan ishlatiladi. Modul bir marta yuklanadi va keshlanadi; keyingi chaqiruvlar o'sha nomlash fazosini qaytaradi. <code>import.meta.url</code> joriy modulning to'liq URL manzilini beradi."
      },
      {
        "type": "code",
        "title": "tarjima.mjs",
        "code": "async function tarjima(nom) {\n  try {\n    const modul = await import(`./locales/${nom}.js`);\n    return modul.salom;\n  } catch (xato) {\n    return \"tarjima topilmadi\";\n  }\n}\nconsole.log(await tarjima(\"uz\"));\nconsole.log(await tarjima(\"yoq\"));",
        "output": "Salom!\ntarjima topilmadi"
      },
      {
        "type": "table",
        "head": [
          "Xususiyat",
          "Statik import",
          "Dinamik import()"
        ],
        "rows": [
          [
            "Joylashuv",
            "Faqat modul tepasida",
            "Har qanday ifoda ichida"
          ],
          [
            "Natija",
            "Bog'langan qiymatlar",
            "Promise<Module>"
          ],
          [
            "Vaqt",
            "Oldindan yuklanadi",
            "So'ralganda yuklanadi"
          ],
          [
            "Xatoni ushlash",
            "Yuklashda to'xtaydi",
            "try/catch bilan mumkin"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "JSON va URL",
        "html": "JSON modulini <code>import data from \"./data.json\" with { type: \"json\" }</code> bilan yuklash mumkin. Modul ichidagi fayl yo'lini hisoblash uchun <code>new URL(\"./data.json\", import.meta.url)</code> ishlating — bu Vite va Node'da ham to'g'ri ishlaydi."
      }
    ],
    "quiz": [
      {
        "q": "`import()` ifodasi nima qaytaradi?",
        "options": [
          "Funksiya",
          "Modul obyektini sinxron",
          "Promise",
          "JSON matn"
        ],
        "answer": 2,
        "explain": "Dinamik import promise qaytaradi; u modul nomlash fazosi bilan hal bo'ladi."
      },
      {
        "q": "Modulning o'z URL manzilini olish uchun nima ishlatiladi?",
        "options": [
          "window.location",
          "document.baseURI",
          "import.meta.url",
          "process.argv"
        ],
        "answer": 2,
        "explain": "import.meta.url joriy modulning to'liq URL ini beradi va nisbiy yo'llarni hisoblashda ishlatiladi."
      },
      {
        "q": "Bir xil dinamik import ikki marta chaqirilsa nima bo'ladi?",
        "options": [
          "Modul ikki marta bajariladi",
          "Xato beradi",
          "Har safar yangi nomlash fazosi yaratiladi",
          "Keshlangan modul qaytariladi"
        ],
        "answer": 3,
        "explain": "Modul bir marta bajariladi va keshlanadi; keyingi import o'sha eksportlarni qaytaradi."
      }
    ]
  },
  {
    "id": 56,
    "title": "npm semver, lockfile va workspaces",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "<code>package.json</code> versiya diapazonlarini, <code>package-lock.json</code> esa aniq o'rnatilgan versiyalarni saqlaydi. <b>Semver</b> uch qismdan iborat: <code>major.minor.patch</code>. <code>^</code> mos major ichida, <code>~</code> mos minor ichida yangilanishga ruxsat beradi. Lockfile buildni takrorlanadigan qiladi."
      },
      {
        "type": "code",
        "title": "package-oqish.mjs",
        "code": "import { readFileSync } from \"node:fs\";\nconst pkg = JSON.parse(readFileSync(\"./package.json\", \"utf8\"));\nconst bogliqlar = Object.entries(pkg.dependencies ?? {});\nconsole.log(bogliqlar.map(([nom, diapazon]) => `${nom}@${diapazon}`).join(\"\\n\"));\nconsole.log(pkg.scripts.test);",
        "output": "zod@^3.23.8\nexpress@^4.19.2\nvitest run"
      },
      {
        "type": "p",
        "html": "<code>npm install</code> lockfile bo'lsa, undagi aniq versiyalarni o'rnatadi. <code>npm ci</code> esa lockfile va package.json mos kelishini tekshirib, toza o'rnatadi — CI uchun aynan shu buyruq kerak. Lockfile'ni git'ga qo'shish jamoada bir xil muhitni kafolatlaydi."
      },
      {
        "type": "code",
        "title": "semver.js",
        "code": "function mos(versiya, oraliq) {\n  const [a, b, c] = versiya.split(\".\").map(Number);\n  const [x, y, z] = oraliq.slice(1).split(\".\").map(Number);\n  if (oraliq.startsWith(\"^\")) {\n    if (x > 0) return a === x && (b > y || (b === y && c >= z));\n    return a === 0 && b === y && c >= z;\n  }\n  return a === x && b === y && c >= z;\n}\nconsole.log(mos(\"3.24.1\", \"^3.23.8\"));\nconsole.log(mos(\"4.0.0\", \"^3.23.8\"));\nconsole.log(mos(\"2.1.3\", \"~2.1.0\"));\nconsole.log(mos(\"2.2.0\", \"~2.1.0\"));",
        "output": "true\nfalse\ntrue\nfalse"
      },
      {
        "type": "ul",
        "items": [
          "<code>npm outdated</code> eskirgan paketlarni, <code>npm audit</code> zaifliklarni ko'rsatadi.",
          "<code>npm pkg set scripts.dev=\"vite\"</code> package.json ni buyruq satridan tahrirlaydi.",
          "Monorepo uchun <code>workspaces</code> maydoni paketlarni bitta lockfile bilan boshqaradi.",
          "<code>npx</code> paketni vaqtincha ishga tushiradi, global o'rnatish shart emas."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Major yangilanishni o'zingiz qiling",
        "html": "<code>^</code> faqat major ichida yangilanadi, lekin baribir testlarsiz yangilamang. <code>npm update</code> lockfile'ni o'zgartiradi; jamoaga tasdiqlangan o'zgarish sifatida yuboring. <code>--legacy-peer-deps</code> ni doimiy yechim qilib qo'ymang."
      }
    ],
    "quiz": [
      {
        "q": "`^3.23.8` diapazoni qaysi versiyani qabul qilmaydi?",
        "options": [
          "3.23.9",
          "4.0.0",
          "3.99.1",
          "3.24.0"
        ],
        "answer": 1,
        "explain": "Caret major raqamini qulflaydi; 4.0.0 yangi major bo'lgani uchun diapazonga kirmaydi."
      },
      {
        "q": "CI muhitida qaysi buyruq tavsiya etiladi?",
        "options": [
          "npm ci",
          "npm install",
          "npm update",
          "npm link"
        ],
        "answer": 0,
        "explain": "npm ci lockfile bo'yicha toza va takrorlanadigan o'rnatish qiladi, lockfile bilan nomuvofiqlikda xato beradi."
      },
      {
        "q": "package-lock.json ning asosiy vazifasi nima?",
        "options": [
          "Litsenziyalarni saqlash",
          "Paket hajmini kamaytirish",
          "Faqat dev dependencylarni yozish",
          "Aniq versiyalarni qulflash va takrorlanadigan build berish"
        ],
        "answer": 3,
        "explain": "Lockfile butun bog'liqlik daraxtining aniq versiyalari va integrity ma'lumotlarini saqlaydi."
      }
    ]
  },
  {
    "id": 57,
    "title": "Bundlerlar: Vite, esbuild va Rollup",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Brauzer o'nlab modulni alohida so'ray oladi, lekin ishlab chiqarishda ularni birlashtirish, siqish va keshlash foydali. <b>Bundler</b> modul grafigini quradi, ishlatilmagan eksportlarni olib tashlaydi (<b>tree shaking</b>) va kodni bo'laklarga ajratadi (<b>code splitting</b>)."
      },
      {
        "type": "code",
        "title": "math.js + main.js",
        "code": "// math.js\nexport const qosh = (a, b) => a + b;\nexport const ayir = (a, b) => a - b;\n\n// main.js\nimport { qosh } from \"./math.js\";\nconsole.log(qosh(2, 3));",
        "output": "5"
      },
      {
        "type": "p",
        "html": "Bundler <code>main.js</code> faqat <code>qosh</code> ni ishlatayotganini ko'radi va <code>ayir</code> ni natijaga qo'shmaydi. Bu tree shaking. Agar modulda yon ta'sir (masalan, global registratsiya) bo'lsa, u saqlanadi yoki <code>sideEffects</code> maydoni bilan boshqariladi."
      },
      {
        "type": "code",
        "title": "chunk.js",
        "code": "document.querySelector(\"#hisobot\").addEventListener(\"click\", async () => {\n  const { hisobotYarat } = await import(\"./hisobot.js\");\n  console.log(hisobotYarat([10, 20, 30]));\n});\n// Tugma bosilganda konsol:",
        "output": "60"
      },
      {
        "type": "table",
        "head": [
          "Vosita",
          "Kuchli tomoni",
          "Odatda"
        ],
        "rows": [
          [
            "Vite",
            "Tez dev server, ESM asosida HMR",
            "Yangi ilovalar"
          ],
          [
            "esbuild",
            "Juda tez transform va minify",
            "Vite ichida, CLI"
          ],
          [
            "Rollup",
            "Toza ESM va kutubxona buildlari",
            "Kutubxonalar"
          ],
          [
            "Webpack",
            "Katta ekotizim, eski loyihalar",
            "Mavjud korxona loyihalari"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Source map va target",
        "html": "Ishlab chiqarishda <code>sourcemap: true</code> xatolarni asl kodga bog'laydi, lekin xaritani ochiq joylashtirmang. <code>build.target</code> ni qo'llab-quvvatlanadigan brauzerlarga moslang: ortiqcha eski transform kod hajmini oshiradi. Vite'da <code>manualChunks</code> bilan vendor kutubxonalarini alohida keshlang."
      }
    ],
    "quiz": [
      {
        "q": "Tree shaking nima qiladi?",
        "options": [
          "Kodni minify qiladi",
          "Modullarni kechiktiradi",
          "Rasmlarni siqadi",
          "Ishlatilmagan eksportlarni natijadan olib tashlaydi"
        ],
        "answer": 3,
        "explain": "Tree shaking statik tahlil orqali ishlatilmagan kodni olib tashlaydi; ESM eksportlari buni osonlashtiradi."
      },
      {
        "q": "Dinamik import bundlerda nimani yaratadi?",
        "options": [
          "Yangi npm paket",
          "Alohida chunk",
          "Service Worker",
          "Source map"
        ],
        "answer": 1,
        "explain": "Dinamik import nuqtasi alohida bo'lak sifatida ajratiladi va faqat kerak bo'lganda yuklanadi."
      },
      {
        "q": "Vite dev serverida API so'rovlarini backendga yo'naltirish uchun nima ishlatiladi?",
        "options": [
          "alias",
          "proxy",
          "define",
          "plugins"
        ],
        "answer": 1,
        "explain": "server.proxy sozlamasi /api kabi yo'llarni backend manziliga yo'naltiradi va CORS muammosini kamaytiradi."
      }
    ]
  },
  {
    "id": 58,
    "title": "TypeScript: turlar, interfeyslar va narrowing",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "TypeScript — JavaScript ustiga <b>statik turlar</b> qo'shadigan til. Turlar brauzerga yetib bormaydi: kompilyator ularni o'chirib tashlaydi. Asosiy foyda — xatoni kod yozish paytida, ishga tushirishdan oldin topish va murakkab ma'lumot shakllarini hujjatlashtirish."
      },
      {
        "type": "code",
        "title": "vazifa.ts",
        "code": "type Holat = \"yangi\" | \"bajarilmoqda\" | \"tugadi\";\ninterface Vazifa {\n  id: number;\n  nom: string;\n  holat: Holat;\n}\nfunction sarlavha(v: Vazifa): string {\n  return `#${v.id} ${v.nom} [${v.holat}]`;\n}\nconsole.log(sarlavha({ id: 7, nom: \"Testlar\", holat: \"tugadi\" }));",
        "output": "#7 Testlar [tugadi]"
      },
      {
        "type": "p",
        "html": "<code>interface</code> obyekt shaklini, <code>type</code> esa har qanday turni (union, tuple, funksiya) nomlash uchun ishlatiladi. <b>Narrowing</b> — kompilyatorning shart ichida turni toraytirishi: <code>typeof</code>, <code>Array.isArray</code>, <code>in</code>, <code>=== null</code> tekshiruvlari turni aniqlashtiradi."
      },
      {
        "type": "code",
        "title": "narrowing.ts",
        "code": "function uzunlik(qiymat: string | string[] | null): number {\n  if (qiymat === null) return 0;\n  return Array.isArray(qiymat) ? qiymat.length : qiymat.trim().length;\n}\nconsole.log(uzunlik(\"  salom \"));\nconsole.log(uzunlik([\"a\", \"b\"]));\nconsole.log(uzunlik(null));",
        "output": "5\n2\n0"
      },
      {
        "type": "table",
        "head": [
          "Tur",
          "Ma'nosi",
          "Misol"
        ],
        "rows": [
          [
            "unknown",
            "Qiymat bor, lekin tekshiruvsiz ishlatib bo'lmaydi",
            "JSON.parse natijasi"
          ],
          [
            "any",
            "Tekshiruvni o'chirib qo'yadi",
            "Eski kod bilan ko'prik"
          ],
          [
            "never",
            "Hech qachon qaytmaydigan funksiya",
            "throw / cheksiz tsikl"
          ],
          [
            "union",
            "Bir nechta variantdan biri",
            "string | number"
          ],
          [
            "literal",
            "Aniq qiymatlar",
            "\"yangi\" | \"tugadi\""
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "any dan qoching",
        "html": "<code>any</code> butun tekshiruvni o'chiradi va xatoni keyingi qatlamga suradi. Tashqi ma'lumot uchun <code>unknown</code> ishlatib, tekshiruvdan keyin toraytiring. <code>noImplicitAny</code> va <code>strictNullChecks</code> ni yoqing: aks holda TypeScript foydasi kamayadi."
      }
    ],
    "quiz": [
      {
        "q": "`unknown` turi bilan `any` orasidagi asosiy farq nima?",
        "options": [
          "unknown kattaroq hajm egallaydi",
          "unknown tekshiruvsiz ishlatilmaydi",
          "any faqat obyektlar uchun",
          "unknown runtime'da o'chiriladi"
        ],
        "answer": 1,
        "explain": "unknown xavfsiz: uning ustida amal bajarishdan oldin turini tekshirish shart. any esa tekshiruvni butunlay o'chiradi."
      },
      {
        "q": "`Array.isArray(qiymat)` qanday narrowing beradi?",
        "options": [
          "Turni massivga toraytiradi",
          "Turni stringga o'zgartiradi",
          "Qiymatni nusxalaydi",
          "Faqat runtime tekshiruvi, TS ta'sir qilmaydi"
        ],
        "answer": 0,
        "explain": "TypeScript Array.isArray ni type guard deb biladi va shart ichida turni massivga toraytiradi."
      },
      {
        "q": "Qaysi holatda `interface` o'rniga `type` kerak bo'ladi?",
        "options": [
          "Obyekt shaklini tavsiflashda",
          "Union yoki tuple kabi turni nomlashda",
          "Class implement qilishda",
          "Funksiya parametrini yozishda"
        ],
        "answer": 1,
        "explain": "interface faqat obyekt shakllarini kengaytiradi; union va tuple uchun type ishlatiladi."
      }
    ]
  },
  {
    "id": 59,
    "title": "TypeScript: generics va utility turlar",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Generics — turni <b>parametr</b> sifatida qabul qilish. Ular kodni nusxalashsiz turli xil ma'lumotlar bilan ishlashga imkon beradi, lekin <code>any</code> kabi xavfsizlikni yo'qotmaydi. Utility turlar (<code>Partial</code>, <code>Pick</code>, <code>Omit</code>, <code>Record</code>) mavjud turdan yangi tur hosil qiladi."
      },
      {
        "type": "code",
        "title": "generics.ts",
        "code": "function birinchi<T>(massiv: T[]): T | undefined {\n  return massiv[0];\n}\nfunction juftlik<A, B>(a: A, b: B): [A, B] {\n  return [a, b];\n}\nconst son = birinchi([10, 20, 30]);\nconst nom = birinchi([\"olma\", \"nok\"]);\nconsole.log(son, nom);\nconsole.log(juftlik(\"yosh\", 21));",
        "output": "10 olma\n[ 'yosh', 21 ]"
      },
      {
        "type": "p",
        "html": "Generic parametrga cheklov qo'shish uchun <code>extends</code> ishlatiladi: <code>T extends { id: string }</code>. Bu funksiya ichida <code>id</code> borligini kafolatlaydi. Standart qiymat ham berish mumkin: <code>&lt;T = string&gt;</code>."
      },
      {
        "type": "code",
        "title": "utility.ts",
        "code": "interface Foydalanuvchi {\n  id: number;\n  ism: string;\n  email: string;\n  parol: string;\n}\ntype Ommaviy = Omit<Foydalanuvchi, \"parol\">;\ntype Yangilanish = Partial<Pick<Foydalanuvchi, \"ism\" | \"email\">>;\nconst foydalanuvchi: Ommaviy = { id: 1, ism: \"Dilnoza\", email: \"d@noldan.uz\" };\nconst yangilanish: Yangilanish = { ism: \"Dilnoza A.\" };\nconsole.log(Object.keys(foydalanuvchi).join(\",\"));\nconsole.log(Object.keys(yangilanish).join(\",\"));",
        "output": "id,ism,email\nism"
      },
      {
        "type": "table",
        "head": [
          "Utility",
          "Natija",
          "Qachon"
        ],
        "rows": [
          [
            "Partial<T>",
            "Barcha maydonlar ixtiyoriy",
            "PATCH yangilanishi"
          ],
          [
            "Required<T>",
            "Barcha maydonlar majburiy",
            "To'ldirilgan konfiguratsiya"
          ],
          [
            "Pick<T, K>",
            "Faqat tanlangan maydonlar",
            "API javobi proyeksiyasi"
          ],
          [
            "Omit<T, K>",
            "Tanlangan maydonlarsiz",
            "Maxfiy maydonlarni olib tashlash"
          ],
          [
            "Record<K, V>",
            "Kalit-qiymat xaritasi",
            "Lug'atlar va indekslar"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Generic chegarasini aniq qo'ying",
        "html": "Har funksiyaga <code>&lt;T&gt;</code> qo'shish shart emas: agar tur muhim bo'lmasa, aniq tur yozish osonroq. Generic faqat kamida ikki joyda ishlatilganda yoki qaytish turi kirish turiga bog'liq bo'lganda foydali."
      }
    ],
    "quiz": [
      {
        "q": "Generic parametrga cheklov qo'shish uchun qaysi kalit so'z ishlatiladi?",
        "options": [
          "implements",
          "infer",
          "keyof",
          "extends"
        ],
        "answer": 3,
        "explain": "T extends Shakl yozuvi T ning kamida Shakl maydonlariga ega bo'lishini talab qiladi."
      },
      {
        "q": "`Partial<Foydalanuvchi>` nimani beradi?",
        "options": [
          "Barcha maydonlarni o'chiradi",
          "Barcha maydonlarni ixtiyoriy qiladi",
          "Faqat id ni qoldiradi",
          "Turni readonly qiladi"
        ],
        "answer": 1,
        "explain": "Partial har bir maydonni ? belgisi bilan ixtiyoriy qiladi."
      },
      {
        "q": "Lug'at (kalitdan qiymatga) turini qaysi utility ifodalaydi?",
        "options": [
          "Record",
          "Omit",
          "Pick",
          "Exclude"
        ],
        "answer": 0,
        "explain": "Record<K, V> K kalitlari va V qiymatlari bo'lgan obyekt turini yaratadi."
      }
    ]
  },
  {
    "id": 60,
    "title": "TypeScript'ga bosqichma-bosqich o'tish",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Katta JavaScript loyihasini bir kunda TypeScript'ga ko'chirish xavfli. To'g'ri yo'l — <b>bosqichma-bosqich</b>: avval <code>allowJs</code> va <code>checkJs</code> ni yoqib, JSDoc bilan turlarni qo'shish, keyin fayllarni birma-bir <code>.ts</code> ga o'tkazish. Har bosqichda testlar yashil bo'lishi kerak."
      },
      {
        "type": "code",
        "title": "chegirma.js",
        "code": "// @ts-check\n/**\n * @param {number} narx\n * @param {number} foiz\n */\nfunction chegirma(narx, foiz) {\n  return narx - (narx * foiz) / 100;\n}\nconsole.log(chegirma(200_000, 15));",
        "output": "170000"
      },
      {
        "type": "p",
        "html": "<code>// @ts-check</code> bitta faylda tekshiruvni yoqadi. JSDoc izohlari muharrirga tur ma'lumotini beradi, kod esa o'zgarmaydi. Loyiha darajasida <code>checkJs: true</code> ni qo'shsangiz, barcha <code>.js</code> fayllar tekshiriladi va xatolar ro'yxati bosqichma-bosqich kamayadi."
      },
      {
        "type": "code",
        "title": "buyurtma.ts",
        "code": "type Buyurtma = { id: string; summa: number; izoh?: string };\nfunction jami(buyurtmalar: Buyurtma[]): number {\n  return buyurtmalar.reduce((sum, b) => sum + b.summa, 0);\n}\nconst natija = jami([\n  { id: \"A1\", summa: 120 },\n  { id: \"A2\", summa: 80, izoh: \"tez\" },\n]);\nconsole.log(natija.toFixed(2));",
        "output": "200.00"
      },
      {
        "type": "ul",
        "items": [
          "<code>strict: true</code> ni yangi fayllar uchun yoqing, eski fayllarni vaqtincha istisno qiling.",
          "<code>noImplicitAny</code> xatolarini birma-bir tuzating; <code>any</code> bilan yopib qo'ymang.",
          "Tashqi API javoblarini <code>unknown</code> deb qabul qilib, zod kabi sxema bilan tekshiring.",
          "Har bir ko'chirilgan modul uchun test va buildni ishga tushiring — regressiya darhol ko'rinadi."
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Kichik qadamlar",
        "html": "Avval eng kam bog'liqlikka ega <b>barg modullarini</b> (utils, formatlash) ko'chiring. Keyin servislar, oxirida UI. <code>tsc --noEmit</code> ni CI'ga qo'shing: build tezligini saqlab, tur xatolarini ushlaydi. <code>skipLibCheck</code> ni vaqtincha ishlatish mumkin, lekin doimiy qoldirmang."
      }
    ],
    "quiz": [
      {
        "q": "JavaScript fayllarini TypeScript bilan tekshirish uchun qaysi sozlama kerak?",
        "options": [
          "jsx",
          "emitDecoratorMetadata",
          "checkJs",
          "outDir"
        ],
        "answer": 2,
        "explain": "checkJs true bo'lsa, allowJs bilan birga .js fayllar ham tekshiriladi."
      },
      {
        "q": "`strictNullChecks` nimani oldini oladi?",
        "options": [
          "Funksiyalarni ko'tarishni",
          "null va undefined ni e'tiborsiz qoldirishni",
          "Modullarni kechiktirishni",
          "Testlarni ishga tushishini"
        ],
        "answer": 1,
        "explain": "strictNullChecks null/undefined ni alohida tur sifatida ko'radi va ular bilan ishlashni tekshirishga majbur qiladi."
      },
      {
        "q": "Bosqichma-bosqich ko'chirishda birinchi navbatda qaysi fayllar tanlanadi?",
        "options": [
          "Eng ko'p bog'liqlikka ega UI fayllari",
          "Barg modullar va utilitlar",
          "Faqat konfiguratsiya fayllari",
          "Tashqi kutubxonalar"
        ],
        "answer": 1,
        "explain": "Kam bog'liqlikka ega barg modullar xavfsizroq ko'chiriladi va turni tashqariga tarqatish osonroq."
      }
    ]
  },
  {
    "id": 61,
    "title": "Vitest bilan birinchi unit test",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Unit test funksiyaning kichik qismini izolyatsiyada tekshiradi: kirish beriladi, chiqish kutilgan natija bilan solishtiriladi. <b>Vitest</b> Vite bilan bir xil konfiguratsiyadan foydalanadi, tez ishlaydi va ESM'ni tabiiy qo'llab-quvvatlaydi. Test nomi xatti-harakatni, kod esa aniq kutishni ifodalaydi."
      },
      {
        "type": "code",
        "title": "summa.test.js",
        "code": "import { describe, it, expect } from \"vitest\";\nimport { summa } from \"./summa.js\";\n\ndescribe(\"summa\", () => {\n  it(\"musbat sonlarni qo'shadi\", () => {\n    expect(summa(2, 3)).toBe(5);\n  });\n  it(\"bo'sh massivda 0 qaytaradi\", () => {\n    expect(summa()).toBe(0);\n  });\n});",
        "output": "✓ summa > musbat sonlarni qo'shadi\n✓ summa > bo'sh massivda 0 qaytaradi\n\nTest Files  1 passed (1)\nTests  2 passed (2)"
      },
      {
        "type": "p",
        "html": "Test <b>Arrange — Act — Assert</b> naqshida yoziladi: tayyorlash, harakat, tekshirish. <code>toBe</code> primitiv qiymatlar uchun ishlatiladi. Obyekt va massivlarni solishtirishda <code>toEqual</code> kerak: u chuqur tenglikni tekshiradi. <code>toBe</code> esa referensni solishtiradi."
      },
      {
        "type": "code",
        "title": "format.test.js",
        "code": "import { test, expect } from \"vitest\";\nimport { savatQosh } from \"./savat.js\";\n\ntest(\"savatga mahsulot qo'shadi\", () => {\n  expect(savatQosh([], \"olma\")).toEqual([\"olma\"]);\n  expect(savatQosh([\"olma\"], \"nok\")).toHaveLength(2);\n});\n\ntest(\"asl massivni o'zgartirmaydi\", () => {\n  const asl = [\"olma\"];\n  savatQosh(asl, \"nok\");\n  expect(asl).toEqual([\"olma\"]);\n});",
        "output": "✓ savatga mahsulot qo'shadi\n✓ asl massivni o'zgartirmaydi\n\nTest Files  1 passed (1)\nTests  2 passed (2)"
      },
      {
        "type": "ul",
        "items": [
          "<code>test.skip</code> va <code>test.only</code> dan vaqtincha foydalaning, lekin commit oldidan olib tashlang.",
          "Har test mustaqil bo'lsin: global holatni oldingi testdan meros qilib olmasin.",
          "<code>beforeEach</code> har test oldidan toza muhit tayyorlaydi.",
          "Xato testni avval yozib, keyin kodni tuzatish — TDD ning asosiy sikli."
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Xato xabarini o'qing",
        "html": "Muvaffaqiyatsiz testda Vitest kutilgan va olingan qiymatni, hamda qator raqamini ko'rsatadi. Avval <b>test noto'g'ri</b>mi yoki <b>kod noto'g'ri</b>mi — shuni aniqlang. Testni kodga moslab o'zgartirish ko'pincha yashirin xatoni saqlab qoladi."
      }
    ],
    "quiz": [
      {
        "q": "Obyekt yoki massivni chuqur solishtirish uchun qaysi matcher ishlatiladi?",
        "options": [
          "toBe",
          "toContain",
          "toEqual",
          "toMatch"
        ],
        "answer": 2,
        "explain": "toEqual rekursiv chuqur tenglikni tekshiradi; toBe esa referensni solishtiradi."
      },
      {
        "q": "Testning Arrange qismi nimani anglatadi?",
        "options": [
          "Ma'lumot va muhitni tayyorlash",
          "Funksiyani chaqirish",
          "Natijani tekshirish",
          "Testni o'chirish"
        ],
        "answer": 0,
        "explain": "Arrange bosqichida kerakli obyektlar, soxta ma'lumotlar va shartlar tayyorlanadi."
      },
      {
        "q": "Testlar bir-biridan mustaqil bo'lishi nima uchun muhim?",
        "options": [
          "Natija boshqa testlarning tartibiga bog'liq bo'lmaydi",
          "Testlar tezroq ishlaydi",
          "Kod hajmi kamayadi",
          "Vitest faqat shunda ishlaydi"
        ],
        "answer": 0,
        "explain": "Mustaqil testlar istalgan tartibda va parallel ishlaydi; yashirin global holat yolg'on natija bermaydi."
      }
    ]
  },
  {
    "id": 62,
    "title": "Mock, spy va fake timers",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Testda tashqi tarmoq, email yoki tasodifiy sonni haqiqiy chaqirish kerak emas. <b>Mock</b> funksiya o'rnini bosadi va chaqiruvlarni yozib oladi. Vitest'da <code>vi.fn()</code> — soxta funksiya, <code>vi.spyOn()</code> — mavjud metodni kuzatish, <code>vi.mock()</code> — butun modulni almashtirish."
      },
      {
        "type": "code",
        "title": "mailer.test.js",
        "code": "import { vi, test, expect } from \"vitest\";\nimport { xabarYubor } from \"./mailer.js\";\n\ntest(\"xabar yuborilishini tekshiradi\", async () => {\n  const soxta = vi.fn().mockResolvedValue({ ok: true });\n  await xabarYubor(\"a@n.uz\", \"Salom\", soxta);\n  expect(soxta).toHaveBeenCalledTimes(1);\n  expect(soxta).toHaveBeenCalledWith(\"a@n.uz\", \"Salom\");\n});",
        "output": "✓ xabar yuborilishini tekshiradi\n\nTest Files  1 passed (1)\nTests  1 passed (1)"
      },
      {
        "type": "p",
        "html": "Mock chaqiruv argumentlari, soni va qaytargan qiymatini tekshirish imkonini beradi. <code>mockRejectedValue</code> xatoni simulyatsiya qiladi. Har testdan keyin <code>vi.restoreAllMocks()</code> chaqiring yoki <code>restoreMocks: true</code> ni yoqing — aks holda soxta holat keyingi testga o'tadi."
      },
      {
        "type": "code",
        "title": "debounce.test.js",
        "code": "import { vi, test, expect } from \"vitest\";\nimport { debounce } from \"./debounce.js\";\n\ntest(\"debounce faqat oxirgi chaqiruvni bajaradi\", () => {\n  vi.useFakeTimers();\n  const fn = vi.fn();\n  const kechiktir = debounce(fn, 300);\n  kechiktir();\n  kechiktir();\n  vi.advanceTimersByTime(299);\n  expect(fn).not.toHaveBeenCalled();\n  vi.advanceTimersByTime(1);\n  expect(fn).toHaveBeenCalledTimes(1);\n  vi.useRealTimers();\n});",
        "output": "✓ debounce faqat oxirgi chaqiruvni bajaradi\n\nTest Files  1 passed (1)\nTests  1 passed (1)"
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
            "vi.fn()",
            "Yangi soxta funksiya",
            "Callback o'rnini bosish"
          ],
          [
            "vi.spyOn()",
            "Mavjud metodni kuzatish",
            "console.error ni tekshirish"
          ],
          [
            "vi.mock()",
            "Modulni to'liq almashtirish",
            "API klientini soxtalashtirish"
          ],
          [
            "vi.useFakeTimers()",
            "Vaqtni boshqarish",
            "debounce, throttle, retry"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Ortiqcha mock",
        "html": "Hamma narsani mock qilsangiz, test haqiqiy kodni emas, mocklar o'zaro mosligini tekshiradi. Faqat <b>tashqi chegaralarni</b> (tarmoq, fayl tizimi, vaqt, tasodif) almashtiring. Ichki funksiyalarni mock qilish o'rniga ularni alohida test qiling."
      }
    ],
    "quiz": [
      {
        "q": "`vi.fn()` nima yaratadi?",
        "options": [
          "Chaqiruvlarni yozib oluvchi soxta funksiya",
          "Yangi modul",
          "Vaqtni to'xtatuvchi taymer",
          "DOM elementi"
        ],
        "answer": 0,
        "explain": "vi.fn() soxta funksiya qaytaradi; uning chaqiruvlari, argumentlari va natijalari kuzatiladi."
      },
      {
        "q": "Fake timers qaysi holatda ayniqsa foydali?",
        "options": [
          "DOM renderini tekshirishda",
          "debounce va kechiktirilgan ishlarni sinashda",
          "CSS stillarini solishtirishda",
          "Fayl o'qishda"
        ],
        "answer": 1,
        "explain": "Fake timers vaqtni qo'lda suradi, shuning uchun real 300 ms kutmasdan debounce va retry mantiqini tekshirish mumkin."
      },
      {
        "q": "Testdan keyin mocklarni tiklash uchun nima qilinadi?",
        "options": [
          "vi.restoreAllMocks()",
          "vi.clearAllTimers()",
          "expect.restore()",
          "test.reset()"
        ],
        "answer": 0,
        "explain": "vi.restoreAllMocks() spylarni asl implementatsiyaga qaytaradi va soxta holatni tozalaydi."
      }
    ]
  },
  {
    "id": 63,
    "title": "DOM va komponent testlari",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "DOM testi foydalanuvchi ko'radigan xatti-harakatni tekshiradi: element topiladi, bosiladi, matn o'zgaradi. <b>Testing Library</b> ichki tuzilishga emas, <b>rol va matn</b> ga tayanishni tavsiya qiladi. Shu sababli testlar refaktoringdan keyin ham yashil qoladi va accessibility muammolarini erta ko'rsatadi."
      },
      {
        "type": "code",
        "title": "forma.test.js",
        "code": "import { test, expect } from \"vitest\";\nimport { screen } from \"@testing-library/dom\";\nimport userEvent from \"@testing-library/user-event\";\nimport { formaYarat } from \"./forma.js\";\n\ntest(\"ism kiritilganda salomlashadi\", async () => {\n  document.body.append(formaYarat());\n  await userEvent.type(screen.getByLabelText(\"Ism\"), \"Aziza\");\n  await userEvent.click(screen.getByRole(\"button\", { name: \"Salomlash\" }));\n  expect(screen.getByText(\"Salom, Aziza!\")).toBeTruthy();\n});",
        "output": "✓ ism kiritilganda salomlashadi\n\nTest Files  1 passed (1)\nTests  1 passed (1)"
      },
      {
        "type": "p",
        "html": "<code>getByRole</code> — eng barqaror so'rov: u ekran o'quvchi ham ko'radigan rolni ishlatadi. <code>getByLabelText</code> forma maydonlarini teg bilan bog'laydi. <code>getByText</code> ko'rinadigan matnni topadi. Topilmasa test darhol yiqiladi; bir nechta moslik bo'lsa <code>getAllBy...</code> ishlatiladi."
      },
      {
        "type": "code",
        "title": "rollar.js",
        "code": "// HTML: <button>Saqlash</button> <input placeholder=\"Email\" type=\"email\" />\nconst tugma = screen.getByRole(\"button\", { name: /saqlash/i });\nconst maydon = screen.getByPlaceholderText(\"Email\");\nconsole.log(tugma.tagName, maydon.type);",
        "output": "BUTTON email"
      },
      {
        "type": "ul",
        "items": [
          "<code>findBy...</code> asinxron paydo bo'ladigan elementni kutadi; <code>waitFor</code> shartni qayta tekshiradi.",
          "<code>userEvent</code> haqiqiy brauzer xatti-harakatiga yaqin: fokus, klaviatura, bosish ketma-ketligi.",
          "Har testdan keyin <code>cleanup()</code> yoki avtomatik tozalashni ta'minlang.",
          "Testda <code>document.querySelector(\".div-3\")</code> kabi ichki selektorlardan qoching."
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Foydalanuvchi nomidan yozing",
        "html": "Test nomi «foydalanuvchi noto'g'ri parol kiritganda xato ko'radi» bo'lsin, «validatePassword funksiyasi false qaytaradi» emas. Bu testni talabga bog'laydi va implementatsiya o'zgarganda ham ma'nosini saqlaydi."
      }
    ],
    "quiz": [
      {
        "q": "Testing Library'da eng barqaror so'rov usuli qaysi?",
        "options": [
          "querySelector",
          "getByTestId",
          "getByRole",
          "getElementById"
        ],
        "answer": 2,
        "explain": "getByRole foydalanuvchi va ekran o'quvchi ko'radigan semantik rolga tayanadi."
      },
      {
        "q": "Asinxron paydo bo'ladigan elementni kutish uchun qaysi so'rov ishlatiladi?",
        "options": [
          "getByText",
          "queryByText",
          "findByText",
          "getAllByText"
        ],
        "answer": 2,
        "explain": "findBy... promise qaytaradi va element paydo bo'lguncha kutadi."
      },
      {
        "q": "`userEvent` ning `fireEvent` dan afzalligi nimada?",
        "options": [
          "Haqiqiy foydalanuvchi xatti-harakatini ko'proq taqlid qiladi",
          "Tezroq ishlaydi",
          "Faqat React bilan ishlaydi",
          "DOM talab qilmaydi"
        ],
        "answer": 0,
        "explain": "userEvent fokus, klaviatura va bosish ketma-ketligini brauzerga yaqinroq simulyatsiya qiladi."
      }
    ]
  },
  {
    "id": 64,
    "title": "Playwright bilan E2E testlar",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Unit testlar qismlarni tekshiradi, <b>E2E</b> esa haqiqiy brauzerda butun oqimni: sahifa ochilishi, forma, tarmoq, navigatsiya. <b>Playwright</b> Chromium, Firefox va WebKit'ni boshqaradi, avtomatik kutadi va muvaffaqiyatsiz testda trace yozib oladi."
      },
      {
        "type": "code",
        "title": "login.spec.js",
        "code": "import { test, expect } from \"@playwright/test\";\n\ntest(\"foydalanuvchi tizimga kiradi\", async ({ page }) => {\n  await page.goto(\"/login\");\n  await page.getByLabel(\"Email\").fill(\"aziza@noldan.uz\");\n  await page.getByLabel(\"Parol\").fill(\"maxfiy123\");\n  await page.getByRole(\"button\", { name: \"Kirish\" }).click();\n  await expect(page.getByRole(\"heading\", { name: \"Boshqaruv paneli\" })).toBeVisible();\n});",
        "output": "✓ 1 login.spec.js:3:1 › foydalanuvchi tizimga kiradi (1.2s)\n\n1 passed (1.4s)"
      },
      {
        "type": "p",
        "html": "Playwright locatorlari o'zi <b>auto-waiting</b> qiladi: element ko'rinishi, barqarorligi va bosilishga tayyorligini kutadi. Shuning uchun <code>sleep(1000)</code> kerak emas. <code>expect(...).toBeVisible()</code> ham shart bajarilguncha qayta tekshiradi. Bu «flaky» testlarni keskin kamaytiradi."
      },
      {
        "type": "code",
        "title": "api.spec.js",
        "code": "import { test, expect } from \"@playwright/test\";\n\ntest(\"API sog'liq tekshiruvi\", async ({ request }) => {\n  const javob = await request.get(\"/api/health\");\n  expect(javob.status()).toBe(200);\n  expect(await javob.json()).toEqual({ holat: \"ok\" });\n});",
        "output": "✓ 1 api.spec.js:3:1 › API sog'liq tekshiruvi (243ms)\n\n1 passed (612ms)"
      },
      {
        "type": "table",
        "head": [
          "Daraja",
          "Nimani tekshiradi",
          "Tezlik"
        ],
        "rows": [
          [
            "Unit",
            "Bitta funksiya yoki modul",
            "Millisekundlar"
          ],
          [
            "Komponent",
            "UI bo'lagi va foydalanuvchi harakati",
            "Sekundlar"
          ],
          [
            "API",
            "HTTP shartnomasi",
            "Sekundlar"
          ],
          [
            "E2E",
            "Butun foydalanuvchi oqimi",
            "O'nlab sekundlar"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Trace va CI",
        "html": "Muvaffaqiyatsiz test uchun <code>trace: \"on-first-retry\"</code> yoqing va <code>npx playwright show-trace</code> bilan qadam-baqadam ko'ring. CI'da <code>--shard</code> bilan testlarni parallel bo'ling, lekin har shard alohida ma'lumot bazasiga ega bo'lsin. Sirni test kodiga yozmang — env orqali bering."
      }
    ],
    "quiz": [
      {
        "q": "E2E test qaysi darajada ishlaydi?",
        "options": [
          "Bitta sof funksiya",
          "Faqat TypeScript turlari",
          "Faqat API javobi",
          "Haqiqiy brauzerda butun foydalanuvchi oqimi"
        ],
        "answer": 3,
        "explain": "E2E brauzerni boshqarib, sahifa, tarmoq va foydalanuvchi harakatlarini birga tekshiradi."
      },
      {
        "q": "Playwright'da `sleep(1000)` odatda nima uchun kerak emas?",
        "options": [
          "Chunki brauzer tez",
          "Chunki E2E faqat API bilan ishlaydi",
          "Chunki testlar parallel",
          "Locatorlar avtomatik kutadi"
        ],
        "answer": 3,
        "explain": "Playwright locatorlari element tayyor bo'lguncha avtomatik kutadi; sun'iy kutish testni sekinlashtiradi va beqaror qiladi."
      },
      {
        "q": "Muvaffaqiyatsiz E2E testni tahlil qilish uchun eng foydali vosita qaysi?",
        "options": [
          "ESLint",
          "npm outdated",
          "Trace viewer",
          "Lockfile"
        ],
        "answer": 2,
        "explain": "Trace viewer har qadamning skrinshoti, DOM holati va tarmoq yozuvlarini ko'rsatadi."
      }
    ]
  },
  {
    "id": 65,
    "title": "Lint, format va CI sifat darvozalari",
    "minutes": 15,
    "blocks": [
      {
        "type": "p",
        "html": "Sifatni faqat testlar ta'minlamaydi. <b>ESLint</b> mantiqiy xatolar va uslub muammolarini, <b>Prettier</b> formatni, <b>CI</b> esa barcha tekshiruvlarni har push'da avtomatik ishga tushiradi. Darvoza o'tmasa, o'zgarish birlashtirilmaydi."
      },
      {
        "type": "code",
        "title": "lint-run.mjs",
        "code": "import { ESLint } from \"eslint\";\n\nconst eslint = new ESLint({ fix: true });\nconst natijalar = await eslint.lintFiles([\"src/**/*.js\"]);\nconst xatolar = natijalar.reduce((s, r) => s + r.errorCount, 0);\nconsole.log(`fayllar: ${natijalar.length}`);\nconsole.log(`xatolar: ${xatolar}`);",
        "output": "fayllar: 12\nxatolar: 0"
      },
      {
        "type": "p",
        "html": "ESLint va Prettier vazifalari har xil: lint <b>mantiq</b> va xavfni, format esa bo'sh joy va qatorlarni boshqaradi. Ikkalasini aralashtirmang. Muharrirda «save on format» yoqilsa, jamoa uslubi avtomatik bir xil bo'ladi va code review mazmunga qaratiladi."
      },
      {
        "type": "code",
        "title": "coverage-gate.mjs",
        "code": "import { readFileSync } from \"node:fs\";\nconst hisobot = JSON.parse(readFileSync(\"coverage/coverage-summary.json\", \"utf8\"));\nconst foiz = hisobot.total.lines.pct;\nif (foiz < 80) {\n  console.error(`Qoplama yetarli emas: ${foiz}%`);\n  process.exit(1);\n}\nconsole.log(`Qoplama: ${foiz}% — darvoza ochildi`);",
        "output": "Qoplama: 84.5% — darvoza ochildi"
      },
      {
        "type": "ul",
        "items": [
          "CIda <code>npm ci</code>, <code>lint</code>, <code>test --run</code>, <code>build</code> ketma-ket ishga tushsin.",
          "Pre-commit hook (husky + lint-staged) faqat o'zgargan fayllarni tekshiradi — tez bo'ladi.",
          "Coverage 100% maqsad emas: muhim shoxobchalar qoplanganini kuzating.",
          "Renovate yoki Dependabot yangilanishlarni avtomatik PR qilib, CI orqali tekshiradi."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Ogohlantirishni e'tiborsiz qoldirmang",
        "html": "CI'da <code>--max-warnings 0</code> qo'ying: ogohlantirishlar asta-sekin to'planib, haqiqiy muammoni ko'mib tashlaydi. Istisno qo'shsangiz, sababini izohda yozing va muddatini belgilang."
      }
    ],
    "quiz": [
      {
        "q": "ESLint va Prettier vazifalari qanday taqsimlanadi?",
        "options": [
          "Ikkalasi ham formatlaydi",
          "Prettier testlarni ishga tushiradi",
          "ESLint mantiqni, Prettier formatni tekshiradi",
          "ESLint faqat TypeScript uchun"
        ],
        "answer": 2,
        "explain": "ESLint kod sifatini va xavfli naqshlarni, Prettier esa vizual formatni boshqaradi."
      },
      {
        "q": "CI pipeline'da testlardan oldin odatda nima ishga tushadi?",
        "options": [
          "Deploy",
          "Rollback",
          "npm ci va lint",
          "Migratsiya"
        ],
        "answer": 2,
        "explain": "Toza o'rnatish va lint tez yiqiladi, shuning uchun qimmat testlardan oldin bajariladi."
      },
      {
        "q": "Coverage darvozasi nima qiladi?",
        "options": [
          "Qoplama chegaradan past bo'lsa CI ni yiqitadi",
          "Kodni minify qiladi",
          "Testlarni o'chiradi",
          "Faqat hisobot chiqaradi"
        ],
        "answer": 0,
        "explain": "Darvoza process.exit(1) bilan CI ni to'xtatadi, shuning uchun qoplama pasayishi merge bo'lmaydi."
      }
    ]
  },
  {
    "id": 66,
    "title": "Node.js runtime: fs, path va process",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Node.js brauzerdan farqli ravishda fayl tizimi, tarmoq va operatsion tizim API'lariga ega. <code>node:fs/promises</code> asinxron fayl ishlari, <code>node:path</code> platformaga mos yo'llar, <code>process</code> esa muhit, argumentlar va chiqish kodi bilan ishlaydi. Bu uchlik har qanday backend skriptning asosi."
      },
      {
        "type": "code",
        "title": "fayllar.mjs",
        "code": "import { mkdir, readFile, writeFile } from \"node:fs/promises\";\nimport path from \"node:path\";\n\nconst fayl = path.join(process.cwd(), \"data\", \"xabar.txt\");\nawait mkdir(path.dirname(fayl), { recursive: true });\nawait writeFile(fayl, \"Salom, Node!\", \"utf8\");\nconst matn = await readFile(fayl, \"utf8\");\nconsole.log(matn);\nconsole.log(path.extname(fayl));\nconsole.log(process.version.startsWith(\"v\"));",
        "output": "Salom, Node!\n.txt\ntrue"
      },
      {
        "type": "p",
        "html": "<code>fs/promises</code> callback'lar o'rniga promise qaytaradi, shuning uchun <code>await</code> bilan qulay. <code>path.join</code> Windows va Unix yo'l ajratgichlarini o'zi to'g'rilaydi; yo'lni qo'lda <code>\"data/\" + nom</code> qilib yig'mang. <code>process.cwd()</code> — buyruq ishga tushirilgan katalog."
      },
      {
        "type": "code",
        "title": "env.mjs",
        "code": "const port = Number(process.env.PORT ?? 3000);\nconst rejim = process.env.NODE_ENV ?? \"development\";\nconsole.log({ port, rejim });\n\nprocess.on(\"SIGINT\", () => {\n  console.log(\"tozalandi\");\n  process.exit(0);\n});",
        "output": "{ port: 3000, rejim: 'development' }"
      },
      {
        "type": "table",
        "head": [
          "API",
          "Vazifasi",
          "Eslatma"
        ],
        "rows": [
          [
            "process.env",
            "Muhit o'zgaruvchilari",
            "Qiymatlar doim string"
          ],
          [
            "process.argv",
            "Buyruq argumentlari",
            "2-indeksdan boshlanadi"
          ],
          [
            "process.exitCode",
            "Chiqish kodi",
            "0 — muvaffaqiyat"
          ],
          [
            "path.resolve",
            "Absolyut yo'l",
            "cwd ga nisbatan"
          ],
          [
            "fs.readdir",
            "Katalog ro'yxati",
            "withFileTypes bilan"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Sinxron fs ni serverda ishlatmang",
        "html": "<code>readFileSync</code> butun event loopni bloklaydi: bir foydalanuvchi fayl o'qiyotganda boshqalar kutadi. Faqat ishga tushish skriptlarida yoki CLI'da ishlating. Katta faylni <code>createReadStream</code> bilan bo'laklab o'qing."
      }
    ],
    "quiz": [
      {
        "q": "Faylni asinxron o'qish uchun qaysi API qulay?",
        "options": [
          "fs.readFileSync",
          "path.readFile",
          "fs.existsSync",
          "fs/promises readFile"
        ],
        "answer": 3,
        "explain": "fs/promises readFile promise qaytaradi va await bilan ishlatiladi, event loopni bloklamaydi."
      },
      {
        "q": "Platformalararo yo'l yig'ish uchun nima ishlatiladi?",
        "options": [
          "path.join",
          "String concatenation",
          "process.argv",
          "fs.stat"
        ],
        "answer": 0,
        "explain": "path.join platformaga mos ajratgich qo'yadi va ortiqcha belgilarni to'g'rilaydi."
      },
      {
        "q": "`process.env.PORT` mavjud bo'lmasa qiymati qanday bo'ladi?",
        "options": [
          "Bo'sh string",
          "null",
          "0",
          "undefined"
        ],
        "answer": 3,
        "explain": "Muhit o'zgaruvchisi berilmagan bo'lsa, process.env.PORT undefined bo'ladi; ?? bilan standart qiymat bering."
      }
    ]
  },
  {
    "id": 67,
    "title": "HTTP server va Express asoslari",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Node'ning <code>node:http</code> moduli minimal server yaratadi. <b>Express</b> esa routing, middleware, JSON parsing va xato ishlashini qulaylashtiradi. Har so'rov <code>req</code> (metod, yo'l, header, body) va <code>res</code> (status, header, javob) obyektlari bilan ishlanadi."
      },
      {
        "type": "code",
        "title": "server.mjs",
        "code": "import { createServer } from \"node:http\";\n\nconst server = createServer((req, res) => {\n  console.log(\"so'rov:\", req.method, req.url);\n  res.writeHead(200, { \"content-type\": \"application/json\" });\n  res.end(JSON.stringify({ yol: req.url }));\n});\n\nserver.listen(3000, () => console.log(\"tayyor\"));\n// GET /api/salom so'rovi kelganda:",
        "output": "tayyor\nso'rov: GET /api/salom"
      },
      {
        "type": "p",
        "html": "Express'da <code>app.get</code>, <code>app.post</code> kabi metodlar yo'lni handler bilan bog'laydi. <code>express.json()</code> JSON body'ni <code>req.body</code> ga parslaydi. <code>res.json()</code> javobni JSON qilib yuboradi, status va headerlarni zanjir bilan sozlash mumkin."
      },
      {
        "type": "code",
        "title": "app.mjs",
        "code": "import express from \"express\";\nconst app = express();\napp.use(express.json());\n\napp.get(\"/api/mahsulotlar/:id\", (req, res) => {\n  const id = Number(req.params.id);\n  if (!Number.isInteger(id)) {\n    return res.status(400).json({ xato: \"id butun son bo'lishi kerak\" });\n  }\n  res.json({ id, nom: \"Kitob\" });\n});\n\napp.listen(3000);\n// GET /api/mahsulotlar/42  ->  {\"id\":42,\"nom\":\"Kitob\"}\n// GET /api/mahsulotlar/abc ->  400 {\"xato\":\"id butun son bo'lishi kerak\"}",
        "output": "GET /api/mahsulotlar/42\n{\"id\":42,\"nom\":\"Kitob\"}\nGET /api/mahsulotlar/abc\n400 {\"xato\":\"id butun son bo'lishi kerak\"}"
      },
      {
        "type": "table",
        "head": [
          "Tushuncha",
          "Misol",
          "Izoh"
        ],
        "rows": [
          [
            "Route parametri",
            "/api/vazifa/:id",
            "req.params.id"
          ],
          [
            "Query",
            "/?sahifa=2",
            "req.query.sahifa"
          ],
          [
            "Body",
            "POST JSON",
            "req.body (json middleware)"
          ],
          [
            "Header",
            "Authorization",
            "req.get(\"authorization\")"
          ],
          [
            "Status",
            "201 Created",
            "res.status(201)"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Serverni toza yoping",
        "html": "<code>SIGTERM</code> kelganda yangi so'rovlarni qabul qilishni to'xtatib, mavjudlarini tugating: <code>server.close()</code>. Port band bo'lsa <code>EADDRINUSE</code> xatosi chiqadi — portni env orqali sozlang. Ishlab chiqarishda <code>node --watch</code> emas, process manager yoki konteyner ishlatiladi."
      }
    ],
    "quiz": [
      {
        "q": "Express'da JSON body'ni o'qish uchun nima qo'shiladi?",
        "options": [
          "express.static()",
          "express.json()",
          "express.Router()",
          "bodyParser.html()"
        ],
        "answer": 1,
        "explain": "express.json() middleware JSON body'ni parslab req.body ga joylaydi."
      },
      {
        "q": "`/api/vazifa/15` yo'lidagi 15 qaysi xossada bo'ladi?",
        "options": [
          "req.query.id",
          "req.body.id",
          "req.headers.id",
          "req.params.id"
        ],
        "answer": 3,
        "explain": "Route parametrlari req.params obyektida saqlanadi."
      },
      {
        "q": "Yangi resurs yaratilganda qaysi status kodi mos?",
        "options": [
          "201",
          "200",
          "204",
          "301"
        ],
        "answer": 0,
        "explain": "201 Created yangi resurs yaratilganini bildiradi; Location header manzilni ko'rsatadi."
      }
    ]
  },
  {
    "id": 68,
    "title": "REST API dizayni",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "REST — resurslar atrofida qurilgan arxitektura uslubi. Har resurs o'z URL'iga ega (<code>/api/vazifalar</code>), metodlar amalni bildiradi: <code>GET</code> o'qish, <code>POST</code> yaratish, <code>PATCH</code> qismiy yangilash, <code>DELETE</code> o'chirish. URL'da fe'l emas, <b>ot</b> ishlatiladi."
      },
      {
        "type": "code",
        "title": "routes.mjs",
        "code": "import { Router } from \"express\";\nconst router = Router();\nlet vazifalar = [{ id: 1, nom: \"Kod yozish\", bajarildi: false }];\n\nrouter.get(\"/\", (req, res) => res.json(vazifalar));\n\nrouter.post(\"/\", (req, res) => {\n  const yangi = { id: vazifalar.length + 1, nom: req.body.nom, bajarildi: false };\n  vazifalar.push(yangi);\n  res.status(201).location(`/api/vazifalar/${yangi.id}`).json(yangi);\n});\n\nexport default router;\n// POST /api/vazifalar {\"nom\":\"Testlar\"}",
        "output": "201 Created\nLocation: /api/vazifalar/2\n{\"id\":2,\"nom\":\"Testlar\",\"bajarildi\":false}"
      },
      {
        "type": "p",
        "html": "Resurs nomi ko'plikda bo'lsin: <code>vazifalar</code>, <code>foydalanuvchilar</code>. Filtrlash va sahifalash query orqali: <code>?bajarildi=true&amp;sahifa=2</code>. Javobda izchil konvert ishlating: <code>{ data, meta }</code> yoki xatoda <code>{ xato, tafsilot }</code>. Bu klientni oldindan aytib bo'ladigan qiladi."
      },
      {
        "type": "code",
        "title": "klient.mjs",
        "code": "const javob = await fetch(\"http://localhost:3000/api/vazifalar\", {\n  method: \"POST\",\n  headers: { \"content-type\": \"application/json\" },\n  body: JSON.stringify({ nom: \"Testlar\" }),\n});\nconsole.log(javob.status, javob.headers.get(\"location\"));\nconsole.log(await javob.json());",
        "output": "201 /api/vazifalar/2\n{ id: 2, nom: 'Testlar', bajarildi: false }"
      },
      {
        "type": "table",
        "head": [
          "Amal",
          "Metod",
          "Muvaffaqiyat"
        ],
        "rows": [
          [
            "Ro'yxat",
            "GET /vazifalar",
            "200"
          ],
          [
            "Bitta resurs",
            "GET /vazifalar/:id",
            "200 yoki 404"
          ],
          [
            "Yaratish",
            "POST /vazifalar",
            "201 + Location"
          ],
          [
            "To'liq almashtirish",
            "PUT /vazifalar/:id",
            "200 yoki 204"
          ],
          [
            "Qismiy yangilash",
            "PATCH /vazifalar/:id",
            "200"
          ],
          [
            "O'chirish",
            "DELETE /vazifalar/:id",
            "204"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Idempotentlik",
        "html": "<code>GET</code>, <code>PUT</code> va <code>DELETE</code> idempotent: bir xil so'rovni takrorlash natijani o'zgartirmaydi. <code>POST</code> esa har safar yangi resurs yaratadi. Tarmoq uzilib qayta yuborilganda dublikat yaratmaslik uchun <code>Idempotency-Key</code> headeridan foydalaning."
      }
    ],
    "quiz": [
      {
        "q": "REST'da resursni qismiy yangilash uchun qaysi metod mos?",
        "options": [
          "PUT",
          "POST",
          "PATCH",
          "DELETE"
        ],
        "answer": 2,
        "explain": "PATCH faqat yuborilgan maydonlarni yangilaydi; PUT resursni to'liq almashtiradi."
      },
      {
        "q": "Resurs muvaffaqiyatli o'chirilganda odatda qaysi status qaytariladi?",
        "options": [
          "200",
          "201",
          "404",
          "204"
        ],
        "answer": 3,
        "explain": "204 No Content javob tanasi yo'qligini bildiradi va DELETE uchun odatiy tanlovdir."
      },
      {
        "q": "Filtrlash parametrlari qayerda yuborilishi kerak?",
        "options": [
          "URL query qismida",
          "HTTP body ichida",
          "Headerda",
          "Faqat cookie'da"
        ],
        "answer": 0,
        "explain": "GET so'rovlarida filtr, saralash va sahifalash query parametrlari orqali beriladi."
      }
    ]
  },
  {
    "id": 69,
    "title": "Middleware, validatsiya va markaziy xatolar",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Express'da middleware — <code>(req, res, next)</code> funksiyasi. U so'rovni o'zgartirishi, tekshirishi yoki to'xtatishi mumkin. Middleware'lar <b>ro'yxatga olingan tartibda</b> ishlaydi, shuning uchun autentifikatsiya va validatsiya route'dan oldin turishi kerak."
      },
      {
        "type": "code",
        "title": "logger.mjs",
        "code": "function logger(req, res, next) {\n  res.on(\"finish\", () => {\n    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`);\n  });\n  next();\n}\n\napp.use(logger);\n// GET /api/vazifalar muvaffaqiyatli javob berganda:",
        "output": "GET /api/vazifalar -> 200"
      },
      {
        "type": "p",
        "html": "Validatsiya chegarada bajarilishi kerak: foydalanuvchi kiritgan ma'lumot ishonchsiz. <b>Zod</b> sxemasi maydonlarni tekshiradi va xato tafsilotini beradi. Yaroqsiz ma'lumot uchun <code>422 Unprocessable Entity</code> yoki sintaksis xatosi uchun <code>400</code> mos keladi."
      },
      {
        "type": "code",
        "title": "validatsiya.mjs",
        "code": "import { z } from \"zod\";\nconst Sxema = z.object({\n  nom: z.string().min(3),\n  bajarildi: z.boolean().optional(),\n});\n\napp.post(\"/api/vazifalar\", (req, res) => {\n  const natija = Sxema.safeParse(req.body);\n  if (!natija.success) {\n    return res.status(422).json({\n      xato: \"Validatsiya\",\n      tafsilot: natija.error.issues[0].message,\n    });\n  }\n  res.status(201).json(natija.data);\n});\n// POST {\"nom\":\"ab\"}",
        "output": "422\n{\"xato\":\"Validatsiya\",\"tafsilot\":\"String must contain at least 3 character(s)\"}"
      },
      {
        "type": "ul",
        "items": [
          "Xato ishlovchisi <b>to'rt argumentli</b> bo'lishi shart: <code>(err, req, res, next)</code>.",
          "Async handlerlardagi xatoni <code>next(err)</code> bilan uzatish yoki Express 5 da avtomatik ushlashdan foydalaning.",
          "Mijozga stack trace va ichki yo'llarni ko'rsatmang; 500 uchun umumiy xabar qaytaring.",
          "Har javobda <code>xato</code> kodi va <code>requestId</code> bo'lsin — log bilan bog'lash oson."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "next() ni unutmang",
        "html": "Middleware <code>next()</code> chaqirmasa, so'rov osilib qoladi. Javob yuborilgandan keyin <code>next()</code> chaqirmang: <code>return res.status(...).json(...)</code> yozing. Xato ishlovchisi eng oxirida, boshqa middleware va route'lardan keyin turishi kerak."
      }
    ],
    "quiz": [
      {
        "q": "Express'da xato ishlovchisi nechta parametr qabul qiladi?",
        "options": [
          "4",
          "3",
          "2",
          "5"
        ],
        "answer": 0,
        "explain": "Xato middleware (err, req, res, next) — to'rt parametrli bo'lishi bilan ajralib turadi."
      },
      {
        "q": "Yaroqsiz biznes ma'lumot uchun qaysi status ko'proq mos?",
        "options": [
          "401",
          "404",
          "422",
          "500"
        ],
        "answer": 2,
        "explain": "422 sintaksis to'g'ri, lekin mazmunan yaroqsiz ma'lumotni bildiradi."
      },
      {
        "q": "Middleware tartibi nima uchun muhim?",
        "options": [
          "Express ularni alifbo bo'yicha saralaydi",
          "Ular ro'yxatga olingan tartibda ishlaydi",
          "Faqat bittasi ishlaydi",
          "Tartib faqat loglarga ta'sir qiladi"
        ],
        "answer": 1,
        "explain": "Middleware zanjiri ro'yxatga olish tartibida bajariladi; auth va validatsiya route'dan oldin turishi kerak."
      }
    ]
  },
  {
    "id": 70,
    "title": "Autentifikatsiya: cookie, sessiya va JWT",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Autentifikatsiya — «kim siz?» degan savolga javob. Sessiyada holat serverda saqlanadi va brauzerga faqat <code>sessionId</code> cookie beriladi. JWT'da esa foydalanuvchi ma'lumoti <b>imzolangan token</b> ichida keladi. Ikkalasining xavfsizlik chegaralari har xil."
      },
      {
        "type": "code",
        "title": "jwt-imzo.mjs",
        "code": "import { createHmac, timingSafeEqual } from \"node:crypto\";\n\nconst maxfiy = \"dev-secret\";\nconst header = Buffer.from(JSON.stringify({ alg: \"HS256\", typ: \"JWT\" })).toString(\"base64url\");\nconst payload = Buffer.from(JSON.stringify({ sub: 7, rol: \"admin\" })).toString(\"base64url\");\nconst imzo = createHmac(\"sha256\", maxfiy).update(`${header}.${payload}`).digest(\"base64url\");\nconst token = `${header}.${payload}.${imzo}`;\nconst tekshir = createHmac(\"sha256\", maxfiy)\n  .update(token.split(\".\").slice(0, 2).join(\".\"))\n  .digest(\"base64url\");\nconsole.log(timingSafeEqual(Buffer.from(imzo), Buffer.from(tekshir)));",
        "output": "true"
      },
      {
        "type": "p",
        "html": "Haqiqiy JWT uch qismdan iborat: <code>header.payload.signature</code>. Imzo maxfiy kalit bilan hisoblanadi va uni <b>faqat server</b> tekshira oladi. Token ichidagi ma'lumot shifrlanmagan — uni o'qish mumkin, shuning uchun parol yoki maxfiy ma'lumot joylamang. Muddati <code>exp</code> bilan cheklanadi."
      },
      {
        "type": "code",
        "title": "parol.mjs",
        "code": "import { scrypt, randomBytes } from \"node:crypto\";\nimport { promisify } from \"node:util\";\n\nconst scryptAsync = promisify(scrypt);\nconst tuz = randomBytes(16).toString(\"hex\");\nconst saqlangan = await scryptAsync(\"maxfiy123\", tuz, 64);\nconsole.log(Buffer.isBuffer(saqlangan), saqlangan.length, tuz.length);",
        "output": "true 64 32"
      },
      {
        "type": "table",
        "head": [
          "Yondashuv",
          "Holat qayerda",
          "Bekor qilish",
          "Mos holat"
        ],
        "rows": [
          [
            "Sessiya + cookie",
            "Serverda (xotira/DB)",
            "Darhol",
            "An'anaviy veb-ilova"
          ],
          [
            "JWT access token",
            "Tokenda",
            "Muddat tugaguncha qiyin",
            "API va mobil klient"
          ],
          [
            "JWT + refresh",
            "Tokenda + serverda",
            "Refresh bekor qilinadi",
            "Uzoq sessiyali SPA"
          ],
          [
            "OAuth/OIDC",
            "Provayderda",
            "Provayder orqali",
            "Tashqi identifikatsiya"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Cookie sozlamalari",
        "html": "Sessiya cookie'si <code>HttpOnly</code> (JS o'qimaydi), <code>Secure</code> (faqat HTTPS) va <code>SameSite=Lax</code> yoki <code>Strict</code> bo'lsin. JWT ni <code>localStorage</code> ga qo'yish XSS'da o'g'irlanish xavfini oshiradi; imkon bo'lsa HttpOnly cookie ishlating. Parolni hech qachon oddiy hash yoki o'z algoritmingiz bilan saqlamang."
      }
    ],
    "quiz": [
      {
        "q": "JWT ichidagi payload odatda qanday himoyalangan?",
        "options": [
          "Shifrlangan",
          "Faqat imzolangan, o'qish mumkin",
          "Parol bilan yopilgan",
          "Hech qanday himoya yo'q"
        ],
        "answer": 1,
        "explain": "JWT payload base64url bilan kodlanadi, shifrlanmaydi; imzo o'zgartirilishini aniqlaydi, lekin maxfiylikni ta'minlamaydi."
      },
      {
        "q": "Sessiya cookie'siga `HttpOnly` qo'yishning maqsadi nima?",
        "options": [
          "JavaScript cookie'ni o'qishini bloklash",
          "Cookie hajmini kamaytirish",
          "Faqat HTTPS da yuborish",
          "Cookie'ni o'chirish"
        ],
        "answer": 0,
        "explain": "HttpOnly cookie document.cookie orqali o'qilmaydi, shuning uchun XSS orqali sessiyani o'g'irlash qiyinlashadi."
      },
      {
        "q": "Parolni saqlashda qaysi yondashuv to'g'ri?",
        "options": [
          "Tuz bilan sekin KDF (scrypt/argon2)",
          "Base64 kodlash",
          "MD5 hash",
          "Oddiy matn"
        ],
        "answer": 0,
        "explain": "Tuzli scrypt yoki argon2 parolni sekin va qimmat tekshiradi, rainbow table va brute force ga qarshi turadi."
      }
    ]
  },
  {
    "id": 71,
    "title": "Ma'lumotlar bazasi: SQLite va Prisma",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Backend ma'lumotni qayergadir saqlashi kerak. <b>SQLite</b> — bitta faylda ishlaydigan relyatsion baza: o'rnatish oson, kichik va o'rta loyihalar uchun yetarli. <b>Prisma</b> — TypeScript bilan ishlaydigan ORM: sxema, migratsiya va tur xavfsiz so'rovlarni beradi."
      },
      {
        "type": "code",
        "title": "sqlite.mjs",
        "code": "import { DatabaseSync } from \"node:sqlite\";\n\nconst db = new DatabaseSync(\":memory:\");\ndb.exec(\"CREATE TABLE vazifa (id INTEGER PRIMARY KEY, nom TEXT NOT NULL, bajarildi INTEGER DEFAULT 0)\");\nconst qosh = db.prepare(\"INSERT INTO vazifa (nom) VALUES (?)\");\nqosh.run(\"Kod yozish\");\nqosh.run(\"Testlar\");\nconst qatorlar = db.prepare(\"SELECT id, nom FROM vazifa ORDER BY id\").all()\n  .map((q) => ({ id: q.id, nom: q.nom }));\nconsole.log(qatorlar);",
        "output": "[ { id: 1, nom: 'Kod yozish' }, { id: 2, nom: 'Testlar' } ]"
      },
      {
        "type": "p",
        "html": "So'rovda qiymatlarni <code>?</code> bilan parametr qilib bering: bu <b>SQL injection</b> ning oldini oladi. <code>run()</code> natijasida <code>lastInsertRowid</code> va <code>changes</code> bo'ladi. Ko'p qatorli o'zgarishlarni tranzaksiyaga o'rang: xato bo'lsa hammasi qaytariladi."
      },
      {
        "type": "code",
        "title": "prisma.mjs",
        "code": "const foydalanuvchi = await prisma.user.create({\n  data: { email: \"aziza@noldan.uz\", ism: \"Aziza\" },\n  select: { id: true, ism: true },\n});\nconsole.log(foydalanuvchi);\n\nconst soni = await prisma.user.count({\n  where: { ism: { contains: \"Aziza\" } },\n});\nconsole.log(soni);",
        "output": "{ id: 1, ism: 'Aziza' }\n1"
      },
      {
        "type": "table",
        "head": [
          "Tushuncha",
          "Vazifasi",
          "Misol"
        ],
        "rows": [
          [
            "Schema",
            "Jadval va munosabatlar tavsifi",
            "model Vazifa { ... }"
          ],
          [
            "Migration",
            "Baza strukturasini versiyalash",
            "prisma migrate dev"
          ],
          [
            "select",
            "Faqat kerakli maydonlar",
            "select: { id: true }"
          ],
          [
            "include",
            "Bog'langan yozuvlar",
            "include: { egasi: true }"
          ],
          [
            "transaction",
            "Bir nechta amal atomar",
            "prisma.$transaction"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "N+1 so'rov",
        "html": "Ro'yxatni olib, har element uchun alohida so'rov yuborish N+1 muammosidir. <code>include</code> yoki <code>join</code> bilan bitta so'rovda oling. Katta jadvallarda <code>LIMIT</code> va indeks qo'shing: <code>WHERE email = ?</code> uchun <code>email</code> indeksi bo'lishi kerak."
      }
    ],
    "quiz": [
      {
        "q": "SQL injection dan himoyalanishning asosiy usuli qaysi?",
        "options": [
          "So'rovni string birlashtirish bilan qurish",
          "Faqat GET ishlatish",
          "Parametrlangan so'rovlar",
          "Xatoni yashirish"
        ],
        "answer": 2,
        "explain": "Parametrlar so'rov matnidan alohida uzatiladi, shuning uchun kiritilgan qiymat SQL sifatida bajarilmaydi."
      },
      {
        "q": "Prisma migratsiyasi nima uchun kerak?",
        "options": [
          "API tezligini oshirish",
          "Baza sxemasini versiyalab, jamoada bir xil struktura berish",
          "Parolni shifrlash",
          "Frontendni build qilish"
        ],
        "answer": 1,
        "explain": "Migratsiyalar sxema o'zgarishlarini tarix sifatida saqlaydi va barcha muhitlarda bir xil bazani yaratadi."
      },
      {
        "q": "N+1 muammosini qanday kamaytirish mumkin?",
        "options": [
          "Har element uchun alohida so'rov",
          "Barcha maydonlarni select qilish",
          "Ko'proq indeks qo'shish",
          "include yoki join bilan bog'liq ma'lumotni birga olish"
        ],
        "answer": 3,
        "explain": "Bog'liq yozuvlarni bitta so'rovda olish N+1 takroriy so'rovlarni yo'q qiladi."
      }
    ]
  },
  {
    "id": 72,
    "title": "WebSocket bilan real vaqt",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "HTTP so'rov-javob modelida server o'zi mijozga xabar yubora olmaydi. <b>WebSocket</b> bitta TCP ulanish ustida ikki tomonlama kanal ochadi: xabarlar istalgan payt, istalgan tomondan keladi. Chat, hamkorlikdagi tahrirlash va onlayn holat uchun mos."
      },
      {
        "type": "code",
        "title": "ws-client.js",
        "code": "const ws = new WebSocket(\"wss://echo.example.com\");\nws.addEventListener(\"open\", () => {\n  ws.send(JSON.stringify({ tur: \"salom\", ism: \"Aziza\" }));\n});\nws.addEventListener(\"message\", (event) => {\n  const xabar = JSON.parse(event.data);\n  console.log(xabar.tur, xabar.matn);\n  ws.close(1000, \"tugadi\");\n});\nws.addEventListener(\"close\", (event) => console.log(\"yopildi\", event.code));",
        "output": "salom Salom, Aziza!\nyopildi 1000"
      },
      {
        "type": "p",
        "html": "Ulanish holati <code>readyState</code> da: 0 — CONNECTING, 1 — OPEN, 2 — CLOSING, 3 — CLOSED. Xabar yuborishdan oldin ochilishini kuting. Uzilishda avtomatik qayta ulanish va <b>exponential backoff</b> qo'shing, aks holda server yiqilganda barcha klientlar bir vaqtda hujum qiladi."
      },
      {
        "type": "code",
        "title": "ws-server.mjs",
        "code": "import { WebSocketServer } from \"ws\";\n\nconst wss = new WebSocketServer({ port: 8080 });\nwss.on(\"connection\", (socket) => {\n  socket.send(\"ulandi\");\n  socket.on(\"message\", (data) => {\n    for (const client of wss.clients) {\n      if (client.readyState === 1) client.send(data.toString());\n    }\n  });\n});\nconsole.log(\"ws://localhost:8080\");",
        "output": "ws://localhost:8080"
      },
      {
        "type": "table",
        "head": [
          "Holat",
          "Qiymat",
          "Ma'nosi"
        ],
        "rows": [
          [
            "CONNECTING",
            "0",
            "Ulanish davom etmoqda"
          ],
          [
            "OPEN",
            "1",
            "Xabar yuborish mumkin"
          ],
          [
            "CLOSING",
            "2",
            "Yopilmoqda"
          ],
          [
            "CLOSED",
            "3",
            "Yopilgan"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Xavfsizlik va masshtab",
        "html": "Faqat <code>wss://</code> ishlating. Har bir xabarni serverda qayta validatsiya qiling: kelgan JSON ishonchsiz. Bir nechta server bo'lsa, xabarlarni Redis Pub/Sub orqali tarqating. Yurak urishi (ping/pong) bilan o'lik ulanishlarni aniqlang."
      }
    ],
    "quiz": [
      {
        "q": "WebSocket ning HTTP dan asosiy farqi nimada?",
        "options": [
          "Faqat matn yuboradi",
          "Har doim sekinroq",
          "Ikki tomonlama doimiy ulanish beradi",
          "Cookie ishlatmaydi"
        ],
        "answer": 2,
        "explain": "WebSocket bitta doimiy ulanishda ikki tomonlama xabar almashish imkonini beradi."
      },
      {
        "q": "`readyState` qiymati 1 nimani bildiradi?",
        "options": [
          "Ulanish ochiq",
          "Ulanish davom etmoqda",
          "Ulanish yopilgan",
          "Xabar kutilmoqda"
        ],
        "answer": 0,
        "explain": "1 — OPEN; faqat shu holatda xabar yuborish xavfsiz."
      },
      {
        "q": "Qayta ulanishda backoff nima uchun kerak?",
        "options": [
          "Server yiqilganda klientlarning bir vaqtda hujumini oldini olish uchun",
          "Xabarlarni siqish uchun",
          "Tokenni yangilash uchun",
          "Ulanishni tezlashtirish uchun"
        ],
        "answer": 0,
        "explain": "Kutish vaqtini eksponensial oshirish bir vaqtda qayta ulanish to'lqinini yumshatadi."
      }
    ]
  },
  {
    "id": 73,
    "title": "Server-Sent Events va realtime patternlar",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Har doim ham ikki tomonlama kanal kerak emas. <b>Server-Sent Events</b> (SSE) serverdan klientga <b>bir tomonlama</b> oqim beradi: yangiliklar, progress, bildirishnomalar. U oddiy HTTP ustida ishlaydi, <code>EventSource</code> esa uzilishda avtomatik qayta ulanadi."
      },
      {
        "type": "code",
        "title": "sse-server.mjs",
        "code": "app.get(\"/api/yangiliklar\", (req, res) => {\n  res.set({\n    \"Content-Type\": \"text/event-stream\",\n    \"Cache-Control\": \"no-cache\",\n    Connection: \"keep-alive\",\n  });\n  const timer = setInterval(() => {\n    res.write(\"event: yangilik\\n\");\n    res.write(`data: ${JSON.stringify({ vaqt: Date.now() })}\\n\\n`);\n  }, 1000);\n  req.on(\"close\", () => clearInterval(timer));\n});",
        "output": "event: yangilik\ndata: {\"vaqt\":1750000000000}"
      },
      {
        "type": "p",
        "html": "SSE formati oddiy matn: <code>event:</code> nomi, <code>data:</code> qatori va bo'sh qator bilan ajratilgan blok. <code>id:</code> bilan oxirgi hodisa belgilanadi; qayta ulanganda brauzer <code>Last-Event-ID</code> headerini yuboradi. Bu uzilgan joydan davom etish imkonini beradi."
      },
      {
        "type": "code",
        "title": "sse-client.js",
        "code": "const manba = new EventSource(\"/api/yangiliklar\");\nmanba.addEventListener(\"yangilik\", (event) => {\n  const data = JSON.parse(event.data);\n  console.log(\"yangi xabar\", typeof data.vaqt);\n});\nmanba.onerror = () => console.log(\"qayta ulanmoqda\");",
        "output": "yangi xabar number"
      },
      {
        "type": "table",
        "head": [
          "Pattern",
          "Yo'nalish",
          "Mos holat"
        ],
        "rows": [
          [
            "SSE",
            "Serverdan klientga",
            "Yangiliklar, progress, holat"
          ],
          [
            "WebSocket",
            "Ikki tomonlama",
            "Chat, o'yin, hamkorlik"
          ],
          [
            "Polling",
            "Klient so'raydi",
            "Oddiy, kam yangilanish"
          ],
          [
            "Long polling",
            "Klient kutadi",
            "Eski brauzerlar"
          ],
          [
            "Webhook",
            "Serverdan serverga",
            "To'lov, integratsiya"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Proksi va bufer",
        "html": "Nginx kabi proksilar SSE javobini buferlab qo'yishi mumkin: <code>X-Accel-Buffering: no</code> qo'shing yoki buferni o'chiring. Ulanishni ochiq ushlash uchun davriy izoh qatori (<code>: ping</code>) yuboring. HTTP/1.1 da brauzer bir domenga cheklangan sondagi ulanish ochadi."
      }
    ],
    "quiz": [
      {
        "q": "SSE oqimi qaysi yo'nalishda ishlaydi?",
        "options": [
          "Klientdan serverga",
          "Faqat serverdan serverga",
          "Ikki tomonlama",
          "Serverdan klientga"
        ],
        "answer": 3,
        "explain": "SSE faqat serverdan klientga hodisalar yuboradi; klient so'rov yuborish uchun oddiy fetch ishlatadi."
      },
      {
        "q": "SSE uzilganda EventSource odatda nima qiladi?",
        "options": [
          "WebSocket ga o'tadi",
          "Sahifani yangilaydi",
          "Xatoni yashiradi",
          "Avtomatik qayta ulanadi"
        ],
        "answer": 3,
        "explain": "EventSource qayta ulanishni o'zi amalga oshiradi va Last-Event-ID bilan davom etadi."
      },
      {
        "q": "SSE javobining content-type qanday bo'lishi kerak?",
        "options": [
          "application/json",
          "text/html",
          "text/event-stream",
          "application/octet-stream"
        ],
        "answer": 2,
        "explain": "text/event-stream brauzerga bu oddiy hodisa oqimi ekanini bildiradi."
      }
    ]
  },
  {
    "id": 74,
    "title": "IndexedDB: brauzerdagi ma'lumotlar bazasi",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "<code>localStorage</code> faqat matn saqlaydi va kichik hajmga mo'ljallangan. <b>IndexedDB</b> esa katta hajmdagi obyektlarni, indekslarni va tranzaksiyalarni qo'llab-quvvatlaydi. U asinxron ishlaydi, shuning uchun katta ma'lumot bilan sahifani bloklamaydi."
      },
      {
        "type": "code",
        "title": "idb-yozish.js",
        "code": "const sorov = indexedDB.open(\"noldan\", 1);\nsorov.onupgradeneeded = () => {\n  const db = sorov.result;\n  const ombor = db.createObjectStore(\"vazifalar\", { keyPath: \"id\", autoIncrement: true });\n  ombor.createIndex(\"nom\", \"nom\", { unique: false });\n};\nsorov.onsuccess = () => {\n  const db = sorov.result;\n  const tx = db.transaction(\"vazifalar\", \"readwrite\");\n  tx.objectStore(\"vazifalar\").add({ nom: \"Kod yozish\", bajarildi: false });\n  tx.oncomplete = () => console.log(\"saqlandi\");\n};",
        "output": "saqlandi"
      },
      {
        "type": "p",
        "html": "Baza versiyasi <code>onupgradeneeded</code> da o'zgartiriladi: yangi ombor yoki indeks shu yerda yaratiladi. Tranzaksiya <b>avtomatik yopiladi</b>: agar <code>await</code> bilan begona asinxron ish qo'shsangiz, tranzaksiya faol bo'lmay qolishi mumkin. Shu sababli IDB'ni promise'ga o'rashda ehtiyot bo'ling."
      },
      {
        "type": "code",
        "title": "idb-oqish.js",
        "code": "function hammasi() {\n  return new Promise((resolve, reject) => {\n    const sorov = indexedDB.open(\"noldan\", 1);\n    sorov.onsuccess = () => {\n      const db = sorov.result;\n      const tx = db.transaction(\"vazifalar\", \"readonly\");\n      const so = tx.objectStore(\"vazifalar\").getAll();\n      so.onsuccess = () => resolve(so.result);\n      so.onerror = () => reject(so.error);\n    };\n    sorov.onerror = () => reject(sorov.error);\n  });\n}\nconsole.log(await hammasi());",
        "output": "[ { id: 1, nom: 'Kod yozish', bajarildi: false } ]"
      },
      {
        "type": "ul",
        "items": [
          "<code>keyPath</code> — yozuvning asosiy kaliti; <code>autoIncrement</code> yangi id beradi.",
          "<code>createIndex</code> bo'yicha tez qidirish mumkin: <code>index(\"nom\").getAll(\"Kod\")</code>.",
          "<code>readonly</code> tranzaksiya parallel o'qishga, <code>readwrite</code> yozishga ruxsat beradi.",
          "Katta hajm uchun <code>navigator.storage.estimate()</code> bilan kvotani tekshiring."
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Kutubxonadan foydalaning",
        "html": "Xom IndexedDB API juda og'iz. <b>idb</b> kutubxonasi promise o'ramini beradi: <code>await db.get(\"vazifalar\", 1)</code>. Offline-first ilovalarda <b>Dexie</b> yoki <b>RxDB</b> kabi qatlamlar migratsiya va so'rovlarni soddalashtiradi. Ma'lumotni server bilan sinxronlash siyosatini oldindan belgilang."
      }
    ],
    "quiz": [
      {
        "q": "IndexedDB da yozuvning asosiy kaliti qaysi sozlama bilan belgilanadi?",
        "options": [
          "keyPath",
          "index",
          "primary",
          "idField"
        ],
        "answer": 0,
        "explain": "createObjectStore da keyPath asosiy kalit maydonini ko'rsatadi; autoIncrement bilan avtomatik id beriladi."
      },
      {
        "q": "Baza sxemasi qaysi hodisada o'zgartiriladi?",
        "options": [
          "onsuccess",
          "onupgradeneeded",
          "oncomplete",
          "onerror"
        ],
        "answer": 1,
        "explain": "onupgradeneeded faqat versiya oshganda ishga tushadi va ombor/indeks yaratish uchun joy."
      },
      {
        "q": "Ma'lumotni o'qish uchun qaysi tranzaksiya rejimi ishlatiladi?",
        "options": [
          "readwrite",
          "readonly",
          "versionchange",
          "exclusive"
        ],
        "answer": 1,
        "explain": "readonly tranzaksiya faqat o'qishga ruxsat beradi va bir nechta o'quvchi bilan parallel ishlaydi."
      }
    ]
  },
  {
    "id": 75,
    "title": "Service Worker va PWA",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "<b>Service Worker</b> — brauzer va tarmoq o'rtasidagi proksi-skript. U sahifadan alohida oqimda ishlaydi, so'rovlarni ushlab keshlaydi, offline rejim va fon sinxronizatsiyasini beradi. PWA uchun HTTPS, manifest va service worker kerak."
      },
      {
        "type": "code",
        "title": "sw.js",
        "code": "const CACHE = \"noldan-v1\";\nself.addEventListener(\"install\", (event) => {\n  event.waitUntil(\n    caches.open(CACHE).then((cache) => cache.addAll([\"/\", \"/app.js\", \"/style.css\"]))\n  );\n  self.skipWaiting();\n});\nself.addEventListener(\"activate\", (event) => {\n  event.waitUntil(\n    caches.keys().then((kalitlar) =>\n      Promise.all(kalitlar.filter((k) => k !== CACHE).map((k) => caches.delete(k)))\n    )\n  );\n  self.clients.claim();\n});\nconsole.log(\"Service Worker tayyor\");",
        "output": "Service Worker tayyor"
      },
      {
        "type": "p",
        "html": "O'rnatishda statik fayllar keshlanadi. <code>activate</code> da eski kesh versiyalari o'chiriladi. <code>fetch</code> hodisasida javob strategiyasi tanlanadi: <b>cache-first</b> tez, <b>network-first</b> yangi, <b>stale-while-revalidate</b> ikkalasini birlashtiradi."
      },
      {
        "type": "code",
        "title": "register.js",
        "code": "if (\"serviceWorker\" in navigator) {\n  window.addEventListener(\"load\", async () => {\n    const reg = await navigator.serviceWorker.register(\"/sw.js\");\n    console.log(\"scope:\", reg.scope);\n  });\n}",
        "output": "scope: https://noldan.uz/"
      },
      {
        "type": "table",
        "head": [
          "Strategiya",
          "Afzalligi",
          "Kamchiligi"
        ],
        "rows": [
          [
            "Cache first",
            "Tez, offline ishlaydi",
            "Eski kontent ko'rinishi mumkin"
          ],
          [
            "Network first",
            "Doim yangi",
            "Sekin va offline da ishlamaydi"
          ],
          [
            "Stale-while-revalidate",
            "Tez + fon yangilanishi",
            "Birinchi javob eski bo'lishi mumkin"
          ],
          [
            "Network only",
            "Yangilik kafolati",
            "Offline tajriba yo'q"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Keshni versiyalang",
        "html": "Service Worker o'zi ham keshlanadi: yangilanish uchun yangi SW faylini bering va <code>skipWaiting</code> + <code>clients.claim</code> bilan faollashtiring. Kesh nomiga versiya qo'shmang — eski fayllar abadiy qoladi. Foydalanuvchiga «yangi versiya tayyor» bildirishnomasini ko'rsating."
      }
    ],
    "quiz": [
      {
        "q": "Service Worker qaysi sharoitda ro'yxatdan o'tadi?",
        "options": [
          "Faqat HTTP da",
          "Faqat mobil brauzerda",
          "HTTPS yoki localhost da",
          "Fayl protokolida"
        ],
        "answer": 2,
        "explain": "Service Worker xavfsiz kontekst talab qiladi: HTTPS yoki localhost."
      },
      {
        "q": "`install` hodisasida odatda nima qilinadi?",
        "options": [
          "WebSocket ochiladi",
          "Baza o'chiriladi",
          "Foydalanuvchi tizimga kiradi",
          "Statik fayllar keshlanadi"
        ],
        "answer": 3,
        "explain": "install bosqichida ilova qobig'i uchun kerakli statik resurslar keshga olinadi."
      },
      {
        "q": "Cache-first strategiyasining asosiy kamchiligi nima?",
        "options": [
          "Offline ishlamaydi",
          "Har doim sekin",
          "Foydalanuvchi eski kontentni ko'rishi mumkin",
          "HTTPS talab qiladi"
        ],
        "answer": 2,
        "explain": "Keshda mavjud javob darhol qaytariladi, shuning uchun yangilanish kechikishi mumkin."
      }
    ]
  },
  {
    "id": 76,
    "title": "Web Workers va og'ir hisoblar",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Og'ir hisob asosiy oqimda bajarilsa, sahifa muzlaydi. <b>Web Worker</b> alohida oqimda ishlaydi va asosiy oqimni bo'shatadi. Worker DOM'ga murojaat qila olmaydi, lekin <code>postMessage</code> orqali ma'lumot almashadi. Ma'lumot <b>structured clone</b> bilan nusxalanadi."
      },
      {
        "type": "code",
        "title": "worker.js",
        "code": "self.onmessage = (event) => {\n  const { son } = event.data;\n  let jami = 0;\n  for (let i = 1; i <= son; i += 1) jami += i;\n  self.postMessage({ son, jami });\n};\nconsole.log(\"worker ishga tushdi\");",
        "output": "worker ishga tushdi"
      },
      {
        "type": "p",
        "html": "Asosiy oqim worker yaratadi va xabar yuboradi. Javob <code>onmessage</code> da keladi. Worker'ni ish tugagach <code>terminate()</code> bilan to'xtatish mumkin. Bir nechta vazifani parallel bajarish uchun worker pool yarating — har vazifaga yangi worker ochish qimmat."
      },
      {
        "type": "code",
        "title": "main.js",
        "code": "const worker = new Worker(\"./worker.js\");\nworker.postMessage({ son: 100 });\nworker.onmessage = (event) => {\n  console.log(event.data);\n  worker.terminate();\n};",
        "output": "{ son: 100, jami: 5050 }"
      },
      {
        "type": "ul",
        "items": [
          "<code>type: \"module\"</code> bilan worker ichida ESM import ishlatiladi.",
          "<b>Transferable</b> obyektlar (ArrayBuffer, MessagePort) nusxalanmaydi, egalik ko'chadi.",
          "Worker'da <code>fetch</code>, IndexedDB, WebSocket mavjud; DOM va <code>window</code> yo'q.",
          "SharedWorker bir nechta tab o'rtasida bitta oqimni bo'lishadi.",
          "Og'ir hisob uchun <code>OffscreenCanvas</code> bilan rasmni ham worker'da chizing."
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Nusxa qimmat bo'lsa",
        "html": "Katta <code>ArrayBuffer</code> ni <code>postMessage(buf, [buf])</code> bilan uzating: nusxa olinmaydi, lekin yuboruvchida buffer bo'shab qoladi. Har bir xabar uchun yangi worker emas, qayta ishlatiladigan pool saqlang."
      }
    ],
    "quiz": [
      {
        "q": "Web Worker qaysi API'ga murojaat qila olmaydi?",
        "options": [
          "DOM",
          "IndexedDB",
          "fetch",
          "WebSocket"
        ],
        "answer": 0,
        "explain": "Worker'da window va DOM yo'q; u fon oqimida hisob yoki tarmoq ishlarini bajaradi."
      },
      {
        "q": "Transferable obyekt yuborilganda nima bo'ladi?",
        "options": [
          "Egalik boshqa oqimga o'tadi",
          "Ikki nusxa yaratiladi",
          "Obyekt bloklanadi",
          "JSON ga aylanadi"
        ],
        "answer": 0,
        "explain": "Transferable ro'yxatidagi buffer nusxalanmaydi, egasi o'zgaradi va yuboruvchida bo'sh qoladi."
      },
      {
        "q": "Worker bilan asosiy oqim qanday muloqot qiladi?",
        "options": [
          "Sinxron funksiya chaqiruvi bilan",
          "To'g'ridan-to'g'ri DOM orqali",
          "Faqat localStorage orqali",
          "postMessage va onmessage orqali"
        ],
        "answer": 3,
        "explain": "Xabarlar postMessage bilan yuboriladi va onmessage hodisasi orqali qabul qilinadi."
      }
    ]
  },
  {
    "id": 77,
    "title": "Web Components va Shadow DOM",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "<b>Web Components</b> brauzerning o'zida qayta ishlatiladigan elementlar yaratish standarti: <b>Custom Elements</b>, <b>Shadow DOM</b> va <b>HTML templates</b>. Ular frameworkdan mustaqil ishlaydi va oddiy HTML elementi kabi qo'shiladi."
      },
      {
        "type": "code",
        "title": "user-card.js",
        "code": "class UserCard extends HTMLElement {\n  static observedAttributes = [\"ism\"];\n  connectedCallback() {\n    if (!this.shadowRoot) this.attachShadow({ mode: \"open\" });\n    this.render();\n  }\n  attributeChangedCallback() {\n    if (this.shadowRoot) this.render();\n  }\n  render() {\n    this.shadowRoot.innerHTML = `<style>:host{display:block;padding:8px}</style><b>${this.getAttribute(\"ism\")}</b>`;\n  }\n}\ncustomElements.define(\"user-card\", UserCard);\nconst card = document.createElement(\"user-card\");\ncard.setAttribute(\"ism\", \"Aziza\");\ndocument.body.append(card);\nconsole.log(card.shadowRoot.querySelector(\"b\").textContent);",
        "output": "Aziza"
      },
      {
        "type": "p",
        "html": "<code>Shadow DOM</code> ichki stillar va markupni tashqi sahifadan izolyatsiya qiladi. <code>:host</code> elementning o'zini, <code>::slotted()</code> tashqaridan berilgan kontentni tanlaydi. Atribut o'zgarsa <code>attributeChangedCallback</code> qayta render qiladi."
      },
      {
        "type": "code",
        "title": "noldan-tugma.js",
        "code": "class NoldanTugma extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n    this.shadowRoot.innerHTML = `<button><slot></slot></button>`;\n    this.shadowRoot.querySelector(\"button\").addEventListener(\"click\", () => {\n      this.dispatchEvent(new CustomEvent(\"noldan-click\", { bubbles: true, composed: true }));\n    });\n  }\n}\ncustomElements.define(\"noldan-tugma\", NoldanTugma);\ndocument.body.innerHTML = `<noldan-tugma>Saqlash</noldan-tugma>`;\ndocument.querySelector(\"noldan-tugma\").addEventListener(\"noldan-click\", () => console.log(\"bosildi\"));",
        "output": "bosildi"
      },
      {
        "type": "table",
        "head": [
          "Tushuncha",
          "Vazifasi",
          "Eslatma"
        ],
        "rows": [
          [
            "customElements.define",
            "Yangi teg ro'yxatdan o'tkazish",
            "Nomda defis bo'lishi shart"
          ],
          [
            "Shadow DOM",
            "Stillar va DOM izolyatsiyasi",
            "mode: open/closed"
          ],
          [
            "slot",
            "Tashqi kontentni joylash",
            "Light DOM"
          ],
          [
            "observedAttributes",
            "Kuzatiladigan atributlar",
            "attributeChangedCallback"
          ],
          [
            "composed: true",
            "Shadow chegarasidan o'tuvchi hodisa",
            "Tashqi listener uchun"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Framework bilan birga",
        "html": "Web Component'ni React yoki Vue ichida ishlatish mumkin, ammo atribut va hodisalar bilan ishlashda ehtiyot bo'ling: React <code>onNoldanClick</code> o'rniga ref va <code>addEventListener</code> talab qilishi mumkin. Kutubxonalar (Lit) shadow DOM va reaktivlikni soddalashtiradi."
      }
    ],
    "quiz": [
      {
        "q": "Custom element nomi qanday bo'lishi shart?",
        "options": [
          "Kamida bitta defis bilan",
          "Faqat katta harflar",
          "Raqam bilan boshlanishi",
          "x- prefiksi bilan"
        ],
        "answer": 0,
        "explain": "Teg nomida defis bo'lishi kerak (masalan, user-card) — bu oddiy HTML elementlaridan ajratadi."
      },
      {
        "q": "Shadow DOM ning asosiy foydasi nima?",
        "options": [
          "Tarmoq tezligi",
          "Server render",
          "Ma'lumotlar bazasi",
          "Stillar va DOM ning izolyatsiyasi"
        ],
        "answer": 3,
        "explain": "Shadow DOM ichki stillar tashqariga sizib chiqmaydi va tashqi stillar ichkariga ta'sir qilmaydi."
      },
      {
        "q": "Shadow DOM ichidan chiqadigan CustomEvent uchun qaysi bayroq kerak?",
        "options": [
          "composed",
          "bubbles",
          "capture",
          "passive"
        ],
        "answer": 0,
        "explain": "composed: true hodisaga shadow chegarasidan tashqariga o'tishga ruxsat beradi."
      }
    ]
  },
  {
    "id": 78,
    "title": "Core Web Vitals va o'lchash",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Foydalanuvchi tajribasini sub'ektiv taassurot bilan emas, <b>o'lchov</b> bilan yaxshilash kerak. Core Web Vitals uchta asosiy ko'rsatkichdan iborat: <b>LCP</b> (eng katta kontent qachon ko'rindi), <b>INP</b> (kiritishga javob kechikishi) va <b>CLS</b> (layout siljishi)."
      },
      {
        "type": "code",
        "title": "lcp-kuzatish.js",
        "code": "new PerformanceObserver((list) => {\n  for (const entry of list.getEntries()) {\n    console.log(entry.name, Math.round(entry.value));\n  }\n}).observe({ type: \"largest-contentful-paint\", buffered: true });",
        "output": "largest-contentful-paint 1840"
      },
      {
        "type": "p",
        "html": "LCP 2.5 sekundgacha «yaxshi», 4 sekunddan keyin «yomon». INP 200 ms gacha yaxshi, 500 ms dan keyin yomon. CLS 0.1 gacha yaxshi. Bu chegaralar <b>75-percentil</b> bo'yicha baholanadi: sahifaga kirishlarning 75 foizi chegarada bo'lishi kerak."
      },
      {
        "type": "code",
        "title": "web-vitals.js",
        "code": "import { onLCP, onINP, onCLS } from \"web-vitals\";\n\nconst yubor = (metrika) => {\n  console.log(metrika.name, metrika.value.toFixed(3), metrika.rating);\n};\nonLCP(yubor);\nonINP(yubor);\nonCLS(yubor);",
        "output": "LCP 1.842 good\nINP 96.000 good\nCLS 0.021 good"
      },
      {
        "type": "table",
        "head": [
          "Ko'rsatkich",
          "Yaxshi",
          "Yomon",
          "Nimaga ta'sir qiladi"
        ],
        "rows": [
          [
            "LCP",
            "≤ 2.5 s",
            "> 4.0 s",
            "Asosiy kontent yuklanishi"
          ],
          [
            "INP",
            "≤ 200 ms",
            "> 500 ms",
            "Bosish va kiritishga javob"
          ],
          [
            "CLS",
            "≤ 0.1",
            "> 0.25",
            "Layout barqarorligi"
          ],
          [
            "TTFB",
            "≤ 800 ms",
            "> 1.8 s",
            "Server javobi"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Lab va field",
        "html": "Lighthouse — <b>lab</b> o'lchov, real foydalanuvchi ma'lumoti esa <b>field</b>. Ular farq qilishi normal. Field uchun <code>web-vitals</code> ni yig'ib, analyticsga yuboring. Rasm o'lchamlarini bering, shriftlarni <code>font-display: swap</code> bilan yuklang va eng katta elementni erta ko'rsating."
      }
    ],
    "quiz": [
      {
        "q": "LCP nimani o'lchaydi?",
        "options": [
          "Kiritishga javob kechikishini",
          "Eng katta kontent elementi qachon ko'rinishini",
          "Layout siljishini",
          "Server xato foizini"
        ],
        "answer": 1,
        "explain": "Largest Contentful Paint asosiy katta kontent (rasm, sarlavha) qachon ko'ringanini o'lchaydi."
      },
      {
        "q": "INP uchun «yaxshi» chegara qanday?",
        "options": [
          "≤ 50 ms",
          "≤ 500 ms",
          "≤ 200 ms",
          "≤ 2.5 s"
        ],
        "answer": 2,
        "explain": "INP 200 millisekundgacha yaxshi hisoblanadi; 500 ms dan keyin yomon."
      },
      {
        "q": "CLS ning yomon darajasi qaysi qiymatdan boshlanadi?",
        "options": [
          "0.25",
          "0.1",
          "1.0",
          "2.5"
        ],
        "answer": 0,
        "explain": "CLS 0.1 gacha yaxshi, 0.25 dan keyin yomon deb baholanadi."
      }
    ]
  },
  {
    "id": 79,
    "title": "Rendering unumdorligi va layout thrashing",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Brauzer renderi bir necha bosqichdan o'tadi: <b>style</b>, <b>layout</b>, <b>paint</b>, <b>composite</b>. Agar JS har bir elementdan keyin layoutni o'qib, keyin yana yozsangiz, brauzer majburan qayta hisoblaydi. Bu <b>layout thrashing</b> — eng ko'p uchraydigan sekinlashuv sababi."
      },
      {
        "type": "code",
        "title": "thrash.js",
        "code": "const quti = document.querySelector(\"#quti\");\nfor (let i = 0; i < 3; i += 1) {\n  quti.style.width = `${100 + i * 10}px`;\n  console.log(quti.offsetWidth);\n}\n// #quti ning boshlang'ich kengligi 100px",
        "output": "100\n110\n120"
      },
      {
        "type": "p",
        "html": "Yuqoridagi kod har aylanishda yozadi va <code>offsetWidth</code> orqali layoutni majburan hisoblattiradi. Yaxshiroq yondashuv: avval barcha o'qishlarni bajaring, keyin barcha yozishlarni. DOM'ga ko'p element qo'shishda <code>DocumentFragment</code> yoki bitta <code>innerHTML</code> ishlatib, reflow sonini bittaga tushiring."
      },
      {
        "type": "code",
        "title": "fragment.js",
        "code": "const fragment = document.createDocumentFragment();\nfor (let i = 1; i <= 1000; i += 1) {\n  const li = document.createElement(\"li\");\n  li.textContent = `Element ${i}`;\n  fragment.append(li);\n}\ndocument.querySelector(\"#royxat\").append(fragment);\nconsole.log(document.querySelectorAll(\"#royxat li\").length);",
        "output": "1000"
      },
      {
        "type": "table",
        "head": [
          "Xossa",
          "Qaysi bosqichni qo'zg'atadi",
          "Maslahat"
        ],
        "rows": [
          [
            "width, top, left",
            "Layout + paint",
            "Animatsiyada transform ishlating"
          ],
          [
            "color, background",
            "Paint",
            "O'zgarishlar sonini kamaytiring"
          ],
          [
            "transform, opacity",
            "Composite",
            "GPU uchun eng arzon"
          ],
          [
            "content-visibility",
            "Layoutni kechiktirish",
            "Pastdagi bo'limlar uchun"
          ],
          [
            "will-change",
            "Yangi layer",
            "Me'yorida, doimiy emas"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Animatsiyani transformga o'tkazing",
        "html": "<code>left/top</code> animatsiyasi har kadrda layoutni qayta hisoblaydi; <code>transform: translate()</code> esa composite bosqichida ishlaydi. Katta ro'yxatlarda virtualizatsiya qo'llang: faqat ko'rinadigan qatorlarni render qiling. <code>requestAnimationFrame</code> ichida DOM o'zgarishlarini guruhlang."
      }
    ],
    "quiz": [
      {
        "q": "Layout thrashing nima?",
        "options": [
          "CSS fayllarning ko'payishi",
          "Event listener ko'payishi",
          "Rasmlarning kech yuklanishi",
          "O'qish va yozishning almashinib, majburiy reflow chaqirishi"
        ],
        "answer": 3,
        "explain": "Har yozishdan keyin layout o'qilsa, brauzer qayta-qayta layout hisoblaydi va ish sekinlashadi."
      },
      {
        "q": "Ko'p elementni DOM'ga bir marta qo'shish uchun nima ishlatiladi?",
        "options": [
          "DocumentFragment",
          "localStorage",
          "ShadowRoot",
          "MutationObserver"
        ],
        "answer": 0,
        "explain": "DocumentFragment yig'ilgan tugunlarni bitta operatsiyada DOM'ga qo'shadi."
      },
      {
        "q": "Qaysi xossani animatsiya qilish eng arzon?",
        "options": [
          "left",
          "width",
          "transform",
          "margin"
        ],
        "answer": 2,
        "explain": "transform composite bosqichida bajariladi va layout/paint ni qayta ishga tushirmaydi."
      }
    ]
  },
  {
    "id": 80,
    "title": "Xotira, garbage collection va sizib chiqish",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "JavaScript xotirasini <b>garbage collector</b> boshqaradi. U <b>yetib boriladigan</b> (reachable) obyektlarni ildizlardan (global, stack, closure) qidirib topadi; yetib bo'lmaydiganlarini tozalaydi. Sizib chiqish — keraksiz obyektga havola qolib ketishi natijasida xotiraning bo'shamasligi."
      },
      {
        "type": "code",
        "title": "heap.mjs",
        "code": "const boshlanish = process.memoryUsage().heapUsed;\nconst katta = new Array(100_000).fill(\"x\".repeat(20));\nconst oxiri = process.memoryUsage().heapUsed;\nconsole.log(oxiri > boshlanish);\nconsole.log(katta.length);",
        "output": "true\n100000"
      },
      {
        "type": "p",
        "html": "Katta massiv yaratilganda heap o'sadi, lekin bu o'sish doim sizib chiqish degani emas. GC ishga tushgach, yetib bo'lmaydigan ma'lumot bo'shaydi. Muammo — vaqt o'tishi bilan heapning <b>doimiy</b> o'sishi: har navigatsiyada eski komponent, listener yoki kesh saqlanib qolsa, xotira qaytmaydi."
      },
      {
        "type": "code",
        "title": "weakmap.js",
        "code": "const kesh = new WeakMap();\nlet foydalanuvchi = { id: 1 };\nkesh.set(foydalanuvchi, \"admin\");\nconsole.log(kesh.get(foydalanuvchi));\nfoydalanuvchi = null;\nconsole.log(kesh.has(foydalanuvchi));",
        "output": "admin\nfalse"
      },
      {
        "type": "ul",
        "items": [
          "O'chirilgan DOM elementi hali ham JS massivida tursa, u <b>detached DOM</b> sizib chiqishi bo'ladi.",
          "<code>setInterval</code> va <code>addEventListener</code> ni tozalashni unutmang.",
          "Cheksiz global kesh (Map) o'rniga <code>WeakMap</code> yoki chegaralangan LRU ishlating.",
          "<code>FinalizationRegistry</code> obyekt tozalanganini bilishga yordam beradi, lekin unga tayanmang."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "GC ni majburlash mumkin emas",
        "html": "Brauzerda GC vaqtini boshqarib bo'lmaydi; <code>performance.memory</code> ham cheklangan. Sizib chiqishni topish uchun heap snapshotlarni solishtiring: sahifani ochib, amalni takrorlab, GC tugmasini bosing va snapshotlar orasidagi o'sishni kuzating. Node'da <code>--inspect</code> va <code>heapdump</code> ishlatiladi."
      }
    ],
    "quiz": [
      {
        "q": "Garbage collector qaysi obyektlarni tozalaydi?",
        "options": [
          "Barcha eski obyektlarni",
          "Faqat massivlarni",
          "Faqat null qiymatlarni",
          "Ildizlardan yetib bo'lmaydiganlarini"
        ],
        "answer": 3,
        "explain": "GC reachability tamoyiliga asoslanadi: global, stack yoki closure dan yetib bo'lmaydigan obyektlar tozalanadi."
      },
      {
        "q": "WeakMap kalitlari nima bilan farq qiladi?",
        "options": [
          "Kalitni kuchli ushlab turadi",
          "Kalitga zaif havola qiladi, kalit yo'qolsa yozuv ham ketadi",
          "Faqat string kalit qabul qiladi",
          "Qiymatlarni saqlamaydi"
        ],
        "answer": 1,
        "explain": "WeakMap kaliti obyektga zaif havola; boshqa havola qolmasa, yozuv GC bilan birga tozalanadi."
      },
      {
        "q": "Detached DOM sizib chiqishi qanday yuzaga keladi?",
        "options": [
          "Rasm formati noto'g'ri bo'lganda",
          "CSS fayl yuklanmaganda",
          "DOM elementi o'chirilgan, lekin JS hali unga havola ushlab turganda",
          "Event loop to'xtaganda"
        ],
        "answer": 2,
        "explain": "Element DOM'dan olib tashlangan bo'lsa ham, massiv yoki closure dagi havola uni xotirada ushlab turadi."
      }
    ]
  },
  {
    "id": 81,
    "title": "Profiling: Performance panel va heap snapshot",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Optimallashtirishdan oldin <b>o'lchang</b>. Chrome DevTools'ning <b>Performance</b> paneli asosiy oqim vazifalari, layout, paint va kadrlar byudjetini ko'rsatadi. <b>Memory</b> paneli heap snapshot va taqsimotni beradi. «Menga shunday tuyulyapti» — profil emas."
      },
      {
        "type": "code",
        "title": "measure.js",
        "code": "performance.mark(\"hisob-boshlandi\");\nlet jami = 0;\nfor (let i = 0; i < 1_000_000; i += 1) jami += i;\nperformance.mark(\"hisob-tugadi\");\nperformance.measure(\"hisob\", \"hisob-boshlandi\", \"hisob-tugadi\");\nconst [olchov] = performance.getEntriesByName(\"hisob\");\nconsole.log(olchov.duration > 0, jami);",
        "output": "true 499999500000"
      },
      {
        "type": "p",
        "html": "50 ms dan uzoq davom etadigan vazifa <b>long task</b> hisoblanadi va kiritishga javobni kechiktiradi. Performance panelida uni qizil belgi bilan ko'rasiz. Pastdagi «Bottom-Up» jadvali qaysi funksiya eng ko'p vaqt olganini, «Call Tree» esa chaqiruv zanjirini ko'rsatadi."
      },
      {
        "type": "code",
        "title": "longtask.js",
        "code": "new PerformanceObserver((list) => {\n  for (const entry of list.getEntries()) {\n    console.log(`longtask: ${Math.round(entry.duration)}ms (${entry.name})`);\n  }\n}).observe({ entryTypes: [\"longtask\"] });",
        "output": "longtask: 128ms (self)"
      },
      {
        "type": "table",
        "head": [
          "Vosita",
          "Nimani ko'rsatadi",
          "Qachon"
        ],
        "rows": [
          [
            "Performance panel",
            "Vazifalar, layout, paint, kadrlar",
            "Sekin interaksiya"
          ],
          [
            "Heap snapshot",
            "Xotiradagi obyektlar va havolalar",
            "Xotira o'sishi"
          ],
          [
            "Allocation timeline",
            "Yangi obyektlar qachon yaratilgan",
            "Tez-tez GC"
          ],
          [
            "Lighthouse",
            "Umumiy sifat auditi",
            "Reliz oldidan"
          ],
          [
            "React Profiler",
            "Komponent render vaqti",
            "React ilovalar"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Profilni to'g'ri o'qing",
        "html": "Avval <b>sekin stsenariyni</b> aniq takrorlang: qaysi tugma, qanday ma'lumot, nechta element. CPU throttling yoqing. Profil davomida faqat shu amalni bajaring. Snapshotlarni solishtirishda «Comparison» ko'rinishidan foydalaning va o'sgan obyekt turlarini filtrlang."
      }
    ],
    "quiz": [
      {
        "q": "Long task qaysi chegaradan boshlanadi?",
        "options": [
          "16 ms",
          "500 ms",
          "100 ms",
          "50 ms"
        ],
        "answer": 3,
        "explain": "50 ms dan uzoq davom etgan asosiy oqim vazifasi long task hisoblanadi va INP ga salbiy ta'sir qiladi."
      },
      {
        "q": "Heap snapshotlar odatda nima uchun solishtiriladi?",
        "options": [
          "Kod hajmini o'lchash",
          "Tarmoq tezligini oshirish",
          "Xotira sizib chiqishini topish",
          "CSS ni tekshirish"
        ],
        "answer": 2,
        "explain": "Ikki snapshot orasidagi obyektlar o'sishi qaysi ma'lumot tozalanmayotganini ko'rsatadi."
      },
      {
        "q": "Performance panelidagi «Bottom-Up» jadvali nimani beradi?",
        "options": [
          "Eng ko'p vaqt olgan funksiyalarni",
          "Faqat tarmoq so'rovlarini",
          "DOM elementlar ro'yxatini",
          "CSS selektorlarini"
        ],
        "answer": 0,
        "explain": "Bottom-Up profil funksiyalar bo'yicha o'z vaqtini yig'ib, eng qimmat joylarni ko'rsatadi."
      }
    ]
  },
  {
    "id": 82,
    "title": "Accessibility: ekran o'quvchi uchun kod",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Accessibility (a11y) — saytdan barcha foydalana olishi. Semantik HTML, to'g'ri teg, label, klaviatura bilan boshqarish va kontrast — bu asos. <code>div</code> ni tugma qilib qo'yish o'rniga <code>button</code> ishlatish bir nechta muammoni birdan hal qiladi."
      },
      {
        "type": "code",
        "title": "forma.js",
        "code": "const forma = document.createElement(\"form\");\nforma.innerHTML = `\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required aria-describedby=\"email-yordam\" />\n  <p id=\"email-yordam\">Masalan: ism@example.com</p>\n  <button type=\"submit\">Yuborish</button>\n`;\ndocument.body.append(forma);\nconsole.log(forma.querySelector(\"input\").labels[0].textContent);",
        "output": "Email"
      },
      {
        "type": "p",
        "html": "<code>label for</code> va <code>id</code> bog'lanishi inputga nom beradi. <code>aria-describedby</code> qo'shimcha izohni ekran o'quvchiga yetkazadi. Tugma <code>type=\"submit\"</code> bilan forma yuboradi. Klaviatura bilan Tab tartibi mantiqiy bo'lishi va fokus ko'rinadigan bo'lishi shart."
      },
      {
        "type": "code",
        "title": "holat.js",
        "code": "const holat = document.querySelector(\"#holat\");\nholat.setAttribute(\"role\", \"status\");\nholat.setAttribute(\"aria-live\", \"polite\");\nholat.textContent = \"3 ta natija topildi\";\nconsole.log(holat.getAttribute(\"aria-live\"), holat.textContent);",
        "output": "polite 3 ta natija topildi"
      },
      {
        "type": "table",
        "head": [
          "Muammo",
          "Yechim",
          "Nega"
        ],
        "rows": [
          [
            "div tugma",
            "<button> ishlatish",
            "Klaviatura va rol avtomatik"
          ],
          [
            "Rasm izohsiz",
            "alt matni",
            "Ekran o'quvchi tavsiflaydi"
          ],
          [
            "Past kontrast",
            "4.5:1 nisbat",
            "Ko'rish qiyinligi"
          ],
          [
            "Fokus yo'q",
            ":focus-visible",
            "Klaviatura foydalanuvchisi"
          ],
          [
            "Dinamik yangilanish",
            "aria-live",
            "O'zgarish e'lon qilinadi"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Test qiling",
        "html": "Sahifani faqat klaviatura bilan boshqaring: Tab, Shift+Tab, Enter, Escape. Chrome DevTools'dagi Accessibility panelida daraxtni ko'ring. <b>axe DevTools</b> avtomatik tekshiradi, lekin qo'lda sinov o'rnini bosmaydi. Dekorativ rasm uchun <code>alt=\"\"</code> to'g'ri, lekin mazmunli rasm uchun bo'sh qoldirmang."
      }
    ],
    "quiz": [
      {
        "q": "Bosiladigan element uchun qaysi teg eng to'g'ri?",
        "options": [
          "div",
          "span",
          "a href=\"#\"",
          "button"
        ],
        "answer": 3,
        "explain": "button klaviatura, fokus va rol xatti-harakatini brauzerdan oladi; div uchun hammasini qo'lda qo'shish kerak."
      },
      {
        "q": "Dinamik yangilanishni ekran o'quvchiga e'lon qilish uchun nima ishlatiladi?",
        "options": [
          "aria-hidden",
          "role=\"presentation\"",
          "tabindex=\"-1\"",
          "aria-live"
        ],
        "answer": 3,
        "explain": "aria-live=\"polite\" yoki \"assertive\" hududdagi o'zgarishni e'lon qiladi."
      },
      {
        "q": "Dekorativ rasm uchun `alt` qanday bo'lishi kerak?",
        "options": [
          "Rasm fayl nomi",
          "Umuman yo'q",
          "Bo'sh (alt=\"\")",
          "\"rasm\" so'zi"
        ],
        "answer": 2,
        "explain": "Bo'sh alt ekran o'quvchiga rasmni o'tkazib yuborishni bildiradi; alt yo'qligi esa fayl nomini o'qishga olib kelishi mumkin."
      }
    ]
  },
  {
    "id": 83,
    "title": "XSS chuqur: CSP va sanitizatsiya",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "<b>XSS</b> — saytga begona skript kiritish. Uch turi bor: <b>stored</b> (bazada saqlanadi), <b>reflected</b> (URL orqali qaytadi) va <b>DOM-based</b> (brauzerda yig'iladi). Asosiy qoida: ishonchsiz matnni HTML sifatida emas, <b>matn</b> sifatida joylashtiring."
      },
      {
        "type": "code",
        "title": "matn.js",
        "code": "const iflos = '<img src=x onerror=\"alert(1)\">';\nconst div = document.createElement(\"div\");\ndiv.textContent = iflos;\nconsole.log(div.innerHTML);",
        "output": "&lt;img src=x onerror=\"alert(1)\"&gt;"
      },
      {
        "type": "p",
        "html": "<code>textContent</code> hech qachon HTML parsmaydi: barcha belgilar matn bo'lib qoladi. <code>innerHTML</code> esa teglarni bajaradi. Agar foydalanuvchi boy matn (masalan, <code>&lt;b&gt;</code>) yuborishi kerak bo'lsa, uni <b>sanitizatsiya</b> qiling — ruxsat etilgan teglar ro'yxati bilan tozalang."
      },
      {
        "type": "code",
        "title": "purify.js",
        "code": "import DOMPurify from \"dompurify\";\n\nconst tozalangan = DOMPurify.sanitize(\n  '<img src=x onerror=\"alert(1)\"><b>Salom</b>'\n);\nconsole.log(tozalangan);",
        "output": "<img src=\"x\"><b>Salom</b>"
      },
      {
        "type": "table",
        "head": [
          "Himoya",
          "Nimadan",
          "Misol"
        ],
        "rows": [
          [
            "textContent",
            "HTML in'ektsiyasi",
            "Foydalanuvchi ismi"
          ],
          [
            "Sanitizatsiya",
            "Ruxsatsiz teglar",
            "DOMPurify"
          ],
          [
            "CSP",
            "Inline va begona skript",
            "script-src 'self' 'nonce-...'"
          ],
          [
            "Trusted Types",
            "Xavfli DOM sinklari",
            "require-trusted-types-for 'script'"
          ],
          [
            "HttpOnly cookie",
            "Token o'g'irlash",
            "Sessiya cookie'si"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "CSP ni kuchaytiring",
        "html": "<code>Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-r4nd0m'</code> inline skriptlarni bloklaydi. <code>unsafe-inline</code> va <code>unsafe-eval</code> dan qoching. CSP — himoyaning bir qatlami, sanitizatsiya o'rnini bosmaydi. <code>javascript:</code> URL larini ham bloklang."
      }
    ],
    "quiz": [
      {
        "q": "Foydalanuvchi matnini HTML sifatida emas, oddiy matn sifatida chiqarish uchun nima ishlatiladi?",
        "options": [
          "textContent",
          "innerHTML",
          "outerHTML",
          "insertAdjacentHTML"
        ],
        "answer": 0,
        "explain": "textContent belgilarni matn sifatida saqlaydi va HTML parsmaydi, shuning uchun XSS bo'lmaydi."
      },
      {
        "q": "CSP dagi `nonce` nima uchun kerak?",
        "options": [
          "Keshni o'chirish",
          "Parolni shifrlash",
          "Faqat belgilangan skriptga ruxsat berish",
          "Cookie yaratish"
        ],
        "answer": 2,
        "explain": "Har javobda yangi nonce beriladi; faqat shu nonce bilan belgilangan inline skript bajariladi."
      },
      {
        "q": "Stored XSS qayerda saqlanadi?",
        "options": [
          "Faqat brauzer keshida",
          "Server ma'lumotlar bazasida",
          "CSS faylida",
          "Service Worker'da"
        ],
        "answer": 1,
        "explain": "Stored XSS zararli kod bazaga yoziladi va uni ko'rgan barcha foydalanuvchilarga yetkaziladi."
      }
    ]
  },
  {
    "id": 84,
    "title": "CSRF va SameSite himoyasi",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "<b>CSRF</b> — foydalanuvchi tizimga kirgan holatda, boshqa sayt uning nomidan so'rov yuborishga majbur qilishi. Brauzer cookie'ni avtomatik qo'shadi, shuning uchun server so'rovning haqiqatan o'z saytidan kelganini tekshirishi kerak."
      },
      {
        "type": "code",
        "title": "session.mjs",
        "code": "app.use(session({\n  name: \"sid\",\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false,\n  cookie: {\n    httpOnly: true,\n    sameSite: \"lax\",\n    secure: true,\n    maxAge: 86400000,\n  },\n}));\n// Javob headeri:",
        "output": "Set-Cookie: sid=...; Path=/; HttpOnly; Secure; SameSite=Lax"
      },
      {
        "type": "p",
        "html": "<code>SameSite=Lax</code> boshqa saytdan kelgan POST so'rovlarida cookie yuborilmaydi, lekin oddiy havola orqali GET'da yuboriladi. <code>Strict</code> yanada qattiq. Muhim amallar uchun qo'shimcha <b>CSRF token</b> ishlatiladi: token formada yoki headerda keladi va sessiyaga bog'lanadi."
      },
      {
        "type": "code",
        "title": "csrf.mjs",
        "code": "import { randomBytes, timingSafeEqual } from \"node:crypto\";\n\napp.get(\"/api/csrf\", (req, res) => {\n  req.session.csrf = req.session.csrf ?? randomBytes(32).toString(\"base64url\");\n  res.json({ token: req.session.csrf });\n});\n\napp.post(\"/api/pul\", (req, res) => {\n  const yuborilgan = Buffer.from(req.get(\"x-csrf-token\") ?? \"\");\n  const kutilgan = Buffer.from(req.session.csrf ?? \"\");\n  if (yuborilgan.length !== kutilgan.length || !timingSafeEqual(yuborilgan, kutilgan)) {\n    return res.status(403).json({ xato: \"CSRF token noto'g'ri\" });\n  }\n  res.json({ ok: true });\n});\n// Token yuborilmasa:",
        "output": "403 {\"xato\":\"CSRF token noto'g'ri\"}"
      },
      {
        "type": "ul",
        "items": [
          "Holatni o'zgartiruvchi amallar faqat POST/PUT/PATCH/DELETE bo'lsin; GET idempotent qolsin.",
          "Token ni <code>HttpOnly</code> bo'lmagan cookie yoki meta teg orqali bering, JS headerda qaytaradi.",
          "<code>Origin</code> va <code>Referer</code> headerlarini tekshirish qo'shimcha qatlam.",
          "CORS bilan CSRF himoyalanmaydi: CORS faqat javobni o'qishni cheklaydi, so'rov baribir yuboriladi."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Token har sessiyaga",
        "html": "Bitta global CSRF token barcha foydalanuvchilar uchun ishlamaydi. Tokenni sessiyaga bog'lang va autentifikatsiyadan keyin yangilang. <code>timingSafeEqual</code> bilan solishtiring — oddiy <code>===</code> vaqt bo'yicha ma'lumot sizdirishi mumkin."
      }
    ],
    "quiz": [
      {
        "q": "CSRF hujumining mohiyati nimada?",
        "options": [
          "Bazaga zararli kod yozish",
          "Tarmoqni to'ldirish",
          "Parolni brute force qilish",
          "Foydalanuvchi nomidan uning cookie'si bilan so'rov yuborish"
        ],
        "answer": 3,
        "explain": "Boshqa sayt foydalanuvchining brauzeriga avtomatik cookie qo'shilgan so'rov yuboradi."
      },
      {
        "q": "`SameSite=Strict` qanday ishlaydi?",
        "options": [
          "Cookie faqat HTTPS da ishlaydi",
          "Cookie butunlay o'chiriladi",
          "Cookie faqat o'sha saytdan kelgan so'rovlarda yuboriladi",
          "Cookie JS ga ochiq bo'ladi"
        ],
        "answer": 2,
        "explain": "Strict rejimda boshqa saytdan kelgan har qanday so'rovda cookie yuborilmaydi."
      },
      {
        "q": "CSRF token bilan solishtirishda nima ishlatilishi kerak?",
        "options": [
          "== operatori",
          "includes",
          "JSON.stringify",
          "timingSafeEqual"
        ],
        "answer": 3,
        "explain": "timingSafeEqual doimiy vaqtda solishtiradi va vaqt bo'yicha ma'lumot sizishini kamaytiradi."
      }
    ]
  },
  {
    "id": 85,
    "title": "CORS: cross-origin siyosati",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Brauzer bir origin'dagi sahifa boshqa origin'ga so'rov yuborganda <b>CORS</b> tekshiruvini qo'llaydi. Origin — protokol + domen + port. Server ruxsat headerlarini qaytarmasa, brauzer javobni JS ga bermaydi. CORS <b>serverda</b> sozlanadi, klientda emas."
      },
      {
        "type": "code",
        "title": "cors.mjs",
        "code": "import cors from \"cors\";\n\napp.use(cors({\n  origin: [\"https://noldan.uz\", \"https://admin.noldan.uz\"],\n  methods: [\"GET\", \"POST\", \"PATCH\"],\n  credentials: true,\n  maxAge: 86400,\n}));\n// https://noldan.uz dan kelgan so'rovga javob:",
        "output": "Access-Control-Allow-Origin: https://noldan.uz\nAccess-Control-Allow-Credentials: true\nVary: Origin"
      },
      {
        "type": "p",
        "html": "Oddiy GET so'rovlar oldindan tekshiruvsiz ketadi. <code>application/json</code> yoki maxsus header bilan POST esa <b>preflight</b> yuboradi: brauzer avval <code>OPTIONS</code> so'raydi, server ruxsat bersa haqiqiy so'rov ketadi. <code>maxAge</code> preflight natijasini keshlaydi."
      },
      {
        "type": "code",
        "title": "preflight.mjs",
        "code": "app.options(\"/api/vazifalar\", (req, res) => {\n  console.log(req.method, req.get(\"access-control-request-method\"));\n  res.sendStatus(204);\n});\n// Brauzer preflight so'rovi:",
        "output": "OPTIONS POST"
      },
      {
        "type": "table",
        "head": [
          "Header",
          "Vazifasi",
          "Eslatma"
        ],
        "rows": [
          [
            "Access-Control-Allow-Origin",
            "Ruxsat etilgan origin",
            "Bitta yoki *"
          ],
          [
            "Allow-Credentials",
            "Cookie yuborish",
            "* bilan birga bo'lmaydi"
          ],
          [
            "Allow-Methods",
            "Ruxsat etilgan metodlar",
            "Preflight javobida"
          ],
          [
            "Allow-Headers",
            "Ruxsat etilgan headerlar",
            "Content-Type, Authorization"
          ],
          [
            "Expose-Headers",
            "JS o'qiy oladigan headerlar",
            "Location, X-Jami"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "CORS xavfsizlik emas",
        "html": "CORS faqat brauzerdagi boshqa origin'ning javobni o'qishini cheklaydi. Server-server so'rovlar va curl uchun hech qanday to'siq yo'q. Shuning uchun API'ni autentifikatsiya va avtorizatsiya bilan himoyalang. <code>origin: \"*\"</code> va <code>credentials: true</code> birga ishlamaydi."
      }
    ],
    "quiz": [
      {
        "q": "CORS tekshiruvi qayerda bajariladi?",
        "options": [
          "DNS serverida",
          "Serverda, so'rov kelganda",
          "Brauzerda, javobni JS ga berishdan oldin",
          "Faqat mobil ilovada"
        ],
        "answer": 2,
        "explain": "Brauzer javob headerlarini tekshiradi va ruxsat bo'lmasa javobni sahifa JS ga bermaydi."
      },
      {
        "q": "Preflight so'rovi qaysi metod bilan yuboriladi?",
        "options": [
          "GET",
          "HEAD",
          "OPTIONS",
          "POST"
        ],
        "answer": 2,
        "explain": "Brauzer haqiqiy so'rovdan oldin OPTIONS bilan ruxsat so'raydi."
      },
      {
        "q": "`Access-Control-Allow-Origin: *` va credentials birga ishlatilsa nima bo'ladi?",
        "options": [
          "Ishlaydi",
          "Brauzer rad etadi",
          "Faqat GET ishlaydi",
          "Cookie o'chiriladi"
        ],
        "answer": 1,
        "explain": "Credential bilan birga wildcard origin ishlatib bo'lmaydi; aniq origin ko'rsatish kerak."
      }
    ]
  },
  {
    "id": 86,
    "title": "Ta'minot zanjiri xavfsizligi",
    "minutes": 15,
    "blocks": [
      {
        "type": "p",
        "html": "Loyiha o'z kodingizdan tashqari yuzlab paketlarga tayanadi. <b>Supply chain</b> xavfi — bu paket yoki uning bog'liqliklariga zararli kod qo'shilishi. Typosquatting, buzilgan maintainer akkaunti va <code>postinstall</code> skriptlari asosiy vektorlar."
      },
      {
        "type": "code",
        "title": "audit.mjs",
        "code": "import { readFileSync } from \"node:fs\";\nconst audit = JSON.parse(readFileSync(\"audit.json\", \"utf8\"));\nconst zaif = audit.vulnerabilities ?? {};\nfor (const [nom, info] of Object.entries(zaif)) {\n  if (info.severity === \"high\" || info.severity === \"critical\") {\n    console.log(`${nom}: ${info.severity} — ${info.via[0]?.title ?? \"ma'lumot yo'q\"}`);\n  }\n}",
        "output": "lodash: high — Prototype Pollution in lodash"
      },
      {
        "type": "p",
        "html": "<code>npm audit</code> ma'lum zaifliklarni ko'rsatadi, lekin nolga tushirish har doim ham mumkin emas. Muhimi — <b>lockfile</b> va integrity hash: paket o'zgarganda o'rnatish rad etiladi. CI'da <code>npm ci</code> ishlatilsa, tasdiqlanmagan versiya kirmaydi."
      },
      {
        "type": "code",
        "title": "lock.mjs",
        "code": "import { readFileSync } from \"node:fs\";\nconst lock = JSON.parse(readFileSync(\"package-lock.json\", \"utf8\"));\nconst paketlar = Object.entries(lock.packages ?? {})\n  .filter(([nom]) => nom.startsWith(\"node_modules/\"));\nconsole.log(paketlar.length);\nconsole.log(lock.lockfileVersion);",
        "output": "412\n3"
      },
      {
        "type": "ul",
        "items": [
          "Paket nomini harfma-harf tekshiring: <code>expres</code> emas, <code>express</code>.",
          "Ishlatilmaydigan bog'liqliklarni olib tashlang: har paket — potensial xavf.",
          "Versiyani <code>latest</code> bilan emas, aniq diapazon va lockfile bilan boshqaring.",
          "<code>npm ci --ignore-scripts</code> bilan postinstall skriptlarini vaqtincha o'chirib ko'ring.",
          "Dependabot/Renovate yangilanishlarini CI orqali avtomatik tekshiring."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Hajm va egasi",
        "html": "Kichik, kam maintainerli paketlar ko'proq qo'lga olinadi. Paketning haftalik yuklab olinishi, oxirgi yangilanishi va repository havolasini tekshiring. Ichki registry va allowlist katta tashkilotlarda samarali. Build natijasini ham tekshiring: kutilmagan tarmoq chaqiruvi bo'lmasin."
      }
    ],
    "quiz": [
      {
        "q": "Lockfile integrity maydoni nimani kafolatlaydi?",
        "options": [
          "Paket tezligini",
          "Litsenziyani",
          "Paket mazmuni o'zgarmaganini",
          "Paket hajmini"
        ],
        "answer": 2,
        "explain": "Integrity hash yuklangan paketning kutilgan mazmun bilan mosligini tekshiradi."
      },
      {
        "q": "Typosquatting nima?",
        "options": [
          "Kodni minify qilish",
          "Paket nomini mashhur nomga o'xshab qo'yish",
          "Versiyani oshirish",
          "Testlarni parallel qilish"
        ],
        "answer": 1,
        "explain": "Hujumchi mashhur paket nomiga o'xshash nom bilan zararli paket joylaydi."
      },
      {
        "q": "CI da qaysi buyruq lockfilega qat'iy tayanishni ta'minlaydi?",
        "options": [
          "npm install",
          "npm link",
          "npm update",
          "npm ci"
        ],
        "answer": 3,
        "explain": "npm ci lockfile bo'yicha toza o'rnatadi va nomuvofiqlikda xato beradi."
      }
    ]
  },
  {
    "id": 87,
    "title": "OAuth 2.0 va OIDC asoslari",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "OAuth 2.0 — uchinchi tomon xizmatiga foydalanuvchi nomidan <b>cheklangan ruxsat</b> berish protokoli. OIDC esa uning ustiga identifikatsiyani qo'shadi va <code>id_token</code> beradi. Parolni ilovaga bermaslik — asosiy maqsad. Eng xavfsiz oqim: <b>authorization code + PKCE</b>."
      },
      {
        "type": "code",
        "title": "pkce.js",
        "code": "const verifier = crypto.randomUUID().replaceAll(\"-\", \"\") + crypto.randomUUID().replaceAll(\"-\", \"\");\nconst digest = await crypto.subtle.digest(\"SHA-256\", new TextEncoder().encode(verifier));\nconst challenge = btoa(String.fromCharCode(...new Uint8Array(digest)))\n  .replaceAll(\"+\", \"-\").replaceAll(\"/\", \"_\").replaceAll(\"=\", \"\");\nconsole.log(challenge.length);\nconsole.log(new URLSearchParams({ response_type: \"code\", code_challenge_method: \"S256\" }).toString());",
        "output": "43\nresponse_type=code&code_challenge_method=S256"
      },
      {
        "type": "p",
        "html": "PKCE'da ilova tasodifiy <code>code_verifier</code> yaratadi va uning SHA-256 hash'ini (<code>code_challenge</code>) yuboradi. Kod qaytgach, verifier bilan token so'raladi. Kodni ushlab olgan hujumchi verifier'siz token ololmaydi. <code>state</code> parametri CSRF dan himoyalaydi."
      },
      {
        "type": "code",
        "title": "token.mjs",
        "code": "const javob = await fetch(tokenUrl, {\n  method: \"POST\",\n  headers: { \"content-type\": \"application/x-www-form-urlencoded\" },\n  body: new URLSearchParams({\n    grant_type: \"authorization_code\",\n    code,\n    redirect_uri,\n    client_id,\n    code_verifier: verifier,\n  }),\n});\nconst tokenlar = await javob.json();\nconsole.log(Object.keys(tokenlar).sort().join(\", \"));",
        "output": "access_token, expires_in, id_token, refresh_token, token_type"
      },
      {
        "type": "table",
        "head": [
          "Oqim",
          "Mos ilova",
          "PKCE"
        ],
        "rows": [
          [
            "Authorization Code",
            "Serverli veb-ilova",
            "Tavsiya"
          ],
          [
            "Authorization Code + PKCE",
            "SPA va mobil",
            "Majburiy"
          ],
          [
            "Client Credentials",
            "Server-server",
            "Kerak emas"
          ],
          [
            "Implicit",
            "Eski brauzer ilovalari",
            "Ishlatilmaydi"
          ],
          [
            "Device Code",
            "TV va CLI",
            "Cheklangan qurilma"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Tokenlarni saqlash",
        "html": "Access token qisqa muddatli, refresh token uzoq muddatli bo'lsin. SPA'da refresh tokenni <code>HttpOnly</code> cookie'da saqlang; access tokenni xotirada ushlang. <code>id_token</code> ni faqat identifikatsiya uchun ishlatib, API ruxsati uchun access token yuboring. Har tokenning <code>aud</code>, <code>iss</code> va <code>exp</code> maydonlarini tekshiring."
      }
    ],
    "quiz": [
      {
        "q": "PKCE qaysi muammoni hal qiladi?",
        "options": [
          "Token hajmini kamaytiradi",
          "Ushlab olingan authorization code bilan token olishning oldini oladi",
          "Parolni shifrlaydi",
          "Cookie o'rnini bosadi"
        ],
        "answer": 1,
        "explain": "code_verifier faqat dastlabki ilovada bo'ladi; kodni ushlagan boshqa tomon token ololmaydi."
      },
      {
        "q": "OIDC da foydalanuvchi identifikatsiyasini qaysi token beradi?",
        "options": [
          "access_token",
          "refresh_token",
          "code",
          "id_token"
        ],
        "answer": 3,
        "explain": "id_token JWT ko'rinishida foydalanuvchi haqidagi da'volarni (sub, ism, email) beradi."
      },
      {
        "q": "`state` parametri nima uchun ishlatiladi?",
        "options": [
          "CSRF dan himoyalash va so'rovni bog'lash",
          "Token muddatini uzaytirish",
          "Parolni yangilash",
          "Keshni tozalash"
        ],
        "answer": 0,
        "explain": "state tasodifiy qiymat bo'lib, qaytgan javobning o'z so'rovingizga tegishli ekanini tekshiradi."
      }
    ]
  },
  {
    "id": 88,
    "title": "React: komponent, JSX va props",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "React UI'ni <b>komponentlar</b>ga bo'ladi: har komponent kirish <b>props</b> oladi va JSX qaytaradi. JSX — HTML'ga o'xshash sintaksis, lekin u JS funksiya chaqiruviga aylanadi. React holat o'zgarganda faqat kerakli qismni qayta render qiladi."
      },
      {
        "type": "code",
        "title": "App.jsx",
        "code": "function Salom({ ism }) {\n  return <h1>Salom, {ism}!</h1>;\n}\n\nexport default function App() {\n  const ismlar = [\"Aziza\", \"Bekzod\", \"Dilnoza\"];\n  return (\n    <main>\n      {ismlar.map((ism) => <Salom key={ism} ism={ism} />)}\n    </main>\n  );\n}",
        "output": "<main><h1>Salom, Aziza!</h1><h1>Salom, Bekzod!</h1><h1>Salom, Dilnoza!</h1></main>"
      },
      {
        "type": "p",
        "html": "Ro'yxatda <code>key</code> majburiy: React unga qarab elementlarni moslashtiradi. Indeksni key qilib ishlatmang — tartib o'zgarsa holat aralashadi. Props <b>read-only</b>: komponent ularni o'zgartirmaydi, o'z holatini <code>useState</code> bilan boshqaradi."
      },
      {
        "type": "code",
        "title": "Hisoblagich.jsx",
        "code": "import { useState } from \"react\";\n\nexport function Hisoblagich() {\n  const [son, setSon] = useState(0);\n  return (\n    <button onClick={() => setSon((s) => s + 1)}>\n      Bosildi: {son}\n    </button>\n  );\n}\n// Boshlang'ich render va ikki marta bosilgandan keyin:",
        "output": "Bosildi: 0\nBosildi: 2"
      },
      {
        "type": "table",
        "head": [
          "JSX",
          "HTML",
          "Farq"
        ],
        "rows": [
          [
            "className",
            "class",
            "class — reserved so'z"
          ],
          [
            "htmlFor",
            "for",
            "for — reserved so'z"
          ],
          [
            "{ifoda}",
            "Matn",
            "JS ifodasi qo'shiladi"
          ],
          [
            "<Komponent />",
            "Yo'q",
            "Custom komponent"
          ],
          [
            "style={{}}",
            "style=\"\"",
            "Obyekt sifatida"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Komponentlarni kichik saqlang",
        "html": "Bitta komponent bitta vazifani bajarsin. Ma'lumotni yuqoridan pastga props bilan uzating; bir necha qatlamdan o'tkazish «prop drilling» bo'lsa, context yoki state kutubxonasiga o'ting. Komponent nomi katta harf bilan boshlanadi — aks holda React uni HTML tegi deb biladi."
      }
    ],
    "quiz": [
      {
        "q": "React ro'yxatida `key` nima uchun kerak?",
        "options": [
          "Stil berish uchun",
          "Elementlarni barqaror moslashtirish uchun",
          "Tarmoq so'rovi uchun",
          "Forma yuborish uchun"
        ],
        "answer": 1,
        "explain": "key React ga qaysi element qaysi ekanini bildiradi va qayta renderda holatni to'g'ri saqlaydi."
      },
      {
        "q": "Props qanday xossa bilan tavsiflanadi?",
        "options": [
          "Komponent ichida o'zgartiriladi",
          "Read-only",
          "Faqat string bo'ladi",
          "Faqat state bilan ishlaydi"
        ],
        "answer": 1,
        "explain": "Props faqat o'qish uchun; ularni o'zgartirish kerak bo'lsa, ota komponentdagi holatni yangilash lozim."
      },
      {
        "q": "JSX da CSS klassi qanday yoziladi?",
        "options": [
          "class",
          "klass",
          "cssClass",
          "className"
        ],
        "answer": 3,
        "explain": "class JavaScript'da reserved so'z bo'lgani uchun JSX da className ishlatiladi."
      }
    ]
  },
  {
    "id": 89,
    "title": "React hooks va holat boshqaruvi",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Hooks funksional komponentga holat va yon ta'sirlarni qo'shadi. Uch asosiy qoida: hooks faqat komponent yoki custom hook ichida, faqat eng yuqori darajada chaqiriladi, har renderda bir xil tartibda. <code>useEffect</code> yon ta'sirni, <code>useMemo</code> hisobni keshlaydi."
      },
      {
        "type": "code",
        "title": "Vazifalar.jsx",
        "code": "import { useEffect, useState } from \"react\";\n\nexport function Vazifalar() {\n  const [vazifalar, setVazifalar] = useState([]);\n  useEffect(() => {\n    const controller = new AbortController();\n    fetch(\"/api/vazifalar\", { signal: controller.signal })\n      .then((r) => r.json())\n      .then((j) => setVazifalar(j.data))\n      .catch((e) => { if (e.name !== \"AbortError\") console.error(e); });\n    return () => controller.abort();\n  }, []);\n  return <ul>{vazifalar.map((v) => <li key={v.id}>{v.nom}</li>)}</ul>;\n}\n// Server 2 ta vazifa qaytarganda:",
        "output": "<ul><li>Kod yozish</li><li>Testlar</li></ul>"
      },
      {
        "type": "p",
        "html": "Effektning qaytargan funksiyasi <b>cleanup</b>: komponent yo'q qilinganda yoki dependency o'zgarganda ishlaydi. Bo'sh massiv <code>[]</code> — faqat mount/unmount. Dependency'ni tushirib qoldirsangiz, eski closure qiymati bilan ishlaysiz; hammasini qo'shsangiz, cheksiz tsikl bo'lishi mumkin."
      },
      {
        "type": "code",
        "title": "useMemo.jsx",
        "code": "import { useMemo } from \"react\";\n\nfunction Saralangan({ mahsulotlar }) {\n  const saralangan = useMemo(\n    () => [...mahsulotlar].sort((a, b) => a.narx - b.narx),\n    [mahsulotlar]\n  );\n  console.log(saralangan.map((m) => m.nom).join(\", \"));\n  return <span>{saralangan[0].nom}</span>;\n}\n// mahsulotlar = [{nom:\"nok\",narx:12},{nom:\"olma\",narx:8},{nom:\"uzum\",narx:20}]",
        "output": "olma, nok, uzum"
      },
      {
        "type": "ul",
        "items": [
          "<code>useState</code> — mahalliy holat; yangilash funksiyasi yangi render rejalashtiradi.",
          "<code>useEffect</code> — tashqi tizim bilan sinxronlash: tarmoq, obuna, DOM.",
          "<code>useMemo</code>/<code>useCallback</code> — qimmat hisob yoki referens barqarorligi.",
          "<code>useRef</code> — renderlar orasida saqlanadigan qiymat yoki DOM havolasi.",
          "Custom hook — umumiy mantiqni <code>use...</code> nomi bilan ajratish."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Hammasini memo qilmang",
        "html": "<code>useMemo</code> ham xarajat: dependency solishtirish va xotira. Faqat o'lchov bilan qimmatligi tasdiqlangan hisobga qo'llang. Effektda state ni shartsiz yangilash cheksiz tsikl beradi. Server holati uchun React Query kabi kutubxonalar keshlash va qayta urinishni o'z zimmasiga oladi."
      }
    ],
    "quiz": [
      {
        "q": "`useEffect` qaytargan funksiya qachon ishlaydi?",
        "options": [
          "Har render boshida",
          "Hech qachon",
          "Faqat sahifa yopilganda",
          "Cleanup sifatida, dependency o'zgarganda yoki unmountda"
        ],
        "answer": 3,
        "explain": "Effekt qaytargan funksiya tozalash uchun: keyingi effektdan oldin yoki komponent yo'q qilinganda chaqiriladi."
      },
      {
        "q": "Bo'sh dependency massivi `[]` nimani bildiradi?",
        "options": [
          "Effekt har renderda ishlaydi",
          "Effekt faqat mountda ishlaydi",
          "Effekt o'chiriladi",
          "Effekt faqat unmountda ishlaydi"
        ],
        "answer": 1,
        "explain": "Bo'sh massiv effektning mountda bir marta ishlashini bildiradi; cleanup unmountda bajariladi."
      },
      {
        "q": "Qaysi hook DOM elementga havola saqlash uchun mos?",
        "options": [
          "useState",
          "useMemo",
          "useRef",
          "useReducer"
        ],
        "answer": 2,
        "explain": "useRef joriy qiymatni renderlar orasida saqlaydi va DOM elementga murojaat uchun ishlatiladi."
      }
    ]
  },
  {
    "id": 90,
    "title": "Vue 3: reaktivlik va komponentlar",
    "minutes": 17,
    "blocks": [
      {
        "type": "p",
        "html": "Vue 3 reaktivlikni <b>Proxy</b> orqali quradi: <code>ref</code> primitiv qiymatni, <code>reactive</code> obyektni kuzatadi. Shablon (template) avtomatik yangilanadi. <code>&lt;script setup&gt;</code> — Composition API ning eng qulay shakli: o'zgaruvchilar shablonga to'g'ridan-to'g'ri chiqadi."
      },
      {
        "type": "code",
        "title": "Hisoblagich.vue",
        "code": "<script setup>\nimport { ref, computed } from \"vue\";\nconst son = ref(0);\nconst juft = computed(() => son.value % 2 === 0);\n</script>\n\n<template>\n  <button @click=\"son++\">Bosildi: {{ son }}</button>\n  <p>{{ juft ? \"juft\" : \"toq\" }}</p>\n</template>\n<!-- Boshlang'ich holat, keyin bir marta bosilganda: -->",
        "output": "Bosildi: 0\njuft\nBosildi: 1\ntoq"
      },
      {
        "type": "p",
        "html": "<code>ref</code> qiymati <code>.value</code> orqali o'qiladi va yoziladi, shablonda esa avtomatik ochiladi. <code>computed</code> natijani keshlaydi: bog'liq qiymat o'zgarmaguncha qayta hisoblanmaydi. <code>watch</code> esa yon ta'sir uchun — API chaqiruvi, log, localStorage."
      },
      {
        "type": "code",
        "title": "Qidiruv.vue",
        "code": "<script setup>\nimport { ref, watch } from \"vue\";\nconst qidiruv = ref(\"\");\nwatch(qidiruv, (yangi, eski) => {\n  console.log(`\"${eski}\" -> \"${yangi}\"`);\n});\n</script>\n\n<template>\n  <input v-model=\"qidiruv\" placeholder=\"Qidirish\" />\n</template>\n<!-- Foydalanuvchi \"vue\" deb yozganda: -->",
        "output": "\"\" -> \"v\"\n\"v\" -> \"vu\"\n\"vu\" -> \"vue\""
      },
      {
        "type": "table",
        "head": [
          "Tushuncha",
          "Vazifasi",
          "Eslatma"
        ],
        "rows": [
          [
            "ref",
            "Reaktiv primitiv",
            ".value bilan"
          ],
          [
            "reactive",
            "Reaktiv obyekt",
            "Destructuring reaktivlikni yo'qotadi"
          ],
          [
            "computed",
            "Keshlangan hosila",
            "Faqat bog'liqlik o'zgarsa"
          ],
          [
            "watch",
            "Yon ta'sir",
            "deep, immediate"
          ],
          [
            "v-model",
            "Ikki tomonlama bog'lanish",
            "input, select, checkbox"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Reaktivlikni yo'qotmang",
        "html": "<code>const { ism } = reactive(obyekt)</code> qilsangiz, <code>ism</code> oddiy string bo'lib qoladi. <code>toRefs</code> yoki <code>ref</code> ishlating. Katta ro'yxatlarda <code>shallowRef</code> bilan chuqur kuzatuvni o'chirib, unumdorlikni oshirish mumkin."
      }
    ],
    "quiz": [
      {
        "q": "`ref` qiymatini JavaScript ichida o'qish uchun nima kerak?",
        "options": [
          "()",
          ".data",
          ".value",
          "$ref"
        ],
        "answer": 2,
        "explain": "ref obyektining qiymati .value xossasida; shablonda Vue uni avtomatik ochadi."
      },
      {
        "q": "`computed` ning oddiy funksiyadan asosiy afzalligi nima?",
        "options": [
          "Har renderda qayta hisoblanadi",
          "Bog'liqliklar o'zgarmaguncha keshlanadi",
          "DOM ga yozadi",
          "Serverda ishlaydi"
        ],
        "answer": 1,
        "explain": "computed natijani keshlaydi va faqat reaktiv bog'liqliklar o'zgarganda qayta hisoblaydi."
      },
      {
        "q": "`reactive` obyektini destructuring qilganda nima bo'ladi?",
        "options": [
          "Reaktivlik yo'qoladi",
          "Reaktivlik saqlanadi",
          "Xato beradi",
          "Obyekt muzlaydi"
        ],
        "answer": 0,
        "explain": "Destructuring oddiy qiymatlarni ajratadi; reaktivlikni saqlash uchun toRefs yoki ref ishlatiladi."
      }
    ]
  },
  {
    "id": 91,
    "title": "State management: Redux Toolkit va Pinia",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Komponentlar ko'paygan sari holatni uzatish chalkashadi. <b>State management</b> yagona manba, aniq o'zgarish qoidalari va kuzatuvchanlik beradi. Kichik ilovada <code>useState</code> yoki Context yetarli; murakkab biznes holatida Redux Toolkit yoki Pinia mos."
      },
      {
        "type": "code",
        "title": "store.js",
        "code": "import { configureStore, createSlice } from \"@reduxjs/toolkit\";\n\nconst vazifalarSlice = createSlice({\n  name: \"vazifalar\",\n  initialState: { royxat: [] },\n  reducers: {\n    qosh(state, action) { state.royxat.push(action.payload); },\n    bajar(state, action) {\n      const v = state.royxat.find((x) => x.id === action.payload);\n      if (v) v.bajarildi = true;\n    },\n  },\n});\n\nexport const { qosh, bajar } = vazifalarSlice.actions;\nconst store = configureStore({ reducer: { vazifalar: vazifalarSlice.reducer } });\nstore.dispatch(qosh({ id: 1, nom: \"Testlar\", bajarildi: false }));\nstore.dispatch(bajar(1));\nconsole.log(JSON.stringify(store.getState()));",
        "output": "{\"vazifalar\":{\"royxat\":[{\"id\":1,\"nom\":\"Testlar\",\"bajarildi\":true}]}}"
      },
      {
        "type": "p",
        "html": "Redux Toolkit ichida <b>Immer</b> ishlaydi: reducerda <code>state</code> ni to'g'ridan-to'g'ri o'zgartirasiz, lekin natija yangi immutable holat bo'ladi. Bu qo'lda <code>{ ...state, royxat: [...] }</code> yozishdan xavfsizroq. Action nomlari <code>slice/action</code> ko'rinishida avtomatik yaratiladi."
      },
      {
        "type": "code",
        "title": "savat.js",
        "code": "import { defineStore } from \"pinia\";\n\nexport const useSavat = defineStore(\"savat\", {\n  state: () => ({ mahsulotlar: [] }),\n  getters: { soni: (state) => state.mahsulotlar.length },\n  actions: {\n    qosh(mahsulot) { this.mahsulotlar.push(mahsulot); },\n  },\n});\n\nconst savat = useSavat();\nsavat.qosh({ id: 1, nom: \"Kitob\" });\nsavat.qosh({ id: 2, nom: \"Daftar\" });\nconsole.log(savat.soni);",
        "output": "2"
      },
      {
        "type": "table",
        "head": [
          "Yechim",
          "Mos holat",
          "Kamchiligi"
        ],
        "rows": [
          [
            "useState / Context",
            "Kichik, kam o'zgaradigan holat",
            "Ko'p render, masshtab cheklangan"
          ],
          [
            "Redux Toolkit",
            "Murakkab biznes qoidalari",
            "Boilerplate va tushunchalar"
          ],
          [
            "Pinia",
            "Vue ilovalari",
            "Vue ga bog'langan"
          ],
          [
            "Zustand",
            "Yengil global holat",
            "Struktura siz tanlaysiz"
          ],
          [
            "TanStack Query",
            "Server holati",
            "Lokal holat uchun emas"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Server holatini aralashtirmang",
        "html": "API dan kelgan ma'lumot — <b>server state</b>; u keshlash, qayta urinish va invalidatsiyani talab qiladi. Redux'ga hamma narsani tiqishtirish o'rniga TanStack Query yoki SWR ishlating. UI holati (modal ochiqmi) va biznes holati (savat) alohida saqlanadi."
      }
    ],
    "quiz": [
      {
        "q": "Redux Toolkit reducerida state ni to'g'ridan-to'g'ri o'zgartirish nima uchun xavfsiz?",
        "options": [
          "Redux state ni muzlatadi",
          "Immer yangi immutable nusxani yaratadi",
          "State har doim string",
          "Reducer faqat bir marta ishlaydi"
        ],
        "answer": 1,
        "explain": "RTK ichida Immer ishlaydi: ko'rinadigan mutatsiya yangi immutable holatga aylanadi."
      },
      {
        "q": "Qaysi holat turi uchun TanStack Query ko'proq mos?",
        "options": [
          "Modal oynasi ochiqligi",
          "Forma input qiymati",
          "Serverdan kelgan ma'lumot keshi",
          "Tanlangan tab"
        ],
        "answer": 2,
        "explain": "TanStack Query server holatini keshlash, qayta olish va invalidatsiya qilish uchun mo'ljallangan."
      },
      {
        "q": "Pinia getteri nimaga o'xshaydi?",
        "options": [
          "Redux action",
          "Middleware",
          "DOM event",
          "Vue computed xossasi"
        ],
        "answer": 3,
        "explain": "Pinia getterlari holatdan hosil bo'lgan keshlangan qiymatlar, Vue computed kabi."
      }
    ]
  },
  {
    "id": 92,
    "title": "SSR va Next.js kirish",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "SPA birinchi yuklashda bo'sh HTML beradi: SEO va tez ko'rinish uchun <b>server-side rendering</b> foydali. Next.js App Router'da komponentlar sukut bo'yicha <b>server komponentlari</b>: ular serverda renderlanadi, ma'lumotni to'g'ridan-to'g'ri oladi va brauzerga kam JS yuboradi."
      },
      {
        "type": "code",
        "title": "app/page.jsx",
        "code": "export default async function Sahifa() {\n  const javob = await fetch(\"https://api.noldan.uz/yangiliklar\", {\n    next: { revalidate: 60 },\n  });\n  const yangiliklar = await javob.json();\n  return (\n    <ul>\n      {yangiliklar.map((y) => <li key={y.id}>{y.sarlavha}</li>)}\n    </ul>\n  );\n}\n// Server qaytargan HTML:",
        "output": "<ul><li>Yangi JavaScript kursi chiqdi</li><li>Noldan konferensiyasi</li></ul>"
      },
      {
        "type": "p",
        "html": "<b>SSR</b> har so'rovda renderlaydi, <b>SSG</b> build paytida statik sahifa yaratadi, <b>ISR</b> esa belgilangan vaqtdan keyin sahifani fonda yangilaydi (<code>revalidate</code>). Gidratatsiya — server HTML'ini brauzerda interaktiv qilish; server va klient renderi mos kelmasa <b>hydration mismatch</b> yuz beradi."
      },
      {
        "type": "code",
        "title": "Hisoblagich.jsx",
        "code": "\"use client\";\nimport { useState } from \"react\";\n\nexport function Hisoblagich() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}\n// Server HTML, keyin bir marta bosilganda:",
        "output": "<button>0</button>\n<button>1</button>"
      },
      {
        "type": "table",
        "head": [
          "Rejim",
          "Qachon render",
          "Mos holat"
        ],
        "rows": [
          [
            "SSR",
            "Har so'rovda serverda",
            "Shaxsiy, tez o'zgaradigan sahifa"
          ],
          [
            "SSG",
            "Build paytida",
            "Blog, hujjatlar"
          ],
          [
            "ISR",
            "Vaqt bo'yicha yangilanadi",
            "Yangiliklar, katalog"
          ],
          [
            "CSR",
            "Faqat brauzerda",
            "Ichki panel, og'ir interaktivlik"
          ],
          [
            "Streaming",
            "Bo'laklab yuboriladi",
            "Sekin ma'lumotli sahifa"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Server sirlari",
        "html": "Server komponentidagi kod brauzerga yuborilmaydi, shuning uchun API kalitlari u yerda xavfsizroq. Lekin <code>NEXT_PUBLIC_</code> prefiksli env o'zgaruvchilari klientga chiqadi — ularga sir qo'ymang. Klient komponentida <code>window</code> faqat effekt ichida mavjud."
      }
    ],
    "quiz": [
      {
        "q": "ISR qanday ishlaydi?",
        "options": [
          "Har so'rovda yangidan renderlaydi",
          "HTML umuman yubormaydi",
          "Faqat brauzerda renderlaydi",
          "Build paytida bir marta yaratib, vaqt bo'yicha fonda yangilaydi"
        ],
        "answer": 3,
        "explain": "Incremental Static Regeneration statik sahifani saqlaydi va revalidate muddatidan keyin fonda yangilaydi."
      },
      {
        "q": "Hydration mismatch odatda nima sababdan bo'ladi?",
        "options": [
          "Ko'p komponent bo'lganda",
          "CSS yuklanmaganda",
          "API sekin bo'lganda",
          "Server va klient render natijalari farq qilganda"
        ],
        "answer": 3,
        "explain": "Masalan, serverda bir vaqt, klientda boshqa vaqt renderlansa, HTML mos kelmaydi."
      },
      {
        "q": "Next.js da interaktiv hook ishlatadigan komponent qanday belgilanadi?",
        "options": [
          "\"use server\"",
          "\"use interactive\"",
          "\"use state\"",
          "\"use client\""
        ],
        "answer": 3,
        "explain": "\"use client\" direktivasi komponentni klient chegarasiga o'tkazadi va hooklar ishlaydi."
      }
    ]
  },
  {
    "id": 93,
    "title": "Framework tanlash va arxitektura qarorlari",
    "minutes": 16,
    "blocks": [
      {
        "type": "p",
        "html": "Framework — maqsad emas, vosita. Tanlashda jamoa tajribasi, SEO talabi, realtime/offline ehtiyoji, byudjet va uzoq muddatli xizmat ko'rsatish hisobga olinadi. Kichik loyihaga og'ir stack qo'shish tezlikni oshiradi, lekin murakkablikni ko'paytiradi."
      },
      {
        "type": "code",
        "title": "api-klient.js",
        "code": "export function apiKlient(asos) {\n  async function sorov(yol, { headers, ...init } = {}) {\n    const javob = await fetch(`${asos}${yol}`, {\n      ...init,\n      headers: { \"content-type\": \"application/json\", ...headers },\n    });\n    if (!javob.ok) throw new Error(`HTTP ${javob.status}`);\n    return javob.status === 204 ? null : javob.json();\n  }\n  return {\n    vazifalar: () => sorov(\"/vazifalar\"),\n    qosh: (nom) => sorov(\"/vazifalar\", { method: \"POST\", body: JSON.stringify({ nom }) }),\n  };\n}\nconst api = apiKlient(\"/api\");\nconsole.log(Object.keys(api).sort().join(\", \"));",
        "output": "qosh, vazifalar"
      },
      {
        "type": "p",
        "html": "Qatlamlarni ajrating: <b>UI</b> faqat ko'rsatadi, <b>domain</b> biznes qoidalarini biladi, <b>infrastructure</b> tarmoq va bazani o'raydi. Domain funksiyalari frameworkdan mustaqil bo'lsa, ularni sof unit test bilan tekshirish oson. Bu «frameworkni almashtirish» ni ham arzonlashtiradi."
      },
      {
        "type": "code",
        "title": "domain.js",
        "code": "function vazifaYarat(matn, id) {\n  if (!matn.trim()) throw new Error(\"Nom bo'sh\");\n  return {\n    id,\n    nom: matn.trim(),\n    bajarildi: false,\n    createdAt: new Date(0).toISOString(),\n  };\n}\nconsole.log(vazifaYarat(\"  Testlar  \", \"t1\"));",
        "output": "{\n  id: 't1',\n  nom: 'Testlar',\n  bajarildi: false,\n  createdAt: '1970-01-01T00:00:00.000Z'\n}"
      },
      {
        "type": "table",
        "head": [
          "Talab",
          "Mos yechim",
          "Sabab"
        ],
        "rows": [
          [
            "SEO va tez birinchi render",
            "Next.js / Nuxt",
            "SSR va streaming"
          ],
          [
            "Ichki admin panel",
            "Vite + React",
            "CSR yetarli, sodda deploy"
          ],
          [
            "Kichik statik sayt",
            "Astro / HTML",
            "Kam JS, tez"
          ],
          [
            "Realtime hamkorlik",
            "WebSocket + React",
            "Doimiy kanal"
          ],
          [
            "Mobilga yaqin tajriba",
            "PWA",
            "Offline va o'rnatish"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Qarorni yozib qo'ying",
        "html": "Muhim texnik qarorlarni <b>ADR</b> (Architecture Decision Record) ko'rinishida qisqa yozing: kontekst, variantlar, tanlov, oqibat. Olti oydan keyin «nega shunday qildik?» degan savolga javob bo'ladi. Har yangi kutubxona — kelajakdagi xizmat ko'rsatish yuki."
      }
    ],
    "quiz": [
      {
        "q": "Framework tanlashda birinchi navbatda nima hisobga olinadi?",
        "options": [
          "Moda va trendlar",
          "Loyiha talablari va jamoa tajribasi",
          "Fayl hajmi",
          "Yulduzlar soni"
        ],
        "answer": 1,
        "explain": "Talablar (SEO, realtime, offline) va jamoaning real tajribasi barqaror qaror beradi."
      },
      {
        "q": "Domain qatlamini frameworkdan mustaqil saqlashning foydasi nima?",
        "options": [
          "Biznes qoidalarini sof test qilish va framework almashtirish osonlashadi",
          "Kod hajmi oshadi",
          "SSR avtomatik yoqiladi",
          "CSS izolyatsiyasi paydo bo'ladi"
        ],
        "answer": 0,
        "explain": "Frameworkdan mustaqil domain funksiyalari oddiy unit testlar bilan tekshiriladi va UI texnologiyasi o'zgarsa ham qoladi."
      },
      {
        "q": "ADR nima?",
        "options": [
          "Avtomatik deploy skripti",
          "React hook",
          "API debug vositasi",
          "Arxitektura qarori yozuvi"
        ],
        "answer": 3,
        "explain": "Architecture Decision Record qabul qilingan muhim texnik qarorni konteksti va oqibatlari bilan hujjatlashtiradi."
      }
    ]
  },
  {
    "id": 94,
    "title": "Loyiha: talablar, arxitektura va API shartnomasi",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Yakuniy loyiha — <b>«Noldan Tasks»</b>: foydalanuvchi ro'yxatdan o'tadi, shaxsiy vazifalarini yaratadi, real vaqtda yangilanishni ko'radi va internet uzilganda ham ishlaydi. Avval talablar va <b>API shartnomasi</b> yoziladi: endpointlar, so'rov/javob shakllari, xato kodlari."
      },
      {
        "type": "code",
        "title": "kontrakt.js",
        "code": "import { z } from \"zod\";\n\nexport const VazifaSxema = z.object({\n  id: z.string().uuid(),\n  nom: z.string().min(1).max(120),\n  bajarildi: z.boolean(),\n  createdAt: z.string().datetime(),\n});\n\nexport const YangiVazifa = VazifaSxema.omit({ id: true, createdAt: true });\nconsole.log(Object.keys(YangiVazifa.shape).join(\",\"));",
        "output": "nom,bajarildi"
      },
      {
        "type": "p",
        "html": "Shartnoma ikki tomonga ham xizmat qiladi: backend validatsiya qiladi, frontend esa bir xil sxemadan tur va forma qoidalarini oladi. Endpointlar: <code>POST /api/auth/register</code>, <code>POST /api/auth/login</code>, <code>GET/POST /api/vazifalar</code>, <code>PATCH/DELETE /api/vazifalar/:id</code>, <code>GET /api/health</code>."
      },
      {
        "type": "code",
        "title": "endpointlar.js",
        "code": "const kontrakt = {\n  \"GET /api/vazifalar\": { javob: 200, shakl: \"{ data, meta }\" },\n  \"POST /api/vazifalar\": { javob: 201, xato: [400, 401, 422] },\n  \"PATCH /api/vazifalar/:id\": { javob: 200, xato: [401, 403, 404] },\n  \"DELETE /api/vazifalar/:id\": { javob: 204, xato: [401, 403, 404] },\n};\nfor (const [yol, qoida] of Object.entries(kontrakt)) {\n  console.log(`${yol} -> ${qoida.javob}`);\n}",
        "output": "GET /api/vazifalar -> 200\nPOST /api/vazifalar -> 201\nPATCH /api/vazifalar/:id -> 200\nDELETE /api/vazifalar/:id -> 204"
      },
      {
        "type": "table",
        "head": [
          "Qatlam",
          "Mas'uliyat",
          "Texnologiya"
        ],
        "rows": [
          [
            "Frontend",
            "UI, forma, offline kesh",
            "Vite + React (yoki Vue)"
          ],
          [
            "API",
            "REST, auth, realtime",
            "Node.js + Express"
          ],
          [
            "Baza",
            "Foydalanuvchi va vazifalar",
            "SQLite + Prisma"
          ],
          [
            "Realtime",
            "Yangilanishlarni tarqatish",
            "WebSocket"
          ],
          [
            "Deploy",
            "Konteyner va statik hosting",
            "Docker + CI"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Vertikal kesim",
        "html": "Loyihani qatlam-qatlam emas, <b>vertikal kesim</b> bilan quring: avval «vazifa yaratish» to'liq ishlaydigan yo'l (UI → API → baza → test). Keyin «ro'yxat», «auth», «realtime». Har bosqichda ishlaydigan mahsulot bo'ladi va xavf erta ko'rinadi."
      }
    ],
    "quiz": [
      {
        "q": "API shartnomasi nimani belgilaydi?",
        "options": [
          "Faqat dizayn ranglarini",
          "Faqat ma'lumotlar bazasi sxemasini",
          "Endpointlar, so'rov/javob shakli va xato kodlarini",
          "Deploy provayderini"
        ],
        "answer": 2,
        "explain": "Shartnoma ikki tomon uchun kelishuv: yo'llar, metodlar, maydonlar va status kodlar."
      },
      {
        "q": "`DELETE` muvaffaqiyatli bajarilganda shartnomada qaysi status ko'rsatilgan?",
        "options": [
          "200",
          "204",
          "201",
          "404"
        ],
        "answer": 1,
        "explain": "204 No Content o'chirishdan keyin javob tanasi yo'qligini bildiradi."
      },
      {
        "q": "Vertikal kesim yondashuvi nimani anglatadi?",
        "options": [
          "Barcha UI ni birinchi qilish",
          "Faqat test yozish",
          "Bitta funksiyani UI dan bazagacha to'liq ishlatish",
          "Faqat dizayn qilish"
        ],
        "answer": 2,
        "explain": "Har kesim oxirida ishlaydigan funksiya bo'ladi; bu integratsiya xavfini erta ko'rsatadi."
      }
    ]
  },
  {
    "id": 95,
    "title": "Backend: Express va SQLite API",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Backend uchun Express va SQLite yetarli. Jadvalda <code>vazifa</code> va <code>foydalanuvchi</code> bo'ladi, har vazifa egasiga bog'lanadi. Ro'yxat endpointi sahifalash va filtrni qo'llab-quvvatlaydi; barcha so'rovlar parametrlangan va autentifikatsiyadan o'tgan."
      },
      {
        "type": "code",
        "title": "royxat.mjs",
        "code": "app.get(\"/api/vazifalar\", himoya, (req, res) => {\n  const sahifa = Math.max(1, Number(req.query.sahifa) || 1);\n  const limit = 2;\n  const jami = db.prepare(\"SELECT COUNT(*) AS soni FROM vazifa WHERE egasi = ?\")\n    .get(req.foydalanuvchi.id).soni;\n  const qatorlar = db.prepare(\n    \"SELECT id, nom FROM vazifa WHERE egasi = ? ORDER BY id DESC LIMIT ? OFFSET ?\"\n  ).all(req.foydalanuvchi.id, limit, (sahifa - 1) * limit);\n  res.json({ data: qatorlar, meta: { sahifa, limit, jami } });\n});\n// GET /api/vazifalar?sahifa=1 (3 ta yozuvdan 2 tasi)",
        "output": "{\"data\":[{\"id\":3,\"nom\":\"Deploy\"},{\"id\":2,\"nom\":\"Testlar\"}],\"meta\":{\"sahifa\":1,\"limit\":2,\"jami\":3}}"
      },
      {
        "type": "p",
        "html": "Sahifalashda <code>ORDER BY</code> barqaror bo'lishi kerak, aks holda bir yozuv ikki sahifada ko'rinishi mumkin. <code>LIMIT</code> va <code>OFFSET</code> ni parametr qilib bering. Javobda <code>meta</code> bilan umumiy sonni qaytarish frontendga sahifa tugmalarini chizishga yordam beradi."
      },
      {
        "type": "code",
        "title": "yaratish.mjs",
        "code": "app.post(\"/api/vazifalar\", himoya, (req, res) => {\n  const natija = YangiVazifa.safeParse(req.body);\n  if (!natija.success) return res.status(422).json({ xato: \"Validatsiya\" });\n  const qosh = db.prepare(\"INSERT INTO vazifa (nom, egasi) VALUES (?, ?)\");\n  const info = qosh.run(natija.data.nom, req.foydalanuvchi.id);\n  res.status(201).json({ id: Number(info.lastInsertRowid) });\n});\n// POST {\"nom\":\"Deploy\"}",
        "output": "201\n{\"id\":3}"
      },
      {
        "type": "ul",
        "items": [
          "Barcha vazifa so'rovlarida <code>WHERE egasi = ?</code> — boshqa foydalanuvchi ma'lumotini ko'rsatmaslik uchun.",
          "Yozish amallarini tranzaksiyaga o'rang: vazifa va audit yozuvi birga saqlansin.",
          "Migratsiyalarni versiyalang; ishlab chiqarishda avtomatik <code>db push</code> qilmang.",
          "Sahifalash uchun katta jadvalda <code>keyset</code> (id < oxirgi) usuli OFFSET dan tezroq."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Egasi tekshiruvi",
        "html": "Faqat ID bo'yicha qidirib, keyin egasini tekshirmaslik <b>IDOR</b> zaifligini beradi. So'rovning o'zida <code>WHERE id = ? AND egasi = ?</code> ishlating. 404 va 403 ni ataylab aralashtirib, resurs mavjudligini oshkor qilmang."
      }
    ],
    "quiz": [
      {
        "q": "Sahifalashda `ORDER BY` nima uchun barqaror bo'lishi kerak?",
        "options": [
          "Tezroq ishlash uchun",
          "Kesh uchun",
          "SQL injection oldini olish uchun",
          "Yozuvlar sahifalar orasida takrorlanmasligi uchun"
        ],
        "answer": 3,
        "explain": "Tartib barqaror bo'lmasa, bir yozuv ikki sahifada chiqishi yoki umuman ko'rinmasligi mumkin."
      },
      {
        "q": "Foydalanuvchi boshqasining vazifasini ID orqali so'rasa, so'rov qanday bo'lishi kerak?",
        "options": [
          "Faqat id bo'yicha",
          "id va egasi bo'yicha",
          "Faqat nom bo'yicha",
          "Barcha vazifalarni qaytarish"
        ],
        "answer": 1,
        "explain": "WHERE id = ? AND egasi = ? egasi tekshiruvini so'rovning o'ziga qo'shadi va IDOR ning oldini oladi."
      },
      {
        "q": "`lastInsertRowid` nimani beradi?",
        "options": [
          "Jadvaldagi qatorlar sonini",
          "Yangi yozuvning id sini",
          "Oxirgi xatoni",
          "Baza versiyasini"
        ],
        "answer": 1,
        "explain": "INSERT dan keyin yangi yozuvning avtomatik id si lastInsertRowid da bo'ladi."
      }
    ]
  },
  {
    "id": 96,
    "title": "Auth, validatsiya va xavfsizlikni ulash",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Loyihada autentifikatsiya <code>HttpOnly</code> cookie'dagi qisqa muddatli JWT bilan quriladi. Har himoyalangan route <code>himoya</code> middleware'idan o'tadi: token imzosi, muddati va issuer tekshiriladi. Rollar bo'yicha ruxsat alohida guard bilan beriladi."
      },
      {
        "type": "code",
        "title": "himoya.mjs",
        "code": "import { jwtVerify } from \"jose\";\nconst kalit = new TextEncoder().encode(process.env.JWT_SECRET);\n\nexport async function himoya(req, res, next) {\n  const token = req.cookies.sessiya;\n  if (!token) return res.status(401).json({ xato: \"Avtorizatsiya kerak\" });\n  try {\n    const { payload } = await jwtVerify(token, kalit, { issuer: \"noldan.uz\" });\n    req.foydalanuvchi = { id: payload.sub, rol: payload.rol };\n    next();\n  } catch {\n    res.status(401).json({ xato: \"Token yaroqsiz\" });\n  }\n}\n// Cookie bo'lmasa:",
        "output": "401 {\"xato\":\"Avtorizatsiya kerak\"}"
      },
      {
        "type": "p",
        "html": "Token yaroqsiz bo'lsa ham 401 qaytadi, lekin sabab logga yoziladi. <code>jwtVerify</code> imzo, <code>exp</code>, <code>nbf</code> va <code>iss</code> ni tekshiradi. Maxfiy kalit env'da, kamida 32 bayt bo'lishi kerak. Refresh token rotatsiyasi bilan o'g'irlangan tokenni bekor qilish mumkin."
      },
      {
        "type": "code",
        "title": "rol.mjs",
        "code": "function rolTalab(...rollar) {\n  return (req, res, next) => {\n    if (!rollar.includes(req.foydalanuvchi?.rol)) {\n      return res.status(403).json({ xato: \"Ruxsat yo'q\" });\n    }\n    next();\n  };\n}\n\napp.delete(\"/api/vazifalar/:id\", himoya, rolTalab(\"admin\"), (req, res) => {\n  res.sendStatus(204);\n});\n// Oddiy foydalanuvchi admin route'iga murojaat qilsa:",
        "output": "403 {\"xato\":\"Ruxsat yo'q\"}"
      },
      {
        "type": "ul",
        "items": [
          "Parolni <code>argon2</code> yoki <code>scrypt</code> bilan tuzlab hash qiling.",
          "Login endpointiga rate limit qo'ying: IP va akkaunt bo'yicha.",
          "Cookie: <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite=Lax</code>, tor <code>Path</code>.",
          "Xatolarda token tafsilotini ko'rsatmang; <code>requestId</code> bilan logga bog'lang.",
          "CSRF tokenini holat o'zgartiruvchi so'rovlarda tekshiring."
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Avtorizatsiya har so'rovda",
        "html": "Frontendda tugmani yashirish xavfsizlik emas: API'ni to'g'ridan-to'g'ri chaqirish mumkin. Har bir resurs so'rovida egalik yoki rolni serverda tekshiring. JWT ni <code>localStorage</code> ga qo'ymang; XSS bo'lsa token darhol o'g'irlanadi."
      }
    ],
    "quiz": [
      {
        "q": "JWT tekshiruvida `issuer` nima uchun ko'rsatiladi?",
        "options": [
          "Token hajmini kamaytirish",
          "Token o'z serveringiz tomonidan berilganini tasdiqlash",
          "Parolni yangilash",
          "Cookie o'chirish"
        ],
        "answer": 1,
        "explain": "iss tekshiruvi boshqa provayderning yaroqli tokenini qabul qilib yubormaslik uchun."
      },
      {
        "q": "Autentifikatsiya qilingan, lekin roli yetmaydigan foydalanuvchiga qaysi status mos?",
        "options": [
          "401",
          "404",
          "403",
          "422"
        ],
        "answer": 2,
        "explain": "401 — kimligi tasdiqlanmagan; 403 — kimligi ma'lum, lekin ruxsat yo'q."
      },
      {
        "q": "Login endpointida rate limit nima uchun kerak?",
        "options": [
          "Brute force urinishlarini sekinlashtirish uchun",
          "Parolni shifrlash uchun",
          "Tokenni qisqartirish uchun",
          "CORS uchun"
        ],
        "answer": 0,
        "explain": "Rate limit parolni ketma-ket sinash hujumini qimmatlashtiradi va akkauntni himoyalaydi."
      }
    ]
  },
  {
    "id": 97,
    "title": "Frontend: SPA klient va API integratsiyasi",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Klient API bilan yagona wrapper orqali gaplashadi: cookie yuboriladi, 401 da login sahifasiga o'tiladi, xatolar bir joyda ishlanadi. UI uchta holatni ko'rsatishi shart: <b>yuklanmoqda</b>, <b>xato</b>, <b>ma'lumot</b>. Bu foydalanuvchi uchun oq va ishonchli tajriba beradi."
      },
      {
        "type": "code",
        "title": "api.js",
        "code": "const api = {\n  async vazifalar() {\n    const javob = await fetch(\"/api/vazifalar\", { credentials: \"include\" });\n    if (javob.status === 401) throw new Error(\"Kirish kerak\");\n    if (!javob.ok) throw new Error(`Xato: ${javob.status}`);\n    return (await javob.json()).data;\n  },\n};\n\nasync function yukla() {\n  try {\n    const vazifalar = await api.vazifalar();\n    console.log(\"yuklandi:\", vazifalar.length);\n  } catch (xato) {\n    if (xato.message === \"Kirish kerak\") location.assign(\"/login\");\n    else console.error(xato.message);\n  }\n}\nyukla();",
        "output": "yuklandi: 3"
      },
      {
        "type": "p",
        "html": "Renderda foydalanuvchi matnini <code>innerHTML</code> bilan qo'shmang: <code>textContent</code> yoki frameworkning xavfsiz binding'i ishlatiladi. Ro'yxat elementiga <code>dataset.id</code> qo'yib, hodisa delegatsiyasi bilan boshqarish mumkin. Optimistik yangilashda avval UI o'zgaradi, xato bo'lsa qaytariladi."
      },
      {
        "type": "code",
        "title": "render.js",
        "code": "function qator(vazifa) {\n  const li = document.createElement(\"li\");\n  li.dataset.id = vazifa.id;\n  const nom = document.createElement(\"span\");\n  nom.textContent = vazifa.nom;\n  const tugma = document.createElement(\"button\");\n  tugma.textContent = \"O'chirish\";\n  tugma.addEventListener(\"click\", () => li.remove());\n  li.append(nom, tugma);\n  return li;\n}\ndocument.querySelector(\"#royxat\").append(qator({ id: \"t1\", nom: \"Kod yozish\" }));\nconsole.log(document.querySelector(\"#royxat li span\").textContent);",
        "output": "Kod yozish"
      },
      {
        "type": "ul",
        "items": [
          "Har so'rovda <code>credentials: \"include\"</code> — cookie yuborilishi uchun.",
          "401 ni qayta urinish bilan cheksiz aylantirmang; login oqimiga yo'naltiring.",
          "Yuklanish skeletonlari va bo'sh holat («vazifa yo'q») alohida ko'rsatilsin.",
          "Optimistik yangilashda <code>tempId</code> bilan haqiqiy id ni almashtiring.",
          "Forma yuborilganda tugmani bloklang: ikki marta bosish dublikat yaratmasin."
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Xatoni foydalanuvchi tilida",
        "html": "«HTTP 500» o'rniga «Saqlab bo'lmadi, qayta urinib ko'ring» yozing va «Qayta urinish» tugmasini bering. Texnik tafsilotlarni konsolga, foydalanuvchiga tushunarli xabar qoldiring. Tarmoq uzilishini <code>navigator.onLine</code> va <code>online/offline</code> hodisalari bilan kuzating."
      }
    ],
    "quiz": [
      {
        "q": "Cookie asosidagi autentifikatsiyada fetch qanday sozlanishi kerak?",
        "options": [
          "cache: \"no-store\"",
          "mode: \"no-cors\"",
          "credentials: \"include\"",
          "redirect: \"manual\""
        ],
        "answer": 2,
        "explain": "credentials: include cross-origin so'rovlarda ham cookie yuborilishini ta'minlaydi."
      },
      {
        "q": "Foydalanuvchi matnini DOM ga xavfsiz qo'shish uchun nima ishlatiladi?",
        "options": [
          "innerHTML",
          "textContent",
          "outerHTML",
          "document.write"
        ],
        "answer": 1,
        "explain": "textContent matnni HTML sifatida parsmaydi va XSS ning oldini oladi."
      },
      {
        "q": "Optimistik yangilash nimani anglatadi?",
        "options": [
          "Server javobini kutmasdan UI ni darhol yangilash",
          "Faqat serverdan keyin UI yangilash",
          "Xatoni yashirish",
          "Keshni o'chirish"
        ],
        "answer": 0,
        "explain": "UI darhol o'zgaradi; server xato qaytarsa, oldingi holatga qaytariladi."
      }
    ]
  },
  {
    "id": 98,
    "title": "Realtime, offline va PWA qatlami",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Yakuniy qatlam ilovani «tirik» qiladi: WebSocket orqali boshqa qurilmadagi o'zgarishlar keladi, Service Worker offline rejimni ta'minlaydi, fon sinxronizatsiyasi esa uzilganda yuborilmagan amallarni keyin jo'natadi."
      },
      {
        "type": "code",
        "title": "realtime.js",
        "code": "function ulanish() {\n  const protokol = location.protocol === \"https:\" ? \"wss\" : \"ws\";\n  const ws = new WebSocket(`${protokol}://${location.host}/ws`);\n  ws.onmessage = (event) => {\n    const xabar = JSON.parse(event.data);\n    console.log(\"yangilanish\", xabar.tur);\n  };\n  ws.onclose = () => setTimeout(ulanish, 1000);\n  return ws;\n}\nulanish();\n// Boshqa qurilma vazifa qo'shganda:",
        "output": "yangilanish vazifa-qoshildi"
      },
      {
        "type": "p",
        "html": "Realtime xabarlar <b>idempotent</b> bo'lsin: bir xil xabar ikki marta kelsa ham natija bir xil bo'lishi kerak. Har xabarda <code>eventId</code> va <code>versiya</code> yuboring. Offline navbatda amallar <b>tartib bilan</b> saqlanadi; server ularni qabul qilganda konflikt siyosati (oxirgi yozuv yoki merge) qo'llanadi."
      },
      {
        "type": "code",
        "title": "sync-sw.js",
        "code": "self.addEventListener(\"sync\", (event) => {\n  if (event.tag === \"vazifa-yuborish\") {\n    event.waitUntil(navbatniYubor());\n  }\n});\n\nasync function navbatniYubor() {\n  const navbat = await oxirgiNavbat();\n  for (const amal of navbat) {\n    await fetch(amal.url, amal);\n  }\n  console.log(`navbat yuborildi: ${navbat.length} amal`);\n}\n// Internet qaytganda:",
        "output": "navbat yuborildi: 2 amal"
      },
      {
        "type": "table",
        "head": [
          "Qatlam",
          "Vazifasi",
          "Vosita"
        ],
        "rows": [
          [
            "Realtime",
            "Onlayn yangilanish",
            "WebSocket"
          ],
          [
            "Offline kesh",
            "Qobiq va statik fayllar",
            "Cache API + SW"
          ],
          [
            "Lokal navbat",
            "Yuborilmagan amallar",
            "IndexedDB"
          ],
          [
            "Fon sinxroni",
            "Keyinroq yuborish",
            "Background Sync"
          ],
          [
            "Bildirishnoma",
            "Foydalanuvchini chaqirish",
            "Push API"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "warning",
        "title": "Konfliktni oldindan hal qiling",
        "html": "Ikki qurilma bir vazifani tahrirlasa, «oxirgi yozuv yutadi» ma'lumot yo'qotishi mumkin. Har yozuvga <code>updatedAt</code> va <code>version</code> qo'shing; server eski versiyani 409 bilan rad etsin. Foydalanuvchiga tanlov bering yoki maydon darajasida birlashtiring."
      }
    ],
    "quiz": [
      {
        "q": "Offline paytida bajarilgan amallar qayerda navbatga qo'yilishi mumkin?",
        "options": [
          "localStorage faqat",
          "IndexedDB",
          "URL hash",
          "CSS"
        ],
        "answer": 1,
        "explain": "IndexedDB katta va murakkab amallarni saqlash uchun mos; Service Worker fon sinxronida ularni yuboradi."
      },
      {
        "q": "Realtime xabarlarni idempotent qilish nima uchun muhim?",
        "options": [
          "Takroriy yetkazish natijani buzmasligi uchun",
          "Xabar hajmini kamaytirish",
          "Ulanishni tezlashtirish",
          "Keshni tozalash"
        ],
        "answer": 0,
        "explain": "Tarmoq qayta yuborishi mumkin; eventId yoki versiya bilan dublikatni ajratish kerak."
      },
      {
        "q": "Konfliktni hal qilishda `version` maydoni nima beradi?",
        "options": [
          "Yozuv eskisini aniqlash imkonini",
          "Parolni",
          "Fayl hajmini",
          "CSS klassini"
        ],
        "answer": 0,
        "explain": "Server kelgan versiya joriydan eski bo'lsa 409 qaytarib, ma'lumot yo'qolishini oldini oladi."
      }
    ]
  },
  {
    "id": 99,
    "title": "Testlar, CI, deploy va suhbatga tayyorgarlik",
    "minutes": 18,
    "blocks": [
      {
        "type": "p",
        "html": "Loyiha testlar bilan yakunlanadi: unit (domain), integratsiya (API), E2E (asosiy oqim). CI har push'da lint, test va buildni ishga tushiradi. Deploydan keyin <b>smoke test</b> sog'liq endpointini tekshiradi; muammo bo'lsa rollback tayyor bo'lishi kerak."
      },
      {
        "type": "code",
        "title": "api.test.js",
        "code": "import request from \"supertest\";\nimport { test, expect } from \"vitest\";\nimport { app } from \"../app.js\";\n\ntest(\"POST /api/vazifalar\", async () => {\n  const javob = await request(app)\n    .post(\"/api/vazifalar\")\n    .set(\"Cookie\", \"sessiya=test\")\n    .send({ nom: \"Yangi vazifa\" });\n  expect(javob.status).toBe(201);\n  expect(javob.body.nom).toBe(\"Yangi vazifa\");\n});",
        "output": "✓ POST /api/vazifalar\n\nTest Files  1 passed (1)\nTests  1 passed (1)"
      },
      {
        "type": "p",
        "html": "Deploy — jarayonning oxiri emas: monitoring, loglar va xatolarni kuzatish kerak. Smoke test versiya va holatni tekshiradi. Konteynerda <code>NODE_ENV=production</code>, sir env orqali, migratsiyalar alohida qadam sifatida bajariladi. Statik frontend CDN'ga, API konteynerga joylashadi."
      },
      {
        "type": "code",
        "title": "smoke.mjs",
        "code": "const asos = process.env.API_URL ?? \"https://api.noldan.uz\";\nconst javob = await fetch(`${asos}/health`);\nconst data = await javob.json();\nif (javob.status !== 200 || data.holat !== \"ok\") {\n  console.error(\"Deploy tekshiruvi muvaffaqiyatsiz\");\n  process.exit(1);\n}\nconsole.log(`Deploy tayyor: ${asos} (${data.versiya})`);",
        "output": "Deploy tayyor: https://api.noldan.uz (1.4.0)"
      },
      {
        "type": "table",
        "head": [
          "Mavzu",
          "Asosiy g'oya",
          "Amaliyot"
        ],
        "rows": [
          [
            "Event loop",
            "Mikrotask → render → makrotask",
            "Tartib savollari"
          ],
          [
            "TypeScript",
            "unknown, generics, narrowing",
            "API shartnomasi"
          ],
          [
            "Testlash",
            "Piramida: unit → integratsiya → E2E",
            "Vitest, Playwright"
          ],
          [
            "Xavfsizlik",
            "XSS, CSRF, CORS, auth",
            "CSP, SameSite, JWT"
          ],
          [
            "Arxitektura",
            "Qatlamlar va domain",
            "ADR, vertikal kesim"
          ],
          [
            "Unumdorlik",
            "LCP, INP, CLS, xotira",
            "Profiling va o'lchov"
          ]
        ]
      },
      {
        "type": "note",
        "variant": "tip",
        "title": "Suhbatda tizimli gapiring",
        "html": "Savolga darhol kod yozishdan oldin talabni aniqlang, chegaralarni ayting, oddiy yechimdan boshlang. «Nega bunday?» degan savolga o'lchov yoki savdo natijasi bilan javob bering. Bilmasangiz, taxmin qilish o'rniga qanday tekshirishingizni ayting — bu kuchli signal."
      }
    ],
    "quiz": [
      {
        "q": "Deploydan keyingi smoke test nimani tekshiradi?",
        "options": [
          "Asosiy endpoint va versiya ishlayotganini",
          "Barcha unit testlarni",
          "CSS dizaynini",
          "Faqat loglarni"
        ],
        "answer": 0,
        "explain": "Smoke test qisqa va tez: sog'liq endpointi, versiya va asosiy javob tekshiriladi."
      },
      {
        "q": "CI pipeline'da qaysi tartib mantiqan to'g'ri?",
        "options": [
          "O'rnatish → lint → test → build → deploy",
          "Deploy → test → lint",
          "Test → o'rnatish → deploy",
          "Build → lint → o'rnatish"
        ],
        "answer": 0,
        "explain": "Arzon va tez tekshiruvlar oldin, keyin test/build, oxirida deploy bajariladi."
      },
      {
        "q": "Suhbatda noma'lum savolga eng yaxshi javob qanday?",
        "options": [
          "Taxmin qilib javob berish",
          "Savolni aniqlashtirib, tekshirish yo'lini tushuntirish",
          "Mavzuni o'zgartirish",
          "«Bilmayman» deb jim qolish"
        ],
        "answer": 1,
        "explain": "Talabni aniqlash va tekshirish strategiyasini ko'rsatish muhandislik fikrlashni namoyish etadi."
      }
    ]
  }
];

  window.NOLDAN_COURSE_VOLUMES.javascript = {
    modules: [
  {
    "title": "Asinxronlik va event loop chuqur",
    "lessons": [
      50,
      51,
      52,
      53,
      54
    ]
  },
  {
    "title": "Modullar, build va TypeScript",
    "lessons": [
      55,
      56,
      57,
      58,
      59,
      60
    ]
  },
  {
    "title": "Testlash va sifat",
    "lessons": [
      61,
      62,
      63,
      64,
      65
    ]
  },
  {
    "title": "Node.js va backend",
    "lessons": [
      66,
      67,
      68,
      69,
      70,
      71
    ]
  },
  {
    "title": "Brauzer API'lari va Web Components",
    "lessons": [
      72,
      73,
      74,
      75,
      76,
      77
    ]
  },
  {
    "title": "Unumdorlik, xotira va a11y",
    "lessons": [
      78,
      79,
      80,
      81,
      82
    ]
  },
  {
    "title": "Xavfsizlik chuqur",
    "lessons": [
      83,
      84,
      85,
      86,
      87
    ]
  },
  {
    "title": "Frameworklar va arxitektura",
    "lessons": [
      88,
      89,
      90,
      91,
      92,
      93
    ]
  },
  {
    "title": "Full-stack loyiha va takrorlash",
    "lessons": [
      94,
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
    lessons: lessons,
    examLesson: {
  "id": 100,
  "title": "Yakuniy imtihon",
  "minutes": 20,
  "isExam": true,
  "blocks": [
    {
      "type": "p",
      "html": "Bu imtihon JavaScript kursining ikkinchi jildini yakunlaydi. Savollar butun ilg'or dasturni qamrab oladi: event loop va mikrotasklar, ESM va bundlerlar, TypeScript, Vitest va Playwright, Node.js/Express, REST, autentifikatsiya, WebSocket va SSE, IndexedDB, Service Worker/PWA, Web Components, unumdorlik va xotira, XSS/CSRF/CORS, React/Vue, SSR va full-stack loyiha amaliyoti."
    },
    {
      "type": "h",
      "html": "Imtihon tuzilishi"
    },
    {
      "type": "ul",
      "items": [
        "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob va to'rtta variant.",
        "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
        "Har bir savol turli moduldan: nazariya, kod tartibi, API va xavfsizlik amaliyoti.",
        "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi."
      ]
    },
    {
      "type": "note",
      "variant": "tip",
      "title": "Topshirishdan oldin",
      "html": "Savolni oxirigacha o'qing: «qaysi biri <b>noto'g'ri</b>» yoki «eng mos» kabi iboralar javobni o'zgartiradi. Kod tartibi savollarida avval sinxron qismni, keyin mikrotasklarni, oxirida makrotasklarni ajratib oling. Ishonchingiz komil bo'lmasa, variantlarni istisno qilish usulidan foydalaning."
    }
  ],
  "quiz": []
},
    exam: {
      passScore: 9,
      total: 12,
      questions: [
  {
    "q": "Mikrotask navbati, render va makrotask o'rtasidagi tartib qanday?",
    "options": [
      "Render har doim barcha mikrotasklardan oldin bajariladi",
      "Makrotask, render, keyin mikrotasklar",
      "Mikrotasklar tugagach render, keyin keyingi makrotask",
      "Render faqat setTimeout callback ichida chaqiriladi"
    ],
    "answer": 2,
    "explain": "Bir tickda stack va mikrotasklar bo'shaydi, so'ng brauzer render qilish imkoniyatiga ega bo'ladi, keyin keyingi makrotask olinadi."
  },
  {
    "q": "Dinamik `import()` ning asosiy afzalligi nimada?",
    "options": [
      "Modulni har doim sinxron yuklaydi",
      "Modulni kerak bo'lganda yuklab, alohida chunk hosil qiladi",
      "Faqat default eksportni import qiladi",
      "TypeScript turlarini avtomatik o'chiradi"
    ],
    "answer": 1,
    "explain": "import() promise qaytaradi va modulni talab paytida yuklaydi; bundler uni alohida bo'lakka ajratadi."
  },
  {
    "q": "Tashqi API dan kelgan JSON javobini TypeScript'da qaysi tur bilan qabul qilish xavfsizroq?",
    "options": [
      "any",
      "never",
      "void",
      "unknown"
    ],
    "answer": 3,
    "explain": "unknown ishlatishdan oldin turni tekshirishni talab qiladi; any esa tekshiruvni butunlay o'chiradi."
  },
  {
    "q": "Test piramidasida eng ko'p bo'lishi kerak bo'lgan testlar qaysi?",
    "options": [
      "Unit testlar",
      "Integratsiya testlari",
      "E2E testlar",
      "Qo'lda tekshiruvlar"
    ],
    "answer": 0,
    "explain": "Unit testlar tez va arzon; piramidaning pastki qatlami keng bo'lib, E2E yuqorida kam sonli bo'ladi."
  },
  {
    "q": "REST'da yangi resurs yaratilganda qaysi status va header odatiy hisoblanadi?",
    "options": [
      "200 va ETag",
      "204 va Allow",
      "304 va Cache-Control",
      "201 va Location"
    ],
    "answer": 3,
    "explain": "201 Created yangi resurs yaratilganini, Location header esa uning URL manzilini bildiradi."
  },
  {
    "q": "JWT va server sessiyasini to'g'ri taqqoslaydigan bayonot qaysi?",
    "options": [
      "JWT holatni serverda saqlaydi, sessiya esa tokenda",
      "Ikkalasi ham faqat cookie orqali ishlaydi",
      "Sessiyani serverda darhol bekor qilish oson, JWT esa muddatigacha amal qiladi",
      "JWT parolni avtomatik shifrlaydi"
    ],
    "answer": 2,
    "explain": "Sessiya serverdagi yozuvga bog'liq va darhol o'chiriladi; JWT o'z-o'zicha yetarli, shuning uchun muddat va refresh rotatsiyasi muhim."
  },
  {
    "q": "Serverdan klientga faqat bir tomonlama realtime oqim kerak. Qaysi texnologiya eng sodda?",
    "options": [
      "Server-Sent Events",
      "WebSocket",
      "WebRTC",
      "gRPC streaming"
    ],
    "answer": 0,
    "explain": "SSE oddiy HTTP ustida bir tomonlama oqim beradi va EventSource bilan avtomatik qayta ulanadi."
  },
  {
    "q": "IndexedDB ning localStorage ga nisbatan asosiy afzalligi nimada?",
    "options": [
      "Sinxron API beradi",
      "Faqat matn saqlaydi",
      "Obyektlar va indekslarni asinxron saqlaydi",
      "Faqat serverda ishlaydi"
    ],
    "answer": 2,
    "explain": "IndexedDB katta hajm, obyektlar, indekslar va tranzaksiyalarni asinxron qo'llab-quvvatlaydi."
  },
  {
    "q": "Service Worker'ning yangi versiyasini darhol faollashtirish uchun nima qilinadi?",
    "options": [
      "localStorage.clear() chaqiriladi",
      "serviceWorker.unregister() darhol chaqiriladi",
      "fetch kesh butunlay o'chiriladi",
      "skipWaiting() va clients.claim() ishlatiladi"
    ],
    "answer": 3,
    "explain": "skipWaiting yangi SW ni kutmasdan faollashtiradi, clients.claim mavjud sahifalarni unga bog'laydi."
  },
  {
    "q": "Brauzer CORS sabab javobni JS ga bermasa, server so'rovni bajargan bo'lishi mumkinmi?",
    "options": [
      "Yo'q, server ham so'rovni rad etadi",
      "Ha, CORS faqat brauzerdagi javobni cheklaydi",
      "Faqat HTTPS da bajarilmaydi",
      "Faqat GET so'rovlari bajarilmaydi"
    ],
    "answer": 1,
    "explain": "CORS — brauzer siyosati; server so'rovni bajargan bo'lishi mumkin, lekin javob sahifa JS ga berilmaydi."
  },
  {
    "q": "React hooks qayerda chaqirilishi mumkin?",
    "options": [
      "Funksional komponent yoki custom hook ichida, eng yuqori darajada",
      "Har qanday funksiya ichida, shart bilan",
      "Faqat useEffect ichida",
      "Faqat class komponent metodlarida"
    ],
    "answer": 0,
    "explain": "Hooks faqat komponent yoki custom hookning yuqori darajasida, har renderda bir xil tartibda chaqiriladi."
  },
  {
    "q": "LCP ni yaxshilashga eng bevosita ta'sir qiladigan amal qaysi?",
    "options": [
      "Ko'proq console.log qo'shish",
      "Barcha CSS ni inline qilish",
      "Asosiy katta rasmni erta yuklash va o'lchamlarini berish",
      "localStorage ni tozalash"
    ],
    "answer": 2,
    "explain": "LCP eng katta kontent elementiga bog'liq; uni erta, to'g'ri o'lcham va ustuvorlik bilan yuklash vaqtni qisqartiradi."
  }
]
    },
    hours: "~40 soat",
    testCount: 297,
    heroDesc: "JavaScript'ning ikkinchi jildi: 99 dars, 297 test va 12 savollik yakuniy imtihon. Event loop va mikrotasklar chuqurligi, ESM va bundlerlar, TypeScript, Vitest va Playwright, Node.js/Express, REST va autentifikatsiya, WebSocket, IndexedDB, Service Worker/PWA, Web Components, unumdorlik, xavfsizlik, React/Vue, SSR va to'liq full-stack loyiha.",
    metaDescription: "JavaScript ilg'or kursi: 99 dars va 297 test. Event loop, TypeScript, Vitest, Node.js/Express, auth, WebSocket, IndexedDB, PWA, React/Vue, SSR, xavfsizlik va full-stack loyiha — amaliy kod va aniq natijalar bilan."
  };
})();
