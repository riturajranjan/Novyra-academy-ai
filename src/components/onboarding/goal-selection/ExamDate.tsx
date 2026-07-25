"use client";

import { CalendarDays, Pencil } from "lucide-react";
import { useGoalSelection } from "@/hooks/useGoalSelection";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function daysRemaining(examDate: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(examDate);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / msPerDay);
}

export default function ExamDate() {
  const { examDate, setExamDate, openCalendar, setOpenCalendar } = useGoalSelection();

  const remaining = examDate ? daysRemaining(examDate) : null;

  const handleDateChange = (value: string) => {
    setExamDate(value ? new Date(value) : null);
  };

  const inputValue = examDate ? examDate.toISOString().slice(0, 10) : "";

  return (
    <>
      <div className="space-y-stack-md hidden md:block">
        <label className=" text-label-md text-on-surface-variant">
          EXAM DATE &amp; COUNTDOWN
        </label>
        <div className="glass-panel rounded-2xl p-6 flex items-center justify-between border-dashed border-white/20">
          <div className="flex items-center gap-6">
            {examDate ? (
              <div className="text-center bg-surface-container-high p-4 rounded-xl border border-white/5">
                <div className="text-xs text-on-surface-variant uppercase">
                  {MONTH_LABELS[examDate.getMonth()]}
                </div>
                <div className="text-3xl font-bold text-primary">{examDate.getDate()}</div>
                <div className="text-xs text-on-surface-variant">{examDate.getFullYear()}</div>
              </div>
            ) : (
              <div className="text-center bg-surface-container-high p-4 rounded-xl border border-white/5">
                <div className="text-xs text-on-surface-variant uppercase">--</div>
                <div className="text-3xl font-bold text-on-surface-variant">--</div>
              </div>
            )}
            <div>
              <div className="text-lg font-bold">
                {examDate ? "Exam Date" : "No exam date set"}
              </div>
              <div className="text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <span>
                  {remaining === null
                    ? "Optional — set a date to see your countdown"
                    : remaining >= 0
                      ? `${remaining} Days Remaining`
                      : "This date has passed"}
                </span>
              </div>
            </div>
          </div>
          {openCalendar ? (
            <input
              type="date"
              value={inputValue}
              onChange={(event) => handleDateChange(event.target.value)}
              onBlur={() => setOpenCalendar(false)}
              autoFocus
              className="bg-surface-container-high border border-white/10 rounded-lg px-3 py-2 text-on-surface text-label-md"
            />
          ) : (
            <button
              onClick={() => setOpenCalendar(true)}
              className="text-primary hover:underline  text-label-md">
              {examDate ? "Change Date" : "Set Date"}
            </button>
          )}
        </div>
      </div>
      <section className="mb-4 md:mb-8 md:hidden">
        {openCalendar ? (
          <input
            type="date"
            value={inputValue}
            onChange={(event) => handleDateChange(event.target.value)}
            onBlur={() => setOpenCalendar(false)}
            autoFocus
            className="w-full rounded-3xl border border-white/10 bg-[#151D31] p-5 text-white"
          />
        ) : (
          <button
            onClick={() => setOpenCalendar(true)}
            className="
          flex
          w-full
          items-center
          justify-between
          rounded-3xl
          border
          border-white/10
          bg-[#151D31]
          p-5
          transition-all
          hover:border-[#8083FF]/40
        ">
            <div className="flex items-center gap-4">
              <div
                className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#334282]/20
            ">
                <CalendarDays size={22} className="text-[#B8C4FF]" />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-[#9CA3AF]">
                  Target Exam Date
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  {examDate
                    ? examDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                    : "Not set"}
                </h3>
              </div>
            </div>

            <Pencil size={18} className="text-[#9CA3AF]" />
          </button>
        )}
      </section>
    </>
  );
}
