"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FindYourCenterHero from "@/components/FindYourCenterHero"
import CenterMatchingForm from "@/components/CenterMatchingForm"

export default function FindYourCenter() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <FindYourCenterHero />
      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <CenterMatchingForm />
      </section>
      <Footer />
    </main>
  )
}
