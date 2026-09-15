import React from 'react';
import { Flame, Users, Utensils, ShieldCheck, Clock, MapPin, Phone, Star, HeartHandshake } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function RestaurantInfo({ onGoToMenu }) {
  const iconMap = {
    Flame: Flame,
    Utensils: Utensils,
    Users: Users,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] text-stone-900 border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-bold tracking-wider uppercase">
            <HeartHandshake className="w-3.5 h-3.5 text-brand-700" />
            <span>The Mulaqaat Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Tradition, Warmth & Memorable Meals
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Named after the Urdu word <span className="font-semibold text-brand-900 font-serif">"Mulaqaat"</span> (a joyful meeting), our restaurant was founded to give families a warm, peaceful space to connect over hearty plates of slow-simmered gravies, smoking charcoal kebabs, and authentic coastal and oriental recipes.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_INFO.highlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Utensils;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md hover:border-gold-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-stone-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Information Banner: Timings, Address & Family Dining */}
        <div className="mt-12 bg-gradient-to-br from-[#2b0814] to-[#17030a] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gold-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gold-500/20 text-gold-300 shrink-0 border border-gold-400/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-gold-200 font-serif">Opening Hours</h4>
                <p className="text-stone-300 text-sm mt-0.5">{RESTAURANT_INFO.timings}</p>
                <p className="text-stone-400 text-xs mt-1">Lunch, Evening Snacks & Dinner</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gold-500/20 text-gold-300 shrink-0 border border-gold-400/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-gold-200 font-serif">Restaurant Location</h4>
                <p className="text-stone-300 text-sm mt-0.5">{RESTAURANT_INFO.address}</p>
                <p className="text-stone-400 text-xs mt-1">Dedicated Valet & Bike Parking</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gold-500/20 text-gold-300 shrink-0 border border-gold-400/30">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-gold-200 font-serif">Family Table Inquiries</h4>
                <p className="text-stone-300 text-sm mt-0.5">{RESTAURANT_INFO.phone}</p>
                <p className="text-gold-300 text-xs font-semibold mt-1">AC Family Hall & Banquet Available</p>
              </div>
            </div>

          </div>
        </div>

        {/* Customer Words */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Loved by Families & Foodies
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">What our regular guests say about our dishes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESTAURANT_INFO.testimonials.map((testi, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(testi.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-xs sm:text-sm italic leading-relaxed">
                    "{testi.comment}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-brand-900">{testi.name}</span>
                  <span className="text-[11px] text-stone-400">Verified Diner</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner to Menu */}
        <div className="mt-12 text-center">
          <button
            onClick={onGoToMenu}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-900 hover:bg-brand-800 text-gold-200 font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <Utensils className="w-4 h-4 text-gold-400" />
            <span>View Complete Menu & Select Dishes</span>
          </button>
        </div>

      </div>
    </section>
  );
}
