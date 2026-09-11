'use client'

import React from 'react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IM</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">IMAGRO</h3>
                <p className="text-brand-accent text-xs">Construction</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">
              International Construction & Infrastructure Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  Construction
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors text-sm">
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:elgamalmahmoud429@gmail.com"
                  className="text-neutral-400 hover:text-brand-accent transition-colors text-sm flex items-center space-x-2"
                >
                  <span>Email</span>
                </a>
                <p className="text-neutral-500 text-xs mt-1">elgamalmahmoud429@gmail.com</p>
              </li>
              <li>
                <a
                  href="tel:01010522573"
                  className="text-neutral-400 hover:text-brand-accent transition-colors text-sm flex items-center space-x-2"
                >
                  <span>Phone</span>
                </a>
                <p className="text-neutral-500 text-xs mt-1">+20 101 052 2573</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              © {currentYear} IMAGRO Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-brand-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-brand-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-500 hover:text-brand-accent transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
