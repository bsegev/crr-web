"use client"
import React from "react"
import { motion } from "motion/react"
import { Heart, Lightbulb, Shield } from "lucide-react"

const MissionVision = () => {
  const cards = [
    {
      icon: Heart,
        title: "Beauty & Natural Grace",
        description: "Natural beauty and dignified spaces create the perfect environment for transformation and renewal."
    },
    {
        icon: Lightbulb,
        title: "Wisdom & Excellence",
        description: "We blend timeless healing wisdom with modern expertise to deliver the highest standard of personalized care."
    },
    {
        icon: Shield,
        title: "Trust & Discretion",
        description: "Your privacy is sacred. We maintain complete confidentiality in every aspect of your healing journey."
    }
  ]

  return (
    <section className="relative bg-white py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-forest-deep/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-water-deep/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Top Content */}
        <motion.div 
          className="mb-16 sm:mb-20 md:mb-24 text-left sm:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Editorial eyebrow */}
          <p className="text-sm font-light text-forest-deep tracking-widest uppercase mb-6 sm:mb-8">
            Centered in Truth
          </p>
          <div className="w-16 h-px bg-forest-deep/20 mb-8 sm:mb-12 sm:mx-auto"></div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-primary text-stone-darkest leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8">
            Guided by
            <br />
            <span className="italic text-forest-deep">nature's grace</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light text-stone-darker max-w-3xl sm:mx-auto leading-relaxed">
            Every decision we make is anchored in our commitment to transformative care that honors your dignity.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 relative overflow-hidden border border-forest-light/20 group-hover:border-forest-light/40 transition-all duration-500 shadow-sm group-hover:shadow-md">
                {/* Icon Container */}
                <div className="relative z-10">
                  <motion.div 
                    className="relative mb-6 sm:mb-8 inline-block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative ring */}
                    <div className="absolute inset-0 border-2 border-forest-deep/20 rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                    {/* Icon */}
                    <div className="relative z-10 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center">
                      <card.icon className="w-6 sm:w-7 h-6 sm:h-7 text-forest-deep transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-primary text-forest-deep mb-3 sm:mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg font-light text-stone-darker leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-px h-8 bg-forest-deep/20 group-hover:h-16 transition-all duration-700" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-forest-deep/20 group-hover:w-16 transition-all duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 w-px h-8 bg-forest-deep/20 group-hover:h-16 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 h-px w-8 bg-forest-deep/20 group-hover:w-16 transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVision 