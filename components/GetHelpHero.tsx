"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ScrollIndicator } from "./ui/scroll-indicator"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const emergencyContacts = [
  {
    text: "911",
    link: "tel:911",
    details: "For overdose emergencies"
  },
  {
    text: "1-800-222-1222",
    link: "tel:1-800-222-1222",
    details: "Poison Control Center"
  },
  {
    text: "1-800-662-4357",
    link: "tel:1-800-662-4357",
    details: "SAMHSA's Treatment Helpline"
  },
  {
    text: "HOME to 741741",
    link: "sms:741741?&body=HOME",
    details: "Crisis Text Line",
    isText: true
  }
]

export default function GetHelpHero() {
  return (
    <section className="relative min-h-[90vh] bg-black overflow-hidden">
      {/* Background Image with enhanced styling */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/help-buoy.jpg')] bg-cover bg-center"
          style={{ filter: "brightness(0.4) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#B7C9B7]/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B7C9B7]/[0.05] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-[#B7C9B7]/30"></div>
        <div className="w-2 h-2 bg-[#B7C9B7]/30 rounded-full mx-auto mt-2"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-12 pt-32 pb-16 min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-20 items-center w-full">
          {/* Hero Content - Left Column */}
          <motion.div 
            className="text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
                  Addiction Crisis Resources
                </p>
                <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                  Help is here for
                  <br />
                  <span className="italic font-serif text-[#B7C9B7]">addiction recovery</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-light text-white/90 max-w-xl leading-relaxed">
                If you or someone you know is experiencing an overdose or addiction crisis, immediate help is available through these emergency services.
              </p>
            </motion.div>
          </motion.div>

          {/* Crisis Alert - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <Card className="border-red-200/20 bg-red-950/20 backdrop-blur-sm overflow-hidden shadow-xl w-full">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-7 w-7 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-300 text-xl mb-6">
                      Emergency Addiction Support:
                    </h3>
                    <div className="space-y-4">
                      {emergencyContacts.map((contact, index) => (
                        <Link
                          key={index}
                          href={contact.link}
                          className="block p-4 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-200/20 hover:border-red-200/40 transition-all duration-300 group/contact"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-3 h-3 bg-red-400 rounded-full group-hover/contact:bg-red-300 transition-colors duration-300 animate-pulse"></div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <strong className="text-xl text-red-200 group-hover/contact:text-red-100">
                                    {contact.isText ? "Text " : ""}{contact.text}
                                  </strong>
                                  <span className={`px-3 py-1 rounded-full text-sm ${
                                    contact.isText 
                                      ? 'bg-[#B7C9B7]/20 text-[#B7C9B7]' 
                                      : 'bg-green-500/20 text-green-200'
                                  }`}>
                                    {contact.isText ? 'Text' : 'Call Now'}
                                  </span>
                                </div>
                                <span className="block mt-1 text-sm text-red-200/70">
                                  {contact.details}
                                </span>
                              </div>
                            </div>
                            <div className="text-red-300/50 group-hover/contact:text-red-200/70">
                              {contact.isText ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 