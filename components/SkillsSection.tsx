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
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          level: 95,
        },
        {
          name: 'Symfony',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
          level: 90,
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          level: 85,
        },
        {
          name: 'PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          level: 80,
        },
        {
          name: 'Redis',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          level: 75,
        },
        {
          name: 'REST API',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          level: 85,
        },
      ],
    },
    {
      title: 'Front-end',
      skills: [
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          level: 80,
        },
        {
          name: 'HTML5',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          level: 90,
        },
        {
          name: 'CSS3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          level: 85,
        },
        {
          name: 'Vue.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          level: 75,
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
          level: 85,
        },
        {
          name: 'Tailwind CSS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          level: 80,
        },
      ],
    },
    {
      title: 'DevOps',
      skills: [
        {
          name: 'Docker',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          level: 80,
        },
        {
          name: 'Git',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          level: 90,
        },
        {
          name: 'CI/CD',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
          level: 75,
        },
        {
          name: 'Linux',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          level: 85,
        },
        {
          name: 'AWS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          level: 70,
        },
        {
          name: 'Nginx',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
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
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
