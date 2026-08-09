"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
  booking: {
    serviceId: string;
    date: string;
    time: string;
    fullName: string;
    phone: string;
    email: string;
  };
}

export default function BookingNavigation({
  currentStep,
  onNext,
  onPrevious,
  booking,
}: Props) {
  const canContinue =
    currentStep === 0
      ? Boolean(booking.serviceId)
      : currentStep === 1
      ? Boolean(
          booking.date &&
            booking.time
        )
      : Boolean(
          booking.fullName &&
            booking.phone &&
            booking.email
        );

  const isLastStep =
    currentStep === 2;

  return (
    <div
      className="
        fixed
        inset-x-0
        bottom-0
        z-50
        border-t
        border-black/[0.06]
        bg-white/90
        px-4
        pb-[max(12px,env(safe-area-inset-bottom))]
        pt-3
        backdrop-blur-2xl

        sm:px-8
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          gap-3
        "
      >
        {/* BACK */}

        <button
          type="button"
          onClick={onPrevious}
          disabled={currentStep === 0}
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-black/[0.07]
            bg-white
            text-neutral-400
            transition
            hover:text-neutral-900
            disabled:pointer-events-none
            disabled:opacity-30

            sm:w-auto
            sm:px-6
          "
        >
          <ArrowLeft size={17} />

          <span className="ml-2 hidden text-xs sm:block">
            Back
          </span>
        </button>

        {/* CONTINUE */}

        <motion.button
          type="button"
          disabled={!canContinue}
          onClick={onNext}
          whileTap={
            canContinue
              ? { scale: 0.98 }
              : undefined
          }
          className="
            flex
            h-14
            flex-1
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#171B1C]
            px-6
            text-sm
            font-medium
            text-white
            shadow-[0_10px_40px_rgba(0,0,0,.12)]
            transition-all
            duration-300

            disabled:cursor-not-allowed
            disabled:bg-neutral-200
            disabled:text-neutral-400

            sm:flex-none
            sm:min-w-[190px]
          "
        >
          {isLastStep ? (
            <>
              Confirm appointment

              <Check size={16} />
            </>
          ) : (
            <>
              Continue

              <ArrowRight size={17} />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}