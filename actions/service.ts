"use server";

import { prisma } from "@/lib/prisma";
import { serviceSchema } from "@/lib/validators/service";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { getStoragePathFromUrl } from "@/lib/storage-path";
import { revalidatePath } from "next/cache";

/*
=========================================================
BOOLEAN HELPER
=========================================================
*/

function getBoolean(
  value: FormDataEntryValue | null,
  defaultValue = false
): boolean {
  if (value === null) {
    return defaultValue;
  }

  if (typeof value !== "string") {
    return defaultValue;
  }

  return (
    value === "true" ||
    value === "1" ||
    value === "on"
  );
}

/*
=========================================================
CREATE SERVICE
=========================================================
*/

export async function createService(formData: FormData) {
  const result = serviceSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    duration: formData.get("duration"),
    price: formData.get("price"),
    categoryId: formData.get("categoryId"),
    image: formData.get("image") || undefined,

    featured: getBoolean(
      formData.get("featured"),
      false
    ),

    active: getBoolean(
      formData.get("active"),
      true
    ),
  });

  if (!result.success) {
    console.error(
      "CREATE SERVICE VALIDATION ERROR:",
      result.error.flatten()
    );

    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  /*
  =========================================================
  CHECK SLUG
  =========================================================
  */

  const exists = await prisma.service.findUnique({
    where: {
      slug: result.data.slug,
    },
  });

  if (exists) {
    return {
      success: false,
      errors: {
        slug: ["Slug already exists"],
      },
    };
  }

  /*
  =========================================================
  CREATE
  =========================================================
  */

  const service = await prisma.service.create({
    data: result.data,
  });

  console.log(
    "SERVICE CREATED:",
    service.id,
    {
      active: service.active,
      featured: service.featured,
    }
  );

  /*
  =========================================================
  REVALIDATE
  =========================================================
  */

  revalidatePath("/admin/services");
  revalidatePath("/");
  revalidatePath("/booking");

  return {
    success: true,
    serviceId: service.id,
  };
}

/*
=========================================================
UPDATE SERVICE
=========================================================
*/

export async function updateService(formData: FormData) {
  const id = formData.get("id");

  /*
  =========================================================
  VALIDATE ID
  =========================================================
  */

  if (!id || typeof id !== "string") {
    return {
      success: false,
      message: "Service ID is missing.",
    };
  }

  /*
  =========================================================
  READ BOOLEAN VALUES CORRECTLY
  =========================================================
  */

  const featured = getBoolean(
    formData.get("featured"),
    false
  );

  const active = getBoolean(
    formData.get("active"),
    true
  );

  /*
  =========================================================
  VALIDATE SERVICE
  =========================================================
  */

  const result = serviceSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    duration: formData.get("duration"),
    price: formData.get("price"),
    categoryId: formData.get("categoryId"),
    image: formData.get("image") || undefined,

    featured,
    active,
  });

  if (!result.success) {
    console.error(
      "UPDATE SERVICE VALIDATION ERROR:",
      result.error.flatten()
    );

    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  /*
  =========================================================
  CHECK SERVICE EXISTS
  =========================================================
  */

  const existingService =
    await prisma.service.findUnique({
      where: {
        id,
      },
    });

  if (!existingService) {
    return {
      success: false,
      message: "Service not found.",
    };
  }

  /*
  =========================================================
  CHECK SLUG
  =========================================================
  */

  const slugExists =
    await prisma.service.findFirst({
      where: {
        slug: result.data.slug,

        NOT: {
          id,
        },
      },
    });

  if (slugExists) {
    return {
      success: false,
      errors: {
        slug: ["Slug already exists"],
      },
    };
  }

  /*
  =========================================================
  UPDATE SERVICE
  =========================================================
  */

  const updatedService =
    await prisma.service.update({
      where: {
        id,
      },

      data: {
        title: result.data.title,
        slug: result.data.slug,
        description: result.data.description,
        duration: result.data.duration,
        price: result.data.price,
        categoryId: result.data.categoryId,
        image: result.data.image,

        /*
        IMPORTANT:
        Explicitly write both boolean fields.
        */

        featured: result.data.featured,
        active: result.data.active,
      },
    });

  /*
  =========================================================
  DEBUG
  =========================================================
  */

  console.log(
    "SERVICE UPDATED:",
    updatedService.id
  );

  console.log(
    "ACTIVE:",
    updatedService.active
  );

  console.log(
    "FEATURED:",
    updatedService.featured
  );

  /*
  =========================================================
  REVALIDATE
  =========================================================
  */

  revalidatePath("/admin/services");
  revalidatePath("/");
  revalidatePath("/booking");

  return {
    success: true,
    serviceId: updatedService.id,
  };
}

/*
=========================================================
DELETE SERVICE
=========================================================
*/

export async function deleteService(
  formData: FormData
) {
  const id = formData.get("id");

  /*
  =========================================================
  VALIDATE ID
  =========================================================
  */

  if (!id || typeof id !== "string") {
    return {
      success: false,
      message: "Service ID is missing.",
    };
  }

  /*
  =========================================================
  GET SERVICE IMAGE
  =========================================================
  */

  const service =
    await prisma.service.findUnique({
      where: {
        id,
      },

      select: {
        image: true,
      },
    });

  if (!service) {
    return {
      success: false,
      message: "Service not found.",
    };
  }

  /*
  =========================================================
  DELETE DATABASE RECORD
  =========================================================
  */

  await prisma.service.delete({
    where: {
      id,
    },
  });

  /*
  =========================================================
  DELETE SUPABASE IMAGE
  =========================================================
  */

  if (service.image) {
    const fullPath =
      getStoragePathFromUrl(service.image);

    if (fullPath) {
      const pathWithoutBucket =
        fullPath.replace(/^Shine\//, "");

      try {
        await supabaseAdmin.storage
          .from("Shine")
          .remove([pathWithoutBucket]);
      } catch (error) {
        console.error(
          "SUPABASE IMAGE DELETE ERROR:",
          error
        );
      }
    }
  }

  /*
  =========================================================
  REVALIDATE
  =========================================================
  */

  revalidatePath("/");
  revalidatePath("/admin/services");
  revalidatePath("/booking");

  return {
    success: true,
  };
}