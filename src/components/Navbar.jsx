import React, { useState, useEffect } from 'react';
import { Utensils, ShoppingBag, Bell, Menu as MenuIcon, X, PhoneCall, Sparkles } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

export default function Navbar({ activeSection, setActiveSection }) {
  const { totalItemsCount, subtotal, setIsOrderDrawerOpen, setIsWaiterViewOpen } = useOrder();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Our Menu' },
    { id: 'experience', label: 'Ambiance' },
    { id: 'contact', label: 'Contact & Timings' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1e050d]/95 backdrop-blur-md shadow-lg border-b border-brand-800/40 py-2.5'
            : 'bg-[#2a0813] border-b border-brand-900 py-3.5'
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-cream-100 p-0.5 shadow-md ring-2 ring-gold-500/60 overflow-hidden flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Mulaqaat Family Restaurant Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif tracking-wider font-bold text-lg sm:text-2xl text-gold-300 drop-shadow-sm uppercase">
                  Mulaqaat
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-gold-600/30 text-gold-200 rounded border border-gold-500/40">
                  Est. Tradition
                </span>
              </div>
              <p className="text-[11px] sm:text-xs tracking-widest text-amber-100/75 uppercase font-medium">
                Family Restaurant
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-gold-600 text-stone-950 shadow-sm font-semibold'
                    : 'text-stone-200 hover:text-gold-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons & Order Tray trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Show to Waiter Shortcut (Visible when items in cart) */}
            {totalItemsCount > 0 && (
              <button
                onClick={() => setIsWaiterViewOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 hover:bg-amber-500/30 text-xs font-semibold tracking-wide transition-all shadow-sm animate-pulse"
                title="Directly display your order to the table waiter"
              >
                <Bell className="w-3.5 h-3.5 text-amber-300" />
                <span>Show to Waiter</span>
              </button>
            )}

            {/* Cart / Order Tray Button */}
            <button
              onClick={() => setIsOrderDrawerOpen(true)}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-gold-600 to-amber-600 text-stone-950 font-semibold text-sm shadow-md hover:from-gold-500 hover:to-amber-500 transition-all transform active:scale-95 cursor-pointer"
              aria-label="View Order Tray"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-stone-950" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-900 text-gold-300 text-[11px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-gold-400 shadow-sm">
                    {totalItemsCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Order Tray</span>
              {totalItemsCount > 0 ? (
                <span className="bg-stone-950/20 px-1.5 py-0.5 rounded text-xs font-bold">
                  ₹{subtotal}
                </span>
              ) : (
                <span className="text-xs font-normal text-stone-900/80 hidden sm:inline">Empty</span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#240610] border-b border-brand-800/80 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-gold-600 text-stone-950 font-bold'
                    : 'text-stone-200 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {link.id === 'menu' && (
                  <span className="text-xs bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full border border-gold-400/30">
                    Full Menu
                  </span>
                )}
              </button>
            ))}

            {totalItemsCount > 0 && (
              <div className="pt-2 border-t border-brand-800/60 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsWaiterViewOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 text-stone-950 font-bold text-sm shadow-md"
                >
                  <Bell className="w-4 h-4" />
                  Show to Waiter ({totalItemsCount})
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Floating Bottom Bar on Mobile for Instant Order Access */}
      {totalItemsCount > 0 && (
        <div className="md:hidden fixed bottom-3 inset-x-3 z-30 animate-bounce-subtle">
          <div className="bg-[#1b030b] text-white p-3 rounded-2xl shadow-2xl border border-gold-500/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5 pl-1">
              <div className="relative bg-gold-600 text-stone-950 font-black text-xs w-7 h-7 rounded-full flex items-center justify-center shadow">
                {totalItemsCount}
              </div>
              <div>
                <p className="text-xs text-gold-300 font-semibold leading-tight">Order in Tray</p>
                <p className="text-sm font-extrabold text-white">₹{subtotal}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsWaiterViewOpen(true)}
                className="px-3 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-transform active:scale-95"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Show Waiter</span>
              </button>
              <button
                onClick={() => setIsOrderDrawerOpen(true)}
                className="px-3 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-rose-700 text-white font-bold text-xs shadow-md flex items-center gap-1 transition-transform active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Review</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
