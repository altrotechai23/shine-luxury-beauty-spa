"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Prisma } from "@prisma/client";

import ServiceCard from "./ServiceCard";
import ServiceFilters from "./ServiceFilters";

type Service = Prisma.ServiceGetPayload<{
  include: {
    category: true;
  };
}>;

type Category = Prisma.CategoryGetPayload<
  Prisma.CategoryDefaultArgs
>;

interface Props {
  services: Service[];
  categories: Category[];
}

export default function ServiceGrid({
  services,
  categories,
}: Props) {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [sort, setSort] =
    useState("featured");

  const filteredServices = useMemo(() => {
    let items = [...services];

    // Search

    if (search.trim()) {
      const q = search.toLowerCase();

      items = items.filter(
        (service) =>
          service.title.toLowerCase().includes(q) ||
          service.description
            .toLowerCase()
            .includes(q) ||
          service.category.name
            .toLowerCase()
            .includes(q)
      );
    }

    // Category

    if (selectedCategory !== "all") {
      items = items.filter(
        (service) =>
          service.categoryId ===
          selectedCategory
      );
    }

    // Sort

    switch (sort) {
      case "price-low":
        items.sort(
          (a, b) =>
            a.price - b.price
        );
        break;

      case "price-high":
        items.sort(
          (a, b) =>
            b.price - a.price
        );
        break;

      case "duration":
        items.sort(
          (a, b) =>
            a.duration - b.duration
        );
        break;

      case "name":
        items.sort((a, b) =>
          a.title.localeCompare(
            b.title
          )
        );
        break;

      case "newest":
        items.sort(
          (a, b) =>
            b.createdAt.getTime() -
            a.createdAt.getTime()
        );
        break;

      default:
        items.sort((a, b) => {
          if (
            a.featured &&
            !b.featured
          )
            return -1;

          if (
            !a.featured &&
            b.featured
          )
            return 1;

          return (
            a.displayOrder -
            b.displayOrder
          );
        });
    }

    return items;
  }, [
    services,
    search,
    selectedCategory,
    sort,
  ]);

  return (
    <div className="space-y-12">

      <ServiceFilters
        categories={categories}
        selectedCategory={
          selectedCategory
        }
        onCategoryChange={
          setSelectedCategory
        }
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      />

      {filteredServices.length ===
      0 ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="rounded-[32px] border border-dashed border-neutral-300 bg-neutral-50 py-24 text-center"
        >
          <h3 className="text-3xl font-semibold">
            No services found
          </h3>

          <p className="mt-4 text-neutral-500">
            Try changing your
            search or selecting
            another category.
          </p>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence>

            {filteredServices.map(
              (service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <ServiceCard
                    service={
                      service
                    }
                  />
                </motion.div>
              )
            )}

          </AnimatePresence>
        </motion.div>
      )}

    </div>
  );
}