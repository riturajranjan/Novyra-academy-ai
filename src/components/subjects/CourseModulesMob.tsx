import React from "react";

const CourseModulesMob = () => {
  return (
    <section className="mt-stack-md  pb-12">
      <div className="flex justify-between items-center mb-stack-md">
        <h3 className="font-headline-md text-headline-md">Course Modules</h3>
        <span className="text-on-surface-variant font-label-md text-end">
          12 Lessons Remaining
        </span>
      </div>
      <div className="space-y-stack-md">
        {/* Active Chapter */}
        <div className="glass-card rounded-xl p-stack-md border-l-4 border-l-tertiary">
          <div className="flex justify-between items-start mb-stack-md">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-mono-sm text-[10px] uppercase">
                  Active Now
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-on-surface-variant font-mono-sm text-[10px] uppercase">
                  Intermediate
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md">
                Kinematics &amp; Frames
              </h4>
            </div>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  className="text-white/5"
                  cx={24}
                  cy={24}
                  fill="transparent"
                  r={20}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <circle
                  className="text-tertiary"
                  cx={24}
                  cy={24}
                  fill="transparent"
                  r={20}
                  stroke="currentColor"
                  strokeDasharray="125.6"
                  strokeDashoffset="31.4"
                  strokeWidth={4}
                />
              </svg>
              <span className="absolute font-mono-sm text-[10px] text-on-surface">
                75%
              </span>
            </div>
          </div>
          <p className="font-body-md text-on-surface-variant mb-stack-md">
            Mastering projectile motion and non-inertial reference systems.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-surface overflow-hidden bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                A
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-surface overflow-hidden bg-tertiary/20 flex items-center justify-center text-[10px] font-bold">
                B
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                +8
              </div>
            </div>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
              Resume Module{" "}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        {/* Weak Module */}
        <div className="glass-card rounded-xl p-stack-md border-l-4 border-l-error/30 opacity-90">
          <div className="flex justify-between items-start mb-stack-md">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-error/10 text-error font-mono-sm text-[10px] uppercase">
                  Re-study Needed
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-on-surface-variant font-mono-sm text-[10px] uppercase">
                  Hard
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md">
                Circular Motion
              </h4>
            </div>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  className="text-white/5"
                  cx={24}
                  cy={24}
                  fill="transparent"
                  r={20}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <circle
                  className="text-error"
                  cx={24}
                  cy={24}
                  fill="transparent"
                  r={20}
                  stroke="currentColor"
                  strokeDasharray="125.6"
                  strokeDashoffset="100.5"
                  strokeWidth={4}
                />
              </svg>
              <span className="absolute font-mono-sm text-[10px] text-on-surface">
                20%
              </span>
            </div>
          </div>
          <div className="bg-error/5 rounded-lg p-3 border border-error/10 flex gap-3 items-center">
            <span className="material-symbols-outlined text-error text-[20px]">
              report
            </span>
            <span className="font-label-md text-error/80 text-sm">
              Critical weak area detected by AI
            </span>
          </div>
        </div>
        {/* Future Module */}
        <div className="glass-card rounded-xl p-stack-md border-l-4 border-l-white/5 opacity-60">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-white/5 text-on-surface-variant font-mono-sm text-[10px] uppercase">
                  Locked
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md">
                Electromagnetism
              </h4>
              <p className="font-body-md text-on-surface-variant mt-2">
                Unlock after completing Chapter 4
              </p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              lock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModulesMob;
