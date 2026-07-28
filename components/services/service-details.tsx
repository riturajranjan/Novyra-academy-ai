"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarClock, CheckCircle2, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import type { AccentColor } from "@/content/hero-screens";
import type { ServiceCategory } from "@/content/service-categories";

interface DetailGroupProps {
  label: string;
  icon: LucideIcon;
  accent: AccentColor;
  items: string[];
  variant: "chips" | "list";
}

function DetailGroup({ label, icon: Icon, accent, items, variant }: DetailGroupProps) {
  return (
    <div>
      <p className="text-caption text-foreground-secondary flex items-center gap-1.5 font-semibold tracking-wide uppercase">
        <Icon className="h-3.5 w-3.5" style={{ color: accentStroke[accent] }} aria-hidden />
        {label}
      </p>
      {variant === "chips" ? (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: easePremium }}
              className="border-border-subtle text-body-sm text-foreground rounded-full border px-3 py-1"
            >
              {item}
            </motion.span>
          ))}
        </div>
      ) : (
        <ul className="mt-2.5 flex flex-col gap-2">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: easePremium }}
              className="text-body-sm text-foreground-secondary flex items-start gap-2"
            >
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: accentTint(accent, 85) }} aria-hidden />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Right rail — description, fit, stack, timeline, and deliverables for the
 * active service, plus the two engagement actions. Content height varies per
 * category, so this panel is allowed to grow taller than the preview rather
 * than being clipped or force-stretched to match it. */
export function ServiceDetails({ category }: { category: ServiceCategory }) {
  return (
    <div className="glass shadow-card overflow-hidden rounded-[28px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.42, ease: easePremium }}
          className="flex flex-col gap-6 p-6"
        >
          <div>
            <p className="text-title-lg text-foreground font-semibold">{category.label}</p>
            <p className="text-body-sm text-foreground-secondary mt-2">{category.description}</p>
          </div>

          <DetailGroup label="Perfect For" icon={Sparkles} accent={category.accent} items={category.bestFor} variant="chips" />
          <DetailGroup label="Technologies" icon={Wrench} accent={category.accent} items={category.technologies} variant="chips" />

          <div>
            <p className="text-caption text-foreground-secondary flex items-center gap-1.5 font-semibold tracking-wide uppercase">
              <CalendarClock className="h-3.5 w-3.5" style={{ color: accentStroke[category.accent] }} aria-hidden />
              Timeline
            </p>
            <p className="text-body-sm text-foreground mt-2.5 font-medium">{category.timeline}</p>
          </div>

          <DetailGroup label="Deliverables" icon={CheckCircle2} accent={category.accent} items={category.deliverables} variant="list" />

          <div className="border-border-subtle grid grid-cols-1 gap-2.5 border-t pt-6 min-[1200px]:grid-cols-2">
            <RippleLink
              href="/contact"
              className={cn(
                buttonVariants({ variant: "gradient", size: "md" }),
                "group min-h-[46px] w-full min-w-0 px-3 text-[14px]",
              )}
            >
              <span className="min-w-0 truncate">Request Free Quote</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-fast group-hover:translate-x-0.5"
                aria-hidden
              />
            </RippleLink>
            <RippleLink
              href={category.cta.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "md" }),
                "min-h-[46px] w-full min-w-0 px-3 text-[14px]",
              )}
            >
              <span className="min-w-0 truncate">View Service</span>
            </RippleLink>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
