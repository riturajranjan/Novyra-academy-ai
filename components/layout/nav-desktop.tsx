"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { easePremium } from "@/lib/motion";
import { navItems, type NavItem } from "@/content/nav";

function isItemActive(item: NavItem, pathname: string) {
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return item.children?.some((c) => pathname.startsWith(c.href.split("#")[0])) ?? false;
}

export function NavDesktop() {
  const pathname = usePathname();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeItem = navItems.find((item) => isItemActive(item, pathname));
  const displayKey = hoveredKey ?? activeItem?.label ?? null;

  useEffect(() => {
    if (!openKey) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenKey(null);
        triggerRefs.current[openKey!]?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openKey]);

  function scheduleClose() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setOpenKey(null), 120);
  }

  function cancelClose() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  }

  return (
    <ul
      className="relative hidden items-center gap-1 lg:flex"
      onMouseLeave={() => setHoveredKey(null)}
    >
      {navItems.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openKey === item.label;

        return (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => {
              setHoveredKey(item.label);
              if (hasChildren) {
                cancelClose();
                setOpenKey(item.label);
              }
            }}
            onMouseLeave={() => {
              if (hasChildren) scheduleClose();
            }}
          >
            {displayKey === item.label ? (
              <motion.div
                layoutId="nav-active-pill"
                className="bg-gradient-brand absolute inset-0 -z-10 rounded-pill opacity-10 dark:opacity-20"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            ) : null}

            {hasChildren ? (
              <button
                ref={(el) => {
                  triggerRefs.current[item.label] = el;
                }}
                type="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={`nav-panel-${item.label}`}
                onClick={() => setOpenKey((k) => (k === item.label ? null : item.label))}
                className="hover:text-gradient-brand flex items-center gap-1 rounded-pill px-4 py-2 text-body-sm font-medium text-foreground transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-fast",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gradient-brand block rounded-pill px-4 py-2 text-body-sm font-medium text-foreground transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            )}

            {hasChildren ? (
              <AnimatePresence>
                {isOpen ? (
                  <motion.div
                    id={`nav-panel-${item.label}`}
                    role="group"
                    aria-label={`${item.label} menu`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: easePremium }}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    className="glass-strong shadow-card absolute left-1/2 top-full mt-3 w-[36rem] -translate-x-1/2 rounded-2xl p-3"
                  >
                    <div className="grid grid-cols-[1fr_14rem] gap-2">
                      <div className="grid grid-cols-2 gap-1">
                        {item.children!.map((child) => {
                          const Icon = child.icon;
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setOpenKey(null)}
                              className="hover:bg-foreground/5 group flex flex-col gap-2 rounded-xl p-3 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                            >
                              <span className="bg-brand-soft flex h-9 w-9 items-center justify-center rounded-lg">
                                <Icon className="text-brand-blue h-5 w-5" aria-hidden />
                              </span>
                              <span className="text-body-sm group-hover:text-gradient-brand font-medium text-foreground transition-colors">
                                {child.label}
                              </span>
                              <span className="text-caption text-foreground-secondary">
                                {child.description}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      {item.featured ? (
                        <Link
                          href={item.featured.href}
                          onClick={() => setOpenKey(null)}
                          className="group relative isolate flex flex-col justify-between overflow-hidden rounded-xl p-4"
                        >
                          <div className="bg-surface absolute inset-0 -z-20" />
                          <div className="bg-gradient-aurora absolute inset-0 -z-10 opacity-40" />
                          <div>
                            <p className="text-body-sm font-semibold text-foreground">
                              {item.featured.title}
                            </p>
                            <p className="text-caption text-foreground-secondary mt-1">
                              {item.featured.description}
                            </p>
                          </div>
                          <span className="text-caption group-hover:text-gradient-brand mt-4 flex items-center gap-1 font-semibold text-foreground">
                            {item.featured.cta}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                          </span>
                        </Link>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
