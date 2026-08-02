import { prisma } from "@/lib/prisma";
import {
  Calendar,
  Briefcase,
  Folder,
  Image,
  MessageSquare,
} from "lucide-react";


import Card from "@/components/ui/card";
export default async function AdminDashboard() {
  const [
    appointments,
    services,
    categories,
    testimonials,
    gallery,
  ] = await Promise.all([
    prisma.appointment.count(),
    prisma.service.count(),
    prisma.category.count(),
    prisma.testimonial.count(),
    prisma.galleryImage.count(),
  ]);

 const cards = [
  {
    title: "Appointments",
    value: appointments,
    icon: Calendar,
  },
  {
    title: "Services",
    value: services,
    icon: Briefcase,
  },
  {
    title: "Categories",
    value: categories,
    icon: Folder,
  },
  {
    title: "Testimonials",
    value: testimonials,
    icon: MessageSquare,
  },
  {
    title: "Gallery",
    value: gallery,
    icon: Image,
  },
];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Shine Luxury Beauty Spa
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
  {cards.map((card) => {
    const Icon = card.icon;

    return (
      <Card key={card.title}>
        <div className="flex items-center justify-between">
          <div className="rounded-xl bg-stone-100 p-3">
            <Icon className="h-5 w-5" />
          </div>

          <span className="text-xs text-green-600 font-medium">
            Live
          </span>
        </div>

        <h2 className="mt-6 text-5xl font-bold">
          {card.value}
        </h2>

        <p className="mt-2 text-neutral-500">
          {card.title}
        </p>
      </Card>
    );
  })}
</div>
    </div>
  );
}