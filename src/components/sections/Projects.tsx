"use client";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const featured   = projects.filter(p => p.featured);
  const rest        = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle subtitle="Things I've built that I'm proud of">
          Projects
        </SectionTitle>

        {/* Featured projects (large cards) */}
        <div className="space-y-8 mb-12">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl overflow-hidden neon-border group hover:border-cyber-green/40 transition-all duration-400"
            >
              {/* Gradient top strip */}
              <div className={cn("h-1 w-full bg-gradient-to-r", project.gradient)} />

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Info */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-mono text-cyber-green tracking-widest uppercase"># Featured</span>
                      {project.tag && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-medium">
                          {project.tag}
                        </span>
                      )}
                      {project.status === "in-progress" && (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          In Progress
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyber-green transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed text-base max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t, idx) => (
                        <TechBadge
                          key={t}
                          label={t}
                          variant={idx % 3 === 0 ? "green" : idx % 3 === 1 ? "cyan" : "purple"}
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex lg:flex-col gap-3 shrink-0">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-cyber-green hover:border-cyber-green/40 transition-all duration-200 text-sm font-medium"
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyber-green text-background hover:bg-cyber-green/90 transition-all duration-200 text-sm font-semibold shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects (smaller cards grid) */}
        {rest.length > 0 && (
          <>
            <h3 className="text-center font-mono text-muted text-sm uppercase tracking-widest mb-6">
              Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((project, i) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-xl p-6 neon-border group hover:border-cyber-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <Star size={20} className="text-cyber-cyan" />
                      <div className="flex gap-2">
                        {project.github && (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer"
                            className="text-muted hover:text-cyber-green transition-colors">
                            <FaGithub size={17} />
                          </Link>
                        )}
                        {project.live && (
                          <Link href={project.live} target="_blank" rel="noopener noreferrer"
                            className="text-muted hover:text-cyber-cyan transition-colors">
                            <ExternalLink size={17} />
                          </Link>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                    {project.tech.slice(0, 3).map(t => (
                      <TechBadge key={t} label={t} size="sm" />
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-muted px-2 py-0.5">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
