"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavItem from "./NavItem";
import BookButton from "./BookButton";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { navigation } from "./NavigationData";

interface DesktopNavProps {
  compact?: boolean;
}

export default function DesktopNav({
  compact = false,
}: DesktopNavProps) {
  return (
    <motion.nav
      layout
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
      }}
      className={`
        hidden
        lg:flex

        mx-auto
        w-fit
        items-center

        ${
          compact
            ? "h-20 px-6"
            : "h-24 px-8"
        }

        rounded-full
        border
        border-white/10

        bg-white/10
        dark:bg-black/25

        backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(0,0,0,.15)]

        transition-all
        duration-500
      `}
    >
      {/* Logo */}

      <div className="flex items-center">
        <Logo compact={compact} />
      </div>

      {/* Navigation */}

      <div className="mx-8 flex items-center gap-2">
        {navigation.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
          >
            {item.label}
          </NavItem>
        ))}
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <ThemeToggle />

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <Link
            href="tel:+27788702149"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/10
              dark:bg-white/5

              backdrop-blur-xl

              transition-all

              hover:bg-white/20
            "
          >
            <Phone size={18} />
          </Link>
        </motion.div>

        <BookButton />

      </div>
    </motion.nav>
  );
}