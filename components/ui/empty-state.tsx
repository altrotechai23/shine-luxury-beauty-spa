import { Sparkles } from "lucide-react";
import CategorySheet from "../admin/category-sheet";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed bg-white py-20">

      <div className="rounded-3xl border border-dashed py-24 text-center">

<h2 className="text-3xl font-bold">
No Categories Yet
</h2>

<p className="mt-3 text-neutral-500">
Create your first luxury service category.
</p>

<div className="mt-8">
<CategorySheet />
</div>

</div>

    </div>
  );
}