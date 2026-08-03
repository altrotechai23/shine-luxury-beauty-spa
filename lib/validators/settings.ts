import { z } from "zod";

export const settingsSchema = z.object({
  businessName: z
    .string()
    .min(2, "Business name is required"),

  phone: z
    .string()
    .min(5, "Phone number is required"),

  email: z
    .string()
    .email("Invalid email address"),

  whatsapp: z
    .string()
    .min(5, "WhatsApp number is required"),

  address: z
    .string()
    .min(5, "Address is required"),

  instagram: z
    .string()
    .optional(),

  facebook: z
    .string()
    .optional(),

  openingHours: z
    .string()
    .optional(),

  heroTitle: z
    .string()
    .optional(),

  heroSubtitle: z
    .string()
    .optional(),
});

export type SettingsInput = z.infer<typeof settingsSchema>;