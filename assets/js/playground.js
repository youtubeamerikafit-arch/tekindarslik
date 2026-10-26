/* Noldan — playground: snippets, line numbers and in-browser Python execution */
(function () {
  "use strict";

  const Noldan = window.Noldan;
  const codeEl = document.querySelector("[data-play-code]");
  if (!codeEl) return;

  const stdinEl = document.querySelector("[data-play-stdin]");
  const stdinDetails = document.querySelector(".playground-stdin");
  const gutter = document.querySelector("[data-gutter]");
  const runButton = document.querySelector("[data-play-run]");
  const runLabel = document.querySelector("[data-play-run-label]");
  const clearButton = document.querySelector("[data-play-clear]");
  const snippetSelect = document.querySelector("[data-snippet-select]");
  const consoleEl = document.querySelector("[data-play-console]");
  const badgeEl = document.querySelector("[data-console-badge]");
  const dotEl = document.querySelector("[data-play-dot]");
  const statusEl = document.querySelector("[data-play-status]");

  const CONSOLE_PLACEHOLDER =
    '<span class="console-muted">Kodni ishga tushirish uchun yuqoridagi «Ishga tushirish» tugmasini bosing. Natija shu yerda ko\'rinadi.</span>';

  const SNIPPETS = {
    salom: {
      code: `# Birinchi Python dasturingiz
print("Salom, dunyo!")
print("Men Python o'rganyapman.")

ism = "Noldan"
print(f"Salom, {ism}!")

for qadam in range(1, 4):
    print("Qadam:", qadam)`,
      stdin: "",
    },
    input: {
      code: `# input() foydalanuvchidan ma'lumot oladi
ism = input("Ismingiz nima? ")
yosh = input("Yoshingiz nechada? ")

print(f"Salom, {ism}!")
keyingi_yosh = int(yosh) + 1
print(f"Keyingi yilda siz {keyingi_yosh} yoshga to'lasiz.")`,
      stdin: "Dilnoza\n14",
    },
    kalkulyator: {
      code: `# Ikkita son bilan oddiy kalkulyator
a = float(input("Birinchi son: "))
b = float(input("Ikkinchi son: "))

print("Qo'shish:", a + b)
print("Ayirish:", a - b)
print("Ko'paytirish:", a * b)

if b != 0:
    print("Bo'lish:", a / b)
else:
    print("Nolga bo'lib bo'lmaydi.")`,
      stdin: "12\n4",
    },
    fizzbuzz: {
      code: `# 1 dan 15 gacha FizzBuzz
for son in range(1, 16):
    if son % 15 == 0:
        print("FizzBuzz")
    elif son % 3 == 0:
        print("Fizz")
    elif son % 5 == 0:
        print("Buzz")
    else:
        print(son)`,
      stdin: "",
    },
    royxat: {
      code: `# Ro'yxatlar bilan ishlash
mevalar = ["olma", "banan", "uzum", "anor"]

print("Ro'yxat:", mevalar)
print("Birinchi meva:", mevalar[0])
print("Jami meva:", len(mevalar))

mevalar.append("shaftoli")
print("Yangi ro'yxat:", mevalar)

for meva in mevalar:
    print("-", meva.title())`,
      stdin: "",
    },
    yulduz: {
      code: `# Yulduzchalar — tsikllar amaliyoti
qatorlar = 5

for i in range(1, qatorlar + 1):
    print("*" * i)

print()

for i in range(qatorlar, 0, -1):
    print("*" * i)`,
      stdin: "",
    },
  };

  let busy = false;

  function setGutter() {
    if (!gutter) return;
    const lines = codeEl.value.split("\n").length;
    gutter.textContent = Array.from({ length: lines }, (_, index) => index + 1).join("\n");
    gutter.scrollTop = codeEl.scrollTop;
  }

  function setDot(state) {
    if (!dotEl) return;
    dotEl.className = "status-dot" + (state ? ` is-${state}` : "");
  }

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }

  function setBadge(text, variant) {
    if (!badgeEl) return;
    const modifier =
      variant === "success" ? "badge--lime" : variant === "error" ? "badge--error" : "badge--muted";
    badgeEl.className = `badge ${modifier}`;
    badgeEl.textContent = text;
  }

  function setConsoleText(text, isError) {
    if (!consoleEl) return;
    consoleEl.classList.toggle("is-error", Boolean(isError));
    consoleEl.textContent = text;
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  function resetConsole() {
    if (!consoleEl) return;
    consoleEl.classList.remove("is-error");
    consoleEl.innerHTML = CONSOLE_PLACEHOLDER;
    consoleEl.scrollTop = 0;
  }

  function setRunLabel(text) {
    if (runLabel) runLabel.textContent = text;
  }

  function setBusy(isBusy) {
    busy = isBusy;
    if (runButton) runButton.disabled = isBusy;
    if (snippetSelect) snippetSelect.disabled = isBusy;
    codeEl.readOnly = isBusy;
    if (stdinEl) stdinEl.readOnly = isBusy;
    codeEl.setAttribute("aria-busy", isBusy ? "true" : "false");
  }

  function loadSnippet(key, options) {
    const snippet = SNIPPETS[key];
    if (!snippet || busy) return;
    codeEl.value = snippet.code;
    if (stdinEl) stdinEl.value = snippet.stdin;
    if (stdinDetails) stdinDetails.open = Boolean(snippet.stdin);
    if (snippetSelect) snippetSelect.value = key;
    setGutter();
    resetConsole();
    setBadge("Kutilmoqda", "muted");
    setDot("");
    setStatus("Ishga tayyor");
    setRunLabel("Ishga tushirish");
    if (!options || options.focus !== false) {
      codeEl.focus();
      codeEl.setSelectionRange(0, 0);
      codeEl.scrollTop = 0;
      if (gutter) gutter.scrollTop = 0;
    }
  }

  function friendlyError(message) {
    if (/EOFError/.test(message)) {
      return (
        message +
        "\n\nMaslahat: kod input() orqali ma'lumot kutmoqda. «Kirish ma'lumotlari» bo'limini ochib, har bir qiymatni alohida qatorga yozing."
      );
    }
    return message;
  }

  async function runCode() {
    if (busy) return;
    const code = codeEl.value;
    if (!code.trim()) {
      setConsoleText("Avval kod yozing.", true);
      setBadge("Xato", "error");
      setDot("is-error");
      setStatus("Kod bo'sh");
      return;
    }
    if (!window.PythonRunner) {
      setConsoleText(
        "Python muhiti yuklanmagan. Sahifani yangilab, qayta urinib ko'ring.",
        true
      );
      setBadge("Xato", "error");
      setDot("is-error");
      setStatus("Muhit topilmadi");
      return;
    }

    if (stdinDetails && /\binput\s*\(/.test(code) && !(stdinEl && stdinEl.value.trim())) {
      stdinDetails.open = true;
    }

    setBusy(true);
    setRunLabel("Yuklanmoqda...");
    setBadge("Yuklanmoqda", "muted");
    setDot("is-busy");
    setStatus("Muhit yuklanmoqda...");
    setConsoleText(
      "Python muhiti tayyorlanmoqda... Birinchi ishga tushirishda bu bir necha soniya oladi.",
      false
    );

    try {
      const result = await window.PythonRunner.run(code, stdinEl ? stdinEl.value : "", (state) => {
        if (state === "running") {
          setRunLabel("Bajarilmoqda...");
          setBadge("Bajarilmoqda", "muted");
          setDot("is-busy");
          setStatus("Kod bajarilmoqda...");
          setConsoleText("Kod bajarilmoqda...", false);
        } else {
          setRunLabel("Yuklanmoqda...");
          setStatus("Muhit yuklanmoqda...");
        }
      });

      const output = String(result.output || "").replace(/\s+$/, "");
      const error = String(result.error || "").trim();
      const duration = result.duration ? `${result.duration} ms` : "";

      if (error) {
        const merged = friendlyError([output, error].filter(Boolean).join("\n\n"));
        setConsoleText(merged, true);
        setBadge("Xato", "error");
        setDot("is-error");
        setStatus(duration ? `Xato · ${duration}` : "Xato yuz berdi");
      } else if (output) {
        setConsoleText(output, false);
        setBadge("Bajarildi", "success");
        setDot("is-ready");
        setStatus(duration ? `Bajarildi · ${duration}` : "Bajarildi");
      } else {
        setConsoleText("Kod bajarildi, ammo natija chiqmadi.", false);
        setBadge("Bajarildi", "success");
        setDot("is-ready");
        setStatus(duration ? `Bajarildi · ${duration}` : "Bajarildi");
      }
    } catch (error) {
      let message = error && error.message ? error.message : "Kutilmagan xato yuz berdi.";
      if (error && error.code === "timeout") {
        message += " Kod to'xtatildi; cheksiz tsikl bo'lishi mumkin. Kodni soddalashtirib qayta urinib ko'ring.";
      }
      if (error && error.code === "init") {
        message += " Internet aloqasini tekshirib, qayta urinib ko'ring.";
      }
      setConsoleText(message, true);
      setBadge("Xato", "error");
      setDot("is-error");
      setStatus("Xato yuz berdi");
    } finally {
      setBusy(false);
      setRunLabel("Ishga tushirish");
    }
  }

  codeEl.addEventListener("input", setGutter);
  codeEl.addEventListener("scroll", () => {
    if (gutter) gutter.scrollTop = codeEl.scrollTop;
  });

  codeEl.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      runCode();
      return;
    }
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      codeEl.setRangeText("    ", codeEl.selectionStart, codeEl.selectionEnd, "end");
      setGutter();
    }
  });

  if (stdinEl) {
    stdinEl.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        runCode();
      }
    });
  }

  if (runButton) runButton.addEventListener("click", runCode);

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      if (busy) return;
      resetConsole();
      setBadge("Kutilmoqda", "muted");
      setDot("");
      setStatus("Ishga tayyor");
    });
  }

  if (snippetSelect) {
    snippetSelect.addEventListener("change", () => loadSnippet(snippetSelect.value));
  }

  loadSnippet("salom", { focus: false });

  if (Noldan && typeof Noldan.updateDynamicUI === "function") {
    Noldan.updateDynamicUI();
  }
})();
