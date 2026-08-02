import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-36",
        className
      )}
    >
      {children}
    </section>
  );
}