"use client"

import { Label } from "@/components/ui/label"
import { Shield, Stethoscope, Leaf } from "lucide-react"
import type { FormData } from "../CenterMatchingForm"

const privacyOptions = [
  { 
    id: "very-private", 
    label: "Maximum Privacy",
    description: "Private rooms, exclusive facilities, heightened discretion",
  },
  { 
    id: "standard", 
    label: "Standard Privacy",
    description: "Balanced group setting with personal space when needed",
  },
]

const treatmentStyles = [
  { 
    id: "clinical", 
    label: "Clinical Focus",
    description: "Emphasis on medical treatment and evidence-based therapies",
    icon: Stethoscope,
  },
  { 
    id: "holistic", 
    label: "Holistic Approach",
    description: "Integration of wellness practices with traditional treatment",
    icon: Leaf,
  },
  { 
    id: "combined", 
    label: "Combined Approach",
    description: "Balanced mix of clinical treatment and holistic methods",
    icon: Shield,
  },
]

interface Step2PrioritiesProps {
  formData: FormData
  updateFormData: (field: keyof FormData, value: any) => void
}

export default function Step2Priorities({ formData, updateFormData }: Step2PrioritiesProps) {
  return (
    <div className="space-y-12">
      <div>
        <Label className="text-base font-medium text-[#06402B] mb-2 block">
          What level of privacy do you prefer?
        </Label>
        <div className="grid gap-4">
          {privacyOptions.map((option) => (
            <div 
              key={option.id}
              className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.privacyLevel === option.id 
                  ? "border-[#06402B] bg-[#06402B]/5" 
                  : "border-[#06402B]/10 hover:border-[#06402B]/30"
              }`}
              onClick={() => updateFormData("privacyLevel", option.id)}
            >
              <div>
                <h3 className="text-lg font-medium text-[#06402B] mb-1">{option.label}</h3>
                <p className="text-sm text-[#06402B]/70">{option.description}</p>
              </div>
              <div 
                className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                  formData.privacyLevel === option.id 
                    ? "border-[#06402B] opacity-100" 
                    : "border-transparent opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-medium text-[#06402B] mb-4 block">
          What treatment style do you prefer?
        </Label>
        <div className="grid gap-4">
          {treatmentStyles.map((style) => {
            const Icon = style.icon
            return (
              <div 
                key={style.id}
                className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                  formData.treatmentStyle === style.id 
                    ? "border-[#06402B] bg-[#06402B]/5" 
                    : "border-[#06402B]/10 hover:border-[#06402B]/30"
                }`}
                onClick={() => updateFormData("treatmentStyle", style.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#06402B]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#06402B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#06402B] mb-1">{style.label}</h3>
                    <p className="text-sm text-[#06402B]/70">{style.description}</p>
                  </div>
                </div>
                <div 
                  className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                    formData.treatmentStyle === style.id 
                      ? "border-[#06402B] opacity-100" 
                      : "border-transparent opacity-0"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}