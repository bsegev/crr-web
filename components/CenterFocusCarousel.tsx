"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Center {
  id: string
  name: string
  description: string
  image: string
  link: string
}

interface CenterFocusCarouselProps {
  centers: Center[]
}

const BackgroundImage = ({ src, isVisible }: { src: string; isVisible: boolean }) => (
  <motion.div
    className="absolute inset-0 bg-black"
    initial={false}
    animate={{
      opacity: isVisible ? 1 : 0,
    }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <div className="absolute inset-0 bg-black/60" />
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{
        scale: isVisible ? 1.05 : 1,
      }}
      transition={{ duration: 8, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover opacity-50"
        priority
      />
    </motion.div>
  </motion.div>
)

export default function CenterFocusCarousel({ centers }: CenterFocusCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    duration: 30,
    breakpoints: {
      '(max-width: 768px)': {
        align: 'start'
      }
    }
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return
    const n = centers.length
    const targetIndex = (index + n) % n
    setSelectedIndex(targetIndex)
    emblaApi.scrollTo(targetIndex)
  }, [emblaApi, centers.length])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const currentSnap = emblaApi.selectedScrollSnap()
    const n = centers.length
    const wrappedIndex = (currentSnap + n) % n
    setSelectedIndex(wrappedIndex)
  }, [emblaApi, centers.length])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    const n = centers.length
    const nextIndex = (selectedIndex + 1 + n) % n
    scrollTo(nextIndex)
  }, [emblaApi, centers.length, selectedIndex, scrollTo])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    const n = centers.length
    const prevIndex = (selectedIndex - 1 + n) % n
    scrollTo(prevIndex)
  }, [emblaApi, centers.length, selectedIndex, scrollTo])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scrollNext, scrollPrev])

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Images */}
      {centers.map((center, index) => (
        <BackgroundImage
          key={center.id}
          src={center.image}
          isVisible={selectedIndex === index}
        />
      ))}

      <div className="relative py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 md:mb-6">Our Centers</h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Whether seeking treatment for yourself or a loved one, discover our most inspiring healing centers around the
            world.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {centers.map((center, index) => {
                const isSelected = selectedIndex === index
                return (
                  <div
                    key={center.id}
                    className="relative min-w-0 px-3 sm:px-4 md:px-6 cursor-pointer flex-[0_0_280px] sm:flex-[0_0_350px] md:flex-[0_0_500px] touch-manipulation"
                    onClick={() => scrollTo(index)}
                  >
                    <motion.div 
                      className="bg-white overflow-hidden border-2 border-white/20 h-[500px] sm:h-[550px] md:h-[600px]"
                      animate={{
                        scale: isSelected ? 1 : 0.85,
                        backgroundColor: isSelected ? "#ffffff" : "transparent",
                        borderColor: isSelected ? "transparent" : "rgba(255,255,255,0.3)",
                      }}
                      transition={{ 
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                    >
                      {/* Header - Always visible */}
                      <div className="h-[80px] sm:h-[90px] md:h-[100px] flex items-center justify-center border-b border-black/10 px-4">
                        <motion.h3 
                          className="text-lg sm:text-xl md:text-2xl font-serif text-center leading-tight"
                          animate={{
                            color: isSelected ? "#000000" : "#ffffff",
                          }}
                          transition={{ 
                            duration: 0.4,
                            ease: "easeInOut"
                          }}
                        >
                          {center.name}
                        </motion.h3>
                      </div>

                      {/* Image - Fades based on selection */}
                      <motion.div 
                        className="h-[250px] sm:h-[280px] md:h-[300px] relative"
                        animate={{
                          opacity: isSelected ? 1 : 0,
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeInOut"
                        }}
                      >
                        <Image
                          src={center.image}
                          alt={center.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>

                      {/* Content - Fades based on selection */}
                      <motion.div 
                        className="p-4 sm:p-6 md:p-8 text-center flex flex-col items-center justify-between h-[170px] sm:h-[180px] md:h-[200px]"
                        animate={{
                          opacity: isSelected ? 1 : 0,
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeInOut"
                        }}
                      >
                        <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-4 md:mb-6 line-clamp-3">
                          {center.description}
                        </p>
                        <a 
                          href={center.link}
                          className="inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors uppercase text-xs sm:text-sm tracking-wider font-medium touch-manipulation"
                        >
                          View Center
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-8 md:mt-12 space-x-2 px-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 touch-manipulation",
                selectedIndex === index ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 