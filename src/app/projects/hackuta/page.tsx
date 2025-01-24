"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ImageCarousel from "@/components/ImageCarousel";

export default function HackUTAProject() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Banner */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hackuta.JPG"
            alt="HackUTA Event"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        
        <div className="relative min-h-screen px-6 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="text-[#0066FF] font-medium mb-4 block bg-white/90 rounded-full px-4 py-1 w-fit">
                Industry Coordination
              </span>
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-tight mb-6">
                HackUTA 2024
              </h1>
              <p className="text-xl max-w-2xl mb-8 text-white/90">
                Leading sponsorship initiatives for one of North Texas' largest hackathons - 
                a 24-hour innovation marathon bringing together students to design, develop, 
                and pitch projects from scratch.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <div className="text-2xl font-medium mb-1">
                    <AnimatedCounter 
                      end={27000} 
                      prefix="$"
                      duration={2000}
                    />
                  </div>
                  <p className="text-sm text-white/80">Operating Budget</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <div className="text-2xl font-medium mb-1">
                    <AnimatedCounter end={543} />
                  </div>
                  <p className="text-sm text-white/80">Participants</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <div className="text-2xl font-medium mb-1">
                    <AnimatedCounter end={125} />
                  </div>
                  <p className="text-sm text-white/80">Projects Submitted</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <div className="text-2xl font-medium mb-1">
                    <AnimatedCounter end={31} />
                  </div>
                  <p className="text-sm text-white/80">Total Events</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      
      {/* Content Sections */}
      <div className="px-6 py-32">
        <div className="max-w-4xl mx-auto space-y-32">
          {/* Role Overview */}
          <FadeInSection>
            <section className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-medium mb-6">Industry Coordinator</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  As the primary liaison between HackUTA and corporate partners, I led sponsorship 
                  initiatives and managed event logistics to create an optimal environment for 
                  innovation and learning.
                </p>
                <div className="space-y-4">
                  {[
                    "Corporate partnership development",
                    "Sponsorship package creation",
                    "Vendor coordination",
                    "Budget management",
                    "Event logistics oversight"
                  ].map((responsibility, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full" />
                      <p className="text-neutral-600">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-medium mb-2">Timeline</h3>
                  <p className="text-neutral-600">10 months of planning & execution</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-medium mb-2">Impact</h3>
                  <p className="text-neutral-600">Crafted a sponsorship strategy that raised $24,523</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-medium mb-2">Scope</h3>
                  <p className="text-neutral-600">UTA's largest student-run hackathon</p>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Sponsorship Journey */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-12">Sponsorship Journey</h2>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[50%] w-px bg-neutral-200" />
                <div className="space-y-24">
                  {[
                    {
                      phase: "Research & Strategy",
                      description: "Analyzed previous sponsorship data and developed targeted outreach strategies.",
                      metric: "200+ Companies Researched"
                    },
                    {
                      phase: "Outreach & Negotiation",
                      description: "Led communication with potential sponsors and negotiated partnership terms.",
                      metric: "50+ Meetings Conducted"
                    },
                    {
                      phase: "Partnership Management",
                      description: "Ensured sponsor satisfaction through consistent communication and support.",
                      metric: "14 Partnerships Secured"
                    },
                    {
                      phase: "Event Execution",
                      description: "Coordinated sponsor activities and managed vendor relationships.",
                      metric: "100% Partner Satisfaction"
                    }
                  ].map((phase, index) => (
                    <div key={index} className="relative grid md:grid-cols-2 gap-8">
                      <div className={`md:text-right ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                        <h3 className="text-xl font-medium mb-3">{phase.phase}</h3>
                        <p className="text-neutral-600 mb-4">{phase.description}</p>
                        <div className="font-medium text-[#0066FF]">{phase.metric}</div>
                      </div>
                      <div className="absolute left-[50%] top-0 w-3 h-3 bg-[#0066FF] rounded-full transform -translate-x-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Event Details */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Event Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 rounded-xl p-8">
                  <h3 className="text-xl font-medium mb-4">Event Format</h3>
                  <div className="space-y-3">
                    <p className="text-neutral-600">
                      A 24-hour hackathon where students design, develop, and pitch projects from scratch. 
                      Open to all students regardless of experience, skill, major, or background.
                    </p>
                    <ul className="space-y-2 text-neutral-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full" />
                        Team size: 2-4 members
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full" />
                        College students only (18+)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full" />
                        All skill levels welcome
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-8">
                  <h3 className="text-xl font-medium mb-4">Event Highlights</h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      Technical workshops and mentorship
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      Free meals, snacks, and refreshments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      Mini-event games and challenges
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      Exclusive HackUTA t-shirts for demo participants
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Event Statistics */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Event Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 rounded-xl p-8">
                  <h3 className="text-xl font-medium mb-4">Participant Demographics</h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      73% undergraduate, 27% graduate students
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      22% from underrepresented groups in tech
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      47% first-time hackathon participants
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      82% UTA students, 18% other universities
                    </li>
                  </ul>
                </div>
                <div className="bg-neutral-50 rounded-xl p-8">
                  <h3 className="text-xl font-medium mb-4">Workshop Engagement</h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      GitHub Copilot Workshop: 154 attendees
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      UI/UX Workshop: 109 attendees
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      ML/Computer Vision: 101 attendees
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                      JPMC Panel: 75 attendees
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Technical Achievement */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Technical Achievements</h2>
              <div className="bg-neutral-50 rounded-xl p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Custom CMS Platform</h3>
                    <p className="text-neutral-600">
                      Developed and deployed a custom Content Management System that successfully:
                    </p>
                    <ul className="mt-3 space-y-2 text-neutral-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                        Handled 600 concurrent users with 0% downtime
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                        One of 4 FOSS hackathon platforms in Texas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full mt-2" />
                        Apple Pass integration capabilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Keep your existing Impact & Results section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-medium mb-8">Impact & Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    metric: 1200,
                    label: "Applications",
                    description: "1000+ accepted participants",
                    suffix: "+"
                  },
                  {
                    metric: 33,
                    label: "Project Growth",
                    description: "Increase in submissions from 2023",
                    suffix: "%"
                  },
                  {
                    metric: 9,
                    label: "Attendance Growth",
                    description: "Increase from previous year",
                    suffix: "%"
                  },
                  {
                    metric: 100,
                    label: "Staff & Mentors",
                    description: "Supporting the event",
                    suffix: "+"
                  }
                ].map((stat, index) => (
                  <div key={index} className="bg-neutral-50 p-8 rounded-xl">
                    <div className="text-3xl font-medium mb-2">
                      <AnimatedCounter 
                        end={stat.metric}
                        suffix={stat.suffix}
                        duration={2000 + (index * 500)}
                      />
                    </div>
                    <h3 className="font-medium mb-2">{stat.label}</h3>
                    <p className="text-neutral-600">{stat.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-4">Event Success</h3>
                <div className="space-y-4">
                  <p className="text-neutral-600">
                    As one of Texas' largest hackathons, HackUTA successfully brought together students 
                    from diverse backgrounds to innovate and learn. Through strategic sponsorships and careful 
                    planning, we provided participants with resources, mentorship, and opportunities to develop 
                    their skills.
                  </p>
                  <p className="text-neutral-600">
                    The event fostered a collaborative environment where beginners and experienced developers 
                    alike could contribute to meaningful projects, while corporate partners gained access to 
                    talented students and innovative solutions.
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>
      </div>


      <div className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <ImageCarousel 
              images={[
                {
                  src: "/hackuta.JPG",
                  alt: "HackUTA Event Overview",
                  title: "Serving Lunch to 600+ people!",
                  description: "Our amazing organizers and volunteers served lunch to over 600 participants! IN THE TEXAS SUMMER HEAT!"
                },
                {
                  src: "/hackuta2.JPG",
                  alt: "A refreshment station",
                  title: "HackUTA Market",
                  description: "HackUTA has a one of a kind market where participants can buy snacks, drinks, and prizes through our point system free of charge!"
                },
                {
                  src: "/hackuta3.JPG",
                  alt: "Workshop Session",
                  title: "Texas's most diverse hackathon",
                  description: "HackUTA is proud to be the most diverse hackathon in Texas, with over 22% of our participants coming from underrepresented groups in tech."
                },
                {
                  src: "/hackuta4.JPG",
                  alt: "Prize Ceremony",
                  title: "Awards Ceremony",
                  description: "Celebrating the achievements of our participants during the closing ceremony, where over $14,000 in prizes were awarded."
                }
              ]}
            />
          </FadeInSection>
        </div>
      </div>

    </main>
  );
} 