'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { ArrowRight, Code, Database } from 'lucide-react'

export const HeroSection: React.FC = () => {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <section
      id="home"
      className="relative pt-28 lg:pt-36 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
              Développeur Freelance
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Paul Decalf
              <span className="block text-indigo-600 dark:text-indigo-400 mt-2">
                Développeur Fullstack PHP/Symfony
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Je conçois des applications web robustes et évolutives avec les technologies modernes. Spécialisé dans la création de solutions élégantes pour les entreprises et startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('contact')}>
                Me contacter
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                Demander un devis
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative h-80 w-80 md:h-96 md:w-96 mx-auto">
              <div className="absolute inset-0 bg-indigo-600/30 dark:bg-indigo-500/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-indigo-600/10 dark:bg-indigo-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <Code
                      size={48}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                    <Database
                      size={48}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-72 h-72 rounded-full bg-indigo-500/30 blur-md"></div>
                    <picture>
                      <source srcSet="./images/img_profil_desk.webp" media="(min-width: 768px)" />
                      <img
                        src="./images/img_profil_mobile.webp"
                        alt="Paul Decalf"
                        className="rounded-full w-64 h-64 object-cover border-4 border-white dark:border-gray-800 shadow-lg relative z-10"
                        fetchPriority="high"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent"></div>
    </section>
  )
}
