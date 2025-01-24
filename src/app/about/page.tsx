"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-[300vh]">
      {/* Content - Bottom layer */}
      <div className="relative z-0">
        {/* Hero Section */}
        <div className="h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="max-w-2xl">
                <span className="text-[#0066FF] font-medium mb-4 block bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 w-fit">
                  About Me
                </span>
                <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-tight mb-6">
                  Building Digital<br className="hidden sm:block" />
                  Experiences
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  A product-focused developer and student leader at UTA, passionate about creating 
                  intuitive solutions that make a real impact. Currently exploring the intersection 
                  of AI and user experience while leading multiple successful student initiatives.
                </p>
              </div>
              
              {/* Profile Picture */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-3xl overflow-hidden mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 to-neutral-900/30 z-10" />
                <Image
                  src="/profile.jpg"
                  alt="Yash Rao"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Sections - Solid backgrounds */}
        <div className="relative">
          {/* Background Section */}
          <section className="bg-white">
            <div className="max-w-4xl mx-auto px-6 py-32">
              <h2 className="text-3xl font-medium mb-12">Background</h2>
              <p className="text-lg text-neutral-600 mb-12">
                I'm a Computer Information Systems student at The University of Texas at Arlington, passionate about 
                building products that make a difference. I combine technical expertise with product vision 
                to create meaningful digital experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">University of Texas at Arlington</p>
                      <p className="text-neutral-600">B.S. Computer Information Systems</p>
                      <p className="text-sm text-neutral-500">Expected 2025</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "TypeScript", "Next.js", "Python",
                      "UI/UX Design", "Product Management", "AI/ML",
                      "Data Analysis"
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-white rounded-full text-sm text-neutral-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section className="bg-white">
            <div className="max-w-4xl mx-auto px-6 py-32">
              <h2 className="text-3xl font-medium mb-12">My Journey</h2>
              <div className="space-y-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    My path in technology began with a fascination for problem-solving and a desire to create 
                    meaningful impact. At UTA, I've evolved from a curious programmer to a product-focused 
                    developer and community leader. Through my roles in ACM and various projects, I've learned 
                    to bridge the gap between technical excellence and user-centered design.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3">Problem Solver</h3>
                    <p className="text-neutral-600">
                      Approaching challenges with analytical thinking and creative solutions.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3">Community Builder</h3>
                    <p className="text-neutral-600">
                      Creating platforms and opportunities that bring people together.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3">Product Visionary</h3>
                    <p className="text-neutral-600">
                      Turning ideas into impactful digital experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 py-32">
              <h2 className="text-3xl font-medium mb-12">Experience</h2>
              <div className="space-y-12">
                {[
                  {
                    role: "Full Stack Developer Intern",
                    company: "Aston Martin Formula One | Cognizant",
                    period: "Aug 2024 - Nov 2024",
                    description: "Led conceptual design exploration and development for Aston Martin Formula One's mobile app initiative, focusing on cross-platform development and AI-driven fan engagement.",
                    achievements: [
                      "Developed a comprehensive mobile app using .NET MAUI framework, enabling cross-platform deployment while maintaining native performance and consistent user experience across iOS and Android.",
                      "Designed and implemented real-time race analytics dashboard with Azure backend integration, featuring live telemetry data and AI-driven personalization.",
                      "Created technical architecture incorporating Azure OpenAI services, real-time data processing, and cross-platform push notifications to enhance fan engagement during race weekends.",
                      "Collaborated with marketing and engineering teams to ensure design solutions aligned with AMF1's premium brand identity while meeting technical performance requirements."
                    ]
                  },
                  {
                    role: "Machine Learning Engineer Intern",
                    company: "Cognizant",
                    period: "Jun 2024 - Aug 2024",
                    description: "Built generative AI solutions, explored advanced ML models, and leveraged transfer learning to optimize image classification.",
                    achievements: [
                      "Collaborated on developing generative AI solutions using vectors and LangChain, aligning technological capabilities with client needs.",
                      " Coordinated with cross-functional teams to explore advanced AI topics such as diffusion models, convolutional neural networks, and transformer neural networks to inform product strategy and implementation. ",
                      "Leveraged transfer learning techniques to optimize image classification accuracy.",
                      " Managed the implementation of transfer learning techniques to enhance image classification models, improving performance metrics and reducing training time to meet project deadlines and objectives."
                    ]
                  },
                  {
                    role: "Industry Coordinator",
                    company: "HackUTA",
                    period: "Jan 2024 - Dec 2024",
                    description: "Led sponsorship initiatives and managed corporate partnerships for UTA's largest hackathon.",
                    achievements: [
                      "Secured $24,523 in sponsorships through strategic outreach and relationship building.",
                      "Developed and maintained partnerships with 14+ corporate sponsors.",
                      "Coordinated event logistics and programming for 600+ participants.",
                      "Created comprehensive sponsorship packages and marketing materials."
                    ]
                  },
                  {
                    role: "Co-Founder & Product Manager",
                    company: "MavGrades",
                    period: "Jan 2024 - Present",
                    description: "Leading product strategy and development for UTA's first comprehensive grade analytics platform.",
                    achievements: [
                      "Grew platform to 1,000+ daily active users through strategic feature development.",
                      "Implemented data-driven development process using analytics and user feedback.",
                      "Led UI/UX redesign resulting in 40% increase in user engagement.",
                      "Managed cross-functional team of developers and designers."
                    ]
                  },
                  {
                    role: "Vice President",
                    company: "Association for Computing Machinery at UTA",
                    period: "Jan 2024 - Present",
                    description: "Leading UTA's largest computer science organization, focusing on fostering innovation, technical excellence, and professional development for 1300+ student members.",
                    achievements: [
                      "Spearheaded the development and launch of multiple student-led projects including MavGrades and HackUTA, creating hands-on learning opportunities for members.",
                      "Established partnerships with industry leaders like Adobe, BlackStone, and Lockheed Martin to provide workshops, mentorship programs, and recruitment opportunities.",
                      "Implemented a structured project development framework that increased active project participation by 200% and improved project completion rates.",
                      "Organized weekly technical workshops and networking events, achieving consistent attendance of 100+ students per session and fostering a vibrant tech community."
                    ]
                  }
                ].map((experience, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
                    <div className="grid md:grid-cols-[200px,1fr] gap-8">
                      <div className="text-neutral-500">{experience.period}</div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{experience.role}</h3>
                        <p className="text-[#0066FF] mb-4">{experience.company}</p>
                        <p className="text-neutral-600 mb-6 leading-relaxed">{experience.description}</p>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                              <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-neutral-600 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white">
            <div className="max-w-4xl mx-auto px-6 py-32">
              <h2 className="text-3xl font-medium mb-12">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
                  <div className="space-y-6">
                    {[
                      {
                        category: "Frontend Development",
                        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
                      },
                      {
                        category: "Backend Development",
                        skills: ["Node.js", "Python", "SQL", "REST APIs"]
                      },
                      {
                        category: "Tools & Platforms",
                        skills: ["Git", "AWS", "Firebase", "Vercel"]
                      }
                    ].map((group, index) => (
                      <div key={index}>
                        <h4 className="text-sm text-neutral-500 mb-3">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 bg-neutral-50 rounded-full text-sm text-neutral-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-6">Product & Leadership</h3>
                  <div className="space-y-4">
                    {[
                      "Product Strategy",
                      "User Research",
                      "UI/UX Design",
                      "Team Leadership",
                      "Stakeholder Management",
                      "Data Analysis",
                      "Project Management",
                      "Community Building"
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full" />
                        <span className="text-neutral-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="bg-white">
            <div className="max-w-4xl mx-auto px-6 py-32">
              <h2 className="text-3xl font-medium mb-12">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "MavGrades",
                    description: "Grade analytics platform serving UTA's student community",
                    link: "/projects/mavgrades"
                  },
                  {
                    title: "HackUTA",
                    description: "North Texas' largest student-run hackathon",
                    link: "/projects/hackuta"
                  }
                ].map((project, index) => (
                  <a 
                    href={project.link}
                    key={index} 
                    className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-medium mb-2 group-hover:text-[#0066FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600">{project.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Mountains with enhanced effects */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {/* Distant Mountains */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.5], [0, 300]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
            opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0.3])
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-[45vh] fill-neutral-100" preserveAspectRatio="none">
            <path d="M0,320 L1440,320 L1440,150 L1080,280 L720,180 L360,250 L0,120 L0,320 Z" />
          </svg>
        </motion.div>

        {/* Middle Mountains with Parallax */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.5], [0, 200]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.05]),
            opacity: useTransform(scrollYProgress, [0, 0.9], [1, 0.4])
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-[40vh] fill-neutral-200" preserveAspectRatio="none">
            <path d="M0,320 L1440,320 L1440,100 L1080,220 L720,120 L360,200 L0,80 L0,320 Z" />
          </svg>
        </motion.div>

        {/* Near Mountains with Shadow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.5], [0, 100]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.02])
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-400/10 to-transparent transform translate-y-4 blur-2xl" />
            <svg viewBox="0 0 1440 320" className="w-full h-[35vh] fill-neutral-300" preserveAspectRatio="none">
              <path d="M0,320 L1440,320 L1440,180 L1080,100 L720,220 L360,140 L0,200 L0,320 Z" />
            </svg>
          </div>
        </motion.div>

        {/* Use the new component */}
        <BackgroundParticles />
      </div>
    </div>
  );
} 