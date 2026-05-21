'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Specifications from '@/components/Specifications'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Specifications />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
