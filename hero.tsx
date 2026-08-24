"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  // Until a real /public/videos/hero.mp4 exists, the <video> tag has no
  // playable source. Hide it on error so the gradient fallback shows
  // instead of an empty black box — remove this once real assets are in.
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-navy">
      {/*
        HERO VIDEO — replace the <source> below with your real clip once
        you have one:
          1. Drop an .mp4 (H.264, ~10–20s, muted-friendly, ideally <8MB)
             into /public/videos/hero.mp4
          2. Drop a matching first-frame still into /public/images/hero-poster.jpg
        Until then this renders on the `poster` image plus a slow zoom, so the
        page still looks intentional with zero assets.
      */}
      <video
        className={`absolute inset-0 h-full w-full animate-ken-burns object-cover transition-opacity duration-500 ${
          videoFailed ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        onError={() => setVideoFailed(true)}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback gradient shown until a real poster/video is added */}
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,#1D4058_0%,#0F2538_55%,#081420_100%)]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:pb-20">
        <p className="eyebrow mb-5">
          {siteConfig.address.addressLocality} · Private Staycation
        </p>
        <h1 className="max-w-xl font-display text-[13vw] font-medium leading-[0.98] text-ivory sm:text-6xl md:text-7xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/75">
          A comfortable private space designed for relaxed weekends, quality
          time, and little celebrations — booked directly, no surprises.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            Book Your Stay
          </a>
          <a
            href="#stay"
            className="rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:border-ivory/60"
          >
            Explore the Space
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bob sm:block">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="#F5F1E8" strokeOpacity="0.5" />
          <circle cx="10" cy="9" r="2" fill="#F5F1E8" fillOpacity="0.8" />
        </svg>
      </div>
    </section>
  );
}
