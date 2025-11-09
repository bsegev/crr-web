"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Users, Heart, Shield, Check, ChevronDown } from "lucide-react"
import { useState } from "react"
import { LayoutGrid } from "@/components/ui/layout-grid"

export default function ResidentialProgramPage() {
  const cards = [
    {
      id: 1,
      content: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Foundation</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">30-Day Program</h3>
          <p className="text-sm md:text-base opacity-90">
            Establishing a strong foundation in recovery principles and coping strategies.
          </p>
        </div>
      ),
      expandedContent: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Foundation</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">30-Day Program</h3>
          <p className="text-sm md:text-base mb-3"><strong>Ideal For:</strong> Individuals seeking an intensive start to their recovery journey.</p>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            Our Foundation Program offers a 30-day intensive experience that provides participants with a solid start to their recovery journey. Through structured individual and group therapies, you'll establish essential recovery principles, learn coping strategies, and gain a better understanding of your addiction.
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Stabilize behavior and begin detox under medical supervision</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Develop initial coping strategies for early recovery</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Daily individual and group therapy sessions</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Holistic therapies: yoga, meditation, and art therapy</span></li>
          </ul>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/programs/30-day-foundation.webp",
    },
    {
      id: 2,
      content: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Growth</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">60-Day Program</h3>
          <p className="text-sm md:text-base opacity-90">
            Enhanced therapeutic engagement and practice of new skills for deeper healing.
          </p>
        </div>
      ),
      expandedContent: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Growth</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">60-Day Program</h3>
          <p className="text-sm md:text-base mb-3"><strong>Ideal For:</strong> Those who wish to delve deeper into underlying issues and solidify new habits.</p>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            In the Growth Program, you'll build on the strong foundation established in the first 30 days. The focus shifts to deeper emotional healing and personal growth. Participants explore underlying emotional and psychological issues, practice relapse prevention techniques, and further solidify their recovery habits.
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Address root causes through extended therapy sessions</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Strengthen new habits and coping mechanisms</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Delve deeper into emotional and psychological issues</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Holistic therapies and nature excursions for enhanced recovery</span></li>
          </ul>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/programs/60-day-growth.webp",
    },
    {
      id: 3,
      content: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Transformation</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">90-Day Program</h3>
          <p className="text-sm md:text-base opacity-90">
            In-depth exploration of personal challenges and long-term planning for lasting change.
          </p>
        </div>
      ),
      expandedContent: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Transformation</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">90-Day Program</h3>
          <p className="text-sm md:text-base mb-3"><strong>Ideal For:</strong> Participants aiming for extensive personal growth and reinforcement of recovery strategies.</p>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            The Transformation Program offers a full 90-day immersive experience, allowing you the time and space to transform your life. The final 30 days are dedicated to long-term planning and preparing for a successful life post-recovery. This comprehensive program provides the tools and support needed to achieve lasting sobriety.
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Full immersion to reinforce and solidify sobriety</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Prepare for life after with tailored long-term strategies</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Advanced therapy and life-planning support</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Holistic therapies and wellness practices for total healing</span></li>
          </ul>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/programs/90-day-transformation-2.webp",
    },
    {
      id: 4,
      content: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Continued Support</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Aftercare Planning</h3>
          <p className="text-sm md:text-base opacity-90">
            Ongoing support and resources to maintain sobriety beyond treatment.
          </p>
        </div>
      ),
      expandedContent: (
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Continued Support</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Aftercare Planning</h3>
          <p className="text-sm md:text-base mb-3"><strong>Ideal For:</strong> Graduates seeking ongoing support and accountability.</p>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            Recovery doesn't end when treatment does. Our comprehensive aftercare planning ensures you have the resources, support network, and strategies needed to maintain your sobriety and continue your wellness journey long after leaving our program.
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Personalized aftercare and relapse prevention plans</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Connection to local support groups and resources</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Alumni network and ongoing check-ins</span></li>
            <li className="flex items-center gap-2"><span className="text-orange text-lg">➜</span><span>Transition support for returning to daily life</span></li>
          </ul>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/programs/aftercare.webp",
      imagePosition: "object-left",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/global-healing-hero.jpg"
            alt="Residential Program"
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
              Experiential Healing at
              <br />
              <span className="italic font-serif text-orange">Costa Rica Recovery</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              24/7 care, personalized therapies, and a supportive environment to help you heal and thrive – no matter the length of your stay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
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
              What is the <span className="italic font-serif text-orange">Residential Program?</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Costa Rica Recovery, our Residential Treatment Program offers a safe, nurturing environment where you can focus entirely on your recovery journey. Our holistic approach combines evidence-based therapies with complementary holistic practices to address all aspects of your well-being—emotional, physical, and relational.
            </p>
            <p className="text-base font-secondary font-light text-gray-600 max-w-3xl mx-auto mt-4">
              Want to understand our clinical methodology? <Link href="/programs/our-approach" className="text-orange hover:underline">Learn about our trauma-informed, participant-centered approach</Link>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Personalized Treatment Plans",
                description: "Individualized care tailored to your unique needs and goals"
              },
              {
                icon: Shield,
                title: "Evidence-Based Therapies",
                description: "Proven therapeutic approaches grounded in scientific research"
              },
              {
                icon: Heart,
                title: "Holistic Practices",
                description: "Mind, body, and spirit integration for complete wellness"
              },
              {
                icon: Users,
                title: "Family Support",
                description: "Involving loved ones in the healing process"
              },
              {
                icon: Check,
                title: "Aftercare Planning",
                description: "Comprehensive support for life after treatment"
              },
              {
                icon: Clock,
                title: "24/7 Nursing Care",
                description: "Round-the-clock medical support and monitoring"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-16 w-16 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Lengths */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Choose Your Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Find the Program Length That <span className="italic font-serif text-orange">Fits Your Needs</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Costa Rica Recovery, we offer 30-day, 60-day, and 90-day residential programs to meet the individual needs and recovery goals of each participant. Whether you need short-term intensive care or long-term support, we have a program designed to help you heal at your own pace.
            </p>
          </motion.div>

          <div className="h-screen w-full py-10">
            <LayoutGrid cards={cards} />
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Proven Methods
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Evidence-Based <span className="italic font-serif text-orange">Treatment Modalities</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our program integrates multiple therapeutic approaches to address the whole person and support lasting recovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Individual Psychotherapy",
              "Group Therapy Sessions",
              "Cognitive Behavioral Therapy (CBT)",
              "Dialectical Behavior Therapy (DBT)",
              "Trauma-Informed Care",
              "Mindfulness & Meditation",
              "Yoga & Movement Therapy",
              "Art & Music Therapy",
              "Sound Healing",
              "Adventure Therapy",
              "Nutritional Counseling",
              "12-Step Integration"
            ].map((modality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <Check className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-gray-700 font-medium">{modality}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Daily Structure
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              A Typical Day in the <span className="italic font-serif text-orange">Residential Program</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our structured daily schedule provides a balance between therapeutic work, personal reflection, and community engagement. A typical day includes individual and group therapy, wellness activities like yoga or meditation, nutritious meals, and free time to relax and reflect. Each day is carefully designed to foster growth and healing.
            </p>
          </motion.div>

          <div className="space-y-3">
            {[
              { time: "6:00 AM", activity: "Wake Up" },
              { time: "6:30 AM", activity: "Sunrise Yoga (Optional)" },
              { time: "7:00 AM", activity: "Breakfast & Medication" },
              { time: "8:00 AM", activity: "Morning Group Therapy" },
              { time: "9:00 AM", activity: "Individual Therapy or Psychoeducation" },
              { time: "10:00 AM", activity: "Holistic Activities (Sound Therapy, Art, etc.)" },
              { time: "11:00 AM", activity: "Free Time / Self-Directed Activities" },
              { time: "12:00 PM", activity: "Lunch" },
              { time: "1:00 PM", activity: "Recovery Meetings (12-Step)" },
              { time: "2:00 PM", activity: "Skills Groups (DBT, Anger Management, etc.)" },
              { time: "3:00 PM", activity: "Physical Wellness (Gym, Exercise)" },
              { time: "4:00 PM", activity: "Free Time / Outdoor Activities" },
              { time: "5:00 PM", activity: "Dinner" },
              { time: "6:00 PM", activity: "Evening Support Group (AA/NA)" },
              { time: "7:00 PM", activity: "Free Time / Peer Activities" },
              { time: "8:00 PM", activity: "Evening Medications & Wind Down" },
              { time: "9:00 PM", activity: "Lights Out / Rest" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="flex items-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <div className="w-24 text-sm font-semibold text-orange flex-shrink-0">
                  {item.time}
                </div>
                <div className="text-gray-800 font-medium">
                  {item.activity}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investing in Your Recovery */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Your Investment
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Investing in <span className="italic font-serif text-orange">Your Recovery</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We believe that access to quality care should be attainable for everyone. Our programs are tailored to meet diverse needs and circumstances, offering personalized support throughout your journey. Our pricing is flexible, with discounts available for longer stays to ensure everyone receives the time and care they need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support for Loved Ones Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Family Involvement
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                Support for <span className="italic font-serif text-orange">Loved Ones</span>
              </h2>
              <div className="space-y-4 text-lg font-secondary font-light text-gray-700">
                <p>
                  Addiction doesn't just affect the individual—it impacts entire families. Our program recognizes that family involvement is often a critical component of sustainable recovery.
                </p>
                <p>
                  We offer educational resources, family therapy sessions (virtual or in-person), and workshops that help loved ones understand addiction, develop healthy communication patterns, and build supportive relationships.
                </p>
                <p>
                  By educating and supporting families alongside individual treatment, we create a stronger foundation for long-term recovery and healing for everyone affected.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "Weekly Family Sessions",
                  description: "Virtual or in-person therapy sessions that address family dynamics and communication"
                },
                {
                  title: "Educational Workshops",
                  description: "Learn about addiction, recovery, codependency, and healthy boundaries"
                },
                {
                  title: "Family Weekend Visits",
                  description: "Participate in activities and therapy sessions together in Costa Rica (optional)"
                },
                {
                  title: "Ongoing Family Support",
                  description: "Continued resources and guidance for families after treatment completion"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="font-secondary text-base font-light text-gray-700">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <ResidentialFAQ />

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
              Take Back Your Life
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Our residential program offers comprehensive care in a supportive environment. Take the next step toward recovery and explore how we can help.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-12 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Start Your Recovery Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// FAQ Component for Residential Program
function ResidentialFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What is included in the residential program?",
      answer: "The residential program includes 24/7 care, personalized treatment plans, evidence-based therapies, holistic therapy options, group counseling, wellness activities, nutritious meals, and community-building activities. Each program is tailored to your individual needs and recovery goals."
    },
    {
      question: "How long is the residential treatment program?",
      answer: "Our residential program offers flexible lengths of 30, 60, or 90 days, depending on individual needs and treatment goals. We work with each participant to determine the most appropriate program length, and discounts are available for longer stays."
    },
    {
      question: "Will I have free time?",
      answer: "Yes, our structured daily schedule balances therapeutic work with personal reflection and free time. You'll have time to relax, journal, enjoy the beautiful Costa Rican surroundings, and integrate what you're learning in therapy."
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
