import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArticleModal from './ArticleModal';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    category: 'Systems Architecture',
    date: 'June 2026',
    readTime: '6 min read',
    author: 'Brian Kimani, Co-Founder & CEO',
    authorPhoto: 'assets/team_brian.png',
    title: 'The Restraint of Minimalism in Enterprise Software Architecture',
    excerpt:
      'Why stripping away client-side JavaScript bloat and embracing mathematical grid discipline unlocks sub-10ms user experiences.',
    image: 'assets/blog_minimalism.png',
    content: [
      {
        type: 'p',
        text: 'In contemporary software engineering, the prevailing instinct is additive. When an interface feels sluggish or uninspired, teams routinely install heavier client libraries, append deeper component abstractions, or layer louder telemetry bundles. Yet the world’s most enduring systems are defined not by what they contain, but by what they refuse to tolerate.'
      },
      {
        type: 'h2',
        text: 'The Cost of Framework Churn'
      },
      {
        type: 'p',
        text: 'Every kilobyte of untracked JavaScript incurs a triple penalty: parsing latency on budget mobile chips, memory overhead in browser garbage collection, and cognitive friction for the user. In high-stakes enterprise applications—whether executing real-time financial trades or rendering spatial CAD models—delay is indistinguishable from error.'
      },
      {
        type: 'quote',
        text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
        citation: 'Antoine de Saint-Exupéry'
      },
      {
        type: 'h2',
        text: 'Three Core Tenets of the 13 Engine'
      },
      {
        type: 'list',
        items: [
          'Sub-100KB Baseline: The entire 13 Studios core runtime weighs under 94KB compressed, loading before the first TCP packet finishes round-tripping.',
          'Zero Garbage Collection Spikes: By compiling critical layout engines and physics simulators to Rust and WebAssembly, we bypass browser GC pauses entirely.',
          'Calm Velocity: Never compete with the user’s cognitive focus; guide attention with deterministic mathematical pacing.'
        ]
      },
      {
        type: 'p',
        text: 'When we architected the 13 Studios platform, our benchmark was not current web standards, but the responsiveness of bare-metal operating systems. The outcome is software that feels as instantaneous as thought.'
      }
    ]
  },
  {
    id: 2,
    category: 'WebGPU & Compilers',
    date: 'May 2026',
    readTime: '8 min read',
    author: 'Elena Vance, Co-Founder & CTO',
    authorPhoto: 'assets/team_elena.png',
    title: 'Compiling WebGPU Shaders at the Distributed Edge',
    excerpt:
      'How zero-copy WebAssembly framebuffers and Anycast edge compute render photorealistic physics without mobile thermal throttling.',
    image: 'assets/blog_fluidity.png',
    content: [
      {
        type: 'p',
        text: 'The transition from WebGL2 to WebGPU is not merely an incremental API update; it represents a tectonic shift in how browsers communicate with physical silicon. For the first time, compute shaders allow web applications to execute general-purpose parallel mathematics alongside rasterization pipelines.'
      },
      {
        type: 'h2',
        text: 'Bypassing the CPU Bottleneck'
      },
      {
        type: 'p',
        text: 'Traditional web animations depend on the main browser thread. When a heavy network request or background JSON parse hits the main thread, 60fps drops into a jarring stutter. The 13 Studios Vapor Engine shifts simulation loops entirely to GPU compute shaders via WebGPU, executing hundreds of thousands of particle interactions with less than 2% host CPU utilization.'
      },
      {
        type: 'quote',
        text: 'True fluidity requires treating the display as a physical canvas governed by differential kinematics, not CSS keyframes.',
        citation: '13 Labs Technical Monograph 04'
      },
      {
        type: 'h2',
        text: 'Edge Pre-Compilation Architecture'
      },
      {
        type: 'list',
        items: [
          'WGSL Transpilation: Shaders are analyzed and optimized across our 280+ Anycast edge nodes prior to client dispatch.',
          'Adaptive Shader Specialization: Low-power mobile devices receive specialized branchless kernels tailored for Apple Silicon and Adreno architectures.',
          'Zero-Copy Framebuffer Swapping: Rendering directly into offscreen canvases preserves battery life and maintains steady 120Hz refresh rates.'
        ]
      },
      {
        type: 'p',
        text: 'By coupling WebGPU with our distributed edge compiler, high-fidelity spatial applications can launch instantly anywhere on earth without lengthy installation screens.'
      }
    ]
  },
  {
    id: 3,
    category: 'Algorithmic Layout',
    date: 'April 2026',
    readTime: '7 min read',
    author: 'Marcus Thorne, Chief Operating Officer',
    authorPhoto: 'assets/team_marcus.png',
    title: 'The Mathematical Proof of the 13-Point Matrix',
    excerpt:
      'Deriving golden-ratio harmonic proportions for responsive spatial layouts across heterogeneous mobile and spatial headsets.',
    image: 'assets/blog_structure.png',
    content: [
      {
        type: 'p',
        text: 'For decades, responsive web design has defaulted to a 12-column grid. While mathematically divisible by 2, 3, 4, and 6, a 12-column system inevitably produces symmetrical, predictable, and visually static compositions. The 13th prime column introduces an asymmetric balance that echoes classical architectural theory.'
      },
      {
        type: 'h2',
        text: 'The Fibonacci Connection'
      },
      {
        type: 'p',
        text: 'Thirteen is the seventh Fibonacci number. In classical Euclidean proportion, dynamic equilibrium is achieved through harmonic asymmetry—giving the eye a primary anchor while preserving expansive negative space for secondary data telemetry.'
      },
      {
        type: 'quote',
        text: 'Symmetry is visual inertia. Asymmetry, when mathematically disciplined, creates life and forward momentum.',
        citation: '13 Studios Spatial Manifesto'
      },
      {
        type: 'h2',
        text: 'Practical Application in Mission-Critical Dashboards'
      },
      {
        type: 'list',
        items: [
          '8:5 Column Hierarchy: We map primary mission controls across 8 columns and secondary telemetry across 5, precisely matching the golden ratio (1.618).',
          'Eliminating Gutter Jitter: Fluid sub-pixel gutter interpolation prevents horizontal micro-shifts during dynamic container resizing.',
          'Spatial Headset Adaptability: In WebXR and VisionOS spatial windows, 13-column layouts maintain geometric coherence regardless of viewer focal distance.'
        ]
      },
      {
        type: 'p',
        text: 'Whether designing an executive trading terminal or an haute horology flagship, the 13-point matrix delivers unprecedented visual authority and calm cognitive focus.'
      }
    ]
  }
];

