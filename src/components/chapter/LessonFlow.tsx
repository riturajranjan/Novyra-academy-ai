export default function LessonFlow() {
  return (
    <div className="p-6 rounded-2xl glass-panel inner-glow border border-white/5">
      <h4 className="font-headline-md text-white text-lg mb-6 flex items-center justify-between">
        Lesson Flow
        <span className="text-mono-sm text-primary">6 Topics</span>
      </h4>
      <div className="space-y-0 relative">
        <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-white/5"></div>

        <div className="relative pl-10 pb-8">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center border-4 border-background z-10">
            <span
              className="material-symbols-outlined text-white text-sm"
              data-icon="check">
              check
            </span>
          </div>
          <p className="text-on-surface-variant text-mono-sm mb-1">Topic 1</p>
          <h5 className="text-on-surface font-label-md">
            Introduction to Force
          </h5>
        </div>
        <div className="relative pl-10 pb-8">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10 ai-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <p className="text-primary text-mono-sm mb-1 font-bold">
            CURRENT TOPIC
          </p>
          <h5 className="text-white font-label-md text-lg">
            First Law &amp; Inertia
          </h5>
          <div className="mt-2 flex gap-2">
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded uppercase font-bold">
              Interactive
            </span>
            <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] rounded uppercase font-bold">
              Simulation
            </span>
          </div>
        </div>
        <div className="relative pl-10 pb-8 opacity-40">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border-4 border-background z-10"></div>
          <p className="text-on-surface-variant text-mono-sm mb-1">Topic 3</p>
          <h5 className="text-on-surface font-label-md">Second Law (F=ma)</h5>
        </div>
        <div className="relative pl-10 opacity-40">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border-4 border-background z-10"></div>
          <p className="text-on-surface-variant text-mono-sm mb-1">Topic 4</p>
          <h5 className="text-on-surface font-label-md">
            Impulse &amp; Momentum
          </h5>
        </div>
      </div>
    </div>
  );
}
