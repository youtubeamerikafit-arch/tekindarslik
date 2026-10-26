/* PythonRunner — main-thread manager for the Pyodide worker */
(function () {
  "use strict";

  const RUN_TIMEOUT = 10000;

  const PythonRunner = {
    worker: null,
    ready: false,
    loadingPromise: null,
    activeRun: null,
    runCounter: 0,

    isReady() {
      return this.ready;
    },

    ensure(onStatus) {
      if (this.ready) return Promise.resolve();
      if (this.loadingPromise) {
        if (onStatus) onStatus("loading");
        return this.loadingPromise;
      }

      if (onStatus) onStatus("loading");

      this.loadingPromise = new Promise((resolve, reject) => {
        let worker;
        try {
          worker = new Worker("assets/js/pyodide-worker.js");
        } catch (error) {
          this.loadingPromise = null;
          reject(
            Object.assign(
              new Error(
                "Python muhitini ishga tushirib bo'lmadi. Saytni lokal server orqali oching."
              ),
              { code: "worker" }
            )
          );
          return;
        }

        this.worker = worker;
        let settled = false;

        const fail = (message) => {
          if (settled) return;
          settled = true;
          this.ready = false;
          this.loadingPromise = null;
          try {
            worker.terminate();
          } catch (error) {
            /* noop */
          }
          this.worker = null;
          reject(Object.assign(new Error(message), { code: "init" }));
        };

        worker.onmessage = (event) => {
          const data = event.data || {};
          if (data.type === "ready") {
            if (settled) return;
            settled = true;
            this.ready = true;
            resolve();
            return;
          }
          if (data.type === "init-error") {
            fail(
              data.message ||
                "Python muhitini yuklab bo'lmadi. Internet aloqasini tekshiring."
            );
            return;
          }
          this.handleResultMessage(data);
        };

        worker.onerror = () => {
          if (!settled) {
            fail(
              "Python muhiti yuklanishida xato yuz berdi. Sahifani yangilab, qayta urinib ko'ring."
            );
            return;
          }
          this.failActive("Python muhitida kutilmagan xato yuz berdi.");
          this.reset();
        };
      });

      return this.loadingPromise;
    },

    handleResultMessage(data) {
      if (data.type !== "result" || !this.activeRun) return;
      if (data.id !== this.activeRun.id) return;
      const active = this.activeRun;
      this.activeRun = null;
      window.clearTimeout(active.timer);
      active.resolve({
        output: String(data.output || ""),
        error: String(data.error || ""),
        duration: Number(data.duration) || 0,
      });
    },

    failActive(message, code) {
      if (!this.activeRun) return;
      const active = this.activeRun;
      this.activeRun = null;
      window.clearTimeout(active.timer);
      active.reject(Object.assign(new Error(message), { code: code || "runtime" }));
    },

    reset() {
      if (this.worker) {
        try {
          this.worker.terminate();
        } catch (error) {
          /* noop */
        }
      }
      this.worker = null;
      this.ready = false;
      this.loadingPromise = null;
      this.failActive("Python muhiti qayta ishga tushirildi.", "reset");
    },

    async run(code, stdin, onStatus) {
      if (this.activeRun) {
        throw Object.assign(new Error("Hozir kod bajarilmoqda."), {
          code: "busy",
        });
      }

      await this.ensure(onStatus);

      if (onStatus) onStatus("running");

      return new Promise((resolve, reject) => {
        const id = ++this.runCounter;
        const worker = this.worker;
        if (!worker) {
          reject(new Error("Python muhiti mavjud emas."));
          return;
        }

        const timer = window.setTimeout(() => {
          if (!this.activeRun || this.activeRun.id !== id) return;
          this.failActive(
            "Kod 10 soniya ichida tugamadi. Cheksiz tsikl bo'lishi mumkin — muhit qayta ishga tushirildi.",
            "timeout"
          );
          this.reset();
        }, RUN_TIMEOUT);

        this.activeRun = { id, resolve, reject, timer };

        try {
          worker.postMessage({ type: "run", id, code, stdin });
        } catch (error) {
          window.clearTimeout(timer);
          this.activeRun = null;
          reject(
            new Error("Kodni Python muhitiga yuborib bo'lmadi. Qayta urinib ko'ring.")
          );
        }
      });
    },
  };

  window.PythonRunner = PythonRunner;
})();
