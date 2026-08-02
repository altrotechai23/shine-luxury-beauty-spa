import { cn } from "@/lib/utils";

interface GlassProps {
  children: React.ReactNode;
  className?: string;
}

export function Glass({
  children,
  className,
}: GlassProps) {
  return (
    <div
      className={cn(
        "rounded-[30px] border border-white/40 bg-white/50 backdrop-blur-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}