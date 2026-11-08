import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MenuOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const pathRef = useRef(null);
  const contentRef = useRef(null);
  const closeBtnRef = useRef(null);

  const startPath = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';
  const morphPath = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
  const endPath = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';

  useEffect(() => {
    const overlay = overlayRef.current;
    const path = pathRef.current;
    const content = contentRef.current;
    const closeBtn = closeBtnRef.current;

    if (!overlay || !path) return;

    if (isOpen) {
      overlay.style.visibility = 'visible';
      gsap.set(path, { attr: { d: startPath } });

      const tl = gsap.timeline();
      tl.to(path, {
        attr: { d: morphPath },
        duration: 0.45,
        ease: 'power2.in'
      }).to(path, {
        attr: { d: endPath },
        duration: 0.4,
        ease: 'power4.out'
      });

      tl.to(
        overlay,
        {
          opacity: 1,
          duration: 0.1
        },
        '-=0.4'
      );

      tl.to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        },
        '-=0.3'
      );

      tl.fromTo(
        '.menu-links li',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out' },
        '-=0.6'
      );

      tl.to(
        closeBtn,
        {
          opacity: 1,
          duration: 0.4
        },
        '-=0.4'
      );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          overlay.style.visibility = 'hidden';
        }
      });

      tl.to(closeBtn, {
        opacity: 0,
        duration: 0.2
      });

      tl.to(
        '.menu-links li',
        {
          y: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power3.in'
        },
        '-=0.2'
      );

      tl.to(
        content,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power3.in'
        },
        '-=0.3'
      );

      tl.to(path, {
        attr: { d: morphPath },
        duration: 0.4,
        ease: 'power2.in'
      }).to(path, {
        attr: { d: startPath },
        duration: 0.45,
        ease: 'power3.out'
      });

      tl.to(
        overlay,
        {
          opacity: 0,
          duration: 0.2
        },
        '-=0.3'
      );
    }
  }, [isOpen]);

  const menuItems = [
    { num: '01', title: 'Home', href: '#hero' },
    { num: '02', title: 'Selected Work', href: '#work' },
    { num: '03', title: 'The Studio', href: '#studio' },
    { num: '04', title: 'Endorsements', href: '#testimonials' },
    { num: '05', title: 'The Journal', href: '#journal' },
    { num: '06', title: 'Connect & Inquire', href: '#contact' },
  ];

  return (
    <div ref={overlayRef} id="menu-overlay" className="menu-overlay">
      <svg className="menu-overlay-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={pathRef} className="menu-overlay-path" d={startPath} />
      </svg>

      <div ref={contentRef} className="menu-overlay-content">
        <div className="menu-left">
          <div className="menu-meta-item">
            <span className="meta-label">Coordinates</span>
            <span className="meta-value">1.1616° S, 36.8263° E</span>
          </div>
          <div className="menu-meta-item">
            <span className="meta-label">Est.</span>
            <span className="meta-value">MMXXVI / XIII</span>
          </div>
          <div className="menu-meta-item">
            <span className="meta-label">Inquiries</span>
            <span className="meta-value">afreakantale@gmail.com</span>
          </div>
        </div>

        <div className="menu-right">
          <ul className="menu-links">
            {menuItems.map((item) => (
              <li key={item.num}>
                <a
                  href={item.href}
                  className="menu-item-link"
                  onClick={onClose}
                >
                  <span>{item.num}</span>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        ref={closeBtnRef}
        id="menu-close"
        className="menu-close-btn"
        aria-label="Close Menu"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
