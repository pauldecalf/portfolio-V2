'use client'

import { useEffect } from 'react'

interface JsonLdProps {
  data: Record<string, any>
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  useEffect(() => {
    // Rien à faire côté client, le script est déjà injecté dans le HTML
  }, [])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const PersonSchema = () => {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Paul Decalf',
    jobTitle: 'Développeur Fullstack PHP/Symfony',
    description: 'Développeur freelance PHP/Symfony basé en Île-de-France. Spécialisé dans la création d\'applications web robustes et évolutives.',
    url: 'https://pauldecalf.fr',
    sameAs: [
      'https://github.com/pauldecalf/',
      'https://www.linkedin.com/in/paul-decalf-a91a9b1b0',
      'https://www.malt.fr/profile/pauldecalf'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Île-de-France',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR'
    }
  }

  return <JsonLd data={personData} />
}

export const WebsiteSchema = () => {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Paul Decalf - Développeur Fullstack PHP/Symfony',
    url: 'https://pauldecalf.fr',
    description: 'Développeur freelance PHP/Symfony basé en Île-de-France. Spécialisé dans la création d\'applications web robustes et évolutives.',
    author: {
      '@type': 'Person',
      name: 'Paul Decalf'
    }
  }

  return <JsonLd data={websiteData} />
}

export const OrganizationSchema = () => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Paul Decalf',
    url: 'https://pauldecalf.fr',
    logo: 'https://pauldecalf.fr/logo.png',
    sameAs: [
      'https://github.com/pauldecalf/',
      'https://www.linkedin.com/in/paul-decalf-a91a9b1b0',
      'https://www.malt.fr/profile/pauldecalf'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-6-12-34-56-78',
      email: 'contact@pauldecalf.com',
      contactType: 'customer service'
    }
  }

  return <JsonLd data={organizationData} />
}