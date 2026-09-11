'use client'

import React from 'react'
import { FadeIn, SlideUp } from './Animations'

export function HomeIntro() {
  return (
    <section className="py-20 md:py-28 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            Engineering Excellence.
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              Infrastructure That Lasts.
            </span>
          </h2>
        </FadeIn>

        <SlideUp delay={200} className="max-w-3xl mx-auto">
          <p className="text-lg text-neutral-300 leading-relaxed text-center mb-8">
            IMAGRO Construction brings together decades of expertise in construction, engineering, and
            international infrastructure development. We specialize in large-scale infrastructure projects,
            from power stations and transportation networks to industrial facilities and civil works.
          </p>
          
          <p className="text-lg text-neutral-300 leading-relaxed text-center">
            Our international perspective, combined with deep technical expertise, allows us to deliver
            reliable, efficient, and high-quality construction solutions that create lasting value for our
            clients across Egypt, the Middle East, Africa, and Europe.
          </p>
        </SlideUp>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { label: 'International Projects', value: '50+' },
            { label: 'Countries Served', value: '15+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Expert Team', value: '200+' },
          ].map((stat, index) => (
            <SlideUp key={index} delay={300 + index * 100} className="text-center">
              <div className="p-6 bg-brand-800/50 rounded-lg border border-brand-700 hover:border-brand-accent transition-colors duration-300">
                <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-neutral-300 text-sm md:text-base">{stat.label}</p>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
