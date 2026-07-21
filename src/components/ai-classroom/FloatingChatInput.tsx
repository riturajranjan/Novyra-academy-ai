"use client";

import {
  Plus,
  Mic,
  SendHorizontal,
  Brain,
  ClipboardCheck,
  TrendingUp,
  Bookmark,
} from "lucide-react";

const actions = [
  {
    title: "Simplify",
    icon: Brain,
  },
  {
    title: "Practice",
    icon: ClipboardCheck,
  },
  {
    title: "Readiness",
    icon: TrendingUp,
  },
  {
    title: "Save",
    icon: Bookmark,
  },
];

export default function FloatingChatInput() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8">
      <div className="glass-card rounded-[32px] p-2.5 flex items-center gap-4 border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group/input">
        <button className="w-14 h-14 flex items-center justify-center rounded-[24px] text-on-surface-variant hover:text-primary transition-colors bg-white/5">
          <span className="material-symbols-outlined text-2xl">
            attach_file
          </span>
        </button>
        <input
          className="flex-1 bg-transparent border-none focus:ring-0 text-lg text-on-surface placeholder:text-on-surface-variant/40 px-4"
          placeholder="Ask your mentor about Forces or Inertia..."
          type="text"
        />
        <div className="flex items-center gap-3 pr-2">
          <button className="w-14 h-14 flex items-center justify-center rounded-[24px] text-primary bg-primary/10 hover:bg-primary/20 transition-all">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              mic
            </span>
          </button>
          <button className="bg-primary text-on-primary w-14 h-14 flex items-center justify-center rounded-[24px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
