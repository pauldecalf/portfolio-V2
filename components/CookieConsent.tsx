'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Définir le type pour window.dataLayer et gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookie-consent');
    
    // Initialisation de gtag de façon passive (pas de tracking)
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args) {
      if (consent === 'accepted') {
        window.dataLayer.push(arguments);
      } else if (args[0] === 'consent') {
        // Permet toujours les commandes de consentement
        window.dataLayer.push(arguments);
      }
      // Ignore les autres commandes si le consentement n'est pas donné
    };
    
    // Configure le consentement par défaut: refusé
    if (!consent) {
      window.gtag('consent', 'default', {
        'analytics_storage': 'denied'
      });
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Si déjà accepté, active le suivi
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Active le suivi Google Analytics
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    
    // Recharge la page pour s'assurer que GA commence à tracker correctement
    window.location.reload();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    
    // Désactive explicitement le suivi
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 pr-8">
          <p className="text-sm">
            Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. 
            Vous pouvez accepter tous les cookies, ou cliquer sur "Refuser" pour ne conserver que les cookies essentiels.
            <a href="/legal/cookies" className="text-indigo-400 hover:text-indigo-300 ml-1">
              En savoir plus
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-sm"
          >
            Refuser
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded transition-colors text-sm"
          >
            Accepter
          </button>
        </div>
        <button
          onClick={declineCookies}
          className="absolute top-2 right-2 md:hidden text-gray-400 hover:text-white"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
} 