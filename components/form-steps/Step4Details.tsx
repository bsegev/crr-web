"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FormData } from "../CenterMatchingForm"

const relationshipOptions = [
  { id: "self", label: "I'm seeking treatment for myself" },
  { id: "parent", label: "I'm a parent seeking help for my child" },
  { id: "spouse", label: "I'm seeking help for my spouse/partner" },
  { id: "family", label: "I'm a family member or friend" },
  { id: "professional", label: "I'm a healthcare professional" },
]

interface Step4DetailsProps {
  formData: FormData
  updateFormData: (field: keyof FormData, value: any) => void
}

export default function Step4Details({ formData, updateFormData }: Step4DetailsProps) {
  return (
    <div className="space-y-12">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="text-base font-medium text-[#06402B] mb-2 block">
            First Name *
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateFormData("firstName", e.target.value)}
            className="h-12"
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-base font-medium text-[#06402B] mb-2 block">
            Last Name *
          </Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => updateFormData("lastName", e.target.value)}
            className="h-12"
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-base font-medium text-[#06402B] mb-2 block">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="h-12"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-base font-medium text-[#06402B] mb-2 block">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            className="h-12"
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <Label className="text-base font-medium text-[#06402B] mb-4 block">
          What's your relationship to the person seeking treatment?
        </Label>
        <div className="grid sm:grid-cols-2 gap-4">
          {relationshipOptions.map((opt) => (
            <div 
              key={opt.id}
              className={`relative p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                formData.relationship === opt.id 
                  ? "border-[#06402B] bg-[#06402B]/5" 
                  : "border-[#06402B]/10 hover:border-[#06402B]/30"
              }`}
              onClick={() => updateFormData("relationship", opt.id)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                  formData.relationship === opt.id 
                    ? "border-[#06402B] bg-[#06402B]" 
                    : "border-[#06402B]/30"
                }`}>
                  {formData.relationship === opt.id && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                  )}
                </div>
                <Label className="text-sm font-medium text-[#06402B] cursor-pointer">
                  {opt.label}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="additionalInfo" className="text-base font-medium text-[#06402B] mb-2 block">
          Additional Information (Optional)
        </Label>
        <Textarea
          id="additionalInfo"
          placeholder="Anything else you'd like us to know about your situation or preferences..."
          value={formData.additionalInfo}
          onChange={(e) => updateFormData("additionalInfo", e.target.value)}
          className="min-h-[120px] resize-none"
        />
      </div>
    </div>
  )
} 