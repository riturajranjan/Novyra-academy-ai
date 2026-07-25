"use client";

import Image from "next/image";
import { useGoalSelection } from "@/hooks/useGoalSelection";

function daysUntil(date: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / msPerDay);
}

export default function Quote() {
  const { selectedScore, examDate } = useGoalSelection();
  const remaining = examDate ? daysUntil(examDate) : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-stack-sm md:gap-stack-lg md:mt-stack-md">
        {/* Dr. Nova summary */}
        <div className="md:col-span-full glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Image
                  className="w-12 h-12 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(192,193,255,0.4)]"
                  src="/drnovya.jpg"
                  alt=""
                  height={100}
                  width={100}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-surface animate-pulse" />
              </div>
              <div>
                <span className=" text-label-md text-primary block">
                  Dr. Nova
                </span>
                <div className="flex gap-1 mt-1">
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm text-on-surface-variant leading-relaxed">
              <p className="text-on-surface font-medium">
                {selectedScore
                  ? `Excellent choice. You're targeting ${selectedScore}%.`
                  : "Choose a target score above to get started."}
              </p>
              <p>I&apos;ll now generate:</p>
              <ul className="grid grid-cols-2 gap-2 text-[11px]">
                <li className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    check_circle
                  </span>{" "}
                  Daily AI Lessons
                </li>
                <li className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    check_circle
                  </span>{" "}
                  Smart Notes
                </li>
                <li className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    check_circle
                  </span>{" "}
                  Adaptive Quizzes
                </li>
                <li className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    check_circle
                  </span>{" "}
                  Mock Tests
                </li>
              </ul>
              {remaining !== null && (
                <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                  <div className="text-[10px]">
                    <span className="block text-on-surface-variant uppercase">
                      Time To Exam
                    </span>
                    <span className="text-primary font-bold">
                      {remaining >= 0 ? `${remaining} Days` : "Date passed"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:col-span-full glass-panel rounded-2xl p-6">
          <h4 className=" text-label-md mb-6 uppercase tracking-widest text-on-surface-variant">
            Dynamic Roadmap
          </h4>
          <div className="relative pl-8 space-y-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 timeline-line opacity-30" />
            <div className="relative">
              <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-bold">Daily Learning</div>
                  <div className="text-xs text-on-surface-variant">
                    Concept mastery &amp; AI drills
                  </div>
                </div>
                <span className="text-[10px] text-primary">PHASE 01</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-surface-container-high border-2 border-white/20" />
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-bold">Weekly Revision</div>
                  <div className="text-xs text-on-surface-variant">
                    Knowledge retention spikes
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant">
                  PHASE 02
                </span>
              </div>
            </div>
            <div className="relative opacity-40">
              <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-on-surface-variant" />
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-bold text-on-surface-variant">
                    Board Exam Ready
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Final simulations
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  lock
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
