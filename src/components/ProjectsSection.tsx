"use client";

import ProjectCard from './ProjectCard';
import ParallaxTitle from './ParallaxTitle';
import Link from 'next/link';

interface ProjectsSectionProps {
  projects: Array<{
    title: string;
    subtitle: string;
    images: string[];
    href: string;
    priority?: boolean;
  }>;
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="py-16 md:py-32">
      <ParallaxTitle>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-medium">Selected works</h2>
          <Link 
            href="/projects"
            className="px-4 md:px-6 py-2 md:py-2.5 bg-[#0066FF] text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
          >
            View All Works →
          </Link>
        </div>
      </ParallaxTitle>
      
      <div className="mt-32 md:mt-48 space-y-12 md:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            images={project.images}
            href={project.href}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}