"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      prevIndex + newDirection < 0 
        ? images.length - 1 
        : prevIndex + newDirection >= images.length 
          ? 0 
          : prevIndex + newDirection
    ));
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Image Container - Make it full width on mobile */}
      <div className="lg:col-span-2 w-full">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Make them more visible */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/30 transition-colors"
            onClick={() => paginate(-1)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/30 transition-colors"
            onClick={() => paginate(1)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator - Mobile only */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Side Panel - Fixed height to prevent layout shifts */}
      <div className="lg:sticky lg:top-32 h-fit">
        <div className="bg-neutral-50 rounded-xl p-6">
          <div className="space-y-6">
            {/* Title and Description with fixed heights */}
            <div className="min-h-[160px]"> {/* Adjust height as needed */}
              <h3 className="text-xl font-medium mb-2 line-clamp-2">
                {images[currentIndex].title || `Image ${currentIndex + 1} of ${images.length}`}
              </h3>
              <p className="text-neutral-600 line-clamp-4">
                {images[currentIndex].description || images[currentIndex].alt}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div>
              <h4 className="font-medium text-sm text-neutral-500 mb-3">All Photos</h4>
              <div className="grid gap-2 max-h-[280px] overflow-y-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
                      index === currentIndex 
                        ? 'bg-white shadow-sm' 
                        : 'hover:bg-white/50'
                    }`}
                  >
                    <div className="relative w-14 aspect-[16/9] rounded-md overflow-hidden bg-neutral-200 flex-shrink-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium line-clamp-1">
                        {image.title || `Image ${index + 1}`}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 