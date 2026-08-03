import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/ui/page-header";
import StatCard from "@/components/ui/stat-card";
import Card from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import ConfirmDialog from "@/components/ui/confirm-dialog";

import FAQSheet from "@/components/admin/faq-sheet";

import { deleteFAQ } from "@/actions/faq";

import {
  CircleHelp,
  ListOrdered,
} from "lucide-react";

export default async function FAQPage() {
  const faqs = await prisma.fAQ.findMany({
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <PageHeader
          title="Frequently Asked Questions"
          description="Manage all FAQs displayed on your salon website."
        />

        <FAQSheet />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <StatCard
          title="Total FAQs"
          value={faqs.length}
          icon={<CircleHelp size={26} />}
        />

        <StatCard
          title="Highest Order"
          value={
            faqs.length
              ? Math.max(...faqs.map((faq) => faq.order))
              : 0
          }
          icon={<ListOrdered size={26} />}
        />

      </div>

      {faqs.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6">

          {faqs.map((faq) => (

            <Card
              key={faq.id}
              className="rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div className="max-w-3xl">

                  <h2 className="text-xl font-semibold">
                    {faq.question}
                  </h2>

                  <p className="mt-3 whitespace-pre-wrap text-neutral-500">
                    {faq.answer}
                  </p>

                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium">
                  #{faq.order}
                </span>

              </div>

              <div className="mt-8 flex gap-3">

                <FAQSheet
                  faq={faq}
                />

                <ConfirmDialog
                  id={faq.id}
                  title="Delete FAQ"
                  description="This FAQ will be permanently deleted."
                  action={deleteFAQ}
                />

              </div>

            </Card>

          ))}

        </div>
      )}

    </div>
  );
}