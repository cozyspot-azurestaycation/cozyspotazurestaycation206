import Image from "next/image";

const gridShots = [
  {
    src: "/images/space/02-billiards-lounge.jpg",
    alt: "Billiards table set up for a game in the unit's lounge area, with resort views through the balcony",
  },
  {
    src: "/images/space/03-bedroom-suite.jpg",
    alt: "Queen bedroom suite with plush blue and grey bedding, mirrored headboard wall, and ambient lighting",
  },
  {
    src: "/images/space/04-shower-bathroom.jpg",
    alt: "Modern rain shower with mosaic mirror tile wall and marble-look finishes",
  },
  {
    src: "/images/space/05-dining-setup.jpg",
    alt: "Elegant dining table set for four with fine glassware and fresh orchids",
  },
  {
    src: "/images/space/06-gaming-entertainment.jpg",
    alt: "Smart TV with PS4 gaming console and controller, plus board games available for guests",
  },
  {
    src: "/images/space/07-resort-pool-lagoon.jpg",
    alt: "Panoramic view of the resort's beach lagoon and pool surrounded by palm trees",
  },
];

export function SpaceShowcase() {
  return (
    <section id="stay" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="eyebrow">The Space</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-medium sm:text-4xl">
        A space that feels like home.
      </h2>

      {/* Hero photo — the balcony view of the resort's man-made beach,
          the single strongest selling point of this unit, so it leads. */}
      <div className="relative mt-10 h-[52vw] max-h-[520px] min-h-[280px] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/space/01-balcony-beach-view.jpg"
          alt="Private balcony overlooking the resort's man-made white sand beach and lagoon pool at Azure Urban Resort Residences"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
      <p className="mx-auto mt-5 max-w-sm text-center font-display text-xl text-ink/80">
        Wake up somewhere you actually want to stay.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {gridShots.map((shot) => (
          <div
            key={shot.src}
            className="relative h-56 overflow-hidden rounded-2xl"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Second feature photo — the lagoon/pool experience guests step out
          into, reinforcing the resort access beyond the unit itself. */}
      <div className="relative mt-10 h-[42vw] max-h-[420px] min-h-[240px] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/space/08-resort-pool-lagoon-alt.jpg"
          alt="Guests enjoying the resort's white sand lagoon pool with cabana seating"
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex flex-col items-center gap-4 text-center">
        <p className="font-display text-xl text-ink/80">Stay in. Relax. Enjoy.</p>
        <a href="#amenities" className="text-sm font-medium text-azure underline underline-offset-4">
          See everything included →
        </a>
      </div>
    </section>
  );
}
