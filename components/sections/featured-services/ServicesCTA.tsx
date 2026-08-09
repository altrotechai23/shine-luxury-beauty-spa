"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesCTA() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
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
        mt-24
        overflow-hidden

        rounded-[40px]

        border
        border-white/10

        bg-white/5

        p-10

        backdrop-blur-3xl

        lg:p-16
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute

          -left-24
          top-0

          h-72
          w-72

          rounded-full

          bg-[#62AAB5]/10

          blur-[120px]
        "
      />

      <div
        className="
          absolute

          right-[-120px]
          bottom-[-120px]

          h-72
          w-72

          rounded-full

          bg-[#D7C0A0]/10

          blur-[120px]
        "
      />

      <div className="relative z-10">

        {/* Badge */}

        <div
          className="
            inline-flex

            items-center

            gap-3

            rounded-full

            border

            border-white/10

            bg-white/10

            px-5

            py-3

            backdrop-blur-xl
          "
        >
          <Sparkles
            size={16}
            className="text-[#62AAB5]"
          />

          <span
            className="
              text-xs

              uppercase

              tracking-[0.35em]

              text-white/80
            "
          >
            Premium Collection
          </span>
        </div>

        {/* Heading */}

        <h2
          className="
            mt-8

            max-w-3xl

            font-heading

            text-4xl

            font-medium

            leading-tight

            text-white

            md:text-5xl
          "
        >
          Discover Every Luxury Treatment
        </h2>

        <p
          className="
            mt-6

            max-w-2xl

            text-lg

            leading-8

            text-white/70
          "
        >
          Browse our complete collection of luxury beauty
          experiences, each carefully designed to enhance your
          confidence and reveal your natural beauty.
        </p>

        {/* Buttons */}

        <div
          className="
            mt-10

            flex

            flex-wrap

            gap-4
          "
        >
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
              href="/services"
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
              Explore All Treatments

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
              href="/booking"
              className="
                inline-flex

                items-center

                gap-3

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
              Book Consultation
            </Link>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}