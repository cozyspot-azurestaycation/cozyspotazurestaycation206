const experiences = [
  { title: "Movie Night", detail: "Streaming-ready TV in a comfortable, low-lit space." },
  { title: "Pool Day", detail: "Access to the property's pool, weather permitting." },
  { title: "Date Night", detail: "A private space built for two, not a shared lobby." },
  { title: "Birthday", detail: "Room to set up, decorate, and celebrate without rushing." },
  { title: "Family Time", detail: "Enough space to relax together, kitchen included." },
  { title: "Work From Elsewhere", detail: "Wi-Fi and a quiet desk corner, if you need to log on." },
];

export function Amenities() {
  return (
    <section id="experiences" className="bg-navy-mid py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow">Included</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-medium sm:text-4xl">
          Everything you need for a cozy day in.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ivory/10 sm:grid-cols-2 md:grid-cols-3">
          {experiences.map((e) => (
            <div key={e.title} className="bg-navy-mid p-7">
              <h3 className="font-display text-lg font-medium text-ivory">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
