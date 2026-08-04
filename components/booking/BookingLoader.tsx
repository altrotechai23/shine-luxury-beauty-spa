"use client";

import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const STEPS = [
  "Checking availability...",
  "Reserving your appointment...",
  "Saving your booking...",
  "Sending confirmation...",
  "Finalizing everything...",
];

export default function BookingLoader() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prev) => {
        if (prev >= STEPS.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-xl py-20">

      <div className="rounded-[32px] border bg-white p-10 shadow-xl">

        <div className="flex justify-center">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          >
            <Loader2
              size={56}
              className="text-[#6A4535]"
            />
          </motion.div>

        </div>

        <h2 className="mt-8 text-center text-3xl font-bold">
          Reserving Your Appointment
        </h2>

        <p className="mt-3 text-center text-neutral-500">
          Please do not close this page.
        </p>

        <div className="mt-10 space-y-5">

          {STEPS.map((step, index) => {

            const done = completed > index;

            return (
              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="flex items-center gap-4"
              >
                {done ? (
                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-neutral-300" />
                )}

                <span
                  className={
                    done
                      ? "font-medium"
                      : "text-neutral-400"
                  }
                >
                  {step}
                </span>

              </motion.div>
            );
          })}

        </div>

      </div>

    </div>
  );
}