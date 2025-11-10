'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center">
          <Image src="/logo.png" alt="onMRI Logo" width={80} height={80} className="rounded-lg" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-lg font-medium text-primary hover:text-accent transition-colors">About</a>
          <a href="#methods" className="text-lg font-medium text-primary hover:text-accent transition-colors">Methods</a>
          <a href="#results" className="text-lg font-medium text-primary hover:text-accent transition-colors">Results</a>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#about" className="block py-2 text-primary">About</a>
            <a href="#methods" className="block py-2 text-primary">Methods</a>
            <a href="#results" className="block py-2 text-primary">Results</a>
          </div>
        </div>
      )}
    </header>
  )
}