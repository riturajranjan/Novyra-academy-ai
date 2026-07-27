"use server";

import { revalidatePath } from "next/cache";

import { requireUser, getOnboardingProfile } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { NOTE_CREATED_XP } from "@/lib/gamification";
import { saveNoteSchema } from "@/lib/validation/note";

export type SaveNoteState = { error?: string } | undefined;

/**
 * One note per user per lesson (Note is unique on [userId, lessonId]) —
 * saving is an upsert. Activity(NOTE_CREATED) only fires the first time a
 * note is created for a lesson, not on every edit, mirroring the
 * hadCompletionToday guard in completeStudyPlanTask.
 */
export async function saveNote(input: { lessonId: string; content: string }): Promise<SaveNoteState> {
  const user = await requireUser();

  const parsed = saveNoteSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const { lessonId, content } = parsed.data;

  const profile = await getOnboardingProfile();
  const selectedSubjectIds = profile?.subjects.map((row) => row.subject.id) ?? [];
  if (selectedSubjectIds.length === 0) {
    return { error: "Finish onboarding before taking notes." };
  }

  const lesson = await prisma.lesson.findFirst({
    where: { id: lessonId, chapter: { subjectId: { in: selectedSubjectIds } } },
    select: { id: true, chapterId: true, chapter: { select: { subjectId: true } } },
  });
  if (!lesson) {
    return { error: "That lesson isn't part of your selected subjects." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const existing = await tx.note.findUnique({
        where: { userId_lessonId: { userId: user.id, lessonId } },
      });

      await tx.note.upsert({
        where: { userId_lessonId: { userId: user.id, lessonId } },
        create: { userId: user.id, lessonId, content },
        update: { content },
      });

      if (!existing) {
        await tx.activity.create({
          data: {
            userId: user.id,
            type: "NOTE_CREATED",
            subjectId: lesson.chapter.subjectId,
            chapterId: lesson.chapterId,
            lessonId,
            title: "Created a note",
            xp: NOTE_CREATED_XP,
          },
        });
      }
    });

    revalidatePath(`/subject/${lesson.chapter.subjectId}/chapter/${lesson.chapterId}/lesson/${lessonId}`);
    return undefined;
  } catch {
    return { error: "Could not save this note." };
  }
}
