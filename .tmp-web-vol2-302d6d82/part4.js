module.exports = [
  {
    id: 80,
    title: "Shriftlar: font-display, subset va variable font",
    minutes: 17,
    desc: "Web shriftlarni tez va barqaror yuklash, ortiqcha belgilarni olib tashlash va variable fontlardan foydalanishni o'rganasiz.",
    intro: "Web shrift sahifani chiroyli qiladi, lekin noto'g'ri yuklansa matn kech ko'rinadi yoki layout sakraydi. <b>font-display</b>, <b>unicode-range</b> va <b>variable font</b> yordamida bu muammolarni hal qilish mumkin.",
    h: "Shriftni bo'laklarga ajratish",
    codes: [
      {
        title: "fonts.css",
        lang: "css",
        code: `@font-face {
  font-family: "InterVar";
  src: url("/fonts/inter-latin.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0100-024F;
}

@font-face {
  font-family: "InterVar";
  src: url("/fonts/inter-cyrillic.woff2") format("woff2");
  font-weight: 100 900;
  font-display: swap;
  unicode-range: U+0400-04FF;
}

body {
  font-family: "InterVar", system-ui, sans-serif;
}`,
        output: "Brauzer avval faqat kerakli belgilar diapazonidagi shrift faylini yuklaydi. Latin matnli sahifada kirill fayli umuman yuklanmaydi. Shrift yuklanguncha system-ui bilan matn ko'rinadi, keyin InterVar bilan almashadi. Variable font bir faylda 100 dan 900 gacha og'irlikni beradi."
      },
      {
        title: "metrics.css",
        lang: "css",
        code: `@font-face {
  font-family: "InterFallback";
  src: local("Arial");
  size-adjust: 105%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}

body {
  font-family: "InterVar", "InterFallback", sans-serif;
}

h1, h2, h3 {
  font-optical-sizing: auto;
  letter-spacing: -0.01em;
}`,
        output: "InterVar yuklanmaguncha Arial 105% o'lchamda ko'rsatiladi; ascent va descent qiymatlari Inter bilan moslashtirilgani uchun shrift almashganda qatorlar sakramaydi. Sarlavhalar optik o'lchamlashdan foydalanadi va harflar orasi biroz zichlashadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Sozlama", "Vazifasi", "Foydasi"],
      rows: [
        ["<code>font-display: swap</code>", "Zaxira shriftni darhol ko'rsatish", "Matn darhol o'qiladi"],
        ["<code>unicode-range</code>", "Qaysi belgilar uchun fayl yuklanishi", "Ortiqcha fayl yuklanmaydi"],
        ["<code>font-weight: 100 900</code>", "Variable font oralig'i", "Bir faylda ko'p og'irlik"],
        ["<code>size-adjust</code>", "Zaxira shrift o'lchamini moslash", "Layout sakrashini kamaytiradi"],
        ["<code>preload as=\"font\"</code>", "Shriftni erta yuklash", "Birinchi ekran matni tezroq"]
      ]
    },
    note: {
      variant: "warning",
      title: "Shrift preload'ida crossorigin kerak",
      text: "Shrift fayllari CORS rejimida yuklanadi. <code>&lt;link rel=\"preload\" as=\"font\" type=\"font/woff2\" crossorigin&gt;</code> yozuvida <code>crossorigin</code> bo'lmasa, brauzer faylni ikki marta yuklashi mumkin. Shuningdek, faqat birinchi ekranda ishlatiladigan shriftni preload qiling."
    },
    quiz: [
      {
        q: "unicode-range nima uchun ishlatiladi?",
        options: [
          "Shrift rangini belgilash uchun",
          "Qaysi belgilar diapazoni uchun shrift fayli yuklanishini cheklash uchun",
          "Shriftni qalin qilish uchun",
          "Matnni markazlash uchun"
        ],
        answer: 1,
        explain: "unicode-range brauzerga faqat kerakli belgilar uchun tegishli faylni yuklash imkonini beradi."
      },
      {
        q: "font-weight: 100 900 yozuvi nimani bildiradi?",
        options: [
          "Faqat 100 va 900 og'irliklari bor",
          "Shrift faqat 900 da ishlaydi",
          "Variable font 100 dan 900 gacha oraliqni qo'llab-quvvatlaydi",
          "Shrift o'lchami 100–900px"
        ],
        answer: 2,
        explain: "Variable font uchun oraliq qiymat yoziladi; brauzer istalgan og'irlikni fayldan oladi."
      },
      {
        q: "Shriftni preload qilishda qaysi atribut majburiy?",
        options: ["crossorigin", "media", "integrity", "hreflang"],
        answer: 0,
        explain: "Fontlar CORS rejimida yuklanadi; preload'da crossorigin bo'lmasa, fayl qayta yuklanishi mumkin."
      }
    ]
  },
  {
    id: 81,
    title: "Rasm va video optimizatsiyasi: LCP uchun tanlov",
    minutes: 17,
    desc: "picture, srcset, aspect-ratio va fetchpriority bilan rasmlarni to'g'ri formatda va o'lchamda yetkazishni o'rganasiz.",
    intro: "Rasm sahifadagi eng katta resurs bo'lishi mumkin. Zamonaviy format, mos o'lcham va oldindan ajratilgan joy bilan siz ham tezlikni, ham barqarorlikni yaxshilaysiz. Video uchun esa faqat kerakli qismini yuklash muhim.",
    h: "Format va o'lchamni brauzerga tanlatish",
    codes: [
      {
        title: "galereya.html",
        lang: "html",
        code: `<picture>
  <source type="image/avif"
          srcset="/rasmlar/uy-400.avif 400w,
                  /rasmlar/uy-800.avif 800w,
                  /rasmlar/uy-1600.avif 1600w"
          sizes="(min-width: 60rem) 50vw, 100vw">
  <source type="image/webp"
          srcset="/rasmlar/uy-400.webp 400w,
                  /rasmlar/uy-800.webp 800w">
  <img src="/rasmlar/uy-800.jpg"
       width="800" height="500"
       loading="lazy" decoding="async"
       alt="Tog' etagidagi zamonaviy uy">
</picture>`,
        output: "AVIF qo'llab-quvvatlanadigan brauzer ekran va zichlikka qarab 400w, 800w yoki 1600w AVIF faylni tanlaydi. AVIF bo'lmasa WebP, u ham bo'lmasa JPG ishlatiladi. Rasm 800×500 joyni oldindan egallaydi va ekrandan uzoqda bo'lsa kechiktirilib yuklanadi."
      },
      {
        title: "media.css",
        lang: "css",
        code: `.media {
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;
  background: #e2e8f0;
}

.media img,
.media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

video {
  max-width: 100%;
  height: auto;
}`,
        output: "Media bloki har doim 16:9 nisbatda joy egallaydi, yuklanishdan oldin ham balandligi ma'lum bo'ladi. Rasm yoki video blokni to'liq qoplaydi, ortiqcha qismi kesiladi va cho'zilmaydi. Burchaklar 0.75rem yumaloqlanadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Format", "Afzalligi", "Qachon ishlatiladi?"],
      rows: [
        ["AVIF", "Eng yaxshi siqish, HDR", "Foto va katta rasmlar"],
        ["WebP", "Keng qo'llab-quvvatlash", "AVIF fallback"],
        ["JPEG", "Universal", "Eng eski brauzerlar uchun"],
        ["SVG", "Masshtablanadi, kichik", "Ikonka va logotiplar"],
        ["MP4 (H.264)", "Keng qo'llab-quvvatlash", "Video fallback"]
      ]
    },
    note: {
      variant: "tip",
      title: "LCP rasmni lazy qilmang",
      text: "Birinchi ekrandagi asosiy rasmga <code>loading=\"lazy\"</code> qo'ysangiz, LCP kechikadi. Uni <code>loading=\"eager\"</code> (yoki atributsiz), <code>fetchpriority=\"high\"</code> va aniq width/height bilan bering. Pastdagi galereya rasmlarigagina lazy ishlating."
    },
    quiz: [
      {
        q: "picture ichida bir nechta format taklif qilish uchun qaysi element ishlatiladi?",
        options: ["img", "source", "picture-source", "format"],
        answer: 1,
        explain: "source elementlari type va srcset bilan turli format yoki o'lchamlarni taklif qiladi."
      },
      {
        q: "Rasm yuklanishidan oldin joy ajratish uchun qaysi xossa eng qulay?",
        options: ["aspect-ratio", "z-index", "position", "filter"],
        answer: 0,
        explain: "aspect-ratio kenglik yoki balandlikdan ikkinchisini hisoblab, layout uchun joy ajratadi."
      },
      {
        q: "Birinchi ekrandagi katta rasm uchun qaysi yozuv noto'g'ri?",
        options: [
          "fetchpriority=\"high\"",
          "Aniq width va height",
          "loading=\"lazy\"",
          "Mos o'lchamdagi srcset"
        ],
        answer: 2,
        explain: "LCP rasmni lazy qilish uni kechiktiradi; u darhol yuklanishi kerak."
      }
    ]
  },
  {
    id: 82,
    title: "Texnik SEO: crawl, indeks va canonical",
    minutes: 16,
    desc: "Qidiruv botlarining sahifani topishi, indekslashi va dublikat manzillarni ajratishini meta va sitemap bilan boshqarasiz.",
    intro: "SEO sehr emas, texnik tartib. Qidiruv boti sahifani topishi, uni indekslashi va asosiy manzilni bilishi kerak. <b>robots meta</b>, <b>canonical</b> va <b>sitemap</b> shu vazifani bajaradi.",
    h: "Botga aniq ko'rsatma berish",
    codes: [
      {
        title: "head.html",
        lang: "html",
        code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>HTML & CSS ikkinchi jild — Noldan</title>
  <meta name="description"
        content="Layout, dizayn tizimlari, web components va deploy bo'yicha amaliy darslar.">
  <link rel="canonical" href="https://noldan.uz/kurslar/html-css/">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="sitemap" type="application/xml" href="/sitemap.xml">
</head>`,
        output: "Qidiruv boti sahifani indekslashi, havolalarni kuzatishi va katta rasm ko'rinishidan foydalanishi mumkin. Canonical asosiy manzilni https://noldan.uz/kurslar/html-css/ deb belgilaydi. Brauzer yorlig'ida sarlavha, qidiruv natijasida esa tavsif ko'rinadi."
      },
      {
        title: "sitemap.html",
        lang: "html",
        code: `<main>
  <h1>Sayt xaritasi</h1>
  <nav aria-label="Sayt xaritasi">
    <ul>
      <li><a href="/">Bosh sahifa</a></li>
      <li><a href="/kurslar/">Kurslar</a></li>
      <li><a href="/kurslar/html-css/">HTML & CSS</a></li>
      <li><a href="/blog/">Blog</a></li>
      <li><a href="/aloqa/">Aloqa</a></li>
    </ul>
  </nav>
</main>`,
        output: "Foydalanuvchi va bot uchun barcha asosiy bo'limlarga oddiy HTML havolalar ko'rinadi. Har bir havola kuzatiladi; JavaScript talab qilmaydi. Sayt xaritasi sahifasi chuqur yashiringan mazmunni topishga yordam beradi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Ko'rsatma", "Ma'nosi", "Qachon ishlatiladi?"],
      rows: [
        ["<code>index</code>", "Sahifani indekslashga ruxsat", "Ommaviy sahifalar"],
        ["<code>noindex</code>", "Sahifani indekslamaslik", "Shaxsiy yoki takroriy sahifalar"],
        ["<code>follow</code>", "Havolalarni kuzatish", "Oddiy holat"],
        ["<code>nofollow</code>", "Havolalarni kuzatmaslik", "Ishonchsiz tashqi havolalar"],
        ["<code>canonical</code>", "Asosiy manzilni bildirish", "Bir xil mazmun bir necha URL'da"],
        ["<code>sitemap.xml</code>", "Sahifalar ro'yxati", "Botga topishga yordam beradi"]
      ]
    },
    note: {
      variant: "warning",
      title: "robots.txt indeksni to'xtatmaydi",
      text: "<code>robots.txt</code> faqat crawl'ni cheklaydi; sahifa boshqa havoladan topilsa, baribir indekslanishi mumkin. Indeksdan chiqarish uchun <code>noindex</code> meta yoki HTTP sarlavhasidan foydalaning. Muhim sahifalarni robots.txt bilan bloklab, keyin noindex qo'shish ham noto'g'ri — bot noindex'ni o'qiy olmaydi."
    },
    quiz: [
      {
        q: "Sahifani indeksdan chiqarish uchun qaysi qiymat ishlatiladi?",
        options: ["noindex", "nofollow", "noarchive", "none"],
        answer: 0,
        explain: "noindex qidiruv botiga sahifani indekslamaslikni bildiradi."
      },
      {
        q: "Bir xil mazmun bir nechta manzilda ochilsa, asosiy manzilni qaysi element bildiradi?",
        options: ["meta robots", "link canonical", "link sitemap", "meta description"],
        answer: 1,
        explain: "link rel=\"canonical\" qidiruv tizimiga asosiy URL'ni ko'rsatadi."
      },
      {
        q: "sitemap.xml nima uchun kerak?",
        options: [
          "Sayt dizaynini saqlash uchun",
          "Faqat 404 sahifalarni ko'rsatish uchun",
          "Botga indekslanishi kerak bo'lgan sahifalar ro'yxatini berish uchun",
          "CSS fayllarini yuklash uchun"
        ],
        answer: 2,
        explain: "Sitemap qidiruv botiga saytdagi muhim URL'lar va ularning yangilanish ma'lumotlarini beradi."
      }
    ]
  },
  {
    id: 83,
    title: "JSON-LD va boy natijalar",
    minutes: 16,
    desc: "schema.org JSON-LD bilan maqola, non va FAQ ma'lumotlarini qidiruv tizimiga tushunarli shaklda berishni o'rganasiz.",
    intro: "Qidiruv boti sahifa matnini o'qiydi, lekin uning ma'nosini har doim ham aniq tushunmaydi. <b>JSON-LD</b> — schema.org lug'atida yozilgan yashirin ma'lumot bo'lib, sahifa turini va mazmunini mashinaga tushuntiradi.",
    h: "Maqola va non ma'lumotlari",
    codes: [
      {
        title: "maqola.html",
        lang: "html",
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "CSS Grid bilan moslashuvchan galereya",
  "datePublished": "2026-09-12",
  "dateModified": "2026-10-01",
  "author": {
    "@type": "Person",
    "name": "Aziza Karimova"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Noldan"
  },
  "mainEntityOfPage": "https://noldan.uz/blog/grid-galereya/"
}
</script>`,
        output: "Qidiruv tizimi sahifani Article sifatida taniydi: sarlavha, nashr va yangilanish sanasi, muallif, nashriyot va asosiy manzil mavjud. Bu ma'lumot boy natijalarda muallif va sana ko'rinishini yaxshilashi mumkin. Foydalanuvchi sahifasida hech qanday qo'shimcha matn ko'rinmaydi."
      },
      {
        title: "faq.html",
        lang: "html",
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Subgrid nima uchun kerak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kartalar ichidagi qatorlarni ota Grid tarmog'iga tekislash uchun."
      }
    },
    {
      "@type": "Question",
      "name": "Performance budget nima?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sahifa tezligi va resurs hajmi uchun oldindan belgilangan chegara."
      }
    }
  ]
}
</script>`,
        output: "Qidiruv tizimi sahifada ikkita FAQ yozuvi borligini tushunadi: subgrid va performance budget haqidagi savol-javoblar. Mos keladigan mazmun ko'rsatilsa, qidiruv natijasida ochiladigan savollar bloki paydo bo'lishi mumkin. JSON-LD foydalanuvchiga ko'rinmaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Maydon", "Vazifasi", "Misol"],
      rows: [
        ["<code>@context</code>", "Lug'at manzili", "https://schema.org"],
        ["<code>@type</code>", "Ma'lumot turi", "Article, FAQPage, Product"],
        ["<code>headline</code>", "Maqola sarlavhasi", "60–110 belgi"],
        ["<code>mainEntityOfPage</code>", "Asosiy sahifa manzili", "Canonical URL"],
        ["<code>acceptedAnswer</code>", "FAQ javobi", "Qisqa va aniq matn"]
      ]
    },
    note: {
      variant: "tip",
      title: "Ko'rinadigan mazmunga mos bo'lsin",
      text: "JSON-LD'dagi ma'lumot sahifada ko'rinadigan mazmunga mos kelishi kerak. Yashirin savollar yoki mavjud bo'lmagan narxlarni qo'shish qoidalarni buzadi va qo'lda jazoga olib kelishi mumkin. Nashrdan oldin Rich Results Test yoki Schema Markup Validator bilan tekshiring."
    },
    quiz: [
      {
        q: "JSON-LD qaysi script type bilan sahifaga qo'shiladi?",
        options: ["text/javascript", "application/json", "application/ld+json", "text/schema"],
        answer: 2,
        explain: "JSON-LD uchun script type=\"application/ld+json\" ishlatiladi."
      },
      {
        q: "@type maydoni nimani bildiradi?",
        options: [
          "Lug'at manzilini",
          "Ma'lumot turini (Article, FAQPage va hokazo)",
          "Sahifa tilini",
          "CSS fayl turini"
        ],
        answer: 1,
        explain: "@type schema.org lug'atidagi aniq tur nomini ko'rsatadi."
      },
      {
        q: "JSON-LD mazmuni haqida qaysi qoida to'g'ri?",
        options: [
          "U sahifada ko'rinadigan mazmunga mos bo'lishi kerak",
          "U faqat yashirin ma'lumot uchun ishlatiladi",
          "U CSS ichida yozilishi shart",
          "U faqat mahsulot narxini ko'rsatadi"
        ],
        answer: 0,
        explain: "Strukturaviy ma'lumot sahifadagi haqiqiy mazmunni aks ettirishi kerak; aks holda qoidalar buziladi."
      }
    ]
  },
  {
    id: 84,
    title: "Ko'p tilli sayt: lang, hreflang va RTL",
    minutes: 17,
    desc: "Sahifa tilini to'g'ri belgilash, hreflang bilan til versiyalarini bog'lash va mantiqiy CSS xossalari bilan RTL'ni qo'llashni o'rganasiz.",
    intro: "Ko'p tilli saytda har bir sahifa qaysi tilda ekanini brauzer va qidiruv tizimi bilishi kerak. <b>lang</b> talaffuz va uslubni, <b>hreflang</b> til versiyalari orasidagi bog'lanishni, <b>dir</b> esa matn yo'nalishini boshqaradi.",
    h: "Til versiyalarini bog'lash",
    codes: [
      {
        title: "head.html",
        lang: "html",
        code: `<html lang="uz-Latn">
