module.exports = [
  {
    id: 70,
    title: "Accessibility tree: brauzer sahifani qanday o'qiydi",
    minutes: 16,
    desc: "Semantik landmarklar, sarlavhalar va ko'rinmas yordamchi matn orqali ekran o'quvchiga tushunarli tuzilma yaratasiz.",
    intro: "Ekran o'quvchi HTML'ni ko'rgani yo'q — u brauzer quradigan <b>accessibility tree</b> orqali ishlaydi. Unda har bir elementning roli, nomi va holati bo'ladi. Yaxshi semantik HTML bu daraxtni o'z-o'zidan to'g'ri quradi.",
    h: "Landmarklar va sarlavhalar",
    codes: [
      {
        title: "sahifa.html",
        lang: "html",
        code: `<header>
  <nav aria-label="Asosiy navigatsiya">
    <a href="/">Bosh sahifa</a>
    <a href="/kurslar">Kurslar</a>
  </nav>
</header>

<main>
  <h1>HTML & CSS ikkinchi jild</h1>
  <section aria-labelledby="layout-sarlavha">
    <h2 id="layout-sarlavha">Layout asoslari</h2>
    <p>Grid va Flex haqida.</p>
  </section>
</main>

<footer>
  <p>© 2026 Noldan</p>
</footer>`,
        output: "Accessibility tree'da banner roli (header), ikkita havolali navigation «Asosiy navigatsiya» nomi bilan, main, «Layout asoslari» nomli region va contentinfo (footer) paydo bo'ladi. Sarlavhalar h1 → h2 tartibida, sahifa tuzilishi ekran o'quvchi ro'yxatida ko'rinadi."
      },
      {
        title: "yordamchi.css",
        lang: "css",
        code: `.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  inset-block-start: -3rem;
  inset-inline-start: 1rem;
  padding: 0.75rem 1rem;
  background: #0f172a;
  color: #ffffff;
}

.skip-link:focus {
  inset-block-start: 1rem;
}`,
        output: "sr-only elementi vizual ravishda ko'rinmaydi, lekin ekran o'quvchi uchun matni saqlanadi. Skip link odatda ekrandan yuqorida yashiringan bo'ladi; Tab bosilganda 1rem pastda qora fonli havola sifatida paydo bo'ladi."
      }
    ],
    extra: {
      type: "table",
      headers: ["HTML elementi", "Accessibility roli", "Foydasi"],
      rows: [
        ["<code>header</code>", "banner", "Sahifa boshi sifatida tez o'tish"],
        ["<code>nav</code>", "navigation", "Havolalar guruhi"],
        ["<code>main</code>", "main", "Asosiy mazmun"],
        ["<code>footer</code>", "contentinfo", "Sahifa oxiri"],
        ["<code>section aria-labelledby</code>", "region", "Nomlangan bo'lim"],
        ["<code>h1–h6</code>", "heading", "Sarlavhalar bo'ylab navigatsiya"]
      ]
    },
    note: {
      variant: "tip",
      title: "Avval HTML, keyin ARIA",
      text: "Agar tegayiq semantik element mavjud bo'lsa, uni ishlating: <code>button</code>, <code>nav</code>, <code>main</code>. <code>div role=\"button\"</code> yozish ko'proq kod va ko'proq xato degani. ARIA faqat native semantika yetmagan joyda qo'shiladi."
    },
    quiz: [
      {
        q: "Accessibility tree nima?",
        options: [
          "CSS fayllar daraxti",
          "Brauzer quradigan rol, nom va holatlar daraxti",
          "Faqat DOM elementlari ro'yxati",
          "Serverdagi fayl tizimi"
        ],
        answer: 1,
        explain: "Assistiv texnologiyalar DOM'ning rol, nom va holatlar bilan boyitilgan accessibility tree versiyasidan foydalanadi."
      },
      {
        q: "Sahifada bir nechta nav bo'lsa, ularni ajratish uchun nima ishlatiladi?",
        options: [
          "Har biriga aria-label bilan nom berish",
          "Ularni div bilan o'rash",
          "Faqat rang bilan ajratish",
          "Barchasini bitta nav ichiga yig'ish"
        ],
        answer: 0,
        explain: "aria-label har bir navigatsiya hududiga noyob nom beradi va ekran o'quvchi ro'yxatida farqlanadi."
      },
      {
        q: "sr-only uslubining vazifasi nima?",
        options: [
          "Elementni butunlay o'chirish",
          "Matnni faqat qorong'i mavzuda ko'rsatish",
          "Vizual yashirib, ekran o'quvchi uchun matnni saqlash",
          "Shriftni kattalashtirish"
        ],
        answer: 2,
        explain: "sr-only element 1px o'lchamda yashiriladi, lekin accessibility tree'da qoladi."
      }
    ]
  },
  {
    id: 71,
    title: "Fokus boshqaruvi: tab tartibi, inert va dialog",
    minutes: 17,
    desc: "Klaviatura fokusi tartibini boshqarish, inert bilan fonni bloklash va modal dialogda fokusni ushlab turishni o'rganasiz.",
    intro: "Klaviatura foydalanuvchisi uchun fokus — sichqoncha kursorining o'rnini bosadi. Fokus tartibi DOM tartibiga mos bo'lishi, modal ochilganda fokus ichkarida qolishi va yopilganda avvalgi joyga qaytishi kerak.",
    h: "Modal dialog va fokus tuzog'i",
    codes: [
      {
        title: "dialog.html",
        lang: "html",
        code: `<button id="ochish" type="button">Ma'lumotni ochish</button>

<dialog id="malumot" aria-labelledby="dialog-sarlavha">
  <h2 id="dialog-sarlavha">Loyiha haqida</h2>
  <p>Bu modal oyna klaviatura fokusini ichida ushlab turadi.</p>
  <button id="yopish" type="button">Yopish</button>
</dialog>

<script>
  const dialog = document.querySelector("#malumot");
  const ochish = document.querySelector("#ochish");

  ochish.addEventListener("click", () => dialog.showModal());
  document.querySelector("#yopish").addEventListener("click", () => {
    dialog.close();
    ochish.focus();
  });
</script>`,
        output: "Tugma bosilganda dialog ekran markazida modal sifatida ochiladi va fokus birinchi fokuslanadigan elementga o'tadi. Tab faqat dialog ichidagi elementlar orasida aylanadi. Escape bosilganda dialog yopiladi va fokus «Ma'lumotni ochish» tugmasiga qaytadi."
      },
      {
        title: "focus.css",
        lang: "css",
        code: `:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}

dialog {
  max-width: 32rem;
  border: 0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

dialog::backdrop {
  background: rgb(15 23 42 / 0.55);
}

dialog[open] {
  animation: kirish 0.2s ease-out;
}

@keyframes kirish {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}`,
        output: "Faqat klaviatura bilan fokuslanganda 3px ko'k outline chiqadi. Dialog oq fonli, 0.75rem radiusli va 32rem dan keng bo'lmagan oyna sifatida ochiladi; orqa fon 55% to'q qoplama bilan qorayadi. Ochilishda oyna 8px pastdan 0.2 soniyada ko'tarilib chiqadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Qiymat / atribut", "Ma'nosi", "Qachon ishlatiladi?"],
      rows: [
        ["<code>tabindex=\"0\"</code>", "Tab tartibiga qo'shadi", "Native fokuslanmaydigan interaktiv element"],
        ["<code>tabindex=\"-1\"</code>", "Faqat JS bilan fokuslanadi", "Xato maydon yoki dialog sarlavhasi"],
        ["<code>tabindex=\"3\"</code>", "Ijobiy tartib — tavsiya etilmaydi", "Deyarli hech qachon"],
        ["<code>inert</code>", "Butun daraxtni fokus va AT'dan chiqaradi", "Ochiq modal ostidagi fon"],
        ["<code>showModal()</code>", "Modal dialog ochadi", "Fokus tuzog'i va backdrop kerak bo'lsa"]
      ]
    },
    note: {
      variant: "warning",
      title: "inert bilan fonni bloklang",
      text: "Modal dialog ochiq bo'lganda orqa sahifa ham Tab bilan fokuslanishi mumkin. <code>inert</code> atributini asosiy konteynerga qo'shsangiz, uning ichidagi barcha elementlar fokusdan va ekran o'quvchidan chiqadi. <code>aria-hidden</code> esa fokusni to'xtatmaydi, shuning uchun yolg'iz o'zi yetarli emas."
    },
    quiz: [
      {
        q: "tabindex=\"-1\" bo'lgan element qanday fokuslanadi?",
        options: [
          "Tab bilan birinchi bo'lib",
          "Faqat JavaScript orqali",
          "Hech qachon fokuslanmaydi",
          "Faqat mobil qurilmada"
        ],
        answer: 1,
        explain: "tabindex=-1 elementni Tab tartibidan chiqaradi, lekin focus() bilan programmatik fokuslash mumkin."
      },
      {
        q: "inert atributi nima qiladi?",
        options: [
          "Elementni faqat vizual yashiradi",
          "Elementni animatsiya bilan o'chiradi",
          "Daraxtni fokus, klik va assistiv texnologiyalardan chiqaradi",
          "Faqat rangni o'zgartiradi"
        ],
        answer: 2,
        explain: "inert butun subtree'ni interaktivlikdan va accessibility tree'dan olib tashlaydi."
      },
      {
        q: "dialog.showModal() bilan ochilgan oynada fokus qanday harakat qiladi?",
        options: [
          "Faqat dialog ichida aylanadi",
          "Sahifaning istalgan elementiga o'tadi",
          "Butunlay o'chadi",
          "Faqat sichqoncha bilan boshqariladi"
        ],
        answer: 0,
        explain: "Modal dialog fokusni o'z ichida ushlab turadi va Escape bilan yopiladi."
      }
    ]
  },
  {
    id: 72,
    title: "Ekran o'quvchi uchun nomlar va holatlar",
    minutes: 16,
    desc: "aria-label, aria-labelledby va aria-current yordamida interaktiv elementlarga aniq nom va holat berishni o'rganasiz.",
    intro: "Ekran o'quvchi tugmani «tugma» deb o'qiydi, lekin uning nomi bo'lmasa foydalanuvchi nima qilishini bilmaydi. Nom va holat — interfeysning eng muhim ma'lumotlari. Ularni native HTML bilan, yetarli bo'lmaganda ARIA bilan bering.",
    h: "Nom berish va holatni yangilash",
    codes: [
      {
        title: "navigatsiya.html",
        lang: "html",
        code: `<button id="menyu-tugma" type="button"
        aria-label="Asosiy menyuni ochish"
        aria-expanded="false"
        aria-controls="asosiy-menyu">
  <span aria-hidden="true">☰</span>
</button>

<nav id="asosiy-menyu" hidden aria-label="Asosiy menyu">
  <a href="/" aria-current="page">Bosh sahifa</a>
  <a href="/kurslar">Kurslar</a>
  <a href="/aloqa">Aloqa</a>
</nav>

<img src="/rasmlar/chiziq.svg" alt="" width="240" height="2">`,
        output: "Tugma ekran o'quvchida «Asosiy menyuni ochish, tugma, yopilgan» deb o'qiladi. Menyu ochilganda aria-expanded true bo'lishi kerak. «Bosh sahifa» havolasi «joriy sahifa» holati bilan aytiladi. Bezak chiziq rasmi e'tiborsiz qoldiriladi, chunki alt bo'sh."
      },
      {
        title: "holat.css",
        lang: "css",
        code: `[aria-expanded="true"] .menyu-ikonka {
  transform: rotate(90deg);
}

a[aria-current="page"] {
  font-weight: 700;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.25em;
}

[aria-expanded="true"] + nav {
  display: block;
}

.visually-hidden {
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}`,
        output: "Menyu ochilganda ikonka 90 daraja buriladi va nav blok sifatida ko'rinadi. Joriy sahifa havolasi qalin va qalinroq tag chizig'i bilan ajralib turadi. visually-hidden matni ko'rinmaydi, lekin ekran o'quvchi o'qiydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Usul", "Misol", "Ustuvorlik"],
      rows: [
        ["<code>aria-labelledby</code>", "Element id'siga havola", "Eng yuqori"],
        ["<code>aria-label</code>", "To'g'ridan-to'g'ri matn", "O'rtacha"],
        ["Native label", "<code>&lt;label for&gt;</code>", "Forma maydonlari uchun"],
        ["Element mazmuni", "Tugma ichidagi matn", "Asosiy manba"],
        ["<code>title</code>", "Qo'shimcha maslahat", "Eng past, ishonchsiz"]
      ]
    },
    note: {
      variant: "warning",
      title: "Ko'rinadigan matnni yashirmang",
      text: "Agar tugmada «Saqlash» yozuvi bo'lsa, <code>aria-label=\"Tahrirlash\"</code> qo'ymang: ko'rinadigan matn va ekran o'quvchi nomi mos kelmay qoladi. Bu «label in name» qoidasini buzadi va ovozli boshqaruv foydalanuvchisini chalg'itadi. Qo'shimcha kontekst kerak bo'lsa, ko'rinadigan matnni saqlab, uni kengaytiring."
    },
    quiz: [
      {
        q: "Bir elementda aria-labelledby va aria-label birga bo'lsa, nom sifatida qaysi biri ishlatiladi?",
        options: ["aria-label", "aria-labelledby", "title", "Element mazmuni"],
        answer: 1,
        explain: "Nom hisoblashda aria-labelledby aria-label'dan yuqori ustuvorlikka ega."
      },
      {
        q: "Joriy sahifadagi navigatsiya havolasini qaysi atribut bilan belgilash ma'qul?",
        options: ["aria-selected", "aria-checked", "aria-current=\"page\"", "aria-pressed"],
        answer: 2,
        explain: "aria-current=\"page\" joriy sahifa havolasini bildiradi va ekran o'quvchi buni e'lon qiladi."
      },
      {
        q: "Faqat bezak uchun qo'yilgan rasmga qanday alt beriladi?",
        options: ["alt=\"rasm\"", "alt=\"dekorativ\"", "alt ni butunlay olib tashlash", "alt=\"\""],
        answer: 3,
        explain: "Bo'sh alt=\"\" rasmni dekorativ deb belgilaydi va ekran o'quvchi uni o'tkazib yuboradi."
      }
    ]
  },
  {
    id: 73,
    title: "Qulaylik auditi: axe, Lighthouse va qo'lda test",
    minutes: 17,
    desc: "Avtomatik vositalar va qo'lda tekshiruvlarni birlashtirib, sahifani WCAG talablariga moslashni o'rganasiz.",
    intro: "Qulaylikni faqat ko'z bilan baholab bo'lmaydi. <b>axe</b> va Lighthouse tezda ko'p xatolarni topadi, lekin ularning qamrovi cheklangan. To'liq audit uchun klaviatura, ekran o'quvchi va zoom bilan qo'lda tekshirish shart.",
    h: "Skip link va audit belgilari",
    codes: [
      {
        title: "skip.html",
        lang: "html",
        code: `<body>
  <a class="skip-link" href="#asosiy">Asosiy mazmunga o'tish</a>

  <header class="sayt-boshi">
    <nav aria-label="Asosiy">
      <a href="/">Bosh sahifa</a>
      <a href="/kurslar">Kurslar</a>
    </nav>
  </header>

  <main id="asosiy" tabindex="-1">
    <h1>Kurslar</h1>
    <p>Asosiy mazmun shu yerda boshlanadi.</p>
  </main>
</body>`,
        output: "Sahifa ochilganda skip link ko'rinmaydi. Birinchi Tab bosilganda «Asosiy mazmunga o'tish» havolasi chiqadi. Enter bosilsa, fokus main bo'limiga o'tadi va ekran o'quvchi shu yerdan davom etadi. Navigatsiya har safar takrorlanmaydi."
      },
      {
        title: "skip.css",
        lang: "css",
        code: `.skip-link {
  position: absolute;
  inset-block-start: -4rem;
  inset-inline-start: 1rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  background: #0f172a;
  color: #ffffff;
  border-radius: 0.5rem;
}

.skip-link:focus {
  inset-block-start: 1rem;
}

:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}`,
        output: "Skip link ekran yuqorisidan 4rem tashqarida yashirin turadi. Fokuslanganda 1rem pastda qora fonli, oq matnli havola paydo bo'ladi. Barcha klaviatura fokuslari 3px sariq outline va 3px bo'shliq bilan aniq ko'rinadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Tekshiruv", "Nimani topadi?", "Nimani topmaydi?"],
      rows: [
        ["axe DevTools", "Kontrast, nom, rol xatolari", "Mantiqiy tartib va tushunarlilik"],
        ["Lighthouse", "Umumiy ball va asosiy xatolar", "Murakkab klaviatura oqimi"],
        ["Klaviatura testi", "Fokus tartibi va tuzoqlar", "Vizual kontrast"],
        ["Ekran o'quvchi", "Nom, holat va o'qish tartibi", "Ba'zi vizual muammolar"],
        ["200% zoom", "Matn va layout moslashuvi", "SR-only mazmun"]
      ]
    },
    note: {
      variant: "tip",
      title: "Avtomatik vosita — boshlanish",
      text: "axe va Lighthouse barcha muammolarning faqat bir qismini topadi. Ulardan keyin albatta klaviatura bilan Tab, Shift+Tab, Enter va Escape ni sinang; sahifani 200% kattalashtiring; ekran o'quvchi bilan sarlavhalar ro'yxatini tinglang. WCAG AA odatdagi matn uchun 4.5:1 kontrast talab qiladi."
    },
    quiz: [
      {
        q: "WCAG AA bo'yicha oddiy matn uchun minimal kontrast nisbati qancha?",
        options: ["2:1", "3:1", "4.5:1", "7:1"],
        answer: 2,
        explain: "Oddiy matn uchun 4.5:1, katta matn va grafik elementlar uchun 3:1 talab qilinadi."
      },
      {
        q: "Avtomatik qulaylik vositalarining asosiy cheklovi nimada?",
        options: [
          "Ular umuman ishlamaydi",
          "Faqat rangni tekshiradi",
          "Barcha muammolarni topadi",
          "Mantiqiy tartib va tushunarlilikni to'liq baholay olmaydi"
        ],
        answer: 3,
        explain: "Vositalar sintaktik xatolarni topadi, lekin foydalanuvchi tajribasini va mazmun mantiqini baholay olmaydi."
      },
      {
        q: "Qulaylik auditida klaviatura testi nima uchun kerak?",
        options: [
          "Fokus tartibi, tuzoqlar va Escape xatti-harakatini tekshirish uchun",
          "Faqat sahifa tezligini o'lchash uchun",
          "CSS fayllarini kichraytirish uchun",
          "Ranglarni avtomatik almashtirish uchun"
        ],
        answer: 0,
        explain: "Klaviatura testi fokusning mantiqiy ketma-ketligini va modal kabi tuzoqlarni aniqlaydi."
      }
    ]
  },
  {
    id: 74,
    title: "Animatsiya unumdorligi: compositor va qatlamlar",
    minutes: 17,
    desc: "Qaysi CSS xossalari arzon animatsiyalanadi, will-change va contain bilan ishlashni amaliy misollarda o'rganasiz.",
    intro: "Har bir animatsiya bir xil tezlikda ishlamaydi. <code>width</code> yoki <code>top</code> o'zgarishi layout va paintni qayta hisoblashga majbur qiladi. <b>transform</b> va <b>opacity</b> esa ko'pincha compositor darajasida bajariladi va silliqroq ishlaydi.",
    h: "Arzon va qimmat harakat",
    codes: [
      {
        title: "silliq.css",
        lang: "css",
        code: `.karta {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  will-change: transform;
}

.karta:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 12px 28px rgb(15 23 42 / 0.18);
}

.yuklanish {
  animation: paydo 0.5s ease-out both;
}

@keyframes paydo {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .karta { transition: none; will-change: auto; }
  .yuklanish { animation: none; }
}`,
        output: "Karta hover'da 4px yuqoriga ko'tarilib, 1% kattalashadi va soyasi kuchayadi; harakat 0.25 soniyada silliq bajariladi. Sahifa ochilganda element 12px pastdan 0.5 soniyada paydo bo'ladi. Kam harakat sozlamasida ikkala effekt ham o'chadi va will-change bekor qilinadi."
      },
      {
        title: "chegara.css",
        lang: "css",
        code: `.royxat {
  content-visibility: auto;
  contain-intrinsic-size: auto 320px;
}

.asboblar {
  contain: layout paint;
}

.arzon-harakat {
  transition: opacity 0.2s linear;
}

.qimmat-harakat {
  transition: width 0.2s linear, top 0.2s linear;
}`,
        output: "Ekrandan tashqaridagi ro'yxat bo'limlari dastlab render qilinmaydi, lekin taxminiy 320px balandlik saqlanadi. Asboblar paneli layout va paint hisobini tashqariga chiqarmaydi. opacity o'zgarishi kompozitorda bajariladi; width va top esa layoutni qayta hisoblashga olib kelishi mumkin."
      }
    ],
    extra: {
      type: "table",
      headers: ["Xossa", "Qaysi bosqichda ishlaydi?", "Narxi"],
      rows: [
        ["<code>transform</code>", "Composite", "Arzon"],
        ["<code>opacity</code>", "Composite", "Arzon"],
        ["<code>filter</code>", "Paint / composite", "O'rtacha"],
        ["<code>width</code>, <code>height</code>", "Layout + paint", "Qimmat"],
        ["<code>top</code>, <code>left</code>", "Layout + paint", "Qimmat"],
        ["<code>box-shadow</code>", "Paint", "O'rtacha"]
      ]
    },
    note: {
      variant: "warning",
      title: "will-change'ni doimiy qoldirmang",
      text: "<code>will-change</code> brauzerga qatlam tayyorlashni aytadi, lekin har bir elementga qo'llansa xotira ko'payadi va unumdorlik tushadi. Uni faqat hover yoki animatsiya boshlanishidan oldin qo'shing, tugagach olib tashlang. 60fps uchun har bir kadrga taxminan 16.7ms vaqt ajratiladi."
    },
    quiz: [
      {
        q: "Qaysi ikki xossa odatda compositor darajasida arzon animatsiyalanadi?",
        options: ["width va height", "transform va opacity", "top va left", "margin va padding"],
        answer: 1,
        explain: "transform va opacity odatda layout va paintni qayta hisoblamasdan kompozitorda bajariladi."
      },
      {
        q: "will-change'ni har bir elementga doimiy qo'llash nimaga olib keladi?",
        options: [
          "Xotira sarfi oshadi va unumdorlik tushadi",
          "Barcha animatsiyalar tezlashadi",
          "Sahifa avtomatik kichrayadi",
          "Layout butunlay yo'qoladi"
        ],
        answer: 0,
        explain: "Har bir will-change qo'shimcha qatlam talab qiladi; ko'p qatlamlar xotirani ko'paytiradi."
      },
      {
        q: "Nega top va left bilan animatsiya qilish tavsiya etilmaydi?",
        options: [
          "Ular faqat mobil qurilmada ishlaydi",
          "Ular rangni o'zgartiradi",
          "Ular layoutni qayta hisoblashga majbur qiladi",
          "Ular CSS'da mavjud emas"
        ],
        answer: 2,
        explain: "top/left o'zgarishi elementning oqimdagi joyini qayta hisoblashga olib keladi; transform esa buni compositorda bajaradi."
      }
    ]
  },
  {
    id: 75,
    title: "Scroll-driven animations: scroll() va view()",
    minutes: 18,
    desc: "JavaScriptsiz skrollga bog'langan progress va ko'rinish animatsiyalarini CSS animation-timeline bilan qurishni o'rganasiz.",
    intro: "Skroll paytida paydo bo'ladigan animatsiyalar uchun avval JavaScript va scroll listener kerak edi. Endi CSS'ning <b>animation-timeline</b> xossasi <code>scroll()</code> va <code>view()</code> bilan bu ishni brauzerga topshiradi. Natija yumshoqroq va kamroq kod talab qiladi.",
    h: "Progress va ko'rinish oralig'i",
    codes: [
      {
        title: "progress.css",
        lang: "css",
        code: `.progress {
  position: fixed;
  inset-block-start: 0;
  inset-inline: 0;
  height: 4px;
  background: #2563eb;
  transform-origin: left center;
  animation: toldirish linear both;
  animation-timeline: scroll(root block);
}

@keyframes toldirish {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}`,
        output: "Sahifa eng yuqorida bo'lganda ko'k chiziq ko'rinmaydi (scaleX 0). Pastga skroll qilgan sari chiziq chapdan o'ngga to'liq kenglikkacha to'ladi. Sahifa oxiriga yetganda chiziq butun ekran kengligini egallaydi. JavaScript ishtirok etmaydi."
      },
      {
        title: "reveal.css",
        lang: "css",
        code: `.reveal {
  animation: chiqish linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 40%;
}

@keyframes chiqish {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
    opacity: 1;
    transform: none;
  }
}`,
        output: "Har bir reveal bloki ekranga kirishining 10% dan 40% gacha bo'lgan qismida 24px pastdan ko'tarilib, to'liq ko'rinadi. Element ekrandan chiqqanda animatsiya teskari yo'nalishda qaytadi. Kam harakat sozlamasida bloklar darhol to'liq ko'rinadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Timeline", "Nimaga bog'lanadi?", "Tipik ishlatilish"],
      rows: [
        ["<code>scroll(root block)</code>", "Butun sahifa vertikal skrolli", "Progress bar"],
        ["<code>scroll(nearest inline)</code>", "Eng yaqin skroll konteyner", "Gorizontal karusel"],
        ["<code>view()</code>", "Elementning ko'rinish maydoni", "Reveal animatsiyalari"],
        ["<code>animation-range</code>", "Timeline oralig'i", "entry, cover, exit"],
        ["<code>animation-fill-mode: both</code>", "Boshlang'ich va oxirgi holat", "Skrolldan tashqarida ham barqaror"]
      ]
    },
    note: {
      variant: "info",
      title: "Fallback va harakatni hurmat qilish",
      text: "Scroll-driven animations hozirgi zamonaviy brauzerlarda ishlaydi, lekin qo'llab-quvvatlamaydigan muhitda element animatsiyasiz ko'rinishi kerak. Boshlang'ich holatni <code>opacity: 1</code> qilib qo'ying yoki <code>@supports (animation-timeline: view())</code> ichida animatsiyani yoqing. <code>prefers-reduced-motion</code>ni ham unutmang."
    },
    quiz: [
      {
        q: "Butun sahifa skrolliga bog'langan timeline uchun qaysi yozuv ishlatiladi?",
        options: ["animation-timeline: view()", "animation-timeline: scroll(root block)", "animation-timeline: auto", "animation-timeline: hover"],
        answer: 1,
        explain: "scroll(root block) hujjatning ildiz skroll konteynerini vertikal o'q bo'ylab kuzatadi."
      },
      {
        q: "view() timeline nimaga bog'lanadi?",
        options: [
          "Elementning ko'rinish maydonidagi holatiga",
          "Faqat sichqoncha harakatiga",
          "Sahifa yuklanish vaqtiga",
          "Element rangiga"
        ],
        answer: 0,
        explain: "view() element ko'rinish maydoniga kirishi va chiqishini timeline sifatida ishlatadi."
      },
      {
        q: "animation-range: entry 10% cover 40% nimani belgilaydi?",
        options: [
          "Animatsiya davomiyligini 10 soniya qiladi",
          "Faqat 40% elementlarni animatsiya qiladi",
          "Timeline'ning qaysi qismlarida animatsiya ishlashini",
          "Sahifa skroll tezligini"
        ],
        answer: 2,
        explain: "animation-range animatsiyaning timeline bo'ylab boshlanish va tugash nuqtalarini belgilaydi."
      }
    ]
  },
  {
    id: 76,
    title: "View Transitions API bilan sahifa o'tishlari",
    minutes: 17,
    desc: "Bir hujjat ichidagi holat o'zgarishlarini silliq crossfade va nomlangan o'tishlar bilan bezashni o'rganasiz.",
    intro: "Mavzu almashtirish yoki ro'yxatdan detalga o'tishda sahifa keskin o'zgarishi mumkin. <b>View Transitions API</b> eski va yangi holat rasmlarini olib, ular orasida silliq animatsiya yaratadi. Bu ish uchun murakkab kutubxona shart emas.",
    h: "startViewTransition va pseudo-elementlar",
    codes: [
      {
        title: "mavzu.html",
        lang: "html",
        code: `<button id="mavzu" type="button">Mavzuni almashtirish</button>

<script>
  const tugma = document.querySelector("#mavzu");

  tugma.addEventListener("click", () => {
    if (!document.startViewTransition) {
      document.documentElement.classList.toggle("dark");
      return;
    }

    document.startViewTransition(() => {
      document.documentElement.classList.toggle("dark");
    });
  });
</script>`,
        output: "Tugma bosilganda qorong'i va yorug' mavzu orasida eski holat asta yo'qolib, yangi holat asta paydo bo'ladi. Brauzer View Transitions'ni qo'llab-quvvatlamasa, mavzu darhol almashtiriladi. Foydalanuvchi hech qanday xatolik ko'rmaydi."
      },
      {
        title: "transition.css",
        lang: "css",
        code: `::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.35s;
  animation-timing-function: ease;
}

.hero {
  view-transition-name: hero;
}

::view-transition-group(hero) {
  animation-duration: 0.45s;
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}`,
        output: "Butun sahifa o'tishi 0.35 soniyada yumshoq crossfade bo'ladi. hero elementi alohida nom bilan belgilanib, 0.45 soniyada o'z holatidan yangi joyga silliq harakatlanadi. Kam harakat sozlamasida barcha view-transition animatsiyalari o'chadi."
      }
    ],
    extra: {
      type: "ul",
      items: [
        "<code>document.startViewTransition(callback)</code> — yangi holatni suratga oladi va animatsiya boshlaydi.",
        "<code>view-transition-name</code> — elementni nomlangan guruhga ajratadi.",
        "<code>::view-transition-old(name)</code> — eski holat qatlami.",
        "<code>::view-transition-new(name)</code> — yangi holat qatlami.",
        "<code>::view-transition-group(name)</code> — guruhning harakat va o'lcham animatsiyasi.",
        "Bir xil nom bir vaqtda faqat bitta ko'rinadigan elementda bo'lishi kerak."
      ]
    },
    note: {
      variant: "warning",
      title: "Noyob nomlar va reduced motion",
      text: "Bir sahifada ikkita elementga bir xil <code>view-transition-name</code> bersangiz, o'tish ishlamaydi. Ro'yxat kartalariga indeks asosida noyob nom bering. Shuningdek, har doim <code>prefers-reduced-motion</code> uchun animatsiyani o'chirish qoidasini qo'shing."
    },
    quiz: [
      {
        q: "View transition'ni boshlash uchun qaysi metod chaqiriladi?",
        options: ["document.startViewTransition()", "window.animateView()", "document.transitionTo()", "element.viewTransition()"],
        answer: 0,
        explain: "document.startViewTransition(callback) eski va yangi holat o'rtasida o'tishni boshlaydi."
      },
      {
        q: "Elementni nomlangan o'tish guruhiga qo'shish uchun qaysi xossa ishlatiladi?",
        options: ["transition-name", "view-transition-name", "animation-name", "view-name"],
        answer: 1,
        explain: "view-transition-name elementni view transition snapshot'ida alohida nom bilan ajratadi."
      },
      {
        q: "Bir xil view-transition-name ikki elementga berilsa nima bo'ladi?",
        options: [
          "Ikkalasi birlashadi",
          "Faqat ikkinchisi ishlaydi",
          "O'tish noto'g'ri ishlaydi yoki bekor qilinadi",
          "Brauzer avtomatik yangi nom beradi"
        ],
        answer: 2,
        explain: "Snapshot nomlari noyob bo'lishi shart; takroriy nom o'tishni buzadi."
      }
    ]
  },
  {
    id: 77,
    title: "@starting-style va popover animatsiyasi",
    minutes: 17,
    desc: "Yangi paydo bo'lgan elementlar uchun kirish animatsiyasini va popover API bilan yengil oynalarni sozlashni o'rganasiz.",
    intro: "Element birinchi marta ko'rinishi bilan transition ishga tushmaydi, chunki uning boshlang'ich holati yo'q. <b>@starting-style</b> aynan shu bo'shliqni to'ldiradi: element paydo bo'lganda qaysi holatdan boshlashni belgilaydi.",
    h: "Kirish holatini e'lon qilish",
    codes: [
      {
        title: "popover.css",
        lang: "css",
        code: `[popover] {
  margin: 0;
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  opacity: 0;
  transform: translateY(-8px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    display 0.2s allow-discrete;
}

[popover]:popover-open {
  opacity: 1;
  transform: translateY(0);
}

@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: translateY(-8px);
  }
}`,
        output: "Popover tugma bosilganda 8px yuqoridan 0.2 soniyada pastga tushib, asta ko'rinadi. Yopilganda teskari yo'nalishda yo'qoladi. display ruxsat etilgan diskret o'tish tufayli oyna yopilish animatsiyasi tugagachgina butunlay yashiriladi."
      },
      {
        title: "dialog.css",
        lang: "css",
        code: `dialog {
  opacity: 0;
  scale: 0.96;
  transition: opacity 0.2s ease, scale 0.2s ease,
              overlay 0.2s allow-discrete,
              display 0.2s allow-discrete;
}

dialog[open] {
  opacity: 1;
  scale: 1;
}

@starting-style {
  dialog[open] {
    opacity: 0;
    scale: 0.96;
  }
}

dialog::backdrop {
  background: rgb(15 23 42 / 0);
  transition: background 0.2s ease, display 0.2s allow-discrete;
}

dialog[open]::backdrop {
  background: rgb(15 23 42 / 0.5);
}`,
        output: "Dialog birinchi ochilganda 96% o'lchamdan to'liq o'lchamga kengayib, asta ko'rinadi. Orqa fon shaffofdan 50% to'q qoplamaga o'tadi. Yopilganda dialog kichrayib yo'qoladi, keyin display va overlay holati o'zgaradi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Tushuncha", "Vazifasi", "Eslatma"],
      rows: [
        ["<code>@starting-style</code>", "Birinchi ko'rinishdagi boshlang'ich holat", "Faqat paydo bo'lishda ishlaydi"],
        ["<code>display ... allow-discrete</code>", "display o'zgarishini kechiktirish", "Yopilish animatsiyasi uchun"],
        ["<code>overlay ... allow-discrete</code>", "Top-layer o'zgarishini boshqarish", "Dialog va popover uchun"],
        ["<code>popover</code>", "Yengil top-layer oyna", "popovertarget bilan ochiladi"],
        ["<code>:popover-open</code>", "Ochiq popover holati", "Animatsiya selektori"]
      ]
    },
    note: {
      variant: "tip",
      title: "allow-discrete yopilishni saqlaydi",
      text: "Oddiy transition faqat ikkala holatda ham mavjud bo'lgan qiymatlar orasida ishlaydi. <code>display: none</code> darhol qo'llansa, yopilish animatsiyasi ko'rinmaydi. <code>transition-behavior: allow-discrete</code> yoki <code>display 0.2s allow-discrete</code> yozuvi animatsiya tugaguncha elementni saqlab turadi."
    },
    quiz: [
      {
        q: "@starting-style qoidasining vazifasi nima?",
        options: [
          "Sahifadagi barcha animatsiyalarni o'chirish",
          "Element birinchi ko'rinishida qaysi holatdan boshlashini belgilash",
          "Faqat qorong'i mavzuni yoqish",
          "CSS faylini yuklash"
        ],
        answer: 1,
        explain: "@starting-style yangi paydo bo'lgan element uchun boshlang'ich qiymatlarni beradi va entry transition'ni ishga tushiradi."
      },
      {
        q: "Yopilish animatsiyasi ko'rinishi uchun qaysi yozuv kerak?",
        options: [
          "display: none",
          "transition: opacity 0.2s",
          "animation: none",
          "display 0.2s allow-discrete"
        ],
        answer: 3,
        explain: "allow-discrete display o'zgarishini animatsiya davomida kechiktiradi."
      },
      {
        q: "popover elementi qaysi atribut bilan ochiladi?",
        options: ["popover", "popovertarget", "overlay", "dialog"],
        answer: 1,
        explain: "Tugmaga popovertarget=\"id\" qo'yiladi, oyna esa popover atributi bilan belgilanadi."
      }
    ]
  },
  {
    id: 78,
    title: "Core Web Vitals va performance budget",
    minutes: 18,
    desc: "LCP, INP va CLS ko'rsatkichlarini tushunib, sahifa uchun o'lchanadigan unumdorlik byudjetini belgilaysiz.",
    intro: "Unumdorlikni «tez ko'rinadi» degan his bilan boshqarib bo'lmaydi. <b>Core Web Vitals</b> uchta o'lchanadigan ko'rsatkich beradi: yuklanish (LCP), interaktivlik (INP) va barqarorlik (CLS). Ular uchun aniq byudjet belgilash sifatni saqlaydi.",
    h: "Ko'rsatkichlar va ularning chegaralari",
    codes: [
      {
        title: "sahifa.html",
        lang: "html",
        code: `<main>
  <h1>Tez yuklanadigan sahifa</h1>
  <img src="/rasmlar/qahramon-800.avif"
       srcset="/rasmlar/qahramon-400.avif 400w,
               /rasmlar/qahramon-800.avif 800w,
               /rasmlar/qahramon-1600.avif 1600w"
       sizes="(min-width: 64rem) 50vw, 100vw"
       width="800" height="450"
       fetchpriority="high"
       alt="Ish stolidagi noutbuk">
  <p>Asosiy mazmun.</p>
</main>`,
        output: "Brauzer ekran o'lchamiga qarab 400w, 800w yoki 1600w rasm variantini tanlaydi. Rasm uchun width va height berilgani sabab joy oldindan ajratiladi va CLS oshmaydi. fetchpriority=\"high\" LCP rasmini erta yuklashga yordam beradi."
      },
      {
        title: "royxat.css",
        lang: "css",
        code: `.yangiliklar {
  content-visibility: auto;
  contain-intrinsic-size: auto 20rem;
}

.yangilik-karta img {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}

.skeleton {
  min-height: 20rem;
  background: linear-gradient(90deg, #e2e8f0, #f8fafc, #e2e8f0);
}`,
        output: "Ekrandan tashqaridagi yangiliklar bo'limlari dastlab render qilinmaydi, lekin har biri uchun taxminan 20rem balandlik saqlanadi. Kartadagi rasmlar 16:9 nisbatda joy oladi va yuklanganda layoutni siljitmaydi. Skelet holati ham 20rem balandlikni egallab, sakrashni kamaytiradi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Ko'rsatkich", "Nimani o'lchaydi?", "Yaxshi chegara"],
      rows: [
        ["LCP", "Eng katta kontent bo'lagi qachon ko'rinadi", "≤ 2.5 s"],
        ["INP", "Foydalanuvchi harakatiga javob kechikishi", "≤ 200 ms"],
        ["CLS", "Layoutning kutilmagan siljishi", "≤ 0.1"],
        ["TBT", "Laboratoriya bloklanish vaqti", "Yordamchi ko'rsatkich"],
        ["TTFB", "Server javobining boshlanishi", "≤ 0.8 s"]
      ]
    },
    note: {
      variant: "info",
      title: "Laboratoriya va real foydalanuvchi",
      text: "Lighthouse laboratoriya sharoitida o'lchaydi, Search Console esa real foydalanuvchi ma'lumotlarini (CrUX) beradi. Ikkalasi farq qilishi mumkin. Byudjetni real ma'lumotga yaqinlashtiring: masalan, LCP 2.5s, INP 200ms, CLS 0.1 va sahifa JS hajmi 170KB dan oshmasin."
    },
    quiz: [
      {
        q: "LCP uchun «yaxshi» chegara qancha?",
        options: ["≤ 1.0 s", "≤ 2.5 s", "≤ 4.0 s", "≤ 5.0 s"],
        answer: 1,
        explain: "Core Web Vitals bo'yicha LCP 2.5 soniya va undan tez bo'lsa yaxshi hisoblanadi."
      },
      {
        q: "CLS nimani o'lchaydi?",
        options: [
          "Server javob vaqtini",
          "Sahifadagi layoutning kutilmagan siljishini",
          "JavaScript fayl hajmini",
          "Rasm ranglarini"
        ],
        answer: 1,
        explain: "CLS vizual barqarorlikni o'lchaydi; 0.1 va undan past qiymat yaxshi hisoblanadi."
      },
      {
        q: "INP uchun tavsiya etilgan yuqori chegara qancha?",
        options: ["200 ms", "500 ms", "1 s", "2.5 s"],
        answer: 0,
        explain: "INP 200 millisekundgacha bo'lsa yaxshi, 500ms dan yuqori esa yomon deb baholanadi."
      }
    ]
  },
  {
    id: 79,
    title: "Kritik CSS va resurs ustuvorligi",
    minutes: 17,
    desc: "Birinchi bo'yash uchun kritik CSS, preload va fetchpriority bilan resurslarni to'g'ri tartiblashni o'rganasiz.",
    intro: "Brauzer CSS'ni yuklamaguncha sahifani bo'yashni kutadi. Katta uslub faylini butunlay kutish o'rniga, ekranda darhol kerak bo'ladigan <b>kritik CSS</b>ni HTML ichiga joylash mumkin. Qolgan resurslar esa keyin yuklanadi.",
    h: "Birinchi bo'yashni tezlashtirish",
    codes: [
      {
        title: "index.html",
        lang: "html",
        code: `<head>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; }
    .hero { min-height: 60svh; display: grid; place-items: center; }
    .hero h1 { font-size: clamp(2rem, 6vw, 4rem); margin: 0; }
  </style>

  <link rel="preload" href="/css/app.css" as="style"
        onload="this.rel='stylesheet'">
  <noscript>
    <link rel="stylesheet" href="/css/app.css">
  </noscript>
</head>`,
        output: "Sahifa birinchi bo'yashda inline kritik CSS bilan to'g'ri shrift va hero o'lchamlarini oladi. app.css fon rejimida yuklanib, tayyor bo'lgach stylesheet'ga aylanadi. JavaScript o'chirilgan bo'lsa, noscript ichidagi oddiy link ishlaydi."
      },
      {
        title: "resurslar.html",
        lang: "html",
        code: `<link rel="preload" href="/fonts/inter-var.woff2" as="font"
      type="font/woff2" crossorigin>
<link rel="modulepreload" href="/js/app.js">
<link rel="preconnect" href="https://fonts.example.com" crossorigin>

<img src="/rasmlar/lcp.avif" width="1200" height="630"
     fetchpriority="high" alt="Kurs qopqog'i">

<script src="/js/app.js" type="module" defer></script>`,
        output: "Shrift va asosiy modul erta yuklanadi, fonts domeniga oldindan ulanish ochiladi. LCP rasmi yuqori ustuvorlik bilan yuklanadi. app.js modul sifatida kechiktirilib, HTML tahlilini bloklamaydi. Natijada birinchi kontent va shrift tezroq ko'rinadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Resurs yo'riqnomasi", "Vazifasi", "Qachon ishlatiladi?"],
      rows: [
        ["<code>preload</code>", "Joriy sahifa uchun erta yuklash", "LCP rasm, shrift, kritik CSS"],
        ["<code>prefetch</code>", "Keyingi sahifa uchun past ustuvor yuklash", "Navigatsiya ehtimoli yuqori bo'lsa"],
        ["<code>preconnect</code>", "Domen bilan ulanishni oldindan ochish", "Uchinchi tomon shrift yoki API"],
        ["<code>modulepreload</code>", "ES modulni erta yuklash", "Asosiy JS modul"],
        ["<code>fetchpriority</code>", "Resurs ustuvorligini belgilash", "LCP rasm uchun high"]
      ]
    },
    note: {
      variant: "warning",
      title: "Hamma narsani preload qilmang",
      text: "Har bir <code>preload</code> resursni yuqori ustuvorlikka ko'taradi. Agar o'nta shrift, beshta skript va uchta rasm preload qilinsa, muhim resurslar orqaga suriladi. Faqat birinchi ekranda albatta kerak bo'ladigan 1–2 resursni tanlang. Ishlatilmaydigan preload konsolda ogohlantirish beradi."
    },
    quiz: [
      {
        q: "preload va prefetch orasidagi asosiy farq nima?",
        options: [
          "preload joriy sahifa uchun erta yuklaydi, prefetch keyingi ehtimoliy sahifa uchun",
          "prefetch faqat shriftlar uchun ishlaydi",
          "preload faqat JavaScript uchun ishlaydi",
          "Ikkalasi bir xil"
        ],
        answer: 0,
        explain: "preload hozirgi sahifaning muhim resursini, prefetch esa kelajakda kerak bo'lishi mumkin bo'lgan resursni yuklaydi."
      },
      {
        q: "LCP rasmini erta yuklash uchun qaysi atribut ishlatiladi?",
        options: ["loading=\"lazy\"", "decoding=\"async\"", "fetchpriority=\"high\"", "crossorigin"],
        answer: 2,
        explain: "fetchpriority=\"high\" brauzerga rasmni yuqori ustuvorlikda yuklashni bildiradi."
      },
      {
        q: "Kritik CSS'ni HTML ichiga joylashning maqsadi nima?",
        options: [
          "CSS faylini butunlay o'chirish",
          "Birinchi bo'yashni tashqi faylni kutmasdan tezlashtirish",
          "JavaScriptni bloklash",
          "Rasmlarni kechiktirish"
        ],
        answer: 1,
        explain: "Inline kritik CSS birinchi ekran uchun zarur uslublarni darhol beradi va render-blocking kutishni kamaytiradi."
      }
    ]
  }
];
