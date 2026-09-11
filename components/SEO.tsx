'use client'

import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
}

export function SEO({
  title = 'IMAGRO Construction | International Construction & Infrastructure',
  description = 'IMAGRO Construction delivers construction, engineering and infrastructure solutions across Egypt, the Middle East, Africa and Europe.',
  canonical,
  ogImage,
  ogType = 'website',
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
  )
}
