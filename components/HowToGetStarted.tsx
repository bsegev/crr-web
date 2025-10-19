"use client"
import React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { Phone, MessageCircle, ClipboardCheck } from "lucide-react"

const HowToGetStarted = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Reach Out to Us",
      description: "Contact our admissions team via phone, email, or our online form."
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Confidential Consultation",
      description: "We'll listen to your story, answer your questions, and discuss how we can support you."
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Personalized Plan",
      description: "Together, we'll develop a treatment plan tailored to your needs."
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl py-16 sm:py-20 md:py-24 lg:py-28"
        >
          {/* Background Image */}
          <img
            src="/bridge.jpg"
            alt="Begin your recovery journey"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            style={{ filter: "brightness(0.4) contrast(1.1)" }}
          />
          
          {/* Content Overlay */}
          <div className="relative z-10 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 max-w-5xl w-full">
              {/* Header */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm font-light text-orange tracking-widest uppercase">
                  Begin Your Journey
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-light text-white leading-[1.1] tracking-[-0.02em]">
                  Three Simple Steps to{" "}
                  <span className="italic font-serif text-orange">Start Your Recovery</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg font-secondary font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Taking the first step toward recovery can be challenging, but you don't have to do it alone. 
                  Our admissions team is here to guide you with compassion and understanding.
                </p>
              </div>

              {/* 3 Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300">
                      {/* Step Number */}
                      <div className="text-orange text-xs font-bold tracking-widest mb-3">
                        STEP {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange/20 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-base sm:text-lg font-secondary font-medium text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-secondary font-light text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4 sm:pt-6 space-y-3"
              >
                {/* Phone Number */}
                <div className="text-center">
                  <p className="text-white/80 text-xs sm:text-sm mb-2">Call or Text Us Now</p>
                  <a 
                    href="tel:+18668041793"
                    className="text-xl sm:text-2xl md:text-3xl font-secondary font-light text-orange hover:text-orange-light transition-colors inline-block"
                  >
                    (866) 804-1793
                  </a>
                </div>

                {/* Button */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link href="/contact">
                    <motion.button 
                      className="group relative text-white text-xs sm:text-sm tracking-widest uppercase font-secondary font-bold touch-manipulation"
                      style={{ letterSpacing: '0.02em' }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="relative z-10 px-8 sm:px-10 py-2.5 sm:py-3 block">Start Your Recovery Today</span>
                      <div className="absolute inset-0 border border-orange/30 group-hover:border-orange/60 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-orange/5 group-hover:bg-orange/10 transition-all duration-300"></div>
                    </motion.button>
                  </Link>
                </div>

                <p className="text-white/60 text-[10px] sm:text-xs">
                  Available 24/7 for Confidential Consultations
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToGetStarted

