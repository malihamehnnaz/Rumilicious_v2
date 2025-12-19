export default function Gallery() {
  const galleryImages = [
    "/New folder/Gemini_Generated_Image_ig7qsrig7qsrig7q.png",
    "/New folder/WhatsApp Imafge 2025-12-17 at 7.38.12 AM.jpeg",
    "/New folder/WhatsApp Image 2025-1gg2-17 at 8.00.48 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-1ggg7 at 8.00.49 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 7.38.10 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 7.38.12 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 8.00.46 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 8.00.47 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-19 at 9.35.59 AM.jpeg",
    "/New folder/g.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 7.38.14ff AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 7ff.38.13 AM.jpeg",
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 container-custom">
          <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Visual Journey</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Gallery</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-neutral-300 tracking-wide">
            A glimpse into our world of flavor and elegance.
          </p>
        </div>
      </section>

      <div className="py-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/50 cursor-pointer aspect-square">
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram CTA */}
      <section className="py-24 border-t border-neutral-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif text-white mb-8">Follow Our Story</h2>
          <a 
            href="#" 
            className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors text-lg tracking-widest uppercase font-bold"
          >
            <span className="mr-4">@rumilicious_restaurant</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
