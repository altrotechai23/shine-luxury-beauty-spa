"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-3xl border bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-stone-100 p-4">
          {icon}
        </div>

        <span className="text-xs font-medium text-green-600">
          LIVE
        </span>
      </div>

      <h2 className="mt-8 break-words text-4xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-neutral-500">
        {title}
      </p>
    </motion.div>
  );
}