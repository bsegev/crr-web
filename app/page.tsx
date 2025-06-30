"use client"

import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import OurFoundation from "@/components/OurFoundation"
import CenterFocusCarousel from "@/components/CenterFocusCarousel"
import FindYourCenter from "@/components/FindYourCenter"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import { centers } from "@/data/centers"

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

const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
}

export default function HomePage() {
  const carouselCenters = centers.map(center => ({
    id: center.id,
    name: center.name,
    description: center.description,
    image: center.image,
    link: center.website
  }))

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <OurFoundation />
      <CenterFocusCarousel centers={carouselCenters} />
      <FindYourCenter />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}
