"use server";

import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

import { bookingSchema } from "@/lib/validators/booking";

import {
  createClientBookingEmail,
  createOwnerBookingEmail,
} from "@/lib/email/booking-confirmation";

/*
=========================================================
RESEND
=========================================================
*/

const resend = new Resend(
  process.env.RESEND_API_KEY
);

/*
=========================================================
CREATE BOOKING
=========================================================
*/

export async function createBooking(
  data: unknown
) {
  /*
  =======================================================
  VALIDATION
  =======================================================
  */

  const result =
    bookingSchema.safeParse(data);

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

  /*
  =======================================================
  FIND SERVICE
  =======================================================
  */

  let service;

  try {
    service =
      await prisma.service.findUnique({
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
  } catch (error) {
    console.error(
      "SERVICE LOOKUP ERROR:",
      error
    );

    return {
      success: false,
      message:
        "We could not verify the selected service.",
    };
  }

  /*
  =======================================================
  CREATE APPOINTMENT
  =======================================================

  IMPORTANT:

  The appointment is saved BEFORE emails are sent.

  Therefore a Resend failure cannot destroy
  the appointment.
  =======================================================
  */

  let appointment;

  try {
    appointment =
      await prisma.appointment.create({
        data: {
          fullName:
            booking.fullName,

          phone:
            booking.phone,

          email:
            booking.email,

          service: {
            connect: {
              id: booking.serviceId,
            },
          },

          therapist:
            booking.therapist || null,

          date:
            new Date(booking.date),

          time:
            booking.time,

          notes:
            booking.notes || null,
        },
      });

    console.log(
      "SHINE APPOINTMENT CREATED:",
      appointment.id
    );

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

  /*
  =======================================================
  EMAIL DATA
  =======================================================
  */

  const emailData = {
    appointmentId:
      appointment.id,

    fullName:
      appointment.fullName,

    phone:
      appointment.phone,

    email:
      appointment.email,

    serviceName:
      service.title,

    date:
      appointment.date,

    time:
      appointment.time,

    therapist:
      appointment.therapist,

    notes:
      appointment.notes,
  };

  /*
  =======================================================
  RESEND ENVIRONMENT
  =======================================================
  */

  const fromEmail =
    process.env.RESEND_FROM_EMAIL;

  const ownerEmail =
    process.env.SHINE_OWNER_EMAIL;

  /*
  =======================================================
  CHECK RESEND CONFIGURATION
  =======================================================
  */

  if (
    !process.env.RESEND_API_KEY ||
    !fromEmail ||
    !ownerEmail
  ) {
    console.error(
      "SHINE RESEND CONFIGURATION IS MISSING."
    );

    /*
    Appointment already exists,
    therefore still return success.
    */

    return {
      success: true,

      appointmentId:
        appointment.id,

      emailSent: false,

      clientEmailSent: false,

      ownerEmailSent: false,
    };
  }

  /*
  =======================================================
  BUILD EMAILS
  =======================================================
  */

  try {
    const clientEmail =
      createClientBookingEmail(
        emailData
      );

    const ownerEmailTemplate =
      createOwnerBookingEmail(
        emailData
      );

    /*
    =====================================================
    SEND CLIENT + OWNER IN PARALLEL
    =====================================================
    */

    const [
      clientResult,
      ownerResult,
    ] = await Promise.allSettled([
      /*
      -----------------------------------------------------
      CLIENT
      -----------------------------------------------------
      */

      resend.emails.send({
        from:
          fromEmail,

        to: [
          appointment.email,
        ],

        subject:
          "Your SHINE appointment is confirmed ✦",

        html:
          clientEmail.html,

        text:
          clientEmail.text,
      }),

      /*
      -----------------------------------------------------
      OWNER
      -----------------------------------------------------
      */

      resend.emails.send({
        from:
          fromEmail,

        to: [
          ownerEmail,
        ],

        subject:
          `New SHINE Booking — ${appointment.fullName}`,

        html:
          ownerEmailTemplate.html,

        text:
          ownerEmailTemplate.text,
      }),
    ]);

    /*
    =====================================================
    CLIENT RESULT
    =====================================================
    */

    let clientEmailSent =
      false;

    if (
      clientResult.status ===
      "fulfilled"
    ) {
      if (
        clientResult.value.error
      ) {
        console.error(
          "SHINE CLIENT EMAIL ERROR:",
          clientResult.value.error
        );
      } else {
        clientEmailSent =
          true;

        console.log(
          "SHINE CLIENT EMAIL SENT:",
          clientResult.value.data?.id
        );
      }
    } else {
      console.error(
        "SHINE CLIENT EMAIL REJECTED:",
        clientResult.reason
      );
    }

    /*
    =====================================================
    OWNER RESULT
    =====================================================
    */

    let ownerEmailSent =
      false;

    if (
      ownerResult.status ===
      "fulfilled"
    ) {
      if (
        ownerResult.value.error
      ) {
        console.error(
          "SHINE OWNER EMAIL ERROR:",
          ownerResult.value.error
        );
      } else {
        ownerEmailSent =
          true;

        console.log(
          "SHINE OWNER EMAIL SENT:",
          ownerResult.value.data?.id
        );
      }
    } else {
      console.error(
        "SHINE OWNER EMAIL REJECTED:",
        ownerResult.reason
      );
    }

    /*
    =====================================================
    FINAL RESULT
    =====================================================
    */

    return {
      success: true,

      appointmentId:
        appointment.id,

      emailSent:
        clientEmailSent &&
        ownerEmailSent,

      clientEmailSent,

      ownerEmailSent,
    };

  } catch (error) {
    /*
    =====================================================
    EMAIL FAILURE

    DATABASE BOOKING STILL EXISTS.
    =====================================================
    */

    console.error(
      "SHINE BOOKING EMAIL ERROR:",
      error
    );

    return {
      success: true,

      appointmentId:
        appointment.id,

      emailSent: false,

      clientEmailSent: false,

      ownerEmailSent: false,
    };
  }
}