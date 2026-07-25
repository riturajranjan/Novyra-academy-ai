"use client";

import { Sparkles } from "lucide-react";
import { useGoalSelection } from "@/hooks/useGoalSelection";

function daysUntil(date: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / msPerDay);
}

export default function BuildLearningPath() {
  const { totalChapters, subjectCount, examDate } = useGoalSelection();
  const remaining = examDate ? daysUntil(examDate) : null;

  return (
    <>
      <div className="md:grid hidden grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="glass-panel p-3 rounded-xl border-white/5">
          <div className="text-[10px] text-on-surface-variant uppercase">
            Chapters
          </div>
          <div className="text-lg font-bold text-primary">{totalChapters}</div>
        </div>
        <div className="glass-panel p-3 rounded-xl border-white/5">
          <div className="text-[10px] text-on-surface-variant uppercase">
            Subjects
          </div>
          <div className="text-lg font-bold text-primary">{subjectCount}</div>
        </div>
        {remaining !== null && (
          <div className="glass-panel p-3 rounded-xl border-white/5">
            <div className="text-[10px] text-on-surface-variant uppercase">
              Days To Exam
            </div>
            <div className="text-lg font-bold text-primary">
              {remaining >= 0 ? remaining : 0}
            </div>
          </div>
        )}
      </div>
      <footer
        className="
        fixed
        bottom-0
        left-0
        right-0
        border-t
        border-white/5
        bg-[#0B1326]/90
        p-4
        backdrop-blur-xl
        md:hidden
      ">
        <div className="mx-auto max-w-md">
          <button
            className="
            flex
            h-14
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-[#8083FF]
            to-[#4CD7F6]
            font-semibold
            text-[#1000A9]
            shadow-[0_0_30px_rgba(128,131,255,.4)]
          ">
            Build My Learning Path
            <Sparkles size={18} />
          </button>
        </div>
      </footer>
    </>
  );
}
