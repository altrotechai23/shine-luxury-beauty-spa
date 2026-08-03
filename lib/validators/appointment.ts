import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name is required"),

  phone: z
    .string()
    .min(6, "Phone number is required"),

  email: z
    .string()
    .email("Invalid email address"),

  serviceId: z
    .string()
    .min(1, "Please select a service"),

  therapist: z
    .string()
    .optional(),

  date: z
    .string()
    .min(1, "Please select a date"),

  time: z
    .string()
    .min(1, "Please select a time"),

  notes: z
    .string()
    .optional(),

  status: z.enum([
    "PENDING",
    "CONFIRMED",
    "COMPLETED",
    "CANCELLED",
  ]),
});

export type AppointmentInput = z.infer<
  typeof appointmentSchema
>;