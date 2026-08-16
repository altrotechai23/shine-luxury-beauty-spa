"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sparkles,
  Images,
  UserRound,
  CalendarDays,
} from "lucide-react";

import type {
  LucideIcon,
} from "lucide-react";

import { motion } from "framer-motion";

interface Tab {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface BottomTabBarProps {
  visible: boolean;
}

const tabs: Tab[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },

  {
    label: "Services",
    href: "/services",
    icon: Sparkles,
  },

  {
    label: "Gallery",
    href: "/gallery",
    icon: Images,
  },

  {
    label: "About",
    href: "/about",
    icon: UserRound,
  },

  {
    label: "Book",
    href: "/booking",
    icon: CalendarDays,
  },
];

export default function BottomTabBar({
  visible,
}: BottomTabBarProps) {
  const pathname =
    usePathname();

  return (
    <motion.nav
      aria-label="Mobile navigation"
      initial={false}
      animate={{
        y: visible
          ? 0
          : 140,

        opacity: visible
          ? 1
          : 0,
      }}
      transition={{
        y: {
          duration: 0.65,

          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        },

        opacity: {
          duration: visible
            ? 0.45
            : 0.3,

          ease: "easeOut",
        },
      }}
      style={{
        pointerEvents: visible
          ? "auto"
          : "none",
      }}
      className="
        fixed

        inset-x-3
        bottom-3

        z-[70]

        lg:hidden

        pb-[env(safe-area-inset-bottom)]

        will-change-transform
      "
    >
      <div
        className="
          relative

          mx-auto

          flex

          h-[72px]

          max-w-md

          items-center
          justify-around

          overflow-hidden

          rounded-[28px]

          border
          border-white/80

          bg-white/90

          px-2

          shadow-[0_20px_60px_rgba(31,31,31,0.20)]

          backdrop-blur-2xl

          backdrop-saturate-150

          supports-[backdrop-filter]:bg-white/75
        "
      >
        {/* ========================================================
            AMBIENT PRIMARY GLOW
        ======================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute

            -bottom-10
            left-1/2

            h-24
            w-56

            -translate-x-1/2

            rounded-full

            bg-[#728558]/10

            blur-3xl
          "
        />

        {/* ========================================================
            SUBTLE SECONDARY GLOW
        ======================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute

            -right-10
            top-0

            h-24
            w-24

            rounded-full

            bg-[#58a6ad]/8

            blur-2xl
          "
        />

        {/* ========================================================
            TABS
        ======================================================== */}

        {tabs.map(
          (tab) => {
            const Icon =
              tab.icon;

            const active =
              tab.href === "/"
                ? pathname === "/"
                : pathname.startsWith(
                    tab.href
                  );

            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-label={
                  tab.label
                }
                className="
                  relative
                  z-10

                  flex
                  h-full

                  min-w-[52px]

                  flex-1

                  items-center
                  justify-center
                "
              >
                <motion.div
                  whileTap={{
                    scale: 0.88,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 22,
                  }}
                  className="
                    relative

                    flex

                    h-[58px]

                    min-w-[52px]

                    flex-col

                    items-center
                    justify-center

                    gap-1

                    rounded-[21px]

                    px-2
                  "
                >
                  {/* ==================================================
                      ACTIVE BACKGROUND
                  ================================================== */}

                  {active && (
                    <motion.div
                      layoutId="shine-tab-background"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="
                        absolute

                        inset-1

                        rounded-[20px]

                        bg-[#728558]/10

                        ring-1
                        ring-[#728558]/10
                      "
                    />
                  )}

                  {/* ==================================================
                      ICON
                  ================================================== */}

                  <motion.div
                    animate={{
                      y: active
                        ? -1
                        : 0,

                      scale: active
                        ? 1
                        : 0.96,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 22,
                    }}
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={
                        active
                          ? 2.4
                          : 1.8
                      }
                      className={
                        active
                          ? "text-[#728558]"
                          : "text-[#77716B]"
                      }
                    />
                  </motion.div>

                  {/* ==================================================
                      LABEL
                  ================================================== */}

                  <span
                    className={`
                      relative
                      z-10

                      text-[9px]

                      font-medium

                      leading-none

                      tracking-[-0.01em]

                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-[#728558]"
                          : "text-[#77716B]"
                      }
                    `}
                  >
                    {
                      tab.label
                    }
                  </span>

                  {/* ==================================================
                      ACTIVE DOT
                  ================================================== */}

                  {active && (
                    <motion.span
                      layoutId="shine-tab-dot"
                      className="
                        absolute

                        bottom-[4px]

                        h-1
                        w-1

                        rounded-full

                        bg-[#58a6ad]
                      "
                    />
                  )}
                </motion.div>
              </Link>
            );
          }
        )}
      </div>
    </motion.nav>
  );
}