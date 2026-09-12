'use client'

import React from 'react'
import { FadeIn, SlideUp } from './Animations'

const regions = [
  {
    name: 'EGYPT',
    description: 'Headquarters and primary operations with extensive domestic project experience.',
  },
  {
    name: 'MIDDLE EAST',
    description: 'Growing presence in regional infrastructure and energy projects.',
  },
  {
    name: 'AFRICA',
    description: 'Expanding infrastructure development across African markets.',
  },
  {
    name: 'EUROPE',
    description: 'International partnerships and selective European project engagement.',
  },
]

export function GlobalPresence() {
  return (
    <section className="py-20 md:py-28 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our International
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              Reach
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Our focus is on international infrastructure projects, primarily in Egypt, the Middle East,
            Africa and Europe.
          </p>
        </FadeIn>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, index) => (
            <SlideUp key={index} delay={index * 100} className="group">
              <div className="h-full p-8 bg-gradient-to-br from-brand-800/40 to-brand-900/40 border border-brand-700 rounded-lg hover:border-brand-accent hover:bg-brand-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/40">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl group-hover:text-white">◆</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {region.name}
                </h3>
                <p className="text-neutral-300 leading-relaxed">{region.description}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* World Map Visualization */}
        <FadeIn className="p-12 bg-gradient-to-br from-brand-800/30 to-brand-950/30 border border-brand-700 rounded-lg">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-48 h-48 mx-auto mb-6 bg-brand-900 rounded-full border-2 border-brand-accent/30">
              <div className="text-6xl">🌍</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Global Infrastructure Partner</h3>
            <p className="text-neutral-300 max-w-lg mx-auto">
              With operations spanning four continents, IMAGRO Construction is positioned as a trusted
              partner for international infrastructure development and engineering excellence.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
