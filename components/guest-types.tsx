const guestTypes = [
  {
    number: "01",
    title: "Coming Home to Manila",
    detail:
      "Returning to the Philippines for a vacation? Cozy Spot gives OFWs and balikbayans a private, comfortable place to rest, reconnect with family, and enjoy their time back home.",
  },
  {
    number: "02",
    title: "Visiting Metro Manila",
    detail:
      "Exploring Manila for the first time or visiting family and friends? Enjoy a private stay in Parañaque at Azure Urban Resort Residences.",
  },
  {
    number: "03",
    title: "Short Stay",
    detail:
      "Perfect for weekend getaways, date nights, birthdays, anniversaries, quick breaks, and special occasions.",
  },
  {
    number: "04",
    title: "Extended Stay",
    detail:
      "Need more time in Metro Manila? Cozy Spot is designed for guests looking for a comfortable place to stay for a longer vacation, family visit, or extended trip.",
  },
];

export function GuestTypes() {
  return (
    <section className="bg-linen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow">Made For Your Stay</p>

        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl">
          A cozy stay, wherever you're coming from.
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">
          Whether you're coming home to Manila, visiting the Philippines,
          planning a quick getaway, or staying a little longer, Cozy Spot is
          a private space designed to feel comfortable from the moment you
          arrive.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-ink/10 pt-8 sm:grid-cols-2">
          {guestTypes.map((guest) => (
            <article key={guest.number}>
              <div className="flex items-start gap-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-brass">
                  {guest.number}
                </span>

                <div className="max-w-md">
                  <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                    {guest.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {guest.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6">
          <p className="text-xs leading-relaxed text-ink/45">
            Located at Azure Urban Resort Residences, Parañaque, Metro Manila —
            a convenient base for guests visiting the city and nearby areas.
          </p>
        </div>
      </div>
    </section>
  );
}
