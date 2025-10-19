"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Calendar, Clock } from "lucide-react"
import { motion } from "motion/react"

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8 }
}

const helpOptions = [
  {
    icon: Phone,
    title: "Immediate Phone Support",
    description: "Speak with a care coordinator right now",
    action: "Call (555) 123-4567",
    availability: "Available 24/7",
    urgent: true,
  },
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Chat with our team online",
    action: "Start Chat",
    availability: "Mon-Fri: 8AM-8PM",
    urgent: false,
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a time that works for you",
    action: "Schedule Now",
    availability: "Next available: Today",
    urgent: false,
  },
]

export default function GetHelpOptions() {
  return (
    <section className="pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {helpOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Card
                className={`border-[#B7C9B7]/30 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  option.urgent ? "ring-2 ring-[#2E7D6B] ring-opacity-20" : ""
                }`}
              >
                <CardContent className="p-8 text-center">
                  {option.urgent && (
                    <Badge className="bg-[#06402B] text-white mb-6 px-3 py-1">Recommended</Badge>
                  )}
                  <div className="w-16 h-16 bg-[#06402B]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <option.icon className="h-8 w-8 text-[#06402B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#06402B] mb-3">{option.title}</h3>
                  <p className="text-[#58605E]/80 mb-4">{option.description}</p>
                  <div className="text-sm text-[#58605E]/70 flex items-center justify-center mb-6">
                    <Clock className="h-4 w-4 mr-2" />
                    {option.availability}
                  </div>
                  <Button
                    className={`w-full bg-[#06402B] hover:bg-[#06402B]/90 transition-colors h-12`}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 