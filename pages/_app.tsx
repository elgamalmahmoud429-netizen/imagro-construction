import type { AppProps } from 'next/app'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-950">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
