module.exports = [
  {
    id: 60,
    title: "@scope va :where bilan uslub izolyatsiyasi",
    minutes: 16,
    desc: "@scope bilan komponent ichidagi uslublarni chegaralash va :where bilan specificity'ni nolga tushirishni o'rganasiz.",
    intro: "Global CSS'da har bir selektor butun sahifaga ta'sir qilishi mumkin. <b>@scope</b> uslub doirasini komponent bilan chegaralaydi, <b>:where()</b> esa selektorning specificity'sini nolga tushiradi. Ikkalasi birgalikda uslublarni oldindan aytiladigan va xavfsiz qiladi.",
    h: "Doira va uning chegarasi",
    codes: [
      {
        title: "maqola.html",
        lang: "html",
        code: `<article class="card">
  <img src="/rasmlar/qopqoq.jpg" alt="Loyiha qopqog'i" width="480" height="240">
  <div class="card__body">
    <img src="/rasmlar/ikonka.svg" alt="" width="24" height="24">
    <h3>Yangi loyiha</h3>
    <p>Karta ichidagi tavsif matni.</p>
  </div>
</article>`,
        output: "Kartada ikkita rasm bor: yuqoridagi qopqoq va ichki blokdagi kichik ikonka. CSS'siz ikkala rasm ham tabiiy o'lchamida, sarlavha va matn esa pastda ketma-ket chiqadi."
      },
      {
        title: "scope.css",
        lang: "css",
        code: `@scope (.card) to (.card__body) {
  :scope {
    border: 1px solid #cbd5e1;
    border-radius: 0.75rem;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

@scope (.card__body) {
  img {
    width: 24px;
    height: 24px;
  }
}`,
        output: "Kartaning o'zi 1px chegara va 0.75rem radius oladi. Qopqoq rasmi kartaning butun kengligini egallaydi va nisbatini saqlaydi. card__body ichidagi ikonka esa 24×24px bo'lib qoladi, chunki birinchi scope card__body'da to'xtaydi, ikkinchi scope esa faqat shu blokni boshqaradi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Tushuncha", "Yozilishi", "Natija"],
      rows: [
        ["Scope ildizi", "<code>@scope (.card)</code>", "Uslublar .card va avlodlariga tegishli"],
        ["Chegara", "<code>to (.card__body)</code>", "Chegara va uning ichidagilarga ta'sir qilmaydi"],
        ["Scope ildizining o'zi", "<code>:scope</code>", "Konteynerni bevosita tanlaydi"],
        ["Nol specificity", "<code>:where(.prose h2)</code>", "Specificity hissasi 0"],
        ["Proximity", "Bir xil specificity'da yaqin scope", "Yaqinroq ota-scope ustun turadi"]
      ]
    },
    note: {
      variant: "info",
      title: "Specificity'ni ataylab pasaytiring",
      text: "<code>:where()</code> ichidagi selektor qanchalik murakkab bo'lsa ham specificity'ga 0 qo'shadi. Bu reset va uchinchi tomon uslublarini yozishda juda foydali: keyinchalik komponent qoidasi oson ustunlik qiladi. Lekin bu qulaylikni suiiste'mol qilmang — muhim uslubni tasodifan bosib ketish oson."
    },
    quiz: [
      {
        q: "@scope (.card) to (.card__body) qoidasi qaysi elementlarga ta'sir qiladi?",
        options: [
          "Faqat .card__body elementiga",
          ".card va uning avlodlariga, lekin .card__body va uning ichidagilarga ta'sir qilmaydi",
          "Butun sahifadagi barcha elementlarga",
          "Faqat .card ning bevosita bolalariga"
        ],
        answer: 1,
        explain: "Scope ildizi .card, chegara .card__body; chegara va uning ichidagi elementlar doiraga kirmaydi."
      },
      {
        q: ":where(.card h2) selektorining specificity'si qanday?",
        options: [
          "0,0,0 — nol",
          "0,1,0 — bitta class",
          "0,0,2 — ikki element",
          "0,1,1 — class va element"
        ],
        answer: 0,
        explain: ":where() argumentidan qat'i nazar specificity'ga hech qanday hissa qo'shmaydi."
      },
      {
        q: "Ikki scope bir xil specificity bilan bir elementga tegishli bo'lsa, qaysi biri ustun?",
        options: [
          "Har doim birinchi yozilgani",
          "Faqat :scope bilan yozilgani",
          "Elementga yaqinroq (proximity) scope",
          "Ikkalasi ham qo'llanmaydi"
        ],
        answer: 2,
        explain: "@scope proximity qoidasi bo'yicha DOM'da yaqinroq scope ildizi ustunlik oladi."
      }
    ]
  },
  {
    id: 61,
    title: "ITCSS va utility qatlamlari: loyiha tuzilmasi",
    minutes: 17,
    desc: "ITCSS tamoyillari asosida CSS fayllarini qatlamlarga ajratish va utility uslublarni komponentlardan ajratishni o'rganasiz.",
    intro: "Fayllar soni oshgani sari ularni tartibga solish kerak bo'ladi. <b>ITCSS</b> — CSS'ni umumiy sozlamalardan tor komponentlarga qarab qatlamlarga ajratuvchi metodologiya. U @layer bilan yaxshi moslashadi va har bir qoidaning joyini aniq qiladi.",
    h: "Manifest va qatlamlar",
    codes: [
      {
        title: "main.css",
        lang: "css",
        code: `@layer settings, tools, generic, elements, objects, components, utilities;

@import url("settings/tokens.css") layer(settings);
@import url("tools/breakpoints.css") layer(tools);
@import url("generic/reset.css") layer(generic);
@import url("elements/typography.css") layer(elements);
@import url("objects/layout.css") layer(objects);
@import url("components/card.css") layer(components);
@import url("utilities/spacing.css") layer(utilities);`,
        output: "Brauzer yettita faylni e'lon qilingan tartibda yuklaydi. Qatlam tartibi settings → tools → generic → elements → objects → components → utilities bo'lib qoladi. Utility qatlami oxirgi bo'lgani uchun kichik yordamchi classlar komponent uslublarini oson bosib ketadi."
      },
      {
        title: "card-and-utility.css",
        lang: "css",
        code: `@layer components {
  .card {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 1px 4px rgb(15 23 42 / 0.1);
  }
}

@layer utilities {
  .flow > * + * { margin-block-start: var(--flow-space, 1em); }
  .u-text-center { text-align: center; }
  .u-mt-0 { margin-block-start: 0; }
}

/* Foydalanish: <div class="card flow u-mt-0"> */`,
        output: "card klassi oq fon, 1.5rem padding va yumshoq soya oladi. flow klassi bolalar orasida 1em bo'shliq yaratadi. u-mt-0 qo'shilsa, utility qatlami tufayli birinchi elementning yuqori bo'shlig'i 0 bo'ladi. u-text-center matnni markazga tekislaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["ITCSS qatlami", "Nimani saqlaydi?", "Misol"],
      rows: [
        ["Settings", "Token va o'zgaruvchilar", "Ranglar, shrift shkalasi"],
        ["Tools", "Mixin va funksiyalar", "Breakpoint yordamchilari"],
        ["Generic", "Reset va normalize", "box-sizing, margin reset"],
        ["Elements", "Teglarning asosiy uslubi", "h1, a, body"],
        ["Objects", "Tuzilma, bezaksiz skelet", "container, grid"],
        ["Components", "Aniq komponent dizayni", "card, button"],
        ["Utilities", "Bitta vazifali yordamchi class", "u-mt-0, u-text-center"]
      ]
    },
    note: {
      variant: "tip",
      title: "Kichik loyihada soddaroq boshlang",
      text: "ITCSS katta jamoalar uchun foydali, lekin besh sahifali saytda yettita papka ortiqcha bo'lishi mumkin. Avval uch-to'rt qatlam bilan boshlang: tokens, base, components, utilities. Loyiha o'sganda qatlamlarni ajratish osonroq bo'ladi."
    },
    quiz: [
      {
        q: "ITCSS'da utility qatlami qayerda turadi?",
        options: [
          "Eng boshida, resetdan oldin",
          "Components va objects orasida",
          "Eng oxirida, barcha komponentlardan keyin",
          "Faqat alohida faylda, tartibsiz"
        ],
        answer: 2,
        explain: "Utilities eng tor va eng yuqori ustuvor qatlam bo'lib, komponentlardan keyin turadi."
      },
      {
        q: "ITCSS'ning asosiy g'oyasi nima?",
        options: [
          "CSS'ni umumiydan tor komponentga qarab qatlamlash",
          "Barcha uslublarni inline yozish",
          "Faqat ID selektorlardan foydalanish",
          "Har bir element uchun alohida fayl yaratish"
        ],
        answer: 0,
        explain: "ITCSS qoidalarni umumiy sozlamalardan aniq komponent va utility'larga qarab tartiblaydi."
      },
      {
        q: "@layer va ITCSS qatlamlarini birga ishlatishning foydasi nima?",
        options: [
          "U HTML fayllarini kamaytiradi",
          "Fayl tuzilmasi va kaskad tartibi bir xil nom bilan mos keladi",
          "U barcha specificity muammolarini avtomatik yo'q qiladi",
          "U JavaScriptni almashtiradi"
        ],
        answer: 1,
        explain: "Bir xil qatlam nomlari bilan fayl arxitekturasi va kaskad ustuvorligi izchil bo'ladi."
      }
    ]
  },
  {
    id: 62,
    title: "Custom element: birinchi web komponent",
    minutes: 18,
    desc: "customElements.define, lifecycle callbacklar va atributlar bilan ishlaydigan oddiy web komponent yaratasiz.",
    intro: "Web Components brauzerning o'zida ishlaydigan komponent modelidir. Uning asosi — <b>custom element</b>: o'z nomi, hayot sikli va xatti-harakati bo'lgan HTML tegi. Freymvorksiz ham qayta ishlatiladigan element yaratish mumkin.",
    h: "Tegni ro'yxatdan o'tkazish",
    codes: [
      {
        title: "badge.html",
        lang: "html",
        code: `<p>Mahsulot holati: <x-badge label="Yangi"></x-badge></p>

<script>
  class XBadge extends HTMLElement {
    connectedCallback() {
      const label = this.getAttribute("label") || "Yangilik";
      this.textContent = label;
      this.setAttribute("role", "status");
    }
  }

  customElements.define("x-badge", XBadge);
</script>`,
        output: "Sahifada «Mahsulot holati: Yangi» matni chiqadi. x-badge elementi connectedCallback ishga tushgach ichiga «Yangi» matnini yozadi va role=\"status\" oladi. Agar label atributi olib tashlansa, komponent «Yangilik» matnini ko'rsatadi."
      },
      {
        title: "badge.css",
        lang: "css",
        code: `x-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: #dcfce7;
  color: #166534;
  font-size: 0.875rem;
  font-weight: 600;
}

x-badge::before {
  content: "";
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: currentColor;
}`,
        output: "Badge yashil och fonli, yumaloq shaklli va yashil matnli bo'ladi. Matn oldida 0.45rem diametrli yashil nuqta chiqadi. Element inline-flex bo'lgani uchun matn qatorida o'z joyida turadi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Callback", "Qachon ishga tushadi?", "Odatiy vazifa"],
      rows: [
        ["<code>constructor</code>", "Element yaratilganda", "Shadow root va ichki holatni tayyorlash"],
        ["<code>connectedCallback</code>", "DOM'ga qo'shilganda", "Render, event listener, ma'lumot yuklash"],
        ["<code>disconnectedCallback</code>", "DOM'dan olib tashlanganda", "Listener va taymerlarni tozalash"],
        ["<code>attributeChangedCallback</code>", "Kuzatilayotgan atribut o'zgarganda", "Ko'rinishni yangilash"],
        ["<code>adoptedCallback</code>", "Boshqa hujjatga ko'chirilganda", "Kamdan-kam kerak bo'ladi"]
      ]
    },
    note: {
      variant: "warning",
      title: "Nomda defis bo'lishi shart",
      text: "Custom element nomi kamida bitta defis içerishi kerak: <code>x-badge</code>, <code>app-card</code>. <code>badge</code> kabi oddiy nom band qilingan HTML tegi bilan to'qnashishi mumkin. Shuningdek, bitta nomni ikki marta <code>customElements.define</code> qilish xato beradi."
    },
    quiz: [
      {
        q: "Custom element nomi qanday talabga javob berishi kerak?",
        options: [
          "Faqat katta harflardan iborat bo'lishi",
          "Kamida bitta defis (chiziqcha) bo'lishi",
          "Har doim x- bilan boshlanishi",
          "Faqat bitta so'zdan iborat bo'lishi"
        ],
        answer: 1,
        explain: "Custom element nomida defis bo'lishi shart; x- prefiksi odat bo'lsa-da, majburiy emas."
      },
      {
        q: "Element DOM'ga qo'shilganda qaysi callback ishga tushadi?",
        options: ["constructor", "attributeChangedCallback", "connectedCallback", "adoptedCallback"],
        answer: 2,
        explain: "connectedCallback element hujjatga ulanganda chaqiriladi; bu yerda render va listenerlar qo'shiladi."
      },
      {
        q: "customElements.define qachon chaqirilishi mumkin?",
        options: [
          "Faqat sahifa yuklangandan keyin bir marta",
          "Har bir element nusxasi uchun",
          "Faqat CSS yuklangach",
          "Har qanday paytda, lekin bitta nom uchun faqat bir marta"
        ],
        answer: 3,
        explain: "define istalgan paytda chaqiriladi; allaqachon mavjud elementlar avtomatik upgrade qilinadi, lekin bir nomni qayta ro'yxatdan o'tkazish mumkin emas."
      }
    ]
  },
  {
    id: 63,
    title: "Shadow DOM va slotlar bilan tarkibni ajratish",
    minutes: 18,
    desc: "attachShadow, slot va ::part yordamida uslub va tarkibi izolyatsiyalangan komponent qurishni o'rganasiz.",
    intro: "Custom elementning ichki tuzilishi global CSS va tasodifiy selektorlardan himoyalanishi kerak. <b>Shadow DOM</b> alohida DOM daraxti yaratadi, <b>slot</b> esa tashqi mazmunni komponent ichiga joylashtiradi. Bu izolyatsiya va moslashuvchanlikni birga beradi.",
    h: "Yashirin daraxt va ochiq slot",
    codes: [
      {
        title: "note.html",
        lang: "html",
        code: `<x-note tone="warning">
  <strong>Diqqat:</strong> forma saqlanmagan.
</x-note>

<script>
  class XNote extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML =
        '<style>' +
        ':host{display:block;padding:1rem;border-left:4px solid #f59e0b;background:#fffbeb}' +
        '.box{font:inherit}' +
        '</style>' +
        '<div class="box" part="box"><slot></slot></div>';
    }
  }
  customElements.define("x-note", XNote);
</script>`,
        output: "Sahifada chap tomoni to'q sariq chiziqli, och sariq fonli ogohlantirish bloki chiqadi. Ichida «Diqqat: forma saqlanmagan.» matni ko'rinadi. Matnning strong qismi qalin, qolgani oddiy shriftda. Shadow ichidagi .box uslubi tashqi CSS'ga ta'sir qilmaydi."
      },
      {
        title: "host.css",
        lang: "css",
        code: `x-note {
  margin-block: 1rem;
  border-radius: 0.5rem;
}

x-note::part(box) {
  font-size: 0.95rem;
  line-height: 1.5;
}

x-note[tone="warning"] {
  --note-accent: #f59e0b;
}`,
        output: "Har bir x-note atrofida 1rem vertikal bo'shliq va 0.5rem radius paydo bo'ladi. part=\"box\" orqali shadow ichidagi blokning shrifti 15.2px va satr balandligi 1.5 qilib sozlanadi. tone=\"warning\" atributi host elementida brend tokenini o'rnatadi; komponent ichidagi uslub bu tokendan foydalanishi mumkin."
      }
    ],
    extra: {
      type: "table",
      headers: ["Selektor", "Qayerda ishlaydi?", "Vazifasi"],
      rows: [
        ["<code>:host</code>", "Shadow ichida", "Host elementning o'zini bezash"],
        ["<code>:host([tone=\"warning\"])</code>", "Shadow ichida", "Atributga qarab host holati"],
        ["<code>::slotted(strong)</code>", "Shadow ichida", "Slotga tushgan bevosita bolalarni bezash"],
        ["<code>::part(box)</code>", "Tashqi CSS'da", "part atributi berilgan ichki elementni sozlash"],
        ["<code>--note-accent</code>", "Chegaradan o'tadi", "Custom property shadow ichiga oqadi"]
      ]
    },
    note: {
      variant: "tip",
      title: "Custom property — ko'prik",
      text: "Tashqi CSS shadow ichidagi classlarga bevosita ta'sir qila olmaydi, lekin custom property meros bo'lib o'tadi. Komponent API'sini <code>--note-accent</code> kabi tokenlar va <code>::part</code> bilan oching. Shu bilan izolyatsiyani buzmasdan moslashuvchanlik berasiz."
    },
    quiz: [
      {
        q: "Shadow root yaratish uchun qaysi metod ishlatiladi?",
        options: ["attachShadow", "createElement", "appendChild", "querySelector"],
        answer: 0,
        explain: "attachShadow({ mode: \"open\" }) elementga shadow root biriktiradi."
      },
      {
        q: "slot elementi nima qiladi?",
        options: [
          "Shadow DOM'ni butunlay o'chiradi",
          "Tashqi (light DOM) mazmunni komponent ichiga joylashtiradi",
          "Yangi CSS fayl yuklaydi",
          "Faqat matnni yashiradi"
        ],
        answer: 1,
        explain: "slot tashqi bolalarni ko'rsatish nuqtasi bo'lib, komponent mazmunini moslashuvchan qiladi."
      },
      {
        q: "::slotted() selektori qaysi elementlarga ta'sir qiladi?",
        options: [
          "Shadow ichidagi barcha elementlarga",
          "Faqat host elementiga",
          "Slotga tushgan bevosita bolalarga",
          "Butun sahifadagi barcha slotlarga"
        ],
        answer: 2,
        explain: "::slotted faqat slot orqali taqdim etilgan bevosita bolalarni tanlaydi; chuqur avlodlarga ta'sir qilmaydi."
      }
    ]
  },
  {
    id: 64,
    title: "Declarative Shadow DOM va template",
    minutes: 16,
    desc: "template elementi va shadowrootmode atributi bilan serverdan tayyor shadow DOM yuborishni o'rganasiz.",
    intro: "Oddiy Shadow DOM JavaScript bilan yaratiladi, ya'ni sahifa birinchi bo'yashda komponent hali ko'rinmasligi mumkin. <b>Declarative Shadow DOM</b> shadow daraxtini HTML ichida e'lon qilish imkonini beradi. Bu server-side rendering va tezroq birinchi ko'rinish uchun muhim.",
    h: "HTML ichida shadow root",
    codes: [
      {
        title: "rating.html",
        lang: "html",
        code: `<x-rating value="4">
  <template shadowrootmode="open">
    <style>
      :host { display: inline-flex; gap: 0.25rem; }
      .star { color: #f59e0b; font-size: 1.25rem; }
    </style>
    <span class="star" aria-hidden="true">★★★★</span>
    <span class="sr-only">5 dan 4 yulduz</span>
  </template>
</x-rating>`,
        output: "Brauzer HTML'ni tahlil qilganda x-rating ichida shadow root yaratadi. JavaScript ishga tushishidan oldin ham to'rtta yulduzcha va ekran o'quvchi uchun «5 dan 4 yulduz» matni ko'rinadi. :host uslubi shadow ichida ishlaydi, .star sariq rang oladi."
      },
      {
        title: "fallback.css",
        lang: "css",
        code: `x-rating {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 2rem;
}

x-rating:not(:defined) {
  opacity: 0.7;
}

x-rating[value="5"] {
  --rating-color: #16a34a;
}

x-rating::part(star) {
  color: var(--rating-color, #f59e0b);
}`,
        output: "Komponent hali ro'yxatdan o'tmagan bo'lsa, 70% shaffof ko'rinadi va sahifa joyida qoladi. value=\"5\" bo'lganda yulduzlar yashil rangga o'tadi. min-height tufayli komponent yuklanganda layout sakramaydi."
      }
    ],
    extra: {
      type: "ul",
      items: [
        "<code>&lt;template&gt;</code> ichidagi mazmun sahifada ko'rinmaydi va skript ishlamaydi.",
        "<code>shadowrootmode=\"open\"</code> — declarative shadow root yaratadi.",
        "<code>shadowrootmode=\"closed\"</code> ham mavjud, lekin tashqi JS shadow root'ga kira olmaydi.",
        "Declarative shadow DOM server-rendered HTML bilan darhol ishlaydi.",
        "<code>template</code> mazmunini JS'da <code>.content</code> orqali klonlash mumkin.",
        "Custom element ro'yxatdan o'tgach, mavjud shadow DOM'ni qayta ishlatish kerak."
      ]
    },
    note: {
      variant: "info",
      title: "template — inert shablon",
      text: "<code>template</code> ichidagi HTML dom daraxtiga kirmaydi: rasmlar yuklanmaydi, skriptlar ishlamaydi, stillar qo'llanmaydi. Bu uni shablon sifatida saqlash uchun ideal qiladi. JavaScript'da <code>template.content.cloneNode(true)</code> bilan nusxa olib, kerakli joyga qo'shasiz."
    },
    quiz: [
      {
        q: "template elementi ichidagi mazmun qanday holatda bo'ladi?",
        options: [
          "Darhol ko'rinadi va skriptlari ishlaydi",
          "Sahifaning eng pastida ko'rinadi",
          "Inert: ko'rinmaydi, rasm va skriptlar ishlamaydi",
          "Faqat mobil qurilmada ko'rinadi"
        ],
        answer: 2,
        explain: "template mazmuni alohida hujjat fragmentida saqlanadi va faol bo'lmaydi; uni klonlab qo'shish kerak."
      },
      {
        q: "Declarative shadow root yaratish uchun qaysi atribut ishlatiladi?",
        options: ["shadowrootmode", "shadow-mode", "data-shadow", "attachshadow"],
        answer: 0,
        explain: "template elementidagi shadowrootmode=\"open\" yoki \"closed\" brauzerga shadow root yaratishni bildiradi."
      },
      {
        q: "Declarative Shadow DOM'ning asosiy afzalligi nima?",
        options: [
          "U CSS'ni butunlay olib tashlaydi",
          "Komponent JavaScript ishga tushishidan oldin ham ko'rinadi",
          "U faqat eski brauzerlarda ishlaydi",
          "U global uslublarni kuchaytiradi"
        ],
        answer: 1,
        explain: "Shadow DOM HTML bilan birga kelgani uchun birinchi bo'yashdayoq to'g'ri ko'rinish beradi, SSR uchun qulay."
      }
    ]
  },
  {
    id: 65,
    title: "Forma bilan bog'langan custom element",
    minutes: 18,
    desc: "formAssociated, ElementInternals va setFormValue yordamida formaga qiymat qo'shadigan komponent yaratasiz.",
    intro: "Oddiy custom element forma yuborilganda o'z qiymatini avtomatik qo'shmaydi. <b>Form-associated custom element</b> esa brauzerning forma mexanizmiga to'liq ulanadi: qiymat, validatsiya va reset holatlari ishlaydi.",
    h: "Formaga qiymat qaytarish",
    codes: [
      {
        title: "rating-form.html",
        lang: "html",
        code: `<form id="review-form">
  <label for="rating">Baho</label>
  <x-rating id="rating" name="rating" value="3"></x-rating>
  <button type="submit">Yuborish</button>
</form>

<script>
  class XRating extends HTMLElement {
    static formAssociated = true;

    constructor() {
      super();
      this.internals = this.attachInternals();
      this.value = Number(this.getAttribute("value") || 3);
      this.tabIndex = 0;
      this.setAttribute("role", "slider");
      this.setAttribute("aria-valuemin", "1");
      this.setAttribute("aria-valuemax", "5");
    }

    connectedCallback() {
      this.sync();
      this.addEventListener("click", () => {
        this.value = this.value >= 5 ? 1 : this.value + 1;
        this.sync();
      });
    }

    sync() {
      this.textContent = "★".repeat(this.value) + "☆".repeat(5 - this.value);
      this.setAttribute("aria-valuenow", String(this.value));
      this.internals.setFormValue(String(this.value));
    }
  }
  customElements.define("x-rating", XRating);
</script>`,
        output: "Sahifada ★★★☆☆ ko'rinishidagi baho komponenti chiqadi. Ustiga bosilganda qiymat 4 ga oshadi va ko'rinish ★★★★☆ bo'ladi. Forma yuborilganda FormData ichida rating=3 (yoki bosilgandan keyin rating=4) bo'ladi."
      },
      {
        title: "rating.css",
        lang: "css",
        code: `x-rating {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  cursor: pointer;
  user-select: none;
}

x-rating:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}

x-rating:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`,
        output: "Komponent kamida 44px balandlikda, och chegara va 0.5rem radius bilan ko'rinadi. Klaviatura bilan fokuslanganda 3px ko'k outline chiqadi. disabled holatda komponent 50% shaffof bo'lib, kursor not-allowedga o'zgaradi."
      }
    ],
    extra: {
      type: "table",
      headers: ["API", "Vazifasi", "Muhim jihat"],
      rows: [
        ["<code>static formAssociated = true</code>", "Elementni formaga bog'laydi", "Sinf darajasida e'lon qilinadi"],
        ["<code>attachInternals()</code>", "ElementInternals obyektini beradi", "Konstruktorda chaqiriladi"],
        ["<code>setFormValue(value)</code>", "FormData uchun qiymat", "Forma yuborilganda ishlatiladi"],
        ["<code>setValidity(flags, message)</code>", "Validatsiya holati", "Xato bo'lsa forma yuborilmaydi"],
        ["<code>formResetCallback()</code>", "Forma reset qilinganda", "Boshlang'ich qiymatni tiklaydi"]
      ]
    },
    note: {
      variant: "warning",
      title: "Validatsiya va qulaylikni birga qo'shing",
      text: "<code>setFormValue</code> qiymat uzatadi, lekin xato holatini <code>setValidity</code> bilan e'lon qilish kerak. Ekran o'quvchi uchun rolni, <code>aria-valuenow</code> va klaviatura boshqaruvini ham qo'shing. Faqat sichqonchaga tayanadigan komponent qulaylik auditidan o'tmaydi."
    },
    quiz: [
      {
        q: "Custom elementni formaga bog'lash uchun qaysi statik xossa kerak?",
        options: ["formAssociated = true", "shadowRoot = true", "formEnabled = true", "internals = true"],
        answer: 0,
        explain: "static formAssociated = true elementni form-associated custom element qiladi."
      },
      {
        q: "FormData'ga qiymat qo'shish uchun qaysi metod ishlatiladi?",
        options: ["setAttribute", "setFormValue", "appendChild", "dispatchEvent"],
        answer: 1,
        explain: "ElementInternals.setFormValue forma yuborilganda ishlatiladigan qiymatni belgilaydi."
      },
      {
        q: "ElementInternals obyekti qanday olinadi?",
        options: [
          "document.createElement orqali",
          "this.shadowRoot orqali",
          "customElements.get orqali",
          "this.attachInternals() orqali"
        ],
        answer: 3,
        explain: "Konstruktor ichida this.attachInternals() chaqirilib, forma va validatsiya API'si olinadi."
      }
    ]
  },
  {
    id: 66,
    title: "Constraint Validation API chuqurroq",
    minutes: 17,
    desc: "Brauzerning o'z validatsiya mexanizmi, validity holatlari va custom xabarlarni boshqarishni o'rganasiz.",
    intro: "HTML atributlari (<code>required</code>, <code>minlength</code>, <code>pattern</code>) brauzerda bepul validatsiya beradi. Lekin xabarlarni o'zgartirish, xatoni faqat foydalanuvchi tegib ketgandan keyin ko'rsatish va murakkab qoidalarni qo'shish uchun <b>Constraint Validation API</b> kerak.",
    h: "Validity holatlarini o'qish",
    codes: [
      {
        title: "signup.html",
        lang: "html",
        code: `<form id="signup" novalidate>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required
         minlength="6" aria-describedby="email-xato">
  <p id="email-xato" aria-live="polite"></p>
  <button type="submit">Ro'yxatdan o'tish</button>
</form>

<script>
  const form = document.querySelector("#signup");
  const email = document.querySelector("#email");
  const xato = document.querySelector("#email-xato");

  email.addEventListener("blur", () => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Email formati noto'g'ri.");
    } else {
      email.setCustomValidity("");
    }
    xato.textContent = email.validationMessage;
  });

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
    }
  });
</script>`,
        output: "Maydon bo'sh qoldirilib yuborilsa, brauzer «Iltimos, bu maydonni to'ldiring.» degan native xabarni ko'rsatadi. «ali» kabi noto'g'ri email kiritilib fokus boshqa joyga o'tsa, maydon ostida «Email formati noto'g'ri.» matni chiqadi. To'g'ri email kiritilganda xato matni o'chadi."
      },
      {
        title: "form.css",
        lang: "css",
        code: `input:user-invalid {
  border-color: #b91c1c;
  outline-color: #b91c1c;
}

input:user-valid {
  border-color: #15803d;
}

input:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}

#email-xato {
  min-height: 1.25rem;
  color: #b91c1c;
  font-size: 0.875rem;
}`,
        output: "Foydalanuvchi noto'g'ri qiymat kiritib maydondan chiqqandan keyingina maydon qizil chegarali bo'ladi. To'g'ri qiymat kiritilganda chegara yashil bo'ladi. Fokusda ko'k outline ko'rinadi. Xato matni uchun joy oldindan ajratilgani uchun layout sakramaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Validity holati", "Ma'nosi", "Tipik sabab"],
      rows: [
        ["<code>valueMissing</code>", "Majburiy maydon bo'sh", "required"],
        ["<code>typeMismatch</code>", "Tur formati noto'g'ri", "type=\"email\" yoki url"],
        ["<code>patternMismatch</code>", "pattern'ga mos emas", "Telefon raqami formati"],
        ["<code>tooShort</code>", "Belgilar soni kam", "minlength"],
        ["<code>customError</code>", "setCustomValidity o'rnatilgan", "Biznes qoidasi"]
      ]
    },
    note: {
      variant: "warning",
      title: "Tugmani bloklamang",
      text: "Forma noto'g'ri bo'lsa ham yuborish tugmasini <code>disabled</code> qilib qo'ymang: foydalanuvchi nima yetishmayotganini bilmay qoladi. Yuborishga ruxsat bering, <code>checkValidity()</code> bilan tekshiring va birinchi xatoli maydonga fokus o'tkazing. <code>setCustomValidity(\"\")</code> bilan xabarni tozalashni unutmang."
    },
    quiz: [
      {
        q: "setCustomValidity(\"\") chaqirig'i nimaga olib keladi?",
        options: [
          "Maydonni butunlay o'chiradi",
          "Custom xatoni tozalaydi va maydonni yana valid qiladi",
          "Formani avtomatik yuboradi",
          "Barcha validity holatlarini true qiladi"
        ],
        answer: 1,
        explain: "Bo'sh satr customError'ni olib tashlaydi; qoida bajarilganda xabarni tozalash shu usulda qilinadi."
      },
      {
        q: ":user-invalid pseudo-classi qachon qo'llanadi?",
        options: [
          "Sahifa ochilishi bilan barcha bo'sh maydonlarga",
          "Faqat forma yuborilgandan keyin bir marta",
          "Foydalanuvchi qiymat kiritib, maydondan chiqqandan keyin",
          "Faqat CSS o'chirilganda"
        ],
        answer: 2,
        explain: ":user-invalid foydalanuvchi bilan muloqotdan keyingi noto'g'ri holatni bildiradi, darhol qizil ramka bermaydi."
      },
      {
        q: "pattern atributidagi regex qanday moslashtiriladi?",
        options: [
          "Butun qiymatga to'liq mos kelishi kerak (implicit anchoring)",
          "Faqat qiymat boshiga mos keladi",
          "Faqat birinchi belgini tekshiradi",
          "Regex sifatida emas, oddiy matn sifatida"
        ],
        answer: 0,
        explain: "HTML pattern butun qiymatga mos kelishini talab qiladi; ^ va $ yozish shart emas."
      }
    ]
  },
  {
    id: 67,
    title: "FormData va fayl yuborish amaliyoti",
    minutes: 16,
    desc: "FormData bilan maydonlarni yig'ish, fayl qo'shish va fetch orqali multipart so'rov yuborishni o'rganasiz.",
    intro: "Forma ma'lumotlarini qo'lda yig'ish xatolarga to'la. <b>FormData</b> barcha maydonlarni, jumladan fayllarni ham bitta obyektga yig'adi va <code>fetch</code> bilan to'g'ridan-to'g'ri yuborish mumkin. Bu zamonaviy formalar uchun eng qulay yo'l.",
    h: "Maydonlar va faylni birlashtirish",
    codes: [
      {
        title: "profil.html",
        lang: "html",
        code: `<form id="profil" enctype="multipart/form-data">
  <label for="ism">Ism</label>
  <input id="ism" name="ism" value="Aziza" required>

  <label for="avatar">Avatar</label>
  <input id="avatar" name="avatar" type="file" accept="image/png,image/jpeg">

  <button type="submit">Saqlash</button>
  <p id="holat" role="status"></p>
</form>`,
        output: "Formada ism maydoni «Aziza» qiymati bilan va fayl tanlash maydoni ko'rinadi. Fayl tanlanmaguncha avatar maydoni bo'sh turadi. CSS'siz elementlar ustma-ust joylashadi."
      },
      {
        title: "profil.js",
        lang: "html",
        code: `<script>
  const form = document.querySelector("#profil");
  const holat = document.querySelector("#holat");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    data.append("manba", "profil-sahifasi");

    console.log(data.get("ism"));
    console.log(data.get("manba"));
    console.log(data.get("avatar").name);

    holat.textContent = "Yuborilmoqda...";
    const javob = await fetch("/api/profil", {
      method: "POST",
      body: data
    });
    holat.textContent = javob.ok ? "Saqlandi" : "Xato yuz berdi";
  });
</script>`,
        output: "Ism «Aziza», fayl «avatar.png» bo'lsa, konsolga avval Aziza, keyin profil-sahifasi, keyin avatar.png chiqadi. Server 201 qaytarsa, holat matni «Saqlandi» bo'ladi. So'rov multipart/form-data sifatida yuboriladi va chegara (boundary) brauzer tomonidan avtomatik qo'shiladi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Metod", "Vazifasi", "Natija"],
      rows: [
        ["<code>get(name)</code>", "Birinchi qiymatni olish", "String yoki File"],
        ["<code>getAll(name)</code>", "Barcha qiymatlarni olish", "Massiv"],
        ["<code>append(name, value)</code>", "Yangi qiymat qo'shish", "Maydon qo'shiladi"],
        ["<code>set(name, value)</code>", "Qiymatni almashtirish", "Barcha eski qiymatlar o'chadi"],
        ["<code>delete(name)</code>", "Maydonni olib tashlash", "Maydon yuborilmaydi"]
      ]
    },
    note: {
      variant: "warning",
      title: "Content-Type'ni qo'lda yozmang",
      text: "<code>fetch</code> ga <code>FormData</code> berilganda brauzer <code>multipart/form-data; boundary=...</code> sarlavhasini o'zi qo'shadi. Agar <code>Content-Type</code>ni qo'lda bersangiz, boundary yo'qoladi va server ma'lumotni o'qiy olmaydi. Faqat <code>body: data</code> yozing."
    },
    quiz: [
      {
        q: "Formadagi barcha maydonlarni yig'ish uchun qaysi yozuv ishlatiladi?",
        options: ["new FormData(form)", "JSON.stringify(form)", "form.serialize()", "Object.fromEntries(form)"],
        answer: 0,
        explain: "FormData konstruktori forma elementini qabul qilib, nomlangan maydonlarni avtomatik yig'adi."
      },
      {
        q: "FormData'ga yangi maydon qo'shish uchun qaysi metod ishlatiladi?",
        options: ["push()", "add()", "append()", "insert()"],
        answer: 2,
        explain: "append(name, value) mavjud maydonni saqlab, yangi qiymat qo'shadi; set esa almashtiradi."
      },
      {
        q: "Fayl yuborish uchun formada qaysi enctype kerak?",
        options: ["text/plain", "application/json", "application/x-www-form-urlencoded", "multipart/form-data"],
        answer: 3,
        explain: "multipart/form-data fayllarni maydonlar bilan birga yuborish uchun standart kodlash turi."
      }
    ]
  },
  {
    id: 68,
    title: "Mobil klaviatura va autofill uchun forma",
    minutes: 15,
    desc: "autocomplete, inputmode va enterkeyhint bilan mobil foydalanuvchiga qulay kiritish tajribasini yaratasiz.",
    intro: "Mobil qurilmada forma to'ldirish desktopdagidan ancha qiyin. To'g'ri <b>inputmode</b> raqamli klaviaturani, <b>autocomplete</b> brauzer xotirasidan to'ldirishni, <b>enterkeyhint</b> esa klaviaturadagi tugma yozuvini boshqaradi. Bu mayda sozlamalar konversiyani sezilarli oshiradi.",
    h: "Klaviatura va avtoto'ldirishni yo'naltirish",
    codes: [
      {
        title: "aloqa.html",
        lang: "html",
        code: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email"
         autocomplete="email" inputmode="email" enterkeyhint="next">

  <label for="tel">Telefon</label>
  <input id="tel" name="tel" type="tel"
         autocomplete="tel" inputmode="tel" enterkeyhint="next">

  <label for="kod">Tasdiqlash kodi</label>
  <input id="kod" name="kod" type="text" maxlength="6"
         autocomplete="one-time-code" inputmode="numeric"
         pattern="[0-9]{6}" enterkeyhint="done">
</form>`,
        output: "Email maydonida @ belgisi bor klaviatura, telefon maydonida raqamli klaviatura ochiladi. Kod maydoni 6 ta raqamdan iborat bo'lib, SMS kodini brauzer avtomatik taklif qilishi mumkin. Klaviaturadagi «Keyingi» tugmasi keyingi maydonga, oxirgisi «Tayyor» tugmasi formani yopishga yordam beradi."
      },
      {
        title: "touch.css",
        lang: "css",
        code: `.field {
  display: grid;
  gap: 0.35rem;
  margin-block-end: 1rem;
}

.field input {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
}

.field input:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}`,
        output: "Har bir maydon kengligi 100%, balandligi kamida 44px bo'ladi. Shrift 16px bo'lgani uchun iOS Safari fokusda sahifani avtomatik kattalashtirmaydi. Fokusda ko'k outline chiqadi. Maydonlar orasida 1rem bo'shliq qoladi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Atribut", "Qiymat", "Qachon ishlatiladi?"],
      rows: [
        ["<code>autocomplete</code>", "email", "Email manzili"],
        ["<code>autocomplete</code>", "current-password", "Mavjud parol"],
        ["<code>autocomplete</code>", "new-password", "Yangi parol yaratish"],
        ["<code>autocomplete</code>", "one-time-code", "SMS tasdiqlash kodi"],
        ["<code>inputmode</code>", "numeric", "Faqat raqamlar, lekin type text"],
        ["<code>enterkeyhint</code>", "next / done / search", "Klaviatura tugmasi yozuvi"]
      ]
    },
    note: {
      variant: "tip",
      title: "type=\"number\" har doim ham to'g'ri emas",
      text: "Telefon, karta raqami yoki tasdiqlash kodi uchun <code>type=\"number\"</code> ishlatmang: u yetakchi nollarni yo'qotadi, strelka tugmalarini ko'rsatadi va ba'zi brauzerlarda uzun raqamlarni noto'g'ri ko'rsatadi. <code>type=\"text\" inputmode=\"numeric\"</code> odatda xavfsizroq."
    },
    quiz: [
      {
        q: "SMS kodini brauzer avtomatik taklif qilishi uchun qaysi autocomplete qiymati ishlatiladi?",
        options: ["sms-code", "one-time-code", "verification", "otp"],
        answer: 1,
        explain: "one-time-code bir martalik kodlar uchun standart autocomplete tokenidir."
      },
      {
        q: "Raqamli klaviaturani ochish, lekin qiymatni matn sifatida saqlash uchun qaysi yozuv mos?",
        options: [
          "type=\"number\"",
          "type=\"tel\" autocomplete=\"off\"",
          "type=\"text\" inputmode=\"numeric\"",
          "type=\"range\""
        ],
        answer: 2,
        explain: "inputmode faqat klaviatura turini boshqaradi; type text qiymatni matn sifatida saqlaydi va yetakchi nollarni yo'qotmaydi."
      },
      {
        q: "Mobil Safari fokusda sahifani kattalashtirmasligi uchun input shrifti qancha bo'lishi kerak?",
        options: ["Kamida 16px", "Kamida 12px", "Aynan 14px", "Ahamiyati yo'q"],
        answer: 0,
        explain: "iOS Safari 16px dan kichik shriftli maydonga fokuslanganda sahifani avtomatik zoom qiladi."
      }
    ]
  },
  {
    id: 69,
    title: "Xatolarni qulay e'lon qilish: ARIA va live region",
    minutes: 16,
    desc: "Forma xatolarini ekran o'quvchiga to'g'ri yetkazish va rangdan tashqari belgilar bilan ko'rsatishni o'rganasiz.",
    intro: "Xato faqat qizil chegara bilan ko'rsatilsa, rangni farqlay olmaydigan yoki ekran o'quvchi ishlatadigan foydalanuvchi uni sezmasligi mumkin. Xatoni <b>matn</b>, <b>ARIA bog'lanish</b> va <b>live region</b> bilan e'lon qilish kerak.",
    h: "Xatoni maydon bilan bog'lash",
    codes: [
      {
        title: "parol.html",
        lang: "html",
        code: `<form novalidate>
  <label for="parol">Yangi parol</label>
  <input id="parol" name="parol" type="password"
         required minlength="8" aria-describedby="parol-yordam parol-xato"
         aria-invalid="false">
  <p id="parol-yordam">Kamida 8 belgi, bitta raqam.</p>
  <p id="parol-xato" class="error" role="alert" hidden>
    Parol kamida 8 belgidan iborat bo'lishi kerak.
  </p>
  <button type="submit">Saqlash</button>
</form>`,
        output: "Maydon ostida doimiy yordam matni ko'rinadi. Xato holatida qo'shimcha qizil matn paydo bo'ladi va ekran o'quvchi uni darhol o'qiydi. Maydon fokuslanganda ikkala tavsif ham o'qiladi."
      },
      {
        title: "error.css",
        lang: "css",
        code: `.error {
  display: flex;
  gap: 0.4rem;
  color: #b91c1c;
  font-size: 0.875rem;
}

.error::before {
  content: "!";
  flex: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #b91c1c;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
}

input[aria-invalid="true"] {
  border: 2px solid #b91c1c;
  background: #fef2f2;
}

input:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}`,
        output: "Xato matni qizil rangda, oldida oq undov belgisi bo'lgan qizil doira bilan chiqadi. aria-invalid=\"true\" bo'lgan maydon 2px qizil chegara va juda och qizil fon oladi. Fokusda ko'k outline saqlanadi, shuning uchun fokus joyi yo'qolmaydi."
      }
    ],
    extra: {
      type: "table",
      headers: ["Atribut", "Vazifasi", "Muhim jihat"],
      rows: [
        ["<code>aria-invalid=\"true\"</code>", "Maydon xatoli ekanini bildiradi", "Xato tuzatilganda false qilinadi"],
        ["<code>aria-describedby</code>", "Maydonni izoh va xato matni bilan bog'laydi", "Bir nechta id probel bilan"],
        ["<code>role=\"alert\"</code>", "Xatoni darhol e'lon qiladi", "Sahifa yuklanishida bo'sh bo'lsin"],
        ["<code>aria-live=\"polite\"</code>", "Xushmuomala e'lon", "Hozirgi gap tugagach o'qiladi"],
        ["<code>hidden</code>", "Xato blokini yashirish", "Ko'rsatishda olib tashlanadi"]
      ]
    },
    note: {
      variant: "tip",
      title: "Birinchi xatoga fokus bering",
      text: "Forma yuborilganda birinchi xatoli maydonga <code>focus()</code> qiling. Foydalanuvchi sahifaning yuqorisidan xato qidirib yurmaydi. Xato matnini maydon yonida, <code>aria-describedby</code> bilan bog'langan holda joylashtiring va muvaffaqiyatli holatda xabarni o'chiring."
    },
    quiz: [
      {
        q: "Maydonni bir nechta izoh matni bilan bog'lash uchun aria-describedby qiymati qanday yoziladi?",
        options: [
          "Faqat bitta id",
          "Id'lar vergul bilan",
          "Id'lar probel bilan",
          "Id'lar nuqta bilan"
        ],
        answer: 2,
        explain: "aria-describedby bir nechta id'ni probel bilan ajratib qabul qiladi."
      },
      {
        q: "aria-invalid=\"true\" nimani bildiradi?",
        options: [
          "Maydon o'chirilgan",
          "Maydon xatoli holatda",
          "Maydon faqat o'qish uchun",
          "Maydon avtomatik to'ldiriladi"
        ],
        answer: 1,
        explain: "aria-invalid maydon qiymati validatsiyadan o'tmaganini ekran o'quvchiga bildiradi."
      },
      {
        q: "role=\"alert\" qanday e'lon qiladi?",
        options: [
          "Jimgina, foydalanuvchi so'raganda",
          "Faqat forma yuborilganda",
          "Darhol va kechiktirmasdan",
          "Faqat sichqoncha ustiga kelganda"
        ],
        answer: 2,
        explain: "alert roli implicitly assertive live region bo'lib, mazmun paydo bo'lishi bilan o'qiladi."
      }
    ]
  }
];
