"use client";

import type { LessonDetail } from "@/lib/dal";

import DashboardLayout from "@/components/layout/DashboardLayout";

import DesktopLessonDetail from "./DesktopLessonDetail";
import MobileLessonDetail from "./MobileLessonDetail";

interface LessonDetailPageProps {
  lesson: LessonDetail;
  chapterProgress: number;
}

export default function LessonDetailPage({ lesson, chapterProgress }: LessonDetailPageProps) {
  return (
    <>
      {/* Mobile */}

      <MobileLessonDetail lesson={lesson} chapterProgress={chapterProgress} />

      {/* Desktop */}

      <div className="hidden lg:block">
        <DashboardLayout>
          <DesktopLessonDetail lesson={lesson} chapterProgress={chapterProgress} />
        </DashboardLayout>
      </div>
    </>
  );
}
