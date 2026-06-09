"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications, certCategories } from "@/data/certifications";
import { cn } from "@/lib/utils";

const categoryColor: Record<string, string> = {
  security:    "text-cyber-green  border-cyber-green/30  bg-cyber-green/8",
  networking:  "text-cyber-cyan   border-cyber-cyan/30   bg-cyber-cyan/8",
  development: "text-cyber-purple border-cyber-purple/30 bg-cyber-purple/8",
  general:     "text-amber-400    border-amber-400/30    bg-amber-400/8",
};

const categoryLabel: Record<string, string> = {
  security:    "Security",
  networking:  "Networking",
  development: "Development",
  general:     "General IT",
};

export default function Certifications() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all"
    ? certifications
    : certifications.filter(c => c.category === active);

  return (
    <section id="certifications" className="section-pad relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-green/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle subtitle="Industry certifications across security, networking & development">
          Certifications
        </SectionTitle>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {certCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium font-mono transition-all duration-250 ${
                active === cat.key
                  ? "bg-cyber-green text-background shadow-[0_0_15px_rgba(0,255,136,0.4)]"
                  : "glass text-slate-400 border border-white/10 hover:text-cyber-green hover:border-cyber-green/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "glass rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 group",
                  categoryColor[cert.category] ?? "text-slate-300 border-white/10 bg-white/3"
                )}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <Award size={15} className="opacity-40 group-hover:opacity-70 transition-opacity shrink-0 mt-1" />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-white text-sm leading-snug mb-1 group-hover:text-inherit transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer + category */}
                <p className="text-xs text-muted">{cert.issuer}</p>
                <span className={cn(
                  "mt-3 inline-block px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border",
                  categoryColor[cert.category]
                )}>
                  {categoryLabel[cert.category]}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
