"use client";

import { Bell, Rocket } from "lucide-react";

interface MobileHeaderProps {
  streak?: number;
}

export default function MobileHeader({ streak }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 lg:hidden">
      <div className="px-margin-mobile flex items-center justify-between h-16">
        {/* Left */}

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Rocket size={18} className="text-primary fill-primary" />
          </div>

          <h1 className="font-headline-md text-base font-bold tracking-tight">
            Mission Control
          </h1>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          {typeof streak === "number" && streak > 0 && (
            <div className="flex items-center bg-surface-container-high px-3 py-1 rounded-full gap-1 border border-white/5">
              <span className="material-symbols-outlined text-tertiary text-sm">
                local_fire_department
              </span>

              <span className="font-mono-sm text-xs text-tertiary font-bold">
                {streak}
              </span>
            </div>
          )}

          <button
            className="
            w-10
            h-10

            flex

            items-center

            justify-center

            rounded-full

            bg-surface-container

            border

            border-white/5
          ">
            <Bell size={20} className="text-on-surface-variant" />
          </button>
        </div>
      </div>
    </header>
  );
}
