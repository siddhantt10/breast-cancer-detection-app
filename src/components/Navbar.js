'use client'  // Mark this file as a client-side component

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to add background color when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)  // Add background when scrolled more than 50px
      } else {
        setIsScrolled(false)  // Remove background when at top
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)  // Cleanup
  }, [])

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed w-full py-6 px-8 transition-all flex justify-between duration-300 z-50 ${isScrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-white'}`}
    >
      {/* Logo Section - Replaced text with an image */}
      <div className="flex items-center hover:cursor-pointer lg:pl-12">
        <Link href="/" legacyBehavior>
          <img src="/logo.png" alt="Logo" width={200} height={80} />
        </Link>
      </div>

      {/* Navbar Links */}
      <div className={`hidden md:flex space-x-6 items-center text-sm pr-12 ${isMenuOpen ? 'flex' : ''}`}>
        <Link href="/about" legacyBehavior>
          <a className="hover:text-blue-400">About Us</a>
        </Link>
        <Link href="/locate" legacyBehavior>
          <a className="hover:text-blue-400">Locate Hospitals</a>
        </Link>
        <Link href="/research" legacyBehavior>
          <a className="hover:text-blue-400">Research</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="hover:text-blue-400">Contact</a>
        </Link>
        <Link href="/dashboard" legacyBehavior>
          <a className="hover:bg-bcdBlue/40 bg-blue-500 px-4 py-2 rounded-md transition-all ease-in-out">Dashboard</a>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Links */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-gray-800 text-white z-50`}>
        <Link href="/about" legacyBehavior>
          <a className="block py-2 px-6 hover:text-blue-400">About Us</a>
        </Link>
        <Link href="/locate" legacyBehavior>
          <a className="block py-2 px-6 hover:text-blue-400">Locate Hospitals</a>
        </Link>
        <Link href="/research" legacyBehavior>
          <a className="block py-2 px-6 hover:text-blue-400">Research</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="block py-2 px-6 hover:text-blue-400">Contact</a>
        </Link>
        <Link href="/dashboard" legacyBehavior>
          <a className="block py-2 px-6 hover:bg-bcdBlue/40 bg-blue-500 rounded-md transition-all ease-in-out">Dashboard</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
