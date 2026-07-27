"use client";

import type { Subject, ContentStatus } from "@prisma/client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import type { HeaderStats } from "@/components/layout/Header";
import type { ContinueLearningItem } from "@/lib/contentDal";

import DesktopSubject from "./DesktopSubject";
import MobileSubject from "./MobileSubject";

/** A Chapter row plus its real (currently always 0, until lesson completion ships) progress percentage. */
export interface ChapterSummary {
  id: string;
  title: string;
  description: string;
  order: number;
  status: ContentStatus;
  progress: number;
  lessonCount: number;
}

/** Real, honestly-derived stats for the subject page's supporting cards — no fabricated values. */
export interface SubjectPageStats {
  boardTitle: string | null;
  classTitle: string | null;
  chapterCount: number;
  chaptersCompleted: number;
  lessonCount: number;
  completedLessonCount: number;
  minutesRemaining: number;
  quizAverageScore: number | null;
  studyMinutes: number;
  todaysTasks: { taskType: string; minutes: number; completed: boolean }[];
  continueLearning: ContinueLearningItem | null;
}

interface SubjectPageProps {
  subject: Subject;
  chapters: ChapterSummary[];
  subjectProgress: number;
  stats: SubjectPageStats;
  headerStats: HeaderStats;
}

export default function SubjectPage({ subject, chapters, subjectProgress, stats, headerStats }: SubjectPageProps) {
  return (
    <>
      {/* Mobile */}

      <MobileSubject
        subject={subject}
        chapters={chapters}
        subjectProgress={subjectProgress}
        stats={stats}
        headerStats={headerStats}
      />

      <div className="hidden lg:block">
        <DashboardLayout headerStats={headerStats}>
          <DesktopSubject subject={subject} chapters={chapters} subjectProgress={subjectProgress} stats={stats} />
        </DashboardLayout>
      </div>
    </>
  );
}
