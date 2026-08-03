import { z } from "zod";

export const faqSchema = z.object({
  question: z
    .string()
    .min(5, "Question is required"),

  answer: z
    .string()
    .min(10, "Answer is required"),

  order: z.coerce
    .number()
    .min(0),
});

export type FAQInput = z.infer<typeof faqSchema>;