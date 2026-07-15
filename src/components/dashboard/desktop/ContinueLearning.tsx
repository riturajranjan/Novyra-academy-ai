"use client";

import { BookOpen, Clock3, ArrowRight } from "lucide-react";

export default function ContinueLearning() {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-gutter">
      <div className="glass-panel premium-border rounded-2xl p-6 flex flex-col sticky top-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20">
              <span
                className="material-symbols-outlined text-on-primary-fixed"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                smart_toy
              </span>
            </div>
            <div>
              <h3 className=" text-label-md font-bold">Proactive AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                  Analysis Mode
                </span>
              </div>
            </div>
          </div>
          <button className="text-on-surface-variant hover:text-white transition-colors">
            <span className="material-symbols-outlined text-md">more_vert</span>
          </button>
        </div>
        <div className="space-y-6">
          {/* Memory-based Prompt 1 */}
          <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/5">
            <p className="text-on-surface text-label-md font-medium mb-4 leading-relaxed border-l-2 border-primary/40 pl-3">
              &quot;Yesterday you struggled with{" "}
              <span className="text-primary font-bold">Angular Momentum</span>{" "}
              questions. Would you like a 2m visual refresher?&quot;
            </p>
            <div className="flex flex-col gap-2">
              <button className="w-full text-left px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold hover:bg-primary/20 transition-all flex items-center justify-between group">
                Start Revision
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  play_circle
                </span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-medium hover:bg-white/10 transition-all">
                  Gen. Notes
                </button>
                <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-medium hover:bg-white/10 transition-all">
                  Quiz Me
                </button>
              </div>
            </div>
          </div>
          {/* Memory-based Prompt 2 */}
          <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/5">
            <p className="text-on-surface text-label-md font-medium mb-4 leading-relaxed border-l-2 border-tertiary/40 pl-3">
              &quot;Retention of Cell Biology is at 94%. You&apos;re ready for{" "}
              <span className="text-tertiary font-bold">Practice Mode</span>
              .&quot;
            </p>
            <button className="w-full text-left px-4 py-2.5 rounded-xl bg-tertiary/10 border border-tertiary/20 text-tertiary text-[11px] font-bold hover:bg-tertiary/20 transition-all flex items-center justify-between group">
              Go to Practice
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        <div className="relative group mt-8">
          <textarea
            className="w-full bg-surface-container-high border-white/10 rounded-2xl p-4 pb-14 text-label-md focus:ring-primary/30 focus:border-primary/50 resize-none transition-all placeholder:opacity-50"
            placeholder="Ask your AI Teacher anything..."
            rows={3}
            defaultValue={""}
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl hover:bg-white/5 text-on-surface-variant transition-all">
                <span className="material-symbols-outlined text-lg">mic</span>
              </button>
              <button className="p-2 rounded-xl hover:bg-white/5 text-on-surface-variant transition-all">
                <span className="material-symbols-outlined text-lg">
                  attach_file
                </span>
              </button>
            </div>
            <button className="bg-primary px-4 py-2 rounded-xl text-on-primary ai-glow hover:brightness-110 transition-all flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Ask AI
              </span>
              <span className="material-symbols-outlined text-md font-bold">
                send
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Upcoming Events */}
      <div className="glass-panel premium-border rounded-2xl p-6">
        <h3 className=" text-label-md font-bold mb-6 flex items-center justify-between">
          Timeline
          <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
            3 Events
          </span>
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-all cursor-pointer group border border-transparent hover:border-white/5">
            <div className="w-10 h-10 rounded-lg bg-orange-400/10 text-orange-400 flex flex-col items-center justify-center border border-orange-400/20">
              <span className="text-[9px] uppercase font-bold leading-none">
                Oct
              </span>
              <span className="text-lg font-bold leading-tight">24</span>
            </div>
            <div>
              <h4 className=" text-label-md font-bold">Algebra Quiz</h4>
              <p className="text-[11px] text-on-surface-variant">
                Tomorrow, 10:00 AM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-all cursor-pointer group border border-transparent hover:border-white/5">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex flex-col items-center justify-center border border-primary/20">
              <span className="text-[9px] uppercase font-bold leading-none">
                Oct
              </span>
              <span className="text-lg font-bold leading-tight">26</span>
            </div>
            <div>
              <h4 className=" text-label-md font-bold">Lab Submission</h4>
              <p className="text-[11px] text-on-surface-variant">
                Sat, 11:59 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
