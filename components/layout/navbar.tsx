"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/lib/use-scrolled";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Magnetic } from "@/components/ui/magnetic";
import { NavDesktop } from "@/components/layout/nav-desktop";
import { NavMobile } from "@/components/layout/nav-mobile";
import Image from "next/image";

export function Navbar() {
  const scrolled = useScrolled();
  const t = useTranslations("common");

  return (
    <header
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      className="fixed inset-x-0 top-0 z-50 w-full max-w-full">
      <div className="mx-auto max-w-[90rem] px-3 md:px-5 pt-4 transition-[padding] duration-base ease-soft sm:px-6 sm:pt-[18px] lg:px-7">
        <div
          style={{ backdropFilter: `blur(${scrolled ? 28 : 20}px) saturate(180%)`, WebkitBackdropFilter: `blur(${scrolled ? 28 : 20}px) saturate(180%)` }}
          className={cn(
            "flex items-center justify-between gap-4 rounded-[28px] border px-4 transition-all duration-base ease-soft sm:px-6 lg:rounded-[32px] lg:px-8",
            scrolled
              ? "glass-strong shadow-card-hover h-[60px] lg:h-[68px]"
              : "glass shadow-card h-[68px] lg:h-[80px]",
          )}>
          <Link
            href="/"
            className={cn(
              "text-title-lg lg:text-title text-foreground origin-left font-semibold transition-transform duration-base ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
              scrolled && "scale-90",
            )}>
            {/* Novyra<span className="text-gradient-brand">.</span> */}
            <Image
              src="/logo.png"
              alt="Novyra Technologies Logo"
              width={120}
              height={40}
              className="h-auto w-auto"
            />
          </Link>

          <NavDesktop />

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Magnetic className="hidden lg:inline-flex">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "gradient", size: "sm" }),
                  "inline-flex",
                )}>
                {t("startProject")}
              </Link>
            </Magnetic>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
