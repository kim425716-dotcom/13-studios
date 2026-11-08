import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
  'Brand Architecture & Identity',
  'Digital Flagship & E-Commerce',
  'Motion & 3D Spatial Systems',
  'Quarterly Design Advisory Retainer'
];

const budgetOptions = [
  '$25k – $50k',
  '$50k – $100k',
  '$100k – $250k',
  '$250k+ (Enterprise)'
];

const timelineOptions = [
  'Immediate (Within 60 Days)',
  'Q3 2026 Sprint (90–120 Days)',
  'H2 2026 Strategic Horizon',
  'Ongoing Retainer'
];

const faqs = [
  {
    q: 'What is the typical engagement duration for an end-to-end studio project?',
    a: 'Comprehensive brand transformations and digital flagships typically span 10 to 16 weeks, organized into our four-phase review discipline. Focused strategic advisory and motion identity sprints can be executed in accelerated 6 to 8 week engagements.'
  },
  {
    q: 'How does 13 Studios ensure intellectual property and source file custody?',
    a: 'Upon full settlement of commissioning invoices, clients retain 100% unrestricted intellectual property ownership of all final identity assets, bespoke display font licenses, tokenized design systems, production code repositories, and 3D spatial models.'
  },
  {
    q: 'Do you collaborate with international clients across multiple timezones?',
    a: 'Yes. Over 70% of our portfolio clients operate across Zurich, Geneva, London, Tokyo, Stockholm, and New York. Our primary studio desk in Kiambu / Nairobi operates on East Africa Time (UTC+3), allowing optimal real-time communication overlap with both European and Asian business hours.'
  },
  {
    q: 'Who directly leads and designs our commission?',
    a: 'We deliberately reject the traditional agency bait-and-switch model. Every project at 13 Studios is directly directed and architected by our executive founders and principal directors, ensuring unbroken craft fidelity from discovery to launch.'
  }
];

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);
  const submitBtnRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Brand Architecture & Identity',
    budget: '$50k – $100k',
    timeline: 'Q3 2026 Sprint (90–120 Days)',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
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

      // Contact elements reveal
      gsap.fromTo(
        '.contact-info-block > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.form-group, .scope-selector-group',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (srv) => {
    setFormData((prev) => ({ ...prev, service: srv }));
  };

  const handleSelectBudget = (b) => {
    setFormData((prev) => ({ ...prev, budget: b }));
  };

  const handleSelectTimeline = (t) => {
    setFormData((prev) => ({ ...prev, timeline: t }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);

    const btnArrow = submitBtnRef.current?.querySelector('.btn-arrow');
    let arrowTween;
    if (btnArrow) {
      arrowTween = gsap.to(btnArrow, {
        x: 10,
        opacity: 0,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
      });
    }

    setTimeout(() => {
      if (arrowTween) arrowTween.kill();

      const form = formRef.current;
      const successMessage = successRef.current;

      gsap.to(form, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          if (successMessage) {
            successMessage.style.display = 'block';
            gsap.fromTo(
              successMessage,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
            );
          }
        },
      });
    }, 1300);
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-number">05 /</span>
        <h2 className="section-title">Connect & Inquire</h2>
        <div className="section-header-line"></div>
      </div>

      <div className="contact-container">
        {/* Left Information Block */}
        <div className="contact-info-block">
          <div className="contact-status-badge">
            <span className="status-pulse-dot"></span>
            <span>Now Commissioning Q2 & Q3 2026</span>
          </div>

          <h3 className="contact-tagline">Let us construct something of enduring substance.</h3>
          <p className="contact-intro">
            Whether architecting an international brand identity, engineering a bespoke digital flagship, or seeking quarterly creative advisory, our directors welcome strategic inquiries.
          </p>

          <div className="contact-details">
            <div className="contact-atelier-preview">
              <img src="assets/studio_atelier.png" alt="13 Studios Flagship Atelier" className="contact-atelier-img" />
              <div className="contact-atelier-overlay">
                <span className="contact-atelier-title">Flagship Atelier // Kiambu, Kenya</span>
                <span className="contact-atelier-coords">01°17'S, 36°49'E</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="contact-label">Studio Flagship</span>
              <span className="contact-text">Kiambu / Nairobi, Kenya</span>
              <span className="contact-subtext">Coordinates: 01°17'S, 36°49'E</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-label">European Desk</span>
              <span className="contact-text">London Liaison Desk (GMT)</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-label">Direct Director Email</span>
              <a href="mailto:afreakantale@gmail.com" className="contact-link underline-hover">
                afreakantale@gmail.com
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-label">Direct Telephone / Signal</span>
              <a href="tel:+254769260012" className="contact-link underline-hover">
                +254 769 260 012
              </a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-label">Average Response Window</span>
              <span className="contact-text">Within 12 to 24 Business Hours</span>
            </div>
          </div>
        </div>

        {/* Right Form & Scope Estimator */}
        <div className="contact-form-block">
          <form
            ref={formRef}
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
            style={{ display: isSubmitted ? 'none' : 'block' }}
          >
            {/* Interactive Scope: Service Selection */}
            <div className="scope-selector-group">
              <span className="scope-group-label">01 // Primary Disciplinary Scope</span>
              <div className="scope-pills-row">
                {serviceOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    className={`scope-pill ${formData.service === opt ? 'is-selected' : ''}`}
                    onClick={() => handleSelectService(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Scope: Budget Bracket */}
            <div className="scope-selector-group">
              <span className="scope-group-label">02 // Anticipated Investment Bracket</span>
              <div className="scope-pills-row">
                {budgetOptions.map((b) => (
                  <button
                    type="button"
                    key={b}
                    className={`scope-pill ${formData.budget === b ? 'is-selected' : ''}`}
                    onClick={() => handleSelectBudget(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Scope: Timeline */}
            <div className="scope-selector-group">
              <span className="scope-group-label">03 // Desired Delivery Horizon</span>
              <div className="scope-pills-row">
                {timelineOptions.map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`scope-pill ${formData.timeline === t ? 'is-selected' : ''}`}
                    onClick={() => handleSelectTimeline(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-fields-grid">
              <div className="form-group">
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="form-name">Your Full Name</label>
                <div className="form-line"></div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="form-email">Corporate or Personal Email</label>
                <div className="form-line"></div>
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="form-company"
                name="company"
                placeholder=" "
                value={formData.company}
                onChange={handleChange}
              />
              <label htmlFor="form-company">Company / Institution / Venture Name</label>
              <div className="form-line"></div>
            </div>

            <div className="form-group">
              <textarea
                id="form-message"
                name="message"
                rows="4"
                required
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="form-message">Brief Project Background, Strategic Ambition & Context</label>
              <div className="form-line"></div>
            </div>

            <button
              ref={submitBtnRef}
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? 'Transmitting Monograph Request...' : 'Submit Executive Inquiry'}
              </span>
              <span className="btn-arrow">
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </button>
          </form>

          <div
            ref={successRef}
            id="form-success-message"
            className="form-success-message"
            style={{ display: isSubmitted ? 'block' : 'none' }}
          >
            <div className="success-icon-wrap">
              <span className="success-check-icon">✓</span>
            </div>
            <h4 className="success-title">Executive Inquiry Logged</h4>
            <p className="success-text">
              Thank you, {formData.name || 'Partner'}. Your inquiry regarding <strong>{formData.service}</strong> has been delivered directly to the Executive Creative Director’s desk. We will review your brief and reply within 24 business hours.
            </p>
            <div className="success-reference-code">
              Archival Tracking Ref: 13-INQ-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        </div>
      </div>

      {/* Executive FAQ Accordion */}
      <div className="faq-section-wrapper">
        <div className="faq-header">
          <span className="faq-badge">Client Advisory Notes</span>
          <h3 className="faq-title">Frequently Addressed Questions</h3>
          <p className="faq-subtitle">Clear guidance regarding our fees, IP governance, and delivery model.</p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`faq-accordion-item ${openFaq === idx ? 'is-open' : ''}`}
              onClick={() => toggleFaq(idx)}
            >
              <button
                type="button"
                className="faq-question-btn"
                aria-expanded={openFaq === idx}
              >
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div className="faq-answer-pane">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
