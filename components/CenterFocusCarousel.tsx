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
    loop: true,
    align: "center",
    duration: 30,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

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

  return (
    <section className="relative w-screen bg-black overflow-hidden">
      {/* Background Images */}
      {centers.map((center, index) => (
        <BackgroundImage
          key={center.id}
          src={center.image}
          isVisible={selectedIndex === index}
        />
      ))}

      <div className="relative py-24">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Centers</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Whether seeking treatment for yourself or a loved one, discover our most inspiring healing centers around the
            world.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex px-16">
              {centers.map((center, index) => {
                const isSelected = selectedIndex === index
                return (
                  <div
                    key={center.id}
                    className="relative min-w-0 px-6 cursor-pointer flex-[0_0_500px]"
                    onClick={() => scrollTo(index)}
                  >
                    <motion.div 
                      className="bg-white h-[600px] overflow-hidden border-2 border-white/20"
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
                      <div className="h-[100px] flex items-center justify-center border-b border-black/10">
                        <motion.h3 
                          className="text-2xl font-serif text-center px-8"
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
                        className="h-[300px] relative"
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
                        className="p-8 text-center flex flex-col items-center justify-between h-[200px]"
                        animate={{
                          opacity: isSelected ? 1 : 0,
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeInOut"
                        }}
                      >
                        <p className="text-base text-black/80 leading-relaxed mb-6">{center.description}</p>
                        <a 
                          href={center.link}
                          className="inline-block px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
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
        <div className="flex justify-center items-center mt-12 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedIndex === index ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 