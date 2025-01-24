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
    quote: "Yash's design aesthetic matched with Aston Martin F1's brand image. The AMF1 Engage app that the team made was an eye opener that challenged how we create mobile apps.",
    author: "Rob Bloom",
    role: "CMO of",
    company: "Aston Martin F1",
    image: "/rob_bloom.png"
  },
  {
    quote: "Yash's innovative approach and technical expertise blended together to create a terrific product.",
    author: "Babak Hodjat",
    role: "CTO of",
    company: "Cognizant",
    image: "/babak.png"
  },
  {
    quote: "Yash's ability to blend design and functionality is remarkable. The team delivered beyond our expectations.",
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