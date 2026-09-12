'use client'

import React, { useState, useEffect } from 'react'
import { FiClock, FiGlobe } from 'react-icons/fi'

interface TimeZone {
  name: string
  label: string
  offset: string
  region: string
}

const timeZones: TimeZone[] = [
  { name: 'Africa/Cairo', label: 'Cairo (EET)', offset: 'UTC+2', region: 'Egypt' },
  { name: 'Africa/Lagos', label: 'Lagos (WAT)', offset: 'UTC+1', region: 'West Africa' },
  { name: 'Asia/Dubai', label: 'Dubai (GST)', offset: 'UTC+4', region: 'Middle East' },
  { name: 'Europe/London', label: 'London (GMT/BST)', offset: 'UTC+0/+1', region: 'Europe' },
  { name: 'Europe/Paris', label: 'Paris (CET/CEST)', offset: 'UTC+1/+2', region: 'Europe' },
  { name: 'America/New_York', label: 'New York (EST/EDT)', offset: 'UTC-5/-4', region: 'North America' },
]

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function TimeZoneClock() {
  const [times, setTimes] = useState<{ [key: string]: Date }>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Initialize times
    const initialTimes: { [key: string]: Date } = {}
    timeZones.forEach((tz) => {
      initialTimes[tz.name] = new Date()
    })
    setTimes(initialTimes)

    // Update times every second
    const interval = setInterval(() => {
      const updatedTimes: { [key: string]: Date } = {}
      timeZones.forEach((tz) => {
        updatedTimes[tz.name] = new Date()
      })
      setTimes(updatedTimes)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted || Object.keys(times).length === 0) {
    return (
      <div className="min-h-screen bg-brand-950 flex items-center justify-center">
        <div className="text-brand-accent">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-950 to-brand-900 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FiClock className="w-8 h-8 text-brand-accent" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Global Time
            </h1>
            <FiGlobe className="w-8 h-8 text-brand-accent" />
          </div>
          <p className="text-lg text-neutral-300">
            Real-time clock displaying current time across IMAGRO's international markets
          </p>
        </div>

        {/* Main Clock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {timeZones.map((tz) => {
            const date = times[tz.name] || new Date()
            const formatter = new Intl.DateTimeFormat('en-US', {
              timeZone: tz.name,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            })
            const dateFormatter = new Intl.DateTimeFormat('en-US', {
              timeZone: tz.name,
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
            const timeString = formatter.format(date)
            const dateString = dateFormatter.format(date)

            return (
              <div
                key={tz.name}
                className="group p-6 bg-gradient-to-br from-brand-800/40 to-brand-900/40 border border-brand-700 rounded-lg hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                      {tz.label}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-brand-accent/20 text-brand-accent rounded-full font-semibold">
                      {tz.region}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400">{tz.offset}</p>
                </div>

                {/* Digital Time Display */}
                <div className="bg-brand-950/80 border border-brand-700 rounded-lg p-6 mb-4 font-mono">
                  <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2 tracking-widest">
                    {timeString}
                  </div>
                  <div className="text-sm text-neutral-400">{dateString}</div>
                </div>

                {/* Analog Clock */}
                <div className="flex justify-center">
                  <AnalogClock date={date} timeZone={tz.name} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Current Time Summary */}
        <div className="p-8 bg-gradient-to-r from-brand-800/30 to-brand-900/30 border border-brand-700 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Time Zone Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeZones.map((tz) => {
              const date = times[tz.name] || new Date()
              const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tz.name,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })
              const timeString = formatter.format(date)

              return (
                <div key={tz.name} className="flex items-center justify-between p-3 bg-brand-900/50 rounded-lg border border-brand-700/50 hover:border-brand-accent/50 transition-colors">
                  <div>
                    <p className="font-semibold text-white text-sm">{tz.label}</p>
                    <p className="text-xs text-neutral-400">{tz.region}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-brand-accent font-mono">{timeString}</p>
                    <p className="text-xs text-neutral-500">{tz.offset}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

interface AnalogClockProps {
  date: Date
  timeZone: string
}

function AnalogClock({ date, timeZone }: AnalogClockProps) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const parts = formatter.formatToParts(date)
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0')
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0')
  const second = parseInt(parts.find((p) => p.type === 'second')?.value || '0')

  const secondDegrees = (second / 60) * 360
  const minuteDegrees = (minute / 60) * 360 + (second / 60) * 6
  const hourDegrees = (hour / 12) * 360 + (minute / 60) * 30

  return (
    <div className="relative w-20 h-20 rounded-full bg-brand-950 border-2 border-brand-accent shadow-lg">
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-brand-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

      {/* Hour hand */}
      <div
        className="absolute bottom-1/2 left-1/2 w-1 bg-brand-accent rounded-full origin-bottom"
        style={{
          height: '28%',
          transform: `translateX(-50%) rotate(${hourDegrees}deg)`,
          width: '3px',
        }}
      />

      {/* Minute hand */}
      <div
        className="absolute bottom-1/2 left-1/2 bg-neutral-300 rounded-full origin-bottom"
        style={{
          height: '35%',
          width: '2px',
          transform: `translateX(-50%) rotate(${minuteDegrees}deg)`,
        }}
      />

      {/* Second hand */}
      <div
        className="absolute bottom-1/2 left-1/2 bg-brand-accent-light rounded-full origin-bottom"
        style={{
          height: '40%',
          width: '1px',
          transform: `translateX(-50%) rotate(${secondDegrees}deg)`,
        }}
      />
    </div>
  )
}
