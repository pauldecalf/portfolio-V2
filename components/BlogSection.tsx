'use client'

import React, { useState } from 'react'
import { Calendar, Clock, Tag } from 'lucide-react'
import { Button } from './Button'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
}

export const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'tech', name: 'Tech' },
    { id: 'tutorials', name: 'Tutoriels' },
    { id: 'freelance', name: 'Vie de freelance' },
  ]

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Créer des API scalables avec Symfony',
      excerpt:
        'Apprenez à construire des API performantes et maintenables avec Symfony et les bonnes pratiques.',
      date: '15 juin 2023',
      readTime: '8 min de lecture',
      category: 'tech',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'De salarié à freelance : mon parcours',
      excerpt:
        'Retour d’expérience sur la transition entre CDI et travail indépendant, les défis et bénéfices.',
      date: '23 mai 2023',
      readTime: '12 min de lecture',
      category: 'freelance',
      image:
        'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Configurer un environnement Docker pour Symfony',
      excerpt:
        'Un guide étape par étape pour mettre en place un environnement de développement Symfony avec Docker.',
      date: '10 avril 2023',
      readTime: '10 min de lecture',
      category: 'tutorials',
      image:
        'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Optimiser les performances SQL en PHP',
      excerpt:
        'Techniques et bonnes pratiques pour améliorer les performances des bases de données dans vos projets PHP.',
      date: '5 mars 2023',
      readTime: '9 min de lecture',
      category: 'tech',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Gérer les attentes des clients en freelance',
      excerpt:
        'Conseils pour poser un cadre clair avec vos clients et entretenir une bonne relation tout au long du projet.',
      date: '18 février 2023',
      readTime: '7 min de lecture',
      category: 'freelance',
      image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Créer des commandes Symfony sur mesure',
      excerpt:
        'Comment automatiser des tâches répétitives grâce à des commandes CLI personnalisées dans Symfony.',
      date: '24 janvier 2023',
      readTime: '6 min de lecture',
      category: 'tutorials',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tutoriels, retours d’expérience et conseils sur le développement web et la vie de freelance
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 mr-4">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <Tag size={14} className="mr-1" />
                    {
                      categories.find(c => c.id === post.category)?.name ??
                      post.category.charAt(0).toUpperCase() + post.category.slice(1)
                    }
                  </span>
                  <Button variant="secondary" size="sm">
                    Lire l’article
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bouton global */}
        <div className="text-center mt-12">
          <Button variant="outline">Voir tous les articles</Button>
        </div>
      </div>
    </section>
  )
}
