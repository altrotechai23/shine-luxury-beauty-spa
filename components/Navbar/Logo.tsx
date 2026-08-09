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
      className="flex items-center"
    >
      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: .98,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src="/logo-no-background.png"
          alt="Shine Luxury Beauty Spa"
          width={320}
          height={120}
          priority
          className={`
            w-auto
            transition-all
            duration-500

            ${
              compact
                ? "h-11 md:h-12"
                : "h-12 md:h-16"
            }
          `}
        />
      </motion.div>
    </Link>
  );
}