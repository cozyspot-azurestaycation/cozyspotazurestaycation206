import { siteConfig } from "@/lib/site-config";

export function LocationSection() {
  const address = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.postalCode} ${siteConfig.address.addressRegion}`;

  // Both URLs point at the specific "Cozy Spot Azure Staycation" Google
  // Maps listing (via its CID), not a generic address search — this is
  // what keeps the embed to a single pin instead of showing every
  // nearby tower/unit that matches a text search.
  const mapsUrl = "https://www.google.com/maps?cid=5497069179321338430";

  const mapEmbedUrl =
    "https://www.google.com/maps?cid=5497069179321338430&output=embed";

  return (
    <section id="location" className="bg-ink py-20 text-linen sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">Find Us</p>

          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-linen sm:text-4xl">
            Your Cozy Spot in Parañaque.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-linen/60 sm:text-base">
            Cozy Spot is a private staycation accommodation located inside
            Azure Urban Resort Residences in Parañaque, Metro Manila.
          </p>
        </div>

        {/* Location — one cohesive card, consistent rounded-2xl + shadow-card
            treatment used everywhere else on the site (rather than the
            small overlapping map thumbnail this section used to have). */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-linen/15 bg-ink-light shadow-card md:grid md:grid-cols-[1.1fr_1fr]">
          {/* LEFT — Address */}
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-linen/50">
              Cozy Spot
            </p>

            <h3 className="mt-2 font-display text-2xl font-medium text-linen">
              Azure Urban Resort Residences
            </h3>

            <p className="mt-1 text-sm text-linen/75">
              Santorini Tower · Unit 206 · {siteConfig.address.floorAndView}
            </p>

            <div className="my-5 h-px bg-linen/15" />

            <p className="max-w-sm text-sm leading-relaxed text-linen/75">
              {address}
            </p>

            <div className="mt-5 border-t border-linen/15 pt-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-linen/40">
                Contact
              </p>

              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="mt-1 inline-block text-sm font-medium text-linen underline decoration-linen/30 underline-offset-4 hover:text-brass"
              >
                {siteConfig.phone}
              </a>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-light"
            >
              Get Directions →
            </a>
          </div>

          {/* RIGHT — Map, filling its half of the card edge-to-edge */}
          <div className="relative h-[280px] border-t border-linen/15 md:h-auto md:min-h-[320px] md:border-l md:border-t-0">
            <iframe
              src={mapEmbedUrl}
              title="Cozy Spot location at Azure Urban Resort Residences"
              className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-5 border-t border-linen/15 pt-3">
          <div className="flex flex-col gap-1 text-[11px] text-linen/35 sm:flex-row sm:items-center sm:justify-between">
            <span>Azure Urban Resort Residences · Parañaque, Metro Manila</span>
            <span>Private staycation accommodation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

