import { Sparkles } from "lucide-react";

export function LuxuryBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 shadow-sm">
      <Sparkles
        size={15}
        className="text-amber-600"
      />

      <span className="text-sm font-medium">
        Luxury Beauty Experience
      </span>
    </div>
  );
}