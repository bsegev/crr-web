"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { 
  PlaneLanding, Car, UserCheck, Home, Compass, HeartHandshake,
  Globe, Plane, FileCheck, HandHeart, 
  Map, CarFront, Bus, CalendarCheck,
  Shirt, Droplets, Pill, FileText,
  ChevronDown, Download, Luggage, Check
} from "lucide-react"
import { useState } from "react"
import { Tabs } from "@/components/ui/aceternity-tabs"
import { cn } from "@/lib/utils"

export default function PreparingForYourStayPage() {
  const tabs = [
    {
      title: "International Participants",
      value: "international",
      content: <InternationalContent />
    },
    {
      title: "Local Participants", 
      value: "local",
      content: <LocalContent />
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/facility/spaces/group-session.jpg"
            alt="Preparing For Your Stay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-extra-dark/60 to-navy-dark/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light text-white mb-6">
              Prepare for a Seamless
              <br />
              <span className="italic font-serif text-orange">Journey to Recovery</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From packing your bags to arriving at Costa Rica Recovery, we're here to guide you through every step of the way.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us for Any Questions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* A Warm Welcome Awaits You */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Your Journey Begins Here
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              A Warm Welcome <span className="italic font-serif text-orange">Awaits You</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Costa Rica Recovery, we want you to feel supported from the moment you begin your journey. Whether you're preparing for your stay or traveling to Costa Rica for the first time, we've taken every step to ensure that your experience is seamless and comfortable. From packing your essentials to our personalized airport pickup, we are here to make sure you feel confident, cared for, and ready to begin this transformative process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Travel Essentials Section with Tabs */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Travel Essentials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              What You Need to <span className="italic font-serif text-orange">Know</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Are you joining us from Costa Rica or traveling internationally? Select the appropriate tab to ensure you receive the most relevant information for a smooth preparation.
            </p>
          </motion.div>

          {/* Aceternity Tabs Component */}
          <Tabs 
            tabs={tabs}
            containerClassName="mb-16"
            activeTabClassName="bg-orange text-white shadow-xl border border-orange"
            tabClassName="px-4 sm:px-8 py-3 sm:py-4 font-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider text-navy-extra-dark bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md text-center"
            contentClassName="border-t-2 border-orange/20 pt-8"
          />
        </div>
      </section>

      {/* Arrival in Costa Rica Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Your Arrival
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Smooth Start in <span className="italic font-serif text-orange">Costa Rica</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From the moment you step off the plane, our dedicated team is here to make your arrival seamless and stress-free.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              {[
                {
                  icon: PlaneLanding,
                  title: "Airport Pickup",
                  description: "Once you arrive at Juan Santamaría International Airport (SJO), a professional driver will be waiting, ready to assist with your luggage and escort you to a comfortable, private vehicle."
                },
                {
                  icon: Car,
                  title: "Private Transportation",
                  description: "Our driver will transport you directly to the CRR facility, offering you a chance to unwind and take in the beautiful Costa Rican surroundings."
                },
                {
                  icon: UserCheck,
                  title: "Arrival and Orientation",
                  description: "Upon reaching CRR, our friendly team will warmly welcome you. You'll be given a tour of the facility, shown to your room, and provided with an orientation."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 lg:gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                      <item.icon className="h-7 w-7 lg:h-8 lg:w-8 text-orange" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl lg:text-2xl font-primary font-light text-navy-extra-dark mb-2 lg:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-secondary font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/preparing-stay/smooth-start.png"
                  alt="CRR driver welcoming a guest at the airport with branded transportation"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-extra-dark/10 to-transparent" />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-navy-extra-dark/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preparing Mentally and Emotionally */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Mental Preparation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Preparing Mentally and <span className="italic font-serif text-orange">Emotionally</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Beyond packing and travel, mental and emotional preparation is just as important. Here's how to start your journey on the right foot.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/preparing-stay/mental-preparation.webp"
                  alt="Person in peaceful contemplation preparing for their recovery journey"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-extra-dark/20 to-transparent" />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-navy-extra-dark/5 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 lg:space-y-8 order-1 lg:order-2"
            >
              {[
                {
                  icon: Home,
                  title: "Prepare for a New Environment",
                  description: "Know that you're stepping into a safe and supportive space that is fully dedicated to your healing and growth. Our team is here to help you through every step of the recovery process, so you never have to feel alone."
                },
                {
                  icon: Compass,
                  title: "Set Personal Intentions",
                  description: "Take a moment before your stay to reflect on your personal goals. Whether it's building a solid foundation for long-term recovery or focusing on specific areas of personal growth, setting clear intentions will guide you through this transformative process."
                },
                {
                  icon: HeartHandshake,
                  title: "Trust the Process",
                  description: "Recovery is deeply personal, and progress looks different for everyone. Trust in the process, knowing that our comprehensive care approach is designed to support your unique needs and help you on the path to healing."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 lg:gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                      <item.icon className="h-7 w-7 lg:h-8 lg:w-8 text-orange" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl lg:text-2xl font-primary font-light text-navy-extra-dark mb-2 lg:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-secondary font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PreparingFAQ />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-navy-extra-dark to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light mb-6">
              Ready to Begin?
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              We want you to feel fully prepared and supported. Let us know if you have any questions about what to expect or how to get ready.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-12 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Reach Out for Help Preparing
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// Tab Content Components
function InternationalContent() {
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* What to Expect */}
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-orange" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-primary font-light text-navy-extra-dark mb-2">
              Flying to Costa Rica: What You Need to Know
            </h3>
            <p className="text-base font-secondary font-light text-gray-600">
              We understand that traveling internationally can come with its own set of challenges. Our team is fully equipped to manage every detail of your journey.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6 hover:bg-orange/5 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
              <Plane className="w-6 h-6 text-orange" />
            </div>
            <h4 className="text-lg font-secondary font-semibold text-navy-extra-dark mb-2">Flights</h4>
            <p className="text-sm font-secondary text-gray-700 leading-relaxed">
              We recommend booking your flight to Juan Santamaría International Airport (SJO). Our admissions team is available to assist with travel logistics.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 hover:bg-orange/5 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-orange" />
            </div>
            <h4 className="text-lg font-secondary font-semibold text-navy-extra-dark mb-2">Passport Requirements</h4>
            <p className="text-sm font-secondary text-gray-700 leading-relaxed">
              Ensure your passport is valid for at least six months beyond your stay. If you need visa guidance, we are here to help.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 hover:bg-orange/5 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
              <HandHeart className="w-6 h-6 text-orange" />
            </div>
            <h4 className="text-lg font-secondary font-semibold text-navy-extra-dark mb-2">Airport Pickup</h4>
            <p className="text-sm font-secondary text-gray-700 leading-relaxed">
              Our white-glove service includes airport pickup to ensure a seamless and comfortable journey to CRR.
            </p>
          </div>
        </div>
      </div>

      {/* Packing List Accordion */}
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
            <Luggage className="w-6 h-6 text-orange" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-primary font-light text-navy-extra-dark mb-2">
              Packing for Your Stay
            </h3>
            <p className="text-base font-secondary font-light text-gray-600">
              Essentials for International Participants
            </p>
          </div>
        </div>
        
        <PackingAccordion 
          items={internationalPackingItems}
          expandedIndex={expandedAccordion}
          setExpandedIndex={setExpandedAccordion}
        />
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <a 
            href="/CRR-Packing-List.pdf" 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-white font-secondary font-semibold text-sm uppercase tracking-wider hover:bg-orange-dark transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Complete Packing List
          </a>
        </div>
      </div>

      {/* Arrival */}
      <div className="bg-gradient-to-br from-navy-extra-dark to-navy-dark rounded-2xl p-8 md:p-10 shadow-lg text-white">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
            <PlaneLanding className="w-6 h-6 text-orange" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-primary font-light mb-2">
              What to Expect Upon Arrival
            </h3>
            <p className="text-lg font-secondary font-light text-white/80 leading-relaxed">
              Once you arrive in Costa Rica, our team will handle everything from transportation to orientation. Our driver will meet you at the airport and escort you to our facility. Upon arrival, you'll be welcomed, shown to your room, and guided through the next steps for a smooth recovery experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function LocalContent() {
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* What to Expect */}
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
            <Map className="w-6 h-6 text-orange" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-primary font-light text-navy-extra-dark mb-2">
              Traveling Locally: What to Expect
            </h3>
            <p className="text-base font-secondary font-light text-gray-600">
              For local residents, arriving at CRR is a seamless process. Our team is here to ensure every detail is taken care of.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6 hover:bg-orange/5 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
              <CarFront className="w-6 h-6 text-orange" />
            </div>
            <h4 className="text-lg font-secondary font-semibold text-navy-extra-dark mb-2">Driving to CRR</h4>
            <p className="text-sm font-secondary text-gray-700 leading-relaxed">
              Complimentary parking is available for those driving to our facility. Reach out to our team for detailed driving instructions.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 hover:bg-orange/5 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
              <Bus className="w-6 h-6 text-orange" />
            </div>
            <h4 className="text-lg font-secondary font-semibold text-navy-extra-dark mb-2">Public Transportation</h4>
            <p className="text-sm font-secondary text-gray-700 leading-relaxed">
              We will gladly assist with public transit options from nearby cities. Contact us for detailed guidance and shuttle information.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 hover:bg-orange/5 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
              <CalendarCheck className="w-6 h-6 text-orange" />
            </div>
            <h4 className="text-lg font-secondary font-semibold text-navy-extra-dark mb-2">Same-Day Arrival</h4>
            <p className="text-sm font-secondary text-gray-700 leading-relaxed">
              We will facilitate your check-in and ensure your accommodations are ready upon arrival. Simply coordinate with us ahead of time.
            </p>
          </div>
        </div>
      </div>

      {/* Packing List Accordion */}
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
            <Luggage className="w-6 h-6 text-orange" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-primary font-light text-navy-extra-dark mb-2">
              Packing for Your Stay
            </h3>
            <p className="text-base font-secondary font-light text-gray-600">
              Essentials for Local Participants
            </p>
          </div>
        </div>
        
        <PackingAccordion 
          items={localPackingItems}
          expandedIndex={expandedAccordion}
          setExpandedIndex={setExpandedAccordion}
        />
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <a 
            href="/CRR-Packing-List.pdf" 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-white font-secondary font-semibold text-sm uppercase tracking-wider hover:bg-orange-dark transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Complete Packing List
          </a>
        </div>
      </div>

      {/* Arrival */}
      <div className="bg-gradient-to-br from-navy-extra-dark to-navy-dark rounded-2xl p-8 md:p-10 shadow-lg text-white">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
            <Home className="w-6 h-6 text-orange" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-primary font-light mb-2">
              Preparing for Your First Day at CRR
            </h3>
            <p className="text-lg font-secondary font-light text-white/80 leading-relaxed">
              Upon arrival, our dedicated team will greet you and facilitate a smooth intake process. We take care of all the details to ensure your transition into the program is comfortable and welcoming. Prior to your arrival, please complete all necessary pre-admission forms and reach out with any questions or concerns. We are here to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Packing Accordion Component
function PackingAccordion({ items, expandedIndex, setExpandedIndex }: {
  items: Array<{ title: string; items: string[]; icon: any }>
  expandedIndex: number | null
  setExpandedIndex: (index: number | null) => void
}) {
  return (
    <div className="space-y-4">
      {items.map((section, index) => {
        const IconComponent = section.icon
        return (
          <div 
            key={index}
            className={cn(
              "border rounded-xl overflow-hidden transition-all duration-300",
              expandedIndex === index 
                ? "border-orange shadow-md bg-white" 
                : "border-gray-200 shadow-sm bg-gray-50 hover:border-orange/30 hover:shadow-md"
            )}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className={cn(
                "w-full flex items-center justify-between p-5 text-left transition-all duration-300",
                expandedIndex === index ? "bg-orange/5" : "bg-transparent hover:bg-white"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                  expandedIndex === index ? "bg-orange/10" : "bg-orange/5"
                )}>
                  <IconComponent className="w-4 h-4 text-orange" />
                </div>
                <span className="text-lg font-secondary font-semibold text-navy-extra-dark">
                  {section.title}
                </span>
              </div>
            <motion.div
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className={cn(
                "w-5 h-5 transition-colors duration-300",
                expandedIndex === index ? "text-orange" : "text-gray-400"
              )} />
            </motion.div>
          </button>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-2 bg-white border-t border-gray-100">
                  <ul className="space-y-3 text-sm font-secondary text-gray-700">
                    {section.items.map((item, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-3 pl-2"
                      >
                        <Check className="text-orange w-4 h-4 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item }} className="leading-relaxed" />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

// Packing list data
const internationalPackingItems = [
  {
    title: "Clothing",
    icon: Shirt,
    items: [
      "<strong>7-10 Casual Outfits:</strong> Lightweight, breathable clothing suitable for Costa Rica's tropical climate and daily activities.",
      "<strong>2-3 Activewear Sets:</strong> For yoga, meditation, or fitness classes.",
      "<strong>Swimsuit and Beachwear:</strong> For the bi-weekly beach trips and other water activities.",
      "<strong>Light Jacket/Sweater:</strong> While Costa Rica is generally warm, cooler evenings during excursions may require a light jacket.",
      "<strong>Sleepwear:</strong> 2-3 sets of comfortable pajamas.",
      "<strong>Underwear and Socks:</strong> Pack enough for a week, with access to laundry services.",
      "<strong>Comfortable Shoes:</strong> A pair of walking shoes or sneakers for activities, and flip-flops for leisure."
    ]
  },
  {
    title: "Personal Hygiene Items",
    icon: Droplets,
    items: [
      "<strong>Basic Toiletries:</strong> Toothbrush, toothpaste, deodorant, alcohol-free shampoo, conditioner, and body wash. CRR provides towels and bedding, but personal hygiene products should be packed. Please note: alcohol-containing products are not allowed.",
      "<strong>Sunscreen and Insect Repellent:</strong> Important for the tropical climate."
    ]
  },
  {
    title: "Medications",
    icon: Pill,
    items: [
      "<strong>Prescription Medications:</strong> Bring enough for the entire duration of your stay, with labeled instructions and documentation from your doctor."
    ]
  },
  {
    title: "Documents",
    icon: FileText,
    items: [
      "<strong>Passport:</strong> Ensure it is valid for at least six months beyond your stay.",
      "<strong>Travel Itinerary:</strong> Print or save your flight details.",
      "<strong>Debit/Credit Card:</strong> For any additional expenses or personal purchases during your stay."
    ]
  }
]

const localPackingItems = [
  {
    title: "Clothing",
    icon: Shirt,
    items: [
      "<strong>7-10 Casual Outfits:</strong> Comfortable, casual wear suitable for daily therapy sessions and activities.",
      "<strong>2-3 Activewear Sets:</strong> For yoga, meditation, or fitness classes.",
      "<strong>Swimsuit and Beachwear:</strong> For the bi-weekly beach trips and other water activities.",
      "<strong>Light Jacket/Sweater:</strong> Costa Rica's evenings can be cooler, so pack accordingly for evenings outdoors.",
      "<strong>Sleepwear:</strong> 2-3 sets of comfortable pajamas.",
      "<strong>Underwear and Socks:</strong> Enough for a week, with access to laundry services.",
      "<strong>Comfortable Shoes:</strong> A pair of walking shoes or sneakers for daily activities, and flip-flops for relaxation."
    ]
  },
  {
    title: "Personal Hygiene Items",
    icon: Droplets,
    items: [
      "<strong>Basic Toiletries:</strong> Bring your own deodorant, shampoo, soap, and other personal care items. CRR provides towels and bedding, but personal hygiene products should be packed. Please note: alcohol-containing products are not permitted.",
      "<strong>Sunscreen and Insect Repellent:</strong> Especially useful for outdoor activities or excursions."
    ]
  },
  {
    title: "Medications",
    icon: Pill,
    items: [
      "<strong>Prescription Medications:</strong> Bring your medications in their original packaging with labeled instructions from your doctor."
    ]
  },
  {
    title: "Documents",
    icon: FileText,
    items: [
      "<strong>Valid ID:</strong> A Costa Rican government-issued ID (cédula or driver's license) is required for identification.",
      "<strong>Debit/Credit Card:</strong> For personal expenses during your stay."
    ]
  }
]

// FAQ Component
function PreparingFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What should I pack for my stay?",
      answer: "We provide a comprehensive packing list that includes essentials like casual clothing, personal hygiene products, and any medications. You can find the full list above or download the PDF version."
    },
    {
      question: "How can I prepare mentally and emotionally?",
      answer: "Take time to reflect on your personal goals and intentions for recovery. Know that you're entering a safe, supportive environment dedicated to your healing. Trust the process and remember that our team is here to support you through every step."
    },
    {
      question: "How will I get to the facility from the airport?",
      answer: "For international guests, we provide complimentary airport pickup from Juan Santamaría International Airport (SJO). Our professional driver will meet you at arrivals and transport you directly to our facility in a comfortable, private vehicle."
    }
  ]

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
            Your Questions,{" "}
            <span className="italic font-serif text-orange">Answered</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange/30 transition-colors duration-300 bg-white"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-secondary font-medium text-navy-extra-dark pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-orange" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-sm sm:text-base font-secondary text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

