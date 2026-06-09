"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  subtitle?: string;
  align?:   "left" | "center";
  className?: string;
}

export default function SectionTitle({ children, subtitle, align = "center", className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {/* Accent line */}
      <div className={cn(
        "flex items-center gap-3 mb-3",
        align === "center" ? "justify-center" : "justify-start"
      )}>
        <div className="h-px w-10 bg-cyber-green/60" />
        <span className="text-cyber-green font-mono text-xs uppercase tracking-[0.25em]">
          {typeof children === "string" ? children.split(" ")[0] : ""}
        </span>
        <div className="h-px w-10 bg-cyber-green/60" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
        {children}
        <span className="text-cyber-green">.</span>
      </h2>

      {subtitle && (
        <p className="mt-3 text-muted text-base max-w-xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
