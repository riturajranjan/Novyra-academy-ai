"use client";

export default function Hero() {
  return (
    <>
      <section className="animate-in md:hidden fade-in slide-in-from-top-4 duration-700">
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
            Learning Canvas
          </h2>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="overflow-x-auto snap-x-mandatory flex gap-4 no-scrollbar -mx-1 px-1">
          {/* Slide 1: Vector Forces */}
          <div className="snap-center flex-shrink-0 w-full">
            <div className="glass-card rounded-[2rem] p-stack-md inner-glow canvas-shadow relative overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">
                      Vector Force Analysis
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Interactive 2D force resultant
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl text-lg">
                    architecture
                  </span>
                </div>
                <div className="aspect-video bg-surface-container-lowest/50 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "radial-gradient(#ffffff 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <svg className="w-full h-full p-6" viewBox="0 0 200 120">
                    <line
                      stroke="#464554"
                      strokeWidth="0.5"
                      x1={20}
                      x2={180}
                      y1={100}
                      y2={100}
                    />
                    <line
                      stroke="#464554"
                      strokeWidth="0.5"
                      x1={20}
                      x2={20}
                      y1={100}
                      y2={20}
                    />
                    <line
                      markerEnd="url(#arrowhead)"
                      stroke="#c0c1ff"
                      strokeWidth={2}
                      x1={20}
                      x2={140}
                      y1={100}
                      y2={100}
                    />
                    <line
                      markerEnd="url(#arrowhead)"
                      stroke="#4cd7f6"
                      strokeWidth={2}
                      x1={20}
                      x2={20}
                      y1={100}
                      y2={40}
                    />
                    <line
                      markerEnd="url(#arrowhead)"
                      stroke="#6366f1"
                      strokeDasharray={4}
                      strokeWidth={2}
                      x1={20}
                      x2={140}
                      y1={100}
                      y2={40}
                    />
                    <defs>
                      <marker
                        id="arrowhead"
                        markerHeight={5}
                        markerWidth={7}
                        orient="auto"
                        refX={0}
                        refY="2.5">
                        <polygon fill="currentColor" points="0 0, 7 2.5, 0 5" />
                      </marker>
                    </defs>
                  </svg>
                  <div className="absolute bottom-3 left-3 flex gap-2.5">
                    <span className="text-[9px] font-bold text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                      F1
                    </span>
                    <span className="text-[9px] font-bold text-tertiary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />{" "}
                      F2
                    </span>
                    <span className="text-[9px] font-bold text-indigo-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />{" "}
                      Resultant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides as needed for swipe demonstration */}
        </div>
      </section>

      <div className="h-[45%] w-full hidden md:block border-b border-white/5 relative canvas-grid bg-surface-container-lowest/30 overflow-hidden">
        <div className="absolute inset-0 p-6 flex items-center justify-center">
          <div className="w-full max-w-5xl h-full flex gap-16 items-center">
            {/* Integrated Diagram */}
            <div className="flex-1 relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] opacity-20" />
              <div className="relative w-80 h-80 border-2 border-dashed border-primary/20 rounded-[40px] flex items-center justify-center group">
                {/* Dynamic Labels */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-surface-container-high border border-primary/30 px-4 py-2 rounded-xl shadow-2xl z-10">
                  <span className="text-mono-sm text-primary font-bold">
                    NORMAL FORCE (N)
                  </span>
                </div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-surface-container-high border border-white/10 p-3 rounded-xl shadow-xl">
                  <span className="text-mono-sm text-tertiary font-bold">
                    F_ext = 50N
                  </span>
                </div>
                <div className="flex flex-col items-center gap-6">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary via-primary-container to-secondary rounded-[32px] shadow-[0_0_50px_rgba(192,193,255,0.2)] flex items-center justify-center transform hover:rotate-3 transition-transform cursor-grab active:cursor-grabbing">
                    <span className="material-symbols-outlined text-5xl text-on-primary">
                      inventory_2
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-label-md font-bold uppercase tracking-[0.2em] text-on-surface">
                      Object: 10kg
                    </span>
                    <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-primary w-1/3" />
                    </div>
                  </div>
                </div>
                {/* Force Vectors */}
                <div className="absolute right-0 top-1/2 w-40 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-60" />
                <div className="absolute left-0 top-1/2 w-20 h-[2px] bg-gradient-to-l from-red-400 to-transparent opacity-40" />
              </div>
            </div>
            {/* Key Equations Sidebar on Canvas */}
            <div className="w-72 space-y-4">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary/60 mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-primary/40" /> Active Principles
              </h4>
              <div className="glass-card p-5 bg-primary/5 border-primary/20 group cursor-pointer hover:bg-primary/10 transition-all">
                <p className="text-[11px] text-primary/70 mb-2 font-bold tracking-wide">
                  NEWTON&apos;S 1ST LAW
                </p>
                <code className="text-2xl font-bold block text-on-surface">
                  ΣF = 0
                </code>
                <p className="text-[11px] text-on-surface-variant mt-3 leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                  State of rest or uniform motion persists.
                </p>
              </div>
              <div className="glass-card p-5 border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                <p className="text-[11px] text-on-surface-variant mb-2">
                  FRICTION COEFFICIENT
                </p>
                <code className="text-2xl font-bold block text-on-surface">
                  μ = 0.35
                </code>
              </div>
            </div>
          </div>
        </div>
        {/* Explicit Interactive Canvas Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 bg-surface-container-high/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-on-surface-variant transition-all"
            title="Zoom In">
            <span className="material-symbols-outlined text-[20px]">
              zoom_in
            </span>
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-on-surface-variant transition-all"
            title="Highlight Key Points">
            <span className="material-symbols-outlined text-[20px]">
              fluorescent
            </span>
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-on-surface-variant transition-all"
            title="Replay Simulation">
            <span className="material-symbols-outlined text-[20px]">
              replay
            </span>
          </button>
          <div className="w-[1px] h-6 bg-white/10 mx-1" />
          <button
            className="px-4 h-10 flex items-center gap-2 rounded-xl bg-primary/10 text-primary font-bold text-label-md"
            title="Toggle Labels">
            <span className="material-symbols-outlined text-[20px]">label</span>
            Labels
          </button>
        </div>
      </div>
    </>
  );
}
