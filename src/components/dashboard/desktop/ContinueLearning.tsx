"use client";

import type { Recommendation } from "@/lib/recommendations";
import type { DashboardActivity } from "@/lib/contentDal";

import RecentActivity from "./RecentActivity";

interface ContinueLearningProps {
  recommendations: Recommendation[];
  activities: DashboardActivity[];
}

export default function ContinueLearning({ recommendations, activities }: ContinueLearningProps) {
  const [primary, secondary] = recommendations;

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
          {recommendations.length === 0 && (
            <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/5">
              <p className="text-on-surface text-label-md font-medium leading-relaxed border-l-2 border-primary/40 pl-3">
                Nothing to flag right now — keep studying and check back here.
              </p>
            </div>
          )}
          {primary && (
            <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/5">
              <p className="text-on-surface text-label-md font-medium mb-4 leading-relaxed border-l-2 border-primary/40 pl-3">
                &quot;{primary.description}&quot;
              </p>
              {primary.href && (
                <a
                  href={primary.href}
                  className="w-full text-left px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold hover:bg-primary/20 transition-all flex items-center justify-between group">
                  {primary.title}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    play_circle
                  </span>
                </a>
              )}
            </div>
          )}
          {secondary && (
            <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/5">
              <p className="text-on-surface text-label-md font-medium mb-4 leading-relaxed border-l-2 border-tertiary/40 pl-3">
                &quot;{secondary.description}&quot;
              </p>
              {secondary.href && (
                <a
                  href={secondary.href}
                  className="w-full text-left px-4 py-2.5 rounded-xl bg-tertiary/10 border border-tertiary/20 text-tertiary text-[11px] font-bold hover:bg-tertiary/20 transition-all flex items-center justify-between group">
                  {secondary.title}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              )}
            </div>
          )}
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
      <RecentActivity activities={activities} />
    </aside>
  );
}
