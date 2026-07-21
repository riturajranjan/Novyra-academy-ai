"use client";

export default function Modules() {
  return (
    <>
      <section className="md:hidden mt-stack-md">
        <div className="flex overflow-x-auto hide-scrollbar gap-stack-sm px-margin-mobile">
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-label-md active:scale-95 transition-transform">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              auto_awesome
            </span>
            AI Teacher
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-surface-container text-on-surface font-label-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">mic</span>
            Voice Mode
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-surface-container text-on-surface font-label-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">quiz</span>
            Take Quiz
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-surface-container text-on-surface font-label-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">
              lightbulb
            </span>
            Formula Sheet
          </button>
        </div>
      </section>

      {/* Desktop */}

      <div className="md:block hidden space-y-stack-md">
        <div className="flex justify-between items-end">
          <h3 className="font-headline-md text-headline-md">Course Modules</h3>
          <button className="text-primary font-label-md hover:underline">
            View Roadmap
          </button>
        </div>
        {/* Module Card: Active */}
        <div className="glass-card p-stack-lg rounded-2xl md:flex gap-stack-lg items-center relative group">
          <div className="absolute top-4 right-4 flex gap-stack-sm">
            <span className="px-2 py-0.5 bg-tertiary/20 text-tertiary rounded text-[10px] font-bold uppercase tracking-widest">
              AI Ready
            </span>
            <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-[10px] font-bold uppercase tracking-widest">
              Voice
            </span>
          </div>
          <div className="relative flex-shrink-0">
            <svg className="w-20 h-20">
              <circle
                className="text-white/10"
                cx={40}
                cy={40}
                fill="transparent"
                r={36}
                stroke="currentColor"
                strokeWidth={4}
              />
              <circle
                className="text-primary progress-ring-circle"
                cx={40}
                cy={40}
                fill="transparent"
                r={36}
                stroke="currentColor"
                strokeDasharray="226.2"
                strokeDashoffset="33.9"
                strokeLinecap="round"
                strokeWidth={4}
                style={{ strokeDashoffset: "33.9" }}
              />
            </svg>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono-sm font-bold text-lg">
              85%
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-stack-sm mb-unit">
              <span className="text-on-surface-variant font-mono-sm text-xs uppercase">
                Chapter 4
              </span>
              <span className="h-1 w-1 bg-on-surface-variant rounded-full" />
              <span className="text-tertiary font-mono-sm text-xs font-bold">
                REVISION DUE
              </span>
            </div>
            <h4 className="font-headline-md text-xl mb-stack-sm group-hover:text-primary transition-colors">
              Dynamics &amp; Newton's Laws
            </h4>
            <div className="flex items-center gap-stack-lg">
              <div className="flex items-center gap-unit">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  bar_chart
                </span>
                <span className="text-sm text-on-surface-variant">
                  Difficulty: Hard
                </span>
              </div>
              <div className="flex items-center gap-unit">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  priority_high
                </span>
                <span className="text-sm text-on-surface-variant">
                  Weightage: 18%
                </span>
              </div>
            </div>
          </div>
          <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] active:scale-95">
            Resume
          </button>
        </div>
        {/* Module Card: Regular */}
        <div className="glass-card p-stack-lg rounded-2xl md:flex gap-stack-lg items-center opacity-80 hover:opacity-100 transition-opacity">
          <div className="relative flex-shrink-0">
            <svg className="w-20 h-20">
              <circle
                className="text-white/10"
                cx={40}
                cy={40}
                fill="transparent"
                r={36}
                stroke="currentColor"
                strokeWidth={4}
              />
              <circle
                className="text-on-surface-variant progress-ring-circle"
                cx={40}
                cy={40}
                fill="transparent"
                r={36}
                stroke="currentColor"
                strokeDasharray="226.2"
                strokeDashoffset="226.2"
                strokeLinecap="round"
                strokeWidth={4}
                style={{ strokeDashoffset: "226.2" }}
              />
            </svg>
            <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-surface-variant">
              play_arrow
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-stack-sm mb-unit">
              <span className="text-on-surface-variant font-mono-sm text-xs uppercase">
                Chapter 5
              </span>
              <span className="h-1 w-1 bg-on-surface-variant rounded-full" />
              <span className="text-on-surface-variant font-mono-sm text-xs">
                NOT STARTED
              </span>
            </div>
            <h4 className="font-headline-md text-xl mb-stack-sm">
              Work, Energy &amp; Power
            </h4>
            <div className="flex items-center gap-stack-lg">
              <div className="flex items-center gap-unit">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  bar_chart
                </span>
                <span className="text-sm text-on-surface-variant">
                  Difficulty: Medium
                </span>
              </div>
              <div className="flex items-center gap-unit">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  priority_high
                </span>
                <span className="text-sm text-on-surface-variant">
                  Weightage: 12%
                </span>
              </div>
            </div>
          </div>
          <button className="px-8 py-3 border border-white/10 hover:border-primary text-on-surface font-bold rounded-xl transition-all">
            Start
          </button>
        </div>
      </div>
    </>
  );
}
