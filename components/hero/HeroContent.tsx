"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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

/*
|--------------------------------------------------------------------------
| Animation Variants
|--------------------------------------------------------------------------
|
| Explicitly typed as Variants so Framer Motion understands the easing
| curve correctly and TypeScript does not widen the cubic-bezier array
| into number[].
|
*/

const FADE_UP_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CONTENT_VARIANTS: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={CONTENT_VARIANTS}
      className="
        relative
        z-20
        max-w-3xl
      "
    >
      {/* ================================================================
          Premium Brand Badge
      ================================================================= */}

      <motion.div variants={FADE_UP_VARIANTS}>
        <div
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-3
            shadow-[0_18px_50px_rgba(0,0,0,0.18)]
            backdrop-blur-2xl

            sm:px-6
          "
        >
          {/* Brand indicator */}

          <span
            aria-hidden="true"
            className="
              relative
              h-2.5
              w-2.5
              shrink-0
              rounded-full
              bg-[#728558]
              shadow-[0_0_18px_rgba(114,133,88,0.85)]
            "
          />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.38em]
              text-white/90

              sm:text-[11px]
              sm:tracking-[0.45em]
            "
          >
            {businessName}
          </span>
        </div>
      </motion.div>

      {/* ================================================================
          Main Heading
      ================================================================= */}

      <motion.h1
        variants={FADE_UP_VARIANTS}
        className="
          mt-8

          max-w-3xl

          font-heading
          text-[54px]
          font-medium
          leading-[0.91]
          tracking-[-0.035em]
          text-white

          sm:mt-10
          sm:text-[70px]

          md:text-[82px]

          lg:text-[104px]
          xl:text-[112px]
        "
      >
        {heroTitle}
      </motion.h1>

      {/* ================================================================
          Subtitle
      ================================================================= */}

      <motion.p
        variants={FADE_UP_VARIANTS}
        className="
          mt-7
          max-w-2xl

          text-[16px]
          leading-7
          text-white/78

          sm:text-lg
          sm:leading-8

          lg:text-xl
          lg:leading-9
        "
      >
        {heroSubtitle}
      </motion.p>

      {/* ================================================================
          CTA Buttons
      ================================================================= */}

      <motion.div
        variants={FADE_UP_VARIANTS}
        className="
          mt-10
          flex
          flex-col
          gap-3

          sm:mt-12
          sm:flex-row
          sm:flex-wrap
          sm:gap-4
        "
      >
        {/* ============================================================
            Primary CTA
        ============================================================= */}

        <Link
          href="/booking"
          className="
            group
            relative
            inline-flex
            min-h-[58px]
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-full

            bg-gradient-to-r
            from-[#728558]
            to-[#58a6ad]

            px-7
            py-4

            font-medium
            text-white

            shadow-[0_18px_50px_rgba(88,166,173,0.28)]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-1
            hover:shadow-[0_24px_65px_rgba(88,166,173,0.38)]

            active:scale-[0.97]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#58a6ad]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#728558]
          "
        >
          {/* Hover reflection */}

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-24
              w-20
              rotate-12
              bg-white/25
              blur-lg

              transition-transform
              duration-700
              ease-out

              group-hover:translate-x-[360px]
            "
          />

          <CalendarDays
            size={19}
            strokeWidth={1.8}
            aria-hidden="true"
            className="relative z-10"
          />

          <span className="relative z-10">
            Book Appointment
          </span>

          <ArrowRight
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
            className="
              relative
              z-10

              transition-transform
              duration-300

              group-hover:translate-x-1.5
            "
          />
        </Link>

        {/* ============================================================
            Secondary CTA
        ============================================================= */}

        <Link
          href="/services"
          className="
            group
            inline-flex
            min-h-[58px]
            items-center
            justify-center
            gap-3
            rounded-full

            border
            border-white/25

            bg-white/10

            px-7
            py-4

            font-medium
            text-white

            shadow-[0_12px_40px_rgba(0,0,0,0.14)]

            backdrop-blur-2xl

            transition-all
            duration-300
            ease-out

            hover:-translate-y-1
            hover:border-white/35
            hover:bg-white/15

            active:scale-[0.97]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white/50
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#728558]
          "
        >
          <span>
            View Services
          </span>

          <ArrowRight
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </Link>
      </motion.div>

      {/* ================================================================
          Contact Pill
      ================================================================= */}

      <motion.div
        variants={FADE_UP_VARIANTS}
        className="mt-9 sm:mt-11"
      >
        <a
          href={`tel:${phone}`}
          className="
            group
            inline-flex
            max-w-full
            items-center
            gap-3

            rounded-[22px]

            border
            border-white/15

            bg-white/10

            px-4
            py-3.5

            shadow-[0_15px_45px_rgba(0,0,0,0.14)]

            backdrop-blur-2xl

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-white/15

            sm:gap-4
            sm:rounded-full
            sm:px-5
            sm:py-3
          "
        >
          {/* Phone icon */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full

              bg-gradient-to-br
              from-[#728558]
              to-[#58a6ad]

              text-white

              shadow-[0_8px_25px_rgba(88,166,173,0.25)]

              transition-transform
              duration-300

              group-hover:scale-105
            "
          >
            <Phone
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          {/* Contact information */}

          <div className="min-w-0">
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/55

                sm:text-[10px]
              "
            >
              Call Us
            </p>

            <p
              className="
                truncate
                text-sm
                font-medium
                text-white

                sm:text-base
              "
            >
              {phone}
            </p>
          </div>
        </a>
      </motion.div>

      {/* ================================================================
          Hero Statistics
      ================================================================= */}

      <motion.div variants={FADE_UP_VARIANTS}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}