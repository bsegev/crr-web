"use client"

import Hero from "@/components/Hero"
import WelcomeSection from "@/components/WelcomeSection"
import OurFoundation from "@/components/OurFoundation"
import { MainServicesCarousel } from "@/components/MainServicesCarousel"
import { TreatmentTypesExpandable } from "@/components/TreatmentTypesExpandable"
import HowToGetStarted from "@/components/HowToGetStarted"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <OurFoundation />
      <MainServicesCarousel />
      <TreatmentTypesExpandable />
      <HowToGetStarted />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
