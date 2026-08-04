"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";
import type { BookingData } from "./BookingWizard";

interface Props {
  booking: BookingData;
  updateBooking: (
    values: Partial<BookingData>
  ) => void;
}

const DAYS = Array.from({ length: 62 }, (_, i) => {
  const date = new Date();

  date.setDate(date.getDate() + i);

  return {
    value: date.toISOString().split("T")[0],
    day: date.toLocaleDateString("en-US", {
      weekday: "short",
    }),
    number: date.getDate(),
    month: date.toLocaleDateString("en-US", {
      month: "short",
    }),
  };
});

const MORNING = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
];

const AFTERNOON = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
];

const EVENING = [
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

export default function StepDateTime({
  booking,
  updateBooking,
}: Props) {
  return (
    <div className="space-y-12">

      <div className="text-center">

        <span className="rounded-full bg-[#6A4535]/10 px-4 py-2 text-sm font-medium text-[#6A4535]">
          Step Two
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Choose Your Appointment
        </h2>

        <p className="mt-4 text-neutral-500">
          Select a preferred date and time.
        </p>

      </div>

      {/* Dates */}

      <div>

        <div className="mb-5 flex items-center gap-3">

          <CalendarDays size={20} />

          <h3 className="text-xl font-semibold">
            Select Date
          </h3>

        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">

          {DAYS.map((day) => {

            const selected =
              booking.date === day.value;

            return (
              <motion.button
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                key={day.value}
                type="button"
                onClick={() =>
                  updateBooking({
                    date: day.value,
                  })
                }
                className={`min-w-[92px] rounded-3xl border p-5 transition ${
                  selected
                    ? "border-[#6A4535] bg-[#6A4535] text-white"
                    : "border-neutral-200 bg-white hover:border-[#6A4535]"
                }`}
              >
                <p className="text-sm">
                  {day.day}
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {day.number}
                </p>

                <p className="mt-1 text-sm">
                  {day.month}
                </p>

              </motion.button>
            );
          })}

        </div>

      </div>

      {/* Times */}

      <TimeSection
        title="Morning"
        times={MORNING}
        booking={booking}
        updateBooking={updateBooking}
      />

      <TimeSection
        title="Afternoon"
        times={AFTERNOON}
        booking={booking}
        updateBooking={updateBooking}
      />

      <TimeSection
        title="Evening"
        times={EVENING}
        booking={booking}
        updateBooking={updateBooking}
      />

    </div>
  );
}

interface TimeProps {
  title: string;
  times: string[];
  booking: BookingData;
  updateBooking: (
    values: Partial<BookingData>
  ) => void;
}

function TimeSection({
  title,
  times,
  booking,
  updateBooking,
}: TimeProps) {
  return (
    <div>

      <div className="mb-5 flex items-center gap-3">

        <Clock3 size={18} />

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {times.map((time) => {

          const selected =
            booking.time === time;

          return (
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              key={time}
              type="button"
              onClick={() =>
                updateBooking({
                  time,
                })
              }
              className={`rounded-2xl border py-4 text-center font-medium transition ${
                selected
                  ? "border-[#6A4535] bg-[#6A4535] text-white"
                  : "border-neutral-200 hover:border-[#6A4535]"
              }`}
            >
              {time}
            </motion.button>
          );
        })}

      </div>

    </div>
  );
}