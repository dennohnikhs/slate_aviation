const imageSets = {
  home: [
    {
      src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop',
      alt: 'Aircraft on the runway at sunrise',
    },
    {
      src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=800&fit=crop',
      alt: 'Premium airport lounge interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&h=800&fit=crop',
      alt: 'Helicopter flying over a cityscape',
    },
  ],
  service: [
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=900&fit=crop',
      alt: 'Business jet parked on the apron',
    },
    {
      src: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1200&h=800&fit=crop',
      alt: 'Airport terminal and aircraft with ground crew',
    },
  ],
  location: [
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=900&fit=crop',
      alt: 'Aviation support destination scene',
    },
    {
      src: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Passenger boarding stairs beside aircraft',
    },
  ],
  support: [
    {
      src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&h=800&fit=crop',
      alt: 'Aircraft cabin and premium passenger seating',
    },
  ],
};

export default function VisualShowcase({ variant = 'home' }) {
  const images = imageSets[variant] || imageSets.home;

  return (
    <div className="grid gap-3">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {images.slice(1).map((image) => (
          <div key={image.src} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
