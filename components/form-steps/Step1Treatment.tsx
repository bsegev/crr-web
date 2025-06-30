"use client"

import { Label } from "@/components/ui/label"
import type { FormData } from "../CenterMatchingForm"

const treatmentOptions = [
  { 
    id: "primary", 
    label: "Primary Addiction Treatment",
    description: "Comprehensive medical treatment for substance use disorders, including detox if needed",
  },
  { 
    id: "dual-diagnosis", 
    label: "Dual Diagnosis Treatment",
    description: "Combined treatment for addiction and mental health conditions",
  },
  { 
    id: "wellness", 
    label: "Recovery & Wellness",
    description: "Ongoing support, aftercare, and wellness programs for maintaining recovery",
  },
]

interface Step1TreatmentProps {
  formData: FormData
  updateFormData: (field: keyof FormData, value: any) => void
}

export default function Step1Treatment({ formData, updateFormData }: Step1TreatmentProps) {
  return (
    <div className="space-y-8">
      <div>
        <Label className="text-base font-medium text-[#06402B] mb-4 block">
          What type of care are you seeking?
        </Label>
        <div className="grid gap-4">
          {treatmentOptions.map((option) => (
            <div 
              key={option.id}
              className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.treatmentType === option.id 
                  ? "border-[#06402B] bg-[#06402B]/5" 
                  : "border-[#06402B]/10 hover:border-[#06402B]/30"
              }`}
              onClick={() => updateFormData("treatmentType", option.id)}
            >
              <div>
                <h3 className="text-lg font-medium text-[#06402B] mb-1">{option.label}</h3>
                <p className="text-sm text-[#06402B]/70">{option.description}</p>
              </div>
              <div 
                className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                  formData.treatmentType === option.id 
                    ? "border-[#06402B] opacity-100" 
                    : "border-transparent opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 