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

const FADE_UP_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CONTENT_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HeroContent({
  settings,
}: HeroContentProps) {
  const businessName =
    settings.businessName || "Shine Luxury Beauty Spa";

  const heroTitle =
    settings.heroTitle || "The Art of Looking Beautiful";

  const heroSubtitle =
    settings.heroSubtitle ||
    "Luxury hair, nails, skin treatments, lashes and beauty services designed to leave you feeling confident, refreshed and radiant.";

  const phone =
    settings.phone || "+27 00 000 0000";

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
      {/* ================================================================== */}
      {/* Premium Badge                                                      */}
      {/* ================================================================== */}

      <motion.div variants={FADE_UP_VARIANTS}>
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
            shadow-[0_16px_45px_rgba(0,0,0,.2)]
            backdrop-blur-xl
          "
        >
          {/* Static glow indicator instead of infinite Framer animation */}
          <span
            aria-hidden="true"
            className="
              relative
              h-2.5
              w-2.5
              rounded-full
              bg-[#62AAB5]
              shadow-[0_0_14px_rgba(98,170,181,.75)]
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

      {/* ================================================================== */}
      {/* Heading                                                             */}
      {/* ================================================================== */}

      <motion.h1
        variants={FADE_UP_VARIANTS}
        className="
          mt-10
          font-heading
          text-[56px]
          font-medium
          leading-[0.92]
          tracking-tight
          text-white
          sm:text-[70px]
          lg:text-[108px]
        "
      >
        {heroTitle}
      </motion.h1>

      {/* ================================================================== */}
      {/* Subtitle                                                            */}
      {/* ================================================================== */}

      <motion.p
        variants={FADE_UP_VARIANTS}
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

      {/* ================================================================== */}
      {/* CTA                                                                  */}
      {/* ================================================================== */}

      <motion.div
        variants={FADE_UP_VARIANTS}
        className="
          mt-14
          flex
          flex-wrap
          gap-5
        "
      >
        {/* Primary CTA */}

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
            shadow-[0_20px_60px_rgba(98,170,181,.3)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_25px_70px_rgba(98,170,181,.4)]
            active:scale-[0.98]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#62AAB5]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#081B1F]
          "
        >
          {/* CSS reflection — runs only on hover */}

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-24
              w-20
              rotate-12
              bg-white/20
              blur-lg
              transition-transform
              duration-700
              ease-out
              group-hover:translate-x-[340px]
            "
          />

          <CalendarDays
            size={20}
            aria-hidden="true"
          />

          <span className="relative z-10">
            Book Appointment
          </span>

          <ArrowRight
            size={18}
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

        {/* Secondary CTA */}

        <Link
          href="/services"
          className="
            group
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
            shadow-[0_12px_35px_rgba(0,0,0,.12)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/10
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white/40
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#081B1F]
          "
        >
          <span>
            View Services
          </span>

          <ArrowRight
            size={18}
            aria-hidden="true"
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </motion.div>

      {/* ================================================================== */}
      {/* Contact                                                             */}
      {/* ================================================================== */}

      <motion.div
        variants={FADE_UP_VARIANTS}
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
            shadow-[0_12px_35px_rgba(0,0,0,.12)]
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#62AAB5]
              to-[#4D8E99]
              shadow-[0_8px_25px_rgba(98,170,181,.25)]
            "
          >
            <Phone
              size={18}
              aria-hidden="true"
            />
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

            <p className="text-lg text-white">
              {phone}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ================================================================== */}
      {/* Statistics                                                          */}
      {/* ================================================================== */}

      <motion.div variants={FADE_UP_VARIANTS}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}