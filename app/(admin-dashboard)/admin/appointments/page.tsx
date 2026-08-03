import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/ui/page-header";
import StatCard from "@/components/ui/stat-card";
import Card from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import ConfirmDialog from "@/components/ui/confirm-dialog";

import AppointmentSheet from "@/components/admin/appointment-sheet";

import { deleteAppointment } from "@/actions/appointment";

import {
  CalendarDays,
  Clock3,
  User,
  BriefcaseMedical,
} from "lucide-react";

export default async function AppointmentsPage() {
  const [appointments, services] = await Promise.all([
    prisma.appointment.findMany({
      include: {
        service: true,
      },
      orderBy: {
        date: "desc",
      },
    }),

    prisma.service.findMany({
      orderBy: {
        title: "asc",
      },
    }),
  ]);

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <PageHeader
          title="Appointments"
          description="Manage customer bookings and schedules."
        />

        <AppointmentSheet
          services={services}
        />

      </div>

      <StatCard
        title="Appointments"
        value={appointments.length}
        icon={<CalendarDays size={26} />}
      />

      {appointments.length === 0 ? (
        <EmptyState />
      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {appointments.map((appointment) => (

            <Card
              key={appointment.id}
              className="rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-lg font-semibold">
                    {appointment.fullName}
                  </h2>

                  <p className="text-sm text-neutral-500">
                    {appointment.email}
                  </p>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
                    ${
                      appointment.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : ""
                    }
                    ${
                      appointment.status === "CONFIRMED"
                        ? "bg-blue-100 text-blue-700"
                        : ""
                    }
                    ${
                      appointment.status === "COMPLETED"
                        ? "bg-green-100 text-green-700"
                        : ""
                    }
                    ${
                      appointment.status === "CANCELLED"
                        ? "bg-red-100 text-red-700"
                        : ""
                    }
                  `}
                >
                  {appointment.status}
                </span>

              </div>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-2 text-sm">

                  <BriefcaseMedical size={16} />

                  <span>
                    {appointment.service.title}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-sm">

                  <Clock3 size={16} />

                  <span>
                    {appointment.time}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-sm">

                  <CalendarDays size={16} />

                  <span>
                    {appointment.date.toLocaleDateString()}
                  </span>

                </div>

                {appointment.therapist && (

                  <div className="flex items-center gap-2 text-sm">

                    <User size={16} />

                    <span>
                      {appointment.therapist}
                    </span>

                  </div>

                )}

              </div>

              <div className="mt-8 flex gap-3">

                <AppointmentSheet
                  services={services}
                  appointment={appointment}
                />

                <ConfirmDialog
                  id={appointment.id}
                  title="Delete Appointment"
                  description="This appointment will be permanently deleted."
                  action={deleteAppointment}
                />

              </div>

            </Card>

          ))}

        </div>

      )}

    </div>
  );
}