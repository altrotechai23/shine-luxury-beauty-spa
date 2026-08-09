"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#061519] text-white">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(98,170,181,.13),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(215,192,160,.08),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(98,170,181,.08),transparent_35%)]
        "
      />

      {/* Animated Glow */}

      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [20, -20, 20],
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[550px]
          w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#62AAB5]/20
          blur-[180px]
        "
      />

      {/* Futuristic Grid */}

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

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_.7fr_.8fr_.9fr] lg:gap-12">
          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Link
              href="/"
              className="group inline-block"
            >
              <div className="flex items-center gap-3">
                {/* Logo Icon */}

                <Image
                  src="/logo_instagram.jpg"
                  alt=""
                  width={30}
                  height={30}
                  className="
                    h-[50px]
                    w-[50px]
                    rounded-[5px]
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div>
                  <span
                    className="
                      block
                      font-heading
                      text-4xl
                      tracking-[0.08em]
                      text-white
                    "
                  >
                    SHINE
                  </span>

                  <span
                    className="
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.38em]
                      text-[#D7C0A0]
                    "
                  >
                    Luxury Beauty Spa
                  </span>
                </div>
              </div>
            </Link>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-md
                text-base
                leading-8
                text-white/50
              "
            >
              A premium beauty destination in the heart
              of Cape Town, created for unforgettable
              treatments, personalised care and moments
              that make you shine.
            </p>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="mt-8 flex flex-wrap gap-3">
              {/* Instagram */}

              <a
                href="https://www.instagram.com/theshineluxury/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SHINE Luxury Beauty Spa on Instagram"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-3
                  text-sm
                  text-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#D7C0A0]/30
                  hover:bg-[#D7C0A0]/10
                  hover:text-white
                "
              >
                {/* Instagram Mark */}

                <span
                  className="
                    relative
                    flex
                    h-[17px]
                    w-[17px]
                    items-center
                    justify-center
                    rounded-[5px]
                    border
                    border-[#D7C0A0]
                  "
                >
                  <span
                    className="
                      h-[7px]
                      w-[7px]
                      rounded-full
                      border
                      border-[#D7C0A0]
                    "
                  />

                  <span
                    className="
                      absolute
                      right-[2px]
                      top-[2px]
                      h-[3px]
                      w-[3px]
                      rounded-full
                      bg-[#D7C0A0]
                    "
                  />
                </span>

                Instagram

                <ArrowUpRight
                  size={14}
                  className="
                    opacity-40
                    transition
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* Google Reviews */}

              <a
                href="https://share.google/LhaivmE8XzTqwHTku"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read SHINE Luxury Beauty Spa Google Reviews"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-3
                  text-sm
                  text-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#62AAB5]/30
                  hover:bg-[#62AAB5]/10
                  hover:text-white
                "
              >
                <Star
                  size={17}
                  className="
                    fill-[#D7C0A0]
                    text-[#D7C0A0]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                Google Reviews

                <ArrowUpRight
                  size={14}
                  className="
                    opacity-40
                    transition
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <p
              className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#D7C0A0]
              "
            >
              Explore
            </p>

            <h3 className="mb-6 font-heading text-2xl">
              Quick Links
            </h3>

            <nav className="flex flex-col">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.06]
                    py-3
                    text-sm
                    text-white/50
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={15}
                    className="
                      opacity-0
                      transition
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              BUSINESS HOURS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <p
              className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#D7C0A0]
              "
            >
              Visit Us
            </p>

            <h3 className="mb-6 font-heading text-2xl">
              Business Hours
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Clock3
                  size={17}
                  className="mt-0.5 shrink-0 text-[#62AAB5]"
                />

                <div className="space-y-1 text-sm">
                  <p className="text-white/70">
                    Monday – Friday
                  </p>

                  <p className="text-white/40">
                    08:00 – 18:00
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3
                  size={17}
                  className="mt-0.5 shrink-0 text-[#62AAB5]"
                />

                <div className="space-y-1 text-sm">
                  <p className="text-white/70">
                    Saturday
                  </p>

                  <p className="text-white/40">
                    08:00 – 17:00
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3
                  size={17}
                  className="mt-0.5 shrink-0 text-[#62AAB5]"
                />

                <div className="space-y-1 text-sm">
                  <p className="text-white/70">
                    Sunday
                  </p>

                  <p className="text-white/40">
                    Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            <p
              className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#D7C0A0]
              "
            >
              Connect
            </p>

            <h3 className="mb-6 font-heading text-2xl">
              Contact
            </h3>

            <div className="space-y-5">
              {/* Phone */}

              <a
                href="tel:+27788702149"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/50
                  transition
                  hover:text-white
                "
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#62AAB5]"
                />

                <span>
                  +27 78 870 2149
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:info@shinebeautyspa.co.za"
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/50
                  transition
                  hover:text-white
                "
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#62AAB5]"
                />

                <span className="break-all">
                  info@shinebeautyspa.co.za
                </span>
              </a>

              {/* Address */}

              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#62AAB5]"
                />

                <span>
                  108 Long St,
                  <br />
                  Cape Town City Centre,
                  <br />
                  Cape Town, 8001
                </span>
              </div>
            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/27788702149"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#62AAB5]/20
                bg-[#62AAB5]/10
                px-5
                py-3
                text-sm
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#62AAB5]/40
                hover:bg-[#62AAB5]/20
              "
            >
              <MessageCircle
                size={17}
                className="text-[#62AAB5]"
              />

              Chat on WhatsApp

              <ArrowUpRight
                size={14}
                className="
                  transition
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            GIANT SHINE SIGNATURE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none
            relative
            mt-24
            overflow-hidden
            border-y
            border-white/[0.06]
            py-8
            sm:mt-28
          "
        >
          <div
            className="
              text-center
              font-heading
              text-[22vw]
              font-semibold
              leading-[0.7]
              tracking-[-0.08em]
              text-white/[0.025]
              sm:text-[18vw]
              lg:text-[15vw]
            "
          >
            SHINE
          </div>

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#061519]
              via-transparent
              to-[#061519]
            "
          />
        </motion.div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-8
            text-xs
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {year} SHINE Luxury Beauty Spa.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span>Cape Town</span>

            <span className="h-1 w-1 rounded-full bg-[#62AAB5]" />

            <span>South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}