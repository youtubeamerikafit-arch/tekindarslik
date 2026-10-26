const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const root = path.resolve(__dirname, "..");
const tcc = path.join(__dirname, "tcc", "tcc", "tcc.exe");
const runDir = path.join(__dirname, "run");
fs.mkdirSync(runDir, { recursive: true });

const partFiles = process.argv.slice(2);
if (!partFiles.length) {
  console.error("usage: node check.js partfile...");
  process.exit(1);
}

let lessons = [];
for (const file of partFiles) {
  const src = fs.readFileSync(path.join(__dirname, "parts", file), "utf8");
  const arr = new Function('"use strict"; return [' + src + "];")();
  lessons = lessons.concat(arr);
}

let total = 0;
let bad = 0;
for (const lesson of lessons) {
  for (let index = 0; index < lesson.blocks.length; index += 1) {
    const block = lesson.blocks[index];
    if (block.type !== "code") continue;
    total += 1;
    const base = `l${lesson.id}_${index + 1}`;
    const cfile = path.join(runDir, base + ".c");
    fs.writeFileSync(cfile, block.code);
    const run = cp.spawnSync(tcc, ["-run", cfile], {
      encoding: "utf8",
      timeout: 10000,
      cwd: runDir,
    });
    const out = (run.stdout || "").replace(/\r\n/g, "\n").replace(/\s+$/, "");
    const want = block.output.replace(/\r\n/g, "\n").replace(/\s+$/, "");
    if (run.status !== 0) {
      bad += 1;
      console.log(`RUN FAIL lesson ${lesson.id} ${block.title} status=${run.status}`);
      console.log((run.stderr || (run.error && run.error.message) || "").trim().split("\n").slice(0, 5).join("\n"));
    } else if (out !== want) {
      bad += 1;
      console.log(`OUTPUT MISMATCH lesson ${lesson.id} ${block.title}`);
      console.log("  want: " + JSON.stringify(want));
      console.log("  got : " + JSON.stringify(out));
    }
  }
}
console.log(`checked ${total} code blocks, ${bad} issues`);
process.exit(bad ? 1 : 0);
