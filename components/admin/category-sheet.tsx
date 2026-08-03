"use client";

import { useState } from "react";
import { Plus, Pencil } from "lucide-react";

import Button from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import CategoryForm from "./category-form";

import {
  createCategory,
  updateCategory,
} from "@/actions/category";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

interface Props {
  category?: Category;
}

export default function CategorySheet({
  category,
}: Props) {
  const [open, setOpen] = useState(false);

  const isEditing = !!category;

  const action = isEditing
    ? updateCategory
    : createCategory;

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
              New Category
            </Button>
          )
        }
      />

      <SheetContent className="w-full overflow-y-auto sm:max-w-xl bg-white">

        <SheetHeader>
          <SheetTitle>
            {isEditing
              ? "Edit Category"
              : "Create Category"}
          </SheetTitle>

          <SheetDescription>
            {isEditing
              ? "Update your salon category."
              : "Create a new category for your salon services."}
          </SheetDescription>
        </SheetHeader>

        <div className="p-6">
          <CategoryForm
            category={category}
            action={action}
            onSuccess={() => setOpen(false)}
          />
        </div>

      </SheetContent>
    </Sheet>
  );
}