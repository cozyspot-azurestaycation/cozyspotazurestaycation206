import Image from "next/image";

const gridShots = [
  {
    src: "/images/space/02-billiards-lounge.jpg",
    alt: "Billiards table set up for a game in the unit's lounge area, with resort views through the balcony",
    width: 960,
    height: 1280,
    // Portrait 3:4 source, but it sits next to square photos in the
    // grid and was sticking out taller than the rest. Crop it to a
    // square from the top so it lines up — the pool table and balls
    // (the interesting part) are toward the bottom of the shot, so
    // that's what stays in frame.
    cropSquare: true,
  },
  {
    src: "/images/space/08-resort-pool-lagoon-alt.jpg",
    alt: "Queen bedroom suite with plush blue and grey bedding, mirrored headboard wall, and ambient lighting",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/space/04-shower-bathroom.jpg",
    alt: "Modern rain shower with mosaic mirror tile wall and marble-look finishes",
    width: 1080,
    height: 1440,
  },
  {
    src: "/images/space/05-dining-setup.jpg",
    alt: "Elegant dining table set for four with fine glassware and fresh orchids",
    width: 1080,
    height: 1440,
  },
  {
    src: "/images/space/06-gaming-entertainment.jpg",
    alt: "Smart TV with PS4 gaming console and controller, plus board games available for guests",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/space/01-balcony-beach-view.jpg",
    alt: "Private balcony seating area with wicker chairs and a bistro table overlooking the resort",
    width: 1080,
    height: 1080,
  },
];

export function SpaceShowcase() {
  return (
    <section id="stay" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="eyebrow">The Space</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl font-medium sm:text-4xl">
        A space that feels like home.
      </h2>

      {/* Hero photo — the resort's beach lagoon and pool, the single
          strongest selling point of the property, so it leads.
          Full-width landscape banner. */}
      <div className="relative mt-10 h-[45vw] max-h-[480px] min-h-[260px] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/space/07-resort-pool-lagoon.jpg"
          alt="Panoramic view of the resort's man-made white sand beach and lagoon pool surrounded by palm trees"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
      <p className="mx-auto mt-5 max-w-sm text-center font-display text-xl text-ink/80">
        Wake up somewhere you actually want to stay.
      </p>

      {/* Masonry-style columns instead of a fixed-height grid: these
          photos are a mix of portrait and landscape shots, so each one
          is shown at its own natural aspect ratio (no object-cover
          crop) and the columns just pack around whatever height that
          gives it. */}
      <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3">
        {gridShots.map((shot) =>
          shot.cropSquare ? (
            <div
              key={shot.src}
              className="relative mb-3 aspect-square overflow-hidden rounded-2xl break-inside-avoid"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-bottom"
              />
            </div>
          ) : (
            <div
              key={shot.src}
              className="mb-3 overflow-hidden rounded-2xl break-inside-avoid"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full"
              />
            </div>
          )
        )}
      </div>

      {/* Second feature photo — the balcony view of the resort's pool
          and towers, reinforcing the outdoor space guests step into.
          Full-width landscape banner (source is portrait, so this
          crops in on the middle of the shot to fill a wide frame). */}
      <div className="relative mt-10 h-[45vw] max-h-[480px] min-h-[260px] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images/space/03-bedroom-suite.jpg"
          alt="View from the private balcony over the resort's pool, beach area, and towers"
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

