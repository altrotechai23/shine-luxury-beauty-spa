"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Clock3, Sparkles } from "lucide-react";
import type { Prisma } from "@prisma/client";
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

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

export default function StepService({
  services,
  booking,
  updateBooking,
}: Props) {
  return (
    <div className="space-y-10">

      <div className="text-center">

        <span className="rounded-full bg-[#6A4535]/10 px-4 py-2 text-sm font-medium text-[#6A4535]">
          Step One
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Choose Your Treatment
        </h2>

        <p className="mt-4 text-neutral-500">
          Select the luxury treatment you would d like to
          book.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {services.map((service) => {

          const selected =
            booking.serviceId === service.id;

          return (
            <motion.button
              key={service.id}
              type="button"
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                updateBooking({
                  serviceId: service.id,
                })
              }
              className={`group relative overflow-hidden rounded-[32px] border text-left transition-all ${
                selected
                  ? "border-[#6A4535] shadow-2xl ring-2 ring-[#6A4535]/20"
                  : "border-neutral-200 hover:border-[#6A4535]/40 hover:shadow-xl"
              }`}
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={
                    service.image ||
                    FALLBACK_IMAGE
                  }
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />

                {service.featured && (
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur-xl">

                    <Sparkles
                      size={15}
                      className="text-amber-500"
                    />

                    Featured

                  </div>
                )}

                {selected && (
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#6A4535] text-white shadow-xl"
                  >
                    <Check size={22} />
                  </motion.div>
                )}

              </div>

              {/* Content */}

              <div className="space-y-5 p-7">

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-wider text-[#6A4535]">
                      {service.category.name}
                    </p>

                  </div>

                  <div className="rounded-full bg-[#6A4535] px-4 py-2 text-sm font-semibold text-white">
                    R{service.price.toFixed(2)}
                  </div>

                </div>

                <p className="line-clamp-3 leading-7 text-neutral-600">
                  {service.description}
                </p>

                <div className="flex items-center justify-between border-t pt-5">

                  <div className="flex items-center gap-2 text-neutral-500">

                    <Clock3 size={18} />

                    {service.duration} mins

                  </div>

                  <div
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      selected
                        ? "bg-[#6A4535] text-white"
                        : "bg-neutral-100"
                    }`}
                  >
                    {selected
                      ? "Selected"
                      : "Select"}
                  </div>

                </div>

              </div>

            </motion.button>
          );
        })}

      </div>

    </div>
  );
}