<head>
  <link rel="alternate" hreflang="uz-Latn" href="https://noldan.uz/uz/">
  <link rel="alternate" hreflang="uz-Cyrl" href="https://noldan.uz/uz-cyrl/">
  <link rel="alternate" hreflang="ru" href="https://noldan.uz/ru/">
  <link rel="alternate" hreflang="en" href="https://noldan.uz/en/">
  <link rel="alternate" hreflang="x-default" href="https://noldan.uz/">
</head>
<body>
  <nav aria-label="Til tanlash">
    <a href="/uz/" lang="uz-Latn" hreflang="uz-Latn">O'zbekcha</a>
    <a href="/ru/" lang="ru" hreflang="ru">Русский</a>
  </nav>
</body>
</html>`,
        output: "Brauzer sahifani o'zbek lotin tilida ekanini biladi va ekran o'quvchi talaffuzini shunga moslaydi. Qidiruv tizimi to'rt til versiyasi va x-default manzilini bog'laydi. Til havolalari o'z tili bilan belgilangan, shuning uchun ekran o'quvchi ularni to'g'ri o'qiydi."
      },
      {
        title: "rtl.css",
        lang: "css",
        code: `.card {
  padding-inline: 1.25rem;
  margin-inline-start: 2rem;
  border-inline-start: 4px solid #2563eb;
}

