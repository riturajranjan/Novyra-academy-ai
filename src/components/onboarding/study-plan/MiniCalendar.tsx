"use client";

import { CalendarDays } from "lucide-react";

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

export default function MiniCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthLabel = today.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div
      className="
     col-span-2 glass-panel rounded-xl p-stack-sm relative
    ">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-primary" />
          <span className="text-label-md   text-primary text-[14px]">
            Study Calendar
          </span>
        </div>

        <div className="flex items-center gap-2 text-orange-400">
          <span className="font-bold text-[14px]">{monthLabel}</span>
        </div>
      </div>

      <div className="relative z-10 mt-6 grid grid-cols-7 gap-2">
        {WEEKDAY_LABELS.map((item, index) => (
          <div
            key={item + index}
            className="text-center text-xs uppercase text-on-surface-variant">
            {item}
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-3 grid grid-cols-7 gap-2">
        {cells.map((day, index) => {
          const isToday = day === today.getDate();

          return (
            <button
              key={index}
              disabled={day === null}
              className={`
                relative
                h-6
                w-6
                rounded-xl
                transition-all
                ${isToday ? "bg-primary text-white" : day ? "hover:bg-white/5" : ""}
              `}>
              <span className="text-[11px]">{day ?? ""}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
