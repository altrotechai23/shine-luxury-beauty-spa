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

    /*
    =========================================================
    SEARCH
    =========================================================
    */

    if (search.trim()) {
      const q = search.toLowerCase();

      items = items.filter(
        (service) =>
          service.title
            .toLowerCase()
            .includes(q) ||
          service.description
            .toLowerCase()
            .includes(q) ||
          service.category.name
            .toLowerCase()
            .includes(q)
      );
    }

    /*
    =========================================================
    CATEGORY
    =========================================================
    */

    if (selectedCategory !== "all") {
      items = items.filter(
        (service) =>
          service.categoryId === selectedCategory
      );
    }

    /*
    =========================================================
    SORT
    =========================================================
    */

    switch (sort) {
      case "price-low":
        items.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "price-high":
        items.sort(
          (a, b) => b.price - a.price
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
          a.title.localeCompare(b.title)
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
    <div>
      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <div className="sticky top-3 z-30 mb-10">
        <div
          className="
            rounded-[24px]
            border
            border-black/[0.06]
            bg-white/80
            p-2
            shadow-[0_15px_50px_rgba(0,0,0,0.06)]
            backdrop-blur-2xl
          "
        >
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
        </div>
      </div>

      {/* =====================================================
          RESULT COUNT
      ===================================================== */}

      <div className="mb-7 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.3em] text-black/30">
          Available treatments
        </span>

        <span className="text-xs tabular-nums text-black/30">
          {String(
            filteredServices.length
          ).padStart(2, "0")}
        </span>
      </div>

      {/* =====================================================
          EMPTY STATE
      ===================================================== */}

      {filteredServices.length === 0 ? (
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            flex
            min-h-[320px]
            items-center
            justify-center
            rounded-[32px]
            border
            border-dashed
            border-black/10
            bg-white/50
            px-6
            text-center
          "
        >
          <div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-black/30">
              Nothing here
            </div>

            <h3 className="mt-4 font-heading text-3xl tracking-[-0.03em]">
              No treatments found
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/40">
              Try another search or explore
              one of our other categories.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="
                mt-7
                rounded-full
                border
                border-black/10
                px-5
                py-2.5
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-black/60
                transition
                hover:bg-black
                hover:text-white
              "
            >
              View everything
            </button>
          </div>
        </motion.div>
      ) : (
        /* ===================================================
           SERVICES
        =================================================== */

        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-x-6
            gap-y-8

            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map(
              (service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.45,
                    delay:
                      index * 0.035,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >
                  <ServiceCard
                    service={service}
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