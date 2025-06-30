"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8 }
}

const crisisResources = [
  {
    title: "National Suicide Prevention Lifeline",
    phone: "988",
    description: "24/7 crisis support for suicidal thoughts",
    available: "24/7",
  },
  {
    title: "Crisis Text Line",
    phone: "Text HOME to 741741",
    description: "24/7 text-based crisis support",
    available: "24/7",
  },
  {
    title: "SAMHSA National Helpline",
    phone: "1-800-662-4357",
    description: "Treatment referral and information service",
    available: "24/7",
  },
]

export default function GetHelpCrisis() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#06402B] mb-6">Additional crisis resources</h2>
          <p className="text-lg text-[#58605E]/70 max-w-2xl mx-auto">
            If you need immediate crisis support, these national resources are available 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {crisisResources.map((resource, index) => (
            <motion.div
              key={index}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
            >
              <Card className="border-[#B7C9B7]/30 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#06402B]">{resource.title}</h3>
                    <div className="text-2xl font-bold text-[#2E7D6B]">{resource.phone}</div>
                    <p className="text-[#58605E]/80">{resource.description}</p>
                    <div className="flex items-center text-sm text-[#58605E]/60">
                      <Clock className="h-4 w-4 mr-2" />
                      {resource.available}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 