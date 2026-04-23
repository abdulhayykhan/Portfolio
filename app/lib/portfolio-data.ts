export type Project = {
  title: string;
  description: string;
  language: string;
  link: string;
};

export const RESUME_PATH = "/Abdul_Hayy_Khan_Resume.pdf";

export const allProjects: Project[] = [
  {
    title: "ResumRank-AI",
    description:
      "AI-powered resume ranking system using spaCy NLP to match candidates with job requirements and generate detailed skill gap analyses.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/ResumRank-AI",
  },
  {
    title: "Smart-Ride-Hailing-Data-Analyzer",
    description: "Data analysis project for ride-hailing insights and trends.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/Smart-Ride-Hailing-Data-Analyzer",
  },
  {
    title: "Naeem-Documentation",
    description:
      "A modern, mobile-first static website for Naeem Documentation with interactive menus and WhatsApp integration.",
    language: "HTML",
    link: "https://github.com/abdulhayykhan/Naeem-Documentation",
  },
  {
    title: "ByteShift",
    description:
      "FastAPI-based file converter for image, document, audio, and video conversions with a clean single-page UI.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/ByteShift",
  },
  {
    title: "forage-midas",
    description:
      "Backend transaction processor for JPMC Midas Core using Spring Boot, Apache Kafka, and REST APIs.",
    language: "Java",
    link: "https://github.com/abdulhayykhan/forage-midas",
  },
  {
    title: "SLAMS",
    description:
      "Full-stack academic management app with attendance, enrollments, note sharing, and role-based access control.",
    language: "HTML",
    link: "https://github.com/abdulhayykhan/SLAMS",
  },
  {
    title: "Thermal-Printer-App",
    description: "Thermal printer utility application.",
    language: "Shell",
    link: "https://github.com/abdulhayykhan/Thermal-Printer-App",
  },
  {
    title: "SFTSS",
    description:
      "Python CLI tool for secure file transfer using hybrid encryption and SHA-256 integrity checks.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/SFTSS",
  },
  {
    title: "secure-vault",
    description:
      "Streamlit vault with file encryption, forensic logging, malware detection, and UFW firewall automation.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/secure-vault",
  },
  {
    title: "Encrypted-Notes-App",
    description:
      "Python desktop app with Fernet encryption, secure authentication, and encrypted local storage.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/Encrypted-Notes-App",
  },
  {
    title: "Streamlit-Apps",
    description:
      "Collection of interactive Streamlit web apps with API integrations and utility tools.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/Streamlit-Apps",
  },
  {
    title: "Enhanced-Task-Management-System",
    description:
      "FastAPI + SQLAlchemy task management app with REST APIs, validation, and testing.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/Enhanced-Task-Management-System",
  },
  {
    title: "Task-Management-System",
    description:
      "Flask task manager using SQLAlchemy and SQLite with Jinja2 templates and unit tests.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/Task-Management-System",
  },
  {
    title: "naeem-doc",
    description:
      "Responsive business website for Naeem Documentation built with React, TypeScript, and Tailwind CSS.",
    language: "TypeScript",
    link: "https://github.com/abdulhayykhan/naeem-doc",
  },
  {
    title: "Flappy-Bird-Clone",
    description:
      "Beginner-friendly Java game demonstrating Swing GUI programming and 2D rendering.",
    language: "Java",
    link: "https://github.com/abdulhayykhan/Flappy-Bird-Clone",
  },
  {
    title: "OOP-Projects",
    description:
      "Object-oriented programming projects in Java, C++, and Python with GUI and console apps.",
    language: "Java",
    link: "https://github.com/abdulhayykhan/OOP-Projects",
  },
  {
    title: "Python-Projects",
    description:
      "Beginner-friendly Python projects including Tkinter GUIs, games, and utility tools.",
    language: "Python",
    link: "https://github.com/abdulhayykhan/Python-Projects",
  },
  {
    title: "Cpp-Projects",
    description:
      "Practical C++ console applications for problem-solving, utilities, and management systems.",
    language: "C++",
    link: "https://github.com/abdulhayykhan/Cpp-Projects",
  },
];

export const techStack = {
  languages: ["Python", "C++", "Java", "SQL", "HTML5", "CSS3"],
  aiMlData: [
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "spaCy",
  ],
  frameworksTools: [
    "FastAPI",
    "Flask",
    "Streamlit",
    "SQLAlchemy",
    "Jupyter",
    "Figma",
    "Git",
    "Azure",
    "Bootstrap 5",
    "Jinja2",
  ],
  databases: ["MySQL", "PostgreSQL", "SQLite", "Oracle"],
  toolsConcepts: [
    "RESTful APIs",
    "JWT Authentication",
    "WebSockets",
    "Pytest",
    "Unittest",
    "SDLC",
    "Debugging",
    "Technical Documentation",
  ],
};

export const stats = [
  { label: "Public Repositories", value: "18+" },
  { label: "Backend Focus", value: "FastAPI · Flask · PostgreSQL" },
  { label: "Primary Domain", value: "AI Engineering" },
];

export function getLanguageBreakdown(projects: Project[]) {
  return Object.entries(
    projects.reduce<Record<string, number>>((acc, project) => {
      const language = project.language?.trim();
      if (!language || language === "N/A") {
        return acc;
      }
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);
}
