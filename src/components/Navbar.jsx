import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'EVENTS', path: '/events' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isTransparent = !isScrolled && !isMobileMenuOpen;
  const textColor = isTransparent ? 'text-white' : 'text-neutral-200';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-dark/90 backdrop-blur-md shadow-2xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/New folder/Rumilicious_Restaurant_logo.png" 
              alt="Rumilicious" 
              className={`h-8 md:h-10 transition-all duration-300`} 
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-xs font-bold tracking-[0.2em] transition-all duration-300 hover:text-primary-500 relative group ${
                    location.pathname === link.path ? 'text-primary-500' : textColor
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/contact" 
                className={`px-8 py-2.5 border transition-all duration-300 text-xs font-bold tracking-[0.2em] rounded-full ${
                  isTransparent 
                    ? 'border-white/30 text-white hover:bg-white hover:text-dark' 
                    : 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                }`}
              >
                RESERVE
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl shadow-2xl transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container-custom py-12 flex flex-col space-y-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-bold tracking-[0.2em] transition-colors duration-300 hover:text-primary-500 ${
                  location.pathname === link.path ? 'text-primary-500' : 'text-neutral-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-primary-500 text-white text-sm font-bold tracking-[0.2em] rounded-full hover:bg-primary-600 transition-all w-full text-center shadow-lg shadow-primary-500/20"
            >
              RESERVE A TABLE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
