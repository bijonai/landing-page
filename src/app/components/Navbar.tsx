'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8 // 80vh
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav-fixed ${isScrolled ? 'nav-glass' : 'nav-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link 
              href="/news" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:opacity-75 transition-opacity`}
            >
              News
            </Link>
            <Link 
              href="/platform" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:opacity-75 transition-opacity`}
            >
              Platform
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <a 
              href="https://github.com/bijonai" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} external-link hover:opacity-75 transition-opacity`}
            >
              Github
            </a>
            <a 
              href="https://x.com/bijonaicom" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} external-link hover:opacity-75 transition-opacity`}
            >
              X
            </a>
            <a 
              href="https://youtube.com/@bijonai" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} external-link hover:opacity-75 transition-opacity`}
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 