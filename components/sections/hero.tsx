"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/ui/magnetic";
import { RippleLink } from "@/components/ui/ripple-link";
import { buttonVariants } from "@/components/ui/button";
import { HeroBackground } from "@/components/hero/hero-background";
import { HeroBadge } from "@/components/hero/hero-badge";
import { HeroTrustSection } from "@/components/hero/hero-trust-section";
import { HeroImageShowcase } from "@/components/hero/hero-image-showcase";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** The site's primary hero — a 45/55 split between the pitch (badge,
 * headline, CTAs, honest trust signals) and the provided static
 * product-dashboard image as the centerpiece, with premium glow/particle
 * effects built around it (never modifying the image itself). Scrolling
 * past the section fades the headline and drifts the background. */
export function Hero() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.3]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-[46rem] w-full max-w-full overflow-hidden md:min-h-[54rem]">
      <motion.div className="absolute inset-0 -z-10" style={reduceMotion ? undefined : { y: bgY }}>
        <HeroBackground />
      </motion.div>

      <Container className="grid grid-cols-1 items-center gap-14 pt-28 pb-16 lg:grid-cols-12 lg:gap-6 lg:pt-36 lg:pb-24">
        <div className="flex flex-col items-center gap-5 text-center lg:col-span-5 lg:items-start lg:text-left">
          <HeroBadge />

          <motion.div style={reduceMotion ? undefined : { opacity: headlineOpacity, y: headlineY }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easePremium, delay: 0.1 }}
              className="text-display-lg sm:text-display-xl max-w-xl font-semibold text-balance text-foreground"
            >
              {t("headline.before")}{" "}
              <span className="text-gradient-brand animated-gradient-text">{t("headline.highlight")}</span>{" "}
              {t("headline.after")}
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easePremium, delay: 0.2 }}
            className="text-body-lg text-foreground-secondary max-w-md text-pretty lg:max-w-lg"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easePremium, delay: 0.3 }}
            className="flex w-full max-w-sm flex-col items-stretch gap-3 min-[430px]:max-w-none min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center min-[430px]:justify-center lg:justify-start"
          >
            <Magnetic className="w-full min-[430px]:w-auto">
              <RippleLink
                href="/contact"
                className={cn(buttonVariants({ variant: "gradient", size: "lg" }), "group w-full min-[430px]:w-auto")}
              >
                {t("cta.primary")}
                <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden />
              </RippleLink>
            </Magnetic>
            <Magnetic className="w-full min-[430px]:w-auto">
              <RippleLink
                href="/services"
                className={cn(buttonVariants({ variant: "glass", size: "lg" }), "group w-full min-[430px]:w-auto")}
              >
                {t("cta.secondary")}
                <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden />
              </RippleLink>
            </Magnetic>
          </motion.div>

          <HeroTrustSection />
        </div>

        <div className="lg:col-span-7">
          <HeroImageShowcase />
        </div>
      </Container>
    </section>
  );
}
