"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const FoundingStory = () => {
  return (
    <section className="relative bg-stone-extra-light py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-forest-deep/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-water-deep/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="relative">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-sm font-light text-forest-deep tracking-widest uppercase"
                  >
                    Find Your Strength
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-primary text-stone-darkest leading-[1.1] tracking-[-0.02em]"
                  >
                    The Catalyst for{" "}
                    <span className="italic text-forest-deep">Dignity</span>
                  </motion.h2>
                </div>

                <div className="space-y-6 text-lg text-stone-darker leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    IWC was born from a moment of profound realization: the traditional addiction 
                    treatment industry was failing the very families it claimed to serve. Breached 
                    confidentiality, false promises, cookie-cutter programs, and facilities that 
                    prioritized profit over protecting your privacy.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Our founders, having navigated this broken system with their own loved ones, 
                    knew there had to be a better way. They envisioned centers where absolute 
                    discretion wasn't revolutionary—it was sacred. Where complete confidentiality 
                    wasn't optional—it was fundamental.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Today, IWC represents that vision made real: a global network of healing 
                    sanctuaries where dignity guides every decision, your privacy is never 
                    compromised, and lasting transformation happens in settings that honor both 
                    your journey and your need for utmost discretion.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                {/* Main Image */}
                <Image
                  src="/nature-mountain.jpg"
                  alt="Serene mountain landscape representing our journey of transformation"
                  fill
                  className="object-cover"
                />
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-forest-deep/10 mix-blend-multiply" />
                <div className="absolute inset-0 border-2 border-forest-deep/10 rounded-2xl" />
              </div>

              {/* Floating Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl max-w-sm border border-forest-light/20"
              >
                <p className="text-lg italic font-primary text-forest-deep leading-relaxed">
                  "We built the treatment center we wished existed—one that honors both healing and dignity."
                </p>
                <p className="text-sm font-light text-forest-deep/70 tracking-widest uppercase mt-4">
                  Dr. James Chen • Co-Founder
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundingStory 