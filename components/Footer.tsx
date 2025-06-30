"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Brand */}
            <div className="space-y-8">
              <div>
                <Link href="/" className="inline-block group">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[#06402B] flex items-center justify-center group-hover:bg-[#B7C9B7] transition-colors">
                      <div className="w-6 h-6 border-2 border-white rounded-full relative">
                        <div className="absolute inset-1 border border-white rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-2xl font-light tracking-wide group-hover:text-[#B7C9B7] transition-colors">IWC</span>
                  </div>
                </Link>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-[#B7C9B7] font-light">
                  International Wellness Collective
                </p>
                <p className="text-lg font-light leading-relaxed text-white/80 max-w-md">
                  Connecting families to world-class healing centers across four continents. 
                  Healing without borders.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-white/60">Available worldwide</p>
                <p className="text-sm text-white/60">24/7 support</p>
              </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {/* Navigation Links */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-[#B7C9B7] font-light">
                  Navigate
                </h3>
                <nav className="space-y-4">
                  <Link 
                    href="/our-centers" 
                    className="block text-white/80 hover:text-[#B7C9B7] transition-colors duration-200 font-light"
                  >
                    Our Centers
                  </Link>
                  <Link 
                    href="/about" 
                    className="block text-white/80 hover:text-[#B7C9B7] transition-colors duration-200 font-light"
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-white/80 hover:text-[#B7C9B7] transition-colors duration-200 font-light"
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/find-your-center" 
                    className="block text-white/80 hover:text-[#B7C9B7] transition-colors duration-200 font-light"
                  >
                    Find Your Center
                  </Link>
                </nav>
              </div>

              {/* Support Links */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-[#B7C9B7] font-light">
                  Support
                </h3>
                <nav className="space-y-4">
                  <Link 
                    href="/get-help" 
                    className="block text-white/80 hover:text-[#B7C9B7] transition-colors duration-200 font-light"
                  >
                    Get Help
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-white/80 hover:text-[#B7C9B7] transition-colors duration-200 font-light"
                  >
                    Emergency Support
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-white/80 hover:text-[#B7C9B7] transition-colors duration-200 font-light"
                  >
                    Family Resources
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#B7C9B7] border-opacity-20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-sm text-white/60 font-light">
                © 2024 International Wellness Collective
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-sm text-white/60 hover:text-[#B7C9B7] transition-colors duration-200"
                >
                  Privacy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-sm text-white/60 hover:text-[#B7C9B7] transition-colors duration-200"
                >
                  Terms
                </Link>
              </div>
            </div>
            
            <div className="text-[#B7C9B7] italic font-serif text-xl mt-12">
              Healing without borders
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 