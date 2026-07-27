"use client";

import type { LessonDetail } from "@/lib/dal";

import { MobileHeader } from "../dashboard/mobile";
import BottomNavigation from "../dashboard/mobile/BottomNavigation";
import LessonBreadcrumb from "./LessonBreadcrumb";
import LessonContentCard from "./LessonContentCard";

interface MobileLessonDetailProps {
  lesson: LessonDetail;
  chapterProgress: number;
}

export default function MobileLessonDetail({ lesson, chapterProgress }: MobileLessonDetailProps) {
  return (
    <>
      <MobileHeader />
      <div className="lg:hidden">
        <main className="px-margin-mobile pt-20 pb-28 space-y-6">
          <LessonBreadcrumb lesson={lesson} />
          <LessonContentCard lesson={lesson} chapterProgress={chapterProgress} />
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
