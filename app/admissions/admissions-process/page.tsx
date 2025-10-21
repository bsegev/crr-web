"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { 
  Phone, CheckCircle2, ClipboardList, UserCheck, 
  Shield, Heart, HandHeart, ChevronDown 
} from "lucide-react"
import { useState } from "react"
import { Timeline } from "@/components/ui/timeline"

export default function AdmissionsProcessPage() {
  const timelineData = [
    {
      title: "Step 01",
      content: (
        <div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-primary font-light text-navy-extra-dark">
                  Initial Consultation
                </h3>
              </div>
            </div>
            <p className="text-gray-700 font-secondary font-light leading-relaxed mb-6">
              Start with a confidential phone or virtual consultation with one of our admissions coordinators. We'll listen to your needs, answer any questions, and provide a comprehensive overview of our programs and services.
            </p>
            <ul className="space-y-2">
              {["Confidential discussion", "Program overview", "Cost breakdown", "Answer your questions"].map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm font-secondary text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Step 02",
      content: (
        <div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-primary font-light text-navy-extra-dark">
                  Clinical Assessment
                </h3>
              </div>
            </div>
            <p className="text-gray-700 font-secondary font-light leading-relaxed mb-6">
              Our clinical team will conduct an in-depth assessment of your mental and physical health. This may include evaluating substance use history, co-occurring mental health issues, and personal circumstances.
            </p>
            <ul className="space-y-2">
              {["Health history review", "Substance use assessment", "Mental health evaluation", "Customized treatment planning"].map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm font-secondary text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Step 03",
      content: (
        <div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-primary font-light text-navy-extra-dark">
                  Admissions Approval
                </h3>
              </div>
            </div>
            <p className="text-gray-700 font-secondary font-light leading-relaxed mb-6">
              After the assessment, you'll receive an admissions approval, along with detailed information about what to bring, travel logistics, and what to expect during your stay.
            </p>
            <ul className="space-y-2">
              {["Approval confirmation", "Packing list provided", "Travel arrangements", "Pre-arrival preparation"].map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm font-secondary text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Step 04",
      content: (
        <div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-primary font-light text-navy-extra-dark">
                  Arrival and Orientation
                </h3>
              </div>
            </div>
            <p className="text-gray-700 font-secondary font-light leading-relaxed mb-6">
              Upon arrival, you'll be greeted by our welcoming staff and taken through an orientation to familiarize you with our facility, daily schedule, and care team.
            </p>
            <ul className="space-y-2">
              {["Warm welcome", "Facility tour", "Meet your care team", "Settle into your room"].map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm font-secondary text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/facility/psychologist-welcome.jpg"
            alt="Admissions Process"
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
              Your First Step Toward
              <br />
              <span className="italic font-serif text-orange">Recovery Starts Here</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our admissions process is designed with simplicity and support in mind, ensuring you can take the next step with confidence and ease.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Speak with Our Admissions Team
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Invest in Your Future Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Your Investment
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Invest in Your Future,
                <br />
                <span className="italic font-serif text-orange">Invest in Your Recovery</span>
              </h2>
              
              <p className="text-lg font-secondary font-light text-gray-700 leading-relaxed mb-6">
                We know that entering treatment is a major emotional and financial decision, but it's one that can transform your life.
              </p>
              
              <p className="text-base font-secondary font-light text-gray-600 leading-relaxed">
                Our recovery programs offer not just treatment, but a comprehensive approach to healing, ensuring you leave our facility with the tools you need for long-term sobriety and personal growth.
              </p>
            </motion.div>

            {/* Right Side - Stats/Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-primary font-light text-navy-extra-dark mb-2">
                      Streamlined Process
                    </h3>
                    <p className="text-sm font-secondary text-gray-600 leading-relaxed">
                      We move efficiently through each step when you're ready to start your recovery journey, tailoring the timeline to your unique needs and circumstances.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-primary font-light text-navy-extra-dark mb-2">
                      100% Confidential
                    </h3>
                    <p className="text-sm font-secondary text-gray-600 leading-relaxed">
                      Your privacy is protected at every step. All information shared during the admissions process remains completely confidential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-primary font-light text-navy-extra-dark mb-2">
                      Personalized Support
                    </h3>
                    <p className="text-sm font-secondary text-gray-600 leading-relaxed">
                      Our admissions team provides one-on-one guidance, answering all your questions and addressing your unique needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Admissions Process Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Our Admissions Process:
              <br />
              <span className="italic font-serif text-orange">Simple, Personalized, and Supportive</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Taking the first step toward recovery can feel daunting, but we've made it as simple and supportive as possible. Below is an overview of the admissions process so you know exactly what to expect and how to begin your journey.
            </p>
          </motion.div>

          {/* Timeline */}
          <Timeline data={timelineData} />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-8"
          >
            <Link href="/programs/residential-program">
              <motion.button
                className="bg-navy-extra-dark hover:bg-navy-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                See How Our Program Works
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              What to Expect
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              From the First Call to <span className="italic font-serif text-orange">Arrival</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We understand that starting recovery is a significant decision. During the admissions process, you'll receive individualized support, clear communication, and compassionate care. Here's what you can expect during each phase of the process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Confidentiality",
                description: "We maintain strict confidentiality throughout the entire process. Your personal information and health details will be handled with the utmost discretion, ensuring your privacy is always protected.",
                image: "/nature-stones.jpg"
              },
              {
                icon: Heart,
                title: "Personalized Care",
                description: "The admissions process is designed to meet your unique needs. Whether you require specific accommodations, medical care, or have personal preferences for your stay, our team will ensure the process is customized to suit you.",
                image: "/facility/psychologist-welcome.jpg"
              },
              {
                icon: HandHeart,
                title: "Support and Guidance",
                description: "From practical questions about what to bring to emotional support as you prepare to enter treatment, our admissions and care teams are here to help every step of the way. We'll ensure you feel confident and informed as you embark on your recovery journey.",
                image: "/facility/wellness/beach-therapy.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-extra-dark/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-orange" />
                  </div>
                  <h3 className="text-xl font-primary font-light text-navy-extra-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-secondary font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AdmissionsFAQ />

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
              Ready to Begin Your Journey?
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Our team is here to guide you through every step of the admissions process. Whether you need more information or are ready to start, we're just a click away.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-12 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Contact Our Admissions Team Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// FAQ Component
function AdmissionsFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "How long does the admissions process take?",
      answer: "Our admissions process is designed to be efficient and tailored to your individual circumstances. The timeline varies based on your unique needs, complexity of your case, and readiness to begin treatment. We understand that when you're ready to start your recovery journey, time matters. Our admissions team will work with you to move through the process as smoothly and quickly as possible."
    },
    {
      question: "What documents will I need to complete my admission?",
      answer: "You'll need a valid form of identification (passport or government-issued ID), a list of current medications, and any relevant medical records. Our admissions team will provide you with a complete checklist and help you gather everything you need."
    },
    {
      question: "Do you accept insurance?",
      answer: "We are a private-pay facility and do not accept insurance directly. This allows us to maintain our high standard of personalized care and flexibility in treatment planning. Our admissions team can provide detailed pricing information and discuss payment options that work for your situation."
    },
    {
      question: "What's the cost of your program?",
      answer: "Our program is $10,000 per 30 days. This comprehensive rate includes accommodations, all meals prepared by our culinary team, individual and group therapy, medical care, wellness activities, fitness programming, and 24/7 nursing support. We believe in transparent pricing with no hidden fees."
    },
    {
      question: "Do you provide transportation from the airport?",
      answer: "Yes, we provide complimentary airport pickup and transportation to our facility. Our team will coordinate with you in advance to ensure a smooth arrival, whether you're flying into San José or Liberia. This service is included as part of our commitment to making your transition into treatment as seamless as possible."
    },
    {
      question: "Can I have my phone or other technology during treatment?",
      answer: "Yes, we have dedicated phone and screen time built into the daily schedule. We believe in finding a healthy balance—allowing you to stay connected with loved ones and handle necessary matters, while also creating space for you to focus on your recovery without digital distractions."
    },
    {
      question: "What happens if I need to leave treatment early?",
      answer: "While we strongly encourage participants to complete the full length of their program for the best outcomes, we understand that circumstances can vary. Each situation is evaluated on a case-by-case basis. We have a clear refund policy that our admissions team can discuss with you. Our priority is always supporting your recovery journey in whatever way serves you best."
    },
    {
      question: "Can I smoke or vape during treatment?",
      answer: "Yes, smoking and vaping are permitted in designated areas. We recognize that recovery is a process, and we meet you where you are. Our focus is on addressing substance use and mental health, while respecting that other habits may be addressed over time as part of your personal growth journey."
    },
    {
      question: "What's the typical daily schedule like?",
      answer: "Our daily schedule is thoughtfully designed to balance therapeutic work, wellness activities, and personal time. A typical day includes individual and group therapy sessions, fitness activities, wellness practices like yoga and meditation, nutritious meals, and structured recreational time. For a detailed overview of our programming and daily structure, please visit our Residential Program page."
    },
    {
      question: "Do you treat co-occurring mental health disorders?",
      answer: "Yes, we specialize in treating co-occurring mental health disorders alongside addiction. Our integrated approach addresses both conditions simultaneously, as we recognize they often influence one another. However, we do require that addiction treatment be a primary focus—we do not treat mental health disorders on their own without an addiction component."
    },
    {
      question: "What's your staff-to-client ratio?",
      answer: "We maintain an exceptionally high staff-to-client ratio, averaging approximately 2:1, and reaching 1:1 when we're at full capacity. This ensures every participant receives personalized attention and support. Additionally, we have 24/7 nursing staff on-site, providing round-the-clock medical care and peace of mind for you and your loved ones."
    },
    {
      question: "What if I relapse after completing the program?",
      answer: "Relapse can be part of the recovery journey, and we're committed to supporting you long after you leave our facility. Our comprehensive aftercare services are specifically designed to reduce the risk of relapse and provide ongoing support. If a relapse does occur, we're here to help you get back on track. Recovery is a lifelong process, and we remain a resource for all our participants."
    },
    {
      question: "Can I bring a family member with me during the intake?",
      answer: "While our residential program is designed for individual treatment, we welcome family involvement in the admissions process. Family members can accompany you during the initial consultation and orientation. We also offer family therapy sessions and can discuss how your loved ones can best support your recovery journey."
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

