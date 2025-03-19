
import { Coffee } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('revealed');
      }, 200 * (index + 1));
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        ref={parallaxRef}
      >
        <div className="absolute inset-0 bg-coffee-beans bg-cover bg-center" />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cafe-50/40 to-cream-50/80" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-40 pb-24 md:pt-48 md:pb-32 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="reveal-animation">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-cafe-800 bg-cafe-100 border border-cafe-200 text-sm font-medium">
              <Coffee className="w-4 h-4 mr-1.5" />
              Buka Setiap Hari 08.00 - 22.00 WIB
            </span>
          </div>
          
          <h1 className="heading-xl reveal-animation">
            Nikmati Sensasi Kopi <span className="text-cafe-700">Nusantara</span> dalam Setiap Tegukan
          </h1>
          
          <p className="text-lg md:text-xl text-cafe-700 max-w-2xl reveal-animation">
            Kopi premium asli Indonesia dengan cita rasa khas yang memikat, disajikan dengan suasana yang hangat dan nyaman.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal-animation">
            <Link to="/menu" className="btn-primary text-center">
              Lihat Menu Kami
            </Link>
            <Link to="/about" className="btn-secondary text-center">
              Tentang Kami
            </Link>
          </div>
        </div>
        
        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full reveal-animation">
          <div className="glass-dark p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 mb-4 bg-cafe-100 text-cafe-800 rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Biji Kopi Pilihan</h3>
            <p className="text-cafe-700">Kami memilih biji kopi terbaik dari berbagai daerah di Indonesia.</p>
          </div>
          
          <div className="glass-dark p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 mb-4 bg-cafe-100 text-cafe-800 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="m18 5-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8l-3-3Z"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                <path d="M12 14v4"/>
                <path d="M12 12v.01"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Resep Otentik</h3>
            <p className="text-cafe-700">Menggunakan resep tradisional yang dipadukan dengan teknik modern.</p>
          </div>
          
          <div className="glass-dark p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 mb-4 bg-cafe-100 text-cafe-800 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10"/>
                <path d="m15 9-6 6"/>
                <path d="m9 9 6 6"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Pengalaman Unik</h3>
            <p className="text-cafe-700">Suasana cafe yang nyaman dengan sentuhan budaya Nusantara.</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
          <span className="text-cafe-700 text-sm mb-2">Scroll ke bawah</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
