import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function Heading({
  title,
  subtitle,
  align = "left",
}: HeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        "space-y-5"
      )}
    >
      <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-neutral-600 leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}