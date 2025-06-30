"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, DollarSign, Clock } from "lucide-react"
import type { FormData } from "../CenterMatchingForm"

const locations = [
  { id: "california", label: "California", description: "Malibu, Monterey, Napa Valley" },
  { id: "costa-rica", label: "Costa Rica", description: "Tropical healing environments" },
  { id: "international", label: "Other International", description: "Global network locations" },
  { id: "flexible", label: "Open to Options", description: "Show me all possibilities" },
]

const budgetOptions = [
  { id: "insurance", label: "Insurance coverage", description: "We'll verify benefits" },
  { id: "moderate", label: "Moderate Budget", description: "$30,000 - $60,000 per month" },
  { id: "premium", label: "Premium Care", description: "$60,000+ per month" },
  { id: "discuss", label: "Let's Discuss", description: "Explore options together" },
]

const timelineOptions = [
  { id: "immediate", label: "Immediately", description: "Within 1-2 weeks" },
  { id: "soon", label: "Soon", description: "Within 1 month" },
  { id: "planning", label: "Planning Ahead", description: "1-3 months" },
  { id: "exploring", label: "Just Exploring", description: "No immediate timeline" },
]

interface Step3LocationProps {
  formData: FormData
  updateFormData: (field: keyof FormData, value: any) => void
}

export default function Step3Location({ formData, updateFormData }: Step3LocationProps) {
  return (
    <div className="space-y-12">
      <div>
        <Label className="text-base font-medium text-[#06402B] mb-4 block">
          Where would you prefer to receive treatment?
        </Label>
        <div className="grid sm:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className={`relative p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.location === loc.id 
                  ? "border-[#06402B] bg-[#06402B]/5" 
                  : "border-[#06402B]/10 hover:border-[#06402B]/30"
              }`}
              onClick={() => updateFormData("location", loc.id)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#06402B]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#06402B]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#06402B]">{loc.label}</h3>
                  <p className="text-sm text-[#06402B]/70">{loc.description}</p>
                </div>
              </div>
              <div 
                className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                  formData.location === loc.id 
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
          What's your budget range for treatment?
        </Label>
        <div className="grid sm:grid-cols-2 gap-4">
          {budgetOptions.map((opt) => (
            <div 
              key={opt.id}
              className={`relative p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.budget === opt.id 
                  ? "border-[#06402B] bg-[#06402B]/5" 
                  : "border-[#06402B]/10 hover:border-[#06402B]/30"
              }`}
              onClick={() => updateFormData("budget", opt.id)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#06402B]/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#06402B]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#06402B]">{opt.label}</h3>
                  <p className="text-sm text-[#06402B]/70">{opt.description}</p>
                </div>
              </div>
              <div 
                className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                  formData.budget === opt.id 
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
          When are you looking to start treatment?
        </Label>
        <div className="grid sm:grid-cols-2 gap-4">
          {timelineOptions.map((opt) => (
            <div 
              key={opt.id}
              className={`relative p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.timeline === opt.id 
                  ? "border-[#06402B] bg-[#06402B]/5" 
                  : "border-[#06402B]/10 hover:border-[#06402B]/30"
              }`}
              onClick={() => updateFormData("timeline", opt.id)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#06402B]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#06402B]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#06402B]">{opt.label}</h3>
                  <p className="text-sm text-[#06402B]/70">{opt.description}</p>
                </div>
              </div>
              <div 
                className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                  formData.timeline === opt.id 
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