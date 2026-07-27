import "server-only";

import { getLessonDetail, getOnboardingProfile } from "@/lib/dal";

/**
 * Assembles the Board/Class/Subject/Chapter/Lesson context an AI Teacher
 * would need to answer in-context. This is plumbing only — it does not call
 * any LLM provider. A future phase builds the API route/provider call
 * around this function; nothing here should assume a particular provider.
 */
export async function assembleAITeacherContext(chapterId: string, lessonId: string) {
  const profile = await getOnboardingProfile();
  if (!profile?.board || !profile.schoolClass) return null;

  const lesson = await getLessonDetail(chapterId, lessonId);
  if (!lesson) return null;

  return {
    board: { id: profile.board.id, title: profile.board.title },
    schoolClass: { id: profile.schoolClass.id, title: profile.schoolClass.title },
    subject: { id: lesson.chapter.subject.id, title: lesson.chapter.subject.title },
    chapter: { id: lesson.chapter.id, title: lesson.chapter.title, description: lesson.chapter.description },
    lesson: {
      id: lesson.id,
      title: lesson.title,
      summary: lesson.summary,
      content: lesson.content,
      analogy: lesson.analogy,
      formula: lesson.formula,
      aiTeacherIntro: lesson.aiTeacherIntro,
    },
  };
}

export type AITeacherContext = NonNullable<Awaited<ReturnType<typeof assembleAITeacherContext>>>;
