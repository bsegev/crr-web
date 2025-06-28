import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Users, Globe, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WhyIWCPage() {
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
              <Link href="/why-iwc" className="text-[#2E7D6B] font-medium">
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
                <Badge className="bg-[#CFE3DB] text-[#2E7D6B] border-[#2E7D6B]">Where care meets conscience</Badge>
                <h1 className="text-5xl lg:text-6xl font-serif text-[#58605E] leading-tight">
                  Why choose the <span className="text-[#2E7D6B] italic">IWC difference</span>
                </h1>
                <p className="text-xl text-[#58605E]/80 leading-relaxed">
                  We unite the world's most trusted healing environments under one ethical, human-first
                  umbrella—delivering evidence-based, heart-led experiences that honor the whole person.
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
                  alt="IWC healing community"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#58605E] mb-6">Our Foundation</h2>
            <p className="text-lg text-[#58605E]/70 max-w-3xl mx-auto">
              Built on the belief that everyone deserves access to dignified, effective healing— without stigma or
              compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#CFE3DB] text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-serif text-[#58605E] mb-4">Purpose</h3>
                <p className="text-[#58605E]/80">
                  Unite the world's most trusted healing environments under one ethical, human-first umbrella.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#CFE3DB] text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-serif text-[#58605E] mb-4">Vision</h3>
                <p className="text-[#58605E]/80">
                  A world where everyone can access the level of care they need—clinical, holistic, or
                  restorative—without stigma or compromise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#CFE3DB] text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-[#2E7D6B]" />
                </div>
                <h3 className="text-xl font-serif text-[#58605E] mb-4">Mission</h3>
                <p className="text-[#58605E]/80">
                  Operate a network of best-in-class centres delivering evidence-based, heart-led experiences tuned to
                  diverse needs, cultures, and budgets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 px-6 bg-[#CFE3DB]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#58605E] mb-6">Our Four Pillars</h2>
            <p className="text-lg text-[#58605E]/70 max-w-3xl mx-auto">
              Every decision, every program, every interaction is guided by these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#CFE3DB] group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#2E7D6B]/20 transition-colors">
                    <Heart className="h-8 w-8 text-[#2E7D6B]" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-[#58605E]">Whole-Spectrum Care</h3>
                    <p className="text-[#58605E]/80 leading-relaxed">
                      From medical detox to restorative retreat, we meet you wherever you are in your healing journey.
                      Our network spans the full spectrum of care needs.
                    </p>
                    <ul className="space-y-2 text-sm text-[#58605E]/70">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Medical detox and psychiatric care</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Integrated clinical and holistic programs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Wellness retreats and preventive care</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#CFE3DB] group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#2E7D6B]/20 transition-colors">
                    <Shield className="h-8 w-8 text-[#2E7D6B]" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-[#58605E]">Ethical Accessibility</h3>
                    <p className="text-[#58605E]/80 leading-relaxed">
                      Transparent pricing, evidence-based methods, and stigma-free language guide everything we do.
                      Healing should be accessible, not exploitative.
                    </p>
                    <ul className="space-y-2 text-sm text-[#58605E]/70">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Transparent, upfront pricing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Evidence-based treatment methods</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Stigma-free, compassionate language</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#CFE3DB] group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#2E7D6B]/20 transition-colors">
                    <Users className="h-8 w-8 text-[#2E7D6B]" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-[#58605E]">Human Environments</h3>
                    <p className="text-[#58605E]/80 leading-relaxed">
                      Dignity, privacy, and immersion in nature define our healing spaces. Every environment is designed
                      to restore the human spirit.
                    </p>
                    <ul className="space-y-2 text-sm text-[#58605E]/70">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Dignified, private accommodations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Nature-immersive settings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Trauma-informed design principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#CFE3DB] group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#2E7D6B]/20 transition-colors">
                    <Globe className="h-8 w-8 text-[#2E7D6B]" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-[#58605E]">Global Expertise, Local Heart</h3>
                    <p className="text-[#58605E]/80 leading-relaxed">
                      International standards meet regional soul. We bring world-class care while honoring local
                      cultures and communities.
                    </p>
                    <ul className="space-y-2 text-sm text-[#58605E]/70">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>International accreditation standards</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Culturally sensitive approaches</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#2E7D6B] rounded-full" />
                        <span>Local community integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evidence-Based Results */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#58605E] mb-6">Evidence-Based Results</h2>
            <p className="text-lg text-[#58605E]/70 max-w-3xl mx-auto">
              Our approach is grounded in research and validated by outcomes. Here's what the data tells us about
              effective healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-[#CFE3DB] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#2E7D6B] mb-2">30%</div>
                <div className="text-sm text-[#58605E]/70 mb-2">Higher completion rates</div>
                <div className="text-xs text-[#58605E]/60">with family participation programs</div>
              </CardContent>
            </Card>
            <Card className="border-[#CFE3DB] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#2E7D6B] mb-2">45%</div>
                <div className="text-sm text-[#58605E]/70 mb-2">Cost savings</div>
                <div className="text-xs text-[#58605E]/60">vs. traditional US treatment</div>
              </CardContent>
            </Card>
            <Card className="border-[#CFE3DB] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#2E7D6B] mb-2">16%</div>
                <div className="text-sm text-[#58605E]/70 mb-2">Annual growth</div>
                <div className="text-xs text-[#58605E]/60">in wellness retreat demand</div>
              </CardContent>
            </Card>
            <Card className="border-[#CFE3DB] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#2E7D6B] mb-2">Lower</div>
                <div className="text-sm text-[#58605E]/70 mb-2">Relapse rates</div>
                <div className="text-xs text-[#58605E]/60">with nature-based therapy</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#CFE3DB]/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif text-[#58605E] mb-4">Research-Driven Care</h3>
                <p className="text-[#58605E]/80 mb-6">
                  Every program in our network is built on peer-reviewed research and continuously refined based on
                  outcome data. We don't just follow trends—we follow evidence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#58605E]/80">
                      JAMA Psychiatry published research on family participation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#58605E]/80">NIH studies on nature-based therapy effectiveness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-[#2E7D6B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#58605E]/80">Global Wellness Institute trend analysis</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Research and outcomes data"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-6 bg-[#CFE3DB]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="IWC Founder"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-[#2E7D6B] text-white">Founder's Story</Badge>
              <h2 className="text-4xl font-serif text-[#58605E]">
                Born from personal experience, built with professional expertise
              </h2>
              <div className="space-y-4 text-[#58605E]/80">
                <p>
                  "I founded IWC after witnessing firsthand how fragmented and often exploitative the healing industry
                  can be. My own family's journey through addiction and recovery showed me both the best and worst of
                  what's available."
                </p>
                <p>
                  "We deserve better. We deserve care that's both clinically excellent and deeply human. That's what IWC
                  represents—a new standard where evidence meets empathy, where global expertise serves local hearts."
                </p>
              </div>
              <div className="pt-4">
                <p className="font-medium text-[#58605E]">Dr. Sarah Chen, MD, PhD</p>
                <p className="text-sm text-[#58605E]/70">Founder & Chief Medical Officer</p>
                <p className="text-xs text-[#58605E]/60 mt-1">Former Director of Addiction Medicine, Stanford Health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 px-6 bg-[#2E7D6B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Our Promise to You</h2>
          <p className="text-2xl text-white/90 font-light italic mb-8">
            "Wherever you enter, you'll find ethical care, dignified environments, and pathways that honour the whole
            person."
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            This isn't just our tagline—it's our commitment. Every center, every program, every interaction is designed
            to uphold this promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-help">
              <Button size="lg" className="bg-white text-[#2E7D6B] hover:bg-white/90 px-8 py-3">
                Experience the Difference
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
              >
                Speak with Our Team
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
