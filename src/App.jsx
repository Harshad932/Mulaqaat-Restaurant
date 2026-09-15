import React, { useState } from 'react';
import { OrderProvider } from './context/OrderContext';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import RestaurantInfo from './components/RestaurantInfo';
import MenuSection from './components/MenuSection';
import OrderDrawer from './components/OrderDrawer';
import WaiterViewModal from './components/WaiterViewModal';
import Footer from './components/Footer';

function MainApp() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToMenu = () => {
    setActiveSection('menu');
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpecials = () => {
    setActiveSection('menu');
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-stone-900 font-sans selection:bg-brand-700 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Home / Hero Area */}
        <HeroBanner
          onExploreMenu={scrollToMenu}
          onExploreSpecials={scrollToSpecials}
        />

        {/* Restaurant Introduction & Ambiance */}
        <RestaurantInfo onGoToMenu={scrollToMenu} />

        {/* Digital Food Menu & Order Selector */}
        <MenuSection defaultCategory="all" />
      </main>

      {/* Order Cart Drawer */}
      <OrderDrawer />

      {/* Dedicated Waiter Presentation Screen */}
      <WaiterViewModal />

      {/* Restaurant Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default function App() {
  return (
    <OrderProvider>
      <MainApp />
    </OrderProvider>
  );
}
