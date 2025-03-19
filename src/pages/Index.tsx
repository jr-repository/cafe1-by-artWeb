
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal-animation');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop"
                alt="Barista brewing coffee" 
                className="rounded-xl w-full shadow-lg reveal-animation"
              />
            
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cafe-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cafe-200 rounded-lg z-0"></div>
            </div>
            
            <div className="space-y-6 md:pl-6">
              <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Tentang Kami</span>
              <h2 className="heading-lg reveal-animation">Cerita Dibalik Secangkir Kopi Kami</h2>
              <p className="text-cafe-700 reveal-animation">
                Aroma Nusantara berdiri pada tahun 2018 dengan visi untuk memperkenalkan kekayaan cita rasa kopi Indonesia ke masyarakat luas. Kami bekerja sama langsung dengan petani kopi lokal dari berbagai daerah di Nusantara untuk memastikan biji kopi berkualitas terbaik.
              </p>
              <p className="text-cafe-700 reveal-animation">
                Setiap cangkir kopi yang kami sajikan adalah hasil dari proses seleksi ketat, sangrai yang presisi, dan penyeduhan dengan teknik yang tepat oleh barista berpengalaman kami.
              </p>
              <div className="pt-4 reveal-animation">
                <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Menu Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Menu Favorit</span>
            <h2 className="heading-lg mt-2 mb-4 reveal-animation">Pilihan Menu Populer Kami</h2>
            <p className="text-cafe-700 reveal-animation">
              Rasakan pengalaman kopi terbaik melalui menu-menu signature yang telah menjadi favorit pelanggan kami.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden reveal-animation hover-lift">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-semibold text-cafe-900">{item.name}</h3>
                    <span className="font-medium text-cafe-700">{item.price}</span>
                  </div>
                  <p className="text-cafe-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center gap-1">
                    <Coffee className="w-4 h-4 text-cafe-700" />
                    <span className="text-xs text-cafe-700">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal-animation">
            <Link to="/menu" className="btn-secondary inline-flex items-center gap-2">
              Lihat Semua Menu
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-cafe-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Testimonial</span>
            <h2 className="heading-lg mt-2 mb-4 reveal-animation">Apa Kata Pelanggan Kami</h2>
            <p className="text-cafe-700 reveal-animation">
              Dengarkan pengalaman mereka yang telah merasakan kenikmatan kopi dan suasana di Aroma Nusantara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm reveal-animation hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-cafe-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < testimonial.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-cafe-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-coffee-pour bg-cover bg-center relative">
        <div className="absolute inset-0 bg-cafe-950 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 reveal-animation">Rasakan Kenikmatan Kopi Nusantara Hari Ini</h2>
            <p className="text-lg mb-8 text-cream-100 reveal-animation">
              Kunjungi cafe kami atau pesan untuk pengalaman kopi Indonesia terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation">
              <a href="tel:+6281234567890" className="btn-primary">
                Pesan Meja Sekarang
              </a>
              <Link to="/menu" className="bg-white text-cafe-900 hover:bg-cream-100 px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow">
                Lihat Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Sample data
const popularItems = [
  {
    name: "Kopi Gayo",
    price: "Rp 35.000",
    description: "Kopi dari dataran tinggi Gayo Aceh dengan cita rasa fruity dan earthy yang khas.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop",
    category: "Specialty Coffee"
  },
  {
    id: 3,
    name: "Kopi Bali Kintamani",
    description: "Kopi dengan aroma buah jeruk dan tekstur yang halus, berasal dari dataran tinggi Kintamani.",
    price: 36000,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    category: "Specialty Coffee",
    tags: ["Arabika", "Light Roast", "V60"],
    popular: false
  },
  {
    name: "Nasi Goreng Kampoeng",
    price: "Rp 45.000",
    description: "Nasi goreng dengan bumbu rempah pilihan dan tambahan ayam, telur, dan kerupuk.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2013&auto=format&fit=crop",
    category: "Makanan Utama"
  }
];

const testimonials = [
  {
    name: "Anita Wijaya",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    rating: 5,
    text: "Kopi disini benar-benar enak! Saya sudah mencoba berbagai cafe, tapi kopi Gayo di Aroma Nusantara punya cita rasa yang sangat berbeda."
  },
  {
    name: "Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4,
    text: "Tempatnya nyaman untuk bekerja, wifi cepat, dan kopi selalu disajikan dengan baik. Pastry-nya juga enak!"
  },
  {
    name: "Diana Putri",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    rating: 5,
    text: "Suasananya sangat cozy, staff ramah dan menu makanannya lengkap. Perfect untuk brunch di akhir pekan!"
  }
];

export default Index;
