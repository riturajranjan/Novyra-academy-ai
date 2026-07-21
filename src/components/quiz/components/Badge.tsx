import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "danger"
  | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-primary/15 text-primary border border-primary/30",

  secondary:
    "bg-surface-container-high text-on-surface border border-outline-variant",

  tertiary: "bg-tertiary/10 text-tertiary border border-tertiary/20",

  success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",

  warning: "bg-amber-500/15 text-amber-400 border border-amber-500/20",

  danger: "bg-red-500/15 text-red-400 border border-red-500/20",

  outline: "bg-transparent border border-outline-variant text-on-surface",
};

export default function Badge({
  children,
  variant = "primary",
  icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors",
        variants[variant],
        className,
      )}>
      {icon}

      {children}
    </span>
  );
}
