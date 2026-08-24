export function LocationSection() {
  const address =
    "Unit 206, Santorini Tower, Azure Urban Resort Residences, KM 16 W Service Rd, Parañaque, 1700 Metro Manila";

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Unit+206+Santorini+Tower+Azure+Urban+Resort+Residences+KM+16+W+Service+Rd+Paranaque+1700+Metro+Manila";

  return (
    <section
      id="location"
      className="bg-ink py-16 text-linen sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Framed location section */}
        <div className="relative rounded-[28px] border border-linen/30 p-2 sm:p-3">

          {/* Inner line */}
          <div className="relative rounded-[22px] border border-linen/10 px-6 py-12 sm:px-10 sm:py-16 lg:px-14">

            {/* Heading */}
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
                Find Us
              </p>

              <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight text-linen sm:text-5xl">
                Your Cozy Spot in Parañaque.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-linen/60 sm:text-base">
                Cozy Spot is a private staycation accommodation located inside
                Azure Urban Resort Residences in Parañaque, Metro Manila.
              </p>
            </div>

            {/* Main content */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">

              {/* Address card */}
              <div className="rounded-2xl border border-linen/15 bg-linen/[0.03] p-7 sm:p-9">

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass">
                  Cozy Spot
                </p>

                <h3 className="mt-5 font-display text-2xl font-medium text-linen sm:text-3xl">
                  Azure Urban Resort Residences
                </h3>

                <p className="mt-2 text-sm text-linen/55">
                  Santorini Tower · Unit 206
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-linen/15" />

                <p className="max-w-lg text-sm leading-relaxed text-linen/75">
                  {address}
                </p>

                {/* Contact */}
                <div className="mt-7 border-t border-linen/10 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-linen/40">
                    Contact
                  </p>

                  <a
                    href="tel:+639983639683"
                    className="mt-2 inline-block text-sm font-medium text-linen underline decoration-linen/30 underline-offset-4 transition-colors hover:text-brass"
                  >
                    0998 363 9683
                  </a>
                </div>

                {/* Directions */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full border border-linen/30 px-6 py-3 text-sm font-medium text-linen transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:text-brass"
                >
                  Get Directions →
                </a>
              </div>

              {/* Map-style visual */}
              <div
                role="img"
                aria-label="Location of Cozy Spot at Azure Urban Resort Residences in Parañaque"
                className="relative min-h-[320px] overflow-hidden rounded-2xl border border-linen/15 bg-[#10283A]"
              >

                {/* Map grid */}
                <div
                  className="absolute inset-0 opacity-30"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(239,234,224,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(239,234,224,0.08) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />

                {/* Decorative roads */}
                <div
                  className="absolute left-[-20%] top-[45%] h-px w-[140%] rotate-[-12deg] bg-linen/10"
                  aria-hidden="true"
                />

                <div
                  className="absolute left-[-20%] top-[65%] h-px w-[140%] rotate-[8deg] bg-linen/10"
                  aria-hidden="true"
                />

                <div
                  className="absolute left-[55%] top-[-20%] h-[140%] w-px rotate-[18deg] bg-linen/10"
                  aria-hidden="true"
                />

                {/* Location marker */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-linen/40 bg-ink shadow-xl">
                    <svg
                      width="24"
                      height="24"
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

                  <div className="mt-5 rounded-xl border border-linen/10 bg-ink/90 px-5 py-4 shadow-xl backdrop-blur-sm">
                    <p className="font-display text-lg font-medium text-linen">
                      Cozy Spot
                    </p>

                    <p className="mt-1 text-xs text-linen/60">
                      Unit 206 · Santorini Tower
                    </p>

                    <p className="mt-1 text-xs text-linen/45">
                      Azure Urban Resort Residences
                    </p>

                    <p className="mt-1 text-xs text-linen/45">
                      Parañaque, Metro Manila
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom information */}
            <div className="mt-10 flex flex-col gap-3 border-t border-linen/10 pt-6 text-xs text-linen/40 sm:flex-row sm:items-center sm:justify-between">
              <span>
                Azure Urban Resort Residences · Parañaque, Metro Manila
              </span>

              <span>
                Private staycation accommodation
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
