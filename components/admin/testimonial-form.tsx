"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  testimonialSchema,
  TestimonialInput,
} from "@/lib/validators/testimonial";

import InputField from "@/components/ui/input-field";
import TextareaField from "@/components/ui/textarea-field";
import Button from "@/components/ui/button";

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

  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, string[] | undefined>;
  }>;

  onSuccess?: () => void;
}

export default function TestimonialForm({
  testimonial,
  action,
  onSuccess,
}: Props) {
  const isEditing = !!testimonial;

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<TestimonialInput>({
    resolver: zodResolver(testimonialSchema),

    defaultValues: {
      name: testimonial?.name ?? "",
      role: testimonial?.role ?? "",
      message: testimonial?.message ?? "",
      rating: testimonial?.rating ?? 5,
      image: testimonial?.image ?? "",
      featured: testimonial?.featured ?? false,
    },
  });

  async function onSubmit(values: TestimonialInput) {
    const formData = new FormData();

    if (testimonial) {
      formData.append("id", testimonial.id);
    }

    formData.append("name", values.name);

    if (values.role) {
      formData.append("role", values.role);
    }

    formData.append("message", values.message);
    formData.append("rating", values.rating.toString());

    if (values.image) {
      formData.append("image", values.image);
    }

    formData.append(
      "featured",
      values.featured ? "true" : "false"
    );

    const result = await action(formData);

    if (result.success) {
      onSuccess?.();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <InputField
        label="Customer Name"
        placeholder="Jane Smith"
        {...register("name")}
        error={errors.name?.message}
      />

      <InputField
        label="Role"
        placeholder="CEO • Happy Customer"
        {...register("role")}
        error={errors.role?.message}
      />

      <TextareaField
        label="Review"
        placeholder="Share the customer's experience..."
        {...register("message")}
        error={errors.message?.message}
      />

      <InputField
        label="Image URL"
        placeholder="https://..."
        {...register("image")}
        error={errors.image?.message}
      />

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Rating
          </label>

          <select
            {...register("rating", {
              valueAsNumber: true,
            })}
            className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
          >
            <option value={1}>⭐ 1</option>
            <option value={2}>⭐⭐ 2</option>
            <option value={3}>⭐⭐⭐ 3</option>
            <option value={4}>⭐⭐⭐⭐ 4</option>
            <option value={5}>⭐⭐⭐⭐⭐ 5</option>
          </select>

          {errors.rating && (
            <p className="mt-2 text-sm text-red-500">
              {errors.rating.message}
            </p>
          )}
        </div>

        <div className="flex items-end">
          <label className="flex items-center gap-3 rounded-2xl border px-4 py-3 w-full">
            <input
              type="checkbox"
              {...register("featured")}
            />

            <span className="font-medium">
              Featured Testimonial
            </span>
          </label>
        </div>
      </div>

      <Button
        loading={isSubmitting}
        type="submit"
        className="w-full"
      >
        {isEditing
          ? "Update Testimonial"
          : "Create Testimonial"}
      </Button>
    </form>
  );
}