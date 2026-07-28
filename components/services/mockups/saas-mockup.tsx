"use client";

import { motion } from "framer-motion";
import { BarChart3, CreditCard, HeartPulse, LayoutDashboard, ShieldCheck, Users } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import type { AccentColor } from "@/content/hero-screens";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Users" },
  { icon: BarChart3, label: "Analytics" },
  { icon: CreditCard, label: "Billing" },
  { icon: ShieldCheck, label: "Roles" },
];

const highlights = ["Role-Based Access", "Custom Reports", "Real-time Analytics"];

/** Generic module type only — never a client or company name. */
const modules = [
  { icon: Users, label: "CRM" },
  { icon: HeartPulse, label: "Hospital ERP" },
  { icon: GraduationCap, label: "School ERP" },
];

/** SaaS admin mockup — sidebar navigation, feature highlights, and the
 * generic platform module types Novyra builds on. No client names, no
 * fabricated figures — everything here is a category label. */
export function SaasMockup({ accent }: { accent: AccentColor }) {
  return (
    <div className="grid h-full min-h-0 grid-cols-1 sm:grid-cols-4">
      <div className="border-border-subtle col-span-1 flex flex-row justify-around border-b p-2 sm:flex-col sm:justify-start sm:gap-1 sm:border-r sm:border-b-0 sm:p-3">
        {navItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${i === 0 ? "bg-foreground/5" : ""}`}
          >
            <item.icon
              className="h-3.5 w-3.5 shrink-0"
              style={{ color: i === 0 ? accentStroke[accent] : "var(--foreground-secondary)" }}
              aria-hidden
            />
            <span className="text-caption text-foreground-secondary hidden sm:inline">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="col-span-3 flex flex-col justify-center gap-4 p-3 sm:p-4">
        <div className="flex flex-wrap gap-1.5">
          {highlights.map((h, i) => (
            <motion.span
              key={h}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.08, ease: easePremium }}
              className="text-caption rounded-full px-3 py-1 font-medium"
              style={{ backgroundColor: accentTint(accent, 12), color: accentTint(accent, 95) }}
            >
              {h}
            </motion.span>
          ))}
        </div>

        <div>
          <p className="text-caption text-foreground-secondary mb-2 font-medium tracking-[0.08em] uppercase">
            Platform Modules
          </p>
          <div className="grid grid-cols-3 gap-2">
            {modules.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.08, ease: easePremium }}
                className="border-border-subtle flex flex-col items-center gap-1.5 rounded-lg border px-2 py-3"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ backgroundColor: accentTint(accent, 14) }}
                >
                  <m.icon className="h-4 w-4" style={{ color: accentStroke[accent] }} aria-hidden />
                </span>
                <span className="text-caption text-foreground-secondary truncate">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
