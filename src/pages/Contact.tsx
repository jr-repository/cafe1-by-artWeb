
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
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
      <section className="pt-28 pb-16 bg-coffee-pour bg-cover bg-center relative">
        <div className="absolute inset-0 bg-cafe-950 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-white text-sm font-medium tracking-widest uppercase mb-4 reveal-animation">Kontak Kami</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 reveal-animation">
            Hubungi Kami
          </h1>
          <p className="text-cream-100 max-w-xl mx-auto reveal-animation">
            Kami siap menerima pertanyaan, saran, atau pemesanan dari Anda
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm reveal-animation">
                <h2 className="font-serif text-2xl font-semibold text-cafe-900 mb-6">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-cafe-100 p-3 rounded-full mt-1">
                      <MapPin className="w-5 h-5 text-cafe-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cafe-900">Alamat</h3>
                      <p className="text-cafe-700">Jl. Mawar No. 123, Bandung, Jawa Barat, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-cafe-100 p-3 rounded-full mt-1">
                      <Phone className="w-5 h-5 text-cafe-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cafe-900">Telepon</h3>
                      <p className="text-cafe-700">+62 812 3456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-cafe-100 p-3 rounded-full mt-1">
                      <Mail className="w-5 h-5 text-cafe-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cafe-900">Email</h3>
                      <p className="text-cafe-700">info@aromanusantara.id</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-cafe-100 p-3 rounded-full mt-1">
                      <Clock className="w-5 h-5 text-cafe-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cafe-900">Jam Operasional</h3>
                      <p className="text-cafe-700">Senin - Kamis: 08:00 - 22:00</p>
                      <p className="text-cafe-700">Jumat - Sabtu: 08:00 - 23:00</p>
                      <p className="text-cafe-700">Minggu: 09:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm reveal-animation">
                <h2 className="font-serif text-2xl font-semibold text-cafe-900 mb-6">Ikuti Kami</h2>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-cafe-100 p-3 rounded-full hover:bg-cafe-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafe-700">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-cafe-100 p-3 rounded-full hover:bg-cafe-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafe-700">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-cafe-100 p-3 rounded-full hover:bg-cafe-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafe-700">
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                      <path d="M13 12h3a5 5 0 0 0 5-5V4"/>
                      <path d="M21 12V4h-4"/>
                      <path d="M13 12v8"/>
                      <path d="M13 8c0-2.5-1-5-4-5"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-cafe-100 p-3 rounded-full hover:bg-cafe-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafe-700">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 reveal-animation">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <h2 className="font-serif text-2xl font-semibold text-cafe-900 mb-6">Kirim Pesan</h2>
                
                {submitSuccess && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-800">
                          Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-cafe-800 mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-cafe-200 focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-cafe-800 mb-2">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-cafe-200 focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-cafe-800 mb-2">Nomor Telepon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-cafe-200 focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-cafe-800 mb-2">Subjek <span className="text-red-500">*</span></label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-cafe-200 focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500"
                        required
                      >
                        <option value="">Pilih Subjek</option>
                        <option value="Reservasi">Reservasi</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Kerjasama">Kerjasama</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-cafe-800 mb-2">Pesan <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-cafe-200 focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">Lokasi Kami</span>
            <h2 className="heading-lg mt-2 mb-4 reveal-animation">Temukan Kami</h2>
            <p className="text-cafe-700 reveal-animation">
              Kunjungi cafe kami untuk merasakan pengalaman kopi terbaik
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md reveal-animation">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.6091241893!2d107.53339646758386!3d-6.903462423010513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1636536781522!5m2!1sid!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Lokasi Aroma Nusantara"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-widest text-cafe-700 font-medium reveal-animation">FAQ</span>
            <h2 className="heading-lg mt-2 mb-4 reveal-animation">Pertanyaan Umum</h2>
            <p className="text-cafe-700 reveal-animation">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden reveal-animation">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-medium text-lg text-cafe-900">{faq.question}</h3>
                    <span className="transition-transform transform group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-cafe-700">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-cafe-700">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Sample FAQ data
const faqs = [
  {
    question: "Apakah bisa melakukan reservasi meja?",
    answer: "Ya, Anda dapat melakukan reservasi meja melalui telepon atau dengan mengisi formulir kontak di website kami dengan subjek 'Reservasi'. Kami merekomendasikan untuk melakukan reservasi 2-3 hari sebelumnya untuk memastikan ketersediaan."
  },
  {
    question: "Apakah tersedia layanan pesan antar?",
    answer: "Ya, kami menyediakan layanan pesan antar melalui aplikasi GoFood dan GrabFood, atau Anda dapat langsung menghubungi kami melalui telepon untuk pemesanan."
  },
  {
    question: "Apakah ada menu untuk vegetarian atau vegan?",
    answer: "Tentu, kami memiliki beberapa pilihan menu vegetarian dan vegan. Silakan beritahu staff kami tentang kebutuhan diet khusus Anda, dan kami dengan senang hati akan memberikan rekomendasi menu."
  },
  {
    question: "Apakah cafe memiliki WiFi?",
    answer: "Ya, kami menyediakan WiFi gratis untuk seluruh pelanggan kami dengan kecepatan tinggi."
  },
  {
    question: "Apakah tersedia ruang untuk meeting atau acara?",
    answer: "Ya, kami memiliki ruang privat yang dapat digunakan untuk meeting atau acara kecil. Silakan hubungi kami untuk informasi lebih lanjut tentang kapasitas dan reservasi."
  }
];

export default Contact;
