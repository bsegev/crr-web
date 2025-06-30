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

export default function FindYourCenterHero() {
  return (
    <section className="relative min-h-[70vh] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/bridge.jpg')] bg-cover bg-center"
          style={{ filter: "brightness(0.4) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#B7C9B7]/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B7C9B7]/[0.05] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-12 py-32">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <Badge variant="outline" className="border-[#B7C9B7] text-[#B7C9B7] bg-[#B7C9B7]/5">
              Center Matching
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
              Find your perfect
              <br />
              <span className="italic font-serif text-[#B7C9B7]">healing center</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
              Answer a few questions to get personalized recommendations from our network of healing centers.
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