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
      className="bg-ink py-12 text-linen sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
            Find Us
          </p>

          <h2 className="mt-2 max-w-xl font-display text-3xl font-medium leading-tight text-linen sm:text-4xl">
            Your Cozy Spot in Parañaque.
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-linen/60">
            Cozy Spot is a private staycation accommodation located inside
            Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>
        </div>

        {/* Location */}
        <div className="mt-6 grid grid-cols-1 items-center gap-4 md:grid-cols-[1.3fr_0.7fr]">

          {/* LEFT — Address */}
          <div className="border-2 border-linen/90 p-5 sm:p-6">

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-linen/65">
              COZY SPOT
            </p>

            <h3 className="mt-2 font-display text-2xl font-medium text-linen">
              Azure Urban Resort Residences
            </h3>

            <p className="mt-1 text-sm text-linen/75">
              Santorini Tower · Unit 206
            </p>

            {/* Line */}
            <div className="my-4 h-px bg-linen/30" />

            <p className="max-w-xl text-sm leading-relaxed text-linen/75">
              {address}
            </p>

            {/* Contact */}
            <div className="mt-4 border-t border-linen/20 pt-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-linen/40">
                CONTACT
              </p>

              <a
                href="tel:+639983639683"
                className="mt-1 inline-block text-sm font-medium text-linen underline decoration-linen/30 underline-offset-4 hover:text-brass"
              >
                0998 363 9683
              </a>
            </div>

            {/* Directions */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-linen transition-colors hover:text-brass"
            >
              Get Directions →
            </a>
          </div>

          {/* RIGHT — SMALL GOOGLE MAP */}
          <div className="flex justify-center md:justify-end">

            <div
              className="relative h-[240px] w-[240px] overflow-hidden border-2 border-linen/90 sm:h-[260px] sm:w-[260px]"
              aria-label="Google Maps location of Cozy Spot at Azure Urban Resort Residences"
            >

              {/* Google Maps */}
              <iframe
                src={mapEmbedUrl}
                title="Cozy Spot location at Azure Urban Resort Residences"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Simple location label — NO BLUR */}
              <div className="absolute bottom-2 left-2 right-2 border border-linen/40 bg-ink/90 px-2 py-2 text-center">

                <p className="font-display text-sm font-medium text-linen">
                  Cozy Spot
                </p>

                <p className="mt-0.5 text-[10px] text-linen/70">
                  Unit 206 · Santorini Tower
                </p>

                <p className="text-[10px] text-linen/60">
                  Azure Urban Resort Residences
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-5 border-t border-linen/15 pt-3">
          <div className="flex flex-col gap-1 text-[11px] text-linen/35 sm:flex-row sm:items-center sm:justify-between">
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
