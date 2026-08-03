"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { categorySchema, CategoryInput } from "@/lib/validators/category";

import InputField from "@/components/ui/input-field";
import TextareaField from "@/components/ui/textarea-field";
import Button from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

interface CategoryFormProps {
  category?: Category;
  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, string[] | undefined>;
  }>;
  onSuccess?: () => void;
}

export default function CategoryForm({
  category,
  action,
  onSuccess,
}: CategoryFormProps) {
  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<CategoryInput>({
    resolver: zodResolver(categorySchema),

    defaultValues: {
      name: category?.name ?? "",
      slug: category?.slug ?? "",
      description: category?.description ?? "",
    },
  });

  const name = watch("name");

  useEffect(() => {
    if (category) return;

    const slug = name
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    setValue("slug", slug);
  }, [name, category, setValue]);

  async function onSubmit(values: CategoryInput) {
    const formData = new FormData();

    if (category) {
      formData.append("id", category.id);
    }

    formData.append("name", values.name);
    formData.append("slug", values.slug);
    formData.append("description", values.description ?? "");

    const result = await action(formData);

    if (!result.success) {
      toast.error("Unable to save category.");
      return;
    }

    toast.success(
      category
        ? "Category updated successfully."
        : "Category created successfully."
    );

    if (!category) {
      reset();
    }

    onSuccess?.();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <InputField
        label="Category Name"
        placeholder="Hair Services"
        error={errors.name?.message}
        {...register("name")}
      />

      <InputField
        label="Slug"
        readOnly
        error={errors.slug?.message}
        {...register("slug")}
      />

      <TextareaField
        label="Description"
        placeholder="Luxury hair treatments..."
        helperText="Optional. A short description displayed to customers."
        error={errors.description?.message}
        {...register("description")}
      />

      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="submit"
          loading={isSubmitting}
        >
          {category ? "Update Category" : "Create Category"}
        </Button>
      </div>
    </form>
  );
}