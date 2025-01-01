"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sprout } from 'lucide-react'
import { Button } from './ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-800">HydroGrow</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/guide" className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium">
                Growing Guide
              </Link>
              <Button variant="default" className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/guide" className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium">
              Growing Guide
            </Link>
            <Button variant="default" className="w-full bg-green-600 hover:bg-green-700 mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}