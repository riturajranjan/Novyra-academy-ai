"use client";

import type { StudyPlanDay } from "@/types/study-plan";

const TASK_TYPE_LABEL: Record<string, string> = {
  reading: "Reading & Notes",
  visual: "Visual Diagrams",
  voice: "AI Voice Lesson",
  practice: "Practice Problems",
  conversation: "AI Conversation",
  revision: "Revision Flashcards",
};

interface DailyRoutineProps {
  day: StudyPlanDay | undefined;
}

export default function DailyRoutine({ day }: DailyRoutineProps) {
  const tasks = day?.tasks ?? [];

  return (
    <div className="glass-panel rounded-xl p-stack-lg">
      <h4 className="text-headline-md font-bold mb-8">Today&apos;s Study Flow</h4>
      {tasks.length === 0 ? (
        <p className="text-on-surface-variant">
          Select subjects and a daily goal to see your study flow.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tasks.map((task) => (
            <div
              key={task.subjectId}
              className="p-4 bg-white/5 rounded-xl border border-white/5 premium-card-hover">
              <span
                className="material-symbols-outlined text-primary mb-2"
                data-icon="auto_stories">
                auto_stories
              </span>
              <p className="text-label-md font-bold">{task.subjectTitle}</p>
              <p className="text-mono-sm text-on-surface-variant">{task.minutes} min</p>
              <p className="text-body-md mt-2 text-primary">
                {TASK_TYPE_LABEL[task.taskType] ?? task.taskType}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
