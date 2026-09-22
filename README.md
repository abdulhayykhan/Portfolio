# Abdul Hayy Khan — Engineering Portfolio

[![GitHub Pages Deployment](https://github.com/abdulhayykhan/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/abdulhayykhan/Portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Demo-abdulhayykhan.github.io%2FPortfolio-0e7490?style=flat-square)](https://abdulhayykhan.github.io/Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Tech Stack](https://img.shields.io/badge/Stack-Vanilla%20HTML5%20%7C%20CSS3%20%7C%20ES6%2B-blueviolet?style=flat-square)](#technology-stack--architectural-philosophy)

Production-grade, zero-dependency personal portfolio and technical showcase for **Abdul Hayy Khan** (BS Artificial Intelligence, Dawood University of Engineering & Technology). Engineered specifically for high runtime efficiency, resilience, and accessibility using native web technologies deployed via automated continuous deployment on **GitHub Pages**.

---

## Executive Summary

This repository houses the personal portfolio, engineering catalog, and verified credentials of Abdul Hayy Khan. Rather than employing heavy client-side JavaScript frameworks or compilation toolchains, the application utilizes a pure **Vanilla Web Standards (HTML5 / CSS3 / ES6+)** architecture. 

The application implements a decoupled, data-driven presentation layer, sub-millisecond client-side search and multi-facet filtering, an interactive semantic experience timeline, and hardware-accelerated cyber-terminal interface aesthetics.

---

## Technology Stack & Architectural Philosophy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CLIENT RUNTIME LAYER                            │
│                                                                        │
│   ┌─────────────────────┐  ┌─────────────────────┐  ┌───────────────┐  │
│   │     index.html      │  │    css/style.css    │  │  js/main.js   │  │
│   │ (Semantic Structure)│  │(Cyber-Terminal Vars)│  │ (UI Engine)   │  │
│   └──────────┬──────────┘  └──────────┬──────────┘  └───────┬───────┘  │
│              │                        │                     │          │
│              ▼                        ▼                     ▼          │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │            DATA LAYER: js/projects-data.js (SSOT)               │  │
│   │        Strict Typed Objects • Curated Tier 1/2/3 Projects       │  │
│   └─────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼ Deployment Pipeline
┌────────────────────────────────────────────────────────────────────────┐
│   GitHub Actions (`.github/workflows/deploy.yml`) ➔ GitHub Pages CDN   │
└────────────────────────────────────────────────────────────────────────┘
```

### 1. Zero Build-Step Architecture
* **Elimination of Dependencies**: Operates with zero external npm packages, compilers, bundlers, or transpilations. This guarantees deterministic behavior, zero vulnerability surface area from supply-chain risks, and indefinite longevity.
* **Instant Delivery**: Raw static assets are served directly from GitHub's global edge CDN, achieving sub-second Largest Contentful Paint (LCP) and zero Time-to-Interactive (TTI) penalty.

### 2. Decoupled Single Source of Truth (SSOT)
* Project catalog data is abstracted into `js/projects-data.js`, strictly separating content schema from DOM presentation logic.
* Dynamic rendering via `js/main.js` injects accessibility-compliant DOM nodes, while ensuring runtime re-computation of dataset metrics (e.g., active repository counts, filtered visibility badges).

### 3. Progressive Enhancement & Accessibility
* Valid HTML5 semantic hierarchy (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>`).
* Compliant with WCAG 2.1 contrast ratios across both dark and light high-contrast terminal color palettes.
* Strict media query enforcement for `prefers-reduced-motion: reduce` and non-fine pointer environments.

---

## Directory & File Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Declarative GitHub Actions Pages CI/CD workflow
├── css/
│   └── style.css                 # Modular Cyber-Terminal design system & design tokens
├── js/
│   ├── projects-data.js          # Single Source of Truth: Curated project definitions
│   └── main.js                   # Application lifecycle, DOM renderer, search/filtering, tilt
├── .gitignore                    # Local environment exclusion rules
├── .nojekyll                     # Directs GitHub Pages to bypass Jekyll transformation
├── Abdul_Hayy_Khan_Resume.pdf    # Canonical professional curriculum vitae
├── favicon.ico                   # Multi-resolution ICO asset (16px, 32px, 48px, 64px)
├── icon.svg                      # Terminal monogram brand vector icon
├── index.html                    # Root semantic markup, metadata headers, pre-hydration script
└── README.md                     # Comprehensive project and architecture documentation
```

---

## Core Systems & Implementation Details

### 1. Dynamic Project Presentation & Filtering Engine
The project grid (`#projects-grid`) renders dynamically from `js/projects-data.js`. Each entry specifies title, descriptive abstract, primary technology stack, metadata search tags, external repository URL, and flagship tier classification.

```javascript
// Data Schema (js/projects-data.js)
{
  title: "ResumRank-AI",
  description: "spaCy NLP resume ranker matching candidates to job requirements...",
  language: "python",
  tags: ["ai", "ml", "nlp", "spacy", "hiring"],
  githubUrl: "https://github.com/abdulhayykhan/ResumRank-AI",
  featured: true
}
```

* **Search Engine**: Real-time multi-attribute substring token matching indexing `data-title`, `data-desc`, `data-lang`, and `data-tags` with sub-10ms response times.
* **Category Filtering**: Deterministic facet filtering across primary languages and architectural domains (`python`, `typescript`, `ai / ml`, `backend`).
* **Visual Tiering**: Tier 1 projects automatically receive `.project-card--flagship` styling with gold status indicators (`.chip--flagship`) and border luminescence.

### 2. Experience & Professional Chronology Module
Professional experience is structured within a responsive, full-width terminal console featuring semantic HTML5 `<details>` and `<summary>` components with CSS-driven hardware-accelerated indicator animations:
* **Alkhidmat Foundation Pakistan** (`Jul 2026 – Sep 2026`): Technical ownership within the Emergency Blood Response Platform (QATRA) 6-person initiative; FastAPI, Supabase, Leaflet geospatial mapping, OCR processing, cryptographic validation pipelines.
* **FlyRank** (`Jun 2026 – Sep 2026`): ML Engineering Internship Capstone focused on search intelligence and content decay scoring (Random Forest, Precision@50: 0.740 vs 0.340 baseline).
* **DevelopersHub** (`Jul 2025 – Sep 2025`): Production task management systems; FastAPI, Flask, SQLAlchemy, JWT token rotation, WebSockets.
* **CodeAlpha** (`Jul 2025 – Aug 2025`): Python automation suites, context-aware chatbot tooling, and cryptographic desktop utilities.

### 3. Dual-Theme Engine with Anti-FOUC Guarantee
To prevent Flash of Unstyled Content (FOUC), an inline critical evaluation script executes synchronously in the document `<head>` prior to visual paint:
```html
<script>
  (function () {
    try {
      var saved = localStorage.getItem("portfolio-theme");
      var theme = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {}
  })();
</script>
```
Themes leverage native CSS Custom Properties (`[data-theme="dark"]` / `[data-theme="light"]`) controlling luminosity, ambient luminescence, scanline opacities, and high-contrast typography.

### 4. Hardware-Accelerated 3D Micro-Interactions
Card components utilize CSS 3D perspective transforms calculated via pointer position tracking:
* Restricted strictly to fine-pointer, mouse-driven desktop devices via `(hover: hover) and (pointer: fine)`.
* Updates CSS properties `--tilt-x`, `--tilt-y`, and luminescence positions on dynamic event delegation boundaries.
* Automatically suspended when `prefers-reduced-motion: reduce` is detected.

---

## Deployment & Continuous Integration (CI/CD)

Deployments are automated through GitHub Actions upon push events targeting the `main` branch.

### Workflow Pipeline (`.github/workflows/deploy.yml`)
1. **Source Synchronization**: `actions/checkout@v4` pulls repository state.
2. **Page Configuration**: `actions/configure-pages@v5` validates endpoint configuration.
3. **Artifact Staging**: `actions/upload-pages-artifact@v3` packages the static bundle with `.nojekyll` bypass.
4. **Edge Deployment**: `actions/deploy-pages@v4` pushes deployment directly to the GitHub Pages edge runtime with OIDC authentication token enforcement.

---

## Local Development & Operational Verification

Because the codebase contains no external runtime dependencies, any POSIX-compliant or Windows web server can serve the project.

### Method A: Python Static HTTP Server (Recommended)
```bash
# Execute from repository root
python -m http.server 8000
```
Navigate to: `http://localhost:8000`

### Method B: Node Static Runtime
```bash
npx serve .
```

### Method C: Visual Studio Code
Install the Live Server extension (`ritwickdey.liveserver`), right-click `index.html`, and select **Open with Live Server**.

### Automated Verification Command
To verify that all internal links, resources, and endpoints resolve with valid HTTP 200 responses:
```powershell
# In PowerShell:
$endpoints = @('/', '/css/style.css', '/js/main.js', '/js/projects-data.js', '/Abdul_Hayy_Khan_Resume.pdf', '/icon.svg', '/favicon.ico')
foreach ($ep in $endpoints) {
  $res = Invoke-WebRequest -Uri "http://localhost:8000$ep" -UseBasicParsing
  Write-Host "$ep -> $($res.StatusCode)"
}
```

---

## Provenance & Attribution

* **Author**: Abdul Hayy Khan
* **Institution**: Dawood University of Engineering & Technology (DUET), Karachi
* **Specialization**: Artificial Intelligence, Distributed Backend Systems, Applied ML
* **Professional Profiles**:
  * [GitHub Profile](https://github.com/abdulhayykhan)
  * [Hugging Face Models & Spaces](https://huggingface.co/abdulhayykhan)
  * [LinkedIn Network](https://www.linkedin.com/in/abdulhayykhan/)
  * [Kaggle Competitions](https://kaggle.com/abdulhayykhan)
* **Direct Communication**: `abdulhayykhan.1@gmail.com`

---

## License

This project is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).