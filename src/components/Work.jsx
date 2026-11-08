import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CaseStudyModal from './CaseStudyModal';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'vapor',
    title: 'Vapor',
    client: 'Maison Vapor Paris',
    category: 'Brand Architecture / Identity',
    categorySlug: 'brand',
    year: '2026',
    timeline: '14 Weeks',
    image: 'assets/project_vapor.png',
    gallery: ['assets/studio_craft.png', 'assets/blog_minimalism.png'],
    cursorMode: 'explore',
    tagline: 'Olfactory minimalism distilled into an international tactile brand identity and WebGL sensory archive.',
    challenge: 'Maison Vapor required a modern visual identity that conveyed subtle exclusivity without resorting to traditional gold-leaf luxury clichés, appealing to high-net-worth design patrons across Paris, Tokyo, and New York.',
    solution: 'We engineered an identity based on translucent materiality, negative-space typography, and custom glass vessel packaging, paired with a WebGL sensory canvas simulating fragrance dissipation in real-time.',
    metrics: [
      { value: '+142%', label: 'D2C Conversion', desc: 'Direct digital sales post-launch' },
      { value: '3.4×', label: 'Dwell Time', desc: 'Average WebGL interaction session' },
      { value: 'Wallpaper*', label: 'Design Awards', desc: 'Best Packaging Identity 2026' }
    ],
    deliverables: [
      'Brand Architecture & Strategy',
      'Bespoke Display Typography',
      'Tactile Secondary Packaging',
      'Real-Time WebGL Sensory Experience',
      'Global Retail Spatial Guidelines'
    ],
    testimonial: {
      quote: '13 Studios distilled our vision into an identity of breathtaking restraint. The digital flagship outperforms every legacy retail benchmark.',
      author: 'Éloïse Laurent',
      title: 'Creative Director'
    }
  },
  {
    id: 'aero',
    title: 'Aero',
    client: 'Aero Technologies Zürich',
    category: 'Motion / Art Direction',
    categorySlug: 'motion',
    year: '2025',
    timeline: '10 Weeks',
    image: 'assets/project_aero.png',
    gallery: ['assets/blog_fluidity.png', 'assets/project_solaria.png'],
    cursorMode: 'play',
    tagline: 'Physics-based aerodynamic simulations translated into a generative identity and motion language.',
    challenge: 'Aero Technologies required an ultra-clean visual narrative to explain complex multi-physics turbulent airflow engineering to sovereign wealth funds and aerospace partners.',
    solution: 'Using custom computational velocity vector mapping and GPU shaders, we turned dry simulation data into striking cinematic choreography, defining their entire global brand presence.',
    metrics: [
      { value: '3.8M+', label: 'Global Impressions', desc: 'Across tech & industrial keynotes' },
      { value: '$65M', label: 'Series C Facilitation', desc: 'Institutional capital secured' },
      { value: 'Red Dot', label: 'Best of the Best', desc: 'Industrial Motion Direction 2025' }
    ],
    deliverables: [
      'Generative Vector Physics Engine',
      'Cinema 4D Art Direction',
      'Brand Motion Principles & Easing Tokens',
      'Investor Visual Monograph',
      'Keynote Interactive Canvas'
    ],
    testimonial: {
      quote: 'They took aerodynamic equations and made them poetic. The brand presentation unified our engineering credibility with institutional prestige.',
      author: 'Dr. Henrik Lindqvist',
      title: 'Chief Technology Officer'
    }
  },
  {
    id: 'chrono',
    title: 'Chrono',
    client: 'Chrono Manufacture Geneva',
    category: 'Digital Platforms / UI-UX',
    categorySlug: 'digital',
    year: '2026',
    timeline: '16 Weeks',
    image: 'assets/project_chrono.png',
    gallery: ['assets/client_julian.png', 'assets/blog_structure.png'],
    cursorMode: 'view',
    tagline: 'High-horology digital flagship featuring a real-time mechanical escapement configurator.',
    challenge: 'Swiss luxury watchmaker Chrono sought to modernize their private client buying experience, bridging centuries-old hand-finishing craftsmanship with an immaculate digital touchpoint.',
    solution: 'We developed a 60fps micro-mechanical 3D configurator rendered on the 13-point architectural grid, accompanied by an editorial private-salon booking platform for collectors.',
    metrics: [
      { value: '+210%', label: 'Private Salon Inquiries', desc: 'Bespoke timepiece consultations' },
      { value: '€4.6M', label: 'Digital Order Volume', desc: 'Within first 90 days of release' },
      { value: 'FWA', label: 'Site of the Day', desc: 'Awarded for precision WebGL fidelity' }
    ],
    deliverables: [
      'Digital Flagship UX/UI Architecture',
      'Real-Time 3D Tourbillon Configurator',
      'Bespoke Haute Horology Typography',
      'Collector Private Salon Portal',
      'Multi-Currency Settlement Interface'
    ],
    testimonial: {
      quote: '13 Studios respected our 120-year pedigree while positioning our digital presence decades ahead of our competition.',
      author: 'Julian Croft',
      title: 'Managing Director'
    }
  },
  {
    id: 'aether',
    title: 'Aether',
    client: 'Aether Spatial Atelier Tokyo',
    category: 'Spatial / Architecture',
    categorySlug: 'motion',
    year: '2026',
    timeline: '12 Weeks',
    image: 'assets/project_aether.png',
    gallery: ['assets/hero_architecture.png', 'assets/studio_atelier.png'],
    cursorMode: 'explore',
    tagline: 'Spatial computing interfaces and digital monograph for Tokyo architectural pavilions.',
    challenge: 'Aether needed a spatial digital monograph that translated the tangible tactility of cast concrete, cedar wood, and light infiltration into a high-framerate web exhibition.',
    solution: 'We created an editorial canvas governed by strict Japanese architectural balance, dynamic light-shadow raymarching, and spatial audio cues.',
    metrics: [
      { value: '99.2%', label: 'Collector Approval', desc: 'Global architecture jury rating' },
      { value: 'Awwwards', label: 'Site of the Day', desc: 'Design Excellence & Architectural Poise' },
      { value: '4.8×', label: 'Editorial Sharing', desc: 'Featured in 40+ international journals' }
    ],
    deliverables: [
      'Spatial Interactive Web Monograph',
      'Sound Architecture & Sonic Identity',
      'Curatorial Editorial Layout',
      'Dynamic Light Shading Shaders',
      'Printed Exhibition Compendium'
    ],
    testimonial: {
      quote: 'Their spatial sensibility is unmatched. They translated physical architectural silence into a digital medium with immense poise.',
      author: 'Kenji Takahashi',
      title: 'Lead Architect'
    }
  },
  {
    id: 'solaria',
    title: 'Solaria',
    client: 'Solaria Energy Group Stockholm',
    category: 'Digital Platforms / UI-UX',
    categorySlug: 'digital',
    year: '2025',
    timeline: '14 Weeks',
    image: 'assets/project_solaria.png',
    gallery: ['assets/blog_structure.png', 'assets/project_aero.png'],
    cursorMode: 'view',
    tagline: 'Decentralized renewable grid operating console and telemetry monitoring interface.',
    challenge: 'Managing thousands of high-output grid nodes required an intuitive, zero-latency visual operating system capable of presenting terabytes of energy telemetry without cognitive fatigue.',
    solution: 'We implemented a dark-mode precision dashboard utilizing high-density micro-charts, ergonomic typography, and instant status triage workflows designed for 24/7 mission-critical operations.',
    metrics: [
      { value: '-64%', label: 'Cognitive Load', desc: 'Reduction in operator response time' },
      { value: '$38M', label: 'Series B Round', desc: 'Showcasing interface to investors' },
      { value: '99.99%', label: 'Interface Uptime', desc: 'Built on resilient edge architecture' }
    ],
    deliverables: [
      'Enterprise Telemetry Dashboard',
      'Design System (200+ Components)',
      'Data Visualization Architecture',
      'Dark Mode Ergonomic Palette',
      'Real-Time WebSocket Stream System'
    ],
    testimonial: {
      quote: '13 Studios converted an overwhelmingly dense telemetry feed into an interface of singular clarity and beauty.',
      author: 'Dr. Sophia Sterling',
      title: 'VP of Product'
    }
  },
  {
    id: 'valence',
    title: 'Valence',
    client: 'Valence Asset Partners London',
    category: 'Brand Architecture / Identity',
    categorySlug: 'brand',
    year: '2026',
    timeline: '12 Weeks',
    image: 'assets/project_valence.png',
    gallery: ['assets/studio_craft.png', 'assets/project_chrono.png'],
    cursorMode: 'explore',
    tagline: 'Algorithmic private wealth portal and brand architecture for ultra-high-net-worth family offices.',
    challenge: 'Valence needed to establish sovereign credibility for an algorithmic multi-asset management system, conveying uncompromising institutional security and quiet discretion.',
    solution: 'We formulated a refined brand architecture marrying obsidian and brushed steel textures with razor-sharp editorial typography and a bespoke encrypted portfolio viewer.',
    metrics: [
      { value: '$1.2B+', label: 'AUM Onboarded', desc: 'Capital allocated through new platform' },
      { value: '100%', label: 'Institutional Adoption', desc: 'Across top 25 family offices' },
      { value: 'TDC', label: 'Typographic Distinction', desc: 'Bespoke tabular numeral suite' }
    ],
    deliverables: [
      'Institutional Brand Identity',
      'Private Wealth Portal UX',
      'Custom Monospaced Financial Typeface',
      'Encrypted Client Reporting System',
      'Physical Metal Credential Kits'
    ],
    testimonial: {
      quote: 'Discretion and authority were our non-negotiables. 13 Studios executed our brand at a level that commands immediate institutional respect.',
      author: 'Marcus Vance',
      title: 'Managing Partner'
    }
  }
];

