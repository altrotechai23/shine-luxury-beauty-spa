import { z } from "zod";

export const testimonialSchema = z.object({
  name: z
    .string()
    .min(2, "Customer name is required"),

  role: z
    .string()
    .optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),

  rating: z.coerce
    .number()
    .min(1, "Minimum rating is 1")
    .max(5, "Maximum rating is 5"),

  image: z
    .string()
    .optional(),

  featured: z.boolean(),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;