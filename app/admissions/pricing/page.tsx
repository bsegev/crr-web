"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { 
  DollarSign, CheckCircle2, Users, Home, 
  Utensils, Activity, Heart, Stethoscope,
  Clock, Shield, Phone, ChevronDown
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Image */}
          <div className="block md:hidden">
            <Image
              src="/pricing/pricing-2-mobile.png"
              alt="Transparent Pricing for Life-Changing Care"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block">
            <Image
              src="/pricing/pricing-2-desktop.png"
              alt="Transparent Pricing for Life-Changing Care"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay Layers */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-extra-dark/60 to-navy-dark/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-6">
              Investment in Recovery
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light mb-6 leading-[1.1] tracking-[-0.02em] text-white">
              Transparent Pricing for
              <br />
              <span className="italic font-serif text-orange">Life-Changing Care</span>
            </h1>
            <p className="text-lg sm:text-xl font-secondary font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
              We believe in honest, straightforward pricing with no hidden fees. Your investment covers comprehensive, personalized treatment designed to support lasting recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Pricing Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Program Investment
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Our Program <span className="italic font-serif text-orange">Rates</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              All-inclusive pricing with everything you need for a successful recovery journey
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 30 Day Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-orange/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-primary font-light text-navy-extra-dark mb-2">
                  30-Day Program
                </h3>
                <p className="text-sm font-secondary text-gray-600 mb-4">
                  Foundation for Recovery
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-light text-orange">$10,000</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>Complete foundation program</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>All services included</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>24/7 medical support</span>
                </li>
              </ul>
            </motion.div>

            {/* 60 Day Program - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border-2 border-orange shadow-xl transform md:scale-105 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-xs font-secondary font-semibold tracking-wider">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-primary font-light text-navy-extra-dark mb-2">
                  60-Day Program
                </h3>
                <p className="text-sm font-secondary text-gray-600 mb-4">
                  Recommended for Lasting Change
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-light text-orange">$20,000</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>Extended foundation + growth</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>Deeper therapeutic work</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>Stronger relapse prevention</span>
                </li>
              </ul>
            </motion.div>

            {/* 90 Day Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-orange/30 transition-all duration-300 hover:shadow-lg relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy-extra-dark text-white px-4 py-1 rounded-full text-xs font-secondary font-semibold tracking-wider">
                RECOMMENDED
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-primary font-light text-navy-extra-dark mb-2">
                  90-Day Program
                </h3>
                <p className="text-sm font-secondary text-gray-600 mb-4">
                  Complete Transformation
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-light text-orange">$30,000</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>Comprehensive transformation</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>Maximum clinical benefit</span>
                </li>
                <li className="flex items-start gap-2 text-sm font-secondary text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>Highest success rates</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-sm font-secondary text-gray-600 italic"
          >
            Payment plans available on a per-month basis
          </motion.p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Comprehensive Care
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              What's <span className="italic font-serif text-orange">Included</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your investment covers everything you need for a successful recovery—no hidden fees or surprise charges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Individual & Group Therapy",
                description: "Daily therapeutic sessions with licensed professionals specializing in addiction and trauma"
              },
              {
                icon: Stethoscope,
                title: "24/7 Medical Care",
                description: "Round-the-clock nursing staff and regular physician consultations for your safety and wellbeing"
              },
              {
                icon: Home,
                title: "Private Accommodations",
                description: "Comfortable shared rooms in a peaceful, healing environment with modern amenities"
              },
              {
                icon: Utensils,
                title: "Gourmet Meals",
                description: "Three nutritious chef-prepared meals daily, plus snacks, with accommodations for dietary needs"
              },
              {
                icon: Activity,
                title: "Wellness Programming",
                description: "Yoga, fitness training, meditation, art therapy, and outdoor activities in Costa Rica's natural beauty"
              },
              {
                icon: Heart,
                title: "Holistic Therapies",
                description: "Massage, acupuncture, mindfulness practices, and other complementary healing modalities"
              },
              {
                icon: Shield,
                title: "Airport Transportation",
                description: "Complimentary pickup and drop-off from San José or Liberia international airports"
              },
              {
                icon: CheckCircle2,
                title: "Aftercare Planning",
                description: "Comprehensive discharge planning and ongoing support to ensure lasting recovery"
              },
              {
                icon: Clock,
                title: "Structured Programming",
                description: "Full daily schedule balancing therapy, wellness, personal time, and recreational activities"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-lg font-primary font-light text-navy-extra-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-secondary text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Private Pay Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Our Approach
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Why We're <span className="italic font-serif text-orange">Private Pay</span>
              </h2>
              <p className="text-lg font-secondary font-light text-gray-700 leading-relaxed mb-4">
                As a private-pay facility, we're able to provide truly personalized care without the constraints and limitations often imposed by insurance companies.
              </p>
              <p className="text-base font-secondary font-light text-gray-600 leading-relaxed">
                This means you receive our full structured program designed for lasting recovery—not what an insurance company dictates. We can extend your stay if you need more time, and make adjustments to support your individual healing process within our proven framework.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-primary font-light text-navy-extra-dark mb-2">
                      Complete Confidentiality
                    </h3>
                    <p className="text-sm font-secondary text-gray-600 leading-relaxed">
                      No insurance involvement means your treatment remains completely private—no claims, no records, no third-party access to your personal health information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-primary font-light text-navy-extra-dark mb-2">
                      Personalized Attention
                    </h3>
                    <p className="text-sm font-secondary text-gray-600 leading-relaxed">
                      You receive our proven structured program with individualized attention and support—not what insurance dictates. Our approach balances evidence-based structure with personal care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-primary font-light text-navy-extra-dark mb-2">
                      No Authorization Delays
                    </h3>
                    <p className="text-sm font-secondary text-gray-600 leading-relaxed">
                      Start treatment immediately when you're ready, without waiting for insurance approval or dealing with claim denials and limitations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Flexible Options
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Payment <span className="italic font-serif text-orange">Options</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We offer several payment methods to make your investment in recovery as straightforward as possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-secondary font-medium text-navy-extra-dark mb-1">
                    Wire Transfer
                  </h3>
                  <p className="text-sm font-secondary text-gray-600">
                    Secure international and domestic wire transfers accepted
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-secondary font-medium text-navy-extra-dark mb-1">
                    Credit Card
                  </h3>
                  <p className="text-sm font-secondary text-gray-600">
                    Major credit cards accepted for your convenience
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-secondary font-medium text-navy-extra-dark mb-1">
                    Bank Transfer
                  </h3>
                  <p className="text-sm font-secondary text-gray-600">
                    Direct bank transfers accepted for secure payment
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-secondary font-medium text-navy-extra-dark mb-1">
                    Payment Plans
                  </h3>
                  <p className="text-sm font-secondary text-gray-600">
                    Flexible payment arrangements available—speak with our admissions team
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <PricingFAQ />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-navy-extra-dark to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light mb-6 leading-[1.1] tracking-[-0.02em]">
              Ready to Begin Your <span className="italic font-serif text-orange">Recovery?</span>
            </h2>
            <p className="text-lg font-secondary font-light text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our admissions team is here to answer any questions about pricing, payment options, and getting started with treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact Admissions
                </motion.button>
              </Link>
              <Link href="/admissions/admissions-process">
                <motion.button
                  className="bg-white/10 hover:bg-white/20 text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  View Admissions Process
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// FAQ Component
function PricingFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "Is financing available?",
      answer: "Yes, we offer flexible payment plans and can work with you to create a payment arrangement that fits your financial situation. Our admissions team is happy to discuss options that make treatment accessible while maintaining the quality of care you deserve."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, wire transfers, and direct bank transfers. We are a private-pay facility and do not work with insurance companies. This allows us to provide personalized care without the constraints of insurance limitations. Our admissions team can guide you through the payment process and discuss flexible payment arrangements."
    },
    {
      question: "What happens if I need to extend my stay?",
      answer: "Program extensions are prorated at the daily rate of $333 per day. If you and your clinical team determine that additional time would benefit your recovery, we'll work with you to arrange an extension. Many participants find that staying longer provides the foundation they need for lasting success."
    },
    {
      question: "Are there any additional costs I should know about?",
      answer: "Our pricing is all-inclusive with no hidden fees. The program rate covers accommodations, meals, all therapy, medical care, activities, and airport transportation. The only potential additional costs would be personal items, excursions you choose to add, or international phone calls beyond the included phone time."
    },
    {
      question: "What is your refund policy?",
      answer: "We have a clear refund policy that our admissions team will review with you during the intake process. If circumstances require you to leave treatment early, refunds are evaluated on a case-by-case basis. We're committed to being fair and transparent about our policies."
    },
    {
      question: "Why is your program more affordable than many U.S. facilities?",
      answer: "Our location in Costa Rica allows us to provide world-class treatment at a more accessible price point than comparable U.S. facilities, without compromising quality. Lower operational costs, combined with an exceptional staff-to-client ratio and Costa Rica's natural healing environment, mean you receive premium care at a better value."
    }
  ]

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24">
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
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
            Pricing <span className="italic font-serif text-orange">Questions</span>
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
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange/30 transition-colors duration-300 bg-white shadow-sm"
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

