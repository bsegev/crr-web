"use client"

import { Card } from "@/components/ui/card"
import { Clock, Shield, CheckCircle } from "lucide-react"
import { motion } from "motion/react"

const processSteps = [
  {
    step: 1,
    title: "Initial Contact",
    description:
      "Reach out via phone, chat, or form. We'll listen to your situation with compassion and without judgment.",
    duration: "15-30 minutes",
  },
  {
    step: 2,
    title: "Assessment & Options",
    description:
      "We'll help assess your needs and present treatment options that match your situation and preferences.",
    duration: "30-60 minutes",
  },
  {
    step: 3,
    title: "Insurance & Planning",
    description: "We'll verify your insurance benefits and help plan the logistics of treatment admission.",
    duration: "1-2 hours",
  },
  {
    step: 4,
    title: "Admission & Support",
    description: "We'll coordinate your admission and provide ongoing family support throughout treatment.",
    duration: "Ongoing",
  },
]

export default function ContactProcess() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/nature-stones.jpg')] opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-sm font-light text-[#06402B]/70 tracking-widest uppercase mb-4">Our Process</p>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#06402B] mb-6">What happens when you reach out</h2>
          <p className="text-lg text-[#06402B]/70 max-w-2xl mx-auto">
            We've designed our process to be as supportive and stress-free as possible during this difficult time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#06402B] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#06402B] mb-2">{step.title}</h3>
                    <p className="text-[#06402B]/80 mb-3 leading-relaxed">{step.description}</p>
                    <div className="text-sm text-[#06402B]/60 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Typical duration: {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-[#06402B]/10 p-8 sm:p-10 bg-[#06402B]/5">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#06402B] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#06402B] mb-4">Your privacy is protected</h3>
                    <p className="text-[#06402B]/80 leading-relaxed">
                      All conversations are confidential and HIPAA-compliant. We will never share your information without
                      your explicit consent.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "No pressure or high-pressure sales tactics",
                      "Honest, educational information only",
                      "Free insurance verification and benefits check",
                      "Ongoing family support throughout treatment"
                    ].map((text, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#06402B] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-[#06402B]/80">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 