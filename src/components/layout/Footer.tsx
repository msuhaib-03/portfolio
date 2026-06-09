import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono font-bold text-cyber-green">
            <Terminal size={16} />
            <span>{personal.displayName}<span className="text-cyber-cyan">_</span></span>
          </div>

          {/* Center: tagline */}
          <p className="text-muted text-sm text-center">
            Designed & Built by{" "}
            <span className="text-cyber-green font-semibold">{personal.fullName}</span>
            {" "}— {personal.location}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {personal.github && (
              <Link href={personal.github} target="_blank" rel="noopener noreferrer"
                className="text-muted hover:text-cyber-green transition-colors" aria-label="GitHub">
                <FaGithub size={18} />
              </Link>
            )}
            {personal.linkedin && (
              <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-muted hover:text-cyber-cyan transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </Link>
            )}
            <Link href={`mailto:${personal.email}`}
              className="text-muted hover:text-cyber-purple transition-colors" aria-label="Email">
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <p className="text-center text-muted text-xs mt-6">
          © {new Date().getFullYear()} {personal.fullName} · Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
