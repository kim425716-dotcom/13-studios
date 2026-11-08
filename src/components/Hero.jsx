import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroMetrics = [
  { value: '140M+', label: 'Monthly API Telemetry', detail: 'Real-time spatial & shader invocations' },
  { value: '<8ms', label: 'Global Edge Latency', detail: 'Sub-millisecond Anycast mesh routing' },
  { value: '99.99%', label: 'Enterprise Uptime SLA', detail: 'Mission-critical high availability' },
  { value: '$18.5M', label: 'Series A Capital', detail: 'Backed by Benchmark & Sequoia Scouts' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const [copiedCli, setCopiedCli] = useState(false);

  const handleCopyCli = () => {
    navigator.clipboard?.writeText('npx create-13-app@latest');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2200);
  };

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
          {/* Startup Venture / Announcement Pill */}
          <div className="startup-announcement-wrap">
            <a href="#journal" className="startup-announcement-pill">
              <span className="pill-tag">SERIES A</span>
              <span className="pill-text">$18.5M Funding Round Led by Benchmark & Angels</span>
              <i className="fa-solid fa-arrow-right pill-arrow"></i>
            </a>
          </div>

          <div className="hero-eyebrow-row">
            <span className="hero-badge">AI-Native Creative Intelligence & Spatial Web OS</span>
            <span className="hero-status">
              <span className="status-dot"></span> v2.4 Public Enterprise Release
            </span>
          </div>

          <h1 className="hero-title text-reveal">
            The Operating System<br />For Next-Gen Computing.
          </h1>

          <p className="hero-narrative-summary">
            13 Studios Inc. is an infrastructure startup bridging real-time GPU shaders, autonomous design compilation, and edge-native WebAssembly runtimes. We empower modern engineering teams to author and stream iconic digital experiences with sub-millisecond latency.
          </p>

          <div className="hero-cta-group startup-cta-group">
            <a href="#contact" className="hero-btn-primary">
              <span>Start Free Developer Trial</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#work" className="hero-btn-secondary">
              <span>Explore Platform Modules</span>
              <i className="fa-solid fa-layer-group"></i>
            </a>

            {/* Terminal Copy Snippet */}
            <div className="hero-terminal-pill" onClick={handleCopyCli} role="button" tabIndex={0} title="Click to copy install command">
              <span className="terminal-prefix">$</span>
              <code className="terminal-cmd">npx create-13-app@latest</code>
              <button className="terminal-copy-btn" aria-label="Copy to clipboard">
                {copiedCli ? (
                  <span className="copied-text"><i className="fa-solid fa-check"></i> Copied</span>
                ) : (
                  <i className="fa-regular fa-copy"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Startup Metrics & Telemetry Bar */}
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
              <span>Nairobi Global HQ (1.1616° S, 36.8263° E)</span>
              <span className="coords-sep">•</span>
              <span>San Francisco & London R&D Hubs</span>
              <span className="coords-sep">•</span>
              <span className="live-edge-indicator"><span className="pulse-dot"></span> 280+ Anycast Edge POPs</span>
            </div>
            <div className="scroll-indicator">
              <span className="scroll-text">Explore Platform</span>
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
