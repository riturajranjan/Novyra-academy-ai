"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { legalLinks } from "@/content/footer";

/** The closing bar — copyright, legal links, theme switcher, and language
 * selector, separated from the rest of the footer by a glass divider. */
export function FooterBottom() {
  return (
    <div className="border-border-subtle flex flex-col items-center gap-4 border-t pt-5 sm:flex-row sm:justify-between">
      <p className="text-caption text-foreground-secondary text-center sm:text-left">
        © 2026 Novyra Technologies. All Rights Reserved.
      </p>

      <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
        {legalLinks.map((link) => (
          <Link key={link.label} href={link.href} className="text-caption text-foreground-secondary hover:text-foreground transition-colors duration-fast">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
}
