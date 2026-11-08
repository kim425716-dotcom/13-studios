import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CaseStudyModal from './CaseStudyModal';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'vapor',
    title: 'Vapor Engine',
    client: 'Maison Vapor & Global SaaS Partners',
    category: 'Core Engine / WebGPU',
    categorySlug: 'engine',
    year: 'v2.4',
    timeline: 'GA Release',
    image: 'assets/project_vapor.png',
    gallery: ['assets/studio_craft.png', 'assets/blog_minimalism.png'],
    cursorMode: 'explore',
    npmPkg: '@13studios/vapor',
    tagline: 'Sub-millisecond WebGPU particle physics and procedural material shaders for interactive 3D web applications.',
    challenge: 'Enterprise web applications struggle to deliver immersive 3D graphics and fluid particle physics without crippling mobile browser framerates, exhausting device batteries, and blowing initial bundle budgets beyond 15MB.',
    solution: 'We engineered Vapor Engine as a Rust-compiled WebAssembly runtime driving native WebGPU pipelines. It executes compute shaders directly on client GPUs with zero garbage collection spikes and sub-100KB initial bundle overhead.',
    metrics: [
      { value: '+142%', label: 'D2C Conversion Lift', desc: 'Observed across enterprise deployments' },
      { value: '3.4×', label: 'Session Dwell Time', desc: 'Average user interaction benchmark' },
      { value: '<1.2ms', label: 'Frame Compute Budget', desc: 'Consistent 120 FPS render loop' }
    ],
    deliverables: [
      'WebGPU Compute & Fragment Shaders',
      'Rust-to-WASM Particle Simulator',
      'Procedural Glass & Materiality Shaders',
      'Zero-Copy Framebuffer Pipeline',
      'Universal Fallback for WebGL2'
    ],
    testimonial: {
      quote: '13 Studios Vapor Engine allowed us to stream high-precision sensory 3D models directly in mobile browsers with zero lag. It completely shattered our legacy retail conversion records.',
      author: 'Éloïse Laurent',
      title: 'Head of Digital Product, Maison Vapor Paris'
    }
  },
  {
    id: 'aero',
    title: 'Aero Compiler',
    client: 'Aero Technologies & Enterprise Devs',
    category: 'AI & Compiler / Layout',
    categorySlug: 'compiler',
    year: 'v2.4',
    timeline: 'GA Release',
    image: 'assets/project_aero.png',
    gallery: ['assets/blog_fluidity.png', 'assets/project_solaria.png'],
    cursorMode: 'play',
    npmPkg: '@13studios/aero',
    tagline: 'Autonomous design-to-code compiler translating complex spatial canvas models into production React/TypeScript code.',
    challenge: 'Handoff between product designers and front-end engineers loses 40% of interaction fidelity and introduces endless weeks of manual CSS micro-tuning, braking velocity at high-growth engineering teams.',
    solution: 'Aero Compiler ingests Figma and spatial design files, parses semantic geometry via AST graphs, and outputs clean, accessible, zero-runtime React & Tailwind components with physics-calibrated GSAP animation hooks.',
    metrics: [
      { value: '3.8M+', label: 'Components Compiled', desc: 'Across production engineering pipelines' },
      { value: '-75%', label: 'Sprint Cycle Overhead', desc: 'Drastically cuts design-to-code drift' },
      { value: '$65M', label: 'Engineering Value Unlocked', desc: 'Demonstrated developer hours saved' }
    ],
    deliverables: [
      'Abstract Syntax Tree (AST) Parser',
      'Semantic Token Transpiler',
      'Auto-Layout Spring Physics Solver',
      'Automated Git Commit & CI/CD Action',
      'TypeScript Strict Type Validator'
    ],
    testimonial: {
      quote: 'Aero Compiler took our multi-physics aerodynamic simulation frontends and compiled them into perfect production code. What took three engineers 8 weeks now happens in 40 seconds.',
      author: 'Dr. Henrik Lindqvist',
      title: 'CTO, Aero Technologies Zürich'
    }
  },
  {
    id: 'chrono',
    title: 'Chrono OS',
    client: 'Chrono Manufacture & Fintech Unicorns',
    category: 'Developer SDK / State',
    categorySlug: 'sdk',
    year: 'v2.4',
    timeline: 'GA Release',
    image: 'assets/project_chrono.png',
    gallery: ['assets/client_julian.png', 'assets/blog_structure.png'],
    cursorMode: 'view',
    npmPkg: '@13studios/chrono',
    tagline: 'Deterministic micro-mechanical state synchronizer and 60fps motion physics engine for mission-critical apps.',
    challenge: 'Mission-critical fintech and luxury digital salons require sub-frame deterministic UI synchronization across distributed clients without UI flicker or state divergence during high-volatility events.',
    solution: 'Chrono OS implements a Conflict-Free Replicated Data Type (CRDT) engine with micro-second event ordering, coupled with hardware-accelerated spring physics that maintain absolute tactile precision.',
    metrics: [
      { value: '99.999%', label: 'State Consistency', desc: 'Zero drift during global concurrent sessions' },
      { value: '€4.6M', label: 'Digital Order Volume', desc: 'Handled in the first 90 days of release' },
      { value: '<4ms', label: 'Sync Network Latency', desc: 'Global peer-to-peer event propagation' }
    ],
    deliverables: [
      'Deterministic CRDT State Engine',
      'Micro-Mechanical 3D Escapement Rig',
      'Sub-Frame Input Interpolation',
      'Cryptographic Biometric Auth Bridge',
      'Multi-Currency Real-Time Settlement Protocol'
    ],
    testimonial: {
      quote: '13 Studios Chrono OS allowed our collectors to inspect mechanical escapements down to the micrometer and execute high-value transactions with zero latency.',
      author: 'Julian Croft',
      title: 'Managing Director, Chrono Manufacture Geneva'
    }
  },
  {
    id: 'aether',
    title: 'Aether Spatial',
    client: 'Aether Spatial & Hardware Partners',
    category: 'Core Engine / Spatial',
    categorySlug: 'engine',
    year: 'v2.4',
    timeline: 'GA Release',
    image: 'assets/project_aether.png',
    gallery: ['assets/blog_minimalism.png', 'assets/studio_atelier.png'],
    cursorMode: 'explore',
    npmPkg: '@13studios/aether',
    tagline: 'Adaptive Level-of-Detail 3D mesh streaming engine delivering browser-native spatial computing under 50KB initial payload.',
    challenge: 'Streaming complex spatial geometry and photorealistic 3D assets to heterogeneous consumer devices causes excessive memory bloat, long loading screens, and thermal throttling on mobile GPUs.',
    solution: 'Aether Spatial utilizes octree volumetric geometry partitioning, WASM Draco streaming, and progressive asset streaming to render massive scenes immediately while streaming higher polygon detail on demand.',
    metrics: [
      { value: '-82%', label: 'Asset Payload Size', desc: 'Progressive LOD geometric streaming' },
      { value: '120 FPS', label: 'Fluidity on Mobile', desc: 'Zero frame drops on modern mobile GPUs' },
      { value: '500k+', label: 'Concurrent Mesh Nodes', desc: 'Stress-tested architectural canvas' }
    ],
    deliverables: [
      'Octree Volumetric LOD Partitioner',
      'Draco WebAssembly Mesh Decompressor',
      'Progressive Texture Streamer',
      'Headless Scene Graph Orchestrator',
      'WebXR & VisionOS Spatial Bridge'
    ],
    testimonial: {
      quote: 'Aether Spatial gives us the rendering power of a native game engine directly inside standard web browsers. It is the gold standard for spatial computing infrastructure.',
      author: 'Kenji Sato',
      title: 'VP of Spatial Architecture, Aether Tokyo'
    }
  },
  {
    id: 'solaria',
    title: 'Solaria Sentinel',
    client: 'Solaria Energy Group & Enterprise Orgs',
    category: 'Edge & Cloud / Security',
    categorySlug: 'cloud',
    year: 'v2.4',
    timeline: 'GA Release',
    image: 'assets/project_solaria.png',
    gallery: ['assets/project_valence.png', 'assets/team_elena.png'],
    cursorMode: 'view',
    npmPkg: '@13studios/solaria',
    tagline: 'Enterprise cryptographic asset signing, immutable design token history, and zero-trust edge access control.',
    challenge: 'Enterprise infrastructure teams require strict SOC2 Type II compliance, immutable audit logging, and cryptographic verification of all front-end assets to prevent supply chain tampering and unauthorized asset drifts.',
    solution: 'Solaria Sentinel embeds cryptographic SHA-256 signatures and hardware security key validation into the 13 Studios deployment pipeline, creating an unforgeable audit trail for every asset, token, and edge route.',
    metrics: [
      { value: '-64%', label: 'Audit Turnaround', desc: 'Instant cryptographic compliance export' },
      { value: 'Zero', label: 'Security Vulnerabilities', desc: 'SOC2 Type II certified edge pipeline' },
      { value: '100%', label: 'Immutable Provenance', desc: 'Cryptographically verified build manifests' }
    ],
    deliverables: [
      'Cryptographic Asset Hash Verification',
      'SOC2 Type II Automated Audit Vault',
      'SAML 2.0 & Okta Enterprise SSO Bridge',
      'Role-Based Granular Access Control (RBAC)',
      'Anycast DDoS & Supply-Chain Shield'
    ],
    testimonial: {
      quote: 'Solaria Sentinel gave our security compliance board complete confidence. It reduced our enterprise onboarding review cycle from months to 48 hours.',
      author: 'Dr. Sophia Sterling',
      title: 'VP of Engineering, Solaria Energy Group'
    }
  },
  {
    id: 'valence',
    title: 'Valence Telemetry',
    client: 'Valence Asset Partners & Scale SaaS',
    category: 'Edge & Cloud / Analytics',
    categorySlug: 'cloud',
    year: 'v2.4',
    timeline: 'GA Release',
    image: 'assets/project_valence.png',
    gallery: ['assets/team_marcus.png', 'assets/hero_architecture.png'],
    cursorMode: 'explore',
    npmPkg: '@13studios/valence',
    tagline: 'Real-time spatial observability, cognitive friction heatmaps, and on-device ML anomaly detection.',
    challenge: 'Traditional web analytics track simple page clicks without measuring spatial attention, user comprehension friction, or render pipeline bottlenecks that silently kill user conversion in high-stakes software.',
    solution: 'Valence Telemetry captures 120Hz micro-interaction coordinates, computes cognitive dwell vectors on-device, and streams encrypted telemetry back to our edge analytics pipeline in under 2ms.',
    metrics: [
      { value: '$1.2B+', label: 'Enterprise GMV Monitored', desc: 'Securely analyzed in real-time' },
      { value: '2.4×', label: 'Conversion Lift', desc: 'Achieved through predictive friction removal' },
      { value: '<2ms', label: 'Telemetry Edge Overhead', desc: 'Zero degradation to host application thread' }
    ],
    deliverables: [
      'On-Device Vector Heatmap Engine',
      'Cognitive Friction Index (CFI) Analyzer',
      'Edge-Aggregated Anomaly Alerts',
      'Full Privacy-Compliant Zero-PII Pipeline',
      'Native Datadog & Snowflake Connectors'
    ],
    testimonial: {
      quote: 'Valence Telemetry is the telemetry tool we always wished existed for high-end digital products. It exposes user confusion before it ever turns into customer churn.',
      author: 'Marcus Vance',
      title: 'Managing Partner, Valence Asset Partners'
    }
  }
];

