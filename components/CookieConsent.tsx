'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Définir le type pour window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Active Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-HRQQHSY63H');
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
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