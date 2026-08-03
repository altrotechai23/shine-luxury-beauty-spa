"use client";

import { useState } from "react";
import { Plus, Pencil } from "lucide-react";
import type { Prisma } from "@prisma/client";

import Button from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import FAQForm from "./faq-form";

import {
  createFAQ,
  updateFAQ,
} from "@/actions/faq";

type FAQ = Prisma.FAQGetPayload<
  Prisma.FAQDefaultArgs
>;

interface Props {
  faq?: FAQ;
}

export default function FAQSheet({
  faq,
}: Props) {
  const [open, setOpen] = useState(false);

  const isEditing = !!faq;

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
              New FAQ
            </Button>
          )
        }
      />

      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">

        <SheetHeader>

          <SheetTitle>
            {isEditing
              ? "Edit FAQ"
              : "Create FAQ"}
          </SheetTitle>

          <SheetDescription>
            Manage frequently asked questions for your website.
          </SheetDescription>

        </SheetHeader>

        <div className="p-6">

          <FAQForm
            faq={faq}
            action={
              isEditing
                ? updateFAQ
                : createFAQ
            }
            onSuccess={() => setOpen(false)}
          />

        </div>

      </SheetContent>

    </Sheet>
  );
}