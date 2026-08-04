"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BookingData } from "./BookingWizard";

interface Props {
  currentStep: number;
  booking: BookingData;
  onNext: () => void;
  onPrevious: () => void;
}

export default function BookingNavigation({
  currentStep,
  booking,
  onNext,
  onPrevious,
}: Props) {
  const isLastStep = currentStep === 2;

  const canContinue =
    (currentStep === 0 && booking.serviceId !== "") ||
    (currentStep === 1 &&
      booking.date !== "" &&
      booking.time !== "") ||
    currentStep === 2;

  return (
    <motion.div
      layout
      className="sticky bottom-0 z-40 mt-10 border-t bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <button
          type="button"
          onClick={onPrevious}
          disabled={currentStep === 0}
          className="inline-flex h-12 items-center gap-2 rounded-full border border-neutral-300 px-6 font-medium transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={18} />
          Previous
        </button>

        <div className="text-center hidden md:block">
          <p className="text-sm text-neutral-500">
            Step {currentStep + 1} of 3
          </p>
        </div>

       {!isLastStep && (
            <button
                type="button"
                onClick={onNext}
                disabled={!canContinue}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#6A4535] px-8 font-semibold text-white transition hover:bg-[#593a2d] disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
                Next
                <ArrowRight size={18} />
            </button>
            )}

      </div>
    </motion.div>
  );
}