const categoryTabs = [
  { id: 'all', label: 'All Modules' },
  { id: 'engine', label: 'Core Engine' },
  { id: 'compiler', label: 'AI & Compiler' },
  { id: 'sdk', label: 'Developer SDK' },
  { id: 'cloud', label: 'Edge & Cloud' }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const workGridRef = useRef(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.categorySlug === activeCategory);

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

      // Parallax on project cards
      const cards = sectionRef.current.querySelectorAll('.work-card');
      cards.forEach((card) => {
        const img = card.querySelector('.work-card-img');
        if (img) {
          gsap.fromTo(
            img,
            { y: '-8%' },
            {
              y: '8%',
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section ref={sectionRef} id="work" className="work-section">
      <div className="work-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-line"></div>
          <div className="section-header-text">
            <span className="section-number">01</span>
            <h2 className="section-title">Platform Modules</h2>
          </div>
          <p className="section-header-desc">
            The 13 Studios cloud and client-side ecosystem: high-performance WebGPU engines, autonomous design-to-code compilers, and deterministic edge runtimes.
          </p>
        </div>

        {/* Startup Category Tabs */}
        <div className="work-filter-bar">
          <div className="work-filter-pills" role="tablist">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeCategory === tab.id}
                className={`filter-pill-btn ${activeCategory === tab.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                <span>{tab.label}</span>
                {tab.id === 'all' && <span className="tab-count">{projects.length}</span>}
              </button>
            ))}
          </div>
          <span className="filter-summary">
            Showing {filteredProjects.length} production modules • v2.4 Enterprise
          </span>
        </div>

        {/* Modules Grid */}
        <div ref={workGridRef} className="work-grid">
          {filteredProjects.map((p, idx) => (
            <article
              key={p.id}
              className={`work-card work-card-${p.id}`}
              onClick={() => setSelectedProject(p)}
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${p.title} architecture`}
            >
              <div className="work-card-inner">
                {/* Visual Canvas Container */}
                <div className="work-card-visual">
                  <div
                    className="work-card-img"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  ></div>
                  <div className="work-card-overlay"></div>
                  
                  {/* Badge & Inspect Button */}
                  <div className="work-card-badges">
                    <span className="card-badge-version">{p.year}</span>
                    <span className="card-badge-category">{p.category}</span>
                  </div>

                  <div className="work-card-action">
                    <span className="action-pill">
                      <i className="fa-solid fa-code"></i>
                      <span>Inspect Architecture</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="work-card-content">
                  <div className="work-card-top-row">
                    <span className="work-card-index">MODULE {String(idx + 1).padStart(2, '0')}</span>
                    <span className="work-card-pkg"><code>{p.npmPkg}</code></span>
                  </div>

                  <h3 className="work-card-title">{p.title}</h3>
                  <p className="work-card-tagline">{p.tagline}</p>

                  {/* Quantitative Benchmark Row */}
                  <div className="work-card-metrics-strip">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="work-mini-metric">
                        <span className="mini-metric-val">{m.value}</span>
                        <span className="mini-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="work-card-footer">
                    <span className="work-card-view-link">
                      <span>View Specifications & Benchmark</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Module Architecture & Specs Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