const categories = [
  { id: 'all', label: 'All Works (6)' },
  { id: 'brand', label: 'Brand Architecture' },
  { id: 'digital', label: 'Digital Platforms' },
  { id: 'motion', label: 'Motion & Spatial' }
];

export default function Work() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.categorySlug === activeCategory);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const ctx = gsap.context(() => {
      // Header line and title animation
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

      // Card reveals
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    // 3D Perspective Tilt on Hover (13-degree motif)
    const cleanupListeners = [];
    if (!isTouchDevice) {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const inner = card.querySelector('.project-card-inner');
        if (!inner) return;

        const onMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const cardWidth = rect.width;
          const cardHeight = rect.height;

          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          const xPct = mouseX / cardWidth - 0.5;
          const yPct = mouseY / cardHeight - 0.5;

          const maxTilt = 10;
          const rotateY = xPct * maxTilt;
          const rotateX = -yPct * maxTilt;

          gsap.to(inner, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.02,
            duration: 0.4,
            ease: 'power2.out',
            transformPerspective: 1000,
          });
        };

        const onMouseLeave = () => {
          gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
          });
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);

        cleanupListeners.push(() => {
          card.removeEventListener('mousemove', onMouseMove);
          card.removeEventListener('mouseleave', onMouseLeave);
        });
      });
    }

    return () => {
      ctx.revert();
      cleanupListeners.forEach((cleanup) => cleanup());
    };
  }, [filteredProjects]);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <section ref={sectionRef} id="work" className="work-section">
      <div className="section-header">
        <span className="section-number">01 /</span>
        <h2 className="section-title">Selected Work</h2>
        <div className="section-header-line"></div>
      </div>

      {/* Filter Tabs & Section Overview */}
      <div className="work-controls-wrap">
        <p className="work-section-intro">
          A curated compendium of commissioned brand architectures, digital flagships, and spatial motion systems developed under the 13-point discipline.
        </p>
        <div className="category-filter-pills" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="project-card"
            data-cursor-mode={project.cursorMode}
            data-project={project.id}
            onClick={() => handleOpenCaseStudy(project)}
          >
            <div className="project-card-inner">
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-hover-overlay">
                  <span className="project-hover-cta">
                    Explore Case Study <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
                {project.metrics?.[0] && (
                  <div className="project-card-badge">
                    <span className="badge-val">{project.metrics[0].value}</span>
                    <span className="badge-lbl">{project.metrics[0].label}</span>
                  </div>
                )}
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-client-name">{project.client}</span>
                </div>
                <p className="project-card-tagline">{project.tagline}</p>
                <div className="project-card-footer">
                  <span className="project-cta-link underline-hover">
                    View Case Study <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                  <span className="project-timeline-tag">{project.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={handleCloseCaseStudy}
        onSelectNext={handleNextProject}
      />
    </section>
  );
}
