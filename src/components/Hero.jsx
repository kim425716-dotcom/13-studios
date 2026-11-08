import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroMetrics = [
  { value: '13', label: 'Point Grid System', detail: 'Mathematical asymmetric matrix' },
  { value: '$480M+', label: 'Enterprise Impact', detail: 'Market valuation influenced' },
  { value: '14', label: 'International Honors', detail: 'Awwwards, FWA & Red Dot' },
  { value: '99.4%', label: 'Client Retention', detail: 'Multi-year director stewardship' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current || !bgImageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgImageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero-section">
      <div className="hero-bg-container">
        <div
          ref={bgImageRef}
          className="hero-bg-image"
          style={{ backgroundImage: `url('assets/hero_architecture.png')` }}
        ></div>
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-header-wrap">
          <div className="hero-eyebrow-row">
            <span className="hero-badge">Independent Creative Advisory & Digital Architecture</span>
            <span className="hero-status">
              <span className="status-dot"></span> Commissioning 2026 Inquiries
            </span>
          </div>

          <h1 className="hero-title text-reveal">
            Quiet Luxury<br />In Digital Form.
          </h1>

          <p className="hero-narrative-summary">
            13 Studios is a boutique creative consultancy engineering structural brand identities, high-fidelity digital platforms, and fluid motion environments for market-defining institutions worldwide.
          </p>

          <div className="hero-cta-group">
            <a href="#work" className="hero-btn-primary">
              <span>Explore Selected Works</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>
            <a href="#contact" className="hero-btn-secondary">
              <span>Schedule Consultation</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Studio Statistics & Coordinate Footer */}
        <div className="hero-footer-expanded">
          <div className="hero-metrics-grid">
            {heroMetrics.map((m, idx) => (
              <div key={idx} className="hero-metric-item">
                <span className="hero-metric-val">{m.value}</span>
                <span className="hero-metric-lbl">{m.label}</span>
                <span className="hero-metric-detail">{m.detail}</span>
              </div>
            ))}
          </div>

          <div className="hero-coords-row">
            <div className="hero-coords">
              <span>Coordinates: 01°17'S, 36°49'E</span>
              <span className="coords-sep">•</span>
              <span>Kiambu / Nairobi Flagship</span>
              <span className="coords-sep">•</span>
              <span>Global Reach</span>
            </div>
            <div className="scroll-indicator">
              <span className="scroll-text">Scroll to explore</span>
              <div className="scroll-line-container">
                <span className="scroll-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
