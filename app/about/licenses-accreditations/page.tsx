"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Shield, Award, FileCheck, Users, BookOpen, ShieldCheck, Scale, ClipboardCheck, GraduationCap, Heart, RefreshCw, Globe, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function LicensesAccreditationsPage() {
  const accreditations = [
    {
      name: "Ministry of Health",
      logo: "/license-logos/ministerio-salud.webp",
      link: "#ministry-health"
    },
    {
      name: "College of Nurses",
      logo: "/license-logos/colegio-enfermeras.webp",
      link: "#college-nurses"
    },
    {
      name: "College of Psychologists",
      logo: "/license-logos/colegio-psicologia.webp",
      link: "#college-psychologists"
    },
    {
      name: "IAFA",
      logo: "/license-logos/iafa.webp",
      link: "#iafa"
    },
    {
      name: "IC&RC",
      logo: "/license-logos/icrc.webp",
      link: "#icrc"
    }
  ]

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Hero Section - Banner Style */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/license-logos/licenses-acc-2.webp"
            alt="Licenses and Accreditations"
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
              Trusted & Accredited
              <br />
              <span className="italic font-serif text-orange">Addiction Recovery Care</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our licenses and accreditations reflect our commitment to providing high-quality, ethical treatment that you can trust.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Learn More About Our Methods
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Logo Showcase Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-base text-gray-600 italic">
              Click on the logos below to learn more about each accreditation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {accreditations.map((accreditation, index) => (
              <motion.button
                key={accreditation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(accreditation.link)}
                className="group flex flex-col items-center gap-4 p-6 bg-gray-50 hover:bg-white hover:shadow-xl rounded-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange"
              >
                <div className="relative w-full h-24 flex items-center justify-center">
                  <Image
                    src={accreditation.logo}
                    alt={accreditation.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-secondary text-gray-700 group-hover:text-orange text-center transition-colors">
                  {accreditation.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
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
              Trusted & Accredited
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              A Commitment to Excellence in
              <br />
              <span className="italic font-serif text-orange">Addiction Recovery Care</span>
            </h2>
            
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Costa Rica Recovery, we take pride in upholding the highest standards of care. Our licenses and accreditations reflect our dedication to providing ethical, high-quality treatment services. By meeting national and international regulatory requirements, we ensure you receive effective, professional care in a secure and supportive environment.
            </p>
            
            <p className="text-sm text-gray-600 mt-6 italic font-secondary font-light">
              Click on the relevant logos below to learn more about each accreditation and its significance for your treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministry of Health Section */}
      <section id="ministry-health" className="py-16 sm:py-20 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src="/license-logos/ministerio-salud.webp"
                    alt="Ministry of Health Costa Rica"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-primary font-light text-navy-extra-dark mb-4">
                Officially Licensed Healthcare Provider
              </h3>
              
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Costa Rica Recovery is fully licensed by the Costa Rican Ministry of Health, the authority responsible for regulating healthcare services.
              </p>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                This license signifies that our facility meets stringent standards for health, safety, and quality of care.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Ensures compliance with rigorous health and safety regulations.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ClipboardCheck className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Professional Standards</h4>
                    <p className="text-sm text-gray-600">Regular audits and reviews maintain high standards.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Scale className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Legal Compliance</h4>
                    <p className="text-sm text-gray-600">Government oversight ensures legal compliance in all operations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* College of Nurses Section */}
      <section id="college-nurses" className="py-16 sm:py-20 md:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-primary font-light text-navy-extra-dark mb-4">
                Accredited by the Costa Rica College of Nurses
              </h3>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                At Costa Rica Recovery, we are proud to be accredited by the Costa Rica College of Nurses. This accreditation ensures that our nursing staff meets the highest standards of professionalism, competence, and ethical care, as established by Costa Rica's leading nursing authority.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Award className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Qualified Nursing Staff</h4>
                    <p className="text-sm text-gray-600">Our nurses are accredited by a respected national organization, ensuring they are highly trained and adhere to the best practices in medical care.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <GraduationCap className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Ongoing Training</h4>
                    <p className="text-sm text-gray-600">Our nurses undergo continuous professional development to stay updated on the latest advancements in healthcare and recovery support.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Heart className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Ethical Care</h4>
                    <p className="text-sm text-gray-600">Compliance with the ethical standards of the Costa Rica College of Nurses ensures that you are treated with respect, compassion, and integrity throughout your recovery.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-lg">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src="/license-logos/colegio-enfermeras.webp"
                    alt="Costa Rica College of Nurses"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* College of Psychologists Section */}
      <section id="college-psychologists" className="py-16 sm:py-20 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src="/license-logos/colegio-psicologia.webp"
                    alt="Costa Rica College of Professional Psychologists"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-primary font-light text-navy-extra-dark mb-4">
                Member of the Costa Rica College of Professional Psychologists
              </h3>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Our team at Costa Rica Recovery includes licensed psychologists who are members of the Costa Rica College of Professional Psychologists. This membership signifies that our mental health professionals adhere to the highest ethical and professional standards in the field of psychology.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Certified Psychologists</h4>
                    <p className="text-sm text-gray-600">Our mental health staff are members of the leading psychological organization in Costa Rica, ensuring they are fully qualified to provide evidence-based treatment.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Shield className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Adherence to Standards</h4>
                    <p className="text-sm text-gray-600">As members of the College, our psychologists follow strict ethical guidelines, ensuring you receive care that respects your dignity, privacy, and mental well-being.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <RefreshCw className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Continuous Growth</h4>
                    <p className="text-sm text-gray-600">Our psychologists engage in ongoing training and development to offer the most effective therapeutic interventions available.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IAFA Section */}
      <section id="iafa" className="py-16 sm:py-20 md:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-primary font-light text-navy-extra-dark mb-4">
                Adherence to National Addiction Treatment Standards
              </h3>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                CRR is regulated by the Institute of Alcoholism and Pharmacological Dependency (IAFA), Costa Rica's authority on substance abuse treatment. IAFA governance ensures that we deliver ethical, evidence-based services in line with national standards.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Heart className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Ethical Practices</h4>
                    <p className="text-sm text-gray-600">Commitment to participant rights and ethical care.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <RefreshCw className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Continuous Improvement</h4>
                    <p className="text-sm text-gray-600">Regular evaluations help improve our programs.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Award className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">National Recognition</h4>
                    <p className="text-sm text-gray-600">IAFA regulation places CRR among Costa Rica's reputable recovery centers.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="bg-white p-8 rounded-lg flex items-center justify-center shadow-lg">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src="/license-logos/iafa.webp"
                    alt="IAFA Costa Rica"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IC&RC Section */}
      <section id="icrc" className="py-16 sm:py-20 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-md">
                  <Image
                    src="/license-logos/icrc.webp"
                    alt="IC&RC International"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-primary font-light text-navy-extra-dark mb-4">
                Aligning with International Best Practices
              </h3>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                CRR's membership in the International Certification & Reciprocity Consortium (IC&RC) ensures that our counselors meet internationally recognized competency standards, aligning with requirements in the United States and Canada.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Users className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Qualified Professionals</h4>
                    <p className="text-sm text-gray-600">Staff meet globally recognized standards.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <BookOpen className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Consistent Care</h4>
                    <p className="text-sm text-gray-600">Treatment approaches are aligned with international best practices.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Globe className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-extra-dark mb-1 text-base">Global Recognition</h4>
                    <p className="text-sm text-gray-600">Assurance that our services meet international benchmarks.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
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
              Official Documentation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Supporting Your Legal and
              <br />
              <span className="italic font-serif text-orange">Professional Needs</span>
            </h2>
            
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              As a licensed facility, CRR is authorized to provide official documentation regarding your treatment. We can issue letters and reports to courts, employers, or government agencies as required, aiding in legal or professional matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Shield className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Confidentiality</h3>
              <p className="text-gray-600">All documentation is handled discreetly with your consent.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <CheckCircle className="h-12 w-12 text-orange mb-4" />
              <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">Professionalism</h3>
              <p className="text-gray-600">Accurate, timely reports that meet legal and professional standards.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-navy-extra-dark mb-4">We Provide:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <FileCheck className="h-6 w-6 text-orange flex-shrink-0" />
                <span className="text-gray-700"><strong>Court Documentation:</strong> Compliance reports for legal proceedings.</span>
              </li>
              <li className="flex gap-3">
                <FileCheck className="h-6 w-6 text-orange flex-shrink-0" />
                <span className="text-gray-700"><strong>Employment Verification:</strong> Confirmation of participation for workplace requirements.</span>
              </li>
              <li className="flex gap-3">
                <FileCheck className="h-6 w-6 text-orange flex-shrink-0" />
                <span className="text-gray-700"><strong>Government Correspondence:</strong> Reports for immigration or licensing boards.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <LicensesAccreditationsFAQ />

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
              Connect with Us
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              We're proud of our credentials and are dedicated to quality care. If you have questions or want more details, we're here to discuss our approach.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-12 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// FAQ Component for Licenses & Accreditations
function LicensesAccreditationsFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "Why is accreditation important?",
      answer: "Accreditation ensures our facility meets the highest standards in treatment, offering you safe, effective, and ethical care."
    },
    {
      question: "Which organizations accredit Costa Rica Recovery?",
      answer: "We are accredited by the Costa Rican Ministry of Health, Costa Rica College of Nurses, Costa Rica College of Professional Psychologists, IAFA, and IC&RC."
    },
    {
      question: "How can I verify your accreditations?",
      answer: "We're proud of our credentials and are dedicated to quality care. If you have questions or want more details, we're here to discuss our approach."
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
      </div>
    </section>
  )
}

