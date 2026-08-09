"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";
import type { Prisma } from "@prisma/client";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface BookingData {
  serviceId: string;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

interface Props {
  booking: BookingData;
  service?: Service;
  updateBooking: (values: Partial<BookingData>) => void;
  onSuccess: () => void;
}

export default function StepCustomer({
  booking,
  service,
  updateBooking,
  onSuccess,
}: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notesOpen, setNotesOpen] = useState(false);

  const isValid =
    booking.fullName.trim().length >= 2 &&
    booking.phone.trim().length >= 6 &&
    booking.email.trim().length > 0;

  /*
  =========================================================
  DATE
  =========================================================
  */

  function formatDate(value: string) {
    if (!value) return "Date not selected";

    const [year, month, day] = value
      .split("-")
      .map(Number);

    const date = new Date(
      year,
      month - 1,
      day
    );

    return new Intl.DateTimeFormat("en-ZA", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  /*
  =========================================================
  SUBMIT
  =========================================================
  */

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!isValid) {
      setError(
        "Please complete your name, phone number and email."
      );

      return;
    }

    setError("");
    setSubmitting(true);

    try {
      /*
       * KEEP YOUR EXISTING BOOKING SUBMISSION
       * LOGIC HERE.
       *
       * Example:
       *
       * await createBooking(booking);
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      );

      onSuccess();
    } catch {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        min-h-[calc(100svh-200px)]
        flex-1
        flex-col
      "
    >
      {/* =================================================
          INTRO
      ================================================= */}

      <div className="pt-2 sm:pt-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#62AAB5]/20
              bg-[#62AAB5]/10
              px-3
              py-1.5
            "
          >
            <Sparkles
              size={12}
              className="text-[#8CCBD3]"
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#8CCBD3]
              "
            >
              Almost there
            </span>
          </div>

          <h2
            className="
              font-heading
              text-[clamp(2.5rem,11vw,4.5rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.05em]
              text-white
            "
          >
            Your {" "}
      
            <span className="text-[#62AAB5]">
              details.
            </span>
          </h2>

          <p
            className="
              mt-2
              max-w-md
              text-sm
              leading-6
              text-white/45
              sm:text-base
            "
          >
            Just a few details and your
            appointment will be ready.
          </p>
        </motion.div>
      </div>

     

      {/* =================================================
          PERSONAL DETAILS
      ================================================= */}

      <div className="mt-7">
        <p
          className="
            mb-3
            px-1
            text-[9px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-white/30
          "
        >
          Your information
        </p>

        <div
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.045]
            backdrop-blur-xl
          "
        >
          {/* NAME */}

          <DarkField
            icon={User}
            label="Full name"
            placeholder="Your name"
            value={booking.fullName}
            onChange={(value) => {
              updateBooking({
                fullName: value,
              });

              setError("");
            }}
            autoComplete="name"
          />

          <div className="mx-5 border-t border-white/[0.07]" />

          {/* PHONE */}

          <DarkField
            icon={Phone}
            label="Phone"
            placeholder="+27 78 000 0000"
            value={booking.phone}
            onChange={(value) => {
              updateBooking({
                phone: value,
              });

              setError("");
            }}
            type="tel"
            autoComplete="tel"
          />

          <div className="mx-5 border-t border-white/[0.07]" />

          {/* EMAIL */}

          <DarkField
            icon={Mail}
            label="Email"
            placeholder="you@example.com"
            value={booking.email}
            onChange={(value) => {
              updateBooking({
                email: value,
              });

              setError("");
            }}
            type="email"
            autoComplete="email"
          />
        </div>
      </div>

      {/* =================================================
          NOTES — BOTTOM SHEET STYLE
      ================================================= */}

      <div className="mt-4">
        <button
          type="button"
          onClick={() =>
            setNotesOpen((value) => !value)
          }
          className="
            flex
            min-h-[58px]
            w-full
            items-center
            justify-between
            rounded-[22px]
            border
            border-white/10
            bg-white/[0.035]
            px-5
            text-left
            transition-all
            active:scale-[0.99]
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Additional notes
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/45
              "
            >
              {booking.notes
                ? "Note added"
                : "Optional"}
            </p>
          </div>

          <motion.div
            animate={{
              rotate: notesOpen ? 90 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/[0.05]
            "
          >
            <ArrowRight
              size={14}
              className="text-white/50"
            />
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: notesOpen ? "auto" : 0,
            opacity: notesOpen ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-3">
            <textarea
              value={booking.notes}
              onChange={(event) =>
                updateBooking({
                  notes: event.target.value,
                })
              }
              placeholder="Anything you'd like us to know?"
              rows={4}
              className="
                w-full
                resize-none
                rounded-[22px]
                border
                border-white/10
                bg-white/[0.045]
                px-5
                py-4
                text-sm
                leading-6
                text-white
                outline-none
                placeholder:text-white/20
                focus:border-[#62AAB5]/40
                focus:ring-4
                focus:ring-[#62AAB5]/5
              "
            />
          </div>
        </motion.div>
      </div>

      {/* =================================================
          ERROR
      ================================================= */}

      {error && (
        <motion.div
          initial={{
            opacity: 0,
            y: -5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mt-4
            rounded-2xl
            border
            border-red-400/20
            bg-red-400/10
            px-4
            py-3
            text-xs
            leading-5
            text-red-300
          "
        >
          {error}
        </motion.div>
      )}

      {/* =================================================
          PRIVACY
      ================================================= */}

      <div
        className="
          mt-5
          flex
          items-start
          gap-3
          px-1
        "
      >
        <div
          className="
            mt-0.5
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#62AAB5]/10
          "
        >
          <Check
            size={11}
            className="text-[#62AAB5]"
            strokeWidth={2.5}
          />
        </div>

        <p
          className="
            text-[10px]
            leading-5
            text-white/30
          "
        >
          Your details are only used to manage
          your appointment and communicate with
          you about your booking.
        </p>
      </div>

      {/* =================================================
          MOBILE ACTION
      ================================================= */}

      <div
        className="
          mt-auto
          pt-7
        "
      >
        <button
          type="submit"
          disabled={!isValid || submitting}
          className="
            group
            flex
            min-h-[62px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-[22px]
            bg-[#62AAB5]
            px-6
            text-sm
            font-semibold
            text-[#061519]
            shadow-[0_20px_60px_rgba(98,170,181,0.18)]
            transition-all
            duration-300

            disabled:cursor-not-allowed
            disabled:opacity-30

            enabled:hover:bg-[#78BBC4]
            enabled:active:scale-[0.98]
          "
        >
          {submitting ? (
            <>
              <span
                className="
                  h-4
                  w-4
                  animate-spin
                  rounded-full
                  border-2
                  border-[#061519]/20
                  border-t-[#061519]
                "
              />

              Confirming...
            </>
          ) : (
            <>
              Confirm appointment

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </>
          )}
        </button>

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <MessageCircle
            size={12}
            className="text-[#62AAB5]"
          />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/25
            "
          >
            We&apos;ll confirm shortly
          </span>
        </div>
      </div>

       {/* =================================================
          APPOINTMENT SUMMARY
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.08,
        }}
        className="
          mt-4
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-white/[0.045]
          backdrop-blur-xl
        "
      >
        {/* Treatment */}

        <div
          className="
            flex
            items-center
            gap-4
            border-b
            border-white/[0.07]
            px-4
            py-4
            sm:px-5
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-[#62AAB5]/10
            "
          >
            <Sparkles
              size={16}
              className="text-[#8CCBD3]"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Treatment
            </p>

            <p
              className="
                mt-1
                truncate
                font-heading
                text-base
                text-white
              "
            >
              {service?.title ||
                "Selected treatment"}
            </p>
          </div>
        </div>

        {/* Date + time */}

        <div className="grid grid-cols-2">
          <div
            className="
              flex
              items-center
              gap-3
              border-r
              border-white/[0.07]
              px-4
              py-4
              sm:px-5
            "
          >
            <CalendarDays
              size={15}
              className="shrink-0 text-white/30"
            />

            <div className="min-w-0">
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                Date
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-xs
                  text-white/70
                "
              >
                {formatDate(booking.date)}
              </p>
            </div>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              px-4
              py-4
              sm:px-5
            "
          >
            <Clock3
              size={15}
              className="shrink-0 text-white/30"
            />

            <div className="min-w-0">
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                Time
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-xs
                  font-medium
                  text-[#8CCBD3]
                "
              >
                {booking.time ||
                  "Not selected"}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </form>
  );
}

/*
=========================================================
DARK MOBILE FIELD
=========================================================
*/

function DarkField({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  icon: typeof User;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label
      className="
        flex
        min-h-[72px]
        items-center
        gap-4
        px-5
        py-3
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white/[0.045]
        "
      >
        <Icon
          size={16}
          className="text-white/35"
          strokeWidth={1.7}
        />
      </div>

      <div className="min-w-0 flex-1">
        <span
          className="
            block
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-white/25
          "
        >
          {label}
        </span>

        <input
          type={type}
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="
            mt-1
            block
            w-full
            bg-transparent
            text-sm
            text-white
            outline-none
            placeholder:text-white/20
          "
        />
      </div>
    </label>
  );
}