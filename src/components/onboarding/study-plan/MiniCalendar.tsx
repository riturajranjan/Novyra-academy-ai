"use client";

import { CalendarDays, Flame, CheckCircle2 } from "lucide-react";

const week = ["S", "M", "T", "W", "T", "F", "S"];

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const completed = [3, 4, 5, 6, 8, 10, 12, 15, 18];

const today = 19;

export default function MiniCalendar() {
  return (
    <div
      className="
     col-span-2 glass-panel rounded-xl p-stack-sm
    ">
      {/* Glow */}

      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-[100px]" />

      {/* Header */}

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-primary" />

          <span className="text-label-md   text-primary text-[14px]">
            Study Calendar
          </span>
        </div>

        <div className="flex items-center gap-2 text-orange-400">
          <span className="font-bold text-[14px]"> October 2026</span>
        </div>
      </div>

      {/* Week */}

      <div className="relative z-10 mt-6 grid grid-cols-7 gap-2">
        {/* {week.map((item) => (
          <div
            key={item}
            className="
            text-center

            text-xs

            uppercase

            text-on-surface-variant
          ">
            {item}
          </div>
        ))} */}
        {week?.map((item, index: number) => (
          <div
            key={item + index}
            className="
            text-center

            text-xs

            uppercase

            text-on-surface-variant
          ">
            {item}
          </div>
        ))}
      </div>

      {/* Days */}

      <div className="relative z-10 mt-3 grid grid-cols-7 gap-2">
        {days.map((day) => {
          const isToday = day === today;

          const isCompleted = completed.includes(day);

          return (
            <button
              key={day}
              className={`
                relative

                h-6
                w-6
                rounded-xl

                transition-all

                ${
                  isToday
                    ? "bg-primary text-white"
                    : isCompleted
                      ? "bg-green-500/10"
                      : "hover:bg-white/5"
                }
              `}>
              {isCompleted && !isToday && (
                <CheckCircle2
                  size={8}
                  className="
                  absolute

                  right-1

                  top-0

                  text-green-400

                  fill-green-400
                "
                />
              )}

              <span className="text-[11px]">{day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
