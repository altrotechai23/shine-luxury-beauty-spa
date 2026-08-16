"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  X,
} from "lucide-react";

import Logo from "./Logo";
import BookButton from "./BookButton";
import { navigation } from "./NavigationData";

import {
  drawerReveal,
  staggerContainer,
  fadeUp,
} from "@/lib/motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial="closed"
          animate="open"
          exit="closed"
          variants={drawerReveal}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            
            bg-gradient-to-br
            from-[#101A16]
            via-[#26352B]
            to-[#58A6AD]

            text-white
          "
        >
          {/* =====================================================
              AMBIENT BACKGROUND
          ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden

            "
          >
            {/* Primary glow */}

            <div
              className="
                absolute
                -left-40
                -top-40
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#728558]/25
                blur-[120px]
              "
            />

            {/* Secondary glow */}

            <div
              className="
                absolute
                -right-40
                top-[25%]
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#58A6AD]/20
                blur-[130px]
              "
            />

            {/* Bottom white glow */}

            <div
              className="
                absolute
                bottom-[-220px]
                left-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                rounded-full
                bg-white/5
                blur-[120px]
              "
            />

            {/* Subtle overlay */}

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_15%,rgba(10,18,15,.45)_100%)]
              "
            />

            {/* Very subtle grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.025]
                [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                [background-size:70px_70px]
              "
            />
          </div>

          {/* =====================================================
              CLOSE BUTTON
          ===================================================== */}

          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              duration: 0.35,
            }}
            onClick={onClose}
            aria-label="Close menu"
            className="
              absolute
              right-5
              top-5
              z-50

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/10

              text-white

              shadow-lg
              shadow-black/10

              backdrop-blur-2xl

              transition-all
              duration-300

              hover:scale-105
              hover:border-white/30
              hover:bg-[#728558]/40

              active:scale-95

              sm:right-7
              sm:top-7
            "
          >
            <X
              size={22}
              strokeWidth={1.8}
            />
          </motion.button>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-10

              flex
              h-[100svh]
              flex-col

              overflow-y-auto

              px-6
              py-7

              sm:px-10
              sm:py-9
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                justify-center
               
              "
            >
              <Logo />
            </motion.div>

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="
                mx-auto
                mt-8
                w-full
                max-w-md
                space-y-1

                sm:mt-8
              "
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.href}
                  variants={fadeUp}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="
                      group
                      flex
                      items-center
                      justify-center

                      rounded-2xl

                      px-5
                      py-1.5

                      text-center
                      font-heading
                      text-[2rem]
                      font-medium
                      tracking-tight

                      text-white

                      transition-all
                      duration-300

                      hover:bg-white/10
                      hover:text-white
                      hover:backdrop-blur-xl

                      active:scale-[0.98]

                      sm:text-[2.15rem]
                    "
                  >
                    <span
                      className="
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* =================================================
                BOOKING CTA
            ================================================= */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="
                mx-auto
                mt-8
                w-full
                max-w-md
              "
            >
              <BookButton mobile />
            </motion.div>

            {/* =================================================
                BOTTOM AREA
            ================================================= */}

            <div
              className="
                mt-auto
                pt-12
              "
            >
              {/* Social / contact icons */}

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                {/* PHONE */}

                <motion.a
                  variants={fadeUp}
                  href="tel:+27788702149"
                  aria-label="Call Shine Luxury Beauty Spa"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/15

                    bg-white/10

                    text-white

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:border-[#728558]/60
                    hover:bg-[#728558]/30
                    hover:scale-105

                    active:scale-95
                  "
                >
                  <Phone
                    size={20}
                    strokeWidth={1.8}
                  />
                </motion.a>

                {/* WHATSAPP */}

                <motion.a
                  variants={fadeUp}
                  href="https://wa.me/27788702149"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Shine Luxury Beauty Spa on WhatsApp"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/15

                    bg-white/10

                    text-white

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:border-[#58A6AD]/60
                    hover:bg-[#58A6AD]/30
                    hover:scale-105

                    active:scale-95
                  "
                >
                  <MessageCircle
                    size={21}
                    strokeWidth={1.8}
                  />
                </motion.a>

                {/* INSTAGRAM */}

                <motion.a
                  variants={fadeUp}
                  href="#"
                  aria-label="Follow Shine Luxury Beauty Spa on Instagram"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/15

                    bg-white/10

                    text-white

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:border-[#728558]/60
                    hover:bg-[#728558]/30
                    hover:scale-105

                    active:scale-95
                  "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />

                    <circle
                      cx="17.4"
                      cy="6.6"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Divider */}

              <div
                className="
                  mx-auto
                  mt-8
                  h-px
                  w-16
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                "
              />

              {/* Location */}

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="
                  mt-6
                  text-center
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                "
              >
                Luxury Beauty Spa
                <br />

                <span
                  className="
                    mt-1
                    inline-block
                    text-white/40
                  "
                >
                  Cape Town, South Africa
                </span>
              </motion.p>

              {/* Brand accent */}

              <div
                className="
                  mx-auto
                  mt-5
                  h-1
                  w-1
                  rounded-full
                  bg-[#728558]
                  shadow-[0_0_18px_rgba(114,133,88,.8)]
                "
              />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}