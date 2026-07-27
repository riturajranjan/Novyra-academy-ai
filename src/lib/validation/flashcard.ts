import { z } from "zod";

export const reviewFlashcardSchema = z.object({
  flashcardId: z.string().min(1),
});
