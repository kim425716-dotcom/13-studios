import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const leadership = [
  {
    name: 'Brian Kimani',
    role: 'Co-Founder & Chief Executive Officer',
    discipline: 'Distributed Systems & Product Architecture',
    image: 'assets/team_brian.png',
    bio: 'Systems engineer and product visionary. Guided high-throughput distributed infrastructure across Africa, Europe, and North America. Pioneering the 13 Studios platform vision of autonomous spatial interfaces and quiet-luxury computing.'
  },
  {
    name: 'Elena Vance',
    role: 'Co-Founder & Chief Technology Officer',
    discipline: 'Deep Learning, WebGPU & Compiler Systems',
    image: 'assets/team_elena.png',
    bio: 'Researcher in real-time GPU pipelines, zero-overhead WebAssembly runtimes, and algorithmic layout solvers. Primary architect of the Vapor WebGPU shader engine and the Aero design compiler.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Chief Operating Officer & Head of Growth',
    discipline: 'Enterprise GTM & Venture Strategy',
    image: 'assets/team_marcus.png',
    bio: 'Ex-venture partner and enterprise software operator. Scaled high-velocity developer platforms across Fortune 500 accounts, guiding enterprise security certifications, sovereign cloud partnerships, and Series A expansion.'
  }
];

const phases = [
  {
    num: '01',
    name: 'Zero-Config SDK Integration',
    timeline: 'Day 1 // Instant Provisioning',
    objective: 'Deploy the 13 Studios runtime into existing React, Next.js, or WebAssembly environments with one terminal command.',
    deliverables: [
      'Universal CLI Setup (`npx create-13-app@latest`)',
      'Automated TypeScript Schema & Token Ingestion',
      'Instant Local WebGPU Simulation Sandbox',
      'CI/CD Pipeline Validation Hook'
    ]
  },
  {
    num: '02',
    name: 'Pipeline Compilation & Token Sync',
    timeline: 'Week 1 // Architecture Mapping',
    objective: 'Compile spatial layouts, typography, and shader models into zero-overhead production binaries.',
    deliverables: [
      'Figma & Spatial File AST Transpilation',
      'Automated 13-Point Grid Constraint Solving',
      'Micro-Mechanical Motion & Spring Curve Calibration',
      'Static Asset Volumetric Compression'
    ]
  },
  {
    num: '03',
    name: 'Global Edge Mesh Deployment',
    timeline: 'Week 2 // Staging & Anycast Routing',
    objective: 'Broadcast front-end payloads across 280+ Anycast edge regions with sub-8ms response guarantees.',
    deliverables: [
      'Edge Cache Warm-Up & Global DNS Propagation',
      'SOC2 Type II Cryptographic Build Verification',
      'End-to-End Latency & Memory Stress Benchmarks',
      'Multi-Device GPU Fallback Validation'
    ]
  },
  {
    num: '04',
    name: 'Autonomous Telemetry & Optimization',
    timeline: 'Continuous // 99.99% Enterprise SLA',
    objective: 'Real-time observability, predictive friction detection, and self-calibrating runtime resource allocation.',
    deliverables: [
      'Valence 120Hz Spatial Interaction Heatmaps',
      'Predictive Edge Pre-Fetching Algorithms',
      'Automated Performance Regression Alerts',
      '24/7 Dedicated Solutions Engineer Escalation'
    ]
  }
];

