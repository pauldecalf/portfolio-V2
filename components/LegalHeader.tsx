'use client'
import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './context/ThemeContext'
import { useRouter } from 'next/navigation'

export const LegalHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const redirectHome = () => router.push('/')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo perso */}
          <div
            onClick={redirectHome}
            className="text-xl font-bold cursor-pointer"
          >
            <span className="text-indigo-600 dark:text-indigo-400">Paul</span>
            Decalf
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={redirectHome}
              className="nav-button cursor-pointer"
            >
              Retour au site
            </button>
        
          </nav>

          {/* Mobile menu icon */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 cursor-pointer"
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={redirectHome} className="mobile-nav-button">
              Retour au site
            </button>

          </div>
        </div>
      )}
    </header>
  )
}
