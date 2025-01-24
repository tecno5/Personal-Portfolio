"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageZoomProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ImageZoom({ src, alt, priority }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-2xl"
          priority={priority}
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors rounded-2xl flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </div>
      </motion.div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 p-8 overflow-auto"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl mx-auto aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              className="fixed top-8 right-8 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsZoomed(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 