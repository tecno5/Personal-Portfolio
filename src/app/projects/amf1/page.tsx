"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

export default function AMF1Project() {
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
            <span className="text-[#0066FF] font-medium mb-4 block">UX Design Concept</span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-tight mb-6">
              AMF1 Go: Reimagining the<br />
              Formula 1 Fan Experience
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mb-12">
              A conceptual design exploration for Aston Martin Formula One, focusing on how AI and personalization 
              could transform fan engagement in motorsport.
            </p>

            {/* Project Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">My Roles</h3>
                <div className="space-y-1">
                  <p className="font-medium">UX Designer</p>
                  <p className="font-medium text-neutral-600">ML Engineer</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">Duration</h3>
                <p className="font-medium">3 Months</p>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">Deliverables</h3>
                <div className="space-y-1">
                  <p className="font-medium">UX/UI Design</p>
                  <p className="font-medium text-neutral-600">ML Prototypes</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 mb-2">Tools</h3>
                <div className="space-y-1">
                  <p className="font-medium">Figma, Python</p>
                  <p className="font-medium text-neutral-600">Azure AI</p>
                </div>
              </div>
            </div>

            {/* Hero Image with Gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-3xl transform scale-95 translate-y-4 opacity-70" />
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/AMF1Mock2.png"
                  alt="AMF1 App Preview"
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
                Formula 1 teams face a unique challenge: maintaining deep fan engagement throughout the racing season 
                while delivering personalized experiences at scale. This project explored how emerging technologies 
                could create more meaningful connections between the team and its global fanbase.
              </p>
              
              <div className="bg-neutral-50 rounded-2xl p-10">
                <h3 className="text-xl font-medium mb-8">Key Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <h4 className="font-medium">Fan Engagement</h4>
                    <p className="text-sm text-neutral-600">How might we maintain excitement between races and create more interactive experiences?</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Global Audience</h4>
                    <p className="text-sm text-neutral-600">How can we personalize content for fans across different time zones and cultures?</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Process Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Design Process</h2>
              <div className="space-y-24">
                {[
                  {
                    phase: "01",
                    title: "Research & Discovery",
                    description: "Conducted user interviews with F1 fans and analyzed data patterns to identify opportunities for AI integration.",
                    insights: [
                      "Fans desire more behind-the-scenes content",
                      "Race weekends drive highest engagement",
                      "Data-driven predictions highly valued"
                    ]
                  },
                  {
                    phase: "02",
                    title: "Technical Architecture",
                    description: "Developed ML models for content personalization while designing the user experience.",
                    insights: [
                      "Azure OpenAI integration",
                      "Content recommendation system",
                      "Real-time data processing"
                    ]
                  },
                  {
                    phase: "03",
                    title: "Prototyping & Testing",
                    description: "Created high-fidelity prototypes and tested ML models with real F1 data.",
                    insights: [
                      "UI/UX validation",
                      "ML model accuracy testing",
                      "Performance optimization"
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
              <h2 className="text-3xl font-medium mb-12">Design Showcase</h2>
              
              {/* Hero Mockup */}
              <div className="mb-32">
                <div className="relative mb-12 transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-3xl transform scale-95 translate-y-4 opacity-70" />
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                    <Image
                      src="/amf1mock3.png"
                      alt="AMF1 App Preview"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-medium mb-4">Personalized Homepage</h3>
                  <p className="text-lg text-neutral-600">A dynamic home screen that adapts to user preferences and real-time race events, featuring AI-curated content and personalized race insights.</p>
                </div>
              </div>

              {/* Side by Side Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                <div>
                  <div className="relative mb-6 transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-3xl transform scale-95 translate-y-4 opacity-70" />
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-100">
                      <Image
                        src="/amf1racehub.jpeg"
                        alt="Live Race Hub"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Live Race Hub</h3>
                  <p className="text-neutral-600">Real-time race tracking with interactive telemetry data.</p>
                </div>
                <div>
                  <div className="relative mb-6 transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-3xl transform scale-95 translate-y-4 opacity-70" />
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-100">
                      <Image
                        src="/amf1community.jpeg"
                        alt="Community Features"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Community Features</h3>
                  <p className="text-neutral-600">Fan engagement through live discussions and predictions.</p>
                </div>
              </div>

              {/* Remaining Full Width Features */}
              <div className="space-y-32">
                {[
                  {
                    title: "Race Weekend Experience",
                    description: "Comprehensive race weekend coverage with real-time updates and interactive features.",
                    image: "/amf1widget1.png"
                  },
                  {
                    title: "Team Updates & News",
                    description: "Exclusive behind-the-scenes content and team announcements in an immersive format.",
                    image: "/amf1teamup.jpeg"
                  }
                ].map((showcase, index) => (
                  <div key={index} className="group">
                    <div className="relative mb-12 transition-all duration-500 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/5 to-neutral-900/20 rounded-3xl blur-3xl transform scale-95 translate-y-4 opacity-70" />
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                        <Image
                          src={showcase.image}
                          alt={showcase.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-medium mb-4">{showcase.title}</h3>
                      <p className="text-lg text-neutral-600">{showcase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Solution Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-12">Proposed Solution</h2>
              <div className="space-y-16">
                {/* Keep your existing features section but frame it as proposed features */}
              </div>
            </section>
          </FadeInSection>

          {/* Learnings Section instead of Impact */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Key Learnings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "User-Centered Design",
                    description: "Understanding F1 fans' unique needs was crucial for creating meaningful features."
                  },
                  {
                    title: "Technical Feasibility",
                    description: "Balancing innovative features with technical constraints and performance requirements."
                  },
                  {
                    title: "Brand Integration",
                    description: "Maintaining Aston Martin's luxury identity while creating an accessible experience."
                  },
                  {
                    title: "Future Potential",
                    description: "Identifying opportunities for AI and personalization in sports applications."
                  }
                ].map((learning, index) => (
                  <div key={index} className="bg-neutral-50 p-8 rounded-xl">
                    <h3 className="font-medium mb-2">{learning.title}</h3>
                    <p className="text-neutral-600">{learning.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Future Considerations & Impact */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Future Considerations & Impact</h2>
              
              <div className="mb-16">
                <h3 className="text-2xl font-medium mb-4">Vision for the Future</h3>
                <p className="text-lg text-neutral-600 mb-6">
                  While this project remained in the conceptual phase, it laid important groundwork for future 
                  fan engagement initiatives. The research and prototypes demonstrated clear opportunities for 
                  technology to enhance the Formula 1 experience, particularly in markets where physical race 
                  attendance isn't always possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "AR/VR Integration",
                    description: "Potential for immersive garage tours and virtual paddock experiences."
                  },
                  {
                    title: "Web3 Opportunities",
                    description: "Digital collectibles and exclusive member experiences through blockchain technology."
                  },
                  {
                    title: "Data Visualization",
                    description: "Advanced telemetry displays and predictive race analytics for deeper fan engagement."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-neutral-50 p-6 rounded-xl">
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-4">Industry Context</h3>
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    This project coincided with Formula 1's broader digital transformation initiatives, 
                    as teams and organizers sought new ways to engage the sport's growing global audience. 
                    The concepts explored here aligned with industry trends toward more personalized, 
                    data-driven fan experiences.
                  </p>
                  <p className="text-neutral-600">
                    The research and prototypes from this project contributed to ongoing discussions about 
                    the future of fan engagement in motorsport, particularly regarding the role of AI and 
                    personalization in creating more meaningful connections between teams and their supporters.
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