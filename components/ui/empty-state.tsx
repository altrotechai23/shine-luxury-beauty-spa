import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed bg-white py-20">

      <Sparkles
        className="mb-4"
        size={40}
      />

      <h2 className="text-2xl font-semibold">
        Nothing here yet
      </h2>

      <p className="mt-2 text-neutral-500">
        Create your first item.
      </p>

    </div>
  );
}