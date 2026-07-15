"use client";

import {
  Clock3,
  BookOpen,
  Bot,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

const schedule = [
  {
    time: "08:00 AM",
    title: "Physics Revision",
    description: "Newton's Laws • Chapter 4",
    icon: BookOpen,
    color: "bg-primary/10 text-primary",
    completed: true,
  },
  {
    time: "10:30 AM",
    title: "AI Mentor Session",
    description: "Ask Dr. Nova your doubts",
    icon: Bot,
    color: "bg-cyan-500/10 text-cyan-400",
    completed: false,
  },
  {
    time: "02:00 PM",
    title: "Adaptive Quiz",
    description: "10 AI Generated Questions",
    icon: ClipboardCheck,
    color: "bg-orange-500/10 text-orange-400",
    completed: false,
  },
];

export default function Timeline() {
  return (
    <section
      className="
      glass-panel
      premium-border
      rounded-2xl
      p-6
      h-full
    ">
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <span
            className="
            text-[11px]
            uppercase
            tracking-[0.25em]
            text-primary
            font-bold
          ">
            TODAY
          </span>

          <h2 className="mt-2 text-headline-md font-bold">Timeline</h2>
        </div>

        <Clock3 className="text-primary" size={22} />
      </div>

      {/* Timeline */}

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-8">
          {schedule.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative flex gap-5">
                {/* Timeline Dot */}

                <div
                  className={`
                  relative

                  z-10

                  flex

                  h-12

                  w-12

                  items-center

                  justify-center

                  rounded-full

                  ${item.color}
                `}>
                  <Icon size={20} />
                </div>

                {/* Content */}

                <div className="flex-1 pb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.title}</h3>

                    <span className="text-xs text-on-surface-variant">
                      {item.time}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-on-surface-variant">
                    {item.description}
                  </p>

                  {item.completed && (
                    <div className="mt-3 flex items-center gap-2 text-green-400">
                      <CheckCircle2 size={16} />

                      <span className="text-xs font-medium">Completed</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}

      <div
        className="
        mt-8

        rounded-2xl

        bg-primary/10

        border

        border-primary/20

        p-5
      ">
        <p className="text-sm leading-7">
          🎯 <span className="font-semibold">Today&apos;s Goal:</span> Complete all
          three activities to earn an extra{" "}
          <span className="text-primary font-bold">+250 XP</span>.
        </p>
      </div>
    </section>
  );
}
