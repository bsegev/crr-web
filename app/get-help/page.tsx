"use client"

import GetHelpHero from "@/components/GetHelpHero"
import GetHelpResources from "@/components/GetHelpResources"
import GetHelpCenters from "@/components/GetHelpCenters"
import GetHelpNext from "@/components/GetHelpNext"
import GetHelpBanner from "@/components/GetHelpBanner"

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      <GetHelpHero />
      <GetHelpBanner />
      <GetHelpCenters />
      <GetHelpResources />
      <GetHelpNext />
    </div>
  )
}
