'use client'
import React from 'react'
import { Github, Linkedin, ExternalLink } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-indigo-400">Paul</span>Decalf
            </h3>
            <p className="text-gray-400 mb-6">
              Développeur freelance Fullstack PHP/Symfony basé en Île-de-France. Spécialisé dans la création d'applications web robustes et évolutives.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/pauldecalf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/paul-decalf-a91a9b1b0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.malt.fr/profile/pauldecalf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Malt"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  À propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Projets
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Offres
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('blog')} className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Prestations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Création de site web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Développement d'application sur mesure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Optimisation SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Maintenance & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Développement d'API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Conception de base de données
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Politique des cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© {currentYear} Paul Decalf. Tous droits réservés.</p>
            <p className="mt-2">
              Développeur freelance PHP/Symfony basé en Île-de-France
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
