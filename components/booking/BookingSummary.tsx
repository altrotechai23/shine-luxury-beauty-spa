"use client";

import type { Prisma } from "@prisma/client";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

interface Props {
  service?: Service;
  date: string;
  time: string;
}

export default function BookingSummary({
  service,
  date,
  time,
}: Props) {
  return (
    <div className="rounded-3xl border bg-stone-50 p-6">

      <h3 className="text-xl font-bold">
        Booking Summary
      </h3>

      <div className="mt-6 space-y-4">

        <SummaryItem
          label="Treatment"
          value={service?.title || "Not selected"}
        />

        <SummaryItem
          label="Category"
          value={service?.category.name || "-"}
        />

        <SummaryItem
          label="Duration"
          value={
            service
              ? `${service.duration} mins`
              : "-"
          }
        />

        <SummaryItem
          label="Date"
          value={date || "-"}
        />

        <SummaryItem
          label="Time"
          value={time || "-"}
        />

        <SummaryItem
          label="Price"
          value={
            service
              ? `R${service.price.toFixed(2)}`
              : "-"
          }
        />

      </div>

    </div>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-3">

      <span className="text-neutral-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>

    </div>
  );
}