"use client";
import { motion } from "framer-motion";
import { MapPin, Coffee, Rocket, Code2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import TerminalCard from "@/components/ui/TerminalCard";
import GlowButton from "@/components/ui/GlowButton";
import { personal } from "@/data/personal";

const highlights = [
  { icon: Code2,  text: "Writing clean, maintainable code" },
  { icon: Rocket, text: "Shipping fast, iterating faster" },
  { icon: Coffee, text: "Fueled by coffee & curiosity" },
  { icon: MapPin, text: `Based in ${personal.location}` },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="A bit about who I am and what I do">
          About Me
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              {personal.bio}
            </p>
            <p className="text-slate-400 leading-relaxed">
              I thrive in the full stack — from designing database schemas and building REST APIs to crafting
              pixel-perfect UIs with React & Next.js. I believe great software is at the intersection of
              <span className="text-cyber-green"> technical rigour</span> and
              <span className="text-cyber-cyan"> human empathy</span>.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-slate-400">
                  <Icon size={15} className="text-cyber-green shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Availability badge */}
            {personal.availableForWork && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-green/30 bg-cyber-green/5 text-cyber-green text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                {personal.availableMessage}
              </div>
            )}

            {/* CTA */}
            <div className="flex gap-4 pt-2">
              <GlowButton href="#projects">See My Work</GlowButton>
              <GlowButton href={`mailto:${personal.email}`} variant="outline">Let's Talk</GlowButton>
            </div>
          </motion.div>

          {/* Right — terminal + stats */}
          <div className="space-y-6">
            <TerminalCard />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-4 gap-3"
            >
              {personal.stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 text-center neon-border group hover:border-cyber-green/50 transition-all duration-300"
                >
                  <div className="text-2xl font-black text-cyber-green group-hover:text-gradient-green transition-all">
                    {value}
                  </div>
                  <div className="text-[11px] text-muted mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
