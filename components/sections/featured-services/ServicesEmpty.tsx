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
        mt-20
        overflow-hidden

        rounded-[40px]

        border
        border-white/10

        bg-white/5

        p-12

        text-center

        backdrop-blur-3xl

        lg:p-20
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[520px]
          w-[520px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#62AAB5]/10

          blur-[170px]
        "
      />

      <div
        className="
          absolute

          right-[-120px]
          top-[-120px]

          h-72
          w-72

          rounded-full

          bg-[#D7C0A0]/10

          blur-[150px]
        "
      />

      <div className="relative z-10">

        {/* Icon */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
            mx-auto

            flex

            h-24
            w-24

            items-center
            justify-center

            rounded-full

            bg-gradient-to-br

            from-[#62AAB5]

            to-[#4F95A0]

            shadow-[0_20px_70px_rgba(98,170,181,.45)]
          "
        >
          <Sparkles
            size={34}
            className="text-white"
          />
        </motion.div>

        {/* Heading */}

        <h2
          className="
            mt-10

            font-heading

            text-4xl

            text-white

            md:text-5xl
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

            mt-8

            max-w-2xl

            text-lg

            leading-9

            text-white/70
          "
        >
          We are carefully preparing an exclusive collection of
          premium beauty treatments designed to deliver an
          exceptional luxury experience.

          <br />
          <br />

          In the meantime, we would love to help you personally.
        </p>

        {/* Buttons */}

        <div
          className="
            mt-12

            flex

            flex-wrap

            justify-center

            gap-5
          "
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: .96,
            }}
          >
            <Link
              href="/booking"
              className="
                inline-flex

                items-center

                gap-3

                rounded-full

                bg-[#62AAB5]

                px-8

                py-5

                font-semibold

                text-white

                shadow-[0_20px_60px_rgba(98,170,181,.35)]
              "
            >
              <CalendarDays size={20} />

              Book Consultation

              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: .97,
            }}
          >
            <Link
              href="/contact"
              className="
                inline-flex

                items-center

                rounded-full

                border

                border-white/15

                bg-white/10

                px-8

                py-5

                text-white

                backdrop-blur-xl

                transition

                hover:bg-white/15
              "
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Bottom Message */}

        <p
          className="
            mt-12

            text-sm

            uppercase

            tracking-[0.35em]

            text-white/45
          "
        >
          Luxury • Elegance • Confidence
        </p>

      </div>
    </motion.div>
  );
}