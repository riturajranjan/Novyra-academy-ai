"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { easePremium } from "@/lib/motion";
import { navItems } from "@/content/nav";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function NavMobile() {
  const [open, setOpen] = useState(false);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="glass flex h-12 w-12 items-center justify-center rounded-pill text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: easePremium }}
            className="glass-strong fixed inset-x-3 z-50 max-h-[calc(100dvh-1.5rem-env(safe-area-inset-top))] w-auto max-w-full overflow-y-auto rounded-2xl p-4 shadow-card lg:hidden"
            style={{ top: "max(0.75rem, calc(env(safe-area-inset-top) + 0.5rem))" }}
          >
            <div className="flex items-center justify-between px-2 pb-4">
              <span className="text-title font-semibold text-foreground">Novyra</span>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="glass flex h-11 w-11 items-center justify-center rounded-pill text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expandedKey === item.label;

                if (!hasChildren) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="hover:bg-foreground/5 flex items-center gap-3 rounded-xl px-3 py-3 text-body font-medium text-foreground transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                      >
                        <Icon className="text-foreground-secondary h-5 w-5" aria-hidden />
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`mobile-panel-${item.label}`}
                      onClick={() => setExpandedKey((k) => (k === item.label ? null : item.label))}
                      className="hover:bg-foreground/5 flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-body font-medium text-foreground transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="text-foreground-secondary h-5 w-5" aria-hidden />
                        {item.label}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-base ease-soft",
                          isExpanded && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    <div
                      id={`mobile-panel-${item.label}`}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-base ease-soft",
                        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <ul className="flex flex-col gap-0.5 py-1 pl-11 pr-2">
                          {item.children!.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="hover:bg-foreground/5 block rounded-lg px-3 py-2 text-body-sm text-foreground-secondary transition-colors duration-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="border-border-subtle mt-4 flex items-center justify-between gap-3 border-t pt-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "gradient", size: "md" }), "mt-4 w-full")}
            >
              Start a Project
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
