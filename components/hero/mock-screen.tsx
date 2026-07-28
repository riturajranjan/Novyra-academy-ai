"use client";

import { motion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import type { AccentColor, ScreenLayout } from "@/content/hero-screens";

interface LayoutProps {
  accent: AccentColor;
}

function Bar({
  accent,
  w,
  h = "h-2.5",
  delay = 0,
  opacity = 24,
}: {
  accent: AccentColor;
  w: string;
  h?: string;
  delay?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: easePremium }}
      style={{ transformOrigin: "left", backgroundColor: accentTint(accent, opacity) }}
      className={cn("rounded-full", w, h)}
    />
  );
}

function Block({
  accent,
  delay = 0,
  className,
  opacity = 14,
  children,
}: {
  accent: AccentColor;
  delay?: number;
  className?: string;
  opacity?: number;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: easePremium }}
      style={{ backgroundColor: accentTint(accent, opacity) }}
      className={cn("rounded-xl", className)}
    >
      {children}
    </motion.div>
  );
}

function MiniBars({ accent, delay = 0 }: LayoutProps & { delay?: number }) {
  const heights = [40, 70, 50, 90, 60, 80, 45];
  return (
    <div className="flex h-full items-end gap-1.5">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: delay + i * 0.05, ease: easePremium }}
          style={{
            height: `${h}%`,
            transformOrigin: "bottom",
            backgroundColor: accentTint(accent, i % 2 === 0 ? 55 : 30),
          }}
          className="w-full rounded-t-sm"
        />
      ))}
    </div>
  );
}

function MiniLineChart({ accent, delay = 0 }: LayoutProps & { delay?: number }) {
  return (
    <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
      <motion.path
        d="M0 45 L25 30 L50 38 L75 15 L100 28 L125 10 L150 22 L175 8 L200 18"
        fill="none"
        stroke={accentTint(accent, 70)}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay, ease: easePremium }}
      />
    </svg>
  );
}

function Ring({ accent, delay = 0, pct }: LayoutProps & { delay?: number; pct: number }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 -rotate-90">
      <circle cx="20" cy="20" r={r} fill="none" strokeWidth="4" style={{ stroke: accentTint(accent, 14) }} />
      <motion.circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ stroke: accentTint(accent, 70) }}
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: c - (c * pct) / 100 }}
        transition={{ duration: 0.8, delay, ease: easePremium }}
      />
    </svg>
  );
}

function ContentLayout({ accent }: LayoutProps) {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex flex-col gap-1.5">
        <Bar accent={accent} w="w-28" h="h-3" opacity={45} />
        <Bar accent={accent} w="w-20" h="h-2" delay={0.05} />
      </div>
      <Block accent={accent} className="h-16 flex-1" opacity={16} />
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <Block key={i} accent={accent} delay={0.15 + i * 0.05} className="h-12" opacity={12} />
        ))}
      </div>
    </div>
  );
}

function DashboardLayout({ accent }: LayoutProps) {
  return (
    <div className="flex h-full gap-3 p-4">
      <div className="flex w-8 flex-col gap-2">
        {[0, 1, 2, 3].map((i) => (
          <Block key={i} accent={accent} delay={i * 0.05} className="h-6" opacity={i === 0 ? 40 : 12} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <Block key={i} accent={accent} delay={0.1 + i * 0.05} className="h-10" opacity={16} />
          ))}
        </div>
        <div className="h-20 flex-1 rounded-xl p-2" style={{ backgroundColor: accentTint(accent, 8) }}>
          <MiniBars accent={accent} delay={0.3} />
        </div>
      </div>
    </div>
  );
}

function ChatLayout({ accent }: LayoutProps) {
  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="flex flex-col gap-2">
        <Block accent={accent} className="h-8 w-2/3 rounded-2xl rounded-tl-sm" opacity={18} />
        <Block accent={accent} delay={0.1} className="ml-auto h-8 w-1/2 rounded-2xl rounded-tr-sm" opacity={30} />
        <Block accent={accent} delay={0.2} className="h-8 w-3/5 rounded-2xl rounded-tl-sm" opacity={18} />
      </div>
      <div className="flex items-center gap-4">
        <Ring accent={accent} pct={72} delay={0.3} />
        <Ring accent={accent} pct={45} delay={0.4} />
        <div className="flex flex-1 flex-col gap-1.5">
          <Bar accent={accent} w="w-full" opacity={14} delay={0.35} />
          <Bar accent={accent} w="w-2/3" opacity={14} delay={0.4} />
        </div>
      </div>
    </div>
  );
}

function KanbanLayout({ accent }: LayoutProps) {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-4">
      {[0, 1, 2].map((col) => (
        <div key={col} className="flex flex-col gap-2">
          <Bar accent={accent} w="w-2/3" opacity={30} delay={col * 0.05} />
          {Array.from({ length: col === 1 ? 3 : 2 }).map((_, i) => (
            <Block
              key={i}
              accent={accent}
              delay={0.1 + col * 0.05 + i * 0.05}
              className="h-10"
              opacity={14}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ChartLayout({ accent }: LayoutProps) {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <Block key={i} accent={accent} delay={i * 0.05} className="h-10" opacity={16} />
        ))}
      </div>
      <div className="flex-1 rounded-xl p-3" style={{ backgroundColor: accentTint(accent, 8) }}>
        <MiniLineChart accent={accent} delay={0.2} />
      </div>
    </div>
  );
}

function GridLayout({ accent }: LayoutProps) {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <Block accent={accent} delay={i * 0.04} className="aspect-square" opacity={14} />
          <Bar accent={accent} w="w-2/3" h="h-2" delay={0.15 + i * 0.04} opacity={26} />
        </div>
      ))}
    </div>
  );
}

const layoutMap: Record<ScreenLayout, (props: LayoutProps) => ReactElement> = {
  content: ContentLayout,
  dashboard: DashboardLayout,
  chat: ChatLayout,
  kanban: KanbanLayout,
  chart: ChartLayout,
  grid: GridLayout,
};

export function MockScreen({ layout, accent }: { layout: ScreenLayout; accent: AccentColor }) {
  const Layout = layoutMap[layout];
  return <Layout accent={accent} />;
}
