"use client";

import { useRouter } from "next/navigation";
import type { StudyPlan as StudyPlanData } from "@/types/study-plan";

import StudyPlanHero from "./StudyPlanHero";
import SummaryCard from "./SummaryCard";
import TodayMission from "./TodayMission";
import PredictionCard from "./PredictionCard";
import WeeklyChart from "./WeeklyChart";
import ProgressTimeline from "./ProgressTimeline";
import DailyRoutine from "./DailyRoutine";
import AIInsights from "./AIInsights";
import MiniCalendar from "./MiniCalendar";
import MotivationCard from "./MotivationCard";
import StudyPlanFooter from "./StudyPlanFooter";

interface StudyPlanProps {
  studentName: string;
  boardTitle: string;
  classTitle: string;
  subjectTitles: string[];
  targetScore: string | null;
  dailyGoalTitle: string;
  dailyGoalDuration: string;
  examDate: Date | null;
  totalChapters: number;
  plan: StudyPlanData;
}

export default function StudyPlan({
  studentName,
  boardTitle,
  classTitle,
  subjectTitles,
  targetScore,
  dailyGoalTitle,
  dailyGoalDuration,
  examDate,
  totalChapters,
  plan,
}: StudyPlanProps) {
  const router = useRouter();

  const todayIndex = new Date().getDay();
  const today = plan.days[todayIndex];

  return (
    <>
      <main
        className="
         flex w-full  h-screen overflow-hidden
        ">
        <StudyPlanHero />

        <section
          className="w-full
           md:w-[60%] overflow-y-auto px-[14px] md:px-margin-desktop md:py-stack-lg relative
          ">
          <div className="floating-glow -top-20 -right-20"></div>
          <div
            className="floating-glow bottom-40 left-10"
            style={{ animationDelay: "-2s" }}></div>

          <div className="max-w-4xl mx-auto space-y-stack-md md:space-y-stack-lg">
            <div className="md:flex justify-between items-end hidden">
              <div>
                <h2 className="text-headline-md font-headline-md font-bold text-on-surface">
                  Your Personalized Study Roadmap
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Built from your board, class, subjects, learning style, and daily goal.
                </p>
              </div>
            </div>

            <SummaryCard
              studentName={studentName}
              boardTitle={boardTitle}
              classTitle={classTitle}
              dailyGoalDuration={dailyGoalDuration}
              targetScore={targetScore}
              subjectTitles={subjectTitles}
              examDate={examDate}
            />

            <div
              className="
               md:grid grid-cols-3 gap-gutter
            ">
              <TodayMission day={today} />

              <PredictionCard targetScore={targetScore} />
            </div>

            <div
              className="
             md:grid grid-cols-2 gap-gutter
            ">
              <WeeklyChart days={plan.days} />

              <ProgressTimeline />
            </div>

            <DailyRoutine day={today} />

            <div
              className="
              md:grid grid-cols-5 gap-gutter
            ">
              <AIInsights
                subjectCount={subjectTitles.length}
                dailyMinutes={plan.dailyMinutes}
                dailyGoalTitle={dailyGoalTitle}
                totalChapters={totalChapters}
                examDate={examDate}
              />
              <MiniCalendar />
            </div>
            <MotivationCard />

            <StudyPlanFooter
              onEdit={() => router.push("/goal-selection")}
              onStart={() => router.push("/dashboard")}
            />
          </div>
        </section>
      </main>
    </>
  );
}
