"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  href?:      string;
  onClick?:   () => void;
  children:   React.ReactNode;
  variant?:   "primary" | "outline" | "ghost";
  size?:      "sm" | "md" | "lg";
  external?:  boolean;
  className?: string;
  type?:      "button" | "submit";
  disabled?:  boolean;
}

const base = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer select-none";

const variants = {
  primary: "bg-cyber-green text-background hover:bg-cyber-green/90 shadow-[0_0_20px_rgba(0,255,136,0.35)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)] active:scale-95",
  outline: "border border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 hover:border-cyber-green hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] active:scale-95",
  ghost:   "text-slate-300 hover:text-cyber-green hover:bg-white/5 active:scale-95",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function GlowButton({
  href, onClick, children, variant = "primary", size = "md",
  external = false, className, type = "button", disabled = false,
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], disabled && "opacity-50 pointer-events-none", className);

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
