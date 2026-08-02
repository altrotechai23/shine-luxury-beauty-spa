"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: .35,
      }}
      className={cn(
        "rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}