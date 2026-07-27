import { notFound, redirect } from "next/navigation";

import { getCurrentUser, getSubjectWithChapters, getCompletedLessonIds, getOnboardingProfile } from "@/lib/dal";
import { subjectIdParamSchema } from "@/lib/validation/subject";
import { computeChapterProgress, computeSubjectProgress } from "@/lib/progress";
import { getSubjectContinueLearning, getSubjectMinutesRemaining, getSubjectDetailStats, getUserStreak } from "@/lib/contentDal";
import SubjectPage from "@/components/subjects/SubjectPage";

export default async function Subject({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const { id } = await params;
  const parsedId = subjectIdParamSchema.safeParse(id);
  if (!parsedId.success) notFound();

  const result = await getSubjectWithChapters(parsedId.data);
  if (!result) notFound();

  const { subject, chapters } = result;
  const allLessonIds = chapters.flatMap((chapter) => chapter.lessons.map((lesson) => lesson.id));
  const completedLessonIds = await getCompletedLessonIds(allLessonIds);

  const chaptersWithProgress = chapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    description: chapter.description,
    order: chapter.order,
    status: chapter.status,
    lessonCount: chapter.lessons.length,
    progress: computeChapterProgress(
      chapter.lessons.map((lesson) => lesson.id),
      completedLessonIds,
    ),
  }));

  const subjectProgress = computeSubjectProgress(allLessonIds, completedLessonIds);
  const chaptersCompleted = chaptersWithProgress.filter((chapter) => chapter.progress === 100).length;

  const [profile, continueLearning, minutesRemaining, detailStats, streak] = await Promise.all([
    getOnboardingProfile(),
    getSubjectContinueLearning(parsedId.data),
    getSubjectMinutesRemaining(parsedId.data),
    getSubjectDetailStats(parsedId.data),
    getUserStreak(),
  ]);

  const stats = {
    boardTitle: profile?.board?.title ?? null,
    classTitle: profile?.schoolClass?.title ?? null,
    chapterCount: chaptersWithProgress.length,
    chaptersCompleted,
    lessonCount: allLessonIds.length,
    completedLessonCount: completedLessonIds.size,
    minutesRemaining,
    quizAverageScore: detailStats?.quizAverageScore ?? null,
    studyMinutes: detailStats?.studyMinutes ?? 0,
    todaysTasks: detailStats?.todaysTasks ?? [],
    continueLearning,
  };

  const headerStats = {
    streak,
    classTitle: profile?.schoolClass?.title ?? null,
    avatarUrl: user.image,
  };

  return (
    <SubjectPage
      subject={subject}
      chapters={chaptersWithProgress}
      subjectProgress={subjectProgress}
      stats={stats}
      headerStats={headerStats}
    />
  );
}
