"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  currentStep: number;
  onBack: () => void;
}

const steps = [
  "Treatment",
  "Date & time",
  "Your details",
];

export default function BookingHeader({
  currentStep,
  onBack,
}: Props) {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        flex
        h-[72px]
        w-full
        items-center
        justify-between
        border-b
        border-white/[0.06]
        bg-[#061519]/80
        px-5
        backdrop-blur-2xl
        sm:px-8
      "
    >
      {/* =================================================
          BACK
      ================================================= */}

      <button
        type="button"
        onClick={onBack}
        aria-label={
          currentStep === 0
            ? "Back to SHINE"
            : "Previous step"
        }
        className="
          group
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-3
          py-2
          text-white/60
          transition-all
          duration-300
          hover:border-white/20
          hover:bg-white/[0.08]
          hover:text-white
          active:scale-95
        "
      >
        <ArrowLeft
          size={16}
          strokeWidth={1.7}
          className="
            transition-transform
            duration-300
            group-hover:-translate-x-0.5
          "
        />

        <span className="hidden text-[10px] uppercase tracking-[0.22em] sm:block">
          {currentStep === 0 ? "Back" : "Previous"}
        </span>
      </button>

      {/* =================================================
          CENTER BRAND
      ================================================= */}

      <Link
        href="/"
        aria-label="SHINE Luxury Beauty Spa"
        className="
          absolute
          left-1/2
          -translate-x-1/2
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center"
        >
          <div
            className="
              font-heading
              text-lg
              tracking-[0.08em]
              text-white
            "
          >
            SHINE
          </div>

          <div
            className="
              mt-0.5
              text-[7px]
              uppercase
              tracking-[0.38em]
              text-[#D7C0A0]/60
            "
          >
            Luxury Beauty Spa
          </div>
        </motion.div>
      </Link>

      {/* =================================================
          STEP INFORMATION
      ================================================= */}

      <div className="flex items-center gap-3">
        {/* Desktop step name */}

        <div className="hidden text-right sm:block">
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Booking
          </p>

          <p
            className="
              mt-1
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/60
            "
          >
            {steps[currentStep]}
          </p>
        </div>

        {/* Mobile step counter */}

        <div
          className="
            flex
            h-9
            min-w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#62AAB5]/20
            bg-[#62AAB5]/[0.07]
            px-2.5
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.12em]
              text-[#8CCBD3]
            "
          >
            {String(currentStep + 1).padStart(2, "0")}
            <span className="mx-1 text-white/20">
              /
            </span>
            <span className="text-white/30">
              03
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}