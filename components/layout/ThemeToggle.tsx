"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  /*
   * IMPORTANT:
   * Server and first client render must return
   * exactly the same value.
   */
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function toggleTheme() {
    const root = document.documentElement;

    const nextTheme = !root.classList.contains("dark");

    root.classList.toggle("dark", nextTheme);

    localStorage.setItem(
      "shine-theme",
      nextTheme ? "dark" : "light"
    );

    /*
     * Force subscribers to re-read the external store.
     */
    window.dispatchEvent(
      new Event("shine-theme-change")
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      onClick={toggleTheme}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-colors
        duration-300
        hover:bg-white/10
      "
    >
      <motion.div
        key={isDark ? "sun" : "moon"}
        initial={{
          opacity: 0,
          rotate: -90,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        {isDark ? (
          <Sun
            size={18}
            strokeWidth={2}
            className="text-yellow-400"
          />
        ) : (
          <Moon
            size={18}
            strokeWidth={2}
            className="
              text-slate-700
              dark:text-slate-200
            "
          />
        )}
      </motion.div>
    </motion.button>
  );
}