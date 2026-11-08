import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "13 Studios operates with a level of intentionality that is extraordinarily rare in contemporary design. They elevated our brand from an emerging independent into an undisputed Swiss market benchmark. The digital salon alone catalyzed €4.6M in high-horology sales within 90 days.",
    author: "Julian Croft",
    title: "Managing Director",
    company: "Chrono Manufacture Geneva",
    location: "Geneva, Switzerland",
    impactMetric: "€4.6M Direct Digital Orders",
    photo: "assets/client_julian.png",
    projectRef: "chrono"
  },
  {
    quote: "Transforming dense grid telemetry into an interface of calm elegance seemed nearly impossible until 13 Studios stepped in. Their 13-point spatial discipline reduced operator cognitive fatigue by 64% and became the visual centerpiece of our $38M institutional round.",
    author: "Dr. Sophia Sterling",
    title: "VP of Product Architecture",
    company: "Solaria Energy Group",
    location: "Stockholm, Sweden",
    impactMetric: "-64% Cognitive Load",
    photo: "assets/team_elena.png",
    projectRef: "solaria"
  },
  {
    quote: "In institutional private wealth, discretion is everything. Most agencies default to superficial flash; 13 Studios understands structural restraint, typography, and sovereign gravitas. Their work commands immediate respect across family office boards.",
    author: "Marcus Vance",
    title: "Managing Partner",
    company: "Valence Asset Partners",
    location: "London & Zurich",
    impactMetric: "$1.2B+ Capital Onboarded",
    photo: "assets/team_marcus.png",
    projectRef: "valence"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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

      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="testimonials-section">
      <div className="section-header">
        <span className="section-number">03 /</span>
        <h2 className="section-title">Endorsements</h2>
        <div className="section-header-line"></div>
      </div>

      <div className="testimonials-content">
        <div className="testimonials-intro">
          <p className="testimonials-lead">
            What founders, chief product officers, and institutional partners say regarding our architectural rigor and measurable commercial outcomes.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="testimonial-card"
            >
              <div className="testimonial-card-top">
                <span className="quote-mark">“</span>
                <span className="testimonial-metric-pill">{item.impactMetric}</span>
              </div>
              <blockquote className="testimonial-body">
                {item.quote}
              </blockquote>
              <div className="testimonial-author-block">
                <div className="author-photo-avatar">
                  <img src={item.photo} alt={item.author} className="author-img" />
                </div>
                <div className="author-info">
                  <span className="author-name">{item.author}</span>
                  <span className="author-title">{item.title}</span>
                  <span className="author-company">{item.company} // {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
