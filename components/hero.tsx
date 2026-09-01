"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-ink">
      {/* Hero video.
          Two sources are provided so mobile gets a true portrait clip and
          desktop gets the landscape clip, matched by the `media` attribute
          (supported the same way <picture> handles responsive images).
          NOTE: the portrait mobile clip (public/videos/hero-mobile.mp4) is
          currently the same landscape file as a placeholder — swap it for
          the actual portrait export from the "Cozy Spot Balcony View" clip
          once that file is uploaded directly (Google Drive links can't be
          downloaded automatically). */}
      <video
        className={`absolute inset-0 h-full w-full animate-ken-burns object-cover transition-opacity duration-500 ${
          videoFailed ? "opacity-0" : "opacity-100"
        }`}
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
          src="/videos/hero-mobile.mp4"
          media="(max-width: 767px)"
          type="video/mp4"
        />
        <source src="/videos/hero_web.mp4" type="video/mp4" />
      </video>

      {/* Fallback background if video is unavailable */}
      {videoFailed && (
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,#2E5266_0%,#16283A_55%,#0E1B27_100%)]"
          aria-hidden="true"
        />
      )}

      {/* Dark overlay for text readability — stronger toward the bottom
          and on small screens, since that's where the video is busiest
          and where the CTAs/text sit. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20 sm:via-ink/50 sm:to-ink/10"
        aria-hidden="true"
      />

      {/* Hero content — extra bottom padding on mobile keeps the CTAs
          clear of the fixed sticky "Book Now" bar. */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-32 sm:pb-20">
        {/* Combined into a single <h1>: the small keyword-rich line
            (Azure Urban Resort, Parañaque · Private Staycation) plus the
            large stylized tagline. Previously the tagline alone was the
            H1 and carried no location/business keywords — this keeps the
            exact same visual look (two lines, same sizes/colors) but gives
            search engines and AI crawlers the actual keyword context in
            the page's single most important heading. */}
        <h1 className="max-w-3xl">
          <span className="eyebrow mb-5 block text-azure-soft drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            Azure Urban Resort, Parañaque · Private Staycation
          </span>
          <span className="block font-display text-[12vw] font-medium leading-[0.98] text-linen drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl">
            {siteConfig.tagline}
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-linen/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-base sm:text-linen/75">
          A comfortable private staycation space near the airport, designed
          for relaxation, quality time, and intimate celebrations. Perfect for
          couples, families, and small groups looking for a convenient place
          to stay and unwind.
        </p>

        {/* Call-to-action buttons — solid fill + a translucent-but-blurred
            outline button so both stay legible over any part of the video. */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="rounded-full bg-brass px-6 py-3 text-sm font-medium text-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-light hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-ink"
          >
            Check Availability
          </a>

          <a
            href="#stay"
            className="rounded-full border border-linen/70 bg-ink/30 px-6 py-3 text-sm font-medium text-linen backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-linen hover:bg-ink/50 focus:outline-none focus:ring-2 focus:ring-linen/40"
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
