"use client";

import LearningTabs from "./LearningTabs";
import LearningCanvas from "./LearningCanvas";
import BottomAIChat from "./BottomAIChat";
import ChapterHero from "./ChapterHero";
import LessonCardsGrid from "./LessonCardsGrid";
import { MobileHeader } from "../dashboard/mobile";
import BottomNavigation from "../dashboard/mobile/BottomNavigation";
import type { ChapterDetailPageProps } from "./ChapterDetailPage";

export default function MobileChapterDetail({ subject, chapter, progress }: ChapterDetailPageProps) {
  return (
    <>
      <MobileHeader />
      <div className="lg:hidden">
        <main className="px-margin-mobile pt-20 pb-56 space-y-6">
          {/* Hero */}

          <ChapterHero
            subjectTitle={subject.title}
            chapterTitle={chapter.title}
            chapterOrder={chapter.order}
            progress={progress}
          />

          {/* Tabs */}

          <LearningTabs />

          {/* Interactive Canvas */}

          <LearningCanvas />

          {/* Lesson Cards */}

          <LessonCardsGrid subjectId={subject.id} chapterId={chapter.id} lessons={chapter.lessons} />
        </main>

        {/* Fixed Bottom AI */}

        <BottomAIChat />
      </div>
      <BottomNavigation />
    </>
  );
}
