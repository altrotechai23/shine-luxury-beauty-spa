import { prisma } from "@/lib/prisma";
import Card from "@/components/ui/card";
import StatCard from "@/components/ui/stat-card";
import PageHeader from "@/components/ui/page-header";
import EmptyState from "@/components/ui/empty-state";
import ConfirmDialog from "@/components/ui/confirm-dialog";
import CategorySheet from "@/components/admin/category-sheet";
import FadeIn from "@/components/ui/fade-in";
import { deleteCategory } from "@/actions/category";
import { FolderKanban } from "lucide-react";
export const dynamic = "force-dynamic";
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
    <div className="space-y-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <PageHeader
            title="Categories"
            description="Organize all salon services into beautiful collections."
          />
        </div>

        <CategorySheet />
      </div>

      <StatCard
        title="Categories"
        value={categories.length}
        icon={<FolderKanban size={26} />}
      />

      {categories.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category, index) => (

            <FadeIn key={index*0.8} delay={index * 0.8}>
              <Card
              key={category.id}
              className="rounded-3xl border border-neutral-200 p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-xl font-semibold">
                    {category.name}
                  </h2>

                  <p className="mt-2 text-sm text-neutral-500">
                    {category.description || "No description"}
                  </p>

                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium">
                  {category.services.length} Services
                </span>

              </div>

              <div className="mt-6">

                <span className="text-xs uppercase tracking-wider text-neutral-400">
                  Slug
                </span>

                <div className="mt-2 rounded-xl bg-neutral-100 px-3 py-2 text-sm">
                  {category.slug}
                </div>

              </div>

              <div className="mt-8 flex gap-3">

                <CategorySheet category={category} />

                <ConfirmDialog
                  id={category.id}
                  title="Delete Category"
                  description="This action cannot be undone."
                  action={deleteCategory}
                /> 

              </div>

            </Card>
            </FadeIn>

          ))}

        </div>
      )}

    </div>
  );
}