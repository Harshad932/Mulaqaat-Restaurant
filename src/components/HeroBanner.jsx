import React from 'react';
import { Flame, Sparkles, UtensilsCrossed, Clock, ChevronDown, Award } from 'lucide-react';

export default function HeroBanner({ onExploreMenu, onExploreSpecials }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#240610] text-white pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      {/* Subtle Background Pattern & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-brand-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
              <span>Authentic Mughlai, Tandoor & Chinese Kitchen</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight text-white">
              Where Taste Meets <br className="hidden sm:inline" />
              <span className="gold-gradient-text drop-shadow-md">
                Warm Family Traditions
              </span>
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <span className="font-semibold text-gold-200">Mulaqaat Family Restaurant</span>. Relish our royal slow-cooked curries, charcoal-grilled kebabs from <span className="italic text-amber-300">"Koyle Ki Dhimi Aanch"</span>, fragrant dum biryanis, and sizzling Chinese platters crafted for memorable family gatherings.
            </p>

            {/* Feature Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/60 border border-brand-800/80 text-stone-200">
                <Flame className="w-4 h-4 text-amber-400" />
                Live Charcoal Tandoor
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/60 border border-brand-800/80 text-stone-200">
                <Award className="w-4 h-4 text-gold-400" />
                Signature Mulaqaat Gravies
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/60 border border-brand-800/80 text-stone-200">
                <Clock className="w-4 h-4 text-emerald-400" />
                11:00 AM – 11:30 PM Daily
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 font-bold text-sm sm:text-base shadow-lg shadow-gold-900/40 hover:from-gold-400 hover:to-amber-500 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Browse Menu & Order</span>
              </button>

              <button
                onClick={onExploreSpecials}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-950/70 border border-gold-500/40 text-gold-200 font-semibold text-sm sm:text-base hover:bg-brand-900/90 hover:border-gold-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>View House Specials</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Logo Emblem & Signature Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Card */}
              <div className="relative bg-gradient-to-b from-[#380b19] to-[#1a030a] rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-2xl backdrop-blur-sm text-center">
                
                {/* Official Logo Display */}
                <div className="mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#FAF7F2] p-2 ring-4 ring-gold-500/50 shadow-xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Mulaqaat Family Restaurant Official Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="mt-5 space-y-1">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-gold-200 tracking-wider">
                    MULAQAAT
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-amber-200/70 font-semibold">
                    Family Restaurant
                  </p>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  "Har Mulaqaat Ko Banayein Zaikedaar Aur Khaas"
                  <br />
                  <span className="text-gold-300/80 italic text-xs">A warm dining destination for families & friends</span>
                </p>

                {/* Quick Highlights Strip */}
                <div className="mt-6 pt-4 border-t border-brand-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-black/30 border border-brand-800/40">
                    <p className="text-gold-400 font-black text-sm sm:text-base">100+</p>
                    <p className="text-[10px] text-stone-300">Authentic Dishes</p>
                  </div>
                  <div className="p-2 rounded-xl bg-black/30 border border-brand-800/40">
                    <p className="text-gold-400 font-black text-sm sm:text-base">100%</p>
                    <p className="text-[10px] text-stone-300">Fresh & Halal</p>
                  </div>
                  <div className="p-2 rounded-xl bg-black/30 border border-brand-800/40">
                    <p className="text-gold-400 font-black text-sm sm:text-base">AC</p>
                    <p className="text-[10px] text-stone-300">Family Halls</p>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-gradient-to-r from-amber-600 to-gold-600 text-stone-950 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg border border-amber-300/60 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-stone-950" />
                <span>Chef's Choice: Murgh Mulaqaat</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
