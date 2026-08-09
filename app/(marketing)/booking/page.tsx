import { prisma } from "@/lib/prisma";

import BookingWizard from "@/components/booking/BookingWizard";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata = {
  title: "Book Appointment | SHINE Luxury Beauty Spa",
};

export default async function BookingPage() {
  const services = await prisma.service.findMany({
    where: {
      active: true,
    },
    include: {
      category: true,
    },
    orderBy: [
      {
        displayOrder: "asc",
      },
      {
        title: "asc",
      },
    ],
  });

  return (
    <main
      className="
        min-h-screen
        bg-[#F7F8F7]
        text-[#171B1C]
      "
    >
      <BookingWizard
        services={services}
      />

      <FloatingWhatsApp />
    </main>
  );
}