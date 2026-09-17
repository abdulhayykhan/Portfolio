/**
 * Cyber-Terminal Vanilla JavaScript
 * Author: Abdul Hayy Khan
 * Features: Theme toggle, 3D pointer tilt, data-driven project rendering,
 *           live search & category filter
 *
 * Depends on: js/projects-data.js  (must be loaded before this file)
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
  // 3. Data-Driven Project Rendering
  // --------------------------------------------------------------------------

  /**
   * Build a single project card element from a project data object.
   * @param {Object} project
   * @param {number} index  1-based display index
   * @returns {HTMLElement}
   */
  function buildProjectCard(project, index) {
    const article = document.createElement("article");
    article.className =
      "terminal-panel project-card tilt-card" + (project.featured ? " project-card--flagship" : "");
    article.setAttribute("data-title", project.title);
    article.setAttribute("data-lang", project.language);
    article.setAttribute("data-tags", project.tags.join(" "));
    article.setAttribute("data-desc", project.description);

    const indexStr = String(index).padStart(2, "0");
    const slugified = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const langLabel =
      project.language.charAt(0).toUpperCase() + project.language.slice(1);

    const flagshipBadge = project.featured
      ? `<span class="chip chip--flagship" aria-label="Flagship project">★ flagship</span>`
      : "";

    article.innerHTML = `
      <div class="project-card-header">
        <span class="project-repo-index">#${indexStr} repo://${slugified}</span>
        <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
        ${flagshipBadge}
      </div>
      <p class="project-card-desc">${escapeHtml(project.description)}</p>
      <div class="project-card-footer">
        <span class="chip">${escapeHtml(langLabel)}</span>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-repo-link">inspect repo →</a>
      </div>`;

    return article;
  }

  /** Minimal HTML escaping — avoids XSS in data strings */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /** Render all PROJECTS into #projects-grid and update the header counts. */
  function renderProjectGrid() {
    const grid = document.getElementById("projects-grid");
    if (!grid || typeof PROJECTS === "undefined") return;

    const total = PROJECTS.length;

    // Update header title count
    const titleEl = document.querySelector(".projects-title");
    if (titleEl) {
      titleEl.textContent = `all_projects --source github --count ${total}`;
    }

    // Render cards — featured first, then the rest (order already matches in array)
    PROJECTS.forEach(function (project, i) {
      grid.appendChild(buildProjectCard(project, i + 1));
    });

    // Insert "view all repos" link after cards
    const viewAll = document.createElement("div");
    viewAll.className = "view-all-repos";
    viewAll.innerHTML = `<a href="https://github.com/abdulhayykhan?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn-outline">
      view all ${50}+ repos on github →
    </a>`;
    grid.appendChild(viewAll);

    // Insert no-results message
    const noRes = document.createElement("div");
    noRes.id = "no-results";
    noRes.className = "no-results-msg";
    noRes.style.display = "none";
    noRes.innerHTML = "<p>&gt; No matching repositories found. Try another search query or filter.</p>";
    grid.appendChild(noRes);
  }

  // --------------------------------------------------------------------------
  // 4. Live Project Search & Filter
  // --------------------------------------------------------------------------
  let currentCategory = "all";
  let currentSearch = "";

  function filterProjects() {
    const projectCards = document.querySelectorAll(".project-card");
    const countBadge = document.getElementById("project-count-badge");
    const noResults = document.getElementById("no-results");
    const total = projectCards.length;

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
      countBadge.textContent = `showing: ${visibleCount} / ${total} repos`;
    }

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  function initSearch() {
    const searchInput = document.getElementById("project-search");
    const filterButtons = document.querySelectorAll(".filter-btn");

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

    // Set initial badge count
    filterProjects();
  }

  // --------------------------------------------------------------------------
  // 5. Init
  // --------------------------------------------------------------------------
  applyTheme(getPreferredTheme());
  renderProjectGrid();
  initSearch();
})();
