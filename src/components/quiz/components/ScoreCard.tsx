"use client";

import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

interface ScoreCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: string;
  color?: "primary" | "success" | "warning" | "danger";
  className?: string;
}

const variants = {
  primary: "border-primary/20 bg-primary/10",

  success: "border-emerald-500/20 bg-emerald-500/10",

  warning: "border-amber-500/20 bg-amber-500/10",

  danger: "border-red-500/20 bg-red-500/10",
};

export default function ScoreCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = "primary",
  className,
}: ScoreCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-xl",
        variants[color],
        className,
      )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-on-surface/70">{title}</p>

          <h3 className="text-3xl font-bold">{value}</h3>

          {subtitle && <p className="text-xs text-on-surface/60">{subtitle}</p>}
        </div>

        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/40">
            {icon}
          </div>
        )}
      </div>

      {trend && (
        <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
          <TrendingUp className="h-4 w-4" />
          {trend}
        </div>
      )}
    </div>
  );
}
