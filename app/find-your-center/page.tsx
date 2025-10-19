"use client"

import FindYourCenterHero from "@/components/FindYourCenterHero"
import CenterMatchingForm from "@/components/CenterMatchingForm"

export default function FindYourCenter() {
  return (
    <div className="min-h-screen flex flex-col">
      <FindYourCenterHero />
      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <CenterMatchingForm />
      </section>
    </div>
  )
}
