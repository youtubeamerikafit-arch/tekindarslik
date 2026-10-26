/* HTML & CSS course data (50 lessons: 49 dars + yakuniy imtihon) */
(function () {
  "use strict";
  window.NOLDAN_COURSES = window.NOLDAN_COURSES || {};

  window.NOLDAN_COURSES.htmlcss = {
    id: "htmlcss",
    title: "HTML & CSS",
    logoClass: "course-logo--html",
    logoText: "</>",
    level: "Boshlovchi",
    hours: "~20 soat",
    testCount: 147,
    lang: "html",
    interactive: "none",
    heroTitle: "HTML & CSS: veb-sahifani noldan qurish",
    heroDesc:
      "49 darsda semantik HTML, qulaylik, media, SEO va zamonaviy CSS'ni o'rganing. 147 test, amaliy portfolio loyihasi va 12-savollik yakuniy imtihon bilan bilimingizni mustahkamlang.",
    metaDescription:
      "HTML & CSS kursi: 49 dars, 147 test, amaliy portfolio loyihasi va 12-savollik yakuniy imtihon. Zamonaviy veb-sahifa yaratishni o'zbek tilida o'rganing.",
    modules: [
      { title: "HTML asoslari", lessons: [1, 2, 3] },
      { title: "Tuzilma va formalar", lessons: [4, 5, 6] },
      { title: "CSS asoslari, joylashuv va dizayn", lessons: [7, 8, 9, 10, 11, 12] },
      { title: "Semantika va qulaylik", lessons: [13, 14, 15] },
      { title: "Media, SEO va SVG", lessons: [16, 17, 18, 19] },
      { title: "CSS tizimli asoslari", lessons: [20, 21, 22, 23, 24] },
      { title: "Harakat va moslashuv", lessons: [25, 26, 27, 28, 29, 30] },
      { title: "Zamonaviy CSS", lessons: [31, 32, 33, 34, 35] },
      { title: "Formalar, arxitektura va vositalar", lessons: [36, 37, 38, 39, 40] },
      { title: "Sifat va nashr", lessons: [41, 42, 43] },
      { title: "Portfolio loyihasi", lessons: [44, 45, 46, 47, 48, 49] },
      { title: "Yakuniy imtihon", lessons: [50] },
    ],
    lessons: [
{
        id: 1,
        title: "HTML nima va sahifa qanday tuziladi?",
        minutes: 12,
        blocks: [
          {
            type: "p",
            html: "HTML (<b>HyperText Markup Language</b>) — veb-sahifaning tuzilishini belgilovchi til. U teglar yordamida sarlavha, matn, rasm va tugmalarni joylashtiradi. HTML dasturlash tili emas, <b>belgilash tili</b>: u mazmunga ma'no beradi.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mening birinchi sahifam</title>
  </head>
  <body>
    <h1>Salom, dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
  </body>
</html>`,
            outputLabel: "Natija",
            output: "Sahifada “Salom, dunyo!” sarlavhasi va uning ostida “Bu mening birinchi veb-sahifam.” matni chiqadi.",
            runnable: true,
          },
          {
            type: "code",
            title: "izoh.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Izohlar va bo'sh teglar</title>
</head>
<body>
  <!-- Bu izoh foydalanuvchiga ko'rinmaydi -->
  <h1>Bugungi reja</h1>
  <p>HTML tuzilmasini o'rganish.</p>
  <br>
  <p>Keyingi qadam — CSS.</p>
  <hr>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Sahifada “Bugungi reja” sarlavhasi, “HTML tuzilmasini o'rganish.” matni, bo'sh qatordan keyin “Keyingi qadam — CSS.” matni va gorizontal chiziq chiqadi. HTML izohi esa ko'rinmaydi.",
          },
          {
            type: "table",
            head: ["Qism", "Vazifasi"],
            rows: [
              ["<code>&lt;!DOCTYPE html&gt;</code>", "HTML5 hujjati ekanini bildiradi"],
              ["<code>&lt;html&gt;</code>", "Butun hujjatni o'raydi"],
              ["<code>&lt;head&gt;</code>", "Sarlavha, kodlash va uslublar"],
              ["<code>&lt;body&gt;</code>", "Foydalanuvchi ko'radigan qism"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Teg va atribut",
            html: "Teg — burchakli qavs ichidagi nom: <code>&lt;h1&gt;</code>. Atribut qo'shimcha sozlama: <code>&lt;html lang=\"uz\"&gt;</code> da <code>lang</code> — atribut, <code>uz</code> — qiymat. Ko'p teglar juftlikda yoziladi: ochiluvchi va yopiluvchi.",
          },
        ],
        quiz: [
          {
            q: "HTML nimani belgilaydi?",
            options: ["Sahifa rangini", "Server ishini", "Sahifa tuzilishini", "Ma'lumotlar bazasini"],
            answer: 2,
            explain: "HTML mazmun va tuzilma uchun javob beradi; rang va joylashuv CSS ishi.",
          },
          {
            q: "Foydalanuvchi ko'radigan barcha elementlar qaysi teg ichida joylashadi?",
            options: ["body", "head", "title", "meta"],
            answer: 0,
            explain: "body — sahifaning ko'rinadigan qismi.",
          },
          {
            q: "img tegining rasm manzilini bildiruvchi atributi qaysi?",
            options: ["href", "link", "path", "src"],
            answer: 3,
            explain: "src rasm manzilini, alt esa muqobil matnni bildiradi.",
          },
        ],
      },
      {
        id: 2,
        title: "Matn teglari: sarlavha, paragraf va ta'kid",
        minutes: 13,
        blocks: [
          {
            type: "p",
            html: "Matnni to'g'ri teglar bilan yozish sahifani o'qishli qiladi. Sarlavhalar <code>h1</code> dan <code>h6</code> gacha ketadi: <code>h1</code> eng muhim, <code>h6</code> eng kichik.",
          },
          {
            type: "code",
            title: "matn.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Matn</title>
</head>
<body>
  <h1>Dasturlashni noldan</h1>
  <h2>Birinchi qadam</h2>
  <p>Bu <strong>muhim</strong> va bu <em>ta'kidlangan</em> matn.</p>
  <p>Yangi abzats uchun yangi <code>&lt;p&gt;</code> tegi kerak.</p>
  <hr>
  <p>Chiziqdan keyingi matn.</p>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Katta sarlavha, kichik sarlavha, qalin va qiyshiq matnli abzatslar hamda gorizontal chiziq chiqadi.",
            runnable: true,
          },
          {
            type: "code",
            title: "matn-semantikasi.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Matn semantikasi</title></head>
<body>
  <h2>Muhim eslatma</h2>
  <p><mark>Diqqat:</mark> kodni saqlashni unutmang.</p>
  <blockquote>
    Har bir katta loyiha kichik qadamdan boshlanadi.
  </blockquote>
  <p>Buyruq: <code>npm run dev</code></p>
  <pre><code>body {
  margin: 0;
}</code></pre>
</body>
</html>`,
            outputLabel: "Natija",
            output: "“Muhim eslatma” sarlavhasi, sariq fonli “Diqqat:” so'zi, chapdan chekinilgan iqtibos, monoshiriftli npm buyrug'i va bo'shliqlari saqlangan ikki qatorli CSS kodi chiqadi.",
          },
          {
            type: "table",
            head: ["Teg", "Ma'nosi"],
            rows: [
              ["<code>&lt;h1&gt;–&lt;h6&gt;</code>", "Sarlavhalar"],
              ["<code>&lt;p&gt;</code>", "Abzats (paragraf)"],
              ["<code>&lt;strong&gt;</code>", "Muhim matn (qalin)"],
              ["<code>&lt;em&gt;</code>", "Ta'kid (qiyshiq)"],
              ["<code>&lt;br&gt;</code>", "Yangi qator"],
              ["<code>&lt;hr&gt;</code>", "Gorizontal chiziq"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Sarlavhalarni bezash uchun ishlatmang",
            html: "Kichikroq matn kerak bo'lsa, <code>h6</code> tanlamang — bu mazmun tuzilishini buzadi. Ko'rinishni CSS bilan boshqaring, HTML esa ma'no bersin.",
          },
        ],
        quiz: [
          {
            q: "Eng muhim sarlavha qaysi teg bilan yoziladi?",
            options: ["h6", "h1", "p", "title"],
            answer: 1,
            explain: "h1 eng yuqori darajadagi sarlavha hisoblanadi.",
          },
          {
            q: "Matnni qalin va muhim qilish uchun qaysi teg ishlatiladi?",
            options: ["em", "b1", "strong", "bold"],
            answer: 2,
            explain: "strong muhim matnni bildiradi va odatda qalin ko'rinadi. em esa ta'kid (qiyshiq).",
          },
          {
            q: "Yangi abzats boshlash uchun qaysi teg ishlatiladi?",
            options: ["p", "br", "hr", "div"],
            answer: 0,
            explain: "p yangi paragraf yaratadi; br faqat qatorni ko'chiradi.",
          },
        ],
      },
      {
        id: 3,
        title: "Havolalar va rasmlar",
        minutes: 14,
        blocks: [
          {
            type: "p",
            html: "Havola boshqa sahifaga olib boradi, rasm esa sahifani jonlantiradi. Ikkalasi ham vebning asosiy qurilish bloklari.",
          },
          {
            type: "code",
            title: "havola.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Havola va rasm</title></head>
<body>
  <h1>Foydali manbalar</h1>
  <p>
    <a href="https://developer.mozilla.org" target="_blank" rel="noopener">
      MDN hujjatlarini yangi oynada ochish
    </a>
  </p>
  <p>
    <a href="#past">Pastga o'tish</a>
  </p>
  <img src="https://picsum.photos/id/180/320/180"
       alt="Yog'och stol ustidagi noutbuk va yozuv daftari"
       width="320" height="180">
  <h2 id="past">Pastki qism</h2>
  <p>Havola shu sarlavhaga olib keldi.</p>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Havola yangi oynada ochiladi, ichki havola sahifaning pastki qismiga o'tadi, rasm esa alt matni bilan chiqadi.",
            runnable: true,
          },
          {
            type: "ul",
            items: [
              "<code>href</code> — havola manzili.",
              "<code>target=\"_blank\"</code> — yangi oynada ochish.",
              "<code>#id</code> — shu sahifadagi elementga o'tish.",
              "<code>src</code> — rasm manzili.",
              "<code>alt</code> — rasm yuklanmasa yoki ekran o'quvchi uchun matn.",
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "alt atributini tashlab ketmang",
            html: "Rasm yuklanmasa yoki foydalanuvchi ekran o'quvchidan foydalansa, <code>alt</code> matni mazmunni tushuntiradi. Bu ham qulaylik, ham SEO uchun muhim.",
          },
          {
            type: "code",
            title: "ichki-havola.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Ichki havola</title></head>
<body>
  <nav>
    <a href="#haqida">Haqida</a> |
    <a href="#aloqa">Aloqa</a>
  </nav>
  <section id="haqida">
    <h2>Haqida</h2>
    <p>Bu sahifa haqida ma'lumot.</p>
  </section>
  <section id="aloqa">
    <h2>Aloqa</h2>
    <p>Biz bilan bog'lanish uchun forma.</p>
  </section>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Navbar havolalari bosilganda sahifa tegishli bo'limga silliq o'tadi.",
            runnable: true,
          },
        ],
        quiz: [
          {
            q: "Havola manzilini qaysi atribut belgilaydi?",
            options: ["src", "link", "url", "href"],
            answer: 3,
            explain: "a tegi uchun manzil href atributida yoziladi.",
          },
          {
            q: "Rasm manzili qaysi atributda beriladi?",
            options: ["href", "src", "alt", "path"],
            answer: 1,
            explain: "img uchun rasm manzili src atributida bo'ladi.",
          },
          {
            q: "target=\"_blank\" nima qiladi?",
            options: ["Rasmni yashiradi", "Sahifani yangilaydi", "Havolani yangi oynada ochadi", "Matnni qalin qiladi"],
            answer: 2,
            explain: "_blank havolani yangi oyna yoki tabda ochadi.",
          },
        ],
      },
      {
        id: 4,
        title: "Ro'yxatlar va jadvallar",
        minutes: 14,
        blocks: [
          {
            type: "p",
            html: "Ro'yxatlar ketma-ket elementlarni, jadvallar esa qator va ustunli ma'lumotlarni ko'rsatadi. Ikkalasi ham ma'lumotni tartibli yetkazishda ishlatiladi.",
          },
          {
            type: "code",
            title: "royxat.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Ro'yxatlar</title></head>
<body>
  <h2>O'rganish rejasi</h2>
  <ol>
    <li>HTML asoslari</li>
    <li>CSS va dizayn</li>
    <li>JavaScript</li>
  </ol>

  <h2>Kerakli vositalar</h2>
  <ul>
    <li>Brauzer</li>
    <li>Kod muharriri</li>
    <li>Qiziqish</li>
  </ul>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Birinchi ro'yxat 1, 2, 3 raqamlari bilan, ikkinchisi nuqtalar bilan chiqadi.",
            runnable: true,
          },
          {
            type: "note",
            variant: "info",
            title: "ol va ul farqi",
            html: "<code>&lt;ol&gt;</code> — tartiblangan ro'yxat (raqamlar), <code>&lt;ul&gt;</code> — tartibsiz ro'yxat (nuqtalar). Ikkalasida elementlar <code>&lt;li&gt;</code> bilan yoziladi.",
          },
          {
            type: "code",
            title: "jadval.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Jadval</title></head>
<body>
  <table border="1" cellpadding="8">
    <caption>Kurs natijalari</caption>
    <thead>
      <tr>
        <th>Ism</th>
        <th>Ball</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Aziza</td>
        <td>92</td>
      </tr>
      <tr>
        <td>Bek</td>
        <td>78</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Ikki ustunli jadval: sarlavha qatori qalin, ostida Aziza — 92 va Bek — 78 qatorlari.",
            runnable: true,
          },
          {
            type: "note",
            variant: "tip",
            title: "Jadvalni bezash",
            html: "Jadval chegaralari va bo'shliqlarini CSS bilan boshqarish to'g'riroq. <code>border</code> va <code>cellpadding</code> atributlari eski usul hisoblanadi, lekin o'rganish uchun qulay.",
          },
        ],
        quiz: [
          {
            q: "Tartiblangan ro'yxat qaysi teg bilan yaratiladi?",
            options: ["ol", "ul", "dl", "li"],
            answer: 0,
            explain: "ol elementlarni 1, 2, 3 tartibida raqamlaydi.",
          },
          {
            q: "Ro'yxatning har bir elementi qaysi teg ichida yoziladi?",
            options: ["item", "row", "p", "li"],
            answer: 3,
            explain: "li ro'yxat elementini bildiradi.",
          },
          {
            q: "Jadval ustun sarlavhalari uchun qaysi teg ishlatiladi?",
            options: ["td", "th", "header", "caption"],
            answer: 1,
            explain: "th jadval sarlavha katagi; td oddiy ma'lumot katagi.",
          },
        ],
      },
      {
        id: 5,
        title: "Formalar va kiritish maydonlari",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Forma foydalanuvchidan ma'lumot oladi: ism, email, parol yoki tanlov. Har bir maydon <code>label</code> bilan bog'lansa, foydalanish ancha qulay bo'ladi.",
          },
          {
            type: "code",
            title: "forma.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Ro'yxatdan o'tish</title>
  <style>
    body { font-family: sans-serif; max-width: 360px; margin: 40px auto; }
    label { display: block; margin-top: 14px; font-weight: bold; }
    input, select, textarea {
      width: 100%; padding: 9px; margin-top: 5px;
      border: 1px solid #cbd5e1; border-radius: 8px;
    }
    button {
      margin-top: 16px; padding: 10px 16px; border: 0;
      border-radius: 8px; background: #5b4df6; color: #fff;
    }
  </style>
</head>
<body>
  <h1>Ro'yxatdan o'tish</h1>
  <form>
    <label for="ism">Ismingiz</label>
    <input id="ism" name="ism" type="text" placeholder="Aziza" required>

    <label for="email">Email</label>
    <input id="email" name="email" type="email" placeholder="aziza@example.com" required>

    <label for="parol">Parol</label>
    <input id="parol" name="parol" type="password" minlength="6" required>

    <label for="kurs">Kurs</label>
    <select id="kurs" name="kurs">
      <option>Python</option>
      <option>JavaScript</option>
      <option>HTML & CSS</option>
    </select>

    <label for="izoh">Izoh</label>
    <textarea id="izoh" name="izoh" rows="3" placeholder="Qo'shimcha izoh"></textarea>

    <button type="submit">Yuborish</button>
  </form>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Chiroyli forma: matn, email, parol, tanlash ro'yxati va ko'p qatorli izoh maydoni. Bo'sh majburiy maydon bilan yuborilmaydi.",
            runnable: true,
          },
          {
            type: "code",
            title: "qoshimcha.html",
            code: `<form>
  <fieldset>
    <legend>Qo'shimcha ma'lumot</legend>

    <p>Qiziqishlaringiz:</p>
    <label><input type="checkbox" name="qiziqish" value="html" checked> HTML</label>
    <label><input type="checkbox" name="qiziqish" value="css"> CSS</label>

    <label for="daraja">Tajriba darajasi</label>
    <input id="daraja" name="daraja" type="range" min="1" max="5" value="3">

    <label for="sana">Boshlash sanasi</label>
    <input id="sana" name="sana" type="date">

    <button type="submit">Saqlash</button>
  </fieldset>
</form>`,
            outputLabel: "Natija",
            output: "“Qo'shimcha ma'lumot” sarlavhali guruhda HTML belgilangan, CSS belgilanmagan ikkita checkbox, 1–5 oralig'ida o'rtada turgan slayder, sana tanlash maydoni va “Saqlash” tugmasi chiqadi.",
          },
          {
            type: "table",
            head: ["Atribut", "Vazifasi"],
            rows: [
              ["<code>type</code>", "Maydon turi: text, email, password, checkbox va h.k."],
              ["<code>required</code>", "Maydonni to'ldirish majburiy"],
              ["<code>placeholder</code>", "Bo'sh maydonda ko'rinadigan maslahat"],
              ["<code>minlength</code>", "Minimal belgilar soni"],
              ["<code>name</code>", "Yuboriladigan ma'lumot nomi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "label for bog'lanishi",
            html: "<code>label for=\"email\"</code> va <code>input id=\"email\"</code> mos bo'lishi kerak. Shunda izohga bosilganda maydon tanlanadi va ekran o'quvchi ularni bog'langan deb biladi.",
          },
        ],
        quiz: [
          {
            q: "Parol maydoni uchun qaysi type ishlatiladi?",
            options: ["text", "secret", "password", "hidden"],
            answer: 2,
            explain: "type=\"password\" kiritilgan belgilarni yashiradi.",
          },
          {
            q: "label va input qanday bog'lanadi?",
            options: ["label for = input id", "label name = input name", "label class = input class", "Hech qanday"],
            answer: 0,
            explain: "label for atributi input id bilan bir xil bo'lishi kerak.",
          },
          {
            q: "Maydonni to'ldirish majburiy qilish uchun qaysi atribut ishlatiladi?",
            options: ["needed", "must", "validate", "required"],
            answer: 3,
            explain: "required brauzerga maydon bo'sh bo'lsa formani yubormaslikni bildiradi.",
          },
        ],
      },
      {
        id: 6,
        title: "Semantik HTML va qulaylik",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Semantik teglar sahifa qismlarini ma'noviy belgilaydi: <code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>article</code>, <code>footer</code>. Bu qidiruv tizimlari, ekran o'quvchilar va boshqa dasturchilar uchun tushunarliroq.",
          },
          {
            type: "code",
            title: "semantik.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Semantik sahifa</title></head>
<body>
  <header>
    <h1>Noldan</h1>
    <nav aria-label="Asosiy menyu">
      <a href="#kurslar">Kurslar</a>
      <a href="#aloqa">Aloqa</a>
    </nav>
  </header>

  <main>
    <section id="kurslar">
      <h2>Kurslar</h2>
      <article>
        <h3>Python</h3>
        <p>Noldan birinchi loyihagacha.</p>
      </article>
      <article>
        <h3>JavaScript</h3>
        <p>Brauzerda jonli kod.</p>
      </article>
    </section>
  </main>

  <footer id="aloqa">
    <p>© 2026 Noldan</p>
  </footer>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Sahifa sarlavha, menyu, asosiy qism va aloqa qismiga bo'linadi. Ko'rinishi oddiy, lekin tuzilishi ma'noli.",
            runnable: true,
          },
          {
            type: "code",
            title: "maqola.html",
            code: `<article>
  <header>
    <h2>Kurs yangilandi</h2>
    <p><time datetime="2026-10-23">23-oktabr, 2026</time></p>
  </header>

  <p>Yangi amaliy loyihalar qo'shildi.</p>

  <footer>
    <address>
      Savollar: <a href="mailto:info@noldan.uz">info@noldan.uz</a>
    </address>
  </footer>
</article>`,
            outputLabel: "Natija",
            output: "Maqola sarlavhasi va “23-oktabr, 2026” sanasi, “Yangi amaliy loyihalar qo'shildi.” matni hamda “Savollar: info@noldan.uz” manzili chiqadi. Ekran o'quvchi sanani va aloqa manzilini semantik element sifatida taniydi.",
          },
          {
            type: "note",
            variant: "info",
            title: "div va semantik teg farqi",
            html: "<code>&lt;div&gt;</code> neytral konteyner. Agar qism sarlavha, menyu yoki maqola bo'lsa, mos semantik tegni tanlang. Bu kodni o'qish va accessibility uchun foydali.",
          },
          {
            type: "ul",
            items: [
              "<code>header</code> — sahifa yoki bo'lim boshi.",
              "<code>nav</code> — navigatsiya havolalari.",
              "<code>main</code> — sahifaning asosiy mazmuni (bitta bo'ladi).",
              "<code>article</code> — mustaqil maqola yoki karta.",
              "<code>footer</code> — pastki qism.",
              "<code>aria-label</code> — ekran o'quvchi uchun nom.",
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Alt matni va kontrast",
            html: "Rasmlarga <code>alt</code>, tugmalarga tushunarli matn bering. Matn va fon ranglari orasidagi kontrast yetarli bo'lishi kerak — bu hamma uchun qulaylik.",
          },
        ],
        quiz: [
          {
            q: "Sahifaning asosiy mazmuni qaysi teg ichida joylashadi?",
            options: ["div", "main", "body", "section"],
            answer: 1,
            explain: "main sahifaning asosiy, takrorlanmaydigan mazmunini bildiradi.",
          },
          {
            q: "Navigatsiya havolalari uchun qaysi semantik teg mos?",
            options: ["menu", "links", "nav", "header"],
            answer: 2,
            explain: "nav navigatsiya uchun mo'ljallangan semantik teg.",
          },
          {
            q: "Semantik HTML kimga foyda qiladi?",
            options: ["Qidiruv tizimi va ekran o'quvchilarga", "Faqat dizaynerga", "Faqat serverga", "Hech kimga"],
            answer: 0,
            explain: "Semantik tuzilma qidiruv va accessibility vositalariga sahifani tushunishga yordam beradi.",
          },
        ],
      },
      {
        id: 7,
        title: "CSS asoslari: selektorlar va uslublar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "CSS (<b>Cascading Style Sheets</b>) sahifaning ko'rinishini belgilaydi: rang, shrift, o'lcham va joylashuv. Qoida selektor, xossa va qiymatdan iborat.",
          },
          {
            type: "code",
            title: "style.css",
            lang: "css",
            code: `body {
  font-family: Arial, sans-serif;
  background: #f4f1ff;
  color: #1f2937;
  max-width: 600px;
  margin: 40px auto;
  padding: 0 20px;
}

h1 {
  color: #5b4df6;
  font-size: 32px;
}

.card {
  background: #ffffff;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(31, 41, 55, 0.08);
}

.card p {
  line-height: 1.6;
}`,
            outputLabel: "Natija",
            output: "Namuna sahifada binafsha fon, to'q matn, yumaloq burchakli karta va yumshoq soya ko'rinadi. (CSS namunasida sahifa avtomatik yasaladi.)",
            runnable: true,
          },
          {
            type: "code",
            title: "combinator.css",
            lang: "css",
            code: `.card > h2 {
  margin-top: 0;
  font-size: 22px;
}

.card p + p {
  margin-top: 12px;
}

a[target="_blank"] {
  color: #4735e0;
  text-decoration: underline;
}

input[type="email"] {
  border: 2px solid #5b4df6;
}`,
            outputLabel: "Natija",
            output: "Karta ichidagi bevosita h2 sarlavhasi 22px bo'ladi. Ketma-ket kelgan ikkinchi va keyingi paragraflar 12px yuqori masofa oladi. Yangi oynada ochiladigan havola binafsha va tagchiziqli, email maydoni esa qalin binafsha chegara bilan ajralib turadi.",
          },
          {
            type: "table",
            head: ["Selektor", "Nimani tanlaydi"],
            rows: [
              ["<code>h1</code>", "Barcha h1 teglar"],
              ["<code>.card</code>", "class=\"card\" elementlar"],
              ["<code>#bosh</code>", "id=\"bosh\" element"],
              ["<code>div p</code>", "div ichidagi p elementlar"],
              ["<code>a:hover</code>", "Sichqoncha ustiga kelganda"],
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "CSS faylini ulash",
            html: "HTML <code>head</code> ichiga <code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code> yoziladi. Uslublarni <code>&lt;style&gt;</code> tegi ichiga ham yozish mumkin, lekin alohida fayl tartibliroq.",
          },
        ],
        quiz: [
          {
            q: "class=\"card\" elementni tanlaydigan selektor qaysi?",
            options: ["#card", "card", "*card", ".card"],
            answer: 3,
            explain: "Nuqta class selektorini bildiradi: .card.",
          },
          {
            q: "id=\"bosh\" elementni tanlash uchun qaysi selektor ishlatiladi?",
            options: [".bosh", "#bosh", "bosh", "id:bosh"],
            answer: 1,
            explain: "# belgisi id selektorini bildiradi.",
          },
          {
            q: "CSS fayli HTML'ga qaysi teg bilan ulanadi?",
            options: ["script", "style-src", "link", "css"],
            answer: 2,
            explain: "link rel=\"stylesheet\" href=\"style.css\" orqali ulanadi.",
          },
        ],
      },
      {
        id: 8,
        title: "Box model: margin, border va padding",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Har bir HTML element to'rtburchak quti. Uning tarkibi: <b>content</b> (mazmun), <b>padding</b> (ichki bo'shliq), <b>border</b> (chegara) va <b>margin</b> (tashqi bo'shliq).",
          },
          {
            type: "code",
            title: "box.css",
            lang: "css",
            code: `.card {
  width: 280px;
  padding: 20px;
  border: 2px solid #5b4df6;
  margin: 24px auto;
  background: #ffffff;
  border-radius: 12px;
}

.card h2 {
  margin-top: 0;
}

.card p {
  margin-bottom: 0;
  line-height: 1.6;
}`,
            outputLabel: "Natija",
            output: "Karta markazda turadi, ichida 20px bo'shliq, binafsha chegara va tashqarida 24px masofa bor.",
            runnable: true,
          },
          {
            type: "table",
            head: ["Xossa", "Ma'nosi"],
            rows: [
              ["<code>width</code>", "Mazmun kengligi"],
              ["<code>padding</code>", "Mazmun va chegara orasidagi bo'shliq"],
              ["<code>border</code>", "Chegara chizig'i"],
              ["<code>margin</code>", "Element tashqarisidagi masofa"],
              ["<code>box-sizing: border-box</code>", "Width ichiga padding va border kiradi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Global reset",
            html: "Ko'pchilik loyihalarda <code>*, *::before, *::after { box-sizing: border-box; }</code> yoziladi. Shunda o'lchamlarni hisoblash osonlashadi.",
          },
          {
            type: "code",
            title: "box-sizing.css",
            lang: "css",
            code: `* {
  box-sizing: border-box;
}

.box {
  width: 300px;
  padding: 30px;
  border: 5px solid #1f2937;
  background: #c9f26b;
}`,
            outputLabel: "Natija",
            output: "Quti umumiy kengligi 300px bo'lib qoladi; padding va border shu kenglik ichiga joylashadi.",
            runnable: true,
          },
        ],
        quiz: [
          {
            q: "Element tashqarisidagi bo'shliq qaysi xossa bilan beriladi?",
            options: ["margin", "padding", "border", "gap"],
            answer: 0,
            explain: "margin tashqi, padding ichki bo'shliqni beradi.",
          },
          {
            q: "content va chegara orasidagi bo'shliq nima deyiladi?",
            options: ["margin", "outline", "spacing", "padding"],
            answer: 3,
            explain: "padding mazmun va border orasidagi ichki bo'shliq.",
          },
          {
            q: "box-sizing: border-box nima qiladi?",
            options: ["Elementni yashiradi", "Padding va borderni width ichiga oladi", "Faqat rangni o'zgartiradi", "Marginlarni o'chiradi"],
            answer: 1,
            explain: "border-box rejimida width umumiy quti kengligi bo'lib, padding va border unga kiradi.",
          },
        ],
      },
      {
        id: 9,
        title: "Flexbox bilan joylashuv",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Flexbox elementlarni bir o'lchamda (qator yoki ustun) moslashuvchan joylashtiradi. Konteynerga <code>display: flex</code> beriladi, bolalar esa avtomatik tekislanadi.",
          },
          {
            type: "code",
            title: "flex.css",
            lang: "css",
            code: `.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  background: #1f2937;
  color: #ffffff;
  border-radius: 12px;
}

.links {
  display: flex;
  gap: 12px;
}

.links a {
  color: #c9f26b;
  text-decoration: none;
  font-weight: bold;
}`,
            outputLabel: "Natija",
            output: "Namuna sahifada sarlavha chapda, havolalar o'ngda, hammasi vertikal markazda turadi.",
            runnable: true,
          },
          {
            type: "table",
            head: ["Xossa", "Vazifasi"],
            rows: [
              ["<code>display: flex</code>", "Konteynerni flex qiladi"],
              ["<code>flex-direction</code>", "Qator (row) yoki ustun (column)"],
              ["<code>justify-content</code>", "Asosiy o'q bo'ylab tekislash"],
              ["<code>align-items</code>", "Ko'ndalang o'q bo'ylab tekislash"],
              ["<code>gap</code>", "Bolalar orasidagi masofa"],
              ["<code>flex-wrap</code>", "Sig'magan bolalarni keyingi qatorga o'tkazish"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Flex yoki Grid?",
            html: "Bitta qator yoki ustun bo'ylab joylashtirish uchun Flexbox qulay. Sahifaning ikki o'lchamli to'r tuzilmasi uchun Grid mosroq. Ikkalasini bitta loyihada birga ishlatish mutlaqo normal.",
          },
          {
            type: "code",
            title: "card-flex.css",
            lang: "css",
            code: `.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.card {
  flex: 1 1 180px;
  padding: 18px;
  border: 1px solid #ddd6fe;
  border-radius: 12px;
  background: #ffffff;
}`,
            outputLabel: "Natija",
            output: "Kartalar kenglikka qarab yonma-yon joylashadi va sig'maganda keyingi qatorga o'tadi.",
            runnable: true,
          },
        ],
        quiz: [
          {
            q: "Konteynerni flex qilish uchun qaysi xossa yoziladi?",
            options: ["position: flex", "flex: true", "display: flex", "layout: flex"],
            answer: 2,
            explain: "display: flex konteynerni flex formatiga o'tkazadi.",
          },
          {
            q: "Bolalarni asosiy o'q bo'ylab tekislash uchun nima ishlatiladi?",
            options: ["justify-content", "align-items", "text-align", "gap"],
            answer: 0,
            explain: "justify-content asosiy o'q bo'ylab, align-items ko'ndalang o'q bo'ylab tekislaydi.",
          },
          {
            q: "flex-wrap: wrap nima qiladi?",
            options: ["Elementlarni yashiradi", "Rangni o'zgartiradi", "Elementlarni ustunga aylantiradi", "Sig'magan elementlarni keyingi qatorga o'tkazadi"],
            answer: 3,
            explain: "wrap bolalar konteynerga sig'masa, keyingi qatorga o'tkaziladi.",
          },
        ],
      },
      {
        id: 10,
        title: "CSS Grid va moslashuvchan dizayn",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Grid ikki o'lchamli joylashuv: qator va ustunlarni birga boshqaradi. Responsive dizayn esa ekran o'lchamiga moslashishni bildiradi.",
          },
          {
            type: "code",
            title: "grid.css",
            lang: "css",
            code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.tile {
  padding: 20px;
  border-radius: 12px;
  background: #ede9ff;
  text-align: center;
  font-weight: bold;
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`,
            outputLabel: "Natija",
            output: "Katta ekranda uchta ustun, 700px dan tor ekranda esa bitta ustun ko'rinadi.",
            runnable: true,
          },
          {
            type: "table",
            head: ["Birlik", "Ma'nosi"],
            rows: [
              ["<code>1fr</code>", "Bo'sh joyning bir ulushi"],
              ["<code>repeat(3, 1fr)</code>", "Uchta teng ustun"],
              ["<code>minmax(200px, 1fr)</code>", "Eng kami 200px, ko'pi bo'sh joy"],
              ["<code>auto-fit</code>", "Sig'gancha ustun yaratish"],
            ],
          },
          {
            type: "code",
            title: "responsive-grid.css",
            lang: "css",
            code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

@media (max-width: 520px) {
  body {
    padding: 12px;
  }
  h1 {
    font-size: 24px;
  }
}`,
            outputLabel: "Natija",
            output: "Ustunlar ekran kengligiga qarab avtomatik ko'payadi yoki kamayadi; telefonlarda shrift va bo'shliq kichrayadi.",
            runnable: true,
          },
          {
            type: "note",
            variant: "tip",
            title: "Mobile-first",
            html: "Avval kichik ekran uchun yozing, keyin <code>min-width</code> media so'rovlari bilan kattalashtiring. Bu zamonaviy yondashuv.",
          },
        ],
        quiz: [
          {
            q: "Uchta teng ustun yaratish uchun qaysi yozuv ishlatiladi?",
            options: ["grid-columns: 3", "grid-template-columns: repeat(3, 1fr)", "columns: 3", "display: columns"],
            answer: 1,
            explain: "repeat(3, 1fr) uchta teng ulushli ustun yaratadi.",
          },
          {
            q: "Media so'rovi nima uchun ishlatiladi?",
            options: ["Rang tanlash", "Fayl yuklash", "Ekran o'lchamiga qarab uslub berish", "Matn qo'shish"],
            answer: 2,
            explain: "@media shartiga mos ekranlarda boshqa uslublarni qo'llaydi.",
          },
          {
            q: "1fr nimani bildiradi?",
            options: ["Bo'sh joyning bir ulushi", "1 piksel", "1 foiz", "1 qator"],
            answer: 0,
            explain: "fr — fractional unit, mavjud bo'sh joyning ulushi.",
          },
        ],
      },
      {
        id: 11,
        title: "Dizayn: rang, shrift va animatsiya",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Chiroyli dizayn — bu muvozanat: o'qishli shrift, yetarli kontrast, izchil ranglar va mayda harakatlar. CSS buning uchun keng imkoniyat beradi.",
          },
          {
            type: "table",
            head: ["Tushuncha", "Maslahat"],
            rows: [
              ["Rang", "Asosiy 1 ta, urg'u 1 ta va neytral ranglar"],
              ["Shrift", "Sarlavha va matn uchun 2 tadan ko'p bo'lmagan oila"],
              ["Bo'shliq", "8px ga karrali qiymatlar: 8, 16, 24, 32"],
              ["Kontrast", "Matn fon bilan yetarli farqlansin"],
            ],
          },
          {
            type: "code",
            title: "dizayn.css",
            lang: "css",
            code: `.btn {
  padding: 12px 20px;
  border: 0;
  border-radius: 10px;
  background: #5b4df6;
  color: #ffffff;
  font: inherit;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.btn:hover {
  background: #4735e0;
  transform: translateY(-2px);
}

.btn:focus-visible {
  outline: 3px solid #c9f26b;
  outline-offset: 3px;
}`,
            outputLabel: "Natija",
            output: "Namuna tugma sichqoncha ustiga kelganda quyuqlashadi va sal yuqoriga ko'tariladi. Klaviatura bilan tanlanganda yashil kontur chiqadi.",
            runnable: true,
          },
          {
            type: "note",
            variant: "warning",
            title: "Animatsiyani haddan oshirmang",
            html: "Har bir element harakatlansa, foydalanuvchi charchaydi. <code>prefers-reduced-motion</code> sozlamasini hurmat qiling va muhim bo'lmagan animatsiyalarni kamaytiring.",
          },
          {
            type: "code",
            title: "typography.css",
            lang: "css",
            code: `body {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  line-height: 1.65;
  color: #1f2937;
}

h1 {
  font-size: clamp(28px, 5vw, 48px);
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.muted {
  color: #6b7280;
}`,
            outputLabel: "Natija",
            output: "Sarlavha ekran kengligiga qarab moslashadi (clamp), matn o'qishli qator balandligida chiqadi.",
            runnable: true,
          },
        ],
        quiz: [
          {
            q: "Hover holati qaysi selektor bilan belgilanadi?",
            options: [":active", ":focus", ":visited", ":hover"],
            answer: 3,
            explain: ":hover sichqoncha element ustiga kelganda ishlaydi.",
          },
          {
            q: "Rang o'zgarishini silliq qilish uchun qaysi xossa ishlatiladi?",
            options: ["animate", "transition", "motion", "smooth"],
            answer: 1,
            explain: "transition xossa o'zgarishining davomiyligi va usulini belgilaydi.",
          },
          {
            q: "clamp(28px, 5vw, 48px) nima qiladi?",
            options: ["Rangni o'zgartiradi", "Shriftni yashiradi", "O'lchamni 28–48px oralig'ida moslashtiradi", "Faqat 28px qiladi"],
            answer: 2,
            explain: "clamp minimal, moslashuvchan va maksimal qiymatni belgilaydi.",
          },
        ],
      },
      {
        id: 12,
        title: "Mini loyiha: moslashuvchan portfolio kartasi",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi HTML va CSS'ni birlashtirib, shaxsiy portfolio kartasini yasaymiz. U semantik HTML, flexbox, ranglar, soya va hover effektlarini o'z ichiga oladi.",
          },
          {
            type: "code",
            title: "portfolio.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aziza — Portfolio</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      font-family: system-ui, sans-serif;
      background: #ede9ff;
      color: #1f2937;
    }
    .card {
      width: min(360px, 92vw);
      padding: 28px;
      border-radius: 20px;
      background: #fff;
      box-shadow: 0 20px 50px rgba(31, 41, 55, 0.12);
      text-align: center;
    }
    .avatar {
      width: 88px;
      height: 88px;
      margin: 0 auto;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: #5b4df6;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
    }
    h1 { margin: 16px 0 4px; font-size: 26px; }
    .role { margin: 0; color: #6b7280; font-size: 14px; }
    .skills {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      margin: 18px 0 22px;
    }
    .skills span {
      padding: 6px 10px;
      border-radius: 999px;
      background: #f3f0ff;
      color: #4735e0;
      font-size: 12px;
      font-weight: bold;
    }
    .btn {
      display: block;
      padding: 12px;
      border-radius: 10px;
      background: #5b4df6;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.2s ease, transform 0.2s ease;
    }
    .btn:hover { background: #4735e0; transform: translateY(-2px); }
    @media (max-width: 420px) {
      .card { padding: 20px; }
      h1 { font-size: 22px; }
    }
  </style>
</head>
<body>
  <main class="card">
    <div class="avatar">A</div>
    <h1>Aziza Karimova</h1>
    <p class="role">Frontend dasturchi yo'lida</p>
    <div class="skills">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>
    <a class="btn" href="mailto:aziza@example.com">Bog'lanish</a>
  </main>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Markazda chiroyli karta: dumaloq avatar, ism, kasb, ko'nikma belgilari va hover effektli tugma. Telefonda karta kenglikka moslashadi.",
            runnable: true,
          },
          {
            type: "code",
            title: "links.html",
            code: `<ul class="links">
  <li><a href="https://github.com/aziza">GitHub</a></li>
  <li><a href="https://t.me/aziza">Telegram</a></li>
</ul>

<style>
  .links {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 0;
    list-style: none;
  }
  .links a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: #4735e0;
    font-weight: bold;
    text-decoration: none;
  }
  .links a:hover { text-decoration: underline; }
</style>`,
            outputLabel: "Natija",
            output: "Karta ostida “GitHub” va “Telegram” havolalari markazda, 12px masofa bilan yonma-yon chiqadi. Har bir havola kamida 44px balandlikda bosiladi; ustiga sichqoncha kelganda tagchiziq paydo bo'ladi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Loyihani o'zgartiring",
            html: "Ism, rang va tugma manzilini o'zgartiring. Keyin kartaga loyihalar ro'yxati yoki ijtimoiy tarmoq havolalarini qo'shing. Har bir o'zgarish — amaliyot.",
          },
          {
            type: "ul",
            items: [
              "HTML — semantik <code>main</code>, sarlavha va havola.",
              "CSS — Grid bilan markazlash, Flexbox bilan belgilar.",
              "Responsive — <code>min()</code> va media so'rov.",
              "Interaktivlik — <code>:hover</code> va <code>transition</code>.",
            ],
          },
          {
            type: "note",
            variant: "info",
            title: "Keyingi qadam",
            html: "Yakuniy imtihondan o'tib sertifikat oling. So'ng JavaScript kursida sahifangizga harakat qo'shing.",
          },
        ],
        quiz: [
          {
            q: "Kartani ekran markazida ushlash uchun qaysi yozuv ishlatildi?",
            options: ["display: grid; place-items: center", "text-align: center", "margin: top", "position: middle"],
            answer: 0,
            explain: "body'da display: grid va place-items: center karta markazlashini ta'minlaydi.",
          },
          {
            q: "Ko'nikma belgilari qaysi joylashuv usulida yonma-yon chiqadi?",
            options: ["Table", "Float", "Inline-block only", "Flexbox"],
            answer: 3,
            explain: ".skills konteynerida display: flex va flex-wrap ishlatilgan.",
          },
          {
            q: "Telefonda karta paddingini kamaytirish uchun nima ishlatildi?",
            options: ["JavaScript", "Media so'rovi", "Yangi HTML fayl", "Faqat hover"],
            answer: 1,
            explain: "@media (max-width: 420px) ichida kichik ekran uchun alohida uslub berilgan.",
          },
        ],
      },
{
        id: 13,
        title: "Semantik HTML: sahifa xaritasini qurish",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Oldingi darslarda <code>header</code>, <code>nav</code> va <code>main</code> bilan tanishdik. Endi sahifani <b>hududlarga</b> bo'lib chiqamiz: qaysi qism mustaqil maqola, qaysi qism yordamchi izoh va qaysi qism oddiy bezak konteyner ekanini aniqlaymiz. To'g'ri tanlangan teg ekran o'quvchi uchun sahifa xaritasini yaratadi.",
          },
          {
            type: "code",
            title: "sahifa.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Semantik sahifa</title>
</head>
<body>
  <header class="site-header">
    <a href="/">Noldan</a>
    <nav aria-label="Asosiy menyu">
      <ul>
        <li><a href="#maqolalar">Maqolalar</a></li>
        <li><a href="#muallif">Muallif</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="maqolalar" aria-labelledby="maqolalar-sarlavha">
      <h1 id="maqolalar-sarlavha">HTML asoslari</h1>
      <article>
        <h2>Semantik teglar nima uchun kerak?</h2>
        <p>Ular sahifa qismlarining ma'nosini bildiradi.</p>
      </article>
      <aside>
        <h2>Foydali maslahat</h2>
        <p>Har bir bo'limga sarlavha bering.</p>
      </aside>
    </section>
  </main>

  <footer>
    <p>© 2026 Noldan</p>
  </footer>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Sahifada yuqorida logo va ikki havolali menyu, markazda “HTML asoslari” sarlavhasi, uning ostida maqola va yon maslahat bloki, eng pastda esa © 2026 Noldan qatori ko'rinadi. Ko'rinish oddiy, ammo ekran o'quvchi header, nav, main, article va aside hududlarini alohida e'lon qiladi.",
          },
          {
            type: "table",
            head: ["Teg", "Qachon mos keladi"],
            rows: [
              ["<code>header</code>", "Sahifa yoki bo'limning kirish qismi: logo, sarlavha, menyu"],
              ["<code>nav</code>", "Asosiy havolalar to'plami"],
              ["<code>main</code>", "Sahifadagi takrorlanmaydigan asosiy mazmun"],
              ["<code>section</code>", "Sarlavhali mazmuniy bo'lim"],
              ["<code>article</code>", "Alohida tarqatilishi mumkin bo'lgan tugallangan mazmun"],
              ["<code>aside</code>", "Asosiy mazmunga yordamchi izoh yoki reklama"],
              ["<code>footer</code>", "Mualliflik, aloqa va qo'shimcha havolalar"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "section yoki div?",
            html: "Agar blokning sarlavhasi bo'lsa va u mazmuniy bo'lim bo'lsa, <code>section</code> tanlang. Faqat joylashuv yoki bezash uchun o'rayotgan bo'lsangiz, <code>div</code> neytral konteyner bo'lib qolaveradi.",
          },
          {
            type: "code",
            title: "yangilik.html",
            code: `<article class="news">
  <h2>Yangi kurs ochildi</h2>
  <figure>
    <img src="https://picsum.photos/id/180/640/360"
         alt="Stol ustidagi noutbuk va yozuv daftari"
         width="640" height="360">
    <figcaption>Amaliy loyiha ustida ishlash.</figcaption>
  </figure>
  <p>Kurs besh hafta davom etadi.</p>

  <details>
    <summary>Batafsil ma'lumot</summary>
    <p>Har hafta bitta loyiha topshiriladi.</p>
  </details>
</article>`,
            outputLabel: "Natija",
            output: "Maqola sarlavhasi, 640×360 o'lchamdagi rasm, uning ostida “Amaliy loyiha ustida ishlash.” izohi chiqadi. Pastdagi “Batafsil ma'lumot” qatorini bosganda “Har hafta bitta loyiha topshiriladi.” matni ochiladi.",
          },
        ],
        quiz: [
          {
            q: "Alohida tarqatilishi mumkin bo'lgan tugallangan mazmun uchun qaysi teg eng mos?",
            options: ["section", "div", "article", "aside"],
            answer: 2,
            explain: "article mustaqil maqola, yangilik yoki karta kabi alohida mazmunni bildiradi.",
          },
          {
            q: "Bitta sahifada nechta main elementi bo'lishi tavsiya etiladi?",
            options: ["Bitta", "Cheksiz", "Har bo'limda bittadan", "Kamida uchta"],
            answer: 0,
            explain: "main sahifaning takrorlanmaydigan asosiy mazmunini bildiradi, shuning uchun bitta bo'ladi.",
          },
          {
            q: "Rasm va uning izohini semantik bog'lash uchun qaysi juftlik ishlatiladi?",
            options: ["div va span", "img va title", "section va p", "figure va figcaption"],
            answer: 3,
            explain: "figure rasm, diagramma yoki kod kabi mazmunni, figcaption esa uning izohini bildiradi.",
          },
        ],
      },
      {
        id: 14,
        title: "Qulaylik (accessibility) asoslari",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Qulaylik — saytdan <b>har kim</b> foydalana olishi: klaviatura bilan ishlaydigan, ekran o'quvchisi tushunadigan va rangni yaxshi ko'radigan foydalanuvchilar ham. WCAG tamoyillari qisqacha <b>POUR</b> deb yodlanadi: idrok etish, boshqarish, tushunish va mustahkamlik.",
          },
          {
            type: "code",
            title: "skip-link.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Qulaylik</title>
  <style>
    .skip-link {
      position: absolute;
      left: 1rem;
      top: -4rem;
      padding: 0.75rem 1rem;
      background: #1f2937;
      color: #ffffff;
      border-radius: 0.5rem;
      transition: top 0.2s ease;
    }
    .skip-link:focus { top: 1rem; }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Asosiy mazmunga o'tish</a>

  <header>
    <nav aria-label="Asosiy menyu">
      <a href="/">Bosh sahifa</a>
      <a href="/kurslar">Kurslar</a>
    </nav>
  </header>

  <main id="main" tabindex="-1">
    <h1>Kurslar</h1>
    <p>O'zingizga mos yo'nalishni tanlang.</p>
  </main>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Sahifa ochilganda havola ekranning tepasidan tashqarida yashirin turadi. Klaviaturada birinchi marta Tab bosilganda “Asosiy mazmunga o'tish” havolasi ko'rinadi; Enter bosilganda fokus main bo'limiga o'tadi va menyu havolalari o'tkazib yuboriladi.",
          },
          {
            type: "table",
            head: ["Tekshiruv", "To'g'ri amal"],
            rows: [
              ["Mazmunli rasm", "alt ichida rasmning vazifasini aniq yozish"],
              ["Bezak rasm", "<code>alt=\"\"</code> bilan ekran o'quvchidan yashirish"],
              ["Maydon nomi", "Har bir input uchun ko'rinadigan label"],
              ["Klaviatura", "Fokus ko'rinadigan va mantiqiy tartibda bo'lishi"],
              ["Matn kontrasti", "Oddiy matn uchun kamida 4.5:1"],
            ],
          },
          {
            type: "code",
            title: "forma.html",
            code: `<form action="/royxat" method="post">
  <fieldset>
    <legend>Kursga yozilish</legend>

    <label for="ism">Ismingiz</label>
    <input id="ism" name="ism" type="text"
           autocomplete="name" required>

    <label for="email">Email</label>
    <input id="email" name="email" type="email"
           autocomplete="email" aria-describedby="email-yordam" required>
    <p id="email-yordam">Tasdiqlash havolasini shu manzilga yuboramiz.</p>

    <button type="submit">Yuborish</button>
  </fieldset>
</form>`,
            outputLabel: "Natija",
            output: "Forma “Kursga yozilish” legendi bilan guruhlangan. Ism va email maydonlari ustida ko'rinadigan yorliqlar bor; email ostida yordam matni chiqadi. Bo'sh maydon bilan yuborishga urinilganda brauzer xato xabarini ko'rsatadi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Faqat sichqonchaga tayanmang",
            html: "Hover effektlar chiroyli, lekin barcha amallar klaviatura bilan ham bajarilishi kerak. <code>outline: none</code> yozib fokusni butunlay yo'qotmang — uning o'rniga ko'rinadigan <code>:focus-visible</code> uslubini bering.",
          },
        ],
        quiz: [
          {
            q: "“Skip link”ning asosiy vazifasi nima?",
            options: ["Sahifani yangilash", "Klaviatura foydalanuvchisini takroriy menyudan asosiy mazmunga o'tkazish", "Rasmni yuklashni tezlashtirish", "Formani avtomatik to'ldirish"],
            answer: 1,
            explain: "Skip link birinchi fokuslanadigan element bo'lib, klaviatura foydalanuvchisiga navigatsiyani o'tkazib yuborish imkonini beradi.",
          },
          {
            q: "Faqat bezak uchun qo'yilgan rasmga qanday alt beriladi?",
            options: ["alt=\"bezak\"", "alt ni umuman yozmaslik", "alt=\"\"", "alt=\"rasm\""],
            answer: 2,
            explain: "Bo'sh alt ekran o'quvchiga rasm mazmuniy emasligini bildiradi; alt yo'q bo'lsa, u fayl nomini o'qishi mumkin.",
          },
          {
            q: "WCAG bo'yicha oddiy matn uchun tavsiya etilgan minimal kontrast nisbati qancha?",
            options: ["4.5:1", "1.5:1", "2:1", "10:1"],
            answer: 0,
            explain: "AA darajasida oddiy matn uchun 4.5:1, katta matn uchun 3:1 kontrast talab qilinadi.",
          },
        ],
      },
      {
        id: 15,
        title: "ARIA: kerak bo'lganda ishlatish",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "ARIA — HTML elementlariga qo'shimcha ma'no beruvchi atributlar to'plami. U ko'rinishni o'zgartirmaydi, faqat brauzerning <b>accessibility daraxti</b>ga ta'sir qiladi. Birinchi qoida: mos HTML tegi bo'lsa, ARIA o'rniga o'sha tegni ishlating.",
          },
          {
            type: "code",
            title: "nav.html",
            code: `<nav aria-label="Asosiy navigatsiya">
  <ul>
    <li><a href="/" aria-current="page">Bosh sahifa</a></li>
    <li><a href="/kurslar">Kurslar</a></li>
    <li><a href="/aloqa">Aloqa</a></li>
  </ul>
</nav>

<button type="button" aria-expanded="false" aria-controls="mobil-menyu">
  Menyu
</button>
<ul id="mobil-menyu" hidden>
  <li><a href="/kurslar">Kurslar</a></li>
  <li><a href="/aloqa">Aloqa</a></li>
</ul>`,
            outputLabel: "Natija",
            output: "Uch havolali gorizontal menyu ko'rinadi; “Bosh sahifa” ekran o'quvchiga joriy sahifa deb e'lon qilinadi. “Menyu” tugmasi yopilgan holatda turadi va u bilan bog'langan ro'yxat yashiringan bo'ladi.",
          },
          {
            type: "table",
            head: ["Atribut", "Vazifasi"],
            rows: [
              ["<code>aria-label</code>", "Elementga ko'rinmas nom beradi"],
              ["<code>aria-labelledby</code>", "Nomni sahifadagi boshqa elementdan oladi"],
              ["<code>aria-expanded</code>", "Ochiladigan blokning holatini bildiradi"],
              ["<code>aria-controls</code>", "Boshqariladigan element id sini ko'rsatadi"],
              ["<code>aria-hidden=\"true\"</code>", "Bezak elementni accessibility daraxtidan yashiradi"],
              ["<code>aria-live</code>", "O'zgargan xabarni e'lon qilish siyosati"],
              ["<code>aria-current</code>", "Joriy sahifa yoki qadamni belgilaydi"],
            ],
          },
          {
            type: "code",
            title: "holat.html",
            code: `<p role="status" aria-live="polite">
  Saqlandi: 3 ta kurs tanlandi.
</p>

<button type="button" aria-label="Savatni ochish">
  Savat
  <span aria-hidden="true">3</span>
</button>

<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" stroke-width="2"/>
</svg>`,
            outputLabel: "Natija",
            output: "Sahifada “Saqlandi: 3 ta kurs tanlandi.” matni, “Savat 3” tugmasi va 24×24 o'lchamdagi kvadrat kontur ikonkasi ko'rinadi. Ekran o'quvchi tugmani faqat “Savatni ochish” deb, ikonkani esa umuman o'qimaydi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Ortiqcha ARIA zarar qiladi",
            html: "Native <code>button</code> yoki <code>nav</code> yetarli bo'lsa, <code>role=\"button\"</code> yoki <code>role=\"navigation\"</code> qo'shish shart emas. Noto'g'ri rol ekran o'quvchini chalg'itadi; ARIA'ni faqat HTML yetmagan joyda ishlating.",
          },
        ],
        quiz: [
          {
            q: "Bezak ikonkani ekran o'quvchidan yashirish uchun qaysi atribut ishlatiladi?",
            options: ["aria-label", "aria-live", "aria-controls", "aria-hidden=\"true\""],
            answer: 3,
            explain: "aria-hidden=\"true\" elementni accessibility daraxtidan chiqaradi; u faqat mazmuniy bo'lmagan bezak uchun xavfsiz.",
          },
          {
            q: "Ochiladigan menyu tugmasining hozirgi holatini qaysi atribut bildiradi?",
            options: ["aria-current", "aria-expanded", "aria-labelledby", "aria-describedby"],
            answer: 1,
            explain: "aria-expanded=\"true\" yoki \"false\" blokning ochiq-yopiqligini bildiradi.",
          },
          {
            q: "ARIA ishlatishning birinchi qoidasi qaysi?",
            options: ["Har bir divga role qo'shish", "Faqat aria-label yozish", "Mos native HTML tegidan foydalanish", "Barcha ikonkalarni aria-hidden qilish"],
            answer: 2,
            explain: "Agar button, nav yoki input kabi native element mavjud bo'lsa, ular ARIA'dan ko'ra ishonchliroq.",
          },
        ],
      },
      {
        id: 16,
        title: "Rasmlar: srcset, o'lcham va zamonaviy formatlar",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Bitta katta rasmni barcha qurilmalarga yuborish trafikni behuda sarflaydi. <code>srcset</code> va <code>sizes</code> brauzerga bir nechta variant taklif qiladi, u esa ekran kengligi va piksel zichligiga qarab mosini yuklaydi. <code>width</code> va <code>height</code> esa joylashuv sakrashining oldini oladi.",
          },
          {
            type: "code",
            title: "rasm.html",
            code: `<img
  src="https://picsum.photos/id/1015/800/500"
  srcset="https://picsum.photos/id/1015/400/250 400w,
          https://picsum.photos/id/1015/800/500 800w,
          https://picsum.photos/id/1015/1200/750 1200w"
  sizes="(max-width: 640px) 100vw, 640px"
  width="800"
  height="500"
  loading="lazy"
  decoding="async"
  alt="Tik qoyalar orasidagi chuqur fyord va moviy suv">`,
            outputLabel: "Natija",
            output: "Telefonda rasm ekran kengligining 100% ini egallaydi, kattaroq ekranda 640px dan oshmaydi. Brauzer shu shartga mos 400w, 800w yoki 1200w variantdan birini tanlaydi; rasm joylashguncha uning uchun 800×500 nisbatdagi joy band turadi.",
          },
          {
            type: "table",
            head: ["Vosita", "Foydasi"],
            rows: [
              ["<code>width</code> + <code>height</code>", "Yuklanishdan oldin joy band qiladi, CLS ni kamaytiradi"],
              ["<code>loading=\"lazy\"</code>", "Ekrandan pastdagi rasmni keyinroq yuklaydi"],
              ["<code>srcset</code>", "Turli o'lchamdagi fayllar variantini beradi"],
              ["<code>sizes</code>", "Rasm sahifada qancha joy egallashini brauzerga aytadi"],
              ["<code>decoding=\"async\"</code>", "Rasmni dekodlashni sahifa chizilishidan ajratadi"],
              ["WebP / AVIF", "JPEG'ga qaraganda kichikroq hajm"],
            ],
          },
          {
            type: "code",
            title: "media.css",
            lang: "css",
            code: `.media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 1rem;
  background: #e5e7eb;
}

.media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 480px) {
  .media { border-radius: 0.5rem; }
}`,
            outputLabel: "Natija",
            output: "Rasm qutisi har doim 16:9 nisbatda qoladi. Ichidagi rasm qutini to'liq qoplaydi, ortiqcha qismlari kesiladi va markazga tekislanadi; 480px dan tor ekranda burchaklar kamroq yumaloqlanadi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Bir rasm — bir niyat",
            html: "Muhim mazmunni faqat rasm ichida bermang: matnni ham yozing. Rasm yuklanmasa, <code>alt</code> mazmunni yetkazadi. SEO uchun fayl nomini ham mazmunli qiling, masalan <code>tog-koprigi.webp</code>.",
          },
        ],
        quiz: [
          {
            q: "Ekrandan pastdagi rasmni keyinroq yuklash uchun qaysi atribut ishlatiladi?",
            options: ["loading=\"lazy\"", "decoding=\"async\"", "fetchpriority=\"high\"", "preload=\"image\""],
            answer: 0,
            explain: "loading=\"lazy\" brauzerga rasmni foydalanuvchi yaqinlashganda yuklashni bildiradi.",
          },
          {
            q: "srcset va sizes birgalikda nimani boshqaradi?",
            options: ["Rasm ranglarini", "Rasmning muqobil matnini", "Rasmning yuklanish tartibini", "Qaysi o'lchamdagi rasm fayli tanlanishini"],
            answer: 3,
            explain: "srcset variantlarni, sizes esa sahifadagi taxminiy o'lchamni beradi; brauzer ikkalasidan mos faylni tanlaydi.",
          },
          {
            q: "img uchun width va height yozishning asosiy foydasi nima?",
            options: ["Rasmni avtomatik siqadi", "Yuklanish paytida joy band qilib, layout sakrashini kamaytiradi", "Rang kontrastini oshiradi", "Rasmni ekran o'quvchidan yashiradi"],
            answer: 1,
            explain: "O'lchamlar oldindan ma'lum bo'lsa, brauzer rasm uchun joy ajratadi va sahifa keyin sakramaydi.",
          },
        ],
      },
      {
        id: 17,
        title: "Video, audio va iframe bilan ishlash",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "HTML5 video va audioni plaginlarsiz o'ynatadi. Muhim qism — <b>nazoratlar</b>, <b>poster</b>, <b>subtitrlar</b> va muqobil manbalar. <code>iframe</code> esa boshqa sahifa yoki xizmatni o'z ichiga joylashtiradi; unga har doim tushunarli <code>title</code> bering.",
          },
          {
            type: "code",
            title: "video.html",
            code: `<video controls width="640" height="360"
       poster="https://picsum.photos/id/1011/640/360"
       preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4">
  <track kind="captions" src="captions-uz.vtt"
         srclang="uz" label="O'zbekcha" default>
  Brauzeringiz video tegini qo'llab-quvvatlamaydi.
</video>

<audio controls preload="none">
  <source src="podcast.mp3" type="audio/mpeg">
  <a href="podcast.mp3">Podcastni yuklab olish</a>
</audio>`,
            outputLabel: "Natija",
            output: "640×360 o'lchamdagi pleer ko'lda qayiqda eshkak eshayotgan ayol tasvirlangan posterni ko'rsatadi; ijro tugmasi bosilganda video o'ynaydi. Subtitrlar menyusida “O'zbekcha” varianti mavjud. Uning ostidagi audio pleer esa faqat ijro bosilganda podcast faylini yuklaydi.",
          },
          {
            type: "table",
            head: ["Element yoki atribut", "Vazifasi"],
            rows: [
              ["<code>controls</code>", "Brauzerning ijro boshqaruvlarini ko'rsatadi"],
              ["<code>poster</code>", "Video ijro etilmaguncha ko'rinadigan rasm"],
              ["<code>preload</code>", "Faylni oldindan qanchalik yuklashni bildiradi"],
              ["<code>track kind=\"captions\"</code>", "Subtitr va tovushsiz izohlar"],
              ["<code>source</code>", "Bir nechta formatdagi muqobil manba"],
              ["<code>iframe title</code>", "Ichki sahifa uchun accessibility nomi"],
            ],
          },
          {
            type: "code",
            title: "xarita.html",
            code: `<div class="map">
  <iframe
    src="https://www.openstreetmap.org/export/embed.html?bbox=69.1%2C41.2%2C69.4%2C41.4"
    title="Toshkent markazi xaritasi"
    loading="lazy"
    referrerpolicy="no-referrer"
    allowfullscreen>
  </iframe>
</div>

<style>
  .map { aspect-ratio: 16 / 9; overflow: hidden; border-radius: 1rem; }
  .map iframe { display: block; width: 100%; height: 100%; border: 0; }
</style>`,
            outputLabel: "Natija",
            output: "Sahifada 16:9 nisbatdagi yumaloq burchakli xarita oynasi chiqadi; xarita sahifa yuklanganda darhol emas, unga yaqinlashganda yuklanadi. Ekran o'quvchi iframe'ni “Toshkent markazi xaritasi” deb ataydi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Uchinchi tomon iframe'i",
            html: "Begona sahifani joylashtirsangiz, uning mazmuni va cookie'lariga ishonishga to'g'ri keladi. Faqat zarur manbalarni qo'shing, <code>title</code> yozing va imkon bo'lsa <code>sandbox</code> hamda <code>allow</code> atributlarini cheklang.",
          },
        ],
        quiz: [
          {
            q: "Videoga subtitr qo'shish uchun qaysi element ishlatiladi?",
            options: ["caption", "subtitle", "track", "text"],
            answer: 2,
            explain: "track kind=\"captions\" bo'lgan subtitr faylini (masalan, VTT) videoga bog'laydi.",
          },
          {
            q: "iframe'ga title atributi nima uchun kerak?",
            options: ["Ekran o'quvchiga ramka mazmunini aytish uchun", "Ichki sahifani tezlashtirish uchun", "Ramka rangini o'zgartirish uchun", "Faylni yuklab olish uchun"],
            answer: 0,
            explain: "title iframe uchun accessibility nomi bo'lib, foydalanuvchi ichida nima borligini biladi.",
          },
          {
            q: "preload=\"none\" audio uchun nimani bildiradi?",
            options: ["Fayl umuman yuklanmaydi", "Faqat metama'lumot yuklanadi", "Ovoz o'chiriladi", "Faylni foydalanuvchi ijro bosguncha yuklamaslik"],
            answer: 3,
            explain: "preload=\"none\" brauzerga faylni oldindan yuklamaslikni, faqat foydalanuvchi ijro bosganda yuklashni bildiradi.",
          },
        ],
      },
      {
        id: 18,
        title: "Metadata va SEO: sahifani qidiruvga tayyorlash",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Qidiruv tizimi va ijtimoiy tarmoqlar sahifangizni <code>head</code> ichidagi metama'lumotlardan taniydi. Yaxshi <code>title</code> va <code>description</code> foydalanuvchini bosishga undaydi; <code>canonical</code> esa bir xil mazmunning asosiy manzilini ko'rsatadi.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aziza Karimova — frontend dasturchi</title>
  <meta name="description"
        content="Toshkentdagi frontend dasturchi. HTML, CSS va JavaScript bilan tez, qulay saytlar yarataman.">
  <link rel="canonical" href="https://aziza.uz/">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#5b4df6">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Aziza Karimova — frontend dasturchi">
  <meta property="og:description" content="Tez va qulay veb-saytlar yarataman.">
  <meta property="og:image" content="https://aziza.uz/og-cover.jpg">
  <meta property="og:url" content="https://aziza.uz/">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
</head>
<body>
  <h1>Aziza Karimova</h1>
  <p>Frontend dasturchi.</p>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Brauzer yorlig'ida “Aziza Karimova — frontend dasturchi” ko'rinadi. Qidiruv natijasida shu sarlavha va tavsif chiqadi; havola Telegram yoki X'da ulashilganda og:title, og:description va og:image asosida karta shakllanadi.",
          },
          {
            type: "table",
            head: ["Teg", "Vazifasi"],
            rows: [
              ["<code>title</code>", "Sahifa nomi; qidiruv natijasining sarlavhasi"],
              ["<code>meta description</code>", "Qidiruv ostidagi qisqa tavsif"],
              ["<code>link canonical</code>", "Asosiy manzilni bildiradi"],
              ["<code>meta robots</code>", "Indekslash va havolalarni kuzatish qoidasi"],
              ["<code>og:*</code>", "Ijtimoiy tarmoq kartasi ma'lumotlari"],
              ["<code>theme-color</code>", "Mobil brauzer paneli rangi"],
            ],
          },
          {
            type: "code",
            title: "schema.html",
            code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aziza Karimova",
  "jobTitle": "Frontend dasturchi",
  "url": "https://aziza.uz/",
  "sameAs": [
    "https://github.com/aziza",
    "https://www.linkedin.com/in/aziza"
  ]
}
</script>`,
            outputLabel: "Natija",
            output: "Sahifada hech qanday matn o'zgarmaydi. Qidiruv boti skript ichidagi JSON-LD'ni o'qib, sahifani “Frontend dasturchi” kasbidagi Aziza Karimova degan shaxs sifatida tushunadi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Sarlavhani takrorlamang",
            html: "Har bir sahifaning <code>title</code> va <code>description</code> matni o'ziga xos bo'lsin. Kalit so'zlarni tiqishtirmang: foydalanuvchi uchun aniq va halol yozing. SEO — bu texnik tozalik va foydali mazmunning natijasi.",
          },
        ],
        quiz: [
          {
            q: "Bir xil mazmun bir nechta manzilda ochilsa, asosiy manzilni qaysi teg ko'rsatadi?",
            options: ["meta robots", "link canonical", "og:url", "base"],
            answer: 1,
            explain: "link rel=\"canonical\" qidiruv tizimiga qaysi manzil asosiy ekanini bildiradi.",
          },
          {
            q: "Qidiruv natijasida sarlavha ostidagi qisqa tavsifni qaysi meta beradi?",
            options: ["meta keywords", "meta author", "meta description", "meta viewport"],
            answer: 2,
            explain: "meta name=\"description\" qidiruv snipeti uchun qisqa tavsif beradi.",
          },
          {
            q: "Havola ijtimoiy tarmoqda ulashilganda karta rasmini qaysi meta belgilaydi?",
            options: ["og:image", "og:type", "twitter:card", "theme-color"],
            answer: 0,
            explain: "og:image Open Graph kartasida ko'rinadigan rasm manzilini bildiradi.",
          },
        ],
      },
      {
        id: 19,
        title: "SVG: masshtablanadigan grafik va ikonkalar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "SVG — vektor format: chiziqlar va shakllar matematik koordinatalar bilan saqlanadi, shuning uchun sifat yo'qolmasdan kattalashadi. Logo, ikonka va diagrammalar uchun juda qulay. Inline SVG'ni CSS bilan bezash va <code>currentColor</code> orqali matn rangiga moslash mumkin.",
          },
          {
            type: "code",
            title: "logo.html",
            code: `<svg viewBox="0 0 160 48" width="160" height="48"
     role="img" aria-labelledby="logo-nomi">
  <title id="logo-nomi">Noldan logotipi</title>
  <rect x="0" y="0" width="48" height="48" rx="12" fill="#5b4df6"/>
  <path d="M14 34V14l20 20V14" fill="none"
        stroke="#ffffff" stroke-width="4"
        stroke-linecap="round" stroke-linejoin="round"/>
  <text x="60" y="32" font-family="system-ui, sans-serif"
        font-size="22" font-weight="700" fill="#1f2937">Noldan</text>
</svg>`,
            outputLabel: "Natija",
            output: "48×48 binafsha yumaloq kvadrat ichida oq “N” shakli, uning o'ng tomonida “Noldan” yozuvi chiqadi. Butun logo 160×48 o'lchamda, sifat yo'qotmasdan kattalashtirish mumkin; ekran o'quvchi uni “Noldan logotipi” deb o'qiydi.",
          },
          {
            type: "table",
            head: ["Element yoki atribut", "Vazifasi"],
            rows: [
              ["<code>viewBox</code>", "Ichki koordinata tizimi va nisbatni belgilaydi"],
              ["<code>rect</code>", "To'rtburchak chizadi"],
              ["<code>circle</code>", "Aylana chizadi"],
              ["<code>path</code>", "Murakkab chiziq va shakllar"],
              ["<code>fill</code>", "Ichki to'ldirish rangi"],
              ["<code>stroke</code>", "Chiziq rangi va qalinligi"],
            ],
          },
          {
            type: "code",
            title: "ikonka.html",
            code: `<button class="icon-btn" type="button" aria-label="Sozlamalar">
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"
          stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
</button>

<style>
  .icon-btn {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 50%;
    background: #ede9ff;
    color: #4735e0;
    cursor: pointer;
  }
  .icon-btn:hover { color: #ffffff; background: #5b4df6; }
</style>`,
            outputLabel: "Natija",
            output: "44×44 dumaloq tugma ichida binafsha rangli quyosh/sozlama ikonkasi ko'rinadi. Tugma ustiga sichqoncha kelganda fon binafsha, ikonka esa oq rangga o'tadi; o'lcham o'zgarmaydi. Ekran o'quvchi faqat “Sozlamalar” tugmasini e'lon qiladi.",
          },
          {
            type: "note",
            variant: "info",
            title: "SVG fayl yoki inline?",
            html: "Ko'p ishlatiladigan katta rasmlar uchun <code>&lt;img src=\"logo.svg\"&gt;</code> qulay. Rangni CSS orqali o'zgartirish yoki animatsiya qilish kerak bo'lsa, inline SVG ishlating. Ikonka tugma ichida bo'lsa, unga <code>aria-hidden=\"true\"</code> qo'yib, nomni tugmaga bering.",
          },
        ],
        quiz: [
          {
            q: "SVG'da ichki koordinata tizimini qaysi atribut belgilaydi?",
            options: ["width", "preserveAspectRatio", "d", "viewBox"],
            answer: 3,
            explain: "viewBox SVG ichidagi koordinatalar maydonini va nisbatini belgilaydi.",
          },
          {
            q: "inline SVG rangi matn rangiga ergashishi uchun qaysi qiymat ishlatiladi?",
            options: ["inheritColor", "currentColor", "textColor", "auto"],
            answer: 1,
            explain: "fill yoki stroke uchun currentColor joriy matn rangini oladi.",
          },
          {
            q: "Tugma ichidagi mazmuniy bo'lmagan ikonka uchun qaysi yondashuv to'g'ri?",
            options: ["SVG'ga alohida aria-label berish", "Ikonkani butunlay olib tashlash", "SVG'ni aria-hidden qilib, nomni tugmaga berish", "SVG'ga title va tugmaga aria-hidden berish"],
            answer: 2,
            explain: "Tugma nomi allaqachon bor; ikonka bezak bo'lsa, uni aria-hidden qilish ortiqcha takrorlanishning oldini oladi.",
          },
        ],
      },
{
        id: 20,
        title: "CSS o'lchov birliklari: px, rem, em va viewport",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "CSS'da o'lchamni faqat piksel bilan berish moslashuvchanlikni cheklaydi. <code>rem</code> ildiz shriftiga, <code>em</code> ota-element shriftiga, <code>%</code> ota-element o'lchamiga bog'lanadi. <code>vw</code>, <code>vh</code>, <code>svh</code> va <code>dvh</code> esa ko'rinish maydoni bilan ishlaydi.",
          },
          {
            type: "code",
            title: "olcham.css",
            lang: "css",
            code: `:root {
  font-size: 16px;
}

body {
  font-size: 1rem;
  line-height: 1.6;
}

.article {
  max-width: 65ch;
  padding: 1.5rem;
  font-size: 1.125rem;
}

.article h2 {
  font-size: 1.6em;
  margin-bottom: 0.5em;
}`,
            outputLabel: "Natija",
            output: "Asosiy matn 16px, maqola matni 18px (1.125rem) o'lchamda chiqadi va satr uzunligi 65 belgidan oshmaydi. Maqola ichidagi h2 esa ota-elementning 18px o'lchamiga nisbatan 1.6em, ya'ni 28.8px bo'ladi.",
          },
          {
            type: "table",
            head: ["Birlik", "Nimaga nisbatan hisoblanadi"],
            rows: [
              ["<code>px</code>", "Qurilma pikseli; aniq, lekin moslashuvchan emas"],
              ["<code>rem</code>", "html ildizining shrift o'lchami"],
              ["<code>em</code>", "Joriy yoki ota-elementning shrift o'lchami"],
              ["<code>%</code>", "Ota-elementning tegishli o'lchami"],
              ["<code>ch</code>", "“0” belgisining kengligi; o'qish uzunligi uchun"],
              ["<code>vw / vh</code>", "Ko'rinish maydonining 1 foizi"],
            ],
          },
          {
            type: "code",
            title: "hero.css",
            lang: "css",
            code: `.hero {
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: clamp(1rem, 5vw, 4rem);
  background: #ede9ff;
}

.hero__card {
  width: min(100%, 32rem);
  padding: 2rem;
  background: #ffffff;
  border-radius: 1.5rem;
}`,
            outputLabel: "Natija",
            output: "Hero bo'limi mobil brauzerning eng kichik ko'rinish balandligini to'liq egallaydi; manzil paneli yashirilganda sahifa sakramaydi. Karta kengligi 512px dan oshmaydi, yon bo'shliq esa ekranga qarab 16px dan 64px gacha o'zgaradi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Birliklarni aralashtiring",
            html: "Shrift va bo'shliqlar uchun <code>rem</code>, komponent ichidagi nisbatlar uchun <code>em</code>, sahifa chegarasi uchun <code>ch</code> yoki <code>%</code> qulay. <code>svh</code> — kichik, <code>lvh</code> — katta, <code>dvh</code> — o'zgaruvchan mobil ko'rinish balandligi.",
          },
        ],
        quiz: [
          {
            q: "rem birligi nimaga nisbatan hisoblanadi?",
            options: ["html ildizining shrift o'lchamiga", "Ota-element shriftiga", "Ekran kengligiga", "Joriy element balandligiga"],
            answer: 0,
            explain: "rem root em degani: u html elementining shrift o'lchamiga bog'lanadi.",
          },
          {
            q: "em birligi odatda nimaga nisbatan hisoblanadi?",
            options: ["Doim 16px ga", "Ekran balandligiga", "Faqat viewport kengligiga", "Joriy yoki ota-elementning shrift o'lchamiga"],
            answer: 3,
            explain: "em joriy kontekstdagi shrift o'lchamidan kelib chiqadi, shuning uchun ichma-ich elementlarda qiymat o'zgarishi mumkin.",
          },
          {
            q: "Mobil brauzer paneli yashirilganda o'zgaradigan ko'rinish balandligi qaysi birlik bilan eng aniq ifodalanadi?",
            options: ["px", "dvh", "ch", "vw"],
            answer: 1,
            explain: "dvh dynamic viewport height bo'lib, mobil brauzer paneli holatiga qarab o'zgaradi.",
          },
        ],
      },
      {
        id: 21,
        title: "Kaskad va specificity: qaysi qoida g'olib chiqadi?",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Bir elementga bir nechta qoida tegishi mumkin. Brauzer ularni <b>kaskad</b> bo'yicha tartiblaydi: muhimlik, kelib chiqish, qatlam, specificity va manba tartibi. <b>Specificity</b> — selektorning “og'irligi”; teng bo'lsa, keyinroq yozilgan qoida g'olib bo'ladi.",
          },
          {
            type: "code",
            title: "kaskad.html",
            code: `<p id="intro" class="card">Salom, CSS!</p>

<style>
  .card { color: #1f2937; }
  .card { color: #5b4df6; }
  #intro { color: #b91c1c; }
  p { color: #15803d; }
</style>`,
            outputLabel: "Natija",
            output: "Matn qizil (#b91c1c) rangda chiqadi. Ikki .card qoidasidan keyingisi g'olib bo'lardi, lekin #intro id selektori undan ham yuqori specificity'ga ega; p qoidasi esa eng past og'irlikda qoladi.",
          },
          {
            type: "table",
            head: ["Selektor turi", "Misol", "Og'irlik"],
            rows: [
              ["Inline uslub", "<code>style=\"color: red\"</code>", "1-0-0-0"],
              ["ID", "<code>#intro</code>", "0-1-0-0"],
              ["Class, atribut, pseudo-class", "<code>.card</code>, <code>[type]</code>, <code>:hover</code>", "0-0-1-0"],
              ["Element, pseudo-element", "<code>p</code>, <code>::before</code>", "0-0-0-1"],
              ["Universal", "<code>*</code>", "0-0-0-0"],
            ],
          },
          {
            type: "code",
            title: "qatlamlar.html",
            code: `<style>
  @layer reset, base, components;

  @layer components {
    .btn { background: #5b4df6; color: #ffffff; }
  }

  @layer base {
    .btn { background: #111827; color: #ffffff; }
  }
</style>

<button class="btn" type="button">Saqlash</button>`,
            outputLabel: "Natija",
            output: "Tugma binafsha (#5b4df6) fonda oq matn bilan chiqadi. Garchi base qatlami keyinroq yozilgan bo'lsa ham, qatlamlar tartibida components yuqoriroq turadi va uning qoidasi qo'llanadi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "!important — oxirgi chora",
            html: "<code>!important</code> specificity'ni chetlab o'tadi va keyingi tuzatishlarni qiyinlashtiradi. Avval selektorni soddalashtiring, qatlamlardan foydalaning; <code>!important</code>ni faqat tashqi kutubxona uslubini majburan bekor qilish kabi istisno holatlarda qoldiring.",
          },
        ],
        quiz: [
          {
            q: "Bir elementda #intro va .card qoidalari to'qnashsa, odatda qaysi biri g'olib?",
            options: [".card, chunki u qisqa", "Ikkalasi ham qo'llanadi", "#intro, chunki id selektori og'irligi yuqori", "p qoidasi g'olib"],
            answer: 2,
            explain: "ID selektorining specificity og'irligi class selektoridan yuqori.",
          },
          {
            q: "Bir xil specificity'ga ega ikkita qoida bir elementga tegishli bo'lsa, nima hal qiladi?",
            options: ["Qaysi biri keyinroq yozilgani", "Fayl hajmi", "Selektor uzunligi", "HTML atributlari soni"],
            answer: 0,
            explain: "Teng og'irlikda manba tartibi hal qiladi: keyingi qoida oldingisini bosib ketadi.",
          },
          {
            q: "Ota-elementdan meros olingan rangni nima o'zgartiradi?",
            options: ["Faqat HTML sarlavhasi", "Fayl nomi", "Meta viewport", "Bolaga bevosita qo'llangan rang qoidasi"],
            answer: 3,
            explain: "Meros olingan qiymatdan ko'ra bolaga to'g'ridan-to'g'ri berilgan qoida ustun turadi.",
          },
        ],
      },
      {
        id: 22,
        title: "Pseudo-classlar: holat va tuzilish selektorlari",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Pseudo-class elementning <b>holatini</b> yoki ro'yxatdagi <b>o'rnini</b> tanlaydi: <code>:hover</code>, <code>:focus-visible</code>, <code>:checked</code>, <code>:disabled</code>, <code>:nth-child()</code>, <code>:not()</code>. Ular HTML'ni o'zgartirmasdan interaktiv uslublar yaratadi.",
          },
          {
            type: "code",
            title: "holatlar.html",
            code: `<style>
  .nav a { color: #1f2937; text-decoration: none; }
  .nav a:hover { color: #5b4df6; text-decoration: underline; }
  .nav a:focus-visible { outline: 3px solid #5b4df6; outline-offset: 3px; }

  table { border-collapse: collapse; width: 100%; }
  td, th { padding: 0.5rem; border-bottom: 1px solid #e5e7eb; }
  tbody tr:nth-child(even) { background: #f3f4f6; }

  button:disabled { opacity: 0.5; cursor: not-allowed; }
</style>

<nav class="nav" aria-label="Asosiy">
  <a href="/">Bosh sahifa</a>
  <a href="/kurslar">Kurslar</a>
</nav>

<table>
  <tr><th>Kurs</th><th>Dars</th></tr>
  <tr><td>HTML</td><td>49</td></tr>
  <tr><td>CSS</td><td>30</td></tr>
  <tr><td>JavaScript</td><td>24</td></tr>
  <tr><td>Python</td><td>28</td></tr>
</table>

<button type="button" disabled>Yuborish</button>`,
            outputLabel: "Natija",
            output: "Menyu havolasi ustiga sichqoncha kelganda binafsha rang va tagchiziq oladi; klaviatura bilan tanlanganda atrofida ko'k-binafsha kontur chiqadi. Jadvalning 2 va 4-qatorlari och kulrang bo'ladi, “Yuborish” tugmasi esa xira ko'rinadi.",
          },
          {
            type: "table",
            head: ["Pseudo-class", "Nimani tanlaydi"],
            rows: [
              ["<code>:hover</code>", "Sichqoncha ustida turgan element"],
              ["<code>:focus-visible</code>", "Klaviatura fokusi ko'rinishi kerak bo'lgan element"],
              ["<code>:checked</code>", "Belgilangan checkbox yoki radio"],
              ["<code>:disabled</code>", "O'chirilgan forma elementi"],
              ["<code>:nth-child(2n)</code>", "Ota-elementning juft bolalari"],
              ["<code>:not(.x)</code>", "Class x bo'lmagan elementlar"],
            ],
          },
          {
            type: "code",
            title: "checkbox.html",
            code: `<label class="check">
  <input type="checkbox" checked>
  <span class="check__box" aria-hidden="true"></span>
  <span>Yangiliklarga obuna bo'lish</span>
</label>

<style>
  .check { display: flex; align-items: center; gap: 0.6rem; cursor: pointer; }
  .check input { position: absolute; opacity: 0; }
  .check__box {
    width: 1.25rem; height: 1.25rem;
    border: 2px solid #9ca3af; border-radius: 0.3rem;
    display: grid; place-items: center;
  }
  .check input:checked + .check__box {
    background: #5b4df6; border-color: #5b4df6;
  }
  .check input:checked + .check__box::after {
    content: ""; width: 0.3rem; height: 0.6rem;
    border: solid #ffffff; border-width: 0 2px 2px 0;
    transform: rotate(45deg) translateY(-1px);
  }
  .check input:focus-visible + .check__box {
    outline: 3px solid #5b4df6; outline-offset: 3px;
  }
</style>`,
            outputLabel: "Natija",
            output: "Kvadrat katak binafsha fonda oq belgi bilan ko'rinadi va yonida “Yangiliklarga obuna bo'lish” yozuvi turadi. Katak yoki matn bosilganda belgi yo'qoladi; klaviaturada Tab bilan kelganda kvadrat atrofida kontur paydo bo'ladi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Hover va focus birga",
            html: "Sichqoncha uchun <code>:hover</code>, klaviatura uchun <code>:focus-visible</code> yozing. <code>:focus</code> ham ishlaydi, lekin sichqoncha bosishida ham yonishi mumkin. Fokus uslubini hech qachon butunlay olib tashlamang.",
          },
        ],
        quiz: [
          {
            q: ":nth-child(2n) qaysi bolalarni tanlaydi?",
            options: ["Faqat ikkinchisini", "Juft tartib raqamli bolalarni", "Toq tartib raqamli bolalarni", "Barcha bolalarni"],
            answer: 1,
            explain: "2n juft sonlarni beradi: 2, 4, 6 va hokazo. Toqlar uchun 2n+1 ishlatiladi.",
          },
          {
            q: "Qaysi pseudo-class faqat klaviatura bilan fokuslanganda ko'rinadigan uslub beradi?",
            options: [":active", ":hover", ":focus-visible", ":visited"],
            answer: 2,
            explain: ":focus-visible brauzerga fokusning klaviatura uchun ko'rinishi kerakligini bildiradi.",
          },
          {
            q: "Birorta classga ega bo'lmagan elementlarni tanlash uchun qaysi yozuv ishlatiladi?",
            options: [":not(.x)", ":has(.x)", ":is(.x)", ":where(.x)"],
            answer: 0,
            explain: ":not() inkor qiladi, shuning uchun :not(.x) class x bo'lmagan elementlarni tanlaydi.",
          },
        ],
      },
      {
        id: 23,
        title: "Pseudo-elementlar: ::before, ::after va boshqalar",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Pseudo-element elementning <b>bir qismini</b> yoki uning atrofidagi qo'shimcha qatlamni tanlaydi. <code>::before</code> va <code>::after</code> dekorativ shakllar yaratadi, ammo mazmuniy matnni ularga yozish tavsiya etilmaydi — ekran o'quvchi uni o'qimasligi mumkin.",
          },
          {
            type: "code",
            title: "quote.css",
            lang: "css",
            code: `blockquote {
  position: relative;
  margin: 2rem 0;
  padding: 1.25rem 2.5rem;
  background: #f5f3ff;
  border-radius: 0.75rem;
  font-size: 1.125rem;
}

blockquote::before,
blockquote::after {
  position: absolute;
  font-size: 3rem;
  line-height: 1;
  color: #a78bfa;
}

blockquote::before { content: "“"; top: 0.5rem; left: 0.75rem; }
blockquote::after { content: "”"; bottom: -0.25rem; right: 0.75rem; }

::selection { background: #c9f26b; color: #1f2937; }`,
            outputLabel: "Natija",
            output: "Iqtibos och binafsha fonda chap yuqorida katta “ va o'ng pastda ” belgilari bilan chiqadi. Matnning bir qismini sichqoncha bilan belgilaganda tanlov yashil (#c9f26b) fonda, to'q matn bilan ko'rinadi.",
          },
          {
            type: "table",
            head: ["Pseudo-element", "Vazifasi"],
            rows: [
              ["<code>::before</code>", "Element boshiga dekorativ qatlam qo'shadi"],
              ["<code>::after</code>", "Element oxiriga dekorativ qatlam qo'shadi"],
              ["<code>::marker</code>", "Ro'yxat belgisi yoki raqamini bezaydi"],
              ["<code>::placeholder</code>", "Input ichidagi maslahat matnini bezaydi"],
              ["<code>::selection</code>", "Foydalanuvchi belgilagan matn uslubi"],
              ["<code>::first-line</code>", "Paragrafning birinchi qatori"],
            ],
          },
          {
            type: "code",
            title: "royxat.html",
            code: `<style>
  ol { padding-left: 1.5rem; }
  ol li { padding: 0.25rem 0; }
  ol li::marker { color: #5b4df6; font-weight: 700; }

  .hint {
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    padding: 0.75rem;
    font-size: 1rem;
  }
  .hint::placeholder { color: #6b7280; opacity: 1; }
  .lead::first-line { font-weight: 700; color: #1f2937; }
</style>

<ol>
  <li>HTML tuzilmasini yozish</li>
  <li>CSS bilan bezash</li>
  <li>Telefonda tekshirish</li>
</ol>

<input class="hint" type="text" placeholder="Ismingizni kiriting">
<p class="lead">Bu uzun matnning birinchi qatori qalinroq va to'qroq ko'rinadi. Qolgan qatorlar oddiy uslubda davom etadi.</p>`,
            outputLabel: "Natija",
            output: "Ro'yxat raqamlari (1, 2, 3) binafsha va qalin ko'rinadi. Maydon ichidagi “Ismingizni kiriting” maslahati kulrang, ammo to'liq o'qiladi. Paragrafning faqat birinchi qatori qalin va to'q rangda, keyingi qatorlar odatdagi uslubda chiqadi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "content bo'lmasa ko'rinmaydi",
            html: "<code>::before</code> va <code>::after</code> uchun <code>content</code> xossasi majburiy. Bo'sh dekorativ shakl uchun <code>content: \"\"</code> yozing. Muhim matnni bu yerda yashirmang: HTML'da bo'lmagan mazmun qidiruv va accessibility uchun yo'qolishi mumkin.",
          },
        ],
        quiz: [
          {
            q: "::before va ::after ko'rinishi uchun qaysi xossa majburiy?",
            options: ["display", "position", "visibility", "content"],
            answer: 3,
            explain: "content xossasi bo'lmasa, ::before va ::after odatda yaratilmaydi.",
          },
          {
            q: "Ro'yxatdagi nuqta yoki raqamning rangini qaysi pseudo-element boshqaradi?",
            options: ["::first-line", "::marker", "::placeholder", "::selection"],
            answer: 1,
            explain: "::marker ro'yxat belgisi va tartib raqamini bezash uchun ishlatiladi.",
          },
          {
            q: "Foydalanuvchi sichqoncha bilan belgilagan matn rangini qaysi pseudo-element o'zgartiradi?",
            options: ["::highlight", "::target-text", "::selection", "::focus"],
            answer: 2,
            explain: "::selection tanlangan matnning fon va matn rangini boshqaradi.",
          },
        ],
      },
      {
        id: 24,
        title: "Position va z-index: qatlamlarni boshqarish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Oddiy hujjat oqimida elementlar ketma-ket joylashadi. <code>position</code> ularni oqimdan chiqarish yoki yopishish imkonini beradi. <code>z-index</code> esa bir-birining ustiga tushgan qatlamlarning tartibini belgilaydi, lekin faqat ma'lum sharoitlarda ishlaydi.",
          },
          {
            type: "code",
            title: "badge.css",
            lang: "css",
            code: `.card {
  position: relative;
  width: 18rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: #ffffff;
}

.card__badge {
  position: absolute;
  top: -0.75rem;
  right: -0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: #5b4df6;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
}`,
            outputLabel: "Natija",
            output: "Karta o'z joyida qoladi, “Yangi” badge esa uning o'ng yuqori burchagidan tashqariga chiqib turadi. Badge kartaning padding va chegara hududiga ta'sir qilmaydi, chunki u absolutely joylashtirilgan.",
          },
          {
            type: "table",
            head: ["Qiymat", "Harakat"],
            rows: [
              ["<code>static</code>", "Odatiy oqim; top/left ishlamaydi"],
              ["<code>relative</code>", "O'z joyidan siljiydi, asl joyi saqlanadi"],
              ["<code>absolute</code>", "Eng yaqin positioned otaga nisbatan joylashadi"],
              ["<code>fixed</code>", "Ko'rinish maydoniga nisbatan qotib turadi"],
              ["<code>sticky</code>", "Skroll paytida belgilangan chegarada yopishadi"],
            ],
          },
          {
            type: "code",
            title: "sticky.html",
            code: `<style>
  body { margin: 0; font-family: system-ui, sans-serif; }
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 1rem;
    background: #1f2937;
    color: #ffffff;
  }
  .content { height: 160vh; padding: 2rem; }
  .to-top {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 20;
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: 50%;
    background: #5b4df6;
    color: #ffffff;
    font-size: 1.25rem;
  }
</style>

<header class="site-header">Noldan</header>
<main class="content">
  <h1>Uzun sahifa</h1>
  <p>Pastga skroll qiling.</p>
</main>
<button class="to-top" type="button" aria-label="Yuqoriga qaytish">↑</button>`,
            outputLabel: "Natija",
            output: "Sahifa pastga skroll qilinganda “Noldan” sarlavhasi ekranning yuqorisiga yopishib qoladi. “↑” tugmasi esa skrolldan qat'i nazar o'ng pastki burchakda turadi va bosilganda yuqoriga qaytish uchun ishlatilishi mumkin.",
          },
          {
            type: "note",
            variant: "warning",
            title: "z-index nega ishlamayapti?",
            html: "Oddiy oqimdagi <code>static</code> elementga <code>z-index</code> ta'sir qilmaydi. Uni <code>relative</code>, <code>absolute</code>, <code>fixed</code> yoki <code>sticky</code> qiling. Ota-elementda <code>transform</code>, <code>filter</code> yoki <code>opacity &lt; 1</code> bo'lsa, yangi stacking context paydo bo'lib, tartib kutilgandan boshqacha bo'lishi mumkin.",
          },
        ],
        quiz: [
          {
            q: "absolute element qaysi elementga nisbatan joylashadi?",
            options: ["Eng yaqin positioned ota-elementga", "Har doim body'ga", "Faqat o'ziga", "Ko'rinish maydoniga"],
            answer: 0,
            explain: "Agar ota positioned bo'lmasa, absolute element body yoki boshlang'ich containing block'ga tayanadi; odatda ota relative qilinadi.",
          },
          {
            q: "Qaysi position qiymati skroll paytida belgilangan nuqtada yopishib qoladi?",
            options: ["static", "absolute", "fixed", "sticky"],
            answer: 3,
            explain: "sticky top yoki bottom chegarasiga yetganda yopishadi; fixed esa doim ko'rinish maydoniga bog'lanadi.",
          },
          {
            q: "z-index qaysi elementlarda odatda ishlaydi?",
            options: ["Faqat static elementlarda", "Positioned elementlarda", "Faqat inline matnda", "Faqat jadval kataklarida"],
            answer: 1,
            explain: "z-index positioned elementlar va ba'zi flex/grid bolalarida qatlam tartibini boshqaradi; static elementda ta'sir qilmaydi.",
          },
        ],
      },
      {
        id: 25,
        title: "Transitions: silliq holat o'zgarishlari",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "<code>transition</code> ikki holat orasidagi o'zgarishni vaqt bo'yicha yumshatadi: masalan, hover'dagi rang yoki o'lcham sakrash o'rniga silliq o'tadi. U faqat <b>o'zgaruvchan</b> xossalarda ishlaydi va sahifa yuklanganda emas, holat almashganda ishga tushadi.",
          },
          {
            type: "code",
            title: "button.css",
            lang: "css",
            code: `.btn {
  padding: 0.8rem 1.25rem;
  border: 0;
  border-radius: 0.6rem;
  background: #5b4df6;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.25s ease,
              transform 0.25s ease,
              box-shadow 0.25s ease;
}

.btn:hover {
  background: #4735e0;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(31, 41, 55, 0.2);
}

.btn:active { transform: translateY(0); }`,
            outputLabel: "Natija",
            output: "Tugma ustiga sichqoncha kelganda fon 0.25 soniyada quyuqlashadi, tugma 2px yuqoriga ko'tariladi va yumshoq soya paydo bo'ladi. Bosilganda u o'z joyiga qaytadi; barcha o'tishlar silliq, sakrashsiz kechadi.",
          },
          {
            type: "table",
            head: ["Xossa", "Ma'nosi"],
            rows: [
              ["<code>transition-property</code>", "Qaysi xossa o'tadi"],
              ["<code>transition-duration</code>", "O'tish davomiyligi"],
              ["<code>transition-timing-function</code>", "Tezlik egri chizig'i: ease, linear, ease-in-out"],
              ["<code>transition-delay</code>", "Boshlanishdan oldingi kutish"],
              ["<code>transition</code>", "To'rt qiymatning qisqa yozuvi"],
            ],
          },
          {
            type: "code",
            title: "underline.css",
            lang: "css",
            code: `.nav a {
  position: relative;
  color: #1f2937;
  text-decoration: none;
  padding-bottom: 0.25rem;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav a:hover::after,
.nav a:focus-visible::after {
  transform: scaleX(1);
}`,
            outputLabel: "Natija",
            output: "Havola ostidagi chiziq boshida ko'rinmaydi. Sichqoncha ustiga kelganda yoki klaviatura fokusi tushganda chiziq chapdan o'ngga qarab 0.25 soniyada cho'ziladi va to'liq ko'rinadi.",
          },
          {
            type: "note",
            variant: "info",
            title: "Harakatni hurmat qiling",
            html: "Ba'zi foydalanuvchilar harakatdan bezovtalanadi. <code>@media (prefers-reduced-motion: reduce)</code> ichida animatsiya va o'tishlarni deyarli nolga tushiring. Bu qulaylik talabi, shunchaki bezak emas.",
          },
        ],
        quiz: [
          {
            q: "transition: background-color 0.3s ease yozuvida 0.3s nimani bildiradi?",
            options: ["Kechikishni", "Rang qiymatini", "O'tish davomiyligini", "Tezlik egri chizig'ini"],
            answer: 2,
            explain: "Shorthand'da ikkinchi vaqt qiymati duration, ya'ni o'tish davomiyligi hisoblanadi.",
          },
          {
            q: "Qaysi xossa holatlar orasidagi o'zgarishni vaqt bo'yicha yumshatadi?",
            options: ["transition", "animation", "transform", "filter"],
            answer: 0,
            explain: "transition xossa qiymati o'zgarganda oraliq holatlarni yaratadi.",
          },
          {
            q: "prefers-reduced-motion: reduce sozlamasi nimani bildiradi?",
            options: ["Brauzer videoni bloklaydi", "Faqat qora mavzu yoqilgan", "Sahifa oflayn rejimda", "Foydalanuvchi kam harakatli ko'rinishni afzal ko'radi"],
            answer: 3,
            explain: "Bu media xususiyati foydalanuvchining tizim sozlamasiga mos ravishda animatsiyalarni kamaytirish imkonini beradi.",
          },
        ],
      },
      {
        id: 26,
        title: "Transforms: siljitish, aylantirish va masshtablash",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "<code>transform</code> elementni oqimdan chiqarmasdan vizual o'zgartiradi: <code>translate</code>, <code>scale</code>, <code>rotate</code>, <code>skew</code>. Natija qo'shni elementlar joylashuviga ta'sir qilmaydi, shuning uchun hover effektlari va murakkab kompozitsiyalar uchun qulay.",
          },
          {
            type: "code",
            title: "card.css",
            lang: "css",
            code: `.card {
  width: 16rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(31, 41, 55, 0.08);
  transform-origin: center bottom;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 18px 36px rgba(31, 41, 55, 0.16);
}`,
            outputLabel: "Natija",
            output: "Karta ustiga sichqoncha kelganda 8px yuqoriga siljiydi va 2% kattalashadi; soya chuqurlashadi. Atrofdagi elementlar joyidan qo'zg'almaydi, chunki transform layout o'lchamini o'zgartirmaydi.",
          },
          {
            type: "table",
            head: ["Funksiya", "Natijasi"],
            rows: [
              ["<code>translateX/Y</code>", "Elementni siljitadi"],
              ["<code>scale(1.1)</code>", "10% kattalashtiradi"],
              ["<code>rotate(45deg)</code>", "Soat mili yo'nalishida buradi"],
              ["<code>skewX(10deg)</code>", "Yon tomonlarini qiyshaytiradi"],
              ["<code>perspective()</code>", "3D chuqurlik effekti beradi"],
              ["<code>transform-origin</code>", "Aylanish markazini belgilaydi"],
            ],
          },
          {
            type: "code",
            title: "flip.html",
            code: `<div class="flip" tabindex="0">
  <div class="flip__inner">
    <div class="flip__face flip__front">Old tomon</div>
    <div class="flip__face flip__back">Orqa tomon</div>
  </div>
</div>

<style>
  .flip {
    width: 12rem;
    height: 8rem;
    perspective: 800px;
  }
  .flip__inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
  }
  .flip:hover .flip__inner,
  .flip:focus-within .flip__inner {
    transform: rotateY(180deg);
  }
  .flip__face {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    border-radius: 1rem;
    backface-visibility: hidden;
    color: #ffffff;
    font-weight: 700;
  }
  .flip__front { background: #5b4df6; }
  .flip__back { background: #1f2937; transform: rotateY(180deg); }
</style>`,
            outputLabel: "Natija",
            output: "Binafsha kartada “Old tomon” yozuvi ko'rinadi. Ustiga sichqoncha kelganda yoki Tab bilan fokuslanganda karta 0.6 soniyada o'z o'qi atrofida aylanib, to'q rangli “Orqa tomon” yuzini ko'rsatadi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Tartib muhim",
            html: "<code>translateY(-8px) scale(1.02)</code> va <code>scale(1.02) translateY(-8px)</code> bir xil natija bermasligi mumkin: transformlar yozilish tartibida qo'llanadi. <code>translate(-50%, -50%)</code> bilan markazlashda esa bu tartibni alohida tekshiring.",
          },
        ],
        quiz: [
          {
            q: "transform qo'llanganda elementning oqimdagi joyi qanday o'zgaradi?",
            options: ["Butunlay yo'qoladi", "Vizual o'zgaradi, layout joyi saqlanadi", "Qo'shni elementlar ham siljiydi", "Faqat mobil ekranda o'zgaradi"],
            answer: 1,
            explain: "Transform paint va compositing bosqichida ishlaydi; u elementning layout o'lchami va oqimidagi joyini o'zgartirmaydi.",
          },
          {
            q: "translate(-50%, -50%) odatda nima uchun ishlatiladi?",
            options: ["Shriftni kichraytirish uchun", "Rasmni siqish uchun", "Elementni markazga joylash uchun", "Jadvalni aylantirish uchun"],
            answer: 2,
            explain: "Element o'z kengligi va balandligining yarmiga siljib, absolute markazlashda markazga tushadi.",
          },
          {
            q: "3D aylanishda orqa tomonni yashirish uchun qaysi xossa ishlatiladi?",
            options: ["backface-visibility: hidden", "overflow: hidden", "display: none", "z-index: -1"],
            answer: 0,
            explain: "backface-visibility: hidden elementning orqa yuzi ko'rinmasligini ta'minlaydi.",
          },
        ],
      },
{
        id: 27,
        title: "CSS animatsiyalari: @keyframes bilan harakat",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Transition holat o'zgarishini yumshatsa, <b>animatsiya</b> vaqt bo'yicha bir nechta bosqichni o'zi ijro etadi. <code>@keyframes</code> kadrlarni belgilaydi, <code>animation</code> esa nom, davomiylik, takrorlanish va to'xtash holatini boshqaradi.",
          },
          {
            type: "code",
            title: "loader.css",
            lang: "css",
            code: `.dot {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: #5b4df6;
  animation: pulse 1.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.35); opacity: 0.55; }
}

@media (prefers-reduced-motion: reduce) {
  .dot { animation: none; }
}`,
            outputLabel: "Natija",
            output: "Binafsha nuqta 1.4 soniyalik sikl bilan kattalashib-kichrayadi va yarim yo'lda xiralashadi; sikl cheksiz takrorlanadi. Tizimda kam harakat sozlamasi yoqilgan bo'lsa, nuqta qimirlamaydi.",
          },
          {
            type: "table",
            head: ["Xossa", "Vazifasi"],
            rows: [
              ["<code>animation-name</code>", "Keyframes nomi"],
              ["<code>animation-duration</code>", "Bir sikl davomiyligi"],
              ["<code>animation-iteration-count</code>", "Necha marta takrorlanishi"],
              ["<code>animation-direction</code>", "normal, reverse, alternate"],
              ["<code>animation-fill-mode</code>", "Boshlanish va tugash holatini saqlash"],
              ["<code>animation-delay</code>", "Boshlanishdan oldingi kutish"],
            ],
          },
          {
            type: "code",
            title: "cards.css",
            lang: "css",
            code: `.card {
  opacity: 0;
  animation: rise 0.5s ease-out forwards;
}

.card:nth-child(2) { animation-delay: 0.1s; }
.card:nth-child(3) { animation-delay: 0.2s; }

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    opacity: 1;
    animation: none;
    transform: none;
  }
}`,
            outputLabel: "Natija",
            output: "Uchta karta sahifa ochilganda pastdan 14px ko'tarilib, ko'rinadi. Birinchi karta darhol, ikkinchisi 0.1, uchinchisi 0.2 soniyadan keyin boshlanadi. Har biri 0.5 soniyada tugaydi va “forwards” tufayli ko'rinish holatida qoladi. Kam harakat sozlamasida kartalar darhol to'liq ko'rinadi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Harakatga ma'no bering",
            html: "Yuklanish, o'chirish yoki diqqatni jalb qilish kabi aniq maqsad uchun animatsiya qiling. <code>animation: none !important</code> bilan hammasini o'chirmang; <code>prefers-reduced-motion</code> ichida muloyim variant bering.",
          },
        ],
        quiz: [
          {
            q: "Animatsiya tugagach element oxirgi holatda qolishi uchun qaysi fill-mode ishlatiladi?",
            options: ["none", "backwards", "alternate", "forwards"],
            answer: 3,
            explain: "forwards oxirgi keyframe qiymatlarini animatsiya tugagandan keyin ham saqlaydi.",
          },
          {
            q: "Animatsiyani cheksiz takrorlash uchun qaysi qiymat beriladi?",
            options: ["loop", "infinite", "always", "repeat-all"],
            answer: 1,
            explain: "animation-iteration-count: infinite animatsiyani to'xtovsiz takrorlaydi.",
          },
          {
            q: "@keyframes ichida 50% nimani bildiradi?",
            options: ["Element kengligining yarmini", "50 marta takrorlanishni", "Animatsiya yarmi vaqtidagi holatni", "Faqat 50px siljishni"],
            answer: 2,
            explain: "Keyframes foizlari animatsiya vaqtining bosqichlarini bildiradi; 50% — davomiylikning yarmi.",
          },
        ],
      },
      {
        id: 28,
        title: "Responsive dizayn: mobil birinchi yondashuv",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Responsive dizayn — bitta sahifa turli ekranlarda qulay ishlashi. Eng ishonchli usul <b>mobile-first</b>: avval tor ekran uchun yozib, keyin <code>min-width</code> bilan kattaroq ekranlarga qatlam qo'shish. Tugmalar va havolalar barmoq bilan bosishga yetarli katta bo'lsin.",
          },
          {
            type: "code",
            title: "cards.css",
            lang: "css",
            code: `.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

.card {
  padding: 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: #ffffff;
}

@media (min-width: 40rem) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 60rem) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 2rem;
  }
}`,
            outputLabel: "Natija",
            output: "640px dan tor ekranda kartalar bitta ustunda, 640–959px oralig'ida ikkita, 960px va undan keng ekranda uchta ustunda chiqadi. Katta ekranda kartalar orasidagi masofa 16px dan 24px ga oshadi.",
          },
          {
            type: "table",
            head: ["Tamoyil", "Amaliy natija"],
            rows: [
              ["Mobile-first", "Asosiy uslub kichik ekran uchun, keyin min-width qo'shiladi"],
              ["Moslashuvchan o'lcham", "<code>max-width: 100%</code>, <code>min()</code>, <code>clamp()</code>"],
              ["Tegish maydoni", "Tugma va havola kamida ~44×44px"],
              ["Bitta ustun", "Tor ekranda matn va forma o'qishli qoladi"],
              ["Viewport meta", "Telefonda sahifa haqiqiy kenglikda ochiladi"],
            ],
          },
          {
            type: "code",
            title: "nav.css",
            lang: "css",
            code: `.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
}

.site-nav a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: #1f2937;
  text-decoration: none;
}

.site-nav a:hover { background: #f3f0ff; }

@media (max-width: 30rem) {
  .site-nav { flex-direction: column; align-items: stretch; }
  .site-nav a { justify-content: center; }
}`,
            outputLabel: "Natija",
            output: "Kengroq ekranda havolalar bir qatorda yonma-yon turadi va har biri kamida 44px balandlikda. 480px dan tor ekranda menyu ustun shaklida ochilib, havolalar markazga tekislanadi va bir-birini bosib ketmaydi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Aniq qurilma emas, mazmun",
            html: "Breakpoint'ni “iPhone uchun” deb emas, tarkib buzila boshlagan joyda tanlang. Matn juda uzun qatorga aylansa yoki kartalar siqilib qolsa, o'sha kenglikda yangi qoida qo'shing. <code>overflow-x: hidden</code> bilan muammoni yashirmang — sababini toping.",
          },
        ],
        quiz: [
          {
            q: "Mobile-first yondashuvda asosiy media so'rovlari qaysi xususiyat bilan yoziladi?",
            options: ["min-width", "max-width", "orientation", "prefers-color-scheme"],
            answer: 0,
            explain: "Avval mobil uslub yoziladi, keyin min-width bilan kattaroq ekranlar uchun qo'shimcha qoidalar beriladi.",
          },
          {
            q: "Telefonda sahifa kichik ko'rinmasligi uchun head ichida qaysi meta kerak?",
            options: ["meta description", "meta robots", "meta author", "meta viewport"],
            answer: 3,
            explain: "meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" sahifani qurilma kengligiga moslaydi.",
          },
          {
            q: "Barmoq bilan ishlatiladigan tugma uchun tavsiya etilgan minimal o'lcham qaysi?",
            options: ["10×10px", "44×44px", "20×20px", "100×100px"],
            answer: 1,
            explain: "44×44px atrofidagi tegish maydoni barmoq bilan ishonchli bosish uchun qulay hisoblanadi.",
          },
        ],
      },
      {
        id: 29,
        title: "Media queries: shartli uslublar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Media query faqat shart bajarilganda CSS qoidalarini qo'llaydi. Zamonaviy sintaksisda <code>min-width</code> va <code>max-width</code> o'rniga taqqoslash belgilarini ishlatish mumkin: <code>(width >= 48rem)</code>. Shartlar ekran, qurilma imkoniyati yoki foydalanuvchi sozlamasiga bog'lanadi.",
          },
          {
            type: "code",
            title: "breakpoints.css",
            lang: "css",
            code: `.layout { display: grid; grid-template-columns: 1fr; gap: 1rem; }

@media (30rem <= width < 48rem) {
  .layout { grid-template-columns: repeat(2, 1fr); }
}

@media (width >= 48rem) {
  .layout {
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
}`,
            outputLabel: "Natija",
            output: "480px dan tor ekranda bitta ustun, 480–767px oralig'ida ikkita teng ustun, 768px va undan keng ekranda esa 2:1 nisbatdagi ikkita ustun ko'rinadi. 768px dan boshlab ustunlar orasidagi masofa 32px bo'ladi.",
          },
          {
            type: "table",
            head: ["Media xususiyati", "Ma'nosi"],
            rows: [
              ["<code>width</code>", "Ko'rinish maydoni kengligi"],
              ["<code>orientation</code>", "portrait yoki landscape"],
              ["<code>hover</code>", "Qurilmada haqiqiy hover bormi"],
              ["<code>pointer</code>", "Barmoq, sichqoncha yoki qalam aniqligi"],
              ["<code>prefers-color-scheme</code>", "Yorug' yoki qorong'i mavzu tanlovi"],
              ["<code>prefers-reduced-motion</code>", "Harakatni kamaytirish sozlamasi"],
              ["<code>print</code>", "Chop etish rejimi"],
            ],
          },
          {
            type: "code",
            title: "imkoniyat.css",
            lang: "css",
            code: `.btn { background: #5b4df6; color: #ffffff; }

@media (hover: hover) and (pointer: fine) {
  .btn:hover { background: #4735e0; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: more) {
  .btn {
    border: 2px solid #ffffff;
    outline: 2px solid #1f2937;
  }
}`,
            outputLabel: "Natija",
            output: "Sichqonchali kompyuterda tugma hover'da quyuqlashadi, sensorli ekranda esa bu effekt qo'llanmaydi. Kam harakat sozlamasida animatsiyalar deyarli to'xtaydi. Yuqori kontrast sozlamasida tugma atrofida qo'shimcha oq va to'q kontur paydo bo'ladi.",
          },
          {
            type: "note",
            variant: "info",
            title: "Media query tartibi",
            html: "Bir xil specificity'dagi qoidalar orasida keyingi yozilgani ustun. Shuning uchun mobil uslubni avval, kattaroq ekran qoidalarini keyin yozing. Aks holda <code>max-width</code> qoidasi kutilmaganda kattaroq ekran uslubini bosib ketishi mumkin.",
          },
        ],
        quiz: [
          {
            q: "width >= 48rem sharti nimani bildiradi?",
            options: ["Kenglik 48rem dan kichik", "Faqat 48rem kenglik", "Kenglik 48rem ga teng yoki katta", "Balandlik 48rem"],
            answer: 2,
            explain: ">= belgisi teng yoki katta ma'nosini beradi; ya'ni 48rem va undan keng ekranlar.",
          },
          {
            q: "hover: none so'rovi qanday qurilmani bildiradi?",
            options: ["Hover imkoniyati yo'q sensorli qurilmani", "Sichqonchasi bor kompyuterni", "Faqat printeri", "Faqat ekran o'quvchini"],
            answer: 0,
            explain: "hover: none qurilmada sichqoncha ustida turish holati yo'qligini, odatda sensorli ekran ekanini bildiradi.",
          },
          {
            q: "Chop etish uchun alohida uslub qaysi media turida yoziladi?",
            options: ["@media screen", "@media speech", "all", "print"],
            answer: 3,
            explain: "Sahifa chop etilganda @media print ichidagi qoidalar qo'llanadi.",
          },
        ],
      },
      {
        id: 30,
        title: "clamp(), min() va max(): suyuq o'lchamlar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Suyuq tipografika uchun har bir breakpoint'da alohida <code>font-size</code> yozish shart emas. <code>clamp(min, preferred, max)</code> o'lchamni ekranga qarab moslaydi, lekin belgilangan chegaradan chiqmaydi. <code>min()</code> va <code>max()</code> esa ikkita qiymatdan mosini tanlaydi.",
          },
          {
            type: "code",
            title: "typography.css",
            lang: "css",
            code: `h1 {
  font-size: clamp(2rem, 1rem + 4vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.lead {
  font-size: clamp(1rem, 0.95rem + 0.4vw, 1.25rem);
  max-width: 60ch;
  color: #4b5563;
}`,
            outputLabel: "Natija",
            output: "320px ekranda h1 32px, 1440px ekranda esa 64px bo'ladi; oraliqda o'lcham ekran bilan birga silliq o'sadi. Kirish matni 16px dan 20px gacha o'zgaradi va 60 belgidan uzun qatorga cho'zilmaydi.",
          },
          {
            type: "table",
            head: ["Funksiya", "Tanlaydi"],
            rows: [
              ["<code>min(a, b)</code>", "Kichikroq qiymatni"],
              ["<code>max(a, b)</code>", "Kattaroq qiymatni"],
              ["<code>clamp(a, b, c)</code>", "b ni a va c oralig'ida cheklaydi"],
              ["<code>calc()</code>", "Turli birliklarni arifmetik hisoblaydi"],
              ["<code>min(100%, 40rem)</code>", "Tor ekranda 100%, keng ekranda 640px"],
            ],
          },
          {
            type: "code",
            title: "layout.css",
            lang: "css",
            code: `.container {
  width: min(100% - 2rem, 64rem);
  margin-inline: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
}

.hero {
  padding-block: max(3rem, 8vh);
  padding-inline: clamp(1rem, 5vw, 4rem);
}`,
            outputLabel: "Natija",
            output: "Konteyner yonlardan 16px bo'shliq bilan 1024px gacha kengayadi. Ustunlar 256px dan tor bo'lmaydi; 320px ekranda esa bitta ustunga tushadi. Hero vertikal bo'shlig'i kamida 48px, katta ekranda ko'rinish balandligining 8 foiziga teng bo'ladi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Foydalanuvchi zoomini bloklamang",
            html: "Suyuq shrift o'lchamlari foydalanuvchi kattalashtirishini almashtirmaydi. <code>font-size</code>ni <code>100vw</code> atrofida cheklovsiz bermang va <code>user-scalable=no</code> yozmang; matn kattalashtirilganda ham sahifa o'qishli qolishi kerak.",
          },
        ],
        quiz: [
          {
            q: "clamp(min, preferred, max) da o'rta qiymat nima vazifani bajaradi?",
            options: ["Minimal chegara", "Ekran bilan moslashuvchi asosiy qiymat", "Maksimal chegara", "Rang qiymati"],
            answer: 1,
            explain: "O'rta qiymat odatda vw yoki calc asosida bo'lib, min va max oralig'ida moslashadi.",
          },
          {
            q: "min(100%, 40rem) qaysi qiymatni tanlaydi?",
            options: ["Har doim 40rem", "Har doim 100%", "Ikki qiymatdan kichigini", "Ikki qiymat yig'indisini"],
            answer: 2,
            explain: "min() berilgan qiymatlarning eng kichigini oladi; tor ekranda 100%, keng ekranda 40rem bo'ladi.",
          },
          {
            q: "Suyuq sarlavha uchun qaysi yozuv eng mos?",
            options: ["font-size: clamp(2rem, 4vw + 1rem, 4rem)", "font-size: 48px", "font-size: 4vw !important", "font-size: 100%"],
            answer: 0,
            explain: "clamp minimal va maksimal chegarani saqlab, 4vw asosida moslashuvchan o'lcham beradi.",
          },
        ],
      },
      {
        id: 31,
        title: "CSS variables: mavzu va qayta ishlatiladigan qiymatlar",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "CSS custom property (odatda CSS variable) — <code>--</code> bilan boshlanadigan nom. U qiymatni bir joyda saqlab, <code>var()</code> orqali ko'p joyda ishlatish imkonini beradi. Rang, bo'shliq va shriftlarni tokenlarga aylantirsangiz, mavzuni almashtirish osonlashadi.",
          },
          {
            type: "code",
            title: "tokens.css",
            lang: "css",
            code: `:root {
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-accent: #5b4df6;
  --color-border: #e5e7eb;
  --radius: 0.75rem;
  --space: 1rem;
}

body {
  margin: 0;
  padding: var(--space);
  background: var(--color-bg);
  color: var(--color-text);
}

.card {
  padding: calc(var(--space) * 1.5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
}

.card a { color: var(--color-accent); }`,
            outputLabel: "Natija",
            output: "Sahifa och fon, oq karta, 16px asosiy bo'shliq va 24px ichki padding bilan chiqadi. Karta burchagi 12px yumaloq; ichidagi havola binafsha rangda. Birorta tokenni o'zgartirsangiz, unga bog'langan barcha elementlar birga yangilanadi.",
          },
          {
            type: "table",
            head: ["Yozuv", "Ma'nosi"],
            rows: [
              ["<code>--accent: #5b4df6</code>", "Custom property e'loni"],
              ["<code>var(--accent)</code>", "Qiymatni ishlatish"],
              ["<code>var(--accent, #333)</code>", "Qiymat bo'lmasa, zaxira qiymat"],
              ["<code>:root</code>", "Butun hujjat uchun ko'lam"],
              ["<code>.card { --accent: ... }</code>", "Faqat karta va uning bolalari uchun ko'lam"],
              ["<code>calc(var(--space) * 2)</code>", "Token bilan hisoblash"],
            ],
          },
          {
            type: "code",
            title: "scoped.css",
            lang: "css",
            code: `.card {
  --accent: #5b4df6;
  --surface: #ffffff;
  background: var(--surface);
  color: var(--color-text, #1f2937);
}

.card--dark {
  --accent: #c9f26b;
  --surface: #1f2937;
  color: #ffffff;
}

.card__btn {
  background: var(--accent);
  color: var(--color-text, #ffffff);
  padding: 0.5rem 0.9rem;
}`,
            outputLabel: "Natija",
            output: "Oddiy kartada oq fon va binafsha tugma, karta--dark variantida to'q fon va yashil tugma ko'rinadi. Tugma matni oq bo'ladi, chunki --color-text aniqlanmagan va var() zaxira qiymati ishlaydi. Ikkala karta bir xil komponent kodidan foydalanadi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Tokenlarga ma'no bering",
            html: "Rangni <code>--blue</code> deb emas, vazifasi bilan <code>--color-accent</code> deb nomlang. Shunda mavzu o'zgarganda nom yolg'on gapirmaydi. Sirlarni (masalan, API kalitlarini) CSS'ga yozmang — CSS fayl hammaga ochiq.",
          },
        ],
        quiz: [
          {
            q: "CSS custom property nomi qaysi belgilar bilan boshlanadi?",
            options: ["@", "$", "#", "--"],
            answer: 3,
            explain: "Custom property nomi ikki chiziqcha bilan boshlanadi, masalan --color-accent.",
          },
          {
            q: "var(--accent, #333) dagi #333 nima?",
            options: ["Asosiy qiymat", "Zaxira qiymat", "Izoh", "Selektor"],
            answer: 1,
            explain: "Custom property topilmasa yoki noto'g'ri bo'lsa, var() ikkinchi argumentdagi zaxira qiymatni oladi.",
          },
          {
            q: "Custom property qayerda e'lon qilinsa, faqat o'sha element va bolalariga tegishli bo'ladi?",
            options: ["Faqat :root da", "Faqat @media ichida", "Element selektorining o'zida", "Faqat HTML atributida"],
            answer: 2,
            explain: "Custom property oddiy kaskad qoidasiga bo'ysunadi va meros orqali bolalarga o'tadi; elementda e'lon qilinsa, ko'lam shu element bilan cheklanadi.",
          },
        ],
      },
      {
        id: 32,
        title: "Dark mode: qorong'i mavzu va rang tokenlari",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Qorong'i mavzu shunchaki qora fon emas: matn, chegara va urg'u ranglari ham qayta hisoblanishi kerak. Ikki yo'l bor: tizim sozlamasiga ergashish (<code>prefers-color-scheme</code>) yoki saytdagi tugma orqali <code>data-theme</code> atributini almashtirish. Ikkalasini birga ishlatish mumkin.",
          },
          {
            type: "code",
            title: "system-theme.css",
            lang: "css",
            code: `:root {
  color-scheme: light dark;
  --bg: #ffffff;
  --surface: #f3f4f6;
  --text: #111827;
  --muted: #4b5563;
  --accent: #5b4df6;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111827;
    --surface: #1f2937;
    --text: #f9fafb;
    --muted: #cbd5e1;
    --accent: #c9f26b;
  }
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
}

.card {
  padding: 1.25rem;
  border-radius: 0.75rem;
  background: var(--surface);
  color: var(--muted);
}`,
            outputLabel: "Natija",
            output: "Tizim yorug' mavzuda bo'lsa, sahifa oq fon va to'q matn bilan; qorong'i mavzuda esa to'q fon, och matn va yashil urg'u rang bilan chiqadi. Brauzerning o'z form elementlari ham tanlangan mavzuga moslashadi.",
          },
          {
            type: "table",
            head: ["Vosita", "Vazifasi"],
            rows: [
              ["<code>prefers-color-scheme</code>", "Tizim mavzu tanlovini o'qiydi"],
              ["<code>color-scheme</code>", "Brauzerga ruxsat etilgan mavzularni aytadi"],
              ["<code>[data-theme=\"dark\"]</code>", "Sayt ichidagi qo'lda tanlov"],
              ["<code>meta name=\"theme-color\"</code>", "Mobil brauzer paneli rangini belgilaydi"],
              ["CSS tokenlar", "Ikkala mavzuda bir xil komponentlar"],
            ],
          },
          {
            type: "code",
            title: "toggle.css",
            lang: "css",
            code: `:root {
  --bg: #ffffff;
  --text: #111827;
  --accent: #5b4df6;
  color-scheme: light;
}

[data-theme="dark"] {
  --bg: #0f172a;
  --text: #e2e8f0;
  --accent: #c9f26b;
  color-scheme: dark;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.theme-toggle {
  padding: 0.5rem 0.9rem;
  border: 2px solid currentColor;
  border-radius: 0.5rem;
  background: transparent;
  color: inherit;
  cursor: pointer;
}`,
            outputLabel: "Natija",
            output: "Dastlab sahifa oq fonda. JavaScript html elementiga data-theme=\"dark\" qo'shganda fon to'q ko'k, matn och kulrang, tugma esa yashil urg'u rangda ko'rinadi. Mavzu almashganda fon va matn rangi 0.2 soniyada silliq o'tadi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Kontrastni tekshiring",
            html: "Qorong'i mavzuda ham oddiy matn kontrasti kamida 4.5:1 bo'lishi kerak. Toza qora (#000) va toza oq o'rniga yumshoqroq juftliklar ko'zni kamroq charchatadi. Rasmlar va logotiplar to'q fonda yo'qolmasligini ham tekshiring.",
          },
        ],
        quiz: [
          {
            q: "Tizim mavzu tanlovini qaysi media xususiyati o'qiydi?",
            options: ["prefers-color-scheme", "prefers-reduced-motion", "orientation", "hover"],
            answer: 0,
            explain: "prefers-color-scheme: dark yoki light foydalanuvchining tizim mavzu sozlamasini bildiradi.",
          },
          {
            q: "color-scheme: light dark nimani bildiradi?",
            options: ["Faqat qora fonni yoqadi", "Ranglarni avtomatik teskari qiladi", "Rasmni qoraytiradi", "Ikkala mavzuni qo'llab-quvvatlashni brauzerga aytadi"],
            answer: 3,
            explain: "color-scheme brauzerga sahifaning yorug' va qorong'i mavzularni qo'llab-quvvatlashini bildiradi, native elementlar ham moslashadi.",
          },
          {
            q: "Sayt ichidagi qo'lda mavzu almashtirish uchun qaysi yondashuv mos?",
            options: ["Faqat media query yozish", "html elementiga data-theme atributini almashtirish", "Har sahifaga yangi CSS fayl qo'shish", "Matn rangini inline o'zgartirish"],
            answer: 1,
            explain: "data-theme atributi va unga bog'langan tokenlar orqali mavzuni butun sayt bo'ylab izchil almashtirish mumkin.",
          },
        ],
      },
      {
        id: 33,
        title: "Flexbox chuqurroq: grow, shrink va basis",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Flexbox'ning kuchi <code>flex-grow</code>, <code>flex-shrink</code> va <code>flex-basis</code>da. Ular bolaning qanchalik kengayishi, qisqarishi va boshlang'ich o'lchamini boshqaradi. <code>flex: 1</code> — eng ko'p ishlatiladigan qisqa yozuv, ammo uning ma'nosini bilish muhim.",
          },
          {
            type: "code",
            title: "app.css",
            lang: "css",
            code: `.app {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 15rem;
  padding: 1rem;
  background: #1f2937;
  color: #ffffff;
}

.main {
  flex: 1 1 0;
  min-width: 0;
  padding: 2rem;
  background: #f8fafc;
}

@media (max-width: 48rem) {
  .app { flex-direction: column; }
  .sidebar { flex-basis: auto; }
}`,
            outputLabel: "Natija",
            output: "Keng ekranda chapda 240px kenglikdagi to'q sidebar, qolgan butun joyni egallagan och asosiy qism ko'rinadi. Asosiy qismdagi uzun matn ham sidebar'ni siqib chiqarmaydi. 768px dan tor ekranda ikkala qism ustun bo'lib joylashadi.",
          },
          {
            type: "table",
            head: ["Xossa", "Ma'nosi"],
            rows: [
              ["<code>flex-grow</code>", "Ortiqcha bo'sh joydan qancha ulush olishi"],
              ["<code>flex-shrink</code>", "Joy yetmasa qanchalik qisqarishi"],
              ["<code>flex-basis</code>", "Boshlang'ich asosiy o'lcham"],
              ["<code>flex: 1</code>", "<code>1 1 0%</code> qisqartmasi"],
              ["<code>flex: 0 0 15rem</code>", "Na o'sadi, na qisqaradi: qat'iy 240px"],
              ["<code>align-self</code>", "Bitta bolani ko'ndalang o'qqa boshqacha tekislash"],
            ],
          },
          {
            type: "code",
            title: "toolbar.css",
            lang: "css",
            code: `.toolbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
}

.toolbar__title { margin: 0; }

.toolbar__save {
  margin-left: auto;
  order: 2;
}

.toolbar__help {
  order: 1;
  align-self: stretch;
}`,
            outputLabel: "Natija",
            output: "Sarlavha chapda turadi, undan keyin “Yordam” tugmasi keladi. “Saqlash” esa margin-left: auto tufayli butun bo'sh joyni o'ziga tortib, o'ng chetga suriladi. order: 2 bo'lgani uchun u “Yordam”dan keyin, ya'ni eng o'ngda ko'rinadi; yordam tugmasi qator balandligiga cho'ziladi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "min-width: 0 sirri",
            html: "Flex bolasi ichidagi uzun so'z yoki kod bloki konteynerni kengaytirib yuborishi mumkin. <code>min-width: 0</code> (yoki <code>overflow: hidden</code>) bola o'z mazmunidan kichikroq qisqarishiga imkon beradi. Bu <code>flex: 1</code> bilan ishlaganda tez-tez kerak bo'ladi.",
          },
        ],
        quiz: [
          {
            q: "flex: 1 qisqa yozuvi nimaga teng?",
            options: ["1 0 auto", "0 1 100%", "1 1 0%", "1 1 100%"],
            answer: 2,
            explain: "flex: 1 odatda flex-grow: 1, flex-shrink: 1 va flex-basis: 0% ma'nosini beradi.",
          },
          {
            q: "Flex bolasi ichidagi uzun matn konteynerni cho'zib yubormasligi uchun ko'pincha nima qo'shiladi?",
            options: ["min-width: 0", "height: 100%", "position: fixed", "display: block"],
            answer: 0,
            explain: "min-width: 0 flex elementiga o'z mazmunidan kichikroq qisqarish imkonini beradi.",
          },
          {
            q: "margin-left: auto flex qatorida nimaga erishadi?",
            options: ["Elementni chapga yopishtiradi", "Elementni yashiradi", "Qatorni ustunga aylantiradi", "Elementni o'ng chetga suradi"],
            answer: 3,
            explain: "Avtomatik chap margin mavjud bo'sh joyni to'liq egallab, elementni o'ng tomonga suradi.",
          },
        ],
      },
{
        id: 34,
        title: "CSS Grid chuqurroq: areas, span va auto-fit",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Grid ikki o'lchamda ham boshqaradi. <code>grid-template-areas</code> sahifa maketini nomlar bilan chizish imkonini beradi, <code>span</code> esa elementni bir nechta katakka cho'zadi. <code>auto-fit</code> va <code>minmax()</code> kartalarni qo'lda breakpoint yozmasdan joylashtiradi.",
          },
          {
            type: "code",
            title: "layout.css",
            lang: "css",
            code: `.page {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 15rem minmax(0, 1fr) 14rem;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 1rem;
}

.site-header { grid-area: header; }
.sidebar     { grid-area: sidebar; }
.main        { grid-area: main; }
.aside       { grid-area: aside; }
.site-footer { grid-area: footer; }

@media (max-width: 56rem) {
  .page {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
  }
}`,
            outputLabel: "Natija",
            output: "Keng ekranda sahifa uch ustunga bo'linadi: chapda 240px sidebar, o'rtada moslashuvchan main, o'ngda 224px aside. Header va footer uch ustun bo'ylab cho'ziladi. 896px dan tor ekranda barcha hududlar bitta ustunga tushadi.",
          },
          {
            type: "table",
            head: ["Xossa", "Vazifasi"],
            rows: [
              ["<code>grid-template-areas</code>", "Maketni nomlangan kataklar bilan chizadi"],
              ["<code>grid-area</code>", "Elementni nomlangan hududga joylashtiradi"],
              ["<code>span 2</code>", "Elementni ikki ustun yoki qatorga cho'zadi"],
              ["<code>auto-fit</code>", "Bo'sh ustunlarni yig'ishtirib, mavjud joyga moslaydi"],
              ["<code>auto-fill</code>", "Bo'sh ustunlarni ham saqlaydi"],
              ["<code>grid-auto-flow: dense</code>", "Bo'shliqlarni keyingi elementlar bilan to'ldiradi"],
            ],
          },
          {
            type: "code",
            title: "cards.css",
            lang: "css",
            code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
}

@media (min-width: 40rem) {
  .card--wide { grid-column: span 2; }
}

.card {
  padding: 1.25rem;
  border-radius: 1rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
}`,
            outputLabel: "Natija",
            output: "960px kenglikda uchta ustun hosil bo'ladi va “wide” karta ikkitasini egallaydi; qolgan kartalar avtomatik keyingi qatorga o'tadi. 640px dan tor ekranda har bir karta bitta ustunda, wide karta ham oddiy karta kabi to'liq kenglikda chiqadi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "minmax(0, 1fr) nima uchun?",
            html: "Grid ustunidagi uzun so'z yoki kod bloki ustunni kengaytirib yuborishi mumkin. <code>minmax(0, 1fr)</code> ustunning noldan kichik bo'lmagan holda qisqarishiga ruxsat beradi. Sidebar va main aralash maketlarda bu hiyla ko'p uchraydi.",
          },
        ],
        quiz: [
          {
            q: "Elementni grid-template-areas'dagi nomlangan hududga qaysi xossa joylashtiradi?",
            options: ["grid-column", "grid-area", "grid-gap", "place-content"],
            answer: 1,
            explain: "grid-area elementni template-areas ichidagi nom bilan bog'laydi.",
          },
          {
            q: "grid-column: span 2 nimani bildiradi?",
            options: ["Element ikkinchi ustunga o'tadi", "Ikki qator yaratadi", "Element ikki ustunni egallaydi", "Ustunlar orasida 2px masofa"],
            answer: 2,
            explain: "span 2 elementni joriy joyidan boshlab ikki ustun kengligida cho'zadi.",
          },
          {
            q: "auto-fit va auto-fill orasidagi asosiy farq nima?",
            options: ["auto-fit bo'sh ustunlarni yig'ishtiradi, auto-fill ularni saqlaydi", "auto-fill faqat mobil uchun ishlaydi", "auto-fit faqat qatorlar uchun", "Hech qanday farq yo'q"],
            answer: 0,
            explain: "auto-fit mavjud elementlarni bo'sh joyga cho'zadi; auto-fill esa bo'sh ustunlarni ham hisobga oladi.",
          },
        ],
      },
      {
        id: 35,
        title: "Container queries: komponent o'z konteyneriga moslashadi",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Media query butun ekranga qaraydi, lekin bir xil karta sidebar'da ham, keng sahifada ham ishlatilishi mumkin. <b>Container query</b> komponentni uning <b>ota konteyneri</b> kengligiga qarab o'zgartiradi. Bu qayta ishlatiladigan dizayn tizimlari uchun juda qulay.",
          },
          {
            type: "code",
            title: "card.css",
            lang: "css",
            code: `.card-wrap {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: #ffffff;
}

