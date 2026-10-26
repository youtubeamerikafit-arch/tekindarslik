/* Noldan — universal course engine for all Noldan courses */
(function () {
  "use strict";

  const Noldan = window.Noldan;
  const registry = window.NOLDAN_COURSES;
  if (!Noldan || !registry) return;

  const params = new URLSearchParams(window.location.search);
  const requested = (params.get("til") || "").toLowerCase();

  function withVolume(base) {
    const volumes = window.NOLDAN_COURSE_VOLUMES;
    const volume = volumes && volumes[base.id];
    if (!volume || !Array.isArray(volume.lessons)) return base;
    const baseExam = base.lessons.find((lesson) => lesson.isExam);
    const baseExamId = baseExam ? baseExam.id : null;
    const learning = base.lessons.filter((lesson) => !lesson.isExam);
    const modules = base.modules.filter(
      (module) => !(module.lessons || []).includes(baseExamId)
    );
    const examLesson = volume.examLesson || baseExam;
    return Object.assign({}, base, {
      modules: modules.concat(volume.modules || []),
      lessons: learning.concat(volume.lessons, examLesson ? [examLesson] : []),
      exam: volume.exam || base.exam,
      hours: volume.hours || base.hours,
      testCount: volume.testCount || base.testCount,
      heroDesc: volume.heroDesc || base.heroDesc,
      metaDescription: volume.metaDescription || base.metaDescription,
    });
  }

  const course = registry[requested] ? withVolume(registry[requested]) : null;
  const courseId = course ? course.id : null;

  const article = document.querySelector("#lessonArticle");
  const lessonList = document.querySelector("[data-lesson-list]");
  const searchInput = document.querySelector("[data-lesson-search]");
  const runnerModal = document.querySelector("#runnerModal");
  const reducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  if (!course || !article || !lessonList) {
    if (article) {
      article.innerHTML =
        '<h1>Kurs topilmadi</h1><p>Iltimos, <a href="kurslar.html">kurslar ro\'yxatidan</a> kerakli kursni tanlang.</p>';
    }
    return;
  }

  Noldan.setActiveCourse(courseId);
  Noldan.updateDynamicUI();

  const lessons = course.lessons.slice().sort((a, b) => a.id - b.id);
  const byId = new Map(lessons.map((lesson) => [lesson.id, lesson]));
  const TOTAL = lessons.length;
  const PASS_SCORE = course.exam.passScore;
  const EXAM_TOTAL = course.exam.total;
  const EXAM_LESSON = lessons.find((lesson) => lesson.isExam);
  const EXAM_ID = EXAM_LESSON ? EXAM_LESSON.id : TOTAL;
  const RING_CIRCUMFERENCE = 2 * Math.PI * 20;
  const LANG_LABELS = {
    js: "javascript",
    html: "html",
    css: "css",
    cpp: "c++",
    sql: "sql",
    java: "java",
    c: "c",
    php: "php",
    ruby: "ruby",
    go: "go",
    rust: "rust",
    ts: "typescript",
    kotlin: "kotlin",
    dart: "dart",
    bash: "bash",
    r: "r",
    scala: "scala",
  };
  const DEFAULT_FILES = {
    js: "main.js",
    html: "index.html",
    css: "style.css",
    cpp: "main.cpp",
    sql: "query.sql",
    java: "Main.java",
    c: "main.c",
    php: "index.php",
    ruby: "main.rb",
    go: "main.go",
    rust: "main.rs",
    ts: "main.ts",
    kotlin: "Main.kt",
    dart: "main.dart",
    bash: "script.sh",
    r: "analysis.R",
    scala: "Main.scala",
  };
  const RUN_LABELS = { js: "Ishga tushirish", html: "Natijani ko'rish", css: "Natijani ko'rish" };

  const codeStore = new Map();
  let currentId = null;
  let searchQuery = "";
  let runnerRun = null;

  const ICONS = {
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 5"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    book:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
    award:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1 8.5 4.5-2.5 4.5 2.5-1-8.5"/></svg>',
    play:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5.5v13l11-6.5Z"/></svg>',
    copy:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    arrowLeft:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    arrowRight:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    quiz:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 9a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1 1-1.1 1.8v.5"/><circle cx="12" cy="17.5" r=".6" fill="currentColor"/><circle cx="12" cy="12" r="9.5"/></svg>',
    info:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    tip:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4.5 1.1.5 2.1h6c0-1-.1-1.7.5-2.1A6 6 0 0 0 12 3Z"/></svg>',
    warning:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 16H3L12 3Z"/><path d="M12 9v4M12 17h.01"/></svg>',
    refresh:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  };

  const esc = Noldan.escapeHtml;

  /* ---------------------------------------------------------------------
     Language glossary (per snippet)
     --------------------------------------------------------------------- */
  const GLOSSARY = {
    js: [
      {
        label: "console.log()",
        cat: "func",
        name: "Konsolga chiqarish",
        desc: "Natijani brauzer konsoliga chiqaradi. O'rganish va xatolarni tekshirishda eng ko'p ishlatiladigan vosita.",
        pattern: /console\.log\s*\(/,
      },
      {
        label: "let",
        cat: "keyword",
        name: "O'zgaruvchi",
        desc: "Qiymati keyinchalik o'zgarishi mumkin bo'lgan o'zgaruvchi yaratadi: <code>let yosh = 15</code>.",
        pattern: /\blet\b/,
      },
      {
        label: "const",
        cat: "keyword",
        name: "O'zgarmas qiymat",
        desc: "Qayta tayinlanmaydigan o'zgaruvchi yaratadi. Massiv yoki obyekt ichidagi ma'lumotni o'zgartirish mumkin, lekin nomni boshqa qiymatga bog'lash mumkin emas.",
        pattern: /\bconst\b/,
      },
      {
        label: "function",
        cat: "keyword",
        name: "Funksiya",
        desc: "Qayta ishlatiladigan kod bloki yaratadi: <code>function salom() { }</code>.",
        pattern: /\bfunction\b/,
      },
      {
        label: "=>",
        cat: "operator",
        name: "Arrow funksiya",
        desc: "Qisqa funksiya yozish usuli: <code>const kvadrat = (n) => n * n;</code>.",
        pattern: /=>/,
      },
      {
        label: "if",
        cat: "keyword",
        name: "Shart",
        desc: "Qavs ichidagi shart rost bo'lsa, jingalak qavs ichidagi blok bajariladi.",
        pattern: /\bif\b/,
      },
      {
        label: "for",
        cat: "keyword",
        name: "Tsikl",
        desc: "Kodni bir necha marta takrorlaydi: <code>for (let i = 0; i &lt; 5; i += 1) { }</code>.",
        pattern: /\bfor\b/,
      },
      {
        label: "return",
        cat: "keyword",
        name: "Natija qaytarish",
        desc: "Funksiyadan qiymat qaytaradi va funksiyani shu joyda tugatadi.",
        pattern: /\breturn\b/,
      },
      {
        label: "document",
        cat: "module",
        name: "Hujjat obyekti",
        desc: "Sahifaning HTML tuzilishiga kirish nuqtasi. <code>document.querySelector()</code> orqali element topiladi.",
        pattern: /\bdocument\b/,
      },
      {
        label: ".querySelector()",
        cat: "method",
        name: "Element topish",
        desc: "CSS selektori bo'yicha birinchi mos elementni qaytaradi: <code>document.querySelector(\"#natija\")</code>.",
        pattern: /\.querySelector(?:All)?\s*\(/,
      },
      {
        label: ".addEventListener()",
        cat: "method",
        name: "Hodisani tinglash",
        desc: "Elementda sodir bo'ladigan hodisaga (bosish, kiritish va h.k.) funksiya bog'laydi.",
        pattern: /\.addEventListener\s*\(/,
      },
      {
        label: "JSON.parse()",
        cat: "func",
        name: "JSON o'qish",
        desc: "JSON matnini JavaScript obyektiga aylantiradi. <code>JSON.stringify()</code> esa teskarisini qiladi.",
        pattern: /JSON\.(?:parse|stringify)\s*\(/,
      },
      {
        label: "async / await",
        cat: "keyword",
        name: "Asinxron kutish",
        desc: "<code>async</code> funksiya ichida <code>await</code> bilan tarmoq javobini kutish mumkin. Kod shu joyda to'xtab, javob kelgach davom etadi.",
        pattern: /\b(?:async|await)\b/,
      },
      {
        label: "fetch()",
        cat: "func",
        name: "So'rov yuborish",
        desc: "Serverga HTTP so'rov yuboradi va <code>Promise</code> qaytaradi. Javobni <code>await response.json()</code> bilan o'qish mumkin.",
        pattern: /\bfetch\s*\(/,
      },
    ],
    html: [
      {
        label: "<!DOCTYPE html>",
        cat: "syntax",
        name: "Hujjat turi",
        desc: "Brauzerga bu zamonaviy HTML5 hujjati ekanini bildiradi. Har doim birinchi qatorda turadi.",
        pattern: /<!DOCTYPE html>/i,
      },
      {
        label: "<html>",
        cat: "syntax",
        name: "Asosiy o'ram",
        desc: "Butun sahifani o'raydi. Ichida <code>head</code> va <code>body</code> bo'ladi.",
        pattern: /<html\b/i,
      },
      {
        label: "<head>",
        cat: "syntax",
        name: "Hujjat sarlavhasi",
        desc: "Sahifa haqidagi texnik ma'lumotlar: sarlavha, kodlash, uslublar va skriptlar shu yerda turadi.",
        pattern: /<head\b/i,
      },
      {
        label: "<body>",
        cat: "syntax",
        name: "Ko'rinadigan qism",
        desc: "Foydalanuvchi ko'radigan barcha matn, rasm va boshqa elementlar shu yerda joylashadi.",
        pattern: /<body\b/i,
      },
      {
        label: "<h1>",
        cat: "syntax",
        name: "Bosh sarlavha",
        desc: "Eng katta sarlavha (<code>h1</code>–<code>h6</code>). Sahifada odatda bitta <code>h1</code> bo'ladi.",
        pattern: /<h[1-6]\b/i,
      },
      {
        label: "<p>",
        cat: "syntax",
        name: "Abzats",
        desc: "Matn paragrafini yaratadi. Har bir <code>p</code> alohida abzats bo'lib chiqadi.",
        pattern: /<p\b/i,
      },
      {
        label: "<a href>",
        cat: "syntax",
        name: "Havola",
        desc: "Boshqa sahifa yoki manzilga o'tkazadi. <code>href</code> — manzil, <code>target=\"_blank\"</code> — yangi oynada ochish.",
        pattern: /<a\s/i,
      },
      {
        label: "<img>",
        cat: "syntax",
        name: "Rasm",
        desc: "Rasm chiqaradi. <code>src</code> — rasm manzili, <code>alt</code> — rasm yuklanmasa ko'rinadigan izoh.",
        pattern: /<img\b/i,
      },
      {
        label: "<ul> / <li>",
        cat: "syntax",
        name: "Ro'yxat",
        desc: "<code>ul</code> — belgili ro'yxat, <code>li</code> — uning har bir elementi. Tartiblangan ro'yxat uchun <code>ol</code> ishlatiladi.",
        pattern: /<(?:ul|ol|li)\b/i,
      },
      {
        label: "class=\"\"",
        cat: "syntax",
        name: "CSS klassi",
        desc: "Elementga bir yoki bir nechta uslub guruhi beradi. CSS'da <code>.nom</code> orqali murojaat qilinadi.",
        pattern: /\bclass=/i,
      },
      {
        label: "id=\"\"",
        cat: "syntax",
        name: "Noyob identifikator",
        desc: "Sahifadagi elementga yagona nom beradi. CSS'da <code>#nom</code>, JS'da <code>#nom</code> selektori bilan topiladi.",
        pattern: /\bid=/i,
      },
      {
        label: "<form>",
        cat: "syntax",
        name: "Forma",
        desc: "Foydalanuvchi ma'lumotini qabul qiluvchi maydonlarni o'raydi. Yuborish uchun <code>submit</code> hodisasi ishlatiladi.",
        pattern: /<form\b/i,
      },
      {
        label: "<input>",
        cat: "syntax",
        name: "Kiritish maydoni",
        desc: "Matn, parol, email yoki boshqa turdagi ma'lumot kiritish maydoni. Turi <code>type</code> atributi bilan belgilanadi.",
        pattern: /<input\b/i,
      },
      {
        label: "<label>",
        cat: "syntax",
        name: "Maydon izohi",
        desc: "Kiritish maydoniga izoh beradi. <code>for</code> atributi maydon <code>id</code> siga bog'lansa, izohga bosish ham maydonni tanlaydi.",
        pattern: /<label\b/i,
      },
      {
        label: "<link>",
        cat: "syntax",
        name: "Tashqi fayl",
        desc: "<code>head</code> ichida CSS faylini ulaydi: <code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code>.",
        pattern: /<link\b/i,
      },
    ],
    css: [
      {
        label: "selektor { }",
        cat: "syntax",
        name: "CSS qoidasi",
        desc: "Selektor qaysi elementni tanlashini, jingalak qavs ichi esa uning uslublarini bildiradi.",
        pattern: /[.#]?[a-zA-Z][\w-]*(?:[,\s]+[.#]?[a-zA-Z][\w-]*)*\s*\{/,
      },
      {
        label: "color",
        cat: "method",
        name: "Matn rangi",
        desc: "Matn rangini belgilaydi: <code>color: #1f2937;</code>. Fon rangi uchun <code>background</code> ishlatiladi.",
        pattern: /\bcolor\s*:/,
      },
      {
        label: "font-size",
        cat: "method",
        name: "Shrift o'lchami",
        desc: "Matn shrifti kattaligini belgilaydi: <code>font-size: 18px;</code> yoki <code>1.1rem</code>.",
        pattern: /\bfont-size\s*:/,
      },
      {
        label: "margin / padding",
        cat: "method",
        name: "Tashqi va ichki bo'shliq",
        desc: "<code>margin</code> element tashqarisidagi, <code>padding</code> esa ichidagi bo'shliqni beradi.",
        pattern: /\b(?:margin|padding)(?:-[a-z]+)?\s*:/,
      },
      {
        label: "display: flex",
        cat: "method",
        name: "Flexjoylashuv",
        desc: "Bolalarni bir qator yoki ustunga joylashtiradi. <code>justify-content</code> va <code>align-items</code> bilan tekislanadi.",
        pattern: /\bdisplay\s*:\s*flex\b/,
      },
      {
        label: "gap",
        cat: "method",
        name: "Elementlar orasi",
        desc: "Flex yoki Grid ichidagi elementlar orasidagi masofani belgilaydi: <code>gap: 12px;</code>.",
        pattern: /\bgap\s*:/,
      },
      {
        label: "grid-template-columns",
        cat: "method",
        name: "Ustunlar tuzilishi",
        desc: "Grid ichidagi ustunlar soni va kengligini belgilaydi: <code>repeat(3, 1fr)</code> — uchta teng ustun.",
        pattern: /\bgrid-template-columns\s*:/,
      },
      {
        label: "@media",
        cat: "keyword",
        name: "Moslashuv sharti",
        desc: "Ekran o'lchamiga qarab boshqa uslublarni qo'llaydi: <code>@media (max-width: 700px) { }</code>.",
        pattern: /@media\b/,
      },
      {
        label: "border-radius",
        cat: "method",
        name: "Burchak yumaloqlash",
        desc: "Element burchaklarini yumaloqlaydi: <code>border-radius: 12px;</code>. Doira uchun <code>50%</code> ishlatiladi.",
        pattern: /\bborder-radius\s*:/,
      },
      {
        label: "background",
        cat: "method",
        name: "Fon",
        desc: "Element fonini belgilaydi: rang, gradient yoki rasm bo'lishi mumkin.",
        pattern: /\bbackground(?:-color)?\s*:/,
      },
      {
        label: "px / rem",
        cat: "syntax",
        name: "O'lchov birliklari",
        desc: "<code>px</code> — aniq piksel, <code>rem</code> — ildiz shrift o'lchamiga nisbatan moslashuvchan birlik.",
        pattern: /\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)\b/,
      },
    ],
    cpp: [
      {
        label: "#include",
        cat: "syntax",
        name: "Kutubxona ulash",
        desc: "Tayyor funksiyalar to'plamini ulaydi: <code>#include &lt;iostream&gt;</code> — kirish-chiqarish uchun.",
        pattern: /#include\b/,
      },
      {
        label: "using namespace std;",
        cat: "keyword",
        name: "Standart fazo",
        desc: "<code>std::</code> prefiksini yozmaslik uchun standart nomlar fazosini ochadi. Kichik o'quv dasturlarida qulay.",
        pattern: /using\s+namespace\s+std/,
      },
      {
        label: "int main()",
        cat: "func",
        name: "Asosiy funksiya",
        desc: "Dastur ishga tushadigan kirish nuqtasi. Har bir C++ dasturida bitta <code>main</code> bo'ladi va u <code>int</code> qaytaradi.",
        pattern: /\bint\s+main\s*\(/,
      },
      {
        label: "std::cout",
        cat: "func",
        name: "Chiqarish oqimi",
        desc: "Konsolga ma'lumot chiqaradi: <code>cout &lt;&lt; \"Salom\";</code>. <code>&lt;&lt;</code> belgisi qiymatni oqimga yuboradi.",
        pattern: /\b(?:std::)?cout\b/,
      },
      {
        label: "std::cin",
        cat: "func",
        name: "Kiritish oqimi",
        desc: "Klaviaturadan qiymat o'qiydi: <code>cin &gt;&gt; yosh;</code>. <code>&gt;&gt;</code> belgisi qiymatni oqimdan oladi.",
        pattern: /\b(?:std::)?cin\b/,
      },
      {
        label: "std::string",
        cat: "value",
        name: "Matn turi",
        desc: "Matnlarni saqlaydi. <code>#include &lt;string&gt;</code> talab qilinadi va <code>getline(cin, nom)</code> bilan bo'sh joyli matn o'qiladi.",
        pattern: /\b(?:std::)?string\b/,
      },
      {
        label: "vector",
        cat: "value",
        name: "Dinamik massiv",
        desc: "O'lchamini o'zgartirish mumkin bo'lgan massiv. <code>push_back()</code> bilan element qo'shiladi, <code>size()</code> bilan soni olinadi.",
        pattern: /\bvector\b/,
      },
      {
        label: "for",
        cat: "keyword",
        name: "Tsikl",
        desc: "Kodni takrorlaydi. <code>for (int i = 0; i &lt; 5; i++)</code> yoki <code>for (int x : sonlar)</code> ko'rinishida bo'ladi.",
        pattern: /\bfor\b/,
      },
      {
        label: "while",
        cat: "keyword",
        name: "Shartli tsikl",
        desc: "Shart rost bo'lguncha blokni takrorlaydi. Shartni o'zgartirishni unutmang.",
        pattern: /\bwhile\b/,
      },
      {
        label: "class / struct",
        cat: "keyword",
        name: "Obyekt shabloni",
        desc: "O'zgaruvchilar va funksiyalarni birlashtirgan yangi tur yaratadi. <code>class</code> a'zolari standart holatda yopiq, <code>struct</code>da ochiq bo'ladi.",
        pattern: /\b(?:class|struct)\b/,
      },
      {
        label: "const",
        cat: "keyword",
        name: "O'zgarmas",
        desc: "Qiymatni o'zgartirib bo'lmasligini bildiradi: <code>const int MAX = 100;</code>.",
        pattern: /\bconst\b/,
      },
      {
        label: "return",
        cat: "keyword",
        name: "Qaytarish",
        desc: "Funksiyadan qiymat qaytaradi yoki <code>main</code>da dasturni tugatadi (0 — muvaffaqiyat).",
        pattern: /\breturn\b/,
      },
      {
        label: "::",
        cat: "operator",
        name: "Fazo operatori",
        desc: "Nom qaysi fazo yoki klassga tegishli ekanini ko'rsatadi: <code>std::cout</code>, <code>Talaba::ism</code>.",
        pattern: /::/,
      },
      {
        label: "try / catch",
        cat: "keyword",
        name: "Xatoni ushlash",
        desc: "<code>try</code> ichidagi xato <code>catch</code> bloki bilan ushlanadi va dastur to'xtab qolmaydi.",
        pattern: /\b(?:try|catch|throw)\b/,
      },
    ],
    sql: [
      {
        label: "SELECT",
        cat: "keyword",
        name: "Tanlash",
        desc: "Jadvaldan qaysi ustunlar olinishini bildiradi: <code>SELECT ism, ball FROM talabalar</code>.",
        pattern: /\bSELECT\b/i,
      },
      {
        label: "FROM",
        cat: "keyword",
        name: "Manba jadval",
        desc: "Ma'lumot qaysi jadvaldan olinishini ko'rsatadi.",
        pattern: /\bFROM\b/i,
      },
      {
        label: "WHERE",
        cat: "keyword",
        name: "Shart",
        desc: "Qatorlarni shart bo'yicha filtrlaydi: <code>WHERE ball &gt;= 80</code>.",
        pattern: /\bWHERE\b/i,
      },
      {
        label: "ORDER BY",
        cat: "keyword",
        name: "Tartiblash",
        desc: "Natijalarni ustun bo'yicha tartiblaydi. <code>DESC</code> — kamayish, <code>ASC</code> — o'sish tartibi.",
        pattern: /\bORDER\s+BY\b/i,
      },
      {
        label: "GROUP BY",
        cat: "keyword",
        name: "Guruhlash",
        desc: "Bir xil qiymatli qatorlarni guruhlaydi. Odatda <code>COUNT</code>, <code>SUM</code>, <code>AVG</code> bilan ishlatiladi.",
        pattern: /\bGROUP\s+BY\b/i,
      },
      {
        label: "JOIN",
        cat: "keyword",
        name: "Birlashtirish",
        desc: "Ikki jadvalni umumiy ustun orqali bog'laydi: <code>JOIN kurslar ON talabalar.kurs_id = kurslar.id</code>.",
        pattern: /\bJOIN\b/i,
      },
      {
        label: "INSERT INTO",
        cat: "keyword",
        name: "Qator qo'shish",
        desc: "Jadvalga yangi ma'lumot qo'shadi: <code>INSERT INTO talabalar (ism) VALUES ('Aziza')</code>.",
        pattern: /\bINSERT\s+INTO\b/i,
      },
      {
        label: "UPDATE",
        cat: "keyword",
        name: "Yangilash",
        desc: "Mavjud qatorlardagi qiymatni o'zgartiradi. <code>WHERE</code> yozilmasa, barcha qatorlar yangilanadi.",
        pattern: /\bUPDATE\b/i,
      },
      {
        label: "DELETE",
        cat: "keyword",
        name: "O'chirish",
        desc: "Qatorlarni o'chiradi. Xavfsizlik uchun har doim <code>WHERE</code> bilan cheklang.",
        pattern: /\bDELETE\b/i,
      },
      {
        label: "CREATE TABLE",
        cat: "keyword",
        name: "Jadval yaratish",
        desc: "Yangi jadval va uning ustunlarini yaratadi.",
        pattern: /\bCREATE\s+TABLE\b/i,
      },
      {
        label: "PRIMARY KEY",
        cat: "keyword",
        name: "Asosiy kalit",
        desc: "Har bir qator uchun noyob identifikator. Takrorlanmaydi va <code>NULL</code> bo'lmaydi.",
        pattern: /\bPRIMARY\s+KEY\b/i,
      },
      {
        label: "NULL",
        cat: "value",
        name: "Bo'sh qiymat",
        desc: "Qiymat yo'qligini bildiradi. Tekshirish uchun <code>IS NULL</code> yoki <code>IS NOT NULL</code> ishlatiladi.",
        pattern: /\bNULL\b/i,
      },
      {
        label: "COUNT()",
        cat: "func",
        name: "Sanoq",
        desc: "Qatorlar sonini qaytaradi: <code>COUNT(*)</code> — jami qatorlar, <code>COUNT(ustun)</code> — bo'sh bo'lmagan qiymatlar.",
        pattern: /\bCOUNT\s*\(/i,
      },
      {
        label: "?",
        cat: "syntax",
        name: "Parametr belgisi",
        desc: "So'rovga qiymatni xavfsiz bog'lash uchun joy egallovchi belgi. Qiymatlar alohida ro'yxatda beriladi — bu SQL injection xavfini kamaytiradi.",
        pattern: /\?/,
      },
    ],
    java: [
      {
        label: "public static void main",
        cat: "func",
        name: "Dastur kirish nuqtasi",
        desc: "JVM dasturni aynan shu metodan boshlaydi: <code>public static void main(String[] args)</code>.",
        pattern: /public\s+static\s+void\s+main\s*\(/,
      },
      {
        label: "class",
        cat: "keyword",
        name: "Sinf",
        desc: "Obyektlar uchun qolip yaratadi. Java'da har bir kod biror sinf ichida yoziladi.",
        pattern: /\bclass\b/,
      },
      {
        label: "System.out.println()",
        cat: "func",
        name: "Konsolga chiqarish",
        desc: "Matn yoki qiymatni konsolga chiqaradi va yangi qatorga o'tadi.",
        pattern: /System\.out\.println\s*\(/,
      },
      {
        label: "int / String",
        cat: "type",
        name: "Ma'lumot turi",
        desc: "<code>int</code> butun son, <code>String</code> esa matn saqlaydi. Java kuchli tipli til.",
        pattern: /\b(?:int|String|double|boolean)\b/,
      },
      {
        label: "final",
        cat: "keyword",
        name: "O'zgarmas qiymat",
        desc: "O'zgaruvchiga faqat bir marta qiymat berilishini ta'minlaydi. Konstanta yaratishda ishlatiladi.",
        pattern: /\bfinal\b/,
      },
      {
        label: "new",
        cat: "keyword",
        name: "Obyekt yaratish",
        desc: "Sinf asosida yangi obyekt yaratadi: <code>new Talaba(\"Ali\")</code>.",
        pattern: /\bnew\b/,
      },
      {
        label: "try / catch",
        cat: "keyword",
        name: "Xatoni ushlash",
        desc: "Xavfli kodni <code>try</code> ichiga, xatoni boshqarishni esa <code>catch</code> ichiga yoziladi.",
        pattern: /\b(?:try|catch|finally)\b/,
      },
      {
        label: "ArrayList",
        cat: "type",
        name: "Dinamik ro'yxat",
        desc: "Elementlarni qo'shish va o'chirish mumkin bo'lgan moslashuvchan kolleksiya.",
        pattern: /\b(?:ArrayList|List|HashMap|Map)\b/,
      },
    ],
    c: [
      {
        label: "#include",
        cat: "syntax",
        name: "Kutubxona ulash",
        desc: "Preprocessor buyrug'i. <code>#include &lt;stdio.h&gt;</code> kiritish/chiqarish funksiyalarini ulaydi.",
        pattern: /#include/,
      },
      {
        label: "int main()",
        cat: "func",
        name: "Dastur kirish nuqtasi",
        desc: "C dasturi <code>main</code> funksiyasidan boshlanadi. U butun son qaytaradi.",
        pattern: /\bint\s+main\s*\(/,
      },
      {
        label: "printf()",
        cat: "func",
        name: "Formatli chiqarish",
        desc: "Qiymatlarni format belgilari orqali chiqaradi: <code>printf(\"%d\", yosh)</code>.",
        pattern: /\bprintf\s*\(/,
      },
      {
        label: "scanf()",
        cat: "func",
        name: "Kiritish",
        desc: "Klaviaturadan qiymat o'qiydi. O'zgaruvchi manzilini <code>&amp;yosh</code> ko'rinishida berish kerak.",
        pattern: /\bscanf\s*\(/,
      },
      {
        label: "& / *",
        cat: "operator",
        name: "Manzil va ko'rsatkich",
        desc: "<code>&amp;</code> o'zgaruvchi manzilini oladi, <code>*</code> esa ko'rsatkich orqali qiymatga murojaat qiladi.",
        pattern: /[&*]\s*[A-Za-z_]/,
      },
      {
        label: "malloc() / free()",
        cat: "func",
        name: "Xotira boshqaruvi",
        desc: "<code>malloc</code> dinamik xotira ajratadi, <code>free</code> esa uni qaytaradi. Har bir malloc uchun free bo'lishi kerak.",
        pattern: /\b(?:malloc|calloc|realloc|free)\s*\(/,
      },
      {
        label: "struct",
        cat: "keyword",
        name: "Struktura",
        desc: "Turli turdagi maydonlarni bitta nom ostida birlashtiradi.",
        pattern: /\bstruct\b/,
      },
      {
        label: "FILE / fopen()",
        cat: "type",
        name: "Fayl bilan ishlash",
        desc: "<code>fopen</code> faylni ochadi, <code>fclose</code> yopadi. Xatoni har doim tekshiring.",
        pattern: /\b(?:FILE|fopen|fclose|fgets|fprintf)\b/,
      },
    ],
    php: [
      {
        label: "<?php",
        cat: "syntax",
        name: "PHP bloki",
        desc: "PHP kodi shu teg bilan boshlanadi. Server faylni bajarib, natijani brauzerga yuboradi.",
        pattern: /<\?php/,
      },
      {
        label: "$ozgaruvchi",
        cat: "syntax",
        name: "O'zgaruvchi",
        desc: "PHP'da o'zgaruvchi <code>$</code> belgisi bilan boshlanadi: <code>$ism = \"Ali\";</code>.",
        pattern: /\$[A-Za-z_]\w*/,
      },
      {
        label: "echo",
        cat: "keyword",
        name: "Chiqarish",
        desc: "Matn yoki qiymatni sahifaga chiqaradi: <code>echo \"Salom\";</code>.",
        pattern: /\becho\b/,
      },
      {
        label: "function",
        cat: "keyword",
        name: "Funksiya",
        desc: "Qayta ishlatiladigan kod blokini e'lon qiladi.",
        pattern: /\bfunction\b/,
      },
      {
        label: "foreach",
        cat: "keyword",
        name: "Massiv bo'ylab yurish",
        desc: "Massivning har bir elementini navbat bilan qayta ishlaydi.",
        pattern: /\bforeach\b/,
      },
      {
        label: "$_POST",
        cat: "module",
        name: "Forma ma'lumoti",
        desc: "POST so'rovi bilan kelgan maydonlarni saqlaydi. Qiymatlarni doim tekshiring va tozalang.",
        pattern: /\$_POST|\$_GET/,
      },
      {
        label: "htmlspecialchars()",
        cat: "func",
        name: "XSS himoyasi",
        desc: "Maxsus belgilarni ekranlaydi. Foydalanuvchi matnini HTML'ga chiqarishdan oldin ishlatiladi.",
        pattern: /\bhtmlspecialchars\s*\(/,
      },
      {
        label: "PDO / prepare()",
        cat: "type",
        name: "Xavfsiz SQL",
        desc: "PDO ma'lumotlar bazasiga ulanadi. <code>prepare()</code> va parametrlar SQL injection'dan himoya qiladi.",
        pattern: /\b(?:PDO|prepare)\b/,
      },
    ],
    ruby: [
      {
        label: "puts",
        cat: "func",
        name: "Chiqarish",
        desc: "Qiymatni konsolga chiqaradi va yangi qator qo'shadi. <code>print</code> esa qator qo'shmaydi.",
        pattern: /\b(?:puts|print|p)\b/,
      },
      {
        label: "def ... end",
        cat: "keyword",
        name: "Metod",
        desc: "Funksiya (metod) e'lon qiladi. Blok <code>end</code> bilan yopiladi.",
        pattern: /\bdef\b/,
      },
      {
        label: "do ... end",
        cat: "keyword",
        name: "Blok",
        desc: "Kod blokini ochadi. Ruby'da iteratsiya va bloklar juda ko'p ishlatiladi.",
        pattern: /\b(?:do|end)\b/,
      },
      {
        label: ".each",
        cat: "method",
        name: "Iteratsiya",
        desc: "Massiv yoki hash elementlari bo'ylab yuradi: <code>ismlar.each { |ism| puts ism }</code>.",
        pattern: /\.each\b/,
      },
      {
        label: ":belgi",
        cat: "syntax",
        name: "Symbol",
        desc: "O'zgarmas, yengil nom. Hash kalitlarida keng ishlatiladi: <code>{ ism: \"Ali\" }</code>.",
        pattern: /:[A-Za-z_]\w*/,
      },
      {
        label: "attr_accessor",
        cat: "method",
        name: "Getter va setter",
        desc: "Sinf xususiyatlarini o'qish va yozish metodlarini avtomatik yaratadi.",
        pattern: /\battr_(?:accessor|reader|writer)\b/,
      },
      {
        label: "gem",
        cat: "module",
        name: "Kutubxona",
        desc: "Ruby kutubxonalari. <code>gem install</code> bilan o'rnatiladi, <code>bundler</code> bilan boshqariladi.",
        pattern: /\b(?:gem|bundler|Gemfile)\b/,
      },
      {
        label: "nil",
        cat: "keyword",
        name: "Bo'sh qiymat",
        desc: "Qiymat yo'qligini bildiradi. Tekshirishda <code>nil?</code> ishlatiladi.",
        pattern: /\bnil\b/,
      },
    ],
    go: [
      {
        label: "package main",
        cat: "keyword",
        name: "Paket",
        desc: "Bajariladigan dastur <code>main</code> paketidan va <code>main</code> funksiyasidan boshlanadi.",
        pattern: /\bpackage\s+main\b/,
      },
      {
        label: "func",
        cat: "keyword",
        name: "Funksiya",
        desc: "Funksiya e'lon qiladi: <code>func salom(ism string) string</code>. Bir nechta qiymat qaytarishi mumkin.",
        pattern: /\bfunc\b/,
      },
      {
        label: "fmt.Println()",
        cat: "func",
        name: "Chiqarish",
        desc: "<code>fmt</code> paketi formatli kiritish/chiqarish uchun xizmat qiladi.",
        pattern: /\bfmt\.(?:Println|Printf|Print)\s*\(/,
      },
      {
        label: ":=",
        cat: "operator",
        name: "Qisqa e'lon",
        desc: "O'zgaruvchini turini avtomatik aniqlab yaratadi: <code>yosh := 15</code>. Faqat funksiya ichida ishlaydi.",
        pattern: /:=/,
      },
      {
        label: "[]int / map",
        cat: "type",
        name: "Kolleksiya",
        desc: "Slice — dinamik massiv, <code>map[string]int</code> esa kalit-qiymat juftliklari to'plami.",
        pattern: /\[\][A-Za-z]|\bmap\[/,
      },
      {
        label: "struct",
        cat: "keyword",
        name: "Struktura",
        desc: "Maydonlarni bitta tur ostida birlashtiradi. Strukturaga metodlar bog'lash mumkin.",
        pattern: /\bstruct\b/,
      },
      {
        label: "go / chan",
        cat: "keyword",
        name: "Parallel bajarish",
        desc: "<code>go</code> funksiyani alohida goroutinada boshlaydi, <code>chan</code> esa ular orasida ma'lumot uzatadi.",
        pattern: /\b(?:go|chan)\b/,
      },
      {
        label: "error",
        cat: "type",
        name: "Xato",
        desc: "Go'da xatolar qiymat sifatida qaytariladi. Har doim <code>if err != nil</code> bilan tekshiriladi.",
        pattern: /\berror\b|\berr\s*!=\s*nil\b/,
      },
    ],
    rust: [
      {
        label: "fn main",
        cat: "func",
        name: "Kirish nuqtasi",
        desc: "Rust dasturi <code>main</code> funksiyasidan boshlanadi.",
        pattern: /\bfn\s+main\s*\(/,
      },
      {
        label: "let / mut",
        cat: "keyword",
        name: "O'zgaruvchi",
        desc: "<code>let</code> o'zgarmas bog'lanish yaratadi, <code>let mut</code> esa qiymatni o'zgartirishga ruxsat beradi.",
        pattern: /\blet\s+(?:mut\s+)?/,
      },
      {
        label: "&",
        cat: "operator",
        name: "Borrow",
        desc: "Qiymatni egallamasdan vaqtincha ishlatish uchun havola (reference) yaratadi.",
        pattern: /&\s*[A-Za-z_]/,
      },
      {
        label: "println!",
        cat: "func",
        name: "Makro chiqarish",
        desc: "Formatlangan matnni konsolga chiqaradigan makro. Undov belgisi makro ekanini bildiradi.",
        pattern: /\bprintln!\s*\(/,
      },
      {
        label: "Vec<T>",
        cat: "type",
        name: "Dinamik massiv",
        desc: "Bir turdagi qiymatlarni saqlaydigan o'suvchi ro'yxat: <code>Vec&lt;i32&gt;</code>.",
        pattern: /\bVec\s*[<:]/,
      },
      {
        label: "struct / enum",
        cat: "keyword",
        name: "Maxsus tur",
        desc: "<code>struct</code> maydonlarni, <code>enum</code> esa bir nechta variantni ifodalaydi.",
        pattern: /\b(?:struct|enum)\b/,
      },
      {
        label: "Result / Option",
        cat: "type",
        name: "Xavfsiz natija",
        desc: "<code>Option</code> qiymat bor-yo'qligini, <code>Result</code> esa muvaffaqiyat yoki xatoni bildiradi.",
        pattern: /\b(?:Result|Option)\b/,
      },
      {
        label: "match",
        cat: "keyword",
        name: "Moslikni tekshirish",
        desc: "Qiymat variantlarini to'liq qamrab oluvchi kuchli shart operatori.",
        pattern: /\bmatch\b/,
      },
    ],
    ts: [
      {
        label: ": string",
        cat: "type",
        name: "Tur belgisi",
        desc: "O'zgaruvchi yoki parametr turini belgilaydi: <code>let ism: string</code>. Xato kompilyatsiyada ushlanadi.",
        pattern: /:\s*(?:string|number|boolean|unknown|void|never)\b/,
      },
      {
        label: "interface",
        cat: "keyword",
        name: "Interfeys",
        desc: "Obyekt qanday maydonlarga ega bo'lishini tavsiflaydi.",
        pattern: /\binterface\b/,
      },
      {
        label: "type",
        cat: "keyword",
        name: "Tur taxallusi",
        desc: "Mavjud turga yangi nom beradi yoki union kabi murakkab turni yaratadi.",
        pattern: /\btype\s+[A-Za-z_]\w*/,
      },
      {
        label: "enum",
        cat: "keyword",
        name: "Ro'yxat turi",
        desc: "Nomlangan konstantalar to'plamini yaratadi.",
        pattern: /\benum\b/,
      },
      {
        label: "<T>",
        cat: "syntax",
        name: "Generic",
        desc: "Tur parametri orqali funksiya yoki turni turli tiplar bilan ishlatish imkonini beradi.",
        pattern: /<[A-Z][A-Za-z0-9_]*>/,
      },
      {
        label: "as",
        cat: "keyword",
        name: "Tur aylantirish",
        desc: "Qiymatni boshqa tur sifatida ko'rsatadi: <code>qiymat as string</code>. Avval tekshirish xavfsizroq.",
        pattern: /\bas\b/,
      },
      {
        label: "Partial / Pick",
        cat: "type",
        name: "Yordamchi tur",
        desc: "Mavjud turdan yangi tur yasaydi: <code>Partial&lt;Talaba&gt;</code> barcha maydonlarni ixtiyoriy qiladi.",
        pattern: /\b(?:Partial|Pick|Omit|Record|Readonly)\s*</,
      },
      {
        label: "unknown / never",
        cat: "type",
        name: "Xavfsiz turlar",
        desc: "<code>unknown</code> ishlatishdan oldin tekshirishni talab qiladi, <code>never</code> esa hech qachon yuz bermaydigan holatni bildiradi.",
        pattern: /\b(?:unknown|never)\b/,
      },
    ],
    kotlin: [
      {
        label: "fun main",
        cat: "func",
        name: "Kirish nuqtasi",
        desc: "Kotlin dasturi <code>fun main()</code> dan boshlanadi.",
        pattern: /\bfun\s+main\s*\(/,
      },
      {
        label: "val / var",
        cat: "keyword",
        name: "O'zgaruvchi",
        desc: "<code>val</code> o'zgarmas, <code>var</code> esa qayta tayinlanadigan o'zgaruvchi yaratadi.",
        pattern: /\b(?:val|var)\b/,
      },
      {
        label: "println()",
        cat: "func",
        name: "Chiqarish",
        desc: "Qiymatni konsolga chiqaradi va yangi qator qo'shadi.",
        pattern: /\bprintln\s*\(/,
      },
      {
        label: "data class",
        cat: "keyword",
        name: "Ma'lumot sinfi",
        desc: "Ma'lumot saqlash uchun sinf yaratadi; <code>equals</code>, <code>toString</code> va <code>copy</code> avtomatik qo'shiladi.",
        pattern: /\bdata\s+class\b/,
      },
      {
        label: "when",
        cat: "keyword",
        name: "Ko'p shartli tanlov",
        desc: "<code>switch</code>ning kuchliroq ko'rinishi. Qiymat yoki shartlarga qarab kodni tanlaydi.",
        pattern: /\bwhen\s*[({]/,
      },
      {
        label: "?. / ?:",
        cat: "operator",
        name: "Null xavfsizligi",
        desc: "<code>?.</code> null bo'lsa xavfsiz to'xtaydi, <code>?:</code> esa muqobil qiymat qaytaradi.",
        pattern: /\?\.|\?:/,
      },
      {
        label: "suspend",
        cat: "keyword",
        name: "Korutina",
        desc: "Funksiyani to'xtatib turish mumkin bo'lgan korutina sifatida belgilaydi.",
        pattern: /\bsuspend\b/,
      },
      {
        label: "..",
        cat: "operator",
        name: "Diapazon",
        desc: "Sonlar yoki belgilar oralig'ini yaratadi: <code>1..5</code>.",
        pattern: /\b\d+\s*\.\.\s*\d+\b/,
      },
    ],
    dart: [
      {
        label: "void main",
        cat: "func",
        name: "Kirish nuqtasi",
        desc: "Dart dasturi <code>main()</code> funksiyasidan boshlanadi. <code>void</code> qiymat qaytarmasligini bildiradi.",
        pattern: /\b(?:void\s+)?main\s*\(/,
      },
      {
        label: "print()",
        cat: "func",
        name: "Chiqarish",
        desc: "Qiymatni konsolga chiqaradi: <code>print(\"Salom\");</code>.",
        pattern: /\bprint\s*\(/,
      },
      {
        label: "final / const",
        cat: "keyword",
        name: "O'zgarmas qiymat",
        desc: "<code>final</code> ishga tushishda bir marta, <code>const</code> esa kompilyatsiya vaqtida aniqlanadi.",
        pattern: /\b(?:final|const)\b/,
      },
      {
        label: "$ozgaruvchi",
        cat: "syntax",
        name: "String interpolatsiya",
        desc: "Matn ichida <code>${ism}</code> orqali o'zgaruvchi qiymatini qo'shadi.",
        pattern: /\$\{?[A-Za-z_]\w*/,
      },
      {
        label: "late",
        cat: "keyword",
        name: "Kechroq ishga tushirish",
        desc: "O'zgaruvchiga keyinroq qiymat berishni bildiradi; ishlatishdan oldin qiymat berilmasa xato chiqadi.",
        pattern: /\blate\b/,
      },
      {
        label: "async / await",
        cat: "keyword",
        name: "Asinxron kod",
        desc: "<code>async</code> funksiyada <code>await</code> Future natijasini kutadi.",
        pattern: /\b(?:async|await)\b/,
      },
      {
        label: "?. / ??",
        cat: "operator",
        name: "Null xavfsizligi",
        desc: "<code>?.</code> null bo'lsa xavfsiz to'xtaydi, <code>??</code> esa muqobil qiymatni tanlaydi.",
        pattern: /\?\.|\?\?/,
      },
      {
        label: "class",
        cat: "keyword",
        name: "Sinf",
        desc: "Obyektlar uchun xususiyat va metodlarni belgilaydigan qolip.",
        pattern: /\bclass\b/,
      },
    ],
    bash: [
      {
        label: "#!",
        cat: "syntax",
        name: "Shebang",
        desc: "Skript birinchi qatorida qaysi interpretatorda bajarilishini ko'rsatadi: <code>#!/usr/bin/env bash</code>.",
        pattern: /^#!.*/m,
      },
      {
        label: "$ozgaruvchi",
        cat: "syntax",
        name: "O'zgaruvchi",
        desc: "Qiymatni <code>ism=\"Ali\"</code> bilan saqlaydi va <code>$ism</code> bilan o'qiydi.",
        pattern: /\$[A-Za-z_]\w*/,
      },
      {
        label: "$( ... )",
        cat: "syntax",
        name: "Buyruq natijasi",
        desc: "Qavs ichidagi buyruqni bajarib, uning natijasini joyiga qo'yadi.",
        pattern: /\$\([^)]*\)/,
      },
      {
        label: "if ... fi",
        cat: "keyword",
        name: "Shart",
        desc: "Shartli blokni ochadi va <code>fi</code> bilan yopadi. Shart <code>[[ ... ]]</code> ichida yoziladi.",
        pattern: /\bif\b|\bfi\b/,
      },
      {
        label: "for / done",
        cat: "keyword",
        name: "Tsikl",
        desc: "Ro'yxat elementlari bo'ylab yuradi: <code>for f in *.txt; do ...; done</code>.",
        pattern: /\b(?:for|while|until)\b|\bdone\b/,
      },
      {
        label: "local",
        cat: "keyword",
        name: "Lokal o'zgaruvchi",
        desc: "Funksiya ichida ishlaydigan o'zgaruvchi yaratadi; funksiya tugagach yo'qoladi.",
        pattern: /\blocal\b/,
      },
      {
        label: "|",
        cat: "operator",
        name: "Quvur",
        desc: "Chapdagi buyruqning chiqishini o'ngdagining kirishiga uzatadi: <code>ls | grep txt</code>.",
        pattern: /\|/,
      },
      {
        label: "> / >>",
        cat: "operator",
        name: "Yo'naltirish",
        desc: "<code>&gt;</code> faylni qayta yozadi, <code>&gt;&gt;</code> esa oxiriga qo'shadi.",
        pattern: />>|>/,
      },
    ],
    r: [
      {
        label: "<-",
        cat: "operator",
        name: "Tayinlash",
        desc: "R'da qiymatni o'zgaruvchiga berish uchun odatda <code>&lt;-</code> ishlatiladi: <code>x &lt;- 10</code>.",
        pattern: /<-/,
      },
      {
        label: "c()",
        cat: "func",
        name: "Vektor yaratish",
        desc: "Bir turdagi qiymatlardan vektor yasaydi: <code>c(1, 2, 3)</code>. R'ning asosiy tuzilmasi.",
        pattern: /\bc\s*\(/,
      },
      {
        label: "data.frame()",
        cat: "type",
        name: "Jadval",
        desc: "Ustunlardan iborat jadval yaratadi. CSV fayllar odatda data frame sifatida o'qiladi.",
        pattern: /\bdata\.frame\s*\(|\bdata_frame\s*\(/,
      },
      {
        label: "$ustun",
        cat: "operator",
        name: "Ustunga murojaat",
        desc: "data frame ustunini nomi bo'yicha oladi: <code>df$ball</code>.",
        pattern: /\$[A-Za-z_.]\w*/,
      },
      {
        label: "read.csv()",
        cat: "func",
        name: "CSV import",
        desc: "CSV faylni data frame sifatida o'qiydi. <code>write.csv()</code> esa saqlaydi.",
        pattern: /\b(?:read\.csv|write\.csv)\s*\(/,
      },
      {
        label: "function",
        cat: "keyword",
        name: "Funksiya",
        desc: "Qayta ishlatiladigan funksiya yaratadi: <code>kvadrat &lt;- function(x) x^2</code>.",
        pattern: /\bfunction\b/,
      },
      {
        label: "library()",
        cat: "func",
        name: "Kutubxona ulash",
        desc: "O'rnatilgan paketni sessiyaga ulaydi: <code>library(ggplot2)</code>.",
        pattern: /\b(?:library|require)\s*\(/,
      },
      {
        label: "NA",
        cat: "keyword",
        name: "Yo'q qiymat",
        desc: "Mavjud bo'lmagan kuzatuvni bildiradi. Tekshirish uchun <code>is.na()</code> ishlatiladi.",
        pattern: /\bNA\b/,
      },
    ],
    scala: [
      {
        label: "object / def main",
        cat: "func",
        name: "Kirish nuqtasi",
        desc: "Bajariladigan Scala dasturi odatda <code>object Main extends App</code> yoki <code>def main(args: Array[String])</code> dan boshlanadi.",
        pattern: /\bobject\s+Main\b|\bdef\s+main\s*\(/,
      },
      {
        label: "val / var",
        cat: "keyword",
        name: "O'zgaruvchi",
        desc: "<code>val</code> o'zgarmas, <code>var</code> qayta tayinlanadigan bog'lanish yaratadi. Scala'da val afzal.",
        pattern: /\b(?:val|var)\b/,
      },
      {
        label: "case class",
        cat: "keyword",
        name: "Ma'lumot sinfi",
        desc: "Immutable ma'lumot turi; tenglik, nusxalash va pattern matching avtomatik ishlaydi.",
        pattern: /\bcase\s+class\b/,
      },
      {
        label: "match",
        cat: "keyword",
        name: "Pattern matching",
        desc: "Qiymatni variantlarga ajratib tekshiradi va mos kodni bajaradi.",
        pattern: /\bmatch\b/,
      },
      {
        label: ".map / .filter",
        cat: "method",
        name: "Kolleksiya amallari",
        desc: "<code>map</code> har bir elementni o'zgartiradi, <code>filter</code> esa shartga moslarini tanlaydi.",
        pattern: /\.(?:map|filter|fold|reduce)\b/,
      },
      {
        label: "trait",
        cat: "keyword",
        name: "Trait",
        desc: "Interfeysga o'xshash qayta ishlatiladigan xatti-harakatlar to'plami.",
        pattern: /\btrait\b/,
      },
      {
        label: "Option",
        cat: "type",
        name: "Bor-yo'qligi",
        desc: "Qiymat borligini <code>Some(x)</code>, yo'qligini <code>None</code> bilan ifodalaydi — null o'rniga xavfsiz usul.",
        pattern: /\bOption\b|\b(?:Some|None)\b/,
      },
      {
        label: "Future",
        cat: "type",
        name: "Kelajakdagi natija",
        desc: "Asinxron hisoblash natijasini ifodalaydi; <code>Future</code> tugagach natija yoki xato qaytadi.",
        pattern: /\bFuture\b/,
      },
    ],
  };

  function buildGlossary(code, lang) {
    const terms = GLOSSARY[lang] || [];
    const found = [];
    terms.forEach((term, order) => {
      const match = term.pattern.exec(code);
      if (match) found.push({ term: term, index: match.index, order: order });
    });
    found.sort((a, b) => a.index - b.index || a.order - b.order);
    return found.map((entry) => entry.term);
  }

  function renderGlossary(code, lang, key) {
    const terms = buildGlossary(code, lang);
    if (!terms.length) return "";
    const bodyId = "gloss-" + key;
    const expanded = !(window.matchMedia && window.matchMedia("(max-width: 760px)").matches);
    const items = terms
      .map(
        (term) => `
          <div class="code-gloss__item code-gloss__item--${term.cat}">
            <dt class="code-gloss__term"><code>${esc(term.label)}</code><span>${esc(term.name)}</span></dt>
            <dd>${term.desc}</dd>
          </div>`
      )
      .join("");
    return `
      <div class="code-gloss${expanded ? "" : " is-collapsed"}" data-glossary>
        <button class="code-gloss__toggle" type="button" data-glossary-toggle aria-expanded="${expanded}" aria-controls="${bodyId}">
          <span class="code-gloss__icon">${ICONS.book}</span>
          <span class="code-gloss__title">Kod lug'ati</span>
          <span class="code-gloss__count">${terms.length} ta tushuntirish</span>
        </button>
        <div class="code-gloss__body" id="${bodyId}"${expanded ? "" : " hidden"}>
          <dl class="code-gloss__list">${items}</dl>
        </div>
      </div>`;
  }

  /* ---------------------------------------------------------------------
     Syntax highlighting
     --------------------------------------------------------------------- */
  const KEYWORDS = {
    js: new Set(
      "const let var function return if else for while do switch case break continue new class extends import export from default async await try catch finally throw typeof instanceof in of this null undefined true false".split(
        " "
      )
    ),
    cpp: new Set(
      "int double float char bool void long short unsigned const auto return if else for while do switch case break continue class struct public private protected new delete try catch throw using namespace std include true false nullptr".split(
        " "
      )
    ),
    sql: new Set(
      "SELECT FROM WHERE INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE DROP ALTER ADD PRIMARY KEY FOREIGN REFERENCES NOT NULL UNIQUE DEFAULT ORDER BY GROUP HAVING LIMIT OFFSET JOIN INNER LEFT RIGHT OUTER ON AS AND OR IN BETWEEN LIKE IS DISTINCT COUNT SUM AVG MIN MAX ASC DESC CASE WHEN THEN ELSE END BEGIN COMMIT ROLLBACK TRANSACTION INDEX".split(
        " "
      )
    ),
    java: new Set(
      "abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for if implements import instanceof int interface long native new package private protected public record return sealed short static strictfp super switch synchronized this throw throws transient try var void volatile while yield true false null".split(
        " "
      )
    ),
    c: new Set(
      "auto break case char const continue default do double else enum extern float for goto if inline int long register restrict return short signed sizeof static struct switch typedef union unsigned void volatile while true false NULL".split(
        " "
      )
    ),
    php: new Set(
      "abstract and array as break callable case catch class clone const continue declare default do echo else elseif empty endforeach endif endswitch eval exit extends final finally fn for foreach function global goto if implements include include_once instanceof interface isset list match namespace new or print private protected public readonly require require_once return static switch throw trait try unset use while xor yield true false null".split(
        " "
      )
    ),
    ruby: new Set(
      "alias and begin break case class def do else elsif end ensure false for if in module next nil not or redo rescue retry return self super then true undef unless until when while yield".split(
        " "
      )
    ),
    go: new Set(
      "break case chan const continue default defer else fallthrough for func go goto if import interface map package range return select struct switch type var true false nil".split(
        " "
      )
    ),
    rust: new Set(
      "as async await break const continue crate dyn else enum extern false fn for if impl in let loop match mod move mut pub ref return self Self static struct super trait true type unsafe use where while".split(
        " "
      )
    ),
    ts: new Set(
      "const let var function return if else for while do switch case break continue new class extends import export from default async await try catch finally throw typeof instanceof in of this null undefined true false interface type implements readonly public private protected abstract declare enum namespace keyof infer never unknown any string number boolean bigint symbol object as satisfies".split(
        " "
      )
    ),
    kotlin: new Set(
      "as break class continue do else false for fun if in interface is null object package return super this throw true try typealias typeof val var when while by catch constructor finally get import set where actual abstract annotation companion const data enum final infix inline inner internal lateinit open operator out override private protected public reified sealed suspend tailrec vararg".split(
        " "
      )
    ),
    dart: new Set(
      "abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in interface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield".split(
        " "
      )
    ),
    bash: new Set(
      "if then else elif fi for in do done while until case esac function select local export readonly declare unset shift source alias return exit set echo printf read cd pwd test true false".split(
        " "
      )
    ),
    r: new Set(
      "if else for while repeat function break next return TRUE FALSE NULL NA Inf NaN in library require".split(
        " "
      )
    ),
    scala: new Set(
      "abstract case catch class def do else enum export extends false final finally for given if implicit import lazy match new null object override package private protected return sealed super then throw trait true try type val var while with yield".split(
        " "
      )
    ),
  };

  const HASH_COMMENT_LANGS = new Set(["php", "ruby", "bash", "r"]);
  const PREPROCESSOR_LANGS = new Set(["c", "cpp"]);

  function tokenize(code, lang) {
    if (lang === "html") return highlightHTML(code);
    if (lang === "css") return highlightCSS(code);

    let tokenRe;
    if (lang === "sql") {
      tokenRe =
        /(--[^\n]*|\/\*[\s\S]*?\*\/|'(?:''|[^'])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][\w]*\b)/g;
    } else if (lang === "php") {
      tokenRe =
        /(\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\$[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b)/g;
    } else if (lang === "ruby") {
      tokenRe =
        /(#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|:[A-Za-z_]\w*[!?]?|@@?[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*[!?]?)/g;
    } else if (lang === "bash") {
      tokenRe =
        /(#[^\n]*|"(?:\\.|[^"\\])*"|'[^']*'|\$\{[^}]*\}|\$[A-Za-z_]\w*|\b\d+\b|\b[A-Za-z_][\w-]*\b)/g;
    } else if (lang === "r") {
      tokenRe =
        /(#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b|\b[A-Za-z_.][\w.]*\b)/g;
    } else if (lang === "kotlin") {
      tokenRe =
        /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"""[\s\S]*?"""|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b)/g;
    } else if (lang === "c") {
      tokenRe =
        /(#[^\n]*|\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b)/g;
    } else if (lang === "cpp") {
      tokenRe =
        /(#[^\n]*|\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b)/g;
    } else {
      tokenRe =
        /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*\b)/g;
    }

    let output = "";
    let lastIndex = 0;
    let match;
    const keywords = KEYWORDS[lang] || KEYWORDS.js;
    while ((match = tokenRe.exec(code)) !== null) {
      output += esc(code.slice(lastIndex, match.index));
      const token = match[0];
      let className = "";
      if (
        token.startsWith("//") ||
        token.startsWith("/*") ||
        token.startsWith("--") ||
        (HASH_COMMENT_LANGS.has(lang) && token.startsWith("#")) ||
        (PREPROCESSOR_LANGS.has(lang) && token.startsWith("#"))
      ) {
        className = "tok-c";
      } else if (/^["'`]/.test(token)) {
        className = "tok-s";
      } else if (/^\d/.test(token)) {
        className = "tok-n";
      } else if (lang === "sql" ? keywords.has(token.toUpperCase()) : keywords.has(token)) {
        className = "tok-k";
      } else if (
        token === "true" ||
        token === "false" ||
        token === "null" ||
        token === "NULL" ||
        token === "nil" ||
        token === "None" ||
        token === "TRUE" ||
        token === "FALSE" ||
        token === "NA"
      ) {
        className = "tok-b";
      } else if (lang === "php" && token.startsWith("$")) {
        className = "tok-b";
      } else if (lang === "ruby" && (token.startsWith("@") || token.startsWith(":"))) {
        className = "tok-b";
      } else if (lang === "bash" && token.startsWith("$")) {
        className = "tok-b";
      } else {
        const rest = code.slice(match.index + token.length);
        if (/^\s*\(/.test(rest)) className = "tok-f";
      }
      output += className
        ? `<span class="${className}">${esc(token)}</span>`
        : esc(token);
      lastIndex = tokenRe.lastIndex;
    }
    output += esc(code.slice(lastIndex));
    return output;
  }

  function highlightHTML(code) {
    let output = esc(code);
    output = output.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-c">$1</span>');
    output = output.replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tok-k">$2</span>');
    output = output.replace(
      /([a-zA-Z-]+)(=)(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g,
      '<span class="tok-b">$1</span>$2<span class="tok-s">$3</span>'
    );
    return output;
  }

  function highlightCSS(code) {
    let output = esc(code);
    output = output.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-c">$1</span>');
    output = output.replace(
      /([a-z-]+)(\s*:\s*)([^;{}\n]+)(;?)/g,
      '<span class="tok-b">$1</span>$2<span class="tok-s">$3</span>$4'
    );
    output = output.replace(
      /(@[a-z-]+|#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms)?\b)/g,
      '<span class="tok-n">$1</span>'
    );
    return output;
  }

  function renderCode(code, lang) {
    return tokenize(code, lang);
  }

  /* ---------------------------------------------------------------------
     Content rendering
     --------------------------------------------------------------------- */
  function renderHead(lesson, progress) {
    const done = progress.completed.includes(lesson.id);
    const module = course.modules.find((item) => item.lessons.includes(lesson.id));
    const meta = [
      `<span>${ICONS.clock}${lesson.minutes} daqiqa</span>`,
      `<span>${ICONS.book}${lesson.isExam ? `${EXAM_TOTAL} savol` : `Dars ${lesson.id} / ${TOTAL - 1}`}</span>`,
    ].join("");
    const completeButton = lesson.isExam
      ? ""
      : `<button class="complete-btn${done ? " is-done" : ""}" type="button" data-toggle-complete aria-pressed="${done}">${ICONS.check}<span>${done ? "Tugatilgan" : "Tugatdim"}</span></button>`;
    return `
      <div class="lesson-head__eyebrow">
        <span>${esc(module ? module.title : course.title)}</span>
        <span class="sep"></span>
        <span class="muted">${lesson.isExam ? "Yakuniy imtihon" : `Dars ${lesson.id} / ${TOTAL - 1}`}</span>
      </div>
      <h1>${esc(lesson.title)}</h1>
      <div class="lesson-head__row">
        <div class="lesson-head__meta">${meta}</div>
        ${completeButton}
      </div>`;
  }

  function renderBlock(block, lessonId, index) {
    switch (block.type) {
      case "p":
        return `<p>${block.html}</p>`;
      case "h":
        return `<h2>${block.html}</h2>`;
      case "code":
        return renderCodeBlock(block, lessonId, index);
      case "ul":
        return `<ul>${(block.items || []).map((item) => `<li>${item}</li>`).join("")}</ul>`;
      case "ol":
        return `<ol>${(block.items || []).map((item) => `<li>${item}</li>`).join("")}</ol>`;
      case "note": {
        const variant = block.variant || "info";
        const modifier = variant === "tip" || variant === "warning" ? ` callout--${variant}` : "";
        const icon = variant === "tip" ? ICONS.tip : variant === "warning" ? ICONS.warning : ICONS.info;
        return `
          <div class="callout${modifier}">
            <span class="callout__icon">${icon}</span>
            <div>${block.title ? `<b>${esc(block.title)}</b>` : ""}${block.html}</div>
          </div>`;
      }
      case "table":
        return `
          <div class="lesson-table-wrap">
            <table class="lesson-table">
              <thead><tr>${(block.head || [])
                .map((cell) => `<th>${cell}</th>`)
                .join("")}</tr></thead>
              <tbody>${(block.rows || [])
                .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
                .join("")}</tbody>
            </table>
          </div>`;
      default:
        return "";
    }
  }

  function renderCodeBlock(block, lessonId, index) {
    const lang = block.lang || course.lang;
    const key = `c-${lessonId}-${index}`;
    const file = block.title || DEFAULT_FILES[lang] || "main";
    const interactive = course.interactive !== "none" && block.runnable !== false;
    codeStore.set(key, { code: block.code, lang: lang, file: file, interactive: interactive });
    const output = block.output
      ? `<div class="code-result">
           <div class="code-result__head"><i></i>${block.outputLabel || "Kutilgan natija"}</div>
           <pre>${esc(block.output)}</pre>
         </div>`
      : "";
    const glossary = renderGlossary(block.code, lang, key);
    const runButton = interactive
      ? `<button class="code-btn code-btn--run" type="button" data-run-code="${key}">${ICONS.play} Sinash</button>`
      : `<span class="code-btn code-btn--sample">Namuna</span>`;
    return `
      <div class="code-card">
        <div class="code-card__head">
          <div class="code-dots" aria-hidden="true"><i></i><i></i><i></i></div>
          <span class="code-card__lang">${LANG_LABELS[lang] || lang}</span>
          <span class="code-card__title">${esc(file)}</span>
          <div class="code-card__tools">
            <button class="code-btn" type="button" data-copy-code="${key}" aria-label="Kodni nusxalash">${ICONS.copy} Nusxalash</button>
            ${runButton}
          </div>
        </div>
        <pre><code>${renderCode(block.code, lang)}</code></pre>
        ${output}
        ${glossary}
      </div>`;
  }

  function renderQuiz(lesson) {
    const questions = lesson.quiz || [];
    if (!questions.length) return "";
    const items = questions
      .map(
        (question, qi) => `
          <div class="quiz-q" data-quiz-index="${qi}">
            <div class="quiz-q__title"><span class="quiz-q__num">${qi + 1}</span><span>${esc(question.q)}</span></div>
            <div class="quiz-options">
              ${question.options
                .map(
                  (option, oi) => `
                    <button class="quiz-option" type="button" data-quiz-option="${oi}">
                      <span class="quiz-option__letter">${String.fromCharCode(65 + oi)}</span>
                      <span>${esc(option)}</span>
                    </button>`
                )
                .join("")}
            </div>
            <div class="quiz-explain" data-quiz-explain><b>Izoh:</b> ${esc(question.explain)}</div>
          </div>`
      )
      .join("");
    return `
      <section class="quiz-card" data-quiz-card aria-label="Dars testi">
        <div class="quiz-card__head">
          <span class="quiz-card__icon">${ICONS.quiz}</span>
          <div><h2>Bilimingizni sinang</h2><p>${questions.length} ta savol. Variantni tanlaganingizdan keyin izoh ko'rinadi.</p></div>
        </div>
        <div class="quiz-list">${items}</div>
        <div class="quiz-summary" data-quiz-summary>
          <span data-quiz-score></span>
          <button type="button" data-quiz-reset>Qayta urinish</button>
        </div>
      </section>`;
  }

  function renderExam(lesson, progress) {
    const previous = progress.exam;
    let note = "";
    if (previous) {
      note = `<div class="exam-intro__note">
        Oldingi natijangiz: <b>${previous.score}/${previous.total}</b> ${previous.passed ? "— imtihondan o'tilgan." : "— hali o'tish balliga yetmagan."}
        ${previous.passed ? `<button class="btn btn--sm btn--primary" type="button" data-certificate="${courseId}">Sertifikatni ko'rish</button>` : ""}
      </div>`;
    }
    const questions = course.exam.questions
      .map(
        (question, qi) => `
          <div class="exam-q" data-exam-index="${qi}">
            <div class="exam-q__title"><span class="exam-q__num">${qi + 1}</span><span>${esc(question.q)}</span></div>
            <div class="exam-options">
              ${question.options
                .map(
                  (option, oi) => `
                    <label class="exam-option">
                      <input type="radio" name="exam-${qi}" value="${oi}">
                      <span class="exam-option__radio" aria-hidden="true"></span>
                      <span>${esc(option)}</span>
                    </label>`
                )
                .join("")}
            </div>
          </div>`
      )
      .join("");
    return `
      <div class="exam-intro">
        <div class="exam-intro__top">
          <span class="exam-intro__icon">${ICONS.award}</span>
          <div>
            <h2>Yakuniy imtihon</h2>
            <p>${course.title} kursi bo'yicha ${EXAM_TOTAL} savol. Kamida ${PASS_SCORE} ta to'g'ri javob bilan sertifikat olasiz.</p>
          </div>
        </div>
        <div class="exam-intro__stats">
          <div class="exam-intro__stat"><b>${EXAM_TOTAL}</b><span>savol</span></div>
          <div class="exam-intro__stat"><b>${PASS_SCORE}/${EXAM_TOTAL}</b><span>o'tish uchun</span></div>
          <div class="exam-intro__stat"><b>${Math.round((PASS_SCORE / EXAM_TOTAL) * 100)}%</b><span>minimal natija</span></div>
        </div>
        ${note}
      </div>
      <form class="exam-form" data-exam-form novalidate>
        <div class="exam-error" data-exam-error role="alert"></div>
        ${questions}
        <div class="exam-actions">
          <button class="btn btn--primary" type="submit">Natijani tekshirish</button>
          <p>Javoblaringiz brauzerda saqlanadi. Eng yaxshi natija hisobga olinadi.</p>
        </div>
      </form>
      <div data-exam-result></div>`;
  }

  function renderLessonNav(lesson) {
    const index = lessons.findIndex((item) => item.id === lesson.id);
    const previous = lessons[index - 1];
    const next = lessons[index + 1];
    const previousLink = previous
      ? `<a class="lesson-nav__link lesson-nav__link--prev" href="#dars-${previous.id}">${ICONS.arrowLeft}<span><small>Oldingi</small><b>${esc(previous.title)}</b></span></a>`
      : '<span class="lesson-nav__placeholder"></span>';
    const nextLink = next
      ? `<a class="lesson-nav__link lesson-nav__link--next" href="#dars-${next.id}"><span><small>Keyingi</small><b>${esc(next.title)}</b></span>${ICONS.arrowRight}</a>`
      : `<a class="lesson-nav__link lesson-nav__link--next" href="kurslar.html"><span><small>Kurslar</small><b>Boshqa kursni tanlash</b></span>${ICONS.arrowRight}</a>`;
    return `<nav class="lesson-nav" aria-label="Darslar orasida o'tish">${previousLink}${nextLink}</nav>`;
  }

  function renderSidebar() {
    const progress = Noldan.getProgress(courseId);
    const query = searchQuery.trim().toLowerCase();
    const parts = [];
    course.modules.forEach((module) => {
      const filtered = module.lessons
        .map((id) => byId.get(id))
        .filter(Boolean)
        .filter((lesson) => !query || lesson.title.toLowerCase().includes(query));
      if (!filtered.length) return;
      const doneCount = filtered.filter((lesson) => progress.completed.includes(lesson.id)).length;
      parts.push(
        `<div class="lesson-group">
          <div class="lesson-group__head">${esc(module.title)}<span>${doneCount}/${filtered.length}</span></div>
          ${filtered
            .map((lesson) => {
              const done = progress.completed.includes(lesson.id);
              const active = lesson.id === currentId;
              const classes = [
                "lesson-link",
                done ? "is-done" : "",
                active ? "is-active" : "",
                lesson.isExam ? "lesson-link--exam" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return `<a class="${classes}" href="#dars-${lesson.id}" data-sidebar-lesson="${lesson.id}"${active ? ' aria-current="page"' : ""}>
                <span class="lesson-link__index">${lesson.id}</span>
                <span class="lesson-link__title">${esc(lesson.title)}</span>
                <span class="lesson-link__state">${done ? ICONS.check : ""}</span>
              </a>`;
            })
            .join("")}
        </div>`
      );
    });
    lessonList.innerHTML = parts.length
      ? parts.join("")
      : '<div class="sidebar-empty">Mos dars topilmadi.</div>';
  }

  function renderLesson(id, options) {
    const settings = options || {};
    const lesson = byId.get(id) || lessons[0];
    if (!lesson) return;
    currentId = lesson.id;
    codeStore.clear();
    const progress = Noldan.getProgress(courseId);
    const blocks = lesson.blocks.map((block, index) => renderBlock(block, lesson.id, index)).join("");
    let content = `<div class="lesson-content">${blocks}</div>`;
    if (lesson.isExam) content += renderExam(lesson, progress);
    else if (lesson.quiz && lesson.quiz.length) content += renderQuiz(lesson);
    content += renderLessonNav(lesson);
    article.innerHTML = renderHead(lesson, progress) + content;
    if (lesson.isExam) bindExamForm();
    renderSidebar();
    updateProgressUI();
    updateMobileTitle();
    document.title = `${lesson.title} — ${course.title} kursi | Noldan`;
    if (settings.scroll) scrollToLesson();
  }

  /* ---------------------------------------------------------------------
     Progress & sidebar
     --------------------------------------------------------------------- */
  function updateProgressUI() {
    const progress = Noldan.getProgress(courseId);
    const count = Noldan.getCompletedCount(progress, courseId);
    const percent = Math.round((count / TOTAL) * 100);
    const ring = document.querySelector("[data-ring]");
    if (ring) {
      ring.style.strokeDasharray = `${RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`;
      ring.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - Math.min(count / TOTAL, 1)));
    }
    document.querySelectorAll("[data-sidebar-percent], [data-hero-percent]").forEach((node) => {
      node.textContent = `${percent}%`;
    });
    const sidebarProgress = document.querySelector("[data-sidebar-progress]");
    if (sidebarProgress) sidebarProgress.textContent = `${count}/${TOTAL} dars tugatilgan`;
    const heroProgress = document.querySelector("[data-hero-progress-text]");
    if (heroProgress) heroProgress.textContent = `${count}/${TOTAL} dars`;
    const heroBar = document.querySelector("[data-hero-bar]");
    if (heroBar) heroBar.style.width = `${percent}%`;
    const cta = document.querySelector("[data-course-cta]");
    if (cta) {
      const nextId = Noldan.nextLessonId(progress, courseId);
      cta.setAttribute("href", `#dars-${nextId}`);
      const label = cta.querySelector("[data-course-cta-label]");
      if (label) {
        label.textContent =
          count === 0 ? "Kursni boshlash" : count >= TOTAL ? "Kursni takrorlash" : "Davom ettirish";
      }
    }
    updateCompleteButton();
  }

  function updateCompleteButton() {
    const button = article.querySelector("[data-toggle-complete]");
    if (!button || !currentId) return;
    const done = Noldan.getProgress(courseId).completed.includes(currentId);
    button.classList.toggle("is-done", done);
    button.setAttribute("aria-pressed", String(done));
    button.innerHTML = `${ICONS.check}<span>${done ? "Tugatilgan" : "Tugatdim"}</span>`;
  }

  function updateMobileTitle() {
    const lesson = byId.get(currentId);
    const node = document.querySelector("[data-mobile-lesson-title]");
    if (!lesson || !node) return;
    node.textContent = lesson.isExam ? "Yakuniy imtihon" : `Dars ${lesson.id}: ${lesson.title}`;
  }

  function toggleComplete() {
    const lesson = byId.get(currentId);
    if (!lesson || lesson.isExam) return;
    const progress = Noldan.getProgress(courseId);
    if (progress.completed.includes(lesson.id)) {
      progress.completed = progress.completed.filter((id) => id !== lesson.id);
      Noldan.saveProgress(progress, courseId);
      Noldan.toast("Dars belgisi olib tashlandi.", "info");
    } else {
      Noldan.completeLesson(lesson.id, courseId);
      Noldan.toast("Dars tugatildi. Barakalla!", "success");
    }
    updateProgressUI();
    renderSidebar();
  }

  /* ---------------------------------------------------------------------
     Quizzes
     --------------------------------------------------------------------- */
  function handleQuizOption(button) {
    const question = button.closest("[data-quiz-index]");
    if (!question || question.dataset.answered === "true") return;
    const lesson = byId.get(currentId);
    if (!lesson || !lesson.quiz) return;
    const qi = Number(question.dataset.quizIndex);
    const oi = Number(button.dataset.quizOption);
    const quiz = lesson.quiz[qi];
    if (!quiz) return;
    question.dataset.answered = "true";
    const isCorrect = oi === quiz.answer;
    question.dataset.correct = isCorrect ? "true" : "false";
    question.querySelectorAll(".quiz-option").forEach((option, index) => {
      option.disabled = true;
      if (index === quiz.answer) option.classList.add("is-correct");
      if (index === oi && !isCorrect) option.classList.add("is-wrong");
    });
    const explain = question.querySelector("[data-quiz-explain]");
    if (explain) explain.classList.add("is-visible");
    updateQuizSummary(button.closest("[data-quiz-card]"));
  }

  function updateQuizSummary(card) {
    if (!card) return;
    const questions = Array.from(card.querySelectorAll("[data-quiz-index]"));
    const answered = questions.filter((item) => item.dataset.answered === "true").length;
    if (answered < questions.length) return;
    const correct = questions.filter((item) => item.dataset.correct === "true").length;
    const summary = card.querySelector("[data-quiz-summary]");
    const score = card.querySelector("[data-quiz-score]");
    const percent = Math.round((correct / questions.length) * 100);
    if (score) {
      score.textContent =
        correct === questions.length
          ? `Ajoyib! ${correct}/${questions.length} savolga to'g'ri javob berdingiz.`
          : `Natija: ${correct}/${questions.length} to'g'ri javob (${percent}%).${
              percent < 60
                ? " Mavzuni yana bir bor o'qib chiqish tavsiya etiladi — buni boshidan takrorlash tugmasi bilan qilishingiz mumkin."
                : ""
            }`;
    }
    if (summary) summary.classList.add("is-visible");
    if (currentId) {
      Noldan.saveQuizResult(currentId, correct, questions.length, courseId);
      renderSidebar();
    }
  }

  function resetQuiz(card) {
    if (!card) return;
    card.querySelectorAll("[data-quiz-index]").forEach((question) => {
      delete question.dataset.answered;
      delete question.dataset.correct;
      question.querySelectorAll(".quiz-option").forEach((option) => {
        option.disabled = false;
        option.classList.remove("is-correct", "is-wrong");
      });
      const explain = question.querySelector("[data-quiz-explain]");
      if (explain) explain.classList.remove("is-visible");
    });
    const summary = card.querySelector("[data-quiz-summary]");
    if (summary) summary.classList.remove("is-visible");
    const score = card.querySelector("[data-quiz-score]");
    if (score) score.textContent = "";
  }

  /* ---------------------------------------------------------------------
     Final exam
     --------------------------------------------------------------------- */
  function bindExamForm() {
    const form = article.querySelector("[data-exam-form]");
    if (!form) return;
    const errorBox = form.querySelector("[data-exam-error]");
    form.addEventListener("change", () => {
      if (errorBox) errorBox.classList.remove("is-visible");
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.dataset.submitted === "true") return;
      const questions = course.exam.questions;
      const answers = questions.map((question, index) => {
        const selected = form.querySelector(`input[name="exam-${index}"]:checked`);
        return selected ? Number(selected.value) : null;
      });
      const unanswered = answers.filter((answer) => answer === null).length;
      if (unanswered > 0) {
        if (errorBox) {
          errorBox.textContent = `Barcha savollarga javob bering. ${unanswered} ta savol javobsiz qoldi.`;
          errorBox.classList.add("is-visible");
        }
        const firstMissing = answers.findIndex((answer) => answer === null);
        const input = form.querySelector(`input[name="exam-${firstMissing}"]`);
        const question = input ? input.closest(".exam-q") : null;
        if (question) {
          question.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
        }
        return;
      }
      form.dataset.submitted = "true";
      if (errorBox) errorBox.classList.remove("is-visible");
      let score = 0;
      questions.forEach((question, index) => {
        const selected = answers[index];
        const correct = selected === question.answer;
        if (correct) score += 1;
        const questionEl = form.querySelector(`[data-exam-index="${index}"]`);
        if (!questionEl) return;
        questionEl.classList.add(correct ? "is-correct" : "is-wrong");
        questionEl.querySelectorAll(".exam-option").forEach((label, oi) => {
          const input = label.querySelector("input");
          if (input) input.disabled = true;
          if (oi === question.answer) label.classList.add("is-correct");
          if (oi === selected && !correct) label.classList.add("is-wrong");
        });
        if (!questionEl.querySelector("[data-exam-explain]")) {
          questionEl.insertAdjacentHTML(
            "beforeend",
            `<div class="quiz-explain is-visible" data-exam-explain><b>Izoh:</b> ${esc(question.explain)}</div>`
          );
        }
      });
      const passed = score >= PASS_SCORE;
      const progress = Noldan.getProgress(courseId);
      const previous = progress.exam;
      const attempt = { score, total: EXAM_TOTAL, passed, date: new Date().toISOString() };
      const isBest = !previous || score > previous.score || (passed && !previous.passed);
      progress.exam = isBest ? attempt : previous;
      if (passed && !progress.completed.includes(EXAM_ID)) {
        progress.completed.push(EXAM_ID);
        progress.completed.sort((a, b) => a - b);
      }
      Noldan.saveProgress(progress, courseId);
      const bestPassed = Boolean(progress.exam && progress.exam.passed);
      showExamResult(score, passed, bestPassed);
      renderSidebar();
      updateProgressUI();
      if (passed) {
        Noldan.toast("Tabriklaymiz! Imtihondan o'tdingiz.", "success");
        fireConfetti();
      } else {
        Noldan.toast("Hali o'tish balliga yetmadingiz. Izohlarni ko'rib chiqing.", "error");
      }
    });
  }

  function showExamResult(score, passed, bestPassed) {
    const holder = article.querySelector("[data-exam-result]");
    if (!holder) return;
    const percent = Math.round((score / EXAM_TOTAL) * 100);
    const user = Noldan.getUser();
    let title;
    let text;
    if (passed) {
      title = "Tabriklaymiz! Kurs yakunlandi.";
      text = `Siz ${score}/${EXAM_TOTAL} to'g'ri javob bilan imtihondan o'tdingiz. Sertifikatni ko'rish va PDF qilib saqlash mumkin.`;
      if (!user) text += " Natijani hisobingizga saqlash uchun ro'yxatdan o'ting — progress avtomatik ko'chiriladi.";
    } else if (bestPassed) {
      title = "Bu urinishda o'tolmadingiz.";
      text = `Siz ${score}/${EXAM_TOTAL} ball to'pladingiz. Avvalgi muvaffaqiyatli natijangiz saqlanib qoldi — sertifikatingiz ochiq.`;
    } else {
      title = "Yana bir urinib ko'ring.";
      text = `Siz ${score}/${EXAM_TOTAL} ball to'pladingiz. O'tish uchun kamida ${PASS_SCORE} ta to'g'ri javob kerak. Har bir savol ostidagi izohlarni o'qib chiqing.`;
    }
    let certificateButton = "";
    if (bestPassed) {
      certificateButton = user
        ? `<button class="btn btn--lime" type="button" data-certificate="${courseId}">Sertifikatni ko'rish</button>`
        : `<button class="btn btn--lime" type="button" data-open-auth="register">Sertifikat uchun ro'yxatdan o'tish</button>`;
    }
    const retryButton = passed
      ? `<button class="btn btn--white" type="button" data-exam-retry>Qayta topshirish</button>`
      : `<button class="btn btn--lime" type="button" data-exam-retry>Qayta topshirish</button>`;
    const restartButton = !bestPassed
      ? `<button class="btn btn--ghost exam-restart-btn" type="button" data-exam-restart>
           ${ICONS.refresh}<span>Kursni boshidan takrorlash</span>
         </button>
         <small class="exam-restart-hint">Bu tugma kurs progressi va test natijalarini tozalaydi.</small>`
      : "";
    holder.innerHTML = `
      <div class="exam-result">
        <span class="badge ${passed ? "badge--lime" : "badge--muted"}">${passed ? "Imtihon o'tildi" : "Yakunlanmadi"}</span>
        <div class="exam-result__main">
          <div class="exam-score-ring" style="--score:${percent}"><b>${score}/${EXAM_TOTAL}</b></div>
          <div><h2>${title}</h2><p>${text}</p></div>
        </div>
        <div class="exam-result__actions">
          ${certificateButton}
          ${retryButton}
          ${restartButton}
        </div>
      </div>`;
    holder.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
  }

  function resetExam() {
    const form = article.querySelector("[data-exam-form]");
    if (!form) return;
    form.reset();
    delete form.dataset.submitted;
    form.querySelectorAll("[data-exam-index]").forEach((question) => {
      question.classList.remove("is-correct", "is-wrong");
      question.querySelectorAll(".exam-option").forEach((label) => {
        label.classList.remove("is-correct", "is-wrong");
        const input = label.querySelector("input");
        if (input) input.disabled = false;
      });
      question.querySelectorAll("[data-exam-explain]").forEach((node) => node.remove());
    });
    const errorBox = form.querySelector("[data-exam-error]");
    if (errorBox) {
      errorBox.textContent = "";
      errorBox.classList.remove("is-visible");
    }
    const holder = article.querySelector("[data-exam-result]");
    if (holder) holder.innerHTML = "";
    form.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  }

  function fireConfetti() {
    if (reducedMotion) return;
    const colors = ["#5b4df6", "#c9f26b", "#a382ff", "#ffd166", "#6ee7a8"];
    for (let index = 0; index < 36; index += 1) {
      const piece = document.createElement("i");
      piece.className = "confetti";
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.background = colors[index % colors.length];
      piece.style.setProperty("--drift", `${Math.round(Math.random() * 180 - 90)}px`);
      piece.style.animationDelay = `${(Math.random() * 0.6).toFixed(2)}s`;
      document.body.appendChild(piece);
      window.setTimeout(() => piece.remove(), 4200);
    }
  }

  /* ---------------------------------------------------------------------
     Code runner (JS worker + HTML/CSS preview)
     --------------------------------------------------------------------- */
  function createJsWorker() {
    const source = `
      self.onmessage = async function (event) {
        const data = event.data || {};
        if (data.type !== "run") return;
        const logs = [];
        const started = performance.now();
        const render = function (value) {
          if (typeof value === "string") return value;
          if (value instanceof Error) return value.name + ": " + value.message;
          try { return JSON.stringify(value); } catch (error) { return String(value); }
        };
        const capture = function (level) {
          return function () {
            const parts = Array.prototype.map.call(arguments, render);
            logs.push((level === "log" ? "" : "[" + level + "] ") + parts.join(" "));
          };
        };
        const fakeConsole = {
          log: capture("log"),
          info: capture("info"),
          warn: capture("warn"),
          error: capture("error"),
          table: capture("log"),
        };
        try {
          const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
          const fn = new AsyncFunction("console", data.code);
          await fn(fakeConsole);
          self.postMessage({
            type: "result",
            id: data.id,
            output: logs.join("\\n"),
            error: "",
            duration: performance.now() - started,
          });
        } catch (error) {
          self.postMessage({
            type: "result",
            id: data.id,
            output: logs.join("\\n"),
            error: (error && error.name ? error.name + ": " : "") + (error && error.message ? error.message : String(error)),
            duration: performance.now() - started,
          });
        }
      };
    `;
    const blob = new Blob([source], { type: "application/javascript" });
    return new Worker(URL.createObjectURL(blob));
  }

  function initRunner() {
    if (!runnerModal) return;
    const codeEl = runnerModal.querySelector("#runnerCode");
    const titleEl = runnerModal.querySelector("[data-runner-title]");
    const subtitleEl = runnerModal.querySelector("[data-runner-subtitle]");
    const badgeEl = runnerModal.querySelector("[data-runner-badge]");
    const fileEl = runnerModal.querySelector("[data-runner-file]");
    const copyButton = runnerModal.querySelector("[data-runner-copy]");
    const runButton = runnerModal.querySelector("[data-runner-run]");
    const consoleEl = runnerModal.querySelector("[data-runner-console]");
    const outputWrap = runnerModal.querySelector("[data-js-output]");
    const previewWrap = runnerModal.querySelector("[data-preview-wrap]");
    const preview = runnerModal.querySelector("[data-preview]");
    const previewDot = runnerModal.querySelector("[data-preview-dot]");
    const dot = runnerModal.querySelector("[data-runner-dot]");
    const timeEl = runnerModal.querySelector("[data-runner-time]");
    let activeEntry = null;
    let worker = null;
    let busy = false;

    function setConsole(message, isError) {
      consoleEl.classList.toggle("is-error", Boolean(isError));
      consoleEl.textContent = message;
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    function setStatus(state) {
      dot.className = "status-dot";
      if (state === "ready") dot.classList.add("is-ready");
      if (state === "error") dot.classList.add("is-error");
      if (state === "busy") dot.classList.add("is-busy");
      if (previewDot) {
        previewDot.className = "status-dot";
        if (state === "ready") previewDot.classList.add("is-ready");
        if (state === "error") previewDot.classList.add("is-error");
        if (state === "busy") previewDot.classList.add("is-busy");
      }
    }

    function open(entry) {
      activeEntry = entry;
      const previewMode = entry.lang === "html" || entry.lang === "css";
      codeEl.value = entry.code;
      if (titleEl) titleEl.textContent = previewMode ? "Sahifani sinab ko'rish" : "Kodni sinab ko'rish";
      if (subtitleEl) subtitleEl.textContent = previewMode ? "HTML va CSS natijasini brauzerda ko'ring." : "Kodni o'zgartiring va konsol natijasini ko'ring.";
      if (badgeEl) badgeEl.textContent = previewMode ? "HTML / CSS" : "JavaScript";
      if (fileEl) fileEl.textContent = entry.file;
      if (runButton) runButton.textContent = RUN_LABELS[entry.lang] || "Ishga tushirish";
      if (outputWrap) outputWrap.hidden = previewMode;
      if (previewWrap) previewWrap.hidden = !previewMode;
      if (preview) preview.srcdoc = "";
      setStatus("idle");
      setConsole("Ishga tushirish tugmasini bosing — natija shu yerda ko'rinadi.", false);
      if (timeEl) timeEl.textContent = "";
      Noldan.openModal(runnerModal);
      window.setTimeout(() => codeEl.focus(), 120);
    }

    function htmlDocument(code, lang) {
      if (lang === "css") {
        return `<!DOCTYPE html><html lang="uz"><head><meta charset="UTF-8"><style>${code}</style></head><body><div class="demo"><h1>Salom, Noldan!</h1><p>Bu namuna matni. CSS qoidalari shu elementlarga qo'llanadi.</p><button>Tugma</button><div class="box">Karta</div></div></body></html>`;
      }
      return code;
    }

    function runPreview(entry) {
      if (!preview) return;
      setStatus("busy");
      preview.srcdoc = htmlDocument(codeEl.value, entry.lang);
      window.setTimeout(() => {
        setStatus("ready");
        if (previewDot) previewDot.classList.add("is-ready");
        if (timeEl) timeEl.textContent = "Tayyor";
      }, 180);
    }

    function runJs(entry) {
      if (busy) return;
      busy = true;
      setStatus("busy");
      setConsole("Kod bajarilmoqda...", false);
      if (timeEl) timeEl.textContent = "";
      if (!worker) worker = createJsWorker();
      const id = Date.now() + Math.random();
      const timeout = window.setTimeout(() => {
        if (!runnerRun || runnerRun.id !== id) return;
        runnerRun = null;
        busy = false;
        try {
          worker.terminate();
        } catch (error) {
          /* noop */
        }
        worker = null;
        setStatus("error");
        setConsole("Kod 5 soniya ichida tugamadi. Cheksiz tsikl bo'lishi mumkin.", true);
      }, 5000);
      runnerRun = { id: id, timer: timeout };
      worker.onmessage = (event) => {
        const data = event.data || {};
        if (data.type !== "result" || !runnerRun || data.id !== runnerRun.id) return;
        window.clearTimeout(runnerRun.timer);
        runnerRun = null;
        busy = false;
        setStatus(data.error ? "error" : "ready");
        const text = [data.output, data.error].filter(Boolean).join("\n");
        setConsole(text || "Kod xatosiz bajarildi, ammo konsolga hech narsa chiqmadi.", Boolean(data.error));
        if (timeEl) timeEl.textContent = `${Math.round(data.duration || 0)} ms`;
      };
      worker.onerror = () => {
        if (runnerRun) window.clearTimeout(runnerRun.timer);
        runnerRun = null;
        busy = false;
        setStatus("error");
        setConsole("Kodni bajarishda kutilmagan xato yuz berdi.", true);
      };
      try {
        worker.postMessage({ type: "run", id: id, code: codeEl.value });
      } catch (error) {
        busy = false;
        window.clearTimeout(timeout);
        runnerRun = null;
        setStatus("error");
        setConsole("Kodni yuborib bo'lmadi. Qayta urinib ko'ring.", true);
      }
    }

    function run() {
      if (!activeEntry) return;
      if (activeEntry.lang === "html" || activeEntry.lang === "css") runPreview(activeEntry);
      else runJs(activeEntry);
    }

    runButton?.addEventListener("click", run);
    copyButton?.addEventListener("click", async () => {
      const copied = await Noldan.copyText(codeEl.value);
      Noldan.toast(copied ? "Kod nusxalandi." : "Nusxalab bo'lmadi.", copied ? "success" : "error");
    });
    codeEl?.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        const start = codeEl.selectionStart;
        const end = codeEl.selectionEnd;
        codeEl.value = codeEl.value.slice(0, start) + "  " + codeEl.value.slice(end);
        codeEl.selectionStart = codeEl.selectionEnd = start + 2;
      }
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        run();
      }
    });
    runnerModal.addEventListener("click", (event) => {
      if (event.target.closest("[data-modal-close]")) {
        Noldan.closeModal(runnerModal);
        if (worker) {
          try {
            worker.terminate();
          } catch (error) {
            /* noop */
          }
          worker = null;
          busy = false;
          runnerRun = null;
        }
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && runnerModal.classList.contains("is-open")) {
        Noldan.closeModal(runnerModal);
      }
    });

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-run-code]");
      if (!trigger) return;
      const entry = codeStore.get(trigger.getAttribute("data-run-code"));
      if (entry) open(entry);
    });
  }

  /* ---------------------------------------------------------------------
     Navigation & events
     --------------------------------------------------------------------- */
  function parseHash(hash) {
    const match = /^#dars-(\d+)$/.exec(hash === undefined ? window.location.hash : hash);
    return match ? Number(match[1]) : null;
  }

  function scrollToLesson() {
    const header = document.querySelector(".site-header");
    const offset = (header ? header.offsetHeight : 76) + 18;
    const top = article.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(top, 0), behavior: reducedMotion ? "auto" : "smooth" });
  }

  function openSidebar() {
    document.body.classList.add("sidebar-open");
    const button = document.querySelector("[data-sidebar-open]");
    if (button) button.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    const button = document.querySelector("[data-sidebar-open]");
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function initNavigation() {
    window.addEventListener("hashchange", () => {
      const id = parseHash();
      if (!id || !byId.has(id)) return;
      if (id === currentId) {
        scrollToLesson();
        return;
      }
      renderLesson(id, { scroll: true });
    });
    lessonList.addEventListener("click", (event) => {
      const link = event.target.closest("[data-sidebar-lesson]");
      if (!link) return;
      closeSidebar();
      const id = Number(link.getAttribute("data-sidebar-lesson"));
      if (id === currentId) {
        event.preventDefault();
        scrollToLesson();
      }
    });
    const openButton = document.querySelector("[data-sidebar-open]");
    if (openButton) openButton.addEventListener("click", openSidebar);
    document.querySelectorAll("[data-sidebar-close]").forEach((node) => {
      node.addEventListener("click", closeSidebar);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeSidebar();
    });
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        searchQuery = searchInput.value;
        renderSidebar();
      });
    }
    document.addEventListener("click", (event) => {
      const cta = event.target.closest("[data-course-cta]");
      if (!cta) return;
      const target = parseHash(cta.getAttribute("href"));
      if (target && byId.has(target) && target === currentId) {
        event.preventDefault();
        scrollToLesson();
      }
    });
  }

  function initArticleEvents() {
    article.addEventListener("click", (event) => {
      if (event.target.closest("[data-toggle-complete]")) {
        toggleComplete();
        return;
      }
      const quizOption = event.target.closest("[data-quiz-option]");
      if (quizOption) {
        handleQuizOption(quizOption);
        return;
      }
      const quizReset = event.target.closest("[data-quiz-reset]");
      if (quizReset) {
        resetQuiz(quizReset.closest("[data-quiz-card]"));
        return;
      }
      const glossaryToggle = event.target.closest("[data-glossary-toggle]");
      if (glossaryToggle) {
        const panel = glossaryToggle.closest("[data-glossary]");
        const body = panel ? panel.querySelector(".code-gloss__body") : null;
        const willOpen = panel ? panel.classList.contains("is-collapsed") : false;
        if (panel) panel.classList.toggle("is-collapsed", !willOpen);
        if (body) body.hidden = !willOpen;
        glossaryToggle.setAttribute("aria-expanded", String(willOpen));
        return;
      }
      const copyButton = event.target.closest("[data-copy-code]");
      if (copyButton) {
        const entry = codeStore.get(copyButton.getAttribute("data-copy-code"));
        if (entry) {
          Noldan.copyText(entry.code).then((copied) => {
            Noldan.toast(copied ? "Kod nusxalandi." : "Nusxalab bo'lmadi.", copied ? "success" : "error");
          });
        }
        return;
      }
      const retry = event.target.closest("[data-exam-retry]");
      if (retry) {
        resetExam();
        return;
      }
      const restart = event.target.closest("[data-exam-restart]");
      if (restart) {
        if (restart.dataset.confirm !== "1") {
          restart.dataset.confirm = "1";
          restart.classList.add("is-confirming");
          restart.innerHTML = `${ICONS.refresh}<span>Aniq boshidan boshlaymizmi? Yana bosing</span>`;
          Noldan.toast("Yana bir marta bosing — kurs progressi tozalanadi.", "info");
          window.setTimeout(() => {
            if (!document.body.contains(restart)) return;
            delete restart.dataset.confirm;
            restart.classList.remove("is-confirming");
            restart.innerHTML = `${ICONS.refresh}<span>Kursni boshidan takrorlash</span>`;
          }, 6000);
          return;
        }
        restartCourse();
        return;
      }
      const next = event.target.closest("[data-complete-on-next]");
      if (next) {
        const lesson = byId.get(currentId);
        if (lesson && !lesson.isExam) {
          const completed = Noldan.completeLesson(lesson.id, courseId);
          if (completed) Noldan.toast("Dars tugatildi. Keyingi darsga o'tdingiz.", "success");
          renderSidebar();
          updateProgressUI();
        }
      }
    });
  }

  function initSidebarReset() {
    const button = document.querySelector("[data-course-reset]");
    if (!button) return;
    button.addEventListener("click", () => {
      if (button.dataset.confirm !== "1") {
        button.dataset.confirm = "1";
        button.classList.add("is-confirming");
        button.querySelector("span").textContent = "Aniq boshidan boshlaymizmi? Yana bosing";
        Noldan.toast("Yana bir marta bosing — barcha progress tozalanadi.", "info");
        window.setTimeout(() => {
          if (!document.body.contains(button)) return;
          delete button.dataset.confirm;
          button.classList.remove("is-confirming");
          button.querySelector("span").textContent = "Kursni boshidan boshlash";
        }, 6000);
        return;
      }
      restartCourse();
    });
  }

  function restartCourse() {
    Noldan.resetCourseProgress(courseId);
    Noldan.toast("Kurs boshidan boshlandi. Omad!", "success");
    if (window.location.hash === "#dars-1") renderLesson(1, { scroll: true });
    else window.location.hash = "#dars-1";
    const resetButton = document.querySelector("[data-course-reset]");
    if (resetButton) {
      delete resetButton.dataset.confirm;
      resetButton.classList.remove("is-confirming");
      const label = resetButton.querySelector("span");
      if (label) label.textContent = "Kursni boshidan boshlash";
    }
  }

  function initCourseChrome() {
    document.querySelector("[data-course-crumb]").textContent = course.title;
    document.querySelector("[data-course-logo]").className = `course-logo ${course.logoClass}`;
    document.querySelector("[data-course-logo]").textContent = course.logoText;
    document.querySelector("[data-course-title]").textContent = course.heroTitle;
    document.querySelector("[data-course-desc]").textContent = course.heroDesc;
    document.querySelector("[data-course-sidebar-title]").textContent = `${course.title} kursi`;
    document.querySelector("[data-course-meta]").innerHTML = [
      `<span class="badge">${TOTAL} dars</span>`,
      `<span class="badge badge--level">${course.level}</span>`,
      `<span class="badge">${course.hours}</span>`,
      `<span class="badge">${course.testCount} test + imtihon</span>`,
      `<span class="badge badge--lime">Sertifikat</span>`,
    ].join("");
    document.title = `${course.title} kursi — noldan amaliyotgacha | Noldan`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", course.metaDescription);
    const footerExam = document.querySelector("[data-footer-exam]");
    if (footerExam) footerExam.setAttribute("href", `#dars-${EXAM_ID}`);
    const footerModules = document.querySelector("[data-footer-modules]");
    if (footerModules) {
      footerModules.innerHTML = course.modules
        .map(
          (module) =>
            `<li><a href="#dars-${module.lessons[0]}">${esc(module.title)}</a></li>`
        )
        .join("");
    }
  }

  function init() {
    if (!article || !lessonList) return;
    initCourseChrome();
    initRunner();
    initNavigation();
    initArticleEvents();
    initSidebarReset();
    document.addEventListener("noldan:progress", () => {
      updateProgressUI();
      renderSidebar();
    });
    document.addEventListener("noldan:authchange", () => {
      const id = parseHash() || 1;
      renderLesson(byId.has(id) ? id : 1);
    });
    const id = parseHash();
    renderLesson(id && byId.has(id) ? id : 1);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
