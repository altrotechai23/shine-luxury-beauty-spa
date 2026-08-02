"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
     <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          {/* Logo */}
          <Link href="/" className="space-y-0.5">
            <h1 className="font-heading text-2xl font-semibold tracking-wide">
              SHINE
            </h1>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Luxury Beauty Spa
            </p>    
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
               className="text-sm font-medium text-white/90 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="tel:+27788702149"
              className="rounded-full p-3 text-white hover:bg-white/10"
              aria-label="Call us"
            >
              <Phone size={18} />
            </Link>

            <Link
              href="/booking"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white pt-24 md:hidden">
          <nav className="flex flex-col gap-6 px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-neutral-200 pb-3 text-lg"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/booking"
              className="mt-6 rounded-full bg-black py-4 text-center font-medium text-white"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}