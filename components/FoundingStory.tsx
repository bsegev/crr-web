"use client"

import React from "react"
import { motion } from "motion/react"
import Image from "next/image"

const FoundingStory = () => {
  return (
    <section className="relative bg-gray-50 py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-orange/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-navy/20 rounded-full translate-y-1/2 -translate-x-1/2" />
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
                    className="text-sm font-light text-orange tracking-widest uppercase"
                  >
                    Our Story
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-primary text-navy-extra-dark leading-[1.1] tracking-[-0.02em]"
                  >
                    Recovery in{" "}
                    <span className="italic font-serif text-orange">Paradise</span>
                  </motion.h2>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Costa Rica Recovery emerged from a simple belief: that transformative addiction 
                    treatment shouldn't be out of reach. Located in the heart of San José, we combine 
                    the clinical excellence you need with the holistic healing you deserve—all at a 
                    price point that makes recovery accessible.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We believe Costa Rica's natural beauty is more than just scenery—it's a fundamental 
                    part of the healing process. The Pura Vida lifestyle, tropical climate, and 
                    supportive community create an environment where recovery becomes not just 
                    possible, but sustainable.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    As part of International Wellness Centers, we bring decades of clinical expertise 
                    to every aspect of care. But we never forget that behind every treatment plan is a 
                    person deserving of compassion, respect, and the opportunity to reclaim their life.
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
                <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
                <div className="absolute inset-0 border-2 border-orange/20 rounded-2xl" />
              </div>

              {/* Floating Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl max-w-sm border border-orange/20"
              >
                <p className="text-lg italic font-primary text-orange leading-relaxed">
                  "Costa Rica's beauty accelerates healing. Combined with evidence-based treatment, 
                  it creates transformation that lasts."
                </p>
                <p className="text-sm font-light text-orange/70 tracking-widest uppercase mt-4">
                  Costa Rica Recovery
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