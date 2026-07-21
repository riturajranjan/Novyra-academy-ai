export default function QuizHeader() {
  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 glass-panel border-none shadow-sm h-20 px-margin-mobile flex items-center justify-between">
        <div className="flex items-center gap-stack-sm">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex flex-col">
            <h1 className="font-headline-md text-[19px] font-bold leading-tight text-primary">
              Quantum Mechanics I
            </h1>
            <p className="font-label-md text-on-surface-variant text-[12px]">
              Assessment 04 • Final Stretch
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Timer Component */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5 text-tertiary">
              <span className="material-symbols-outlined text-[18px]">
                timer
              </span>
              <span className="font-mono-sm text-label-md font-bold">
                14:52
              </span>
            </div>
          </div>
          {/* Progress Ring */}
          <div className="relative w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                className="stroke-surface-container-highest"
                cx={18}
                cy={18}
                fill="transparent"
                r={16}
                strokeWidth={3}
              />
              <circle
                className="stroke-primary progress-ring-circle"
                cx={18}
                cy={18}
                fill="transparent"
                r={16}
                strokeDasharray="100 100"
                strokeDashoffset={35}
                strokeLinecap="round"
                strokeWidth={3}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold font-label-md">65%</span>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden md:flex flex-col lg:flex-row justify-between items-start lg:items-center gap-stack-md mb-stack-lg">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
            Physics: Newton&apos;s Laws of Motion
          </h1>
          <div className="flex flex-wrap gap-stack-sm items-center">
            <span className="bg-surface-container-high px-3 py-1 rounded-full text-label-md font-label-md text-primary">
              Question 08/25
            </span>
            <span className="bg-tertiary-container/20 text-tertiary px-3 py-1 rounded-full text-label-md font-label-md flex items-center gap-1">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="signal_cellular_alt">
                signal_cellular_alt
              </span>
              Medium Difficulty
            </span>
            <span className="text-on-surface-variant text-label-md font-label-md flex items-center gap-1 ml-2">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="schedule">
                schedule
              </span>
              18:42 Remaining
            </span>
          </div>
        </div>
        <div className="flex gap-stack-md">
          <div className="glass-card px-stack-md py-stack-sm rounded-xl border-primary/20 flex flex-col items-center min-w-[120px]">
            <span className="text-label-md font-label-md text-on-surface-variant">
              Expected Score
            </span>
            <span className="text-headline-md font-headline-md text-primary">
              88%
            </span>
          </div>
          <div className="glass-card px-stack-md py-stack-sm rounded-xl border-tertiary/20 flex flex-col items-center min-w-[120px]">
            <span className="text-label-md font-label-md text-on-surface-variant">
              Learning Velocity
            </span>
            <span className="text-headline-md font-headline-md text-tertiary">
              1.2x
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
