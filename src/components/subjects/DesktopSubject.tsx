"use client";

import Hero from "./Hero";
import QuickActions from "./QuickActions";
import AnalyticsCards from "./AnalyticsCards";
import TodaysGoals from "./TodaysGoals";
import AIPrediction from "./AIPrediction";
import Modules from "./Modules";
import AICoach from "./AICoach";
import CurriculumPath from "./CurriculumPath";


export default function DesktopSubject() {
  return (
    <div className="flex-1 max-w-container-max mx-auto  space-y-section-gap">
      {/* Hero */}
      <section className="relative">
        <div className="grid grid-cols-12 gap-gutter items-end relative z-10">
          {" "}
          <Hero />
          <QuickActions />
          <div className="col-span-4"></div>
        </div>
      </section>
      {/* Quick Actions */}

      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-8 space-y-stack-lg">
          <AnalyticsCards />
          <div className="grid grid-cols-2 gap-stack-md">
            <TodaysGoals />
            <AIPrediction />
          </div>
          <Modules />
        </div>
        <div className="col-span-4 space-y-stack-lg">
          <AICoach />
          <CurriculumPath />
        </div>
      </div>
    </div>
  );
}
