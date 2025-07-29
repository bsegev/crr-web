"use client"

import { motion } from "framer-motion"
import { ScrollIndicator } from "./ui/scroll-indicator"

export default function CentersHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
      <img
        src="/nature-mountain.jpg"
        alt="Our Centers"
          className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.4) contrast(1.1)" }}
      />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-3xl ml-4 sm:ml-8 md:ml-12 lg:ml-24 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-sm font-light text-info tracking-widest uppercase">
                Our Four Centers
              </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                Where healing
                <br />
                <span className="italic font-serif text-info">happens</span>
              </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-2xl leading-relaxed mt-6">
              From clinical excellence in California to authentic holistic healing in Costa Rica—each center represents our commitment to ethical, transparent care.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <ScrollIndicator color="light" />
      </div>
    </section>
  )
} 