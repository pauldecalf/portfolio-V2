'use client'
import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './context/ThemeContext'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo perso */}
          <div className="text-xl font-bold">
            <span className="text-indigo-600 dark:text-indigo-400">Paul</span>
            Decalf
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-button cursor-pointer">Accueil</button>
            <button onClick={() => scrollToSection('about')} className="nav-button cursor-pointer">À propos</button>
            <button onClick={() => scrollToSection('skills')} className="nav-button cursor-pointer">Compétences</button>
            <button onClick={() => scrollToSection('projects')} className="nav-button cursor-pointer">Projets</button>
            <button onClick={() => scrollToSection('services')} className="nav-button cursor-pointer">Offres</button>
            <button onClick={() => scrollToSection('blog')} className="nav-button cursor-pointer">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="nav-button cursor-pointer">Contact / Devis</button>

            {/* Thème */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-pointer"
              aria-label="Changer de thème"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Boutons mobile */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-pointer"
              aria-label="Changer de thème"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
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

      {/* Navigation mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-button cursor-pointer">Accueil</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-button cursor-pointer">À propos</button>
            <button onClick={() => scrollToSection('skills')} className="mobile-nav-button cursor-pointer">Compétences</button>
            <button onClick={() => scrollToSection('projects')} className="mobile-nav-button cursor-pointer">Projets</button>
            <button onClick={() => scrollToSection('services')} className="mobile-nav-button cursor-pointer">Offres</button>
            <button onClick={() => scrollToSection('blog')} className="mobile-nav-button cursor-pointer">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-button cursor-pointer">Contact / Devis</button>
          </div>
        </div>
      )}
    </header>
  )
}

