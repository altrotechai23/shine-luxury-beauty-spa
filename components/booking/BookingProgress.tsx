"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Props {
  currentStep: number;
}

const STEPS = [
  {
    title: "Treatment",
    description: "Choose Service",
  },
  {
    title: "Schedule",
    description: "Date & Time",
  },
  {
    title: "Details",
    description: "Your Information",
  },
];

export default function BookingProgress({
  currentStep,
}: Props) {
  return (
    <div className="mb-12">

      {/* Desktop */}

      <div className="hidden md:flex items-center justify-between">

        {STEPS.map((step, index) => {

          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step.title}
              className="relative flex flex-1 items-center"
            >
              {/* Line */}

              {index !== STEPS.length - 1 && (
                <div className="absolute left-12 right-0 top-5 h-[3px] bg-neutral-200">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: completed
                        ? "100%"
                        : "0%",
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="h-full bg-[#6A4535]"
                  />

                </div>
              )}

              <div className="relative z-10 flex flex-col">

                <motion.div
                  animate={{
                    scale: active ? 1.08 : 1,
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                    completed
                      ? "border-[#6A4535] bg-[#6A4535] text-white"
                      : active
                      ? "border-[#6A4535] bg-white text-[#6A4535]"
                      : "border-neutral-300 bg-white text-neutral-400"
                  }`}
                >
                  {completed ? (
                    <Check size={18} />
                  ) : (
                    index + 1
                  )}
                </motion.div>

                <h3 className="mt-4 font-semibold">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-500">
                  {step.description}
                </p>

              </div>

            </div>
          );
        })}
      </div>

      {/* Mobile */}

      <div className="md:hidden">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm text-neutral-500">
            Step {currentStep + 1} of {STEPS.length}
          </span>

          <span className="font-semibold">
            {STEPS[currentStep].title}
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-neutral-200">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${
                ((currentStep + 1) /
                  STEPS.length) *
                100
              }%`,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full rounded-full bg-[#6A4535]"
          />

        </div>

      </div>

    </div>
  );
}