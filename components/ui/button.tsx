"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  loading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      loading,
      asChild = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        disabled={loading || disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",

          variant === "default" &&
            "bg-black text-white hover:bg-neutral-800",

          variant === "outline" &&
            "border border-neutral-300 bg-white hover:bg-neutral-100",

          variant === "destructive" &&
            "bg-red-600 text-white hover:bg-red-700",

          variant === "ghost" &&
            "hover:bg-neutral-100",

          size === "default" && "h-10 px-5",
          size === "sm" && "h-9 px-4 text-sm",
          size === "lg" && "h-12 px-8",
          size === "icon" && "h-10 w-10",

          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Saving...
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;