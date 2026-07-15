"use client";

export default function StatsSection() {
  return (
    <section className="grid grid-cols-2 gap-4">
      {/* Learning Velocity */}

      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <span className="text-xs text-on-surface-variant block mb-2 font-medium">
          Learning Velocity
        </span>

        <div className="flex items-end gap-2 mb-3">
          <span className="text-2xl font-bold">4.2</span>

          <span className="text-[10px] text-tertiary mb-1 font-bold">+12%</span>
        </div>

        {/* Mini Chart */}

        <div className="flex gap-1 h-8 items-end">
          <div className="flex-1 bg-white/10 rounded-sm h-[40%]" />

          <div className="flex-1 bg-white/10 rounded-sm h-[60%]" />

          <div className="flex-1 bg-white/10 rounded-sm h-[50%]" />

          <div className="flex-1 bg-primary/40 rounded-sm h-[90%]" />
        </div>
      </div>

      {/* Exam Readiness */}

      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <span className="text-xs text-on-surface-variant block mb-2 font-medium">
          Exam Readiness
        </span>

        <div className="flex items-end gap-2 mb-3">
          <span className="text-2xl font-bold">88</span>

          <span className="text-[10px] text-primary mb-1 font-bold">
            Top 5%
          </span>
        </div>

        {/* Progress */}

        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="
            h-full

            rounded-full

            bg-gradient-to-r

            from-primary

            to-tertiary

            w-[88%]
          "
          />
        </div>
      </div>
    </section>
  );
}
