"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function MountainBackground() {
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number }>>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Adjust transform ranges to be more gradual
  const farY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const middleY = useTransform(scrollYProgress, [0, 0.5], [0, 300]);
  const nearY = useTransform(scrollYProgress, [0, 0.5], [0, 450]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);
  }, []);

  // Error handling for SVG load
  useEffect(() => {
    const svgElements = containerRef.current?.querySelectorAll('svg');
    svgElements?.forEach(svg => {
      svg.addEventListener('error', (e) => {
        console.error('SVG failed to load:', e);
        // Fallback to solid background
        if (containerRef.current) {
          containerRef.current.style.backgroundColor = '#f5f5f5';
        }
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-10 pointer-events-none">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-white" />
      
      {/* Mountains Container */}
      <div className="fixed inset-0 h-screen overflow-visible">
        {/* Far mountain */}
        <motion.div
          style={{ y: farY }}
          className="absolute bottom-0 left-0 right-0 will-change-transform"
          initial={{ y: 0 }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[45vh] fill-neutral-100"
            preserveAspectRatio="none"
          >
            <path d="M0,320 L1440,320 L1440,150 L1080,280 L720,180 L360,250 L0,120 L0,320 Z" />
          </svg>
        </motion.div>

        {/* Middle mountain */}
        <motion.div
          style={{ y: middleY }}
          className="absolute bottom-0 left-0 right-0 will-change-transform"
          initial={{ y: 0 }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[40vh] fill-neutral-200"
            preserveAspectRatio="none"
          >
            <path d="M0,320 L1440,320 L1440,100 L1080,220 L720,120 L360,200 L0,80 L0,320 Z" />
          </svg>
        </motion.div>

        {/* Near mountain */}
        <motion.div
          style={{ y: nearY }}
          className="absolute bottom-0 left-0 right-0 will-change-transform"
          initial={{ y: 0 }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[35vh] fill-neutral-300"
            preserveAspectRatio="none"
          >
            <path d="M0,320 L1440,320 L1440,180 L1080,100 L720,220 L360,140 L0,200 L0,320 Z" />
          </svg>
        </motion.div>

        {/* Fog layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent transform -rotate-3" />
          <div className="absolute top-1/2 left-0 w-full h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-2" />
        </div>

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 