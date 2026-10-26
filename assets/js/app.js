/* Noldan — shared UI, auth, progress and certificate logic */
(function () {
  "use strict";

  const COURSES = {
    python: {
      id: "python",
      title: "Python",
      page: "python.html",
      total: 31,
      examId: 31,
      examTotal: 15,
      passScore: 12,
      certificateCode: "PY",
    },
    javascript: {
      id: "javascript",
      title: "JavaScript",
      page: "kurs.html?til=javascript",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "JS",
    },
    htmlcss: {
      id: "htmlcss",
      title: "HTML & CSS",
      page: "kurs.html?til=htmlcss",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "HTML",
    },
    cpp: {
      id: "cpp",
      title: "C++",
      page: "kurs.html?til=cpp",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "CPP",
    },
    sql: {
      id: "sql",
      title: "SQL",
      page: "kurs.html?til=sql",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "SQL",
    },
    java: {
      id: "java",
      title: "Java",
      page: "kurs.html?til=java",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "JAVA",
    },
    c: {
      id: "c",
      title: "C",
      page: "kurs.html?til=c",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "C",
    },
    php: {
      id: "php",
      title: "PHP",
      page: "kurs.html?til=php",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "PHP",
    },
    ruby: {
      id: "ruby",
      title: "Ruby",
      page: "kurs.html?til=ruby",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "RB",
    },
    go: {
      id: "go",
      title: "Go",
      page: "kurs.html?til=go",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "GO",
    },
    rust: {
      id: "rust",
      title: "Rust",
      page: "kurs.html?til=rust",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "RS",
    },
    typescript: {
      id: "typescript",
      title: "TypeScript",
      page: "kurs.html?til=typescript",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "TS",
    },
    kotlin: {
      id: "kotlin",
      title: "Kotlin",
      page: "kurs.html?til=kotlin",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "KT",
    },
    dart: {
      id: "dart",
      title: "Dart",
      page: "kurs.html?til=dart",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "DART",
    },
    bash: {
      id: "bash",
      title: "Bash",
      page: "kurs.html?til=bash",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "SH",
    },
    r: {
      id: "r",
      title: "R",
      page: "kurs.html?til=r",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "R",
    },
    scala: {
      id: "scala",
      title: "Scala",
      page: "kurs.html?til=scala",
      total: 50,
      examId: 50,
      examTotal: 12,
      passScore: 9,
      certificateCode: "SCL",
    },
  };

  const DEFAULT_COURSE = "python";
  const TOTAL_LESSONS = COURSES[DEFAULT_COURSE].total;
  const KEYS = {
    users: "noldan_users_v1",
    session: "noldan_session_v1",
    activeCourse: "noldan_active_course_v1",
    guestProgress: "noldan_progress_v1_guest",
    progressPrefix: "noldan_progress_v1_",
  };

  function getCourse(courseId) {
    return COURSES[courseId] || COURSES[DEFAULT_COURSE];
  }

  const $ = (selector, scope) => (scope || document).querySelector(selector);
  const $$ = (selector, scope) =>
    Array.from((scope || document).querySelectorAll(selector));

  const MONTHS_UZ = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  const ICONS = {
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>',
    shield:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
    info:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    certificate:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/></svg>',
    play:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 8 5.5Z"/></svg>',
    user:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    logout:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></svg>',
    eye:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 18 18"/><path d="M10.6 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-3.2 4.2M6.1 6.1C3.4 8 2 12 2 12s3.5 7 10 7a11 11 0 0 0 5.4-1.4"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>',
    arrowLeft:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    trophy:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/></svg>',
  };

  /* ---------------------------------------------------------------------
     Utilities
     --------------------------------------------------------------------- */
  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed == null ? fallback : parsed;
    } catch (error) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function initials(name) {
    const parts = String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!parts.length) return "N";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function formatDateUz(iso) {
    const date = iso ? new Date(iso) : new Date();
    if (Number.isNaN(date.getTime())) return "";
    return `${date.getDate()} ${MONTHS_UZ[date.getMonth()]}, ${date.getFullYear()}`;
  }

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  async function hashPassword(password) {
    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
      try {
        const data = new TextEncoder().encode(password);
        const digest = await window.crypto.subtle.digest("SHA-256", data);
        const hex = Array.from(new Uint8Array(digest))
          .map((byte) => byte.toString(16).padStart(2, "0"))
          .join("");
        return "sha256:" + hex;
      } catch (error) {
        /* fall through to lightweight fallback */
      }
    }
    let hash = 5381;
    for (let i = 0; i < password.length; i += 1) {
      hash = (hash * 33) ^ password.charCodeAt(i);
    }
    return "demo:" + (hash >>> 0).toString(36);
  }

  function getUsers() {
    const users = readJSON(KEYS.users, []);
    return Array.isArray(users) ? users : [];
  }

  function saveUsers(users) {
    writeJSON(KEYS.users, users);
  }

  function getSessionEmail() {
    try {
      return localStorage.getItem(KEYS.session);
    } catch (error) {
      return null;
    }
  }

  function getUser() {
    const email = getSessionEmail();
    if (!email) return null;
    const user = getUsers().find((item) => item.email === email);
    if (!user) {
      try {
        localStorage.removeItem(KEYS.session);
      } catch (error) {
        /* noop */
      }
      return null;
    }
    return user;
  }

  function setSession(email) {
    try {
      if (email) localStorage.setItem(KEYS.session, normalizeEmail(email));
      else localStorage.removeItem(KEYS.session);
    } catch (error) {
      /* noop */
    }
  }

  /* ---------------------------------------------------------------------
     Progress
     --------------------------------------------------------------------- */
  function emptyProgress() {
    return { version: 2, completed: [], quiz: {}, exam: null, updatedAt: null };
  }

  function courseKeySuffix(courseId) {
    return courseId === DEFAULT_COURSE ? "" : `__${courseId}`;
  }

  function userProgressKey(email, courseId) {
    return (
      KEYS.progressPrefix +
      encodeURIComponent(normalizeEmail(email)) +
      courseKeySuffix(courseId)
    );
  }

  function guestProgressKey(courseId) {
    return KEYS.guestProgress + courseKeySuffix(courseId);
  }

  function currentProgressKey(courseId) {
    const user = getUser();
    return user
      ? userProgressKey(user.email, courseId)
      : guestProgressKey(courseId);
  }

  function normalizeProgress(raw, courseId) {
    const meta = getCourse(courseId);
    const progress = emptyProgress();
    if (!raw || typeof raw !== "object") return progress;

    const isLegacyPython =
      meta.id === DEFAULT_COURSE &&
      (!raw.version || Number(raw.version) < 2) &&
      raw.exam &&
      Number(raw.exam.total) === 12;

    if (Array.isArray(raw.completed)) {
      progress.completed = Array.from(
        new Set(
          raw.completed
            .map((id) => Number(id))
            .filter(
              (id) => Number.isInteger(id) && id >= 1 && id <= meta.total
            )
        )
      ).sort((a, b) => a - b);
    }

    if (isLegacyPython) {
      progress.completed = progress.completed.filter((id) => id !== 22);
    }

    if (raw.quiz && typeof raw.quiz === "object") {
      Object.keys(raw.quiz).forEach((key) => {
        const lessonId = Number(key);
        const result = raw.quiz[key];
        if (
          !Number.isInteger(lessonId) ||
          lessonId < 1 ||
          lessonId > meta.total ||
          !result ||
          typeof result !== "object"
        ) {
          return;
        }
        const total = Number(result.total);
        const correct = Number(result.correct);
        if (!Number.isFinite(total) || total <= 0 || !Number.isFinite(correct)) {
          return;
        }
        const safeCorrect = Math.max(0, Math.min(correct, total));
        progress.quiz[lessonId] = {
          correct: safeCorrect,
          total,
          percent: Math.round((safeCorrect / total) * 100),
          date: result.date || null,
        };
      });
    }

    if (raw.exam && typeof raw.exam === "object" && !isLegacyPython) {
      const score = Number(raw.exam.score);
      if (Number.isFinite(score) && score >= 0) {
        progress.exam = {
          score: Math.min(score, meta.examTotal),
          total: meta.examTotal,
          passed: Boolean(raw.exam.passed) && score >= meta.passScore,
          date: raw.exam.date || null,
        };
      }
    }
    progress.version = 2;
    progress.updatedAt = raw.updatedAt || null;
    return progress;
  }

  function readProgressByKey(key, courseId) {
    return normalizeProgress(readJSON(key, null), courseId);
  }

  function getProgress(courseId) {
    const id = getCourse(courseId || DEFAULT_COURSE).id;
    return readProgressByKey(currentProgressKey(id), id);
  }

  function getCompletedCount(progress, courseId) {
    const id = getCourse(courseId || DEFAULT_COURSE).id;
    const data = progress || getProgress(id);
    return data.completed.filter((lessonId) => lessonId <= getCourse(id).total)
      .length;
  }

  function nextLessonId(progress, courseId) {
    const meta = getCourse(courseId || DEFAULT_COURSE);
    const data = progress || getProgress(meta.id);
    for (let id = 1; id <= meta.total; id += 1) {
      if (!data.completed.includes(id)) return id;
    }
    return 1;
  }

  function mergeProgress(base, incoming, courseId) {
    const meta = getCourse(courseId || DEFAULT_COURSE);
    const merged = normalizeProgress(base, meta.id);
    const extra = normalizeProgress(incoming, meta.id);
    merged.completed = Array.from(
      new Set([].concat(merged.completed, extra.completed))
    ).sort((a, b) => a - b);
    Object.keys(extra.quiz).forEach((lessonId) => {
      const current = merged.quiz[lessonId];
      if (!current || extra.quiz[lessonId].percent >= current.percent) {
        merged.quiz[lessonId] = extra.quiz[lessonId];
      }
    });
    if (extra.exam) {
      if (!merged.exam || extra.exam.score > merged.exam.score) {
        merged.exam = extra.exam;
      } else if (extra.exam.passed && !merged.exam.passed) {
        merged.exam = extra.exam;
      }
    }
    merged.updatedAt = new Date().toISOString();
    return merged;
  }

  function saveProgress(progress, courseId) {
    const meta = getCourse(courseId || DEFAULT_COURSE);
    const normalized = normalizeProgress(progress, meta.id);
    normalized.updatedAt = new Date().toISOString();
    const ok = writeJSON(currentProgressKey(meta.id), normalized);
    if (ok) {
      document.dispatchEvent(
        new CustomEvent("noldan:progress", {
          detail: { courseId: meta.id, progress: normalized },
        })
      );
      updateDynamicUI();
    }
    return ok;
  }

  function completeLesson(id, courseId) {
    const meta = getCourse(courseId || DEFAULT_COURSE);
    const progress = getProgress(meta.id);
    const lessonId = Number(id);
    if (!Number.isInteger(lessonId) || lessonId < 1 || lessonId > meta.total) {
      return false;
    }
    if (progress.completed.includes(lessonId)) return false;
    progress.completed.push(lessonId);
    progress.completed.sort((a, b) => a - b);
    saveProgress(progress, meta.id);
    return true;
  }

  function saveQuizResult(lessonId, correct, total, courseId) {
    const meta = getCourse(courseId || DEFAULT_COURSE);
    const id = Number(lessonId);
    const totalCount = Number(total);
    const correctCount = Number(correct);
    if (
      !Number.isInteger(id) ||
      id < 1 ||
      id > meta.total ||
      !Number.isFinite(totalCount) ||
      totalCount <= 0 ||
      !Number.isFinite(correctCount)
    ) {
      return;
    }
    const progress = getProgress(meta.id);
    const safeCorrect = Math.max(0, Math.min(correctCount, totalCount));
    progress.quiz[id] = {
      correct: safeCorrect,
      total: totalCount,
      percent: Math.round((safeCorrect / totalCount) * 100),
      date: new Date().toISOString(),
    };
    saveProgress(progress, meta.id);
  }

  function resetCourseProgress(courseId) {
    const meta = getCourse(courseId || DEFAULT_COURSE);
    const ok = writeJSON(currentProgressKey(meta.id), emptyProgress());
    if (ok) {
      document.dispatchEvent(
        new CustomEvent("noldan:progress", {
          detail: { courseId: meta.id, progress: emptyProgress(), reset: true },
        })
      );
      updateDynamicUI();
    }
    return ok;
  }

  function adoptGuestProgress(email) {
    Object.keys(COURSES).forEach((courseId) => {
      const guest = readProgressByKey(guestProgressKey(courseId), courseId);
      const hasQuiz = Object.keys(guest.quiz).length > 0;
      if (!guest.completed.length && !guest.exam && !hasQuiz) return;
      const key = userProgressKey(email, courseId);
      const existing = readProgressByKey(key, courseId);
      writeJSON(key, mergeProgress(existing, guest, courseId));
      try {
        localStorage.removeItem(guestProgressKey(courseId));
      } catch (error) {
        /* noop */
      }
    });
  }

  function dispatchAuthChange() {
    document.dispatchEvent(
      new CustomEvent("noldan:authchange", { detail: { user: getUser() } })
    );
  }

  /* ---------------------------------------------------------------------
     Toasts
     --------------------------------------------------------------------- */
  function toast(message, type) {
    let stack = $(".toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      stack.setAttribute("aria-live", "polite");
      document.body.appendChild(stack);
    }
    const variant = type === "error" ? "error" : type === "success" ? "success" : "info";
    const node = document.createElement("div");
    node.className = `toast toast--${variant}`;
    const icon = variant === "error" ? ICONS.info : ICONS.check;
    node.innerHTML = `<span class="toast__icon">${icon}</span><span>${escapeHtml(
      message
    )}</span>`;
    stack.appendChild(node);
    window.setTimeout(() => {
      node.classList.add("is-leaving");
      window.setTimeout(() => node.remove(), 240);
    }, 3600);
  }

  /* ---------------------------------------------------------------------
     Modal helpers
     --------------------------------------------------------------------- */
  const modalReturnFocus = new WeakMap();

  function syncBodyLock() {
    const hasModal = Boolean(document.querySelector(".modal-layer.is-open"));
    document.body.classList.toggle("no-scroll", hasModal);
  }

  function openModal(layer, trigger) {
    if (!layer) return;
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    const header = $(".site-header");
    if (header) header.classList.remove("nav-open");
    const toggle = $(".menu-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    modalReturnFocus.set(layer, trigger || document.activeElement);
    syncBodyLock();
    window.setTimeout(() => {
      const focusTarget =
        layer.querySelector("[data-modal-autofocus]") ||
        layer.querySelector(
          "input:not([type=hidden]):not([disabled]), button, textarea"
        );
      if (focusTarget) focusTarget.focus({ preventScroll: true });
    }, 60);
  }

  function closeModal(layer) {
    if (!layer || !layer.classList.contains("is-open")) return;
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    syncBodyLock();
    const previous = modalReturnFocus.get(layer);
    if (previous && typeof previous.focus === "function") {
      previous.focus({ preventScroll: true });
    }
  }

  function closeAllModals() {
    $$(".modal-layer.is-open").forEach((layer) => closeModal(layer));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const open = $$(".modal-layer.is-open").pop();
      if (open) {
        event.preventDefault();
        closeModal(open);
        return;
      }
      const header = $(".site-header");
      if (header && header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
        const toggle = $(".menu-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    }

    if (event.key !== "Tab") return;
    const open = $$(".modal-layer.is-open").pop();
    if (!open) return;
    const focusable = $$(
      'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      open
    ).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const layer = event.target.closest(".modal-layer");
    if (layer && event.target === layer) {
      closeModal(layer);
      return;
    }
    const closeBtn = event.target.closest("[data-modal-close]");
    if (closeBtn) {
      const parent = closeBtn.closest(".modal-layer");
      if (parent) closeModal(parent);
    }
  });

  /* ---------------------------------------------------------------------
     Header rendering
     --------------------------------------------------------------------- */
  function renderAuthZones() {
    const user = getUser();
    $$("[data-auth-zone]").forEach((zone) => {
      const isMobile = zone.classList.contains("mobile-auth");
      if (user) {
        if (isMobile) {
          zone.innerHTML = `
            <button class="mobile-auth__user" type="button" data-profile>
              <span class="avatar">${escapeHtml(initials(user.name))}</span>
              <span><b>${escapeHtml(user.name)}</b><span>${escapeHtml(
                user.email
              )}</span></span>
            </button>
            <div style="display:flex;gap:8px">
              <a class="btn btn--soft btn--sm" href="${continueLink()}" style="flex:1">Davom ettirish</a>
              <button class="btn btn--ghost btn--sm" type="button" data-logout>Chiqish</button>
            </div>`;
        } else {
          zone.innerHTML = `
            <div class="user-menu" data-user-menu>
              <button class="avatar-btn" type="button" data-user-menu-toggle aria-haspopup="true" aria-expanded="false">
                <span class="avatar">${escapeHtml(initials(user.name))}</span>
                <span>${escapeHtml(user.name.split(/\s+/)[0])}</span>
                <svg class="avatar-btn__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="user-dropdown" role="menu">
                <div class="user-dropdown__head">
                  <span class="user-dropdown__name">${escapeHtml(user.name)}</span>
                  <span class="user-dropdown__email">${escapeHtml(user.email)}</span>
                </div>
                <button class="user-dropdown__item" type="button" data-profile role="menuitem">${ICONS.user} Mening progressim</button>
                <a class="user-dropdown__item" href="${continueLink()}" role="menuitem">${ICONS.play} Kursni davom ettirish</a>
                <button class="user-dropdown__item user-dropdown__item--danger" type="button" data-logout role="menuitem">${ICONS.logout} Chiqish</button>
              </div>
            </div>`;
        }
      } else if (isMobile) {
        zone.innerHTML = `
          <button class="btn btn--ghost" type="button" data-open-auth="login">Kirish</button>
          <button class="btn btn--primary" type="button" data-open-auth="register">Bepul ro'yxatdan o'tish</button>`;
      } else {
        zone.innerHTML = `
          <button class="btn btn--ghost btn--sm" type="button" data-open-auth="login">Kirish</button>
          <button class="btn btn--primary btn--sm" type="button" data-open-auth="register">Bepul boshlash</button>`;
      }
    });
  }

  function setActiveCourse(courseId) {
    if (!COURSES[courseId]) return;
    try {
      localStorage.setItem(KEYS.activeCourse, courseId);
    } catch (error) {
      /* noop */
    }
  }

  function getActiveCourse() {
    try {
      const stored = localStorage.getItem(KEYS.activeCourse);
      return COURSES[stored] ? stored : DEFAULT_COURSE;
    } catch (error) {
      return DEFAULT_COURSE;
    }
  }

  function continueLink(courseId) {
    const meta = getCourse(courseId || getActiveCourse());
    const progress = getProgress(meta.id);
    const id = nextLessonId(progress, meta.id);
    return `${meta.page}#dars-${id}`;
  }

  function updateDynamicUI() {
    const activeMeta = getCourse(getActiveCourse());
    const activeProgress = getProgress(activeMeta.id);
    const activeCount = getCompletedCount(activeProgress, activeMeta.id);

    $$("[data-python-cta]").forEach((link) => {
      const progress = getProgress(DEFAULT_COURSE);
      const count = getCompletedCount(progress, DEFAULT_COURSE);
      link.setAttribute("href", continueLink(DEFAULT_COURSE));
      const label = link.querySelector("[data-cta-label]");
      if (label && count > 0) label.textContent = "Davom ettirish";
    });

    $$("[data-progress-widget]").forEach((widget) => {
      const meta = getCourse(
        widget.getAttribute("data-progress-course") || DEFAULT_COURSE
      );
      const progress = getProgress(meta.id);
      const count = getCompletedCount(progress, meta.id);
      const bar = widget.querySelector("[data-progress-bar]");
      const text = widget.querySelector("[data-progress-text]");
      const always = widget.getAttribute("data-progress-always") === "true";
      const percent = Math.round((count / meta.total) * 100);
      if (bar) bar.style.width = percent + "%";
      if (text) text.textContent = `${count}/${meta.total} dars`;
      widget.hidden = count === 0 && !always;
      const link = widget.parentElement
        ? widget.parentElement.querySelector("[data-progress-course-cta]")
        : null;
      if (link) {
        link.setAttribute("href", continueLink(meta.id));
        const label = link.querySelector("[data-cta-label]");
        if (label && count > 0) label.textContent = "Davom ettirish";
      }
    });

    $$("[data-completed-count]").forEach((node) => {
      node.textContent = String(activeCount);
    });
    $$("[data-next-dars-label]").forEach((node) => {
      node.textContent =
        activeCount > 0
          ? `${activeCount}/${activeMeta.total} dars tugatilgan`
          : "Boshlanmagan";
    });
    $$("[data-active-course-name]").forEach((node) => {
      node.textContent = activeMeta.title;
    });
  }

  /* ---------------------------------------------------------------------
     Auth modal
     --------------------------------------------------------------------- */
  function authMarkup() {
    return `
      <div class="modal-layer" id="authModal" aria-hidden="true">
        <div class="modal modal--auth" role="dialog" aria-modal="true" aria-labelledby="authTitle">
          <button class="modal__close" type="button" data-modal-close aria-label="Yopish">${ICONS.close}</button>
          <div class="auth-layout">
            <aside class="auth-aside">
              <div class="auth-aside__brand">
                <span class="brand__mark">${logoGlyph()}</span>
                <span>Noldan</span>
              </div>
              <h2>Birinchi kodingizni <span>bugun</span> yozing.</h2>
              <p>Hisob yarating — progress, test natijalari va sertifikatingiz bir joyda saqlanadi.</p>
              <ul class="auth-aside__list">
                <li><span class="check">${ICONS.check}</span> 17 ta mustaqil kurs, 831 dars</li>
                <li><span class="check">${ICONS.check}</span> Kod misollari, testlar va imtihonlar</li>
                <li><span class="check">${ICONS.check}</span> Har bir kurs uchun sertifikat</li>
              </ul>
              <div class="auth-aside__code">
                <pre>&gt;&gt;&gt; print("Salom, Noldan!")
Salom, Noldan!
&gt;&gt;&gt; 2 ** 10
1024</pre>
              </div>
            </aside>
            <div class="auth-form-wrap">
              <div class="auth-form-head">
                <h2 id="authTitle">Xush kelibsiz!</h2>
                <p id="authSubtitle">O'rganishni davom ettirish uchun hisobingizga kiring.</p>
              </div>
              <div class="auth-tabs" role="tablist" aria-label="Hisobga kirish yoki ro'yxatdan o'tish">
                <button class="auth-tab is-active" type="button" role="tab" aria-selected="true" data-auth-tab="login">Kirish</button>
                <button class="auth-tab" type="button" role="tab" aria-selected="false" data-auth-tab="register">Ro'yxatdan o'tish</button>
              </div>
              <div class="auth-alert" data-auth-alert role="alert"></div>

              <form class="auth-form" id="loginForm" novalidate>
                <div class="field">
                  <label for="loginEmail">Email</label>
                  <div class="field__box">
                    <input id="loginEmail" name="email" type="email" autocomplete="email" placeholder="ism@misol.uz" data-modal-autofocus>
                  </div>
                  <span class="field__error"></span>
                </div>
                <div class="field field--has-eye">
                  <label for="loginPassword">Parol</label>
                  <div class="field__box">
                    <input id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="Kamida 6 ta belgi">
                    <button class="field__eye" type="button" data-toggle-password="loginPassword" aria-label="Parolni ko'rsatish">${ICONS.eye}</button>
                  </div>
                  <span class="field__error"></span>
                </div>
                <button class="btn btn--primary btn--block auth-submit" type="submit">Kirish</button>
              </form>

              <form class="auth-form" id="registerForm" novalidate hidden>
                <div class="field">
                  <label for="registerName">Ismingiz</label>
                  <div class="field__box">
                    <input id="registerName" name="name" type="text" autocomplete="name" placeholder="Masalan: Aziza Karimova">
                  </div>
                  <span class="field__error"></span>
                </div>
                <div class="field">
                  <label for="registerEmail">Email</label>
                  <div class="field__box">
                    <input id="registerEmail" name="email" type="email" autocomplete="email" placeholder="ism@misol.uz">
                  </div>
                  <span class="field__error"></span>
                </div>
                <div class="field field--has-eye">
                  <label for="registerPassword">Parol</label>
                  <div class="field__box">
                    <input id="registerPassword" name="password" type="password" autocomplete="new-password" placeholder="Kamida 6 ta belgi">
                    <button class="field__eye" type="button" data-toggle-password="registerPassword" aria-label="Parolni ko'rsatish">${ICONS.eye}</button>
                  </div>
                  <span class="field__error"></span>
                </div>
                <div class="field field--has-eye">
                  <label for="registerConfirm">Parolni tasdiqlang</label>
                  <div class="field__box">
                    <input id="registerConfirm" name="confirm" type="password" autocomplete="new-password" placeholder="Parolni qayta yozing">
                    <button class="field__eye" type="button" data-toggle-password="registerConfirm" aria-label="Parolni ko'rsatish">${ICONS.eye}</button>
                  </div>
                  <span class="field__error"></span>
                </div>
                <label class="auth-check">
                  <input type="checkbox" id="registerTerms">
                  <span>Hisob ma'lumotlarim shu brauzerda saqlanishiga roziman.</span>
                </label>
                <button class="btn btn--primary btn--block auth-submit" type="submit">Hisob yaratish</button>
              </form>

              <div class="auth-demo-note">
                ${ICONS.shield}
                <span>Demo rejim: hisoblar va progress faqat shu brauzerda saqlanadi. Parol oddiy himoyalangan ko'rinishda saklanadi, haqiqiy serverga yuborilmaydi.</span>
              </div>
              <div class="auth-guest">Hozircha <button type="button" data-auth-guest>mehmon sifatida davom eting</button>.</div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function profileMarkup() {
    return `
      <div class="modal-layer" id="profileModal" aria-hidden="true">
        <div class="modal modal--profile" role="dialog" aria-modal="true" aria-labelledby="profileTitle">
          <button class="modal__close" type="button" data-modal-close aria-label="Yopish">${ICONS.close}</button>
          <div class="profile-banner">
            <div class="profile-banner__row">
              <span class="avatar" data-profile-avatar>N</span>
              <div>
                <h2 id="profileTitle" data-profile-name>Foydalanuvchi</h2>
                <p data-profile-email>email</p>
              </div>
            </div>
            <span class="profile-banner__since">${ICONS.calendar} <span data-profile-since>—</span> dan beri</span>
          </div>
          <div class="profile-body">
            <div class="profile-stats">
              <div class="profile-stat"><b data-profile-done>0</b><span>Tugatilgan dars</span></div>
              <div class="profile-stat"><b data-profile-left>${TOTAL_LESSONS}</b><span>Qolgan dars</span></div>
              <div class="profile-stat"><b data-profile-score>—</b><span>Imtihon natijasi</span></div>
            </div>
            <div class="profile-progress">
              <div class="profile-progress__head">
                <span data-profile-course-title>Python kursi</span>
                <span data-profile-percent>0%</span>
              </div>
              <div class="profile-progress__bar"><i data-profile-bar style="width:0%"></i></div>
            </div>
            <div class="profile-exam">
              <span class="profile-exam__icon" data-profile-exam-icon>${ICONS.trophy}</span>
              <div>
                <b data-profile-exam-title>Yakuniy imtihon</b>
                <span data-profile-exam-sub>Hali topshirilmagan</span>
              </div>
            </div>
            <div class="profile-courses" data-profile-courses></div>
            <div class="profile-actions">
              <a class="btn btn--primary btn--block" href="python.html" data-profile-continue>Kursni davom ettirish</a>
              <button class="btn btn--ghost btn--block" type="button" data-certificate="python" data-profile-cert hidden>Sertifikatni ko'rish</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  function certificateMarkup() {
    return `
      <div class="modal-layer" id="certificateModal" aria-hidden="true">
        <div class="modal modal--certificate" role="dialog" aria-modal="true" aria-label="Kurs sertifikati">
          <button class="modal__close" type="button" data-modal-close aria-label="Yopish">${ICONS.close}</button>
          <div class="cert-actions">
            <p>PDF sifatida saqlash uchun "Chop etish" oynasida "Saqlash (PDF)"ni tanlang.</p>
            <div class="cert-actions__buttons">
              <button class="btn btn--ghost btn--sm" type="button" data-modal-close>Yopish</button>
              <button class="btn btn--primary btn--sm" type="button" data-print-cert>Chop etish / PDF</button>
            </div>
          </div>
          <div class="certificate" id="certificateCard">
            <div class="certificate__watermark">&lt;/&gt;</div>
            <div class="certificate__top">
              <div class="certificate__brand">
                <span class="brand__mark">${logoGlyph()}</span>
                <b>Noldan</b>
              </div>
              <span class="certificate__id" data-cert-id>NL-PY-0000-000000</span>
            </div>
            <div class="certificate__body">
              <div class="certificate__eyebrow">Dasturlashni o'rganish platformasi</div>
              <div class="certificate__title">SERTIFIKAT</div>
              <div class="certificate__text">Ushbu sertifikat</div>
              <span class="certificate__name" data-cert-name>Foydalanuvchi</span>
              <p class="certificate__desc">uchun <b data-cert-course-title>“Python: noldan birinchi loyihagacha”</b> kursini muvaffaqiyatli tamomlaganligi va yakuniy imtihondan <b data-cert-score>0%</b> natija bilan o'tganligi uchun berildi.</p>
            </div>
            <div class="certificate__footer">
              <div class="certificate__meta">
                <b data-cert-date>—</b>
                <span>Berilgan sana</span>
              </div>
              <div class="certificate__seal">${ICONS.certificate}</div>
              <div class="certificate__sign">
                <strong>Noldan platformasi</strong>
                <span>Kurs muallifi</span>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function logoGlyph() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-5 6 5 6M16 6l5 6-5 6M14 4l-4 16"/></svg>';
  }

  let authMode = "login";

  function injectModals() {
    if (!$("#authModal")) {
      document.body.insertAdjacentHTML("beforeend", authMarkup());
    }
    if (!$("#profileModal")) {
      document.body.insertAdjacentHTML("beforeend", profileMarkup());
    }
    if (!$("#certificateModal")) {
      document.body.insertAdjacentHTML("beforeend", certificateMarkup());
    }
    bindAuthForms();
  }

  function setAuthMode(mode) {
    authMode = mode === "register" ? "register" : "login";
    const modal = $("#authModal");
    if (!modal) return;
    $$("[data-auth-tab]", modal).forEach((tab) => {
      const isActive = tab.getAttribute("data-auth-tab") === authMode;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    const loginForm = $("#loginForm");
    const registerForm = $("#registerForm");
    if (loginForm) loginForm.hidden = authMode !== "login";
    if (registerForm) registerForm.hidden = authMode !== "register";
    const title = $("#authTitle");
    const subtitle = $("#authSubtitle");
    if (title) title.textContent = authMode === "login" ? "Xush kelibsiz!" : "Hisob yarating";
    if (subtitle) {
      subtitle.textContent =
        authMode === "login"
          ? "O'rganishni davom ettirish uchun hisobingizga kiring."
          : "Bir daqiqada ro'yxatdan o'ting — bu mutlaqo bepul.";
    }
    hideAuthAlert();
    clearFormErrors(loginForm);
    clearFormErrors(registerForm);
    window.setTimeout(() => {
      const input = modal.querySelector(
        authMode === "login" ? "#loginEmail" : "#registerName"
      );
      if (input) input.focus({ preventScroll: true });
    }, 40);
  }

  function openAuth(mode) {
    injectModals();
    setAuthMode(mode || "login");
    openModal($("#authModal"));
  }

  function showAuthAlert(message) {
    const alert = $("[data-auth-alert]");
    if (!alert) return;
    alert.textContent = message;
    alert.classList.add("is-visible");
  }

  function hideAuthAlert() {
    const alert = $("[data-auth-alert]");
    if (!alert) return;
    alert.textContent = "";
    alert.classList.remove("is-visible");
  }

  function clearFormErrors(form) {
    if (!form) return;
    $$(".field", form).forEach((field) => {
      field.classList.remove("has-error");
      const error = $(".field__error", field);
      if (error) error.textContent = "";
    });
  }

  function setFieldError(input, message) {
    const field = input.closest(".field");
    if (!field) return;
    field.classList.add("has-error");
    const error = $(".field__error", field);
    if (error) error.textContent = message;
  }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function bindAuthForms() {
    const modal = $("#authModal");
    if (!modal || modal.dataset.bound === "true") return;
    modal.dataset.bound = "true";

    $$("[data-auth-tab]", modal).forEach((tab) => {
      tab.addEventListener("click", () =>
        setAuthMode(tab.getAttribute("data-auth-tab"))
      );
    });

    $$("[data-toggle-password]", modal).forEach((button) => {
      button.addEventListener("click", () => {
        const input = document.getElementById(
          button.getAttribute("data-toggle-password")
        );
        if (!input) return;
        const visible = input.type === "text";
        input.type = visible ? "password" : "text";
        button.innerHTML = visible ? ICONS.eye : ICONS.eyeOff;
        button.setAttribute(
          "aria-label",
          visible ? "Parolni ko'rsatish" : "Parolni yashirish"
        );
      });
    });

    modal.addEventListener("input", (event) => {
      if (event.target.matches("input")) {
        const field = event.target.closest(".field");
        if (field) {
          field.classList.remove("has-error");
          const error = $(".field__error", field);
          if (error) error.textContent = "";
        }
      }
    });

    const loginForm = $("#loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        hideAuthAlert();
        clearFormErrors(loginForm);
        const emailInput = $("#loginEmail");
        const passwordInput = $("#loginPassword");
        const email = normalizeEmail(emailInput.value);
        const password = passwordInput.value;
        let invalid = false;
        if (!EMAIL_RE.test(email)) {
          setFieldError(emailInput, "To'g'ri email manzil kiriting.");
          invalid = true;
        }
        if (!password) {
          setFieldError(passwordInput, "Parolni kiriting.");
          invalid = true;
        }
        if (invalid) return;

        const button = loginForm.querySelector('button[type="submit"]');
        button.classList.add("is-loading");
        button.disabled = true;
        try {
          const user = getUsers().find((item) => item.email === email);
          if (!user) {
            showAuthAlert("Bunday email bilan hisob topilmadi. Ro'yxatdan o'ting.");
            return;
          }
          const hash = await hashPassword(password);
          if (hash !== user.password) {
            showAuthAlert("Email yoki parol noto'g'ri. Qayta urinib ko'ring.");
            return;
          }
          setSession(user.email);
          adoptGuestProgress(user.email);
          renderAuthZones();
          updateDynamicUI();
          dispatchAuthChange();
          closeModal($("#authModal"));
          toast(`Xush kelibsiz, ${user.name.split(/\s+/)[0]}!`, "success");
          loginForm.reset();
        } finally {
          button.classList.remove("is-loading");
          button.disabled = false;
        }
      });
    }

    const registerForm = $("#registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        hideAuthAlert();
        clearFormErrors(registerForm);
        const nameInput = $("#registerName");
        const emailInput = $("#registerEmail");
        const passwordInput = $("#registerPassword");
        const confirmInput = $("#registerConfirm");
        const terms = $("#registerTerms");
        const name = nameInput.value.trim();
        const email = normalizeEmail(emailInput.value);
        const password = passwordInput.value;
        const confirm = confirmInput.value;
        let invalid = false;

        if (name.length < 2) {
          setFieldError(nameInput, "Ismingizni kiriting (kamida 2 ta harf).");
          invalid = true;
        }
        if (!EMAIL_RE.test(email)) {
          setFieldError(emailInput, "To'g'ri email manzil kiriting.");
          invalid = true;
        } else if (getUsers().some((item) => item.email === email)) {
          setFieldError(emailInput, "Bu email allaqachon ro'yxatdan o'tgan.");
          invalid = true;
        }
        if (password.length < 6) {
          setFieldError(passwordInput, "Parol kamida 6 ta belgidan iborat bo'lsin.");
          invalid = true;
        }
        if (confirm !== password) {
          setFieldError(confirmInput, "Parollar mos kelmadi.");
          invalid = true;
        }
        if (!terms.checked) {
          showAuthAlert("Davom etish uchun shartni tasdiqlang.");
          invalid = true;
        }
        if (invalid) return;

        const button = registerForm.querySelector('button[type="submit"]');
        button.classList.add("is-loading");
        button.disabled = true;
        try {
          const password_hash = await hashPassword(password);
          const users = getUsers();
          users.push({
            name,
            email,
            password: password_hash,
            createdAt: new Date().toISOString(),
          });
          saveUsers(users);
          setSession(email);
          adoptGuestProgress(email);
          renderAuthZones();
          updateDynamicUI();
          dispatchAuthChange();
          closeModal($("#authModal"));
          toast(`Hisob yaratildi. Xush kelibsiz, ${name.split(/\s+/)[0]}!`, "success");
          registerForm.reset();
        } finally {
          button.classList.remove("is-loading");
          button.disabled = false;
        }
      });
    }

    const guest = $("[data-auth-guest]", modal);
    if (guest) {
      guest.addEventListener("click", () => {
        closeModal(modal);
        toast("Mehmon sifatida davom etyapsiz. Progress shu brauzerda saqlanadi.");
      });
    }
  }

  function logout() {
    const user = getUser();
    setSession(null);
    renderAuthZones();
    updateDynamicUI();
    dispatchAuthChange();
    closeAllModals();
    toast(
      user ? `${user.name.split(/\s+/)[0]}, hisobdan chiqdingiz.` : "Hisobdan chiqdingiz."
    );
  }

  /* ---------------------------------------------------------------------
     Profile
     --------------------------------------------------------------------- */
  function openProfile() {
    const user = getUser();
    if (!user) {
      openAuth("login");
      return;
    }
    injectModals();
    const activeId = getActiveCourse();
    const meta = getCourse(activeId);
    const progress = getProgress(meta.id);
    const count = getCompletedCount(progress, meta.id);
    const percent = Math.round((count / meta.total) * 100);
    const exam = progress.exam;
    const passed = Boolean(exam && exam.passed);
    const passPercent = Math.round((meta.passScore / meta.examTotal) * 100);

    const name = $("#profileModal [data-profile-name]");
    if (name) name.textContent = user.name;
    const email = $("#profileModal [data-profile-email]");
    if (email) email.textContent = user.email;
    const avatar = $("#profileModal [data-profile-avatar]");
    if (avatar) avatar.textContent = initials(user.name);
    const since = $("#profileModal [data-profile-since]");
    if (since) since.textContent = formatDateUz(user.createdAt);
    const done = $("#profileModal [data-profile-done]");
    if (done) done.textContent = String(count);
    const left = $("#profileModal [data-profile-left]");
    if (left) left.textContent = String(Math.max(0, meta.total - count));
    const score = $("#profileModal [data-profile-score]");
    if (score) {
      score.textContent = exam
        ? `${Math.round((exam.score / exam.total) * 100)}%`
        : "—";
    }
    const courseTitle = $("#profileModal [data-profile-course-title]");
    if (courseTitle) courseTitle.textContent = `${meta.title} kursi`;
    const percentNode = $("#profileModal [data-profile-percent]");
    if (percentNode) percentNode.textContent = `${percent}%`;
    const bar = $("#profileModal [data-profile-bar]");
    if (bar) bar.style.width = `${percent}%`;
    const continueBtn = $("#profileModal [data-profile-continue]");
    if (continueBtn) continueBtn.href = continueLink(meta.id);

    const examTitle = $("#profileModal [data-profile-exam-title]");
    const examSub = $("#profileModal [data-profile-exam-sub]");
    const examIcon = $("#profileModal [data-profile-exam-icon]");
    if (examTitle) {
      examTitle.textContent = passed ? "Yakuniy imtihon: o'tildi" : "Yakuniy imtihon";
    }
    if (examSub) {
      examSub.textContent = exam
        ? `${exam.score}/${exam.total} to'g'ri javob · ${
            passed ? "Sertifikat ochilgan" : `${passPercent}% kerak`
          }`
        : `Hali topshirilmagan. ${meta.examId}-darsda imtihonni yeching.`;
    }
    if (examIcon) examIcon.classList.toggle("is-passed", passed);

    const certBtn = $("#profileModal [data-profile-cert]");
    if (certBtn) {
      certBtn.hidden = !passed;
      certBtn.setAttribute("data-certificate", meta.id);
    }

    const coursesHolder = $("#profileModal [data-profile-courses]");
    if (coursesHolder) {
      coursesHolder.innerHTML =
        '<span class="profile-courses__label">Boshqa kurslar</span>' +
        Object.values(COURSES)
        .filter((course) => course.id !== meta.id)
        .map((course) => {
          const itemProgress = getProgress(course.id);
          const itemCount = getCompletedCount(itemProgress, course.id);
          const itemPercent = Math.round((itemCount / course.total) * 100);
          return `<a class="profile-course" href="${continueLink(course.id)}" data-course-link="${course.id}">
            <span class="profile-course__top">
              <b>${escapeHtml(course.title)}</b>
              <span>${itemCount}/${course.total} dars · ${itemPercent}%</span>
            </span>
            <span class="profile-course__bar"><i style="width:${itemPercent}%"></i></span>
          </a>`;
        })
        .join("");
    }

    openModal($("#profileModal"));
  }

  /* ---------------------------------------------------------------------
     Certificate
     --------------------------------------------------------------------- */
  function makeCertificateId(email, courseId) {
    let hash = 0;
    const meta = getCourse(courseId);
    const value = String(email || "noldan") + ":" + meta.id;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
    }
    return `NL-${meta.certificateCode}-${new Date().getFullYear()}-${hash
      .toString(36)
      .toUpperCase()
      .padStart(6, "0")
      .slice(0, 6)}`;
  }

  function openCertificate(courseId) {
    const user = getUser();
    if (!user) {
      toast("Sertifikatni ochish uchun avval ro'yxatdan o'ting.", "error");
      openAuth("register");
      return;
    }
    const meta = getCourse(courseId || getActiveCourse());
    const progress = getProgress(meta.id);
    if (!progress.exam || !progress.exam.passed) {
      toast("Sertifikat uchun yakuniy imtihondan o'ting.", "error");
      return;
    }
    injectModals();
    const nameNode = $("#certificateModal [data-cert-name]");
    if (nameNode) nameNode.textContent = user.name;
    const scoreNode = $("#certificateModal [data-cert-score]");
    if (scoreNode) {
      scoreNode.textContent = `${Math.round(
        (progress.exam.score / progress.exam.total) * 100
      )}%`;
    }
    const titleNode = $("#certificateModal [data-cert-course-title]");
    if (titleNode) {
      titleNode.textContent = `“${meta.title}: noldan amaliyotgacha”`;
    }
    const dateNode = $("#certificateModal [data-cert-date]");
    if (dateNode) dateNode.textContent = formatDateUz(progress.exam.date);
    const idNode = $("#certificateModal [data-cert-id]");
    if (idNode) idNode.textContent = makeCertificateId(user.email, meta.id);
    const modal = $("#certificateModal .modal--certificate");
    if (modal) modal.setAttribute("aria-label", `${meta.title} kursi sertifikati`);
    openModal($("#certificateModal"));
  }

  function printCertificate() {
    if (!getUser()) {
      toast("Sertifikat uchun tizimga kiring.", "error");
      return;
    }
    const cleanup = () => document.body.classList.remove("printing-cert");
    document.body.classList.add("printing-cert");
    window.addEventListener("afterprint", cleanup, { once: true });
    window.print();
    window.setTimeout(cleanup, 1500);
  }

  /* ---------------------------------------------------------------------
     Code syntax highlighting
     --------------------------------------------------------------------- */
  const PY_KEYWORDS = new Set(
    "and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield match case".split(
      " "
    )
  );
  const PY_BUILTINS = new Set(
    "print len range int float str bool list dict tuple set type input abs round min max sum sorted reversed enumerate zip open self super isinstance help".split(
      " "
    )
  );

  function highlightPython(code) {
    const tokenRe =
      /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[^\n]*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b)/g;
    let output = "";
    let lastIndex = 0;
    let match;
    while ((match = tokenRe.exec(code)) !== null) {
      output += escapeHtml(code.slice(lastIndex, match.index));
      const token = match[0];
      let className = "";
      if (token.charAt(0) === "#") {
        className = "tok-c";
      } else if (/^["']/.test(token)) {
        className = "tok-s";
      } else if (/^\d/.test(token)) {
        className = "tok-n";
      } else if (token === "True" || token === "False" || token === "None") {
        className = "tok-b";
      } else if (PY_KEYWORDS.has(token)) {
        className = "tok-k";
      } else if (PY_BUILTINS.has(token)) {
        className = "tok-b";
      } else {
        const rest = code.slice(match.index + token.length);
        if (/^\s*\(/.test(rest)) className = "tok-f";
      }
      output += className
        ? `<span class="${className}">${escapeHtml(token)}</span>`
        : escapeHtml(token);
      lastIndex = tokenRe.lastIndex;
    }
    output += escapeHtml(code.slice(lastIndex));
    return output;
  }

  function highlightAll(scope) {
    $$('code[data-highlight="python"]', scope).forEach((node) => {
      if (node.dataset.highlighted === "true") return;
      const source = node.textContent;
      node.innerHTML = highlightPython(source);
      node.dataset.highlighted = "true";
    });
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      /* fall through */
    }
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const success = document.execCommand("copy");
      area.remove();
      return success;
    } catch (error) {
      return false;
    }
  }

  /* ---------------------------------------------------------------------
     Global interactions
     --------------------------------------------------------------------- */
  function initHeader() {
    const header = $(".site-header");
    const toggle = $(".menu-toggle");
    if (toggle && header) {
      toggle.addEventListener("click", () => {
        const open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      $$(".main-nav a").forEach((link) => {
        link.addEventListener("click", () => {
          header.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
    if (header) {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && header) {
        header.classList.remove("nav-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initDelegatedClicks() {
    document.addEventListener("click", (event) => {
      const notifyTrigger = event.target.closest("[data-course-notify]");
      if (notifyTrigger) {
        event.preventDefault();
        toast(
          "Bu bo'lim tez kunda ochiladi. Python, JavaScript, HTML & CSS, C++ va SQL kurslari allaqachon ochiq.",
          "info"
        );
        return;
      }

      const courseLink = event.target.closest("[data-course-link]");
      if (courseLink) {
        setActiveCourse(courseLink.getAttribute("data-course-link"));
      }

      const authTrigger = event.target.closest("[data-open-auth]");
      if (authTrigger) {
        event.preventDefault();
        openAuth(authTrigger.getAttribute("data-open-auth"));
        return;
      }

      const profileTrigger = event.target.closest("[data-profile]");
      if (profileTrigger) {
        event.preventDefault();
        openProfile();
        return;
      }

      const certificateTrigger = event.target.closest("[data-certificate]");
      if (certificateTrigger) {
        event.preventDefault();
        openCertificate(certificateTrigger.getAttribute("data-certificate"));
        return;
      }

      if (event.target.closest("[data-print-cert]")) {
        event.preventDefault();
        printCertificate();
        return;
      }

      if (event.target.closest("[data-logout]")) {
        event.preventDefault();
        logout();
        return;
      }

      const menuToggle = event.target.closest("[data-user-menu-toggle]");
      const userMenu = event.target.closest("[data-user-menu]");
      $$(".user-menu.is-open").forEach((menu) => {
        if (menuToggle && menu.contains(menuToggle)) return;
        if (userMenu && menu === userMenu && !event.target.closest(".user-dropdown__item")) {
          return;
        }
        menu.classList.remove("is-open");
        const button = menu.querySelector("[data-user-menu-toggle]");
        if (button) button.setAttribute("aria-expanded", "false");
      });
      if (menuToggle) {
        const menu = menuToggle.closest("[data-user-menu]");
        const open = menu.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
        return;
      }

      if (event.target.closest(".user-dropdown__item")) {
        const menu = event.target.closest(".user-menu");
        if (menu) menu.classList.remove("is-open");
      }
    });
  }

  function init() {
    injectModals();
    renderAuthZones();
    updateDynamicUI();
    initHeader();
    initDelegatedClicks();
    highlightAll();
    $$("[data-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });

    document.addEventListener("noldan:authchange", () => {
      renderAuthZones();
      updateDynamicUI();
    });

    window.addEventListener("storage", (event) => {
      if (!event.key) return;
      if (
        event.key === KEYS.session ||
        event.key === KEYS.users ||
        event.key.startsWith(KEYS.progressPrefix)
      ) {
        renderAuthZones();
        updateDynamicUI();
        dispatchAuthChange();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.Noldan = {
    TOTAL_LESSONS,
    COURSES,
    KEYS,
    $,
    $$,
    escapeHtml,
    initials,
    formatDateUz,
    getUser,
    getCourse,
    getProgress,
    saveProgress,
    completeLesson,
    saveQuizResult,
    resetCourseProgress,
    getCompletedCount,
    nextLessonId,
    mergeProgress,
    setActiveCourse,
    getActiveCourse,
    continueLink,
    toast,
    openAuth,
    openProfile,
    openCertificate,
    openModal,
    closeModal,
    closeAllModals,
    updateDynamicUI,
    highlightAll,
    highlightPython,
    copyText,
    dispatchAuthChange,
  };
})();
