"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { personal } from "@/data/personal";

const navLinks = [
  { href: "#about",          label: "About"    },
  { href: "#skills",         label: "Skills"   },
  { href: "#projects",       label: "Projects" },
  { href: "#experience",     label: "Journey"  },
  { href: "#certifications", label: "Certs"    },
  { href: "#contact",        label: "Contact"  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [mobileOpen,setMobileOpen]= useState(false);
  const [activeSection, setActive]= useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on link click
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActive(href.replace("#", ""));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="#hero"
              className="flex items-center gap-2 font-mono font-bold text-cyber-green hover:text-cyber-cyan transition-colors"
            >
              <Terminal size={18} />
              <span>{personal.displayName}<span className="animate-blink text-cyber-cyan">_</span></span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    activeSection === link.href.replace("#", "")
                      ? "text-cyber-green bg-cyber-green/10"
                      : "text-slate-400 hover:text-cyber-green hover:bg-cyber-green/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Resume CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-background bg-cyber-green rounded-lg hover:bg-cyber-green/90 shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all duration-300"
              >
                Resume
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-cyber-green rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 glass border-b border-white/5 py-4 md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="py-3 px-4 text-slate-300 hover:text-cyber-green hover:bg-cyber-green/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 px-4 text-center font-semibold text-background bg-cyber-green rounded-lg"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
