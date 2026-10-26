/* Noldan — Python course page: routing, lessons, quizzes, exam and code runner */
(function () {
  "use strict";

  const Noldan = window.Noldan;
  if (!Noldan || !window.PYTHON_COURSE || !Array.isArray(window.PYTHON_LESSONS)) return;

  const course = window.PYTHON_COURSE;
  const lessons = window.PYTHON_LESSONS.slice().sort((a, b) => a.id - b.id);
  const byId = new Map(lessons.map((lesson) => [lesson.id, lesson]));
  const TOTAL = Noldan.TOTAL_LESSONS;
  const PASS_SCORE = course.exam.passScore;
  const EXAM_TOTAL = course.exam.total;
  const EXAM_LESSON = lessons.find((lesson) => lesson.isExam);
  const EXAM_ID = EXAM_LESSON ? EXAM_LESSON.id : TOTAL;
  const RING_CIRCUMFERENCE = 2 * Math.PI * 20;

  Noldan.setActiveCourse("python");

  const article = document.querySelector("#lessonArticle");
  const lessonList = document.querySelector("[data-lesson-list]");
  const searchInput = document.querySelector("[data-lesson-search]");
  const runnerModal = document.querySelector("#runnerModal");
  const reducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const codeStore = new Map();
  let currentId = null;
  let searchQuery = "";
  let runnerBusy = false;

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
     Content rendering
     --------------------------------------------------------------------- */
  function renderHead(lesson, progress) {
    const done = progress.completed.includes(lesson.id);
    const module = course.modules.find((item) => item.lessons.includes(lesson.id));
    const meta = [
      `<span>${ICONS.clock}${lesson.minutes} daqiqa</span>`,
      `<span>${ICONS.book}${lesson.isExam ? `${EXAM_TOTAL} savol` : `Dars ${lesson.id} / ${TOTAL}`}</span>`,
    ].join("");

    const completeButton = lesson.isExam
      ? ""
      : `<button class="complete-btn${done ? " is-done" : ""}" type="button" data-toggle-complete aria-pressed="${done}">${ICONS.check}<span>${done ? "Tugatilgan" : "Tugatdim"}</span></button>`;

    return `
      <div class="lesson-head__eyebrow">
        <span>${esc(module ? module.title : "Python")}</span>
        <span class="sep"></span>
        <span class="muted">${lesson.isExam ? "Yakuniy imtihon" : `Dars ${lesson.id} / ${TOTAL}`}</span>
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
    const key = `c-${lessonId}-${index}`;
    const runnable = block.runnable !== false;
    codeStore.set(key, {
      code: block.code,
      stdin: block.stdin || "",
      title: block.title || "main.py",
      runnable,
    });
    const output = block.output
      ? `<div class="code-result">
           <div class="code-result__head"><i></i>Kutilgan natija</div>
           <pre>${esc(block.output)}</pre>
         </div>`
      : "";
    const glossary = window.NoldanGlossary ? window.NoldanGlossary.render(block.code, key) : "";
    const runButton = runnable
      ? `<button class="code-btn code-btn--run" type="button" data-run-code="${key}">${ICONS.play} Sinash</button>`
      : `<span class="code-btn code-btn--sample">Namuna</span>`;
    return `
      <div class="code-card">
        <div class="code-card__head">
          <div class="code-dots" aria-hidden="true"><i></i><i></i><i></i></div>
          <span class="code-card__lang">python</span>
          <span class="code-card__title">${esc(block.title || "main.py")}</span>
          <div class="code-card__tools">
            <button class="code-btn" type="button" data-copy-code="${key}" aria-label="Kodni nusxalash">${ICONS.copy} Nusxalash</button>
            ${runButton}
          </div>
        </div>
        <pre><code>${Noldan.highlightPython(block.code)}</code></pre>
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
            <div class="quiz-q__title">
              <span class="quiz-q__num">${qi + 1}</span>
              <span>${esc(question.q)}</span>
            </div>
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
          <div>
            <h2>Bilimingizni sinang</h2>
            <p>${questions.length} ta savol. Variantni tanlaganingizdan keyin izoh ko'rinadi.</p>
          </div>
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
      const passed = previous.passed;
      note = `<div class="exam-intro__note">
        Oldingi natijangiz: <b>${previous.score}/${previous.total}</b> ${passed ? "— imtihondan o'tilgan." : "— hali o'tish balliga yetmagan."}
        ${passed ? '<button class="btn btn--sm btn--primary" type="button" data-certificate="python">Sertifikatni ko\'rish</button>' : ""}
      </div>`;
    }

    const questions = course.exam.questions
      .map(
        (question, qi) => `
          <div class="exam-q" data-exam-index="${qi}">
            <div class="exam-q__title">
              <span class="exam-q__num">${qi + 1}</span>
              <span>${esc(question.q)}</span>
            </div>
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
            <p>Barcha mavzular bo'yicha ${EXAM_TOTAL} savol. Kamida ${PASS_SCORE} ta to'g'ri javob bilan sertifikat olasiz.</p>
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

    const previousMarkup = previous
      ? `<a class="lesson-nav__btn" href="#dars-${previous.id}">
           <span class="lesson-nav__label">${ICONS.arrowLeft} Oldingi dars</span>
           <span class="lesson-nav__title">${esc(previous.title)}</span>
         </a>`
      : `<button class="lesson-nav__btn is-disabled" type="button" tabindex="-1" aria-hidden="true"></button>`;

    const nextMarkup = next
      ? `<a class="lesson-nav__btn lesson-nav__btn--next" href="#dars-${next.id}" data-complete-on-next>
           <span class="lesson-nav__label">Keyingi dars ${ICONS.arrowRight}</span>
           <span class="lesson-nav__title">${esc(next.title)}</span>
         </a>`
      : `<button class="lesson-nav__btn lesson-nav__btn--next is-disabled" type="button" tabindex="-1" aria-hidden="true"></button>`;

    return `<nav class="lesson-nav" aria-label="Darslar orasida harakat">${previousMarkup}${nextMarkup}</nav>`;
  }

  function renderSidebar() {
    if (!lessonList) return;
    const progress = Noldan.getProgress();
    const query = searchQuery.trim().toLowerCase();
    let visible = 0;
    let html = "";

    course.modules.forEach((module) => {
      const moduleLessons = module.lessons
        .map((id) => byId.get(id))
        .filter(Boolean)
        .filter((lesson) => {
          if (!query) return true;
          return (
            lesson.title.toLowerCase().includes(query) ||
            lesson.desc.toLowerCase().includes(query)
          );
        });
      if (!moduleLessons.length) return;
      visible += moduleLessons.length;

      const doneCount = moduleLessons.filter((lesson) =>
        progress.completed.includes(lesson.id)
      ).length;

      html += `<div class="lesson-group">
        <div class="lesson-group__head">${esc(module.title)}<span>${doneCount}/${moduleLessons.length}</span></div>`;
      html += moduleLessons
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
        .join("");
      html += "</div>";
    });

    if (!visible) {
      html = `<div class="sidebar-empty">Hech narsa topilmadi. Boshqa so'z bilan qidirib ko'ring.</div>`;
    }
    lessonList.innerHTML = html;
  }

  function renderLesson(id, options) {
    const settings = options || {};
    const lesson = byId.get(id) || lessons[0];
    if (!lesson) return;

    currentId = lesson.id;
    codeStore.clear();

    const progress = Noldan.getProgress();
    const blocks = lesson.blocks
      .map((block, index) => renderBlock(block, lesson.id, index))
      .join("");
    let content = `<div class="lesson-content">${blocks}</div>`;

    if (lesson.isExam) {
      content += renderExam(lesson, progress);
    } else if (lesson.quiz && lesson.quiz.length) {
      content += renderQuiz(lesson);
    }

    content += renderLessonNav(lesson);
    article.innerHTML = renderHead(lesson, progress) + content;

    if (lesson.isExam) bindExamForm();

    renderSidebar();
    updateProgressUI();
    updateMobileTitle();
    document.title = `${lesson.title} — Python kursi | Noldan`;

    if (settings.scroll) scrollToLesson();
  }

  /* ---------------------------------------------------------------------
     Progress & sidebar state
     --------------------------------------------------------------------- */
  function updateProgressUI() {
    const progress = Noldan.getProgress();
    const count = Noldan.getCompletedCount(progress);
    const percent = Math.round((count / TOTAL) * 100);
    const ring = document.querySelector("[data-ring]");

    if (ring) {
      ring.style.strokeDasharray = `${RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`;
      ring.style.strokeDashoffset = String(
        RING_CIRCUMFERENCE * (1 - Math.min(count / TOTAL, 1))
      );
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
      const nextId = Noldan.nextLessonId(progress);
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
    const done = Noldan.getProgress().completed.includes(currentId);
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
    const progress = Noldan.getProgress();
    if (progress.completed.includes(lesson.id)) {
      progress.completed = progress.completed.filter((id) => id !== lesson.id);
      Noldan.saveProgress(progress);
      Noldan.toast("Dars belgisi olib tashlandi.", "info");
    } else {
      Noldan.completeLesson(lesson.id);
      Noldan.toast("Dars tugatildi. Barakalla!", "success");
    }
  }

  /* ---------------------------------------------------------------------
     Quiz interactions
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
              percent < 60 ? " Mavzuni yana bir bor o'qib chiqish tavsiya etiladi." : ""
            }`;
    }
    if (summary) summary.classList.add("is-visible");
    if (currentId) {
      Noldan.saveQuizResult(currentId, correct, questions.length, "python");
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
          question.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "center",
          });
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
            `<div class="quiz-explain is-visible" data-exam-explain><b>Izoh:</b> ${esc(
              question.explain
            )}</div>`
          );
        }
      });

      const passed = score >= PASS_SCORE;
      const progress = Noldan.getProgress();
      const previous = progress.exam;
      const attempt = {
        score,
        total: EXAM_TOTAL,
        passed,
        date: new Date().toISOString(),
      };
      const isBest =
        !previous ||
        score > previous.score ||
        (passed && !previous.passed);

      progress.exam = isBest ? attempt : previous;
      if (passed && !progress.completed.includes(EXAM_ID)) {
        progress.completed.push(EXAM_ID);
        progress.completed.sort((a, b) => a - b);
      }
      Noldan.saveProgress(progress, "python");

      const bestPassed = Boolean(progress.exam && progress.exam.passed);
      showExamResult(score, passed, bestPassed);

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
      if (!user) {
        text += " Natijani hisobingizga saqlash uchun ro'yxatdan o'ting — progress avtomatik ko'chiriladi.";
      }
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
        ? `<button class="btn btn--lime" type="button" data-certificate="python">Sertifikatni ko'rish</button>`
        : `<button class="btn btn--lime" type="button" data-open-auth="register">Sertifikat uchun ro'yxatdan o'tish</button>`;
    }

    const retryButton = passed
      ? `<button class="btn btn--white" type="button" data-exam-retry>Qayta topshirish</button>`
      : `<button class="btn btn--lime" type="button" data-exam-retry>Qayta topshirish</button>`;

    const restartButton = !bestPassed
      ? `<button class="btn btn--ghost exam-restart-btn" type="button" data-exam-restart>
           ${ICONS.refresh} Kursni boshidan takrorlash
         </button>
         <small class="exam-restart-hint">Bu tugma kurs progressi va test natijalarini tozalaydi.</small>`
      : "";

    holder.innerHTML = `
      <div class="exam-result">
        <span class="badge ${passed ? "badge--lime" : "badge--muted"}">${
          passed ? "Imtihon o'tildi" : "Yakunlanmadi"
        }</span>
        <div class="exam-result__main">
          <div class="exam-score-ring" style="--score:${percent}"><b>${score}/${EXAM_TOTAL}</b></div>
          <div>
            <h2>${title}</h2>
            <p>${text}</p>
          </div>
        </div>
        <div class="exam-result__actions">
          ${certificateButton}
          ${retryButton}
          ${restartButton}
        </div>
      </div>`;

    holder.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "center",
    });
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
    form.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
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
     Code runner
     --------------------------------------------------------------------- */
  function initRunner() {
    if (!runnerModal) return;
    const codeEl = runnerModal.querySelector("#runnerCode");
    const stdinEl = runnerModal.querySelector("#runnerStdin");
    const titleEl = runnerModal.querySelector("[data-runner-title]");
    const consoleEl = runnerModal.querySelector("[data-runner-console]");
    const timeEl = runnerModal.querySelector("[data-runner-time]");
    const dot = runnerModal.querySelector("[data-runner-dot]");
    const runButton = runnerModal.querySelector("[data-runner-run]");
    const stdinDetails = runnerModal.querySelector(".runner-stdin");
    const copyButton = runnerModal.querySelector("[data-runner-copy]");

    function setConsoleMessage(message, isError) {
      consoleEl.classList.toggle("is-error", Boolean(isError));
      consoleEl.textContent = message;
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    function setStatus(state, label) {
      dot.className = "status-dot";
      if (state === "ready") dot.classList.add("is-ready");
      if (state === "error") dot.classList.add("is-error");
      if (state === "busy") dot.classList.add("is-busy");
      if (label !== undefined) timeEl.textContent = label;
    }

    async function runCode() {
      if (runnerBusy) return;
      const code = codeEl.value;
      if (!code.trim()) {
        setConsoleMessage("Avval kod yozing.", true);
        setStatus("error", "");
        return;
      }
      if (!window.PythonRunner) {
        setConsoleMessage(
          "Python muhiti yuklanmagan. Sahifani yangilab, qayta urinib ko'ring.",
          true
        );
        setStatus("error", "");
        return;
      }

      runnerBusy = true;
      runButton.disabled = true;
      runButton.textContent = "Yuklanmoqda...";
      setConsoleMessage("Python muhiti tayyorlanmoqda... Bu birinchi ishga tushirishda bir necha soniya oladi.", false);
      setStatus("busy", "muhit yuklanmoqda...");

      try {
        const result = await window.PythonRunner.run(code, stdinEl.value, (status) => {
          if (status === "running") {
            runButton.textContent = "Bajarilmoqda...";
            setConsoleMessage("Kod bajarilmoqda...", false);
            setStatus("busy", "bajarilmoqda...");
          } else {
            setStatus("busy", "muhit yuklanmoqda...");
          }
        });

        runnerBusy = false;
        runButton.disabled = false;
        runButton.textContent = "Ishga tushirish";

        const output = String(result.output || "").replace(/\s+$/, "");
        const error = String(result.error || "").trim();
        const duration = result.duration ? `${result.duration} ms` : "";

        if (error) {
          setConsoleMessage([output, error].filter(Boolean).join("\n\n"), true);
          setStatus("error", duration);
        } else if (output) {
          setConsoleMessage(output, false);
          setStatus("ready", duration);
        } else {
          setConsoleMessage("Kod bajarildi, ammo natija chiqmadi.", false);
          setStatus("ready", duration);
        }
      } catch (error) {
        runnerBusy = false;
        runButton.disabled = false;
        runButton.textContent = "Ishga tushirish";
        let message = error.message || "Kutilmagan xato yuz berdi.";
        if (error.code === "timeout") {
          message += " Kod to'xtatildi; kodni soddalashtirib qayta urinib ko'ring.";
        }
        if (error.code === "init") {
          message += " Internet aloqasini tekshiring va qayta urinib ko'ring.";
        }
        setConsoleMessage(message, true);
        setStatus("error", "");
      }
    }

    function openRunner(entry, trigger) {
      codeEl.value = entry.code || "";
      stdinEl.value = entry.stdin || "";
      titleEl.textContent = entry.title ? `Sinash: ${entry.title}` : "Kodni sinab ko'rish";
      if (stdinDetails) stdinDetails.open = Boolean(entry.stdin);
      setConsoleMessage("Kodni o'zgartiring va «Ishga tushirish»ni bosing.", false);
      setStatus("idle", "");
      runButton.disabled = false;
      runButton.textContent = "Ishga tushirish";
      Noldan.openModal(runnerModal, trigger);
      codeEl.focus();
      codeEl.setSelectionRange(0, 0);
      codeEl.scrollTop = 0;
    }

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-run-code]");
      if (!trigger) return;
      event.preventDefault();
      const entry = codeStore.get(trigger.getAttribute("data-run-code"));
      if (entry) openRunner(entry, trigger);
    });

    runButton.addEventListener("click", runCode);

    if (copyButton) {
      copyButton.addEventListener("click", async () => {
        const copied = await Noldan.copyText(codeEl.value);
        Noldan.toast(
          copied ? "Kod nusxalandi." : "Nusxalab bo'lmadi. Kodni qo'lda belgilang.",
          copied ? "success" : "error"
        );
      });
    }

    runnerModal.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        runCode();
        return;
      }
      const textarea = event.target.closest("textarea");
      if (textarea && event.key === "Tab") {
        event.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.setRangeText("    ", start, end, "end");
      }
    });
  }

  /* ---------------------------------------------------------------------
     Navigation & events
     --------------------------------------------------------------------- */
  function parseHash(hash) {
    const match = /^#dars-(\d+)$/.exec(hash === undefined ? location.hash : hash);
    return match ? Number(match[1]) : null;
  }

  function scrollToLesson() {
    const header = document.querySelector(".site-header");
    const offset = (header ? header.offsetHeight : 76) + 18;
    const top = article.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: reducedMotion ? "auto" : "smooth",
    });
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
      if (!target || !byId.has(target)) return;
      event.preventDefault();
      if (target === currentId) {
        scrollToLesson();
      } else {
        window.location.hash = `#dars-${target}`;
      }
    });
  }

  function initArticleEvents() {
    article.addEventListener("click", (event) => {
      if (event.target.closest("[data-toggle-complete]")) {
        event.preventDefault();
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
        const body = panel ? panel.querySelector("[data-glossary-body]") : null;
        const willOpen = glossaryToggle.getAttribute("aria-expanded") !== "true";
        glossaryToggle.setAttribute("aria-expanded", String(willOpen));
        if (panel) panel.classList.toggle("is-collapsed", !willOpen);
        if (body) body.hidden = !willOpen;
        return;
      }

      const copyButton = event.target.closest("[data-copy-code]");
      if (copyButton) {
        const entry = codeStore.get(copyButton.getAttribute("data-copy-code"));
        if (entry) {
          Noldan.copyText(entry.code).then((copied) => {
            Noldan.toast(
              copied ? "Kod nusxalandi." : "Nusxalab bo'lmadi. Kodni qo'lda belgilang.",
              copied ? "success" : "error"
            );
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
        Noldan.resetCourseProgress("python");
        Noldan.toast("Kurs boshidan boshlandi. Omad!", "success");
        if (location.hash === "#dars-1") {
          renderLesson(1, { scroll: true });
        } else {
          window.location.hash = "#dars-1";
        }
        return;
      }

      const next = event.target.closest("[data-complete-on-next]");
      if (next) {
        const lesson = byId.get(currentId);
        if (lesson && !lesson.isExam) {
          const completed = Noldan.completeLesson(lesson.id);
          if (completed) {
            Noldan.toast("Dars tugatildi. Keyingi darsga o'tdingiz.", "success");
          }
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
    Noldan.resetCourseProgress("python");
    Noldan.toast("Kurs boshidan boshlandi. Omad!", "success");
    if (window.location.hash === "#dars-1") {
      renderLesson(1, { scroll: true });
    } else {
      window.location.hash = "#dars-1";
    }
    const resetButton = document.querySelector("[data-course-reset]");
    if (resetButton) {
      delete resetButton.dataset.confirm;
      resetButton.classList.remove("is-confirming");
      const label = resetButton.querySelector("span");
      if (label) label.textContent = "Kursni boshidan boshlash";
    }
  }

  function init() {
    if (!article || !lessonList) return;

    initRunner();
    initNavigation();
    initArticleEvents();
    initSidebarReset();

    document.addEventListener("noldan:progress", () => {
      updateProgressUI();
      renderSidebar();
    });
    document.addEventListener("noldan:authchange", () => {
      if (currentId) renderLesson(currentId);
    });

    const initialHash = parseHash();
    const initialId =
      initialHash && byId.has(initialHash) ? initialHash : Noldan.nextLessonId();

    renderLesson(initialId, { scroll: Boolean(initialHash) });
    if (initialHash !== initialId) {
      history.replaceState(null, "", `#dars-${initialId}`);
    }
    if (initialHash) {
      window.setTimeout(scrollToLesson, 120);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
