"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#241814]/80 shadow-2xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo-no-background.png"
              alt="Shine Luxury Beauty Spa"
              width={180}
              height={80}
              priority
              className="h-14 w-auto object-contain transition duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => {
              const active =
                pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                    active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#C89A5C] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">

            <Link
              href="tel:+27788702149"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            >
              <Phone size={18} />
            </Link>

            <Link
              href="/booking"
              className="rounded-full bg-[#6A4535] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#7E5342]"
            >
              Book Appointment
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur lg:hidden"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 bg-[#241814]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-10">

          <nav className="space-y-8">

            {links.map((link) => {

              const active =
                pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-3xl font-light transition ${
                    active
                      ? "text-[#C89A5C]"
                      : "text-white hover:text-[#C89A5C]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

          </nav>

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-14 rounded-full bg-[#6A4535] py-5 text-center text-lg font-semibold text-white transition hover:bg-[#7E5342]"
          >
            Book Appointment
          </Link>

        </div>
      </div>
    </>
  );
}