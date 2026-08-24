const reasons = [
  {
    label: "Couples' Getaway",
    detail: "A private space to reconnect, relax, and enjoy time together.",
    glyph: "◐",
  },
  {
    label: "Birthday Celebration",
    detail: "Celebrate somewhere private, comfortable, and memorable.",
    glyph: "✳",
  },
  {
    label: "Anniversary",
    detail: "Make your special day feel a little more special.",
    glyph: "∞",
  },
  {
    label: "Family Stay",
    detail: "Spend quality time together without going far.",
    glyph: "▢",
  },
  {
    label: "Just Need a Break",
    detail: "Slow down, switch off, and simply enjoy your stay.",
    glyph: "⌒",
  },
];

export function ExperiencePicker() {
  return (
    <section
      id="experiences"
      className="mx-auto max-w-6xl px-5 py-20 sm:py-28"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-brass">
          Find Your Stay
        </p>

        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl">
          What brings you to Cozy Spot?
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">
          Whether you're planning a couples' getaway, celebrating a special
          occasion, spending time with family, or simply need a break, Cozy
          Spot is a comfortable private space made for meaningful moments.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {reasons.map((r) => (
          <a
            key={r.label}
            href="#book"
            className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-ink/8 bg-cloud p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brass/40"
          >
            <div className="flex items-start justify-between">
              <span
                className="font-display text-2xl text-brass transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                {r.glyph}
              </span>

              <span
                className="text-sm text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brass"
                aria-hidden="true"
              >
                →
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-ink">
                {r.label}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-ink/55">
                {r.detail}
              </p>

              <span className="mt-4 block text-[10px] font-medium uppercase tracking-[0.18em] text-brass opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Check availability
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
