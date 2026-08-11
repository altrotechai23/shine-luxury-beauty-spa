"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, X } from "lucide-react";
import { uploadGalleryImage } from "@/lib/upload-gallery-image";
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
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(
    gallery?.image ?? null
  );

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

  function handleImageChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const file = event.target.files?.[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    return;
  }

  setImageFile(file);

  const previewUrl = URL.createObjectURL(file);

  setImagePreview(previewUrl);
}

  async function onSubmit(values: GalleryInput) {
  try {
    let imageUrl = values.image;

    if (imageFile) {
      imageUrl = await uploadGalleryImage(imageFile);
    }

    const formData = new FormData();

    if (gallery) {
      formData.append("id", gallery.id);
    }

    formData.append("image", imageUrl);
    formData.append("title", values.title);

    if (values.category) {
      formData.append("category", values.category);
    }

    const result = await action(formData);

    if (!result.success) {
      console.error(
        "Gallery action failed:",
        result.errors
      );

      return;
    }

    onSuccess?.();
  } catch (error) {
    console.error(
      "Gallery submission failed:",
      error
    );
  }
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="space-y-3">
  <label className="block text-sm font-medium">
    Gallery Image
  </label>

  <div className="rounded-2xl border border-dashed border-neutral-300 p-4">
    {imagePreview ? (
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={imagePreview}
          alt={gallery?.title || "Gallery preview"}
          className="h-56 w-full object-cover"
        />

        <button
          type="button"
          onClick={() => {
            setImageFile(null);
            setImagePreview(null);
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    ) : (
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-neutral-200 px-6 py-10 text-center transition hover:bg-neutral-50">
        <ImagePlus className="mb-3 h-8 w-8 text-neutral-400" />

        <span className="text-sm font-medium">
          Upload gallery image
        </span>

        <span className="mt-1 text-xs text-neutral-500">
          JPG, PNG, WEBP or AVIF · Maximum 5MB
        </span>

        <input
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    )}
  </div>

  {errors.image && (
    <p className="text-sm text-red-500">
      {errors.image.message}
    </p>
  )}
</div>

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