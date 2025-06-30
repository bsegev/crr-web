"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GetHelpHero from "@/components/GetHelpHero"
import GetHelpResources from "@/components/GetHelpResources"
import GetHelpCenters from "@/components/GetHelpCenters"
import GetHelpNext from "@/components/GetHelpNext"
import GetHelpBanner from "@/components/GetHelpBanner"

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      <Header />
      <GetHelpHero />
      <GetHelpBanner />
      <GetHelpCenters />
      <GetHelpResources />
      <GetHelpNext />
      <Footer />
    </div>
  )
}
