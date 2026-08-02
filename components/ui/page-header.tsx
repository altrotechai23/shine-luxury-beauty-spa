import Button from "@/components/ui/button";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PageHeader({
  title,
  description,
  buttonText,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      <div>

        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Shine Luxury Spa
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="mt-3 max-w-xl text-neutral-500">
          {description}
        </p>

      </div>

      {buttonText && (
        <Button onClick={onButtonClick}>
          <Plus className="mr-2 h-5 w-5" />

          {buttonText}
        </Button>
      )}

    </div>
  );
}