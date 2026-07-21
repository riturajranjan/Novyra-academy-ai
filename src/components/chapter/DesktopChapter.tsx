"use client";

import Hero from "./Hero";
import LearningTabs from "./LearningTabs";
import LearningCanvas from "./LearningCanvas";
import LessonCards from "./LessonCards";
import AITeacher from "./AITeacher";
import LessonFlow from "./LessonFlow";

export default function DesktopChapter() {
  return (
    <div className="flex-1 overflow-y-auto bg-background p-2 lg:p-2 custom-scrollbar hidden lg:block">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-8 space-y-8">
          <Hero />
          <LearningTabs />
          <LearningCanvas />
          <LessonCards />
        </div>
        <div className="col-span-12 xl:col-span-4 space-y-8">
          <AITeacher />
          <LessonFlow />
        </div>
      </div>
    </div>
  );
}
