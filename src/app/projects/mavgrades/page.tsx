"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function MavGradesProject() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0066FF] font-medium mb-4 block">Product Development</span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-tight mb-6">
              MavGrades: Empowering<br />
              Student Success Through Data
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mb-6">
              Leading product strategy and development for UTA's first comprehensive grade analytics platform. 
              From initial concept to successful launch, driving student-centric decisions through data.
            </p>

            {/* Add live site link */}
            <a 
              href="https://www.mavgrades.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[#0066FF] hover:opacity-80 transition-opacity mb-12"
            >
              Visit Live Site
              <svg 
                className="w-4 h-4 ml-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* Project Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">My Roles</h3>
                <div className="space-y-1">
                  <p className="font-medium">Co-Founder</p>
                  <p className="font-medium text-neutral-600">Product Manager</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">Timeline</h3>
                <p className="font-medium">2023 - Present</p>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">Deliverables</h3>
                <div className="space-y-1">
                  <p className="font-medium">Web Application</p>
                  <p className="font-medium text-neutral-600">Data Pipeline</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">Stack</h3>
                <div className="space-y-1">
                  <p className="font-medium">Next.js, Python</p>
                  <p className="font-medium text-neutral-600">PostgreSQL</p>
                </div>
              </div>
            </div>

            {/* Hero Image with Gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-3xl transform scale-95 translate-y-4 opacity-70" />
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/MavMock1.png"
                  alt="MavGrades Platform Preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-40">
          {/* Challenge Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">The Challenge</h2>
              <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                UTA students lacked access to comprehensive historical grade data, making it difficult to make 
                informed decisions about course selection and academic planning. The existing solutions were 
                either outdated, incomplete, or difficult to use.
              </p>
              
              <div className="bg-neutral-50 rounded-2xl p-10">
                <h3 className="text-xl font-medium mb-8">Key Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <h4 className="font-medium">Data Accessibility</h4>
                    <p className="text-sm text-neutral-600">How might we make grade distribution data more accessible and useful for students?</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">User Experience</h4>
                    <p className="text-sm text-neutral-600">How can we present complex data in an intuitive and engaging way?</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Process Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Leadership & Strategy</h2>
              <div className="space-y-24">
                {[
                  {
                    phase: "01",
                    title: "Product Vision & Strategy",
                    description: "Led the conceptualization and strategic planning of MavGrades, identifying key opportunities in the education technology space.",
                    insights: [
                      "Market analysis and competitive positioning",
                      "Product roadmap development",
                      "Stakeholder alignment and buy-in"
                    ]
                  },
                  {
                    phase: "02",
                    title: "Team Building & Development",
                    description: "Built and managed cross-functional teams while establishing development processes and communication frameworks.",
                    insights: [
                      "Engineering team recruitment",
                      "Agile methodology implementation",
                      "Technical architecture decisions"
                    ]
                  },
                  {
                    phase: "03",
                    title: "Growth & User Acquisition",
                    description: "Developed and executed strategies for user growth and engagement, focusing on the UTA student community.",
                    insights: [
                      "User acquisition strategy",
                      "Feature prioritization",
                      "Community engagement initiatives"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="group">
                    <div className="mb-8">
                      <span className="text-sm text-[#0066FF] font-medium mb-3 block">{phase.phase}</span>
                      <h3 className="text-2xl font-medium mb-4">{phase.title}</h3>
                      <p className="text-lg text-neutral-600 mb-8 leading-relaxed">{phase.description}</p>
                      <ul className="space-y-3">
                        {phase.insights.map((insight, i) => (
                          <li key={i} className="flex items-start text-neutral-600">
                            <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mr-3 mt-2" />
                            <span className="flex-1">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Design Showcase Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-12">Key Initiatives</h2>
              
              {/* Main Feature Image */}
              <div className="mb-32">
                <div className="relative mb-12 transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-3xl transform scale-95 translate-y-4 opacity-70" />
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                    <Image
                      src="/MavGradesSS2.jpg"
                      alt="MavGrades Platform"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-medium mb-4">ACM@UTA Collaboration</h3>
                  <p className="text-lg text-neutral-600">
                    Led development within ACM@UTA, fostering a collaborative environment where student 
                    developers could gain real-world experience while building a valuable tool for the 
                    UTA community.
                  </p>
                </div>
              </div>

              {/* Initiative Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Product Strategy",
                    description: "Developed a sustainable product strategy focusing on accessibility and user privacy, ensuring the platform remains free for all UTA students."
                  },
                  {
                    title: "Technical Leadership",
                    description: "Architected a scalable system processing comprehensive grade data across all UTA departments while maintaining data accuracy."
                  },
                  {
                    title: "Community Building",
                    description: "Established strong relationships with student organizations and faculty to drive platform adoption and gather valuable feedback."
                  },
                  {
                    title: "Future Vision",
                    description: "Creating a foundation for future features including course planning integration and advanced analytics capabilities."
                  }
                ].map((initiative, index) => (
                  <div key={index} className="bg-neutral-50 p-8 rounded-xl">
                    <h3 className="font-medium mb-3">{initiative.title}</h3>
                    <p className="text-neutral-600">{initiative.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Impact & Metrics Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Impact & Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    metric: 10000,
                    label: "Total Users",
                    description: "Growing student community",
                    suffix: "+"
                  },
                  {
                    metric: 1000,
                    label: "Daily Active Users",
                    description: "Consistent daily engagement",
                    suffix: "+"
                  },
                  {
                    metric: 30000,
                    label: "Classes Tracked",
                    description: "Comprehensive grade data",
                    suffix: "+"
                  },
                  {
                    metric: 100,
                    label: "Free Access",
                    description: "Always free for students",
                    suffix: "%"
                  }
                ].map((stat, index) => (
                  <div key={index} className="bg-neutral-50 p-8 rounded-xl">
                    <div className="text-3xl font-medium mb-2">
                      <AnimatedCounter 
                        end={stat.metric} 
                        suffix={stat.suffix}
                        duration={2000 + (index * 500)} // Stagger the animations
                      />
                    </div>
                    <h3 className="font-medium mb-2">{stat.label}</h3>
                    <p className="text-neutral-600">{stat.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-4">Leadership Impact</h3>
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    Leading MavGrades as part of ACM@UTA has been an opportunity to create meaningful impact 
                    in the student community while developing crucial product management and leadership skills.
                  </p>
                  <p className="text-neutral-600">
                    The project exemplifies the potential of student-led initiatives to solve real campus 
                    challenges, demonstrating how technical expertise and user-centric design can come together 
                    to create valuable solutions.
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>

        </div>
      </div>
    </main>
  );
} 