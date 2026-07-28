"use client";

import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
] as const;

type LangCode = (typeof languages)[number]["code"];

/**
 * UI-only for now: switches the displayed label but doesn't yet change the
 * URL. Will route to /en, /hi once locale-segmented routing lands.
 */
export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<LangCode>("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = languages.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((v) => !v)}
        className="glass hover:border-brand-blue/40 flex h-10 items-center gap-1.5 rounded-pill px-3 text-body-sm font-medium text-foreground-secondary transition-colors duration-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Languages className="h-4 w-4" aria-hidden />
        {current.code.toUpperCase()}
      </button>
      {open ? (
        <div
          role="listbox"
          aria-label="Language"
          className="glass-strong shadow-card absolute right-0 top-full mt-2 min-w-36 rounded-lg p-1"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={lang === l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-body-sm transition-colors duration-fast",
                lang === l.code
                  ? "text-gradient-brand font-semibold"
                  : "text-foreground-secondary hover:bg-foreground/5 hover:text-foreground",
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
