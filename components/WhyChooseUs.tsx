'use client'

import React from 'react'
import {
  FiGlobe,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiTarget,
} from 'react-icons/fi'
import { FadeIn, SlideUp } from './Animations'

const whyChooseUs = [
  {
    icon: FiGlobe,
    title: 'International Perspective',
    description: 'Proven experience across multiple countries and international markets.',
  },
  {
    icon: FiAward,
    title: 'Engineering Expertise',
    description: 'Deep technical knowledge and specialized engineering capabilities.',
  },
  {
    icon: FiShield,
    title: 'Quality & Reliability',
    description: 'Commitment to highest standards and reliable project delivery.',
  },
  {
    icon: FiTrendingUp,
    title: 'Professional Management',
    description: 'Rigorous project management and coordination practices.',
  },
  {
    icon: FiTarget,
    title: 'Safety & Compliance',
    description: 'Strict adherence to safety protocols and regulatory compliance.',
  },
  {
    icon: FiUsers,
    title: 'Long-Term Partnerships',
    description: 'Building lasting relationships with clients and stakeholders.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              Choose IMAGRO
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon
            return (
              <SlideUp key={index} delay={index * 100} className="group">
                <div className="h-full p-8 bg-gradient-to-br from-brand-900/50 to-brand-800/50 border border-brand-800 rounded-lg hover:border-brand-accent hover:bg-brand-800/80 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </SlideUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
