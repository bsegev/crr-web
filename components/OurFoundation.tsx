"use client"
import React from "react"
import { motion } from "framer-motion"
import { Heart, Globe, Users, Shield } from "lucide-react"

const OurFoundation = () => {
  const foundingPrinciples = [
    {
      icon: Heart,
      title: "Beauty in Healing",
      description: "We believe healing accelerates in surroundings that celebrate nature's grace and honor human dignity."
    },
    {
      icon: Globe,
      title: "Wisdom Through Excellence",
      description: "Marrying timeless recovery principles with cutting-edge therapeutic expertise across four distinctive centers."
    },
    {
      icon: Shield,
      title: "Absolute Discretion",
      description: "Creating safe harbors where vulnerability is met with unwavering support, privacy, and protection."
    },
    {
      icon: Users,
      title: "Purpose-Driven Community",
      description: "Recovery is sustained when guests reconnect to personal meaning and our wider healing community."
    }
  ]

  return (
    <section className="relative bg-stone-extra-light py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
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
            <p className="text-sm font-secondary font-light text-forest-extra-dark tracking-widest uppercase">
              Our Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-forest-extra-dark leading-[1.1] tracking-[-0.02em]">
              Why IWC Was{" "}
              <span className="italic font-serif text-forest-dark">Founded</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-stone-extra-dark/80 leading-relaxed mt-6 sm:mt-8"
          >
            Born from personal experience and professional insight, IWC emerged as a response 
            to a critical gap in healing care. We envisioned a world where transformative treatment 
            is accessible, delivered with dignity, and honors the profound nature of recovery.
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-forest-extra-dark/10 flex items-center justify-center">
                    <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest-extra-dark" />
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
                    className="absolute inset-0 rounded-full border border-forest-dark/20"
                  />
                </div>
                <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-secondary font-medium text-forest-extra-dark">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base font-secondary text-stone-extra-dark/70 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative line */}
              <div className="absolute -inset-x-2 sm:-inset-x-4 -inset-y-2 sm:-inset-y-4 border border-forest-extra-dark/0 group-hover:border-forest-dark/8 rounded-xl transition-colors duration-700" />
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
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-primary font-light italic text-forest-dark leading-relaxed">
            "We built the treatment centers we wished existed when our own families needed help—
            places where healing happens with dignity, in community, surrounded by nature's grace."
          </blockquote>
          <p className="text-sm font-secondary font-light text-forest-dark/70 tracking-widest uppercase mt-4 sm:mt-6">
            IWC Founding Family
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OurFoundation 