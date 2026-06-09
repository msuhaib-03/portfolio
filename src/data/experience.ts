export interface Experience {
  id:           string;
  type:         "education" | "work" | "project" | "achievement";
  title:        string;
  organisation: string;
  location?:    string;
  period:       string;
  description:  string;
  tags?:        string[];
  current?:     boolean;
}

export const experiences: Experience[] = [
  // ── Education ─────────────────────────────────────────────────────────────
  {
    id:           "maju",
    type:         "education",
    title:        "Bachelor of Computer Science",
    organisation: "Muhammad Ali Jinnah University (MAJU)",
    location:     "Karachi, Pakistan",
    period:       "Sep 2022 – Jul 2026",
    description:  "CGPA: 3.67. Relevant coursework: Data Structures & Algorithms, OOP, Computer Networks, Database Systems, Software Engineering, DevOps, Security, Cloud Computing.",
    tags:         ["DSA", "OOP", "DBMS", "Networks", "DevOps", "Cloud"],
    current:      true,
  },

  // ── Work Experience ────────────────────────────────────────────────────────
  {
    id:           "10pearls",
    type:         "work",
    title:        "Software Engineer Intern",
    organisation: "10Pearls Pakistan",
    location:     "Karachi, Pakistan",
    period:       "Dec 2025 – Feb 2026",
    description:  "Designed and built a secure full-stack Contacts Management System with JWT auth, token blacklisting, RBAC, and complete CRUD with pagination. Engineered DTO-based architecture with Axios interceptors and responsive React UI with automatic session expiry handling.",
    tags:         ["Spring Boot", "React.js", "JWT", "Spring Security", "REST APIs", "Maven"],
  },

  // ── Key Projects ───────────────────────────────────────────────────────────
  {
    id:           "trustify-proj",
    type:         "project",
    title:        "Final Year Project — Trustify",
    organisation: "MAJU / Self",
    period:       "2025",
    description:  "Architected the complete backend for a community rental platform — Stripe escrow payments, real-time chat via Socket.io, admin fraud monitoring, automated cron jobs, and OAuth2 authentication.",
    tags:         ["Spring Boot", "MongoDB", "Stripe", "Socket.io", "OAuth2"],
  },
  {
    id:           "aether-proj",
    type:         "project",
    title:        "Aether-Shield — AI SRE Agent",
    organisation: "Self",
    period:       "2026",
    description:  "Built an autonomous AI remediation engine using n8n + Gemini 2.5 Flash that detects live service crashes, diagnoses the fault, refactors code, and pushes a fix commit to GitHub — all in under 15 seconds.",
    tags:         ["n8n", "Gemini API", "PostgreSQL", "GitHub API"],
  },

  // ── Achievements ──────────────────────────────────────────────────────────
  {
    id:           "hackerone",
    type:         "achievement",
    title:        "HackerOne CTF Participant",
    organisation: "HackerOne",
    period:       "2025",
    description:  "Competed in HackerOne CTF 2025 — practising real-world vulnerability hunting and exploitation challenges.",
    tags:         ["CTF", "Bug Bounty", "Offensive Security"],
  },
  {
    id:           "student-head",
    type:         "achievement",
    title:        "Student Head — Peer Teaching",
    organisation: "MAJU",
    period:       "2024",
    description:  "Led peer teaching sessions for junior CS students; also served on MAJU ACM Marketing Team and won Intra-University Futsal 2023 & 2024.",
    tags:         ["Leadership", "Mentorship", "ACM"],
  },
];
