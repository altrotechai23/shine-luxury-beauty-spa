import { z } from "zod";

export const serviceSchema = z.object({
  title: z
    .string()
    .min(2, "Title is required"),

  slug: z
    .string()
    .min(2, "Slug is required"),

  description: z
    .string()
    .min(10, "Description is too short"),

  duration: z.coerce
    .number()
    .min(5, "Minimum duration is 5 minutes"),

  price: z.coerce
    .number()
    .min(1, "Price is required"),

  categoryId: z
    .string()
    .min(1, "Please select a category"),

  image: z.string().optional(),

  featured: z.boolean().optional(),

  active: z.boolean().optional(),
});

export type ServiceInput = z.infer<typeof serviceSchema>;