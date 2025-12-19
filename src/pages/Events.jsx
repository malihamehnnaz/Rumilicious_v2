export default function Events() {
  const events = [
    {
      id: 1,
      title: "Christmas Lunch",
      date: "Dec 25",
      time: "12:00 PM - 4:00 PM",
      description: "Celebrate Christmas with a luxurious festive lunch at Rumilicious.",
      highlights: [
        "Entrée: Prawn Cocktail, Cauliflower",
        "Main: Roasted Turkey & Lamb Leg",
        "Roasted Seasonal Vegetables",
        "Dessert: Pavlova Sugar Candy floss"
      ],
      image: "/New folder/merry_christmas_with_red_balls_and_green_leaves_in_white_background_hd_merry_christmas.jpg",
      cta: "Call (02) 9211 7706"
    },
    {
      id: 2,
      title: "New Year’s Celebration",
      date: "Dec 31",
      time: "7:00 PM - Late",
      description: "Ring in the new year with a vibrant celebration and a spectacular festive menu.",
      highlights: [
        "Entrée: Prawn Cocktail, Cauliflower",
        "Main: Roasted Turkey & Lamb Leg",
        "Roasted Seasonal Vegetables",
        "Dessert: Pavlova Sugar Candy floss"
      ],
      image: "/New folder/20231231-MBTA_GCiL9v8XIAAQdGa - Copy.jpg",
      cta: "Call (02) 9211 7706"
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <main id="events" className="py-32 px-4">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-4 block uppercase">Calendar</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Upcoming Events</h2>
            <div className="w-24 h-px bg-primary-500/50 mx-auto"></div>
          </div>

          <div className="flex flex-col gap-16">
            {events.map((event, idx) => (
              <article key={event.id} className="bg-neutral-900/50 rounded-3xl border border-neutral-800/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 backdrop-blur-sm group">
                <div className="lg:col-span-5 h-80 lg:h-auto relative overflow-hidden bg-neutral-900">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute top-6 left-6 bg-primary-500 text-white text-xs px-4 py-2 rounded-full font-bold tracking-widest uppercase shadow-xl">
                    {event.date}
                  </div>
                  {event.price && (
                    <div className="absolute bottom-6 right-6 bg-dark/80 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full font-bold border border-neutral-700">
                      {event.price}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-primary-500 text-xs font-bold tracking-[0.2em] uppercase">
                        {event.time} • Rumilicious
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-400 text-lg font-light leading-relaxed mb-10 tracking-wide">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                        <p className="text-neutral-300 font-light">{h}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    <a 
                      href="tel:0292117706" 
                      className="inline-flex items-center px-10 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold shadow-xl shadow-primary-500/20"
                    >
                      Book Now
                    </a>
                    <a 
                      href="/contact" 
                      className="text-xs font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] border-b border-neutral-800 hover:border-primary-500 pb-1"
                    >
                      Inquire Privately
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Private Dining CTA */}
      <section className="py-32 bg-neutral-900/30 border-t border-neutral-900">
        <div className="container-custom text-center">
          <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Bespoke Experiences</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Private Dining & Events</h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 tracking-wide leading-relaxed">
            From intimate celebrations to corporate gatherings, we provide the perfect setting for your most important moments.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-12 py-5 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-500 uppercase tracking-[0.3em] text-xs font-bold rounded-full"
          >
            Request a Proposal
          </a>
        </div>
      </section>
    </div>
  );
}
