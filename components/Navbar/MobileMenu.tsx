"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

import Logo from "./Logo";
import BookButton from "./BookButton";
import { navigation } from "./NavigationData";
import {
  drawerReveal,
  staggerContainer,
  fadeUp,
} from "@/lib/motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial="closed"
          animate="open"
          exit="closed"
          variants={drawerReveal}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden

            bg-gradient-to-br
            from-[#081B1F]
            via-[#0F2E35]
            to-[#62AAB5]

            text-white
          "
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              absolute
              top-6
              right-6
              z-50

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-white/20

              bg-white/10
              backdrop-blur-2xl

              transition-all
              duration-300

              hover:scale-110
              hover:bg-white/20
            "
          >
            <X size={24} />
          </button>

          <div className="flex h-screen flex-col px-8 py-8">

            {/* Logo */}

            <div className="flex justify-center">
              <Logo />
            </div>

            {/* Navigation */}

            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="mt-16 space-y-8"
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.href}
                  variants={fadeUp}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="
                      block
                      text-center
                      text-4xl
                      font-heading
                      font-medium

                      transition-all
                      duration-300

                      hover:scale-105
                      hover:text-[#D7C0A0]
                    "
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* CTA */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-14"
            >
              <BookButton mobile />
            </motion.div>

            {/* Bottom */}

            <div className="mt-auto">

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex justify-center gap-8"
              >
                <motion.a
                  variants={fadeUp}
                  href="tel:+27788702149"
                >
                  <Phone size={24} />
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  href="https://wa.me/27788702149"
                  target="_blank"
                >
                  <MessageCircle size={24} />
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  href="#"
                >
                  InstagramIcon
                </motion.a>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="
                  mt-8
                  text-center
                  text-sm
                  text-white/70
                "
              >
                Luxury Beauty Spa
                <br />
                Cape Town, South Africa
              </motion.p>

            </div>

          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}