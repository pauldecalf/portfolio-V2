'use client'
import React from 'react'

interface SkillCategory {
  title: string
  skills: Skill[]
}
interface Skill {
  name: string
  icon: string
  level?: number
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Back-end',
      skills: [
        {
          name: 'PHP',
          icon: '/images/icons/php-original.svg',
          level: 95,
        },
        {
          name: 'Symfony',
          icon: '/images/icons/symfony-original.svg',
          level: 90,
        },
        {
          name: 'MySQL',
          icon: '/images/icons/mysql-original.svg',
          level: 85,
        },
        {
          name: 'PostgreSQL',
          icon: '/images/icons/postgresql-original.svg',
          level: 80,
        },
        {
          name: 'Redis',
          icon: '/images/icons/redis-original.svg',
          level: 75,
        },
        {
          name: 'REST API',
          icon: '/images/icons/nodejs-original.svg',
          level: 85,
        },
      ],
    },
    {
      title: 'Front-end',
      skills: [
        {
          name: 'JavaScript',
          icon: '/images/icons/javascript-original.svg',
          level: 80,
        },
        {
          name: 'HTML5',
          icon: '/images/icons/html5-original.svg',
          level: 90,
        },
        {
          name: 'CSS3',
          icon: '/images/icons/css3-original.svg',
          level: 85,
        },
        {
          name: 'Vue.js',
          icon: '/images/icons/vuejs-original.svg',
          level: 75,
        },
        {
          name: 'Bootstrap',
          icon: '/images/icons/bootstrap-original.svg',
          level: 85,
        },
        {
          name: 'Tailwind CSS',
          icon: '/images/icons/tailwind.svg',
          level: 80,
        },
      ],
    },
    {
      title: 'DevOps',
      skills: [
        {
          name: 'Docker',
          icon: '/images/icons/docker-original.svg',
          level: 80,
        },
        {
          name: 'Git',
          icon: '/images/icons/git-original.svg',
          level: 90,
        },
        {
          name: 'CI/CD',
          icon: '/images/icons/jenkins-original.svg',
          level: 75,
        },
        {
          name: 'Linux',
          icon: '/images/icons/linux-original.svg',
          level: 85,
        },
        {
          name: 'AWS',
          icon: '/images/icons/1583149.webp',
          level: 70,
        },
        {
          name: 'Nginx',
          icon: '/images/icons/nginx-original.svg',
          level: 75,
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compétences & Technologies
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ma boîte à outils technique pour créer des applications web performantes
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-6 h-6 mr-3"
                        />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
