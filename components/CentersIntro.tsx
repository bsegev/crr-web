"use client"

import { motion } from "motion/react"

export default function CentersIntro() {
  return (
    <section className="py-16 md:py-24 px-8 md:px-12 bg-[#F9FAF9]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-light text-black leading-tight tracking-[-0.02em]">
            Four centers,
            <br />
            <span className="italic font-serif text-[#06402B]">infinite possibilities</span>
          </h2>
          <p className="text-xl font-light text-black/70 max-w-3xl mx-auto leading-relaxed">
            Each center in our collection offers a unique approach to healing—from structured clinical care to luxury holistic treatment to wellness retreats.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 