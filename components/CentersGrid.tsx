"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import type { Center } from "@/data/centers"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8 }
}

interface CentersGridProps {
  centers: Center[]
}

export default function CentersGrid({ centers }: CentersGridProps) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

  const toggleCard = (centerId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [centerId]: !prev[centerId]
    }))
  }

  return (
    <section className="py-16 md:py-24 px-8 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {centers.map((center, index) => (
            <motion.div
              key={center.id}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Card className="border-[#B7C9B7]/30 overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="aspect-[16/10] relative">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#06402B] text-white">{center.type}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <center.icon className="w-5 h-5 text-[#06402B]" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-light text-[#06402B] mb-2">{center.name}</h3>
                        <div className="flex items-center text-black/60 mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{center.location}</span>
                        </div>
                        <p className="text-black/70 leading-relaxed">{center.description}</p>
                      </div>

                      {/* Accordion Button */}
                      <Button 
                        variant="ghost" 
                        onClick={() => toggleCard(center.id)}
                        className="w-full justify-between border border-[#B7C9B7]/30 hover:bg-[#F9FAF9] text-[#06402B] hover:text-[#06402B] py-3"
                      >
                        <span className="text-sm font-medium">View Specialties & Features</span>
                        {expandedCards[center.id] ? (
                          <ChevronUp className="h-4 w-4 ml-2" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-2" />
                        )}
                      </Button>

                      {/* Accordion Content */}
                      <AnimatePresence>
                        {expandedCards[center.id] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-6 pt-2">
                              {/* Specialties */}
                              <div>
                                <h4 className="text-sm font-medium text-black/60 mb-3 tracking-wide uppercase">Specialties</h4>
                                <div className="flex flex-wrap gap-2">
                                  {center.specialties.map((specialty, index) => (
                                    <Badge key={index} variant="outline" className="border-[#B7C9B7]/50 text-xs">
                                      {specialty}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Key Features */}
                              <div>
                                <h4 className="text-sm font-medium text-black/60 mb-3 tracking-wide uppercase">Key Features</h4>
                                <div className="flex flex-wrap gap-2">
                                  {center.features.map((feature, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs bg-[#F9FAF9]">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="pt-2 flex gap-4">
                        <Link href={`/centers/${center.id}`} className="flex-1">
                          <Button variant="default" className="w-full bg-[#06402B] hover:bg-[#06402B]/90">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        {center.website === "#" ? (
                          <Button variant="outline" className="border-[#B7C9B7] text-[#06402B] bg-transparent w-full" disabled>
                            Coming Soon
                          </Button>
                        ) : (
                          <a href={center.website} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" className="border-[#B7C9B7] text-[#06402B] bg-transparent w-full">
                              Visit Website
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 