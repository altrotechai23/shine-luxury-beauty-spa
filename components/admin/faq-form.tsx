"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Prisma } from "@prisma/client";

import {
  faqSchema,
  FAQInput,
} from "@/lib/validators/faq";

import InputField from "@/components/ui/input-field";
import TextareaField from "@/components/ui/textarea-field";
import Button from "@/components/ui/button";

type FAQ = Prisma.FAQGetPayload<
  Prisma.FAQDefaultArgs
>;

interface Props {
  faq?: FAQ;

  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, string[] | undefined>;
  }>;

  onSuccess?: () => void;
}

export default function FAQForm({
  faq,
  action,
  onSuccess,
}: Props) {
  const isEditing = !!faq;

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<FAQInput>({
    resolver: zodResolver(faqSchema),

    defaultValues: {
      question: faq?.question ?? "",
      answer: faq?.answer ?? "",
      order: faq?.order ?? 0,
    },
  });

  async function onSubmit(values: FAQInput) {
    const formData = new FormData();

    if (faq) {
      formData.append("id", faq.id);
    }

    formData.append("question", values.question);
    formData.append("answer", values.answer);
    formData.append(
      "order",
      values.order.toString()
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
        label="Question"
        placeholder="Do I need to book in advance?"
        {...register("question")}
        error={errors.question?.message}
      />

      <TextareaField
        label="Answer"
        placeholder="We recommend booking in advance to secure your preferred time..."
        {...register("answer")}
        error={errors.answer?.message}
      />

      <InputField
        label="Display Order"
        type="number"
        {...register("order", {
          valueAsNumber: true,
        })}
        error={errors.order?.message}
      />

      <Button
        type="submit"
        loading={isSubmitting}
        className="w-full"
      >
        {isEditing
          ? "Update FAQ"
          : "Create FAQ"}
      </Button>
    </form>
  );
}