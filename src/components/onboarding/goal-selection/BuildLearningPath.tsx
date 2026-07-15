"use client";

import { Sparkles } from "lucide-react";

export default function BuildLearningPath() {
  return (
    <>
      <div className="md:grid hidden grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        <div className="glass-panel p-3 rounded-xl border-white/5">
          <div className="text-[10px] text-on-surface-variant uppercase">
            Chapters
          </div>
          <div className="text-lg font-bold text-primary">52</div>
        </div>
        <div className="glass-panel p-3 rounded-xl border-white/5">
          <div className="text-[10px] text-on-surface-variant uppercase">
            Duration
          </div>
          <div className="text-lg font-bold text-primary">112 Days</div>
        </div>
        <div className="glass-panel p-3 rounded-xl border-white/5">
          <div className="text-[10px] text-on-surface-variant uppercase">
            Daily Tasks
          </div>
          <div className="text-lg font-bold text-primary">4</div>
        </div>
        <div className="glass-panel p-3 rounded-xl border-white/5">
          <div className="text-[10px] text-on-surface-variant uppercase">
            AI Confidence
          </div>
          <div className="text-lg font-bold text-primary">93%</div>
        </div>
        <div className="glass-panel p-3 rounded-xl border-white/5">
          <div className="text-[10px] text-on-surface-variant uppercase">
            Revision
          </div>
          <div className="text-lg font-bold text-primary">7 Days</div>
        </div>
      </div>
      <footer
        className="
        fixed
        bottom-0
        left-0
        right-0
        border-t
        border-white/5
        bg-[#0B1326]/90
        p-4
        backdrop-blur-xl
        md:hidden
      ">
        <div className="mx-auto max-w-md">
          <button
            className="
            flex
            h-14
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-[#8083FF]
            to-[#4CD7F6]
            font-semibold
            text-[#1000A9]
            shadow-[0_0_30px_rgba(128,131,255,.4)]
          ">
            Build My Learning Path
            <Sparkles size={18} />
          </button>
        </div>
      </footer>
    </>
  );
}
