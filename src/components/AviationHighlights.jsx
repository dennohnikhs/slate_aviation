const highlightImages = [
  {
    src: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?w=1600&h=2000&fit=crop',
    alt: 'Passenger stairs beside a private jet',
    title: 'Passenger coordination',
    caption: 'Meet & greet and VIP movement with a polished arrival experience.',
  },
  {
    src: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1600&h=2000&fit=crop',
    alt: 'Airport ramp with aircraft and ground crew',
    title: 'Ground handling',
    caption: 'Operational support across Africa, with Kenya priority coverage.',
  },
  {
    src: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Helicopter landing on helipad',
    title: 'Helicopter movement',
    caption: 'Fast Kenya charter options for executive and mission travel.',
  },
];

export default function AviationHighlights() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">Aviation highlights</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Visual storytelling for premium aviation support.</h2>
        </div>
        <p className="max-w-2xl text-slate-300"></p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {highlightImages.map((image) => (
          <article key={image.title} className="card-shell group overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">{image.title}</p>
                <h3 className="mt-2 text-xl font-semibold">Slate Aviation Services Africa</h3>
                <p className="mt-2 text-sm text-slate-200/90">{image.caption}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
