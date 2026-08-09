"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phone = "27788702149";

  const message = encodeURIComponent(
    "Hi 👋 I'd like to enquire about your beauty services."
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <Link
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-3 rounded-full border border-white/20 bg-[#25D366]/90 px-5 py-4 text-white shadow-2xl backdrop-blur-xl transition hover:scale-105 hover:bg-[#25D366]"
        >
          <FaWhatsapp className="text-3xl" />
        </Link>
      </motion.div>
    </motion.div>
  );
}