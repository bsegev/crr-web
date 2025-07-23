"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/our-centers", label: "Our Centers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
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
              <div className={`w-12 h-12 rounded-full ${
                isScrolled 
                  ? 'bg-forest-extra-dark group-hover:bg-forest-extra-dark/90' 
                  : 'bg-white/20 backdrop-blur-sm'
              } flex items-center justify-center transition-colors`}>
                <div className={`w-6 h-6 border-2 ${
                  isScrolled ? 'border-white' : 'border-white'
                } rounded-full relative`}>
                  <div className={`absolute inset-1 border ${
                    isScrolled ? 'border-white' : 'border-white'
                  } rounded-full`}></div>
                </div>
              </div>
              <span className={`text-2xl font-primary font-light tracking-wide transition-colors ${
                isScrolled ? 'text-forest-extra-dark' : 'text-white'
              } group-hover:text-stone-light`}>
                IWC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`text-sm font-secondary font-light tracking-wide uppercase transition-colors hover:text-stone-light ${
                  isScrolled ? 'text-forest-extra-dark/80' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link href="/contact">
              <motion.button 
                className={`group relative text-sm tracking-widest uppercase font-secondary font-bold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white' 
                    : 'text-forest-extra-dark'
                }`}
                style={{ letterSpacing: '0.02em' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-10 sm:px-12 py-3 sm:py-4 block">Begin Your Transformation</span>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-forest-extra-dark group-hover:bg-forest-extra-dark/90' 
                    : 'bg-stone-extra-light group-hover:bg-stone-light border border-stone-light/30'
                }`}></div>
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-forest-extra-dark' : 'text-white'
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
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 md:hidden"
        >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-forest-extra-dark flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white rounded-full relative">
                      <div className="absolute inset-1 border border-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xl font-primary font-light tracking-wide text-forest-extra-dark">IWC</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-forest-extra-dark transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 space-y-8">
                {/* Navigation Links */}
                <nav className="space-y-6">
                  {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                      className="flex items-center justify-between group py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                      <span className="text-base font-secondary text-gray-600 group-hover:text-forest-extra-dark transition-colors">
                {item.label}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-forest-extra-dark transition-colors" />
              </Link>
            ))}
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
                      className="w-full bg-forest-extra-dark text-white py-4 px-6 text-sm uppercase tracking-wider font-secondary font-bold hover:bg-forest-extra-dark/90 transition-colors"
                      style={{ letterSpacing: '0.02em' }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      Begin Your Transformation
                    </motion.button>
            </Link>
                  <p className="text-xs font-secondary text-gray-500 text-center">
                    Absolute discretion • Utmost dignity • Complete confidentiality
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