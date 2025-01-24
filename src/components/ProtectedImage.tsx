"use client";

import { useState } from 'react';
import Image from "next/image";

interface ProtectedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ProtectedImage({ src, alt, priority }: ProtectedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full bg-neutral-100 overflow-hidden">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200" />
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        quality={90}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`
          object-cover
          duration-700 ease-in-out
          ${isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        draggable="false"
      />
    </div>
  );
} 