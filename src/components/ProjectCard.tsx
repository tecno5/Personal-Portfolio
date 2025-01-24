"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedImage from './ProtectedImage';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  images: string[];
  href: string;
  index: number;
}

export default function ProjectCard({ title, subtitle, images, href, index }: ProjectCardProps) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    router.push(href);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-12 hover:bg-neutral-50 transition-all duration-700 ease-out cursor-pointer"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-12">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">{title}</h3>
            <p className="text-sm md:text-base lg:text-lg text-neutral-600">{subtitle}</p>
          </div>
          <button 
            className={`opacity-0 group-hover:opacity-100 transition-all duration-500 p-3 rounded-full hover:bg-neutral-100 ${
              isHovering ? 'translate-x-0' : '-translate-x-4'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="relative transform group-hover:scale-[1.02] transition-all duration-700 ease-out">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-2xl transform scale-95 translate-y-4" />
          </div>
          
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
            {images.map((image, imgIndex) => (
              <ProtectedImage
                key={imgIndex}
                src={image}
                alt={`${title} preview ${imgIndex + 1}`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 