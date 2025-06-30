"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
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
    <section className="relative min-h-[90vh] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/contact-hero.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#B7C9B7]/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#B7C9B7]/[0.05] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 py-32">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
              Contact Us
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
              We're here to help,
              <br />
              <span className="italic font-serif text-[#B7C9B7]">24/7</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need immediate crisis support or want to learn more about our centers, our care coordinators
              are standing by to provide compassionate, expert guidance.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollIndicator color="light" />
      </div>
    </section>
  )
} 