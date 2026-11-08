import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-expanded">
        {/* Brand & Manifesto Column */}
        <div className="footer-col-brand">
          <span className="footer-logo">13 STUDIOS</span>
          <p className="footer-brand-statement">
            A boutique creative agency and design consultancy engineering structural brand identities, high-fidelity digital platforms, and physics-informed motion environments.
          </p>
          <div className="footer-accreditation">
            <span>Registered in Kenya & Serving Global Clients</span>
            <span>Est. MMXXIV // 13-Point Discipline</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-col-nav">
          <span className="footer-col-title">Index</span>
          <ul className="footer-links-list">
            <li><a href="#hero" className="underline-hover">Overview</a></li>
            <li><a href="#work" className="underline-hover">Selected Work</a></li>
            <li><a href="#studio" className="underline-hover">The Studio</a></li>
            <li><a href="#testimonials" className="underline-hover">Endorsements</a></li>
            <li><a href="#journal" className="underline-hover">The Journal</a></li>
            <li><a href="#contact" className="underline-hover">Connect</a></li>
          </ul>
        </div>

        {/* Disciplines Column */}
        <div className="footer-col-nav">
          <span className="footer-col-title">Disciplines</span>
          <ul className="footer-links-list">
            <li><span>Brand Architecture</span></li>
            <li><span>Digital Flagships</span></li>
            <li><span>Spatial & 3D Motion</span></li>
            <li><span>Design Engineering</span></li>
            <li><span>Executive Advisory</span></li>
          </ul>
        </div>

        {/* Monograph Dispatch Newsletter Column */}
        <div className="footer-col-dispatch">
          <span className="footer-col-title">Studio Dispatch</span>
          <p className="dispatch-text">
            Receive our quarterly monographs on design restraint, interface semiotics, and architectural systems.
          </p>

          {subscribed ? (
            <div className="dispatch-success">
              <span>✓ Subscribed to The 13 Monograph.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="dispatch-form">
              <input
                type="email"
                placeholder="Enter corporate email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="dispatch-input"
              />
              <button type="submit" className="dispatch-submit" aria-label="Subscribe">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          )}

          <div className="footer-socials-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link underline-hover">
              Instagram
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="social-link underline-hover">
              Vimeo
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link underline-hover">
              LinkedIn
            </a>
            <a href="https://read.cv" target="_blank" rel="noreferrer" className="social-link underline-hover">
              Read.cv
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">© 2026 13 Studios Ltd. All rights reserved.</span>
        <span className="timezone">Local Time: EAT (UTC+3) • Kiambu / Nairobi</span>
        <span className="credits">Designed & Engineered in Quiet Luxury</span>
      </div>
    </footer>
  );
}
