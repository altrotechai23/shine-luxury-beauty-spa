"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Scissors,
  ImageIcon,
  MessageSquareQuote,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/appointments",
    label: "Appointments",
    icon: CalendarDays,
  },
  {
    href: "/admin/services",
    label: "Services",
    icon: Scissors,
  },
  {
    href: "/admin/gallery",
    label: "Gallery",
    icon: ImageIcon,
  },
  {
    href: "/admin/testimonials",
    label: "Testimonials",
    icon: MessageSquareQuote,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r bg-white lg:flex lg:flex-col">
      <div className="border-b p-8">
        <h2 className="text-2xl font-bold">
          SHINE
        </h2>

        <p className="text-sm text-neutral-500">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 p-4">
        {links.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-black text-white"
                  : "hover:bg-neutral-100"
              }`}
            >
              <Icon size={18} />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}