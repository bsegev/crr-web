"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false)
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false)
  const [isAdmissionsDropdownOpen, setIsAdmissionsDropdownOpen] = useState(false)
  const [isMobileAdmissionsOpen, setIsMobileAdmissionsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/contact", label: "Contact" }
  ]

  const aboutMenuItems = [
    { href: "/about/articles", label: "Articles" },
    { href: "/about/licenses-accreditations", label: "Licenses & Accreditations" },
    { href: "/about/mission-vision", label: "Mission & Vision" },
    { href: "/about/our-facility", label: "Our Facility" },
    { href: "/about/our-team", label: "Our Team" },
    { href: "/about/testimonials", label: "Testimonials" }
  ]

  const programsMenuItems = [
    { href: "/programs/residential-program", label: "Residential Program" },
    { href: "/programs/our-approach", label: "Our Approach" },
    { href: "/programs/preparing-for-your-stay", label: "Preparing For Your Stay" }
  ]

  const admissionsMenuItems = [
    { href: "/admissions/admissions-process", label: "Admissions Process" },
    { href: "/admissions/pricing", label: "Pricing" }
  ]

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-[90rem] mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-8 h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-3">
              <div className={`text-2xl font-primary font-light tracking-wide transition-colors ${
                isScrolled ? 'text-navy-extra-dark' : 'text-white'
              } group-hover:text-orange`}>
                <span className={isScrolled ? 'text-orange' : 'text-orange'}>Costa Rica</span>
                <span className="font-light"> Recovery</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`text-sm font-secondary font-light tracking-wide uppercase transition-colors hover:text-orange ${
                  isScrolled ? 'text-navy-dark/80' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-secondary font-light tracking-wide uppercase transition-colors hover:text-orange ${
                  isScrolled ? 'text-navy-dark/80' : 'text-white/90'
                }`}
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden z-50"
                  >
                    {aboutMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 text-sm font-secondary text-gray-700 hover:bg-orange hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProgramsDropdownOpen(true)}
              onMouseLeave={() => setIsProgramsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-secondary font-light tracking-wide uppercase transition-colors hover:text-orange ${
                  isScrolled ? 'text-navy-dark/80' : 'text-white/90'
                }`}
              >
                Programs
                <ChevronDown className={`h-4 w-4 transition-transform ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isProgramsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg overflow-hidden z-50"
                  >
                    {programsMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 text-sm font-secondary text-gray-700 hover:bg-orange hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Admissions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAdmissionsDropdownOpen(true)}
              onMouseLeave={() => setIsAdmissionsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-secondary font-light tracking-wide uppercase transition-colors hover:text-orange ${
                  isScrolled ? 'text-navy-dark/80' : 'text-white/90'
                }`}
              >
                Admissions
                <ChevronDown className={`h-4 w-4 transition-transform ${isAdmissionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isAdmissionsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden z-50"
                  >
                    {admissionsMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 text-sm font-secondary text-gray-700 hover:bg-orange hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* CTA Button */}
            <Link href="/contact">
              <motion.button 
                className={`group relative text-sm tracking-widest uppercase font-secondary font-bold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white' 
                    : 'text-navy-extra-dark'
                }`}
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-10 sm:px-12 py-3 sm:py-4 block">Get Help Now</span>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-orange group-hover:bg-orange-dark' 
                    : 'bg-white group-hover:bg-gray-50 border border-white/30'
                }`}></div>
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-navy-extra-dark' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Elegant Mobile Side Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Drawer */}
        <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 md:hidden flex flex-col"
        >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-primary font-light tracking-wide">
                    <span className="text-orange">Costa Rica</span>
                    <span className="text-navy-extra-dark"> Recovery</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-navy-extra-dark transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 space-y-8 overflow-y-auto flex-1">
                {/* Navigation Links */}
                <nav className="space-y-6">
                  {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                      className="flex items-center justify-between group py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                      <span className="text-base font-secondary text-gray-600 group-hover:text-orange transition-colors">
                {item.label}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-orange transition-colors" />
              </Link>
            ))}
                  
                  {/* About Dropdown for Mobile */}
                  <div>
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className="flex items-center justify-between w-full group py-2"
                    >
                      <span className="text-base font-secondary text-gray-600 group-hover:text-orange transition-colors">
                        About
                      </span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 group-hover:text-orange transition-all ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 space-y-3 pt-3"
                        >
                          {aboutMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsMobileAboutOpen(false)
                              }}
                              className="block text-sm font-secondary text-gray-500 hover:text-orange transition-colors py-1"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Programs Dropdown for Mobile */}
                  <div>
                    <button
                      onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                      className="flex items-center justify-between w-full group py-2"
                    >
                      <span className="text-base font-secondary text-gray-600 group-hover:text-orange transition-colors">
                        Programs
                      </span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 group-hover:text-orange transition-all ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileProgramsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 space-y-3 pt-3"
                        >
                          {programsMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsMobileProgramsOpen(false)
                              }}
                              className="block text-sm font-secondary text-gray-500 hover:text-orange transition-colors py-1"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Admissions Dropdown for Mobile */}
                  <div>
                    <button
                      onClick={() => setIsMobileAdmissionsOpen(!isMobileAdmissionsOpen)}
                      className="flex items-center justify-between w-full group py-2"
                    >
                      <span className="text-base font-secondary text-gray-600 group-hover:text-orange transition-colors">
                        Admissions
                      </span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 group-hover:text-orange transition-all ${isMobileAdmissionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileAdmissionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 space-y-3 pt-3"
                        >
                          {admissionsMenuItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsMobileAdmissionsOpen(false)
                              }}
                              className="block text-sm font-secondary text-gray-500 hover:text-orange transition-colors py-1"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>

                {/* Divider */}
                <div className="h-px bg-gray-100" />

                {/* CTA Section */}
                <div className="space-y-4">
                  <Link 
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <motion.button 
                      className="w-full bg-orange text-white py-4 px-6 text-sm uppercase tracking-wider font-secondary font-bold hover:bg-orange-dark transition-colors"
                      style={{ letterSpacing: '0.02em' }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Get Help Now
                    </motion.button>
            </Link>
                  <p className="text-xs font-secondary text-gray-500 text-center">
                    Complete confidentiality • Compassionate care • Clinical excellence
                  </p>
                </div>
          </div>
        </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 