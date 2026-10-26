const src = `#include <iostream>
int main() {
    std::cout << "hi " << (2 + 3) << "\\n";
}`;
(async () => {
  const r = await fetch("https://godbolt.org/api/compiler/g132/compile", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      source: src,
      options: {
        userArguments: "-std=c++20 -O0",
        filters: { execute: true },
        executeParameters: { args: [], stdin: "" },
      },
    }),
  });
  const j = await r.json();
  console.log("code", j.code, "timedOut", j.timedOut);
  console.log("stderr", (j.stderr || []).map((x) => x.text.replace(/\x1b\[[0-9;]*m/g, "")).join("\n"));
  console.log("exec", JSON.stringify(j.execResult && {
    code: j.execResult.code,
    didExecute: j.execResult.didExecute,
    stdout: j.execResult.stdout,
    stderr: j.execResult.stderr,
  }));
})();
