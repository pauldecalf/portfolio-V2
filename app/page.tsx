'use client'
import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ServicesSection } from '../components/ServicesSection'
import { BlogSection } from '../components/BlogSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { ThemeProvider } from '../components/context/ThemeContext'
import { PersonSchema, WebsiteSchema, OrganizationSchema } from './components/JsonLd'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <PersonSchema />
        <WebsiteSchema />
        <OrganizationSchema />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <BlogSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
