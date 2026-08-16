"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import BottomTabBar from "./BottomTabBar";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] =
    useState(false);

  const [showBottomBar, setShowBottomBar] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | KEEP PREVIOUS SCROLL POSITION OUTSIDE REACT STATE
  |--------------------------------------------------------------------------
  */

  const lastScrollY = useRef(0);

  /*
  |--------------------------------------------------------------------------
  | PREVENT RAPID NAVIGATION CHANGES
  |--------------------------------------------------------------------------
  */

  const navigationState = useRef<
    "top" | "bottom"
  >("top");

  /*
  |--------------------------------------------------------------------------
  | BOOKING PAGE
  |--------------------------------------------------------------------------
  */

  const isBookingPage =
    pathname === "/booking" ||
    pathname.startsWith("/booking/");

  /*
  |--------------------------------------------------------------------------
  | SCROLL BEHAVIOUR
  |--------------------------------------------------------------------------
  |
  | We intentionally use a small amount of hysteresis:
  |
  | DOWN:
  |   User must scroll below 120px before
  |   the app-style bottom navigation appears.
  |
  | UP:
  |   User must move upward by 40px before
  |   the top navigation returns.
  |
  | This prevents the navigation from flickering
  | when the user makes tiny finger movements.
  |
  */

  useEffect(() => {
    if (isBookingPage) {
      return;
    }

    lastScrollY.current =
      window.scrollY;

    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      const previousScrollY =
        lastScrollY.current;

      const difference =
        currentScrollY -
        previousScrollY;

      /*
      |--------------------------------------------------------------------------
      | VERY TOP OF PAGE
      |--------------------------------------------------------------------------
      */

      if (currentScrollY <= 20) {
        if (
          navigationState.current !==
          "top"
        ) {
          navigationState.current =
            "top";

          setShowBottomBar(false);
        }

        lastScrollY.current =
          currentScrollY;

        return;
      }

      /*
      |--------------------------------------------------------------------------
      | COMPACT NAVBAR
      |--------------------------------------------------------------------------
      */

      setScrolled(
        currentScrollY > 30
      );

      /*
      |--------------------------------------------------------------------------
      | CURRENTLY AT TOP NAVIGATION
      |--------------------------------------------------------------------------
      |
      | Only hide it when the user has actually
      | moved down, not because of tiny scroll
      | events.
      |
      */

      if (
        navigationState.current ===
          "top" &&
        currentScrollY > 120 &&
        difference > 8
      ) {
        navigationState.current =
          "bottom";

        setShowBottomBar(true);
      }

      /*
      |--------------------------------------------------------------------------
      | CURRENTLY AT BOTTOM NAVIGATION
      |--------------------------------------------------------------------------
      |
      | Only return to the top navigation after
      | a meaningful upward movement.
      |
      */

      if (
        navigationState.current ===
          "bottom" &&
        difference < -12
      ) {
        navigationState.current =
          "top";

        setShowBottomBar(false);
      }

      lastScrollY.current =
        currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [isBookingPage]);

  /*
  |--------------------------------------------------------------------------
  | RESET MOBILE APP NAVIGATION WHEN MENU OPENS
  |--------------------------------------------------------------------------
  |
  | We don't use an effect here because we don't
  | want a synchronous setState inside an effect.
  |
  */

  const bottomBarVisible =
    showBottomBar && !menuOpen;

  /*
  |--------------------------------------------------------------------------
  | BOOKING PAGE
  |--------------------------------------------------------------------------
  */

  if (isBookingPage) {
    return null;
  }

  return (
    <>
      {/* ============================================================
          TOP NAVIGATION
      ============================================================ */}

      <motion.header
        initial={false}
        animate={{
          y: showBottomBar
            ? -120
            : 0,

          opacity: showBottomBar
            ? 0
            : 1,
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
            duration: 0.45,
            ease: "easeOut",
          },
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-[60]

          will-change-transform
        "
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between

            transition-all
            duration-500

            ${
              scrolled
                ? "px-4 pt-4"
                : "px-5 pt-5"
            }
          `}
        >
          {/* ======================================================
              DESKTOP
          ====================================================== */}

          <DesktopNav
            compact={scrolled}
          />

          {/* ======================================================
              MOBILE
          ====================================================== */}

          <div
            className={`
              mx-auto
              flex
              h-16
              w-full
              px-4
              items-center
              justify-between

              rounded-full

              transition-all
              duration-500

              lg:hidden

        border
        border-white/10

        bg-white/10
        dark:bg-black/25

        backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(0,0,0,.15)]

       
      
            `}
          >
            <Logo
              compact={scrolled}
            />

            <MobileNav
              scrolled={scrolled}
              open={menuOpen}
              onToggle={() =>
                setMenuOpen(
                  (value) =>
                    !value
                )
              }
            />
          </div>
        </motion.div>
      </motion.header>

      {/* ============================================================
          MOBILE FULL SCREEN MENU
      ============================================================ */}

      <MobileMenu
        open={menuOpen}
        onClose={() =>
          setMenuOpen(false)
        }
      />

      {/* ============================================================
          MOBILE APP NAVIGATION
      ============================================================ */}

      <BottomTabBar
        visible={bottomBarVisible}
      />
    </>
  );
}