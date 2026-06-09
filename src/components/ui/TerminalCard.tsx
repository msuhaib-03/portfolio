"use client";
import { motion } from "framer-motion";

interface Line {
  type: "comment" | "key" | "value" | "bracket" | "blank";
  text: string;
}

const lines: Line[] = [
  { type: "comment",  text: "// about me" },
  { type: "blank",    text: "" },
  { type: "bracket",  text: "const developer = {" },
  { type: "key",      text: '  name:       "Muhammad Suhaib",' },
  { type: "key",      text: '  role:       "Full Stack Dev",' },
  { type: "key",      text: '  university: "MAJU · CGPA 3.67",' },
  { type: "key",      text: '  location:   "Karachi, Pakistan 🇵🇰",' },
  { type: "blank",    text: "" },
  { type: "key",      text: '  stack:   [' },
  { type: "value",    text: '    "Java", "Spring Boot",' },
  { type: "value",    text: '    "React.js", "Next.js",' },
  { type: "value",    text: '    "MongoDB", "PostgreSQL"' },
  { type: "key",      text: "  ]," },
  { type: "blank",    text: "" },
  { type: "key",      text: '  certs:      "CEH v12, CCNA, +6",' },
  { type: "key",      text: '  experience: "10Pearls Pakistan",' },
  { type: "key",      text: '  available:  true,' },
  { type: "bracket",  text: "};" },
];

const typeColors: Record<Line["type"], string> = {
  comment: "text-muted",
  key:     "text-cyber-cyan",
  value:   "text-cyber-green",
  bracket: "text-white",
  blank:   "text-white",
};

export default function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-xl overflow-hidden neon-border"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface">
        <div className="w-3 h-3 rounded-full bg-red-500/80"    />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-cyber-green/80"/>
        <span className="ml-2 font-mono text-xs text-muted">developer.ts</span>
      </div>

      {/* Code body */}
      <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.045, duration: 0.3 }}
            className={`${typeColors[line.type]} min-h-[1.5rem]`}
          >
            {line.text || " "}
          </motion.div>
        ))}
        <span className="text-cyber-green animate-blink">█</span>
      </div>
    </motion.div>
  );
}
