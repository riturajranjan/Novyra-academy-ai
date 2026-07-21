import React from "react";

const SummaryCard = () => {
  return (
    <>
      <section className="md:hidden mt-stack-sm mb-stack-lg">
        <div className="flex items-center justify-between mb-stack-sm">
          <h3 className="font-headline-md text-[18px] text-on-surface">
            Curated Notes
          </h3>
          <span className="font-mono-sm text-mono-sm text-on-surface-variant">
            View All
          </span>
        </div>
        <div className="space-y-1">
          {/* Collapsible Card: Quick Notes */}
          <details className="group bg-surface-container-low border border-white/5 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-stack-md list-none cursor-pointer group-open:bg-white/5 transition-colors">
              <div className="flex items-center gap-stack-md">
                <span className="material-symbols-outlined text-primary">
                  description
                </span>
                <span className="font-label-md text-label-md">
                  Quick Notes: Dynamics
                </span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="px-stack-md pb-stack-md text-on-surface-variant font-body-md leading-relaxed text-[14px] border-t border-white/5 pt-stack-sm">
              <p>
                Newton&apos;s First Law (Inertia): Objects at rest stay at rest.
                Objects in motion stay in motion unless acted upon by a net
                force. Inertia is directly proportional to mass.
              </p>
              <div className="mt-stack-sm flex gap-2">
                <span className="px-2 py-1 bg-surface-variant/50 rounded-md text-[10px] font-mono-sm uppercase tracking-wider">
                  Physics
                </span>
                <span className="px-2 py-1 bg-surface-variant/50 rounded-md text-[10px] font-mono-sm uppercase tracking-wider">
                  Core Concept
                </span>
              </div>
            </div>
          </details>
          {/* Collapsible Card: Formula Sheet */}
          <details className="group bg-surface-container-low border border-white/5 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-stack-md list-none cursor-pointer group-open:bg-white/5 transition-colors">
              <div className="flex items-center gap-stack-md">
                <span className="material-symbols-outlined text-tertiary">
                  functions
                </span>
                <span className="font-label-md text-label-md">
                  Formula Sheet
                </span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="px-stack-md pb-stack-md text-on-surface-variant font-body-md text-[14px] border-t border-white/5 pt-stack-sm">
              <ul className="space-y-2">
                <li className="flex justify-between items-center bg-surface-bright/20 p-2 rounded-lg">
                  <span className="font-mono-sm italic">F = ma</span>
                  <span className="text-[12px] opacity-60">
                    Force = Mass x Accel
                  </span>
                </li>
                <li className="flex justify-between items-center bg-surface-bright/20 p-2 rounded-lg">
                  <span className="font-mono-sm italic">p = mv</span>
                  <span className="text-[12px] opacity-60">Momentum</span>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        {/* Summary Card */}
        <div
          className="glass-card inner-glow p-6 rounded-xl hover:border-primary/50 transition-all group flex flex-col h-full"
          style={{ transform: "translateY(0px)" }}>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                description
              </span>
            </div>
            <span className="text-xs font-mono-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">
              Summary
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
            AI Context Summary
          </h3>
          <p className="text-on-surface-variant text-sm mb-6 flex-grow">
            Newton&apos;s laws relate an object&apos;s motion to the forces
            acting on it, forming the basis for classical mechanics.
          </p>
          <div className="flex gap-2 flex-wrap">
            <button className="px-3 py-1 bg-surface-variant/40 rounded-full text-xs hover:bg-primary/20 transition-colors">
              Edit
            </button>
            <button className="px-3 py-1 bg-surface-variant/40 rounded-full text-xs hover:bg-primary/20 transition-colors">
              Bookmark
            </button>
            <button className="px-3 py-1 bg-surface-variant/40 rounded-full text-xs hover:bg-primary/20 transition-colors">
              Voice
            </button>
          </div>
        </div>
        {/* Formula Sheet Card */}
        <div className="glass-card inner-glow p-6 rounded-xl hover:border-primary/50 transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">
                functions
              </span>
            </div>
            <span className="text-xs font-mono-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">
              Reference
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
            Formula Sheet
          </h3>
          <div className="bg-surface-container-lowest border border-white/5 rounded-lg p-4 mb-4 text-center">
            <span className="font-mono-sm text-xl text-primary">F = m × a</span>
          </div>
          <div className="flex gap-2 mt-auto">
            <button className="px-3 py-1 bg-surface-variant/40 rounded-full text-xs hover:bg-primary/20 transition-colors">
              Edit
            </button>
            <button className="px-3 py-1 bg-surface-variant/40 rounded-full text-xs hover:bg-primary/20 transition-colors">
              Bookmark
            </button>
          </div>
        </div>
        {/* Concept Breakdown Card */}
        <div className="glass-card inner-glow p-6 rounded-xl hover:border-primary/50 transition-all group flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                psychology
              </span>
            </div>
            <span className="text-xs font-mono-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">
              Concepts
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
            Concept Breakdown
          </h3>
          <p className="text-on-surface-variant text-sm mb-6">
            Inertia, Force Vectors, and Universal Gravitation components defined
            through AI analysis.
          </p>
          <div className="flex gap-2 mt-auto">
            <button className="px-3 py-1 bg-surface-variant/40 rounded-full text-xs hover:bg-primary/20 transition-colors">
              Edit
            </button>
            <button className="px-3 py-1 bg-surface-variant/40 rounded-full text-xs hover:bg-primary/20 transition-colors">
              Voice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryCard;
