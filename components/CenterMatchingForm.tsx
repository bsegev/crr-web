"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"
import { useState } from "react"
import Step1Treatment from "./form-steps/Step1Treatment"
import Step2Priorities from "./form-steps/Step2Priorities"
import Step3Practical from "./form-steps/Step3Practical"
import Step4Results from "./form-steps/Step4Results"

export const steps = [
  { id: 1, title: "Treatment Focus", description: "What type of care are you seeking?" },
  { id: 2, title: "Treatment Priorities", description: "What's most important in your treatment?" },
  { id: 3, title: "Practical Details", description: "Location and timing preferences" },
  { id: 4, title: "Your Matches", description: "Personalized center recommendations" },
]

export type FormData = {
  treatmentType: string
  privacyLevel: string
  treatmentStyle: string
  locationType: string
  travelPreference: string
  timeline: string
}

export type CenterMatch = {
  center: {
    id: string
    name: string
    location: string
    image: string
    treatmentTypes: string[]
    privacyLevel: string
    treatmentStyle: string
    locationType: string
    travelRegion: string
    description: string
    features: string[]
  }
  score: number
}

const centers = [
  {
    id: "costa-rica-recovery",
    name: "Costa Rica Recovery",
    location: "San José, Costa Rica",
    image: "/centers/crr-space.jpg",
    treatmentTypes: ["primary", "dual-diagnosis"],
    privacyLevel: "very-private",
    treatmentStyle: "combined",
    locationType: "nature",
    travelRegion: "international",
    description: "Our flagship medical facility offering comprehensive addiction treatment and detox services in a tropical paradise setting.",
    features: ["Medical Detox", "24/7 Medical Staff", "Private Rooms", "Gated Estate", "Executive Program"],
  },
  {
    id: "el-tirol",
    name: "El Tirol Center",
    location: "San José Outskirts, Costa Rica",
    image: "/centers/eltirol-space.jpg",
    treatmentTypes: ["primary", "dual-diagnosis"],
    privacyLevel: "standard",
    treatmentStyle: "clinical",
    locationType: "nature",
    travelRegion: "international",
    description: "A serene mountain facility providing comprehensive addiction treatment with a focus on dual diagnosis and family healing.",
    features: ["Medical Support", "Group Setting", "Mountain Views", "Evidence-Based Treatment", "Family Program"],
  },
  {
    id: "cornerstone-socal",
    name: "Cornerstone SoCal",
    location: "Orange County, California",
    image: "/centers/cornerstone-socal.png",
    treatmentTypes: ["primary", "dual-diagnosis"],
    privacyLevel: "standard",
    treatmentStyle: "clinical",
    locationType: "urban",
    travelRegion: "domestic",
    description: "Modern medical treatment center providing comprehensive addiction care and detox services in Southern California.",
    features: ["Medical Detox", "Urban Location", "Evidence-Based Care", "Group Therapy", "Local Support Network"],
  },
  {
    id: "nosara-retreat",
    name: "Nosara Retreat Center",
    location: "Nosara, Costa Rica",
    image: "/centers/nosara-shala.jpg",
    treatmentTypes: ["wellness"],
    privacyLevel: "very-private",
    treatmentStyle: "holistic",
    locationType: "beach",
    travelRegion: "international",
    description: "A wellness-focused beachfront retreat perfect for aftercare and continued recovery support.",
    features: ["Private Villas", "Holistic Programs", "Beach Setting", "Wellness Focus", "Recovery Maintenance"],
  },
]

interface CenterMatchingFormProps {
  onComplete?: (matches: CenterMatch[]) => void
}

