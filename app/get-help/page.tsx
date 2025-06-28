"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Heart, Users, Globe, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface Question {
  id: string
  question: string
  options: { value: string; label: string; description?: string }[]
}

const questions: Question[] = [
  {
    id: "care-type",
    question: "What type of care are you seeking?",
    options: [
      {
        value: "medical",
        label: "Medical/Clinical Treatment",
        description: "Intensive medical detox, psychiatric care, dual diagnosis",
      },
      {
        value: "integrated",
        label: "Integrated Clinical + Holistic",
        description: "Balanced approach combining medical and holistic therapies",
      },
      {
        value: "luxury",
        label: "Private/Luxury Recovery",
        description: "Discreet, elevated experience with concierge services",
      },
      {
        value: "wellness",
        label: "Wellness Retreat",
        description: "Preventive care, post-treatment support, wellness travel",
      },
    ],
  },
  {
    id: "urgency",
    question: "How urgent is your need for care?",
    options: [
      { value: "immediate", label: "Immediate (within 24-48 hours)" },
      { value: "soon", label: "Soon (within 1-2 weeks)" },
      { value: "planning", label: "Planning ahead (within 1-3 months)" },
      { value: "exploring", label: "Just exploring options" },
    ],
  },
  {
    id: "location",
    question: "Do you have a location preference?",
    options: [
      { value: "usa", label: "United States (California)" },
      { value: "costa-rica", label: "Costa Rica" },
      { value: "no-preference", label: "No preference" },
      { value: "international", label: "Open to international options" },
    ],
  },
  {
    id: "budget",
    question: "What's your budget consideration?",
    options: [
      { value: "insurance", label: "Insurance coverage preferred" },
      { value: "affordable", label: "Cost-effective options ($11-15K)" },
      { value: "premium", label: "Premium care ($30-70K)" },
      { value: "luxury", label: "Luxury/Private (Custom pricing)" },
    ],
  },
]

const recommendations = {
  "medical-immediate-usa-insurance": {
    center: "Cornerstone",
    location: "California, USA",
    color: "#4B7BAF",
    match: 95,
    reasons: [
      "Joint Commission accredited medical facility",
      "Insurance accepted",
      "24/7 medical supervision",
      "Immediate availability",
    ],
  },
  "integrated-soon-costa-rica-affordable": {
    center: "Costa Rica Recovery",
    location: "Costa Rica",
    color: "#2E7D6B",
    match: 92,
    reasons: [
      "Integrated clinical + holistic approach",
      "Cost-effective international option",
      "CARF accredited",
      "Family program included",
    ],
  },
  "luxury-planning-costa-rica-luxury": {
    center: "El Tirol",
    location: "Costa Rica",
    color: "#C8A96A",
    match: 98,
    reasons: [
      "Ultra-private luxury suites",
      "Concierge services",
      "Discreet, elevated experience",
      "Custom treatment plans",
    ],
  },
  "wellness-exploring-costa-rica-affordable": {
    center: "Nosara Treatment Center",
    location: "Costa Rica",
    color: "#2E7D6B",
    match: 89,
    reasons: [
      "Immersive wellness retreat",
      "Surf and adventure therapy",
      "Post-treatment support",
      "Preventive wellness programs",
    ],
  },
}

export default function GetHelpPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getRecommendation = () => {
    const key = `${answers["care-type"]}-${answers["urgency"]}-${answers["location"]}-${answers["budget"]}`
    return (
      recommendations[key as keyof typeof recommendations] || recommendations["integrated-soon-costa-rica-affordable"]
    )
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  if (showResults) {
    const recommendation = getRecommendation()

    return (
      <div className="min-h-screen bg-[#F7F9F8]">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-[#F7F9F8]/95 backdrop-blur-sm z-50 border-b border-[#CFE3DB]">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-full relative">
                    <div className="absolute inset-1 border border-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-semibold text-[#58605E]">IWC</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Results */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#2E7D6B]" />
              </div>
              <h1 className="text-4xl font-serif text-[#58605E] mb-4">Your Recommended Path</h1>
              <p className="text-lg text-[#58605E]/70">
                Based on your responses, we've found your ideal healing environment.
              </p>
            </div>

            <Card className="border-[#CFE3DB] mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: recommendation.color }} />
                    <div>
                      <h2 className="text-2xl font-serif text-[#58605E]">{recommendation.center}</h2>
                      <p className="text-[#58605E]/70">{recommendation.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#2E7D6B]">{recommendation.match}%</div>
                    <div className="text-sm text-[#58605E]/70">Match</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-[#58605E]">Why this is perfect for you:</h3>
                  <ul className="space-y-2">
                    {recommendation.reasons.map((reason, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#2E7D6B] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#58605E]/80">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1" style={{ backgroundColor: recommendation.color }}>
                    Learn More About {recommendation.center}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 border-[#2E7D6B] text-[#2E7D6B] bg-transparent">
                    Speak with Care Team
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-[#CFE3DB]">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-[#2E7D6B] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#58605E] mb-2">Ethical Care</h3>
                  <p className="text-sm text-[#58605E]/70">Transparent pricing and evidence-based methods</p>
                </CardContent>
              </Card>
              <Card className="border-[#CFE3DB]">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-[#2E7D6B] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#58605E] mb-2">Family Support</h3>
                  <p className="text-sm text-[#58605E]/70">Comprehensive family programs and resources</p>
                </CardContent>
              </Card>
              <Card className="border-[#CFE3DB]">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-[#2E7D6B] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#58605E] mb-2">Global Standards</h3>
                  <p className="text-sm text-[#58605E]/70">International accreditation and local expertise</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setShowResults(false)
                  setCurrentStep(0)
                  setAnswers({})
                }}
                className="text-[#58605E] hover:bg-[#CFE3DB]/30"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Start Over
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F7F9F8]/95 backdrop-blur-sm z-50 border-b border-[#CFE3DB]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 border border-white rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-semibold text-[#58605E]">IWC</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Assessment */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-[#58605E] mb-4">Find Your Path to Healing</h1>
            <p className="text-lg text-[#58605E]/70 mb-8">
              This brief assessment will help us recommend the perfect healing environment for your needs.
            </p>
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-[#58605E]/70">
                Step {currentStep + 1} of {questions.length}
              </p>
            </div>
          </div>

          <Card className="border-[#CFE3DB]">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#58605E]">{questions[currentStep].question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={answers[questions[currentStep].id] || ""}
                onValueChange={(value) => handleAnswer(questions[currentStep].id, value)}
              >
                {questions[currentStep].options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 rounded-lg border border-[#CFE3DB] hover:bg-[#CFE3DB]/20 transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="text-[#58605E] font-medium cursor-pointer">
                        {option.label}
                      </Label>
                      {option.description && <p className="text-sm text-[#58605E]/70 mt-1">{option.description}</p>}
                    </div>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="border-[#2E7D6B] text-[#2E7D6B] bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!answers[questions[currentStep].id]}
                  className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90"
                >
                  {currentStep === questions.length - 1 ? "Get Recommendation" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#58605E]/70 mb-4">
              Need immediate help? Our care coordinators are available 24/7.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-transparent">
                Speak with Care Team Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
