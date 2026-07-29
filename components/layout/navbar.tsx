"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/lib/use-scrolled";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { NavDesktop } from "@/components/layout/nav-desktop";
import { NavMobile } from "@/components/layout/nav-mobile";

export function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      className="fixed inset-x-0 top-0 z-50 w-full max-w-full"
    >
      <div className="mx-auto max-w-[90rem] px-5 pt-4 transition-[padding] duration-base ease-soft sm:px-6 sm:pt-[18px] lg:px-7">
        <div
          className={cn(
            "shadow-card flex items-center justify-between gap-4 rounded-[28px] border px-4 transition-all duration-base ease-soft sm:px-6 lg:rounded-[32px] lg:px-8",
            scrolled ? "glass-strong h-[60px] lg:h-16" : "glass h-[68px] lg:h-[72px]",
          )}
        >
          <Link
            href="/"
            className="text-title-lg lg:text-title font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
          >
            Novyra<span className="text-gradient-brand">.</span>
          </Link>

          <NavDesktop />

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "gradient", size: "sm" }), "hidden lg:inline-flex")}
            >
              Start a Project
            </Link>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
