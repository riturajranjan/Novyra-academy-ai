"use client";

import LearningTabs from "./LearningTabs";
import LearningCanvas from "./LearningCanvas";
import AITeacher from "./AITeacher";
import ChapterHero from "./ChapterHero";
import LessonCardsGrid from "./LessonCardsGrid";
import LessonFlowTimeline from "./LessonFlowTimeline";
import type { ChapterDetailPageProps } from "./ChapterDetailPage";

export default function DesktopChapterDetail({ subject, chapter, progress }: ChapterDetailPageProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-background p-2 lg:p-2 custom-scrollbar hidden lg:block">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-8 space-y-8">
          <ChapterHero
            subjectTitle={subject.title}
            chapterTitle={chapter.title}
            chapterOrder={chapter.order}
            progress={progress}
          />
          <LearningTabs />
          <LearningCanvas />
          <LessonCardsGrid subjectId={subject.id} chapterId={chapter.id} lessons={chapter.lessons} />
        </div>
        <div className="col-span-12 xl:col-span-4 space-y-8">
          <AITeacher />
          <LessonFlowTimeline lessons={chapter.lessons} />
        </div>
      </div>
    </div>
  );
}
