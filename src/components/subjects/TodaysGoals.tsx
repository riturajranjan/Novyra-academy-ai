"use client";

import { CheckCircle2, Circle, Lock, Target } from "lucide-react";

const goals = [
  {
    title: "Understand Translational Motion",
    status: "completed",
    icon: CheckCircle2,
    color: "text-tertiary",
  },
  {
    title: "Learn Newton's Three Laws",
    status: "current",
    icon: Circle,
    color: "text-primary",
  },
  {
    title: "Apply Force Vectors to Slopes",
    status: "locked",
    icon: Lock,
    color: "text-on-surface-variant",
  },
];

export default function TodaysGoals() {
  return (
    <div className="glass-card p-stack-lg rounded-2xl relative overflow-hidden">
      <h3 className="font-headline-md text-headline-md mb-stack-md flex items-center gap-stack-md">
        <span className="material-symbols-outlined text-primary">target</span>
        Today&apos;s Goals
      </h3>
      <ul className="space-y-stack-md">
        <li className="flex items-center gap-stack-md text-on-surface">
          <span className="material-symbols-outlined text-tertiary">
            check_circle
          </span>
          <span>Understand Translational Motion</span>
        </li>
        <li className="flex items-center gap-stack-md text-on-surface">
          <span className="material-symbols-outlined text-primary">
            radio_button_unchecked
          </span>
          <span>Learn Newton&apos;s Three Laws</span>
        </li>
        <li className="flex items-center gap-stack-md text-on-surface opacity-60">
          <span className="material-symbols-outlined">lock</span>
          <span>Apply Force Vectors to Slopes</span>
        </li>
      </ul>
    </div>
  );
}
