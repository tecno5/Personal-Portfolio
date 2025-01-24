"use client";

import { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import FadeInSection from "@/components/FadeInSection";

// You might want to move this to a separate data file later
const projects = [
  {
    title: "Aston Martin Formula One",
    subtitle: "Mobile App Design",
    images: ["/AMF1Mock2.png"],
    href: "/projects/amf1",
    priority: true
  },
  {
    title: "Mav Grades",
    subtitle: "Co-Founder | Product Manager",
    images: ["/MavMock1.png"],
    href: "/projects/mavgrades"
  },
  {
    title: "HackUTA",
    subtitle: "Industry Coordination | Consulting",
    images: ["/hackutamock1.png"],
    href: "/projects/hackuta"
  },
  // Add more projects here
];

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 md:px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h1 className="text-3xl md:text-4xl font-medium mb-4">All Projects</h1>
            <p className="text-neutral-600 mb-12 md:mb-16 max-w-2xl">
              A collection of projects I've worked on, ranging from mobile app design to product management and consulting.
            </p>
          </FadeInSection>

          <div className="space-y-12 md:space-y-24">
            {projects.map((project, index) => (
              <FadeInSection key={index}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  images={project.images}
                  href={project.href}
                  index={index}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 