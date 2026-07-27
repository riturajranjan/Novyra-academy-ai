"use client";

import type { Subject, Chapter, Lesson } from "@prisma/client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import DesktopChapterDetail from "./DesktopChapterDetail";
import MobileChapterDetail from "./MobileChapterDetail";

export interface ChapterDetailPageProps {
  subject: Subject;
  chapter: Chapter & { lessons: Lesson[] };
  progress: number;
}

export default function ChapterDetailPage({ subject, chapter, progress }: ChapterDetailPageProps) {
  return (
    <>
      {/* Mobile */}

      <MobileChapterDetail subject={subject} chapter={chapter} progress={progress} />

      {/* Desktop */}

      <div className="hidden lg:block">
        <DashboardLayout>
          <DesktopChapterDetail subject={subject} chapter={chapter} progress={progress} />
        </DashboardLayout>
      </div>
    </>
  );
}
