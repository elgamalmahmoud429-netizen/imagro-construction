'use client'

import React from 'react'
import { FadeIn, SlideUp } from './Animations'

const experienceAreas = [
  'International Infrastructure',
  'Power & Energy',
  'Transportation Networks',
  'Engineering Excellence',
  'Large-Scale Construction',
  'Project Management',
]

const stats = [
  { label: 'International Projects', value: '50+' },
  { label: 'Major Infrastructure Works', value: '30+' },
  { label: 'Engineering Expertise (Years)', value: '25+' },
  { label: 'Countries & Markets', value: '15+' },
]

export function Experience() {
  return (
    <section className="py-20 md:py-28 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Proven track record across multiple sectors and international markets.
          </p>
        </FadeIn>

        {/* Experience Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {experienceAreas.map((area, index) => (
            <SlideUp key={index} delay={index * 50} className="group">
              <div className="p-6 bg-brand-800/30 border border-brand-700 rounded-lg hover:border-brand-accent hover:bg-brand-800/60 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <span className="text-lg font-semibold text-white group-hover:text-brand-accent transition-colors">
                    {area}
                  </span>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Statistics */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <SlideUp key={index} delay={300 + index * 100} className="text-center">
                <div className="p-8 bg-gradient-to-br from-brand-800/50 to-brand-900/50 border border-brand-700 rounded-lg hover:border-brand-accent transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/20">
                  <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-3">
                    {stat.value}
                  </div>
                  <p className="text-neutral-300 font-medium">{stat.label}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
