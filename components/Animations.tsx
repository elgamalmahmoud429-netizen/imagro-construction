'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 600, className = '' }: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        animation: inView ? `fadeIn ${duration}ms ease-out ${delay}ms forwards` : 'none',
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}

export function SlideUp({ children, delay = 0, duration = 600, className = '' }: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        animation: inView ? `slideUp ${duration}ms ease-out ${delay}ms forwards` : 'none',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {children}
    </div>
  )
}
