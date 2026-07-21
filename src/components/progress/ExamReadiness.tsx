import React from "react";

const ExamReadiness = () => {
  return (
    <>
      <section className="md:hidden">
        <div className="flex justify-between items-center mb-stack-sm">
          <h3 className="font-headline-md text-lg text-on-surface">
            Today&apos;s Plan
          </h3>
          <span className="bg-surface-container text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full font-mono-sm">
            4 TASKS
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {/* Task Item */}
          <label className="glass-card p-4 rounded-xl flex items-center gap-4 active:bg-surface-variant/30 transition-colors cursor-pointer group">
            <input
              className="w-5 h-5 rounded border-outline bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all checked:bg-primary"
              type="checkbox"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-on-surface group-has-[:checked]:line-through group-has-[:checked]:text-on-surface-variant">
                Review Formula Sheet
              </p>
              <p className="text-[11px] text-on-surface-variant">
                Physics • 10 mins
              </p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              chevron_right
            </span>
          </label>
          <label className="glass-card p-4 rounded-xl flex items-center gap-4 active:bg-surface-variant/30 transition-colors cursor-pointer group">
            <input
              className="w-5 h-5 rounded border-outline bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all checked:bg-primary"
              type="checkbox"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-on-surface group-has-[:checked]:line-through group-has-[:checked]:text-on-surface-variant">
                10 MCQs: Particle Dynamics
              </p>
              <p className="text-[11px] text-on-surface-variant">
                Assessment • 20 mins
              </p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              chevron_right
            </span>
          </label>
          <label className="glass-card p-4 rounded-xl flex items-center gap-4 active:bg-surface-variant/30 transition-colors cursor-pointer group">
            <input
              className="w-5 h-5 rounded border-outline bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all checked:bg-primary"
              type="checkbox"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-on-surface group-has-[:checked]:line-through group-has-[:checked]:text-on-surface-variant">
                Summarize Lesson 4 with AI
              </p>
              <p className="text-[11px] text-on-surface-variant">
                Revision • 5 mins
              </p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              chevron_right
            </span>
          </label>
        </div>
      </section>

      <div className="xl:col-span-2 glass-card rounded-xl p-stack-lg hidden md:flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="font-headline-md text-headline-md mb-1">
              Exam Readiness Prediction
            </h3>
            <p className="text-on-surface-variant text-sm">
              Calculated from 14 mock tests &amp; 2,400+ practice questions
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black text-primary">
              89
              <span className="text-lg font-normal text-on-surface-variant">
                /100
              </span>
            </div>
            <div className="font-label-md text-on-surface-variant uppercase">
              Expected Marks
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-on-surface-variant text-xs uppercase mb-1">
                  Current Rank
                </p>
                <p className="font-headline-md leading-none">Top 8%</p>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl">
                trending_up
              </span>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-on-surface-variant text-xs uppercase mb-1">
                  Readiness Score
                </p>
                <p className="font-headline-md leading-none">91%</p>
              </div>
              <span className="material-symbols-outlined text-tertiary text-3xl">
                verified
              </span>
            </div>
          </div>
          <div className="h-full min-h-[200px] bg-surface-container-high/30 rounded-xl relative p-4">
            {/* Mock Projection Chart */}
            <div className="absolute bottom-4 left-4 right-4 h-3/4 flex items-end justify-between gap-1">
              <div className="w-full bg-primary/20 h-1/4 rounded-t-sm" />
              <div className="w-full bg-primary/30 h-1/3 rounded-t-sm" />
              <div className="w-full bg-primary/40 h-1/2 rounded-t-sm" />
              <div className="w-full bg-primary/50 h-2/3 rounded-t-sm" />
              <div className="w-full bg-primary h-5/6 rounded-t-sm relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-on-primary px-1 rounded">
                  NOW
                </div>
              </div>
              <div className="w-full bg-tertiary/60 h-[92%] rounded-t-sm border-t-2 border-tertiary border-dashed" />
              <div className="w-full bg-tertiary/40 h-full rounded-t-sm border-t-2 border-tertiary border-dashed" />
            </div>
            <p className="text-xs text-on-surface-variant font-mono-sm absolute top-4 left-4 uppercase">
              Growth Projection
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamReadiness;
