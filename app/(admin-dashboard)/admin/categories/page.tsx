import { prisma } from "@/lib/prisma";
import { createCategory,  } from "@/actions/category";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import StatCard from "@/components/ui/stat-card";
import { FolderKanban } from "lucide-react";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
  include: {
    services: true,
  },
  orderBy: {
    createdAt: "desc",
  },
});

  return (
    <div className="space-y-10">

      <PageHeader
          title="Categories"
          description="Organize your luxury spa services into beautiful categories."
          buttonText="New Category"
      />

      <StatCard
          title="Categories"
          value={categories.length}
          icon={<FolderKanban size={26} />}
      />

      <form
        action={createCategory}
        className="rounded-2xl border bg-white p-6 space-y-4"
      >
        <input
          name="name"
          placeholder="Category name"
          className="w-full rounded-lg border p-3"
        />

        <input
          name="slug"
          placeholder="Slug"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full rounded-lg border p-3"
        />

        <button
          className="rounded-xl bg-black px-6 py-3 text-white"
        >
          Create Category
        </button>
      </form>

      <div className="rounded-2xl border bg-white overflow-hidden">

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
  {categories.map((category: import("@prisma/client").PrismaClient) => (
    <Card key={category.id}>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">
            {category.name}
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            {category.description || "No description yet."}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium">
            {category.slug}
          </span>

          <span className="text-sm text-neutral-500">
            {category.services.length} Services
          </span>
        </div>

        <div className="flex gap-3 pt-2">
          <Button className="flex-1">
            Edit
          </Button>

          <Button className="flex-1 bg-red-600 hover:bg-red-700">
            Delete
          </Button>
        </div>
      </div>
    </Card>
  ))}
</div>

      </div>

    </div>
  );
}