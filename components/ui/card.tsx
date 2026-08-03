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
        className="rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border -neutral-300 p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}