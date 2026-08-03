import { z } from "zod";

export const gallerySchema = z.object({
  image: z
    .string()
    .min(1, "Image URL is required"),

  title: z
    .string()
    .min(2, "Title is required"),

  category: z
    .string()
    .optional(),
});

export type GalleryInput = z.infer<typeof gallerySchema>;