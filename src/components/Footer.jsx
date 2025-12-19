import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-10 pb-6 border-t border-white/10">
      <div className="container-custom mx-auto px-6">
        {/* Brand & Social Section */}
        <div className="flex flex-col items-center text-center mb-8 space-y-4">
          <Link to="/" className="inline-block">
            <img src="/New folder/Rumilicious_Restaurant_logo.png" alt="Rumilicious" className="h-10 opacity-100" />
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl font-light tracking-wide">
            Experience the art of fine dining where tradition meets modern elegance. Join us for an unforgettable culinary journey.
          </p>
          <div className="flex space-x-4 pt-1">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-500 group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=100092378079086" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-500 group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.954 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Info Grid - 3 Columns Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8 border-y border-white/5 py-6">
          <div>
            <h4 className="text-primary-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Location</h4>
            <address className="not-italic text-white font-serif text-lg leading-relaxed">
              Shop 120-122, 26-32 Pirrama Road<br/>
              Pyrmont NSW 2009
            </address>
          </div>
          
          <div>
            <h4 className="text-primary-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Hours</h4>
            <div className="text-white font-serif text-lg space-y-1">
              <p>Tue - Sat: 7:00 am – 10:00 pm</p>
              <p>Sunday: 8:00 am – 5:00 pm</p>
              <p className="text-neutral-500 text-[10px] uppercase tracking-widest mt-2">Monday: Closed</p>
            </div>
          </div>

          <div>
            <h4 className="text-primary-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Contact</h4>
            <div className="text-white font-serif text-lg space-y-1">
              <a href="mailto:rumilicious@gmail.com" className="block hover:text-primary-500 transition-colors">rumilicious@gmail.com</a>
              <a href="tel:0292117706" className="block hover:text-primary-500 transition-colors">(02) 9211 7706</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-[9px] uppercase tracking-[0.2em]">
          <p>&copy; {currentYear} Rumilicious. Crafted with passion.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
