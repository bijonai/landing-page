'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !lightRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      lightRef.current.style.left = `${x}px`
      lightRef.current.style.top = `${y}px`
    }

    const hero = heroRef.current
    hero?.addEventListener('mousemove', handleMouseMove)

    return () => {
      hero?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="hero-gradient">
        <div 
          ref={heroRef}
          className="hero-content container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center"
        >
          <div ref={lightRef} className="mouse-light" />
          <div className="relative w-48 h-48 mb-8">
            <Image
              src="/logo.svg"
              alt="BijonAI Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="relative w-[300px] h-[80px] mb-12">
            <Image
              src="/text.svg"
              alt="BijonAI"
              fill
              priority
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl md:text-3xl text-white text-center max-w-2xl font-mono">
            To promote the innovation of AI with <span className="text-purple-500">CREATIVITY</span>
          </h2>
        </div>
      </div>
      
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Welcome to BijonAI
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            
          </p>
        </div>
      </section>
    </main>
  )
}
