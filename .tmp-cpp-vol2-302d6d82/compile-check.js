const path = require("path");

const file = process.argv[2] || "part-01.js";
const onlyLesson = process.argv[3] ? Number(process.argv[3]) : null;
const lessons = require(path.join(__dirname, file));
const jobs = [];
for (const lesson of lessons) {
  if (onlyLesson && lesson.id !== onlyLesson) continue;
  lesson.blocks.forEach((block, index) => {
    if (block.type === "code") {
      jobs.push({ lesson: lesson.id, index, title: block.title, code: block.code, expected: block.output });
    }
  });
}

const strip = (text) =>
  String(text || "")
    .replace(/\x1b\[[0-9;]*m/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+$/gm, "")
    .trim();

async function compile(job, attempt = 1) {
  const body = {
    source: job.code,
    options: {
      userArguments: "-std=c++20 -O0 -pthread",
      filters: { execute: true },
      executeParameters: { args: [], stdin: "" },
    },
  };
  try {
    const response = await fetch("https://godbolt.org/api/compiler/g132/compile", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();
    const buildErr = strip((json.stderr || []).map((item) => item.text).join("\n"));
    const exec = json.execResult || {};
    const stdout = strip((exec.stdout || []).map((item) => item.text).join("\n"));
    const execErr = strip((exec.stderr || []).map((item) => item.text).join("\n"));
    const compiled = json.code === 0 && exec.didExecute;
    const ok = compiled && stdout === strip(job.expected) && !execErr;
    return { ...job, ok, compiled, stdout, execErr, buildErr, timeout: json.timedOut };
  } catch (error) {
    if (attempt < 3) {
      await new Promise((resolve) => setTimeout(resolve, 1500 * attempt));
      return compile(job, attempt + 1);
    }
    return { ...job, ok: false, compiled: false, error: error.message };
  }
}

(async () => {
  const results = [];
  const queue = jobs.slice();
  const workers = Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const job = queue.shift();
      const result = await compile(job);
      results.push(result);
      const status = result.ok ? "OK  " : "FAIL";
      console.log(`${status} dars ${result.lesson} kod ${result.index + 1} (${result.title})`);
      if (!result.ok) {
        console.log("  kutilgan:", JSON.stringify(strip(result.expected)));
        console.log("  olingan :", JSON.stringify(result.stdout));
        if (result.execErr) console.log("  stderr  :", result.execErr.slice(0, 600));
        if (result.buildErr) console.log("  build   :", result.buildErr.slice(0, 1200));
        if (result.error) console.log("  error   :", result.error);
      }
    }
  });
  await Promise.all(workers);
  const failed = results.filter((result) => !result.ok).length;
  console.log(`\n${results.length - failed}/${results.length} kod bloki o'tdi.`);
  process.exit(failed ? 1 : 0);
})();
