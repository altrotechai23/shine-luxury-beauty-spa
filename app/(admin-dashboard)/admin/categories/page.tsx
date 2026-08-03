import { prisma } from "@/lib/prisma";
import { createCategory, deleteCategory,  } from "@/actions/category";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import StatCard from "@/components/ui/stat-card";
import { FolderKanban } from "lucide-react";
// Replace line 8 with this:
import { Prisma } from "@prisma/client";
import EmptyState from "@/components/ui/empty-state";
import ConfirmDialog from "@/components/ui/confirm-dialog";


export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
  include: {
    services: true,
  },
  orderBy: {
    createdAt: "desc",
  },
});

  if(!categories.length){

    return(

    <EmptyState/>

    )

  }

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

        {categories.map(category=>(

        <Card key={category.id}>

        <h2 className="text-xl font-semibold">

        {category.name}

        </h2>

        <p className="mt-3 text-neutral-500">

        {category.description}

        </p>

        <div className="mt-6 flex justify-between">

        <span className="text-sm">

        Slug

        </span>

        <span className="rounded-full bg-stone-100 px-3 py-1">

        {category.slug}

        </span>

        </div>

        <div className="mt-6 flex gap-3">

        <Button>  Edit </Button>

        <Button className="bg-red-600">
          Delete
        </Button>
        <ConfirmDialog
            id={category.id}
            title="Delete Category"
            description="This action cannot be undone."
            action={deleteCategory}
        />
        </div>

        </Card>

        ))}
      </div>

      </div>

    </div>
  );
}