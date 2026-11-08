import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "13 Studios operates with a level of intentionality that is extraordinarily rare in developer tooling. They unified three fragmented graphics pipelines into one deterministic WebGPU runtime. The digital salon alone catalyzed €4.6M in high-horology transactions within 90 days of deployment.",
    author: "Julian Croft",
    title: "Managing Director & Product Lead",
    company: "Chrono Manufacture Geneva",
    location: "Geneva, Switzerland",
    impactMetric: "€4.6M Direct Digital Orders",
    photo: "assets/client_julian.png",
    projectRef: "chrono"
  },
  {
    quote: "Transforming high-frequency telemetry into an interface of calm elegance seemed impossible until we integrated 13 Studios. Their 13-point spatial matrix reduced operator cognitive fatigue by 64% and became the visual showcase of our $38M institutional round.",
    author: "Dr. Sophia Sterling",
    title: "VP of Engineering & Product",
    company: "Solaria Energy Group",
    location: "Stockholm, Sweden",
    impactMetric: "-64% Operator Load & Latency",
    photo: "assets/team_elena.png",
    projectRef: "solaria"
  },
  {
    quote: "In institutional private wealth and high-frequency software, discretion and rendering speed are everything. 13 Studios is doing for spatial interfaces what Stripe did for payments. Their runtime commands immediate respect from Fortune 500 boards.",
    author: "Marcus Vance",
    title: "Managing Partner & Investor",
    company: "Valence Asset Partners",
    location: "London & Zurich",
    impactMetric: "$1.2B+ Monitored Volume",
    photo: "assets/team_marcus.png",
    projectRef: "valence"
  }
];

export default function Testimonials() {
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
    <section ref={sectionRef} id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-line"></div>
          <div className="section-header-text">
            <span className="section-number">03</span>
            <h2 className="section-title">Enterprise Adoption</h2>
          </div>
          <p className="section-header-desc">
            Direct perspectives from engineering leaders, product executives, and venture partners building with 13 Studios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card startup-quote-card">
              <div className="t-card-top">
                <div className="t-card-metric-badge">
                  <span className="metric-tag">VERIFIED IMPACT</span>
                  <span className="metric-highlight">{t.impactMetric}</span>
                </div>
                <div className="t-card-rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
              </div>

              <blockquote className="t-card-quote">
                "{t.quote}"
              </blockquote>

              <div className="t-card-author-row">
                <div
                  className="t-author-avatar"
                  style={{ backgroundImage: `url('${t.photo}')` }}
                ></div>
                <div className="t-author-meta">
                  <span className="t-author-name">{t.author}</span>
                  <span className="t-author-title">{t.title}</span>
                  <span className="t-author-company">
                    {t.company} <span className="t-author-loc">({t.location})</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
