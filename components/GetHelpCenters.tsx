"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const centers = [
  {
    id: 1,
    name: "Costa Rica Recovery",
    location: "San José, Costa Rica",
    description: "Our flagship center in Costa Rica's capital combines evidence-based treatment with holistic therapies in a serene urban oasis setting.",
    image: "/centers/crr-space.jpg",
    href: "/our-centers#costa-rica",
    contact: {
      phone: "+1 (888) 722-3422",
      email: "care@costarica.iwc.com"
    }
  },
  {
    id: 2,
    name: "El Tirol Center",
    location: "San José Outskirts, Costa Rica",
    description: "Discrete executive treatment in the lush hills outside San José, offering personalized care and dual diagnosis programs in a private estate setting.",
    image: "/centers/eltirol-space.jpg",
    href: "/our-centers#el-tirol",
    contact: {
      phone: "+506 2222 4422",
      email: "care@eltirol.iwc.com"
    }
  },
  {
    id: 3,
    name: "Cornerstone SoCal",
    location: "Orange County, California",
    description: "Premier Southern California facility providing intensive outpatient programs and specialized trauma therapy in the heart of Orange County.",
    image: "/centers/cornerstone-socal.png",
    href: "/our-centers#cornerstone",
    contact: {
      phone: "+1 (855) 334-2622",
      email: "care@cornerstone.iwc.com"
    }
  },
  {
    id: 4,
    name: "Nosara Retreat Center",
    location: "Nosara, Costa Rica",
    description: "Integrative healing in Costa Rica's renowned wellness destination, combining evidence-based treatment with holistic practices in a beachside sanctuary.",
    image: "/centers/nosara-shala.jpg",
    href: "/our-centers#nosara",
    contact: {
      phone: "+506 2682 2242",
      email: "care@nosara.iwc.com"
    }
  }
]

type CenterName = typeof centers[number]['name'];

const displayNames: Record<CenterName, string> = {
  "Costa Rica Recovery": "Costa Rica",
  "El Tirol Center": "El Tirol",
  "Cornerstone SoCal": "Cornerstone",
  "Nosara Retreat Center": "Nosara"
} as const;

const GetHelpCenters = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % centers.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-[90vh] sm:h-[80vh] min-h-[700px] w-full overflow-hidden bg-black">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={centers[currentIndex].image}
            alt={centers[currentIndex].name}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.4) contrast(1.1)" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col z-10">
        {/* Mobile Tab Navigation */}
        <div className="md:hidden w-full bg-black/95 backdrop-blur-sm border-b border-[#B7C9B7]/20">
          <div className="grid grid-cols-4 gap-px bg-[#B7C9B7]/10">
            {centers.map((center, index) => (
              <button
                key={center.id}
                onClick={() => goToSlide(index)}
                className={`relative py-3 px-1 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#B7C9B7]/20' 
                    : 'bg-transparent hover:bg-[#B7C9B7]/10'
                }`}
              >
                <div className="space-y-2 text-center relative">
                  <div className="flex flex-col items-center">
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 mb-2 ${
                      index === currentIndex ? 'bg-[#B7C9B7]' : 'bg-[#B7C9B7]/30'
                    }`} />
                    <p className={`text-[11px] leading-tight font-light transition-colors px-0.5 ${
                      index === currentIndex ? 'text-white' : 'text-white/50'
                    }`}>
                      {displayNames[center.name]}
                    </p>
                  </div>
                  {index === currentIndex && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B7C9B7]/60" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
              
              {/* Left: Current Center Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                      {centers[currentIndex].name}
                    </h2>
                    <div className="w-16 h-px bg-[#B7C9B7]/30"></div>
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-[#B7C9B7]">
                      {centers[currentIndex].location}
                    </p>
                  </div>
                  
                  <p className="text-base sm:text-lg md:text-xl font-light text-white/90 max-w-lg leading-relaxed">
                    {centers[currentIndex].description}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 text-white/90">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <a href={`tel:${centers[currentIndex].contact.phone.replace(/\D/g, '')}`} 
                         className="text-base sm:text-lg hover:text-[#B7C9B7] transition-colors">
                        {centers[currentIndex].contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <a href={`mailto:${centers[currentIndex].contact.email}`}
                         className="text-base sm:text-lg hover:text-[#B7C9B7] transition-colors">
                        {centers[currentIndex].contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <Link href={centers[currentIndex].href} className="mt-6 sm:mt-8 block">
                    <button className="group relative text-white text-sm tracking-widest uppercase font-medium">
                      <span className="relative z-10 px-8 sm:px-10 py-3 sm:py-4 block">Get Treatment Here</span>
                      <div className="absolute inset-0 border border-[#B7C9B7]/30 group-hover:border-[#B7C9B7]/60 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-[#B7C9B7]/5 group-hover:bg-[#B7C9B7]/10 transition-all duration-300"></div>
                    </button>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Right: Center Navigation - Desktop */}
              <div className="hidden md:block space-y-6">
                {centers.map((center, index) => (
                  <motion.button
                    key={center.id}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left p-6 border-l-2 transition-all duration-300 ${
                      index === currentIndex 
                        ? 'border-[#B7C9B7] bg-[#B7C9B7]/10 backdrop-blur-sm' 
                        : 'border-white/20 hover:border-[#B7C9B7]/40 hover:bg-[#B7C9B7]/5'
                    }`}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className={`text-xl md:text-2xl font-light mb-2 transition-colors ${
                      index === currentIndex ? 'text-white' : 'text-white/70'
                    }`}>
                      {center.name}
                    </h3>
                    <p className={`text-sm md:text-base font-light transition-colors ${
                      index === currentIndex ? 'text-white/80' : 'text-white/50'
                    }`}>
                      {center.location}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators - Desktop */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex space-x-3 z-20">
        {centers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-1 transition-all duration-300 ${
              index === currentIndex ? 'bg-[#B7C9B7]' : 'bg-[#B7C9B7]/30 hover:bg-[#B7C9B7]/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default GetHelpCenters 