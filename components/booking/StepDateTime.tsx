"use client";

import { useMemo } from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import type { BookingData } from "./BookingWizard";

interface Props {
  booking: BookingData;
  updateBooking: (
    values: Partial<BookingData>
  ) => void;
}

/*
=========================================================
CONFIGURATION
=========================================================
*/

const DAYS_TO_SHOW = 30;

/*
  Change these if SHINE has different opening hours.
*/
const OPENING_HOUR = 8;
const CLOSING_HOUR = 18;

const SLOT_INTERVAL = 30;

/*
=========================================================
MAIN COMPONENT
=========================================================
*/

export default function StepDateTime({
  booking,
  updateBooking,
}: Props) {
  /*
  =======================================================
  AVAILABLE DATES
  =======================================================
  */

  const dates = useMemo(() => {
    const result: Date[] = [];

    const today = new Date();

    /*
      Start from today.
    */

    for (
      let index = 0;
      index < DAYS_TO_SHOW;
      index++
    ) {
      const date = new Date(today);

      date.setDate(
        today.getDate() + index
      );

      result.push(date);
    }

    return result;
  }, []);

  /*
  =======================================================
  SELECTED DATE
  =======================================================
  */

  const selectedDate =
    booking.date ||
    formatDateForBooking(dates[0]);

  /*
  =======================================================
  TIME SLOTS
  =======================================================
  */

  const timeSlots = useMemo(() => {
    return generateTimeSlots(
      OPENING_HOUR,
      CLOSING_HOUR,
      SLOT_INTERVAL
    );
  }, []);

  /*
  =======================================================
  GROUP TIMES
  =======================================================
  */

  const groupedTimes = useMemo(() => {
    return {
      morning: timeSlots.filter(
        (time) => getHour(time) < 12
      ),

      afternoon: timeSlots.filter(
        (time) =>
          getHour(time) >= 12 &&
          getHour(time) < 17
      ),

      evening: timeSlots.filter(
        (time) => getHour(time) >= 17
      ),
    };
  }, [timeSlots]);

  /*
  =======================================================
  DATE SELECTION
  =======================================================
  */

  function selectDate(date: Date) {
    const formatted =
      formatDateForBooking(date);

    /*
      If the user changes date,
      clear the previously selected time.
    */

    updateBooking({
      date: formatted,
      time: "",
    });
  }

  /*
  =======================================================
  TIME SELECTION
  =======================================================
  */

  function selectTime(time: string) {
    updateBooking({
      date: selectedDate,
      time,
    });
  }

  return (
    <div
      className="
        flex
        min-h-[calc(100svh-150px)]
        flex-1
        flex-col
      "
    >
      {/* =================================================
          HEADER
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
          duration: 0.5,
        }}
      >
        <div
          className="
            flex
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-[#62AAB5]
          "
        >
          <CalendarDays size={12} />

          <span>
            Find your moment
          </span>
        </div>

        <h1
          className="
            mt-5
            font-heading
            text-[clamp(3rem,13vw,6rem)]
            font-medium
            leading-[0.88]
            tracking-[-0.05em]
            text-white
          "
        >
          When would
        {" "}
          <span className="text-[#D7C0A0]">
            you like to shine?
          </span>
        </h1>

        <p
          className="
            mt-6
            max-w-md
            text-sm
            leading-7
            text-white/40
            sm:text-base
          "
        >
          Choose a date and time that feels
          right for you.
        </p>
      </motion.div>

      {/* =================================================
          DATE SELECTOR
      ================================================= */}

      <section className="mt-10 sm:mt-14">
        <div
          className="
            mb-4
            flex
            items-center
            justify-between
            px-1
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Select date
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/20
              "
            >
              Next 30 days
            </p>
          </div>

          <CalendarDays
            size={16}
            className="text-white/20"
          />
        </div>

        {/* =================================================
            HORIZONTAL DATE STRIP
        ================================================= */}

        <div
          className="
            -mx-5
            flex
            snap-x
            snap-mandatory
            gap-3
            overflow-x-auto
            px-5
            pb-3
            scrollbar-none
            sm:-mx-8
            sm:px-8
            lg:-mx-12
            lg:px-12
          "
          style={{
            WebkitOverflowScrolling:
              "touch",
          }}
        >
          {dates.map((date, index) => {
            const value =
              formatDateForBooking(date);

            const selected =
              value === selectedDate;

            const today =
              isToday(date);

            return (
              <motion.button
                key={value}
                type="button"
                onClick={() =>
                  selectDate(date)
                }
                whileTap={{
                  scale: 0.94,
                }}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    Math.min(
                      index * 0.025,
                      0.3
                    ),
                  duration: 0.35,
                }}
                className={`
                  relative
                  flex
                  min-w-[72px]
                  snap-start
                  flex-col
                  items-center
                  rounded-[24px]
                  border
                  px-3
                  py-4
                  transition-all
                  duration-300

                  ${
                    selected
                      ? `
                        border-[#62AAB5]/40
                        bg-[#62AAB5]/[0.12]
                        shadow-[0_15px_50px_rgba(98,170,181,0.12)]
                      `
                      : `
                        border-white/[0.07]
                        bg-white/[0.025]
                        hover:border-white/15
                        hover:bg-white/[0.05]
                      `
                  }
                `}
              >
                {today && (
                  <span
                    className="
                      absolute
                      -top-2
                      rounded-full
                      border
                      border-[#D7C0A0]/20
                      bg-[#D7C0A0]/10
                      px-2
                      py-1
                      text-[7px]
                      uppercase
                      tracking-[0.2em]
                      text-[#D7C0A0]
                    "
                  >
                    Today
                  </span>
                )}

                <span
                  className={`
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    ${
                      selected
                        ? "text-[#8CCBD3]"
                        : "text-white/30"
                    }
                  `}
                >
                  {formatWeekday(date)}
                </span>

                <span
                  className={`
                    mt-2
                    font-heading
                    text-2xl
                    ${
                      selected
                        ? "text-white"
                        : "text-white/70"
                    }
                  `}
                >
                  {date.getDate()}
                </span>

                <span
                  className={`
                    mt-1
                    text-[8px]
                    uppercase
                    tracking-[0.15em]
                    ${
                      selected
                        ? "text-white/50"
                        : "text-white/20"
                    }
                  `}
                >
                  {formatMonth(date)}
                </span>

                {selected && (
                  <motion.div
                    layoutId="selected-date"
                    className="
                      absolute
                      bottom-2
                      h-1
                      w-1
                      rounded-full
                      bg-[#62AAB5]
                    "
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =================================================
          TIME SECTION
      ================================================= */}

      <section className="mt-10 flex-1 sm:mt-14">
        <div
          className="
            mb-5
            flex
            items-end
            justify-between
            px-1
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Select time
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/20
              "
            >
              {formatSelectedDate(
                selectedDate
              )}
            </p>
          </div>

          {booking.time && (
            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#8CCBD3]
              "
            >
              <Check size={12} />

              {booking.time}
            </div>
          )}
        </div>

        {/* =================================================
            MORNING
        ================================================= */}

        {groupedTimes.morning.length > 0 && (
          <TimeGroup
            label="Morning"
            times={groupedTimes.morning}
            selectedTime={booking.time}
            onSelect={selectTime}
          />
        )}

        {/* =================================================
            AFTERNOON
        ================================================= */}

        {groupedTimes.afternoon.length > 0 && (
          <TimeGroup
            label="Afternoon"
            times={
              groupedTimes.afternoon
            }
            selectedTime={booking.time}
            onSelect={selectTime}
          />
        )}

        {/* =================================================
            EVENING
        ================================================= */}

        {groupedTimes.evening.length > 0 && (
          <TimeGroup
            label="Evening"
            times={groupedTimes.evening}
            selectedTime={booking.time}
            onSelect={selectTime}
          />
        )}
      </section>

      {/* =================================================
          SELECTION SUMMARY
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity:
            booking.date && booking.time
              ? 1
              : 0.45,
          y: 0,
        }}
        className="
          mt-8
          flex
          items-center
          justify-between
          rounded-[24px]
          border
          border-white/[0.07]
          bg-white/[0.025]
          px-5
          py-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#62AAB5]/10
            "
          >
            <Clock3
              size={15}
              className="text-[#62AAB5]"
            />
          </div>

          <div>
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Your appointment
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/70
              "
            >
              {booking.date &&
              booking.time
                ? `${formatSelectedDate(
                    booking.date
                  )} · ${
                    booking.time
                  }`
                : "Select a date and time"}
            </p>
          </div>
        </div>

        {booking.date &&
          booking.time && (
            <Check
              size={18}
              className="text-[#62AAB5]"
            />
          )}
      </motion.div>
    </div>
  );
}

/*
=========================================================
TIME GROUP
=========================================================
*/

function TimeGroup({
  label,
  times,
  selectedTime,
  onSelect,
}: {
  label: string;
  times: string[];
  selectedTime: string;
  onSelect: (time: string) => void;
}) {
  return (
    <div className="mb-7">
      <p
        className="
          mb-3
          px-1
          text-[8px]
          uppercase
          tracking-[0.25em]
          text-white/20
        "
      >
        {label}
      </p>

      <div
        className="
          grid
          grid-cols-3
          gap-2
          sm:grid-cols-4
          md:grid-cols-5
          lg:grid-cols-6
        "
      >
        {times.map((time, index) => {
          const selected =
            selectedTime === time;

          return (
            <motion.button
              key={time}
              type="button"
              onClick={() =>
                onSelect(time)
              }
              whileTap={{
                scale: 0.94,
              }}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  Math.min(
                    index * 0.025,
                    0.2
                  ),
                duration: 0.3,
              }}
              className={`
                relative
                flex
                min-h-[52px]
                items-center
                justify-center
                rounded-2xl
                border
                text-xs
                transition-all
                duration-300

                ${
                  selected
                    ? `
                      border-[#62AAB5]/40
                      bg-[#62AAB5]/[0.14]
                      text-white
                    `
                    : `
                      border-white/[0.07]
                      bg-white/[0.025]
                      text-white/45
                      hover:border-white/15
                      hover:text-white/80
                    `
                }
              `}
            >
              {selected && (
                <motion.div
                  layoutId="selected-time"
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-[#62AAB5]/30
                  "
                />
              )}

              <span className="relative z-10">
                {time}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/*
=========================================================
GENERATE TIME SLOTS
=========================================================
*/

function generateTimeSlots(
  openingHour: number,
  closingHour: number,
  interval: number
) {
  const slots: string[] = [];

  for (
    let minutes =
      openingHour * 60;
    minutes <
    closingHour * 60;
    minutes += interval
  ) {
    const hour =
      Math.floor(minutes / 60);

    const minute =
      minutes % 60;

    const period =
      hour >= 12 ? "PM" : "AM";

    const displayHour =
      hour % 12 || 12;

    slots.push(
      `${displayHour}:${String(
        minute
      ).padStart(2, "0")} ${period}`
    );
  }

  return slots;
}

/*
=========================================================
GET HOUR
=========================================================
*/

function getHour(time: string) {
  const match =
    time.match(
      /^(\d+):\d+\s(AM|PM)$/
    );

  if (!match) return 0;

  let hour = Number(match[1]);

  const period = match[2];

  if (
    period === "PM" &&
    hour !== 12
  ) {
    hour += 12;
  }

  if (
    period === "AM" &&
    hour === 12
  ) {
    hour = 0;
  }

  return hour;
}

/*
=========================================================
DATE FORMAT
=========================================================
*/

function formatDateForBooking(
  date: Date
) {
  const year =
    date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/*
=========================================================
WEEKDAY
=========================================================
*/

function formatWeekday(
  date: Date
) {
  return new Intl.DateTimeFormat(
    "en-ZA",
    {
      weekday: "short",
    }
  ).format(date);
}

/*
=========================================================
MONTH
=========================================================
*/

function formatMonth(
  date: Date
) {
  return new Intl.DateTimeFormat(
    "en-ZA",
    {
      month: "short",
    }
  ).format(date);
}

/*
=========================================================
SELECTED DATE LABEL
=========================================================
*/

function formatSelectedDate(
  value: string
) {
  if (!value) {
    return "Choose a date";
  }

  /*
    Parse manually to avoid timezone
    shifting the displayed date.
  */

  const [
    year,
    month,
    day,
  ] = value
    .split("-")
    .map(Number);

  const date = new Date(
    year,
    month - 1,
    day
  );

  return new Intl.DateTimeFormat(
    "en-ZA",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
    }
  ).format(date);
}

/*
=========================================================
TODAY
=========================================================
*/

function isToday(date: Date) {
  const today = new Date();

  return (
    date.getFullYear() ===
      today.getFullYear() &&
    date.getMonth() ===
      today.getMonth() &&
    date.getDate() ===
      today.getDate()
  );
}