// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  Muhammad Suhaib — Personal Data                                        ║
// ╚══════════════════════════════════════════════════════════════════════════╝

export const personal = {
  // ── Identity ──────────────────────────────────────────────────────────────
  firstName:   "Muhammad Suhaib",
  lastName:    "",
  fullName:    "Muhammad Suhaib",
  displayName: "SUHAIB",          // hero glitch text (all-caps for style)
  initials:    "MS",
  title:       "Full Stack Developer & Security Enthusiast",

  // ── Typewriter roles (hero section) ───────────────────────────────────────
  roles: [
    "Full Stack Developer",
    "Spring Boot & React Engineer",
    "AI Automation Builder",
    "CEH-Certified Penetration Tester",
    "CS Student @ MAJU 🇵🇰",
  ],

  // ── Bio (shown in About section) ──────────────────────────────────────────
  tagline: "Building systems that ship, then securing them.",
  bio: `CS student at MAJU (CGPA 3.67) and ex–Software Engineer Intern at 10Pearls Pakistan. I build production-grade full-stack systems, automate the boring parts with AI agents, and break things ethically as a CEH-certified penetration tester. From Stripe-powered rental platforms to AI agents that self-heal production code in under 15 seconds — I care about real impact.`,

  // ── Location ───────────────────────────────────────────────────────────────
  location: "Karachi, Pakistan",
  timezone: "PKT (UTC+5)",

  // ── Contact ───────────────────────────────────────────────────────────────
  email:    "muhammadsuhaib2805@gmail.com",
  phone:    "+92-3453933500",
  github:   "https://github.com/msuhaib-03",
  linkedin: "https://linkedin.com/in/msuhaib-03-fsjavadev",
  twitter:  "",
  resume:   "/resume.pdf",   // drop Muhammad.Suhaib(FullStack&AI).pdf into /public as resume.pdf

  // ── Availability ──────────────────────────────────────────────────────────
  availableForWork:  true,
  availableMessage:  "Open to full-time roles, internships & freelance",

  // ── Quick stats ───────────────────────────────────────────────────────────
  stats: [
    { label: "Projects Shipped",  value: "10+"  },
    { label: "Certifications",    value: "8+"   },
    { label: "CGPA",              value: "3.67" },
    { label: "Cups of Coffee",    value: "∞"    },
  ],
} as const;
