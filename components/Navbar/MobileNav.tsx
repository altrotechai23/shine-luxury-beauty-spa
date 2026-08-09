"use client";

import { motion } from "framer-motion";

interface MobileNavProps {
  scrolled: boolean;
  open: boolean;
  onToggle: () => void;
}

export default function MobileNav({
  scrolled,
  open,
  onToggle,
}: MobileNavProps) {

  
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      aria-label="Toggle navigation"
      aria-expanded={open}
      onClick={onToggle}
      className={`
        relative
        z-[10000]

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full
        border
        backdrop-blur-2xl

        lg:hidden

        ${
          scrolled
            ? "border-white/10 bg-white/10 text-white"
            : "border-white/20 bg-black/20 text-white"
        }
      `}
    >
      <motion.span
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 7 : -5,
        }}
        className="absolute h-[2px] w-6 rounded-full bg-current"
      />

      <motion.span
        animate={{
          opacity: open ? 0 : 1,
        }}
        className="absolute h-[2px] w-6 rounded-full bg-current"
      />

      <motion.span
        animate={{
          rotate: open ? -45 : 0,
          y: open ? -7 : 5,
        }}
        className="absolute h-[2px] w-6 rounded-full bg-current"
      />
    </motion.button>
  );
}