const pillars = [
  {
    num: '01',
    title: 'Zero-Overhead Rust & WebGPU Core',
    description: 'We reject bloated client-side JavaScript runtimes. The 13 Studios engine is authored in Rust and compiled to WebAssembly, dispatching compute shaders directly to client GPUs for buttery 120 FPS performance with zero garbage collection stutter.',
    specs: ['Rust / WebAssembly Runtime', 'Native WebGPU Compute Shaders', 'Zero-Copy Framebuffer Transfers', 'Sub-100KB Production Core Payload']
  },
  {
    num: '02',
    title: 'Anycast Distributed Edge Mesh',
    description: 'Every front-end asset, state token, and dynamic API route is served from an ultra-low latency mesh of 280+ edge POPs worldwide. Users in Tokyo, Nairobi, Zurich, and San Francisco experience instantaneous sub-8ms responses.',
    specs: ['280+ Global Edge Data Centers', 'Sub-8ms Anycast Network Routing', 'Brotli & Zstandard Adaptive Compression', 'DDoS & TLS 1.3 Hardware Acceleration']
  },
  {
    num: '03',
    title: 'The Proprietary 13-Point Grid Matrix',
    description: 'Our proprietary layout algorithm calculates visual hierarchy, padding, and typographic proportion across 13 mathematically harmonic columns. It eliminates cognitive friction and brings quiet luxury restraint to complex enterprise dashboards.',
    specs: ['Mathematical Asymmetric Grid Solver', 'Fluid Dynamic Viewport Scaling', 'Automated Visual Balance Verification', 'Adaptive Accessibility & Contrast Ratios']
  },
  {
    num: '04',
    title: 'Enterprise Cryptographic Provenance',
    description: 'Built from day one for defense-grade security and regulated industries. Every component build is cryptographically signed, immutable, and backed by automated SOC2 Type II audit logging and enterprise SSO.',
    specs: ['SOC2 Type II & ISO 27001 Certified', 'Hardware Security Module (HSM) Signing', 'SAML 2.0 / Okta Enterprise Identity', 'Zero-Trust Role-Based Access Control']
  }
];

const galleryImages = [
  {
    src: 'assets/studio_atelier.png',
    title: 'The Systems Architecture Lab',
    caption: 'Silicon & Display Research Hub — Kiambu / Nairobi Flagship'
  },
  {
    src: 'assets/studio_craft.png',
    title: 'Tactile Materiality & Hardware Bench',
    caption: 'Calibrating physical and digital sensory feedback curves'
  }
];

