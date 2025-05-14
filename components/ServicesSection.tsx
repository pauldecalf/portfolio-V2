'use client'
import React from 'react'
import { Button } from './Button'
import { Code, Cog, Globe, Wrench } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  priceRange: string
  deliveryTime: string
  features: string[]
}

export const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const services: Service[] = [
    {
      icon: <Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Création de site web',
      description:
        'Sites web sur mesure, adaptés à votre image de marque et vos objectifs business.',
      priceRange: '2 000 € - 5 000 €',
      deliveryTime: '4 à 6 semaines',
      features: [
        'Design responsive tous supports',
        'Optimisation SEO',
        'Système de gestion de contenu (CMS)',
        'Intégration analytics',
        'Optimisation des performances',
      ],
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Développement d’application sur mesure',
      description:
        'Applications web personnalisées répondant à vos besoins métier spécifiques.',
      priceRange: '5 000 € - 15 000 €',
      deliveryTime: '8 à 12 semaines',
      features: [
        'Développement de fonctionnalités spécifiques',
        'Conception et gestion de base de données',
        'Intégration d’API',
        'Gestion des utilisateurs et rôles',
        'Tests automatisés',
      ],
    },
    {
      icon: <Cog className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Optimisation SEO',
      description:
        'Améliorez la visibilité et le positionnement de votre site dans les moteurs de recherche.',
      priceRange: '800 € - 2 000 €',
      deliveryTime: '2 à 3 semaines',
      features: [
        'Audit SEO technique',
        'Optimisation on-page',
        'Stratégie de contenu',
        'Amélioration des performances',
        'Rapports mensuels',
      ],
    },
    {
      icon: <Wrench className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Maintenance & support',
      description:
        'Assurez la stabilité et la sécurité de votre site ou application avec un suivi régulier.',
      priceRange: '300 € - 1 000 €/mois',
      deliveryTime: 'En continu',
      features: [
        'Mises à jour de sécurité régulières',
        'Correction de bugs et assistance',
        'Suivi des performances',
        'Mises à jour de contenu',
        'Support technique',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prestations</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Services professionnels de développement web adaptés à vos besoins
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <div className="flex justify-between mb-6">
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Tarif
                  </span>
                  <span className="font-semibold">{service.priceRange}</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Délais
                  </span>
                  <span className="font-semibold">{service.deliveryTime}</span>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                      •
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={scrollToContact}
              >
                Demander un devis
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
