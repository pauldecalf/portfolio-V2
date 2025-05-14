import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Paul Decalf - Développeur Fullstack PHP/Symfony',
    short_name: 'Paul Decalf',
    description: 'Développeur freelance Fullstack PHP/Symfony basé en Île-de-France. Spécialisé dans la création d\'applications web robustes et évolutives.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 