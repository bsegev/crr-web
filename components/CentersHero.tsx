"use client"

import { motion } from "framer-motion"
import { ScrollIndicator } from "./ui/scroll-indicator"

export default function CentersHero() {
  return (
    <section className="relative min-h-[80vh] bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="/nature-mountain.jpg"
        alt="Our Centers"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.4) contrast(1.1)" }}
      />
      
      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-32">
          <div className="max-w-2xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
                Our Four Centers
              </p>
              <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                Where healing
                <br />
                <span className="italic font-serif text-[#B7C9B7]">happens</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light text-white/90 leading-relaxed"
            >
              From clinical excellence in California to authentic holistic healing in Costa Rica—each center represents our commitment to ethical, transparent care.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollIndicator color="light" />
      </div>
    </section>
  )
} 