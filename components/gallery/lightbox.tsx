"use client";

// components/gallery/lightbox.tsx

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery-data";

interface LightboxProps {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, activeIndex, onClose, onNavigate }: LightboxProps) {
  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [goPrev, goNext, onClose]);

  const item = items[activeIndex];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — photo ${activeIndex + 1} of ${items.length}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E3D]/95 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <div
        className="relative flex max-h-[80vh] w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[70vh] w-full">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            className="rounded-2xl object-contain"
            priority
          />
        </div>
        <p className="mt-4 text-center text-sm font-medium text-white/90">
          <span className="mr-1">{item.icon}</span>
          {item.title}
          <span className="ml-2 text-white/50">
            {activeIndex + 1} / {items.length}
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>
  );
}
