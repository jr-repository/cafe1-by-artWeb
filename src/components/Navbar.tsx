
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white bg-opacity-90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <Coffee className="h-7 w-7 text-cafe-700" />
            <span className="font-serif text-xl font-semibold text-cafe-950">Aroma Nusantara - by artWeb.</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink 
              to="/" 
              className={({isActive}) => `px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive 
                  ? 'text-cafe-900 bg-cafe-100' 
                  : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
              }`}
            >
              Beranda
            </NavLink>
            <NavLink 
              to="/menu" 
              className={({isActive}) => `px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive 
                  ? 'text-cafe-900 bg-cafe-100' 
                  : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
              }`}
            >
              Menu
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive 
                  ? 'text-cafe-900 bg-cafe-100' 
                  : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
              }`}
            >
              Tentang Kami
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => `px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive 
                  ? 'text-cafe-900 bg-cafe-100' 
                  : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
              }`}
            >
              Kontak
            </NavLink>
            <a 
              href="tel:+6281234567890" 
              className="ml-2 btn-primary flex items-center gap-1.5"
            >
              Pesan Meja
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-cafe-900 p-2"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <NavLink 
            to="/" 
            className={({isActive}) => `px-3 py-4 rounded-lg transition-all text-lg font-medium ${
              isActive 
                ? 'text-cafe-900 bg-cafe-100' 
                : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
            }`}
          >
            Beranda
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({isActive}) => `px-3 py-4 rounded-lg transition-all text-lg font-medium ${
              isActive 
                ? 'text-cafe-900 bg-cafe-100' 
                : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
            }`}
          >
            Menu
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => `px-3 py-4 rounded-lg transition-all text-lg font-medium ${
              isActive 
                ? 'text-cafe-900 bg-cafe-100' 
                : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
            }`}
          >
            Tentang Kami
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `px-3 py-4 rounded-lg transition-all text-lg font-medium ${
              isActive 
                ? 'text-cafe-900 bg-cafe-100' 
                : 'text-cafe-700 hover:text-cafe-900 hover:bg-cafe-50'
            }`}
          >
            Kontak
          </NavLink>
          <a 
            href="tel:+6281234567890" 
            className="btn-primary text-center text-lg py-4 mt-4"
          >
            Pesan Meja
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
