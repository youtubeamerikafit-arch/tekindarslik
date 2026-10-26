module.exports = [
  {
    id: 50,
    title: "Gridning yashirin tarmoqlari: implicit tracks va auto-placement",
    minutes: 15,
    desc: "Grid'da oldindan e'lon qilinmagan qatorlar qanday paydo bo'lishini va auto-placement bilan bo'shliqlarni boshqarishni o'rganasiz.",
    intro: "Birinchi jildda Grid'ning asosiy ustun va qatorlarini ko'rgan edik. Endi <b>implicit tracks</b> — ya'ni template'da yozilmagan, lekin mazmun joylashganda avtomatik paydo bo'ladigan qator va ustunlarni o'rganamiz. Bu bilim dinamik ro'yxatlar va notekis galereyalar uchun juda muhim.",
    h: "Avtomatik qator qachon tug'iladi?",
    codes: [
      {
        title: "galereya.html",
        lang: "html",
        code: `<section class="gallery">
  <figure class="gallery__item gallery__item--wide">1</figure>
  <figure class="gallery__item">2</figure>
  <figure class="gallery__item">3</figure>
  <figure class="gallery__item">4</figure>
  <figure class="gallery__item">5</figure>
  <figure class="gallery__item">6</figure>
</section>`,
        output: "Oltita figure elementi bitta section ichida, DOM tartibida 1 dan 6 gacha joylashadi. CSS ulanmaguncha ular oddiy bloklar bo'lib, har biri yangi qatorda turadi."
      },
      {
        title: "galereya.css",
        lang: "css",
        code: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 140px;
  gap: 1rem;
}

.gallery__item {
  display: grid;
  place-items: center;
  background: #e0e7ff;
  border-radius: 0.75rem;
}

.gallery__item--wide {
  grid-column: span 2;
}`,
        output: "Uchta teng ustun hosil bo'ladi, har bir avtomatik qator balandligi 140px. 1-element ikki ustunni egallaydi va 2-element uchinchi ustunga o'tadi. 3–5 elementlar ikkinchi qatorni, 6-element uchinchi qatorning birinchi ustunini egallaydi. Uchinchi qator template'da yo'q edi, lekin grid-auto-rows hisobiga 140px bo'lib paydo bo'ladi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Xossa", "Vazifasi", "Muhim jihat"],
      rows: [
        ["<code>grid-auto-rows</code>", "Template'dan tashqari qatorlar balandligi", "Barcha implicit qatorlarga qo'llanadi"],
        ["<code>grid-auto-columns</code>", "Template'dan tashqari ustunlar kengligi", "Odatda <code>grid-auto-flow: column</code> bilan uchraydi"],
        ["<code>grid-auto-flow</code>", "Elementlarni avtomatik joylashtirish yo'nalishi", "<code>row</code>, <code>column</code> yoki <code>dense</code>"],
        ["<code>grid-column: span 2</code>", "Elementni ikki ustunga cho'zish", "Qatorlar sonini o'zgartirmaydi"]
      ]
    },
    note: {
      variant: "warning",
      title: "dense tartibni o'zgartirishi mumkin",
      text: "<code>grid-auto-flow: dense</code> keyingi kichik elementlar bilan oldingi bo'shliqlarni to'ldiradi. Natijada vizual tartib DOM tartibidan farq qilishi mumkin: klaviatura fokusi va ekran o'quvchi oqimi chalkashadi. Faqat mazmun tartibi muhim bo'lmagan galereyalarda ishlating."
    },
    quiz: [
      {
        q: "Grid template'da yozilmagan qatorning balandligini qaysi xossa boshqaradi?",
        options: ["grid-template-rows", "grid-auto-rows", "row-gap", "align-content"],
        answer: 1,
        explain: "grid-auto-rows implicit, ya'ni avtomatik paydo bo'lgan qatorlarning o'lchamini belgilaydi."
      },
      {
        q: "grid-auto-flow: dense asosan nima qiladi?",
        options: [
          "Elementlarni faqat ustun bo'ylab joylashtiradi",
          "Barcha elementlarni bir qatorga yig'adi",
          "Har bir elementga teng balandlik beradi",
          "Keyingi kichik elementlar bilan oldingi bo'shliqlarni to'ldiradi"
        ],
        answer: 3,
        explain: "dense rejimi avvalgi qatorlardagi bo'sh kataklarga keyingi mos elementlarni joylashtirib, galereyani zichroq qiladi."
      },
      {
        q: "Nega dense joylashuvni ehtiyotkorlik bilan ishlatish kerak?",
        options: [
          "U barcha animatsiyalarni o'chiradi",
          "U faqat bitta ustunda ishlaydi",
          "Vizual tartib DOM tartibidan farq qilib, fokus ketma-ketligini chalkashtirishi mumkin",
          "U grid-template-columns'ni butunlay bekor qiladi"
        ],
        answer: 2,
        explain: "dense elementlarni vizual ravishda ko'chiradi, lekin DOM tartibini o'zgartirmaydi; natijada ko'rish va klaviatura tartibi mos kelmasligi mumkin."
      }
    ]
  },
  {
    id: 51,
    title: "Subgrid: kartalar ichidagi qatorlarni tekislash",
    minutes: 16,
    desc: "subgrid yordamida bir nechta kartaning sarlavha, matn va havola qatorlarini umumiy tarmoqqa bog'lashni o'rganasiz.",
    intro: "Bir qatordagi kartalarning sarlavhalari har xil uzunlikda bo'lsa, ularning ichki qismlari pastga surilib ketadi. <b>subgrid</b> kartaning ichki qatorlarini ota-Grid tarmog'iga ulaydi va barcha kartalar bir chiziqda tekislanadi.",
    h: "Ota tarmoqni bolaga meros qilish",
    codes: [
      {
        title: "kartalar.html",
        lang: "html",
        code: `<div class="cards">
  <article class="card">
    <h3>Tezkor sayt</h3>
    <p>Yuklanish vaqti qisqa bo'lgan sahifa.</p>
    <a href="/tezlik">Batafsil</a>
  </article>
  <article class="card">
    <h3>Qulay interfeys</h3>
    <p>Klaviatura va mobil qurilmalar uchun mos.</p>
    <a href="/qulaylik">Batafsil</a>
  </article>
  <article class="card">
    <h3>Xavfsiz</h3>
    <p>HTTPS va zamonaviy himoya headerlari.</p>
    <a href="/xavfsizlik">Batafsil</a>
  </article>
</div>`,
        output: "Uchta article kartasi ketma-ket joylashadi. Har bir kartada h3, p va a elementlari bor. CSS'siz ular oddiy blok oqimida, bir-biridan mustaqil balandlikda ko'rinadi."
      },
      {
        title: "kartalar.css",
        lang: "css",
        code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
}`,
        output: "Har bir karta ota-Grid'ning uchta qatorini egallaydi. Uch kartaning h3 elementlari birinchi qatorda, p elementlari ikkinchi qatorda, havolalar uchinchi qatorda bir xil chiziqqa tekislanadi. Eng uzun matnli karta qator balandligini belgilaydi, qolganlari shu balandlikka moslashadi."
      }
    ],
    extra: {
      type: "ul",
      items: [
        "<code>grid-template-rows: subgrid</code> — bola o'z qatorlarini ota tarmoqdan oladi.",
        "Subgrid elementi ota-Grid'ning bevosita bolasi bo'lishi kerak.",
        "Element qancha qatorni egallasa, <code>grid-row: span N</code> shuncha qatorga teng bo'lishi lozim.",
        "Subgrid ustunlar uchun ham ishlaydi: <code>grid-template-columns: subgrid</code>.",
        "Qo'llab-quvvatlanmasa, oddiy <code>grid-template-rows</code> fallback ishlatiladi."
      ]
    },
    note: {
      variant: "tip",
      title: "Fallbackni unutmang",
      text: "Subgrid zamonaviy brauzerlarda yaxshi qo'llanadi, lekin eski muhitlar uchun <code>@supports (grid-template-rows: subgrid)</code> ichida qoidani yozing. Tashqarida oddiy <code>grid-template-rows: auto auto auto</code> fallback qoldiring — kartalar baribir o'qiladi."
    },
    quiz: [
      {
        q: "Bola elementning qatorlarini ota-Grid tarmog'idan olish uchun qaysi qiymat yoziladi?",
        options: ["inherit", "auto", "subgrid", "contents"],
        answer: 2,
        explain: "grid-template-rows yoki grid-template-columns uchun subgrid qiymati ota tarmoqning tracklarini meros qiladi."
      },
      {
        q: "Subgrid qaysi elementda ishlaydi?",
        options: [
          "Ota-Grid'ning bevosita grid item'i bo'lgan elementda",
          "Faqat position: absolute elementda",
          "Faqat flex konteyner ichida",
          "Har qanday mustaqil blokda"
        ],
        answer: 0,
        explain: "Subgrid element ota gridning item'i bo'lishi va o'z ichida grid konteyner bo'lishi kerak."
      },
      {
        q: "Subgrid qo'llab-quvvatlanmaydigan brauzer uchun eng to'g'ri yondashuv qaysi?",
        options: [
          "Butun CSS'ni o'chirish",
          "Avval oddiy grid qatorlarini yozib, keyin @supports ichida subgridni qo'llash",
          "Faqat flexbox ishlatish",
          "grid-row: span 3 ni olib tashlash"
        ],
        answer: 1,
        explain: "Progressive enhancement tamoyili bo'yicha ishlaydigan fallback qoldirib, qo'llab-quvvatlanadigan brauzerlarda subgridni yoqish eng xavfsiz yo'l."
      }
    ]
  },
  {
    id: 52,
    title: "Flex va Grid birgalikda: ilova qobig'i (app shell)",
    minutes: 17,
    desc: "Grid bilan sahifa skeletini, Flex bilan ichki asboblar panelini qurish va overflow muammolarini yechishni o'rganasiz.",
    intro: "Grid ikki o'lchamli maketni, Flex esa bir o'lchamli qator yoki ustunni yaxshi boshqaradi. Katta loyihalarda ular raqib emas, <b>hamkor</b>: sahifa skeleti Grid'da, ichki komponentlar Flex'da quriladi.",
    h: "Sahifa skeleti va ichki panel",
    codes: [
      {
        title: "app.html",
        lang: "html",
        code: `<div class="app">
  <header class="app__header">
    <strong>Noldan Studio</strong>
    <div class="toolbar">
      <button type="button">Saqlash</button>
      <button type="button">Ko'rish</button>
    </div>
  </header>
  <aside class="app__sidebar">Loyihalar ro'yxati</aside>
  <main class="app__main">Asosiy ish maydoni</main>
  <footer class="app__footer">© 2026 Noldan</footer>
</div>`,
        output: "Header, sidebar, main va footer ketma-ket bloklar sifatida chiqadi. Toolbar ichidagi ikki tugma vertikal joylashadi. Grid qo'llanmaguncha sidebar main ustida turadi."
      },
      {
        title: "app.css",
        lang: "css",
        code: `.app {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.app__header { grid-area: header; }
.app__sidebar { grid-area: sidebar; }
.app__main { grid-area: main; overflow: auto; }
.app__footer { grid-area: footer; }

.toolbar {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}`,
        output: "Header butun kenglikni egallaydi, sidebar chapda 16rem, main qolgan joyni oladi, footer pastda butun kenglikda turadi. min-height: 100dvh tufayli skelet ekran balandligini to'ldiradi. Toolbar tugmalari o'ng chetga surilib, yonma-yon turadi. Main juda uzun bo'lsa, faqat o'zi skroll bo'ladi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Vazifa", "Tavsiya etilgan vosita", "Sabab"],
      rows: [
        ["Sahifa skeleti va hududlar", "CSS Grid", "Ikki o'lchamli joylashuv va nomlangan areas"],
        ["Tugmalar qatori", "Flexbox", "Bir o'q bo'ylab tekislash yetarli"],
        ["Sidebar va main nisbati", "Grid <code>minmax(0, 1fr)</code>", "Main mazmuni tarmoqni cho'zib yubormaydi"],
        ["Uzun ro'yxat skrolli", "<code>overflow: auto</code>", "Butun sahifa emas, faqat hudud skroll bo'ladi"]
      ]
    },
    note: {
      variant: "warning",
      title: "min-width: 0 sirri",
      text: "Grid yoki flex item ichidagi uzun so'z yoki jadval konteynerni kengaytirib yuborishi mumkin. <code>minmax(0, 1fr)</code>, <code>min-width: 0</code> yoki <code>overflow-wrap: anywhere</code> bilan itemning minimal mazmun kengligini cheklang. Aks holda sidebar siqilib, main ekrandan chiqib ketadi."
    },
    quiz: [
      {
        q: "Sahifaning to'rt hududini ikki o'lchamda joylashtirish uchun qaysi vosita eng mos?",
        options: ["Faqat inline-block", "Faqat float", "Faqat table", "CSS Grid"],
        answer: 3,
        explain: "Grid ustun va qatorlarni birga boshqaradi, shuning uchun header/sidebar/main/footer skeleti uchun eng qulay."
      },
      {
        q: "Nega grid ustunida minmax(0, 1fr) ishlatiladi?",
        options: [
          "Ustunni har doim 0 piksel qilish uchun",
          "Itemning minimal mazmun kengligi tarmoqni cho'zib yubormasligi uchun",
          "Barcha itemlarni markazlash uchun",
          "Gap qiymatini ikki barobar oshirish uchun"
        ],
        answer: 1,
        explain: "1fr ning minimal qiymati avtomatik min-content bo'lishi mumkin; 0 dan boshlash uzun mazmun sabab bo'ladigan kengayishni to'xtatadi."
      },
      {
        q: "App shell ichidagi toolbar uchun Flex ishlatishning asosiy sababi nima?",
        options: [
          "Flex faqat sahifa skeleti uchun ishlaydi",
          "Flex gridni butunlay almashtiradi",
          "Tugmalarni bir o'q bo'ylab tekislash va bo'shliq berish yetarli",
          "Flex overflow'ni avtomatik yashiradi"
        ],
        answer: 2,
        explain: "Bir qatordagi tugmalar uchun Flex'ning gap va justify-content imkoniyatlari sodda va yetarli."
      }
    ]
  },
  {
    id: 53,
    title: "O'lcham chegaralari: min-content, max-content va fit-content",
    minutes: 16,
    desc: "Mazmunning tabiiy kengligini hisobga oluvchi intrinsic o'lchovlar va ular bilan moslashuvchan kartalar qurishni o'rganasiz.",
    intro: "Ba'zan ustun kengligini foizda emas, <b>mazmunning o'zidan</b> kelib chiqib belgilash kerak. CSS'da <code>min-content</code>, <code>max-content</code> va <code>fit-content()</code> aynan shu ish uchun bor. Ular ayniqsa kartalar va yon panellar uchun foydali.",
    h: "Uch xil tabiiy kenglik",
    codes: [
      {
        title: "kartalar.html",
        lang: "html",
        code: `<div class="panel">
  <article class="panel__item">
    <h3>Juda uzun sarlavha bilan sinov kartasi</h3>
    <p>Qisqa matn.</p>
  </article>
  <article class="panel__item">
    <h3>Qisqa</h3>
    <p>Bu yerda ancha uzunroq tavsif matni joylashgan.</p>
  </article>
</div>`,
        output: "Ikki karta ustma-ust chiqadi. Birinchi sarlavha uzun bo'lsa ham, konteyner kengligi ekran bilan cheklangani uchun matn odatdagi joyida qoladi. CSS qo'llanmaguncha kartalar orasida bo'shliq yo'q."
      },
      {
        title: "panel.css",
        lang: "css",
        code: `.panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
  max-width: 72rem;
}

.panel__item {
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  overflow-wrap: anywhere;
}

.panel__item h3 {
  width: fit-content(22ch);
}`,
        output: "Keng ekranda kartalar avtomatik ravishda yonma-yon joylashadi; har bir karta kamida 18rem, lekin ekran tor bo'lsa 100% kenglik oladi. 320px ekranda bitta ustun, 1024px ekranda uchta ustun chiqadi. Sarlavha 22ch dan oshmaydi, uzun so'z esa kartadan tashqariga chiqmaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Qiymat", "Ma'nosi", "Amaliy misol"],
      rows: [
        ["<code>min-content</code>", "Eng uzun bo'linmas so'z sig'adigan minimal kenglik", "Tor ustunlar, ikonka panellari"],
        ["<code>max-content</code>", "Matn bir qatorda to'liq sig'adigan kenglik", "Sarlavha uchun cheksiz kengayish"],
        ["<code>fit-content(22ch)</code>", "Mazmun kengligi, lekin 22ch dan oshmaydi", "Sarlavha va teglar"],
        ["<code>min(100%, 18rem)</code>", "Ikki qiymatdan kichigi", "Tor ekranda kartani sig'dirish"]
      ]
    },
    note: {
      variant: "tip",
      title: "320px ekranda sinang",
      text: "Intrinsic o'lchovlar katta ekranda chiroyli ko'rinadi, lekin tor ekranda kutilmagan gorizontal skroll berishi mumkin. Har bir layout'ni kamida 320px kenglikda tekshiring va <code>minmax(min(100%, 18rem), 1fr)</code> kabi himoya qo'shing."
    },
    quiz: [
      {
        q: "Elementning eng uzun bo'linmas so'ziga mos minimal kengligini qaysi qiymat beradi?",
        options: ["min-content", "max-content", "fit-content", "auto-fit"],
        answer: 0,
        explain: "min-content mazmunni eng kichik bo'laklarga bo'lganda sig'adigan minimal kenglikni hisoblaydi."
      },
      {
        q: "fit-content(22ch) qanday kenglik tanlaydi?",
        options: [
          "Har doim 22ch",
          "Har doim 100%",
          "Mazmun kengligini 22ch dan katta bo'lmaguncha ishlatadi",
          "Faqat 22ch dan kichik bo'lsa ishlaydi"
        ],
        answer: 2,
        explain: "fit-content mazmunning tabiiy kengligini oladi, lekin berilgan chegaradan oshmaydi."
      },
      {
        q: "minmax(min(100%, 18rem), 1fr) yozuvining maqsadi nima?",
        options: [
          "Ustunni har doim 18rem qilish",
          "Faqat bitta ustun yaratish",
          "Tor ekranda ustunni 100% ga tushirib, keng ekranda 18rem dan katta qilish",
          "Barcha kartalarni yashirish"
        ],
        answer: 2,
        explain: "min() tor ekranda 100% ni tanlaydi va gorizontal skrolning oldini oladi; keng ekranda esa minimal 18rem saqlanadi."
      }
    ]
  },
  {
    id: 54,
    title: "Design tokenlar: uch qavatli arxitektura",
    minutes: 15,
    desc: "Primitive, semantic va component tokenlarni ajratib, dizayn tizimini barqaror va oson o'zgaradigan qilishni o'rganasiz.",
    intro: "Dizayn token — rang, bo'shliq yoki shrift uchun nomlangan qiymat. Lekin barcha tokenlarni bir tekisda saqlash katta loyihada tartibsizlik keltiradi. Tajribali jamoalar ularni <b>uch qavat</b>ga ajratadi: xom qiymatlar, ma'no va komponent sozlamalari.",
    h: "Qavatlar qanday bog'lanadi?",
    codes: [
      {
        title: "tokens.css",
        lang: "css",
        code: `:root {
  /* 1-qavat: primitive — faqat xom qiymat */
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --gray-50: #f8fafc;
  --gray-900: #0f172a;

  /* 2-qavat: semantic — ma'no */
  --color-action: var(--blue-600);
  --color-action-hover: var(--blue-700);
  --color-surface: var(--gray-50);
  --color-text: var(--gray-900);

  /* 3-qavat: component — aniq komponent */
  --button-bg: var(--color-action);
  --button-bg-hover: var(--color-action-hover);
  --button-fg: #ffffff;
}`,
        output: "Brauzer :root elementida sakkizta primitive, to'rtta semantic va uchta component custom property yaratadi. getComputedStyle(document.documentElement).getPropertyValue('--button-bg') natijasi #2563eb bo'ladi, chunki zanjir --button-bg → --color-action → --blue-600 bo'ylab yechiladi."
      },
      {
        title: "button.css",
        lang: "css",
        code: `.button {
  background: var(--button-bg);
  color: var(--button-fg);
  padding: 0.65rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.button:hover {
  background: var(--button-bg-hover);
}

[data-theme="dark"] {
  --color-action: #60a5fa;
  --color-action-hover: #93c5fd;
  --button-fg: #0f172a;
}`,
        output: "Yorug' mavzuda tugma ko'k fonda oq matn bilan, hover'da to'qroq ko'k bilan ko'rinadi. html elementiga data-theme=\"dark\" qo'shilganda faqat semantic qiymatlar almashadi: tugma och ko'k fonda to'q matnga o'tadi, component tokenlar o'z nomini saqlaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Qavat", "Misol", "Kim o'zgartiradi?"],
      rows: [
        ["Primitive", "<code>--blue-600: #2563eb</code>", "Dizayner palitrasi"],
        ["Semantic", "<code>--color-action: var(--blue-600)</code>", "Mavzu va brend qarori"],
        ["Component", "<code>--button-bg: var(--color-action)</code>", "Komponent muallifi"],
        ["Mavzu override", "<code>[data-theme=\"dark\"] { --color-action: ... }</code>", "Foydalanuvchi tanlovi"]
      ]
    },
    note: {
      variant: "tip",
      title: "Komponentda primitive ishlatmang",
      text: "Komponent CSS ichida to'g'ridan-to'g'ri <code>--blue-600</code> ga murojaat qilsangiz, mavzu almashganda u o'zgarmaydi. Har doim semantic token orqali ishlang: <code>--button-bg: var(--color-action)</code>. Shu bilan qorong'i mavzu va brend yangilanishi bitta joydan boshqariladi."
    },
    quiz: [
      {
        q: "Semantic tokenning asosiy vazifasi nima?",
        options: [
          "Xom rang kodini saqlash",
          "Rang yoki bo'shliqqa ma'no berib, komponentlarni brend qiymatidan ajratish",
          "Faqat shrift o'lchamini belgilash",
          "CSS faylini kichraytirish"
        ],
        answer: 1,
        explain: "Semantic token «action», «surface» kabi ma'noni ifodalaydi; shu sabab mavzu o'zgarganda komponent kodi o'zgarmaydi."
      },
      {
        q: "Qaysi token primitive hisoblanadi?",
        options: ["--color-action", "--button-bg", "--color-text", "--blue-600"],
        answer: 3,
        explain: "Primitive token xom qiymatni (masalan, aniq ko'k rang) saqlaydi va boshqa tokenlar unga tayanadi."
      },
      {
        q: "Nega komponent ichida semantic token ishlatish afzal?",
        options: [
          "Komponent mavzu va brend o'zgarishiga avtomatik moslashadi",
          "Semantic tokenlar har doim tezroq yuklanadi",
          "Ular specificity'ni oshiradi",
          "Faqat ular bilan dark mode ishlaydi"
        ],
        answer: 0,
        explain: "Komponent barqaror semantik nomga tayanadi; mavzu yoki palitra o'zgarsa, yangi qiymat avtomatik oqib keladi."
      }
    ]
  },
  {
    id: 55,
    title: "Suyuq tipografiya va vertikal ritm",
    minutes: 16,
    desc: "clamp bilan moslashuvchan shrift shkalasi, unitless line-height va o'qish uchun qulay satr uzunligini sozlashni o'rganasiz.",
    intro: "Yaxshi tipografiya faqat chiroyli shrift tanlash emas. Sarlavha va matn o'lchamlari ekranga moslashishi, qator balandligi va paragraflar orasidagi ritm esa o'qishni yengillashtirishi kerak. Bularning barchasini CSS tokenlari bilan boshqarish mumkin.",
    h: "Suyuq shkala va o'qish o'lchovi",
    codes: [
      {
        title: "type.css",
        lang: "css",
        code: `:root {
  --step-0: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --step-1: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --step-2: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
  --leading-body: 1.6;
  --leading-tight: 1.15;
}

body {
  font-size: var(--step-0);
  line-height: var(--leading-body);
}

h1 {
  font-size: var(--step-2);
  line-height: var(--leading-tight);
  text-wrap: balance;
}

p {
  max-width: 65ch;
}`,
        output: "360px ekranda asosiy matn 16px, h1 taxminan 24px bo'ladi. 1280px ekranda matn 18px ga, h1 esa 36px ga yaqinlashadi. Paragraf 65 belgidan kengaymaydi, shuning uchun katta ekranda ham satr juda uzun bo'lmaydi. h1 satrlari text-wrap: balance tufayli tengroq taqsimlanadi."
      },
      {
        title: "ritm.css",
        lang: "css",
        code: `.prose > * + * {
  margin-block-start: var(--space, 1em);
}

.prose h2 {
  margin-block-start: calc(var(--space, 1em) * 2);
  margin-block-end: 0.5em;
}

.prose ul {
  padding-inline-start: 1.25em;
}

.prose li + li {
  margin-block-start: 0.35em;
}`,
        output: "Har bir elementdan keyingi element yuqoridan 1em bo'shliq oladi; h2 oldidan esa 2em bo'shliq chiqadi. Ro'yxat chapdan 1.25em chekinadi, elementlar orasida 0.35em bo'shliq bo'ladi. Natijada bo'limlar orasidagi ritm bir xil va oldindan aytiladigan ko'rinadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Sozlama", "Tavsiya", "Sabab"],
      rows: [
        ["Asosiy matn o'lchami", "16–18px", "Mobil va desktopda qulay o'qiladi"],
        ["Satr balandligi", "1.5–1.7 (unitless)", "Merost va foizga qaraganda oldindan aytiladigan"],
        ["Satr uzunligi", "45–75ch", "Ko'z qator oxirini oson topadi"],
        ["Sarlavha leading", "1.1–1.25", "Katta shriftda zichroq ko'rinish"],
        ["Paragraflar orasi", "0.75–1.5em", "Bo'limlar ajralib turadi, lekin sahifa tarqalmaydi"]
      ]
    },
    note: {
      variant: "warning",
      title: "line-height'ga px bermang",
      text: "<code>line-height: 24px</code> shrift o'lchami o'zgarganda moslashmaydi. Birliksiz qiymat (<code>1.6</code>) joriy shrift o'lchamiga nisbatan hisoblanadi va meros bo'lganda ham to'g'ri ishlaydi. Shriftni foydalanuvchi kattalashtirsa, qatorlar ham proporsional kengayadi."
    },
    quiz: [
      {
        q: "Nega line-height uchun birliksiz qiymat tavsiya etiladi?",
        options: [
          "U shriftni qalin qiladi",
          "U faqat sarlavhalarda ishlaydi",
          "U joriy shrift o'lchamiga nisbatan hisoblanib, merosda ham moslashadi",
          "U brauzerni tezlashtiradi"
        ],
        answer: 2,
        explain: "1.6 kabi unitless qiymat elementning o'z font-size'iga ko'paytiriladi; px esa boshqa o'lchamlarga moslashmaydi."
      },
      {
        q: "Matn satri uchun eng qulay uzunlik qaysi?",
        options: ["45–75ch", "10–20ch", "100–140ch", "Har doim 100%"],
        answer: 0,
        explain: "45–75 belgi oralig'i ko'z harakatini qulay qiladi; juda uzun satrda qator boshini topish qiyinlashadi."
      },
      {
        q: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem) qanday ishlaydi?",
        options: [
          "Har doim 1rem beradi",
          "Faqat 1.125rem beradi",
          "Faqat viewport kengligini o'lchaydi",
          "O'rta qiymatni viewport asosida hisoblab, 1rem va 1.125rem orasida cheklaydi"
        ],
        answer: 3,
        explain: "clamp minimum va maksimum oralig'ida suyuq qiymat beradi; o'rta ifoda viewport bilan o'sadi."
      }
    ]
  },
  {
    id: 56,
    title: "OKLCH bilan zamonaviy rang tizimi",
    minutes: 17,
    desc: "OKLCH rang fazosida palitra qurish, color-mix bilan hosilalar yaratish va light-dark bilan mavzuni boshqarishni o'rganasiz.",
    intro: "Hex va rgb ranglar qulay, lekin ular bilan bir xil yorqinlikdagi palitra qurish qiyin. <b>OKLCH</b> yorqinlik, to'yinganlik va rang ohangini alohida boshqarish imkonini beradi. Shu sabab zamonaviy dizayn tizimlari palitrani ko'pincha OKLCH'da quradi.",
    h: "Yorqinlikni bir xilda ushlash",
    codes: [
      {
        title: "palitra.css",
        lang: "css",
        code: `:root {
  --brand: oklch(58% 0.19 255);
  --brand-hover: oklch(from var(--brand) calc(l + 0.08) c h);
  --brand-soft: color-mix(in oklab, var(--brand) 18%, white);
  --success: oklch(64% 0.16 150);
  --danger: oklch(58% 0.2 25);
}

.button {
  background: var(--brand);
  color: white;
}

.button:hover { background: var(--brand-hover); }
.badge { background: var(--brand-soft); color: var(--brand); }`,
        output: "Tugma to'yingan ko'k rangda, hover'da 8% yorqinroq ko'k rangga o'tadi. Badge juda och ko'k fon oladi, matni esa asosiy brend rangida qoladi. Rang ohangi va to'yinganlik saqlanib, faqat yorqinlik o'zgaradi."
      },
      {
        title: "mavzu.css",
        lang: "css",
        code: `:root {
  color-scheme: light dark;
  --surface: light-dark(oklch(98% 0.01 255), oklch(22% 0.03 255));
  --text: light-dark(oklch(25% 0.02 255), oklch(94% 0.01 255));
  --border: light-dark(oklch(88% 0.02 255), oklch(36% 0.03 255));
}

.card {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}`,
        output: "Tizim yorug' mavzuda bo'lsa karta och fon va to'q matn bilan, qorong'i mavzuda to'q fon va och matn bilan ko'rinadi. Foydalanuvchi tizim mavzusini almashtirsa, ranglar avtomatik yangilanadi; alohida media query yozish shart emas."
      }
    ],
    extra: {
      type: "table",
      headers: ["Tushuncha", "Ma'nosi", "Afzalligi"],
      rows: [
        ["<code>L</code> (lightness)", "0–100% yoki 0–1 oralig'idagi yorqinlik", "Palitrani bir tekis yorqinlikda qurish"],
        ["<code>C</code> (chroma)", "Rang to'yinganligi", "Kulrangdan yorqin ranggacha boshqarish"],
        ["<code>H</code> (hue)", "Rang ohangi (gradus)", "Bir oiladagi ranglarni saqlash"],
        ["<code>color-mix()</code>", "Ikki rangni aralashtirish", "Hover va soft variantlar"],
        ["<code>light-dark()</code>", "Mavzuga qarab ikki qiymat", "Kam kod bilan mavzu"]
      ]
    },
    note: {
      variant: "info",
      title: "Fallback qatlami",
      text: "Juda eski brauzerlar OKLCH'ni tushunmasligi mumkin. Muhim joylarda avval hex yoki rgb fallback, keyin OKLCH qiymat yozing. <code>color-mix()</code> va <code>light-dark()</code> ham zamonaviy brauzerlarda ishlaydi; kritik interfeys uchun @supports bilan tekshirish foydali."
    },
    quiz: [
      {
        q: "OKLCH'dagi L qiymati nimani bildiradi?",
        options: ["Rang ohangini", "Yorqinlikni", "To'yinganlikni", "Shaffoflikni"],
        answer: 1,
        explain: "L — lightness, ya'ni yorqinlik; C to'yinganlik, H esa rang ohangi."
      },
      {
        q: "color-mix(in oklab, var(--brand) 18%, white) natijasi qanday rang beradi?",
        options: [
          "To'liq qora rang",
          "Faqat brend rangining o'zi",
          "Brend rangining 18% va oqning 82% aralashmasi",
          "Yashil rang"
        ],
        answer: 2,
        explain: "Foizlar aralashma nisbatini beradi: 18% brend rangi, qolgani oq, natijada juda och tus hosil bo'ladi."
      },
      {
        q: "light-dark() to'g'ri ishlashi uchun qaysi xossa kerak?",
        options: ["color-scheme", "display", "position", "font-family"],
        answer: 0,
        explain: "light-dark() tanlangan rang sxemasiga tayanadi; color-scheme: light dark bo'lmasa, brauzer tanlovni to'g'ri qo'llamaydi."
      }
    ]
  },
  {
    id: 57,
    title: "Komponent API: variant va o'lchamlarni token bilan boshqarish",
    minutes: 16,
    desc: "Custom property va data-atributlar yordamida tugma kabi komponentlarga moslashuvchan, class ko'paytirmaydigan API qurasiz.",
    intro: "Komponentning turli variantlari uchun o'nlab class yozish tez orada boshqarib bo'lmaydigan holga keladi. Yaxshiroq yo'l — <b>kichik API</b>: bitta asosiy class, variantni bildiruvchi atribut va custom property'lar. Foydalanuvchi komponentni sozlaydi, ichki tuzilma esa yashirin qoladi.",
    h: "Bitta class, bir nechta sozlama",
    codes: [
      {
        title: "tugmalar.html",
        lang: "html",
        code: `<button class="btn" type="button">Asosiy</button>
<button class="btn" type="button" data-variant="danger">O'chirish</button>
<button class="btn" type="button" data-variant="ghost" data-size="sm">
  Bekor qilish
</button>`,
        output: "Uchta tugma bir xil asosiy shaklda chiqadi. Ikkinchi tugma qizil fon bilan xavfli amalni bildiradi. Uchinchi tugma shaffof fonli va kichikroq o'lchamda bo'ladi. Barcha tugmalar bir xil padding va radius tizimidan foydalanadi."
      },
      {
        title: "btn.css",
        lang: "css",
        code: `.btn {
  --btn-bg: var(--color-action, #2563eb);
  --btn-fg: #ffffff;
  --btn-pad-y: 0.65rem;
  --btn-pad-x: 1rem;
  --btn-radius: 0.5rem;

  padding: var(--btn-pad-y) var(--btn-pad-x);
  background: var(--btn-bg);
  color: var(--btn-fg);
  border: 0;
  border-radius: var(--btn-radius);
  cursor: pointer;
}

.btn[data-variant="danger"] {
  --btn-bg: #dc2626;
  --btn-fg: #ffffff;
}

.btn[data-variant="ghost"] {
  --btn-bg: transparent;
  --btn-fg: currentColor;
  box-shadow: inset 0 0 0 1px currentColor;
}

.btn[data-size="sm"] {
  --btn-pad-y: 0.4rem;
  --btn-pad-x: 0.75rem;
  font-size: 0.875rem;
}`,
        output: "Asosiy tugma ko'k, danger tugmasi qizil, ghost tugmasi shaffof fonda joriy matn rangida va 1px ichki chegara bilan ko'rinadi. Kichik tugmaning vertikal paddingi 0.4rem, gorizontali 0.75rem, shrifti 14px bo'ladi. Variantlar faqat tokenlarni almashtiradi, asosiy qoidalar takrorlanmaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["API qismi", "Misol", "Afzalligi"],
      rows: [
        ["Asosiy class", "<code>.btn</code>", "Bitta barqaror tuzilma"],
        ["Variant", "<code>data-variant=\"danger\"</code>", "Class nomlari ko'paymaydi"],
        ["O'lcham", "<code>data-size=\"sm\"</code>", "Padding va shrift birga o'zgaradi"],
        ["Sozlama", "<code>--btn-bg</code>", "Tashqaridan xavfsiz override"],
        ["Default", "<code>var(--btn-bg, #2563eb)</code>", "Token bo'lmasa ham ishlaydi"]
      ]
    },
    note: {
      variant: "tip",
      title: "Tokenlarni hujjatlashtiring",
      text: "Komponentning ommaviy API'si faqat bir nechta custom property va atribut bo'lsin. Ichni o'zgartirish kerak bo'lsa, tashqi kod buzilmaydi. Har bir token uchun standart qiymat va vazifasini izohda yozib qo'ying — jamoa uchun bu o'z-o'zini tushuntiruvchi hujjat bo'ladi."
    },
    quiz: [
      {
        q: "var(--btn-bg, #2563eb) dagi #2563eb nima vazifani bajaradi?",
        options: [
          "Token mavjud bo'lmaganda ishlatiladigan fallback qiymat",
          "Tokenning majburiy nomi",
          "Hover rangi",
          "Shrift o'lchami"
        ],
        answer: 0,
        explain: "var() funksiyasining ikkinchi argumenti custom property topilmasa ishlatiladigan zaxira qiymatdir."
      },
      {
        q: "data-variant=\"danger\" tugmasini CSS'da qanday tanlash mumkin?",
        options: [".danger", "#danger", ".btn[data-variant=\"danger\"]", ".btn danger"],
        answer: 2,
        explain: "Atribut selektori elementning data atributi qiymatiga qarab aniq variantni tanlaydi."
      },
      {
        q: "Komponent API'sida custom property ishlatishning asosiy afzalligi nima?",
        options: [
          "U barcha selektorlarni o'chiradi",
          "Tashqi kod komponentni ichki tuzilmani bilmasdan sozlashi mumkin",
          "U HTML'ni avtomatik yaratadi",
          "U specificity'ni butunlay yo'q qiladi"
        ],
        answer: 1,
        explain: "Custom property komponentning barqaror sozlash nuqtasi bo'lib, ichki class nomlari o'zgarsa ham tashqi integratsiya ishlayveradi."
      }
    ]
  },
  {
    id: 58,
    title: "@layer bilan kaskadni boshqarish",
    minutes: 17,
    desc: "CSS qatlamlari yordamida reset, komponent va utility uslublari orasidagi ustuvorlikni oldindan aytiladigan qilishni o'rganasiz.",
    intro: "Katta loyihada qaysi qoida g'olib chiqishini specificity'ga qarab taxmin qilish qiyin. <b>@layer</b> qatlamlarni nom bilan tartiblaydi: qatlam tartibi specificity'dan qat'i nazar ishlaydi. Bu arxitekturani ancha barqaror qiladi.",
    h: "Qatlam tartibi qanday hal qiladi?",
    codes: [
      {
        title: "layers.css",
        lang: "css",
        code: `@layer reset, base, components, utilities;

@layer reset {
  * { box-sizing: border-box; }
  body { margin: 0; }
}

@layer base {
  h3 { margin-block: 0; color: #0f172a; }
}

@layer components {
  .card h3 { color: #1d4ed8; }
}

@layer utilities {
  .text-muted { color: #64748b; }
}`,
        output: "Qatlam tartibi reset → base → components → utilities bo'ladi. Oddiy card ichidagi h3 rangi komponent qatlamidagi #1d4ed8 bo'ladi, chunki components base'dan keyin turadi. Agar elementga text-muted class qo'shilsa, utility qatlami oxirgi bo'lgani uchun matn #64748b bo'ladi — selektor specificity'si pastroq bo'lsa ham."
      },
      {
        title: "priority.css",
        lang: "css",
        code: `@layer theme, components;

@layer theme {
  .button { background: #2563eb; }
}

@layer components {
  #asosiy-tugma.button { background: #dc2626; }
}

.button { background: #16a34a; }

@layer components {
  .button { color: #ffffff !important; }
}`,
        output: "#asosiy-tugma.button elementi uchun ham fon #16a34a bo'ladi: qatlamga kirmagan oddiy qoida barcha qatlamlardan ustun turadi. Matn rangi esa !important bilan components qatlamida belgilangan va #ffffff bo'lib qoladi. Bu misol unlayered uslublar va !important ta'sirini ko'rsatadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Holat", "Kim ustun?", "Eslatma"],
      rows: [
        ["Bir xil specificity, turli qatlamlar", "Keyinroq e'lon qilingan qatlam", "Tartib boshida bir marta yoziladi"],
        ["Qatlamli va qatlamga kirmagan qoida", "Qatlamga kirmagan qoida", "Oddiy (normal) deklaratsiyalar uchun"],
        ["Ikkala qatlamda !important", "Oldinroq e'lon qilingan qatlam", "!important uchun tartib teskari ishlaydi"],
        ["Qatlam ichida specificity har xil", "Yuqori specificity", "Qatlam faqat qatlamlar orasida ustuvor"]
      ]
    },
    note: {
      variant: "warning",
      title: "Qatlam tartibini bir marta e'lon qiling",
      text: "<code>@layer reset, base, components, utilities;</code> qatorini iloji boricha erta va bitta joyda yozing. Keyinroq yana shu nomlarni qo'shsangiz, yangi qatlam oxiriga qo'shilib, kutilmagan ustuvorlik yuzaga keladi. Import qilinayotgan fayllarda ham <code>layer()</code> nomini izchil ishlating."
    },
    quiz: [
      {
        q: "Bir xil specificity'ga ega ikki qoida turli qatlamlarda bo'lsa, qaysi biri ustun?",
        options: [
          "Birinchi yozilgan qatlam",
          "Faqat HTML'da keyin kelgan element",
          "Har doim ikkinchi fayldagi qoida",
          "Keyinroq e'lon qilingan qatlam"
        ],
        answer: 3,
        explain: "Qatlamlar orasidagi ustuvorlik ularning e'lon tartibiga bog'liq; keyingi qatlam normal deklaratsiyalarda ustun turadi."
      },
      {
        q: "Qatlamga kirmagan oddiy qoida qatlamli qoidalarga nisbatan qanday ishlaydi?",
        options: [
          "U qatlamli oddiy qoidalardan ustun turadi",
          "U butunlay e'tiborsiz qoldiriladi",
          "U faqat reset qatlamida ishlaydi",
          "U har doim !important bo'ladi"
        ],
        answer: 0,
        explain: "Normal deklaratsiyalar uchun unlayered uslublar barcha @layer qatlamlaridan yuqori ustuvorlikka ega."
      },
      {
        q: "!important deklaratsiyalari uchun qatlam tartibi qanday ishlaydi?",
        options: [
          "Oddiy tartib bilan bir xil",
          "Teskari: oldinroq e'lon qilingan qatlam ustun",
          "!important qatlamlarni butunlay o'chiradi",
          "Faqat utilities qatlamida ishlaydi"
        ],
        answer: 1,
        explain: "Kaskadda !important qatlamlar tartibi teskari qo'llanadi; shu sabab reset kabi erta qatlamdagi !important kuchliroq bo'ladi."
      }
    ]
  },
  {
    id: 59,
    title: "CSS nesting: o'qishli va xavfsiz yozish",
    minutes: 15,
    desc: "Native CSS nesting sintaksisi, & selektori, ichki media so'rovlari va Sass odatlaridan farqli tomonlarini o'rganasiz.",
    intro: "Zamonaviy brauzerlar CSS ichida qoidalarni joylashtirishni qo'llab-quvvatlaydi. Bu komponent kodini ixcham qiladi, lekin Sass'dagi odatlar bilan bir xil emas. <b>Native nesting</b>da har bir ichki selektor va specificity o'zini qanday tutishini bilish muhim.",
    h: "& belgisi va ichki shartlar",
    codes: [
      {
        title: "card.css",
        lang: "css",
        code: `.card {
  padding: 1rem;
  border-radius: 0.75rem;
  background: #ffffff;

  & .card__title {
    margin-block: 0 0.5rem;
    font-size: 1.25rem;
  }

  &:hover {
    box-shadow: 0 8px 24px rgb(15 23 42 / 0.12);
  }

  &:is(:focus-within, :hover) .card__action {
    opacity: 1;
  }

  @media (min-width: 48rem) {
    padding: 1.5rem;
  }
}`,
        output: "Karta oq fon va 0.75rem radius bilan chiqadi. Ichidagi sarlavha 1.25rem o'lchamda, pastdan 0.5rem bo'shliq bilan ko'rinadi. Hover yoki ichidagi element fokuslanganda action ko'rinadi. 768px va undan keng ekranda karta paddingi 1.5rem ga oshadi. Barcha qoidalar .card kontekstiga bog'langan."
      },
      {
        title: "xato.css",
        lang: "css",
        code: `/* Sass uslubidagi &__title native CSS'da ishlamaydi */
.card {
  &__title { color: red; }
}

/* To'g'ri variant: to'liq class nomi */
.card {
  & .card__title { color: #1d4ed8; }
}

/* Yoki alohida class sifatida yozing */
.card__title { color: #1d4ed8; }`,
        output: "Birinchi qoida noto'g'ri: & dan keyin pastki chiziq bilan nom qo'shish native CSS'da qo'llanmaydi, shuning uchun sarlavha qizil bo'lmaydi. Ikkinchi va uchinchi qoidalar to'g'ri ishlaydi; .card ichidagi .card__title ko'k rang oladi."
      }
    ],
    extra: {
      type: "ul",
      items: [
        "<code>&</code> — joriy tashqi selektorga murojaat qiladi.",
        "<code>&:hover</code> — tashqi selektorning hover holati.",
        "<code>& .child</code> — tashqi element ichidagi bola.",
        "Ichki <code>@media</code> va <code>@supports</code> qoidalari to'g'ridan-to'g'ri komponent ichida yoziladi.",
        "Native CSS'da <code>&__element</code> kabi Sass concatenatsiyasi ishlamaydi.",
        "Chuqur nesting specificity'ni oshiradi va kodni o'qishni qiyinlashtiradi."
      ]
    },
    note: {
      variant: "tip",
      title: "Uch darajadan chuqur ketmang",
      text: "Nesting qulay, lekin har bir daraja selektorni uzaytiradi va keraksiz specificity yaratadi. Komponent ichida ko'pi bilan ikki-uch daraja yetarli. BEM kabi aniq class nomlari bilan birga ishlatsangiz, kod ham ixcham, ham barqaror bo'ladi."
    },
    quiz: [
      {
        q: "Native CSS nesting'da & belgisi nimaga murojaat qiladi?",
        options: [
          "Doim html elementiga",
          "Oldingi qoidaning barcha classlariga",
          "Joriy tashqi (ota) selektorga",
          "Faqat :root selektoriga"
        ],
        answer: 2,
        explain: "& nesting selektori bo'lib, o'ralgan tashqi selektorni ifodalaydi."
      },
      {
        q: "Komponent ichida @media qoidasini qanday yozish mumkin?",
        options: [
          "To'g'ridan-to'g'ri selektor bloki ichida",
          "Faqat alohida faylda",
          "Faqat @layer ichida",
          "Native CSS'da bu mumkin emas"
        ],
        answer: 0,
        explain: "Zamonaviy native nesting media so'rovini selektor bloki ichida yozishga ruxsat beradi."
      },
      {
        q: "Nega &__title yozuvi native CSS'da noto'g'ri?",
        options: [
          "U juda uzun",
          "& faqat :hover bilan ishlaydi",
          "U specificity'ni pasaytiradi",
          "Native CSS & dan keyin nom qo'shish (Sass concatenatsiyasi)ni qo'llamaydi"
        ],
        answer: 3,
        explain: "Sass'dagi &__title suffix usuli native CSS'ga ko'chirilmagan; to'liq class nomini & bilan ajratib yozish kerak."
      }
    ]
  }
];
