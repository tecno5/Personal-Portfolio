"use client";

import { motion } from "framer-motion";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

export default function SlideIn({ children, direction = "up", delay = 0 }: SlideInProps) {
  const directions = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: 60 },
    down: { x: 0, y: -60 }
  };

  return (
    <motion.div
      initial={{ ...directions[direction], opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay
      }}
    >
      {children}
    </motion.div>
  );
} 