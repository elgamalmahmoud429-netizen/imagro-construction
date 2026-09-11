'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/services', label: 'SERVICES' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/experience', label: 'EXPERIENCE' },
    { href: '/contact', label: 'CONTACT' },
  ]

  const isActive = (href: string) => router.pathname === href

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-900/95 backdrop-blur-md border-b border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IM</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">IMAGRO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-brand-accent'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-brand-accent transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-brand-800 border-t border-brand-700">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'bg-brand-accent text-white'
                    : 'text-neutral-300 hover:bg-brand-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2.5 mt-4 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
