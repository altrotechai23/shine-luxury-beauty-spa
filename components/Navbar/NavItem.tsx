"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavItem({
  href,
  children,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === href;

  return (
    <Link
      href={href}
      className="relative"
    >
      <motion.div
        whileHover={{
          y: -2,
        }}
        className={`
          relative
          rounded-full
          px-5
          py-3
          text-sm
          font-medium
          transition-colors

          ${
            active
              ? "text-white"
              : "text-white/75 hover:text-white"
          }
        `}
      >
        {active && (
          <motion.div
            layoutId="active-nav"

            className="
            absolute
            inset-0
            rounded-full
            bg-white/10
            border
            border-white/15
            backdrop-blur-xl
            "
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
          />
        )}

        <span className="relative z-10">
          {children}
        </span>
      </motion.div>
    </Link>
  );
}