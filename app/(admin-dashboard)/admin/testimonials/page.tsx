import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/ui/page-header";
import StatCard from "@/components/ui/stat-card";
import Card from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import ConfirmDialog from "@/components/ui/confirm-dialog";

import TestimonialSheet from "@/components/admin/testimonial-sheet";

import { deleteTestimonial } from "@/actions/testimonial";

import {
  MessageSquareQuote,
  Star,
  BadgeCheck,
} from "lucide-react";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const featuredCount = testimonials.filter(
    (t) => t.featured
  ).length;

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <PageHeader
          title="Testimonials"
          description="Manage customer reviews that build trust for your salon."
        />

        <TestimonialSheet />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <StatCard
          title="Testimonials"
          value={testimonials.length}
          icon={<MessageSquareQuote size={26} />}
        />

        <StatCard
          title="Featured Reviews"
          value={featuredCount}
          icon={<BadgeCheck size={26} />}
        />

      </div>

      {testimonials.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial) => (

            <Card
              key={testimonial.id}
              className="rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200 text-xl font-bold">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>

                    <h2 className="font-semibold text-lg">
                      {testimonial.name}
                    </h2>

                    <p className="text-sm text-neutral-500">
                      {testimonial.role || "Customer"}
                    </p>

                  </div>

                </div>

                {testimonial.featured && (
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    Featured
                  </span>
                )}

              </div>

              <div className="mt-6 flex gap-1">

                {Array.from({
                  length: testimonial.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-5 line-clamp-5 text-neutral-600 leading-relaxed">
                {testimonial.message}
              </p>

              <div className="mt-8 flex gap-3">

                <TestimonialSheet
                  testimonial={testimonial}
                />

                <ConfirmDialog
                  id={testimonial.id}
                  title="Delete Testimonial"
                  description="This testimonial will be permanently removed."
                  action={deleteTestimonial}
                />

              </div>

            </Card>

          ))}

        </div>
      )}

    </div>
  );
}