.card__media {
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  background: #ede9ff;
}

@container card (min-width: 30rem) {
  .card {
    grid-template-columns: 8rem 1fr;
    align-items: center;
  }
  .card__media { aspect-ratio: 1; }
}`,
            outputLabel: "Natija",
            output: "Karta 480px dan tor konteynerda rasm va matn ustma-ust joylashadi. Karta 480px yoki kengroq konteynerga tushsa, rasm 128px kvadrat bo'lib chapga, matn esa o'ngga o'tadi. Bu butun ekran kengligidan qat'i nazar ishlaydi.",
          },
          {
            type: "table",
            head: ["Tushuncha", "Vazifasi"],
            rows: [
              ["<code>container-type: inline-size</code>", "Konteynerni kenglik bo'yicha so'rovga tayyorlaydi"],
              ["<code>container-name</code>", "Konteynerga nom beradi"],
              ["<code>@container nom (min-width: ...)</code>", "Shu konteyner shartiga qarab uslub beradi"],
              ["<code>cqw</code>", "Konteyner kengligining 1 foizi"],
              ["<code>cqi</code>", "Konteynerning inline o'lchami ulushi"],
              ["<code>@container style(...)</code>", "Custom property qiymatiga qarab uslub (qo'llab-quvvatlash cheklangan)"],
            ],
          },
          {
            type: "code",
            title: "sidebar.css",
            lang: "css",
            code: `.sidebar {
  container-type: inline-size;
  padding: 1rem;
  background: #f8fafc;
}

