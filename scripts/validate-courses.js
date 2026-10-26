/* Noldan course-data validator: node scripts/validate-courses.js [--expect 50] [id...] */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const jsDir = path.join(root, "assets", "js");
const args = process.argv.slice(2);
let expected = 50;
const only = [];
for (let i = 0; i < args.length; i += 1) {
  if (args[i] === "--expect") {
    expected = Number(args[i + 1]);
    i += 1;
  } else {
    only.push(args[i]);
  }
}

const allowedBlocks = new Set(["p", "h", "code", "ul", "ol", "note", "table"]);
const files = fs
  .readdirSync(jsDir)
  .filter((name) => /^course-data-[\w-]+\.js$/.test(name))
  .sort();

function mergeVolume(base, volume) {
  if (!volume || !Array.isArray(volume.lessons)) return base;
  const baseExam = (base.lessons || []).find((lesson) => lesson.isExam);
  const baseExamId = baseExam ? baseExam.id : null;
  const learning = (base.lessons || []).filter((lesson) => !lesson.isExam);
  const modules = (base.modules || []).filter(
    (module) => !(module.lessons || []).includes(baseExamId)
  );
  const examLesson = volume.examLesson || baseExam;
  return Object.assign({}, base, {
    modules: modules.concat(volume.modules || []),
    lessons: learning.concat(volume.lessons, examLesson ? [examLesson] : []),
    exam: volume.exam || base.exam,
    hours: volume.hours || base.hours,
    testCount: volume.testCount || base.testCount,
  });
}

let failed = 0;
let passed = 0;

