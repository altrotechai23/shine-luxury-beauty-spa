"use client";

import { useState } from "react";
import { Plus, Pencil } from "lucide-react";

import Button from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import AppointmentForm from "./appointment-form";

import {
  createAppointment,
  updateAppointment,
} from "@/actions/appointment";
import type { Prisma } from "@prisma/client";
import type {
  Appointment, Service} from "@prisma/client";

// type AppointmentWithService =  Prisma.AppointmentGetPayload<Prisma.AppointmentDefaultArgs>;

// type Service =  Prisma.ServiceGetPayload<Prisma.ServiceDefaultArgs>;

// interface Service {
//   id: string;
//   title: string;
// }

// interface Appointment {
//   id: string;
//   fullName: string;
//   phone: string;
//   email: string;

//   serviceId: string;

//   therapist: string | null;

//   date: Date;

//   time: string;

//   notes: string | null;

//   status:
//     | "PENDING"
//     | "CONFIRMED"
//     | "COMPLETED"
//     | "CANCELLED";
// }

interface Props {
  services: Service[];
  appointment?: Appointment;
}

export default function AppointmentSheet({
  services,
  appointment,
}: Props) {
  const [open, setOpen] = useState(false);

  const isEditing = !!appointment;

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger
        render={
          isEditing ? (
            <Button variant="outline">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          ) : (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          )
        }
      />

      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">

        <SheetHeader>

          <SheetTitle>
            {isEditing
              ? "Edit Appointment"
              : "Create Appointment"}
          </SheetTitle>

          <SheetDescription>
            Schedule and manage customer appointments.
          </SheetDescription>

        </SheetHeader>

        <div className="p-6">

          <AppointmentForm
            services={services}
            appointment={appointment}
            action={
              isEditing
                ? updateAppointment
                : createAppointment
            }
            onSuccess={() => setOpen(false)}
          />

        </div>

      </SheetContent>

    </Sheet>
  );
}