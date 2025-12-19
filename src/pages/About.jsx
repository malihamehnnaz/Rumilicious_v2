export default function About() {
  const values = [
    { 
      title: 'Quality First', 
      description: 'We never compromise on the quality of our ingredients or the excellence of our service.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800'
    },
    { 
      title: 'Innovation', 
      description: 'Constantly evolving our menu and techniques to bring you fresh, exciting flavors.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800'
    },
    { 
      title: 'Community', 
      description: 'Building lasting relationships with our customers, suppliers, and local community.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800'
    },
    { 
      title: 'Sustainability', 
      description: 'Committed to environmentally responsible practices and supporting local farmers.',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800'
    },
  ];

  const team = [
    { 
      name: 'Michael Anderson', 
      role: 'Executive Chef', 
      bio: 'With over 15 years of culinary expertise in Michelin-starred kitchens.',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800'
    },
    { 
      name: 'Sarah Williams', 
      role: 'General Manager', 
      bio: 'Dedicated to creating exceptional guest experiences with warmth and grace.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800'
    },
    { 
      name: 'David Kim', 
      role: 'Head Sommelier', 
      bio: 'Curating our extensive wine list to perfectly pair with every dish.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800'
    },
  ];

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074" 
            alt="Kitchen Team" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
        </div>
        <div className="relative z-10 text-center text-white container-custom max-w-4xl px-4">
          <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Our Heritage</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Our Story</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-neutral-300 tracking-wide">
            A passion for culinary excellence and a commitment to unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-bold tracking-[0.3em] text-primary-500 mb-6 block uppercase">The Beginning</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-white leading-tight">From Humble Roots to Culinary Destination</h2>
              <div className="prose prose-invert prose-lg text-neutral-400 font-light tracking-wide">
                <p className="mb-8 leading-relaxed">
                  Rumilicious was born from a simple yet powerful vision: to create a space where food brings people together. 
                  What started as an intimate family kitchen has evolved into a celebrated dining destination, yet our core 
                  philosophy remains unchanged.
                </p>
                <p className="mb-8 leading-relaxed">
                  We believe that every meal tells a story. Our chefs draw inspiration from global culinary traditions while 
                  honoring local ingredients, creating dishes that are both familiar and surprisingly new.
                </p>
                <p className="leading-relaxed">
                  Today, we continue to push the boundaries of flavor, service, and design, ensuring that every guest who 
                  walks through our doors leaves with a memory to cherish.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800/50">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-2/3 aspect-square bg-neutral-900 p-4 hidden md:block rounded-2xl border border-neutral-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800" 
                  alt="Chef Plating" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-neutral-900/30">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-4 block uppercase">Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">Our Values</h2>
            <div className="w-24 h-px bg-primary-500/50 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="group bg-neutral-900/50 p-10 rounded-2xl border border-neutral-800/50 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm">
                <div className="h-48 mb-8 overflow-hidden rounded-xl">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-primary-500 transition-colors">{value.title}</h3>
                <p className="text-neutral-400 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-4 block uppercase">Artisans</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">Meet The Team</h2>
            <p className="text-xl text-neutral-400 font-light tracking-wide">The talented individuals behind every experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="aspect-[3/4] mb-8 overflow-hidden relative rounded-2xl border border-neutral-800/50">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-primary-500 font-bold tracking-[0.2em] text-xs uppercase mb-4">{member.role}</p>
                <p className="text-neutral-400 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
