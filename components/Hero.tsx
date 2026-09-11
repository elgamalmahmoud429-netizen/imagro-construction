'use client'

import React from 'react'
import Link from 'next/link'
import { FadeIn, SlideUp } from './Animations'

export function Hero() {
  return (
    <div className="relative w-full h-screen bg-brand-950 overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=2000&q=80")',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-950/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0} duration={800} className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-200 bg-clip-text text-transparent">
              BUILDING INFRASTRUCTURE.
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              CONNECTING THE FUTURE.
            </span>
          </h1>
        </FadeIn>

        <SlideUp delay={200} duration={800} className="max-w-2xl mb-8">
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            International construction and infrastructure solutions across Egypt, the Middle East, Africa and Europe.
          </p>
        </SlideUp>

        <SlideUp delay={400} duration={800} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3.5 bg-brand-accent hover:bg-brand-accent-light text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-accent/50 text-center"
          >
            OUR PROJECTS
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 border-2 border-white hover:border-brand-accent text-white hover:text-brand-accent font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            CONTACT US
          </Link>
        </SlideUp>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-brand-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
}
