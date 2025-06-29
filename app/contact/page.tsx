"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, Menu, X, Phone, Mail, MapPin, Clock, MessageCircle, Shield, Heart, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const contactMethods = [
  {
    icon: Phone,
    title: "24/7 Crisis Support",
    description: "Immediate help when you need it most",
    contact: "(555) 123-4567",
    availability: "Available 24/7",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "Care Coordination",
    description: "Personalized guidance and placement assistance",
    contact: "care@iwc-network.com",
    availability: "Response within 2 hours",
    action: "Email Us",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about our network and services",
    contact: "info@iwc-network.com",
    availability: "Response within 24 hours",
    action: "Send Message",
  },
]

const offices = [
  {
    location: "Malibu, California",
    address: "23456 Pacific Coast Highway, Malibu, CA 90265",
    phone: "(555) 123-4567",
    email: "malibu@iwc-network.com",
    hours: "Mon-Fri: 8AM-6PM PST",
  },
  {
    location: "Monterey, California",
    address: "789 Cannery Row, Monterey, CA 93940",
    phone: "(555) 234-5678",
    email: "monterey@iwc-network.com",
    hours: "Mon-Fri: 8AM-6PM PST",
  },
  {
    location: "Costa Rica",
    address: "Guanacaste Province, Costa Rica",
    phone: "+506 1234-5678",
    email: "costarica@iwc-network.com",
    hours: "Mon-Fri: 8AM-6PM CST",
  },
]

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
              <Link href="/contact" className="text-[#2E7D6B] font-medium">
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
                <Link href="/contact" className="text-[#2E7D6B] font-medium py-2">
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-[#2E7D6B]/5 mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#58605E] mb-4 sm:mb-6">
              We're here to help, 24/7
            </h1>
            <p className="text-lg sm:text-xl text-[#58605E]/80 max-w-2xl mx-auto">
              Whether you need immediate crisis support or want to learn more about our centers, our care coordinators
              are standing by to provide compassionate, expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-[#CFE3DB] text-center p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-semibold text-[#58605E] mb-3">{method.title}</h3>
                <p className="text-[#58605E]/80 mb-4">{method.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="font-semibold text-[#2E7D6B]">{method.contact}</div>
                  <div className="text-sm text-[#58605E]/70">{method.availability}</div>
                </div>
                <Button className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 w-full">{method.action}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-[#CFE3DB]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-serif text-[#58605E]">Send us a message</CardTitle>
              <p className="text-[#58605E]/70">
                Fill out the form below and we'll get back to you within 2 hours during business hours, or first thing
                the next morning.
              </p>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-[#58605E] mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                      onChange={(e) => handleInputChange("email", e.target.value)}
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
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                {/* Relationship */}
                <div>
                  <Label className="text-sm font-medium text-[#58605E] mb-4 block">
                    What's your relationship to the person seeking treatment?
                  </Label>
                  <RadioGroup
                    value={formData.relationship}
                    onValueChange={(value) => handleInputChange("relationship", value)}
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

                {/* Urgency */}
                <div>
                  <Label htmlFor="urgency" className="text-sm font-medium text-[#58605E] mb-2 block">
                    How urgent is your situation?
                  </Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                    <SelectTrigger>
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
                <div>
                  <Label htmlFor="preferredContact" className="text-sm font-medium text-[#58605E] mb-2 block">
                    How would you prefer to be contacted?
                  </Label>
                  <Select
                    value={formData.preferredContact}
                    onValueChange={(value) => handleInputChange("preferredContact", value)}
                  >
                    <SelectTrigger>
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
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-[#58605E] mb-2 block">
                    Tell us about your situation (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Share any details that would help us better understand your needs and provide more personalized guidance..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-[#2E7D6B]/5 border border-[#2E7D6B]/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-[#58605E]/80">
                      <p className="font-medium mb-1">Your privacy is protected</p>
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
                  className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 w-full h-12 text-base font-semibold"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">Our Locations</h2>
            <p className="text-lg text-[#58605E]/70 max-w-2xl mx-auto">
              Visit us at any of our locations or reach out to the center nearest you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-[#CFE3DB] p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#2E7D6B]" />
                    <h3 className="text-lg font-semibold text-[#58605E]">{office.location}</h3>
                  </div>

                  <div className="space-y-3 text-sm text-[#58605E]/80">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-[#58605E]/50 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-[#58605E]/50" />
                      <span>{office.phone}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-[#58605E]/50" />
                      <span>{office.email}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-[#58605E]/50" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">When you contact us</h2>
            <p className="text-lg text-[#58605E]/70 max-w-2xl mx-auto">
              Here's what you can expect from every interaction with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-[#CFE3DB] text-center p-6">
              <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-[#2E7D6B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#58605E] mb-3">Compassionate Listening</h3>
              <p className="text-[#58605E]/80 text-sm leading-relaxed">
                We understand this is one of the most difficult times in your life. We listen without judgment and with
                complete empathy.
              </p>
            </Card>

            <Card className="border-[#CFE3DB] text-center p-6">
              <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-[#2E7D6B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#58605E] mb-3">Honest Guidance</h3>
              <p className="text-[#58605E]/80 text-sm leading-relaxed">
                No high-pressure sales tactics. We provide honest, educational information to help you make the best
                decision for your family.
              </p>
            </Card>

            <Card className="border-[#CFE3DB] text-center p-6">
              <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-[#2E7D6B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#58605E] mb-3">Expert Support</h3>
              <p className="text-[#58605E]/80 text-sm leading-relaxed">
                Our care coordinators have years of experience helping families navigate treatment options and insurance
                coverage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#58605E] text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full relative">
                    <div className="absolute inset-0.5 border border-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-lg font-semibold">IWC</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Global pathways to human flourishing through ethical, nature-immersive healing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Network</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/network" className="hover:text-white transition-colors">
                    All Centers
                  </Link>
                </li>
                <li>California Centers</li>
                <li>Costa Rica Centers</li>
                <li>International Options</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/get-help" className="hover:text-white transition-colors">
                    Get Help
                  </Link>
                </li>
                <li>Family Resources</li>
                <li>Insurance Guide</li>
                <li>24/7 Crisis Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>Care Coordination</li>
                <li>Professional Referrals</li>
                <li>Media Inquiries</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 International Wellness Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
