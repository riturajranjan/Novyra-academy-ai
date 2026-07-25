import React from "react";

const InteractiveMind = () => {
  return (
    <>
      <section className="md:hidden mb-stack-lg">
        <div className="flex items-center justify-between mb-stack-md">
          <h3 className="font-headline-md text-[18px] text-on-surface">
            Daily Review
          </h3>
          <span className="font-mono-sm text-mono-sm text-primary">
            Card 4/12
          </span>
        </div>
        <div className="perspective-1000 w-full h-64 cursor-pointer">
          <div className="card-inner relative w-full h-full shadow-2xl">
            {/* Front of Card */}
            <div className="card-front absolute inset-0 glass-panel flashcard-gradient rounded-3xl flex flex-col items-center justify-center p-8 text-center border-primary/20">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">
                question_mark
              </span>
              <p className="font-headline-md text-[20px] leading-snug">
                What is the unit of Force in the SI system?
              </p>
              <p className="mt-6 font-mono-sm text-[12px] text-on-surface-variant uppercase tracking-widest">
                Tap to reveal answer
              </p>
            </div>
            {/* Back of Card */}
            <div className="card-back absolute inset-0 bg-primary-container/20 backdrop-blur-xl border border-primary/40 rounded-3xl flex flex-col items-center justify-center p-8 text-center">
              <span className="material-symbols-outlined text-primary-fixed-dim mb-4 text-[32px]">
                check_circle
              </span>
              <p className="font-display-xl text-[48px] text-primary">Newton</p>
              <p className="mt-2 text-on-surface-variant text-[14px]">
                (kg·m/s²)
              </p>
            </div>
          </div>
        </div>
        {/* Flashcard Actions */}
        <div className="grid grid-cols-2 gap-stack-md mt-stack-md">
          <button className="flex items-center justify-center gap-2 h-12 bg-surface-container-high border border-white/5 rounded-xl text-on-surface-variant hover:bg-error-container/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-error">close</span>
            <span className="font-label-md">Mark Hard</span>
          </button>
          <button className="flex items-center justify-center gap-2 h-12 bg-primary-container/20 border border-primary/20 rounded-xl text-primary hover:bg-primary-container/30 transition-all active:scale-95">
            <span className="material-symbols-outlined">done_all</span>
            <span className="font-label-md">Mark Easy</span>
          </button>
        </div>
      </section>

      <div className="hidden md:block glass-card inner-glow p-8 rounded-xl relative h-[400px]">
        <div className="flex justify-between items-center mb-8 relative z-10">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Interactive Mind Map
          </h2>
          <button className="text-sm text-primary hover:underline">
            Expand Canvas
          </button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* Connecting Lines (SVG) */}
          <svg className="absolute w-full h-full pointer-events-none opacity-20">
            <line
              stroke="#c0c1ff"
              strokeWidth={2}
              x1="50%"
              x2="30%"
              y1="50%"
              y2="30%"
            />
            <line
              stroke="#c0c1ff"
              strokeWidth={2}
              x1="50%"
              x2="70%"
              y1="50%"
              y2="30%"
            />
            <line
              stroke="#c0c1ff"
              strokeWidth={2}
              x1="50%"
              x2="50%"
              y1="50%"
              y2="75%"
            />
          </svg>
          {/* Central Node */}
          <div className="z-10 bg-primary text-on-primary font-bold px-6 py-3 rounded-full shadow-xl shadow-primary/20 border border-white/20">
            Newton&apos;s Laws
          </div>
          {/* Satellite Nodes */}
          <div className="absolute top-[30%] left-[30%] bg-surface-container-high border border-white/10 px-4 py-2 rounded-lg text-sm node-pulse">
            Force (F)
          </div>
          <div
            className="absolute top-[30%] right-[30%] bg-surface-container-high border border-white/10 px-4 py-2 rounded-lg text-sm node-pulse"
            style={{ animationDelay: "0.5s" }}>
            Mass (m)
          </div>
          <div
            className="absolute bottom-[25%] left-[50%] -translate-x-1/2 bg-surface-container-high border border-white/10 px-4 py-2 rounded-lg text-sm node-pulse"
            style={{ animationDelay: "1s" }}>
            Acceleration (a)
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveMind;
