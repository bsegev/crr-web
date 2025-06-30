"use client"

import { Label } from "@/components/ui/label"
import { Plane, Clock, MapPin } from "lucide-react"
import type { FormData } from "../CenterMatchingForm"

const travelOptions = [
  { 
    id: "domestic", 
    label: "Prefer U.S. Based",
    description: "Treatment centers in California",
    icon: MapPin,
  },
  { 
    id: "international", 
    label: "Open to International",
    description: "Including our Costa Rica locations",
    icon: Plane,
  },
  { 
    id: "no-preference", 
    label: "No Preference",
    description: "Show me all available options",
    icon: MapPin,
  },
]

const timelineOptions = [
  { 
    id: "immediate", 
    label: "As Soon as Possible",
    description: "Ready to begin within 1-2 weeks",
  },
  { 
    id: "soon", 
    label: "Within a Month",
    description: "Planning to start in the next few weeks",
  },
  { 
    id: "planning", 
    label: "Future Planning",
    description: "Researching options for the future",
  },
]

interface Step3PracticalProps {
  formData: FormData
  updateFormData: (field: keyof FormData, value: any) => void
}

export default function Step3Practical({ formData, updateFormData }: Step3PracticalProps) {
  return (
    <div className="space-y-12">
      <div>
        <Label className="text-base font-medium text-[#06402B] mb-4 block">
          What are your location preferences?
        </Label>
        <div className="grid gap-4">
          {travelOptions.map((option) => {
            const Icon = option.icon
            return (
              <div 
                key={option.id}
                className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                  formData.travelPreference === option.id 
                    ? "border-[#06402B] bg-[#06402B]/5" 
                    : "border-[#06402B]/10 hover:border-[#06402B]/30"
                }`}
                onClick={() => updateFormData("travelPreference", option.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#06402B]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#06402B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#06402B] mb-1">{option.label}</h3>
                    <p className="text-sm text-[#06402B]/70">{option.description}</p>
                  </div>
                </div>
                <div 
                  className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                    formData.travelPreference === option.id 
                      ? "border-[#06402B] opacity-100" 
                      : "border-transparent opacity-0"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <Label className="text-base font-medium text-[#06402B] mb-4 block">
          When would you like to begin treatment?
        </Label>
        <div className="grid gap-4">
          {timelineOptions.map((option) => (
            <div 
              key={option.id}
              className={`relative p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.timeline === option.id 
                  ? "border-[#06402B] bg-[#06402B]/5" 
                  : "border-[#06402B]/10 hover:border-[#06402B]/30"
              }`}
              onClick={() => updateFormData("timeline", option.id)}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#06402B]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#06402B]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#06402B] mb-1">{option.label}</h3>
                  <p className="text-sm text-[#06402B]/70">{option.description}</p>
                </div>
              </div>
              <div 
                className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 ${
                  formData.timeline === option.id 
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