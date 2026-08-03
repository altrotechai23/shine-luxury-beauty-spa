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

import TestimonialForm from "./testimonial-form";

import {
  createTestimonial,
  updateTestimonial,
} from "@/actions/testimonial";

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  message: string;
  rating: number;
  image: string | null;
  featured: boolean;
}

interface Props {
  testimonial?: Testimonial;
}

export default function TestimonialSheet({
  testimonial,
}: Props) {
  const [open, setOpen] = useState(false);

  const isEditing = !!testimonial;

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
              New Testimonial
            </Button>
          )
        }
      />

      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">

        <SheetHeader>

          <SheetTitle>
            {isEditing
              ? "Edit Testimonial"
              : "Create Testimonial"}
          </SheetTitle>

          <SheetDescription>
            Showcase customer experiences that build trust and credibility.
          </SheetDescription>

        </SheetHeader>

        <div className="p-6">

          <TestimonialForm
            testimonial={testimonial}
            action={
              isEditing
                ? updateTestimonial
                : createTestimonial
            }
            onSuccess={() => setOpen(false)}
          />

        </div>

      </SheetContent>

    </Sheet>
  );
}