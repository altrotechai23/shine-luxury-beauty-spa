"use client";

import { motion } from "framer-motion";
import type { Prisma } from "@prisma/client";

import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServiceCard";
import ServicesEmpty from "./ServicesEmpty";
import ServicesCTA from "./ServicesCTA";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface FeaturedServicesProps {
  services: Service[];
}

export default function FeaturedServices({
  services,
}: FeaturedServicesProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#081B1F]
        py-28
        lg:py-36
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-14rem]
            top-24

            h-[38rem]
            w-[38rem]

            rounded-full

            bg-[#62AAB5]/10

            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-16rem]
            bottom-0

            h-[34rem]
            w-[34rem]

            rounded-full

            bg-[#D7C0A0]/10

            blur-[180px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-7xl

          px-6
        "
      >
        <ServicesHeader />

        {services.length === 0 ? (
          <ServicesEmpty />
        ) : (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="
              mt-20

              grid

              gap-8

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </motion.div>
        )}

        <ServicesCTA />
      </div>

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-0
          left-0
          right-0

          h-40

          bg-gradient-to-b

          from-transparent

          to-[#081B1F]
        "
      />
    </section>
  );
}