export default function CenterMatchingForm({ onComplete }: CenterMatchingFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    treatmentType: "",
    privacyLevel: "",
    treatmentStyle: "",
    locationType: "",
    travelPreference: "",
    timeline: "",
  })
  const [matches, setMatches] = useState<CenterMatch[]>([])

  const calculateMatches = () => {
    return centers.map(center => {
      let score = 0
      let maxPoints = 0

      // Treatment Type Match (40 points)
      maxPoints += 40
      if (formData.treatmentType === "wellness" && center.treatmentTypes.includes("wellness")) {
        score += 40
      } else if (formData.treatmentType === "dual-diagnosis" && center.treatmentTypes.includes("dual-diagnosis")) {
        score += 40
      } else if (formData.treatmentType === "primary" && center.treatmentTypes.includes("primary")) {
        score += 40
      }

      // Privacy Level Match (20 points)
      if (formData.privacyLevel) {
        maxPoints += 20
        if (center.privacyLevel === formData.privacyLevel) {
          score += 20
        } else if (formData.privacyLevel === "standard" && center.privacyLevel === "very-private") {
          score += 15 // Very private centers can accommodate standard privacy needs
        }
      }

      // Treatment Style Match (20 points)
      if (formData.treatmentStyle) {
        maxPoints += 20
        if (center.treatmentStyle === formData.treatmentStyle) {
          score += 20
        } else if (center.treatmentStyle === "combined") {
          score += 15 // Combined programs can accommodate either preference
        }
      }

      // Location Type Match (10 points)
      if (formData.locationType) {
        maxPoints += 10
        if (center.locationType === formData.locationType) {
          score += 10
        }
      }

      // Travel Preference Match (10 points)
      if (formData.travelPreference) {
        maxPoints += 10
        if (formData.travelPreference === "no-preference" ||
            (formData.travelPreference === "domestic" && center.travelRegion === "domestic") ||
            (formData.travelPreference === "international" && center.travelRegion === formData.travelPreference)) {
          score += 10
        }
      }

      // Calculate percentage
      const finalScore = maxPoints > 0 ? Math.round((score / maxPoints) * 100) : 0

      return {
        center,
        score: finalScore
      }
    })
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .filter(match => match.score > 30) // Only return matches with score > 30%
  }

  const handleNext = () => {
    if (currentStep === 3) {
      const calculatedMatches = calculateMatches()
      setMatches(calculatedMatches)
      if (onComplete) {
        onComplete(calculatedMatches)
      }
    }
    setCurrentStep(Math.min(currentStep + 1, 4))
  }

  const handlePrevious = () => {
    setCurrentStep(Math.max(currentStep - 1, 1))
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.treatmentType !== ""
      case 2:
        return formData.privacyLevel !== "" && formData.treatmentStyle !== ""
      case 3:
        return formData.travelPreference !== "" && formData.timeline !== ""
      default:
        return true
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                  currentStep > step.id
                    ? "bg-[#06402B] text-white"
                    : currentStep === step.id
                      ? "bg-[#06402B] text-white"
                      : "bg-[#06402B]/10 text-[#06402B]"
                }`}
              >
                {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : step.id}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 sm:w-24 h-0.5 mx-2 transition-colors duration-300 ${
                    currentStep > step.id ? "bg-[#06402B]" : "bg-[#06402B]/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <Progress value={(currentStep / steps.length) * 100} className="h-2 bg-[#06402B]/10" />
        <div className="text-center mt-4 text-sm text-[#06402B]/70">
          Step {currentStep} of {steps.length}
        </div>
      </div>

      {/* Form Card */}
      <Card className="border-[#06402B]/10 shadow-lg">
        <CardHeader className="border-b border-[#06402B]/10 bg-[#06402B]/5">
          <CardTitle className="text-2xl font-light text-[#06402B]">{steps[currentStep - 1].title}</CardTitle>
          <p className="text-[#06402B]/70 font-light">{steps[currentStep - 1].description}</p>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {currentStep === 1 && (
            <Step1Treatment
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 2 && (
            <Step2Priorities
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 3 && (
            <Step3Practical
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 4 && (
            <Step4Results matches={matches} />
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      {currentStep < 4 && (
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="border-[#06402B] text-[#06402B] bg-transparent hover:bg-[#06402B]/5"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-[#06402B] hover:bg-[#06402B]/90 text-white"
          >
            {currentStep === 3 ? "See Matches" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
} 