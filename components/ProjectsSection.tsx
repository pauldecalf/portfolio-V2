'use client'
import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from './Button'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false)

  const projects: Project[] = [
    {
      "id": 1,
      "title": "Bakougie – Boutique en ligne de bougies artisanales",
      "description": "Bakougie est une boutique en ligne spécialisée dans la vente de bougies artisanales parfumées, fondants, suspensions et accessoires. La plateforme propose une expérience utilisateur fluide avec gestion des produits, panier, intégration de paiement sécurisé et suivi des commandes.",
      "image": "/images/bakougie.png",
      "technologies": [
        "Shopify",
        "Liquid",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "githubUrl": "",
      "liveUrl": "https://bakougie.fr",
      "featured": true
    },    
    {
      "id": 2,
      "title": "WebCréation – Agence de création de sites web",
      "description": "WebCréation est une agence spécialisée dans la conception de sites internet professionnels sur mesure pour PME, indépendants et artisans. Elle propose des services complets incluant la création de sites vitrines, e-commerce, le référencement SEO, la refonte de sites existants, ainsi que la maintenance et l'assistance technique.",
      "image": "/images/webcreation.png",
      "technologies": [
        "Next.js",
        "React",
        "Vercel",
        "Tailwind CSS",
        "Node.js",
        "SEO"
      ],
      "githubUrl": "",
      "liveUrl": "https://webcreation.pauldecalf.fr/",
      "featured": true
    },
    {
      "id": 3,
      "title": "Smoozy – Application pour familles recomposées",
      "description": "Smoozy est une application web pensée pour améliorer le quotidien des familles recomposées. Elle permet de créer des profils pour chaque membre, suivre les humeurs via un journal partagé, organiser les tâches du quotidien de manière ludique, et faciliter la communication familiale grâce à une interface intuitive.",
      "image": "/images/smoozy.png",
      "technologies": [
        "Symfony",
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap"
      ],
      "githubUrl": "",
      "liveUrl": "https://smoozy.pauldecalf.fr/",
      "featured": true
    },
    {
      "id": 4,
      "title": "Le MOI sans IA – Campagne de sensibilisation à l'usage de l'IA",
      "description": "Le MOI sans IA est un site de sensibilisation visant à encourager une utilisation raisonnée des intelligences artificielles dans la vie quotidienne. Il met en lumière les risques d'une dépendance excessive aux outils numériques et propose des ressources pour aider les utilisateurs à retrouver un équilibre technologique.",
      "image": "/images/le-moi-sans-ia.png",
      "technologies": [
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "Docker"
      ],
      "githubUrl": "",
      "liveUrl": "https://moi-sans-ia.pauldecalf.fr/",
      "featured": false
    },
    {
      "id": 4,
      "title": "Jules et son Atelier – Réparation de smartphones et tablettes",
      "description": "Jules et son Atelier est un service de réparation spécialisé dans les smartphones et tablettes, offrant des solutions rapides et efficaces pour divers problèmes matériels et logiciels. Le site présente les services disponibles, les tarifs, et permet aux clients de prendre rendez-vous en ligne.",
      "image": "/images/jsa.png",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Docker"
      ],
      "githubUrl": "",
      "liveUrl": "https://jsa.pauldecalf.fr/",
      "featured": false
    }
    ,
    {
      id: 6,
      title: 'Plateforme de Formation',
      description:
        'Site d’apprentissage en ligne avec vidéos, quiz et suivi de progression des étudiants.',
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Symfony', 'PHP', 'MySQL', 'JavaScript', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
  ]

  const visibleProjects = showAll
    ? projects
    : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aperçu de mes projets récents et réalisations clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium"
                    >
                      <Github size={16} className="mr-1" />
                      Code source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Démo en ligne
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="text-center mt-12">
            <Button variant="secondary" onClick={() => setShowAll(true)}>
              Voir tous les projets
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
