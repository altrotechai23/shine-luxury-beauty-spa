import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(3),

  phone: z.string().min(8),

  email: z.string().email(),

  service: z.string(),

  therapist: z.string().optional(),

  date: z.string(),

  time: z.string(),

  notes: z.string().optional(),
});

export type BookingSchema =
  z.infer<typeof bookingSchema>;