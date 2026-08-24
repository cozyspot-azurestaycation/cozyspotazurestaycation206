export function LocationSection() {
  const address =
    "Unit 206, Santorini Tower, Azure Urban Resort Residences, KM 16 W Service Rd, Parañaque, 1700 Metro Manila";

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Unit+206+Santorini+Tower+Azure+Urban+Resort+Residences+KM+16+W+Service+Rd+Paranaque+1700+Metro+Manila";

  const mapEmbedUrl =
    "https://www.google.com/maps?q=Azure+Urban+Resort+Residences,+Paranaque,+Metro+Manila&output=embed";

  return (
    <section
      id="location"
      className="bg-ink py-20 text-linen sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
            Find Us
          </p>

          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight text-linen sm:text-5xl">
            Your Cozy Spot in Parañaque.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-linen/65 sm:text-base">
            Cozy Spot is a private staycation accommodation located inside
            Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>
        </div>

        {/* Location content */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_0.75fr]">

          {/* LEFT — Address */}
          <div className="border-2 border-linen/90 p-7 sm:p-8 lg:p-9">

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-linen/70">
              COZY SPOT
            </p>

            <h3 className="mt-6 font-display text-2xl font-medium text-linen sm:text-3xl">
              Azure Urban Resort Residences
            </h3>

            <p className="mt-2 text-sm font-medium text-linen/80">
              Santorini Tower · Unit 206
            </p>

            <div className="my-8 h-px bg-linen/40" />

            <p className="max-w-xl text-sm leading-relaxed text-linen/80">
              {address}
            </p>

            {/* Contact */}
            <div className="mt-8 border-t border-linen/30 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-linen/50">
                CONTACT
              </p>

              <a
                href="tel:+639983639683"
                className="mt-3 inline-block text-base font-medium text-linen underline decoration-linen/40 underline-offset-4 transition-colors hover:text-brass"
              >
                0998 363 9683
              </a>
            </div>

            {/* Directions */}
            <div className="mt-10">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-linen transition-colors hover:text-brass"
              >
                Get Directions
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT — GOOGLE MAP */}
          <div className="relative flex items-center justify-center">

            <div
              className="relative aspect-square w-full max-w-[400px] overflow-hidden border-2 border-linen/90"
              aria-label="Google Maps location of Cozy Spot at Azure Urban Resort Residences"
            >

              {/* Google Maps background */}
              <iframe
                src={mapEmbedUrl}
                title="Cozy Spot location at Azure Urban Resort Residences"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Dark overlay for premium look */}
              <div
                className="pointer-events-none absolute inset-0 bg-ink/10"
                aria-hidden="true"
              />

              {/* Cozy Spot location card */}
              <div className="absolute bottom-5 left-5 right-5 border border-linen/30 bg-ink/90 p-5 text-center shadow-xl backdrop-blur-sm">

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-brass">
                  COZY SPOT
                </p>

                <h3 className="mt-2 font-display text-xl font-medium text-linen">
                  Azure Urban Resort Residences
                </h3>

                <p className="mt-1 text-xs text-linen/70">
                  Unit 206 · Santorini Tower
                </p>

                <p className="mt-1 text-xs text-linen/60">
                  Parañaque, Metro Manila
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-10 border-t border-linen/20 pt-6">
          <div className="flex flex-col gap-2 text-xs text-linen/40 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Azure Urban Resort Residences · Parañaque, Metro Manila
            </span>

            <span>
              Private staycation accommodation
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
