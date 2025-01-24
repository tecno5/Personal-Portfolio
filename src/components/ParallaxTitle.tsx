"use client";

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function ParallaxTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Only apply parallax on non-touch devices
  const isTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  useEffect(() => {
    if (!ref.current || isTouchDevice()) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * 0.1;
      
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translate3d(0, ${Math.min(rate, 100)}px, 0)`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
} 