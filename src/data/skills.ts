export interface Skill {
  name:     string;
  category: "backend" | "frontend" | "database" | "security" | "devops" | "languages";
  level:    number; // 0-100
  icon:     string;
}

export const skills: Skill[] = [
  // ── Backend ────────────────────────────────────────────────────────────────
  { name: "Spring Boot",      category: "backend",    level: 88, icon: "🍃" },
  { name: "Spring Security",  category: "backend",    level: 85, icon: "🔐" },
  { name: "JWT / OAuth2",     category: "backend",    level: 85, icon: "🔑" },
  { name: "REST APIs",        category: "backend",    level: 92, icon: "🔌" },
  { name: "Node.js",          category: "backend",    level: 82, icon: "🟢" },
  { name: "Express.js",       category: "backend",    level: 80, icon: "🚂" },
  { name: "Socket.io",        category: "backend",    level: 75, icon: "⚡" },
  { name: "n8n Automation",   category: "backend",    level: 82, icon: "🤖" },

  // ── Frontend ───────────────────────────────────────────────────────────────
  { name: "React.js",         category: "frontend",   level: 88, icon: "⚛️" },
  { name: "Next.js",          category: "frontend",   level: 85, icon: "▲" },
  { name: "TypeScript",       category: "frontend",   level: 83, icon: "🔷" },
  { name: "Angular",          category: "frontend",   level: 72, icon: "🅰️" },
  { name: "Tailwind CSS",     category: "frontend",   level: 90, icon: "🎨" },
  { name: "HTML / CSS",       category: "frontend",   level: 95, icon: "🌐" },

  // ── Databases ─────────────────────────────────────────────────────────────
  { name: "MongoDB Atlas",    category: "database",   level: 85, icon: "🍃" },
  { name: "PostgreSQL",       category: "database",   level: 82, icon: "🐘" },
  { name: "Redis",            category: "database",   level: 72, icon: "🔴" },
  { name: "MySQL / SSMS",     category: "database",   level: 78, icon: "🗃️" },
  { name: "Supabase",         category: "database",   level: 83, icon: "💚" },

  // ── Security (Cyber) ──────────────────────────────────────────────────────
  { name: "Metasploit",       category: "security",   level: 80, icon: "💀" },
  { name: "Burp Suite",       category: "security",   level: 82, icon: "🕷️" },
  { name: "Nmap / SQLMap",    category: "security",   level: 83, icon: "🛰️" },
  { name: "Kali Linux",       category: "security",   level: 85, icon: "🐉" },
  { name: "Wireshark",        category: "security",   level: 78, icon: "🦈" },
  { name: "OWASP Top 10",     category: "security",   level: 85, icon: "🛡️" },

  // ── DevOps / Cloud ────────────────────────────────────────────────────────
  { name: "AWS",              category: "devops",     level: 72, icon: "☁️" },
  { name: "Docker",           category: "devops",     level: 75, icon: "🐳" },
  { name: "CI/CD",            category: "devops",     level: 78, icon: "🔄" },
  { name: "Git & GitHub",     category: "devops",     level: 92, icon: "🐙" },
  { name: "Linux",            category: "devops",     level: 85, icon: "🐧" },
  { name: "Render / Heroku",  category: "devops",     level: 80, icon: "🚀" },

  // ── Languages ────────────────────────────────────────────────────────────
  { name: "Java",             category: "languages",  level: 90, icon: "☕" },
  { name: "JavaScript",       category: "languages",  level: 88, icon: "🟡" },
  { name: "Python",           category: "languages",  level: 78, icon: "🐍" },
  { name: "C / C++",          category: "languages",  level: 70, icon: "⚙️" },
  { name: "C#",               category: "languages",  level: 68, icon: "🔵" },
  { name: "Bash / Shell",     category: "languages",  level: 75, icon: "💻" },
];

export const categories = [
  { key: "all",       label: "All"        },
  { key: "backend",   label: "Backend"    },
  { key: "frontend",  label: "Frontend"   },
  { key: "database",  label: "Database"   },
  { key: "security",  label: "Security"   },
  { key: "devops",    label: "DevOps"     },
  { key: "languages", label: "Languages"  },
] as const;

export type CategoryKey = typeof categories[number]["key"];
