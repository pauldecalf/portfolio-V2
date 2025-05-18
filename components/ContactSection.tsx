'use client'

import React, { useState } from 'react'
import { Button } from './Button'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
    loading?: boolean
  }>({
    submitted: false,
    success: false,
    message: '',
    loading: false,
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires.',
      })
      return
    }

    // Indication de chargement
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Envoi en cours...',
      loading: true,
    })

    try {
      // Utilisation de Formspree pour l'envoi
      const response = await fetch('https://formspree.io/f/xyzworel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Formulaire de contact Portfolio',
          message: formData.message
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Succès
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Merci ! Votre message a bien été envoyé.',
          loading: false,
        })

        // Réinitialisation du formulaire
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        // Erreur
        setFormStatus({
          submitted: true,
          success: false,
          message: data.message || 'Une erreur est survenue lors de l\'envoi.',
          loading: false,
        })
      }
    } catch (error) {
      // Erreur de réseau ou autre
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Une erreur de connexion est survenue. Veuillez réessayer plus tard.',
        loading: false,
      })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discutons de votre prochain projet ensemble
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
              Me contacter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Vous avez un projet en tête ? Besoin d'aide pour votre site ou application ? Remplissez le formulaire et je vous répondrai dans les plus brefs délais.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:pauldecalf@outlook.fr"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    pauldecalf@outlook.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <a
                    href="tel:+33612345678"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    +33 6 25 26 73 11
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localisation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>
            {formStatus.submitted && (
              <div
                className={`p-4 mb-6 rounded-md ${
                  formStatus.success ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  disabled={formStatus.loading}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  disabled={formStatus.loading}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Objet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  disabled={formStatus.loading}
                >
                  <option value="">Choisir un sujet</option>
                  <option value="Création de site web">Création de site web</option>
                  <option value="Développement d'application sur mesure">Développement d'application sur mesure</option>
                  <option value="Optimisation SEO">Optimisation SEO</option>
                  <option value="Maintenance et support">Maintenance et support</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  disabled={formStatus.loading}
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-full flex items-center justify-center"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
