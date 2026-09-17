/**
 * Projects Data — Abdul Hayy Khan Portfolio
 * 12 curated projects (5 flagship + 6 Tier-2 + 1 Tier-3)
 * featured: true  → Tier 1 flagship (badge + first-order render)
 */

const PROJECTS = [
  // ── Tier 1 — Flagship ──────────────────────────────────────────────────────
  {
    title: "ResumRank-AI",
    description:
      "spaCy NLP resume ranker matching candidates to job requirements, performing skill-gap analysis, and computing semantic fit scores.",
    language: "python",
    tags: ["ai", "ml", "nlp", "spacy", "hiring"],
    githubUrl: "https://github.com/abdulhayykhan/ResumRank-AI",
    featured: true,
  },
  {
    title: "K-HeatPulse",
    description:
      "Streamlit dashboard comparing ML and DL models to predict Karachi's real-time heatwave risk using live meteorological telemetry.",
    language: "python",
    tags: ["ai", "ml", "dl", "streamlit", "weather", "heatwave"],
    githubUrl: "https://github.com/abdulhayykhan/K-HeatPulse",
    featured: true,
  },
  {
    title: "ShikayatAI",
    description:
      "Multi-agent civic resolution platform built with Google ADK to analyze, triage, and route citizen urban complaints in Karachi.",
    language: "python",
    tags: ["ai", "agentic", "google-adk", "multi-agent", "civic"],
    githubUrl: "https://github.com/abdulhayykhan/ShikayatAI",
    featured: true,
  },
  {
    title: "VectorVault-AI",
    description:
      "Local-first semantic PDF search engine using FastAPI, ChromaDB, and Sentence-Transformers neural embeddings.",
    language: "python",
    tags: ["ai", "rag", "chromadb", "embeddings", "fastapi", "search", "backend"],
    githubUrl: "https://github.com/abdulhayykhan/VectorVault-AI",
    featured: true,
  },
  {
    title: "AsaanBill-AI",
    description:
      "Gemini 2.5 Flash-powered utility bill auditor with agentic tool calling to extract line items, verify math, and summarize Pakistani bills.",
    language: "python",
    tags: ["ai", "gemini", "tool-calling", "auditor", "utilities"],
    githubUrl: "https://github.com/abdulhayykhan/AsaanBill-AI",
    featured: true,
  },

  // ── Tier 2 ─────────────────────────────────────────────────────────────────
  {
    title: "QATRA-Web-App",
    description:
      "Emergency blood response platform connecting verified seekers to eligible donors across Pakistan in real time. Built with FastAPI, Leaflet, and Vanilla PWA.",
    language: "python",
    tags: ["fastapi", "pwa", "leaflet", "healthcare", "full-stack", "backend", "python"],
    githubUrl: "https://github.com/abdulhayykhan/QATRA-Web-App",
    featured: false,
  },
  {
    title: "ViralVantage-AI",
    description:
      "Short-form video analytics and hook optimization engine built with Next.js, FastAPI, and Gemini multimodal AI.",
    language: "python",
    tags: ["ai", "nextjs", "fastapi", "gemini", "video-analytics", "full-stack", "python"],
    githubUrl: "https://github.com/abdulhayykhan/ViralVantage-AI",
    featured: false,
  },
  {
    title: "GoalOracle",
    description:
      "FIFA World Cup 2026 prediction engine powered by dynamic Elo ratings, Poisson distributions, and Monte Carlo simulations.",
    language: "python",
    tags: ["ai", "ml", "elo", "monte-carlo", "simulation"],
    githubUrl: "https://github.com/abdulhayykhan/GoalOracle",
    featured: false,
  },
  {
    title: "PriceDrift",
    description:
      "Dual-model housing analytics implementing Linear and Logistic Regression from scratch — Python backend with interactive in-browser inference and data visualizations.",
    language: "python",
    tags: ["ml", "regression", "from-scratch", "python", "analytics"],
    githubUrl: "https://github.com/abdulhayykhan/PriceDrift",
    featured: false,
  },
  {
    title: "TunePulse",
    description:
      "Spotify listening analytics dashboard featuring top tracks, genre heatmaps, and shareable personality cards via Next.js 16 and Recharts.",
    language: "typescript",
    tags: ["typescript", "nextjs", "recharts", "spotify", "analytics"],
    githubUrl: "https://github.com/abdulhayykhan/TunePulse",
    featured: false,
  },
  {
    title: "DukaanSync",
    description:
      "Real-time multi-shop POS, inventory synchronization, and telemetry analytics platform built with Next.js 14, TypeScript, and Firebase.",
    language: "typescript",
    tags: ["typescript", "nextjs", "firebase", "pos", "telemetry", "full-stack"],
    githubUrl: "https://github.com/abdulhayykhan/DukaanSync",
    featured: false,
  },

  // ── Tier 3 ─────────────────────────────────────────────────────────────────
  {
    title: "Jhoot-Detector",
    description:
      "AI scam detector for Pakistani job postings that analyzes ad text and highlights deceptive hiring red flags. Built for GDG Live Pakistan.",
    language: "python",
    tags: ["ai", "scam-detector", "nlp", "hiring"],
    githubUrl: "https://github.com/abdulhayykhan/Jhoot-Detector",
    featured: false,
  },
];
