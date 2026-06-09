"use client";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import GlowButton from "@/components/ui/GlowButton";
import { useTypewriter } from "@/hooks/useTypewriter";
import { personal } from "@/data/personal";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { displayed } = useTypewriter({ phrases: [...personal.roles] });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle constellation */}
      <ParticleCanvas />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-cyber-green/5 via-transparent to-transparent pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={item} className="mb-4">
          <span className="inline-flex items-center gap-2 font-mono text-cyber-green text-sm tracking-widest uppercase">
            <span className="w-6 h-px bg-cyber-green" />
            Hello World, I'm
            <span className="w-6 h-px bg-cyber-green" />
          </span>
        </motion.div>

        {/* Name with glitch */}
        <motion.div variants={item} className="mb-4">
          <h1
            className="glitch-text text-6xl sm:text-8xl font-black tracking-tight text-white leading-none"
            data-text={personal.displayName}
          >
            <span className="text-gradient-green">{personal.displayName}</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div variants={item} className="mb-6 h-10 flex items-center justify-center">
          <div className="font-mono text-xl sm:text-2xl text-cyber-cyan">
            <span className="text-muted">&#47;&#47; </span>
            <span>{displayed}</span>
            <span className="text-cyber-green animate-blink">|</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personal.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <GlowButton href="#projects" size="lg">
            View My Work
            <ArrowDown size={16} />
          </GlowButton>
          <GlowButton href="#contact" variant="outline" size="lg">
            Get In Touch
          </GlowButton>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-6">
          {[
            { href: personal.github,   icon: FaGithub,   label: "GitHub",   color: "hover:text-cyber-green" },
            { href: personal.linkedin, icon: FaLinkedin, label: "LinkedIn", color: "hover:text-cyber-cyan" },
            { href: `mailto:${personal.email}`, icon: Mail, label: "Email", color: "hover:text-cyber-purple" },
          ].filter(s => s.href).map(({ href, icon: Icon, label, color }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-muted ${color} transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
            >
              <Icon size={22} />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
