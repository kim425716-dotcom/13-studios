import React, { useEffect, useState } from 'react';

export default function ArticleModal({ article, onClose }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!article) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    setScrollProgress(progress);
  };

  if (!article) return null;

  return (
    <div className="article-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="article-modal-content" onClick={(e) => e.stopPropagation()} onScroll={handleScroll}>
        {/* Reading Progress Bar */}
        <div className="article-reading-progress" style={{ width: `${scrollProgress}%` }}></div>

        {/* Top Header */}
        <div className="article-modal-top">
          <div className="article-top-meta">
            <span className="article-journal-badge">13 / DISPATCH & MONOGRAPH</span>
            <span className="article-read-time">{article.readTime || '6 min read'}</span>
          </div>
          <button className="article-modal-close" onClick={onClose} aria-label="Close Article">
            <span>Close</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Article Header */}
        <header className="article-header-hero">
          <div className="article-meta-row">
            <span className="article-tag">{article.category}</span>
            <span className="article-date">{article.date}</span>
            <span className="article-author">By {article.author || 'Brian Kimani, Executive Creative Director'}</span>
          </div>
          <h1 className="article-main-title">{article.title}</h1>
          <p className="article-hero-excerpt">{article.excerpt}</p>
        </header>

        {/* Featured Image */}
        <div className="article-hero-image-wrap">
          <img src={article.image} alt={article.title} className="article-hero-image" />
          <div className="article-image-caption">
            <span>Fig. 1.0 — Visual Study on Proportion & Material Balance.</span>
            <span>Archival Dispatch #0{article.id}</span>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="article-body-editorial">
          {article.content ? (
            article.content.map((block, idx) => {
              if (block.type === 'h2') {
                return <h2 key={idx} className="article-h2">{block.text}</h2>;
              }
              if (block.type === 'p') {
                return <p key={idx} className="article-p">{block.text}</p>;
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="article-pullquote">
                    “{block.text}”
                    {block.citation && <cite>— {block.citation}</cite>}
                  </blockquote>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={idx} className="article-points-list">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })
          ) : (
            <div className="article-p">
              <p>In modern brand architecture, the greatest risk is rarely saying too little; it is saying everything with equal urgency. When visual density increases, comprehension and emotional resonance plummet.</p>
            </div>
          )}
        </div>

        {/* Author Footer & Next Steps */}
        <div className="article-author-card">
          <div className="author-card-content">
            {article.authorPhoto && (
              <img src={article.authorPhoto} alt={article.author} className="author-card-avatar" />
            )}
            <div className="author-details">
              <span className="author-role-label">Written By</span>
              <h4 className="author-full-name">{article.author || 'Brian Kimani'}</h4>
              <p className="author-bio">
                Director at 13 Studios. Guiding structural identity formulation, high-fidelity digital platforms, and physics-informed motion systems for market-defining institutions.
              </p>
            </div>
          </div>
          <a href="#contact" onClick={onClose} className="article-discuss-btn">
            <span>Consult With The Author</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

