
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuCard, { MenuItem } from '../components/MenuCard';
import FilterMenu from '../components/FilterMenu';

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(initialMenuItems);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Extract unique categories from menu items
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(menuItems.map(item => item.category)));
    setCategories(uniqueCategories);
  }, [menuItems]);
  
  // Filter menu items based on selected category and search query
  useEffect(() => {
    let filtered = [...menuItems];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => 
          item.name.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredItems(filtered);
  }, [selectedCategory, searchQuery, menuItems]);
  
  // Intersection Observer for scroll reveal
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
  }, [filteredItems]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-coffee-beans bg-cover bg-center relative">
        <div className="absolute inset-0 bg-cafe-950 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block text-white text-sm font-medium tracking-widest uppercase mb-4 reveal-animation">Menu Kami</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 reveal-animation">
            Temukan Cita Rasa Kopi Nusantara
          </h1>
          <p className="text-cream-100 max-w-xl mx-auto reveal-animation">
            Pilihan menu terbaik dari kopi lokal, makanan, dan hidangan penutup yang lezat
          </p>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <FilterMenu 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-cafe-800 mb-2">Tidak ada menu yang ditemukan</h3>
              <p className="text-cafe-600">
                Coba gunakan kata kunci lain atau hapus filter untuk melihat semua menu.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="reveal-animation">
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cafe-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md text-center max-w-4xl mx-auto reveal-animation">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cafe-900 mb-4">
              Ingin mencoba menu spesial kami?
            </h2>
            <p className="text-cafe-700 mb-6 max-w-2xl mx-auto">
              Kunjungi cafe kami atau pesan melalui layanan pesan antar untuk menikmati pengalaman kuliner kopi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+6281234567890" className="btn-primary">
                Hubungi Kami
              </a>
              <a href="https://gofood.co.id" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Pesan Online
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Sample menu data
const initialMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Kopi Gayo",
    description: "Kopi arabika dari dataran tinggi Gayo, Aceh dengan cita rasa fruity dan earthy yang khas.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop",
    category: "Specialty Coffee",
    tags: ["Arabika", "Medium Roast", "Pour Over"],
    popular: true
  },
  {
    id: 2,
    name: "Kopi Toraja",
    description: "Kopi dengan karakteristik rasa yang kuat, sedikit asam dengan aroma kayu manis dan coklat.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?q=80&w=1971&auto=format&fit=crop",
    category: "Specialty Coffee",
    tags: ["Arabika", "Dark Roast", "Pour Over"],
    popular: false
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
    id: 4,
    name: "Kopi Flores Bajawa",
    description: "Kopi dengan rasa kacang dan karamel dengan sentuhan buah yang menyegarkan.",
    price: 34000,
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    category: "Specialty Coffee",
    tags: ["Arabika", "Medium Roast", "Aeropress"],
    popular: false
  },

  {
    id: 6,
    name: "Es Kopi Pandan",
    description: "Kopi dengan campuran sirup pandan dan susu yang memberikan aroma khas Indonesia.",
    price: 33000,
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070&auto=format&fit=crop",
    category: "Signature Drink",
    tags: ["Signature", "Sweet", "Cold"],
    popular: false
  },

  {
    id: 8,
    name: "Teh Tarik",
    description: "Teh susu yang dituangkan dari ketinggian untuk menciptakan tekstur yang khas dan creamy.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974&auto=format&fit=crop",
    category: "Non-Coffee",
    tags: ["Tea", "Sweet", "Hot/Cold"],
    popular: false
  },
  {
    id: 9,
    name: "Matcha Latte",
    description: "Teh hijau bubuk kualitas premium dari Jepang dengan susu creamy.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?q=80&w=1976&auto=format&fit=crop",
    category: "Non-Coffee",
    tags: ["Matcha", "Creamy", "Hot/Cold"],
    popular: false
  },
  {
    id: 10,
    name: "Es Jeruk Peras",
    description: "Jeruk segar diperas langsung dan disajikan dengan es batu dan sedikit gula.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1974&auto=format&fit=crop",
    category: "Non-Coffee",
    tags: ["Juice", "Refreshing", "Cold"],
    popular: false
  },
  {
    id: 11,
    name: "Nasi Goreng Kampoeng",
    description: "Nasi goreng dengan bumbu rempah pilihan dan tambahan ayam, telur, dan kerupuk.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2013&auto=format&fit=crop",
    category: "Makanan Utama",
    tags: ["Rice", "Spicy", "Lunch/Dinner"],
    popular: true
  },

 
  {
    id: 16,
    name: "Pisang Goreng",
    description: "Pisang raja yang digoreng dengan tepung spesial dan disajikan dengan saus coklat.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1592035659284-3b39971c1107?q=80&w=1976&auto=format&fit=crop",
    category: "Makanan Ringan",
    tags: ["Snack", "Sweet", "Afternoon"],
    popular: false
  },
  {
    id: 17,
    name: "Cheese Cake",
    description: "Cake keju lembut dengan lapisan biskuit dan saus buah di atasnya.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1974&auto=format&fit=crop",
    category: "Dessert",
    tags: ["Cake", "Sweet", "Afternoon"],
    popular: false
  },

];

export default Menu;
