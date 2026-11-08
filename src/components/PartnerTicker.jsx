import React from 'react';

const partners = [
  { name: 'Benchmark Capital', location: 'San Francisco', type: 'Series A Lead' },
  { name: 'Sequoia Scout', location: 'Menlo Park', type: 'Seed Partner' },
  { name: 'Stripe Ecosystem', location: 'San Francisco', type: 'Fintech Infrastructure' },
  { name: 'Linear Guild', location: 'San Francisco', type: 'Developer Workflow' },
  { name: 'Figma Community Fund', location: 'San Francisco', type: 'Design Systems' },
  { name: 'Vercel Edge Network', location: 'San Francisco', type: 'Serverless Runtime' },
  { name: 'OpenAI Startup Cohort', location: 'San Francisco', type: 'AI Acceleration' },
  { name: 'Koben Spatial Systems', location: 'Geneva', type: 'Precision Engineering' },
  { name: 'Verve Autonomous', location: 'Berlin', type: 'Robotics & Vision' },
  { name: 'Datadog Tech Alliance', location: 'New York', type: 'Real-time Observability' },
  { name: 'Cloudflare Workers Network', location: 'Austin', type: 'Anycast Edge' },
  { name: 'Snowflake Data Cloud', location: 'Bozeman', type: 'Distributed Analytics' },
];

const accolades = [
  { award: 'SOC2 Type II', title: 'Enterprise Security & Audit Certified', year: '2026' },
  { award: 'Product Hunt', title: '#1 Developer Product of the Month', year: '2025' },
  { award: 'G2 Leader', title: 'Top Performer: Spatial Web & WebGPU', year: '2026' },
  { award: 'Red Dot', title: 'Best Industrial Software Architecture', year: '2025' },
  { award: 'ISO 27001', title: 'Global Information Security Standard', year: '2026' },
];

export default function PartnerTicker() {
  return (
    <section className="partner-ticker-section" aria-label="Institutional Backers, Enterprise Customers & Certifications">
      <div className="ticker-header-wrapper">
        <span className="ticker-badge">Venture Backing & Enterprise Adoption</span>
        <span className="ticker-sub">Powering mission-critical front-ends at 1,400+ high-growth tech teams</span>
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
            <div key={`accolade-${idx}`} className="accolade-card startup-cert-card">
              <div className="cert-badge-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div className="accolade-details">
                <span className="accolade-org">{a.award}</span>
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