.widget {
  padding: 1rem;
  border-radius: 0.75rem;
  background: #ffffff;
}

.widget__title {
  font-size: 1rem;
  margin: 0 0 0.5rem;
}

@container (min-width: 20rem) {
  .widget {
    padding: 1.5rem;
  }
  .widget__title {
    font-size: 1.25rem;
  }
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: clamp(0.75rem, 5cqi, 1rem);
  background: #ede9ff;
}`,
            outputLabel: "Natija",
            output: "Sidebar 320px dan tor bo'lsa, widget 16px padding va 16px sarlavha bilan ixcham ko'rinadi. 320px dan kengroq bo'lganda padding 24px, sarlavha 20px bo'ladi. Badge shrifti konteyner kengligining 5 foiziga moslashib, 12–16px oralig'ida qoladi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Konteyner o'lchami kerak",
            html: "<code>@container</code> ishlashi uchun eng yaqin ota-elementda <code>container-type</code> bo'lishi kerak. Aks holda so'rov bajarilmaydi. Konteyner o'lchamini <code>inline-size</code> qilib tanlang; balandlik bo'yicha so'rov kamroq kerak va layoutga ta'siri kattaroq.",
          },
        ],
        quiz: [
          {
            q: "Container query ishlashi uchun ota-elementda qaysi xossa bo'lishi shart?",
            options: ["position: relative", "display: flex", "overflow: hidden", "container-type"],
            answer: 3,
            explain: "container-type elementni query container qiladi; usiz @container sharti qo'llanmaydi.",
          },
          {
            q: "@container (min-width: 30rem) nimani tekshiradi?",
            options: ["Ekran balandligini", "Eng yaqin konteyner kengligini", "Fayl hajmini", "Elementning shrift o'lchamini"],
            answer: 1,
            explain: "Container query eng yaqin nomlangan yoki nomlanmagan konteynerning o'lchamiga qarab ishlaydi, viewportga emas.",
          },
          {
            q: "cqw birligi nimaga nisbatan hisoblanadi?",
            options: ["Ekran kengligiga", "Ildiz shriftiga", "Konteyner kengligiga", "Ota-element balandligiga"],
            answer: 2,
            explain: "cqw container query width: konteyner kengligining 1 foizini bildiradi.",
          },
        ],
      },
      {
        id: 36,
        title: "Formalarni zamonaviy CSS bilan bezash",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Brauzerning standart forma elementlari ishonchli, lekin har xil ko'rinadi. <code>accent-color</code> checkbox va radio rangini tez o'zgartiradi; <code>appearance</code> esa native ko'rinishni almashtirishga imkon beradi. Muhimi — fokus, xato va o'chirilgan holatlarni aniq ko'rsatish.",
          },
          {
            type: "code",
            title: "form.css",
            lang: "css",
            code: `.field {
  display: grid;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.field label { font-weight: 600; }

.field input {
  padding: 0.7rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font: inherit;
  background: #ffffff;
}

.field input:focus-visible {
  outline: 3px solid #a5b4fc;
  outline-offset: 2px;
  border-color: #5b4df6;
}

input[type="checkbox"],
input[type="radio"] {
  width: 1.1rem;
  height: 1.1rem;
  accent-color: #5b4df6;
}

input:disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
}`,
            outputLabel: "Natija",
            output: "Matn maydoni oq fon, kulrang chegara va yumaloq burchak bilan chiqadi. Fokuslanganda binafsha chegara va och ko'k kontur paydo bo'ladi. Checkbox va radio belgilari binafsha rangda, o'chirilgan maydon esa kulrang fonda ko'rinadi.",
          },
          {
            type: "table",
            head: ["Vosita", "Foydasi"],
            rows: [
              ["<code>accent-color</code>", "Checkbox, radio va range urg'u rangini beradi"],
              ["<code>appearance: none</code>", "Native ko'rinishni olib tashlab, o'z uslubingizni beradi"],
              ["<code>:focus-visible</code>", "Klaviatura fokusini aniq ko'rsatadi"],
              ["<code>:user-invalid</code>", "Foydalanuvchi kiritgandan keyingi xato holati"],
              ["<code>:disabled</code>", "O'chirilgan element"],
              ["<code>fieldset / legend</code>", "Bog'liq maydonlarni guruhlaydi"],
            ],
          },
          {
            type: "code",
            title: "validation.html",
            code: `<form novalidate>
  <div class="field">
    <label for="email">Email</label>
    <input id="email" name="email" type="email"
           autocomplete="email" required>
    <p class="error" id="email-xato">To'g'ri email kiriting.</p>
  </div>
  <button type="submit">Yuborish</button>
