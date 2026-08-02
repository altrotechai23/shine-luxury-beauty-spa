"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  CalendarDays,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    href: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full border bg-white/90 p-2 shadow-2xl backdrop-blur-xl lg:hidden">

      {links.map((link) => {
        const Icon = link.icon;

        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full p-4 ${
              active
                ? "bg-black text-white"
                : ""
            }`}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </nav>
  );
}