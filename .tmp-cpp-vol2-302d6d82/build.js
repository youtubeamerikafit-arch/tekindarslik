const fs = require("fs");
const path = require("path");

const dir = __dirname;
const lessons = [];
for (let i = 1; i <= 10; i += 1) {
  const part = require(path.join(dir, `part-${String(i).padStart(2, "0")}.js`));
  lessons.push(...part);
}

const examLesson = require(path.join(dir, "exam-lesson.js"));
const exam = require(path.join(dir, "exam-questions.js"));

const modules = [
  { title: "Shablonlar: umumiy kod", lessons: [50, 51, 52, 53, 54] },
  { title: "constexpr, concepts va ranges", lessons: [55, 56, 57, 58, 59] },
  { title: "Move, egalik va xotira", lessons: [60, 61, 62, 63, 64] },
  { title: "STL ichki tuzilishi va algoritmlar", lessons: [65, 66, 67, 68, 69] },
  { title: "Xatolar, ma'lumot va xavfsizlik", lessons: [70, 71, 72, 73, 74] },
  { title: "Parallelizm va korutinalar", lessons: [75, 76, 77, 78, 79] },
  { title: "Build, sifat va tarmoq", lessons: [80, 81, 82, 83, 84] },
  { title: "Arxitektura, naqshlar va o'yin loyihasi", lessons: [85, 86, 87, 88, 89] },
  { title: "Capstone: vazifa menejeri", lessons: [90, 91, 92, 93, 94] },
  { title: "Yakuniy takrorlash va interview", lessons: [95, 96, 97, 98, 99] },
  { title: "Yakuniy imtihon", lessons: [100] },
];

const clean = (value) => (typeof value === "string" ? value.trim() : value);
const normalised = lessons.map((lesson) => {
  const copy = JSON.parse(JSON.stringify(lesson));
  copy.blocks.forEach((block) => {
    if (block.code) block.code = clean(block.code);
    if (typeof block.output === "string") block.output = clean(block.output);
  });
  return copy;
});

const heroDesc =
  "C++ kursining ikkinchi jildi: 50 ta yangi ilg'or dars, 297 test va 12 savollik yakuniy imtihon. Shablonlar va metaprogrammalash, concepts va ranges, constexpr, move semantikasi va perfect forwarding, smart pointerlar, allokatorlar, STL ichki tuzilishi, exception safety, threadlar, atomics, futures, korutinalar, modules, filesystem, serialization, CMake/CTest, sanitizerlar, profiler, tarmoq, dizayn naqshlari va capstone loyiha.";
const metaDescription =
  "C++ ilg'or kursi (2-jild): 50 dars va 297 test. Shablonlar, concepts, ranges, move semantikasi, smart pointerlar, STL internals, concurrency, coroutines, CMake, sanitizers, profiling, networking va capstone loyiha — o'zbek tilida, aniq kod va natijalar bilan.";

const output = `/* Noldan — C++ course, 2-jild (50–100): 50 ta yangi dars + yakuniy imtihon */
(function () {
  "use strict";
  window.NOLDAN_COURSE_VOLUMES = window.NOLDAN_COURSE_VOLUMES || {};

  window.NOLDAN_COURSE_VOLUMES.cpp = {
    modules: ${JSON.stringify(modules, null, 2)},
    lessons: ${JSON.stringify(normalised, null, 2)},
    examLesson: ${JSON.stringify(examLesson, null, 2)},
    exam: ${JSON.stringify(exam, null, 2)},
    hours: "~40 soat",
    testCount: 297,
    heroDesc: ${JSON.stringify(heroDesc)},
    metaDescription: ${JSON.stringify(metaDescription)}
  };
})();
`;

const target = path.join(dir, "..", "assets", "js", "course-data-cpp-vol2.js");
fs.writeFileSync(target, output, "utf8");
console.log("yozildi:", target, (output.length / 1024).toFixed(1), "KB");
