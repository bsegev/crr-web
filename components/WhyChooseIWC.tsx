"use client"
import React from "react"
import { motion } from "motion/react"

const comparisons = [
  {
    category: "Ownership Model",
    iwc: "Direct ownership of four specialized centers",
    traditional: "Referral networks and partnerships"
  },
  {
    category: "Geographic Diversity",
    iwc: "Intentional US and Costa Rica presence",
    traditional: "Regional or domestic-only options"
  },
  {
    category: "Spectrum of Care",
    iwc: "Clinical to holistic, accessible to luxury",
    traditional: "Single approach or price point"
  },
  {
    category: "Transparency",
    iwc: "No middleman fees, direct relationships",
    traditional: "Third-party commissions and markups"
  },
  {
    category: "Quality Control",
    iwc: "Unified standards across owned facilities",
    traditional: "Variable quality across network providers"
  }
]

const WhyChooseIWC = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Editorial header */}
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
            We own four specialized treatment centers across the US and Costa Rica—advancing the standard of care and making quality accessible to more families.
          </p>
        </motion.div>

        {/* Premium comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-12">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8 md:gap-12 py-8 border-b border-gray-200 last:border-b-0"
              >
                {/* Category */}
                <div className="md:col-span-1">
                  <h3 className="text-lg md:text-xl font-light text-gray-500 tracking-wide">
                    {comparison.category}
                  </h3>
                </div>
                
                {/* IWC */}
                <div className="md:col-span-1">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-orange tracking-widest uppercase">
                      Our Modern Approach
                    </div>
                    <p className="text-lg md:text-xl font-light text-navy-extra-dark leading-relaxed">
                      {comparison.iwc}
                    </p>
                  </div>
                </div>
                
                {/* Traditional */}
                <div className="md:col-span-1">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                      Traditional Options
                    </div>
                    <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                      {comparison.traditional}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseIWC 