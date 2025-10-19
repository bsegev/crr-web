"use client"

import React from "react"
import ContactHero from "@/components/ContactHero"
import ContactMethods from "@/components/ContactMethods"
import ContactProcess from "@/components/ContactProcess"

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactMethods />
      <ContactProcess />
    </div>
  )
}
