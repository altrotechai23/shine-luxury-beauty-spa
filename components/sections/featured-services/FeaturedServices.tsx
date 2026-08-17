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
        bg-[#0f4c4f]
        opacity-80
        py-24
        lg:py-32
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          Keep these static — no continuous animation.
      ===================================================== */}

      <div  aria-hidden="true"  className="pointer-events-none  absolute  inset-0  overflow-hidden">
        <div
          className="absolute  -left-56  top-20  h-[34rem]  w-[34rem]  rounded-full  bg-[#62AAB5]/10  blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-56
            bottom-0
            h-[32rem]
            w-[32rem]
            rounded-full
            bg-[#D7C0A0]/8
            blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}

        <div className="px-6">
          <ServicesHeader />
        </div>

        {services.length === 0 ? (
          <div className="px-6">
            <ServicesEmpty />
          </div>
        ) : (
          <>
            {/* =================================================
                MOBILE / DESKTOP CAROUSEL
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                mt-16
                overflow-hidden
                lg:mt-20
              "
            >
              <div
                className="
                  flex
                  snap-x
                  snap-mandatory
                  gap-5
                  overflow-x-auto
                  overscroll-x-contain
                  px-6
                  pb-8

                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden

                  md:gap-6
                  lg:px-10
                  xl:px-16
                "
              >
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    priority={index === 0}
                  />
                ))}

                {/* End spacing */}
                <div
                  aria-hidden="true"
                  className="
                    min-w-[1px]
                    shrink-0
                    md:min-w-4
                  "
                />
              </div>

              {/* =================================================
                  SWIPE INDICATOR
              ================================================= */}

              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                "
              >
                <div
                  className="
                    h-px
                    w-10
                    bg-gradient-to-r
                    from-transparent
                    to-[#62AAB5]/60
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                  "
                >
                  Swipe to explore
                </span>

                <div
                  className="
                    h-px
                    w-10
                    bg-gradient-to-l
                    from-transparent
                    to-[#62AAB5]/60
                  "
                />
              </div>
            </motion.div>
          </>
        )}

        <ServicesCTA />
      </div>

      {/* =====================================================
          SECTION BOTTOM FADE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-b
          from-transparent
          to-[#081B1F]
        "
      />
    </section>
  );
}