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
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-base ease-soft",
      )}
    >
      <div
        className={cn(
          "mx-auto mt-0 max-w-[90rem] transition-all duration-base ease-soft",
          scrolled ? "px-3 pt-3" : "px-0 pt-0",
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-4 px-4 transition-all duration-base ease-soft sm:px-6 lg:px-8",
            scrolled
              ? "glass-strong shadow-card rounded-2xl border"
              : "border border-transparent bg-transparent",
          )}
        >
          <Link
            href="/"
            className="text-title font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
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
