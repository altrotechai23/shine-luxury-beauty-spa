"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
}

export default function ServiceBadge({
  children,
  icon,
}: ServiceBadgeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group

        relative

        inline-flex

        items-center

        gap-2

        overflow-hidden

        rounded-full

        border

        border-white/15

        bg-white/10

        px-4

        py-2.5

        backdrop-blur-3xl

        shadow-[0_12px_40px_rgba(0,0,0,.25)]
      "
    >
      {/* Animated Shine */}

      <motion.div
        animate={{
          x: ["-150%", "250%"],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          inset-y-0

          w-12

          -skew-x-12

          bg-white/25

          blur-md
        "
      />

      {/* Glow */}

      <div
        className="
          absolute

          inset-0

          rounded-full

          bg-gradient-to-r

          from-[#62AAB5]/0

          via-[#62AAB5]/10

          to-[#D7C0A0]/0

          opacity-0

          transition-opacity

          duration-300

          group-hover:opacity-100
        "
      />

      {icon && (
        <span
          className="
            relative
            z-10

            flex

            items-center

            justify-center

            text-[#62AAB5]
          "
        >
          {icon}
        </span>
      )}

      <span
        className="
          relative
          z-10

          text-xs

          font-medium

          uppercase

          tracking-[0.22em]

          text-white/90
        "
      >
        {children}
      </span>
    </motion.div>
  );
}