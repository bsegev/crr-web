"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const FinalCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-black overflow-hidden">
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
            <p className="text-sm font-secondary font-light text-stone-light tracking-widest uppercase">
              Find Your Strength
            </p>
            <div className="w-16 h-px bg-stone-light/20 mx-auto"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary font-light text-white leading-[1.1] tracking-[-0.02em]">
            Purpose.
            <br />
            <span className="italic font-serif text-stone-light">Wellness. Possibility.</span>
          </h2>

          {/* Supporting copy */}
          <p className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            From clinical excellence in California to authentic holistic healing in Costa Rica—discover which of our four centers offers the discretion and dignity your journey deserves.
          </p>

          {/* Refined details */}
          <div className="text-sm font-secondary font-light text-white/60 tracking-wide">
            Absolute discretion • Utmost dignity • Complete confidentiality
          </div>

          {/* Elegant CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
            <Link href="/find-your-center" className="w-full sm:w-auto">
              <motion.button 
                className="group relative text-forest-extra-dark text-sm tracking-widest uppercase font-secondary font-bold w-full touch-manipulation"
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-8 sm:px-10 py-4 block bg-stone-extra-light text-forest-extra-dark">Find Your Center</span>
                <div className="absolute inset-0 bg-stone-extra-light group-hover:bg-stone-light transition-all duration-300"></div>
              </motion.button>
            </Link>
            
            <Link href="/our-centers" className="w-full sm:w-auto">
              <motion.button 
                className="group relative text-white text-sm tracking-widest uppercase font-secondary font-bold w-full touch-manipulation"
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-8 sm:px-10 py-4 block">Explore Centers</span>
                <div className="absolute inset-0 border border-stone-light/30 group-hover:border-stone-light/60 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-stone-light/5 group-hover:bg-stone-light/10 transition-all duration-300"></div>
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
            <div className="w-32 h-px bg-stone-light/10 mx-auto mb-6"></div>
            <p className="text-xs font-secondary font-light text-stone-light/40 tracking-widest uppercase">
              Nourished by Nature
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA 