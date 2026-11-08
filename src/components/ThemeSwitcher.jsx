import React, { useState, useEffect } from 'react';

const PALETTES = [
  {
    id: 'navy-slate',
    name: 'Classic Navy + Slate',
    category: 'Strategy & Advisory',
    bg: '#FAFAFA',
    primary: '#0B1F3A',
    accent: '#3B5AA0',
    secondary: '#5B6470'
  },
  {
    id: 'navy-teal',
    name: 'Authoritative + Deep Teal',
    category: 'Digital / Tech Advisory',
    bg: '#FAFAFA',
    primary: '#0B1F3A',
    accent: '#0F5C57',
    secondary: '#5B6470'
  },
  {
    id: 'navy-gold',
    name: 'Ink + Muted Gold',
    category: 'Boutique & Premium',
    bg: '#FFFFFF',
    primary: '#14181F',
    accent: '#A6813E',
    secondary: '#5B6470'
  },
  {
    id: 'editorial-oxblood',
    name: 'Warm Off-White + Oxblood',
    category: 'Distinctive Editorial',
    bg: '#F7F5F0',
    primary: '#1C1B19',
    accent: '#7A3B2E',
    secondary: '#63615C'
  },
  {
    id: 'editorial-bronze',
    name: 'Warm Off-White + Bronze',
    category: 'Distinctive Editorial',
    bg: '#F7F5F0',
    primary: '#1C1B19',
    accent: '#8A5A3A',
    secondary: '#63615C'
  },
  {
    id: 'dark-luxury',
    name: 'Quiet Luxury (Dark)',
    category: 'Original Studio',
    bg: '#0E0E0E',
    primary: '#F5F5F1',
    accent: '#B5B5AD',
    secondary: '#8C8C86'
  }
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('navy-slate');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('consultancy-theme') || 'navy-slate';
    setCurrentTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const handleSelectTheme = (themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('consultancy-theme', themeId);
  };

  const activePalette = PALETTES.find((p) => p.id === currentTheme) || PALETTES[0];

  return (
    <div className="palette-switcher-wrapper">
      <button 
        className="palette-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Consultancy Palette"
        title="Switch Consultancy Color Palette"
      >
        <span 
          className="palette-swatch-dot" 
          style={{ backgroundColor: activePalette.accent }} 
        />
        <span className="palette-toggle-label">Palette: {activePalette.name}</span>
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="palette-dropdown-menu">
          <div className="palette-dropdown-header">
            <h4>Consultancy Palettes</h4>
            <p>Select a balanced color scheme</p>
          </div>
          <div className="palette-options-list">
            {PALETTES.map((p) => {
              const isSelected = p.id === currentTheme;
              return (
                <button
                  key={p.id}
                  className={`palette-option-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => {
                    handleSelectTheme(p.id);
                    setIsOpen(false);
                  }}
                >
                  <div className="palette-preview-chips">
                    <span className="chip" style={{ backgroundColor: p.bg, border: '1px solid #ddd' }} title="Base Canvas" />
                    <span className="chip" style={{ backgroundColor: p.primary }} title="Primary Dark Neutral" />
                    <span className="chip" style={{ backgroundColor: p.accent }} title="Singular Accent" />
                    <span className="chip" style={{ backgroundColor: p.secondary }} title="Secondary Text" />
                  </div>
                  <div className="palette-option-info">
                    <span className="palette-option-name">{p.name}</span>
                    <span className="palette-option-category">{p.category}</span>
                  </div>
                  {isSelected && (
                    <span className="palette-check-mark">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
