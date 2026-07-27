import { z } from "zod";

export const completeStudyPlanTaskSchema = z.object({
  subjectId: z.number().int().positive(),
});
