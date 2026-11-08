import React from 'react';

const partners = [
  { name: 'Koben Horology', location: 'Geneva', type: 'Haute Horology' },
  { name: 'Aura Capital', location: 'London', type: 'Private Equity' },
  { name: 'Verve Mobility', location: 'Berlin', type: 'Autonomous Tech' },
  { name: 'Aether Spatial', location: 'Tokyo', type: 'Spatial Computing' },
  { name: 'Lumina Biosystems', location: 'San Francisco', type: 'Health & Science' },
  { name: 'Maison Vapor', location: 'Paris', type: 'Luxury Fragrance' },
  { name: 'Kinetic Global', location: 'Singapore', type: 'Renewable Infrastructure' },
  { name: 'Nordic Media House', location: 'Stockholm', type: 'Editorial Publishing' },
];

const accolades = [
  { award: 'Awwwards', title: 'Site of the Day (×3)', year: '2025/2026' },
  { award: 'FWA', title: 'FWA of the Day (×2)', year: '2025' },
  { award: 'TDC', title: 'Type Directors Club Distinction', year: '2026' },
  { award: 'Red Dot', title: 'Best of the Best — Brand Architecture', year: '2025' },
  { award: 'Webby', title: 'Nominee — Best Visual Design & Motion', year: '2026' },
];

export default function PartnerTicker() {
  return (
    <section className="partner-ticker-section" aria-label="Institutional Collaborations and Recognition">
      <div className="ticker-header-wrapper">
        <span className="ticker-badge">Selected Collaborations & Accolades</span>
        <span className="ticker-sub">Partnering with market-defining institutions worldwide</span>
      </div>

      <div className="ticker-track-container">
        <div className="ticker-track">
          {/* Double mapped for seamless loop */}
          {[...partners, ...partners].map((p, idx) => (
            <div key={`partner-${idx}`} className="ticker-item">
              <span className="ticker-dot"></span>
              <span className="ticker-partner-name">{p.name}</span>
              <span className="ticker-partner-loc">({p.location})</span>
              <span className="ticker-partner-type">{p.type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="accolades-strip">
        <div className="accolades-inner">
          {accolades.map((a, idx) => (
            <div key={`accolade-${idx}`} className="accolade-card">
              <span className="accolade-org">{a.award}</span>
              <div className="accolade-details">
                <span className="accolade-title">{a.title}</span>
                <span className="accolade-year">{a.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

