// components/gallery/gallery-hero.tsx

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1E3D] px-6 py-24 text-center sm:py-32">
      {/* soft decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
          See It For Yourself
        </span>
        <h1 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Gallery
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base">
          Photos and videos from Cozy Spot Azure Staycation — a private
          escape in the heart of Parañaque.
        </p>
      </div>
    </section>
  );
}
