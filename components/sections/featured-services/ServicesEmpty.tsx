"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export default function ServicesEmpty() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        relative
        mt-16
        overflow-hidden
        rounded-[32px]

        border
        border-white/10

        bg-[#10282C]

        px-7
        py-12

        text-center

        sm:px-12
        sm:py-16
      "
    >
      {/* Accent */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#62AAB5]/10
          blur-[110px]
        "
      />

      <div className="relative z-10">
        {/* Icon */}

        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full

            border
            border-[#62AAB5]/20

            bg-[#62AAB5]/10
          "
        >
          <Sparkles
            size={30}
            className="text-[#62AAB5]"
          />
        </div>

        {/* Heading */}

        <h2
          className="
            mt-8
            font-heading
            text-4xl
            leading-tight
            text-white

            sm:text-5xl
          "
        >
          Luxury Treatments

          <br />

          <span className="text-[#D7C0A0]">
            Coming Soon
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-white/55

            sm:text-base
            sm:leading-8
          "
        >
          We are carefully preparing an exclusive collection
          of premium beauty treatments designed to deliver an
          exceptional luxury experience.
        </p>

        {/* Actions */}

        <div
          className="
            mt-8
            flex
            flex-col
            justify-center
            gap-3

            sm:flex-row
          "
        >
          <Link
            href="/booking"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#62AAB5]
              px-7
              font-semibold
              text-white

              transition
              active:scale-[0.97]
            "
          >
            <CalendarDays size={18} />
            Book Consultation
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-7
              text-sm
              font-medium
              text-white

              transition
              hover:bg-white/10
              active:scale-[0.97]
            "
          >
            Contact Us
          </Link>
        </div>

        <p
          className="
            mt-8
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/25
          "
        >
          Luxury • Elegance • Confidence
        </p>
      </div>
    </motion.div>
  );
}