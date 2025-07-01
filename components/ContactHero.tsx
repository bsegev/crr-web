"use client"

import { motion } from "framer-motion"
import { ScrollIndicator } from "./ui/scroll-indicator"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function ContactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/contact-hero.jpg')] bg-cover bg-center"
          style={{ filter: "brightness(0.4) contrast(1.1)" }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-3xl ml-4 sm:ml-8 md:ml-12 lg:ml-24 px-4 sm:px-0">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
                Contact Us
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                We're here to help,
                <br />
                <span className="italic font-serif text-[#B7C9B7]">24/7</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-2xl leading-relaxed mt-6">
                Whether you need immediate crisis support or want to learn more about our centers, our care coordinators
                are standing by to provide compassionate, expert guidance.
              </p>
            </motion.div>
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