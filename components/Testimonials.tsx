"use client"
import React from "react"
import { motion } from "framer-motion"

const testimonial = {
  quote: "IWC didn't just find us a treatment center—they helped heal our entire family. The discretion, dignity, and genuine care in matching us to the right place made all the difference in our journey.",
  author: "A Grateful Family",
  role: "Protected Identity",
  location: "Matched with Absolute Confidentiality"
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
          {/* El Tirol Section Tag */}
          <p className="text-sm font-secondary font-light text-forest-extra-dark tracking-widest uppercase mb-6 sm:mb-8">
            Centered in Truth
          </p>
          <div className="w-16 h-px bg-forest-dark/20 mx-auto mb-8 sm:mb-12"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-light text-forest-extra-dark leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8">
            Voices of
            <br />
            <span className="italic font-serif text-forest-dark">the transformed</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-stone-extra-dark/70 max-w-3xl mx-auto leading-relaxed">
            Real stories from families who have found their path through our network, 
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
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-primary font-light text-forest-extra-dark leading-[1.3] tracking-[-0.01em] mb-8 sm:mb-10 md:mb-12">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="w-16 h-px bg-stone-light/20 mx-auto mb-6 sm:mb-8"></div>
          <div className="text-lg font-secondary font-light text-forest-extra-dark mb-2">
            {testimonial.author}
          </div>
          <div className="text-sm font-secondary font-light text-stone-dark tracking-wide uppercase">
            {testimonial.role} • {testimonial.location}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 