"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Star,
  Leaf,
  Mountain,
  Waves,
  Sun,
  Filter,
  Search,
  Compass,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const centers = [
  {
    id: "malibu-sanctuary",
    name: "Malibu Sanctuary",
    location: "Malibu, California",
    type: "Luxury Residential",
    specialties: ["Addiction Treatment", "Dual Diagnosis", "Trauma Recovery"],
    environment: "Oceanfront",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    description:
      "Nestled on the pristine Malibu coastline, our flagship center combines luxury amenities with evidence-based treatment in a serene oceanfront setting.",
    features: ["Private beach access", "Equine therapy", "Gourmet nutrition", "Spa services"],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: "monterey-wellness",
    name: "Monterey Wellness Center",
    location: "Monterey, California",
    type: "Comprehensive Care",
    specialties: ["Mental Health", "Eating Disorders", "Family Therapy"],
    environment: "Coastal Forest",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    description:
      "Set among the redwoods of the Monterey Peninsula, this center specializes in comprehensive mental-health care with strong family-integration programs.",
    features: ["Family therapy intensive", "Cultural competency", "Research-based protocols", "Alumni network"],
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "costa-rica-retreat",
    name: "Costa Rica Healing Retreat",
    location: "Guanacaste, Costa Rica",
    type: "Adventure Therapy",
    specialties: ["Addiction Treatment", "Trauma Recovery", "Adventure Therapy"],
    environment: "Tropical",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
    description:
      "Experience transformative healing in a lush tropical environment where adventure therapy meets traditional treatment modalities.",
    features: ["Surf therapy", "Jungle immersion", "Yoga & meditation", "Adventure therapy"],
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "napa-recovery",
    name: "Napa Valley Recovery",
    location: "Napa Valley, California",
    type: "Luxury Residential",
    specialties: ["Addiction Treatment", "Dual Diagnosis", "Executive Programs"],
    environment: "Wine Country",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description:
      "Surrounded by rolling vineyards and serene landscapes, our Napa center offers discreet luxury treatment for executives and professionals.",
    features: ["Vineyard therapy", "Executive programs", "Luxury accommodations", "Culinary therapy"],
    rating: 4.7,
    reviews: 94,
  },
  {
    id: "big-sur-wilderness",
    name: "Big Sur Wilderness Center",
    location: "Big Sur, California",
    type: "Wilderness Therapy",
    specialties: ["Young Adults", "Adventure Therapy", "Wilderness Immersion"],
    environment: "Mountain Forest",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    description:
      "Deep in the redwood forests of Big Sur, this center offers intensive wilderness-therapy programs for young adults seeking profound transformation.",
    features: ["Wilderness expeditions", "Rock-climbing therapy", "Forest bathing", "Mindfulness retreats"],
    rating: 4.8,
    reviews: 73,
  },
  {
    id: "tulum-sanctuary",
    name: "Tulum Healing Sanctuary",
    location: "Tulum, Mexico",
    type: "Holistic Retreat",
    specialties: ["Holistic Healing", "Trauma Recovery", "Spiritual Wellness"],
    environment: "Beachfront Jungle",
    image:
      "https://images.unsplash.com/photo-1529688530646-c7d0b2d686f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description:
      "Ancient Mayan wisdom meets modern therapeutic practice in this beachfront sanctuary devoted to holistic healing and spiritual wellness.",
    features: ["Mayan ceremonies", "Cenote therapy", "Beachfront yoga", "Traditional healing"],
    rating: 4.9,
    reviews: 112,
  },
]

const locations = ["All Locations", "California", "Costa Rica", "Mexico", "International"]
const specialties = [
  "All Specialties",
  "Addiction Treatment",
  "Mental Health",
  "Dual Diagnosis",
  "Trauma Recovery",
  "Eating Disorders",
  "Family Therapy",
]
const environments = ["All Environments", "Oceanfront", "Mountain Forest", "Tropical", "Wine Country", "Coastal Forest"]

