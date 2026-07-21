"use client";

import { aiHints, navigator, question, quizStats } from "@/constants/quiz";

import QuizHeader from "../sections/QuizHeader";
import QuestionCard from "../sections/QuestionCard";
import AnswerOptions from "../sections/AnswerOptions";
import AICoach from "../sections/AICoach";
import QuestionNavigator from "../sections/QuestionNavigator";
import QuizFooter from "../sections/QuizFooter";

export default function MobileLayout() {
  return (
    <div className="space-y-4 lg:hidden">
      {/* Sticky Header */}

      <div className="sticky top-0 z-30 -mx-4 border-b border-outline-variant bg-background/95 px-4 py-4 backdrop-blur-xl">
        <QuizHeader />
      </div>
      <div className="pt-14 pb-48 px-margin-mobile max-w-md mx-auto">
        <div className="flex justify-between items-center mb-stack-md">
          <span className="font-label-md text-[12px] uppercase tracking-widest text-primary-fixed-dim">
            Question 12 of 18
          </span>
          <span className="px-3 py-1 bg-tertiary/10 border border-tertiary/20 text-tertiary font-label-md  rounded-full text-[12px]">
            Exam Weightage: 12%
          </span>
        </div>

        <QuestionCard />
        <AnswerOptions question={question} />
        <AICoach />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 glass-panel border-none safe-bottom">
        {/* Main Actions */}
        <div className="px-margin-mobile py-4 flex items-center justify-between gap-3">
          <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-bold text-label-md transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">
              arrow_back
            </span>
            Previous
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface-variant hover:text-error transition-all active:scale-95">
            <span className="material-symbols-outlined">flag</span>
          </button>
          <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-on-primary font-bold text-label-md shadow-lg shadow-primary/20 transition-all active:scale-95">
            Submit Answer
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </button>
        </div>
        {/* Question Navigator (Swipeable) */}
        <div className="px-margin-mobile pb-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max">
            {/* Past Questions */}
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-[11px] font-bold">
              1
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-[11px] font-bold">
              2
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-[11px] font-bold">
              3
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-[11px] font-bold">
              4
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-[11px] font-bold">
              ...
            </div>
            {/* Current */}
            <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center text-[11px] font-bold ring-2 ring-primary ring-offset-2 ring-offset-background">
              12
            </div>
            {/* Future */}
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest/40 border border-white/5 flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
              13
            </div>
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest/40 border border-white/5 flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
              14
            </div>
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest/40 border border-white/5 flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
              15
            </div>
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest/40 border border-white/5 flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
              16
            </div>
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest/40 border border-white/5 flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
              17
            </div>
            <div className="w-8 h-8 rounded-lg bg-surface-container-highest/40 border border-white/5 flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
              18
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
