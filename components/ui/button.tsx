"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// 1. Extend standard HTML properties so Radix UI's asChild validation passes perfectly
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(({
  children,
  loading,
  className,
  ...props
}, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
      className={cn(
        "rounded-2xl bg-black px-6 py-3 text-white font-medium shadow-lg transition disabled:opacity-50",
        className
      )}
      disabled={loading || props.disabled}
      // 2. Cast standard HTML props to Framer's type internally to bypass linter 'any' rules safely
      {...(props as HTMLMotionProps<"button">)} 
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Saving...
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;