export default function NetworkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties")
  const [selectedEnvironment, setSelectedEnvironment] = useState("All Environments")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCenters = centers.filter((center) => {
    const matchesSearch =
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLocation =
      selectedLocation === "All Locations" ||
      center.location.includes(selectedLocation) ||
      (selectedLocation === "International" && !center.location.includes("California"))

    const matchesSpecialty = selectedSpecialty === "All Specialties" || center.specialties.includes(selectedSpecialty)

    const matchesEnvironment = selectedEnvironment === "All Environments" || center.environment === selectedEnvironment

    return matchesSearch && matchesLocation && matchesSpecialty && matchesEnvironment
  })

  const getEnvironmentIcon = (environment: string) => {
    switch (environment) {
      case "Oceanfront":
        return <Waves className="h-4 w-4 text-blue-500" />
      case "Mountain Forest":
        return <Mountain className="h-4 w-4 text-green-600" />
      case "Tropical":
        return <Sun className="h-4 w-4 text-yellow-500" />
      case "Wine Country":
        return <Leaf className="h-4 w-4 text-purple-500" />
      case "Coastal Forest":
        return <Leaf className="h-4 w-4 text-green-500" />
      case "Beachfront Jungle":
        return <Sun className="h-4 w-4 text-orange-500" />
      default:
        return <Leaf className="h-4 w-4 text-green-500" />
    }
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
              <Link href="/network" className="text-[#2E7D6B] font-medium">
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
                <Link href="/network" className="text-[#2E7D6B] font-medium py-2">
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
      <section className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] bg-[#2E7D6B]/5 mb-4">
              Global Network
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#58605E] mb-4 sm:mb-6">
              Find your healing sanctuary
            </h1>
            <p className="text-lg sm:text-xl text-[#58605E]/80 max-w-2xl mx-auto">
              Discover centers across the globe, each uniquely designed to support your journey toward lasting wellness
              and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="border-[#CFE3DB] p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#58605E]/50" />
                <Input
                  placeholder="Search centers by name, location, or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Filter Toggle */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-[#2E7D6B] text-[#2E7D6B]"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                <div className="text-sm text-[#58605E]/70">
                  {filteredCenters.length} center{filteredCenters.length !== 1 ? "s" : ""} found
                </div>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[#CFE3DB]">
                  <div>
                    <Label htmlFor="location" className="text-sm font-medium text-[#58605E] mb-2 block">
                      Location
                    </Label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialty" className="text-sm font-medium text-[#58605E] mb-2 block">
                      Specialty
                    </Label>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="environment" className="text-sm font-medium text-[#58605E] mb-2 block">
                      Environment
                    </Label>
                    <Select value={selectedEnvironment} onValueChange={setSelectedEnvironment}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {environments.map((environment) => (
                          <SelectItem key={environment} value={environment}>
                            {environment}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Center Matching CTA */}
          <Card className="border-[#2E7D6B] bg-gradient-to-r from-[#2E7D6B]/5 to-[#2E7D6B]/10 p-6 sm:p-8 text-center mt-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="w-12 h-12 bg-[#2E7D6B]/20 rounded-full flex items-center justify-center mx-auto">
                <Compass className="h-6 w-6 text-[#2E7D6B]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif text-[#58605E]">
                  Not sure which center fits your needs?
                </h3>
                <p className="text-[#58605E]/80">
                  Get personalized recommendations based on your specific situation and preferences.
                </p>
                <div className="text-sm text-[#58605E]/70">
                  <p>Free consultation • Expert guidance • Tailored to your needs</p>
                </div>
              </div>
              <Link href="/find-your-center">
                <Button
                  size="lg"
                  className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 shadow-xl hover:shadow-2xl transition-all duration-300 h-12 px-8 text-base font-semibold rounded-xl"
                >
                  <Compass className="mr-2 h-5 w-5" />
                  Get Personalized Recommendations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredCenters.map((center) => (
              <Card key={center.id} className="border-[#CFE3DB] overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[16/10] relative">
                  <img
                    src={center.image || "/placeholder.svg"}
                    alt={center.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#2E7D6B] text-white">{center.type}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{center.rating}</span>
                    <span className="text-xs text-gray-600">({center.reviews})</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#58605E] mb-2">{center.name}</h3>
                      <div className="flex items-center text-[#58605E]/70 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{center.location}</span>
                        <div className="ml-2 flex items-center">
                          {getEnvironmentIcon(center.environment)}
                          <span className="text-sm ml-1">{center.environment}</span>
                        </div>
                      </div>
                      <p className="text-[#58605E]/80 text-sm leading-relaxed">{center.description}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-[#58605E] mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-[#58605E] mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-[#CFE3DB]">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button className="bg-[#2E7D6B] hover:bg-[#2E7D6B]/90 flex-1">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Center
                      </Button>
                      <Button variant="outline" className="border-[#2E7D6B] text-[#2E7D6B] flex-1 bg-transparent">
                        <Mail className="h-4 w-4 mr-2" />
                        Get Info
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCenters.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#2E7D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-[#2E7D6B]" />
              </div>
              <h3 className="text-xl font-semibold text-[#58605E] mb-2">No centers found</h3>
              <p className="text-[#58605E]/70 mb-4">
                Try adjusting your search criteria or filters to find more options.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedLocation("All Locations")
                  setSelectedSpecialty("All Specialties")
                  setSelectedEnvironment("All Environments")
                }}
                className="border-[#2E7D6B] text-[#2E7D6B]"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#2E7D6B] to-[#2E7D6B]/90">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                Find your perfect center today
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Every center in our network meets the highest standards for clinical excellence, ethical practices, and
                compassionate care. Let us help you find the right fit.
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
                  Speak with Care Team
                </Button>
              </Link>
              <Link href="/find-your-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-xl w-full sm:w-auto"
                >
                  <Compass className="mr-3 h-5 w-5" />
                  Find Your Perfect Center
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
