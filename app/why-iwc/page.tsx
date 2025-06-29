"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Menu, X, Shield, Users, Globe, Heart, Award, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const principles = [
  {
    icon: Shield,
    title: "Ethical, Transparent Care",
    description:
      "No hidden fees, no false promises. Evidence-based treatment with clear outcomes and honest communication.",
    details: [
      "Transparent pricing with no surprise costs",
      "Evidence-based treatment protocols",
      "Regular progress reporting to families",
      "Ethical marketing and admissions practices",
    ],
  },
  {
    icon: Users,
    title: "Family-Centered Approach",
    description: "Healing happens in relationship. We support the entire family system, not just the individual.",
    details: [
      "Comprehensive family therapy programs",
      "Regular family education sessions",
      "24/7 family support hotline",
      "Post-treatment family aftercare planning",
    ],
  },
  {
    icon: Globe,
    title: "Global Standards, Local Expertise",
    description: "International accreditation meets deep cultural understanding in every location we serve.",
    details: [
      "Joint Commission and CARF accreditation",
      "Culturally competent care teams",
      "Local partnerships and community integration",
      "International best practices implementation",
    ],
  },
  {
    icon: Heart,
    title: "Nature-Immersive Healing",
    description: "We believe healing happens best when connected to the natural world and authentic community.",
    details: [
      "Outdoor therapy and adventure programs",
      "Organic gardens and farm-to-table nutrition",
      "Mindfulness and meditation in nature",
      "Sustainable and eco-conscious facilities",
    ],
  },
]

const outcomes = [
  { metric: "98%", label: "Treatment Completion Rate", description: "Clients who complete their full program" },
  { metric: "92%", label: "1-Year Sobriety Rate", description: "Clients maintaining sobriety after one year" },
  { metric: "4.9/5", label: "Family Satisfaction", description: "Average rating from family members" },
  { metric: "89%", label: "Return to Work/School", description: "Clients successfully reintegrating" },
]

const differentiators = [
  {
    title: "Honest, Consultative Guidance",
    description:
      "We provide educational, pressure-free consultations that help families make informed decisions. No high-pressure tactics or exploitation of vulnerable moments.",
  },
  {
    title: "Transparent Pricing",
    description:
      "All costs are clearly communicated upfront. No surprise bills or hidden fees that exploit insurance coverage.",
  },
  {
    title: "Realistic Expectations",
    description:
      "We're honest about what treatment can and cannot accomplish. Recovery is a journey, not a destination.",
  },
  {
    title: "Cultural Competency",
    description:
      "Our international experience means we understand how culture, family dynamics, and personal values affect recovery.",
  },
]

export default function WhyIWCPage() {
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
              <Link href="/why-iwc" className="text-[#2E7D6B] font-medium">
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
                <Link href="/why-iwc" className="text-[#2E7D6B] font-medium py-2">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <Badge variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-[#2E7D6B]/5">
                  Our Philosophy
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#58605E] leading-tight">
                  We walk with you, not <span className="text-[#2E7D6B] italic">talk at you</span>
                </h1>
                <p className="text-lg sm:text-xl text-[#58605E]/80 leading-relaxed">
                  Recovery isn't a destination—it's a journey of becoming. We believe in meeting people where they are,
                  honoring their story, and walking alongside them toward lasting transformation.
                </p>
              </div>
              <Link href="/get-help">
                <Button size="lg" className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 h-12 px-8">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Healing community gathering in natural setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">Our Core Principles</h2>
            <p className="text-lg sm:text-xl text-[#58605E]/70 max-w-2xl mx-auto leading-relaxed">
              These foundational beliefs guide every decision we make and every interaction we have with the families we
              serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-[#CFE3DB] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <principle.icon className="h-6 w-6 text-[#2E7D6B]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#58605E] mb-2">{principle.title}</h3>
                      <p className="text-[#58605E]/80 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#58605E]/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">Proven Outcomes</h2>
            <p className="text-lg sm:text-xl text-[#58605E]/70 max-w-2xl mx-auto leading-relaxed">
              Our approach delivers measurable results that matter to families and individuals seeking lasting change.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-[#CFE3DB] text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2E7D6B] mb-2">{outcome.metric}</div>
                  <div className="font-semibold text-[#58605E] mb-2 text-sm sm:text-base">{outcome.label}</div>
                  <div className="text-xs sm:text-sm text-[#58605E]/70">{outcome.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Research data and evidence-based care charts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#2E7D6B]/20 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <TrendingUp className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4" />
                <div className="text-xl sm:text-2xl font-semibold">Evidence-Based Results</div>
                <div className="text-base sm:text-lg opacity-90">Tracked and verified outcomes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E]">Leadership That Understands</h2>
                <p className="text-lg sm:text-xl text-[#58605E]/80 leading-relaxed">
                  Our leadership team combines decades of clinical expertise with personal understanding of the recovery
                  journey. We've walked this path ourselves and with countless families.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-[#2E7D6B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#58605E] mb-2">Clinical Excellence</h3>
                    <p className="text-[#58605E]/70 leading-relaxed">
                      Board-certified physicians, licensed therapists, and certified addiction counselors with
                      specialized training.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-[#2E7D6B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#58605E] mb-2">Personal Experience</h3>
                    <p className="text-[#58605E]/70 leading-relaxed">
                      Many of our leaders have personal or family experience with addiction and recovery, bringing
                      authentic understanding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-[#2E7D6B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#58605E] mb-2">Global Perspective</h3>
                    <p className="text-[#58605E]/70 leading-relaxed">
                      International experience in healthcare, wellness, and recovery across diverse cultures and
                      communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Professional healthcare leader in natural setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4">What makes us different</h2>
            <p className="text-lg sm:text-xl text-[#58605E]/70 max-w-2xl mx-auto leading-relaxed">
              Four principles that guide every interaction we have with families seeking care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-[#CFE3DB] p-6 sm:p-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#2E7D6B]" />
                    <h3 className="text-xl font-semibold text-[#58605E]">{item.title}</h3>
                  </div>
                  <p className="text-[#58605E]/80 leading-relaxed pl-9">{item.description}</p>
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
                Experience the IWC Difference
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join thousands of families who have found hope, healing, and lasting transformation through our
                compassionate, evidence-based approach.
              </p>
              <div className="text-sm sm:text-base text-white/80">
                <p>Personalized care • Family support • Proven results</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/get-help">
                <Button
                  size="lg"
                  className="bg-white text-[#2E7D6B] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto"
                >
                  Start Your Journey Today
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-xl w-full sm:w-auto"
                >
                  Speak with Our Team
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
