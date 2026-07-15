"use client";

import { CalendarDays, Pencil } from "lucide-react";

interface Props {
  date?: string;
  onOpen?: () => void;
}

export default function ExamDate({ date, onOpen }: Props) {
  return (
    <>
      <div className="space-y-stack-md hidden md:block">
        <label className=" text-label-md text-on-surface-variant">
          EXAM DATE &amp; COUNTDOWN
        </label>
        <div className="glass-panel rounded-2xl p-6 flex items-center justify-between border-dashed border-white/20">
          <div className="flex items-center gap-6">
            <div className="text-center bg-surface-container-high p-4 rounded-xl border border-white/5">
              <div className="text-xs text-on-surface-variant uppercase">
                Nov
              </div>
              <div className="text-3xl font-bold text-primary">24</div>
              <div className="text-xs text-on-surface-variant">2024</div>
            </div>
            <div>
              <div className="text-lg font-bold">Board Finals</div>
              <div className="text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <span>142 Days Remaining</span>
              </div>
            </div>
          </div>
          <button
            onClick={onOpen}
            className="text-primary hover:underline  text-label-md">
            Change Date
          </button>
        </div>
      </div>
      <section className="mb-4 md:mb-8 md:hidden">
        <button
          onClick={onOpen}
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

              <h3 className="mt-1 text-lg font-semibold text-white">{date}</h3>
            </div>
          </div>

          <Pencil size={18} className="text-[#9CA3AF]" />
        </button>
      </section>
    </>
  );
}
