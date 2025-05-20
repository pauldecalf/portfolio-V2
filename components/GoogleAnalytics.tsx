'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Définir le type pour window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Vérifie le consentement aux cookies
    const storedConsent = localStorage.getItem('cookie-consent');
    setConsent(storedConsent);

    // Écoute les changements de consentement
    const handleConsentChange = () => {
      setConsent(localStorage.getItem('cookie-consent'));
    };

    window.addEventListener('storage', handleConsentChange);
    return () => window.removeEventListener('storage', handleConsentChange);
  }, []);

  // Si l'utilisateur a refusé ou n'a pas encore répondu, ne pas charger GA
  if (consent !== 'accepted') {
    return null;
  }

  // Sinon, charger GA
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HRQQHSY63H"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HRQQHSY63H');
        `}
      </Script>
    </>
  );
} 