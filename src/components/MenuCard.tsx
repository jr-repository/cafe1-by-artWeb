
import { useState } from 'react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  popular: boolean;
}

interface MenuCardProps {
  item: MenuItem;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const MenuCard = ({ item }: MenuCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="menu-card bg-white custom-shadow group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        {/* Popular badge */}
        {item.popular && (
          <div className="absolute top-3 right-3 z-10 bg-cafe-700 text-white px-2 py-1 rounded-full text-xs font-medium">
            Populer
          </div>
        )}
        
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div 
          className={`absolute inset-0 bg-cafe-950 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button 
            className="bg-white text-cafe-900 px-4 py-2 rounded-lg font-medium transform transition-transform duration-300 hover:scale-105"
          >
            Lihat Detail
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg font-semibold text-cafe-900">{item.name}</h3>
          <span className="font-medium text-cafe-700">{formatPrice(item.price)}</span>
        </div>
        
        <p className="text-cafe-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.map((tag, index) => (
            <span 
              key={index} 
              className="badge"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
