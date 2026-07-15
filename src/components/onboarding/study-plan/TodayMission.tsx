"use client";

export default function TodayMission() {
  return (
    <div className="hidden md:block col-span-2 glass-panel12 rounded-xl p-stack-lg premium-card-hover border-l-4 border-l-primary relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
      <div className="flex justify-between items-start mb-6">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-label-md font-bold uppercase tracking-wider">
          Today&apos;s Mission
        </span>
        <span className="text-tertiary font-bold">+120 XP</span>
      </div>
      <h3 className="text-headline-md font-bold mb-2">
        Newton&apos;s First Law
      </h3>
      <p className="text-on-surface-variant mb-6 max-w-md">
        Master the concept of inertia and net force with interactive
        simulations.
      </p>
      <div className="flex items-center gap-6">
        <div className="md:flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="timer">
            timer
          </span>
          <span className="text-label-md">18m</span>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span
            className="material-symbols-outlined"
            data-icon="signal_cellular_alt">
            signal_cellular_alt
          </span>
          <span className="text-label-md">Medium</span>
        </div>
        <button className="ml-auto flex items-center gap-2 bg-on-surface text-surface py-2 px-6 rounded-lg font-bold hover:bg-white transition-all">
          Start Now
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
