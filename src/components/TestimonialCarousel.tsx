"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I had the pleasure of working with Yash on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Yash for anyone looking for a talented and professional designer.",
    author: "Rob Bloom",
    role: "CMO of",
    company: "Aston Martin F1",
    image: "/rob_bloom.png"
  },
  {
    quote: "Working with Yash was an exceptional experience. Their innovative approach and technical expertise brought our vision to life.",
    author: "Babak Hodjat",
    role: "CTO of",
    company: "Cognizant",
    image: "/babak.png"
  },
  {
    quote: "Yash's ability to blend design and functionality is remarkable. They delivered beyond our expectations.",
    author: "Santhish Muthukrishnan",
    role: "CIO of",
    company: "Ally Financial",
    image: "/ally.jpg"
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className="h-32 flex items-center justify-center">
          <p className="text-2xl text-neutral-800 leading-relaxed">
            {testimonials[activeIndex].quote}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-20">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`group flex flex-col items-center max-w-[200px] ${
              activeIndex === index ? 'opacity-100' : 'opacity-50'
            } transition-all duration-300 hover:opacity-100`}
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium mb-1 truncate">{testimonial.author}</p>
              <p className="text-sm text-neutral-500">
                {testimonial.role} <span className="font-medium">{testimonial.company}</span>
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 