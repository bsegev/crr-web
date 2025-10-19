"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Phone, MessageSquare } from "lucide-react"
import { motion } from "motion/react"
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
    details: "For overdose emergencies",
    icon: Phone,
    urgent: true
  },
  {
    text: "1-800-222-1222",
    link: "tel:1-800-222-1222",
    details: "Poison Control Center",
    icon: Phone
  },
  {
    text: "1-800-662-4357",
    link: "tel:1-800-662-4357",
    details: "SAMHSA's Treatment Helpline",
    icon: Phone
  },
  {
    text: "HOME to 741741",
    link: "sms:741741?&body=HOME",
    details: "Crisis Text Line",
    icon: MessageSquare,
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

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 pt-24 sm:pt-32 pb-16 min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-[1fr_minmax(auto,450px)] gap-8 lg:gap-12 items-start lg:items-center w-full">
          {/* Hero Content - Left Column */}
          <motion.div 
            className="text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-light text-[#B7C9B7] tracking-widest uppercase">
                  Addiction Crisis Resources
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]">
                  Help is here for
                  <br className="hidden sm:block" />
                  <span className="italic font-serif text-[#B7C9B7]">addiction recovery</span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-xl leading-relaxed">
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
              <CardContent className="p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6">
                  <div className="flex items-center space-x-3 sm:space-x-0 mb-4 sm:mb-0">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-6 sm:h-7 w-6 sm:w-7 text-red-400" />
                    </div>
                    <h3 className="font-semibold text-red-300 text-lg sm:text-xl sm:hidden">
                      Emergency Support:
                    </h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="hidden sm:block font-semibold text-red-300 text-lg sm:text-xl mb-6">
                      Emergency Addiction Support:
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {emergencyContacts.map((contact, index) => (
                        <Link
                          key={index}
                          href={contact.link}
                          className={`block transition-all duration-300 group/contact ${
                            contact.urgent 
                              ? 'bg-red-500/20 hover:bg-red-500/30 border-red-400/30 hover:border-red-400/40' 
                              : 'bg-red-500/10 hover:bg-red-500/20 border-red-200/20 hover:border-red-200/40'
                          } border rounded-xl`}
                        >
                          <div className="flex items-center p-3 sm:p-4">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                              <contact.icon className="w-5 h-5 text-red-300" />
                            </div>
                            <div className="flex-1 min-w-0 ml-3">
                              <div className="flex items-center justify-between gap-2">
                                <div className="text-xl font-semibold text-red-200">
                                  {contact.text}
                                </div>
                                <div className={`shrink-0 inline-flex px-3 py-1 rounded-full text-xs ${
                                    contact.isText 
                                      ? 'bg-[#B7C9B7]/20 text-[#B7C9B7]' 
                                    : contact.urgent
                                      ? 'bg-red-500/30 text-red-200'
                                      : 'bg-red-500/20 text-red-300'
                                  }`}>
                                    {contact.isText ? 'Text' : 'Call Now'}
                                </div>
                              </div>
                              <p className="text-sm text-red-200/70 mt-0.5 line-clamp-1">
                                {contact.details}
                              </p>
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