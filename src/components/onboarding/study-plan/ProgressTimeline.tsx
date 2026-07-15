"use client";

export default function ProgressTimeline() {
  return (
    <div className="glass-panel rounded-xl p-stack-md flex flex-col">
      <h4 className="text-label-md font-bold mb-6">4-Month Progression</h4>
      <div className="space-y-6 relative flex-1 pl-6">
        <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-tertiary to-transparent" />
        <div className="relative flex items-center gap-4">
          <div className="absolute -left-[22px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
          <div>
            <p className="text-label-md font-bold">Foundation</p>
            <p className="text-mono-sm text-on-surface-variant">
              Month 1 • Basics &amp; Retrieval
            </p>
          </div>
        </div>
        <div className="relative flex items-center gap-4">
          <div className="absolute -left-[22px] w-2.5 h-2.5 rounded-full bg-tertiary" />
          <div>
            <p className="text-label-md font-bold">Concept Mastery</p>
            <p className="text-mono-sm text-on-surface-variant">
              Month 2 • Complex Scenarios
            </p>
          </div>
        </div>
        <div className="relative opacity-40 flex items-center gap-4">
          <div className="absolute -left-[22px] w-2.5 h-2.5 rounded-full bg-on-surface-variant" />
          <div>
            <p className="text-label-md font-bold">Advanced Practice</p>
            <p className="text-mono-sm text-on-surface-variant">
              Month 3 • Speed &amp; Accuracy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
