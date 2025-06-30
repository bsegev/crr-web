"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import type { FormData } from "../CenterMatchingForm"

const treatmentApproaches = [
  { id: "evidence-based", label: "Evidence-Based Treatment", description: "Proven medical and therapeutic approaches" },
  { id: "nature-immersive", label: "Nature-Integrated", description: "Healing through natural environments" },
  { id: "family-focused", label: "Family-Inclusive", description: "Programs involving family support" },
  { id: "luxury", label: "Premium Care", description: "Elevated amenities and comfort" },
]

interface Step2PreferencesProps {
  formData: FormData
  updateFormData: (field: keyof FormData, value: any) => void
  toggleArrayField: (field: "treatmentTypes" | "approaches", value: string) => void
}

export default function Step2Preferences({ formData, updateFormData, toggleArrayField }: Step2PreferencesProps) {
  return (
    <div className="space-y-12">
      <div>
        <Label className="text-base font-medium text-[#06402B] mb-4 block">
          What aspects of treatment are most important to you? (Select all that apply)
        </Label>
        <div className="grid sm:grid-cols-2 gap-4">
          {treatmentApproaches.map((approach) => (
            <div key={approach.id} className="flex items-start space-x-3">
              <Checkbox
                id={approach.id}
                checked={formData.approaches.includes(approach.id)}
                onCheckedChange={() => toggleArrayField("approaches", approach.id)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor={approach.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {approach.label}
                </Label>
                <p className="text-xs text-[#06402B]/70">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 