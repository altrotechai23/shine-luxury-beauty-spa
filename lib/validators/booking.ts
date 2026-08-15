import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters."),

  phone: z
    .string()
    .min(8, "Phone number must be at least 8 characters."),

  email: z
    .string()
    .email("Please enter a valid email address."),

  serviceId: z
    .string()
    .min(1, "Please select a service."),

  therapist: z
    .string()
    .optional(),

  date: z
    .string()
    .min(1, "Please select a date."),

  time: z
    .string()
    .min(1, "Please select a time."),

  notes: z
    .string()
    .optional(),
});

export type BookingSchema =
  z.infer<typeof bookingSchema>;