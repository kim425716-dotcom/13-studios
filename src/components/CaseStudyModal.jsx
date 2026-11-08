import React, { useEffect } from 'react';

export default function CaseStudyModal({ project, onClose, onSelectNext }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="case-study-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="case-study-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div className="modal-breadcrumbs">
            <span className="modal-bc-index">13 / CASE STUDY</span>
            <span className="modal-bc-sep">/</span>
            <span className="modal-bc-title">{project.title}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
            <span>Close</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Hero Header */}
        <div className="modal-hero">
          <div className="modal-meta-row">
            <span className="modal-meta-badge">{project.category}</span>
            <span className="modal-meta-client">Client: <strong>{project.client}</strong></span>
            <span className="modal-meta-year">Year: <strong>{project.year}</strong></span>
            <span className="modal-meta-timeline">Timeline: <strong>{project.timeline || '12 Weeks'}</strong></span>
          </div>
          <h2 className="modal-project-title">{project.title}</h2>
          <p className="modal-project-tagline">{project.tagline}</p>
        </div>

        {/* Project Image Banner */}
        <div className="modal-image-showcase">
          <img src={project.image} alt={project.title} className="modal-main-img" />
          <div className="modal-image-caption">
            <span>Visual Architecture // {project.title} Monograph</span>
            <span>Archival Ref: 13-PRJ-{project.id.toUpperCase()}</span>
          </div>
        </div>

        {/* Quantitative Business Impact Bar */}
        {project.metrics && (
          <div className="modal-impact-grid">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="impact-metric-box">
                <span className="impact-value">{m.value}</span>
                <span className="impact-label">{m.label}</span>
                <span className="impact-desc">{m.desc}</span>
              </div>
            ))}
          </div>
        )}

        {/* Narrative Deep Dive */}
        <div className="modal-narrative-grid">
          <div className="modal-column">
            <h3 className="modal-section-heading">The Strategic Challenge</h3>
            <p className="modal-paragraph">{project.challenge}</p>
          </div>
          <div className="modal-column">
            <h3 className="modal-section-heading">The 13 Formulation</h3>
            <p className="modal-paragraph">{project.solution}</p>
          </div>
        </div>

        {/* Secondary Visual Plates / Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="modal-gallery-section">
            <h3 className="modal-section-heading">Architectural Plates & Production Studies</h3>
            <div className="modal-secondary-gallery">
              {project.gallery.map((imgSrc, i) => (
                <div key={i} className="modal-gallery-tile">
                  <img src={imgSrc} alt={`${project.title} Study Plate 0${i + 1}`} className="modal-tile-img" />
                  <span className="modal-tile-caption">Plate 0{i + 1} // Production Monograph & Materiality</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables & Deliverable Breakdown */}
        <div className="modal-deliverables-section">
          <h3 className="modal-section-heading">Scope of Architecture & Deliverables</h3>
          <div className="deliverables-tags-wrap">
            {project.deliverables?.map((del, idx) => (
              <div key={idx} className="deliverable-tag">
                <span className="del-check">✓</span>
                <span className="del-text">{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Client Quote */}
        {project.testimonial && (
          <div className="modal-quote-block">
            <blockquote className="modal-quote-text">
              "{project.testimonial.quote}"
            </blockquote>
            <div className="modal-quote-author">
              <span className="quote-name">{project.testimonial.author}</span>
              <span className="quote-role">{project.testimonial.title}, {project.client}</span>
            </div>
          </div>
        )}

        {/* Modal Bottom Navigation & CTA */}
        <div className="modal-footer-nav">
          <a href="#contact" onClick={onClose} className="modal-inquire-btn">
            <span>Inquire About a Similar Commission</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          {onSelectNext && (
            <button className="modal-next-btn" onClick={onSelectNext}>
              <span>Next Project</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

