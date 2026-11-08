import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const leadership = [
  {
    name: 'Brian Kimani',
    role: 'Founder & Executive Creative Director',
    discipline: 'Brand Architecture & Semiotics',
    image: 'assets/team_brian.png',
    bio: 'Guiding structural brand transformations for global innovators. Over a decade formulating quiet-luxury identities, custom typographic suites, and architectural flagships across Europe, Africa, and North America.'
  },
  {
    name: 'Elena Vance',
    role: 'Director of Digital Systems',
    discipline: 'Computational Platforms & WebGL',
    image: 'assets/team_elena.png',
    bio: 'Specialist in high-framerate kinetic physics, design token architecture, and zero-latency micro-interactions. Championing mathematical restraint in scalable enterprise design systems.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Strategic Formulation',
    discipline: 'Topology & Sovereign Positioning',
    image: 'assets/team_marcus.png',
    bio: 'Advising private equity sponsors, sovereign wealth initiatives, and emerging market benchmarks on structural brand positioning, investor narrative clarity, and institutional prestige.'
  }
];

const phases = [
  {
    num: '01',
    name: 'Diagnostic Intelligence',
    timeline: 'Weeks 1–2',
    objective: 'Forensic deconstruction of brand equity, market positioning, and architectural requirements.',
    deliverables: [
      'Competitive Topology & Semiotic Audit',
      'Executive Stakeholder Discovery Interviews',
      'Architectural Requirements Matrix',
      'Strategic Differentiation Blueprint'
    ]
  },
  {
    num: '02',
    name: 'Architectural Formulation',
    timeline: 'Weeks 3–5',
    objective: 'Translating strategy into spatial wireframes, typographic heirlooms, and conceptual directions.',
    deliverables: [
      'Core Creative Directions & Editorial Monograph',
      'Structural Grid Proportions (13-Col System)',
      'Custom Typography & Numeral Specifications',
      'Interactive Micro-Motion Concept Prototypes'
    ]
  },
  {
    num: '03',
    name: 'High-Fidelity Execution',
    timeline: 'Weeks 6–10',
    objective: 'Precision production across digital flagships, 3D spatial assets, and tokenized design systems.',
    deliverables: [
      'Production WebGL / 3D Asset Pipeline',
      'Component Design System (Figma & Code Tokens)',
      'Editorial Responsive Layouts & Interactions',
      'Cross-Platform Performance & Latency Tuning'
    ]
  },
  {
    num: '04',
    name: 'Stewardship & Governance',
    timeline: 'Ongoing / Post-Launch',
    objective: 'Continuous stewardship ensuring brand integrity, multi-market expansion, and technical resilience.',
    deliverables: [
      'Brand Governance Standards & Manuals',
      'Multi-Market Asset Localisation Protocols',
      'Quarterly Creative Advisory Checkpoints',
      'Direct Director Architectural Stewardship'
    ]
  }
];

const pillars = [
  {
    num: '01',
    title: 'Brand Architecture & Semiotics',
    description: 'We craft comprehensive verbal and visual identities for market leaders. From naming and positioning to custom typographic suites and packaging systems, we build singular brand assets that endure for decades.',
    services: ['Strategic Positioning', 'Visual & Verbal Identity', 'Bespoke Display Typography', 'Tactile Luxury Packaging', 'Brand Architecture Guidelines']
  },
  {
    num: '02',
    title: 'Digital Flagships & Platforms',
    description: 'We construct digital platforms that function as architectural flagships. Every interface is governed by the 13-point spatial grid, blending quiet editorial typography with fluid, responsive performance.',
    services: ['Editorial Web Architecture', 'Bespoke E-Commerce Platforms', 'Design Systems & Tokens', 'Interactive 3D & WebGL', 'Headless CMS Architecture']
  },
  {
    num: '03',
    title: 'Motion Direction & Spatial 3D',
    description: 'Motion is not an afterthought; it is the nervous system of modern luxury. We choreograph physics-calibrated deceleration curves, generative shaders, and spatial environments that communicate weight and value.',
    services: ['3D CGI & Spatial Direction', 'Physics-Based Interaction Physics', 'Generative Motion Branding', 'Launch Cinema & Monograph Films', 'Interface Sonic Architecture']
  },
  {
    num: '04',
    title: 'Design Systems & Engineering',
    description: 'Great design demands uncompromising engineering fidelity. We develop modular, tokenized design systems and clean production frontends that empower in-house teams to maintain absolute aesthetic consistency.',
    services: ['Design Tokens & Systems', 'Enterprise UI Kits', 'Front-End Implementation', 'Performance & Accessibility', 'Technical Creative Governance']
  }
];

