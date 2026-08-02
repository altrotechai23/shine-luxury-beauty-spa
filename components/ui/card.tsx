import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}