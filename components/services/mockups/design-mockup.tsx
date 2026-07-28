"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import type { AccentColor } from "@/content/hero-screens";

/** Gallery of brand-collateral mockups for the Graphic Design service
 * preview. Shapes and labels only — no fabricated client artwork. */
export function DesignMockup({ accent }: { accent: AccentColor }) {
  const tint = (p: number) => accentTint(accent, p);

  const items: { label: string; content: React.ReactNode }[] = [
    {
      label: "Logo",
      content: (
        <div className="flex h-full items-center justify-center">
          <div className="h-7 w-7 rounded-full" style={{ backgroundColor: accentStroke[accent] }} />
        </div>
      ),
    },
    {
      label: "Brand Kit",
      content: (
        <div className="flex h-full flex-col items-center justify-center gap-1.5">
          <div className="flex gap-1">
            {[accentStroke[accent], tint(40), tint(20)].map((c, i) => (
              <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span className="h-1 w-8 rounded-full" style={{ backgroundColor: tint(24) }} />
        </div>
      ),
    },
    {
      label: "Business Card",
      content: (
        <div className="flex h-full flex-col justify-center gap-1 px-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accentStroke[accent] }} />
          <span className="h-1 w-3/4 rounded-full" style={{ backgroundColor: tint(20) }} />
          <span className="h-1 w-1/2 rounded-full" style={{ backgroundColor: tint(14) }} />
        </div>
      ),
    },
    {
      label: "Instagram Post",
      content: (
        <div className="flex h-full flex-col items-center justify-center gap-1">
          <ImageIcon className="h-4 w-4" style={{ color: accentStroke[accent] }} aria-hidden />
          <span className="h-1 w-8 rounded-full" style={{ backgroundColor: tint(30) }} />
        </div>
      ),
    },
    {
      label: "Website Banner",
      content: (
        <div className="flex h-full items-center px-2">
          <span className="h-2 w-full rounded-full" style={{ backgroundColor: tint(24) }} />
        </div>
      ),
    },
    {
      label: "Brochure",
      content: (
        <div className="flex h-full gap-1 p-1.5">
          {[26, 18, 12].map((p) => (
            <span key={p} className="h-full flex-1 rounded-sm" style={{ backgroundColor: tint(p) }} />
          ))}
        </div>
      ),
    },
    {
      label: "Packaging",
      content: (
        <div className="flex h-full items-center justify-center">
          <div
            className="h-8 w-8 rounded-md"
            style={{ backgroundColor: tint(18), border: `1.5px solid ${accentStroke[accent]}` }}
          />
        </div>
      ),
    },
    {
      label: "Presentation",
      content: (
        <div className="flex h-full flex-col justify-center gap-1 px-2">
          <span className="h-1.5 w-2/3 rounded-full" style={{ backgroundColor: accentStroke[accent] }} />
          <span className="h-1 w-full rounded-full" style={{ backgroundColor: tint(14) }} />
          <span className="h-1 w-3/4 rounded-full" style={{ backgroundColor: tint(14) }} />
        </div>
      ),
    },
  ];

  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3 sm:grid-cols-4">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.05, ease: easePremium }}
          className="border-border-subtle flex flex-col overflow-hidden rounded-lg border"
        >
          <div className="min-h-0 flex-1">{item.content}</div>
          <p className="text-caption text-foreground-secondary border-border-subtle truncate border-t px-1.5 py-1 text-center">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
