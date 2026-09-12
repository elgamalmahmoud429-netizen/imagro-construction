'use client'

import React from 'react'
import {
  FiBuilding2,
  FiTrendingUp,
  FiZap,
  FiTruck,
  FiNetwork,
  FiClipboard,
  FiCpu,
  FiGitBranch,
} from 'react-icons/fi'
import { FadeIn, SlideUp } from './Animations'

const services = [
  {
    icon: FiBuilding2,
    title: 'Infrastructure Construction',
    description: 'Large-scale infrastructure development projects including roads, bridges, and civic structures.',
  },
  {
    icon: FiTrendingUp,
    title: 'Civil Engineering',
    description: 'Expert civil engineering solutions for complex construction and development challenges.',
  },
  {
    icon: FiZap,
    title: 'Industrial Construction',
    description: 'Specialized industrial facilities, warehouses, and manufacturing plants.',
  },
  {
    icon: FiTrendingUp,
    title: 'Power & Energy Projects',
    description: 'Power generation facilities and energy infrastructure development.',
  },
  {
    icon: FiTruck,
    title: 'Transportation Infrastructure',
    description: 'Railways, highways, airports, and modern transit infrastructure systems.',
  },
  {
    icon: FiClipboard,
    title: 'Civil Works',
    description: 'Comprehensive civil works execution and project implementation.',
  },
  {
    icon: FiCpu,
    title: 'Engineering & Construction',
    description: 'End-to-end engineering design and construction services.',
  },
  {
    icon: FiGitBranch,
    title: 'Project Management',
    description: 'Professional project management and coordination services.',
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Comprehensive construction and engineering solutions tailored to your project needs.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <SlideUp key={index} delay={index * 50} className="group">
                <div className="h-full p-6 bg-brand-800/30 border border-brand-700 rounded-lg hover:border-brand-accent hover:bg-brand-800/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </SlideUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
