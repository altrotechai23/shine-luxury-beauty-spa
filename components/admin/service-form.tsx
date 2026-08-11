"use client";

"use client";

import { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { uploadServiceImage } from "@/lib/upload-service-image";
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

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    service?.image ?? null
  );

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

  async function onSubmit(values: ServiceInput) {
  try {
    let imageUrl = values.image ?? "";

    // Upload only when a new image was selected
    if (imageFile) {
      imageUrl = await uploadServiceImage(imageFile);
    }

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

    if (imageUrl) {
      formData.append("image", imageUrl);
    }

    formData.append("featured", String(values.featured));
    formData.append("active", String(values.active));

    const result = await action(formData);

    if (!result.success) {
      console.error("Service update failed:", result.errors);
      return;
    }

    onSuccess?.();
  } catch (error) {
    console.error("Service submission failed:", error);
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

      <div className="space-y-3">
  <label className="block text-sm font-medium">
    Service Image
  </label>

  <div className="rounded-2xl border border-dashed border-neutral-300 p-4">
    {imagePreview ? (
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={imagePreview}
          alt="Service preview"
          className="h-56 w-full object-cover"
        />

        <button
          type="button"
          onClick={() => {
            setImageFile(null);
            setImagePreview(null);
            setValue("image", "");
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
          Upload service image
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