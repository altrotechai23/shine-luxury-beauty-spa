"use client";

import { Check } from "lucide-react";

const steps = [
  "Treatment",
  "Date & time",
  "Your details",
];

interface Props {
  currentStep: number;
}

export default function BookingProgress({
  currentStep,
}: Props) {
  return (
    <div className="w-full">
      {/* Mobile */}

      <div className="flex items-center justify-between sm:hidden">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Booking
          </p>

          <p className="mt-1 text-sm font-medium text-[#07191C]">
            {steps[currentStep]}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`
                h-1.5 rounded-full transition-all duration-500
                ${
                  index === currentStep
                    ? "w-8 bg-[#62AAB5]"
                    : index < currentStep
                      ? "w-2 bg-[#62AAB5]/60"
                      : "w-2 bg-black/10"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Desktop */}

      <div className="hidden items-center justify-center sm:flex">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step}
              className="flex items-center"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    text-xs
                    font-medium
                    transition-all
                    ${
                      completed
                        ? "bg-[#62AAB5] text-white"
                        : active
                          ? "border border-[#62AAB5] bg-[#62AAB5]/10 text-[#62AAB5]"
                          : "bg-black/[0.04] text-neutral-400"
                    }
                  `}
                >
                  {completed ? (
                    <Check size={15} />
                  ) : (
                    index + 1
                  )}
                </div>

                <span
                  className={`
                    text-sm
                    ${
                      active
                        ? "font-medium text-[#07191C]"
                        : "text-neutral-400"
                    }
                  `}
                >
                  {step}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div className="mx-6 h-px w-12 bg-black/10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}