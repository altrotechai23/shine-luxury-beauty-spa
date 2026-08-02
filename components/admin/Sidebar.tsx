"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/admin",
    label: "Dashboard",
  },
  {
    href: "/admin/appointments",
    label: "Appointments",
  },
  {
    href: "/admin/categories",
    label: "Categories",
  },
  {
    href: "/admin/services",
    label: "Services",
  },
  {
    href: "/admin/gallery",
    label: "Gallery",
  },
  {
    href: "/admin/testimonials",
    label: "Testimonials",
  },
  {
    href: "/admin/faqs",
    label: "FAQs",
  },
  {
    href: "/admin/settings",
    label: "Settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        Shine Admin
      </h2>

      <div className="space-y-2">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`block rounded-xl px-4 py-3 ${
              pathname === link.href
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}