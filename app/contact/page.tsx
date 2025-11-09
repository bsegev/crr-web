"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero.jpg"
            alt="Take the First Step Towards Recovery"
            fill
            className="object-cover"
            priority
          />
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
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light mb-6 leading-[1.1] tracking-[-0.02em] text-white">
              Take the First Step
              <br />
              <span className="italic font-serif text-orange">Towards Recovery</span>
            </h1>
            <p className="text-lg sm:text-xl font-secondary font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
              Let's Start a Conversation About Your New Beginning
            </p>
          </motion.div>
        </div>
      </section>

      {/* We're Here to Help Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/contact-support.jpg"
                alt="We are here to help you"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
                Support Every Step
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
                We Are Here to Help You
                <br />
                <span className="italic font-serif text-orange">Through the Process</span>
              </h2>
              <p className="text-lg font-secondary font-light text-gray-700 leading-relaxed mb-6">
                We understand that reaching out for help can be daunting. Whether you're seeking recovery for yourself or supporting a loved one, our compassionate team is here to listen, guide, and support you through every step.
              </p>
              <p className="text-base font-secondary font-light text-gray-600 leading-relaxed">
                Your information is kept completely confidential, and our experienced team is ready to craft a personalized plan tailored to your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              Best Way to Reach Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              <span className="italic font-serif text-orange">Contact Us</span> Today
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The best way to reach us is through our contact form, as it ensures the entire admissions team has visibility over your inquiry, allowing us to connect you with the right person quickly and efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Section */}
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
              Direct Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Prefer a <span className="italic font-serif text-orange">Direct Conversation?</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              If you'd like to speak with a team member immediately, you can reach us via phone or email. We're ready to assist you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone (US) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-orange/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-xl font-primary font-light text-navy-extra-dark mb-3">
                Call Us Toll-Free
              </h3>
              <p className="text-sm font-secondary text-gray-600 mb-4">
                US & Canada
              </p>
              <a 
                href="tel:+18668041793"
                className="text-lg font-secondary font-medium text-orange hover:text-orange-dark transition-colors"
              >
                +1 (866) 804-1793
              </a>
            </motion.div>

            {/* Phone (Costa Rica) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-orange/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-xl font-primary font-light text-navy-extra-dark mb-3">
                Call Us (Costa Rica)
              </h3>
              <p className="text-sm font-secondary text-gray-600 mb-4">
                Local Number
              </p>
              <a 
                href="tel:+50683486369"
                className="text-lg font-secondary font-medium text-orange hover:text-orange-dark transition-colors"
              >
                +506 8348-6369
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-orange/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-xl font-primary font-light text-navy-extra-dark mb-3">
                Email Us
              </h3>
              <p className="text-sm font-secondary text-gray-600 mb-4">
                General Inquiries
              </p>
              <a 
                href="mailto:info@costaricarecovery.com"
                className="text-lg font-secondary font-medium text-orange hover:text-orange-dark transition-colors break-all"
              >
                info@costaricarecovery.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-navy-extra-dark to-navy-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-orange/20 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-orange" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light mb-6 leading-[1.1] tracking-[-0.02em]">
              Or Come See Us <span className="italic font-serif text-orange">In Person!</span>
            </h2>
            <p className="text-lg font-secondary font-light text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              We welcome visitors to our facility in Costa Rica. Contact us to schedule a tour and experience our healing environment firsthand.
            </p>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.907577459114!2d-84.1106631244303!3d9.941647690160815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb565cb66125%3A0x2ca64c18df5ad317!2sCosta%20Rica%20Recovery!5e0!3m2!1sen!2scr!4v1761068313447!5m2!1sen!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Costa Rica Recovery - San José, Costa Rica"
              />
            </div>
          </motion.div>

          <div className="text-center">
            <a href="#contact-form">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors shadow-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Send className="w-4 h-4" />
                Schedule a Visit
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
