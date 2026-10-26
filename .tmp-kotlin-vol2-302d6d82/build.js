/* Temporary build script for Kotlin course volume 2. Deleted after use. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const here = __dirname;
const root = path.join(here, "..");
const baseFile = path.join(root, "assets", "js", "course-data-kotlin.js");
const outFile = path.join(root, "assets", "js", "course-data-kotlin-vol2.js");
const allowedBlocks = new Set(["p", "h", "code", "ul", "ol", "note", "table"]);
const PARTIAL = process.env.PARTIAL === "1";

function parseQuiz(content, where) {
  const lines = content.filter((line) => line.trim() !== "");
  const options = [];
  let answer = null;
  let q = "";
  let inExplain = false;
  const explainLines = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (inExplain) {
      explainLines.push(line.replace(/^!\s*/, ""));
      continue;
    }
    if (line.startsWith("- ")) options.push(line.slice(2).trim());
    else if (line.startsWith("=")) answer = Number(line.slice(1).trim());
    else if (line.startsWith("!")) {
      inExplain = true;
      explainLines.push(line.slice(1).trim());
    } else if (!q) q = line;
    else q += " " + line;
  }
  const explain = explainLines.join(" ").trim();
  if (!q) throw new Error(where + ": savol matni yo'q");
  if (options.length !== 4) throw new Error(where + ": 4 variant emas (" + options.length + ")");
  if (options.some((option) => !option)) throw new Error(where + ": bo'sh variant");
  if (!Number.isInteger(answer) || answer < 0 || answer > 3) throw new Error(where + ": javob indeksi noto'g'ri");
  if (!explain) throw new Error(where + ": izoh yo'q");
  return { q, options, answer, explain };
}

function parseKdsl(file) {
  const text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const lines = text.split("\n");
  const lessons = [];
  let lesson = null;
  let section = null;

  const pushBlock = () => {
    if (!section || !lesson) return;
    const content = section.lines.slice();
    while (content.length && content[0].trim() === "") content.shift();
    while (content.length && content[content.length - 1].trim() === "") content.pop();
    if (section.kind === "code") {
      if (!section.title) throw new Error(`dars ${lesson.id}: kod sarlavhasi yo'q`);
      const code = content.join("\n");
      if (!code.trim()) throw new Error(`dars ${lesson.id}: kod bo'sh`);
      lesson.blocks.push({ type: "code", title: section.title, code, output: "" });
    } else if (section.kind === "out") {
      const last = lesson.blocks[lesson.blocks.length - 1];
      if (!last || last.type !== "code") throw new Error(`dars ${lesson.id}: chiqish kod blokidan keyin emas`);
      last.output = content.join("\n");
    } else if (section.kind === "p") {
      lesson.blocks.push({ type: "p", html: content.join(" ").trim() });
    } else if (section.kind === "ul" || section.kind === "ol") {
      const items = content
        .filter((line) => line.trim() !== "")
        .map((line) => line.trim().replace(/^(\d+[.)]|-)\s+/, ""));
      lesson.blocks.push({ type: section.kind, items });
    } else if (section.kind === "note") {
      const parts = section.arg.split("|");
      const variant = (parts.shift() || "info").trim();
      const title = parts.join("|").trim();
      lesson.blocks.push({ type: "note", variant, title, html: content.join(" ").trim() });
    } else if (section.kind === "table") {
      const rows = content
        .filter((line) => line.trim() !== "")
        .map((line) => line.split(" | ").map((cell) => cell.trim()));
      const head = rows.shift() || [];
      lesson.blocks.push({ type: "table", head, rows });
    } else if (section.kind === "quiz") {
      lesson.quiz.push(parseQuiz(content, `dars ${lesson.id} savol ${lesson.quiz.length + 1}`));
    } else {
      throw new Error(`dars ${lesson.id}: noma'lum bo'lim ${section.kind}`);
    }
    section = null;
  };

  const finishLesson = () => {
    pushBlock();
    if (lesson) {
      if (!lesson.title) throw new Error(`dars ${lesson.id}: sarlavha yo'q`);
      if (!Number.isFinite(lesson.minutes)) throw new Error(`dars ${lesson.id}: daqiqa yo'q`);
      lessons.push(lesson);
      lesson = null;
    }
  };

  for (const raw of lines) {
    if (raw.startsWith("@@")) {
      const rest = raw.slice(2).trim();
      const space = rest.indexOf(" ");
      const kind = (space === -1 ? rest : rest.slice(0, space)).trim();
      const arg = space === -1 ? "" : rest.slice(space + 1).trim();

      if (kind === "lesson") {
        finishLesson();
        lesson = { id: Number(arg), title: "", minutes: 0, blocks: [], quiz: [] };
        continue;
      }
      if (!lesson) throw new Error(`${path.basename(file)}: lesson'dan tashqarida @@${kind}`);
      if (kind === "title") { pushBlock(); lesson.title = arg; continue; }
      if (kind === "minutes") { pushBlock(); lesson.minutes = Number(arg); continue; }
      if (kind === "isExam") { pushBlock(); lesson.isExam = true; continue; }
      pushBlock();
      section = { kind, arg, title: kind === "code" ? arg : "", lines: [] };
      continue;
    }
    if (section) section.lines.push(raw);
    else if (raw.trim() !== "") throw new Error(`${path.basename(file)}: bo'limdan tashqarida matn: ${raw.slice(0, 40)}`);
  }
  finishLesson();
  return lessons;
}

