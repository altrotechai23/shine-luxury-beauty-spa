"use server";

import { prisma } from "@/lib/prisma";
import { testimonialSchema } from "@/lib/validators/testimonial";
import { revalidatePath } from "next/cache";

export async function createTestimonial(formData: FormData) {
  const result = testimonialSchema.safeParse({
    name: formData.get("name"),
    role: formData.get("role"),
    message: formData.get("message"),
    rating: Number(formData.get("rating")),
    image: formData.get("image"),
    featured: formData.get("featured") === "true",
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.testimonial.create({
    data: result.data,
  });

  revalidatePath("/admin/testimonials");

  return {
    success: true,
  };
}

export async function updateTestimonial(formData: FormData) {
  const id = formData.get("id") as string;

  const result = testimonialSchema.safeParse({
    name: formData.get("name"),
    role: formData.get("role"),
    message: formData.get("message"),
    rating: Number(formData.get("rating")),
    image: formData.get("image"),
    featured: formData.get("featured") === "true",
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.testimonial.update({
    where: {
      id,
    },
    data: result.data,
  });

  revalidatePath("/admin/testimonials");

  return {
    success: true,
  };
}

export async function deleteTestimonial(formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.testimonial.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/testimonials");

  return {
    success: true,
  };
}