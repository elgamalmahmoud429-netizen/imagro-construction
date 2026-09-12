'use client'

import React from 'react'
import { FadeIn, SlideUp } from './Animations'

export function About() {
  return (
    <section className="py-20 md:py-28 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeIn>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About
                <br />
                <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
                  IMAGRO Construction
                </span>
              </h2>

              <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                IMAGRO Construction is an engineering and construction company focused on delivering
                high-quality infrastructure and industrial projects. Our experience covers major
                construction, energy, transportation and civil infrastructure developments.
              </p>

              {/* Mission */}
              <SlideUp delay={200} className="mb-8 p-6 bg-brand-900 border-l-4 border-brand-accent rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">MISSION</h3>
                <p className="text-neutral-300">
                  To deliver reliable, efficient and high-quality construction solutions that create
                  lasting value for our clients and communities.
                </p>
              </SlideUp>

              {/* Vision */}
              <SlideUp delay={400} className="p-6 bg-brand-900 border-l-4 border-brand-accent-light rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">VISION</h3>
                <p className="text-neutral-300">
                  To become a trusted international construction and infrastructure partner across Egypt,
                  the Middle East, Africa and Europe.
                </p>
              </SlideUp>
            </div>
          </FadeIn>

          {/* Right Image */}
          <SlideUp delay={300} className="relative h-96 lg:h-full min-h-96">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&w=1000&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
