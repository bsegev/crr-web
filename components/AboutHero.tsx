"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import ImageGrid from "@/components/ui/image-grid"
import { ScrollIndicator } from "./ui/scroll-indicator"

const AboutHero = () => {
  const [allPhotos, setAllPhotos] = useState<Array<{ src: string; alt: string }>>([])
  const [currentImages, setCurrentImages] = useState<Array<{ src: string; alt: string }>>([])

  // Function to shuffle array
  const shuffleArray = <T extends unknown>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Load photos on mount
  useEffect(() => {
    fetch('/api/staff-photos')
      .then(res => res.json())
      .then(photos => {
        setAllPhotos(photos)
      })
      .catch(error => {
        console.error('Error fetching staff photos:', error)
      })
  }, [])

  // Update current images whenever allPhotos changes
  useEffect(() => {
    if (allPhotos.length === 0) return

    const updateImages = () => {
      const shuffled = shuffleArray(allPhotos)
      // If we have less than 15 photos, repeat some to fill the grid
      const gridImages = shuffled.length >= 15 
        ? shuffled.slice(0, 15)
        : [...shuffled, ...shuffled, ...shuffled].slice(0, 15)
      setCurrentImages(gridImages)
    }

    // Initial set
    updateImages()

    // Update every 5 cycles of the grid (30 seconds)
    const interval = setInterval(updateImages, 30000)
    return () => clearInterval(interval)
  }, [allPhotos])

  return (
    <section className="relative min-h-[90vh] bg-black overflow-hidden">
      {/* Background Grid */}
      {currentImages.length === 15 && <ImageGrid images={currentImages} interval={6000} />}

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-32">
          <div className="max-w-xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
                Our Team
              </p>
              <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                The faces of
                <br />
                <span className="italic font-serif text-[#B7C9B7]">compassion</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light text-white/90 leading-relaxed"
            >
              Our team brings together decades of experience in trauma-informed care, 
              addiction recovery, and holistic healing. Each member is dedicated to 
              walking alongside you on your journey to wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/get-help" className="inline-block">
                <button className="group relative text-white text-sm tracking-widest uppercase font-medium">
                  <span className="relative z-10 px-12 py-4 block">Meet Our Team</span>
                  <div className="absolute inset-0 border border-[#B7C9B7]/30 group-hover:border-[#B7C9B7]/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-[#B7C9B7]/5 group-hover:bg-[#B7C9B7]/10 transition-all duration-300"></div>
                </button>
              </Link>
            </motion.div>
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

export default AboutHero 