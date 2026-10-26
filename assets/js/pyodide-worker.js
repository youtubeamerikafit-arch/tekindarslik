/* Pyodide worker: isolates user code and enforces a hard timeout from the page */
"use strict";

const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/";
let pyodide = null;
let initStarted = false;

function post(type, payload) {
  self.postMessage(Object.assign({ type }, payload || {}));
}

function cleanPythonError(raw) {
  let text = String(raw == null ? "" : raw);
  text = text.replace(/^PythonError:\s*/, "").replace(/\s+$/, "");
  const lines = text.split("\n");
  const filtered = lines.filter((line) => {
    if (/File "<exec>"/.test(line)) return false;
    if (/pyodide|_pyodide/i.test(line) && /File/.test(line)) return false;
    return true;
  });
  return filtered.join("\n");
}

async function initPyodide() {
  if (initStarted) return;
  initStarted = true;
  try {
    if (typeof self.loadPyodide !== "function") {
      throw new Error("Pyodide yuklanmadi");
    }
    pyodide = await self.loadPyodide({ indexURL: PYODIDE_CDN });
    post("ready");
  } catch (error) {
    post("init-error", {
      message: cleanPythonError(error && error.message ? error.message : error),
    });
  }
}

try {
  importScripts(PYODIDE_CDN + "pyodide.js");
  initPyodide();
} catch (error) {
  post("init-error", {
    message:
      "Python muhitini yuklab bo'lmadi. Internet aloqasini tekshiring va qayta urinib ko'ring.",
  });
}

const SETUP_CODE = `
import sys, io, builtins

class _NoldanCapture(io.StringIO):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit
        self.truncated = False

    def write(self, s):
        s = str(s)
        remaining = self.limit - self.tell()
        if remaining <= 0:
            self.truncated = True
            return len(s)
        chunk = s[:remaining]
        super().write(chunk)
        if len(chunk) < len(s):
            self.truncated = True
        return len(s)

__noldan_stdout = _NoldanCapture(20000)
__noldan_stderr = _NoldanCapture(12000)
sys.stdout = __noldan_stdout
sys.stderr = __noldan_stderr
__noldan_original_input = builtins.input
__noldan_inputs = iter(str(__noldan_stdin).splitlines())

def __noldan_input(prompt=""):
    sys.stdout.write(str(prompt))
    try:
        line = next(__noldan_inputs)
    except StopIteration:
        line = ""
    sys.stdout.write(line + "\\n")
    return line

builtins.input = __noldan_input
__noldan_ns = {"__name__": "__main__", "__builtins__": builtins}
del __noldan_stdin
`;

const RESTORE_CODE = `
import sys, builtins
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
builtins.input = __noldan_original_input
`;

self.onmessage = async (event) => {
  const data = event.data || {};
  if (data.type !== "run") return;

  const id = data.id;
  const code = String(data.code || "");
  const stdin = String(data.stdin || "");

  if (!pyodide) {
    post("result", {
      id,
      output: "",
      error: "Python muhiti hali yuklanmagan. Bir oz kutib, qayta urinib ko'ring.",
      duration: 0,
    });
    return;
  }

  const started = Date.now();
  let output = "";
  let errorText = "";
  let timedOutOutput = "";

  try {
    pyodide.globals.set("__noldan_stdin", stdin);
    pyodide.globals.set("__noldan_code", code);
    pyodide.runPython(SETUP_CODE);

    try {
      pyodide.runPython(
        'exec(compile(__noldan_code, "<noldan>", "exec"), __noldan_ns)'
      );
    } catch (runError) {
      errorText = cleanPythonError(
        runError && runError.message ? runError.message : runError
      );
    }

    try {
      output = String(
        pyodide.runPython(
          '__noldan_stdout.getvalue() + __noldan_stderr.getvalue()'
        )
      );
      const truncated = Boolean(
        pyodide.runPython(
          "__noldan_stdout.truncated or __noldan_stderr.truncated"
        )
      );
      if (truncated) {
        timedOutOutput =
          "\\n… Natija juda uzun bo'lgani uchun qisqartirildi (20 000 belgi).";
      }
    } catch (readError) {
      output = "";
    }

    try {
      pyodide.runPython(RESTORE_CODE);
    } catch (restoreError) {
      /* noop */
    }
  } catch (setupError) {
    errorText = cleanPythonError(
      setupError && setupError.message ? setupError.message : setupError
    );
    try {
      pyodide.runPython(RESTORE_CODE);
    } catch (restoreError) {
      /* noop */
    }
  }

  post("result", {
    id,
    output: output + timedOutOutput,
    error: errorText,
    duration: Date.now() - started,
  });
};
