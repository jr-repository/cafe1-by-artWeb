
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Coffee } from 'lucide-react';

const About = () => {
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
      
      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-cafe-texture bg-cover bg-center relative">
        <div className="absolute inset-0 bg-cafe-950 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-white text-sm font-medium tracking-widest uppercase mb-4 reveal-animation">Tentang Kami</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 reveal-animation">
            Cerita Kami
          </h1>
          <p className="text-cream-100 max-w-xl mx-auto reveal-animation">
            Mengenal lebih dekat Aroma Nusantara dan perjalanan kami dalam menghadirkan kopi terbaik
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Cerita Awal</span>
              <h2 className="heading-lg reveal-animation">Berawal dari Cinta pada Kopi Lokal</h2>
              <p className="text-cafe-700 reveal-animation">
                Aroma Nusantara didirikan pada tahun 2018 oleh Adi Wijaya, seorang pecinta kopi yang memiliki impian untuk memperkenalkan kekayaan kopi Indonesia kepada masyarakat luas.
              </p>
              <p className="text-cafe-700 reveal-animation">
                Bertahun-tahun menjelajahi berbagai perkebunan kopi di Indonesia, Adi menemukan banyak varietas kopi lokal dengan cita rasa unik yang belum banyak dikenal. Ini yang menginspirasinya untuk membuka cafe yang fokus pada kopi asli Indonesia.
              </p>
              <p className="text-cafe-700 reveal-animation">
                Nama "Aroma Nusantara" dipilih untuk menggambarkan keanekaragaman dan kekayaan aroma kopi dari berbagai penjuru nusantara yang ingin kami hadirkan ke dalam setiap cangkir.
              </p>
            </div>
            
            <div className="relative reveal-animation">
              <img 
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=2070&auto=format&fit=crop" 
                alt="Founder of Aroma Nusantara" 
                className="rounded-xl w-full shadow-lg"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cafe-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cafe-200 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Misi Kami</span>
            <h2 className="heading-lg mt-2 mb-6 reveal-animation">Mengapa Kami Ada</h2>
            <p className="text-cafe-700 text-lg reveal-animation">
              Misi kami adalah memperkenalkan kekayaan cita rasa kopi Indonesia pada dunia, sambil mendukung petani kopi lokal dan praktik berkelanjutan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm reveal-animation hover-lift">
              <div className="w-12 h-12 mb-4 bg-cafe-100 text-cafe-800 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Kualitas Premium</h3>
              <p className="text-cafe-700">Kami berkomitmen untuk hanya menyajikan kopi dengan kualitas terbaik dari biji kopi pilihan.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm reveal-animation hover-lift">
              <div className="w-12 h-12 mb-4 bg-cafe-100 text-cafe-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Mendukung Lokal</h3>
              <p className="text-cafe-700">Kami bekerja sama langsung dengan petani kopi lokal untuk memastikan mereka mendapat kompensasi yang adil.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm reveal-animation hover-lift">
              <div className="w-12 h-12 mb-4 bg-cafe-100 text-cafe-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M3 6v18h18V6"></path>
                  <path d="M19 6V2H5v4"></path>
                  <path d="M3 6h18"></path>
                  <path d="M9 6V2"></path>
                  <path d="M15 6V2"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Berkelanjutan</h3>
              <p className="text-cafe-700">Kami mendukung praktik berkelanjutan dalam semua aspek bisnis kami, dari budidaya hingga penyajian.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Coffee Sources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Sumber Kopi Kami</span>
            <h2 className="heading-lg mt-2 mb-4 reveal-animation">Dari Perkebunan Terbaik Indonesia</h2>
            <p className="text-cafe-700 reveal-animation">
              Kami bangga bermitra dengan perkebunan kopi terbaik dari berbagai daerah di Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeOrigins.map((origin, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl reveal-animation">
                <img 
                  src={origin.image} 
                  alt={origin.region} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-950 via-cafe-950/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-serif text-xl font-semibold">{origin.region}</h3>
                  <p className="text-sm text-cream-100">{origin.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Tim Kami</span>
            <h2 className="heading-lg mt-2 mb-4 reveal-animation">Bertemu dengan Tim Ahli Kami</h2>
            <p className="text-cafe-700 reveal-animation">
              Dibalik setiap cangkir kopi yang sempurna terdapat tim yang penuh semangat dan dedikasi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm reveal-animation hover-lift">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-serif text-xl font-semibold text-cafe-900">{member.name}</h3>
                  <p className="text-cafe-700 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 bg-cafe-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 reveal-animation">Bergabunglah dalam Perjalanan Kopi Kami</h2>
          <p className="text-lg mb-8 text-cream-100 max-w-2xl mx-auto reveal-animation">
            Kunjungi cafe kami untuk merasakan pengalaman kopi Indonesia yang autentik atau ikuti kami di media sosial untuk update terbaru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Ikuti Kami di Instagram
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-cafe-700 hover:bg-cafe-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow">
              Kunjungi Lokasi Kami
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Sample data
const coffeeOrigins = [
  {
    region: "Aceh Gayo",
    description: "Dataran tinggi dengan kopi arabika berkarakter fruity dan earthy.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    region: "Toraja",
    description: "Kopi dengan karakter kuat dan sedikit asam dengan aroma kayu manis.",
    image: "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?q=80&w=1974&auto=format&fit=crop"
  },
  {
    region: "Bali Kintamani",
    description: "Kopi dengan aroma buah jeruk dan tekstur yang halus.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
  },
  {
    region: "Flores Bajawa",
    description: "Cita rasa kacang dan karamel dengan sentuhan buah segar.",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1974&auto=format&fit=crop"
  }
];

const teamMembers = [
  {
    name: "Adi Wijaya",
    role: "Founder & Head Roaster",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Dina Pratiwi",
    role: "Head Barista",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Budi Santoso",
    role: "Coffee Sourcer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Maya Anggraini",
    role: "Chef",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  }
];

export default About;
