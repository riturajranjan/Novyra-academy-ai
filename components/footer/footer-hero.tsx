"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import { footerCtas, footerHero } from "@/content/footer";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** The footer's opening statement — the largest, most confident heading on
 * the page, with three magnetic/ripple CTAs underneath. */
export function FooterHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easePremium }}
      className="flex flex-col items-center gap-5 text-center"
    >
      <h2 className="text-display-lg sm:text-display-xl text-foreground font-semibold text-balance">
        Let&apos;s Build The Future <span className="text-gradient-brand">Together.</span>
      </h2>
      <p className="text-body sm:text-body-lg text-foreground-secondary max-w-2xl text-pretty">{footerHero.description}</p>

      <div className="flex w-full flex-col items-center gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
        {footerCtas.map((cta) => {
          const Icon = cta.icon;
          const external = cta.href.startsWith("http");
          return (
            <Magnetic key={cta.label} className="w-full sm:w-auto">
              <RippleLink
                href={cta.href}
                className={cn(buttonVariants({ variant: cta.variant, size: "lg" }), "group relative w-full overflow-hidden sm:w-auto")}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {cta.variant === "gradient" ? (
                  <span
                    aria-hidden
                    className="bg-gradient-shimmer pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                ) : null}
                <Icon className="h-4 w-4" aria-hidden />
                {cta.label}
              </RippleLink>
            </Magnetic>
          );
        })}
      </div>
    </motion.div>
  );
}
