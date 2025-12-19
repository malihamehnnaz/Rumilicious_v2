export default function Menu() {
  const menuCategories = [
    {
      title: 'Breakfast Menu',
      layout: 'vertical',
      images: [
        "https://images.unsplash.com/photo-1533089862017-5614ec87e284?w=800&q=80",
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80"
      ],
      items: [
        {
          name: 'Classic Toast',
          description: 'Choice of Spread: Butter, Espresso Butter, Peanut Butter, Jam, Vegemite, Nutella, or Pistachio Spread',
          price: '$10'
        },
        {
          name: 'Bacon & Egg Roll',
          description: 'Chargrilled Bacon, Fried Egg on Milk Bun with Choice of Sauce',
          price: '$12'
        },
        {
          name: 'Eggs on Toast',
          description: 'Choice of Free Range Eggs on Toast: Scrambled / Fried / Poached',
          price: '$15'
        },
        {
          name: 'Omelette with Sourdough',
          description: 'Free Range Omelette on Sourdough. Add: Spinach / Kale / Onion / Cheese / Tomato (+$2), Mushroom / Bacon / Ham / Chorizo (+$4), Smoked Salmon (+$6)',
          price: '$18'
        },
        {
          name: 'Green Eggs',
          description: 'Scrambled Eggs on Sourdough with Avocado, Salsa Verde and Choice of: Smoked Salmon / Ham / Bacon / Haloumi',
          price: '$28'
        },
        {
          name: 'Shakshuka',
          description: 'Choice of: Lamb / Chicken / Chorizo / Ham / Haloumi / Falafel. Poached Free Range Eggs Simmered in a Rich, Spiced Capsicum, Tomato and Bell Pepper Sauce. Infused with Garlic, Cumin and Paprika. Served with Warm, Crusty Bread for Dipping',
          price: '$28'
        },
        {
          name: 'Big Breakfast',
          description: 'Choice of Eggs: Scrambled / Fried / Poached with Baked Beans, Thyme Mushrooms, Spinach, Chorizo, Hash Brown served with Sourdough Toast',
          price: '$28'
        }
      ]
    },
    {
      title: 'Lunch Menu',
      images: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
      ],
      items: [
        {
          name: 'Healthy Protein Bowl',
          description: 'Choose a Base: Brown Rice / Couscous. Choose a Protein: Grilled Chicken / Grilled Fish / Slow Cooked Lamb Shank / Falafel with Hummus / Grilled Tofu with Hummus. With Mixed Leaves, Cucumber, Avocado, Roasted Sweet Potato, Crispy Kale, Baked Beans',
          price: '$28'
        },
        {
          name: 'Falafel Stack',
          description: 'Homemade Falafel with Hummus, Grilled Eggplant, Roasted Sweet Potato, Grilled Capsicum, topped with Tahini and Pomegranate Dressing',
          price: '$30'
        },
        {
          name: 'Gozleme',
          description: 'With Hummus and Garlic Dip. Choice of: Lamb & Spinach / Chicken & Mushroom / Spinach & Feta Cheese',
          price: '$25'
        }
      ]
    },
    {
      title: 'Kebabs',
      layout: 'vertical',
      customHeight: 'h-[350px]',
      subtitle: 'Served with Rice or Salad. Tomato and Chilli on the side.',
      images: [
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
      ],
      items: [
        {
          name: 'Emperor',
          description: 'A Delicious Platter Containing an Assortment of Four Kebabs - Koobideh, Chopped Chicken, Lamb Cutlet, and Lamb Backstrap',
          price: '$125'
        },
        {
          name: 'Rumi Special',
          description: 'A Platter Containing Three of the Most Delicious Kebabs - Koobideh, Chicken, and Lamb Backstrap',
          price: '$57'
        },
        {
          name: 'Shahi Kebab',
          description: 'A Combination of One Skewer of Lamb Backstrap Kebab and Chicken Kebab',
          price: '$46'
        },
        {
          name: 'Lamb Cutlet',
          description: 'One Skewer of Lamb Cutlet',
          price: '$47'
        },
        {
          name: 'Jooje Ba Ostokhan',
          description: '800 grams Chopped Chicken',
          price: '$45'
        },
        {
          name: 'Koobideh Kebab',
          description: 'Two Skewers of Minced Lamb Kebab',
          price: '$28'
        }
      ]
    },
    {
      title: 'Pasta Menu',
      images: [
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800&q=80"
      ],
      items: [
        {
          name: 'Chilli Prawn Pasta',
          description: 'Linguine with Homemade Chilli Oil and Spinach',
          price: '$30'
        },
        {
          name: 'Lamb Pasta',
          description: 'Linguine with Slow Cooked Lamb, Napoletana Sauce and Olives',
          price: '$28'
        },
        {
          name: 'Steak Pasta',
          description: 'Spaghetti with Traditional Pesto Sauce and Striploin Steak',
          price: '$28'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80" 
            alt="Restaurant food"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 container-custom">
          <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Culinary Excellence</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Our Menu</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-neutral-300 tracking-wide mb-10">
            Experience culinary excellence with our carefully crafted dishes.
          </p>
          <a 
            href="/New folder/Rumilicious_FoodMenu_NOV25-V2.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold shadow-xl shadow-primary-500/20"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Menu
          </a>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-32 px-4 ${categoryIndex % 2 === 0 ? 'bg-dark' : 'bg-neutral-900/30'}`}>
          <div className="container-custom">
            {/* Category Title */}
            <div className="text-center mb-24 animate-fade-in-up">
              <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-4 block uppercase">Selection</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                {category.title}
              </h2>
              {category.subtitle && (
                <p className="text-lg text-neutral-400 italic mb-8 font-light tracking-wide">{category.subtitle}</p>
              )}
              <div className="w-24 h-px bg-primary-500/50 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Images Section - Alternating order based on index */}
              <div className={`grid ${category.layout === 'vertical' ? 'grid-cols-1' : 'grid-cols-2'} gap-6 animate-fade-in-up ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`} style={{ animationDelay: '0.2s' }}>
                {category.images.map((img, imgIndex) => (
                  <div key={imgIndex} className={`relative group overflow-hidden rounded-2xl ${category.layout === 'vertical' ? '' : (imgIndex === 0 ? 'mt-12' : '')}`}>
                    <img 
                      src={img} 
                      alt={`${category.title} ${imgIndex + 1}`}
                      className={`w-full ${category.customHeight ? category.customHeight : (category.layout === 'vertical' ? 'h-[500px]' : 'h-[400px]')} object-cover transform group-hover:scale-110 transition-transform duration-700`}
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Menu Items List */}
              <div className={`animate-fade-in-up ${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className="space-y-12">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="flex justify-between items-baseline mb-3">
                        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-primary-500 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex-grow mx-4 border-b border-neutral-800 border-dotted"></div>
                        <span className="text-xl font-bold text-primary-500">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-neutral-400 leading-relaxed font-light tracking-wide">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="relative py-40 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" 
            alt="Restaurant interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Reservations</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Experience the Art of Dining
          </h2>
          <p className="text-xl mb-12 text-neutral-300 font-light max-w-2xl mx-auto tracking-wide">
            Join us for an unforgettable culinary journey. Every dish tells a story of passion and excellence.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-primary-500/20"
          >
            Book Your Experience
          </a>
        </div>
      </section>
    </div>
  );
}
