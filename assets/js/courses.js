/* Course catalogue filters */
(function () {
  "use strict";

  function initFilters() {
    const buttons = Array.from(document.querySelectorAll("[data-filter]"));
    const cards = Array.from(document.querySelectorAll("[data-course-grid] [data-category]"));
    const countLabel = document.querySelector("[data-filter-count]");
    if (!buttons.length || !cards.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });

        let visible = 0;
        cards.forEach((card) => {
          const matches =
            filter === "all" || card.getAttribute("data-category") === filter;
          card.classList.toggle("is-hidden", !matches);
          if (matches) visible += 1;
        });

        if (countLabel) {
          countLabel.textContent = `${visible} ta kurs`;
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initFilters);
})();
