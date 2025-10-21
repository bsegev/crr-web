"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Phone, Mail, Star, MapPin, CheckCircle, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { centers } from "@/data/centers"
import { use, useState } from "react"

// Enhanced data structure for landing pages
interface EnhancedCenterData {
  galleryImages: string[]
  pricing: {
    startingPrice: string
    currency: string
    duration: string
    note?: string
  }
  contact: {
    phone: string
    email: string
  }
  programs: Array<{
    name: string
    duration: string
    description: string
    highlights: string[]
  }>
  testimonials: Array<{
    quote: string
    author: string
    role?: string
    rating: number
  }>
  stats: Array<{
    label: string
    value: string
    description?: string
  }>
  approach: {
    title: string
    description: string
    methods: string[]
  }
  amenities: Array<{
    category: string
    items: string[]
  }>
}

// Enhanced data for each center (placeholder data)
const enhancedData: Record<string, EnhancedCenterData> = {
  "cornerstone-recovery": {
    galleryImages: [
      "/centers/cornerstone-socal.png",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    pricing: {
      startingPrice: "$45,000",
      currency: "USD",
      duration: "30-day program",
      note: "Insurance accepted • Financing available"
    },
    contact: {
      phone: "+1 (855) 334-2622",
      email: "admissions@cornerstone.iwc.com"
    },
    programs: [
      {
        name: "Medical Detox Program",
        duration: "5-10 days",
        description: "Medically supervised detoxification with 24/7 medical monitoring",
        highlights: ["24/7 medical supervision", "Comfort medications", "Nutritional support", "Psychological assessment"]
      },
      {
        name: "Residential Treatment",
        duration: "30-90 days",
        description: "Comprehensive residential program with evidence-based therapies",
        highlights: ["Individual therapy", "Group therapy", "Medical management", "Family programming"]
      },
      {
        name: "Intensive Outpatient",
        duration: "12 weeks",
        description: "Flexible outpatient program for continued care",
        highlights: ["Evening sessions", "Continued medical care", "Relapse prevention", "Life skills training"]
      }
    ],
    testimonials: [
      {
        quote: "Cornerstone saved my life. The medical team was exceptional and the clinical approach gave me the foundation I needed for lasting recovery.",
        author: "Michael R.",
        role: "Program Graduate",
        rating: 5
      },
      {
        quote: "The evidence-based treatment and medical oversight made all the difference. I finally found a program that worked.",
        author: "Sarah M.",
        role: "Family Member",
        rating: 5
      }
    ],
    stats: [
      { label: "Success Rate", value: "87%", description: "1-year sobriety rate" },
      { label: "Experience", value: "40+", description: "Years of clinical excellence" },
      { label: "Medical Staff", value: "24/7", description: "On-site medical supervision" },
      { label: "Accreditation", value: "Joint Commission", description: "Gold standard certification" }
    ],
    approach: {
      title: "Evidence-Based Clinical Treatment",
      description: "Our approach combines the latest medical research with proven therapeutic modalities to deliver measurable results.",
      methods: ["Cognitive Behavioral Therapy", "Medication-Assisted Treatment", "Medical Detox", "Dual Diagnosis Treatment", "Family Therapy", "Relapse Prevention"]
    },
    amenities: [
      {
        category: "Medical Facilities",
        items: ["On-site medical clinic", "24/7 nursing staff", "Pharmacy services", "Laboratory testing"]
      },
      {
        category: "Therapeutic Spaces",
        items: ["Individual therapy offices", "Group therapy rooms", "Meditation spaces", "Fitness center"]
      },
      {
        category: "Accommodations",
        items: ["Private rooms", "Shared common areas", "Dining facilities", "Outdoor spaces"]
      }
    ]
  },
  "costa-rica-recovery": {
    galleryImages: [
      "/centers/crr-space.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    pricing: {
      startingPrice: "$18,000",
      currency: "USD",
      duration: "30-day program",
      note: "All-inclusive pricing • Payment plans available"
    },
    contact: {
      phone: "+506 2222 4422",
      email: "admissions@crr.iwc.com"
    },
    programs: [
      {
        name: "Holistic Residential",
        duration: "30-60 days",
        description: "Comprehensive holistic treatment combining traditional and alternative therapies",
        highlights: ["Yoga and meditation", "Adventure therapy", "Cultural immersion", "Individual counseling"]
      },
      {
        name: "Medical Detox",
        duration: "5-7 days",
        description: "Safe, comfortable detoxification with holistic support",
        highlights: ["Medical supervision", "Natural supplements", "Acupuncture", "Nutritional therapy"]
      }
    ],
    testimonials: [
      {
        quote: "The holistic approach at CRR changed my perspective on recovery. The combination of therapy and yoga was exactly what I needed.",
        author: "Jennifer L.",
        role: "Program Graduate",
        rating: 5
      }
    ],
    stats: [
      { label: "Cost Savings", value: "60%", description: "Less than US facilities" },
      { label: "Holistic Therapies", value: "15+", description: "Alternative healing modalities" },
      { label: "Cultural Activities", value: "Daily", description: "Immersive experiences" },
      { label: "Natural Setting", value: "100%", description: "Tropical healing environment" }
    ],
    approach: {
      title: "Integrated Holistic Healing",
      description: "We believe healing happens when mind, body, and spirit are addressed together in a supportive natural environment.",
      methods: ["Yoga Therapy", "Adventure Therapy", "Art Therapy", "Mindfulness Meditation", "Acupuncture", "Nutritional Counseling"]
    },
    amenities: [
      {
        category: "Holistic Facilities",
        items: ["Yoga studio", "Meditation gardens", "Art therapy studio", "Adventure therapy equipment"]
      },
      {
        category: "Natural Setting",
        items: ["Tropical gardens", "Outdoor spaces", "Walking trails", "Fresh cloud forest air"]
      }
    ]
  },
  "el-tirol": {
    galleryImages: [
      "/centers/eltirol-space.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    pricing: {
      startingPrice: "$65,000",
      currency: "USD",
      duration: "30-day program",
      note: "Luxury all-inclusive • Premium amenities"
    },
    contact: {
      phone: "+506 2222 4422",
      email: "admissions@eltirol.iwc.com"
    },
    programs: [
      {
        name: "Luxury Holistic Program",
        duration: "30-90 days",
        description: "Premium holistic treatment in private cloud forest sanctuary",
        highlights: ["Private cabins", "Personal chef", "Luxury amenities", "Personalized treatment"]
      }
    ],
    testimonials: [
      {
        quote: "El Tirol provided the privacy and luxury I needed while delivering world-class treatment. The cloud forest setting was transformative.",
        author: "Anonymous",
        role: "Executive Client",
        rating: 5
      }
    ],
    stats: [
      { label: "Privacy Level", value: "100%", description: "Complete discretion" },
      { label: "Staff Ratio", value: "1:2", description: "Staff to client ratio" },
      { label: "Luxury Rating", value: "5-Star", description: "Premium accommodations" },
      { label: "Cloud Forest Views", value: "360°", description: "Panoramic vistas" }
    ],
    approach: {
      title: "Luxury Holistic Healing",
      description: "Premium holistic treatment combining luxury amenities with transformative healing modalities in complete privacy.",
      methods: ["Private Therapy", "Luxury Spa Treatments", "Gourmet Nutrition", "Adventure Therapy", "Mindfulness", "Cultural Immersion"]
    },
    amenities: [
      {
        category: "Luxury Accommodations",
        items: ["Private cabins", "Personal chef", "Spa services", "Concierge service"]
      }
    ]
  },
  "nosara-treatment": {
    galleryImages: [
      "/centers/nosara-shala.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    pricing: {
      startingPrice: "$25,000",
      currency: "USD",
      duration: "30-day program",
      note: "Beachfront wellness • Blue Zone location"
    },
    contact: {
      phone: "+506 2682 2242",
      email: "admissions@nosara.iwc.com"
    },
    programs: [
      {
        name: "Wellness Retreat Program",
        duration: "14-30 days",
        description: "Mental wellness and prevention programs in Blue Zone beachfront location",
        highlights: ["Beachfront location", "Blue Zone lifestyle", "Wellness programming", "Prevention focus"]
      }
    ],
    testimonials: [
      {
        quote: "The beachfront setting and wellness approach at Nosara gave me tools for life. The Blue Zone lifestyle is incredible.",
        author: "Maria S.",
        role: "Wellness Client",
        rating: 5
      }
    ],
    stats: [
      { label: "Blue Zone", value: "Certified", description: "Longevity hotspot" },
      { label: "Beach Access", value: "Direct", description: "Steps from the ocean" },
      { label: "Wellness Focus", value: "Prevention", description: "Mental health emphasis" },
      { label: "Natural Setting", value: "100%", description: "Pristine environment" }
    ],
    approach: {
      title: "Beachfront Wellness & Prevention",
      description: "Mental wellness and prevention programs in one of the world's Blue Zones, focusing on sustainable lifestyle changes.",
      methods: ["Surf Therapy", "Beach Meditation", "Blue Zone Nutrition", "Wellness Coaching", "Nature Therapy", "Lifestyle Medicine"]
    },
    amenities: [
      {
        category: "Beachfront Facilities",
        items: ["Direct beach access", "Surf equipment", "Beachfront yoga", "Ocean meditation"]
      }
    ]
  }
}

export default function CenterPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const center = centers.find(c => c.id === resolvedParams.id)
  const enhanced = enhancedData[resolvedParams.id]
  
  if (!center || !enhanced) {
    notFound()
  }

  // Image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % enhanced.galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + enhanced.galleryImages.length) % enhanced.galleryImages.length)
  }

  // Generate tagline based on center type
  const getTagline = () => {
    switch (center.type) {
      case "Clinical Recovery":
        return "Medical Excellence in Addiction Treatment"
      case "Holistic Accessible":
        return "Authentic Holistic Healing at Accessible Prices"
      case "Holistic Luxury":
        return "Premium Holistic Care in Paradise"
      case "Wellness Retreat":
        return "Wellness & Prevention Programs"
      default:
        return "Transformative Healing Experience"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={center.image}
            alt={center.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3 text-[#B7C9B7]">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-light tracking-wide uppercase">{center.location}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                  {center.name}
                </h1>
                
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#B7C9B7] italic">
                  {getTagline()}
                </p>
                
                <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
                  {center.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a href={`tel:${enhanced.contact.phone}`}>
                    <Button className="bg-[#B7C9B7] hover:bg-[#B7C9B7]/90 text-white px-8 py-3 text-sm font-medium w-full sm:w-auto">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: {enhanced.contact.phone}
                    </Button>
                  </a>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-sm font-medium w-full sm:w-auto">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {enhanced.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-light text-[#06402B] mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-black/80 mb-1">{stat.label}</div>
                {stat.description && (
                  <div className="text-xs text-black/60">{stat.description}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#06402B] mb-6">
              Facility Gallery
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Take a virtual tour of our healing environment and therapeutic spaces.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={enhanced.galleryImages[currentImageIndex]}
                  alt={`${center.name} facility ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                
                {/* Navigation Arrows */}
                {enhanced.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#06402B]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <ChevronRight className="w-6 h-6 text-[#06402B]" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {enhanced.galleryImages.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {enhanced.galleryImages.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {enhanced.galleryImages.length > 1 && (
                <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
                  {enhanced.galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'border-[#06402B] shadow-md'
                          : 'border-gray-200 hover:border-[#B7C9B7]'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${center.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#06402B] mb-6">
                Investment in Your Recovery
              </h2>
              <p className="text-lg text-black/70 max-w-2xl mx-auto">
                Transparent pricing with no hidden fees. Your healing journey deserves clarity from day one.
              </p>
            </motion.div>

            <Card className="border-[#B7C9B7]/30 overflow-hidden">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl sm:text-5xl font-light text-[#06402B] mb-2">
                      {enhanced.pricing.startingPrice}
                    </div>
                    <div className="text-lg text-black/70">{enhanced.pricing.duration}</div>
                    {enhanced.pricing.note && (
                      <div className="text-sm text-[#B7C9B7] mt-2">{enhanced.pricing.note}</div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={`tel:${enhanced.contact.phone}`}>
                      <Button className="bg-[#06402B] hover:bg-[#06402B]/90 text-white px-8 py-3 w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Details
                      </Button>
                    </a>
                    <a href={`mailto:${enhanced.contact.email}`}>
                      <Button variant="outline" className="border-[#B7C9B7] text-[#06402B] px-8 py-3 w-full sm:w-auto">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Admissions
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#06402B] mb-6">
              Treatment Programs
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Comprehensive programs designed to meet you wherever you are in your recovery journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhanced.programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-[#B7C9B7]/30 h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium text-[#06402B] mb-2">{program.name}</h3>
                        <Badge variant="outline" className="border-[#B7C9B7]/50 text-xs">
                          {program.duration}
                        </Badge>
                      </div>
                      
                      <p className="text-black/70 leading-relaxed">{program.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-black/80">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-black/70">
                              <CheckCircle className="w-4 h-4 text-[#B7C9B7] mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#06402B] mb-6">
                {enhanced.approach.title}
              </h2>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                {enhanced.approach.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {enhanced.approach.methods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#B7C9B7] flex-shrink-0" />
                    <span className="text-sm text-black/80">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={center.image}
                alt="Treatment approach"
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[#06402B]/10 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#06402B] mb-6">
              Stories of Transformation
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Real experiences from those who have found healing and hope through our programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {enhanced.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-[#B7C9B7]/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <blockquote className="text-black/80 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="text-sm">
                        <div className="font-medium text-[#06402B]">{testimonial.author}</div>
                        {testimonial.role && (
                          <div className="text-black/60">{testimonial.role}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#06402B] mb-6">
              Facilities & Amenities
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Every detail designed to support your healing journey in comfort and dignity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhanced.amenities.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-[#B7C9B7]/30 h-full">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-lg font-medium text-[#06402B] mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-black/70">
                          <CheckCircle className="w-4 h-4 text-[#B7C9B7] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-[#06402B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward lasting recovery. Our admissions team is available 24/7 to answer your questions and guide you through the process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${enhanced.contact.phone}`}>
                <Button className="bg-[#B7C9B7] hover:bg-[#B7C9B7]/90 text-white px-8 py-4 text-lg w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {enhanced.contact.phone}
                </Button>
              </a>
              <a href={`mailto:${enhanced.contact.email}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#06402B] px-8 py-4 text-lg w-full sm:w-auto">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Admissions
                </Button>
              </a>
            </div>
            
            <div className="text-sm text-white/70">
              Confidential • Available 24/7 • Insurance Verification Available
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 