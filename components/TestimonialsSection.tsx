'use client'
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  rating: number
  image?: string
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sophie Martin',
      position: 'CEO',
      company: 'TechSolutions Inc.',
      content:
        'Paul a livré une plateforme e-commerce exceptionnelle qui a dépassé nos attentes. Son sens du détail et son expertise technique ont fait de ce projet une réussite. Le site est rapide, sécurisé, et nos clients adorent l’expérience utilisateur.',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 2,
      name: 'Thomas Laurent',
      position: 'Directeur Marketing',
      company: 'GrowthMedia',
      content:
        'Travailler avec Paul a été un réel plaisir du début à la fin. Il a parfaitement compris nos besoins et a développé un CRM qui a transformé notre gestion client. Je le recommande vivement à toute entreprise ayant besoin de développement sur mesure.',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 3,
      name: 'Marie Dubois',
      position: 'Fondatrice',
      company: 'PropertyHub',
      content:
        'Paul a développé notre portail immobilier avec beaucoup de professionnalisme. Les fonctionnalités de recherche et l’interface sont exactement ce que nous voulions. Il a été réactif, professionnel, et a livré dans les délais et le budget.',
      rating: 4,
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 4,
      name: 'Alexandre Bernard',
      position: 'CTO',
      company: 'HealthConnect',
      content:
        'Le système de réservation développé par Paul pour nos cliniques a considérablement simplifié nos opérations. Son expertise technique et sa capacité à résoudre les problèmes sont remarquables. Nous continuons à collaborer avec lui.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Claire Moreau',
      position: 'Rédactrice en chef',
      company: 'Digital Publishing Co.',
      content:
        'Paul a créé un CMS sur mesure parfaitement adapté à notre organisation éditoriale. Le système est intuitif, puissant, et a grandement amélioré notre gestion de contenu. Il a été un véritable partenaire tout au long du projet.',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  const updateVisibleCount = () => {
    if (window.innerWidth < 768) {
      setVisibleCount(1)
    } else if (window.innerWidth < 1024) {
      setVisibleCount(2)
    } else {
      setVisibleCount(3)
    }
  }

  useEffect(() => {
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (testimonials.length - visibleCount + 1),
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1,
    )
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount,
  )

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Témoignages clients
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ce que mes clients disent de notre collaboration
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(0%)`,
                display: 'grid',
                gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
                gap: '2rem',
              }}
            >
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow focus:outline-none cursor-pointer"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft
              size={24}
              className="text-gray-600 dark:text-gray-300"
            />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow focus:outline-none cursor-pointer"
            aria-label="Témoignage suivant"
          >
            <ChevronRight
              size={24}
              className="text-gray-600 dark:text-gray-300"
            />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials
            .slice(0, testimonials.length - visibleCount + 1)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-2.5 h-2.5 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? 'bg-indigo-600 dark:bg-indigo-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
