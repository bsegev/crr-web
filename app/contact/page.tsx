"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Heart, Shield, Users } from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactHero from "@/components/ContactHero"
import ContactMethods from "@/components/ContactMethods"
import ContactProcess from "@/components/ContactProcess"

const centers = [
  {
    id: "cornerstone",
    name: "Cornerstone of Southern California",
    description: "Located in the heart of Southern California, our flagship center offers comprehensive treatment programs in a serene, modern environment.",
    image: "/centers/cornerstone-socal.png",
    link: "/our-centers/cornerstone"
  },
  {
    id: "crr",
    name: "Costa Rica Recovery",
    description: "Experience healing in paradise at our luxury beachfront center, where recovery meets natural beauty and tranquility.",
    image: "/centers/crr-space.jpg",
    link: "/our-centers/costa-rica"
  },
  {
    id: "eltirol",
    name: "El Tirol Mountain Center",
    description: "Find peace and clarity in our mountain retreat, offering specialized programs amidst breathtaking alpine scenery.",
    image: "/centers/eltirol-space.jpg",
    link: "/our-centers/el-tirol"
  },
  {
    id: "nosara",
    name: "Nosara Wellness Center",
    description: "Our holistic healing sanctuary combines traditional therapies with mindfulness practices in a tropical setting.",
    image: "/centers/nosara-shala.jpg",
    link: "/our-centers/nosara"
  }
]

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
