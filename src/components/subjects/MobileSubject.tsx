"use client";

import Hero from "./Hero";
import QuickActions from "./QuickActions";
import AnalyticsCards from "./AnalyticsCards";
import Modules from "./Modules";
import AICoach from "./AICoach";
import ContinueLearning from "./ContinueLearning";

import BottomNavigation from "../dashboard/mobile/BottomNavigation";
import { MobileHeader } from "../dashboard/mobile";
import CourseModulesMob from "./CourseModulesMob";

export default function MobileSubject() {
  return (
    <>
      <MobileHeader />
      <div className="lg:hidden">
        <div
          className="
        px-margin-mobile

bg-background

        pt-20

        pb-28

        space-y-6
      ">
          <QuickActions />

          {/* Analytics */}

          <AnalyticsCards />

          {/* Modules */}

          <Modules />

          {/* AI Coach */}

          <AICoach />

          {/* Continue */}

          <CourseModulesMob />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
