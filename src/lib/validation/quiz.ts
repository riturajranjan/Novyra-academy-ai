import { z } from "zod";

export const submitQuizAttemptSchema = z.object({
  quizId: z.string().min(1),
  responses: z
    .array(
      z.object({
        questionId: z.string().min(1),
        selectedOptionId: z.string().min(1).nullable(),
      }),
    )
    .min(1),
});
