"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"

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

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8 }
}

const contactMethods = [
  {
    icon: Phone,
    title: "24/7 Crisis Support",
    description: "Immediate help when you need it most",
    contact: "(555) 123-4567",
    availability: "Available 24/7",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "Care Coordination",
    description: "Personalized guidance and assistance",
    contact: "care@iwc-network.com",
    availability: "Response within 2 hours",
    action: "Email Us",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about our network and services",
    contact: "info@iwc-network.com",
    availability: "Response within 24 hours",
    action: "Send Message",
  },
]

export default function ContactMethods() {
  return (
    <section className="relative py-24 md:py-32 px-8 md:px-12 bg-[#F9FAF9] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#06402B]/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#B7C9B7]/[0.05] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16 text-center"
        >
          {/* Heading Section */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-block">
              <p className="text-sm font-light text-[#06402B] tracking-widest uppercase mb-4">
                Get Support
              </p>
              <h2 className="text-3xl md:text-5xl font-light text-black leading-tight tracking-[-0.02em]">
                Choose your path to
                <br />
                <span className="italic font-serif text-[#06402B]">connection</span>
              </h2>
            </div>
            <p className="text-xl font-light text-black/70 max-w-2xl mx-auto leading-relaxed">
              Whether you need immediate assistance or want to explore your options, we're here to support you every step of the way.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 sm:gap-8"
            variants={fadeInUp}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Card className="group relative p-8 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#F9FAF9] transition-all duration-500">
                  <div className="absolute inset-0 border border-[#B7C9B7]/20 rounded-2xl group-hover:border-[#B7C9B7]/40 transition-colors duration-300" />
                  <div className="relative space-y-6">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06402B]/5 to-[#06402B]/10 flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <method.icon className="w-5 h-5 text-[#06402B]/60" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-light text-[#06402B] mb-3">{method.title}</h3>
                      <p className="text-black/70 leading-relaxed">{method.description}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-[#06402B]">{method.contact}</div>
                      <div className="text-sm text-black/50">{method.availability}</div>
                    </div>
                    <div className="pt-2">
                      <Button 
                        variant="outline" 
                        className="w-full border-[#B7C9B7] text-[#06402B] hover:bg-[#06402B] hover:text-white group-hover:border-[#06402B]/30 transition-all duration-300"
                      >
                        {method.action}
                      </Button>
                    </div>
                    <div className="w-12 h-[1px] bg-gradient-to-r from-[#B7C9B7]/30 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 