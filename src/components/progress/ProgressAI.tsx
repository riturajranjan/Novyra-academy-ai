import React from "react";

const ProgressAI = () => {
  return (
    <>
      <section className="md:hidden">
        <div className="bg-primary-container/10 border border-primary/20 rounded-xl overflow-hidden ai-glow">
          <button className="w-full p-4 flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-primary-container text-[18px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}>
                  auto_awesome
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-tighter">
                  Dr. Nova AI
                </p>
                <p className="text-xs text-on-surface-variant">
                  Proactive Mentoring Active
                </p>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-on-surface-variant transition-transform"
              id="coach-chevron"
              style={{ transform: "rotate(180deg)" }}>
              expand_more
            </span>
          </button>
          <div className="px-4 pb-4" id="coach-content">
            <div className="bg-surface-container-low/50 rounded-lg p-3 border border-white/5">
              <p className="text-sm text-on-surface leading-relaxed mb-3">
                &quot;Alex, your performance in 3D Calculus has dipped slightly. I&apos;ve
                curated 3 specific exercises to reinforce your vector
                cross-product visualization. Shall we start?&quot;
              </p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded bg-surface-container-highest text-xs font-medium text-on-surface active:brightness-125">
                  Maybe Later
                </button>
                <button className="flex-1 py-2 rounded bg-primary/20 text-xs font-medium text-primary border border-primary/30 active:brightness-125">
                  Start Drill
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="glass-card rounded-xl p-stack-lg border-l-4 border-tertiary hidden md:flex flex-col relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-tertiary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary">
              auto_awesome
            </span>
          </div>
          <div>
            <p className="font-label-md text-tertiary font-bold uppercase tracking-wider">
              AI Coach
            </p>
            <h3 className="font-headline-md text-headline-md leading-none">
              Dr. Nova
            </h3>
          </div>
        </div>
        <div className="bg-surface-container-low/50 p-4 rounded-lg border border-white/5 mb-6 italic text-on-surface-variant">
          &quot;If you study 20 more minutes today, your expected board score
          increases to <span className="text-tertiary font-bold">91%</span>.
          You&apos;re currently excelling in Momentum but need focus on
          Friction.&quot;
        </div>
        <button className="mt-auto w-full py-3 rounded-lg bg-surface-variant text-on-surface-variant font-label-md hover:text-primary hover:bg-surface-variant/80 transition-all border border-white/5">
          Ask Dr. Nova for Strategy
        </button>
      </div>
    </>
  );
};

export default ProgressAI;
