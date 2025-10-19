"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-extra-dark to-navy-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light text-white mb-6">
              Our Team
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Meet the professionals dedicated to your recovery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-gray-600 mb-8">Content coming soon...</p>
          <Link href="/contact">
            <motion.button
              className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  )
}

