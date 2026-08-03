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

import ServiceForm from "./service-form";

import {
  createService,
  updateService,
} from "@/actions/service";

import type { Prisma } from "@prisma/client";

type ServiceWithCategory = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;


interface Category {
  id: string;
  name: string;
}

// interface Service {
//   id: string;
//   title: string;
//   slug: string;
//   description: string;
//   duration: number;
//   price: number;
//   image: string | null;
//   featured: boolean;
//   active: boolean;
//   categoryId: string;
// }

interface Props {
  categories: Category[];
  service?: ServiceWithCategory;
}

export default function ServiceSheet({
  categories,
  service,
}: Props) {
  const [open, setOpen] = useState(false);

  const isEditing = !!service;

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
              New Service
            </Button>
          )
        }
      />

      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">

        <SheetHeader>

          <SheetTitle>
            {isEditing
              ? "Edit Service"
              : "Create Service"}
          </SheetTitle>

          <SheetDescription>
            Add or update a luxury salon service.
          </SheetDescription>

        </SheetHeader>

        <div className="p-6">

          <ServiceForm
            categories={categories}
            service={service}
            action={
              isEditing
                ? updateService
                : createService
            }
            onSuccess={() => setOpen(false)}
          />

        </div>

      </SheetContent>

    </Sheet>
  );
}