"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Phone,
} from "lucide-react";

import HeroStats from "./HeroStats";

interface HeroContentProps {
  settings: {
    businessName: string;
    phone: string;
    heroTitle: string | null;
    heroSubtitle: string | null;
  };
}

export default function HeroContent({
  settings,
}: HeroContentProps) {
  const businessName =
    settings.businessName ||
    "Shine Luxury Beauty Spa";

  const heroTitle =
    settings.heroTitle ||
    "The Art of Looking Beautiful";

  const heroSubtitle =
    settings.heroSubtitle ||
    "Luxury hair, nails, skin treatments, lashes and beauty services designed to leave you feeling confident, refreshed and radiant.";

  const phone =
    settings.phone ||
    "+27 00 000 0000";

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.16,
          },
        },
      }}
      className="
        relative
        z-20

        max-w-3xl
      "
    >
      {/* Premium Badge */}

      <motion.div variants={fadeUp}>
        <div
          className="
            inline-flex
            items-center
            gap-3

            rounded-full

            border
            border-white/10

            bg-white/[0.07]

            px-6
            py-3

            backdrop-blur-3xl

            shadow-[0_20px_60px_rgba(0,0,0,.25)]
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [.5, 1, .5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-[#62AAB5]
            "
          />

          <span
            className="
              text-[11px]

              uppercase

              tracking-[0.45em]

              text-white/90
            "
          >
            {businessName}
          </span>
        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={fadeUp}
        className="
          mt-10

          font-heading

          font-medium

          leading-[0.92]

          tracking-tight

          text-white

          text-[56px]

          sm:text-[70px]

          lg:text-[108px]
        "
      >
        {heroTitle}
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        variants={fadeUp}
        className="
          mt-8

          max-w-2xl

          text-lg

          leading-9

          text-white/75

          lg:text-xl
        "
      >
        {heroSubtitle}
      </motion.p>

      {/* CTA */}

      <motion.div
        variants={fadeUp}
        className="
          mt-14

          flex

          flex-wrap

          gap-5
        "
      >
        <motion.div
          whileHover={{
            y: -4,
            scale: 1.04,
          }}
          whileTap={{
            scale: .97,
          }}
        >
          <Link
            href="/booking"
            className="
              group

              relative

              inline-flex

              items-center

              gap-3

              overflow-hidden

              rounded-full

              bg-gradient-to-r

              from-[#62AAB5]

              to-[#4D8E99]

              px-9

              py-5

              font-semibold

              text-white

              shadow-[0_25px_80px_rgba(98,170,181,.35)]
            "
          >
            <motion.div
              animate={{
                x: [-120, 250],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="
                absolute
                inset-y-0

                w-24

                rotate-12

                bg-white/20

                blur-xl
              "
            />

            <CalendarDays size={20} />

            <span className="relative z-10">
              Book Appointment
            </span>

            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
        >
          <Link
            href="/services"
            className="
              inline-flex

              items-center

              gap-3

              rounded-full

              border

              border-white/10

              bg-white/[0.07]

              px-9

              py-5

              text-white

              backdrop-blur-3xl

              transition-all

              hover:bg-white/10
            "
          >
            View Services

            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Contact */}

      <motion.div
        variants={fadeUp}
        className="mt-12"
      >
        <div
          className="
            inline-flex

            items-center

            gap-4

            rounded-full

            border

            border-white/10

            bg-white/[0.07]

            px-6

            py-4

            backdrop-blur-3xl
          "
        >
          <div
            className="
              flex

              h-12

              w-12

              items-center

              justify-center

              rounded-full

              bg-gradient-to-br

              from-[#62AAB5]

              to-[#4D8E99]
            "
          >
            <Phone size={18} />
          </div>

          <div>
            <p
              className="
                text-[11px]

                uppercase

                tracking-[0.35em]

                text-white/60
              "
            >
              Call Us
            </p>

            <p
              className="
                text-lg

                text-white
              "
            >
              {phone}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Statistics */}

      <motion.div variants={fadeUp}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}