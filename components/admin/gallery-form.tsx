"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  gallerySchema,
  GalleryInput,
} from "@/lib/validators/gallery";

import InputField from "@/components/ui/input-field";
import Button from "@/components/ui/button";

interface GalleryImage {
  id: string;
  image: string;
  title: string;
  category: string | null;
}

interface Category {
  id: string;
  name: string;
}

interface Props {
  gallery?: GalleryImage;

  categories: Category[];

  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, string[] | undefined>;
  }>;

  onSuccess?: () => void;
}

export default function GalleryForm({
  gallery,
  categories,
  action,
  onSuccess,
}: Props) {
  const isEditing = !!gallery;

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<GalleryInput>({
    resolver: zodResolver(gallerySchema),

    defaultValues: {
      image: gallery?.image ?? "",
      title: gallery?.title ?? "",
      category: gallery?.category ?? "",
    },
  });

  async function onSubmit(values: GalleryInput) {
    const formData = new FormData();

    if (gallery) {
      formData.append("id", gallery.id);
    }

    formData.append("image", values.image);
    formData.append("title", values.title);

    if (values.category) {
      formData.append("category", values.category);
    }

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
        label="Image URL"
        placeholder="https://example.com/image.jpg"
        {...register("image")}
        error={errors.image?.message}
      />

      <InputField
        label="Title"
        placeholder="Luxury Facial"
        {...register("title")}
        error={errors.title?.message}
      />

      <div>
  <label className="mb-2 block text-sm font-medium">
    Category
  </label>

  <select
    {...register("category")}
    className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
  >
    <option value="">
      Select Category
    </option>

    {categories.map((category) => (
      <option
        key={category.id}
        value={category.name}
      >
        {category.name}
      </option>
    ))}
  </select>

  {errors.category && (
    <p className="mt-2 text-sm text-red-500">
      {errors.category.message}
    </p>
  )}
</div>

      {gallery?.image && (
        <div className="overflow-hidden rounded-2xl border">
          <img
            src={gallery.image}
            alt={gallery.title}
            className="h-56 w-full object-cover"
          />
        </div>
      )}

      <Button
        type="submit"
        loading={isSubmitting}
        className="w-full"
      >
        {isEditing
          ? "Update Image"
          : "Create Image"}
      </Button>
    </form>
  );
}