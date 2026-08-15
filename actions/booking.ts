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
  =========================================================
  VALIDATE
  =========================================================
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

  try {
    /*
    =======================================================
    VERIFY SERVICE
    =======================================================
    */

    const service =
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

    /*
    =======================================================
    CREATE APPOINTMENT
    =======================================================
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

          date: new Date(
            booking.date
          ),

          time: booking.time,

          notes:
            booking.notes || null,
        },
      });

    /*
    =======================================================
    LOG SUCCESS
    =======================================================
    */

    console.log(
      "ALTRONO ++++++++++++++++ APPOINTMENT CREATED:",
      appointment.id
    );

    /*
    =======================================================
    PREPARE EMAIL DATA
    =======================================================
    */

    const emailData = {
      appointmentId: appointment.id,

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
    GENERATE CLIENT EMAIL
    =======================================================
    */

    const clientEmail =
      createClientBookingEmail(
        emailData
      );

    /*
    =======================================================
    GENERATE OWNER EMAIL
    =======================================================
    */

    const ownerEmail =
      createOwnerBookingEmail(
        emailData
      );

    /*
    =======================================================
    EMAIL ADDRESSES
    =======================================================
    */

    const ownerEmailAddress =
      process.env.SHINE_OWNER_EMAIL;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL;

    /*
    =======================================================
    SAFETY CHECK
    =======================================================
    */

    if (
      !process.env.RESEND_API_KEY ||
      !fromEmail ||
      !ownerEmailAddress
    ) {
      console.error(
        "RESEND ENVIRONMENT VARIABLES ARE MISSING."
      );

      /*
      IMPORTANT:
      The appointment has already been created.
      We do NOT fail the booking just because email
      configuration is missing.
      */

      return {
        success: true,
        appointmentId: appointment.id,
        emailSent: false,
      };
    }

    /*
    =======================================================
    SEND CLIENT + OWNER EMAILS
    =======================================================
    */

    const [
      clientResult,
      ownerResult,
    ] = await Promise.allSettled([
      /*
      -------------------------------------------------------
      CLIENT
      -------------------------------------------------------
      */

      resend.emails.send({
        from: fromEmail,

        to: [
          appointment.email,
        ],

        subject:
          "Your SHINE appointment is confirmed ✦",

        html:
          clientEmail.html,

        text:
          clientEmail.text,

        attachments:
          clientEmail.attachments,
      }),

      /*
      -------------------------------------------------------
      OWNER
      -------------------------------------------------------
      */

      resend.emails.send({
        from: fromEmail,

        to: [
          ownerEmailAddress,
        ],

        subject:
          `New SHINE Booking — ${appointment.fullName}`,

        html:
          ownerEmail.html,

        text:
          ownerEmail.text,

        attachments:
          ownerEmail.attachments,
      }),
    ]);

    /*
    =======================================================
    CHECK CLIENT EMAIL
    =======================================================
    */

    let clientEmailSent = false;
    let ownerEmailSent = false;

    if (
      clientResult.status ===
      "fulfilled"
    ) {
      if (clientResult.value.error) {
        console.error(
          "CLIENT EMAIL ERROR:",
          clientResult.value.error
        );
      } else {
        clientEmailSent = true;

        console.log(
          "CLIENT CONFIRMATION EMAIL SENT:",
          clientResult.value.data?.id
        );
      }
    } else {
      console.error(
        "CLIENT EMAIL REJECTED:",
        clientResult.reason
      );
    }

    /*
    =======================================================
    CHECK OWNER EMAIL
    =======================================================
    */

    if (
      ownerResult.status ===
      "fulfilled"
    ) {
      if (ownerResult.value.error) {
        console.error(
          "OWNER EMAIL ERROR:",
          ownerResult.value.error
        );
      } else {
        ownerEmailSent = true;

        console.log(
          "OWNER BOOKING EMAIL SENT:",
          ownerResult.value.data?.id
        );
      }
    } else {
      console.error(
        "OWNER EMAIL REJECTED:",
        ownerResult.reason
      );
    }

    /*
    =======================================================
    FINAL RESULT
    =======================================================
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
    =======================================================
    DATABASE / SERVER ERROR
    =======================================================
    */

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