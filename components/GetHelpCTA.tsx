"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function GetHelpCTA() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#06402B] to-[#06402B]/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/nature-heal.jpg')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div 
          className="space-y-8 sm:space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Take the first step today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Recovery is possible. Healing is possible. You don't have to face this alone. 
              Our team is here to support you every step of the way.
            </p>
            <div className="text-white/80">
              <p>Available 24/7 • Confidential • No obligation</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#06402B] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 h-14 px-8 sm:px-10 text-lg font-semibold"
            >
              <Phone className="mr-3 h-5 w-5" />
              Call Now: (555) 123-4567
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 sm:px-10 text-lg"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 