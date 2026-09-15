import React from 'react';
import { Phone, MapPin, Clock, Heart, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function Footer({ onNavigate }) {
  return (
    <footer id="contact" className="bg-[#19030a] text-stone-300 pt-12 pb-16 border-t border-brand-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] p-1 ring-2 ring-gold-500/60 overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Mulaqaat Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gold-200 tracking-wider">
                  MULAQAAT
                </h3>
                <p className="text-xs uppercase tracking-widest text-amber-200/70 font-semibold">
                  Family Restaurant
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Authentic Indian, Tandoor & Chinese culinary excellence crafted for joyful family moments and cherished memories.
            </p>

            <div className="pt-2 text-xs text-gold-400/90 font-medium">
              "Har Mulaqaat Ko Banayein Zaikedaar Aur Khaas"
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-200 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Complete Digital Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Family Dining Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-gold-300 transition-colors"
                >
                  Mulaqaat Specials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-200 uppercase tracking-wider">
              Visit Us
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{RESTAURANT_INFO.timings}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Mulaqaat Family Restaurant. All rights reserved.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for heartfelt family dining</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
