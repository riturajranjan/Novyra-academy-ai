"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Zap } from "lucide-react";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import type { AccentColor } from "@/content/hero-screens";

const navLinks = ["Home", "Work", "Pricing", "Contact"];
const features = [
  { icon: Zap, label: "Fast" },
  { icon: ShieldCheck, label: "Secure" },
  { icon: Smartphone, label: "Responsive" },
];
const tiers = [
  { name: "Starter", price: "$19/mo" },
  { name: "Growth", price: "$49/mo" },
  { name: "Scale", price: "$99/mo" },
];

/** Full landing-page mockup (browser chrome, navbar, hero, feature cards,
 * testimonial, pricing, footer) for the Web Design service preview, with a
 * small phone preview alongside it. Illustrative demo copy only. */
export function WebsiteMockup({ accent }: { accent: AccentColor }) {
  const stroke = accentStroke[accent];
  const tint = (p: number) => accentTint(accent, p);

  return (
    <div className="flex h-full min-h-0 gap-3 p-3 sm:gap-4 sm:p-4">
      <div className="border-border-subtle flex min-w-0 flex-[3] flex-col overflow-hidden rounded-xl border">
        <div className="border-border-subtle flex items-center gap-1.5 border-b px-3 py-2">
          <span className="bg-foreground/15 h-2 w-2 rounded-full" />
          <span className="bg-foreground/15 h-2 w-2 rounded-full" />
          <span className="bg-foreground/15 h-2 w-2 rounded-full" />
          <span className="bg-foreground/5 text-foreground-secondary ml-2 h-5 flex-1 truncate rounded-full px-3 text-[10px] leading-5">
            novyra.studio
          </span>
        </div>

        <div className="border-border-subtle flex items-center gap-3 border-b px-4 py-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: stroke }} />
          <span className="bg-foreground/15 h-1.5 w-10 rounded-full" />
          <nav className="text-caption text-foreground-secondary ml-auto hidden gap-3 sm:flex">
            {navLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </nav>
        </div>

        <div className="border-border-subtle flex items-center gap-4 border-b px-4 py-3">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: easePremium }}
            className="min-w-0 flex-1"
          >
            <p className="text-body-sm text-foreground truncate font-semibold">Build something remarkable</p>
            <p className="text-caption text-foreground-secondary mt-1 truncate">
              Launch a premium web presence in weeks, not months.
            </p>
            <span
              className="text-caption mt-2 inline-block rounded-full px-3 py-1 font-medium text-white"
              style={{ backgroundColor: stroke }}
            >
              Get Started
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: easePremium }}
            className="hidden h-16 w-24 shrink-0 rounded-lg sm:block"
            style={{ backgroundColor: tint(20) }}
          />
        </div>

        <div className="border-border-subtle grid grid-cols-3 gap-2 border-b px-4 py-2.5">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.06, ease: easePremium }}
              className="border-border-subtle flex items-center gap-1.5 rounded-md border px-2 py-1.5"
            >
              <f.icon className="h-3.5 w-3.5 shrink-0" style={{ color: stroke }} aria-hidden />
              <span className="text-caption text-foreground-secondary truncate">{f.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.34, ease: easePremium }}
          className="border-border-subtle flex items-center gap-2.5 border-b px-4 py-2.5"
        >
          <span className="h-6 w-6 shrink-0 rounded-full" style={{ backgroundColor: tint(24) }} />
          <div className="min-w-0 flex-1">
            <span className="bg-foreground/12 block h-1.5 w-4/5 rounded-full" />
            <span className="bg-foreground/8 mt-1.5 block h-1.5 w-1/2 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 px-4 py-2.5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.42 + i * 0.06, ease: easePremium }}
              className="border-border-subtle rounded-md border py-1.5 text-center"
            >
              <p className="text-caption text-foreground-secondary">{tier.name}</p>
              <p className="text-caption text-foreground font-semibold">{tier.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-border-subtle mt-auto flex items-center justify-between border-t px-4 py-2">
          <span className="bg-foreground/10 h-1.5 w-16 rounded-full" />
          <span className="bg-foreground/10 h-1.5 w-10 rounded-full" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: easePremium }}
        className="border-border-subtle hidden w-16 shrink-0 flex-col overflow-hidden rounded-[1.1rem] border sm:flex sm:w-20"
      >
        <div className="border-border-subtle flex items-center justify-center border-b py-1.5">
          <span className="bg-foreground/20 h-1 w-6 rounded-full" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-2">
          <span className="h-8 rounded-md" style={{ backgroundColor: tint(16) }} />
          <span className="h-1.5 w-full rounded-full" style={{ backgroundColor: tint(20) }} />
          <span className="h-1.5 w-3/4 rounded-full" style={{ backgroundColor: tint(14) }} />
          <span className="mt-1 h-5 rounded-full" style={{ backgroundColor: stroke }} />
          <span className="h-10 flex-1 rounded-md" style={{ backgroundColor: tint(10) }} />
        </div>
      </motion.div>
    </div>
  );
}
