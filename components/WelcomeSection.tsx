"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const WelcomeSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Glow filters */}
            <filter id="glow-soft" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <pattern id="organic-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Scattered organic ovals - each pulses independently */}
              
              {/* Top left cluster - varied ovals */}
              <motion.ellipse
                cx="25"
                cy="30"
                rx="16"
                ry="10"
                transform="rotate(-15 25 30)"
                fill="#f19471"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              />
              <motion.ellipse
                cx="60"
                cy="15"
                rx="11"
                ry="7"
                transform="rotate(30 60 15)"
                fill="#1a2940"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.5, 0.15] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              />
              
              {/* Top right cluster - organic ellipses */}
              <motion.ellipse
                cx="145"
                cy="25"
                rx="13"
                ry="9"
                transform="rotate(-25 145 25)"
                fill="#f19471"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.18 }}
                animate={{ opacity: [0.18, 0.55, 0.18] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              />
              <motion.ellipse
                cx="175"
                cy="50"
                rx="9"
                ry="14"
                transform="rotate(25 175 50)"
                fill="#1a2940"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 6 }}
              />
              
              {/* Middle scattered - mix of ovals */}
              <motion.ellipse
                cx="90"
                cy="80"
                rx="12"
                ry="18"
                transform="rotate(-35 90 80)"
                fill="#1a2940"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.16 }}
                animate={{ opacity: [0.16, 0.52, 0.16] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
              <motion.ellipse
                cx="130"
                cy="110"
                rx="11"
                ry="7"
                transform="rotate(40 130 110)"
                fill="#f19471"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.22 }}
                animate={{ opacity: [0.22, 0.58, 0.22] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
              />
              
              {/* Bottom left cluster - varied organic ovals */}
              <motion.ellipse
                cx="40"
                cy="140"
                rx="12"
                ry="8"
                transform="rotate(15 40 140)"
                fill="#f19471"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.19 }}
                animate={{ opacity: [0.19, 0.54, 0.19] }}
                transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: 5 }}
              />
              <motion.ellipse
                cx="15"
                cy="170"
                rx="14"
                ry="9"
                transform="rotate(55 15 170)"
                fill="#1a2940"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.17 }}
                animate={{ opacity: [0.17, 0.53, 0.17] }}
                transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut", delay: 7 }}
              />
              
              {/* Bottom right cluster - organic ovals */}
              <motion.ellipse
                cx="160"
                cy="155"
                rx="10"
                ry="15"
                transform="rotate(-20 160 155)"
                fill="#1a2940"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.21 }}
                animate={{ opacity: [0.21, 0.57, 0.21] }}
                transition={{ duration: 13.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <motion.ellipse
                cx="185"
                cy="180"
                rx="10"
                ry="7"
                transform="rotate(-40 185 180)"
                fill="#f19471"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.18 }}
                animate={{ opacity: [0.18, 0.51, 0.18] }}
                transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
              />
              
              {/* Sparse middle elements - small organic ovals */}
              <motion.ellipse
                cx="110"
                cy="60"
                rx="7"
                ry="5"
                transform="rotate(10 110 60)"
                fill="#f19471"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.48, 0.15] }}
                transition={{ duration: 12.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              />
              <motion.ellipse
                cx="70"
                cy="125"
                rx="8"
                ry="11"
                transform="rotate(-45 70 125)"
                fill="#1a2940"
                filter="url(#glow-soft)"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.56, 0.2] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 6.5 }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Eyebrow */}
          <p className="text-sm font-light text-orange tracking-widest uppercase">
            Welcome to Costa Rica Recovery
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
            Where Your Journey to{" "}
            <span className="italic font-serif text-orange">Lasting Recovery</span>{" "}
            Begins
          </h2>

          {/* Body Content */}
          <div className="space-y-6 text-lg font-secondary font-light text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              Nestled in the heart of San José, we offer a unique blend of high-quality, 
              evidence-based treatments and holistic practices designed to heal the whole 
              person—mind, body, and spirit.
            </p>
            
            <p>
              Our compassionate team is dedicated to providing personalized care in a 
              supportive environment, empowering you to rediscover hope and build a 
              fulfilling life.
            </p>
          </div>

          {/* Optional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <Link 
              href="/about" 
              className="text-orange hover:text-orange-dark transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Learn More About Our Methods →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WelcomeSection

