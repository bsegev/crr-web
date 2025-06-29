"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotatingText } from "@/components/rotating-text"
import { ArrowRight, Menu, X, Shield, Heart, Globe, Users, Star, Phone, Award, Compass } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const values = [
  {
    icon: Heart,
    title: "Relationship-Centered",
    description: "Healing happens in authentic connection, not isolation. We prioritize therapeutic relationships.",
  },
  {
    icon: Shield,
    title: "Ethically Transparent",
    description: "No hidden fees, no false promises. Clear communication about costs, outcomes, and expectations.",
  },
  {
    icon: Globe,
    title: "Globally Informed",
    description: "International expertise meets local cultural understanding in every center we operate.",
  },
]

const testimonials = [
  {
    quote:
      "IWC didn't just treat our son's addiction—they helped heal our entire family. The transparency and genuine care made all the difference.",
    author: "Sarah M.",
    role: "Parent",
    location: "California",
  },
  {
    quote:
      "After trying three other treatment centers, IWC was the first place that felt like they actually understood what I needed to heal.",
    author: "Michael R.",
    role: "Alumni",
    location: "Costa Rica Program",
  },
  {
    quote:
      "The family program at IWC gave us tools we still use today. It's been two years, and our relationships have never been stronger.",
    author: "Jennifer L.",
    role: "Family Member",
    location: "Monterey",
  },
]

const whyChooseReasons = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Higher long-term recovery rates and family satisfaction scores than industry averages.",
  },
  {
    icon: Users,
    title: "Family-Centered Care",
    description: "Comprehensive programs that heal relationships and strengthen family bonds.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Multiple locations offering diverse healing environments and cultural approaches.",
  },
  {
    icon: Heart,
    title: "Ethical Approach",
    description: "Transparent pricing, honest communication, and genuine care over profit margins.",
  },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const rotatingWords = ["community", "connection", "partnership", "understanding", "compassion", "relationship"]

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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <Badge variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-[#2E7D6B]/5">
                  Global Healing Network
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#58605E] leading-tight">
                  True healing unfolds through{" "}
                  <span className="text-[#2E7D6B] italic">
                    <RotatingText words={rotatingWords} />
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-[#58605E]/80 leading-relaxed">
                  We're a global network of healing centers united by one belief: recovery happens best when people feel
                  truly seen, understood, and supported by both professional care teams and authentic community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link href="/get-help" className="w-full sm:flex-1">
                  <Button
                    size="lg"
                    className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold rounded-xl"
                  >
                    Get Help Now
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/network" className="w-full sm:flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#2E7D6B] text-[#2E7D6B] bg-transparent hover:bg-[#2E7D6B]/5 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-xl"
                  >
                    Explore Centers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
                  alt="Healing community gathering in natural setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4 sm:mb-6">Our foundation</h2>
            <p className="text-lg sm:text-xl text-[#58605E]/70 max-w-2xl mx-auto">
              Three core values that guide every decision we make and every interaction we have with the families we
              serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-[#CFE3DB] text-center p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-semibold text-[#58605E] mb-4">{value.title}</h3>
                <p className="text-[#58605E]/80 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Choose IWC */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4 sm:mb-6">Why families choose IWC</h2>
            <p className="text-lg sm:text-xl text-[#58605E]/70 max-w-2xl mx-auto">
              When you're facing one of life's most challenging moments, you deserve care that's both excellent and
              ethical.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {whyChooseReasons.map((reason, index) => (
              <Card key={index} className="border-[#CFE3DB] p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-6 w-6 text-[#2E7D6B]" />
                </div>
                <h3 className="text-lg font-semibold text-[#58605E] mb-3">{reason.title}</h3>
                <p className="text-[#58605E]/80 text-sm leading-relaxed">{reason.description}</p>
              </Card>
            ))}
          </div>

          {/* Center Matching CTA */}
          <Card className="border-[#2E7D6B] bg-gradient-to-r from-[#2E7D6B]/5 to-[#2E7D6B]/10 p-8 sm:p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-[#2E7D6B]/20 rounded-full flex items-center justify-center mx-auto">
                <Compass className="h-8 w-8 text-[#2E7D6B]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#58605E]">Which center is right for you?</h3>
                <p className="text-lg text-[#58605E]/80">
                  Every healing journey is unique. Answer a few questions to get personalized recommendations from our
                  network of centers.
                </p>
                <div className="text-sm text-[#58605E]/70">
                  <p>Takes 3-5 minutes • Completely confidential • No obligation</p>
                </div>
              </div>
              <Link href="/find-your-center">
                <Button
                  size="lg"
                  className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 shadow-xl hover:shadow-2xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold rounded-xl"
                >
                  <Compass className="mr-3 h-5 w-5" />
                  Find Your Perfect Match
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#58605E] mb-4 sm:mb-6">Voices of healing</h2>
            <p className="text-lg sm:text-xl text-[#58605E]/70 max-w-2xl mx-auto">
              Real stories from families who have walked this journey with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-[#CFE3DB] p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#58605E]/90 leading-relaxed italic">"{testimonial.quote}"</blockquote>
                  <div className="border-t border-[#CFE3DB] pt-4">
                    <div className="font-semibold text-[#58605E]">{testimonial.author}</div>
                    <div className="text-sm text-[#58605E]/70">
                      {testimonial.role} • {testimonial.location}
                    </div>
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
                Ready to begin your healing journey?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Our care coordinators are available 24/7 to provide immediate support and help you understand your
                options. No pressure, just honest guidance when you need it most.
              </p>
              <div className="text-sm sm:text-base text-white/80">
                <p>Free consultation • Insurance verification • Immediate placement available</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/get-help">
                <Button
                  size="lg"
                  className="bg-white text-[#2E7D6B] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Get Help Now
                </Button>
              </Link>
              <Link href="/network">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-xl w-full sm:w-auto"
                >
                  Explore Our Centers
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
