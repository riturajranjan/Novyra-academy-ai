"use client";

import { motion } from "framer-motion";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import type { QuickContactCard as QuickContactCardData } from "@/content/contact-cta";

interface QuickContactCardProps {
  card: QuickContactCardData;
  index: number;
}

/** One of the four quick-contact glass cards — floating icon, glow on
 * hover, gradient-tinted border, and a lift on hover. */
export function QuickContactCard({ card, index }: QuickContactCardProps) {
  const Icon = card.icon;
  const stroke = accentStroke[card.accent];
  const external = card.href.startsWith("http") || card.href.startsWith("mailto") || card.href.startsWith("tel");

  return (
    <motion.a
      href={card.href}
      target={card.href.startsWith("http") ? "_blank" : undefined}
      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: easePremium }}
      className="group border-border-subtle bg-surface/70 relative flex flex-col items-start gap-3 overflow-hidden rounded-[24px] border p-6 backdrop-blur-xl transition-shadow duration-base"
      aria-label={`${card.title}${external ? " (opens in a new tab)" : ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[32px] opacity-0 blur-2xl transition-opacity duration-slow group-hover:opacity-100"
        style={{ backgroundColor: accentTint(card.accent, 20) }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-base group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${accentTint(card.accent, 45)}` }}
      />
      <motion.span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
        style={{ backgroundColor: accentTint(card.accent, 16) }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="h-6 w-6" style={{ color: stroke }} aria-hidden />
      </motion.span>
      <div className="flex flex-col gap-1">
        <h4 className="text-title text-foreground font-semibold">{card.title}</h4>
        <p className="text-body-sm text-foreground-secondary">{card.detail}</p>
        <p className="text-caption text-foreground-secondary/80">{card.note}</p>
      </div>
    </motion.a>
  );
}
