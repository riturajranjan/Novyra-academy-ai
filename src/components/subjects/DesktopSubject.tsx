"use client";

import type { Subject } from "@prisma/client";

import Hero from "./Hero";
import QuickActions from "./QuickActions";
import AnalyticsCards from "./AnalyticsCards";
import TodaysGoals from "./TodaysGoals";
import AIPrediction from "./AIPrediction";
import Modules from "./Modules";
import AICoach from "./AICoach";
import CurriculumPath from "./CurriculumPath";
import type { ChapterSummary, SubjectPageStats } from "./SubjectPage";

interface DesktopSubjectProps {
  subject: Subject;
  chapters: ChapterSummary[];
  subjectProgress: number;
  stats: SubjectPageStats;
}

export default function DesktopSubject({ subject, chapters, subjectProgress, stats }: DesktopSubjectProps) {
  return (
    <div className="flex-1 max-w-container-max mx-auto  space-y-section-gap">
      {/* Hero */}
      <section className="relative">
        <div className="grid grid-cols-12 gap-gutter items-end relative z-10">
          {" "}
          <Hero
            subjectTitle={subject.title}
            boardTitle={stats.boardTitle}
            classTitle={stats.classTitle}
          />
          <QuickActions
            subjectTitle={subject.title}
            progressPercent={subjectProgress}
            chapterCount={stats.chapterCount}
            chaptersCompleted={stats.chaptersCompleted}
            minutesRemaining={stats.minutesRemaining}
            continueLearning={stats.continueLearning}
          />
          <div className="col-span-4"></div>
        </div>
      </section>
      {/* Quick Actions */}

      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-8 space-y-stack-lg">
          <AnalyticsCards
            progressPercent={subjectProgress}
            quizAverageScore={stats.quizAverageScore}
            studyMinutes={stats.studyMinutes}
            chapters={chapters}
          />
          <div className="grid grid-cols-2 gap-stack-md">
            <TodaysGoals subjectTitle={subject.title} tasks={stats.todaysTasks} />
            <AIPrediction subjectTitle={subject.title} progressPercent={subjectProgress} />
          </div>
          <Modules subjectId={subject.id} chapters={chapters} />
        </div>
        <div className="col-span-4 space-y-stack-lg">
          <AICoach
            subjectId={subject.id}
            subjectTitle={subject.title}
            progressPercent={subjectProgress}
            lessonCount={stats.lessonCount}
            completedLessonCount={stats.completedLessonCount}
            quizAverageScore={stats.quizAverageScore}
            href={`/subject/${subject.id}`}
          />
          <CurriculumPath subjectId={subject.id} chapters={chapters} subjectProgress={subjectProgress} />
        </div>
      </div>
    </div>
  );
}
