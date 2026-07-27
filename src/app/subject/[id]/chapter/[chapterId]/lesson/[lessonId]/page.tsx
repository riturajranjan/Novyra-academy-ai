import { notFound, redirect } from "next/navigation";

import { getCurrentUser, getLessonDetail, getChapterWithLessons, getCompletedLessonIds } from "@/lib/dal";
import { subjectIdParamSchema } from "@/lib/validation/subject";
import { chapterIdParamSchema, lessonIdParamSchema } from "@/lib/validation/lesson";
import { computeChapterProgress } from "@/lib/progress";
import LessonDetailPage from "@/components/lesson/LessonDetailPage";

export default async function LessonRoute({
  params,
}: {
  params: Promise<{ id: string; chapterId: string; lessonId: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const { id, chapterId, lessonId } = await params;
  const parsedSubjectId = subjectIdParamSchema.safeParse(id);
  const parsedChapterId = chapterIdParamSchema.safeParse(chapterId);
  const parsedLessonId = lessonIdParamSchema.safeParse(lessonId);
  if (!parsedSubjectId.success || !parsedChapterId.success || !parsedLessonId.success) notFound();

  const lesson = await getLessonDetail(parsedChapterId.data, parsedLessonId.data);
  if (!lesson) notFound();

  // Re-fetched (not just trusted from the URL) so a subjectId that doesn't
  // actually match this chapter resolves to notFound(), same defense as
  // getUserSelectedSubject's ownership scoping elsewhere in the DAL. Also
  // gives us the chapter's sibling lessons for a real progress percentage.
  const chapterResult = await getChapterWithLessons(parsedSubjectId.data, parsedChapterId.data);
  if (!chapterResult) notFound();

  const lessonIds = chapterResult.chapter.lessons.map((sibling) => sibling.id);
  const completedLessonIds = await getCompletedLessonIds(lessonIds);
  const chapterProgress = computeChapterProgress(lessonIds, completedLessonIds);

  return <LessonDetailPage lesson={lesson} chapterProgress={chapterProgress} />;
}
