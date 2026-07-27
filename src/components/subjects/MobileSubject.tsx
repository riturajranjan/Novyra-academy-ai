"use client";

import type { Subject } from "@prisma/client";

import Hero from "./Hero";
import QuickActions from "./QuickActions";
import AnalyticsCards from "./AnalyticsCards";
import Modules from "./Modules";
import AICoach from "./AICoach";
import ContinueLearning from "./ContinueLearning";

import BottomNavigation from "../dashboard/mobile/BottomNavigation";
import { MobileHeader } from "../dashboard/mobile";
import CourseModulesMob from "./CourseModulesMob";
import type { ChapterSummary, SubjectPageStats } from "./SubjectPage";
import type { HeaderStats } from "@/components/layout/Header";

interface MobileSubjectProps {
  subject: Subject;
  chapters: ChapterSummary[];
  subjectProgress: number;
  stats: SubjectPageStats;
  headerStats: HeaderStats;
}

export default function MobileSubject({ subject, chapters, subjectProgress, stats, headerStats }: MobileSubjectProps) {
  return (
    <>
      <MobileHeader streak={headerStats.streak} />
      <div className="lg:hidden">
        <div
          className="
        px-margin-mobile

bg-background

        pt-20

        pb-28

        space-y-6
      ">
          <Hero subjectTitle={subject.title} boardTitle={stats.boardTitle} classTitle={stats.classTitle} />

          <QuickActions
            subjectTitle={subject.title}
            progressPercent={subjectProgress}
            chapterCount={stats.chapterCount}
            chaptersCompleted={stats.chaptersCompleted}
            minutesRemaining={stats.minutesRemaining}
            continueLearning={stats.continueLearning}
          />

          {/* Analytics */}

          <AnalyticsCards
            progressPercent={subjectProgress}
            quizAverageScore={stats.quizAverageScore}
            studyMinutes={stats.studyMinutes}
            chapters={chapters}
          />

          {/* Modules */}

          <Modules subjectId={subject.id} chapters={chapters} />

          {/* AI Coach */}

          <AICoach
            subjectId={subject.id}
            subjectTitle={subject.title}
            progressPercent={subjectProgress}
            lessonCount={stats.lessonCount}
            completedLessonCount={stats.completedLessonCount}
            quizAverageScore={stats.quizAverageScore}
            href={`/subject/${subject.id}`}
          />

          {/* Continue */}

          <ContinueLearning
            continueLearning={stats.continueLearning}
            subjectProgress={subjectProgress}
            lessonCount={stats.lessonCount}
            completedLessonCount={stats.completedLessonCount}
            minutesRemaining={stats.minutesRemaining}
          />

          <CourseModulesMob subjectId={subject.id} chapters={chapters} />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
