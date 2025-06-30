"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone, Heart, Users, Globe, BookOpen, Handshake } from "lucide-react"
import Link from "next/link"

// Subtle fade in animation
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const resources = [
  {
    icon: Phone,
    title: "24/7 Support Lines",
    description: "Connect instantly with trained counselors available 24/7.",
    items: [
      { text: "National Drug Helpline", link: "tel:1-844-289-0879", details: "1-844-289-0879" },
      { text: "Recovery.com Hotline", link: "tel:1-855-395-4047", details: "1-855-395-4047" },
      { text: "Veterans Crisis Line", link: "tel:1-800-273-8255", details: "1-800-273-8255" }
    ]
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Join local peer support meetings for strength in community.",
    items: [
      { text: "Alcoholics Anonymous (AA)", link: "https://www.aa.org/find-aa", details: "Find local meetings" },
      { text: "Narcotics Anonymous (NA)", link: "https://www.na.org/meetingsearch/", details: "Find local meetings" },
      { text: "SMART Recovery", link: "https://www.smartrecovery.org/local/", details: "Find local meetings" }
    ]
  },
  {
    icon: Heart,
    title: "Family Support",
    description: "Find guidance and community for families affected by addiction.",
    items: [
      { text: "Al-Anon Family Groups", link: "https://al-anon.org/al-anon-meetings/", details: "Find meetings" },
      { text: "Nar-Anon Family Groups", link: "https://www.nar-anon.org/find-a-meeting", details: "Find meetings" },
      { text: "Parents of Addicted Loved Ones", link: "https://palgroup.org/find-a-meeting/", details: "Find meetings" }
    ]
  },
  {
    icon: Globe,
    title: "Online Resources",
    description: "Access comprehensive recovery tools and information online.",
    items: [
      { text: "Recovery.com", link: "https://www.recovery.com", details: "Treatment finder" },
      { text: "SAMHSA Treatment Locator", link: "https://findtreatment.gov", details: "Government resource" },
      { text: "AddictionResource.com", link: "https://www.addictionresource.com", details: "Educational portal" }
    ]
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Learn about addiction and evidence-based treatment options.",
    items: [
      { text: "Understanding Addiction", link: "https://www.recovery.com/addiction", details: "Comprehensive guide" },
      { text: "Treatment Options Guide", link: "https://www.recovery.com/treatment", details: "Treatment types" },
      { text: "Recovery Process Overview", link: "https://www.recovery.com/recovery", details: "Recovery stages" }
    ]
  },
  {
    icon: Handshake,
    title: "Professional Help",
    description: "Connect with licensed specialists and treatment facilities.",
    items: [
      { text: "Find a Treatment Center", link: "https://www.recovery.com/treatment-finder", details: "Search centers" },
      { text: "Addiction Counselors", link: "https://www.recovery.com/professionals", details: "Find specialists" },
      { text: "Intervention Services", link: "https://www.recovery.com/intervention", details: "Get help now" }
    ]
  }
]

export default function GetHelpResources() {
  return (
    <section className="relative bg-[#F9FAF9] py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-[#06402B]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#06402B]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-[90rem] mx-auto px-8 md:px-12">
        {/* Top Content */}
        <motion.div 
          className="mb-20 md:mb-24 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-light text-[#06402B] tracking-widest uppercase mb-8">
            Recovery Resources
          </p>
          <div className="w-16 h-px bg-[#06402B]/20 mx-auto mb-12"></div>

          <h2 className="text-4xl md:text-6xl font-light text-black leading-[1.1] tracking-[-0.02em] mb-8">
            Support for your
            <br />
            <span className="italic font-serif text-[#06402B]">recovery journey</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-black/70 max-w-3xl mx-auto leading-relaxed">
            Access a comprehensive network of support services and resources for your recovery.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-lg p-10 relative overflow-hidden border border-[#06402B]/30 transition-colors duration-300 h-full">
                {/* Icon Container */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-8 inline-block">
                    {/* Icon */}
                    <div className="w-16 h-16 flex items-center justify-center bg-[#06402B]/5 rounded-full">
                      <resource.icon className="w-8 h-8 text-[#06402B]" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-[#06402B] mb-5">
                    {resource.title}
                  </h3>
                  
                  <p className="text-lg font-light text-black/70 leading-relaxed mb-8 line-clamp-1">
                    {resource.description}
                  </p>

                  <ul className="space-y-5 mt-auto">
                    {resource.items.map((item, i) => (
                      <li key={i}>
                        <Link 
                          href={item.link}
                          target={item.link.startsWith('tel:') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="block p-4 rounded-lg border border-[#06402B]/20 bg-white hover:border-[#06402B]/40 transition-colors duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="w-2 h-2 bg-[#06402B]/40 rounded-full flex-shrink-0"></span>
                              <div>
                                <span className="font-medium text-lg text-[#06402B]">
                                  {item.text}
                                </span>
                                <span className="ml-2 text-sm text-black/40">
                                  {item.details}
                                </span>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm ${
                              item.link.startsWith('tel:') 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-[#B7C9B7]/20 text-[#06402B]'
                            }`}>
                              {item.link.startsWith('tel:') ? 'Call' : 'Visit'}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 