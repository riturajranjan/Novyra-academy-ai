"use client";

import { Minus } from "lucide-react";
import { motion } from "framer-motion";
import { compareRows, pricingPlans, type CompareValue } from "@/content/pricing";
import { accentStroke } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

function CheckGlyph({ color }: { color: string }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="mx-auto h-5 w-5"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easePremium }}
    >
      <motion.path
        d="M5 13l4 4L19 7"
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function Cell({ value, color }: { value: CompareValue; color: string }) {
  if (value === true) return <CheckGlyph color={color} />;
  if (value === false) return <Minus className="text-foreground-secondary/40 mx-auto h-4 w-4" aria-hidden />;
  return (
    <span className="text-caption text-body-sm font-medium" style={{ color }}>
      {value}
    </span>
  );
}

/** Premium glass feature-comparison table — animated check glyphs, glass
 * rows, and a hover highlight per row. */
export function ComparisonTable() {
  return (
    <div className="glass-strong shadow-card overflow-hidden rounded-[28px]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="border-border-subtle border-b">
              <th className="text-body-sm text-foreground-secondary p-5 text-left font-semibold">Compare</th>
              {pricingPlans.map((plan) => (
                <th key={plan.id} className="text-body-sm text-foreground p-5 text-center font-semibold">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row, i) => (
              <tr
                key={row.label}
                className={cn(
                  "border-border-subtle/60 hover:bg-foreground/[0.03] border-b transition-colors duration-fast last:border-b-0",
                  i % 2 === 1 && "bg-foreground/[0.015]",
                )}
              >
                <td className="text-body-sm text-foreground p-5 font-medium">{row.label}</td>
                {pricingPlans.map((plan) => (
                  <td key={plan.id} className="p-5 text-center">
                    <Cell value={row.values[plan.id]} color={accentStroke[plan.accent]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
