"use client"
import React, { useState, useEffect } from "react"
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

  const textHighlight = "text-[#B7C9B7]"

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 sm:mb-8 md:mb-10 tracking-[-0.01em] leading-[1.1]">
            Healing
            <br />
            <span className={`${textHighlight} italic font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>without</span>
            <br />
            borders
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-lg mb-8 sm:mb-12 md:mb-14 leading-relaxed">
            The world's most transformative wellness experiences, curated for your unique journey.
          </p>
          
          <button className="group relative text-white text-sm tracking-widest uppercase font-medium touch-manipulation">
            <span className="relative z-10 px-8 sm:px-10 py-3 sm:py-4 block">Begin Journey</span>
            <div className="absolute inset-0 border border-[#B7C9B7] border-opacity-30 group-hover:border-opacity-60 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-[#B7C9B7]/5 group-hover:bg-[#B7C9B7]/10 transition-all duration-300"></div>
          </button>
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
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${currentImage === index ? "bg-[#B7C9B7]" : "bg-white bg-opacity-50"}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero 