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
        {/* Brand & Mission Column */}
        <div className="footer-col-brand">
          <div className="footer-logo-row">
            <span className="footer-logo">13 STUDIOS INC.</span>
            <span className="startup-corp-badge">SERIES A</span>
          </div>
          <p className="footer-brand-statement">
            The intelligent operating system for high-performance spatial web applications, autonomous design compilers, and real-time WebGPU graphics.
          </p>
          <div className="footer-accreditation">
            <span>Global HQ in Nairobi • R&D Hubs in San Francisco & London</span>
            <span>Backed by Benchmark & Sequoia Scouts • SOC2 Type II Certified</span>
          </div>
        </div>

        {/* Product Modules Column */}
        <div className="footer-col-nav">
          <span className="footer-col-title">Platform</span>
          <ul className="footer-links-list">
            <li><a href="#work" className="underline-hover">Vapor Engine (WebGPU)</a></li>
            <li><a href="#work" className="underline-hover">Aero Compiler (AST)</a></li>
            <li><a href="#work" className="underline-hover">Chrono OS (Physics)</a></li>
            <li><a href="#work" className="underline-hover">Aether Spatial (LOD)</a></li>
            <li><a href="#work" className="underline-hover">Solaria Sentinel (SOC2)</a></li>
            <li><a href="#work" className="underline-hover">Valence Telemetry</a></li>
          </ul>
        </div>

        {/* Developers & Architecture Column */}
        <div className="footer-col-nav">
          <span className="footer-col-title">Developers</span>
          <ul className="footer-links-list">
            <li><a href="#hero" className="underline-hover">CLI Quickstart</a></li>
            <li><a href="#studio" className="underline-hover">Core Architecture</a></li>
            <li><a href="https://github.com/kim425716-dotcom/13-studios" target="_blank" rel="noopener noreferrer" className="underline-hover">GitHub Repository</a></li>
            <li><a href="#contact" className="underline-hover">Enterprise Pricing</a></li>
            <li><a href="#journal" className="underline-hover">Research Whitepapers</a></li>
            <li><span className="footer-status-pill"><span className="pulse-dot"></span> 99.99% Systems Active</span></li>
          </ul>
        </div>

        {/* Engineering Dispatch Newsletter Column */}
        <div className="footer-col-dispatch">
          <span className="footer-col-title">Engineering Dispatch</span>
          <p className="dispatch-text">
            Receive bi-weekly research monographs on WebGPU compute shaders, edge layout compilers, and spatial UI systems.
          </p>

          {subscribed ? (
            <div className="dispatch-subscribed">
              <i className="fa-solid fa-circle-check"></i>
              <span>Subscribed to 13 Labs Dispatch. Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="dispatch-form">
              <div className="dispatch-input-wrap">
                <input
                  type="email"
                  placeholder="engineer@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dispatch-input"
                  required
                />
                <button type="submit" className="dispatch-submit" aria-label="Subscribe to newsletter">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>
          )}

          <div className="dispatch-trust-notes">
            <span>Zero spam. Direct from our founding engineering lab.</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-expanded">
        <div className="footer-bottom-left">
          <span>&copy; {new Date().getFullYear()} 13 Studios Inc. All rights reserved.</span>
          <span className="footer-sep">•</span>
          <span>Nairobi • San Francisco • London</span>
        </div>

        <div className="footer-bottom-right">
          <a href="#privacy" className="footer-sublink">Privacy & Zero-PII Policy</a>
          <span className="footer-sep">•</span>
          <a href="#terms" className="footer-sublink">Terms of Service</a>
          <span className="footer-sep">•</span>
          <a href="#security" className="footer-sublink">SOC2 Trust Portal</a>
        </div>
      </div>
    </footer>
  );
}
