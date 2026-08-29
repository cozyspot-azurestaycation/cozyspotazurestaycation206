"use client";

// components/gallery/video-gallery.tsx

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { videoItems } from "@/lib/gallery-data";

export function VideoGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-[#0B1E3D] sm:text-3xl">
          🎬 Video Gallery
        </h2>
        <p className="mt-3 text-sm text-[#1F2A3C]/70 sm:text-base">
          Short videos of the Cozy Spot experience.
        </p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollBy("left")}
          aria-label="Scroll videos left"
          className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 text-[#0B1E3D] shadow-md transition hover:bg-[#0B1E3D] hover:text-white sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videoItems.map((item) => (
            <div
              key={item.id}
              className="group relative w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-[#0B1E3D]/5 sm:w-[320px]"
            >
              <div className="relative aspect-[9/12] w-full">
                {playingId === item.id ? (
                  <video
                    src={item.video}
                    controls
                    autoPlay
                    className="h-full w-full rounded-2xl object-cover"
                  />
                ) : (
                  <>
                    <Image
                      src={item.thumbnail}
                      alt={`${item.title} thumbnail`}
                      fill
                      sizes="320px"
                      loading="lazy"
                      className="object-cover transition duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0B1E3D]/35 transition group-hover:bg-[#0B1E3D]/50" />
                    <button
                      type="button"
                      onClick={() => setPlayingId(item.id)}
                      aria-label={`Play video: ${item.title}`}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0B1E3D] shadow-lg transition group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
                      </span>
                    </button>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between px-1 py-3">
                <span className="text-sm font-medium text-[#0B1E3D]">{item.title}</span>
                <span className="text-xs text-[#1F2A3C]/60">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollBy("right")}
          aria-label="Scroll videos right"
          className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 text-[#0B1E3D] shadow-md transition hover:bg-[#0B1E3D] hover:text-white sm:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
