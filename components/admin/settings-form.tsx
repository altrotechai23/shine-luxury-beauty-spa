"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Prisma } from "@prisma/client";

import {
  settingsSchema,
  SettingsInput,
} from "@/lib/validators/settings";

import { updateSettings } from "@/actions/settings";

import InputField from "@/components/ui/input-field";
import TextareaField from "@/components/ui/textarea-field";
import Button from "@/components/ui/button";

type Setting = Prisma.SettingGetPayload<
  Prisma.SettingDefaultArgs
>;

interface Props {
  settings?: Setting | null;
}

export default function SettingsForm({
  settings,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<SettingsInput>({
    resolver: zodResolver(settingsSchema),

    defaultValues: {
      businessName: settings?.businessName ?? "",
      phone: settings?.phone ?? "",
      email: settings?.email ?? "",
      whatsapp: settings?.whatsapp ?? "",
      address: settings?.address ?? "",
      instagram: settings?.instagram ?? "",
      facebook: settings?.facebook ?? "",
      openingHours: settings?.openingHours ?? "",
      heroTitle: settings?.heroTitle ?? "",
      heroSubtitle: settings?.heroSubtitle ?? "",
    },
  });

  async function onSubmit(values: SettingsInput) {
    const formData = new FormData();

    formData.append("businessName", values.businessName);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("whatsapp", values.whatsapp);
    formData.append("address", values.address);

    formData.append(
      "instagram",
      values.instagram ?? ""
    );

    formData.append(
      "facebook",
      values.facebook ?? ""
    );

    formData.append(
      "openingHours",
      values.openingHours ?? ""
    );

    formData.append(
      "heroTitle",
      values.heroTitle ?? ""
    );

    formData.append(
      "heroSubtitle",
      values.heroSubtitle ?? ""
    );

    const result = await updateSettings(formData);

    if (result.success) {
      alert("Settings updated successfully.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-10"
    >
      {/* Business Information */}

      <div className="space-y-6 rounded-3xl border p-8">

        <h2 className="text-xl font-semibold">
          Business Information
        </h2>

        <InputField
          label="Business Name"
          {...register("businessName")}
          error={errors.businessName?.message}
        />

        <InputField
          label="Address"
          {...register("address")}
          error={errors.address?.message}
        />

        <TextareaField
          label="Opening Hours"
          placeholder="Mon - Fri : 08:00 - 18:00"
          {...register("openingHours")}
          error={errors.openingHours?.message}
        />

      </div>

      {/* Contact */}

      <div className="space-y-6 rounded-3xl border p-8">

        <h2 className="text-xl font-semibold">
          Contact
        </h2>

        <InputField
          label="Phone"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <InputField
          label="WhatsApp"
          {...register("whatsapp")}
          error={errors.whatsapp?.message}
        />

        <InputField
          type="email"
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />

      </div>

      {/* Social */}

      <div className="space-y-6 rounded-3xl border p-8">

        <h2 className="text-xl font-semibold">
          Social Media
        </h2>

        <InputField
          label="Instagram"
          {...register("instagram")}
          error={errors.instagram?.message}
        />

        <InputField
          label="Facebook"
          {...register("facebook")}
          error={errors.facebook?.message}
        />

      </div>

      {/* Hero */}

      <div className="space-y-6 rounded-3xl border p-8">

        <h2 className="text-xl font-semibold">
          Hero Section
        </h2>

        <InputField
          label="Hero Title"
          {...register("heroTitle")}
          error={errors.heroTitle?.message}
        />

        <TextareaField
          label="Hero Subtitle"
          {...register("heroSubtitle")}
          error={errors.heroSubtitle?.message}
        />

      </div>

      <Button
        loading={isSubmitting}
        type="submit"
        className="w-full"
      >
        Save Settings
      </Button>
    </form>
  );
}