import React from 'react';

export const metadata = {
  title: "Mentions Légales | Paul Decalf",
  description: "Informations légales du site pauldecalf.fr, incluant l'identité de l'éditeur, l'hébergement, la propriété intellectuelle et la protection des données.",
};

export default function LegalNotice() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
        <div className="mb-4">
          <p><strong>Nom :</strong> Paul Felicien Decalf</p>
          <p><strong>Statut :</strong> Entrepreneur individuel (auto-entrepreneur)</p>
          <p><strong>SIRET :</strong> 928 497 932 00014</p>
          <p><strong>Code APE :</strong> 6201Z — Programmation informatique</p>
          <p><strong>Adresse du siège :</strong> 3 rue Jean Ferrat, 78690 Les Essarts-le-Roi, France</p>
          <p><strong>Nom commercial :</strong> Decalf</p>
          <p><strong>Responsable de la publication :</strong> Paul Decalf</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Contact</h2>
        <div className="mb-4">
          <p><strong>Email :</strong> pauldecalf@outlook.fr</p>
          <p><strong>Téléphone :</strong> 06 25 26 73 11</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
        <div className="mb-4">
          <p><strong>Hébergeur :</strong> Hostinger International Ltd.</p>
          <p><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
          <p><strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">www.hostinger.fr</a></p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
        <p className="mb-4">
          Le contenu du site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Paul Decalf, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, est strictement interdite sans l’accord préalable écrit de l’auteur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Données personnelles</h2>
        <p className="mb-4">
          Les informations collectées via le formulaire de contact sont utilisées uniquement dans le cadre de votre demande. Conformément au RGPD, vous pouvez exercer vos droits (accès, rectification, suppression) en envoyant un email à <strong>pauldecalf@outlook.fr</strong>.
        </p>
        <p className="mb-4">
          Aucune donnée n’est transmise à des tiers à des fins commerciales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
        <p className="mb-4">
          Ce site utilise uniquement des cookies techniques ou de mesure d’audience anonymes. Pour plus d’informations, consultez notre <a href="/legal/cookies" className="underline text-blue-600">Politique de cookies</a>.
        </p>
      </section>
    </div>
  );
}
