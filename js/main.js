/**
 * Cyber-Terminal Vanilla JavaScript
 * Author: Abdul Hayy Khan
 * Features: Theme toggle, 3D pointer tilt, live search & category filter
 */

(function () {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function getPreferredTheme() {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // --------------------------------------------------------------------------
  // 2. 3D Card Tilt on Pointer Devices
  // --------------------------------------------------------------------------
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (finePointer.matches && !reducedMotion.matches) {
    document.addEventListener("mousemove", function (e) {
      const card = e.target.closest(".tilt-card");
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      const relativeY = (e.clientY - rect.top) / rect.height;

      const clampedX = Math.min(1, Math.max(0, relativeX));
      const clampedY = Math.min(1, Math.max(0, relativeY));

      const rotateY = ((clampedX - 0.5) * 10).toFixed(2);
      const rotateX = ((0.5 - clampedY) * 8).toFixed(2);

      card.style.setProperty("--tilt-x", `${rotateX}deg`);
      card.style.setProperty("--tilt-y", `${rotateY}deg`);
      card.style.setProperty("--tilt-z", "12px");
      card.style.setProperty("--tilt-scale", "1.015");
      card.style.setProperty("--tilt-glow-x", `${(clampedX * 100).toFixed(1)}%`);
      card.style.setProperty("--tilt-glow-y", `${(clampedY * 100).toFixed(1)}%`);
      card.setAttribute("data-tilt-active", "true");
    });

    document.addEventListener("mouseout", function (e) {
      const card = e.target.closest(".tilt-card");
      if (!card) return;

      // Check if mouse left the card completely
      if (!card.contains(e.relatedTarget)) {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--tilt-z", "0px");
        card.style.setProperty("--tilt-scale", "1");
        card.removeAttribute("data-tilt-active");
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Live Project Search & Filter
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById("project-search");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const countBadge = document.getElementById("project-count-badge");
  const noResults = document.getElementById("no-results");

  let currentCategory = "all";
  let currentSearch = "";

  function filterProjects() {
    let visibleCount = 0;
    const query = currentSearch.toLowerCase().trim();

    projectCards.forEach(function (card) {
      const title = (card.getAttribute("data-title") || "").toLowerCase();
      const desc = (card.getAttribute("data-desc") || "").toLowerCase();
      const lang = (card.getAttribute("data-lang") || "").toLowerCase();
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();

      const matchesCategory =
        currentCategory === "all" ||
        lang === currentCategory ||
        tags.includes(currentCategory);

      const matchesSearch =
        !query ||
        title.includes(query) ||
        desc.includes(query) ||
        lang.includes(query) ||
        tags.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (countBadge) {
      countBadge.textContent = `showing: ${visibleCount} / ${projectCards.length} repos`;
    }

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      currentSearch = e.target.value;
      filterProjects();
    });
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = (btn.getAttribute("data-filter") || "all").toLowerCase();
      filterProjects();
    });
  });

  // Initial sync
  applyTheme(getPreferredTheme());
})();
