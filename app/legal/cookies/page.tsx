import React from 'react';

export const metadata = {
  title: "Politique de Cookies | Paul Decalf",
  description: "Consultez la politique d’utilisation des cookies sur le site de Paul Decalf, développeur web indépendant.",
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Politique de gestion des cookies</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Définition d’un cookie</h2>
        <p className="mb-4">
          Un cookie est un fichier texte déposé sur le disque dur de votre terminal (ordinateur, mobile, tablette) lors de la consultation d’un site internet. Il permet à ce site de reconnaître votre appareil et de conserver certaines informations relatives à vos préférences ou à votre historique de navigation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Finalités des cookies utilisés</h2>
        <p className="mb-4">
          Nous utilisons des cookies uniquement dans un cadre strictement technique et de mesure d’audience, afin de garantir le bon fonctionnement du site et de suivre son utilisation de manière anonyme.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Cookies strictement nécessaires :</strong> Indispensables au bon fonctionnement technique du site. Leur utilisation ne nécessite pas de consentement préalable.
          </li>
          <li>
            <strong>Cookies de mesure d’audience :</strong> Utilisés via Google Search Console pour suivre la performance du site sans collecte de données personnelles.
          </li>
          <li>
            <strong>Cookies de fonctionnalité :</strong> Mémorisent certaines préférences pour améliorer votre expérience (ex. : langue, interface).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Consentement et durée de conservation</h2>
        <p className="mb-4">
          Conformément à la réglementation en vigueur, les cookies soumis à consentement ne sont déposés qu’après votre acceptation explicite via notre bandeau de gestion des cookies.
        </p>
        <p className="mb-4">
          La durée de validité de ce consentement est de 6 mois maximum. Les cookies eux-mêmes sont conservés pour une durée maximale de 13 mois à compter de leur dépôt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Gestion des cookies</h2>
        <p className="mb-4">
          Vous pouvez à tout moment accepter, refuser ou paramétrer les cookies via le bandeau de gestion présent sur le site ou en configurant votre navigateur. Pour plus d’informations, consultez les rubriques d’aide de votre navigateur.
        </p>
        <p className="mb-4">
          Attention : désactiver certains cookies peut affecter votre expérience utilisateur et limiter l’accès à certaines fonctionnalités du site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies tiers</h2>
        <p className="mb-4">
          Nous utilisons Google Search Console à des fins d’analyse de performance SEO du site. Cet outil ne collecte pas de données personnelles et ne dépose pas de cookies sur votre navigateur.
        </p>
        <p className="mb-4">
          Le formulaire de contact ne dépose aucun cookie et ne fait appel à aucun service tiers. Vos données sont uniquement utilisées pour répondre à vos messages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Vos droits</h2>
        <p className="mb-4">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, d’opposition, d’effacement et de limitation du traitement de vos données personnelles. Pour exercer vos droits, veuillez nous contacter à l’adresse suivante : <strong>pauldecalf@outlook.fr</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
        <p className="mb-4">
          Pour toute question ou demande concernant notre politique de cookies, vous pouvez nous contacter à l’adresse suivante : <strong>pauldecalf@outlook.fr</strong>.
        </p>
      </section>
    </div>
  );
}
