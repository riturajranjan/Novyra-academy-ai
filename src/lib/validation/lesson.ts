import { z } from "zod";

/** Chapter/Lesson ids are cuid strings; ownership is enforced by the DAL/action query, not the id format. */
export const chapterIdParamSchema = z.string().min(1);
export const lessonIdParamSchema = z.string().min(1);

export const completeLessonSchema = z.object({
  lessonId: z.string().min(1),
});
