import React from "react";

const SubjectMistry = () => {
  return (
    <section>
      <h3 className="font-headline-md text-headline-md mb-6">
        Subject Mastery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Physics */}
        <div className="glass-card rounded-xl p-stack-md flex flex-col group">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                biotech
              </span>
            </div>
            <span className="text-2xl font-bold text-primary">92%</span>
          </div>
          <h4 className="font-headline-md text-headline-md mb-4">Physics</h4>
          <div className="space-y-4 flex-grow">
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Weak Chapters
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 rounded bg-error/10 text-error text-[10px] font-mono-sm">
                  Thermodynamics
                </span>
                <span className="px-2 py-0.5 rounded bg-error/10 text-error text-[10px] font-mono-sm">
                  Fluids
                </span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Next Goal
              </p>
              <p className="text-xs text-on-surface font-medium italic">
                Complete Practice Set #42
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "92%" }} />
            </div>
          </div>
        </div>
        {/* Chemistry */}
        <div className="glass-card rounded-xl p-stack-md flex flex-col group">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">
                science
              </span>
            </div>
            <span className="text-2xl font-bold text-tertiary">81%</span>
          </div>
          <h4 className="font-headline-md text-headline-md mb-4">Chemistry</h4>
          <div className="space-y-4 flex-grow">
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Weak Chapters
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 rounded bg-error/10 text-error text-[10px] font-mono-sm">
                  Organic Intro
                </span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Next Goal
              </p>
              <p className="text-xs text-on-surface font-medium italic">
                Watch Electrophilic Substitution
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-tertiary" style={{ width: "81%" }} />
            </div>
          </div>
        </div>
        {/* Math */}
        <div className="glass-card rounded-xl p-stack-md flex flex-col group">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-lg bg-primary-container/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container">
                functions
              </span>
            </div>
            <span className="text-2xl font-bold text-primary-container">
              88%
            </span>
          </div>
          <h4 className="font-headline-md text-headline-md mb-4">
            Mathematics
          </h4>
          <div className="space-y-4 flex-grow">
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Weak Chapters
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 rounded bg-error/10 text-error text-[10px] font-mono-sm">
                  Integrals
                </span>
                <span className="px-2 py-0.5 rounded bg-error/10 text-error text-[10px] font-mono-sm">
                  Probability
                </span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Next Goal
              </p>
              <p className="text-xs text-on-surface font-medium italic">
                Solve PYQ 2023 Set
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-container"
                style={{ width: "88%" }}
              />
            </div>
          </div>
        </div>
        {/* Biology */}
        <div className="glass-card rounded-xl p-stack-md flex flex-col group">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-lg bg-tertiary-fixed-dim/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">
                dns
              </span>
            </div>
            <span className="text-2xl font-bold text-tertiary-fixed-dim">
              74%
            </span>
          </div>
          <h4 className="font-headline-md text-headline-md mb-4">Biology</h4>
          <div className="space-y-4 flex-grow">
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Weak Chapters
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 rounded bg-error/10 text-error text-[10px] font-mono-sm">
                  Genetics
                </span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">
                Next Goal
              </p>
              <p className="text-xs text-on-surface font-medium italic">
                Revision: Transcription
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-tertiary-fixed-dim"
                style={{ width: "74%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectMistry;
