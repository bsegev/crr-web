"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { CenterMatch } from "../CenterMatchingForm"
import Image from "next/image"

interface Step4ResultsProps {
  matches: CenterMatch[]
}

export default function Step4Results({ matches }: Step4ResultsProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-[#06402B] mb-2">
          Your Recommended Centers
        </h2>
        <p className="text-[#06402B]/70">
          Based on your preferences, here are your best matches
        </p>
      </div>

      <div className="grid gap-8">
        {matches.map(({ center, score }) => (
          <Card key={center.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={center.image}
                alt={center.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-[#06402B] mb-1">
                    {center.name}
                  </h3>
                  <p className="text-sm text-[#06402B]/70">{center.location}</p>
                </div>
                <div className="flex items-center gap-2 bg-[#06402B]/5 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#06402B]" />
                  <span className="text-sm font-medium text-[#06402B]">{score}% Match</span>
                </div>
              </div>

              <p className="text-[#06402B]/80 mb-6">{center.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#06402B] mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {center.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-sm text-[#06402B]/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#06402B]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-[#06402B] hover:bg-[#06402B]/90 text-white"
                onClick={() => window.location.href = "/contact"}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-[#06402B]/70 mb-4">
          Want to discuss your options with our team?
        </p>
        <Button 
          variant="outline"
          className="border-[#06402B] text-[#06402B] hover:bg-[#06402B]/5"
          onClick={() => window.location.href = "/contact"}
        >
          Contact Us
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}