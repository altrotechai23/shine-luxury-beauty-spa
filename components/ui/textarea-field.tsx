import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(
  (
    {
      label,
      error,
      helperText,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId =
      id || `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="space-y-2">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-neutral-800"
        >
          {label}
        </label>

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "min-h-[140px] w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3",
            "text-sm text-neutral-900 placeholder:text-neutral-400",
            "transition-all duration-200",
            "focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10",
            "disabled:cursor-not-allowed disabled:bg-neutral-100",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />

        {helperText && !error && (
          <p className="text-xs text-neutral-500">
            {helperText}
          </p>
        )}

        {error && (
          <p className="text-sm font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextareaField.displayName = "TextareaField";

export default TextareaField;