function parseExam(file) {
  const lines = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n").split("\n");
  const questions = [];
  let content = null;
  const flush = () => {
    if (content) questions.push(parseQuiz(content, `imtihon savol ${questions.length + 1}`));
    content = null;
  };
  for (const raw of lines) {
    if (raw.startsWith("@@quiz")) {
      flush();
      content = [];
    } else if (content) content.push(raw);
    else if (raw.trim() !== "") throw new Error("exam.kdsl: @@quizdan tashqarida matn");
  }
  flush();
  return questions;
}

const partFiles = fs
  .readdirSync(here)
  .filter((name) => /^part-\d+\.kdsl$/.test(name))
  .sort((a, b) => Number(a.match(/^part-(\d+)/)[1]) - Number(b.match(/^part-(\d+)/)[1]));

if (!partFiles.length) throw new Error("KDSL qismlari topilmadi");
const lessons = [];
for (const file of partFiles) lessons.push(...parseKdsl(path.join(here, file)));

const ids = lessons.map((lesson) => lesson.id);
const expectedIds = Array.from({ length: 50 }, (_, index) => index + 50);
if (!PARTIAL && JSON.stringify(ids) !== JSON.stringify(expectedIds)) {
  throw new Error("Dars idlari 50..99 bo'lishi kerak. Topildi: " + ids.join(","));
}

const errors = [];
const titles = new Set();
lessons.forEach((lesson) => {
  if (titles.has(lesson.title)) errors.push(`takroriy sarlavha: ${lesson.title}`);
  titles.add(lesson.title);
  if (lesson.blocks.length < 5 || lesson.blocks.length > 7) errors.push(`dars ${lesson.id}: bloklar ${lesson.blocks.length}`);
  const codeBlocks = lesson.blocks.filter((block) => block.type === "code");
  if (codeBlocks.length < 2) errors.push(`dars ${lesson.id}: kod bloklari ${codeBlocks.length}`);
  codeBlocks.forEach((block, index) => {
    if (!block.title || !block.title.trim()) errors.push(`dars ${lesson.id}/${index + 1}: kod sarlavhasi yo'q`);
    if (!block.code.trim()) errors.push(`dars ${lesson.id}/${index + 1}: kod bo'sh`);
    if (!block.output.trim()) errors.push(`dars ${lesson.id}/${index + 1}: chiqish bo'sh`);
  });
  lesson.blocks.forEach((block, index) => {
    if (!allowedBlocks.has(block.type)) errors.push(`dars ${lesson.id}/${index + 1}: tur ${block.type}`);
    if (block.type === "code" && block.output.stdout) errors.push(`dars ${lesson.id}: output obyekt`);
  });
  if (lesson.minutes < 12 || lesson.minutes > 18) errors.push(`dars ${lesson.id}: daqiqa ${lesson.minutes}`);
  if (lesson.quiz.length !== 3) errors.push(`dars ${lesson.id}: quiz ${lesson.quiz.length}`);
});
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

