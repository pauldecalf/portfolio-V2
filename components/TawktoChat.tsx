'use client';

import { useEffect } from 'react';

// Ajouter la déclaration pour Tawk_API sur l'objet window
declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

export default function TawktoChat() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    (function() {
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      
      if (s0 && s0.parentNode) {
        s1.async = true;
        s1.src = 'https://embed.tawk.to/682cf19ab3c3dc190a70a11e/1irnovhk9';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null; // Ce composant ne rend rien, il injecte juste le script
} 