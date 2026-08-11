import { supabase } from "@/lib/supabase";

const BUCKET = "Shine";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

export async function uploadGalleryImage(
  file: File
): Promise<string> {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error(
      "Invalid image format. Please use JPG, PNG, WEBP, or AVIF."
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      "Image is too large. Maximum size is 5MB."
    );
  }

  const extension =
    file.name.split(".").pop()?.toLowerCase() || "jpg";

  const filename = `${crypto.randomUUID()}.${extension}`;

  const path = `galleries/${filename}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (error) {
    console.error(
      "Supabase gallery image upload error:",
      error
    );

    throw new Error("Failed to upload gallery image.");
  }

  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(path);

  if (!data.publicUrl) {
    throw new Error(
      "Image uploaded, but the public URL could not be generated."
    );
  }

  return data.publicUrl;
}