</form>

<style>
  .error { display: none; color: #b91c1c; font-size: 0.875rem; }
  .field input:user-invalid {
    border-color: #dc2626;
    background: #fef2f2;
  }
  .field input:user-invalid + .error { display: block; }
  .field input:focus-visible {
    outline: 3px solid #fca5a5;
    outline-offset: 2px;
  }
</style>`,
            outputLabel: "Natija",
            output: "Maydon bo'sh yoki noto'g'ri email bilan tark etilganda chegarasi qizil bo'lib, ostida “To'g'ri email kiriting.” xabari chiqadi. Fokuslanganda qizil kontur ko'rinadi; to'g'ri email kiritilgach xato va qizil fon yo'qoladi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Placeholder — label emas",
            html: "<code>placeholder</code> ko'rinib turgan yorliq o'rnini bosmaydi: u yozishni boshlaganda yo'qoladi va kontrasti past bo'lishi mumkin. Har bir maydonga doimiy <code>label</code> bering, xato matnini esa <code>aria-describedby</code> bilan bog'lang.",
          },
        ],
        quiz: [
          {
            q: "Checkbox va radio rangini eng sodda usulda qaysi xossa o'zgartiradi?",
            options: ["accent-color", "background", "border-color", "color"],
            answer: 0,
            explain: "accent-color brauzerning checkbox, radio va range kabi elementlaridagi urg'u rangini boshqaradi.",
          },
          {
            q: "Foydalanuvchi noto'g'ri qiymat kiritib maydondan chiqqandan keyingi holatni qaysi pseudo-class bildiradi?",
            options: [":invalid", ":required", ":placeholder-shown", ":user-invalid"],
            answer: 3,
            explain: ":user-invalid foydalanuvchi bilan ishlashdan keyingi xatoni bildiradi; :invalid sahifa ochilgandayoq qo'llanishi mumkin.",
          },
          {
            q: "Bir guruh forma maydonlarini sarlavha bilan o'rash uchun qaysi juftlik ishlatiladi?",
            options: ["div va p", "fieldset va legend", "section va h2", "form va label"],
            answer: 1,
            explain: "fieldset maydonlarni guruhlaydi, legend esa guruh nomini beradi.",
          },
        ],
      },
      {
        id: 37,
        title: "Zamonaviy selektorlar: :is, :where va :has",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "<code>:is()</code> bir nechta selektorni qisqartiradi, <code>:where()</code> ham shunday qiladi, lekin specificity'ni nolga tushiradi. <code>:has()</code> esa <b>bolasiga qarab otani</b> tanlaydi — ilgari faqat JavaScript bilan qilinadigan ishlar endi CSS'da mumkin.",
          },
          {
            type: "code",
            title: "is-where.css",
            lang: "css",
            code: `:is(h1, h2, h3) {
  line-height: 1.2;
  text-wrap: balance;
}

:where(.prose) :where(h2, h3) {
  margin-top: 2rem;
}

.card p { color: #111827; }
:where(.card) p { color: #6b7280; }

.nav :is(a, button):focus-visible {
  outline: 3px solid #5b4df6;
  outline-offset: 3px;
}`,
            outputLabel: "Natija",
            output: "Barcha sarlavhalar 1.2 qator balandligida va sarlavha satrlari muvozanatli bo'linadi. .prose ichidagi h2 va h3 yuqoridan 32px masofa oladi. Karta paragrafi to'q rangda qoladi, chunki :where(.card) qismi specificity'ga hissa qo'shmaydi va .card p (0-1-1) :where(.card) p (0-0-1) dan ustun.",
          },
          {
            type: "table",
            head: ["Selektor", "Xususiyati"],
            rows: [
              ["<code>:is(a, button)</code>", "Ro'yxatdagi mos selektorni tanlaydi; eng yuqori argument specificity'sini oladi"],
              ["<code>:where(a, button)</code>", "Xuddi :is, lekin specificity'ga hissa qo'shmaydi"],
              ["<code>:has(img)</code>", "Ichida img bo'lgan otani tanlaydi"],
              ["<code>:not(.x)</code>", "Class x bo'lmaganlarni tanlaydi"],
              ["<code>:has(> img)</code>", "Bevosita bolasi img bo'lgan otani tanlaydi"],
            ],
          },
          {
            type: "code",
            title: "has.html",
            code: `<article class="card">
  <img src="https://picsum.photos/id/1067/480/320"
       alt="Qirg'oq bo'yidagi shahar silueti" width="480" height="320">
  <div class="card__body">
    <h3>Shahar sayohati</h3>
    <p>Bir kunlik marshrut.</p>
  </div>
</article>

<style>
  .card {
    display: grid;
    gap: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    overflow: hidden;
  }
  .card img { display: block; width: 100%; height: 200px; object-fit: cover; }
  .card__body { padding: 0 1rem 1rem; }

  @media (min-width: 36rem) {
    .card:has(> img) {
      grid-template-columns: 12rem 1fr;
      align-items: center;
    }
    .card:has(> img) img { height: 100%; }
  }

  .form:has(input:user-invalid) .form__status {
    display: block;
    color: #b91c1c;
  }
</style>`,
            outputLabel: "Natija",
            output: "576px dan keng ekranda rasmli karta ikki ustunga bo'linadi: chapda 192px rasm, o'ngda matn. Rasm bo'lmagan kartaga bu uslub qo'llanmaydi. Formada noto'g'ri maydon paydo bo'lsa, .form__status xabari ko'rinadi.",
          },
          {
            type: "note",
            variant: "tip",
            title: ":has — ota selektori",
            html: "<code>.card:has(img)</code> — “ichida img bo'lgan card”. Bu murakkab holatlarni JS'siz hal qiladi, lekin katta sahifada ortiqcha ishlatilsa, brauzer uchun qimmat bo'lishi mumkin. Oddiy selektor yetadigan joyda uni tanlang.",
          },
        ],
        quiz: [
          {
            q: ":where() selektorining specificity'si qanday?",
            options: ["Argumentdagi eng yuqori qiymat", "Har doim 1", "Har doim 0", "Faqat id bilan bir xil"],
            answer: 2,
            explain: ":where() specificity'ni nolga tushiradi, shuning uchun oson bekor qilinadi.",
          },
          {
            q: ":has() selektori nimani tanlaydi?",
            options: ["Bolasiga qarab ota-elementni", "Faqat birinchi bolani", "Matn ichidagi so'zni", "Faqat hover holatini"],
            answer: 0,
            explain: ":has() ichki shartga mos bola mavjud bo'lsa, tashqi elementni tanlaydi.",
          },
          {
            q: ":is(h1, h2) va :where(h1, h2) orasidagi asosiy farq nima?",
            options: ["Rangi", "Faqat :is brauzerda ishlaydi", "Hech qanday farq yo'q", "Specificity va bekor qilish qulayligi"],
            answer: 3,
            explain: "Ikkalasi bir xil elementlarni tanlaydi, ammo :where argument specificity'ga hissa qo'shmaydi.",
          },
        ],
      },
      {
        id: 38,
        title: "BEM: CSS uchun tushunarli nomlash tizimi",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Loyiha kattalashganda <code>.card .title</code> kabi umumiy nomlar to'qnashadi. <b>BEM</b> (Block, Element, Modifier) nomlashni tartibga soladi: <code>block__element--modifier</code>. Natijada har bir komponent mustaqil, qidirish va o'zgartirish oson bo'ladi.",
          },
          {
            type: "code",
            title: "card.html",
            code: `<article class="project-card project-card--featured">
  <img class="project-card__image"
       src="https://picsum.photos/id/180/640/360"
       alt="Noutbukdagi portfolio sayti"
       width="640" height="360">
  <div class="project-card__body">
    <h3 class="project-card__title">Portfolio sayti</h3>
    <p class="project-card__text">HTML va CSS bilan qurilgan.</p>
    <a class="project-card__link" href="/loyihalar/portfolio">
      Loyihani ko'rish
    </a>
  </div>
</article>`,
            outputLabel: "Natija",
            output: "Tanlangan karta alohida ajralib turadi: rasm, sarlavha, tavsif va havola bir komponent ichida chiqadi. Class nomlaridan har bir qismning qaysi blokka tegishli ekani darhol ko'rinadi; boshqa kartalar bilan to'qnashuv bo'lmaydi.",
          },
          {
            type: "table",
            head: ["Qism", "Yozilishi", "Misol"],
            rows: [
              ["Block", "Mustaqil komponent", "<code>project-card</code>"],
              ["Element", "Blockning qismi, ikki pastki chiziq", "<code>project-card__title</code>"],
              ["Modifier", "Holat yoki variant, ikki chiziqcha", "<code>project-card--featured</code>"],
              ["Element modifikatori", "Elementning varianti", "<code>project-card__link--muted</code>"],
              ["Utility", "Kichik yordamchi class", "<code>visually-hidden</code>"],
            ],
          },
          {
            type: "code",
            title: "card.css",
            lang: "css",
            code: `.project-card {
  display: grid;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: #ffffff;
}

.project-card__image {
  display: block;
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.project-card__body { padding: 1rem; }

.project-card__title {
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
}

.project-card__link {
  color: #5b4df6;
  font-weight: 600;
}

.project-card--featured {
  border-color: #5b4df6;
  box-shadow: 0 12px 30px rgba(91, 77, 246, 0.18);
}`,
            outputLabel: "Natija",
            output: "Oddiy karta oq fon va kulrang chegara bilan chiqadi. featured varianti binafsha chegara va yumshoq soya oladi; ichki elementlar uslubi o'zgarmaydi. Havola binafsha va qalin, rasm esa kartaning yuqori qismida 192px balandlikda kesiladi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Selektorlarni sayoz saqlang",
            html: "BEM'da <code>.project-card .body .title</code> kabi chuqur selektorlar kerak emas: har bir element o'z class'i bilan tanlanadi. Bu specificity'ni past tutadi va komponentni boshqa joyga ko'chirishda uslub buzilishining oldini oladi.",
          },
        ],
        quiz: [
          {
            q: "BEM'da blokning elementi qanday yoziladi?",
            options: ["block-element", "block__element", "block--element", "block.element"],
            answer: 1,
            explain: "Element blok nomidan keyin ikki pastki chiziq bilan yoziladi: block__element.",
          },
          {
            q: "BEM'da modifier nima uchun ishlatiladi?",
            options: ["Yangi blok yaratish uchun", "Faqat rang berish uchun", "Blok yoki elementning varianti yoki holatini bildirish uchun", "HTML tegini almashtirish uchun"],
            answer: 2,
            explain: "Modifier bir xil komponentning featured, active yoki large kabi varianti ekanini bildiradi.",
          },
          {
            q: "BEM nima uchun chuqur descendant selektorlardan qochishni tavsiya qiladi?",
            options: ["Ular komponentni ko'chirishda uslubni buzadi va specificity'ni oshiradi", "Ular sekinroq ishlaydi", "Ular HTML'da ishlamaydi", "Ular faqat mobil qurilmada ishlaydi"],
            answer: 0,
            explain: "Chuqur selektorlar tuzilishga bog'lanib qoladi; BEM'da har bir qism o'z class'i bilan mustaqil bo'ladi.",
          },
        ],
      },
      {
        id: 39,
        title: "Preprocessorlar: Sass bilan CSS'ni tartibga solish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Sass, Less va Stylus CSS'ga o'zgaruvchilar, ichma-ich yozish va mixinlar qo'shadi, so'ng oddiy CSS'ga kompilyatsiya qilinadi. Brauzer Sass'ni to'g'ridan-to'g'ri tushunmaydi, shuning uchun build qadami kerak. Kichik loyihada CSS variablelar yetishi mumkin, katta loyihada Sass qulay.",
          },
          {
            type: "code",
            title: "card.scss",
            lang: "css",
            code: `$accent: #5b4df6;
$radius: 0.75rem;

.card {
  background: #ffffff;
  border-radius: $radius;

  &__title {
    margin: 0 0 0.5rem;
    color: $accent;
  }

  &--featured {
    border: 2px solid $accent;
  }

  &:hover {
    box-shadow: 0 10px 24px rgba($accent, 0.2);
  }
}`,
            outputLabel: "Natija",
            output: "Kompilyatsiyadan keyin .card, .card__title, .card--featured va .card:hover uchun alohida CSS qoidalari hosil bo'ladi. Sarlavha binafsha, featured karta binafsha chegarali, hover'da esa binafsha soya paydo bo'ladi.",
          },
          {
            type: "table",
            head: ["Tushuncha", "Vazifasi"],
            rows: [
              ["<code>$accent</code>", "Sass o'zgaruvchisi; kompilyatsiyada almashtiriladi"],
              ["<code>&</code>", "Ota selektorga biriktiradi"],
              ["<code>@mixin</code>", "Qayta ishlatiladigan uslublar bloki"],
              ["<code>@include</code>", "Mixin ichidagi uslublarni qo'shadi"],
              ["<code>@use</code>", "Boshqa Sass faylini modul sifatida ulaydi"],
              ["<code>_partial.scss</code>", "Alohida bo'lak; o'zi CSS faylga chiqmaydi"],
            ],
          },
          {
            type: "code",
            title: "tools.scss",
            lang: "css",
            code: `@mixin focus-ring($color: #5b4df6) {
  outline: 3px solid $color;
  outline-offset: 3px;
}

@mixin respond($min) {
  @media (min-width: $min) {
    @content;
  }
}

.btn {
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  background: #5b4df6;
  color: #ffffff;

  &:focus-visible {
    @include focus-ring;
  }
}

@include respond(48rem) {
  .btn { padding: 0.9rem 1.4rem; }
}`,
            outputLabel: "Natija",
            output: "Tugma klaviatura fokusi olganda binafsha kontur bilan ajralib turadi. 768px va undan keng ekranda tugma paddingi 14.4px 22.4px gacha oshadi. Mixinlar tufayli bir xil fokus uslubi boshqa komponentlarda ham qayta ishlatilishi mumkin.",
          },
          {
            type: "note",
            variant: "info",
            title: "Sass yoki CSS variable?",
            html: "Sass o'zgaruvchisi build vaqtida qotib qoladi; CSS variable esa brauzerda yashaydi va mavzu almashtirishda o'zgaradi. Ko'pincha ikkalasi birga ishlatiladi: Sass kompilyatsiya sozlamalari, CSS variable esa runtime mavzusi uchun.",
          },
        ],
        quiz: [
          {
            q: "Sass o'zgaruvchisi qachon qiymatga almashtiriladi?",
            options: ["Brauzerda har renderda", "Faqat hover'da", "Server so'rovida", "Kompilyatsiya vaqtida"],
            answer: 3,
            explain: "Sass build vaqtida CSS'ga kompilyatsiya qilinadi, shuning uchun o'zgaruvchi natijada qotgan qiymat bo'ladi.",
          },
          {
            q: "@mixin va @include nima uchun ishlatiladi?",
            options: ["Faylni o'chirish uchun", "Qayta ishlatiladigan uslublar blokini qo'shish uchun", "HTML tegini yaratish uchun", "Rasmni siqish uchun"],
            answer: 1,
            explain: "Mixin uslublar to'plamini saqlaydi, @include esa uni kerakli joyga chaqiradi.",
          },
          {
            q: "Sass faylini modul sifatida ulash uchun qaysi qoida ishlatiladi?",
            options: ["@import", "@require", "@use", "@load"],
            answer: 2,
            explain: "Zamonaviy Sass'da @use modullar tizimi tavsiya etiladi; @import eskirgan hisoblanadi.",
          },
        ],
      },
      {
        id: 40,
        title: "Tailwind CSS ga kirish",
        minutes: 16,
        blocks: [
          {
            type: "p",
            html: "Tailwind — <b>utility-first</b> CSS freymvorki: tayyor kichik class'lar bilan dizayn yig'asiz, masalan <code>p-6</code>, <code>rounded-xl</code>, <code>text-slate-700</code>. HTML biroz uzunroq ko'rinadi, lekin uslub komponent yonida turadi va alohida CSS fayl kamayadi.",
          },
          {
            type: "code",
            title: "card.html",
            code: `<article class="max-w-sm rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
  <p class="text-sm font-semibold uppercase tracking-wide text-indigo-600">
    Loyiha
  </p>
  <h2 class="mt-2 text-2xl font-bold text-slate-900">
    Portfolio sayti
  </h2>
  <p class="mt-3 text-slate-600">
    HTML va CSS bilan qurilgan moslashuvchan sahifa.
  </p>
  <a class="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
     href="/loyihalar/portfolio">
    Loyihani ko'rish
  </a>
</article>`,
            outputLabel: "Natija",
            output: "Maksimal 384px kenglikdagi oq karta yumaloq burchak, yumshoq soya va ingichka chegara bilan chiqadi. Ustki yozuv kichik va binafsha, sarlavha katta va qalin, matn kulrang. Tugma binafsha fonda oq matnli bo'lib, hover'da quyuqlashadi va klaviatura fokusida kontur oladi.",
          },
          {
            type: "table",
            head: ["Class", "Ma'nosi"],
            rows: [
              ["<code>p-6</code>", "Hamma tomondan 1.5rem padding"],
              ["<code>rounded-2xl</code>", "Katta yumaloq burchak"],
              ["<code>text-slate-600</code>", "Slate palitrasidagi matn rangi"],
              ["<code>hover:bg-indigo-700</code>", "Hover holatida fon rangi"],
              ["<code>md:grid-cols-2</code>", "768px dan boshlab ikki ustun"],
              ["<code>w-[18rem]</code>", "Ixtiyoriy aniq qiymat"],
            ],
          },
          {
            type: "code",
            title: "grid.html",
            code: `<section class="mx-auto max-w-5xl px-4 py-10">
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_2fr]">
    <a href="/kurslar/html"
       class="rounded-xl bg-slate-900 p-5 text-white transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2">
      HTML & CSS
    </a>
    <a href="/kurslar/js"
       class="rounded-xl bg-indigo-50 p-5 text-slate-900 transition hover:-translate-y-1">
      JavaScript
    </a>
  </div>
</section>`,
            outputLabel: "Natija",
            output: "Telefonda ikkala karta ustma-ust, 640px dan boshlab yonma-yon chiqadi. 1024px dan boshlab birinchi karta 1, ikkinchisi 2 ulush kenglik oladi. Ikkala karta hover'da 4px yuqoriga ko'tariladi; birinchisi to'q, ikkinchisi och fonda.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Tailwind — vosita, qoida emas",
            html: "Class'lar ko'payib ketsa, komponentni ajratib oling yoki <code>@apply</code>ni ehtiyotkorlik bilan ishlating. Build jarayonida ishlatilmagan class'larni tozalash uchun <code>content</code> yo'llarini to'g'ri sozlang. Dizayn tokenlarini <code>tailwind.config</code> orqali boshqaring.",
          },
        ],
        quiz: [
          {
            q: "Tailwind'da md: prefiksi nimani bildiradi?",
            options: ["768px va undan keng ekranlarda qo'llanadigan class", "Faqat mobil ekranga tegishli", "Faqat qorong'i mavzu", "Matn markazlash"],
            answer: 0,
            explain: "md: Tailwind'ning o'rta breakpoint prefiksi bo'lib, min-width shartida ishlaydi.",
          },
          {
            q: "Utility-first yondashuvning mohiyati nima?",
            options: ["Har bir komponentga alohida CSS fayl yozish", "Faqat inline style ishlatish", "JavaScript bilan CSS yozish", "Tayyor kichik class'lar bilan uslub yig'ish"],
            answer: 3,
            explain: "Utility-first kichik, bir vazifali class'larni HTML'da birlashtirib dizayn yaratadi.",
          },
          {
            q: "w-[18rem] kabi yozuv nimani anglatadi?",
            options: ["18rem dan kichik ekran", "Ixtiyoriy aniq qiymatni berish", "Faqat 18 rang", "18 ta ustun"],
            answer: 1,
            explain: "Kvadrat qavs ichidagi qiymat Tailwind'da arbitrary value, ya'ni ixtiyoriy aniq o'lchamni beradi.",
          },
        ],
      },
{
        id: 41,
        title: "Performance: sahifani tez ochish",
        minutes: 17,
        blocks: [
          {
            type: "p",
            html: "Tezlik — foydalanuvchi tajribasining bir qismi. Brauzer CSS va shriftlarni uchratganda chizishni kutishi, katta rasmlar esa eng katta kontent bo'lagini kechiktirishi mumkin. Asosiy ko'rsatkichlar: <b>LCP</b> (asosiy kontent paydo bo'lishi), <b>INP</b> (javob berish) va <b>CLS</b> (layout sakrashi).",
          },
          {
            type: "code",
            title: "index.html",
            code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="/fonts/inter-var.woff2" as="font"
        type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/css/site.css">

  <script src="/js/app.js" defer></script>
</head>
<body>
  <img src="/images/hero-800.webp"
       srcset="/images/hero-480.webp 480w, /images/hero-800.webp 800w"
       sizes="100vw" width="800" height="500"
       fetchpriority="high" decoding="async"
       alt="Loyiha ish stolidagi eskizlar">
</body>`,
            outputLabel: "Natija",
            output: "Shrift fayli sahifa chizilishidan oldin yuklana boshlaydi, asosiy CSS esa bir marta ulanadi. JavaScript HTML tahlil qilinib bo'lgach ishga tushadi va chizishni bloklamaydi. Ekranning yuqorisidagi katta rasm “high” ustuvorlik bilan tezroq yuklanadi.",
          },
          {
            type: "table",
            head: ["Ko'rsatkich", "Nimani o'lchaydi"],
            rows: [
              ["<code>LCP</code>", "Eng katta ko'rinadigan kontent qancha vaqtda paydo bo'lishi"],
              ["<code>INP</code>", "Foydalanuvchi amaliga sahifa qanchalik tez javob berishi"],
              ["<code>CLS</code>", "Kutilmagan layout sakrashlari miqdori"],
              ["<code>TTFB</code>", "Server birinchi baytni qancha vaqtda qaytarishi"],
              ["<code>Lighthouse</code>", "Performance, accessibility, SEO auditlari"],
            ],
          },
          {
            type: "code",
            title: "perf.css",
            lang: "css",
            code: `@font-face {
  font-family: "Inter";
  src: url("/fonts/inter-var.woff2") format("woff2");
  font-weight: 100 900;
  font-display: swap;
}

.hero img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 8 / 5;
  object-fit: cover;
}

.deferred-section {
  content-visibility: auto;
  contain-intrinsic-size: 1px 600px;
}

@media (prefers-reduced-motion: reduce) {
  * { scroll-behavior: auto; }
}`,
            outputLabel: "Natija",
            output: "Shrift yuklanmaguncha matn zaxira shriftda ko'rinadi va keyin almashadi; ko'rinmas matn qolmaydi. Hero rasmi 8:5 nisbatda joy egallaydi. Ekrandan pastdagi og'ir bo'lim dastlab 600px joy bilan hisoblanadi va ko'rinishga kirganda chiziladi.",
          },
          {
            type: "note",
            variant: "tip",
            title: "Avval o'lchang",
            html: "Optimizatsiyani sezgi bilan emas, o'lchov bilan boshlang: DevTools Performance paneli, Lighthouse va real foydalanuvchi metrikalari. Eng katta muammoni tuzatish kichik narsalarni mikro-optimallashtirishdan ko'ra ko'proq foyda beradi.",
          },
        ],
        quiz: [
          {
            q: "LCP ko'rsatkichi nimani o'lchaydi?",
            options: ["JavaScript fayllari sonini", "Rang kontrastini", "Eng katta ko'rinadigan kontentning paydo bo'lish vaqtini", "Formadagi xatolar sonini"],
            answer: 2,
            explain: "Largest Contentful Paint sahifadagi asosiy katta kontent qancha vaqtda ko'rinishini o'lchaydi.",
          },
          {
            q: "font-display: swap nima qiladi?",
            options: ["Shrift yuklanmaguncha zaxira shriftda matn ko'rsatadi", "Shriftni butunlay o'chiradi", "Faqat qalin shriftni yuklaydi", "Shriftni rasmga aylantiradi"],
            answer: 0,
            explain: "swap matnni darhol zaxira shriftda ko'rsatib, asosiy shrift kelganda almashtiradi; ko'rinmas matn vaqtini kamaytiradi.",
          },
          {
            q: "content-visibility: auto qanday foyda beradi?",
            options: ["Ranglarni avtomatik tanlaydi", "Formani yashiradi", "Barcha rasmlarni yuklaydi", "Ekrandan tashqaridagi bo'limlarni kechiktirib chizadi"],
            answer: 3,
            explain: "content-visibility: auto ko'rinmayotgan katta bo'limlar renderini kechiktirib, dastlabki chizishni tezlashtiradi.",
          },
        ],
      },
      {
        id: 42,
        title: "Print styles: sahifani chop etishga moslash",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "Foydalanuvchi sahifani chop etganda ekran uslublari har doim mos kelavermaydi: menyu, soya va qorong'i fon qog'ozda keraksiz. <code>@media print</code> ichida faqat mazmunni qoldirib, o'lcham, sahifa va havolalarni chop etish uchun sozlash mumkin.",
          },
          {
            type: "code",
            title: "print.css",
            lang: "css",
            code: `@media print {
  body {
    background: #ffffff;
    color: #000000;
    font-size: 12pt;
  }

  .site-header,
  .site-footer,
  .no-print {
    display: none;
  }

  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #444444;
  }

  .project-card {
    break-inside: avoid;
    border: 1px solid #000000;
    box-shadow: none;
  }
}`,
            outputLabel: "Natija",
            output: "Chop etishda menyu va footer ko'rinmaydi, sahifa oq fonda qora 12pt matn bilan chiqadi. Tashqi havoladan keyin uning manzili qavs ichida bosiladi. Har bir loyiha kartasi butunlay bitta sahifada qoladi va soyasiz, ingichka qora chegara bilan chop etiladi.",
          },
          {
            type: "table",
            head: ["Vosita", "Vazifasi"],
            rows: [
              ["<code>@media print</code>", "Faqat chop etishda qo'llanadigan qoidalar"],
              ["<code>@page</code>", "Qog'oz o'lchami va chegaralari"],
              ["<code>break-inside: avoid</code>", "Elementni sahifalar orasida bo'lishdan saqlaydi"],
              ["<code>break-before: page</code>", "Yangi sahifadan boshlaydi"],
              ["<code>print-color-adjust: exact</code>", "Fon ranglarini majburan chop etadi"],
              ["<code>attr(href)</code>", "Havola manzilini matnga chiqaradi"],
            ],
          },
          {
            type: "code",
            title: "invoice.html",
            code: `<style>
  @page { size: A4; margin: 15mm; }
  .invoice { font-family: system-ui, sans-serif; color: #111; }
  .invoice__head {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #111;
    padding-bottom: 0.5rem;
  }
  .invoice table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
  .invoice th, .invoice td { padding: 0.5rem; border-bottom: 1px solid #ccc; text-align: left; }
  @media print {
    .no-print { display: none; }
    .invoice__total { font-weight: 700; }
  }
</style>

<article class="invoice">
  <div class="invoice__head">
    <h1>Hisob-faktura</h1>
    <p>№ 2026-014</p>
  </div>
  <table>
    <thead><tr><th>Xizmat</th><th>Narx</th></tr></thead>
    <tbody>
      <tr><td>Landing sahifa</td><td>2 400 000 so'm</td></tr>
      <tr><td>Moslashuvchan tuzatish</td><td>600 000 so'm</td></tr>
    </tbody>
  </table>
  <p class="invoice__total">Jami: 3 000 000 so'm</p>
  <button class="no-print" type="button">Chop etish</button>
</article>`,
            outputLabel: "Natija",
            output: "Ekranda hisob-faktura va “Chop etish” tugmasi ko'rinadi. Chop etishda A4 qog'oz, 15mm chegara, oq fon va qora matn ishlatiladi; tugma yashiriladi, jadval chiziqlari va umumiy summa qog'ozda aniq chiqadi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Fon har doim chiqavermaydi",
            html: "Brauzerlar siyohni tejash uchun fon rasmlari va ranglarini olib tashlashi mumkin. Muhim ma'lumotni faqat rang bilan bermang. Haqiqiy qora fon kerak bo'lsa, <code>print-color-adjust: exact</code> ishlatilsa ham brauzer sozlamasi ustun bo'lishi mumkin.",
          },
        ],
        quiz: [
          {
            q: "Qog'oz o'lchami va chegaralarini qaysi qoida belgilaydi?",
            options: ["@media screen", "@page", "@font-face", "@supports"],
            answer: 1,
            explain: "@page chop etish sahifasining size va margin qiymatlarini boshqaradi.",
          },
          {
            q: "Karta ikki sahifa orasida bo'linib ketmasligi uchun qaysi xossa ishlatiladi?",
            options: ["overflow: hidden", "white-space: nowrap", "break-inside: avoid", "display: inline"],
            answer: 2,
            explain: "break-inside: avoid elementni sahifa bo'linishidan saqlaydi.",
          },
          {
            q: "Chop etilgan hujjatda havola manzilini ko'rsatish uchun qaysi usul ishlatiladi?",
            options: ["a::after { content: attr(href); }", "a::before { content: link; }", "a { display: block; }", "JavaScript bilan"],
            answer: 0,
            explain: "attr(href) havola atributidagi manzilni ::after mazmuniga chiqaradi.",
          },
        ],
      },
      {
        id: 43,
        title: "Deploy: statik saytni internetga chiqarish",
        minutes: 15,
        blocks: [
          {
            type: "p",
            html: "HTML, CSS va rasmlardan iborat sayt <b>statik sayt</b> hisoblanadi. Uni GitHub Pages, Netlify yoki Vercel kabi xizmatlarga joylash mumkin. Asosiy qadamlar: fayllarni tartibga solish, yo'llarni tekshirish, build qilish va HTTPS bilan nashr etish.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aziza — portfolio</title>
  <link rel="stylesheet" href="./css/style.css">
  <link rel="icon" href="./assets/favicon.svg" type="image/svg+xml">
</head>
<body>
  <header class="site-header">
    <a href="./index.html">Aziza</a>
    <nav aria-label="Asosiy menyu">
      <a href="./loyihalar.html">Loyihalar</a>
      <a href="./aloqa.html">Aloqa</a>
    </nav>
  </header>
  <main>
    <h1>Frontend dasturchi</h1>
    <img src="./images/hero.webp" alt="Ish stolim" width="800" height="500">
  </main>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Sayt ildiz papkasidan ham, GitHub Pages'dagi /portfolio/ kabi ichki yo'ldan ham bir xil ochiladi. CSS, favicon, sahifalar va rasm nisbiy yo'llar orqali topiladi; bitta fayl boshqa joyga ko'chirilsa ham manzillar buzilmaydi.",
          },
          {
            type: "table",
            head: ["Xizmat", "Qulayligi"],
            rows: [
              ["GitHub Pages", "Repo bilan bevosita bog'lanadi, bepul"],
              ["Netlify", "Drag-and-drop va avtomatik deploy"],
              ["Vercel", "Git integratsiyasi va preview havolalar"],
              ["Cloudflare Pages", "Global CDN va tez keshlash"],
              ["An'anaviy hosting", "FTP yoki panel orqali fayl yuklash"],
            ],
          },
          {
            type: "code",
            title: "404.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Sahifa topilmadi</title>
  <style>
    body {
      margin: 0; min-height: 100vh;
      display: grid; place-items: center;
      font-family: system-ui, sans-serif;
      background: #0f172a; color: #e2e8f0;
    }
    .box { text-align: center; padding: 2rem; }
    .code { font-size: 5rem; font-weight: 800; color: #c9f26b; }
    a { color: #c9f26b; }
  </style>
</head>
<body>
  <main class="box">
    <p class="code">404</p>
    <h1>Sahifa topilmadi</h1>
    <p>Havola eskirgan yoki manzil xato yozilgan.</p>
    <a href="/">Bosh sahifaga qaytish</a>
  </main>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Mavjud bo'lmagan manzil ochilganda to'q fonda katta yashil “404”, “Sahifa topilmadi” sarlavhasi va bosh sahifaga qaytish havolasi chiqadi. Hosting 404.html faylini avtomatik xato sahifasi sifatida ishlatadi.",
          },
          {
            type: "note",
            variant: "warning",
            title: "Nashrdan oldingi tekshiruv",
            html: "Barcha ichki havolalarni bosing, konsolda 404 xatolar yo'qligini ko'ring, HTTPS ishlayotganini tasdiqlang. Yangilangan CSS brauzer keshida qolmasligi uchun fayl nomiga hash qo'shing yoki kesh sarlavhalarini to'g'ri sozlang. Maxfiy kalitlarni frontend fayllariga yozmang.",
          },
        ],
        quiz: [
          {
            q: "Nisbiy yo'l (./css/style.css) qanday afzallik beradi?",
            options: ["Faylni avtomatik siqadi", "CSS'ni JavaScript'ga aylantiradi", "HTTPS'ni yoqadi", "Sayt ichki papkada joylashganda ham fayl topiladi"],
            answer: 3,
            explain: "Nisbiy yo'l joriy sahifa joylashuvidan hisoblanadi, shuning uchun sayt ildizda yoki ichki papkada bir xil ishlaydi.",
          },
          {
            q: "404.html faylining vazifasi nima?",
            options: ["Bosh sahifani yuklash", "Mavjud bo'lmagan manzil uchun tushunarli xato sahifasini ko'rsatish", "Formani yuborish", "Rasmni keshlash"],
            answer: 1,
            explain: "Ko'p statik hostinglar 404.html ni avtomatik xato sahifasi sifatida ko'rsatadi.",
          },
          {
            q: "CSS fayl nomiga hash qo'shishning maqsadi nima?",
            options: ["Faylni parollash", "Faylni kichraytirish", "Brauzer eski keshlangan versiyani ishlatmasligi", "Faylni SVG'ga aylantirish"],
            answer: 2,
            explain: "Nom o'zgarganda brauzer yangi fayl deb hisoblaydi va eski kesh nusxasini ishlatmaydi.",
          },
        ],
      },
      {
        id: 44,
        title: "Loyiha 1: portfolio rejasi va dizayn tokenlari",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi kurs bo'yi o'rganganlarimizni bitta haqiqiy loyihada birlashtiramiz: shaxsiy portfolio sahifasi. Avval mazmun va tuzilmani rejalashtiramiz, keyin rang, shrift va bo'shliqlarni <b>dizayn tokenlari</b>ga yig'amiz. Shoshilib kod yozishdan oldin reja vaqtni tejaydi.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aziza Karimova — frontend dasturchi</title>
  <meta name="description"
        content="Toshkentdagi frontend dasturchi. HTML, CSS va JavaScript bilan tez, qulay saytlar yarataman.">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <a class="skip-link" href="#main">Asosiy mazmunga o'tish</a>

  <header class="site-header">
    <a class="brand" href="#">Aziza<span aria-hidden="true">.</span></a>
    <nav class="site-nav" aria-label="Asosiy menyu">
      <a href="#haqida">Men haqimda</a>
      <a href="#loyihalar">Loyihalar</a>
      <a href="#aloqa">Aloqa</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-sarlavha">
      <p class="eyebrow">Frontend dasturchi</p>
      <h1 id="hero-sarlavha">G'oyalarni tez va qulay veb-sahifaga aylantiraman.</h1>
      <p class="hero__text">
        HTML, CSS va JavaScript bilan moslashuvchan interfeyslar yarataman.
        Har bir loyihada aniqlik, tezlik va foydalanuvchi qulayligiga e'tibor beraman.
      </p>
      <div class="hero__actions">
        <a class="btn" href="#loyihalar">Loyihalarni ko'rish</a>
        <a class="btn btn--ghost" href="#aloqa">Bog'lanish</a>
      </div>
    </section>
  </main>
</body>
</html>`,
            outputLabel: "Natija",
            output: "Sahifada hozircha uslubsiz holatda: yuqorida “Aziza.” logotipi va uch havolali menyu, ostida “Frontend dasturchi” yozuvi, katta sarlavha, tavsif va ikkita havola-tugma chiqadi. Tuzilma semantik bo'lib, barcha bo'limlar uchun id va anchor'lar tayyor.",
          },
          {
            type: "code",
            title: "tokens.css",
            lang: "css",
            code: `:root {
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-accent: #5b4df6;
  --color-accent-strong: #4338ca;
  --color-border: #e2e8f0;

  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --text-hero: clamp(2.25rem, 1.2rem + 5vw, 4.5rem);

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 4rem;

  --radius-sm: 0.5rem;
  --radius-lg: 1.25rem;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.1);
  --container: 68rem;
}`,
            outputLabel: "Natija",
            output: "Sahifaning ko'rinishi hali o'zgarmaydi, lekin 22 ta dizayn tokeni e'lon qilinadi. Keyingi darslarda ranglar, bo'shliqlar, burchaklar va konteyner kengligi shu tokenlar orqali ishlatiladi; bitta qiymatni o'zgartirish butun saytga tarqaladi.",
          },
          {
            type: "table",
            head: ["Fayl", "Vazifasi"],
            rows: [
              ["<code>index.html</code>", "Bosh sahifa tuzilmasi va mazmuni"],
              ["<code>css/tokens.css</code>", "Rang, shrift, bo'shliq va boshqa tokenlar"],
              ["<code>css/style.css</code>", "Komponentlar va layout uslublari"],
              ["<code>images/</code>", "Optimallashtirilgan WebP rasmlar"],
              ["<code>js/main.js</code>", "Menyu va mavzu almashtirish (keyinroq)"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Avval mazmun, keyin bezak",
            html: "Wireframe'da bo'limlar tartibini qog'ozda chizing: hero, men haqimda, loyihalar, aloqa. Har bir bo'limda bitta asosiy fikr bo'lsin. Dizayn tokenlarini oldindan kelishib olsangiz, keyingi sahifalarda rang va o'lchamlar tasodifiy bo'lib qolmaydi.",
          },
        ],
        quiz: [
          {
            q: "Dizayn tokeni nima?",
            options: ["Rang, bo'shliq yoki shrift kabi qayta ishlatiladigan dizayn qiymati", "Faqat rasm fayli", "HTML tegi", "JavaScript funksiyasi"],
            answer: 0,
            explain: "Token dizayn qarorini nomlangan qiymat sifatida saqlaydi va butun loyihada izchillikni ta'minlaydi.",
          },
          {
            q: "Portfolio sahifasida nechta h1 bo'lishi maqsadga muvofiq?",
            options: ["Har bo'limda bittadan", "Kamida uchta", "Umuman bo'lmasligi kerak", "Bitta"],
            answer: 3,
            explain: "Sahifada bitta asosiy h1 bo'lib, bo'limlar h2 va h3 bilan tuziladi.",
          },
          {
            q: "Nima uchun loyihada nisbiy yo'llar ishlatiladi?",
            options: ["Fayllar hajmini kamaytirish uchun", "Sayt ichki papkaga joylashtirilganda ham fayllar topilishi uchun", "HTML'ni tezlashtirish uchun", "Rasm sifatini oshirish uchun"],
            answer: 1,
            explain: "Nisbiy yo'llar joriy fayl joylashuviga tayanadi, shuning uchun saytni ko'chirish oson.",
          },
        ],
      },
      {
        id: 45,
        title: "Loyiha 2: header va hero bo'limi",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi skeletga birinchi haqiqiy uslubni beramiz: yopishqoq header, mobil menyu va katta hero. Bu yerda tokenlar, flexbox, <code>clamp()</code>, fokus va <code>svh</code> birligi birgalikda ishlaydi.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<a class="skip-link" href="#main">Asosiy mazmunga o'tish</a>

<header class="site-header">
  <div class="container site-header__inner">
    <a class="brand" href="#">Aziza<span aria-hidden="true">.</span></a>
    <nav class="site-nav" aria-label="Asosiy menyu">
      <a href="#haqida">Men haqimda</a>
      <a href="#loyihalar">Loyihalar</a>
      <a href="#aloqa">Aloqa</a>
    </nav>
  </div>
</header>

<main id="main">
  <section class="hero" aria-labelledby="hero-sarlavha">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="eyebrow">Frontend dasturchi</p>
        <h1 id="hero-sarlavha">
          G'oyalarni <span class="accent">tez va qulay</span> veb-sahifaga aylantiraman.
        </h1>
        <p class="hero__text">
          HTML, CSS va JavaScript bilan moslashuvchan interfeyslar yarataman.
          Har bir loyihada aniqlik va foydalanuvchi qulayligiga e'tibor beraman.
        </p>
        <div class="hero__actions">
          <a class="btn" href="#loyihalar">Loyihalarni ko'rish</a>
          <a class="btn btn--ghost" href="#aloqa">Bog'lanish</a>
        </div>
      </div>
      <div class="hero__visual" aria-hidden="true">
        <div class="hero__monogram">AK</div>
        <span class="hero__dot hero__dot--one"></span>
        <span class="hero__dot hero__dot--two"></span>
      </div>
    </div>
  </section>
</main>`,
            outputLabel: "Natija",
            output: "Header sahifa tepasida yopishib turadi va ichida logo chapda, menyu o'ngda joylashadi. Hero ikkiga bo'linadi: chapda katta sarlavha, tavsif va ikkita tugma, o'ngda aksent rangli gradient doira ichida to'q “AK” monogrammasi. Klaviaturada Tab bosilganda “Asosiy mazmunga o'tish” havolasi ko'rinadi. Tor ekranda visual matn ostiga tushadi.",
          },
          {
            type: "code",
            title: "style.css",
            lang: "css",
            code: `.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 50;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--color-text);
  color: var(--color-bg);
  transition: top 0.2s ease;
}

.skip-link:focus { top: 1rem; }

.container {
  width: min(100% - 2rem, var(--container));
  margin-inline: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding-inline: var(--space-4);
  border: 1px solid transparent;
  border-radius: 999px;
  background: var(--color-text);
  color: var(--color-bg);
  font-weight: 700;
  text-decoration: none;
}

.btn:hover { background: var(--color-accent); color: var(--color-bg); }

.btn--ghost {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-border);
}

.btn--ghost:hover {
  background: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--color-bg) 88%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: 4.5rem;
}

.brand {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-text);
  text-decoration: none;
}

.brand span { color: var(--color-accent); }

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.site-nav a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0 var(--space-2);
  border-radius: var(--radius-sm);
  color: var(--color-muted);
  text-decoration: none;
  font-weight: 600;
}

.site-nav a:hover {
  color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 12%, transparent);
}

.hero {
  min-height: 100svh;
  display: grid;
  align-items: center;
  padding-block: var(--space-6);
  background:
    radial-gradient(circle at 85% 20%,
      color-mix(in srgb, var(--color-accent) 14%, transparent) 0,
      transparent 30rem),
    var(--color-bg);
}

.hero__inner {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

.hero h1 {
  margin: 0;
  font-size: var(--text-hero);
  line-height: 1.05;
  letter-spacing: -0.03em;
  max-width: 15ch;
}

.accent { color: var(--color-accent); }

.hero__text {
  max-width: 55ch;
  color: var(--color-muted);
  font-size: var(--text-lg);
}

.hero__actions { display: flex; flex-wrap: wrap; gap: var(--space-2); }

.hero__visual {
  position: relative;
  display: grid;
  place-items: center;
  width: min(100%, 26rem);
  aspect-ratio: 1;
  justify-self: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-strong));
  box-shadow: 0 25px 60px color-mix(in srgb, var(--color-accent) 35%, transparent);
}

.hero__monogram {
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 800;
  letter-spacing: -0.06em;
  color: var(--color-bg);
}

.hero__dot {
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: var(--color-bg);
}

.hero__dot--one { top: 12%; right: 8%; }
.hero__dot--two { bottom: 14%; left: 6%; width: 0.75rem; height: 0.75rem; }

@media (min-width: 56rem) {
  .hero__inner { grid-template-columns: 1.1fr 0.9fr; }
}`,
            outputLabel: "Natija",
            output: "Header yarim shaffof oq fonda xira ko'rinadi va skroll paytida tepada qoladi. Hero kamida ekran balandligini egallaydi; 896px dan keng ekranda matn chapda, monogramma o'ngda. Katta sarlavha 36px dan 72px gacha moslashadi, “tez va qulay” qismi binafsha rangda.",
          },
          {
            type: "table",
            head: ["Class", "Vazifasi"],
            rows: [
              ["<code>.skip-link</code>", "Klaviatura foydalanuvchisiga menyuni o'tkazib yuborish imkonini beradi"],
              ["<code>.container</code>", "Sahifa kengligini cheklaydi va markazlaydi"],
              ["<code>.site-header</code>", "Yopishqoq, shaffof header"],
              ["<code>.site-nav a</code>", "44px balandlikdagi qulay havolalar"],
              ["<code>.hero</code>", "To'liq ekranli kirish bo'limi"],
              ["<code>.hero__actions</code>", "Tugmalarni moslashuvchan joylashtiradi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Header'ni yengil saqlang",
            html: "Faqat logo va asosiy havolalar bo'lsin. <code>backdrop-filter</code> chiroyli, lekin eski qurilmada sekinlashishi mumkin; unga tayanib qolmang. Mobil menyu uchun keyinroq <code>details</code> yoki kichik JavaScript ishlatsangiz, tugmaga <code>aria-expanded</code> qo'shishni unutmang.",
          },
        ],
        quiz: [
          {
            q: "Hero bo'limida 100svh ishlatishning maqsadi nima?",
            options: ["Matnni markazlash", "Rasmni yuklashni tezlashtirish", "Mobil brauzer panelini hisobga olib, ekran balandligini egallash", "Header'ni yashirish"],
            answer: 2,
            explain: "svh small viewport height bo'lib, mobil brauzer paneli ko'rinib turgan holatdagi balandlikni beradi.",
          },
          {
            q: "site-header'da position: sticky nima qiladi?",
            options: ["Skroll paytida header'ni tepada ushlab turadi", "Header'ni butunlay yashiradi", "Sahifani markazlaydi", "Menyuni ustunga aylantiradi"],
            answer: 0,
            explain: "sticky va top: 0 birgalikda header skroll bo'lganda yuqori chetga yopishishini ta'minlaydi.",
          },
          {
            q: "Navigatsiya havolalarining min-height: 2.75rem qiymati nima uchun tanlangan?",
            options: ["Shriftni kattalashtirish uchun", "Rasmni kesish uchun", "Sahifani tezlashtirish uchun", "Barmoq bilan ishonchli bosish maydoni uchun"],
            answer: 3,
            explain: "2.75rem — taxminan 44px, sensorli ekranda qulay tegish maydoni hisoblanadi.",
          },
        ],
      },
      {
        id: 46,
        title: "Loyiha 3: men haqimda va loyihalar bo'limi",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Portfolio sahifaning yuragi — ishlaringiz. “Men haqimda” bo'limi qisqa va aniq bo'lsin, loyihalar esa haqiqiy natija va havolalar bilan ko'rsatilsin. Kartalarni Grid bilan joylashtirib, har birini mustaqil <code>article</code> qilamiz.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<section class="section" id="haqida" aria-labelledby="haqida-sarlavha">
  <div class="container about">
    <div>
      <p class="eyebrow">Men haqimda</p>
      <h2 id="haqida-sarlavha">Oddiy, tez va tushunarli interfeyslar.</h2>
      <p>
        Ikki yildan beri veb-saytlar yarataman. Kichik biznes va ta'lim
        loyihalarida dizaynni toza HTML va CSS bilan jonlantirishga yordam beraman.
      </p>
      <p>
        Bo'sh vaqtimda yangi CSS imkoniyatlarini o'rganaman va ochiq manbali
        loyihalarga hissa qo'shaman.
      </p>
    </div>
    <ul class="skills" aria-label="Ko'nikmalar">
      <li class="skill">HTML</li>
      <li class="skill">CSS</li>
      <li class="skill">JavaScript</li>
      <li class="skill">Accessibility</li>
      <li class="skill">Figma</li>
      <li class="skill">Git</li>
    </ul>
  </div>
</section>

<section class="section section--muted" id="loyihalar" aria-labelledby="loyihalar-sarlavha">
  <div class="container">
    <p class="eyebrow">Tanlangan ishlar</p>
    <h2 id="loyihalar-sarlavha">Loyihalar</h2>

    <div class="project-grid">
      <article class="project-card project-card--featured">
        <img class="project-card__image"
             src="https://picsum.photos/id/180/800/500"
             alt="Noutbukda ochilgan portfolio sahifasi"
             width="800" height="500" loading="lazy">
        <div class="project-card__body">
          <h3 class="project-card__title">Shaxsiy portfolio</h3>
          <p class="project-card__text">
            Semantik HTML, CSS Grid va qorong'i mavzuga ega bir sahifali sayt.
          </p>
          <a class="project-card__link" href="https://github.com/aziza/portfolio">
            Kodni ko'rish <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>

      <article class="project-card">
        <img class="project-card__image"
             src="https://picsum.photos/id/48/800/500"
             alt="Kafe stolidagi ochiq noutbuk"
             width="800" height="500" loading="lazy">
        <div class="project-card__body">
          <h3 class="project-card__title">Online kurs sahifasi</h3>
          <p class="project-card__text">
            Formalar, video va moslashuvchan jadval bilan o'quv platformasi.
          </p>
          <a class="project-card__link" href="https://github.com/aziza/course-page">
            Kodni ko'rish <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </div>
  </div>
</section>`,
            outputLabel: "Natija",
            output: "“Men haqimda” bo'limida sarlavha, ikki abzats va oltita ko'nikma yorlig'i chiqadi. Ostidagi “Loyihalar” bo'limida ikkita rasmli karta bor: keng ekranda yonma-yon, tor ekranda ustma-ust. Har bir kartada sarlavha, tavsif va “Kodni ko'rish →” havolasi mavjud.",
          },
          {
            type: "code",
            title: "style.css",
            lang: "css",
            code: `.section { padding-block: clamp(3rem, 8vw, 6rem); }
.section--muted { background: var(--color-surface); }

.about {
  display: grid;
  gap: var(--space-5);
  align-items: start;
}

.about h2 {
  font-size: clamp(1.75rem, 1.2rem + 2vw, 2.75rem);
  line-height: 1.15;
  max-width: 18ch;
}

.about p { max-width: 60ch; color: var(--color-muted); }

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: 0;
  margin: 0;
  list-style: none;
}

.skill {
  padding: 0.45rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  font-size: var(--text-sm);
  font-weight: 600;
}

.project-grid {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-5);
}