export default function Studio() {
  const [activePhase, setActivePhase] = useState(0);
  const [gridOverlayActive, setGridOverlayActive] = useState(false);
  const sectionRef = useRef(null);

  const toggleGridOverlay = () => {
    const overlay = document.querySelector('.architectural-13-grid-overlay');
    if (overlay) {
      if (gridOverlayActive) {
        overlay.classList.remove('active');
        setGridOverlayActive(false);
      } else {
        overlay.classList.add('active');
        setGridOverlayActive(true);
      }
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const header = sectionRef.current.querySelector('.section-header');
      const line = header?.querySelector('.section-header-line');
      const title = header?.querySelector('.section-title');
      const num = header?.querySelector('.section-number');

      if (line && title && num) {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );

        gsap.fromTo(
          [num, title],
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="studio" className="studio-section">
      <div className="studio-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-line"></div>
          <div className="section-header-text">
            <span className="section-number">02</span>
            <h2 className="section-title">Company & Architecture</h2>
          </div>
          <p className="section-header-desc">
            Founded at the convergence of distributed systems engineering, WebGPU graphics, and quiet luxury product design.
          </p>
        </div>

        {/* Live Cluster & Telemetry Status Bar */}
        <div className="startup-telemetry-banner">
          <div className="telemetry-item">
            <span className="telemetry-dot pulse-emerald"></span>
            <span className="telemetry-label">Cluster Status:</span>
            <span className="telemetry-value">All 12 Regions Operational</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-label">Edge Ping:</span>
            <span className="telemetry-value">7.4ms (Anycast)</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-label">WASM Compute:</span>
            <span className="telemetry-value">0.8ms / frame</span>
          </div>
          <div className="telemetry-item">
            <button
              className={`grid-toggle-button ${gridOverlayActive ? 'active' : ''}`}
              onClick={toggleGridOverlay}
              aria-label="Toggle 13-column grid overlay"
            >
              <i className="fa-solid fa-table-cells"></i>
              <span>{gridOverlayActive ? 'Hide 13-Point Matrix' : 'Inspect 13-Point Matrix'}</span>
            </button>
          </div>
        </div>

        {/* Studio Manifesto / Narrative Row */}
        <div className="studio-manifesto-row">
          <div className="manifesto-lead">
            <span className="manifesto-eyebrow">The 13 Thesis</span>
            <h3 className="manifesto-headline">
              Software should feel as calm, enduring, and mathematically precise as high architecture.
            </h3>
          </div>
          <div className="manifesto-body">
            <p className="manifesto-text">
              We started 13 Studios with a conviction: the modern web is drowning in noisy JavaScript bloat, clumsy frameworks, and frantic visual churn. High-growth enterprises deserve digital tools engineered with the uncompromising precision of Swiss horology and the raw speed of bare-metal computing.
            </p>
            <p className="manifesto-text">
              From our global headquarters in Nairobi to engineering nodes in San Francisco and London, our team builds the foundational software substrate that enables developers to stream photorealistic, physics-calibrated interfaces without compromise.
            </p>
            <div className="manifesto-key-stats">
              <div className="m-stat">
                <span className="m-val">$18.5M</span>
                <span className="m-lbl">Series A Capital</span>
              </div>
              <div className="m-stat">
                <span className="m-val">1,400+</span>
                <span className="m-lbl">Tech Teams Deployed</span>
              </div>
              <div className="m-stat">
                <span className="m-val">99.99%</span>
                <span className="m-lbl">Enterprise SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Hardware & Lab Showcase Gallery */}
        <div className="studio-gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="studio-gallery-card">
              <div
                className="studio-gallery-img"
                style={{ backgroundImage: `url('${img.src}')` }}
              ></div>
              <div className="studio-gallery-caption">
                <span className="gallery-plate-num">FACILITY PLATE 0{idx + 1}</span>
                <h4 className="gallery-plate-title">{img.title}</h4>
                <p className="gallery-plate-desc">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Four Technical Architecture Pillars */}
        <div className="pillars-section-wrap">
          <div className="pillars-header">
            <span className="pillars-eyebrow">Core Engineering Substrates</span>
            <h3 className="pillars-heading">Architectural Foundations of the 13 Platform</h3>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="pillar-card">
                <div className="pillar-top">
                  <span className="pillar-num">{pillar.num}</span>
                  <div className="pillar-accent-line"></div>
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-description">{pillar.description}</p>
                
                <div className="pillar-services-list">
                  <span className="pillar-services-title">Technical Specifications:</span>
                  <ul>
                    {pillar.specs.map((spec, i) => (
                      <li key={i}>
                        <span className="spec-check">✦</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founders & Executive Leadership */}
        <div className="leadership-section-wrap">
          <div className="leadership-header">
            <span className="leadership-eyebrow">Founding Team & Leadership</span>
            <h3 className="leadership-heading">Engineers, Researchers & Systems Architects</h3>
            <p className="leadership-sub">
              Leadership combining decades of experience across distributed systems, GPU research, and enterprise scale.
            </p>
          </div>

          <div className="leadership-grid">
            {leadership.map((leader, idx) => (
              <div key={idx} className="leader-card">
                <div className="leader-photo-wrap">
                  <div
                    className="leader-photo"
                    style={{ backgroundImage: `url('${leader.image}')` }}
                  ></div>
                  <div className="leader-photo-overlay"></div>
                  <span className="leader-discipline-tag">{leader.discipline}</span>
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{leader.name}</h4>
                  <span className="leader-role">{leader.role}</span>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Stage Platform Deployment Lifecycle */}
        <div className="phases-section-wrap">
          <div className="phases-header">
            <span className="phases-eyebrow">Platform Deployment Lifecycle</span>
            <h3 className="phases-heading">From Terminal Ingestion to Enterprise Scale</h3>
            <p className="phases-sub">
              How engineering teams integrate, compile, and stream 13 Studios in production.
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div className="phase-tabs-row" role="tablist">
            {phases.map((p, idx) => (
              <button
                key={p.num}
                role="tab"
                aria-selected={activePhase === idx}
                className={`phase-tab-btn ${activePhase === idx ? 'active' : ''}`}
                onClick={() => setActivePhase(idx)}
              >
                <span className="tab-p-num">{p.num}</span>
                <span className="tab-p-name">{p.name}</span>
                <span className="tab-p-timeline">{p.timeline.split('//')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Details Display */}
          <div className="phase-active-card">
            <div className="phase-card-header">
              <div className="phase-meta-col">
                <span className="phase-big-num">{phases[activePhase].num}</span>
                <span className="phase-timeline-badge">{phases[activePhase].timeline}</span>
              </div>
              <div className="phase-title-col">
                <h4 className="phase-active-name">{phases[activePhase].name}</h4>
                <p className="phase-objective-text">{phases[activePhase].objective}</p>
              </div>
            </div>

            <div className="phase-deliverables-wrap">
              <span className="phase-del-title">Execution Deliverables & Artifacts:</span>
              <div className="phase-del-grid">
                {phases[activePhase].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="phase-del-item">
                    <span className="del-bullet">✦</span>
                    <span className="del-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
