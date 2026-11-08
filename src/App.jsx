import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import ThemeSwitcher from './components/ThemeSwitcher';
import Hero from './components/Hero';
import PartnerTicker from './components/PartnerTicker';
import Work from './components/Work';
import Studio from './components/Studio';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* 13-Column Proprietary Grid Visual Overlay (Toggled in Studio section) */}
      <div className="architectural-13-grid-overlay" aria-hidden="true">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="grid-overlay-col">
            <span className="col-idx">{i + 1}</span>
          </div>
        ))}
      </div>

      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* 00 to 13 Page Loader & Entrance Reveal */}
      <PageLoader />

      {/* Floating Header & Navigation */}
      <Header onToggleMenu={toggleMenu} />

      {/* Interactive Consultancy Palette Switcher */}
      <ThemeSwitcher />

      {/* Liquid Morph Navigation Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Main Canvas Sections */}
      <main id="main-content">
        <Hero />
        <PartnerTicker />
        <Work />
        <Studio />
        <Testimonials />
        <Journal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
