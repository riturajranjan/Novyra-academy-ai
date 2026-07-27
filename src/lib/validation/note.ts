import { z } from "zod";

export const saveNoteSchema = z.object({
  lessonId: z.string().min(1),
  content: z.string().trim().min(1, "Note can't be empty").max(20_000, "Note is too long"),
});
