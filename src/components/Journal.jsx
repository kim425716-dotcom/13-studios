import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArticleModal from './ArticleModal';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    category: 'Design Philosophy',
    date: 'June 2026',
    readTime: '6 min read',
    author: 'Brian Kimani, Executive Creative Director',
    authorPhoto: 'assets/team_brian.png',
    title: 'The Restraint of Minimalism',
    excerpt:
      'Exploring how negative space and deliberate omission create emotional resonance in modern branding systems.',
    image: 'assets/blog_minimalism.png',
    content: [
      {
        type: 'p',
        text: 'In contemporary brand engineering, the prevailing instinct is additive. When an interface fails to convert or a brand feels indistinct, conventional advisory counsels adding further ornament, additional explanatory copy, or louder visual indicators. Yet true luxury has never resided in excess.'
      },
      {
        type: 'h2',
        text: 'The Currency of White Space'
      },
      {
        type: 'p',
        text: 'White space is not emptiness; it is an active architectural element. In a physical gallery, the distance between exhibited artworks is as deliberate as the lighting. In digital canvases, generous padding and calm margins signal confidence and stability. An institution that dares to leave two-thirds of the viewport uncluttered communicates that its value is self-evident.'
      },
      {
        type: 'quote',
        text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
        citation: 'Antoine de Saint-Exupéry'
      },
      {
        type: 'h2',
        text: 'Three Tenets of Structural Reduction'
      },
      {
        type: 'list',
        items: [
          'Singular Focal Point: Every viewport must possess exactly one undisputed hierarchy anchor.',
          'Typographic Hierarchy over Ornamental Borders: Rely on scale and weight rather than decorative dividers.',
          'Calm Velocity: Never compete with the user’s cognitive flow; guide attention with deliberate pace.'
        ]
      },
      {
        type: 'p',
        text: 'When we designed the identity for Maison Vapor, our first decision was removing 80% of traditional cosmetic labeling. The result was not a void, but a presence of singular clarity.'
      }
    ]
  },
  {
    id: 2,
    category: 'Motion Design',
    date: 'May 2026',
    readTime: '8 min read',
    author: 'Elena Vance, Director of Digital Systems',
    authorPhoto: 'assets/team_elena.png',
    title: 'Fluidity in Motion & Kinetic Physics',
    excerpt:
      'Investigating the neurological impact of physics-based curves, mass deceleration, and tactile micro-animations on user engagement.',
    image: 'assets/blog_fluidity.png',
    content: [
      {
        type: 'p',
        text: 'The human visual cortex did not evolve to interpret linear digital transitions. In the physical realm, objects possess mass, friction, and inertia. When a digital UI animates with robotic linear easings, our subconscious registers an uncanny disconnect.'
      },
      {
        type: 'h2',
        text: 'The Mathematics of Perceived Weight'
      },
      {
        type: 'p',
        text: 'At 13 Studios, every motion token is modeled on gravitational physics. We calibrate cubic bezier curves to simulate physical momentum: swift initial displacement followed by an extended, asymptotic deceleration (such as cubic-bezier(0.16, 1, 0.3, 1)). This allows interactions to feel immediate without jarring the senses.'
      },
      {
        type: 'quote',
        text: 'Motion should feel like moving an expensive fountain pen across cold Japanese vellum — effortless, weighted, and precise.',
        citation: '13 Studios Motion Protocol'
      },
      {
        type: 'h2',
        text: 'The Three Rules of Luxury Interaction'
      },
      {
        type: 'list',
        items: [
          'Zero Latency Triggering: Response to pointer initiation must occur within 16 milliseconds.',
          'Elastic Deceleration: Elements settle gently into their terminal coordinates without bounce or jitter.',
          'Contextual Persistence: Elements transition from one state to another rather than abruptly appearing and disappearing.'
        ]
      },
      {
        type: 'p',
        text: 'Through kinetic discipline, we transform basic transactional software into an object of quiet contemplation and enduring delight.'
      }
    ]
  },
  {
    id: 3,
    category: 'Digital Transformation',
    date: 'April 2026',
    readTime: '7 min read',
    author: 'Marcus Thorne, Head of Strategy',
    authorPhoto: 'assets/team_marcus.png',
    title: 'Structural Balance in UI Architecture',
    excerpt:
      'Applying architectural grid principles, asymmetric proportion, and the 13-point matrix to elevate software into editorial art.',
    image: 'assets/blog_structure.png',
    content: [
      {
        type: 'p',
        text: 'Traditional digital layouts rely on symmetric 12-column frameworks borrowed from generic web templates. While mechanically functional, symmetric grids often produce monotonous, interchangeable screens that fail to evoke prestige or memorability.'
      },
      {
        type: 'h2',
        text: 'The Philosophy of the Prime 13'
      },
      {
        type: 'p',
        text: 'Our signature 13-column matrix introduces intentional prime-number asymmetry. Because 13 cannot be halved into equal symmetric columns, designers are compelled to craft dynamic editorial ratios (such as 8:5, 7:6, or 9:4), echoing classical Renaissance proportions and Swiss architectural blueprints.'
      },
      {
        type: 'quote',
        text: 'Symmetry is the virtue of machines; conscious proportion is the triumph of human architecture.',
        citation: 'Marcus Thorne, 13 Studios Monograph'
      },
      {
        type: 'h2',
        text: 'Transforming Enterprise Interfaces'
      },
      {
        type: 'p',
        text: 'When applied to enterprise software like Solaria’s energy grid telemetry console, the 13-column system allows high-density analytical widgets to coexist harmoniously alongside spacious executive briefing summaries, eliminating operator cognitive fatigue while magnifying brand equity.'
      }
    ]
  }
];

export default function Journal() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

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

      // Journal cards reveal
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
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
    <section ref={sectionRef} id="journal" className="journal-section">
      <div className="section-header">
        <span className="section-number">04 /</span>
        <h2 className="section-title">The Journal</h2>
        <div className="section-header-line"></div>
      </div>

      <div className="journal-intro-row">
        <p className="journal-lead-text">
          Critical essays, technical monographs, and design philosophy dispatches published periodically by our practice directors.
        </p>
      </div>

      <div className="journal-grid">
        {articles.map((article, idx) => (
          <article
            key={article.id}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="journal-card"
            data-cursor-mode="read"
            onClick={() => setSelectedArticle(article)}
          >
            <div className="journal-card-image-wrap">
              <img
                src={article.image}
                alt={article.title}
                className="journal-card-image"
                loading="lazy"
              />
              <div className="journal-card-hover-overlay">
                <span className="journal-read-pill">Read Essay <i className="fa-solid fa-arrow-right"></i></span>
              </div>
            </div>
            <div className="journal-card-content">
              <div className="journal-card-meta">
                <span className="journal-card-category">{article.category}</span>
                <span className="journal-card-readtime">{article.readTime}</span>
              </div>
              <h3 className="journal-card-title">{article.title}</h3>
              <p className="journal-card-excerpt">{article.excerpt}</p>
              <div className="journal-card-author-row">
                <div className="journal-author-badge">
                  <img src={article.authorPhoto} alt={article.author} className="journal-author-thumb" />
                  <span className="journal-card-date">{article.date}</span>
                </div>
                <span className="journal-card-link underline-hover">
                  Read Entry <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
