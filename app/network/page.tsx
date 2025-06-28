"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, Phone, Mail, Globe, Users, Heart, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function NetworkPage() {
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null)

  const centers = [
    {
      id: "cornerstone",
      name: "Cornerstone",
      location: "California, USA",
      type: "Clinical Treatment",
      color: "#4B7BAF",
      description: "Evidence-driven clinical treatment for intensive medical and psychiatric care",
      specialties: ["Medical Detox", "Psychiatric Care", "Dual Diagnosis", "Intensive Outpatient"],
      capacity: "24 beds",
      accreditation: "Joint Commission Accredited",
      phone: "+1 (555) 123-4567",
      email: "cornerstone@iwcglobal.org",
      image: "modern clinical facility in California, professional medical environment with natural light",
    },
    {
      id: "costa-rica-recovery",
      name: "Costa Rica Recovery",
      location: "San José, Costa Rica",
      type: "Integrated Program",
      color: "#2E7D6B",
      description: "Integrated clinical and holistic programme for affordable, balanced rehabilitation",
      specialties: ["Clinical Treatment", "Holistic Therapy", "Adventure Therapy", "Family Program"],
      capacity: "32 beds",
      accreditation: "CARF Accredited",
      phone: "+506 2234-5678",
      email: "crr@iwcglobal.org",
      image: "integrated wellness facility in Costa Rica, tropical healing environment with lush gardens",
    },
    {
      id: "el-tirol",
      name: "El Tirol",
      location: "Tirol, Costa Rica",
      type: "Luxury Recovery",
      color: "#C8A96A",
      description: "Discreet, elevated recovery experience for individuals valuing privacy and excellence",
      specialties: ["Executive Program", "Privacy-First Care", "Concierge Services", "Aftercare Planning"],
      capacity: "8 suites",
      accreditation: "Luxury Rehab Standards",
      phone: "+506 2345-6789",
      email: "eltirol@iwcglobal.org",
      image: "luxury private recovery retreat in Costa Rica mountains, elegant understated design",
    },
    {
      id: "nosara",
      name: "Nosara Treatment Center",
      location: "Nosara, Costa Rica",
      type: "Wellness Retreat",
      color: "#CFE3DB",
      description: "Immersive wellness retreat for wellness travelers and post-treatment seekers",
      specialties: ["Wellness Retreat", "Surf Therapy", "Yoga & Meditation", "Preventive Care"],
      capacity: "16 rooms",
      accreditation: "Wellness Tourism Certified",
      phone: "+506 2456-7890",
      email: "nosara@iwcglobal.org",
      image: "wellness retreat center in Nosara Costa Rica, beachside healing sanctuary",
    },
  ]

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
              <Link href="/network" className="text-[#2E7D6B] font-medium">
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
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-serif text-[#58605E] mb-6">Our Global Network</h1>
          <p className="text-xl text-[#58605E]/80 max-w-3xl mx-auto mb-8">
            Four distinct healing environments, each delivering evidence-based, heart-led experiences tuned to diverse
            needs, cultures, and budgets.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-[#58605E]/70">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>80+ beds total capacity</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Internationally accredited</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Whole-spectrum care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#CFE3DB]/30 to-[#2E7D6B]/10 rounded-2xl relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="IWC Network Map"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                {/* Interactive Pins */}
                <div className="absolute inset-0">
                  {/* California Pin */}
                  <button
                    onClick={() => setSelectedCenter("cornerstone")}
                    className={`absolute top-1/3 left-1/4 w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                      selectedCenter === "cornerstone" ? "bg-[#4B7BAF] scale-125" : "bg-[#4B7BAF] hover:scale-110"
                    }`}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium text-[#58605E] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      Cornerstone
                    </div>
                  </button>

                  {/* Costa Rica Pins */}
                  <button
                    onClick={() => setSelectedCenter("costa-rica-recovery")}
                    className={`absolute top-2/3 right-1/3 w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                      selectedCenter === "costa-rica-recovery"
                        ? "bg-[#2E7D6B] scale-125"
                        : "bg-[#2E7D6B] hover:scale-110"
                    }`}
                  />

                  <button
                    onClick={() => setSelectedCenter("el-tirol")}
                    className={`absolute top-1/2 right-1/4 w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                      selectedCenter === "el-tirol" ? "bg-[#C8A96A] scale-125" : "bg-[#C8A96A] hover:scale-110"
                    }`}
                  />

                  <button
                    onClick={() => setSelectedCenter("nosara")}
                    className={`absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                      selectedCenter === "nosara" ? "bg-[#2E7D6B] scale-125" : "bg-[#2E7D6B] hover:scale-110"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Center Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-[#58605E]">Center Details</h3>
              {selectedCenter ? (
                <Card className="border-[#CFE3DB]">
                  <CardContent className="p-6">
                    {(() => {
                      const center = centers.find((c) => c.id === selectedCenter)!
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: center.color }} />
                            <h4 className="text-xl font-semibold text-[#58605E]">{center.name}</h4>
                          </div>
                          <div className="flex items-center space-x-2 text-[#58605E]/70">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{center.location}</span>
                          </div>
                          <Badge variant="secondary" className="bg-[#CFE3DB]/50 text-[#58605E]">
                            {center.type}
                          </Badge>
                          <p className="text-sm text-[#58605E]/80">{center.description}</p>
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-[#58605E]">Specialties:</p>
                            <div className="flex flex-wrap gap-1">
                              {center.specialties.map((specialty, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-[#58605E]">Capacity</p>
                              <p className="text-[#58605E]/70">{center.capacity}</p>
                            </div>
                            <div>
                              <p className="font-medium text-[#58605E]">Accreditation</p>
                              <p className="text-[#58605E]/70">{center.accreditation}</p>
                            </div>
                          </div>
                          <div className="space-y-2 pt-4 border-t border-[#CFE3DB]">
                            <div className="flex items-center space-x-2 text-sm">
                              <Phone className="h-4 w-4 text-[#58605E]/70" />
                              <span className="text-[#58605E]/70">{center.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Mail className="h-4 w-4 text-[#58605E]/70" />
                              <span className="text-[#58605E]/70">{center.email}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-4" style={{ backgroundColor: center.color }}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      )
                    })()}
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-[#CFE3DB] border-dashed">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-12 w-12 text-[#58605E]/30 mx-auto mb-4" />
                    <p className="text-[#58605E]/70">Click on a location pin to view center details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-16 px-6 bg-[#CFE3DB]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-[#58605E] text-center mb-12">Explore Each Center</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {centers.map((center) => (
              <Card
                key={center.id}
                className="group hover:shadow-xl transition-all duration-300 border-[#CFE3DB] overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&query=${center.image}`}
                    alt={center.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: center.color }} />
                        <h3 className="text-xl font-semibold text-[#58605E]">{center.name}</h3>
                      </div>
                      <Badge variant="secondary" className="bg-[#CFE3DB]/50 text-[#58605E]">
                        {center.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-[#58605E]/70">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{center.location}</span>
                    </div>
                    <p className="text-[#58605E]/80">{center.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {center.specialties.slice(0, 3).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {center.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{center.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-[#58605E]/70">
                        <span className="font-medium">{center.capacity}</span> • {center.accreditation}
                      </div>
                      <Button variant="ghost" className="text-[#58605E] hover:bg-[#CFE3DB]/30">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#2E7D6B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Find Your Perfect Match</h2>
          <p className="text-xl text-white/80 mb-8">
            Not sure which center is right for you? Our care coordinators will help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-help">
              <Button size="lg" className="bg-white text-[#2E7D6B] hover:bg-white/90 px-8 py-3">
                Take Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
              >
                Speak with Care Team
              </Button>
            </Link>
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
