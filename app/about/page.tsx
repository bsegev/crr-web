"use client"

import AboutHero from "@/components/AboutHero"
import FoundingStory from "@/components/FoundingStory"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MissionVision from "@/components/MissionVision"
import WhyChooseIWC from "@/components/WhyChooseIWC"
import FindYourCenter from "@/components/FindYourCenter"
import FinalCTA from "@/components/FinalCTA"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <AboutHero />
        <MissionVision />
        <FoundingStory />
        <WhyChooseIWC />
        <FindYourCenter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
