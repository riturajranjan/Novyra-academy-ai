"use client";

interface TodaysGoalsProps {
  subjectTitle: string;
  tasks: { taskType: string; minutes: number; completed: boolean }[];
}

const TASK_TYPE_LABELS: Record<string, string> = {
  reading: "Reading session",
  visual: "Visual lesson",
  voice: "Voice lesson",
  practice: "Practice session",
  conversation: "AI conversation",
  revision: "Revision session",
};

export default function TodaysGoals({ subjectTitle, tasks }: TodaysGoalsProps) {
  return (
    <div className="glass-card p-stack-lg rounded-2xl relative overflow-hidden">
      <h3 className="font-headline-md text-headline-md mb-stack-md flex items-center gap-stack-md">
        <span className="material-symbols-outlined text-primary">target</span>
        Today&apos;s Goals
      </h3>
      {tasks.length === 0 ? (
        <p className="text-on-surface-variant font-body-md">No study-plan tasks for {subjectTitle} today.</p>
      ) : (
        <ul className="space-y-stack-md">
          {tasks.map((task) => (
            <li key={task.taskType} className="flex items-center gap-stack-md text-on-surface">
              <span className={`material-symbols-outlined ${task.completed ? "text-tertiary" : "text-primary"}`}>
                {task.completed ? "check_circle" : "radio_button_unchecked"}
              </span>
              <span>
                {TASK_TYPE_LABELS[task.taskType] ?? "Study session"} ({task.minutes}m)
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
