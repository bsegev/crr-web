"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CentersHero from "@/components/CentersHero"
import CentersIntro from "@/components/CentersIntro"
import CentersGrid from "@/components/CentersGrid"
import FindYourCenter from "@/components/FindYourCenter"
import DiverseCare from "@/components/DiverseCare"
import FinalCTA from "@/components/FinalCTA"
import { centers } from "@/data/centers"

export default function OurCentersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <CentersHero />
        <CentersIntro />
        <CentersGrid centers={centers} />
        <FindYourCenter />
        <DiverseCare />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
