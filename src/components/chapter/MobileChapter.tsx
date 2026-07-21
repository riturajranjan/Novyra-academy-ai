"use client";

import Hero from "./Hero";
import LearningTabs from "./LearningTabs";
import LearningCanvas from "./LearningCanvas";
import LessonCards from "./LessonCards";
import BottomAIChat from "./BottomAIChat";
import { MobileHeader } from "../dashboard/mobile";
import BottomNavigation from "../dashboard/mobile/BottomNavigation";

export default function MobileChapter() {
  return (
    <>
      {" "}
      <MobileHeader />
      <div
        className="
          lg:hidden
        "
      >
        <main
          className="
            px-margin-mobile pt-20 pb-56 space-y-6
          "
        >
          {/* Hero */}

          <Hero mobile />

          {/* Tabs */}

          <LearningTabs />

          {/* Interactive Canvas */}

          <LearningCanvas />

          {/* Lesson Cards */}

          <LessonCards />
        </main>

        {/* Fixed Bottom AI */}

        <BottomAIChat />
      </div>
      <BottomNavigation />
    </>
  );
}
