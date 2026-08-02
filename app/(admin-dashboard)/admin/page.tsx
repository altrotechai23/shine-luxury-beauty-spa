import DashboardCard from "@/components/admin/DashboardCard";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [
    appointments,
    services,
    testimonials,
    gallery,
  ] = await Promise.all([
    prisma.appointment.count(),
    prisma.service.count(),
    prisma.testimonial.count(),
    prisma.galleryImage.count(),
  ]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Appointments"
          value={appointments}
        />

        <DashboardCard
          title="Services"
          value={services}
        />

        <DashboardCard
          title="Testimonials"
          value={testimonials}
        />

        <DashboardCard
          title="Gallery"
          value={gallery}
        />
      </div>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold">
          Welcome to SHINE Admin
        </h2>

        <p className="mt-4 text-neutral-600">
          Use the menu on the left to manage services,
          appointments, testimonials, gallery images,
          and website settings.
        </p>
      </div>
    </>
  );
}