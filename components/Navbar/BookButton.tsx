"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BookButtonProps {
  href?: string;
  label?: string;
  className?: string;
  mobile?: boolean;
}

export default function BookButton({
  href = "/booking",
  label = "Book Appointment",
  className = "",
  mobile = false,
}: BookButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 22,
      }}
      className={className}
    >
      <Link
        href={href}
        className={`
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-full
          px-7
          py-3.5
          font-medium
          text-white
          shadow-xl
          transition-all
          duration-500

          bg-gradient-to-r
          from-[#62AAB5]
          via-[#6EB8C3]
          to-[#4E95A0]

          hover:shadow-[0_20px_50px_rgba(98,170,181,0.45)]

          ${
            mobile
              ? "w-full py-5 text-lg"
              : "text-sm"
          }
        `}
      >
        {/* Shine Effect */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-full
          "
        />

        {/* Glow */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            opacity-0
            blur-xl
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-[#62AAB5]/40
          "
        />

        <span className="relative z-10 flex items-center gap-2">
          {label}

          <motion.span
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <ArrowRight size={18} />
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
}