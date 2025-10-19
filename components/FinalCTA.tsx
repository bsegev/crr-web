"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const FinalCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-navy-extra-dark overflow-hidden">
      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 sm:space-y-10 md:space-y-12"
        >
          {/* Editorial eyebrow */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm font-light text-orange tracking-widest uppercase">
              Take the First Step
            </p>
            <div className="w-16 h-px bg-orange/20 mx-auto"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary font-light text-white leading-[1.1] tracking-[-0.02em]">
            Recovery Starts
            <br />
            <span className="italic font-serif text-orange">Today</span>
          </h2>

          {/* Supporting copy */}
          <p className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            Recovery starts with the right support. Let's take the first step together toward a healthier, more fulfilling future.
          </p>

          {/* Phone Number - Hero Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="py-6 sm:py-8"
          >
            <p className="text-white/70 text-sm sm:text-base mb-3">Call or Text Us Now</p>
            <a 
              href="tel:+18668041793"
              className="text-3xl sm:text-4xl md:text-5xl font-secondary font-light text-orange hover:text-orange-light transition-colors inline-block"
            >
              (866) 804-1793
            </a>
            <p className="text-white/60 text-xs sm:text-sm mt-3">
              Available 24/7 for Confidential Consultations
            </p>
          </motion.div>

          {/* Refined details */}
          <div className="text-sm font-secondary font-light text-white/60 tracking-wide">
            Complete confidentiality • Compassionate care • Clinical excellence
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
            <a href="tel:+18668041793" className="w-full sm:w-auto">
              <motion.button 
                className="group relative text-navy-extra-dark text-sm tracking-widest uppercase font-secondary font-bold w-full touch-manipulation"
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-8 sm:px-10 py-4 block bg-orange text-white">Call Now</span>
                <div className="absolute inset-0 bg-orange group-hover:bg-orange-dark transition-all duration-300"></div>
              </motion.button>
            </a>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                className="group relative text-white text-sm tracking-widest uppercase font-secondary font-bold w-full touch-manipulation"
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-8 sm:px-10 py-4 block">Get in Touch Online</span>
                <div className="absolute inset-0 border border-orange/30 group-hover:border-orange/60 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-orange/5 group-hover:bg-orange/10 transition-all duration-300"></div>
              </motion.button>
            </Link>
          </div>

          {/* Bottom editorial element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-12 sm:pt-16"
          >
            <div className="w-32 h-px bg-white/10 mx-auto mb-6"></div>
            <p className="text-xs font-secondary font-light text-white/40 tracking-widest uppercase">
              Part of International Wellness Centers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA 