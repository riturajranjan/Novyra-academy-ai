"use client";

import type { DailyGoal, TargetScore as TargetScoreModel } from "@prisma/client";
import { GoalSelectionProvider } from "@/hooks/useGoalSelection";

import TargetScore from "./TargetScore";
import DailyStudyGoal from "./DailyStudyGoal";
import ExamDate from "./ExamDate";
import BottomDateSheet from "./BottomDateSheet";
import Quote from "./Quote";
import BuildLearningPath from "./BuildLearningPath";
import LeftSectionGoal from "./LeftSectionGoal";

interface GoalSelectionProps {
  dailyGoals: DailyGoal[];
  targetScores: TargetScoreModel[];
  initialTargetScoreId: number | null;
  initialDailyGoalId: string | null;
  initialExamDate: Date | null;
  subjectCount: number;
  totalChapters: number;
}

export default function GoalSelection({
  dailyGoals,
  targetScores,
  initialTargetScoreId,
  initialDailyGoalId,
  initialExamDate,
  subjectCount,
  totalChapters,
}: GoalSelectionProps) {
  return (
    <GoalSelectionProvider
      initialTargetScoreId={initialTargetScoreId}
      initialDailyGoalId={initialDailyGoalId}
      initialExamDate={initialExamDate}
      subjectCount={subjectCount}
      totalChapters={totalChapters}>
      <GoalSelectionContent dailyGoals={dailyGoals} targetScores={targetScores} />
    </GoalSelectionProvider>
  );
}

function GoalSelectionContent({
  dailyGoals,
  targetScores,
}: {
  dailyGoals: DailyGoal[];
  targetScores: TargetScoreModel[];
}) {
  return (
    <>
      <main className="min-h-screen flex">
        <LeftSectionGoal />
        <section className="flex-1  flex flex-col p-margin-mobile md:p-margin-desktop bg-surface overflow-y-auto custom-scrollbar">
          <div className="max-w-2xl mx-auto w-full pb-32">
            <header className="mb-stack-lg">
              <h2 className="font-display-xl text-4xl text-on-surface mb-4 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                Set Your Learning Goal
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-xl">
                Tell Dr. Nova what you want to achieve. Your entire AI classroom
                will adapt automatically.
              </p>
            </header>
            <div className="grid grid-cols-1 gap-stack-lg">
              <TargetScore targetScores={targetScores} />

              <DailyStudyGoal dailyGoals={dailyGoals} />

              <ExamDate />

              <Quote />
              <BuildLearningPath />
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  format_quote
                </span>
                <p className="text-xs italic text-on-surface-variant">
                  &quot;Small daily progress creates extraordinary
                  success.&quot; —{" "}
                  <span className="text-primary font-medium">Dr. Nova</span>
                </p>
              </div>
            </div>
          </div>

          <BottomDateSheet />
        </section>
      </main>
    </>
  );
}
