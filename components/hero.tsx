"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-ink">
      {/* Hero video */}
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

      {/* Fallback background if video is unavailable */}
      {videoFailed && (
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,#2E5266_0%,#16283A_55%,#0E1B27_100%)]"
          aria-hidden="true"
        />
      )}

      {/* Dark overlay for better text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:pb-20">
        <p className="eyebrow mb-5 text-azure-soft">
          Azure Urban Resort, Parañaque · Private Staycation
        </p>

        <h1 className="max-w-3xl font-display text-[13vw] font-medium leading-[0.98] text-linen sm:text-6xl md:text-7xl">
          {siteConfig.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-linen/75 sm:text-base">
          A comfortable private staycation space near the airport, designed
          for relaxation, quality time, and intimate celebrations. Perfect for
          couples, families, and small groups looking for a convenient place
          to stay and unwind.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="rounded-full bg-brass px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-ink"
          >
            Check Availability
          </a>

          <a
            href="#stay"
            className="rounded-full border border-linen/30 px-6 py-3 text-sm font-medium text-linen transition-all duration-300 hover:-translate-y-0.5 hover:border-linen/60 hover:bg-linen/5 focus:outline-none focus:ring-2 focus:ring-linen/40"
          >
            Explore the Space
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bob sm:block">
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
            stroke="#EFEAE0"
            strokeOpacity="0.5"
          />
          <circle
            cx="10"
            cy="9"
            r="2"
            fill="#EFEAE0"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}
