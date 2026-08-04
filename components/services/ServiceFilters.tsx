"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;

  search: string;
  onSearchChange: (value: string) => void;

  sort: string;
  onSortChange: (value: string) => void;
}

export default function ServiceFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <div className="space-y-8">

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
        />

        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search treatments..."
          className="h-14 w-full rounded-full border border-neutral-200 bg-white pl-14 pr-5 outline-none transition focus:border-[#6A4535]"
        />

      </div>

      {/* Filters */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Categories */}

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => onCategoryChange("all")}
            className={`rounded-full px-5 py-2 transition ${
              selectedCategory === "all"
                ? "bg-[#6A4535] text-white"
                : "border border-neutral-300 bg-white hover:border-[#6A4535]"
            }`}
          >
            All
          </button>

          {categories.map((category) => (

            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-full px-5 py-2 transition ${
                selectedCategory === category.id
                  ? "bg-[#6A4535] text-white"
                  : "border border-neutral-300 bg-white hover:border-[#6A4535]"
              }`}
            >
              {category.name}
            </button>

          ))}

        </div>

        {/* Sort */}

        <div className="flex items-center gap-3">

          <SlidersHorizontal
            size={18}
            className="text-neutral-500"
          />

          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-full border border-neutral-200 bg-white px-5 py-3 outline-none"
          >
            <option value="featured">
              Featured
            </option>

            <option value="price-low">
              Price: Low → High
            </option>

            <option value="price-high">
              Price: High → Low
            </option>

            <option value="duration">
              Duration
            </option>

            <option value="name">
              Alphabetical
            </option>

            <option value="newest">
              Newest
            </option>

          </select>

        </div>

      </div>

    </div>
  );
} 