"use client";

import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import ProtectedImage from "@/components/ProtectedImage";
import Footer from "@/components/Footer";
import SlideIn from "@/components/SlideIn";
import ScaleIn from "@/components/ScaleIn";
import FadeInSection from "@/components/FadeInSection";
import ParallaxTitle from "@/components/ParallaxTitle";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

interface ProjectCard {
  title: string;
  subtitle: string;
  images: string[];
  priority?: boolean;
  href: string;
}

const projects: ProjectCard[] = [
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
];

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero section with animated background */}
      <div className="relative min-h-[100dvh] overflow-hidden">
        <AnimatedBackground />
        
        {/* Content */}
        <div className="relative min-h-[100dvh] flex flex-col">
          <div className="flex-1 px-4 md:px-6 pt-16 md:pt-32">
            <section className="max-w-6xl mx-auto h-full flex flex-col justify-center">
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-lg md:text-xl mb-3 md:mb-4 inline-block animate-float">
                  Hello! I'm Yash Rao.
                </p>
                
                <h1 className="text-[clamp(1.75rem,5vw,5.5rem)] leading-[1.15] md:leading-[1.1] tracking-tight font-medium mb-4 md:mb-8">
                  Creating digital<br className="hidden sm:block" />
                  products with an emphasis<br className="hidden sm:block" />
                  on Design and <span className="text-neutral-400">Functionality.</span>
                </h1>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6">
                  <div className="flex gap-4">
                    <button 
                      onClick={scrollToProjects}
                      className="px-6 py-2.5 bg-[#0066FF] text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
                    >
                      See my work →
                    </button>
                 
                  </div>
                  
                  <p className="max-w-md text-sm md:text-base text-neutral-600">
                    Previously at Cognizant and Aston Martin Formula One.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Projects section with white background */}
      <div id="projects" className="bg-white">
        <div className="px-4 md:px-6">
          <section className="max-w-6xl mx-auto">
            <ProjectsSection projects={projects} />
          </section>
        </div>
      </div>

      {/* Testimonials section */}
      <TestimonialsSection />

      {/* Awards & Recognition section */}
      <div className="bg-white px-6 pb-32">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-16">
            <ScaleIn>
              <div>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight font-medium mb-6">
                  A cross-functional innovator<br />
                  bridging product, engineering, and design<br />
                  to create meaningful digital experiences.
                </h2>
                <p className="max-w-2xl text-neutral-600">
                Combining product vision, engineering expertise, and design thinking, I craft digital experiences that truly resonate. 
                My approach centers on understanding user needs and leveraging agile methodologies to align each milestone with a cohesive vision. 
                By fostering collaboration across diverse teams, 
                I deliver solutions that balance strategic objectives with user delight—ultimately shaping human-centered products that spark genuine connection.
                </p>
                
                
                <Link 
                  href="/about" 
                  className="mt-8 px-6 py-3 rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors inline-block"
                >
                  About Me →
                </Link>
              </div>
            </ScaleIn>

            <div className="flex justify-between items-start">
              <SlideIn direction="left">
                <h3 className="text-3xl font-medium">Awards &<br />Recognition</h3>
              </SlideIn>
              
              <div className="flex-1 max-w-3xl ml-32">
                <div className="space-y-8">
                  {[
                    {
                      title: 'Best UI/UX Design',
                      year: '2024 - UTA College of Business',
                    },
                    {
                      title: 'Generative AI Expert',
                      year: '2024 - Cognizant',
                    },
                    {
                      title: 'Deans List',
                      year: '2024 - UTA College of Business',
                    },
                    {
                      title: 'High School Aerospace Scholar',
                      year: '2020 - NASA Johnson Space Center',
                    },
                  ].map((award, index) => (
                    <SlideIn key={index} direction="right" delay={index * 0.1}>
                      <div className="flex items-center justify-between py-6 border-b border-neutral-200 group cursor-pointer">
                        <div>
                          <h4 className="text-2xl font-medium mb-2">{award.title}</h4>
                          <p className="text-lg text-neutral-600">{award.year}</p>
                        </div>
                        <svg 
                          className="w-8 h-8 text-neutral-400 group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path d="M5 12h14m-7-7l7 7-7 7"/>
                        </svg>
                      </div>
                    </SlideIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
