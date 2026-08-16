"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  compact?: boolean;
}

export default function Logo({
  compact = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Shine Luxury Beauty Spa"
      className="
        group
        flex
        items-center
        shrink-0
      "
    >
      <motion.div
        whileHover={{
          scale: 1.025,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 24,
        }}
        className="
          relative
          flex
          items-center
        "
      >
        {/* =====================================================
            SOFT BRAND GLOW
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-0

            rounded-full

            bg-[#728558]/15

            opacity-0

            blur-xl

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Image
          src="/logo-no-background.png"
          alt="Shine Luxury Beauty Spa"
          width={320}
          height={120}
          priority
          className={`
            relative
            z-10

            w-auto

            object-contain

            select-none

            transition-all
            duration-500

            ${
              compact
                ? "h-10 sm:h-11"
                : "h-11 sm:h-14"
            }
          `}
        />
      </motion.div>
    </Link>
  );
}