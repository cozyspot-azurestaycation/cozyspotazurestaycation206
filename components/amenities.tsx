const experiences = [
  {
    title: "Movie Night",
    detail: "Streaming-ready TV in a comfortable, low-lit space.",
  },
  {
    title: "Pool Day",
    detail: "Access to the property's pool, weather permitting.",
  },
  {
    title: "Date Night",
    detail: "A private space built for two, not a shared lobby.",
  },
  {
    title: "Birthday",
    detail: "Room to set up, decorate, and celebrate without rushing.",
  },
  {
    title: "Family Time",
    detail: "Enough space to relax together, with a kitchen included.",
  },
  {
    title: "Work From Elsewhere",
    detail: "Wi-Fi and a quiet desk corner, if you need to log on.",
  },
];

export function Amenities() {
  return (
    <section
      id="included"
      className="bg-ink py-20 text-linen sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow text-azure-soft">
            Included With Your Stay
          </p>

          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            Everything you need for a cozy day in.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-linen/60 sm:text-base">
            At Cozy Spot, your stay is designed around comfort, privacy, and
            quality time. Whether you're staying in for the day or making
            memories together, there's space to enjoy the moment your way.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-linen/10 sm:grid-cols-2 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="group bg-ink p-7 transition-colors duration-300 hover:bg-linen/[0.04]"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-brass/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 font-display text-lg font-medium text-linen">
                {experience.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-linen/60">
                {experience.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-linen/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-linen/45">
            Cozy Spot is located at Azure Urban Resort Residences, Parañaque.
          </p>

          <a
            href="#book"
            className="text-sm font-medium text-brass underline underline-offset-4 transition-colors hover:text-brass-light"
          >
            Check availability →
          </a>
        </div>
      </div>
    </section>
  );
}
