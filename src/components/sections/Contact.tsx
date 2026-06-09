"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowButton from "@/components/ui/GlowButton";
import { personal } from "@/data/personal";

const contactLinks = [
  { icon: Mail,       label: "Email",    value: personal.email,     href: `mailto:${personal.email}`, color: "text-cyber-purple" },
  { icon: FaGithub,   label: "GitHub",   value: "@msuhaib-03",      href: personal.github,            color: "text-cyber-green"  },
  { icon: FaLinkedin, label: "LinkedIn", value: personal.fullName,  href: personal.linkedin,           color: "text-cyber-cyan"   },
  { icon: MapPin,     label: "Location", value: personal.location,  href: null,                        color: "text-amber-400"    },
];

// ─── Formspree setup ──────────────────────────────────────────────────────
// 1. Go to https://formspree.io → sign up free → New Form
// 2. Copy your endpoint (looks like https://formspree.io/f/abcdefgh)
// 3. On Vercel dashboard → Settings → Environment Variables
//    Add:  NEXT_PUBLIC_FORMSPREE_ENDPOINT = https://formspree.io/f/YOUR_ID
// 4. Redeploy — submissions will arrive at muhammadsuhaib2805@gmail.com
const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export default function Contact() {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!FORMSPREE) {
      setError("Contact form not configured yet — email me directly at " + personal.email);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? "Something went wrong. Please email me directly.");
      }
    } catch {
      setError("Network error. Please email me directly at " + personal.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle subtitle="Have a project, an idea, or just want to say hi?">
          Get In Touch
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let's build something great</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm open for internships, freelance projects, open-source collaborations, and
                full-time roles. If you have an interesting problem to solve — I'm all ears.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactLinks.filter(c => c.href || !c.href).map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center border border-white/8 ${color}`}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                    {href ? (
                      <Link
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`text-sm font-medium text-slate-300 hover:${color} transition-colors`}
                      >
                        {value}
                      </Link>
                    ) : (
                      <p className="text-sm font-medium text-slate-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="glass rounded-xl p-5 neon-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse" />
                <span className="text-cyber-green font-semibold text-sm">Available for work</span>
              </div>
              <p className="text-slate-400 text-sm">
                {personal.availableMessage}. Response time: usually within 24h.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 neon-border text-center flex flex-col items-center gap-4"
              >
                <CheckCircle size={52} className="text-cyber-green" />
                <h3 className="text-2xl font-bold text-white">Message sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                <GlowButton variant="outline" onClick={() => { setSent(false); setForm({ name:"",email:"",message:"" }); }}>
                  Send another
                </GlowButton>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 neon-border space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-cyber-green mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-surface-2/50 border border-white/8 rounded-lg px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-cyber-green/60 focus:ring-1 focus:ring-cyber-green/30 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-cyber-green mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-surface-2/50 border border-white/8 rounded-lg px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-cyber-green/60 focus:ring-1 focus:ring-cyber-green/30 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-cyber-green mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-surface-2/50 border border-white/8 rounded-lg px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-cyber-green/60 focus:ring-1 focus:ring-cyber-green/30 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <GlowButton type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </GlowButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
