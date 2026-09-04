// components/gallery/gallery-cta.tsx
import { Sparkles } from "lucide-react";
import Link from "next/link";
export function GalleryCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-[#0B1E3D] px-6 py-16 text-center sm:px-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl"
        />
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227]/15 text-[#C9A227]">
          <Sparkles className="h-6 w-6" />
        </span>
        <h2 className="mx-auto mt-6 max-w-xl font-serif text-2xl font-semibold text-white sm:text-4xl">
          Create Your Own Memories
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          From romantic weekends and family bonding to birthdays and special
          celebrations, we&apos;re here to make every moment cozy and
          unforgettable.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#book"
            className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-7 py-3 text-sm font-semibold text-[#0B1E3D] transition hover:bg-[#dab948]"
          >
            Book Your Stay
          </Link>
          <Link
            href="/amenities"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A227]/60 px-7 py-3 text-sm font-semibold text-[#C9A227] transition hover:bg-[#C9A227]/10"
          >
            View Our Amenities
          </Link>
        </div>
      </div>
    </section>
  );
}