for (const file of files) {
  const idFromName = file.replace(/^course-data-/, "").replace(/\.js$/, "");
  const idFromContent = (() => {
    const match = fs.readFileSync(path.join(jsDir, file), "utf8").match(/NOLDAN_COURSES\.([\w-]+)\s*=/);
    return match ? match[1] : null;
  })();
  const courseId = idFromContent || idFromName;
  if (only.length && !only.includes(courseId) && !only.includes(idFromName)) continue;

  const errors = [];
  const add = (message) => errors.push(message);

  let course;
  try {
    const code = fs.readFileSync(path.join(jsDir, file), "utf8");
    new vm.Script(code, { filename: file });
    const sandbox = { window: {} };
    vm.runInNewContext(code, sandbox, { filename: file });
    const registry = sandbox.window.NOLDAN_COURSES || {};
    course = registry[courseId] || Object.values(registry)[0];
    if (!course) add("course registry topilmadi");

    const volumeFile = path.join(jsDir, `course-data-${idFromName}-vol2.js`);
    const volumeNeeded = expected > (course ? course.lessons.length : 0);
    if (volumeNeeded && fs.existsSync(volumeFile)) {
      const volumeCode = fs.readFileSync(volumeFile, "utf8");
      new vm.Script(volumeCode, { filename: volumeFile });
      vm.runInNewContext(volumeCode, sandbox, { filename: volumeFile });
      const volumes = sandbox.window.NOLDAN_COURSE_VOLUMES || {};
      const volume = volumes[courseId] || Object.values(volumes)[0];
      if (!volume) add("vol2 registry topilmadi");
      else course = mergeVolume(course, volume);
    } else if (volumeNeeded) {
      add(`vol2 fayl topilmadi: ${path.basename(volumeFile)}`);
    }
  } catch (error) {
    add(`sintaksis/xato: ${error.message}`);
  }

  if (course) {
    const { lessons = [], modules = [], exam = {} } = course;
    if (course.id !== courseId) add(`id "${course.id}" fayl nomiga mos emas (${courseId})`);
    if (lessons.length !== expected) add(`darslar soni ${lessons.length}, kutilgan ${expected}`);

    const ids = lessons.map((lesson) => lesson.id);
    const expectedIds = Array.from({ length: expected }, (_, index) => index + 1);
    if (JSON.stringify(ids) !== JSON.stringify(expectedIds)) add(`id ketma-ketligi noto'g'ri: ${ids.join(",")}`);

    const exams = lessons.filter((lesson) => lesson.isExam);
    if (exams.length !== 1) add(`imtihon darslari soni ${exams.length}, kutilgan 1`);
    if (exams.length === 1 && exams[0].id !== expected) add(`imtihon id ${exams[0].id}, oxirgi id ${expected} bo'lishi kerak`);

    const learning = lessons.filter((lesson) => !lesson.isExam);
    if (learning.length !== expected - 1) add(`o'quv darslari ${learning.length}, kutilgan ${expected - 1}`);

    learning.forEach((lesson) => {
      if (!Array.isArray(lesson.quiz) || lesson.quiz.length !== 3) {
        add(`dars ${lesson.id}: testlar soni ${lesson.quiz ? lesson.quiz.length : 0}, kutilgan 3`);
      }
      (lesson.quiz || []).forEach((quiz, index) => {
        if (!Array.isArray(quiz.options) || quiz.options.length !== 4) add(`dars ${lesson.id}, savol ${index + 1}: 4 variant emas`);
        if (!Number.isInteger(quiz.answer) || quiz.answer < 0 || quiz.answer > 3) add(`dars ${lesson.id}, savol ${index + 1}: javob indeksi noto'g'ri`);
        if (!quiz.explain || !quiz.explain.trim()) add(`dars ${lesson.id}, savol ${index + 1}: izoh yo'q`);
        if (!quiz.q || !quiz.q.trim()) add(`dars ${lesson.id}, savol ${index + 1}: savol matni yo'q`);
      });
      const codeBlocks = (lesson.blocks || []).filter((block) => block.type === "code");
      if (codeBlocks.length < 2) add(`dars ${lesson.id}: kod bloklari ${codeBlocks.length}, kamida 2 kerak`);
      codeBlocks.forEach((block, index) => {
        if (!block.code || !block.code.trim()) add(`dars ${lesson.id}, kod ${index + 1}: bo'sh`);
        if (typeof block.output !== "string" || !block.output.trim()) add(`dars ${lesson.id}, kod ${index + 1}: chiqish natijasi yo'q`);
      });
      (lesson.blocks || []).forEach((block, index) => {
        if (!allowedBlocks.has(block.type)) add(`dars ${lesson.id}, blok ${index + 1}: ruxsat etilmagan tur "${block.type}"`);
      });
      if (!lesson.title || !lesson.title.trim()) add(`dars ${lesson.id}: sarlavha yo'q`);
      if (!Number.isFinite(lesson.minutes) || lesson.minutes <= 0) add(`dars ${lesson.id}: daqiqa noto'g'ri`);
    });

    if (exams.length === 1) {
      const examLesson = exams[0];
      if (examLesson.quiz && examLesson.quiz.length) add("imtihon darsida quiz bo'sh bo'lishi kerak");
      if (!examLesson.blocks || !examLesson.blocks.length) add("imtihon darsida bloklar yo'q");
    }

    if (exam.total !== 12) add(`exam.total ${exam.total}, kutilgan 12`);
    if (exam.passScore !== 9) add(`exam.passScore ${exam.passScore}, kutilgan 9`);
    if (!Array.isArray(exam.questions) || exam.questions.length !== 12) add(`exam savollari ${exam.questions ? exam.questions.length : 0}, kutilgan 12`);
    (exam.questions || []).forEach((quiz, index) => {
      if (!Array.isArray(quiz.options) || quiz.options.length !== 4) add(`imtihon savoli ${index + 1}: 4 variant emas`);
      if (!Number.isInteger(quiz.answer) || quiz.answer < 0 || quiz.answer > 3) add(`imtihon savoli ${index + 1}: javob indeksi noto'g'ri`);
    });
    if (exam.questions && new Set(exam.questions.map((quiz) => quiz.q)).size !== exam.questions.length) add("imtihonda takroriy savollar bor");

    const allQuizTexts = [
      ...learning.flatMap((lesson) => (lesson.quiz || []).map((quiz) => quiz.q)),
      ...(exam.questions || []).map((quiz) => quiz.q),
    ];
    if (new Set(allQuizTexts).size !== allQuizTexts.length) add("takroriy test savollari bor");

    const moduleIds = modules.flatMap((module) => module.lessons || []);
    const moduleSet = new Set(moduleIds);
    if (moduleIds.length !== expected || moduleSet.size !== expected) add(`modullar qamrovi ${moduleIds.length}/${moduleSet.size}, kutilgan ${expected} unikal id`);
    expectedIds.forEach((id) => {
      if (!moduleSet.has(id)) add(`dars ${id} hech qanday modulda yo'q`);
    });
    modules.forEach((module) => {
      if (!module.title || !module.title.trim()) add("modul sarlavhasi bo'sh");
    });

    if (!course.title || !course.lang || !course.logoClass || !course.logoText) add("meta maydonlar to‘liq emas");
    if (!course.exam || typeof course.exam !== "object") add("exam obyekti yo‘q");
    if (course.interactive !== "none") add(`interactive "${course.interactive}", kutilgan "none"`);
    const expectedTestCount = (expected - 1) * 3;
    if (course.testCount !== expectedTestCount) add(`testCount ${course.testCount}, kutilgan ${expectedTestCount}`);
  }

  if (errors.length) {
    failed += 1;
    console.log(`FAIL ${courseId} (${file})`);
    errors.slice(0, 14).forEach((message) => console.log(`  - ${message}`));
    if (errors.length > 14) console.log(`  ... yana ${errors.length - 14} xato`);
  } else {
    passed += 1;
    console.log(`OK ${courseId}: ${expected} dars, ${(expected - 1) * 3} test + 12 imtihon`);
  }
}

console.log(`\nNatija: ${passed} ta kurs o'tdi, ${failed} ta kurs xato.`);
process.exit(failed ? 1 : 0);
