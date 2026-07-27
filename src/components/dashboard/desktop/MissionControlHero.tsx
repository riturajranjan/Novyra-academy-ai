"use client";

import type { ContinueLearningItem } from "@/lib/contentDal";

interface MissionControlHeroProgressMetrics {
  streak: number;
  xp: number;
  averageQuizScore: number;
  completedLessons: number;
}

interface MissionControlHeroProps {
  userName: string | null;
  continueLearning: ContinueLearningItem | null;
  todayGoalPercent: number;
  progressMetrics: MissionControlHeroProgressMetrics;
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

const RING_CIRCUMFERENCE = 301.59;

export default function MissionControlHero({
  userName,
  continueLearning,
  todayGoalPercent,
  progressMetrics,
}: MissionControlHeroProps) {
  const displayName = userName ?? "Student";
  const missionTitle = continueLearning
    ? `${continueLearning.label} ${continueLearning.lessonTitle}`
    : "No lessons available yet";
  const ringOffset = RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * progressMetrics.averageQuizScore) / 100;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
      {/* Left */}
      <div
        className="lg:col-span-3 glass-panel premium-border rounded-2xl p-8 relative overflow-hidden mission-glow"
        style={{
          transform: "translateY(0px)",
          transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
        <div className="absolute -top-10 -right-10 opacity-5">
          <span className="material-symbols-outlined text-[240px]">
            rocket_launch
          </span>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-headline-md font-medium text-on-surface-variant">
              {getGreeting()}, <span className="text-on-surface font-bold">{displayName} 👋</span>
            </p>
            <span className="text-white/10">|</span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              Mission Control
            </span>
          </div>
          <h1 className="text-headline-lg font-bold mb-8 leading-tight">
            Today&apos;s Mission:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              {missionTitle}
            </span>
          </h1>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface-container-high border border-white/5">
                <span className="material-symbols-outlined text-tertiary text-xl">
                  local_fire_department
                </span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">
                  Streak
                </p>
                <p className="text-body-md font-bold">
                  {progressMetrics.streak} {progressMetrics.streak === 1 ? "Day" : "Days"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface-container-high border border-white/5">
                <span className="material-symbols-outlined text-orange-400 text-xl">
                  bolt
                </span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">
                  Total XP
                </p>
                <p className="text-body-md font-bold">{progressMetrics.xp}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-white/10 pl-10">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter mb-1">
                  Today&apos;s Goal
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-headline-md font-bold text-primary">
                    {todayGoalPercent}%
                  </span>
                  <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${todayGoalPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div
        className="glass-panel premium-border rounded-2xl p-6 flex flex-col justify-center items-center text-center"
        style={{
          transform: "translateY(0px)",
          transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
        <div className="relative w-28 h-28 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              className="text-white/5"
              cx={56}
              cy={56}
              fill="transparent"
              r={48}
              stroke="currentColor"
              strokeWidth={8}
            />
            <circle
              className="text-tertiary"
              cx={56}
              cy={56}
              fill="transparent"
              r={48}
              stroke="currentColor"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={ringOffset}
              strokeWidth={8}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{progressMetrics.averageQuizScore}%</span>
          </div>
        </div>
        <p className="text-label-md font-bold mb-1">Quiz Average</p>
        <p className="text-[12px] text-primary font-medium mb-1">
          {progressMetrics.completedLessons} {progressMetrics.completedLessons === 1 ? "Lesson" : "Lessons"} Completed
        </p>
        <p className="text-[11px] text-on-surface-variant px-4 leading-relaxed">
          Keep studying to raise your average.
        </p>
      </div>
    </section>
  );
}
