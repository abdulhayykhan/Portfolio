import { RESUME_PATH, techStack, type Project } from "@/app/lib/portfolio-data";

type ThemeProps = {
  isDark: boolean;
};

type HeroProps = ThemeProps & {
  stats: Array<{ label: string; value: string }>;
};

type ProjectsProps = ThemeProps & {
  projects: Project[];
};

type LanguageCardProps = ThemeProps & {
  languageBreakdown: Array<[string, number]>;
};

const elevatedCardClass = "terminal-panel terminal-card-3d";
const terminalPanelClass = "terminal-panel";
const terminalChipClass = "terminal-chip";
const terminalGlowClass = "terminal-text-glow";

export function BackgroundLayers({ isDark }: ThemeProps) {
  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 bg-size-[42px_42px] ${
          isDark
            ? "bg-[linear-gradient(rgba(111,255,128,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(111,255,128,0.08)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(2,132,199,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(2,132,199,0.09)_1px,transparent_1px)]"
        }`}
      />
      <div
        className={`pointer-events-none fixed inset-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top,rgba(109,255,102,0.13),transparent_58%)]"
            : "bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_55%)]"
        }`}
      />
      <div
        className={`pointer-events-none fixed inset-0 ${
          isDark
            ? "bg-[repeating-linear-gradient(0deg,rgba(143,255,126,0.02)_0px,rgba(143,255,126,0.02)_1px,transparent_1px,transparent_3px)]"
            : "bg-[repeating-linear-gradient(0deg,rgba(15,23,42,0.03)_0px,rgba(15,23,42,0.03)_1px,transparent_1px,transparent_3px)]"
        }`}
      />
    </>
  );
}

export function PortfolioNav({ isDark, onToggleTheme }: ThemeProps & { onToggleTheme: () => void }) {
  const navLinkClass = `rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition ${
    isDark
      ? "border-emerald-400/40 text-emerald-100 hover:border-lime-300/80 hover:bg-emerald-400/12"
      : "border-cyan-700/25 text-slate-700 hover:border-cyan-700/45 hover:bg-cyan-500/10"
  }`;

  return (
    <nav
      className={`terminal-reveal sticky top-3 z-20 rounded-xl border p-3 backdrop-blur ${elevatedCardClass} ${
        isDark ? "border-cyan-400/25 bg-[#06101b]/85" : "border-cyan-700/25 bg-white/85"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p
          className={`font-mono text-xs uppercase tracking-[0.22em] ${
            isDark ? "text-lime-300/80" : "text-cyan-700/80"
          }`}
        >
          terminal navigation
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <a href="#about" className={navLinkClass}>
            about
          </a>
          <a href="#projects" className={navLinkClass}>
            projects
          </a>
          <a href="#stack" className={navLinkClass}>
            stack
          </a>
          <a href="#contact" className={navLinkClass}>
            contact
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`ml-1 rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition ${
              isDark
                ? "border-emerald-400/55 text-lime-100 hover:border-lime-300 hover:bg-emerald-400/14"
                : "border-cyan-700/30 text-cyan-900 hover:border-cyan-700/50 hover:bg-cyan-600/10"
            }`}
          >
            <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection({ isDark, stats }: HeroProps) {
  return (
    <section
      className={`terminal-reveal overflow-hidden rounded-2xl border shadow-[0_0_0_1px_rgba(0,255,230,0.05),0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur ${elevatedCardClass} ${
        isDark ? "border-cyan-400/25 bg-[#050a13]/90" : "border-cyan-700/20 bg-white/90"
      }`}
    >
      <div
        className={`flex flex-wrap items-center gap-2 border-b px-4 py-3 font-mono text-xs ${
          isDark
            ? "border-emerald-400/35 bg-[#050a07] text-lime-200/95"
            : "border-cyan-700/20 bg-[#e8f6ff] text-cyan-900"
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        <span className={isDark ? "ml-3 text-lime-200/75" : "ml-3 text-cyan-900/70"}>
          abdulhayykhan@portfolio:~
        </span>
      </div>

      <div className="space-y-6 p-5 sm:p-6 md:p-10">
        <p
          className={`font-mono text-xs tracking-[0.22em] ${
            isDark ? "text-lime-300/85" : "text-cyan-700/80"
          }`}
        >
          DUET&apos;28 // BS ARTIFICIAL INTELLIGENCE
        </p>
        <h1
          className={`max-w-4xl font-mono text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-6xl ${terminalGlowClass} ${
            isDark ? "text-lime-100" : "text-slate-900"
          }`}
        >
          Abdul Hayy Khan
        </h1>
        <p
          className={`max-w-4xl font-mono text-base leading-8 md:text-lg ${
            isDark ? "text-lime-100/85" : "text-slate-700"
          }`}
        >
          <span className={isDark ? "text-lime-300" : "text-cyan-700"}>$</span>{" "}
          Building production-ready AI systems, backend tools, and practical full-stack products.
          Passionate about machine learning, NLP, computer vision, and architecture that scales.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-xl border p-4 sm:p-5 ${elevatedCardClass} ${
                isDark ? "border-cyan-400/15 bg-[#091423]" : "border-cyan-700/20 bg-cyan-50"
              }`}
            >
              <p
                className={`font-mono text-[11px] uppercase tracking-wider ${
                  isDark ? "text-lime-300/75" : "text-cyan-700/70"
                }`}
              >
                {stat.label}
              </p>
              <p
                className={`mt-2 font-mono text-sm ${
                  isDark ? "text-lime-100" : "text-slate-800"
                }`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <a
            href="https://github.com/abdulhayykhan"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-md border px-4 py-2 text-center font-mono text-xs uppercase tracking-wider transition sm:w-auto ${
              isDark
                ? "border-emerald-300/60 bg-emerald-400/10 text-lime-100 hover:bg-emerald-300/20"
                : "border-cyan-700/30 bg-cyan-500/10 text-slate-800 hover:bg-cyan-500/15"
            }`}
          >
            git clone profile
          </a>
          <a
            href="https://www.linkedin.com/in/abdulhayykhan/"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              isDark
                ? "border-emerald-400/40 text-lime-200 hover:border-lime-300 hover:text-lime-100"
                : "border-cyan-700/25 text-slate-700 hover:border-cyan-700/45 hover:text-slate-900"
            }`}
          >
            open linkedin
          </a>
          <a
            href="https://kaggle.com/abdulhayykhan"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              isDark
                ? "border-emerald-400/40 text-lime-200 hover:border-lime-300 hover:text-lime-100"
                : "border-cyan-700/25 text-slate-700 hover:border-cyan-700/45 hover:text-slate-900"
            }`}
          >
            open kaggle
          </a>
          <a
            href="mailto:abdulhayykhan.1@gmail.com"
            className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              isDark
                ? "border-emerald-400/40 text-lime-200 hover:border-lime-300 hover:text-lime-100"
                : "border-cyan-700/25 text-slate-700 hover:border-cyan-700/45 hover:text-slate-900"
            }`}
          >
            send email
          </a>
          <a
            href={RESUME_PATH}
            download
            className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              isDark
                ? "border-emerald-400/40 text-lime-200 hover:border-lime-300 hover:text-lime-100"
                : "border-cyan-700/25 text-slate-700 hover:border-cyan-700/45 hover:text-slate-900"
            }`}
          >
            download cv
          </a>
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ isDark }: ThemeProps) {
  const sectionTitleClass = `font-mono ${isDark ? "text-lime-100" : "text-slate-900"}`;
  const bodyTextClass = `font-mono leading-7 ${isDark ? "text-lime-100/80" : "text-slate-700"}`;
  const metaTextClass = `font-mono text-xs ${isDark ? "text-lime-300/75" : "text-cyan-700/75"}`;

  return (
    <section id="about" className="terminal-reveal grid gap-4 scroll-mt-24 md:grid-cols-2">
      <article
        className={`rounded-xl border p-4 sm:p-5 ${elevatedCardClass} ${
          isDark ? "border-cyan-400/20 bg-[#050d18]/80" : "border-cyan-700/20 bg-white/90"
        }`}
      >
        <p className={metaTextClass}>~/about/profile.md</p>
        <h2 className={`mt-2 text-xl ${sectionTitleClass}`}>about_me()</h2>
        <p className={`mt-3 text-base ${bodyTextClass}`}>
          I&apos;m a BS Artificial Intelligence student at Dawood University of Engineering &amp;
          Technology (DUET), Karachi, and a Python developer focused on backend engineering with
          FastAPI and Flask. I build intelligent systems and full-stack tools that solve real-world
          problems with practical impact.
        </p>
        <p className={`mt-3 text-base ${bodyTextClass}`}>
          Through internships at DevelopersHub and CodeAlpha, I&apos;ve built scalable solutions
          ranging from real-time collaboration platforms to secure vault systems, with hands-on
          experience in deployment, testing, and secure system design.
        </p>
      </article>
      <article
        className={`rounded-xl border p-4 sm:p-5 ${elevatedCardClass} ${
          isDark ? "border-cyan-400/20 bg-[#050d18]/80" : "border-cyan-700/20 bg-white/90"
        }`}
      >
        <p className={metaTextClass}>~/focus/areas.json</p>
        <h2 className={`mt-2 text-xl ${sectionTitleClass}`}>focus_areas[]</h2>
        <ul className={`mt-3 space-y-2 text-base ${bodyTextClass}`}>
          <li>&gt; Deeply interested in Machine Learning, Deep Learning, and applied AI</li>
          <li>&gt; Built and deployed production-grade apps with real backends and live users</li>
          <li>&gt; Currently exploring NLP, Computer Vision, and AI search algorithms</li>
          <li>&gt; Ask me about Python, FastAPI, AI/ML, and SQL</li>
        </ul>
      </article>
    </section>
  );
}

export function ExperienceSection({ isDark }: ThemeProps) {
  const sectionTitleClass = `font-mono ${isDark ? "text-lime-100" : "text-slate-900"}`;
  const bodyTextClass = `font-mono leading-7 ${isDark ? "text-lime-100/80" : "text-slate-700"}`;
  const metaTextClass = `font-mono text-xs ${isDark ? "text-lime-300/75" : "text-cyan-700/75"}`;

  return (
    <article
      className={`rounded-xl border p-4 sm:p-5 ${elevatedCardClass} ${
        isDark ? "border-cyan-400/20 bg-[#06111d]/80" : "border-cyan-700/20 bg-white/90"
      }`}
    >
      <p className={metaTextClass}>~/experience/internships.log</p>
      <h3 className={`mt-2 text-xl ${sectionTitleClass}`}>experience[]</h3>
      <ul className={`mt-3 space-y-3 text-base ${bodyTextClass}`}>
        <li>
          &gt; <strong>DevelopersHub Corporation</strong> - Software Development Intern (Jul 2025 -
          Sept 2025)
        </li>
        <li>
          &gt; Built Flask + SQLite and FastAPI + PostgreSQL systems with JWT auth, WebSockets,
          Jinja2, and cloud deployment on Railway/Render.
        </li>
        <li>
          &gt; <strong>CodeAlpha</strong> - Python Programming Intern (Jul 2025 - Aug 2025),
          delivering automation, chatbot, finance, and game-based Python projects.
        </li>
      </ul>
    </article>
  );
}

export function SpotlightCard({ isDark }: ThemeProps) {
  const sectionTitleClass = `font-mono ${isDark ? "text-lime-100" : "text-slate-900"}`;
  const bodyTextClass = `font-mono leading-7 ${isDark ? "text-lime-100/80" : "text-slate-700"}`;

  return (
    <article
      className={`rounded-xl border p-4 sm:p-5 ${elevatedCardClass} ${
        isDark
          ? "border-cyan-400/30 bg-linear-to-br from-cyan-500/12 to-transparent"
          : "border-cyan-700/25 bg-linear-to-br from-cyan-100 to-transparent"
      }`}
    >
      <p
        className={`font-mono text-xs uppercase tracking-[0.18em] ${
          isDark ? "text-lime-300/75" : "text-cyan-700/75"
        }`}
      >
        spotlight://resumrank-ai
      </p>
      <h3 className={`mt-2 text-xl ${sectionTitleClass}`}>NLP + Hiring Intelligence</h3>
      <p className={`mt-3 text-base ${bodyTextClass}`}>
        ResumRank-AI demonstrates applied NLP for candidate screening with practical,
        industry-aligned ranking and skill-gap analysis.
      </p>
    </article>
  );
}

export function LanguageDistributionCard({ isDark, languageBreakdown }: LanguageCardProps) {
  return (
    <article
      className={`rounded-xl border p-4 sm:p-5 ${elevatedCardClass} ${
        isDark ? "border-cyan-400/20 bg-[#06111d]/80" : "border-cyan-700/20 bg-white/90"
      }`}
    >
      <p
        className={`font-mono text-xs uppercase tracking-[0.18em] ${
          isDark ? "text-lime-300/75" : "text-cyan-700/75"
        }`}
      >
        language_distribution.json
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {languageBreakdown.map(([language, count]) => (
          <span
            key={language}
            className={`rounded border px-2.5 py-1 font-mono text-[11px] ${terminalChipClass} ${
              isDark
                ? "border-cyan-300/35 bg-cyan-400/10 text-cyan-100"
                : "border-cyan-700/25 bg-cyan-100 text-slate-700"
            }`}
          >
            {language}: {count}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectsSection({ isDark, projects }: ProjectsProps) {
  const sectionTitleClass = `font-mono ${isDark ? "text-lime-100" : "text-slate-900"}`;
  const metaTextClass = `font-mono text-xs ${isDark ? "text-lime-300/75" : "text-cyan-700/75"}`;

  return (
    <section
      id="projects"
      className={`terminal-reveal scroll-mt-24 rounded-xl border p-4 sm:p-5 md:p-6 ${terminalPanelClass} ${
        isDark ? "border-cyan-400/20 bg-[#040b14]/80" : "border-cyan-700/20 bg-white/90"
      }`}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
        <h2 className={`text-lg sm:text-xl ${sectionTitleClass}`}>
          all_projects --source github --count {projects.length}
        </h2>
        <p className={`${metaTextClass} text-balance`}>render mode: responsive terminal cards</p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group rounded-xl border p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:shadow-[0_0_30px_rgba(34,211,238,0.09)] ${
              elevatedCardClass
            } ${
              isDark
                ? "border-cyan-300/15 bg-linear-to-b from-[#0a1524] to-[#07101d]"
                : "border-cyan-700/20 bg-linear-to-b from-[#f4fbff] to-[#e9f7ff]"
            }`}
          >
            <p
              className={`font-mono text-[11px] uppercase tracking-wide ${
                isDark ? "text-lime-300/80" : "text-cyan-700/75"
              }`}
            >
              #{String(index + 1).padStart(2, "0")} repo://{project.title.toLowerCase()}
            </p>
            <h3
              className={`mt-2 font-mono text-base font-semibold ${
                isDark ? "text-lime-100" : "text-slate-900"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`mt-3 min-h-0 font-mono text-sm leading-7 ${
                isDark ? "text-lime-100/80" : "text-slate-700"
              }`}
            >
              {project.description}
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span
                className={`rounded border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${terminalChipClass} ${
                  isDark
                    ? "border-cyan-300/30 bg-cyan-400/10 text-cyan-200"
                    : "border-cyan-700/25 bg-cyan-100 text-slate-700"
                }`}
              >
                {project.language}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-xs uppercase tracking-wider transition ${
                  isDark
                    ? "text-lime-300 group-hover:text-lime-100"
                    : "text-cyan-700 group-hover:text-cyan-900"
                }`}
              >
                inspect repo →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StackSection({ isDark }: ThemeProps) {
  const sectionTitleClass = `font-mono ${isDark ? "text-lime-100" : "text-slate-900"}`;
  const metaTextClass = `font-mono text-xs ${isDark ? "text-lime-300/75" : "text-cyan-700/75"}`;
  const chipClass = `rounded border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide ${
    isDark
      ? "terminal-chip border-emerald-300/40 bg-[#0f2a14] text-lime-100"
      : "border-cyan-700/25 bg-cyan-50 text-slate-700"
  }`;

  return (
    <section
      id="stack"
      className={`terminal-reveal scroll-mt-24 rounded-xl border p-4 sm:p-5 md:p-6 ${terminalPanelClass} ${
        isDark ? "border-cyan-400/20 bg-[#06111d]/80" : "border-cyan-700/20 bg-white/90"
      }`}
    >
      <h2 className={`text-lg sm:text-xl ${sectionTitleClass}`}>tech_stack --print</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <article
          className={`rounded-lg border p-4 sm:p-5 ${elevatedCardClass} ${
            isDark ? "border-cyan-400/20 bg-[#081524]" : "border-cyan-700/20 bg-[#f4fbff]"
          }`}
        >
          <p className={metaTextClass}>languages</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.languages.map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>
        </article>
        <article
          className={`rounded-lg border p-4 sm:p-5 ${elevatedCardClass} ${
            isDark ? "border-cyan-400/20 bg-[#081524]" : "border-cyan-700/20 bg-[#f4fbff]"
          }`}
        >
          <p className={metaTextClass}>ai_ml_data</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.aiMlData.map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>
        </article>
        <article
          className={`rounded-lg border p-4 sm:p-5 ${elevatedCardClass} ${
            isDark ? "border-cyan-400/20 bg-[#081524]" : "border-cyan-700/20 bg-[#f4fbff]"
          }`}
        >
          <p className={metaTextClass}>frameworks_tools</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.frameworksTools.map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>
        </article>
        <article
          className={`rounded-lg border p-4 sm:p-5 ${elevatedCardClass} ${
            isDark ? "border-cyan-400/20 bg-[#081524]" : "border-cyan-700/20 bg-[#f4fbff]"
          }`}
        >
          <p className={metaTextClass}>databases</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.databases.map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>
        </article>
        <article
          className={`rounded-lg border p-4 sm:p-5 ${elevatedCardClass} ${
            isDark ? "border-cyan-400/20 bg-[#081524]" : "border-cyan-700/20 bg-[#f4fbff]"
          }`}
        >
          <p className={metaTextClass}>tools_concepts</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.toolsConcepts.map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function ContactSection({ isDark }: ThemeProps) {
  return (
    <section
      id="contact"
      className={`terminal-reveal scroll-mt-24 rounded-xl border p-5 sm:p-6 md:p-8 ${elevatedCardClass} ${
        isDark
          ? "border-cyan-400/30 bg-linear-to-r from-[#081525] to-[#07101e]"
          : "border-cyan-700/25 bg-linear-to-r from-[#e6f7ff] to-[#f4fbff]"
      }`}
    >
      <h2
        className={`max-w-2xl font-mono text-xl leading-tight sm:text-2xl ${terminalGlowClass} ${
          isDark ? "text-lime-100" : "text-slate-900"
        }`}
      >
        $ collaborate --with abdulhayykhan
      </h2>
      <p
        className={`mt-3 max-w-3xl font-mono text-base leading-8 ${
          isDark ? "text-lime-100/80" : "text-slate-700"
        }`}
      >
        Interested in AI engineering, backend development, or intelligent product collaboration?
        Let&apos;s connect and build something valuable.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href="https://github.com/abdulhayykhan"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-md border px-4 py-2 text-center font-mono text-xs uppercase tracking-wider transition sm:w-auto ${
            isDark
              ? "border-emerald-300/60 bg-emerald-300/10 text-lime-100 hover:bg-emerald-300/20"
              : "border-cyan-700/30 bg-cyan-500/10 text-slate-800 hover:bg-cyan-500/15"
          }`}
        >
          github --open
        </a>
        <a
          href="https://www.linkedin.com/in/abdulhayykhan/"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
            isDark
              ? "border-emerald-400/45 text-lime-100 hover:border-lime-300 hover:bg-emerald-400/10"
              : "border-cyan-700/25 text-slate-700 hover:border-cyan-700/45 hover:bg-cyan-500/10"
          }`}
        >
          linkedin --connect
        </a>
        <a
          href={RESUME_PATH}
          download
          className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
            isDark
              ? "border-emerald-400/45 text-lime-100 hover:border-lime-300 hover:bg-emerald-400/10"
              : "border-cyan-700/25 text-slate-700 hover:border-cyan-700/45 hover:bg-cyan-500/10"
          }`}
        >
          download cv
        </a>
      </div>
    </section>
  );
}