export default function Studio() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [activePhase, setActivePhase] = useState(0);
  const [isGridOverlayActive, setIsGridOverlayActive] = useState(false);

  const toggleGridOverlay = () => {
    setIsGridOverlayActive((prev) => {
      const next = !prev;
      document.body.classList.toggle('show-13-grid-overlay', next);
      return next;
    });
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
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { fontWeight: 200, opacity: 0.5 },
          {
            fontWeight: 500,
            opacity: 1,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              end: 'bottom 45%',
              scrub: true,
            },
          }
        );
      }

      gsap.fromTo(
        '.atelier-gallery-item, .pillar-card, .director-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.atelier-visual-gallery',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="studio" className="studio-section">
      <div className="section-header">
        <span className="section-number">02 /</span>
        <h2 className="section-title">The Studio</h2>
        <div className="section-header-line"></div>
      </div>

      <div className="studio-content">
        {/* Core Manifesto Statement */}
        <div className="studio-statement">
          <span className="manifesto-eyebrow">Studio Manifesto</span>
          <p ref={textRef} className="variable-weight-text">
            We believe in the power of restraint. In an attention economy saturated with noise, quiet luxury is the ultimate statement of authority. We construct brand architectures that are structurally balanced, conceptually rich, and seamlessly executed.
          </p>
        </div>

        {/* Visual Atelier & Material Craftsmanship Showcase */}
        <div className="atelier-visual-gallery">
          <div className="atelier-gallery-item atelier-large">
            <div className="gallery-img-wrap">
              <img
                src="assets/studio_atelier.png"
                alt="13 Studios Flagship Atelier in Kiambu, Kenya"
                className="gallery-photo"
                loading="lazy"
              />
              <div className="gallery-overlay-badge">
                <span className="badge-dot"></span>
                <span>Kiambu Atelier // Flagship Sanctum</span>
              </div>
            </div>
            <div className="gallery-caption">
              <span className="cap-title">Architectural Atelier // Kiambu, Kenya</span>
              <span className="cap-desc">Floor-to-ceiling vistas, board-formed concrete & solid dark oak drafting tables where every monograph originates.</span>
            </div>
          </div>

          <div className="atelier-gallery-item atelier-compact">
            <div className="gallery-img-wrap">
              <img
                src="assets/studio_craft.png"
                alt="Tactile Luxury Branding Craftsmanship & Cotton Paper Archive"
                className="gallery-photo"
                loading="lazy"
              />
              <div className="gallery-overlay-badge">
                <span className="badge-dot"></span>
                <span>Tactile Formulation</span>
              </div>
            </div>
            <div className="gallery-caption">
              <span className="cap-title">Tactile Materiality & Archival Print</span>
              <span className="cap-desc">600gsm debossed cotton substrates, micro-foil typography, and custom fluted glass packaging prototypes.</span>
            </div>
          </div>
        </div>

        {/* Leadership & Practice Directors Showcase */}
        <div className="studio-sub-header">
          <span className="manifesto-eyebrow">Studio Leadership</span>
          <h3 className="studio-sub-title">Practice Directors</h3>
          <p className="studio-sub-desc">Direct executive involvement on every engagement — no junior handoffs or bureaucratic dilution.</p>
        </div>

        <div className="directors-grid">
          {leadership.map((dir, idx) => (
            <div key={idx} className="director-card">
              <div className="director-photo-wrap">
                <img
                  src={dir.image}
                  alt={dir.name}
                  className="director-photo"
                  loading="lazy"
                />
                <div className="director-discipline-badge">
                  <span>{dir.discipline}</span>
                </div>
              </div>
              <div className="director-info">
                <h4 className="director-name">{dir.name}</h4>
                <span className="director-role">{dir.role}</span>
                <p className="director-bio">{dir.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Pillars Grid */}
        <div className="studio-sub-header">
          <span className="manifesto-eyebrow">Disciplinary Foundations</span>
          <h3 className="studio-sub-title">Core Disciplinary Practices</h3>
          <p className="studio-sub-desc">Four specialized disciplines integrated into a unified creative architecture.</p>
        </div>

        <div className="studio-pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="pillar-card">
              <span className="pillar-num">{pillar.num} //</span>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.description}</p>
              <div className="pillar-services">
                <span className="services-heading">Core Capabilities:</span>
                <ul className="pillar-services-list">
                  {pillar.services.map((svc, i) => (
                    <li key={i}>{svc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Phased Engagement Model & Interactive Methodology Explorer */}
        <div className="studio-methodology-wrapper">
          <div className="methodology-header">
            <div>
              <span className="methodology-eyebrow">Engagement Framework</span>
              <h3 className="methodology-title">The 13 Phased Methodology</h3>
            </div>
            <p className="methodology-summary">
              Every commission proceeds through four deliberate review gates, ensuring mathematical precision from diagnosis to global rollout.
            </p>
          </div>

          <div className="methodology-tabs" role="tablist">
            {phases.map((ph, idx) => (
              <button
                key={ph.num}
                role="tab"
                aria-selected={activePhase === idx}
                className={`methodology-tab-btn ${activePhase === idx ? 'is-active' : ''}`}
                onClick={() => setActivePhase(idx)}
              >
                <span className="tab-num">{ph.num}</span>
                <span className="tab-name">{ph.name}</span>
                <span className="tab-timeline">{ph.timeline}</span>
              </button>
            ))}
          </div>

          <div className="methodology-card-panel">
            <div className="panel-header-row">
              <div>
                <span className="panel-phase-badge">Phase {phases[activePhase].num}</span>
                <h4 className="panel-phase-title">{phases[activePhase].name}</h4>
              </div>
              <span className="panel-duration-pill">{phases[activePhase].timeline}</span>
            </div>
            <p className="panel-objective">{phases[activePhase].objective}</p>

            <div className="panel-deliverables-block">
              <span className="deliverables-title">Phase Milestones & Executive Deliverables:</span>
              <div className="panel-deliverables-grid">
                {phases[activePhase].deliverables.map((item, i) => (
                  <div key={i} className="panel-del-item">
                    <span className="del-bullet">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The 13 Standard & Interactive Grid Overlay */}
        <div className="studio-standard-banner">
          <div className="standard-info">
            <span className="standard-tag">Proprietary Discipline</span>
            <h3 className="standard-title">The 13-Point Architectural Grid</h3>
            <p className="standard-desc">
              Every layout, typographic hierarchy, and motion easing curve across our work is calculated on a 13-column structural matrix. This deliberate asymmetry creates an indelible rhythm between content density and serene negative space.
            </p>
            <button
              className="toggle-grid-btn"
              onClick={toggleGridOverlay}
              aria-pressed={isGridOverlayActive}
            >
              <i className={`fa-solid ${isGridOverlayActive ? 'fa-eye-slash' : 'fa-grid-2'}`}></i>
              <span>{isGridOverlayActive ? 'Deactivate 13-Grid Overlay' : 'Preview 13-Grid System Overlay'}</span>
            </button>
          </div>
          <div className="standard-visual-motif">
            <div className="motif-bars">
              {[...Array(13)].map((_, i) => (
                <span key={i} className="motif-bar" style={{ height: `${30 + (i % 5) * 14}px` }}>
                  <small>{i + 1}</small>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
