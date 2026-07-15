"use client";

import { useRouter } from "next/navigation";

import StudyPlanHeader from "./StudyPlanHeader";
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

export default function StudyPlan() {
  const router = useRouter();

  return (
    <>
      {/* Header */}

      {/* <StudyPlanHeader /> */}

      {/* Body */}

      <main
        className="
         flex w-full  h-screen overflow-hidden
        ">
        <StudyPlanHero />
        

        <section
          className="w-full 
           md:w-[60%] overflow-y-auto px-[14px] md:px-margin-desktop md:py-stack-lg relative
          ">
          {/* Welcome */}
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
                  Generated 2 minutes ago based on your learning style.
                </p>
              </div>
              <button className="flex items-center font-bold gap-2 text-label-md  text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-all">
                <span
                  className="material-symbols-outlined text-[24px]"
                  data-icon="share">
                  share
                </span>
                Share Plan
              </button>
            </div>

            {/* Summary */}

            <SummaryCard />

            {/* Row */}

            <div
              className="
               md:grid grid-cols-3 gap-gutter
            ">
              <TodayMission />

              <PredictionCard />
            </div>

            {/* Row */}

            <div
              className="
             md:grid grid-cols-2 gap-gutter
            ">
              <WeeklyChart />

              <ProgressTimeline />
            </div>

            {/* Row */}

            <DailyRoutine />

            {/* Row */}

            <div
              className="
              md:grid grid-cols-5 gap-gutter
            ">
              <AIInsights />
              <MiniCalendar />
            </div>
            <MotivationCard />

            {/* Footer */}

            <StudyPlanFooter
              onEdit={() => router.push("/goals")}
              onStart={() => router.push("/dashboard")}
            />
          </div>
        </section>
      </main>
    </>
  );
}
