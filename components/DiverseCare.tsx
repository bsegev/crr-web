"use client"

import { motion } from "framer-motion"
import { Circle, Leaf, Star } from "lucide-react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

export default function DiverseCare() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 bg-[#F9FAF9] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#06402B]/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#B7C9B7]/[0.05] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16 text-left sm:text-center"
        >
          {/* Heading Section */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-block">
              <p className="text-sm font-light text-[#06402B] tracking-widest uppercase mb-4">
                Our Approach
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black leading-tight tracking-[-0.02em]">
                A model that serves
                <br />
                <span className="italic font-serif text-[#06402B]">every journey</span>
              </h2>
            </div>
            <p className="text-lg sm:text-xl font-light text-black/70 max-w-2xl sm:mx-auto leading-relaxed">
              We've carefully chosen a range of treatment approaches that align with our principles—ensuring excellence at every level.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto"
          >
            {/* Clinical to Holistic */}
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#F9FAF9] transition-all duration-500">
              <div className="absolute inset-0 border border-[#B7C9B7]/20 rounded-2xl group-hover:border-[#B7C9B7]/40 transition-colors duration-300" />
              <div className="relative space-y-4 sm:space-y-6 text-left">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06402B]/5 to-[#06402B]/10 flex items-center justify-center">
                  <Circle className="w-5 h-5 text-[#06402B]/60" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#06402B] mb-2 sm:mb-3">Clinical to Holistic</h3>
                  <p className="text-base sm:text-lg text-black/70 leading-relaxed">Spanning evidence-based medical treatment to integrative healing practices</p>
                </div>
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#B7C9B7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Accessible to Luxury */}
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#F9FAF9] transition-all duration-500">
              <div className="absolute inset-0 border border-[#B7C9B7]/20 rounded-2xl group-hover:border-[#B7C9B7]/40 transition-colors duration-300" />
              <div className="relative space-y-4 sm:space-y-6 text-left">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06402B]/5 to-[#06402B]/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#06402B]/60" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#06402B] mb-2 sm:mb-3">Accessible to Luxury</h3>
                  <p className="text-base sm:text-lg text-black/70 leading-relaxed">Treatment options across different price points without compromising quality</p>
                </div>
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#B7C9B7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Urban to Nature */}
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#F9FAF9] transition-all duration-500">
              <div className="absolute inset-0 border border-[#B7C9B7]/20 rounded-2xl group-hover:border-[#B7C9B7]/40 transition-colors duration-300" />
              <div className="relative space-y-4 sm:space-y-6 text-left">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06402B]/5 to-[#06402B]/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-[#06402B]/60" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#06402B] mb-2 sm:mb-3">Urban to Nature</h3>
                  <p className="text-base sm:text-lg text-black/70 leading-relaxed">Settings spanning urban accessibility to pristine natural environments for healing</p>
                </div>
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#B7C9B7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 