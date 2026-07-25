import { z } from "zod";

export const boardSelectionSchema = z.object({
  boardId: z.string().min(1, "Choose a board"),
});

export const classSelectionSchema = z.object({
  classId: z.number().int("Choose a class"),
});

export const subjectsSelectionSchema = z.object({
  subjectIds: z.array(z.number().int()).min(1, "Select at least one subject"),
});

export const learningStyleSelectionSchema = z.object({
  learningStyleIds: z.array(z.string().min(1)).min(1, "Select at least one learning style"),
});

export const goalSelectionSchema = z.object({
  targetScoreId: z.number().int("Choose a target score"),
  dailyGoalId: z.string().min(1, "Choose a daily goal"),
  examDate: z.iso.datetime({ offset: true }).nullable().optional(),
});
