
import { Coffee, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cafe-950 text-cream-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-7 w-7 text-cafe-300" />
              <span className="font-serif text-xl font-semibold text-white">Aroma Nusantara</span>
            </div>
            <p className="text-cream-200 text-sm">
              Menyajikan pengalaman kopi Indonesia terbaik dengan biji pilihan dan racikan otentik sejak 2018.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social media icons */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                  <path d="M13 12h3a5 5 0 0 0 5-5V4"/>
                  <path d="M21 12V4h-4"/>
                  <path d="M13 12v8"/>
                  <path d="M13 8c0-2.5-1-5-4-5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links section */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4">Halaman</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-300 hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream-300 hover:text-white transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-white transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-300 hover:text-white transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cafe-300 mt-0.5" />
                <span className="text-cream-300">
                  Jl. Mawar No. 123, Bandung, Jawa Barat, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cafe-300" />
                <a href="tel:+6281234567890" className="text-cream-300 hover:text-white transition-colors">
                  +62 812 3456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cafe-300" />
                <a href="mailto:info@aromanusantara.id" className="text-cream-300 hover:text-white transition-colors">
                  info@aromanusantara.id
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4">Jam Buka</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-cream-300">
                <span>Senin - Kamis</span>
                <span>08:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-cream-300">
                <span>Jumat - Sabtu</span>
                <span>08:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-cream-300">
                <span>Minggu</span>
                <span>09:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cafe-800 mt-12 pt-8 text-center text-cream-400 text-sm">
          <p>© {new Date().getFullYear()} Aroma Nusantara. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
