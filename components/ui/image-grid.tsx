"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, LayoutGroup } from "motion/react"

interface Image {
  src: string
  alt: string
}

interface ImageGridProps {
  images: Image[]
  interval?: number
}

export const ImageGrid = ({
  images,
  interval = 8000
}: ImageGridProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [loadedImages, setLoadedImages] = useState<number[]>([])
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false)

  // Create a 5x3 grid of images
  const gridImages = Array(15).fill(null).map((_, i) => ({
    ...images[i % images.length],
    id: i
  }))

  // Initial load animation
  useEffect(() => {
    if (loadedImages.length === 15) {
      setIsInitialLoadComplete(true)
      return
    }

    // Generate random sequence for image loading
    const remainingIndices = Array.from({ length: 15 }, (_, i) => i)
      .filter(i => !loadedImages.includes(i))
    
    if (remainingIndices.length === 0) return

    // Randomly select next index
    const randomIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)]
    
    const timer = setTimeout(() => {
      setLoadedImages(prev => [...prev, randomIndex])
    }, 100) // Adjust timing between each image appearance

    return () => clearTimeout(timer)
  }, [loadedImages])

  // Auto-rotate images only after initial load
  useEffect(() => {
    if (!isInitialLoadComplete) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval, isInitialLoadComplete])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Darker Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-10" />

      <LayoutGroup>
        {/* Main Grid */}
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-4 p-8 z-20">
          {gridImages.map((image, i) => {
            const isCurrentImage = i % images.length === currentIndex
            const hasLoaded = loadedImages.includes(i)

            return (
              <motion.div
                key={`grid-${i}`}
                className={`relative aspect-video rounded-lg overflow-hidden ${
                  isCurrentImage ? "z-30" : "z-20"
                }`}
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)"
                }}
                animate={{
                  opacity: !isInitialLoadComplete 
                    ? (hasLoaded ? 0.3 : 0)
                    : (isCurrentImage ? 0 : 0.3),
                  scale: !isInitialLoadComplete
                    ? (hasLoaded ? 1 : 0.8)
                    : (isCurrentImage ? 0.9 : 1),
                  filter: !isInitialLoadComplete
                    ? (hasLoaded ? "blur(3px)" : "blur(10px)")
                    : (isCurrentImage ? "blur(0px)" : "blur(3px)")
                }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1],
                  delay: !isInitialLoadComplete && hasLoaded ? 0 : 0
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          })}
        </div>

        {/* Featured Image - only show after initial load */}
        {isInitialLoadComplete && (
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                layoutId={`grid-${currentIndex}`}
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, z: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  z: 30,
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    mass: 1.2,
                    opacity: { duration: 0.8 },
                    delay: 0.1
                  }
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.9,
                  z: 20,
                  transition: { 
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                onLayoutAnimationStart={() => setIsAnimating(true)}
                onLayoutAnimationComplete={() => setIsAnimating(false)}
                style={{
                  zIndex: isAnimating ? 40 : 30
                }}
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 border-2 border-[#B7C9B7]/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: 0.6,
                    duration: 0.8
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Navigation Dots - only show after initial load */}
        {isInitialLoadComplete && (
          <div className="absolute bottom-8 right-[10%] transform -translate-x-1/2 flex space-x-2 z-40">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-700 ${
                  index === currentIndex ? "bg-[#B7C9B7]" : "bg-[#B7C9B7]/30"
                }`}
              />
            ))}
          </div>
        )}
      </LayoutGroup>
    </div>
  )
}

export default ImageGrid 