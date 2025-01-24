"use client";

import { motion } from "framer-motion";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ScaleIn({ children, delay = 0 }: ScaleInProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
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