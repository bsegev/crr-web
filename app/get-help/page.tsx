"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  Clock,
  Heart,
  Users,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const crisisResources = [
  {
    title: "National Suicide Prevention Lifeline",
    phone: "988",
    description: "24/7 crisis support for suicidal thoughts",
    available: "24/7",
  },
  {
    title: "Crisis Text Line",
    phone: "Text HOME to 741741",
    description: "24/7 text-based crisis support",
    available: "24/7",
  },
  {
    title: "SAMHSA National Helpline",
    phone: "1-800-662-4357",
    description: "Treatment referral and information service",
    available: "24/7",
  },
]

const helpOptions = [
  {
    icon: Phone,
    title: "Immediate Phone Support",
    description: "Speak with a care coordinator right now",
    action: "Call (555) 123-4567",
    availability: "Available 24/7",
    urgent: true,
  },
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Chat with our team online",
    action: "Start Chat",
    availability: "Mon-Fri: 8AM-8PM",
    urgent: false,
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a time that works for you",
    action: "Schedule Now",
    availability: "Next available: Today",
    urgent: false,
  },
]

const processSteps = [
  {
    step: 1,
    title: "Initial Contact",
    description:
      "Reach out via phone, chat, or form. We'll listen to your situation with compassion and without judgment.",
    duration: "15-30 minutes",
  },
  {
    step: 2,
    title: "Assessment & Options",
    description:
      "We'll help assess your needs and present treatment options that match your situation and preferences.",
    duration: "30-60 minutes",
  },
  {
    step: 3,
    title: "Insurance & Planning",
    description: "We'll verify your insurance benefits and help plan the logistics of treatment admission.",
    duration: "1-2 hours",
  },
  {
    step: 4,
    title: "Admission & Support",
    description: "We'll coordinate your admission and provide ongoing family support throughout treatment.",
    duration: "Ongoing",
  },
]

export default function GetHelpPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

      {/* Crisis Alert */}
      <div className="pt-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="border-red-200 bg-red-50 mb-6">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">
                    If you're in crisis or having thoughts of self-harm:
                  </h3>
                  <div className="space-y-2 text-sm text-red-700">
                    <p>• Call 988 (Suicide & Crisis Lifeline) - Available 24/7</p>
                    <p>• Text HOME to 741741 (Crisis Text Line)</p>
                    <p>• Go to your nearest emergency room</p>
                    <p>• Call 911</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-[#2E7D6B]/5 mb-4">
              Immediate Support
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#58605E] mb-4 sm:mb-6">
              You don't have to face this alone
            </h1>
            <p className="text-lg sm:text-xl text-[#58605E]/80 max-w-2xl mx-auto">
              Our compassionate care coordinators are available 24/7 to provide immediate support, answer your
              questions, and help you find the right path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Help Options */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {helpOptions.map((option, index) => (
              <Card
                key={index}
                className={`border-[#CFE3DB] text-center p-6 hover:shadow-xl transition-shadow ${option.urgent ? "ring-2 ring-[#2E7D6B] ring-opacity-20" : ""}`}
              >
                {option.urgent && <Badge className="bg-[#2E7D6B] text-white mb-4">Recommended</Badge>}
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-semibold text-[#58605E] mb-3">{option.title}</h3>
                <p className="text-[#58605E]/80 mb-4">{option.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-[#58605E]/70 flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {option.availability}
                  </div>
                </div>
                <Button
                  className={`w-full ${option.urgent ? "bg-[#2E7D6B] hover:bg-[#2E7D6B]/90" : "bg-[#2E7D6B] hover:bg-[#2E7D6B]/90"}`}
                >
                  {option.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">What happens when you reach out</h2>
            <p className="text-lg text-[#58605E]/70 max-w-2xl mx-auto">
              We've designed our process to be as supportive and stress-free as possible during this difficult time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#2E7D6B] text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#58605E] mb-2">{step.title}</h3>
                    <p className="text-[#58605E]/80 mb-2">{step.description}</p>
                    <div className="text-sm text-[#58605E]/60">Typical duration: {step.duration}</div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-[#CFE3DB] p-6 sm:p-8 h-fit">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-[#2E7D6B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#58605E] mb-3">Your privacy is protected</h3>
                  <p className="text-[#58605E]/80 text-sm leading-relaxed">
                    All conversations are confidential and HIPAA-compliant. We will never share your information without
                    your explicit consent.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#58605E]/80">No pressure or high-pressure sales tactics</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#58605E]/80">Honest, educational information only</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#58605E]/80">Free insurance verification and benefits check</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#58605E]/80">Ongoing family support throughout treatment</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">Why families trust us</h2>
            <p className="text-lg text-[#58605E]/70 max-w-2xl mx-auto">
              When you're facing one of life's most challenging moments, you deserve care that's both excellent and
              ethical.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-[#CFE3DB] text-center p-6">
              <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-[#2E7D6B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#58605E] mb-3">Compassionate Care</h3>
              <p className="text-[#58605E]/80 text-sm leading-relaxed">
                We understand this is one of the most difficult times in your life. We listen with empathy and without
                judgment.
              </p>
            </Card>

            <Card className="border-[#CFE3DB] text-center p-6">
              <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-[#2E7D6B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#58605E] mb-3">Ethical Approach</h3>
              <p className="text-[#58605E]/80 text-sm leading-relaxed">
                No hidden fees, no false promises. We provide honest, transparent information to help you make informed
                decisions.
              </p>
            </Card>

            <Card className="border-[#CFE3DB] text-center p-6">
              <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-[#2E7D6B]" />
              </div>
              <h3 className="text-lg font-semibold text-[#58605E] mb-3">Expert Guidance</h3>
              <p className="text-[#58605E]/80 text-sm leading-relaxed">
                Our care coordinators have years of experience helping families navigate treatment options and insurance
                coverage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">Additional crisis resources</h2>
            <p className="text-lg text-[#58605E]/70 max-w-2xl mx-auto">
              If you need immediate crisis support, these national resources are available 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {crisisResources.map((resource, index) => (
              <Card key={index} className="border-[#CFE3DB] p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#58605E]">{resource.title}</h3>
                  <div className="text-2xl font-bold text-[#2E7D6B]">{resource.phone}</div>
                  <p className="text-[#58605E]/80 text-sm">{resource.description}</p>
                  <div className="flex items-center text-sm text-[#58605E]/60">
                    <Clock className="h-4 w-4 mr-1" />
                    {resource.available}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#2E7D6B] to-[#2E7D6B]/90">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                Take the first step today
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Recovery is possible. Healing is possible. You don't have to face this alone. Our team is here to
                support you every step of the way.
              </p>
              <div className="text-sm sm:text-base text-white/80">
                <p>Available 24/7 • Confidential • No obligation</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#2E7D6B] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto"
              >
                <Phone className="mr-3 h-5 w-5" />
                Call Now: (555) 123-4567
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-xl w-full sm:w-auto"
                >
                  Send Message
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
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
