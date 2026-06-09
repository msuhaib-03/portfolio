export interface Certification {
  id:       string;
  name:     string;
  issuer:   string;
  category: "networking" | "security" | "development" | "cloud" | "general";
  icon:     string;
  year?:    string;
}

export const certifications: Certification[] = [
  // Security
  { id: "ceh",      name: "Certified Ethical Hacker (CEH V12)",       issuer: "Packt / EC-Council",  category: "security",     icon: "🎯" },
  { id: "pentest",  name: "Offensive Hacking: Become a Pro Pentester", issuer: "Packt",               category: "security",     icon: "💀" },
  { id: "advcyber", name: "Advanced Cybersecurity",                    issuer: "LearnkartS",          category: "security",     icon: "🛡️" },
  { id: "soc",      name: "SOC Analyst",                               issuer: "Cisco",               category: "security",     icon: "🔍" },
  // Networking
  { id: "ccna",     name: "Cisco CCNA",                                issuer: "Cisco",               category: "networking",   icon: "🌐" },
  { id: "ibm-net",  name: "Computer Networks & Security",              issuer: "IBM",                 category: "networking",   icon: "🔗" },
  // Development
  { id: "javafs",   name: "Java Full Stack Developer",                 issuer: "Board Infinity",      category: "development",  icon: "☕" },
  // General IT
  { id: "google-it",name: "Google IT Support Specialist",              issuer: "Google",              category: "general",      icon: "🔧" },
];

export const certCategories = [
  { key: "all",         label: "All"         },
  { key: "security",    label: "Security"    },
  { key: "networking",  label: "Networking"  },
  { key: "development", label: "Development" },
  { key: "general",     label: "General IT"  },
] as const;
