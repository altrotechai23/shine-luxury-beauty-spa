"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function BookingSuccess() {

  useEffect(() => {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}, []);

  return (
    <div className="py-24 text-center">

      <CheckCircle2
        className="mx-auto text-green-600"
        size={90}
      />

      <h2 className="mt-8 text-4xl font-bold">
        Booking Confirmed
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-neutral-600">
        We have received your appointment request.
        A confirmation email will arrive shortly.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <Link
          href="/"
          className="rounded-full bg-[#6A4535] px-8 py-4 font-medium text-white"
        >
          Back Home
        </Link>

        <Link
          href="/services"
          className="rounded-full border px-8 py-4"
        >
          Book Another
        </Link>

      </div>

    </div>
  );
}