export default function Journal() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} id="journal" className="journal-section">
      <div className="journal-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-line"></div>
          <div className="section-header-text">
            <span className="section-number">04</span>
            <h2 className="section-title">Research & Changelog</h2>
          </div>
          <p className="section-header-desc">
            Technical whitepapers, performance benchmarks, and architecture releases from 13 Labs.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="journal-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              className="journal-card startup-research-card"
              onClick={() => setSelectedArticle(article)}
              role="button"
              tabIndex={0}
              aria-label={`Read research paper: ${article.title}`}
            >
              <div className="journal-card-visual">
                <div
                  className="journal-card-img"
                  style={{ backgroundImage: `url('${article.image}')` }}
                ></div>
                <div className="journal-card-overlay"></div>
                <span className="journal-badge">{article.category}</span>
              </div>

              <div className="journal-card-content">
                <div className="journal-meta-row">
                  <span className="journal-date">{article.date}</span>
                  <span className="journal-meta-sep">•</span>
                  <span className="journal-read-time">{article.readTime}</span>
                </div>

                <h3 className="journal-card-title">{article.title}</h3>
                <p className="journal-card-excerpt">{article.excerpt}</p>

                <div className="journal-card-author-bar">
                  <div
                    className="journal-author-pic"
                    style={{ backgroundImage: `url('${article.authorPhoto}')` }}
                  ></div>
                  <span className="journal-author-name">{article.author}</span>
                </div>

                <div className="journal-card-footer">
                  <span className="journal-read-link">
                    <span>Read Whitepaper</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}
