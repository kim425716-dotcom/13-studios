import React, { useState, useEffect } from 'react';

export default function Header({ onToggleMenu }) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Nairobi / EAT is UTC+3
      const now = new Date();
      const options = {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTimeString(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="site-header">
      <div className="logo-container">
        <a href="#hero" className="logo-text">
          13<sup>STUDIOS</sup>
        </a>
      </div>

      <div className="header-meta-bar">
        <div className="header-time-block">
          <span className="live-status-dot" title="Accepting Commissions"></span>
          <span className="header-location">KIAMBU / NAIROBI</span>
          <span className="header-time-val">{timeString || '02:20:00'} EAT</span>
        </div>
        <a href="#contact" className="header-inquire-pill">
          <span>Inquire</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <nav className="nav-pill" aria-label="Main Floating Navigation">
        <div className="nav-pill-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#studio" className="nav-link">Studio</a>
          <a href="#testimonials" className="nav-link">Accolades</a>
          <a href="#journal" className="nav-link">Journal</a>
          <a href="#contact" className="nav-link">Connect</a>
        </div>
        <button
          id="menu-toggle"
          className="menu-toggle-btn"
          aria-label="Toggle Navigation Drawer"
          onClick={onToggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </header>
  );
}
