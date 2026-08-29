"use client";

// components/gallery/photo-gallery.tsx

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  galleryItems,
  filterCategories,
  type FilterValue,
  type GalleryItem,
} from "@/lib/gallery-data";
import { Lightbox } from "./lightbox";

const PAGE_SIZE = 8;

const sizeClasses: Record<GalleryItem["size"], string> = {
  large: "sm:col-span-2 sm:row-span-2",
  medium: "sm:col-span-2 sm:row-span-1",
  small: "sm:col-span-1 sm:row-span-1",
};

export function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleFilterChange = (value: FilterValue) => {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-[#0B1E3D] sm:text-3xl">
          📷 Photo Gallery
        </h2>
        <p className="mt-3 text-sm text-[#1F2A3C]/70 sm:text-base">
          Moments captured by our guests.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Filter photos by category"
        className="mb-10 flex flex-wrap items-center justify-center gap-2.5"
      >
        {filterCategories.map((filter) => {
          const isActive = filter.value === activeFilter;
          return (
            <button
              key={filter.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleFilterChange(filter.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-[#0B1E3D] text-white shadow-sm"
                  : "bg-[#FBF9F4] text-[#1F2A3C]/70 hover:bg-[#0B1E3D]/5"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4 sm:gap-4">
        {visibleItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open photo: ${item.title}`}
            className={`group relative overflow-hidden rounded-2xl bg-[#0B1E3D]/5 ${sizeClasses[item.size]}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              loading="lazy"
              className="object-cover transition duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-[#0B1E3D]/0 to-transparent opacity-80 transition group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-left text-sm font-medium text-white">
              <span aria-hidden="true">{item.icon}</span>
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full border border-[#0B1E3D]/15 px-6 py-3 text-sm font-semibold text-[#0B1E3D] transition hover:bg-[#0B1E3D] hover:text-white"
          >
            Load More Photos ↓
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={visibleItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
