"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Target, Award, Users, Lightbulb, ChevronDown, Zap } from "lucide-react"
import { useState } from "react"

export default function MissionVisionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mission-vision/mission-vision-hero.webp"
            alt="Mission and Vision"
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
              Empowering Recovery Through
              <br />
              <span className="italic font-serif text-orange">Compassionate, Holistic Care</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Transforming Lives by Supporting Mind, Body, and Spirit on the Journey to Wellness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src="/mission-vision/mission.png"
                    alt="Our Mission"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Why We Exist
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Our <span className="italic font-serif text-orange">Mission</span>
              </h2>
              
              <p className="text-lg font-secondary font-light text-gray-700 leading-relaxed">
                To initiate and sustain recovery through holistic practices, innovation, and evidence-based care. We don't just follow the research – we bring it to life in real people's lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Where We're Going
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Our <span className="italic font-serif text-orange">Vision</span>
              </h2>
              
              <p className="text-lg font-secondary font-light text-gray-700 leading-relaxed">
                To be Central America's benchmark for personalized recovery – known for outcomes, integrity, and transformative care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 md:order-2"
            >
              <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src="/mission-vision/vision-2.png"
                    alt="Our Vision"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              What Guides Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Our Core <span className="italic font-serif text-orange">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Compassion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Compassion</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We approach every participant with empathy and understanding.
              </p>
            </motion.div>

            {/* Integrity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Award className="h-16 w-16 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Integrity</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We uphold the highest ethical standards in all we do.
              </p>
            </motion.div>

            {/* Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Target className="h-16 w-16 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Excellence</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We are committed to delivering superior care and services.
              </p>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Users className="h-16 w-16 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Community</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We foster a supportive environment that encourages connection.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Lightbulb className="h-16 w-16 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Innovation</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We embrace new methods and ideas to enhance our treatment programs.
              </p>
            </motion.div>

            {/* Empowerment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Zap className="h-16 w-16 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Empowerment</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We equip individuals with tools to take control of their recovery journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We're Different - Comparison Table */}
      <section className="py-24 md:py-32 px-8 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="mb-20 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              What Sets Us Apart
            </p>
            <h2 className="text-4xl md:text-6xl font-primary font-light text-navy-extra-dark mb-6 tracking-[-0.02em] leading-[1.1]">
              Bringing quality
              <br />
              <span className="italic font-serif text-orange">forward</span>
            </h2>
            <div className="w-16 h-px bg-orange/20 mb-8"></div>
            <p className="text-xl md:text-2xl font-light text-gray-700 max-w-3xl leading-relaxed">
              Costa Rica Recovery combines clinical excellence with the healing power of nature, offering a transformative alternative to traditional treatment centers.
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              {[
                {
                  category: "Location & Environment",
                  crr: "Costa Rica's natural healing environment integrated into treatment",
                  traditional: "Clinical indoor settings with limited outdoor access"
                },
                {
                  category: "Treatment Philosophy",
                  crr: "Holistic approach combining evidence-based therapies with nature-based healing",
                  traditional: "Primarily clinical focus with limited holistic integration"
                },
                {
                  category: "Cost & Accessibility",
                  crr: "Private pay model ensures complete anonymity—no insurance records, transparent pricing",
                  traditional: "Insurance-based billing creates permanent medical records and complex costs"
                },
                {
                  category: "Setting & Scale",
                  crr: "Intimate boutique facility with personalized attention",
                  traditional: "Large institutional centers with high client-to-staff ratios"
                },
                {
                  category: "Care Approach",
                  crr: "Trauma-informed, participant-centered model honoring individual autonomy",
                  traditional: "Traditional clinical hierarchy with prescriptive treatment"
                },
                {
                  category: "Therapeutic Activities",
                  crr: "Adventure therapy, nature excursions, and Costa Rican cultural immersion",
                  traditional: "Indoor group sessions and limited recreational options"
                }
              ].map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="py-8 border-b border-gray-200 last:border-b-0"
                >
                  {/* Category - Full width on mobile */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-light text-gray-500 tracking-wide">
                      {comparison.category}
                    </h3>
                  </div>
                  
                  {/* Two-column layout on mobile and desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {/* CRR */}
                    <div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-orange tracking-widest uppercase">
                          Costa Rica Recovery
                        </div>
                        <p className="text-base md:text-lg lg:text-xl font-light text-navy-extra-dark leading-relaxed">
                          {comparison.crr}
                        </p>
                      </div>
                    </div>
                    
                    {/* Traditional */}
                    <div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                          Traditional US Centers
                        </div>
                        <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 leading-relaxed">
                          {comparison.traditional}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <MissionVisionFAQ />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-navy-extra-dark to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light mb-6">
              Start Your Journey Today
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Our mission is to help transform lives. If our approach resonates with you, we'd love to connect and help you start this new chapter.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-12 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us to Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// FAQ Component for Mission & Vision
function MissionVisionFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What is the mission of Costa Rica Recovery?",
      answer: "Our mission is to transform lives through compassionate, holistic recovery that focuses on personalized healing paths."
    },
    {
      question: "Which organizations accredit Costa Rica Recovery?",
      answer: "We are accredited by the Costa Rican Ministry of Health, Costa Rica College of Nurses, Costa Rica College of Professional Psychologists, IAFA, and IC&RC."
    },
    {
      question: "How does CRR approach wellness differently?",
      answer: "We take a holistic approach that treats the whole person—mind, body, and spirit. By combining evidence-based treatment with the healing power of Costa Rica's natural environment, we create personalized recovery plans that address each individual's unique needs."
    }
  ]

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
            Your Questions,{" "}
            <span className="italic font-serif text-orange">Answered</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange/30 transition-colors duration-300 bg-white"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-secondary font-medium text-navy-extra-dark pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-orange" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
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
      </div>
    </section>
  )
}
