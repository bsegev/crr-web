"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const FindYourCenter = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-stone-extra-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden rounded-2xl"
        >
          {/* Background Image */}
          <img
            src="/bridge.jpg"
            alt="Find your healing center"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            style={{ filter: "brightness(0.5) contrast(1.1)" }}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 sm:space-y-8 max-w-4xl px-4 sm:px-6 md:px-8">
              {/* El Tirol Section Tag */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm font-secondary font-light text-stone-light tracking-widest uppercase">
                  Find Your Strength
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary font-light text-white leading-[1.1] tracking-[-0.02em]">
                  Your Path to{" "}
                  <span className="italic font-serif text-stone-light">Healing</span>
                </h2>
              </div>
              
              {/* Enhanced description with gentle structure */}
              <p className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                Four distinctive centers. One shared commitment to your transformation. 
                Discover which environment speaks to your healing journey.
              </p>
              
              {/* Refined CTA */}
              <div className="pt-6 sm:pt-8">
                <Link href="/find-your-center">
                  <motion.button 
                    className="group relative text-white text-sm tracking-widest uppercase font-secondary font-bold touch-manipulation"
                    style={{ letterSpacing: '0.02em' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative z-10 px-10 sm:px-12 py-3 sm:py-4 block">Begin Your Journey</span>
                    <div className="absolute inset-0 border border-stone-light/30 group-hover:border-stone-light/60 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-stone-light/5 group-hover:bg-stone-light/10 transition-all duration-300"></div>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FindYourCenter 