'use client'
import React from 'react'
import { Check, Coffee, HeartHandshake, Rocket } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionné par le développement web, j'accompagne les entreprises dans la création de solutions performantes, sur mesure et durables.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <img
              src="/images/photo-1571171637578-41bc2dd41cd2.avif"
              alt="Développeur en train de travailler"
              className="rounded-lg shadow-lg w-full object-cover h-96"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
              Développeur Fullstack Freelance – PHP / Symfony
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Fort de plusieurs années d'expérience en développement web, je suis spécialisé dans la création d'applications robustes, évolutives et performantes grâce au framework Symfony. Mon parcours m'a permis de collaborer avec des PME, startups et indépendants pour transformer leurs idées en projets concrets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              En tant que freelance, je privilégie la qualité, la communication claire et l'accompagnement personnalisé. Chaque projet est une opportunité de livrer un produit fiable, maintenable et aligné sur les objectifs de mes clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Code de qualité</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lisible, maintenable et durable
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Applications rapides et optimisées
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Accompagnement</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Proximité et disponibilité tout au long du projet
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Engagement</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Investi dans la réussite de chaque mission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
