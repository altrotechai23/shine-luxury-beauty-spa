import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/ui/page-header";
import StatCard from "@/components/ui/stat-card";
import Card from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import ConfirmDialog from "@/components/ui/confirm-dialog";

import GallerySheet from "@/components/admin/gallery-sheet";

import { deleteGalleryImage } from "@/actions/gallery";

import {
  Images,
  ImageIcon,
} from "lucide-react";

export default async function GalleryPage() {
  const [gallery, salonCategories] = await Promise.all([
    prisma.galleryImage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  const categories = new Set(
    gallery
      .map((image) => image.category)
      .filter(Boolean)
  );

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <PageHeader
          title="Gallery"
          description="Manage the images displayed throughout your luxury salon website."
        />

        <GallerySheet categories={salonCategories} />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <StatCard
          title="Gallery Images"
          value={gallery.length}
          icon={<Images size={26} />}
        />

        <StatCard
          title="Categories"
          value={categories.size}
          icon={<ImageIcon size={26} />}
        />

      </div>

      {gallery.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {gallery.map((image) => (

            <Card
              key={image.id}
              className="overflow-hidden rounded-3xl border p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <img
                src={image.image}
                alt={image.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-lg font-semibold">
                  {image.title}
                </h2>

                <p className="mt-2 text-sm text-neutral-500">
                  {image.category || "Uncategorized"}
                </p>

                <div className="mt-6 flex gap-3">

                  <GallerySheet
                    gallery={image}
                    categories={salonCategories}
                  />

                  <ConfirmDialog
                    id={image.id}
                    title="Delete Image"
                    description="This image will be permanently removed from the gallery."
                    action={deleteGalleryImage}
                  />

                </div>

              </div>

            </Card>

          ))}

        </div>
      )}

    </div>
  );
}