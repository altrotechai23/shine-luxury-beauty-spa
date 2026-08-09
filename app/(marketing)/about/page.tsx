"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop";

const pillars = [
  {
    number: "01",
    title: "Personalised",
    description:
      "Every visit is shaped around you, your style and the experience you want to leave with.",
  },
  {
    number: "02",
    title: "Premium",
    description:
      "Thoughtful treatments, beautiful surroundings and attention to the smallest details.",
  },
  {
    number: "03",
    title: "Relaxed",
    description:
      "A calm environment designed to give you space to slow down, reset and enjoy your moment.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#061519] text-white">
      <Background />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[92svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={FALLBACK_IMAGE}
            alt="SHINE Luxury Beauty Spa"
            fill
            priority
            className="object-cover object-center opacity-45"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#061519]/55" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061519] via-[#061519]/35 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 sm:px-6 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 backdrop-blur-2xl">
              <Sparkles size={15} className="text-[#62AAB5]" />

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/70">
                About SHINE
              </span>
            </div>

            <h1 className="font-heading text-[clamp(4rem,14vw,9rem)] font-medium leading-[0.82] tracking-[-0.055em]">
              Beauty
              <br />
              <span className="text-[#D7C0A0]">with intention.</span>
            </h1>

            <div className="mt-9 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end">
              <p className="text-base leading-8 text-white/65 sm:text-lg">
                SHINE Luxury Beauty Spa is a space created around one simple
                idea — beauty should feel as good as it looks.
              </p>

              <Link
                href="/booking"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-6 py-4 text-sm text-white backdrop-blur-xl transition duration-500 hover:border-[#62AAB5]/40 hover:bg-[#62AAB5]/10"
              >
                Book your moment
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-6 hidden items-center gap-4 sm:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            Discover SHINE
          </span>

          <div className="h-px w-16 bg-white/20" />
        </motion.div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#62AAB5]">
                The philosophy
              </span>

              <h2 className="mt-7 font-heading text-5xl leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
                More than
                <br />
                <span className="text-[#D7C0A0]">a treatment.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="max-w-3xl"
            >
              <p className="text-xl leading-9 text-white/70 sm:text-2xl sm:leading-10">
                At SHINE, your appointment is more than time in a treatment
                room. It is a chance to pause, breathe and reconnect with
                yourself.
              </p>

              <p className="mt-7 text-base leading-8 text-white/45">
                From the atmosphere around you to the details of your
                treatment, everything is designed to create a feeling of
                comfort, confidence and effortless beauty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE / STATEMENT
      ===================================================== */}

      <section className="relative px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[40px] border border-white/10 sm:min-h-[720px] sm:rounded-[52px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1800&auto=format&fit=crop"
            alt="Luxury beauty experience at SHINE"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061519] via-[#061519]/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-14 lg:p-20">
            <div className="max-w-4xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#62AAB5]">
                Our approach
              </span>

              <h2 className="mt-6 font-heading text-4xl leading-tight tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Quiet luxury.
                <br />
                <span className="text-[#D7C0A0]">
                  Personal connection.
                </span>
              </h2>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          PILLARS
      ===================================================== */}

      <section className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-16 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#62AAB5]">
              The SHINE standard
            </span>

            <h2 className="mt-6 font-heading text-5xl leading-tight sm:text-6xl">
              Designed around
              <br />
              <span className="text-[#D7C0A0]">you.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[36px] border border-white/10 bg-white/10 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                className="group bg-[#081B1F]/90 p-8 transition duration-700 hover:bg-[#0B2429] sm:p-10 lg:p-12"
              >
                <span className="text-xs tracking-[0.3em] text-[#62AAB5]">
                  {pillar.number}
                </span>

                <h3 className="mt-20 font-heading text-3xl text-white sm:text-4xl">
                  {pillar.title}
                </h3>

                <p className="mt-5 leading-8 text-white/45">
                  {pillar.description}
                </p>

                <div className="mt-10 h-px w-12 bg-[#D7C0A0]/40 transition-all duration-700 group-hover:w-24" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPE TOWN
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-white/10">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex min-h-[520px] flex-col justify-center px-5 py-20 sm:px-6 lg:px-16 lg:py-28"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#62AAB5]/20 bg-[#62AAB5]/10">
              <MapPin size={21} className="text-[#62AAB5]" />
            </div>

            <span className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#62AAB5]">
              Find us in Cape Town
            </span>

            <h2 className="mt-6 font-heading text-5xl leading-[0.95] sm:text-6xl">
              Right in the
              <br />
              <span className="text-[#D7C0A0]">heart of the city.</span>
            </h2>

            <p className="mt-8 max-w-lg leading-8 text-white/50">
              Visit SHINE Luxury Beauty Spa at 108 Long Street, Cape Town
              City Centre — a location surrounded by the energy, creativity
              and character of Cape Town.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shine+Beauty+Spa+108+Long+St+Cape+Town"
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-white/80 transition duration-500 hover:border-[#62AAB5]/30 hover:bg-[#62AAB5]/10"
            >
              Open in Google Maps
              <ArrowRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <div className="relative min-h-[480px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1600&auto=format&fit=crop"
              alt="Beauty treatment"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#061519] via-transparent to-transparent lg:bg-gradient-to-r" />

            <div className="absolute bottom-8 right-8 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl">
              Cape Town · South Africa
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE CARD
      ===================================================== */}

      <section className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D7C0A0]/20 bg-[#D7C0A0]/10">
              <Star
                size={22}
                className="fill-[#D7C0A0] text-[#D7C0A0]"
              />
            </div>

            <span className="mt-8 block text-[10px] uppercase tracking-[0.4em] text-[#62AAB5]">
              The SHINE experience
            </span>

            <h2 className="mt-7 font-heading text-5xl leading-tight tracking-[-0.035em] sm:text-7xl">
              Come for the beauty.
              <br />
              <span className="text-[#D7C0A0]">
                Stay for the feeling.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg sm:leading-9">
              Whether you are preparing for a special occasion or simply
              taking time for yourself, SHINE is designed to make your visit
              feel effortless.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-7 py-4 text-sm text-white backdrop-blur-xl transition duration-500 hover:border-white/20 hover:bg-white/10"
              >
                Explore treatments
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D7C0A0] px-7 py-4 text-sm font-medium text-[#182124] transition duration-500 hover:bg-[#E6D4B9]"
              >
                <CalendarDays size={16} />
                Book your experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL BRAND STATEMENT
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-3xl text-white">
                SHINE
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/30">
                Luxury Beauty Spa · Cape Town
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/40">
              <MapPin size={15} />
              108 Long Street
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   BACKGROUND
============================================================ */

function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[#061519]" />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-[300px]
          top-[8%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#62AAB5]/10
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[350px]
          top-[35%]
          h-[750px]
          w-[750px]
          rounded-full
          bg-[#D7C0A0]/10
          blur-[190px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#061519_100%)] opacity-60" />
    </>
  );
}