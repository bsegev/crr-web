"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { 
  Home, Users, MessageCircle, Sparkles, Dumbbell, 
  Palette, UtensilsCrossed, TreePine, MapPin, Shield,
  Clock, ChevronDown
} from "lucide-react"
import { useState } from "react"
import Carousel from "@/components/ui/carousel"

export default function OurFacilityPage() {
  // Slide data for different sections
  const accommodationsSlides = [
    {
      title: "Private Rooms",
      button: "View Details",
      src: "/facility/spaces/private-room-deco.png",
    },
    {
      title: "Shared Rooms",
      button: "View Details",
      src: "/facility/spaces/shared-room-deco.png",
    },
    {
      title: "Welcoming Lobby",
      button: "View Details",
      src: "/facility/spaces/lobby-room.jpg",
    },
    {
      title: "Reading Lounge",
      button: "View Details",
      src: "/facility/spaces/reading-common.jpg",
    },
    {
      title: "Common Lounge",
      button: "View Details",
      src: "/facility/spaces/common-lounge-deco.png",
    },
    {
      title: "Communal Spaces",
      button: "View Details",
      src: "/facility/spaces/chess.jpg",
    },
    {
      title: "Therapy Spaces",
      button: "View Details",
      src: "/facility/spaces/group-session.jpg",
    },
  ]

  const wellnessSlides = [
    {
      title: "Art Therapy",
      button: "View Details",
      src: "/facility/wellness/art-therapy.png",
    },
    {
      title: "Yoga Practice",
      button: "View Details",
      src: "/facility/wellness/yoga-stretch.jpg",
    },
    {
      title: "Wellness Sessions",
      button: "View Details",
      src: "/facility/wellness/shala-new-teacher.png",
    },
    {
      title: "Fitness Center",
      button: "View Details",
      src: "/facility/wellness/gym-workout.jpeg",
    },
    {
      title: "Drumming Sessions",
      button: "View Details",
      src: "/facility/wellness/shala-drums.jpg",
    },
    {
      title: "Trust Building",
      button: "View Details",
      src: "/facility/wellness/shala-trust.jpg",
    },
  ]

  const diningSlides = [
    {
      title: "Dining Area",
      button: "View Details",
      src: "/facility/nutrition/dining-room-full.png",
    },
    {
      title: "Fresh Cuisine",
      button: "View Details",
      src: "/facility/nutrition/chef-avocado-toast.webp",
    },
    {
      title: "Our Kitchen",
      button: "View Details",
      src: "/facility/nutrition/chef-kitchen.jpeg",
    },
    {
      title: "Chef at Work",
      button: "View Details",
      src: "/facility/nutrition/chef-ingredients.png",
    },
    {
      title: "Dining Experience",
      button: "View Details",
      src: "/facility/nutrition/dining-room-top.png",
    },
  ]

  const natureSlides = [
    {
      title: "Beach Views",
      button: "View Details",
      src: "/facility/nature/beach-san-jose.jpg",
    },
    {
      title: "El Tirol Getaway",
      button: "View Details",
      src: "/facility/nature/el-tirol-getaway.jpg",
    },
    {
      title: "Hiking Trails",
      button: "View Details",
      src: "/facility/nature/hike-antonio-park.avif",
    },
    {
      title: "Volcano Views",
      button: "View Details",
      src: "/facility/nature/volcano-wide.jpg",
    },
    {
      title: "Waterfall Experience",
      button: "View Details",
      src: "/facility/nature/waterfall-wide.jpg",
    },
    {
      title: "Wildlife Tours",
      button: "View Details",
      src: "/facility/nature/wildlife-tour.jpg",
    },
    {
      title: "Strawberry Farm",
      button: "View Details",
      src: "/facility/nature/strawberry-farm.png",
    },
    {
      title: "Local Coffee Farm",
      button: "View Details",
      src: "/facility/nature/farm-starbucks.jpg",
    },
    {
      title: "Volcano Crater",
      button: "View Details",
      src: "/facility/nature/volcano-crater.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/facility/spaces/lobby-room.jpg"
            alt="Our Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-extra-dark/60 to-navy-dark/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light text-white mb-6">
              A Safe Space for Healing and Recovery
              <br />
              <span className="italic font-serif text-orange">in the Heart of San José</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Comfort, Connection, and Wellness Await at Costa Rica Recovery
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Find Out How Our Facility Supports Recovery
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Your Home Away From Home
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Accommodations for
              <br />
              <span className="italic font-serif text-orange">Comfort and Connection</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our facility offers a balance of private comfort and communal spaces to foster healing and community during your stay. From restful, well-appointed rooms to inviting lounges, every part of our facility is designed with your comfort in mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Home,
                title: "Comfortable Rooms",
                description: "Private or semi-private rooms with tasteful decor, offering a restful sanctuary."
              },
              {
                icon: Users,
                title: "Communal Spaces",
                description: "Inviting lounges and outdoor areas for relaxation and socialization, fostering a sense of community."
              },
              {
                icon: MessageCircle,
                title: "Therapy Rooms",
                description: "Private and group therapy spaces equipped for various treatment modalities."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-16 w-16 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accommodations Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden w-full h-full py-20 px-4"
        >
          <Carousel slides={accommodationsSlides} />
        </motion.div>
      </section>

      {/* Holistic Wellness Section */}
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
              Mind, Body & Spirit
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Spaces for
              <br />
              <span className="italic font-serif text-orange">Holistic Wellness</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We believe in the importance of treating the mind, body, and spirit. Our wellness areas are designed to promote mindfulness, creative expression, and physical well-being.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Sparkles,
                title: "Yoga and Meditation Studio",
                description: "A tranquil space dedicated to mindfulness and physical well-being."
              },
              {
                icon: Palette,
                title: "Art Therapy Room",
                description: "Equipped with materials and resources to facilitate creative expression."
              },
              {
                icon: Dumbbell,
                title: "Fitness Facilities",
                description: "Access to equipment and classes that promote physical health."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-16 w-16 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wellness Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden w-full h-full py-20 px-4"
        >
          <Carousel slides={wellnessSlides} />
        </motion.div>
      </section>

      {/* Nutritious Meals Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Healing Through Nourishment
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Nutritious Meals to Nourish
              <br />
              <span className="italic font-serif text-orange">Body and Soul</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our culinary team is dedicated to preparing balanced, delicious meals that cater to the unique dietary needs of each participant, offering a dining experience that encourages connection and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: UtensilsCrossed,
                title: "Nutritious Meals",
                description: "Our culinary team prepares balanced, delicious meals that cater to various dietary needs."
              },
              {
                icon: Users,
                title: "Communal Dining Area",
                description: "Encourages connection and a sense of community among participants."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="h-12 w-12 text-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8 mb-16"
          >
            <Link href="/contact" className="text-orange hover:text-orange-dark font-secondary font-medium underline">
              Learn About Preparing for Your Stay
            </Link>
          </motion.div>
        </div>

        {/* Dining Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden w-full h-full py-20 px-4"
        >
          <Carousel slides={diningSlides} />
        </motion.div>
      </section>

      {/* Connecting with Nature Section */}
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
              Surrounded by Beauty
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Connecting with
              <br />
              <span className="italic font-serif text-orange">Nature</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              While our facility is located in the vibrant city of San José, we offer access to peaceful, beautifully landscaped gardens and outdoor seating areas. In addition, participants can take part in organized day trips to Costa Rica's stunning beaches, rainforests, and parks for restorative nature experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: TreePine,
                title: "Urban Oasis",
                description: "Beautifully landscaped gardens and outdoor seating areas provide a peaceful retreat within the city."
              },
              {
                icon: MapPin,
                title: "Organized Excursions",
                description: "Regular trips to Costa Rica's beaches, rainforests, and parks offer restorative experiences and connection with nature."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="h-12 w-12 text-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nature Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden w-full h-full py-20 px-4"
        >
          <Carousel slides={natureSlides} />
        </motion.div>
      </section>

      {/* Secure Location Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Safety & Accessibility
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              A Secure,
              <br />
              <span className="italic font-serif text-orange">Convenient Location</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Your safety and convenience are our top priorities. Our facility provides 24/7 licensed nursing staff, security, caretakers available around the clock, and easy access to nearby medical facilities, airports, and local attractions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "24/7 Nursing, Security and Support",
                description: "Our facility is secure, and caretakers are available around the clock to assist with any needs."
              },
              {
                icon: Clock,
                title: "Proximity to Services",
                description: "Located near medical facilities, airports, and local attractions, providing convenience and peace of mind."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="h-12 w-12 text-orange flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FacilityFAQ />

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
              Experience Our Facility
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Explore our welcoming spaces, designed to support your healing journey. Learn how our services create a nurturing environment for recovery.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-12 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Connect with Our Team to Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// FAQ Component for Our Facility
function FacilityFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What amenities does your facility offer?",
      answer: "CRR offers serene private rooms, communal spaces, holistic therapy areas, and beautiful natural surroundings designed for comfort and healing."
    },
    {
      question: "Can I bring personal items?",
      answer: "Yes! We encourage you to bring personal items that will make you feel comfortable during your stay. We'll provide a detailed packing list upon admission to help you prepare."
    },
    {
      question: "What is the facility's capacity?",
      answer: "Our facility maintains a small, intimate capacity to ensure personalized attention and a close-knit community atmosphere. This allows our staff to provide individualized care to each participant."
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
