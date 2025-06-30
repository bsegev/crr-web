"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#06402B]/10' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-[#06402B]' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <div className={`w-4 h-4 border-2 rounded-full relative ${
                  isScrolled ? 'border-white' : 'border-white'
                }`}>
                  <div className={`absolute inset-0.5 border rounded-full ${
                    isScrolled ? 'border-white' : 'border-white'
                  }`}></div>
                </div>
              </div>
              <span className={`text-xl font-light tracking-wide transition-colors ${
                isScrolled ? 'text-[#06402B]' : 'text-white'
              }`}>
                IWC
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {[
              { href: "/our-centers", label: "Our Centers" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`text-sm font-light tracking-wide uppercase transition-colors hover:text-[#B7C9B7] ${
                  isScrolled ? 'text-[#06402B]/80' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link href="/get-help">
              <motion.button 
                className={`group relative text-sm tracking-widest uppercase font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white' 
                    : 'text-[#06402B]'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 px-8 py-3 block">Get Help</span>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-[#06402B] group-hover:bg-[#06402B]/90' 
                    : 'bg-white/90 group-hover:bg-white border border-white/30'
                }`}></div>
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#06402B]' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
        >
          <div className="py-8 space-y-6 border-t border-[#06402B]/10">
            {[
              { href: "/our-centers", label: "Our Centers" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="block text-sm font-light tracking-wide uppercase text-[#06402B]/80 hover:text-[#B7C9B7] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Link href="/get-help" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full group relative text-white text-sm tracking-widest uppercase font-medium mt-4 hover:text-[#B7C9B7] transition-colors">
                <span className="relative z-10 px-8 py-3 block">Get Help</span>
                <div className="absolute inset-0 bg-[#06402B] group-hover:bg-[#06402B]/90 transition-all duration-300"></div>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header 