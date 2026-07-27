import { z } from "zod";

/**
 * Subject.id is a numeric Prisma primary key. Route params always arrive as
 * strings, so this coerces and rejects anything that isn't a positive int
 * (names, slugs, negative numbers, etc.) before it ever reaches the DAL.
 */
export const subjectIdParamSchema = z.coerce.number().int().positive();
