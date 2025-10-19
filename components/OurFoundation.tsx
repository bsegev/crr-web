"use client"
import React from "react"
import { motion } from "motion/react"
import { Heart, Globe, Users, Shield, MapPin, DollarSign, Lock } from "lucide-react"

const OurFoundation = () => {
  const foundingPrinciples = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "We create individualized treatment plans tailored to your unique needs and goals."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our dedicated caretakers and supporters are committed to your well-being, providing compassionate, 24/7 support."
    },
    {
      icon: Shield,
      title: "Integrated Approach",
      description: "Our blend of evidence-based therapies and holistic practices addresses all aspects of your recovery."
    },
    {
      icon: MapPin,
      title: "Urban Convenience",
      description: "Located in San José, enjoy the amenities of city life with the healing benefits of nature through our organized excursions."
    },
    {
      icon: DollarSign,
      title: "Affordable Quality",
      description: "Experience high-quality care at a more accessible investment compared to private centers in the U.S. and Canada."
    },
    {
      icon: Lock,
      title: "Commitment to Privacy",
      description: "Your privacy is our priority. We provide a confidential and respectful environment."
    }
  ]

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-10">
        {/* Top Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
              Why Choose{" "}
              <span className="italic font-serif text-orange">Costa Rica Recovery</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-gray-700 leading-relaxed mt-6 sm:mt-8"
          >
            We believe in recovery that's both effective and accessible. Located in the heart of San José, 
            Costa Rica, we offer a unique blend of clinical excellence and holistic healing—all while 
            immersing you in one of the world's most naturally therapeutic environments.
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange/10 flex items-center justify-center">
                    <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange" />
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
                    className="absolute inset-0 rounded-full border border-orange/20"
                  />
                </div>
                <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-secondary font-medium text-navy-extra-dark">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base font-secondary text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative line */}
              <div className="absolute -inset-x-2 sm:-inset-x-4 -inset-y-2 sm:-inset-y-4 border border-transparent group-hover:border-orange/10 rounded-xl transition-colors duration-700" />
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
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-primary font-light italic text-orange leading-relaxed">
            "Costa Rica's natural beauty isn't just a backdrop—it's a fundamental part of the healing process. 
            Combined with our evidence-based treatment, it creates transformation that lasts."
          </blockquote>
          <p className="text-sm font-secondary font-light text-orange/70 tracking-widest uppercase mt-4 sm:mt-6">
            Costa Rica Recovery Team
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OurFoundation 