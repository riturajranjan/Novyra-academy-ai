"use client";

export default function AIInsights() {
  return (
    <div className="col-span-3 glass-panel rounded-xl p-stack-lg border-t-4 border-t-tertiary">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-tertiary"
            data-icon="robot_2">
            robot_2
          </span>
        </div>
        <h4 className="text-headline-md font-bold">Dr. Nova&apos;s Insights</h4>
      </div>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shrink-0" />
          <p className="text-body-md text-on-surface-variant">
            You demonstrate high retention in{" "}
            <span className="text-on-surface font-bold">Mechanics</span> but
            struggle with{" "}
            <span className="text-on-surface font-bold">
              Acceleration Vectors
            </span>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shrink-0" />
          <p className="text-body-md text-on-surface-variant">
            Focus 15% more time on{" "}
            <span className="text-on-surface font-bold">Circular Motion</span>{" "}
            this week to hit your 95% target.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shrink-0" />
          <p className="text-body-md text-on-surface-variant">
            Optimal study window identified between{" "}
            <span className="text-on-surface font-bold">7 PM and 9 PM</span> for
            highest cognitive load tasks.
          </p>
        </div>
      </div>
    </div>
  );
}
