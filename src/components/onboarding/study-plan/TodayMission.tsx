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

interface TodayMissionProps {
  day: StudyPlanDay | undefined;
}

export default function TodayMission({ day }: TodayMissionProps) {
  const firstTask = day?.tasks[0];

  return (
    <div className="hidden md:block col-span-2 glass-panel12 rounded-xl p-stack-lg premium-card-hover border-l-4 border-l-primary relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
      <div className="flex justify-between items-start mb-6">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-label-md font-bold uppercase tracking-wider">
          Today&apos;s Mission
        </span>
      </div>
      {firstTask ? (
        <>
          <h3 className="text-headline-md font-bold mb-2">{firstTask.subjectTitle}</h3>
          <p className="text-on-surface-variant mb-6 max-w-md">
            {TASK_TYPE_LABEL[firstTask.taskType] ?? "Study Session"}
          </p>
          <div className="flex items-center gap-6">
            <div className="md:flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined" data-icon="timer">
                timer
              </span>
              <span className="text-label-md">{firstTask.minutes}m</span>
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
        </>
      ) : (
        <p className="text-on-surface-variant">
          No subjects selected yet — your daily mission will appear here.
        </p>
      )}
    </div>
  );
}
