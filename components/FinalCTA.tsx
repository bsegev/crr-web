"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Editorial eyebrow */}
          <div className="space-y-8">
            <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
              Ready to Begin
            </p>
            <div className="w-16 h-px bg-[#B7C9B7]/20 mx-auto"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
            Experience the
            <br />
            <span className="italic font-serif text-[#B7C9B7]">IWC difference</span>
          </h2>

          {/* Supporting copy */}
          <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
            From clinical excellence in California to authentic holistic healing in Costa Rica—discover which of our four centers is right for your journey.
          </p>

          {/* Refined details */}
          <div className="text-sm font-light text-white/60 tracking-wide">
            Personal consultation • Completely confidential • No obligation
          </div>

          {/* Elegant CTA buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
            <Link href="/find-your-center">
              <motion.button 
                className="group relative text-black text-sm tracking-widest uppercase font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-12 py-4 block bg-white text-black">Find Your Center</span>
                <div className="absolute inset-0 bg-white group-hover:bg-[#B7C9B7]/90 transition-all duration-300"></div>
              </motion.button>
            </Link>
            
            <Link href="/our-centers">
              <motion.button 
                className="group relative text-white text-sm tracking-widest uppercase font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-12 py-4 block">Explore Centers</span>
                <div className="absolute inset-0 border border-[#B7C9B7]/30 group-hover:border-[#B7C9B7]/60 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-[#B7C9B7]/5 group-hover:bg-[#B7C9B7]/10 transition-all duration-300"></div>
              </motion.button>
            </Link>
          </div>

          {/* Bottom editorial element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-16"
          >
            <div className="w-32 h-px bg-[#B7C9B7]/10 mx-auto mb-6"></div>
            <p className="text-xs font-light text-[#B7C9B7]/40 tracking-widest uppercase">
              Four owned centers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA 