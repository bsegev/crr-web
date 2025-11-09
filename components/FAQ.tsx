"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does treatment at Costa Rica Recovery cost?",
    answer: "Our programs are designed to be accessible and affordable. Treatment costs vary based on program length (30, 60, or 90 days) and services included. We offer significantly lower rates than comparable private treatment centers in the U.S. and Canada, without compromising on quality of care. As a private-pay facility, we accept credit cards, wire transfers, and direct bank payments. Contact our admissions team at (866) 804-1793 for detailed pricing and flexible payment arrangements."
  },
  {
    question: "Do you accept insurance?",
    answer: "We operate exclusively as a private-pay facility and do not work with insurance companies. This model allows us to provide truly personalized care without insurance limitations or third-party involvement in your treatment decisions. Your recovery stays completely confidential with no insurance claims or records. We accept credit cards, wire transfers, and bank payments, and our admissions team can discuss flexible payment arrangements to make treatment accessible."
  },
  {
    question: "What is the daily schedule like?",
    answer: "Your day typically begins with morning meditation or yoga, followed by breakfast. You'll attend individual therapy sessions, group therapy, and educational workshops throughout the day. Afternoons may include holistic activities like art therapy, adventure therapy, or nature excursions. Evenings feature 12-Step or alternative recovery meetings, journaling time, and group dinners. Weekends include organized excursions to explore Costa Rica's natural beauty."
  },
  {
    question: "Can my family visit me during treatment?",
    answer: "Yes! We encourage family involvement in your recovery. After the first two weeks, family members can visit in person or participate in virtual family therapy sessions. We offer family weekends where loved ones can join you in Costa Rica for therapy sessions and activities. All family participation is coordinated with your treatment team to support your healing process."
  },
  {
    question: "What happens after I complete the program?",
    answer: "Recovery doesn't end when treatment does. We provide comprehensive aftercare planning, including connection to local therapists and support groups in your home area, sober living placement assistance if needed, and ongoing alumni support. You'll have access to our 24/7 crisis hotline, monthly virtual alumni meetings, and the option to return to Costa Rica for wellness retreats. We stay connected to support your long-term success."
  },
  {
    question: "Is Costa Rica safe? How do I get there?",
    answer: "Costa Rica is one of the safest countries in Central America and a popular destination for wellness tourism. San José is a modern city with excellent healthcare infrastructure. We're located just 20 minutes from Juan Santamaría International Airport (SJO), which has direct flights from most major U.S. and Canadian cities. Our team can arrange airport pickup and provide arrival support to make your transition smooth and stress-free."
  },
  {
    question: "What should I bring with me?",
    answer: "We'll provide a detailed packing list upon admission, but essentials include comfortable clothing for warm weather, athletic wear for yoga and activities, toiletries, any prescription medications (with documentation), and personal items that bring you comfort. You'll have access to laundry facilities, Wi-Fi, and private accommodations. Leave valuables at home—you won't need much beyond the basics for a healing environment."
  },
  {
    question: "Do you treat co-occurring mental health disorders?",
    answer: "Absolutely. Many of our clients struggle with co-occurring disorders like depression, anxiety, PTSD, or bipolar disorder alongside addiction. Our clinical team includes licensed therapists trained in treating dual diagnosis. We provide integrated treatment that addresses both addiction and mental health, with psychiatric medication management available when appropriate."
  },
  {
    question: "What makes Costa Rica Recovery different from other treatment centers?",
    answer: "We combine clinical excellence with the healing power of Costa Rica's natural environment at an accessible price point. Unlike luxury rehabs that can cost $30,000-60,000+ per month, we offer high-quality care at a fraction of the cost. You'll receive evidence-based treatment, holistic therapies, and cultural immersion in one of the world's happiest countries. Our small client-to-staff ratio ensures personalized attention, and our location in San José provides urban convenience with easy access to nature."
  },
  {
    question: "Can I have my phone and internet access?",
    answer: "During the first week, we recommend limiting outside contact to focus on your healing. After that, you'll have scheduled phone and internet access to stay connected with loved ones and handle necessary personal matters. We provide Wi-Fi and encourage healthy use of technology balanced with presence in your recovery process. All communication is done in a supportive environment that protects your healing space."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
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
            Frequently Asked{" "}
            <span className="italic font-serif text-orange">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl font-secondary font-light text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed">
            Have questions about treatment at Costa Rica Recovery? We're here to help.
          </p>
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
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange/30 transition-colors duration-300"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg font-secondary text-gray-700 mb-6">
            Still have questions? We're here 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+18668041793" className="inline-block">
              <motion.button
                className="group relative text-white text-xs sm:text-sm tracking-widest uppercase font-secondary font-bold touch-manipulation"
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-8 sm:px-10 py-3 sm:py-3.5 block">Call (866) 804-1793</span>
                <div className="absolute inset-0 bg-orange group-hover:bg-orange-dark transition-all duration-300"></div>
              </motion.button>
            </a>
            <a href="/contact" className="inline-block">
              <motion.button
                className="group relative text-navy-extra-dark text-xs sm:text-sm tracking-widest uppercase font-secondary font-bold touch-manipulation"
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-8 sm:px-10 py-3 sm:py-3.5 block">Contact Us Online</span>
                <div className="absolute inset-0 border border-orange/30 group-hover:border-orange/60 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-orange/5 group-hover:bg-orange/10 transition-all duration-300"></div>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