// Base savollarini o'qib, takrorlanishni tekshiramiz.
const baseCode = fs.readFileSync(baseFile, "utf8");
const sandbox = { window: {} };
vm.runInNewContext(baseCode, sandbox, { filename: "course-data-kotlin.js" });
const baseCourse = sandbox.window.NOLDAN_COURSES.kotlin;
const baseQuestions = [
  ...baseCourse.lessons.flatMap((lesson) => (lesson.quiz || []).map((quiz) => quiz.q)),
  ...baseCourse.exam.questions.map((quiz) => quiz.q),
];
const normalize = (text) => text.toLowerCase().replace(/[\s“”"'`‘’]+/g, " ").replace(/[?!.,:;]+/g, "").trim();
const baseSet = new Set(baseQuestions.map(normalize));

const examFile = path.join(here, "exam.kdsl");
const examQuestions = fs.existsSync(examFile) ? parseExam(examFile) : [];
if (!PARTIAL && examQuestions.length !== 12) throw new Error("Imtihon savollari: " + examQuestions.length);

const allQuestionTexts = [];
lessons.forEach((lesson) => lesson.quiz.forEach((quiz) => allQuestionTexts.push(quiz.q)));
examQuestions.forEach((quiz) => allQuestionTexts.push(quiz.q));
const normalizedAll = allQuestionTexts.map(normalize);
if (new Set(normalizedAll).size !== normalizedAll.length) {
  const seen = new Set();
  normalizedAll.forEach((text, index) => {
    if (seen.has(text)) console.error("TAKRORIY SAVOL: " + allQuestionTexts[index]);
    seen.add(text);
  });
  throw new Error("2-jild ichida takroriy savollar bor");
}
allQuestionTexts.forEach((text) => {
  if (baseSet.has(normalize(text))) console.error("BAZA BILAN TAKROR: " + text);
});
if (allQuestionTexts.some((text) => baseSet.has(normalize(text)))) {
  throw new Error("Baza savollari bilan takrorlanish bor");
}

// Javob o'rinlarini dars bo'ylab almashtiramiz: 0..3 teng qatnashadi.
const answerPatterns = [
  [0, 2, 1],
  [1, 3, 0],
  [2, 0, 3],
  [3, 1, 2],
  [0, 3, 2],
  [2, 1, 3],
  [3, 0, 1],
  [1, 2, 0],
];
lessons.forEach((lesson, lessonIndex) => {
  const pattern = answerPatterns[lessonIndex % answerPatterns.length];
  lesson.quiz.forEach((quiz, quizIndex) => {
    const target = pattern[quizIndex];
    if (quiz.answer === target) return;
    const correct = quiz.options.splice(quiz.answer, 1)[0];
    quiz.options.splice(target, 0, correct);
    quiz.answer = target;
  });
});
// Imtihonda ham javoblar tarqoq bo'lsin.
[3, 2, 0, 1, 3, 0, 2, 1, 0, 3, 1, 2].forEach((target, index) => {
  const quiz = examQuestions[index];
  if (!quiz || quiz.answer === target) return;
  const correct = quiz.options.splice(quiz.answer, 1)[0];
  quiz.options.splice(target, 0, correct);
  quiz.answer = target;
});

const modules = [
  { title: "Inline, value class va tip tizimi", lessons: [50, 51, 52, 53, 54] },
  { title: "Generics, variance va delegatsiya", lessons: [55, 56, 57, 58, 59] },
  { title: "Reflection, DSL va metaprogramma", lessons: [60, 61, 62, 63, 64] },
  { title: "Coroutines va Flow chuqur", lessons: [65, 66, 67, 68, 69] },
  { title: "Ktor, serialization va ma'lumotlar bazasi", lessons: [70, 71, 72, 73, 74] },
  { title: "Android va Jetpack Compose chuqur", lessons: [75, 76, 77, 78, 79] },
  { title: "Multiplatform, performance va Gradle", lessons: [80, 81, 82, 83, 84] },
  { title: "Arxitektura va dizayn patternlar", lessons: [85, 86, 87, 88, 89] },
  { title: "Amaliy loyiha: Ktor + Android", lessons: [90, 91, 92, 93, 94] },
  { title: "Takrorlash, intervyu va keyingi qadamlar", lessons: [95, 96, 97, 98, 99] },
  { title: "Yakuniy imtihon", lessons: [100] },
];
const moduleIds = modules.flatMap((module) => module.lessons);
const expectedModuleIds = Array.from({ length: 51 }, (_, index) => index + 50);
if (!PARTIAL && JSON.stringify(moduleIds) !== JSON.stringify(expectedModuleIds)) {
  throw new Error("Modullar qamrovi noto'g'ri: " + moduleIds.join(","));
}
if (modules.length < 8 || modules.length > 11) throw new Error("Modullar soni: " + modules.length);
const lastModule = modules[modules.length - 1];
if (lastModule.title !== "Yakuniy imtihon" || JSON.stringify(lastModule.lessons) !== "[100]") {
  throw new Error("Oxirgi modul yakuniy imtihon bo'lishi kerak");
}

const examLesson = {
  id: 100,
  title: "Yakuniy imtihon",
  minutes: 25,
  blocks: [
    {
      type: "p",
      html: "Kotlin kursining yakuniy imtihoni. 12 ta savol butun yo'lni qamrab oladi: til asoslari va null xavfsizlik, OOP va sealed ierarxiyalar, generics va variance, delegatsiya, inline va value class, contracts, coroutines va Flow, Ktor, serialization, Exposed, Jetpack Compose, KMP hamda arxitektura qarorlari.",
    },
    {
      type: "ul",
      items: [
        "<strong>12 ta savol</strong>, har birida bitta to'g'ri javob.",
        "O'tish uchun kamida <strong>9 ta</strong> to'g'ri javob kerak (75%).",
        "Savollar 1–99-darslar bo'yicha, jumladan 2-jildning ilg'or mavzulari bo'yicha.",
        "Har bir javobdan keyin izoh ko'rsatiladi; imtihonni qayta topshirish mumkin.",
        "O'tgandan so'ng sertifikat yuklab olinadi.",
      ],
    },
    {
      type: "p",
      html: "Avval kod misollarini mustaqil yozib ko'ring: inline funksiyada non-local return, <code>out</code>/<code>in</code> variance, <code>by</code> delegatsiyasi, <code>stateIn</code> bilan Flow, Ktor client sozlamalari va Exposed tranzaksiyasi. Har bir noto'g'ri javobdan keyin tegishli darsga qaytib, mavzuni amalda mustahkamlang.",
    },
    {
      type: "note",
      variant: "tip",
      title: "Imtihon strategiyasi",
      html: "Savolni oxirigacha o'qing va barcha variantlarni solishtiring. Xato qilishdan qo'rqmasdan javob bering: izoh sizga aniq mavzuni ko'rsatadi. Vaqt yetmasa, avval o'zingiz ishonchli bilgan savollarni belgilang.",
    },
  ],
  quiz: [],
  isExam: true,
};

const course = {
  modules,
  lessons,
  examLesson,
  exam: { passScore: 9, total: 12, questions: examQuestions },
  hours: "~40 soat",
  testCount: 297,
  heroDesc:
    "Kotlin kursining 2-jildi: 50 ta ilg'or dars, 150 test va 12 savollik imtihon. Inline va value class, variance, delegatsiya, contracts, reflection, DSL, Flow va kanallar, Ktor, Exposed, Jetpack Compose, KMP, performance, Gradle, patternlar va Ktor + Android loyihasi.",
  metaDescription:
    "Kotlin 2-jild: 100 darslik to'liq kurs. Inline, value class, generics, variance, delegatsiya, contracts, reflection, DSL, coroutines, Flow, Ktor, serialization, Exposed, Jetpack Compose, Room, KMP, performance va amaliy loyiha — O'zbek tilida.",
};

// Yakuniy tekshiruvlar
if (!PARTIAL && lessons.length !== 50) throw new Error("Darslar soni: " + lessons.length);
if (lessons.some((lesson) => lesson.isExam)) throw new Error("O'quv darslari orasida isExam bor");
if (!PARTIAL && course.testCount !== 99 * 3) throw new Error("testCount noto'g'ri");
if (!PARTIAL && new Set(examQuestions.map((quiz) => quiz.q)).size !== 12) throw new Error("Imtihonda takror bor");
if (examQuestions.some((quiz) => !quiz.explain)) throw new Error("Imtihon izohi yo'q");

const json = JSON.stringify(course, null, 1);
const output =
  "/* Noldan — Kotlin course, 2-jild (100 dars: 99 dars + yakuniy imtihon) */\n" +
  "(function () {\n" +
  '  "use strict";\n' +
  "  window.NOLDAN_COURSE_VOLUMES = window.NOLDAN_COURSE_VOLUMES || {};\n" +
  "  window.NOLDAN_COURSE_VOLUMES.kotlin = " +
  json +
  ";\n" +
  "})();\n";

fs.writeFileSync(outFile, output, "utf8");
const bytes = Buffer.byteLength(output, "utf8");
console.log(`Yozildi: ${outFile}`);
console.log(`Darslar: ${lessons.length}, testlar: ${lessons.length * 3}, imtihon: ${examQuestions.length}`);
console.log(`Hajm: ${(bytes / 1024).toFixed(1)} KB`);
if (!PARTIAL && (bytes < 160 * 1024 || bytes > 230 * 1024)) {
  console.error(`OGOHLANTIRISH: hajm ${(bytes / 1024).toFixed(1)} KB, maqsad 160–230 KB`);
  process.exitCode = 2;
}
