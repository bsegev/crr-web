"use client"

import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-navy-extra-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Brand */}
            <div className="space-y-8">
              <div>
                <Link href="/" className="inline-block group">
                  <div className="flex items-center space-x-3">
                    <Image 
                      src="/logos/CRR_Logo_Icon.svg" 
                      alt="CRR Logo" 
                      width={24} 
                      height={48}
                      className="transition-opacity group-hover:opacity-80"
                    />
                    <div className="text-2xl font-primary font-light tracking-wide transition-colors group-hover:opacity-80">
                      <span className="text-orange">Costa Rica</span>
                      <span className="font-light"> Recovery</span>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-orange font-light">
                  Holistic Addiction Treatment
                </p>
                <p className="text-lg font-light leading-relaxed text-white/80 max-w-md">
                  Experience transformative recovery in paradise. Accessible holistic healing combining evidence-based care with Costa Rica's natural beauty.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-white/60">San José, Costa Rica</p>
                <p className="text-sm text-white/60">24/7 Admissions Support</p>
                <p className="text-sm text-white/60">Part of International Wellness Centers</p>
              </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {/* Navigation Links */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-orange font-light">
                  Explore
                </h3>
                <nav className="space-y-4">
                  <Link 
                    href="/about" 
                    className="block text-white/80 hover:text-orange transition-colors duration-200 font-light"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/programs/our-approach" 
                    className="block text-white/80 hover:text-orange transition-colors duration-200 font-light"
                  >
                    Treatment Programs
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-white/80 hover:text-orange transition-colors duration-200 font-light"
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/find-your-center" 
                    className="block text-white/80 hover:text-orange transition-colors duration-200 font-light"
                  >
                    Admissions
                  </Link>
                </nav>
              </div>

              {/* Support Links */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-orange font-light">
                  Get Help
                </h3>
                <nav className="space-y-4">
                  <Link 
                    href="/get-help" 
                    className="block text-white/80 hover:text-orange transition-colors duration-200 font-light"
                  >
                    Start Your Journey
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-white/80 hover:text-orange transition-colors duration-200 font-light"
                  >
                    24/7 Support
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-white/80 hover:text-orange transition-colors duration-200 font-light"
                  >
                    Family Resources
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-sm text-white/60">
                © 2025 Costa Rica Recovery
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-sm text-white/60 hover:text-orange transition-colors duration-200"
                >
                  Privacy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-sm text-white/60 hover:text-orange transition-colors duration-200"
                >
                  Terms
                </Link>
              </div>
            </div>
            
            <div className="text-orange italic font-serif text-lg">
              Recovery. Reimagined.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 