.card__icon {
  margin-inline-end: 0.75rem;
}

[dir="rtl"] .card__arrow {
  transform: scaleX(-1);
}

html[lang="ru"] {
  font-family: "InterVar", system-ui, sans-serif;
}`,
        output: "LTR rejimida karta chapdan 1.25rem padding, chapdan 2rem chekinish va chap tomonda ko'k chiziq oladi. dir=\"rtl\" qo'yilganda barcha inline qiymatlar o'ng tomonga ko'chadi, strelka ikonkasi esa gorizontal aks etadi. Rus tili uchun shrift oilasi alohida belgilanadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Tushuncha", "Misol", "Vazifasi"],
      rows: [
        ["<code>lang</code>", "<code>&lt;html lang=\"uz-Latn\"&gt;</code>", "Sahifa tili va talaffuz"],
        ["<code>hreflang</code>", "<code>hreflang=\"ru\"</code>", "Til versiyasini bog'lash"],
        ["<code>x-default</code>", "Til aniqlanmagan foydalanuvchi", "Zaxira versiya"],
        ["<code>dir=\"rtl\"</code>", "O'ngdan chapga matn", "Arab va ibroniy tillari"],
        ["<code>margin-inline-start</code>", "Mantiqiy xossa", "LTR va RTLda avtomatik moslashadi"]
      ]
    },
    note: {
      variant: "tip",
      title: "Fizik xossalar o'rniga mantiqiy xossalar",
      text: "<code>margin-left</code> yoki <code>padding-right</code> o'rniga <code>margin-inline-start</code> va <code>padding-inline-end</code> ishlating. Ular matn yo'nalishiga qarab avtomatik moslashadi. <code>left/right</code> o'rniga <code>inset-inline</code>, chegara uchun <code>border-inline-start</code> ishlatilsa, RTL uchun alohida CSS fayl kerak bo'lmaydi."
    },
    quiz: [
      {
        q: "Til aniqlanmagan foydalanuvchi uchun zaxira versiyani qaysi hreflang ko'rsatadi?",
        options: ["default", "x-default", "all", "und"],
        answer: 1,
        explain: "hreflang=\"x-default\" tilga mos versiya topilmaganda ko'rsatiladigan sahifani bildiradi."
      },
      {
        q: "RTL rejimida chapdan chekinishni to'g'ri boshqaradigan xossa qaysi?",
        options: ["margin-left", "padding-left", "margin-inline-start", "left"],
        answer: 2,
        explain: "margin-inline-start matn yo'nalishiga qarab LTRda chap, RTLda o'ng tomonga qo'llanadi."
      },
      {
        q: "Sahifa tilini qaysi atribut belgilaydi?",
        options: ["lang", "dir", "hreflang", "translate"],
        answer: 0,
        explain: "lang atributi hujjat yoki element tilini bildiradi va talaffuzga ta'sir qiladi."
      }
    ]
  },
  {
    id: 85,
    title: "Xavfsizlik headerlari: CSP, HSTS va nosniff",
    minutes: 17,
    desc: "Content-Security-Policy, HSTS va boshqa sarlavhalar bilan XSS va resurs aralashtirish hujumlarini kamaytirishni o'rganasiz.",
    intro: "Sayt xavfsizligi faqat backend ishi emas. Brauzerga qaysi resurslarga ishonish, HTTPS'ni majburlash va fayl turlarini tekshirishni aytuvchi <b>xavfsizlik sarlavhalari</b> muhim himoya qatlamidir.",
    h: "CSP va nonce bilan skript cheklash",
    codes: [
      {
        title: "csp.html",
        lang: "html",
        code: `<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'nonce-r4nd0m';
               style-src 'self' 'nonce-r4nd0m';
               img-src 'self' data: https:;
               object-src 'none';
               base-uri 'self';
               frame-ancestors 'none'">

