"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2000&auto=format&fit=crop"
        alt="Luxury Beauty Spa"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b1c18]/80 via-[#2b1c18]/55 to-black/25" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl md:pt-20"
          >
            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-white backdrop-blur-md">
              Shine Luxury Beauty Spa
            </span>

            <h1 className="mt-8 font-heading text-6xl font-medium leading-[1.05] text-white md:text-8xl">
              The Art of
              <br />
              Looking
              <br />
              Beautiful
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85">
              Luxury hair, nails, skin treatments, lashes and beauty services
              designed to leave you feeling confident, refreshed and radiant.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-[#6A4535] px-8 py-4 font-medium text-white transition hover:bg-[#57382c]"
              >
                <CalendarDays size={20} />
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View Services
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Luxury badges */}
            <div className="mt-14 flex flex-wrap gap-6 text-white">
              <div>
                <p className="text-3xl font-semibold">5★</p>
                <p className="text-sm text-white/70">Rated Experience</p>
              </div>

              <div>
                <p className="text-3xl font-semibold">1000+</p>
                <p className="text-sm text-white/70">Happy Clients</p>
              </div>

              <div>
                <p className="text-3xl font-semibold">Luxury</p>
                <p className="text-sm text-white/70">Premium Treatments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-white"
      >
        <ChevronDown size={34} />
      </motion.div>
    </section>
  );
}