/**
 * PHOTO PLACEHOLDERS
 * Each tile below is a CSS gradient standing in for a real photo so the
 * layout works with zero image assets. Swap each <PhotoTile> for a
 * `next/image` once you have real photography:
 *
 *   <Image src="/images/bedroom.jpg" alt="Bedroom with warm lighting"
 *          fill className="object-cover" />
 *
 * Keep descriptive alt text — it's a direct SEO + accessibility signal,
 * and it's what lets AI answer engines "see" the room from the HTML alone.
 */
function PhotoTile({
  label,
  gradient,
  className = "",
}: {
  label: string;
  gradient: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-2xl ${gradient} ${className}`}
    >
      <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest2 text-ivory/70">
        {label}
      </span>
    </div>
  );
}

const smallShots = [
  { label: "Living area", gradient: "bg-[linear-gradient(160deg,#1D4058,#16344A)]" },
  { label: "Dining nook", gradient: "bg-[linear-gradient(160deg,#16344A,#0F2538)]" },
  { label: "Kitchen essentials", gradient: "bg-[linear-gradient(160deg,#1D4058,#0F2538)]" },
];

export function SpaceShowcase() {
  return (
    <section id="stay" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="eyebrow">The Space</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-medium sm:text-4xl">
        A space that feels like home.
      </h2>

      <PhotoTile
        label="Bedroom — full-width feature photo"
        gradient="bg-[linear-gradient(135deg,#1D4058,#0F2538)]"
        className="mt-10 h-[52vw] max-h-[520px] min-h-[280px] w-full"
      />
      <p className="mx-auto mt-5 max-w-sm text-center font-display text-xl text-ivory/80">
        Wake up somewhere you actually want to stay.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {smallShots.map((s) => (
          <PhotoTile key={s.label} label={s.label} gradient={s.gradient} className="h-56" />
        ))}
      </div>

      <PhotoTile
        label="Lounge and pool access — feature photo"
        gradient="bg-[linear-gradient(135deg,#16344A,#0F2538)]"
        className="mt-10 h-[42vw] max-h-[420px] min-h-[240px] w-full"
      />
      <div className="mt-6 flex flex-col items-center gap-4 text-center">
        <p className="font-display text-xl text-ivory/80">Stay in. Relax. Enjoy.</p>
        <a href="#amenities" className="text-sm font-medium text-gold underline underline-offset-4">
          See everything included →
        </a>
      </div>
    </section>
  );
}
