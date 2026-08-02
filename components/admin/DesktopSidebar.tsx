"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  FolderKanban,
  CalendarDays,
  Image,
  MessageSquareQuote,
  CircleHelp,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    href: "/admin/categories",
    label: "Categories",
    icon: FolderKanban,
  },
  {
    href: "/admin/services",
    label: "Services",
    icon: BriefcaseBusiness,
  },
  {
    href: "/admin/gallery",
    label: "Gallery",
    icon: Image,
  },
  {
    href: "/admin/testimonials",
    label: "Testimonials",
    icon: MessageSquareQuote,
  },
  {
    href: "/admin/faqs",
    label: "FAQ",
    icon: CircleHelp,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 flex-col border-r bg-white/80 backdrop-blur-xl">
      <div className="px-8 py-8">
        <h1 className="text-3xl font-bold">
          Shine
        </h1>

        <p className="text-sm text-neutral-500">
          Luxury Admin
        </p>
      </div>

      <nav className="space-y-2 px-4">
        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href ||
            pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
            >
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-4 rounded-2xl px-5 py-4 transition-all",
                  active
                    ? "bg-black text-white shadow-lg"
                    : "hover:bg-neutral-100"
                )}
              >
                <Icon size={20} />

                <span>{link.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}