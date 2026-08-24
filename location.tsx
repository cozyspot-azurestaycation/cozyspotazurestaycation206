import { siteConfig } from "@/lib/site-config";

// Replace with real, verified travel times once confirmed.
const nearby = [
  { time: "5 min", place: "Mall / shopping" },
  { time: "8 min", place: "Restaurants & cafés" },
  { time: "10 min", place: "Public transport" },
  { time: "15 min", place: "Airport" },
];

export function LocationSection() {
  return (
    <section id="location" className="bg-navy-mid py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow">Location</p>
        <h2 className="mt-3 max-w-md font-display text-3xl font-medium sm:text-4xl">
          Everything you need is nearby.
        </h2>
        <p className="mt-3 text-sm text-ivory/60">
          {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {nearby.map((n) => (
              <div key={n.place} className="rounded-2xl bg-navy-light p-5 shadow-card">
                <p className="font-display text-2xl text-gold">{n.time}</p>
                <p className="mt-1 text-xs text-ivory/60">{n.place}</p>
              </div>
            ))}
          </div>

          {/*
            Swap this placeholder for a real Google Maps embed once the
            exact address is finalized:
            <iframe src="https://www.google.com/maps/embed?pb=..." ... />
            Keeping an exact street pin out of the public page until then
            is intentional — see the trust section copy.
          */}
          <div
            role="img"
            aria-label="Map placeholder — add a Google Maps embed with the exact address"
            className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-ivory/20 bg-navy-light/60 md:h-auto"
          >
            <span className="font-mono text-xs uppercase tracking-widest2 text-ivory/40">
              Map embed goes here
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
