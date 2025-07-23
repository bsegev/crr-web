"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollIndicator } from "./ui/scroll-indicator"

const Hero = () => {
  const images = [
    "/nature-stones.jpg",
    "/nature-heal.jpg", 
    "/nature-group.jpg",
    "/nature-mountain.jpg"
  ]
  
  const [currentImage, setCurrentImage] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // Change every 4 seconds
    
    return () => clearInterval(interval)
  }, [images.length])

  const textHighlight = "text-stone-light"

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Crossfade montage */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Global healing journey"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: "brightness(0.4) contrast(1.1)" }}
          />
        ))}
      </div>
      
      {/* Left-aligned, refined editorial text */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-3xl ml-4 sm:ml-8 md:ml-12 lg:ml-24 px-4 sm:px-0">
          {/* El Tirol inspired eyebrow */}
          <p className="text-sm font-light text-white/60 tracking-widest uppercase mb-4">
            Intention. Commitment. Sovereignty.
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light text-white mb-6 sm:mb-8 md:mb-10 tracking-[-0.01em] leading-[1.1]">
            This is
            <br />
            <span className={`${textHighlight} italic font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>nature's grace</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-white/90 max-w-lg mb-6 leading-relaxed">
            Transformative healing experiences delivered with intention, wisdom and discretion.
          </p>
          
          {/* Enhanced discretion messaging */}
          <p className="text-sm font-light text-white/70 max-w-md mb-8 sm:mb-12 md:mb-14 leading-relaxed">
            Complete confidentiality • Utmost discretion • Safe harbor for healing
          </p>
          
          <Link href="/contact">
            <motion.button 
              className="group relative text-white text-sm tracking-widest uppercase font-secondary font-bold touch-manipulation"
              style={{ letterSpacing: '0.02em' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10 px-10 sm:px-12 py-3 sm:py-4 block">Begin Your Transformation</span>
              <div className="absolute inset-0 border border-stone-light/30 group-hover:border-stone-light/60 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-stone-light/5 group-hover:bg-stone-light/10 transition-all duration-300"></div>
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Elegant scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <ScrollIndicator color="light" />
      </div>
      
      {/* Subtle image indicators */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${currentImage === index ? "bg-stone-light" : "bg-white bg-opacity-50"}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero 