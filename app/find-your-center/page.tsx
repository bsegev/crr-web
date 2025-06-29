"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Leaf,
  Mountain,
  Waves,
  Sun,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const steps = [
  { id: 1, title: "Treatment Focus", description: "What type of care are you seeking?" },
  { id: 2, title: "Preferences", description: "What's important in your treatment approach?" },
  { id: 3, title: "Location & Logistics", description: "Where and when do you need care?" },
  { id: 4, title: "Personal Details", description: "Help us connect you with the right team" },
  { id: 5, title: "Your Matches", description: "Personalized center recommendations" },
]

const treatmentTypes = [
  { id: "addiction", label: "Addiction Treatment", description: "Substance use disorders" },
  { id: "mental-health", label: "Mental Health", description: "Depression, anxiety, trauma" },
  { id: "dual-diagnosis", label: "Dual Diagnosis", description: "Combined addiction & mental health" },
  { id: "eating-disorders", label: "Eating Disorders", description: "Anorexia, bulimia, binge eating" },
  { id: "trauma", label: "Trauma Recovery", description: "PTSD, complex trauma" },
  { id: "family-therapy", label: "Family Therapy", description: "Relationship and family healing" },
]

const treatmentApproaches = [
  { id: "holistic", label: "Holistic & Integrative", description: "Mind, body, spirit approach" },
  { id: "evidence-based", label: "Evidence-Based", description: "Research-proven methods" },
  { id: "nature-immersive", label: "Nature-Immersive", description: "Outdoor and wilderness therapy" },
  { id: "luxury", label: "Luxury Amenities", description: "Premium accommodations and services" },
  { id: "cultural", label: "Culturally Specific", description: "Culturally competent care" },
  { id: "family-focused", label: "Family-Focused", description: "Comprehensive family involvement" },
]

const locations = [
  { id: "california", label: "California", description: "Malibu, Monterey, Napa Valley" },
  { id: "costa-rica", label: "Costa Rica", description: "Tropical healing environments" },
  { id: "international", label: "Other International", description: "Global network locations" },
  { id: "flexible", label: "Open to Options", description: "Show me all possibilities" },
]

const centers = [
  {
    id: "malibu-sanctuary",
    name: "Malibu Sanctuary",
    location: "Malibu, California",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    specialties: ["addiction", "dual-diagnosis", "trauma"],
    approaches: ["holistic", "luxury", "nature-immersive"],
    locationTag: "california",
    description: "Oceanfront healing with luxury amenities and holistic care",
    features: ["Private beach access", "Equine therapy", "Gourmet nutrition", "Spa services"],
  },
  {
    id: "monterey-wellness",
    name: "Monterey Wellness Center",
    location: "Monterey, California",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    specialties: ["mental-health", "eating-disorders", "family-therapy"],
    approaches: ["evidence-based", "family-focused", "cultural"],
    locationTag: "california",
    description: "Evidence-based care with strong family integration programs",
    features: ["Family therapy intensive", "Cultural competency", "Research-based protocols", "Alumni network"],
  },
  {
    id: "costa-rica-retreat",
    name: "Costa Rica Healing Retreat",
    location: "Guanacaste, Costa Rica",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
    specialties: ["addiction", "trauma", "mental-health"],
    approaches: ["nature-immersive", "holistic", "cultural"],
    locationTag: "costa-rica",
    description: "Tropical immersion therapy with adventure-based healing",
    features: ["Surf therapy", "Jungle immersion", "Yoga & meditation", "Adventure therapy"],
  },
  {
    id: "napa-recovery",
    name: "Napa Valley Recovery",
    location: "Napa Valley, California",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    specialties: ["addiction", "dual-diagnosis", "family-therapy"],
    approaches: ["luxury", "evidence-based", "family-focused"],
    locationTag: "california",
    description: "Wine country serenity with comprehensive family programs",
    features: ["Vineyard therapy", "Family workshops", "Luxury accommodations", "Culinary therapy"],
  },
]

