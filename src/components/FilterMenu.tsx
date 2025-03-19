
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface FilterMenuProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FilterMenu = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}: FilterMenuProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="mb-8">
      {/* Search bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-cafe-400" />
        </div>
        <input
          type="text"
          placeholder="Cari menu favorit Anda..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-3 w-full rounded-lg border border-cafe-200 focus:ring-2 focus:ring-cafe-500 focus:border-cafe-500 transition-all bg-white focus:bg-white"
        />
      </div>
      
      {/* Categories filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedCategory === 'all'
              ? 'bg-cafe-700 text-white font-medium'
              : 'bg-cafe-100 text-cafe-700 hover:bg-cafe-200'
          }`}
        >
          Semua
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === category
                ? 'bg-cafe-700 text-white font-medium'
                : 'bg-cafe-100 text-cafe-700 hover:bg-cafe-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
