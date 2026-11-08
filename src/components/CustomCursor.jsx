import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const text = textRef.current;
    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Immediately move dot
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    // Smooth cursor trailing loop
    let animationFrameId;
    const render = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      gsap.set(cursor, { x: cursorX, y: cursorY });
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    // Hover detection
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor-mode]');
      if (!target) return;

      const cursorMode = target.getAttribute('data-cursor-mode');

      if (cursorMode) {
        cursor.classList.add('hover-media');
        if (text) {
          text.textContent = cursorMode.toUpperCase();
          gsap.to(text, { opacity: 1, duration: 0.2 });
        }
      } else {
        cursor.classList.add('hover-link');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor-mode]');
      if (!target) return;

      cursor.classList.remove('hover-link', 'hover-media');
      if (text) {
        gsap.to(text, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            text.textContent = '';
          }
        });
      }
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      dot.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id="custom-cursor" className="custom-cursor">
        <span ref={textRef} className="cursor-text"></span>
      </div>
      <div ref={dotRef} id="custom-cursor-dot" className="custom-cursor-dot"></div>
    </>
  );
}
