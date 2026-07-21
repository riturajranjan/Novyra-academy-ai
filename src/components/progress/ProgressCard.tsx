import React from "react";

const ProgressCard = () => {
  return (
    <>
      <section className="md:hidden">
        <div className="flex justify-between items-center mb-stack-sm">
          <h3 className="font-headline-md text-lg text-on-surface">
            Live Analytics
          </h3>
          <span className="text-primary text-xs font-label-md">View All</span>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-margin-mobile px-margin-mobile py-2">
          {/* Learning Score Ring */}
          <div className="glass-card min-w-[160px] p-4 rounded-xl flex flex-col items-center">
            <div className="relative w-20 h-20 mb-3">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-surface-container-highest stroke-current"
                  cx={50}
                  cy={50}
                  fill="transparent"
                  r={40}
                  strokeWidth={8}
                />
                <circle
                  className="text-primary stroke-current progress-ring"
                  cx={50}
                  cy={50}
                  fill="transparent"
                  r={40}
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                  strokeLinecap="round"
                  strokeWidth={8}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-xl text-on-surface">75%</span>
              </div>
            </div>
            <p className="font-label-md text-label-md text-on-surface-variant">
              Mastery Score
            </p>
          </div>
          {/* Exam Readiness */}
          <div className="glass-card min-w-[160px] p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-tertiary">
                analytics
              </span>
              <span className="text-[10px] font-mono-sm text-on-surface-variant uppercase">
                Prediction
              </span>
            </div>
            <p className="text-2xl font-bold text-tertiary mb-1">82%</p>
            <p className="text-[11px] text-on-surface-variant leading-tight">
              Exam Readiness for Physics 101
            </p>
            <div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-tertiary w-[82%]" />
            </div>
          </div>
          {/* Study Streak */}
          <div className="glass-card min-w-[160px] p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-secondary">
                local_fire_department
              </span>
              <span className="text-[10px] font-mono-sm text-on-surface-variant uppercase">
                Momentum
              </span>
            </div>
            <p className="text-2xl font-bold text-secondary mb-1">14 Days</p>
            <p className="text-[11px] text-on-surface-variant leading-tight">
              Longest streak this semester
            </p>
            <div className="mt-4 flex gap-1">
              <div className="h-1 flex-1 bg-secondary rounded-full" />
              <div className="h-1 flex-1 bg-secondary rounded-full" />
              <div className="h-1 flex-1 bg-surface-container-highest rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
        {/* Score Rings */}
        <div className="glass-card rounded-xl p-stack-md flex flex-col items-center justify-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-surface-container"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="currentColor"
                strokeWidth={8}
              />
              <circle
                className="transition-all duration-1000"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="#c0c1ff"
                strokeDasharray="251.2"
                strokeDashoffset="37.68"
                strokeWidth={8}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-headline-md">
              85
            </div>
          </div>
          <p className="font-label-md text-on-surface-variant uppercase">
            Knowledge
          </p>
        </div>
        <div className="glass-card rounded-xl p-stack-md flex flex-col items-center justify-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-surface-container"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="currentColor"
                strokeWidth={8}
              />
              <circle
                className="transition-all duration-1000"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="#4cd7f6"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
                strokeWidth={8}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-headline-md">
              75
            </div>
          </div>
          <p className="font-label-md text-on-surface-variant uppercase">
            Retention
          </p>
        </div>
        <div className="glass-card rounded-xl p-stack-md flex flex-col items-center justify-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-surface-container"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="currentColor"
                strokeWidth={8}
              />
              <circle
                className="transition-all duration-1000"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="#8083ff"
                strokeDasharray="251.2"
                strokeDashoffset="25.12"
                strokeWidth={8}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-headline-md">
              90
            </div>
          </div>
          <p className="font-label-md text-on-surface-variant uppercase">
            Speed
          </p>
        </div>
        <div className="glass-card rounded-xl p-stack-md flex flex-col items-center justify-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-surface-container"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="currentColor"
                strokeWidth={8}
              />
              <circle
                className="transition-all duration-1000"
                cx={48}
                cy={48}
                fill="transparent"
                r={40}
                stroke="#c0c1ff"
                strokeDasharray="251.2"
                strokeDashoffset="45.2"
                strokeWidth={8}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-headline-md">
              82
            </div>
          </div>
          <p className="font-label-md text-on-surface-variant uppercase">
            Focus
          </p>
        </div>
      </section>
    </>
  );
};

export default ProgressCard;
