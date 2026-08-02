"use server";

import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validators/booking";

export async function createBooking(data: unknown) {
  const result = bookingSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Invalid booking information.",
    };
  }

  const booking = result.data;

  await prisma.appointment.create({
    data: {
      fullName: booking.fullName,
      phone: booking.phone,
      email: booking.email,
      service: {
        connect: {
            id: booking.service,
        },
        },
      therapist: booking.therapist,
      date: new Date(booking.date),
      time: booking.time,
      notes: booking.notes,
    },
  });

  return {
    success: true,
  };
}