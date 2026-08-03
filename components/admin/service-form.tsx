"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  serviceSchema,
  ServiceInput,
} from "@/lib/validators/service";

import InputField from "@/components/ui/input-field";
import TextareaField from "@/components/ui/textarea-field";
import Button from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
}

interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: number;
  price: number;
  image?: string | null;
  featured: boolean;
  active: boolean;
  categoryId: string;
}

interface Props {
  categories: Category[];

  service?: Service;

  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, string[] | undefined>;
  }>;

  onSuccess?: () => void;
}

export default function ServiceForm({
  categories,
  service,
  action,
  onSuccess,
}: Props) {
  const isEditing = !!service;

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ServiceInput>({
    resolver: zodResolver(serviceSchema),

    defaultValues: {
    title: service?.title ?? "",
    slug: service?.slug ?? "",
    description: service?.description ?? "",
    duration: service?.duration ?? 60,
    price: service?.price ?? 0,
    categoryId: service?.categoryId ?? "",
    image: service?.image ?? "",
    featured: service?.featured ?? false,
    active: service?.active ?? true,
    },
  });

  const title = watch("title");

  useEffect(() => {
    if (isEditing) return;

    const slug = title
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    setValue("slug", slug);
  }, [title, setValue, isEditing]);

  async function onSubmit(values: ServiceInput) {
    const formData = new FormData();

    if (service) {
      formData.append("id", service.id);
    }

    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("description", values.description);
    formData.append("duration", String(values.duration));
    formData.append("price", String(values.price));
    formData.append("categoryId", values.categoryId);

    if (values.image) {
      formData.append("image", values.image);
    }

    formData.append("featured", String(values.featured));
    formData.append("active", String(values.active));

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
        label="Service Title"
        placeholder="Luxury Hair Cut"
        {...register("title")}
        error={errors.title?.message}
      />

      <InputField
        label="Slug"
        readOnly
        {...register("slug")}
        error={errors.slug?.message}
      />

      <TextareaField
        label="Description"
        placeholder="Describe this luxury service..."
        {...register("description")}
        error={errors.description?.message}
      />

      <div className="grid grid-cols-2 gap-4">

        <InputField
          type="number"
          label="Price"
          placeholder="350"
          {...register("price")}
          error={errors.price?.message}
        />

        <InputField
          type="number"
          label="Duration"
          placeholder="60"
          {...register("duration")}
          error={errors.duration?.message}
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <select
          {...register("categoryId")}
          className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
        >
          <option value="">
            Select category
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}

        </select>

        {errors.categoryId && (
          <p className="mt-2 text-sm text-red-500">
            {errors.categoryId.message}
          </p>
        )}

      </div>

      <InputField
        label="Image URL"
        placeholder="https://..."
        {...register("image")}
        error={errors.image?.message}
      />

      <div className="space-y-4 rounded-2xl border p-5">

        <label className="flex items-center justify-between">

          <span className="font-medium">
            Featured Service
          </span>

          <input
            type="checkbox"
            {...register("featured")}
            className="h-5 w-5"
          />

        </label>

        <label className="flex items-center justify-between">

          <span className="font-medium">
            Active
          </span>

          <input
            type="checkbox"
            {...register("active")}
            className="h-5 w-5"
          />

        </label>

      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        className="w-full"
      >
        {isEditing
          ? "Update Service"
          : "Create Service"}
      </Button>

    </form>
  );
}