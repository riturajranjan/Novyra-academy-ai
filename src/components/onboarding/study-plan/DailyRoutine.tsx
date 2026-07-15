"use client";

import { Sunrise, Sun, Moon, CheckCircle2, Clock3 } from "lucide-react";

const routine = [
  {
    id: 1,
    title: "Morning Learning",
    description: "Physics • Newton's Laws",
    time: "7:00 AM",
    icon: Sunrise,
    completed: true,
  },
  {
    id: 2,
    title: "Afternoon Revision",
    description: "Chemistry Practice",
    time: "2:00 PM",
    icon: Sun,
    completed: false,
  },
  {
    id: 3,
    title: "Evening Quiz",
    description: "Mathematics Mock Test",
    time: "8:00 PM",
    icon: Moon,
    completed: false,
  },
];

export default function DailyRoutine() {
  return (
    <div className="glass-panel rounded-xl p-stack-lg">
      <h4 className="text-headline-md font-bold mb-8">
        Daily Flow Optimisation
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 premium-card-hover">
          <span
            className="material-symbols-outlined text-primary mb-2"
            data-icon="wb_sunny">
            wb_sunny
          </span>
          <p className="text-label-md font-bold">Morning</p>
          <p className="text-mono-sm text-on-surface-variant">07:00 - 08:00</p>
          <p className="text-body-md mt-2 text-primary">Revision</p>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 premium-card-hover">
          <span
            className="material-symbols-outlined text-tertiary mb-2"
            data-icon="school">
            school
          </span>
          <p className="text-label-md font-bold">Afternoon</p>
          <p className="text-mono-sm text-on-surface-variant">15:00 - 17:00</p>
          <p className="text-body-md mt-2 text-tertiary">Learning</p>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 premium-card-hover">
          <span
            className="material-symbols-outlined text-secondary mb-2"
            data-icon="quiz">
            quiz
          </span>
          <p className="text-label-md font-bold">Evening</p>
          <p className="text-mono-sm text-on-surface-variant">19:30 - 20:30</p>
          <p className="text-body-md mt-2 text-secondary">Interactive Quiz</p>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 premium-card-hover">
          <span
            className="material-symbols-outlined text-primary-fixed-dim mb-2"
            data-icon="auto_stories">
            auto_stories
          </span>
          <p className="text-label-md font-bold">Night</p>
          <p className="text-mono-sm text-on-surface-variant">21:30 - 22:00</p>
          <p className="text-body-md mt-2 text-primary-fixed-dim">Flashcards</p>
        </div>
      </div>
    </div>
  );
}
