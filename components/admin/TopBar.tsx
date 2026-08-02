"use client";

import { Search, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b bg-white/70 px-8 backdrop-blur-xl">

      <div className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 w-full max-w-md">

        <Search size={18} />

        <input
          placeholder="Search..."
          className="w-full bg-transparent outline-none"
        />

      </div>

      <button className="ml-4 rounded-2xl border p-3 hover:bg-neutral-100">

        <Bell size={20} />

      </button>
    </header>
  );
}