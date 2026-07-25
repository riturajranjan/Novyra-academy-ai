"use client";

interface AIInsightsProps {
  subjectCount: number;
  dailyMinutes: number;
  dailyGoalTitle: string;
  totalChapters: number;
  examDate: Date | null;
}

function daysUntil(date: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / msPerDay);
}

export default function AIInsights({
  subjectCount,
  dailyMinutes,
  dailyGoalTitle,
  totalChapters,
  examDate,
}: AIInsightsProps) {
  const remaining = examDate ? daysUntil(examDate) : null;

  const insights = [
    `Your ${dailyGoalTitle || "daily"} goal of ${dailyMinutes} minutes is split evenly across your ${subjectCount} selected subject${subjectCount === 1 ? "" : "s"}.`,
    `Across all subjects, your plan covers ${totalChapters} chapter${totalChapters === 1 ? "" : "s"} of curriculum.`,
    remaining !== null
      ? remaining >= 0
        ? `${remaining} day${remaining === 1 ? "" : "s"} remain until your target exam date.`
        : "Your exam date has passed — consider updating it in your goal settings."
      : "Set an exam date in your goal settings to see a countdown here.",
  ];

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
        {insights.map((insight) => (
          <div key={insight} className="flex gap-4">
            <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shrink-0" />
            <p className="text-body-md text-on-surface-variant">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
