"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills, categories, type CategoryKey } from "@/data/skills";

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered = active === "all" ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="section-pad relative">
      {/* Accent blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Technologies I work with every day">
          Tech Stack
        </SectionTitle>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(cat => (
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

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-xl p-4 flex flex-col items-center gap-3 neon-border group hover:border-cyber-green/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Icon / emoji */}
                <span className="text-2xl">{skill.icon}</span>

                {/* Name */}
                <span className="text-sm font-medium text-slate-300 group-hover:text-white text-center leading-tight">
                  {skill.name}
                </span>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-cyber-green to-cyber-cyan"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