<script nonce="r4nd0m" src="/js/app.js"></script>
<style nonce="r4nd0m">
  body { margin: 0; }
</style>`,
        output: "Brauzer faqat o'z domenidan skript va uslublarni, shuningdek nonce=\"r4nd0m\" bilan belgilangan inline bloklarni bajaradi. Ruxsat etilmagan uchinchi tomon skripti bloklanadi va konsolda CSP xatosi chiqadi. object, base va iframe orqali sahifani o'g'irlash cheklanadi."
      },
      {
        title: "headers.html",
        lang: "html",
        code: `<!-- Server javob sarlavhalari (meta emas!) -->
<!--
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), camera=()
Content-Security-Policy: default-src 'self'
-->

<a href="https://example.com" rel="noopener noreferrer">Tashqi sayt</a>`,
        output: "Brauzer saytga faqat HTTPS orqali ulanishni ikki yil davomida talab qiladi. MIME turi noto'g'ri fayllar bajarilmaydi. Boshqa saytga o'tishda to'liq manzil emas, faqat domen yuboriladi. Geolokatsiya va kamera ruxsatlari butunlay o'chiriladi. Tashqi havola yangi oynada ochilsa ham sahifa unga referrer orqali bog'lanmaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Sarlavha", "Himoya qiladi", "Tavsiya"],
      rows: [
        ["<code>Content-Security-Policy</code>", "XSS va ruxsatsiz resurslar", "Avval report-only, keyin enforce"],
        ["<code>Strict-Transport-Security</code>", "HTTP'ga tushish", "max-age kamida 1 yil"],
        ["<code>X-Content-Type-Options</code>", "MIME sniffing", "nosniff"],
        ["<code>Referrer-Policy</code>", "Ortiqcha manzil oqishi", "strict-origin-when-cross-origin"],
        ["<code>Permissions-Policy</code>", "API ruxsatlari", "Kerakli API'larnigina ochish"]
      ]
    },
    note: {
      variant: "warning",
      title: "Ba'zi sarlavhalar meta bilan ishlamaydi",
      text: "<code>Strict-Transport-Security</code>, <code>frame-ancestors</code> va <code>report-uri</code> kabi direktivalar meta http-equiv orqali to'liq qo'llanmaydi. Ularni server yoki hosting sozlamalarida HTTP javob sarlavhasi sifatida bering. CSP'ni birinchi kundan qattiq qilish o'rniga <code>Content-Security-Policy-Report-Only</code> bilan kuzatib, keyin yoqing."
    },
    quiz: [
      {
        q: "CSP'ning asosiy vazifasi nima?",
        options: [
          "Sahifa tezligini oshirish",
          "Qaysi manbalardan skript, uslub va boshqa resurs yuklanishini cheklash",
          "Rasmlarni avtomatik siqish",
          "Formani validatsiya qilish"
        ],
        answer: 1,
        explain: "Content-Security-Policy brauzerga ruxsat etilgan resurs manbalarini aytib, XSS ta'sirini kamaytiradi."
      },
      {
        q: "HSTS qaysi hujumning oldini oladi?",
        options: [
          "SQL injection",
          "HTTP'ga majburiy yo'naltirish orqali trafikni ushlash",
          "Fayl yuklashni bloklash",
          "Rasm formatini o'zgartirish"
        ],
        answer: 1,
        explain: "Strict-Transport-Security brauzerga faqat HTTPS ishlatishni buyurib, downgrade hujumlarini kamaytiradi."
      },
      {
        q: "X-Content-Type-Options: nosniff nimani to'xtatadi?",
        options: [
          "Brauzerning MIME turini taxmin qilishini",
          "Barcha JavaScriptni",
          "HTTPS ulanishini",
          "Cookie saqlashni"
        ],
        answer: 0,
        explain: "nosniff brauzerga javobning e'lon qilingan MIME turiga qat'iy rioya qilishni buyuradi."
      }
    ]
  },
  {
    id: 86,
    title: "iframe, tashqi havola va resurs yaxlitligi",
    minutes: 16,
    desc: "sandbox, referrerpolicy, rel atributlari va SRI bilan uchinchi tomon resurslarini xavfsiz ulashni o'rganasiz.",
    intro: "Uchinchi tomon xaritasi, videosi yoki skripti saytga qo'shilganda u sizning ishonch doiramga kiradi. <b>sandbox</b>, <b>referrerpolicy</b>, <b>rel</b> va <b>SRI</b> shu ishonchni cheklash vositalaridir.",
    h: "Uchinchi tomonni cheklash",
    codes: [
      {
        title: "xarita.html",
        lang: "html",
        code: `<iframe
  src="https://maps.example.com/embed/noldan"
  title="Noldan ofisining xaritadagi joylashuvi"
  width="600" height="400"
  loading="lazy"
  referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-popups"
  allow="geolocation 'none'">