export default function FindYourCenterPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    treatmentTypes: [] as string[],
    primaryConcern: "",
    approaches: [] as string[],
    environment: "",
    location: "",
    budget: "",
    timeline: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "",
    additionalInfo: "",
  })
  const [matches, setMatches] = useState<Array<{ center: (typeof centers)[0]; score: number }>>([])

  const calculateMatches = () => {
    const centerScores = centers.map((center) => {
      let score = 0
      let maxScore = 0

      // Treatment type matching (40% weight)
      const treatmentWeight = 40
      const treatmentMatches = formData.treatmentTypes.filter((type) => center.specialties.includes(type)).length
      const treatmentScore =
        formData.treatmentTypes.length > 0 ? (treatmentMatches / formData.treatmentTypes.length) * treatmentWeight : 0
      score += treatmentScore
      maxScore += treatmentWeight

      // Approach matching (30% weight)
      const approachWeight = 30
      const approachMatches = formData.approaches.filter((approach) => center.approaches.includes(approach)).length
      const approachScore =
        formData.approaches.length > 0 ? (approachMatches / formData.approaches.length) * approachWeight : 0
      score += approachScore
      maxScore += approachWeight

      // Location matching (20% weight)
      const locationWeight = 20
      const locationScore =
        formData.location === center.locationTag || formData.location === "flexible" ? locationWeight : 0
      score += locationScore
      maxScore += locationWeight

      // Environment preference (10% weight)
      const environmentWeight = 10
      const environmentScore = environmentWeight // Simplified for demo
      score += environmentScore
      maxScore += environmentWeight

      return {
        center,
        score: Math.round((score / maxScore) * 100),
      }
    })

    return centerScores.sort((a, b) => b.score - a.score)
  }

  const handleNext = () => {
    if (currentStep === 4) {
      const calculatedMatches = calculateMatches()
      setMatches(calculatedMatches)
    }
    setCurrentStep(Math.min(currentStep + 1, 5))
  }

  const handlePrevious = () => {
    setCurrentStep(Math.max(currentStep - 1, 1))
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayField = (field: "treatmentTypes" | "approaches", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value],
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.treatmentTypes.length > 0
      case 2:
        return formData.approaches.length > 0
      case 3:
        return formData.location && formData.timeline
      case 4:
        return formData.firstName && formData.lastName && formData.email
      default:
        return true
    }
  }

  const getStarRating = (score: number) => {
    const stars = Math.round((score / 100) * 5)
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F7F9F8]/95 backdrop-blur-sm z-50 border-b border-[#CFE3DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 border border-white rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-semibold text-[#58605E]">IWC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/network" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Network
              </Link>
              <Link href="/why-iwc" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Why IWC
              </Link>
              <Link href="/contact" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Contact
              </Link>
              <Link href="/get-help">
                <Button className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 h-12 px-6">Get Help</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 h-12 w-12 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#CFE3DB]">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/network" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors py-2">
                  Network
                </Link>
                <Link href="/why-iwc" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors py-2">
                  Why IWC
                </Link>
                <Link href="/contact" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors py-2">
                  Contact
                </Link>
                <Link href="/get-help" className="pt-2">
                  <Button className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 w-full h-12">Get Help</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-[#2E7D6B]/5 mb-4">
              Center Matching
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#58605E] mb-4">
              Which center is right for you?
            </h1>
            <p className="text-lg sm:text-xl text-[#58605E]/80 max-w-2xl mx-auto">
              Answer a few questions to get personalized recommendations from our network of healing centers.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep > step.id
                        ? "bg-[#2E7D6B] text-white"
                        : currentStep === step.id
                          ? "bg-[#2E7D6B] text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="h-4 w-4" /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 sm:w-16 h-0.5 mx-2 ${currentStep > step.id ? "bg-[#2E7D6B]" : "bg-gray-200"}`}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={(currentStep / steps.length) * 100} className="h-2" />
            <div className="text-center mt-2 text-sm text-[#58605E]/70">
              Step {currentStep} of {steps.length}
            </div>
          </div>

          {/* Form Steps */}
          <Card className="border-[#CFE3DB]">
            <CardHeader>
              <CardTitle className="text-[#58605E]">{steps[currentStep - 1].title}</CardTitle>
              <p className="text-[#58605E]/70">{steps[currentStep - 1].description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Treatment Focus */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-[#58605E] mb-4 block">
                      What type of treatment are you seeking? (Select all that apply)
                    </Label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {treatmentTypes.map((type) => (
                        <div key={type.id} className="flex items-start space-x-3">
                          <Checkbox
                            id={type.id}
                            checked={formData.treatmentTypes.includes(type.id)}
                            onCheckedChange={() => toggleArrayField("treatmentTypes", type.id)}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor={type.id}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {type.label}
                            </Label>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="primaryConcern" className="text-base font-medium text-[#58605E] mb-2 block">
                      What's your primary concern or goal? (Optional)
                    </Label>
                    <Textarea
                      id="primaryConcern"
                      placeholder="Tell us more about what you're hoping to address..."
                      value={formData.primaryConcern}
                      onChange={(e) => updateFormData("primaryConcern", e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Preferences */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-[#58605E] mb-4 block">
                      What treatment approaches appeal to you? (Select all that apply)
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
                            <p className="text-xs text-muted-foreground">{approach.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-[#58605E] mb-4 block">
                      What type of environment feels most healing to you?
                    </Label>
                    <RadioGroup
                      value={formData.environment}
                      onValueChange={(value) => updateFormData("environment", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ocean" id="ocean" />
                        <Label htmlFor="ocean" className="flex items-center space-x-2">
                          <Waves className="h-4 w-4 text-blue-500" />
                          <span>Ocean & coastal settings</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mountains" id="mountains" />
                        <Label htmlFor="mountains" className="flex items-center space-x-2">
                          <Mountain className="h-4 w-4 text-green-600" />
                          <span>Mountains & forests</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tropical" id="tropical" />
                        <Label htmlFor="tropical" className="flex items-center space-x-2">
                          <Sun className="h-4 w-4 text-yellow-500" />
                          <span>Tropical & warm climates</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="countryside" id="countryside" />
                        <Label htmlFor="countryside" className="flex items-center space-x-2">
                          <Leaf className="h-4 w-4 text-green-500" />
                          <span>Countryside & vineyards</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 3: Location & Logistics */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-[#58605E] mb-4 block">
                      Where would you prefer to receive treatment?
                    </Label>
                    <RadioGroup value={formData.location} onValueChange={(value) => updateFormData("location", value)}>
                      {locations.map((location) => (
                        <div key={location.id} className="flex items-start space-x-2">
                          <RadioGroupItem value={location.id} id={location.id} className="mt-1" />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor={location.id}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {location.label}
                            </Label>
                            <p className="text-xs text-muted-foreground">{location.description}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-[#58605E] mb-4 block">
                      What's your budget range for treatment?
                    </Label>
                    <RadioGroup value={formData.budget} onValueChange={(value) => updateFormData("budget", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="insurance" id="insurance" />
                        <Label htmlFor="insurance">Insurance coverage (we'll verify benefits)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate" />
                        <Label htmlFor="moderate">$30,000 - $60,000 per month</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="premium" id="premium" />
                        <Label htmlFor="premium">$60,000+ per month</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="discuss" id="discuss" />
                        <Label htmlFor="discuss">I'd like to discuss options</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-[#58605E] mb-4 block">
                      When are you looking to start treatment?
                    </Label>
                    <RadioGroup value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="immediate" id="immediate" />
                        <Label htmlFor="immediate">Immediately (within 1-2 weeks)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="soon" id="soon" />
                        <Label htmlFor="soon">Soon (within 1 month)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="planning" id="planning" />
                        <Label htmlFor="planning">Planning ahead (1-3 months)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exploring" id="exploring" />
                        <Label htmlFor="exploring">Just exploring options</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 4: Personal Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-[#58605E] mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-[#58605E] mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-[#58605E] mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-[#58605E] mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-[#58605E] mb-4 block">
                      What's your relationship to the person seeking treatment?
                    </Label>
                    <RadioGroup
                      value={formData.relationship}
                      onValueChange={(value) => updateFormData("relationship", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="self" id="self" />
                        <Label htmlFor="self">I'm seeking treatment for myself</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="parent" id="parent" />
                        <Label htmlFor="parent">I'm a parent seeking help for my child</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="spouse" id="spouse" />
                        <Label htmlFor="spouse">I'm seeking help for my spouse/partner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="family" id="family" />
                        <Label htmlFor="family">I'm a family member or friend</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="professional" id="professional" />
                        <Label htmlFor="professional">I'm a healthcare professional</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="text-sm font-medium text-[#58605E] mb-2 block">
                      Additional Information (Optional)
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Anything else you'd like us to know about your situation or preferences..."
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Results */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-serif text-[#58605E] mb-2">Your Personalized Matches</h3>
                    <p className="text-[#58605E]/70">
                      Based on your preferences, here are the centers that best match your needs:
                    </p>
                  </div>

                  <div className="space-y-6">
                    {matches.map((match, index) => (
                      <Card key={match.center.id} className="border-[#CFE3DB] overflow-hidden">
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
                                  <Badge variant="outline" className="bg-[#2E7D6B]/10 text-[#2E7D6B] border-[#2E7D6B]">
                                    #{index + 1} Match
                                  </Badge>
                                  <div className="flex items-center space-x-1">
                                    {getStarRating(match.score)}
                                    <span className="text-sm font-medium text-[#58605E] ml-2">
                                      {match.score}% Match
                                    </span>
                                  </div>
                                </div>
                                <h4 className="text-xl font-semibold text-[#58605E] mb-1">{match.center.name}</h4>
                                <div className="flex items-center text-[#58605E]/70 mb-2">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span className="text-sm">{match.center.location}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-[#58605E]/80 mb-4">{match.center.description}</p>

                            <div className="space-y-3">
                              <div>
                                <h5 className="text-sm font-medium text-[#58605E] mb-2">Key Features:</h5>
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
                              <Button className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 flex-1">
                                <Phone className="h-4 w-4 mr-2" />
                                Schedule Consultation
                              </Button>
                              <Button
                                variant="outline"
                                className="border-[#2E7D6B] text-[#2E7D6B] flex-1 bg-transparent"
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

                  <Card className="border-[#2E7D6B] bg-[#2E7D6B]/5 p-6 text-center">
                    <h4 className="text-lg font-semibold text-[#58605E] mb-2">Ready to take the next step?</h4>
                    <p className="text-[#58605E]/80 mb-4">
                      Our care coordinators are standing by to discuss your options and answer any questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90">
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now: (555) 123-4567
                      </Button>
                      <Button size="lg" variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-transparent">
                        <Calendar className="h-5 w-5 mr-2" />
                        Schedule Callback
                      </Button>
                    </div>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          {currentStep < 5 && (
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-[#2E7D6B] text-[#2E7D6B] bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!canProceed()} className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90">
                {currentStep === 4 ? "Get My Matches" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
