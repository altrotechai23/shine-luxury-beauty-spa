"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        rotate: isDark ? -15 : 15,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-border/60
        bg-card/80
        backdrop-blur-xl
        shadow-sm
        transition-all
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      <motion.div
        key={resolvedTheme}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? (
          <Sun className="text-yellow-400" size={18} />
        ) : (
          <Moon className="text-slate-700 dark:text-slate-200" size={18} />
        )}
      </motion.div>
    </motion.button>
  );
}

// boluwatifefocus100@gmail.com