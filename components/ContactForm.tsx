"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Shield, ArrowRight } from "lucide-react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "",
    urgency: "",
    preferredContact: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative py-24 md:py-32 px-8 md:px-12 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#06402B]/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#B7C9B7]/[0.05] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16 text-center"
        >
          {/* Heading Section */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-block">
              <p className="text-sm font-light text-foreground tracking-widest uppercase mb-4">
                Reach Out
              </p>
              <h2 className="text-3xl md:text-5xl font-light text-black leading-tight tracking-[-0.02em]">
                Start your journey to
                <br />
                <span className="italic font-serif text-foreground">wellness</span>
              </h2>
            </div>
            <p className="text-xl font-light text-black/70 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and we'll get back to you within 2 hours during business hours, or first thing
              the next morning.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.div variants={fadeInUp}>
            <Card className="max-w-4xl mx-auto border-[#B7C9B7]/30 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-[#06402B]">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="border-[#B7C9B7]/30 focus:border-[#06402B] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-[#06402B]">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="border-[#B7C9B7]/30 focus:border-[#06402B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-[#06402B]">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-[#B7C9B7]/30 focus:border-[#06402B] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-[#06402B]">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-[#B7C9B7]/30 focus:border-[#06402B] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Relationship */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-[#06402B]">
                      What's your relationship to the person seeking treatment?
                    </Label>
                    <RadioGroup
                      value={formData.relationship}
                      onValueChange={(value) => handleInputChange("relationship", value)}
                      className="grid sm:grid-cols-2 gap-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="self" id="self" />
                        <Label htmlFor="self" className="text-black/70">I'm seeking treatment for myself</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="parent" id="parent" />
                        <Label htmlFor="parent" className="text-black/70">I'm a parent seeking help for my child</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="spouse" id="spouse" />
                        <Label htmlFor="spouse" className="text-black/70">I'm seeking help for my spouse/partner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="family" id="family" />
                        <Label htmlFor="family" className="text-black/70">I'm a family member or friend</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="professional" id="professional" />
                        <Label htmlFor="professional" className="text-black/70">I'm a healthcare professional</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Urgency */}
                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-sm font-medium text-[#06402B]">
                      How urgent is your situation?
                    </Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                      <SelectTrigger className="border-[#B7C9B7]/30 focus:border-[#06402B] transition-colors">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crisis">Crisis - Need immediate help</SelectItem>
                        <SelectItem value="urgent">Urgent - Need help within days</SelectItem>
                        <SelectItem value="soon">Soon - Need help within weeks</SelectItem>
                        <SelectItem value="planning">Planning - Exploring options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Contact */}
                  <div className="space-y-2">
                    <Label htmlFor="preferredContact" className="text-sm font-medium text-[#06402B]">
                      How would you prefer to be contacted?
                    </Label>
                    <Select
                      value={formData.preferredContact}
                      onValueChange={(value) => handleInputChange("preferredContact", value)}
                    >
                      <SelectTrigger className="border-[#B7C9B7]/30 focus:border-[#06402B] transition-colors">
                        <SelectValue placeholder="Select preferred contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone call</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="text">Text message</SelectItem>
                        <SelectItem value="any">Any method is fine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-[#06402B]">
                      Tell us about your situation (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Share any details that would help us better understand your needs and provide more personalized guidance..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-[120px] border-[#B7C9B7]/30 focus:border-[#06402B] transition-colors"
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-[#06402B]/5 border border-[#06402B]/10 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-[#06402B] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-black/70">
                        <p className="font-medium text-[#06402B] mb-1">Your privacy is protected</p>
                        <p>
                          All information shared is confidential and HIPAA-compliant. We will never share your personal
                          information without your explicit consent.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base font-medium bg-[#06402B] hover:bg-[#06402B]/90 transition-colors group"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 