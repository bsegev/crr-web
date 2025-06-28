"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    center: "",
    urgency: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F7F9F8]/95 backdrop-blur-sm z-50 border-b border-[#CFE3DB]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 border border-white rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-semibold text-[#58605E]">IWC</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/network" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Our Network
              </Link>
              <Link href="/why-iwc" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Why IWC
              </Link>
              <Link href="/get-help" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Get Help
              </Link>
              <Link href="/stories" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Stories
              </Link>
              <Link href="/partners" className="text-[#58605E] hover:text-[#2E7D6B] transition-colors">
                Partners
              </Link>
              <Link href="/contact">
                <Button className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-[#2E7D6B]" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-serif text-[#58605E] mb-6">We're here to help</h1>
          <p className="text-xl text-[#58605E]/80 mb-8 max-w-2xl mx-auto">
            Taking the first step can feel overwhelming. Our care coordinators are available 24/7 to provide guidance,
            answer questions, and help you find the right path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#2E7D6B] text-[#2E7D6B] hover:bg-[#2E7D6B]/5 px-8 py-3 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-[#CFE3DB] text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-serif text-[#58605E] mb-4">24/7 Care Line</h3>
                <p className="text-[#58605E]/70 mb-4">
                  Speak directly with our care coordinators any time, day or night.
                </p>
                <p className="font-mono text-lg text-[#2E7D6B] mb-4">+1 (555) 123-4567</p>
                <Button className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 text-white w-full">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="border-[#CFE3DB] text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-serif text-[#58605E] mb-4">WhatsApp Support</h3>
                <p className="text-[#58605E]/70 mb-4">Secure, private messaging with our care team worldwide.</p>
                <p className="font-mono text-lg text-[#2E7D6B] mb-4">+1 (555) 123-4567</p>
                <Button
                  variant="outline"
                  className="border-[#2E7D6B] text-[#2E7D6B] hover:bg-[#2E7D6B]/5 w-full bg-transparent"
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#CFE3DB] text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-serif text-[#58605E] mb-4">Email Support</h3>
                <p className="text-[#58605E]/70 mb-4">Send us your questions and we'll respond within 2 hours.</p>
                <p className="text-lg text-[#2E7D6B] mb-4">care@iwcglobal.org</p>
                <Button
                  variant="outline"
                  className="border-[#2E7D6B] text-[#2E7D6B] hover:bg-[#2E7D6B]/5 w-full bg-transparent"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-[#CFE3DB]">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#58605E]">Send us a message</CardTitle>
                <p className="text-[#58605E]/70">
                  Fill out this form and we'll get back to you within 2 hours during business hours, or first thing the
                  next morning.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="border-[#CFE3DB] focus:border-[#2E7D6B]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="border-[#CFE3DB] focus:border-[#2E7D6B]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="border-[#CFE3DB] focus:border-[#2E7D6B]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="center">Interested Center</Label>
                      <Select
                        value={formData.center}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, center: value }))}
                      >
                        <SelectTrigger className="border-[#CFE3DB] focus:border-[#2E7D6B]">
                          <SelectValue placeholder="Select a center" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cornerstone">Cornerstone (California)</SelectItem>
                          <SelectItem value="costa-rica-recovery">Costa Rica Recovery</SelectItem>
                          <SelectItem value="el-tirol">El Tirol</SelectItem>
                          <SelectItem value="nosara">Nosara Treatment Center</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">How urgent is your need?</Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
                      >
                        <SelectTrigger className="border-[#CFE3DB] focus:border-[#2E7D6B]">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (24-48 hours)</SelectItem>
                          <SelectItem value="soon">Soon (1-2 weeks)</SelectItem>
                          <SelectItem value="planning">Planning (1-3 months)</SelectItem>
                          <SelectItem value="exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us about your situation, questions, or how we can help..."
                      rows={4}
                      className="border-[#CFE3DB] focus:border-[#2E7D6B]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Center Contact Info */}
            <div className="space-y-6">
              <Card className="border-[#CFE3DB]">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-[#58605E]">Direct Center Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#4B7BAF] rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-[#58605E]">Cornerstone (California)</h4>
                        <p className="text-sm text-[#58605E]/70 mb-2">Evidence-driven clinical treatment</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#58605E]/70" />
                            <span>+1 (555) 123-4567</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#58605E]/70" />
                            <span>cornerstone@iwcglobal.org</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#2E7D6B] rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-[#58605E]">Costa Rica Recovery</h4>
                        <p className="text-sm text-[#58605E]/70 mb-2">Integrated clinical + holistic program</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#58605E]/70" />
                            <span>+506 2234-5678</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#58605E]/70" />
                            <span>crr@iwcglobal.org</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#C8A96A] rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-[#58605E]">El Tirol</h4>
                        <p className="text-sm text-[#58605E]/70 mb-2">Discreet, elevated recovery experience</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#58605E]/70" />
                            <span>+506 2345-6789</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#58605E]/70" />
                            <span>eltirol@iwcglobal.org</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#2E7D6B] rounded-full mt-2" />
                      <div>
                        <h4 className="font-semibold text-[#58605E]">Nosara Treatment Center</h4>
                        <p className="text-sm text-[#58605E]/70 mb-2">Immersive wellness retreat</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#58605E]/70" />
                            <span>+506 2456-7890</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#58605E]/70" />
                            <span>nosara@iwcglobal.org</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#CFE3DB] bg-[#CFE3DB]/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-[#2E7D6B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#58605E] mb-2">Response Times</h4>
                      <ul className="space-y-1 text-sm text-[#58605E]/80">
                        <li>• Phone calls: Immediate (24/7)</li>
                        <li>• WhatsApp: Within 15 minutes</li>
                        <li>• Email: Within 2 hours (business hours)</li>
                        <li>• Contact form: Within 2 hours (business hours)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#CFE3DB] bg-[#2E7D6B]/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#2E7D6B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#58605E] mb-2">Global Headquarters</h4>
                      <p className="text-sm text-[#58605E]/80">
                        International Wellness Collective
                        <br />
                        1234 Healing Way, Suite 100
                        <br />
                        San Francisco, CA 94102
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#58605E] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                  <div className="w-4 h-4 border border-white rounded-full relative">
                    <div className="absolute inset-0.5 border border-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-lg font-semibold">IWC</span>
              </Link>
              <p className="text-white/70 text-sm">Global pathways to human flourishing</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Network</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/cornerstone" className="hover:text-white transition-colors">
                    Cornerstone (California)
                  </Link>
                </li>
                <li>
                  <Link href="/costa-rica-recovery" className="hover:text-white transition-colors">
                    Costa Rica Recovery
                  </Link>
                </li>
                <li>
                  <Link href="/el-tirol" className="hover:text-white transition-colors">
                    El Tirol
                  </Link>
                </li>
                <li>
                  <Link href="/nosara" className="hover:text-white transition-colors">
                    Nosara Treatment Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/get-help" className="hover:text-white transition-colors">
                    Get Help
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-white transition-colors">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white transition-colors">
                    Professional Partners
                  </Link>
                </li>
                <li>
                  <Link href="/family-resources" className="hover:text-white transition-colors">
                    Family Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>24/7 Care Line</li>
                <li className="font-mono">+1 (555) 123-4567</li>
                <li>care@iwcglobal.org</li>
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
