import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import philosophyBg from '../assets/philosophy-bg.jpg';
// import reviewsBg from '../assets/reviews-bg.jpg'; // Uncomment this line after adding the image file

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074" 
            alt="Chef Plating" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom opacity-90"
          />
          <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/80 pointer-events-none"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white w-full px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-bold tracking-[0.6em] text-primary-500 mb-8 block uppercase animate-fade-in-up">The Art of Gastronomy</span>
          <h1 className="text-7xl md:text-[10rem] font-serif font-bold mb-8 leading-none tracking-tighter animate-fade-in-up drop-shadow-[0_0_30px_rgba(197,160,40,0.3)] mx-auto" style={{ animationDelay: '0.2s' }}>
            RUMILICIOUS
          </h1>
          <p className="text-lg md:text-2xl mb-12 font-light max-w-3xl mx-auto leading-relaxed text-neutral-200 tracking-wide animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Where every ingredient tells a story and every plate is a masterpiece. Experience the pinnacle of Persian-inspired fine dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/menu" 
              className="group relative px-12 py-5 bg-primary-500 text-white text-xs font-bold tracking-[0.3em] rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-primary-500/20"
            >
              <span className="relative z-10">EXPLORE THE MENU</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link 
              to="/contact" 
              className="px-12 py-5 border border-white/30 text-white text-xs font-bold tracking-[0.3em] rounded-full hover:bg-white hover:text-dark transition-all hover:scale-105 backdrop-blur-md"
            >
              RESERVE A TABLE
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
          <div className="w-px h-24 bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 md:py-24 bg-dark overflow-hidden">
        <div className="container-custom max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Video Only - Full Size in Philosophy Section */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/5 animate-fade-in-up bg-dark">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                >
                  <source src="/New folder/WhatsApp Video 2025-12-19 at 9.35.01 AM.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Decorative Gold Ring */}
              <div className="absolute -top-12 -left-12 w-48 h-48 border border-primary-500/10 rounded-full animate-spin-slow"></div>
            </div>
            
            <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="text-xs font-bold tracking-[0.4em] text-primary-500 mb-8 block uppercase">Our Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white mb-10 italic">
                "A symphony of flavors, <br/>crafted with soul."
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-12 font-light tracking-wide">
                At Rumilicious, we believe dining is more than just a meal—it's a sensory journey. Our chefs blend ancient Persian traditions with modern culinary innovation, sourcing only the most exceptional local ingredients to create an unforgettable experience.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-6 text-primary-500 font-bold tracking-[0.3em] text-xs uppercase">
                <div className="w-12 h-px bg-primary-500 group-hover:w-20 transition-all duration-500"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Gallery Section */}
      <section className="py-20 bg-dark relative overflow-hidden border-t border-white/10">
        <div className="container-custom mb-16 text-center animate-fade-in-up">
          <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Visual Excellence</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">The Gallery</h2>
          <div className="w-24 h-px bg-primary-500/30 mx-auto"></div>
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/New folder/Gemini_Generated_Image_ig7qsrig7qsrig7q.png",
              "/New folder/WhatsApp Imafge 2025-12-17 at 7.38.12 AM.jpeg",
              "/New folder/WhatsApp Image 2025-1gg2-17 at 8.00.48 AM.jpeg",
              "/New folder/WhatsApp Image 2025-12-1ggg7 at 8.00.49 AM.jpeg"
            ].map((img, i) => (
              <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-all duration-500 hover:border-primary-500/50">
                <img 
                  src={img} 
                  alt={`Gallery ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/gallery" className="group relative inline-flex items-center gap-6 px-12 py-4 bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-[0.4em] rounded-full overflow-hidden transition-all hover:border-primary-500/50">
              <span className="relative z-10">EXPLORE FULL GALLERY</span>
              <div className="absolute inset-0 bg-primary-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

      {/* Events Sneak Peek Section */}
      <section className="pt-20 pb-0 bg-dark relative overflow-hidden border-t border-white/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="animate-fade-in-up">
              <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-6 block uppercase">Mark Your Calendar</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Upcoming Events</h2>
            </div>
            <Link to="/events" className="group flex items-center gap-4 text-primary-500 font-bold tracking-[0.3em] text-xs uppercase animate-fade-in-up">
              <span>VIEW ALL EVENTS</span>
              <div className="w-12 h-px bg-primary-500 group-hover:w-20 transition-all duration-500"></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Christmas Lunch",
                date: "DEC 25",
                image: "/New folder/merry_christmas_with_red_balls_and_green_leaves_in_white_background_hd_merry_christmas.jpg",
                desc: "A festive feast featuring traditional roasted turkey, ham, and seasonal delights."
              },
              {
                title: "New Year's Eve",
                date: "DEC 31",
                image: "/New folder/20231231-MBTA_GCiL9v8XIAAQdGa - Copy.jpg",
                desc: "Celebrate the arrival of 2026 with live music and a curated Persian-inspired menu."
              }
            ].map((event, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-dark/40 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-serif font-bold text-white group-hover:text-primary-500 transition-colors">{event.title}</h3>
                    <span className="text-primary-500 font-bold tracking-widest text-sm">{event.date}</span>
                  </div>
                  <p className="text-neutral-400 font-light leading-relaxed mb-8">{event.desc}</p>
                  <Link to="/events" className="inline-block px-8 py-3 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white hover:text-dark transition-all">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative pt-0 pb-20 overflow-hidden bg-dark">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074" 
            alt="Restaurant Ambience" 
            className="w-full h-full object-cover opacity-10 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
        </div>

        <div className="container-custom max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-xs font-bold tracking-[0.5em] text-primary-500 mb-4 block uppercase">Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Guest Experiences</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {[
              {
                title: "Fabulous restaurant",
                text: "OMG, sensational vegan Persian food and a hostess who just made us feel so welcome. From the to die for falafel to baked eggplant, Persian curries with rice... We will be back!",
                author: "Stefan",
                source: "Google Review",
                initial: "S",
                color: "bg-primary-500/10 text-primary-500"
              },
              {
                title: "Excellent food & service",
                text: "Carefully considered recommendations and adaptions for those with nut allergies and a beautiful sharing of cultural influences and history. Great coffee too!",
                author: "Cassandra",
                source: "Google Review",
                initial: "C",
                color: "bg-primary-500/10 text-primary-500"
              },
              {
                title: "Highly recommend",
                text: "This falafel stack is the most delicious thing I have ever had. I went there with colleagues and everyone loved what they called for. The presentation was on point, very impressive.",
                author: "Jinal",
                source: "Google Review",
                initial: "J",
                color: "bg-primary-500/10 text-primary-500"
              }
            ].map((review, index) => (
              <div 
                key={index} 
                className="group relative bg-neutral-900/40 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/5 hover:border-primary-500/30 transition-all duration-700 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-8 text-primary-500/10 text-8xl font-serif pointer-events-none">"</div>
                
                <div className="flex items-center gap-6 mb-10">
                  <div className={`w-16 h-16 rounded-2xl ${review.color} flex items-center justify-center font-serif font-bold text-2xl border border-primary-500/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500`}>
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg tracking-wide">{review.author}</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-[0.3em]">{review.source}</div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex gap-1 text-primary-500 text-xs mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold font-serif text-white mb-6 group-hover:text-primary-500 transition-colors">{review.title}</h4>
                  <p className="text-neutral-400 leading-relaxed italic font-light text-lg">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
