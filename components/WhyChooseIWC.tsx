"use client"
import React from "react"
import { motion } from "framer-motion"

const comparisons = [
  {
    category: "Accessibility",
    iwc: "Multiple price points and locations",
    traditional: "Limited regional options"
  },
  {
    category: "Personalization",
    iwc: "Spectrum of care approaches",
    traditional: "Single methodology"
  },
  {
    category: "Transparency",
    iwc: "Direct relationships and clear pricing",
    traditional: "Complex referral networks"
  },
  {
    category: "Choice",
    iwc: "Clinical to holistic, accessible to luxury",
    traditional: "One-size-fits-all approach"
  },
  {
    category: "Quality Assurance",
    iwc: "Unified standards across owned facilities",
    traditional: "Variable quality across providers"
  }
]

const WhyChooseIWC = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Editorial header */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-black mb-6 tracking-[-0.02em] leading-[1.1]">
            Bringing quality
            <br />
            <span className="italic font-serif text-[#06402B]">forward</span>
          </h2>
          <div className="w-16 h-px bg-black/20 mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-black/70 max-w-3xl leading-relaxed">
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
                className="grid md:grid-cols-3 gap-8 md:gap-12 py-8 border-b border-black/10 last:border-b-0"
              >
                {/* Category */}
                <div className="md:col-span-1">
                  <h3 className="text-lg md:text-xl font-light text-black/50 tracking-wide">
                    {comparison.category}
                  </h3>
                </div>
                
                {/* IWC */}
                <div className="md:col-span-1">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#06402B] tracking-widest uppercase">
                      Our Modern Approach
                    </div>
                    <p className="text-lg md:text-xl font-light text-black leading-relaxed">
                      {comparison.iwc}
                    </p>
                  </div>
                </div>
                
                {/* Traditional */}
                <div className="md:col-span-1">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-black/40 tracking-widest uppercase">
                      Traditional Options
                    </div>
                    <p className="text-lg md:text-xl font-light text-black/60 leading-relaxed">
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