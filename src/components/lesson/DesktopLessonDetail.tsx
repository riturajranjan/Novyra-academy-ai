"use client";

import type { LessonDetail } from "@/lib/dal";

import LessonBreadcrumb from "./LessonBreadcrumb";
import LessonContentCard from "./LessonContentCard";

interface DesktopLessonDetailProps {
  lesson: LessonDetail;
  chapterProgress: number;
}

export default function DesktopLessonDetail({ lesson, chapterProgress }: DesktopLessonDetailProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-background p-2 lg:p-2 custom-scrollbar hidden lg:block">
      <div className="max-w-[1000px] mx-auto space-y-6">
        <LessonBreadcrumb lesson={lesson} />
        <LessonContentCard lesson={lesson} chapterProgress={chapterProgress} />
      </div>
    </div>
  );
}
