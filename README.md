# Abdul Hayy Khan — Developer Portfolio

Personal developer portfolio showcasing 50+ AI engineering, backend, and full-stack projects. Built with zero-dependency **Vanilla HTML5, CSS3, and minimal JavaScript**, styled with a signature cyber-terminal aesthetic, and ready for instant deployment on **GitHub Pages**.

---

## ⚡ Tech Stack

- **HTML5**: Semantic, accessible markup with OpenGraph and Twitter Card social metadata.
- **CSS3**: Pure custom CSS with custom properties (`var()`), dark/light cyber-terminal theming, scanlines, glow effects, and modern CSS Grid/Flexbox.
- **Vanilla JavaScript**: Lightweight, dependency-free script (`~5 KB`) handling instant dark/light mode toggling, 3D card perspective tilt, and real-time project searching and category filtering.
- **Zero Build Step**: No node_modules, bundlers, or compilation required.

---

## ✨ Features

- **Cyber-Terminal Theme**: Dark/light mode with CRT scanlines, neon glowing borders, and retro status bars.
- **46 Curated Public Projects**: Includes ML models, Agentic AI, FastAPI backends, mobile apps (Kotlin/Flutter), and full-stack platforms.
- **Real-Time Project Search & Filter**: Instant client-side search by title, description, or technology category (Python, TypeScript, Kotlin, AI/ML, Backend).
- **Interactive 3D Perspective Tilt**: Fine-pointer desktop card hover effects (automatically disabled for touch devices and users who prefer reduced motion).
- **Direct Resume Download**: [`Abdul_Hayy_Khan_Resume.pdf`](Abdul_Hayy_Khan_Resume.pdf) downloadable directly.
- **GitHub Pages Ready**: Native `.nojekyll` configuration and GitHub Actions automated deployment workflow.

---

## 🚀 Local Preview

You can run the portfolio locally using any static web server:

### Using Python:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000).

### Or using Node.js / NPX:
```bash
npx serve .
```

### Or using VS Code Live Server:
Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deployment to GitHub Pages

This portfolio is configured to deploy directly to GitHub Pages:

### Method 1: Deploy from Branch (Recommended & Instant)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy vanilla portfolio to GitHub Pages"
   git push origin main
   ```
2. Go to your repository on GitHub:
   **Settings → Pages**
3. Under **Build and deployment → Source**, select **"Deploy from a branch"**.
4. Under **Branch**, select **`main`** and folder **`/ (root)`**, then click **Save**.
5. Your site will be live at `https://abdulhayykhan.github.io/Portfolio/` in under a minute!

### Method 2: GitHub Actions (Automated)
A pre-configured GitHub Actions workflow is located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Under **Settings → Pages → Source**, select **"GitHub Actions"** to have GitHub automatically publish on every push to `main`.

---

## 📂 Project Structure

```
Portfolio/
├── index.html                   # Main page: semantic layout, metadata, all 46 projects
├── css/
│   └── style.css                # Terminal styling, themes, animations, responsive grid
├── js/
│   └── main.js                  # Theme switcher, 3D pointer tilt, live search/filter
├── Abdul_Hayy_Khan_Resume.pdf   # Direct CV download
├── icon.svg & favicon.ico       # Site icons
├── .nojekyll                    # Disables Jekyll processing on GitHub Pages
└── .github/workflows/deploy.yml # GitHub Actions Pages deployment workflow
```

---

## 📄 License

Open-source and available under the [MIT License](LICENSE).

**Made with ❤️ by [Abdul Hayy Khan](https://www.linkedin.com/in/abdulhayykhan/)**