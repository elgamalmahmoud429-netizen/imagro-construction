'use client'

import React from 'react'
import { FadeIn, SlideUp } from './Animations'

interface Project {
  id: string
  name: string
  sector: string
  location: string
  description: string
  image: string
  category: 'power' | 'transportation' | 'infrastructure' | 'industrial' | 'civil'
}

const projects: Project[] = [
  {
    id: '1',
    name: 'El Burullus Power Station',
    sector: 'Power & Energy',
    location: 'Kafr El-Sheikh, Egypt',
    description: 'Major power generation facility contributing to national energy infrastructure.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&w=800&q=80',
    category: 'power',
  },
  {
    id: '2',
    name: 'New Capital Power Station',
    sector: 'Power & Energy',
    location: 'New Administrative Capital, Egypt',
    description: 'Advanced power infrastructure supporting the new capital development.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&w=800&q=80',
    category: 'power',
  },
  {
    id: '3',
    name: 'Assiut Power Station',
    sector: 'Power & Energy',
    location: 'Assiut, Egypt',
    description: 'Strategic power generation facility for Upper Egypt region.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&w=800&q=80',
    category: 'power',
  },
  {
    id: '4',
    name: 'West Damietta Power Station',
    sector: 'Power & Energy',
    location: 'Damietta, Egypt',
    description: 'Major power generation infrastructure on the Mediterranean coast.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&w=800&q=80',
    category: 'power',
  },
  {
    id: '5',
    name: 'Cairo Monorail Infrastructure',
    sector: 'Transportation',
    location: 'Cairo, Egypt',
    description: 'Modern transportation infrastructure for urban mobility.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=800&q=80',
    category: 'transportation',
  },
  {
    id: '6',
    name: 'Regional Infrastructure Development',
    sector: 'Infrastructure',
    location: 'Middle East & Africa',
    description: 'Large-scale infrastructure projects across multiple regions.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&w=800&q=80',
    category: 'infrastructure',
  },
]

export function Projects() {
  return (
    <section className="py-20 md:py-28 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              Project Experience
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Our portfolio showcases significant international infrastructure and construction projects.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SlideUp key={project.id} delay={index * 100} className="group">
              <div className="h-full bg-brand-900 rounded-lg overflow-hidden border border-brand-800 hover:border-brand-accent transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/30 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-brand-800">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-brand-accent text-white text-xs font-bold rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-brand-accent text-sm font-semibold mb-2">{project.sector}</p>
                  <p className="text-neutral-400 text-sm mb-3">
                    <span className="text-neutral-500">Location:</span> {project.location}
                  </p>
                  <p className="text-neutral-300 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
