"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function SpecialOffer() {
  return (
    <section className="bg-[#2F201B] py-24 px-4">
      <div className="mx-auto max-w-6xl rounded-[40px] bg-[#6A4535] px-10 py-16 text-center text-white">

        <p className="uppercase tracking-[0.35em] text-sm text-[#E8D8C6]">
          Grand Opening Offer
        </p>

        <h2 className="mt-5 font-heading text-5xl">
          Get 15% OFF
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Celebrate with us and enjoy exclusive savings on selected
          beauty treatments for a limited time.
        </p>

        <Link
          href="/booking"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#6A4535]"
        >
          <CalendarDays size={18} />

          Claim Offer
        </Link>

      </div>
    </section>
  );
}