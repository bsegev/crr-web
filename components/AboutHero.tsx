"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ImageGrid from "@/components/ui/image-grid"
import { ScrollIndicator } from "./ui/scroll-indicator"

const AboutHero = () => {
  const [allPhotos, setAllPhotos] = useState<Array<{ src: string; alt: string }>>([])
  const [currentImages, setCurrentImages] = useState<Array<{ src: string; alt: string }>>([])
  const [featuredImage, setFeaturedImage] = useState<{ src: string; alt: string } | null>(null)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Function to shuffle array
  const shuffleArray = <T extends unknown>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      // For mobile background grid: 16 images (2x8); desktop: 15 images
      const gridImageCount = isMobile ? 16 : 15
      const gridImages = shuffled.length >= gridImageCount 
        ? shuffled.slice(0, gridImageCount)
        : [...shuffled, ...shuffled, ...shuffled].slice(0, gridImageCount)
      setCurrentImages(gridImages)
      
      // Set initial featured image for mobile
      if (isMobile && shuffled.length > 0) {
        setFeaturedImage(shuffled[0])
        setFeaturedIndex(0)
      }
    }

    // Initial set
    updateImages()

    // Update background grid less frequently on mobile
    const gridInterval = setInterval(updateImages, isMobile ? 45000 : 30000)
    
    // Separate interval for featured image rotation on mobile
    let featuredInterval: NodeJS.Timeout | null = null
    if (isMobile) {
      featuredInterval = setInterval(() => {
        if (allPhotos.length > 0) {
          setFeaturedIndex(prev => {
            const nextIndex = (prev + 1) % allPhotos.length
            setFeaturedImage(allPhotos[nextIndex])
            return nextIndex
          })
        }
      }, 6000) // Change featured image every 6 seconds
    }

    return () => {
      clearInterval(gridInterval)
      if (featuredInterval) clearInterval(featuredInterval)
    }
  }, [allPhotos, isMobile])

  return (
    <section className="relative min-h-screen bg-stone-extra-light overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        {/* Desktop: Full ImageGrid animation */}
        <div className="hidden md:block">
      {currentImages.length === 15 && <ImageGrid images={currentImages} interval={6000} />}
        </div>
        
        {/* Mobile: 2x8 static background grid */}
        <div className="md:hidden">
          {currentImages.length >= 16 && (
            <div className="absolute inset-0 grid grid-cols-2 gap-1 p-3">
              {currentImages.slice(0, 16).map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  className="relative aspect-square overflow-hidden rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ 
                    duration: 1,
                    delay: index * 0.03,
                    ease: "easeOut"
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </motion.div>
              ))}
            </div>
          )}
          {/* Mobile dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/90" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full md:absolute md:inset-0 md:flex md:items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 md:py-32 md:w-full">
          <div className="max-w-xl space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-sm font-light text-forest-light tracking-widest uppercase">
                Nourished by Nature
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary text-white leading-[1.1] tracking-[-0.02em]">
                Dedicated to
                <br />
                <span className="italic text-forest-light">your wellbeing</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed"
            >
              Our experienced team brings together the best in trauma-informed care, 
              addiction recovery, and holistic healing. We're here to support your 
              journey with respect and understanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/contact" className="inline-block">
                <button className="group relative text-white text-sm tracking-widest uppercase font-medium touch-manipulation">
                                      <span className="relative z-10 px-10 sm:px-12 py-3 sm:py-4 block">Begin Your Transformation</span>
                  <div className="absolute inset-0 border border-forest-light/30 group-hover:border-forest-light/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-forest-light/5 group-hover:bg-forest-light/10 transition-all duration-300"></div>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Featured Image - Below hero copy with smooth crossfade */}
          {isMobile && featuredImage && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 md:hidden"
            >
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={featuredImage.src}
                      src={featuredImage.src}
                      alt={featuredImage.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 1.2,
                        ease: "easeInOut"
                      }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-darkest/20 via-transparent to-transparent" />
                </div>
                {/* Subtle caption */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center text-stone-darker text-sm mt-4 font-light"
                >
                  One of our dedicated team members
                </motion.p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Elegant scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <ScrollIndicator color="dark" />
      </div>
    </section>
  )
}

export default AboutHero 