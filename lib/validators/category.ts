import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Category name must be at least 2 characters")
    .max(50),

  slug: z
    .string()
    .trim()
    .min(2)
    .regex(
      /^[a-z0-9-]+$/,
      "Slug may only contain lowercase letters, numbers and hyphens."
    ),

  description: z
    .string()
    .trim()
    .max(300)
    .optional()
    .or(z.literal("")),
});

export type CategoryInput = z.infer<typeof categorySchema>;