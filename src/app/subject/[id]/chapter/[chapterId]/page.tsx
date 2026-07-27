import { notFound, redirect } from "next/navigation";

import { getCurrentUser, getChapterWithLessons, getCompletedLessonIds } from "@/lib/dal";
import { subjectIdParamSchema } from "@/lib/validation/subject";
import { chapterIdParamSchema } from "@/lib/validation/lesson";
import { computeChapterProgress } from "@/lib/progress";
import ChapterDetailPage from "@/components/chapter/ChapterDetailPage";

export default async function Chapter({
  params,
}: {
  params: Promise<{ id: string; chapterId: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const { id, chapterId } = await params;
  const parsedSubjectId = subjectIdParamSchema.safeParse(id);
  const parsedChapterId = chapterIdParamSchema.safeParse(chapterId);
  if (!parsedSubjectId.success || !parsedChapterId.success) notFound();

  const result = await getChapterWithLessons(parsedSubjectId.data, parsedChapterId.data);
  if (!result) notFound();

  const { subject, chapter } = result;
  const lessonIds = chapter.lessons.map((lesson) => lesson.id);
  const completedLessonIds = await getCompletedLessonIds(lessonIds);
  const progress = computeChapterProgress(lessonIds, completedLessonIds);

  return <ChapterDetailPage subject={subject} chapter={chapter} progress={progress} />;
}
