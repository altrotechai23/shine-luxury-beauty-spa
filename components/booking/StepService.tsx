"use client";

import { useMemo } from "react";
import type { Prisma } from "@prisma/client";
import { Check, Clock3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import type { BookingData } from "./BookingWizard";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  services: Service[];
  booking: BookingData;
  updateBooking: (
    values: Partial<BookingData>
  ) => void;
}

export default function StepService({
  services,
  booking,
  updateBooking,
}: Props) {
  /*
  =========================================================
  GROUP SERVICES BY CATEGORY
  =========================================================
  */

  const categories = useMemo(() => {
    const grouped = new Map<
      string,
      Service[]
    >();

    services.forEach((service) => {
      const categoryName =
        service.category?.name ||
        "Treatments";

      const existing =
        grouped.get(categoryName) || [];

      grouped.set(categoryName, [
        ...existing,
        service,
      ]);
    });

    return Array.from(grouped.entries());
  }, [services]);

  /*
  =========================================================
  SELECT SERVICE
  =========================================================
  */

  function selectService(serviceId: string) {
    updateBooking({
      serviceId,
    });
  }

  /*
  =========================================================
  EMPTY STATE
  =========================================================
  */

  if (!services.length) {
    return (
      <div
        className="
          flex
          min-h-[calc(100svh-220px)]
          flex-1
          items-center
          justify-center
        "
      >
        <div className="max-w-sm text-center">
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#62AAB5]/20
              bg-[#62AAB5]/10
            "
          >
            <Sparkles
              size={24}
              className="text-[#62AAB5]"
            />
          </div>

          <h2
            className="
              mt-2
              font-heading
              text-3xl
              text-white
            "
          >
            Treatments are resting.
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-white/40
            "
          >
            We don&apos;t currently have any
            treatments available for online
            booking.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* =================================================
          INTRO
      ================================================= */}

      <div className="max-w-4xl">
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
          <Sparkles size={12} />

          <span>
            Your experience
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.05,
            duration: 0.6,
          }}
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
          Choose your
          {" "}
          <span className="text-[#D7C0A0]">
            treatment.
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.12,
            duration: 0.5,
          }}
          className="
            mt-6
            max-w-md
            text-sm
            leading-7
            text-white/40
            sm:text-base
          "
        >
          Select the experience you&apos;d like
          to create at SHINE.
        </motion.p>
      </div>

      {/* =================================================
          CATEGORY GROUPS
      ================================================= */}

      <div
        className="
          mt-10
          flex
          flex-1
          flex-col
          gap-10
          sm:mt-14
        "
      >
        {categories.map(
          ([categoryName, categoryServices]) => (
            <section key={categoryName}>
              {/* Category label */}

              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                  px-1
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  {categoryName}
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/20
                  "
                >
                  Swipe
                </span>
              </div>

              {/* =================================================
                  HORIZONTAL SERVICE LIST
              ================================================= */}

              <div
                className="
                  -mx-5
                  flex
                  snap-x
                  snap-mandatory
                  gap-4
                  overflow-x-auto
                  px-5
                  pb-4
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
                {categoryServices.map(
                  (service, index) => {
                    const selected =
                      booking.serviceId ===
                      service.id;

                    return (
                      <motion.button
                        key={service.id}
                        type="button"
                        onClick={() =>
                          selectService(
                            service.id
                          )
                        }
                        initial={{
                          opacity: 0,
                          x: 25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.06,
                          duration: 0.45,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className={`
                          group
                          relative
                          min-w-[78vw]
                          snap-start
                          overflow-hidden
                          rounded-[30px]
                          border
                          p-6
                          text-left
                          transition-all
                          duration-500

                          sm:min-w-[340px]
                          sm:rounded-[34px]
                          sm:p-7

                          ${
                            selected
                              ? `
                                border-[#62AAB5]/40
                                bg-[#62AAB5]/[0.10]
                                shadow-[0_25px_80px_rgba(98,170,181,0.10)]
                              `
                              : `
                                border-white/[0.08]
                                bg-white/[0.035]
                                hover:border-white/15
                                hover:bg-white/[0.055]
                              `
                          }
                        `}
                      >
                        {/* Selected glow */}

                        {selected && (
                          <motion.div
                            layoutId="selected-service-glow"
                            className="
                              pointer-events-none
                              absolute
                              -right-20
                              -top-20
                              h-48
                              w-48
                              rounded-full
                              bg-[#62AAB5]/15
                              blur-[70px]
                            "
                          />
                        )}

                        {/* Top row */}

                        <div
                          className="
                            relative
                            z-10
                            flex
                            items-start
                            justify-between
                          "
                        >
                          <div
                            className={`
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              border
                              transition-all
                              duration-500

                              ${
                                selected
                                  ? "border-[#62AAB5]/30 bg-[#62AAB5]/15"
                                  : "border-white/10 bg-white/[0.04]"
                              }
                            `}
                          >
                            {selected ? (
                              <Check
                                size={17}
                                className="text-[#8CCBD3]"
                              />
                            ) : (
                              <Sparkles
                                size={15}
                                className="text-white/30"
                              />
                            )}
                          </div>

                          {/* Price */}

                          {service.price !=
                            null && (
                            <div
                              className="
                                rounded-full
                                border
                                border-white/10
                                bg-black/10
                                px-3
                                py-1.5
                                text-xs
                                text-white/50
                              "
                            >
                              {formatPrice(
                                service.price
                              )}
                            </div>
                          )}
                        </div>

                        {/* Service title */}

                        <div className="relative z-10 mt-12">
                          <h2
                            className={`
                              font-heading
                              text-3xl
                              leading-tight
                              tracking-[-0.025em]
                              transition-colors
                              duration-300

                              ${
                                selected
                                  ? "text-white"
                                  : "text-white/90"
                              }
                            `}
                          >
                            {service.title}
                          </h2>

                          {/* Description */}

                          {service.description && (
                            <p
                              className="
                                mt-4
                                line-clamp-3
                                text-sm
                                leading-6
                                text-white/35
                              "
                            >
                              {
                                service.description
                              }
                            </p>
                          )}
                        </div>

                        {/* Bottom */}

                        <div
                          className="
                            relative
                            z-10
                            mt-10
                            flex
                            items-center
                            justify-between
                          "
                        >
                          {/* Duration */}

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              text-[10px]
                              uppercase
                              tracking-[0.18em]
                              text-white/30
                            "
                          >
                            <Clock3
                              size={13}
                              className="text-[#62AAB5]/70"
                            />

                            {getDuration(
                              service
                            )}
                          </div>

                          {/* Selection state */}

                          <span
                            className={`
                              text-[9px]
                              uppercase
                              tracking-[0.2em]
                              transition-all
                              duration-300

                              ${
                                selected
                                  ? "text-[#8CCBD3]"
                                  : "text-white/20"
                              }
                            `}
                          >
                            {selected
                              ? "Selected"
                              : "Select"}
                          </span>
                        </div>

                        {/* Bottom accent */}

                        <motion.div
                          initial={false}
                          animate={{
                            scaleX: selected
                              ? 1
                              : 0,
                            opacity: selected
                              ? 1
                              : 0,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          className="
                            absolute
                            bottom-0
                            left-6
                            right-6
                            h-[2px]
                            origin-left
                            rounded-full
                            bg-[#62AAB5]
                          "
                        />
                      </motion.button>
                    );
                  }
                )}
              </div>
            </section>
          )
        )}
      </div>

      {/* =================================================
          MOBILE SWIPE HINT
      ================================================= */}

      <div
        className="
          mt-3
          flex
          items-center
          justify-center
          gap-2
          text-[8px]
          uppercase
          tracking-[0.25em]
          text-white/20
          sm:hidden
        "
      >
        <span>Swipe</span>

        <span className="text-[#62AAB5]/50">
          →
        </span>

        <span>to explore</span>
      </div>
    </div>
  );
}

/*
=========================================================
PRICE FORMATTER
=========================================================
*/

function formatPrice(
  price: number | string
) {
  const numericPrice =
    typeof price === "string"
      ? Number(price)
      : price;

  if (Number.isNaN(numericPrice)) {
    return String(price);
  }

  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

/*
=========================================================
DURATION
=========================================================
*/

function getDuration(
  service: Service
) {
  /*
   * Supports common Prisma naming variations.
   * If your model has duration, it will use it.
   */

  const serviceWithDuration =
    service as Service & {
      duration?: number | null;
      durationMinutes?: number | null;
    };

  const duration =
    serviceWithDuration.duration ??
    serviceWithDuration.durationMinutes;

  if (!duration) {
    return "By consultation";
  }

  if (duration < 60) {
    return `${duration} min`;
  }

  const hours = Math.floor(
    duration / 60
  );

  const minutes = duration % 60;

  if (!minutes) {
    return `${hours} ${
      hours === 1 ? "hour" : "hours"
    }`;
  }

  return `${hours}h ${minutes}m`;
}