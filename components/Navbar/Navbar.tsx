"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Booking is a dedicated app-like experience
  |--------------------------------------------------------------------------
  */

  const isBookingPage =
    pathname === "/booking" ||
    pathname.startsWith("/booking/");

  useEffect(() => {
    if (isBookingPage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [isBookingPage]);

  /*
  |--------------------------------------------------------------------------
  | Do NOT render the marketing navbar on booking
  |--------------------------------------------------------------------------
  */

  if (isBookingPage) {
    return null;
  }

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50

          transition-all
          duration-300

          ${
            menuOpen
              ? "pointer-events-none opacity-0"
              : "opacity-100"
          }
        `}
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
          {/* DESKTOP */}

          <DesktopNav compact={scrolled} />

          {/* MOBILE */}

          <div
            className={`
              mx-auto
              flex
              h-16
              w-full
              items-center
              justify-between

              rounded-full

              transition-all
              duration-500

              lg:hidden

              ${
                scrolled
                  ? `
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    shadow-xl
                    backdrop-blur-2xl
                  `
                  : "bg-transparent px-2"
              }
            `}
          >
            <Logo compact={scrolled} />

            <MobileNav
              scrolled={scrolled}
              open={menuOpen}
              onToggle={() =>
                setMenuOpen(
                  (value) => !value
                )
              }
            />
          </div>
        </motion.div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() =>
          setMenuOpen(false)
        }
      />
    </>
  );
}