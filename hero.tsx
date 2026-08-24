"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-navy">

      {/* HERO VIDEO */}
      {!videoFailed && (
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source
            src="/videos/azure-staycation-beach-view.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* FALLBACK BACKGROUND */}
      {videoFailed && (
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(120%_120%_at_20%_0%,#1D4058_0%,#0F2538_55%,#081420_100%)]"
          aria-hidden="true"
        />
      )}

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-navy via-navy/40 to-navy/10"
        aria-hidden="true"
      />

      {/* HERO CONTENT */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:pb-20">

        <p className="eyebrow mb-5 text-azure-soft">
          Azure Urban Resort Residences · Parañaque
        </p>

        <h1 className="max-w-xl font-display text-[13vw] font-medium leading-[0.98] text-ivory sm:text-6xl md:text-7xl">
          {siteConfig.tagline}
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/75">
          Cozy Spot Azure is a private staycation space inside Azure Urban
          Resort Residences, Parañaque — designed for relaxation, quality
          time, intimate celebrations, and memorable getaways.
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

      {/* SCROLL CUE */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 animate-bob sm:block">
        <svg
          width="20"
          height="28"
          viewBox="0 0 20 28"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="1"
            width="18"
            height="26"
            rx="9"
            stroke="#F5F1E8"
            strokeOpacity="0.5"
          />

          <circle
            cx="10"
            cy="9"
            r="2"
            fill="#F5F1E8"
            fillOpacity="0.8"
          />
        </svg>
      </div>

    </section>
  );
}
