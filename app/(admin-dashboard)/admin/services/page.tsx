import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/ui/page-header";
import StatCard from "@/components/ui/stat-card";
import Card from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import ConfirmDialog from "@/components/ui/confirm-dialog";

import ServiceSheet from "@/components/admin/service-sheet";

import { deleteService } from "@/actions/service";

import {
  Sparkles,
  Clock3,
  DollarSign,
} from "lucide-react";

export default async function ServicesPage() {
  const [services, categories] = await Promise.all([
    prisma.service.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <PageHeader
          title="Services"
          description="Manage every luxury treatment offered by your salon."
        />

        <ServiceSheet
          categories={categories}
        />

      </div>

      <StatCard
        title="Services"
        value={services.length}
        icon={<Sparkles size={26} />}
      />

      {services.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <Card
              key={service.id}
              className="rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-xl font-semibold">
                    {service.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
                    {service.description}
                  </p>

                </div>

                {service.featured && (
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    Featured
                  </span>
                )}

              </div>

              <div className="mt-6 space-y-3">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-neutral-500">
                    Category
                  </span>

                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
                    {service.category.name}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <Clock3 size={16} />

                    <span>
                      {service.duration} mins
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <DollarSign size={16} />

                    <span>
                      {service.price.toFixed(2)}
                    </span>

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-sm text-neutral-500">
                    Status
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      service.active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {service.active ? "Active" : "Hidden"}
                  </span>

                </div>

              </div>

              <div className="mt-8 flex gap-3">

                <ServiceSheet
                  categories={categories}
                  service={service}
                />

                <ConfirmDialog
                  id={service.id}
                  title="Delete Service"
                  description="This service will be permanently removed."
                  action={deleteService}
                />

              </div>

            </Card>

          ))}

        </div>
      )}

    </div>
  );
}