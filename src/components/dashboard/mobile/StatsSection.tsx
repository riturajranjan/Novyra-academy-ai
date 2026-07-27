"use client";

interface StatsSectionProps {
  weeklyStudyMinutes: number[];
  progressMetrics: { averageQuizScore: number; completedLessons: number };
}

export default function StatsSection({ weeklyStudyMinutes, progressMetrics }: StatsSectionProps) {
  const totalWeekMinutes = weeklyStudyMinutes.reduce((sum, minutes) => sum + minutes, 0);
  const maxMinutes = Math.max(...weeklyStudyMinutes, 1);

  return (
    <section className="grid grid-cols-2 gap-4">
      {/* This Week */}

      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <span className="text-xs text-on-surface-variant block mb-2 font-medium">
          This Week
        </span>

        <div className="flex items-end gap-2 mb-3">
          <span className="text-2xl font-bold">{totalWeekMinutes}</span>

          <span className="text-[10px] text-tertiary mb-1 font-bold">min</span>
        </div>

        {/* Mini Chart */}

        <div className="flex gap-1 h-8 items-end">
          {weeklyStudyMinutes.map((minutes, index) => (
            <div
              key={index}
              className={minutes > 0 ? "flex-1 bg-primary/40 rounded-sm" : "flex-1 bg-white/10 rounded-sm"}
              style={{ height: `${Math.max((minutes / maxMinutes) * 100, 10)}%` }}
            />
          ))}
        </div>
      </div>

      {/* Quiz Average */}

      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <span className="text-xs text-on-surface-variant block mb-2 font-medium">
          Quiz Average
        </span>

        <div className="flex items-end gap-2 mb-3">
          <span className="text-2xl font-bold">{progressMetrics.averageQuizScore}</span>

          <span className="text-[10px] text-primary mb-1 font-bold">
            {progressMetrics.completedLessons} lessons
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
          "
            style={{ width: `${progressMetrics.averageQuizScore}%` }}
          />
        </div>
      </div>
    </section>
  );
}
