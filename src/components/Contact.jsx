import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const planOptions = [
  'Scale Plan ($79/mo)',
  'Enterprise Sovereign Cloud',
  'Developer Community (Free)',
  'Venture / Strategic Inquiry'
];

const teamSizes = [
  '1–10 Engineers',
  '11–50 Engineers',
  '51–200 Engineers',
  '200+ Enterprise Org'
];

const timelineOptions = [
  'Immediate (Within 30 Days)',
  'Q3 2026 Production Sprint',
  'Strategic R&D Horizon',
  'Evaluating Alternatives'
];

const faqs = [
  {
    q: 'How quickly can an engineering team integrate 13 Studios into production?',
    a: 'Using our universal CLI (`npx create-13-app@latest`), teams spin up a fully configured WebGPU and spatial canvas environment in under 60 seconds. Existing React, Next.js, and Vite codebases can import `@13studios/core` with zero configuration or webpack restructuring.'
  },
  {
    q: 'Is 13 Studios SOC2 Type II, ISO 27001, and GDPR compliant?',
    a: 'Yes. 13 Studios is fully SOC2 Type II certified and complies with strict zero-PII data protocols. All edge interaction telemetry is anonymized and cryptographically signed on-device via SHA-256 before streaming over TLS 1.3.'
  },
  {
    q: 'Can we deploy 13 Studios on our private AWS, GCP, or Azure VPC?',
    a: 'Yes. Enterprise tier customers can deploy our distributed edge containers directly within their sovereign cloud VPCs, maintaining complete physical and network data residency behind corporate firewalls.'
  },
  {
    q: 'What is your uptime guarantee and enterprise support escalation SLA?',
    a: 'We offer a 99.99% uptime SLA backed by financial service credits for Enterprise accounts, complete with a sub-15 minute response guarantee, dedicated Slack/Teams bridge, and 24/7 direct escalation to our founding systems engineers.'
  }
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' or 'monthly'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: 'Scale Plan ($79/mo)',
    teamSize: '11–50 Engineers',
    timeline: 'Immediate (Within 30 Days)',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
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
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-line"></div>
          <div className="section-header-text">
            <span className="section-number">05</span>
            <h2 className="section-title">Pricing & Enterprise Access</h2>
          </div>
          <p className="section-header-desc">
            Transparent, predictable infrastructure pricing for high-velocity teams. Start in free local sandbox, scale to dedicated Anycast edge clusters.
          </p>
        </div>

        {/* Pricing Billing Toggle */}
        <div className="pricing-toggle-wrap">
          <div className="pricing-toggle-pills">
            <button
              className={`pricing-cycle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Billed Monthly
            </button>
            <button
              className={`pricing-cycle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              <span>Billed Annually</span>
              <span className="save-badge">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Startup Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {/* Tier 1: Developer */}
          <div className="pricing-card">
            <div className="p-card-header">
              <span className="p-tier-badge">DEVELOPER</span>
              <h3 className="p-tier-name">Community Sandbox</h3>
              <p className="p-tier-sub">Free forever for individual engineers, researchers, and open-source projects.</p>
            </div>

            <div className="p-price-row">
              <span className="p-currency">$</span>
              <span className="p-amount">0</span>
              <span className="p-period">/ month</span>
            </div>

            <ul className="p-features-list">
              <li><i className="fa-solid fa-check"></i> Up to 25,000 monthly telemetry events</li>
              <li><i className="fa-solid fa-check"></i> Local WebAssembly & WebGPU sandbox</li>
              <li><i className="fa-solid fa-check"></i> Universal CLI (<code>npx create-13-app</code>)</li>
              <li><i className="fa-solid fa-check"></i> 13-Point spatial grid constraint solver</li>
              <li><i className="fa-solid fa-check"></i> Community Discord & GitHub support</li>
            </ul>

            <a href="#demo-form" className="p-cta-btn secondary">
              <span>Start Free Sandbox</span>
              <i className="fa-solid fa-terminal"></i>
            </a>
          </div>

          {/* Tier 2: Scale (Highlighted) */}
          <div className="pricing-card featured">
            <div className="p-featured-badge">MOST POPULAR // SCALE</div>
            <div className="p-card-header">
              <span className="p-tier-badge accent">PRO & SCALE</span>
              <h3 className="p-tier-name">Production Cluster</h3>
              <p className="p-tier-sub">For high-growth product teams shipping iconic client-facing applications.</p>
            </div>

            <div className="p-price-row">
              <span className="p-currency">$</span>
              <span className="p-amount">{billingCycle === 'annual' ? '79' : '99'}</span>
              <span className="p-period">/ seat / month</span>
            </div>

            <ul className="p-features-list">
              <li><i className="fa-solid fa-check"></i> 2.5M monthly API telemetry events</li>
              <li><i className="fa-solid fa-check"></i> Full Aero Figma-to-Code Compiler</li>
              <li><i className="fa-solid fa-check"></i> Vapor WebGPU particle & material shader runtime</li>
              <li><i className="fa-solid fa-check"></i> 280+ Anycast Global Edge POPs (&lt;8ms latency)</li>
              <li><i className="fa-solid fa-check"></i> Chrono deterministic micro-motion physics</li>
              <li><i className="fa-solid fa-check"></i> 99.9% Uptime SLA & Priority Slack bridge</li>
            </ul>

            <a href="#demo-form" className="p-cta-btn primary">
              <span>Start 14-Day Free Pro Trial</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="pricing-card">
            <div className="p-card-header">
              <span className="p-tier-badge">ENTERPRISE</span>
              <h3 className="p-tier-name">Sovereign Cloud</h3>
              <p className="p-tier-sub">For regulated fintechs, luxury flagships, and high-volume enterprise clouds.</p>
            </div>

            <div className="p-price-row">
              <span className="p-amount-custom">Custom</span>
              <span className="p-period">/ tailored SLA</span>
            </div>

            <ul className="p-features-list">
              <li><i className="fa-solid fa-check"></i> Unlimited volume & compute shaders</li>
              <li><i className="fa-solid fa-check"></i> Dedicated Anycast VPC (AWS, GCP, or Azure)</li>
              <li><i className="fa-solid fa-check"></i> SOC2 Type II & ISO 27001 Cryptographic Vault</li>
              <li><i className="fa-solid fa-check"></i> Custom WebGPU Shader & Kernel engineering</li>
              <li><i className="fa-solid fa-check"></i> 99.99% Guaranteed Availability SLA</li>
              <li><i className="fa-solid fa-check"></i> 24/7 Dedicated Solutions Engineer Escalation</li>
            </ul>

            <a href="#demo-form" className="p-cta-btn secondary">
              <span>Request Enterprise Demo</span>
              <i className="fa-solid fa-building-columns"></i>
            </a>
          </div>
        </div>

        {/* Access Request / Demo Booking Form */}
        <div id="demo-form" className="contact-form-layout">
          <div className="contact-info-col">
            <div className="contact-info-block">
              <span className="info-badge">PROVISION ACCESS</span>
              <h3 className="info-title">Schedule Architecture Review & Demo</h3>
              <p className="info-text">
                Speak directly with our founding systems architects. We will walk through your technical stack, benchmark WebGPU performance against your current metrics, and provision your dedicated sandbox credentials.
              </p>
            </div>

            <div className="contact-details-grid">
              <div className="c-detail-item">
                <span className="c-detail-label">Global Headquarters</span>
                <span className="c-detail-val">Kiambu / Nairobi, Kenya</span>
                <span className="c-detail-sub">East Africa Time (UTC+3)</span>
              </div>
              <div className="c-detail-item">
                <span className="c-detail-label">Engineering Hubs</span>
                <span className="c-detail-val">San Francisco • London</span>
                <span className="c-detail-sub">Distributed 24/7 On-Call</span>
              </div>
              <div className="c-detail-item">
                <span className="c-detail-label">Direct Engineering Desk</span>
                <span className="c-detail-val">afreakantale@gmail.com</span>
                <span className="c-detail-sub">PGP Key ID: 13-STUDIOS-SEC</span>
              </div>
              <div className="c-detail-item">
                <span className="c-detail-label">SOC2 Compliance Office</span>
                <span className="c-detail-val">compliance@13studios.internal</span>
                <span className="c-detail-sub">Instant Vault Export</span>
              </div>
            </div>

            {/* Headquarters Vignette */}
            <div className="location-vignette-wrap">
              <div
                className="location-vignette-img"
                style={{ backgroundImage: `url('assets/studio_atelier.png')` }}
              ></div>
              <div className="location-vignette-caption">
                <span>Silicon & Spatial Computing Lab // Nairobi Campus</span>
                <span>Coordinates: 01°17'S, 36°49'E</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="contact-form-col">
            {isSubmitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h3 className="success-title">Sandbox Provisioned // Access Granted</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your sandbox credentials and enterprise architecture blueprint have been dispatched to <strong>{formData.email}</strong>.
                </p>
                <div className="success-meta-box">
                  <div className="s-meta-row">
                    <span className="s-lbl">Selected Plan:</span>
                    <span className="s-val">{formData.plan}</span>
                  </div>
                  <div className="s-meta-row">
                    <span className="s-lbl">Cluster Region:</span>
                    <span className="s-val">Auto-Assigned Anycast (&lt; 8ms)</span>
                  </div>
                  <div className="s-meta-row">
                    <span className="s-lbl">Target Timeframe:</span>
                    <span className="s-val">{formData.timeline}</span>
                  </div>
                </div>
                <button
                  className="reset-form-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      plan: 'Scale Plan ($79/mo)',
                      teamSize: '11–50 Engineers',
                      timeline: 'Immediate (Within 30 Days)',
                      message: '',
                    });
                  }}
                >
                  <span>Submit Another Request</span>
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="startup-access-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Organization / Startup *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="e.g. Acme Corp / Autonomous Robotics"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="teamSize" className="form-label">Engineering Team Size</label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="form-input form-select"
                    >
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Plan Selection Radio Pills */}
                <div className="form-group">
                  <label className="form-label">Desired Platform Plan</label>
                  <div className="form-pills-selector">
                    {planOptions.map((plan) => (
                      <button
                        type="button"
                        key={plan}
                        className={`form-pill-option ${formData.plan === plan ? 'selected' : ''}`}
                        onClick={() => setFormData((prev) => ({ ...prev, plan }))}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div className="form-group">
                  <label className="form-label">Target Deployment Horizon</label>
                  <div className="form-pills-selector">
                    {timelineOptions.map((time) => (
                      <button
                        type="button"
                        key={time}
                        className={`form-pill-option ${formData.timeline === time ? 'selected' : ''}`}
                        onClick={() => setFormData((prev) => ({ ...prev, timeline: time }))}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Architecture Requirements & Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your application stack (e.g. Next.js, WebGPU, spatial UI, target framerate)..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  {isSubmitting ? (
                    <span>
                      <i className="fa-solid fa-spinner fa-spin"></i> Provisioning Cluster Sandbox...
                    </span>
                  ) : (
                    <span>
                      Request Platform Access <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Enterprise Security & Technical FAQ Accordion */}
        <div className="faq-section-wrap">
          <div className="faq-header">
            <span className="faq-eyebrow">Enterprise Trust & Architecture FAQ</span>
            <h3 className="faq-heading">Frequently Addressed Inquiries</h3>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon">
                    <i className={`fa-solid ${openFaq === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-block">
                    <p className="faq-a-text">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
