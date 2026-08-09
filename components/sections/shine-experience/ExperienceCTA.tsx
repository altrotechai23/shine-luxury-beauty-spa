"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Phone,
} from "lucide-react";

export default function ExperienceCTA() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        overflow-hidden

        rounded-[42px]

        border
        border-white/10

        bg-gradient-to-br

        from-white/10

        via-white/5

        to-transparent

        p-10

        backdrop-blur-3xl

        shadow-[0_35px_100px_rgba(0,0,0,.35)]

        lg:p-14
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute

          -right-28
          -top-28

          h-72
          w-72

          rounded-full

          bg-[#62AAB5]/20

          blur-[140px]
        "
      />

      <div
        className="
          absolute

          -left-24
          bottom-[-120px]

          h-72
          w-72

          rounded-full

          bg-[#D7C0A0]/15

          blur-[140px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10

          grid

          gap-10

          lg:grid-cols-[1fr_auto]

          lg:items-center
        "
      >
        {/* Left */}

        <div>
          <p
            className="
              text-sm

              uppercase

              tracking-[0.4em]

              text-[#62AAB5]
            "
          >
            Ready For Your Experience?
          </p>

          <h2
            className="
              mt-6

              font-heading

              text-4xl

              leading-tight

              text-white

              md:text-5xl
            "
          >
            Begin Your
            <span className="text-[#D7C0A0]">
              {" "}
              Luxury Beauty Journey
            </span>
          </h2>

          <p
            className="
              mt-6

              max-w-2xl

              text-lg

              leading-9

              text-white/70
            "
          >
            Discover treatments designed to restore confidence,
            enhance natural beauty and provide complete relaxation
            in a luxurious environment.
          </p>
        </div>

        {/* Buttons */}

        <div
          className="
            flex

            flex-col

            gap-5

            sm:flex-row

            lg:flex-col
          "
        >
          {/* Book */}

          <motion.div
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: .97,
            }}
          >
            <Link
              href="/booking"
              className="
                group

                inline-flex

                items-center

                justify-center

                gap-3

                rounded-full

                bg-[#62AAB5]

                px-9

                py-5

                font-semibold

                text-white

                shadow-[0_20px_60px_rgba(98,170,181,.35)]
              "
            >
              <CalendarDays size={20} />

              Book Appointment

              <ArrowRight
                size={18}
                className="
                  transition-transform

                  duration-300

                  group-hover:translate-x-2
                "
              />
            </Link>
          </motion.div>

          {/* Contact */}

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: .97,
            }}
          >
            <Link
              href="tel:+27788702149"
              className="
                inline-flex

                items-center

                justify-center

                gap-3

                rounded-full

                border

                border-white/10

                bg-white/10

                px-9

                py-5

                text-white

                backdrop-blur-xl

                transition

                hover:bg-white/15
              "
            >
              <Phone size={20} />

              Call Now
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}