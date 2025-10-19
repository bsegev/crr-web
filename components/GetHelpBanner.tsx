"use client"

import { motion } from "motion/react"

export default function GetHelpBanner() {
  return (
    <section className="bg-white py-12 border-y border-foreground/10">
      <motion.div 
        className="max-w-[90rem] mx-auto px-8 md:px-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">
          Our world-class facilities are ready to welcome you.
          <span className="block text-lg md:text-xl text-foreground/70 mt-2">
            For telehealth and online support options, please see our resources below.
          </span>
        </p>
      </motion.div>
    </section>
  )
} 