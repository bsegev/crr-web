"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Mail, Calendar } from "lucide-react"
import type { CenterMatch } from "../CenterMatchingForm"

interface Step5ResultsProps {
  matches: CenterMatch[]
}

export default function Step5Results({ matches }: Step5ResultsProps) {
  const getStarRating = (score: number) => {
    const stars = Math.round((score / 100) * 5)
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif text-[#06402B] mb-2">Your Personalized Matches</h3>
        <p className="text-[#06402B]/70">
          Based on your preferences, here are the centers that best match your needs:
        </p>
      </div>

      <div className="space-y-6">
        {matches.map((match, index) => (
          <Card key={match.center.id} className="border-[#06402B]/10 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img
                  src={match.center.image || "/placeholder.svg"}
                  alt={match.center.name}
                  className="w-full h-48 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="bg-[#06402B]/10 text-[#06402B] border-[#06402B]">
                        #{index + 1} Match
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {getStarRating(match.score)}
                        <span className="text-sm font-medium text-[#06402B] ml-2">
                          {match.score}% Match
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-[#06402B] mb-1">{match.center.name}</h4>
                    <div className="flex items-center text-[#06402B]/70 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{match.center.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#06402B]/80 mb-4">{match.center.description}</p>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-[#06402B] mb-2">Key Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {match.center.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button className="bg-[#06402B] hover:bg-[#06402B]/90 flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#06402B] text-[#06402B] flex-1 bg-transparent hover:bg-[#06402B]/5"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Request Information
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="border-[#06402B] bg-[#06402B]/5 p-6 text-center">
        <h4 className="text-lg font-semibold text-[#06402B] mb-2">Ready to take the next step?</h4>
        <p className="text-[#06402B]/80 mb-4">
          Our care coordinators are standing by to discuss your options and answer any questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#06402B] hover:bg-[#06402B]/90">
            <Phone className="h-5 w-5 mr-2" />
            Call Now: (555) 123-4567
          </Button>
          <Button size="lg" variant="outline" className="border-[#06402B] text-[#06402B] bg-transparent hover:bg-[#06402B]/5">
            <Calendar className="h-5 w-5 mr-2" />
            Schedule Callback
          </Button>
        </div>
      </Card>
    </div>
  )
} 