</iframe>`,
        output: "Xarita sahifa pastga skroll qilinganda yuklanadi. iframe ichidagi skript ishlashi mumkin, lekin u ota sahifa bilan bir xil origin sifatida ishlay olmaydi, cookie o'qiy olmaydi va yangi oyna ochishi mumkin. Manzil ma'lumoti tashqi saytga yuborilmaydi, geolokatsiya ruxsati berilmaydi. Ekran o'quvchi iframe nomini «Noldan ofisining xaritadagi joylashuvi» deb o'qiydi."
      },
      {
        title: "skript.html",
        lang: "html",
        code: `<a href="https://partner.example.com" target="_blank"
   rel="noopener noreferrer">Hamkor sayti</a>

<script
  src="https://cdn.example.com/widget-1.4.2.min.js"
  integrity="sha384-K6xJ7m2v9Qp4sT8uW3yZ5aB1cD0eF6gH2iJ4kL8mN"
  crossorigin="anonymous"
  defer>
</script>`,
        output: "Tashqi havola yangi oynada ochiladi, lekin ochilgan sahifa window.opener orqali asl sahifani boshqara olmaydi va to'liq manzil referrer sifatida yuborilmaydi. Skript faqat integrity hash mos kelsa bajariladi; CDN fayli o'zgartirilgan bo'lsa, brauzer uni bloklaydi va konsolda xato beradi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Vosita", "Nimadan himoya qiladi?", "Misol"],
      rows: [
        ["<code>sandbox</code>", "Iframe'ning ortiqcha imkoniyatlaridan", "allow-scripts, allow-popups"],
        ["<code>referrerpolicy</code>", "Manzil ma'lumotining oqishidan", "no-referrer"],
        ["<code>rel=\"noopener\"</code>", "Yangi oynaning opener orqali boshqarishidan", "target=\"_blank\""],
        ["<code>rel=\"noreferrer\"</code>", "Referrer yuborilishidan", "Maxfiy havolalar"],
        ["<code>integrity</code>", "CDN faylining o'zgarishidan", "SRI hash"],
        ["<code>crossorigin</code>", "SRI tekshiruvi uchun CORS", "anonymous"]
      ]
    },
    note: {
      variant: "warning",
      title: "allow-scripts va allow-same-origin birga xavfli",
      text: "Ishonchsiz iframe'da <code>sandbox=\"allow-scripts allow-same-origin\"</code> birga berilsa, ichki skript sandbox'ni o'zi olib tashlashi mumkin. Bu himoyani amalda yo'q qiladi. Bir xil origin kerak bo'lmasa, <code>allow-same-origin</code>ni bermang. Tashqi skriptlarda esa SRI hash va versiyalangan URL ishlating."
    },
    quiz: [
      {
        q: "Ishonchsiz iframe imkoniyatlarini cheklash uchun qaysi atribut ishlatiladi?",
        options: ["sandbox", "loading", "allowfullscreen", "title"],
        answer: 0,
        explain: "sandbox iframe'ning skript, forma, popup va boshqa imkoniyatlarini cheklaydi."
      },
      {
        q: "SRI integrity atributi nimani tekshiradi?",
        options: [
          "Faylning yuklanish tezligini",
          "Fayl mazmunining hash bo'yicha o'zgarmaganini",
          "Faylning rangini",
          "Faylning tilini"
        ],
        answer: 1,
        explain: "Subresource Integrity hash mos kelmasa, brauzer resursni ishlatmaydi."
      },
      {
        q: "target=\"_blank\" bilan ochilgan havolada rel=\"noopener\" nima qiladi?",
        options: [
          "Havolani bloklaydi",
          "Yangi oynaning window.opener orqali asl sahifaga murojaat qilishini to'xtatadi",
          "Sahifani yangilaydi",
          "Faylni yuklab oladi"
        ],
        answer: 1,
        explain: "noopener yangi kontekstga opener havolasini bermaydi va reverse tabnabbing xavfini kamaytiradi."
      }
    ]
  },
  {
    id: 87,
    title: "@property bilan tipli custom property",
    minutes: 17,
    desc: "@property yordamida custom property'larga tur, meros va boshlang'ich qiymat berib, ularni animatsiya qilishni o'rganasiz.",
    intro: "Oddiy custom property matn sifatida saqlanadi, shuning uchun brauzer uning turini bilmaydi va ba'zi animatsiyalarni bajara olmaydi. <b>@property</b> unga aniq tur beradi: rang, burchak, uzunlik yoki son. Shundan keyin qiymatlar silliq animatsiya qilinadi.",
    h: "Burchakni ro'yxatdan o'tkazish",
    codes: [
      {
        title: "gradient.css",
        lang: "css",
        code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.gradient-border {
  --angle: 0deg;
  padding: 2px;
  background: conic-gradient(
    from var(--angle),
    #2563eb,
    #db2777,
    #f59e0b,
    #2563eb
  );
  animation: aylanish 4s linear infinite;
}

@keyframes aylanish {
  to { --angle: 360deg; }
}`,
        output: "Element atrofidagi gradient chegara konus shaklida ko'k, pushti va sariq ranglar bilan aylanadi. --angle 0 dan 360 gradusgacha 4 soniyada uzluksiz o'zgaradi. @property bo'lmasa, brauzer burchakni matn deb biladi va bu animatsiya ishlamaydi."
      },
      {
        title: "tema.css",
        lang: "css",
        code: `@property --brand-hue {
  syntax: "<number>";
  inherits: true;
  initial-value: 255;
}

@property --surface {
  syntax: "<color>";
  inherits: true;
  initial-value: #ffffff;
}

.card {
  --surface: oklch(97% 0.02 var(--brand-hue));
  background: var(--surface);
  transition: --surface 0.3s ease;
}

[data-theme="dark"] .card {
  --surface: oklch(25% 0.03 var(--brand-hue));
}`,
        output: "Karta och ko'k fon oladi. data-theme=\"dark\" qo'shilganda fon 0.3 soniyada to'q ko'k rangga silliq o'tadi, chunki --surface <color> turida ro'yxatdan o'tgan. --brand-hue meros bo'lib, butun karta ichida 255 qiymatini saqlaydi. Rang o'zgarishi diskret sakrashsiz bajariladi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Descriptor", "Vazifasi", "Misol"],
      rows: [
        ["<code>syntax</code>", "Qiymat turi", "\"&lt;angle&gt;\", \"&lt;color&gt;\", \"&lt;number&gt;\""],
        ["<code>inherits</code>", "Bolalarga meros bo'ladimi", "true yoki false"],
        ["<code>initial-value</code>", "Boshlang'ich qiymat", "0deg, #ffffff"],
        ["<code>@property</code>", "Ro'yxatdan o'tkazish", "Animatsiya va validatsiya uchun"]
      ]
    },
    note: {
      variant: "info",
      title: "Tur berish xatolarni ham ushlaydi",
      text: "<code>@property</code> bilan noto'g'ri turdagi qiymat rad etiladi va boshlang'ich qiymat ishlatiladi. Bu kutilmagan «buzilgan» ko'rinish o'rniga barqaror natija beradi. Sintaksis qiymatlari qo'shtirnoq ichida yoziladi: <code>syntax: \"&lt;length&gt;\"</code>. Eski brauzerlar uchun oddiy fallback qiymatni ham qoldiring."
    },
    quiz: [
      {
        q: "@property'da qaysi descriptor qiymat turini belgilaydi?",
        options: ["syntax", "inherits", "initial-value", "type"],
        answer: 0,
        explain: "syntax descriptor \"<angle>\", \"<color>\", \"<number>\" kabi turlarni belgilaydi."
      },
      {
        q: "inherits: false nimani bildiradi?",
        options: [
          "Qiymat bolalarga meros bo'lmaydi",
          "Qiymat faqat :root'da ishlaydi",
          "Qiymat animatsiya qilinmaydi",
          "Qiymat o'chiriladi"
        ],
        answer: 0,
        explain: "inherits false custom property'ning bolalarga meros bo'lmasligini bildiradi."
      },
      {
        q: "Nega @property gradient burchagini animatsiya qilishga yordam beradi?",
        options: [
          "U gradientni rasmga aylantiradi",
          "U qiymatni <angle> turi sifatida tanib, oraliq qiymatlarni hisoblaydi",
          "U animatsiyani o'chirib qo'yadi",
          "U faqat qorong'i mavzuda ishlaydi"
        ],
        answer: 1,
        explain: "Tur ma'lum bo'lgach brauzer 0deg va 360deg orasidagi oraliq burchaklarni hisoblay oladi."
      }
    ]
  },
  {
    id: 88,
    title: "color-mix(), light-dark() va relative ranglar",
    minutes: 16,
    desc: "Zamonaviy CSS rang funksiyalari bilan brend rangidan hosilalar yaratish va mavzuga mos ranglarni tanlashni o'rganasiz.",
    intro: "Har bir hover, chegara va fon uchun qo'lda yangi hex yozish ko'p xatoga olib keladi. <b>color-mix()</b> ranglarni aralashtiradi, <b>light-dark()</b> mavzuga qarab qiymat tanlaydi, <b>relative color</b> esa mavjud rangning kanallarini o'zgartiradi.",
    h: "Bitta brend rangdan hosilalar",
    codes: [
      {
        title: "brand.css",
        lang: "css",
        code: `:root {
  --brand: oklch(58% 0.19 255);
  --brand-hover: oklch(from var(--brand) calc(l - 0.07) c h);
  --brand-soft: color-mix(in oklab, var(--brand) 15%, white);
  --brand-border: color-mix(in oklab, var(--brand) 35%, white);
}

.button {
  background: var(--brand);
  border: 1px solid var(--brand-border);
}

.button:hover {
  background: var(--brand-hover);
}

.notice {
  background: var(--brand-soft);
  border-inline-start: 4px solid var(--brand);
}`,
        output: "Tugma asosiy ko'k rangda, hover'da 7% to'qroq ko'k bo'ladi. Chegara asosiy rangning oq bilan 35% aralashmasi. Notice bloki juda och ko'k fonda, chap tomonida to'liq brend rangli chiziq bilan ko'rinadi. Barcha hosilalar bitta --brand qiymatidan kelib chiqadi."
      },
      {
        title: "mavzu.css",
        lang: "css",
        code: `:root {
  color-scheme: light dark;
  --bg: light-dark(#f8fafc, #0b1120);
  --text: light-dark(#0f172a, #e2e8f0);
  --accent: light-dark(#2563eb, #93c5fd);
}

body {
  background: var(--bg);
  color: var(--text);
}

a {
  color: var(--accent);
  text-decoration-color: color-mix(in oklab, currentColor 40%, transparent);
}`,
        output: "Yorug' mavzuda och fon va to'q matn, qorong'i mavzuda to'q fon va och matn ko'rinadi. Havolalar mavzuga mos ko'k rangda bo'ladi. Tag chizig'i havola rangining 40% shaffof aralashmasi bo'lib, yumshoqroq ko'rinadi. Tizim mavzusi o'zgarsa, ranglar avtomatik yangilanadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Funksiya", "Misol", "Natija"],
      rows: [
        ["<code>color-mix()</code>", "<code>color-mix(in oklab, blue 20%, white)</code>", "Och ko'k"],
        ["<code>light-dark()</code>", "<code>light-dark(#fff, #000)</code>", "Mavzuga qarab rang"],
        ["Relative color", "<code>oklch(from var(--c) calc(l - .1) c h)</code>", "To'qroq variant"],
        ["<code>currentColor</code>", "<code>color-mix(in oklab, currentColor 40%, transparent)</code>", "Joriy rangning shaffof varianti"],
        ["<code>color-scheme</code>", "<code>light dark</code>", "light-dark'ni yoqadi"]
      ]
    },
    note: {
      variant: "info",
      title: "Aralash fazosini tanlang",
      text: "<code>color-mix()</code> uchun <code>in oklab</code> odatda tabiiy o'tish beradi; <code>in srgb</code> esa ba'zi ranglarda kulrangroq natija berishi mumkin. Shaffoflik uchun <code>transparent</code> bilan aralashtirish qulay. Ranglar brend palitrasi bilan sinovdan o'tkazilishi va kontrast talabiga javob berishi kerak."
    },
    quiz: [
      {
        q: "color-mix(in oklab, var(--brand) 20%, white) qanday natija beradi?",
        options: [
          "20% brend rangi va 80% oq aralashmasi",
          "Faqat brend rangi",
          "Faqat oq rang",
          "Qora rang"
        ],
        answer: 0,
        explain: "Foizlar aralashma ulushini bildiradi; qolgan qism ikkinchi rangdan olinadi."
      },
      {
        q: "light-dark() ishlashi uchun qaysi xossa kerak?",
        options: ["color-scheme", "display", "position", "overflow"],
        answer: 0,
        explain: "color-scheme: light dark tanlangan sxemani bildiradi va light-dark() shunga tayanadi."
      },
      {
        q: "oklch(from var(--brand) calc(l - 0.1) c h) yozuvi nimani o'zgartiradi?",
        options: [
          "Faqat rang ohangini",
          "Yorqinlikni 10% ga kamaytiradi, to'yinganlik va ohangni saqlaydi",
          "Rangni butunlay oq qiladi",
          "Shaffoflikni oshiradi"
        ],
        answer: 1,
        explain: "Relative color sintaksisida l kanali o'zgartirilib, c va h saqlanadi."
      }
    ]
  },
  {
    id: 89,
    title: "Style queries va :has() bilan moslashuvchan komponentlar",
    minutes: 17,
    desc: "Kontekstga qarab komponent variantini o'zgartirish va :has() bilan forma holatlarini bezashni o'rganasiz.",
    intro: "Komponent bir xil ko'rinishda qolmasligi kerak: tor konteynerda ixcham, keng joyda to'liq bo'lishi mumkin. <b>Style queries</b> custom property qiymatiga qarab uslubni o'zgartiradi, <b>:has()</b> esa ichidagi elementga qarab tashqi komponentni tanlaydi.",
    h: "Kontekst va ichki holat",
    codes: [
      {
        title: "compact.css",
        lang: "css",
        code: `.card-wrap {
  container-type: inline-size;
  container-name: card;
  --density: comfortable;
}

@container card style(--density: compact) {
  .card {
    padding: 0.75rem;
    gap: 0.35rem;
  }

  .card__meta {
    display: none;
  }
}

@container card (max-width: 28rem) {
  .card {
    grid-template-columns: 1fr;
  }
}`,
        output: "Konteynerda --density: compact bo'lsa, karta paddingi 0.75rem ga, ichki bo'shliq 0.35rem ga tushadi va meta qatori yashiriladi. Konteyner 28rem dan tor bo'lsa, karta bir ustunga o'tadi. Ikkala shart bir vaqtda bajarilsa, ikkala qoida ham qo'llanadi."
      },
      {
        title: "form-has.css",
        lang: "css",
        code: `.field:has(input:user-invalid) {
  --field-border: #b91c1c;
  --field-help: #b91c1c;
}

.field:has(input:focus-visible) {
  box-shadow: 0 0 0 3px rgb(37 99 235 / 0.25);
}

.form:has(input:user-invalid) .submit-hint {
  display: block;
}

.form:not(:has(input:user-invalid)) .submit-hint {
  display: none;
}`,
        output: "Foydalanuvchi noto'g'ri qiymat kiritgan maydonning butun .field bloki qizil chegara va qizil yordam matni oladi. Fokusdagi maydon atrofida ko'k soya paydo bo'ladi. Formada kamida bitta xatoli maydon bo'lsa, yuborish oldidagi ogohlantirish ko'rinadi; barcha xatolar tuzatilsa, u yashiriladi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Texnika", "Nimaga qarab tanlaydi?", "Misol"],
      rows: [
        ["Size container query", "Konteyner o'lchamiga", "<code>@container card (max-width: 28rem)</code>"],
        ["Style query", "Custom property qiymatiga", "<code>@container style(--density: compact)</code>"],
        ["<code>:has()</code>", "Ichki element mavjudligi yoki holatiga", "<code>.field:has(input:user-invalid)</code>"],
        ["<code>:not(:has())</code>", "Ichki shart bajarilmasligiga", "Xato yo'q holat"],
        ["<code>container-type</code>", "Konteyner turini belgilaydi", "inline-size"]
      ]
    },
    note: {
      variant: "tip",
      title: "Style query uchun container kerak",
      text: "Style query eng yaqin container'ga qaraydi. Konteyner yaratish uchun <code>container-type</code> yoki <code>container-name</code>dan foydalaning; size query uchun <code>inline-size</code> majburiy. <code>:has()</code> esa o'zi container talab qilmaydi, lekin murakkab selektorlar specificity'ni oshiradi — Uni <code>:where()</code> bilan yumshatish mumkin."
    },
    quiz: [
      {
        q: "Style query qaysi qiymatga qarab uslub tanlaydi?",
        options: [
          "Custom property qiymatiga",
          "Faqat ekran kengligiga",
          "Foydalanuvchi yoshiga",
          "Server javobiga"
        ],
        answer: 0,
        explain: "@container style(--density: compact) custom property qiymatini tekshiradi."
      },
      {
        q: ".field:has(input:user-invalid) selektori nimani tanlaydi?",
        options: [
          "Barcha input elementlarini",
          "Ichida foydalanuvchi tomonidan noto'g'ri to'ldirilgan input bo'lgan .field elementini",
          "Faqat formani",
          "Faqat :root elementini"
        ],
        answer: 1,
        explain: ":has() tashqi elementni ichidagi shart bajarilishiga qarab tanlaydi."
      },
      {
        q: "Size container query ishlashi uchun konteynerda qaysi xossa bo'lishi kerak?",
        options: ["container-type", "display: block", "position: relative", "overflow: hidden"],
        answer: 0,
        explain: "container-type: inline-size konteynerni o'lcham so'rovlari uchun tayyorlaydi."
      }
    ]
  }
];
