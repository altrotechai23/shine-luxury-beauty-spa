"use client";

import { useState } from "react";
import { Plus, Pencil } from "lucide-react";

import Button from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import GalleryForm from "./gallery-form";

import {
  createGalleryImage,
  updateGalleryImage,
} from "@/actions/gallery";

import type { Prisma } from "@prisma/client";

type GalleryImage =
  Prisma.GalleryImageGetPayload<
    Prisma.GalleryImageDefaultArgs
  >;

interface Category {
  id: string;
  name: string;
}

interface Props {
  gallery?: GalleryImage;
  categories: Category[];
}

export default function GallerySheet({
  gallery,
  categories,
}: Props) {
  const [open, setOpen] = useState(false);

  const isEditing = !!gallery;

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger
        render={
          isEditing ? (
            <Button variant="outline">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          ) : (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Image
            </Button>
          )
        }
      />

      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">

        <SheetHeader>

          <SheetTitle>
            {isEditing
              ? "Edit Gallery Image"
              : "Add Gallery Image"}
          </SheetTitle>

          <SheetDescription>
            Manage the images displayed throughout your salon website.
          </SheetDescription>

        </SheetHeader>

        <div className="p-6">

          <GalleryForm
                gallery={gallery}
                categories={categories}
                action={
                    isEditing
                    ? updateGalleryImage
                    : createGalleryImage
                }
                onSuccess={() => setOpen(false)}
                />

        </div>

      </SheetContent>

    </Sheet>
  );
}