.project-card {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg);
}

.project-card__image {
  display: block;
  width: 100%;
  height: 13rem;
  object-fit: cover;
}

.project-card__body { padding: var(--space-4); }
.project-card__title { margin: 0 0 var(--space-2); }
.project-card__text { color: var(--color-muted); }

.project-card__link {
  display: inline-flex;
  gap: 0.35rem;
  margin-top: var(--space-3);
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: none;
}

.project-card__link:hover { text-decoration: underline; }

.project-card--featured {
  border-color: color-mix(in srgb, var(--color-accent) 45%, var(--color-border));
}

@media (min-width: 48rem) {
  .about { grid-template-columns: 1.4fr 1fr; }
  .project-grid { grid-template-columns: repeat(2, 1fr); }
  .project-card--featured { grid-row: span 2; }
}`,
            outputLabel: "Natija",
            output: "768px dan keng ekranda “Men haqimda” matni chapda, ko'nikmalar o'ngda; loyihalar ikki ustunda, featured karta ikki qator balandligida chiqadi. Kartalar yumaloq burchak va yumshoq chegara bilan ajraladi, rasmlar 208px balandlikda kesiladi.",
          },
          {
            type: "table",
            head: ["Element", "Semantik vazifasi"],
            rows: [
              ["<code>section</code> + <code>aria-labelledby</code>", "Sarlavhali mazmuniy bo'lim"],
              ["<code>ul.skills</code>", "Ko'nikmalar ro'yxati"],
              ["<code>article.project-card</code>", "Mustaqil loyiha kartasi"],
              ["<code>img</code> + <code>alt</code>", "Loyiha rasmi va muqobil matni"],
              ["<code>h2 → h3</code>", "Sarlavhalar ierarxiyasi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Loyihani isbot bilan ko'rsating",
            html: "Har bir loyiha uchun muammo, yechim va natijani bir-ikki gapda yozing. “Chiroyli sayt” o'rniga “mobil qurilmada 1 soniyada ochiladi” kabi aniq natija bering. Havolalar yangi oynada ochilsa, <code>rel=\"noopener\"</code> qo'shishni unutmang.",
          },
        ],
        quiz: [
          {
            q: "Har bir loyiha kartasi uchun qaysi element eng mos?",
            options: ["div", "article", "span", "section"],
            answer: 1,
            explain: "article mustaqil, alohida tarqatilishi mumkin bo'lgan loyiha kartasini bildiradi.",
          },
          {
            q: "Ko'nikmalar ro'yxatini semantik jihatdan qanday yozish to'g'ri?",
            options: ["Bir nechta div ichida", "Faqat p teglari bilan", "ul va li elementlari bilan", "Table ichida"],
            answer: 2,
            explain: "Ko'nikmalar teng huquqli elementlar ro'yxati bo'lgani uchun ul/li mos keladi.",
          },
          {
            q: "project-grid'da repeat(2, 1fr) nima qiladi?",
            options: ["Ikki teng ustun yaratadi", "Ikki qator yaratadi", "Ikki marta takror animatsiya qiladi", "Ikkita rasm yuklaydi"],
            answer: 0,
            explain: "repeat(2, 1fr) ikkita teng kenglikdagi ustun yaratadi.",
          },
        ],
      },
{
        id: 47,
        title: "Loyiha 4: aloqa formasi va footer",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Portfolio sahifasining yakuniy qismi — aloqa. Forma iloji boricha qisqa bo'lsin: ism, email va xabar yetarli. Har bir maydon yorliq, avtomatik to'ldirish va aniq xato ko'rsatkichi bilan jihozlansin. Footer esa aloqa va ijtimoiy havolalarni takrorlab, sahifani yakunlaydi.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<section class="section" id="aloqa" aria-labelledby="aloqa-sarlavha">
  <div class="container contact">
    <div class="contact__intro">
      <p class="eyebrow">Aloqa</p>
      <h2 id="aloqa-sarlavha">Loyihangiz haqida gaplashamiz.</h2>
      <p>
        Sayt yoki interfeys kerakmi? Qisqa xabar qoldiring — odatda bir ish
        kunida javob beraman.
      </p>
      <ul class="contact__links">
        <li><a href="mailto:aziza@example.com">aziza@example.com</a></li>
        <li><a href="https://t.me/aziza">Telegram: @aziza</a></li>
      </ul>
    </div>

    <form class="contact-form" action="/aloqa" method="post">
      <div class="field">
        <label for="ism">Ismingiz</label>
        <input id="ism" name="ism" type="text"
               autocomplete="name" required>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input id="email" name="email" type="email"
               autocomplete="email" required>
      </div>

      <div class="field">
        <label for="xabar">Xabar</label>
        <textarea id="xabar" name="xabar" rows="4"
                  placeholder="Qanday loyiha ustida ishlayapsiz?"
                  required></textarea>
      </div>

      <label class="check">
        <input type="checkbox" name="rozilik" required>
        <span>Ma'lumotlarimni javob uchun ishlatishga roziman.</span>
      </label>

      <button class="btn" type="submit">Xabar yuborish</button>
      <p class="form-note" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>

<footer class="site-footer">
  <div class="container site-footer__inner">
    <p>© 2026 Aziza Karimova. Toshkent.</p>
    <nav aria-label="Ijtimoiy tarmoqlar">
      <a href="https://github.com/aziza">GitHub</a>
      <a href="https://www.linkedin.com/in/aziza">LinkedIn</a>
    </nav>
  </div>
</footer>`,
            outputLabel: "Natija",
            output: "Chapda “Loyihangiz haqida gaplashamiz.” sarlavhasi, tavsif, email va Telegram havolalari; o'ngda ism, email, to'rt qatorli xabar maydoni, rozilik checkboxi va “Xabar yuborish” tugmasi chiqadi. Pastda footer'da mualliflik qatori va GitHub, LinkedIn havolalari ko'rinadi.",
          },
          {
            type: "code",
            title: "style.css",
            lang: "css",
            code: `.contact {
  display: grid;
  gap: var(--space-5);
  align-items: start;
}

.contact h2 {
  font-size: clamp(1.75rem, 1.2rem + 2vw, 2.75rem);
  max-width: 16ch;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  padding: 0;
  list-style: none;
}

.contact__links a { color: var(--color-accent); font-weight: 600; }

.contact-form {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow);
}

.field { display: grid; gap: 0.35rem; }
.field label { font-weight: 600; font-size: var(--text-sm); }

.field input,
.field textarea {
  width: 100%;
  padding: 0.7rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: var(--radius-sm);
  font: inherit;
  background: var(--color-bg);
  color: var(--color-text);
}

.field input:focus-visible,
.field textarea:focus-visible {
  outline: 3px solid #a5b4fc;
  outline-offset: 2px;
  border-color: var(--color-accent);
}

.check {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: var(--text-sm);
  color: var(--color-muted);
}

.check input { accent-color: var(--color-accent); margin-top: 0.2rem; }

.site-footer { border-top: 1px solid var(--color-border); padding-block: var(--space-5); }

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-3);
  color: var(--color-muted);
  font-size: var(--text-sm);
}

.site-footer nav { display: flex; gap: var(--space-3); }
.site-footer a { color: var(--color-text); text-decoration: none; }
.site-footer a:hover { color: var(--color-accent); }

@media (min-width: 56rem) {
  .contact { grid-template-columns: 1fr 1.1fr; }
}`,
            outputLabel: "Natija",
            output: "896px dan keng ekranda aloqa matni chapda, forma o'ngda karta sifatida turadi. Maydonlar fokuslanganda och ko'k kontur oladi, checkbox binafsha rangda belgilanadi. Footer'da matn chapga, ijtimoiy havolalar o'ngga tekislanadi; tor ekranda hammasi ustma-ust joylashadi.",
          },
          {
            type: "table",
            head: ["Atribut", "Nima uchun"],
            rows: [
              ["<code>autocomplete=\"name\"</code>", "Brauzerga ismni avtomatik to'ldirishga yordam beradi"],
              ["<code>autocomplete=\"email\"</code>", "Email manzilini taklif qiladi"],
              ["<code>rows=\"4\"</code>", "Textarea balandligini to'rt qator qiladi"],
              ["<code>required</code>", "Maydonni majburiy qiladi"],
              ["<code>role=\"status\"</code>", "Natija xabarini ekran o'quvchiga e'lon qiladi"],
            ],
          },
          {
            type: "note",
            variant: "warning",
            title: "Formani serverda tekshiring",
            html: "HTML validatsiyasi foydalanuvchiga yordam beradi, lekin xavfsizlikni ta'minlamaydi. Ma'lumotni serverda ham tekshiring, spamdan himoyalang va maxfiy kalitlarni frontendga chiqarmang. Muvaffaqiyatli yuborilgandan keyin <code>role=\"status\"</code> blokiga qisqa tasdiq yozing.",
          },
        ],
        quiz: [
          {
            q: "autocomplete=\"email\" atributi nima qiladi?",
            options: ["Emailni serverga yuboradi", "Maydonni majburiy qiladi", "Email formatini tekshiradi", "Brauzerga email manzilini avtomatik to'ldirishni taklif qiladi"],
            answer: 3,
            explain: "autocomplete brauzerga saqlangan ma'lumotdan maydonni to'ldirishga yordam beradi; formatni type=\"email\" tekshiradi.",
          },
          {
            q: "textarea uchun rows=\"4\" nimani bildiradi?",
            options: ["Maydon 4 belgidan iborat", "Maydonda taxminan 4 qator ko'rinadi", "Faqat 4 ta xabar yuboriladi", "Maydon 4px kenglikda"],
            answer: 1,
            explain: "rows matn maydonining boshlang'ich balandligini qatorlar sonida belgilaydi.",
          },
          {
            q: "site-footer ichida qaysi mazmun semantik jihatdan mos?",
            options: ["Sahifaning asosiy maqolasi", "Faqat eng katta sarlavha", "Mualliflik, aloqa va qo'shimcha havolalar", "Forma maydonlari"],
            answer: 2,
            explain: "footer sahifa yoki bo'limning yakuniy, qo'shimcha ma'lumotlarini bildiradi.",
          },
        ],
      },
      {
        id: 48,
        title: "Loyiha 5: qorong'i mavzu va harakat",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Endi portfolioga qorong'i mavzu va yengil harakat qo'shamiz. Mavzu tokenlarni almashtiradi, animatsiya esa bo'limlarga e'tiborni yo'naltiradi. Ikkalasi ham foydalanuvchi sozlamalariga hurmat bilan yondashishi kerak.",
          },
          {
            type: "code",
            title: "theme.css",
            lang: "css",
            code: `:root {
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-accent: #5b4df6;
  --color-border: #e2e8f0;
  color-scheme: light;
}

[data-theme="dark"] {
  --color-bg: #0b1120;
  --color-surface: #111827;
  --color-text: #f1f5f9;
  --color-muted: #cbd5e1;
  --color-accent: #c9f26b;
  --color-accent-strong: #a3e635;
  --color-border: #1f2937;
  color-scheme: dark;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.25s ease, color 0.25s ease;
}

.theme-toggle {
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;
  transition: transform 0.25s ease;
}

.theme-toggle:hover { transform: rotate(15deg); }`,
            outputLabel: "Natija",
            output: "Yorug' mavzuda oq fon va to'q matn, qorong'i mavzuda esa to'q ko'k fon va och matn ko'rinadi. Mavzu tugmasi ustiga sichqoncha kelganda 15 daraja buriladi. JavaScript html elementiga data-theme=\"dark\" qo'shsa, butun sahifa ranglari 0.25 soniyada silliq almashadi.",
          },
          {
            type: "code",
            title: "motion.css",
            lang: "css",
            code: `.reveal {
  animation: rise 0.6s ease-out both;
}

.reveal:nth-child(2) { animation-delay: 0.12s; }
.reveal:nth-child(3) { animation-delay: 0.24s; }

@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { animation: none; }
  .theme-toggle { transition: none; }
  .theme-toggle:hover { transform: none; }
}`,
            outputLabel: "Natija",
            output: "Sahifa ochilganda uchta bo'lim pastdan 18px ko'tarilib, 0.6 soniyada ko'rinadi; ikkinchi va uchinchi bo'lim 0.12 va 0.24 soniya kechikadi. Anchor havolalar silliq skroll qiladi. Kam harakat sozlamasida animatsiya, silliq skroll va burilish effekti o'chadi.",
          },
          {
            type: "table",
            head: ["Yechim", "Vazifasi"],
            rows: [
              ["<code>data-theme=\"dark\"</code>", "Tanlangan mavzuni html'da saqlaydi"],
              ["<code>color-scheme</code>", "Brauzerning native elementlarini moslaydi"],
              ["<code>aria-pressed</code>", "Mavzu tugmasining yoqilgan holatini bildiradi"],
              ["<code>scroll-behavior: smooth</code>", "Anchor o'tishlarini yumshatadi"],
              ["<code>prefers-reduced-motion</code>", "Harakatni kamaytirishni hurmat qiladi"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Mavzuni eslab qoling",
            html: "Tanlangan mavzuni <code>localStorage</code>da saqlang va sahifa yuklanishida html'ga erta qo'llang, aks holda bir lahza yorug' tema ko'rinishi mumkin. Tugma holatini <code>aria-pressed</code> bilan yangilang. Tizim mavzusini ham boshlang'ich qiymat sifatida olish mumkin.",
          },
        ],
        quiz: [
          {
            q: "Mavzu almashtirish tugmasining yoqilgan holatini qaysi atribut bildiradi?",
            options: ["aria-pressed", "aria-expanded", "aria-current", "aria-live"],
            answer: 0,
            explain: "aria-pressed ikki holatli (bosilgan/bosilmagan) tugma uchun ishlatiladi.",
          },
          {
            q: "scroll-behavior: smooth nima qiladi?",
            options: ["Sahifani avtomatik yangilaydi", "Barcha animatsiyalarni o'chiradi", "Matnni markazlaydi", "Anchor havolaga o'tishni silliq qiladi"],
            answer: 3,
            explain: "CSS smooth scroll bir sahifa ichidagi anchor o'tishlarini yumshoq harakat bilan bajaradi.",
          },
          {
            q: "prefers-reduced-motion: reduce bloki nima uchun kerak?",
            options: ["Rasmlarni yashirish uchun", "Harakatga sezgir foydalanuvchilar uchun animatsiyani kamaytirish uchun", "Sahifani chop etish uchun", "Shriftni kattalashtirish uchun"],
            answer: 1,
            explain: "Bu sozlama foydalanuvchining harakatni kamaytirish tanlovini hurmat qilib, animatsiyalarni o'chiradi yoki soddalashtiradi.",
          },
        ],
      },
      {
        id: 49,
        title: "Loyiha 6: tekshiruv, optimizatsiya va nashr",
        minutes: 18,
        blocks: [
          {
            type: "p",
            html: "Portfolio deyarli tayyor. Endi uni sinchkovlik bilan tekshiramiz: sarlavhalar ierarxiyasi, alt matnlari, klaviatura fokusi, kontrast, linklar, rasm o'lchamlari va meta ma'lumotlar. So'ng Lighthouse auditini o'tkazib, saytni statik hostingga joylaymiz.",
          },
          {
            type: "code",
            title: "index.html",
            code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aziza Karimova — frontend dasturchi</title>
  <meta name="description"
        content="HTML, CSS va JavaScript bilan tez, qulay saytlar yaratuvchi frontend dasturchi portfolio sahifasi.">
  <link rel="canonical" href="https://aziza.uz/">
  <meta name="theme-color" content="#f8fafc">
  <meta property="og:title" content="Aziza Karimova — frontend dasturchi">
  <meta property="og:description" content="Tanlangan loyihalar va aloqa.">
  <meta property="og:image" content="https://aziza.uz/assets/og-cover.jpg">
  <meta property="og:type" content="website">

  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="/fonts/inter-var.woff2" as="font"
        type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="stylesheet" href="/css/style.css">
  <script src="/js/main.js" defer></script>
</head>`,
            outputLabel: "Natija",
            output: "Brauzer yorlig'ida “Aziza Karimova — frontend dasturchi” ko'rinadi. Qidiruv va ijtimoiy tarmoq kartasi to'g'ri sarlavha, tavsif va rasm bilan shakllanadi. Shrift oldindan yuklanadi, CSS ikki faylda ulanadi, JavaScript esa sahifa tayyor bo'lgach ishga tushadi.",
          },
          {
            type: "code",
            title: "print.css",
            lang: "css",
            code: `@page { size: A4; margin: 14mm; }

@media print {
  :root {
    --color-bg: #ffffff;
    --color-surface: #ffffff;
    --color-text: #000000;
    --color-muted: #333333;
  }

  .site-header,
  .theme-toggle,
  .hero__visual,
  .contact-form,
  .site-footer {
    display: none;
  }

  body { font-size: 11pt; background: #ffffff; }

  .section { padding-block: 1rem; break-inside: avoid; }

  a { color: #000000; text-decoration: underline; }

  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
  }

  .project-card { box-shadow: none; break-inside: avoid; }
}`,
            outputLabel: "Natija",
            output: "Chop etishda header, mavzu tugmasi, hero visuali, forma va footer yashiriladi. Portfolio oq fon, qora matn va 11pt shriftda A4 sahifaga joylashadi; loyiha kartalari sahifalar orasida bo'linmaydi, tashqi havolalar manzili qavs ichida chiqadi.",
          },
          {
            type: "table",
            head: ["Tekshiruv", "Kutilgan holat"],
            rows: [
              ["Sarlavhalar", "Bitta h1, bo'limlarda h2 va h3"],
              ["Rasmlar", "alt, width/height va lazy loading"],
              ["Klaviatura", "Barcha havola va tugmalar fokuslanadi"],
              ["Kontrast", "Oddiy matn kamida 4.5:1"],
              ["Lighthouse", "Performance, accessibility, SEO 90+"],
              ["Deploy", "HTTPS, 404 sahifa, ishlaydigan havolalar"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Nashrga tayyor",
            html: "Auditdan keyin saytni GitHub Pages yoki Netlify'ga joylang. Domen va HTTPS'ni sozlang, <code>robots.txt</code> hamda <code>sitemap.xml</code> qo'shing. Har o'zgarishdan keyin mobil ekranda va klaviatura bilan qayta tekshiring — sayt hech qachon “tugallanmaydi”, u doim yaxshilanadi.",
          },
        ],
        quiz: [
          {
            q: "Lighthouse auditida qaysi yo'nalish tekshirilmaydi?",
            options: ["Performance", "Accessibility", "Serverning uptime tarixi", "SEO"],
            answer: 2,
            explain: "Lighthouse sahifa sifati va texnik ko'rsatkichlarini tekshiradi; server uptime monitoringi uning vazifasi emas.",
          },
          {
            q: "print.css ichida .site-header { display: none; } nimaga olib keladi?",
            options: ["Header chop etilgan hujjatda ko'rinmaydi", "Header faqat mobil ekranda ko'rinadi", "Header butunlay o'chiriladi", "Header rasmga aylanadi"],
            answer: 0,
            explain: "Qoida @media print ichida bo'lsa, faqat chop etishda header yashiriladi; ekranda u saqlanadi.",
          },
          {
            q: "Nashrdan oldin qaysi tekshiruv eng muhim?",
            options: ["Fayl nomini o'zgartirish", "Yangi shrift qo'shish", "Barcha animatsiyalarni o'chirish", "Buzilgan havolalar va konsol xatolarini topish"],
            answer: 3,
            explain: "Ishlamaydigan havolalar va xatolar foydalanuvchini darhol kutib oladi; ularni nashrdan oldin tuzatish kerak.",
          },
        ],
      },
      {
        id: 50,
        title: "Yakuniy imtihon",
        minutes: 15,
        isExam: true,
        blocks: [
          {
            type: "p",
            html: "Tabriklaymiz — 49 ta darsni yakunladingiz. Endi HTML & CSS bo'yicha bilimlaringizni yakuniy imtihonda sinab ko'ring. Savollar semantik HTML, qulaylik, media, SEO, CSS asoslari, joylashuv, moslashuv, animatsiya va zamonaviy vositalarni qamrab oladi.",
          },
          {
            type: "ul",
            items: [
              "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
              "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
              "Imtihonni qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
              "Yakunlagach sertifikatni ko'rish va PDF qilib saqlash mumkin.",
            ],
          },
          {
            type: "table",
            head: ["Yo'nalish", "Savollar"],
            rows: [
              ["HTML, media va SEO", "1–3"],
              ["Zamonaviy selektorlar va Grid", "4–5"],
              ["Moslashuvchan CSS", "6–7"],
              ["Rasm va qulaylik", "8–9"],
              ["Chop etish, joylashuv va Tailwind", "10–12"],
            ],
          },
          {
            type: "note",
            variant: "tip",
            title: "Imtihon oldidan",
            html: "Portfolio loyihangizni mobil ekranda ochib ko'ring, klaviatura bilan yuring va Lighthouse natijasini tekshiring. Xatolardan qo'rqmang: har bir noto'g'ri javob izohi sizga aniq mavzuni ko'rsatadi.",
          },
        ],
        quiz: [],
      }
    ],
exam: {
      passScore: 9,
      total: 12,
      questions: [
        {
          q: "Qurilma ekraniga qarab 400w, 800w yoki 1200w rasm variantidan mosini tanlashga qaysi juftlik yordam beradi?",
          options: ["width va height", "srcset va sizes", "alt va title", "loading va decoding"],
          answer: 1,
          explain: "srcset fayl variantlarini, sizes esa rasmning sahifadagi taxminiy o'lchamini beradi; brauzer ikkalasiga qarab mosini tanlaydi.",
        },
        {
          q: "Ochiladigan menyu ochiq yoki yopiqligini ekran o'quvchiga qaysi atribut orqali aytish to'g'ri?",
          options: ["aria-hidden", "aria-label", "aria-expanded", "role"],
          answer: 2,
          explain: "aria-expanded=\"true\" yoki \"false\" boshqariladigan blokning ochiq-yopiq holatini bildiradi.",
        },
        {
          q: "Bir xil mazmun bir nechta manzilda ochilganda qaysi havola asosiy manzilni bildiradi?",
          options: ["og:url", "robots", "alternate", "canonical"],
          answer: 3,
          explain: "link rel=\"canonical\" qidiruv tizimiga asosiy manzilni ko'rsatadi va dublikat mazmun muammosini kamaytiradi.",
        },
        {
          q: "Selektordagi :where(.card) qismi specificity'ga qancha hissa qo'shadi?",
          options: ["0 (nol)", "class bilan bir xil", "id bilan bir xil", "element bilan bir xil"],
          answer: 0,
          explain: ":where() argumentidan qat'i nazar nol specificity qo'shadi; qolgan selektor qismlari o'z hissasini beradi.",
        },
        {
          q: "grid-template-areas bilan chizilgan maketda elementni nomlangan hududga qaysi xossa joylashtiradi?",
          options: ["grid-row", "grid-area", "grid-column", "place-self"],
          answer: 1,
          explain: "grid-area elementni template-areas ichidagi nom bilan bog'laydi, masalan grid-area: main.",
        },
        {
          q: "clamp(2rem, 4vw, 4rem) qanday o'lcham beradi?",
          options: ["Har doim 4rem", "Faqat 2rem", "2rem va 4rem oralig'ida cheklangan moslashuvchan qiymat", "4vw dan kichik bo'lmagan cheksiz qiymat"],
          answer: 2,
          explain: "clamp o'rta qiymatni 4vw asosida hisoblaydi, lekin natijani 2rem dan kichik va 4rem dan katta qilmaydi.",
        },
        {
          q: "Komponentni ekran emas, o'z ota konteyneri kengligiga qarab moslash uchun qaysi texnika ishlatiladi?",
          options: ["media query", "flexbox", "grid", "container query"],
          answer: 3,
          explain: "Container query ota konteynerda container-type bo'lsa, @container sharti orqali komponentni o'lchamga moslaydi.",
        },
        {
          q: "Ichida rasm bo'lgan kartani CSS'da qanday tanlash mumkin?",
          options: [".card:has(img)", ".card img", ".card::has(img)", ":has(.card img)"],
          answer: 0,
          explain: ":has() tashqi elementni ichki shartga qarab tanlaydi; .card:has(img) ichida img bo'lgan kartani oladi.",
        },
        {
          q: "loading=\"lazy\" qo'yilgan rasm qachon yuklanadi?",
          options: ["Sahifa ochilishi bilan", "Foydalanuvchi unga yaqinlashganda", "CSS yuklangach", "Faqat chop etishda"],
          answer: 1,
          explain: "Lazy loading rasmni foydalanuvchi ko'rish maydoni yaqiniga kelganda yuklaydi va dastlabki trafikni kamaytiradi.",
        },
        {
          q: "Chop etishda sahifa o'lchami va chegarasini qaysi qoida boshqaradi?",
          options: ["@media screen", "@supports", "@page", "@font-face"],
          answer: 2,
          explain: "@page A4 kabi qog'oz o'lchamini va margin qiymatlarini belgilaydi.",
        },
        {
          q: "position: sticky element qanday ishlaydi?",
          options: ["Har doim ekranga yopishadi", "Oqimdan butunlay chiqadi", "Faqat ota-element ichida qotadi", "Belgilangan chegaraga yetganda yopishib qoladi"],
          answer: 3,
          explain: "sticky element top yoki bottom chegarasiga yetguncha oddiy oqimda qoladi, keyin shu chegarada yopishadi.",
        },
        {
          q: "Tailwind'dagi lg: prefiksi qanday shartda qo'llanadi?",
          options: ["Katta breakpoint va undan keng ekranda", "Faqat kichik ekranda", "Faqat qorong'i mavzuda", "Faqat chop etishda"],
          answer: 0,
          explain: "lg: prefiksi Tailwind'ning katta breakpoint'ida, odatda 1024px va undan keng ekranlarda ishlaydi.",
        },
      ],
    }
  };
})();
