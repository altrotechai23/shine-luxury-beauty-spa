"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function FAB({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{
        scale: .9,
      }}
      whileHover={{
        scale: 1.08,
      }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-2xl"
    >
      <Plus size={30} />
    </motion.button>
  );
}