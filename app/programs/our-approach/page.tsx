"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Shield, MessageCircle, Users, Scale, Zap, Globe, Brain, Heart, Sparkles, Leaf } from "lucide-react";

export default function OurApproachPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/facility/wellness/yoga-stretch.jpg"
            alt="Holistic healing at Costa Rica Recovery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-extra-dark/60 to-navy-dark/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light text-white mb-6">
              Trauma-Informed,
              <br />
              <span className="italic font-serif text-orange">Participant-Centered Care</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Understanding the clinical methodology that makes sustainable recovery possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Approach Different */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Clinical Philosophy
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                What Makes Our Approach <span className="italic font-serif text-orange">Different</span>
              </h2>
              <div className="space-y-4 text-lg font-secondary font-light text-gray-700">
                <p>
                  At Costa Rica Recovery, we don't just treat addiction—we address the underlying trauma, patterns, and circumstances that led to substance use.
                </p>
                <p>
                  Our approach integrates proven clinical methodologies with a deep respect for each person's individual story, empowering you to take an active role in your healing.
                </p>
                <p>
                  We believe recovery isn't about compliance—it's about collaboration, understanding, and building the tools you need for lasting change.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Four Pillars of Recovery Section */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Holistic Model
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Four Pillars of <span className="italic font-serif text-orange">Recovery</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto">
              True recovery addresses the whole person through four integrated dimensions. Each pillar supports and strengthens the others, creating a comprehensive foundation for lasting healing.
            </p>
          </motion.div>

          <InteractiveFourPillars />
        </div>
      </section>

      {/* Trauma-Informed Care Section */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Foundation of Care
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Trauma-Informed <span className="italic font-serif text-orange">Care</span>
              </h2>
              <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto">
                Research shows that the vast majority of people struggling with addiction have experienced trauma. We screen every participant for trauma and integrate this understanding into every aspect of treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "We create physically and emotionally safe environments where healing can begin."
                },
                {
                  icon: MessageCircle,
                  title: "Transparency & Trust",
                  description: "Open communication and clear expectations build the foundation for therapeutic relationships."
                },
                {
                  icon: Users,
                  title: "Peer Support",
                  description: "Connection with others who understand your experience reduces isolation and shame."
                },
                {
                  icon: Scale,
                  title: "Collaboration",
                  description: "Treatment decisions are made together, respecting your voice and autonomy."
                },
                {
                  icon: Zap,
                  title: "Empowerment",
                  description: "We help you recognize your strengths and rebuild a sense of control over your life."
                },
                {
                  icon: Globe,
                  title: "Cultural Awareness",
                  description: "We honor diverse backgrounds and recognize how culture shapes healing."
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center">
                      <principle.icon className="h-8 w-8 text-orange" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-secondary text-sm font-light text-gray-700 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-lg font-secondary font-light text-gray-700">
                By addressing trauma alongside addiction, we create the conditions for deeper, more sustainable healing—not just symptom management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Participant-Centered Model Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Your Voice Matters
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Participant-Centered <span className="italic font-serif text-orange">Model</span>
              </h2>
              <div className="space-y-4 text-lg font-secondary font-light text-gray-700">
                <p>
                  Traditional addiction treatment often follows a "doctor-knows-best" model where decisions are made for you, not with you.
                </p>
                <p>
                  Our participant-centered approach is different. We see you as the expert on your own life and recovery needs.
                </p>
                <p>
                  From day one, you're an active collaborator in your treatment planning. We listen to your goals, respect your preferences, and adjust our approach based on what's working for you.
                </p>
                <p>
                  This isn't about lowering standards—it's about recognizing that sustainable recovery comes from within, not from external control.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-primary font-light text-navy-extra-dark mb-6">
                What This Means in Practice:
              </h3>
              <ul className="space-y-4">
                {[
                  "You help design your daily schedule and choose optional activities",
                  "We adjust therapy approaches based on what resonates with you",
                  "You set your own recovery goals, and we support you in reaching them",
                  "Treatment plans evolve as your needs change",
                  "Your feedback directly shapes how we work together"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange text-xl mt-1 flex-shrink-0">✓</span>
                    <span className="text-lg font-secondary font-light text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evidence-Based + Holistic Integration */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1"
            >
              <Image
                src="/facility/wellness/yoga-stretch.jpg"
                alt="Holistic healing at Costa Rica Recovery"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Clinical + Holistic
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Why We Use <span className="italic font-serif text-orange">Multiple Modalities</span>
              </h2>
              <div className="space-y-4 text-lg font-secondary font-light text-gray-700">
                <p>
                  Addiction is complex—it affects your thoughts, emotions, behaviors, physical health, relationships, and sense of self. That's why we don't rely on a single therapeutic approach.
                </p>
                <p>
                  Our program integrates proven clinical therapies (like CBT, DBT, and trauma processing) with holistic practices (like yoga, meditation, art therapy, and nature immersion).
                </p>
                <p>
                  This isn't about adding "extras" to make treatment feel nicer—it's about addressing every dimension of your well-being. Research shows that this integrated approach leads to better outcomes than clinical therapy alone.
                </p>
                <p>
                  The science is clear: sustainable recovery requires both changing how you think and feel about yourself, <em>and</em> rebuilding your relationship with your body, your environment, and your community.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/programs/residential-program"
                  className="inline-block bg-orange text-white font-secondary font-semibold px-8 py-3 rounded-lg hover:bg-orange/90 transition-colors"
                >
                  See Our Complete Treatment Program
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healing Through Nature Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                The Costa Rica Difference
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Why Environment Matters in <span className="italic font-serif text-orange">Recovery</span>
              </h2>
              <div className="space-y-4 text-lg font-secondary font-light text-gray-700">
                <p>
                  Research consistently shows that natural environments reduce stress hormones, improve mood, and enhance emotional regulation—all critical factors in addiction recovery.
                </p>
                <p>
                  Our facility in San José provides easy access to world-class medical care and international airports. But we also recognize that healing happens beyond clinic walls.
                </p>
                <p>
                  Every week, we organize therapeutic excursions into Costa Rica's stunning landscapes—rainforests, waterfalls, beaches, and volcanoes. These aren't just "fun activities"—they're integrated into your treatment plan as a form of nature therapy.
                </p>
                <p>
                  The Pura Vida lifestyle isn't a slogan—it's a philosophy of present-moment living that naturally supports mindfulness and recovery principles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/facility/nature/waterfall-wide.jpg"
                alt="Costa Rica's natural beauty"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes & Research Section */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Measuring Success
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                How We Track <span className="italic font-serif text-orange">Progress</span>
              </h2>
              <div className="space-y-4 text-lg font-secondary font-light text-gray-700 text-left">
                <p>
                  Recovery isn't just about abstinence—it's about building a life worth living. We measure progress across multiple dimensions:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {[
                    "Reduced cravings and substance use",
                    "Improved mental health symptoms",
                    "Better sleep quality and physical health",
                    "Stronger relationships and communication",
                    "Increased self-efficacy and confidence",
                    "Development of healthy coping strategies"
                  ].map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <span className="text-orange text-xl flex-shrink-0">✓</span>
                      <span className="text-base font-secondary font-light text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  Throughout your program, we track your progress through regular assessments and adjust our approach based on what's working for you. After treatment, we conduct follow-up check-ins to ensure you have the ongoing support you need.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Clinical Team Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Expert Care Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Meet the <span className="italic font-serif text-orange">People Behind Our Approach</span>
            </h2>
            <div className="space-y-4 text-lg font-secondary font-light text-gray-700">
              <p>
                Our approach is only as effective as the people delivering it. Our clinical team includes board-certified psychiatrists, licensed psychologists, certified addiction counselors, and holistic practitioners—all trained in trauma-informed, participant-centered care.
              </p>
              <p>
                Many of our team members have lived experience with recovery, bringing both professional expertise and personal understanding to their work.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about/our-team"
                className="inline-block bg-orange text-white font-secondary font-semibold px-8 py-3 rounded-lg hover:bg-orange/90 transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Common Questions
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Your Questions, <span className="italic font-serif text-orange">Answered</span>
              </h2>
            </div>
            <ApproachFAQ />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-extra-dark py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-white mb-6 leading-[1.1] tracking-[-0.02em]">
              Contact Us for <span className="italic font-serif text-orange">Personalized Support</span>
            </h2>
            <p className="text-xl font-secondary font-light text-white/90 mb-8">
              We're committed to personalized and holistic recovery. If you're ready to take the next step, our team is here to help tailor a plan just for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange text-white font-secondary font-semibold px-8 py-4 rounded-lg hover:bg-orange/90 transition-colors text-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ApproachFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is trauma-informed care and why does it matter?",
      answer: "Trauma-informed care recognizes that most people struggling with addiction have experienced trauma—whether physical, emotional, or psychological. Instead of asking \"What's wrong with you?\", we ask \"What happened to you?\" This approach creates safety, builds trust, and addresses the root causes of addiction, not just the symptoms. Research shows that trauma-informed treatment leads to better long-term outcomes because it treats the whole person, not just the substance use.",
    },
    {
      question: "How is participant-centered care different from traditional treatment?",
      answer: "In traditional treatment, the clinical team makes decisions about your care and you're expected to follow the plan. In participant-centered care, you're an active collaborator. We believe you're the expert on your own life and recovery needs. Together, we design your treatment plan, adjust it based on what's working, and ensure you have agency in your healing process. This approach empowers sustainable recovery from within, rather than relying on external control.",
    },
    {
      question: "Why do you use multiple therapeutic approaches instead of just one?",
      answer: "Addiction is complex—it affects your thoughts, emotions, behaviors, physical health, relationships, and sense of self. No single therapy can address all these dimensions. Our integrated approach combines proven clinical therapies (CBT, DBT, trauma processing) with holistic practices (yoga, meditation, nature therapy) because research shows this leads to better outcomes than any single modality alone. True recovery requires addressing every aspect of your well-being.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange/30 transition-colors duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-base sm:text-lg font-secondary font-medium text-navy-extra-dark pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <svg
                className="w-5 h-5 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-sm sm:text-base font-secondary text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// Interactive Four Pillars Component
function InteractiveFourPillars() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const pillars = [
    {
      id: "mind",
      title: "Mind",
      icon: Brain,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Cognitive therapies and emotional healing",
      details: "Evidence-based therapies like CBT, DBT, and REBT help rewire thought patterns and build emotional resilience.",
      connections: ["body", "spirit", "environment"],
      position: "top-left"
    },
    {
      id: "body",
      title: "Body", 
      icon: Heart,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Physical wellness and healing",
      details: "Yoga, nutrition, fitness, and sound healing restore physical health and create mind-body connection.",
      connections: ["mind", "spirit", "environment"],
      position: "top-right"
    },
    {
      id: "spirit",
      title: "Spirit",
      icon: Sparkles,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "Finding meaning and purpose",
      details: "Mindfulness, meditation, and adventure therapy help reconnect with inner purpose and life meaning.",
      connections: ["mind", "body", "environment"],
      position: "bottom-left"
    },
    {
      id: "environment",
      title: "Environment",
      icon: Leaf,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      description: "Supportive healing spaces",
      details: "Costa Rica's natural beauty, therapeutic spaces, and community support create optimal healing conditions.",
      connections: ["mind", "body", "spirit"],
      position: "bottom-right"
    }
  ];

  const getConnectionPath = (from: string, to: string) => {
    const positions = {
      "top-left": { x: 25, y: 25 },
      "top-right": { x: 75, y: 25 },
      "bottom-left": { x: 25, y: 75 },
      "bottom-right": { x: 75, y: 75 }
    };
    
    const fromPos = positions[from as keyof typeof positions];
    const toPos = positions[to as keyof typeof positions];
    
    return `M ${fromPos.x} ${fromPos.y} Q 50 50 ${toPos.x} ${toPos.y}`;
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Connection Lines SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {pillars.map(pillar => 
            pillar.connections.map(connectionId => {
              const connectedPillar = pillars.find(p => p.id === connectionId);
              if (!connectedPillar) return null;
              
              const isActive = hoveredPillar === pillar.id || hoveredPillar === connectionId;
              const isBothActive = hoveredPillar === pillar.id && activePillar === connectionId;
              
              return (
                <motion.path
                  key={`${pillar.id}-${connectionId}`}
                  d={getConnectionPath(pillar.position, connectedPillar.position)}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className={`transition-all duration-300 ${
                    isBothActive 
                      ? 'text-orange-400' 
                      : isActive 
                        ? 'text-gray-300' 
                        : 'text-gray-200'
                  }`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: isActive ? 1 : 0.3, 
                    opacity: isActive ? 1 : 0.4 
                  }}
                  transition={{ duration: 0.5 }}
                />
              );
            })
          )}
        </svg>
      </div>

      {/* Pillars Grid */}
      <div className="relative grid grid-cols-2 gap-8 aspect-square max-w-2xl mx-auto">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const isHovered = hoveredPillar === pillar.id;
          const isActive = activePillar === pillar.id;
          
          return (
            <motion.div
              key={pillar.id}
              className={`relative ${pillar.bgColor} ${pillar.borderColor} border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                isHovered ? 'scale-105 shadow-xl' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredPillar(pillar.id)}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${pillar.color} text-white mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-2">
                {pillar.title}
              </h3>
              
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Expanded details */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {pillar.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Connection indicators */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300"
                   style={{ opacity: isHovered ? 1 : 0 }} />
            </motion.div>
          );
        })}
      </div>

      {/* Center synergy indicator */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-white text-2xl"
        >
          ⚡
        </motion.div>
      </motion.div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-8"
      >
        <p className="text-sm text-gray-500">
          Hover to see connections • Click to learn more
        </p>
      </motion.div>
    </div>
  );
}

