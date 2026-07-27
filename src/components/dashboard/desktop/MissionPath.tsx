"use client";

import Link from "next/link";

import type { ContinueLearningItem, DashboardStudyPlanTask } from "@/lib/contentDal";

interface MissionPathProps {
  studyPlan: DashboardStudyPlanTask[] | null;
  continueLearning: ContinueLearningItem | null;
  todayGoalPercent: number;
}

const TASK_TYPE_LABELS: Record<string, string> = {
  reading: "Reading session",
  visual: "Visual lesson",
  voice: "Voice lesson",
  practice: "Practice session",
  conversation: "AI conversation",
  revision: "Revision session",
};

export default function MissionPath({ studyPlan, continueLearning, todayGoalPercent }: MissionPathProps) {
  const completedCount = (studyPlan ?? []).filter((task) => task.completed).length;
  const totalCount = studyPlan?.length ?? 0;
  const percentComplete = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* Today's Mission Objectives */}
        <div
          className="glass-panel premium-border rounded-2xl p-6 flex flex-col border-l-4 border-l-tertiary"
          style={{
            transform: "translateY(0px)",
            transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-md text-headline-md">Mission Path</h3>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-tertiary">Today&apos;s Goal: {todayGoalPercent}%</span>
            </div>
          </div>
          {!studyPlan || studyPlan.length === 0 ? (
            <p className="text-on-surface-variant font-body-md flex-1">
              No study plan yet — finish onboarding to get a daily plan.
            </p>
          ) : (
            <ul className="space-y-4 flex-1">
              {studyPlan.map((task) => (
                <li
                  key={`${task.subjectId}-${task.taskType}`}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer group ${
                    task.completed
                      ? "bg-white/5 border-white/5"
                      : "bg-tertiary/10 border-tertiary/20 hover:border-tertiary/50"
                  }`}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined ${task.completed ? "text-tertiary" : ""}`}
                      style={task.completed ? { fontVariationSettings: '"FILL" 1' } : undefined}>
                      {task.completed ? "check_circle" : "radio_button_unchecked"}
                    </span>
                    <span className={`text-label-md ${task.completed ? "font-medium" : "font-bold"}`}>
                      {task.subjectTitle} — {TASK_TYPE_LABELS[task.taskType] ?? "Study session"} ({task.minutes}m)
                    </span>
                  </div>
                  <span className={`text-[10px] ${task.completed ? "text-on-surface-variant" : "text-tertiary font-bold"}`}>
                    {task.completed ? "Done" : "Pending"}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary" style={{ width: `${percentComplete}%` }} />
            </div>
            <span className="text-[11px] font-bold text-on-surface-variant">{percentComplete}% Complete</span>
          </div>
        </div>
        {/* Continue Learning */}
        <div
          className="glass-panel premium-border rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/10"
          style={{
            transform: "translateY(0px)",
            transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
          <div className="relative aspect-video overflow-hidden bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-[64px] text-on-surface-variant opacity-30">
              auto_stories
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary font-mono-sm text-[10px] font-bold uppercase tracking-widest">
                  {continueLearning ? continueLearning.chapterTitle : "No Active Module"}
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-white mb-2 leading-tight">
                {continueLearning ? continueLearning.subjectTitle : "Nothing to continue yet"}
              </h4>
            </div>
          </div>
          <div className="p-6 pt-2 bg-surface-container-low/50">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold mb-0.5">
                  {continueLearning ? "Next Lesson" : "Status"}
                </p>
                <p className="text-label-md font-medium">
                  {continueLearning ? continueLearning.lessonTitle : "Select a subject to get started."}
                </p>
              </div>
            </div>
            {continueLearning ? (
              <Link
                href={continueLearning.href}
                className="w-full bg-primary text-on-primary  py-3.5 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 group-hover:ai-glow">
                <span className="font-bold">{continueLearning.label} Lesson</span>
                <span className="material-symbols-outlined text-lg">
                  play_circle
                </span>
              </Link>
            ) : (
              <button
                disabled
                className="w-full bg-white/5 text-on-surface-variant py-3.5 rounded-xl flex items-center justify-center gap-3 cursor-not-allowed">
                <span className="font-bold">No Lessons Available</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
