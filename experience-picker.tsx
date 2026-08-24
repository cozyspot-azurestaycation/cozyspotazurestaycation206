const reasons = [
  { label: "Couples' Getaway", detail: "A quiet space, just for two.", glyph: "◐" },
  { label: "Birthday", detail: "Celebrate without leaving the city.", glyph: "✳" },
  { label: "Anniversary", detail: "Mark the year that's passed.", glyph: "∞" },
  { label: "Family Escape", detail: "Slow down, together.", glyph: "▢" },
  { label: "Just Need a Break", detail: "No plan required.", glyph: "⌒" },
];

export function ExperiencePicker() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <h2 className="max-w-md font-display text-3xl font-medium sm:text-4xl">
        What brings you here?
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {reasons.map((r) => (
          <div
            key={r.label}
            className="group flex flex-col justify-between rounded-2xl border border-ivory/10 bg-navy-light p-5 shadow-card transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="font-display text-2xl text-gold" aria-hidden="true">
              {r.glyph}
            </span>
            <div className="mt-6">
              <p className="text-sm font-medium text-ivory">{r.label}</p>
              <p className="mt-1 text-xs leading-snug text-ivory/55">{r.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
