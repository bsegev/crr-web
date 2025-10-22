"use client"
import React from "react"
import { motion } from "motion/react"
import { Calendar, Leaf, Heart, Target } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Comprehensive Programs",
      description: "Personalized programs with 30, 60, or 90-day options, integrating evidence-based therapies and holistic methods, including medically supervised detoxification."
    },
    {
      icon: Leaf,
      title: "Holistic Therapies",
      description: "Enhance your recovery with mindfulness meditation, yoga, Tai Chi, Qigong, art therapy, and nature excursions that promote overall well-being."
    },
    {
      icon: Heart,
      title: "Family Support",
      description: "Involve your loved ones in your journey through our family support services, fostering understanding and healing."
    },
    {
      icon: Target,
      title: "Aftercare Planning",
      description: "Benefit from comprehensive aftercare planning to support your transition and maintain your progress beyond our facility."
    }
  ]

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase">
              Comprehensive Care
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
              Our{" "}
              <span className="italic font-serif text-orange">Services</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl font-secondary font-light text-gray-700 leading-relaxed mt-6"
          >
            From medical detox to aftercare planning, we support you at every stage of your recovery journey.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange" />
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
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium text-navy-extra-dark">
                    {service.title}
                  </h3>
                  <p className="text-base font-secondary text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative line */}
              <div className="absolute -inset-x-2 sm:-inset-x-4 -inset-y-2 sm:-inset-y-4 border border-transparent group-hover:border-orange/10 rounded-xl transition-colors duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a 
            href="/programs/our-approach" 
            className="text-orange hover:text-orange-dark transition-colors text-sm uppercase tracking-wider font-medium"
          >
            Explore Our Treatment Approach →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

