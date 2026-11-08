import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function PageLoader({ onLoaded }) {
  const [count, setCount] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    let currentCount = 0;
    const target = 13;
    const duration = 2000;
    const intervalTime = duration / target;

    const interval = setInterval(() => {
      currentCount++;
      setCount(currentCount);

      if (progressRef.current) {
        const progressPercent = (currentCount / target) * 100;
        gsap.to(progressRef.current, {
          width: `${progressPercent}%`,
          duration: 0.1,
          ease: 'none'
        });
      }

      if (currentCount === target) {
        clearInterval(interval);
        setTimeout(() => {
          dismissLoader();
        }, 300);
      }
    }, intervalTime);

    const dismissLoader = () => {
      const loader = loaderRef.current;
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDismissed(true);
          if (onLoaded) onLoaded();
        }
      });

      if (loader) {
        tl.to(loader, {
          opacity: 0,
          duration: 0.8,
          ease: 'power3.inOut'
        });
      }

      // Reveal Hero animations
      tl.fromTo(
        '.hero-bg-image',
        { scale: 1.15 },
        { scale: 1, duration: 2, ease: 'power4.out' },
        '-=0.5'
      );
      tl.fromTo(
        '.hero-title',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
        '-=1.5'
      );
      tl.fromTo(
        '.hero-subheading',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out' },
        '-=1.3'
      );
      tl.fromTo(
        '.hero-intro-text, .scroll-indicator, header',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      );
    };

    return () => clearInterval(interval);
  }, [onLoaded]);

  if (isDismissed) return null;

  const formattedNum = count < 10 ? `0${count}` : `${count}`;

  return (
    <div ref={loaderRef} id="page-loader" className="page-loader">
      <div className="loader-content">
        <h1 className="loader-logo">13 STUDIOS</h1>
        <div className="loader-counter-wrapper">
          <span className="loader-counter">{formattedNum}</span>
        </div>
        <div className="loader-progress-bar">
          <div ref={progressRef} className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
