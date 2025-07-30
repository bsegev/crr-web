"use client"

import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactHero from "@/components/ContactHero"
import ContactMethods from "@/components/ContactMethods"
import ContactProcess from "@/components/ContactProcess"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactMethods />
        <ContactProcess />
      </main>
      <Footer />
    </>
  )
}
