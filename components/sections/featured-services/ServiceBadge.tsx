import type { ReactNode } from "react";

interface ServiceBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
}

export default function ServiceBadge({
  children,
  icon,
}: ServiceBadgeProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2

        rounded-full

        border
        border-white/15

        bg-[#081B1F]/65

        px-3
        py-1.5

        text-[10px]
        font-medium
        text-white/85

        backdrop-blur-md
      "
    >
      {icon && (
        <span className="text-[#62AAB5]">
          {icon}
        </span>
      )}

      <span>{children}</span>
    </div>
  );
}