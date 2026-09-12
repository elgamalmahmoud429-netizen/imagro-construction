'use client'

import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FadeIn, SlideUp } from './Animations'

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ fullName: '', company: '', email: '', phone: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section className="py-20 md:py-28 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build the Future
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project requirements.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <SlideUp delay={0} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Email */}
              <div className="p-6 bg-brand-900 border border-brand-800 rounded-lg hover:border-brand-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <a
                      href="mailto:elgamalmahmoud429@gmail.com"
                      className="text-brand-accent hover:text-brand-accent-light transition-colors break-all"
                    >
                      elgamalmahmoud429@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 bg-brand-900 border border-brand-800 rounded-lg hover:border-brand-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <a
                      href="tel:01010522573"
                      className="text-brand-accent hover:text-brand-accent-light transition-colors"
                    >
                      +20 101 052 2573
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 bg-brand-900 border border-brand-800 rounded-lg hover:border-brand-accent transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Service Areas</h3>
                    <p className="text-neutral-400 text-sm">
                      Egypt, Middle East, Africa & Europe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form */}
          <SlideUp delay={200} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-8 bg-gradient-to-br from-brand-900/50 to-brand-800/30 border border-brand-800 rounded-lg">
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-300 font-semibold">Thank you! We'll get back to you soon.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-brand-900 border border-brand-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3.5 bg-gradient-to-r from-brand-accent to-brand-accent-light hover:shadow-lg hover:shadow-brand-accent/50 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
