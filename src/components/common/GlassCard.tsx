import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card inner-glow border border-white/8 backdrop-blur-2xl",
        className,
      )}>
      {children}
    </div>
  );
}
