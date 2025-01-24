"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        if (progress < duration) {
          const percentage = progress / duration;
          setCount(Math.floor(end * percentage));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
} 