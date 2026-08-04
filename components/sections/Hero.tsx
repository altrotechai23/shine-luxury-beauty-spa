"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Phone,
} from "lucide-react";

interface HeroProps {
  settings: {
    businessName: string;
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
    instagram: string | null;
    facebook: string | null;
    openingHours: string | null;
    heroTitle: string | null;
    heroSubtitle: string | null;
  };
}

export default function Hero({ settings } : HeroProps) {
  const businessName =
    settings?.businessName || "Shine Luxury Beauty Spa";

  const heroTitle =
    settings?.heroTitle || "The Art of Looking Beautiful";

  const heroSubtitle =
    settings?.heroSubtitle ||
    "Luxury hair, nails, skin treatments, lashes and beauty services designed to leave you feeling confident, refreshed and radiant.";

  const phone =
    settings?.phone || "+27 00 000 0000";

  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2000&auto=format&fit=crop"
        alt={businessName}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b1c18]/80 via-[#2b1c18]/55 to-black/25" />

      <div className="absolute inset-0 bg-black/10" />

      {/* Decorative Glow */}
      <div className="absolute -left-24 top-40 h-96 w-96 rounded-full bg-[#C89A73]/10 blur-3xl" />

      <div className="relative z-10 flex h-full items-center pt-20">
        <div className="mx-auto w-full max-w-7xl px-6 mt-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-3xl pt- md:pt-20"
          >
            {/* Business Name */}
            <span className="inline-flex items-center mt-10 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-white backdrop-blur-xl">
              {businessName}
            </span>

            {/* Hero Title */}
            <h1 className="mt-8 whitespace-pre-line font-heading text-6xl font-medium leading-[1.05] text-white md:text-8xl">
              {heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85">
              {heroSubtitle}
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-[#6A4535] px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#57382c]"
              >
                <CalendarDays size={20} />
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                View Services
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-xl">
              <Phone size={18} className="text-white" />

              <span className="text-white/90">
                {phone}
              </span>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8 text-white md:max-w-xl">
              <div>
                <p className="text-3xl font-semibold">5★</p>

                <p className="mt-2 text-sm text-white/70">
                  Rated Experience
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold">
                  1000+
                </p>

                <p className="mt-2 text-sm text-white/70">
                  Happy Clients
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold">
                  Luxury
                </p>

                <p className="mt-2 text-sm text-white/70">
                  Premium Treatments
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
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