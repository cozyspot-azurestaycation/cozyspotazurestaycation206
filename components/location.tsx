export function LocationSection() {
  const address =
    "Unit 206, Santorini Tower, Azure Urban Resort Residences, KM 16 W Service Rd, Parañaque, 1700 Metro Manila";

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Unit+206+Santorini+Tower+Azure+Urban+Resort+Residences+KM+16+W+Service+Rd+Paranaque+1700+Metro+Manila";

  return (
    <section
      id="location"
      className="bg-linen-dark py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="eyebrow">Find Us</p>

          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            Your Cozy Spot in Parañaque.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">
            Cozy Spot is a private staycation accommodation located inside
            Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>
        </div>

        {/* Location content */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Address card */}
          <div className="rounded-2xl bg-cloud p-7 shadow-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
              Cozy Spot
            </p>

            <h3 className="mt-5 font-display text-2xl font-medium text-ink">
              Azure Urban Resort Residences
            </h3>

            <p className="mt-2 text-sm text-ink/55">
              Santorini Tower · Unit 206
            </p>

            <div className="mt-7 border-t border-ink/10 pt-6">
              <p className="text-sm leading-relaxed text-ink/70">
                {address}
              </p>
            </div>

            {/* Contact */}
            <div className="mt-6 border-t border-ink/10 pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/40">
                Contact
              </p>

              <a
                href="tel:+639983639683"
                className="mt-2 inline-block text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-brass"
              >
                0998 363 9683
              </a>
            </div>

            {/* Directions */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-linen transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/90 hover:shadow-lg"
            >
              Get Directions →
            </a>
          </div>

          {/* Map / location visual */}
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-azure-mist/40">
            {/* Decorative map background */}
            <div
              className="absolute inset-0 opacity-50"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(22,40,58,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,40,58,0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Location marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-linen shadow-xl">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div className="mt-5 rounded-xl bg-cloud/95 px-5 py-4 shadow-card backdrop-blur-sm">
                <p className="font-display text-lg font-medium text-ink">
                  Cozy Spot
                </p>

                <p className="mt-1 text-xs text-ink/55">
                  Unit 206 · Santorini Tower
                </p>

                <p className="mt-1 text-xs text-ink/45">
                  Azure Urban Resort Residences
                </p>

                <p className="mt-1 text-xs text-ink/45">
                  Parañaque, Metro Manila
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location footer */}
        <div className="mt-8 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Azure Urban Resort Residences · Parañaque, Metro Manila
          </span>

          <span>
            Private staycation accommodation
          </span>
        </div>
      </div>
    </section>
  );
}
