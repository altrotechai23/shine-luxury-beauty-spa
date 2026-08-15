"use client";

import { useEffect, useState } from "react";
import type { Prisma } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";



import BookingHeader from "./BookingHeader";
import BookingNavigation from "./BookingNavigation";

import StepService from "./StepService";
import StepDateTime from "./StepDateTime";
import StepCustomer from "./StepCustomer";
import BookingSuccess from "./BookingSuccess";
import { createBooking } from "@/actions/booking";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  services: Service[];
}

export interface BookingData {
  serviceId: string;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export default function BookingWizard({
  services,
}: Props) {
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [booking, setBooking] = useState<BookingData>({
    serviceId: "",
    date: "",
    time: "",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const selectedService = services.find(
    (service) => service.id === booking.serviceId
  );

  /*
  =========================================================
  STEP SCROLL
  =========================================================
  */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [step]);

  /*
  =========================================================
  UPDATE BOOKING
  =========================================================
  */

  function updateBooking(
    values: Partial<BookingData>
  ) {
    setBooking((previous) => ({
      ...previous,
      ...values,
    }));

    // Clear any previous error when the customer
    // changes their booking information.
    if (error) {
      setError(null);
    }
  }

  /*
  =========================================================
  NAVIGATION
  =========================================================
  */

  function next() {
    setStep((current) =>
      Math.min(current + 1, 2)
    );
  }

  function previous() {
    setStep((current) =>
      Math.max(current - 1, 0)
    );
  }

  /*
  =========================================================
  CREATE APPOINTMENT
  =========================================================
  */

  async function submitBooking() {
    // Prevent duplicate bookings if the customer
    // clicks the submit button multiple times.
    if (submitting) {
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      /*
      -------------------------------------------------------
      Basic frontend validation
      -------------------------------------------------------
      */

      if (!booking.serviceId) {
        setError(
          "Please select a service before booking."
        );
        return;
      }

      if (!booking.date) {
        setError(
          "Please select a date before booking."
        );
        return;
      }

      if (!booking.time) {
        setError(
          "Please select a time before booking."
        );
        return;
      }

      if (!booking.fullName.trim()) {
        setError(
          "Please enter your full name."
        );
        return;
      }

      if (!booking.phone.trim()) {
        setError(
          "Please enter your phone number."
        );
        return;
      }

      if (!booking.email.trim()) {
        setError(
          "Please enter your email address."
        );
        return;
      }

      /*
      -------------------------------------------------------
      SEND BOOKING TO SERVER
      -------------------------------------------------------
      */

      const result = await createBooking({
        fullName: booking.fullName,
        phone: booking.phone,
        email: booking.email,
        serviceId: booking.serviceId,
        date: booking.date,
        time: booking.time,
        notes: booking.notes || undefined,
      });

      /*
      -------------------------------------------------------
      DATABASE ERROR
      -------------------------------------------------------
      */

      if (!result.success) {
        setError(
          result.message ||
            "We could not create your appointment. Please try again."
        );

        return;
      }

      /*
      -------------------------------------------------------
      SUCCESS
      -------------------------------------------------------
      
      Only show the success screen AFTER Prisma has
      successfully created the appointment.
      */

      setSuccess(true);
    } catch (error) {
      console.error(
        "BOOKING SUBMISSION ERROR:",
        error
      );

      setError(
        "Something went wrong while creating your appointment. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  /*
  =========================================================
  SUCCESS
  =========================================================
  */

  if (success) {
    return (
      <div className="min-h-[100svh] bg-[#061519]">
        <BookingSuccess />
      </div>
    );
  }

  /*
  =========================================================
  MAIN BOOKING EXPERIENCE
  =========================================================
  */

  return (
    <div
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#061519]
        text-white
      "
    >
      {/* =================================================
          ATMOSPHERE
      ================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0">

        {/* Cyan glow */}

        <div
          className="
            absolute
            -left-[280px]
            -top-[180px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#62AAB5]/10
            blur-[160px]
          "
        />

        {/* Gold glow */}

        <div
          className="
            absolute
            -right-[300px]
            top-[30%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D7C0A0]/8
            blur-[180px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            -bottom-[350px]
            left-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#62AAB5]/6
            blur-[180px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,#061519_100%)]
            opacity-70
          "
        />

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 min-h-[100svh]">

        {/* =================================================
            HEADER
        ================================================= */}

        <BookingHeader
          currentStep={step}
          onBack={() => {
            if (step === 0) {
              window.location.href = "/";
            } else {
              previous();
            }
          }}
        />

        {/* =================================================
            STEP INDICATOR
        ================================================= */}

        <div className="mx-auto w-full max-w-7xl px-5 pt-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2">

            {[0, 1, 2].map((item) => {
              const active = item === step;
              const completed = item < step;

              return (
                <motion.div
                  key={item}
                  initial={false}
                  animate={{
                    width:
                      active || completed
                        ? 42
                        : 18,
                    opacity:
                      active || completed
                        ? 1
                        : 0.35,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className={`
                    h-[3px]
                    rounded-full
                    ${
                      active || completed
                        ? "bg-[#62AAB5]"
                        : "bg-white/20"
                    }
                  `}
                />
              );
            })}

            <span
              className="
                ml-2
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/35
              "
            >
              {String(step + 1).padStart(
                2,
                "0"
              )}{" "}
              / 03
            </span>

          </div>
        </div>

        {/* =================================================
            ERROR MESSAGE
        ================================================= */}

        {error && (
          <div className="mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8 lg:px-12">
            <div
              role="alert"
              className="
                rounded-2xl
                border
                border-red-400/20
                bg-red-500/10
                px-5
                py-4
                text-sm
                text-red-200
              "
            >
              {error}
            </div>
          </div>
        )}

        {/* =================================================
            FULL SCREEN STEP
        ================================================= */}

        <main
          className="
            mx-auto
            flex
            min-h-[calc(100svh-145px)]
            w-full
            max-w-7xl
            flex-col
            px-5
            pb-32
            pt-8

            sm:px-8
            sm:pt-10

            lg:px-12
          "
        >

          <AnimatePresence
            mode="wait"
            initial={false}
          >

            {/* =================================================
                STEP 1 — SERVICE
            ================================================= */}

            {step === 0 && (
              <motion.section
                key="service"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.4,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  flex
                  min-h-[calc(100svh-200px)]
                  flex-1
                  flex-col
                "
              >
                <StepService
                  services={services}
                  booking={booking}
                  updateBooking={updateBooking}
                />
              </motion.section>
            )}

            {/* =================================================
                STEP 2 — DATE & TIME
            ================================================= */}

            {step === 1 && (
              <motion.section
                key="datetime"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.4,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  flex
                  min-h-[calc(100svh-200px)]
                  flex-1
                  flex-col
                "
              >
                <StepDateTime
                  booking={booking}
                  updateBooking={updateBooking}
                />
              </motion.section>
            )}

            {/* =================================================
                STEP 3 — CUSTOMER
            ================================================= */}

            {step === 2 && (
              <motion.section
                key="customer"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.4,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  flex
                  min-h-[calc(100svh-200px)]
                  flex-1
                  flex-col
                "
              >
                <StepCustomer
                  booking={booking}
                  service={selectedService}
                  updateBooking={updateBooking}
                  onSuccess={submitBooking}
                />
              </motion.section>
            )}

          </AnimatePresence>
        </main>

        {/* =================================================
            FIXED BOTTOM NAVIGATION
        ================================================= */}

        <BookingNavigation
          currentStep={step}
          onNext={next}
          onPrevious={previous}
          booking={booking}
        />

      </div>
    </div>
  );
}