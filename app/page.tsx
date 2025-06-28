import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F7F9F8]/95 backdrop-blur-sm z-50 border-b border-[#CFE3DB]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 border border-white rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-semibold text-[#58605E]">IWC</span>
            </div>
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-serif text-[#58605E] leading-tight">
                  Global pathways to human <span className="text-[#2E7D6B] italic">flourishing</span>
                </h1>
                <p className="text-xl text-[#58605E]/80 leading-relaxed">
                  Healing isn't a race. It's a series of honest steps. We're here for each one— uniting the world's most
                  trusted healing environments under one ethical, human-first umbrella.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-help">
                  <Button size="lg" className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 text-white px-8 py-3">
                    Find Your Path
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/network">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#2E7D6B] text-[#2E7D6B] hover:bg-[#2E7D6B]/5 px-8 py-3 bg-transparent"
                  >
                    Explore Centers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#CFE3DB] to-[#2E7D6B]/20">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Serene healing environment"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-[#CFE3DB]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-[#2E7D6B]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#58605E]">Whole-Spectrum Care</p>
                    <p className="text-sm text-[#58605E]/70">From medical detox to restorative retreat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Center Chooser */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#58605E] mb-4">Choose Your Healing Environment</h2>
            <p className="text-lg text-[#58605E]/70 max-w-2xl mx-auto">
              Each center delivers evidence-based, heart-led experiences tuned to diverse needs, cultures, and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cornerstone */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-[#CFE3DB] hover:border-[#4B7BAF]">
              <CardContent className="p-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-[#4B7BAF]/10 to-[#4B7BAF]/5">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Cornerstone California"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#4B7BAF] rounded-full"></div>
                    <h3 className="font-semibold text-[#58605E]">Cornerstone</h3>
                  </div>
                  <p className="text-sm text-[#58605E]/70">California</p>
                  <p className="text-sm">
                    Evidence-driven clinical treatment for intensive medical and psychiatric care.
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full text-[#4B7BAF] hover:bg-[#4B7BAF]/5 p-0 h-auto justify-start"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Costa Rica Recovery */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-[#CFE3DB] hover:border-[#CFE3DB]">
              <CardContent className="p-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-[#CFE3DB]/30 to-[#2E7D6B]/10">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Costa Rica Recovery"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#CFE3DB] border-2 border-[#2E7D6B] rounded-full"></div>
                    <h3 className="font-semibold text-[#58605E]">Costa Rica Recovery</h3>
                  </div>
                  <p className="text-sm text-[#58605E]/70">Costa Rica</p>
                  <p className="text-sm">
                    Integrated clinical and holistic programme for affordable, balanced rehabilitation abroad.
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full text-[#2E7D6B] hover:bg-[#2E7D6B]/5 p-0 h-auto justify-start"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* El Tirol */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-[#CFE3DB] hover:border-[#C8A96A]">
              <CardContent className="p-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-[#C8A96A]/10 to-[#C8A96A]/5">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="El Tirol"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#C8A96A] rounded-full"></div>
                    <h3 className="font-semibold text-[#58605E]">El Tirol</h3>
                  </div>
                  <p className="text-sm text-[#58605E]/70">Costa Rica</p>
                  <p className="text-sm">
                    Discreet, elevated recovery experience for individuals valuing privacy and understated excellence.
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full text-[#C8A96A] hover:bg-[#C8A96A]/5 p-0 h-auto justify-start"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nosara */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-[#CFE3DB] hover:border-[#CFE3DB]">
              <CardContent className="p-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-[#CFE3DB]/50 to-[#CFE3DB]/20">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Nosara Treatment Center"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#CFE3DB] border-2 border-[#2E7D6B] rounded-full"></div>
                    <h3 className="font-semibold text-[#58605E]">Nosara Treatment Center</h3>
                  </div>
                  <p className="text-sm text-[#58605E]/70">Costa Rica</p>
                  <p className="text-sm">
                    Immersive wellness retreat for wellness travelers and post-treatment seekers.
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full text-[#2E7D6B] hover:bg-[#2E7D6B]/5 p-0 h-auto justify-start"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-[#CFE3DB]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif text-[#58605E]">Where care meets conscience</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-[#2E7D6B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#58605E] mb-2">Whole-Spectrum Care</h3>
                    <p className="text-[#58605E]/70">
                      From medical detox to restorative retreat, we meet you wherever you are in your healing journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-[#2E7D6B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#58605E] mb-2">Ethical Accessibility</h3>
                    <p className="text-[#58605E]/70">
                      Transparent pricing, evidence-based methods, and stigma-free language guide everything we do.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-[#2E7D6B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#58605E] mb-2">Global Expertise, Local Heart</h3>
                    <p className="text-[#58605E]/70">
                      International standards meet regional soul in environments designed for dignity and healing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#2E7D6B]/10 to-[#CFE3DB]/30">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Growth and care"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#2E7D6B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our decision wizard will help you find the right path forward, or speak directly with our care coordinators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-help">
              <Button size="lg" className="bg-white text-[#2E7D6B] hover:bg-white/90 px-8 py-3">
                Start Assessment
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
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6B] flex items-center justify-center">
                  <div className="w-4 h-4 border border-white rounded-full relative">
                    <div className="absolute inset-0.5 border border-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-lg font-semibold">IWC</span>
              </div>
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
