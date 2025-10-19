"use client"
import React from "react"
import { motion } from "framer-motion"

const testimonial = {
  quote: "Costa Rica Recovery didn't just treat my addiction—they helped me rebuild my life. The combination of professional care and the healing environment of Costa Rica made all the difference. I found myself again.",
  author: "Former Client",
  role: "Protected Identity",
  location: "Grateful for a Second Chance"
}

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Editorial header */}
        <motion.div 
          className="mb-16 sm:mb-20 md:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Tag */}
          <p className="text-sm font-light text-orange tracking-widest uppercase mb-6 sm:mb-8">
            Real Stories, Real Healing
          </p>
          <div className="w-16 h-px bg-orange/20 mx-auto mb-8 sm:mb-12"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8">
            Voices of
            <br />
            <span className="italic font-serif text-orange">Transformation</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from individuals and families who found hope and healing at Costa Rica Recovery, 
            shared with their permission and protected with absolute discretion.
          </p>
        </motion.div>

        {/* Single powerful testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-primary font-light text-navy-extra-dark leading-[1.3] tracking-[-0.01em] mb-8 sm:mb-10 md:mb-12">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="w-16 h-px bg-orange/20 mx-auto mb-6 sm:mb-8"></div>
          <div className="text-lg font-secondary font-light text-navy-extra-dark mb-2">
            {testimonial.author}
          </div>
          <div className="text-sm font-secondary font-light text-gray-600 tracking-wide uppercase">
            {testimonial.role} • {testimonial.location}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 