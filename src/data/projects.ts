export interface Project {
  id:          string;
  title:       string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  featured:    boolean;
  status:      "completed" | "in-progress" | "planned";
  gradient:    string;
  year:        number;
  tag?:        string; // e.g. "Final Year Project", "Internship", "AI / Automation"
}

export const projects: Project[] = [
  // ── FEATURED ──────────────────────────────────────────────────────────────
  {
    id:          "trustify",
    title:       "Trustify — Secure Rental & Marketplace",
    description: "Architected the full backend for a community rental platform: Stripe escrow payments with controlled fund release, real-time chat, role-based admin panel, cron-driven reminders, dispute handling, and fraud monitoring — all in one production system.",
    tech:        ["Spring Boot", "MongoDB Atlas", "JWT", "OAuth2", "Stripe API", "Socket.io", "Gmail SMTP", "React.js"],
    github:      "https://github.com/msuhaib-03/trustify-backend",
    live:        "https://v0-trustify-peach.vercel.app/",
    featured:    true,
    status:      "completed",
    gradient:    "from-emerald-500 to-cyan-500",
    year:        2025,
    tag:         "Final Year Project",
  },
  {
    id:          "aether-shield",
    title:       "Aether-Shield — AI Self-Healing SRE Agent",
    description: "Closed-loop AI remediation engine: intercepts live service crash webhooks → LLM semantic diagnosis via Gemini 2.5 Flash → refactors faulted code → pushes a fix commit to GitHub. Fully autonomous in under 15 seconds. Includes ACID-compliant PostgreSQL state, exponential backoff for Gemini rate limits, and real-time Discord SRE alerts.",
    tech:        ["n8n", "Google Gemini API", "GitHub REST API", "PostgreSQL", "Discord Webhooks", "JavaScript"],
    github:      "https://github.com/msuhaib-03/aether-shield",
    live:        "",
    featured:    true,
    status:      "completed",
    gradient:    "from-violet-500 to-purple-600",
    year:        2026,
    tag:         "AI / Automation",
  },
  {
    id:          "parchi",
    title:       "Parchi — MAJU Alumni Network",
    description: "Democratizing Pakistan's connection-driven job market. A platform bridging MAJU alumni with juniors for referrals and mentorship — reclaiming 'parchi' (nepotism) as a force for good. Built full-stack with Next.js and Supabase.",
    tech:        ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    github:      "https://github.com/msuhaib-03/parchi",
    live:        "https://parchi-eta.vercel.app/",
    featured:    true,
    status:      "in-progress",
    gradient:    "from-cyan-500 to-blue-500",
    year:        2025,
    tag:         "Social Impact",
  },
  // ── OTHER ──────────────────────────────────────────────────────────────────
  {
    id:          "zeplio",
    title:       "Zeplio — SaaS Platform",
    description: "Contributed to Zeplio, a modern SaaS product with a polished landing and app experience. Built and integrated key product features shipped to real users.",
    tech:        ["Next.js", "TypeScript", "Tailwind CSS", "SaaS"],
    github:      "",
    live:        "https://www.zeplio.me/",
    featured:    false,
    status:      "completed",
    gradient:    "from-amber-500 to-orange-500",
    year:        2025,
    tag:         "SaaS",
  },
  {
    id:          "contacts-cms",
    title:       "Contacts Management System",
    description: "Full-stack internship deliverable at 10Pearls Pakistan. JWT auth with token blacklisting, role-based access control, complete CRUD with pagination and debounced search — DTO-based architecture with Axios interceptors and automatic session expiry.",
    tech:        ["Java", "Spring Boot", "Spring Security", "JWT", "React.js", "Axios"],
    github:      "",
    live:        "",
    featured:    false,
    status:      "completed",
    gradient:    "from-red-500 to-rose-500",
    year:        2025,
    tag:         "Internship @ 10Pearls",
  },
  {
    id:          "taste-treasures",
    title:       "Taste Treasures",
    description: "A Java-based food discovery and recipe application. Clean OOP architecture with a rich data model for managing recipes, ingredients, and user preferences.",
    tech:        ["Java", "OOP", "Maven"],
    github:      "https://github.com/msuhaib-03/TasteTreasures",
    live:        "",
    featured:    false,
    status:      "completed",
    gradient:    "from-orange-400 to-yellow-500",
    year:        2025,
    tag:         "Java",
  },
  {
    id:          "inventory-management",
    title:       "Inventory Management System",
    description: "A C#/.NET desktop application for inventory tracking — product management, stock alerts, transaction history, and reporting with a clean WinForms UI.",
    tech:        ["C#", ".NET", "WinForms", "SQL Server"],
    github:      "https://github.com/msuhaib-03/Inventory-Management-System",
    live:        "",
    featured:    false,
    status:      "completed",
    gradient:    "from-sky-500 to-indigo-500",
    year:        2025,
    tag:         "C# / .NET",
  },
];

export const featuredProjects = projects.filter(p => p.featured);
