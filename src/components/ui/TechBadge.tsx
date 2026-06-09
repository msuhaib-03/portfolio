import { cn } from "@/lib/utils";

interface Props {
  label:     string;
  variant?:  "green" | "cyan" | "purple" | "default";
  size?:     "sm" | "md";
}

const variants = {
  green:   "bg-cyber-green/10  text-cyber-green  border-cyber-green/30",
  cyan:    "bg-cyber-cyan/10   text-cyber-cyan   border-cyber-cyan/30",
  purple:  "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30",
  default: "bg-white/5         text-slate-300    border-white/10",
};

const sizes = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-3 py-1   text-xs",
};

export default function TechBadge({ label, variant = "default", size = "md" }: Props) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full border font-mono font-medium tracking-wide",
      variants[variant],
      sizes[size]
    )}>
      {label}
    </span>
  );
}
