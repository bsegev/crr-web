"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function GetHelpNext() {
  return (
    <section className="relative min-h-[70vh] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/nature-mountain.jpg')] bg-cover bg-center"
          style={{ filter: "brightness(0.4) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#B7C9B7]/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B7C9B7]/[0.05] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 py-24 min-h-[70vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
              Your Next Step
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
              Begin your journey to
              <br />
              <span className="italic font-serif text-[#B7C9B7]">lasting recovery</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Our centers offer personalized treatment programs designed to support your unique path to recovery.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-8 space-x-6"
            >
              <Link href="/find-your-center">
                <motion.button 
                  className="group relative text-white text-sm tracking-widest uppercase font-medium"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10 px-12 py-4 block">Find Your Center</span>
                  <div className="absolute inset-0 border border-[#B7C9B7]/30 group-hover:border-[#B7C9B7]/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-[#B7C9B7]/5 group-hover:bg-[#B7C9B7]/10 transition-all duration-300"></div>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button 
                  className="group relative text-white text-sm tracking-widest uppercase font-medium"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10 px-12 py-4 block flex items-center">
                    Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 border border-[#B7C9B7]/30 group-hover:border-[#B7C9B7]/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-[#B7C9B7]/5 group-hover:bg-[#B7C9B7]/10 transition-all duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 