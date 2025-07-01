"use client"
import React from "react"
import { motion } from "framer-motion"
import { Heart, Globe, Users, Shield } from "lucide-react"

const OurFoundation = () => {
  const foundingPrinciples = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Founded on the belief that true healing begins with unconditional compassion and understanding."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Breaking down geographical barriers to ensure quality care is accessible to everyone, everywhere."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by and for the community, with lived experiences guiding our approach to healing."
    },
    {
      icon: Shield,
      title: "Safe Harbor",
      description: "Creating spaces where vulnerability is met with unwavering support and protection."
    }
  ]

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-sm font-light text-[#06402B] tracking-widest uppercase">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black leading-[1.1] tracking-[-0.02em]">
              Why IWC Was{" "}
              <span className="italic font-serif text-[#06402B]">Founded</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light text-black/80 leading-relaxed mt-6 sm:mt-8"
          >
            Born from personal experience and professional insight, IWC emerged as a response 
            to a critical gap in mental health care. We envisioned a world where healing is 
            accessible, comprehensive, and deeply personal.
          </motion.p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-24">
          {foundingPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#06402B]/10 flex items-center justify-center">
                    <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#06402B]" />
                  </div>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.2 }}
                    transition={{ 
                      duration: 1,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="absolute inset-0 rounded-full border border-[#06402B]/20"
                  />
                </div>
                <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-medium text-[#06402B]">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative line */}
              <div className="absolute -inset-x-2 sm:-inset-x-4 -inset-y-2 sm:-inset-y-4 border border-[#06402B]/0 group-hover:border-[#06402B]/5 rounded-xl transition-colors duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center mt-16 sm:mt-20 md:mt-24"
        >
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light italic font-serif text-[#06402B] leading-relaxed">
            "We believe that healing happens in community, and every person deserves 
            access to transformative care."
          </blockquote>
          <p className="text-sm font-light text-[#06402B]/70 tracking-widest uppercase mt-4 sm:mt-6">
            Dr. Sarah Chen • Founder & CEO
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OurFoundation 