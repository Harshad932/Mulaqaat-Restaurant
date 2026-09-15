import React, { useState, useMemo, useRef } from 'react';
import { Search, X, Flame, Sparkles, Filter, ChevronRight, ChevronLeft } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import FoodCard from './FoodCard';

export default function MenuSection({ defaultCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'
  const [searchQuery, setSearchQuery] = useState('');
  const scrollRef = useRef(null);

  // Compute counts dynamically
  const categoryCounts = useMemo(() => {
    const counts = {};
    MENU_CATEGORIES.forEach((cat) => {
      if (cat.id === 'all') {
        counts[cat.id] = MENU_ITEMS.length;
      } else if (cat.id === 'specialties') {
        counts[cat.id] = MENU_ITEMS.filter((i) => i.isSpecial).length;
      } else {
        counts[cat.id] = MENU_ITEMS.filter((i) => i.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory === 'specialties') {
        if (!item.isSpecial) return false;
      } else if (selectedCategory !== 'all') {
        if (item.category !== selectedCategory) return false;
      }

      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesHindi = item.hindi ? item.hindi.toLowerCase().includes(q) : false;
        const matchesDesc = item.description ? item.description.toLowerCase().includes(q) : false;
        const matchesSub = item.sub ? item.sub.toLowerCase().includes(q) : false;
        return matchesName || matchesHindi || matchesDesc || matchesSub;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  const activeCategoryObj = MENU_CATEGORIES.find((c) => c.id === selectedCategory) || MENU_CATEGORIES[0];

  const handleScrollCategories = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-8 sm:py-14 bg-[#FAF6F0] min-h-screen text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Menu Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-900 border border-gold-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            <span>Authentic Recipes & Fresh Cooking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-900 tracking-tight">
            Our Complete Food Menu
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Select your favorite dishes, choose portion sizes, and assemble your order tray to present directly to your table waiter.
          </p>
        </div>

        {/* Search Bar & Dietary Filter Bar */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-stone-200/90 mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-80 lg:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g., Murgh, Biryani, Naan)..."
              className="w-full pl-9 pr-8 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-800/30 focus:border-brand-800 transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filter Buttons: All, Pure Veg, Non-Veg */}
          <div className="flex items-center gap-1.5 w-full md:w-auto justify-center">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`flex-1 md:flex-initial px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                dietaryFilter === 'all'
                  ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              All Types
            </button>

            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                  : 'bg-stone-50 text-emerald-800 border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              <div className="w-3 h-3 rounded-sm border border-emerald-600 bg-emerald-50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <span>Pure Veg</span>
            </button>

            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                dietaryFilter === 'non-veg'
                  ? 'bg-rose-800 text-white border-rose-800 shadow-sm'
                  : 'bg-stone-50 text-rose-800 border-rose-200 hover:bg-rose-50'
              }`}
            >
              <div className="w-3 h-3 rounded-sm border border-rose-700 bg-rose-50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-700" />
              </div>
              <span>Non-Veg</span>
            </button>
          </div>

        </div>

        {/* Sticky Horizontal Category Scrolling Bar */}
        <div className="sticky top-[60px] sm:top-[70px] z-20 -mx-4 sm:mx-0 px-4 sm:px-0 py-2.5 bg-[#FAF6F0]/95 backdrop-blur-sm mb-6 border-y border-stone-200/80">
          <div className="relative flex items-center">
            
            {/* Left Scroll Arrow */}
            <button
              onClick={() => handleScrollCategories('left')}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-stone-200 text-stone-700 hover:bg-stone-50 mr-2 shrink-0"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Category Pills List */}
            <div
              ref={scrollRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth w-full"
            >
              {MENU_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = categoryCounts[cat.id];
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 border ${
                      isActive
                        ? 'bg-brand-900 text-gold-200 border-brand-900 shadow-md ring-1 ring-gold-500/40'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:border-gold-300'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full font-medium ${
                        isActive
                          ? 'bg-gold-500/20 text-gold-300'
                          : 'bg-stone-100 text-stone-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Arrow */}
            <button
              onClick={() => handleScrollCategories('right')}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-stone-200 text-stone-700 hover:bg-stone-50 ml-2 shrink-0"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

        {/* Current Active Category Heading & Dish Count */}
        <div className="flex items-baseline justify-between mb-5 border-b border-stone-200 pb-2.5">
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
              {activeCategoryObj.name}
            </h3>
            {activeCategoryObj.hindi && (
              <p className="text-xs text-stone-500">{activeCategoryObj.hindi}</p>
            )}
          </div>
          <span className="text-xs font-semibold text-stone-500 bg-white px-2.5 py-1 rounded-full border border-stone-200">
            {filteredItems.length} {filteredItems.length === 1 ? 'Dish' : 'Dishes'}
          </span>
        </div>

        {/* Responsive Food Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-10 text-center border border-stone-200 max-w-md mx-auto my-12 space-y-3 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-lg text-stone-900">
              No Dishes Found
            </h4>
            <p className="text-stone-500 text-xs sm:text-sm">
              We couldn't find any dishes matching "{searchQuery}" with the current filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategory('all');
              }}
              className="mt-2 px-5 py-2 rounded-xl bg-brand-900 text-gold-200 text-xs font-bold shadow hover:bg-brand-800 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
