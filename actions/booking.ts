"use server";

import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validators/booking";

export async function createBooking(data: unknown) {
  const result = bookingSchema.safeParse(data);

  if (!result.success) {
    console.error(
      "BOOKING VALIDATION ERROR:",
      result.error.flatten()
    );

    return {
      success: false,
      message:
        "Invalid booking information. Please check your details.",
    };
  }

  const booking = result.data;

  try {
    /*
    =========================================================
    VERIFY SERVICE
    =========================================================
    */

    const service = await prisma.service.findUnique({
      where: {
        id: booking.serviceId,
      },
    });

    if (!service) {
      return {
        success: false,
        message:
          "The selected service could not be found.",
      };
    }

    /*
    =========================================================
    CREATE APPOINTMENT
    =========================================================
    */

    const appointment =
      await prisma.appointment.create({
        data: {
          fullName: booking.fullName,
          phone: booking.phone,
          email: booking.email,

          service: {
            connect: {
              id: booking.serviceId,
            },
          },

          therapist:
            booking.therapist || null,

          date: new Date(booking.date),

          time: booking.time,

          notes: booking.notes || null,
        },
      });

    /*
    =========================================================
    SUCCESS
    =========================================================
    */

    console.log(
      "ALTRONO ++++++++++++++++ APPOINTMENT CREATED:",
      appointment.id
    );

    return {
      success: true,
      appointmentId: appointment.id,
    };

  } catch (error) {

    console.error(
      "CREATE APPOINTMENT ERROR:",
      error
    );

    return {
      success: false,
      message:
        "We could not create your appointment. Please try again.",
    };
  }
}