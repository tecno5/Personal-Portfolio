"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  image: string;
  details: string[];
}

interface FeatureTabViewProps {
  features: Feature[];
}

export default function FeatureTabView({ features }: FeatureTabViewProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-neutral-50 rounded-2xl p-8">
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              activeTab === index 
                ? 'bg-[#0066FF] text-white' 
                : 'bg-white text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div>
          <h3 className="text-2xl font-medium mb-4">{features[activeTab].title}</h3>
          <p className="text-neutral-600 mb-6">{features[activeTab].description}</p>
          <ul className="space-y-3">
            {features[activeTab].details.map((detail, index) => (
              <li key={index} className="flex items-center text-neutral-600">
                <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mr-3" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
          <Image
            src={features[activeTab].image}
            alt={features[activeTab].title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
} 