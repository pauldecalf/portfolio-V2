import React from 'react';

export const metadata = {
  title: "Politique de Confidentialité | Paul Decalf",
  description: "Découvrez comment Paul Decalf protège vos données personnelles conformément au RGPD. Informations sur la collecte, l'utilisation et vos droits.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations</h2>
        <p className="mb-4">
          Nous collectons uniquement les données personnelles strictement nécessaires, que vous nous fournissez directement, notamment lorsque vous :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Remplissez le formulaire de contact</li>
          <li>Échangez avec nous par e-mail ou téléphone</li>
          <li>Utilisez nos services de création ou d'audit de site web</li>
        </ul>
        <p className="mb-4">
          Les données collectées peuvent inclure : votre nom, votre adresse email, votre numéro de téléphone et les informations nécessaires à la bonne exécution de nos prestations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Utilisation des informations</h2>
        <p className="mb-4">
          Les données personnelles sont utilisées uniquement dans le cadre de :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>La gestion des demandes de contact</li>
          <li>La réalisation de devis ou prestations</li>
          <li>Le suivi client et la relation commerciale</li>
        </ul>
        <p className="mb-4">
          Aucune de vos données n'est vendue ni transmise à des tiers à des fins commerciales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Protection des données</h2>
        <p className="mb-4">
          Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires afin de garantir la sécurité et la confidentialité de vos données personnelles.
        </p>
        <p className="mb-4">
          Les données sont conservées sur des serveurs sécurisés et ne sont accessibles qu'aux personnes habilitées.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Vos droits</h2>
        <p className="mb-4">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Droit d'accès à vos données personnelles</li>
          <li>Droit de rectification en cas d'erreur</li>
          <li>Droit à l'effacement de vos données</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit d'opposition ou de limitation du traitement</li>
        </ul>
        <p className="mb-4">
          Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@pauldecalf.fr</strong>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
        <p className="mb-4">
          Ce site utilise uniquement des cookies techniques et de mesure d'audience. Pour plus d'informations, veuillez consulter notre <a href="/legal/cookies" className="underline text-blue-600">Politique de cookies</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Modifications</h2>
        <p className="mb-4">
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour.
        </p>
        <p className="mb-4 italic">Dernière mise à jour : mai 2025</p>
      </section>
    </div>
  );
}
