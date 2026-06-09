"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Trophy } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";
import { experiences } from "@/data/experience";
import type { Experience as Exp } from "@/data/experience";

const typeIcon: Record<Exp["type"], React.ElementType> = {
  education:   GraduationCap,
  work:        Briefcase,
  project:     Rocket,
  achievement: Trophy,
};
const typeColor: Record<Exp["type"], string> = {
  education:   "border-cyber-cyan/40  bg-cyber-cyan/10  text-cyber-cyan",
  work:        "border-cyber-green/40 bg-cyber-green/10 text-cyber-green",
  project:     "border-cyber-purple/40 bg-cyber-purple/10 text-cyber-purple",
  achievement: "border-amber-500/40  bg-amber-500/10   text-amber-400",
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyber-cyan/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My journey in education, work, and building">
          Experience
        </SectionTitle>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-green/60 via-cyber-cyan/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = typeIcon[exp.type];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6"
                >
                  {/* Icon dot */}
                  <div className={`shrink-0 relative z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 ${typeColor[exp.type]}`}>
                    <Icon size={20} />
                    {exp.current && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyber-green animate-pulse border-2 border-background" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass rounded-xl p-6 neon-border group hover:border-cyber-green/30 transition-all duration-300 mb-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyber-green transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-cyber-cyan text-sm font-medium mt-0.5">{exp.organisation}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono text-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/8">
                          {exp.period}
                        </span>
                        {exp.location && (
                          <p className="text-xs text-muted mt-1">{exp.location}</p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>

                    {/* Tags */}
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {exp.tags.map(tag => (
                          <TechBadge key={tag} label={tag} size="sm" />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
