"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollIndicator } from "./ui/scroll-indicator"

const Hero = () => {
  const images = [
    "/hero-bg/pexels-freestockpro-1004542.jpg",
    "/hero-bg/pexels-jibarofoto-1624889.jpg",
    "/hero-bg/pexels-tomfisk-2606532.jpg",
    "/hero-bg/pexels-davidriano-975771.jpg",
    "/hero-bg/pexels-luis-rod-251519-762565.jpg",
    "/hero-bg/pexels-enrique-hidalgo-1230661389-34293263.jpg",
    "/hero-bg/jake-johnson-_pbFvzlIPr0-unsplash.jpg",
    "/hero-bg/paige-laine-elmer-R8Qvisl-Dzw-unsplash.jpg",
    "/hero-bg/cesar-badilla-miranda-IvyIreqmA8s-unsplash.jpg",
    "/hero-bg/polina-kocheva-Xf802oUIHLc-unsplash.jpg",
    "/hero-bg/vlad-d-DOKH2miZEL0-unsplash.jpg"
  ]
  
  const [currentImage, setCurrentImage] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // Change every 4 seconds
    
    return () => clearInterval(interval)
  }, [images.length])

  const textHighlight = "text-orange"

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy-extra-dark">
      {/* Crossfade montage */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Costa Rica Recovery - Holistic addiction treatment"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: "brightness(0.5) contrast(1.1)" }}
          />
        ))}
      </div>
      
      {/* Left-aligned, refined editorial text */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[35vw] ml-4 sm:ml-8 md:ml-12 lg:ml-24 px-4 sm:px-0">
          {/* Costa Rica Recovery eyebrow */}
          <p className="text-sm font-light text-white/60 tracking-widest uppercase mb-4">
            Holistic Addiction Treatment in Costa Rica
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light text-white mb-6 sm:mb-8 md:mb-10 tracking-[-0.01em] leading-[1.1]">
            Recovery
            <br />
            <span className={`${textHighlight} italic font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>Reimagined</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-secondary font-light text-white/90 mb-6 leading-relaxed">
            Personalized addiction recovery combining evidence-based therapies and holistic practices in the heart of Costa Rica.
          </p>
          
          {/* Enhanced messaging */}
          <p className="text-sm font-light text-white/70 mb-4 leading-relaxed">
            Medical detox • Clinical excellence • Cultural immersion • Confidential care
          </p>
          
          {/* Phone number */}
          <p className="text-base sm:text-lg font-secondary text-orange mb-8 sm:mb-12 md:mb-14">
            Call or Text: <span className="font-medium">(866) 804-1793</span>
          </p>
          
          <div className="pt-6 sm:pt-8">
            <Link href="/contact">
              <motion.button 
                className="group relative text-white text-sm tracking-widest uppercase font-secondary font-bold touch-manipulation"
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-10 sm:px-12 py-3 sm:py-4 block">Start Your Journey</span>
                <div className="absolute inset-0 border border-orange/30 group-hover:border-orange/60 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-orange/5 group-hover:bg-orange/10 transition-all duration-300"></div>
              </motion.button>
            </Link>
          </div>
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
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${currentImage === index ? "bg-orange" : "bg-white bg-opacity-50"}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero 